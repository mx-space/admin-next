import{d as o,aD as w,aE as x,b6 as F,a3 as R,b7 as A,b8 as N,aG as $,b9 as B,aP as P,ba as D,bb as v,Y as j,e,C as q,b as h,bc as b,J as C,h as T,O as z,F as E,aq as L,bd as k,A as O,H as V,be as H,M,B as p,R as m,q as I,f,W as G,T as W,l as U,bf as _,v as J}from"./index-C-VHWjjZ.js";import{a as K,N as Y}from"./ListItem-Dkz3JWHo.js";const Q=Object.assign(Object.assign({},x.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),X=o({name:"Flex",props:Q,setup(t){const{mergedClsPrefixRef:a,mergedRtlRef:r}=w(t),n=x("Flex","-flex",void 0,B,t,a);return{rtlEnabled:F("Flex",r,a),mergedClsPrefix:a,margin:R(()=>{const{size:u}=t;if(Array.isArray(u))return{horizontal:u[0],vertical:u[1]};if(typeof u=="number")return{horizontal:u,vertical:u};const{self:{[P("gap",u)]:s}}=n.value,{row:c,col:i}=D(s);return{horizontal:v(i),vertical:v(c)}})}},render(){const{vertical:t,reverse:a,align:r,inline:n,justify:l,margin:u,wrap:s,mergedClsPrefix:c,rtlEnabled:i}=this,d=A(N(this),!1);return d.length?$("div",{role:"none",class:[`${c}-flex`,i&&`${c}-flex--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:t&&!a?"column":t&&a?"column-reverse":!t&&a?"row-reverse":"row",justifyContent:l,flexWrap:!s||t?"nowrap":"wrap",alignItems:r,gap:`${u.vertical}px ${u.horizontal}px`}},d):null}});function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!J(t)}const ue=o({setup(){const t=j();return()=>{const a=t.query.refId;return e(q,null,{default:()=>[a?e(te,{refId:a},null):e(ee,null,null)]})}}}),ee=o({setup(){const t=h(1),{data:a,mutate:r}=b("/api/ai/summaries",async()=>await m.api.ai.summaries.get({params:{page:t.value}}),{revalidateOnFocus:!1});return()=>a.value?.data.length===0?e(C,null,null):e(E,null,[e(S,{summaries:a.value?.data||[],getArticle:n=>{const l=a.value?.articles[n];if(!l)throw new Error("article not found");return{type:l.type,document:{title:l.title}}},mutate:r},null),e(T,{class:"mt-6",justify:"end"},{default:()=>[e(z,{page:a.value?.pagination.currentPage,pageCount:a.value?.pagination.totalPage,onUpdatePage:n=>{t.value=n,r()}},null)]})])}}),te=o({props:{refId:{type:String,required:!0}},setup(t){const a=t.refId,{data:r,mutate:n}=b(`/api/ai/summary/${a}`,async()=>await m.api.ai.summaries.ref(a).get()),l=L(),{setHeaderButtons:u}=k();return u(e(V,{icon:e(O,null,null),name:"生成摘要",onClick:()=>{const s=l.create({title:"生成摘要",content(){return e(o({setup(){const i=h(!1);return()=>e("form",{onSubmit:d=>{d.preventDefault();const g=d.target.querySelector("input[name=lang]")?.value;g&&(i.value=!0,m.api.ai("generate-summary").post({data:{refId:a,lang:g}}).then(y=>{y&&r.value?.summaries.push(y),s.destroy()}).finally(()=>{i.value=!1}))}},[e(I,{type:"text",inputProps:{name:"lang"},defaultValue:"zh",placeholder:"目标语言"},null),e("div",{class:"mt-4 text-right"},[e(p,{attrType:"submit",loading:i.value,round:!0,type:"primary"},{default:()=>[f("生成")]})])])}}),null,null)}})}},null)),H(()=>{u(null)}),()=>!r.value||r.value.summaries.length===0?e(C,null,null):e(S,{summaries:r.value?.summaries||[],getArticle:()=>r.value.article,mutate:n},null)}}),S=o({props:{summaries:{type:Array,required:!0},getArticle:{type:Function,required:!0},mutate:{type:Function,required:!0}},setup(t){return()=>{let a;return e(Y,{bordered:!0,showDivider:!0},Z(a=t.summaries.map(r=>e(K,{class:"ml-2",key:r.id},{suffix(){return e(M,null,{default:()=>[e(p,{onClick:()=>{const n=dialog.create({title:"修改摘要",content(){return e("form",{onSubmit:l=>{l.preventDefault();const s=l.target.querySelector("textarea")?.value;s&&m.api.ai.summaries(r.id).patch({data:{summary:s}}).then(()=>{t.mutate(),n.destroy()})}},[e(X,{vertical:!0},{default:()=>[e(I,{inputProps:{name:"summary"},rows:6,type:"textarea",defaultValue:r.summary},null),e("div",{class:"text-right"},[e(p,{type:"primary",attrType:"submit",round:!0},{default:()=>[f("保存")]})])]})])}})},round:!0},{default:()=>[f("修改")]}),e(p,{onClick:()=>{const n=dialog.create({title:"确定？",content:"确定要删除吗？",type:"error",positiveText:"删除",negativeText:"取消",onPositiveClick(){m.api.ai.summaries(r.id).delete().then(()=>{t.mutate(),n.destroy()})}})},round:!0,type:"error"},{default:()=>[e(G,null,{default:()=>[e(W,{class:"text-white"},null)]})]})]})},default(){const n=t.getArticle(r.refId);return e(E,null,[e(U,{to:`/${n.type}/edit?id=${r.refId}`},{default:()=>[e("h2",{"data-article-id":r.refId},[n.document.title])]}),e("small",null,[f("目标语言："),r.lang,f(" /")," ",_(new Date(r.created),"yyyy-MM-dd HH:mm")]),e("p",{class:"mt-2"},[r.summary])])}})))?a:{default:()=>[a]})}}});export{ue as default};
