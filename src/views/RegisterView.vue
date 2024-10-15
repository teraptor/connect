<template>
  <div class="registration-form">
      <h2>Регистрация юридического лица</h2>
      <form @submit.prevent="register">
       <div class="form-group">
          <label for="country">Страна</label>
          <select id="country" v-model="form.country" required>
           <option value="" disabled>Выберите страну</option>
           <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
          </select>
       </div>
  
       <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input
           type="tel"
           id="phone"
           v-model="form.phone"
           v-mask="'+# (###) ###-####'"
           placeholder="+1 (123) 456-7890"
           required
          />
          <span v-if="!isPhoneValid" class="error">Неверный формат номера телефона</span>
       </div>
  
       <div class="form-group">
          <label for="inn">ИНН</label>
          <input
           type="text"
           id="inn"
           v-model="form.inn"
           maxlength="10"
           @input="validateInn"
           required
          />
          <span v-if="!isInnValid" class="error">ИНН должен содержать 10 цифр</span>
       </div>
  
       <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" @input="validateEmail" required />
          <span v-if="!isEmailValid" class="error">Неверный формат email</span>
       </div>
  
       <div class="form-group">
          <label for="telegram">Telegram Nickname</label>
          <input type="text" id="telegram" v-model="form.telegram" required />
          <span v-if="!isTelegramValid" class="error">Ник должен начинаться с @</span>
       </div>
  
       <button type="submit" :disabled="!isFormValid" class="register-btn">Зарегистрироваться</button>
      </form>
  </div>
</template>
  
<script>
  import { mask } from 'vue-the-mask';
  
  export default {
  name: 'LegalEntityRegistration',
  directives: { mask },
  data() {
      return {
       form: {
          country: '',
          phone: '',
          inn: '',
          email: '',
          telegram: '',
       },
       countries: ['Россия', 'США', 'Канада', 'Германия', 'Франция'], // Пример списка стран
      };
  },
  computed: {
      isPhoneValid() {
       const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/; // Проверка формата +1 (123) 456-7890
       return phoneRegex.test(this.form.phone);
      },
      isInnValid() {
       return /^\d{10}$/.test(this.form.inn);
      },
      isEmailValid() {
       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Только латинские буквы
       return emailRegex.test(this.form.email);
      },
      isTelegramValid() {
       return this.form.telegram.startsWith('@');
      },
      isFormValid() {
       return (
          this.form.country &&
          this.isPhoneValid &&
          this.isInnValid &&
          this.isEmailValid &&
          this.isTelegramValid
       );
      },
  },
  methods: {
      register() {
       if (this.isFormValid) {
          // Логика регистрации
          alert('Регистрация успешна!');
       }
      },
      validateInn() {
       // Удаляем все символы, кроме цифр
       this.form.inn = this.form.inn.replace(/\D/g, '');
      },
      validateEmail() {
       // Удаляем все символы, кроме латинских букв и допустимых символов
       this.form.email = this.form.email.replace(/[^a-zA-Z0-9._%+-@]/g, '');
      },
  },
  };
</script>

<style scoped>
  .registration-form {
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
  
  input,
  select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  }
  
  .error {
  color: red;
  font-size: 12px;
  }
  
  .register-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  }
  
  .register-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  }
</style>