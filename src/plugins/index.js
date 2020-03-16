// 第一种方式  手动引入
// import msg from "./msg/msg.vue";
// import button from "./button/button.vue";

// let plugin = {};

// plugin.install = Vue => {
//   Vue.component(msg.name, msg);
//   Vue.component(button.name, button);
// };

// export default plugin;

//第二种方式  利用require.context 循环所有插件vue文件引入

/**
 * params1:要查找的路径
 * params2:是否包含子文件查找
 * params3：正则筛选查找的文件
 */
const reqireCompent = require.context("./", true, /\.vue$/);
let plugin = {};
//想要在 main.js里use 必须有个install 方法
plugin.install = Vue => {
  if (plugin.install.installed) return;
  plugin.install.installed;

  reqireCompent.keys().forEach(file => {
    //第i个组件
    const config = reqireCompent(file);
    //组件名 因为组件都是以default形式导出的
    const componentName = config.default.name;

    Vue.component(componentName, config.default || config);
  });
};

//确保是浏览器环境
if (typeof window !== "undefined" && window.Vue) {
  plugin.install(window.Vue);
}

export default plugin;
