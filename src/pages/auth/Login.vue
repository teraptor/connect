<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import InputField from '@/components/ui/InputField.vue';
import Button from '@/components/ui/Button.vue';
import AuthForm from '@/components/ui/AuthForm.vue';
import { isRequired, isPhone, isPassword } from '@/helpers/validation';

const authStore = useAuthStore();
const router = useRouter();
const isLoading = ref<boolean>(false);
const showPassword = ref<boolean>(false);

const phone = computed({
  get: () => authStore.phone,
  set: (value: string) => { authStore.phone = value; },
});

const password = computed({
  get: () => authStore.password,
  set: (value: string) => { authStore.password = value; },
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  isLoading.value = true;
  try {
    const response = await authStore.handleLogin();
    if (response) router.push('/');
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 200);
  }
};

const validation = computed(() => ({
  phone: isPhone(phone.value) || isRequired(phone.value),
  password: isPassword(password.value) || isRequired(password.value),
}));

const isFormValid = computed(() => !validation.value.phone && !validation.value.password);
</script>
<template>
  <AuthForm title="Вход" @submit="handleLogin">
    <InputField
      v-model="phone"
      label="Телефон"
      type="tel"
      id="phone"
      placeholder="Введите номер телефона..."
      required
      autocomplete="phone"
      :validators="[isRequired,isPhone]"
    />
    <InputField
      v-model="password"
      label="Пароль"
      :type="showPassword ? 'text' : 'password'"
      id="password"
      placeholder="Введите пароль..."
      required
      autocomplete="current-password"
      :validators="[isRequired, isPassword]"
      :icon = "showPassword ? 'icon icon-eye-hidden' : 'icon icon-eye'"
      @icon-click="togglePassword"
    />
    <RouterLink to="/forgot" class="form__link">Забыли пароль ?</RouterLink>
    <Button 
      button-type="primary"
      text="Войти" 
      :disabled="!isFormValid" 
      :isLoading="isLoading"
      :icon="'icon icon-log-in'" 
      type="submit"
    />
    <span> У вас еще нет аккаунта ? <RouterLink class="form__link" to="/register">Зарегистрироваться</RouterLink></span>
  </AuthForm>
</template>


