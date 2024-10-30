import type {
  ILoginFormState,
  TLoginRules,
} from '@/components/pages/Login/types/loginForm'
import type { ShallowRef } from 'vue'
import Form from '@/components/ui/Form/Form.vue'
import { message } from 'ant-design-vue'

export const useLogin = (
  formRef: Readonly<ShallowRef<InstanceType<typeof Form> | null>>,
) => {
  const formIsValid = ref(false)

  const loginFormState = reactive<ILoginFormState>({
    phone_number: '',
    password: '',
  })

  const formIsEmpty = computed(() => {
    return !loginFormState.phone_number || !loginFormState.password
  })

  const rules = reactive<TLoginRules>({
    phone_number: [
      {
        required: true,
        message: 'Телефон обязателен',
        trigger: 'change',
      },
      {
        whitespace: true,
        message: 'Телефон не должен содержать пробелов',
        trigger: 'change',
      },
      {
        pattern: /^\+7\d{10}$/,
        message: 'Неверный формат телефона',
        trigger: 'change',
      },
    ],
    password: [
      {
        required: true,
        message: 'Пароль обязателен',
        trigger: 'change',
      },
    ],
  })

  const validate = () => {
    if (!formRef.value) return
    formRef.value
      .validate()
      .then(() => {
        console.log('Форма прошла валидацию')
        formIsValid.value = true
      })
      .catch(() => {
        message.error('Проверьте правильность заполнения формы')
      })
  }

  return {
    loginFormState,
    rules,
    validate,
    formIsValid,
    formIsEmpty,
    validateInfos: formRef.value?.validateInfos,
    resetFields: formRef.value?.resetFields,
  }
}
