import{cw as u,cL as C,cM as l,cN as E,cO as G,cP as N,cQ as R,cR as K,cS as h,cT as O,cU as W,cV as B,cD as A,cW as T,cX as L,cY as Y,cZ as v,cA as Q,c_ as V,c$ as X,d0 as Z,d1 as q,cz as H,d2 as J,d3 as z}from"./index-CtTzMi8p.js";function k(r,e){return r&&u(e,C(e),r)}function rr(r,e){return r&&u(e,l(e),r)}function er(r,e){return u(r,E(r),e)}var tr=Object.getOwnPropertySymbols,M=tr?function(r){for(var e=[];r;)N(e,E(r)),r=R(r);return e}:G;function nr(r,e){return u(r,M(r),e)}function ar(r){return K(r,l,M)}var or=Object.prototype,cr=or.hasOwnProperty;function sr(r){var e=r.length,n=new r.constructor(e);return e&&typeof r[0]=="string"&&cr.call(r,"index")&&(n.index=r.index,n.input=r.input),n}function ir(r,e){var n=e?h(r.buffer):r.buffer;return new r.constructor(n,r.byteOffset,r.byteLength)}var gr=/\w*$/;function br(r){var e=new r.constructor(r.source,gr.exec(r));return e.lastIndex=r.lastIndex,e}var m=O?O.prototype:void 0,w=m?m.valueOf:void 0;function fr(r){return w?Object(w.call(r)):{}}var yr="[object Boolean]",Tr="[object Date]",ur="[object Map]",jr="[object Number]",lr="[object RegExp]",Ar="[object Set]",pr="[object String]",dr="[object Symbol]",$r="[object ArrayBuffer]",Sr="[object DataView]",Or="[object Float32Array]",mr="[object Float64Array]",wr="[object Int8Array]",Ir="[object Int16Array]",Fr="[object Int32Array]",Cr="[object Uint8Array]",Er="[object Uint8ClampedArray]",hr="[object Uint16Array]",Br="[object Uint32Array]";function Lr(r,e,n){var i=r.constructor;switch(e){case $r:return h(r);case yr:case Tr:return new i(+r);case Sr:return ir(r,n);case Or:case mr:case wr:case Ir:case Fr:case Cr:case Er:case hr:case Br:return W(r,n);case ur:return new i;case jr:case pr:return new i(r);case lr:return br(r);case Ar:return new i;case dr:return fr(r)}}var Mr="[object Map]";function Ur(r){return B(r)&&A(r)==Mr}var I=T&&T.isMap,xr=I?L(I):Ur,Pr="[object Set]";function Dr(r){return B(r)&&A(r)==Pr}var F=T&&T.isSet,_r=F?L(F):Dr,Gr=1,Nr=2,Rr=4,U="[object Arguments]",Kr="[object Array]",Wr="[object Boolean]",Yr="[object Date]",vr="[object Error]",x="[object Function]",Qr="[object GeneratorFunction]",Vr="[object Map]",Xr="[object Number]",P="[object Object]",Zr="[object RegExp]",qr="[object Set]",Hr="[object String]",Jr="[object Symbol]",zr="[object WeakMap]",kr="[object ArrayBuffer]",re="[object DataView]",ee="[object Float32Array]",te="[object Float64Array]",ne="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",ce="[object Uint8Array]",se="[object Uint8ClampedArray]",ie="[object Uint16Array]",ge="[object Uint32Array]",t={};t[U]=t[Kr]=t[kr]=t[re]=t[Wr]=t[Yr]=t[ee]=t[te]=t[ne]=t[ae]=t[oe]=t[Vr]=t[Xr]=t[P]=t[Zr]=t[qr]=t[Hr]=t[Jr]=t[ce]=t[se]=t[ie]=t[ge]=!0;t[vr]=t[x]=t[zr]=!1;function j(r,e,n,i,b,o){var a,f=e&Gr,y=e&Nr,D=e&Rr;if(n&&(a=b?n(r,i,b,o):n(r)),a!==void 0)return a;if(!Y(r))return r;var p=H(r);if(p){if(a=sr(r),!f)return v(r,a)}else{var g=A(r),d=g==x||g==Qr;if(Q(r))return V(r,f);if(g==P||g==U||d&&!b){if(a=y||d?{}:X(r),!f)return y?nr(r,rr(a,r)):er(r,k(a,r))}else{if(!t[g])return b?r:{};a=Lr(r,g,f)}}o||(o=new Z);var $=o.get(r);if($)return $;o.set(r,a),_r(r)?r.forEach(function(c){a.add(j(c,e,n,c,r,o))}):xr(r)&&r.forEach(function(c,s){a.set(s,j(c,e,n,s,r,o))});var _=D?y?ar:J:y?l:C,S=p?void 0:_(r);return q(S||r,function(c,s){S&&(s=c,c=r[s]),z(a,s,j(c,e,n,s,r,o))}),a}export{j as b,ar as g};
