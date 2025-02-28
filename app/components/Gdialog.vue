<template>
  <el-dialog
    v-model="dialogVisible"
    width="528"
    class="my-dialog"
    :lock-scroll="false"
    append-to-body
  >
    <div class="flex flex-wrap my--20px">
      <div
        class="flex items-center my-20px brr group cursor-pointer"
        v-for="(item, index) in list"
        :key="index"
        @click.stop="onChangeIt(item)"
      >
        <img
          v-if="item.label === userStore.city"
          :src="item.img1"
          class="mr-14px"
          :style="{ width: `${item.width}px`, height: `${item.height}px` }"
          alt=""
        />
        <template v-else>
          <img
            :src="item.img"
            class="mr-14px group-hover:hidden"
            :style="{ width: `${item.width}px`, height: `${item.height}px` }"
            alt=""
          />
          <img
            :src="item.img1"
            class="mr-14px group-hover:block hidden"
            :style="{ width: `${item.width}px`, height: `${item.height}px` }"
            alt=""
          />
        </template>

        <div class="flex flex-col">
          <span class="text-16px lh-16px text-#333">{{ item.label }}</span>
          <span class="text-#999 text-12px lh-12px mt-10px">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
  const dialogVisible = defineModel<boolean>({ default: false })
  import i1 from '~/assets/school/图标01@2x.png'
  import i1i from '~/assets/school/图标01-蓝@2x.png'

  import i2 from '~/assets/school/图标02@2x.png'
  import i2i from '~/assets/school/图标02-蓝@2x.png'

  import i3 from '~/assets/school/图标03@2x.png'
  import i3i from '~/assets/school/图标03-蓝@2x.png'

  import i4 from '~/assets/school/图标04@2x.png'
  import i4i from '~/assets/school/图标04-蓝@2x.png'

  import i5 from '~/assets/school/图标05@2x.png'
  import i5i from '~/assets/school/图标05-蓝@2x.png'

  import i6 from '~/assets/school/图标06@2x.png'
  import i6i from '~/assets/school/图标06-蓝@2x.png'

  const userStore = useUserStore()

  const list = [
    {
      label: '北京',
      value: 'Beijing',
      img: i1,
      img1: i1i,
      width: 66,
      height: 65,
    },
    {
      label: '成都',
      value: 'Chengdu',
      img: i2,
      img1: i2i,
      width: 80,
      height: 68,
    },
    {
      label: '郑州',
      value: 'Zhengzhou',
      img: i3,
      img1: i3i,
      width: 61,
      height: 75,
    },
    {
      label: '深圳',
      value: 'Shenzhen',
      img: i4,
      img1: i4i,
      width: 54,
      height: 75,
    },
    {
      label: '上海',
      value: 'Shanghai',
      img: i5,
      img1: i5i,
      width: 55,
      height: 73,
    },
    {
      label: '杭州',
      value: 'Hangzhou',
      img: i6,
      img1: i6i,
      width: 55,
      height: 61,
    },
  ]

  function onChangeIt(item: any) {
    userStore.setCity(item.label)

    dialogVisible.value = false
  }

  onMounted(() => {
    userStore.setDefaultCity()
  })
</script>
