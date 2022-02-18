<template>
  <header class="fixed top-0 w-full z-50 py-8 px-8 select-none mix-blend-difference">
    <div class="relative w-full flex justify-between">
      <div :class="['relative z-10', canClick ? 'pointer-events-auto' : 'pointer-events-none']">
        <p
          class="relative subtitle regular leading-none flex flex-col overflow-hidden 2xl:h-6 h-4 uppercase text-white whitespace-nowrap cursor-pointer"
          @click.prevent="onMenuClick"
          @mouseenter.native="onLinkOver"
          @mouseleave.native="onLinkOut"
        >
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="menu" />
          </span>
          <span :class="['block default-transition', menuState ? '-translate-y-full' : 'translate-y-0']">
            <Label label="chiudi" />
          </span>
        </p>
      </div>
      <div></div>
      <div class="relative z-10 text-right whitespace-nowrap">
        <p ref="copyright" :class="['absolute transition-all duration-1000 ease-in-out right-0 regular subtitle uppercase  text-white leading-none z-50', isProjects ? '-translate-y-full opacity-0' : '']">
          <Label label="© 2022" :delay="0.1" />
        </p>

        <div ref="filterGroup" class="relative ">
          <p ref="filter" :class="['absolute transition-all duration-1000 ease-in-out right-0 subtitle uppercase  text-white leading-none z-50 flex', isProjects ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0']">
            <Label label="Filter" :delay="0.1" @click.prevent="isFilter = !isFilter" class="cursor-pointer hidden md:block"  @mouseenter.native="onLinkOver"
            @mouseleave.native="onLinkOut" />

            <Label label="Filter" :delay="0.1"  class="cursor-pointer md:hidden">
              <select v-model="selectModel" class="absolute w-full h-full top-0 left-0 opacity-0">
                <option :value="FilterType.ALL">All</option>
                <option :value="FilterType.PERSONAL">Personal</option>
                <option :value="FilterType.ASSIGNMENTS">Assignments</option>
              </select>
            </Label>

            <div ref="filterArea" :class="['absolute hidden md:flex transition-all duration-500 ease-out right-0  justify-start items-center translate-x-full', isFilter ? 'opacity-100' : 'opacity-0']">
              <Label class="ml-6 xl:ml-8 cursor-pointer filter-item" :data-active="selectedFilter === FilterType.ALL" label="All" :delay="0.1" @click.prevent="selectedFilter = FilterType.ALL"  @mouseenter.native="onLinkOver"
              @mouseleave.native="onLinkOut" />
              <Label class="ml-6 xl:ml-8 cursor-pointer filter-item" :data-active="selectedFilter === FilterType.PERSONAL" label="Personal" :delay="0.1" @click.prevent="selectedFilter = FilterType.PERSONAL"  @mouseenter.native="onLinkOver"
              @mouseleave.native="onLinkOut" />
              <Label class="ml-6 xl:ml-8 cursor-pointer filter-item" :data-active="selectedFilter === FilterType.ASSIGNMENTS" label="Assignments" :delay="0.1" @click.prevent="selectedFilter = FilterType.ASSIGNMENTS"  @mouseenter.native="onLinkOver"
              @mouseleave.native="onLinkOut" />
            </div>
          </p>
        </div>
      </div>
    </div>
  </header>

  <div
    :class="[
      'fixed top-0 py-7 w-0 md:w-0 left-1/2 md:-translate-x-1/2 text-center flex-grow text-white transition-all duration-1000 ease-in-out z-40 md:z-50 mix-blend-difference',
      toggle ? 'translate-y-0' : '-translate-y-full opacity-0'
    ]"
  >
    <router-link class="absolute -translate-x-1/2" :to="{ name: RouteNames.HOMEPAGE, params: { lang: 'en' } }">
      <p class="relative  subtitle regular uppercase text-white leading-none px-2 md:px-4 md:text-base">
        <Label label="Ana<br/>Blagojevic" class="font-medium md:hidden text-5xl" />
        <Label label="Ana Blagojevic" class="hidden md:block whitespace-nowrap" />
      </p>
    </router-link>
  </div>
</template>

<script lang="js" src="./Header.js"></script>
<style lang="scss" scoped>

.filter-item {
&::after {
    content: '';
    @apply absolute w-1 h-1 bg-white rounded-full left-1/2 -bottom-2 opacity-0 transition-opacity duration-500;
  }
}

.filter-item[data-active="true"] {
  overflow: inherit;
  &::after {
    opacity: 1 !important;
  }
}

</style>
