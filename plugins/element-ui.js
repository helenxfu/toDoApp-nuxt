import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
// import i18n from '@/plugins/i18n.js'

// const locale = {

// }

export default () => {
  Vue.use(Element, { locale })
}
