<template>
  <div class="relative fullsize overflow-hidden bg-white">
    <!-- <Image :format="ImageFormat.LANDSCAPE" :src="getVersioned('placeholders/01.jpg')" /> -->
    <div ref="content" class="relative w-full h-full">
      <ImageAnimation v-for="(image, key) in projects" :key="key" :position="key - index">
        <Image :format="image.format" :src="image.src" />
      </ImageAnimation>
    </div>
    <div
      ref="projects"
      class="absolute pointer-events-none bottom-0 flex flex-nowrap items-center left-1/2 pb-6 transition-transform duration-1000 ease-in-out"
      :style="`transform: translateX(${projectPosition}px);`"
    >
      <div class="w-full flex flex-nowrap items-center">
        <div class="absolute w-full flex flex-nowrap items-center top-0 -translate-x-full">
          <h2 v-for="(item, key) in projects" :key="key" :data-extra="item.year" class="relative project-label font-serif mr-14 whitespace-nowrap normal-case">
            {{ item.title }}
          </h2>
        </div>
        <h2 v-for="(item, key) in projects" :key="key" :data-extra="item.year" class="relative project-label font-serif mr-14 whitespace-nowrap normal-case">
          {{ item.title }}
        </h2>
        <div class="absolute w-full flex flex-nowrap items-center top-0 translate-x-full">
          <h2 v-for="(item, key) in projects" :key="key" :data-extra="item.year" class="relative project-label font-serif mr-14 whitespace-nowrap normal-case">
            {{ item.title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Homepage.js"></script>
<style lang="scss" scoped>
h2 {
  &::before {
    content: '';
    font-size: 50%;
    right: -2px;
    @apply absolute bottom-2 md:bottom-1 translate-x-7 w-1 h-1 rounded-full bg-black;
  }
  &::after {
    content: attr(data-extra);
    font-size: 20%;
    @apply absolute top-0 leading-none font-bold right-0 translate-x-full;
  }
}
</style>
