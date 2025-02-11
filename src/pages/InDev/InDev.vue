<template>
  <div class="in-dev">
    <div class="in-dev__inner">
      <div class="in-dev__logo">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <h2 class="in-dev__title">Мы строим что-то новое, возвращайтесь позже!</h2>
      <img src="@/assets/images/indev.png" class="in-dev__image" />
      <p class="in-dev__description">
        Мы работаем над чем-то уникальным. Ожидайте, мы скоро вернемся!
        <router-link class="in-dev__link" to="/"
          >Вернуться на главную</router-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.in-dev {
  display: flex;
  justify-content: center;
  padding-top: 120px;
  height: 100vh;

  &__inner {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
    line-height: 1.5;
  }

  &__logo {
    max-width: 250px;
  }

  &__title {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__image {
    height: 150px;
    width: 150px;
  }

  &__description {
    font-size: 16px;
    font-weight: 400;
    color: $help-color;
  }

  &__link {
    color: $main-color;
    text-decoration: underline;
  }
}
</style>
