<template>
  <header class="fixed top-0 w-full z-10 py-4 px-8 md:px-12 lg:px-20 xl:px-32 select-none mix-blend-difference">
    <div class="relative w-full flex justify-between">
      <div :class="['relative z-10', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p class="relative leading-none flex flex-col overflow-hidden h-4 uppercase text-white whitespace-nowrap cursor-pointer" @click.prevent="onMenuClick">
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="menu" />
          </span>
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="chiudi" />
          </span>
        </p>
      </div>
      <div class="absolute md:relative left-0 w-full text-center flex-grow text-white">
        <router-link :to="{ name: RouteNames.HOMEPAGE, params: { lang: 'en' } }">
          <p class="relative uppercase leading-none px-12 md:px-4 text-5xl md:text-base">
            <Label label="Ana<br/>Blagojevic" class="md:hidden" />
            <Label label="Ana Blagojevic" class="hidden md:block" />
          </p>
        </router-link>
      </div>
      <div class="relative z-10 text-right whitespace-nowrap">
        <p class="uppercase text-white leading-none">
          <Label label="® 2021" :delay="0.1" />
        </p>
      </div>
    </div>
  </header>
</template>

<script lang="js" src="./Header.js"></script>
