<template>
    <div class="count-overlay-item">
        <slot>
            missing
        </slot>
        <span  v-if="count" class="count-overlay">{{ count }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            count: [String, Number]
        }
    }
</script>

<style scoped>
    @import url(https://fontlibrary.org//face/minecraftia);

    .count-overlay-item {
        display: inline;
        position: relative;
        /*
        Needed for some resone
        */
        border: 1px solid transparent;
    }
    .count-overlay {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 5px;
        font-family: "Minecraftia",serif;
    }
    
</style>