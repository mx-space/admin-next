function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/index-CtTzMi8p.js","assets/index-ChYE5mha.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d,dF as f,c as m,b as l,e,bI as u,F as p,H as v,C as g,R as h,cd as _}from"./index-CtTzMi8p.js";import{F as b,d as y}from"./index-CDny-XOV.js";import{_ as S}from"./CheckCircleOutlined-pRNpXDje.js";import{T}from"./two-col-DDvafx9b.js";const H=d({setup(){const s=f("debug-serverless",y),i=m(),t=l(),r=l(""),o=async()=>{try{const n=await h.api.debug.function.post({data:{function:s.value},errorHandler:a=>{r.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-CtTzMi8p.js").then(a=>a.ei),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(n.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(n,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(S,null,null),onClick:o},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(b,{value:s,onSave:o},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[r.value])]})]})]})}});export{H as default};
