import"./BSf8cqqx.js";import{m as y,a as x,u as k}from"./Dai_QDob.js";import{b as S,c as w,u as V}from"./Dp6XRxkT.js";import{K as z,N as C,I as L,T as B,O as T,U as P,i as $,z as n,R,V as _,d as A,t as I,C as N,A as U,x as i,B as s}from"./4xlQk5LO.js";import{V as q}from"./ioxVo1he.js";import"./BUytl8oY.js";/* empty css        */const D={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function E(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${t}`]},[a])}function d(t){const[a,e]=t.split("@");return Array.from({length:e}).map(()=>r(a))}function r(t){let a=[];if(!t)return a;const e=D[t];if(t!==e){if(t.includes(","))return u(t);if(t.includes("@"))return d(t);e.includes(",")?a=u(e):e.includes("@")?a=d(e):e&&a.push(r(e))}return[E(t,a)]}function u(t){return t.replace(/\s/g,"").split(",").map(r)}const j=z({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...S(),...y(),...C()},"VSkeletonLoader"),F=L()({name:"VSkeletonLoader",props:j(),setup(t,a){let{slots:e}=a;const{backgroundColorClasses:c,backgroundColorStyles:p}=x(B(t,"color")),{dimensionStyles:m}=w(t),{elevationClasses:g}=k(t),{themeClasses:h}=T(t),{t:b}=P(),f=$(()=>r(_(t.type).join(",")));return V(()=>{var l;const o=!e.default||t.loading,v=t.boilerplate||!o?{}:{ariaLive:"polite",ariaLabel:b(t.loadingText),role:"alert"};return n("div",R({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":t.boilerplate},h.value,c.value,g.value],style:[p.value,o?m.value:{}]},v),[o?f.value:(l=e.default)==null?void 0:l.call(e)])}),{}}}),K=["src"],M=["src"],O={slot:"loader"},Z=A({__name:"clipping",setup(t){return(a,e)=>(I(),N(q,null,{default:U(()=>[e[0]||(e[0]=i("h1",{class:"text-h3 mb-6"}," Managing the clipping effect ",-1)),e[1]||(e[1]=i("p",null," When using dynamic resizing of the frame some degree of clipping effect is to be expected. Some strategies can be applied to mitigate this. ",-1)),e[2]||(e[2]=i("h2",{class:"text-h4 mt-8"}," Setting the resize attribute ",-1)),e[3]||(e[3]=i("p",{class:"my-4"},[s(" The "),i("code",null,"resize"),s(' can be defined as "yes", "no" or "auto". The default value is "auto" and setting the attribute without a value es equivalent to "yes". If the parent has prior knowledge the the child support dynamic resizing, it is better to set the '),i("code",null,"resize"),s(" attribute so that the default aspect ratio is not applied. ")],-1)),i("d-frame",{src:`${a.$config.app.baseURL}children/delayed-resize`,style:{"max-width":"300px"},resize:"",class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,8,K),e[4]||(e[4]=i("h2",{class:"text-h4 mt-8"}," Using the loader slot ",-1)),e[5]||(e[5]=i("p",{class:"my-4"},[s(" In this example the card inside the d-frame has a "),i("code",null,"loader"),s(" slot that uses Vuetify's VSkeletonLoader component. This requires setting the "),i("code",null,"resize"),s(" attribute. ")],-1)),i("d-frame",{src:`${a.$config.app.baseURL}children/delayed-resize`,style:{"max-width":"300px"},resize:"",class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},[i("div",O,[n(F,{type:"paragraph"})])],8,M)]),_:1}))}});export{Z as default};
