<script>
import { computed, defineComponent } from "vue"
export default defineComponent({
    name: 'logo',
});
</script>


<template>
    <router-link to="/" class="header__logo">
        <img src="@/assets/logo.png" class="logo" alt="StaffConnect">
    </router-link>
</template>

<style scoped>

</style>
