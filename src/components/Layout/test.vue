<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">这是左边的内容</div>
      </template>
      <template>
        <div class="main">这是中间的内容</div>
      </template>
      <template #right>
        <div class="right">这是右边的内容</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
  components: { Layout },
}
</script>

<style lang="less" scoped>
.test-container {
  width: 80%;
  height: 400px;
  margin: 0 auto;
}
.left {
  width: 100px;
  height: 100%;
  background-color: lightcoral;
}
.main {
  width: 100%;
  height: 100%;
  background-color: lightgreen;
}
.right {
  width: 200px;
  height: 100%;
  background-color: lightyellow;
}
</style>
