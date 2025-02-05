<template>
  <div class="select__group">
    <label class="select__group-label" :for="id">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <div class="select__group-select-wrapper">
      <select
        :id="id"
        class="select__group-select"
        :required="required"
        :value="modelValue"
        @input="handleInput"
        :class="[size, { 'select-error': hasError }]"
        @blur="validate"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="(value, key) in enumObject" :key="key" :value="value">
          {{ value }}
        </option>
      </select>
    </div>
    <span v-if="hasError" class="select__group-error">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  enumObject: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Выберите вариант:',
  },
  required: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
  },
  validators: {
    type: Array as () => Array<(value: string) => string | false>,
    default: () => [],
  },
})

const internalValue = ref<string>(props.modelValue)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLSelectElement
  if (target) {
    const value = target.value
    internalValue.value = value
    emit('update:modelValue', value)
  }
}

const validate = () => {
  let validationError: string | false = false

  for (const validator of props.validators) {
    validationError = validator(internalValue.value!)
    if (validationError) {
      hasError.value = true
      errorMessage.value = validationError
      return
    }
  }

  hasError.value = false
  errorMessage.value = ''
}

watch(internalValue, newValue => {
  emit('update:modelValue', newValue)
})
</script>

<style lang="scss" scoped>
.select__group {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 14px;

  &-label {
    font-weight: 300;

    span {
      color: $danger;
    }
  }

  &-select-wrapper {
    position: relative;
  }

  &-select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 200;

    &::placeholder {
      font-size: 14px;
      font-weight: 300;
    }

    &:focus {
      border-color: #4b9cd3;
      background-color: #fff;
      box-shadow: 0 0 8px rgba(75, 156, 211, 0.5);
      outline: none;
    }

    &.select-error {
      border-color: red;
    }
  }

  .small {
    width: 100px;
  }

  .medium {
    width: 200px;
    max-height: 36px;
  }

  .large {
    width: 100%;
  }

  &-error {
    color: red;
    font-size: 12px;
  }
}
</style>
