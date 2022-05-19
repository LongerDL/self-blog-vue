<template>
  <div class="image-loader-container">
    <!-- 占位图 -->
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" />
    <!-- 原图 -->
    <img
      @load="handleload"
      class="origin"
      :src="src"
      :style="{ opacity: originOpacity, transition:`${duration}ms`}"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 4000,
    },
  },
  data() {
    return {
      originLoaded: false, //原图是否加载完毕
      everythingDone: false, // 是否一切都尘埃落定了
    }
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0
    },
  },
  methods: {
    handleload() {
      this.originLoaded = true
      // console.log('子组件原图加载完毕')
      setTimeout(() => {
        this.everythingDone = true
        this.$emit('loadover')
      }, this.duration)
    },
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
    .self-fill();
  }
  .placeholder {
    // 虚化图像
    filter: blur(2vw);
  }
  // .origin{
  //    transition: all 3s
  // }
}
</style>
