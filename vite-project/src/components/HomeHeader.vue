<template>
  <div>
    <el-header>
      <div class='header_left'>
        <el-icon class='header_icon'>
          <i-ep-Menu />
        </el-icon>
        <span>
          首页
        </span>
      </div>
      <div class='header_right'>
        <el-avatar :src='src'>
          <img :src='errsrc' />
        </el-avatar>
      </div>
    </el-header>
  </div>
</template>

<script lang='ts' setup>
let src = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const errsrc = new URL('/src/assets/bg.jpg',import.meta.url).href

// const errorHandler = () => {
//   console.log(1111)
//   return false
  
// }
</script>

<style scoped lang='less'>
&:deep(.el-header) {
  background: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_icon{
    padding: 5px 10px;
    background-color:white
  }
}
</style>