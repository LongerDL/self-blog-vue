<template>
  <div>
    <h1>App组件</h1>
    <Icon Icontype="home"/>
    <Icon Icontype="mail"/>
  </div>
</template>

<script>
import Icon from "./";
export default {
  components: {
    Icon,
  },
};
</script>