<template>
  <div class="login-container">
    <div class="login-box">
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
  </div>
</template>

<script setup lang="ts">
// ... (previous script content remains the same)
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
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(52, 152, 219, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
  }
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

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #2980b9;
  text-decoration: underline;
}

.error-message {
  color: var(--accent-color);
  margin-top: 10px;
}
</style>