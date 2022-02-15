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
                  <AnimatedLabel rollover label="Contacts" class="relative" @click.prevent="isContacts = true" />
                </div>
              </template>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute bottom-0 w-full px-8 pb-8">
        <div class="grid text-center md:grid-cols-3 uppercase text-2xl md:text-base">
          <div class="md:text-left">
            <p class="relative subtitle">
              <span>Codice Fiscale</span>
            </p>
          </div>
          <div class="md:text-center hidden md:block">
            <p class="relative subtitle">
              <span>Italiano / English</span>
            </p>
          </div>
          <div class="md:text-right">
            <p class="relative subtitle">
              <span>Credits</span>
            </p>
          </div>
          <div class="md:text-center pt-8 md:hidden">
            <p class="relative subtitle">
              <span>Italiano / English</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div ref="contacts" class="absolute w-full h-full inset-0 translate-y-full">
      <div class="top-0 left-0 absolute w-full h-full grid md:grid-cols-2">
        <div></div>
        <div class="flex justify-center md:justify-start items-center">
          <ul ref="ul" class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <li class="relative font-medium select-none overflow-hidden pointer-events-none" @mouseenter.native="onLinkOver" @mouseleave.native="onLinkOut">
              <AnimatedLabel rollover label="Contacts" class="relative" />
            </li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
            <li><AnimatedLabel rollover label="&nbsp;" class="relative" /></li>
          </ul>
        </div>
      </div>
      <div class="absolute bottom-0 w-full h-full grid md:grid-cols-2 2xl:p-16">
        <div class="flex justify-center md:justify-start items-end">
          <div class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <div class="2xl:mb-12">
              <span class="subtitle">Where</span>
            </div>
            <div>
              <h3 class="font-medium normal-case">Visual Artist & Photographer <br />Doc Creativity Soc Coop <br />Via Pirandello 31/B <br />37138 . Verona . Italy</h3>
            </div>
            <div class="2xl:mb-12 2xl:mt-32">
              <span class="subtitle">Phone</span>
            </div>
            <div>
              <h3 class="font-medium normal-case">+39 333 123 1234</h3>
            </div>
          </div>
        </div>
        <div class="flex justify-center md:justify-start items-end">
          <ol class="leading-none text-darkgray uppercase flex flex-col items-center md:items-start">
            <li class="2xl:mb-12">
              <span class="subtitle">Social</span>
            </li>
            <li>
              <h3 class="font-medium normal-case">Instagram</h3>
            </li>
            <li>
              <h3 class="font-medium normal-case">Linkedin</h3>
            </li>
            <li>
              <h3 class="font-medium normal-case">Vimeo</h3>
            </li>
            <li>
              <h3 class="font-medium normal-case">Facebook</h3>
            </li>
            <li class="2xl:mb-12 2xl:mt-32">
              <span class="subtitle">Mail</span>
            </li>
            <li>
              <h3 class="font-medium normal-case">info@anablagojevic.com</h3>
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
