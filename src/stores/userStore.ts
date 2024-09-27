import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    username: '',
  }),
  actions: {
    login(username: string) {
      this.isAuthenticated = true;
      this.username = username;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
    },
  },
});