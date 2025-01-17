<script setup lang="ts">
import { usesidebarStore } from '@/stores/layout/useSidebarStore';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import UserCard from '../UserCard.vue';

const route = useRoute();
const { sidebarNav } = usesidebarStore();
const sidebarState = ref<{ [key: string]: boolean }>({});
const sidebarToggle = (key: string) => {
  sidebarState.value[key] = !sidebarState.value[key];
};

const isActive = (routeName: string | undefined) => {
  return route.name === routeName;
};
</script>

<template>
  <div class="sidebar">
    <ul class="sidebar__items">
      <li
        class="sidebar__item"
        v-for="item in sidebarNav"
        :key="item.title"
        type="link"
      > 
        <div class="sidebar__item-content" :class="{ 'sidebar__item-content--active': isActive(item.routeName) }">
          <div class="sidebar__item-content-main">
            <span :class="item.icon"/>
            <RouterLink v-if="item.routeName" :to="{ name: item.routeName }">
              {{ item.title }}
            </RouterLink>
            <span v-else>
              {{ item.title }}
            </span>
          </div>
          <span 
            v-if="item.items"
            :class="sidebarState[item.title] ? 'icon icon-chevron-up' : 'icon icon-chevron-down'" 
            @click="sidebarToggle(item.title)"
          />
        </div>
        <ul v-if="sidebarState[item.title]" class="sidebar__item-sub-items">
          <li
            class="sidebar__item-sub-item"
            v-for="subItem in item.items"
            :key="subItem.title"
            type="link"
            :class="{ 'sidebar__item-sub-item--active': isActive(subItem.routeName) }"
          >
            <RouterLink :to="{ name: subItem.routeName }">{{ subItem.title }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    <UserCard/>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background: $sidebar-background;
  color: $light-color;
  width: 20%;

  &__items {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1; 
    width: 100%;
    padding: 4px;
  }

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
    width: 100%;

    &-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      position: relative;

      &:hover::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: $light-color;
      }

      &--active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background-color: $main-color;
      }

      &-main {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
      }
    }

    &-sub-items {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 0 10px;
      width: 100%;
      font-size: 14px;
    }

    &-sub-item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: relative;
      border-radius: 10px;
      color: $light-color;
        &:hover {
          background-color: #374151;
          color: $light-color;
        }
      &--active {
        background-color: $light-color;
        color: $sidebar-background;
      }
    }
  }
}
</style>
