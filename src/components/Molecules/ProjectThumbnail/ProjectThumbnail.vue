<template>
  <div class="w-full cursor-pointer" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut" @click="openProject">
    <Section>
      <div class="flex flex-col justify-center items-center">
        <h2 class="normal-case max-w-xl text-center font-serif">
          <Label :label="project.name" />
        </h2>
        <p class="subtitle text-darkgray 2xl:mt-12 mt-8">
          <Label :label="project.year" :delay="0.2" />
        </p>
      </div>
    </Section>
    <Section class="flex justify-center">
      <div class="w-full md:w-1/2">
        <Media debug :src="getAsset(project.cover.image.url)" :format="project.cover.ratio" :duration="2" parallax />
      </div>
    </Section>
  </div>
</template>

<script lang="js" src="./ProjectThumbnail.js"></script>
