import{d as ot,r as rt,t as at,C as st,A as ie,z as Pe,B as Ae,x as ct,E as lt,F as ut}from"./B1i_bsvS.js";import{V as ft}from"./BYco_iSd.js";import{V as dt,a as mt}from"./_ZAlBLLe.js";import"./kU0lyQP8.js";import"./Ba5KhyXO.js";import"./C8uJUVgf.js";import"./BTlTfSSW.js";var gt={exports:{}};(function(oe){(function(l){if(console.error("setup contentWindow"),typeof window>"u")return;var b=!0,E=10,W="",V=0,P="",j=null,re="",A=!1,Re={resize:1,click:1},q=128,ae=!0,L=1,U="bodyOffset",h=U,se=!0,ce="",k={},I=32,le=null,_=!1,J=!1,R="[iFrameSizer]",ue=R.length,D="",fe={max:1,min:1,bodyScroll:1,documentElementScroll:1},X="child",de=window.parent,z="*",Y=0,B=!1,me=null,x=16,N=1,ge="scroll",p=ge,De=window,K=function(){T("onMessage function not defined")},Q=function(){},G=function(){},Z={height:function(){return T("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return T("Custom width calculation function not defined"),document.body.scrollWidth}},$={},he=!1;function pe(){}try{var ve=Object.create({},{passive:{get:function(){he=!0}}});window.addEventListener("test",pe,ve),window.removeEventListener("test",pe,ve)}catch{}function F(e,t,n,i){e.addEventListener(t,n,he?i||{}:!1)}function Be(e,t,n){e.removeEventListener(t,n,!1)}function ye(e){return e.charAt(0).toUpperCase()+e.slice(1)}function He(e){var t,n,i,a=null,f=0,m=function(){f=Date.now(),a=null,i=e.apply(t,n),a||(t=n=null)};return function(){var d=Date.now();f||(f=d);var s=x-(d-f);return t=this,n=arguments,s<=0||s>x?(a&&(clearTimeout(a),a=null),f=d,i=e.apply(t,n),a||(t=n=null)):a||(a=setTimeout(m,s)),i}}function we(e){return R+"["+D+"] "+e}function o(e){_&&typeof window.console=="object"&&console.log(we(e))}function T(e){typeof window.console=="object"&&console.warn(we(e))}function We(){Ve(),o("Initialising iFrame ("+window.location.href+")"),qe(),_e(),ee("background",W),ee("padding",re),Ke(),Me(),Ee(),Je(),Ze(),Ge(),Ie(),k=Qe(),O("init","Init message from host page"),Q()}function Ve(){function e(n){return n==="true"}var t=ce.slice(ue).split(":");D=t[0],V=l===t[1]?V:Number(t[1]),A=l===t[2]?A:e(t[2]),_=l===t[3]?_:e(t[3]),I=l===t[4]?I:Number(t[4]),b=l===t[6]?b:e(t[6]),P=t[7],h=l===t[8]?h:t[8],W=t[9],re=t[10],Y=l===t[11]?Y:Number(t[11]),k.enable=l===t[12]?!1:e(t[12]),X=l===t[13]?X:t[13],p=l===t[14]?p:t[14],J=l===t[15]?J:e(t[15])}function je(e){var t=e.split("Callback");if(t.length===2){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],T("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function qe(){function e(){var n=window.iFrameResizer;o("Reading data from page: "+JSON.stringify(n)),Object.keys(n).forEach(je,n),K="onMessage"in n?n.onMessage:K,Q="onReady"in n?n.onReady:Q,z="targetOrigin"in n?n.targetOrigin:z,h="heightCalculationMethod"in n?n.heightCalculationMethod:h,p="widthCalculationMethod"in n?n.widthCalculationMethod:p}function t(n,i){return typeof n=="function"&&(o("Setup custom "+i+"CalcMethod"),Z[i]=n,n="custom"),n}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),h=t(h,"height"),p=t(p,"width")),o("TargetOrigin for parent set to: "+z)}function Ue(e,t){return t.indexOf("-")!==-1&&(T("Negative CSS value ignored for "+e),t=""),t}function ee(e,t){l!==t&&t!==""&&t!=="null"&&(document.body.style[e]=t,o("Body "+e+' set to "'+t+'"'))}function _e(){l===P&&(P=V+"px"),ee("margin",Ue("margin",P))}function Je(){document.documentElement.style.height="",document.body.style.height="",o('HTML & body height set to "auto"')}function g(e){var t={add:function(n){function i(){O(e.eventName,e.eventType)}$[n]=i,F(window,n,i,{passive:!0})},remove:function(n){var i=$[n];delete $[n],Be(window,n,i)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),o(ye(e.method)+" event listener: "+e.eventType)}function be(e){g({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),g({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),g({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),g({method:e,eventType:"Input",eventName:"input"}),g({method:e,eventType:"Mouse Up",eventName:"mouseup"}),g({method:e,eventType:"Mouse Down",eventName:"mousedown"}),g({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),g({method:e,eventType:"Print",eventNames:["afterprint","beforeprint"]}),g({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),g({method:e,eventType:"Touch Start",eventName:"touchstart"}),g({method:e,eventType:"Touch End",eventName:"touchend"}),g({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),g({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),g({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),g({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),X==="child"&&g({method:e,eventType:"IFrame Resized",eventName:"resize"})}function Te(e,t,n,i){return t!==e&&(e in n||(T(e+" is not a valid option for "+i+"CalculationMethod."),e=t),o(i+' calculation method set to "'+e+'"')),e}function Me(){h=Te(h,U,M,"height")}function Ee(){p=Te(p,ge,S,"width")}function Ie(){b===!0?(be("add"),et()):o("Auto Resize disabled")}function Xe(){j!==null&&j.disconnect()}function Ye(){be("remove"),Xe(),clearInterval(le)}function Ke(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function Qe(){function e(){return{x:window.pageXOffset===l?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===l?document.documentElement.scrollTop:window.pageYOffset}}function t(s){var u=s.getBoundingClientRect(),c=e();return{x:parseInt(u.left,10)+parseInt(c.x,10),y:parseInt(u.top,10)+parseInt(c.y,10)}}function n(s){function u(w){var C=t(w);o("Moving to in page link (#"+c+") at x: "+C.x+" y: "+C.y),v(C.y,C.x,"scrollToOffset")}var c=s.split("#")[1]||s,r=decodeURIComponent(c),y=document.getElementById(r)||document.getElementsByName(r)[0];l===y?(o("In page link (#"+c+") not found in iFrame, so sending to parent"),v(0,0,"inPageLink","#"+c)):u(y)}function i(){var s=window.location.hash,u=window.location.href;s!==""&&s!=="#"&&n(u)}function a(){function s(u){function c(r){r.preventDefault(),n(this.getAttribute("href"))}u.getAttribute("href")!=="#"&&F(u,"click",c)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),s)}function f(){F(window,"hashchange",i)}function m(){setTimeout(i,q)}function d(){Array.prototype.forEach&&document.querySelectorAll?(o("Setting up location.hash handlers"),a(),f(),m()):T("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return k.enable?d():o("In page linking not enabled"),{findTarget:n}}function Ge(){if(J!==!0)return;function e(n){v(0,0,n.type,n.screenY+":"+n.screenX)}function t(n,i){o("Add event listener: "+i),F(window.document,n,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}function Ze(){o("Enable public methods"),De.parentIFrame={autoResize:function(t){return t===!0&&b===!1?(b=!0,Ie()):t===!1&&b===!0&&(b=!1,Ye()),v(0,0,"autoResize",JSON.stringify(b)),b},close:function(){v(0,0,"close")},getId:function(){return D},getPageInfo:function(t){typeof t=="function"?(G=t,v(0,0,"pageInfo")):(G=function(){},v(0,0,"pageInfoStop"))},moveToAnchor:function(t){k.findTarget(t)},reset:function(){ze("parentIFrame.reset")},scrollTo:function(t,n){v(n,t,"scrollTo")},scrollToOffset:function(t,n){v(n,t,"scrollToOffset")},sendMessage:function(t,n){v(0,0,"message",JSON.stringify(t),n)},setHeightCalculationMethod:function(t){h=t,Me()},setWidthCalculationMethod:function(t){p=t,Ee()},setTargetOrigin:function(t){o("Set targetOrigin: "+t),z=t},size:function(t,n){var i=""+(t||"")+(n?","+n:"");O("size","parentIFrame.size("+i+")",t,n)}}}function Se(){I!==0&&(o("setInterval: "+I+"ms"),le=setInterval(function(){O("interval","setInterval: "+I)},Math.abs(I)))}function $e(){function e(r){function y(w){w.complete===!1&&(o("Attach listeners to "+w.src),w.addEventListener("load",a,!1),w.addEventListener("error",f,!1),s.push(w))}r.type==="attributes"&&r.attributeName==="src"?y(r.target):r.type==="childList"&&Array.prototype.forEach.call(r.target.querySelectorAll("img"),y)}function t(r){s.splice(s.indexOf(r),1)}function n(r){o("Remove listeners from "+r.src),r.removeEventListener("load",a,!1),r.removeEventListener("error",f,!1),t(r)}function i(r,y,w){n(r.target),O(y,w+": "+r.target.src)}function a(r){i(r,"imageLoad","Image loaded")}function f(r){i(r,"imageLoadFailed","Image load failed")}function m(r){console.log("mutationObserved"),O("mutationObserver","mutationObserver: "+r[0].target+" "+r[0].type),r.forEach(e)}function d(){console.log("createMutationObserver");var r=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return c=new u(m),o("Create body MutationObserver"),c.observe(r,y),c}var s=[],u=window.MutationObserver||window.WebKitMutationObserver,c=d();return{disconnect:function(){"disconnect"in c&&(o("Disconnect body MutationObserver"),c.disconnect(),s.forEach(n))}}}function et(){var e=0>I;window.MutationObserver||window.WebKitMutationObserver?e?Se():j=$e():(o("MutationObserver not supported in this browser!"),Se())}function te(e,t){var n=0;return t=t||document.body,n=document.defaultView.getComputedStyle(t,null),n=n===null?0:n[e],parseInt(n,E)}function tt(e){e>x/2&&(x=2*e,o("Event throttle increased to "+x+"ms"))}function ne(e,t){for(var n=t.length,i=0,a=0,f=ye(e),m=Date.now(),d=0;d<n;d++)i=t[d].getBoundingClientRect()[e]+te("margin"+f,t[d]),i>a&&(a=i);return m=Date.now()-m,o("Parsed "+n+" HTML elements"),o("Element position calculated in "+m+"ms"),tt(m),a}function H(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function Oe(e,t){function n(){return T("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}var i=document.querySelectorAll("["+t+"]");return i.length===0&&n(),ne(e,i)}function Fe(){return document.querySelectorAll("body *")}var M={bodyOffset:function(){return document.body.offsetHeight+te("marginTop")+te("marginBottom")},offset:function(){return M.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Z.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,H(M))},min:function(){return Math.min.apply(null,H(M))},grow:function(){return M.max()},lowestElement:function(){return Math.max(M.bodyOffset()||M.documentElementOffset(),ne("bottom",Fe()))},taggedElement:function(){return Oe("bottom","data-iframe-height")}},S={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Z.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(S.bodyScroll(),S.documentElementScroll())},max:function(){return Math.max.apply(null,H(S))},min:function(){return Math.min.apply(null,H(S))},rightMostElement:function(){return ne("right",Fe())},taggedElement:function(){return Oe("right","data-iframe-width")}};function Ce(e,t,n,i){function a(){L=c,N=r,v(L,N,e)}function f(){function y(w,C){var it=Math.abs(w-C)<=Y;return!it}return c=l===n?M[h]():n,r=l===i?S[p]():i,y(L,c)||A&&y(N,r)}function m(){return!(e in{init:1,interval:1,size:1})}function d(){return h in fe||A&&p in fe}function s(){o("No change in size detected")}function u(){m()&&d()?ze(t):e in{interval:1}||s()}var c,r;f()||e==="init"?(Le(),a()):u()}var nt=He(Ce);function O(e,t,n,i){console.log(e);function a(){e in{reset:1,resetPage:1,init:1}||o("Trigger event: "+t)}function f(){return B&&e in Re}f()?o("Trigger event cancelled: "+e):(a(),e==="init"?Ce(e,t,n,i):nt(e,t,n,i))}function Le(){B||(B=!0,o("Trigger event lock on")),clearTimeout(me),me=setTimeout(function(){B=!1,o("Trigger event lock off"),o("--")},q)}function ke(e){L=M[h](),N=S[p](),v(L,N,e)}function ze(e){var t=h;h=U,o("Reset trigger event: "+e),Le(),ke("reset"),h=t}function v(e,t,n,i,a){function f(){l===a?a=z:o("Message targetOrigin: "+a)}function m(){var d=e+":"+t,s=D+":"+d+":"+n+(l===i?"":":"+i);o("Sending message to host page ("+s+")"),console.log("send to parent",s),de.postMessage(R+s,a)}f(),m()}function xe(e){var t={init:function(){ce=e.data,de=e.source,We(),ae=!1,setTimeout(function(){se=!1},q)},reset:function(){se?o("Page reset ignored by init"):(o("Page size reset by host page"),ke("resetPage"))},resize:function(){O("resizeParent","Parent window requested size check")},moveToAnchor:function(){k.findTarget(a())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var c=a();o("PageInfoFromParent called from parent: "+c),G(JSON.parse(c)),o(" --")},message:function(){var c=a();o("onMessage called from parent: "+c),K(JSON.parse(c)),o(" --")}};function n(){return R===(""+e.data).slice(0,ue)}function i(){return e.data.split("]")[1].split(":")[0]}function a(){return e.data.slice(e.data.indexOf(":")+1)}function f(){return!oe.exports&&"iFrameResize"in window||window.jQuery!==l&&"iFrameResize"in window.jQuery.prototype}function m(){return e.data.split(":")[2]in{true:1,false:1}}function d(){var u=i();u in t?t[u]():!f()&&!m()&&T("Unexpected message ("+e.data+")")}function s(){ae===!1?d():m()?t.init():o('Ignored message of type "'+i()+'". Received before initialization.')}n()&&s()}function Ne(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}"iframeResizer"in window||(window.iframeChildListener=function(e){xe({data:e,sameDomian:!0})},F(window,"message",xe),F(window,"readystatechange",Ne),Ne())})()})(gt);const Mt=ot({__name:"iframe-resizer-child",setup(oe){const l=rt(0);return(b,E)=>(at(),st(mt,{variant:"outlined",color:"primary"},{default:ie(()=>[Pe(dt,null,{default:ie(()=>[E[2]||(E[2]=Ae(" This is a simple frame content ")),ct("div",{style:lt(`height:${ut(l)}px;`)},null,4),Pe(ft,{color:"primary",variant:"elevated","data-iframe-height":"",onClick:E[0]||(E[0]=W=>l.value+=50)},{default:ie(()=>E[1]||(E[1]=[Ae(" Add 50px ")])),_:1})]),_:1})]),_:1}))}});export{Mt as default};
