<template>
  <div class="w-full">
    <div class="h-534px w-full">
      <img :src="img" alt="" class="w-full h-full" />
    </div>
    <div class="w-full bg-#000 h-60px">
      <div class="w-1200px mx-auto flex h-60px items-center">
        <nuxt-link
          v-for="item in menus"
          :key="item.router"
          :to="item.router"
          class="mr-47px last:mr-0 no-underline text-white transition-all hover:text-#3F6CF6"
          :class="{ '!text-#3F6CF6': route.path === item.router }"
          >{{ item.title }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import img from '~/assets/about-header@2x.png'

  const route = useRoute()
  console.log(route.path)
  const menus = [
    {
      title: '首页',
      router: '/',
    },
    {
      title: '集团简介',
      router: '/about/info',
    },
    {
      title: '15年历程',
      router: '/about/history',
    },
    {
      title: '联系我们',
      router: '/about/concat',
    },
  ]
</script>
