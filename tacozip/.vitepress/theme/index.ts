import DefaultTheme from 'vitepress/theme'
import '../../../shared/theme/custom.css'

// Importar componentes compartidos
import ProtomapsSnippet from '../../../shared/components/ProtomapsSnippet.vue'
import ContactForm from '../../../shared/components/ContactForm.vue'
import MyProtomapsIndependent from '../../../shared/components/MyProtomapsIndependent.vue'

export default {
  extends: DefaultTheme,
  
  enhanceApp({ app }) {
    // Registrar componentes globalmente
    app.component('ProtomapsSnippet', ProtomapsSnippet)
    app.component('ContactForm', ContactForm)
    app.component('MyProtomapsIndependent', MyProtomapsIndependent)
  }
}