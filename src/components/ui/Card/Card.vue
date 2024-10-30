<template>
  <Card v-bind="$props">
    <template #extra><slot name="extra" /></template>
    <slot />
  </Card>
</template>

<script setup lang="ts">
import { Card } from 'ant-design-vue'

interface IProps {
  title?: string
  bordered?: boolean
}

defineProps<IProps>()
</script>

<style scoped></style>
