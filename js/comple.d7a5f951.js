(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["comple","chunk-515a8379"],{"0095":function(t,e,r){"use strict";r("95c5")},"13aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},o=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=a,c=(r("0095"),r("2877")),s=Object(c["a"])(i,n,o,!1,null,null,null);e["default"]=s.exports},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"44b8":function(t,e,r){"use strict";r("e29a")},"51eb":function(t,e,r){"use strict";var n=r("825a"),o=r("c04e");t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),a="["+o+"]",i=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var a,i;return o&&"function"==typeof(a=e.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&o(t,i),t}},8172:function(t,e,r){var n=r("746f");n("toPrimitive")},"857a":function(t,e,r){var n=r("1d80"),o=/"/g;t.exports=function(t,e,r,a){var i=String(n(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+e+">"}},"95c5":function(t,e,r){},9911:function(t,e,r){"use strict";var n=r("23e7"),o=r("857a"),a=r("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(t){return o(this,"a","href",t)}})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),a=r("94ca"),i=r("6eeb"),c=r("5135"),s=r("c6b6"),u=r("7156"),f=r("c04e"),l=r("d039"),p=r("7c73"),b=r("241c").f,d=r("06cf").f,m=r("9bf2").f,v=r("58a8").trim,g="Number",h=o[g],y=h.prototype,_=s(p(y))==g,E=function(t){var e,r,n,o,a,i,c,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+u}for(a=u.slice(2),i=a.length,c=0;c<i;c++)if(s=a.charCodeAt(c),s<48||s>o)return NaN;return parseInt(a,n)}return+u};if(a(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var O,w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(_?l((function(){y.valueOf.call(r)})):s(r)!=g)?u(new h(E(e)),r,w):E(e)},I=n?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;I.length>P;P++)c(h,O=I[P])&&!c(w,O)&&m(w,O,d(h,O));w.prototype=y,y.constructor=w,i(o,g,w)}},af03:function(t,e,r){var n=r("d039");t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),a=r("df75"),i=r("d039"),c=i((function(){a(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return a(o(t))}})},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),i=a("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),a=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=c.f,u=a(n),f={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},dd8c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"curso-main-container complementario"},[r("BannerInterno",{attrs:{icono:"far fa-folder-open",titulo:"Material complementario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[r("div",{staticClass:"table-responsive"},[r("table",[t._m(0),r("tbody",t._l(t.computedData,(function(e,n){return r("tr",{key:"complementario-"+n},[r("td",{staticClass:"text-start",attrs:{colspan:"3",scope:"row"},domProps:{innerHTML:t._s(e.tema)}}),r("td",{staticClass:"text-start",attrs:{colspan:"5",scope:"row"},domProps:{innerHTML:t._s(e.referencia)}}),r("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(e.tipo)}}),r("td",{attrs:{colspan:"2"}},[r("div",{staticClass:"complementario__enlaces"},t._l(e.link,(function(t){return r("a",{staticClass:"complementario__btn",attrs:{href:t,target:"_blank"}},[r("i",{staticClass:"fas fa-external-link-alt"})])})),0)])])})),0)])])])],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{colspan:"3",scope:"col"}},[t._v("Tema")]),r("th",{attrs:{colspan:"5",scope:"col"}},[t._v("Referencia APA del material")]),r("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Tipo ")]),r("th",{attrs:{colspan:"2",scope:"col"}},[t._v("Enlace")])])])}];r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}r("8172"),r("efec"),r("a9e3");function i(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function c(t){var e=i(t,"string");return"symbol"==a(e)?e:e+""}function s(t,e,r){return(e=c(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r("d81d"),r("9911");var l=r("13aa"),p={name:"MaterialComplementario",components:{BannerInterno:l["default"]},computed:{complementarioData:function(){return this.$config.complementario},computedData:function(){var t=this,e=this.$config.complementario;return e.map((function(e){var r=[];return e.link?"string"===typeof e.link?r.push(e.link):r=e.link:e.descarga&&("string"===typeof e.descarga?r.push(t.obtenerLink(e.descarga)):e.descarga.forEach((function(e){r.push(t.obtenerLink(e))}))),f(f({},e),{},{link:r})}))}}},b=p,d=(r("44b8"),r("2877")),m=Object(d["a"])(b,n,o,!1,null,null,null);e["default"]=m.exports},e29a:function(t,e,r){},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),a=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=o((function(){i(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},efec:function(t,e,r){var n=r("9112"),o=r("51eb"),a=r("b622"),i=a("toPrimitive"),c=Date.prototype;i in c||n(c,i,o)}}]);
//# sourceMappingURL=comple.d7a5f951.js.map