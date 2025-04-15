<template>
  <div class="header">
    <h1>Anotações Cornell</h1>
    <div class="card flex justify-center">
      <ToggleSwitch @click="pagesStore.toggleDarkMode()" v-model="pagesStore.isDarkModeSelected">
        <template #handle="{ checked }">
          <i :class="['!text-xs pi', { 'pi-sun': checked, 'pi-moon': !checked }]" />
        </template>
      </ToggleSwitch>
    </div>
    <div class="card flex justify-center">
      <ConfirmPopup></ConfirmPopup>
      <div class="card flex justify-center"></div>
      <ButtonGroup class="file-actions">
        <!-- <ColorPicker
          format="hex"
          @change="updatePageColor($event)"
          :v-model="selectedPage!.backgroundColor"
        /> -->
        <Button
          :disabled="pagesStore.disablePage"
          @click="visible = true"
          label="Exportar"
          icon="pi pi-download"
        />
        <Button
          :disabled="pagesStore.pages.length <= 1 || pagesStore.disablePage"
          @click="confirmDelete($event)"
          label="Deletar"
          icon="pi pi-trash"
        />
      </ButtonGroup>
      <Dialog
        v-model:visible="visible"
        modal
        header="Qual formato você gostaria de exportar?"
        :style="{ width: '25rem' }"
      >
        <ButtonGroup class="file-actions">
          <Button
            type="button"
            label="TXT"
            severity="primary"
            @click="downloadNotes('txt')"
          ></Button>
          <Button
            severity="primary"
            type="button"
            label="Json"
            @click="downloadNotes('json')"
          ></Button>
        </ButtonGroup>
      </Dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import FileSaver from 'file-saver'
import { pageStore } from '@/stores/pages'
import { ref } from 'vue'
import { Button, ButtonGroup, Dialog } from 'primevue'
import ConfirmPopup from 'primevue/confirmpopup'
// import { storeToRefs } from 'pinia'
const pagesStore = pageStore()
const visible = ref(false)
function downloadNotes(type: string) {
  const exportedPage = pagesStore.selectedPage
  if (type === 'txt') {
    const text = ` Titulo: ${exportedPage?.name}\n\n Palavras-chave / Pergunta: ${exportedPage?.cues}\n\n Resumo: ${exportedPage?.notes}\n\n Notas: ${exportedPage?.notes}\n\n`
    const blob = new Blob([text], { type: 'text/plain' })
    FileSaver.saveAs(blob, 'notes.txt')
  } else if (type === 'json') {
    const blob = new Blob([JSON.stringify({ exportedPage })], { type: 'application/json' })
    FileSaver.saveAs(blob, 'notes.json')
  }
  visible.value = false
}
const confirm = useConfirm()
const confirmDelete = (event: Event) => {
  confirm.require({
    target: event.currentTarget as HTMLElement,
    message: 'Deseja realmente excluir esta página?',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancelar',
      outlined: true,
    },
    acceptProps: {
      label: 'Sim',
      severity: 'danger',
    },
    accept: () => {
      pagesStore.removeSelectedPage()
    },
    reject: () => {
      console.log('Cancel')
    },
  })
}

// const { selectedPage } = storeToRefs(pagesStore)
// function updatePageColor(event: ColorPickerChangeEvent) {
//   if (selectedPage.value) {
//     selectedPage.value.backgroundColor = event.value
//   }
//   pagesStore.updatePage(selectedPage.value!)
// }
</script>
<style scoped>
.header {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 24px;
}

.file-actions {
  display: flex;
  gap: 10px;
  justify-self: flex-end;
}

@media (max-width: 768px) {
  .file-actions {
    flex-direction: column;
    gap: 5px;
  }
  .header {
    justify-content: space-between;
    flex-direction: column;
    gap: 3px;
  }
}
</style>
