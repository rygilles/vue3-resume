<script setup lang="ts">
import LocaleChanger from './LocaleChanger.vue'

defineProps({
  name: String,
  jobTitle: String,
  catchPhrase: String,
  imageUrl: String,
  openToWork: Boolean,
  // @todo TypeScript object typing
  /*eslint @typescript-eslint/no-explicit-any: ["off"]*/
  socialLinks: Array<any>,
})
</script>

<template>
  <!-- header -->
  <header>
    <div
      class="flex justify-between items-center gap-0 lg:gap-x-10 mb-14 lg:mb-10"
    >
      <LocaleChanger />
      <!-- social icons-->
      <ul id="social-links" class="flex flex-wrap gap-1 lg:gap-2">
        <li
          v-for="(socialLink, socialLinkIndex) in socialLinks"
          :key="socialLinkIndex"
          :class="'extraClasses' in socialLink ? socialLink.extraClasses : null"
        >
          <a
            :href="socialLink.href"
            :class="
              'hover:opacity-80 p-2 inline-flex rounded ' +
              ('linkExtraClasses' in socialLink
                ? socialLink.linkExtraClasses
                : '')
            "
            :onclick="'onClick' in socialLink ? socialLink.onClick : null"
            :target="'target' in socialLink ? socialLink.target : '_blank'"
            v-html="socialLink.svg"
          ></a>
        </li>
      </ul>
    </div>
    <div class="flex justify-between items-center gap-0 lg:gap-x-10 mb-2">
      <div id="photo-wrapper" class="relative w-40 lg:w-60 object-contain">
        <img class="w-full object-contain rounded-lg" :src="imageUrl" />
        <div id="open-to-work"
             class="absolute bottom-3 left-3 bg-green-600 text-white text-xs lg:text-sm font-bold px-3 py-1.5 rounded-md shadow-lg border border-green-500 uppercase tracking-wider whitespace-nowrap animate-pulse"
             v-if="openToWork"
        >
          Open To Work
        </div>
      </div>
      <div id="main-title" class="grid justify-items-end">
        <h1 class="text-5xl lg:text-7xl font-extrabold">{{ name }}</h1>
        <h2 class="text-base lg:text-xl mt-5">{{ jobTitle }}</h2>
        <p class="text-l max-w-3xl lg:max-w-4xl mt-5 ml-10 font-serif leading-[1.3] tracking-[-0.01em] italic" v-html="catchPhrase"></p>
      </div>
    </div>
  </header>
</template>
