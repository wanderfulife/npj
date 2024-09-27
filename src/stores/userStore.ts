import { defineStore } from 'pinia';

interface UserState {
  isAuthenticated: boolean;
  username: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
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