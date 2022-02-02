<template>
  <header class="fixed w-full z-10 py-4 px-8 select-none">
    <div class="w-full grid grid-cols-3">
      <div :class="['relative', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p class="relative leading-none flex flex-col overflow-hidden h-4 uppercase text-darkgray cursor-pointer" @click.prevent="onMenuClick">
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">Menu</span>
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">Chiudi</span>
        </p>
      </div>
      <div class="relative text-center">
        <p class="uppercase text-darkgray leading-none">Ana Blagojevic</p>
      </div>
      <div class="relative text-right">
        <p class="uppercase text-darkgray leading-none">® 2021</p>
      </div>
    </div>
  </header>
</template>

<script lang="js" src="./Header.js"></script>
