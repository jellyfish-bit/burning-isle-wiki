<template >
    <tooltip-item :item_name="generateName(name)" :attack_damage="damage" :attack_speed="speed" :armor_v="armor"
    :armor_thougness="thg" :knockback_resistance="knockb" :glowing_v="glowing">
      <img :src="img"/>
    </tooltip-item>
</template>

<script>
import json from "./registry/items.json"

export default {
  props: {
    name: String,

  },
  data() {
    return {
      img: "",
      damage: false,
      speed: false,
      armor: false,
      thg: false,
      knockb: false,
      glowing: false,
      myJson: json
    }
  },
  created() {
    this.setJsonSource();
    console.log(this.img + " img logged")
  },
  methods: {
    generateName: function (source) {
      const names = source.split("_");
      let newName = ""
      names.forEach(nm => {
        newName = newName + nm.charAt(0).toUpperCase() + nm.slice(1) + " ";
      });
      return newName.slice(0, -1);
    },
    setJsonSource() {
        this.myJson.forEach(jsonItem => {
            console.log(jsonItem.name == this.name)
            if(jsonItem.name == this.name) {
                console.log(jsonItem.img)
                this.img = "/burning-isle-wiki/images/" + jsonItem.img + ".png"
                this.damage = jsonItem.damage
                this.thg = jsonItem.armor_thg
                this.armor = jsonItem.armor
                this.speed = jsonItem.speed
                this.glowing = jsonItem.glowing
                this.knockb = jsonItem.knockback
            }
        });
        
    }
  }
}
</script>

<style scoped>
    .item-image {
        width: 64px !important;
        height: 64px !important;
        background-color: aqua;
    }
</style>