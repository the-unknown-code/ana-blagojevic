<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
  <Footer />
  <Navigation />
  <MouseTrail v-if="!$mobile" />
  <Loading :active="loadingState" />
</template>

<script lang="js" src="./App.js"></script>
