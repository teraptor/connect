<template>
    <div>
        <form-wizard @on-complete="submitForm" color="#007bff">
         <tab-content title="Личные данные" icon="ti-user">
            <div>
             <label>Имя:</label>
             <input type="text" v-model="candidate.personalData.name" />
            </div>
            <div>
             <label>Email:</label>
             <input type="email" v-model="candidate.personalData.email" />
            </div>
            <div>
             <label>Телефон:</label>
             <input type="tel" v-model="candidate.personalData.phone" />
            </div>
         </tab-content>
    
         <tab-content title="Навыки и опыт" icon="ti-settings">
            <div>
             <label>Навыки:</label>
             <textarea v-model="candidate.skills"></textarea>
            </div>
            <div>
             <label>Опыт работы:</label>
             <textarea v-model="candidate.experience"></textarea>
            </div>
         </tab-content>
    
         <tab-content title="Проекты в компаниях" icon="ti-briefcase">
            <div>
             <label>Проекты:</label>
             <textarea v-model="candidate.projects"></textarea>
            </div>
         </tab-content>
    
         <tab-content title="Образование" icon="ti-book">
            <div>
             <label>Образование:</label>
             <textarea v-model="candidate.education"></textarea>
            </div>
         </tab-content>
    
         <tab-content title="Условия работы" icon="ti-world">
            <div>
             <label>Условия работы:</label>
             <textarea v-model="candidate.workConditions"></textarea>
            </div>
         </tab-content>
    
         <tab-content title="Доп. данные и комментарии" icon="ti-comment">
            <div>
             <label>Дополнительные данные:</label>
             <textarea v-model="candidate.additionalInfo"></textarea>
            </div>
            <div>
             <label>Комментарии:</label>
             <textarea v-model="candidate.comments"></textarea>
            </div>
            <div>
             <label>Загрузить CV:</label>
             <file-pond
                ref="pond"
                :files="files"
                allow-multiple="false"
                accepted-file-types="application/pdf"
                @updatefiles="handleFilePondUpdate"
             />
            </div>
         </tab-content>
        </form-wizard>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    import { FormWizard, TabContent } from 'vue-form-wizard';
    import 'vue-form-wizard/dist/vue-form-wizard.min.css';
    import vueFilePond, { setOptions } from 'vue-filepond';
    import 'filepond/dist/filepond.min.css';
    
    // Registforeer the component globally
    const FilePond = vueFilePond();
    
    export default {
    name: 'NewCandidateForm',
    components: {
        FormWizard,
        TabContent,
        FilePond,
    },
    setup() {
        const candidate = ref({
         personalData: {
            name: '',
            email: '',
            phone: '',
         },
         skills: '',
         experience: '',
         projects: '',
         education: '',
         workConditions: '',
         additionalInfo: '',
         comments: '',
        });
    
        const files = ref([]);
    
        const handleFilePondUpdate = (fileItems) => {
         files.value = fileItems.map(fileItem => fileItem.file);
        };
    
        const submitForm = () => {
         console.log('Форма отправлена:', candidate.value);
         console.log('Загруженные файлы:', files.value);
        };
    
        return {
         candidate,
         files,
         handleFilePondUpdate,
         submitForm,
        };
    },
    };
</script>
    
<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }
    
    input, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        box-sizing: border-box;
    }
</style>