import{a as h}from"./DpD6QKWC.js";import{b as f,c as k,u as x}from"./ByXq6THA.js";import{m as y,u as S}from"./CXHmYJtk.js";import{X as L,Z as w,Y as C,a1 as B,$ as P,aJ as V,i as T,z as l,ac as _,aa as A}from"./DW6t0zhD.js";const $={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function D(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return l("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[t])}function r(e){const[t,a]=e.split("@");return Array.from({length:a}).map(()=>i(t))}function i(e){let t=[];if(!e)return t;const a=$[e];if(e!==a){if(e.includes(","))return s(e);if(e.includes("@"))return r(e);a.includes(",")?t=s(a):a.includes("@")?t=r(a):a&&t.push(i(a))}return[D(e,t)]}function s(e){return e.replace(/\s/g,"").split(",").map(i)}const E=L({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...f(),...y(),...w()},"VSkeletonLoader"),I=C()({name:"VSkeletonLoader",props:E(),setup(e,t){let{slots:a}=t;const{backgroundColorClasses:d,backgroundColorStyles:c}=h(B(e,"color")),{dimensionStyles:u}=k(e),{elevationClasses:m}=S(e),{themeClasses:g}=P(e),{t:v}=V(),p=T(()=>i(A(e.type).join(",")));return x(()=>{var o;const n=!a.default||e.loading,b=e.boilerplate||!n?{}:{ariaLive:"polite",ariaLabel:v(e.loadingText),role:"alert"};return l("div",_({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},g.value,d.value,m.value],style:[c.value,n?u.value:{}]},b),[n?p.value:(o=a.default)==null?void 0:o.call(a)])}),{}}});export{I as V};
