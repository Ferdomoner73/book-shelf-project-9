!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};console.log(5);var i={};function r(t,e,i,r,s,n,o){try{var l=t[n](o),a=l.value}catch(t){return void i(t)}l.done?e(a):Promise.resolve(a).then(r,s)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var o=t.apply(e,i);function l(t){r(o,s,n,l,a,"next",t)}function a(t){r(o,s,n,l,a,"throw",t)}l(void 0)}))}};var s={},n=function(t){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},n=s.iterator||"@@iterator",o=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function a(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,i){return t[e]=i}}function c(t,e,i,r){var s=e&&e.prototype instanceof m?e:m,n=Object.create(s.prototype),o=new M(r||[]);return n._invoke=function(t,e,i){var r=u;return function(s,n){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===s)throw n;return N()}for(i.method=s,i.arg=n;;){var o=i.delegate;if(o){var l=k(o,i);if(l){if(l===v)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===u)throw r=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=p;var a=h(t,e,i);if("normal"===a.type){if(r=i.done?f:d,a.arg===v)continue;return{value:a.arg,done:i.done}}"throw"===a.type&&(r=f,i.method="throw",i.arg=a.arg)}}}(t,i,o),n}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",v={};function m(){}function g(){}function b(){}var y={};a(y,n,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(W([])));E&&E!==i&&r.call(E,n)&&(y=E);var w=b.prototype=m.prototype=Object.create(y);function O(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(s,n,o,l){var a=h(t[s],t,n);if("throw"!==a.type){var c=a.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){i("next",t,o,l)}),(function(t){i("throw",t,o,l)})):e.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return i("throw",t,o,l)}))}l(a.arg)}var s;this._invoke=function(t,r){function n(){return new e((function(e,s){i(t,r,e,s)}))}return s=s?s.then(n,n):n()}}function k(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,k(t,i),"throw"===i.method))return v;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var s=h(r,t.iterator,i.arg);if("throw"===s.type)return i.method="throw",i.arg=s.arg,i.delegate=null,v;var n=s.arg;return n?n.done?(i[t.resultName]=n.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,v):n:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,v)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function W(t){if(t){var i=t[n];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var s=-1,o=function i(){for(;++s<t.length;)if(r.call(t,s))return i.value=t[s],i.done=!1,i;return i.value=e,i.done=!0,i};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=b,a(w,"constructor",b),a(b,"constructor",g),g.displayName=a(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,a(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(S.prototype),a(S.prototype,o,(function(){return this})),t.AsyncIterator=S,t.async=function(e,i,r,s,n){void 0===n&&(n=Promise);var o=new S(c(e,i,r,s),n);return t.isGeneratorFunction(i)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(w),a(w,l,"Generator"),a(w,n,(function(){return this})),a(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=W,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function s(r,s){return l.type="throw",l.arg=t,i.next=r,s&&(i.method="next",i.arg=e),!!s}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],l=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var a=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i];if(s.tryLoc<=this.prev&&r.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var n=s;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var o=n?n.completion:{};return o.type=t,o.arg=e,n?(this.method="next",this.next=n.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),L(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var s=r.arg;L(i)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:W(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(s);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}var o,l=!("undefined"==typeof window||!window.document||!window.document.createElement);o=l;var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var c=function(e){var i=void 0===e?"undefined":t(a)(e);return null!=e&&("object"==i||"function"==i)},h="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,d=h||u||Function("return this")(),p=function(){return d.Date.now()},f=/\s/;var v=function(t){for(var e=t.length;e--&&f.test(t.charAt(e)););return e},m=/^\s+/;var g=d.Symbol,b=Object.prototype,y=b.hasOwnProperty,x=b.toString,E=g?g.toStringTag:void 0;var w=function(t){var e=y.call(t,E),i=t[E];try{t[E]=void 0;var r=!0}catch(t){}var s=x.call(t);return r&&(e?t[E]=i:delete t[E]),s},O=Object.prototype.toString;var S=function(t){return O.call(t)},k=g?g.toStringTag:void 0;var A=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?w(t):S(t)};var L=function(t){return null!=t&&"object"==typeof t};var M=function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||L(e)&&"[object Symbol]"==A(e)},W=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,z=/^0o[0-7]+$/i,C=parseInt;var T=function(t){if("number"==typeof t)return t;if(M(t))return NaN;if(c(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=c(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var i;t=(i=t)?i.slice(0,v(i)+1).replace(m,""):i;var r=N.test(t);return r||z.test(t)?C(t.slice(2),r?2:8):W.test(t)?NaN:+t},_=Math.max,j=Math.min;var R=function(t,e,i){var r,s,n,o,l,a,h=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var i=r,n=s;return r=s=void 0,h=e,o=t.apply(n,i)}function m(t){return h=t,l=setTimeout(b,e),u?v(t):o}function g(t){var i=t-a;return void 0===a||i>=e||i<0||d&&t-h>=n}function b(){var t=p();if(g(t))return y(t);l=setTimeout(b,function(t){var i=e-(t-a);return d?j(i,n-(t-h)):i}(t))}function y(t){return l=void 0,f&&r?v(t):(r=s=void 0,o)}function x(){var t=p(),i=g(t);if(r=arguments,s=this,a=t,i){if(void 0===l)return m(a);if(d)return clearTimeout(l),l=setTimeout(b,e),v(a)}return void 0===l&&(l=setTimeout(b,e)),o}return e=T(e)||0,c(i)&&(u=!!i.leading,n=(d="maxWait"in i)?_(T(i.maxWait)||0,e):n,f="trailing"in i?!!i.trailing:f),x.cancel=function(){void 0!==l&&clearTimeout(l),h=0,r=a=s=l=void 0},x.flush=function(){return void 0===l?o:y(p())},x};var D=function(t,e,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return c(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),R(t,e,{leading:r,maxWait:e,trailing:s})},V=function(){return V=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var s in e=arguments[i])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},V.apply(this,arguments)},P=null,H=null;function q(){if(null===P){if("undefined"==typeof document)return P=0;var t=document.body,e=document.createElement("div");e.classList.add("simplebar-hide-scrollbar"),t.appendChild(e);var i=e.getBoundingClientRect().right;t.removeChild(e),P=i}return P}function F(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window}function Y(t){return t&&t.ownerDocument?t.ownerDocument:document}t(o)&&window.addEventListener("resize",(function(){H!==window.devicePixelRatio&&(H=window.devicePixelRatio,P=null)}));var B=function(t){return Array.prototype.reduce.call(t,(function(t,e){var i=e.name.match(/data-simplebar-(.+)/);if(i){var r=i[1].replace(/\W+(.)/g,(function(t,e){return e.toUpperCase()}));switch(e.value){case"true":t[r]=!0;break;case"false":t[r]=!1;break;case void 0:t[r]=!0;break;default:t[r]=e.value}}return t}),{})};function X(t,e){var i;t&&(i=t.classList).add.apply(i,e.split(" "))}function I(t,e){t&&e.split(" ").forEach((function(e){t.classList.remove(e)}))}function G(t){return".".concat(t.split(" ").join("."))}var $=Object.freeze({__proto__:null,getElementWindow:F,getElementDocument:Y,getOptions:B,addClasses:X,removeClasses:I,classNamesToQuery:G}),U=F,Z=Y,Q=B,J=X,K=I,tt=G,et=function(){function e(t,i){void 0===i&&(i={});var r=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var t=U(r.el);r.scrollXTicking||(t.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(t.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0),r.isScrolling||(r.isScrolling=!0,J(r.el,r.classNames.scrolling)),r.showScrollbar("x"),r.showScrollbar("y"),r.onStopScrolling()},this.scrollX=function(){r.axis.x.isOverflowing&&r.positionScrollbar("x"),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&r.positionScrollbar("y"),r.scrollYTicking=!1},this._onStopScrolling=function(){K(r.el,r.classNames.scrolling),r.options.autoHide&&(r.hideScrollbar("x"),r.hideScrollbar("y")),r.isScrolling=!1},this.onMouseEnter=function(){r.isMouseEntering||(J(r.el,r.classNames.mouseEntered),r.showScrollbar("x"),r.showScrollbar("y"),r.isMouseEntering=!0),r.onMouseEntered()},this._onMouseEntered=function(){K(r.el,r.classNames.mouseEntered),r.options.autoHide&&(r.hideScrollbar("x"),r.hideScrollbar("y")),r.isMouseEntering=!1},this._onMouseMove=function(t){r.mouseX=t.clientX,r.mouseY=t.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this._onWindowResize=function(){r.scrollbarWidth=r.getScrollbarWidth(),r.hideNativeScrollbar()},this.onPointerEvent=function(t){var e,i;r.axis.x.track.el&&r.axis.y.track.el&&r.axis.x.scrollbar.el&&r.axis.y.scrollbar.el&&(r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(e=r.isWithinBounds(r.axis.x.track.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(i=r.isWithinBounds(r.axis.y.track.rect)),(e||i)&&(t.stopPropagation(),"pointerdown"===t.type&&"touch"!==t.pointerType&&(e&&(r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.x.scrollbar.rect)?r.onDragStart(t,"x"):r.onTrackClick(t,"x")),i&&(r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.scrollbar.rect)?r.onDragStart(t,"y"):r.onTrackClick(t,"y")))))},this.drag=function(t){var i,s,n,o,l,a,c,h,u,d,p;if(r.draggedAxis&&r.contentWrapperEl){var f=r.axis[r.draggedAxis].track,v=null!==(s=null===(i=f.rect)||void 0===i?void 0:i[r.axis[r.draggedAxis].sizeAttr])&&void 0!==s?s:0,m=r.axis[r.draggedAxis].scrollbar,g=null!==(o=null===(n=r.contentWrapperEl)||void 0===n?void 0:n[r.axis[r.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,b=parseInt(null!==(a=null===(l=r.elStyles)||void 0===l?void 0:l[r.axis[r.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);t.preventDefault(),t.stopPropagation();var y=("y"===r.draggedAxis?t.pageY:t.pageX)-(null!==(h=null===(c=f.rect)||void 0===c?void 0:c[r.axis[r.draggedAxis].offsetAttr])&&void 0!==h?h:0)-r.axis[r.draggedAxis].dragOffset,x=(y="x"===r.draggedAxis&&r.isRtl?(null!==(d=null===(u=f.rect)||void 0===u?void 0:u[r.axis[r.draggedAxis].sizeAttr])&&void 0!==d?d:0)-m.size-y:y)/(v-m.size)*(g-b);"x"===r.draggedAxis&&r.isRtl&&(x=(null===(p=e.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-x:x),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=x}},this.onEndDrag=function(t){var e=Z(r.el),i=U(r.el);t.preventDefault(),t.stopPropagation(),K(r.el,r.classNames.dragging),e.removeEventListener("mousemove",r.drag,!0),e.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=i.setTimeout((function(){e.removeEventListener("click",r.preventClick,!0),e.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null}))},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=t,this.options=V(V({},e.defaultOptions),i),this.classNames=V(V({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=D(this._onMouseMove,64),this.onWindowResize=R(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=R(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=R(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,r=null==i?void 0:i.firstElementChild;if(!r)return null;document.body.appendChild(i),i.scrollLeft=0;var s=e.getOffset(i),n=e.getOffset(r);i.scrollLeft=-999;var o=e.getOffset(r);return document.body.removeChild(i),e.rtlHelpers={isScrollOriginAtZero:s.left!==n.left,isScrollingToNegative:n.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:q()}catch(t){return q()}},e.getOffset=function(t){var e=t.getBoundingClientRect(),i=Z(t),r=U(t);return{top:e.top+(r.pageYOffset||i.documentElement.scrollTop),left:e.left+(r.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){t(o)&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var t,e;this.wrapperEl=this.el.querySelector(tt(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(tt(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(tt(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(tt(this.classNames.offset)),this.maskEl=this.el.querySelector(tt(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,tt(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(tt(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(tt(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(tt(this.classNames.track)).concat(tt(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(tt(this.classNames.track)).concat(tt(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(t=this.axis.x.track.el)||void 0===t?void 0:t.querySelector(tt(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(e=this.axis.y.track.el)||void 0===e?void 0:e.querySelector(tt(this.classNames.scrollbar)))||null,this.options.autoHide||(J(this.axis.x.scrollbar.el,this.classNames.visible),J(this.axis.y.scrollbar.el,this.classNames.visible))},e.prototype.initListeners=function(){var t,e=this,i=U(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(t=this.contentWrapperEl)||void 0===t||t.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var r=!1,s=i.ResizeObserver||ResizeObserver;this.resizeObserver=new s((function(){r&&i.requestAnimationFrame((function(){e.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){r=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){e.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var t=U(this.el);this.elStyles=t.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var e=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,r=this.heightAutoObserverEl.offsetWidth<=1||e>0,s=this.contentWrapperEl.offsetWidth,n=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var l=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=r?"".concat(e||a,"px"):"auto",this.placeholderEl.style.height="".concat(l,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==e&&a>e,this.axis.y.isOverflowing=l>c,this.axis.x.isOverflowing="hidden"!==n&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>s-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&l>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(t){var e,i;if(void 0===t&&(t="y"),!this.axis[t].isOverflowing||!this.contentEl)return 0;var r,s=this.contentEl[this.axis[t].scrollSizeAttr],n=null!==(i=null===(e=this.axis[t].track.el)||void 0===e?void 0:e[this.axis[t].offsetSizeAttr])&&void 0!==i?i:0,o=n/s;return r=Math.max(~~(o*n),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(r=Math.min(r,this.options.scrollbarMaxSize)),r},e.prototype.positionScrollbar=function(t){var i,r,s;void 0===t&&(t="y");var n=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&n.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],l=(null===(i=this.axis[t].track.el)||void 0===i?void 0:i[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c="x"===t&&this.isRtl&&(null===(r=e.getRtlHelpers())||void 0===r?void 0:r.isScrollOriginAtZero)?-c:c,"x"===t&&this.isRtl&&(c=(null===(s=e.getRtlHelpers())||void 0===s?void 0:s.isScrollingToNegative)?c:-c);var h=c/(o-a),u=~~((l-n.size)*h);u="x"===t&&this.isRtl?-u+(l-n.size):u,n.el.style.transform="x"===t?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},e.prototype.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,i=this.axis[t].scrollbar.el;e&&i&&this.contentWrapperEl&&(this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(t))):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(t))),this.axis[t].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(t){void 0===t&&(t="y"),this.axis[t].isOverflowing&&!this.axis[t].scrollbar.isVisible&&(J(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(t){void 0===t&&(t="y"),this.axis[t].isOverflowing&&this.axis[t].scrollbar.isVisible&&(K(this.axis[t].scrollbar.el,this.classNames.visible),this.axis[t].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(t){void 0===t&&(t="y");var e=this.axis[t];e.track.el&&e.scrollbar.el&&(e.track.rect=e.track.el.getBoundingClientRect(),e.scrollbar.rect=e.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(e.track.rect)?(this.showScrollbar(t),J(e.track.el,this.classNames.hover),this.isWithinBounds(e.scrollbar.rect)?J(e.scrollbar.el,this.classNames.hover):K(e.scrollbar.el,this.classNames.hover)):(K(e.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)))},e.prototype.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),K(this.axis[t].track.el,this.classNames.hover),K(this.axis[t].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(t)},e.prototype.onDragStart=function(t,e){var i;void 0===e&&(e="y");var r=Z(this.el),s=U(this.el),n=this.axis[e].scrollbar,o="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=o-((null===(i=n.rect)||void 0===i?void 0:i[this.axis[e].offsetAttr])||0),this.draggedAxis=e,J(this.el,this.classNames.dragging),r.addEventListener("mousemove",this.drag,!0),r.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(r.addEventListener("click",this.preventClick,!0),r.addEventListener("dblclick",this.preventClick,!0)):(s.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(t,e){var i,r,s,n,o=this;void 0===e&&(e="y");var l=this.axis[e];if(this.options.clickOnTrack&&l.scrollbar.el&&this.contentWrapperEl){t.preventDefault();var a=U(this.el);this.axis[e].scrollbar.rect=l.scrollbar.el.getBoundingClientRect();var c=null!==(r=null===(i=this.axis[e].scrollbar.rect)||void 0===i?void 0:i[this.axis[e].offsetAttr])&&void 0!==r?r:0,h=parseInt(null!==(n=null===(s=this.elStyles)||void 0===s?void 0:s[this.axis[e].sizeAttr])&&void 0!==n?n:"0px",10),u=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],d=("y"===e?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===d?u-h:u+h,f=function(){o.contentWrapperEl&&(-1===d?u>p&&(u-=40,o.contentWrapperEl[o.axis[e].scrollOffsetAttr]=u,a.requestAnimationFrame(f)):u<p&&(u+=40,o.contentWrapperEl[o.axis[e].scrollOffsetAttr]=u,a.requestAnimationFrame(f)))};f()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var t=U(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),t.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.prototype.findChild=function(t,e){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,(function(t){return i.call(t,e)}))[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=Q,e.helpers=$,e}(),it=function(t,e){return(it=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)};var rt=et.helpers,st=rt.getOptions,nt=rt.addClasses,ot=function(t){function e(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];var s=t.apply(this,i)||this;return e.instances.set(i[0],s),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}it(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}(e,t),e.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(t){"init"===t.getAttribute("data-simplebar")||e.instances.has(t)||new e(t,st(t.attributes))}))},e.removeObserver=function(){var t;null===(t=e.globalObserver)||void 0===t||t.disconnect()},e.prototype.initDOM=function(){var t,e,i,r=this;if(!Array.prototype.filter.call(this.el.children,(function(t){return t.classList.contains(r.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),nt(this.wrapperEl,this.classNames.wrapper),nt(this.contentWrapperEl,this.classNames.contentWrapper),nt(this.offsetEl,this.classNames.offset),nt(this.maskEl,this.classNames.mask),nt(this.contentEl,this.classNames.contentEl),nt(this.placeholderEl,this.classNames.placeholder),nt(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),nt(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("tabindex","0"),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var s=document.createElement("div"),n=document.createElement("div");nt(s,this.classNames.track),nt(n,this.classNames.scrollbar),s.appendChild(n),this.axis.x.track.el=s.cloneNode(!0),nt(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=s.cloneNode(!0),nt(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}et.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},e.prototype.unMount=function(){et.prototype.unMount.call(this),e.instances.delete(this.el)},e.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(e.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},e.handleMutations=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?!e.instances.has(t)&&document.documentElement.contains(t)&&new e(t,st(t.attributes)):t.querySelectorAll("[data-simplebar]").forEach((function(t){"init"!==t.getAttribute("data-simplebar")&&!e.instances.has(t)&&document.documentElement.contains(t)&&new e(t,st(t.attributes))})))})),t.removedNodes.forEach((function(t){1===t.nodeType&&("init"===t.getAttribute("data-simplebar")?e.instances.has(t)&&!document.documentElement.contains(t)&&e.instances.get(t).unMount():Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'),(function(t){e.instances.has(t)&&!document.documentElement.contains(t)&&e.instances.get(t).unMount()})))}))}))},e.instances=new WeakMap,e}(et);t(o)&&ot.initHtmlApi(),new ot(document.querySelector(".categories-list-container"));var lt=document.querySelector(".categories-list");function at(){return(at=t(i)(t(s).mark((function e(){var i,r;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,"https://books-backend.p.goit.global/books/category-list",t.next=4,fetch("https://books-backend.p.goit.global/books/category-list");case 4:return i=t.sent,t.next=7,i.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}(function(){return at.apply(this,arguments)})().then((function(t){return function(t){console.log(t);var e=t.map((function(t){return"\n    <li class='categories-list-item'>\n        <a href>\n            <p>".concat(t.list_name,"</p>\n        </a>\n    </li>\n    ")})).join("");lt.insertAdjacentHTML("beforeend",e)}(t)}))}();
//# sourceMappingURL=index.508072a8.js.map
