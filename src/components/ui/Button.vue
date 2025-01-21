<template>
  <button
    :type="type"
    :disabled="disabled || isLoading"
    :class="['btn', buttonSize]"
  >
    <span v-if="isLoading" class="icon icon-spinner"></span>
    <span v-else class="btn-content">
      {{ text }}
      <span v-if="icon" :class="icon"></span>
    </span>
  </button>
</template>

<script setup lang="ts">

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
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'large'
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

const buttonSize = computed(() => `btn-${props.size}`);
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: $light-color;
  font-size: 16px;
  font-weight: 300;
  max-height: 36px;
  &-small {
    width: 100px;
  }


  &-medium {
    width: 150px;
  }

  &-large {
    width: 100%;
  }
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

.btn-secondary {
  border: 1px solid $btn-secondary;
  color: $btn-secondary;

  &:disabled {
    border: 1px solid $btn-secondary-disabled;
    color: $btn-secondary-disabled;
    cursor: not-allowed;
  }
  &:active {
    border: 1px solid $btn-secondary-active;
    color: $btn-secondary-active;
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

.btn-primary,
.btn-danger,
.btn-secondary,
.btn-success {
  .icon-spinner {
    animation: spin 1s linear infinite;
  }
  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-weight: 400;
  }
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
