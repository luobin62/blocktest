<template>
  <div id="app">
    <div class="bnts">
      <el-button @click="bntf">首页</el-button>
      <el-button @click="bntc">留言页</el-button>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  methods: {
    bntf() {
      console.log(222)
      this.$router.push('/home')
    },
    bntc() {
      console.log(111)
      this.$router.push('/comment')
    }
  }

}
</script>

<style>

</style>
