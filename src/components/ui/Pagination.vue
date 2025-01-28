<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import Button from './Button.vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  pageLimit: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['updatePage', 'updateLimit']);

const pageRange = computed(() => {
  const range = [];
  const maxPagesToShow = 5;
  let startPage = props.currentPage - Math.floor(maxPagesToShow / 2);
  let endPage = props.currentPage + Math.floor(maxPagesToShow / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(maxPagesToShow, props.totalPages);
  }
  if (endPage > props.totalPages) {
    endPage = props.totalPages;
    startPage = Math.max(props.totalPages - maxPagesToShow + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  return range;
});

const goToNextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('updatePage', props.currentPage + 1);
  }
};

const goToPreviousPage = () => {
  if (props.currentPage > 1) {
    emit('updatePage', props.currentPage - 1);
  }
};

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('updatePage', page);
  }
};

const changeLimit = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('updateLimit', parseInt(target.value, 10));
};
</script>

<template>
  <div class="pagination">
    <Button 
      button-type="secondary"  
      text="Назад"
      size="small" 
      type="button"
      :disabled="currentPage === 1"
      @click="goToPreviousPage"
    />
    <Button 
      button-type="secondary"
      text="1"
      size="tab" 
      type="button"
      :disabled="currentPage === 1"
      @click="goToPage(1)"
    />
    <Button 
      button-type="primary" 
      :text="page"
      size="tab"
      v-for="page in pageRange"
      :key="page"
      @click="goToPage(page)"
      :isActive="page === currentPage"
    />
    <span v-if="totalPages > pageRange[pageRange.length - 1]">...</span>
    <Button 
      button-type="secondary"  
      :text="totalPages"
      size="tab" 
      type="button"
      :disabled="currentPage === totalPages"
      @click="goToPage(totalPages)"
    />
    <Button 
      button-type="secondary" 
      text="Вперед"
      size="small" 
      type="button"
      :disabled="currentPage === totalPages"
      @click="goToNextPage"
    />
    <div class="pagination__limit">
      <label for="limit">Элементов на странице:</label>
      <select id="limit" class="pagination__select" :value="pageLimit" @change="changeLimit">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 8px;
  color: $main-color;

  &__limit {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__select {
    padding: 8px;
    font-size: 16px;
    outline: none;

    &:focus {
      outline: none;
      border: none;
    }
  }
}
</style>
