<template>
  <TeacherTitleBox title="过关斩将！上市公司背景严选师资 源头护航职业课堂">
    <span>选背景、选资历、选态度、选责任，技术大牛优中选优，</span>
    <span>18个纬度考核，2%师资录取率，千万级教研投入，只为筛出好老师！</span>
  </TeacherTitleBox>
  <div class="w-1200px mx-auto mt-60px flex gap-28px is-card">
    <div class="card-box" v-for="(item, index) in list" :key="index">
      <div class="top-box">
        <img :src="item.icon" alt="" />
        <span>{{ item.label }}</span>
      </div>
      <div class="bottom-box">
        <div v-for="it in item.list">
          <img
            src="../../assets/teacher-page/dot-1@2x.png"
            v-if="index === 0"
            alt=""
            class="w-10px h-10px mr-5px"
          />
          <img
            src="../../assets/teacher-page/dot-2@2x.png"
            v-if="index === 1"
            alt=""
            class="w-10px h-10px mr-5px"
          />
          <img
            src="../../assets/teacher-page/dot-3@2x.png"
            v-if="index === 2"
            alt=""
            class="w-10px h-10px mr-5px"
          />
          <span>{{ it }}</span>
        </div>
      </div>
      <div class="button-box" @click="onKeFuAction"> 了解更多 </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import img1 from '~/assets/teacher-page/biaozhunhuaxiang-icon@2x.png'
  import img2 from '~/assets/teacher-page/jiaoyan-icon@2x.png'
  import img3 from '~/assets/teacher-page/jiaoyantuandui-icon@2x.png'
  import { onKeFuAction } from '~/util'
  const list = [
    {
      label: '标准化选拔画像',
      icon: img1,
      action: '',
      list: ['企业工作资深背景', '技术深度和广度', '技术能力', '真实大型项目实战经验'],
    },
    {
      label: '教研、管理高层面试',
      icon: img2,
      action: '',
      list: [
        '深度技术考察',
        '试研逻辑',
        '课程设计测验',
        '授课实力',
        '个人发展规划',
        '作品案例能力',
      ],
    },
    {
      label: '教研团队评估',
      icon: img3,
      action: '',
      list: [
        '价值观',
        '文字撰写力',
        '教育观',
        '融会贯通力',
        '创新力',
        '讲演力',
        '学习力',
        '进取心',
      ],
    },
  ]
</script>

<style lang="scss" scoped>
  .is-card {
    @apply flex gap-30px;
    .card-box {
      @apply h-400px flex-1  transition-all;

      &:nth-child(1) {
        background: url(../../assets/teacher-page/biaozhunhuaxiang-bg@2x.png) no-repeat;
        box-shadow: 0 8px 9px 1px #d0cbcc7a;
        background-size: 100% 100%;
        border-radius: 5px 5px 5px 5px;
        overflow: hidden;
        &:hover {
          transform: translateY(-20px);
        }
        .top-box img {
          @apply w-63px h-63px mr-18px;
        }
        .bottom-box {
          @apply w-333px mx-23px mt-12px h-240px rounded-5px pl-24px pt-32px flex flex-col gap-12px;
          box-shadow: 0 8px 9px 1px #d0cbcc7a;
          > div {
            @apply h-34px lh-34px text-#333 text-16px rounded-full pl-12px flex items-center;
            background: linear-gradient(90deg, #c6dafe, #fff);
          }
        }

        .button-box {
          background: #3d6cf6;
          &:hover {
            background: linear-gradient(90deg, #3f6cf6, #f06d8a);
          }
        }
      }

      &:nth-child(2) {
        background: url(../../assets/teacher-page/jiaoyan-bg@2x.png) no-repeat;
        box-shadow: 0 8px 9px 1px #d0cbcc7a;
        background-size: 100% 100%;
        border-radius: 5px 5px 5px 5px;
        overflow: hidden;
        &:hover {
          transform: translateY(-20px);
        }
        .top-box img {
          @apply w-63px h-63px mr-18px;
        }
        .bottom-box {
          @apply w-333px mx-23px mt-12px h-240px rounded-5px p-24px;
          box-shadow: 0 8px 9px 1px #d0cbcc7a;

          > div {
            float: left;
            margin: 12px 6px;
            width: calc((100% - 24px) / 2); /* 计算每列宽度，减去间距 */
            @apply h-34px lh-34px text-#333 text-16px rounded-full pl-12px flex items-center;
            background: linear-gradient(90deg, #e3dcfe, #fff);
          }
        }

        .button-box {
          background: #913ff6;
          &:hover {
            background: linear-gradient(-90deg, #ff5b45, #a975fc);
          }
        }
      }

      &:nth-child(3) {
        background: url(../../assets/teacher-page/jiaoyantuandui-bg@2x.png) no-repeat;
        box-shadow: 0 8px 9px 1px #d0cbcc7a;
        background-size: 100% 100%;
        border-radius: 5px 5px 5px 5px;
        overflow: hidden;
        &:hover {
          transform: translateY(-20px);
        }
        .top-box img {
          @apply w-68px h-63px mr-18px;
        }
        .bottom-box {
          @apply w-333px mx-23px mt-12px h-240px rounded-5px p-24px;
          box-shadow: 0 8px 9px 1px #d0cbcc7a;

          > div {
            float: left;
            margin: 8px 6px;
            width: calc((100% - 24px) / 2); /* 计算每列宽度，减去间距 */
            @apply h-34px lh-34px text-#333 text-16px rounded-full pl-12px flex items-center;
            background: linear-gradient(90deg, #ffe1e1, #fff);
          }
        }

        .button-box {
          background: #fc7393;
          &:hover {
            background: linear-gradient(-90deg, #f5b740, #fc7393);
          }
        }
      }
      .top-box {
        @apply text-22px lh-22px text-#333 font-bold flex items-center pt-14px pl-15px;
      }

      .button-box {
        @apply w-334px h-40px lh-40px text-center rounded-5px font-bold text-16px text-#fff mx-auto mt-16px cursor-pointer transition-all;
      }
    }
  }
</style>
