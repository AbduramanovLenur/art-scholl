!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=36)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(8))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(3),i=n(26),o=n(31);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(0),i=n(9),o=n(10),c=n(5);for(var a in i){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==o)try{c(s,"forEach",o)}catch(t){s.forEach=o}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(11).forEach,i=n(35);t.exports=i("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var r=n(12),i=n(14),o=n(15),c=n(17),a=n(19),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,d=5==t||f;return function(p,v,m,y){for(var h,b,g=o(p),x=i(g),_=r(v,m,3),S=c(x.length),L=0,w=y||a,E=e?w(p,S):n?w(p,0):void 0;S>L;L++)if((d||L in x)&&(b=_(h=x[L],L,g),t))if(e)E[L]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return L;case 2:u.call(E,h)}else if(l)return!1;return f?-1:s||l?l:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(13);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(1),i=n(4),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(18),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(2),i=n(20),o=n(21)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(4);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(0),i=n(22),o=n(32),c=n(33),a=n(6),u=n(34),s=i("wks"),l=r.Symbol,f=u?l:c;t.exports=function(t){return o(s,t)||(a&&o(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},function(t,e,n){var r=n(23),i=n(24);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.5",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),i=n(25),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o},function(t,e,n){var r=n(0),i=n(5);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(3),i=n(27),o=n(29),c=n(30),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=c(e,!0),o(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(3),i=n(1),o=n(28);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),i=n(2),o=r.document,c=i(o)&&i(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(6);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";n.r(e);var r=function(t,e,n){var r=document.querySelector(t),i=document.querySelector(e),o=document.querySelector(n);r.addEventListener("click",(function(){document.body.style.overflow="hidden",i.classList.add("active")})),o.addEventListener("click",(function(){document.body.style.overflow="visible",i.classList.remove("active")}))},i=function(t,e){var n=document.querySelector(t),r=document.createElement("div"),i=document.createElement("img"),o=function(){var t=document.createElement("div");t.style.width="50px",t.style.height="50px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}();r.classList.add("popup"),n.appendChild(r),r.style.justifyContent="center",r.style.alignItems="center",r.style.zIndex="20",r.classList.remove("animate__animated","animate__fadeIn"),r.appendChild(i),n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;if(n&&n.classList.contains(e)){r.classList.add("animate__animated","animate__fadeIn"),r.style.display="flex",document.body.style.overflow="hidden";var c=n.parentNode.getAttribute("href");i.setAttribute("src",c),document.body.style.marginRight="".concat(o,"px")}n&&n.matches("div.popup")&&(r.style.display="none",document.body.style.overflow="visible",document.body.style.marginRight="0px")}))},o=(n(7),function(t){document.querySelectorAll(t).forEach((function(t){t.addEventListener("click",(function(){this.classList.toggle("active-style"),this.nextElementSibling.classList.toggle("active-content"),this.classList.contains("active-style")?(this.nextElementSibling.classList.add("animate__animated","animate__fadeInUp"),this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+50+"px"):(this.nextElementSibling.classList.remove("animate__animated","animate__fadeInUp"),this.nextElementSibling.style.maxHeight="0px")}))}))}),c=function(t){var e=document.querySelector(t);e.classList.add("animate__animated","animate__fadeOut"),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>1650?(e.classList.add("animate__fadeIn"),e.classList.remove("animate__fadeOut")):(e.classList.add("animate__fadeOut"),e.classList.remove("animate__fadeIn"))}))};document.addEventListener("DOMContentLoaded",(function(){r(".hamburger",".hamburger__menu",".hamburger__close"),i(".video__list","video__img"),i(".work__wrapper","work__img"),o(".question__text"),c(".intro-link");new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets"},spaceBetween:30});AOS.init()}))}]);