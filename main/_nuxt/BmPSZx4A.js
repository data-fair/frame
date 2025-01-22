var I=Object.defineProperty;var O=(s,r,t)=>r in s?I(s,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[r]=t;var l=(s,r,t)=>O(s,typeof r!="symbol"?r+"":r,t);import{b as N,c as W,d as $,e as j,f as F,g as D}from"./BvdkFZoE.js";const b=customElements,C=HTMLElement,{hasAttribute:B,setAttribute:P,removeAttribute:R,getAttribute:y}=C.prototype,{apply:f,setPrototypeOf:z,construct:G}=Reflect,{defineProperties:K}=Object,{get:S,define:V,whenDefined:U}=CustomElementRegistry.prototype,q=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected").get;function _(s){try{return String(s)}catch{}return""}function J(s){const{connectedCallback:r,disconnectedCallback:t,adoptedCallback:a,attributeChangedCallback:e,formAssociatedCallback:i,formDisabledCallback:o,formResetCallback:n,formStateRestoreCallback:h}=s.prototype,c=new Set(s.observedAttributes||[]),d=s.formAssociated||!1;return{LatestCtor:s,connectedCallback:r,disconnectedCallback:t,adoptedCallback:a,formAssociatedCallback:i,formDisabledCallback:o,formResetCallback:n,formStateRestoreCallback:h,attributeChangedCallback:e,observedAttributes:c,formAssociated:d}}function L(s,r){return new Set([...s.observedAttributes].filter(t=>!r.observedAttributes.has(t)))}function Q(s,r,t){const{observedAttributes:a,attributeChangedCallback:e}=t;if(a.size===0||!e)return;const i=L(r,t);i.size!==0&&K(s,{setAttribute:{value:function(n,h){if(i.has(n)){const c=y.call(this,n);P.call(this,n,h),e.call(this,n,c,_(h))}else P.call(this,n,h)},writable:!0,enumerable:!0,configurable:!0},removeAttribute:{value:function(n){if(i.has(n)){const h=y.call(this,n);R.call(this,n),e.call(this,n,h,null)}else R.call(this,n)},writable:!0,enumerable:!0,configurable:!0}})}function X(s,r){var t;return t=class extends C{constructor(e,i){if(super(),e)return v(this,s,e,i),this;e=p.get(r),e?v(this,s,e):(A.set(this,s),z(this,m.prototype))}connectedCallback(){var i;const e=u.get(this);if(e)(i=e.connectedCallback)==null||i.call(this);else{let o=g.get(r);o||g.set(r,o=new Set),o.add(this)}}disconnectedCallback(){var i;const e=u.get(this);if(e)(i=e.disconnectedCallback)==null||i.call(this);else{const o=g.get(r);o&&o.delete(this)}}adoptedCallback(){var i;const e=u.get(this);(i=e==null?void 0:e.adoptedCallback)==null||i.call(this)}formAssociatedCallback(){var i;const e=u.get(this);(i=e==null?void 0:e.formAssociatedCallback)==null||i.apply(this,arguments)}formDisabledCallback(){var i;const e=u.get(this);(i=e==null?void 0:e.formDisabledCallback)==null||i.apply(this,arguments)}formResetCallback(){var i;const e=u.get(this);(i=e==null?void 0:e.formResetCallback)==null||i.apply(this,arguments)}formStateRestoreCallback(){var i;const e=u.get(this);(i=e==null?void 0:e.formStateRestoreCallback)==null||i.apply(this,arguments)}attributeChangedCallback(...e){var o;const i=u.get(this);(s===i||i!=null&&i.observedAttributes.has(e[0]))&&((o=i.attributeChangedCallback)==null||o.apply(this,e))}},t.observedAttributes=s.observedAttributes,t.formAssociated=s.formAssociated,t}let w;const u=new WeakMap,A=new WeakMap,M=new WeakMap,k=new Map,p=new Map,E=new Map,x=new Map,H=new Map,g=new Map;function v(s,r,t,a){var o;z(s,t.LatestCtor.prototype),u.set(s,t),t!==r&&Q(s,r,t),w=s,G(t.LatestCtor,a||[]);const{observedAttributes:e,attributeChangedCallback:i}=t;if(e.size>0&&i){const n=L(r,t);n.size>0&&n.forEach(h=>{if(B.call(s,h)){const c=y.call(s,h);i.call(s,h,null,c)}})}f(q,s,[])&&((o=t.disconnectedCallback)==null||o.call(s))}function Y(s){if(!s||!s.prototype||typeof s.prototype!="object")throw new TypeError("The referenced constructor is not a constructor.");let r=M.get(s);return r||(r=J(s),M.set(s,r)),r}const m=function(...r){if(!new.target)throw new TypeError("Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");if(new.target===m)throw new TypeError("Illegal constructor");const t=w;if(t)return w=void 0,t;const{constructor:a}=this,e=E.get(a);if(!e||!e.PivotCtor)throw new TypeError("Illegal constructor");return new e.PivotCtor(e,r)};m.prototype=C.prototype;Object.assign(CustomElementRegistry.prototype,{get(...s){var t;if(this!==b)throw new TypeError("Illegal invocation");const{0:r}=s;return f(S,this,s)&&((t=p.get(r))==null?void 0:t.LatestCtor)},define(...s){var h;if(this!==b)throw new TypeError("Illegal invocation");const{0:r,1:t,2:a}=s;if(a&&a.extends)throw new DOMException("NotSupportedError: ");let e=f(S,this,[r]);if(e&&e!==((h=p.get(r))==null?void 0:h.PivotCtor))throw new DOMException(`Failed to execute 'define' on 'CustomElementRegistry': the name "${r}" has already been used with this registry`);const i=Y(t);if(E.get(t))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");p.set(r,i),E.set(t,i),e=k.get(r),e||(e=X(i,r),k.set(r,e),f(V,this,[r,e])),i.PivotCtor=e;const o=g.get(r);o&&(g.delete(r),o.forEach(c=>{const d=A.get(c);d&&(A.delete(c),v(c,d,i))}));const n=H.get(r);n&&n(t)},whenDefined(...s){if(this!==b)throw new TypeError("Illegal invocation");const{0:r}=s;return f(U,this,s).then(()=>{let t=x.get(r);if(!t){const a=p.get(r);if(a)return Promise.resolve(a.LatestCtor);let e;t=new Promise(i=>{e=i}),x.set(r,t),H.set(r,e)}return t})},constructor:m});window.HTMLElement=m;function Z(s){return s.endsWith("/")?s:s===""?"/":s.slice(0,s.lastIndexOf("/")+1)}function tt(s,r){if(r.origin!==s.origin)return r.href;if(r.pathname===s.pathname)return"";const t=Z(s.pathname);return r.pathname.startsWith(t)?r.pathname.replace(t,"./"):r.pathname}const et=s=>s.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&");function st(s){const r=[];for(const t of s.split(",")){const[a="*",e]=t.split(":"),i="^"+et(a).replace(/\\\*/g,"(.*)")+"$";r.push({regexp:new RegExp(i),append:e})}return r}function it(s,r,t,a){if(!t&&!a)return s.href;const e=new URL(r);if(t&&e.searchParams.forEach((i,o)=>{for(const n of t){if(n.append&&!o.startsWith(n.append)||o===a)continue;const h=n.append?o.replace(n.append,""):o;if(h.match(n.regexp)){s.searchParams.set(h,i);break}}}),a!==null){const i=e.searchParams.get(a);i&&(s.pathname=new URL(i,s).pathname)}return s.href}function rt(s,r,t,a,e){const i=new URL(t),o=new URL(r);if(a&&(i.searchParams.forEach((n,h)=>{for(const c of a){if(c.append&&!h.startsWith(c.append))continue;const d=c.append?h.replace(c.append,""):h;if(d.match(c.regexp)){o.searchParams.get(d)===null&&i.searchParams.delete(h);break}}}),o.searchParams.forEach((n,h)=>{for(const c of a){if(!h.match(c.regexp)||(s==null?void 0:s.searchParams.get(h))===n)continue;const d=c.append?c.append+h:h;i.searchParams.set(d,n);break}})),e!==null&&s){const n=tt(s,o);n?i.searchParams.set(e,n):i.searchParams.delete(e)}return i}function at(s){return s.vIframe===!0&&s.uiNotification!==void 0}function nt(s){if(typeof s=="string")return{type:"default",title:s};if(s.error&&!s.errorMsg){const r=s.error.response&&(s.error.response.data||s.error.response.status)||s.error.message||s.error;return s.msg?{type:"error",title:s.msg,detail:r}:{type:"error",title:r}}return s.type==="error"?{type:s.clientError?"warning":"error",title:s.msg,detail:s.errorMsg}:{type:s.type??"default",title:s.msg}}class ot{stateChange(r,t){r==="replace"&&window.history.replaceState(null,"",t),r==="push"&&window.history.pushState(null,"",t)}}const T=document.createElement("template");T.innerHTML=`<style>
  :host {
    display: block;
  }
  .d-frame-wrapper {
    height: 100%;
  }
  iframe.d-frame-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
