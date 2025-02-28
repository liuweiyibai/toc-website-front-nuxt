<template>
  <div class="w-full h-wufll flex">
    <div class="left-box">
      <!-- 就业 -->
      <div class="title-box flex items-center after:left-45px">
        <img src="../../assets/jiuye-icon@2x.png" alt="" class="w-35px h-34px mr-10px" />
        <span>就业</span>
        <div class="sub-title ml-20px cursor-pointer" @click="onClick">点击查看就业详情</div>
      </div>
      <div
        class="w-full h-88px rounded-10px bg-#f2f2f2 mt-10px pt-15px pr-25px pl-25px pb-12px text-#353535 text-12px lh-12px"
      >
        <div
          v-for="(item, index) in jiuye"
          :key="index"
          class="flex justify-between mt-12px first:mt-0"
        >
          <div class="w-15%">{{ item.name }}</div>
          <div class="w-25% truncate">{{ item.company }}</div>
          <div class="w-20%">{{ item.zhuanye }}</div>
          <div class="flex-1 truncate overflow-hidden">{{ item.salary }}</div>
        </div>
      </div>

      <!-- 课程 -->
      <div class="title-box flex items-center after:left-45px mt-28px">
        <img src="../../assets/kecheng-icon@2x.png" alt="" class="w-34px h-31px mr-10px" />
        <span>课程</span>
        <div class="sub-title ml-20px cursor-pointer" @click="onClick">点击查看课程详情</div>
      </div>
      <div
        class="w-full h-65px rounded-10px bg-#f2f2f2 mt-9px pt-15px pr-150px pl-24px pb-12px text-#353535 text-12px lh-12px"
      >
        <div
          v-for="(item, index) in kecheng"
          :key="index"
          class="text-#353535 mt-14px first:mt-0 text-12px lh-12px"
        >
          <img src="../../assets/dot.png" alt="" class="w-10px h-10px mr-10px" />
          <span>{{ item }}</span>
        </div>
      </div>

      <!-- 师资 & 学习资料 -->
      <div class="flex mt-28px">
        <div class="flex-1">
          <div class="title-box flex items-center after:left-45px">
            <img src="../../assets/shizi-icon@2x.png" alt="" class="w-35px h-34px mr-10px" />
            <span>师资</span>
            <div class="sub-title ml-20px cursor-pointer" @click="onClick">点击了解师资详情</div>
          </div>
          <div class="w-full h-44px rounded-10px bg-#f2f2f2 mt-9px pt-15px pl-24px">
            <div
              v-for="(item, index) in shizi"
              :key="index"
              class="text-#353535 mt-14px first:mt-0 text-12px lh-14px"
            >
              <img src="../../assets/dot.png" alt="" class="w-10px h-10px mr-10px" />
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="flex-1 ml-25px">
          <div class="title-box flex items-center after:left-45px mt-5px !after-w-72px">
            <img src="../../assets/ziliao-icon@2x.png" alt="" class="w-35px h-29px mr-10px" />
            <span>学习资料</span>
            <div class="sub-title ml-20px cursor-pointer" @click="onClick">点击了解学习资料</div>
          </div>
          <div class="w-full h-44px rounded-10px bg-#f2f2f2 mt-9px pt-15px pl-24px">
            <div
              v-for="(item, index) in ziliao"
              :key="index"
              class="text-#353535 mt-14px first:mt-0 text-12px lh-14px"
            >
              <img src="../../assets/dot.png" alt="" class="w-10px h-10px mr-10px" />
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-60px mt-20px">
        <img :src="img" class="w-full h-full" alt="" />
      </div>
    </div>
    <div class="right-box">
      <div class="title-box flex items-center after-w-108px! after:left-45px">
        <img src="../../assets/kaiban-icon@2x.png" alt="" class="w-35px h-34px mr-10px" />
        <span>最新开班信息</span>
      </div>
      <div class="rounded-10px overflow-hidden mt-12px">
        <ul>
          <li v-for="item in kaibanList" class="!pl-22px !pr-17px text-#353535 text-14px">
            <span class="">【{{ item.addr }}】</span>
            <div class="flex-1 text-center">{{ item.label }}</div>
            <span>{{ item.time }}</span>
            <a class="text-#E6002D ml-20px font-700 cursor-pointer" @click="onClick">抢座</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import b1 from '~/assets/biaoyu1@2x.png'
  import b2 from '~/assets/biaoyu2@2x.png'
  import b3 from '~/assets/biaoyu3@2x.png'
  import b4 from '~/assets/biaoyu4@2x.png'
  import b5 from '~/assets/biaoyu5@2x.png'

  const props = defineProps(['index'])
  const emit = defineEmits(['trigger'])

  const kaibanList = [
    {
      label: '新媒体电商',
      addr: '京',
      time: '03.03',
    },
    {
      label: 'AGI本地生活',
      addr: '京',
      time: '03.03',
    },
    {
      label: '数据分析',
      addr: '京',
      time: '03.03',
    },
    {
      label: '新媒体电商',
      addr: '川',
      time: '03.03',
    },
    {
      label: 'AGI本地生活',
      addr: '川',
      time: '03.03',
    },
    {
      label: '数据分析',
      addr: '川',
      time: '03.03',
    },
    {
      label: '新媒体电商',
      addr: '京',
      time: '03.03',
    },
    {
      label: '数据分析',
      addr: '京',
      time: '03.03',
    },
  ]

  const shizi = ['殿堂级讲师、世界500强项目经验']
  const ziliao = ['视频教程、原创教材、课程咨询']

  const imgs: any[] = [b1, b2, b3, b4, b5]
  const jiuyes = [
    [
      {
        name: '李*婷',
        company: '北京中大*农',
        zhuanye: '电商主播',
        salary: '月薪8000元+提成+五险一金',
      },
      {
        //
        name: '李*杰',
        company: '太原海*直播',
        zhuanye: '电商运营',
        salary: '月薪5000元+提成+五险一金',
      },
      {
        name: '吴*东',
        company: '北京博*恒远',
        zhuanye: '电商运营',
        salary: '月薪6000元+提成+五险一金',
      },
    ],
    [
      {
        name: '郝*凤',
        company: '上海外派*度 ',
        zhuanye: '数据分析',
        salary: '月薪7500元+五险一金',
      },
      {
        name: '李*鑫',
        company: '北京踏*河',
        zhuanye: '数据分析',
        salary: '月薪9000元+五险一金',
      },
      {
        name: '邱*',
        company: '北京外派*耀',
        zhuanye: '数据分析',
        salary: '月薪7300元+五险一金',
      },
    ],
    [
      {
        name: '吴*军',
        company: '中大*农',
        zhuanye: '本地生活',
        salary: '月薪7000元+提成+五险一金',
      },
      {
        name: '李*杰',
        company: '太原海*直播 ',
        zhuanye: '电商运营',
        salary: '月薪5000元+提成+五险一金',
      },
      {
        name: '李*婷',
        company: '中大*农',
        zhuanye: '电商主播',
        salary: '月薪8000元+提成+五险一金',
      },
    ],
    [
      {
        name: '郭*',
        company: '北京汇**景 ',
        zhuanye: '后期制作',
        salary: '月薪8000元+五险一金',
      },
      {
        name: '康*',
        company: '北京心*网络',
        zhuanye: '剪辑师',
        salary: '月薪9000元+五险一金',
      },
      {
        name: '徐*',
        company: '北京豪*网络',
        zhuanye: '短视频剪辑',
        salary: '月薪8000元+五险一金',
      },
    ],
    [
      {
        name: '李*婷',
        company: '北京中大*农',
        zhuanye: '电商主播',
        salary: '月薪8000元+提成+五险一金',
      },
      {
        name: '刘*',
        company: '武汉柏*亚',
        zhuanye: '电商主播',
        salary: '月薪10000元+提成+五险一金',
      },
      {
        name: '王*龙',
        company: '北京**酒业',
        zhuanye: '电商主播',
        salary: '月薪6000元+提成+五险一金',
      },
    ],
  ]
  const kechengs = [
    ['四大优势、一站直通新媒体新职业', '五大课程模块、覆盖全场景全媒体运营'],
    ['数字化时代，企业数字化和智能化转型，势不可挡', '行业资深运营大咖手把手教'],
    ['企业级真实战全程陪伴，学完课直接胜任就业岗位', '2025抖音本地生活流量爆发，企业需求日益增长'],
    ['挑战从0制作视觉魔法，影视特效大师班', '岗位选择多，就业薪资高'],
    [
      '各大企业紧缺岗位，0门槛入行，底薪高、提成无上限',
      '全程组团分工真直播，从不会说到4小时流畅不卡断',
    ],
  ]

  const img = computed(() => imgs[props.index])
  const jiuye = computed(() => jiuyes[props.index])
  const kecheng = computed(() => kechengs[props.index])

  function onClick() {
    emit('trigger')
  }
</script>
<style lang="scss" scoped>
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .title-box {
    border-bottom: 2px solid #f3f3f3;
    padding-bottom: 5px;
    font-weight: 700;
    font-size: 18px;
    color: #020202;
    position: relative;
    &::after {
      content: '';
      display: block;
      background: linear-gradient(-90deg, #3f6cf6, #ed6d8c);
      @apply absolute bottom--2px w-35px h-2px;
    }

    .sub-title {
      font-size: 14px;
      text-align: left;
      color: #e6002d;
    }
  }

  .left-box {
    flex: 1;
  }
  .right-box {
    @apply w-278px ml-30px;
    li {
      @apply h-53px flex items-center;
      &:nth-child(2n) {
        @apply bg-#DBE3FD;
      }
      &:nth-child(2n + 1) {
        @apply bg-#F2F2F2;
      }
    }
  }
</style>
