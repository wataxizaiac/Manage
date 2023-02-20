<template>
  <div>
    <el-menu router default-active='2' class='el-menu-vertical-demo'>
      <el-menu-item v-for='item in list' :key='item.path' :index='item.path'>
        <component :is='item.meta.icon' class='icons'></component>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts' setup>
const router = useRouter()
const list = router.getRoutes().filter(item => item.meta.isShow)
console.log(list)
</script>

<style scoped lang='scss'>
:deep(.el-menu-item) {
  justify-content: center;

  .icons {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
}
</style>