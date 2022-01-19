<template>
  <nav class="fullsize bg-lightgray translate-y-full">
    <!-- Component template: Navigation -->
    <div class="fullsize grid grid-cols-2">
      <div></div>
      <div class="flex justify-start items-center">
        <ul class="leading-none text-darkgray uppercase">
          <li class="relative" v-for="(item, key) in nav" :key="key">
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
