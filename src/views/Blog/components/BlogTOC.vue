<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  created() {
    // window.setSelect = this.setSelect;
    this.debounceSetSelect = debounce(this.setSelect, 100);
    this.$bus.$on("mainScroll", this.debounceSetSelect);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.debounceSetSelect);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect() {
      // console.log("为了防抖");
      //根据h1标题距离顶部的范围判断该h1是否选中
      const range = 200;
      this.activeAnchor = "";
      for (const dom of this.doms) {
        if (!dom) {
          //dom如果存在才会运行后续代码
          continue;
        }
        let Domtop = dom.getBoundingClientRect().top;
        if (Domtop >= 0 && Domtop <= range) {
          //说明在范围之间
          this.activeAnchor = dom.id;
        } else if (Domtop > range) {
          //说明在可视区的下面
          return;
        } else {
          //说明在可视区的上面
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      const doms = [];
      const addDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addDoms(t.children);
          }
        }
      };
      addDoms(this.toc);
      return doms;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
