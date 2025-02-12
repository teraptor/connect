<script setup lang="ts">
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/routes/routeNames'
import { ref, computed } from 'vue'
import Button from './ui/Button.vue'
import { useUserStore } from '@/stores/useUserStore'

const isHovered = ref<boolean>(false)
const userStore = useUserStore()
const user = computed(() => userStore.user)
const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
})
const router = useRouter()
const changeIsHovered = () => (isHovered.value = !isHovered.value)

const goToCandidateDetail = () => {
  if (user.value) {
    router.push({
      name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL,
      params: { id: props.candidate.id },
    })
  } else {
    router.push({ name: RouteNames.MAIN.LOGIN })
  }
}

const womanImage = new URL('@/assets/images/woman.png', import.meta.url).href
const manImage = new URL('@/assets/images/man.png', import.meta.url).href
</script>

<template>
  <div
    class="candidate-card"
    @click="goToCandidateDetail()"
    @mouseenter="changeIsHovered"
    @mouseleave="changeIsHovered"
  >
    <div class="candidate-card__inner">
      <div class="candidate-card__specialization">MedTech && EdTech</div>
      <div class="candidate-card__wrapper">
        <div class="candidate-card__image">
          <img :src="candidate.sex === 'Женский' ? womanImage : manImage" />
        </div>
        <div class="candidate-card__details">
          <h3 class="candidate-card__name">
            {{ candidate.name }}
            {{
              candidate.lastname.slice(0, 1) ? `${candidate.lastname[0]}.` : ''
            }}
          </h3>
          <p class="candidate-card__country">Россия</p>
          <p class="candidate-card__position-name">Frontend Developer</p>
          <p class="candidate-card__position-grade">Middle</p>
        </div>
      </div>
      <div class="candidate-card__salary">
        <div class="candidate-card__salary-hour">
          {{ candidate.salary.salary_hour }} RUB/час
        </div>
        <div class="candidate-card__salary-month">
          {{ candidate.salary.salary_month }} RUB/месяц
        </div>
      </div>
      <ul class="candidate-card__skills">
        <!-- <li class="candidate-card__skills-item"
          v-for="technology in candidate.technologyList"
          :key="technology"
        >
          {{ technology }}
        </li> -->
        <li class="candidate-card__skills-item">tech</li>
        <li class="candidate-card__skills-item">tech</li>
        <li class="candidate-card__skills-item">tech</li>
        <li class="candidate-card__skills-item">tech</li>
      </ul>
      <div class="candidate-card__about">
        qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty
      </div>
      <div v-if="isHovered" class="candidate-card__hover">
        <Button
          button-type="secondary"
          text="Подробнее"
          @click="goToCandidateDetail"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.candidate-card {
  width: 325px;
  height: 325px;
  background-color: $bg-card-color;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: $box-shadow;
  transition: transform 0.2s;
  font-size: 18px;
  &:hover {
    transform: scale(1.04);
  }

  &__inner {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
  }

  &__specialization {
    font-weight: 300;
    color: $help-color;
    border-bottom: 1px solid $border-light;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }
  &__details {
    width: 70%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
  &__image {
    width: 30%;
    max-width: 70px;
    height: 120px;
  }

  &__name {
    font-weight: 900;
    text-transform: uppercase;
  }

  &__country {
    font-size: 16px;
    font-weight: 300;
    color: $help-color;
  }

  &__position {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-grade {
      background-color: $main-color;
      padding: 8px 10px;
      color: $light-color;
      border-radius: 4px;
      font-size: 14px;
    }
  }

  &__salary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    &-hour,
    &-month {
      font-weight: 600;
    }
  }

  &__skills {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;

    &-item {
      padding: 4px 8px;
      border: 1px solid $main-color;
      color: $main-color;
      border-radius: 4px;
    }
  }

  &__about {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    font-weight: 300;
    padding-top: 4px;
    color: $help-color;
    border-top: 1px solid $border-light;
    font-size: 16px;
    height: 20%;
  }

  &__hover {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    padding: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: $light-color;
    backdrop-filter: blur(12px);
    text-align: center;
    display: flex;
    justify-content: center;
  }
}
</style>
