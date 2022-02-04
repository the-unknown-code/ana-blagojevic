<template>
  <div :class="['v-image relative h-full overflow-hidden', format]">
    <img class="fullsize object-contain md:object-cover object-center select-none" draggable="false" :src="src" />
  </div>
</template>

<script lang="js" src="./Image.js"></script>
<style lang="scss" scoped>
.v-image {
  &.square {
    width: var(--squareWidth);
    @supports (aspect-ratio: auto) {
      width: auto;
      aspect-ratio: 1/1;
    }
  }
  &.portrait {
    width: calc(100% - 80px);
    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @supports (aspect-ratio: auto) {
      width: auto;
      aspect-ratio: 11/16;
    }
  }
  &.landscape {
    width: var(--landscapeWidth);
    @supports (aspect-ratio: auto) {
      width: auto;
      aspect-ratio: 16/11;
    }
  }
}
</style>
