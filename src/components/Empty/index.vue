<template>
  <div class="emptyBox">
    <Icon Icontype="empty" class="iconfont-empty" />
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from '../Icon/index.vue'
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      required: false,
      default: '无数据',
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.emptyBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: @gray;
}
.iconfont-empty{
  font-size: 5rem;
  color: @gray;
}
</style>
