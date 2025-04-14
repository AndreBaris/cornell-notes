<template>
  <div class="header">
    <h1>Anotações Cornell</h1>
    <div class="card flex justify-center">
      <ConfirmPopup></ConfirmPopup>
      <ButtonGroup class="file-actions">
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
        <div class="card flex justify-center gap-4">
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
        </div>
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
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: 'Sim',
    },
    accept: () => {
      pagesStore.removeSelectedPage()
    },
    reject: () => {
      console.log('Cancel')
    },
  })
}
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
}

@media (max-width: 768px) {
  .file-actions {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
