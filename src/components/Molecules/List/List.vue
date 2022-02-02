<template>
  <section>
    <h2 class="pointer-events-none mb-6 md:mb-12">
      <AnimatedLabel :label="title" autoplay />
    </h2>
    <div v-for="(item, key) in list" :key="key" class="relative grid grid-cols-4 py-4">
      <div class="col-span-3">
        <p class="description pr-6 md:pr-10">
          <Label :label="item.title" />
        </p>
      </div>
      <div class="text-right">
        <p class="description">
          <Label :label="item.year" :delay="0.1" />
        </p>
      </div>
      <div class="absolute w-full bottom-0">
        <Border :delay="0.2" />
      </div>
    </div>
  </section>
</template>

<script lang="js" src="./List.js"></script>
