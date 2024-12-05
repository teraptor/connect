import type { IUser } from '@/entities/user'
import api from '..'

export const registerUser = async (user: IUser) => {
  const response = await api.post('auth/registrer', {
    json: {
      ...user,
    },
  })
  console.log(response)
}
