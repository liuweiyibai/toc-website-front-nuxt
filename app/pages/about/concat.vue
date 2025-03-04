<template>
  <AboutHeader />
  <div class="w-1200px mx-auto pt-82px">
    <div class="w-102px">
      <img src="../../assets/CONTACTUS@2x.png" alt="" class="w-full" />
    </div>
    <div class="mt-20px text-#333333 text-24px lh-24px font-700">联系我们</div>

    <div class="w-full flex mt-106px">
      <div class="h-500px flex-1 bg-#F5F4F4 pt-55px pl-58px">
        <div class="text-#333333 text-36px lh-36px">企业合作</div>
        <div class="flex items-center mt-94px">
          <img src="../../assets/coop-concat@2x.png" alt="" class="w-24px h-19px mr-8px" />
          <span class="text-#666666 text-16px lh-16px">联系人：仇老师</span>
        </div>
        <div class="flex items-center mt-30px">
          <img src="../../assets/coop-phone@2x.png" alt="" class="w-23px h-23px mr-8px" />
          <span class="text-#666666 text-16px lh-16px">联系电话：17600632143</span>
        </div>
      </div>
      <div class="h-500px flex-1 bg"></div>
    </div>

    <div class="w-1068px mx-auto h-130px mt--180px relative z-2 flex">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="w-178px bg-#fff border-has h-full pt-17px pl-30px group gg"
      >
        <div :style="{ width: `${item.width}px`, height: `${item.height}px` }">
          <img
            :src="item.img"
            alt=""
            class="w-full h-full group-hover:opacity-0 group-hover:hidden"
          />
          <img :src="item.imga" alt="" class="group-hover:opacity-100 w-full h-full" />
        </div>
        <div class="text-#333 group-hover:text-#fff text-16px lh-16px mt-20px">
          {{ item.title }}
        </div>
        <div class="text-#999 group-hover:text-#fff text-9px lh-9px mt-10px">{{ item.en }}</div>
      </div>
    </div>

    <div class="w-1200px mx-auto mt-190px flex gap-20px">
      <div class="flex-1 h-240px bg-11 rounded-20px pt-56px pl-64px relative">
        <div class="text-#3F6CF6 text-36px lh-36px font-500">在线咨询</div>
        <div class="text-#3F6CF6 text-16px lh-16px font-500 mt-23px">Online consultation</div>
        <div class="w-217px h-72px mt-24px relative group cursor-pointer">
          <img
            src="../../assets/按钮01@2x.png"
            alt=""
            class="w-full h-full block group-hover:hidden"
          />
          <img
            src="../../assets/按钮02@2x.png"
            alt=""
            class="w-full h-full hidden group-hover:block"
          />
          <div
            class="text-white absolute text-28px text-center left-0 w-full top-0 lh-72px cursor-pointer"
            @click="onKeFuAction()"
            >发起对话</div
          >
        </div>
        <img
          src="../../assets/咨询图标@2x.png"
          class="top-57px right-46px absolute w-181px h-163px"
          alt=""
        />
      </div>
      <div class="flex-1 h-240px bg-12 rounded-20px pt-56px pl-64px relative">
        <div class="text-#DB205B text-36px lh-36px font-500">企微咨询</div>
        <div class="text-#DB205B text-16px lh-26px font-500 mt-23px"
          >Enterprise WeChat <br />ConsultingEnterprise
        </div>

        <img
          src="../../assets/企业微信@2x.png"
          class="top-57px right-46px absolute w-207px h-207px"
          alt=""
        />
      </div>
    </div>
  </div>

  <div class="h-50px"></div>
</template>
<script lang="ts" setup>
  import a1 from '~/assets/about-01@2x.png'
  import a11 from '~/assets/about-01-1@2x.png'

  import a2 from '~/assets/about-02@2x.png'
  import a21 from '~/assets/about-02-1@2x.png'

  import a3 from '~/assets/about-03@2x.png'
  import a31 from '~/assets/about-03-1@2x.png'

  import a4 from '~/assets/about-04@2x.png'
  import a41 from '~/assets/about-04-1@2x.png'

  import a5 from '~/assets/about-05@2x.png'
  import a51 from '~/assets/about-05-1@2x.png'

  import a6 from '~/assets/about-06@2x.png'
  import a61 from '~/assets/about-06-1@2x.png'
  import { onKeFuAction } from '~/util'

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
      title: '企业招聘',
      en: 'Enterprise Recruitment',
      img: a1,
      imga: a11,
      width: 40,
      height: 37,
    },
    {
      title: '兼职需求',
      en: 'Part time job demand',
      img: a2,
      imga: a21,
      width: 36,
      height: 37,
    },
    {
      title: '定制班',
      en: 'Customized Class',
      img: a3,
      imga: a31,
      width: 42,
      height: 33,
    },
    {
      title: '企业内训',
      en: 'Corporate training',
      img: a4,
      imga: a41,
      width: 39,
      height: 35,
    },
    {
      title: '课程合作',
      en: 'Course Collaboration',
      img: a5,
      imga: a51,
      width: 39,
      height: 36,
    },
    {
      title: '电商选品',
      en: 'Enterprise E-commerce product selection',
      img: a6,
      imga: a61,
      width: 41,
      height: 37,
    },
  ]
</script>

<style lang="scss" scoped>
  .bg {
    background: url(../../assets/about-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }

  .border-has {
    border-right: 2px solid #eee;
    &:last-child {
      border-right: 0;
    }
  }

  .gg {
    @apply transition-all text-#333333;
    &:hover {
      background: linear-gradient(-90deg, #3f6cf6, #eb6d8d);
      color: #fff;
    }
  }

  .bg-11 {
    background: url(../../assets/about-bg-1@2x.png) no-repeat;
    background-size: 100% 100%;
  }
  .bg-12 {
    background: url(../../assets/about-bg-2@2x.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
