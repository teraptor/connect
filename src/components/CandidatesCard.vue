<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouteNames } from '@/router/routes/routeNames';
import { ref } from 'vue';
import Button from './ui/Button.vue';

const isHovered = ref<boolean>(false);
const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
const changeIsHovered = () => isHovered.value = !isHovered.value;
const goToCandidateDetail = () => {
  router.push({ name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL, params: { id: props.candidate.id } });
};
</script>

<template>
  <div 
    class="candidate__card" 
    @click="goToCandidateDetail"   
    @mouseenter="changeIsHovered"
    @mouseleave="changeIsHovered"
  >
    <div class="candidate__card-specialization">MedTech && EdTech</div>
    <h3 class="candidate__card-name">
      {{ candidate.name }}
      {{ candidate.lastname.slice(0, 1) ? `${candidate.lastname[0]}.` : '' }}
    </h3>
    <p class="candidate__card-country">Россия</p>
    <div class="candidate__card-position">
      <p class="candidate__card-position-name">Frontend Developer:</p>
      <p class="candidate__card-position-grade">middle</p>
    </div>
    <div class="candidate__card-salary">
      <div class="candidate__card-salary-hour">
        {{ candidate.salary.salary_hour }} RUB/час
      </div>
      <div class="candidate__card-salary-month">
        {{ candidate.salary.salary_month }} RUB/месяц
      </div>
    </div>
    <ul class="candidate__card-skills">
      <!-- <li class="candidate__card-skills-item"
        v-for="technology in candidate.technologyList"
        :key="technology"
      >
        {{ technology }}
      </li> -->
      <li class="candidate__card-skills-item">
        tech
      </li>
      <li class="candidate__card-skills-item">
        tech
      </li>
      <li class="candidate__card-skills-item">
        tech
      </li>
      <li class="candidate__card-skills-item">
        tech
      </li>
    </ul>
    <div class="candidate__card-about">qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty </div>
    <div v-if="isHovered" class="candidate__card-hover">
      <Button 
        button-type="secondary"
        text="Подробнее"
        @click="goToCandidateDetail"
        size="small"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.candidate__card {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: $bg-card-color;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: $box-shadow;
  transition: transform 0.2s;
  font-size: 14px;
  &:hover {
    transform: scale(1.04);
  }

  &-specialization {
  font-size: 14px;
  font-weight: 300;
  color: $help-color;
  border-bottom: 1px solid $border-light;
  }

  &-name {
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
    }

  &-country {
    font-size: 14px;
    font-weight: 300;
    color: $help-color;
  }

  &-position {
    display: flex;
    justify-content: space-between;

    &-grade {
      background-color: $main-color;
      padding: 2px 16px;
      color: $light-color;
      border-radius: 4px;
    }
  }

  &-salary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    &-hour,
    &-month {
      font-weight: 600;
    }
  }

  &-skills {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;

    &-item {
      padding: 2px 4px;
      border: 1px solid $main-color;
      color: $main-color;
      border-radius: 4px;
    }
  } 

  &-about {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    font-size: 14px;
    font-weight: 300;
    padding-top: 4px;
    color: $help-color;
    border-top: 1px solid $border-light;
  }

  &-hover {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 5px;
    background: $light-color;
    backdrop-filter: blur(12px);
  }
}
</style>