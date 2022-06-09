<script setup lang="ts">
// @todo update DOM html tag lang attribute on locale change
const flagImageUrls = {
  fr: "./images/flags/fr.svg",
  en: "./images/flags/gb.svg",
};
</script>

<template>
  <div class="flex flex-wrap gap-1 lg:gap-2">
    <span
      v-for="locale in $i18n.availableLocales.reverse()"
      :key="`locale-${locale}`"
      @click="$i18n.locale = locale"
      class="transition-all text-xs hover:opacity-100 bg-gray-400 text-white inline-flex items-center space-x-2 rounded py-2 px-3 h-9 cursor-pointer"
      :class="{
        'opacity-100': $i18n.locale == locale,
        'opacity-60': $i18n.locale !== locale,
      }"
    >
      <img :src="flagImageUrls[locale]" class="h-4 mr-2" />
      {{ $t("locale_version." + locale) }}
    </span>
  </div>
</template>
