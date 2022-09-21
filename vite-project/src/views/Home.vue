<template>
  <div>
    <el-button type="primary" size="default" @click="onlist()"></el-button>

  </div>
</template>

<script lang='ts' setup>
import { getGoodsList } from '@/axios/api';
import router from '@/router';

const onlist = () => {
  getGoodsList()
      .then(res =>{
        console.log(res);
      })
      .catch(err =>{
        console.log(err);
      })
}
</script>

<style scoped lang='less'>

</style>