<template>
  <button
    :type="type"
    :disabled="disabled"
  >
    {{ props.text }}
    <span v-if="icon" :class="icon"></span>
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
  icon: {
    type: String,
    default: ''
  }
});

</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 0 auto;
  color: white;
}

.btn-primary {
  background-color: blue;
  border: none;
}

.btn-primary:disabled {
  background-color: darken(blue, 20%);
  cursor: not-allowed;
}

button:focus {
  outline: none;
}

.button-icon {
  margin-left: 8px;
}

.w-20 {
  width: 20%;
}

.w-100 {
  width: 100%;
}
</style>

