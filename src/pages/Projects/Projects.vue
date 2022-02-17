<template>
  <article class="relative w-full h-full">
    <Container>
      <div class="relative w-full">
        <h1 ref="h1" class="overflow-hidden w-full flex justify-center pointer-events-none mb-12">
          <AnimatedLabel ref="title" :label="$global.resources.projects" />
        </h1>
        <transition name="fade">
          <div class="relative w-full" :key="currentFilter">
            <div class="w-full grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12 items-end">
              <template v-for="(item, key) in projects">
                <div
                  :data-ratio="item.cover.ratio"
                  v-if="item.cover && item.cover.image"
                  :key="key"
                  :class="[
                    'relative w-full overflow-hidden',
                    item.spacer ? 'hidden lg:block' : '',
                    item.cover.ratio === ImageFormat.LANDSCAPE ? 'col-span-1 md:col-span-2 h-full' : 'col-span-1 h-full'
                  ]"
                >
                  <div
                    class="relative w-full h-full"
                    @click.native.prevent="
                      (e) => {
                        e.preventDefault()
                        e.stopImmediatePropagation()
                        openProject(key)
                      }
                    "
                  >
                    <div class="relative w-full h-full" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut">
                      <Media v-if="!item.spacer" :src="getAsset(item.cover.image.url)" :format="item.cover.ratio" :delay="$phone ? 0 : key * 0.05" :cover="true" />
                      <div v-if="!$mobile" class="fullsize flex items-end px-4 pt-4 group cursor-pointer">
                        <div class="fullsize top-0 left-0 bg-red transition-transform duration-1000 ease-in-out translate-y-full group-hover:translate-y-0"></div>
                        <p class="relative pb-4 text-white uppercase transition-transform duration-1000 delay-100 ease-in-out translate-y-full group-hover:translate-y-0">
                          {{ item.name }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </transition>
      </div>
    </Container>
  </article>
</template>

<script lang="js" src="./Projects.js"></script>
