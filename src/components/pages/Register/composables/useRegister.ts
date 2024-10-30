import type { ShallowRef } from 'vue'
import type { IRegisterFormState, TRegisterRules } from '../types/registerForm'
import Form from '@/components/ui/Form/Form.vue'
import { message } from 'ant-design-vue'

export const useRegister = (
  formRef: Readonly<ShallowRef<InstanceType<typeof Form> | null>>,
) => {
  const registerFormState = reactive<IRegisterFormState>({
    phone_number: '',
    inn: '',
    email: '',
    tgname: '',
  })

  const formIsEmpty = computed(() => {
    return (
      !registerFormState.phone_number ||
      !registerFormState.inn ||
      !registerFormState.email ||
      !registerFormState.tgname
    )
  })

  const rules = reactive<TRegisterRules>({
    phone_number: [
      {
        required: true,
        message: 'Телефон обязателен',
        trigger: ['change', 'blur'],
      },
      {
        whitespace: true,
        message: 'Телефон не должен содержать пробелов',
        trigger: ['change', 'blur'],
      },
      {
        pattern: /^\+7\d{10}$/,
        message: 'Неверный формат телефона',
        trigger: ['change', 'blur'],
      },
    ],
    inn: [
      {
        required: true,
        message: 'ИНН обязателен',
        trigger: ['change', 'blur'],
      },
      {
        type: 'number',
        message: 'ИНН состоит только из цифр',
        trigger: ['change', 'blur'],
      },
    ],
    email: [
      {
        required: true,
        message: 'Email обязателен',
        trigger: ['change', 'blur'],
      },
      {
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'Неверный формат email',
        trigger: ['change', 'blur'],
      },
    ],
    tgname: [
      {
        required: true,
        message: 'Telegram обязателен',
        trigger: ['change', 'blur'],
      },
    ],
  })

  const validate = () => {
    if (!formRef.value) return
    formRef.value
      .validate()
      .then(() => {
        console.log('Форма прошла валидацию')
      })
      .catch(() => {
        message.error('Проверьте правильность заполнения формы')
      })
  }
  return {
    registerFormState,
    rules,
    formIsEmpty,
    validate,
    validateInfos: formRef.value?.validateInfos,
  }
}
