<template>
  <TeacherTitleBox title="十余年教研实力积累 助力学员职场飞跃">
    <span>紧跟前沿技术，通过对导师专业技能的深度提升，增强教学能力，</span>
    <span>确保授课质量，为每一节课程负责到底！</span>
  </TeacherTitleBox>

  <div class="card">
    <div class="w-1200px h-400px bg-white overflow-hidden rounded-20px shadow flex">
      <div class="w-515px h-full">
        <img :src="img1" alt="" class="w-full h-full" />
      </div>
      <div class="flex-1 overflow-hidden pt-21px">
        <el-tabs v-model="activeName" class="demo-tabs">
          <el-tab-pane v-for="item in list" :label="item.label" :name="item.value">
            <div class="pl-77px pr-62px">
              <div
                class="flex text-14px lh-20px text-#333 items-start mt-20px first:mt-24px"
                v-for="text in item.list"
              >
                <div class="dot mt-4px flex-shrink-0"></div>
                <div>{{ text }}</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <div class="flex justify-between pl-73px pr-67px mt-38px">
          <div class="s-btn" @click="onKeFuAction">
            <span>了解更多</span>
            <img :src="you" alt="" />
          </div>
          <div class="flex gap-8px">
            <div class="group w-45px h-45px cursor-pointer">
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
            <div class="group w-45px h-45px cursor-pointer">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import you from '~/assets/teacher-page/右@2x.png'
  import img1 from '~/assets/teacher-page/shiyunian-1@2x.png'
  import img2 from '~/assets/teacher-page/shiyunian-2@2x.png'
  import img3 from '~/assets/teacher-page/shiyunian-3@2x.png'
  import { onKeFuAction } from '~/util'
  const activeName = ref('1')
  const list = [
    {
      label: '笃行精进',
      value: '1',
      img: img1,
      list: [
        '每周精心策划系列活动，促进教师专业成长。深入教研活动让教师共探教学难题，分享经验，激发创新思维。',
        '定期开展教学功底测试，以实战、理论考核等形式检验并提升教学技能与理论水平。',
        '定期公开课竞赛鼓励教师展示教学风采，锻炼课堂掌控力，促进相互学习。',
        '各项举措共同构成提升教师团队教学能力与专业素养的全方位策略，旨在打造业务精湛、充满活力的高素质教师队伍',
      ],
    },
    {
      label: '专注教研',
      value: '2',
      img: img2,
      list: [
        '定期组织教师团队深入探讨课程设计，不仅聚焦于内容的创新性与实用性，还注重教学方法的多样化与互动性。',
        '通过分享各自的教学心得与成功案例，教师们相互借鉴，共同探索更高效的教学策略。',
        '这一系列交流活动有效促进了教学质量的稳步提升，同时也极大地激发了学生的学习兴趣，使得课堂学习氛围更加活跃，学生在课堂上的学习效率得到了显著提升，为培养全面发展的高素质人才奠定了坚实基础',
      ],
    },
    {
      label: '持续提升',
      value: '3',
      img: img3,
      list: [
        '多元化教学模式，包括批课、赛课与合作教研，旨在全方位促进教学质量的稳步提升。',
        '批课通过集体评议，精益求精，确保每一堂课都达到高标准；赛课则激发教师间的良性竞争，推动创新教学方法的应用；',
        '合作教研鼓励跨学科交流，共享教育资源，共同攻克教学难题。仅增强了教师队伍的专业能力，更全力为学生的学习效果负责，助力学生在知识的海洋中扬帆远航，实现全面发展。',
      ],
    },
  ]
</script>

<style lang="scss" scoped>
  .card {
    @apply w-full h-540px mt-27px flex items-center justify-center;
    background: url(../../assets/teacher-page/shiyunian-bg@2x.png) no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .demo-tabs {
    :deep(.el-tabs__header) {
      .el-tabs__nav-wrap::after {
        height: 1px;
      }
      .el-tabs__active-bar.is-top {
        height: 3px;
        bottom: 1px;
        background: linear-gradient(90deg, #3f6cf6, #e96d8e);
      }

      .el-tabs__item {
        @apply text-22px font-400 text-#333 pb-15px px-66px;
        &.is-active {
          @apply text-#446CF3;
        }
        &:last-child {
          @apply pr-0;
        }
      }
    }
  }

  .dot {
    width: 9px;
    height: 9px;
    background: #446cf3;
    border-radius: 50%;
    margin-right: 10px;
  }

  .s-btn {
    @apply w-170px h-40px rounded-8px bg-#3D6CF6  justify-center items-center lh-40px text-white text-16px flex cursor-pointer transition-all;
    img {
      @apply w-19px h-8px ml-16px;
    }
    &:hover {
      background: linear-gradient(90deg, #3f6cf6, #f06d8a);
    }
  }
</style>
