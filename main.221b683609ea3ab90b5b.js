webpackJsonp([0],{"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+JLL":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"word-list"},t._l(t.words,function(n){return e("div",{key:n,staticClass:"word",on:{click:function(e){t.removeWord(n)}}},[t._v(t._s(n))])}))},o=[],i={render:r,staticRenderFns:o};n.a=i},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"+tPU":function(t,n,e){e("xGkn");for(var r=e("7KvD"),o=e("hJx8"),i=e("/bQp"),u=e("dSzd")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var a=s[c],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},"/bQp":function(t,n){t.exports={}},"3Eo+":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"3fs2":function(t,n,e){var r=e("RY/4"),o=e("dSzd")("iterator"),i=e("/bQp");t.exports=e("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"4mcu":function(t,n){t.exports=function(){}},"52gC":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"67t3":function(t,n){},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"880/":function(t,n,e){t.exports=e("hJx8")},"94VQ":function(t,n,e){"use strict";var r=e("Yobk"),o=e("X8DO"),i=e("e6n0"),u={};e("hJx8")(u,e("dSzd")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},BNg1:function(t,n){},BO1k:function(t,n,e){t.exports={default:e("fxRn"),__esModule:!0}},BvBM:function(t,n,e){"use strict";n.a={name:"word-input",data:function(){return{newWord:""}},methods:{addWord:function(){var t=this.newWord.toLowerCase().replace(/\s+/g," ").replace(/[^a-z -]/g,"").trim();this.$store.dispatch("addWord",t),this.newWord=""}}}},Cdx3:function(t,n,e){var r=e("sB3e"),o=e("lktj");e("uqUo")("keys",function(){return function(t){return o(r(t))}})},D2L2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},EGZi:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},EqjI:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},IHPi:function(t,n){},Ibhu:function(t,n,e){var r=e("D2L2"),o=e("TcQ7"),i=e("vFc/")(!1),u=e("ax3d")("IE_PROTO");t.exports=function(t,n){var e,s=o(t),c=0,a=[];for(e in s)e!=u&&r(s,e)&&a.push(e);for(;n.length>c;)r(s,e=n[c++])&&(~i(a,e)||a.push(e));return a}},IcnI:function(t,n,e){"use strict";var r=e("/5sW"),o=e("NYxO"),i=e("azM5");r.default.use(o.default);var u={state:{words:[],synonyms:{}},mutations:{addWord:function(t,n){""===n||t.words.includes(n)||t.words.push(n)},removeWord:function(t,n){var e=t.words.indexOf(n);e<0||t.words.splice(e,1)},setSynonyms:function(t,n){t.synonyms=n}},actions:{addWord:function(t,n){var e=t.commit,r=t.state;e("addWord",n),e("setSynonyms",Object(i.a)(r.words))},removeWord:function(t,n){var e=t.commit,r=t.state;e("removeWord",n),e("setSynonyms",Object(i.a)(r.words))}}};n.a=new o.default.Store(u)},M93x:function(t,n,e){"use strict";function r(t){e("s6qw")}var o=e("xJD8"),i=e("kKKa"),u=e("VU/8"),s=r,c=u(o.a,i.a,s,null,null);n.a=c.exports},MU5D:function(t,n,e){var r=e("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},O4g8:function(t,n){t.exports=!0},ON07:function(t,n,e){var r=e("EqjI"),o=e("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},PzxK:function(t,n,e){var r=e("D2L2"),o=e("sB3e"),i=e("ax3d")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},QRG4:function(t,n,e){var r=e("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},R9M2:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},RPLV:function(t,n,e){var r=e("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,n,e){var r=e("R9M2"),o=e("dSzd")("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,n,e){var r=e("MU5D"),o=e("52gC");t.exports=function(t){return r(o(t))}},UuGF:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"VU/8":function(t,n){t.exports=function(t,n,e,r,o){var i,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,u=t.default);var c="function"==typeof u?u.options:u;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),r&&(c._scopeId=r);var a;if(o?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=a):e&&(a=e),a){var f=c.functional,l=f?c.render:c.beforeCreate;f?c.render=function(t,n){return a.call(n),l(t,n)}:c.beforeCreate=l?[].concat(l,a):[a]}return{esModule:i,exports:u,options:c}}},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},Yobk:function(t,n,e){var r=e("77Pl"),o=e("qio6"),i=e("xnc9"),u=e("ax3d")("IE_PROTO"),s=function(){},c=function(){var t,n=e("ON07")("iframe"),r=i.length;for(n.style.display="none",e("RPLV").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},aWyD:function(t,n,e){"use strict";function r(t){e("BNg1")}var o=e("pDVH"),i=e("lk/c"),u=e("VU/8"),s=r,c=u(o.a,i.a,s,null,null);n.a=c.exports},ax3d:function(t,n,e){var r=e("e8AB")("keys"),o=e("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},azM5:function(t,n,e){"use strict";var r=e("BO1k"),o=e.n(r),i=e("+gVd"),u=e.n(i),s={local:{}};n.a=function(t){if(t.length<1)return[];var n={},e=!0,r=!1,i=void 0;try{for(var c,a=o()(t);!(e=(c=a.next()).done);e=!0){var f=c.value,l=s.local[f]||u()(f)||{};s.local[f]=l;for(var d in l)for(var p in l[d]){var v=l[d][p];v.length>1&&(void 0!==n[v]?n[v]++:n[v]=0)}}}catch(t){r=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(r)throw i}}return n}},dSzd:function(t,n,e){var r=e("e8AB")("wks"),o=e("3Eo+"),i=e("7KvD").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},e6n0:function(t,n,e){var r=e("evD5").f,o=e("D2L2"),i=e("dSzd")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},e8AB:function(t,n,e){var r=e("7KvD"),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},evD5:function(t,n,e){var r=e("77Pl"),o=e("SfB7"),i=e("MmMw"),u=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},fZjL:function(t,n,e){t.exports={default:e("jFbC"),__esModule:!0}},fkB2:function(t,n,e){var r=e("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},fxRn:function(t,n,e){e("+tPU"),e("zQR9"),t.exports=e("g8Ux")},g8Ux:function(t,n,e){var r=e("77Pl"),o=e("3fs2");t.exports=e("FeBl").getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},gIfj:function(t,n,e){"use strict";function r(t){e("sPzW")}var o=e("jF8O"),i=e("+JLL"),u=e("VU/8"),s=r,c=u(o.a,i.a,s,null,null);n.a=c.exports},gNhE:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"word-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newWord,expression:"newWord"}],staticClass:"input",attrs:{placeholder:"Type a word and press enter"},domProps:{value:t.newWord},on:{keydown:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13))return null;t.addWord(n)},input:function(n){n.target.composing||(t.newWord=n.target.value)}}}),t._v(" "),e("button",{staticClass:"button",on:{click:t.addWord}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("polyline",{attrs:{points:"10 15 15 20 20 15"}}),e("path",{attrs:{d:"M4 4h7a4 4 0 0 1 4 4v12"}})])])])},o=[],i={render:r,staticRenderFns:o};n.a=i},h65t:function(t,n,e){var r=e("UuGF"),o=e("52gC");t.exports=function(t){return function(n,e){var i,u,s=String(o(n)),c=r(e),a=s.length;return c<0||c>=a?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):i:t?s.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},hJx8:function(t,n,e){var r=e("evD5"),o=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},jF8O:function(t,n,e){"use strict";n.a={name:"word-list",computed:{words:function(){return this.$store.state.words}},methods:{removeWord:function(t){this.$store.dispatch("removeWord",t)}}}},jFbC:function(t,n,e){e("Cdx3"),t.exports=e("FeBl").Object.keys},kKKa:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[t._m(0),t._v(" "),e("section",[e("word-input"),t._v(" "),e("word-list"),t._v(" "),e("synonym-list")],1),t._v(" "),e("footer",[e("a",{attrs:{href:"https://github.com/sambrosia/multisaurus"}},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 16 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),t._v(" "),t._m(1)])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("h1",[t._v("multisaurus")]),t._v(" "),e("span",[t._v("(the best saurus)")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("\n      Created by "),e("a",{attrs:{href:"https://sambrosia.github.io"}},[t._v("Sam Woodruff")])])}],i={render:r,staticRenderFns:o};n.a=i},kM2E:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("+ZMJ"),u=e("hJx8"),s=function(t,n,e){var c,a,f,l=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,h=t&s.B,y=t&s.W,x=d?o:o[n]||(o[n]={}),m=x.prototype,_=d?r:p?r[n]:(r[n]||{}).prototype;d&&(e=n);for(c in e)(a=!l&&_&&void 0!==_[c])&&c in x||(f=a?_[c]:e[c],x[c]=d&&"function"!=typeof _[c]?e[c]:h&&a?i(f,r):y&&_[c]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[c]=f,t&s.R&&m&&!m[c]&&u(m,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lVK7:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("uMhA"),o=(e.n(r),e("67t3")),i=(e.n(o),e("/5sW")),u=e("IcnI"),s=e("M93x");new i.default({store:u.a,el:"#app",render:function(t){return t(s.a)}})},"lk/c":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"synonym-list"},t._l(t.synonyms,function(n){return e("div",{key:n,staticClass:"synonym",on:{click:function(e){t.addWord(n)}}},[t._v("\n    "+t._s(n)+"\n  ")])}))},o=[],i={render:r,staticRenderFns:o};n.a=i},lktj:function(t,n,e){var r=e("Ibhu"),o=e("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},pDVH:function(t,n,e){"use strict";var r=e("fZjL"),o=e.n(r);n.a={name:"word-list",computed:{synonyms:function(){var t=this.$store.state.synonyms;return o()(t).sort(function(n,e){return t[e]-t[n]})}},methods:{addWord:function(t){this.$store.dispatch("addWord",t)}}}},qio6:function(t,n,e){var r=e("evD5"),o=e("77Pl"),i=e("lktj");t.exports=e("+E39")?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),s=u.length,c=0;s>c;)r.f(t,e=u[c++],n[e]);return t}},rMJc:function(t,n,e){"use strict";function r(t){e("IHPi")}var o=e("BvBM"),i=e("gNhE"),u=e("VU/8"),s=r,c=u(o.a,i.a,s,"data-v-6e6e390d",null);n.a=c.exports},s6qw:function(t,n){},sB3e:function(t,n,e){var r=e("52gC");t.exports=function(t){return Object(r(t))}},sPzW:function(t,n){},uMhA:function(t,n){},uqUo:function(t,n,e){var r=e("kM2E"),o=e("FeBl"),i=e("S82l");t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},"vFc/":function(t,n,e){var r=e("TcQ7"),o=e("QRG4"),i=e("fkB2");t.exports=function(t){return function(n,e,u){var s,c=r(n),a=o(c.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},"vIB/":function(t,n,e){"use strict";var r=e("O4g8"),o=e("kM2E"),i=e("880/"),u=e("hJx8"),s=e("D2L2"),c=e("/bQp"),a=e("94VQ"),f=e("e6n0"),l=e("PzxK"),d=e("dSzd")("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,x,m){a(e,n,h);var _,g,w,b=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",O="values"==y,M=!1,j=t.prototype,k=j[d]||j["@@iterator"]||y&&j[y],E=k||b(y),L=y?O?b("entries"):E:void 0,C="Array"==n?j.entries||k:k;if(C&&(w=l(C.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),r||s(w,d)||u(w,d,v)),O&&k&&"values"!==k.name&&(M=!0,E=function(){return k.call(this)}),r&&!m||!p&&!M&&j[d]||u(j,d,E),c[n]=E,c[S]=v,y)if(_={values:O?E:b("values"),keys:x?E:b("keys"),entries:L},m)for(g in _)g in j||i(j,g,_[g]);else o(o.P+o.F*(p||M),n,_);return _}},xGkn:function(t,n,e){"use strict";var r=e("4mcu"),o=e("EGZi"),i=e("/bQp"),u=e("TcQ7");t.exports=e("vIB/")(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},xJD8:function(t,n,e){"use strict";var r=e("rMJc"),o=e("gIfj"),i=e("aWyD");n.a={components:{WordInput:r.a,WordList:o.a,SynonymList:i.a}}},xnc9:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},zQR9:function(t,n,e){"use strict";var r=e("h65t")(!0);e("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})}},["lVK7"]);
//# sourceMappingURL=main.221b683609ea3ab90b5b.js.map