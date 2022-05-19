<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="https://img0.baidu.com/it/u=1794455602,3389966975&fm=26&fmt=auto"
      :size="150"
    />
  </div>
</template>

<script>
import Avatar from "./"
export default {
  name:"App",//如果组件没有在注册的时候指定名字，那么就使用该名字
  components:{
    Avatar
  }
}
</script>