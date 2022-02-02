<template>
  <div class="ab-media overflow-hidden">
    <div ref="holder" class="ab-media__holder relative scale-125">
      <div ref="parallax" :class="['relative', parallax ? 'scale-125 origin-bottom-right' : 'scale-100']">
        <img ref="media" :src="src" class="w-full h-auto translate-y-full" />
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Media.js"></script>
