<template>
  <div class="select__group">
    <label :for="id" class="select__group-label">
      {{ label }}
      <span v-if="required">*</span>
    </label>
    <div class="select__group-select-wrapper">
      <div
        @blur="validate"
        class="select__group-selected"
        @click="toggleDropdown"
        :class="[
          size,
          { 'select__group-selected--active': isDropdownOpen },
          { 'select__group-selected--error': hasError },
          { placeholder: !selectedOption },
        ]"
      >
        {{ selectedOption || placeholder }}
      </div>
      <div v-if="isDropdownOpen" class="select__group-dropdown">
        <InputField
          v-if="enableSearch"
          v-model="searchQuery"
          type="text"
          id="surname"
          :placeholder="'Поиск...'"
        />
        <div
          v-for="(value, key) in filteredOptions"
          :key="key"
          class="select__group-option"
          @click="selectOption(value)"
        >
          {{ value }}
        </div>
      </div>
    </div>
    <span v-if="hasError" class="select__group-error">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed, watch } from 'vue'
import InputField from './InputField.vue'

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
  enableSearch: {
    type: Boolean,
    default: false,
  },
})

const internalValue = ref<string>(props.modelValue)
const searchQuery = ref<string>('')
const isDropdownOpen = ref<boolean>(false)
const selectedOption = ref<string | null>(props.modelValue)
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')
const toggleCount = ref<number>(0)

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

watch(
  () => props.modelValue,
  newValue => {
    selectedOption.value = newValue
  },
)

const handleInput = (value: string) => {
  internalValue.value = value
  emit('update:modelValue', value)
}

const validate = () => {
  let validationError: string | false = false
  for (const validator of props.validators) {
    validationError = validator(internalValue.value)
    if (validationError) {
      hasError.value = true
      errorMessage.value = validationError
      return
    }
  }

  hasError.value = false
  errorMessage.value = ''
}
const filteredOptions = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return Object.values(props.enumObject).filter(value =>
    value.toLowerCase().includes(query),
  )
})

const toggleDropdown = () => {
  toggleCount.value++
  isDropdownOpen.value = !isDropdownOpen.value
  if (toggleCount.value >= 2) validate()
}

const selectOption = (value: string) => {
  selectedOption.value = value
  handleInput(value)
  isDropdownOpen.value = false
  validate()
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
  gap: 4px;

  &-label {
    font-weight: 300;

    span {
      color: $danger-color;
    }
  }

  &-select-wrapper {
    position: relative;
    width: 100%;
  }

  &-selected {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 300;

    &.placeholder {
      color: $help-color;
    }
    &--active {
      border-color: #4b9cd3;
      background-color: #fff;
      box-shadow: 0 0 8px rgba(75, 156, 211, 0.5);
      outline: none;
    }
    &--error {
      border-color: red;
    }
  }

  &-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 120px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: white;
    z-index: 20;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  &-search {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 8px;
    width: 100%;
  }

  &-option {
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .small {
    width: 100px;
    height: 36px;
  }

  .medium {
    width: 200px;
    height: 36px;
  }

  .large {
    width: 100%;
    height: 36px;
  }

  &-error {
    color: red;
    font-size: 12px;
  }
}
</style>
