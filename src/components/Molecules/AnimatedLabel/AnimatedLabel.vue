<template>
  <span class="relative flex flex-col overflow-hidden leading-none" @mouseover.prevent="over = true" @mouseleave.prevent="over = false">
    <span ref="top" class="flex items-center">
      <span v-for="(char, i) in parsedLabel" :class="['block label will-change-transform', !rollover ? 'translate-y-full' : '']">{{ char }}</span>
    </span>
    <span v-if="rollover" ref="bottom" class="absolute flex items-center will-change-transform translate-y-full">
      <span v-for="(char, i) in parsedLabel" class="block label will-change-transform">{{ char }}</span>
    </span>
  </span>
</template>

<script lang="js" src="./AnimatedLabel.js"></script>
