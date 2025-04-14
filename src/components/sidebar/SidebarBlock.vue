<script setup lang="ts">
import { pageStore } from '@/stores/pages'
import PagesList from './PagesList.vue'
import Button from 'primevue/button'
const pagesStore = pageStore()
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <h2>Páginas</h2>
      <Button @click="pagesStore.addNewPage()" icon="pi pi-plus" aria-label="Filter" />
    </div>
    <PagesList></PagesList>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  padding: 10px;
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.sidebar-header h2 {
  font-size: 16px;
}
</style>
