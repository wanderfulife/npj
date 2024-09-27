<template>
  <div class="profile-container">
    <h1>Profile</h1>
    <div class="profile-info">
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email || 'Not provided' }}</p>
      <p><strong>Member since:</strong> {{ memberSince }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();

const memberSince = computed(() => {
  // Pour l'exemple, on utilise une date fixe. Dans une vraie application, 
  // cette date viendrait probablement du backend.
  return new Date().toLocaleDateString();
});
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2a2a2a;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
}

h1 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.profile-info {
  text-align: left;
}

.profile-info p {
  margin-bottom: 10px;
}

strong {
  color: var(--secondary-color);
}
</style>