<template>
  <div class="fullsize overflow-hidden" data-position="absolute">
    <!-- <Image :format="ImageFormat.LANDSCAPE" :src="getVersioned('placeholders/01.jpg')" /> -->
    <div ref="content" class="relative w-full h-full">
      <ImageAnimation v-for="(image, key) in projects" :key="key" :position="key - index" @click="openProject(key)">
        <Image :format="image.format" :src="image.src" />
      </ImageAnimation>
    </div>
    <div ref="projects" class="absolute bottom-0 flex flex-nowrap items-center left-1/2 pb-2 md:pb-4">
      <div ref="skew" class="relative w-full flex flex-nowrap items-center">
        <div class="absolute pointer-events-none w-full flex flex-nowrap items-center top-0 -translate-x-full pb-2">
          <h2 c v-for="(item, key) in projects" :key="key" :data-extra="item.year" class="relative project-label font-serif mr-16 whitespace-nowrap normal-case">
            <Label :label="item.title" class="pb-2" :delay="key * 0.1" />
          </h2>
        </div>
        <h2
          v-for="(item, key) in projects"
          :key="key"
          :data-extra="item.year"
          :class="['relative cursor-pointer project-label font-serif mr-16 whitespace-nowrap normal-case tra duration-500 ease-out', index === key ? '-skew-x-12' : '']"
          @mouseenter.native="onLinkOver"
          @mouseleave.native="onLinkOut"
          @click.prevent="openProject(key)"
        >
          <Label :label="item.title" class="pb-2" :delay="key * 0.1" />
        </h2>
        <div class="absolute pointer-events-none w-full flex flex-nowrap items-center top-0 translate-x-full">
          <h2 v-for="(item, key) in projects" :key="key" :data-extra="item.year" class="relative project-label font-serif mr-16 whitespace-nowrap normal-case">
            <Label :label="item.title" class="pb-2" :delay="key * 0.1" />
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
    @apply absolute bottom-4 md:bottom-3 translate-x-8 w-1 h-1 rounded-full bg-black;
  }
  &::after {
    content: attr(data-extra);
    font-size: 11px;
    @apply absolute top-0 leading-none font-sans right-0 translate-x-full;
  }
}
</style>
