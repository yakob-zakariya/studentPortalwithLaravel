import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, Fragment, renderList, renderSlot, withDirectives, vModelSelect, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { createPopper } from "@popperjs/core";
import { v4 } from "uuid";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import axios from "axios";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$U = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "cheveron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
  } else if ($props.name === "cheveron-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
  } else if ($props.name === "dashboard") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
  } else if ($props.name === "office") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
  } else if ($props.name === "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
  } else if ($props.name === "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
  } else if ($props.name === "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icon.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$U]]);
const _sfc_main$T = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 1185 266",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M77.463 265c-19.497 0-35.318-15.405-35.318-34.39v-22.054C17.987 202.676 0 181.326 0 155.948V55.206C0 25.291 24.946 1 55.668 1h154.664C241.054 1 266 25.29 266 55.206v100.806c0 29.916-24.946 54.206-55.668 54.206H145.67c-2.823 0-5.383 1.407-6.827 3.58-10.7 17.067-24.158 31.897-39.98 43.915-6.236 4.794-13.654 7.287-21.4 7.287zM55.701 27.336c-15.771 0-28.65 12.465-28.65 27.87v100.806c0 15.342 12.813 27.87 28.65 27.87 7.49 0 13.536 5.881 13.536 13.168v33.624c0 4.922 4.272 7.99 8.214 7.99 1.709 0 3.286-.575 4.732-1.662 13.273-10.1 24.576-22.565 33.578-36.947 6.309-10.036 17.743-16.237 29.965-16.237h64.727c15.77 0 28.65-12.464 28.65-27.87V55.206c0-15.341-12.814-27.87-28.65-27.87H55.7z"></path><path d="M395.752 2.4c37.152 0 65.088 27.936 65.088 64.8 0 36.576-27.936 64.8-65.088 64.8h-46.368v72H322.6V2.4h73.152zm0 104.544c22.176 0 38.592-16.992 38.592-39.744 0-23.04-16.416-39.744-38.592-39.744h-46.368v79.488h46.368zM502.6 33.792c-9.504 0-16.992-7.488-16.992-16.704 0-9.216 7.488-16.992 16.992-16.992 9.216 0 16.704 7.776 16.704 16.992 0 9.216-7.488 16.704-16.704 16.704zM489.928 204V60h25.056v144h-25.056zM625 56.256c33.696 0 55.872 22.464 55.872 59.328V204h-25.056v-86.976c0-23.616-13.536-36.864-35.712-36.864-23.04 0-41.76 13.536-41.76 47.52V204h-25.056V60h25.056v20.736C589 63.744 604.84 56.256 625 56.256zM835.24 60h24.768v137.952c0 44.928-36 67.392-73.44 67.392-32.256 0-56.448-12.384-68.256-35.136l21.888-12.384c6.624 13.536 18.72 24.192 46.944 24.192 29.952 0 48.096-16.992 48.096-44.064v-20.448c-11.52 17.568-29.952 28.8-54.144 28.8-40.896 0-73.44-33.12-73.44-75.168 0-41.76 32.544-74.88 73.44-74.88 24.192 0 42.624 10.944 54.144 28.512V60zm-51.264 122.4c29.088 0 51.264-22.176 51.264-51.264 0-28.8-22.176-50.976-51.264-50.976-29.088 0-51.264 22.176-51.264 50.976 0 29.088 22.176 51.264 51.264 51.264zM946.8 205.08c-28.21 0-45.63-20.8-41.08-48.88 4.42-27.17 26.91-46.28 53.56-46.28 19.37 0 31.59 9.36 38.35 22.36l-23.79 12.61c-3.25-5.85-9.1-9.49-16.9-9.49-12.35 0-23.14 9.23-25.35 22.1-2.08 11.83 4.29 22.1 17.16 22.1 8.06 0 13.91-4.03 18.59-10.14l21.58 13.65c-9.36 13.78-24.44 21.97-42.12 21.97zm126.36-59.93c-1.95 11.18-8.58 19.5-18.2 24.44l11.7 33.28h-26l-9.36-28.6h-8.32l-5.07 28.6h-26l16.12-91h36.4c18.33 0 32.24 13.65 28.73 33.28zm-43.42-9.36l-2.99 16.9h10.66c5.07.13 8.84-2.99 9.75-8.32.91-5.33-1.82-8.58-7.02-8.58h-10.4zM1184.05 112l-15.99 91h-26l7.67-43.81-25.48 33.54h-2.34l-14.82-35.23-7.93 45.5h-26l15.99-91h26l13.65 37.31 27.95-37.31h27.3z"></path></svg>`);
}
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Logo.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["ssrRender", _sfc_ssrRender$T]]);
const _sfc_main$S = {
  props: {
    placement: {
      type: String,
      default: "bottom-end"
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown, {
            placement: this.placement,
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  altBoundary: true
                }
              }
            ]
          });
        });
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.show = false;
      }
    });
  }
};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($data.show) {
    ssrRenderTeleport(_push, (_push2) => {
      _push2(`<div><div style="${ssrRenderStyle({ "position": "fixed", "top": "0", "right": "0", "left": "0", "bottom": "0", "z-index": "99998", "background": "black", "opacity": "0.2" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "z-index": "99999" })}">`);
      ssrRenderSlot(_ctx.$slots, "dropdown", {}, null, _push2, _parent);
      _push2(`</div></div>`);
    }, "#dropdown", false, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Dropdown.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$S]]);
const _sfc_main$R = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("admin.registrars")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "office",
          class: ["w-4 h-4 mr-2", $options.isUrl("admin/registrars") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("admin/registrars") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Registrars</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "office",
            class: ["w-4 h-4 mr-2", $options.isUrl("admin/registrars") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("admin/registrars") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Registrars", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("admin.departments")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "users",
          class: ["w-4 h-4 mr-2", $options.isUrl("admin/departments") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("admin/departments") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Departments</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "users",
            class: ["w-4 h-4 mr-2", $options.isUrl("admin/departments") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("admin/departments") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Departments", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("admin.departmentHeads.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "printer",
          class: ["w-4 h-4 mr-2", $options.isUrl("admin/departmentHeads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("admin/departmentHeads") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Department Heads</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "printer",
            class: ["w-4 h-4 mr-2", $options.isUrl("admin/departmentHeads") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("admin/departmentHeads") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Department Heads", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("admin.teachers.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "office",
          class: ["w-4 h-4 mr-2", $options.isUrl("admin/teachers") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("admin/teachers") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Teachers</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "office",
            class: ["w-4 h-4 mr-2", $options.isUrl("admin/teachers") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("admin/teachers") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Teachers", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Shared/MainMenu.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const MainMenu$3 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$R]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainMenu$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium">`);
      if (Object.keys(_ctx.$page.props.errors).length === 1) {
        _push(`<span>There is one form error.</span>`);
      } else {
        _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
      }
      _push(`</div>`);
    }
    _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$Q]]);
const _sfc_main$P = {
  components: {
    Dropdown: dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu: MainMenu$3
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:text-md md:px-12 md:py-0"><div class="mt-1 mr-4">Admin portal</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer select-none group"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer select-none group" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 mt-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: `/users/${$props.auth.user.id}/edit`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
          href: "/logout",
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 mt-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/users/${$props.auth.user.id}/edit`
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden w-56 p-12 overflow-y-auto bg-indigo-800 shrink-0 md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Shared/AdminLayout.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminLayout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ error: $props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", $props.accept)} class="hidden">`);
  if (!$props.modelValue) {
    _push(`<div class="p-2"><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Browse</button></div>`);
  } else {
    _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate($props.modelValue.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.filesize($props.modelValue.size))})</span></div><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Remove</button></div>`);
  }
  _push(`</div>`);
  if ($props.errors.length) {
    _push(`<div class="form-error">${ssrInterpolate($props.errors[0])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FileInput.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O]]);
const _sfc_main$N = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N]]);
const _sfc_main$M = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-select", { error: $props.error }]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M]]);
const _sfc_main$L = {
  props: {
    loading: Boolean
  }
};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    disabled: $props.loading,
    class: "flex items-center"
  }, _attrs))}>`);
  if ($props.loading) {
    _push(`<div class="btn-spinner mr-2"></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/LoadingButton.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const LoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L]]);
