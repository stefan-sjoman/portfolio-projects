(function(t){function e(e){for(var r,s,c=e[0],u=e[1],i=e[2],l=0,p=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var h=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0098":function(t,e,n){"use strict";n("b93c")},"034f":function(t,e,n){"use strict";n("85ec")},"04d3":function(t,e,n){"use strict";n("ba71")},5515:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SearchComp",{on:{searchInput:t.saveInput,foundPhotos:t.sendToGallery}}),n("LightboxComp",{directives:[{name:"show",rawName:"v-show",value:t.reqShow,expression:"reqShow"}],attrs:{photo:t.updateLightbox},on:{changePhoto:t.changePhoto}}),n("GalleryComp",{attrs:{foundPhotos:t.updateGalleryPage},on:{clickedPhoto:t.openPhoto}}),n("NavComp",{attrs:{foundPhotos:t.tempPhotos,currentPage:t.currentPage},on:{currentPage:t.changePage}})],1)},a=[],s=(n("96cf"),n("1da1")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-comp"},[n("h1",[t._v("SEARCH FOR PHOTOS")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],attrs:{type:"text"},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),n("button",{staticClass:"search-btn default-btn",on:{click:t.searchClick}},[t._v("SEARCH")])])},u=[],i=(n("99af"),n("bc3a")),h=n.n(i),l="https://api.unsplash.com/";h.a.defaults.baseURL=l;var p="Client-ID 5hmtYkwRexp_O92bmCWR06phCjIVSrvUZE2GO0USyK0";h.a.defaults.headers.common["Authorization"]=p;var f=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("search/photos?page=".concat(n,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),g={data:function(){return{searchInput:""}},methods:{taBortMig:function(){var t=["ett","två","tre"];this.$emit("foundPhotos",t)},searchClick:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.searchInput+"i searchClick functionen"),t.$emit("searchInput",t.searchInput),e.next=4,f(t.searchInput,1);case 4:n=e.sent,console.log(n),r=n,t.$emit("foundPhotos",r);case 8:case"end":return e.stop()}}),e)})))()}}},d=g,m=(n("0098"),n("2877")),v=Object(m["a"])(d,c,u,!1,null,null,null),P=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery-comp"},[n("h2",[t._v("GALLERY")]),n("div",{staticClass:"gallery-wrapper"},t._l(t.foundPhotos.results,(function(e,r){return n("div",{key:r,staticClass:"gallery"},[n("img",{attrs:{src:e.urls.thumb,alt:"Copyright: "+e.user.name},on:{click:function(n){return t.$emit("clickedPhoto",e)}}}),n("p",[t._v("Copyright "+t._s(e.user.name))])])})),0)])},y=[],C={props:{foundPhotos:Object}},_=C,w=(n("04d3"),Object(m["a"])(_,b,y,!1,null,null,null)),x=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lightbox-comp"},[n("button",{staticClass:"btn-design",on:{click:function(e){return t.changePhoto(-1)}}},[t._v("‹")]),n("section",[n("img",{attrs:{src:t.photo.urls.regular,alt:"Copyright: "+t.photo.user.name}}),n("p",[t._v("Copyright "+t._s(t.photo.user.name))])]),n("button",{staticClass:"btn-design",on:{click:function(e){return t.changePhoto(1)}}},[t._v("›")])])},j=[],I={props:{photo:Object},methods:{changePhoto:function(t){this.$emit("changePhoto",t)}}},k=I,S=(n("d204"),Object(m["a"])(k,O,j,!1,null,null,null)),R=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",[n("button",{staticClass:"btn-left default-btn",on:{click:t.prevPage}},[t._v("«")]),n("span",t._b({},"span",t.currentPage,!1),[t._v(" "+t._s(t.currentPage)+" ")]),t._v("/ "),n("span",[t._v(" "+t._s(t.foundPhotos.total_pages)+" ")]),n("button",{staticClass:"btn-right default-btn",on:{click:t.nextPage}},[t._v("»")])])])},E=[],G=(n("a9e3"),{props:{currentPage:Number,foundPhotos:Object},methods:{nextPage:function(){this.currentPage++,this.$emit("currentPage",this.currentPage)},prevPage:function(){1!==this.currentPage&&(this.currentPage--,this.$emit("currentPage",this.currentPage))}}}),q=G,A=(n("62da"),Object(m["a"])(q,$,E,!1,null,null,null)),L=A.exports,T={name:"App",components:{SearchComp:P,GalleryComp:x,LightboxComp:R,NavComp:L},data:function(){return{tempPhotos:[],tempPhoto:{},currentPage:1,searchInput:"",pageCache:[],reqShow:!0}},computed:{updateGalleryPage:function(){var t=this.tempPhotos;return t},updateLightbox:function(){var t=this.tempPhoto;return t}},methods:{sendToGallery:function(t){this.tempPhotos=t;var e=this.tempPhotos.results[0];this.tempPhoto=e,this.reqShow=!0,this.pageCache.push(t)},openPhoto:function(t){this.tempPhoto=t},saveInput:function(t){this.searchInput=t},changePhoto:function(t){for(var e=this.tempPhoto.id,n=0;n<this.tempPhotos.results.length;n++){var r=this.tempPhotos.results[n].id;if(e===r){if(-1===t&&1===this.currentPage&&0===n)return void alert("gå inte ner under 0");if(0===n&&-1===t){var o=this.currentPage-1;this.changePage(o);var a=this.tempPhotos.results[9];this.tempPhoto=a}else if(9===n&&1===t){var s=this.currentPage+1;this.changePage(s);var c=this.tempPhotos.results[0];this.tempPhoto=c}else{var u=this.tempPhotos.results[n+parseInt(t)];this.tempPhoto=u}}}},changePage:function(t){this.reqShow=!1,this.currentPage=t,t<this.pageCache.length?(this.tempPhotos=this.pageCache[t-1],console.log(this.pageCache[t-1]),this.reqShow=!0):this.getPageAPI()},getPageAPI:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f(t.searchInput,t.currentPage);case 2:n=e.sent,t.sendToGallery(n),t.pageCache.push(n);case 5:case"end":return e.stop()}}),e)})))()}}},M=T,N=(n("034f"),Object(m["a"])(M,o,a,!1,null,null,null)),H=N.exports;r["a"].config.productionTip=!1,new r["a"]({data:function(){return{searchInput:""}},render:function(t){return t(H)}}).$mount("#app")},"62da":function(t,e,n){"use strict";n("c7cd")},"85ec":function(t,e,n){},b93c:function(t,e,n){},ba71:function(t,e,n){},c7cd:function(t,e,n){},d204:function(t,e,n){"use strict";n("5515")}});
//# sourceMappingURL=app.9ef1269c.js.map