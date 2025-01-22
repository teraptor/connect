<template>
  <div class="select__group">
    <label :for="id" class="select__group-label">{{ label }}</label>
    <div class="select__group-select-wrapper">
      <div
        class="select__group-selected"
        @click="toggleDropdown"
        :class="[size, {'select__group-selected--active': isDropdownOpen}]"
      >
        {{ selectedOption || placeholder }}
      </div>
      <div v-if="isDropdownOpen" class="select__group-dropdown">
        <input
          v-if="enableSearch"
          type="text"
          v-model="searchQuery"
          class="select__group-search"
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
import { ref, defineProps, defineEmits, computed, watch } from 'vue';

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
});

const internalValue = ref<string>(props.modelValue);
const searchQuery = ref<string>('');
const isDropdownOpen = ref<boolean>(false);
const selectedOption = ref<string | null>(null);
const hasError = ref<boolean>(false);
const errorMessage = ref<string>('');

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const handleInput = (value: string) => {
  internalValue.value = value;
  emit('update:modelValue', value);
};

const validate = () => {
  let validationError: string | false = false;

  for (const validator of props.validators) {
    validationError = validator(internalValue.value!);
    if (validationError) {
      hasError.value = true;
      errorMessage.value = validationError;
      return;
    }
  }

  hasError.value = false;
  errorMessage.value = '';
};

const filteredOptions = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return Object.values(props.enumObject).filter((value) =>
    value.toLowerCase().includes(query)
  );
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (value: string) => {
  selectedOption.value = value;
  handleInput(value);
  isDropdownOpen.value = false;
};

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style lang="scss" scoped>
.select__group {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 14px;

  &-label {
    font-weight: 300;
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
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &--active {
      border-color: #4b9cd3;
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
    z-index: 10;
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
    max-height: 36px;
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



