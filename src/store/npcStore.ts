// src/store/npcStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNpcStore = defineStore('npcStore', () => {
  const npcs = ref<any[]>([]); // Store NPCs
  const user = ref<any>(null); // User data

  function addNpc(npc: any) {
    npcs.value.push(npc);
  }

  return { npcs, user, addNpc };
});
