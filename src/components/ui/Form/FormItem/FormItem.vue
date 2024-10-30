<template>
  <FormItem v-bind="$props">
    <slot />
  </FormItem>
</template>

<script setup lang="ts">
import { FormItem } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'

interface IProps {
  label?: string
  name?: string
  rules?: Rule[]
}

defineProps<IProps>()
</script>

<style scoped></style>
