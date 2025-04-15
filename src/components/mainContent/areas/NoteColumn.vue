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
  <FloatLabel class="container-editable-area" variant="on">
    <Textarea
      @input="getPageNote($event)"
      v-model="selectedPage!.notes"
      class="editable-area"
      id="notes-area"
    />
    <label for="notes-area">Escreva suas anotações aqui...</label>
  </FloatLabel>
</template>
<style>
@media (max-width: 768px) {
  .editable-area {
    height: 100%;
    width: 100%;
  }
}
</style>
