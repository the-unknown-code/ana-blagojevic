<template>
  <header class="fixed w-full z-10 py-4 px-8 select-none">
    <div class="w-full grid grid-cols-3">
      <div :class="['relative', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p class="uppercase text-darkgray cursor-pointer" @click.prevent="onMenuClick">Menu</p>
      </div>
      <div class="relative text-center">
        <h1 class="uppercase text-darkgray">Ana Blagojevic</h1>
      </div>
      <div class="relative text-right">
        <p class="uppercase text-darkgray">® 2021</p>
      </div>
    </div>
  </header>
</template>

<script lang="js" src="./Header.js"></script>