const _sfc_main$K = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: AdminLayout,
  remember: "form",
  props: { departments: Array },
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        department_id: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("admin.departmentHeads.store"));
    }
  }
};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Department Head User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.departmentHeads.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Department Head Users`);
      } else {
        return [
          createTextVNode("Department Head Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2 my-class",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.department_id,
    "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
    error: $data.form.errors.department_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.departments, (department) => {
          _push2(`<option${ssrRenderAttr("value", department.id)}${_scopeId}>${ssrInterpolate(department.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (department) => {
            return openBlock(), createBlock("option", {
              key: department.id,
              value: department.id
            }, toDisplayString(department.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/DepartmentHeads/Create.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const Create$9 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {
  components: {
    Icon
  },
  emits: ["restore"]
};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between p-4 max-w-3xl bg-yellow-400 rounded" }, _attrs))}><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "trash",
    class: "shrink-0 mr-2 w-4 h-4 fill-yellow-800"
  }, null, _parent));
  _push(`<div class="text-yellow-800 text-sm font-medium">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><button class="text-yellow-800 hover:underline text-sm" tabindex="-1" type="button">Restore</button></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TrashedMessage.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const TrashedMessage = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J]]);
const _sfc_main$I = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: AdminLayout,
  props: {
    user: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        middle_name: this.user.middle_name,
        last_name: this.user.last_name,
        email: this.user.email
      })
    };
  },
  mounted() {
    console.log(this.user.delete_at);
  },
  methods: {
    update() {
      this.form.post(route("admin.departmentHeads.update", this.user));
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(route("admin.departmentHeads.destroy", this.user));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(route("admin.departmentHeads.restore", this.user));
      }
    }
  }
};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<div class="flex justify-start max-w-3xl mb-8"><h1 class="text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.departmentHeads.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Department Heads`);
      } else {
        return [
          createTextVNode("Department Heads")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1></div>`);
  if ($props.user.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This user has been deleted. `);
        } else {
          return [
            createTextVNode(" This user has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  if (!$props.user.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete User</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "ml-auto btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update User`);
      } else {
        return [
          createTextVNode("Update User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/DepartmentHeads/Edit.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const Edit$8 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {
  components: {
    Dropdown: dropdown
  },
  props: {
    modelValue: String,
    maxWidth: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "reset"]
};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow">`);
  _push(ssrRenderComponent(_component_dropdown, {
    "auto-close": false,
    class: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:ring md:px-6",
    placement: "bottom-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-baseline"${_scopeId}><span class="hidden text-gray-700 md:inline"${_scopeId}>Filter</span><svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998"${_scopeId}><path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"${_scopeId}></path></svg></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-baseline" }, [
            createVNode("span", { class: "hidden text-gray-700 md:inline" }, "Filter"),
            (openBlock(), createBlock("svg", {
              class: "w-2 h-2 fill-gray-700 md:ml-2",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 961.243 599.998"
            }, [
              createVNode("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
            ]))
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" style="${ssrRenderStyle({ maxWidth: `${$props.maxWidth}px` })}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl",
            style: { maxWidth: `${$props.maxWidth}px` }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<input class="relative px-6 py-3 w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" placeholder="Search…"${ssrRenderAttr("value", $props.modelValue)}></div><button class="ml-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm" type="button">Reset</button></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchFilter.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const SearchFilter = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H]]);
const _sfc_main$G = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter,
    AdminLayout
  },
  layout: AdminLayout,
  props: {
    filters: Object,
    users: Array
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(route("admin.departmentHeads.index"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Department Head User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Department Heads Users</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full max-w-md mr-4",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block mt-4 text-gray-700"${_scopeId}>Trashed:</label><select class="w-full mt-1 form-select"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block mt-4 text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "w-full mt-1 form-select"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("admin.departmentHeads.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create </span><span class="hidden md:inline"${_scopeId}> Department Head User</span>`);
      } else {
        return [
          createVNode("span", null, "Create "),
          createVNode("span", { class: "hidden md:inline" }, " Department Head User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Full Name</th><th class="px-6 pt-6 pb-4">Email</th><th class="px-6 pt-6 pb-4" colspan="2">Department</th></tr><!--[-->`);
  ssrRenderList($props.users, (user, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.departmentHeads.edit", user)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.departmentHeads.edit", user)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.first_name)} ${ssrInterpolate(user.middle_name)} ${ssrInterpolate(user.last_name)} `);
          if (user.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(user.first_name) + " " + toDisplayString(user.middle_name) + " " + toDisplayString(user.last_name) + " ", 1),
            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.departmentHeads.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.departmentHeads.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.department)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.department), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("admin.departmentHeads.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/DepartmentHeads/Index.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Index$d = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: AdminLayout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        code: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("admin.departments"));
    }
  }
};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Department" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.departments")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Departments`);
      } else {
        return [
          createTextVNode("Departments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.code,
    "onUpdate:modelValue": ($event) => $data.form.code = $event,
    error: $data.form.errors.code,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department Code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Department`);
      } else {
        return [
          createTextVNode("Create Department")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Departments/Create.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const Create$8 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon
  },
  layout: AdminLayout,
  remember: "form",
  props: {
    department: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.department.name,
        code: this.department.code
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("admin.departments.update", this.department));
    }
  }
};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.name}, ${$data.form.code}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.departments")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Departments`);
      } else {
        return [
          createTextVNode("Departments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span>${ssrInterpolate($props.department.name)} ,${ssrInterpolate($props.department.code)}</h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.code,
    "onUpdate:modelValue": ($event) => $data.form.code = $event,
    error: $data.form.errors.code,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department Code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Department`);
      } else {
        return [
          createTextVNode("Update Department")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Department Head</h2><div class="mt-6 overflow-x-auto bg-white rounded shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Full Name</th><th class="px-6 pt-6 pb-4">Email</th><th class="px-6 pt-6 pb-4">Phone</th></tr>`);
  if ($props.department.departmentHead) {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.departmentHeads.edit", $props.department.departmentHead.id)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.department.departmentHead.first_name)} ${ssrInterpolate($props.department.departmentHead.middle_name)} ${ssrInterpolate($props.department.departmentHead.last_name)} `);
          if ($props.department.departmentHead.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString($props.department.departmentHead.first_name) + " " + toDisplayString($props.department.departmentHead.middle_name) + " " + toDisplayString($props.department.departmentHead.last_name) + " ", 1),
            $props.department.departmentHead.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.departmentHeads.edit", $props.department.departmentHead.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.department.departmentHead.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.department.departmentHead.email), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.departmentHeads.edit", $props.department.departmentHead.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` +251900557087 `);
        } else {
          return [
            createTextVNode(" +251900557087 ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("admin.departmentHeads.edit", $props.department.departmentHead.id),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</td></tr>`);
  } else {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Department Head found.</td></tr>`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Departments/Edit.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const Edit$7 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D]]);
const _sfc_main$C = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: AdminLayout,
  props: {
    departments: Object
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Departments" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Departments</h1><div class="flex items-center justify-end mb-6">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("admin.departments.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Departments</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Departments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><thead><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Code</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.departments, (department) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.departments.edit", department)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(department.name)} `);
          if (department.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(department.name) + " ", 1),
            department.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.departments.edit", department),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(department.code)}`);
        } else {
          return [
            createTextVNode(toDisplayString(department.code), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("admin.departments.edit", department),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.departments.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Department found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Departments/Index.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Index$c = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  components: {
    Head,
    dropdown
  },
  layout: AdminLayout
};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Admin Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! this is a dashboard for Admin</p>`);
  _push(ssrRenderComponent(_component_dropdown, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>drop down</button>`);
      } else {
        return [
          createVNode("button", null, "drop down")
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-white rounded shadow-lg"${_scopeId}><p${_scopeId}>this content</p></div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-white rounded shadow-lg" }, [
            createVNode("p", null, "this content")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const Index$b = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: AdminLayout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("admin.registrars.store"));
    }
  }
};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.registrars")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Registrar Users`);
      } else {
        return [
          createTextVNode("Registrar Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Registrars/Create.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Create$7 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: AdminLayout,
  props: {
    user: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        middle_name: this.user.middle_name,
        last_name: this.user.last_name,
        email: this.user.email
      })
    };
  },
  mounted() {
    console.log(this.user.delete_at);
  },
  methods: {
    update() {
      this.form.post(route("admin.registrars.update", { "user": {
        "id": this.user.id,
        "first_name": this.form.first_name,
        "middle_name": this.form.middle_name,
        "last_name": this.form.last_name,
        "email": this.form.email
      } }));
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(route("admin.registrars.destroy", this.user));
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(route("admin.registrars.restore", this.user));
      }
    }
  }
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<div class="flex justify-start max-w-3xl mb-8"><h1 class="text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.registrars")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Registrars`);
      } else {
        return [
          createTextVNode("Registrars")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1></div>`);
  if ($props.user.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This user has been deleted. `);
        } else {
          return [
            createTextVNode(" This user has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  if (!$props.user.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete User</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "ml-auto btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update User`);
      } else {
        return [
          createTextVNode("Update User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Registrars/Edit.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const Edit$6 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter,
    AdminLayout
  },
  layout: AdminLayout,
  props: {
    filters: Object,
    users: Array
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get(route("admin.registrars"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Users" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Registrar Users</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full max-w-md mr-4",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block mt-4 text-gray-700"${_scopeId}>Trashed:</label><select class="w-full mt-1 form-select"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block mt-4 text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "w-full mt-1 form-select"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("admin.registrars.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create </span><span class="hidden md:inline"${_scopeId}> Registrar User</span>`);
      } else {
        return [
          createVNode("span", null, "Create "),
          createVNode("span", { class: "hidden md:inline" }, " Registrar User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Full Name</th><th class="px-6 pt-6 pb-4">Email</th><th class="px-6 pt-6 pb-4" colspan="2">Role</th></tr><!--[-->`);
  ssrRenderList($props.users, (user, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.registrars.edit", user)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("admin.registrars.edit", user)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.first_name)} ${ssrInterpolate(user.middle_name)} ${ssrInterpolate(user.last_name)} `);
          if (user.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(user.first_name) + " " + toDisplayString(user.middle_name) + " " + toDisplayString(user.last_name) + " ", 1),
            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.registrars.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("admin.registrars.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Registrar `);
        } else {
          return [
            createTextVNode(" Registrar ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("admin.registrars.edit", user),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Registrars/Index.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const Index$a = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: AdminLayout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("admin.teachers.store"));
    }
  }
};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Department Head User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("admin.teachers.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Teacher Users`);
      } else {
        return [
          createTextVNode("Teacher Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Teacher/Create.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const Create$6 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: AdminLayout,
  props: {
    teachers: Object
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Departments" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Teachers</h1><div class="flex items-center justify-end mb-6">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("admin.teachers.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Teachers</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Teachers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><thead><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Email</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.teachers, (teacher) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(teacher.user.first_name)} ${ssrInterpolate(teacher.user.middle_name)} ${ssrInterpolate(teacher.user.last_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(teacher.user.first_name) + " " + toDisplayString(teacher.user.middle_name) + " " + toDisplayString(teacher.user.last_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(teacher.user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(teacher.user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.teachers.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No teacher found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Teacher/Index.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Index$9 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    login() {
      this.form.post(route("login"));
    }
  }
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="flex items-center justify-center min-h-screen p-6 bg-indigo-800"><div class="w-full max-w-md">`);
  _push(ssrRenderComponent(_component_logo, {
    class: "block w-full max-w-xs mx-auto fill-white",
    height: "50"
  }, null, _parent));
  _push(`<form class="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"><div class="px-10 py-12"><h1 class="text-3xl font-bold text-center">Welcome Back!</h1><div class="w-24 mx-auto mt-6 border-b-2"></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: "Email",
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "mt-6",
    label: "Password",
    type: "password"
  }, null, _parent));
  _push(`<label class="flex items-center mt-6 select-none" for="remember"><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} class="mr-1" type="checkbox"><span class="text-sm">Remember Me</span></label></div><div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "ml-auto btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div><!--]-->`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("departmentHead.courses.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "office",
          class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/courses") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("departmentHead/courses") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Courses</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "office",
            class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/courses") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("departmentHead/courses") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Courses", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("departmentHead.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "printer",
          class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/batches") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("departmentHead/batches") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Batches</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "printer",
            class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/batches") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("departmentHead/batches") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Batches", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("departmentHead.allocation.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "users",
          class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/allocation/create") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("departmentHead/allocation/create") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Course Allocate</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "users",
            class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/allocation/create") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("departmentHead/allocation/create") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Course Allocate", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("departmentHead.teacherAssignment.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "users",
          class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/teacherAssignment/create") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("departmentHead/teacherAssignment/create") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Assign Teacher</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "users",
            class: ["w-4 h-4 mr-2", $options.isUrl("departmentHead/teacherAssignment/create") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("departmentHead/teacherAssignment/create") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Assign Teacher", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Shared/MainMenu.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const MainMenu$2 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainMenu$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  components: {
    Dropdown: dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu: MainMenu$2
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:text-md md:px-12 md:py-0"><div class="mt-1 mr-4">department heads Portal</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer select-none group"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer select-none group" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 mt-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "#"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
          href: _ctx.route("logout"),
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 mt-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "#"
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
              href: _ctx.route("logout"),
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden w-56 p-12 overflow-y-auto bg-indigo-800 shrink-0 md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Shared/DepartmentHeadLayout.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const DepartmentHeadLayout = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DepartmentHeadLayout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    batch: Object,
    students: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.batch.name,
        year: this.batch.year
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("departmentHead.batches.update", this.batch));
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$props.batch.name} ${$props.batch.department.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Batches`);
      } else {
        return [
          createTextVNode("Batches")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($props.batch.name)} of ${ssrInterpolate($props.batch.department.name)}</h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.year,
    "onUpdate:modelValue": ($event) => $data.form.year = $event,
    error: $data.form.errors.year,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch Year"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Batch`);
      } else {
        return [
          createTextVNode("Update Batch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Sections</h2><div class="mt-6 overflow-x-auto bg-white rounded shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Year</th><th class="px-6 pt-6 pb-4">Section</th></tr><!--[-->`);
  ssrRenderList($props.batch.sections, (section) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.batch.year)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.batch.year), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(section.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(section.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.batch.sections.length == 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Section found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table><div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("departmentHead.sections.create", $props.batch)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>+ Add</span><span class="hidden md:inline"${_scopeId}> Section</span>`);
      } else {
        return [
          createVNode("span", null, "+ Add"),
          createVNode("span", { class: "hidden md:inline" }, " Section")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><h2 class="mt-12 text-2xl font-bold">Students</h2><div class="mt-6 overflow-x-auto bg-white rounded shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No.</th><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Email</th><th class="px-6 pt-6 pb-4">Section</th></tr><!--[-->`);
  ssrRenderList($props.students, (student, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.students.edit", student)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.students.edit", student)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(student.user.first_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(student.user.first_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.students.edit", student),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(student.user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(student.user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.students.edit", student),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (student.section_id) {
            _push2(`<span${_scopeId}>${ssrInterpolate(student.section.name)}</span>`);
          } else {
            _push2(`<span${_scopeId}> Assign Section </span>`);
          }
        } else {
          return [
            student.section_id ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(student.section.name), 1)) : (openBlock(), createBlock("span", { key: 1 }, " Assign Section "))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("departmentHead.students.edit", student),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.students.length == 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Student found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Batch/Edit.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const Edit$5 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: DepartmentHeadLayout,
  props: {
    batches: Object,
    department: Object
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Batches" }, null, _parent));
  _push(`<h1 class="mb-4 text-3xl font-bold">Batches of ${ssrInterpolate($props.department.name)}</h1><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><thead><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Batch Name</th><th class="px-6 pt-6 pb-4">Year</th><th class="px-6 pt-6 pb-4">status</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.batches, (batch) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.batches.edit", batch)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(batch.name)} `);
          if ($props.department.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(batch.name) + " ", 1),
            $props.department.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.batches.edit", batch)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(batch.year)} `);
          if ($props.department.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(batch.year) + " ", 1),
            $props.department.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.batches.edit", batch),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (batch.active) {
            _push2(`<span${_scopeId}> Active </span>`);
          } else {
            _push2(`<span${_scopeId}> Not Acitve </span>`);
          }
        } else {
          return [
            batch.active ? (openBlock(), createBlock("span", { key: 0 }, " Active ")) : (openBlock(), createBlock("span", { key: 1 }, " Not Acitve "))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("departmentHead.batches.edit", batch),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.batches.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Batch found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Batch/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const Index$8 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    batch: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("departmentHead.sections.store", this.batch));
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$props.batch.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.batches.edit", $props.batch)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sections`);
      } else {
        return [
          createTextVNode("Sections")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Section Name"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Section`);
      } else {
        return [
          createTextVNode("Create Section")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Batch/Section/Create.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Create$5 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    courses: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        code: "",
        credit_hour: "",
        ETCS: "",
        prerequisites: []
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("departmentHead.courses.store"));
    }
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Course" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.courses.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses`);
      } else {
        return [
          createTextVNode("Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-4xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-6 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Course Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.code,
    "onUpdate:modelValue": ($event) => $data.form.code = $event,
    error: $data.form.errors.code,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Course Code"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "number",
    modelValue: $data.form.credit_hour,
    "onUpdate:modelValue": ($event) => $data.form.credit_hour = $event,
    error: $data.form.errors.credit_hour,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Credit Hour"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "number",
    modelValue: $data.form.ETCS,
    "onUpdate:modelValue": ($event) => $data.form.ETCS = $event,
    error: $data.form.errors.ETCS,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "ETCS"
  }, null, _parent));
  _push(`</div><div class="p-8 pt-0"><h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Select Prerequisites courses if any</h3><ul class="grid items-center w-full grid-cols-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"><!--[-->`);
  ssrRenderList($props.courses, (course) => {
    _push(`<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"><div class="flex items-center ps-3"><input type="checkbox"${ssrRenderAttr("id", "course-" + course.id)}${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray($data.form.prerequisites) ? ssrLooseContain($data.form.prerequisites, course.id) : $data.form.prerequisites) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label${ssrRenderAttr("for", "course-" + course.id)} class="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">${ssrInterpolate(course.name)} (${ssrInterpolate(course.code)}) </label></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Course`);
      } else {
        return [
          createTextVNode("Create Course")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Course/Create.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Create$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    course: Object,
    allCourses: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.course.name,
        code: this.course.code,
        credit_hour: this.course.credit_hour,
        ETCS: this.course.ETCS,
        prerequisites: []
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("departmentHead.courses.update", this.course));
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$props.course.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.courses.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Courses`);
      } else {
        return [
          createTextVNode("Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Update </h1><div class="max-w-4xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-6 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Course Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.code,
    "onUpdate:modelValue": ($event) => $data.form.code = $event,
    error: $data.form.errors.code,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Course Code"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "number",
    modelValue: $data.form.credit_hour,
    "onUpdate:modelValue": ($event) => $data.form.credit_hour = $event,
    error: $data.form.errors.credit_hour,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Credit Hour"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "number",
    modelValue: $data.form.ETCS,
    "onUpdate:modelValue": ($event) => $data.form.ETCS = $event,
    error: $data.form.errors.ETCS,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "ETCS"
  }, null, _parent));
  _push(`</div><div class="p-8 pt-0"><h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Select Prerequisites courses if any</h3><ul class="grid items-center w-full grid-cols-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"><!--[-->`);
  ssrRenderList($props.allCourses, (course) => {
    _push(`<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"><div class="flex items-center ps-3"><input type="checkbox"${ssrRenderAttr("id", "course-" + course.id)}${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray($data.form.prerequisites) ? ssrLooseContain($data.form.prerequisites, course.id) : $data.form.prerequisites) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label${ssrRenderAttr("for", "course-" + course.id)} class="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">${ssrInterpolate(course.name)} (${ssrInterpolate(course.code)}) </label></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Course`);
      } else {
        return [
          createTextVNode("Update Course")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><div class="p-8"><h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Prerequisite Courses</h3><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Course Name</th><th class="px-6 pt-6 pb-4">Course code</th><th class="px-6 pt-6 pb-4">Credit Hour</th><th class="px-6 pt-6 pb-4">ETCS</th><th class="px-6 pt-6 pb-4">Delete Prerequsites</th></tr><!--[-->`);
  ssrRenderList($props.course.prerequisites, (prerequisite, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", prerequisite)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", prerequisite)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(prerequisite.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(prerequisite.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", prerequisite),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(prerequisite.code)}`);
        } else {
          return [
            createTextVNode(toDisplayString(prerequisite.code), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", prerequisite),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(prerequisite.credit_hour)}`);
        } else {
          return [
            createTextVNode(toDisplayString(prerequisite.credit_hour), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", prerequisite),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(prerequisite.ETCS)}`);
        } else {
          return [
            createTextVNode(toDisplayString(prerequisite.ETCS), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("departmentHead.courses.detachPrerequisites", { "course": $props.course, "prerequisiteCourse": prerequisite }),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="mr-4" title="Delete"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24"${_scopeId}><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"${_scopeId}></path><path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"${_scopeId}></path></svg></button>`);
        } else {
          return [
            createVNode("button", {
              class: "mr-4",
              title: "Delete"
            }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-5 fill-red-500 hover:fill-red-700",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  d: "M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z",
                  "data-original": "#000000"
                }),
                createVNode("path", {
                  d: "M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z",
                  "data-original": "#000000"
                })
              ]))
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.course.prerequisites.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Prerequiste found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Course/Edit.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Edit$4 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  props: {
    serach: String,
    courses: Array
  },
  data() {
    return {
      form: {
        search: this.search
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        console.log("is this running");
        this.$inertia.get(route("departmentHead.courses.index"), pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Courses" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Courses</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "w-full max-w-md mr-4",
    onReset: $options.reset
  }, null, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("departmentHead.courses.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create </span><span class="hidden md:inline"${_scopeId}> Course</span>`);
      } else {
        return [
          createVNode("span", null, "Create "),
          createVNode("span", { class: "hidden md:inline" }, " Course")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Course Name</th><th class="px-6 pt-6 pb-4">Course code</th><th class="px-6 pt-6 pb-4">Credit Hour</th><th class="px-6 pt-6 pb-4">ETCS</th></tr><!--[-->`);
  ssrRenderList($props.courses, (course, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", course)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", course)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.code)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.code), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.credit_hour)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.credit_hour), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.ETCS)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.ETCS), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.courses.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No course found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Course/Index.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Index$7 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    academicYears: Array,
    batches: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        batch_id: null,
        academicYear_id: null,
        semester_id: null
      }),
      semesters: []
      // Local state to store semesters based on selected academic year
    };
  },
  methods: {
    async fetchSemesters() {
      if (this.form.academicYear_id) {
        try {
          const response = await axios.get(route("departmentHead.academicYear.semesters", this.form.academicYear_id));
          this.semesters = response.data;
          this.form.semester_id = null;
        } catch (error) {
          console.error("Error fetching semesters:", error);
        }
      } else {
        this.semesters = [];
      }
    },
    store() {
      this.form.post(route("departmentHead.allocation.store"));
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Choose Semester" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Choose Semster to allocate courses </h1><div class="max-w-4xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-6 -mr-6">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.batch_id,
    "onUpdate:modelValue": ($event) => $data.form.batch_id = $event,
    error: $data.form.errors.batch_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Batch"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.batches, (batch) => {
          _push2(`<option${ssrRenderAttr("value", batch.id)}${_scopeId}>${ssrInterpolate(batch.name)} (${ssrInterpolate(batch.department.code)})</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.batches, (batch) => {
            return openBlock(), createBlock("option", {
              key: batch.id,
              value: batch.id
            }, toDisplayString(batch.name) + " (" + toDisplayString(batch.department.code) + ")", 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.academicYear_id,
    "onUpdate:modelValue": ($event) => $data.form.academicYear_id = $event,
    onChange: $options.fetchSemesters,
    error: $data.form.errors.academicYear_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Academic Year"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.academicYears, (academicYear) => {
          _push2(`<option${ssrRenderAttr("value", academicYear.id)}${_scopeId}>${ssrInterpolate(academicYear.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.academicYears, (academicYear) => {
            return openBlock(), createBlock("option", {
              key: academicYear.id,
              value: academicYear.id
            }, toDisplayString(academicYear.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.semester_id,
    "onUpdate:modelValue": ($event) => $data.form.semester_id = $event,
    error: $data.form.errors.semester_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Semester"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($data.semesters, (semester) => {
          _push2(`<option${ssrRenderAttr("value", semester.id)}${_scopeId}>${ssrInterpolate(semester.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($data.semesters, (semester) => {
            return openBlock(), createBlock("option", {
              key: semester.id,
              value: semester.id
            }, toDisplayString(semester.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose Semester`);
      } else {
        return [
          createTextVNode("Choose Semester")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/CourseAllocation/Index.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Index$6 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    allCourses: Object,
    allocatedCourses: Object,
    batch: Object,
    semester: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        selectedCourses: [],
        batch_id: this.batch.id,
        semester_id: this.semester.id
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("departmentHead.allocatedCourses.store"));
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `select courses for ${$props.batch.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold"><span class="text-indigo-400 hover:text-indigo-600">${ssrInterpolate($props.batch.department.name)}</span><span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($props.batch.name)}</h1><div class="flex items-center justify-between px-8 m-4"><p class="mb-4 font-semibold text-gray-900 dark:text-white"> Academic Year : ${ssrInterpolate($props.semester.academic_year.name)}</p><p class="mb-4 font-semibold text-gray-900 dark:text-white"> Semester: ${ssrInterpolate($props.semester.name)}</p></div><div class="max-w-5xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-6 -mr-6"><h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Select courses </h3><ul class="grid items-center w-full grid-cols-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:grid-cols-2 lg:grid-cols-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"><!--[-->`);
  ssrRenderList($props.allCourses, (course) => {
    _push(`<li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"><div class="flex items-center ps-3"><input type="checkbox"${ssrRenderAttr("id", "course-" + course.id)}${ssrRenderAttr("value", course.id)}${ssrIncludeBooleanAttr(Array.isArray($data.form.selectedCourses) ? ssrLooseContain($data.form.selectedCourses, course.id) : $data.form.selectedCourses) ? " checked" : ""} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"><label${ssrRenderAttr("for", "course-" + course.id)} class="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">${ssrInterpolate(course.name)} (${ssrInterpolate(course.code)}) </label></div></li>`);
  });
  _push(`<!--]--></ul></div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Allocate Courses`);
      } else {
        return [
          createTextVNode("Allocate Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><div class="p-8"><h3 class="mb-4 font-semibold text-center text-gray-900 dark:text-white">Allocated Courses for ${ssrInterpolate($props.batch.name)} on ${ssrInterpolate($props.semester.name)}</h3><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Course Name</th><th class="px-6 pt-6 pb-4">Course code</th><th class="px-6 pt-6 pb-4">Credit Hour</th><th class="px-6 pt-6 pb-4">ETCS</th><th class="px-6 pt-6 pb-4">delete</th></tr><!--[-->`);
  ssrRenderList($props.allocatedCourses, (course, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", course)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("departmentHead.courses.edit", course)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.code)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.code), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.credit_hour)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.credit_hour), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("departmentHead.courses.edit", course),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.ETCS)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.ETCS), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      tabindex: "-1",
      href: _ctx.route("departmentHead.allocatedCourse.remove", { "batch_id": $props.batch.id, "course_id": course.id, "semester_id": $props.semester.id })
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="mr-4" title="Delete"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24"${_scopeId}><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"${_scopeId}></path><path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"${_scopeId}></path></svg></button>`);
        } else {
          return [
            createVNode("button", {
              class: "mr-4",
              title: "Delete"
            }, [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-5 fill-red-500 hover:fill-red-700",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  d: "M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z",
                  "data-original": "#000000"
                }),
                createVNode("path", {
                  d: "M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z",
                  "data-original": "#000000"
                })
              ]))
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.allocatedCourses.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Course is Allocated </td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/CourseAllocation/SelectCourses.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const SelectCourses$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectCourses$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  components: {
    Head
  },
  layout: DepartmentHeadLayout
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Department Head Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! this is a dashboard for departmentHead</p></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Index$5 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  components: {
    Head,
    Link,
    SelectInput,
    TextInput,
    icon: Icon,
    DepartmentHeadLayout,
    LoadingButton
  },
  layout: DepartmentHeadLayout,
  props: {
    batches: Array,
    student: Object,
    sections: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.student.user.first_name,
        middle_name: this.student.user.middle_name,
        last_name: this.student.user.last_name,
        email: this.student.user.email,
        batch_id: this.student.batch_id,
        section_id: this.student.section_id || null
        // Set initial value to student's current section if available
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("departmentHead.students.assignSection", this.student));
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "View Student" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.batches.edit", $props.student.batch)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Batch`);
      } else {
        return [
          createTextVNode("Batch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Student View </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First Name",
    readonly: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle Name",
    readonly: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last Name",
    readonly: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: "email",
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email Address",
    readonly: ""
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.batch_id,
    "onUpdate:modelValue": ($event) => $data.form.batch_id = $event,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch",
    disabled: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.batches, (batch) => {
          _push2(`<option${ssrRenderAttr("value", batch.id)}${_scopeId}>${ssrInterpolate(batch.name)} of ${ssrInterpolate(batch.department.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.batches, (batch) => {
            return openBlock(), createBlock("option", {
              key: batch.id,
              value: batch.id
            }, toDisplayString(batch.name) + " of " + toDisplayString(batch.department.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.section_id,
    "onUpdate:modelValue": ($event) => $data.form.section_id = $event,
    error: $data.form.errors.section_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Section"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.sections, (section) => {
          _push2(`<option${ssrRenderAttr("value", section.id)}${_scopeId}>${ssrInterpolate(section.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.sections, (section) => {
            return openBlock(), createBlock("option", {
              key: section.id,
              value: section.id
            }, toDisplayString(section.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Assign Section`);
      } else {
        return [
          createTextVNode("Assign Section")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/Student/Edit.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Edit$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    academicYears: Array,
    batches: Array
  },
  data() {
    return {
      form: this.$inertia.form({
        batch_id: null,
        academicYear_id: null,
        semester_id: null,
        section_id: null
      }),
      semesters: [],
      // Local state to store semesters based on selected academic year
      sections: []
    };
  },
  methods: {
    async fetchSemesters() {
      if (this.form.academicYear_id) {
        try {
          const response = await axios.get(route("departmentHead.academicYear.semesters", this.form.academicYear_id));
          this.semesters = response.data;
          this.form.semester_id = null;
        } catch (error) {
          console.error("Error fetching semesters:", error);
        }
      } else {
        this.semesters = [];
      }
    },
    async fetchSections() {
      if (this.form.batch_id) {
        try {
          const response = await axios.get(route("departmentHead.batch.sections", this.form.batch_id));
          this.sections = response.data;
          this.form.section_id = null;
        } catch (error) {
          console.error("Error fetching semesters:", error);
        }
      } else {
        this.sections = [];
      }
    },
    store() {
      this.form.post(route("departmentHead.teacherAssignment.store"));
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Choose Semester" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Choose Semster to Assign Teacher </h1><div class="max-w-4xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-6 -mr-6">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.batch_id,
    "onUpdate:modelValue": ($event) => $data.form.batch_id = $event,
    onChange: $options.fetchSections,
    error: $data.form.errors.batch_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Batch"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.batches, (batch) => {
          _push2(`<option${ssrRenderAttr("value", batch.id)}${_scopeId}>${ssrInterpolate(batch.name)} (${ssrInterpolate(batch.department.code)})</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.batches, (batch) => {
            return openBlock(), createBlock("option", {
              key: batch.id,
              value: batch.id
            }, toDisplayString(batch.name) + " (" + toDisplayString(batch.department.code) + ")", 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.section_id,
    "onUpdate:modelValue": ($event) => $data.form.section_id = $event,
    error: $data.form.errors.section_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select section"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($data.sections, (section) => {
          _push2(`<option${ssrRenderAttr("value", section.id)}${_scopeId}>${ssrInterpolate(section.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($data.sections, (section) => {
            return openBlock(), createBlock("option", {
              key: section.id,
              value: section.id
            }, toDisplayString(section.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.academicYear_id,
    "onUpdate:modelValue": ($event) => $data.form.academicYear_id = $event,
    onChange: $options.fetchSemesters,
    error: $data.form.errors.academicYear_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Academic Year"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.academicYears, (academicYear) => {
          _push2(`<option${ssrRenderAttr("value", academicYear.id)}${_scopeId}>${ssrInterpolate(academicYear.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.academicYears, (academicYear) => {
            return openBlock(), createBlock("option", {
              key: academicYear.id,
              value: academicYear.id
            }, toDisplayString(academicYear.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.semester_id,
    "onUpdate:modelValue": ($event) => $data.form.semester_id = $event,
    error: $data.form.errors.semester_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Select Semester"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($data.semesters, (semester) => {
          _push2(`<option${ssrRenderAttr("value", semester.id)}${_scopeId}>${ssrInterpolate(semester.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($data.semesters, (semester) => {
            return openBlock(), createBlock("option", {
              key: semester.id,
              value: semester.id
            }, toDisplayString(semester.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose Semester`);
      } else {
        return [
          createTextVNode("Choose Semester")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/TeacherAssignment/Index.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon,
    DepartmentHeadLayout
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    allocatedCourses: Object,
    section: Object,
    semester: Object
  },
  data() {
    return {
      createForm: this.$inertia.form({
        section_id: this.section.id,
        semester_id: this.semester.id
      }),
      updateForm: this.$inertia.form({
        section_id: this.section.id,
        semester_id: this.semester.id
      })
    };
  },
  methods: {
    store(course_id) {
      this.createForm.post(route("departmentHead.selectCourse.courses", course_id));
    },
    update(allocation) {
      console.log(allocation);
      this.updateForm.post(route("departmentHead.selectCourse.courseAllocation", { "teacherCourseAllocation": allocation["id"] }));
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `select courses for ${$props.section.batch.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold"><span class="text-indigo-400 hover:text-indigo-600">allocated courses</span><span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($props.section.batch.name)} Section: ${ssrInterpolate($props.section.name)}</h1><div class="flex items-center justify-between px-8 m-4"><p class="mb-4 font-semibold text-gray-900 dark:text-white"> Academic Year : ${ssrInterpolate($props.semester.academic_year.name)}</p><p class="mb-4 font-semibold text-gray-900 dark:text-white"> Semester: ${ssrInterpolate($props.semester.name)}</p></div><div class="p-3"><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No</th><th class="px-6 pt-6 pb-4">Course Name</th><th class="px-6 pt-6 pb-4">Course code</th><th class="px-6 pt-6 pb-4">Credit Hour</th><th class="px-6 pt-6 pb-4">ETCS</th><th class="px-6 pt-6 pb-4">Assign teacher / Assigned teacher</th></tr><!--[-->`);
  ssrRenderList($props.allocatedCourses, (course, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.code)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.code), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.credit_hour)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.credit_hour), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(course.ETCS)}`);
        } else {
          return [
            createTextVNode(toDisplayString(course.ETCS), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    if (course.course_allocations.length == 0) {
      _push(`<form><button class="flex items-center px-4" tabindex="-1" type="submit"><button class="flex items-center" title="Assign Teacher"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700" viewBox="0 0 348.882 348.882"><path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z" data-original="#000000"></path><path d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z" data-original="#000000"></path></svg><span class="ml-4"> Assign Teacher </span></button></button></form>`);
    } else {
      _push(`<form><button class="flex items-center justify-between px-4" tabindex="-1" type="submit"><span class="mr-3">${ssrInterpolate(course.course_allocations[0].teacher.user.first_name + " ")} ${ssrInterpolate(course.course_allocations[0].teacher.user.middle_name + " ")} ${ssrInterpolate(course.course_allocations[0].teacher.user.last_name)}</span><button class="mr-4" title="Assign Other teacher"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700" viewBox="0 0 348.882 348.882"><path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z" data-original="#000000"></path><path d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z" data-original="#000000"></path></svg></button></button></form>`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.allocatedCourses.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Course is Allocated </td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/TeacherAssignment/SelectCourses.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const SelectCourses = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectCourses
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    teachers: Object,
    section: Object,
    semester: Object,
    course: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        teacher_id: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("departmentHead.storeSelectedTeacher", {
        "section": this.section,
        "semester": this.semester,
        "course": this.course
      }));
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "select teacher" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.selectCourses.sections.semesters", { section: $props.section, semester: $props.semester })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Select Courses`);
      } else {
        return [
          createTextVNode("Select Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Assign for ${ssrInterpolate($props.course.name)} on semester ${ssrInterpolate($props.semester.name)}</h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.teacher_id,
    "onUpdate:modelValue": ($event) => $data.form.teacher_id = $event,
    error: $data.form.errors.teacher_id,
    class: "w-full pb-8 pr-6",
    label: "Teacher"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.teachers, (teacher) => {
          _push2(`<option${ssrRenderAttr("value", teacher.id)}${_scopeId}>${ssrInterpolate(teacher.user.first_name)} ${ssrInterpolate(teacher.user.middle_name)} ${ssrInterpolate(teacher.user.last_name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.teachers, (teacher) => {
            return openBlock(), createBlock("option", {
              key: teacher.id,
              value: teacher.id
            }, toDisplayString(teacher.user.first_name) + " " + toDisplayString(teacher.user.middle_name) + " " + toDisplayString(teacher.user.last_name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Section`);
      } else {
        return [
          createTextVNode("Create Section")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/TeacherAssignment/SelectTeacher.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const SelectTeacher = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectTeacher
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: DepartmentHeadLayout,
  remember: "form",
  props: {
    teachers: Object,
    teacherCourseAllocation: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        teacher_id: this.teacherCourseAllocation.teacher.id
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("departmentHead.storeUpdatedSelectTeacher", {
        teacherCourseAllocation: this.teacherCourseAllocation
      }));
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "is this the page" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("departmentHead.selectCourses.sections.semesters", { "section": $props.teacherCourseAllocation.section_id, "semester": $props.teacherCourseAllocation.semester_id })
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Select Courses`);
      } else {
        return [
          createTextVNode("Select Courses")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Assign for on semester </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.teacher_id,
    "onUpdate:modelValue": ($event) => $data.form.teacher_id = $event,
    error: $data.form.errors.teacher_id,
    class: "w-full pb-8 pr-6",
    label: "Teacher"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.teachers, (teacher) => {
          _push2(`<option${ssrRenderAttr("value", teacher.id)}${_scopeId}>${ssrInterpolate(teacher.user.first_name)} ${ssrInterpolate(teacher.user.middle_name)} ${ssrInterpolate(teacher.user.last_name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.teachers, (teacher) => {
            return openBlock(), createBlock("option", {
              key: teacher.id,
              value: teacher.id
            }, toDisplayString(teacher.user.first_name) + " " + toDisplayString(teacher.user.middle_name) + " " + toDisplayString(teacher.user.last_name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Teacher`);
      } else {
        return [
          createTextVNode("Update Teacher")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DepartmentHead/TeacherAssignment/SelectTeacherForUpdate.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const SelectTeacherForUpdate = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SelectTeacherForUpdate
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("registrar.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "office",
          class: ["w-4 h-4 mr-2", $options.isUrl("registrar/batches") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("registrar/batches") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Batches</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "office",
            class: ["w-4 h-4 mr-2", $options.isUrl("registrar/batches") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("registrar/batches") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Batches", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("registrar.academicYears.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "users",
          class: ["w-4 h-4 mr-2", $options.isUrl("registrars/academicYears") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("registrar/academicYears") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Academic Years</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "users",
            class: ["w-4 h-4 mr-2", $options.isUrl("registrars/academicYears") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("registrar/academicYears") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Academic Years", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("registrar.students.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "printer",
          class: ["w-4 h-4 mr-2", $options.isUrl("registrar/students") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("registrar/students") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}> Add Student</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "printer",
            class: ["w-4 h-4 mr-2", $options.isUrl("registrar/students") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("registrar/students") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, " Add Student", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Shared/MainMenu.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const MainMenu$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainMenu$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  components: {
    Dropdown: dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu: MainMenu$1
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:text-md md:px-12 md:py-0"><div class="mt-1 mr-4">Registrar Portal</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer select-none group"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer select-none group" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 mt-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "#"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
          href: _ctx.route("logout"),
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 mt-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "#"
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
              href: _ctx.route("logout"),
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            }, 8, ["href"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden w-56 p-12 overflow-y-auto bg-indigo-800 shrink-0 md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Shared/RegistrarLayout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const RegistrarLayout = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RegistrarLayout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: RegistrarLayout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("registrar.academicYears.store"));
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Academic year" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.academicYears.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Academic Year`);
      } else {
        return [
          createTextVNode("Academic Year")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Academic Year Name"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Academic year`);
      } else {
        return [
          createTextVNode("Create Academic year")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/AcademicYear/Create.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Create$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    academicYear: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.academicYear.name
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("registrar.academicYears.update", this.academicYear));
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$props.academicYear.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.academicYears.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Academic Years`);
      } else {
        return [
          createTextVNode("Academic Years")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Update </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Academic Year  Name"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Academic Year`);
      } else {
        return [
          createTextVNode("Update Academic Year")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Semesters</h2><div class="mt-6 overflow-x-auto bg-white rounded shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Semester </th><th class="px-6 pt-6 pb-4">Acadmeic Year</th><th class="px-6 pt-6 pb-4">status</th></tr><!--[-->`);
  ssrRenderList($props.academicYear.semesters, (semester) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("registrar.semesters.edit", { academicYear: $props.academicYear, semester })
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(semester.name)} `);
          if (semester.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(semester.name) + " ", 1),
            semester.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.semesters.edit", { academicYear: $props.academicYear, semester }),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate($props.academicYear.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString($props.academicYear.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.semesters.edit", { academicYear: $props.academicYear, semester }),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (semester.status) {
            _push2(`<span${_scopeId}> Active </span>`);
          } else {
            _push2(`<span${_scopeId}> Not Active </span>`);
          }
        } else {
          return [
            semester.status ? (openBlock(), createBlock("span", { key: 0 }, " Active ")) : (openBlock(), createBlock("span", { key: 1 }, " Not Active "))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("registrar.semesters.edit", { academicYear: $props.academicYear, semester }),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.academicYear.semesters.length == 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Semester found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table><div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("registrar.semesters.create", $props.academicYear)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>+ Add</span><span class="hidden md:inline"${_scopeId}> Semester</span>`);
      } else {
        return [
          createVNode("span", null, "+ Add"),
          createVNode("span", { class: "hidden md:inline" }, " Semester")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/AcademicYear/Edit.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Edit$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: RegistrarLayout,
  props: {
    academicYears: Object
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Academic Years" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Academic Years</h1><div class="flex items-center justify-end mb-6">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("registrar.academicYears.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Academic Years</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Academic Years")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><thead><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Start Year</th><th class="px-6 pt-6 pb-4">Status</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.academicYears, (academicYear) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("registrar.academicYears.edit", academicYear)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(academicYear.name)} `);
          if (academicYear.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(academicYear.name) + " ", 1),
            academicYear.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.academicYears.edit", academicYear),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(academicYear.created_at)}`);
        } else {
          return [
            createTextVNode(toDisplayString(academicYear.created_at), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.academicYears.edit", academicYear),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (academicYear.status) {
            _push2(`<span${_scopeId}> Active </span>`);
          } else {
            _push2(`<span${_scopeId}> Not Active </span>`);
          }
        } else {
          return [
            academicYear.status ? (openBlock(), createBlock("span", { key: 0 }, " Active ")) : (openBlock(), createBlock("span", { key: 1 }, " Not Active "))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("registrar.academicYears.edit", academicYear),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.academicYears.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Academic Year found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/AcademicYear/Index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    departments: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        department_id: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("registrar.batches.store"));
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Batch" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Batches`);
      } else {
        return [
          createTextVNode("Batches")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.department_id,
    "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
    error: $data.form.errors.department_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.departments, (department) => {
          _push2(`<option${ssrRenderAttr("value", department.id)}${_scopeId}>${ssrInterpolate(department.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (department) => {
            return openBlock(), createBlock("option", {
              key: department.id,
              value: department.id
            }, toDisplayString(department.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Batch`);
      } else {
        return [
          createTextVNode("Create Batch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Batch/Create.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Create$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    departments: Object,
    batch: Object,
    students: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.batch.name,
        year: this.batch.year,
        department_id: this.batch.department_id
      })
    };
  },
  methods: {
    store() {
      this.form.put(route("registrar.batches.update", this.batch));
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$props.batch.name}, ${$props.batch.department.code}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Batches`);
      } else {
        return [
          createTextVNode("Batches")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> ${ssrInterpolate($props.batch.name)} of ${ssrInterpolate($props.batch.department.name)}</h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.year,
    "onUpdate:modelValue": ($event) => $data.form.year = $event,
    error: $data.form.errors.year,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch Year"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.department_id,
    "onUpdate:modelValue": ($event) => $data.form.department_id = $event,
    error: $data.form.errors.department_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Department"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.departments, (department) => {
          _push2(`<option${ssrRenderAttr("value", department.id)}${_scopeId}>${ssrInterpolate(department.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.departments, (department) => {
            return openBlock(), createBlock("option", {
              key: department.id,
              value: department.id
            }, toDisplayString(department.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Batch`);
      } else {
        return [
          createTextVNode("Update Batch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Students</h2><div class="mt-6 overflow-x-auto bg-white rounded shadow"><table class="w-full whitespace-nowrap"><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">No.</th><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Email</th></tr><!--[-->`);
  ssrRenderList($props.students, (student, index) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(index + 1)}`);
        } else {
          return [
            createTextVNode(toDisplayString(index + 1), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(student.user.first_name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(student.user.first_name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(student.user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(student.user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: "#",
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.students.length == 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Student found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table><div class="flex items-center justify-end px-8 py-4 mt-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("registrar.students.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>+ Add</span><span class="hidden md:inline"${_scopeId}> Student</span>`);
      } else {
        return [
          createVNode("span", null, "+ Add"),
          createVNode("span", { class: "hidden md:inline" }, " Student")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Batch/Edit.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: RegistrarLayout,
  props: {
    batches: Object
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Batches" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Batches</h1><div class="flex items-center justify-end mb-6">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: _ctx.route("registrar.batches.create")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Batch</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Batch")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="overflow-x-auto bg-white rounded-md shadow"><table class="w-full whitespace-nowrap"><thead><tr class="font-bold text-left"><th class="px-6 pt-6 pb-4">Name</th><th class="px-6 pt-6 pb-4">Year</th><th class="px-6 pt-6 pb-4" colspan="2">department</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.batches, (batch) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: _ctx.route("registrar.batches.edit", batch)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(batch.name)} `);
          if (batch.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(batch.name) + " ", 1),
            batch.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "w-3 h-3 ml-2 shrink-0 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.batches.edit", batch),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(batch.year)}`);
        } else {
          return [
            createTextVNode(toDisplayString(batch.year), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: _ctx.route("registrar.batches.edit", batch),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(batch.department.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(batch.department.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: _ctx.route("registrar.batches.edit", batch),
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.batches.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No Batch found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Batch/Index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  components: {
    Head
  },
  layout: RegistrarLayout
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Registrar Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! this is a dashboard for Registrar</p></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    academicYear: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("registrar.semesters.store", this.academicYear));
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Semester" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.academicYears.edit", $props.academicYear)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Academic Year ${ssrInterpolate($props.academicYear.name)}`);
      } else {
        return [
          createTextVNode("Academic Year " + toDisplayString($props.academicYear.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Add Semester </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Semester Name"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+ Add Semester`);
      } else {
        return [
          createTextVNode("+ Add Semester")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Semester/Create.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Create$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    icon: Icon
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    academicYear: Object,
    semester: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        name: this.semester.name
      })
    };
  },
  methods: {
    store() {
      console.log("we are hre");
      this.form.put(route("registrar.semesters.update", { "academicYear": this.academicYear, "semester": this.semester }));
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `semester ${$props.semester.name} ,${$props.academicYear.name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.academicYears.edit", $props.academicYear)
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Semesters`);
      } else {
        return [
          createTextVNode("Semesters")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Update </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Semester Name"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update semester`);
      } else {
        return [
          createTextVNode("Update semester")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Semester/Edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: RegistrarLayout,
  remember: "form",
  props: {
    batches: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        batch_id: null
      })
    };
  },
  methods: {
    store() {
      this.form.post(route("registrar.students.store"));
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Student" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: _ctx.route("registrar.batches.index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Students`);
      } else {
        return [
          createTextVNode("Students")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="font-medium text-indigo-400">/</span> Create </h1><div class="max-w-3xl overflow-hidden bg-white rounded-md shadow"><form><div class="flex flex-wrap p-8 -mb-8 -mr-6">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "First Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.middle_name,
    "onUpdate:modelValue": ($event) => $data.form.middle_name = $event,
    error: $data.form.errors.middle_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Middle Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Last Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    type: _ctx.email,
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Email Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.batch_id,
    "onUpdate:modelValue": ($event) => $data.form.batch_id = $event,
    error: $data.form.errors.batch_id,
    class: "w-full pb-8 pr-6 lg:w-1/2",
    label: "Batch"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.batches, (batch) => {
          _push2(`<option${ssrRenderAttr("value", batch.id)}${_scopeId}>${ssrInterpolate(batch.name)} of ${ssrInterpolate(batch.department.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.batches, (batch) => {
            return openBlock(), createBlock("option", {
              key: batch.id,
              value: batch.id
            }, toDisplayString(batch.name) + " of " + toDisplayString(batch.department.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 border-t border-gray-100 bg-gray-50">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`+ Add Student `);
      } else {
        return [
          createTextVNode("+ Add Student ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Registrar/Student/Create.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "flex items-center py-3 group",
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["w-4 h-4 mr-2", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Shared/MainMenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MainMenu
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    Dropdown: dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:text-md md:px-12 md:py-0"><div class="mt-1 mr-4">Teacher portal</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center cursor-pointer select-none group"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center cursor-pointer select-none group" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-2 mt-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: `/users/${$props.auth.user.id}/edit`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
          href: "/logout",
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "py-2 mt-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/users/${$props.auth.user.id}/edit`
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block w-full px-6 py-2 text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden w-56 p-12 overflow-y-auto bg-indigo-800 shrink-0 md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Shared/TeacherLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TeacherLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TeacherLayout
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Head,
    dropdown
  },
  layout: TeacherLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Admin Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! this is a dashboard for teacher</p>`);
  _push(ssrRenderComponent(_component_dropdown, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button${_scopeId}>drop down</button>`);
      } else {
        return [
          createVNode("button", null, "drop down")
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-8 py-4 mt-2 bg-white rounded shadow-lg"${_scopeId}><p${_scopeId}>this content</p></div>`);
      } else {
        return [
          createVNode("div", { class: "px-8 py-4 mt-2 bg-white rounded shadow-lg" }, [
            createVNode("p", null, "this content")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teacher/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Admin/DepartmentHeads/Create.vue": __vite_glob_0_0, "./Pages/Admin/DepartmentHeads/Edit.vue": __vite_glob_0_1, "./Pages/Admin/DepartmentHeads/Index.vue": __vite_glob_0_2, "./Pages/Admin/Departments/Create.vue": __vite_glob_0_3, "./Pages/Admin/Departments/Edit.vue": __vite_glob_0_4, "./Pages/Admin/Departments/Index.vue": __vite_glob_0_5, "./Pages/Admin/Index.vue": __vite_glob_0_6, "./Pages/Admin/Registrars/Create.vue": __vite_glob_0_7, "./Pages/Admin/Registrars/Edit.vue": __vite_glob_0_8, "./Pages/Admin/Registrars/Index.vue": __vite_glob_0_9, "./Pages/Admin/Shared/AdminLayout.vue": __vite_glob_0_10, "./Pages/Admin/Shared/MainMenu.vue": __vite_glob_0_11, "./Pages/Admin/Teacher/Create.vue": __vite_glob_0_12, "./Pages/Admin/Teacher/Index.vue": __vite_glob_0_13, "./Pages/Auth/Login.vue": __vite_glob_0_14, "./Pages/DepartmentHead/Batch/Edit.vue": __vite_glob_0_15, "./Pages/DepartmentHead/Batch/Index.vue": __vite_glob_0_16, "./Pages/DepartmentHead/Batch/Section/Create.vue": __vite_glob_0_17, "./Pages/DepartmentHead/Course/Create.vue": __vite_glob_0_18, "./Pages/DepartmentHead/Course/Edit.vue": __vite_glob_0_19, "./Pages/DepartmentHead/Course/Index.vue": __vite_glob_0_20, "./Pages/DepartmentHead/CourseAllocation/Index.vue": __vite_glob_0_21, "./Pages/DepartmentHead/CourseAllocation/SelectCourses.vue": __vite_glob_0_22, "./Pages/DepartmentHead/Index.vue": __vite_glob_0_23, "./Pages/DepartmentHead/Shared/DepartmentHeadLayout.vue": __vite_glob_0_24, "./Pages/DepartmentHead/Shared/MainMenu.vue": __vite_glob_0_25, "./Pages/DepartmentHead/Student/Edit.vue": __vite_glob_0_26, "./Pages/DepartmentHead/TeacherAssignment/Index.vue": __vite_glob_0_27, "./Pages/DepartmentHead/TeacherAssignment/SelectCourses.vue": __vite_glob_0_28, "./Pages/DepartmentHead/TeacherAssignment/SelectTeacher.vue": __vite_glob_0_29, "./Pages/DepartmentHead/TeacherAssignment/SelectTeacherForUpdate.vue": __vite_glob_0_30, "./Pages/Registrar/AcademicYear/Create.vue": __vite_glob_0_31, "./Pages/Registrar/AcademicYear/Edit.vue": __vite_glob_0_32, "./Pages/Registrar/AcademicYear/Index.vue": __vite_glob_0_33, "./Pages/Registrar/Batch/Create.vue": __vite_glob_0_34, "./Pages/Registrar/Batch/Edit.vue": __vite_glob_0_35, "./Pages/Registrar/Batch/Index.vue": __vite_glob_0_36, "./Pages/Registrar/Index.vue": __vite_glob_0_37, "./Pages/Registrar/Semester/Create.vue": __vite_glob_0_38, "./Pages/Registrar/Semester/Edit.vue": __vite_glob_0_39, "./Pages/Registrar/Shared/MainMenu.vue": __vite_glob_0_40, "./Pages/Registrar/Shared/RegistrarLayout.vue": __vite_glob_0_41, "./Pages/Registrar/Student/Create.vue": __vite_glob_0_42, "./Pages/Teacher/Index.vue": __vite_glob_0_43, "./Pages/Teacher/Shared/MainMenu.vue": __vite_glob_0_44, "./Pages/Teacher/Shared/TeacherLayout.vue": __vite_glob_0_45 });
    return pages[`./Pages/${name}.vue`];
  },
  title: (title) => title ? `${title} - Ping CRM` : "Ping CRM",
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props)
    }).use(plugin);
  }
}));
