<template>
  <nav class="fixed top-0 left-0 w-full h-full bg-lightgray translate-y-full" @mousemove="onMouseMove">
    <!-- Component template: Navigation -->
    <div class="fullsize grid grid-cols-2">
      <div class="flex justify-center">
        <div
          v-if="!$mobile"
          ref="thumb"
          id="thumb-holder"
          :class="['relative -translate-x-20 duration-1000 ease-in-out transition-opacity will-change-auto', hover ? 'opacity-100' : 'opacity-0']"
        >
          <div id="thumb-item" class="h-auto -translate-y-1/2 overflow-hidden pointer-events-none">
            <div ref="image" class="relative w-full h-auto">
              <transition name="thumb">
                <img :key="selected" :src="nav[selected].image" class="relative w-full scale-125" />
              </transition>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-start items-center">
        <ul ref="ul" class="leading-none text-darkgray uppercase">
          <li
            class="relative select-none overflow-hidden"
            v-for="(item, key) in nav"
            :key="key"
            @mouseover.prevent="
              () => {
                hover = true
                selected = key
              }
            "
            @mouseout.prevent="hover = false"
          >
            <router-link class="relative block li" :to="{ name: item.route, params: { lang: 'en' } }" :title="item.label">
              <AnimatedLabel rollover :label="item.label" class="relative" />
            </router-link>
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

#thumb-item {
  width: 16vw;
}
</style>
