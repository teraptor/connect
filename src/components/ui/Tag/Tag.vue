<template>
  <Tag v-bind="$props">
    <slot />
    <template #icon><slot name="icon" /></template>
  </Tag>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-vue'

interface IProps {
  color?: string
}

withDefaults(defineProps<IProps>(), {
  color: 'blue',
})
</script>

<style scoped></style>
