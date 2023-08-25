<template>
  <div class="crafting-preview">
    <div class="smelting-input">
      <img width="48px" height="48px" :src="input" :alt="input">
      
      <icon-fire/>
    </div>
    <div class=crafting-arrow>&#8594;</div>
    
    <img class="crafting-result" width="64px" height="64px" :src="output" :alt="output">
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
    }
  }
</script>
