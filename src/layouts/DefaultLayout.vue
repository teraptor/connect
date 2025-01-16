<script setup lang="ts">
  import Header from '@/components/layout/Header.vue';
  import Footer from '@/components/layout/Footer.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import { Notivue, Notification } from 'notivue'
  const route = useRoute();
</script>

<template>
  <div class="layout" v-cloak>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <Header v-if="route.meta.showHeader !== false"/>
    <div class="content-wrapper">
      <Sidebar class="sidebar" v-if="route.meta.showSidebar !== false"/>
      <div class="main-content">
        <slot/>
      </div>
    </div>
    <Footer v-if="route.meta.showFooter !== false"/>
  </div>
</template>
<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content-wrapper {
    display: flex;
    flex-grow: 1;
    min-height: 300px;

    .main-content {
    width: 80%;
    }

    &:not(:has(.sidebar)) .main-content {
    width: 100%;
    }
  }
}
</style>

