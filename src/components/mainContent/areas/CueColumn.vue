<script setup lang="ts">
import { pageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'
import Textarea from 'primevue/textarea'
const pagesStore = pageStore()
const { selectedPage } = storeToRefs(pagesStore)
function updatePageCue(event: Event) {
  selectedPage.value!.cues = (event.target as HTMLInputElement).value
  pagesStore.updatePage(selectedPage.value!)
}
</script>
<template>
  <Textarea
    @input="updatePageCue($event)"
    v-model="selectedPage!.cues"
    class="editable-area"
    id="cue-area"
    placeholder="Palavras-chave, perguntas principais ou dicas..."
  />
</template>
