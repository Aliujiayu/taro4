"use strict";
const vendors = require("./vendors.js");
const DEFAULT_EMPTY_ARRAY = "[]";
const NO_DEFAULT_VALUE = "";
const DEFAULT_TRUE = "!0";
const DEFAULT_FALSE = "!1";
const touchEvents = {
  bindTouchStart: NO_DEFAULT_VALUE,
  bindTouchMove: NO_DEFAULT_VALUE,
  bindTouchEnd: NO_DEFAULT_VALUE,
  bindTouchCancel: NO_DEFAULT_VALUE,
  bindLongTap: NO_DEFAULT_VALUE
};
const animation = {
  animation: NO_DEFAULT_VALUE,
  bindAnimationStart: NO_DEFAULT_VALUE,
  bindAnimationIteration: NO_DEFAULT_VALUE,
  bindAnimationEnd: NO_DEFAULT_VALUE,
  bindTransitionEnd: NO_DEFAULT_VALUE
};
function singleQuote(s) {
  return `'${s}'`;
}
const View = Object.assign(Object.assign({ "hover-class": singleQuote("none"), "hover-stop-propagation": DEFAULT_FALSE, "hover-start-time": "50", "hover-stay-time": "400" }, touchEvents), animation);
const Icon = {
  type: NO_DEFAULT_VALUE,
  size: "23",
  color: NO_DEFAULT_VALUE
};
const MapComp = Object.assign({ longitude: NO_DEFAULT_VALUE, latitude: NO_DEFAULT_VALUE, scale: "16", markers: DEFAULT_EMPTY_ARRAY, covers: NO_DEFAULT_VALUE, polyline: DEFAULT_EMPTY_ARRAY, circles: DEFAULT_EMPTY_ARRAY, controls: DEFAULT_EMPTY_ARRAY, "include-points": DEFAULT_EMPTY_ARRAY, "show-location": NO_DEFAULT_VALUE, "layer-style": "1", bindMarkerTap: NO_DEFAULT_VALUE, bindControlTap: NO_DEFAULT_VALUE, bindCalloutTap: NO_DEFAULT_VALUE, bindUpdated: NO_DEFAULT_VALUE }, touchEvents);
const Progress = {
  percent: NO_DEFAULT_VALUE,
  "stroke-width": "6",
  color: singleQuote("#09BB07"),
  activeColor: singleQuote("#09BB07"),
  backgroundColor: singleQuote("#EBEBEB"),
  active: DEFAULT_FALSE,
  "active-mode": singleQuote("backwards"),
  "show-info": DEFAULT_FALSE
};
const RichText = {
  nodes: DEFAULT_EMPTY_ARRAY
};
const Text = Object.assign({ selectable: DEFAULT_FALSE, space: NO_DEFAULT_VALUE, decode: DEFAULT_FALSE }, touchEvents);
const Button = Object.assign({ size: singleQuote("default"), type: NO_DEFAULT_VALUE, plain: DEFAULT_FALSE, disabled: NO_DEFAULT_VALUE, loading: DEFAULT_FALSE, "form-type": NO_DEFAULT_VALUE, "open-type": NO_DEFAULT_VALUE, "hover-class": singleQuote("button-hover"), "hover-stop-propagation": DEFAULT_FALSE, "hover-start-time": "20", "hover-stay-time": "70", name: NO_DEFAULT_VALUE, bindagreeprivacyauthorization: NO_DEFAULT_VALUE }, touchEvents);
const Checkbox = {
  value: NO_DEFAULT_VALUE,
  disabled: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  color: singleQuote("#09BB07"),
  name: NO_DEFAULT_VALUE
};
const CheckboxGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Form = {
  "report-submit": DEFAULT_FALSE,
  bindSubmit: NO_DEFAULT_VALUE,
  bindReset: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Input = {
  value: NO_DEFAULT_VALUE,
  type: singleQuote(NO_DEFAULT_VALUE),
  password: DEFAULT_FALSE,
  placeholder: NO_DEFAULT_VALUE,
  "placeholder-style": NO_DEFAULT_VALUE,
  "placeholder-class": singleQuote("input-placeholder"),
  disabled: NO_DEFAULT_VALUE,
  maxlength: "140",
  "cursor-spacing": "0",
  focus: DEFAULT_FALSE,
  "confirm-type": singleQuote("done"),
  "confirm-hold": DEFAULT_FALSE,
  cursor: "-1",
  "selection-start": "-1",
  "selection-end": "-1",
  bindInput: NO_DEFAULT_VALUE,
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Label = Object.assign({ for: NO_DEFAULT_VALUE, name: NO_DEFAULT_VALUE }, touchEvents);
const Picker = {
  mode: singleQuote("selector"),
  disabled: NO_DEFAULT_VALUE,
  range: NO_DEFAULT_VALUE,
  "range-key": NO_DEFAULT_VALUE,
  value: NO_DEFAULT_VALUE,
  start: NO_DEFAULT_VALUE,
  end: NO_DEFAULT_VALUE,
  fields: singleQuote("day"),
  "custom-item": NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  bindCancel: NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  bindColumnChange: NO_DEFAULT_VALUE
};
const PickerView = {
  value: NO_DEFAULT_VALUE,
  "indicator-style": NO_DEFAULT_VALUE,
  "indicator-class": NO_DEFAULT_VALUE,
  "mask-style": NO_DEFAULT_VALUE,
  "mask-class": NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const PickerViewColumn = {
  name: NO_DEFAULT_VALUE
};
const Radio = {
  value: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  color: singleQuote("#09BB07"),
  name: NO_DEFAULT_VALUE
};
const RadioGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Slider = {
  min: "0",
  max: "100",
  step: "1",
  disabled: NO_DEFAULT_VALUE,
  value: "0",
  activeColor: singleQuote("#1aad19"),
  backgroundColor: singleQuote("#e9e9e9"),
  "block-size": "28",
  "block-color": singleQuote("#ffffff"),
  "show-value": DEFAULT_FALSE,
  bindChange: NO_DEFAULT_VALUE,
  bindChanging: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Switch = {
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  type: singleQuote("switch"),
  color: singleQuote("#04BE02"),
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const Textarea = {
  value: NO_DEFAULT_VALUE,
  placeholder: NO_DEFAULT_VALUE,
  "placeholder-style": NO_DEFAULT_VALUE,
  "placeholder-class": singleQuote("textarea-placeholder"),
  disabled: NO_DEFAULT_VALUE,
  maxlength: "140",
  "auto-focus": DEFAULT_FALSE,
  focus: DEFAULT_FALSE,
  "auto-height": DEFAULT_FALSE,
  fixed: DEFAULT_FALSE,
  "cursor-spacing": "0",
  cursor: "-1",
  "selection-start": "-1",
  "selection-end": "-1",
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindLineChange: NO_DEFAULT_VALUE,
  bindInput: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
const CoverImage = {
  src: NO_DEFAULT_VALUE,
  bindLoad: "eh",
  bindError: "eh"
};
const CoverView = Object.assign({ "scroll-top": DEFAULT_FALSE }, touchEvents);
const MovableArea = {
  "scale-area": DEFAULT_FALSE
};
const MovableView = Object.assign(Object.assign({ direction: "none", inertia: DEFAULT_FALSE, "out-of-bounds": DEFAULT_FALSE, x: NO_DEFAULT_VALUE, y: NO_DEFAULT_VALUE, damping: "20", friction: "2", disabled: NO_DEFAULT_VALUE, scale: DEFAULT_FALSE, "scale-min": "0.5", "scale-max": "10", "scale-value": "1", bindChange: NO_DEFAULT_VALUE, bindScale: NO_DEFAULT_VALUE, bindHTouchMove: NO_DEFAULT_VALUE, bindVTouchMove: NO_DEFAULT_VALUE, width: singleQuote("10px"), height: singleQuote("10px") }, touchEvents), animation);
const ScrollView = Object.assign(Object.assign({ "scroll-x": DEFAULT_FALSE, "scroll-y": DEFAULT_FALSE, "upper-threshold": "50", "lower-threshold": "50", "scroll-top": NO_DEFAULT_VALUE, "scroll-left": NO_DEFAULT_VALUE, "scroll-into-view": NO_DEFAULT_VALUE, "scroll-with-animation": DEFAULT_FALSE, "enable-back-to-top": DEFAULT_FALSE, bindScrollToUpper: NO_DEFAULT_VALUE, bindScrollToLower: NO_DEFAULT_VALUE, bindScroll: NO_DEFAULT_VALUE }, touchEvents), animation);
const Swiper = Object.assign({ "indicator-dots": DEFAULT_FALSE, "indicator-color": singleQuote("rgba(0, 0, 0, .3)"), "indicator-active-color": singleQuote("#000000"), autoplay: DEFAULT_FALSE, current: "0", interval: "5000", duration: "500", circular: DEFAULT_FALSE, vertical: DEFAULT_FALSE, "previous-margin": singleQuote("0px"), "next-margin": singleQuote("0px"), "display-multiple-items": "1", bindChange: NO_DEFAULT_VALUE, bindTransition: NO_DEFAULT_VALUE, bindAnimationFinish: NO_DEFAULT_VALUE }, touchEvents);
const SwiperItem = {
  "item-id": NO_DEFAULT_VALUE
};
const Navigator = {
  url: NO_DEFAULT_VALUE,
  "open-type": singleQuote("navigate"),
  delta: "1",
  "hover-class": singleQuote("navigator-hover"),
  "hover-stop-propagation": DEFAULT_FALSE,
  "hover-start-time": "50",
  "hover-stay-time": "600",
  bindSuccess: NO_DEFAULT_VALUE,
  bindFail: NO_DEFAULT_VALUE,
  bindComplete: NO_DEFAULT_VALUE
};
const Audio = {
  id: NO_DEFAULT_VALUE,
  src: NO_DEFAULT_VALUE,
  loop: DEFAULT_FALSE,
  controls: DEFAULT_FALSE,
  poster: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  author: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE
};
const Camera = {
  "device-position": singleQuote("back"),
  flash: singleQuote("auto"),
  bindStop: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
const Image = Object.assign({ src: NO_DEFAULT_VALUE, mode: singleQuote("scaleToFill"), "lazy-load": DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE, bindLoad: NO_DEFAULT_VALUE }, touchEvents);
const LivePlayer = Object.assign({ src: NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, muted: DEFAULT_FALSE, orientation: singleQuote("vertical"), "object-fit": singleQuote("contain"), "background-mute": DEFAULT_FALSE, "min-cache": "1", "max-cache": "3", bindStateChange: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindNetStatus: NO_DEFAULT_VALUE }, animation);
const Video = Object.assign({ src: NO_DEFAULT_VALUE, duration: NO_DEFAULT_VALUE, controls: DEFAULT_TRUE, "danmu-list": NO_DEFAULT_VALUE, "danmu-btn": NO_DEFAULT_VALUE, "enable-danmu": NO_DEFAULT_VALUE, autoplay: DEFAULT_FALSE, loop: DEFAULT_FALSE, muted: DEFAULT_FALSE, "initial-time": "0", "page-gesture": DEFAULT_FALSE, direction: NO_DEFAULT_VALUE, "show-progress": DEFAULT_TRUE, "show-fullscreen-btn": DEFAULT_TRUE, "show-play-btn": DEFAULT_TRUE, "show-center-play-btn": DEFAULT_TRUE, "enable-progress-gesture": DEFAULT_TRUE, "object-fit": singleQuote("contain"), poster: NO_DEFAULT_VALUE, "show-mute-btn": DEFAULT_FALSE, bindPlay: NO_DEFAULT_VALUE, bindPause: NO_DEFAULT_VALUE, bindEnded: NO_DEFAULT_VALUE, bindTimeUpdate: NO_DEFAULT_VALUE, bindFullScreenChange: NO_DEFAULT_VALUE, bindWaiting: NO_DEFAULT_VALUE, bindError: NO_DEFAULT_VALUE }, animation);
const Canvas = Object.assign({ "canvas-id": NO_DEFAULT_VALUE, "disable-scroll": DEFAULT_FALSE, bindError: NO_DEFAULT_VALUE }, touchEvents);
const Ad = {
  "unit-id": NO_DEFAULT_VALUE,
  "ad-intervals": NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindClose: NO_DEFAULT_VALUE
};
const WebView = {
  src: NO_DEFAULT_VALUE,
  bindMessage: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
const Block = {};
const SlotView = {
  name: NO_DEFAULT_VALUE
};
const Slot = {
  name: NO_DEFAULT_VALUE
};
const NativeSlot = {
  name: NO_DEFAULT_VALUE
};
const Script = {};
const internalComponents = {
  View,
  Icon,
  Progress,
  RichText,
  Text,
  Button,
  Checkbox,
  CheckboxGroup,
  Form,
  Input,
  Label,
  Picker,
  PickerView,
  PickerViewColumn,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  CoverImage,
  Textarea,
  CoverView,
  MovableArea,
  MovableView,
  ScrollView,
  Swiper,
  SwiperItem,
  Navigator,
  Audio,
  Camera,
  Image,
  LivePlayer,
  Video,
  Canvas,
  Ad,
  WebView,
  Block,
  Map: MapComp,
  Slot,
  SlotView,
  NativeSlot,
  Script
};
const controlledComponent = /* @__PURE__ */ new Set([
  "input",
  "checkbox",
  "picker",
  "picker-view",
  "radio",
  "slider",
  "switch",
  "textarea"
]);
var PLATFORM_TYPE;
(function(PLATFORM_TYPE2) {
  PLATFORM_TYPE2["MINI"] = "mini";
  PLATFORM_TYPE2["WEB"] = "web";
  PLATFORM_TYPE2["RN"] = "rn";
  PLATFORM_TYPE2["HARMONY"] = "harmony";
  PLATFORM_TYPE2["QUICK"] = "quickapp";
})(PLATFORM_TYPE || (PLATFORM_TYPE = {}));
({
  h5: {
    type: PLATFORM_TYPE.WEB
  },
  harmony: {
    type: PLATFORM_TYPE.HARMONY
  },
  mini: {
    type: PLATFORM_TYPE.MINI
  },
  rn: {
    type: PLATFORM_TYPE.RN
  },
  quickapp: {
    type: PLATFORM_TYPE.QUICK
  }
});
class Events {
  constructor(opts) {
    var _a2;
    this.callbacks = (_a2 = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a2 !== void 0 ? _a2 : {};
  }
  on(eventName, callback, context) {
    let event, tail, _eventName;
    if (!callback) {
      return this;
    }
    if (typeof eventName === "symbol") {
      _eventName = [eventName];
    } else {
      _eventName = eventName.split(Events.eventSplitter);
    }
    this.callbacks || (this.callbacks = {});
    const calls = this.callbacks;
    while (event = _eventName.shift()) {
      const list = calls[event];
      const node = list ? list.tail : {};
      node.next = tail = {};
      node.context = context;
      node.callback = callback;
      calls[event] = {
        tail,
        next: list ? list.next : node
      };
    }
    return this;
  }
  once(events, callback, context) {
    const wrapper = (...args) => {
      callback.apply(this, args);
      this.off(events, wrapper, context);
    };
    this.on(events, wrapper, context);
    return this;
  }
  off(events, callback, context) {
    let event, calls, _events;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (!(events || callback || context)) {
      delete this.callbacks;
      return this;
    }
    if (typeof events === "symbol") {
      _events = [events];
    } else {
      _events = events ? events.split(Events.eventSplitter) : Object.keys(calls);
    }
    while (event = _events.shift()) {
      let node = calls[event];
      delete calls[event];
      if (!node || !(callback || context)) {
        continue;
      }
      const tail = node.tail;
      while ((node = node.next) !== tail) {
        const cb = node.callback;
        const ctx = node.context;
        if (callback && cb !== callback || context && ctx !== context) {
          this.on(event, cb, ctx);
        }
      }
    }
    return this;
  }
  trigger(events, ...args) {
    let event, node, calls, _events;
    if (!(calls = this.callbacks)) {
      return this;
    }
    if (typeof events === "symbol") {
      _events = [events];
    } else {
      _events = events.split(Events.eventSplitter);
    }
    while (event = _events.shift()) {
      if (node = calls[event]) {
        const tail = node.tail;
        while ((node = node.next) !== tail) {
          node.callback.apply(node.context || this, args);
        }
      }
    }
    return this;
  }
}
Events.eventSplitter = ",";
class PageEvts extends Events {
  constructor() {
    super(...arguments);
    this.exeList = [];
  }
  on(eventName, callback) {
    super.on(eventName, callback, this);
    this.exeList = this.exeList.reduce((prev, item) => {
      if (item.eventName === eventName) {
        super.trigger(item.eventName, item.data);
      } else {
        prev.push(item);
      }
      return prev;
    }, []);
    return this;
  }
  emit(events, data) {
    routeChannel.trigger(events, data);
  }
}
const pageChannel = new PageEvts();
class RouteEvts extends Events {
  emit(events, data) {
    pageChannel.off(events);
    pageChannel.exeList.push({
      eventName: events,
      data
    });
  }
  addEvents(events) {
    if (!events || typeof events !== "object")
      return;
    Object.keys(events).forEach((key) => {
      this.off(key);
      this.on(key, events[key], this);
    });
  }
}
const routeChannel = new RouteEvts();
function isString(o) {
  return typeof o === "string";
}
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNull(o) {
  return o === null;
}
function isObject(o) {
  return o !== null && typeof o === "object";
}
function isFunction(o) {
  return typeof o === "function";
}
function isNumber(o) {
  return typeof o === "number";
}
const isArray = Array.isArray;
var HOOK_TYPE;
(function(HOOK_TYPE2) {
  HOOK_TYPE2[HOOK_TYPE2["SINGLE"] = 0] = "SINGLE";
  HOOK_TYPE2[HOOK_TYPE2["MULTI"] = 1] = "MULTI";
  HOOK_TYPE2[HOOK_TYPE2["WATERFALL"] = 2] = "WATERFALL";
})(HOOK_TYPE || (HOOK_TYPE = {}));
const defaultMiniLifecycle = {
  app: [
    "onLaunch",
    "onShow",
    "onHide"
  ],
  page: [
    "onLoad",
    "onUnload",
    "onReady",
    "onShow",
    "onHide",
    [
      "onPullDownRefresh",
      "onReachBottom",
      "onPageScroll",
      "onResize",
      "defer:onTabItemTap",
      // defer: 需要等页面组件挂载后再调用
      "onTitleClick",
      "onOptionMenuClick",
      "onPopMenuClick",
      "onPullIntercept",
      "onAddToFavorites"
    ],
    [
      "onShareAppMessage",
      "onShareTimeline"
    ]
  ],
  component: [
    "attached",
    "detached"
  ]
};
function TaroHook(type, initial) {
  return {
    type,
    initial: initial || null
  };
}
class TaroHooks extends Events {
  constructor(hooks2, opts) {
    super(opts);
    this.hooks = hooks2;
    for (const hookName in hooks2) {
      const { initial } = hooks2[hookName];
      if (isFunction(initial)) {
        this.on(hookName, initial);
      }
    }
  }
  tapOneOrMany(hookName, callback) {
    const list = isFunction(callback) ? [callback] : callback;
    list.forEach((cb) => this.on(hookName, cb));
  }
  tap(hookName, callback) {
    const hooks2 = this.hooks;
    const { type, initial } = hooks2[hookName];
    if (type === HOOK_TYPE.SINGLE) {
      this.off(hookName);
      this.on(hookName, isFunction(callback) ? callback : callback[callback.length - 1]);
    } else {
      initial && this.off(hookName, initial);
      this.tapOneOrMany(hookName, callback);
    }
  }
  call(hookName, ...rest) {
    var _a2;
    const hook = this.hooks[hookName];
    if (!hook)
      return;
    const { type } = hook;
    const calls = this.callbacks;
    if (!calls)
      return;
    const list = calls[hookName];
    if (list) {
      const tail = list.tail;
      let node = list.next;
      let args = rest;
      let res;
      while (node !== tail) {
        res = (_a2 = node.callback) === null || _a2 === void 0 ? void 0 : _a2.apply(node.context || this, args);
        if (type === HOOK_TYPE.WATERFALL) {
          const params = [res];
          args = params;
        }
        node = node.next;
      }
      return res;
    }
  }
  isExist(hookName) {
    var _a2;
    return Boolean((_a2 = this.callbacks) === null || _a2 === void 0 ? void 0 : _a2[hookName]);
  }
}
const hooks = new TaroHooks({
  getMiniLifecycle: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
  getMiniLifecycleImpl: TaroHook(HOOK_TYPE.SINGLE, function() {
    return this.call("getMiniLifecycle", defaultMiniLifecycle);
  }),
  getLifecycle: TaroHook(HOOK_TYPE.SINGLE, (instance, lifecycle) => instance[lifecycle]),
  modifyRecursiveComponentConfig: TaroHook(HOOK_TYPE.SINGLE, (defaultConfig) => defaultConfig),
  getPathIndex: TaroHook(HOOK_TYPE.SINGLE, (indexOfNode) => `[${indexOfNode}]`),
  getEventCenter: TaroHook(HOOK_TYPE.SINGLE, (Events2) => new Events2()),
  isBubbleEvents: TaroHook(HOOK_TYPE.SINGLE, (eventName) => {
    const BUBBLE_EVENTS = /* @__PURE__ */ new Set([
      "touchstart",
      "touchmove",
      "touchcancel",
      "touchend",
      "touchforcechange",
      "tap",
      "longpress",
      "longtap",
      "transitionend",
      "animationstart",
      "animationiteration",
      "animationend"
    ]);
    return BUBBLE_EVENTS.has(eventName);
  }),
  getSpecialNodes: TaroHook(HOOK_TYPE.SINGLE, () => ["view", "text", "image"]),
  onRemoveAttribute: TaroHook(HOOK_TYPE.SINGLE),
  batchedEventUpdates: TaroHook(HOOK_TYPE.SINGLE),
  mergePageInstance: TaroHook(HOOK_TYPE.SINGLE),
  modifyPageObject: TaroHook(HOOK_TYPE.SINGLE),
  createPullDownComponent: TaroHook(HOOK_TYPE.SINGLE),
  getDOMNode: TaroHook(HOOK_TYPE.SINGLE),
  modifyHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  transferHydrateData: TaroHook(HOOK_TYPE.SINGLE),
  modifySetAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  modifyRmAttrPayload: TaroHook(HOOK_TYPE.SINGLE),
  onAddEvent: TaroHook(HOOK_TYPE.SINGLE),
  proxyToRaw: TaroHook(HOOK_TYPE.SINGLE, function(proxyObj) {
    return proxyObj;
  }),
  modifyMpEvent: TaroHook(HOOK_TYPE.MULTI),
  modifyMpEventImpl: TaroHook(HOOK_TYPE.SINGLE, function(e) {
    try {
      this.call("modifyMpEvent", e);
    } catch (error) {
      console.warn("[Taro modifyMpEvent hook Error]: " + (error === null || error === void 0 ? void 0 : error.message));
    }
  }),
  injectNewStyleProperties: TaroHook(HOOK_TYPE.SINGLE),
  modifyTaroEvent: TaroHook(HOOK_TYPE.MULTI),
  dispatchTaroEvent: TaroHook(HOOK_TYPE.SINGLE, (e, node) => {
    node.dispatchEvent(e);
  }),
  dispatchTaroEventFinish: TaroHook(HOOK_TYPE.MULTI),
  modifyTaroEventReturn: TaroHook(HOOK_TYPE.SINGLE, () => void 0),
  modifyDispatchEvent: TaroHook(HOOK_TYPE.MULTI),
  initNativeApi: TaroHook(HOOK_TYPE.MULTI),
  patchElement: TaroHook(HOOK_TYPE.MULTI),
  modifyAddEventListener: TaroHook(HOOK_TYPE.SINGLE),
  modifyRemoveEventListener: TaroHook(HOOK_TYPE.SINGLE),
  getMemoryLevel: TaroHook(HOOK_TYPE.SINGLE)
});
const EMPTY_OBJ = {};
function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function toCamelCase(s) {
  let camel = "";
  let nextCap = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "-") {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }
  return camel;
}
function ensure(condition, msg2) {
  if (!condition) {
    {
      const reportIssue = "\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues";
      throw new Error(msg2 + reportIssue);
    }
  }
}
function warn(condition, msg2) {
  {
    if (condition) {
      console.warn(`[taro warn] ${msg2}`);
    }
  }
}
let _uniqueId = 1;
const _loadTime = (/* @__PURE__ */ new Date()).getTime().toString();
function getUniqueKey() {
  return _loadTime + _uniqueId++;
}
function mergeInternalComponents(components2) {
  Object.keys(components2).forEach((name) => {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components2[name]);
    } else {
      internalComponents[name] = components2[name];
    }
  });
  return internalComponents;
}
function getComponentsAlias$1(origin) {
  const mapping = {};
  const viewAttrs = origin.View;
  const extraList = {
    "#text": {},
    StaticView: viewAttrs,
    StaticImage: origin.Image,
    StaticText: origin.Text,
    PureView: viewAttrs,
    CatchView: viewAttrs
  };
  origin = Object.assign(Object.assign({}, origin), extraList);
  Object.keys(origin).sort((a, b) => {
    const reg = /^(Static|Pure|Catch)*(View|Image|Text)$/;
    const isACommonly = reg.test(a);
    const isBCommonly = reg.test(b);
    if (isACommonly && isBCommonly) {
      return a > b ? 1 : -1;
    } else if (isACommonly) {
      return -1;
    } else if (isBCommonly) {
      return 1;
    } else {
      return a >= b ? 1 : -1;
    }
  }).forEach((key, num) => {
    const obj = {
      _num: String(num)
    };
    Object.keys(origin[key]).filter((attr) => !/^bind/.test(attr) && !["focus", "blur"].includes(attr)).sort().forEach((attr, index) => {
      obj[toCamelCase(attr)] = "p" + index;
    });
    mapping[toDashed(key)] = obj;
  });
  return mapping;
}
function mergeReconciler(hostConfig2, hooksForTest) {
  const obj = hooksForTest || hooks;
  const keys = Object.keys(hostConfig2);
  keys.forEach((key) => {
    obj.tap(key, hostConfig2[key]);
  });
}
function nonsupport(api) {
  return function() {
    console.warn(`小程序暂不支持 ${api}`);
  };
}
function setUniqueKeyToRoute(key, obj) {
  const routerParamsPrivateKey = "__key_";
  const useDataCacheApis = [
    "navigateTo",
    "redirectTo",
    "reLaunch",
    "switchTab"
  ];
  if (useDataCacheApis.indexOf(key) > -1) {
    const url = obj.url = obj.url || "";
    const hasMark = url.indexOf("?") > -1;
    const cacheKey = getUniqueKey();
    obj.url += (hasMark ? "&" : "?") + `${routerParamsPrivateKey}=${cacheKey}`;
  }
}
const needPromiseApis$1 = /* @__PURE__ */ new Set([
  "addPhoneContact",
  "authorize",
  "canvasGetImageData",
  "canvasPutImageData",
  "canvasToTempFilePath",
  "checkSession",
  "chooseAddress",
  "chooseImage",
  "chooseInvoiceTitle",
  "chooseLocation",
  "chooseVideo",
  "clearStorage",
  "closeBLEConnection",
  "closeBluetoothAdapter",
  "closeSocket",
  "compressImage",
  "connectSocket",
  "createBLEConnection",
  "downloadFile",
  "exitMiniProgram",
  "getAvailableAudioSources",
  "getBLEDeviceCharacteristics",
  "getBLEDeviceServices",
  "getBatteryInfo",
  "getBeacons",
  "getBluetoothAdapterState",
  "getBluetoothDevices",
  "getClipboardData",
  "getConnectedBluetoothDevices",
  "getConnectedWifi",
  "getExtConfig",
  "getFileInfo",
  "getImageInfo",
  "getLocation",
  "getNetworkType",
  "getSavedFileInfo",
  "getSavedFileList",
  "getScreenBrightness",
  "getSetting",
  "getStorage",
  "getStorageInfo",
  "getSystemInfo",
  "getUserInfo",
  "getWifiList",
  "hideHomeButton",
  "hideShareMenu",
  "hideTabBar",
  "hideTabBarRedDot",
  "loadFontFace",
  "login",
  "makePhoneCall",
  "navigateBack",
  "navigateBackMiniProgram",
  "navigateTo",
  "navigateToBookshelf",
  "navigateToMiniProgram",
  "notifyBLECharacteristicValueChange",
  "hideKeyboard",
  "hideLoading",
  "hideNavigationBarLoading",
  "hideToast",
  "openBluetoothAdapter",
  "openDocument",
  "openLocation",
  "openSetting",
  "pageScrollTo",
  "previewImage",
  "queryBookshelf",
  "reLaunch",
  "readBLECharacteristicValue",
  "redirectTo",
  "removeSavedFile",
  "removeStorage",
  "removeTabBarBadge",
  "requestSubscribeMessage",
  "saveFile",
  "saveImageToPhotosAlbum",
  "saveVideoToPhotosAlbum",
  "scanCode",
  "sendSocketMessage",
  "setBackgroundColor",
  "setBackgroundTextStyle",
  "setClipboardData",
  "setEnableDebug",
  "setInnerAudioOption",
  "setKeepScreenOn",
  "setNavigationBarColor",
  "setNavigationBarTitle",
  "setScreenBrightness",
  "setStorage",
  "setTabBarBadge",
  "setTabBarItem",
  "setTabBarStyle",
  "showActionSheet",
  "showFavoriteGuide",
  "showLoading",
  "showModal",
  "showShareMenu",
  "showTabBar",
  "showTabBarRedDot",
  "showToast",
  "startBeaconDiscovery",
  "startBluetoothDevicesDiscovery",
  "startDeviceMotionListening",
  "startPullDownRefresh",
  "stopBeaconDiscovery",
  "stopBluetoothDevicesDiscovery",
  "stopCompass",
  "startCompass",
  "startAccelerometer",
  "stopAccelerometer",
  "showNavigationBarLoading",
  "stopDeviceMotionListening",
  "stopPullDownRefresh",
  "switchTab",
  "uploadFile",
  "vibrateLong",
  "vibrateShort",
  "writeBLECharacteristicValue"
]);
function getCanIUseWebp(taro2) {
  return function() {
    var _a2;
    const res = (_a2 = taro2.getSystemInfoSync) === null || _a2 === void 0 ? void 0 : _a2.call(taro2);
    if (!res) {
      {
        console.error("不支持 API canIUseWebp");
      }
      return false;
    }
    const { platform } = res;
    const platformLower = platform.toLowerCase();
    if (platformLower === "android" || platformLower === "devtools") {
      return true;
    }
    return false;
  };
}
function getNormalRequest(global2) {
  return function request(options2) {
    options2 = options2 ? isString(options2) ? { url: options2 } : options2 : {};
    const originSuccess = options2.success;
    const originFail = options2.fail;
    const originComplete = options2.complete;
    let requestTask;
    const p = new Promise((resolve, reject) => {
      options2.success = (res) => {
        originSuccess && originSuccess(res);
        resolve(res);
      };
      options2.fail = (res) => {
        originFail && originFail(res);
        reject(res);
      };
      options2.complete = (res) => {
        originComplete && originComplete(res);
      };
      requestTask = global2.request(options2);
    });
    equipTaskMethodsIntoPromise(requestTask, p);
    p.abort = (cb) => {
      cb && cb();
      if (requestTask) {
        requestTask.abort();
      }
      return p;
    };
    return p;
  };
}
function processApis(taro2, global2, config = {}) {
  const patchNeedPromiseApis = config.needPromiseApis || [];
  const _needPromiseApis = /* @__PURE__ */ new Set([...patchNeedPromiseApis, ...needPromiseApis$1]);
  const preserved = [
    "getEnv",
    "interceptors",
    "Current",
    "getCurrentInstance",
    "options",
    "nextTick",
    "eventCenter",
    "Events",
    "preload",
    "webpackJsonp"
  ];
  const apis = new Set(!config.isOnlyPromisify ? Object.keys(global2).filter((api) => preserved.indexOf(api) === -1) : patchNeedPromiseApis);
  if (config.modifyApis) {
    config.modifyApis(apis);
  }
  apis.forEach((key) => {
    if (_needPromiseApis.has(key)) {
      const originKey = key;
      taro2[originKey] = (options2 = {}, ...args) => {
        let key2 = originKey;
        if (typeof options2 === "string") {
          if (args.length) {
            return global2[key2](options2, ...args);
          }
          return global2[key2](options2);
        }
        if (config.transformMeta) {
          const transformResult = config.transformMeta(key2, options2);
          key2 = transformResult.key;
          options2 = transformResult.options;
          if (!global2.hasOwnProperty(key2)) {
            return nonsupport(key2)();
          }
        }
        let task = null;
        const obj = Object.assign({}, options2);
        setUniqueKeyToRoute(key2, options2);
        const p = new Promise((resolve, reject) => {
          obj.success = (res) => {
            var _a2, _b;
            (_a2 = config.modifyAsyncResult) === null || _a2 === void 0 ? void 0 : _a2.call(config, key2, res);
            (_b = options2.success) === null || _b === void 0 ? void 0 : _b.call(options2, res);
            if (key2 === "connectSocket") {
              resolve(Promise.resolve().then(() => task ? Object.assign(task, res) : res));
            } else {
              resolve(res);
            }
          };
          obj.fail = (res) => {
            var _a2;
            (_a2 = options2.fail) === null || _a2 === void 0 ? void 0 : _a2.call(options2, res);
            reject(res);
          };
          obj.complete = (res) => {
            var _a2;
            (_a2 = options2.complete) === null || _a2 === void 0 ? void 0 : _a2.call(options2, res);
          };
          if (args.length) {
            task = global2[key2](obj, ...args);
          } else {
            task = global2[key2](obj);
          }
        });
        if (["uploadFile", "downloadFile"].includes(key2)) {
          equipTaskMethodsIntoPromise(task, p);
          p.progress = (cb) => {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p;
          };
          p.abort = (cb) => {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p;
          };
        }
        return p;
      };
    } else {
      let platformKey = key;
      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      }
      if (!global2.hasOwnProperty(platformKey)) {
        taro2[key] = nonsupport(key);
        return;
      }
      if (isFunction(global2[key])) {
        taro2[key] = (...args) => {
          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global2, args);
          } else {
            return global2[platformKey].apply(global2, args);
          }
        };
      } else {
        taro2[key] = global2[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro2, global2, config);
}
function equipCommonApis(taro2, global2, apis = {}) {
  taro2.canIUseWebp = getCanIUseWebp(taro2);
  taro2.getCurrentPages = getCurrentPages || nonsupport("getCurrentPages");
  taro2.getApp = getApp || nonsupport("getApp");
  taro2.env = global2.env || {};
  try {
    taro2.requirePlugin = requirePlugin || nonsupport("requirePlugin");
  } catch (error) {
    taro2.requirePlugin = nonsupport("requirePlugin");
  }
  const request = apis.request || getNormalRequest(global2);
  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }
  const link = new taro2.Link(taroInterceptor);
  taro2.request = link.request.bind(link);
  taro2.addInterceptor = link.addInterceptor.bind(link);
  taro2.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro2.miniGlobal = taro2.options.miniGlobal = global2;
  taro2.getAppInfo = function() {
    return {
      platform: "mini",
      taroVersion: "4.0.2",
      designWidth: taro2.config.designWidth
    };
  };
  taro2.createSelectorQuery = delayRef(taro2, global2, "createSelectorQuery", "exec");
  taro2.createIntersectionObserver = delayRef(taro2, global2, "createIntersectionObserver", "observe");
}
function equipTaskMethodsIntoPromise(task, promise) {
  if (!task || !promise)
    return;
  const taskMethods = ["abort", "onHeadersReceived", "offHeadersReceived", "onProgressUpdate", "offProgressUpdate", "onChunkReceived", "offChunkReceived"];
  task && taskMethods.forEach((method) => {
    if (method in task) {
      promise[method] = task[method].bind(task);
    }
  });
}
function delayRef(taro2, global2, name, method) {
  return function(...args) {
    const res = global2[name](...args);
    const raw = res[method].bind(res);
    res[method] = function(...methodArgs) {
      taro2.nextTick(() => raw(...methodArgs));
    };
    return res;
  };
}
var Shortcuts;
(function(Shortcuts2) {
  Shortcuts2["Container"] = "container";
  Shortcuts2["Childnodes"] = "cn";
  Shortcuts2["Text"] = "v";
  Shortcuts2["NodeType"] = "nt";
  Shortcuts2["NodeName"] = "nn";
  Shortcuts2["Style"] = "st";
  Shortcuts2["Class"] = "cl";
  Shortcuts2["Src"] = "src";
})(Shortcuts || (Shortcuts = {}));
const needPromiseApis = /* @__PURE__ */ new Set([
  "addFileToFavorites",
  "addVideoToFavorites",
  "authPrivateMessage",
  "checkIsAddedToMyMiniProgram",
  "chooseContact",
  "cropImage",
  "disableAlertBeforeUnload",
  "editImage",
  "enableAlertBeforeUnload",
  "getBackgroundFetchData",
  "getChannelsLiveInfo",
  "getChannelsLiveNoticeInfo",
  "getFuzzyLocation",
  "getGroupEnterInfo",
  "getLocalIPAddress",
  "getShareInfo",
  "getUserProfile",
  "getWeRunData",
  "join1v1Chat",
  "openChannelsActivity",
  "openChannelsEvent",
  "openChannelsLive",
  "openChannelsUserProfile",
  "openCustomerServiceChat",
  "openVideoEditor",
  "saveFileToDisk",
  "scanItem",
  "setEnable1v1Chat",
  "setWindowSize",
  "sendBizRedPacket",
  "startFacialRecognitionVerify"
]);
function initNativeApi(taro2) {
  processApis(taro2, wx, {
    needPromiseApis,
    modifyApis(apis) {
      apis.delete("lanDebug");
    },
    transformMeta(api, options2) {
      var _a2;
      if (api === "showShareMenu") {
        options2.menus = (_a2 = options2.showShareItems) === null || _a2 === void 0 ? void 0 : _a2.map((item) => item === "wechatFriends" ? "shareAppMessage" : item === "wechatMoment" ? "shareTimeline" : item);
      }
      return {
        key: api,
        options: options2
      };
    }
  });
  taro2.cloud = wx.cloud;
  taro2.getTabBar = function(pageCtx) {
    var _a2;
    if (typeof (pageCtx === null || pageCtx === void 0 ? void 0 : pageCtx.getTabBar) === "function") {
      return (_a2 = pageCtx.getTabBar()) === null || _a2 === void 0 ? void 0 : _a2.$taroInstances;
    }
  };
  taro2.getRenderer = function() {
    var _a2, _b, _c;
    return (_c = (_b = (_a2 = taro2.getCurrentInstance()) === null || _a2 === void 0 ? void 0 : _a2.page) === null || _b === void 0 ? void 0 : _b.renderer) !== null && _c !== void 0 ? _c : "webview";
  };
}
const _true = "true";
const _false = "false";
const _empty = "";
const _zero = "0";
const components = {
  // ======== 调整属性 ========
  Progress: {
    "border-radius": _zero,
    "font-size": "16",
    duration: "30",
    bindActiveEnd: _empty
  },
  RichText: {
    space: _empty,
    "user-select": _false
  },
  Text: {
    "user-select": _false,
    overflow: "visible",
    "max-lines": ""
  },
  Map: {
    polygons: "[]",
    subkey: _empty,
    rotate: _zero,
    skew: _zero,
    "max-scale": "20",
    "min-scale": "3",
    "enable-3D": _false,
    "show-compass": _false,
    "show-scale": _false,
    "enable-overlooking": _false,
    "enable-auto-max-overlooking": _false,
    "enable-zoom": _true,
    "enable-scroll": _true,
    "enable-rotate": _false,
    "enable-satellite": _false,
    "enable-traffic": _false,
    "enable-poi": _true,
    "enable-building": _true,
    setting: "[]",
    bindLabelTap: _empty,
    bindRegionChange: _empty,
    bindPoiTap: _empty,
    bindPolylineTap: _empty,
    bindAbilitySuccess: _empty,
    bindAbilityFailed: _empty,
    bindAuthSuccess: _empty,
    bindInterpolatePoint: _empty,
    bindError: _empty,
    bindAnchorPointTap: _empty
  },
  Button: {
    lang: "en",
    "session-from": _empty,
    "send-message-title": _empty,
    "send-message-path": _empty,
    "send-message-img": _empty,
    "app-parameter": _empty,
    "show-message-card": _false,
    "business-id": _empty,
    bindGetUserInfo: _empty,
    bindContact: _empty,
    bindGetPhoneNumber: _empty,
    bindGetRealTimePhoneNumber: _empty,
    bindChooseAvatar: _empty,
    bindError: _empty,
    bindOpenSetting: _empty,
    bindLaunchApp: _empty,
    bindAgreePrivacyAuthorization: _empty
  },
  Form: {
    "report-submit-timeout": _zero
  },
  Input: {
    "always-embed": _false,
    "adjust-position": _true,
    "hold-keyboard": _false,
    "safe-password-cert-path": "",
    "safe-password-length": "",
    "safe-password-time-stamp": "",
    "safe-password-nonce": "",
    "safe-password-salt": "",
    "safe-password-custom-hash": "",
    "auto-fill": _empty,
    bindKeyboardHeightChange: _empty,
    bindNicknameReview: _empty
  },
  Picker: {
    "header-text": _empty,
    level: "region"
  },
  PickerView: {
    "immediate-change": _false,
    bindPickStart: _empty,
    bindPickEnd: _empty
  },
  Slider: {
    color: "'#e9e9e9'",
    "selected-color": "'#1aad19'"
  },
  Textarea: {
    "show-confirm-bar": _true,
    "adjust-position": _true,
    "hold-keyboard": _false,
    "disable-default-padding": _false,
    "confirm-type": "'return'",
    "confirm-hold": _false,
    bindKeyboardHeightChange: _empty
  },
  ScrollView: {
    "enable-flex": _false,
    "scroll-anchoring": _false,
    enhanced: _false,
    "using-sticky": _false,
    "paging-enabled": _false,
    "enable-passive": _false,
    "refresher-enabled": _false,
    "refresher-threshold": "45",
    "refresher-default-style": "'black'",
    "refresher-background": "'#FFF'",
    "refresher-triggered": _false,
    bounces: _true,
    "show-scrollbar": _true,
    "fast-deceleration": _false,
    type: "'list'",
    reverse: _false,
    clip: _true,
    "enable-back-to-top": _false,
    "cache-extent": _empty,
    "min-drag-distance": "18",
    "scroll-into-view-within-extent": _false,
    "scroll-into-view-alignment": "'start'",
    padding: "[0,0,0,0]",
    "refresher-two-level-enabled": _false,
    "refresher-two-level-triggered": _false,
    "refresher-two-level-threshold": "150",
    "refresher-two-level-close-threshold": "80",
    "refresher-two-level-scroll-enabled": _false,
    "refresher-ballistic-refresh-enabled": _false,
    "refresher-two-level-pinned": _false,
    bindDragStart: _empty,
    bindDragging: _empty,
    bindDragEnd: _empty,
    bindRefresherPulling: _empty,
    bindRefresherRefresh: _empty,
    bindRefresherRestore: _empty,
    bindRefresherAbort: _empty,
    bindScrollStart: _empty,
    bindScrollEnd: _empty,
    bindRefresherWillRefresh: _empty,
    bindRefresherStatusChange: _empty
  },
  StickySection: {
    "push-pinned-header": _true,
    padding: "[0, 0, 0, 0]"
  },
  GridView: {
    type: "'aligned'",
    "cross-axis-count": "2",
    "max-cross-axis-extent": _zero,
    "main-axis-gap": _zero,
    "cross-axis-gap": _zero,
    padding: "[0, 0, 0, 0]"
  },
  GridBuilder: {
    type: "'aligned'",
    list: "[]",
    "cross-axis-count": "2",
    "max-cross-axis-extent": _zero,
    "main-axis-gap": _zero,
    "cross-axis-gap": _zero,
    padding: "[0, 0, 0, 0]",
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  ListView: {
    padding: "[0, 0, 0, 0]"
  },
  ListBuilder: {
    list: "[]",
    type: "static",
    padding: "[0, 0, 0, 0]",
    "child-count": _empty,
    "child-height": _empty,
    bindItemBuild: _empty,
    bindItemDispose: _empty
  },
  StickyHeader: {
    "offset-top": "0",
    padding: "[0, 0, 0, 0]"
  },
  Swiper: {
    "snap-to-edge": _false,
    "easing-function": "'default'"
  },
  SwiperItem: {
    "skip-hidden-item-layout": _false
  },
  Navigator: {
    target: "'self'",
    "app-id": _empty,
    path: _empty,
    "extra-data": _empty,
    version: "'version'"
  },
  Camera: {
    mode: "'normal'",
    resolution: "'medium'",
    "frame-size": "'medium'",
    bindInitDone: _empty,
    bindScanCode: _empty
  },
  Image: {
    webp: _false,
    "show-menu-by-longpress": _false
  },
  LivePlayer: {
    mode: "'live'",
    "sound-mode": "'speaker'",
    "auto-pause-if-navigate": _true,
    "auto-pause-if-open-native": _true,
    "picture-in-picture-mode": "[]",
    "enable-auto-rotation": _false,
    "referrer-policy": "'no-referrer'",
    "enable-casting": _false,
    bindstatechange: _empty,
    bindfullscreenchange: _empty,
    bindnetstatus: _empty,
    bindAudioVolumeNotify: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty
  },
  Video: {
    title: _empty,
    "play-btn-position": "'bottom'",
    "enable-play-gesture": _false,
    "auto-pause-if-navigate": _true,
    "auto-pause-if-open-native": _true,
    "vslide-gesture": _false,
    "vslide-gesture-in-fullscreen": _true,
    "show-bottom-progress": _true,
    "ad-unit-id": _empty,
    "poster-for-crawler": _empty,
    "show-casting-button": _false,
    "picture-in-picture-mode": "[]",
    // picture-in-picture-show-progress 属性先注释掉的原因如下：
    // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
    // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
    // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
    // 'picture-in-picture-show-progress': 'false',
    "enable-auto-rotation": _false,
    "show-screen-lock-button": _false,
    "show-snapshot-button": _false,
    "show-background-playback-button": _false,
    "background-poster": _empty,
    "referrer-policy": "'no-referrer'",
    "is-drm": _false,
    "is-live": _false,
    "provision-url": _empty,
    "certificate-url": _empty,
    "license-url": _empty,
    "preferred-peak-bit-rate": _empty,
    bindProgress: _empty,
    bindLoadedMetadata: _empty,
    bindControlsToggle: _empty,
    bindEnterPictureInPicture: _empty,
    bindLeavePictureInPicture: _empty,
    bindSeekComplete: _empty,
    bindCastingUserSelect: _empty,
    bindCastingStateChange: _empty,
    bindCastingInterrupt: _empty,
    bindAdLoad: _empty,
    bindAdError: _empty,
    bindAdClose: _empty,
    bindAdPlay: _empty
  },
  Canvas: {
    type: _empty
  },
  Ad: {
    "ad-type": "'banner'",
    "ad-theme": "'white'"
  },
  CoverView: {
    "marker-id": _empty,
    slot: _empty
  },
  // ======== 额外组件 ========
  Editor: {
    "read-only": _false,
    placeholder: _empty,
    "show-img-size": _false,
    "show-img-toolbar": _false,
    "show-img-resize": _false,
    focus: _false,
    bindReady: _empty,
    bindFocus: _empty,
    bindBlur: _empty,
    bindInput: _empty,
    bindStatusChange: _empty,
    name: _empty
  },
  MatchMedia: {
    "min-width": _empty,
    "max-width": _empty,
    width: _empty,
    "min-height": _empty,
    "max-height": _empty,
    height: _empty,
    orientation: _empty
  },
  FunctionalPageNavigator: {
    version: "'release'",
    name: _empty,
    args: _empty,
    bindSuccess: _empty,
    bindFail: _empty,
    bindCancel: _empty
  },
  LivePusher: {
    url: _empty,
    mode: "'RTC'",
    autopush: _false,
    muted: _false,
    "enable-camera": _true,
    "auto-focus": _true,
    orientation: "'vertical'",
    beauty: _zero,
    whiteness: _zero,
    aspect: "'9:16'",
    "min-bitrate": "200",
    "max-bitrate": "1000",
    "audio-quality": "'high'",
    "waiting-image": _empty,
    "waiting-image-hash": _empty,
    zoom: _false,
    "device-position": "'front'",
    "background-mute": _false,
    mirror: _false,
    "remote-mirror": _false,
    "local-mirror": _false,
    "audio-reverb-type": _zero,
    "enable-mic": _true,
    "enable-agc": _false,
    "enable-ans": _false,
    "audio-volume-type": "'voicecall'",
    "video-width": "360",
    "video-height": "640",
    "beauty-style": "'smooth'",
    filter: "'standard'",
    "picture-in-picture-mode": "[]",
    animation: _empty,
    bindStateChange: _empty,
    bindNetStatus: _empty,
    bindBgmStart: _empty,
    bindBgmProgress: _empty,
    bindBgmComplete: _empty,
    bindAudioVolumeNotify: _empty
  },
  OfficialAccount: {
    bindLoad: _empty,
    bindError: _empty
  },
  OpenData: {
    type: _empty,
    "open-gid": _empty,
    lang: "'en'",
    "default-text": _empty,
    "default-avatar": _empty,
    bindError: _empty
  },
  NavigationBar: {
    title: _empty,
    loading: _false,
    "front-color": "'#000000'",
    "background-color": _empty,
    "color-animation-duration": _zero,
    "color-animation-timing-func": "'linear'"
  },
  PageMeta: {
    "background-text-style": _empty,
    "background-color": _empty,
    "background-color-top": _empty,
    "background-color-bottom": _empty,
    "root-background-color": _empty,
    "scroll-top": "''",
    "scroll-duration": "300",
    "page-style": "''",
    "root-font-size": "''",
    "page-orientation": "''",
    bindResize: _empty,
    bindScroll: _empty,
    bindScrollDone: _empty
  },
  VoipRoom: {
    openid: _empty,
    mode: "'camera'",
    "device-position": "'front'",
    bindError: _empty
  },
  AdCustom: {
    "unit-id": _empty,
    "ad-intervals": _empty,
    bindLoad: _empty,
    bindError: _empty
  },
  PageContainer: {
    show: _false,
    duration: "300",
    "z-index": "100",
    overlay: _true,
    position: "'bottom'",
    round: _false,
    "close-on-slide-down": _false,
    "overlay-style": _empty,
    "custom-style": _empty,
    bindBeforeEnter: _empty,
    bindEnter: _empty,
    bindAfterEnter: _empty,
    bindBeforeLeave: _empty,
    bindLeave: _empty,
    bindAfterLeave: _empty,
    bindClickOverlay: _empty
  },
  ShareElement: {
    mapkey: _empty,
    transform: _false,
    duration: "300",
    "easing-function": "'ease-out'"
  },
  KeyboardAccessory: {},
  RootPortal: {
    enable: _true
  },
  ChannelLive: {
    "feed-id": _empty,
    "finder-user-name": _empty
  },
  ChannelVideo: {
    "feed-id": _empty,
    "finder-user-name": _empty,
    "feed-token": _empty,
    autoplay: _false,
    loop: _false,
    muted: _false,
    "object-fit": "'contain'",
    bindError: _empty
  },
  Snapshot: {
    mode: "'view'"
  },
  Span: {},
  OpenContainer: {
    transitionType: "'fade'",
    transitionDuration: "300",
    closedColor: "'white'",
    closedElevation: _zero,
    closeBorderRadius: _zero,
    middleColor: _empty,
    openColor: "'white'",
    openElevation: _zero,
    openBorderRadius: _zero
  },
  DraggableSheet: {
    initialChildSize: "0.5",
    minChildSize: "0.25",
    maxChildSize: "1.0",
    snap: _false,
    snapSizes: "[]"
  },
  NestedScrollHeader: {},
  NestedScrollBody: {}
};
const hostConfig = {
  initNativeApi,
  getMiniLifecycle(config) {
    const methods = config.page[5];
    if (methods.indexOf("onSaveExitState") === -1) {
      methods.push("onSaveExitState");
    }
    return config;
  },
  transferHydrateData(data, element, componentsAlias2) {
    var _a2;
    if (element.isTransferElement) {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = element.dataName;
      page.setData({
        [toCamelCase(data.nn)]: data
      });
      return {
        sid: element.sid,
        [
          "v"
          /* Shortcuts.Text */
        ]: "",
        [
          "nn"
          /* Shortcuts.NodeName */
        ]: ((_a2 = componentsAlias2["#text"]) === null || _a2 === void 0 ? void 0 : _a2._num) || "8"
      };
    }
  }
};
mergeReconciler(hostConfig);
mergeInternalComponents(components);
const PROPERTY_THRESHOLD = 2046;
const TARO_RUNTIME = "Taro runtime";
const HOOKS_APP_ID = "taro-app";
const SET_DATA = "小程序 setData";
const PAGE_INIT = "页面初始化";
const ROOT_STR = "root";
const HTML = "html";
const HEAD = "head";
const BODY = "body";
const APP = "app";
const CONTAINER = "container";
const DOCUMENT_ELEMENT_NAME = "#document";
const DOCUMENT_FRAGMENT = "document-fragment";
const ID = "id";
const UID = "uid";
const CLASS = "class";
const STYLE = "style";
const FOCUS = "focus";
const VIEW = "view";
const STATIC_VIEW = "static-view";
const PURE_VIEW = "pure-view";
const PROPS = "props";
const DATASET = "dataset";
const OBJECT = "object";
const VALUE = "value";
const INPUT = "input";
const CHANGE = "change";
const CUSTOM_WRAPPER = "custom-wrapper";
const TARGET = "target";
const CURRENT_TARGET = "currentTarget";
const TYPE = "type";
const CONFIRM = "confirm";
const TIME_STAMP = "timeStamp";
const KEY_CODE = "keyCode";
const TOUCHMOVE = "touchmove";
const DATE = "Date";
const SET_TIMEOUT = "setTimeout";
const COMPILE_MODE = "compileMode";
const CATCHMOVE = "catchMove";
const CATCH_VIEW = "catch-view";
const COMMENT = "comment";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const OPTIONS = "options";
const EXTERNAL_CLASSES = "externalClasses";
const EVENT_CALLBACK_RESULT = "e_result";
const BEHAVIORS = "behaviors";
const A = "a";
var CONTEXT_ACTIONS;
(function(CONTEXT_ACTIONS2) {
  CONTEXT_ACTIONS2["INIT"] = "0";
  CONTEXT_ACTIONS2["RESTORE"] = "1";
  CONTEXT_ACTIONS2["RECOVER"] = "2";
  CONTEXT_ACTIONS2["DESTORY"] = "3";
})(CONTEXT_ACTIONS || (CONTEXT_ACTIONS = {}));
const observers = [];
class MutationObserverImpl {
  constructor(callback) {
    this.records = [];
    this.callback = callback;
  }
  /**
   * Configures the MutationObserver
   * to begin receiving notifications
   * through its callback function
   * when DOM changes matching the given options occur.
   *
   * Options matching is to be implemented.
   */
  observe(target, options2) {
    this.disconnect();
    this.target = target;
    this.options = options2 || {};
    observers.push(this);
  }
  /**
   * Stop the MutationObserver instance
   * from receiving further notifications
   * until and unless observe() is called again.
   */
  disconnect() {
    this.target = null;
    const index = observers.indexOf(this);
    if (index >= 0) {
      observers.splice(index, 1);
    }
  }
  /**
   * Removes all pending notifications
   * from the MutationObserver's notification queue
   * and returns them in a new Array of MutationRecord objects.
   */
  takeRecords() {
    return this.records.splice(0, this.records.length);
  }
}
const sidMatches = (observerTarget, target) => {
  return !!observerTarget && observerTarget.sid === (target === null || target === void 0 ? void 0 : target.sid);
};
const isConcerned = (record, options2) => {
  const { characterData, characterDataOldValue, attributes, attributeOldValue, childList } = options2;
  switch (record.type) {
    case "characterData":
      if (characterData) {
        if (!characterDataOldValue)
          record.oldValue = null;
        return true;
      }
      return false;
    case "attributes":
      if (attributes) {
        if (!attributeOldValue)
          record.oldValue = null;
        return true;
      }
      return false;
    case "childList":
      if (childList) {
        return true;
      }
      return false;
  }
};
let pendingMuatations = false;
function logMutation(observer, record) {
  observer.records.push(record);
  if (!pendingMuatations) {
    pendingMuatations = true;
    Promise.resolve().then(() => {
      pendingMuatations = false;
      observers.forEach((observer2) => {
        return observer2.callback(observer2.takeRecords());
      });
    });
  }
}
function recordMutation(record) {
  observers.forEach((observer) => {
    const { options: options2 } = observer;
    for (let t = record.target; t; t = t.parentNode) {
      if (sidMatches(observer.target, t) && isConcerned(record, options2)) {
        logMutation(observer, record);
        break;
      }
      if (!options2.subtree)
        break;
    }
  });
}
class MutationObserver {
  constructor(callback) {
    {
      this.core = new MutationObserverImpl(callback);
    }
  }
  observe(...args) {
    this.core.observe(...args);
  }
  disconnect() {
    this.core.disconnect();
  }
  takeRecords() {
    return this.core.takeRecords();
  }
  static record(record) {
    recordMutation(record);
  }
}
const eventCenter = hooks.call("getEventCenter", Events);
const env = {
  window: EMPTY_OBJ,
  document: EMPTY_OBJ
};
const taroGetComputedStyleProvider = function(element) {
  return element.style;
};
class RuntimeCache {
  constructor(name) {
    this.cache = /* @__PURE__ */ new Map();
    this.name = name;
  }
  has(identifier) {
    return this.cache.has(identifier);
  }
  set(identifier, ctx) {
    if (identifier && ctx) {
      this.cache.set(identifier, ctx);
    }
  }
  get(identifier) {
    if (this.has(identifier))
      return this.cache.get(identifier);
  }
  delete(identifier) {
    this.cache.delete(identifier);
  }
}
var _TaroHistory_instances, _TaroHistory_location, _TaroHistory_stack, _TaroHistory_cur, _TaroHistory_window, _TaroHistory_reset;
const cache$1 = new RuntimeCache("history");
class TaroHistory extends Events {
  constructor(location, options2) {
    super();
    _TaroHistory_instances.add(this);
    _TaroHistory_location.set(this, void 0);
    _TaroHistory_stack.set(this, []);
    _TaroHistory_cur.set(this, 0);
    _TaroHistory_window.set(this, void 0);
    vendors.__classPrivateFieldSet(this, _TaroHistory_window, options2.window, "f");
    vendors.__classPrivateFieldSet(this, _TaroHistory_location, location, "f");
    vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").on("__record_history__", (href) => {
      var _a2;
      vendors.__classPrivateFieldSet(this, _TaroHistory_cur, (_a2 = vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f"), _a2++, _a2), "f");
      vendors.__classPrivateFieldSet(this, _TaroHistory_stack, vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")), "f");
      vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
        state: null,
        title: "",
        url: href
      });
    }, null);
    vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").on("__reset_history__", (href) => {
      vendors.__classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this, href);
    }, null);
    this.on(CONTEXT_ACTIONS.INIT, () => {
      vendors.__classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      cache$1.set(pageId2, {
        location: vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f"),
        stack: vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(),
        cur: vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")
      });
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      if (cache$1.has(pageId2)) {
        const ctx = cache$1.get(pageId2);
        vendors.__classPrivateFieldSet(this, _TaroHistory_location, ctx.location, "f");
        vendors.__classPrivateFieldSet(this, _TaroHistory_stack, ctx.stack, "f");
        vendors.__classPrivateFieldSet(this, _TaroHistory_cur, ctx.cur, "f");
      }
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      cache$1.delete(pageId2);
    }, null);
    vendors.__classPrivateFieldGet(this, _TaroHistory_instances, "m", _TaroHistory_reset).call(this);
  }
  /* public property */
  get length() {
    return vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").length;
  }
  get state() {
    return vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f")[vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")].state;
  }
  /* public method */
  go(delta) {
    if (!isNumber(delta) || isNaN(delta))
      return;
    let targetIdx = vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f") + delta;
    targetIdx = Math.min(Math.max(targetIdx, 0), this.length - 1);
    vendors.__classPrivateFieldSet(this, _TaroHistory_cur, targetIdx, "f");
    vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f")[vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")].url);
    vendors.__classPrivateFieldGet(this, _TaroHistory_window, "f").trigger("popstate", vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f")[vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")]);
  }
  back() {
    this.go(-1);
  }
  forward() {
    this.go(1);
  }
  pushState(state, title, url) {
    if (!url || !isString(url))
      return;
    vendors.__classPrivateFieldSet(this, _TaroHistory_stack, vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").slice(0, vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f") + 1), "f");
    vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f").push({
      state,
      title,
      url
    });
    vendors.__classPrivateFieldSet(this, _TaroHistory_cur, this.length - 1, "f");
    vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", url);
  }
  replaceState(state, title, url) {
    if (!url || !isString(url))
      return;
    vendors.__classPrivateFieldGet(this, _TaroHistory_stack, "f")[vendors.__classPrivateFieldGet(this, _TaroHistory_cur, "f")] = {
      state,
      title,
      url
    };
    vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").trigger("__set_href_without_history__", url);
  }
  // For debug
  get cache() {
    return cache$1;
  }
}
_TaroHistory_location = /* @__PURE__ */ new WeakMap(), _TaroHistory_stack = /* @__PURE__ */ new WeakMap(), _TaroHistory_cur = /* @__PURE__ */ new WeakMap(), _TaroHistory_window = /* @__PURE__ */ new WeakMap(), _TaroHistory_instances = /* @__PURE__ */ new WeakSet(), _TaroHistory_reset = function _TaroHistory_reset2(href = "") {
  vendors.__classPrivateFieldSet(this, _TaroHistory_stack, [
    {
      state: null,
      title: "",
      url: href || vendors.__classPrivateFieldGet(this, _TaroHistory_location, "f").href
    }
  ], "f");
  vendors.__classPrivateFieldSet(this, _TaroHistory_cur, 0, "f");
};
const History = TaroHistory;
const Current = {
  app: null,
  router: null,
  page: null
};
const getCurrentInstance = () => Current;
var _dict, _a;
const findReg = /[!'()~]|%20|%00/g;
const plusReg = /\+/g;
const replaceCharMap = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+",
  "%00": "\0"
};
function replacer(match) {
  return replaceCharMap[match];
}
function appendTo(dict, name, value) {
  const res = isArray(value) ? value.join(",") : value;
  if (name in dict)
    dict[name].push(res);
  else
    dict[name] = [res];
}
function addEach(value, key) {
  appendTo(this, key, value);
}
function decode(str) {
  return decodeURIComponent(str.replace(plusReg, " "));
}
function encode(str) {
  return encodeURIComponent(str).replace(findReg, replacer);
}
const URLSearchParams = (_a = class {
  constructor(query) {
    _dict.set(this, /* @__PURE__ */ Object.create(null));
    query !== null && query !== void 0 ? query : query = "";
    const dict = vendors.__classPrivateFieldGet(this, _dict, "f");
    if (typeof query === "string") {
      if (query.charAt(0) === "?") {
        query = query.slice(1);
      }
      for (let pairs = query.split("&"), i = 0, length = pairs.length; i < length; i++) {
        const value = pairs[i];
        const index = value.indexOf("=");
        try {
          if (index > -1) {
            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));
          } else if (value.length) {
            appendTo(dict, decode(value), "");
          }
        } catch (err) {
          {
            console.warn(`[Taro warn] URL 参数 ${value} decode 异常`);
          }
        }
      }
    } else {
      if (isArray(query)) {
        for (let i = 0, length = query.length; i < length; i++) {
          const value = query[i];
          appendTo(dict, value[0], value[1]);
        }
      } else if (query.forEach) {
        query.forEach(addEach, dict);
      } else {
        for (const key in query) {
          appendTo(dict, key, query[key]);
        }
      }
    }
  }
  append(name, value) {
    appendTo(vendors.__classPrivateFieldGet(this, _dict, "f"), name, value);
  }
  delete(name) {
    delete vendors.__classPrivateFieldGet(this, _dict, "f")[name];
  }
  get(name) {
    const dict = vendors.__classPrivateFieldGet(this, _dict, "f");
    return name in dict ? dict[name][0] : null;
  }
  getAll(name) {
    const dict = vendors.__classPrivateFieldGet(this, _dict, "f");
    return name in dict ? dict[name].slice(0) : [];
  }
  has(name) {
    return name in vendors.__classPrivateFieldGet(this, _dict, "f");
  }
  keys() {
    return Object.keys(vendors.__classPrivateFieldGet(this, _dict, "f"));
  }
  set(name, value) {
    vendors.__classPrivateFieldGet(this, _dict, "f")[name] = ["" + value];
  }
  forEach(callback, thisArg) {
    const dict = vendors.__classPrivateFieldGet(this, _dict, "f");
    Object.getOwnPropertyNames(dict).forEach(function(name) {
      dict[name].forEach(function(value) {
        callback.call(thisArg, value, name, this);
      }, this);
    }, this);
  }
  toJSON() {
    return {};
  }
  toString() {
    const dict = vendors.__classPrivateFieldGet(this, _dict, "f");
    const query = [];
    for (const key in dict) {
      const name = encode(key);
      for (let i = 0, value = dict[key]; i < value.length; i++) {
        query.push(name + "=" + encode(value[i]));
      }
    }
    return query.join("&");
  }
}, _dict = /* @__PURE__ */ new WeakMap(), _a);
var _TaroURL_hash, _TaroURL_hostname, _TaroURL_pathname, _TaroURL_port, _TaroURL_protocol, _TaroURL_search;
class TaroURL {
  static createObjectURL() {
    throw new Error("Oops, not support URL.createObjectURL() in miniprogram.");
  }
  static revokeObjectURL() {
    throw new Error("Oops, not support URL.revokeObjectURL() in miniprogram.");
  }
  constructor(url, base) {
    _TaroURL_hash.set(this, "");
    _TaroURL_hostname.set(this, "");
    _TaroURL_pathname.set(this, "");
    _TaroURL_port.set(this, "");
    _TaroURL_protocol.set(this, "");
    _TaroURL_search.set(this, void 0);
    if (!isString(url))
      url = String(url);
    const parseResult = parseUrlBase(url, base);
    const { hash, hostname, pathname, port, protocol, search } = parseResult;
    vendors.__classPrivateFieldSet(this, _TaroURL_hash, hash, "f");
    vendors.__classPrivateFieldSet(this, _TaroURL_hostname, hostname, "f");
    vendors.__classPrivateFieldSet(this, _TaroURL_pathname, pathname || "/", "f");
    vendors.__classPrivateFieldSet(this, _TaroURL_port, port, "f");
    vendors.__classPrivateFieldSet(this, _TaroURL_protocol, protocol, "f");
    vendors.__classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(search), "f");
  }
  /* public property */
  get protocol() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_protocol, "f");
  }
  set protocol(val) {
    isString(val) && vendors.__classPrivateFieldSet(this, _TaroURL_protocol, val.trim(), "f");
  }
  get host() {
    return this.hostname + (this.port ? ":" + this.port : "");
  }
  set host(val) {
    if (val && isString(val)) {
      val = val.trim();
      const { hostname, port } = parseUrl(`//${val}`);
      this.hostname = hostname;
      this.port = port;
    }
  }
  get hostname() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_hostname, "f");
  }
  set hostname(val) {
    val && isString(val) && vendors.__classPrivateFieldSet(this, _TaroURL_hostname, val.trim(), "f");
  }
  get port() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_port, "f");
  }
  set port(val) {
    isString(val) && vendors.__classPrivateFieldSet(this, _TaroURL_port, val.trim(), "f");
  }
  get pathname() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_pathname, "f");
  }
  set pathname(val) {
    if (isString(val)) {
      val = val.trim();
      const HEAD_REG = /^(\/|\.\/|\.\.\/)/;
      let temp = val;
      while (HEAD_REG.test(temp)) {
        temp = temp.replace(HEAD_REG, "");
      }
      if (temp)
        vendors.__classPrivateFieldSet(this, _TaroURL_pathname, "/" + temp, "f");
      else
        vendors.__classPrivateFieldSet(this, _TaroURL_pathname, "/", "f");
    }
  }
  get search() {
    const val = vendors.__classPrivateFieldGet(this, _TaroURL_search, "f").toString();
    return val.length === 0 || val.startsWith("?") ? val : `?${val}`;
  }
  set search(val) {
    if (isString(val)) {
      val = val.trim();
      vendors.__classPrivateFieldSet(this, _TaroURL_search, new URLSearchParams(val), "f");
    }
  }
  get hash() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_hash, "f");
  }
  set hash(val) {
    if (isString(val)) {
      val = val.trim();
      if (val)
        vendors.__classPrivateFieldSet(this, _TaroURL_hash, val.startsWith("#") ? val : `#${val}`, "f");
      else
        vendors.__classPrivateFieldSet(this, _TaroURL_hash, "", "f");
    }
  }
  get href() {
    return `${this.protocol}//${this.host}${this.pathname}${this.search}${this.hash}`;
  }
  set href(val) {
    if (val && isString(val)) {
      val = val.trim();
      const { protocol, hostname, port, hash, search, pathname } = parseUrl(val);
      this.protocol = protocol;
      this.hostname = hostname;
      this.pathname = pathname;
      this.port = port;
      this.hash = hash;
      this.search = search;
    }
  }
  get origin() {
    return `${this.protocol}//${this.host}`;
  }
  set origin(val) {
    if (val && isString(val)) {
      val = val.trim();
      const { protocol, hostname, port } = parseUrl(val);
      this.protocol = protocol;
      this.hostname = hostname;
      this.port = port;
    }
  }
  get searchParams() {
    return vendors.__classPrivateFieldGet(this, _TaroURL_search, "f");
  }
  // public method
  toString() {
    return this.href;
  }
  toJSON() {
    return this.toString();
  }
  // convenient for deconstructor
  _toRaw() {
    return {
      protocol: this.protocol,
      port: this.port,
      host: this.host,
      hostname: this.hostname,
      pathname: this.pathname,
      hash: this.hash,
      search: this.search,
      origin: this.origin,
      href: this.href
    };
  }
}
_TaroURL_hash = /* @__PURE__ */ new WeakMap(), _TaroURL_hostname = /* @__PURE__ */ new WeakMap(), _TaroURL_pathname = /* @__PURE__ */ new WeakMap(), _TaroURL_port = /* @__PURE__ */ new WeakMap(), _TaroURL_protocol = /* @__PURE__ */ new WeakMap(), _TaroURL_search = /* @__PURE__ */ new WeakMap();
const TaroURLProvider = TaroURL;
function parseUrl(url = "") {
  const result = {
    href: "",
    origin: "",
    protocol: "",
    hostname: "",
    host: "",
    port: "",
    pathname: "",
    search: "",
    hash: ""
  };
  if (!url || !isString(url))
    return result;
  url = url.trim();
  const PATTERN = /^(([^:/?#]+):)?\/\/(([^/?#]+):(.+)@)?([^/?#:]*)(:(\d+))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  const matches = url.match(PATTERN);
  if (!matches)
    return result;
  result.protocol = matches[1] || "https:";
  result.hostname = matches[6] || "taro.com";
  result.port = matches[8] || "";
  result.pathname = matches[9] || "/";
  result.search = matches[10] || "";
  result.hash = matches[12] || "";
  result.href = url;
  result.origin = result.protocol + "//" + result.hostname;
  result.host = result.hostname + (result.port ? `:${result.port}` : "");
  return result;
}
function parseUrlBase(url, base) {
  const VALID_URL = /^(https?:)\/\//i;
  let fullUrl = "";
  let parsedBase = null;
  if (!isUndefined(base)) {
    base = String(base).trim();
    if (!VALID_URL.test(base))
      throw new TypeError(`Failed to construct 'URL': Invalid base URL`);
    parsedBase = parseUrl(base);
  }
  url = String(url).trim();
  if (VALID_URL.test(url)) {
    fullUrl = url;
  } else if (parsedBase) {
    if (url) {
      if (url.startsWith("//")) {
        fullUrl = parsedBase.protocol + url;
      } else {
        fullUrl = parsedBase.origin + (url.startsWith("/") ? url : `/${url}`);
      }
    } else {
      fullUrl = parsedBase.href;
    }
  } else {
    throw new TypeError(`Failed to construct 'URL': Invalid URL`);
  }
  return parseUrl(fullUrl);
}
var _TaroLocation_instances, _TaroLocation_url, _TaroLocation_noCheckUrl, _TaroLocation_window, _TaroLocation_reset, _TaroLocation_getPreValue, _TaroLocation_rollBack, _TaroLocation_recordHistory, _TaroLocation_checkUrlChange;
const INIT_URL = "https://taro.com";
const cache = new RuntimeCache("location");
class TaroLocation extends Events {
  constructor(options2) {
    super();
    _TaroLocation_instances.add(this);
    _TaroLocation_url.set(this, new TaroURLProvider(INIT_URL));
    _TaroLocation_noCheckUrl.set(this, false);
    _TaroLocation_window.set(this, void 0);
    vendors.__classPrivateFieldSet(this, _TaroLocation_window, options2.window, "f");
    vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
    this.on("__set_href_without_history__", (href) => {
      vendors.__classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
      const lastHash = vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
      vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").href = generateFullUrl(href);
      if (lastHash !== vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hash) {
        vendors.__classPrivateFieldGet(this, _TaroLocation_window, "f").trigger("hashchange");
      }
      vendors.__classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
    }, null);
    this.on(CONTEXT_ACTIONS.INIT, () => {
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_reset).call(this);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      cache.set(pageId2, {
        lastHref: this.href
      });
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      if (cache.has(pageId2)) {
        const ctx = cache.get(pageId2);
        vendors.__classPrivateFieldSet(this, _TaroLocation_noCheckUrl, true, "f");
        vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").href = ctx.lastHref;
        vendors.__classPrivateFieldSet(this, _TaroLocation_noCheckUrl, false, "f");
      }
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      cache.delete(pageId2);
    }, null);
  }
  /* public property */
  get protocol() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").protocol;
  }
  set protocol(val) {
    const REG = /^(http|https):$/i;
    if (!val || !isString(val) || !REG.test(val.trim()))
      return;
    val = val.trim();
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").protocol = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get host() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").host;
  }
  set host(val) {
    if (!val || !isString(val))
      return;
    val = val.trim();
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").host = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get hostname() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hostname;
  }
  set hostname(val) {
    if (!val || !isString(val))
      return;
    val = val.trim();
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hostname = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get port() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").port;
  }
  set port(val) {
    const xVal = Number(val = val.trim());
    if (!isNumber(xVal) || xVal <= 0)
      return;
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").port = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get pathname() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").pathname;
  }
  set pathname(val) {
    if (!val || !isString(val))
      return;
    val = val.trim();
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").pathname = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get search() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").search;
  }
  set search(val) {
    if (!val || !isString(val))
      return;
    val = val.trim();
    val = val.startsWith("?") ? val : `?${val}`;
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").search = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get hash() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hash;
  }
  // 小程序的navigateTo存在截断hash字符串的问题
  set hash(val) {
    if (!val || !isString(val))
      return;
    val = val.trim();
    val = val.startsWith("#") ? val : `#${val}`;
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").hash = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get href() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").href;
  }
  set href(val) {
    const REG = /^(http:|https:)?\/\/.+/;
    if (!val || !isString(val) || !REG.test(val = val.trim()))
      return;
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").href = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  get origin() {
    return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").origin;
  }
  set origin(val) {
    const REG = /^(http:|https:)?\/\/.+/;
    if (!val || !isString(val) || !REG.test(val = val.trim()))
      return;
    const preValue = vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_getPreValue).call(this);
    vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").origin = val;
    if (vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_checkUrlChange).call(this, preValue))
      vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_recordHistory).call(this);
  }
  /* public method */
  assign() {
    warn(true, "小程序环境中调用location.assign()无效.");
  }
  reload() {
    warn(true, "小程序环境中调用location.reload()无效.");
  }
  replace(url) {
    this.trigger("__set_href_without_history__", url);
  }
  toString() {
    return this.href;
  }
  // For debug
  get cache() {
    return cache;
  }
}
_TaroLocation_url = /* @__PURE__ */ new WeakMap(), _TaroLocation_noCheckUrl = /* @__PURE__ */ new WeakMap(), _TaroLocation_window = /* @__PURE__ */ new WeakMap(), _TaroLocation_instances = /* @__PURE__ */ new WeakSet(), _TaroLocation_reset = function _TaroLocation_reset2() {
  const Current2 = getCurrentInstance();
  const router = Current2.router;
  if (router) {
    const { path, params } = router;
    const searchArr = Object.keys(params).map((key) => {
      return `${key}=${params[key]}`;
    });
    const searchStr = searchArr.length > 0 ? "?" + searchArr.join("&") : "";
    const url = `${INIT_URL}${path.startsWith("/") ? path : "/" + path}${searchStr}`;
    vendors.__classPrivateFieldSet(this, _TaroLocation_url, new TaroURLProvider(url), "f");
    this.trigger("__reset_history__", this.href);
  }
}, _TaroLocation_getPreValue = function _TaroLocation_getPreValue2() {
  return vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
}, _TaroLocation_rollBack = function _TaroLocation_rollBack2(href) {
  vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f").href = href;
}, _TaroLocation_recordHistory = function _TaroLocation_recordHistory2() {
  this.trigger("__record_history__", this.href);
}, _TaroLocation_checkUrlChange = function _TaroLocation_checkUrlChange2(preValue) {
  if (vendors.__classPrivateFieldGet(this, _TaroLocation_noCheckUrl, "f")) {
    return false;
  }
  const { protocol, hostname, port, pathname, search, hash } = vendors.__classPrivateFieldGet(this, _TaroLocation_url, "f")._toRaw();
  if (protocol !== preValue.protocol || hostname !== preValue.hostname || port !== preValue.port) {
    vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
    return false;
  }
  if (pathname !== preValue.pathname) {
    return true;
  }
  if (search !== preValue.search) {
    return true;
  }
  if (hash !== preValue.hash) {
    vendors.__classPrivateFieldGet(this, _TaroLocation_window, "f").trigger("hashchange");
    return true;
  }
  vendors.__classPrivateFieldGet(this, _TaroLocation_instances, "m", _TaroLocation_rollBack).call(this, preValue.href);
  return false;
};
const Location = TaroLocation;
function generateFullUrl(val = "") {
  const origin = INIT_URL;
  if (/^[/?#]/.test(val)) {
    return origin + val;
  }
  return val;
}
const machine = "Macintosh";
const arch = "Intel Mac OS X 10_14_5";
const engine = "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36";
const msg = "(" + machine + "; " + arch + ") " + engine;
const nav = {
  appCodeName: "Mozilla",
  appName: "Netscape",
  appVersion: "5.0 " + msg,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: "MacIntel",
  plugins: [],
  product: "Taro",
  productSub: "20030107",
  userAgent: "Mozilla/5.0 " + msg,
  vendor: "Joyent",
  vendorSub: ""
};
let now;
(function() {
  let loadTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    now = () => performance.now();
  } else if (Date.now) {
    loadTime = Date.now();
    now = () => Date.now() - loadTime;
  } else {
    loadTime = (/* @__PURE__ */ new Date()).getTime();
    now = () => (/* @__PURE__ */ new Date()).getTime() - loadTime;
  }
})();
let lastTime = 0;
const _raf = function(callback) {
  const _now = now();
  const nextTime = Math.max(lastTime + 16, _now);
  return setTimeout(function() {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
const _caf = function(seed) {
  clearTimeout(seed);
};
class TaroWindow extends Events {
  constructor() {
    super();
    this.navigator = nav;
    this.requestAnimationFrame = _raf;
    this.cancelAnimationFrame = _caf;
    this.getComputedStyle = taroGetComputedStyleProvider;
    const globalProperties = [
      ...Object.getOwnPropertyNames(global || {}),
      ...Object.getOwnPropertySymbols(global || {})
    ];
    globalProperties.forEach((property) => {
      if (property === "atob" || property === "document")
        return;
      if (!Object.prototype.hasOwnProperty.call(this, property)) {
        try {
          this[property] = global[property];
        } catch (e) {
          {
            console.warn(`[Taro warn] window.${String(property)} 在赋值到 window 时报错`);
          }
        }
      }
    });
    this.Date || (this.Date = Date);
    this.location = new Location({ window: this });
    this.history = new History(this.location, { window: this });
    this.initEvent();
  }
  initEvent() {
    const _location = this.location;
    const _history = this.history;
    this.on(CONTEXT_ACTIONS.INIT, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.INIT, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.RECOVER, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.RECOVER, pageId2);
      _history.trigger(CONTEXT_ACTIONS.RECOVER, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.RESTORE, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.RESTORE, pageId2);
      _history.trigger(CONTEXT_ACTIONS.RESTORE, pageId2);
    }, null);
    this.on(CONTEXT_ACTIONS.DESTORY, (pageId2) => {
      _location.trigger(CONTEXT_ACTIONS.DESTORY, pageId2);
      _history.trigger(CONTEXT_ACTIONS.DESTORY, pageId2);
    }, null);
  }
  get document() {
    return env.document;
  }
  addEventListener(event, callback) {
    if (!isString(event))
      return;
    this.on(event, callback, null);
  }
  removeEventListener(event, callback) {
    if (!isString(event))
      return;
    this.off(event, callback, null);
  }
  setTimeout(...args) {
    return setTimeout(...args);
  }
  clearTimeout(...args) {
    return clearTimeout(...args);
  }
}
const taroWindowProvider = env.window = new TaroWindow();
const taroLocationProvider = taroWindowProvider.location;
const taroHistoryProvider = taroWindowProvider.history;
const incrementId = () => {
  const chatCodes = [];
  for (let i = 65; i <= 90; i++) {
    chatCodes.push(i);
  }
  for (let i = 97; i <= 122; i++) {
    chatCodes.push(i);
  }
  const chatCodesLen = chatCodes.length - 1;
  const list = [0, 0];
  return () => {
    const target = list.map((item) => chatCodes[item]);
    const res = String.fromCharCode(...target);
    let tailIdx = list.length - 1;
    list[tailIdx]++;
    while (list[tailIdx] > chatCodesLen) {
      list[tailIdx] = 0;
      tailIdx = tailIdx - 1;
      if (tailIdx < 0) {
        list.push(0);
        break;
      }
      list[tailIdx]++;
    }
    return res;
  };
};
function isElement(node) {
  return node.nodeType === 1;
}
function isText(node) {
  return node.nodeType === 3;
}
function isComment(node) {
  return node.nodeName === COMMENT;
}
function isHasExtractProp(el) {
  const res = Object.keys(el.props).find((prop) => {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith("data-"));
  });
  return Boolean(res);
}
function isParentBinded(node, type) {
  var _a2;
  while (node = (node === null || node === void 0 ? void 0 : node.parentElement) || null) {
    if (!node || node.nodeName === ROOT_STR || node.nodeName === "root-portal") {
      return false;
    } else if ((_a2 = node.__handlers[type]) === null || _a2 === void 0 ? void 0 : _a2.length) {
      return true;
    }
  }
  return false;
}
function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st";
    case ID:
      return UID;
    case CLASS:
      return "cl";
    default:
      return key;
  }
}
const customWrapperCache = /* @__PURE__ */ new Map();
function extend(ctor, methodName, options2) {
  if (isFunction(options2)) {
    options2 = {
      value: options2
    };
  }
  Object.defineProperty(ctor.prototype, methodName, Object.assign({ configurable: true, enumerable: true }, options2));
}
let componentsAlias$1;
function getComponentsAlias() {
  if (!componentsAlias$1) {
    componentsAlias$1 = getComponentsAlias$1(internalComponents);
  }
  return componentsAlias$1;
}
function convertNumber2PX(value) {
  return value + "px";
}
class ClassList {
  constructor(className, el) {
    this.tokenList = [];
    this.el = el;
    className.trim().split(/\s+/).forEach((token) => this.tokenList.push(token));
  }
  get value() {
    return this.toString();
  }
  get length() {
    return this.tokenList.length;
  }
  add() {
    let index = 0;
    let updated = false;
    const tokens = arguments;
    const length = tokens.length;
    const tokenList = this.tokenList;
    do {
      const token = tokens[index];
      if (this.checkTokenIsValid(token) && !~tokenList.indexOf(token)) {
        tokenList.push(token);
        updated = true;
      }
    } while (++index < length);
    if (updated) {
      this._update();
    }
  }
  remove() {
    let i = 0;
    let updated = false;
    const tokens = arguments;
    const length = tokens.length;
    const tokenList = this.tokenList;
    do {
      const token = tokens[i] + "";
      if (!this.checkTokenIsValid(token))
        continue;
      const index = tokenList.indexOf(token);
      if (~tokenList.indexOf(token)) {
        tokenList.splice(index, 1);
        updated = true;
      }
    } while (++i < length);
    if (updated) {
      this._update();
    }
  }
  contains(token) {
    if (!this.checkTokenIsValid(token))
      return false;
    return !!~this.tokenList.indexOf(token);
  }
  toggle(token, force) {
    const result = this.contains(token);
    const method = result ? force !== true && "remove" : force !== false && "add";
    if (method) {
      this[method](token);
    }
    if (force === true || force === false) {
      return force;
    } else {
      return !result;
    }
  }
  replace(token, replacement_token) {
    if (!this.checkTokenIsValid(token) || !this.checkTokenIsValid(replacement_token))
      return;
    const index = this.tokenList.indexOf(token);
    if (~index) {
      this.tokenList.splice(index, 1, replacement_token);
      this._update();
    }
  }
  toString() {
    return this.tokenList.filter((v) => v !== "").join(" ");
  }
  checkTokenIsValid(token) {
    if (token === "" || /\s/.test(token))
      return false;
    return true;
  }
  _update() {
    this.el.className = this.value;
  }
}
class EventSource extends Map {
  removeNode(child) {
    const { sid, uid } = child;
    this.delete(sid);
    if (uid !== sid && uid)
      this.delete(uid);
  }
  removeNodeTree(child) {
    this.removeNode(child);
    const { childNodes } = child;
    childNodes.forEach((node) => this.removeNodeTree(node));
  }
}
const eventSource = new EventSource();
let SPECIAL_NODES;
let componentsAlias;
function hydrate(node) {
  var _a2;
  componentsAlias || (componentsAlias = getComponentsAlias());
  SPECIAL_NODES || (SPECIAL_NODES = hooks.call("getSpecialNodes"));
  const nodeName = node.nodeName;
  let compileModeName = null;
  if (isText(node)) {
    return {
      sid: node.sid,
      [
        "v"
        /* Shortcuts.Text */
      ]: node.nodeValue,
      [
        "nn"
        /* Shortcuts.NodeName */
      ]: ((_a2 = componentsAlias[nodeName]) === null || _a2 === void 0 ? void 0 : _a2._num) || "8"
    };
  }
  const data = {
    [
      "nn"
      /* Shortcuts.NodeName */
    ]: nodeName,
    sid: node.sid
  };
  if (node.uid !== node.sid) {
    data.uid = node.uid;
  }
  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data[
      "nn"
      /* Shortcuts.NodeName */
    ] = `static-${nodeName}`;
    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = PURE_VIEW;
    }
  }
  const { props } = node;
  for (const prop in props) {
    const propInCamelCase = toCamelCase(prop);
    if (!prop.startsWith("data-") && // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE && propInCamelCase !== COMPILE_MODE) {
      data[propInCamelCase] = props[prop];
    }
    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data[
        "nn"
        /* Shortcuts.NodeName */
      ] = CATCH_VIEW;
    }
    if (propInCamelCase === COMPILE_MODE) {
      compileModeName = props[prop];
    }
  }
  data[
    "cn"
    /* Shortcuts.Childnodes */
  ] = node.childNodes.filter((node2) => !isComment(node2)).map(hydrate);
  if (node.className !== "") {
    data[
      "cl"
      /* Shortcuts.Class */
    ] = node.className;
  }
  const cssText = node.cssText;
  if (cssText !== "" && nodeName !== "swiper-item") {
    data[
      "st"
      /* Shortcuts.Style */
    ] = cssText;
  }
  hooks.call("modifyHydrateData", data, node);
  const nn = data[
    "nn"
    /* Shortcuts.NodeName */
  ];
  const componentAlias = componentsAlias[nn];
  if (componentAlias) {
    data[
      "nn"
      /* Shortcuts.NodeName */
    ] = componentAlias._num;
    for (const prop in data) {
      if (prop in componentAlias) {
        data[componentAlias[prop]] = data[prop];
        delete data[prop];
      }
    }
  }
  if (compileModeName !== null) {
    data[
      "nn"
      /* Shortcuts.NodeName */
    ] = compileModeName;
  }
  const resData = hooks.call("transferHydrateData", data, node, componentAlias);
  return resData || data;
}
class TaroEventTarget {
  constructor() {
    this.__handlers = {};
  }
  addEventListener(type, handler, options2) {
    type = type.toLowerCase();
    hooks.call("onAddEvent", type, handler, options2, this);
    if (type === "regionchange") {
      this.addEventListener("begin", handler, options2);
      this.addEventListener("end", handler, options2);
      return;
    }
    let isCapture = Boolean(options2);
    let isOnce = false;
    if (isObject(options2)) {
      isCapture = Boolean(options2.capture);
      isOnce = Boolean(options2.once);
    }
    if (isOnce) {
      const wrapper = function() {
        handler.apply(this, arguments);
        this.removeEventListener(type, wrapper);
      };
      this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options2), { once: false }));
      return;
    }
    warn(isCapture, "Taro 暂未实现 event 的 capture 特性。");
    const oldHandler = handler;
    handler = function() {
      return oldHandler.apply(this, arguments);
    };
    handler.oldHandler = oldHandler;
    const handlers = this.__handlers[type];
    if (isArray(handlers)) {
      handlers.push(handler);
    } else {
      this.__handlers[type] = [handler];
    }
  }
  removeEventListener(type, handler) {
    type = type.toLowerCase();
    if (type === "regionchange") {
      this.removeEventListener("begin", handler);
      this.removeEventListener("end", handler);
      return;
    }
    if (!handler) {
      return;
    }
    const handlers = this.__handlers[type];
    if (!isArray(handlers)) {
      return;
    }
    const index = handlers.findIndex((item) => {
      if (item === handler || item.oldHandler === handler)
        return true;
    });
    warn(index === -1, `事件: '${type}' 没有注册在 DOM 中，因此不会被移除。`);
    handlers.splice(index, 1);
  }
  isAnyEventBinded() {
    const handlers = this.__handlers;
    const isAnyEventBinded = Object.keys(handlers).find((key) => handlers[key].length);
    return Boolean(isAnyEventBinded);
  }
}
const CHILDNODES = "cn";
const nodeId = incrementId();
class TaroNode extends TaroEventTarget {
  constructor() {
    super();
    this.parentNode = null;
    this.childNodes = [];
    this.hydrate = (node) => () => hydrate(node);
    this.uid = "_" + nodeId();
    this.sid = this.uid;
    eventSource.set(this.sid, this);
  }
  updateChildNodes(isClean) {
    const cleanChildNodes = () => [];
    const rerenderChildNodes = () => {
      const childNodes = this.childNodes.filter((node) => !isComment(node));
      return childNodes.map(hydrate);
    };
    this.enqueueUpdate({
      path: `${this._path}.${CHILDNODES}`,
      value: isClean ? cleanChildNodes : rerenderChildNodes
    });
  }
  updateSingleChild(index) {
    this.childNodes.forEach((child, childIndex) => {
      if (isComment(child))
        return;
      if (index && childIndex < index)
        return;
      this.enqueueUpdate({
        path: child._path,
        value: this.hydrate(child)
      });
    });
  }
  get _root() {
    var _a2;
    return ((_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2._root) || null;
  }
  findIndex(refChild) {
    const index = this.childNodes.indexOf(refChild);
    ensure(index !== -1, "The node to be replaced is not a child of this node.");
    return index;
  }
  get _path() {
    const parentNode = this.parentNode;
    if (parentNode) {
      const list = parentNode.childNodes.filter((node) => !isComment(node));
      const indexOfNode = list.indexOf(this);
      const index = hooks.call("getPathIndex", indexOfNode);
      return `${parentNode._path}.${CHILDNODES}.${index}`;
    }
    return "";
  }
  get nextSibling() {
    const parentNode = this.parentNode;
    return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
  }
  get previousSibling() {
    const parentNode = this.parentNode;
    return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
  }
  get parentElement() {
    const parentNode = this.parentNode;
    if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1) {
      return parentNode;
    }
    return null;
  }
  get firstChild() {
    return this.childNodes[0] || null;
  }
  get lastChild() {
    const childNodes = this.childNodes;
    return childNodes[childNodes.length - 1] || null;
  }
  /**
   * @textContent 目前只能置空子元素
   * @TODO 等待完整 innerHTML 实现
   */
  // eslint-disable-next-line accessor-pairs
  set textContent(text) {
    const removedNodes = this.childNodes.slice();
    const addedNodes = [];
    while (this.firstChild) {
      this.removeChild(this.firstChild, { doUpdate: false });
    }
    if (text === "") {
      this.updateChildNodes(true);
    } else {
      const newText = env.document.createTextNode(text);
      addedNodes.push(newText);
      this.appendChild(newText);
      this.updateChildNodes();
    }
    MutationObserver.record({
      type: "childList",
      target: this,
      removedNodes,
      addedNodes
    });
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
   * @scenario
   * [A,B,C]
   *   1. insert D before C, D has no parent
   *   2. insert D before C, D has the same parent of C
   *   3. insert D before C, D has the different parent of C
   */
  insertBefore(newChild, refChild, isReplace) {
    if (newChild.nodeName === DOCUMENT_FRAGMENT) {
      newChild.childNodes.reduceRight((previousValue, currentValue) => {
        this.insertBefore(currentValue, previousValue);
        return currentValue;
      }, refChild);
      return newChild;
    }
    newChild.remove({ cleanRef: false });
    let index = 0;
    newChild.parentNode = this;
    if (refChild) {
      index = this.findIndex(refChild);
      this.childNodes.splice(index, 0, newChild);
    } else {
      this.childNodes.push(newChild);
    }
    const childNodesLength = this.childNodes.length;
    if (this._root) {
      if (!refChild) {
        const isOnlyChild = childNodesLength === 1;
        if (isOnlyChild) {
          this.updateChildNodes();
        } else {
          this.enqueueUpdate({
            path: newChild._path,
            value: this.hydrate(newChild)
          });
        }
      } else if (isReplace) {
        this.enqueueUpdate({
          path: newChild._path,
          value: this.hydrate(newChild)
        });
      } else {
        const mark = childNodesLength * 2 / 3;
        if (mark > index) {
          this.updateChildNodes();
        } else {
          this.updateSingleChild(index);
        }
      }
    }
    MutationObserver.record({
      type: "childList",
      target: this,
      addedNodes: [newChild],
      removedNodes: isReplace ? [refChild] : [],
      nextSibling: isReplace ? refChild.nextSibling : refChild || null,
      /** insertBefore & appendChild */
      previousSibling: newChild.previousSibling
    });
    return newChild;
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
   * @scenario
   * [A,B,C]
   *   1. append C, C has no parent
   *   2. append C, C has the same parent of B
   *   3. append C, C has the different parent of B
   */
  appendChild(newChild) {
    return this.insertBefore(newChild);
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild
   * @scenario
   * [A,B,C]
   *   1. replace B with C, C has no parent
   *   2. replace B with C, C has no parent, C has the same parent of B
   *   3. replace B with C, C has no parent, C has the different parent of B
   */
  replaceChild(newChild, oldChild) {
    if (oldChild.parentNode !== this)
      return;
    this.insertBefore(newChild, oldChild, true);
    oldChild.remove({ doUpdate: false });
    return oldChild;
  }
  /**
   * @doc https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
   * @scenario
   * [A,B,C]
   *   1. remove A or B
   *   2. remove C
   */
  removeChild(child, options2 = {}) {
    const { cleanRef, doUpdate } = options2;
    if (cleanRef !== false && doUpdate !== false) {
      MutationObserver.record({
        type: "childList",
        target: this,
        removedNodes: [child],
        nextSibling: child.nextSibling,
        previousSibling: child.previousSibling
      });
    }
    const index = this.findIndex(child);
    this.childNodes.splice(index, 1);
    child.parentNode = null;
    if (cleanRef !== false) {
      eventSource.removeNodeTree(child);
    }
    if (this._root && doUpdate !== false) {
      this.updateChildNodes();
    }
    return child;
  }
  remove(options2) {
    var _a2;
    (_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2.removeChild(this, options2);
  }
  hasChildNodes() {
    return this.childNodes.length > 0;
  }
  enqueueUpdate(payload) {
    var _a2;
    (_a2 = this._root) === null || _a2 === void 0 ? void 0 : _a2.enqueueUpdate(payload);
  }
  get ownerDocument() {
    return env.document;
  }
  static extend(methodName, options2) {
    extend(TaroNode, methodName, options2);
  }
}
const WEBKIT = "webkit";
const styleProperties = [
  "all",
  "appearance",
  "blockOverflow",
  "blockSize",
  "bottom",
  "clear",
  "contain",
  "content",
  "continue",
  "cursor",
  "direction",
  "display",
  "filter",
  "float",
  "gap",
  "height",
  "inset",
  "isolation",
  "left",
  "letterSpacing",
  "lightingColor",
  "markerSide",
  "mixBlendMode",
  "opacity",
  "order",
  "position",
  "quotes",
  "resize",
  "right",
  "rowGap",
  "tabSize",
  "tableLayout",
  "top",
  "userSelect",
  "verticalAlign",
  "visibility",
  "voiceFamily",
  "volume",
  "whiteSpace",
  "widows",
  "width",
  "zIndex",
  "pointerEvents",
  "aspectRatio"
  /** 非常用 style */
  // 'azimuth',
  // 'backfaceVisibility',
  // 'baselineShift',
  // 'captionSide',
  // 'chains',
  // 'dominantBaseline',
  // 'elevation',
  // 'emptyCells',
  // 'forcedColorAdjust',
  // 'glyphOrientationVertical',
  // 'hangingPunctuation',
  // 'hyphenateCharacter',
  // 'hyphens',
  // 'imageOrientation',
  // 'imageResolution',
  // 'orphans',
  // 'playDuring',
  // 'pointerEvents',
  // 'regionFragment',
  // 'richness',
  // 'running',
  // 'scrollBehavior',
  // 'speechRate',
  // 'stress',
  // 'stringSet',
  // 'unicodeBidi',
  // 'willChange',
  // 'writingMode',
];
function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach((item) => {
    styleProperties.push(prefix + item);
    if (prefix === WEBKIT) {
      styleProperties.push("Webkit" + item);
    }
  });
}
const color = "Color";
const style = "Style";
const width = "Width";
const image = "Image";
const size = "Size";
const color_style_width = [color, style, width];
const fitlength_fitwidth_image = ["FitLength", "FitWidth", image];
const fitlength_fitwidth_image_radius = [...fitlength_fitwidth_image, "Radius"];
const color_style_width_fitlength_fitwidth_image = [...color_style_width, ...fitlength_fitwidth_image];
const endRadius_startRadius = ["EndRadius", "StartRadius"];
const bottom_left_right_top = ["Bottom", "Left", "Right", "Top"];
const end_start = ["End", "Start"];
const content_items_self = ["Content", "Items", "Self"];
const blockSize_height_inlineSize_width = ["BlockSize", "Height", "InlineSize", width];
const after_before = ["After", "Before"];
combine("borderBlock", color_style_width);
combine("borderBlockEnd", color_style_width);
combine("borderBlockStart", color_style_width);
combine("outline", [...color_style_width, "Offset"]);
combine("border", [...color_style_width, "Boundary", "Break", "Collapse", "Radius", "Spacing"]);
combine("borderFit", ["Length", width]);
combine("borderInline", color_style_width);
combine("borderInlineEnd", color_style_width);
combine("borderInlineStart", color_style_width);
combine("borderLeft", color_style_width_fitlength_fitwidth_image);
combine("borderRight", color_style_width_fitlength_fitwidth_image);
combine("borderTop", color_style_width_fitlength_fitwidth_image);
combine("borderBottom", color_style_width_fitlength_fitwidth_image);
combine("textDecoration", [color, style, "Line"]);
combine("textEmphasis", [color, style, "Position"]);
combine("scrollMargin", bottom_left_right_top);
combine("scrollPadding", bottom_left_right_top);
combine("padding", bottom_left_right_top);
combine("margin", [...bottom_left_right_top, "Trim"]);
combine("scrollMarginBlock", end_start);
combine("scrollMarginInline", end_start);
combine("scrollPaddingBlock", end_start);
combine("scrollPaddingInline", end_start);
combine("gridColumn", end_start);
combine("gridRow", end_start);
combine("insetBlock", end_start);
combine("insetInline", end_start);
combine("marginBlock", end_start);
combine("marginInline", end_start);
combine("paddingBlock", end_start);
combine("paddingInline", end_start);
combine("pause", after_before);
combine("cue", after_before);
combine("mask", ["Clip", "Composite", image, "Mode", "Origin", "Position", "Repeat", size, "Type"]);
combine("borderImage", ["Outset", "Repeat", "Slice", "Source", "Transform", width]);
combine("maskBorder", ["Mode", "Outset", "Repeat", "Slice", "Source", width]);
combine("font", ["Family", "FeatureSettings", "Kerning", "LanguageOverride", "MaxSize", "MinSize", "OpticalSizing", "Palette", size, "SizeAdjust", "Stretch", style, "Weight", "VariationSettings"]);
combine("transform", ["Box", "Origin", style]);
combine("background", [color, image, "Attachment", "BlendMode", "Clip", "Origin", "Position", "Repeat", size]);
combine("listStyle", [image, "Position", "Type"]);
combine("scrollSnap", ["Align", "Stop", "Type"]);
combine("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]);
combine("gridTemplate", ["Areas", "Columns", "Rows"]);
combine("overflow", ["Block", "Inline", "Wrap", "X", "Y"]);
combine("transition", ["Delay", "Duration", "Property", "TimingFunction"]);
combine("color", ["Adjust", "InterpolationFilters", "Scheme"]);
combine("textAlign", ["All", "Last"]);
combine("page", ["BreakAfter", "BreakBefore", "BreakInside"]);
combine("animation", ["Delay", "Direction", "Duration", "FillMode", "IterationCount", "Name", "PlayState", "TimingFunction"]);
combine("flex", ["Basis", "Direction", "Flow", "Grow", "Shrink", "Wrap"]);
combine("offset", [...after_before, ...end_start, "Anchor", "Distance", "Path", "Position", "Rotate"]);
combine("perspective", ["Origin"]);
combine("clip", ["Path", "Rule"]);
combine("flow", ["From", "Into"]);
combine("align", ["Content", "Items", "Self"], true);
combine("alignment", ["Adjust", "Baseline"], true);
combine("borderStart", endRadius_startRadius, true);
combine("borderEnd", endRadius_startRadius, true);
combine("borderCorner", ["Fit", image, "ImageTransform"], true);
combine("borderTopLeft", fitlength_fitwidth_image_radius, true);
combine("borderTopRight", fitlength_fitwidth_image_radius, true);
combine("borderBottomLeft", fitlength_fitwidth_image_radius, true);
combine("borderBottomRight", fitlength_fitwidth_image_radius, true);
combine("column", ["s", "Count", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "Span", width], true);
combine("break", [...after_before, "Inside"], true);
combine("wrap", [...after_before, "Flow", "Inside", "Through"], true);
combine("justify", content_items_self, true);
combine("place", content_items_self, true);
combine("max", [...blockSize_height_inlineSize_width, "Lines"], true);
combine("min", blockSize_height_inlineSize_width, true);
combine("line", ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"], true);
combine("inline", ["BoxAlign", size, "Sizing"], true);
combine("text", ["CombineUpright", "GroupAlign", "Height", "Indent", "Justify", "Orientation", "Overflow", "Shadow", "SpaceCollapse", "SpaceTrim", "Spacing", "Transform", "UnderlinePosition", "Wrap"], true);
combine("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], true);
combine("word", ["Break", "Spacing", "Wrap"], true);
combine("object", ["Fit", "Position"], true);
combine("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], true);
combine(WEBKIT, ["LineClamp", "BoxOrient", "TextFillColor", "TextStroke", "TextStrokeColor", "TextStrokeWidth"], true);
function recordCss(obj) {
  MutationObserver.record({
    type: "attributes",
    target: obj._element,
    attributeName: "style",
    oldValue: obj.cssText
  });
}
function enqueueUpdate(obj) {
  const element = obj._element;
  if (element._root) {
    element.enqueueUpdate({
      path: `${element._path}.${"st"}`,
      value: obj.cssText
    });
  }
}
function setStyle(newVal, styleKey) {
  warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, `Style 属性 ${styleKey} 的值数据量过大，可能会影响渲染性能，考虑使用 CSS 类或其它方案替代。`);
  const old = this[styleKey];
  if (old === newVal)
    return;
  !this._pending && recordCss(this);
  if (isNull(newVal) || isUndefined(newVal) || newVal === "") {
    this._usedStyleProp.delete(styleKey);
    delete this._value[styleKey];
  } else {
    this._usedStyleProp.add(styleKey);
    this._value[styleKey] = newVal;
  }
  !this._pending && enqueueUpdate(this);
}
function initStyle(ctor, styleProperties2) {
  const properties = {};
  for (let i = 0; i < styleProperties2.length; i++) {
    const styleKey = styleProperties2[i];
    if (ctor[styleKey])
      return;
    properties[styleKey] = {
      get() {
        const val = this._value[styleKey];
        return isNull(val) || isUndefined(val) ? "" : val;
      },
      set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  }
  Object.defineProperties(ctor.prototype, properties);
}
function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}
class Style {
  constructor(element) {
    this._element = element;
    this._usedStyleProp = /* @__PURE__ */ new Set();
    this._value = {};
  }
  setCssVariables(styleKey) {
    this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
      enumerable: true,
      configurable: true,
      get: () => {
        return this._value[styleKey] || "";
      },
      set: (newVal) => {
        setStyle.call(this, newVal, styleKey);
      }
    });
  }
  get cssText() {
    if (!this._usedStyleProp.size)
      return "";
    const texts = [];
    this._usedStyleProp.forEach((key) => {
      const val = this[key];
      if (isNull(val) || isUndefined(val))
        return;
      let styleName = isCssVariable(key) ? key : toDashed(key);
      if (styleName.indexOf("webkit") === 0 || styleName.indexOf("Webkit") === 0) {
        styleName = `-${styleName}`;
      }
      texts.push(`${styleName}: ${val};`);
    });
    return texts.join(" ");
  }
  set cssText(str) {
    this._pending = true;
    recordCss(this);
    this._usedStyleProp.forEach((prop) => {
      this.removeProperty(prop);
    });
    if (str === "" || isUndefined(str) || isNull(str)) {
      this._pending = false;
      enqueueUpdate(this);
      return;
    }
    const rules = str.split(";");
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i].trim();
      if (rule === "") {
        continue;
      }
      const [propName, ...valList] = rule.split(":");
      const val = valList.join(":");
      if (isUndefined(val)) {
        continue;
      }
      this.setProperty(propName.trim(), val.trim());
    }
    this._pending = false;
    enqueueUpdate(this);
  }
  setProperty(propertyName, value) {
    if (propertyName[0] === "-") {
      this.setCssVariables(propertyName);
    } else {
      propertyName = toCamelCase(propertyName);
    }
    if (isNull(value) || isUndefined(value)) {
      this.removeProperty(propertyName);
    } else {
      this[propertyName] = value;
    }
  }
  removeProperty(propertyName) {
    propertyName = toCamelCase(propertyName);
    if (!this._usedStyleProp.has(propertyName)) {
      return "";
    }
    const value = this[propertyName];
    this[propertyName] = void 0;
    return value;
  }
  getPropertyValue(propertyName) {
    propertyName = toCamelCase(propertyName);
    const value = this[propertyName];
    if (!value) {
      return "";
    }
    return value;
  }
}
initStyle(Style, styleProperties);
hooks.tap("injectNewStyleProperties", (newStyleProperties) => {
  if (isArray(newStyleProperties)) {
    initStyle(Style, newStyleProperties);
  } else {
    if (typeof newStyleProperties !== "string")
      return;
    initStyle(Style, [newStyleProperties]);
  }
});
function returnTrue() {
  return true;
}
function treeToArray(root, predict) {
  const array = [];
  const filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  let object = root;
  while (object) {
    if (object.nodeType === 1 && filter(object)) {
      array.push(object);
    }
    object = following(object, root);
  }
  return array;
}
function following(el, root) {
  const firstChild = el.firstChild;
  const isElmentTypeValid = el.nodeType === 1 || el.nodeType === 9;
  if (firstChild && isElmentTypeValid) {
    return firstChild;
  }
  let current = el;
  do {
    if (current === root) {
      return null;
    }
    const nextSibling = current.nextSibling;
    if (nextSibling) {
      return nextSibling;
    }
    current = current.parentElement;
  } while (current);
  return null;
}
class TaroElement extends TaroNode {
  constructor() {
    super();
    this.props = {};
    this.dataset = EMPTY_OBJ;
    this.nodeType = 1;
    this.style = new Style(this);
    hooks.call("patchElement", this);
  }
  _stopPropagation(event) {
    let target = this;
    while (target = target.parentNode) {
      const listeners = target.__handlers[event.type];
      if (!isArray(listeners)) {
        continue;
      }
      for (let i = listeners.length; i--; ) {
        const l = listeners[i];
        l._stop = true;
      }
    }
  }
  get id() {
    return this.getAttribute(ID);
  }
  set id(val) {
    this.setAttribute(ID, val);
  }
  get className() {
    return this.getAttribute(CLASS) || "";
  }
  set className(val) {
    this.setAttribute(CLASS, val);
  }
  get cssText() {
    return this.getAttribute(STYLE) || "";
  }
  get classList() {
    return new ClassList(this.className, this);
  }
  get children() {
    return this.childNodes.filter(isElement);
  }
  get attributes() {
    const props = this.props;
    const propKeys = Object.keys(props);
    const style2 = this.style.cssText;
    const attrs = propKeys.map((key) => ({ name: key, value: props[key] }));
    return attrs.concat(style2 ? { name: STYLE, value: style2 } : []);
  }
  get textContent() {
    let text = "";
    const childNodes = this.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      text += childNodes[i].textContent;
    }
    return text;
  }
  set textContent(text) {
    super.textContent = text;
  }
  hasAttribute(qualifiedName) {
    return !isUndefined(this.props[qualifiedName]);
  }
  hasAttributes() {
    return this.attributes.length > 0;
  }
  get focus() {
    return function() {
      this.setAttribute(FOCUS, true);
    };
  }
  // 兼容 Vue3，详情请见：https://github.com/NervJS/taro/issues/10579
  set focus(value) {
    this.setAttribute(FOCUS, value);
  }
  blur() {
    this.setAttribute(FOCUS, false);
  }
  setAttribute(qualifiedName, value) {
    warn(isString(value) && value.length > PROPERTY_THRESHOLD, `元素 ${this.nodeName} 的 ${qualifiedName} 属性值数据量过大，可能会影响渲染性能。考虑降低图片转为 base64 的阈值或在 CSS 中使用 base64。`);
    const isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();
    if (qualifiedName !== STYLE) {
      MutationObserver.record({
        target: this,
        type: "attributes",
        attributeName: qualifiedName,
        oldValue: this.getAttribute(qualifiedName)
      });
    }
    switch (qualifiedName) {
      case STYLE:
        this.style.cssText = value;
        break;
      case ID:
        if (this.uid !== this.sid) {
          eventSource.delete(this.uid);
        }
        value = String(value);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        break;
      default:
        this.props[qualifiedName] = value;
        if (qualifiedName.startsWith("data-")) {
          if (this.dataset === EMPTY_OBJ) {
            this.dataset = /* @__PURE__ */ Object.create(null);
          }
          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ""))] = value;
        }
        break;
    }
    if (!this._root)
      return;
    const componentsAlias2 = getComponentsAlias();
    const _alias = componentsAlias2[this.nodeName];
    const viewAlias = componentsAlias2[VIEW]._num;
    const staticViewAlias = componentsAlias2[STATIC_VIEW]._num;
    const catchViewAlias = componentsAlias2[CATCH_VIEW]._num;
    const _path = this._path;
    qualifiedName = shortcutAttr(qualifiedName);
    const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
    const payload = {
      path: `${_path}.${qualifiedNameInCamelCase}`,
      value: isFunction(value) ? () => value : value
    };
    hooks.call("modifySetAttrPayload", this, qualifiedName, payload, componentsAlias2);
    if (_alias) {
      const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
      payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
    }
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (qualifiedNameInCamelCase === CATCHMOVE) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: value ? catchViewAlias : this.isAnyEventBinded() ? viewAlias : staticViewAlias
        });
      } else if (isPureView && isHasExtractProp(this)) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: staticViewAlias
        });
      }
    }
  }
  removeAttribute(qualifiedName) {
    const isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();
    MutationObserver.record({
      target: this,
      type: "attributes",
      attributeName: qualifiedName,
      oldValue: this.getAttribute(qualifiedName)
    });
    if (qualifiedName === STYLE) {
      this.style.cssText = "";
    } else {
      const isInterrupt = hooks.call("onRemoveAttribute", this, qualifiedName);
      if (isInterrupt) {
        return;
      }
      if (!this.props.hasOwnProperty(qualifiedName)) {
        return;
      }
      delete this.props[qualifiedName];
    }
    if (!this._root)
      return;
    const componentsAlias2 = getComponentsAlias();
    const _alias = componentsAlias2[this.nodeName];
    const viewAlias = componentsAlias2[VIEW]._num;
    const staticViewAlias = componentsAlias2[STATIC_VIEW]._num;
    const pureViewAlias = componentsAlias2[PURE_VIEW]._num;
    const _path = this._path;
    qualifiedName = shortcutAttr(qualifiedName);
    const qualifiedNameInCamelCase = toCamelCase(qualifiedName);
    const payload = {
      path: `${_path}.${qualifiedNameInCamelCase}`,
      value: ""
    };
    hooks.call("modifyRmAttrPayload", this, qualifiedName, payload, componentsAlias2);
    if (_alias) {
      const qualifiedNameAlias = _alias[qualifiedNameInCamelCase] || qualifiedName;
      payload.path = `${_path}.${toCamelCase(qualifiedNameAlias)}`;
    }
    this.enqueueUpdate(payload);
    if (this.nodeName === VIEW) {
      if (qualifiedNameInCamelCase === CATCHMOVE) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: this.isAnyEventBinded() ? viewAlias : isHasExtractProp(this) ? staticViewAlias : pureViewAlias
        });
      } else if (isStaticView && !isHasExtractProp(this)) {
        this.enqueueUpdate({
          path: `${_path}.${"nn"}`,
          value: pureViewAlias
        });
      }
    }
  }
  getAttribute(qualifiedName) {
    const attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
    return attr !== null && attr !== void 0 ? attr : "";
  }
  getElementsByTagName(tagName) {
    return treeToArray(this, (el) => {
      return el.nodeName === tagName || tagName === "*" && this !== el;
    });
  }
  getElementsByClassName(className) {
    const classNames = className.trim().split(/\s+/);
    return treeToArray(this, (el) => {
      const classList = el.classList;
      return classNames.every((c) => classList.contains(c));
    });
  }
  dispatchEvent(event) {
    const cancelable = event.cancelable;
    const listeners = this.__handlers[event.type];
    if (!isArray(listeners)) {
      return false;
    }
    for (let i = listeners.length; i--; ) {
      const listener = listeners[i];
      let result;
      if (listener._stop) {
        listener._stop = false;
      } else {
        hooks.call("modifyDispatchEvent", event, this);
        result = listener.call(this, event);
      }
      if ((result === false || event._end) && cancelable) {
        event.defaultPrevented = true;
      }
      if (!isUndefined(result) && event.mpEvent) {
        const res = hooks.call("modifyTaroEventReturn", this, event, result);
        if (res) {
          event.mpEvent[EVENT_CALLBACK_RESULT] = result;
        }
      }
      if (event._end && event._stop) {
        break;
      }
    }
    if (event._stop) {
      this._stopPropagation(event);
    }
    return listeners != null;
  }
  addEventListener(type, handler, options2) {
    const name = this.nodeName;
    const SPECIAL_NODES2 = hooks.call("getSpecialNodes");
    let sideEffect = true;
    if (isObject(options2) && options2.sideEffect === false) {
      sideEffect = false;
      delete options2.sideEffect;
    }
    hooks.call("modifyAddEventListener", this, sideEffect, getComponentsAlias);
    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES2.indexOf(name) > -1) {
      const componentsAlias2 = getComponentsAlias();
      const alias = componentsAlias2[name]._num;
      this.enqueueUpdate({
        path: `${this._path}.${"nn"}`,
        value: alias
      });
    }
    super.addEventListener(type, handler, options2);
  }
  removeEventListener(type, handler, sideEffect = true) {
    super.removeEventListener(type, handler);
    const name = this.nodeName;
    const SPECIAL_NODES2 = hooks.call("getSpecialNodes");
    hooks.call("modifyRemoveEventListener", this, sideEffect, getComponentsAlias);
    if (sideEffect !== false && !this.isAnyEventBinded() && SPECIAL_NODES2.indexOf(name) > -1) {
      const componentsAlias2 = getComponentsAlias();
      const value = isHasExtractProp(this) ? `static-${name}` : `pure-${name}`;
      const valueAlias = componentsAlias2[value]._num;
      this.enqueueUpdate({
        path: `${this._path}.${"nn"}`,
        value: valueAlias
      });
    }
  }
  static extend(methodName, options2) {
    extend(TaroElement, methodName, options2);
  }
}
const options = {
  prerender: true,
  debug: false
};
function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}
function feedPosition(position, str, len) {
  const start = position.index;
  const end = position.index = start + len;
  for (let i = start; i < end; i++) {
    const char = str.charAt(i);
    if (char === "\n") {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}
function jumpPosition(position, str, end) {
  const len = end - position.index;
  return feedPosition(position, str, len);
}
function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}
const whitespace = /\s/;
function isWhitespaceChar(char) {
  return whitespace.test(char);
}
const equalSign = /=/;
function isEqualSignChar(char) {
  return equalSign.test(char);
}
function shouldBeIgnore(tagName) {
  const name = tagName.toLowerCase();
  if (options.html.skipElements.has(name)) {
    return true;
  }
  return false;
}
const alphanumeric = /[A-Za-z0-9]/;
function findTextEnd(str, index) {
  while (true) {
    const textEnd = str.indexOf("<", index);
    if (textEnd === -1) {
      return textEnd;
    }
    const char = str.charAt(textEnd + 1);
    if (char === "/" || char === "!" || alphanumeric.test(char)) {
      return textEnd;
    }
    index = textEnd + 1;
  }
}
function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor)))
    return false;
  const len = html.length;
  for (let i = cursor - 1; i > wordBegin; i--) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char))
        return false;
      break;
    }
  }
  for (let i = cursor + 1; i < len; i++) {
    const char = html.charAt(i);
    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char))
        return false;
      return true;
    }
  }
}
class Scaner {
  constructor(html) {
    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }
  scan() {
    const { html, position } = this;
    const len = html.length;
    while (position.index < len) {
      const start = position.index;
      this.scanText();
      if (position.index === start) {
        const isComment2 = html.startsWith("!--", start + 1);
        if (isComment2) {
          this.scanComment();
        } else {
          const tagName = this.scanTag();
          if (shouldBeIgnore(tagName)) {
            this.scanSkipTag(tagName);
          }
        }
      }
    }
    return this.tokens;
  }
  scanText() {
    const type = "text";
    const { html, position } = this;
    let textEnd = findTextEnd(html, position.index);
    if (textEnd === position.index) {
      return;
    }
    if (textEnd === -1) {
      textEnd = html.length;
    }
    const start = copyPosition(position);
    const content = html.slice(position.index, textEnd);
    jumpPosition(position, html, textEnd);
    const end = copyPosition(position);
    this.tokens.push({ type, content, position: { start, end } });
  }
  scanComment() {
    const type = "comment";
    const { html, position } = this;
    const start = copyPosition(position);
    feedPosition(position, html, 4);
    let contentEnd = html.indexOf("-->", position.index);
    let commentEnd = contentEnd + 3;
    if (contentEnd === -1) {
      contentEnd = commentEnd = html.length;
    }
    const content = html.slice(position.index, contentEnd);
    jumpPosition(position, html, commentEnd);
    this.tokens.push({
      type,
      content,
      position: {
        start,
        end: copyPosition(position)
      }
    });
  }
  scanTag() {
    this.scanTagStart();
    const tagName = this.scanTagName();
    this.scanAttrs();
    this.scanTagEnd();
    return tagName;
  }
  scanTagStart() {
    const type = "tag-start";
    const { html, position } = this;
    const secondChar = html.charAt(position.index + 1);
    const close = secondChar === "/";
    const start = copyPosition(position);
    feedPosition(position, html, close ? 2 : 1);
    this.tokens.push({ type, close, position: { start } });
  }
  scanTagEnd() {
    const type = "tag-end";
    const { html, position } = this;
    const firstChar = html.charAt(position.index);
    const close = firstChar === "/";
    feedPosition(position, html, close ? 2 : 1);
    const end = copyPosition(position);
    this.tokens.push({ type, close, position: { end } });
  }
  scanTagName() {
    const type = "tag";
    const { html, position } = this;
    const len = html.length;
    let start = position.index;
    while (start < len) {
      const char = html.charAt(start);
      const isTagChar = !(isWhitespaceChar(char) || char === "/" || char === ">");
      if (isTagChar)
        break;
      start++;
    }
    let end = start + 1;
    while (end < len) {
      const char = html.charAt(end);
      const isTagChar = !(isWhitespaceChar(char) || char === "/" || char === ">");
      if (!isTagChar)
        break;
      end++;
    }
    jumpPosition(position, html, end);
    const tagName = html.slice(start, end);
    this.tokens.push({
      type,
      content: tagName
    });
    return tagName;
  }
  scanAttrs() {
    const { html, position, tokens } = this;
    let cursor = position.index;
    let quote = null;
    let wordBegin = cursor;
    const words = [];
    const len = html.length;
    while (cursor < len) {
      const char = html.charAt(cursor);
      if (quote) {
        const isQuoteEnd = char === quote;
        if (isQuoteEnd) {
          quote = null;
        }
        cursor++;
        continue;
      }
      const isTagEnd = char === "/" || char === ">";
      if (isTagEnd) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        break;
      }
      if (isWordEnd(cursor, wordBegin, html)) {
        if (cursor !== wordBegin) {
          words.push(html.slice(wordBegin, cursor));
        }
        wordBegin = cursor + 1;
        cursor++;
        continue;
      }
      const isQuoteStart = char === "'" || char === '"';
      if (isQuoteStart) {
        quote = char;
        cursor++;
        continue;
      }
      cursor++;
    }
    jumpPosition(position, html, cursor);
    const wLen = words.length;
    const type = "attribute";
    for (let i = 0; i < wLen; i++) {
      const word = words[i];
      const isNotPair = word.includes("=");
      if (isNotPair) {
        const secondWord = words[i + 1];
        if (secondWord && secondWord.startsWith("=")) {
          if (secondWord.length > 1) {
            const newWord = word + secondWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
          const thirdWord = words[i + 2];
          i += 1;
          if (thirdWord) {
            const newWord = word + "=" + thirdWord;
            tokens.push({ type, content: newWord });
            i += 1;
            continue;
          }
        }
      }
      if (word.endsWith("=")) {
        const secondWord = words[i + 1];
        if (secondWord && !secondWord.includes("=")) {
          const newWord2 = word + secondWord;
          tokens.push({ type, content: newWord2 });
          i += 1;
          continue;
        }
        const newWord = word.slice(0, -1);
        tokens.push({ type, content: newWord });
        continue;
      }
      tokens.push({ type, content: word });
    }
  }
  scanSkipTag(tagName) {
    const { html, position } = this;
    const safeTagName = tagName.toLowerCase();
    const len = html.length;
    while (position.index < len) {
      const nextTag = html.indexOf("</", position.index);
      if (nextTag === -1) {
        this.scanText();
        break;
      }
      jumpPosition(position, html, nextTag);
      const name = this.scanTag();
      if (safeTagName === name.toLowerCase()) {
        break;
      }
    }
  }
}
function unquote(str) {
  const car = str.charAt(0);
  const end = str.length - 1;
  const isQuoteStart = car === '"' || car === "'";
  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }
  return str;
}
const LEFT_BRACKET = "{";
const RIGHT_BRACKET = "}";
const CLASS_SELECTOR = ".";
const ID_SELECTOR = "#";
const CHILD_COMBINATOR = ">";
const GENERAL_SIBLING_COMBINATOR = "~";
const ADJACENT_SIBLING_COMBINATOR = "+";
class StyleTagParser {
  constructor() {
    this.styles = [];
  }
  extractStyle(src) {
    const REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
    let html = src;
    html = html.replace(REG_STYLE, (_, $1) => {
      const style2 = $1.trim();
      this.stringToSelector(style2);
      return "";
    });
    return html.trim();
  }
  stringToSelector(style2) {
    let lb = style2.indexOf(LEFT_BRACKET);
    while (lb > -1) {
      const rb = style2.indexOf(RIGHT_BRACKET);
      const selectors = style2.slice(0, lb).trim();
      let content = style2.slice(lb + 1, rb);
      content = content.replace(/:(.*);/g, function(_, $1) {
        const t = $1.trim().replace(/ +/g, "+++");
        return `:${t};`;
      });
      content = content.replace(/ /g, "");
      content = content.replace(/\+\+\+/g, " ");
      if (!/;$/.test(content)) {
        content += ";";
      }
      selectors.split(",").forEach((src) => {
        const selectorList = this.parseSelector(src);
        this.styles.push({
          content,
          selectorList
        });
      });
      style2 = style2.slice(rb + 1);
      lb = style2.indexOf(LEFT_BRACKET);
    }
  }
  parseSelector(src) {
    const list = src.trim().replace(/ *([>~+]) */g, " $1").replace(/ +/g, " ").replace(/\[\s*([^[\]=\s]+)\s*=\s*([^[\]=\s]+)\s*\]/g, "[$1=$2]").split(" ");
    const selectors = list.map((item) => {
      const firstChar = item.charAt(0);
      const selector = {
        isChild: firstChar === CHILD_COMBINATOR,
        isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
        isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
        tag: null,
        id: null,
        class: [],
        attrs: []
      };
      item = item.replace(/^[>~+]/, "");
      item = item.replace(/\[(.+?)\]/g, function(_, $1) {
        const [key, value] = $1.split("=");
        const all = $1.indexOf("=") === -1;
        const attr = {
          all,
          key,
          value: all ? null : value
        };
        selector.attrs.push(attr);
        return "";
      });
      item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function(_, $1) {
        if ($1[0] === ID_SELECTOR) {
          selector.id = $1.substr(1);
        } else if ($1[0] === CLASS_SELECTOR) {
          selector.class.push($1.substr(1));
        }
        return "";
      });
      if (item !== "") {
        selector.tag = item;
      }
      return selector;
    });
    return selectors;
  }
  matchStyle(tagName, el, list) {
    const res = sortStyles(this.styles).reduce((str, { content, selectorList }, i) => {
      let idx = list[i];
      let selector = selectorList[idx];
      const nextSelector = selectorList[idx + 1];
      if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
        selector = nextSelector;
        idx += 1;
        list[i] += 1;
      }
      let isMatch = this.matchCurrent(tagName, el, selector);
      if (isMatch && selector.isGeneralSibling) {
        let prev = getPreviousElement(el);
        while (prev) {
          if (prev.h5tagName && this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
            isMatch = true;
            break;
          }
          prev = getPreviousElement(prev);
          isMatch = false;
        }
      }
      if (isMatch && selector.isAdjacentSibling) {
        const prev = getPreviousElement(el);
        if (!prev || !prev.h5tagName) {
          isMatch = false;
        } else {
          const isSiblingMatch = this.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1]);
          if (!isSiblingMatch) {
            isMatch = false;
          }
        }
      }
      if (isMatch) {
        if (idx === selectorList.length - 1) {
          return str + content;
        } else if (idx < selectorList.length - 1) {
          list[i] += 1;
        }
      } else {
        if (selector.isChild && idx > 0) {
          list[i] -= 1;
          if (this.matchCurrent(tagName, el, selectorList[list[i]])) {
            list[i] += 1;
          }
        }
      }
      return str;
    }, "");
    return res;
  }
  matchCurrent(tagName, el, selector) {
    if (selector.tag && selector.tag !== tagName)
      return false;
    if (selector.id && selector.id !== el.id)
      return false;
    if (selector.class.length) {
      const classList = el.className.split(" ");
      for (let i = 0; i < selector.class.length; i++) {
        const cls = selector.class[i];
        if (classList.indexOf(cls) === -1) {
          return false;
        }
      }
    }
    if (selector.attrs.length) {
      for (let i = 0; i < selector.attrs.length; i++) {
        const { all, key, value } = selector.attrs[i];
        if (all && !el.hasAttribute(key)) {
          return false;
        } else {
          const attr = el.getAttribute(key);
          if (attr !== unquote(value || "")) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
function getPreviousElement(el) {
  const parent = el.parentElement;
  if (!parent)
    return null;
  const prev = el.previousSibling;
  if (!prev)
    return null;
  if (prev.nodeType === 1) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
}
function sortStyles(styles) {
  return styles.sort((s1, s2) => {
    const hundreds1 = getHundredsWeight(s1.selectorList);
    const hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2)
      return hundreds1 - hundreds2;
    const tens1 = getTensWeight(s1.selectorList);
    const tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2)
      return tens1 - tens2;
    const ones1 = getOnesWeight(s1.selectorList);
    const ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}
function getHundredsWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.id ? 1 : 0), 0);
}
function getTensWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + cur.class.length + cur.attrs.length, 0);
}
function getOnesWeight(selectors) {
  return selectors.reduce((pre, cur) => pre + (cur.tag ? 1 : 0), 0);
}
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return (val) => !!map[val.toLowerCase()];
}
const specialMiniElements = {
  img: "image",
  iframe: "web-view"
};
const internalCompsList = Object.keys(internalComponents).map((i) => i.toLowerCase()).join(",");
const isMiniElements = makeMap(internalCompsList);
const isInlineElements = makeMap("a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b");
const isBlockElements = makeMap("address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt");
const closingTagAncestorBreakers = {
  li: ["ul", "ol", "menu"],
  dt: ["dl"],
  dd: ["dl"],
  tbody: ["table"],
  thead: ["table"],
  tfoot: ["table"],
  tr: ["table"],
  td: ["table"]
};
function hasTerminalParent(tagName, stack) {
  const tagParents = closingTagAncestorBreakers[tagName];
  if (tagParents) {
    let currentIndex = stack.length - 1;
    while (currentIndex >= 0) {
      const parentTagName = stack[currentIndex].tagName;
      if (parentTagName === tagName) {
        break;
      }
      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }
      currentIndex--;
    }
  }
  return false;
}
function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }
  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return "view";
  } else if (isInlineElements(tag)) {
    return "text";
  }
  return "view";
}
function splitEqual(str) {
  const sep = "=";
  const idx = str.indexOf(sep);
  if (idx === -1)
    return [str];
  const key = str.slice(0, idx).trim();
  const value = str.slice(idx + sep.length).trim();
  return [key, value];
}
function format(children, document, styleOptions, parent) {
  return children.filter((child) => {
    if (child.type === "comment") {
      return false;
    } else if (child.type === "text") {
      return child.content !== "";
    }
    return true;
  }).map((child) => {
    if (child.type === "text") {
      let text = document.createTextNode(child.content);
      if (isFunction(options.html.transformText)) {
        text = options.html.transformText(text, child);
      }
      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }
    const el = document.createElement(getTagName(child.tagName));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);
    if (!options.html.renderHTMLTag) {
      el.className = `h5-${child.tagName}`;
    }
    for (let i = 0; i < child.attributes.length; i++) {
      const attr = child.attributes[i];
      const [key, value] = splitEqual(attr);
      if (key === "class") {
        el.className += " " + unquote(value);
      } else if (key[0] === "o" && key[1] === "n") {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }
    const { styleTagParser, descendantList } = styleOptions;
    const list = descendantList.slice();
    const style2 = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute("style", style2 + el.style.cssText);
    format(child.children, document, {
      styleTagParser,
      descendantList: list
    }, el);
    if (isFunction(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }
    return el;
  });
}
function parser(html, document) {
  const styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  const tokens = new Scaner(html).scan();
  const root = { tagName: "", children: [], type: "element", attributes: [] };
  const state = { tokens, options, cursor: 0, stack: [root] };
  parse(state);
  return format(root.children, document, {
    styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}
function parse(state) {
  const { tokens, stack } = state;
  let { cursor } = state;
  const len = tokens.length;
  let nodes = stack[stack.length - 1].children;
  while (cursor < len) {
    const token = tokens[cursor];
    if (token.type !== "tag-start") {
      nodes.push(token);
      cursor++;
      continue;
    }
    const tagToken = tokens[++cursor];
    cursor++;
    const tagName = tagToken.content.toLowerCase();
    if (token.close) {
      let index = stack.length;
      let shouldRewind = false;
      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }
      while (cursor < len) {
        const endToken = tokens[cursor];
        if (endToken.type !== "tag-end")
          break;
        cursor++;
      }
      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }
    const isClosingTag = options.html.closingElements.has(tagName);
    let shouldRewindToAutoClose = isClosingTag;
    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }
    if (shouldRewindToAutoClose) {
      let currentIndex = stack.length - 1;
      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          const previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }
        currentIndex = currentIndex - 1;
      }
    }
    const attributes = [];
    let attrToken;
    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === "tag-end")
        break;
      attributes.push(attrToken.content);
      cursor++;
    }
    cursor++;
    const children = [];
    const element = {
      type: "element",
      tagName: tagToken.content,
      attributes,
      children
    };
    nodes.push(element);
    const hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));
    if (hasChildren) {
      stack.push({ tagName, children });
      const innerState = { tokens, cursor, stack };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }
  state.cursor = cursor;
}
options.html = {
  skipElements: /* @__PURE__ */ new Set(["style", "script"]),
  voidElements: /* @__PURE__ */ new Set([
    "!doctype",
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ]),
  closingElements: /* @__PURE__ */ new Set([
    "html",
    "head",
    "body",
    "p",
    "dt",
    "dd",
    "li",
    "option",
    "thead",
    "th",
    "tbody",
    "tr",
    "td",
    "tfoot",
    "colgroup"
  ]),
  renderHTMLTag: false
};
function setInnerHTML(element, html) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  const children = parser(html, element.ownerDocument);
  for (let i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}
