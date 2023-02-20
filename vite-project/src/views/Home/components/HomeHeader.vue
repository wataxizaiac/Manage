<template>
  <div class='header'>
    <div class='header_left'>
      <el-button size='default' @click='home'>
        <el-icon :size='20' class='header_icon'>
          <Menu />
        </el-icon>
      </el-button>
      <div class='left_item'>
        首页
      </div>
    </div>
    <div class='header_right'>
      <el-dropdown>
        <el-avatar class='el-dropdown-link' :src='src'>
          <img :src='errsrc' />
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click='LogOut()'>
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang='ts' setup>
const router = useRouter()
let src = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const errsrc = new URL('/src/assets/bg.jpg', import.meta.url).href
const home = () => {
  router.replace('/')
} 
const LogOut = () => {
  ElMessageBox.confirm('确定退出登录吗？', '退出登录', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      localStorage.removeItem('token')
      router.replace('/login')
      ElMessage({
        type: 'success',
        message: '退出登录成功！'
      })
    })

}
</script>

<style scoped lang='scss'>
.header {
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header_left {
    display: flex;
    align-items: center;

    .left_item {
      margin-left: 20px;
    }
  }
}
</style>