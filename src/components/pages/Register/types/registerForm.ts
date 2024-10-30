import type { Rule } from 'ant-design-vue/es/form'

export interface IRegisterFormState {
  phone_number: string
  inn: string
  email: string
  tgname: string
}

export type TRegisterRules = Record<keyof IRegisterFormState, Rule[]>
