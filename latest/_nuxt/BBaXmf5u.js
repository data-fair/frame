var c=Object.defineProperty;var u=(n,t,e)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>u(n,typeof t!="symbol"?t+"":t,e);import{i as l}from"./BUDPeZol.js";import{V as m}from"./RrCAbUQI.js";import{V as g,a as f}from"./DiaRoCML.js";import{d as p,r as b,t as w,C as k,A as r,z as d,B as h,x as C,E as T,F as v}from"./DqtgKJR1.js";import"./DoFuM2_w.js";import"./BpPoJlk5.js";import"./4IeEI1gc.js";import"./CmvS8wms.js";const y=["animationstart","webkitAnimationStart","animationiteration","webkitAnimationIteration","animationend","webkitAnimationEnd","input","mouseup","mousedown","orientationchange","afterprint","beforeprint","readystatechange","touchstart","touchend","touchcancel","transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart","transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration","transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend","resize"];class M{constructor(){a(this,"pendingCheckHeight",!1);a(this,"debug",!1);a(this,"throttledCheckHeight");const t=()=>{this.checkHeight(),this.pendingCheckHeight=!1};this.throttledCheckHeight=()=>{this.pendingCheckHeight||(this.pendingCheckHeight=!0,requestAnimationFrame(t))},!(typeof window>"u")&&(window.addEventListener("message",e=>this.onMessage(e)),this.postMessageToParent("init"))}log(t,...e){t==="debug"&&!this.debug||(t==="debug"&&console.debug("d-frame-content",...e),t==="info"&&console.info("d-frame-content",...e))}onMessage(t){if(t.source===window.parent&&typeof t.data=="object"&&t.data.dFrame==="parent"){const e=t.data;l(e)&&(this.debug=!!e.data.debug,this.init())}}postMessageToParent(t,e){const i={dFrame:"child",type:t,data:e};window.parent.postMessage(i)}init(){this.log("debug","init"),this.checkHeight(),this.createMutationObserver(),this.createWindowEventListeners()}createMutationObserver(){const t=document.querySelector("body");if(!t)throw new Error("DFrameContentManager was initialized before the HTML body");new window.MutationObserver(this.throttledCheckHeight).observe(t,{attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0})}createWindowEventListeners(){for(const t of y)window.addEventListener(t,this.throttledCheckHeight,{passive:!0})}checkHeight(){const t=document.querySelectorAll("[data-iframe-height]");let e=0;for(const i of t){const o=i.getAttribute("data-iframe-height"),s=i.getBoundingClientRect().bottom+parseFloat(getComputedStyle(i).getPropertyValue("margin-bottom"))+(o?parseFloat(o):0);s>e&&(e=s)}this.postMessageToParent("height",e)}}new M;const z=p({__name:"resize",setup(n){const t=b(0);return(e,i)=>(w(),k(f,{variant:"outlined",color:"primary"},{default:r(()=>[d(g,null,{default:r(()=>[i[2]||(i[2]=h(" This is a simple frame content ")),C("div",{style:T(`height:${v(t)}px;`)},null,4),d(m,{color:"primary",variant:"elevated","data-iframe-height":"20",onClick:i[0]||(i[0]=o=>t.value+=50)},{default:r(()=>i[1]||(i[1]=[h(" Add 50px ")])),_:1})]),_:1})]),_:1}))}});export{z as default};
