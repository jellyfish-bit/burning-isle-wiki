---
home: true
heroImage: https://v1.vuepress.vuejs.org/hero.png
heroText: Burning Isel
tagline: A vuepress test site
actionText: Quick Start →
actionLink: /guide/
xfeatures:
- title: Getting Started
  details: Feature 1 Description
  link: /vuepress-starter/guide/
- title: Wiki
  details: The Wiki
  link: /vuepress-starter/wiki/
- title: API
  details: Lorem ipsum
  link: /vuepress-starter/api/
footer: Made by Jellyfish with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href="feat.link">{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>

