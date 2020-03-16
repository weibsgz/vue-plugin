import Vue from "vue";

Vue.directive("focus", {
  bind: function() {},
  inserted: function(el) {
    el.focus();
  }
});

Vue.directive("clickoutside", {
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }

      if (binding.expression) {
        binding.value(e);
      }
    }

    el.__vueMenuHandler__ = documentHandler;
    document.addEventListener("click", el.__vueMenuHandler__);
  },
  unbind(el) {
    document.removeEventListener("click", el.__vueMenuHandler__);
    delete el.__vueMenuHandler__;
  }
});
