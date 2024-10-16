<script>
import { defineComponent } from "vue"
import LogoComponent from './logo/Logo.vue';
import AuthComponent from './auth/Auth.vue';
import MenuComponent from './menu/Menu.vue';
import CatalogMenu from '../catalog/menu/CatalogMenu.vue';

export default defineComponent({
    name: 'head',
    components: {
        LogoComponent,
        MenuComponent,
        AuthComponent,
        CatalogMenu,
    }
});
</script>

<template>
    <div class="container">
        <div class="header">
           <LogoComponent />
            <div class="header__nav">
                <nav class="nav">
                    <a href="#" class="nav__link current">Почему мы?</a>
                    <a href="#" class="nav__link">Как это работает?</a>
                    <a href="" class="nav__link">Вакансии</a>
                    <router-link to="register" class="nav__link">Бенчмарк</router-link>
                    <AuthComponent />
                </nav>
            </div>
        </div>
        <CatalogMenu />
    </div>
</template>


<style scoped>

</style>
