import { defineStore } from 'pinia';
import axios from 'axios';
import { USER } from '@/constants'

interface IUser {
  CompanyID: number,
  Email: string,
  ID: number,
  Name: string,
  Phone: string,
  Position: string,
  Roles: number,
  TgAccount: string
}

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    user: null as IUser | null,
    isUserLoaded: false
  }),

  actions: {
    getUserId() {
      const token = localStorage.getItem('authToken');
      if (!token) return null;
      try {
        const base64Payload = token.split('.')[1];
        const payload = atob(base64Payload);
        const parsedPayload = JSON.parse(payload);
        return parsedPayload.user_id || null;
      } catch (error) {
        console.error('Ошибка при обработке токена:', error);
        return null;
      }
    },
    async getUserData() {
      const userId = this.getUserId();
      const token = localStorage.getItem('authToken');
      
      if (this.isUserLoaded) return;
      if (!token) return '';

      try {
        this.isUserLoaded = true;
        const response = await axios.get(`${USER}/${userId}`, {
          headers: {
            Bearer: token,
          },
        });
        this.user = response.data;
      } catch (error) {
        console.error('Ошибка при запросе данных сотрудника:', error);
      }
    },
  }
});
