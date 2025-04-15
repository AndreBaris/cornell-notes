<script lang="ts" setup>
import { pageStore } from '@/stores/pages'
const pagesStore = pageStore()
</script>
<template>
  <div id="pdfRef" class="note-area">
    <div
      class="title-area"
      style="
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        border: none;
        background-color: transparent;
      "
    >
      {{ pagesStore.selectedPage?.name }}
    </div>
    <div class="cornell-note">
      <div class="cornell-top">
        <div class="cue-column">
          <div class="editable-area">
            <div style="display: flex; flex-direction: column; gap: 8px">
              <strong> Palavras-chave, perguntas principais ou dicas... </strong>
              <div>{{ pagesStore.selectedPage?.cues }}</div>
            </div>
          </div>
        </div>
        <div class="notes-column">
          <div style="display: flex; flex-direction: column; gap: 8px">
            <strong> Anotações </strong>
            <div>{{ pagesStore.selectedPage?.notes }}</div>
          </div>
        </div>
      </div>
      <div class="summary-section">
        <div style="display: flex; flex-direction: column; gap: 8px">
          <strong> Resumo </strong>
          <div>{{ pagesStore.selectedPage?.summary }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
