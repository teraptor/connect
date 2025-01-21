<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();
const addCertification = () => candidate.addCertification();
const removeCertification = (index: number) => candidate.removeCertification(index);

</script>

<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 4: Дипломы/грамоты</h3>
    <div v-for="(cert, index) in candidate.form.certification" :key="index">
      <fieldset class="add-candidates__form-group">
        <div class="input__group">
          <InputField
            v-model="cert.title"
            label="Название диплома:"
            type="text"
            placeholder="Введите название..."
            required
            size="medium"
          />
          <InputField
            v-model="cert.issuer"
            label="Выдавшая организация"
            type="text"
            placeholder="Введите организацию..."
            required
            size="medium"
          />
          <InputField
            v-model="cert.date_issued"
            label="Дата выдачи:"
            type="date"
            id="date_issued"
            placeholder="Введите дату выдачи..."
            required
            size='medium'
          />

          <div class="input__group-btn">
            <Button
              v-if="index !== 0"
              type="button"
              class="btn-danger"
              text="Удалить"
              @click="removeCertification(index)"
              size="small"
            />
          </div>
        </div>
      </fieldset>
    </div>
    <Button
      type="button"
      class="btn-secondary"
      text="Добавить"
      icon="icon icon-plus"
      @click="addCertification"
      size="medium"
    />
  </div>
</template>

<style lang="scss" scoped>
.add-candidates__form-title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

.input__group {
  display: flex;
  gap: 8px;

  &-btn {
    display: flex;
    align-items: flex-end;
  }
}

.add-candidates__form-group {
  margin: 10px 0;
}
</style>