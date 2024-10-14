<template>
    <div class="vacancies-list">
        <div class="vacancy-grid">
            <a
            v-for="vacancy in paginatedVacancies"
            :key="vacancy.id"
            :href="`/vacancies/${vacancy.id}`"
            class="vacancy-tile"
            >
            <div class="vacancy-header">
                <h3>{{ vacancy.sector }} - #{{ vacancy.number }}</h3>
                <p>{{ vacancy.title }} - {{ vacancy.grade }}</p>
            </div>
            <div class="vacancy-details">
                <p>Ставка/час: {{ vacancy.ratePerHour }}</p>
                <p>Количество специалистов: {{ vacancy.requiredSpecialists }}</p>
                <p>Срок привлечения: {{ vacancy.attractionPeriod }}</p>
                <p>Формат работы: {{ vacancy.workFormat }}</p>
                <p>Локация: {{ vacancy.location }}</p>
            </div>
            <div class="vacancy-summary">
                <p>{{ vacancy.summary }}</p>
            </div>
            </a>
        </div>
        <div class="pagination-controls">
            <label for="itemsPerPage">Элементов на страницу:</label>
            <select id="itemsPerPage" v-model="itemsPerPage">
            <option v-for="option in [10, 20, 50, 100]" :key="option" :value="option">{{ option }}</option>
            </select>
            <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
            <button @click="nextPage" :disabled="currentPage === totalPages">Вперед</button>
        </div>
    </div>
</template>
    
<script>
    export default {
    name: 'VacanciesList',
    data() {
        return {
         vacancies: [], // Здесь будут храниться данные о вакансиях
         currentPage: 1,
         itemsPerPage: 10,
        };
    },
    computed: {
        totalPages() {
         return Math.ceil(this.vacancies.length / this.itemsPerPage);
        },
        paginatedVacancies() {
         const start = (this.currentPage - 1) * this.itemsPerPage;
         const end = start + this.itemsPerPage;
         return this.vacancies.slice(start, end);
        },
    },
    methods: {
        prevPage() {
         if (this.currentPage > 1) {
            this.currentPage--;
         }
        },
        nextPage() {
         if (this.currentPage < this.totalPages) {
            this.currentPage++;
         }
        },
    },
    mounted() {
        // Здесь вы можете загрузить данные о вакансиях, например, через API
        this.vacancies = [
         // Пример данных
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },

         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         {
            id: 1,
            sector: 'IT',
            number: '001',
            title: 'Frontend Developer',
            grade: 'Senior',
            ratePerHour: '$50',
            requiredSpecialists: 2,
            attractionPeriod: '1 месяц',
            workFormat: 'Удаленно',
            location: 'Москва',
            summary: 'Краткое описание вакансии...',
         },
         // Добавьте больше данных по аналогии
        ];
    },
    };
</script>
    
<style scoped>
    .vacancies-list {
    max-width: 1200px;
    margin: 0 auto;
    }
    
    .vacancy-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    }
    
    .vacancy-tile {
    width: 32%; /* Фиксированная ширина для каждой плитки */
    border: 1px solid #ccc;
    padding: 16px;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
    }
    
    .vacancy-tile:hover {
    transform: scale(1.05);
    }
    
    .vacancy-header h3 {
    margin: 0;
    }
    
    .vacancy-details p,
    .vacancy-summary p {
    margin: 4px 0;
    }
    
    .pagination-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    }
</style>