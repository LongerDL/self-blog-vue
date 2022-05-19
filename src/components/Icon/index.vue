<template>
  <i class="iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
  props: {
    Icontype: {
      type: String,
      required: true,
    },
  },
  computed:{
    fontClass(){
      // console.log(Object.keys(classMap))
      return classMap[this.Icontype]
    }
  }
};
</script>

<style scoped>
/* 导出css的样式 */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color: #000;
  font-size: 26px;
}
</style>
