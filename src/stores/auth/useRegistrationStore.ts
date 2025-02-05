import { defineStore } from 'pinia'
import axios from 'axios'
import { REGISTRATION } from '@/constants'
import { push } from 'notivue'
import { AxiosError } from 'axios'

interface IRegistration {
  email: string
  password: string
  tgAccount: string
  phone: string
  companyINN: string
}

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    formData: {
      email: '',
      password: '',
      tgAccount: '',
      phone: '',
      companyINN: '',
    } as IRegistration,
  }),
  actions: {
    async registerUser(): Promise<boolean> {
      try {
        await axios.post(REGISTRATION, this.formData)
        push.success('Регистрация прошла успешно!')
        this.resetForm()
        return true
      } catch (error) {
        if (error instanceof AxiosError) {
          push.error(error.response?.data?.message || 'Ошибка регистрации.')
        } else {
          push.error('Неизвестная ошибка.')
        }
        return false
      }
    },

    resetForm() {
      this.formData = {
        email: '',
        password: '',
        tgAccount: '',
        phone: '',
        companyINN: '',
      }
    },
  },
})
