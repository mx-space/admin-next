import{bp as be,bq as ge,br as he,bs as we,d as h,b,bt as ae,a3 as B,aF as ke,u as E,bu as P,r as F,w as N,e,bv as le,bw as A,n as k,h as x,a2 as S,F as C,aJ as xe,bx as O,V as f,by as Ce,v as ue,a9 as Be,bz as L,b1 as Ne,bA as Fe,q as w,Q as Se,bd as Ee,o as $,H as _,$ as Pe,as as ne,R as m,bB as se,ai as Ie,bC as Ae,N as De,f as c,i as T,B as y,M as re,bo as V,bj as oe,a1 as j,s as Te,m as je,bn as Oe,I as K,A as ie,g as de,aY as Ve,bD as ce,y as pe,aW as z,bc as H,bE as W,b5 as qe,bF as fe,ag as Ue,c as Ke,bG as Me,bH as G,bI as Le,U as $e,Y as Re,aj as _e,ak as q,C as ze}from"./index-P1JhSyW3.js";import{_ as J}from"./CheckCircleOutlined-ncv0PesB.js";import{i as M}from"./isEmpty-C-d41fIb.js";import{c as me}from"./cloneDeep-bSjeoj5Y.js";import{N as He,a as We}from"./ListItem-BKK8DmwI.js";import{K as Ge}from"./index-BBJsRVpY.js";import{U as Je}from"./index-D3iCGytB.js";import{N as Xe}from"./Upload-Xo-AJzcK.js";import"./_baseClone-ChRmDah_.js";function Ye(t){return be(ge(t).toLowerCase())}var Qe=he(function(t,u,n){return u=u.toLowerCase(),t+(n?Ye(u):u)});function X(t,u,n){return t==null?t:we(t,u,n)}const Y=h({props:{condition:{type:[Boolean,Function],required:!0}},setup(t,{slots:u}){const n=()=>{if(typeof t.condition=="function"?t.condition():t.condition)return u.default?.()};return()=>n()}});function U(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ue(t)}const Ze="mt-6",et={class:Ze,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"do-not-autofill"},ve=Symbol("JSONSchemaFormInject"),tt=h({props:{schema:{type:Object,required:!0},onValueChange:{type:Function,required:!1},initialValue:{type:Object,required:!0},getKey:{type:Function,required:!1,default:t=>t}},setup(t){const u=b(t.initialValue);ae(()=>{t.onValueChange?.(u.value)},{flush:"post"});const n=B(()=>t.schema.definitions),d=B(()=>new Map(Object.entries(t.schema.definitions)));ke(ve,{schema:t.schema,definitions:d,getKey:t.getKey});const s=B(()=>Object.keys(n.value)),o=b([s.value[0]]),l=E(P),i=F(et);return N(()=>l.viewport.value.mobile,a=>{a?(i.labelPlacement="top",i.labelAlign="left"):(i.labelPlacement="left",i.labelAlign="right")},{immediate:!0}),()=>{let a,r;const{schema:p}=t;return e(C,null,[e(le,{accordion:!0,defaultExpandedNames:o.value,displayDirective:"if"},U(a=s.value.map(v=>{const g=n.value[v];if(!g.title)return null;switch((g?.["ui:options"]||{})?.type){case"hidden":return null}return e(A,{title:g.title,"data-schema":JSON.stringify(g)},{default:()=>[e(k,i,{default:()=>[e(ye,{dataKey:t.getKey(v),formData:u,schema:g},null)]})]})}))?a:{default:()=>[a]}),p.ps.length?e(x,{vertical:!0},U(r=p.ps.map(v=>e(S,{class:"ml-4 mt-8 inline-block text-xs",depth:3},U(v)?v:{default:()=>[v]})))?r:{default:()=>[r]}):null])}}}),ye=h({props:{schema:{type:Object,required:!0},formData:{type:Object,required:!0},dataKey:{type:String,required:!0}},setup(t){const{definitions:u,getKey:n}=xe(ve,{});return()=>{const{schema:d,formData:s,dataKey:o}=t;return d?e(C,null,[Object.keys(d.properties).map(l=>{const i=d.properties[l];if(i.$ref){const a=u.value.get(i.$ref.split("/").at(-1));return e(ye,{dataKey:`${n(o)}.${l}`,formData:s,schema:a},null)}return e(at,{value:O(s.value,`${n(o)}.${l}`,void 0),onUpdateValue:a=>{O(s.value,n(o))?X(s.value,`${n(o)}.${l}`,a):X(s.value,n(o),{...O(s.value,n(o),{}),[l]:a})},title:i.title,type:i.type,options:i?.["ui:options"],description:i.description},null)})]):null}}}),at=h({props:{type:{type:String,required:!0},title:{type:String,required:!0},description:{type:String},options:{type:Object,default:()=>({})},value:{type:Object,required:!0},onUpdateValue:{type:Function,required:!0}},setup(t){const u=b(t.value);ae(()=>{t.onUpdateValue(u.value)});const n=()=>{const{options:o}=t;switch(t.type){case"url":case"string":{const{type:l}=o;switch(l){case"select":const{values:i}=o;return e(Se,{value:u.value,onUpdateValue:a=>{u.value=a},options:i,filterable:!0},null);default:return e(w,{inputProps:{id:Fe()},value:u.value,onUpdateValue:a=>{u.value=a},type:l||"text",showPasswordOn:"click",autosize:l=="textarea"?{maxRows:5,minRows:3}:void 0,clearable:!0},null)}}case"array":return e(Ne,{value:u.value,onUpdateValue:l=>{u.value=l}},null);case"boolean":return e(L,{value:u.value,onUpdateValue:l=>{u.value=l}},null);case"integer":return e(Be,{value:u.value,onUpdateValue:l=>{u.value=l}},null);default:return null}},d=E(P),s=B(()=>d.viewport.value.mobile?1:2);return()=>{const{title:o,options:l,description:i}=t,a=e(C,null,[e(f,{label:o},{default:()=>[i?e(x,{class:"w-full",vertical:!0},{default:()=>[n(),e(S,{class:"text-xs",depth:3},{default:()=>[e("span",{innerHTML:Ce.parse(i)},null)]})]}):n()]})]);return l.halfGrid&&s.value===2?e("div",{class:"inline-block w-1/2"},[a]):a}}}),lt="mt-6",ut={class:lt,labelPlacement:"left",labelAlign:"right",labelWidth:150,autocomplete:"chrome-off"},Q={autosize:!0,clearable:!0,style:"min-width: 300px; max-width: 100%"},nt=h(()=>{const{setHeaderButtons:t}=Ee();$(()=>{t(e(_,{disabled:!0,onClick:o,icon:e(J,null,null)},null))}),Pe(()=>{t(null)});const u=b();ne(async()=>{u.value=await m.api.config.jsonschema.get({transform:!1}),await l()});let n={};const d=F({}),s=b({});N(()=>d,r=>{s.value=se(n,Ie(r))},{deep:!0}),N(()=>s.value,r=>{let p=!1;M(r)?p=!1:p=!0,t(e(_,{disabled:!p,icon:e(J,null,null),onClick:o},null))});async function o(){if(M(s.value))return;const r=Object.entries(s.value);for await(const[p,v]of r){const g=Object.fromEntries(Object.entries(v).map(([I,R])=>Array.isArray(R)?[I,d[p][I]]:[I,R]));await m.api.options(p).patch({data:g})}await l(),message.success("修改成功")}const l=async()=>{let r=await m.api.options.get();r=Ae(u.value.default,r),n=me(r),Object.assign(d,r)},i=E(P),a=F(ut);return N(()=>i.viewport.value.mobile,r=>{r?(a.labelPlacement="top",a.labelAlign="left"):(a.labelPlacement="left",a.labelAlign="right")},{immediate:!0}),()=>e(C,null,[e("div",{class:"pt-4"},null),u.value&&e(tt,{initialValue:d,getKey:r=>r.split(".").map(p=>Qe(p)).join(".").replace("Dto",""),schema:u.value},null)])});function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!ue(t)}const st=h(()=>{const t=b([]),u=async()=>{const s=await m.api.user.session.get({});t.value=[...s.data]};$(()=>{u()});const n=async(s,o)=>{s?(await m.api.user.logout.post({}),fe(),window.location.reload()):(await m.api.user.session(o).delete({}),t.value=t.value.filter(l=>l.id!==o))},d=async()=>{await m.api.user.session.all.delete({}),await u()};return()=>{let s;return e(C,null,[e(De,{class:"flex items-center justify-between"},{default:()=>[e("span",{class:"ml-4"},[c("登录设备")]),e(T,{onPositiveClick:d},{trigger(){return e(y,{size:"small",quaternary:!0,type:"error",disabled:t.value.length==1&&t.value[0].current},{default:()=>[c("踢掉全部")]})},default(){return"确定踢掉全部登录设备（除当前会话）？"}})]}),e(He,{bordered:!0},Z(s=t.value.map(({id:o,ua:l,ip:i,date:a,current:r})=>e(We,{key:o},{prefix(){return e("div",{class:"w-20 text-center"},[r?"当前":null])},suffix(){return e(re,null,{default:()=>[e(T,{onPositiveClick:()=>n(!!r,o)},{trigger(){return e(y,{tertiary:!0,type:"error"},{default:()=>[r?"注销":"踢"]})},default(){return r?"登出？":"确定要踢出吗？"}})]})},default(){return e(x,{vertical:!0},{default:()=>[e(Y,{condition:!!l},{default:()=>[e(V,null,{default:()=>[c("User Agent: "),l]})]}),e(Y,{condition:!!i},{default:()=>[e(V,null,{default:()=>[c("IP:")," ",e(oe,{ip:i,triggerEl:e(y,{quaternary:!0,size:"tiny",type:"primary"},Z(i)?i:{default:()=>[i]})},null)]})]}),e(V,null,{default:()=>[r?"活跃时间":"登录时间",c(":")," ",e(j,{time:a},null)]})]})}})))?s:{default:()=>[s]}),e("div",{class:"pt-4"},null),e(le,{defaultExpandedNames:[""],displayDirective:"show"},{default:()=>[e(A,{name:"reset",title:"修改密码"},{default:()=>[e(ot,null,null)]}),e(A,{name:"token",title:"API Token"},{default:()=>[e(rt,null,null)]}),e(A,{name:"passkey",title:"Passkey"},{default:()=>[e(it,null,null)]})]})])}}),rt=h(()=>{const t=b([]),u=()=>({name:"",expired:!1,expiredTime:new Date}),n=F(u()),d=async()=>{const{data:a}=await m.api.passkey.items.get();t.value=a};ne(()=>{d()});const s=b(!1),o=async()=>{const a={name:n.name,expired:n.expired?n.expiredTime.toISOString():void 0},r=await m.api.auth.token.post({data:a});await navigator.clipboard.writeText(r.token),s.value=!1;const p=u();for(const g in p)n[g]=p[g];message.success(`生成成功，Token 已复制，${r.token}`),await d();const v=t.value.findIndex(g=>g.name===a.name);v!==-1&&(t.value[v].token=r.token)},l=async a=>{await m.api.auth.token.delete({params:{id:a}}),message.success("删除成功");const r=t.value.findIndex(p=>p.id===a);r!=-1&&t.value.splice(r,1)},i=E(P);return()=>e(ce,{class:"!overflow-visible"},{default:()=>[e(Te,{transformOrigin:"center",show:s.value,onUpdateShow:a=>void(s.value=a)},{default:()=>[e(je,{bordered:!1,title:"创建 Token",class:"w-[500px] max-w-full"},{default:()=>[e(k,null,{default:()=>[e(f,{label:"名称",required:!0},{default:()=>[e(w,{value:n.name,onInput:a=>void(n.name=a)},null)]}),e(f,{label:"是否过期"},{default:()=>[e(L,{value:n.expired,onUpdateValue:a=>void(n.expired=a)},null)]}),e(f,{label:"过期时间"},{default:()=>[e(Oe,{disabled:!n.expired,value:n.expiredTime,type:"datetime",onUpdateValue:a=>void(n.expiredTime=new Date(a))},null)]})]}),e(x,null,{default:()=>[e(y,{round:!0,onClick:()=>void(s.value=!1)},{default:()=>[c("取消")]}),e(y,{round:!0,type:"primary",onClick:o},{default:()=>[c("确定")]})]})]})]}),e(y,{class:"absolute right-0 top-[-3rem]",round:!0,type:"primary",onClick:()=>{s.value=!0}},{default:()=>[e(K,null,{default:()=>[e(ie,null,null)]}),e("span",{class:"ml-2"},[c("新增")])]}),e(de,{scrollX:Math.max(800,i.contentWidth.value-i.contentInsetWidth.value),remote:!0,bordered:!1,data:t.value,columns:[{key:"name",title:"名称"},{key:"token",title:"Token",render({token:a}){return a??"*".repeat(40)}},{title:"创建时间",key:"created",render({created:a}){return e(j,{time:a},null)}},{title:"过期时间",key:"expired",render({expired:a}){return Ve(a,"yyyy 年 M 月 d 日 HH:mm:ss")}},{title:"操作",key:"id",render({id:a,name:r}){return e(x,null,{default:()=>[e(T,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{l(a)}},{trigger:()=>e(y,{quaternary:!0,type:"error"},{default:()=>[c("删除")]}),default:()=>e("span",{class:"max-w-48"},[c('确定要删除 Token "'),r,c('"?')])})]})}}]},null)]})}),ot=h(()=>{const t=F({password:"",reenteredPassword:""}),u=b(),n=pe(),d=async()=>{u.value&&u.value.validate(async o=>{o?console.log(o):(await m.api.master.patch({data:{password:t.password}}),message.success("更改成功"),fe(),n.push({name:Ue.Login}))})};function s(o,l){return console.log(o),l===t.password}return()=>e(k,{class:"max-w-[300px]",ref:u,model:t,rules:{password:[{required:!0,message:"请输入密码"}],reenteredPassword:[{required:!0,message:"请再次输入密码",trigger:["input","blur"]},{validator:s,message:"两次密码输入不一致",trigger:["blur","password-input"]}]}},{default:()=>[e(f,{label:"新密码",required:!0,path:"password"},{default:()=>[e(w,z(Q,{value:t.password,onInput:o=>void(t.password=o),type:"password"}),null)]}),e(f,{label:"重复密码",required:!0,path:"reenteredPassword"},{default:()=>[e(w,z(Q,{value:t.reenteredPassword,onInput:o=>void(t.reenteredPassword=o),type:"password"}),null)]}),e("div",{class:"quaternary-right w-full"},[e(y,{onClick:d,type:"primary",round:!0},{default:()=>[c("保存")]})])]})}),it=h(()=>{const t=E(P),{data:u,mutate:n}=H("passkey-table",()=>m.api.passkey.items.get()),d=a=>{m.api.passkey.items(a).delete().then(()=>{n()})},s=h(a=>{const r=b(""),p=v=>{v.preventDefault(),v.stopPropagation(),W.createPassKey(r.value).then(()=>{n(),a.dialog.destroy()})};return()=>e(k,{onSubmit:p},{default:()=>[e(f,{label:"名称",required:!0},{default:()=>[e(w,{value:r.value,onUpdateValue:v=>{r.value=v}},null)]}),e("div",{class:"flex justify-end"},[e(y,{disabled:r.value.length===0,type:"primary",onClick:p,round:!0,size:"small"},{default:()=>[c("创建")]})])]})}),{data:o,mutate:l}=H("current-disable-status",async()=>{const{data:a}=await m.api.options("authSecurity").get();return a}),i=a=>{m.api.options("authSecurity").patch({data:{disablePasswordLogin:a}}).then(()=>{l()})};return s.props=["dialog"],()=>e(ce,{embedded:!0,class:"!overflow-visible"},{default:()=>[e(re,{class:"absolute right-0 top-[-3rem]"},{default:()=>[e(y,{type:"tertiary",onClick:()=>{W.validate(!0)},round:!0},{default:()=>[e(K,null,{default:()=>[e(qe,null,null)]}),e("span",{class:"ml-2"},[c("验证")])]}),e(y,{round:!0,type:"primary",onClick:()=>{const a=dialog.create({title:"创建 Passkey",content:()=>e(s,{dialog:a},null)})}},{default:()=>[e(K,null,{default:()=>[e(ie,null,null)]}),e("span",{class:"ml-2"},[c("新增")])]})]}),e(k,{class:"mt-4",labelAlign:"left",labelPlacement:"left"},{default:()=>[e(f,{label:"禁止密码登入"},{default:()=>[e(L,{value:o.value?.disablePasswordLogin,onUpdateValue:a=>{u.value?.length||message.error("至少需要一个 Passkey 才能开启这个功能"),i(a)}},null)]}),e("div",{style:{marginTop:"-1.5rem"}},[e(S,{class:"text-xs",depth:3},{default:()=>[e("span",null,[c("禁用密码登录需要至少开启 Clerk 或者 PassKey 登录的一项")])]})])]}),e(de,{scrollX:Math.max(800,t.contentWidth.value-t.contentInsetWidth.value),remote:!0,bordered:!1,data:u.value,columns:[{key:"name",title:"名称"},{title:"创建时间",key:"created",render({created:a}){return e(j,{time:a},null)}},{title:"操作",key:"id",render({id:a,name:r}){return e(x,null,{default:()=>[e(T,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{d(a)}},{trigger:()=>e(y,{quaternary:!0,type:"error"},{default:()=>[c("删除")]}),default:()=>e("span",{class:"max-w-48"},[c('确定要删除 Passkey "'),r,c('"?')])})]})}}]},null)]})}),ee={GitHub:"github",Weibo:"weibo",网易云:"netease",哔哩哔哩:"bilibili"},dt="_avatar_1o1mi_3",te={"tab-user":"_tab-user_1o1mi_1",avatar:dt},ct=h(()=>{const t=b({});let u;async function n(){const l=await m.api.master.get();t.value=l,u={...l}}$(async()=>{await n()});const d=Ke(),s=B(()=>se(u,t.value)),o=async()=>{const l=me($e(s));l.socialIds&&(l.socialIds=t.value.socialIds),await m.api.master.patch({data:l}),d.success("保存成功~"),await n()};return()=>e(C,null,[e(Me,{cols:"1 400:1 600:2",class:te["tab-user"],xGap:20,yGap:20},{default:()=>[e(G,null,{default:()=>[e(k,{class:"flex flex-col items-center justify-center "},{default:()=>[e(f,null,{default:()=>[e("div",{class:te.avatar},[e(Je,{type:"avatar",onFinish:l=>{const{file:i,event:a}=l;try{const r=JSON.parse((a?.target).responseText);t.value.avatar=r.url}catch{}return i}},{default:()=>[e(Xe,{class:"border-0 bg-transparent hover:border-0"},{default:()=>[e(Le,{class:"flex",src:t.value.avatar,size:200},null)]})]})])]}),e(f,{label:"上次登录时间",class:"!mt-4"},{default:()=>[e("div",{class:"w-full text-center"},[e(S,null,{default:()=>[t.value.lastLoginTime?e(j,{time:t.value.lastLoginTime},null):"N/A"]})])]}),e(f,{label:"上次登录地址"},{default:()=>[e("div",{class:"w-full text-center"},[t.value.lastLoginIp?e(oe,{trigger:"hover",ip:t.value.lastLoginIp,triggerEl:e(S,{class:"cursor-pointer"},{default:()=>[t.value.lastLoginIp]})},null):"N/A"])]}),e(f,null,{default:()=>[e(y,{round:!0,class:"-mt-14",type:"primary",onClick:o,disabled:M(s.value)},{default:()=>[c("保存")]})]})]})]}),e(G,null,{default:()=>[e(k,null,{default:()=>[e(f,{label:"主人名 (username)"},{default:()=>[e(w,{value:t.value.username,onInput:l=>{t.value.username=l?.trim()||""}},null)]}),e(f,{label:"主人昵称 (name)"},{default:()=>[e(w,{value:t.value.name,onInput:l=>{t.value.name=l?.trim()||""}},null)]}),e(f,{label:"主人邮箱 (mail)"},{default:()=>[e(w,{value:t.value.mail,onInput:l=>{t.value.mail=l}},null)]}),e(f,{label:"个人首页"},{default:()=>[e(w,{value:t.value.url,onInput:l=>{t.value.url=l}},null)]}),e(f,{label:"头像"},{default:()=>[e(w,{value:t.value.avatar,onInput:l=>{t.value.avatar=l}},null)]}),e(f,{label:"个人介绍"},{default:()=>[e(w,{type:"textarea",resizable:!1,value:t.value.introduce,onInput:l=>{t.value.introduce=l}},null)]}),e(f,{label:"社交平台 ID 录入"},{default:()=>[e(Ge,{key:t.value.id,options:Object.keys(ee).map(l=>({label:l,value:ee[l]})),onChange:l=>{t.value.socialIds=l},value:t.value.socialIds||{}},null)]})]})]})]})])});var D=function(t){return t.User="user",t.System="system",t.Security="security",t}(D||{});const kt=h({setup(){const t=Re(),u=pe(),n=b(t.params.type);N(()=>t.params.type,s=>{s&&(n.value=s)});const d=b(null);return()=>e(ze,{actionsElement:d.value},{default:()=>[e(_e,{value:n.value,onUpdateValue:s=>{u.replace({...t,params:{...t.params,type:s}})}},{default:()=>[e(q,{tab:"用户",name:D.User},{default:()=>[e(ct,null,null)]}),e(q,{tab:"系统",name:D.System},{default:()=>[e(nt,null,null)]}),e(q,{tab:"安全",name:D.Security},{default:()=>[e(st,null,null)]})]})]})}});export{kt as default};
