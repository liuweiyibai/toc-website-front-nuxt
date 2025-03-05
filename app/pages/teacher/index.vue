<template>
  <TeacherCarousel />
  <TeacherShengeng />
  <TeacherHangyetop />
  <TeacherBanner1 />
  <TeacherGuoguan />
  <TeacherShop />
  <div class="h-500px"></div>
</template>
<script lang="ts" setup>
  definePageMeta({
    layout: 'default',
  })
  // const images = import.meta.glob('../assets/teacher/**/*.{jpg,png,svg,gif}');
  import { useHead } from '@unhead/vue'

  // for (const path in images) {
  //   console.log(path)
  // }

  useHead({
    title: '创联教育-短视频运营|直播电商|Python数据分析|影视剪辑培训机构',
    meta: [
      {
        name: 'description',
        content:
          '【上市公司-15年潜心积淀】开设新媒体短视频直播电商运营，Python数据分析、本地生活、影视后期剪辑等课程，从入学到入职，核心技能就业培训一体化服务，数百人教研专家团队',
      },
      {
        name: 'keywords',
        content:
          '创联教育,IT培训机构,Python培训,数据分析培训,短视频运营,短视频培训,直播电商培训,影视剪辑培训',
      },
    ],
  })
</script>
