<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import FilterGroup from './FilterGroup.vue'
import Button from '@/components/ui/Button.vue'

interface Option {
  id: string
  name: string
}

const props = defineProps({
  availableLanguages: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  availableSpecializations: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  availableSubcategories: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  variant: {
    type: String as PropType<'default' | 'table'>,
    default: 'default',
  },
})

const emit = defineEmits(['applyFilter'])

const selectedLanguages = ref<string[]>([])
const selectedSpecializations = ref<string[]>([])
const selectedSubcategories = ref<string[]>([])

const applyFilter = () => {
  emit('applyFilter', {
    languages: selectedLanguages.value,
    specializations: selectedSpecializations.value,
    subcategories: selectedSubcategories.value,
  })
}
</script>

<template>
  <div :class="variant === 'table' ? 'filter-table' : 'filter'">
    <FilterGroup
      title="Языки"
      v-model="selectedLanguages"
      :options="availableLanguages"
    />
    <FilterGroup
      title="Должность"
      v-model="selectedSpecializations"
      :options="availableSpecializations"
    />
    <FilterGroup
      title="Специализация"
      v-model="selectedSubcategories"
      :options="availableSubcategories"
    />
    <Button
      type="button"
      button-type="primary"
      text="Поиск"
      icon="icon icon-search"
      @click="applyFilter"
      size="medium"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid $border-light;
  padding: 24px;
  background-color: $light-color;
  border-radius: 30px;
  gap: 24px;
  margin: 8px 0;
}

.filter-table {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  border: 2px solid $border-light;
  padding: 24px;
  background-color: $light-color;
  border-radius: 30px;
  gap: 24px;
  margin: 20px;
}
</style>
