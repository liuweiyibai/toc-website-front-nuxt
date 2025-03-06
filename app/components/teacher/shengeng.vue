<template>
  <TeacherTitleBox title="深耕职教沃土 专家型导师团队精育技能人才">
    <span>创联全力打造职业教育全产业链生态平台，</span>
    <span>昔日政企特聘的资深导师，今朝助力平民学习跃升！ </span>
  </TeacherTitleBox>
  <div class="w-1200px mx-auto mt-45px flex flex-wrap gap-20px">
    <div class="box overflow-hidden" v-for="(item, index) in list" :key="index">
      <div class="relative text-18px lh-18px text-#333 font-bold">
        <img :src="tuoyuan" class="absolute w-26px h-28px top--6px left--5px" alt="" />
        <span class="relative z-1">{{ item.title }}</span>
      </div>
      <div class="mt-18px w-386px text-#333 text-14px lh-20px">{{ item.value }}</div>
      <div class="s-btn" @click="onKeFuAction">
        <span> {{ item.btn }} </span>
        <img :src="you" alt="" />
      </div>
      <img
        class="box-img"
        :src="item.img"
        alt=""
        :style="{ width: item.imgWidth, height: item.imgHeight }"
      />
    </div>
  </div>
  <div class="box-2">
    <div class="w-1200px px-80px mx-auto pt-275px">
      <div class="flex pt-37px justify-around items-center">
        <div v-for="(item, index) in list2" :key="index" class="before-item">
          <div>
            <div class="flex items-end justify-center">
              <div class="flex items-end justify-center">
                <count-to
                  :startVal="0"
                  :endVal="item.value"
                  :duration="3000"
                  :suffix="item?.suffix"
                  class="text-white text-65px lh-65px font-bold"
                />
                <span class="text-white text-18px lh-18px ml-6px mb-4px">{{ item.unit }}</span>
              </div>
            </div>
            <p class="mt-18px text-#fff text-14px font-400 lh-14px">{{ item.des }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import keyan from '~/assets/teacher-page/科研@2x.png'
  import hulianwang from '~/assets/teacher-page/互联网@2x.png'
  import shinian from '~/assets/teacher-page/十年@2x.png'
  import koubei from '~/assets/teacher-page/口碑@2x.png'
  import tuoyuan from '~/assets/teacher-page/椭圆1169@2x.png'
  import you from '~/assets/teacher-page/右@2x.png'
  import * as VCount from 'vue3-count-to'
  import { onKeFuAction } from '~/util'
  const { CountTo } = VCount
  const list = [
    {
      title: '科研与教育背景支持',
      value:
        '作为博士后科研工作站，汇聚来自两院院士的卓越智慧，同时囊括了北京大学、清华大学、北京科技大学及北京交通大学等TOP学府的高水平教育力量。',
      action: '',
      img: keyan,
      imgWidth: `154px`,
      imgHeight: '181px',
      btn: '查看导师学历',
    },
    {
      title: '互联网巨头实战经验',
      value:
        '汇集原字节、阿里、京东、腾讯、百度、美团等知名公司技术负责人，开展前沿技术领域的深度教研与高难度技术难题的攻关。从企业战略高度，深入剖析项目精髓。',
      action: '',
      img: hulianwang,
      imgWidth: '171px',
      imgHeight: '195px',
      btn: '查看导师项目',
    },
    {
      title: '十年以上行业深耕',
      value:
        '团队汇集众多行业早批从业者，将十余年行业造诣强化总结融入课堂项目，致力于打造既通俗易懂又深入浅出的核心课程内容，学员轻松跨越知识门槛。',
      action: '',
      img: shinian,
      imgWidth: '160px',
      imgHeight: '187px',
      btn: '了解导师履历',
    },
    {
      title: '学员赞誉口碑甄选',
      value:
        '累计成功研发超过14000门视频课程，课程总播放量已突破亿次大关，著作书籍荣登京东热销榜。还为学员提供了全套详尽学习资料，好评如潮，深受粉丝喜爱与支持。',
      action: '',
      img: koubei,
      imgWidth: '168px',
      imgHeight: '193px',
      btn: '查看口碑截图',
    },
  ]
  const list2 = [
    {
      value: 15,
      unit: '年',
      des: '专注终身职教，全产业链布局',
    },
    {
      value: 500,
      unit: '位',
      des: '大咖赋能，专家型布道师亲授',
    },
    {
      value: 2,
      unit: '录用率',
      des: '师资严苛筛选，10级量化指标评估',
      suffix: '%',
    },
    {
      value: 4000,
      unit: '万',
      des: '人才服务规模，成就职业梦想',
    },
  ]
</script>

<style lang="scss" scoped>
  .box {
    background: linear-gradient(0deg, #ffffff, #f4f4f4);
    @apply w-590px shadow rounded-5px relative pt-34px pl-40px h-200px;
    &:before {
      content: '';
      background: linear-gradient(-90deg, #3f6cf6, #ea6d8e);
      @apply block w-full absolute top-0 right-0 left-0 h-5px rounded-t-5px shadow;
    }

    .s-btn {
      @apply w-170px h-40px rounded-8px bg-#3D6CF6 mt-16px justify-center items-center lh-40px text-white text-16px flex cursor-pointer transition-all;
      img {
        @apply w-19px h-8px ml-16px;
      }
      &:hover {
        background: linear-gradient(90deg, #3f6cf6, #f06d8a);
      }
    }
    .box-img {
      @apply absolute top-5px right--5px;
    }
    &:nth-child(1) .box-img {
      top: 18px;
    }
    &:nth-child(3) .box-img {
      top: 17px;
    }
    &:nth-child(4) .box-img {
      top: 7px;
    }
  }

  .box-2 {
    background: linear-gradient(90deg, #3f6cf6, #eb6d8d);
    @apply w-full h-450px mt--285px;
  }

  .before-item {
    @apply flex;
    &:last-child {
      &::after {
        content: none;
      }
    }
    &::after {
      content: '';
      @apply mx-36px mt-18px h-45px w-1px bg-#DCDCDC block;
    }
  }
</style>
