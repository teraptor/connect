<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { PropType } from 'vue'

interface Option {
  id: string
  name: string
}

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<Option[]>,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const localSelectedItems = ref([...props.modelValue])

const updateSelection = () => {
  emit('update:modelValue', localSelectedItems.value)
}

watchEffect(() => {
  localSelectedItems.value = [...props.modelValue]
})
</script>
<template>
  <div class="filter__group">
    <h3 class="filter__group-title">{{ props.title }}:</h3>
    <label v-for="item in options" :key="item.id" class="filter__group-item">
      <input
        type="checkbox"
        :value="item.id"
        v-model="localSelectedItems"
        @change="updateSelection"
      />
      {{ item.name }}
    </label>
  </div>
</template>
<style lang="scss" scoped>
.filter__group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 300;

  &-title {
    font-weight: 400;
    font-size: 16px;
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
  }
}
</style>
