<template>
  <article class="relative w-full h-full">
    <Container>
      <div class="flex flex-col justify-center items-center">
        <h2 class="normal-case max-w-xl text-center font-serif">
          <Label :label="project.name" />
        </h2>
        <p class="subtitle text-darkgray 2xl:mt-12 mt-8">
          <Label :label="project.year" :delay="0.2" />
        </p>
      </div>
      <Section class="flex justify-center">
        <div class="relative w-full md:w-1/2">
          <Media :src="getAsset(project.cover.image.url)" :format="project.cover.ratio" :duration="2" />
        </div>
      </Section>

      <template v-for="(item, key) in project.rows">
        <Section v-if="item.__component === RowType.TEXT" class="flex justify-center">
          <p class="relative description">
            <LineText autoplay :label="item.text" />
          </p>
        </Section>
        <Section v-else-if="item.__component === RowType.PORTRAIT" class="flex justify-center">
          <template v-if="item.imageCenter">
            <div class="grid mx-auto">
              <Media :src="getAsset(item.imageCenter.url)" :format="ImageFormat.PORTRAIT" :duration="2" parallax :scale="1" />
            </div>
          </template>
          <template v-else>
            <div class="grid md:grid-cols-2 gap-12 md:gap-24">
              <div class="w-full">
                <Media v-if="item.imageLeft" :src="getAsset(item.imageLeft.url)" :format="ImageFormat.PORTRAIT" :duration="2" parallax :scale="1" />
              </div>
              <div class="w-full">
                <Media v-if="item.imageRight" :src="getAsset(item.imageRight.url)" :format="ImageFormat.PORTRAIT" :duration="2" parallax :scale="1" />
              </div>
            </div>
          </template>
        </Section>
        <Section v-else-if="item.__component === RowType.LANDSCAPE">
          <FullWidth :class="getPadding(item.position)">
            <Media :src="getAsset(item.image.url)" :format="ImageFormat.LANDSCAPE" :duration="2" parallax :scale="1" />
          </FullWidth>
        </Section>
        <Section v-else-if="item.__component === RowType.VIDEO">
          <FullWidth>
            <div class="relative video-holder w-full h-0">
              <iframe
                :src="`https://player.vimeo.com/video/${getVideoId(item.link)}`"
                class="absolute w-full h-full"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </FullWidth>
        </Section>
      </template>

      <ProjectThumbnail :project="nextProject" />
    </Container>
  </article>
</template>

<script lang="js" src="./Project.js"></script>
<style lang="scss" scoped>
.video-holder {
  padding-bottom: 56.25%;
}
</style>
