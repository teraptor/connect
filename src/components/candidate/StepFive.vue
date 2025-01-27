<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import InputField from '../ui/InputField.vue';
import SelectField from '../ui/SelectField.vue';
import { WorkFormatEnum } from '@/enums/enums';


const candidate = useCandidatesStore();
</script>

<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Ставка</h3>
      <div class="input__group-inputs">
        <InputField
          v-model="candidate.addCandidateForm.salary.salary_hour"
          label="Стоимость часа (RUB)"
          type="number"
          placeholder="Введите стоимость часа..."
          size="medium"
        />
        <InputField
          v-model="candidate.addCandidateForm.salary.salary_month"
          label="Стоимость в месяц (RUB)"
          type="number"
          placeholder="Введите стоимость в месяц..."
          size="medium"
        />
      </div>
    </div>
    <div class="input__group">
      <h3 class="input__group-title">Тип занятости</h3>
      <div class="input__group-inputs">
        <InputField
          v-model="candidate.addCandidateForm.employement.parttime"
          label="Парттайм"
          type="checkbox"
        />
        <InputField
          v-model="candidate.addCandidateForm.employement.fulltime"
          label="Фултайм"
          type="checkbox"
        />
      </div>
    </div>
    <div class="input__group">
      <h3 class="input__group-title">Формат работы</h3>
      <SelectField
        v-model="candidate.addCandidateForm.work_format.work_type"
        id="workType"
        label="Формат работы:"
        :enumObject="WorkFormatEnum"
        placeholder="Выберите формат работы"
      />
      <InputField
        v-model="candidate.addCandidateForm.work_format.business_trip"
        label="Командировки"
        type="checkbox"
      />
      <InputField
        v-model="candidate.addCandidateForm.work_format.foreign_project"
        label="Работа над зарубежными проектами"
        type="checkbox"
      />
      <InputField
        v-model="candidate.addCandidateForm.work_format.foreign_relocate"
        label="Релокация за границу"
        type="checkbox"
      />
      <InputField
        v-model="candidate.addCandidateForm.work_format.national_relocate"
        label="Релокация внутри страны"
        type="checkbox"
      />
      <InputField
        v-model="candidate.addCandidateForm.work_format.rent_in_team"
        label="Работа в арендуемой команде"
        type="checkbox"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      cursor: pointer;
      color: $icon-gray;

      &:hover {
        color: $main-color;
      };
    }
  }

  &-inputs {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 12px;

  .icon-bin {
    cursor: pointer;
    font-size: 28px;
    color: $icon-gray;

    &:hover {
      color: $main-color;
    };
  };
  }
}
</style>