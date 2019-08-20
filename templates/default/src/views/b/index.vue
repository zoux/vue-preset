<template>
  <div>
    <div>page B</div>
    <br><hr><br>
    <HelloWorld />
    <router-view/>
  </div>
</template>

<script>
import { HelloWorld } from '@/components/import'

export default {
  components: {
    HelloWorld
  }
}
</script>
