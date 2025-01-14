<template>
  <AuthForm title="Регистрация" @submit="onSubmit">
    <InputField
      v-model="regStore.formData.email"
      label="E-mail"
      type="email"
      id="email"
      placeholder="Введите e-mail"
      required
      :validators="[isRequired, isEmail]"
    />
    <InputField
      v-model="regStore.formData.password"
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
      v-model="regStore.formData.tgAccount"
      label="Telegram"
      type="text"
      id="tgAccount"
      placeholder="Введите Telegram аккаунт"
      required
      :validators="[isRequired, isTelegram]"
    />
    <InputField
      v-model="regStore.formData.phone"
      label="Телефон"
      type="tel"
      id="phone"
      placeholder="Введите номер телефона..."
      required
      autocomplete="phone"
      :validators="[isRequired,isPhone]"
    />
    <InputField
      v-model="regStore.formData.companyINN"
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

const regStore = useRegistrationStore();
const router = useRouter()
const showPassword = ref<boolean>(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = async (): Promise<void> => {
  const response = await regStore.registerUser();
  if (response) router.push('/login')
};


const validation = computed(() => ({
  email: isEmail(regStore.formData.email) || isRequired(regStore.formData.email),
  password: isPassword(regStore.formData.password) || isRequired(regStore.formData.password),
  tgAccount: isTelegram(regStore.formData.tgAccount) || isRequired(regStore.formData.tgAccount),
  phone: isPhone(regStore.formData.phone) || isRequired(regStore.formData.phone),
  companyINN: isINN(regStore.formData.companyINN) || isRequired(regStore.formData.companyINN)
}));

const isFormValid = computed(() => {
  return Object.values(validation.value).every(value => !value);
});

</script>


