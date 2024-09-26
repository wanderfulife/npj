<template>
  <div class="login-container">
    <h1>{{ isLogin ? 'Login' : 'Sign Up' }}</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="email" type="email" placeholder="Email (@student.42.fr)" required pattern=".*@student\.42\.fr$" />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit" class="submit-btn">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
    </form>
    <p>
      {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
      <a href="#" @click.prevent="toggleMode">
        {{ isLogin ? 'Sign Up' : 'Login' }}
      </a>
    </p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLogin = ref(true);
const errorMessage = ref('');

const toggleMode = () => {
  isLogin.value = !isLogin.value;
  errorMessage.value = '';
};

const handleSubmit = async () => {
  errorMessage.value = '';
  if (!isLogin.value && !email.value.endsWith('@student.42.fr')) {
    errorMessage.value = 'Only @student.42.fr email addresses are allowed to sign up.';
    return;
  }
  try {
    if (isLogin.value) {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } else {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
    }
    router.push('/home');
  } catch (error: any) {
    console.error('Authentication error:', error);
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2a2a2a;
  border-radius: 8px;
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, .submit-btn {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #333;
  color: #ffffff;
}

.submit-btn {
  background-color: #3498db;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.error-message {
  color: #e74c3c;
  margin-top: 10px;
}
</style>