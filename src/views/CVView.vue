<template>
    <div class="cv-form">
        <div class="upload-cv">
            <h2>Загрузите CV</h2>
            <input type="file" @change="onFileSelected" accept=".pdf">
        </div>
      <!-- ... drag&drop и формы -->
      <Tabs type="card" :activeKey="activeTab" @change="setActiveTab">
        <TabPane key="1" tab="Информация о себе">
            <div class="tab-content">
                <h1 class="title is-3">Информация о себе</h1>
                <div class="columns">
                <!-- Левая колонка (70%) -->
                <div class="column is-7/12 left-column">
                    <div class="specialist-info grey-bg">
                    <h2 class="subtitle is-4">Специалист</h2>
                    <div class="photo-row">
                        <img :src="profilePhoto" alt="Фото профиля" />
                        <span>ФИО: {{ specialist.fullName }}</span>
                    </div>
                    <p>Пол: {{ specialist.gender }}</p>
                    <p>Возраст: {{ specialist.age }}</p>
                    <p>Дата рождения: {{ specialist.birthDate }}</p>
                    <p>Город: {{ specialist.city }}</p>
                    <p>Готов к переезду: {{ specialist.relocation ? 'Да' : 'Нет' }}</p>
        
                    <h3 class="subtitle is-5">Столбец слева</h3>
                    <div class="stack-item" v-for="(skill, index) in specialist.skills" :key="index">
                        <span>{{ skill.name }}:</span> {{ skill.level }}
                    </div>
                    </div>
                </div>
        
                <!-- Правая колонка (30%) -->
                <div class="column is-5/12 right-column">
                    <div class="views grey-bg">
                    <h2 class="subtitle is-4">Просмотры</h2>
                    <div class="view-count">
                        <i class="fas fa-eye"></i> {{ viewsCount }}
                    </div>
                    </div>
        
                    <div class="responsible grey-bg">
                    <h2 class="subtitle is-4">Ответственный</h2>
                    <p>{{ company.name }}</p>
                    <p>{{ contactPerson.fullName }}</p>
                    <p>Телефон: {{ contactPerson.phone }}</p>
                    <p>Email: {{ contactPerson.email }}</p>
                    </div>
                </div>
                </div>
            </div>
        </TabPane>
        <TabPane key="2" tab="Навыки и опыт">
            <div class="columns left-column">
                <h1>Навыки и опыт</h1>
                <p><strong>Специализация:</strong> Системный аналитик</p>
                <h2>Ключевые навыки</h2>
                <ul>
                    <li>HTML: ★★★☆☆</li>
                    <li>CSS: ★★★☆☆</li>
                    <li>JavaScript: ★★★☆☆</li>
                    <li>ReactJS: ★★☆☆☆</li>
                </ul>
                <p><strong>Грейд:</strong> Senior</p>
                <p><strong>Отрасли работы:</strong> FinTech, RnD, Telecom</p>
            </div>
            <div class="columns left-column">
                <h1>Языки</h1>
                <ul>
                    <li>Английский: C1 - продвинутый</li>
                    <!-- Добавьте другие языки по необходимости -->
                </ul>
            </div>
        </TabPane>
        <TabPane key="3" tab="Проекты в компаниях">
            <a-card v-for="project in projects" :key="project.companyName">
                <a-card-meta title=":project.companyName" description=":project.role">
                    <!-- Add more card meta fields as needed -->
                </a-card-meta>

                <div class="responsibilities">
                    <h3>Обязанности</h3>
                    <ul>
                    <li v-for="responsibility in project.responsibilities" :key="responsibility">{{ responsibility }}</li>
                    </ul>
                </div>

                <!-- Add other sections for techStack, projectDescription, etc. -->
            </a-card>
        </TabPane>
        <TabPane key="4" tab="Образование">
            <div class="tab-content">
                <h1 class="title is-3">Информация о себе</h1>
                <div class="columns">
                <!-- Левая колонка (70%) -->
                <div class="column is-7/12 left-column">
                    <div class="specialist-info grey-bg">
                    <h2 class="subtitle is-4">Специалист</h2>
                    <div class="photo-row">
                        <img :src="profilePhoto" alt="Фото профиля" />
                        <span>ФИО: {{ specialist.fullName }}</span>
                    </div>
                    <p>Пол: {{ specialist.gender }}</p>
                    <p>Возраст: {{ specialist.age }}</p>
                    <p>Дата рождения: {{ specialist.birthDate }}</p>
                    <p>Город: {{ specialist.city }}</p>
                    <p>Готов к переезду: {{ specialist.relocation ? 'Да' : 'Нет' }}</p>
        
                    <h3 class="subtitle is-5">Столбец слева</h3>
                    <div class="stack-item" v-for="(skill, index) in specialist.skills" :key="index">
                        <span>{{ skill.name }}:</span> {{ skill.level }}
                    </div>
                    </div>
                </div>
        
                <!-- Правая колонка (30%) -->
                <div class="column is-5/12 right-column">
                    <div class="views grey-bg">
                    <h2 class="subtitle is-4">Просмотры</h2>
                    <div class="view-count">
                        <i class="fas fa-eye"></i> {{ viewsCount }}
                    </div>
                    </div>
        
                    <div class="responsible grey-bg">
                    <h2 class="subtitle is-4">Ответственный</h2>
                    <p>{{ company.name }}</p>
                    <p>{{ contactPerson.fullName }}</p>
                    <p>Телефон: {{ contactPerson.phone }}</p>
                    <p>Email: {{ contactPerson.email }}</p>
                    </div>
                </div>
                </div>
            </div>
        </TabPane>
        <TabPane key="5" tab="Условия работы">
            <div class="tab-content">
                <h1 class="title is-3">Информация о себе</h1>
                <div class="columns">
                <!-- Левая колонка (70%) -->
                <div class="column is-7/12 left-column">
                    <div class="specialist-info grey-bg">
                    <h2 class="subtitle is-4">Специалист</h2>
                    <div class="photo-row">
                        <img :src="profilePhoto" alt="Фото профиля" />
                        <span>ФИО: {{ specialist.fullName }}</span>
                    </div>
                    <p>Пол: {{ specialist.gender }}</p>
                    <p>Возраст: {{ specialist.age }}</p>
                    <p>Дата рождения: {{ specialist.birthDate }}</p>
                    <p>Город: {{ specialist.city }}</p>
                    <p>Готов к переезду: {{ specialist.relocation ? 'Да' : 'Нет' }}</p>
        
                    <h3 class="subtitle is-5">Столбец слева</h3>
                    <div class="stack-item" v-for="(skill, index) in specialist.skills" :key="index">
                        <span>{{ skill.name }}:</span> {{ skill.level }}
                    </div>
                    </div>
                </div>
        
                <!-- Правая колонка (30%) -->
                <div class="column is-5/12 right-column">
                    <div class="views grey-bg">
                    <h2 class="subtitle is-4">Просмотры</h2>
                    <div class="view-count">
                        <i class="fas fa-eye"></i> {{ viewsCount }}
                    </div>
                    </div>
        
                    <div class="responsible grey-bg">
                    <h2 class="subtitle is-4">Ответственный</h2>
                    <p>{{ company.name }}</p>
                    <p>{{ contactPerson.fullName }}</p>
                    <p>Телефон: {{ contactPerson.phone }}</p>
                    <p>Email: {{ contactPerson.email }}</p>
                    </div>
                </div>
                </div>
            </div>
        </TabPane>
        <TabPane key="6" tab="Доп. данные">
            <div class="tab-content">
                <h1 class="title is-3">Информация о себе</h1>
                <div class="columns">
                <!-- Левая колонка (70%) -->
                <div class="column is-7/12 left-column">
                    <div class="specialist-info grey-bg">
                    <h2 class="subtitle is-4">Специалист</h2>
                    <div class="photo-row">
                        <img :src="profilePhoto" alt="Фото профиля" />
                        <span>ФИО: {{ specialist.fullName }}</span>
                    </div>
                    <p>Пол: {{ specialist.gender }}</p>
                    <p>Возраст: {{ specialist.age }}</p>
                    <p>Дата рождения: {{ specialist.birthDate }}</p>
                    <p>Город: {{ specialist.city }}</p>
                    <p>Готов к переезду: {{ specialist.relocation ? 'Да' : 'Нет' }}</p>
        
                    <h3 class="subtitle is-5">Столбец слева</h3>
                    <div class="stack-item" v-for="(skill, index) in specialist.skills" :key="index">
                        <span>{{ skill.name }}:</span> {{ skill.level }}
                    </div>
                    </div>
                </div>
        
                <!-- Правая колонка (30%) -->
                <div class="column is-5/12 right-column">
                    <div class="views grey-bg">
                    <h2 class="subtitle is-4">Просмотры</h2>
                    <div class="view-count">
                        <i class="fas fa-eye"></i> {{ viewsCount }}
                    </div>
                    </div>
        
                    <div class="responsible grey-bg">
                    <h2 class="subtitle is-4">Ответственный</h2>
                    <p>{{ company.name }}</p>
                    <p>{{ contactPerson.fullName }}</p>
                    <p>Телефон: {{ contactPerson.phone }}</p>
                    <p>Email: {{ contactPerson.email }}</p>
                    </div>
                </div>
                </div>
            </div>
        </TabPane>
        <!-- ... другие табы -->
      </Tabs>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { Tabs, TabPane } from 'ant-design-vue';
  import * as pdfjs from 'pdfjs-dist';

  export default {
    components: { Tabs, TabPane },
    setup() {
        const pdfjsWorker = import('pdfjs-dist/build/pdf.worker.entry');
        pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    },
    data() {
        return {
        activeTab: '1', 
        specialist: {
            fullName: 'Иван Иванов', // Замените на данные специалиста
            gender: 'Мужской',
            age: 30,
            birthDate: '1993-04-15',
            city: 'Москва',
            relocation: true,
            skills: [
            { name: 'JavaScript', level: 'Senior' },
            { name: 'Vue.js', level: 'Expert' },
            // ... другие навыки
            ],
        },
        projects: [
            {
                companyName: "Банк Открытие",
                nda: true,
                role: "Системный аналитик",
                responsibilities: [
                "Развивал все цифровые каналы банка: интернет-банк, мобильный банк, сайт, онлайн-анкеты.",
                "Создал центр компетенций банка: UI/UX дизайнеры, UX-исследователи и писатели, продуктовые аналитики, digital-маркетологи.",
                "Реорганизовал продуктовые команды, изменив приоритеты и направления развития в соответствии с потребностями бизнеса, внедрив data driven подход.",
                "Реализовал редизайн и оптимизацию мобильного банка: улучшил показатели MAU с 62% до 73%, DAU с 16,8% до 23%, CSI с 84% до 90%.",
                "Увеличил объем продаж кредитов наличными на 196%, долю продаж в цифровых каналах с 48% до 74%.",
                "Увеличил ежемесячные продажи дебетовых карт на 49%, кредитных карт в 3,5 раза.",
                "Оптимизировал процесс доставки и выдачи продуктов: внедрил безбумажную выдачу (80%), сократил время выдачи с 40 до 5 минут, количество листов с 40 до 3, сэкономив более 100 млн руб. в год.",
                "Доставка за час доступна в 506 городах, рекорд — 31 минута.",
                "Реализовал и внедрил цифровой путь бесшовной онлайн миграции клиентов из Открытия в ВТБ."
                ],
                techStack: "Веб-технологии: HTML (3), CSS (3), JavaScript (3), ReactJS (2)",
                projectDescription:
                "Более 15 лет опыта работы на руководящих должностях в сфере digital-технологий. Успешный опыт внедрения и развития онлайн-сервисов и каналов в банковской сфере. Разработал мобильное приложение, признанное одним из лучших в России (Markswebb). Обладатель наград: \"Лучший интернет-банк для физических лиц\" (Global Finance, 2008), Премия Рунета (2012), \"Лучший мобильный банк для физических лиц\" (Markswebb, 2013).",
                client: "Крок",
                startDate: "11.2023",
                endDate: "11.2023"
            }
        ],
        profilePhoto: '/path/to/profile_photo.jpg', // Замените на путь к фото
        viewsCount: 125,
        company: {
            name: 'IT Company LLC',
        },
        contactPerson: {
            fullName: 'Петр Петров',
            phone: '+7 (999) 123-45-67',
            email: 'petr.petrov@example.com',
        },
        };
    },
    methods: {
      setActiveTab(key) {
        this.activeTab = key;
      },
      async onFileSelected(event) {
        this.selectedFile = event.target.files[0];

        const reader = new FileReader();
        reader.onload = async (e) => {
            const pdfData = e.target.result;
            const parsedText = await this.parsePdf(pdfData);
            console.log('Распознанный текст:', parsedText);
        };
        reader.readAsArrayBuffer(this.selectedFile);
    },
    async parsePdf(pdfData) {
        const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;
        let text = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            text += textContent.items.map((item) => item.str).join('');
        }

        return text;
        },
    },
    // ... функции для drag&drop и обработки PDF
  };
</script>
  
<style scoped>
    .upload-cv {
        margin-bottom: 20px;
    }

    .upload-cv input[type="file"] {
        padding: 10px;
        border: 1px dashed #ccc;
        border-radius: 5px;
        width : 100%;
    }

    .tab-content {
        padding: 20px;
    }

    .columns {
        display: flex;
    }

    .column {
        padding: 10px;
    }

    .left-column {
        background-color: #f5f5f5; /* Light grey background */
        width: 50%;
    }

    .grey-bg {
        background-color: #f2f2f2;
        padding: 15px;
        margin-bottom: 10px;
    }

    .photo-row {
        display: flex;
        align-items: center;
    }

    .photo-row img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .stack-item {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
    }

    .view-count {
        display: flex;
        align-items: center;
        font-size: 16px;
    }

    .responsible p {
        margin-bottom: 5px;
    }
</style>