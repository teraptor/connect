<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Контактные данные</h3>
      <InputField
        v-model="candidate.form.surname"
        label="Фамилия:"
        type="text"
        id="surname"
        placeholder="Введите фамилию..."
        required
      />
      <InputField
        v-model="candidate.form.name"
        label="Имя:"
        type="text"
        id="name"
        placeholder="Введите имя..."
        required
      />
      <InputField
        v-model="candidate.form.lastname"
        label="Отчество"
        type="text"
        id="lastname"
        placeholder="Введите отчество..."
        required
      />
      <InputField
        v-model="candidate.form.phone"
        label="Номер телефона:"
        type="tel"
        id="phone"
        placeholder="Введите номер телефона..."
        required
      />
      <InputField
        v-model="candidate.form.email"
        label="Электронная почта:"
        type="email"
        id="email"
        placeholder="Введите почту..."
        required
      />
      <SelectField
        v-model="candidate.form.nationality"
        id="country"
        label="Выберите гражданство:"
        :enumObject="NationalityEnum"
        placeholder="Выберите гражданство"
        required
      />
      <SelectField
        v-model="candidate.form.country"
        id="country"
        label="Страна нахождения:"
        :enumObject="CountryEnum"
        placeholder="Выберите страну"
        required
        :enableSearch="true"
      />
      <div class="input__group-inputs">
        <InputField
          v-model="candidate.form.date_of_birth"
          label="Дата рождения:"
          type="date"
          id="date_of_birth"
          placeholder="Введите дату рождения..."
          required
          size="medium"
        />
        <SelectField
          v-model="candidate.form.sex"
          id="sex"
          label="Выберите пол:"
          :enumObject="SexEnum"
          placeholder="Выберите пол"
          size="medium"
          required
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import InputField from '../ui/InputField.vue';
import { CountryEnum, NationalityEnum, SexEnum } from '@/enums/enums';
import SelectField from '../ui/SelectField.vue';
import TextAreaField from '../ui/TextAreaField.vue';

const candidate = useCandidateStore();
</script>
<style lang="scss" scoped>
.input__container {
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input__group {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid $border-light;
  padding: 24px;
  background-color: $light-color;
  border-radius: 30px;
  gap: 8px;
  margin: 8px 0;

  &-title {
    font-weight: 700;
    color: $dark-color;
  }

  &-inputs {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 12px;
  }
}
</style>

