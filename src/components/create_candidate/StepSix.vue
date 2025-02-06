<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import TextAreaField from '@/components/ui/TextAreaField.vue'

const candidate = useCandidatesStore()
</script>
<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Главное о специалисте</h3>
      <TextAreaField
        label="Расскажите о себе:"
        id="about"
        v-model="candidate.addCandidateForm.about"
        placeholder="Введите текст"
        v-tippy="{
          content: `<strong>Краткое резюме опыта специалиста,
          которое должно раскрывать его 
          основные hard и soft-skills</strong><br>
          Играет роль сопроводительного письма к резюме,
          т.е. текст должен быть максимально вкусным
          `,
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
