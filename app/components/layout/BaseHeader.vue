<template>
  <div class="w-full">
    <div class="mx-auto w-1200px pt-22px flex items-end">
      <div class="w-137px h-38px mr-163px">
        <img :src="logo" class="w-full h-full" alt="" />
      </div>
      <div
        class="h-40px rounded-10px bg-#F7F7F7 pl-15px pr-17px text-#E6002D text-18px font-700 flex items-center cursor-pointer"
        @click="visibleValue = true"
      >
        <img :src="address" class="w-18px h-24px" alt="" />
        <span class="ml-8px">{{ userStore.city }}校区</span>
      </div>

      <div class="float-right ml-auto">
        <img :src="slogan" class="h-20px" alt="" />
      </div>
    </div>
    <div class="w-full bg-#3F6CF6">
      <div class="mt-36px w-1200px mx-auto flex">
        <div class="flex flex-1 ml-56px h-50px items-center">
          <div v-for="item in menus" class="flex-1 transition-all">
            <template v-if="item.value">
              <a
                v-if="item.value.startsWith('https://')"
                :href="item.value"
                target="_blank"
                class="no-underline text-#fff text-16px hover:text-#fff outline-none"
                >{{ item.label }}</a
              >
              <nuxt-link
                :to="item.value"
                v-else
                class="no-underline text-#fff text-16px hover:text-#fff outline-none"
                >{{ item.label }}</nuxt-link
              >
            </template>
            <!-- <el-dropdown placement="bottom" v-if="item?.children?.length" class="h-full" >
              <a class="no-underline text-#fff text-16px hover:text-#fff outline-none lh-50px">{{
                item.label
              }}</a>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="it in item.children" @click.stop="onClick(it.value)">
                    <span>{{ it.label }}</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown> -->

            <el-popover
              v-if="item?.children?.length"
              placement="bottom-start"
              :width="710"
              trigger="hover"
              class="h-full"
              :offset="22"
            >
              <template #reference>
                <a class="no-underline text-#fff text-16px hover:text-#fff outline-none lh-50px">{{
                  item.label
                }}</a>
              </template>

              <div class="flex w-full py-15px flex flex-wrap gap-28px">
                <div
                  class="w-280px h-40px flex items-center bg-#F6F6F6 rounded-4px pl-20px cursor-pointer"
                  v-for="s in item.children"
                  @click="onClick(s)"
                >
                  <img
                    :src="s.img"
                    alt=""
                    :style="{ width: `${s.width}px`, height: `${s.height}px` }"
                  />
                  <span class="text-#333 text-16px font-700 ml-12px">{{ s.label }}</span>
                </div>
              </div>
            </el-popover>
            <a
              @click="onAction(item.action)"
              v-if="item.action"
              class="no-underline text-#fff text-16px hover:text-#fff outline-none"
              >{{ item.label }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <gdialog v-model="visibleValue" />
  </div>
</template>
<script lang="ts" setup>
  import logo from '~/assets/logo@2x.png'
  import address from '~/assets/address@2x.png'
  import slogan from '~/assets/slogan@2x.png'

  import { menus, onAction, onScrollToJingPinKe } from '~/util'

  const { onClick } = onScrollToJingPinKe()
  const visibleValue = ref(false)
  const userStore = useUserStore()
</script>

<style lang="scss" scoped>
  .bg {
    background: #3f6cf6;
    box-shadow: 0 1px 17px 4px #3836363d;
  }

  .box-absolute {
    box-shadow: 0 1px 7px 1px #38363645;
  }

  .class-item {
    @apply transition-all pl-13px cursor-pointer;
    &:hover {
      background: linear-gradient(-90deg, #3f6cf6, #f46e89);
      @apply text-white;
    }
  }
  .card {
    @apply rounded-10px;
    background: linear-gradient(0deg, rgba(252, 204, 214, 39%), rgba(239, 243, 255, 39%));
  }

  a {
    @apply cursor-pointer;
  }
</style>
