<template>
  <div class='common-layout'>
    <el-container>
      <el-aside width='200px'>
        <HomeAside />
      </el-aside>
      <el-container>
        <el-header>
          <HomeHeader />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import Main from './Main.vue'
</script>

<style scoped lang='less'>

</style>
