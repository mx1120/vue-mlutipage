webpackJsonp([3],{"+gzZ":function(t,n){},"031i":function(t,n,e){"use strict";function o(){var t=location.search.slice(1),n=t.split("&"),e={};return n.forEach(function(t){var n=t.split("=");e[n[0]]=n[1]}),e}n.a=o},BENF:function(t,n,e){"use strict";function o(t){e("+gzZ")}var r=e("CNbz"),a=e("Pbsq"),s=e("VU/8"),i=o,c=s(r.a,a.a,!1,i,null,null);n.a=c.exports},CNbz:function(t,n,e){"use strict";n.a={name:"app",methods:{}}},NoCJ:function(t,n,e){"use strict";var o=e("7+uW"),r=e("/ocq"),a=function(t){e.e(0).then(function(){var n=[e("EXDq")];t.apply(null,n)}.bind(this)).catch(e.oe)};o.a.use(r.a),n.a=new r.a({mode:"history",routes:[{path:"/test",component:a}]})},Pbsq:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],a={render:o,staticRenderFns:r};n.a=a},d2gY:function(t,n,e){"use strict";var o=e("//Fk"),r=e.n(o),a=e("v5o6"),s=e.n(a),i=e("mtWM"),c=e.n(i),u=e("7+uW"),f=e("MfZv"),p=e.n(f),l=e("nAkq"),h=e.n(l),v=e("031i");u.a.use(h.a),s.a.attach(document.body);var d=Object(v.a)();location.search&&d.token&&p.a.set("token",d.token),u.a.prototype.$axios=c.a,u.a.prototype.$storage=p.a,r.a.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},c.a.interceptors.request.use(function(t){console.info("this is base config request");var n=p.a.get("token")||"";return t.headers.token=n,t.headers.author="mx",t},function(t){console.info(t)}),c.a.interceptors.response.use(function(t){return console.info("this is base config response"),p.a.set("token",t.data.token),t},function(t){console.info(t)})},nhgq:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),r=e("BENF"),a=e("NoCJ");e("d2gY");o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:r.a}})}},["nhgq"]);
//# sourceMappingURL=test.980dc7dea8f0b368671a.js.map