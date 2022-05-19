<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a href="#" @click="handleClick(1)" :class="{ none: current === 1 }"
      >|&lt;&lt;</a
    >
    <a
      href="#"
      @click="handleClick(current - 1)"
      :class="{ none: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      href="#"
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      href="#"
      @click="handleClick(current + 1)"
      :class="{ none: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      href="#"
      @click="handleClick(pageNumber)"
      :class="{ none: current === pageNumber }"
      >|&gt;&gt;</a
    >
  </div>
</template>

<style lang="less" scoped>
@import '~@/styles/var.less';
// 在样式里面写“~@”表示根目录
// 在脚本里面写“@”表示根目录
.pager-container {
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin: 20px 0;
  a {
    color: @primary;
    cursor: pointer;
    margin: 0 6px;
    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      cursor: text;
    }
    &:hover {
      color: @warn;
    }
    &.none {
      display: none;
    }
  }
}
</style>

<script>
export default {
  props: {
    //当前页码数
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量：每一页最多容纳多少个元素
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },
    //得到显示的最小数字
    visibleMin() {
      let min = Math.ceil(this.current - this.visibleNumber / 2)
      if (min < 1) {
        min = 1
      }
      return min
    },
    //得到显示的最大数字
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1
      if (max > this.pageNumber) {
        max = this.pageNumber
      }
      return max
    },
    //显示的数字页码范围
    numbers() {
      let nums = []
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i)
      }
      return nums
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1
      }
      if (newPage >= this.pageNumber) {
        newPage = this.pageNumber
      }
      // if (newPage === this.pageNumber) {
      //   return
      // }
      //抛出了一个名叫“PageChange”的事件，
      this.$emit('PageChange', newPage)
    },
  },
}
</script>
