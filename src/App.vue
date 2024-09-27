<template>
  <div id="app">
    <nav>
      <router-link to="/home" class="logo-link">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H100V100H75V25H50V75H25V25H0V0Z" fill="#8E44AD"/>
        </svg>
      </router-link>
      <div class="nav-links">
        <template v-if="userStore.isAuthenticated">
          <router-link to="/map" class="nav-link">Map</router-link>
          <router-link to="/report" class="nav-link">Report</router-link>
          <router-link to="/profile" class="nav-link">Profile</router-link>
          <span class="username">{{ userStore.username }}</span>
          <a href="#" @click.prevent="logout" class="logout-btn">Logout</a>
        </template>
        <router-link v-else to="/login" class="login-btn">Login</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from './stores/userStore';

const router = useRouter();
const userStore = useUserStore();

const logout = () => {
  userStore.logout();
  router.push('/login');
};
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

.logo-link svg {
  width: 50px;
  height: 50px;
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

.username {
  color: var(--primary-color);
  margin-right: 15px;
}

.logout-btn {
  background-color: var(--accent-color);
  color: var(--text-color);
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;
}

.logout-btn:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}
</style>