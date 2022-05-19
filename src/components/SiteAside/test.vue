<template>
  <div class="aside">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from './index.vue'
export default {
  components:{
    SiteAside
  }
}
</script>

<style lang="less" scoped>
.aside{
  width: 20%;
  height: 100vh;
}
</style>