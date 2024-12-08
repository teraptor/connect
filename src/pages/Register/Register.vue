<template>
  <div class="registration-form">
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input id="password" v-model="form.password" type="password" required />
      </div>
      <div>
        <label for="tgAccount">Telegram:</label>
        <input id="tgAccount" v-model="form.tgAccount" type="text" />
      </div>
      <div>
        <label for="phone">Телефон:</label>
        <input id="phone" v-model="form.phone" type="text" />
      </div>
      <div>
        <label for="companyINN">ИНН компании:</label>
        <input id="companyINN" v-model="form.companyINN" type="text" />
      </div>
      <button type="submit">
        Зарегистрироваться
      </button>
    </form>
    <p v-if="regStore.errorMessage" class="error">
      {{ regStore.errorMessage }}
    </p>
    <p v-if="regStore.successMessage" class="success">
      {{ regStore.successMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRegistrationStore } from '@/stores/useRegistrationStore';

const form = ref({
  email: '',
  password: '',
  tgAccount: '',
  phone: '',
  companyINN: ''
});

const regStore = useRegistrationStore();

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
</script>


<style scoped>
.registration-form {
  max-width: 450px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: blue;
}

button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: blue;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}

.success {
  color: green;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}
</style>


