<template>
  <div class="w-full h-285px flex relative">
    <div class="bg-#141414 w-36% flex pt-37px flex-col items-end h-full">
      <div class="w-151px h-42px mr-182px">
        <img src="../../assets/logo02@2x.png" alt="" class="h-full" />
      </div>
      <div class="call-btn" @click="onKeFuAction">点击24小时在线资讯</div>
      <div class="flex items-center mr-172px mt-10px">
        <img src="../../assets/call-icon@2x.png" alt="" class="w-17px h-17px mr-7px" />
        <span class="text-white cursor-pointer">400-608-7775</span>
      </div>
      <div class="text-#999999 mt-26px mr-89px text-12px lh-22px">
        北京创联培勤教育咨询有限公司 <br />
        {{ new Date().getFullYear() }} cledu.cn All Rights Reserved. <br />
      </div>
    </div>
    <div class="w-1px h-full bg-#1b1b1b"></div>
    <div class="bg-#1C1C1C flex-1">
      <div class="w-858.19px h-full">
        <div class="flex">
          <!-- 关于创联 -->
          <div class="pt-52px relative badge badge-line pl-48px pr-8px flex flex-col pb-30px">
            <h3 class="m-0 lh-18px text-white font-400 text-18px">关于创联</h3>
            <div class="flex mt-30px text-white cursor-pointer text-12px text-#999 lh-28px">
              <div class="">
                <div class="">
                  <nuxt-link to="/about/info" class="no-underline text-white hover:text-#3F6CF6!"
                    >集团简介</nuxt-link
                  >
                </div>

                <div class="">
                  <nuxt-link to="/about/history" class="no-underline text-white hover:text-#3F6CF6!"
                    >15年历程</nuxt-link
                  >
                </div>
                <div class="text-white hover:text-#3F6CF6! cursor-pointer" @click="fenzhijigou">
                  分支机构
                </div>
              </div>
              <div class="ml-50px">
                <div class="text-white hover:text-#3F6CF6 cursor-pointer" @click="peixunjidi"
                  >培训基地
                </div>
                <div class="text-white hover:text-#3F6CF6 cursor-pointer" @click="zhiyingxiaoqu"
                  >直营校区</div
                >
                <div class="hover:text-#3F6CF6">
                  <div class="">
                    <nuxt-link
                      to="/about/concat"
                      class="no-underline text-white hover:text-#3F6CF6!"
                      >联系我们</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 服务指南 -->
          <div
            class="pt-52px relative badge badge-line pl-58px pr-8px flex flex-col pb-30px ml-60px"
          >
            <h3 class="m-0 lh-18px text-white font-400 text-18px">服务指南</h3>
            <div class="flex mt-30px text-white cursor-pointer text-12px text-#999 lh-28px">
              <div class="">
                <div class="text-white hover:text-#3F6CF6 cursor-pointer" @click="onKeFuAction"
                  >课程咨询
                </div>
                <div class="text-white hover:text-#3F6CF6 cursor-pointer" @click="onKeFuAction"
                  >匿名投诉</div
                >

                <div class="">
                  <a
                    href="/policy.html"
                    class="no-underline text-white hover:text-#3F6CF6!"
                    target="_blank"
                    >隐私声明</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- 微信号 -->
          <div
            class="pt-44px relative badge-line pl-60px flex pb-28px ml-90px text-#999999 text-14px"
          >
            <div class="flex flex-col justify-center items-center">
              <img src="../../assets/qr1@2x.png" alt="" class="w-110px h-110px" />
              <span class="mt-12px">关注微信公众号</span>
            </div>
            <div class="flex flex-col justify-center items-center ml-60px">
              <img src="../../assets/qr2@2x.png" alt="" class="w-110px h-110px" />
              <span class="mt-12px">加企微联系我们</span>
            </div>
          </div>
        </div>
        <div
          class="w-full h-72px border-t-1px border-#313131 border-t-solid text-#999999 text-12px flex items-center pl-42px"
        >
          <span> 经营许可证编号：京ICP证110988号 </span>
          <div class="flex items-center ml-10px">
            <img src="../../assets/gh@2x.png" alt="" class="w-20px h-20px mr-4px" />
            <span> 京ICP备2025110256号-1 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { onKeFuAction } from '~/util'

  const router = useRouter()
  function fenzhijigou() {
    router.push({
      path: '/',
      hash: '#intro',
      query: { intro: 'fenzhijigou' },
    })
  }

  function peixunjidi() {
    router.push({
      path: '/',
      hash: '#intro',
      query: { intro: 'peixunjidi' },
    })
  }

  function zhiyingxiaoqu() {
    router.push({
      path: '/',
      hash: '#intro',
      query: { intro: 'zhiyingxiaoqu' },
    })
  }
</script>

<style lang="scss" scoped>
  .call-btn {
    @apply mr-156px mt-30px w-164px h-40px lh-40px rounded-8px bg-#313131 text-white text-center cursor-pointer text-14px text-#B4B3B3 transition-all;
    border: 1px solid #626262;
    &:hover {
      border-color: white;
      @apply text-white;
      background: linear-gradient(90deg, #3f6cf6, #ed6d8b);
    }
  }

  .badge {
    @apply relative;
    &::before {
      content: '';
      @apply absolute left-0 block w-3px h-25px bg-#C9C9C9 top-49px;
    }
  }

  .badge-line {
    border-left: 1px solid #313131;
  }
</style>
