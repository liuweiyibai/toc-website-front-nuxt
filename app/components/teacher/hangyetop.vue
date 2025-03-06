<template>
  <TeacherTitleBox title="行业Top级师资倾囊相授 实力讲师带出硬派学员">
    <span>监级专职导师与企业技术骨干联合执教，把脉行业发展聚焦前沿技术，</span>
    <span>专业研发课程升级、迭代，与企业实时需求接轨！</span>
  </TeacherTitleBox>
  <div class="flex w-1200px mx-auto mt-28px items-center justify-center gap-40px">
    <div class="is-btn" v-for="item in btns">{{ item }}</div>
  </div>
  <div class="w-1200px mx-auto mt-36px h-580px">
    <div
      class="w-full flex relative items-center justify-between"
      @mouseover="pause"
      @mouseleave="resume"
    >
      <div class="flex-1 mr-16px">
        <el-carousel
          class="h-full w-full"
          :autoplay="false"
          height="580px"
          ref="carouselRef"
          indicator-position="none"
          arrow="never"
          direction="vertical"
        >
          <el-carousel-item v-for="(item, index) in zongJianTeacherList" :key="index">
            <div class="w-full h-full relative overflow-hidden flex">
              <img :src="item.img" class="w-500px rounded-8px" />
              <div class="flex-1 flex flex-col items-center justify-center">
                <div class="title-box">
                  <h2>{{ item.name }}</h2>
                </div>

                <div class="card-box py-24px px-30px">
                  <div class="flex">
                    <div
                      v-for="title in item.titles"
                      class="mr-16px last:mr-0 h-32px px-20px lh-32px font-700 text-18px text-white rounded-16px is-title"
                    >
                      {{ title }}
                    </div>
                  </div>
                  <div class="mt-20px desc-box">
                    {{ item.desc }}
                  </div>
                  <ul class="mt-16px">
                    <li
                      v-for="txt in item.list"
                      class="text-#353535 text-14px lh-22px mb-18px last:mb-0"
                    >
                      {{ txt }}
                    </li>
                  </ul>

                  <div class="flex justify-center gap-10px mt-28px">
                    <div class="blue-btn" @click="onKeFuAction">
                      <img
                        src="../../assets/teacher-page/jiaoliu-icon@2x.png"
                        alt=""
                        class="w-20px h-20px"
                      />
                      <span>与TA交流</span>
                    </div>
                    <div class="blue-btn" @click="onKeFuAction">
                      <img
                        src="../../assets/teacher-page/shiting-icon@2x.png"
                        class="w-26px h-19px"
                        alt=""
                      />
                      <span>在线试听</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="flex flex-col items-center">
        <img
          src="../../assets/teacher-page/arrow-top@2x.png"
          alt="arrow-top"
          @click="onLast"
          class="w-44px mb-23px"
        />
        <div
          class="w-115px h-115px rounded-5px mb-9px last:mb-0"
          :class="{
            mask: index !== activeValue,
            active: index === activeValue,
          }"
          v-for="(item, index) in zongJianTeacherList"
          :key="index"
          @click="onClick(index)"
        >
          <img :src="item.avatar" />
        </div>
        <img
          src="../../assets/teacher-page/arrow-bottom@2x.png"
          alt="arrow-bottom"
          class="w-44px mt-23px"
          @click="onNext()"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { ElCarousel } from 'element-plus'
  import { onKeFuAction, zongJianTeacherList } from '~/util'

  const btns = ['总监级导师', '企业技术骨干']
  const activeValue = ref(0)
  const carouselRef = ref<typeof ElCarousel>()

  function onLast() {
    activeValue.value -= 1
    if (activeValue.value < 0) {
      activeValue.value = 2
    }
    carouselRef.value?.setActiveItem(activeValue.value)
  }

  function onClick(index: number) {
    activeValue.value = index
    carouselRef.value?.setActiveItem(index)
  }

  function onNext() {
    activeValue.value += 1
    if (activeValue.value > 2) {
      activeValue.value = 0
    }
    carouselRef.value?.setActiveItem(activeValue.value)
  }

  const { pause, resume } = useIntervalFn(() => {
    onNext()
  }, 7000)

  onUnmounted(() => {
    pause()
  })
</script>
<style lang="scss" scoped>
  .is-btn {
    @apply w-250px h-70px rounded-full bg-#eee transition-all cursor-pointer text-#333333 text-24px lh-70px text-center font-bold;
    &:hover,
    &.active {
      box-shadow: 0 11px 28px 0 #367bf55c;
      background: linear-gradient(90deg, #3f6cf6, #f06d8a);
      @apply text-white;
    }
  }

  .mask {
    position: relative;
    &::after {
      content: '';
      @apply absolute left-0 top-0 w-full h-full block inset-0 bg-black bg-opacity-50 rounded-5px;
    }
  }

  .active {
    box-shadow: 0 3px 4px 0 rgba(63, 108, 246, 0.8);
  }

  .title-box {
    color: #000000;
    width: 243px;
    height: 54px;
    line-height: 54px;
    margin: 0 auto;
    h2 {
      font-weight: 700;
      font-size: 32px;
      text-align: center;
    }

    background: url(../../assets/teacher-page/badge@2x.png) no-repeat;
    background-size: 100% 100%;
  }

  .card-box {
    @apply w-650px  rounded-8px bg-white mt-28px ml--80px;
    box-shadow: 0 4px 28px 0 #00000014;
    .is-title {
      background: linear-gradient(90deg, #3f6cf6, #e86d8e);
    }
  }

  .desc-box {
    color: #020202;
    font-family: Microsoft YaHei;
    @apply flex font-700 text-14px lh-14px pl-20px relative;
    &::before {
      content: '';
      display: block;
      @apply h-11px w-11px mr-8px absolute left-0 top-7px;
      transform: translateY(-50%);
      background: url(../../assets/teacher-page/circle@2x.png) no-repeat;
      background-size: 100% 100%;
    }
  }

  .blue-btn {
    @apply w-170px h-40px rounded-8px bg-#3D6CF6 flex items-center justify-center cursor-pointer text-white text-16px font-bold;
    img {
      @apply mr-8px;
    }
  }
</style>
