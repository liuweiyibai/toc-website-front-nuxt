<template>
  <div class="w-1200px mx-auto mt-77px">
    <div class="flex items-center">
      <h3 class="m-0 text-36px lh-36px text-#333 font-700 mr-92px">行业前瞻</h3>
      <div class="flex items-center">
        <div
          class="my-btn"
          v-for="item in categories"
          :class="{ active: item.id === active }"
          :key="item.id"
          @mouseenter="getNews(item.id)"
          >{{ item.name }}</div
        >
      </div>
      <div class="float-right ml-auto cursor-pointer text-#E6002D text-14px"> 更多 </div>
    </div>

    <div class="flex mt-45px h-280px">
      <div class="w-386px h-full rounded-5px overflow-hidden mr-20px">
        <nuxt-link
          :to="`/news/${first?.categoryId}/${first?.id}`"
          class="no-underlinew w-full block h-full relative"
        >
          <img class="w-full h-full" :src="first?.imageUrl" alt="" />
          <div class="card-bottom"> {{ first?.title }}</div>
        </nuxt-link>
      </div>
      <div class="flex-1 overflow-hidden m--10px">
        <IndexQianzhanItem v-for="item in notFirst" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue'
  import qs from 'qs'

  const categories = ref<any[]>([])
  const active = ref()
  const news = ref<any[]>([])

  async function getCategory() {
    const response = await fetch('/api/manger-web/v1/web/category/list')
    const json = await response.json()
    categories.value = json.data || []
    getNews(json.data?.[0]?.id)
  }
  // const result = _.slice(arr, 2, 5);
  async function getNews(id: string) {
    active.value = id
    const params = { categoryId: id, pageNum: 1, pageSize: 7 }
    const response = await fetch('/api/manger-web/v1/web/news?' + qs.stringify(params))
    const json = await response.json()
    const __news = json.data?.records || []
    news.value = __news.sort((a: any, b: any) => a.sort - b.sort)
  }

  const first = computed(() => news.value?.[0])
  const notFirst = computed(() => {
    return news.value.filter((t, index) => index > 0)
    // return [_news?.[2], _news?.[4], _news?.[6]].filter((t) => t)
  })

  onMounted(() => {
    getCategory()
  })
</script>

<style lang="scss" scoped>
  .my-btn {
    @apply bg-white rounded-8px px-40px lh-40px mr-19px last:mr-0 h-40px text-18px cursor-pointer text-#333 font-400 transition-all;
    border: 1px solid #d2d2d2;
    box-sizing: border-box;
    &:hover,
    &.active {
      background: linear-gradient(-90deg, #3f6cf6, #f56e88);
      color: white;
    }
  }
  .card-bottom {
    @apply absolute left-0 w-full bottom-0 h-70px rounded-b-5px pt-15px px-20px text-14px lh-20px text-white;
    background: rgba(0, 0, 0, 50%);
    letter-spacing: 1px;
    box-sizing: border-box;
  }
</style>
