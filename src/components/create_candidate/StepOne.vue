<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import InputField from '../ui/InputField.vue'
import { CountryEnum, NationalityEnum, SexEnum } from '@/enums/enums'
import SelectField from '../ui/SelectField.vue'
import { isRequired } from '@/helpers/validation'

const candidate = useCandidatesStore()
</script>
<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Контактные данные</h3>
      <InputField
        v-model="candidate.addCandidateForm.surname"
        label="Фамилия:"
        type="text"
        id="surname"
        placeholder="Введите фамилию..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="candidate.addCandidateForm.name"
        label="Имя:"
        type="text"
        id="name"
        placeholder="Введите имя..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="candidate.addCandidateForm.lastname"
        label="Отчество"
        type="text"
        id="lastname"
        placeholder="Введите отчество..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="candidate.addCandidateForm.phone"
        label="Номер телефона:"
        type="tel"
        id="phone"
        placeholder="Введите номер телефона..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="candidate.addCandidateForm.email"
        label="Электронная почта:"
        type="email"
        id="email"
        placeholder="Введите почту..."
        required
        :validators="[isRequired]"
      />
      <SelectField
        v-model="candidate.addCandidateForm.nationality"
        id="country"
        label="Выберите гражданство:"
        :enumObject="NationalityEnum"
        placeholder="Выберите гражданство"
        required
        :validators="[isRequired]"
        :enableSearch="true"
      />
      <SelectField
        v-model="candidate.addCandidateForm.country"
        id="country"
        label="Страна нахождения:"
        :enumObject="CountryEnum"
        placeholder="Выберите страну"
        required
        :validators="[isRequired]"
        :enableSearch="true"
        v-tippy="{
          content: `<strong>Укажите фактическое место нахождения специалиста</strong><br>
          Для некоторых клиентов важно, чтобы специалист находился в конкретной локации`,
          appendTo: 'parent',
          theme: 'help-theme',
          placement: 'right',
          offset: [0, 30],
          arrow: false,
          delay: [200, 0],
          duration: [100, 200],
          allowHTML: true,
        }"
      />
      <div class="input__group-inputs">
        <InputField
          v-model="candidate.addCandidateForm.date_of_birth"
          label="Дата рождения:"
          type="date"
          id="date_of_birth"
          placeholder="Введите дату рождения..."
          required
          size="medium"
          :validators="[isRequired]"
        />
        <SelectField
          v-model="candidate.addCandidateForm.sex"
          id="sex"
          label="Выберите пол:"
          :enumObject="SexEnum"
          placeholder="Выберите пол"
          size="medium"
          required
          :validators="[isRequired]"
        />
      </div>
    </div>
  </div>
</template>

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
