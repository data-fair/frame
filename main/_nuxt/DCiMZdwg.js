import{J as c,i as s,ak as u,aL as i,aT as n,aU as v,aV as C,aW as d}from"./NSRdXZP-.js";const b=c({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function k(e){return{elevationClasses:s(()=>{const t=u(e)?e.value:e.elevation,o=[];return t==null||o.push(`elevation-${t}`),o})}}function r(e){return i(()=>{const a=[],t={};if(e.value.background)if(n(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&v(e.value.background)){const o=C(e.value.background);if(o.a==null||o.a===1){const l=d(o);t.color=l,t.caretColor=l}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(n(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:t}})}function f(e,a){const t=s(()=>({text:u(e)?e.value:a?e[a]:null})),{colorClasses:o,colorStyles:l}=r(t);return{textColorClasses:o,textColorStyles:l}}function x(e,a){const t=s(()=>({background:u(e)?e.value:a?e[a]:null})),{colorClasses:o,colorStyles:l}=r(t);return{backgroundColorClasses:o,backgroundColorStyles:l}}export{x as a,f as b,r as c,b as m,k as u};
