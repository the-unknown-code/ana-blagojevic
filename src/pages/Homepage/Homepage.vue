<template>
  <div class="relative fullsize overflow-hidden bg-white">
    <!-- <Image :format="ImageFormat.LANDSCAPE" :src="getVersioned('placeholders/01.jpg')" /> -->
    <div ref="content" class="relative w-full h-full">
      <ImageAnimation v-for="(image, key) in projects" :key="key" :position="key - index">
        <Image :format="image.format" :src="image.src" />
      </ImageAnimation>
    </div>
  </div>
</template>

<script lang="js" src="./Homepage.js"></script>
