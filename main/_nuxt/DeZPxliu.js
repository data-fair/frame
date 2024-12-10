import"./Be_AGEaI.js";import{V as a}from"./D_s5Vl9L.js";import{d as i,t as o,C as l,A as d,x as e,B as s}from"./NSRdXZP-.js";import"./2vSQ8DIs.js";/* empty css        */import"./DNGT7p_d.js";const p=["src"],n=["src"],h=["src"],m=["src"],w=i({__name:"static-height",setup(b){return(r,t)=>(o(),l(a,null,{default:d(()=>[t[0]||(t[0]=e("h1",{class:"text-h3 mb-6"}," Static height ",-1)),t[1]||(t[1]=e("p",null,"There are multiple ways of managing the height of the frame.",-1)),t[2]||(t[2]=e("h2",{class:"text-h4 mt-8"}," CSS styling ",-1)),t[3]||(t[3]=e("p",{class:"my-4"},[s(" If a height is applied to the d-frame element through CSS it is respected. The following example has "),e("code",null,'style="height:100px;"'),s(". ")],-1)),e("d-frame",{src:`${r.$config.app.baseURL}children/basic`,style:{height:"100px","max-width":"300px"},class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,8,p),t[4]||(t[4]=e("h2",{class:"text-h4 mt-8"}," Auto aspect ratio ",-1)),t[5]||(t[5]=e("p",{class:"my-4"}," Without a height restriction from the style a default aspect ratio is used. This aspect ratio is calculated based on the width of the frame like so: ",-1)),t[6]||(t[6]=e("ul",{class:"ml-8 mb-4"},[e("li",null,"< 500 px ⇒ 1"),e("li",null,"< 800 px ⇒ 4 / 3"),e("li",null,"< 1200 px ⇒ 16 / 9 "),e("li",null,"⇒ 21 / 9")],-1)),e("d-frame",{src:`${r.$config.app.baseURL}children/basic`,style:{"max-width":"300px"},class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,8,n),t[7]||(t[7]=e("h2",{class:"text-h4 mt-8"}," Explicit aspect ratio ",-1)),t[8]||(t[8]=e("p",{class:"my-4"},[s(" The default aspect ratio can be overwritten with an attribute. The following example has "),e("code",null,'aspect-ratio="2"'),s(". ")],-1)),e("d-frame",{src:`${r.$config.app.baseURL}children/basic`,"aspect-ratio":"2",style:{"max-width":"300px"},class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,8,h),t[9]||(t[9]=e("h2",{class:"text-h4 mt-8"}," Explicit height ",-1)),t[10]||(t[10]=e("p",{class:"my-4"},[s(" The height can be overwritten with an attribute. The following has "),e("code",null,'height="50vh"'),s(". ")],-1)),e("d-frame",{debug:"",src:`${r.$config.app.baseURL}children/basic`,height:"50vh",style:{"max-width":"300px"},class:"border-dashed border-md border-secondary border-opacity-100 pa-2"},null,8,m)]),_:1}))}});export{w as default};
