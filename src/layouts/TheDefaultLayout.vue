<script>
import { defineComponent } from "vue";
import Header from "../components/header/Head.vue";

export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <Header />
    <main>
        <div class="container">
            <slot />
        </div>
    </main>
</template>

<style>
</style>