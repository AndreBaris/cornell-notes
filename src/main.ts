/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import ConfirmationService from 'primevue/confirmationservice'
import Button from 'primevue/button'
import Listbox from 'primevue/listbox'
import Menu from 'primevue/menu'
import ConfirmPopup from 'primevue/confirmpopup'
import Dialog from 'primevue/dialog'
import Textarea from 'primevue/textarea'
import BlockUI from 'primevue/blockui'
import Divider from 'primevue/divider'
import ToggleSwitch from 'primevue/toggleswitch'
import FloatLabel from 'primevue/floatlabel'
import Select from 'primevue/select'
import ColorPicker from 'primevue/colorpicker'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})
app.use(ConfirmationService)
app.component('Button', Button)
app.component('ListBox', Listbox)
app.component('TextArea', Textarea)
app.component('Divider', Divider)
app.component('Menu', Menu)
app.component('ConfirmPopup', ConfirmPopup)
app.component('Dialog', Dialog)
app.component('BlockUI', BlockUI)
app.component('ToggleSwitch', ToggleSwitch)
app.component('FloatLabel', FloatLabel)
app.component('Select', Select)
app.component('ColorPicker', ColorPicker)
app.mount('#app')
