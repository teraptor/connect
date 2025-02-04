<template>
  <div class="textarea">
    <label v-if="label" :for="labelFor" class="textarea__label">{{ label }}</label>
    <textarea
      class="textarea__field"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"
      :disabled="disabled"
      :id="labelFor"
      @input="updateValue"
      :class=[size]
    />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  rows: {
    type: Number,
    default: 4,
  },
  cols: {
    type: Number,
    default: 50,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  labelFor: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'large',
  }
});

const emit = defineEmits(['update:modelValue']);

const $attrs = useAttrs();

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
};
</script>

<style lang="scss" scoped>
.textarea {
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 14px;

  &__label {
    font-weight: 300;
  }

  &__field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;

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
  }

  .small {
    width: 100px;
  }

  .medium {
    width: 200px;
  }

  .large {
    width: 100%;
    min-height: 300px;
  }
}
</style>
