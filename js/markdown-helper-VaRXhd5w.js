import{cb as N,d as S,b as E,c as P,r as T,w as D,e as t,N as M,f as m,n as k,V as v,Q as V,h as H,d6 as U,M as Y,B as h,a2 as R,bA as F,C as J,ai as O,R as L,d7 as _}from"./index-CtTzMi8p.js";import{a as $}from"./Upload-Cw2rw6IL.js";class I{constructor(l){this.strList=l}parse(l){const u=l,c=/-{3,}\r?\n(.*?)-{3,}\r?\n*(.*)$/gms.exec(u);if(!c)return{text:u};const f=c.pop(),w=N(c[1]),o={},{categories:r,tags:x,date:e,updated:i,created:a,title:n}=w;return(e||a)&&(o.date=new Date(e||a).toISOString()),i&&(o.updated=new Date(i).toISOString()),o.categories=r,o.tags=x,o.title=n,Object.keys(o).forEach(s=>{typeof o[s]>"u"&&delete o[s]}),{meta:o,text:f}}start(){const l=this.strList,u=[];for(const c of l)u.push(this.parse(c));return u}}var b=function(d){return d.Post="post",d.Note="note",d}(b||{});const W=[{value:b.Post,label:"博文"},{label:"日记",value:b.Note}],G=S(()=>{const d=E(b.Post),l=E([]),u=E([]);function c(e){return new I(e).start().map((a,n)=>{const g=l.value[n].file.name.replace(/\.md$/,"");return a.meta?a.meta.slug=a.meta.slug??g:a.meta={title:g,slug:g},a.meta?.date||(a.meta.date=new Date().toISOString()),a})}const f=P();async function w(e){if(e?.preventDefault(),e?.stopPropagation(),!l.value.length)throw new ReferenceError("fileList is empty");const i=[];for await(const n of l.value){const s=await Promise.resolve(new Promise((g,y)=>{const p=n.file;if(!p){f.error("文件不存在"),y("File is empty");return}const A=p.name.split(".").pop();if(p.type&&p.type!=="text/markdown"||!["md","markdown"].includes(A)){f.error(`只能解析 markdown 文件，但是得到了 ${p.type}`),y(`File must be markdown. got type: ${p.type}, got ext: ${A}`);return}const C=new FileReader;C.onload=B=>{g(B.target?.result||"")},C.readAsText(p)}));console.log(s),i.push(s)}const a=c(i);f.success("解析完成，结果查看 console 哦"),u.value=a.map((n,s)=>({...n,filename:l.value[s].file?.name??""})),console.log(O(u))}async function o(e){if(e.stopPropagation(),e.preventDefault(),!u.value.length)return f.error("请先解析!!");await L.api.markdown.import.post({data:{type:d.value,data:u.value}}),f.success("上传成功！"),l.value=[]}const r=T({includeYAMLHeader:!0,titleBigTitle:!1,filenameSlug:!1,withMetaJson:!0});async function x(){const{includeYAMLHeader:e,filenameSlug:i,withMetaJson:a,titleBigTitle:n}=r,s=await L.api.markdown.export.get({params:{slug:i,yaml:e,show_title:n,with_meta_json:a},responseType:"blob"});_(s,"markdown.zip")}return D(()=>l.value,e=>{e.length==0?u.value=[]:w()}),()=>t(J,null,{default:()=>[t(M,null,{default:()=>[m("从 Markdown 导入数据")]}),t(k,{labelAlign:"right",labelPlacement:"left",labelWidth:150,class:"max-w-[300px]"},{default:()=>[t(v,{label:"导入到:"},{default:()=>[t(V,{options:W,value:d.value,onUpdateValue:e=>void(d.value=e)},null)]}),t(v,{label:"准备好了吗."},{default:()=>[t(H,{vertical:!0},{default:()=>[t($,{multiple:!0,accept:".md,.markdown",onChange:U(e=>{l.value=e.fileList},250),onRemove:e=>{const a=e.file.name,n=u.value.findIndex(s=>s.filename===a);n!=-1&&u.value.splice(n,1)}},{default:()=>[t(Y,null,{default:()=>[t(h,{round:!0},{default:()=>[m("先上传")]}),t(h,{onClick:w,disabled:!l.value.length},{default:()=>[m("再解析")]}),t(h,{onClick:o,round:!0,disabled:!u.value.length},{default:()=>[m("最后导入")]})]})]}),t(R,{depth:2,class:"!text-sm"},{default:()=>[m("只能上传 markdown 文件")]})]})]})]}),t(M,null,{default:()=>[m("导出数据到 Markdown (Hexo YAML Format)")]}),t(k,{labelAlign:"right",labelPlacement:"left",labelWidth:180,class:"max-w-[400px]"},{default:()=>[t(v,{label:"是否包括 yaml header"},{default:()=>[t(F,{value:r.includeYAMLHeader,onUpdateValue:e=>void(r.includeYAMLHeader=e)},null)]}),t(v,{label:"是否在第一行显示文章标题"},{default:()=>[t(F,{value:r.titleBigTitle,onUpdateValue:e=>void(r.titleBigTitle=e)},null)]}),t(v,{label:"根据 slug 生成文件名"},{default:()=>[t(F,{value:r.filenameSlug,onUpdateValue:e=>void(r.filenameSlug=e)},null)]}),t(v,{label:"导出元数据 JSON"},{default:()=>[t(F,{value:r.withMetaJson,onUpdateValue:e=>void(r.withMetaJson=e)},null)]}),t("div",{class:"w-full text-right"},[t(h,{type:"primary",onClick:x},{default:()=>[m("导出")]})])]})]})});export{G as default};
