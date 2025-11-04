import { defineConfig } from 'vitepress'

export const sharedConfig = {
  appearance: 'dark',
  
  themeConfig: {
    search: {
      provider: 'local' as const
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tacofoundation' },
      { icon: 'twitter', link: 'https://x.com/isp_uv_es' },
      { 
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/></svg>`
        },
        link: 'mailto:csaybar@gmail.com'
      }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 TACO Foundation | open source for a better tomorrow'
    }
  }
}