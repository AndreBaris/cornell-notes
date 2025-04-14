<script lang="ts" setup>
import { pageStore } from '@/stores/pages'
import { storeToRefs } from 'pinia'
import Listbox from 'primevue/listbox'
import { ref } from 'vue'

const pagesStore = pageStore()
const { selectedPage } = storeToRefs(pagesStore)
const page = ref(selectedPage)
function idChange() {
  if (page.value === null) {
    pagesStore.clearSelectedPage()
  } else {
    pagesStore.$patch((state) => {
      state.selectedPage = page.value
      state.disablePage = false
    })
  }
}
const checkPageLength = () => (pagesStore.pages.length <= 1 ? true : false)
</script>
<template>
  <div class="card flex justify-center">
    <Listbox
      :optionDisabled="checkPageLength"
      :autoOptionFocus="true"
      ref="listbox-list"
      @change="idChange()"
      emptyMessage="Sem páginas"
      v-model="page"
      :options="pagesStore.getPages"
      optionLabel="name"
      checkmark
      class="w-full md:w-56"
    />
  </div>
</template>
<style scoped></style>
