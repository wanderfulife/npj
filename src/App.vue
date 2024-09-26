<template>
  <div id="app">
    <nav>
      <router-link to="/home" class="logo-link">
        <img src="./assets/42-logo.png" alt="42 Logo" class="logo" />
      </router-link>
      <div class="nav-links">
        <router-link to="/map" class="nav-link">Map</router-link>
        <router-link to="/report" class="nav-link">Report</router-link>
        <router-link to="/" class="login-btn">Login</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// No setup needed
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

.logo-link {
  text-decoration: none;
}

.logo {
  width: 50px;
  height: auto;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  margin-right: 15px;
  transition: color 0.3s ease;
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
  transition: background-color 0.3s, transform 0.2s;
}

.login-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
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
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #27ae60;
  transform: scale(1.05);
}

input {
  background-color: #333;
  color: var(--text-color);
  border: 1px solid #444;
  padding: 8px;
  border-radius: 4px;
}
</style>