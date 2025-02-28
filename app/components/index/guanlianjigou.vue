<template>
  <div class="mt-83px" id="fenzhijigou">
    <div class="w-1200px mx-auto text-center">
      <h3 class="lh-36px text-36px font-700 text-#333 m-0">创联旗下及关联机构</h3>
    </div>
    <div class="mt-24px w-1200px mx-auto flex">
      <div class="flex-1 last:mr-0" v-for="(item, index) in list" :key="index">
        <img :src="item" alt="" class="h-62px" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import o1 from '../../assets/01@2x.png'
  import o2 from '../../assets/02@2x.png'
  import o3 from '../../assets/03@2x.png'
  import o4 from '../../assets/04@2x.png'

  const list = [o1, o2, o3, o4]
</script>
