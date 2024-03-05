<template>
    <div class="hover-item">
        <span class="hover-preview">
            <span class="white">{{ name }}</span>

            <br v-if="variant" class="white">
            <span v-if="variant" class="gray">Varirant:
              <span class="colored">{{ variant }}</span>
            </span>
            
            
          </span>
        <slot>
            Missing
        </slot>
    </div>
   
</template>
  
<script>
    export default {
      props: {
        name: String,
        variant: String,
        color: {
          type: String,
          default: "white"
        }
      }
    }
</script>

<style scoped>
@import url(https://fontlibrary.org//face/minecraftia);

.hover-item {
  position: relative;
  display: inline-block;
  padding: 5px;
  width: 64px;
}
.hover-item .hover-preview {
    bottom: -1.6em;
    left: v-bind(xoffset + "px");
    position: absolute;
    font-family: "Minecraftia", serif;

    font-size: 100%;
    padding: 1px 5px 2px 5px;

    background: rgba(16,0,16,0.93);
    border: 2px solid;
    border-image: linear-gradient(to bottom,rgba(80,0,255,0.31),rgba(40,0,127,0.31));
    border-image-slice: 1;
    border-radius: 4px;
    box-shadow: 0 0 0 2px rgba(16,0,16,0.93); 

    z-index: 2;

    display: none;
    line-height: 18px;
    margin-left: 16px;
    margin-top: -30px;
    pointer-events: none;
    text-indent: initial;
    /*text-shadow: 2px 2px #3F3F3F;*/
    width: max-content;
    overflow: visible;
}
.hover-preview > span {
    direction: ltr;
    display: block;
    text-align: left;
    overflow: visible;
    white-space: nowrap;
}
.hover-item:hover .hover-preview {
    display: block;
}
.colored {
  color: v-bind(color)
}
.white {
  color: white;
}
.gray {
  color: #AAAAAA;
}


</style>