!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e){t.exports='<header class="head">\n  <h1 class="head__title">Wiskel</h1>\n  <div class="handle handle--head-handle">\n    <div class="handle__point"></div>\n  </div>\n</header>'},function(t,e){t.exports='<aside class="tools">\n  <div class="palette">\n    <div class="palette__tool palette__tool--pen" data-tool-type="pen" title="Pen"></div>\n    <div class="palette__tool palette__tool--eraser" data-tool-type="eraser" title="Eraser"></div>\n    <div class="palette__tool palette__tool--bucket" data-tool-type="bucket" title="Bucket"></div>\n    <input type="color" class="color-picker" data-tool-type="colorPicker">\n  </div>\n</aside>'},function(t,e){t.exports='<div class="frames-wrapper">\n  <ul class="frames-wrapper__list"></ul>\n  <div class="btn frames-wrapper__btn">\n    <div class="frames-wrapper__btn-icon"></div>\n    <div>Add Frame</div>\n  </div>\n</div>'},function(t,e){t.exports='<div class="frame-wrapper">\n  <canvas class="frame"></canvas>\n  <div class="frame__tool frame__tool--counter"><i class="frame__tool-content">1</i></div>\n  <div class="frame__tool frame__tool--bucket"><i class="fas fa-trash-alt frame__tool-content"></i></div>\n  <div class="frame__tool frame__tool--dublicate"><i class="fas fa-copy frame__tool-content"></i></div>\n</div>'},function(t,e,n){t.exports=n.p+"img/ff229da200bda0d612e9ad5620765bec.png"},function(t,e){t.exports='<div class="main-canvas-wrapper">\n  <canvas class="main-canvas"></canvas>\n</div>'},function(t,e){t.exports='<div class="preview-wrapper">\n  <canvas></canvas>\n  <div class="range-wrapper">\n    <input type="range" min="1" max="24" step="1" value="0">\n    <span class="fps"></span>\n  </div>\n  <div class="btn full-screen-btn">Full Screen Mode</div>\n  <div class="btn get-gif-btn">Download as GIF</div>\n</div>'},function(t,e){t.exports='<main class="layout">\r\n  <div class="tools"></div>\r\n  <div class="frames"></div>\r\n  <div class="canvas"></div>\r\n  <div class="preview"></div>\r\n</main>'},function(t,e,n){t.exports=function(){return new Worker(n.p+"9504308241ab775ccabe.worker.js")}},function(t,e,n){"use strict";(function(t,e){var s,o=n(8),r=n.n(o);window.wworker=r.a,function(s){if("object"==typeof exports&&void 0!==t)t.exports=s();else if("function"==typeof define&&n(12))define([],s);else{("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this).GIF=s()}}(function(){return function t(e,n,o){function r(a,c){if(!n[a]){if(!e[a]){if(!c&&("function"==typeof s&&s))return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[a]={exports:{}};e[a][0].call(h.exports,function(t){var n=e[a][1][t];return r(n||t)},h,h.exports,t,e,n,o)}return n[a].exports}for(var i="function"==typeof s&&s,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){function s(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(t){return"function"==typeof t}function r(t){return"object"==typeof t&&null!==t}function i(t){return void 0===t}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._maxListeners=void 0,s.defaultMaxListeners=10,s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},s.prototype.emit=function(t){var e,n,s,a,c,l;if(this._events||(this._events={}),"error"===t&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var h=new Error('Uncaught, unspecified "error" event. ('+e+")");throw h.context=e,h}if(i(n=this._events[t]))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(r(n))for(a=Array.prototype.slice.call(arguments,1),s=(l=n.slice()).length,c=0;c<s;c++)l[c].apply(this,a);return!0},s.prototype.addListener=function(t,e){var n;if(!o(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,o(e.listener)?e.listener:e),this._events[t]?r(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,r(this._events[t])&&!this._events[t].warned&&(n=i(this._maxListeners)?s.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},s.prototype.on=s.prototype.addListener,s.prototype.once=function(t,e){if(!o(e))throw TypeError("listener must be a function");var n=!1;function s(){this.removeListener(t,s),n||(n=!0,e.apply(this,arguments))}return s.listener=e,this.on(t,s),this},s.prototype.removeListener=function(t,e){var n,s,i,a;if(!o(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(i=(n=this._events[t]).length,s=-1,n===e||o(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(r(n)){for(a=i;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){s=a;break}if(s<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},s.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(o(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},s.prototype.listeners=function(t){return this._events&&this._events[t]?o(this._events[t])?[this._events[t]]:this._events[t].slice():[]},s.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(o(e))return 1;if(e)return e.length}return 0},s.listenerCount=function(t,e){return t.listenerCount(e)}},{}],2:[function(t,e,n){var s,o,r,i,a;a=navigator.userAgent.toLowerCase(),i=navigator.platform.toLowerCase(),r="ie"===(s=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(o={name:"version"===s[1]?s[3]:s[1],version:r||parseFloat("opera"===s[1]&&s[4]?s[4]:s[2]),platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||i.match(/mac|win|linux/)||["other"])[0]}})[o.name]=!0,o[o.name+parseInt(o.version,10)]=!0,o.platform[o.platform.name]=!0,e.exports=o},{}],3:[function(t,e,n){var s,o,r,i={}.hasOwnProperty,a=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},c=[].slice;s=t("events").EventEmitter,r=t("./browser.coffee"),o=function(t){var e,n;function o(t){var n,s,o;for(s in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(t),e)o=e[s],null==(n=this.options)[s]&&(n[s]=o)}return function(t,e){for(var n in e)i.call(e,n)&&(t[n]=e[n]);function s(){this.constructor=t}s.prototype=e.prototype,t.prototype=new s,t.__super__=e.prototype}(o,s),e={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},n={delay:500,copy:!1},o.prototype.setOption=function(t,e){if(this.options[t]=e,null!=this._canvas&&("width"===t||"height"===t))return this._canvas[t]=e},o.prototype.setOptions=function(t){var e,n,s;for(e in n=[],t)i.call(t,e)&&(s=t[e],n.push(this.setOption(e,s)));return n},o.prototype.addFrame=function(t,e){var s,o;for(o in null==e&&(e={}),(s={}).transparent=this.options.transparent,n)s[o]=e[o]||n[o];if(null==this.options.width&&this.setOption("width",t.width),null==this.options.height&&this.setOption("height",t.height),"undefined"!=typeof ImageData&&null!==ImageData&&t instanceof ImageData)s.data=t.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&t instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&t instanceof WebGLRenderingContext)e.copy?s.data=this.getContextData(t):s.context=t;else{if(null==t.childNodes)throw new Error("Invalid image");e.copy?s.data=this.getImageData(t):s.image=t}return this.frames.push(s)},o.prototype.render=function(){var t,e,n;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var t,e,n;for(n=[],t=0,e=this.frames.length;0<=e?t<e:t>e;0<=e?++t:--t)n.push(null);return n}.call(this),e=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(t=0,n=e;0<=n?t<n:t>n;0<=n?++t:--t)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},o.prototype.abort=function(){for(var t;null!=(t=this.activeWorkers.shift());)this.log("killing active worker"),t.terminate();return this.running=!1,this.emit("abort")},o.prototype.spawnWorkers=function(){var t,e,n,s;return t=Math.min(this.options.workers,this.frames.length),function(){n=[];for(var s=e=this.freeWorkers.length;e<=t?s<t:s>t;e<=t?s++:s--)n.push(s);return n}.apply(this).forEach((s=this,function(t){var e;return s.log("spawning worker "+t),(e=new window.wworker(s.options.workerScript)).onmessage=function(t){return s.activeWorkers.splice(s.activeWorkers.indexOf(e),1),s.freeWorkers.push(e),s.frameFinished(t.data)},s.freeWorkers.push(e)})),t},o.prototype.frameFinished=function(t){var e,n;if(this.log("frame "+t.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[t.index]=t,!0===this.options.globalPalette&&(this.options.globalPalette=t.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(e=1,n=this.freeWorkers.length;1<=n?e<n:e>n;1<=n?++e:--e)this.renderNextFrame();return a.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},o.prototype.finishRendering=function(){var t,e,n,s,o,r,i,a,c,l,h,d,p,u,f,m;for(a=0,o=0,c=(u=this.imageParts).length;o<c;o++)a+=((e=u[o]).data.length-1)*e.pageSize+e.cursor;for(a+=e.pageSize-e.cursor,this.log("rendering finished - filesize "+Math.round(a/1e3)+"kb"),t=new Uint8Array(a),d=0,r=0,l=(f=this.imageParts).length;r<l;r++)for(n=i=0,h=(m=(e=f[r]).data).length;i<h;n=++i)p=m[n],t.set(p,d),n===e.data.length-1?d+=e.cursor:d+=e.pageSize;return s=new Blob([t],{type:"image/gif"}),this.emit("finished",s,t)},o.prototype.renderNextFrame=function(){var t,e,n;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return t=this.frames[this.nextFrame++],n=this.freeWorkers.shift(),e=this.getTask(t),this.log("starting frame "+(e.index+1)+" of "+this.frames.length),this.activeWorkers.push(n),n.postMessage(e)},o.prototype.getContextData=function(t){return t.getImageData(0,0,this.options.width,this.options.height).data},o.prototype.getImageData=function(t){var e;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(e=this._canvas.getContext("2d")).setFill=this.options.background,e.fillRect(0,0,this.options.width,this.options.height),e.drawImage(t,0,0),this.getContextData(e)},o.prototype.getTask=function(t){var e,n;if(n={index:e=this.frames.indexOf(t),last:e===this.frames.length-1,delay:t.delay,transparent:t.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===r.name},null!=t.data)n.data=t.data;else if(null!=t.context)n.data=this.getContextData(t.context);else{if(null==t.image)throw new Error("Invalid frame");n.data=this.getImageData(t.image)}return n},o.prototype.log=function(){var t;if(t=1<=arguments.length?c.call(arguments,0):[],this.options.debug)return console.log.apply(console,t)},o}(),e.exports=o},{"./browser.coffee":2,events:1}]},{},[3])(3)})}).call(this,n(10)(t),n(11))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";n.r(e);n(14),n(16);var s=n(0),o=n.n(s);var r=class{constructor(t){const e=document.createElement("div");e.innerHTML=t,[this.node]=e.childNodes}render(t){t.appendChild(this.node)}};var i=class extends r{constructor(){super(o.a)}},a=(n(17),n(1)),c=n.n(a);var l=class extends r{constructor(){super(c.a),this.components={colorPicker:this.node.querySelector(".color-picker")}}},h=(n(20),n(2)),d=n.n(h),p=(n(21),n(3)),u=n.n(p),f=n(4),m=n.n(f);var v=class extends r{constructor(t,e={parts:3,width:0,height:0},n){super(t),this.state={colors:n,layout:{defaultLayout:n?JSON.parse(JSON.stringify(n)):[[]],layouts:[n]}},this.components={canvasNode:this.node.querySelector("canvas")},this.options=e,this.options.maxWidth=600,this.node.querySelector("canvas").style.backgroundImage=`url(${m.a})`,this.components.canvasNode.linkToClass=this}render(t,e){return super.render(t),this.resizeCanvas(),this.strokeRect(e),e}resizeCanvas(){const t=this.getCanvasSize(),e=this.components.canvasNode,n=Math.min(t.width,this.options.maxWidth);this.options.width=Math.floor(n/this.options.parts)*this.options.parts,this.options.height=this.options.width,this.components.canvasNode.style.height=`${this.options.height}px`,this.components.canvasNode.style.width=`${this.options.width}px`,e.width=this.options.width,e.height=this.options.height}strokeRect(t){this.clear();const e=this.components.canvasNode.getContext("2d"),{parts:n}=this.options;for(let s=0;s<n;s+=1)for(let o=0;o<n;o+=1)e.fillStyle=t[s%n][[o%n]],e.fillRect(Math.round(this.options.width/n*s),Math.round(this.options.height/n*o),Math.round(this.options.width/n),Math.round(this.options.height/n))}strokePath(t,e,n){const s=t.slice(),o=e.slice(),r=this.state.colors;function i(t,e){return t.every((t,n)=>t===e[n])}r[s[0]][s[1]]=n;let a=0;for(;!i(s,o);){const t=a%2==0?1:0;s[0]>o[0]&&t?s[0]-=1:s[0]<o[0]&&t?s[0]+=1:s[1]>o[1]&&!t?s[1]-=1:s[1]<o[1]&&!t&&(s[1]+=1),a+=1,r[s[0]][s[1]]=n}this.strokeRect(r)}getCanvasSize(){const t=window.getComputedStyle(this.components.canvasNode);return{width:parseFloat(t.width),height:parseFloat(t.height)}}refreshCanvas(){this.strokeRect(this.state.colors)}refreshCanvasPath(t,e,n){this.strokePath(t,e,n)}clear(){const t=this.components.canvasNode.getContext("2d"),e=this.getCanvasSize();t.clearRect(0,0,e.width,e.height)}clearPart({xPos:t,yPos:e}){const n=this.components.canvasNode.getContext("2d"),s=this.getCanvasSize();n.clearRect(Math.round(s.height/this.options.parts*t),Math.round(s.width/this.options.parts*e),Math.round(s.height/this.options.parts),Math.round(s.width/this.options.parts))}};var g=class extends v{constructor(t,e,n){super(u.a,n,e),this.components.popup={counter:this.node.querySelector(".frame__tool--counter"),bucket:this.node.querySelector(".frame__tool--bucket"),dublicate:this.node.querySelector(".frame__tool--dublicate")},this.components.frame=this.node.querySelector(".frame")}render(t){super.render(t,this.state.colors),this.components.canvasNode.linkToFrameClass=this;const e=getComputedStyle(this.components.frame);this.node.style.width=e.width,this.node.style.height=e.height}strokeRect(){super.strokeRect(this.state.colors)}setIndex(t){this.components.popup.counter.querySelector("i").textContent=t}refreshCanvas(){this.strokeRect()}enable(){this.components.frame.classList.add("frame--active")}disable(){this.components.frame.classList.remove("frame--active")}};var w=class extends r{constructor(t){super(d.a),this.style=getComputedStyle(this.node),this.components={btn:this.node.querySelector(".frames-wrapper__btn"),frameList:this.node.querySelector(".frames-wrapper__list")},this.options={size:t}}addFrame(t,e){const n=new g(null,t,{parts:this.options.size,width:parseFloat(this.style.width),height:parseFloat(this.style.height)});n.setIndex(e);const s=document.createElement("li");s.setAttribute("draggable",!0),this.components.frameList.appendChild(s),n.render(s)}render(t,e){super.render(t),this.addFrame(e,1)}recalcIndexes(){this.components.frameList.querySelectorAll("li").forEach((t,e)=>{t.querySelector(".frame__tool--counter i").textContent=e+1})}getItemsLiveList(){return this.node.getElementsByTagName("li")}},y=(n(22),n(5)),x=n.n(y);var b=class extends v{constructor(t){super(x.a,{parts:t})}},_=(n(23),n(6)),C=n.n(_);var k=class extends v{constructor(t){super(C.a,{parts:t}),this.components.range=this.node.querySelector("input[type=range]"),this.components.fpsBox=this.node.querySelector(".fps"),this.components.fullScreenBtn=this.node.querySelector(".full-screen-btn"),this.components.gifBtn=this.node.querySelector(".get-gif-btn")}render(t,e,n){super.render(t,e),this.components.fpsBox.textContent=`${n} FPS`,this.components.range.value=n}},S=n(7),L=n.n(S);var E=class{constructor(t){const e=document.createElement("div");e.innerHTML=L.a,this.components={header:new i,tools:new l,frames:new w(t),canvas:new b(t),preview:new k(t),layot:e.childNodes[0]}}render(t,e){const{body:n}=document;this.components.header.render(n),n.appendChild(this.components.layot),this.components.tools.render(this.components.layot.querySelector(".tools")),this.components.frames.render(this.components.layot.querySelector(".frames"),t),this.components.canvas.render(this.components.layot.querySelector(".canvas"),t),this.components.preview.render(this.components.layot.querySelector(".preview"),t,e.defaultFPS)}refreshCanvas(t){this.components.canvas.strokeRect(t)}refreshCanvasPath(t,e,n){this.components.canvas.strokePath(t,e,n)}resize(){const t=parseFloat(document.documentElement.clientHeight)-parseFloat(getComputedStyle(this.components.header.node).height)-parseFloat(getComputedStyle(document.querySelector(".layout")).paddingTop);this.components.canvas.node.style.height=`${t}px`}};var F=function(){const t=this;let e=0;const n=document.body.querySelector(".preview canvas").linkToClass;!function s(){const{fps:o}=t.state,r=1e3/o,i=Date.now();if(i-e>=r){e=i;const s=t.state.liveRects.getNext().querySelector("canvas").linkToFrameClass.state.colors;s&&(n.clear(),t.view.components.preview.strokeRect(s))}requestAnimationFrame(s)}()};var R=function(){const t=this.model.getBlackRect();this.state.rects.push(t),this.view.render(t,this.options),this.state.activeRect=t;const e=this.view.components.frames.node.querySelector("canvas");this.state.activeFrame=e.linkToFrameClass,this.state.activeFrame.enable(),this.setToolsState(),this.view.components.canvas.state.colors=t};function M(t){let e=t;if("UL"===e.nodeName)return null;for(;"LI"!==e.nodeName;)e=e.parentNode;return e}var T={addFrame:function(){const t=this.model.getBlackRect();this.state.rects.push(t),this.view.components.frames.addFrame(t,this.state.rects.length),this.view.components.canvas.strokeRect(t),this.state.activeRect=t;const e=this.view.components.frames.node.querySelectorAll("canvas");this.state.activeFrame&&this.state.activeFrame.disable(),this.state.activeFrame=e[e.length-1].linkToFrameClass,this.state.activeFrame.enable()},showFramePopup:function(t){if("CANVAS"===t.target.nodeName){let e=t.target;for(;"LI"!==e.nodeName;)e=e.parentNode;const n=e.parentNode.children;let s=0;const o=n.length;let r=n[s];for(;s<o&&r!==e;)r=n[s+=1];e.querySelector(".frame__tool--counter").textContent=s+1,t.target.linkToFrameClass.showPopup(),t.target.addEventListener("mouseout",function e(n){"frame__tool"!==n.relatedTarget.className.slice(0,11)&&(t.target.linkToFrameClass.hidePopup(),t.target.removeEventListener("mouseout",e))})}},frameActions:function(t){if("CANVAS"===t.target.nodeName){const e=t.target.linkToFrameClass.state.colors;this.state.activeRect=e,this.state.activeFrame&&this.state.activeFrame.disable(),this.state.activeFrame=t.target.linkToFrameClass,this.state.activeFrame.enable(),this.view.components.canvas.strokeRect(e)}else if(t.target.classList.contains("fa-copy")){let e=t.target;for(;"LI"!==e.nodeName;)e=e.parentNode;const n=e.querySelector("canvas"),s=JSON.parse(JSON.stringify(n.linkToFrameClass.state.colors));this.state.rects.push(s),this.view.components.frames.addFrame(s,this.state.rects.length),this.view.components.canvas.strokeRect(s),this.state.activeRect=s;const o=this.view.components.frames.node.querySelectorAll("canvas");this.state.activeFrame=o[o.length-1].linkToFrameClass}else if(t.target.classList.contains("fa-trash-alt")){let e=t.target;for(;"LI"!==e.nodeName;)e=e.parentNode;const n=e.parentNode.children;let s=0;const o=n.length;if(1===o)return;let r=n[s];for(;s<o&&r!==e;)r=n[s+=1];this.state.rects.splice(s,1),e.remove(),this.view.components.frames.recalcIndexes()}},drafFrame:function(t){const e=t.target;this.state.dragEl=e,this.state.dragPrevSib=e.nextSibling},dropFrame:function(t){const e=M(t.target);e&&e!==this.state.dragEl&&(e.firstElementChild.firstElementChild.classList.remove("frame--drop"),function(t,e){const n=t.parentNode;if(n!==e.parentNode)return;const s=t.nextSibling,o=e.nextSibling;(s===e&&!s||o===t&&!o)&&(n.firstNode===t?n.appendChild(e):n.appendChild(t)),s?n.insertBefore(e,s):n.appendChild(e),o?n.insertBefore(t,o):n.appendChild(t)}(e,this.state.dragEl),this.view.components.frames.recalcIndexes())},dragEnterFrame:function(t){const e=M(t.target);e&&e!==this.state.dragEl&&e.firstElementChild.firstElementChild.classList.add("frame--drop")},dragLeaveFrame:function(t){const e=M(t.target);e&&e!==this.state.dragEl&&e.firstElementChild.firstElementChild.classList.remove("frame--drop")}};n(9);var N={frame:T,preview:{changeFPS:function(t){const e=t.target.value;this.view.components.preview.components.fpsBox.textContent=`${e} FPS`,this.state.fps=e},fullScreenMode:function(){this.view.components.preview.components.canvasNode.requestFullscreen()},getGif:function(){const t=Array.from(this.state.liveRects).map(t=>t.querySelector("canvas").linkToFrameClass.state.colors),e=128,n=32,s=new window.GIF({workers:5,quality:1,height:e,width:e,transparent:"#ffffff"});function o(t,s){!function(t){t.clearRect(0,0,e,e)}(t);for(let o=0;o<n;o+=1)for(let r=0;r<n;r+=1)t.fillStyle=s[o%n][[r%n]],t.fillRect(Math.round(e/n*o),Math.round(e/n*r),Math.round(e/n),Math.round(e/n))}t.forEach(t=>{const[n,r]=function(){const t=document.createElement("canvas");return t.width=e,t.height=e,[t.getContext("2d"),t]}();o(n,t),s.addFrame(r,{delay:200})}),s.on("finished",t=>{!function(t,e){const n=document.createElement("a");n.style="display: none",document.body.appendChild(n);const s=window.URL.createObjectURL(t);n.href=s,n.download=e,n.click(),window.URL.revokeObjectURL(s)}(t,"New Gif.gif")}),s.render()}}};var P=class{constructor(t,e=[],n=[],s){this.node=t,this.handlers=e,this.cursors=n,this.shortKey=s,this.subtool=null,this.globalState=null}addToolhandlers(){this.handlers.forEach(t=>{t.add()}),this.subtool&&this.addToolhandlers.call(this.subtool)}removeToolhandlers(){this.handlers.forEach(t=>{t.remove()}),this.subtool&&this.removeToolhandlers.call(this.subtool)}addhandler(t){return this.handlers.push(t),this}set subTool(t){return this.subtool=t,this}};var q=class{constructor(t,e,n,s={},o=[]){this.target=t,this.event=e,this.handler=n,this.options=s,this.subHandlers=o}add(){this.target.addEventListener(this.event,this.handler,this.options)}remove(){this.target.removeEventListener(this.event,this.handler),this.subHandlers.forEach(t=>t.remove())}};var O={Tool:class extends P{constructor(t,e=[],n=[],s){super(t,e,n,s)}},getHandlers:function({canvas:t,convetCoordsToCanvasRect:e,globalState:n},s=!1){return new q(t,"mousedown",function(o){const r={x:t.getBoundingClientRect().left,y:t.getBoundingClientRect().top,xEnd:t.getBoundingClientRect().right,yEnd:t.getBoundingClientRect().bottom},i={x:Math.min(Math.max(0,o.clientX-r.x),r.xEnd),y:Math.min(Math.max(0,o.clientY-r.y),r.yEnd)};function a(t,o){const[r,i]=e(t,n.mainCanvasSize,n.parts);let[a,c]=[r,i];[a,c]=o?e(o,n.mainCanvasSize,n.parts):[r,i];const l=s?"rgba(0, 0, 0, 0)":n.currColor;n.view.refreshCanvasPath([r,i],[a,c],l),n.activeFrame.refreshCanvas()}a(i,i);let c=JSON.parse(JSON.stringify(i));const l=new q(t,"mousemove",function(t){const e={x:Math.min(Math.max(0,t.clientX-r.x),r.xEnd),y:Math.min(Math.max(0,t.clientY-r.y),r.yEnd)};c.x!==e.x||c.y,a(c,e),c=JSON.parse(JSON.stringify(e))}),h=new q(t,"mouseup",function(){l.remove()},{once:!0});l.add(),h.add()})}};var A={eraser:function(t,e,n){return new q(t,"mousedown",function(s){const o={x:t.getBoundingClientRect().left,y:t.getBoundingClientRect().top,xEnd:t.getBoundingClientRect().right,yEnd:t.getBoundingClientRect().bottom},r={x:Math.min(Math.max(0,s.clientX-o.x),o.xEnd),y:Math.min(Math.max(0,s.clientY-o.y),o.yEnd)},i="rgba(0, 0, 0, 0)";let[a,c]=e(r,n.mainCanvasSize,n.parts);n.activeRect[a][c]=i,n.view.refreshCanvas(n.activeRect),n.activeFrame.refreshCanvas();const l=new q(t,"mousemove",function(t){const s={x:Math.min(Math.max(0,t.clientX-o.x),o.xEnd),y:Math.min(Math.max(0,t.clientY-o.y),o.yEnd)};[a,c]=e(s,n.mainCanvasSize,n.parts),n.activeRect[a][c]=i,n.view.refreshCanvas(n.activeRect),n.activeFrame.refreshCanvas()}),h=new q(t,"mouseup",function(){l.remove()},{once:!0});l.add(),h.add()})},bucket:function({canvas:t,convetCoordsToCanvasRect:e,globalState:n}){return new q(t,"click",function(s){const o={x:t.getBoundingClientRect().left,y:t.getBoundingClientRect().top,xEnd:t.getBoundingClientRect().right,yEnd:t.getBoundingClientRect().bottom},r={x:Math.min(Math.max(0,s.clientX-o.x),o.xEnd),y:Math.min(Math.max(0,s.clientY-o.y),o.yEnd)},[i,a]=e(r,n.mainCanvasSize,n.parts),c=n.activeRect,l=c[i][a];!function t(e=[]){if(!e.length)return null;let s=[];return e.forEach(t=>{t[0]>=0&&t[1]>=0&&c[t[0]][t[1]]===l&&(c[t[0]][t[1]]=n.currColor,s=s.concat(function(t,e){const n=[];for(let s=-1;s<2;s+=1)for(let o=-1;o<2;o+=1)Math.abs(s)!==Math.abs(o)&&e[t[0]+s]&&e[t[0]+s][t[1]+o]===l&&n.push([t[0]+s,t[1]+o]);return n}(t,c)))}),t(s)}([[i,a]]),n.view.refreshCanvas(n.activeRect),n.activeFrame.refreshCanvas()})}};var B=class{constructor(t){this.mainController=t,this.tools={},this.parts=this.mainController.state.parts,this.view=this.mainController.view,this.state={currentTool:null}}init(){const t=document.body.querySelector(".palette"),e=document.body.querySelector(".canvas canvas"),n=t.querySelector("[data-tool-type=pen]"),s={canvas:e,convetCoordsToCanvasRect:this.mainController.model.constructor.convetCoordsToCanvasRect.bind(this),globalState:this.mainController.state};this.tools.pen=new P(n,[O.getHandlers(s)]);const o=t.querySelector("[data-tool-type=eraser]");this.tools.eraser=new P(o,[O.getHandlers(s,!0)]);const r=t.querySelector("[data-tool-type=bucket]");this.tools.bucket=new P(r,[A.bucket(s)]),t.addEventListener("click",t=>{let e=t.target,n=e.getAttribute("data-tool-type");for(;!n;)n=(e=e.parentNode).getAttribute("data-tool-type");"colorPicker"!==n&&this.swapTool(this.tools[n])})}setTool(t){this.state.currentTool=t,this.state.currentTool.node.classList.add("palette__tool--active"),this.state.currentTool.addToolhandlers(),this.state.currentTool.cursors.forEach(t=>{const e=t;e.target.style.cursor=e.cursor})}removeTool(){this.state.currentTool&&(this.state.currentTool.node.classList.remove("palette__tool--active"),this.state.currentTool.removeToolhandlers(),this.state.currentTool.cursors.forEach(t=>{t.target.style.cursor=""}),this.state.currentTool=null)}swapTool(t){this.removeTool(),this.setTool(t)}};class I{constructor(t){this.options={parts:t}}static getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}getRandomRect(){const t=this.options.parts;return new Array(t).fill(new Array(t).fill(0)).map(t=>t.map(()=>I.getRandomHexColor()))}getBlackRect(){const t=this.options.parts;return new Array(t).fill(new Array(t).fill(0)).map(t=>t.map(()=>"rgba(0, 0, 0, 0)"))}static convetCoordsToCanvasRect({x:t,y:e},n,s){const o=n.width/s,r=Math.trunc(t/o),i=n.height/s;return[r,Math.trunc(e/i)]}}var z={View:E,Controller:class{constructor(t,e,n){this.view=new t(n),this.model=new e(n),this.options={defaultFPS:5},this.state={parts:n,rects:[],activeRect:null,activeFrame:null,timer:null,fps:this.options.defaultFPS,mainCanvasSize:null,view:this.view,currColor:"#000",liveRects:this.view.components.frames.getItemsLiveList()},this.tools=new B(this)}init(){R.call(this);const t=F.bind(this);this.view.components.frames.components.btn.addEventListener("click",N.frame.addFrame.bind(this)),this.view.components.frames.components.frameList.addEventListener("click",N.frame.frameActions.bind(this)),this.view.components.frames.components.frameList.addEventListener("dragstart",N.frame.drafFrame.bind(this)),this.view.components.frames.components.frameList.addEventListener("dragover",t=>t.preventDefault()),this.view.components.frames.components.frameList.addEventListener("dragenter",N.frame.dragEnterFrame.bind(this)),this.view.components.frames.components.frameList.addEventListener("dragleave",N.frame.dragLeaveFrame.bind(this)),this.view.components.frames.components.frameList.addEventListener("drop",N.frame.dropFrame.bind(this)),this.view.components.preview.components.range.addEventListener("input",N.preview.changeFPS.bind(this)),this.view.components.preview.components.fullScreenBtn.addEventListener("click",N.preview.fullScreenMode.bind(this)),this.view.components.preview.components.gifBtn.addEventListener("click",N.preview.getGif.bind(this));const{colorPicker:e}=this.view.components.tools.components;e.addEventListener("input",()=>{this.state.currColor=e.value}),this.state.liveRects.getNext=function(){let t=0;return function(){return t>=this.length-1?t=0:t+=1,this[t]}}(),t();const n=this.view.components.canvas.getCanvasSize();this.state.mainCanvasSize=n,this.tools.init(),this.view.resize()}setToolsState(){return this}},Model:I};const{Controller:W,View:D,Model:j}=z;new W(D,j,32).init()},function(t,e){},,function(t,e){},function(t,e){},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){}]);