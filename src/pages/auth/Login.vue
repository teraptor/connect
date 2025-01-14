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
    >
    </InputField>
    <RouterLink to="/forgot" class="form__link">Забыли пароль ?</RouterLink>
    <Button 
      class="btn btn-primary w-100" text="Войти" 
      :disabled="!isFormValid" 
      :icon="'icon icon-log-in'" 
      type="submit"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
    <span> У вас еще нет аккаунта ? <RouterLink class="form__link" to="/register">Зарегистрироваться</RouterLink></span>
  </AuthForm>
</template>

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

const phone = computed({
  get: () => authStore.phone,
  set: (value: string) => { authStore.phone = value; },
});

const password = computed({
  get: () => authStore.password,
  set: (value: string) => { authStore.password = value; },
});

const error = computed(() => authStore.error);
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  const result = await authStore.handleLogin();
  if (result.success) {
    router.push('/main');
  }
};

const validation = computed(() => ({
  phone: isPhone(phone.value) || isRequired(phone.value),
  password: isPassword(password.value) || isRequired(password.value),
}));

const isFormValid = computed(() => !validation.value.phone && !validation.value.password);
</script>


