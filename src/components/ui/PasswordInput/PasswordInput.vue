<template>
  <InputPassword v-model:value="value" v-bind="$props" />
</template>

<script setup lang="ts">
import { InputPassword } from 'ant-design-vue'

interface IProps {
  visibilityToggle?: boolean
  placeholder?: string
}

withDefaults(defineProps<IProps>(), {
  visibilityToggle: true,
})

const value = defineModel<string>('value')
</script>

<style scoped></style>
