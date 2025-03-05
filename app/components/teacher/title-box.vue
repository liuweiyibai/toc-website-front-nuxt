<template>
  <div class="w-full text-center mt-80px">
    <div class="text-#333333 text-36px lh-36px font-700">
      {{ title }}
    </div>
    <div class="flex flex-col text-center lh-24px text-#999999 text-14px mt-[10px]">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineProps(['title'])
</script>
