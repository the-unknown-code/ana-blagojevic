<template>
  <div :class="['ab-media overflow-hidden', format]">
    <div ref="holder" class="ab-media__holde relative scale-125">
      <div id="parallax" ref="parallax" :class="['relative', parallax ? 'scale-125' : 'scale-100']">
        <img ref="media" :src="src" class="w-full h-auto translate-y-full" />
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Media.js"></script>
<style lang="scss" scoped>
#parallax {
  transform-origin: bottom center;
}
</style>
