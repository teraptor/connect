<template>
  <Timeline v-bind="$props">
    <slot />
    <template #pendingDot><slot name="pendingDot" /></template>
  </Timeline>
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-vue'

interface IProps {
  mode?: 'left' | 'alternate' | 'right'
  pending?: boolean | string
}

withDefaults(defineProps<IProps>(), {
  mode: 'left',
})
</script>

<style scoped></style>
