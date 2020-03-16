<template>
  <div>
    <button
      class="button"
      :class="type === 'warn' ? 'warn' : type === 'error' ? 'error' : 'default'"
      @click="doSth"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "vue-btn",
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  methods: {
    doSth() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.button {
  width: 200px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border: none;
}
button.default {
  background-color: blue;
}
button.warn {
  background-color: orange;
}
button.error {
  background-color: red;
}
</style>

