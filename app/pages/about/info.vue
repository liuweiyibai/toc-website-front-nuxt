<template>
  <div>
    <AboutHeader />

    <div class="mt-40px w-1200px mx-auto h-557px bg">
      <div class="pt-49px pl-63px pr-560px">
        <div class="text-bg uppercase text-16px lh-16px">Company profile</div>
        <div class="mt-20px text-#333333 text-24px lh-24px font-700">集团简介</div>
        <div class="mt-35px lh-22px text-12px text-#666">
          创联教育是一家终身教育培训平台。业务覆盖职业教育、继续教育、技能评价、人力资源服务，以数字化、智能化为核心，为政府、院校、企事业单位、个人提供综合解决方案。<br />
          创联教育始终以内容建设为先导，推进职业教育课程与教学改革，优化课程体系架构逻辑，根据专业人才培养目标开发模块化的成果导向课程。建设关联性高、兼容性好、扩展性强，相互支持的课程链和课程生态。现已自主开发一大批具有知识产权的科目课程,建立了专业技术人员、职业技能人员、企事业人员、公务员四个维度的课程资源体系。汇聚了包括两院院士、重点骨干企业负责人、一线培训专业专家在内的师资库资源近千人，适合不同学员群体的不同学习需求。<br />
          2021年，创联教育启动数字化智能中台建设。基于智能中台打造的智能学习云平台、职业技能培训监管平台、企业培训SaaS学习平台、考试云、内容云、云直播等平台助力创联各条业务线发展。CHRT在线培训云平台是创联教育的旗舰产品，它秉承创联教育10余年深耕大规模网络培训教育领域的应用实践，采用学习资源计划能力素质模型管理思想，基于“公共服务、智能管理、开放共享”的理念，涵盖了组织管理、培训资源管理、培训管理、考试管理、在线学习、统计分析等各细分领域，是全面针对组织型学习/培训活动进行全流程智能化管理的软件系统,为学员提供智能化自适应学习服务及精准推荐就业服务，为运营和管理人员提供智能化运营和精细化管理服务。<br />
          专业、坚持、开放、创新，创联教育致力于打造中国特色的职业教育和人才服务品牌，以技术创新和优质服务为核心，助推国内职业人才结构转型升级，共创中国职业教育的美好未来！
        </div>
      </div>
    </div>

    <div class="shuju-bg w-1200px mx-auto mt-58px h-390px flex items-center justify-center">
      <div class="mr-80px last:mr-0 text-#fff text-center" v-for="item in shujus" :key="item.value">
        <div class="text-35px lh-35px font-700">{{ item.value }}</div>
        <div class="mt-37px text-16px lh-16px">{{ item.label }}</div>
      </div>
    </div>

    <div class="w-1200px mx-auto mt-40px">
      <div
        v-for="(item, index) in shuju2"
        :key="index"
        class="flex pt-38px pb-50px border-b-2px border-b-solid border-b-#f8f8f8 last:border-b-0"
      >
        <img
          :src="item.icon"
          :style="{ height: `${item.height}px`, width: `${item.width}px` }"
          alt=""
          class="mr-68px"
        />

        <div class="w-320px text-#333333 text-20px lh-22px font-700 mr-80px">{{ item.label }}</div>
        <div class="flex-1 text-#666666 text-14px">{{ item.value }}</div>
      </div>
    </div>

    <div class="w-full bg-#F1F1F1 pt-80px pb-80px">
      <div class="mx-auto w-1200px h-480px flex">
        <div class="flex-1 relative" :class="item.cls" v-for="(item, index) in shuju3" :key="index">
          <div class="absolute left-48px bottom-48px right-56px">
            <div
              class="uppercase text-[#3F6CF6] text-16px lh-16px"
              :class="{ 'text-white': index === 0 }"
              >{{ item.en }}</div
            >
            <div
              class="mt-22px text-#333 text-24px lh-24px font-700"
              :class="{ 'text-white': index === 0 }"
              >{{ item.label }}</div
            >
            <div
              class="mt-40px text-#666 text-16px lh-26px font-400"
              :class="{ 'text-white': index === 0 }"
              >{{ item.value }}</div
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import j1 from '~/assets/jiyu-01@2x.png'
  import j2 from '~/assets/jiyu-02@2x.png'
  import j3 from '~/assets/jiyu-03@2x.png'
  import j4 from '~/assets/jiyu-04@2x.png'
  import j5 from '~/assets/jiyu-05@2x.png'
  import { useHead } from '@unhead/vue'
  definePageMeta({ layout: false })
  useHead({
    title: '创联教育简介-港交所上市教育公司_终身职业教育倡导者',
    meta: [
      {
        name: 'description',
        content:
          '关于创联教育,创联教育成立于2011年,并于2013年在港交所上市。是一家提供“一站式职业培训”综合服务的教培机构,业务覆盖职业教育全产业链,下设分子公司47家,累计培训学员4000万人.',
      },
      {
        name: 'keywords',
        content: '创联教育简介,创联,创联教育,终身教育培训平台',
      },
    ],
  })
  const shujus = [
    {
      label: '个国家部委',
      value: '6',
    },
    {
      label: '个省/自治区/直辖市',
      value: '29',
    },
    {
      label: '余个在线学习平台',
      value: '200',
    },
    {
      label: '家子公司',
      value: '47',
    },
    {
      label: '人次服务规模',
      value: '4000w',
    },
  ]

  const shuju2 = [
    {
      label: '新时代，新机遇。',
      value:
        '创联教育坚决贯彻国家职业教育改革和人才评价机制改革精神，积极参与国家新职业标准体系建设，以标准为龙头，围绕新职业开展人才培养、人才评价、人才交易、人才发展一站式全链条服务，推动新职业快速发展。',
      icon: j1,
      width: 32,
      height: 27,
    },
    {
      label: '发挥优质资源效用，助力改善职业教育产业素质提升。',
      value:
        '创联教育以内容建设为先导，推进职业教育课程与教学改革，优化课程体系架构逻辑，根据专业人才培养目标开发模块化的成果导向课程，建设关联性高、兼容性好、扩展性强，相互支持的课程链和课程生态。充分发挥创联教育优质资源的效用，助力改善职业教育产业素质提升。',
      icon: j2,
      width: 27,
      height: 27,
    },
    {
      label: '整合国内外职业教育、人才服务、产业孵化优质资源',
      value:
        '整合国内外职业教育、人才服务、产业孵化优质资源，创联教育积极拥抱5G新技术，提升职业教育信息化建设水平，与中国移动紧密合作，联合开发智慧职校、云考场、虚拟实训、云竞赛、招考录培一体化平台等技术产品，打造场景化、集职业教育培训和职业人才交流于一体的教育和人才综合服务的引领平台。',
      icon: j3,
      width: 27,
      height: 21,
    },
    {
      label: '深耕全国市场渠道网络建设',
      value:
        '创联教育深耕全国市场渠道网络建设，落地大型综合服务培训基地，下设分子公司47家，服务覆盖中国29个省、自治区、直辖市，280余个地市。布局职业学校建设，发力大湾区、长三角、成渝经济圈，形成研发、教学、人力资源服务和市场渠道的快速响应能力，提供垂直一体化价值服务链条。',
      icon: j4,
      width: 30,
      height: 31,
    },
    {
      label: '专业、坚持、开放、创新',
      value:
        '专业、坚持、开放、创新，创联教育致力于打造中国特色的职业教育和人才服务品牌，并努力成为助推国内职业人才结构转型升级的重要力量。',
      icon: j5,
      width: 27,
      height: 31,
    },
  ]

  const shuju3 = [
    {
      label: '愿景',
      value:
        '深耕继续教育市场，拓展新职教，打造终身学习、促进就业和个人职业生涯发展的国家级职业教育品牌。',
      en: 'Vision',
      cls: 'bg1',
    },
    {
      label: '使命',
      value: '为学习者提供贯穿职业生涯全过程服务。',
      en: 'Mission',
      cls: 'bg2',
    },
  ]
</script>

<style lang="scss" scoped>
  .bg {
    background: url(../../assets/jianjie-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }

  .text-bg {
    background-image: linear-gradient(to right, #3f6cf6, #eb6d8c); // 背景线性渐变
    // color: #3f6cf6; // 兜底颜色，防止文字裁剪不生效
    background-clip: text;
    -webkit-background-clip: text; // 背景被裁减为文字的前景色
    -webkit-text-fill-color: transparent; // 文字填充为透明，优先级比color高。
  }

  .shuju-bg {
    background: url(../../assets/shuju-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }

  .bg1 {
    background: url(../../assets/yuanjing-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }
  .bg2 {
    background: url(../../assets/shiming-bg@2x.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
