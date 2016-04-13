"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),(0,n["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a["default"].APP.name,r=a["default"].APP.version;e["default"]=t["default"].extend({version:r,name:n})}),define("dummy/components/simditor-editor",["exports","ember-cli-simditor/components/simditor-editor"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({actions:{setValue:function(){this.get("editor").setValue("<h1>hello simditor</h1>")},getValue:function(){window.alert(this.get("editor").getValue())},sync:function(){window.alert(this.get("editor").sync())},focus:function(){this.get("editor").focus()},blur:function(){this.get("editor").blur()},hidePopover:function(){this.get("editor").hidePopover()}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e["default"]={name:"App Version",initialize:(0,t["default"])(a["default"].APP.name,a["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a["default"].exportApplicationGlobal!==!1){var n,r=a["default"].exportApplicationGlobal;n="string"==typeof r?r:t["default"].String.classify(a["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.3.2",loc:{source:null,start:{line:1,column:0},end:{line:34,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","desc");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("ember-cli-simditor\n        ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"href","https://travis-ci.org/wecatch/ember-cli-simditor");var i=e.createTextNode("\n            ");e.appendChild(r,i);var i=e.createElement("img");e.setAttribute(i,"src","https://travis-ci.org/wecatch/ember-cli-simditor.svg?branch=master"),e.setAttribute(i,"alt",""),e.appendChild(r,i);var i=e.createTextNode("\n        ");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n        Ember component wrapper for simditor editor.\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","https://github.com/wecatch/ember-cli-simditor");var r=e.createTextNode("Github");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("a");e.setAttribute(n,"href","http://wecatch.me");var r=e.createTextNode("Wecatch");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","code");var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("How to use");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("code"),r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("pre"),i=e.createTextNode("{{simditor-editor value='<h1>hello simditor</h1>' update=(action (mut value)) editor=(mut editor)}}");e.appendChild(r,i),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Editor methods");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("setValue");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("getValue");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("sync");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("focus");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("blur");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("button"),r=e.createTextNode("hidePopover");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("br");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("h1"),n=e.createTextNode("Editor");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("div"),n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Html content");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n    ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[4]),r=e.childAt(n,[3]),i=e.childAt(n,[5]),d=e.childAt(n,[7]),l=e.childAt(n,[9]),o=e.childAt(n,[11]),p=e.childAt(n,[13]),c=new Array(8);return c[0]=e.createElementMorph(r),c[1]=e.createElementMorph(i),c[2]=e.createElementMorph(d),c[3]=e.createElementMorph(l),c[4]=e.createElementMorph(o),c[5]=e.createElementMorph(p),c[6]=e.createMorphAt(t,10,10,a),c[7]=e.createMorphAt(e.childAt(t,[12]),3,3),c},statements:[["element","action",["setValue"],[],["loc",[null,[21,12],[21,33]]]],["element","action",["getValue"],[],["loc",[null,[22,12],[22,33]]]],["element","action",["sync"],[],["loc",[null,[23,12],[23,29]]]],["element","action",["focus"],[],["loc",[null,[24,12],[24,30]]]],["element","action",["blur"],[],["loc",[null,[25,12],[25,29]]]],["element","action",["hidePopover"],[],["loc",[null,[26,12],[26,36]]]],["inline","simditor-editor",[],["value","<h1>hello simditor</h1>","update",["subexpr","action",[["subexpr","mut",[["get","value",["loc",[null,[30,70],[30,75]]]]],[],["loc",[null,[30,65],[30,76]]]]],[],["loc",[null,[30,57],[30,77]]]],"editor",["subexpr","mut",[["get","editor",["loc",[null,[30,90],[30,96]]]]],[],["loc",[null,[30,85],[30,97]]]]],["loc",[null,[30,0],[30,99]]]],["content","value",["loc",[null,[33,4],[33,13]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-cli-simditor",version:"0.0.3+e80b3234"});