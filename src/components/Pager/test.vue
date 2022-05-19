<template>
  <div>
    <h1>App组件</h1>
    <Pager
      :current="current"
      :total="total"
      @PageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from './index.vue'
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 4,
      total: 329,
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage
      console.log('页码改变了', newPage, this.current)
    },
  },
}
</script>
