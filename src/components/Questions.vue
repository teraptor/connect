<script lang="ts" setup>
import Button from '@/components/ui/Button.vue'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/routes/routeNames'
const router = useRouter()
const moveToInDev = () => router.push({ name: RouteNames.MAIN.IN_DEV })
</script>
<template>
  <div class="questions">
    <div class="questions__inner">
      <div class="questions__image">
        <img src="@/assets/images/question.png" />
      </div>
      <div class="questions__content">
        <h5 class="questions__content-title">Остались вопросы ?</h5>
        <div class="questions__content-button-container">
          <Button
            button-type="primary"
            text="Напиши нам"
            type="button"
            @click="moveToInDev"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.questions {
  margin: 40px 0;

  &__inner {
    max-width: 1320px;
    padding-top: 32px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__image {
    width: 200px;
    height: 200px;
  }

  &__content {
    max-width: 600px;
    width: 100%;
    padding: 24px;
    box-shadow: $box-shadow;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
    align-items: center;

    &-title {
      font-weight: 600;
      font-size: 20px;
      width: 40%;
    }

    &-button-container {
      width: 60%;
    }
  }
}
</style>
