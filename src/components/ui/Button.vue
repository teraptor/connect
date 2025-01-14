<template>
  <button
    :type="type"
    :disabled="disabled || isLoading"
    class="btn"
  >
    <span v-if="isLoading" class="btn-spinner"></span>
    <span v-else class="btn-content">
      {{ text }}
      <span v-if="icon" :class="icon" class="btn-icon"></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'submit' | 'reset' | 'button'>,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  isLoading: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0 auto;
  color: white;
  font-size: 16px;
  font-weight: 300;

  &:focus {
    outline: none;
  }
}

.btn-primary {
  background-color: $btn-primary;
  border: none;

  &:disabled {
  background-color: $btn-primary-disabled;
  cursor: not-allowed;
  }
  &:active {
    background-color: $btn-primary-active;
  }
}

.btn-danger {
  background-color: $btn-danger;
  border: none;

  &:disabled {
  background-color: $btn-danger-disabled;
  cursor: not-allowed;
  }
  &:active {
    background-color: $btn-danger-active;
  }
}

.btn-success {
  background-color: $btn-success;
  border: none;

  &:disabled {
  background-color: $btn-success-disabled;
  cursor: not-allowed;
  }
  &:active {
    background-color: $btn-success-active;
  }
}

.btn-spinner {
  border: 2px solid #fff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}
.btn-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
