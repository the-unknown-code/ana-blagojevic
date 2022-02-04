<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
  <Navigation />
  <MouseTrail v-if="!$mobile" />
</template>

<script lang="js" src="./App.js"></script>
