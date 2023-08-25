import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { defineAsyncComponent } from 'vue'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Burning Isle',
  description: 'Documentation for Burning Isle',
  base: "/burning-isle-wiki/",
  theme: defaultTheme({
    logo: '/images/tartarn/tartarn_sword.png',
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
        text: 'Api',
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
            "/wiki/world"
            //["/wiki/items/", "Items"]
            //["/wiki/blocks/", "Blocks"],
            //["/wiki/world/", "World"]
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
  })
})

