<template>
  <nuxt-link :to="to" class="no-underline w-[calc(50%-20px)] h-80px block float-left m-10px">
    <div class="flex w-full">
      <div class="w-140px h-80px flex-shrink-0">
        <img :src="item?.imageUrl" alt="" class="w-full h-full rounded-3px" />
      </div>
      <div class="ml-12px flex flex-col justify-between">
        <span class="text-#333333 text-14px lh-18px">{{ item?.title }}</span>
        <span class="text-#999999 text-12px lh-12px">{{ item?.publishTime }}</span>
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps(['item'])

  const to = computed(() => {
    return `/news/${props.item?.categoryId}/${props.item.id}`
  })
</script>
