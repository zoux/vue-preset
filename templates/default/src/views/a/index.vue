<template>
  <div>
    <div>page A</div>
    <br><hr><br>
    <BaseWrap top="20">\{{ a }}</BaseWrap>
    <button @click="addA">a++</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('a', [
      'a'
    ])
  },
  methods: {
    ...mapActions('a', [
      'UPDATE_A'
    ]),
    addA () {
      this.UPDATE_A()
    }
  }
}
</script>
