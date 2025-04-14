<template>
  <Textarea
    placeholder="Escreva um resumo das suas anotações..."
    class="editable-area"
    v-model="selectedPage!.summary"
    @input="getPageSummary($event)"
  ></Textarea>
</template>
<script setup lang="ts">
import { pageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'
import Textarea from 'primevue/textarea'
const pagesStore = pageStore()
const { selectedPage } = storeToRefs(pagesStore)
function getPageSummary(event: Event) {
  selectedPage.value!.summary = (event.target as HTMLInputElement).value
  pagesStore.updatePage(selectedPage.value!)
}
</script>
