<template>
  <div class="hover-item">
    <span class="hover-preview">
      <span class="white">{{ item_name }}</span>

      <br v-if="attack_damage || attack_speed">
      <span v-if="attack_damage || attack_speed" class="gray">When in Main Hand:</span>

      <span v-if="attack_damage" class="dark_green"> {{ attack_damage }} Attack Damage</span>
      <span v-if="attack_speed" class="dark_green"> {{ attack_speed }} Attack Speed</span>

      <br v-if="armor_v || armor_thougness || knockback_resistance || glowing_v || lore">
      <span v-if="armor_v || armor_thougness || knockback_resistance || glowing_v || lore" class="gray">When Worn:</span>

      <span v-if="lore" class="dark_blue"> {{ lore }}</span>
      <span v-if="armor_v" class="dark_blue"> +{{ armor_v }} Armor</span>
      <span v-if="armor_thougness" class="dark_blue"> +{{ armor_thougness }} Armor Thougness</span>
      <span v-if="knockback_resistance" class="dark_blue"> +{{ knockback_resistance }} Knockback Resistance</span>
      <span v-if="glowing_v" class="dark_blue"> +{{ glowing_v }} Glowing</span>

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
    attack_damage: [Number, String],
    attack_speed: [Number, String],
    armor_v: [Number, String],
    armor_thougness: [Number, String],
    knockback_resistance: [Number, String],
    glowing_v: [Number, String],
    lore: [String],
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