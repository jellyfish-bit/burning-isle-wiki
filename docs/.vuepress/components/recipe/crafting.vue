<template>
  <div class=crafting-preview>
    <table class="crafting-grid">
      <tr>
        <td><Item v-if="slot_1" :name="slot_1" :size="32" /></td>
        <td><Item v-if="slot_2" :name="slot_2" :size="32" /></td>
        <td><Item v-if="slot_3" :name="slot_3" :size="32" /></td>
      </tr>
      <tr>
        <td><Item v-if="slot_4" :name="slot_4" :size="32" /></td>
        <td><Item v-if="slot_5" :name="slot_5" :size="32" /></td>
        <td><Item v-if="slot_6" :name="slot_6" :size="32" /></td>
      </tr>
      <tr>
        <td><Item v-if="slot_7" :name="slot_7" :size="32" /></td>
        <td><Item v-if="slot_8" :name="slot_8" :size="32" /></td>
        <td><Item v-if="slot_9" :name="slot_9" :size="32" /></td>
      </tr>
    </table>
    <div class=crafting-arrow>&#8594;</div>
    <tooltip-count v-if="amount" :count="amount">
      <Item class="crafting-result" width="64px" height="64px" :name="result" :offset="-100"/>
    </tooltip-count>
    <Item v-else class="crafting-result" width="64px" height="64px" :name="result" :offset="-100"/>
  </div>
</template>
  
<script>
import Item from "../Item.vue";

export default {
  components: {Item},
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
    result: {
      type: String,
    },
    amount: {
      type: [String, Number]
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
  overflow: visible;
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