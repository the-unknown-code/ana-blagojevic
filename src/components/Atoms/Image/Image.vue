<template>
  <div :class="['v-image relative h-full overflow-hidden', format]">
    <img class="fullsize object-cover object-center centered" :src="src" />
  </div>
</template>

<script lang="js" src="./Image.js"></script>
<style lang="scss" scoped>
.v-image {
  &.square {
    aspect-ratio: 1/1;
  }
  &.portrait {
    aspect-ratio: 11/16;
  }
  &.landscape {
    aspect-ratio: 16/11;
  }
}
</style>
