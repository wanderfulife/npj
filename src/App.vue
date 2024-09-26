<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/map">Map</router-link> |
      <router-link to="/report">Report</router-link>
      <router-link to="/" class="login-btn">Loggin / Sign Up</router-link>
    </nav>
    <router-view />  <!-- This will display the active route's component -->
  </div>
</template>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
}

nav a:hover {
  color: #ffcc00;
}

nav a.active {
  color: #ffcc00;
}

.login-btn {
  background-color: #ffcc00;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.login-btn:hover {
  background-color: #ffd633;
}
</style>
