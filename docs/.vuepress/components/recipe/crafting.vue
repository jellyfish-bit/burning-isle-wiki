<template>
  <div class=crafting-preview>
    <table class="crafting-grid">
      <tr>
        <td><img v-if="slot_1" :src="addBase(slot_1)"></td>
        <td><img v-if="slot_2" :src="addBase(slot_2)"></td>
        <td><img v-if="slot_3" :src="addBase(slot_3)"></td>
      </tr>
      <tr>
        <td><img v-if="slot_4" :src="addBase(slot_4)"></td>
        <td><img v-if="slot_5" :src="addBase(slot_5)"></td>
        <td><img v-if="slot_6" :src="addBase(slot_6)"></td>
      </tr>
      <tr>
        <td><img v-if="slot_7" :src="addBase(slot_7)"></td>
        <td><img v-if="slot_8" :src="addBase(slot_8)"></td>
        <td><img v-if="slot_9" :src="addBase(slot_9)"></td>
      </tr>
    </table>
    <div class=crafting-arrow>&#8594;</div>
    <img class="crafting-result" width="64px" height="64px" :src="addBase(output)" :alt="output">
  </div>
</template>
  
<script>
export default {
  props: {
    slot_1: {
      type: String,
    },
    slot_2: {
      type: String,
    },
    slot_3: {
      type: String,
    },
    slot_4: {
      type: String,
    },
    slot_5: {
      type: String,
    },
    slot_6: {
      type: String,
    },
    slot_7: {
      type: String,
    },
    slot_8: {
      type: String,
    },
    slot_9: {
      type: String,
    },
    output: {
      type: String,
    }
  },
  methods: {
    
    addBase(img) {
      return "/burning-isle-wiki" + img;
    }
  }
}

</script>

<style scoped>
.crafting-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 519px;
  margin-inline: auto;
}
.crafting-arrow {
  color: var(--c-brand);
  font-size: 40px;
  font-weight: 100;
}
.crafting-result {
  border: 1px solid var(--c-brand);
  border-radius: 5px;
  padding: 4px;
  width: 64px;
  height: 64px;
}

.crafting-grid {
  border-collapse: collapse;
  border-radius: 10px;

}
.crafting-grid tr {
  border: none;
}
.crafting-grid td {
  border: 1px solid var(--c-brand);
  background-color: var(--c-details-bg);
  width: 32px;
  height: 32px;
}
.crafting-grid td:first-child {
  border-left: none;
}
.crafting-grid td:last-child {
  border-right: none;
}
.crafting-grid tr:last-child td {
  border-bottom: none;
}
.crafting-grid tr:first-child td {
  border-top: none;
}
</style>