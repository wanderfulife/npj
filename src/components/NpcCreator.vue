// src/components/NpcCreator.vue
<template>
  <div>
    <h1>Creer TON PNJ</h1>
    <form @submit.prevent="createNpc">
      <input v-model="npcName" placeholder="Prénom du PNJ" required />
      <button type="submit">Creer PNJ</button>
    </form>
    <div v-if="npcList.length > 0">
      <h2>PNJ List</h2>
      <ul>
        <li v-for="(npc, index) in npcList" :key="index">
          {{ npc.name }} - Created:
          {{ new Date(npc.createdAt).toLocaleString() }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No PNJs created yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// Using Vue 3 Composition API with <script setup>
const npcName = ref("");
interface NPC {
  name: string;
  createdAt: number | string;
}

const npcList = ref<NPC[]>([]);

const createNpc = async () => {
  const newNpc: NPC = {
    name: npcName.value,
    createdAt: Date.now(),
  };
  npcList.value.push(newNpc);
  await addDoc(collection(db, "npcs"), newNpc);
  npcName.value = ""; // Reset the input field
};
</script>
