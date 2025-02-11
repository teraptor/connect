<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/routes/routeNames'
import { useWhyWeStore } from '@/stores/useWhyWeStore'

const whyWeStore = useWhyWeStore()

const router = useRouter()
const moveToLogin = () => router.push({ name: RouteNames.MAIN.LOGIN })
</script>
<template>
  <div class="intro">
    <div class="intro__inner">
      <h1 class="intro__title">
        <span class="intro__title-brand"> StaffConnect </span> — Сервис быстрого
        и эффективного <br />подбора профессионалов в сфере ИТ
      </h1>
      <p class="intro__subtitle">
        StaffConnect — это инновационная платформа, которая упрощает процесс
        поиска и найма ИТ-специалистов. <br />
        Наш сервис объединяет работодателей и профессионалов в сфере технологий,
        предлагая удобный <br />
        и прозрачный процесс подбора кадров.
      </p>
      <div class="intro__button-container">
        <Button
          button-type="danger"
          @click="moveToLogin"
          text="Начать"
          type="button"
        />
      </div>
    </div>
  </div>
  <div class="advantages">
    <div class="advantages__inner">
      <h2 class="advantages__title">Преимущества StaffConnect ?</h2>
      <div class="advantages__items">
        <div
          class="advantages__item"
          v-for="item in whyWeStore.items"
          :key="item.id"
        >
          <span :class="['icon', item.icon]" />
          <h4 class="advantages__item-title">{{ item.text }}</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="why-we">
    <div class="why-we__inner">
      <h4 class="why-we__title">Почему мы ?</h4>
      <div class="why-we__table">
        <div
          v-for="(header, index) in whyWeStore.table.headers"
          :key="'header-' + index"
          class="why-we__table-header"
        >
          {{ header }}
        </div>

        <template
          v-for="(row, rowIndex) in whyWeStore.table.rows"
          :key="'row-' + rowIndex"
        >
          <div
            v-for="(cell, cellIndex) in row"
            :key="'cell-' + rowIndex + '-' + cellIndex"
            :class="[
              'why-we__table-cell',
              rowIndex % 2 === 0
                ? 'why-we__table-cell--dark'
                : 'why-we__table-cell--white',
              cellIndex === 0 ? 'why-we__table-cell--bold' : '',
            ]"
          >
            <template v-if="typeof cell === 'object'">
              <span :class="cell.icon"></span> {{ cell.text }}
            </template>
            <template v-else>
              {{ cell }}
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.intro {
  background-image: url(@/assets/images/intro.webp);
  position: relative;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 92.59px);
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(37, 43, 73, 0.8);
    z-index: 1;
  }

  &__inner {
    position: relative;
    z-index: 10;
    max-width: 1320px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 32px;
  }

  &__title {
    color: #ffffff;
    margin: auto;
    font-weight: 500;
    font-size: 32px;

    &-brand {
      color: $main-color;
      font-weight: 700;
    }
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 300;
    color: #ffffff;
  }

  &__button-container {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.advantages {
  margin: 40px 0;

  &__inner {
    max-width: 1320px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__item {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .icon {
      font-size: 80px;
      color: $danger;
    }

    &-title {
      font-weight: 500;
      text-align: center;
    }
  }
}

.why-we {
  margin: 40px 0;
  background-color: $light-color;

  &__inner {
    max-width: 1320px;
    padding-top: 32px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin: auto;
    box-shadow: $box-shadow;

    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      padding: 16px;

      &:nth-child(2) {
        color: $main-color;
        font-weight: 600;
      }
    }

    &-cell {
      padding: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 300;

      &--white {
        background-color: $light-color;
      }

      &--dark {
        background-color: $light-grey-color;
      }

      &--bold {
        font-weight: 400;
      }
    }
  }
}
</style>
