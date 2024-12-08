import{V as je}from"./DIL9KtL5.js";import{d as Le,o as Se,t as He,C as Ae,A as Be,x as ne}from"./B1i_bsvS.js";/* empty css        */import"./Ba5KhyXO.js";var Ve={exports:{}};(function(te){console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`),function(P){if(typeof window>"u")return;var j=0,L,ie=!1,re=!1,Fe="message",Me=Fe.length,S="[iFrameSizer]",V=S.length,v=null,I=window.requestAnimationFrame,ze=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),n={},q=null,H=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,license:"1jqr0si6pnt",log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){F("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}});function oe(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function W(e,t,c){e.addEventListener(t,c,!1)}function xe(e,t,c){e.removeEventListener(t,c,!1)}function ke(){var e=["moz","webkit","o","ms"],t;for(t=0;t<e.length&&!I;t+=1)I=window[e[t]+"RequestAnimationFrame"];I?I=I.bind(window):l("setup","RequestAnimationFrame not supported")}function Oe(e){var t="Host page: "+e;return window.top!==window.self&&(t=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),t}function Re(e){return S+"["+Oe(e)+"]"}function ae(e){return n[e]?n[e].log:ie}function l(e,t){U("log",e,t,ae(e))}function se(e,t){U("info",e,t,ae(e))}function F(e,t){U("warn",e,t,!0)}function U(e,t,c,o){o===!0&&typeof window.console=="object"&&console[e](Re(t),c)}function Ee(e){function t(){function i(){ge(g),fe(s),N("onResized",g)}f("Height"),f("Width"),me(i,g,"init")}function c(){var i=z.slice(V).split(":"),u=i[1]?parseInt(i[1],10):0,m=n[i[0]]&&n[i[0]].iframe,h=getComputedStyle(m);return{iframe:m,id:i[0],height:u+o(h)+d(h),width:i[2],type:i[3]}}function o(i){if(i.boxSizing!=="border-box")return 0;var u=i.paddingTop?parseInt(i.paddingTop,10):0,m=i.paddingBottom?parseInt(i.paddingBottom,10):0;return u+m}function d(i){if(i.boxSizing!=="border-box")return 0;var u=i.borderTopWidth?parseInt(i.borderTopWidth,10):0,m=i.borderBottomWidth?parseInt(i.borderBottomWidth,10):0;return u+m}function f(i){var u=Number(n[s]["max"+i]),m=Number(n[s]["min"+i]),h=i.toLowerCase(),w=Number(g[h]);l(s,"Checking "+h+" is in range "+m+"-"+u),w<m&&(w=m,l(s,"Set "+h+" to min value")),w>u&&(w=u,l(s,"Set "+h+" to max value")),g[h]=""+w}function k(){function i(){function h(){var y=0,E=!1;for(l(s,"Checking connection is from allowed list of origins: "+m);y<m.length;y++)if(m[y]===u){E=!0;break}return E}function w(){var y=n[s]&&n[s].remoteHost;return l(s,"Checking connection is from: "+y),u===y}return m.constructor===Array?h():w()}var u=e.origin,m=n[s]&&n[s].checkOrigin;if(m&&""+u!="null"&&!i())throw new Error("Unexpected message received from: "+u+" for "+g.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function C(){return S===(""+z).slice(0,V)&&z.slice(V).split(":")[0]in n}function O(){var i=g.type in{true:1,false:1,undefined:1};return i&&l(s,"Ignoring init message from meta parent page"),i}function R(i){return z.slice(z.indexOf(":")+Me+i)}function T(i){l(s,"onMessage passed: {iframe: "+g.iframe.id+", message: "+i+"}"),N("onMessage",{iframe:g.iframe,message:JSON.parse(i)}),l(s,"--")}function Y(){var i=document.body.getBoundingClientRect(),u=g.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:u.height,iframeWidth:u.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(u.top-i.top,10),offsetLeft:parseInt(u.left-i.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function A(i,u){function m(){x("Send Page Info","pageInfo:"+Y(),i,u)}Pe(m,32,u)}function Z(){function i(w,y){function E(){n[h]?A(n[h].iframe,h):u()}["scroll","resize"].forEach(function(ye){l(h,w+ye+" listener for sendPageInfo"),y(window,ye,E)})}function u(){i("Remove ",xe)}function m(){i("Add ",W)}var h=s;m(),n[h]&&(n[h].stopPageInfo=u)}function G(){n[s]&&n[s].stopPageInfo&&(n[s].stopPageInfo(),delete n[s].stopPageInfo)}function K(){var i=!0;return g.iframe===null&&(F(s,"IFrame ("+g.id+") not found"),i=!1),i}function r(i){var u=i.getBoundingClientRect();return ce(s),{x:Math.floor(Number(u.left)+Number(v.x)),y:Math.floor(Number(u.top)+Number(v.y))}}function a(i){function u(){v=y,p(),l(s,"--")}function m(){return{x:Number(g.width)+w.x,y:Number(g.height)+w.y}}function h(){window.parentIFrame?window.parentIFrame["scrollTo"+(i?"Offset":"")](y.x,y.y):F(s,"Unable to scroll to requested position, window.parentIFrame not found")}var w=i?r(g.iframe):{x:0,y:0},y=m();l(s,"Reposition requested from iFrame (offset x:"+w.x+" y:"+w.y+")"),window.top===window.self?u():h()}function p(){N("onScroll",v)===!1?le():fe(s)}function b(i){function u(){var E=r(y);l(s,"Moving to in page link (#"+h+") at x: "+E.x+" y: "+E.y),v={x:E.x,y:E.y},p(),l(s,"--")}function m(){window.parentIFrame?window.parentIFrame.moveToAnchor(h):l(s,"In page link #"+h+" not found and window.parentIFrame not found")}var h=i.split("#")[1]||"",w=decodeURIComponent(h),y=document.getElementById(w)||document.getElementsByName(w)[0];y?u():window.top===window.self?l(s,"In page link #"+h+" not found"):m()}function M(i){var u={};if(Number(g.width)===0&&Number(g.height)===0){var m=R(9).split(":");u={x:m[1],y:m[0]}}else u={x:g.width,y:g.height};N(i,{iframe:g.iframe,screenX:Number(u.x),screenY:Number(u.y),type:g.type})}function N(i,u){return _(s,i,u)}function B(){switch(n[s]&&n[s].firstRun&&ee(),g.type){case"close":{J(g.iframe);break}case"message":{T(R(6));break}case"mouseenter":{M("onMouseEnter");break}case"mouseleave":{M("onMouseLeave");break}case"autoResize":{n[s].autoResize=JSON.parse(R(9));break}case"scrollTo":{a(!1);break}case"scrollToOffset":{a(!0);break}case"pageInfo":{A(n[s]&&n[s].iframe,s),Z();break}case"pageInfoStop":{G();break}case"inPageLink":{b(R(9));break}case"reset":{de(g);break}case"init":{t(),N("onInit",g.iframe);break}default:Number(g.width)===0&&Number(g.height)===0?F("Unsupported message received ("+g.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):t()}}function D(i){var u=!0;return n[i]||(u=!1,F(g.type+" No settings for "+i+". Message was: "+z)),u}function $(){for(var i in n)x("iFrame requested init",he(i),n[i].iframe,i)}function ee(){n[s]&&(n[s].firstRun=!1)}var z=e.data,g={},s=null;z==="[iFrameResizerChild]Ready"?$():C()?(g=c(),s=g.id,n[s]&&(n[s].loaded=!0),!O()&&D(s)&&(l(s,"Received: "+z),K()&&k()&&B())):se(s,"Ignored: "+z)}function _(e,t,c){var o=null,d=null;if(n[e])if(o=n[e][t],typeof o=="function")d=o(c);else throw new TypeError(t+" on iFrame["+e+"] is not a function");return d}function ue(e){var t=e.id;delete n[t]}function J(e){var t=e.id;if(_(t,"onClose",t)===!1){l(t,"Close iframe cancelled by onClose event");return}l(t,"Removing iFrame: "+t);try{e.parentNode&&e.parentNode.removeChild(e)}catch(c){F(c)}_(t,"onClosed",t),l(t,"--"),ue(e),L&&(L.disconnect(),L=null)}function ce(e){v===null&&(v={x:window.pageXOffset===P?document.documentElement.scrollLeft:window.pageXOffset,y:window.pageYOffset===P?document.documentElement.scrollTop:window.pageYOffset},l(e,"Get page position: "+v.x+","+v.y))}function fe(e){v!==null&&(window.scrollTo(v.x,v.y),l(e,"Set page position: "+v.x+","+v.y),le())}function le(){v=null}function de(e){function t(){ge(e),x("reset","reset",e.iframe,e.id)}l(e.id,"Size reset requested by "+(e.type==="init"?"host page":"iFrame")),ce(e.id),me(t,e,"reset")}function ge(e){function t(f){if(!e.id){l("undefined","messageData id not set");return}e.iframe.style[f]=e[f]+"px",l(e.id,"IFrame ("+d+") "+f+" set to "+e[f]+"px")}function c(f){!re&&e[f]==="0"&&(re=!0,l(d,"Hidden iFrame detected, creating visibility listener"),Ie())}function o(f){t(f),c(f)}var d=e.iframe.id;n[d]&&(n[d].sizeHeight&&o("height"),n[d].sizeWidth&&o("width"))}function me(e,t,c){c!==t.type&&I&&!window.jasmine?(l(t.id,"Requesting animation frame"),I(e)):e()}function x(e,t,c,o,d){function f(){var T=n[o]&&n[o].targetOrigin;l(o,"["+e+"] Sending msg to iframe["+o+"] ("+t+") targetOrigin: "+T),c.contentWindow.postMessage(S+t,T)}function k(){F(o,"["+e+"] IFrame("+o+") not found")}function C(){c&&"contentWindow"in c&&c.contentWindow!==null?f():k()}function O(){function T(){n[o]&&!n[o].loaded&&!R&&(R=!0,F(o,"IFrame has not responded within "+n[o].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}d&&n[o]&&n[o].warningTimeout&&(n[o].msgTimeout=setTimeout(T,n[o].warningTimeout))}var R=!1;o=o||c.id,n[o]&&(C(),O())}function he(e){return e+":"+n[e].bodyMarginV1+":"+n[e].sizeWidth+":"+n[e].log+":"+n[e].interval+":"+n[e].enablePublicMethods+":"+n[e].autoResize+":"+n[e].bodyMargin+":"+n[e].heightCalculationMethod+":"+n[e].bodyBackground+":"+n[e].bodyPadding+":"+n[e].tolerance+":"+n[e].inPageLinks+":"+n[e].resizeFrom+":"+n[e].widthCalculationMethod+":"+n[e].mouseEvents}function Te(e){return typeof e=="number"}function pe(e,t){function c(){function a(b){var M=n[r][b];M!==1/0&&M!==0&&(e.style[b]=Te(M)?M+"px":M,l(r,"Set "+b+" = "+e.style[b]))}function p(b){if(n[r]["min"+b]>n[r]["max"+b])throw new Error("Value for min"+b+" can not be greater than max"+b)}p("Height"),p("Width"),a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function o(){var a=t&&t.id||H.id+j++;return document.getElementById(a)!==null&&(a+=j++),a}function d(a){if(typeof a!="string")throw new TypeError("Invaild id for iFrame. Expected String");return a===""&&(e.id=a=o(),ie=(t||{}).log,l(a,"Added missing iframe ID: "+a+" ("+e.src+")")),a}function f(){switch(l(r,"IFrame scrolling "+(n[r]&&n[r].scrolling?"enabled":"disabled")+" for "+r),e.style.overflow=(n[r]&&n[r].scrolling)===!1?"hidden":"auto",n[r]&&n[r].scrolling){case"omit":break;case!0:{e.scrolling="yes";break}case!1:{e.scrolling="no";break}default:e.scrolling=n[r]?n[r].scrolling:"no"}}function k(){(typeof(n[r]&&n[r].bodyMargin)=="number"||(n[r]&&n[r].bodyMargin)==="0")&&(n[r].bodyMarginV1=n[r].bodyMargin,n[r].bodyMargin=""+n[r].bodyMargin+"px")}function C(){var a=n[r]&&n[r].firstRun,p=n[r]&&n[r].heightCalculationMethod in ze;!a&&p&&de({iframe:e,height:0,width:0,type:"init"})}function O(){n[r]&&(n[r].iframe.iFrameResizer={close:J.bind(null,n[r].iframe),removeListeners:ue.bind(null,n[r].iframe),resize:x.bind(null,"Window resize","resize",n[r].iframe),moveToAnchor:function(a){x("Move to anchor","moveToAnchor:"+a,n[r].iframe,r)},sendMessage:function(a){a=JSON.stringify(a),x("Send Message","message:"+a,n[r].iframe,r)}})}function R(a){function p(){x("iFrame.onload",a,e,P,!0),C()}function b(N){if(!e.parentNode)return null;var B=new N(function(D){D.forEach(function($){var ee=Array.prototype.slice.call($.removedNodes);ee.forEach(function(z){z===e&&J(e)})})});return B.observe(e.parentNode,{childList:!0}),B}var M=oe();M&&(L=b(M)),W(e,"load",p),x("init",a,e,P,!0)}function T(a){if(typeof a!="object")throw new TypeError("Options is not an object")}function Y(a){for(var p in H)Object.prototype.hasOwnProperty.call(H,p)&&(n[r][p]=Object.prototype.hasOwnProperty.call(a,p)?a[p]:H[p])}function A(a){return a===""||a.match(/^(about:blank|javascript:|file:\/\/)/)!==null?"*":a}function Z(a){var p=a.split("Callback");if(p.length===2){var b="on"+p[0].charAt(0).toUpperCase()+p[0].slice(1);this[b]=this[a],delete this[a],F(r,"Deprecated: '"+a+"' has been renamed '"+b+"'. The old method will be removed in the next major version.")}}function G(a){a=a||{},n[r]=Object.create(null),n[r].iframe=e,n[r].firstRun=!0,n[r].remoteHost=e.src&&e.src.split("/").slice(0,3).join("/"),T(a),Object.keys(a).forEach(Z,a),Y(a),n[r]&&(n[r].targetOrigin=n[r].checkOrigin===!0?A(n[r].remoteHost):"*")}function K(){return r in n&&"iFrameResizer"in e}var r=d(e.id);K()?F(r,"Ignored iFrame, already setup."):(G(t),f(),c(),k(),R(he(r)),O())}function Q(e,t){q===null&&(q=setTimeout(function(){q=null,e()},t))}var X={};function Pe(e,t,c){X[c]||(X[c]=setTimeout(function(){X[c]=null,e()},t))}function Ie(){function e(){function d(f){function k(O){return(n[f]&&n[f].iframe.style[O])==="0px"}function C(O){return O.offsetParent!==null}n[f]&&C(n[f].iframe)&&(k("height")||k("width"))&&x("Visibility change","resize",n[f].iframe,f)}Object.keys(n).forEach(function(f){d(f)})}function t(d){l("window","Mutation observed: "+d[0].target+" "+d[0].type),Q(e,16)}function c(){var d=document.querySelector("body"),f={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},k=new o(t);k.observe(d,f)}var o=oe();o&&c()}function Ce(e){function t(){be("Window "+e,"resize")}l("window","Trigger event: "+e),Q(t,16)}function we(){function e(){be("Tab Visible","resize")}document.visibilityState!=="hidden"&&(l("document","Trigger event: Visibility change"),Q(e,16))}function be(e,t){function c(o){return n[o]&&n[o].resizeFrom==="parent"&&n[o].autoResize&&!n[o].firstRun}Object.keys(n).forEach(function(o){c(o)&&x(e,t,n[o].iframe,o)})}function Ne(){W(window,"message",Ee),W(window,"resize",function(){Ce("resize")}),W(document,"visibilitychange",we),W(document,"-webkit-visibilitychange",we)}function ve(){function e(o,d){function f(){if(d.tagName){if(d.tagName.toUpperCase()!=="IFRAME")throw new TypeError("Expected <IFRAME> tag, found <"+d.tagName+">")}else throw new TypeError("Object is not a valid DOM element")}d&&(f(),pe(d,o),c.push(d))}function t(o){o&&o.enablePublicMethods&&F("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}var c;return ke(),Ne(),function(d,f){switch(c=[],t(d),typeof f){case"undefined":case"string":{Array.prototype.forEach.call(document.querySelectorAll(f||"iframe"),e.bind(P,d));break}case"object":{e(d,f);break}default:throw new TypeError("Unexpected data type ("+typeof f+")")}return c}}function We(e){e.fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(c){function o(d,f){pe(f,c)}return this.filter("iframe").each(o).end()}):se("","Unable to bind to jQuery, it is not fully loaded.")}window.jQuery!==P&&We(window.jQuery),te.exports=ve(),window.iFrameResize=window.iFrameResize||ve()}()})(Ve);const Qe=Le({__name:"iframe-resizer",setup(te){return Se(()=>{window.iFrameResize({scrolling:"no",heightCalculationMethod:"taggedElement"},"#iframe")}),(P,j)=>(He(),Ae(je,null,{default:Be(()=>j[0]||(j[0]=[ne("h1",{class:"text-h3 mb-6"}," Iframe resizer example ",-1),ne("p",null,"Used for comparison and reverse-engineering.",-1),ne("iframe",{id:"iframe",src:"/children/iframe-resizer-child"},null,-1)])),_:1}))}});export{Qe as default};
