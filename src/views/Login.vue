<template>
    <div class="login-container">
      <h1>Login / Sign Up</h1>
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
      </form>
      <p>
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <a href="#" @click.prevent="toggleMode">
          {{ isLogin ? 'Sign Up' : 'Login' }}
        </a>
      </p>
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

  const toggleMode = () => {
    isLogin.value = !isLogin.value;
  };

  const handleSubmit = async () => {
    try {
      if (isLogin.value) {
        await signInWithEmailAndPassword(auth, email.value, password.value);
      } else {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
      }
      router.push('/home');
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle error (e.g., show error message to user)
    }
  };
  </script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, button {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #ffcc00;
  color: #333;
  cursor: pointer;
}

button:hover {
  background-color: #ffd633;
}
</style>