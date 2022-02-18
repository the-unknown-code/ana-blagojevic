<template>
  <div class="fixed top-0 left-0 w-full h-full bg-lightgray -translate-y-full overflow-hidden">
    <nav ref="nav" class="fixed top-0 left-0 w-full h-full" @mousemove="onMouseMove">
      <!-- Component template: Navigation -->
      <div class="fullsize grid md:grid-cols-2">
        <div v-if="!$phone" class="flex justify-center">
          <div
            v-if="!$mobile"
            ref="thumb"
            id="thumb-holder"
            :class="['relative -translate-x-20 duration-1000 ease-in-out transition-opacity will-change-auto', hover ? 'opacity-100' : 'opacity-0']"
          >
            <div id="thumb-item" class="h-auto -translate-y-1/2 overflow-hidden pointer-events-none">
              <div ref="image" class="relative w-full h-auto">
                <transition name="thumb">
                  <img :key="selected" :src="nav[selected].image" class="relative w-full scale-125" />
                </transition>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center md:justify-start items-center">
          <ul ref="ul" class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <li
              class="relative font-medium select-none overflow-hidden"
              v-for="(item, key) in nav"
              :key="key"
              @mouseenter.native="onLinkOver"
              @mouseleave.native="onLinkOut"
              @mouseover.prevent="
                () => {
                  hover = true
                  selected = key
                }
              "
              @mouseout.prevent="hover = false"
            >
              <template v-if="item.route">
                <router-link @click.native="onRouteClick" class="relative block li" :to="{ name: item.route, params: { lang: 'en' } }" :title="item.label">
                  <AnimatedLabel rollover :label="item.label" class="relative" />
                </router-link>
              </template>
              <template v-else>
                <div class="relative block li">
                  <AnimatedLabel rollover :label="$global.resources.contact" class="relative" @click.prevent="isContacts = true" />
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute bottom-0 w-full px-8 pb-8">
        <div class="grid text-center text-darkgray md:grid-cols-3 uppercase text-2xl md:text-base">
          <div class="md:text-left">
            <p class="relative subtitle regular">
              <span>{{ $global.resources.vat }}</span>
            </p>
          </div>
          <div class="md:text-center hidden md:block">
            <p class="relative subtitle regular">
              <span>ITALIANO</span>
            </p>
          </div>
          <div class="md:text-right">
            <p class="relative subtitle regular">
              <a href="https://e-t.studio" target="_blank" name="ET Studio">{{ $global.resources.credits }}</a>
            </p>
          </div>
          <div class="md:text-center pt-8 md:hidden">
            <p class="relative subtitle regular">
              <span>ITALIANO</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div ref="contacts" class="absolute w-full h-full inset-0 translate-y-full">
      <div class="top-0 left-0 absolute w-full h-full grid md:grid-cols-2">
        <div class="hidden md:block"></div>
        <div class="flex justify-center md:justify-start md:items-center pt-48 md:pt-0">
          <ul ref="ul" class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <li class="relative font-medium select-none overflow-hidden pointer-events-none" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut">
              <AnimatedLabel rollover :label="$global.resources.contact" class="relative" />
            </li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
          </ul>
        </div>
      </div>

      <div class="absolute md:hidden bottom-0 w-full h-full p-12">
        <div class="flex justify-center items-end w-full h-full">
          <p class="flex flex-col justify-center items-center text-darkgray font-medium">
            <span class="subtitle uppercase mb-2">{{ $global.resources.where }}</span>
            <h3 class="font-medium normal-case mb-4" v-html="$global.resources.address"></h3>
            <span class="subtitle uppercase mt-4">{{ $global.resources.social }}</span>
            <span class="flex flex-col justify-center items-center my-4">
              <h3 class="capitalize">
                <a :href="$global.resources.instagramLink" target="_blank">
                  {{ $global.resources.instagram }}
                </a>
              </h3>
              <h3 class="capitalize">
                <a :href="$global.resources.linkedinLink" target="_blank">
                  {{ $global.resources.linkedin }}
                </a>
              </h3>
              <h3 class="capitalize">
                <a :href="$global.resources.vimeoLink" target="_blank">
                  {{ $global.resources.vimeo }}
                </a>
              </h3>
            </span>
            <span class="subtitle uppercase my-4">{{ $global.resources.phone }}</span>

            <h3 class="font-medium normal-case">
              <a :href="`tel:${$global.resources.phoneNumber}`">{{ $global.resources.phoneNumber }}</a>
            </h3>

            <span class="subtitle uppercase my-4">{{ $global.resources.mail }}</span>
            <h3 class="font-medium normal-case">
              <a :href="`mailto:${$global.resources.mailAddress}`">{{ $global.resources.mailAddress }}</a>
            </h3>
          </p>
        </div>
      </div>

      <div class="absolute hidden md:grid bottom-0 w-full h-full  md:grid-cols-2 2xl:p-16 md:p-12">
        <div class="flex justify-center md:justify-start items-end">
          <div class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <div class="2xl:mb-12 mb-8 font-medium">
              <span class="subtitle">{{ $global.resources.where }}</span>
            </div>
            <div>
              <h3 class="font-medium normal-case" v-html="$global.resources.address"></h3>
            </div>
            <div class="2xl:mb-12 2xl:mt-32 mb-8 mt-16">
              <span class="subtitle">{{ $global.resources.phone }}</span>
            </div>
            <div>
              <h3 class="font-medium normal-case">{{ $global.resources.phoneNumber }}</h3>
            </div>
          </div>
        </div>
        <div class="flex justify-center md:justify-start items-end">
          <ol class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <li class="2xl:mb-12 mb-8">
              <span class="subtitle">{{ $global.resources.social }}</span>
            </li>
            <li>
              <h3 class="font-medium capitalize">
                <a :href="$global.resources.instagramLink" target="_blank">
                  {{ $global.resources.instagram }}
                </a>
              </h3>
            </li>
            <li>
              <h3 class="font-medium capitalize">
                <a :href="$global.resources.linkedinLink" target="_blank">
                  {{ $global.resources.linkedin }}
                </a>
              </h3>
            </li>
            <li>
              <h3 class="font-medium capitalize">
                <a :href="$global.resources.vimeoLink" target="_blank">
                  {{ $global.resources.vimeo }}
                </a>
              </h3>
            </li>
            <!--
            <li>
              <h3 class="font-medium normal-case">#Facebook</h3>
            </li>

            -->
            <li class="2xl:mb-12 2xl:mt-32 mb-8 mt-16">
              <span class="subtitle">{{ $global.resources.mail }}</span>
            </li>
            <li>
              <h3 class="font-medium normal-case">
                <a :href="`mailto:${$global.resources.mailAddress}`">{{ $global.resources.mailAddress }}</a>
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./Navigation.js"></script>
<style lang="scss" scoped>
ul {
  font-size: 12vw;

  @media screen and (min-width: 768px) {
    font-size: 8.5vw;
    transform: translateX(-5vw);
  }

  @media screen and (min-width: 1920px) {
    font-size: 11.5rem;
    transform: translateX(-5vw);
  }
}

ol {
  @media screen and (min-width: 768px) {
    transform: translateX(-5vw);
  }

  @media screen and (min-width: 1920px) {
    transform: translateX(-5vw);
  }
}

#thumb-item {
  width: 16vw;
}
</style>
