<template>
  <TeacherTitleBox title="行业智库教研阵容强势赋能 带你乘风破浪">
    <span>强师虽贵亦不省人工，教研虽繁必不减成本！</span>
    <span>教培核心智囊团亲授，助力学员圆梦职场！</span>
  </TeacherTitleBox>

  <div class="w-1200px flex mx-auto mt-32px justify-between items-center">
    <div class="group w-45px h-45px cursor-pointer" @click="onLast">
      <img
        src="../../assets/teacher-page/left@2x.png"
        alt=""
        class="w-full h-full group-hover:hidden"
      />
      <img
        src="../../assets/teacher-page/left-a@2x.png"
        alt=""
        class="w-full h-full hidden group-hover:block"
      />
    </div>
    <div class="w-1086px flex flex-wrap m--12px">
      <div
        v-for="item in _swipers"
        class="w-247.5px h-257px m-12px rounded-5px img-box flex flex-col items-center justify-center"
      >
        <div class="w-120px h-120px">
          <img :src="item?.path" alt="" class="w-full h-full rounded-full" />
        </div>
        <div class="text-20px text-#333 mt-16px font-bold text-center lh-20px">{{
          item.label
        }}</div>
        <div class="btnbtn" @click="onKeFuAction">了解更多</div>
      </div>
    </div>

    <div class="group w-45px h-45px cursor-pointer" @click="onNext">
      <img
        src="../../assets/teacher-page/right@2x.png"
        alt=""
        class="w-full h-full group-hover:hidden"
      />
      <img
        src="../../assets/teacher-page/right-a@2x.png"
        alt=""
        class="w-full h-full hidden group-hover:block"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onKeFuAction } from '~/util'

  const images1 = import.meta.glob('../../../public/teacher/1/*.{jpg,png,svg,gif}')
  const images2 = import.meta.glob('../../../public/teacher/2/*.{jpg,png,svg,gif}')
  const images3 = import.meta.glob('../../../public/teacher/3/*.{jpg,png,svg,gif}')

  function extractName(path: string) {
    const match = path.match(/\/\d+\/([^/.]+)(?:\.\w+)?$/)
    return match ? match[1] : null
  }
  const _images1 = ref<string[]>([])
  const _images2 = ref<string[]>([])
  const _images3 = ref<string[]>([])

  for (const path in images1) {
    _images1.value.push(path)
  }
  for (const path in images2) {
    _images2.value.push(path)
  }
  for (const path in images3) {
    _images3.value.push(path)
  }

  // 最多4页
  const index = ref<number>(0)

  const _swipers = computed(() => {
    let arr: string[] = []
    if (index.value === 0) arr = _images1.value
    if (index.value === 1) arr = _images2.value
    if (index.value === 2) arr = _images3.value

    return arr?.map((t) => {
      return {
        label: extractName(t),
        path: t.replace('public/', ''),
      }
    })
  })

  function onLast() {
    if (index.value <= 0) {
      index.value = 2
    } else {
      index.value = index.value - 1
    }
  }
  function onNext() {
    if (index.value >= 2) {
      index.value = 0
    } else {
      index.value = index.value + 1
    }
  }
</script>
<style lang="scss" scoped>
  .img-box {
    @apply bg-#EEEEEE transition-all;
    .btnbtn {
      @apply w-120px h-32px text-white text-center lh-32px mt-16px bg-#3D6CF6 rounded-8px cursor-pointer;
    }
    &:hover {
      background: linear-gradient(0deg, #eef2fe, #fcebf0);
      .btnbtn {
        background: linear-gradient(90deg, #3f6cf6, #f06d8a);
      }
    }
  }
</style>
