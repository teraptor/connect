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
      class="btn btn-primary w-100" text="Восстановить пароль" 
      :disabled="!isFormValid"
      type="submit"
    />
  </AuthForm>
</template>

<script setup lang="ts">
import AuthForm from '@/components/ui/AuthForm.vue';
import { useForgotPasswordStore } from '@/stores/auth/useForgotPasswordStore';
import { storeToRefs } from 'pinia';
import { isRequired, isEmail } from '@/helpers/validation';
import InputField from '@/components/ui/InputField.vue';
import Button from '@/components/ui/Button.vue';

const forgotPasswordStore = useForgotPasswordStore();
const { email } = storeToRefs(forgotPasswordStore);
const { handleForgotPassword } = forgotPasswordStore;

const isFormValid = computed(() => {
  return !(isRequired(email.value)) && !(isEmail(email.value));
});

</script>
