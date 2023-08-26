<template>
  <tooltip-item :item_name="generateName(name, img)" :attack_damage="att_dmg" :attack_speed="att_speed" :armor_v="armor"
    :armor_thougness="armor_thg" :knockback_resistance="knockback" :glowing_v="glowing">

    <img :src="img" v-bind:width="size" class="item_image" />

  </tooltip-item>
</template>

<script>
export default {
  props: {
    img: String,
    size: {
      default: '64',
      type: String
    },
    name: {
      tyep: String,
      default: ""
    },
    att_dmg: [Number, String],
    att_speed: [Number, String],
    armor: [Number, String],
    armor_thg: [Number, String],
    knockback: [Number, String],
    glowing: [Number, String],
  },
  methods: {
    generateName: function (oldname, source) {
      if(oldname != "") {
        return oldname;
      }
      const strings = source.split('/');
      let group = ""
      const length = strings.length
      if (length >= 4) {
        group = strings[length - 2].charAt(0).toUpperCase() + strings[length - 2].slice(1) + " ";
        if(group == "Minecraft ") {
          group = ""
        }
      }
      const name = strings[length - 1].split(".")[0]
      const names = name.split("_");
      let newName = ""
      names.forEach(nm => {
        newName = newName + nm.charAt(0).toUpperCase() + nm.slice(1) + " ";
      });
      newName = newName.slice(0, -1);

      return group + newName;
    }
  }
}

</script>