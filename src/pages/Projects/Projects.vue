<template>
  <article class="relative w-full h-full">
    <Container>
      <h1 class="overflow-hidden w-full flex justify-center pointer-events-none mb-12">
        <AnimatedLabel ref="title" label="Projects" />
      </h1>
      <div class="w-full grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 items-end">
        <div
          v-for="(item, key) in projects"
          :class="['relative w-full overflow-hidden', item.spacer ? 'hidden lg:block' : '', item.format === ImageFormat.LANDSCAPE ? 'col-span-1 md:col-span-2' : 'col-span-1']"
        >
          <Media v-if="!item.spacer" :src="item.src" :format="item.format" :delay="$phone ? 0 : key * 0.05" />
          <div v-if="!$mobile" class="fullsize flex items-end px-4 pt-4 group cursor-pointer">
            <div class="fullsize top-0 left-0 bg-red transition-transform duration-1000 ease-in-out translate-y-full group-hover:translate-y-0"></div>
            <p class="relative pb-4 text-white uppercase transition-transform duration-1000 delay-100 ease-in-out translate-y-full group-hover:translate-y-0">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </Container>
  </article>
</template>

<script lang="js" src="./Projects.js"></script>
