<script>
import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router"

import Head from "@/components/header/Head.vue";
import Footer from "@/components/footer/Footer.vue";

export default defineComponent({
    name: "TheDefaultLayout",
    components: {
        Head,
        Footer,
    },
});
</script>

<template>
    <header> 
       <Head />
    </header>
    <div class="container">
       <slot />
    </div>
    <Footer />
</template>

<style>
</style>