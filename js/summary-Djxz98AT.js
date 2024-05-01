import{b7 as S,d as i,aF as w,aG as v,b8 as E,a3 as N,b9 as R,ba as A,aI as $,aQ as B,bb as P,bc as y,Y as D,e,C as j,b as x,bd as h,J as b,h as q,O as T,F as C,aq as z,be as L,A as V,H as k,bf as O,M as H,B as p,R as f,q as F,f as m,W as M,T as G,l as W,bg as U,v as _}from"./index-CtTzMi8p.js";import{a as J,N as K}from"./ListItem-DL1A9mIH.js";const Q=()=>S,Y={name:"Flex",self:Q},X=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),Z=i({name:"Flex",props:X,setup(t){const{mergedClsPrefixRef:a,mergedRtlRef:r}=w(t),n=v("Flex","-flex",void 0,Y,t,a);return{rtlEnabled:E("Flex",r,a),mergedClsPrefix:a,margin:N(()=>{const{size:u}=t;if(Array.isArray(u))return{horizontal:u[0],vertical:u[1]};if(typeof u=="number")return{horizontal:u,vertical:u};const{self:{[B("gap",u)]:s}}=n.value,{row:c,col:o}=P(s);return{horizontal:y(o),vertical:y(c)}})}},render(){const{vertical:t,reverse:a,align:r,inline:n,justify:l,margin:u,wrap:s,mergedClsPrefix:c,rtlEnabled:o}=this,d=R(A(this),!1);return d.length?$("div",{role:"none",class:[`${c}-flex`,o&&`${c}-flex--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:t&&!a?"column":t&&a?"column-reverse":!t&&a?"row-reverse":"row",justifyContent:l,flexWrap:!s||t?"nowrap":"wrap",alignItems:r,gap:`${u.vertical}px ${u.horizontal}px`}},d):null}});function ee(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!_(t)}const se=i({setup(){const t=D();return()=>{const a=t.query.refId;return e(j,null,{default:()=>[a?e(ae,{refId:a},null):e(te,null,null)]})}}}),te=i({setup(){const t=x(1),{data:a,mutate:r}=h("/api/ai/summaries",async()=>await f.api.ai.summaries.get({params:{page:t.value}}),{revalidateOnFocus:!1});return()=>a.value?.data.length===0?e(b,null,null):e(C,null,[e(I,{summaries:a.value?.data||[],getArticle:n=>{const l=a.value?.articles[n];if(!l)throw new Error("article not found");return{type:l.type,document:{title:l.title}}},mutate:r},null),e(q,{class:"mt-6",justify:"end"},{default:()=>[e(T,{page:a.value?.pagination.currentPage,pageCount:a.value?.pagination.totalPage,onUpdatePage:n=>{t.value=n,r()}},null)]})])}}),ae=i({props:{refId:{type:String,required:!0}},setup(t){const a=t.refId,{data:r,mutate:n}=h(`/api/ai/summary/${a}`,async()=>await f.api.ai.summaries.ref(a).get()),l=z(),{setHeaderButtons:u}=L();return u(e(k,{icon:e(V,null,null),name:"生成摘要",onClick:()=>{const s=l.create({title:"生成摘要",content(){return e(i({setup(){const o=x(!1);return()=>e("form",{onSubmit:d=>{d.preventDefault(),d.target.querySelector("input[name=lang]")?.value&&(o.value=!0,f.api.ai("generate-summary").post({data:{refId:a}}).then(g=>{g&&r.value?.summaries.push(g),s.destroy()}).finally(()=>{o.value=!1}))}},[e(F,{type:"text",inputProps:{name:"lang"},defaultValue:"zh-CN",placeholder:"目标语言"},null),e("div",{class:"mt-4 text-right"},[e(p,{attrType:"submit",loading:o.value,round:!0,type:"primary"},{default:()=>[m("生成")]})])])}}),null,null)}})}},null)),O(()=>{u(null)}),()=>!r.value||r.value.summaries.length===0?e(b,null,null):e(I,{summaries:r.value?.summaries||[],getArticle:()=>r.value.article,mutate:n},null)}}),I=i({props:{summaries:{type:Array,required:!0},getArticle:{type:Function,required:!0},mutate:{type:Function,required:!0}},setup(t){return()=>{let a;return e(K,{bordered:!0,showDivider:!0},ee(a=t.summaries.map(r=>e(J,{class:"ml-2",key:r.id},{suffix(){return e(H,null,{default:()=>[e(p,{onClick:()=>{const n=dialog.create({title:"修改摘要",content(){return e("form",{onSubmit:l=>{l.preventDefault();const s=l.target.querySelector("textarea")?.value;s&&f.api.ai.summaries(r.id).patch({data:{summary:s}}).then(()=>{t.mutate(),n.destroy()})}},[e(Z,{vertical:!0},{default:()=>[e(F,{inputProps:{name:"summary"},rows:6,type:"textarea",defaultValue:r.summary},null),e("div",{class:"text-right"},[e(p,{type:"primary",attrType:"submit",round:!0},{default:()=>[m("保存")]})])]})])}})},round:!0},{default:()=>[m("修改")]}),e(p,{onClick:()=>{const n=dialog.create({title:"确定？",content:"确定要删除吗？",type:"error",positiveText:"删除",negativeText:"取消",onPositiveClick(){f.api.ai.summaries(r.id).delete().then(()=>{t.mutate(),n.destroy()})}})},round:!0,type:"error"},{default:()=>[e(M,null,{default:()=>[e(G,{class:"text-white"},null)]})]})]})},default(){const n=t.getArticle(r.refId);return e(C,null,[e(W,{to:`/${n.type}/edit?id=${r.refId}`},{default:()=>[e("h2",{"data-article-id":r.refId},[n.document.title])]}),e("small",null,[m("目标语言："),r.lang,m(" /")," ",U(new Date(r.created),"yyyy-MM-dd HH:mm")]),e("p",{class:"mt-2"},[r.summary])])}})))?a:{default:()=>[a]})}}});export{se as default};
