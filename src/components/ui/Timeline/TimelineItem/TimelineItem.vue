<template>
  <TimelineItem v-bind="$props">
    <slot />
  </TimelineItem>
</template>

<script setup lang="ts">
import { TimelineItem } from 'ant-design-vue'

interface IProps {
  color?: string
  dot?: string
  label?: string
  position?: 'left' | 'right'
}

defineProps<IProps>()
</script>

<style lang="scss">
.ant-timeline-item-last > .ant-timeline-item-content {
  min-height: 0 !important;
}

.ant-timeline .ant-timeline-item {
  padding-bottom: 0;
}
</style>
