import { createApp } from 'vue'
import  router from './router'
import App from './App.vue'
import './style.css'

import axiosPlugin from './plugins/axiosPlugin'

// datepicker
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// add decoration to vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n } from 'vue-i18n'
import es from 'vuetify/lib/locale/es'

const messages = {
    es: {
        $vuetify: es,
        '10':'10',
        '25':'25',
        '50':'50',
        '100':'100',
    },
}

const i18n = createI18n({
    locale: 'es',
    messages,
})

const vuetify = createVuetify({
    components,
    directives,
    locale:{
        adapter: createVueI18nAdapter({i18n}),
    },
})

//createApp(App).mount('#app')
const app = createApp(App)

app.component('VueDatePicker', VueDatePicker)
app.use(router)
app.use(i18n)
app.use(vuetify)
app.use(axiosPlugin)
app.mount('#app')
