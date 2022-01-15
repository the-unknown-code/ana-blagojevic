<template>
  <div class="relative fullsize overflow-hidden">
    <!-- <Image :format="ImageFormat.LANDSCAPE" :src="getVersioned('placeholders/01.jpg')" /> -->
    <div ref="draggable" class="relative w-full min-h-screen">
      <ImageAnimation v-for="(image, key) in projects" :key="key">
        <Image :format="image.format" :src="image.src" />
      </ImageAnimation>
    </div>
  </div>
</template>

<script lang="js" src="./Homepage.js"></script>
