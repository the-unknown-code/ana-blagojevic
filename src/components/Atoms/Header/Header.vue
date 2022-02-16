<template>
  <header class="fixed top-0 w-full z-50 py-4 px-8 select-none mix-blend-difference">
    <div class="relative w-full flex justify-between">
      <div :class="['relative z-10', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p
          class="relativefont-medium subtitle leading-none flex flex-col overflow-hidden 2xl:h-6 h-4 uppercase text-white whitespace-nowrap cursor-pointer"
          @click.prevent="onMenuClick"
          @mouseenter.native="onLinkOver"
          @mouseleave.native="onLinkOut"
        >
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="menu" />
          </span>
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="chiudi" />
          </span>
        </p>
      </div>
      <div></div>
      <div class="relative z-10 text-right whitespace-nowrap">
        <p class="subtitle uppercase font-medium text-white leading-none z-50">
          <Label label="® 2022" :delay="0.1" />
        </p>
      </div>
    </div>
  </header>

  <div
    :class="[
      'fixed top-0 py-4 w-0 md:w-1/2 left-1/2 md:-translate-x-1/2 text-center flex-grow text-white transition-all duration-1000 ease-in-out z-40 md:z-50',
      toggle ? 'translate-y-0' : '-translate-y-full opacity-0'
    ]"
  >
    <router-link class="absolute -translate-x-1/2" :to="{ name: RouteNames.HOMEPAGE, params: { lang: 'en' } }">
      <p class="relative font-medium subtitle uppercase text-darkgray leading-none px-2 md:px-4 md:text-base">
        <Label label="Ana<br/>Blagojevic" class="md:hidden text-5xl" />
        <Label label="Ana Blagojevic" class="hidden md:block" />
      </p>
    </router-link>
  </div>
</template>

<script lang="js" src="./Header.js"></script>
