import{f as l,h as w,j as y,k as p,I as h,l as g,m as k,n as O,o as L,p as m,q as E}from"./class-Co92NyJO.js";import"./index-68wmM71Y.js";import"./last-DXTTfs9a.js";import"./confetti-D3WRURFJ.js";class x extends l{constructor({callbackSelector:e,cause:t,data:o,extraData:c,sender:s,urls:n}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(d=>`    ${w(d)}`)],`  Sender: ${s}`,`  Data: ${o}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends l{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(t)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends l{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function $(r,e){if(!p(r))throw new h({address:r});if(!p(e))throw new h({address:e});return r.toLowerCase()===e.toLowerCase()}const D="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function T(r,{blockNumber:e,blockTag:t,data:o,to:c}){const{args:s}=g({data:o,abi:[S]}),[n,d,a,i,f]=s;try{if(!$(c,n))throw new R({sender:n,to:c});const u=await A({data:a,sender:n,urls:d}),{data:b}=await k(r,{blockNumber:e,blockTag:t,data:O([i,L([{type:"bytes"},{type:"bytes"}],[u,f])]),to:c});return b}catch(u){throw new x({callbackSelector:i,cause:u,data:o,extraData:f,sender:n,urls:d})}}async function A({data:r,sender:e,urls:t}){let o=new Error("An unknown error occurred.");for(let c=0;c<t.length;c++){const s=t[c],n=s.includes("{sender}")||s.includes("{data}")?"GET":"POST",d=n==="POST"?{data:r,sender:e}:void 0;try{const a=await fetch(s.replace("{sender}",e).replace("{data}",r),{body:JSON.stringify(d),method:n});let i;if(a.headers.get("Content-Type")?.startsWith("application/json")?i=(await a.json()).data:i=await a.text(),!a.ok){o=new m({body:d,details:y(i.error)||a.statusText,headers:a.headers,status:a.status,url:s});continue}if(!E(i)){o=new M({result:i,url:s});continue}return i}catch(a){o=new m({body:d,details:a.message,url:s})}}throw o}export{A as ccipFetch,T as offchainLookup,S as offchainLookupAbiItem,D as offchainLookupSignature};
