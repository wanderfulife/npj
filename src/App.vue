<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/map" class="nav-link">Map</router-link>
      <router-link to="/report" class="nav-link">Report</router-link>
      <router-link to="/" class="login-btn">Login</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// No setup needed for now
</script>

<style>
:root {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --accent-color: #e74c3c;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  margin-right: 15px;
}

.nav-link:hover {
  color: var(--primary-color);
}

.login-btn {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2980b9;
}

h1, h2, h3 {
  color: var(--primary-color);
}

button {
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #27ae60;
}

input {
  background-color: #333;
  color: var(--text-color);
  border: 1px solid #444;
  padding: 8px;
  border-radius: 4px;
}
</style>
