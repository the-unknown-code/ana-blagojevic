<template>
  <article class="relative w-full h-full">
    <Container>
      <div class="relative grid md:grid-cols-2 md:mt-40">
        <div></div>
        <div id="info">
          <h1 class="overflow-hidden w-full flex justify-start pointer-events-none mb-12">
            <AnimatedLabel ref="title" label="Bio" />
          </h1>
          <p class="description">
            <LineText
              label="I was born in Belgrade in 1988.<br/>Currently I live and work in Verona.<br/><br/>In 2011 I graduated from the faculty of Visual and Performing Arts at the University IUAV of Venice. I spent a period of time at Hooges school in St. Lukas in Brussels and a period of time at the school of photography cfp Bauer in Milan.<br/><br/>In 2012 I joined photo collective Cesura, where I remained for three years. In this period I assisted the agency Magnum Photos and its photographer Alex Majoli.<br/><br/>In 2016-2017 I was a member of the artistic residency at the Fondazione Bevilacqua la Masa in Venice.<br/><br/>In 2018 I am a co-founder of Såm, a 3-years exhibition/research/residency project dedicated to the area of the Lessinia mountains."
            />
          </p>
        </div>
      </div>
      <div id="content" class="mt-12">
        <FullWidth>
          <Media :src="this.getVersioned('placeholders/landscape.jpg')" :duration="2" parallax />
        </FullWidth>
      </div>
    </Container>
  </article>
</template>

<script lang="js" src="./About.js"></script>
<style lang="scss" scoped>
#info {
  @media screen and (min-width: 768px) {
    transform: translateX(-5vw);
  }

  @media screen and (min-width: 1920px) {
    transform: translateX(0);
  }
}
</style>
