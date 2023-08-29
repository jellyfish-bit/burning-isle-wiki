<template >
    <tooltip-item :item_name="generateName()" :attack_damage="getItemSource().damage" :attack_speed="getItemSource().att_speed" :armor_v="getItemSource().armor"
    :armor_thougness="getItemSource().armor_thg" :knockback_resistance="getItemSource().knockback" :glowing_v="getItemSource().glowing" :xoffset="offset">
      <img :src="getImg()" :width="size" :alt="name + ' is not found'"/>
    </tooltip-item>
</template>

<script>
import {itemList} from "./registry/items.js"

export default {
  props: {
    name: String,
    offset: {
      type: Number,
      default: 0
    },
    size: {
      type: [Number, String],
      default: "64"
    }
  },
  methods: {
    generateName: function () {
      const names = this.name.split("_");
      let newName = ""
      names.forEach(nm => {
        newName = newName + nm.charAt(0).toUpperCase() + nm.slice(1) + " ";
      });
      return newName.slice(0, -1);
    },
    getItemSource: function () {
      const item = itemList.get(this.name);
      if(item != undefined) {
        return item
      }
      return {img: "minecraft/missing"};  
    },
    getImg: function () {
      return `/burning-isle-wiki/images/${this.getItemSource().img}.png`;
    }
  }
}
</script>