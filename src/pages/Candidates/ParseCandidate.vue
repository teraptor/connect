<script setup lang="ts">
import * as pdfjsLib from 'pdfjs-dist'
import type {
  TextItem,
  TextMarkedContent,
} from 'pdfjs-dist/types/src/display/api'
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import Button from '@/components/ui/Button.vue'
import { push } from 'notivue'
import { ref } from 'vue'
import Tesseract from 'tesseract.js'

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

const fileInput = ref<HTMLInputElement | null>(null)
const isLoading = ref<boolean>(false)
const addCandidate = useCandidatesStore()
const text = ref<string>('')

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
}

const handleDrop = async (event: DragEvent) => {
  event.preventDefault()
  const file = event.dataTransfer?.files[0]
  if (file) {
    await sendFile(file)
  }
}

const addFile = () => {
  fileInput.value?.click()
}

const uploadFile = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    await sendFile(file)
  }
}

const isTextItem = (item: TextItem | TextMarkedContent): item is TextItem =>
  'str' in item

const sendFile = (file: File) => {
  if (file.type === 'application/pdf') {
    sendPdfFile(file)
  } else if (file.type.startsWith('image/')) {
    sendImageFile(file)
  } else {
    push.warning('Неподдерживаемый формат файла')
  }
}

const sendPdfFile = async (file: File) => {
  isLoading.value = true
  try {
    const content = await parsePdf(file)
    addCandidate.setCandidateParseJSON(content.join(''))
    await addCandidate.sendCandidateParseJSON()
  } catch {
    push.error('Ошибка при парсинге PDF')
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 200)
    if (fileInput.value) fileInput.value.value = ''
  }
}

const sendImageFile = async (file: File) => {
  isLoading.value = true
  try {
    const {
      data: { text: recognizedText },
    } = await Tesseract.recognize(file, 'eng+rus')
    text.value = recognizedText
    addCandidate.setCandidateParseJSON(recognizedText)
    await addCandidate.sendCandidateParseJSON()
  } catch {
    push.error('Ошибка распознавания текста')
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 200)
    if (fileInput.value) fileInput.value.value = ''
  }
}

const parsePdf = async (file: File): Promise<string[]> => {
  const arrayBuffer: ArrayBuffer = await file.arrayBuffer()
  const uint8Array = new Uint8Array(arrayBuffer)
  const loadingTask = pdfjsLib.getDocument({ data: uint8Array })
  const pdf = await loadingTask.promise

  const content: string[] = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items
      .map(item => (isTextItem(item) ? item.str.trim() : ''))
      .join(' ')
      .replace(/\n+/g, '\n')
      .replace(/\s+/g, ' ')

    content.push(pageText)
  }
  return content
}
</script>

<template>
  <div class="parse-candidate">
    <h3 class="parse-candidate__title">Парсинг специалиста</h3>
    <p class="parse-candidate__description">
      Загружайте резюме специалистов в формате PDF или изображений для их
      дальнейшей обработки.
    </p>
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
  padding: 30px 30px 0;
  gap: 16px;

  &__title {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: $dark-color;
    width: 100%;
  }

  &__description {
    font-weight: 300;
    color: $help-color;
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
