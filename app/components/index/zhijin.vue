<template>
  <div class="mt-80px">
    <div class="w-1200px mx-auto text-center">
      <h3 class="lh-36px text-36px font-700 text-#333 m-0">创联荣誉—2011至今</h3>
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px"
        >15年教育品牌沉淀，所有的荣誉货真价实</p
      >
    </div>

    <div class="w-1200px mx-auto swiper-wrapper mt-37px" ref="divWrapper">
      <ul>
        <li v-for="(item, index) in list" :key="index" class="shadow">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
    <div class="w-1200px mx-auto">
      <img src="../../assets/rongyu-bg@2x.png" alt="" class="w-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import rongyu1 from '~/assets/zz01.jpg'
  import rongyu2 from '~/assets/zz02.jpg'
  import rongyu3 from '~/assets/zz03.jpg'
  import rongyu4 from '~/assets/zz04.jpg'
  import rongyu5 from '~/assets/zz05.jpg'
  import rongyu6 from '~/assets/zz06.jpg'
  import rongyu7 from '~/assets/zz07.jpg'
  import rongyu8 from '~/assets/zz08.jpg'
  import pSeamlessScroll from 'p-seamless-scroll'
  const list = [rongyu1, rongyu2, rongyu3, rongyu4, rongyu5, rongyu6, rongyu7, rongyu8]
  const divWrapper = ref<HTMLDivElement>()
  let pss: any

  onMounted(() => {
    pss = new pSeamlessScroll({
      el: divWrapper.value!,
      direction: 'left',
      speed: 300,
      hoverStop: true,
    })
  })

  onBeforeUnmount(() => {
    pss?.destroy()
  })
</script>

<style lang="scss" scoped>
  .swiper-wrapper {
    position: relative;
    width: 1200px;
    height: 190px;
    overflow-x: hidden;
    ul,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul {
      display: flex;
      flex-wrap: nowrap;
      transition: transform 0.1s linear;
      li {
        padding: 10px;
        list-style: none;
        width: 300px;
        height: 190px;
        flex-shrink: 0;
        // box-shadow: 0 4px 7px 1px rgba(57, 57, 59, 0.27);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
