<template>
  <Section>
    <div class="flex flex-col justify-center items-center">
      <h2 class="normal-case max-w-xl text-center mb-4">
        <Label label="Associazione Interzona Spazio" />
      </h2>
      <p class="description">
        <Label label="17 - 21" :delay="0.2" />
      </p>
    </div>
  </Section>
  <Section class="flex justify-center">
    <div class="w-full md:w-1/2">
      <Media debug :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
    </div>
  </Section>
</template>

<script lang="js" src="./ProjectThumbnail.js"></script>
