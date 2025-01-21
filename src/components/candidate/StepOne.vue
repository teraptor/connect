<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 1: Данные кандидата</h3>
    <div class="input__group">
      <InputField
        v-model="candidate.form.surname"
        label="Фамилия:"
        type="text"
        id="surname"
        placeholder="Введите фамилию..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.name"
        label="Имя:"
        type="text"
        id="name"
        placeholder="Введите имя..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.lastname"
        label="Отчество"
        type="text"
        id="lastname"
        placeholder="Введите отчество..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.date_of_birth"
        label="Дата рождения:"
        type="date"
        id="date_of_birth"
        placeholder="Введите дату рождения..."
        required
        size='medium'
      />
      <SelectField
        v-model="candidate.form.sex"
        id="sex"
        label="Выберите пол:"
        :enumObject="SexEnum"
        placeholder="Выберите пол"
        size="small"
        required
      />
    </div>
    <div class="input__group">
      <InputField
        v-model="candidate.form.phone"
        label="Номер телефона:"
        type="tel"
        id="phone"
        placeholder="Введите номер телефона..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.email"
        label="Электронная почта:"
        type="email"
        id="email"
        placeholder="Введите почту..."
        required
        size='medium'
      />
      <SelectField
        v-model="candidate.form.nationality"
        id="country"
        label="Выберите гражданство:"
        :enumObject="NationalityEnum"
        placeholder="Выберите гражданство"
        size="medium"
        required
      />
      <SelectField
        v-model="candidate.form.country"
        id="country"
        label="Страна нахождения:"
        :enumObject="CountryEnum"
        placeholder="Выберите страну"
        size="medium"
        required
      />
    </div>
    <div class="input__group">
      <textarea
        v-model="candidate.form.about"
        label="Расскажите о себе"
        type="textarea"
        id="about"
        placeholder="Расскажите о себе..."
        required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import InputField from '../ui/InputField.vue';
import { CountryEnum, NationalityEnum, SexEnum } from '@/enums/enums';
import SelectField from '../ui/SelectField.vue';

const candidate = useCandidateStore();
</script>
<style lang="scss" scoped>

.add-candidates__form-title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

.input__group {
  display: flex;
  gap: 8px;
  margin: 8px 0;
}
</style>

