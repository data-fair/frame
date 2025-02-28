var d=Object.defineProperty;var c=(a,t,e)=>t in a?d(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>c(a,typeof t!="symbol"?t+"":t,e);import{i as l,a as u,b as f}from"./DTK_wLMk.js";const g=["animationstart","webkitAnimationStart","animationiteration","webkitAnimationIteration","animationend","webkitAnimationEnd","input","mouseup","mousedown","orientationchange","afterprint","beforeprint","readystatechange","touchstart","touchend","touchcancel","transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart","transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration","transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend","resize"];class b{constructor(t){n(this,"initialized",!1);n(this,"options");n(this,"pendingCheckHeight",!1);n(this,"debug",!1);n(this,"id");n(this,"throttledCheckHeight");n(this,"lastHeight",0);n(this,"currentSyncedMouseEvents",new Set);this.options=t??{};const e=()=>{this.checkHeight(),this.pendingCheckHeight=!1};this.throttledCheckHeight=()=>{this.pendingCheckHeight||(this.pendingCheckHeight=!0,requestAnimationFrame(e))},!(typeof window>"u")&&(window.addEventListener("message",i=>this.onMessage(i)),this.postMessageToParent(["df-child","init"]))}log(t,...e){t==="debug"&&!this.debug||(t==="debug"&&console.timeLog(`d-frame:${this.id}:content`,...e),t==="info"&&console.info(`d-frame:${this.id}:content`,...e),t==="error"&&console.error(`d-frame:${this.id}:content`,...e))}onMessage(t){if(t.source===window.parent&&Array.isArray(t.data)){const e=t.data;if(l(e)&&(this.id=e[2].id,this.debug=!!e[2].debug,this.debug&&console.time(`d-frame:${this.id}:content`),this.log("debug","init handshake is ok",e,this.options),e[2].src&&e[2].src!==window.location.href&&this.log("error",`src mismatch at init, maybe the frame navigated before the initialization handshake: ${window.location.href} !== ${e[2].src}`),e[2].resize!=="no"&&this.initResize(),(e[2].syncParams||e[2].syncPath||e[2].stateChangeEvents)&&this.initStateChangeWatcher(),e[2].mouseEvents&&this.initMouseEvents(e[2].mouseEvents),this.initialized=!0),u(e)){const i=e[2].startsWith("/")?window.location.origin+e[2]:e[2];if(i===window.location.href)return;this.log("debug",`update src ${window.location.href} -> ${i}`),this.options.updateSrc?this.options.updateSrc(i,this):(this.log("debug","no updateSrc method available, falling back to updating window.location.href",i),window.location.href=i)}f(e)&&this.applySyncedMouseEvent(e)}}postMessageToParent(t){window.parent.postMessage(t)}sendNotif(t){this.postMessageToParent(["df-child","notif",t])}sendMessage(t){this.postMessageToParent(["df-child","custom",t])}ready(){this.postMessageToParent(["df-child","ready"])}initMouseEvents(t){this.log("debug","initMouseEvents");for(const e of t)document.addEventListener(e,i=>{i instanceof MouseEvent&&this.transmitSyncedMouseEvent(["df-global","mouse",e,{altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}])},!0)}transmitSyncedMouseEvent(t){this.currentSyncedMouseEvents.has(t[2])?this.currentSyncedMouseEvents.delete(t[2]):this.postMessageToParent(t)}applySyncedMouseEvent(t){this.currentSyncedMouseEvents.add(t[2]);const e=new MouseEvent(t[2],{bubbles:!0,cancelable:!0,view:window,...t[3]});document.body.dispatchEvent(e)}initResize(){this.log("debug","initResize"),this.checkHeight(),this.createMutationObserver(),this.createWindowEventListeners()}initStateChangeWatcher(){this.log("debug","initStateChangeWatcher");const t=window.history.replaceState,e=(...s)=>{const r=window.location.href,o=t.apply(window.history,s);return window.location.href!==r&&this.postMessageToParent(["df-child","stateChange","push",window.location.href]),o};window.history.pushState=e;const i=(...s)=>{const r=window.location.href,o=t.apply(window.history,s);return window.location.href!==r&&this.postMessageToParent(["df-child","stateChange","replace",window.location.href]),o};window.history.replaceState=i}createMutationObserver(){const t=document.querySelector("body");if(!t)throw new Error("DFrameContentManager was initialized before the HTML body");new window.MutationObserver(this.throttledCheckHeight).observe(t,{attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0})}createWindowEventListeners(){for(const t of g)window.addEventListener(t,this.throttledCheckHeight,{passive:!0})}checkHeight(){const t=document.querySelectorAll("[data-iframe-height]");let e=0,i=0;for(const s of t){const r=s.getAttribute("data-iframe-height"),o=s.getBoundingClientRect().bottom+parseFloat(getComputedStyle(s).getPropertyValue("margin-bottom")),h=r?o+parseFloat(r):o;o>e&&(e=o),h>i&&(i=h)}i=Math.ceil(i),e>0&&i!==this.lastHeight&&(this.postMessageToParent(["df-child","height",i]),this.lastHeight=i)}}export{b as D};
