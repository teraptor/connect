<script setup lang="ts">
import * as pdfjsLib from 'pdfjs-dist';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import Button from '@/components/ui/Button.vue';
import { push } from 'notivue';
import { ref } from 'vue';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

const fileInput = ref<HTMLInputElement | null>(null);
const isLoading = ref<boolean>(false);
const addCandidate = useCandidatesStore();

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = async (event: DragEvent) => {
  event.preventDefault();
  const file = event.dataTransfer?.files[0];
  if (file) {
    await sendFile(file);
  }
};

const addFile = () => {
  fileInput.value?.click();
};

const uploadFile = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    await sendFile(file);
  }
};

const sendFile = async (file: File) => {
  if (file.type === 'application/pdf') {
    try {
      const arrayBuffer: ArrayBuffer = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
      const pdf = await loadingTask.promise;

      const content: string[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => ('str' in item ? item.str.trim() : ''))
          .join(' ')
          .replace(/\n+/g, '\n')
          .replace(/\s+/g, ' ');

        content.push(pageText);
      }
      isLoading.value = true;
      addCandidate.setCandidateParseJSON(content.join(''));
      await addCandidate.sendCandidateParseJSON();
    } catch (error) {
      push.error(`Ошибка при парсинге PDF: ${error}`);
    } finally {
      setTimeout(() => {
        isLoading.value = false;
      }, 200);
      if (fileInput.value) fileInput.value.value = '';
    }
  } else {
    push.warning('Добавьте PDF-файл');
  }
};
</script>
<template>
  <div class="parse-candidate">
    <h3 class="parse-candidate__title">Загрузить специалиста через PDF файл</h3>
    <div 
      class="parse-candidate__drop-zone" 
      @dragover="handleDragOver" 
      @drop="handleDrop"
    >
      <Button 
        button-type="primary" 
        text="Добавить кандидата"
        :icon="'icon icon-plus-circle'" 
        type="button"
        :isLoading="isLoading"
        @click="addFile"
      />
      <input 
        class="parse-candidate__file-input" 
        ref="fileInput" 
        type="file" 
        @change="uploadFile" 
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.parse-candidate {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 30px 0;
  gap: 16px;

  &__title {
    font-size: 26px;
    font-weight: 700;
    color: $dark-color;
    width: 100%;
  }

  &__drop-zone {
    width: 100%;
    border: 2px dashed $help-color;
    padding: 20px;
  }

  &__file-input {
    display: none;
  }
}
</style>