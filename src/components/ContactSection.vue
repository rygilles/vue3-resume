<template>
  <!-- contact details -->
  <strong
    class="text-xl pb-1 border-b font-semibold lg:pb-0 lg:border-0 lg:font-medium"
    >Contact</strong
  >
  <ul class="mb-10 mt-4 lg:mt-2">
    <li class="px-2 mt-1">
      <strong class="mr-1">{{ $t('contact.phone.label') }}</strong>
      <a href="#" class="block" v-html="$t('contact.phone.value')"></a>
    </li>
    <li class="px-2 mt-1">
      <strong class="mr-1">{{ $t('contact.email.label') }}</strong>
      <a href="mailto:" class="block">
        &#103;&#105;&#108;&#108;&#101;&#115;&#046;&#114;&#121;&#097;&#110;&#046;&#100;&#101;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
      </a>
    </li>
    <li class="px-2 mt-1">
      <strong class="mr-1">{{ $t('contact.contract_type.label') }}</strong>
      <span class="block" v-html="$t('contact.contract_type.value')"></span>
    </li>
    <li class="px-2 mt-1">
      <strong class="mr-1">{{ $t('contact.search_area.label') }}</strong>
      <span class="block" v-html="$t('contact.search_area.value')"></span>
    </li>
  </ul>
</template>
