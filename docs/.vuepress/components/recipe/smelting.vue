<template>
  <div class="crafting-preview">
    <div class="smelting-input">
      <img width="48px" height="48px" :src="addBase(input)" :alt="input">

      <icon-fire/>
    </div>
    <div class=crafting-arrow>&#8594;</div>

    <img class="crafting-result" width="64px" height="64px" :src="addBase(output)" :alt="output">
  </div>
</template>

<script>
export default {
  props: {
    input: {
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

.smelting-input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 196px;
  height: 196px;
}

.smelting-input img {
  width: 64px;
  height: 64px;
  border-radius: 7px
}

.smelting-input svg {
  fill: var(--c-brand);
}
</style>
