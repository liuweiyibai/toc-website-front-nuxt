<template>
  <TeacherTitleBox title="匠心锤炼！自主研发一体化数字服务体系">
    <span>倾力打造以数据中台、业务中台、AI中台为基础的创联智能数字化中台</span>
    <span>为每位学员提供个性化学习路径规划及专属就业支持服务 </span>
  </TeacherTitleBox>
  <div class="flex gap-12px items-center justify-between w-1200px mx-auto mt-26px">
    <div
      v-for="(btn, index) in list"
      :key="index"
      class="top-btn cursor-pointer"
      :class="{ active: activeIndex === index }"
      @click="onChange(index)"
    >
      {{ btn.btn }}
    </div>
  </div>
  <div class="w-1200px mx-auto mt-32px">
    <el-carousel
      height="400px"
      :autoplay="false"
      motion-blur
      ref="carouselRef"
      @change="onItChange"
    >
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <div class="card" :style="{ backgroundImage: `url(${item.bg})` }">
          <div class="w-516px left-box">
            <div class="text-#FDF8F8 font-bold text-24px lh-36px w-176px">{{ item.leftText }}</div>
            <div class="h-3px w-65px bg-#fdfdfd mt-36px"></div>
            <div class="mt-36px text-#FFFDFD w-195px lh-24px">{{ item.leftTextEn }}</div>
          </div>
          <div class="right-box">
            <div class="text-#fff text-18px font-bold">{{ item.rightTitle }}</div>
            <div class="mt-24px w-454px text-#fff text-14px lh-24px">{{ item.rightDes }}</div>
            <div class="s-btn" @click="onKeFuAction">
              <span>了解更多</span>
              <img :src="you" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
  import you from '~/assets/teacher-page/右@2x.png'
  import img1 from '~/assets/teacher-page/jiangxin-bg-1@2x.png'
  import img2 from '~/assets/teacher-page/jiangxin-bg-2@2x.png'
  import img3 from '~/assets/teacher-page/jiangxin-bg-3@2x.png'
  import img4 from '~/assets/teacher-page/jiangxin-bg-4@2x.png'
  import img5 from '~/assets/teacher-page/jiangxin-bg-5@2x.png'
  import img6 from '~/assets/teacher-page/jiangxin-bg-6@2x.png'
  import { onKeFuAction } from '~/util'
  const activeIndex = ref(0)
  const carouselRef = ref()
  const list = [
    {
      btn: '在线学习实训',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '在线学习实训',
      rightDes:
        '在线数字化学习兼顾知识和实训的系统性，为学习者和培训组织者提供在线培训业务全流程服务。',
      bg: img1,
    },
    {
      btn: '鹰眼运营管理',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '鹰眼运营管理',
      rightDes:
        '通过整合人才发展各环节的业务特征要素，建立各业务服务模块之间的链接，持续提升业务服务协同效率。以数据为基石，为合作伙伴提供智能精准营销和运营管理工具，以用户为核心，利用全域数据驱动业务增长',
      bg: img2,
    },
    {
      btn: '数字化考试测评',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '数字化考试测评',
      rightDes:
        '基于在线数字化考试模块，为考试评价机构提供完善安全的在线考试服务，为学员提供自评自测、考前辅导等技术服务。',
      bg: img3,
    },
    {
      btn: '人工智能、大数据区块链、微服务引擎',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '人工智能、大数据、区块链、微服务引擎',
      rightDes:
        '有机融合人工智能、大数据、区块链、微服务等先进技术手段，实现灵活高效、模块化、自驱动的技术服务中台。',
      bg: img4,
    },
    {
      btn: '人才选职就业',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '人才选职就业',
      rightDes:
        '通过人工智能+职位推荐和简历匹配模型，实现精准的人岗匹配，为个人提供适合的岗位推荐和就职辅导，为企业提供招聘和人才成长的数据支撑。',
      bg: img5,
    },
    {
      btn: '云算力底座',
      leftText: '创新型产品系统与技术',
      leftTextEn: 'Innovative Product System With technology',
      rightTitle: '云算力底座',
      rightDes:
        '采用自有和公有云融合的多云架构，为各业务应用场景提供丰富、可靠、安全的算力和数据存储底座。',
      bg: img6,
    },
  ]

  function onChange(index: number) {
    carouselRef.value?.setActiveItem(index)
  }

  function onItChange(current: number) {
    activeIndex.value = current
  }
</script>

<style lang="scss" scoped>
  .top-btn {
    width: 190px;
    height: 70px;
    border-radius: 35px 35px 35px 35px;
    background: #eeeeee;
    cursor: pointer;
    @apply text-#333 text-19px font-bold lh-20px  flex items-center justify-center text-center px-8px transition-all;
    &:hover,
    &.active {
      @apply text-#fff shadow;
      background: linear-gradient(90deg, #3f6cf6, #f06d8a);
    }
  }

  .card {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @apply h-full rounded-20px overflow-hidden flex;
    .left-box {
      @apply h-full relative flex flex-col items-start justify-center pl-198px;
    }
    .right-box {
      @apply flex-1 relative pl-68px flex flex-col items-start justify-center;
      &::before {
        content: '';
        @apply absolute left-0 top-50% translate-y--50% h-185px bg-#D8E1FC w-1px;
      }
    }
  }

  .s-btn {
    @apply w-170px h-40px rounded-8px bg-#3D6CF6 mt-56px justify-center items-center lh-40px text-white text-16px flex cursor-pointer transition-all;
    img {
      @apply w-19px h-8px ml-16px;
    }
    &:hover {
      background: linear-gradient(90deg, #3f6cf6, #f06d8a);
    }
  }
</style>
