<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="isLoading"
  >
    <!-- 容下轮播图片的容器 -->
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <!-- 向上轮播按钮 -->
    <div v-show="index != 0" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon Icontype="arrowUp" class="icon" />
    </div>
    <!-- 向下轮播按钮 -->
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon Icontype="arrowDown" class="icon" />
    </div>
    <!-- 标志器 -->
    <ul class="indicator active">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Carouselitem from "./Carouselitem.vue";
import { getBanners } from "@/api/banner";
import vLoading from "@/components/directives/loading.js";

export default {
  directives: {
    loading: vLoading,
  },
  components: {
    Icon,
    Carouselitem,
  },
  data() {
    return {
      isLoading: true,
      banners: [],
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0,
      switching: false, //是否正在切换
    };
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  mounted() {
    //ref这个属性只有在挂载完成的时候才可以获取到
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      // console.log(-this.index * this.containerHeight)
      return -this.index * this.containerHeight + "px";
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // console.log(this.switching)
      if (this.switching) {
        // this.switching = false
        return;
      }
      //e.deltaY指的是Y轴方向滚动的幅度
      if (e.deltaY < -100 && this.index > 0) {
        //向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 100 && this.index < this.banners.length - 1) {
        //向下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: @dark;

  // 测试
  // width: 60%;
  // height: 40%;
  // overflow: visible;
  // border: 2px solid #008c8c;
  // margin: 100px auto;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  @gap: 25px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
