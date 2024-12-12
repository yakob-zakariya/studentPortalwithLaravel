import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy'

createInertiaApp({
  progress:{
    color:'red',
    includeCSS:true,
    showSpinner:true,
  },
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  title: title => title ? `${title} - Student Portal` : 'Student Protal',
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
     .use(plugin)
     .use(ZiggyVue, Ziggy)
      .mount(el)
  },
})
