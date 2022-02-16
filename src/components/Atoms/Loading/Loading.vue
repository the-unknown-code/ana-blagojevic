<template>
  <div :class="['fixed w-full h-full top-0 left-0 translate-y-0 overflow-hidden pointer-events-none']">
    <div ref="loadingBG" class="fullsize bg-lightgray inset-0 translate-y-full"></div>
    <Container>
      <h1 ref="loadingText" class="mt-16 md:mt-0 w-full text-center translate-x-full">
        <span>{{ $global.resources.loading }}</span>
      </h1>
    </Container>
  </div>
</template>

<script lang="js" src="./Loading.js"></script>