</style><div class="d-frame-wrapper"><slot name="loading"><div style="min-height:150px;"></div></slot><iframe class="d-frame-iframe" style="visibility:hidden;position:absolute;height:0px;"></iframe></div>`;class ht extends HTMLElement{constructor(){super();l(this,"adapter");l(this,"connected",!1);l(this,"initialSrc");l(this,"srcUrl");l(this,"parsedSyncParams");l(this,"wrapperElement");l(this,"slotElement");l(this,"iframeElement");l(this,"width");l(this,"aspectRatioHeight");l(this,"resizedHeight");l(this,"randomId");l(this,"iframeLoaded",!1);l(this,"ready",!1);l(this,"iframeExtraAttrs",{});this.randomId=Math.random().toString(36).slice(-6);const t=T.content.cloneNode(!0);this.wrapperElement=t.childNodes[1],this.slotElement=this.wrapperElement.childNodes[0],this.iframeElement=this.wrapperElement.childNodes[1],this.iframeElement.addEventListener("load",()=>{this.iframeElement.getAttribute("src")&&(this.log("debug","iframe loaded"),this.iframeLoaded=!0,this.dispatchEvent(new CustomEvent("iframe-load")),this.resize!=="yes"&&!this.readyMessage&&(this.ready=!0,this.dispatchEvent(new CustomEvent("ready")),this.updateStyle()))}),this.attachShadow({mode:"open"}).appendChild(t),new ResizeObserver(i=>{(this.width===void 0||Math.abs(this.width-i[0].contentRect.width)>2)&&(this.width=i[0].contentRect.width,this.updateAspectRatioHeight())}).observe(this),this.adapter=new ot,window.addEventListener("message",i=>this.onMessage(i))}get id(){return this.getAttribute("id")??this.randomId}set id(t){this.setAttribute("id",t)}get debug(){return this.hasAttribute("debug")}set debug(t){t?this.setAttribute("debug",""):this.removeAttribute("debug")}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",t)}get aspectRatio(){const t=this.getAttribute("aspect-ratio");return t===""?"auto":t}set aspectRatio(t){t!==null?this.setAttribute("aspect-ratio",t):this.removeAttribute("aspect-ratio")}get height(){return this.getAttribute("height")}set height(t){t?this.setAttribute("height",t):this.removeAttribute("height")}set resize(t){this.setAttribute("resize",t)}get resize(){const t=this.getAttribute("resize");return t===null?"auto":t===""?"yes":t}get syncParams(){return this.getAttribute("sync-params")}set syncParams(t){t!==null?this.setAttribute("sync-params",t):this.removeAttribute("sync-params")}get syncPath(){const t=this.getAttribute("sync-path");return t===null?null:t||"p"}set syncPath(t){t!==null?this.setAttribute("sync-params",t):this.removeAttribute("sync-params")}get stateChangeEvents(){return this.hasAttribute("state-change-events")}set stateChangeEvents(t){t?this.setAttribute("state-change-events",""):this.removeAttribute("state-change-events")}get readyMessage(){return this.hasAttribute("ready-message")}set readyMessage(t){t?this.setAttribute("ready-message",""):this.removeAttribute("ready-message")}get actualAspectRatio(){return this.aspectRatio!=="auto"?Number(this.aspectRatio):!this.width||this.width<500?1:this.width<800?4/3:this.width<1200?16/9:21/9}onMessage(t){var a;if(t.source===((a=this.iframeElement)==null?void 0:a.contentWindow)){const e=t.data;if(this.log("debug","received message from child",e),Array.isArray(t.data)){if(N(e)&&(this.postMessageToChild(["df-parent","init",{id:this.id,debug:this.debug,resize:this.resize,syncParams:this.syncParams!==null,syncPath:this.syncPath!==null,stateChangeEvents:this.stateChangeEvents}]),this.init()),W(e)&&(this.resizedHeight=e[2],this.resize==="yes"&&!this.ready&&!this.readyMessage&&(this.ready=!0,this.dispatchEvent(new CustomEvent("ready"))),this.updateStyle()),$(e)){if(this.parsedSyncParams||this.syncPath){const i=rt(this.srcUrl,e[3],window.location.href,this.parsedSyncParams,this.syncPath);i.href!==window.location.href&&this.adapter.stateChange(e[2],i)}this.stateChangeEvents&&this.dispatchEvent(new CustomEvent("state-change",{detail:[e[2],e[3]]}))}j(e)&&this.dispatchEvent(new CustomEvent("message",{detail:e[2]})),F(e)&&this.dispatchEvent(new CustomEvent("notif",{detail:e[2]})),D(e)&&(this.ready=!0,this.dispatchEvent(new CustomEvent("ready")),this.updateStyle())}else at(e)&&this.dispatchEvent(new CustomEvent("notif",{detail:nt(e.uiNotification)}))}}init(){this.initialSrc=this.src}postMessageToChild(t){var a,e;this.log("debug","send message to child",t),(e=(a=this.iframeElement)==null?void 0:a.contentWindow)==null||e.postMessage(t)}updateSrc(){if(!this.connected)return;this.srcUrl=new URL(this.src.startsWith("/")?window.location.origin+this.src:this.src);const t=it(this.srcUrl,window.location.href,this.parsedSyncParams,this.syncPath);this.initialSrc?this.postMessageToChild(["df-parent","updateSrc",t]):(this.log("debug","set src attribute of iframe: "+t),this.iframeElement.setAttribute("src",t))}updateStyle(){if(!this.connected)return;let t;this.resizedHeight?(this.log("debug","height of iframe based on resize message: "+this.resizedHeight),t=this.resizedHeight+"px"):this.height?(this.log("debug","height of iframe based on direct attribute: "+this.height),t=this.height):this.aspectRatio!==null&&(this.log("debug","height of iframe based on aspect ratio: "+this.aspectRatioHeight),t=this.aspectRatioHeight+"px"),t!==void 0?(this.log("debug","set height iframe wrapper: "+t),this.wrapperElement.setAttribute("style",`height:${t};min-height:0;`)):this.wrapperElement.setAttribute("style",""),this.resize==="yes"||this.resize==="auto"&&this.resizedHeight?this.iframeElement.getAttribute("scrolling")!=="no"&&(this.log("debug","set scrolling attribute of iframe: no"),this.iframeElement.setAttribute("scrolling","no")):this.iframeElement.getAttribute("scrolling")!=="auto"&&(this.log("debug","set scrolling attribute of iframe: auto"),this.iframeElement.setAttribute("scrolling","auto")),this.ready&&this.iframeElement.getAttribute("style")!==""&&(this.log("debug","toggle loading slot and iframe visibility"),this.iframeElement.setAttribute("style",""),this.slotElement.setAttribute("style","display:none;"))}updateAspectRatioHeight(){this.width&&this.aspectRatio!==null&&(this.resizedHeight||this.height||(this.aspectRatioHeight=Math.ceil(this.width/this.actualAspectRatio),this.updateStyle()))}updateIframeExtraAttrs(){const t=this.iframeExtraAttrs,a={};for(const e of this.getAttributeNames())if(e.startsWith("iframe-")){const i=this.getAttribute(e);if(i!==null){const o=e.slice(7);a[o]=i}}this.log("debug","update iframe extra attributes",t,a);for(const e of Object.keys(t))e in a||this.iframeElement.removeAttribute(e);for(const e of Object.keys(a))a[e]!==t[e]&&this.iframeElement.setAttribute(e,a[e])}log(t,...a){t==="debug"&&!this.debug||(t==="debug"&&console.timeLog(`d-frame:${this.id}`,...a),t==="info"&&console.info(`d-frame:${this.id}`,...a))}connectedCallback(){if(!this.debug){const t=window.localStorage.getItem("debug");if(t){const a=t.split(",");(a.includes("d-frame")||a.includes("d-frame:"+this.id))&&(this.debug=!0)}}if(this.debug&&console.time(`d-frame:${this.id}`),!this.hasAttribute("src"))throw new Error("src is a required attribute");this.log("debug","connected"),this.connected=!0,this.adapter.onStateChange&&this.adapter.onStateChange(()=>{this.updateSrc()}),this.syncParams!==null&&(this.parsedSyncParams=st(this.syncParams||"*")),this.updateStyle(),this.updateIframeExtraAttrs(),this.updateSrc()}disconnectedCallback(){this.log("debug","disconnected"),this.debug&&console.timeEnd(`d-frame:${this.id}`)}static get observedAttributes(){return["src","aspect-ratio","height","sync-params","sync-path"]}attributeChangedCallback(t,a,e){t==="aspect-ratio"&&this.updateAspectRatioHeight(),t.startsWith("iframe-")&&this.updateIframeExtraAttrs(),this.connected&&(this.log("debug","attribute change",t,a,e),t==="src"&&this.updateSrc(),t==="height"&&this.updateStyle(),t==="sync-params"&&this.updateSrc(),t==="sync-path"&&this.updateSrc())}}customElements.define("d-frame",ht);
