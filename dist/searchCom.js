'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    name: 'pica-search',
    props: {
        value: ''
    },
    data: function data() {
        return {
            msg:''
        }
    },
    watch: {
        msg: function msg(val){
           this.$emit("input",val);
        }
    },
    methods: {
        submit: function submit() {
            this.$emit("search",true);
        },
        deleteData: function deleteData() {
            this.msg = '';
        }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) { style.element.setAttribute('media', css.media); }

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) { style.element.removeChild(nodes[index]); }
      if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "searchCom" }, [
    _c("div", { staticClass: "searchData" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.msg,
            expression: "msg"
          }
        ],
        staticClass: "searchs",
        attrs: { placeholder: "请输入搜索关键词" },
        domProps: { value: _vm.msg },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.submit($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.msg = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _vm.msg
        ? _c("span", {
            staticClass: "cancelImg",
            on: { click: _vm.deleteData }
          })
        : _vm._e()
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-549913cf_0", { source: ".searchCom {\n  text-align: center;\n}\n.searchCom .searchData {\n  text-align: left;\n  margin: 10px 1%;\n  background-color: ;\n  width: 98%;\n  height: 40px;\n}\n.searchCom .searchData .searchs {\n  background: WhiteSmoke;\n  background-image: url(../assets/images/search.png);\n  background-position: 2px 2px;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  padding-left: 32px;\n  margin: 4px 3%;\n  width: 94%;\n  height: 32px;\n  border-radius: 3px;\n  font-size: 14px;\n  color: black;\n}\n.searchCom .searchData .cancelImg {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  background-size: 14px;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 3%;\n  top: 3.3%;\n  z-index: 2;\n  background-image: url(../assets/images/pica-delete.png);\n}\n", map: {"version":3,"sources":["search.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,kDAAkD;EAClD,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,4BAA4B;EAC5B,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,UAAU;EACV,uDAAuD;AACzD","file":"search.vue","sourcesContent":[".searchCom {\n  text-align: center;\n}\n.searchCom .searchData {\n  text-align: left;\n  margin: 10px 1%;\n  background-color: ;\n  width: 98%;\n  height: 40px;\n}\n.searchCom .searchData .searchs {\n  background: WhiteSmoke;\n  background-image: url(../assets/images/search.png);\n  background-position: 2px 2px;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  padding-left: 32px;\n  margin: 4px 3%;\n  width: 94%;\n  height: 32px;\n  border-radius: 3px;\n  font-size: 14px;\n  color: black;\n}\n.searchCom .searchData .cancelImg {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  background-size: 14px;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 3%;\n  top: 3.3%;\n  z-index: 2;\n  background-image: url(../assets/images/pica-delete.png);\n}\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var search = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

var Search = {
    install: function(Vue){
        Vue.component('pica-search',search);
    }
};

module.exports = Search;
