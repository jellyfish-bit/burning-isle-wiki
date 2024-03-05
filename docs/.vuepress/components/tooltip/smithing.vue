<template>
  <div class="hover-item">
    <span class="hover-preview">
      <span class="white">{{ item_name }}</span>

      <span v-if="description" class="gray"> {{ description }}</span>
      <br v-if="applies_to || ingredient">

      <span v-if="applies_to" class="gray"> Applies to:</span>
      <span v-if="applies_to" class="dark_blue">  {{ applies_to }}</span>
      <span v-if="ingredient" class="gray"> Ingredient:</span>
      <span v-if="ingredient" class="dark_blue">  {{ ingredient }}</span>
    </span>

    <slot>
      Missing
    </slot>
  </div>
</template>
  
<script>
export default {
  props: {
    item_name: String,
    description: String,
    applies_to: String,
    ingredient: String,
    xoffset: {
      type: Number,
      default: 0
    },
    img_size: {
      type: [Number, String],
      default: 64
    }
  }
}
</script>

<style scoped>
@import url(https://fontlibrary.org//face/minecraftia);

.hover-item {
  position: relative;
  display: block;
  width: v-bind(img_size + "px");
  height: v-bind(img_size + "px");
}

.hover-item .hover-preview {
  bottom: -1.6em;
  left: v-bind(xoffset + "px");
  position: absolute;
  font-family: "Minecraftia";

  font-size: 100%;
  padding: 1px 5px 2px 5px;

  background: rgba(16, 0, 16, 0.93);
  border: 2px solid;
  border-image: linear-gradient(to bottom, rgba(80, 0, 255, 0.31), rgba(40, 0, 127, 0.31));
  border-image-slice: 1;
  border-radius: 4px;
  box-shadow: 0 0 0 2px rgba(16, 0, 16, 0.93);

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

.hover-preview span {
  direction: ltr;
  display: block;
  white-space: nowrap;
  text-align: left;
  overflow: visible;
}

.hover-item:hover .hover-preview {
  display: block;
}

.dark_blue {
  color: #5555FF;
  padding-left: 10px;
}

.dark_green {
  color: #00AA00;
  padding-left: 10px;

}

.white {
  color: #FFFFFF;
}

.gray {
  color: #AAAAAA;
}</style>