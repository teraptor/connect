<script setup lang="ts">
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import { Notivue, Notification } from 'notivue'
  const route = useRoute();
</script>

<template>
  <div class="layout">
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
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

