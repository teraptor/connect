<template>
  <div class="login-container">
    <h2>Вход</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="phone">Телефон</label>
        <input
          v-model="phone"
          type="tel"
          id="phone"
          placeholder="Введите номер телефона..."
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Введите пароль..."
          required
        />
      </div>

      <button type="submit" class="btn-login">Войти</button>

      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

const authStore = useAuthStore();
const router = useRouter();

const phone = computed({
  get: () => authStore.phone,
  set: (value: string): void => { authStore.phone = value; },
});

const password = computed({
  get: () => authStore.password,
  set: (value: string): void => { authStore.password = value; },
});

const error = computed(() => authStore.error);

const handleLogin = async (): Promise<void> => {
  const result = await authStore.handleLogin();
  if (result.success) {
    router.push('/main');
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
