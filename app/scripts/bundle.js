!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/app/",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);n(3),console.log("before mount"),r.mount("*"),console.log("after mount")},function(t,e,n){var r;!function(o,i){"use strict";function a(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function u(t,e){for(var n,r=e.length,o=t.length;r>o;)n=e[--r],e.splice(r,1),n.unmount()}function f(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];H(r)?b(r,function(t){j(t,n,e)}):j(r,n,e)})}function c(t,e,n){var r,o=t._root;for(t._virts=[];o;)r=o.nextSibling,n?e.insertBefore(o,n._root):e.appendChild(o),t._virts.push(o),o=r}function s(t,e,n,r){for(var o,i=t._root,a=0;a<r;a++)o=i.nextSibling,e.insertBefore(i,n._root),i=o}function l(t,e,n,r,o,i,a){q(e.root)||(t?i(e,r,n,a.childNodes.length):r.insertBefore(e.root,n.root))}function p(t,e,n){O(t,"each");var r,o=typeof T(t,"no-reorder")!==at||O(t,"no-reorder"),i=$(t),p=et[i]||{tmpl:w(t)},d=pt.test(i),g=t.parentNode,m=document.createTextNode(""),v=M(t),y="option"===i.toLowerCase(),b=[],x=[],_="VIRTUAL"==t.tagName;n=yt.loopKeys(n),g.insertBefore(m,t),e.one("before-mount",function(){t.parentNode.removeChild(t),g.stub&&(g=e.root)}).on("update",function(){var w=yt(n.val,e),N=document.createDocumentFragment();H(w)||(r=w||!1,w=r?Object.keys(w).map(function(t){return a(n,t,w[t])}):[]);for(var C=0,O=w.length;C<O;C++){var L=w[C],T=o&&typeof L==ut&&!r,E=x.indexOf(L),M=~E&&T?E:C,S=b[M];L=!r&&n.key?a(n,L,C):L,!T&&!S||T&&!~E||!S?(S=new h(p,{parent:e,isLoop:!0,hasImpl:!!et[i],root:d?g:t.cloneNode(),item:L},t.innerHTML),S.mount(),_&&(S._root=S.root.firstChild),C!=b.length&&b[C]?(l(_,S,b[C],g,b,c,t),x.splice(C,0,L)):_?c(S,N):N.appendChild(S.root),b.splice(C,0,S),M=C):S.update(L,!0),M!==C&&T&&b[C]&&(I(w,x[C])&&l(_,S,b[C],g,b,s,t),n.pos&&(S[n.pos]=C),b.splice(C,0,b.splice(M,1)[0]),x.splice(C,0,x.splice(M,1)[0]),!v&&S.tags&&f(S,C)),S._item=L,R(S,"_parent",e)}if(u(w,b),g.insertBefore(N,m),y&&mt&&!g.multiple)for(var j=0;j<g.length;j++)if(g[j].__riot1374){g.selectedIndex=j,delete g[j].__riot1374;break}v&&(e.tags[i]=b),x=w.slice()})}function d(t,e,n,r){B(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||T(t,"each")?1:0,n){var o=M(t);o&&!t.isLoop&&n.push(A(o,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||Q(t,e,[])}})}function g(t,e,n){function r(t,e,r){yt.hasExpr(e)&&n.push(P({dom:t,expr:e},r))}B(t,function(t){var n,o=t.nodeType;if(3==o&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==o)return(n=T(t,"each"))?(p(t,e,n),!1):(b(t.attributes,function(e){var n=e.name,o=n.split("__")[1];if(r(t,e.value,{attr:o||n,bool:o}),o)return O(t,n),!1}),!M(t)&&void 0)})}function h(t,e,n){function r(){var t=m&&h?s:p||s;b(N.attributes,function(e){if(!(e.name in M)){var n=e.value;l[L(e.name)]=yt.hasExpr(n)?yt(n,t):n}}),b(Object.keys(M),function(e){l[L(e)]=yt(M[e],t)})}function o(t){for(var e in v)typeof s[e]!==ft&&D(s,e)&&(s[e]=t[e])}function a(t){b(Object.keys(t),function(e){var n=!dt.test(e)&&I(S,e);(typeof s[e]===ft||n)&&(n||S.push(e),s[e]=t[e])})}function u(t){s.update(t,!0)}function f(t){if(b(_,function(e){e[t?"mount":"unmount"]()}),p){var e=t?"on":"off";h?p[e]("unmount",s.unmount):p[e]("update",u)[e]("unmount",s.unmount)}}var c,s=Y.observable(this),l=z(e.opts)||{},p=e.parent,h=e.isLoop,m=e.hasImpl,v=F(e.item),w=[],_=[],N=e.root,T=N.tagName.toLowerCase(),M={},S=[];t.name&&N._tag&&N._tag.unmount(!0),this.isMounted=!1,N.isLoop=h,N._tag=this,R(this,"_riot_id",++J),P(this,{parent:p,root:N,opts:l},v),R(this,"tags",{}),b(N.attributes,function(t){var e=t.value;yt.hasExpr(e)&&(M[t.name]=e)}),c=bt(t.tmpl,n,h),R(this,"update",function(t,e){return t=F(t),h&&a(s.parent),t&&C(v)&&(o(t),v=t),P(s,t),r(),s.trigger("update",t),y(w,s),e&&s.parent?s.parent.one("updated",function(){s.trigger("updated")}):wt(function(){s.trigger("updated")}),this}),R(this,"mixin",function(){return b(arguments,function(t){var e,n,r=[];t=typeof t===at?Y.mixin(t):t,e=x(t)?new t:t;var o=Object.getPrototypeOf(e);do r=r.concat(Object.getOwnPropertyNames(n||e));while(n=Object.getPrototypeOf(n||e));b(r,function(t){if("init"!=t){var n=Object.getOwnPropertyDescriptor(e,t)||Object.getOwnPropertyDescriptor(o,t),r=n&&(n.get||n.set);!s.hasOwnProperty(t)&&r?Object.defineProperty(s,t,n):s[t]=x(e[t])?e[t].bind(s):e[t]}}),e.init&&e.init.bind(s)()}),this}),R(this,"mount",function(){r();var e=Y.mixin(nt);if(e)for(var n in e)e.hasOwnProperty(n)&&s.mixin(e[n]);if(s._parent&&s._parent.root.isLoop&&a(s._parent),t.fn&&t.fn.call(s,l),g(c,s,w),f(!0),t.attrs&&K(t.attrs,function(t,e){E(N,t,e)}),(t.attrs||m)&&g(s.root,s,w),s.parent&&!h||s.update(v),s.trigger("before-mount"),h&&!m)N=c.firstChild;else{for(;c.firstChild;)N.appendChild(c.firstChild);N.stub&&(N=p.root)}R(s,"root",N),h&&d(s.root,s.parent,null,!0),!s.parent||s.parent.isMounted?(s.isMounted=!0,s.trigger("mount")):s.parent.one("mount",function(){q(s.root)||(s.parent.isMounted=s.isMounted=!0,s.trigger("mount"))})}),R(this,"unmount",function(t){var e,n=N,r=n.parentNode,o=tt.indexOf(s);if(s.trigger("before-unmount"),~o&&tt.splice(o,1),r){if(p)e=k(p),H(e.tags[T])?b(e.tags[T],function(t,n){t._riot_id==s._riot_id&&e.tags[T].splice(n,1)}):e.tags[T]=i;else for(;n.firstChild;)n.removeChild(n.firstChild);t?(O(r,it),O(r,ot)):r.removeChild(n)}this._virts&&b(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),s.trigger("unmount"),f(),s.off("*"),s.isMounted=!1,delete N._tag}),d(c,this,_)}function m(t,e,n,r){n[t]=function(t){var i,a=r._parent,u=r._item;if(!u)for(;a&&!u;)u=a._item,a=a._parent;t=t||o.event,D(t,"currentTarget")&&(t.currentTarget=n),D(t,"target")&&(t.target=t.srcElement),D(t,"which")&&(t.which=t.charCode||t.keyCode),t.item=u,e.call(r,t)===!0||/radio|check/.test(n.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1),t.preventUpdate||(i=u?k(a):r,i.update())}}function v(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function y(t,e){b(t,function(t,n){var r=t.dom,o=t.attr,i=yt(t.expr,e),a=t.parent||t.dom.parentNode;if(t.bool?i=!!i:null==i&&(i=""),t.value!==i){if(t.value=i,!o)return i+="",void(a&&(t.parent=a,"TEXTAREA"===a.tagName?(a.value=i,ht||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value!==i&&(r.value=i,E(r,o,i)));if(O(r,o),x(i))m(o,i,r,e);else if("if"==o){var u=t.stub,f=function(){v(u.parentNode,u,r)},c=function(){v(r.parentNode,r,u)};i?u&&(f(),r.inStub=!1,q(r)||B(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(u=t.stub=u||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":t.bool?(r[o]=i,i&&E(r,o,o),mt&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ut)&&(W(o,rt)&&o!=ot&&(o=o.slice(rt.length)),E(r,o,i))}})}function b(t,e){for(var n,r=t?t.length:0,o=0;o<r;o++)n=t[o],null!=n&&e(n,o)===!1&&o--;return t}function x(t){return typeof t===ct||!1}function w(t){if(t.outerHTML)return t.outerHTML;var e=G("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function _(t,e){if(typeof t.innerHTML!=ft)t.innerHTML=e;else{var n=(new DOMParser).parseFromString(e,"application/xml");t.appendChild(t.ownerDocument.importNode(n.documentElement,!0))}}function N(t){return~gt.indexOf(t)}function C(t){return t&&typeof t===ut}function O(t,e){t.removeAttribute(e)}function L(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function T(t,e){return t.getAttribute(e)}function E(t,e,n){var r=lt.exec(e);r&&r[1]?t.setAttributeNS(st,r[1],n):t.setAttribute(e,n)}function M(t){return t.tagName&&et[T(t,it)||T(t,ot)||t.tagName.toLowerCase()]}function S(t,e,n){var r=n.tags[e];r?(H(r)||r!==t&&(n.tags[e]=[r]),I(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function j(t,e,n){var r,o=t.parent;o&&(r=o.tags[e],H(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):S(t,e,o))}function A(t,e,n,r){var o=new h(t,e,n),i=$(e.root),a=k(r);return o.parent=a,o._parent=r,S(o,i,a),a!==r&&S(o,i,r),e.root.innerHTML="",o}function k(t){for(var e=t;!M(e.root)&&e.parent;)e=e.parent;return e}function R(t,e,n,r){return Object.defineProperty(t,e,P({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function $(t){var e=M(t),n=T(t,"name"),r=n&&!yt.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function P(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var o in e)D(t,o)&&(t[o]=e[o]);return t}function I(t,e){return~t.indexOf(e)}function H(t){return Array.isArray(t)||t instanceof Array}function D(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===ft||n&&n.writable}function F(t){if(!(t instanceof h||t&&typeof t.trigger==ct))return t;var e={};for(var n in t)dt.test(n)||(e[n]=t[n]);return e}function B(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)B(t,e),t=t.nextSibling}}function K(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function q(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function G(t,e){return e?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t)}function U(t,e){return(e||document).querySelectorAll(t)}function V(t,e){return(e||document).querySelector(t)}function z(t){return Object.create(t||null)}function Z(t){return T(t,"id")||T(t,"name")}function Q(t,e,n){var r,o=Z(t),i=function(i){I(n,o)||(r=H(i),i?(!r||r&&!I(i,t))&&(r?i.push(t):e[o]=[i,t]):e[o]=t)};o&&(yt.hasExpr(o)?e.one("mount",function(){o=Z(t),i(e[o])}):i(e[o]))}function W(t,e){return t.slice(0,e.length)===e}function X(t,e,n){var r=et[e],o=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new h(r,{root:t,opts:n},o)),r&&r.mount&&(r.mount(),I(tt,r)||tt.push(r)),r}var Y={version:"v2.6.8",settings:{}},J=0,tt=[],et={},nt="__global_mixin",rt="riot-",ot=rt+"tag",it="data-is",at="string",ut="object",ft="undefined",ct="function",st="http://www.w3.org/1999/xlink",lt=/^xlink:(\w+)/,pt=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,dt=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,gt=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],ht=0|(o&&o.document||{}).documentMode,mt=o&&!!o.InstallTrigger;Y.observable=function(t){function e(t,e){for(var n=t.split(" "),r=n.length,o=0;o<r;o++){var i=n[o];i&&e(i,o)}}t=t||{};var n={},r=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(r,o){return"function"!=typeof o?t:(e(r,function(t,e){(n[t]=n[t]||[]).push(o),o.typed=e>0}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?e(r,function(t,e){if(o)for(var r,i=n[t],a=0;r=i&&i[a];++a)r==o&&i.splice(a--,1);else delete n[t]}):n={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,a=arguments.length-1,u=new Array(a),f=0;f<a;f++)u[f]=arguments[f+1];return e(o,function(e,o){i=r.call(n[e]||[],0);for(var a,f=0;a=i[f];++f)a.busy||(a.busy=1,a.apply(t,a.typed?[e].concat(u):u),i[f]!==a&&f--,a.busy=0);n["*"]&&"*"!=e&&t.trigger.apply(t,["*",e].concat(u))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(t){function e(t){return t.split(/[\/?#]/)}function n(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);if(r)return r.slice(1)}function r(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function i(t){g=r(l,1),M[_](O,g),M[_](L,g),S[_](R,p),t&&l(!0)}function a(){this.$=[],t.observable(this),P.on("stop",this.s.bind(this)),P.on("emit",this.e.bind(this))}function u(t){return t[C](/^\/|\/$/,"")}function f(t){return"string"==typeof t}function c(t){return(t||A.href)[C](b,"")}function s(t){return"#"==h[0]?(t||A.href||"").split(h)[1]||"":(A?c(t):t||"")[C](h,"")}function l(t){var e,n=0==D;if(!(E<=D)&&(D++,H.push(function(){var e=s();(t||e!=m)&&(P[T]("emit",e),m=e)}),n)){for(;e=H.shift();)e();D=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[N]("download")||!e[N]("href")||e.target&&"_self"!=e.target||e.href.indexOf(A.href.match(b)[0])==-1||e.href!=A.href&&(e.href.split("#")[0]==A.href.split("#")[0]||"#"!=h[0]&&0!==c(e.href).indexOf(h)||"#"==h[0]&&e.href.split(h)[0]!=A.href.split(h)[0]||!d(s(e.href),e.title||S.title))||t.preventDefault()}}function d(t,e,n){return j?(t=h+u(t),e=e||S.title,n?j.replaceState(null,e,t):j.pushState(null,e,t),S.title=e,I=!1,l(),I):P[T]("emit",s(t))}var g,h,m,v,y,b=/^.+?\/\/+[^\/]+/,x="EventListener",w="remove"+x,_="add"+x,N="hasAttribute",C="replace",O="popstate",L="hashchange",T="trigger",E=3,M="undefined"!=typeof o&&o,S="undefined"!=typeof document&&document,j=M&&history,A=M&&(j.location||M.location),k=a.prototype,R=S&&S.ontouchstart?"touchstart":"click",$=!1,P=t.observable(),I=!1,H=[],D=0;k.m=function(t,e,n){!f(t)||e&&!f(e)?e?this.r(t,e):this.r("@",t):d(t,e,n||!1)},k.s=function(){this.off("*"),this.$=[]},k.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?v:y)(u(t),u(e));if("undefined"!=typeof n)return this[T].apply(null,[e].concat(n)),I=!0},this)},k.r=function(t,e){"@"!=t&&(t="/"+u(t),this.$.push(t)),this.on(t,e)};var F=new a,B=F.m.bind(F);B.create=function(){var t=new a,e=t.m.bind(t);return e.stop=t.s.bind(t),e},B.base=function(t){h=t||"#",m=s()},B.exec=function(){l(!0)},B.parser=function(t,r){t||r||(v=e,y=n),t&&(v=t),r&&(y=r)},B.query=function(){var t={},e=A.href||m;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},B.stop=function(){$&&(M&&(M[w](O,g),M[w](L,g),S[w](R,p)),P[T]("stop"),$=!1)},B.start=function(t){$||(M&&("complete"==document.readyState?i(t):M[_]("load",function(){setTimeout(function(){i(t)},1)})),$=!0)},B.base(),B.parser(),t.route=B}(Y);var vt=function(t){function e(t){return t}function n(t,e){return e||(e=b),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===m)return v;var e=t.split(" ");if(2!==e.length||d.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:v[4],e),e[5]=n(t.length>3?/\\({|})/g:v[5],e),e[6]=n(v[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,c),e[8]=t,e}function o(t){return t instanceof RegExp?u(t):b[t]}function i(t){(t||(t=m))!==b[8]&&(b=r(t),u=t===m?e:n,b[9]=u(v[9])),y=t}function a(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:i,get:function(){return y},enumerable:!0}),f=t,i(e)}var u,f,c="g",s=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),g=/(?=[[\]()*+?.^$|])/g,h={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},m="{ }",v=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),m,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],y=t,b=[];return o.split=function(t,e,n){function r(t){e||a?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function o(t,e,n){var r,o=h[e];for(o.lastIndex=n,n=1;(r=o.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:o.lastIndex}n||(n=b);var i,a,u,f,c=[],s=n[6];for(a=u=s.lastIndex=0;i=s.exec(t);){if(f=i.index,a){if(i[2]){s.lastIndex=o(t,i[2],s.lastIndex);continue}if(!i[3])continue}i[1]||(r(t.slice(u,f)),u=s.lastIndex,s=n[6+(a^=1)],s.lastIndex=u)}return t&&u<t.length&&r(t.slice(u)),c},o.hasExpr=function(t){return b[4].test(t)},o.loopKeys=function(t){var e=t.match(b[9]);return e?{key:e[1],pos:e[2],val:b[0]+e[3].trim()+b[1]}:{val:t.trim()}},o.array=function(t){return t?r(t):b},Object.defineProperty(o,"settings",{set:a,get:function(){return f}}),o.settings="undefined"!=typeof Y&&Y.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=s,o.S_QBLOCKS=p,o}(),yt=function(){function t(t,r){return t?(u[t]||(u[t]=n(t))).call(r,e):t}function e(e,n){t.errorHandler&&(e.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},t.errorHandler(e))}function n(t){var e=r(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function r(t){var e,n=[],r=vt.split(t.replace(l,'"'),1);if(r.length>2||r[0]){var o,a,u=[];for(o=a=0;o<r.length;++o)e=r[o],e&&(e=1&o?i(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(u[a++]=e);e=a<2?u[0]:"["+u.join(",")+'].join("")'}else e=i(r[1],0,n);return n[0]&&(e=e.replace(p,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function i(t,e,n){function r(e,n){var r,o=1,i=d[e];for(i.lastIndex=n.lastIndex;r=i.exec(t);)if(r[0]===e)++o;else if(!--o)break;n.lastIndex=o?t.length:i.lastIndex}if(t=t.replace(s,function(t,e){return t.length>2&&!e?f+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],u=0;t&&(o=t.match(c))&&!o.index;){var l,p,g=/,|([[{(])|$/g;for(t=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=g.exec(t))[1];)r(p,g);p=t.slice(0,o.index),t=RegExp.rightContext,i[u++]=a(p,1,l)}t=u?u>1?"["+i.join(",")+'].join(" ").trim()':i[0]:a(t,e)}return t}function a(t,e,n){var r;return t=t.replace(h,function(t,e,n,o,i){return n&&(o=r?0:o+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+g+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!m.test(i.slice(o)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var u={};t.haveRaw=vt.hasRaw,t.hasExpr=vt.hasExpr,t.loopKeys=vt.loopKeys,t.clearCache=function(){u={}},t.errorHandler=null;var f=String.fromCharCode(8279),c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,s=RegExp(vt.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof o?"global":"window")+").",h=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return t.version=vt.version="v2.4.2",t}(),bt=function t(){function t(t,r,o){var i=t&&t.match(/^\s*<([-\w]+)/),a=i&&i[1].toLowerCase(),u=G("div",o&&N(a));return t=n(t,r),f.test(a)?u=e(u,t,a):_(u,t),u.stub=!0,u}function e(t,e,n){var r="o"===n[0],o=r?"select>":"table>";if(t.innerHTML="<"+o+e.trim()+"</"+o,o=t.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=V(i,o))}return o}function n(t,e){if(!r.test(t))return t;var n={};return e=e&&e.replace(i,function(t,e,r){return n[e]=n[e]||r,""}).trim(),t.replace(a,function(t,e,r){return n[e]||r||""}).replace(o,function(t,n){return e||n||""})}var r=/<yield\b/i,o=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,a=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},f=ht&&ht<10?pt:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return t}(),xt=function(t){if(!o)return{add:function(){},inject:function(){}};var e=function(){var t=G("style");E(t,"type","text/css");var e=V("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),n=e.styleSheet,r="";return Object.defineProperty(t,"styleNode",{value:e,writable:!0}),{add:function(t){r+=t},inject:function(){r&&(n?n.cssText+=r:e.innerHTML+=r,r="")}}}(Y),wt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(o||{});Y.util={brackets:vt,tmpl:yt},Y.mixin=function(){var t={},e=t[nt]={},n=0;return function(r,o,i){if(C(r))return void Y.mixin("__unnamed_"+n++,r,!0);var a=i?e:t;if(!o){if(typeof a[r]===ft)throw new Error("Unregistered mixin: "+r);return a[r]}x(o)?(P(o.prototype,a[r]||{}),a[r]=o):a[r]=P(a[r]||{},o)}}(),Y.tag=function(t,e,n,r,o){return x(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(x(n)?o=n:xt.add(n)),t=t.toLowerCase(),et[t]={name:t,tmpl:e,attrs:r,fn:o},t},Y.tag2=function(t,e,n,r,o){return n&&xt.add(n),et[t]={name:t,tmpl:e,attrs:r,fn:o},t},Y.mount=function(t,e,n){function r(t){var e="";return b(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+it+'="'+t+'"],['+ot+'="'+t+'"]')}),e}function o(){var t=Object.keys(et);return t+r(t)}function i(t){if(t.tagName){var r=T(t,it)||T(t,ot);e&&r!==e&&(r=e,E(t,it,e),E(t,ot,e));var o=X(t,r||t.tagName.toLowerCase(),n);o&&f.push(o)}else t.length&&b(t,i)}var a,u,f=[];if(xt.inject(),C(e)&&(n=e,e=0),typeof t===at?("*"===t?t=u=o():t+=r(t.split(/, */)),a=t?U(t):[]):a=t,"*"===e){if(e=u||o(),a.tagName)a=U(e,a);else{var c=[];b(a,function(t){c.push(U(e,t))}),a=c}e=0}return i(a),f},Y.update=function(){return b(tt,function(t){t.update()})},Y.vdom=tt,Y.Tag=h,typeof e===ut?t.exports=Y:"function"===ct&&typeof n(2)!==ft?(r=function(){return Y}.call(e,n,e,t),!(r!==i&&(t.exports=r))):o.riot=Y}("undefined"!=typeof window?window:void 0)},function(t,e){(function(e){t.exports=e}).call(e,{})},function(t,e,n){(function(t){n(4),t.tag2("app",'<name first="Hello" last="World"></name> <name first="Konnichiwa" last="Sekai"></name>',"","",function(t){})}).call(e,n(1))},function(t,e,n){(function(t){t.tag2("name","<h1>{opts.first}, {opts.last}</h1>","","",function(t){})}).call(e,n(1))}]);