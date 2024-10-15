<script>
import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
    name: "TheNotFoundLayout",
    methods: {
        goBack() {
            window.history.back();
        },
    },
});
</script>

<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Страница не найдена</p>
        <a href="#" @click.prevent="goBack">Вернуться назад</a>
    </div>
</template>

<style scoped>
    .not-found {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: linear-gradient(135deg, rgba(0, 198, 255, 0.7), rgba(0, 114, 255, 0.7));
        color: white;
        text-align: center;
    }

    h1 {
        font-size: 10rem;
        margin: 0;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    p {
        font-size: 1.5rem;
        margin: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    a {
        margin-top: 20px;
        font-size: 1.2rem;
        color: #ffffff;
        text-decoration: none;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    a:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
</style>