function getTemplateContent(ctx) {
  if (ctx.nodeName === "template") {
    const document = ctx.ownerDocument;
    const content = document.createElement(DOCUMENT_FRAGMENT);
    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach((nodes) => {
      nodes.parentNode = content;
    });
    return content;
  }
}
function insertAdjacentHTML(position, html) {
  var _a2, _b;
  const parsedNodes = parser(html, this.ownerDocument);
  for (let i = 0; i < parsedNodes.length; i++) {
    const n = parsedNodes[i];
    switch (position) {
      case "beforebegin":
        (_a2 = this.parentNode) === null || _a2 === void 0 ? void 0 : _a2.insertBefore(n, this);
        break;
      case "afterbegin":
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }
        break;
      case "beforeend":
        this.appendChild(n);
        break;
      case "afterend":
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}
function cloneNode(isDeep = false) {
  const document = this.ownerDocument;
  let newNode;
  if (this.nodeType === 1) {
    newNode = document.createElement(this.nodeName);
  } else if (this.nodeType === 3) {
    newNode = document.createTextNode("");
  }
  for (const key in this) {
    const value = this[key];
    if ([PROPS, DATASET].includes(key) && typeof value === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === "_value") {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }
  if (isDeep) {
    newNode.childNodes = this.childNodes.map((node) => node.cloneNode(true));
  }
  return newNode;
}
{
  {
    TaroNode.extend("innerHTML", {
      set(html) {
        setInnerHTML.call(this, this, html);
      },
      get() {
        return "";
      }
    });
    {
      TaroNode.extend("insertAdjacentHTML", insertAdjacentHTML);
    }
  }
  {
    TaroNode.extend("cloneNode", cloneNode);
  }
  {
    TaroElement.extend("content", {
      get() {
        return getTemplateContent(this);
      }
    });
  }
}
class TaroEvent {
  constructor(type, opts, event) {
    this._stop = false;
    this._end = false;
    this.defaultPrevented = false;
    this.button = 0;
    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }
  stopPropagation() {
    this._stop = true;
  }
  stopImmediatePropagation() {
    this._end = this._stop = true;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
  get target() {
    var _a2, _b, _c, _d, _e;
    const cacheTarget = this.cacheTarget;
    if (!cacheTarget) {
      const target = Object.create(((_a2 = this.mpEvent) === null || _a2 === void 0 ? void 0 : _a2.target) || null);
      const currentEle = env.document.getElementById(((_b = target.dataset) === null || _b === void 0 ? void 0 : _b.sid) || target.id || null);
      const element = env.document.getElementById(((_c = target.targetDataset) === null || _c === void 0 ? void 0 : _c.sid) || ((_d = target.dataset) === null || _d === void 0 ? void 0 : _d.sid) || target.id || null);
      target.dataset = Object.assign(Object.assign({}, currentEle !== null ? currentEle.dataset : EMPTY_OBJ), element !== null ? element.dataset : EMPTY_OBJ);
      for (const key in (_e = this.mpEvent) === null || _e === void 0 ? void 0 : _e.detail) {
        target[key] = this.mpEvent.detail[key];
      }
      this.cacheTarget = target;
      return target;
    } else {
      return cacheTarget;
    }
  }
  get currentTarget() {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const cacheCurrentTarget = this.cacheCurrentTarget;
    if (!cacheCurrentTarget) {
      const doc = env.document;
      const currentTarget = Object.create(((_a2 = this.mpEvent) === null || _a2 === void 0 ? void 0 : _a2.currentTarget) || null);
      const element = doc.getElementById(((_b = currentTarget.dataset) === null || _b === void 0 ? void 0 : _b.sid) || currentTarget.id || null);
      const targetElement = doc.getElementById(((_e = (_d = (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.dataset) === null || _e === void 0 ? void 0 : _e.sid) || ((_g = (_f = this.mpEvent) === null || _f === void 0 ? void 0 : _f.target) === null || _g === void 0 ? void 0 : _g.id) || null);
      if (element === null || element && element === targetElement) {
        this.cacheCurrentTarget = this.target;
        return this.target;
      }
      currentTarget.dataset = element.dataset;
      for (const key in (_h = this.mpEvent) === null || _h === void 0 ? void 0 : _h.detail) {
        currentTarget[key] = this.mpEvent.detail[key];
      }
      this.cacheCurrentTarget = currentTarget;
      return currentTarget;
    } else {
      return cacheCurrentTarget;
    }
  }
}
function createEvent(event, node) {
  if (typeof event === "string") {
    return new TaroEvent(event, { bubbles: true, cancelable: true });
  }
  const domEv = new TaroEvent(event.type, { bubbles: true, cancelable: true }, event);
  for (const key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }
  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    domEv[KEY_CODE] = 13;
  }
  return domEv;
}
const eventsBatch = {};
function getEventCBResult(event) {
  const result = event[EVENT_CALLBACK_RESULT];
  if (!isUndefined(result)) {
    delete event[EVENT_CALLBACK_RESULT];
  }
  return result;
}
function eventHandler(event) {
  var _a2, _b;
  event.type === void 0 && Object.defineProperty(event, "type", {
    value: event._type
    // ohos only
  });
  event.detail === void 0 && Object.defineProperty(event, "detail", {
    value: event._detail || Object.assign({}, event)
    // ohos only
  });
  event.currentTarget = event.currentTarget || event.target || Object.assign({}, event);
  hooks.call("modifyMpEventImpl", event);
  const currentTarget = event.currentTarget;
  const id = ((_a2 = currentTarget.dataset) === null || _a2 === void 0 ? void 0 : _a2.sid) || currentTarget.id || ((_b = event.detail) === null || _b === void 0 ? void 0 : _b.id) || "";
  const node = env.document.getElementById(id);
  if (node) {
    const dispatch = () => {
      const e = createEvent(event, node);
      hooks.call("modifyTaroEvent", e, node);
      hooks.call("dispatchTaroEvent", e, node);
      hooks.call("dispatchTaroEventFinish", e, node);
    };
    if (hooks.isExist("batchedEventUpdates")) {
      const type = event.type;
      if (!hooks.call("isBubbleEvents", type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        hooks.call("batchedEventUpdates", () => {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach((fn) => fn());
            delete eventsBatch[type];
          }
          dispatch();
        });
        return getEventCBResult(event);
      } else {
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
      return getEventCBResult(event);
    }
  }
}
class FormElement extends TaroElement {
  get type() {
    var _a2;
    return (_a2 = this.props[TYPE]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set type(val) {
    this.setAttribute(TYPE, val);
  }
  get value() {
    const val = this.props[VALUE];
    return val == null ? "" : val;
  }
  set value(val) {
    this.setAttribute(VALUE, val);
  }
  dispatchEvent(event) {
    if (event.mpEvent) {
      const val = event.mpEvent.detail.value;
      if (event.type === CHANGE) {
        this.props.value = val;
      } else if (event.type === INPUT) {
        this.value = val;
      }
    }
    return super.dispatchEvent(event);
  }
}
function throttle(fn, threshold = 250, scope) {
  let lastTime2 = 0;
  let deferTimer;
  return function(...args) {
    const context = scope || this;
    const now2 = Date.now();
    if (now2 - lastTime2 > threshold) {
      fn.apply(this, args);
      lastTime2 = now2;
    } else {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        lastTime2 = now2;
        fn.apply(context, args);
      }, threshold);
    }
  };
}
function debounce(fn, ms = 250, scope) {
  let timer;
  return function(...args) {
    const context = scope || this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, ms);
  };
}
var _Performance_instances, _Performance_parseTime;
class Performance {
  constructor() {
    _Performance_instances.add(this);
    this.recorder = /* @__PURE__ */ new Map();
  }
  start(id) {
    if (!options.debug) {
      return;
    }
    this.recorder.set(id, Date.now());
  }
  stop(id, now2 = Date.now()) {
    if (!options.debug) {
      return;
    }
    const prev = this.recorder.get(id);
    if (!(prev >= 0))
      return;
    this.recorder.delete(id);
    const time = now2 - prev;
    console.log(`${id} 时长： ${time}ms 开始时间：${vendors.__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, prev)} 结束时间：${vendors.__classPrivateFieldGet(this, _Performance_instances, "m", _Performance_parseTime).call(this, now2)}`);
  }
  delayStop(id, delay = 500) {
    if (!options.debug) {
      return;
    }
    return debounce((now2 = Date.now(), cb) => {
      this.stop(id, now2);
      cb === null || cb === void 0 ? void 0 : cb();
    }, delay);
  }
}
_Performance_instances = /* @__PURE__ */ new WeakSet(), _Performance_parseTime = function _Performance_parseTime2(time) {
  const d = new Date(time);
  return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${`${d.getMilliseconds()}`.padStart(3, "0")}`;
};
const perf = new Performance();
function findCustomWrapper(root, dataPathArr) {
  const list = dataPathArr.slice(1);
  let currentData = root;
  let customWrapper;
  let splitedPath = "";
  list.some((item, i) => {
    const key = item.replace(/^\[(.+)\]$/, "$1").replace(/\bcn\b/g, "childNodes");
    currentData = currentData[key];
    if (isArray(currentData)) {
      currentData = currentData.filter((el) => !isComment(el));
    }
    if (isUndefined(currentData))
      return true;
    if (currentData.nodeName === CUSTOM_WRAPPER) {
      const res = customWrapperCache.get(currentData.sid);
      if (res) {
        customWrapper = res;
        splitedPath = dataPathArr.slice(i + 2).join(".");
      }
    }
  });
  if (customWrapper) {
    return {
      customWrapper,
      splitedPath
    };
  }
}
class TaroRootElement extends TaroElement {
  constructor() {
    super();
    this.updatePayloads = [];
    this.updateCallbacks = [];
    this.pendingUpdate = false;
    this.ctx = null;
    this.nodeName = ROOT_STR;
    this.tagName = ROOT_STR.toUpperCase();
  }
  get _path() {
    return ROOT_STR;
  }
  get _root() {
    return this;
  }
  enqueueUpdate(payload) {
    this.updatePayloads.push(payload);
    if (!this.pendingUpdate && this.ctx) {
      this.performUpdate();
    }
  }
  performUpdate(initRender = false, prerender) {
    this.pendingUpdate = true;
    const ctx = hooks.call("proxyToRaw", this.ctx);
    setTimeout(() => {
      const setDataMark = `${SET_DATA} 开始时间戳 ${Date.now()}`;
      perf.start(setDataMark);
      const data = /* @__PURE__ */ Object.create(null);
      const resetPaths = new Set(initRender ? ["root.cn.[0]", "root.cn[0]"] : []);
      while (this.updatePayloads.length > 0) {
        const { path, value } = this.updatePayloads.shift();
        if (path.endsWith(
          "cn"
          /* Shortcuts.Childnodes */
        )) {
          resetPaths.add(path);
        }
        data[path] = value;
      }
      for (const path in data) {
        resetPaths.forEach((p) => {
          if (path.includes(p) && path !== p) {
            delete data[path];
          }
        });
        const value = data[path];
        if (isFunction(value)) {
          data[path] = value();
        }
      }
      if (isFunction(prerender))
        return prerender(data);
      this.pendingUpdate = false;
      let normalUpdate = {};
      const customWrapperMap = /* @__PURE__ */ new Map();
      if (initRender) {
        normalUpdate = data;
      } else {
        for (const p in data) {
          const dataPathArr = p.split(".");
          const found = findCustomWrapper(this, dataPathArr);
          if (found) {
            const { customWrapper, splitedPath } = found;
            customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, customWrapperMap.get(customWrapper) || {}), { [`i.${splitedPath}`]: data[p] }));
          } else {
            normalUpdate[p] = data[p];
          }
        }
      }
      const customWrapperCount = customWrapperMap.size;
      const isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
      const updateArrLen = customWrapperCount + (isNeedNormalUpdate ? 1 : 0);
      let executeTime = 0;
      const cb = () => {
        if (++executeTime === updateArrLen) {
          perf.stop(setDataMark);
          this.flushUpdateCallback();
          initRender && perf.stop(PAGE_INIT);
        }
      };
      if (customWrapperCount) {
        customWrapperMap.forEach((data2, ctx2) => {
          if (options.debug) {
            console.log("custom wrapper setData: ", data2);
          }
          ctx2.setData(data2, cb);
        });
      }
      if (isNeedNormalUpdate) {
        if (options.debug) {
          console.log("page setData:", normalUpdate);
        }
        ctx.setData(normalUpdate, cb);
      }
    }, 0);
  }
  enqueueUpdateCallback(cb, ctx) {
    this.updateCallbacks.push(() => {
      ctx ? cb.call(ctx) : cb();
    });
  }
  flushUpdateCallback() {
    const updateCallbacks = this.updateCallbacks;
    if (!updateCallbacks.length)
      return;
    const copies = updateCallbacks.slice(0);
    this.updateCallbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
class TaroText extends TaroNode {
  constructor(value) {
    super();
    this.nodeType = 3;
    this.nodeName = "#text";
    this._value = value;
  }
  set textContent(text) {
    MutationObserver.record({
      target: this,
      type: "characterData",
      oldValue: this._value
    });
    this._value = text;
    this.enqueueUpdate({
      path: `${this._path}.${"v"}`,
      value: text
    });
  }
  get textContent() {
    return this._value;
  }
  set nodeValue(text) {
    this.textContent = text;
  }
  get nodeValue() {
    return this._value;
  }
  set data(text) {
    this.textContent = text;
  }
  get data() {
    return this._value;
  }
}
class AnchorElement extends TaroElement {
  get href() {
    var _a2;
    return (_a2 = this.props[
      "href"
      /* AnchorElementAttrs.HREF */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  set href(val) {
    this.setAttribute("href", val);
  }
  get protocol() {
    var _a2;
    return (_a2 = this.props[
      "protocol"
      /* AnchorElementAttrs.PROTOCOL */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get host() {
    var _a2;
    return (_a2 = this.props[
      "host"
      /* AnchorElementAttrs.HOST */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get search() {
    var _a2;
    return (_a2 = this.props[
      "search"
      /* AnchorElementAttrs.SEARCH */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get hash() {
    var _a2;
    return (_a2 = this.props[
      "hash"
      /* AnchorElementAttrs.HASH */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get hostname() {
    var _a2;
    return (_a2 = this.props[
      "hostname"
      /* AnchorElementAttrs.HOSTNAME */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get port() {
    var _a2;
    return (_a2 = this.props[
      "port"
      /* AnchorElementAttrs.PORT */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  get pathname() {
    var _a2;
    return (_a2 = this.props[
      "pathname"
      /* AnchorElementAttrs.PATHNAME */
    ]) !== null && _a2 !== void 0 ? _a2 : "";
  }
  setAttribute(qualifiedName, value) {
    if (qualifiedName === "href") {
      const willSetAttr = parseUrl(value);
      for (const k in willSetAttr) {
        super.setAttribute(k, willSetAttr[k]);
      }
    } else {
      super.setAttribute(qualifiedName, value);
    }
  }
}
class TransferElement extends TaroElement {
  constructor(dataName) {
    super();
    this.dataName = dataName;
    this.isTransferElement = true;
  }
  get _path() {
    return this.dataName;
  }
}
class TaroDocument extends TaroElement {
  constructor() {
    super();
    this.createEvent = createEvent;
    this.nodeType = 9;
    this.nodeName = DOCUMENT_ELEMENT_NAME;
  }
  createElement(type) {
    const nodeName = type.toLowerCase();
    let element;
    switch (true) {
      case nodeName === ROOT_STR:
        element = new TaroRootElement();
        return element;
      case controlledComponent.has(nodeName):
        element = new FormElement();
        break;
      case nodeName === A:
        element = new AnchorElement();
        break;
      case nodeName === "page-meta":
      case nodeName === "navigation-bar":
        element = new TransferElement(toCamelCase(nodeName));
        break;
      default:
        element = new TaroElement();
        break;
    }
    element.nodeName = nodeName;
    element.tagName = type.toUpperCase();
    return element;
  }
  // an ugly fake createElementNS to deal with @vue/runtime-dom's
  // support mounting app to svg container since vue@3.0.8
  createElementNS(_svgNS, type) {
    return this.createElement(type);
  }
  createTextNode(text) {
    return new TaroText(text);
  }
  getElementById(id) {
    const el = eventSource.get(id);
    return isUndefined(el) ? null : el;
  }
  querySelector(query) {
    if (/^#/.test(query)) {
      return this.getElementById(query.slice(1));
    }
    return null;
  }
  querySelectorAll() {
    return [];
  }
  // @TODO: @PERF: 在 hydrate 移除掉空的 node
  createComment() {
    const textnode = new TaroText("");
    textnode.nodeName = COMMENT;
    return textnode;
  }
  get defaultView() {
    return env.window;
  }
}
function createDocument() {
  const doc = new TaroDocument();
  const documentCreateElement = doc.createElement.bind(doc);
  const html = documentCreateElement(HTML);
  const head = documentCreateElement(HEAD);
  const body = documentCreateElement(BODY);
  const app = documentCreateElement(APP);
  app.id = APP;
  const container = documentCreateElement(CONTAINER);
  doc.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container);
  container.appendChild(app);
  doc.documentElement = html;
  doc.head = head;
  doc.body = body;
  return doc;
}
const taroDocumentProvider = env.document = createDocument();
class SVGElement extends TaroElement {
}
const addLeadingSlash = (url = "") => url.charAt(0) === "/" ? url : "/" + url;
const hasBasename = (path = "", prefix = "") => new RegExp("^" + prefix + "(\\/|\\?|#|$)", "i").test(path) || path === prefix;
const stripBasename = (path = "", prefix = "") => hasBasename(path, prefix) ? path.substring(prefix.length) : path;
const stripTrailing = (str = "") => str.replace(/[?#][\s\S]*$/, "");
const stripSuffix = (path = "", suffix = "") => path.includes(suffix) ? path.substring(0, path.length - suffix.length) : path;
const getHomePage = (path = "", basename = "", customRoutes = {}, entryPagePath = "") => {
  var _a2;
  const routePath = addLeadingSlash(stripBasename(path, basename));
  const alias = ((_a2 = Object.entries(customRoutes).find(([key]) => key === routePath)) === null || _a2 === void 0 ? void 0 : _a2[1]) || routePath;
  return entryPagePath || (typeof alias === "string" ? alias : alias[0]) || basename;
};
const getCurrentPage = (routerMode = "hash", basename = "/") => {
  const pagePath = routerMode === "hash" ? taroLocationProvider.hash.slice(1).split("?")[0] : taroLocationProvider.pathname;
  return addLeadingSlash(stripBasename(pagePath, basename));
};
const instances = /* @__PURE__ */ new Map();
const pageId = incrementId();
function injectPageInstance(inst, id) {
  hooks.call("mergePageInstance", instances.get(id), inst);
  instances.set(id, inst);
}
function getPageInstance(id) {
  return instances.get(id);
}
function removePageInstance(id) {
  instances.delete(id);
}
function safeExecute(path, lifecycle, ...args) {
  const instance = instances.get(path);
  if (instance == null) {
    return;
  }
  const func = hooks.call("getLifecycle", instance, lifecycle);
  if (isArray(func)) {
    const res = func.map((fn) => fn.apply(instance, args));
    return res[0];
  }
  if (!isFunction(func)) {
    return;
  }
  return func.apply(instance, args);
}
function stringify(obj) {
  if (obj == null) {
    return "";
  }
  const path = Object.keys(obj).map((key) => {
    return key + "=" + obj[key];
  }).join("&");
  return path === "" ? path : "?" + path;
}
function getPath(id, options2) {
  const idx = id.indexOf("?");
  {
    return `${idx > -1 ? id.substring(0, idx) : id}${stringify(options2)}`;
  }
}
function getOnReadyEventKey(path) {
  return path + "." + ON_READY;
}
function getOnShowEventKey(path) {
  return path + "." + ON_SHOW;
}
function getOnHideEventKey(path) {
  return path + "." + ON_HIDE;
}
function createPageConfig(component, pageName, data, pageConfig) {
  const id = pageName !== null && pageName !== void 0 ? pageName : `taro_page_${pageId()}`;
  const [ONLOAD, ONUNLOAD, ONREADY, ONSHOW, ONHIDE, LIFECYCLES, SIDE_EFFECT_LIFECYCLES] = hooks.call("getMiniLifecycleImpl").page;
  let pageElement = null;
  let unmounting = false;
  let prepareMountList = [];
  function setCurrentRouter(page) {
    const router = page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      $taroPath: page.$taroPath,
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
    if (!isUndefined(page.exitState)) {
      Current.router.exitState = page.exitState;
    }
  }
  let loadResolver;
  let hasLoaded;
  const config = {
    [ONLOAD](options2 = {}, cb) {
      hasLoaded = new Promise((resolve) => {
        loadResolver = resolve;
      });
      perf.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};
      const uniqueOptions = Object.assign({}, options2, { $taroTimestamp: Date.now() });
      const $taroPath = this.$taroPath = getPath(id, uniqueOptions);
      if (this.$taroParams == null) {
        this.$taroParams = uniqueOptions;
      }
      setCurrentRouter(this);
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.INIT, $taroPath);
      }
      const mount = () => {
        Current.app.mount(component, $taroPath, () => {
          pageElement = env.document.getElementById($taroPath);
          ensure(pageElement !== null, "没有找到页面实例。");
          safeExecute($taroPath, ON_LOAD, this.$taroParams);
          loadResolver();
          {
            pageElement.ctx = this;
            pageElement.performUpdate(true, cb);
          }
        });
      };
      if (unmounting) {
        prepareMountList.push(mount);
      } else {
        mount();
      }
    },
    [ONUNLOAD]() {
      const $taroPath = this.$taroPath;
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.DESTORY, $taroPath);
      }
      safeExecute($taroPath, ONUNLOAD);
      unmounting = true;
      Current.app.unmount($taroPath, () => {
        unmounting = false;
        instances.delete($taroPath);
        if (pageElement) {
          pageElement.ctx = null;
          pageElement = null;
        }
        if (prepareMountList.length) {
          prepareMountList.forEach((fn) => fn());
          prepareMountList = [];
        }
      });
    },
    [ONREADY]() {
      hasLoaded.then(() => {
        safeExecute(this.$taroPath, ON_READY);
        _raf(() => eventCenter.trigger(getOnReadyEventKey(id)));
        this.onReady.called = true;
      });
    },
    [ONSHOW](options2 = {}) {
      hasLoaded.then(() => {
        Current.page = this;
        setCurrentRouter(this);
        {
          taroWindowProvider.trigger(CONTEXT_ACTIONS.RECOVER, this.$taroPath);
        }
        safeExecute(this.$taroPath, ON_SHOW, options2);
        _raf(() => eventCenter.trigger(getOnShowEventKey(id)));
      });
    },
    [ONHIDE]() {
      {
        taroWindowProvider.trigger(CONTEXT_ACTIONS.RESTORE, this.$taroPath);
      }
      if (Current.page === this) {
        Current.page = null;
        Current.router = null;
      }
      safeExecute(this.$taroPath, ON_HIDE);
      eventCenter.trigger(getOnHideEventKey(id));
    }
  };
  LIFECYCLES.forEach((lifecycle) => {
    let isDefer = false;
    lifecycle = lifecycle.replace(/^defer:/, () => {
      isDefer = true;
      return "";
    });
    config[lifecycle] = function() {
      const exec = () => safeExecute(this.$taroPath, lifecycle, ...arguments);
      if (isDefer) {
        hasLoaded.then(exec);
      } else {
        return exec();
      }
    };
  });
  SIDE_EFFECT_LIFECYCLES.forEach((lifecycle) => {
    var _a2;
    if (component[lifecycle] || ((_a2 = component.prototype) === null || _a2 === void 0 ? void 0 : _a2[lifecycle]) || component[lifecycle.replace(/^on/, "enable")] || (pageConfig === null || pageConfig === void 0 ? void 0 : pageConfig[lifecycle.replace(/^on/, "enable")])) {
      config[lifecycle] = function(...args) {
        var _a3;
        const target = (_a3 = args[0]) === null || _a3 === void 0 ? void 0 : _a3.target;
        if (target === null || target === void 0 ? void 0 : target.id) {
          const id2 = target.id;
          const element = env.document.getElementById(id2);
          if (element) {
            target.dataset = element.dataset;
          }
        }
        return safeExecute(this.$taroPath, lifecycle, ...args);
      };
    }
  });
  config.eh = eventHandler;
  if (!isUndefined(data)) {
    config.data = data;
  }
  hooks.call("modifyPageObject", config);
  return config;
}
function createComponentConfig(component, componentName, data) {
  const id = componentName !== null && componentName !== void 0 ? componentName : `taro_component_${pageId()}`;
  let componentElement = null;
  const [ATTACHED, DETACHED] = hooks.call("getMiniLifecycleImpl").component;
  const config = {
    [ATTACHED]() {
      var _a2;
      perf.start(PAGE_INIT);
      this.pageIdCache = ((_a2 = this.getPageId) === null || _a2 === void 0 ? void 0 : _a2.call(this)) || pageId();
      const path = getPath(id, { id: this.pageIdCache });
      Current.app.mount(component, path, () => {
        componentElement = env.document.getElementById(path);
        ensure(componentElement !== null, "没有找到组件实例。");
        this.$taroInstances = instances.get(path);
        safeExecute(path, ON_LOAD);
        {
          componentElement.ctx = this;
          componentElement.performUpdate(true);
        }
      });
    },
    [DETACHED]() {
      const path = getPath(id, { id: this.pageIdCache });
      Current.app.unmount(path, () => {
        instances.delete(path);
        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    methods: {
      eh: eventHandler
    }
  };
  if (!isUndefined(data)) {
    config.data = data;
  }
  [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach((key) => {
    var _a2;
    config[key] = (_a2 = component[key]) !== null && _a2 !== void 0 ? _a2 : EMPTY_OBJ;
  });
  return config;
}
function createRecursiveComponentConfig(componentName) {
  const isCustomWrapper = componentName === CUSTOM_WRAPPER;
  const [ATTACHED, DETACHED] = hooks.call("getMiniLifecycleImpl").component;
  const lifeCycles = isCustomWrapper ? {
    [ATTACHED]() {
      var _a2, _b;
      const componentId = ((_a2 = this.data.i) === null || _a2 === void 0 ? void 0 : _a2.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
      if (isString(componentId)) {
        customWrapperCache.set(componentId, this);
        const el = env.document.getElementById(componentId);
        if (el) {
          el.ctx = this;
        }
      }
    },
    [DETACHED]() {
      var _a2, _b;
      const componentId = ((_a2 = this.data.i) === null || _a2 === void 0 ? void 0 : _a2.sid) || ((_b = this.props.i) === null || _b === void 0 ? void 0 : _b.sid);
      if (isString(componentId)) {
        customWrapperCache.delete(componentId);
        const el = env.document.getElementById(componentId);
        if (el) {
          el.ctx = null;
        }
      }
    }
  } : EMPTY_OBJ;
  return hooks.call("modifyRecursiveComponentConfig", Object.assign({ properties: {
    i: {
      type: Object,
      value: {
        [
          "nn"
          /* Shortcuts.NodeName */
        ]: getComponentsAlias$1(internalComponents)[VIEW]._num
      }
    },
    l: {
      type: String,
      value: ""
    }
  }, options: {
    addGlobalClass: true,
    virtualHost: !isCustomWrapper
  }, methods: {
    eh: eventHandler
  } }, lifeCycles), { isCustomWrapper });
}
const TIMEOUT = 100;
const nextTick = (cb, ctx) => {
  const beginTime = Date.now();
  const router = Current.router;
  const timerFunc = () => {
    setTimeout(function() {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };
  if (router === null)
    return timerFunc();
  const path = router.$taroPath;
  function next() {
    const pageElement = env.document.getElementById(path);
    if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
      {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else if (Date.now() - beginTime > TIMEOUT) {
      timerFunc();
    } else {
      setTimeout(() => next(), 20);
    }
  }
  next();
};
function handlePolyfill() {
}
const dist$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A,
  APP,
  BEHAVIORS,
  BODY,
  CATCHMOVE,
  CATCH_VIEW,
  CHANGE,
  CLASS,
  COMMENT,
  COMPILE_MODE,
  CONFIRM,
  CONTAINER,
  get CONTEXT_ACTIONS() {
    return CONTEXT_ACTIONS;
  },
  CURRENT_TARGET,
  CUSTOM_WRAPPER,
  Current,
  DATASET,
  DATE,
  DOCUMENT_ELEMENT_NAME,
  DOCUMENT_FRAGMENT,
  EVENT_CALLBACK_RESULT,
  EXTERNAL_CLASSES,
  Events,
  FOCUS,
  FormElement,
  HEAD,
  HOOKS_APP_ID,
  HTML,
  History,
  ID,
  INPUT,
  KEY_CODE,
  Location,
  MutationObserver,
  OBJECT,
  ON_HIDE,
  ON_LOAD,
  ON_READY,
  ON_SHOW,
  OPTIONS,
  PAGE_INIT,
  PROPERTY_THRESHOLD,
  PROPS,
  PURE_VIEW,
  ROOT_STR,
  SET_DATA,
  SET_TIMEOUT,
  STATIC_VIEW,
  STYLE,
  SVGElement,
  Style,
  TARGET,
  TARO_RUNTIME,
  TIME_STAMP,
  TOUCHMOVE,
  TYPE,
  TaroElement,
  TaroEvent,
  TaroNode,
  TaroRootElement,
  TaroText,
  UID,
  URL: TaroURLProvider,
  URLSearchParams,
  VALUE,
  VIEW,
  addLeadingSlash,
  cancelAnimationFrame: _caf,
  convertNumber2PX,
  createComponentConfig,
  createEvent,
  createPageConfig,
  createRecursiveComponentConfig,
  customWrapperCache,
  debounce,
  document: taroDocumentProvider,
  env,
  eventCenter,
  eventHandler,
  eventSource,
  extend,
  getComponentsAlias,
  getComputedStyle: taroGetComputedStyleProvider,
  getCurrentInstance,
  getCurrentPage,
  getHomePage,
  getOnHideEventKey,
  getOnReadyEventKey,
  getOnShowEventKey,
  getPageInstance,
  getPath,
  handlePolyfill,
  hasBasename,
  history: taroHistoryProvider,
  hooks,
  hydrate,
  incrementId,
  injectPageInstance,
  isComment,
  isElement,
  isHasExtractProp,
  isParentBinded,
  isText,
  location: taroLocationProvider,
  navigator: nav,
  nextTick,
  get now() {
    return now;
  },
  options,
  parseUrl,
  perf,
  removePageInstance,
  requestAnimationFrame: _raf,
  safeExecute,
  shortcutAttr,
  stringify,
  stripBasename,
  stripSuffix,
  stripTrailing,
  throttle,
  window: taroWindowProvider
}, Symbol.toStringTag, { value: "Module" }));
function createTaroHook(lifecycle) {
  return (fn) => {
    const id = vendors.inject("id");
    const fnRef = vendors.ref(fn);
    let inst;
    let callback;
    vendors.onMounted(() => {
      inst = getPageInstance(id);
      if (inst === void 0) {
        inst = /* @__PURE__ */ Object.create({
          $options: {}
        });
        injectPageInstance(inst, id);
      }
      inst = inst.$options;
      callback = (...args) => fnRef.value(...args);
      const currentCallback = inst[lifecycle];
      if (isUndefined(currentCallback)) {
        inst[lifecycle] = callback;
      } else if (isFunction(currentCallback)) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else if (isArray(currentCallback)) {
        inst[lifecycle] = [...currentCallback, callback];
      }
    });
    vendors.onUnmounted(() => {
      if (!inst || !callback) {
        return;
      }
      const list = inst[lifecycle];
      if (list === callback) {
        inst[lifecycle] = void 0;
      } else if (isArray(list)) {
        inst[lifecycle] = list.filter((item) => item !== callback);
      }
      inst = null;
      callback = null;
    });
  };
}
const useDidShow = createTaroHook("onShow");
const useDidHide = createTaroHook("onHide");
const useError = createTaroHook("onError");
const useUnhandledRejection = createTaroHook("onUnhandledRejection");
const useLaunch = createTaroHook("onLaunch");
const usePageNotFound = createTaroHook("onPageNotFound");
const useLoad = createTaroHook("onLoad");
const usePageScroll = createTaroHook("onPageScroll");
const usePullDownRefresh = createTaroHook("onPullDownRefresh");
const usePullIntercept = createTaroHook("onPullIntercept");
const useReachBottom = createTaroHook("onReachBottom");
const useResize = createTaroHook("onResize");
const useUnload = createTaroHook("onUnload");
const useAddToFavorites = createTaroHook("onAddToFavorites");
const useOptionMenuClick = createTaroHook("onOptionMenuClick");
const useSaveExitState = createTaroHook("onSaveExitState");
const useShareAppMessage = createTaroHook("onShareAppMessage");
const useShareTimeline = createTaroHook("onShareTimeline");
const useTitleClick = createTaroHook("onTitleClick");
const useReady = createTaroHook("onReady");
const useRouter = () => {
  return Current.router;
};
const useTabItemTap = createTaroHook("onTabItemTap");
var taroHooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  useAddToFavorites,
  useDidHide,
  useDidShow,
  useError,
  useLaunch,
  useLoad,
  useOptionMenuClick,
  usePageNotFound,
  usePageScroll,
  usePullDownRefresh,
  usePullIntercept,
  useReachBottom,
  useReady,
  useResize,
  useRouter,
  useSaveExitState,
  useShareAppMessage,
  useShareTimeline,
  useTabItemTap,
  useTitleClick,
  useUnhandledRejection,
  useUnload
});
const setGlobalDataPlugin = {
  install: (app, data) => {
    app.taroGlobalData = data;
  }
};
function setDefaultDescriptor(obj) {
  obj.writable = true;
  obj.enumerable = true;
  return obj;
}
function setRouterParams(options2) {
  Current.router = Object.assign({ params: options2 === null || options2 === void 0 ? void 0 : options2.query }, options2);
}
function setReconciler() {
  hooks.tap("getLifecycle", function(instance, lifecycle) {
    return instance.$options[lifecycle];
  });
}
function createVue3Page(h, id) {
  return function(component) {
    var _a2, _b, _c, _d;
    component = isClassComponent(component) ? component.__vccOpts : component;
    const inject = {
      props: {
        tid: String
      },
      created() {
        injectPageInstance(this, id);
      }
    };
    if (isArray(component.mixins)) {
      const mixins = component.mixins;
      const idx = mixins.length - 1;
      if (!((_a2 = mixins[idx].props) === null || _a2 === void 0 ? void 0 : _a2.tid)) {
        component.mixins.push(inject);
      } else {
        component.mixins[idx] = inject;
      }
    } else {
      component.mixins = [inject];
    }
    const ProviderComponent = {
      setup() {
        vendors.provide("id", id);
      },
      render() {
        return this.$slots.default();
      }
    };
    const RootElement = "root";
    const PageComponent = Object.assign({}, component);
    const option = ((_d = (_c = (_b = PageComponent.props) === null || _b === void 0 ? void 0 : _b.option) === null || _c === void 0 ? void 0 : _c.default) === null || _d === void 0 ? void 0 : _d.call(_c)) || {};
    return h(ProviderComponent, {
      key: id
    }, {
      default() {
        return [
          h(RootElement, {
            id,
            class: ""
          }, [
            h(PageComponent, { tid: id, option })
          ])
        ];
      }
    });
  };
}
function createVue3App(app, h, config) {
  let pages = [];
  let appInstance;
  ensure(!(isFunction(app._component) && !isClassComponent(app._component)), "入口组件不支持使用函数式组件");
  setReconciler();
  app._component.render = function() {
    return pages.slice();
  };
  {
    appInstance = app.mount("#app");
  }
  const [ONLAUNCH, ONSHOW, ONHIDE] = hooks.call("getMiniLifecycleImpl").app;
  const appConfig = Object.create({
    mount(component, id, cb) {
      const page = createVue3Page(h, id)(component);
      pages.push(page);
      this.updateAppInstance(cb);
    },
    unmount(id, cb) {
      pages = pages.filter((page) => page.key !== id);
      this.updateAppInstance(cb);
    },
    updateAppInstance(cb) {
      appInstance.$forceUpdate();
      appInstance.$nextTick(cb);
    }
  }, {
    config: setDefaultDescriptor({
      configurable: true,
      value: config
    }),
    [ONLAUNCH]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        setRouterParams(options2);
        if (app["taroGlobalData"]) {
          const globalData = app["taroGlobalData"];
          const keys = Object.keys(globalData);
          const descriptors = Object.getOwnPropertyDescriptors(globalData);
          keys.forEach((key) => {
            Object.defineProperty(this, key, {
              configurable: true,
              enumerable: true,
              get() {
                return globalData[key];
              },
              set(value) {
                globalData[key] = value;
              }
            });
          });
          Object.defineProperties(this, descriptors);
        }
        const onLaunch = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onLaunch;
        isFunction(onLaunch) && onLaunch.call(appInstance, options2);
      }
    }),
    [ONSHOW]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        setRouterParams(options2);
        const onShow = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onShow;
        isFunction(onShow) && onShow.call(appInstance, options2);
      }
    }),
    [ONHIDE]: setDefaultDescriptor({
      value(options2) {
        var _a2;
        const onHide = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onHide;
        isFunction(onHide) && onHide.call(appInstance, options2);
      }
    }),
    onError: setDefaultDescriptor({
      value(error) {
        var _a2;
        const onError = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onError;
        isFunction(onError) && onError.call(appInstance, error);
      }
    }),
    onUnhandledRejection: setDefaultDescriptor({
      value(error) {
        var _a2;
        const onUnhandledRejection = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onUnhandledRejection;
        isFunction(onUnhandledRejection) && onUnhandledRejection.call(appInstance, error);
      }
    }),
    onPageNotFound: setDefaultDescriptor({
      value(res) {
        var _a2;
        const onPageNotFound = (_a2 = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a2 === void 0 ? void 0 : _a2.onPageNotFound;
        isFunction(onPageNotFound) && onPageNotFound.call(appInstance, res);
      }
    })
  });
  Current.app = appConfig;
  return appConfig;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
incrementId();
hooks.tap("initNativeApi", function(taro2) {
  for (const hook in taroHooks) {
    taro2[hook] = taroHooks[hook];
  }
  taro2.setGlobalDataPlugin = setGlobalDataPlugin;
});
hooks.tap("proxyToRaw", function(proxyObj) {
  return vendors.toRaw(proxyObj);
});
var taro = { exports: {} };
const require$$0 = /* @__PURE__ */ vendors.getAugmentedNamespace(dist$1);
const ENV_TYPE = {
  WEAPP: "WEAPP",
  SWAN: "SWAN",
  ALIPAY: "ALIPAY",
  TT: "TT",
  QQ: "QQ",
  JD: "JD",
  WEB: "WEB",
  RN: "RN",
  HARMONY: "HARMONY",
  QUICKAPP: "QUICKAPP",
  HARMONYHYBRID: "HARMONYHYBRID"
};
function getEnv() {
  {
    return ENV_TYPE.WEAPP;
  }
}
class Chain {
  constructor(requestParams, interceptors2, index) {
    this.index = index || 0;
    this.requestParams = requestParams || {};
    this.interceptors = interceptors2 || [];
  }
  proceed(requestParams = {}) {
    this.requestParams = requestParams;
    if (this.index >= this.interceptors.length) {
      throw new Error("chain 参数错误, 请勿直接修改 request.chain");
    }
    const nextInterceptor = this._getNextInterceptor();
    const nextChain = this._getNextChain();
    const p = nextInterceptor(nextChain);
    const res = p.catch((err) => Promise.reject(err));
    Object.keys(p).forEach((k) => isFunction(p[k]) && (res[k] = p[k]));
    return res;
  }
  _getNextInterceptor() {
    return this.interceptors[this.index];
  }
  _getNextChain() {
    return new Chain(this.requestParams, this.interceptors, this.index + 1);
  }
}
class Link {
  constructor(interceptor) {
    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }
  request(requestParams) {
    const chain = this.chain;
    const taroInterceptor = this.taroInterceptor;
    chain.interceptors = chain.interceptors.filter((interceptor) => interceptor !== taroInterceptor).concat(taroInterceptor);
    return chain.proceed(Object.assign({}, requestParams));
  }
  addInterceptor(interceptor) {
    this.chain.interceptors.push(interceptor);
  }
  cleanInterceptors() {
    this.chain = new Chain();
  }
}
function interceptorify(promiseifyApi) {
  return new Link(function(chain) {
    return promiseifyApi(chain.requestParams);
  });
}
function timeoutInterceptor(chain) {
  const requestParams = chain.requestParams;
  let p;
  const res = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      reject(new Error("网络链接超时,请稍后再试！"));
    }, requestParams && requestParams.timeout || 6e4);
    p = chain.proceed(requestParams);
    p.then((res2) => {
      if (!timeout)
        return;
      clearTimeout(timeout);
      resolve(res2);
    }).catch((err) => {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (!isUndefined(p) && isFunction(p.abort))
    res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;
  console.log(`http ${method || "GET"} --> ${url} data: `, data);
  const p = chain.proceed(requestParams);
  const res = p.then((res2) => {
    console.log(`http <-- ${url} result:`, res2);
    return res2;
  });
  if (isFunction(p.abort))
    res.abort = p.abort;
  return res;
}
const interceptors = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  logInterceptor,
  timeoutInterceptor
}, Symbol.toStringTag, { value: "Module" }));
function Behavior(options2) {
  return options2;
}
function getPreload(current) {
  return function(key, val) {
    current.preloadData = isObject(key) ? key : {
      [key]: val
    };
  };
}
const defaultDesignWidth = 750;
const defaultDesignRatio = {
  640: 2.34 / 2,
  750: 1,
  828: 1.81 / 2
};
const defaultBaseFontSize = 20;
const defaultUnitPrecision = 5;
const defaultTargetUnit = "rpx";
function getInitPxTransform(taro2) {
  return function(config) {
    const { designWidth = defaultDesignWidth, deviceRatio = defaultDesignRatio, baseFontSize = defaultBaseFontSize, targetUnit = defaultTargetUnit, unitPrecision = defaultUnitPrecision } = config;
    taro2.config = taro2.config || {};
    taro2.config.designWidth = designWidth;
    taro2.config.deviceRatio = deviceRatio;
    taro2.config.baseFontSize = baseFontSize;
    taro2.config.targetUnit = targetUnit;
    taro2.config.unitPrecision = unitPrecision;
  };
}
function getPxTransform(taro2) {
  return function(size2) {
    const config = taro2.config || {};
    const baseFontSize = config.baseFontSize;
    const deviceRatio = config.deviceRatio || defaultDesignRatio;
    const designWidth = ((input = 0) => isFunction(config.designWidth) ? config.designWidth(input) : config.designWidth || defaultDesignWidth)(size2);
    if (!(designWidth in deviceRatio)) {
      throw new Error(`deviceRatio 配置中不存在 ${designWidth} 的设置！`);
    }
    const targetUnit = config.targetUnit || defaultTargetUnit;
    const unitPrecision = config.unitPrecision || defaultUnitPrecision;
    const formatSize = ~~size2;
    let rootValue = 1 / deviceRatio[designWidth];
    switch (targetUnit) {
      case "rem":
        rootValue *= baseFontSize * 2;
        break;
      case "px":
        rootValue *= 2;
        break;
    }
    let val = formatSize / rootValue;
    if (unitPrecision >= 0 && unitPrecision <= 100) {
      val = Number(val.toFixed(unitPrecision));
    }
    return val + targetUnit;
  };
}
const Taro = {
  Behavior,
  getEnv,
  ENV_TYPE,
  Link,
  interceptors,
  Current,
  getCurrentInstance,
  options,
  nextTick,
  eventCenter,
  Events,
  getInitPxTransform,
  interceptorify
};
Taro.initPxTransform = getInitPxTransform(Taro);
Taro.preload = getPreload(Current);
Taro.pxTransform = getPxTransform(Taro);
const dist = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Taro
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ vendors.getAugmentedNamespace(dist);
(function(module2) {
  const { hooks: hooks2 } = require$$0;
  const taro2 = require$$1.default;
  if (hooks2.isExist("initNativeApi")) {
    hooks2.call("initNativeApi", taro2);
  }
  module2.exports = taro2;
  module2.exports.default = module2.exports;
})(taro);
var taroExports = taro.exports;
exports.SVGElement = SVGElement;
exports.TaroElement = TaroElement;
exports.createPageConfig = createPageConfig;
exports.createRecursiveComponentConfig = createRecursiveComponentConfig;
exports.createVue3App = createVue3App;
exports.taroDocumentProvider = taroDocumentProvider;
exports.taroExports = taroExports;
exports.taroWindowProvider = taroWindowProvider;
