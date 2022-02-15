<template>
  <article class="relative w-full h-full">
    <Container>
      <div class="flex flex-col justify-center items-center">
        <h2 class="normal-case max-w-xl text-center font-serif">
          <Label label="The number you have dialed could not be reached" />
        </h2>
        <p class="subtitle text-darkgray 2xl:mt-12">
          <Label label="2017 — 2018" :delay="0.2" />
        </p>
      </div>
      <Section class="flex justify-center">
        <div class="relative w-full md:w-1/2">
          <Media :src="this.getVersioned('placeholders/portrait.jpg')" :format="ImageFormat.PORTRAIT" :duration="2" />
        </div>
      </Section>
      <Section class="flex justify-center">
        <p class="relative description">
          <LineText
            autoplay
            label="My family moved to Italy from Yugoslavia when I was 3. I never had my own impression about Yugoslavia or Serbia, I only knew about them from the stories of my parents and relatives coming to visit. In 2012, when I was 24 I got deeply interested in independent music and started to photograph musical scene in Verona, my hometown in Italy. Then I decided to go to former Yugoslavia and do the same there. This way I wanted to form my own impression of the place. I was tired of relying on my parents memory. I wanted to understand where I’m coming from. After photographing Balkan underground musical scene for a few years I was confused.<br/><br/>I felt both Balkan and Italian, but neither was 100%. I felt that I missed something since the time I left the place where I was born."
          />
        </p>
      </Section>
      <Section>
        <FullWidth class="pr-8 md:pr-32">
          <Media :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
        </FullWidth>
      </Section>
      <Section>
        <FullWidth class="pl-8 md:pl-32">
          <Media :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
        </FullWidth>
      </Section>
      <Section class="flex justify-center">
        <div class="grid md:grid-cols-2 gap-12 md:gap-24">
          <div class="w-full">
            <Media :src="this.getVersioned('placeholders/portrait.jpg')" :format="ImageFormat.PORTRAIT" :duration="2" parallax />
          </div>
          <div class="w-full">
            <Media :src="this.getVersioned('placeholders/portrait.jpg')" :format="ImageFormat.PORTRAIT" :duration="2" parallax />
          </div>
        </div>
      </Section>
      <Section class="flex justify-center">
        <Media :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
      </Section>
      <Section class="flex justify-center">
        <p class="description">
          <LineText
            autoplay
            label="My family moved to Italy from Yugoslavia when I was 3. I never had my own impression about Yugoslavia or Serbia, I only knew about them from the stories of my parents and relatives coming to visit. In 2012, when I was 24 I got deeply interested in independent music and started to photograph musical scene in Verona, my hometown in Italy. Then I decided to go to former Yugoslavia and do the same there. This way I wanted to form my own impression of the place. I was tired of relying on my parents memory. I wanted to understand where I’m coming from. After photographing Balkan underground musical scene for a few years I was confused.<br/><br/>I felt both Balkan and Italian, but neither was 100%. I felt that I missed something since the time I left the place where I was born."
          />
        </p>
      </Section>
      <Section>
        <FullWidth>
          <Media :src="this.getVersioned('placeholders/landscape.jpg')" :format="ImageFormat.LANDSCAPE" :duration="2" parallax />
        </FullWidth>
      </Section>

      <ProjectThumbnail />
    </Container>
  </article>
</template>

<script lang="js" src="./Project.js"></script>
