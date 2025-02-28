<template>
  <div class="mt-85px">
    <div class="w-1200px mx-auto text-center">
      <h3 class="lh-36px text-36px font-700 text-#333 m-0" id="shizhanke">前沿精品就业实战课</h3>
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px"
        >创联教育-只出适应时代需要的精品好课</p
      >
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px"
        >严格按照企业用人需求设置课程，精选、严选当下行业急需技术，每年投入大量成本用于课研提升</p
      >
    </div>
    <div class="w-full h-700px bg mt-20px">
      <div class="w-1200px mx-auto pt-47px">
        <div class="flex items-center">
          <div
            class="my-btn"
            :class="{ active: activeName === index }"
            v-for="(item, index) in cardList"
            :key="index"
            @mouseenter="activeName = index"
          >
            <span class="z-1 relative">{{ item.label }}</span>
          </div>
        </div>

        <div class="mt-32px flex h-520px">
          <div class="left-box" :style="{ backgroundImage: `url(${currentItem.img})` }">
            <div class="w-154px mt-30px ml-30px lh-36px text-white font-700 text-20px">{{
              currentItem.title
            }}</div>
            <div class="mt-22px ml-30px w-172px text-#ffffff80 lh-18px text-12px family">{{
              currentItem.enTitle
            }}</div>

            <div
              class="cursor-pointer flex items-center pl-30px mt-25px text-#F5C60F lh-16px text-16px"
              @click="onClick(currentItem)"
            >
              <span>查看课程详情</span>
              <img src="../../assets/arrow-right@2x.png" alt="" class="w-12px h-14px ml-6px" />
            </div>
          </div>
          <div class="right-box">
            <IndexShizhankeRight :index="activeName" @trigger="onClick(currentItem)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ref, watch } from 'vue'
  import duanshipinyunying from '~/assets/duanshipinyunying@2x.png'
  import pythonshujufenxi from '~/assets/pythonshujufenxi@2x.png'
  import douyinbendishenghuo from '~/assets/douyinbendishenghuo@2x.png'
  import yingshihouqi from '~/assets/yingshihouqi@2x.png'
  import dianshangshizhan from '~/assets/dianshangshizhan@2x.png'
  import content1 from '~/assets/xinmeiti-content@2x.png'
  import { classesChidren, onKeFuAction } from '~/util'

  const currentItem = computed(() => cardList[activeName.value])
  const cardList = [
    {
      label: '新媒体短视频+直播电商运营',
      value: 'xinmeiti',
      img: duanshipinyunying,
      title: '新媒体短视频+直播电商运营',
      enTitle: 'New media short videos+Live streaming e-commerce operation',
      content: content1,
    },
    {
      label: 'Python数据分析',
      value: 'shujufenxi',
      img: pythonshujufenxi,
      title: 'Python数据分析',
      enTitle: 'Python Data Analysis',
      content: content1,
    },
    {
      label: '抖音本地生活',
      value: 'douyinbendi',
      img: douyinbendishenghuo,
      title: '抖音本地生活',
      enTitle: 'Tiktok local life',
      content: content1,
    },
    {
      label: '影视后期剪辑+短视频运营',
      value: 'yingshihouqi',
      img: yingshihouqi,
      title: '影视后期剪辑+短视频运营',
      enTitle: 'Film and television post production editing+Short video operation',
      content: content1,
    },
    {
      label: '电商主播实战特训营',
      value: 'dianshangzhubo',
      img: dianshangshizhan,
      title: '电商主播实战特训营',
      enTitle: 'Practical experience of e-commerce anchorsSpecial Training Camp',
      content: content1,
    },
  ]

  const activeName = ref(0)

  function onClick(item: any) {
    const __item = classesChidren.find((t) => t.label === item.label)
    if (__item?.action) {
      return onKeFuAction()
    }
    if (__item?.value?.startsWith('https://')) {
      window.open(__item.value, '_blank')
    }
  }
</script>

<style lang="scss" scoped>
  .bg {
    background: url(../../assets/shizhanke-bg@2x.png) no-repeat;
  }

  .my-btn {
    @apply w-224px mr-20px h-50px lh-50px rounded-8px cursor-pointer  text-center text-#333 text-16px relative last:mr-0;
    border: 1px solid #a0a0a0;
    &:hover,
    &.active {
      border-color: transparent;
      span {
        @apply text-white;
      }
      &::after {
        content: '';
        @apply absolute top-0 left-0 w-full h-60px;
        background: url(../../assets/shizhanke-tab@2x.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }

  .left-box {
    @apply w-250px h-full rounded-8px overflow-hidden;
    background-size: 100% 100%;
  }
  .family {
    font-family: Arial;
  }

  .right-box {
    width: 930px;
    height: 520px;
    border-radius: 8px 8px 8px 8px;
    background: #ffffff;
    box-shadow: 0 4px 28px 0 #00000014;
    margin-left: 20px;
    display: flex;
    padding: 20px 32px 28px;
  }
</style>
