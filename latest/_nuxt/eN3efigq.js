import{_ as rt}from"./BLwA2wXj.js";import{d as at,r as st,t as lt,C as ct,A as ie,z as oe,B as Ae,x as Re,G as ut,E as ft}from"./2GtNo5G5.js";import{V as dt}from"./Dus6-8vc.js";import{V as mt,a as gt}from"./DF0wGfdl.js";import"./DoLnX5WI.js";import"./3CDrnHPB.js";import"./kEr0N0kK.js";import"./Dhbhthhq.js";import"./DV3ZCpHz.js";import"./CL2nIQGv.js";import"./BFapnbUl.js";import"./CbHEB2-S.js";import"./CvSSFb4B.js";import"./BfiA9UYn.js";import"./Cy7KR8w_.js";import"./WLeHKyBY.js";import"./zI1tdITT.js";import"./CAOBFEwo.js";var ht={exports:{}};(function(re){(function(c){if(console.error("setup contentWindow"),typeof window>"u")return;var b=!0,T=10,P="",A=0,R="",j=null,ae="",D=!1,De={resize:1,click:1},q=128,se=!0,L=1,_="bodyOffset",h=_,le=!0,ce="",k={},I=32,ue=null,U=!1,J=!1,B="[iFrameSizer]",fe=B.length,W="",de={max:1,min:1,bodyScroll:1,documentElementScroll:1},X="child",me=window.parent,z="*",Y=0,H=!1,ge=null,x=16,N=1,he="scroll",p=he,Be=window,K=function(){M("onMessage function not defined")},Q=function(){},G=function(){},Z={height:function(){return M("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return M("Custom width calculation function not defined"),document.body.scrollWidth}},$={},pe=!1;function ve(){}try{var ye=Object.create({},{passive:{get:function(){pe=!0}}});window.addEventListener("test",ve,ye),window.removeEventListener("test",ve,ye)}catch{}function F(e,t,n,i){e.addEventListener(t,n,pe?i||{}:!1)}function We(e,t,n){e.removeEventListener(t,n,!1)}function we(e){return e.charAt(0).toUpperCase()+e.slice(1)}function He(e){var t,n,i,a=null,f=0,m=function(){f=Date.now(),a=null,i=e.apply(t,n),a||(t=n=null)};return function(){var d=Date.now();f||(f=d);var s=x-(d-f);return t=this,n=arguments,s<=0||s>x?(a&&(clearTimeout(a),a=null),f=d,i=e.apply(t,n),a||(t=n=null)):a||(a=setTimeout(m,s)),i}}function be(e){return B+"["+W+"] "+e}function o(e){U&&typeof window.console=="object"&&console.log(be(e))}function M(e){typeof window.console=="object"&&console.warn(be(e))}function Ve(){je(),o("Initialising iFrame ("+window.location.href+")"),_e(),Je(),ee("background",P),ee("padding",ae),Qe(),Ee(),Ie(),Xe(),$e(),Ze(),Se(),k=Ge(),O("init","Init message from host page"),Q()}function je(){function e(n){return n==="true"}var t=ce.slice(fe).split(":");W=t[0],A=c===t[1]?A:Number(t[1]),D=c===t[2]?D:e(t[2]),U=c===t[3]?U:e(t[3]),I=c===t[4]?I:Number(t[4]),b=c===t[6]?b:e(t[6]),R=t[7],h=c===t[8]?h:t[8],P=t[9],ae=t[10],Y=c===t[11]?Y:Number(t[11]),k.enable=c===t[12]?!1:e(t[12]),X=c===t[13]?X:t[13],p=c===t[14]?p:t[14],J=c===t[15]?J:e(t[15])}function qe(e){var t=e.split("Callback");if(t.length===2){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],M("Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}function _e(){function e(){var n=window.iFrameResizer;o("Reading data from page: "+JSON.stringify(n)),Object.keys(n).forEach(qe,n),K="onMessage"in n?n.onMessage:K,Q="onReady"in n?n.onReady:Q,z="targetOrigin"in n?n.targetOrigin:z,h="heightCalculationMethod"in n?n.heightCalculationMethod:h,p="widthCalculationMethod"in n?n.widthCalculationMethod:p}function t(n,i){return typeof n=="function"&&(o("Setup custom "+i+"CalcMethod"),Z[i]=n,n="custom"),n}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),h=t(h,"height"),p=t(p,"width")),o("TargetOrigin for parent set to: "+z)}function Ue(e,t){return t.indexOf("-")!==-1&&(M("Negative CSS value ignored for "+e),t=""),t}function ee(e,t){c!==t&&t!==""&&t!=="null"&&(document.body.style[e]=t,o("Body "+e+' set to "'+t+'"'))}function Je(){c===R&&(R=A+"px"),ee("margin",Ue("margin",R))}function Xe(){document.documentElement.style.height="",document.body.style.height="",o('HTML & body height set to "auto"')}function g(e){var t={add:function(n){function i(){O(e.eventName,e.eventType)}$[n]=i,F(window,n,i,{passive:!0})},remove:function(n){var i=$[n];delete $[n],We(window,n,i)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),o(we(e.method)+" event listener: "+e.eventType)}function Te(e){g({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),g({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),g({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),g({method:e,eventType:"Input",eventName:"input"}),g({method:e,eventType:"Mouse Up",eventName:"mouseup"}),g({method:e,eventType:"Mouse Down",eventName:"mousedown"}),g({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),g({method:e,eventType:"Print",eventNames:["afterprint","beforeprint"]}),g({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),g({method:e,eventType:"Touch Start",eventName:"touchstart"}),g({method:e,eventType:"Touch End",eventName:"touchend"}),g({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),g({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),g({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),g({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),X==="child"&&g({method:e,eventType:"IFrame Resized",eventName:"resize"})}function Me(e,t,n,i){return t!==e&&(e in n||(M(e+" is not a valid option for "+i+"CalculationMethod."),e=t),o(i+' calculation method set to "'+e+'"')),e}function Ee(){h=Me(h,_,E,"height")}function Ie(){p=Me(p,he,S,"width")}function Se(){b===!0?(Te("add"),tt()):o("Auto Resize disabled")}function Ye(){j!==null&&j.disconnect()}function Ke(){Te("remove"),Ye(),clearInterval(ue)}function Qe(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.appendChild(e)}function Ge(){function e(){return{x:window.pageXOffset===c?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===c?document.documentElement.scrollTop:window.pageYOffset}}function t(s){var u=s.getBoundingClientRect(),l=e();return{x:parseInt(u.left,10)+parseInt(l.x,10),y:parseInt(u.top,10)+parseInt(l.y,10)}}function n(s){function u(w){var C=t(w);o("Moving to in page link (#"+l+") at x: "+C.x+" y: "+C.y),v(C.y,C.x,"scrollToOffset")}var l=s.split("#")[1]||s,r=decodeURIComponent(l),y=document.getElementById(r)||document.getElementsByName(r)[0];c===y?(o("In page link (#"+l+") not found in iFrame, so sending to parent"),v(0,0,"inPageLink","#"+l)):u(y)}function i(){var s=window.location.hash,u=window.location.href;s!==""&&s!=="#"&&n(u)}function a(){function s(u){function l(r){r.preventDefault(),n(this.getAttribute("href"))}u.getAttribute("href")!=="#"&&F(u,"click",l)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),s)}function f(){F(window,"hashchange",i)}function m(){setTimeout(i,q)}function d(){Array.prototype.forEach&&document.querySelectorAll?(o("Setting up location.hash handlers"),a(),f(),m()):M("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return k.enable?d():o("In page linking not enabled"),{findTarget:n}}function Ze(){if(J!==!0)return;function e(n){v(0,0,n.type,n.screenY+":"+n.screenX)}function t(n,i){o("Add event listener: "+i),F(window.document,n,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}function $e(){o("Enable public methods"),Be.parentIFrame={autoResize:function(t){return t===!0&&b===!1?(b=!0,Se()):t===!1&&b===!0&&(b=!1,Ke()),v(0,0,"autoResize",JSON.stringify(b)),b},close:function(){v(0,0,"close")},getId:function(){return W},getPageInfo:function(t){typeof t=="function"?(G=t,v(0,0,"pageInfo")):(G=function(){},v(0,0,"pageInfoStop"))},moveToAnchor:function(t){k.findTarget(t)},reset:function(){xe("parentIFrame.reset")},scrollTo:function(t,n){v(n,t,"scrollTo")},scrollToOffset:function(t,n){v(n,t,"scrollToOffset")},sendMessage:function(t,n){v(0,0,"message",JSON.stringify(t),n)},setHeightCalculationMethod:function(t){h=t,Ee()},setWidthCalculationMethod:function(t){p=t,Ie()},setTargetOrigin:function(t){o("Set targetOrigin: "+t),z=t},size:function(t,n){var i=""+(t||"")+(n?","+n:"");O("size","parentIFrame.size("+i+")",t,n)}}}function Oe(){I!==0&&(o("setInterval: "+I+"ms"),ue=setInterval(function(){O("interval","setInterval: "+I)},Math.abs(I)))}function et(){function e(r){function y(w){w.complete===!1&&(o("Attach listeners to "+w.src),w.addEventListener("load",a,!1),w.addEventListener("error",f,!1),s.push(w))}r.type==="attributes"&&r.attributeName==="src"?y(r.target):r.type==="childList"&&Array.prototype.forEach.call(r.target.querySelectorAll("img"),y)}function t(r){s.splice(s.indexOf(r),1)}function n(r){o("Remove listeners from "+r.src),r.removeEventListener("load",a,!1),r.removeEventListener("error",f,!1),t(r)}function i(r,y,w){n(r.target),O(y,w+": "+r.target.src)}function a(r){i(r,"imageLoad","Image loaded")}function f(r){i(r,"imageLoadFailed","Image load failed")}function m(r){console.log("mutationObserved"),O("mutationObserver","mutationObserver: "+r[0].target+" "+r[0].type),r.forEach(e)}function d(){console.log("createMutationObserver");var r=document.querySelector("body"),y={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return l=new u(m),o("Create body MutationObserver"),l.observe(r,y),l}var s=[],u=window.MutationObserver||window.WebKitMutationObserver,l=d();return{disconnect:function(){"disconnect"in l&&(o("Disconnect body MutationObserver"),l.disconnect(),s.forEach(n))}}}function tt(){var e=0>I;window.MutationObserver||window.WebKitMutationObserver?e?Oe():j=et():(o("MutationObserver not supported in this browser!"),Oe())}function te(e,t){var n=0;return t=t||document.body,n=document.defaultView.getComputedStyle(t,null),n=n===null?0:n[e],parseInt(n,T)}function nt(e){e>x/2&&(x=2*e,o("Event throttle increased to "+x+"ms"))}function ne(e,t){for(var n=t.length,i=0,a=0,f=we(e),m=Date.now(),d=0;d<n;d++)i=t[d].getBoundingClientRect()[e]+te("margin"+f,t[d]),i>a&&(a=i);return m=Date.now()-m,o("Parsed "+n+" HTML elements"),o("Element position calculated in "+m+"ms"),nt(m),a}function V(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function Fe(e,t){function n(){return M("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}var i=document.querySelectorAll("["+t+"]");return i.length===0&&n(),ne(e,i)}function Ce(){return document.querySelectorAll("body *")}var E={bodyOffset:function(){return document.body.offsetHeight+te("marginTop")+te("marginBottom")},offset:function(){return E.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Z.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,V(E))},min:function(){return Math.min.apply(null,V(E))},grow:function(){return E.max()},lowestElement:function(){return Math.max(E.bodyOffset()||E.documentElementOffset(),ne("bottom",Ce()))},taggedElement:function(){return Fe("bottom","data-iframe-height")}},S={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Z.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(S.bodyScroll(),S.documentElementScroll())},max:function(){return Math.max.apply(null,V(S))},min:function(){return Math.min.apply(null,V(S))},rightMostElement:function(){return ne("right",Ce())},taggedElement:function(){return Fe("right","data-iframe-width")}};function Le(e,t,n,i){function a(){L=l,N=r,v(L,N,e)}function f(){function y(w,C){var ot=Math.abs(w-C)<=Y;return!ot}return l=c===n?E[h]():n,r=c===i?S[p]():i,y(L,l)||D&&y(N,r)}function m(){return!(e in{init:1,interval:1,size:1})}function d(){return h in de||D&&p in de}function s(){o("No change in size detected")}function u(){m()&&d()?xe(t):e in{interval:1}||s()}var l,r;f()||e==="init"?(ke(),a()):u()}var it=He(Le);function O(e,t,n,i){console.log(e);function a(){e in{reset:1,resetPage:1,init:1}||o("Trigger event: "+t)}function f(){return H&&e in De}f()?o("Trigger event cancelled: "+e):(a(),e==="init"?Le(e,t,n,i):it(e,t,n,i))}function ke(){H||(H=!0,o("Trigger event lock on")),clearTimeout(ge),ge=setTimeout(function(){H=!1,o("Trigger event lock off"),o("--")},q)}function ze(e){L=E[h](),N=S[p](),v(L,N,e)}function xe(e){var t=h;h=_,o("Reset trigger event: "+e),ke(),ze("reset"),h=t}function v(e,t,n,i,a){function f(){c===a?a=z:o("Message targetOrigin: "+a)}function m(){var d=e+":"+t,s=W+":"+d+":"+n+(c===i?"":":"+i);o("Sending message to host page ("+s+")"),console.log("send to parent",s),me.postMessage(B+s,a)}f(),m()}function Ne(e){var t={init:function(){ce=e.data,me=e.source,Ve(),se=!1,setTimeout(function(){le=!1},q)},reset:function(){le?o("Page reset ignored by init"):(o("Page size reset by host page"),ze("resetPage"))},resize:function(){O("resizeParent","Parent window requested size check")},moveToAnchor:function(){k.findTarget(a())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var l=a();o("PageInfoFromParent called from parent: "+l),G(JSON.parse(l)),o(" --")},message:function(){var l=a();o("onMessage called from parent: "+l),K(JSON.parse(l)),o(" --")}};function n(){return B===(""+e.data).slice(0,fe)}function i(){return e.data.split("]")[1].split(":")[0]}function a(){return e.data.slice(e.data.indexOf(":")+1)}function f(){return!re.exports&&"iFrameResize"in window||window.jQuery!==c&&"iFrameResize"in window.jQuery.prototype}function m(){return e.data.split(":")[2]in{true:1,false:1}}function d(){var u=i();u in t?t[u]():!f()&&!m()&&M("Unexpected message ("+e.data+")")}function s(){se===!1?d():m()?t.init():o('Ignored message of type "'+i()+'". Received before initialization.')}n()&&s()}function Pe(){document.readyState!=="loading"&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}"iframeResizer"in window||(window.iframeChildListener=function(e){Ne({data:e,sameDomian:!0})},F(window,"message",Ne),F(window,"readystatechange",Pe),Pe())})()})(ht);const Pt=at({__name:"iframe-resizer-child",setup(re){const c=st(0);return(b,T)=>{const P=rt;return lt(),ct(gt,{variant:"outlined",color:"primary"},{default:ie(()=>[oe(mt,null,{default:ie(()=>[T[2]||(T[2]=Ae(" This is a frame with iframeResizer.contentWindow available. ")),Re("div",{style:ut(`height:${ft(c)}px;`)},null,4),oe(dt,{color:"primary",variant:"elevated","data-iframe-height":"",onClick:T[0]||(T[0]=A=>c.value+=50)},{default:ie(()=>T[1]||(T[1]=[Ae(" Add 50px ")])),_:1}),T[3]||(T[3]=Re("br",null,null,-1)),oe(P,{class:"mt-4"})]),_:1})]),_:1})}}});export{Pt as default};
