<template>
  <Form
    v-bind="$props"
    @fields-change="$emit('fields-change', $event)"
    @finish="$emit('finish', $event)"
    @finish-failed="$emit('finish-failed', $event)"
  >
    <slot />
  </Form>
</template>

<script setup lang="ts">
import { Form } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { Reactive } from 'vue'

const props = defineProps<{
  model?: Reactive<any>;
  name?: string;
  layout?: 'vertical' | 'inline' | 'horizontal';
  disabled?: boolean;
  rules: Record<string, Rule[]>;
  labelCol?: { span: number };
  wrapperCol?: { span: number };
}>()
const { rules, model } = toRefs(props)
defineEmits(['fields-change', 'finish', 'finish-failed'])

const useForm = Form.useForm
const { resetFields, validate, validateInfos } = useForm(model, rules)

defineExpose({ resetFields, validate, validateInfos })
</script>

<style scoped></style>
