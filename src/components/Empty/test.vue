<template>
  <div class="emptyFatherBox">
    <Empty />
  </div>
</template>

<script>
import Empty from './index.vue'
export default {
  components:{
    Empty,
  }
}
</script>

<style lang="less" scoped>
.emptyFatherBox{
  width: 100vw;
  height: 100vh;
}
</style>