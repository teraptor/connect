<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { RouteNames } from '@/router/routes/routeNames';

const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goToCandidateDetail = () => {
  router.push({ name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL, params: { id: props.candidate.id } });
};
</script>

<template>
  <div class="candidate__card" @click="goToCandidateDetail">
    <div class="candidate__card-specialization">MedTech && EdTech</div>
    <div class="candidate__card-title">
      <h3 class="candidate__card-title--name">{{ candidate.fio }}</h3>
      <p class="candidate__card-title--city">{{ candidate.city }}</p>
    </div>
    <div class="candidate__card-position">
      <p class="candidate__card-position--name">Frontend Developer:</p>
      <p class="candidate__card-position--grade">{{ candidate.greid }}</p>
    </div>
    <div class="candidate__card--salary">Зарплатные ожидания:{{ candidate.salary }}</div>
    <ul class="candidate__card-skills">
      <li class="candidate__card-skills--item"
        v-for="technology in candidate.technologyList"
        :key="technology"
      >
        {{ technology }}
      </li>
    </ul>
    <div class="candidate__card-about">qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty </div>
  </div>
</template>

<style scoped lang="scss">
.candidate__card {
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: $bg-card-color;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.04);
  }

  &-specialization {
  font-size: 14px;
  font-weight: 300;
  color: $text-help;
  }

  &-title{
  display: flex;
  flex-direction: column;
  width: 100%;

    &--name {
      font-size: 16px;
      font-weight: 900;
    }

    &--city {
      font-weight: 300;
      color: $text-help;
    }
  }

  &-position {
    display: flex;
    justify-content: space-between;

    &--grade {
      background-color: $main-color;
      padding: 2px 16px;
      color: white;
      border-radius: 4px;
    }
  }

  &-skills {
    display: flex;
    justify-content: flex-start;
    gap: 8px;

    &--item {
      padding: 2px 16px;
      border: 1px solid $main-color;
      color: $main-color;
      border-radius: 4px;
    }
  } 

  &-about {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    font-size: 14px;
    font-weight: 300;
    color: $text-help;
  }
}

</style>
