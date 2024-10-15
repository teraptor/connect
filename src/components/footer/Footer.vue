<template>
    <footer class="footer">
        <div class="footer-column">
         <!-- <img src="logo.png" alt="Company Logo" class="logo" /> -->
         <div class="social-links">
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Twitter</a>
            <a href="#" target="_blank">LinkedIn</a>
         </div>
        </div>
        <div class="footer-column">
         <p><strong>Все специалисты</strong></p>
         <p>Системные аналитики</p>
         <p>Frontend-разработчики</p>
         <p>Back-end-разработчики</p>
         <p>Дизайнеры</p>
         <p>Тестировщики</p>
         <p>Менеджеры проектов</p>
         <p>Системные архитекторы</p>
        </div>
        <div class="footer-column">
         <p>О платформе</p>
         <p>Стать партнером</p>
         <p>Запросы клиентов</p>
         <p>FAQ</p>
         <p>Контакты</p>
         <p>Блог</p>
         <p>Карьера</p>
        </div>
        <div class="footer-column">
         <p><strong>feedback@staffconnect.ru</strong></p>
         <p><strong>Телефон: 8 000 000 00 00</strong></p>
         <p>Подписка на новости</p>
         <p>Политика обработки ПД</p>
         <p>Условия использования сайта</p>
         <p>Договор присоединения</p>
        </div>
    </footer>
    </template>
    
<style scoped>
    .footer {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        background-color: #f8f8f8;
        flex-wrap: wrap; /* Позволяет колонкам переноситься на новую строку при необходимости */
    }
    
    .footer-column {
        flex-grow: 1;
        margin: 0 10px;
        max-width: 200px; /* Минимальная ширина для каждой колонки */
    }
    
    .logo {
        width: 150px;
        margin-bottom: 10px;
    }
    
    .social-links a {
        display: block;
        margin-bottom: 5px;
        text-decoration: none;
        color: #333;
    }
    
    .footer-column p {
        margin: 5px 0;
    }
    
    .footer-column p strong {
        font-weight: bold;
    }
</style>