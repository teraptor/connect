import type { Rule } from 'ant-design-vue/es/form'

export interface ILoginFormState {
  phone_number: string
  password: string
}

export type TLoginRules = Record<keyof ILoginFormState, Rule[]>
