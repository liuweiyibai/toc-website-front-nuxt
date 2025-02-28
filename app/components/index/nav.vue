<template>
  <div class="w-full">
    <div class="mx-auto w-1200px pt-22px flex items-end">
      <div class="w-137px h-38px mr-163px">
        <img :src="logo" class="w-full h-full" alt="" />
      </div>
      <div
        class="h-40px rounded-10px bg-#F7F7F7 pl-15px pr-17px text-#E6002D text-18px font-700 flex items-center cursor-pointer"
        @click="visibleValue = true"
      >
        <img :src="address" class="w-18px h-24px" alt="" />
        <span class="ml-8px">{{ userStore?.city }}校区</span>
      </div>

      <div class="float-right ml-auto">
        <img :src="slogan" class="h-20px" alt="" />
      </div>
    </div>

    <div class="mt-36px w-1200px mx-auto flex">
      <div class="w-250px h-50px rounded-t-8px bg relative">
        <div class="mt-19px ml-22px text-18px text-white font-700 lh-18px">热门课程</div>
        <div
          @mouseleave="onMouseLeave"
          class="h-580px absolute top-50px left-0 w-full bg-white rounded-b-8px box-absolute z-1"
        >
          <div class="w-full flex flex-col items-center">
            <div
              v-for="(item, index) in classes"
              :key="index"
              class="w-230px lh-40px h-40px rounded-5px text-14px text-#333 font-700 mt-7px class-item"
              :class="{ active: activeItem?.label === item.label }"
              @mouseenter="activeItem = item"
              @click="onTiaoZhuan(item)"
              >{{ item.label }}</div
            >
            <div
              class="absolute left-250px w-360px h-450px rounded-r-10px bg-white shadow pt-20px flex flex-col items-center"
              v-show="activeItem"
              @click="onTiaoZhuan(activeItem)"
            >
              <div class="w-320px h-140px">
                <img :src="activeItem?.img" alt="" class="w-full" />
              </div>
              <div class="mt-20px w-320px h-115px card pt-12px px-25px">
                <div class="flex items-center text-#3F6CF6 text-14px lh-14px font-700 mb-12px">
                  <img src="../../assets/hexin@2x.png" alt="" class="w-22px h-20px mr-6px" />
                  <span>{{ activeItem?.title1 }}</span>
                </div>
                <div class="flex flex-wrap justify-between m--3px">
                  <div
                    v-for="(it, iti) in activeItem?.title1Text"
                    :key="iti"
                    class="w-130px h-25px rounded-full bg-white my-3px text-14px lh-25px text-#666666 text-center"
                  >
                    <span>{{ it }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-20px w-320px h-115px card pt-12px px-25px">
                <div class="flex items-center text-#3F6CF6 text-14px lh-14px font-700 mb-12px">
                  <img src="../../assets/qiyerezhao@2x.png" alt="" class="w-22px h-20px mr-6px" />
                  <span>{{ activeItem?.title2 }}</span>
                </div>
                <div class="flex flex-wrap justify-between m--3px">
                  <div
                    v-for="(it, iti) in activeItem?.title2Text"
                    :key="iti"
                    class="min-w-130px h-25px rounded-full bg-white my-3px text-14px lh-25px text-#666666 text-center"
                  >
                    <span>{{ it }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img :src="absoluteImg" alt="" class="absolute bottom-0 w-full" />
        </div>
      </div>
      <div class="flex flex-1 ml-56px h-50px items-center">
        <div v-for="item in menus" class="flex-1 h-50px transition-all lh-50px">
          <template v-if="item.value">
            <a
              v-if="item.value.startsWith('https://')"
              :href="item.value"
              target="_blank"
              class="no-underline text-#666666 text-16px hover:text-#3F6CF6 outline-none"
              >{{ item.label }}</a
            >
            <nuxt-link
              :to="item.value"
              v-else
              class="no-underline text-#666666 text-16px hover:text-#3F6CF6 outline-none"
              >{{ item.label }}</nuxt-link
            >
          </template>

          <el-popover
            v-if="item?.children?.length"
            placement="bottom-start"
            :width="710"
            trigger="hover"
            class="h-full"
            :offset="22"
          >
            <template #reference>
              <a
                class="no-underline text-#666666 text-16px hover:text-#3F6CF6 outline-none lh-50px"
                >{{ item.label }}</a
              >
            </template>

            <div class="flex w-full py-15px flex flex-wrap gap-28px">
              <div
                class="w-280px h-40px flex items-center bg-#F6F6F6 rounded-4px pl-20px cursor-pointer classes-nav group"
                v-for="s in item.children"
                @click="onClick(s)"
              >
                <img
                  :src="s.img"
                  alt=""
                  :style="{ width: `${s.width}px`, height: `${s.height}px` }"
                  class="block group-hover:hidden"
                />
                <img
                  :src="s.imga"
                  alt=""
                  :style="{ width: `${s.width}px`, height: `${s.height}px` }"
                  class="hidden group-hover:block"
                />
                <span class="text-#333 text-16px font-700 ml-12px">{{ s.label }}</span>
              </div>
            </div>
          </el-popover>

          <a
            @click="onAction(item.action)"
            v-if="item.action"
            class="no-underline text-#666666 text-16px hover:text-#3F6CF6 outline-none"
            >{{ item.label }}</a
          >
        </div>
      </div>
    </div>
    <gdialog v-model="visibleValue" />
  </div>
</template>
<script lang="ts" setup>
  import logo from '~/assets/logo@2x.png'
  import address from '~/assets/address@2x.png'
  import slogan from '~/assets/slogan@2x.png'
  import absoluteImg from '~/assets/bg-nav-1-absolute@2x.png'
  import { ref } from 'vue'
  import i1 from '~/assets/xinmeiti-01@2x.png'
  import i2 from '~/assets/class-2@2x.png'
  import i3 from '~/assets/class-3@2x.png'
  import i4 from '~/assets/class-4@2x.png'
  import i5 from '~/assets/class-5@2x.png'
  import { classesChidren, menus, onAction, onKeFuAction, onScrollToJingPinKe } from '~/util'

  const activeItem = ref()
  const visibleValue = ref(false)
  const { onClick } = onScrollToJingPinKe()
  const classes = [
    {
      label: '新媒体短视频+直播电商运营',
      value: 'http://med.cledu.cn',
      img: i1,
      title1: '核心技术',
      title1Text: ['制怍短视频爆款', '直播项目实战', '直播电商大运营', '本地生活实战'],
      title2: '企业热招',
      title2Text: ['短视频运营', '直播电商运营', '电商主播', '本地生活运营'],
    },
    {
      label: 'Python数据分析',
      value: 'http://dat.cledu.cn',
      img: i2,
      title1: '核心技术',
      title1Text: ['数据分析商业思维', '掌握Python', '大数据与数据仓库', '统计学+数据挖掘'],
      title2: '企业热招',
      title2Text: ['数据分析师', '商业智能分析师', '数据工程师', '数据可视化专家'],
    },
    {
      label: '抖音本地生活',
      value: '',
      img: i3,
      title1: '核心技术',
      title1Text: ['抖音多账号运营', '同城短视频流量', '同城类目直播实战', '本地生活运营'],
      title2: '企业热招',
      title2Text: ['本地生活运营', '商家直播带货运营', '带货主播', '本地商家短视频运营'],
    },
    {
      label: '影视后期剪辑+短视频运营',
      value: '',
      img: i4,
      title1: '核心技术',
      title1Text: ['影视后期剪辑', 'pr+剪映掌握', '短视频剪辑', '短视频爆款思维'],
      title2: '企业热招',
      title2Text: ['企业视频剪辑', '短视频运营', '新媒体运营', '运营主管'],
    },
    {
      label: '电商主播实战特训营',
      value: '',
      img: i5,
      title1: '核心技术',
      title1Text: [
        '多赛道主播真实实战',
        '直播团队协同分工',
        '理论基础及违禁规则',
        '直播脚本制作与提炼',
      ],
      title2: '企业热招',
      title2Text: ['直播带货主播', '电商主播', '直播间助播、副播', '直播电商运营'],
    },
  ]

  const userStore = useUserStore()

  function onMouseLeave() {
    activeItem.value = null
  }

  function onTiaoZhuan(_activeItem: any) {
    if (_activeItem) {
      const item = classesChidren.find((t) => t.label === _activeItem.label)
      if (item) {
        if (item?.value) {
          return window.open(item.value, '_blank')
        }
        if (item?.action) {
          if (item?.action === 'onKeFuAction') {
            onKeFuAction()
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    @apply cursor-pointer;
  }
  .bg {
    background: #3f6cf6;
    box-shadow: 0 1px 17px 4px #3836363d;
  }

  .box-absolute {
    box-shadow: 0 1px 7px 1px #38363645;
  }

  .class-item {
    @apply transition-all pl-13px cursor-pointer;
    &:hover,
    &.active {
      background: linear-gradient(-90deg, #3f6cf6, #f46e89) !important;
      @apply text-white;
    }
  }
  .card {
    @apply rounded-10px;
    background: linear-gradient(0deg, rgba(252, 204, 214, 39%), rgba(239, 243, 255, 39%));
  }
</style>
