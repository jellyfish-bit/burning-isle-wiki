<template >
    <tooltip-item v-if="getType() == 'normal'" :item_name="generateName()" :attack_damage="getItemSource().damage" :attack_speed="getItemSource().att_speed" :armor_v="getItemSource().armor"
    :armor_thougness="getItemSource().armor_thg" :knockback_resistance="getItemSource().knockback"
     :glowing_v="getItemSource().glowing" :lore="getItemSource().lore"
     :img_size="size" :xoffset="offset" >
      <img :src="getImg()" class="item-img" :alt="name + ' is not found'" loading="lazy"/>
    </tooltip-item>

    <tooltip-smithing v-if="getType() == 'smithing'" :item_name="generateName()" :description="getItemSource().description" :applies_to="getItemSource().applies_to"
     :ingredient="getItemSource().ingredient"
     :img_size="size" :xoffset="offset" >
      <img :src="getImg()" class="item-img" :alt="name + ' is not found'"/>
    </tooltip-smithing>
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
      type: [String, Number],
      default: "64"
    }
  },
  methods: {
    getType: function () {
      const item = itemList.get(this.name);
      if(item != undefined && item.type != undefined) {
        return item.type
      }
      return "normal";
    },
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
      if(item !== undefined) {
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

<style scoped>
 .item-img {
  width: v-bind(size);
  height: v-bind(size);
 }
</style>