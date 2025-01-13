import { defineStore } from 'pinia';
import axios from 'axios';
import { FORGOT } from '@/constants';

export const useForgotPasswordStore = defineStore('forgotPassword', {
  state: () => ({
    email: '',
    successMessage: null as string | null,
    errorMessage: null as string | null,
  }),

  actions: {
    async handleForgotPassword() {
      this.successMessage = null;
      this.errorMessage = null;

      try {
        const response = await axios.post(FORGOT, {
          email: this.email,
        });

        if (response.status === 200) {
          this.successMessage = 'Ссылка для восстановления пароля отправлена на вашу почту.';
        }
      } catch (error: any) {
        this.errorMessage = error.response?.data?.message || 'Произошла ошибка. Попробуйте снова.';
      }
    }
  }
});