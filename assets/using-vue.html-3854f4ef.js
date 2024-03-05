import{_ as l,d as o,o as d,c as _,a as e,e as n,f as t,w as r}from"./app-94e3bae8.js";const h="/burning-isle-wiki/assets/hero-1c19b45a.png",u={},m=e("h1",{id:"using-vue-in-markdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-vue-in-markdown","aria-hidden":"true"},"#"),n(" Using Vue in Markdown")],-1),p=e("h2",{id:"browser-api-access-restrictions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#browser-api-access-restrictions","aria-hidden":"true"},"#"),n(" Browser API Access Restrictions")],-1),f={href:"https://ssr.vuejs.org/en/universal.html",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"beforeMount",-1),b=e("code",null,"mounted",-1),w=e("p",null,[n("If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in "),e("code",null,"<ClientOnly>"),n(" component:")],-1),k=e("h2",{id:"hh",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hh","aria-hidden":"true"},"#"),n(" HH")],-1),x=e("img",{src:h},null,-1),I=e("h2",{id:"seperator",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#seperator","aria-hidden":"true"},"#"),n(" Seperator")],-1);function v(y,V){const a=o("ExternalLinkIcon"),i=o("recipe-crafting"),s=o("Item"),c=o("ImgInfo");return d(),_("div",null,[m,p,e("p",null,[n("Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the "),e("a",f,[n("universal code requirements"),t(a)]),n(". In short, make sure to only access Browser / DOM APIs in "),g,n(" or "),b,n(" hooks.")]),w,k,x,t(i,{slot_1:"ink_sac",slot_4:"glass_bottle",result:"bottle_of_ink"}),t(s,{name:"glass_bottles"}),I,t(c,null,{img:r(()=>[t(s,{name:"test"})]),info:r(()=>[n(" A really lon text with some important info, you dont want ot miss. ")]),_:1})])}const A=l(u,[["render",v],["__file","using-vue.html.vue"]]);export{A as default};
