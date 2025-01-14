<template>
  <AuthForm title="Регистрация" @submit="onSubmit">
    <InputField
      v-model="form.email"
      label="E-mail"
      type="email"
      id="email"
      placeholder="Введите e-mail"
      required
      :validators="[isRequired, isEmail]"
    />
    <InputField
      v-model="form.password"
      label="Пароль"
      :type="showPassword ? 'text' : 'password'"
      id="password"
      placeholder="Введите пароль"
      required
      :validators="[isRequired, isPassword]"
      :icon = "showPassword ? 'icon icon-eye-hidden' : 'icon icon-eye'"
      @icon-click="togglePassword"
    >
    </InputField>
    <InputField
      v-model="form.tgAccount"
      label="Telegram"
      type="text"
      id="tgAccount"
      placeholder="Введите Telegram аккаунт"
      required
      :validators="[isRequired, isTelegram]"
    />
    <InputField
      v-model="form.phone"
      label="Телефон"
      type="tel"
      id="phone"
      placeholder="Введите номер телефона..."
      required
      autocomplete="phone"
      :validators="[isRequired,isPhone]"
    />
    <InputField
      v-model="form.companyINN"
      label="ИНН компании"
      type="text"
      id="companyINN"
      placeholder="Введите ИНН компании..."
      required
      :validators="[isRequired,isINN]"
    />
    <RouterLink to="/login" class="form__link">Уже есть аккаунт ?</RouterLink>
    <Button 
      class="btn btn-primary w-100" text="Зарегистрироваться" 
      :disabled="!isFormValid" 
      :icon="'icon icon-log-in'" 
      type="submit"
    />
    <p v-if="regStore.successMessage" class="success-message">
      {{ regStore.successMessage }}
      <RouterLink to="/login" class="form__link">Войти</RouterLink>
    </p>
    <p v-if="regStore.errorMessage" class="error-message">
      {{ regStore.errorMessage }}
    </p>
  </AuthForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRegistrationStore } from '@/stores/auth/useRegistrationStore';
import AuthForm from '@/components/ui/AuthForm.vue';
import InputField from '@/components/ui/InputField.vue';
import Button from '@/components/ui/Button.vue';
import { 
  isRequired,
  isPhone,
  isTelegram,
  isEmail,
  isINN,
  isPassword
} from '@/helpers/validation';

const form = ref({
  email: '',
  password: '',
  tgAccount: '',
  phone: '',
  companyINN: ''
});

const router = useRouter();
const regStore = useRegistrationStore();

const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = async (): Promise<void> => {
  try {
    await regStore.registerUser({ ...form.value });

    if (!regStore.errorMessage) {
      form.value = {
        email: '',
        password: '',
        tgAccount: '',
        phone: '',
        companyINN: ''
      };
    }
  } catch (error) {
    console.error('Ошибка отправки формы:', error);
  }
};

const validation = computed(() => ({
  email: isEmail(form.value.email) || isRequired(form.value.email),
  password: isPassword(form.value.password) || isRequired(form.value.password),
  tgAccount: isTelegram(form.value.tgAccount) || isRequired(form.value.tgAccount),
  phone: isPhone(form.value.phone) || isRequired(form.value.phone),
  companyINN: isINN(form.value.companyINN) || isRequired(form.value.companyINN)
}));

const isFormValid = computed(() => {
  return Object.values(validation.value).every(value => !value);
});

</script>


