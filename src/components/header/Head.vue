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
                    <router-link to="#" class="nav__link">Почему мы?</router-link>
                    <router-link to="#" class="nav__link">Как это работает?</router-link>
                    <router-link to="vacancies" class="nav__link">Вакансии</router-link>
                    <router-link to="bench" class="nav__link">Бенчмарк</router-link>
                    <AuthComponent />
                </nav>
            </div>
        </div>
        <CatalogMenu />
    </div>
</template>


<style scoped>
:root {
    --light: #B5B0CA;
    --blue: #1a73e8;
    --accent: #f13939;
    --white: #FFFFFF;
    --dark: #000;
    --green: #41ba74;
    --gray: #f3f3f3;
    --light-gray: #fdfdfd;
    --tr: 0.2s;
}
.header {
    background-color: var(---gray);
}
</style>
