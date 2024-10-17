<script>
import { computed, defineComponent } from "vue"
export default defineComponent({
    name: 'logo',
});
</script>


<template>
    <router-link to="/" class="header__logo">
        <img src="@/assets/logo.png" class="logo" alt="StaffConnect" width="45%">
        <!-- <span class="logo">StaffConnect</span> -->
    </router-link>
</template>

<style scoped>

</style>
