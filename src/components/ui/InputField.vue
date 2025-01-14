<template>
  <div class="form__group">
    <label class="form__group-label" :for="id">{{ label }}</label>
    <div class="form__group-input-wrapper">
      <input
        class="form__group-input"
        v-bind="$attrs"
        v-model="internalValue"
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :autocomplete="autocomplete"
        :class="{ 'input-error': hasError }"
        @blur="validate"
      />
      <span class="form__group-icon" v-if="icon" @click="$emit('icon-click')">
        <span :class="icon"></span>
      </span>
    </div>
    <span v-if="hasError" class="form__group-error">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  label: String,
  id: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
  required: {
    type: Boolean,
    default: false,
  },
  icon: String,
  autocomplete: String,
  modelValue: String,
  validators: {
    type: Array as () => Array<(value: any) => string | false>,
    default: () => [],
  },
});

const internalValue = ref<string | undefined>(props.modelValue);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>('');

const emit = defineEmits(['update:modelValue', 'icon-click']);

const validate = () => {
  let validationError: string | false = false;

  for (const validator of props.validators) {
    validationError = validator(internalValue.value);
    if (validationError) {
      hasError.value = true;
      errorMessage.value = validationError;
      return;
    }
  }

  hasError.value = false;
  errorMessage.value = '';
};

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style lang="scss">
.form__group {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 14px;

  &-label {
    font-weight: 300;
  }

  &-input-wrapper {
    position: relative;
  }

  &-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

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

    &.input-error {
      border-color: red;
    }
  }
  &-icon {
    position: absolute;
    right: 10px;
    top: 30%;
    cursor: pointer;
  }
  &-error {
    color: red;
    font-size: 12px;
  }
}
</style>
