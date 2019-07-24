<template>
  <div v-on="$listeners" class="base-wrap" :style="paddingStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: [String, Number],
      default: '0'
    },
    left: {
      type: [String, Number],
      default: '0'
    },
    right: {
      type: [String, Number],
      default: '0'
    },
    bottom: {
      type: [String, Number],
      default: '0'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    paddingStyle () {
      return {
        paddingTop: `${this.top}px`,
        paddingLeft: `${this.left}px`,
        paddingRight: `${this.right}px`,
        paddingBottom: `${this.bottom}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-wrap {
    position: relative;
  }
</style>
