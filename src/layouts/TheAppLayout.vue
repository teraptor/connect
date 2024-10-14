<script lang="ts">
import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router"

import Head from "@/components/header/Head.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
  name: "TheAppLayout",
  setup() {
    const route = useRoute()
    /**
     *  This is a computed property that will return the name
     *  of the current route
     */
    const layout = computed(() => {
      const layout = route?.meta?.layout

      if (layout) {
        return `The${layout}Layout`
      }
      return "div"
    })
    console.log(layout)
    return {
      layout
    }
  }
})
</script>

<template>
  <header>
        <div class="container">
            <div class="header">
                <a class="header__logo" href="/">
                    <img src="@/assets/logo.png" class="logo" alt="StaffConnect" width="45%">
                    <!-- <span class="logo">StaffConnect</span> -->
                </a>
                <div class="header__nav">
                    <nav class="nav">
                        <a href="#" class="nav__link current">Почему мы?</a>
                        <a href="#" class="nav__link">Как это работает?</a>
                        <a href="/vacancies" class="nav__link">Вакансии</a>
                        <a href="/bench" class="nav__link">Бенчмарк</a>
                        <a href="#" class="btn btn_light _ml">Вход</a>
                        <a href="#" class="btn btn_accent _icon">Регистрация</a>
                    </nav>
                </div>
            </div>
            <div class="catalog_nav">
                <nav class="nav">
                    <a href="#" class="nav__link _ml">Аналитика</a>
                    <a href="#" class="nav__link">Разработка</a>
                    <a href="#" class="nav__link">Дизайн</a>
                    <a href="#" class="nav__link">Управление разработкой</a>
                    <a href="#" class="nav__link">Тестирование</a>
                    <a href="#" class="nav__link">Администрирование</a>
                    <a href="#" class="nav__link">Сопровождение</a>
                </nav>
            </div>
        </div>
    </header>
  <component :is="layout">
      <router-view />
  </component>
  <Footer />
</template>

<style scoped>

</style>
