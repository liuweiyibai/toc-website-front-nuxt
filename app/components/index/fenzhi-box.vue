<template>
  <div class="show-it w-full mt-20px mb-20px h-70px flex items-center pl-24px">
    <div class="text-24px text-white lh-24px">{{ item.title }}</div>
    <div class="line mx-35px"></div>
    <div class="lh-22px text-#fff text-14px">
      <div>电话：{{ item?.phone }}</div>
      <div>地址：{{ item?.addr }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  defineProps(['item'])
</script>

<style lang="scss" scoped>
  .show-it {
    @apply rounded-3px;
    background: linear-gradient(90deg, #3f6cf6, #ec6d8c);
    .line {
      width: 2px;
      height: 44px;
      background: linear-gradient(0deg, #bdccfc, #ec6d8c);
    }
  }
</style>
