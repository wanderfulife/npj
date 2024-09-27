<template>
  <div class="map">
    <h1>NPC Interaction Map</h1>
    <div class="map-container">
      <div class="grid">
        <div v-for="i in 25" :key="i" class="grid-cell">
          <div v-if="hasNPC(i)" class="npc">NPC {{ i }}</div>
        </div>
      </div>
    </div>
    <div class="map-legend">
      <ul>
        <li><span class="legend-dot"></span> NPC Location</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const npcPositions = ref([2, 7, 13, 18, 24]); // Example NPC positions

const hasNPC = (cellNumber: number) => npcPositions.value.includes(cellNumber);
</script>

<style scoped>
.map {
  text-align: center;
}

.map-container {
  background-color: #2a2a2a;
  border-radius: 8px;
  margin: 2rem auto;
  padding: 20px;
  width: 80%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.grid-cell {
  aspect-ratio: 1;
  background-color: #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.grid-cell:hover {
  background-color: #444;
}

.npc {
  background-color: var(--secondary-color);
  border-radius: 50%;
  color: var(--bg-color);
  font-size: 0.8rem;
  height: 40px;
  line-height: 40px;
  width: 40px;
  animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-5px); }
}

.map-legend {
  background-color: #2a2a2a;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 300px;
  padding: 1rem;
  text-align: left;
}

.map-legend h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.map-legend ul {
  list-style-type: none;
  padding: 0;
}

.map-legend li {
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
}

.legend-dot {
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  margin-right: 10px;
  width: 10px;
}
</style>