<template>
  <div id='main'>
    <el-row>
      <el-col :span='6'>
        <div class='box'></div>
      </el-col>
      <el-col :span='6'>
        <div class='box'></div>
      </el-col>
      <el-col :span='6'>
        <div class='box'></div>
      </el-col>
      <el-col :span='6'>
        <div class='box'></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped lang='scss'>
#main {
  width: 100%;
  height: 100%;

  .box {
    flex: 1;
    height: 108px;
    background-color: white;
    margin: 0 20px;
  }
}
</style>