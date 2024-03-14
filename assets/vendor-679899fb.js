var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Me={},Je={},ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.updateCSS=ke.injectCSS=void 0;const Un="INJECT_CSS_KEY";function Ai(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function Ri(n,e={}){const t=document.createElement("style");return t.innerHTML=n,Ai(e).appendChild(t),t}ke.injectCSS=Ri;function Qr(n,e,t={}){const i=Ai(t),r=Array.from(i.children).find(o=>o.tagName==="STYLE"&&o[Un]===e);if(r)return r.innerHTML!==n&&(r.innerHTML=n),r;const s=Ri(n,t);return s[Un]=e,s}ke.updateCSS=Qr;Object.defineProperty(Je,"__esModule",{value:!0});Je.clearEffect=void 0;const Zr=ke;let zt;const Fn=n=>!n.offsetParent||n.hidden;function es(n){const e=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}const ts=n=>n&&n!=="#ffffff"&&n!=="rgb(255,255,255)"&&es(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&n!=="transparent",ns=n=>getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color"),sn=new WeakMap,is=(n,e={})=>{const{waveColor:t,disabledClass:i=[]}=e;if(!n){console.warn("wave element is invalidate");return}let r;const s=()=>i.some(d=>n.className.includes(d)),o=(d,f)=>{if(!(!d||Fn(d)||s())&&(d.setAttribute("wave-click-animating","true"),ts(f))){const v=`
        [wave-click-animating='true']::after {
          --wave-shadow-color: ${f};
        }
      `;zt=Zr.updateCSS(v,"wave-animate",{attachTo:document.body}),d.addEventListener("animationend",a)}},a=d=>{!d||d.animationName!=="fadeEffect"||l()},l=()=>{n.setAttribute("wave-click-animating","false"),zt&&(zt.innerHTML=""),n.removeEventListener("animationend",a)},c=d=>{const{target:f}=d;if(Fn(f))return;l();const v=ns(n);r=window.setTimeout(()=>o(n,t??v),0)};n.addEventListener("click",c,!0),sn.set(n,()=>{sn.delete(n),window.clearTimeout(r),n.removeEventListener("click",c,!0)})},rs=n=>{const e=sn.get(n);e==null||e()};Je.clearEffect=rs;Je.default=is;var ss=K&&K.__createBinding||(Object.create?function(n,e,t,i){i===void 0&&(i=t),Object.defineProperty(n,i,{enumerable:!0,get:function(){return e[t]}})}:function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]}),os=K&&K.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),as=K&&K.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&ss(e,n,t);return os(e,n),e},ls=K&&K.__awaiter||function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(d){try{c(i.next(d))}catch(f){o(f)}}function l(d){try{c(i.throw(d))}catch(f){o(f)}}function c(d){d.done?s(d.value):r(d.value).then(a,l)}c((i=i.apply(n,e||[])).next())})};Object.defineProperty(Me,"__esModule",{value:!0});Me.deleteSwitch=Me.extend=void 0;const Li=as(Je),vt=new WeakMap,yt=new WeakMap,cs='<svg viewBox="0 0 1024 1024" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>',ds=["",""],us=(n,e)=>{const t={checked:n.checked,disabled:n.disabled,loading:n.loading};return new Proxy(t,{set(i,r,s,o){return n.delete||(r==="loading"?e.setLoading(s):r==="checked"?e.setChecked(s):r==="disabled"&&e.setDisabled(s)),Reflect.set(i,r,s,o)}})},Mi=n=>ls(void 0,void 0,void 0,function*(){const{currentTarget:e}=n,t=e,i=vt.get(t);if(i){const{checked:r,loading:s,disabled:o}=i;if(s||o)return;const a=yt.get(i),{onChange:l}=a??{},c=!r;l==null||l(c),i.checked=c}}),ki=n=>{const{prefixCls:e,role:t="switch",small:i}=n,r=o=>e?`${e}-${o}`:o;return(o,a)=>{var l,c,d,f;const v=o;v.innerHTML="";const m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("span");v.classList.add(r("switch")),i&&v.classList.add(r("switch-small")),m.className=r("switch-handle"),u.className=r("switch-inner"),h.className=r("switch-loading-icon"),h.innerHTML=cs,v.append(m,u);const[y,w]=(l=a==null?void 0:a.text)!==null&&l!==void 0?l:ds,P=p=>{u.innerText=p?w:y},x=p=>{v.classList[p?"add":"remove"](r("switch-loading")),p&&!m.contains(h)?m.appendChild(h):!p&&m.contains(h)&&m.removeChild(h)},E=p=>{v.classList[p?"add":"remove"](r("switch-disabled"))},C=p=>{v.classList[p?"add":"remove"](r("switch-checked")),P(p)},b={onChange:a==null?void 0:a.onChange,checked:(c=a==null?void 0:a.checked)!==null&&c!==void 0?c:!1,disabled:(d=a==null?void 0:a.disabled)!==null&&d!==void 0?d:!1,loading:(f=a==null?void 0:a.loading)!==null&&f!==void 0?f:!1},S=us(b,{setChecked:C,setDisabled:E,setLoading:x});return vt.set(v,S),yt.set(S,b),v.setAttribute("role",t),C(b.checked),x(b.loading),E(b.disabled),v.addEventListener("click",Mi),Li.default(v,{disabledClass:["loading","disabled"]}),S}};Me.extend=ki;const fs=n=>{Li.clearEffect(n),n.innerHTML="",n.className="",n.removeAttribute("role"),n.removeEventListener("click",Mi);const e=vt.get(n);if(e){vt.delete(n);const t=yt.get(e);t&&(t.delete=!0,yt.delete(e))}};Me.deleteSwitch=fs;const hs=ki({});Me.default=hs;var ps={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(n,e){(function(i,r){n.exports=r()})(window,function(){return function(t){var i={};function r(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=i,r.d=function(s,o,a){r.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:a})},r.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,o){if(o&1&&(s=r(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)r.d(a,l,(function(c){return s[c]}).bind(null,l));return a},r.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(o,"a",o),o},r.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},r.p="dist",r(r.s=10)}([function(t,i,r){function s(o,a){var l=Object.prototype.hasOwnProperty,c,d,f,v;for(f=1,v=arguments.length;f<v;f+=1){c=arguments[f];for(d in c)l.call(c,d)&&(o[d]=c[d])}return o}t.exports=s},function(t,i,r){function s(o){return o===void 0}t.exports=s},function(t,i,r){function s(o){return o instanceof Array}t.exports=s},function(t,i,r){var s=r(2),o=r(17),a=r(6);function l(c,d,f){s(c)?o(c,d,f):a(c,d,f)}t.exports=l},function(t,i,r){function s(o){return typeof o=="string"||o instanceof String}t.exports=s},function(t,i,r){function s(o){return o instanceof Function}t.exports=s},function(t,i,r){function s(o,a,l){var c;l=l||null;for(c in o)if(o.hasOwnProperty(c)&&a.call(l,o[c],c,o)===!1)break}t.exports=s},function(t,i,r){var s=r(18),o=r(0);function a(l,c){var d;return c||(c=l,l=null),d=c.init||function(){},l&&s(d,l),c.hasOwnProperty("static")&&(o(d,c.static),delete c.static),o(d.prototype,c),d}t.exports=a},function(t,i,r){var s=r(2);function o(a,l,c){var d,f;if(c=c||0,!s(l))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(l,a,c);for(f=l.length,d=c;c>=0&&d<f;d+=1)if(l[d]===a)return d;return-1}t.exports=o},function(t,i,r){var s=r(29),o=r(30),a=r(5),l={capitalizeFirstLetter:function(c){return c.substring(0,1).toUpperCase()+c.substring(1,c.length)},isContained:function(c,d){return d?c===d?!0:d.contains(c):!1},createElementByTemplate:function(c,d){var f=document.createElement("div"),v=a(c)?c(d):s(c,d);return f.innerHTML=v,f.firstChild},bind:function(c,d){var f=Array.prototype.slice,v;return c.bind?c.bind.apply(c,f.call(arguments,1)):(v=f.call(arguments,2),function(){return c.apply(d,v.length?v.concat(f.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=l},function(t,i,r){r(11),t.exports=r(12)},function(t,i,r){},function(t,i,r){var s=r(13),o=r(7),a=r(0),l=r(1),c=r(20),d=r(9),f={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},v=o({init:function(m,u){this._options=a({},f,u),this._currentPage=0,this._view=new c(m,this._options,d.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&d.sendHostName()},_setCurrentPage:function(m){this._currentPage=m||this._options.page},_getLastPage:function(){var m=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return m||1},_getPageIndex:function(m){var u,h;return this._options.centerAlign?(u=Math.floor(this._options.visiblePages/2),h=m-u,h=Math.max(h,1),h=Math.min(h,this._getLastPage()-this._options.visiblePages+1),h):Math.ceil(m/this._options.visiblePages)},_getRelativePage:function(m){var u=m==="prev",h=this.getCurrentPage();return u?h-1:h+1},_getMorePageIndex:function(m){var u=this._getPageIndex(this.getCurrentPage()),h=this._options.visiblePages,y=m==="prev",w;return this._options.centerAlign?w=y?u-1:u+h:w=y?(u-1)*h:u*h+1,w},_convertToValidPage:function(m){var u=this._getLastPage();return m=Math.max(m,1),m=Math.min(m,u),m},_paginate:function(m){var u=this._makeViewData(m||this._options.page);this._setCurrentPage(m),this._view.update(u)},_makeViewData:function(m){var u={},h=this._getLastPage(),y=this._getPageIndex(m),w=this._getPageIndex(h),P=this._getEdge(m);return u.leftPageNumber=P.left,u.rightPageNumber=P.right,u.prevMore=y>1,u.nextMore=y<w,u.page=m,u.currentPageIndex=m,u.lastPage=h,u.lastPageListIndex=h,u},_getEdge:function(m){var u,h,y,w=this._getLastPage(),P=this._options.visiblePages,x=this._getPageIndex(m);return this._options.centerAlign?(y=Math.floor(P/2),u=Math.max(m-y,1),h=u+P-1,h>w&&(u=Math.max(w-P+1,1),h=w)):(u=(x-1)*P+1,h=x*P,h=Math.min(h,w)),{left:u,right:h}},_onClickHandler:function(m,u){switch(m){case"first":u=1;break;case"prev":u=this._getRelativePage("prev");break;case"next":u=this._getRelativePage("next");break;case"prevMore":u=this._getMorePageIndex("prev");break;case"nextMore":u=this._getMorePageIndex("next");break;case"last":u=this._getLastPage();break;default:if(!u)return}this.movePageTo(u)},reset:function(m){l(m)&&(m=this._options.totalItems),this._options.totalItems=m,this._paginate(1)},movePageTo:function(m){m=this._convertToValidPage(m),this.invoke("beforeMove",{page:m})&&(this._paginate(m),this.fire("afterMove",{page:m}))},setTotalItems:function(m){this._options.totalItems=m},setItemsPerPage:function(m){this._options.itemsPerPage=m},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(v),t.exports=v},function(t,i,r){var s=r(0),o=r(14),a=r(4),l=r(16),c=r(2),d=r(5),f=r(3),v=/\s+/g;function m(){this.events=null,this.contexts=null}m.mixin=function(u){s(u.prototype,m.prototype)},m.prototype._getHandlerItem=function(u,h){var y={handler:u};return h&&(y.context=h),y},m.prototype._safeEvent=function(u){var h=this.events,y;return h||(h=this.events={}),u&&(y=h[u],y||(y=[],h[u]=y),h=y),h},m.prototype._safeContext=function(){var u=this.contexts;return u||(u=this.contexts=[]),u},m.prototype._indexOfContext=function(u){for(var h=this._safeContext(),y=0;h[y];){if(u===h[y][0])return y;y+=1}return-1},m.prototype._memorizeContext=function(u){var h,y;o(u)&&(h=this._safeContext(),y=this._indexOfContext(u),y>-1?h[y][1]+=1:h.push([u,1]))},m.prototype._forgetContext=function(u){var h,y;o(u)&&(h=this._safeContext(),y=this._indexOfContext(u),y>-1&&(h[y][1]-=1,h[y][1]<=0&&h.splice(y,1)))},m.prototype._bindEvent=function(u,h,y){var w=this._safeEvent(u);this._memorizeContext(y),w.push(this._getHandlerItem(h,y))},m.prototype.on=function(u,h,y){var w=this;a(u)?(u=u.split(v),f(u,function(P){w._bindEvent(P,h,y)})):l(u)&&(y=h,f(u,function(P,x){w.on(x,P,y)}))},m.prototype.once=function(u,h,y){var w=this;if(l(u)){y=h,f(u,function(x,E){w.once(E,x,y)});return}function P(){h.apply(y,arguments),w.off(u,P,y)}this.on(u,P,y)},m.prototype._spliceMatches=function(u,h){var y=0,w;if(c(u))for(w=u.length;y<w;y+=1)h(u[y])===!0&&(u.splice(y,1),w-=1,y-=1)},m.prototype._matchHandler=function(u){var h=this;return function(y){var w=u===y.handler;return w&&h._forgetContext(y.context),w}},m.prototype._matchContext=function(u){var h=this;return function(y){var w=u===y.context;return w&&h._forgetContext(y.context),w}},m.prototype._matchHandlerAndContext=function(u,h){var y=this;return function(w){var P=u===w.handler,x=h===w.context,E=P&&x;return E&&y._forgetContext(w.context),E}},m.prototype._offByEventName=function(u,h){var y=this,w=d(h),P=y._matchHandler(h);u=u.split(v),f(u,function(x){var E=y._safeEvent(x);w?y._spliceMatches(E,P):(f(E,function(C){y._forgetContext(C.context)}),y.events[x]=[])})},m.prototype._offByHandler=function(u){var h=this,y=this._matchHandler(u);f(this._safeEvent(),function(w){h._spliceMatches(w,y)})},m.prototype._offByObject=function(u,h){var y=this,w;this._indexOfContext(u)<0?f(u,function(P,x){y.off(x,P)}):a(h)?(w=this._matchContext(u),y._spliceMatches(this._safeEvent(h),w)):d(h)?(w=this._matchHandlerAndContext(h,u),f(this._safeEvent(),function(P){y._spliceMatches(P,w)})):(w=this._matchContext(u),f(this._safeEvent(),function(P){y._spliceMatches(P,w)}))},m.prototype.off=function(u,h){a(u)?this._offByEventName(u,h):arguments.length?d(u)?this._offByHandler(u):l(u)&&this._offByObject(u,h):(this.events={},this.contexts=[])},m.prototype.fire=function(u){this.invoke.apply(this,arguments)},m.prototype.invoke=function(u){var h,y,w,P;if(!this.hasListener(u))return!0;for(h=this._safeEvent(u),y=Array.prototype.slice.call(arguments,1),w=0;h[w];){if(P=h[w],P.handler.apply(P.context,y)===!1)return!1;w+=1}return!0},m.prototype.hasListener=function(u){return this.getListenerLength(u)>0},m.prototype.getListenerLength=function(u){var h=this._safeEvent(u);return h.length},t.exports=m},function(t,i,r){var s=r(1),o=r(15);function a(l){return!s(l)&&!o(l)}t.exports=a},function(t,i,r){function s(o){return o===null}t.exports=s},function(t,i,r){function s(o){return o===Object(o)}t.exports=s},function(t,i,r){function s(o,a,l){var c=0,d=o.length;for(l=l||null;c<d&&a.call(l,o[c],c,o)!==!1;c+=1);}t.exports=s},function(t,i,r){var s=r(19);function o(a,l){var c=s(l.prototype);c.constructor=a,a.prototype=c}t.exports=o},function(t,i,r){function s(o){function a(){}return a.prototype=o,new a}t.exports=s},function(t,i,r){var s=r(3),o=r(7),a=r(21),l=r(22),c=r(24),d=r(25),f=r(0),v=r(4),m=r(28),u=r(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},y=["first","prev","next","last"],w=["prev","next"],P="The container element is invalid.",x=o({init:function(E,C,b){this._containerElement=null,this._firstItemClassName=C.firstItemClassName,this._lastItemClassName=C.lastItemClassName,this._template=f({},h,C.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(E),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(b)},_setRootElement:function(E){if(v(E)?E=document.getElementById(E)||document.querySelector(E):E.jquery&&(E=E[0]),!m(E))throw new Error(P);this._containerElement=E},_setMoveButtons:function(){s(y,function(E){this._buttons[E]=u.createElementByTemplate(this._template.moveButton,{type:E})},this)},_setDisabledMoveButtons:function(){s(y,function(E){var C="disabled"+u.capitalizeFirstLetter(E);this._buttons[C]=u.createElementByTemplate(this._template.disabledMoveButton,{type:E})},this)},_setMoreButtons:function(){s(w,function(E){var C=E+"More";this._buttons[C]=u.createElementByTemplate(this._template.moreButton,{type:E})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(E){var C;E.page>1?C=this._buttons.first:C=this._buttons.disabledFirst,this._getContainerElement().appendChild(C)},_appendPrevButton:function(E){var C;E.currentPageIndex>1?C=this._buttons.prev:C=this._buttons.disabledPrev,this._getContainerElement().appendChild(C)},_appendNextButton:function(E){var C;E.currentPageIndex<E.lastPageListIndex?C=this._buttons.next:C=this._buttons.disabledNext,this._getContainerElement().appendChild(C)},_appendLastButton:function(E){var C;E.page<E.lastPage?C=this._buttons.last:C=this._buttons.disabledLast,this._getContainerElement().appendChild(C)},_appendPrevMoreButton:function(E){var C;E.prevMore&&(C=this._buttons.prevMore,d(C,this._firstItemClassName),this._getContainerElement().appendChild(C))},_appendNextMoreButton:function(E){var C;E.nextMore&&(C=this._buttons.nextMore,d(C,this._lastItemClassName),this._getContainerElement().appendChild(C))},_appendPages:function(E){var C=E.leftPageNumber,b=E.rightPageNumber,S,p;for(p=C;p<=b;p+=1)p===E.page?S=u.createElementByTemplate(this._template.currentPage,{page:p}):(S=u.createElementByTemplate(this._template.page,{page:p}),this._enabledPageElements.push(S)),p===C&&!E.prevMore&&d(S,this._firstItemClassName),p===b&&!E.nextMore&&d(S,this._lastItemClassName),this._getContainerElement().appendChild(S)},_attachClickEvent:function(E){var C=this._getContainerElement();l(C,"click",function(b){var S=a(b),p,g;c(b),g=this._getButtonType(S),g||(p=this._getPageNumber(S)),E(g,p)},this)},_getButtonType:function(E){var C,b=this._buttons;return s(b,function(S,p){return u.isContained(E,S)?(C=p,!1):!0},this),C},_getPageNumber:function(E){var C=this._findPageElement(E),b;return C&&(b=parseInt(C.innerText,10)),b},_findPageElement:function(E){for(var C=0,b=this._enabledPageElements.length,S;C<b;C+=1)if(S=this._enabledPageElements[C],u.isContained(E,S))return S;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,function(E,C){this._buttons[C]=E.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(E){this._empty(),this._appendFirstButton(E),this._appendPrevButton(E),this._appendPrevMoreButton(E),this._appendPages(E),this._appendNextMoreButton(E),this._appendNextButton(E),this._appendLastButton(E)}});t.exports=x},function(t,i,r){function s(o){return o.target||o.srcElement}t.exports=s},function(t,i,r){var s=r(4),o=r(3),a=r(23);function l(f,v,m,u){if(s(v)){o(v.split(/\s+/g),function(h){c(f,h,m,u)});return}o(v,function(h,y){c(f,y,h,m)})}function c(f,v,m,u){function h(y){m.call(u||f,y||window.event)}"addEventListener"in f?f.addEventListener(v,h):"attachEvent"in f&&f.attachEvent("on"+v,h),d(f,v,m,h)}function d(f,v,m,u){var h=a(f,v),y=!1;o(h,function(w){return w.handler===m?(y=!0,!1):!0}),y||h.push({handler:m,wrappedHandler:u})}t.exports=l},function(t,i,r){var s="_feEventKey";function o(a,l){var c=a[s],d;return c||(c=a[s]={}),d=c[l],d||(d=c[l]=[]),d}t.exports=o},function(t,i,r){function s(o){if(o.preventDefault){o.preventDefault();return}o.returnValue=!1}t.exports=s},function(t,i,r){var s=r(3),o=r(8),a=r(26),l=r(27);function c(d){var f=Array.prototype.slice.call(arguments,1),v=d.classList,m=[],u;if(v){s(f,function(h){d.classList.add(h)});return}u=a(d),u&&(f=[].concat(u.split(/\s+/),f)),s(f,function(h){o(h,m)<0&&m.push(h)}),l(d,m)}t.exports=c},function(t,i,r){var s=r(1);function o(a){return!a||!a.className?"":s(a.className.baseVal)?a.className:a.className.baseVal}t.exports=o},function(t,i,r){var s=r(2),o=r(1);function a(l,c){if(c=s(c)?c.join(" "):c,c=c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(l.className.baseVal)){l.className=c;return}l.className.baseVal=c}t.exports=a},function(t,i,r){function s(o){return typeof HTMLElement=="object"?o&&(o instanceof HTMLElement||!!o.nodeType):!!(o&&o.nodeType)}t.exports=s},function(t,i,r){var s=r(8),o=r(3),a=r(2),l=r(4),c=r(0),d=/{{\s?|\s?}}/g,f=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,v=/\[\s?|\s?\]/,m=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,u=/\./,h=/^["']\w+["']$/,y=/"|'/g,w=/^-?\d+\.?\d*$/,P=2,x={if:p,each:g,with:I},E="a".split(/a/).length===3,C=function(){return E?function(R,k){return R.split(k)}:function(R,k){var N=[],B=0,F,z;for(k.global||(k=new RegExp(k,"g")),F=k.exec(R);F!==null;)z=F.index,N.push(R.slice(B,z)),B=z+F[0].length,F=k.exec(R);return N.push(R.slice(B)),N}}();function b(R,k){var N,B=k[R];return R==="true"?B=!0:R==="false"?B=!1:h.test(R)?B=R.replace(y,""):f.test(R)?(N=R.split(v),B=b(N[0],k)[b(N[1],k)]):m.test(R)?(N=R.split(u),B=b(N[0],k)[N[1]]):w.test(R)&&(B=parseFloat(R)),B}function S(R,k){var N=[R],B=[],F=0,z=0;return o(k,function(V,J){V.indexOf("if")===0?F+=1:V==="/if"?F-=1:!F&&(V.indexOf("elseif")===0||V==="else")&&(N.push(V==="else"?["true"]:V.split(" ").slice(1)),B.push(k.slice(z,J)),z=J+1)}),B.push(k.slice(z)),{exps:N,sourcesInsideIf:B}}function p(R,k,N){var B=S(R,k),F=!1,z="";return o(B.exps,function(V,J){return F=O(V,N),F&&(z=D(B.sourcesInsideIf[J],N)),!F}),z}function g(R,k,N){var B=O(R,N),F=a(B)?"@index":"@key",z={},V="";return o(B,function(J,xe){z[F]=xe,z["@this"]=J,c(N,z),V+=D(k.slice(),N)}),V}function I(R,k,N){var B=s("as",R),F=R[B+1],z=O(R.slice(0,B),N),V={};return V[F]=z,D(k,c(N,V))||""}function A(R,k,N){var B=R.splice(k+1,N-k);return B.pop(),B}function T(R,k,N){for(var B=x[R],F=1,z=0,V,J=z+P,xe=k[J];F&&l(xe);)xe.indexOf(R)===0?F+=1:xe.indexOf("/"+R)===0&&(F-=1,V=J),J+=P,xe=k[J];if(F)throw Error(R+" needs {{/"+R+"}} expression.");return k[z]=B(k[z].split(" ").slice(1),A(k,z,V),N),k}function O(R,k){var N=b(R[0],k);return N instanceof Function?L(N,R.slice(1),k):N}function L(R,k,N){var B=[];return o(k,function(F){B.push(b(F,N))}),R.apply(null,B)}function D(R,k){for(var N=1,B=R[N],F,z,V;l(B);)F=B.split(" "),z=F[0],x[z]?(V=T(z,R.splice(N,R.length-N),k),R=R.concat(V)):R[N]=O(F,k),N+=P,B=R[N];return R.join("")}function q(R,k){return D(C(R,d),k)}t.exports=q},function(t,i,r){var s=r(1),o=r(31),a=7*24*60*60*1e3;function l(d){var f=new Date().getTime();return f-d>a}function c(d,f){var v="https://www.google-analytics.com/collect",m=location.hostname,u="event",h="use",y="TOAST UI "+d+" for "+m+": Statistics",w=window.localStorage.getItem(y);!s(window.tui)&&window.tui.usageStatistics===!1||w&&!l(w)||(window.localStorage.setItem(y,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&o(v,{v:1,t:u,tid:f,cid:m,dp:m,dh:d,el:d,ec:h})},1e3))}t.exports=c},function(t,i,r){var s=r(6);function o(a,l){var c=document.createElement("img"),d="";return s(l,function(f,v){d+="&"+v+"="+f}),d=d.substring(1),c.src=a+"?"+d,c.style.display="none",document.body.appendChild(c),document.body.removeChild(c),c}t.exports=o}])})})(ps);function zn(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function En(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:zn(e[t])&&zn(n[t])&&Object.keys(e[t]).length>0&&En(n[t],e[t])})}const Ni={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ue(){const n=typeof document<"u"?document:{};return En(n,Ni),n}const ms={document:Ni,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function G(){const n=typeof window<"u"?window:{};return En(n,ms),n}function gs(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function vs(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function on(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function wt(){return Date.now()}function ys(n){const e=G();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function ws(n,e){e===void 0&&(e="x");const t=G();let i,r,s;const o=ys(n);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function ot(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function Es(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function W(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!Es(i)){const r=Object.keys(Object(i)).filter(s=>e.indexOf(s)<0);for(let s=0,o=r.length;s<o;s+=1){const a=r[s],l=Object.getOwnPropertyDescriptor(i,a);l!==void 0&&l.enumerable&&(ot(n[a])&&ot(i[a])?i[a].__swiper__?n[a]=i[a]:W(n[a],i[a]):!ot(n[a])&&ot(i[a])?(n[a]={},i[a].__swiper__?n[a]=i[a]:W(n[a],i[a])):n[a]=i[a])}}}return n}function at(n,e,t){n.style.setProperty(e,t)}function Di(n){let{swiper:e,targetPosition:t,side:i}=n;const r=G(),s=-e.translate;let o=null,a;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",d=(v,m)=>c==="next"&&v>=m||c==="prev"&&v<=m,f=()=>{a=new Date().getTime(),o===null&&(o=a);const v=Math.max(Math.min((a-o)/l,1),0),m=.5-Math.cos(v*Math.PI)/2;let u=s+m*(t-s);if(d(u,t)&&(u=t),e.wrapperEl.scrollTo({[i]:u}),d(u,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:u})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function Z(n,e){return e===void 0&&(e=""),[...n.children].filter(t=>t.matches(e))}function Et(n){try{console.warn(n);return}catch{}}function bt(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:gs(e)),t}function bs(n,e){const t=[];for(;n.previousElementSibling;){const i=n.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function Ts(n,e){const t=[];for(;n.nextElementSibling;){const i=n.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),n=i}return t}function ye(n,e){return G().getComputedStyle(n,null).getPropertyValue(e)}function Hn(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Ss(n,e){const t=[];let i=n.parentElement;for(;i;)e?i.matches(e)&&t.push(i):t.push(i),i=i.parentElement;return t}function Vn(n,e,t){const i=G();return t?n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):n.offsetWidth}function oe(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let Ht;function _s(){const n=G(),e=Ue();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Bi(){return Ht||(Ht=_s()),Ht}let Vt;function Is(n){let{userAgent:e}=n===void 0?{}:n;const t=Bi(),i=G(),r=i.navigator.platform,s=e||i.navigator.userAgent,o={ios:!1,android:!1},a=i.screen.width,l=i.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const f=s.match(/(iPod)(.*OS\s([\d_]+))?/),v=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=r==="Win32";let u=r==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&u&&t.touch&&h.indexOf(`${a}x${l}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),u=!1),c&&!m&&(o.os="android",o.android=!0),(d||v||f)&&(o.os="ios",o.ios=!0),o}function Ui(n){return n===void 0&&(n={}),Vt||(Vt=Is(n)),Vt}let jt;function Cs(){const n=G(),e=Ui();let t=!1;function i(){const a=n.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(i()){const a=String(n.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=i(),o=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:r}}function Ps(){return jt||(jt=Cs()),jt}function xs(n){let{swiper:e,on:t,emit:i}=n;const r=G();let s=null,o=null;const a=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(f=>{o=r.requestAnimationFrame(()=>{const{width:v,height:m}=e;let u=v,h=m;f.forEach(y=>{let{contentBoxSize:w,contentRect:P,target:x}=y;x&&x!==e.el||(u=P?P.width:(w[0]||w).inlineSize,h=P?P.height:(w[0]||w).blockSize)}),(u!==v||h!==m)&&a()})}),s.observe(e.el))},c=()=>{o&&r.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},d=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",d)})}function Os(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;const s=[],o=G(),a=function(d,f){f===void 0&&(f={});const v=o.MutationObserver||o.WebkitMutationObserver,m=new v(u=>{if(e.__preventObserver__)return;if(u.length===1){r("observerUpdate",u[0]);return}const h=function(){r("observerUpdate",u[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});m.observe(d,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),s.push(m)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=Ss(e.hostEl);for(let f=0;f<d.length;f+=1)a(d[f])}a(e.hostEl,{childList:e.params.observeSlideChildren}),a(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",l),i("destroy",c)}var As={on(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return n.split(" ").forEach(s=>{i.eventsListeners[s]||(i.eventsListeners[s]=[]),i.eventsListeners[s][r](e)}),i},once(n,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(n,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];e.apply(i,o)}return r.__emitterProxy=e,i.on(n,r,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[i](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,i;for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),i=n):(e=s[0].events,t=s[0].data,i=s[0].context||n),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(c=>{c.apply(i,[l,...t])}),n.eventsListeners&&n.eventsListeners[l]&&n.eventsListeners[l].forEach(c=>{c.apply(i,t)})}),n}};function Rs(){const n=this;let e,t;const i=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=i.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=i.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(ye(i,"padding-left")||0,10)-parseInt(ye(i,"padding-right")||0,10),t=t-parseInt(ye(i,"padding-top")||0,10)-parseInt(ye(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Ls(){const n=this;function e(I,A){return parseFloat(I.getPropertyValue(n.getDirectionLabel(A))||0)}const t=n.params,{wrapperEl:i,slidesEl:r,size:s,rtlTranslate:o,wrongRTL:a}=n,l=n.virtual&&t.virtual.enabled,c=l?n.virtual.slides.length:n.slides.length,d=Z(r,`.${n.params.slideClass}, swiper-slide`),f=l?n.virtual.slides.length:d.length;let v=[];const m=[],u=[];let h=t.slidesOffsetBefore;typeof h=="function"&&(h=t.slidesOffsetBefore.call(n));let y=t.slidesOffsetAfter;typeof y=="function"&&(y=t.slidesOffsetAfter.call(n));const w=n.snapGrid.length,P=n.slidesGrid.length;let x=t.spaceBetween,E=-h,C=0,b=0;if(typeof s>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*s:typeof x=="string"&&(x=parseFloat(x)),n.virtualSize=-x,d.forEach(I=>{o?I.style.marginLeft="":I.style.marginRight="",I.style.marginBottom="",I.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(at(i,"--swiper-centered-offset-before",""),at(i,"--swiper-centered-offset-after",""));const S=t.grid&&t.grid.rows>1&&n.grid;S?n.grid.initSlides(d):n.grid&&n.grid.unsetSlides();let p;const g=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(I=>typeof t.breakpoints[I].slidesPerView<"u").length>0;for(let I=0;I<f;I+=1){p=0;let A;if(d[I]&&(A=d[I]),S&&n.grid.updateSlide(I,A,d),!(d[I]&&ye(A,"display")==="none")){if(t.slidesPerView==="auto"){g&&(d[I].style[n.getDirectionLabel("width")]="");const T=getComputedStyle(A),O=A.style.transform,L=A.style.webkitTransform;if(O&&(A.style.transform="none"),L&&(A.style.webkitTransform="none"),t.roundLengths)p=n.isHorizontal()?Vn(A,"width",!0):Vn(A,"height",!0);else{const D=e(T,"width"),q=e(T,"padding-left"),R=e(T,"padding-right"),k=e(T,"margin-left"),N=e(T,"margin-right"),B=T.getPropertyValue("box-sizing");if(B&&B==="border-box")p=D+k+N;else{const{clientWidth:F,offsetWidth:z}=A;p=D+q+R+k+N+(z-F)}}O&&(A.style.transform=O),L&&(A.style.webkitTransform=L),t.roundLengths&&(p=Math.floor(p))}else p=(s-(t.slidesPerView-1)*x)/t.slidesPerView,t.roundLengths&&(p=Math.floor(p)),d[I]&&(d[I].style[n.getDirectionLabel("width")]=`${p}px`);d[I]&&(d[I].swiperSlideSize=p),u.push(p),t.centeredSlides?(E=E+p/2+C/2+x,C===0&&I!==0&&(E=E-s/2-x),I===0&&(E=E-s/2-x),Math.abs(E)<1/1e3&&(E=0),t.roundLengths&&(E=Math.floor(E)),b%t.slidesPerGroup===0&&v.push(E),m.push(E)):(t.roundLengths&&(E=Math.floor(E)),(b-Math.min(n.params.slidesPerGroupSkip,b))%n.params.slidesPerGroup===0&&v.push(E),m.push(E),E=E+p+x),n.virtualSize+=p+x,C=p,b+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+y,o&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${n.virtualSize+x}px`),t.setWrapperSize&&(i.style[n.getDirectionLabel("width")]=`${n.virtualSize+x}px`),S&&n.grid.updateWrapperSize(p,v),!t.centeredSlides){const I=[];for(let A=0;A<v.length;A+=1){let T=v[A];t.roundLengths&&(T=Math.floor(T)),v[A]<=n.virtualSize-s&&I.push(T)}v=I,Math.floor(n.virtualSize-s)-Math.floor(v[v.length-1])>1&&v.push(n.virtualSize-s)}if(l&&t.loop){const I=u[0]+x;if(t.slidesPerGroup>1){const A=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),T=I*t.slidesPerGroup;for(let O=0;O<A;O+=1)v.push(v[v.length-1]+T)}for(let A=0;A<n.virtual.slidesBefore+n.virtual.slidesAfter;A+=1)t.slidesPerGroup===1&&v.push(v[v.length-1]+I),m.push(m[m.length-1]+I),n.virtualSize+=I}if(v.length===0&&(v=[0]),x!==0){const I=n.isHorizontal()&&o?"marginLeft":n.getDirectionLabel("marginRight");d.filter((A,T)=>!t.cssMode||t.loop?!0:T!==d.length-1).forEach(A=>{A.style[I]=`${x}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let I=0;u.forEach(T=>{I+=T+(x||0)}),I-=x;const A=I-s;v=v.map(T=>T<=0?-h:T>A?A+y:T)}if(t.centerInsufficientSlides){let I=0;if(u.forEach(A=>{I+=A+(x||0)}),I-=x,I<s){const A=(s-I)/2;v.forEach((T,O)=>{v[O]=T-A}),m.forEach((T,O)=>{m[O]=T+A})}}if(Object.assign(n,{slides:d,snapGrid:v,slidesGrid:m,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){at(i,"--swiper-centered-offset-before",`${-v[0]}px`),at(i,"--swiper-centered-offset-after",`${n.size/2-u[u.length-1]/2}px`);const I=-n.snapGrid[0],A=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(T=>T+I),n.slidesGrid=n.slidesGrid.map(T=>T+A)}if(f!==c&&n.emit("slidesLengthChange"),v.length!==w&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),m.length!==P&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const I=`${t.containerModifierClass}backface-hidden`,A=n.el.classList.contains(I);f<=t.maxBackfaceHiddenSlides?A||n.el.classList.add(I):A&&n.el.classList.remove(I)}}function Ms(n){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=a=>i?e.slides[e.getSlideIndexByData(a)]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!i)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function ks(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(n.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-n.cssOverflowAdjustment()}function Ns(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:s}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;r&&(o=n),i.forEach(l=>{l.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let a=t.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*e.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<i.length;l+=1){const c=i[l];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);const f=(o+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+a),v=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+a),m=-(o-d),u=m+e.slidesSizesGrid[l],h=m>=0&&m<=e.size-e.slidesSizesGrid[l];(m>=0&&m<e.size-1||u>1&&u<=e.size||m<=0&&u>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l),i[l].classList.add(t.slideVisibleClass)),h&&i[l].classList.add(t.slideFullyVisibleClass),c.progress=r?-f:f,c.originalProgress=r?-v:v}}function Ds(n){const e=this;if(typeof n>"u"){const d=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*d||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(i===0)r=0,s=!0,o=!0;else{r=(n-e.minTranslate())/i;const d=Math.abs(n-e.minTranslate())<1,f=Math.abs(n-e.maxTranslate())<1;s=d||r<=0,o=f||r>=1,d&&(r=0),f&&(r=1)}if(t.loop){const d=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[d],m=e.slidesGrid[f],u=e.slidesGrid[e.slidesGrid.length-1],h=Math.abs(n);h>=v?a=(h-v)/u:a=(h+u-m)/u,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}function Bs(){const n=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=n,s=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,a=f=>Z(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];e.forEach(f=>{f.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let l,c,d;if(s)if(t.loop){let f=r-n.virtual.slidesBefore;f<0&&(f=n.virtual.slides.length+f),f>=n.virtual.slides.length&&(f-=n.virtual.slides.length),l=a(`[data-swiper-slide-index="${f}"]`)}else l=a(`[data-swiper-slide-index="${r}"]`);else o?(l=e.filter(f=>f.column===r)[0],d=e.filter(f=>f.column===r+1)[0],c=e.filter(f=>f.column===r-1)[0]):l=e[r];l&&(l.classList.add(t.slideActiveClass),o?(d&&d.classList.add(t.slideNextClass),c&&c.classList.add(t.slidePrevClass)):(d=Ts(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),d&&d.classList.add(t.slideNextClass),c=bs(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(t.slidePrevClass))),n.emitSlidesClasses()}const ct=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${n.params.lazyPreloaderClass}`);!r&&n.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},$t=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},an=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),r=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=r,a=[o-e];a.push(...Array.from({length:e}).map((l,c)=>o+i+c)),n.slides.forEach((l,c)=>{a.includes(l.column)&&$t(n,c)});return}const s=r+i-1;if(n.params.rewind||n.params.loop)for(let o=r-e;o<=s+e;o+=1){const a=(o%t+t)%t;(a<r||a>s)&&$t(n,a)}else for(let o=Math.max(r-e,0);o<=Math.min(s+e,t-1);o+=1)o!==r&&(o>s||o<r)&&$t(n,o)};function Us(n){const{slidesGrid:e,params:t}=n,i=n.rtlTranslate?n.translate:-n.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?i>=e[s]&&i<e[s+1]-(e[s+1]-e[s])/2?r=s:i>=e[s]&&i<e[s+1]&&(r=s+1):i>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Fs(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=n,c;const d=m=>{let u=m-e.virtual.slidesBefore;return u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),u};if(typeof l>"u"&&(l=Us(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const m=Math.min(r.slidesPerGroupSkip,l);c=m+Math.floor((l-m)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),l===s&&!e.params.loop){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const f=e.grid&&r.grid&&r.grid.rows>1;let v;if(e.virtual&&r.virtual.enabled&&r.loop)v=d(l);else if(f){const m=e.slides.filter(h=>h.column===l)[0];let u=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(u)&&(u=Math.max(e.slides.indexOf(m),0)),v=Math.floor(u/r.grid.rows)}else if(e.slides[l]){const m=e.slides[l].getAttribute("data-swiper-slide-index");m?v=parseInt(m,10):v=l}else v=l;Object.assign(e,{previousSnapIndex:a,snapIndex:c,previousRealIndex:o,realIndex:v,previousIndex:s,activeIndex:l}),e.initialized&&an(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function zs(n,e){const t=this,i=t.params;let r=n.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(a=>{!r&&a.matches&&a.matches(`.${i.slideClass}, swiper-slide`)&&(r=a)});let s=!1,o;if(r){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===r){s=!0,o=a;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Hs={updateSize:Rs,updateSlides:Ls,updateAutoHeight:Ms,updateSlidesOffset:ks,updateSlidesProgress:Ns,updateProgress:Ds,updateSlidesClasses:Bs,updateActiveIndex:Fs,updateClickedSlide:zs};function Vs(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let o=ws(s,n);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function js(n,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=i?-n:n:l=n,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:r.virtualTranslate||(t.isHorizontal()?a-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let d;const f=t.maxTranslate()-t.minTranslate();f===0?d=0:d=(n-t.minTranslate())/f,d!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function $s(){return-this.snapGrid[0]}function Ws(){return-this.snapGrid[this.snapGrid.length-1]}function Gs(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let d;if(i&&n>l?d=l:i&&n<c?d=c:d=n,s.updateProgress(d),o.cssMode){const f=s.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return Di({swiper:s,targetPosition:-d,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(d),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(d),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(v){!s||s.destroyed||v.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var qs={getTranslate:Vs,setTranslate:js,minTranslate:$s,maxTranslate:Ws,translateTo:Gs};function Ks(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Fi(n){let{swiper:e,runCallbacks:t,direction:i,step:r}=n;const{activeIndex:s,previousIndex:o}=e;let a=i;if(a||(s>o?a="next":s<o?a="prev":a="reset"),e.emit(`transition${r}`),t&&s!==o){if(a==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),a==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Xs(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Fi({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function Js(n,e){n===void 0&&(n=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Fi({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var Ys={setTransition:Ks,transitionStart:Xs,transitionEnd:Js};function Qs(n,e,t,i,r){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let o=n;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:v,wrapperEl:m,enabled:u}=s;if(s.animating&&a.preventInteractionOnTransition||!u&&!i&&!r||s.destroyed)return!1;const h=Math.min(s.params.slidesPerGroupSkip,o);let y=h+Math.floor((o-h)/s.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const w=-l[y];if(a.normalizeSlideIndex)for(let x=0;x<c.length;x+=1){const E=-Math.floor(w*100),C=Math.floor(c[x]*100),b=Math.floor(c[x+1]*100);typeof c[x+1]<"u"?E>=C&&E<b-(b-C)/2?o=x:E>=C&&E<b&&(o=x+1):E>=C&&(o=x)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&(v?w>s.translate&&w>s.minTranslate():w<s.translate&&w<s.minTranslate())||!s.allowSlidePrev&&w>s.translate&&w>s.maxTranslate()&&(f||0)!==o))return!1;o!==(d||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(w);let P;if(o>f?P="next":o<f?P="prev":P="reset",v&&-w===s.translate||!v&&w===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(w),P!=="reset"&&(s.transitionStart(t,P),s.transitionEnd(t,P)),!1;if(a.cssMode){const x=s.isHorizontal(),E=v?w:-w;if(e===0){const C=s.virtual&&s.params.virtual.enabled;C&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),C&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[x?"scrollLeft":"scrollTop"]=E})):m[x?"scrollLeft":"scrollTop"]=E,C&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Di({swiper:s,targetPosition:E,side:x?"left":"top"}),!0;m.scrollTo({[x?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(w),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,i),s.transitionStart(t,P),e===0?s.transitionEnd(t,P):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,P))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Zs(n,e,t,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const r=this;if(r.destroyed)return;const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=n;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let a;if(s){const v=o*r.params.grid.rows;a=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===v)[0].column}else a=r.getSlideIndexByData(o);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let f=l-a<d;if(c&&(f=f||a<Math.ceil(d/2)),f){const v=c?a<r.activeIndex?"prev":"next":a-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?a+1:a-l+1,slideRealIndex:v==="next"?r.realIndex:void 0})}if(s){const v=o*r.params.grid.rows;o=r.slides.filter(m=>m.getAttribute("data-swiper-slide-index")*1===v)[0].column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,e,t,i)}),r}function eo(n,e,t){n===void 0&&(n=this.params.speed),e===void 0&&(e=!0);const i=this,{enabled:r,params:s,animating:o}=i;if(!r||i.destroyed)return i;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<s.slidesPerGroupSkip?1:a,c=i.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+l,n,e,t)}),!0}return s.rewind&&i.isEnd?i.slideTo(0,n,e,t):i.slideTo(i.activeIndex+l,n,e,t)}function to(n,e,t){n===void 0&&(n=this.params.speed),e===void 0&&(e=!0);const i=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l||i.destroyed)return i;const d=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=a?i.translate:-i.translate;function v(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const m=v(f),u=s.map(w=>v(w));let h=s[u.indexOf(m)-1];if(typeof h>"u"&&r.cssMode){let w;s.forEach((P,x)=>{m>=P&&(w=x)}),typeof w<"u"&&(h=s[w>0?w-1:w])}let y=0;if(typeof h<"u"&&(y=o.indexOf(h),y<0&&(y=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(y=y-i.slidesPerViewDynamic("previous",!0)+1,y=Math.max(y,0))),r.rewind&&i.isBeginning){const w=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(w,n,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(y,n,e,t)}),!0;return i.slideTo(y,n,e,t)}function no(n,e,t){n===void 0&&(n=this.params.speed),e===void 0&&(e=!0);const i=this;if(!i.destroyed)return i.slideTo(i.activeIndex,n,e,t)}function io(n,e,t,i){n===void 0&&(n=this.params.speed),e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const c=r.snapGrid[a],d=r.snapGrid[a+1];l-c>(d-c)*i&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[a-1],d=r.snapGrid[a];l-c<=(d-c)*i&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,n,e,t)}function ro(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,i=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let r=n.clickedIndex,s;const o=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<n.loopedSlides-i/2||r>n.slides.length-n.loopedSlides+i/2?(n.loopFix(),r=n.getSlideIndex(Z(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),on(()=>{n.slideTo(r)})):n.slideTo(r):r>n.slides.length-i?(n.loopFix(),r=n.getSlideIndex(Z(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),on(()=>{n.slideTo(r)})):n.slideTo(r)}else n.slideTo(r)}var so={slideTo:Qs,slideToLoop:Zs,slideNext:eo,slidePrev:to,slideReset:no,slideToClosest:io,slideToClickedSlide:ro};function oo(n){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{Z(i,`.${t.slideClass}, swiper-slide`).forEach((f,v)=>{f.setAttribute("data-swiper-slide-index",v)})},s=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(s?t.grid.rows:1),a=e.slides.length%o!==0,l=s&&e.slides.length%t.grid.rows!==0,c=d=>{for(let f=0;f<d;f+=1){const v=e.isElement?bt("swiper-slide",[t.slideBlankClass]):bt("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(v)}};if(a){if(t.loopAddBlankSlides){const d=o-e.slides.length%o;c(d),e.recalcSlides(),e.updateSlides()}else Et("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(t.loopAddBlankSlides){const d=t.grid.rows-e.slides.length%t.grid.rows;c(d),e.recalcSlides(),e.updateSlides()}else Et("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function ao(n){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:s,byController:o,byMousewheel:a}=n===void 0?{}:n;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:v,params:m}=l,{centeredSlides:u}=m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&m.virtual.enabled){t&&(!m.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):m.centeredSlides&&l.snapIndex<m.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=f,l.emit("loopFix");return}let h=m.slidesPerView;h==="auto"?h=l.slidesPerViewDynamic():(h=Math.ceil(parseFloat(m.slidesPerView,10)),u&&h%2===0&&(h=h+1));const y=m.slidesPerGroupAuto?h:m.slidesPerGroup;let w=y;w%y!==0&&(w+=y-w%y),w+=m.loopAdditionalSlides,l.loopedSlides=w;const P=l.grid&&m.grid&&m.grid.rows>1;c.length<h+w?Et("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):P&&m.grid.fill==="row"&&Et("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],E=[];let C=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter(O=>O.classList.contains(m.slideActiveClass))[0]):C=s;const b=i==="next"||!i,S=i==="prev"||!i;let p=0,g=0;const I=P?Math.ceil(c.length/m.grid.rows):c.length,T=(P?c[s].column:s)+(u&&typeof r>"u"?-h/2+.5:0);if(T<w){p=Math.max(w-T,y);for(let O=0;O<w-T;O+=1){const L=O-Math.floor(O/I)*I;if(P){const D=I-L-1;for(let q=c.length-1;q>=0;q-=1)c[q].column===D&&x.push(q)}else x.push(I-L-1)}}else if(T+h>I-w){g=Math.max(T-(I-w*2),y);for(let O=0;O<g;O+=1){const L=O-Math.floor(O/I)*I;P?c.forEach((D,q)=>{D.column===L&&E.push(q)}):E.push(L)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),S&&x.forEach(O=>{c[O].swiperLoopMoveDOM=!0,v.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),b&&E.forEach(O=>{c[O].swiperLoopMoveDOM=!0,v.append(c[O]),c[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),m.slidesPerView==="auto"?l.updateSlides():P&&(x.length>0&&S||E.length>0&&b)&&l.slides.forEach((O,L)=>{l.grid.updateSlide(L,O,l.slides)}),m.watchSlidesProgress&&l.updateSlidesOffset(),t){if(x.length>0&&S){if(typeof e>"u"){const O=l.slidesGrid[C],D=l.slidesGrid[C+p]-O;a?l.setTranslate(l.translate-D):(l.slideTo(C+Math.ceil(p),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-D,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-D))}else if(r){const O=P?x.length/m.grid.rows:x.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(E.length>0&&b)if(typeof e>"u"){const O=l.slidesGrid[C],D=l.slidesGrid[C-g]-O;a?l.setTranslate(l.translate-D):(l.slideTo(C-g,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-D,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-D))}else{const O=P?E.length/m.grid.rows:E.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=f,l.controller&&l.controller.control&&!o){const O={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(L=>{!L.destroyed&&L.params.loop&&L.loopFix({...O,slideTo:L.params.slidesPerView===m.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===m.slidesPerView?t:!1})}l.emit("loopFix")}function lo(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const i=[];n.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[s]=r}),n.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var co={loopCreate:oo,loopFix:ao,loopDestroy:lo};function uo(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function fo(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var ho={setGrabCursor:uo,unsetGrabCursor:fo};function po(n,e){e===void 0&&(e=this);function t(i){if(!i||i===Ue()||i===G())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(n);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function jn(n,e,t){const i=G(),{params:r}=n,s=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return s&&(t<=o||t>=i.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function mo(n){const e=this,t=Ue();let i=n;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){jn(e,i,i.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(l=d[0]);const f=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,v=!!(i.target&&i.target.shadowRoot);if(s.noSwiping&&(v?po(f,l):l.closest(f))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const m=o.currentX,u=o.currentY;if(!jn(e,i,m))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=m,o.startY=u,r.touchStartTime=wt(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let h=!0;l.matches(r.focusableElements)&&(h=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const y=h&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!l.isContentEditable&&i.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function go(n){const e=Ue(),t=this,i=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&n.pointerType==="mouse")return;let l=n;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(i.touchId!==null||l.pointerId!==i.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(b=>b.identifier===i.touchId)[0],!c||c.identifier!==i.touchId)return}else c=l;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",l);return}const d=c.pageX,f=c.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=f;return}if(!t.allowTouchMove){l.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f}),i.touchStartTime=wt());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(f<s.startY&&t.translate<=t.maxTranslate()||f>s.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(d<s.startX&&t.translate<=t.maxTranslate()||d>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=f;const v=s.currentX-s.startX,m=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(v**2+m**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let b;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?i.isScrolling=!1:v*v+m*m>=25&&(b=Math.atan2(Math.abs(m),Math.abs(v))*180/Math.PI,i.isScrolling=t.isHorizontal()?b>r.touchAngle:90-b>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",l),typeof i.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let u=t.isHorizontal()?v:m,h=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(u=Math.abs(u)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),s.diff=u,u*=r.touchRatio,o&&(u=-u,h=-h);const y=t.touchesDirection;t.swipeDirection=u>0?"prev":"next",t.touchesDirection=h>0?"prev":"next";const w=t.params.loop&&!r.cssMode,P=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(w&&P&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const b=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(b)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let x;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&y!==t.touchesDirection&&w&&P&&Math.abs(u)>=1){Object.assign(s,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=u+i.startTranslate;let E=!0,C=r.resistanceRatio;if(r.touchReleaseOnEdges&&(C=0),u>0?(w&&P&&!x&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+u)**C))):u<0&&(w&&P&&!x&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(E=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-u)**C))),E&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(u)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,i.currentTranslate=i.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function vo(n){const e=this,t=e.touchEventsData;let i=n;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(C=>C.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:a,rtlTranslate:l,slidesGrid:c,enabled:d}=e;if(!d||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=wt(),v=f-t.touchStartTime;if(e.allowClick){const C=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(C&&C[0]||i.target,C),e.emit("tap click",i),v<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=wt(),on(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||a.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let m;if(o.followFinger?m=l?e.translate:-e.translate:m=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:m});return}const u=m>=-e.maxTranslate()&&!e.params.loop;let h=0,y=e.slidesSizesGrid[0];for(let C=0;C<c.length;C+=C<o.slidesPerGroupSkip?1:o.slidesPerGroup){const b=C<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[C+b]<"u"?(u||m>=c[C]&&m<c[C+b])&&(h=C,y=c[C+b]-c[C]):(u||m>=c[C])&&(h=C,y=c[c.length-1]-c[c.length-2])}let w=null,P=null;o.rewind&&(e.isBeginning?P=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(w=0));const x=(m-c[h])/y,E=h<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(x>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?w:h+E):e.slideTo(h)),e.swipeDirection==="prev"&&(x>1-o.longSwipesRatio?e.slideTo(h+E):P!==null&&x<0&&Math.abs(x)>o.longSwipesRatio?e.slideTo(P):e.slideTo(h))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(h+E):e.slideTo(h):(e.swipeDirection==="next"&&e.slideTo(w!==null?w:h+E),e.swipeDirection==="prev"&&e.slideTo(P!==null?P:h))}}function $n(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:s}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!a?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=r,n.allowSlideNext=i,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function yo(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function wo(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=n;if(!i)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let r;const s=n.maxTranslate()-n.minTranslate();s===0?r=0:r=(n.translate-n.minTranslate())/s,r!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function Eo(n){const e=this;ct(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function bo(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const zi=(n,e)=>{const t=Ue(),{params:i,el:r,wrapperEl:s,device:o}=n,a=!!i.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;t[l]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:a}),r[l]("touchstart",n.onTouchStart,{passive:!1}),r[l]("pointerdown",n.onTouchStart,{passive:!1}),t[l]("touchmove",n.onTouchMove,{passive:!1,capture:a}),t[l]("pointermove",n.onTouchMove,{passive:!1,capture:a}),t[l]("touchend",n.onTouchEnd,{passive:!0}),t[l]("pointerup",n.onTouchEnd,{passive:!0}),t[l]("pointercancel",n.onTouchEnd,{passive:!0}),t[l]("touchcancel",n.onTouchEnd,{passive:!0}),t[l]("pointerout",n.onTouchEnd,{passive:!0}),t[l]("pointerleave",n.onTouchEnd,{passive:!0}),t[l]("contextmenu",n.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[l]("click",n.onClick,!0),i.cssMode&&s[l]("scroll",n.onScroll),i.updateOnWindowResize?n[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",$n,!0):n[c]("observerUpdate",$n,!0),r[l]("load",n.onLoad,{capture:!0})};function To(){const n=this,{params:e}=n;n.onTouchStart=mo.bind(n),n.onTouchMove=go.bind(n),n.onTouchEnd=vo.bind(n),n.onDocumentTouchStart=bo.bind(n),e.cssMode&&(n.onScroll=wo.bind(n)),n.onClick=yo.bind(n),n.onLoad=Eo.bind(n),zi(n,"on")}function So(){zi(this,"off")}var _o={attachEvents:To,detachEvents:So};const Wn=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function Io(){const n=this,{realIndex:e,initialized:t,params:i,el:r}=n,s=i.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!o||n.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||n.originalParams,c=Wn(n,i),d=Wn(n,l),f=i.enabled;c&&!d?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),n.emitContainerClasses()):!c&&d&&(r.classList.add(`${i.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),n.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof l[w]>"u")return;const P=i[w]&&i[w].enabled,x=l[w]&&l[w].enabled;P&&!x&&n[w].disable(),!P&&x&&n[w].enable()});const v=l.direction&&l.direction!==i.direction,m=i.loop&&(l.slidesPerView!==i.slidesPerView||v),u=i.loop;v&&t&&n.changeDirection(),W(n.params,l);const h=n.params.enabled,y=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),f&&!h?n.disable():!f&&h&&n.enable(),n.currentBreakpoint=o,n.emit("_beforeBreakpoint",l),t&&(m?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!u&&y?(n.loopCreate(e),n.updateSlides()):u&&!y&&n.loopDestroy()),n.emit("breakpoint",l)}function Co(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let i=!1;const r=G(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(n).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=l):c<=t.clientWidth&&(i=l)}return i||"max"}var Po={setBreakpoint:Io,getBreakpoint:Co};function xo(n,e){const t=[];return n.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function Oo(){const n=this,{classNames:e,params:t,rtl:i,el:r,device:s}=n,o=xo(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),n.emitContainerClasses()}function Ao(){const n=this,{el:e,classNames:t}=n;e.classList.remove(...t),n.emitContainerClasses()}var Ro={addClasses:Oo,removeClasses:Ao};function Lo(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:i}=t;if(i){const r=n.slides.length-1,s=n.slidesGrid[r]+n.slidesSizesGrid[r]+i*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Mo={checkOverflow:Lo},Gn={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ko(n,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],s=i[r];if(typeof s!="object"||s===null){W(e,i);return}if(n[r]===!0&&(n[r]={enabled:!0}),r==="navigation"&&n[r]&&n[r].enabled&&!n[r].prevEl&&!n[r].nextEl&&(n[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&n[r]&&n[r].enabled&&!n[r].el&&(n[r].auto=!0),!(r in n&&"enabled"in s)){W(e,i);return}typeof n[r]=="object"&&!("enabled"in n[r])&&(n[r].enabled=!0),n[r]||(n[r]={enabled:!1}),W(e,i)}}const Wt={eventsEmitter:As,update:Hs,translate:qs,transition:Ys,slide:so,loop:co,grabCursor:ho,events:_o,breakpoints:Po,checkOverflow:Mo,classes:Ro},Gt={};class Y{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=W({},t),e&&!t.el&&(t.el=e);const o=Ue();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const d=[];return o.querySelectorAll(t.el).forEach(f=>{const v=W({},t,{el:f});d.push(new Y(v))}),d}const a=this;a.__swiper__=!0,a.support=Bi(),a.device=Ui({userAgent:t.userAgent}),a.browser=Ps(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],t.modules&&Array.isArray(t.modules)&&a.modules.push(...t.modules);const l={};a.modules.forEach(d=>{d({params:t,swiper:a,extendParams:ko(t,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=W({},Gn,l);return a.params=W({},c,Gt,t),a.originalParams=W({},a.params),a.passedParams=W({},t),a.params&&a.params.on&&Object.keys(a.params.on).forEach(d=>{a.on(d,a.params.on[d])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=Z(t,`.${i.slideClass}, swiper-slide`),s=Hn(r[0]);return Hn(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=Z(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),o=(i.maxTranslate()-r)*e+r;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=i;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=s[c]?Math.ceil(s[c].swiperSlideSize):0,v;for(let m=c+1;m<s.length;m+=1)s[m]&&!v&&(f+=Math.ceil(s[m].swiperSlideSize),d+=1,f>l&&(v=!0));for(let m=c-1;m>=0;m-=1)s[m]&&!v&&(f+=s[m].swiperSlideSize,d+=1,f>l&&(v=!0))}else if(e==="current")for(let f=c+1;f<s.length;f+=1)(t?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(d+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ct(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):Z(i,r())[0])();return!o&&t.params.createElements&&(o=bt("div",t.params.wrapperClass),i.append(o),Z(i,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||ye(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||ye(i,"direction")==="rtl"),wrongRTL:ye(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?ct(t,s):s.addEventListener("load",o=>{ct(t,o.target)})}),an(t),t.initialized=!0,an(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:s,wrapperEl:o,slides:a}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(l=>{i.off(l)}),e!==!1&&(i.el.swiper=null,vs(i)),i.destroyed=!0),null}static extendDefaults(e){W(Gt,e)}static get extendedDefaults(){return Gt}static get defaults(){return Gn}static installModule(e){Y.prototype.__modules__||(Y.prototype.__modules__=[]);const t=Y.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Y.installModule(t)),Y):(Y.installModule(e),Y)}}Object.keys(Wt).forEach(n=>{Object.keys(Wt[n]).forEach(e=>{Y.prototype[e]=Wt[n][e]})});Y.use([xs,Os]);var Hi={exports:{}};(function(n,e){(function(t,i){n.exports=i(t)})(typeof K<"u"?K:window||K.window||K.global,function(t){var i={},r="iziToast";document.querySelector("body");var s=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a=typeof InstallTrigger<"u",l="ontouchstart"in document.documentElement,c=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],d={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},f=568,v={};i.children={};var m={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var u=function(b,S){S=S||{bubbles:!1,cancelable:!1,detail:void 0};var p=document.createEvent("CustomEvent");return p.initCustomEvent(b,S.bubbles,S.cancelable,S.detail),p};u.prototype=window.Event.prototype,window.CustomEvent=u}var h=function(b,S,p){if(Object.prototype.toString.call(b)==="[object Object]")for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&S.call(p,b[g],g,b);else if(b)for(var I=0,A=b.length;I<A;I++)S.call(p,b[I],I,b)},y=function(b,S){var p={};return h(b,function(g,I){p[I]=b[I]}),h(S,function(g,I){p[I]=S[I]}),p},w=function(b){var S=document.createDocumentFragment(),p=document.createElement("div");for(p.innerHTML=b;p.firstChild;)S.appendChild(p.firstChild);return S},P=function(b){var S=btoa(encodeURIComponent(b));return S.replace(/=/g,"")},x=function(b){return b.substring(0,1)=="#"||b.substring(0,3)=="rgb"||b.substring(0,3)=="hsl"},E=function(b){try{return btoa(atob(b))==b}catch{return!1}},C=function(){return{move:function(b,S,p,g){var I,A=.3,T=180;g!==0&&(b.classList.add(r+"-dragged"),b.style.transform="translateX("+g+"px)",g>0?(I=(T-g)/T,I<A&&S.hide(y(p,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),b,"drag")):(I=(T+g)/T,I<A&&S.hide(y(p,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),b,"drag")),b.style.opacity=I,I<A&&((o||a)&&(b.style.left=g+"px"),b.parentNode.style.opacity=A,this.stopMoving(b,null)))},startMoving:function(b,S,p,g){g=g||window.event;var I=l?g.touches[0].clientX:g.clientX,A=b.style.transform.replace("px)","");A=A.replace("translateX(","");var T=I-A;p.transitionIn&&b.classList.remove(p.transitionIn),p.transitionInMobile&&b.classList.remove(p.transitionInMobile),b.style.transition="",l?document.ontouchmove=function(O){O.preventDefault(),O=O||window.event;var L=O.touches[0].clientX,D=L-T;C.move(b,S,p,D)}:document.onmousemove=function(O){O.preventDefault(),O=O||window.event;var L=O.clientX,D=L-T;C.move(b,S,p,D)}},stopMoving:function(b,S){l?document.ontouchmove=function(){}:document.onmousemove=function(){},b.style.opacity="",b.style.transform="",b.classList.contains(r+"-dragged")&&(b.classList.remove(r+"-dragged"),b.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){b.style.transition=""},400))}}}();return i.setSetting=function(b,S,p){i.children[b][S]=p},i.getSetting=function(b,S){return i.children[b][S]},i.destroy=function(){h(document.querySelectorAll("."+r+"-overlay"),function(b,S){b.remove()}),h(document.querySelectorAll("."+r+"-wrapper"),function(b,S){b.remove()}),h(document.querySelectorAll("."+r),function(b,S){b.remove()}),this.children={},document.removeEventListener(r+"-opened",{},!1),document.removeEventListener(r+"-opening",{},!1),document.removeEventListener(r+"-closing",{},!1),document.removeEventListener(r+"-closed",{},!1),document.removeEventListener("keyup",{},!1),v={}},i.settings=function(b){i.destroy(),v=b,m=y(m,b||{})},h(d,function(b,S){i[S]=function(p){var g=y(v,p||{});g=y(b,g||{}),this.show(g)}}),i.progress=function(b,S,p){var g=this,I=S.getAttribute("data-iziToast-ref"),A=y(this.children[I],b||{}),T=S.querySelector("."+r+"-progressbar div");return{start:function(){typeof A.time.REMAINING>"u"&&(S.classList.remove(r+"-reseted"),T!==null&&(T.style.transition="width "+A.timeout+"ms "+A.progressBarEasing,T.style.width="0%"),A.time.START=new Date().getTime(),A.time.END=A.time.START+A.timeout,A.time.TIMER=setTimeout(function(){clearTimeout(A.time.TIMER),S.classList.contains(r+"-closing")||(g.hide(A,S,"timeout"),typeof p=="function"&&p.apply(g))},A.timeout),g.setSetting(I,"time",A.time))},pause:function(){if(typeof A.time.START<"u"&&!S.classList.contains(r+"-paused")&&!S.classList.contains(r+"-reseted")){if(S.classList.add(r+"-paused"),A.time.REMAINING=A.time.END-new Date().getTime(),clearTimeout(A.time.TIMER),g.setSetting(I,"time",A.time),T!==null){var O=window.getComputedStyle(T),L=O.getPropertyValue("width");T.style.transition="none",T.style.width=L}typeof p=="function"&&setTimeout(function(){p.apply(g)},10)}},resume:function(){typeof A.time.REMAINING<"u"?(S.classList.remove(r+"-paused"),T!==null&&(T.style.transition="width "+A.time.REMAINING+"ms "+A.progressBarEasing,T.style.width="0%"),A.time.END=new Date().getTime()+A.time.REMAINING,A.time.TIMER=setTimeout(function(){clearTimeout(A.time.TIMER),S.classList.contains(r+"-closing")||(g.hide(A,S,"timeout"),typeof p=="function"&&p.apply(g))},A.time.REMAINING),g.setSetting(I,"time",A.time)):this.start()},reset:function(){clearTimeout(A.time.TIMER),delete A.time.REMAINING,g.setSetting(I,"time",A.time),S.classList.add(r+"-reseted"),S.classList.remove(r+"-paused"),T!==null&&(T.style.transition="none",T.style.width="100%"),typeof p=="function"&&setTimeout(function(){p.apply(g)},10)}}},i.hide=function(b,S,p){typeof S!="object"&&(S=document.querySelector(S));var g=this,I=y(this.children[S.getAttribute("data-iziToast-ref")],b||{});I.closedBy=p||null,delete I.time.REMAINING,S.classList.add(r+"-closing"),function(){var O=document.querySelector("."+r+"-overlay");if(O!==null){var L=O.getAttribute("data-iziToast-ref");L=L.split(",");var D=L.indexOf(String(I.ref));D!==-1&&L.splice(D,1),O.setAttribute("data-iziToast-ref",L.join()),L.length===0&&(O.classList.remove("fadeIn"),O.classList.add("fadeOut"),setTimeout(function(){O.remove()},700))}}(),I.transitionIn&&S.classList.remove(I.transitionIn),I.transitionInMobile&&S.classList.remove(I.transitionInMobile),s||window.innerWidth<=f?I.transitionOutMobile&&S.classList.add(I.transitionOutMobile):I.transitionOut&&S.classList.add(I.transitionOut);var A=S.parentNode.offsetHeight;S.parentNode.style.height=A+"px",S.style.pointerEvents="none",(!s||window.innerWidth>f)&&(S.parentNode.style.transitionDelay="0.2s");try{var T=new CustomEvent(r+"-closing",{detail:I,bubbles:!0,cancelable:!0});document.dispatchEvent(T)}catch(O){console.warn(O)}setTimeout(function(){S.parentNode.style.height="0px",S.parentNode.style.overflow="",setTimeout(function(){delete g.children[I.ref],S.parentNode.remove();try{var O=new CustomEvent(r+"-closed",{detail:I,bubbles:!0,cancelable:!0});document.dispatchEvent(O)}catch(L){console.warn(L)}typeof I.onClosed<"u"&&I.onClosed.apply(null,[I,S,p])},1e3)},200),typeof I.onClosing<"u"&&I.onClosing.apply(null,[I,S,p])},i.show=function(b){var S=this,p=y(v,b||{});if(p=y(m,p),p.time={},p.id===null&&(p.id=P(p.title+p.message+p.color)),p.displayMode===1||p.displayMode=="once")try{if(document.querySelectorAll("."+r+"#"+p.id).length>0)return!1}catch{console.warn("["+r+"] Could not find an element with this selector: #"+p.id+". Try to set an valid id.")}if(p.displayMode===2||p.displayMode=="replace")try{h(document.querySelectorAll("."+r+"#"+p.id),function(T,O){S.hide(p,T,"replaced")})}catch{console.warn("["+r+"] Could not find an element with this selector: #"+p.id+". Try to set an valid id.")}p.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),i.children[p.ref]=p;var g={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:p.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};g.toast.setAttribute("data-iziToast-ref",p.ref),g.toast.appendChild(g.toastBody),g.toastCapsule.appendChild(g.toast),function(){if(g.toast.classList.add(r),g.toast.classList.add(r+"-opening"),g.toastCapsule.classList.add(r+"-capsule"),g.toastBody.classList.add(r+"-body"),g.toastTexts.classList.add(r+"-texts"),s||window.innerWidth<=f?p.transitionInMobile&&g.toast.classList.add(p.transitionInMobile):p.transitionIn&&g.toast.classList.add(p.transitionIn),p.class){var T=p.class.split(" ");h(T,function(O,L){g.toast.classList.add(O)})}p.id&&(g.toast.id=p.id),p.rtl&&(g.toast.classList.add(r+"-rtl"),g.toast.setAttribute("dir","rtl")),p.layout>1&&g.toast.classList.add(r+"-layout"+p.layout),p.balloon&&g.toast.classList.add(r+"-balloon"),p.maxWidth&&(isNaN(p.maxWidth)?g.toast.style.maxWidth=p.maxWidth:g.toast.style.maxWidth=p.maxWidth+"px"),(p.theme!==""||p.theme!=="light")&&g.toast.classList.add(r+"-theme-"+p.theme),p.color&&(x(p.color)?g.toast.style.background=p.color:g.toast.classList.add(r+"-color-"+p.color)),p.backgroundColor&&(g.toast.style.background=p.backgroundColor,p.balloon&&(g.toast.style.borderColor=p.backgroundColor))}(),function(){p.image&&(g.cover.classList.add(r+"-cover"),g.cover.style.width=p.imageWidth+"px",E(p.image.replace(/ /g,""))?g.cover.style.backgroundImage="url(data:image/png;base64,"+p.image.replace(/ /g,"")+")":g.cover.style.backgroundImage="url("+p.image+")",p.rtl?g.toastBody.style.marginRight=p.imageWidth+10+"px":g.toastBody.style.marginLeft=p.imageWidth+10+"px",g.toast.appendChild(g.cover))}(),function(){p.close?(g.buttonClose=document.createElement("button"),g.buttonClose.type="button",g.buttonClose.classList.add(r+"-close"),g.buttonClose.addEventListener("click",function(T){T.target,S.hide(p,g.toast,"button")}),g.toast.appendChild(g.buttonClose)):p.rtl?g.toast.style.paddingLeft="18px":g.toast.style.paddingRight="18px"}(),function(){p.progressBar&&(g.progressBar=document.createElement("div"),g.progressBarDiv=document.createElement("div"),g.progressBar.classList.add(r+"-progressbar"),g.progressBarDiv.style.background=p.progressBarColor,g.progressBar.appendChild(g.progressBarDiv),g.toast.appendChild(g.progressBar)),p.timeout&&(p.pauseOnHover&&!p.resetOnHover&&(g.toast.addEventListener("mouseenter",function(T){S.progress(p,g.toast).pause()}),g.toast.addEventListener("mouseleave",function(T){S.progress(p,g.toast).resume()})),p.resetOnHover&&(g.toast.addEventListener("mouseenter",function(T){S.progress(p,g.toast).reset()}),g.toast.addEventListener("mouseleave",function(T){S.progress(p,g.toast).start()})))}(),function(){p.iconUrl?(g.icon.setAttribute("class",r+"-icon"),g.icon.setAttribute("src",p.iconUrl)):p.icon&&(g.icon.setAttribute("class",r+"-icon "+p.icon),p.iconText&&g.icon.appendChild(document.createTextNode(p.iconText)),p.iconColor&&(g.icon.style.color=p.iconColor)),(p.icon||p.iconUrl)&&(p.rtl?g.toastBody.style.paddingRight="33px":g.toastBody.style.paddingLeft="33px",g.toastBody.appendChild(g.icon))}(),function(){p.title.length>0&&(g.strong=document.createElement("strong"),g.strong.classList.add(r+"-title"),g.strong.appendChild(w(p.title)),g.toastTexts.appendChild(g.strong),p.titleColor&&(g.strong.style.color=p.titleColor),p.titleSize&&(isNaN(p.titleSize)?g.strong.style.fontSize=p.titleSize:g.strong.style.fontSize=p.titleSize+"px"),p.titleLineHeight&&(isNaN(p.titleSize)?g.strong.style.lineHeight=p.titleLineHeight:g.strong.style.lineHeight=p.titleLineHeight+"px")),p.message.length>0&&(g.p=document.createElement("p"),g.p.classList.add(r+"-message"),g.p.appendChild(w(p.message)),g.toastTexts.appendChild(g.p),p.messageColor&&(g.p.style.color=p.messageColor),p.messageSize&&(isNaN(p.titleSize)?g.p.style.fontSize=p.messageSize:g.p.style.fontSize=p.messageSize+"px"),p.messageLineHeight&&(isNaN(p.titleSize)?g.p.style.lineHeight=p.messageLineHeight:g.p.style.lineHeight=p.messageLineHeight+"px")),p.title.length>0&&p.message.length>0&&(p.rtl?g.strong.style.marginLeft="10px":p.layout!==2&&!p.rtl&&(g.strong.style.marginRight="10px"))}(),g.toastBody.appendChild(g.toastTexts);var I;(function(){p.inputs.length>0&&(g.inputs.classList.add(r+"-inputs"),h(p.inputs,function(T,O){g.inputs.appendChild(w(T[0])),I=g.inputs.childNodes,I[O].classList.add(r+"-inputs-child"),T[3]&&setTimeout(function(){I[O].focus()},300),I[O].addEventListener(T[1],function(L){var D=T[2];return D(S,g.toast,this,L)})}),g.toastBody.appendChild(g.inputs))})(),function(){p.buttons.length>0&&(g.buttons.classList.add(r+"-buttons"),h(p.buttons,function(T,O){g.buttons.appendChild(w(T[0]));var L=g.buttons.childNodes;L[O].classList.add(r+"-buttons-child"),T[2]&&setTimeout(function(){L[O].focus()},300),L[O].addEventListener("click",function(D){D.preventDefault();var q=T[1];return q(S,g.toast,this,D,I)})})),g.toastBody.appendChild(g.buttons)}(),p.message.length>0&&(p.inputs.length>0||p.buttons.length>0)&&(g.p.style.marginBottom="0"),(p.inputs.length>0||p.buttons.length>0)&&(p.rtl?g.toastTexts.style.marginLeft="10px":g.toastTexts.style.marginRight="10px",p.inputs.length>0&&p.buttons.length>0&&(p.rtl?g.inputs.style.marginLeft="8px":g.inputs.style.marginRight="8px")),function(){g.toastCapsule.style.visibility="hidden",setTimeout(function(){var T=g.toast.offsetHeight,O=g.toast.currentStyle||window.getComputedStyle(g.toast),L=O.marginTop;L=L.split("px"),L=parseInt(L[0]);var D=O.marginBottom;D=D.split("px"),D=parseInt(D[0]),g.toastCapsule.style.visibility="",g.toastCapsule.style.height=T+D+L+"px",setTimeout(function(){g.toastCapsule.style.height="auto",p.target&&(g.toastCapsule.style.overflow="visible")},500),p.timeout&&S.progress(p,g.toast).start()},100)}(),function(){var T=p.position;if(p.target)g.wrapper=document.querySelector(p.target),g.wrapper.classList.add(r+"-target"),p.targetFirst?g.wrapper.insertBefore(g.toastCapsule,g.wrapper.firstChild):g.wrapper.appendChild(g.toastCapsule);else{if(c.indexOf(p.position)==-1){console.warn("["+r+`] Incorrect position.
It can be › `+c);return}s||window.innerWidth<=f?p.position=="bottomLeft"||p.position=="bottomRight"||p.position=="bottomCenter"?T=r+"-wrapper-bottomCenter":p.position=="topLeft"||p.position=="topRight"||p.position=="topCenter"?T=r+"-wrapper-topCenter":T=r+"-wrapper-center":T=r+"-wrapper-"+T,g.wrapper=document.querySelector("."+r+"-wrapper."+T),g.wrapper||(g.wrapper=document.createElement("div"),g.wrapper.classList.add(r+"-wrapper"),g.wrapper.classList.add(T),document.body.appendChild(g.wrapper)),p.position=="topLeft"||p.position=="topCenter"||p.position=="topRight"?g.wrapper.insertBefore(g.toastCapsule,g.wrapper.firstChild):g.wrapper.appendChild(g.toastCapsule)}isNaN(p.zindex)?console.warn("["+r+"] Invalid zIndex."):g.wrapper.style.zIndex=p.zindex}(),function(){p.overlay&&(document.querySelector("."+r+"-overlay.fadeIn")!==null?(g.overlay=document.querySelector("."+r+"-overlay"),g.overlay.setAttribute("data-iziToast-ref",g.overlay.getAttribute("data-iziToast-ref")+","+p.ref),!isNaN(p.zindex)&&p.zindex!==null&&(g.overlay.style.zIndex=p.zindex-1)):(g.overlay.classList.add(r+"-overlay"),g.overlay.classList.add("fadeIn"),g.overlay.style.background=p.overlayColor,g.overlay.setAttribute("data-iziToast-ref",p.ref),!isNaN(p.zindex)&&p.zindex!==null&&(g.overlay.style.zIndex=p.zindex-1),document.querySelector("body").appendChild(g.overlay)),p.overlayClose?(g.overlay.removeEventListener("click",{}),g.overlay.addEventListener("click",function(T){S.hide(p,g.toast,"overlay")})):g.overlay.removeEventListener("click",{}))}(),function(){if(p.animateInside){g.toast.classList.add(r+"-animateInside");var T=[200,100,300];(p.transitionIn=="bounceInLeft"||p.transitionIn=="bounceInRight")&&(T=[400,200,400]),p.title.length>0&&setTimeout(function(){g.strong.classList.add("slideIn")},T[0]),p.message.length>0&&setTimeout(function(){g.p.classList.add("slideIn")},T[1]),(p.icon||p.iconUrl)&&setTimeout(function(){g.icon.classList.add("revealIn")},T[2]);var O=150;p.buttons.length>0&&g.buttons&&setTimeout(function(){h(g.buttons.childNodes,function(L,D){setTimeout(function(){L.classList.add("revealIn")},O),O=O+150})},p.inputs.length>0?150:0),p.inputs.length>0&&g.inputs&&(O=150,h(g.inputs.childNodes,function(L,D){setTimeout(function(){L.classList.add("revealIn")},O),O=O+150}))}}(),p.onOpening.apply(null,[p,g.toast]);try{var A=new CustomEvent(r+"-opening",{detail:p,bubbles:!0,cancelable:!0});document.dispatchEvent(A)}catch(T){console.warn(T)}setTimeout(function(){g.toast.classList.remove(r+"-opening"),g.toast.classList.add(r+"-opened");try{var T=new CustomEvent(r+"-opened",{detail:p,bubbles:!0,cancelable:!0});document.dispatchEvent(T)}catch(O){console.warn(O)}p.onOpened.apply(null,[p,g.toast])},1e3),p.drag&&(l?(g.toast.addEventListener("touchstart",function(T){C.startMoving(this,S,p,T)},!1),g.toast.addEventListener("touchend",function(T){C.stopMoving(this,T)},!1)):(g.toast.addEventListener("mousedown",function(T){T.preventDefault(),C.startMoving(this,S,p,T)},!1),g.toast.addEventListener("mouseup",function(T){T.preventDefault(),C.stopMoving(this,T)},!1))),p.closeOnEscape&&document.addEventListener("keyup",function(T){T=T||window.event,T.keyCode==27&&S.hide(p,g.toast,"esc")}),p.closeOnClick&&g.toast.addEventListener("click",function(T){S.hide(p,g.toast,"toast")}),S.toast=g.toast},i})})(Hi);var No=Hi.exports;const Xu=Yr(No);function Do(n,e,t,i){return n.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Z(n.el,`.${i[r]}`)[0];s||(s=bt("div",i[r]),s.className=i[r],n.el.append(s)),t[r]=s,e[r]=s}}),t}function Ju(n){let{swiper:e,extendParams:t,on:i,emit:r}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(u){let h;return u&&typeof u=="string"&&e.isElement&&(h=e.el.querySelector(u),h)?h:(u&&(typeof u=="string"&&(h=[...document.querySelectorAll(u)]),e.params.uniqueNavElements&&typeof u=="string"&&h.length>1&&e.el.querySelectorAll(u).length===1&&(h=e.el.querySelector(u))),u&&!h?u:h)}function o(u,h){const y=e.params.navigation;u=oe(u),u.forEach(w=>{w&&(w.classList[h?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function a(){const{nextEl:u,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(u,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(u,e.isEnd&&!e.params.rewind)}function l(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function d(){const u=e.params.navigation;if(e.params.navigation=Do(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let h=s(u.nextEl),y=s(u.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=oe(h),y=oe(y);const w=(P,x)=>{P&&P.addEventListener("click",x==="next"?c:l),!e.enabled&&P&&P.classList.add(...u.lockClass.split(" "))};h.forEach(P=>w(P,"next")),y.forEach(P=>w(P,"prev"))}function f(){let{nextEl:u,prevEl:h}=e.navigation;u=oe(u),h=oe(h);const y=(w,P)=>{w.removeEventListener("click",P==="next"?c:l),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};u.forEach(w=>y(w,"next")),h.forEach(w=>y(w,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?m():(d(),a())}),i("toEdge fromEdge lock unlock",()=>{a()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:u,prevEl:h}=e.navigation;if(u=oe(u),h=oe(h),e.enabled){a();return}[...u,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),i("click",(u,h)=>{let{nextEl:y,prevEl:w}=e.navigation;y=oe(y),w=oe(w);const P=h.target;if(e.params.navigation.hideOnClick&&!w.includes(P)&&!y.includes(P)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===P||e.pagination.el.contains(P)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),r(x===!0?"navigationShow":"navigationHide"),[...y,...w].filter(E=>!!E).forEach(E=>E.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),a()},m=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:v,disable:m,update:a,init:d,destroy:f})}function Vi(n,e){return function(){return n.apply(e,arguments)}}const{toString:Bo}=Object.prototype,{getPrototypeOf:bn}=Object,Rt=(n=>e=>{const t=Bo.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),ie=n=>(n=n.toLowerCase(),e=>Rt(e)===n),Lt=n=>e=>typeof e===n,{isArray:Fe}=Array,We=Lt("undefined");function Uo(n){return n!==null&&!We(n)&&n.constructor!==null&&!We(n.constructor)&&X(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const ji=ie("ArrayBuffer");function Fo(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&ji(n.buffer),e}const zo=Lt("string"),X=Lt("function"),$i=Lt("number"),Mt=n=>n!==null&&typeof n=="object",Ho=n=>n===!0||n===!1,dt=n=>{if(Rt(n)!=="object")return!1;const e=bn(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Vo=ie("Date"),jo=ie("File"),$o=ie("Blob"),Wo=ie("FileList"),Go=n=>Mt(n)&&X(n.pipe),qo=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||X(n.append)&&((e=Rt(n))==="formdata"||e==="object"&&X(n.toString)&&n.toString()==="[object FormData]"))},Ko=ie("URLSearchParams"),Xo=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ye(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),Fe(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,n[a],a,n)}}function Wi(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const Gi=n=>!We(n)&&n!=={};function ln(){const{caseless:n}=Gi(this)&&this||{},e={},t=(i,r)=>{const s=n&&Wi(e,r)||r;dt(e[s])&&dt(i)?e[s]=ln(e[s],i):dt(i)?e[s]=ln({},i):Fe(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ye(arguments[i],t);return e}const Jo=(n,e,t,{allOwnKeys:i}={})=>(Ye(e,(r,s)=>{t&&X(r)?n[s]=Vi(r,t):n[s]=r},{allOwnKeys:i}),n),Yo=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Qo=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Zo=(n,e,t,i)=>{let r,s,o;const a={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&bn(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},ea=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},ta=n=>{if(!n)return null;if(Fe(n))return n;let e=n.length;if(!$i(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},na=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&bn(Uint8Array)),ia=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(n,s[0],s[1])}},ra=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},sa=ie("HTMLFormElement"),oa=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),qn=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),aa=ie("RegExp"),qi=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Ye(t,(r,s)=>{let o;(o=e(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},la=n=>{qi(n,(e,t)=>{if(X(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(X(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},ca=(n,e)=>{const t={},i=r=>{r.forEach(s=>{t[s]=!0})};return Fe(n)?i(n):i(String(n).split(e)),t},da=()=>{},ua=(n,e)=>(n=+n,Number.isFinite(n)?n:e),qt="abcdefghijklmnopqrstuvwxyz",Kn="0123456789",Ki={DIGIT:Kn,ALPHA:qt,ALPHA_DIGIT:qt+qt.toUpperCase()+Kn},fa=(n=16,e=Ki.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function ha(n){return!!(n&&X(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const pa=n=>{const e=new Array(10),t=(i,r)=>{if(Mt(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Fe(i)?[]:{};return Ye(i,(o,a)=>{const l=t(o,r+1);!We(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return t(n,0)},ma=ie("AsyncFunction"),ga=n=>n&&(Mt(n)||X(n))&&X(n.then)&&X(n.catch),_={isArray:Fe,isArrayBuffer:ji,isBuffer:Uo,isFormData:qo,isArrayBufferView:Fo,isString:zo,isNumber:$i,isBoolean:Ho,isObject:Mt,isPlainObject:dt,isUndefined:We,isDate:Vo,isFile:jo,isBlob:$o,isRegExp:aa,isFunction:X,isStream:Go,isURLSearchParams:Ko,isTypedArray:na,isFileList:Wo,forEach:Ye,merge:ln,extend:Jo,trim:Xo,stripBOM:Yo,inherits:Qo,toFlatObject:Zo,kindOf:Rt,kindOfTest:ie,endsWith:ea,toArray:ta,forEachEntry:ia,matchAll:ra,isHTMLForm:sa,hasOwnProperty:qn,hasOwnProp:qn,reduceDescriptors:qi,freezeMethods:la,toObjectSet:ca,toCamelCase:oa,noop:da,toFiniteNumber:ua,findKey:Wi,global:{},isContextDefined:Gi,ALPHABET:Ki,generateString:fa,isSpecCompliantForm:ha,toJSONObject:pa,isAsyncFn:ma,isThenable:ga};function U(n,e,t,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),r&&(this.response=r)}_.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xi=U.prototype,Ji={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Ji[n]={value:n}});Object.defineProperties(U,Ji);Object.defineProperty(Xi,"isAxiosError",{value:!0});U.from=(n,e,t,i,r,s)=>{const o=Object.create(Xi);return _.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),U.call(o,n.message,e,t,i,r),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const va=null;function cn(n){return _.isPlainObject(n)||_.isArray(n)}function Yi(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function Xn(n,e,t){return n?n.concat(e).map(function(r,s){return r=Yi(r),!t&&s?"["+r+"]":r}).join(t?".":""):e}function ya(n){return _.isArray(n)&&!n.some(cn)}const wa=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function kt(n,e,t){if(!_.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=_.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,y){return!_.isUndefined(y[h])});const i=t.metaTokens,r=t.visitor||d,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(r))throw new TypeError("visitor must be a function");function c(u){if(u===null)return"";if(_.isDate(u))return u.toISOString();if(!l&&_.isBlob(u))throw new U("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(u)||_.isTypedArray(u)?l&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function d(u,h,y){let w=u;if(u&&!y&&typeof u=="object"){if(_.endsWith(h,"{}"))h=i?h:h.slice(0,-2),u=JSON.stringify(u);else if(_.isArray(u)&&ya(u)||(_.isFileList(u)||_.endsWith(h,"[]"))&&(w=_.toArray(u)))return h=Yi(h),w.forEach(function(x,E){!(_.isUndefined(x)||x===null)&&e.append(o===!0?Xn([h],E,s):o===null?h:h+"[]",c(x))}),!1}return cn(u)?!0:(e.append(Xn(y,h,s),c(u)),!1)}const f=[],v=Object.assign(wa,{defaultVisitor:d,convertValue:c,isVisitable:cn});function m(u,h){if(!_.isUndefined(u)){if(f.indexOf(u)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(u),_.forEach(u,function(w,P){(!(_.isUndefined(w)||w===null)&&r.call(e,w,_.isString(P)?P.trim():P,h,v))===!0&&m(w,h?h.concat(P):[P])}),f.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return m(n),e}function Jn(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Tn(n,e){this._pairs=[],n&&kt(n,this,e)}const Qi=Tn.prototype;Qi.append=function(e,t){this._pairs.push([e,t])};Qi.toString=function(e){const t=e?function(i){return e.call(this,i,Jn)}:Jn;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function Ea(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zi(n,e,t){if(!e)return n;const i=t&&t.encode||Ea,r=t&&t.serialize;let s;if(r?s=r(e,t):s=_.isURLSearchParams(e)?e.toString():new Tn(e,t).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class ba{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Yn=ba,er={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ta=typeof URLSearchParams<"u"?URLSearchParams:Tn,Sa=typeof FormData<"u"?FormData:null,_a=typeof Blob<"u"?Blob:null,Ia={isBrowser:!0,classes:{URLSearchParams:Ta,FormData:Sa,Blob:_a},protocols:["http","https","file","blob","url","data"]},tr=typeof window<"u"&&typeof document<"u",Ca=(n=>tr&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Pa=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),xa=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:tr,hasStandardBrowserEnv:Ca,hasStandardBrowserWebWorkerEnv:Pa},Symbol.toStringTag,{value:"Module"})),ee={...xa,...Ia};function Oa(n,e){return kt(n,new ee.classes.URLSearchParams,Object.assign({visitor:function(t,i,r,s){return ee.isNode&&_.isBuffer(t)?(this.append(i,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Aa(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ra(n){const e={},t=Object.keys(n);let i;const r=t.length;let s;for(i=0;i<r;i++)s=t[i],e[s]=n[s];return e}function nr(n){function e(t,i,r,s){let o=t[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=t.length;return o=!o&&_.isArray(r)?r.length:o,l?(_.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!_.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],s)&&_.isArray(r[o])&&(r[o]=Ra(r[o])),!a)}if(_.isFormData(n)&&_.isFunction(n.entries)){const t={};return _.forEachEntry(n,(i,r)=>{e(Aa(i),r,t,0)}),t}return null}function La(n,e,t){if(_.isString(n))try{return(e||JSON.parse)(n),_.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Sn={transitional:er,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,s=_.isObject(e);if(s&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return r?JSON.stringify(nr(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Oa(e,this.formSerializer).toString();if((a=_.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return kt(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),La(e)):e}],transformResponse:[function(e){const t=this.transitional||Sn.transitional,i=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&_.isString(e)&&(i&&!this.responseType||r)){const o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?U.from(a,U.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee.classes.FormData,Blob:ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],n=>{Sn.headers[n]={}});const _n=Sn,Ma=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ka=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!t||e[t]&&Ma[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},Qn=Symbol("internals");function He(n){return n&&String(n).trim().toLowerCase()}function ut(n){return n===!1||n==null?n:_.isArray(n)?n.map(ut):String(n)}function Na(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Da=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Kt(n,e,t,i,r){if(_.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!_.isString(e)){if(_.isString(i))return e.indexOf(i)!==-1;if(_.isRegExp(i))return i.test(e)}}function Ba(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Ua(n,e){const t=_.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Nt{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function s(a,l,c){const d=He(l);if(!d)throw new Error("header name must be a non-empty string");const f=_.findKey(r,d);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=ut(a))}const o=(a,l)=>_.forEach(a,(c,d)=>s(c,d,l));return _.isPlainObject(e)||e instanceof this.constructor?o(e,t):_.isString(e)&&(e=e.trim())&&!Da(e)?o(ka(e),t):e!=null&&s(t,e,i),this}get(e,t){if(e=He(e),e){const i=_.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Na(r);if(_.isFunction(t))return t.call(this,r,i);if(_.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=He(e),e){const i=_.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||Kt(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function s(o){if(o=He(o),o){const a=_.findKey(i,o);a&&(!t||Kt(i,i[a],a,t))&&(delete i[a],r=!0)}}return _.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const s=t[i];(!e||Kt(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const t=this,i={};return _.forEach(this,(r,s)=>{const o=_.findKey(i,s);if(o){t[o]=ut(r),delete t[s];return}const a=e?Ba(s):String(s).trim();a!==s&&delete t[s],t[a]=ut(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return _.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&_.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Qn]=this[Qn]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=He(o);i[a]||(Ua(r,o),i[a]=!0)}return _.isArray(e)?e.forEach(s):s(e),this}}Nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Nt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});_.freezeMethods(Nt);const ce=Nt;function Xt(n,e){const t=this||_n,i=e||t,r=ce.from(i.headers);let s=i.data;return _.forEach(n,function(a){s=a.call(t,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function ir(n){return!!(n&&n.__CANCEL__)}function Qe(n,e,t){U.call(this,n??"canceled",U.ERR_CANCELED,e,t),this.name="CanceledError"}_.inherits(Qe,U,{__CANCEL__:!0});function Fa(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new U("Request failed with status code "+t.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const za=ee.hasStandardBrowserEnv?{write(n,e,t,i,r,s){const o=[n+"="+encodeURIComponent(e)];_.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),_.isString(i)&&o.push("path="+i),_.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ha(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function Va(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function rr(n,e){return n&&!Ha(e)?Va(n,e):e}const ja=ee.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function r(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=r(window.location.href),function(o){const a=_.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function $a(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function Wa(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=i[s];o||(o=c),t[r]=l,i[r]=c;let f=s,v=0;for(;f!==r;)v+=t[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<e)return;const m=d&&c-d;return m?Math.round(v*1e3/m):void 0}}function Zn(n,e){let t=0;const i=Wa(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-t,l=i(a),c=s<=o;t=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:r};d[e?"download":"upload"]=!0,n(d)}}const Ga=typeof XMLHttpRequest<"u",qa=Ga&&function(n){return new Promise(function(t,i){let r=n.data;const s=ce.from(n.headers).normalize();let{responseType:o,withXSRFToken:a}=n,l;function c(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let d;if(_.isFormData(r)){if(ee.hasStandardBrowserEnv||ee.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[h,...y]=d?d.split(";").map(w=>w.trim()).filter(Boolean):[];s.setContentType([h||"multipart/form-data",...y].join("; "))}}let f=new XMLHttpRequest;if(n.auth){const h=n.auth.username||"",y=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";s.set("Authorization","Basic "+btoa(h+":"+y))}const v=rr(n.baseURL,n.url);f.open(n.method.toUpperCase(),Zi(v,n.params,n.paramsSerializer),!0),f.timeout=n.timeout;function m(){if(!f)return;const h=ce.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:h,config:n,request:f};Fa(function(x){t(x),c()},function(x){i(x),c()},w),f=null}if("onloadend"in f?f.onloadend=m:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(m)},f.onabort=function(){f&&(i(new U("Request aborted",U.ECONNABORTED,n,f)),f=null)},f.onerror=function(){i(new U("Network Error",U.ERR_NETWORK,n,f)),f=null},f.ontimeout=function(){let y=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const w=n.transitional||er;n.timeoutErrorMessage&&(y=n.timeoutErrorMessage),i(new U(y,w.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,n,f)),f=null},ee.hasStandardBrowserEnv&&(a&&_.isFunction(a)&&(a=a(n)),a||a!==!1&&ja(v))){const h=n.xsrfHeaderName&&n.xsrfCookieName&&za.read(n.xsrfCookieName);h&&s.set(n.xsrfHeaderName,h)}r===void 0&&s.setContentType(null),"setRequestHeader"in f&&_.forEach(s.toJSON(),function(y,w){f.setRequestHeader(w,y)}),_.isUndefined(n.withCredentials)||(f.withCredentials=!!n.withCredentials),o&&o!=="json"&&(f.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&f.addEventListener("progress",Zn(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Zn(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=h=>{f&&(i(!h||h.type?new Qe(null,n,f):h),f.abort(),f=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const u=$a(v);if(u&&ee.protocols.indexOf(u)===-1){i(new U("Unsupported protocol "+u+":",U.ERR_BAD_REQUEST,n));return}f.send(r||null)})},dn={http:va,xhr:qa};_.forEach(dn,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const ei=n=>`- ${n}`,Ka=n=>_.isFunction(n)||n===null||n===!1,sr={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:e}=n;let t,i;const r={};for(let s=0;s<e;s++){t=n[s];let o;if(i=t,!Ka(t)&&(i=dn[(o=String(t)).toLowerCase()],i===void 0))throw new U(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(ei).join(`
`):" "+ei(s[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:dn};function Jt(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Qe(null,n)}function ti(n){return Jt(n),n.headers=ce.from(n.headers),n.data=Xt.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),sr.getAdapter(n.adapter||_n.adapter)(n).then(function(i){return Jt(n),i.data=Xt.call(n,n.transformResponse,i),i.headers=ce.from(i.headers),i},function(i){return ir(i)||(Jt(n),i&&i.response&&(i.response.data=Xt.call(n,n.transformResponse,i.response),i.response.headers=ce.from(i.response.headers))),Promise.reject(i)})}const ni=n=>n instanceof ce?n.toJSON():n;function Ne(n,e){e=e||{};const t={};function i(c,d,f){return _.isPlainObject(c)&&_.isPlainObject(d)?_.merge.call({caseless:f},c,d):_.isPlainObject(d)?_.merge({},d):_.isArray(d)?d.slice():d}function r(c,d,f){if(_.isUndefined(d)){if(!_.isUndefined(c))return i(void 0,c,f)}else return i(c,d,f)}function s(c,d){if(!_.isUndefined(d))return i(void 0,d)}function o(c,d){if(_.isUndefined(d)){if(!_.isUndefined(c))return i(void 0,c)}else return i(void 0,d)}function a(c,d,f){if(f in e)return i(c,d);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>r(ni(c),ni(d),!0)};return _.forEach(Object.keys(Object.assign({},n,e)),function(d){const f=l[d]||r,v=f(n[d],e[d],d);_.isUndefined(v)&&f!==a||(t[d]=v)}),t}const or="1.6.7",In={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{In[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const ii={};In.transitional=function(e,t,i){function r(s,o){return"[Axios v"+or+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new U(r(o," has been removed"+(t?" in "+t:"")),U.ERR_DEPRECATED);return t&&!ii[o]&&(ii[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Xa(n,e,t){if(typeof n!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new U("option "+s+" must be "+l,U.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new U("Unknown option "+s,U.ERR_BAD_OPTION)}}const un={assertOptions:Xa,validators:In},fe=un.validators;class Tt{constructor(e){this.defaults=e,this.interceptors={request:new Yn,response:new Yn}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ne(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:s}=t;i!==void 0&&un.assertOptions(i,{silentJSONParsing:fe.transitional(fe.boolean),forcedJSONParsing:fe.transitional(fe.boolean),clarifyTimeoutError:fe.transitional(fe.boolean)},!1),r!=null&&(_.isFunction(r)?t.paramsSerializer={serialize:r}:un.assertOptions(r,{encode:fe.function,serialize:fe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&_.merge(s.common,s[t.method]);s&&_.forEach(["delete","get","head","post","put","patch","common"],u=>{delete s[u]}),t.headers=ce.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(l=l&&h.synchronous,a.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let d,f=0,v;if(!l){const u=[ti.bind(this),void 0];for(u.unshift.apply(u,a),u.push.apply(u,c),v=u.length,d=Promise.resolve(t);f<v;)d=d.then(u[f++],u[f++]);return d}v=a.length;let m=t;for(f=0;f<v;){const u=a[f++],h=a[f++];try{m=u(m)}catch(y){h.call(this,y);break}}try{d=ti.call(this,m)}catch(u){return Promise.reject(u)}for(f=0,v=c.length;f<v;)d=d.then(c[f++],c[f++]);return d}getUri(e){e=Ne(this.defaults,e);const t=rr(e.baseURL,e.url);return Zi(t,e.params,e.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(e){Tt.prototype[e]=function(t,i){return this.request(Ne(i||{},{method:e,url:t,data:(i||{}).data}))}});_.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,a){return this.request(Ne(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Tt.prototype[e]=t(),Tt.prototype[e+"Form"]=t(!0)});const ft=Tt;class Cn{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Qe(s,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new Cn(function(r){e=r}),cancel:e}}}const Ja=Cn;function Ya(n){return function(t){return n.apply(null,t)}}function Qa(n){return _.isObject(n)&&n.isAxiosError===!0}const fn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fn).forEach(([n,e])=>{fn[e]=n});const Za=fn;function ar(n){const e=new ft(n),t=Vi(ft.prototype.request,e);return _.extend(t,ft.prototype,e,{allOwnKeys:!0}),_.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return ar(Ne(n,r))},t}const j=ar(_n);j.Axios=ft;j.CanceledError=Qe;j.CancelToken=Ja;j.isCancel=ir;j.VERSION=or;j.toFormData=kt;j.AxiosError=U;j.Cancel=j.CanceledError;j.all=function(e){return Promise.all(e)};j.spread=Ya;j.isAxiosError=Qa;j.mergeConfig=Ne;j.AxiosHeaders=ce;j.formToJSON=n=>nr(_.isHTMLForm(n)?new FormData(n):n);j.getAdapter=sr.getAdapter;j.HttpStatusCode=Za;j.default=j;const Yu=j;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},el=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let v=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(v=64)),i.push(t[d],t[f],t[v],t[m])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):el(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||c==null||f==null)throw new tl;const v=s<<2|a>>4;if(i.push(v),c!==64){const m=a<<4&240|c>>2;if(i.push(m),f!==64){const u=c<<6&192|f;i.push(u)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(n){const e=lr(n);return cr.encodeByteArray(e,!0)},dr=function(n){return nl(n).replace(/\./g,"")},ur=function(n){try{return cr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=()=>il().__FIREBASE_DEFAULTS__,sl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ol=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ur(n[1]);return e&&JSON.parse(e)},Pn=()=>{try{return rl()||sl()||ol()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var e,t;return(t=(e=Pn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fr=()=>{var n;return(n=Pn())===null||n===void 0?void 0:n.config},hr=n=>{var e;return(e=Pn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function dl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ul(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fl(){const n=$();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hl(){try{return typeof indexedDB=="object"}catch{return!1}}function pl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="FirebaseError";class be extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=ml,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?gl(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new be(r,a,i)}}function gl(n,e){return n.replace(vl,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const vl=/\{\$([^}]+)}/g;function yl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function St(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(ri(s)&&ri(o)){if(!St(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ri(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ve(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function je(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wl(n,e){const t=new El(n,e);return t.subscribe.bind(t)}class El{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bl(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Yt),r.error===void 0&&(r.error=Yt),r.complete===void 0&&(r.complete=Yt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bl(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class De{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ll;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_l(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sl(n){return n===Se?void 0:n}function _l(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Cl={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Pl=H.INFO,xl={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Ol=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=xl[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pr{constructor(e){this.name=e,this._logLevel=Pl,this._logHandler=Ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Al=(n,e)=>e.some(t=>n instanceof t);let si,oi;function Rl(){return si||(si=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ll(){return oi||(oi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mr=new WeakMap,hn=new WeakMap,gr=new WeakMap,Qt=new WeakMap,xn=new WeakMap;function Ml(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(we(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&mr.set(t,n)}).catch(()=>{}),xn.set(e,n),e}function kl(n){if(hn.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});hn.set(n,e)}let pn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return we(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nl(n){pn=n(pn)}function Dl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Zt(this),e,...t);return gr.set(i,e.sort?e.sort():[e]),we(i)}:Ll().includes(n)?function(...e){return n.apply(Zt(this),e),we(mr.get(this))}:function(...e){return we(n.apply(Zt(this),e))}}function Bl(n){return typeof n=="function"?Dl(n):(n instanceof IDBTransaction&&kl(n),Al(n,Rl())?new Proxy(n,pn):n)}function we(n){if(n instanceof IDBRequest)return Ml(n);if(Qt.has(n))return Qt.get(n);const e=Bl(n);return e!==n&&(Qt.set(n,e),xn.set(e,n)),e}const Zt=n=>xn.get(n);function Ul(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=we(o);return i&&o.addEventListener("upgradeneeded",l=>{i(we(o.result),l.oldVersion,l.newVersion,we(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Fl=["get","getKey","getAll","getAllKeys","count"],zl=["put","add","delete","clear"],en=new Map;function ai(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(en.get(e))return en.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=zl.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Fl.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),r&&l.done]))[0]};return en.set(e,s),s}Nl(n=>({...n,get:(e,t,i)=>ai(e,t)||n.get(e,t,i),has:(e,t)=>!!ai(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vl(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Vl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mn="@firebase/app",li="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new pr("@firebase/app"),jl="@firebase/app-compat",$l="@firebase/analytics-compat",Wl="@firebase/analytics",Gl="@firebase/app-check-compat",ql="@firebase/app-check",Kl="@firebase/auth",Xl="@firebase/auth-compat",Jl="@firebase/database",Yl="@firebase/database-compat",Ql="@firebase/functions",Zl="@firebase/functions-compat",ec="@firebase/installations",tc="@firebase/installations-compat",nc="@firebase/messaging",ic="@firebase/messaging-compat",rc="@firebase/performance",sc="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",lc="@firebase/storage",cc="@firebase/storage-compat",dc="@firebase/firestore",uc="@firebase/firestore-compat",fc="firebase",hc="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]",pc={[mn]:"fire-core",[jl]:"fire-core-compat",[Wl]:"fire-analytics",[$l]:"fire-analytics-compat",[ql]:"fire-app-check",[Gl]:"fire-app-check-compat",[Kl]:"fire-auth",[Xl]:"fire-auth-compat",[Jl]:"fire-rtdb",[Yl]:"fire-rtdb-compat",[Ql]:"fire-fn",[Zl]:"fire-fn-compat",[ec]:"fire-iid",[tc]:"fire-iid-compat",[nc]:"fire-fcm",[ic]:"fire-fcm-compat",[rc]:"fire-perf",[sc]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[lc]:"fire-gcs",[cc]:"fire-gcs-compat",[dc]:"fire-fst",[uc]:"fire-fst-compat","fire-js":"fire-js",[fc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Map,vn=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){Ie.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ge(n){const e=n.name;if(vn.has(e))return Ie.debug(`There were multiple attempts to register component ${e}.`),!1;vn.set(e,n);for(const t of _t.values())mc(t,n);return!0}function vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new Ze("app","Firebase",gc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=hc;function yc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:gn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ee.create("bad-app-name",{appName:String(r)});if(t||(t=fr()),!t)throw Ee.create("no-options");const s=_t.get(r);if(s){if(St(t,s.options)&&St(i,s.config))return s;throw Ee.create("duplicate-app",{appName:r})}const o=new Il(r);for(const l of vn.values())o.addComponent(l);const a=new vc(t,i,o);return _t.set(r,a),a}function wc(n=gn){const e=_t.get(n);if(!e&&n===gn&&fr())return yc();if(!e)throw Ee.create("no-app",{appName:n});return e}function Ae(n,e,t){var i;let r=(i=pc[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ie.warn(a.join(" "));return}Ge(new De(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="firebase-heartbeat-database",bc=1,qe="firebase-heartbeat-store";let tn=null;function yr(){return tn||(tn=Ul(Ec,bc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qe)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),tn}async function Tc(n){try{const t=(await yr()).transaction(qe),i=await t.objectStore(qe).get(wr(n));return await t.done,i}catch(e){if(e instanceof be)Ie.warn(e.message);else{const t=Ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ie.warn(t.message)}}}async function ci(n,e){try{const i=(await yr()).transaction(qe,"readwrite");await i.objectStore(qe).put(e,wr(n)),await i.done}catch(t){if(t instanceof be)Ie.warn(t.message);else{const i=Ee.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(i.message)}}}function wr(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=1024,_c=30*24*60*60*1e3;class Ic{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pc(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=di();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_c}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=di(),{heartbeatsToSend:i,unsentEntries:r}=Cc(this._heartbeatsCache.heartbeats),s=dr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function di(){return new Date().toISOString().substring(0,10)}function Cc(n,e=Sc){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ui(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ui(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Pc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hl()?pl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ui(n){return dr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n){Ge(new De("platform-logger",e=>new Hl(e),"PRIVATE")),Ge(new De("heartbeat",e=>new Ic(e),"PRIVATE")),Ae(mn,li,n),Ae(mn,li,"esm2017"),Ae("fire-js","")}xc("");var Oc="firebase",Ac="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ae(Oc,Ac,"app");function On(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rc=Er,br=new Ze("auth","Firebase",Er());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new pr("@firebase/auth");function Lc(n,...e){It.logLevel<=H.WARN&&It.warn(`Auth (${tt}): ${n}`,...e)}function ht(n,...e){It.logLevel<=H.ERROR&&It.error(`Auth (${tt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,...e){throw An(n,...e)}function te(n,...e){return An(n,...e)}function Mc(n,e,t){const i=Object.assign(Object.assign({},Rc()),{[e]:t});return new Ze("auth","Firebase",i).create(e,{appName:n.name})}function An(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return br.create(n,...e)}function M(n,e,...t){if(!n)throw An(e,...t)}function ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ht(e),new Error(e)}function de(n,e){n||ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function kc(){return fi()==="http:"||fi()==="https:"}function fi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kc()||dl()||"connection"in navigator)?navigator.onLine:!0}function Dc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.shortDelay=e,this.longDelay=t,de(t>e,"Short delay should be less than long delay!"),this.isMobile=cl()||ul()}get(){return Nc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n,e){de(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc=new nt(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function se(n,e,t,i,r={}){return Sr(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=et(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Tr.fetch()(_r(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Sr(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bc),e);try{const r=new zc(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw lt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lt(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw lt(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw lt(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mc(n,d,c);Q(n,d)}}catch(r){if(r instanceof be)throw r;Q(n,"network-request-failed",{message:String(r)})}}async function it(n,e,t,i,r={}){const s=await se(n,e,t,i,r);return"mfaPendingCredential"in s&&Q(n,"multi-factor-auth-required",{_serverResponse:s}),s}function _r(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?Rn(n.config,r):`${n.config.apiScheme}://${r}`}function Fc(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(te(this.auth,"network-request-failed")),Uc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lt(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=te(n,e,i);return r.customData._tokenResponse=t,r}function hi(n){return n!==void 0&&n.enterprise!==void 0}class Hc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Fc(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Vc(n,e){return se(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jc(n,e){return se(n,"POST","/v1/accounts:delete",e)}async function $c(n,e){return se(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wc(n,e=!1){const t=re(n),i=await t.getIdToken(e),r=Ln(i);M(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:$e(nn(r.auth_time)),issuedAtTime:$e(nn(r.iat)),expirationTime:$e(nn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nn(n){return Number(n)*1e3}function Ln(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ht("JWT malformed, contained fewer than 3 sections"),null;try{const r=ur(t);return r?JSON.parse(r):(ht("Failed to decode base64 JWT payload"),null)}catch(r){return ht("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gc(n){const e=Ln(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof be&&qc(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function qc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$e(this.lastLoginAt),this.creationTime=$e(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(n){var e;const t=n.auth,i=await n.getIdToken(),r=await Be(n,$c(t,{idToken:i}));M(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yc(s.providerUserInfo):[],a=Jc(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ir(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Xc(n){const e=re(n);await Ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jc(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Yc(n){return n.map(e=>{var{providerId:t}=e,i=On(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(n,e){const t=await Sr(n,{},async()=>{const i=et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=_r(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tr.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zc(n,e){return se(n,"POST","/v2/accounts:revokeToken",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Qc(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new Ke;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(M(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class _e{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=On(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ir(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Be(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wc(this,e)}reload(){return Xc(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _e(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ct(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Be(this,jc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,l,c,d;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,v=(r=t.email)!==null&&r!==void 0?r:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,u=(o=t.photoURL)!==null&&o!==void 0?o:void 0,h=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=t.createdAt)!==null&&c!==void 0?c:void 0,P=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:x,emailVerified:E,isAnonymous:C,providerData:b,stsTokenManager:S}=t;M(x&&S,e,"internal-error");const p=Ke.fromJSON(this.name,S);M(typeof x=="string",e,"internal-error"),he(f,e.name),he(v,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof C=="boolean",e,"internal-error"),he(m,e.name),he(u,e.name),he(h,e.name),he(y,e.name),he(w,e.name),he(P,e.name);const g=new _e({uid:x,auth:e,email:v,emailVerified:E,displayName:f,isAnonymous:C,photoURL:u,phoneNumber:m,tenantId:h,stsTokenManager:p,createdAt:w,lastLoginAt:P});return b&&Array.isArray(b)&&(g.providerData=b.map(I=>Object.assign({},I))),y&&(g._redirectEventId=y),g}static async _fromIdTokenResponse(e,t,i=!1){const r=new Ke;r.updateFromServerResponse(t);const s=new _e({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ct(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map;function le(n){de(n instanceof Function,"Expected a class definition");let e=pi.get(n);return e?(de(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pi.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cr.type="NONE";const mi=Cr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e,t){return`firebase:${n}:${e}:${t}`}class Re{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=pt(this.userKey,r.apiKey,s),this.fullPersistenceKey=pt("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_e._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Re(le(mi),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||le(mi);const o=pt(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const f=_e._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Re(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Re(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Or(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rr(e))return"Blackberry";if(Lr(e))return"Webos";if(Mn(e))return"Safari";if((e.includes("chrome/")||xr(e))&&!e.includes("edge/"))return"Chrome";if(Ar(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pr(n=$()){return/firefox\//i.test(n)}function Mn(n=$()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xr(n=$()){return/crios\//i.test(n)}function Or(n=$()){return/iemobile/i.test(n)}function Ar(n=$()){return/android/i.test(n)}function Rr(n=$()){return/blackberry/i.test(n)}function Lr(n=$()){return/webos/i.test(n)}function Dt(n=$()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ed(n=$()){var e;return Dt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function td(){return fl()&&document.documentMode===10}function Mr(n=$()){return Dt(n)||Ar(n)||Lr(n)||Rr(n)||/windows phone/i.test(n)||Or(n)}function nd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n,e=[]){let t;switch(n){case"Browser":t=gi($());break;case"Worker":t=`${gi($())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${tt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rd(n,e={}){return se(n,"GET","/v2/passwordPolicy",ue(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=6;class od{constructor(e){var t,i,r,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:sd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vi(this),this.idTokenSubscription=new vi(this),this.beforeStateQueue=new id(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=br,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=le(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Re.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ct(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?re(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rd(this),t=new od(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zc(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&le(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Re.create(this,[le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Lc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Te(n){return re(n)}class vi{constructor(e){this.auth=e,this.observer=null,this.addObserver=wl(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ld(n){Bt=n}function Nr(n){return Bt.loadJS(n)}function cd(){return Bt.recaptchaEnterpriseScript}function dd(){return Bt.gapiScript}function ud(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fd="recaptcha-enterprise",hd="NO_RECAPTCHA";class pd{constructor(e){this.type=fd,this.auth=Te(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Vc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Hc(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;hi(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(hd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&hi(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cd();l.length!==0&&(l+=a),Nr(l).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yi(n,e,t,i=!1){const r=new pd(n);let s;try{s=await r.verify(t)}catch{s=await r.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Pt(n,e,t,i){var r;if(!((r=n._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yi(n,e,t,t==="getOobCode");return i(n,s)}else return i(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yi(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,e){const t=vr(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(St(s,e??{}))return r;Q(r,"already-initialized")}return t.initialize({options:e})}function gd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(le);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function vd(n,e,t){const i=Te(n);M(i._canInitEmulator,i,"emulator-config-failed"),M(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=Dr(e),{host:o,port:a}=yd(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||wd()}function Dr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yd(n){const e=Dr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:wi(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:wi(o)}}}function wi(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ae("not implemented")}_getIdTokenResponse(e){return ae("not implemented")}_linkToIdToken(e,t){return ae("not implemented")}_getReauthenticationResolver(e){return ae("not implemented")}}async function Ed(n,e){return se(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(n,e){return it(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}async function Td(n,e){return se(n,"POST","/v1/accounts:sendOobCode",ue(n,e))}async function Sd(n,e){return Td(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _d(n,e){return it(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function Id(n,e){return it(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends kn{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xe(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pt(e,t,"signInWithPassword",bd);case"emailLink":return _d(e,{email:this._email,oobCode:this._password});default:Q(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pt(e,i,"signUpPassword",Ed);case"emailLink":return Id(e,{idToken:t,email:this._email,oobCode:this._password});default:Q(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(n,e){return it(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="http://localhost";class Ce extends kn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Q("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=On(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ce(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Le(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Cd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xd(n){const e=Ve(je(n)).link,t=e?Ve(je(e)).deep_link_id:null,i=Ve(je(n)).deep_link_id;return(i?Ve(je(i)).link:null)||i||t||e||n}class Nn{constructor(e){var t,i,r,s,o,a;const l=Ve(je(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,f=Pd((r=l.mode)!==null&&r!==void 0?r:null);M(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=xd(e);try{return new Nn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Nn.parseLink(t);return M(i,"argument-error"),Xe._fromEmailAndCode(e,i.code,i.tenantId)}}ze.PROVIDER_ID="password";ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends rt{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";pe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ce._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return me.credential(t,i)}catch{return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com";me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends rt{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ge.credential(e.oauthAccessToken)}catch{return null}}}ge.GITHUB_SIGN_IN_METHOD="github.com";ge.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends rt{constructor(){super("twitter.com")}static credential(e,t){return Ce._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ve.credential(t,i)}catch{return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com";ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(n,e){return it(n,"POST","/v1/accounts:signUp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await _e._fromIdTokenResponse(e,i,r),o=Ei(i);return new Pe({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Ei(i);return new Pe({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Ei(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends be{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new xt(e,t,i,r)}}function Ur(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xt._fromErrorAndOperation(n,s,e,i):s})}async function Ad(n,e,t=!1){const i=await Be(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Pe._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rd(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await Be(n,Ur(i,r,e,n),t);M(s.idToken,i,"internal-error");const o=Ln(s.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(n.uid===a,i,"user-mismatch"),Pe._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Q(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e,t=!1){const i="signIn",r=await Ur(n,i,e),s=await Pe._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Ld(n,e){return Fr(Te(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e,t){var i;M(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(n){const e=Te(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qu(n,e,t){const i=Te(n),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Md(i,r,t),await Pt(i,r,"getOobCode",Sd)}async function Zu(n,e,t){const i=Te(n),o=await Pt(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Od).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zr(n),l}),a=await Pe._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function ef(n,e,t){return Ld(re(n),ze.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zr(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(n,e){return se(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=re(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Be(i,kd(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Nd(n,e,t,i){return re(n).onIdTokenChanged(e,t,i)}function Dd(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function nf(n,e,t,i){return re(n).onAuthStateChanged(e,t,i)}function rf(n){return re(n).signOut()}const Ot="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ot,"1"),this.storage.removeItem(Ot),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){const n=$();return Mn(n)||Dt(n)}const Ud=1e3,Fd=10;class Vr extends Hr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bd()&&nd(),this.fallbackToPolling=Mr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);td()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fd):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ud)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vr.type="LOCAL";const zd=Vr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Hr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jr.type="SESSION";const $r=jr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new Ut(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Hd(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ut.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Dn("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const v=f;if(v.data.eventId===c)switch(v.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(v.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return window}function jd(n){ne().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(){return typeof ne().WorkerGlobalScope<"u"&&typeof ne().importScripts=="function"}async function $d(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wd(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gd(){return Wr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="firebaseLocalStorageDb",qd=1,At="firebaseLocalStorage",qr="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(n,e){return n.transaction([At],e?"readwrite":"readonly").objectStore(At)}function Kd(){const n=indexedDB.deleteDatabase(Gr);return new st(n).toPromise()}function wn(){const n=indexedDB.open(Gr,qd);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(At,{keyPath:qr})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(At)?e(i):(i.close(),await Kd(),e(await wn()))})})}async function bi(n,e,t){const i=Ft(n,!0).put({[qr]:e,value:t});return new st(i).toPromise()}async function Xd(n,e){const t=Ft(n,!1).get(e),i=await new st(t).toPromise();return i===void 0?null:i.value}function Ti(n,e){const t=Ft(n,!0).delete(e);return new st(t).toPromise()}const Jd=800,Yd=3;class Kr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Yd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ut._getInstance(Gd()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $d(),!this.activeServiceWorker)return;this.sender=new Vd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await bi(e,Ot,"1"),await Ti(e,Ot),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>bi(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Xd(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ti(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Ft(r,!1).getAll();return new st(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kr.type="LOCAL";const Qd=Kr;new nt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,e){return e?le(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends kn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eu(n){return Fr(n.auth,new Bn(n),n.bypassAuthState)}function tu(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Rd(t,new Bn(n),n.bypassAuthState)}async function nu(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Ad(t,new Bn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eu;case"linkViaPopup":case"linkViaRedirect":return nu;case"reauthViaPopup":case"reauthViaRedirect":return tu;default:Q(this.auth,"internal-error")}}resolve(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){de(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new nt(2e3,1e4);class Oe extends Xr{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Oe.currentPopupAction&&Oe.currentPopupAction.cancel(),Oe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){de(this.filter.length===1,"Popup operations only handle one event");const e=Dn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iu.get())};e()}}Oe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="pendingRedirect",mt=new Map;class su extends Xr{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=mt.get(this.auth._key());if(!e){try{const i=await ou(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}mt.set(this.auth._key(),e)}return this.bypassAuthState||mt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ou(n,e){const t=cu(e),i=lu(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function au(n,e){mt.set(n._key(),e)}function lu(n){return le(n._redirectPersistence)}function cu(n){return pt(ru,n.config.apiKey,n.name)}async function du(n,e,t=!1){const i=Te(n),r=Zd(i,e),o=await new su(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=10*60*1e3;class fu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Jr(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(te(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(e))}saveEventToCache(e){this.cachedEventUids.add(Si(e)),this.lastProcessedEventTime=Date.now()}}function Si(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(n,e={}){return se(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gu=/^https?/;async function vu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pu(n);for(const t of e)try{if(yu(t))return}catch{}Q(n,"unauthorized-domain")}function yu(n){const e=yn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!gu.test(t))return!1;if(mu.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new nt(3e4,6e4);function _i(){const n=ne().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Eu(n){return new Promise((e,t)=>{var i,r,s;function o(){_i(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_i(),t(te(n,"network-request-failed"))},timeout:wu.get()})}if(!((r=(i=ne().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ne().gapi)===null||s===void 0)&&s.load)o();else{const a=ud("iframefcb");return ne()[a]=()=>{gapi.load?o():t(te(n,"network-request-failed"))},Nr(`${dd()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw gt=null,e})}let gt=null;function bu(n){return gt=gt||Eu(n),gt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new nt(5e3,15e3),Su="__/auth/iframe",_u="emulator/auth/iframe",Iu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pu(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rn(e,_u):`https://${n.config.authDomain}/${Su}`,i={apiKey:e.apiKey,appName:n.name,v:tt},r=Cu.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${et(i).slice(1)}`}async function xu(n){const e=await bu(n),t=ne().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Pu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iu,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=te(n,"network-request-failed"),a=ne().setTimeout(()=>{s(o)},Tu.get());function l(){ne().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Au=500,Ru=600,Lu="_blank",Mu="http://localhost";class Ii{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ku(n,e,t,i=Au,r=Ru){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ou),{width:i.toString(),height:r.toString(),top:s,left:o}),c=$().toLowerCase();t&&(a=xr(c)?Lu:t),Pr(c)&&(e=e||Mu,l.scrollbars="yes");const d=Object.entries(l).reduce((v,[m,u])=>`${v}${m}=${u},`,"");if(ed(c)&&a!=="_self")return Nu(e||"",a),new Ii(null);const f=window.open(e||"",a,d);M(f,n,"popup-blocked");try{f.focus()}catch{}return new Ii(f)}function Nu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="__/auth/handler",Bu="emulator/auth/handler",Uu=encodeURIComponent("fac");async function Ci(n,e,t,i,r,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:tt,eventId:r};if(e instanceof Br){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",yl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof rt){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${Uu}=${encodeURIComponent(l)}`:"";return`${Fu(n)}?${et(a).slice(1)}${c}`}function Fu({config:n}){return n.emulator?Rn(n,Bu):`https://${n.authDomain}/${Du}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="webStorageSupport";class zu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$r,this._completeRedirectFn=du,this._overrideRedirectResult=au}async _openPopup(e,t,i,r){var s;de((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ci(e,t,i,yn(),r);return ku(e,o,Dn())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Ci(e,t,i,yn(),r);return jd(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(de(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await xu(e),i=new fu(e);return t.register("authEvent",r=>(M(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rn,{type:rn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[rn];o!==void 0&&t(!!o),Q(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mr()||Mn()||Dt()}}const Hu=zu;var Pi="@firebase/auth",xi="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $u(n){Ge(new De("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kr(n)},c=new ad(i,r,s,l);return gd(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ge(new De("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(i=>new Vu(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Pi,xi,ju(n)),Ae(Pi,xi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=5*60,Gu=hr("authIdTokenMaxAge")||Wu;let Oi=null;const qu=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Gu)return;const r=t==null?void 0:t.token;Oi!==r&&(Oi=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sf(n=wc()){const e=vr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=md(n,{popupRedirectResolver:Hu,persistence:[Qd,zd,$r]}),i=hr("authTokenSyncURL");if(i){const s=qu(i);Dd(t,s,()=>s(t.currentUser)),Nd(t,o=>s(o))}const r=al("auth");return r&&vd(t,`http://${r}`),t}function Ku(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ld({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=te("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",Ku().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$u("Browser");export{Ju as N,Y as S,Yu as a,yc as b,ef as c,Zu as d,Qu as e,sf as g,Xu as i,nf as o,rf as s,tf as u};
//# sourceMappingURL=vendor-679899fb.js.map
