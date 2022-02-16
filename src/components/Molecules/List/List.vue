<template>
  <section>
    <h3 class="font-medium pointer-events-none mb-6 md:mb-16">
      <AnimatedLabel :label="title" autoplay />
    </h3>

    <a v-for="(item, key) in list" :key="key" class="relative block" :href="item.link" target="_blank">
      <div
        class="relative grid grid-cols-4 py-4 cursor-pointer"
        @mouseenter="
          () => {
            hoverIndex = key
            onLinkOver()
          }
        "
        @mouseleave="
          () => {
            hoverIndex = -1
            onLinkOut()
          }
        "
      >
        <div class="col-span-3">
          <p class="list pr-6 md:pr-10">
            <small>
              <Label :label="item.name" />
            </small>
          </p>
        </div>
        <div class="text-right">
          <p class="list">
            <small>
              <Label :label="item.year" :delay="0.1" />
            </small>
          </p>
        </div>
        <div class="absolute w-full bottom-0">
          <Border :delay="0.2" :hover="hoverIndex === key" />
        </div>
      </div>
    </a>
  </section>
</template>

<script lang="js" src="./List.js"></script>
