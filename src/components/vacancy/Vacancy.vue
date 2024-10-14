<template>
   <a-row gutter="16">
       <!-- Левая колонка (30%) -->
       <a-col :span="7">
        <a-card bordered class="info-card">
           <p><strong>Сектор экономики:</strong> Финансовые услуги</p>
           <p><strong>Название позиции:</strong> Специалист по анализу данных</p>
           <p><strong>Ставка партнера:</strong> 4500 ₽/час</p>
           <p><strong>Количество специалистов:</strong> 5</p>
           <p><strong>Срок привлечения:</strong> 3 месяца</p>
           <p><strong>Формат работы:</strong> Гибридный</p>
           <p><strong>Регион:</strong> Санкт-Петербург</p>
           <p><strong>Средний срок обратной связи:</strong> 7 дней</p>
        </a-card>
        <a-card bordered class="payment-card">
           <p><strong>Средний срок оплаты в течение:</strong> 45 дней</p>
           <p><strong>Отрасль:</strong> Информационные технологии</p>
           <a-rate allow-half :default-value="4" />
           <p><strong>Отзывы:</strong> 85</p>
        </a-card>
       </a-col>
   
       <!-- Правая колонка (70%) -->
       <a-col :span="17">
        <a-card bordered class="requirement-card">
           <p><strong>Обязательные требования:</strong> Опыт работы с большими данными, знание Python и SQL</p>
        </a-card>
        <a-card bordered class="requirement-card">
           <p><strong>Дополнительные требования:</strong> Опыт работы с облачными платформами, знание машинного обучения</p>
        </a-card>
        <a-card bordered class="requirement-card">
           <p><strong>Задачи на проекте:</strong> Разработка аналитических моделей, автоматизация отчетности</p>
        </a-card>
        <a-card bordered class="requirement-card">
           <p><strong>Описание проекта:</strong> Проект направлен на оптимизацию бизнес-процессов с использованием аналитики данных</p>
        </a-card>
        <a-card bordered class="requirement-card">
           <p><strong>Команда:</strong> 12 человек, включая аналитиков, разработчиков и менеджеров проектов</p>
        </a-card>
        <a-card class="conditions-card">
           <p><strong>Обязательные условия выхода на проект:</strong> Подписание договора о конфиденциальности, наличие собственного оборудования</p>
        </a-card>
       </a-col>
   </a-row>
   </template>
   
   <script>
   export default {
   name: 'Vacancy',
   data() {
       return {
        vacancy: {
           sector: 'Финансовые услуги',
           position: 'Специалист по анализу данных',
           rate: '4500',
           specialists: '5',
           attractionPeriod: '3 месяца',
           workFormat: 'Гибридный',
           region: 'Санкт-Петербург',
           responseTime: '7 дней',
           paymentTerm: '45 дней',
           industry: 'Информационные технологии',
           rating: 4,
           reviews: '85',
           mandatoryRequirements: 'Опыт работы с большими данными, знание Python и SQL',
           additionalRequirements: 'Опыт работы с облачными платформами, знание машинного обучения',
           projectTasks: 'Разработка аналитических моделей, автоматизация отчетности',
           projectDescription: 'Проект направлен на оптимизацию бизнес-процессов с использованием аналитики данных',
           team: '12 человек, включая аналитиков, разработчиков и менеджеров проектов',
           projectConditions: 'Подписание договора о конфиденциальности, наличие собственного оборудования',
        },
       };
   },
   mounted() {
       this.fetchVacancyData();
   },
   methods: {
       async fetchVacancyData() {
        try {
           const response = await fetch('https://api.example.com/vacancy/1'); // Замените URL на ваш API
           if (!response.ok) {
            throw new Error('Ошибка при получении данных');
           }
           const data = await response.json();
           this.vacancy = data;
        } catch (error) {
           console.error('Ошибка:', error);
        }
       },
   },
   };
   </script>
   
   <style scoped>
   .info-card {
   margin-bottom: 16px;
   }
   
   .payment-card {
   border-color: orange;
   background-color: #fff3e0;
   margin-bottom: 16px;
   }
   
   .requirement-card {
   border-color: gray;
   background-color: white;
   margin-bottom: 16px;
   }
   
   .conditions-card {
   background-color: rgba(255, 165, 0, 0.5);
   border: none;
   }
   </style>