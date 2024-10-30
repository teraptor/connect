<template>
  <Input v-model:value="value" v-bind="$props">
    <template v-if="isHaveSlot('prefix')" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="isHaveSlot('suffix')" #suffix>
      <slot name="suffix" />
    </template>
  </Input>
</template>

<script setup lang="ts">
import { isHaveSlot } from '@/utils/isHaveSlot'
import { Input } from 'ant-design-vue'

interface IProps {
  placeholder?: string
  prefix?: string
  suffix?: string
  allowClear?: boolean
  showCount?: boolean
  status?: 'error' | 'warning'
}

defineProps<IProps>()

const value = defineModel<string>('value')
</script>

<style scoped></style>
