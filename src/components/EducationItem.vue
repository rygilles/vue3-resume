<script setup lang="ts">
defineProps({
  title: String,
  where: String,
  when: String,
  description: String,
});
</script>

<template>
  <li class="pt-6">
    <p class="flex justify-between text-sm">
      <strong class="text-base" v-html="where"></strong>
      <span
        class="bg-gray-300 text-black px-2 py-1 text-xs rounded font-bold whitespace-nowrap"
        v-html="when"
      ></span>
    </p>
    <p class="flex justify-between text-base" v-html="title"></p>
    <p class="flex justify-between text-sm pt-1 pl-2" v-html="description"></p>
  </li>
</template>
