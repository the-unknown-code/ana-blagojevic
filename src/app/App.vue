<template>
  <Header />
  <router-view />
  <Footer />
  <Navigation />
  <MouseTrail v-if="!$mobile" />
</template>

<script lang="js" src="./App.js"></script>
