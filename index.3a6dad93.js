function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){s[e]=t},t.parcelRequired7c6=r),console.log(5);var l,o=!("undefined"==typeof window||!window.document||!window.document.createElement);l=o;var n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},a="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,h=a||c||Function("return this")(),d=function(){return h.Date.now()},u=/\s/;var p=function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t},f=/^\s+/;var v=h.Symbol,m=Object.prototype,b=m.hasOwnProperty,g=m.toString,x=v?v.toStringTag:void 0;var y=function(e){var t=b.call(e,x),i=e[x];try{e[x]=void 0;var s=!0}catch(e){}var r=g.call(e);return s&&(t?e[x]=i:delete e[x]),r},E=Object.prototype.toString;var w=function(e){return E.call(e)},O=v?v.toStringTag:void 0;var S=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?y(e):w(e)};var A=function(e){return null!=e&&"object"==typeof e};var k=function(e){return"symbol"==typeof e||A(e)&&"[object Symbol]"==S(e)},M=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,N=/^0o[0-7]+$/i,L=parseInt;var z=function(e){if("number"==typeof e)return e;if(k(e))return NaN;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;var i;e=(i=e)?i.slice(0,p(i)+1).replace(f,""):i;var s=W.test(e);return s||N.test(e)?L(e.slice(2),s?2:8):M.test(e)?NaN:+e},C=Math.max,T=Math.min;var R=function(e,t,i){var s,r,l,o,a,c,h=0,u=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var i=s,l=r;return s=r=void 0,h=t,o=e.apply(l,i)}function m(e){return h=e,a=setTimeout(g,t),u?v(e):o}function b(e){var i=e-c;return void 0===c||i>=t||i<0||p&&e-h>=l}function g(){var e=d();if(b(e))return x(e);a=setTimeout(g,function(e){var i=t-(e-c);return p?T(i,l-(e-h)):i}(e))}function x(e){return a=void 0,f&&s?v(e):(s=r=void 0,o)}function y(){var e=d(),i=b(e);if(s=arguments,r=this,c=e,i){if(void 0===a)return m(c);if(p)return clearTimeout(a),a=setTimeout(g,t),v(c)}return void 0===a&&(a=setTimeout(g,t)),o}return t=z(t)||0,n(i)&&(u=!!i.leading,l=(p="maxWait"in i)?C(z(i.maxWait)||0,t):l,f="trailing"in i?!!i.trailing:f),y.cancel=function(){void 0!==a&&clearTimeout(a),h=0,s=c=r=a=void 0},y.flush=function(){return void 0===a?o:x(d())},y};var D=function(e,t,i){var s=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return n(i)&&(s="leading"in i?!!i.leading:s,r="trailing"in i?!!i.trailing:r),R(e,t,{leading:s,maxWait:t,trailing:r})},V=function(){return V=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},V.apply(this,arguments)},H=null,j=null;function q(){if(null===H){if("undefined"==typeof document)return H=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),H=i}return H}function _(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function B(e){return e&&e.ownerDocument?e.ownerDocument:document}e(l)&&window.addEventListener("resize",(function(){j!==window.devicePixelRatio&&(j=window.devicePixelRatio,H=null)}));var P=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})};function X(e,t){var i;e&&(i=e.classList).add.apply(i,t.split(" "))}function Y(e,t){e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))}function F(e){return".".concat(e.split(" ").join("."))}var I=Object.freeze({__proto__:null,getElementWindow:_,getElementDocument:B,getOptions:P,addClasses:X,removeClasses:Y,classNamesToQuery:F}),U=_,$=B,Z=P,G=X,Q=Y,J=F,K=function(){function t(e,i){void 0===i&&(i={});var s=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=U(s.el);s.scrollXTicking||(e.requestAnimationFrame(s.scrollX),s.scrollXTicking=!0),s.scrollYTicking||(e.requestAnimationFrame(s.scrollY),s.scrollYTicking=!0),s.isScrolling||(s.isScrolling=!0,G(s.el,s.classNames.scrolling)),s.showScrollbar("x"),s.showScrollbar("y"),s.onStopScrolling()},this.scrollX=function(){s.axis.x.isOverflowing&&s.positionScrollbar("x"),s.scrollXTicking=!1},this.scrollY=function(){s.axis.y.isOverflowing&&s.positionScrollbar("y"),s.scrollYTicking=!1},this._onStopScrolling=function(){Q(s.el,s.classNames.scrolling),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isScrolling=!1},this.onMouseEnter=function(){s.isMouseEntering||(G(s.el,s.classNames.mouseEntered),s.showScrollbar("x"),s.showScrollbar("y"),s.isMouseEntering=!0),s.onMouseEntered()},this._onMouseEntered=function(){Q(s.el,s.classNames.mouseEntered),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isMouseEntering=!1},this._onMouseMove=function(e){s.mouseX=e.clientX,s.mouseY=e.clientY,(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseMoveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseMoveForAxis("y")},this.onMouseLeave=function(){s.onMouseMove.cancel(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseLeaveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseLeaveForAxis("y"),s.mouseX=-1,s.mouseY=-1},this._onWindowResize=function(){s.scrollbarWidth=s.getScrollbarWidth(),s.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;s.axis.x.track.el&&s.axis.y.track.el&&s.axis.x.scrollbar.el&&s.axis.y.scrollbar.el&&(s.axis.x.track.rect=s.axis.x.track.el.getBoundingClientRect(),s.axis.y.track.rect=s.axis.y.track.el.getBoundingClientRect(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&(t=s.isWithinBounds(s.axis.x.track.rect)),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&(i=s.isWithinBounds(s.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(s.axis.x.scrollbar.rect=s.axis.x.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.x.scrollbar.rect)?s.onDragStart(e,"x"):s.onTrackClick(e,"x")),i&&(s.axis.y.scrollbar.rect=s.axis.y.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.y.scrollbar.rect)?s.onDragStart(e,"y"):s.onTrackClick(e,"y")))))},this.drag=function(e){var i,r,l,o,n,a,c,h,d,u,p;if(s.draggedAxis&&s.contentWrapperEl){var f=s.axis[s.draggedAxis].track,v=null!==(r=null===(i=f.rect)||void 0===i?void 0:i[s.axis[s.draggedAxis].sizeAttr])&&void 0!==r?r:0,m=s.axis[s.draggedAxis].scrollbar,b=null!==(o=null===(l=s.contentWrapperEl)||void 0===l?void 0:l[s.axis[s.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,g=parseInt(null!==(a=null===(n=s.elStyles)||void 0===n?void 0:n[s.axis[s.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);e.preventDefault(),e.stopPropagation();var x=("y"===s.draggedAxis?e.pageY:e.pageX)-(null!==(h=null===(c=f.rect)||void 0===c?void 0:c[s.axis[s.draggedAxis].offsetAttr])&&void 0!==h?h:0)-s.axis[s.draggedAxis].dragOffset,y=(x="x"===s.draggedAxis&&s.isRtl?(null!==(u=null===(d=f.rect)||void 0===d?void 0:d[s.axis[s.draggedAxis].sizeAttr])&&void 0!==u?u:0)-m.size-x:x)/(v-m.size)*(b-g);"x"===s.draggedAxis&&s.isRtl&&(y=(null===(p=t.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-y:y),s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr]=y}},this.onEndDrag=function(e){var t=$(s.el),i=U(s.el);e.preventDefault(),e.stopPropagation(),Q(s.el,s.classNames.dragging),t.removeEventListener("mousemove",s.drag,!0),t.removeEventListener("mouseup",s.onEndDrag,!0),s.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",s.preventClick,!0),t.removeEventListener("dblclick",s.preventClick,!0),s.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=e,this.options=V(V({},t.defaultOptions),i),this.classNames=V(V({},t.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=D(this._onMouseMove,64),this.onWindowResize=R(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=R(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=R(this._onMouseEntered,this.stopScrollDelay),this.init()}return t.getRtlHelpers=function(){if(t.rtlHelpers)return t.rtlHelpers;var e=document.createElement("div");e.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=e.firstElementChild,s=null==i?void 0:i.firstElementChild;if(!s)return null;document.body.appendChild(i),i.scrollLeft=0;var r=t.getOffset(i),l=t.getOffset(s);i.scrollLeft=-999;var o=t.getOffset(s);return document.body.removeChild(i),t.rtlHelpers={isScrollOriginAtZero:r.left!==l.left,isScrollingToNegative:l.left!==o.left},t.rtlHelpers},t.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:q()}catch(e){return q()}},t.getOffset=function(e){var t=e.getBoundingClientRect(),i=$(e),s=U(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},t.prototype.init=function(){e(l)&&(this.initDOM(),this.rtlHelpers=t.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},t.prototype.initDOM=function(){var e,t;this.wrapperEl=this.el.querySelector(J(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(J(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(J(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(J(this.classNames.offset)),this.maskEl=this.el.querySelector(J(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,J(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(J(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(J(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,"".concat(J(this.classNames.track)).concat(J(this.classNames.horizontal))),this.axis.y.track.el=this.findChild(this.el,"".concat(J(this.classNames.track)).concat(J(this.classNames.vertical))),this.axis.x.scrollbar.el=(null===(e=this.axis.x.track.el)||void 0===e?void 0:e.querySelector(J(this.classNames.scrollbar)))||null,this.axis.y.scrollbar.el=(null===(t=this.axis.y.track.el)||void 0===t?void 0:t.querySelector(J(this.classNames.scrollbar)))||null,this.options.autoHide||(G(this.axis.x.scrollbar.el,this.classNames.visible),G(this.axis.y.scrollbar.el,this.classNames.visible))},t.prototype.initListeners=function(){var e,t=this,i=U(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,r=i.ResizeObserver||ResizeObserver;this.resizeObserver=new r((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},t.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=U(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,r=this.contentWrapperEl.offsetWidth,l=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var n=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(n,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=n>c,this.axis.x.isOverflowing="hidden"!==l&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,d=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>r-d,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&n>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},t.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,r=this.contentEl[this.axis[e].scrollSizeAttr],l=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,o=l/r;return s=Math.max(~~(o*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},t.prototype.positionScrollbar=function(e){var i,s,r;void 0===e&&(e="y");var l=this.axis[e].scrollbar;if(this.axis[e].isOverflowing&&this.contentWrapperEl&&l.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[e].scrollSizeAttr],n=(null===(i=this.axis[e].track.el)||void 0===i?void 0:i[this.axis[e].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[e].sizeAttr],10),c=this.contentWrapperEl[this.axis[e].scrollOffsetAttr];c="x"===e&&this.isRtl&&(null===(s=t.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===e&&this.isRtl&&(c=(null===(r=t.getRtlHelpers())||void 0===r?void 0:r.isScrollingToNegative)?c:-c);var h=c/(o-a),d=~~((n-l.size)*h);d="x"===e&&this.isRtl?-d+(n-l.size):d,l.el.style.transform="x"===e?"translate3d(".concat(d,"px, 0, 0)"):"translate3d(0, ".concat(d,"px, 0)")}},t.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},t.prototype.showScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(G(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},t.prototype.hideScrollbar=function(e){void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(Q(this.axis[e].scrollbar.el,this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},t.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},t.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),G(t.track.el,this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?G(t.scrollbar.el,this.classNames.hover):Q(t.scrollbar.el,this.classNames.hover)):(Q(t.track.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},t.prototype.onMouseLeaveForAxis=function(e){void 0===e&&(e="y"),Q(this.axis[e].track.el,this.classNames.hover),Q(this.axis[e].scrollbar.el,this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},t.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y");var s=$(this.el),r=U(this.el),l=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(i=l.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,G(this.el,this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},t.prototype.onTrackClick=function(e,t){var i,s,r,l,o=this;void 0===t&&(t="y");var n=this.axis[t];if(this.options.clickOnTrack&&n.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=U(this.el);this.axis[t].scrollbar.rect=n.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(l=null===(r=this.elStyles)||void 0===r?void 0:r[this.axis[t].sizeAttr])&&void 0!==l?l:"0px",10),d=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],u=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,p=-1===u?d-h:d+h,f=function(){o.contentWrapperEl&&(-1===u?d>p&&(d-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(f)):d<p&&(d+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=d,a.requestAnimationFrame(f)))};f()}},t.prototype.getContentElement=function(){return this.contentEl},t.prototype.getScrollElement=function(){return this.contentWrapperEl},t.prototype.removeListeners=function(){var e=U(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},t.prototype.unMount=function(){this.removeListeners()},t.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},t.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},t.rtlHelpers=null,t.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},t.getOptions=Z,t.helpers=I,t}(),ee=function(e,t){return(ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)};var te=K.helpers,ie=te.getOptions,se=te.addClasses,re=function(e){function t(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var r=e.apply(this,i)||this;return t.instances.set(i[0],r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}(t,e),t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),(function(e){"init"===e.getAttribute("data-simplebar")||t.instances.has(e)||new t(e,ie(e.attributes))}))},t.removeObserver=function(){var e;null===(e=t.globalObserver)||void 0===e||e.disconnect()},t.prototype.initDOM=function(){var e,t,i,s=this;if(!Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(s.classNames.wrapper)})).length){for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),se(this.wrapperEl,this.classNames.wrapper),se(this.contentWrapperEl,this.classNames.contentWrapper),se(this.offsetEl,this.classNames.offset),se(this.maskEl,this.classNames.mask),se(this.contentEl,this.classNames.contentEl),se(this.placeholderEl,this.classNames.placeholder),se(this.heightAutoObserverWrapperEl,this.classNames.heightAutoObserverWrapperEl),se(this.heightAutoObserverEl,this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex","0"),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var r=document.createElement("div"),l=document.createElement("div");se(r,this.classNames.track),se(l,this.classNames.scrollbar),r.appendChild(l),this.axis.x.track.el=r.cloneNode(!0),se(this.axis.x.track.el,this.classNames.horizontal),this.axis.y.track.el=r.cloneNode(!0),se(this.axis.y.track.el,this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}K.prototype.initDOM.call(this),this.el.setAttribute("data-simplebar","init")},t.prototype.unMount=function(){K.prototype.unMount.call(this),t.instances.delete(this.el)},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(t.handleMutations),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.handleMutations=function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,ie(e.attributes)):e.querySelectorAll("[data-simplebar]").forEach((function(e){"init"!==e.getAttribute("data-simplebar")&&!t.instances.has(e)&&document.documentElement.contains(e)&&new t(e,ie(e.attributes))})))})),e.removedNodes.forEach((function(e){1===e.nodeType&&("init"===e.getAttribute("data-simplebar")?t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount():Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'),(function(e){t.instances.has(e)&&!document.documentElement.contains(e)&&t.instances.get(e).unMount()})))}))}))},t.instances=new WeakMap,t}(K);e(l)&&re.initHtmlApi();new re(document.querySelector(".categories-list-container"));const le=document.querySelector(".categories-list");(async function(){try{const e="https://books-backend.p.goit.global/books/category-list",t=await fetch(e);return await t.json()}catch(e){console.log(e)}})().then((e=>function(e){console.log(e);const t=e.map((e=>`\n    <li class='categories-list-item'>\n        <a href>\n            <p>${e.list_name}</p>\n        </a>\n    </li>\n    `)).join("");le.insertAdjacentHTML("beforeend",t)}(e)));document.getElementById("our-team").addEventListener("click",(function(){console.log("hello")})),r("75VGX");document.querySelector(".loader");const oe=document.querySelector(".btn-to-top");window.addEventListener("scroll",(()=>{window.pageYOffset>500?oe.classList.add("btn-to-top--visible"):oe.classList.remove("btn-to-top--visible")})),oe.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.3a6dad93.js.map
