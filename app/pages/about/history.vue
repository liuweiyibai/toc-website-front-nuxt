<template>
  <div class="w-full">
    <AboutHeader />
    <div class="h-54px"></div>

    <div class="w-full h-2294px bg">
      <div class="w-1200px mx-auto pt-28px relative">
        <div class="text-#3F6CF6 text-center text-16px"> ABOUT US:15YEARS </div>
        <div class="mt-20px text-center text-#333333 text-24px"> 十五年历程 </div>

        <div class="mt-54px relative flex flex-col justify-center items-center z-2">
          <div
            class="w-106px h-106px mt-110px first:mt-0 relative"
            v-for="(item, index) in list"
            :key="index"
          >
            <img class="w-106px h-106px" :src="item.icon" alt="" />
            <div v-if="(index + 1) % 2 === 0" class="absolute left-166px flex top-2px">
              <div class="mr-20px">
                <div class="text-#000 text-20px lh-20px font-700">{{ item.year }}</div>
                <div
                  :style="{ width: item.valueWidth }"
                  class="text-#666666 text-16px lh-22px mt-25px"
                  >{{ item.value }}</div
                >
              </div>
              <img :style="{ width: item.imgWidth }" v-if="item.img" :src="item.img" />
            </div>
            <div
              v-else
              class="absolute right-166px flex top-2px"
              :class="index === 0 ? 'w-316px' : ''"
            >
              <img :style="{ width: item.imgWidth }" v-if="item.img" :src="item.img" />
              <div class="ml-20px">
                <div
                  class="text-#000 text-20px lh-20px font-700"
                  :class="{ highColor: item.year === '2025年' }"
                  >{{ item.year }}</div
                >
                <div
                  :style="{ width: item.valueWidth }"
                  class="text-#666666 text-16px lh-22px mt-25px"
                  >{{ item.value }}</div
                >
              </div>
            </div>
          </div>
        </div>

        <img
          src="../../assets/lineline@2x.png"
          class="absolute w-2px top-142px left-50% z-1"
          alt=""
        />
      </div>
    </div>
    <div class="h-76px"></div>
  </div>
</template>
<script lang="ts" setup>
  import i2025 from '~/assets/2025@2x.png'
  import i2025i from '~/assets/2025-img@2x.png'
  import i2024 from '~/assets/2024@2x.png'
  import i2024i from '~/assets/2024-img@2x.png'
  import i2022 from '~/assets/2022@2x.png'
  import i2021 from '~/assets/2021@2x.png'
  import i2020 from '~/assets/2020@2x.png'
  import i2019 from '~/assets/2019@2x.png'
  import i2018 from '~/assets/2018@2x.png'
  import i2016 from '~/assets/2016@2x.png'
  import i2015 from '~/assets/2015@2x.png'
  import i2010 from '~/assets/2010@2x.png'
  import { useHead } from '@unhead/vue'
  definePageMeta({ layout: false })
  useHead({
    title: '创联教育简介-港交所上市教育公司_终身职业教育倡导者',
    meta: [
      {
        name: 'description',
        content:
          '关于创联教育,创联教育成立于2011年,并于2013年在港交所上市。是一家提供“一站式职业培训”综合服务的教培机构,业务覆盖职业教育全产业链,下设分子公司47家,累计培训学员4000万人.',
      },
      {
        name: 'keywords',
        content: '创联教育简介,创联,创联教育,终身教育培训平台',
      },
    ],
  })
  const list = [
    {
      img: i2025i,
      imgWidth: '120px',
      icon: i2025,
      year: '2025年',
      value: '创联教育成为百度文心大模型AI技术生态服务增值类伙伴（优选级）',
      valueWidth: '176px',
    },
    {
      img: i2024i,
      imgWidth: '242px',
      icon: i2024,
      year: '2024年',
      value:
        '共14个批次、1048人的互联网营销师、电子商务师职业技能等级认定工作在四川创联国培考试中心圆满完成',
      valueWidth: '240px',
    },
    {
      img: '',
      icon: i2022,
      year: '2022年',
      value: '“创联职教云” 入选人社部推荐优质线上职业技能培训平台及数字资源',
      imgWidth: '',
      valueWidth: '180px',
    },
    {
      img: '',
      icon: i2021,
      year: '2021年',
      value: '加入北京、上海人力资源协会；职虎上线启动新职业培训业务；创联数字化智能中台启动',
      imgWidth: '',
      valueWidth: '213px',
    },
    {
      img: '',
      icon: i2020,
      year: '2020年',
      value:
        '创联职教OMO系统发布；职业技能提升培训服务平台上线服务入围29个省/自治区；大区营销体系建立',
      imgWidth: '',
      valueWidth: '176px',
    },
    {
      img: '',
      icon: i2019,
      year: '2019年',
      value: '3万㎡继续教育基地落地四川；继续教育业务落地15+；国家级继续教育资源共享平台上线',
      imgWidth: '',
      valueWidth: '240px',
    },
    {
      img: '',
      icon: i2018,
      year: '2018年',
      value: '1万㎡继续教育基地；落地广西南宁',
      imgWidth: '',
      valueWidth: '143px',
    },
    {
      img: '',
      icon: i2016,
      year: '2016年',
      value: '智能学习平台上云；融学 App 上线；继续教育业务落地省份10+',
      imgWidth: '',
      valueWidth: '189px',
    },
    {
      img: '',
      icon: i2015,
      year: '2015年',
      value: '“互联网+教育”；继续教育项目落地',
      imgWidth: '',
      valueWidth: '130px',
    },
    {
      img: '',
      icon: i2010,
      year: '2011年',
      value: '开展继续教育业务',
      imgWidth: '',
      valueWidth: '128px',
    },
  ]
</script>

<style lang="scss" scoped>
  .bg {
    background: url(../../assets/history-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }
  .highColor {
    color: #3f6cf6;
    font-weight: 700;
  }
</style>
