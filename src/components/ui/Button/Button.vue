<template>
  <Button v-bind="$props" class="flex items-center justify-center">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue'

interface IProps {
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text'
  disabled?: boolean
  loading?: boolean
  block?: boolean
  danger?: boolean
  labelCol?: { span: number }
  wrapperCol?: { span: number }
}

defineProps<IProps>()
</script>

<style scoped></style>
