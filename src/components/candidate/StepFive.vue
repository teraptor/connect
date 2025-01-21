<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();
const addCVItem = () => candidate.addCVItem();
const removeCVItem = (index: number) => candidate.removeCVItem(index);
const addTechnologyToCV = (index: number) => candidate.addTechnologyToCV(index);
const removeTechnologyFromCV = (cvIndex: number, techIndex: number) => candidate.removeTechnologyFromCV(cvIndex, techIndex);
</script>

<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 5: Опыт работы</h3>
    <div v-for="(cvItem, index) in candidate.form.cv_item" :key="index">
      <fieldset class="add-candidates__form-group">
        <div class="input__group">
          <InputField
            v-model="cvItem.position_name"
            label="Должность"
            type="text"
            placeholder="Введите должность..."
            required
            size="medium"
          />
          <InputField
            v-model="cvItem.employer"
            label="Работодатель"
            type="text"
            placeholder="Введите работодателя..."
            required
            size="medium"
          />
          <InputField
            v-model="cvItem.start_period"
            label="Период начала"
            type="date"
            placeholder="Введите период начала..."
            required
            size="medium"
          />
          <InputField
            v-model="cvItem.end_period"
            label="Период окончания"
            type="date"
            placeholder="Введите период окончания..."
            required
            size="medium"
          />
          <InputField
            v-model="cvItem.description"
            label="Описание"
            type="text"
            placeholder="Введите описание..."
            required
            size="medium"
          />
        </div>
        <div class="input__group-technology">
        <div v-for="(tech, techIndex) in cvItem.cv_technology" :key="techIndex" class="technology-group">
            <InputField
              v-model="tech.name"
              label="Технология"
              type="text"
              placeholder="Введите технологию..."
              required
              size="medium"
            />
            <div class="input__group-btn">
              <Button
                v-if="cvItem.cv_technology.length > 1"
                type="button"
                class="btn-danger"
                text="Удалить"
                @click="removeTechnologyFromCV(index, techIndex)"
                size="small"
              />
            </div>
          </div>
        </div>
        <div class="input__group-btn">
          <Button
            type="button"
            class="btn-secondary"
            text="Добавить"
            @click="addTechnologyToCV(index)"
            size="medium"
          />
          <Button
            v-if="index !== 0"
            type="button"
            class="btn-danger"
            text="Удалить"
            @click="removeCVItem(index)"
            size="small"
          />
        </div>
      </fieldset>
    </div>
    <Button
      type="button"
      class="btn-secondary"
      text="Добавить"
      icon="icon icon-plus"
      @click="addCVItem"
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

  &-technology {
    display: flex;
    flex-direction: column;
  }
}

.add-candidates__form-group {
  margin: 10px 0;
}

.technology-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px;
}

.input__group-btn {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
</style>
