<template>
  <Header />
  <router-view />
  <Footer />
  <Navigation />
  <DebugInfo v-if="$devMode" />
  <MouseTrail v-if="!$mobile" />
</template>

<script lang="js" src="./App.js"></script>
