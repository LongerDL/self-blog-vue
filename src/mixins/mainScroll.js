export default function(refValue) {
    return {
      mounted() {
        //注册让滚动条回到顶部的事件
        this.$bus.$on("scrollToTop", this.scrollToTop);
        //监听滚动条，决定了回到顶部按钮是否显示
        this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
      },
      beforeDestroy() {
        this.$bus.$emit("mainScroll");
        this.$bus.$off("scrollToTop", this.scrollToTop);
        this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      },
      methods: {
        //让滚动条回到顶部
        scrollToTop(scrollTop) {
          this.$refs[refValue].scrollTop = scrollTop;
        },
        handleMainScroll() {
          this.$bus.$emit("mainScroll", this.$refs[refValue]);
        },
      },
    };
  }
  
// export default function(refValue) {
//     return {
//         mounted() {
//             this.$bus.$on("scrollToTop", this.scrollToTop)
//             this.$refs[refValue].addEventListener("scroll", this.handleScrollMove)
//         },
//         beforeDestroy() {
//             this.$bus.$off("scrollToTop", this.scrollToTop)
//             this.$refs[refValue].removeEventListener("scroll", this.handleScrollMove)
//         },
//         methods: {
//             scrollToTop(toTop) {
//                 this.$refs[refValue].scrollTop = toTop
//             },
//             handleScrollMove() {
//                 this.$bus.$emit("mainScroll", this.$refs[refValue])
//             }
//         }
//     }
// }