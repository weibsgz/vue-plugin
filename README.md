### 自定义指令(与上传无关)

可以处理一些复杂的 复用性高的 DOM 操作`./src/detectives`

### 注册组件（目的是上传 NPM）

入口文件是 `./src/plugins/index.js` 利用 require.context 循环 plugin 文件下下所有的.vue 文件 创造 install 方法 然后在 main.js 里 use

### 上传 NPM （修改 PACKAGE.JSON）

package.json 中

1. 确保 NAME 是独一无二的 比如此例（vue-weibin-plugin）

2. "lib":"vue-cli-service build --target lib --name vue-weibin-plugin --dest lib src/plugins/index.js"

"lib":"打包命令 --打包成一个 lib --name package.json 中的 name --dest lib 打包的路径(会打包在 src/lib)"

3. 确保 package.json 中的 `"private": false`

4. "license": "MIT", 开源协议

5. "main": "vue-weibin-plugin.umd.min.js", 设置入口文件

6. "description": "test 插件 按钮和 MSG",

### 开始上传 NPM

1. 要先注册过 NPM 用户名 weibsgz 我的密码（F2....wbwb）

2. npm login

3. npm publish

### 使用

1. npm i vue-weibin-plugin

2. main.js 中 `import weibinPlugin from "../node_modules/vue-weibin-plugin/lib/vue-weibin-plugin.common"`

3. main.js 里引用样式 `import '../node_modules/vue-weibin-plugin/lib/vue-weibin-plugin.css'`

4. Vue.use(weibinPlugin)

5. 页面中写逻辑 hello.vue 组件中

```
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-msg ref="vueMsg" />
    <vue-btn type="error" @click="test">测试MSG</vue-btn>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    test() {
      this.$refs.vueMsg.handleMsg("测试MSG");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


```
