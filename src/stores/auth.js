import { defineStore } from 'pinia';
// import axios from 'axios'; // Добавьте axios для запросов к API

export const useAuthStore = defineStore('auth', {
  state: () => ({
        token: localStorage.getItem('token') || "a",
        user: {name:"Kolya"},
  }),
  actions: {
    async login(credentials) {
      try {
        // const response = await axios.post('/api/login', credentials); // Замените на URL вашего API
        // this.setToken(response.data.token);
        // this.setUser(response.data.user);

        this.setToken('aaa');
        this.setUser('test user');


      } catch (error) {
        console.error('Ошибка авторизации:', error);
        // Обработайте ошибку авторизации
      }
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    clearToken() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
    async setUser(userData) {
      this.user = userData;
    },
  },
});