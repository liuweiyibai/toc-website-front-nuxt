<template>
  <div class="w-1200px mx-auto flex h-76px">
    <div class="flex flex-1 pl-260px pt-18px justify-around items-center">
      <div v-for="(item, index) in list" :key="index" class="before-item">
        <div>
          <div class="flex items-end">
            <div class="flex items-center text-#3F6CF6 text-24px">
              <count-to :startVal="0" :endVal="item.value" :duration="3000" />
              <span >{{ item.unit }}</span>
            </div>
            <span v-if="item.label" class="text-#888888 text-14px font-400 ml-9px">{{ item.label }}</span>
          </div>
          <p class="mb-0 text-#888888 text-14px font-400">{{ item.des }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import * as VCount from 'vue3-count-to'
  const { CountTo } = VCount
  const list = [
    {
      label: '匠心磨砺',
      value: 15,
      unit: '年',
      des: '终身职教、始终如一',
    },
    {
      label: '',
      value: 29,
      unit: '个',
      des: '省/自治区/直辖市',
    },
    {
      label: '',
      value: 200,
      unit: '余个',
      des: '在线学习平合',
    },
    {
      label: '',
      value: 47,
      unit: '家',
      des: '子公司',
    },
    {
      label: '',
      value: 4000,
      unit: '万+',
      des: '人次服务规模',
    },
  ]
</script>

<style lang="scss" scoped>
  .before-item {
    @apply flex;
    &:last-child {
      &::after {
        content: none;
      }
    }
    &::after {
      content: '';
      @apply mx-36px mt-18px h-45px w-1px bg-#DCDCDC block;
    }
  }
</style>
