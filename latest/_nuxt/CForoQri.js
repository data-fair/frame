var r=Object.defineProperty;var h=(s,t,e)=>t in s?r(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var n=(s,t,e)=>h(s,typeof t!="symbol"?t+"":t,e);import{i as d,a as c}from"./AsORjb4S.js";const g=["animationstart","webkitAnimationStart","animationiteration","webkitAnimationIteration","animationend","webkitAnimationEnd","input","mouseup","mousedown","orientationchange","afterprint","beforeprint","readystatechange","touchstart","touchend","touchcancel","transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart","transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration","transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend","resize"];class f{constructor(t){n(this,"initialized",!1);n(this,"options");n(this,"pendingCheckHeight",!1);n(this,"debug",!1);n(this,"throttledCheckHeight");n(this,"lastHeight",0);this.options=t??{};const e=()=>{this.checkHeight(),this.pendingCheckHeight=!1};this.throttledCheckHeight=()=>{this.pendingCheckHeight||(this.pendingCheckHeight=!0,requestAnimationFrame(e))},!(typeof window>"u")&&(window.addEventListener("message",i=>this.onMessage(i)),this.postMessageToParent(["df-child","init"]))}log(t,...e){t==="debug"&&!this.debug||(t==="debug"&&console.debug("d-frame-content",...e),t==="info"&&console.info("d-frame-content",...e))}onMessage(t){if(t.source===window.parent&&Array.isArray(t.data)){const e=t.data;d(e)&&(this.debug=!!e[2].debug,e[2].resize!=="no"&&this.initResize(),(e[2].syncParams||e[2].syncPath)&&this.initSyncParams(),this.initialized=!0),c(e)&&(this.options.updateSrc?this.options.updateSrc(e[2].startsWith("/")?window.location.origin+e[2]:e[2]):window.location.href=e[2])}}postMessageToParent(t){window.parent.postMessage(t)}sendNotif(t){this.postMessageToParent(["df-child","notif",t])}sendMessage(t){this.postMessageToParent(["df-child","custom",t])}initResize(){this.log("debug","initResize"),this.checkHeight(),this.createMutationObserver(),this.createWindowEventListeners()}initSyncParams(){this.log("debug","initSyncParams");const t=window.history.replaceState,e=(...a)=>{const o=t.apply(window.history,a);return this.postMessageToParent(["df-child","stateChange","push",window.location.href]),o};window.history.pushState=e;const i=(...a)=>{const o=t.apply(window.history,a);return this.postMessageToParent(["df-child","stateChange","replace",window.location.href]),o};window.history.replaceState=i}createMutationObserver(){const t=document.querySelector("body");if(!t)throw new Error("DFrameContentManager was initialized before the HTML body");new window.MutationObserver(this.throttledCheckHeight).observe(t,{attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0})}createWindowEventListeners(){for(const t of g)window.addEventListener(t,this.throttledCheckHeight,{passive:!0})}checkHeight(){const t=document.querySelectorAll("[data-iframe-height]");let e=0;for(const i of t){const a=i.getAttribute("data-iframe-height"),o=i.getBoundingClientRect().bottom+parseFloat(getComputedStyle(i).getPropertyValue("margin-bottom"))+(a?parseFloat(a):0);o>e&&(e=o)}e!==this.lastHeight&&(this.postMessageToParent(["df-child","height",e]),this.lastHeight=e)}}export{f as D};
