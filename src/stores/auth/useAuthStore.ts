import { defineStore } from 'pinia';
import axios from 'axios';
import { AUTORIZATION } from '@/constants';
import { push } from 'notivue';
import { useUserStore } from '../useUserStore';

interface IAuthState {
  phone: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    phone: '',
    password: ''
  }),
  
  actions: {
    async handleLogin(): Promise<boolean> {
      try {
        const response = await axios.post(AUTORIZATION, {
          phone: this.phone,
          password: this.password,
        });
        const token: string = response.data.token;
        localStorage.setItem('authToken', token);

        this.resetForm();
        await useUserStore().getUserData()
        push.success("Добро пожаловать!");
        return true;
      } catch (err) {
        push.error("Неверный телефон или пароль");
        return false;
      }
    },

    resetForm() {
      this.phone = '';
      this.password = '';
    }
  }
});


