<template>
  <div class="w-full cursor-pointer" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut" @click="openProject">
    <Section>
      <div class="flex flex-col justify-center items-center">
        <h2 class="normal-case max-w-xl text-center mb-4 font-serif">
          <Label label="The number you have dialed could not be reached" />
        </h2>
        <p class="subtitle text-darkgray">
          <Label label="2017 — 2018" :delay="0.2" />
        </p>
      </div>
    </Section>
    <Section class="flex justify-center">
      <div class="w-full md:w-1/2">
        <Media debug :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
      </div>
    </Section>
  </div>
</template>

<script lang="js" src="./ProjectThumbnail.js"></script>
