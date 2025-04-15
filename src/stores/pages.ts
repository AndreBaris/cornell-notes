import { defineStore } from 'pinia'
interface Page {
  id: string | number
  name: string
  cues: string
  notes: string
  summary: string
  createdAt: string
  backgroundColor: string
}
export const pageStore = defineStore('pages', {
  state: () => ({
    isDarkModeSelected: true,
    disablePage: false,
    pages: [
      {
        id: 1,
        name: 'Nova Página',
        cues: '',
        notes: '',
        summary: '',
        backgroundColor: '',
        createdAt: new Date().toISOString(),
      },
    ] as Page[],
    selectedPage: {
      id: 1,
      name: 'Nova Página',
      cues: '',
      notes: '',
      summary: '',
      backgroundColor: '',
      createdAt: new Date().toISOString(),
    } as Page | null,
  }),
  getters: {
    getThemeMode: (state) => {
      return state.isDarkModeSelected
    },
    getPageState: (state) => {
      return state.disablePage
    },
    getPages: (state) => {
      return state.pages
    },
    getSelectedPage: (state) => {
      return state.selectedPage
    },
    getPageById: (state) => {
      return (id: number) => {
        const page = state.pages.find((page) => page.id === id)
        if (!page) {
          throw new Error(`Page with id ${id} not found`)
        }
        return page
      }
    },
  },
  actions: {
    addNewPage() {
      const page: Page = {
        id: this.pages.length + 1,
        name: `Nova Página`,
        cues: '',
        notes: '',
        summary: '',
        backgroundColor: '',
        createdAt: new Date().toISOString(),
      }
      this.selectedPage = page
      this.pages.push(page)
      this.savePages()
    },
    removeSelectedPage() {
      const id = this.selectedPage?.id
      const index = this.pages.findIndex((p) => p.id === id)
      if (index !== -1) {
        this.pages.splice(index, 1)
        if (this.selectedPage?.id === id) {
          this.selectedPage = null
        }
      } else {
        console.error(`Pagina com ${id} não encontrada`)
      }
      if (this.pages.length === 0) {
        this.selectedPage = null
      } else {
        this.selectedPage = this.pages[0]
      }
      this.savePages()
    },
    updatePage(updatedPage: Page) {
      const index = this.pages.findIndex((p) => p.id === updatedPage.id)
      if (index !== -1) this.pages[index] = updatedPage
      this.savePages()
    },
    selectPage(id: number) {
      this.selectedPage = this.pages.find((p) => p.id === id) || null
      this.savePages()
    },
    clearSelectedPage() {
      this.selectedPage = { id: '', name: '', cues: '', notes: '', summary: '' } as Page
      this.disablePage = true
      this.savePages()
    },
    savePages() {
      localStorage.setItem('pages', JSON.stringify(this.pages))
    },
    loadPages() {
      const pages = localStorage.getItem('pages')
      if (pages) {
        this.pages = JSON.parse(pages)
      }
    },
    updateItemColor(newColor: string) {
      if (this.selectedPage) {
        this.selectedPage.backgroundColor = newColor
      }
    },
    toggleDarkMode() {
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkModeSelected))
      document.documentElement.classList.toggle('my-app-dark')
    },
  },
})
