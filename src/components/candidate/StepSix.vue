<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import TextAreaField from '../ui/TextAreaField.vue';

const candidate = useCandidateStore();
</script>
<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Главное о специалисте</h3>
      <TextAreaField 
        label="Расскажите о себе:" 
        id="about" 
        v-model="candidate.form.about" 
        placeholder="Введите текст" 
      />
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