import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    username: '',
    email: '', // Add this line
  }),
  actions: {
    login(username: string, email: string) { // Update this line
      this.isAuthenticated = true;
      this.username = username;
      this.email = email; // Add this line
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
      this.email = ''; // Add this line
    },
  },
});