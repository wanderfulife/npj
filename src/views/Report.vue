<template>
  <div class="report">
    <h1>Daily NPC Report</h1>
    <div class="report-container">
      <div class="report-summary">
        <h2>Summary</h2>
        <p>Total NPCs: {{ totalNpcs }}</p>
        <p>Active Interactions: {{ activeInteractions }}</p>
      </div>
      <div class="report-list">
        <h2>NPC Activity</h2>
        <ul>
          <li v-for="(npc, index) in npcReports" :key="index" class="npc-report-item">
            <strong>{{ npc.name }}</strong>
            <p>{{ npc.activity }}</p>
            <span class="timestamp">{{ npc.timestamp }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const totalNpcs = ref(10);
const activeInteractions = ref(5);

const npcReports = ref([
  { name: 'NPC 1', activity: 'Completed a trade in the market', timestamp: '10:30 AM' },
  { name: 'NPC 2', activity: 'Started a new quest', timestamp: '11:45 AM' },
  { name: 'NPC 3', activity: 'Engaged in conversation with Player', timestamp: '1:15 PM' },
  // Add more mock data as needed
]);
</script>

<style scoped>
.report {
  text-align: center;
}

.report-container {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}

.report-summary, .report-list {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 1rem;
  text-align: left;
  width: 45%;
}

h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  color: var(--secondary-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.npc-report-item {
  border-bottom: 1px solid #444;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.npc-report-item:last-child {
  border-bottom: none;
}

.timestamp {
  color: #888;
  font-size: 0.8rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

strong {
  color: var(--primary-color);
}
</style>