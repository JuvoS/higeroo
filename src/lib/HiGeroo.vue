<template>
  <div>
    <span>HiGeroo</span>
    <button @click="onTestClick"></button>
  </div>
</template>
<script>
// 引入依赖项
export default {
  name: "hi-geroo",
  props: ["options"],
  directives: {
    // 自定义指令
    comment: {
      bind: function(el, binding) {}
    }
  },
  methods: {
    onTestClick() {
      console.log("test success");
    }
  }
};
</script>