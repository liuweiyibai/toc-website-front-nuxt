<template>
  <div class="w-full">
    <LayoutsBaseHeader />

    <div class="w-1200px mx-auto mt-50px">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item> 资讯详情 </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="bar"></div>

    <div class="w-1200px mx-auto mt-26px">
      <div class="text-#000 text-28px lh-28px text-center">{{ pageInfo?.title }}</div>

      <div
        class="w-full mt-74px flex items-center justify-center gap-20px text-#404040 text-12px lh-12px"
      >
        <div v-if="pageInfo?.publishTime" class="flex items-center">
          <img src="../../assets/time-icon@2x.png" alt="" class="w-15px h-15px mr-8px" />
          <span>更新时间：{{ dayjs(pageInfo?.publishTime).format('YYYY-MM-DD') }}</span>
        </div>
        <div class="flex items-center">
          <img src="../../assets/source-icon@2x.png" alt="" class="w-15px h-15px mr-8px" />
          <span>来源：{{ pageInfo?.source }}</span>
        </div>
      </div>
      <div class="w-full bg-#B5B5B5 h-1px mt-34px"></div>
      <div class="content w-full mt-38px min-h-700px news-content" v-html="html"> </div>
    </div>

    <div class="h-45px"></div>
  </div>
</template>
<script lang="ts" setup>
  import dayjs from 'dayjs'
  import { computed } from 'vue'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const pageInfo = ref()
  const html = computed(() => escape2Html(pageInfo.value?.content || ''))
  // 富文本反转义html (从接口取值后调用方法转为 Html)，v-html="escape2Html(text)"
  const escape2Html = (str: string) => {
    const arrEntities: any = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' }
    return str?.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
      return arrEntities[t]
    })
  }
  onMounted(async () => {
    const path = route.path
    const paths = path.split('/')
    const newsId = paths[paths.length - 1]
    const response = await fetch(`/api/manger-web/v1/web/news/${newsId}`)
    const json = await response.json()
    pageInfo.value = json?.data
  })
</script>

<style lang="scss" scoped>
  .bar {
    background: linear-gradient(90deg, #3f6cf6, #f36e8a);
    @apply w-1200px mx-auto h-4px mt-20px;
  }
</style>

<style>
  .news-content {
    img {
      width: 600px !important;
      height: 400px !important;
      display: block;
      margin: 0 auto;
    }
    p {
      color: #333;
      line-height: 26px;
    }
  }
</style>
