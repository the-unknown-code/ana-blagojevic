<template>
  <div class="w-full cursor-pointer" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut" @click="openProject">
    <Section>
      <div class="flex flex-col justify-center items-center">
        <p class="subtitle text-darkgray">
          <Label label="PROGETTO SUCCESSIVO" :delay="0.2" />
        </p>
        <h2 class="normal-case max-w-xl text-center font-serif py-4 2xl:py-8">
          <Label :label="project.name" />
        </h2>
        <p class="subtitle text-darkgray">
          <Label :label="project.year" :delay="0.2" />
        </p>
      </div>
    </Section>
    <Section class="relative flex justify-center 2xl:-top-8">
      <div class="w-full md:w-1/2">
        <div :class="[project.cover.ratio === ImageFormat.PORTRAIT ? 'w-3/4 mx-auto' : 'w-full']">
          <Media debug :src="getAsset(project.cover.image.url)" :format="project.cover.ratio" :duration="2" parallax />
        </div>
      </div>
    </Section>
  </div>
</template>

<script lang="js" src="./ProjectThumbnail.js"></script>
