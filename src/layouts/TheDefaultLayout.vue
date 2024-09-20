<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "TheDefaultLayout",
});
</script>

<template>
    <header>
        <div class="container">
            <div class="header">
                <a class="header__logo" href="/">
                    <!-- <img src="#" alt="StaffConnect"> -->
                    <span class="logo">StaffConnect</span>
                </a>
                <div class="header__nav">
                    <nav class="nav">
                        <a href="#" class="nav__link current">Почему мы?</a>
                        <a href="#" class="nav__link">Как это работает?</a>
                        <a href="#" class="nav__link">Парнерам</a>
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
    <main>
        <div class="container">
            <slot />
        </div>
    </main>
    <footer>
        <div class="footer">
            <div class="container">
                <div class="social">
                    <div class="logo">staffconnect</div>
                    <div class="date">2024</div>
                </div>
                <div class="footer-menu">
                    <nav>
                        <a href="#" class="nav__link"><b>Все специалисты</b></a>
                        <a href="#" class="nav__link">Системные аналитики</a>
                        <a href="#" class="nav__link">Front-end разработчики</a>
                        <a href="#" class="nav__link">Back-end разработчики</a>
                        <a href="#" class="nav__link">UX/UI дизайнеры</a>
                        <a href="#" class="nav__link">Ручные тестировщики</a>
                        <a href="#" class="nav__link">Менеджеры проектов</a>
                        <a href="#" class="nav__link">Системные архитекторы</a>
                    </nav>
                    <nav>
                        <a href="#" class="nav__link">О платформе</a>
                        <a href="#" class="nav__link">Стать партнером</a>
                        <a href="#" class="nav__link">Сейчас ищут</a>
                        <a href="#" class="nav__link">FAQ</a>
                        <a href="#" class="nav__link">Контакты</a>
                        <a href="#" class="nav__link">Бенчи компаний</a>
                    </nav>
                </div>
                <div class="contacts">
                    <ul>
                        <li>info@staffconnect.ru</li>
                        <li>8 - 800 - 000 - 00 - 00</li>
                    </ul>
                </div>
                <div class="down-footer"></div>
            </div>
        </div>
    </footer>
</template>

<style>
</style>