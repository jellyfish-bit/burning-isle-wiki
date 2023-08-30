<template>
<div class="container">
  <div class="img">
    <slot name="img" ></slot>
  </div>

  <div class="info"> 
    <slot name="info" class="info"></slot>
  </div>
</div>

</template>

<style scoped>
  .container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }
  .img {
    display: block;
  }
  .info {
    display: inline;
  }

</style>