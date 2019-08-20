<template>
  <div>
    <div>页面b-x</div>
    <br><hr><br>
    <div>b-x</div>
    <PrivateComponent />
  </div>
</template>

<script>
import PrivateComponent from './components/PrivateComponent'

export default {
  components: {
    PrivateComponent
  }
}
</script>
