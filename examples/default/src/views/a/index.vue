<template>
  <div>
    <div>page A</div>
    <br><hr><br>
    <BaseWrap top="20">\{{ a }}</BaseWrap>
    <button @click="addA">a++</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('a')

export default {
  computed: {
    ...mapState([
      'a'
    ])
  },
  methods: {
    ...mapActions([
      'UPDATE_A'
    ]),
    addA () {
      this.UPDATE_A()
    }
  }
}
</script>
