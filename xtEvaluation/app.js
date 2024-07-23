"use strict";
const taro = require("./taro.js");
const vendors = require("./vendors.js");
const app = "";
const App$1 = vendors.createApp({
  onShow(options) {
    console.log("App onShow.");
  }
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
var config = {
  "pages": ["pages/index/index"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  }
};
taro.taroWindowProvider.__taroAppConfig = config;
App(taro.createVue3App(App$1, vendors.h, config));
taro.taroExports.initPxTransform({
  designWidth: 750,
  deviceRatio: {
    "375": 2,
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
