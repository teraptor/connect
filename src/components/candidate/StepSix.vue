<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 6: Условия работы</h3>
    <div class="input__group">
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.business_trip" 
          />
          Командировки
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.foreign_project" 
          />
          Работа над зарубежными проектами
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.foreign_relocate" 
          />
          Перемещение за границу
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.national_relocate" 
          />
          Перемещение по стране
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.national_relocate" 
          />
          Перемещение по стране
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.work_format.rent_in_team" 
          />
          Работа в арендуемой команде
        </label>
      </div>
      <div>
        <InputField
          v-model="candidate.form.work_format.work_type"
          label="Тип работы:"
          type="text"
          placeholder="Введите тип работы..."
          required
          size="medium"
        />
      </div>
    </div>
    <div class="input__group">
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.employement.parttime" 
          />
          Парттайм
        </label>
      </div>
      <div>
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            v-model="candidate.form.employement.fulltime" 
          />
          Фултайм
        </label>
      </div>
    </div>
    <div class="input_group">
      <input
          v-model="candidate.form.salary.salary_hour"
          label="Стоимость часа"
          type="number"
          placeholder="Введите стоимость часа..."
          required
          size="medium"
        />
        <input
          v-model="candidate.form.salary.salary_month"
          label="Стоимость в месяц"
          type="number"
          placeholder="Введите стоимость в месяц..."
          required
          size="medium"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import InputField from '../ui/InputField.vue';


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

.checkbox-label {
  display: block;
  margin: 6px 0;
}
</style>
