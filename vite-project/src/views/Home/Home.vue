<template>
  <div class='home'>
    <el-container>
      <el-aside width='200px'>
        <HomeAside />
      </el-aside>
      <el-container>
        <el-header>
          <HomeHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import HomeAside from './components/HomeAside.vue'
import HomeHeader from './components/HomeHeader.vue'
</script>

<style scoped lang='less'>
.home {
  height: 100%;
  &:deep(.el-header) {
    background: #333333;
  }

  &:deep(.el-container) {
    height: 100%;
  }
}
</style>
