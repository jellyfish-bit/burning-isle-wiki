import{_ as m,d as l,o as t,c as _,a as n,h as s,i as o,w as u,f as d,p as r,j as h}from"./app-94e3bae8.js";const g={props:{tool:{type:String},template:{type:String},ingredient:{type:String},result:{type:String},amount:{type:[String,Number]}}},p=a=>(r("data-v-74690639"),a=a(),h(),a),f={class:"smithing-preview"},v={class:"smithing-grid"},y=p(()=>n("div",{class:"smithing-arrow"},"→",-1));function x(a,k,e,S,w,I){const i=l("Item"),c=l("tooltip-count");return t(),_("div",f,[n("table",v,[n("tr",null,[n("td",null,[e.tool?(t(),s(i,{key:0,name:e.tool,size:64},null,8,["name"])):o("v-if",!0)]),n("td",null,[e.template?(t(),s(i,{key:0,name:e.template,size:64},null,8,["name"])):o("v-if",!0)]),n("td",null,[e.ingredient?(t(),s(i,{key:0,name:e.ingredient,size:64},null,8,["name"])):o("v-if",!0)])])]),y,e.amount?(t(),s(c,{key:0,count:e.amount},{default:u(()=>[d(i,{class:"smithing-result",width:"64px",height:"64px",name:e.result,offset:-100},null,8,["name"])]),_:1},8,["count"])):(t(),s(i,{key:1,class:"smithing-result",width:"64px",height:"64px",name:e.result,offset:-100},null,8,["name"]))])}const N=m(g,[["render",x],["__scopeId","data-v-74690639"],["__file","smithing.vue"]]);export{N as default};