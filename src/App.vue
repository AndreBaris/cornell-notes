<script setup lang="ts">
import HeaderBlock from './components/header/HeaderBlock.vue'
import SidebarBlock from './components/sidebar/SidebarBlock.vue'
import NoteBlock from './components/mainContent/NoteBlock.vue'
</script>

<template>
  <div class="container">
    <HeaderBlock></HeaderBlock>
    <div class="main-content">
      <SidebarBlock></SidebarBlock>
      <NoteBlock></NoteBlock>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 95vh;
}

.main-content {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

@media (max-width: 768px) {
  .container {
    height: auto;
    min-height: 95vh;
  }

  .main-content {
    flex-direction: column;
  }

  .sidebar {
    width: 100% !important;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
}
</style>
