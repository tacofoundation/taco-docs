import { defineConfig } from 'vitepress'
import { sharedConfig } from '../../shared/config/sharedConfing.ts'

export default defineConfig({
  ...sharedConfig,
  
  base: '/tacozip/',
  
  title: 'tacozip',
  description: 'High-Speed Archival for Cloud-Native Data',
  lang: 'en-US',
  
  themeConfig: {
    ...sharedConfig.themeConfig,
    
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'Python', 
        link: '/en/python/overview',
        activeMatch: '/en/python/'
      },
      { text: 'R', link: '#' },
      { text: 'Julia', link: '#' },
      
      // Links a otros proyectos (para el futuro)
      {
        text: 'Other Projects',
        items: [
          { text: 'tacoreader', link: '#' }, // Cambiarás después
          { text: 'tacotoolbox', link: '#' }
        ]
      }
    ],
    
    sidebar: {
      '/en/python/': {
        base: '/en/python/',
        items: [
          {
            text: 'API Reference',
            items: [
              { text: 'Overview', link: 'overview' },
              { text: 'Getting Started', link: 'getting-started' },
              { text: 'TACO Header', link: 'header' },
              { text: 'Python Client', link: 'client' },
              { text: 'Python API', link: 'python-api-reference' },
              { text: 'Use Cases', link: 'use-cases' },
              { text: 'FAQ', link: 'faq' }
            ]
          },
          {
            text: 'Resources',
            items: [
              { text: 'Changelog', link: 'CHANGELOG' },
              { text: 'Contributing', link: 'CONTRIBUTING' }
            ]
          }
        ]
      }
    },
    
    editLink: {
      pattern: 'https://github.com/tacofoundation/taco-docs/edit/main/tacozip/:path',
      text: 'Edit this page on GitHub'
    }
  }
})