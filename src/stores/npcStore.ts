// In stores/npcStore.ts
import { defineStore } from 'pinia';

export const useNpcStore = defineStore('npcStore', {
  state: () => ({
    npcs: [] as Array<{ name: string, createdAt: Date }>
  }),
  actions: {
    addNpc(npc: { name: string }) {
      this.npcs.push({ ...npc, createdAt: new Date() });
    }
  },
  getters: {
    getLastCreatedNpc: (state) => {
      return state.npcs.length > 0 
        ? state.npcs.reduce((latest, current) => 
            current.createdAt > latest.createdAt ? current : latest
          ) 
        : null;
    }
  }
});