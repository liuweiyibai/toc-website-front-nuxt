<template>
  <div class="mt-80px" id="intro">
    <div class="w-1200px mx-auto text-center">
      <h3 class="lh-36px text-36px font-700 text-#333 m-0">创联教育集团中心基地及分支机构</h3>
      <p class="m-0 mt-16px text-14px font-400 text-#999 lh-14px"
        >创联教育历经15年发展全国各地均有实体中心，真正做到一地学习，可全国就业，全国校区直营确保教育品质</p
      >
    </div>

    <div class="flex w-1200px mx-auto mt-37px h-295px">
      <div class="flex flex-col w-250px pt-16px">
        <div
          class="my-btn"
          :class="{ active: active === index }"
          v-for="(item, index) in list"
          :key="index"
          @mouseenter="active = index"
        >
          {{ item }}
        </div>
      </div>
      <div class="card" v-if="active === 0">
        <div class="flex">
          <div
            v-for="(item, index) in peixunjidi"
            :key="index"
            class="btn2"
            :class="{ active: peixunjidiActive === index }"
            @mouseenter="peixunjidiActive = index"
          >
            {{ item.title }}
          </div>
        </div>

        <div v-html="activePeixunjidi.desc" class="text-#666666 mt-17px lh-24px text-14px"></div>
        <div class="flex mt-10px">
          <img
            v-for="(it, iti) in activePeixunjidi.images"
            :key="iti"
            :src="it"
            alt=""
            class="w-210px h-120px mr-13px last:mr-0"
          />
        </div>
      </div>

      <!-- 分支机构 -->
      <div class="card pt-30px pb-20px px-35px" v-else-if="active === 1">
        <div flex flex-wrap class="mx--7px my--12px">
          <div
            class="zigognsi-box"
            v-for="(item, index) in zigongsi1"
            @mouseenter="onZiGongsi(0, index)"
            :class="{ active: zigongsiColIndex === 0 && zigongsiIndex === index }"
            :key="index"
            >{{ item.title }}</div
          >
        </div>
        <IndexFenzhiBox v-if="zigongsiColIndex === 0" :item="currentZigongsi" />

        <div flex flex-wrap class="mx--7px my--12px">
          <div
            class="zigognsi-box"
            v-for="(item, index) in zigongsi2"
            @mouseenter="onZiGongsi(1, index)"
            :class="{ active: zigongsiColIndex === 1 && zigongsiIndex === index }"
            :key="index"
            >{{ item.title }}</div
          >
        </div>
        <IndexFenzhiBox v-if="zigongsiColIndex === 1" :item="currentZigongsi" />

        <div flex flex-wrap class="mx--7px my--12px">
          <div
            class="zigognsi-box"
            v-for="(item, index) in zigongsi3"
            @mouseenter="onZiGongsi(2, index)"
            :class="{ active: zigongsiColIndex === 2 && zigongsiIndex === index }"
            :key="index"
            >{{ item.title }}</div
          >
        </div>
        <IndexFenzhiBox v-if="zigongsiColIndex === 2" :item="currentZigongsi" />
      </div>

      <!-- 直营校区 -->
      <div v-else-if="active === 2" class="card pt-30px pb-25px px-35px flex">
        <div
          v-for="(item, index) in xiaoqu"
          :key="index"
          class="flex-1 ml-20px first:ml-0 xiaoqu-card group relative"
        >
          <img :src="xiaoquImg" alt="" class="w-76px h-85px absolute top-6px right-0" />
          <div class="text-#3F6CF6 group-hover:text-#fff">
            <div class="text-20px tracking-4px">{{ item.title }}</div>
            <div class="mt-8px tracking-1px text-9px">{{ item.en }}</div>
          </div>

          <div class="h-1px flex-1 ml-20px bg-white mt-27px group-hover:text-op-10"></div>

          <div class="mt-14px text-#666666 text-12px group-hover:text-white">
            <div class="lh-24px">
              <span>联系电话：</span>
              <span>{{ item.phone }}</span>
            </div>
            <div class="lh-24px">
              <span>校区地址：</span>
              <span>{{ item.addr }}</span>
            </div>
          </div>

          <div
            @click="onKeFuAction"
            class="mt-16px w-160px h-26px rounded-full shadow bg-#3F6CF6 lh-26px text-center cursor-pointer absolute bottom-22px text-14px text-white zixun-btn border-1px border-white border-solid"
            >点击咨询在线客服</div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, watch } from 'vue'
  import guangxi1 from '../../assets/广西01@2x.png'
  import guangxi2 from '../../assets/广西02@2x.png'
  import guangxi3 from '../../assets/广西03@2x.png'
  import guangxi4 from '../../assets/广西04@2x.png'
  import sichuan1 from '../../assets/四川01@2x.png'
  import sichuan2 from '../../assets/四川02@2x.png'
  import sichuan3 from '../../assets/四川03@2x.png'
  import sichuan4 from '../../assets/四川04@2x.png'
  import xiaoquImg from '~/assets/xiaoqu@2x.png'
  import { onKeFuAction } from '~/util'
  import { useRoute } from 'vue-router'

  const active = ref(0)
  const peixunjidiActive = ref(0)
  const list = ['培训基地', '分支基地', '直营校区']
  const peixunjidi = [
    {
      title: '广西创联国培中心',
      desc: '广西创联国培中心位于南宁市，总面积约1万㎡。精心打造138间现代化客房，并配备有自助餐厅、停车场和4个不同规格的多功能会议室、170个智能化考试机位，能同时容纳近300人开展考培业务。<br/>与广西经济干部管理学院合作成立实习实训基地，为政府各部门、企事业单位提供规范化、标准化，性价比高的培训和接待服务。',
      images: [guangxi1, guangxi2, guangxi3, guangxi4],
    },
    {
      title: '四川创联国培基地',
      desc: '四川创联基地位于成都市，建筑面积约3万平方米，拥有现代化客房245间，能同时容纳500人食宿和1000余人培训。5种不同规格的会议室均配备了先进的数字化教学和反作弊中央监控系统。另配备有运动场、健⾝房及停车场等全业态服务设施。',
      images: [sichuan1, sichuan2, sichuan3, sichuan4],
    },
  ]
  const activePeixunjidi = computed(() => peixunjidi[peixunjidiActive.value])
  const zigongsiColIndex = ref(0)
  const zigongsiIndex = ref(0)
  const currentZigongsi = computed(() => {
    if (zigongsiColIndex.value === 0) {
      return zigongsi1[zigongsiIndex.value]
    }
    if (zigongsiColIndex.value === 1) {
      return zigongsi2[zigongsiIndex.value]
    }
    if (zigongsiColIndex.value === 2) {
      return zigongsi3[zigongsiIndex.value]
    }
  })
  const zigongsi1 = [
    {
      title: '四川子公司',
      phone: '400-028-2575',
      addr: '成都市金牛区金凤凰大道606号15栋四川创联国培中心',
    },
    {
      title: '广西子公司',
      phone: '0771-3823690',
      addr: '南宁市鲁班路46号综合楼1楼1-5层',
    },
    {
      title: '甘肃子公司',
      phone: '0931-8732150',
      addr: '甘肃省兰州市城关区秦安路28号甘肃省服装大厦5楼523室',
    },
    {
      title: '河南子公司',
      phone: '0371-60900815',
      addr: '河南省郑州市金水区金水东路21号永和国际广场 B座709',
    },
    {
      title: '内蒙古子公司',
      phone: '0471-4960286',
      addr: '呼和浩特市玉泉区鄂尔多斯大街38号金宇国际写字楼6楼605、606',
    },
    {
      title: '上海子公司',
      phone: '021-62568219',
      addr: '上海市静安区天目中路267号蓝宝石大厦11B',
    },
    {
      title: '安徽子公司',
      phone: '15855133985',
      addr: '合肥市包河区淝河大厦B座30层3001',
    },
  ]

  const zigongsi2 = [
    {
      title: '海南子公司',
      phone: '0898-66731892',
      addr: '海南省海口市龙华区大同路29号海口国际金融大厦二楼',
    },
    {
      title: '江苏子公司',
      phone: '025-85617889',
      addr: '江苏省南京市栖霞区紫东创意园西区F1',
    },
    {
      title: '广东子公司',
      phone: '18683613799',
      addr: '广州市天河区高普路38号4层410',
    },
    {
      title: '重庆子公司',
      phone: '18180601868',
      addr: '重庆市渝北区佳乐紫光3007室',
    },
    {
      title: '贵州子公司',
      phone: '13439998741',
      addr: '贵州省贵阳市南明区花果园中央商务区6号2024',
    },
    {
      title: '福建子公司',
      phone: '15005085998',
      addr: '福州市鼓楼区湖东路168号宏利大厦1109室',
    },
    {
      title: '湖南子公司',
      phone: '13436604636',
      addr: '湖南省长沙市天心区嘉盛国际广场1019室',
    },
  ]

  const zigongsi3 = [
    {
      title: '攀枝花子公司',
      phone: '0812-3100107',
      addr: '攀枝花市东区三线大道北段10号学府广场1号楼二层B区4号',
    },
    {
      title: '吉林子公司',
      phone: '13321105775',
      addr: '吉林省长春市二道区吉林大路中邑大厦A座606室',
    },
    {
      title: '浙江子公司',
      phone: '15956058273',
      addr: '浙江省绍兴市颐高广场1栋602室',
    },
    {
      title: '陕西子公司',
      phone: '13001071113',
      addr: '陕西省西安市雁塔区科技路1号（紫薇龙腾新世界2504）',
    },
    {
      title: '云南子公司',
      phone: '18180601868',
      addr: '云南省昆明市五华区人才众创空间515',
    },
    {
      title: '江西子公司',
      phone: '19070908603',
      addr: '江西省南昌市青山湖区上海路东方银座2单元801',
    },
    {
      title: '山西子公司',
      phone: '13303513888',
      addr: '山西省太原市万柏林区柏林国际商务中心16层1616',
    },
  ]

  const xiaoqu = [
    {
      title: '北京校区',
      en: 'Beijing Campus',
      phone: '18310221840',
      addr: '北京市东城区和平里东街7号创联教育',
      img: '',
    },
    {
      title: '成都校区',
      en: 'Chengdu Campus',
      phone: '13880900114',
      addr: '成都市金牛区金凤凰大道606号15栋四川创联国培中心',
      img: '',
    },
    {
      title: '郑州校区',
      en: 'Zhengzhou Campus',
      phone: '13581632027',
      addr: '河南省郑州市金水区金水东路21号永和国际广场 B座709',
      img: '',
    },
    {
      title: '广州校区',
      en: 'Guangzhou Campus',
      phone: '13581632027',
      addr: '广州市天河区高普路38号4层410',
      img: '',
    },
  ]

  const route = useRoute()

  watch(
    route,
    () => {
      const { intro } = route.query
      if (intro) {
        if (intro === 'fenzhijigou') {
          active.value = 1
          return
        }
        if (intro === 'peixunjidi') {
          active.value = 0
          return
        }
        if (intro === 'zhiyingxiaoqu') {
          active.value = 2
          return
        }
      }
    },
    { immediate: true },
  )

  function onZiGongsi(colIndex: number, item: any) {
    zigongsiColIndex.value = colIndex
    zigongsiIndex.value = item
  }
