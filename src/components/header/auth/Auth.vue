<script>
import { computed, defineComponent } from "vue"
export default defineComponent({
    name: 'auth',
});
</script>

<template>
    <a href="/login" class="btn btn_light _ml">Вход</a>
    <a href="/register" class="btn btn_accent _icon">Регистрация</a>
</template>