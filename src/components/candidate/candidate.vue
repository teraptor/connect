<template>
    <div class="container">
         <div class="breadcrumb">
            <div class="breadcrumb-container">
             <div class="breadcrumb-list">
                <div class="breadcrumb-item">
                 <router-link to="home" class="link">Вход</router-link>
                </div>
                <div class="breadcrumb-item">
                 <router-link to="bench" class="link active">
                    Каталог ИТ-специалистов
                 </a>
                </div>
             </div>
            </div>
         </div>
         <div class="profile-header">
            <div class="profile-info">
             <div class="work-industries">
                <a href="/catalog-specialists/work_industries-information-security/" class="work-industries-link">
                 Information Security
                </a>
             </div>
             <h1 class="profile-title">
                Глеб М. Инженер сопровождения, Middle+
             </h1>
             <div class="profile-id">
                ID 14457
             </div>
            </div>
            <div class="download-buttons">
             <button class="download-btn">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-download-file"></use>
                </svg>
                Скачать резюме
             </button>
            </div>
         </div>
         <div class="menu">
            <ul class="menu-list">
             <li class="menu-item">О специалисте</li>
             <li class="menu-item">Проекты</li>
             <li class="menu-item">Формат работы</li>
             <li class="menu-item">Дипломы и сертификаты</li>
             <li class="menu-item">Образование</li>
            </ul>
         </div>
         <div class="profile-content">
            <div class="rate-wrapper">
             <div class="rate-block">
                <div class="label">Ставка</div>
                <div class="rate">2 500 Р/час</div>
                <div class="vat-rate">НДС не облагается</div>
             </div>
             <div class="availability">
                Специалист доступен с 3 октября 2024 г.
             </div>
             <button class="similar-specialists-btn">
                Показать похожих специалистов
             </button>
             <a href="/faq/kak-mne-zabronirovat-ponravivshegosya-specialista" class="more-info-link" target="_blank">
                Подробнее
             </a>
            </div>
            <div class="personal-info">
             <div class="avatar">
                <div class="avatar-img">
                 <svg xmlns="http://www.w3.org/2000/svg" class="icon">
                    <use href="#i-avatar-middle"></use>
                 </svg>
                 <div class="user-initials">
                    <span>ГМ</span>
                 </div>
                </div>
             </div>
             <div class="specialist-info">
                <div class="name">
                 <span>Глеб М.</span>
                </div>
                <div class="additional-data">
                 Мужчина, 24 года
                </div>
                <div class="location">
                 Россия, Краснодар, UTC+3
                </div>
             </div>
            </div>
         </div>
         <div class="accordion">
            <div class="accordion-item">
             <div class="accordion-title">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-user-card"></use>
                </svg>
                О специалисте
             </div>
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use href="#i-chevron-down"></use>
             </svg>
            </div>
            <div class="accordion-content">
             <div class="field">
                <div class="label">Специализация</div>
                <div>Инженер сопровождения</div>
             </div>
             <div class="field">
                <div class="label">Грейд</div>
                <div><span class="status">Middle+</span></div>
             </div>
             <div class="field">
                <div class="label">Навыки</div>
                <div class="skills">
                 <div class="skill">Active Directory</div>
                 <div class="skill">Astra Linux</div>
                 <div class="skill">Check Point</div>
                 <div class="skill">Cisco</div>
                 <!-- Добавьте остальные навыки здесь -->
                </div>
             </div>
            </div>
            <div class="accordion-item">
             <div class="accordion-title">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-projects"></use>
                </svg>
                Проекты
             </div>
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use href="#i-chevron-down"></use>
             </svg>
            </div>
            <div class="accordion-content">
             <div class="field">
                <div class="label">Проект 1</div>
                <div>Описание проекта 1...</div>
             </div>
             <div class="field">
                <div class="label">Проект 2</div>
                <div>Описание проекта 2...</div>
             </div>
             <!-- Добавьте другие проекты здесь -->
            </div>
            <div class="accordion-item">
             <div class="accordion-title">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-work-format"></use>
                </svg>
                Формат работы
             </div>
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use href="#i-chevron-down"></use>
             </svg>
            </div>
            <div class="accordion-content">
             <div class="field">
                <div>Удаленная работа, гибкий график.</div>
             </div>
            </div>
            <div class="accordion-item">
             <div class="accordion-title">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-certificates"></use>
                </svg>
                Дипломы и сертификаты
             </div>
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use href="#i-chevron-down"></use>
             </svg>
            </div>
            <div class="accordion-content">
             <div class="field">
                <div class="label">Сертификат 1</div>
                <div>Описание сертификата 1...</div>
             </div>
             <div class="field">
                <div class="label">Сертификат 2</div>
                <div>Описание сертификата 2...</div>
             </div>
             <!-- Добавьте другие сертификаты здесь -->
            </div>
            <div class="accordion-item">
             <div class="accordion-title">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                 <use href="#i-education"></use>
                </svg>
                Образование
             </div>
             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                <use href="#i-chevron-down"></use>
             </svg>
            </div>
            <div class="accordion-content">
             <div class="field">
                <div class="label">Университет</div>
                <div>Название университета, факультет, год окончания.</div>
             </div>
             <div class="field">
                <div class="label">Курс</div>
                <div>Название курса, год окончания.</div>
             </div>
             <!-- Добавьте другие образовательные достижения здесь -->
            </div>
         </div>
    </div>
    </template>
    
    <script>
    export default {
    name: 'SpecialistProfile',
    };
    </script>
    
    <style scoped>
    .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    }
    
    .breadcrumb {
    display: flex;
    margin-bottom: 20px;
    }
    
    .breadcrumb-list {
    display: flex;
    }
    
    .breadcrumb-item {
    margin-right: 10px;
    }
    
    .link {
    text-decoration: none;
    color: #007bff;
    }
    
    .link.active {
    font-weight: bold;
    }
    
    .profile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    }
    
    .profile-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    }
    
    .work-industries-link {
    text-decoration: none;
    color: #007bff;
    }
    
    .profile-title {
    font-size: 24px;
    font-weight: bold;
    }
    
    .profile-id {
    margin-top: 5px;
    }
    
    .download-buttons {
    display: flex;
    align-items: center;
    }
    
    .download-btn {
    padding: 5px 10px;
    cursor: pointer;
    }
    
    .menu {
    display: flex;
    margin-bottom: 20px;
    }
    
    .menu-list {
    display: flex;
    list-style: none;
    padding: 0;
    }
    
    .menu-item {
    margin-right: 20px;
    cursor: pointer;
    }
    
    .profile-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    }
    
    .personal-info {
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex: 2;
    }
    
    .avatar {
    margin-right: 20px;
    }
    
    .avatar-img {
    display: flex;
    align-items: center;
    }
    
    .user-initials {
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
    }
    
    .specialist-info {
    display: flex;
    flex-direction: column;
    }
    
    .rate-wrapper {
    display: flex;
    flex-direction: column;
    background-color: rgba(128, 128, 128, 0.4);
    border: 1px solid gray;
    padding: 10px;
    border-radius: 5px;
    flex: 1;
    }
    
    .label {
    font-weight: bold;
    }
    
    .rate,
    .vat-rate,
    .availability {
    margin-top: 5px;
    }
    
    .similar-specialists-btn {
    margin-top: 10px;
    padding: 5px 10px;
    cursor: pointer;
    }
    
    .more-info-link {
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: #007bff;
    }
    
    .accordion {
    margin-top: 20px;
    }
    
    .accordion-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 10px;
    }
    
    .accordion-title {
    display: flex;
    align-items: center;
    }
    
    .icon {
    margin-right: 5px;
    }
    
    .field {
    margin-top: 10px;
    }
    
    .field .label {
    font-weight: bold;
    }
    
    .skills {
    display: flex;
    flex-wrap: wrap;
    }
    
    .skill {
    background-color: #e0e0e0;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    }
    </style>