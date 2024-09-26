<template>
  <div class="home">
    <h1>Welcome to NPC Creator</h1>
    <div class="content">
      <NpcCreator />
      <div class="info-panel">
        <h2>About NPC Creator</h2>
        <p>Create and manage your Non-Player Characters (NPCs) for your favorite role-playing games. Bring your world to life with unique, interactive characters!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NpcCreator from '../components/NpcCreator.vue';
</script>

<style scoped>
.home {
  text-align: center;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2rem;
}

.info-panel {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  max-width: 300px;
  text-align: left;
}

h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  color: var(--secondary-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-color);
  line-height: 1.6;
}
</style>