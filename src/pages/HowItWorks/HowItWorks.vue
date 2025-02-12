<script setup lang="ts">
import { useWhyWeStore } from '@/stores/useWhyWeStore'
import Questions from '@/components/Questions.vue'

const whyWeStore = useWhyWeStore()
</script>
<template>
  <div class="how-it-work">
    <div class="how-it-work__inner">
      <h2 class="how-it-work__title">Как это работает ?</h2>
      <div class="how-it-work__items">
        <div
          class="how-it-work__item"
          v-for="item in whyWeStore.howItWork"
          :key="item.id"
        >
          <span :class="['icon', item.icon]" />
          <div class="how-it-work__item-wrapper">
            <h4 class="how-it-work__item-title">{{ item.title }}</h4>
            <p class="how-it-work__item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Questions />
</template>

<style lang="scss" scoped>
.how-it-work {
  margin: 40px 0;

  &__inner {
    max-width: 1320px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__items {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  &__item {
    width: 100%;
    gap: 20px;
    display: flex;
    justify-content: flex-start;
    text-align: start;
    align-items: center;

    .icon {
      font-size: 32px;
      color: $main-color;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      width: 70%;
    }

    &-title {
      font-weight: 500;
      line-height: 24px;
    }

    &-description {
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      color: $help-color;
    }
  }
}
</style>
