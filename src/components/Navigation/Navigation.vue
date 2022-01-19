<template>
  <nav class="fullsize bg-lightgray translate-y-full">
    <!-- Component template: Navigation -->
    <div class="fullsize grid grid-cols-2">
      <div class="flex justify-end">
        <div
          v-if="!$mobile"
          ref="thumb"
          id="thumb-holder"
          :class="['relative -translate-x-20 duration-500 ease-in-out transition-opacity will-change-auto', hover ? 'opacity-100' : 'opacity-0']"
        >
          <div class="thumb-item w-32 h-auto -translate-y-1/2">
            <transition name="fade">
              <img :key="selected" :src="nav[selected].image" class="relative w-full" />
            </transition>
          </div>
        </div>
      </div>

      <div class="flex justify-start items-center">
        <ul class="leading-none text-darkgray uppercase">
          <li
            class="relative"
            v-for="(item, key) in nav"
            :key="key"
            @mouseover.prevent="
              () => {
                hover = true
                selected = key
              }
            "
            @mouseout.prevent="hover = false"
            @mousemove="onMouseMove"
          >
            <span class="block">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="js" src="./Navigation.js"></script>
<style lang="scss" scoped>
ul {
  font-size: 8.5vw;
  transform: translateX(-5vw);

  @media screen and (min-width: 1920px) {
    font-size: 10rem;
    transform: translateX(0);
  }
}
</style>
