<template>
  <el-carousel height="31.25rem">
    <el-carousel-item v-for="(item, index) in list" :key="index">
      <img :src="item.img" alt="" class="w-full h-full" @click="onClick(item)" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts" setup>
  import img1 from '~/assets/lunbo-01.png'
  import img2 from '~/assets/lunbo-02.png'
  import img3 from '~/assets/lunbo-03.png'
  import { classesChidren, onKeFuAction } from '~/util'

  // const list = [img1, img2, img3]
  const list = [
    {
      label: '影视后期剪辑+短视频运营',
      img: img1,
    },
    {
      label: '新媒体短视频+直播电商运营',
      img: img2,
    },
    {
      label: 'Python数据分析',
      img: img3,
    },
  ]

  function onClick(it: any) {
    onKeFuAction()
    // const item = classesChidren.find((t) => t.label === it.label)
    // if (!item) return
    // if (item.action === 'onKeFuAction') 
    // if (item.value?.startsWith('http')) {
    //   window.open(item.value, '_blank')
    // }
  }
</script>
<style lang="scss">
  .ep-carousel__item {
    background-color: #99a9bf;
  }
</style>
