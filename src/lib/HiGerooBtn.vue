<template>
  <div>
    <span>HiGeroo</span>
    <button @click="onTestClick">点击</button>
  </div>
</template>
<script>
// 引入依赖项
export default {
  name: "hi-geroo-btn",
  methods: {
    onTestClick() {
      console.log("test success");
    }
  }
};
</script>