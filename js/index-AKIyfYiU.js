import{d as n,e as s,B as i,R as r,dC as c,f as o,dD as u,F as p}from"./index-DARy9hEq.js";const d=n({setup(){return()=>s(p,null,[s(i,{onClick:async()=>{const a=await r.api.passkey.register.post();let t;try{t=await c(a)}catch(e){e.name==="InvalidStateError"?message.error("Error: Authenticator was probably already registered by user"):message.error(e.message)}try{Object.assign(t,{name:`test-1${Math.random()*100|0}`}),(await r.api.passkey.register.verify.post({data:t})).verified?message.success("Successfully registered authenticator"):message.error("Error: Could not verify authenticator")}catch{message.error("Error: Could not verify authenticator")}}},{default:()=>[o("Register")]}),s(i,{onClick:async()=>{const a=await r.api.passkey.authentication.post();let t;try{t=await u(a)}catch(e){message.error(e.message)}try{(await r.api.passkey.authentication.verify.post({data:t})).verified?message.success("Successfully registered authenticator"):message.error("Error: Could not verify authenticator")}catch(e){message.error(e.message)}}},{default:()=>[o("Authenticator")]})])}});export{d as default};
