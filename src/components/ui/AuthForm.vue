<template>
  <div class="form__container">
    <form class="form" @submit="handleSubmit">
      <div class="form__logo">
        <RouterLink to="/">
          <img src="/logo_removebg.png" alt="logo" />
        </RouterLink>
      </div>
      <h2 class="form__title">{{ props.title }}</h2>
      <slot />
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
const emit = defineEmits<{
  (e: 'submit'): void
}>()

const handleSubmit = (event: Event) => {
  event.preventDefault()
  emit('submit')
}
</script>

<style scoped lang="scss">
.form__container {
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 30px;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 400px;
  margin-bottom: 30px;

  &__logo {
    width: 50%;
    margin-bottom: 20px;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
  }
}
</style>
