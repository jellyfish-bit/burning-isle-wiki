# Using Vue in Markdown

## Browser API Access Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in `beforeMount` or `mounted` hooks.

If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in `<ClientOnly>` component:

## HH
<img src="../../docs/.vuepress/public/images/hero.png">

<Item img="/images/minecraft/blaze_rod.png" att_dmg="2" att_speed="2"/>

## Seperator

<ItemNew name="bottle_of_glow_ink"/>



<hr>
<ItemNew name="tartarn_sword"/>
<ItemNew name="test"/>


<img src="/images/tartarn/ingot.png"/>

