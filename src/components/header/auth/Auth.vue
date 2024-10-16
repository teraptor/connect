<script>
import { computed, defineComponent } from "vue"
export default defineComponent({
    name: 'auth',
});
</script>

<template>
    <router-link to="login" class="btn btn_light _ml">Вход</router-link>
    <router-link to="register" class="btn btn_accent _icon">Регистрация</router-link>
</template>