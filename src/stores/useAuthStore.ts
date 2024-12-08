import { defineStore } from 'pinia';
import axios from 'axios';
import { AUTORIZATION } from '@/constants';

interface AuthState {
  phone: string;
  password: string;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    phone: '',
    password: '',
    error: null,
  }),
  
  actions: {
    async handleLogin(): Promise<{ success: boolean }> {
      this.error = null;

      try {
        const response = await axios.post(AUTORIZATION, {
          phone: this.phone,
          password: this.password,
        });

        const token: string = response.data.token;
        localStorage.setItem('authToken', token);

        this.resetForm();

        return { success: true };
      } catch (err) {
        this.error = 'Неверный телефон или пароль';
        return { success: false };
      }
    },

    resetForm() {
      this.phone = '';
      this.password = '';
    }
  }
});


