import type { ShallowRef } from 'vue'
import Form from '@/components/ui/Form/Form.vue'
import { message } from 'ant-design-vue'
import { registerUser } from '@/api/auth'
import type { IUser } from '@/entities/user'
import type { Rule } from 'ant-design-vue/es/form'

type EditableUser = Omit<IUser, 'id'> & { repeatPassword: string }

export const useRegister = (
  formRef: Readonly<ShallowRef<InstanceType<typeof Form> | null>>,
) => {
  const registerFormState = reactive<EditableUser>({
    phone: '',
    inn: '',
    email: '',
    tg: '',
    password: '',
    repeatPassword: '',
  })

  const disableRegisterButton = computed(() => {
    return (
      !registerFormState.phone ||
      !registerFormState.inn ||
      !registerFormState.email ||
      !registerFormState.tg ||
      !registerFormState.password ||
      !registerFormState.repeatPassword
    )
  })

  const rules = reactive<Record<keyof EditableUser, Rule[]>>({
    password: [
      {
        required: true,
        message: 'Пароль обязателен',
        trigger: ['change', 'blur'],
      },
    ],
    repeatPassword: [
      {
        required: true,
        message: 'Повторите пароль обязательно',
        trigger: ['change', 'blur'],
      },
      {
        validator: (rule: Rule, value: string) => {
          if (value === registerFormState.password) return Promise.resolve()
          return Promise.reject('Пароли не совпадают')
        },
        trigger: ['change'],
      },
    ],
    phone: [
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
    tg: [
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
      .then(async () => {
        await registerUser(registerFormState)
        message.success('Пользователь зарегестрирован!')
      })
      .catch(e => {
        console.error(e)
        message.error('Проверьте правильность заполнения формы')
      })
  }
  return {
    registerFormState,
    rules,
    disableRegisterButton,
    validate,
    validateInfos: formRef.value?.validateInfos,
  }
}
