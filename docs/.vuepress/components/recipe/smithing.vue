<template>
  <div class=smithing-preview>
    <table class="smithing-grid">
      <tr>
        <td><Item v-if="tool" :name="tool" :size="64" /></td>
        <td><Item v-if="template" :name="template" :size="64" /></td>
        <td><Item v-if="ingredient" :name="ingredient" :size="64" /></td>
      </tr>
    </table>
    
    <div class=smithing-arrow>&#8594;</div>
    <tooltip-count v-if="amount" :count="amount">
      <Item class="smithing-result" width="64px" height="64px" :name="result" :offset="-100"/>
    </tooltip-count>
    <Item v-else class="smithing-result" width="64px" height="64px" :name="result" :offset="-100"/>
  </div>
</template>
  
<script>
export default {
  props: {
    tool: {
      type: String,
    },
    template: {
      type: String,
    },
    ingredient: {
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
.smithing-preview {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 519px;
  margin-inline: auto;
  border: 1px solid var(--c-brand);
  border-radius: 5px;
  margin: 15px;
  flex-wrap: wrap;
}
.smithing-arrow {
  color: var(--c-brand);
  font-size: 40px;
  font-weight: 100;
}
.smithing-result {
  border-radius: 5px;
  padding: 4px;
  width: 64px;
  height: 64px;
}

.smithing-grid {
  border-collapse: collapse;
  border-radius: 0px;
  overflow: visible;
  margin: 0;
}
.smithing-grid tr {
  border: none;
}
.smithing-grid td {
  border: 1px solid var(--c-brand);
  width: 32px;
  height: 32px;
}
.smithing-grid td:first-child {
  border-left: none;
}
.smithing-grid tr:last-child td {
  border-bottom: none;
}
.smithing-grid tr:first-child td {
  border-top: none;
}
</style>