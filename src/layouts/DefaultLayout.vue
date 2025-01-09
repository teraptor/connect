<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  const route = useRoute();
</script>

<template>
  <div class="layout">
    <Header v-if="route.meta.showHeader !== false"/>
    <div class="main-content">
      <slot/>
    </div>
    <Footer v-if="route.meta.showFooter !== false"/>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  min-height: 300px;
  flex-grow: 1;
}
</style>

