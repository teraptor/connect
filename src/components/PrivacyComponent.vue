<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  subtitleImportant: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="privacy">
    <div class="privacy__inner">
      <div class="privacy__header">
        <div class="privacy__header-wrapper">
          <h2 class="privacy__title">{{ props.title }}</h2>
          <p class="privacy__subtitle" v-if="props.subtitle">
            {{ props.subtitle }}
          </p>
          <p class="privacy__subtitle-important" v-if="props.subtitleImportant">
            {{ props.subtitleImportant }}
          </p>
        </div>
        <div class="privacy__image-container">
          <img src="@/assets/images/safety.png" class="privacy__image-safety" />
        </div>
      </div>
      <div class="privacy__content">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.privacy {
  margin: 40px 0;

  &__inner {
    max-width: 1320px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 64px;
  }

  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    width: 70%;
    border: 2px solid $border-light;
    padding: 30px 20px;
    background-color: $light-color;
    border-radius: 30px;
    box-shadow: $box-shadow;

    &-wrapper {
      width: 70%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    text-align: left;
    line-height: 1.5;
  }

  &__subtitle {
    width: 80%;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 300;
  }

  &__subtitle-important {
    width: 80%;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 500;
  }

  &__image-container {
    width: 30%;
  }

  &__image-safety {
    width: 200px;
    height: 200px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;

    a {
      color: $main-color;
    }
  }
}
</style>
