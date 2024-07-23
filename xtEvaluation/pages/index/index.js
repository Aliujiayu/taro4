"use strict";
const taro = require("../../taro.js");
const vendors = require("../../vendors.js");
const index = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  setup() {
    const msg = vendors.ref("Hello world");
    return {
      msg
    };
  }
};
const _hoisted_1 = { class: "index" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vendors.openBlock(), vendors.createElementBlock("view", _hoisted_1, [
    vendors.createBaseVNode(
      "text",
      null,
      vendors.toDisplayString($setup.msg),
      1
      /* TEXT */
    )
  ]);
}
const component = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/liujiayu/Desktop/mianshiyanshi/xtNew/xtEvaluation/src/pages/index/index.vue"]]);
var config = {
  "navigationBarTitleText": "首页"
};
Page(taro.createPageConfig(component, "pages/index/index", { root: { cn: [] } }, config || {}));
