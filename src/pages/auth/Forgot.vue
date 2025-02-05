<script setup lang="ts">
import AuthForm from '@/components/ui/AuthForm.vue'
import { useForgotPasswordStore } from '@/stores/auth/useForgotPasswordStore'
import { storeToRefs } from 'pinia'
import { isRequired, isEmail } from '@/helpers/validation'
import InputField from '@/components/ui/InputField.vue'
import Button from '@/components/ui/Button.vue'
import { ref, computed } from 'vue'

const forgotPasswordStore = useForgotPasswordStore()
const { email } = storeToRefs(forgotPasswordStore)
const isLoading = ref<boolean>(false)

const handleForgotPassword = async (): Promise<void> => {
  isLoading.value = true
  try {
    const response = await forgotPasswordStore.handleForgotPassword()
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 200)
  }
}
const isFormValid = computed(() => {
  return !isRequired(email.value) && !isEmail(email.value)
})
</script>
<template>
  <AuthForm title="Восстановить пароль" @submit="handleForgotPassword">
    <InputField
      v-model="email"
      label="E-mail"
      type="email"
      id="email"
      placeholder="Введите e-mail"
      required
      :validators="[isRequired, isEmail]"
    />
    <span>
      Вспомнили пароль ?
      <RouterLink to="/login" class="form__link">Войти</RouterLink>
    </span>
    <Button
      button-type="primary"
      text="Восстановить пароль"
      :disabled="!isFormValid"
      :isLoading="isLoading"
      type="submit"
    />
  </AuthForm>
</template>
