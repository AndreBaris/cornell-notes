<script setup lang="ts">
import CueColumn from './areas/CueColumn.vue'
import NoteColumn from './areas/NoteColumn.vue'
import SummaryArea from './areas/SummaryRow.vue'
import NoteTitle from './areas/NoteTitle.vue'
import BlockUI from 'primevue/blockui'
import { pageStore } from '@/stores/pages'
const pagesStore = pageStore()
</script>
<template>
  <div class="note-area">
    <BlockUI ref="blockUi" v-bind:blocked="pagesStore.disablePage">
      <NoteTitle></NoteTitle>
    </BlockUI>
    <Divider></Divider>
    <div class="cornell-note">
      <div class="cornell-top">
        <div class="cue-column">
          <BlockUI
            class="container-editable-area"
            ref="blockUi"
            v-bind:blocked="pagesStore.disablePage"
          >
            <CueColumn></CueColumn>
          </BlockUI>
        </div>
        <div class="notes-column">
          <BlockUI
            class="container-editable-area"
            ref="blockUi"
            v-bind:blocked="pagesStore.disablePage"
          >
            <NoteColumn></NoteColumn>
          </BlockUI>
        </div>
      </div>
      <div class="summary-section">
        <BlockUI
          class="container-editable-area"
          ref="blockUi"
          v-bind:blocked="pagesStore.disablePage"
        >
          <SummaryArea></SummaryArea>
        </BlockUI>
      </div>
    </div>
  </div>
</template>
<style>
.note-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.note-title {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

#page-title {
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cornell-note {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.cornell-top {
  display: flex;
  flex-grow: 1;
}

.cue-column {
  width: 20%;
  padding: 10px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.notes-column {
  width: 80%;
  padding: 10px;
  overflow-y: auto;
}

.summary-section {
  padding: 10px;
  border-top: 1px solid #ddd;
  height: 150px;
  overflow-y: auto;
}

.section-header {
  margin-bottom: 10px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .cornell-top {
    flex-direction: column;
    flex-grow: 0;
    width: 100%;
  }

  .cue-column {
    width: 100%;
    height: 150px;
    border-right: none;
    border-bottom: 1px solid #ddd;
  }

  .notes-column {
    width: 100%;
  }
}
</style>
