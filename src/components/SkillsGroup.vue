<script setup lang="ts">
defineProps({
  title: String,
  // @todo TypeScript object typing
  /*eslint @typescript-eslint/no-explicit-any: ["off"]*/
  skills: Array<any>,
})
</script>

<template>
  <strong
    class="text-xl pb-1 border-b font-semibold lg:pb-0 lg:border-0 lg:text-xl lg:font-medium"
  >
    {{ title }}
  </strong>
  <div class="mb-8 mt-4 lg:mt-2">
    <template v-for="(skill, skillIndex) in skills" :key="skillIndex">
      <a
        v-if="skill.href !== '#'"
        class="transition-all text-white px-2 py-1 mb-1 mr-1 text-sm rounded bg-gray-500 inline-block hover:bg-gray-600"
        target="_blank"
        :href="skill.href"
        v-html="skill.title"
      ></a>
      <span
        v-else
        class="transition-all text-white px-2 py-1 mb-1 mr-1 text-sm rounded bg-gray-500 inline-block"
        v-html="skill.title"
      ></span>
    </template>
  </div>
</template>
