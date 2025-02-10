<template>
  <div class="not-found">
    <div class="not-found__inner">
      <div class="not-found__logo">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <h2 class="not-found__title">Страница не найдена</h2>
      <img src="@/assets/images/404.png" class="not-found__image" />
      <p class="not-found__description">
        Страница не найдена, давайте попробуем все заново ?
        <router-link class="not-found__link" to="/"
          >Вернуться на главную</router-link
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
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
    height: 250px;
    width: 250px;
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
