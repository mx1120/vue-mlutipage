webpackJsonp([4],{"031i":function(n,t,e){"use strict";function o(){var n=location.search.slice(1),t=n.split("&"),e={};return t.forEach(function(n){var t=n.split("=");e[t[0]]=t[1]}),e}t.a=o},Kbjl:function(n,t){},LAs0:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},NqIP:function(n,t,e){"use strict";var o=e("7+uW"),r=e("/ocq"),a=function(n){e.e(1).then(function(){var t=[e("dAjm")];n.apply(null,t)}.bind(this)).catch(e.oe)};o.a.use(r.a),t.a=new r.a({mode:"history",routes:[{path:"/index",component:a}]})},U67u:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),r=e("qOuj"),a=e("NqIP");e("d2gY");o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,render:function(n){return n(r.a)}}).$mount("#app")},Uoek:function(n,t,e){"use strict";t.a={name:"app",methods:{}}},d2gY:function(n,t,e){"use strict";var o=e("//Fk"),r=e.n(o),a=e("v5o6"),i=e.n(a),s=e("mtWM"),u=e.n(s),c=e("7+uW"),f=e("MfZv"),p=e.n(f),l=e("nAkq"),h=e.n(l),d=e("031i");c.a.use(h.a),i.a.attach(document.body);var v=Object(d.a)();location.search&&v.token&&p.a.set("token",v.token),c.a.prototype.$axios=u.a,c.a.prototype.$storage=p.a,r.a.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},u.a.interceptors.request.use(function(n){console.info("this is base config request");var t=p.a.get("token")||"";return n.headers.token=t,n.headers.author="mx",n},function(n){console.info(n)}),u.a.interceptors.response.use(function(n){return console.info("this is base config response"),p.a.set("token",n.data.token),n},function(n){console.info(n)})},qOuj:function(n,t,e){"use strict";function o(n){e("Kbjl")}var r=e("Uoek"),a=e("LAs0"),i=e("VU/8"),s=o,u=i(r.a,a.a,!1,s,null,null);t.a=u.exports}},["U67u"]);
//# sourceMappingURL=index.c2500080039942b946f1.js.map