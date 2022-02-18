<template>
  <article class="relative w-full h-full">
    <Container>
      <div class="mt-8">
        <div class="relative grid md:grid-cols-2">
          <div id="bio" class="relative mb-12 md:mb-0">
            <div class="md:w-2/4 mx-auto" ref="bio">
              <Media :src="getAsset($global.about.imageTopMini.url)" :format="ImageFormat.PORTRAIT" :duration="2" />
            </div>
          </div>
          <div id="info">
            <h1 class="font-medium overflow-hidden w-full flex justify-start pointer-events-none mb-12">
              <AnimatedLabel ref="title" :label="$global.about.title" />
            </h1>
            <p class="description 2xl:pt-16"><LineText :label="$global.about.description" /></p>
          </div>
        </div>
      </div>
      <Section>
        <FullWidth>
          <Media :src="getAsset($global.about.imageTopFull.url)" :duration="2" parallax />
        </FullWidth>
      </Section>
      <Section>
        <List :title="$global.about.cvTitle" :list="$global.about.cv.list" />
      </Section>
      <Section>
        <List :title="$global.about.exhibitionsTitle" :list="$global.about.exhibitions.list" />
      </Section>
      <Section>
        <List :title="$global.about.educationTitle" :list="$global.about.education.list" />
      </Section>
    </Container>
  </article>
</template>

<script lang="js" src="./About.js"></script>
<style lang="scss" scoped>
#info,
#bio {
  @media screen and (min-width: 768px) {
    transform: translateX(-4.5rem);
  }

  @media screen and (min-width: 1920px) {
    transform: translateX(-5.5rem);
  }
}

#bio {
  @media screen and (min-width: 768px) {
    top: 2rem;
  }
}
</style>
