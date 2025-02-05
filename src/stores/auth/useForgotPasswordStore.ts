import { defineStore } from 'pinia'
import axios from 'axios'
import { FORGOT } from '@/constants'
import { push } from 'notivue'
interface IForgotPasswordState {
  email: string
}

export const useForgotPasswordStore = defineStore('forgotPassword', {
  state: (): IForgotPasswordState => ({
    email: '',
  }),

  actions: {
    async handleForgotPassword() {
      try {
        await axios.post(FORGOT, {
          email: this.email,
        })
        push.success('Пароль для восстановления отправлен Вам на почту!')
      } catch {
        push.error('Ошибка')
      }
    },
  },
})
