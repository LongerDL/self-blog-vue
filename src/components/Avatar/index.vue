<template>
  <img
    class="avatar-img"
    :src="url"
    :style="{ width: 100 + 'px', height: 100 + 'px' }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url属性必须是一个字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 200,//设置默认值
    },
  },
};
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
}
</style>