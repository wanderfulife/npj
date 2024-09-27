<!-- login test -->
<!-- Username : joey | Password : jowander -->
<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit" autocomplete="off">
        <input 
          v-model="username" 
          type="text" 
          placeholder="Username" 
          required 
          autocomplete="off"
          :readonly="isInputReadOnly"
          @focus="isInputReadOnly = false"
        />
        <input 
          v-model="password" 
          type="password" 
          placeholder="Password" 
          required
          autocomplete="off"
          :readonly="isInputReadOnly"
          @focus="isInputReadOnly = false"
        />
        <button type="submit" class="submit-btn">Login</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const router = useRouter();
const userStore = useUserStore();

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const isInputReadOnly = ref(true);

const handleSubmit = async () => {
  errorMessage.value = '';
  if (username.value === 'joey' && password.value === 'jowander') {
    userStore.login(username.value, 'joey@example.com');
    router.push('/home');
  } else {
    errorMessage.value = 'Invalid credentials';
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.login-box {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, .submit-btn {
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #333;
  color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

.submit-btn {
  background-color: var(--primary-color);
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.error-message {
  color: var(--accent-color);
  margin-top: 10px;
}

/* Prevent autofill styles */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #ffffff !important;
}
</style>