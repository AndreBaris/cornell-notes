<script setup lang="ts">
import { pageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'
import Textarea from 'primevue/textarea'
const pagesStore = pageStore()
const selectedPage = storeToRefs(pagesStore).selectedPage
function getPageTitle(event: Event) {
  selectedPage.value!.name = (event.target as HTMLInputElement).value
  pagesStore.updatePage(selectedPage.value!)
}
</script>
<template>
  <Textarea
    style="
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      border: none;
      background-color: transparent;
    "
    @input="getPageTitle($event)"
    v-model="selectedPage!.name"
    class="title-area"
    placeholder="Título da página "
  ></Textarea>
</template>
<style>
.title-area {
  width: 100%;
  max-height: 40px;
  resize: none;
  outline: none;
  overflow-y: hidden;
}
</style>
