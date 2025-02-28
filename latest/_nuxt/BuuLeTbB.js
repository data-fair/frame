import{aj as P,r as j,ap as q,aq as Q,e as W,Q as Z,X as x,Z as w,i as l,a1 as D,Y as G,a9 as H,a2 as J,ar as N,as as K,z as i,a0 as u,at as ee,ah as te}from"./Biknmx-1.js";import{u as ae,a as k}from"./BVNXVYn3.js";import{m as ne,a as oe,c as se}from"./DmRMNqZV.js";import{m as re,u as le}from"./CIvOHrtd.js";const T=["top","bottom"],ie=["start","end","left","right"];function ue(e,t){let[n,o]=e.split(" ");return o||(o=P(T,n)?"start":P(ie,n)?"top":"center"),{side:O(n,t),align:O(o,t)}}function O(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function ye(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function pe(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Se(e){return{side:e.align,align:e.side}}function ke(e){return P(T,e.side)?"y":"x"}function ce(e,t){const n=j(),o=q(!1);if(Q){const c=new IntersectionObserver(a=>{o.value=!!a.find(s=>s.isIntersecting)},t);W(()=>{c.disconnect()}),Z(n,(a,s)=>{s&&(c.unobserve(s),o.value=!1),a&&c.observe(a)},{flush:"post"})}return{intersectionRef:n,isIntersecting:o}}const V={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},de=x({location:String},"location");function fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:o}=w();return{locationStyles:l(()=>{if(!e.location)return{};const{side:a,align:s}=ue(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value);function g(b){return n?n(b):0}const r={};return a!=="center"&&(t?r[V[a]]=`calc(100% - ${g(a)}px)`:r[a]=0),s!=="center"?t?r[V[s]]=`calc(100% - ${g(s)}px)`:r[s]=0:(a==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),r})}}const ge=x({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ne(),...de({location:"top"}),...re(),...oe(),...D()},"VProgressLinear"),Pe=G()({name:"VProgressLinear",props:ge(),emits:{"update:modelValue":e=>!0},setup(e,t){var R;let{slots:n}=t;const o=H(e,"modelValue"),{isRtl:c,rtlClasses:a}=w(),{themeClasses:s}=J(e),{locationStyles:g}=fe(e),{textColorClasses:r,textColorStyles:b}=ae(e,"color"),{backgroundColorClasses:F,backgroundColorStyles:I}=k(l(()=>e.bgColor||e.color)),{backgroundColorClasses:$,backgroundColorStyles:L}=k(l(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:_,backgroundColorStyles:B}=k(e,"color"),{roundedClasses:M}=le(e),{intersectionRef:h,isIntersecting:X}=ce(),C=l(()=>parseFloat(e.max)),d=l(()=>parseFloat(e.height)),y=l(()=>N(parseFloat(e.bufferValue)/C.value*100,0,100)),p=l(()=>N(parseFloat(o.value)/C.value*100,0,100)),v=l(()=>c.value!==e.reverse),A=l(()=>e.indeterminate?"fade-transition":"slide-x-transition"),m=K&&((R=window.matchMedia)==null?void 0:R.call(window,"(forced-colors: active)").matches);function z(f){if(!h.value)return;const{left:E,right:U,width:S}=h.value.getBoundingClientRect(),Y=v.value?S-f.clientX+(U-S):f.clientX-E;o.value=Math.round(Y/S*C.value)}return se(()=>i(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&X.value,"v-progress-linear--reverse":v.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},M.value,s.value,a.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?u(d.value):0,"--v-progress-linear-height":u(d.value),...e.absolute?g.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:p.value,onClick:e.clickable&&z},{default:()=>[e.stream&&i("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...b.value,[v.value?"left":"right"]:u(-d.value),borderTop:`${u(d.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${u(d.value/4)})`,width:u(100-y.value,"%"),"--v-progress-linear-stream-to":u(d.value*(v.value?1:-1))}},null),i("div",{class:["v-progress-linear__background",m?void 0:F.value],style:[I.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),i("div",{class:["v-progress-linear__buffer",m?void 0:$.value],style:[L.value,{opacity:parseFloat(e.bufferOpacity),width:u(y.value,"%")}]},null),i(ee,{name:A.value},{default:()=>[e.indeterminate?i("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>i("div",{key:f,class:["v-progress-linear__indeterminate",f,m?void 0:_.value],style:B.value},null))]):i("div",{class:["v-progress-linear__determinate",m?void 0:_.value],style:[B.value,{width:u(p.value,"%")}]},null)]}),n.default&&i("div",{class:"v-progress-linear__content"},[n.default({value:p.value,buffer:y.value})])]})),{}}}),ve=["static","relative","fixed","absolute","sticky"],xe=x({position:{type:String,validator:e=>ve.includes(e)}},"position");function _e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:te();return{positionClasses:l(()=>e.position?`${t}--${e.position}`:void 0)}}export{Pe as V,xe as a,fe as b,_e as c,pe as d,Se as e,ye as f,ke as g,de as m,ue as p,O as t,ce as u};
