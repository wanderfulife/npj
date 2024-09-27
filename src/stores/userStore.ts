import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    username: '',
    email: '',
  }),
  actions: {
    login(username: string, email: string) {
      this.isAuthenticated = true;
      this.username = username;
      this.email = email;
    },
    logout() {
      this.isAuthenticated = false;
      this.username = '';
      this.email = '';
    },
  },
});