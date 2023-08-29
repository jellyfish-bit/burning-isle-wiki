---
home: true
heroImage: /images/hero.png
heroText: 
tagline:
actions:
  - text: Getting Started
    link: /guide/
    type: primary
  - text: Wiki
    link: /wiki/
    type: secondary
xfeatures:
- title: Getting Started
  details: A quick quide for getting started and cast your first spell.
  link: /guide/
- title: Wiki
  details: The Wiki where a short decription of all Items, Blocks, ... can be found
  link: /wiki/
- title: API
  details: Lorem ipsum
  link: /api/
footer: Made by Jellyfish with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <h2><a v-bind:href='$withBase(feat.link)'>{{ feat.title }}</a></h2>
    <p>{{ feat.details }}</p>
  </div>
</div>

