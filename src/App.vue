<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><i class="iconfont icon-right"></i>a</router-link> |
      <router-link to="/b"><i class="iconfont icon-right"></i>b</router-link> |
      <router-link to="/b/x"><i class="iconfont icon-right"></i>b-x</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$const, '\n', this.$utils, '\n', this.$api, '\n', this.$ajax)
    const params = {
      limit: 5
    }
    this.$api.topics(params)
  }
}
</script>

<style lang="scss">
  @import "./assets/style/common";
  @import "./assets/iconfont/iconfont.css";
</style>
