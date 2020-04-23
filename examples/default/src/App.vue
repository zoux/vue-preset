<template>
  <div id="app">
    <div class="some-class">APP</div>
    <div>\{{ common }}</div>
    <button @click="addCommon">common++</button>
    <br><hr><br>
    <div id="nav">
      <router-link to="/"><i class="iconfont icon-right"></i>a</router-link> |
      <router-link to="/b"><i class="iconfont icon-right"></i>b</router-link> |
      <router-link to="/b/x"><i class="iconfont icon-right"></i>b-x</router-link>
    </div>
    <br><hr><br>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import request from '@/services/request'
import api from '@/services/api'
import axios from '@/services/axios'
import { REGEXP_PHONE } from '@/services/constants'
import { computeClass } from '@/services/utils'

export default {
  computed: {
    ...mapState([
      'common'
    ])
  },
  async created () {
    /* eslint-disable */
    console.info(
      this.$request, '\n',
      this.$api, '\n',
      this.$axios, '\n',
      this.$constants, '\n',
      this.$utils, '\n',
    )
    console.info(
      request, '\n',
      api, '\n',
      axios, '\n',
      REGEXP_PHONE, '\n',
      computeClass, '\n',
    )

    const params = {}
    const options = {}
    try {
      await this.$request(this.$api.topics, params, options)
    } catch (e) {}
  },
  methods: {
    ...mapActions([
      'UPDATE_COMMON'
    ]),
    addCommon () {
      this.UPDATE_COMMON({ limit: 5 })
      this.UPDATE_COMMON({ limit: 5 })
    }
  }
}
</script>

<style lang="scss">
  @import "assets/style/common";
  @import "assets/iconfont/iconfont.css";

  .some-class {
    color: $color;
  }
</style>
