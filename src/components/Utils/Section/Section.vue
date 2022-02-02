<template>
  <section :class="[isActive ? 'visible' : 'invisible']">
    <slot></slot>
  </section>
</template>

<script lang="js" src="./Section.js"></script>
