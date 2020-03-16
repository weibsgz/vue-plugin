<template>
  <div class="hello">
    自动聚焦
    <input v-focus type="text" v-model="value" />

    <vue-btn type="error" @click="submit">测试MSG</vue-btn>

    <vue-msg ref="vueMsg" />

    <div class="main" v-clickoutside="handleHide">
      <button @click="show = !show">点击显示下拉菜单</button>
      <div class="dropdown" v-show="show">
        <div class="item"><a href="#">选项 1</a></div>
        <div class="item"><a href="#">选项 2</a></div>
        <div class="item"><a href="#">选项 3</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      value: "",
      show: false
    };
  },
  methods: {
    submit() {
      this.$nextTick(() => {
        this.$refs.vueMsg.handleMsg("测试MSG");
      });
    },
    handleHide() {
      this.show = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
}
.dropdown {
  position: absolute;
  left: 50%;
  top: 20px;
  margin-left: -100px;
  width: 200px;
  background-color: #ccc;
}
</style>
