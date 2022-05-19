<template>
  <div class="img-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @loadover="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from './index.vue'
export default {
  components: {
    ImageLoader,
  },
  methods:{
    handleLoaded(){
      console.log("图片加载完毕")
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.img-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  .self-center();
}
</style>
