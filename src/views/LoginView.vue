<template>
  <div class="login-form">
      <h2>Авторизация</h2>
      <form @submit.prevent="login">
       <div class="form-group">
          <label for="email">Email</label>
          <span v-if="!isEmailValid" class="error">Неверный формат email</span>
          <input
           type="email"
           id="email"
           v-model="form.email"
           @input="validateEmail"
           required
          />
       </div>
  
       <div class="form-group">
          <label for="password">Пароль</label>
          <div class="password-wrapper">
           <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              required
           />
           <span class="toggle-password" @click="togglePasswordVisibility">
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
           </span>
          </div>
       </div>
  
       <button type="submit" :disabled="!isFormValid" class="login-btn">Войти</button>
       <span v-if="loginError" class="error">Неверный email или пароль</span>
      </form>
      <router-link to="recovery" class="forgot-password">Забыли пароль?</router-link>
  </div>
  </template>
  
  <script>
   import { ref } from 'vue';
   import { useAuthStore } from '../stores/auth';

   export default {
      name: 'LoginForm',
      data() {
            return {
            form: {
               email: '',
               password: '',
            },
            showPassword: false,
            loginError: false,
            };
      },
      computed: {
         isEmailValid() {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Только латинские буквы и символ @
            return emailRegex.test(this.form.email);
         },
         isFormValid() {
            return this.isEmailValid && this.form.password;
         },
      },
      methods: {
            login() {
               let userData = {
                  login: this.form.email,
                  password: this.form.password,
               }

               AuthStore.login(userData);
               console.log(AuthStore.getUser);
            if (this.isFormValid) {
               const authStore = AuthStore();
               const username = ref('');

               // // Пример логики авторизации
               // if (this.form.email === 'test@example.com' && this.form.password === 'password') {
               // alert('Авторизация успешна!');
               // this.loginError = false;
               // } else {
               // this.loginError = true;
               // }
            }
            },
            togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
            },
            validateEmail() {
            // Удаляем все символы, кроме латинских букв и допустимых символов
            this.form.email = this.form.email.replace(/[^a-zA-Z0-9._%+-@]/g, '');
            },
      },
   };
  </script>
  
  <style scoped>
  .login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  }
  
  .form-group {
  margin-bottom: 15px;
  }
  
  label {
  display: block;
  margin-bottom: 5px;
  }
  
  input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  }
  
  .password-wrapper {
  position: relative;
  }
  
  .toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  }
  
  .error {
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
  display: block;
  }
  
  .login-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  }
  
  .login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  }
  
  .forgot-password {
  display: block;
  margin-top: 10px;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  }
  </style>