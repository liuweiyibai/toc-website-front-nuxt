<template>
  <div class="mt-80px">
    <div class="w-1200px mx-auto text-center">
      <h3 class="lh-36px text-36px font-700 text-#333 m-0">具备前沿教研实力行业智库导师团队</h3>
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px">汇聚重量级大咖，强师分阶段精讲</p>
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px"
        >总监级导师与企业骨干联合执教，严选完备师资，护航品质课堂</p
      >
    </div>
    <div class="mx-auto w-1200px mt-40px px-59px relative">
      <!-- <div class="arrow-btn">
        <el-icon>
          <ArrowLeftBold />
        </el-icon>
      </div>
      <div class="arrow-btn right">
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </div> -->

      <div class="glide h-450px">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide" v-for="(item, index) in list" :key="index">
              <div class="swpier-card group">
                <img :src="item.img" alt="" class="w-full h-full" />
                <div class="card-inner pt-30px pl-20px pr-26px flex flex-col">
                  <h3 class="m-0 text-24px font-700">{{ item.label }}</h3>
                  <div class="badge mt-17px">{{ item.title }}</div>
                  <div
                    class="mt-22px line-clamp-3 line font-400 text-12px lh-24px group-hover:line-clamp-unset overflow-hidden flex-1 flex"
                    :class="{ 'scroll-scroll': item.label === '朴老师' }"
                    v-html="item.value"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Glide from '@glidejs/glide'
  // import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
  import { onMounted } from 'vue'
  import han from '~/assets/hanlaoshi@2x.png'
  import li from '~/assets/lilaoshi@2x.png'
  import piao from '~/assets/piaolaoshi@2x.png'
  import lan from '~/assets/lanlaoshi@2x.png'
  onMounted(() => {
    new Glide('.glide', {
      type: 'carousel',
      perView: 4,
      gap: 27,
    }).mount()
  })

  const list = [
    {
      label: '韩老师',
      value:
        '15年新媒体运营、直播运营、电商运营、跨境电商操盘相关经验。<br/> 曾就职于多家电商公司，负责电商直播、跨境电商团队搭建与运营，达成年销售额破亿佳绩，后创立融创嘉禾科技有限公司，从事直播运营相关业务，成功孵化多名主播，月均带货GMV600万。精通新媒体、短视频、直播、跨境电商相关业务领域，对于运营策划、快速起号、爆款打造、促活留存、持续运营有充足实践经验。',
      img: han,
      title: '新媒体运营负责人',
    },
    {
      label: '李老师',
      value:
        '13年新媒体运营实施相关经验<br/> 熟悉新媒体运营、直播运营、跨境电商相关领域，曾就职于多家上市企业负责产品策划、运营、实施相关工作。熟悉MCN机构运营流程，有批量起号、直播选品、主播培养、投流转化相关经验。授课认真、详尽、富有激情，思路清晰擅长以启发式教育引导学生，深受学员欢迎。实施相关工作。',
      img: li,
      title: '新媒体专家',
    },
    {
      label: '朴老师',
      value:
        '13年项目开发、项目管理、技术研发、教学设计实施相关经验<br/> 精通C++、Python、Java、数据仓库、大数据、数据分析、商业智能、数据挖掘、数据可视化等IT/DT相关技术。曾主持参与了北农商银行、中德银行、中信银行、建设银行等多家金融企业的数据治理平台建设，用户画像、风险控制、推荐系统相关项目的设计、开发等工作。后入职创联，担任数据技术专家、专家级讲师，负责数据分析学科的技术研发、教学实施相关工作。技术深入扎实，侧重应用实施，授课认真、详尽、富有激情而不失幽默，思路清晰擅长以启发式教育引导学生，深受学员欢迎。',
      img: piao,
      title: '数据技术专家',
    },
    {
      label: '兰老师',
      value:
        '拥有9年的开发和教学经验。<br/> 曾就职于东泰科技，紫光科技等公司，担任数据中台开发工程师，从事软件开发，数据开发等工作。现就职于创联教育，任课程研发讲师一职，擅长离线分析，实时分析，数据仓库，湖仓一体化等技术及课程的讲授。',
      img: lan,
      title: '数据分析专家级讲师',
    },
  ]
</script>

<style lang="scss" scoped>
  @import '@glidejs/glide/dist/css/glide.core.min.css';

  .swpier-card {
    @apply w-full h-450px relative overflow-hidden rounded-30px;
    &:hover {
      .card-inner {
        @apply h-full;
        .line {
          overflow: inherit;
          line-clamp: unset;
        }
      }
    }
  }

  .arrow-btn {
    @apply absolute left-0 top-195px w-45px h-45px rounded-full flex items-center justify-center text-24px text-white transition-all;
    background: rgba(0, 0, 0, 20%);
    &:hover {
      @apply bg-#3F6CF6;
    }
    &.right {
      @apply right-0 left-auto;
    }
  }

  .card-inner {
    @apply absolute bottom-0 left-0 right-0 h-210px transition-all overflow-hidden;
    background: rgba(72, 117, 247, 80%);
    border-top-right-radius: 30px;
    box-shadow: 0 4px 28px 0 rgba(0, 0, 0, 0.08);
    color: #fff;

    .badge {
      height: 25px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 100%), rgba(255, 255, 255, 5%));
      border-radius: 12.5px 12.5px 12.5px 12.5px;
      line-height: 25px;
      padding-left: 12px;
      color: rgba(63, 108, 246, 1);
      font-weight: 700;
    }
  }

  .scroll-scroll {
    &:hover {
      @apply overflow-y-auto!;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