</script>

<style lang="scss" scoped>
  .my-btn {
    @apply w-full h-70px rounded-35px mt-30px first:mt-0 font-700 text-#333 text-20px lh-70px text-center cursor-pointer transition-all;
    background: rgb(238, 238, 238);
    &.active,
    &:hover {
      color: #fff;
      background: linear-gradient(-90deg, #3f6cf6, #f06d8a);
      box-shadow: 0 11px 28px 0 #367bf55c;
    }
  }

  .card {
    @apply rounded-8px bg-white flex-1 ml-20px p-20px pl-25px;
    box-shadow: 0 0 29px 0 #367bf524;
  }

  .btn2 {
    @apply h-40px rounded-20px bg-white lh-40px px-18px mr-20px last:mr-0 cursor-pointer text-18px text-#333 transition-all;
    border: 1px solid #d2d2d2;
    &:hover,
    &.active {
      border-color: transparent;
      background: #3f6cf6;
      color: #fff;
    }
  }

  .zigognsi-box {
    @apply w-111.5px h-36.5px rounded-full mx-7px my-16px relative flex items-center justify-center cursor-pointer transition-all;
    color: #333333;
    font-size: 14px;
    border: 1px solid #3f6cf6;
    &.active,
    &:hover {
      background-color: #3f6cf6;
      color: #fff;
    }
  }

  .xiaoqu-card {
    box-shadow: 0 0 6px 1px #4848484a;
    border-radius: 3px 3px 3px 3px;
    background: #eeeeee;
    height: 100%;
    @apply transition-all pt-28px pl-18px;
    &:hover {
      background: linear-gradient(-138deg, #3f6cf6, #ec6d8c);
    }
    &:hover {
      .zixun-btn {
        background: linear-gradient(90deg, #f76d11, #ff90c9, #5281f5, #9065ff);
      }
    }
  }
</style>
