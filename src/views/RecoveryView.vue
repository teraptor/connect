<template>
   <div class="password-recovery-form">
       <h2>Восстановление пароля</h2>
       <form @submit.prevent="recoverPassword">
        <div class="form-group">
           <label for="email">Email</label>
           <input
            type="email"
            id="email"
            v-model="email"
            @input="validateEmail"
            required
           />
           <span v-if="!isEmailValid" class="error">Email должен содержать только кириллицу и символ @</span>
        </div>
   
        <button type="submit" :disabled="!isFormValid" class="recover-btn">Восстановить</button>
        <span v-if="recoveryError" class="error">Ошибка при восстановлении пароля</span>
       </form>
   </div>
   </template>
   
   <script>
   export default {
   name: 'PasswordRecovery',
   data() {
       return {
        email: '',
        recoveryError: false,
       };
   },
   computed: {
       isEmailValid() {
        const emailRegex = /^[а-яА-ЯёЁ0-9._%+-]+@[а-яА-ЯёЁ0-9.-]+\.[а-яА-ЯёЁ]{2,}$/; // Только кириллица и символ @
        return emailRegex.test(this.email);
       },
       isFormValid() {
        return this.isEmailValid && this.email;
       },
   },
   methods: {
       recoverPassword() {
        if (this.isFormValid) {
           // Пример логики восстановления пароля
           if (this.email === 'тест@пример.рф') {
            alert('Инструкции по восстановлению пароля отправлены на ваш email!');
            this.recoveryError = false;
           } else {
            this.recoveryError = true;
           }
        }
       },
       validateEmail() {
        // Удаляем все символы, кроме кириллических букв и допустимых символов
        this.email = this.email.replace(/[^а-яА-ЯёЁ0-9._%+-@]/g, '');
       },
   },
   };
   </script>
   
   <style scoped>
   .password-recovery-form {
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
   
   .error {
   color: red;
   font-size: 12px;
   margin-top: 5px;
   display: block;
   }
   
   .recover-btn {
   width: 100%;
   padding: 10px;
   background-color: #007bff;
   color: white;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   }
   
   .recover-btn:disabled {
   background-color: #cccccc;
   cursor: not-allowed;
   }
   </style>