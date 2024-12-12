var p=Object.defineProperty;var f=(e,i,t)=>i in e?p(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;var o=(e,i,t)=>f(e,typeof i!="symbol"?i+"":i,t);import{b as g,c as m,d as b}from"./C0vl7zmO.js";function y(e){return e.endsWith("/")?e:e===""?"/":e.slice(0,e.lastIndexOf("/")+1)}function w(e,i){if(i.origin!==e.origin)return i.href;if(i.pathname===e.pathname)return"";const t=y(e.pathname);return i.pathname.startsWith(t)?i.pathname.replace(t,"./"):i.pathname}const A=e=>e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&");function S(e){const i=[];for(const t of e.split(",")){const[s="*",a]=t.split(":"),r="^"+A(s).replace(/\\\*/g,"(.*)")+"$";i.push({regexp:new RegExp(r),append:a})}return i}function P(e,i,t,s){if(!t&&!s)return e.href;const a=new URL(i);if(t&&a.searchParams.forEach((r,l)=>{for(const h of t){if(h.append&&!l.startsWith(h.append)||l===s)continue;const n=h.append?l.replace(h.append,""):l;if(n.match(h.regexp)){e.searchParams.set(n,r);break}}}),s!==null){const r=a.searchParams.get(s);r&&(e.pathname=new URL(r,e).pathname)}return e.href}function z(e,i,t,s,a){const r=new URL(t),l=new URL(i);if(s&&(r.searchParams.forEach((h,n)=>{for(const c of s){if(c.append&&!n.startsWith(c.append))continue;const d=c.append?n.replace(c.append,""):n;if(d.match(c.regexp)){l.searchParams.get(d)===null&&r.searchParams.delete(n);break}}}),l.searchParams.forEach((h,n)=>{for(const c of s){if(!n.match(c.regexp)||(e==null?void 0:e.searchParams.get(n))===h)continue;const d=c.append?c.append+n:n;r.searchParams.set(d,h);break}})),a!==null&&e){const h=w(e,l);h?r.searchParams.set(a,h):r.searchParams.delete(a)}return r}class E{stateChange(i,t){i==="replace"&&window.history.replaceState(null,"",t),i==="push"&&window.history.pushState(null,"",t)}}const u=document.createElement("template");u.innerHTML=`<style>
  :host {
    display: block;
  }
  iframe.d-frame-iframe {
    display: block;
    width: 100%;
    border: none;
    max-height: 100%;
  }
</style><slot name="loader"></slot><iframe class="d-frame-iframe" frameborder="0">`;class R extends HTMLElement{constructor(){super();o(this,"adapter");o(this,"connected",!1);o(this,"initialSrc");o(this,"srcUrl");o(this,"parsedSyncParams");o(this,"iframeElement");o(this,"slotElement");o(this,"width");o(this,"aspectRatioHeight");o(this,"resizedHeight");const t=u.content.cloneNode(!0);this.slotElement=t.childNodes[1],this.resize!=="yes"&&(this.slotElement.style.display="none"),this.iframeElement=t.childNodes[2],this.iframeElement.setAttribute("scrolling",this.resize==="yes"?"no":"auto"),this.iframeElement.setAttribute("loading",this.lazy?"lazy":"eager"),this.attachShadow({mode:"open"}).appendChild(t),new ResizeObserver(r=>{this.width!==r[0].contentRect.width&&(this.width=r[0].contentRect.width,this.updateAspectRatioHeight())}).observe(this),this.adapter=new E,window.addEventListener("message",r=>this.onMessage(r))}get debug(){return this.hasAttribute("debug")}set debug(t){t?this.setAttribute("debug",""):this.removeAttribute("debug")}get lazy(){return this.hasAttribute("lazy")}set lazy(t){t?this.setAttribute("lazy",""):this.removeAttribute("lazy")}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",t)}get aspectRatio(){return this.getAttribute("aspect-ratio")??"auto"}set aspectRatio(t){this.setAttribute("aspect-ratio",t)}get height(){return this.getAttribute("height")}set height(t){t?this.setAttribute("height",t):this.removeAttribute("height")}set resize(t){this.setAttribute("resize",t)}get resize(){const t=this.getAttribute("resize");return t===null?"auto":t===""?"yes":t}get syncParams(){return this.getAttribute("sync-params")}set syncParams(t){t!==null?this.setAttribute("sync-params",t):this.removeAttribute("sync-params")}get syncPath(){const t=this.getAttribute("sync-path");return t===null?null:t||"p"}set syncPath(t){t!==null?this.setAttribute("sync-params",t):this.removeAttribute("sync-params")}get actualAspectRatio(){return this.aspectRatio!=="auto"?Number(this.aspectRatio):!this.width||this.width<500?1:this.width<800?4/3:this.width<1200?16/9:21/9}onMessage(t){var s;if(t.source===((s=this.iframeElement)==null?void 0:s.contentWindow)&&Array.isArray(t.data)){const a=t.data;if(this.log("debug","received message from child",a),g(a)&&(this.postMessageToChild(["df-parent","init",{debug:this.debug,resize:this.resize,syncParams:this.syncParams!==null,syncPath:this.syncPath!==null}]),this.init()),m(a)&&(this.resizedHeight=a[2],this.updateStyle()),b(a)&&(this.parsedSyncParams||this.syncPath)){const r=z(this.srcUrl,a[3],window.location.href,this.parsedSyncParams,this.syncPath);r.href!==window.location.href&&this.adapter.stateChange(a[2],r)}}}init(){this.initialSrc=this.src}postMessageToChild(t){var s,a;this.log("debug","send message to child",t),(a=(s=this.iframeElement)==null?void 0:s.contentWindow)==null||a.postMessage(t)}updateSrc(){if(!this.connected)return;this.srcUrl=new URL(this.src.startsWith("/")?window.location.origin+this.src:this.src);const t=P(this.srcUrl,window.location.href,this.parsedSyncParams,this.syncPath);this.initialSrc?this.postMessageToChild(["df-parent","updateSrc",t]):this.iframeElement.setAttribute("src",t)}updateStyle(){let t="";(this.resize==="yes"||this.resize==="auto"&&this.resizedHeight)&&(this.iframeElement.setAttribute("scrolling","no"),this.resizedHeight?(this.slotElement.style.display="none",t+=`height:${this.resizedHeight}px;`):this.height?(this.slotElement.style.display="none",t+=`height:${this.height};`):this.aspectRatio!=="auto"?(this.slotElement.style.display="none",t+=`height:${this.aspectRatioHeight}px;`):(this.slotElement.style.display="block",t+="height:0;")),(this.resize==="no"||this.resize==="auto"&&!this.resizedHeight)&&(this.iframeElement.setAttribute("scrolling","auto"),this.height?t+=`height:${this.height};`:t+=`height:${this.aspectRatioHeight}px;`),this.iframeElement.setAttribute("style",t)}updateAspectRatioHeight(){this.width&&(this.resizedHeight||this.height||(this.aspectRatioHeight=this.width/this.actualAspectRatio,this.updateStyle()))}log(t,...s){t==="debug"&&!this.debug||(t==="debug"&&console.debug("d-frame",...s),t==="info"&&console.info("d-frame",...s))}connectedCallback(){if(!this.hasAttribute("src"))throw new Error("src is a required attribute");this.log("debug","connected"),this.connected=!0,this.adapter.onStateChange&&this.adapter.onStateChange(()=>{this.updateSrc()}),this.syncParams!==null&&(this.parsedSyncParams=S(this.syncParams||"*")),this.updateStyle(),this.updateSrc()}static get observedAttributes(){return["src","aspect-ratio","height","sync-params","sync-path"]}attributeChangedCallback(t,s,a){this.log("debug","attribute change",t,s,a),t==="aspect-ratio"&&this.updateAspectRatioHeight(),t==="src"&&this.updateSrc(),t==="height"&&this.updateStyle(),t==="sync-params"&&this.updateSrc(),t==="sync-path"&&this.updateSrc()}}customElements.define("d-frame",R);