<template>
  <Select v-model:value="value" v-bind="$props"></Select>
</template>

<script setup lang="ts">
import { Select, type SelectProps } from 'ant-design-vue'
import type { SelectValue } from 'ant-design-vue/es/select'

interface IProps {
  options: SelectProps['options']
  size?: SelectProps['size']
  allowClear?: boolean
  mode?: 'multiple' | 'tags'
  maxTagCount?: number
}

defineProps<IProps>()

const value = defineModel<SelectValue>('value')
</script>

<style scoped></style>
