<template>
  <header class="fixed top-0 w-full z-50 py-4 px-8 select-none mix-blend-difference">
    <div class="relative w-full flex justify-between">
      <div :class="['relative z-10', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p
          class="relative leading-none flex flex-col overflow-hidden h-4 uppercase text-white whitespace-nowrap cursor-pointer"
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
        <p class="uppercase text-white leading-none">
          <Label label="® 2021" :delay="0.1" />
        </p>
      </div>
    </div>
  </header>

  <div
    :class="[
      'fixed top-0 py-4 left-0 w-full text-center flex-grow text-white transition-all duration-1000 ease-in-out z-40',
      toggle ? 'translate-y-0' : '-translate-y-full opacity-0'
    ]"
  >
    <router-link :to="{ name: RouteNames.HOMEPAGE, params: { lang: 'en' } }">
      <p class="relative uppercase text-black leading-none px-2 md:px-4 text-5xl md:text-base">
        <Label label="Ana<br/>Blagojevic" class="md:hidden" />
        <Label label="Ana Blagojevic" class="hidden md:block" />
      </p>
    </router-link>
  </div>
</template>

<script lang="js" src="./Header.js"></script>
