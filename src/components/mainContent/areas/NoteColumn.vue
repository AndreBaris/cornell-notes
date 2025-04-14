<script setup lang="ts">
import { pageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'
import Textarea from 'primevue/textarea'
const pagesStore = pageStore()
const { selectedPage } = storeToRefs(pagesStore)
function getPageNote(event: Event) {
  selectedPage.value!.notes = (event.target as HTMLInputElement).value
  pagesStore.updatePage(selectedPage.value!)
}
</script>
<template>
  <Textarea
    @input="getPageNote($event)"
    v-model="selectedPage!.notes"
    class="editable-area"
    id="notes-area"
    placeholder="Escreva suas anotações aqui..."
  ></Textarea>
</template>
<style>
@media (max-width: 768px) {
  .editable-area {
    height: 100%;
    width: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 16px;
  }
}
</style>
