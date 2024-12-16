import{K as d,aL as E,i as u,av as b,z as f,M as V,E as R,I as L,b0 as $,J as x,af as B,b1 as D,b2 as P,T as S,al as C,aJ as w,a7 as N,ab as T,a9 as _}from"./Ch5M9qKH.js";import{b as I}from"./pIW_UJTS.js";const J=d({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function z(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:u(()=>{const t=b(e)?e.value:e.rounded,r=b(e)?e.value:e.tile,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`rounded-${l}`);else(r||t===!1)&&s.push("rounded-0");return s})}}const O=["elevated","flat","tonal","outlined","text","plain"];function K(e,a){return f(V,null,[e&&f("span",{key:"overlay",class:`${a}__overlay`},null),f("span",{key:"underlay",class:`${a}__underlay`},null)])}const M=d({color:String,variant:{type:String,default:"elevated",validator:e=>O.includes(e)}},"variant");function W(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=u(()=>{const{variant:s}=R(e);return`${a}--variant-${s}`}),{colorClasses:t,colorStyles:r}=I(u(()=>{const{variant:s,color:l}=R(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:r,variantClasses:n}}const q=d({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),G=L(!1)({name:"VDefaultsProvider",props:q(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:r,reset:s,root:l,scoped:o}=$(e);return x(t,{reset:s,root:l,scoped:o,disabled:r}),()=>{var i;return(i=n.default)==null?void 0:i.call(n)}}});function A(){const e=B("useRoute");return u(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function H(){var e,a;return(a=(e=B("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function Q(e,a){var k,p;const n=D("RouterLink"),t=u(()=>!!(e.href||e.to)),r=u(()=>(t==null?void 0:t.value)||P(a,"click")||P(e,"click"));if(typeof n=="string"||!("useLink"in n)){const c=S(e,"href");return{isLink:t,isClickable:r,href:c,linkProps:C({href:c})}}const s=u(()=>({...e,to:S(()=>e.to||"")})),l=n.useLink(s.value),o=u(()=>e.to?l:void 0),i=A(),g=u(()=>{var c,y,h;return o.value?e.exact?i.value?((h=o.value.isExactActive)==null?void 0:h.value)&&w(o.value.route.value.query,i.value.query):((y=o.value.isExactActive)==null?void 0:y.value)??!1:((c=o.value.isActive)==null?void 0:c.value)??!1:!1}),m=u(()=>{var c;return e.to?(c=o.value)==null?void 0:c.route.value.href:e.href});return{isLink:t,isClickable:r,isActive:g,route:(k=o.value)==null?void 0:k.route,navigate:(p=o.value)==null?void 0:p.navigate,href:m,linkProps:C({href:m,"aria-current":u(()=>g.value?"page":void 0)})}}const U=d({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let v=!1;function X(e,a){let n=!1,t,r;N&&(T(()=>{window.addEventListener("popstate",s),t=e==null?void 0:e.beforeEach((l,o,i)=>{v?n?a(i):i():setTimeout(()=>n?a(i):i()),v=!0}),r=e==null?void 0:e.afterEach(()=>{v=!1})}),_(()=>{window.removeEventListener("popstate",s),t==null||t(),r==null||r()}));function s(l){var o;(o=l.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}export{G as V,U as a,M as b,z as c,Q as d,H as e,X as f,K as g,J as m,W as u};
