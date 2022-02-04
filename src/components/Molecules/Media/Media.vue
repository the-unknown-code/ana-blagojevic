<template>
  <div :class="['ab-media relative overflow-hidden', format, cover ? 'h-full' : 'h-auto']">
    <div v-if="!cover" ref="holder" class="ab-media__holder relative scale-150">
      <div v-if="parallax" id="parallax" ref="parallax" :class="['relative', parallax ? 'scale-125' : 'scale-100']">
        <img ref="media" :src="src" class="relative w-full h-auto translate-y-full" />
      </div>
      <img v-else ref="media" :src="src" class="relative w-full h-auto translate-y-full" />
    </div>
    <div v-else ref="holder" class="ab-media__holder relative w-full h-full scale-125">
      <img ref="media" :src="src" class="relative w-full h-full translate-y-full object-cover object-center" />
    </div>
  </div>
</template>

<script lang="js" src="./Media.js"></script>
<style lang="scss" scoped>
#parallax {
  transform-origin: bottom center;
}
</style>
