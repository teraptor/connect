<template>
    <div class="upload-area">
      <div class="dropzone" @dragover.prevent="handleDragOver" @drop.prevent="handleDrop">
        <p>Перетащите файлы PDF сюда</p>
      </div>
      <ul>
          <li v-for="file in files" :key="file.name">
            <div class="avatar" :style="{ backgroundColor: generateColor(file.name) }">
              {{ file.name.slice(0, 3).toUpperCase() }}
            </div>
            <h1>{{ extractLastName(file.name) }}</h1>
            <p>Грейд: {{ getGrade(extractLastName(file.name)) }}</p>
            <p>Статус: На проверке</p>
          </li>
    </ul>
  
      <!-- Input для выбора файлов -->
      <input type="file" @change="handleFileSelect" multiple accept=".pdf">
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        files: [],
      };
    },
    methods: {
      handleDragOver(e) {
        e.preventDefault(); // Необходимо для работы drag & drop
      },
      handleDrop(e) {
        this.files = [...this.files, ...e.dataTransfer.files];
      },
      handleFileSelect(e) {
        this.files = [...this.files, ...e.target.files];
      },
      extractLastName(fileName) {
        // Логика для извлечения фамилии из имени файла
        return fileName.split('_')[0]; // Пример: "Ivanov_Resume.pdf" -> "Ivanov"
      },
      getGrade(lastName) {
        // Логика для определения грейда по фамилии
        const grades = {
          'Ivanov': 'Senior',
          'Petrov': 'Junior',
          // ... другие фамилии и грейды
        };
        return grades[lastName] || 'Не определен';
      },
      generateColor(name) {
        // Генерация случайного цвета для аватара
        const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        return `hsl(${hash % 360}, 50%, 50%)`;
      },
    },
  };
</script>
  
<style scoped>
  .upload-area {
    border: 1px dashed #ccc;
    padding: 20px;
  }
  
  .dropzone {
    height: 200px;
    border: 2px dashed #ccc;
    text-align: center;
    padding: 20px;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
</style>