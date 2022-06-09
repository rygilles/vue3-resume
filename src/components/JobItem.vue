<script setup lang="ts">
defineProps({
  company: String,
  jobTitle: String,
  imageUrl: String,
  when: String,
  description: String,
  // @todo TypeScript object typing
  /*eslint @typescript-eslint/no-explicit-any: ["off"]*/
  tags: Array<any>,
})
</script>

<template>
  <li class="pt-6 flex">
    <img class="block w-14 h-14 rounded-md shadow-lg" :src="imageUrl" />
    <div class="w-full ml-2">
      <div class="flex justify-between mt-1">
        <strong class="text-base whitespace-nowrap" v-html="company"></strong>
        <p>
          <span
            v-for="(tag, tagIndex) in tags"
            :key="tagIndex"
            :class="
              'bg-gray-600 text-white px-2 py-1 mb-1 mr-1 text-xs rounded ' +
              tag.extraClasses
            "
            v-html="tag.title"
          ></span>
          <span
            class="bg-gray-300 text-black px-2 py-1 text-xs rounded font-bold whitespace-nowrap"
            v-html="when"
          ></span>
        </p>
      </div>
      <p class="flex justify-between text-base" v-html="jobTitle"></p>
      <p class="text-xs pt-1 pl-2" v-html="description"></p>
    </div>
  </li>
</template>
