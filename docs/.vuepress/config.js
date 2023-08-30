import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  lang: 'en-US',
  title: 'Burning Isle',
  description: 'Documentation for Burning Isle',
  base: "/burning-isle-wiki/",
  theme: defaultTheme({
    logo: '/images/tartarn/sword.png',
    repo: 'jellyfish-bit/burning-isle-wiki',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Getting Started',
        link: '/guide',
      },
      {
        text: 'Wiki',
        link: '/wiki/',
      },
      {
        text: 'API',
        link: '/api/',
      }
    ],
    sidebar: {
      '/wiki/': [
        {
          text: "Wiki",
          children: [
            "/wiki/items",
            "/wiki/blocks",
            "/wiki/entities",
            "/wiki/world"
          ],
          sidebarDepth: 2
        }
      ],
      '/': [
        {
          text: "Content",
          children: [
            {text: "Home", link: "/"},
            {text: "Wiki", link:"/wiki/"},
            {text: "Api", link:"/api/"}
          ],
          sidebarDepth: 0
        }
      ]
    }
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ]
})

