(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Oc(n,t){const e=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)e[i[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const le={},Nr=[],Nn=()=>{},s_=()=>!1,Aa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Uc=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Fc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},o_=Object.prototype.hasOwnProperty,Kt=(n,t)=>o_.call(n,t),Nt=Array.isArray,Ir=n=>$s(n)==="[object Map]",wa=n=>$s(n)==="[object Set]",Lu=n=>$s(n)==="[object Date]",kt=n=>typeof n=="function",ge=n=>typeof n=="string",Ei=n=>typeof n=="symbol",ce=n=>n!==null&&typeof n=="object",Mh=n=>(ce(n)||kt(n))&&kt(n.then)&&kt(n.catch),bh=Object.prototype.toString,$s=n=>bh.call(n),a_=n=>$s(n).slice(8,-1),yh=n=>$s(n)==="[object Object]",Bc=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vo=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},l_=/-(\w)/g,zr=Ca(n=>n.replace(l_,(t,e)=>e?e.toUpperCase():"")),c_=/\B([A-Z])/g,rs=Ca(n=>n.replace(c_,"-$1").toLowerCase()),Th=Ca(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=Ca(n=>n?`on${Th(n)}`:""),tr=(n,t)=>!Object.is(n,t),Go=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},aa=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},la=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Pu;const sc=()=>Pu||(Pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hc(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=ge(i)?h_(i):Hc(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ge(n)||ce(n))return n}const u_=/;(?![^(]*\))/g,f_=/:([^]+)/,d_=/\/\*[^]*?\*\//g;function h_(n){const t={};return n.replace(d_,"").split(u_).forEach(e=>{if(e){const i=e.split(f_);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function zc(n){let t="";if(ge(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=zc(n[e]);i&&(t+=i+" ")}else if(ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const p_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m_=Oc(p_);function Ah(n){return!!n||n===""}function __(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ra(n[i],t[i]);return e}function Ra(n,t){if(n===t)return!0;let e=Lu(n),i=Lu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Ei(n),i=Ei(t),e||i)return n===t;if(e=Nt(n),i=Nt(t),e||i)return e&&i?__(n,t):!1;if(e=ce(n),i=ce(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ra(n[o],t[o]))return!1}}return String(n)===String(t)}function g_(n,t){return n.findIndex(e=>Ra(e,t))}const ye=n=>ge(n)?n:n==null?"":Nt(n)||ce(n)&&(n.toString===bh||!kt(n.toString))?JSON.stringify(n,wh,2):String(n),wh=(n,t)=>t&&t.__v_isRef?wh(n,t.value):Ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[nl(i,s)+" =>"]=r,e),{})}:wa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>nl(e))}:Ei(t)?nl(t):ce(t)&&!Nt(t)&&!yh(t)?String(t):t,nl=(n,t="")=>{var e;return Ei(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};let xn;class v_{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xn,!t&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=xn;try{return xn=this,t()}finally{xn=e}}}on(){xn=this}off(){xn=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function E_(n,t=xn){t&&t.active&&t.effects.push(n)}function x_(){return xn}const Vc=n=>{const t=new Set(n);return t.w=0,t.n=0,t},Ch=n=>(n.w&xi)>0,Rh=n=>(n.n&xi)>0,S_=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=xi},M_=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const r=t[i];Ch(r)&&!Rh(r)?r.delete(n):t[e++]=r,r.w&=~xi,r.n&=~xi}t.length=e}},oc=new WeakMap;let Ms=0,xi=1;const ac=30;let Mn;const qi=Symbol(""),lc=Symbol("");class Gc{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,E_(this,i)}run(){if(!this.active)return this.fn();let t=Mn,e=pi;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Mn,Mn=this,pi=!0,xi=1<<++Ms,Ms<=ac?S_(this):Du(this),this.fn()}finally{Ms<=ac&&M_(this),xi=1<<--Ms,Mn=this.parent,pi=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Mn===this?this.deferStop=!0:this.active&&(Du(this),this.onStop&&this.onStop(),this.active=!1)}}function Du(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let pi=!0;const Lh=[];function ss(){Lh.push(pi),pi=!1}function os(){const n=Lh.pop();pi=n===void 0?!0:n}function Ke(n,t,e){if(pi&&Mn){let i=oc.get(n);i||oc.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=Vc()),Ph(r)}}function Ph(n,t){let e=!1;Ms<=ac?Rh(n)||(n.n|=xi,e=!Ch(n)):e=!n.has(Mn),e&&(n.add(Mn),Mn.deps.push(n))}function Kn(n,t,e,i,r,s){const o=oc.get(n);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Nt(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Ei(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Nt(n)?Bc(e)&&a.push(o.get("length")):(a.push(o.get(qi)),Ir(n)&&a.push(o.get(lc)));break;case"delete":Nt(n)||(a.push(o.get(qi)),Ir(n)&&a.push(o.get(lc)));break;case"set":Ir(n)&&a.push(o.get(qi));break}if(a.length===1)a[0]&&cc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cc(Vc(l))}}function cc(n,t){const e=Nt(n)?n:[...n];for(const i of e)i.computed&&Nu(i);for(const i of e)i.computed||Nu(i)}function Nu(n,t){(n!==Mn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const b_=Oc("__proto__,__v_isRef,__isVue"),Dh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ei)),Iu=y_();function y_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=Jt(this);for(let s=0,o=this.length;s<o;s++)Ke(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(Jt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){ss();const i=Jt(this)[t].apply(this,e);return os(),i}}),n}function T_(n){const t=Jt(this);return Ke(t,"has",n),t.hasOwnProperty(n)}class Nh{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,i){const r=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?B_:Fh:s?Uh:Oh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Nt(t);if(!r){if(o&&Kt(Iu,e))return Reflect.get(Iu,e,i);if(e==="hasOwnProperty")return T_}const a=Reflect.get(t,e,i);return(Ei(e)?Dh.has(e):b_(e))||(r||Ke(t,"get",e),s)?a:ne(a)?o&&Bc(e)?a:a.value:ce(a)?r?Bh(a):Pa(a):a}}class Ih extends Nh{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._shallow){const l=Vr(s);if(!ca(i)&&!Vr(i)&&(s=Jt(s),i=Jt(i)),!Nt(t)&&ne(s)&&!ne(i))return l?!1:(s.value=i,!0)}const o=Nt(t)&&Bc(e)?Number(e)<t.length:Kt(t,e),a=Reflect.set(t,e,i,r);return t===Jt(r)&&(o?tr(i,s)&&Kn(t,"set",e,i):Kn(t,"add",e,i)),a}deleteProperty(t,e){const i=Kt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Kn(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Ei(e)||!Dh.has(e))&&Ke(t,"has",e),i}ownKeys(t){return Ke(t,"iterate",Nt(t)?"length":qi),Reflect.ownKeys(t)}}class A_ extends Nh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const w_=new Ih,C_=new A_,R_=new Ih(!0),kc=n=>n,La=n=>Reflect.getPrototypeOf(n);function io(n,t,e=!1,i=!1){n=n.__v_raw;const r=Jt(n),s=Jt(t);e||(tr(t,s)&&Ke(r,"get",t),Ke(r,"get",s));const{has:o}=La(r),a=i?kc:e?Xc:Us;if(o.call(r,t))return a(n.get(t));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(t)}function ro(n,t=!1){const e=this.__v_raw,i=Jt(e),r=Jt(n);return t||(tr(n,r)&&Ke(i,"has",n),Ke(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function so(n,t=!1){return n=n.__v_raw,!t&&Ke(Jt(n),"iterate",qi),Reflect.get(n,"size",n)}function Ou(n){n=Jt(n);const t=Jt(this);return La(t).has.call(t,n)||(t.add(n),Kn(t,"add",n,n)),this}function Uu(n,t){t=Jt(t);const e=Jt(this),{has:i,get:r}=La(e);let s=i.call(e,n);s||(n=Jt(n),s=i.call(e,n));const o=r.call(e,n);return e.set(n,t),s?tr(t,o)&&Kn(e,"set",n,t):Kn(e,"add",n,t),this}function Fu(n){const t=Jt(this),{has:e,get:i}=La(t);let r=e.call(t,n);r||(n=Jt(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&Kn(t,"delete",n,void 0),s}function Bu(){const n=Jt(this),t=n.size!==0,e=n.clear();return t&&Kn(n,"clear",void 0,void 0),e}function oo(n,t){return function(i,r){const s=this,o=s.__v_raw,a=Jt(o),l=t?kc:n?Xc:Us;return!n&&Ke(a,"iterate",qi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ao(n,t,e){return function(...i){const r=this.__v_raw,s=Jt(r),o=Ir(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?kc:t?Xc:Us;return!t&&Ke(s,"iterate",l?lc:qi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ri(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function L_(){const n={get(s){return io(this,s)},get size(){return so(this)},has:ro,add:Ou,set:Uu,delete:Fu,clear:Bu,forEach:oo(!1,!1)},t={get(s){return io(this,s,!1,!0)},get size(){return so(this)},has:ro,add:Ou,set:Uu,delete:Fu,clear:Bu,forEach:oo(!1,!0)},e={get(s){return io(this,s,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:oo(!0,!1)},i={get(s){return io(this,s,!0,!0)},get size(){return so(this,!0)},has(s){return ro.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ao(s,!1,!1),e[s]=ao(s,!0,!1),t[s]=ao(s,!1,!0),i[s]=ao(s,!0,!0)}),[n,e,t,i]}const[P_,D_,N_,I_]=L_();function Wc(n,t){const e=t?n?I_:N_:n?D_:P_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Kt(e,r)&&r in i?e:i,r,s)}const O_={get:Wc(!1,!1)},U_={get:Wc(!1,!0)},F_={get:Wc(!0,!1)},Oh=new WeakMap,Uh=new WeakMap,Fh=new WeakMap,B_=new WeakMap;function H_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z_(n){return n.__v_skip||!Object.isExtensible(n)?0:H_(a_(n))}function Pa(n){return Vr(n)?n:$c(n,!1,w_,O_,Oh)}function V_(n){return $c(n,!1,R_,U_,Uh)}function Bh(n){return $c(n,!0,C_,F_,Fh)}function $c(n,t,e,i,r){if(!ce(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=z_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function Or(n){return Vr(n)?Or(n.__v_raw):!!(n&&n.__v_isReactive)}function Vr(n){return!!(n&&n.__v_isReadonly)}function ca(n){return!!(n&&n.__v_isShallow)}function Hh(n){return Or(n)||Vr(n)}function Jt(n){const t=n&&n.__v_raw;return t?Jt(t):n}function zh(n){return aa(n,"__v_skip",!0),n}const Us=n=>ce(n)?Pa(n):n,Xc=n=>ce(n)?Bh(n):n;function Vh(n){pi&&Mn&&(n=Jt(n),Ph(n.dep||(n.dep=Vc())))}function Gh(n,t){n=Jt(n);const e=n.dep;e&&cc(e)}function ne(n){return!!(n&&n.__v_isRef===!0)}function ie(n){return G_(n,!1)}function G_(n,t){return ne(n)?n:new k_(n,t)}class k_{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Jt(t),this._value=e?t:Us(t)}get value(){return Vh(this),this._value}set value(t){const e=this.__v_isShallow||ca(t)||Vr(t);t=e?t:Jt(t),tr(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Us(t),Gh(this))}}function Ft(n){return ne(n)?n.value:n}const W_={get:(n,t,e)=>Ft(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return ne(r)&&!ne(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function kh(n){return Or(n)?n:new Proxy(n,W_)}class $_{constructor(t,e,i,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gc(t,()=>{this._dirty||(this._dirty=!0,Gh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=Jt(this);return Vh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function X_(n,t,e=!1){let i,r;const s=kt(n);return s?(i=n,r=Nn):(i=n.get,r=n.set),new $_(i,r,s||!r,e)}function mi(n,t,e,i){let r;try{r=i?n(...i):n()}catch(s){Da(s,t,e)}return r}function An(n,t,e,i){if(kt(n)){const s=mi(n,t,e,i);return s&&Mh(s)&&s.catch(o=>{Da(o,t,e)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(An(n[s],t,e,i));return r}function Da(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){mi(l,null,10,[n,o,a]);return}}q_(n,e,r,i)}function q_(n,t,e,i=!0){console.error(n)}let Fs=!1,uc=!1;const Pe=[];let Dn=0;const Ur=[];let qn=null,Hi=0;const Wh=Promise.resolve();let qc=null;function Y_(n){const t=qc||Wh;return n?t.then(this?n.bind(this):n):t}function K_(n){let t=Dn+1,e=Pe.length;for(;t<e;){const i=t+e>>>1,r=Pe[i],s=Bs(r);s<n||s===n&&r.pre?t=i+1:e=i}return t}function Yc(n){(!Pe.length||!Pe.includes(n,Fs&&n.allowRecurse?Dn+1:Dn))&&(n.id==null?Pe.push(n):Pe.splice(K_(n.id),0,n),$h())}function $h(){!Fs&&!uc&&(uc=!0,qc=Wh.then(qh))}function j_(n){const t=Pe.indexOf(n);t>Dn&&Pe.splice(t,1)}function Z_(n){Nt(n)?Ur.push(...n):(!qn||!qn.includes(n,n.allowRecurse?Hi+1:Hi))&&Ur.push(n),$h()}function Hu(n,t,e=Fs?Dn+1:0){for(;e<Pe.length;e++){const i=Pe[e];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Pe.splice(e,1),e--,i()}}}function Xh(n){if(Ur.length){const t=[...new Set(Ur)];if(Ur.length=0,qn){qn.push(...t);return}for(qn=t,qn.sort((e,i)=>Bs(e)-Bs(i)),Hi=0;Hi<qn.length;Hi++)qn[Hi]();qn=null,Hi=0}}const Bs=n=>n.id==null?1/0:n.id,J_=(n,t)=>{const e=Bs(n)-Bs(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function qh(n){uc=!1,Fs=!0,Pe.sort(J_);try{for(Dn=0;Dn<Pe.length;Dn++){const t=Pe[Dn];t&&t.active!==!1&&mi(t,null,14)}}finally{Dn=0,Pe.length=0,Xh(),Fs=!1,qc=null,(Pe.length||Ur.length)&&qh()}}function Q_(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||le;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||le;d&&(r=e.map(m=>ge(m)?m.trim():m)),f&&(r=e.map(la))}let a,l=i[a=el(t)]||i[a=el(zr(t))];!l&&s&&(l=i[a=el(rs(t))]),l&&An(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(c,n,6,r)}}function Yh(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!kt(n)){const l=c=>{const u=Yh(c,t,!0);u&&(a=!0,Ne(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ce(n)&&i.set(n,null),null):(Nt(s)?s.forEach(l=>o[l]=null):Ne(o,s),ce(n)&&i.set(n,o),o)}function Na(n,t){return!n||!Aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Kt(n,t[0].toLowerCase()+t.slice(1))||Kt(n,rs(t))||Kt(n,t))}let He=null,Kh=null;function ua(n){const t=He;return He=n,Kh=n&&n.type.__scopeId||null,t}function Bn(n,t=He,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Ku(-1);const s=ua(t);let o;try{o=n(...r)}finally{ua(s),i._d&&Ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function il(n){const{type:t,vnode:e,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:v,inheritAttrs:g}=n;let p,h;const T=ua(n);try{if(e.shapeFlag&4){const M=r||i,N=M;p=Ln(u.call(N,M,f,s,m,d,v)),h=l}else{const M=t;p=Ln(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),h=t.props?l:tg(l)}}catch(M){Cs.length=0,Da(M,n,1),p=Qt(Gr)}let S=p;if(h&&g!==!1){const M=Object.keys(h),{shapeFlag:N}=S;M.length&&N&7&&(o&&M.some(Uc)&&(h=eg(h,o)),S=kr(S,h))}return e.dirs&&(S=kr(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),p=S,ua(T),p}const tg=n=>{let t;for(const e in n)(e==="class"||e==="style"||Aa(e))&&((t||(t={}))[e]=n[e]);return t},eg=(n,t)=>{const e={};for(const i in n)(!Uc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function ng(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?zu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Na(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?zu(i,o,c):!0:!!o;return!1}function zu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!Na(e,s))return!0}return!1}function ig({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const rg=Symbol.for("v-ndc"),sg=n=>n.__isSuspense;function og(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):Z_(n)}const lo={};function Ts(n,t,e){return jh(n,t,e)}function jh(n,t,{immediate:e,deep:i,flush:r,onTrack:s,onTrigger:o}=le){var a;const l=x_()===((a=De)==null?void 0:a.scope)?De:null;let c,u=!1,f=!1;if(ne(n)?(c=()=>n.value,u=ca(n)):Or(n)?(c=()=>n,i=!0):Nt(n)?(f=!0,u=n.some(M=>Or(M)||ca(M)),c=()=>n.map(M=>{if(ne(M))return M.value;if(Or(M))return Wi(M);if(kt(M))return mi(M,l,2)})):kt(n)?t?c=()=>mi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return d&&d(),An(n,l,3,[m])}:c=Nn,t&&i){const M=c;c=()=>Wi(M())}let d,m=M=>{d=T.onStop=()=>{mi(M,l,4),d=T.onStop=void 0}},v;if(zs)if(m=Nn,t?e&&An(t,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const M=tv();v=M.__watcherHandles||(M.__watcherHandles=[])}else return Nn;let g=f?new Array(n.length).fill(lo):lo;const p=()=>{if(T.active)if(t){const M=T.run();(i||u||(f?M.some((N,C)=>tr(N,g[C])):tr(M,g)))&&(d&&d(),An(t,l,3,[M,g===lo?void 0:f&&g[0]===lo?[]:g,m]),g=M)}else T.run()};p.allowRecurse=!!t;let h;r==="sync"?h=p:r==="post"?h=()=>ke(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),h=()=>Yc(p));const T=new Gc(c,h);t?e?p():g=T.run():r==="post"?ke(T.run.bind(T),l&&l.suspense):T.run();const S=()=>{T.stop(),l&&l.scope&&Fc(l.scope.effects,T)};return v&&v.push(S),S}function ag(n,t,e){const i=this.proxy,r=ge(n)?n.includes(".")?Zh(i,n):()=>i[n]:n.bind(i,i);let s;kt(t)?s=t:(s=t.handler,e=t);const o=De;Wr(this);const a=jh(r,s.bind(i),e);return o?Wr(o):Yi(),a}function Zh(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Wi(n,t){if(!ce(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),ne(n))Wi(n.value,t);else if(Nt(n))for(let e=0;e<n.length;e++)Wi(n[e],t);else if(wa(n)||Ir(n))n.forEach(e=>{Wi(e,t)});else if(yh(n))for(const e in n)Wi(n[e],t);return n}function be(n,t){const e=He;if(e===null)return n;const i=Fa(e)||e.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,l,c=le]=t[s];o&&(kt(o)&&(o={mounted:o,updated:o}),o.deep&&Wi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Pi(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ss(),An(l,e,8,[n.el,a,n,t]),os())}}const As=n=>!!n.type.__asyncLoader,Jh=n=>n.type.__isKeepAlive;function lg(n,t){Qh(n,"a",t)}function cg(n,t){Qh(n,"da",t)}function Qh(n,t,e=De){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ia(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Jh(r.parent.vnode)&&ug(i,t,e,r),r=r.parent}}function ug(n,t,e,i){const r=Ia(t,n,i,!0);tp(()=>{Fc(i[t],r)},e)}function Ia(n,t,e=De,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;ss(),Wr(e);const a=An(t,e,n,o);return Yi(),os(),a});return i?r.unshift(s):r.push(s),s}}const ei=n=>(t,e=De)=>(!zs||n==="sp")&&Ia(n,(...i)=>t(...i),e),fg=ei("bm"),Kc=ei("m"),dg=ei("bu"),hg=ei("u"),pg=ei("bum"),tp=ei("um"),mg=ei("sp"),_g=ei("rtg"),gg=ei("rtc");function vg(n,t=De){Ia("ec",n,t)}function Eg(n,t,e,i){let r;const s=e&&e[i];if(Nt(n)||ge(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=t(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=t(o+1,o,void 0,s&&s[o])}else if(ce(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(n[c],c,a,s&&s[a])}}else r=[];return e&&(e[i]=r),r}function ep(n,t,e={},i,r){if(He.isCE||He.parent&&As(He.parent)&&He.parent.isCE)return t!=="default"&&(e.name=t),Qt("slot",e,i&&i());let s=n[t];s&&s._c&&(s._d=!1),fe();const o=s&&np(s(e)),a=ni(cn,{key:e.key||o&&o.key||`_${t}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function np(n){return n.some(t=>dp(t)?!(t.type===Gr||t.type===cn&&!np(t.children)):!0)?n:null}const fc=n=>n?pp(n)?Fa(n)||n.proxy:fc(n.parent):null,ws=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fc(n.parent),$root:n=>fc(n.root),$emit:n=>n.emit,$options:n=>jc(n),$forceUpdate:n=>n.f||(n.f=()=>Yc(n.update)),$nextTick:n=>n.n||(n.n=Y_.bind(n.proxy)),$watch:n=>ag.bind(n)}),rl=(n,t)=>n!==le&&!n.__isScriptSetup&&Kt(n,t),xg={get({_:n},t){const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(rl(i,t))return o[t]=1,i[t];if(r!==le&&Kt(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&Kt(c,t))return o[t]=3,s[t];if(e!==le&&Kt(e,t))return o[t]=4,e[t];dc&&(o[t]=0)}}const u=ws[t];let f,d;if(u)return t==="$attrs"&&Ke(n,"get",t),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==le&&Kt(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,Kt(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return rl(r,t)?(r[t]=e,!0):i!==le&&Kt(i,t)?(i[t]=e,!0):Kt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==le&&Kt(n,o)||rl(t,o)||(a=s[0])&&Kt(a,o)||Kt(i,o)||Kt(ws,o)||Kt(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Kt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Vu(n){return Nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let dc=!0;function Sg(n){const t=jc(n),e=n.proxy,i=n.ctx;dc=!1,t.beforeCreate&&Gu(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:g,deactivated:p,beforeDestroy:h,beforeUnmount:T,destroyed:S,unmounted:M,render:N,renderTracked:C,renderTriggered:R,errorCaptured:J,serverPrefetch:b,expose:A,inheritAttrs:q,components:Q,directives:ct,filters:I}=t;if(c&&Mg(c,i,null),o)for(const K in o){const Y=o[K];kt(Y)&&(i[K]=Y.bind(e))}if(r){const K=r.call(e,e);ce(K)&&(n.data=Pa(K))}if(dc=!0,s)for(const K in s){const Y=s[K],tt=kt(Y)?Y.bind(e,e):kt(Y.get)?Y.get.bind(e,e):Nn,rt=!kt(Y)&&kt(Y.set)?Y.set.bind(e):Nn,ft=Jg({get:tt,set:rt});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>ft.value,set:ut=>ft.value=ut})}if(a)for(const K in a)ip(a[K],i,e,K);if(l){const K=kt(l)?l.call(e):l;Reflect.ownKeys(K).forEach(Y=>{Cg(Y,K[Y])})}u&&Gu(u,n,"c");function G(K,Y){Nt(Y)?Y.forEach(tt=>K(tt.bind(e))):Y&&K(Y.bind(e))}if(G(fg,f),G(Kc,d),G(dg,m),G(hg,v),G(lg,g),G(cg,p),G(vg,J),G(gg,C),G(_g,R),G(pg,T),G(tp,M),G(mg,b),Nt(A))if(A.length){const K=n.exposed||(n.exposed={});A.forEach(Y=>{Object.defineProperty(K,Y,{get:()=>e[Y],set:tt=>e[Y]=tt})})}else n.exposed||(n.exposed={});N&&n.render===Nn&&(n.render=N),q!=null&&(n.inheritAttrs=q),Q&&(n.components=Q),ct&&(n.directives=ct)}function Mg(n,t,e=Nn){Nt(n)&&(n=hc(n));for(const i in n){const r=n[i];let s;ce(r)?"default"in r?s=ko(r.from||i,r.default,!0):s=ko(r.from||i):s=ko(r),ne(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Gu(n,t,e){An(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ip(n,t,e,i){const r=i.includes(".")?Zh(e,i):()=>e[i];if(ge(n)){const s=t[n];kt(s)&&Ts(r,s)}else if(kt(n))Ts(r,n.bind(e));else if(ce(n))if(Nt(n))n.forEach(s=>ip(s,t,e,i));else{const s=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(s)&&Ts(r,s,n)}}function jc(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>fa(l,c,o,!0)),fa(l,t,o)),ce(t)&&s.set(t,l),l}function fa(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&fa(n,s,e,!0),r&&r.forEach(o=>fa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=bg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const bg={data:ku,props:Wu,emits:Wu,methods:bs,computed:bs,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:bs,directives:bs,watch:Tg,provide:ku,inject:yg};function ku(n,t){return t?n?function(){return Ne(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function yg(n,t){return bs(hc(n),hc(t))}function hc(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ue(n,t){return n?[...new Set([].concat(n,t))]:t}function bs(n,t){return n?Ne(Object.create(null),n,t):t}function Wu(n,t){return n?Nt(n)&&Nt(t)?[...new Set([...n,...t])]:Ne(Object.create(null),Vu(n),Vu(t??{})):t}function Tg(n,t){if(!n)return t;if(!t)return n;const e=Ne(Object.create(null),n);for(const i in t)e[i]=Ue(n[i],t[i]);return e}function rp(){return{app:null,config:{isNativeTag:s_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ag=0;function wg(n,t){return function(i,r=null){kt(i)||(i=Ne({},i)),r!=null&&!ce(r)&&(r=null);const s=rp(),o=new WeakSet;let a=!1;const l=s.app={_uid:Ag++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ev,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&kt(c.install)?(o.add(c),c.install(l,...u)):kt(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=Qt(i,r);return d.appContext=s,u&&t?t(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Fa(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){da=l;try{return c()}finally{da=null}}};return l}}let da=null;function Cg(n,t){if(De){let e=De.provides;const i=De.parent&&De.parent.provides;i===e&&(e=De.provides=Object.create(i)),e[n]=t}}function ko(n,t,e=!1){const i=De||He;if(i||da){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:da._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}function Rg(n,t,e,i=!1){const r={},s={};aa(s,Ua,1),n.propsDefaults=Object.create(null),sp(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:V_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Lg(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Jt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Na(n.emitsOptions,d))continue;const m=t[d];if(l)if(Kt(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const v=zr(d);r[v]=pc(l,a,v,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{sp(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!Kt(t,f)&&((u=rs(f))===f||!Kt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=pc(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!Kt(t,f))&&(delete s[f],c=!0)}c&&Kn(n,"set","$attrs")}function sp(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vo(l))continue;const c=t[l];let u;r&&Kt(r,u=zr(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Jt(e),c=a||le;for(let u=0;u<s.length;u++){const f=s[u];e[f]=pc(r,l,f,c[f],n,!Kt(c,f))}}return o}function pc(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=Kt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&kt(l)){const{propsDefaults:c}=r;e in c?i=c[e]:(Wr(r),i=c[e]=l.call(null,t),Yi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===rs(e))&&(i=!0))}return i}function op(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!kt(n)){const u=f=>{l=!0;const[d,m]=op(f,t,!0);Ne(o,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ce(n)&&i.set(n,Nr),Nr;if(Nt(s))for(let u=0;u<s.length;u++){const f=zr(s[u]);$u(f)&&(o[f]=le)}else if(s)for(const u in s){const f=zr(u);if($u(f)){const d=s[u],m=o[f]=Nt(d)||kt(d)?{type:d}:Ne({},d);if(m){const v=Yu(Boolean,m.type),g=Yu(String,m.type);m[0]=v>-1,m[1]=g<0||v<g,(v>-1||Kt(m,"default"))&&a.push(f)}}}const c=[o,a];return ce(n)&&i.set(n,c),c}function $u(n){return n[0]!=="$"}function Xu(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function qu(n,t){return Xu(n)===Xu(t)}function Yu(n,t){return Nt(t)?t.findIndex(e=>qu(e,n)):kt(t)&&qu(t,n)?0:-1}const ap=n=>n[0]==="_"||n==="$stable",Zc=n=>Nt(n)?n.map(Ln):[Ln(n)],Pg=(n,t,e)=>{if(t._n)return t;const i=Bn((...r)=>Zc(t(...r)),e);return i._c=!1,i},lp=(n,t,e)=>{const i=n._ctx;for(const r in n){if(ap(r))continue;const s=n[r];if(kt(s))t[r]=Pg(r,s,i);else if(s!=null){const o=Zc(s);t[r]=()=>o}}},cp=(n,t)=>{const e=Zc(t);n.slots.default=()=>e},Dg=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=Jt(t),aa(t,"_",e)):lp(t,n.slots={})}else n.slots={},t&&cp(n,t);aa(n.slots,Ua,1)},Ng=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=le;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(Ne(r,t),!e&&a===1&&delete r._):(s=!t.$stable,lp(t,r)),o=t}else t&&(cp(n,t),o={default:1});if(s)for(const a in r)!ap(a)&&o[a]==null&&delete r[a]};function mc(n,t,e,i,r=!1){if(Nt(n)){n.forEach((d,m)=>mc(d,t&&(Nt(t)?t[m]:t),e,i,r));return}if(As(i)&&!r)return;const s=i.shapeFlag&4?Fa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ge(c)?(u[c]=null,Kt(f,c)&&(f[c]=null)):ne(c)&&(c.value=null)),kt(l))mi(l,a,12,[o,u]);else{const d=ge(l),m=ne(l);if(d||m){const v=()=>{if(n.f){const g=d?Kt(f,l)?f[l]:u[l]:l.value;r?Nt(g)&&Fc(g,s):Nt(g)?g.includes(s)||g.push(s):d?(u[l]=[s],Kt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,Kt(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(v.id=-1,ke(v,e)):v()}}}const ke=og;function Ig(n){return Og(n)}function Og(n,t){const e=sc();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Nn,insertStaticContent:v}=n,g=(E,P,O,k=null,F=null,it=null,et=!1,x=null,_=!!P.dynamicChildren)=>{if(E===P)return;E&&!ps(E,P)&&(k=Mt(E),ut(E,F,it,!0),E=null),P.patchFlag===-2&&(_=!1,P.dynamicChildren=null);const{type:w,ref:z,shapeFlag:B}=P;switch(w){case Oa:p(E,P,O,k);break;case Gr:h(E,P,O,k);break;case sl:E==null&&T(P,O,k,et);break;case cn:Q(E,P,O,k,F,it,et,x,_);break;default:B&1?N(E,P,O,k,F,it,et,x,_):B&6?ct(E,P,O,k,F,it,et,x,_):(B&64||B&128)&&w.process(E,P,O,k,F,it,et,x,_,Rt)}z!=null&&F&&mc(z,E&&E.ref,it,P||E,!P)},p=(E,P,O,k)=>{if(E==null)i(P.el=a(P.children),O,k);else{const F=P.el=E.el;P.children!==E.children&&c(F,P.children)}},h=(E,P,O,k)=>{E==null?i(P.el=l(P.children||""),O,k):P.el=E.el},T=(E,P,O,k)=>{[E.el,E.anchor]=v(E.children,P,O,k,E.el,E.anchor)},S=({el:E,anchor:P},O,k)=>{let F;for(;E&&E!==P;)F=d(E),i(E,O,k),E=F;i(P,O,k)},M=({el:E,anchor:P})=>{let O;for(;E&&E!==P;)O=d(E),r(E),E=O;r(P)},N=(E,P,O,k,F,it,et,x,_)=>{et=et||P.type==="svg",E==null?C(P,O,k,F,it,et,x,_):b(E,P,F,it,et,x,_)},C=(E,P,O,k,F,it,et,x)=>{let _,w;const{type:z,props:B,shapeFlag:V,transition:at,dirs:nt}=E;if(_=E.el=o(E.type,it,B&&B.is,B),V&8?u(_,E.children):V&16&&J(E.children,_,null,k,F,it&&z!=="foreignObject",et,x),nt&&Pi(E,null,k,"created"),R(_,E,E.scopeId,et,k),B){for(const pt in B)pt!=="value"&&!Vo(pt)&&s(_,pt,null,B[pt],it,E.children,k,F,xt);"value"in B&&s(_,"value",null,B.value),(w=B.onVnodeBeforeMount)&&Rn(w,k,E)}nt&&Pi(E,null,k,"beforeMount");const dt=Ug(F,at);dt&&at.beforeEnter(_),i(_,P,O),((w=B&&B.onVnodeMounted)||dt||nt)&&ke(()=>{w&&Rn(w,k,E),dt&&at.enter(_),nt&&Pi(E,null,k,"mounted")},F)},R=(E,P,O,k,F)=>{if(O&&m(E,O),k)for(let it=0;it<k.length;it++)m(E,k[it]);if(F){let it=F.subTree;if(P===it){const et=F.vnode;R(E,et,et.scopeId,et.slotScopeIds,F.parent)}}},J=(E,P,O,k,F,it,et,x,_=0)=>{for(let w=_;w<E.length;w++){const z=E[w]=x?fi(E[w]):Ln(E[w]);g(null,z,P,O,k,F,it,et,x)}},b=(E,P,O,k,F,it,et)=>{const x=P.el=E.el;let{patchFlag:_,dynamicChildren:w,dirs:z}=P;_|=E.patchFlag&16;const B=E.props||le,V=P.props||le;let at;O&&Di(O,!1),(at=V.onVnodeBeforeUpdate)&&Rn(at,O,P,E),z&&Pi(P,E,O,"beforeUpdate"),O&&Di(O,!0);const nt=F&&P.type!=="foreignObject";if(w?A(E.dynamicChildren,w,x,O,k,nt,it):et||Y(E,P,x,null,O,k,nt,it,!1),_>0){if(_&16)q(x,P,B,V,O,k,F);else if(_&2&&B.class!==V.class&&s(x,"class",null,V.class,F),_&4&&s(x,"style",B.style,V.style,F),_&8){const dt=P.dynamicProps;for(let pt=0;pt<dt.length;pt++){const bt=dt[pt],st=B[bt],Yt=V[bt];(Yt!==st||bt==="value")&&s(x,bt,st,Yt,F,E.children,O,k,xt)}}_&1&&E.children!==P.children&&u(x,P.children)}else!et&&w==null&&q(x,P,B,V,O,k,F);((at=V.onVnodeUpdated)||z)&&ke(()=>{at&&Rn(at,O,P,E),z&&Pi(P,E,O,"updated")},k)},A=(E,P,O,k,F,it,et)=>{for(let x=0;x<P.length;x++){const _=E[x],w=P[x],z=_.el&&(_.type===cn||!ps(_,w)||_.shapeFlag&70)?f(_.el):O;g(_,w,z,null,k,F,it,et,!0)}},q=(E,P,O,k,F,it,et)=>{if(O!==k){if(O!==le)for(const x in O)!Vo(x)&&!(x in k)&&s(E,x,O[x],null,et,P.children,F,it,xt);for(const x in k){if(Vo(x))continue;const _=k[x],w=O[x];_!==w&&x!=="value"&&s(E,x,w,_,et,P.children,F,it,xt)}"value"in k&&s(E,"value",O.value,k.value)}},Q=(E,P,O,k,F,it,et,x,_)=>{const w=P.el=E?E.el:a(""),z=P.anchor=E?E.anchor:a("");let{patchFlag:B,dynamicChildren:V,slotScopeIds:at}=P;at&&(x=x?x.concat(at):at),E==null?(i(w,O,k),i(z,O,k),J(P.children,O,z,F,it,et,x,_)):B>0&&B&64&&V&&E.dynamicChildren?(A(E.dynamicChildren,V,O,F,it,et,x),(P.key!=null||F&&P===F.subTree)&&up(E,P,!0)):Y(E,P,O,z,F,it,et,x,_)},ct=(E,P,O,k,F,it,et,x,_)=>{P.slotScopeIds=x,E==null?P.shapeFlag&512?F.ctx.activate(P,O,k,et,_):I(P,O,k,F,it,et,_):W(E,P,_)},I=(E,P,O,k,F,it,et)=>{const x=E.component=Xg(E,k,F);if(Jh(E)&&(x.ctx.renderer=Rt),qg(x),x.asyncDep){if(F&&F.registerDep(x,G),!E.el){const _=x.subTree=Qt(Gr);h(null,_,P,O)}return}G(x,E,P,O,F,it,et)},W=(E,P,O)=>{const k=P.component=E.component;if(ng(E,P,O))if(k.asyncDep&&!k.asyncResolved){K(k,P,O);return}else k.next=P,j_(k.update),k.update();else P.el=E.el,k.vnode=P},G=(E,P,O,k,F,it,et)=>{const x=()=>{if(E.isMounted){let{next:z,bu:B,u:V,parent:at,vnode:nt}=E,dt=z,pt;Di(E,!1),z?(z.el=nt.el,K(E,z,et)):z=nt,B&&Go(B),(pt=z.props&&z.props.onVnodeBeforeUpdate)&&Rn(pt,at,z,nt),Di(E,!0);const bt=il(E),st=E.subTree;E.subTree=bt,g(st,bt,f(st.el),Mt(st),E,F,it),z.el=bt.el,dt===null&&ig(E,bt.el),V&&ke(V,F),(pt=z.props&&z.props.onVnodeUpdated)&&ke(()=>Rn(pt,at,z,nt),F)}else{let z;const{el:B,props:V}=P,{bm:at,m:nt,parent:dt}=E,pt=As(P);if(Di(E,!1),at&&Go(at),!pt&&(z=V&&V.onVnodeBeforeMount)&&Rn(z,dt,P),Di(E,!0),B&&Ht){const bt=()=>{E.subTree=il(E),Ht(B,E.subTree,E,F,null)};pt?P.type.__asyncLoader().then(()=>!E.isUnmounted&&bt()):bt()}else{const bt=E.subTree=il(E);g(null,bt,O,k,E,F,it),P.el=bt.el}if(nt&&ke(nt,F),!pt&&(z=V&&V.onVnodeMounted)){const bt=P;ke(()=>Rn(z,dt,bt),F)}(P.shapeFlag&256||dt&&As(dt.vnode)&&dt.vnode.shapeFlag&256)&&E.a&&ke(E.a,F),E.isMounted=!0,P=O=k=null}},_=E.effect=new Gc(x,()=>Yc(w),E.scope),w=E.update=()=>_.run();w.id=E.uid,Di(E,!0),w()},K=(E,P,O)=>{P.component=E;const k=E.vnode.props;E.vnode=P,E.next=null,Lg(E,P.props,k,O),Ng(E,P.children,O),ss(),Hu(E),os()},Y=(E,P,O,k,F,it,et,x,_=!1)=>{const w=E&&E.children,z=E?E.shapeFlag:0,B=P.children,{patchFlag:V,shapeFlag:at}=P;if(V>0){if(V&128){rt(w,B,O,k,F,it,et,x,_);return}else if(V&256){tt(w,B,O,k,F,it,et,x,_);return}}at&8?(z&16&&xt(w,F,it),B!==w&&u(O,B)):z&16?at&16?rt(w,B,O,k,F,it,et,x,_):xt(w,F,it,!0):(z&8&&u(O,""),at&16&&J(B,O,k,F,it,et,x,_))},tt=(E,P,O,k,F,it,et,x,_)=>{E=E||Nr,P=P||Nr;const w=E.length,z=P.length,B=Math.min(w,z);let V;for(V=0;V<B;V++){const at=P[V]=_?fi(P[V]):Ln(P[V]);g(E[V],at,O,null,F,it,et,x,_)}w>z?xt(E,F,it,!0,!1,B):J(P,O,k,F,it,et,x,_,B)},rt=(E,P,O,k,F,it,et,x,_)=>{let w=0;const z=P.length;let B=E.length-1,V=z-1;for(;w<=B&&w<=V;){const at=E[w],nt=P[w]=_?fi(P[w]):Ln(P[w]);if(ps(at,nt))g(at,nt,O,null,F,it,et,x,_);else break;w++}for(;w<=B&&w<=V;){const at=E[B],nt=P[V]=_?fi(P[V]):Ln(P[V]);if(ps(at,nt))g(at,nt,O,null,F,it,et,x,_);else break;B--,V--}if(w>B){if(w<=V){const at=V+1,nt=at<z?P[at].el:k;for(;w<=V;)g(null,P[w]=_?fi(P[w]):Ln(P[w]),O,nt,F,it,et,x,_),w++}}else if(w>V)for(;w<=B;)ut(E[w],F,it,!0),w++;else{const at=w,nt=w,dt=new Map;for(w=nt;w<=V;w++){const gt=P[w]=_?fi(P[w]):Ln(P[w]);gt.key!=null&&dt.set(gt.key,w)}let pt,bt=0;const st=V-nt+1;let Yt=!1,Vt=0;const Pt=new Array(st);for(w=0;w<st;w++)Pt[w]=0;for(w=at;w<=B;w++){const gt=E[w];if(bt>=st){ut(gt,F,it,!0);continue}let Lt;if(gt.key!=null)Lt=dt.get(gt.key);else for(pt=nt;pt<=V;pt++)if(Pt[pt-nt]===0&&ps(gt,P[pt])){Lt=pt;break}Lt===void 0?ut(gt,F,it,!0):(Pt[Lt-nt]=w+1,Lt>=Vt?Vt=Lt:Yt=!0,g(gt,P[Lt],O,null,F,it,et,x,_),bt++)}const Tt=Yt?Fg(Pt):Nr;for(pt=Tt.length-1,w=st-1;w>=0;w--){const gt=nt+w,Lt=P[gt],jt=gt+1<z?P[gt+1].el:k;Pt[w]===0?g(null,Lt,O,jt,F,it,et,x,_):Yt&&(pt<0||w!==Tt[pt]?ft(Lt,O,jt,2):pt--)}}},ft=(E,P,O,k,F=null)=>{const{el:it,type:et,transition:x,children:_,shapeFlag:w}=E;if(w&6){ft(E.component.subTree,P,O,k);return}if(w&128){E.suspense.move(P,O,k);return}if(w&64){et.move(E,P,O,Rt);return}if(et===cn){i(it,P,O);for(let B=0;B<_.length;B++)ft(_[B],P,O,k);i(E.anchor,P,O);return}if(et===sl){S(E,P,O);return}if(k!==2&&w&1&&x)if(k===0)x.beforeEnter(it),i(it,P,O),ke(()=>x.enter(it),F);else{const{leave:B,delayLeave:V,afterLeave:at}=x,nt=()=>i(it,P,O),dt=()=>{B(it,()=>{nt(),at&&at()})};V?V(it,nt,dt):dt()}else i(it,P,O)},ut=(E,P,O,k=!1,F=!1)=>{const{type:it,props:et,ref:x,children:_,dynamicChildren:w,shapeFlag:z,patchFlag:B,dirs:V}=E;if(x!=null&&mc(x,null,O,E,!0),z&256){P.ctx.deactivate(E);return}const at=z&1&&V,nt=!As(E);let dt;if(nt&&(dt=et&&et.onVnodeBeforeUnmount)&&Rn(dt,P,E),z&6)ht(E.component,O,k);else{if(z&128){E.suspense.unmount(O,k);return}at&&Pi(E,null,P,"beforeUnmount"),z&64?E.type.remove(E,P,O,F,Rt,k):w&&(it!==cn||B>0&&B&64)?xt(w,P,O,!1,!0):(it===cn&&B&384||!F&&z&16)&&xt(_,P,O),k&&Z(E)}(nt&&(dt=et&&et.onVnodeUnmounted)||at)&&ke(()=>{dt&&Rn(dt,P,E),at&&Pi(E,null,P,"unmounted")},O)},Z=E=>{const{type:P,el:O,anchor:k,transition:F}=E;if(P===cn){ot(O,k);return}if(P===sl){M(E);return}const it=()=>{r(O),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(E.shapeFlag&1&&F&&!F.persisted){const{leave:et,delayLeave:x}=F,_=()=>et(O,it);x?x(E.el,it,_):_()}else it()},ot=(E,P)=>{let O;for(;E!==P;)O=d(E),r(E),E=O;r(P)},ht=(E,P,O)=>{const{bum:k,scope:F,update:it,subTree:et,um:x}=E;k&&Go(k),F.stop(),it&&(it.active=!1,ut(et,E,P,O)),x&&ke(x,P),ke(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},xt=(E,P,O,k=!1,F=!1,it=0)=>{for(let et=it;et<E.length;et++)ut(E[et],P,O,k,F)},Mt=E=>E.shapeFlag&6?Mt(E.component.subTree):E.shapeFlag&128?E.suspense.next():d(E.anchor||E.el),wt=(E,P,O)=>{E==null?P._vnode&&ut(P._vnode,null,null,!0):g(P._vnode||null,E,P,null,null,null,O),Hu(),Xh(),P._vnode=E},Rt={p:g,um:ut,m:ft,r:Z,mt:I,mc:J,pc:Y,pbc:A,n:Mt,o:n};let Ct,Ht;return t&&([Ct,Ht]=t(Rt)),{render:wt,hydrate:Ct,createApp:wg(wt,Ct)}}function Di({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Ug(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function up(n,t,e=!1){const i=n.children,r=t.children;if(Nt(i)&&Nt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fi(r[s]),a.el=o.el),e||up(o,a)),a.type===Oa&&(a.el=o.el)}}function Fg(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}const Bg=n=>n.__isTeleport,cn=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),Gr=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),Cs=[];let Tn=null;function fe(n=!1){Cs.push(Tn=n?null:[])}function Hg(){Cs.pop(),Tn=Cs[Cs.length-1]||null}let Hs=1;function Ku(n){Hs+=n}function fp(n){return n.dynamicChildren=Hs>0?Tn||Nr:null,Hg(),Hs>0&&Tn&&Tn.push(n),n}function Xe(n,t,e,i,r,s){return fp(L(n,t,e,i,r,s,!0))}function ni(n,t,e,i,r){return fp(Qt(n,t,e,i,r,!0))}function dp(n){return n?n.__v_isVNode===!0:!1}function ps(n,t){return n.type===t.type&&n.key===t.key}const Ua="__vInternal",hp=({key:n})=>n??null,Wo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||ne(n)||kt(n)?{i:He,r:n,k:t,f:!!e}:n:null);function L(n,t=null,e=null,i=0,r=null,s=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&hp(t),ref:t&&Wo(t),scopeId:Kh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:He};return a?(Jc(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Hs>0&&!o&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const Qt=zg;function zg(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===rg)&&(n=Gr),dp(n)){const a=kr(n,t,!0);return e&&Jc(a,e),Hs>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(n)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(Zg(n)&&(n=n.__vccOpts),t){t=Vg(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=zc(a)),ce(l)&&(Hh(l)&&!Nt(l)&&(l=Ne({},l)),t.style=Hc(l))}const o=ge(n)?1:sg(n)?128:Bg(n)?64:ce(n)?4:kt(n)?2:0;return L(n,t,e,i,r,o,s,!0)}function Vg(n){return n?Hh(n)||Ua in n?Ne({},n):n:null}function kr(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=t?kg(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&hp(a),ref:t&&t.ref?e&&r?Nt(r)?r.concat(Wo(t)):[r,Wo(t)]:Wo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==cn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&kr(n.ssContent),ssFallback:n.ssFallback&&kr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Gg(n=" ",t=0){return Qt(Oa,null,n,t)}function Ln(n){return n==null||typeof n=="boolean"?Qt(Gr):Nt(n)?Qt(cn,null,n.slice()):typeof n=="object"?fi(n):Qt(Oa,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:kr(n)}function Jc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Jc(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(Ua in t)?t._ctx=He:r===3&&He&&(He.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:He},e=32):(t=String(t),i&64?(e=16,t=[Gg(t)]):e=8);n.children=t,n.shapeFlag|=e}function kg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=zc([t.class,i.class]));else if(r==="style")t.style=Hc([t.style,i.style]);else if(Aa(r)){const s=t[r],o=i[r];o&&s!==o&&!(Nt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Rn(n,t,e,i=null){An(n,t,7,[e,i])}const Wg=rp();let $g=0;function Xg(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Wg,s={uid:$g++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new v_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:op(i,r),emitsOptions:Yh(i,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:i.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Q_.bind(null,s),n.ce&&n.ce(s),s}let De=null,Qc,lr,ju="__VUE_INSTANCE_SETTERS__";(lr=sc()[ju])||(lr=sc()[ju]=[]),lr.push(n=>De=n),Qc=n=>{lr.length>1?lr.forEach(t=>t(n)):lr[0](n)};const Wr=n=>{Qc(n),n.scope.on()},Yi=()=>{De&&De.scope.off(),Qc(null)};function pp(n){return n.vnode.shapeFlag&4}let zs=!1;function qg(n,t=!1){zs=t;const{props:e,children:i}=n.vnode,r=pp(n);Rg(n,e,r,t),Dg(n,i);const s=r?Yg(n,t):void 0;return zs=!1,s}function Yg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=zh(new Proxy(n.ctx,xg));const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?jg(n):null;Wr(n),ss();const s=mi(i,n,0,[n.props,r]);if(os(),Yi(),Mh(s)){if(s.then(Yi,Yi),t)return s.then(o=>{Zu(n,o,t)}).catch(o=>{Da(o,n,0)});n.asyncDep=s}else Zu(n,s,t)}else mp(n,t)}function Zu(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ce(t)&&(n.setupState=kh(t)),mp(n,e)}let Ju;function mp(n,t,e){const i=n.type;if(!n.render){if(!t&&Ju&&!i.render){const r=i.template||jc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ne(Ne({isCustomElement:s,delimiters:a},o),l);i.render=Ju(r,c)}}n.render=i.render||Nn}{Wr(n),ss();try{Sg(n)}finally{os(),Yi()}}}function Kg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,e){return Ke(n,"get","$attrs"),t[e]}}))}function jg(n){const t=e=>{n.exposed=e||{}};return{get attrs(){return Kg(n)},slots:n.slots,emit:n.emit,expose:t}}function Fa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(kh(zh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ws)return ws[e](n)},has(t,e){return e in t||e in ws}}))}function Zg(n){return kt(n)&&"__vccOpts"in n}const Jg=(n,t)=>X_(n,t,zs),Qg=Symbol.for("v-scx"),tv=()=>ko(Qg),ev="3.3.13",nv="http://www.w3.org/2000/svg",zi=typeof document<"u"?document:null,Qu=zi&&zi.createElement("template"),iv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t?zi.createElementNS(nv,n):zi.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>zi.createTextNode(n),createComment:n=>zi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Qu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Qu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},rv=Symbol("_vtc");function sv(n,t,e){const i=n[rv];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ov=Symbol("_vod"),av=Symbol("");function lv(n,t,e){const i=n.style,r=ge(e);if(e&&!r){if(t&&!ge(t))for(const s in t)e[s]==null&&_c(i,s,"");for(const s in e)_c(i,s,e[s])}else{const s=i.display;if(r){if(t!==e){const o=i[av];o&&(e+=";"+o),i.cssText=e}}else t&&n.removeAttribute("style");ov in n&&(i.display=s)}}const tf=/\s*!important$/;function _c(n,t,e){if(Nt(e))e.forEach(i=>_c(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=cv(n,t);tf.test(e)?n.setProperty(rs(i),e.replace(tf,""),"important"):n[i]=e}}const ef=["Webkit","Moz","ms"],ol={};function cv(n,t){const e=ol[t];if(e)return e;let i=zr(t);if(i!=="filter"&&i in n)return ol[t]=i;i=Th(i);for(let r=0;r<ef.length;r++){const s=ef[r]+i;if(s in n)return ol[t]=s}return t}const nf="http://www.w3.org/1999/xlink";function uv(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(nf,t.slice(6,t.length)):n.setAttributeNS(nf,t,e);else{const s=m_(t);e==null||s&&!Ah(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function fv(n,t,e,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),n[t]=e??"";return}const a=n.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=e;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=e??"";c!==u&&(n.value=u),e==null&&n.removeAttribute(t);return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=Ah(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function Vi(n,t,e,i){n.addEventListener(t,e,i)}function dv(n,t,e,i){n.removeEventListener(t,e,i)}const rf=Symbol("_vei");function hv(n,t,e,i,r=null){const s=n[rf]||(n[rf]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=pv(t);if(i){const c=s[t]=gv(i,r);Vi(n,a,c,l)}else o&&(dv(n,a,o,l),s[t]=void 0)}}const sf=/(?:Once|Passive|Capture)$/;function pv(n){let t;if(sf.test(n)){t={};let i;for(;i=n.match(sf);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let al=0;const mv=Promise.resolve(),_v=()=>al||(mv.then(()=>al=0),al=Date.now());function gv(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;An(vv(i,e.value),t,5,[i])};return e.value=n,e.attached=_v(),e}function vv(n,t){if(Nt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const of=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ev=(n,t,e,i,r=!1,s,o,a,l)=>{t==="class"?sv(n,i,r):t==="style"?lv(n,e,i):Aa(t)?Uc(t)||hv(n,t,e,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xv(n,t,i,r))?fv(n,t,i,s,o,a,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),uv(n,t,i,r))};function xv(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&of(t)&&kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return of(t)&&ge(e)?!1:t in n}const ha=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Nt(t)?e=>Go(t,e):t};function Sv(n){n.target.composing=!0}function af(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Fr=Symbol("_assign"),Le={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Fr]=ha(r);const s=i||r.props&&r.props.type==="number";Vi(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),s&&(a=la(a)),n[Fr](a)}),e&&Vi(n,"change",()=>{n.value=n.value.trim()}),t||(Vi(n,"compositionstart",Sv),Vi(n,"compositionend",af),Vi(n,"change",af))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:i,number:r}},s){if(n[Fr]=ha(s),n.composing)return;const o=r||n.type==="number"?la(n.value):n.value,a=t??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(e||i&&n.value.trim()===a)||(n.value=a))}},_p={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const r=wa(t);Vi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?la(pa(o)):pa(o));n[Fr](n.multiple?r?new Set(s):s:s[0])}),n[Fr]=ha(i)},mounted(n,{value:t}){lf(n,t)},beforeUpdate(n,t,e){n[Fr]=ha(e)},updated(n,{value:t}){lf(n,t)}};function lf(n,t){const e=n.multiple;if(!(e&&!Nt(t)&&!wa(t))){for(let i=0,r=n.options.length;i<r;i++){const s=n.options[i],o=pa(s);if(e)Nt(t)?s.selected=g_(t,o)>-1:s.selected=t.has(o);else if(Ra(pa(s),t)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function pa(n){return"_value"in n?n._value:n.value}const Mv=Ne({patchProp:Ev},iv);let cf;function bv(){return cf||(cf=Ig(Mv))}const yv=(...n)=>{const t=bv().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=Tv(i);if(!r)return;const s=t._component;!kt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Tv(n){return ge(n)?document.querySelector(n):n}Pa({count:0});ie([]);const $o=ie(""),Rs=ie(""),Ls=ie(""),Xo=ie(""),ma=ie([]),$r=ie([]),Vs=ie([]),qo=ie(1280),Yo=ie(720),Ko=ie(1),jo=ie(1),Zo=ie(640),Jo=ie(360),Qo=ie([1,1,1,1,1]),ll=ie("UR"),Ki=ie([0,0,0]),ys=ie([0,0,0]),ta=ie([0,0,0,0]),ea=ie("rotvec");function uf(n){eel.run_he_cal(ea.value)(t=>{ys.value=t[0].map(e=>e.toFixed(4)),Ki.value=t[1].map(e=>e.toFixed(5)),ta.value=t[2].map(e=>Number(e))})}function cl(n){eel.save_cam_cal_res(Rs.value)(t=>{Ls.value=t})}function ul(n){eel.save_he_res(Rs.value)(t=>{Ls.value=t})}function fl(n){eel.make_detector($o.value)(t=>{Vs.value=[],t.forEach(e=>{Vs.value.push({name:e})})})}function Ps(n){eel.auto_detect_camera()(t=>{qo.value=t[2][0],Yo.value=t[2][1],Qo.value=t[1],Ko.value=t[0][0],jo.value=t[0][4],Zo.value=t[0][2],Jo.value=t[0][5]})}function na(n){eel.detect_cam_poses()(t=>{ma.value=[],t.forEach(e=>{const i=Vs.value.find(r=>r.name==e[0]);i.tvec=e[2],i.rvec=e[1]}),ma.value=Vs.value})}function gc(n){eel.parse_robot_program(Xo.value)(t=>{$r.value=[],t.forEach(e=>{const i={name:e[0],tvec:e[2],rvec:e[1]};$r.value.push(i)})})}const Av={class:"bg-dark-subtle border rounded-3 p-2 my-2 d-flex flex-column"},wv={class:"mb-3"},Ti={__name:"InputForm",props:["title"],setup(n){const t=n;return(e,i)=>(fe(),Xe("div",Av,[L("h6",wv,ye(t.title),1),ep(e.$slots,"default")]))}},Cv={class:"row"},Rv={class:"input-group col-12"},Lv=L("span",{class:"input-group-text",id:"basic-addon1"},[L("i",{class:"bi bi-folder"})],-1),Pv={class:"btn-toolbar mt-2 col-12",role:"toolbar"},Dv=L("div",{class:"btn-group me-2",role:"group"},[L("button",{type:"button",class:"btn btn-outline-light","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample"},[L("span",{class:"bi bi-sliders"}," Settings")])],-1),Nv=L("button",{type:"button",class:"btn btn-outline-secondary dropdown-toggle ms-auto","data-bs-toggle":"dropdown"}," Manual ",-1),Iv={class:"dropdown-menu"},Ov={__name:"InputsPath",setup(n){function t(){fl(),Ps(),na()}return(e,i)=>(fe(),ni(Ti,{title:"IMAGES DIRECTORY"},{default:Bn(()=>[L("div",Cv,[L("div",Rv,[Lv,be(L("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=r=>ne($o)?$o.value=r:null),placeholder:"<Path to Images Directory>",class:"form-control"},null,512),[[Le,Ft($o)]])]),L("div",Pv,[Dv,Nv,L("ul",Iv,[L("li",null,[L("a",{type:"button",class:"dropdown-item",onClick:i[1]||(i[1]=(...r)=>Ft(fl)&&Ft(fl)(...r))},"Load Images")]),L("li",null,[L("a",{type:"button",class:"dropdown-item",onClick:i[2]||(i[2]=(...r)=>Ft(Ps)&&Ft(Ps)(...r))},"Calibrate Camera")]),L("li",null,[L("a",{type:"button",class:"dropdown-item",onClick:i[3]||(i[3]=(...r)=>Ft(na)&&Ft(na)(...r))},"Extract Poses")])]),L("div",{class:"btn-group ms-2",role:"group"},[L("button",{type:"button",class:"btn btn-light",onClick:t}," AUTO PROCESS ")])])])]),_:1}))}},Uv={class:"d-flex flex-column"},Fv={class:"d-flex"},Bv={class:"flex-fill"},Hv={class:"border rounded-3 overflow-auto h-100",style:{flex:"1 1 0"}},zv={__name:"GenericTitledList",props:["listTitle"],setup(n){const t=n;return(e,i)=>(fe(),Xe("div",Uv,[L("div",Fv,[L("h4",Bv,ye(t.listTitle),1),L("h1",{type:"button",class:"btn btn-dark bi bi-arrow-clockwise my-auto",onClick:i[0]||(i[0]=r=>e.$emit("refreshList"))})]),L("div",Hv,[ep(e.$slots,"default")])]))}},Vv={class:"d-flex flex-column"},Gv={class:"table w-100 font-monospace"},kv=L("thead",null,[L("tr",null,[L("th",{scope:"col"},"File"),L("th",{scope:"col"},"Tx"),L("th",{scope:"col"},"Ty"),L("th",{scope:"col"},"Tz"),L("th",{scope:"col"},"Rx"),L("th",{scope:"col"},"Ry"),L("th",{scope:"col"},"Rz"),L("th",{scope:"col"},"Rw")])],-1),Wv={scope:"row"},gp={__name:"ImagesTable",props:["PosesList","tableTitle"],setup(n){const t=n;return(e,i)=>(fe(),Xe("div",Vv,[Qt(zv,{class:"flex-fill",listTitle:t.tableTitle,onRefreshList:i[0]||(i[0]=r=>e.$emit("refreshTable"))},{default:Bn(()=>[L("table",Gv,[kv,L("tbody",null,[(fe(!0),Xe(cn,null,Eg(t.PosesList,r=>{var s,o,a,l,c,u,f;return fe(),Xe("tr",null,[L("th",Wv,ye(r.name),1),L("td",null,ye(((s=r.tvec)==null?void 0:s[0].toFixed(3))??"-"),1),L("td",null,ye(((o=r.tvec)==null?void 0:o[1].toFixed(3))??"-"),1),L("td",null,ye(((a=r.tvec)==null?void 0:a[2].toFixed(3))??"-"),1),L("td",null,ye(((l=r.rvec)==null?void 0:l[0].toFixed(4))??"-"),1),L("td",null,ye(((c=r.rvec)==null?void 0:c[1].toFixed(4))??"-"),1),L("td",null,ye(((u=r.rvec)==null?void 0:u[2].toFixed(4))??"-"),1),L("td",null,ye(((f=r.rvec)==null?void 0:f[3].toFixed(4))??"-"),1)])}),256))])])]),_:1},8,["listTitle"])]))}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="160",$v=0,ff=1,Xv=2,vp=1,qv=2,Xn=3,Si=0,qe=1,tn=2,_i=0,Br=1,df=2,hf=3,pf=4,Yv=5,Gi=100,Kv=101,jv=102,mf=103,_f=104,Zv=200,Jv=201,Qv=202,tE=203,vc=204,Ec=205,eE=206,nE=207,iE=208,rE=209,sE=210,oE=211,aE=212,lE=213,cE=214,uE=0,fE=1,dE=2,_a=3,hE=4,pE=5,mE=6,_E=7,Ep=0,gE=1,vE=2,gi=0,EE=1,xE=2,SE=3,ME=4,bE=5,yE=6,xp=300,Xr=301,qr=302,xc=303,Sc=304,Ba=306,Mc=1e3,bn=1001,bc=1002,Be=1003,gf=1004,dl=1005,un=1006,TE=1007,Gs=1008,vi=1009,AE=1010,wE=1011,eu=1012,Sp=1013,di=1014,hi=1015,ks=1016,Mp=1017,bp=1018,ji=1020,CE=1021,yn=1023,RE=1024,LE=1025,Zi=1026,Yr=1027,PE=1028,yp=1029,DE=1030,Tp=1031,Ap=1033,hl=33776,pl=33777,ml=33778,_l=33779,vf=35840,Ef=35841,xf=35842,Sf=35843,wp=36196,Mf=37492,bf=37496,yf=37808,Tf=37809,Af=37810,wf=37811,Cf=37812,Rf=37813,Lf=37814,Pf=37815,Df=37816,Nf=37817,If=37818,Of=37819,Uf=37820,Ff=37821,gl=36492,Bf=36494,Hf=36495,NE=36283,zf=36284,Vf=36285,Gf=36286,Cp=3e3,Ji=3001,IE=3200,OE=3201,UE=0,FE=1,fn="",Te="srgb",Qn="srgb-linear",nu="display-p3",Ha="display-p3-linear",ga="linear",ae="srgb",va="rec709",Ea="p3",cr=7680,kf=519,BE=512,HE=513,zE=514,Rp=515,VE=516,GE=517,kE=518,WE=519,Wf=35044,$f="300 es",yc=1035,Yn=2e3,xa=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,Tc=180/Math.PI;function Xs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function $E(n,t){return(n%t+t)%t}function El(n,t,e){return(1-e)*n+e*t}function Xf(n){return(n&n-1)===0&&n!==0}function Ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ge(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,r,s,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],v=i[8],g=r[0],p=r[3],h=r[6],T=r[1],S=r[4],M=r[7],N=r[2],C=r[5],R=r[8];return s[0]=o*g+a*T+l*N,s[3]=o*p+a*S+l*C,s[6]=o*h+a*M+l*R,s[1]=c*g+u*T+f*N,s[4]=c*p+u*S+f*C,s[7]=c*h+u*M+f*R,s[2]=d*g+m*T+v*N,s[5]=d*p+m*S+v*C,s[8]=d*h+m*M+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,v=e*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(r*c-u*i)*g,t[2]=(a*i-r*o)*g,t[3]=d*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-a*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new qt;function Lp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XE(){const n=Sa("canvas");return n.style.display="block",n}const qf={};function Ds(n){n in qf||(qf[n]=!0,console.warn(n))}const Yf=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kf=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),co={[Qn]:{transfer:ga,primaries:va,toReference:n=>n,fromReference:n=>n},[Te]:{transfer:ae,primaries:va,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ha]:{transfer:ga,primaries:Ea,toReference:n=>n.applyMatrix3(Kf),fromReference:n=>n.applyMatrix3(Yf)},[nu]:{transfer:ae,primaries:Ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Kf),fromReference:n=>n.applyMatrix3(Yf).convertLinearToSRGB()}},qE=new Set([Qn,Ha]),te={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!qE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=co[t].toReference,r=co[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return co[n].primaries},getTransfer:function(n){return n===fn?ga:co[n].transfer}};function Hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ur;class Pp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ur===void 0&&(ur=Sa("canvas")),ur.width=t.width,ur.height=t.height;const i=ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ur}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hr(e[i]/255)*255):e[i]=Hr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let YE=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ml(r[o].image)):s.push(Ml(r[o]))}else s=Ml(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;class en extends as{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=bn,r=bn,s=un,o=Gs,a=yn,l=vi,c=en.DEFAULT_ANISOTROPY,u=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Xs(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ji?Te:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mc:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mc:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Ji:Cp}set encoding(t){Ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ji?Te:fn}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=xp;en.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(m+1)/2,N=(h+1)/2,C=(u+d)/4,R=(f+g)/4,J=(v+p)/4;return S>M&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=R/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=J/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=R/s,r=J/s),this.set(i,r,s,e),this}let T=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(f-g)/T,this.z=(d-u)/T,this.w=Math.acos((c+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends as{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ji?Te:fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends jE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Np extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZE extends en{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==d||c!==m||u!==v){let p=1-a;const h=l*d+c*m+u*v+f*g,T=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const N=Math.sqrt(S),C=Math.atan2(N,h*T);p=Math.sin(p*C)/N,a=Math.sin(a*C)/N}const M=a*T;if(l=l*p+d*M,c=c*p+m*M,u=u*p+v*M,f=f*p+g*M,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return t[e]=a*v+u*f+l*m-c*d,t[e+1]=l*v+u*d+c*f-a*m,t[e+2]=c*v+u*m+a*d-l*f,t[e+3]=u*v-a*f-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bl.copy(this).projectOnVector(t),this.sub(bl)}reflect(t){return this.sub(bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bl=new H,jf=new jn;class qs{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),fo.subVectors(this.max,_s),fr.subVectors(t.a,_s),dr.subVectors(t.b,_s),hr.subVectors(t.c,_s),si.subVectors(dr,fr),oi.subVectors(hr,dr),Ni.subVectors(fr,hr);let e=[0,-si.z,si.y,0,-oi.z,oi.y,0,-Ni.z,Ni.y,si.z,0,-si.x,oi.z,0,-oi.x,Ni.z,0,-Ni.x,-si.y,si.x,0,-oi.y,oi.x,0,-Ni.y,Ni.x,0];return!yl(e,fr,dr,hr,fo)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,fr,dr,hr,fo))?!1:(ho.crossVectors(si,oi),e=[ho.x,ho.y,ho.z],yl(e,fr,dr,hr,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new H,new H,new H,new H,new H,new H,new H,new H],gn=new H,uo=new qs,fr=new H,dr=new H,hr=new H,si=new H,oi=new H,Ni=new H,_s=new H,fo=new H,ho=new H,Ii=new H;function yl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ii.fromArray(n,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const JE=new qs,gs=new H,Tl=new H;class za{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):JE.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Tl)),this.expandByPoint(gs.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new H,Al=new H,po=new H,ai=new H,wl=new H,mo=new H,Cl=new H;class Ip{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Al.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Al);const s=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=ai.dot(this.direction),l=-ai.dot(po),c=ai.lengthSq(),u=Math.abs(1-o*o);let f,d,m,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const g=1/u;f*=g,d*=g,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Al).addScaledVector(po,d),m}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,r,s){wl.subVectors(e,t),mo.subVectors(i,t),Cl.crossVectors(wl,mo);let o=this.direction.dot(Cl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(ai,mo));if(l<0)return null;const c=a*this.direction.dot(wl.cross(ai));if(c<0||l+c>o)return null;const u=-a*ai.dot(Cl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,o,a,l,c,u,f,d,m,v,g,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,d,m,v,g,p)}set(t,e,i,r,s,o,a,l,c,u,f,d,m,v,g,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=v,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/pr.setFromMatrixColumn(t,0).length(),s=1/pr.setFromMatrixColumn(t,1).length(),o=1/pr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*f,v=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+v*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*f,v=c*u,g=c*f;e[0]=d+g*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*f,v=c*u,g=c*f;e[0]=d-g*a,e[4]=-o*f,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*f,v=a*u,g=a*f;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=g-d*f,e[8]=v*f+m,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*f+v,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*l,m=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+g,e[5]=o*u,e[9]=m*f-v,e[2]=v*f-m,e[6]=a*u,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(QE,t,tx)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),li.crossVectors(i,Ze),li.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),li.crossVectors(i,Ze)),li.normalize(),_o.crossVectors(Ze,li),r[0]=li.x,r[4]=_o.x,r[8]=Ze.x,r[1]=li.y,r[5]=_o.y,r[9]=Ze.y,r[2]=li.z,r[6]=_o.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],v=i[2],g=i[6],p=i[10],h=i[14],T=i[3],S=i[7],M=i[11],N=i[15],C=r[0],R=r[4],J=r[8],b=r[12],A=r[1],q=r[5],Q=r[9],ct=r[13],I=r[2],W=r[6],G=r[10],K=r[14],Y=r[3],tt=r[7],rt=r[11],ft=r[15];return s[0]=o*C+a*A+l*I+c*Y,s[4]=o*R+a*q+l*W+c*tt,s[8]=o*J+a*Q+l*G+c*rt,s[12]=o*b+a*ct+l*K+c*ft,s[1]=u*C+f*A+d*I+m*Y,s[5]=u*R+f*q+d*W+m*tt,s[9]=u*J+f*Q+d*G+m*rt,s[13]=u*b+f*ct+d*K+m*ft,s[2]=v*C+g*A+p*I+h*Y,s[6]=v*R+g*q+p*W+h*tt,s[10]=v*J+g*Q+p*G+h*rt,s[14]=v*b+g*ct+p*K+h*ft,s[3]=T*C+S*A+M*I+N*Y,s[7]=T*R+S*q+M*W+N*tt,s[11]=T*J+S*Q+M*G+N*rt,s[15]=T*b+S*ct+M*K+N*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],m=t[14],v=t[3],g=t[7],p=t[11],h=t[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+g*(+e*l*m-e*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+e*c*f-e*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+h*(-r*a*u-e*l*f+e*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],m=t[11],v=t[12],g=t[13],p=t[14],h=t[15],T=f*p*c-g*d*c+g*l*m-a*p*m-f*l*h+a*d*h,S=v*d*c-u*p*c-v*l*m+o*p*m+u*l*h-o*d*h,M=u*g*c-v*f*c+v*a*m-o*g*m-u*a*h+o*f*h,N=v*f*l-u*g*l-v*a*d+o*g*d+u*a*p-o*f*p,C=e*T+i*S+r*M+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return t[0]=T*R,t[1]=(g*d*s-f*p*s-g*r*m+i*p*m+f*r*h-i*d*h)*R,t[2]=(a*p*s-g*l*s+g*r*c-i*p*c-a*r*h+i*l*h)*R,t[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*R,t[4]=S*R,t[5]=(u*p*s-v*d*s+v*r*m-e*p*m-u*r*h+e*d*h)*R,t[6]=(v*l*s-o*p*s-v*r*c+e*p*c+o*r*h-e*l*h)*R,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*m+e*l*m)*R,t[8]=M*R,t[9]=(v*f*s-u*g*s-v*i*m+e*g*m+u*i*h-e*f*h)*R,t[10]=(o*g*s-v*a*s+v*i*c-e*g*c-o*i*h+e*a*h)*R,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*m-e*a*m)*R,t[12]=N*R,t[13]=(u*g*r-v*f*r+v*i*d-e*g*d-u*i*p+e*f*p)*R,t[14]=(v*a*r-o*g*r-v*i*l+e*g*l+o*i*p-e*a*p)*R,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*d+e*a*d)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,v=s*f,g=o*u,p=o*f,h=a*f,T=l*c,S=l*u,M=l*f,N=i.x,C=i.y,R=i.z;return r[0]=(1-(g+h))*N,r[1]=(m+M)*N,r[2]=(v-S)*N,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+h))*C,r[6]=(p+T)*C,r[7]=0,r[8]=(v+S)*R,r[9]=(p-T)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],vn.copy(this);const c=1/s,u=1/o,f=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,e.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Yn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r);let m,v;if(a===Yn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===xa)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Yn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),d=(e+t)*c,m=(i+r)*u;let v,g;if(a===Yn)v=(o+s)*f,g=-2*f;else if(a===xa)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const pr=new H,vn=new pe,QE=new H(0,0,0),tx=new H(1,1,1),li=new H,_o=new H,Ze=new H,Zf=new pe,Jf=new jn;class Va{constructor(t=0,e=0,i=0,r=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ex=0;const Qf=new H,mr=new jn,kn=new pe,go=new H,vs=new H,nx=new H,ix=new jn,td=new H(1,0,0),ed=new H(0,1,0),nd=new H(0,0,1),rx={type:"added"},sx={type:"removed"};class Ye extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new H,e=new Va,i=new jn,r=new H(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new qt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qf.copy(t).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(vs,go,this.up):kn.lookAt(go,vs,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(kn),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(rx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sx)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,nx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ye.DEFAULT_UP=new H(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new H,Wn=new H,Rl=new H,$n=new H,_r=new H,gr=new H,id=new H,Ll=new H,Pl=new H,Dl=new H;let vo=!1;class Sn{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),En.subVectors(t,e),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){En.subVectors(r,e),Wn.subVectors(i,e),Rl.subVectors(t,e);const o=En.dot(En),a=En.dot(Wn),l=En.dot(Rl),c=Wn.dot(Wn),u=Wn.dot(Rl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(t,e,i,r,s,o,a,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(t,e,i,r,s,o,a,l)}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static isFrontFacing(t,e,i,r){return En.subVectors(i,e),Wn.subVectors(t,e),En.cross(Wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),Sn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;_r.subVectors(r,i),gr.subVectors(s,i),Ll.subVectors(t,i);const l=_r.dot(Ll),c=gr.dot(Ll);if(l<=0&&c<=0)return e.copy(i);Pl.subVectors(t,r);const u=_r.dot(Pl),f=gr.dot(Pl);if(u>=0&&f<=u)return e.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(_r,o);Dl.subVectors(t,s);const m=_r.dot(Dl),v=gr.dot(Dl);if(v>=0&&m<=v)return e.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(gr,a);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return id.subVectors(s,r),a=(f-u)/(f-u+(m-v)),e.copy(r).addScaledVector(id,a);const h=1/(p+g+d);return o=g*h,a=d*h,e.copy(i).addScaledVector(_r,o).addScaledVector(gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Nl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=te.workingColorSpace){if(t=$E(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Nl(o,s,t+1/3),this.g=Nl(o,s,t),this.b=Nl(o,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,e=Te){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const i=Up[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}copyLinearToSRGB(t){return this.r=Sl(t.r),this.g=Sl(t.g),this.b=Sl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return te.fromWorkingColorSpace(Re.copy(this),t),Math.round(We(Re.r*255,0,255))*65536+Math.round(We(Re.g*255,0,255))*256+Math.round(We(Re.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Re.copy(this),e);const i=Re.r,r=Re.g,s=Re.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Te){te.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,i=Re.g,r=Re.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Eo);const i=El(ci.h,Eo.h,e),r=El(ci.s,Eo.s,e),s=El(ci.l,Eo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Zt;Zt.NAMES=Up;let ox=0;class Ys extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Br,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=Ec,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ec&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Kr extends Ys{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new H,xo=new ee;class In{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Wf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ge(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),i=Ge(i,this.array),r=Ge(r,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wf&&(t.usage=this.usage),t}}class Fp extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bp extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class nn extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ax=0;const ln=new pe,Il=new Ye,vr=new H,Je=new qs,Es=new qs,Me=new H;class Hn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lp(t)?Bp:Fp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Je.min,Es.min),Je.expandByPoint(Me),Me.addVectors(Je.max,Es.max),Je.expandByPoint(Me)):(Je.expandByPoint(Es.min),Je.expandByPoint(Es.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Me.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(t,c),Me.add(vr)),r=Math.max(r,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<a;A++)c[A]=new H,u[A]=new H;const f=new H,d=new H,m=new H,v=new ee,g=new ee,p=new ee,h=new H,T=new H;function S(A,q,Q){f.fromArray(r,A*3),d.fromArray(r,q*3),m.fromArray(r,Q*3),v.fromArray(o,A*2),g.fromArray(o,q*2),p.fromArray(o,Q*2),d.sub(f),m.sub(f),g.sub(v),p.sub(v);const ct=1/(g.x*p.y-p.x*g.y);isFinite(ct)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(ct),T.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(ct),c[A].add(h),c[q].add(h),c[Q].add(h),u[A].add(T),u[q].add(T),u[Q].add(T))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,q=M.length;A<q;++A){const Q=M[A],ct=Q.start,I=Q.count;for(let W=ct,G=ct+I;W<G;W+=3)S(i[W+0],i[W+1],i[W+2])}const N=new H,C=new H,R=new H,J=new H;function b(A){R.fromArray(s,A*3),J.copy(R);const q=c[A];N.copy(q),N.sub(R.multiplyScalar(R.dot(q))).normalize(),C.crossVectors(J,q);const ct=C.dot(u[A])<0?-1:1;l[A*4]=N.x,l[A*4+1]=N.y,l[A*4+2]=N.z,l[A*4+3]=ct}for(let A=0,q=M.length;A<q;++A){const Q=M[A],ct=Q.start,I=Q.count;for(let W=ct,G=ct+I;W<G;W+=3)b(i[W+0]),b(i[W+1]),b(i[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let h=0;h<u;h++)d[v++]=c[m++]}return new In(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new pe,Oi=new Ip,So=new za,sd=new H,Er=new H,xr=new H,Sr=new H,Ol=new H,Mo=new H,bo=new ee,yo=new ee,To=new ee,od=new H,ad=new H,ld=new H,Ao=new H,wo=new H;class dn extends Ye{constructor(t=new Hn,e=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ol.fromBufferAttribute(f,t),o?Mo.addScaledVector(Ol,u):Mo.addScaledVector(Ol.sub(e),u))}e.add(Mo)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),Oi.copy(t.ray).recast(t.near),!(So.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(So,sd)===null||Oi.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(rd.copy(s).invert(),Oi.copy(t.ray).applyMatrix4(rd),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],h=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,N=S;M<N;M+=3){const C=a.getX(M),R=a.getX(M+1),J=a.getX(M+2);r=Co(this,h,t,i,c,u,f,C,R,J),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=v,h=g;p<h;p+=3){const T=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);r=Co(this,o,t,i,c,u,f,T,S,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const p=d[v],h=o[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,N=S;M<N;M+=3){const C=M,R=M+1,J=M+2;r=Co(this,h,t,i,c,u,f,C,R,J),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,h=g;p<h;p+=3){const T=p,S=p+1,M=p+2;r=Co(this,o,t,i,c,u,f,T,S,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function lx(n,t,e,i,r,s,o,a){let l;if(t.side===qe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Si,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:n}}function Co(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Er),n.getVertexPosition(l,xr),n.getVertexPosition(c,Sr);const u=lx(n,t,e,i,Er,xr,Sr,Ao);if(u){r&&(bo.fromBufferAttribute(r,a),yo.fromBufferAttribute(r,l),To.fromBufferAttribute(r,c),u.uv=Sn.getInterpolation(Ao,Er,xr,Sr,bo,yo,To,new ee)),s&&(bo.fromBufferAttribute(s,a),yo.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),u.uv1=Sn.getInterpolation(Ao,Er,xr,Sr,bo,yo,To,new ee),u.uv2=u.uv1),o&&(od.fromBufferAttribute(o,a),ad.fromBufferAttribute(o,l),ld.fromBufferAttribute(o,c),u.normal=Sn.getInterpolation(Ao,Er,xr,Sr,od,ad,ld,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Sn.getNormal(Er,xr,Sr,f.normal),u.face=f}return u}class sr extends Hn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,e,t,o,s,0),v("z","y","x",1,-1,i,e,-t,o,s,1),v("x","z","y",1,1,t,i,e,r,o,2),v("x","z","y",1,-1,t,i,-e,r,o,3),v("x","y","z",1,-1,t,e,i,r,s,4),v("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function v(g,p,h,T,S,M,N,C,R,J,b){const A=M/R,q=N/J,Q=M/2,ct=N/2,I=C/2,W=R+1,G=J+1;let K=0,Y=0;const tt=new H;for(let rt=0;rt<G;rt++){const ft=rt*q-ct;for(let ut=0;ut<W;ut++){const Z=ut*A-Q;tt[g]=Z*T,tt[p]=ft*S,tt[h]=I,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[p]=0,tt[h]=C>0?1:-1,u.push(tt.x,tt.y,tt.z),f.push(ut/R),f.push(1-rt/J),K+=1}}for(let rt=0;rt<J;rt++)for(let ft=0;ft<R;ft++){const ut=d+ft+W*rt,Z=d+ft+W*(rt+1),ot=d+(ft+1)+W*(rt+1),ht=d+(ft+1)+W*rt;l.push(ut,Z,ht),l.push(Z,ot,ht),Y+=6}a.addGroup(m,Y,b),m+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Fe(n){const t={};for(let e=0;e<n.length;e++){const i=jr(n[e]);for(const r in i)t[r]=i[r]}return t}function cx(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hp(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}const ux={clone:jr,merge:Fe};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Ys{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=cx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zp extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends zp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mr=-90,br=1;class hx extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qe(Mr,br,t,e);r.layers=this.layers,this.add(r);const s=new Qe(Mr,br,t,e);s.layers=this.layers,this.add(s);const o=new Qe(Mr,br,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Mr,br,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Mr,br,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Mr,br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Vp extends en{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Xr,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class px extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ji?Te:fn),this.texture=new Vp(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sr(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:_i});s.uniforms.tEquirect.value=e;const o=new dn(r,s),a=e.minFilter;return e.minFilter===Gs&&(e.minFilter=un),new hx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Ul=new H,mx=new H,_x=new qt;class Fi{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Ul.subVectors(i,e).cross(mx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_x.getNormalMatrix(t),r=this.coplanarPoint(Ul).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new za,Ro=new H;class Gp{constructor(t=new Fi,e=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],m=r[8],v=r[9],g=r[10],p=r[11],h=r[12],T=r[13],S=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-h).normalize(),i[1].setComponents(l+s,d+c,p+m,M+h).normalize(),i[2].setComponents(l+o,d+u,p+v,M+T).normalize(),i[3].setComponents(l-o,d-u,p-v,M-T).normalize(),i[4].setComponents(l-a,d-f,p-g,M-S).normalize(),e===Yn)i[5].setComponents(l+a,d+f,p+g,M+S).normalize();else if(e===xa)i[5].setComponents(a,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ro.x=r.normal.x>0?t.max.x:t.min.x,Ro.y=r.normal.y>0?t.max.y:t.min.y,Ro.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kp(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function gx(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=f.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const d=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&v.length===0&&n.bufferSubData(f,0,d),v.length!==0){for(let g=0,p=v.length;g<p;g++){const h=v[g];e?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Ks extends Hn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,d=e/l,m=[],v=[],g=[],p=[];for(let h=0;h<u;h++){const T=h*d-o;for(let S=0;S<c;S++){const M=S*f-s;v.push(M,-T,0),g.push(0,0,1),p.push(S/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const S=T+c*h,M=T+c*(h+1),N=T+1+c*(h+1),C=T+1+c*h;m.push(S,M,C),m.push(M,N,C)}this.setIndex(m),this.setAttribute("position",new nn(v,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,T0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,N0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_S=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,US=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:vx,alphahash_pars_fragment:Ex,alphamap_fragment:xx,alphamap_pars_fragment:Sx,alphatest_fragment:Mx,alphatest_pars_fragment:bx,aomap_fragment:yx,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:wx,begin_vertex:Cx,beginnormal_vertex:Rx,bsdfs:Lx,iridescence_fragment:Px,bumpmap_pars_fragment:Dx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Ox,clipping_planes_vertex:Ux,color_fragment:Fx,color_pars_fragment:Bx,color_pars_vertex:Hx,color_vertex:zx,common:Vx,cube_uv_reflection_fragment:Gx,defaultnormal_vertex:kx,displacementmap_pars_vertex:Wx,displacementmap_vertex:$x,emissivemap_fragment:Xx,emissivemap_pars_fragment:qx,colorspace_fragment:Yx,colorspace_pars_fragment:Kx,envmap_fragment:jx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Jx,envmap_pars_vertex:Qx,envmap_physical_pars_fragment:f0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:r0,gradientmap_pars_fragment:s0,lightmap_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:c0,lights_pars_begin:u0,lights_toon_fragment:d0,lights_toon_pars_fragment:h0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:_0,lights_physical_pars_fragment:g0,lights_fragment_begin:v0,lights_fragment_maps:E0,lights_fragment_end:x0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:y0,map_fragment:T0,map_pars_fragment:A0,map_particle_fragment:w0,map_particle_pars_fragment:C0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:L0,morphcolor_vertex:P0,morphnormal_vertex:D0,morphtarget_pars_vertex:N0,morphtarget_vertex:I0,normal_fragment_begin:O0,normal_fragment_maps:U0,normal_pars_fragment:F0,normal_pars_vertex:B0,normal_vertex:H0,normalmap_pars_fragment:z0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:W0,opaque_fragment:$0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:K0,dithering_pars_fragment:j0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:tS,shadowmap_vertex:eS,shadowmask_pars_fragment:nS,skinbase_vertex:iS,skinning_pars_vertex:rS,skinning_vertex:sS,skinnormal_vertex:oS,specularmap_fragment:aS,specularmap_pars_fragment:lS,tonemapping_fragment:cS,tonemapping_pars_fragment:uS,transmission_fragment:fS,transmission_pars_fragment:dS,uv_pars_fragment:hS,uv_pars_vertex:pS,uv_vertex:mS,worldpos_vertex:_S,background_vert:gS,background_frag:vS,backgroundCube_vert:ES,backgroundCube_frag:xS,cube_vert:SS,cube_frag:MS,depth_vert:bS,depth_frag:yS,distanceRGBA_vert:TS,distanceRGBA_frag:AS,equirect_vert:wS,equirect_frag:CS,linedashed_vert:RS,linedashed_frag:LS,meshbasic_vert:PS,meshbasic_frag:DS,meshlambert_vert:NS,meshlambert_frag:IS,meshmatcap_vert:OS,meshmatcap_frag:US,meshnormal_vert:FS,meshnormal_frag:BS,meshphong_vert:HS,meshphong_frag:zS,meshphysical_vert:VS,meshphysical_frag:GS,meshtoon_vert:kS,meshtoon_frag:WS,points_vert:$S,points_frag:XS,shadow_vert:qS,shadow_frag:YS,sprite_vert:KS,sprite_frag:jS},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Fe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Fe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Fe([_t.points,_t.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Fe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Fe([_t.common,_t.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Fe([_t.sprite,_t.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Fe([_t.common,_t.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Fe([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Pn.physical={uniforms:Fe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Lo={r:0,b:0,g:0};function ZS(n,t,e,i,r,s,o){const a=new Zt(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function v(p,h){let T=!1,S=h.isScene===!0?h.background:null;S&&S.isTexture&&(S=(h.backgroundBlurriness>0?e:t).get(S)),S===null?g(a,l):S&&S.isColor&&(g(S,1),T=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ba)?(u===void 0&&(u=new dn(new sr(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:jr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=te.getTransfer(S.colorSpace)!==ae,(f!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dn(new Ks(2,2),new nr({name:"BackgroundMaterial",uniforms:jr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,h){p.getRGB(Lo,Hp(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:v}}function JS(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(I,W,G,K,Y){let tt=!1;if(o){const rt=g(K,G,W);c!==rt&&(c=rt,m(c.object)),tt=h(I,K,G,Y),tt&&T(I,K,G,Y)}else{const rt=W.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==rt)&&(c.geometry=K.id,c.program=G.id,c.wireframe=rt,tt=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(tt||u)&&(u=!1,J(I,W,G,K),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function g(I,W,G){const K=G.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let tt=Y[W.id];tt===void 0&&(tt={},Y[W.id]=tt);let rt=tt[K];return rt===void 0&&(rt=p(d()),tt[K]=rt),rt}function p(I){const W=[],G=[],K=[];for(let Y=0;Y<r;Y++)W[Y]=0,G[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:G,attributeDivisors:K,object:I,attributes:{},index:null}}function h(I,W,G,K){const Y=c.attributes,tt=W.attributes;let rt=0;const ft=G.getAttributes();for(const ut in ft)if(ft[ut].location>=0){const ot=Y[ut];let ht=tt[ut];if(ht===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(ht=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(ht=I.instanceColor)),ot===void 0||ot.attribute!==ht||ht&&ot.data!==ht.data)return!0;rt++}return c.attributesNum!==rt||c.index!==K}function T(I,W,G,K){const Y={},tt=W.attributes;let rt=0;const ft=G.getAttributes();for(const ut in ft)if(ft[ut].location>=0){let ot=tt[ut];ot===void 0&&(ut==="instanceMatrix"&&I.instanceMatrix&&(ot=I.instanceMatrix),ut==="instanceColor"&&I.instanceColor&&(ot=I.instanceColor));const ht={};ht.attribute=ot,ot&&ot.data&&(ht.data=ot.data),Y[ut]=ht,rt++}c.attributes=Y,c.attributesNum=rt,c.index=K}function S(){const I=c.newAttributes;for(let W=0,G=I.length;W<G;W++)I[W]=0}function M(I){N(I,0)}function N(I,W){const G=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;G[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),Y[I]!==W&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),Y[I]=W)}function C(){const I=c.newAttributes,W=c.enabledAttributes;for(let G=0,K=W.length;G<K;G++)W[G]!==I[G]&&(n.disableVertexAttribArray(G),W[G]=0)}function R(I,W,G,K,Y,tt,rt){rt===!0?n.vertexAttribIPointer(I,W,G,Y,tt):n.vertexAttribPointer(I,W,G,K,Y,tt)}function J(I,W,G,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const Y=K.attributes,tt=G.getAttributes(),rt=W.defaultAttributeValues;for(const ft in tt){const ut=tt[ft];if(ut.location>=0){let Z=Y[ft];if(Z===void 0&&(ft==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ft==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ot=Z.normalized,ht=Z.itemSize,xt=e.get(Z);if(xt===void 0)continue;const Mt=xt.buffer,wt=xt.type,Rt=xt.bytesPerElement,Ct=i.isWebGL2===!0&&(wt===n.INT||wt===n.UNSIGNED_INT||Z.gpuType===Sp);if(Z.isInterleavedBufferAttribute){const Ht=Z.data,E=Ht.stride,P=Z.offset;if(Ht.isInstancedInterleavedBuffer){for(let O=0;O<ut.locationSize;O++)N(ut.location+O,Ht.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let O=0;O<ut.locationSize;O++)M(ut.location+O);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let O=0;O<ut.locationSize;O++)R(ut.location+O,ht/ut.locationSize,wt,ot,E*Rt,(P+ht/ut.locationSize*O)*Rt,Ct)}else{if(Z.isInstancedBufferAttribute){for(let Ht=0;Ht<ut.locationSize;Ht++)N(ut.location+Ht,Z.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ht=0;Ht<ut.locationSize;Ht++)M(ut.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Mt);for(let Ht=0;Ht<ut.locationSize;Ht++)R(ut.location+Ht,ht/ut.locationSize,wt,ot,ht*Rt,ht/ut.locationSize*Ht*Rt,Ct)}}else if(rt!==void 0){const ot=rt[ft];if(ot!==void 0)switch(ot.length){case 2:n.vertexAttrib2fv(ut.location,ot);break;case 3:n.vertexAttrib3fv(ut.location,ot);break;case 4:n.vertexAttrib4fv(ut.location,ot);break;default:n.vertexAttrib1fv(ut.location,ot)}}}}C()}function b(){Q();for(const I in a){const W=a[I];for(const G in W){const K=W[G];for(const Y in K)v(K[Y].object),delete K[Y];delete W[G]}delete a[I]}}function A(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const G in W){const K=W[G];for(const Y in K)v(K[Y].object),delete K[Y];delete W[G]}delete a[I.id]}function q(I){for(const W in a){const G=a[W];if(G[I.id]===void 0)continue;const K=G[I.id];for(const Y in K)v(K[Y].object),delete K[Y];delete G[I.id]}}function Q(){ct(),u=!0,c!==l&&(c=l,m(c.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:ct,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:q,initAttributes:S,enableAttribute:M,disableUnusedAttributes:C}}function QS(n,t,e,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),e.update(f,s,1)}function l(u,f,d){if(d===0)return;let m,v;if(r)m=n,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,u,f,d),e.update(f,s,d)}function c(u,f,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(u[v],f[v]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];e.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function tM(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,M=o||t.has("OES_texture_float"),N=S&&M,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:N,maxSamples:C}}function eM(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new Fi,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,S=T*4;let M=h.clippingState||null;l.value=M,M=u(v,d,S,m);for(let N=0;N!==S;++N)M[N]=e[N];h.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,m,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const h=m+g*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let S=0,M=m;S!==g;++S,M+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function nM(n){let t=new WeakMap;function e(o,a){return a===xc?o.mapping=Xr:a===Sc&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xc||a===Sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new px(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class iM extends zp{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Lr=4,cd=[.125,.215,.35,.446,.526,.582],ki=20,Fl=new iM,ud=new Zt;let Bl=null,Hl=0,zl=0;const Bi=(1+Math.sqrt(5))/2,yr=1/Bi,fd=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Bi,yr),new H(0,Bi,-yr),new H(yr,0,Bi),new H(-yr,0,Bi),new H(Bi,yr,0),new H(-Bi,yr,0)];class dd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Bl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,Hl,zl),t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:ks,format:yn,colorSpace:Qn,depthBuffer:!1},r=hd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(s)),this._blurMaterial=sM(s,t,e)}return r}_compileMaterial(t){const e=new dn(this._lodPlanes[0],t);this._renderer.compile(e,Fl)}_sceneToCubeUV(t,e,i,r){const a=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ud),u.toneMapping=gi,u.autoClear=!1;const m=new Kr({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),v=new dn(new sr,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(ud),g=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const S=this._cubeSize;Po(r,T*S,h>2?S:0,S,S),u.setRenderTarget(r),g&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Xr||t.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Fl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fd[(r-1)%fd.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new dn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ki-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):ki;p>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ki}`);const h=[];let T=0;for(let R=0;R<ki;++R){const J=R/g,b=Math.exp(-J*J/2);h.push(b),R===0?T+=b:R<p&&(T+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-i;const M=this._sizeLods[r],N=3*M*(r>S-Lr?r-S+Lr:0),C=4*(this._cubeSize-M);Po(e,N,C,3*M,2*M),l.setRenderTarget(e),l.render(f,Fl)}}function rM(n){const t=[],e=[],i=[];let r=n;const s=n-Lr+1+cd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Lr?l=cd[o-n+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,g=3,p=2,h=1,T=new Float32Array(g*v*m),S=new Float32Array(p*v*m),M=new Float32Array(h*v*m);for(let C=0;C<m;C++){const R=C%3*2/3-1,J=C>2?0:-1,b=[R,J,0,R+2/3,J,0,R+2/3,J+1,0,R,J,0,R+2/3,J+1,0,R,J+1,0];T.set(b,g*v*C),S.set(d,p*v*C);const A=[C,C,C,C,C,C];M.set(A,h*v*C)}const N=new Hn;N.setAttribute("position",new In(T,g)),N.setAttribute("uv",new In(S,p)),N.setAttribute("faceIndex",new In(M,h)),t.push(N),r>Lr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hd(n,t,e){const i=new er(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function sM(n,t,e){const i=new Float32Array(ki),r=new H(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function pd(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function md(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xc||l===Sc,u=l===Xr||l===qr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new dd(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new dd(n));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function aM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lM(n,t,e,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let p=0,h=g.length;p<h;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const g=m[v];for(let p=0,h=g.length;p<h;p++)t.update(g[p],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let S=0,M=T.length;S<M;S+=3){const N=T[S+0],C=T[S+1],R=T[S+2];d.push(N,C,C,R,R,N)}}else if(v!==void 0){const T=v.array;g=v.version;for(let S=0,M=T.length/3-1;S<M;S+=3){const N=S+0,C=S+1,R=S+2;d.push(N,C,C,R,R,N)}}else return;const p=new(Lp(d)?Bp:Fp)(d,1);p.version=g;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cM(n,t,e,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,v){n.drawElements(s,v,a,m*l),e.update(v,s,1)}function f(m,v,g){if(g===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,v,a,m*l,g),e.update(v,s,g)}function d(m,v,g){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<g;h++)this.render(m[h]/l,v[h]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,g);let h=0;for(let T=0;T<g;T++)h+=v[T];e.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function uM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function fM(n,t){return n[0]-t[0]}function dM(n,t){return Math.abs(t[1])-Math.abs(n[1])}function hM(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let W=function(){ct.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,N=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],J=u.morphAttributes.color||[];let b=0;S===!0&&(b=1),M===!0&&(b=2),N===!0&&(b=3);let A=u.attributes.position.count*b,q=1;A>t.maxTextureSize&&(q=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const Q=new Float32Array(A*q*4*g),ct=new Np(Q,A,q,g);ct.type=hi,ct.needsUpdate=!0;const I=b*4;for(let G=0;G<g;G++){const K=C[G],Y=R[G],tt=J[G],rt=A*q*4*G;for(let ft=0;ft<K.count;ft++){const ut=ft*I;S===!0&&(o.fromBufferAttribute(K,ft),Q[rt+ut+0]=o.x,Q[rt+ut+1]=o.y,Q[rt+ut+2]=o.z,Q[rt+ut+3]=0),M===!0&&(o.fromBufferAttribute(Y,ft),Q[rt+ut+4]=o.x,Q[rt+ut+5]=o.y,Q[rt+ut+6]=o.z,Q[rt+ut+7]=0),N===!0&&(o.fromBufferAttribute(tt,ft),Q[rt+ut+8]=o.x,Q[rt+ut+9]=o.y,Q[rt+ut+10]=o.z,Q[rt+ut+11]=tt.itemSize===4?o.w:1)}}p={count:g,texture:ct,size:new ee(A,q)},s.set(u,p),u.addEventListener("dispose",W)}let h=0;for(let S=0;S<d.length;S++)h+=d[S];const T=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",T),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==v){g=[];for(let M=0;M<v;M++)g[M]=[M,0];i[u.id]=g}for(let M=0;M<v;M++){const N=g[M];N[0]=M,N[1]=d[M]}g.sort(dM);for(let M=0;M<8;M++)M<v&&g[M][1]?(a[M][0]=g[M][0],a[M][1]=g[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(fM);const p=u.morphAttributes.position,h=u.morphAttributes.normal;let T=0;for(let M=0;M<8;M++){const N=a[M],C=N[0],R=N[1];C!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+M)!==p[C]&&u.setAttribute("morphTarget"+M,p[C]),h&&u.getAttribute("morphNormal"+M)!==h[C]&&u.setAttribute("morphNormal"+M,h[C]),r[M]=R,T+=R):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),h&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const S=u.morphTargetsRelative?1:1-T;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function pM(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Wp extends en{constructor(t,e,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zi&&(i=di),i===void 0&&u===Yr&&(i=ji),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $p=new en,Xp=new Wp(1,1);Xp.compareFunction=Rp;const qp=new Np,Yp=new ZE,Kp=new Vp,_d=[],gd=[],vd=new Float32Array(16),Ed=new Float32Array(9),xd=new Float32Array(4);function ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=_d[r];if(s===void 0&&(s=new Float32Array(r),_d[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ga(n,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function mM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function gM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function vM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function EM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ve(e,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),Ee(e,i)}}function xM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ve(e,i))return;Ed.set(i),n.uniformMatrix3fv(this.addr,!1,Ed),Ee(e,i)}}function SM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ve(e,i))return;vd.set(i),n.uniformMatrix4fv(this.addr,!1,vd),Ee(e,i)}}function MM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function bM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function AM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function RM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function LM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Xp:$p;e.setTexture2D(t||s,r)}function PM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Yp,r)}function DM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Kp,r)}function NM(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||qp,r)}function IM(n){switch(n){case 5126:return mM;case 35664:return _M;case 35665:return gM;case 35666:return vM;case 35674:return EM;case 35675:return xM;case 35676:return SM;case 5124:case 35670:return MM;case 35667:case 35671:return bM;case 35668:case 35672:return yM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return wM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return NM}}function OM(n,t){n.uniform1fv(this.addr,t)}function UM(n,t){const e=ls(t,this.size,2);n.uniform2fv(this.addr,e)}function FM(n,t){const e=ls(t,this.size,3);n.uniform3fv(this.addr,e)}function BM(n,t){const e=ls(t,this.size,4);n.uniform4fv(this.addr,e)}function HM(n,t){const e=ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zM(n,t){const e=ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function VM(n,t){const e=ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function GM(n,t){n.uniform1iv(this.addr,t)}function kM(n,t){n.uniform2iv(this.addr,t)}function WM(n,t){n.uniform3iv(this.addr,t)}function $M(n,t){n.uniform4iv(this.addr,t)}function XM(n,t){n.uniform1uiv(this.addr,t)}function qM(n,t){n.uniform2uiv(this.addr,t)}function YM(n,t){n.uniform3uiv(this.addr,t)}function KM(n,t){n.uniform4uiv(this.addr,t)}function jM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||$p,s[o])}function ZM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Yp,s[o])}function JM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Kp,s[o])}function QM(n,t,e){const i=this.cache,r=t.length,s=Ga(e,r);ve(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||qp,s[o])}function tb(n){switch(n){case 5126:return OM;case 35664:return UM;case 35665:return FM;case 35666:return BM;case 35674:return HM;case 35675:return zM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return kM;case 35668:case 35672:return WM;case 35669:case 35673:return $M;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return KM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return QM}}class eb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=IM(e.type)}}class nb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tb(e.type)}}class ib{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function Sd(n,t){n.seq.push(t),n.map[t.id]=t}function rb(n,t,e){const i=n.name,r=i.length;for(Vl.lastIndex=0;;){const s=Vl.exec(i),o=Vl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sd(e,c===void 0?new eb(a,n,t):new nb(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new ib(a),Sd(e,f)),e=f}}}class ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);rb(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Md(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sb=37297;let ob=0;function ab(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function lb(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===Ea&&e===va?i="LinearDisplayP3ToLinearSRGB":t===va&&e===Ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Qn:case Ha:return[i,"LinearTransferOETF"];case Te:case nu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+ab(n.getShaderSource(t),o)}else return r}function cb(n,t){const e=lb(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function ub(n,t){let e;switch(t){case EE:e="Linear";break;case xE:e="Reinhard";break;case SE:e="OptimizedCineon";break;case ME:e="ACESFilmic";break;case yE:e="AgX";break;case bE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fb(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pr).join(`
`)}function hb(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function pb(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Pr(n){return n!==""}function yd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(n){return n.replace(mb,gb)}const _b=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gb(n,t){let e=Gt[t];if(e===void 0){const i=_b.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(n){return n.replace(vb,Eb)}function Eb(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wd(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xb(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qv?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sb(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xr:case qr:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mb(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function bb(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ep:t="ENVMAP_BLENDING_MULTIPLY";break;case gE:t="ENVMAP_BLENDING_MIX";break;case vE:t="ENVMAP_BLENDING_ADD";break}return t}function yb(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Tb(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xb(e),c=Sb(e),u=Mb(e),f=bb(e),d=yb(e),m=e.isWebGL2?"":fb(e),v=db(e),g=hb(s),p=r.createProgram();let h,T,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),h.length>0&&(h+=`
`),T=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),T.length>0&&(T+=`
`)):(h=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),T=[m,wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==gi?ub("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,cb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=wc(o),o=yd(o,e),o=Td(o,e),a=wc(a),a=yd(a,e),a=Td(a,e),o=Ad(o),a=Ad(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,T=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const M=S+h+o,N=S+T+a,C=Md(r,r.VERTEX_SHADER,M),R=Md(r,r.FRAGMENT_SHADER,N);r.attachShader(p,C),r.attachShader(p,R),e.index0AttributeName!==void 0?r.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function J(Q){if(n.debug.checkShaderErrors){const ct=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(C).trim(),W=r.getShaderInfoLog(R).trim();let G=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,R);else{const Y=bd(r,C,"vertex"),tt=bd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ct+`
`+Y+`
`+tt)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(I===""||W==="")&&(K=!1);K&&(Q.diagnostics={runnable:G,programLog:ct,vertexShader:{log:I,prefix:h},fragmentShader:{log:W,prefix:T}})}r.deleteShader(C),r.deleteShader(R),b=new ia(r,p),A=pb(r,p)}let b;this.getUniforms=function(){return b===void 0&&J(this),b};let A;this.getAttributes=function(){return A===void 0&&J(this),A};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(p,sb)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ob++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=R,this}let Ab=0;class wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cb(t),e.set(t,i)),i}}class Cb{constructor(t){this.id=Ab++,this.code=t,this.usedTimes=0}}function Rb(n,t,e,i,r,s,o){const a=new Op,l=new wb,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function p(b,A,q,Q,ct){const I=Q.fog,W=ct.geometry,G=b.isMeshStandardMaterial?Q.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),Y=K&&K.mapping===Ba?K.image.height:null,tt=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=rt!==void 0?rt.length:0;let ut=0;W.morphAttributes.position!==void 0&&(ut=1),W.morphAttributes.normal!==void 0&&(ut=2),W.morphAttributes.color!==void 0&&(ut=3);let Z,ot,ht,xt;if(tt){const Ie=Pn[tt];Z=Ie.vertexShader,ot=Ie.fragmentShader}else Z=b.vertexShader,ot=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);const Mt=n.getRenderTarget(),wt=ct.isInstancedMesh===!0,Rt=ct.isBatchedMesh===!0,Ct=!!b.map,Ht=!!b.matcap,E=!!K,P=!!b.aoMap,O=!!b.lightMap,k=!!b.bumpMap,F=!!b.normalMap,it=!!b.displacementMap,et=!!b.emissiveMap,x=!!b.metalnessMap,_=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,B=b.iridescence>0,V=b.sheen>0,at=b.transmission>0,nt=w&&!!b.anisotropyMap,dt=z&&!!b.clearcoatMap,pt=z&&!!b.clearcoatNormalMap,bt=z&&!!b.clearcoatRoughnessMap,st=B&&!!b.iridescenceMap,Yt=B&&!!b.iridescenceThicknessMap,Vt=V&&!!b.sheenColorMap,Pt=V&&!!b.sheenRoughnessMap,Tt=!!b.specularMap,gt=!!b.specularColorMap,Lt=!!b.specularIntensityMap,jt=at&&!!b.transmissionMap,de=at&&!!b.thicknessMap,$t=!!b.gradientMap,mt=!!b.alphaMap,D=b.alphaTest>0,vt=!!b.alphaHash,Et=!!b.extensions,Ot=!!W.attributes.uv1,Dt=!!W.attributes.uv2,re=!!W.attributes.uv3;let se=gi;return b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:u,shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Z,fragmentShader:ot,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Rt,instancing:wt,instancingColor:wt&&ct.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Qn,map:Ct,matcap:Ht,envMap:E,envMapMode:E&&K.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:O,bumpMap:k,normalMap:F,displacementMap:d&&it,emissiveMap:et,normalMapObjectSpace:F&&b.normalMapType===FE,normalMapTangentSpace:F&&b.normalMapType===UE,metalnessMap:x,roughnessMap:_,anisotropy:w,anisotropyMap:nt,clearcoat:z,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:bt,iridescence:B,iridescenceMap:st,iridescenceThicknessMap:Yt,sheen:V,sheenColorMap:Vt,sheenRoughnessMap:Pt,specularMap:Tt,specularColorMap:gt,specularIntensityMap:Lt,transmission:at,transmissionMap:jt,thicknessMap:de,gradientMap:$t,opaque:b.transparent===!1&&b.blending===Br,alphaMap:mt,alphaTest:D,alphaHash:vt,combine:b.combine,mapUv:Ct&&g(b.map.channel),aoMapUv:P&&g(b.aoMap.channel),lightMapUv:O&&g(b.lightMap.channel),bumpMapUv:k&&g(b.bumpMap.channel),normalMapUv:F&&g(b.normalMap.channel),displacementMapUv:it&&g(b.displacementMap.channel),emissiveMapUv:et&&g(b.emissiveMap.channel),metalnessMapUv:x&&g(b.metalnessMap.channel),roughnessMapUv:_&&g(b.roughnessMap.channel),anisotropyMapUv:nt&&g(b.anisotropyMap.channel),clearcoatMapUv:dt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(b.sheenRoughnessMap.channel),specularMapUv:Tt&&g(b.specularMap.channel),specularColorMapUv:gt&&g(b.specularColorMap.channel),specularIntensityMapUv:Lt&&g(b.specularIntensityMap.channel),transmissionMapUv:jt&&g(b.transmissionMap.channel),thicknessMapUv:de&&g(b.thicknessMap.channel),alphaMapUv:mt&&g(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Ot,vertexUv2s:Dt,vertexUv3s:re,pointsUvs:ct.isPoints===!0&&!!W.attributes.uv&&(Ct||mt),fog:!!I,useFog:b.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ct.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ut,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Et&&b.extensions.derivatives===!0,extensionFragDepth:Et&&b.extensions.fragDepth===!0,extensionDrawBuffers:Et&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Et&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Et&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function h(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)A.push(q),A.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(T(A,b),S(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function T(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function S(b,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),b.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function M(b){const A=v[b.type];let q;if(A){const Q=Pn[A];q=ux.clone(Q.uniforms)}else q=b.uniforms;return q}function N(b,A){let q;for(let Q=0,ct=c.length;Q<ct;Q++){const I=c[Q];if(I.cacheKey===A){q=I,++q.usedTimes;break}}return q===void 0&&(q=new Tb(n,A,b,s),c.push(q)),q}function C(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function J(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:M,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:J}}function Lb(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function Pb(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,m,v,g,p){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},n[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=p),t++,h}function a(f,d,m,v,g,p){const h=o(f,d,m,v,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):e.push(h)}function l(f,d,m,v,g,p){const h=o(f,d,m,v,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function c(f,d){e.length>1&&e.sort(f||Pb),i.length>1&&i.sort(d||Cd),r.length>1&&r.sort(d||Cd)}function u(){for(let f=t,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Db(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Rd,n.set(i,[o])):r>=s.length?(o=new Rd,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Nb(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Zt};break;case"SpotLight":e={position:new H,direction:new H,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[t.id]=e,e}}}function Ib(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ob=0;function Ub(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Fb(n,t){const e=new Nb,i=Ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,o=new pe,a=new pe;function l(u,f){let d=0,m=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let g=0,p=0,h=0,T=0,S=0,M=0,N=0,C=0,R=0,J=0,b=0;u.sort(Ub);const A=f===!0?Math.PI:1;for(let Q=0,ct=u.length;Q<ct;Q++){const I=u[Q],W=I.color,G=I.intensity,K=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*G*A,m+=W.g*G*A,v+=W.b*G*A;else if(I.isLightProbe){for(let tt=0;tt<9;tt++)r.probe[tt].addScaledVector(I.sh.coefficients[tt],G);b++}else if(I.isDirectionalLight){const tt=e.get(I);if(tt.color.copy(I.color).multiplyScalar(I.intensity*A),I.castShadow){const rt=I.shadow,ft=i.get(I);ft.shadowBias=rt.bias,ft.shadowNormalBias=rt.normalBias,ft.shadowRadius=rt.radius,ft.shadowMapSize=rt.mapSize,r.directionalShadow[g]=ft,r.directionalShadowMap[g]=Y,r.directionalShadowMatrix[g]=I.shadow.matrix,M++}r.directional[g]=tt,g++}else if(I.isSpotLight){const tt=e.get(I);tt.position.setFromMatrixPosition(I.matrixWorld),tt.color.copy(W).multiplyScalar(G*A),tt.distance=K,tt.coneCos=Math.cos(I.angle),tt.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),tt.decay=I.decay,r.spot[h]=tt;const rt=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,rt.updateMatrices(I),I.castShadow&&J++),r.spotLightMatrix[h]=rt.matrix,I.castShadow){const ft=i.get(I);ft.shadowBias=rt.bias,ft.shadowNormalBias=rt.normalBias,ft.shadowRadius=rt.radius,ft.shadowMapSize=rt.mapSize,r.spotShadow[h]=ft,r.spotShadowMap[h]=Y,C++}h++}else if(I.isRectAreaLight){const tt=e.get(I);tt.color.copy(W).multiplyScalar(G),tt.halfWidth.set(I.width*.5,0,0),tt.halfHeight.set(0,I.height*.5,0),r.rectArea[T]=tt,T++}else if(I.isPointLight){const tt=e.get(I);if(tt.color.copy(I.color).multiplyScalar(I.intensity*A),tt.distance=I.distance,tt.decay=I.decay,I.castShadow){const rt=I.shadow,ft=i.get(I);ft.shadowBias=rt.bias,ft.shadowNormalBias=rt.normalBias,ft.shadowRadius=rt.radius,ft.shadowMapSize=rt.mapSize,ft.shadowCameraNear=rt.camera.near,ft.shadowCameraFar=rt.camera.far,r.pointShadow[p]=ft,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=I.shadow.matrix,N++}r.point[p]=tt,p++}else if(I.isHemisphereLight){const tt=e.get(I);tt.skyColor.copy(I.color).multiplyScalar(G*A),tt.groundColor.copy(I.groundColor).multiplyScalar(G*A),r.hemi[S]=tt,S++}}T>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_FLOAT_1,r.rectAreaLTC2=_t.LTC_FLOAT_2):(r.rectAreaLTC1=_t.LTC_HALF_1,r.rectAreaLTC2=_t.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_FLOAT_1,r.rectAreaLTC2=_t.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_t.LTC_HALF_1,r.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==g||q.pointLength!==p||q.spotLength!==h||q.rectAreaLength!==T||q.hemiLength!==S||q.numDirectionalShadows!==M||q.numPointShadows!==N||q.numSpotShadows!==C||q.numSpotMaps!==R||q.numLightProbes!==b)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+R-J,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=b,q.directionalLength=g,q.pointLength=p,q.spotLength=h,q.rectAreaLength=T,q.hemiLength=S,q.numDirectionalShadows=M,q.numPointShadows=N,q.numSpotShadows=C,q.numSpotMaps=R,q.numLightProbes=b,r.version=Ob++)}function c(u,f){let d=0,m=0,v=0,g=0,p=0;const h=f.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const M=u[T];if(M.isDirectionalLight){const N=r.directional[d];N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(h),d++}else if(M.isSpotLight){const N=r.spot[v];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(h),N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(h),v++}else if(M.isRectAreaLight){const N=r.rectArea[g];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(h),a.identity(),o.copy(M.matrixWorld),o.premultiply(h),a.extractRotation(o),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const N=r.point[m];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){const N=r.hemi[p];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:r}}function Ld(n,t){const e=new Fb(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){e.setup(i,f)}function c(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Bb(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Ld(n,t),e.set(s,[l])):o>=a.length?(l=new Ld(n,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class Hb extends Ys{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zb extends Ys{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kb(n,t,e){let i=new Gp;const r=new ee,s=new ee,o=new Ae,a=new Hb({depthPacking:OE}),l=new zb,c={},u=e.maxTextureSize,f={[Si]:qe,[qe]:Si,[tn]:tn},d=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Vb,fragmentShader:Gb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Hn;v.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let h=this.type;this.render=function(C,R,J){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),A=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(_i),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ct=h!==Xn&&this.type===Xn,I=h===Xn&&this.type!==Xn;for(let W=0,G=C.length;W<G;W++){const K=C[W],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const tt=Y.getFrameExtents();if(r.multiply(tt),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/tt.x),r.x=s.x*tt.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/tt.y),r.y=s.y*tt.y,Y.mapSize.y=s.y)),Y.map===null||ct===!0||I===!0){const ft=this.type!==Xn?{minFilter:Be,magFilter:Be}:{};Y.map!==null&&Y.map.dispose(),Y.map=new er(r.x,r.y,ft),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const rt=Y.getViewportCount();for(let ft=0;ft<rt;ft++){const ut=Y.getViewport(ft);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),Q.viewport(o),Y.updateMatrices(K,ft),i=Y.getFrustum(),M(R,J,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Xn&&T(Y,J),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(b,A,q)};function T(C,R){const J=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new er(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(R,null,J,d,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(R,null,J,m,g,null)}function S(C,R,J,b){let A=null;const q=J.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(q!==void 0)A=q;else if(A=J.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Q=A.uuid,ct=R.uuid;let I=c[Q];I===void 0&&(I={},c[Q]=I);let W=I[ct];W===void 0&&(W=A.clone(),I[ct]=W,R.addEventListener("dispose",N)),A=W}if(A.visible=R.visible,A.wireframe=R.wireframe,b===Xn?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,J.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=n.properties.get(A);Q.light=J}return A}function M(C,R,J,b,A){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Xn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld);const ct=t.update(C),I=C.material;if(Array.isArray(I)){const W=ct.groups;for(let G=0,K=W.length;G<K;G++){const Y=W[G],tt=I[Y.materialIndex];if(tt&&tt.visible){const rt=S(C,tt,b,A);C.onBeforeShadow(n,C,R,J,ct,rt,Y),n.renderBufferDirect(J,null,ct,rt,C,Y),C.onAfterShadow(n,C,R,J,ct,rt,Y)}}}else if(I.visible){const W=S(C,I,b,A);C.onBeforeShadow(n,C,R,J,ct,W,null),n.renderBufferDirect(J,null,ct,W,C,null),C.onAfterShadow(n,C,R,J,ct,W,null)}}const Q=C.children;for(let ct=0,I=Q.length;ct<I;ct++)M(Q[ct],R,J,b,A)}function N(C){C.target.removeEventListener("dispose",N);for(const J in c){const b=c[J],A=C.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function Wb(n,t,e){const i=e.isWebGL2;function r(){let D=!1;const vt=new Ae;let Et=null;const Ot=new Ae(0,0,0,0);return{setMask:function(Dt){Et!==Dt&&!D&&(n.colorMask(Dt,Dt,Dt,Dt),Et=Dt)},setLocked:function(Dt){D=Dt},setClear:function(Dt,re,se,xe,Ie){Ie===!0&&(Dt*=xe,re*=xe,se*=xe),vt.set(Dt,re,se,xe),Ot.equals(vt)===!1&&(n.clearColor(Dt,re,se,xe),Ot.copy(vt))},reset:function(){D=!1,Et=null,Ot.set(-1,0,0,0)}}}function s(){let D=!1,vt=null,Et=null,Ot=null;return{setTest:function(Dt){Dt?Rt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(Dt){vt!==Dt&&!D&&(n.depthMask(Dt),vt=Dt)},setFunc:function(Dt){if(Et!==Dt){switch(Dt){case uE:n.depthFunc(n.NEVER);break;case fE:n.depthFunc(n.ALWAYS);break;case dE:n.depthFunc(n.LESS);break;case _a:n.depthFunc(n.LEQUAL);break;case hE:n.depthFunc(n.EQUAL);break;case pE:n.depthFunc(n.GEQUAL);break;case mE:n.depthFunc(n.GREATER);break;case _E:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Dt}},setLocked:function(Dt){D=Dt},setClear:function(Dt){Ot!==Dt&&(n.clearDepth(Dt),Ot=Dt)},reset:function(){D=!1,vt=null,Et=null,Ot=null}}}function o(){let D=!1,vt=null,Et=null,Ot=null,Dt=null,re=null,se=null,xe=null,Ie=null;return{setTest:function(oe){D||(oe?Rt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(oe){vt!==oe&&!D&&(n.stencilMask(oe),vt=oe)},setFunc:function(oe,Oe,Cn){(Et!==oe||Ot!==Oe||Dt!==Cn)&&(n.stencilFunc(oe,Oe,Cn),Et=oe,Ot=Oe,Dt=Cn)},setOp:function(oe,Oe,Cn){(re!==oe||se!==Oe||xe!==Cn)&&(n.stencilOp(oe,Oe,Cn),re=oe,se=Oe,xe=Cn)},setLocked:function(oe){D=oe},setClear:function(oe){Ie!==oe&&(n.clearStencil(oe),Ie=oe)},reset:function(){D=!1,vt=null,Et=null,Ot=null,Dt=null,re=null,se=null,xe=null,Ie=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,g=[],p=null,h=!1,T=null,S=null,M=null,N=null,C=null,R=null,J=null,b=new Zt(0,0,0),A=0,q=!1,Q=null,ct=null,I=null,W=null,G=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,tt=0;const rt=n.getParameter(n.VERSION);rt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Y=tt>=1):rt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Y=tt>=2);let ft=null,ut={};const Z=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),ht=new Ae().fromArray(Z),xt=new Ae().fromArray(ot);function Mt(D,vt,Et,Ot){const Dt=new Uint8Array(4),re=n.createTexture();n.bindTexture(D,re),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<Et;se++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(vt,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(vt+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return re}const wt={};wt[n.TEXTURE_2D]=Mt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=Mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(wt[n.TEXTURE_2D_ARRAY]=Mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=Mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(n.DEPTH_TEST),l.setFunc(_a),et(!1),x(ff),Rt(n.CULL_FACE),F(_i);function Rt(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Ct(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ht(D,vt){return m[D]!==vt?(n.bindFramebuffer(D,vt),m[D]=vt,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=vt),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=vt)),!0):!1}function E(D,vt){let Et=g,Ot=!1;if(D)if(Et=v.get(vt),Et===void 0&&(Et=[],v.set(vt,Et)),D.isWebGLMultipleRenderTargets){const Dt=D.texture;if(Et.length!==Dt.length||Et[0]!==n.COLOR_ATTACHMENT0){for(let re=0,se=Dt.length;re<se;re++)Et[re]=n.COLOR_ATTACHMENT0+re;Et.length=Dt.length,Ot=!0}}else Et[0]!==n.COLOR_ATTACHMENT0&&(Et[0]=n.COLOR_ATTACHMENT0,Ot=!0);else Et[0]!==n.BACK&&(Et[0]=n.BACK,Ot=!0);Ot&&(e.isWebGL2?n.drawBuffers(Et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Et))}function P(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const O={[Gi]:n.FUNC_ADD,[Kv]:n.FUNC_SUBTRACT,[jv]:n.FUNC_REVERSE_SUBTRACT};if(i)O[mf]=n.MIN,O[_f]=n.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(O[mf]=D.MIN_EXT,O[_f]=D.MAX_EXT)}const k={[Zv]:n.ZERO,[Jv]:n.ONE,[Qv]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[sE]:n.SRC_ALPHA_SATURATE,[iE]:n.DST_COLOR,[eE]:n.DST_ALPHA,[tE]:n.ONE_MINUS_SRC_COLOR,[Ec]:n.ONE_MINUS_SRC_ALPHA,[rE]:n.ONE_MINUS_DST_COLOR,[nE]:n.ONE_MINUS_DST_ALPHA,[oE]:n.CONSTANT_COLOR,[aE]:n.ONE_MINUS_CONSTANT_COLOR,[lE]:n.CONSTANT_ALPHA,[cE]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,vt,Et,Ot,Dt,re,se,xe,Ie,oe){if(D===_i){h===!0&&(Ct(n.BLEND),h=!1);return}if(h===!1&&(Rt(n.BLEND),h=!0),D!==Yv){if(D!==T||oe!==q){if((S!==Gi||C!==Gi)&&(n.blendEquation(n.FUNC_ADD),S=Gi,C=Gi),oe)switch(D){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFunc(n.ONE,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case df:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,N=null,R=null,J=null,b.set(0,0,0),A=0,T=D,q=oe}return}Dt=Dt||vt,re=re||Et,se=se||Ot,(vt!==S||Dt!==C)&&(n.blendEquationSeparate(O[vt],O[Dt]),S=vt,C=Dt),(Et!==M||Ot!==N||re!==R||se!==J)&&(n.blendFuncSeparate(k[Et],k[Ot],k[re],k[se]),M=Et,N=Ot,R=re,J=se),(xe.equals(b)===!1||Ie!==A)&&(n.blendColor(xe.r,xe.g,xe.b,Ie),b.copy(xe),A=Ie),T=D,q=!1}function it(D,vt){D.side===tn?Ct(n.CULL_FACE):Rt(n.CULL_FACE);let Et=D.side===qe;vt&&(Et=!Et),et(Et),D.blending===Br&&D.transparent===!1?F(_i):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ot=D.stencilWrite;c.setTest(Ot),Ot&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Rt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(D){Q!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),Q=D)}function x(D){D!==$v?(Rt(n.CULL_FACE),D!==ct&&(D===ff?n.cullFace(n.BACK):D===Xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),ct=D}function _(D){D!==I&&(Y&&n.lineWidth(D),I=D)}function w(D,vt,Et){D?(Rt(n.POLYGON_OFFSET_FILL),(W!==vt||G!==Et)&&(n.polygonOffset(vt,Et),W=vt,G=Et)):Ct(n.POLYGON_OFFSET_FILL)}function z(D){D?Rt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function B(D){D===void 0&&(D=n.TEXTURE0+K-1),ft!==D&&(n.activeTexture(D),ft=D)}function V(D,vt,Et){Et===void 0&&(ft===null?Et=n.TEXTURE0+K-1:Et=ft);let Ot=ut[Et];Ot===void 0&&(Ot={type:void 0,texture:void 0},ut[Et]=Ot),(Ot.type!==D||Ot.texture!==vt)&&(ft!==Et&&(n.activeTexture(Et),ft=Et),n.bindTexture(D,vt||wt[D]),Ot.type=D,Ot.texture=vt)}function at(){const D=ut[ft];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){ht.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ht.copy(D))}function jt(D){xt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xt.copy(D))}function de(D,vt){let Et=f.get(vt);Et===void 0&&(Et=new WeakMap,f.set(vt,Et));let Ot=Et.get(D);Ot===void 0&&(Ot=n.getUniformBlockIndex(vt,D.name),Et.set(D,Ot))}function $t(D,vt){const Ot=f.get(vt).get(D);u.get(vt)!==Ot&&(n.uniformBlockBinding(vt,Ot,D.__bindingPointIndex),u.set(vt,Ot))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ft=null,ut={},m={},v=new WeakMap,g=[],p=null,h=!1,T=null,S=null,M=null,N=null,C=null,R=null,J=null,b=new Zt(0,0,0),A=0,q=!1,Q=null,ct=null,I=null,W=null,G=null,ht.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:Ct,bindFramebuffer:Ht,drawBuffers:E,useProgram:P,setBlending:F,setMaterial:it,setFlipSided:et,setCullFace:x,setLineWidth:_,setPolygonOffset:w,setScissorTest:z,activeTexture:B,bindTexture:V,unbindTexture:at,compressedTexImage2D:nt,compressedTexImage3D:dt,texImage2D:Tt,texImage3D:gt,updateUBOMapping:de,uniformBlockBinding:$t,texStorage2D:Vt,texStorage3D:Pt,texSubImage2D:pt,texSubImage3D:bt,compressedTexSubImage2D:st,compressedTexSubImage3D:Yt,scissor:Lt,viewport:jt,reset:mt}}function $b(n,t,e,i,r,s,o){const a=r.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,_){return m?new OffscreenCanvas(x,_):Sa("canvas")}function g(x,_,w,z){let B=1;if((x.width>z||x.height>z)&&(B=z/Math.max(x.width,x.height)),B<1||_===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const V=_?Ac:Math.floor,at=V(B*x.width),nt=V(B*x.height);f===void 0&&(f=v(at,nt));const dt=w?v(at,nt):f;return dt.width=at,dt.height=nt,dt.getContext("2d").drawImage(x,0,0,at,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+at+"x"+nt+")."),dt}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Xf(x.width)&&Xf(x.height)}function h(x){return a?!1:x.wrapS!==bn||x.wrapT!==bn||x.minFilter!==Be&&x.minFilter!==un}function T(x,_){return x.generateMipmaps&&_&&x.minFilter!==Be&&x.minFilter!==un}function S(x){n.generateMipmap(x)}function M(x,_,w,z,B=!1){if(a===!1)return _;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=_;if(_===n.RED&&(w===n.FLOAT&&(V=n.R32F),w===n.HALF_FLOAT&&(V=n.R16F),w===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.R8UI),w===n.UNSIGNED_SHORT&&(V=n.R16UI),w===n.UNSIGNED_INT&&(V=n.R32UI),w===n.BYTE&&(V=n.R8I),w===n.SHORT&&(V=n.R16I),w===n.INT&&(V=n.R32I)),_===n.RG&&(w===n.FLOAT&&(V=n.RG32F),w===n.HALF_FLOAT&&(V=n.RG16F),w===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RGBA){const at=B?ga:te.getTransfer(z);w===n.FLOAT&&(V=n.RGBA32F),w===n.HALF_FLOAT&&(V=n.RGBA16F),w===n.UNSIGNED_BYTE&&(V=at===ae?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function N(x,_,w){return T(x,w)===!0||x.isFramebufferTexture&&x.minFilter!==Be&&x.minFilter!==un?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function C(x){return x===Be||x===gf||x===dl?n.NEAREST:n.LINEAR}function R(x){const _=x.target;_.removeEventListener("dispose",R),b(_),_.isVideoTexture&&u.delete(_)}function J(x){const _=x.target;_.removeEventListener("dispose",J),q(_)}function b(x){const _=i.get(x);if(_.__webglInit===void 0)return;const w=x.source,z=d.get(w);if(z){const B=z[_.__cacheKey];B.usedTimes--,B.usedTimes===0&&A(x),Object.keys(z).length===0&&d.delete(w)}i.remove(x)}function A(x){const _=i.get(x);n.deleteTexture(_.__webglTexture);const w=x.source,z=d.get(w);delete z[_.__cacheKey],o.memory.textures--}function q(x){const _=x.texture,w=i.get(x),z=i.get(_);if(z.__webglTexture!==void 0&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(w.__webglFramebuffer[B]))for(let V=0;V<w.__webglFramebuffer[B].length;V++)n.deleteFramebuffer(w.__webglFramebuffer[B][V]);else n.deleteFramebuffer(w.__webglFramebuffer[B]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[B])}else{if(Array.isArray(w.__webglFramebuffer))for(let B=0;B<w.__webglFramebuffer.length;B++)n.deleteFramebuffer(w.__webglFramebuffer[B]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let B=0;B<w.__webglColorRenderbuffer.length;B++)w.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[B]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let B=0,V=_.length;B<V;B++){const at=i.get(_[B]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),o.memory.textures--),i.remove(_[B])}i.remove(_),i.remove(x)}let Q=0;function ct(){Q=0}function I(){const x=Q;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),Q+=1,x}function W(x){const _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function G(x,_){const w=i.get(x);if(x.isVideoTexture&&it(x),x.isRenderTargetTexture===!1&&x.version>0&&w.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(w,x,_);return}}e.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+_)}function K(x,_){const w=i.get(x);if(x.version>0&&w.__version!==x.version){ht(w,x,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+_)}function Y(x,_){const w=i.get(x);if(x.version>0&&w.__version!==x.version){ht(w,x,_);return}e.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+_)}function tt(x,_){const w=i.get(x);if(x.version>0&&w.__version!==x.version){xt(w,x,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+_)}const rt={[Mc]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},ft={[Be]:n.NEAREST,[gf]:n.NEAREST_MIPMAP_NEAREST,[dl]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[TE]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},ut={[BE]:n.NEVER,[WE]:n.ALWAYS,[HE]:n.LESS,[Rp]:n.LEQUAL,[zE]:n.EQUAL,[kE]:n.GEQUAL,[VE]:n.GREATER,[GE]:n.NOTEQUAL};function Z(x,_,w){if(w?(n.texParameteri(x,n.TEXTURE_WRAP_S,rt[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,rt[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,rt[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ft[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ft[_.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==bn||_.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==Be&&_.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ut[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===Be||_.minFilter!==dl&&_.minFilter!==Gs||_.type===hi&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===ks&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(x,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function ot(x,_){let w=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",R));const z=_.source;let B=d.get(z);B===void 0&&(B={},d.set(z,B));const V=W(_);if(V!==x.__cacheKey){B[V]===void 0&&(B[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),B[V].usedTimes++;const at=B[x.__cacheKey];at!==void 0&&(B[x.__cacheKey].usedTimes--,at.usedTimes===0&&A(_)),x.__cacheKey=V,x.__webglTexture=B[V].texture}return w}function ht(x,_,w){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const B=ot(x,_),V=_.source;e.bindTexture(z,x.__webglTexture,n.TEXTURE0+w);const at=i.get(V);if(V.version!==at.__version||B===!0){e.activeTexture(n.TEXTURE0+w);const nt=te.getPrimaries(te.workingColorSpace),dt=_.colorSpace===fn?null:te.getPrimaries(_.colorSpace),pt=_.colorSpace===fn||nt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const bt=h(_)&&p(_.image)===!1;let st=g(_.image,bt,!1,r.maxTextureSize);st=et(_,st);const Yt=p(st)||a,Vt=s.convert(_.format,_.colorSpace);let Pt=s.convert(_.type),Tt=M(_.internalFormat,Vt,Pt,_.colorSpace,_.isVideoTexture);Z(z,_,Yt);let gt;const Lt=_.mipmaps,jt=a&&_.isVideoTexture!==!0&&Tt!==wp,de=at.__version===void 0||B===!0,$t=N(_,st,Yt);if(_.isDepthTexture)Tt=n.DEPTH_COMPONENT,a?_.type===hi?Tt=n.DEPTH_COMPONENT32F:_.type===di?Tt=n.DEPTH_COMPONENT24:_.type===ji?Tt=n.DEPTH24_STENCIL8:Tt=n.DEPTH_COMPONENT16:_.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Zi&&Tt===n.DEPTH_COMPONENT&&_.type!==eu&&_.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=di,Pt=s.convert(_.type)),_.format===Yr&&Tt===n.DEPTH_COMPONENT&&(Tt=n.DEPTH_STENCIL,_.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ji,Pt=s.convert(_.type))),de&&(jt?e.texStorage2D(n.TEXTURE_2D,1,Tt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Tt,st.width,st.height,0,Vt,Pt,null));else if(_.isDataTexture)if(Lt.length>0&&Yt){jt&&de&&e.texStorage2D(n.TEXTURE_2D,$t,Tt,Lt[0].width,Lt[0].height);for(let mt=0,D=Lt.length;mt<D;mt++)gt=Lt[mt],jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,gt.width,gt.height,Vt,Pt,gt.data):e.texImage2D(n.TEXTURE_2D,mt,Tt,gt.width,gt.height,0,Vt,Pt,gt.data);_.generateMipmaps=!1}else jt?(de&&e.texStorage2D(n.TEXTURE_2D,$t,Tt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,Vt,Pt,st.data)):e.texImage2D(n.TEXTURE_2D,0,Tt,st.width,st.height,0,Vt,Pt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){jt&&de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,Tt,Lt[0].width,Lt[0].height,st.depth);for(let mt=0,D=Lt.length;mt<D;mt++)gt=Lt[mt],_.format!==yn?Vt!==null?jt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,gt.width,gt.height,st.depth,Vt,gt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,mt,Tt,gt.width,gt.height,st.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,mt,0,0,0,gt.width,gt.height,st.depth,Vt,Pt,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,mt,Tt,gt.width,gt.height,st.depth,0,Vt,Pt,gt.data)}else{jt&&de&&e.texStorage2D(n.TEXTURE_2D,$t,Tt,Lt[0].width,Lt[0].height);for(let mt=0,D=Lt.length;mt<D;mt++)gt=Lt[mt],_.format!==yn?Vt!==null?jt?e.compressedTexSubImage2D(n.TEXTURE_2D,mt,0,0,gt.width,gt.height,Vt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,mt,Tt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,gt.width,gt.height,Vt,Pt,gt.data):e.texImage2D(n.TEXTURE_2D,mt,Tt,gt.width,gt.height,0,Vt,Pt,gt.data)}else if(_.isDataArrayTexture)jt?(de&&e.texStorage3D(n.TEXTURE_2D_ARRAY,$t,Tt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Vt,Pt,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Tt,st.width,st.height,st.depth,0,Vt,Pt,st.data);else if(_.isData3DTexture)jt?(de&&e.texStorage3D(n.TEXTURE_3D,$t,Tt,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Vt,Pt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Tt,st.width,st.height,st.depth,0,Vt,Pt,st.data);else if(_.isFramebufferTexture){if(de)if(jt)e.texStorage2D(n.TEXTURE_2D,$t,Tt,st.width,st.height);else{let mt=st.width,D=st.height;for(let vt=0;vt<$t;vt++)e.texImage2D(n.TEXTURE_2D,vt,Tt,mt,D,0,Vt,Pt,null),mt>>=1,D>>=1}}else if(Lt.length>0&&Yt){jt&&de&&e.texStorage2D(n.TEXTURE_2D,$t,Tt,Lt[0].width,Lt[0].height);for(let mt=0,D=Lt.length;mt<D;mt++)gt=Lt[mt],jt?e.texSubImage2D(n.TEXTURE_2D,mt,0,0,Vt,Pt,gt):e.texImage2D(n.TEXTURE_2D,mt,Tt,Vt,Pt,gt);_.generateMipmaps=!1}else jt?(de&&e.texStorage2D(n.TEXTURE_2D,$t,Tt,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Vt,Pt,st)):e.texImage2D(n.TEXTURE_2D,0,Tt,Vt,Pt,st);T(_,Yt)&&S(z),at.__version=V.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function xt(x,_,w){if(_.image.length!==6)return;const z=ot(x,_),B=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+w);const V=i.get(B);if(B.version!==V.__version||z===!0){e.activeTexture(n.TEXTURE0+w);const at=te.getPrimaries(te.workingColorSpace),nt=_.colorSpace===fn?null:te.getPrimaries(_.colorSpace),dt=_.colorSpace===fn||at===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const pt=_.isCompressedTexture||_.image[0].isCompressedTexture,bt=_.image[0]&&_.image[0].isDataTexture,st=[];for(let mt=0;mt<6;mt++)!pt&&!bt?st[mt]=g(_.image[mt],!1,!0,r.maxCubemapSize):st[mt]=bt?_.image[mt].image:_.image[mt],st[mt]=et(_,st[mt]);const Yt=st[0],Vt=p(Yt)||a,Pt=s.convert(_.format,_.colorSpace),Tt=s.convert(_.type),gt=M(_.internalFormat,Pt,Tt,_.colorSpace),Lt=a&&_.isVideoTexture!==!0,jt=V.__version===void 0||z===!0;let de=N(_,Yt,Vt);Z(n.TEXTURE_CUBE_MAP,_,Vt);let $t;if(pt){Lt&&jt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,de,gt,Yt.width,Yt.height);for(let mt=0;mt<6;mt++){$t=st[mt].mipmaps;for(let D=0;D<$t.length;D++){const vt=$t[D];_.format!==yn?Pt!==null?Lt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,0,0,vt.width,vt.height,Pt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,gt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,0,0,vt.width,vt.height,Pt,Tt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D,gt,vt.width,vt.height,0,Pt,Tt,vt.data)}}}else{$t=_.mipmaps,Lt&&jt&&($t.length>0&&de++,e.texStorage2D(n.TEXTURE_CUBE_MAP,de,gt,st[0].width,st[0].height));for(let mt=0;mt<6;mt++)if(bt){Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,st[mt].width,st[mt].height,Pt,Tt,st[mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,gt,st[mt].width,st[mt].height,0,Pt,Tt,st[mt].data);for(let D=0;D<$t.length;D++){const Et=$t[D].image[mt].image;Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,0,0,Et.width,Et.height,Pt,Tt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,gt,Et.width,Et.height,0,Pt,Tt,Et.data)}}else{Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt,Tt,st[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,gt,Pt,Tt,st[mt]);for(let D=0;D<$t.length;D++){const vt=$t[D];Lt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,0,0,Pt,Tt,vt.image[mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,D+1,gt,Pt,Tt,vt.image[mt])}}}T(_,Vt)&&S(n.TEXTURE_CUBE_MAP),V.__version=B.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function Mt(x,_,w,z,B,V){const at=s.convert(w.format,w.colorSpace),nt=s.convert(w.type),dt=M(w.internalFormat,at,nt,w.colorSpace);if(!i.get(_).__hasExternalTextures){const bt=Math.max(1,_.width>>V),st=Math.max(1,_.height>>V);B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?e.texImage3D(B,V,dt,bt,st,_.depth,0,at,nt,null):e.texImage2D(B,V,dt,bt,st,0,at,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),F(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,B,i.get(w).__webglTexture,0,k(_)):(B===n.TEXTURE_2D||B>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,B,i.get(w).__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(x,_,w){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer&&!_.stencilBuffer){let z=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(w||F(_)){const B=_.depthTexture;B&&B.isDepthTexture&&(B.type===hi?z=n.DEPTH_COMPONENT32F:B.type===di&&(z=n.DEPTH_COMPONENT24));const V=k(_);F(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,z,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,V,z,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(_.depthBuffer&&_.stencilBuffer){const z=k(_);w&&F(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):F(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const z=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let B=0;B<z.length;B++){const V=z[B],at=s.convert(V.format,V.colorSpace),nt=s.convert(V.type),dt=M(V.internalFormat,at,nt,V.colorSpace),pt=k(_);w&&F(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,dt,_.width,_.height):F(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,dt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,dt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G(_.depthTexture,0);const z=i.get(_.depthTexture).__webglTexture,B=k(_);if(_.depthTexture.format===Zi)F(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(_.depthTexture.format===Yr)F(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Ct(x){const _=i.get(x),w=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,x)}else if(w){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]=n.createRenderbuffer(),wt(_.__webglDepthbuffer[z],x,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),wt(_.__webglDepthbuffer,x,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(x,_,w){const z=i.get(x);_!==void 0&&Mt(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Ct(x)}function E(x){const _=x.texture,w=i.get(x),z=i.get(_);x.addEventListener("dispose",J),x.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++);const B=x.isWebGLCubeRenderTarget===!0,V=x.isWebGLMultipleRenderTargets===!0,at=p(x)||a;if(B){w.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(a&&_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer[nt]=[];for(let dt=0;dt<_.mipmaps.length;dt++)w.__webglFramebuffer[nt][dt]=n.createFramebuffer()}else w.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){w.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)w.__webglFramebuffer[nt]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(V)if(r.drawBuffers){const nt=x.texture;for(let dt=0,pt=nt.length;dt<pt;dt++){const bt=i.get(nt[dt]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&F(x)===!1){const nt=V?_:[_];w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const pt=nt[dt];w.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[dt]);const bt=s.convert(pt.format,pt.colorSpace),st=s.convert(pt.type),Yt=M(pt.internalFormat,bt,st,pt.colorSpace,x.isXRRenderTarget===!0),Vt=k(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Yt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,w.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),wt(w.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Z(n.TEXTURE_CUBE_MAP,_,at);for(let nt=0;nt<6;nt++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Mt(w.__webglFramebuffer[nt][dt],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,dt);else Mt(w.__webglFramebuffer[nt],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);T(_,at)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(V){const nt=x.texture;for(let dt=0,pt=nt.length;dt<pt;dt++){const bt=nt[dt],st=i.get(bt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Z(n.TEXTURE_2D,bt,at),Mt(w.__webglFramebuffer,x,bt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),T(bt,at)&&S(n.TEXTURE_2D)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?nt=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,z.__webglTexture),Z(nt,_,at),a&&_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Mt(w.__webglFramebuffer[dt],x,_,n.COLOR_ATTACHMENT0,nt,dt);else Mt(w.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,nt,0);T(_,at)&&S(nt),e.unbindTexture()}x.depthBuffer&&Ct(x)}function P(x){const _=p(x)||a,w=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let z=0,B=w.length;z<B;z++){const V=w[z];if(T(V,_)){const at=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,nt=i.get(V).__webglTexture;e.bindTexture(at,nt),S(at),e.unbindTexture()}}}function O(x){if(a&&x.samples>0&&F(x)===!1){const _=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],w=x.width,z=x.height;let B=n.COLOR_BUFFER_BIT;const V=[],at=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=i.get(x),dt=x.isWebGLMultipleRenderTargets===!0;if(dt)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){V.push(n.COLOR_ATTACHMENT0+pt),x.depthBuffer&&V.push(at);const bt=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(bt===!1&&(x.depthBuffer&&(B|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(B|=n.STENCIL_BUFFER_BIT)),dt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,nt.__webglColorRenderbuffer[pt]),bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[at]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[at])),dt){const st=i.get(_[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,w,z,0,0,w,z,B,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,nt.__webglColorRenderbuffer[pt]);const bt=i.get(_[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function k(x){return Math.min(r.maxSamples,x.samples)}function F(x){const _=i.get(x);return a&&x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function it(x){const _=o.render.frame;u.get(x)!==_&&(u.set(x,_),x.update())}function et(x,_){const w=x.colorSpace,z=x.format,B=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===yc||w!==Qn&&w!==fn&&(te.getTransfer(w)===ae?a===!1?t.has("EXT_sRGB")===!0&&z===yn?(x.format=yc,x.minFilter=un,x.generateMipmaps=!1):_=Pp.sRGBToLinear(_):(z!==yn||B!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),_}this.allocateTextureUnit=I,this.resetTextureUnits=ct,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=tt,this.rebindTextures=Ht,this.setupRenderTarget=E,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=F}function Xb(n,t,e){const i=e.isWebGL2;function r(s,o=fn){let a;const l=te.getTransfer(o);if(s===vi)return n.UNSIGNED_BYTE;if(s===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(s===bp)return n.UNSIGNED_SHORT_5_5_5_1;if(s===AE)return n.BYTE;if(s===wE)return n.SHORT;if(s===eu)return n.UNSIGNED_SHORT;if(s===Sp)return n.INT;if(s===di)return n.UNSIGNED_INT;if(s===hi)return n.FLOAT;if(s===ks)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===CE)return n.ALPHA;if(s===yn)return n.RGBA;if(s===RE)return n.LUMINANCE;if(s===LE)return n.LUMINANCE_ALPHA;if(s===Zi)return n.DEPTH_COMPONENT;if(s===Yr)return n.DEPTH_STENCIL;if(s===yc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===PE)return n.RED;if(s===yp)return n.RED_INTEGER;if(s===DE)return n.RG;if(s===Tp)return n.RG_INTEGER;if(s===Ap)return n.RGBA_INTEGER;if(s===hl||s===pl||s===ml||s===_l)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_l)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vf||s===Ef||s===xf||s===Sf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===vf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ef)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wp)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mf||s===bf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mf)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yf||s===Tf||s===Af||s===wf||s===Cf||s===Rf||s===Lf||s===Pf||s===Df||s===Nf||s===If||s===Of||s===Uf||s===Ff)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Tf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Af)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Df)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===If)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Of)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uf)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ff)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gl||s===Bf||s===Hf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===gl)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===NE||s===zf||s===Vf||s===Gf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===gl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===zf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ji?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class qb extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Do extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yb={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Kb extends as{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,v=null;const g=e.getContextAttributes();let p=null,h=null;const T=[],S=[],M=new ee;let N=null;const C=new Qe;C.layers.enable(1),C.viewport=new Ae;const R=new Qe;R.layers.enable(2),R.viewport=new Ae;const J=[C,R],b=new qb;b.layers.enable(1),b.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=T[Z];return ot===void 0&&(ot=new Gl,T[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=T[Z];return ot===void 0&&(ot=new Gl,T[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=T[Z];return ot===void 0&&(ot=new Gl,T[Z]=ot),ot.getHandSpace()};function Q(Z){const ot=S.indexOf(Z.inputSource);if(ot===-1)return;const ht=T[ot];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,c||o),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ct(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ct),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<T.length;Z++){const ot=S[Z];ot!==null&&(S[Z]=null,T[Z].disconnect(ot))}A=null,q=null,t.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ct),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(M),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ot={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new er(m.framebufferWidth,m.framebufferHeight,{format:yn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,ht=null,xt=null;g.depth&&(xt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Yr:Zi,ht=g.stencil?ji:di);const Mt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(Mt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),h=new er(d.textureWidth,d.textureHeight,{format:yn,type:vi,depthTexture:new Wp(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const wt=t.properties.get(h);wt.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(Z){for(let ot=0;ot<Z.removed.length;ot++){const ht=Z.removed[ot],xt=S.indexOf(ht);xt>=0&&(S[xt]=null,T[xt].disconnect(ht))}for(let ot=0;ot<Z.added.length;ot++){const ht=Z.added[ot];let xt=S.indexOf(ht);if(xt===-1){for(let wt=0;wt<T.length;wt++)if(wt>=S.length){S.push(ht),xt=wt;break}else if(S[wt]===null){S[wt]=ht,xt=wt;break}if(xt===-1)break}const Mt=T[xt];Mt&&Mt.connect(ht)}}const W=new H,G=new H;function K(Z,ot,ht){W.setFromMatrixPosition(ot.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);const xt=W.distanceTo(G),Mt=ot.projectionMatrix.elements,wt=ht.projectionMatrix.elements,Rt=Mt[14]/(Mt[10]-1),Ct=Mt[14]/(Mt[10]+1),Ht=(Mt[9]+1)/Mt[5],E=(Mt[9]-1)/Mt[5],P=(Mt[8]-1)/Mt[0],O=(wt[8]+1)/wt[0],k=Rt*P,F=Rt*O,it=xt/(-P+O),et=it*-P;ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(et),Z.translateZ(it),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const x=Rt+it,_=Ct+it,w=k-et,z=F+(xt-et),B=Ht*Ct/_*x,V=E*Ct/_*x;Z.projectionMatrix.makePerspective(w,z,B,V,x,_),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function Y(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;b.near=R.near=C.near=Z.near,b.far=R.far=C.far=Z.far,(A!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,q=b.far);const ot=Z.parent,ht=b.cameras;Y(b,ot);for(let xt=0;xt<ht.length;xt++)Y(ht[xt],ot);ht.length===2?K(b,C,R):b.projectionMatrix.copy(C.projectionMatrix),tt(Z,b,ot)};function tt(Z,ot,ht){ht===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)};let rt=null;function ft(Z,ot){if(u=ot.getViewerPose(c||o),v=ot,u!==null){const ht=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let xt=!1;ht.length!==b.cameras.length&&(b.cameras.length=0,xt=!0);for(let Mt=0;Mt<ht.length;Mt++){const wt=ht[Mt];let Rt=null;if(m!==null)Rt=m.getViewport(wt);else{const Ht=f.getViewSubImage(d,wt);Rt=Ht.viewport,Mt===0&&(t.setRenderTargetTextures(h,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(h))}let Ct=J[Mt];Ct===void 0&&(Ct=new Qe,Ct.layers.enable(Mt),Ct.viewport=new Ae,J[Mt]=Ct),Ct.matrix.fromArray(wt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(wt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Mt===0&&(b.matrix.copy(Ct.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xt===!0&&b.cameras.push(Ct)}}for(let ht=0;ht<T.length;ht++){const xt=S[ht],Mt=T[ht];xt!==null&&Mt!==void 0&&Mt.update(xt,ot,c||o)}rt&&rt(Z,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),v=null}const ut=new kp;ut.setAnimationLoop(ft),this.setAnimationLoop=function(Z){rt=Z},this.dispose=function(){}}}function jb(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Hp(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,T,S,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,M)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,S):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===qe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===qe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=t.get(h).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*S,e(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,S){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=S*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),t.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===qe&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const T=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zb(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,S){const M=S.program;i.uniformBlockBinding(T,M)}function c(T,S){let M=r[T.id];M===void 0&&(v(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",p));const N=S.program;i.updateUBOMapping(T,N);const C=t.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const S=f();T.__bindingPointIndex=S;const M=n.createBuffer(),N=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,M),M}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=r[T.id],M=T.uniforms,N=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,R=M.length;C<R;C++){const J=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,A=J.length;b<A;b++){const q=J[b];if(m(q,C,b,N)===!0){const Q=q.__offset,ct=Array.isArray(q.value)?q.value:[q.value];let I=0;for(let W=0;W<ct.length;W++){const G=ct[W],K=g(G);typeof G=="number"||typeof G=="boolean"?(q.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,Q+I,q.__data)):G.isMatrix3?(q.__data[0]=G.elements[0],q.__data[1]=G.elements[1],q.__data[2]=G.elements[2],q.__data[3]=0,q.__data[4]=G.elements[3],q.__data[5]=G.elements[4],q.__data[6]=G.elements[5],q.__data[7]=0,q.__data[8]=G.elements[6],q.__data[9]=G.elements[7],q.__data[10]=G.elements[8],q.__data[11]=0):(G.toArray(q.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,S,M,N){const C=T.value,R=S+"_"+M;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const J=N[R];if(typeof C=="number"||typeof C=="boolean"){if(J!==C)return N[R]=C,!0}else if(J.equals(C)===!1)return J.copy(C),!0}return!1}function v(T){const S=T.uniforms;let M=0;const N=16;for(let R=0,J=S.length;R<J;R++){const b=Array.isArray(S[R])?S[R]:[S[R]];for(let A=0,q=b.length;A<q;A++){const Q=b[A],ct=Array.isArray(Q.value)?Q.value:[Q.value];for(let I=0,W=ct.length;I<W;I++){const G=ct[I],K=g(G),Y=M%N;Y!==0&&N-Y<K.boundary&&(M+=N-Y),Q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=M,M+=K.storage}}}const C=M%N;return C>0&&(M+=N-C),T.__size=M,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ru{constructor(t={}){const{canvas:e=XE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const h=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const S=this;let M=!1,N=0,C=0,R=null,J=-1,b=null;const A=new Ae,q=new Ae;let Q=null;const ct=new Zt(0);let I=0,W=e.width,G=e.height,K=1,Y=null,tt=null;const rt=new Ae(0,0,W,G),ft=new Ae(0,0,W,G);let ut=!1;const Z=new Gp;let ot=!1,ht=!1,xt=null;const Mt=new pe,wt=new ee,Rt=new H,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return R===null?K:1}let E=i;function P(y,U){for(let X=0;X<y.length;X++){const j=y[X],$=e.getContext(j,U);if($!==null)return $}return null}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tu}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",vt,!1),E===null){const U=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&U.shift(),E=P(U,y),E===null)throw P(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&E instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),E.getShaderPrecisionFormat===void 0&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let O,k,F,it,et,x,_,w,z,B,V,at,nt,dt,pt,bt,st,Yt,Vt,Pt,Tt,gt,Lt,jt;function de(){O=new aM(E),k=new tM(E,O,t),O.init(k),gt=new Xb(E,O,k),F=new Wb(E,O,k),it=new uM(E),et=new Lb,x=new $b(E,O,F,et,k,gt,it),_=new nM(S),w=new oM(S),z=new gx(E,k),Lt=new JS(E,O,z,k),B=new lM(E,z,it,Lt),V=new pM(E,B,z,it),Vt=new hM(E,k,x),bt=new eM(et),at=new Rb(S,_,w,O,k,Lt,bt),nt=new jb(S,et),dt=new Db,pt=new Bb(O,k),Yt=new ZS(S,_,w,F,V,d,l),st=new kb(S,V,k),jt=new Zb(E,it,k,F),Pt=new QS(E,O,it,k),Tt=new cM(E,O,it,k),it.programs=at.programs,S.capabilities=k,S.extensions=O,S.properties=et,S.renderLists=dt,S.shadowMap=st,S.state=F,S.info=it}de();const $t=new Kb(S,E);this.xr=$t,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const y=O.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=O.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(W,G,!1))},this.getSize=function(y){return y.set(W,G)},this.setSize=function(y,U,X=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,G=U,e.width=Math.floor(y*K),e.height=Math.floor(U*K),X===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(W*K,G*K).floor()},this.setDrawingBufferSize=function(y,U,X){W=y,G=U,K=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(rt)},this.setViewport=function(y,U,X,j){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,U,X,j),F.viewport(A.copy(rt).multiplyScalar(K).floor())},this.getScissor=function(y){return y.copy(ft)},this.setScissor=function(y,U,X,j){y.isVector4?ft.set(y.x,y.y,y.z,y.w):ft.set(y,U,X,j),F.scissor(q.copy(ft).multiplyScalar(K).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){F.setScissorTest(ut=y)},this.setOpaqueSort=function(y){Y=y},this.setTransparentSort=function(y){tt=y},this.getClearColor=function(y){return y.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(y=!0,U=!0,X=!0){let j=0;if(y){let $=!1;if(R!==null){const St=R.texture.format;$=St===Ap||St===Tp||St===yp}if($){const St=R.texture.type,yt=St===vi||St===di||St===eu||St===ji||St===Mp||St===bp,It=Yt.getClearColor(),Ut=Yt.getClearAlpha(),Wt=It.r,Bt=It.g,zt=It.b;yt?(m[0]=Wt,m[1]=Bt,m[2]=zt,m[3]=Ut,E.clearBufferuiv(E.COLOR,0,m)):(v[0]=Wt,v[1]=Bt,v[2]=zt,v[3]=Ut,E.clearBufferiv(E.COLOR,0,v))}else j|=E.COLOR_BUFFER_BIT}U&&(j|=E.DEPTH_BUFFER_BIT),X&&(j|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),dt.dispose(),pt.dispose(),et.dispose(),_.dispose(),w.dispose(),V.dispose(),Lt.dispose(),jt.dispose(),at.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",Ie),$t.removeEventListener("sessionend",oe),xt&&(xt.dispose(),xt=null),Oe.stop()};function mt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=it.autoReset,U=st.enabled,X=st.autoUpdate,j=st.needsUpdate,$=st.type;de(),it.autoReset=y,st.enabled=U,st.autoUpdate=X,st.needsUpdate=j,st.type=$}function vt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Et(y){const U=y.target;U.removeEventListener("dispose",Et),Ot(U)}function Ot(y){Dt(y),et.remove(y)}function Dt(y){const U=et.get(y).programs;U!==void 0&&(U.forEach(function(X){at.releaseProgram(X)}),y.isShaderMaterial&&at.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,j,$,St){U===null&&(U=Ct);const yt=$.isMesh&&$.matrixWorld.determinant()<0,It=e_(y,U,X,j,$);F.setMaterial(j,yt);let Ut=X.index,Wt=1;if(j.wireframe===!0){if(Ut=B.getWireframeAttribute(X),Ut===void 0)return;Wt=2}const Bt=X.drawRange,zt=X.attributes.position;let me=Bt.start*Wt,je=(Bt.start+Bt.count)*Wt;St!==null&&(me=Math.max(me,St.start*Wt),je=Math.min(je,(St.start+St.count)*Wt)),Ut!==null?(me=Math.max(me,0),je=Math.min(je,Ut.count)):zt!=null&&(me=Math.max(me,0),je=Math.min(je,zt.count));const Se=je-me;if(Se<0||Se===1/0)return;Lt.setup($,j,It,X,Ut);let zn,ue=Pt;if(Ut!==null&&(zn=z.get(Ut),ue=Tt,ue.setIndex(zn)),$.isMesh)j.wireframe===!0?(F.setLineWidth(j.wireframeLinewidth*Ht()),ue.setMode(E.LINES)):ue.setMode(E.TRIANGLES);else if($.isLine){let Xt=j.linewidth;Xt===void 0&&(Xt=1),F.setLineWidth(Xt*Ht()),$.isLineSegments?ue.setMode(E.LINES):$.isLineLoop?ue.setMode(E.LINE_LOOP):ue.setMode(E.LINE_STRIP)}else $.isPoints?ue.setMode(E.POINTS):$.isSprite&&ue.setMode(E.TRIANGLES);if($.isBatchedMesh)ue.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ue.renderInstances(me,Se,$.count);else if(X.isInstancedBufferGeometry){const Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Za=Math.min(X.instanceCount,Xt);ue.renderInstances(me,Se,Za)}else ue.render(me,Se)};function re(y,U,X){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=qe,y.needsUpdate=!0,no(y,U,X),y.side=Si,y.needsUpdate=!0,no(y,U,X),y.side=tn):no(y,U,X)}this.compile=function(y,U,X=null){X===null&&(X=y),p=pt.get(X),p.init(),T.push(p),X.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),y!==X&&y.traverseVisible(function($){$.isLight&&$.layers.test(U.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(S._useLegacyLights);const j=new Set;return y.traverse(function($){const St=$.material;if(St)if(Array.isArray(St))for(let yt=0;yt<St.length;yt++){const It=St[yt];re(It,X,$),j.add(It)}else re(St,X,$),j.add(St)}),T.pop(),p=null,j},this.compileAsync=function(y,U,X=null){const j=this.compile(y,U,X);return new Promise($=>{function St(){if(j.forEach(function(yt){et.get(yt).currentProgram.isReady()&&j.delete(yt)}),j.size===0){$(y);return}setTimeout(St,10)}O.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let se=null;function xe(y){se&&se(y)}function Ie(){Oe.stop()}function oe(){Oe.start()}const Oe=new kp;Oe.setAnimationLoop(xe),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(y){se=y,$t.setAnimationLoop(y),y===null?Oe.stop():Oe.start()},$t.addEventListener("sessionstart",Ie),$t.addEventListener("sessionend",oe),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(U),U=$t.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,U,R),p=pt.get(y,T.length),p.init(),T.push(p),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Mt),ht=this.localClippingEnabled,ot=bt.init(this.clippingPlanes,ht),g=dt.get(y,h.length),g.init(),h.push(g),Cn(y,U,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(Y,tt),this.info.render.frame++,ot===!0&&bt.beginShadows();const X=p.state.shadowsArray;if(st.render(X,y,U),ot===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Yt.render(g,y),p.setupLights(S._useLegacyLights),U.isArrayCamera){const j=U.cameras;for(let $=0,St=j.length;$<St;$++){const yt=j[$];yu(g,y,yt,yt.viewport)}}else yu(g,y,U);R!==null&&(x.updateMultisampleRenderTarget(R),x.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(S,y,U),Lt.resetDefaultState(),J=-1,b=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Cn(y,U,X,j){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){j&&Rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);const yt=V.update(y),It=y.material;It.visible&&g.push(y,yt,It,X,Rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const yt=V.update(y),It=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Rt.copy(y.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Rt.copy(yt.boundingSphere.center)),Rt.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(It)){const Ut=yt.groups;for(let Wt=0,Bt=Ut.length;Wt<Bt;Wt++){const zt=Ut[Wt],me=It[zt.materialIndex];me&&me.visible&&g.push(y,yt,me,X,Rt.z,zt)}}else It.visible&&g.push(y,yt,It,X,Rt.z,null)}}const St=y.children;for(let yt=0,It=St.length;yt<It;yt++)Cn(St[yt],U,X,j)}function yu(y,U,X,j){const $=y.opaque,St=y.transmissive,yt=y.transparent;p.setupLightsView(X),ot===!0&&bt.setGlobalState(S.clippingPlanes,X),St.length>0&&t_($,St,U,X),j&&F.viewport(A.copy(j)),$.length>0&&eo($,U,X),St.length>0&&eo(St,U,X),yt.length>0&&eo(yt,U,X),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function t_(y,U,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const St=k.isWebGL2;xt===null&&(xt=new er(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?ks:vi,minFilter:Gs,samples:St?4:0})),S.getDrawingBufferSize(wt),St?xt.setSize(wt.x,wt.y):xt.setSize(Ac(wt.x),Ac(wt.y));const yt=S.getRenderTarget();S.setRenderTarget(xt),S.getClearColor(ct),I=S.getClearAlpha(),I<1&&S.setClearColor(16777215,.5),S.clear();const It=S.toneMapping;S.toneMapping=gi,eo(y,X,j),x.updateMultisampleRenderTarget(xt),x.updateRenderTargetMipmap(xt);let Ut=!1;for(let Wt=0,Bt=U.length;Wt<Bt;Wt++){const zt=U[Wt],me=zt.object,je=zt.geometry,Se=zt.material,zn=zt.group;if(Se.side===tn&&me.layers.test(j.layers)){const ue=Se.side;Se.side=qe,Se.needsUpdate=!0,Tu(me,X,j,je,Se,zn),Se.side=ue,Se.needsUpdate=!0,Ut=!0}}Ut===!0&&(x.updateMultisampleRenderTarget(xt),x.updateRenderTargetMipmap(xt)),S.setRenderTarget(yt),S.setClearColor(ct,I),S.toneMapping=It}function eo(y,U,X){const j=U.isScene===!0?U.overrideMaterial:null;for(let $=0,St=y.length;$<St;$++){const yt=y[$],It=yt.object,Ut=yt.geometry,Wt=j===null?yt.material:j,Bt=yt.group;It.layers.test(X.layers)&&Tu(It,U,X,Ut,Wt,Bt)}}function Tu(y,U,X,j,$,St){y.onBeforeRender(S,U,X,j,$,St),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(S,U,X,j,y,St),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=qe,$.needsUpdate=!0,S.renderBufferDirect(X,U,j,$,y,St),$.side=Si,$.needsUpdate=!0,S.renderBufferDirect(X,U,j,$,y,St),$.side=tn):S.renderBufferDirect(X,U,j,$,y,St),y.onAfterRender(S,U,X,j,$,St)}function no(y,U,X){U.isScene!==!0&&(U=Ct);const j=et.get(y),$=p.state.lights,St=p.state.shadowsArray,yt=$.state.version,It=at.getParameters(y,$.state,St,U,X),Ut=at.getProgramCacheKey(It);let Wt=j.programs;j.environment=y.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(y.isMeshStandardMaterial?w:_).get(y.envMap||j.environment),Wt===void 0&&(y.addEventListener("dispose",Et),Wt=new Map,j.programs=Wt);let Bt=Wt.get(Ut);if(Bt!==void 0){if(j.currentProgram===Bt&&j.lightsStateVersion===yt)return wu(y,It),Bt}else It.uniforms=at.getUniforms(y),y.onBuild(X,It,S),y.onBeforeCompile(It,S),Bt=at.acquireProgram(It,Ut),Wt.set(Ut,Bt),j.uniforms=It.uniforms;const zt=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(zt.clippingPlanes=bt.uniform),wu(y,It),j.needsLights=i_(y),j.lightsStateVersion=yt,j.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.directionalShadowMap.value=$.state.directionalShadowMap,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotShadowMap.value=$.state.spotShadowMap,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMap.value=$.state.pointShadowMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=Bt,j.uniformsList=null,Bt}function Au(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ia.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function wu(y,U){const X=et.get(y);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function e_(y,U,X,j,$){U.isScene!==!0&&(U=Ct),x.resetTextureUnits();const St=U.fog,yt=j.isMeshStandardMaterial?U.environment:null,It=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qn,Ut=(j.isMeshStandardMaterial?w:_).get(j.envMap||yt),Wt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Bt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!X.morphAttributes.position,me=!!X.morphAttributes.normal,je=!!X.morphAttributes.color;let Se=gi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=S.toneMapping);const zn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=zn!==void 0?zn.length:0,Xt=et.get(j),Za=p.state.lights;if(ot===!0&&(ht===!0||y!==b)){const an=y===b&&j.id===J;bt.setState(j,y,an)}let he=!1;j.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Za.state.version||Xt.outputColorSpace!==It||$.isBatchedMesh&&Xt.batching===!1||!$.isBatchedMesh&&Xt.batching===!0||$.isInstancedMesh&&Xt.instancing===!1||!$.isInstancedMesh&&Xt.instancing===!0||$.isSkinnedMesh&&Xt.skinning===!1||!$.isSkinnedMesh&&Xt.skinning===!0||$.isInstancedMesh&&Xt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xt.instancingColor===!1&&$.instanceColor!==null||Xt.envMap!==Ut||j.fog===!0&&Xt.fog!==St||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==bt.numPlanes||Xt.numIntersection!==bt.numIntersection)||Xt.vertexAlphas!==Wt||Xt.vertexTangents!==Bt||Xt.morphTargets!==zt||Xt.morphNormals!==me||Xt.morphColors!==je||Xt.toneMapping!==Se||k.isWebGL2===!0&&Xt.morphTargetsCount!==ue)&&(he=!0):(he=!0,Xt.__version=j.version);let Ri=Xt.currentProgram;he===!0&&(Ri=no(j,U,$));let Cu=!1,hs=!1,Ja=!1;const we=Ri.getUniforms(),Li=Xt.uniforms;if(F.useProgram(Ri.program)&&(Cu=!0,hs=!0,Ja=!0),j.id!==J&&(J=j.id,hs=!0),Cu||b!==y){we.setValue(E,"projectionMatrix",y.projectionMatrix),we.setValue(E,"viewMatrix",y.matrixWorldInverse);const an=we.map.cameraPosition;an!==void 0&&an.setValue(E,Rt.setFromMatrixPosition(y.matrixWorld)),k.logarithmicDepthBuffer&&we.setValue(E,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&we.setValue(E,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,hs=!0,Ja=!0)}if($.isSkinnedMesh){we.setOptional(E,$,"bindMatrix"),we.setOptional(E,$,"bindMatrixInverse");const an=$.skeleton;an&&(k.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),we.setValue(E,"boneTexture",an.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(we.setOptional(E,$,"batchingTexture"),we.setValue(E,"batchingTexture",$._matricesTexture,x));const Qa=X.morphAttributes;if((Qa.position!==void 0||Qa.normal!==void 0||Qa.color!==void 0&&k.isWebGL2===!0)&&Vt.update($,X,Ri),(hs||Xt.receiveShadow!==$.receiveShadow)&&(Xt.receiveShadow=$.receiveShadow,we.setValue(E,"receiveShadow",$.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Li.envMap.value=Ut,Li.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),hs&&(we.setValue(E,"toneMappingExposure",S.toneMappingExposure),Xt.needsLights&&n_(Li,Ja),St&&j.fog===!0&&nt.refreshFogUniforms(Li,St),nt.refreshMaterialUniforms(Li,j,K,G,xt),ia.upload(E,Au(Xt),Li,x)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ia.upload(E,Au(Xt),Li,x),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&we.setValue(E,"center",$.center),we.setValue(E,"modelViewMatrix",$.modelViewMatrix),we.setValue(E,"normalMatrix",$.normalMatrix),we.setValue(E,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let tl=0,r_=an.length;tl<r_;tl++)if(k.isWebGL2){const Ru=an[tl];jt.update(Ru,Ri),jt.bind(Ru,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function n_(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function i_(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,U,X){et.get(y.texture).__webglTexture=U,et.get(y.depthTexture).__webglTexture=X;const j=et.get(y);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const X=et.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){R=y,N=U,C=X;let j=!0,$=null,St=!1,yt=!1;if(y){const Ut=et.get(y);Ut.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(E.FRAMEBUFFER,null),j=!1):Ut.__webglFramebuffer===void 0?x.setupRenderTarget(y):Ut.__hasExternalTextures&&x.rebindTextures(y,et.get(y.texture).__webglTexture,et.get(y.depthTexture).__webglTexture);const Wt=y.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);const Bt=et.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?$=Bt[U][X]:$=Bt[U],St=!0):k.isWebGL2&&y.samples>0&&x.useMultisampledRTT(y)===!1?$=et.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?$=Bt[X]:$=Bt,A.copy(y.viewport),q.copy(y.scissor),Q=y.scissorTest}else A.copy(rt).multiplyScalar(K).floor(),q.copy(ft).multiplyScalar(K).floor(),Q=ut;if(F.bindFramebuffer(E.FRAMEBUFFER,$)&&k.drawBuffers&&j&&F.drawBuffers(y,$),F.viewport(A),F.scissor(q),F.setScissorTest(Q),St){const Ut=et.get(y.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,X)}else if(yt){const Ut=et.get(y.texture),Wt=U||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ut.__webglTexture,X||0,Wt)}J=-1},this.readRenderTargetPixels=function(y,U,X,j,$,St,yt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=et.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&yt!==void 0&&(It=It[yt]),It){F.bindFramebuffer(E.FRAMEBUFFER,It);try{const Ut=y.texture,Wt=Ut.format,Bt=Ut.type;if(Wt!==yn&&gt.convert(Wt)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Bt===ks&&(O.has("EXT_color_buffer_half_float")||k.isWebGL2&&O.has("EXT_color_buffer_float"));if(Bt!==vi&&gt.convert(Bt)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===hi&&(k.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-j&&X>=0&&X<=y.height-$&&E.readPixels(U,X,j,$,gt.convert(Wt),gt.convert(Bt),St)}finally{const Ut=R!==null?et.get(R).__webglFramebuffer:null;F.bindFramebuffer(E.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(y,U,X=0){const j=Math.pow(2,-X),$=Math.floor(U.image.width*j),St=Math.floor(U.image.height*j);x.setTexture2D(U,0),E.copyTexSubImage2D(E.TEXTURE_2D,X,0,0,y.x,y.y,$,St),F.unbindTexture()},this.copyTextureToTexture=function(y,U,X,j=0){const $=U.image.width,St=U.image.height,yt=gt.convert(X.format),It=gt.convert(X.type);x.setTexture2D(X,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,X.unpackAlignment),U.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,j,y.x,y.y,$,St,yt,It,U.image.data):U.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,j,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,yt,U.mipmaps[0].data):E.texSubImage2D(E.TEXTURE_2D,j,y.x,y.y,yt,It,U.image),j===0&&X.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(y,U,X,j,$=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=y.max.x-y.min.x+1,yt=y.max.y-y.min.y+1,It=y.max.z-y.min.z+1,Ut=gt.convert(j.format),Wt=gt.convert(j.type);let Bt;if(j.isData3DTexture)x.setTexture3D(j,0),Bt=E.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)x.setTexture2DArray(j,0),Bt=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,j.unpackAlignment);const zt=E.getParameter(E.UNPACK_ROW_LENGTH),me=E.getParameter(E.UNPACK_IMAGE_HEIGHT),je=E.getParameter(E.UNPACK_SKIP_PIXELS),Se=E.getParameter(E.UNPACK_SKIP_ROWS),zn=E.getParameter(E.UNPACK_SKIP_IMAGES),ue=X.isCompressedTexture?X.mipmaps[$]:X.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,ue.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ue.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,y.min.x),E.pixelStorei(E.UNPACK_SKIP_ROWS,y.min.y),E.pixelStorei(E.UNPACK_SKIP_IMAGES,y.min.z),X.isDataTexture||X.isData3DTexture?E.texSubImage3D(Bt,$,U.x,U.y,U.z,St,yt,It,Ut,Wt,ue.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),E.compressedTexSubImage3D(Bt,$,U.x,U.y,U.z,St,yt,It,Ut,ue.data)):E.texSubImage3D(Bt,$,U.x,U.y,U.z,St,yt,It,Ut,Wt,ue),E.pixelStorei(E.UNPACK_ROW_LENGTH,zt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,me),E.pixelStorei(E.UNPACK_SKIP_PIXELS,je),E.pixelStorei(E.UNPACK_SKIP_ROWS,Se),E.pixelStorei(E.UNPACK_SKIP_IMAGES,zn),$===0&&j.generateMipmaps&&E.generateMipmap(Bt),F.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),F.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,F.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===nu?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Ji:Cp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ji?Te:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Jb extends ru{}Jb.prototype.isWebGL1Renderer=!0;class jp extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class su extends Ys{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pd=new H,Dd=new H,Nd=new pe,kl=new Ip,No=new za;class Qb extends Ye{constructor(t=new Hn,e=new su){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Pd.fromBufferAttribute(e,r-1),Dd.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Pd.distanceTo(Dd);t.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,t.ray.intersectsSphere(No)===!1)return;Nd.copy(r).invert(),kl.copy(t.ray).applyMatrix4(Nd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,f=new H,d=new H,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const h=Math.max(0,o.start),T=Math.min(v.count,o.start+o.count);for(let S=h,M=T-1;S<M;S+=m){const N=v.getX(S),C=v.getX(S+1);if(c.fromBufferAttribute(p,N),u.fromBufferAttribute(p,C),kl.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const J=t.ray.origin.distanceTo(d);J<t.near||J>t.far||e.push({distance:J,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let S=h,M=T-1;S<M;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),kl.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(d);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Id=new H,Od=new H;class Zp extends Qb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Id.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Id.distanceTo(Od);t.setAttribute("lineDistance",new nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jp extends Zp{constructor(t=10,e=10,i=4473924,r=8947848){i=new Zt(i),r=new Zt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,m=0,v=-a;d<=e;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const g=d===s?i:r;g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3,g.toArray(c,m),m+=3}const u=new Hn;u.setAttribute("position",new nn(l,3)),u.setAttribute("color",new nn(c,3));const f=new su({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ns extends Zp{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Hn;r.setAttribute("position",new nn(e,3)),r.setAttribute("color",new nn(i,3));const s=new su({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new Zt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const ty={class:"position-relative p-0 h-100 d-flex flex-column",style:{"min-height":"30vh"}},ey=L("i",{class:"bi bi-arrow-clockwise"},null,-1),ny=[ey],Ud=6*.04,Fd=9*.04,Qp={__name:"World",props:["posesList","inverse","camPos","upDir","showBoard"],setup(n){const t=ie(null),e=n;Ts(()=>e.posesList,()=>{u()});const i=new jp;new H(0,0,0);const r=new Ns(2);i.add(r);const s=new Jp(4,40,2236962,1118481);if(s.rotation.x=Math.PI/2,i.add(s),e.showBoard){const f=new Ks(Fd,Ud),d=new Kr({color:8947967,side:tn}),m=new dn(f,d);m.position.x+=Fd/2,m.position.y+=Ud/2,i.add(m)}const o=new H(0,0,1),a=new sr(.05,.02,.02),l=new Kr({color:16777215,side:tn}),c=[];function u(){e.posesList.forEach(f=>{try{var d=new dn(a,l),m=new Ns(.1);let v=new pe;v.makeRotationFromQuaternion(new jn(...f.rvec)),v.setPosition(...f.tvec),e.inverse&&v.invert(),d.applyMatrix4(v),m.applyMatrix4(v),c.push(d),i.add(d),i.add(m)}catch{}})}return Kc(()=>{const f=new ru({canvas:t.value});f.setSize(t.value.width,t.value.height);const d=new Qe(60,t.value.width/t.value.height,.01,10);d.position.set(...e.camPos),d.up.set(...e.upDir),d.lookAt(0,0,0);function m(){const g=t.value.clientWidth,p=t.value.clientHeight;f.setSize(g,p,!1),d.aspect=g/p,d.updateProjectionMatrix()}function v(){m(),requestAnimationFrame(v),d.position.applyAxisAngle(o,.001),d.lookAt(0,0,0),f.render(i,d)}v()}),(f,d)=>(fe(),Xe("div",ty,[L("canvas",{ref_key:"threecanvas",ref:t,class:"w-100 flex-fill"},null,512),L("button",{type:"button",class:"btn btn-dark position-absolute top-0 end-0",onClick:u},ny)]))}},iy={class:"d-flex flex-column"},ry={class:"bg-dark-subtle border rounded-3 p-2 my-2 flex-fill"},sy={class:"row h-100"},oy={class:"col-12 d-flex"},ay={__name:"ImageLoader",setup(n){return(t,e)=>(fe(),Xe("div",iy,[L("div",ry,[L("div",sy,[L("div",oy,[Qt(gp,{PosesList:Ft(Vs),tableTitle:"Charuco Board Poses",onRefreshTable:Ft(na),class:"flex-fill"},null,8,["PosesList","onRefreshTable"])])])])]))}},ly={class:"row"},cy={class:"col-12 mb-3"},uy={class:"form-floating"},fy=L("label",{for:"marker_dict"},"ARUCO Dictionary",-1),dy={class:"input-group col-12 mb-3",id:"grid_size"},hy={class:"form-floating"},py=L("label",{for:"x_num"},"X Count",-1),my=L("span",{class:"input-group-text"},"X",-1),_y={class:"form-floating"},gy=L("label",{for:"y_num"},"Y Count",-1),vy={class:"input-group col-12 mb-3",id:"grid_len"},Ey={class:"form-floating"},xy=L("label",{for:"sq_len"},"Square Length",-1),Sy={class:"form-floating"},My=L("label",{for:"marker_len"},"Marker Length",-1),by=L("div",{class:"col-12"},[L("button",{type:"button",class:"btn btn-outline-light w-100"},"Apply")],-1),yy={__name:"CharucoParams",setup(n){const t=ie(9);ie(6);const e=ie(.04),i=ie(.035),r=ie(2);return(s,o)=>(fe(),ni(Ti,{title:"CHARUCO BOARD"},{default:Bn(()=>[L("div",ly,[L("div",cy,[L("div",uy,[be(L("input",{type:"number",id:"marker_dict",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),placeholder:"2"},null,512),[[Le,r.value]]),fy])]),L("div",dy,[L("div",hy,[be(L("input",{type:"number",id:"x_num",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=a=>t.value=a),placeholder:"9"},null,512),[[Le,t.value]]),py]),my,L("div",_y,[be(L("input",{type:"number",id:"y_num",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=a=>t.value=a),placeholder:"9"},null,512),[[Le,t.value]]),gy])]),L("div",vy,[L("div",Ey,[be(L("input",{type:"number",id:"sq_len",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=a=>e.value=a),placeholder:"0.040"},null,512),[[Le,e.value]]),xy]),L("div",Sy,[be(L("input",{type:"number",id:"marker_len",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=a=>i.value=a),placeholder:"0.035"},null,512),[[Le,i.value]]),My])]),by])]),_:1}))}},Ty={class:"d-flex flex-column flex-fill"},Ay={class:"mb-auto"},wy={class:"input-group mb-3",id:"Resolution"},Cy=L("span",{class:"input-group-text"},"Size",-1),Ry=L("span",{class:"input-group-text"},"x",-1),Ly={class:"mb-3"},Py=L("label",{for:"grid_len",class:"form-label"},"Intrinsic Matrix",-1),Dy={class:"input-group",id:"grid_len"},Ny=L("span",{class:"input-group-text"},"fx",-1),Iy=L("span",{class:"input-group-text"},"fy",-1),Oy={class:"input-group mb-3",id:"grid_len"},Uy=L("span",{class:"input-group-text"},"cx",-1),Fy=L("span",{class:"input-group-text"},"cy",-1),By={class:"mb-3"},Hy=L("label",{for:"dist_coeffs",class:"form-label"},"Distortion Coeeficients",-1),zy=L("div",{class:""},[L("button",{type:"button",class:"btn btn-outline-light w-100",disabled:""}," Apply ")],-1),Vy={__name:"CameraParams",setup(n){return(t,e)=>(fe(),ni(Ti,{title:"CAMERA INTRINSICS"},{default:Bn(()=>[L("div",Ty,[L("div",Ay,[L("button",{type:"button",class:"btn btn-outline-light col-12",onClick:e[0]||(e[0]=(...i)=>Ft(Ps)&&Ft(Ps)(...i))}," CALIBRATE CAMERA ")]),L("div",wy,[Cy,be(L("input",{type:"number",id:"res_x",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=i=>ne(qo)?qo.value=i:null),placeholder:"9"},null,512),[[Le,Ft(qo)]]),Ry,be(L("input",{type:"number",id:"res_y",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=i=>ne(Yo)?Yo.value=i:null),placeholder:"9"},null,512),[[Le,Ft(Yo)]])]),L("div",Ly,[Py,L("div",Dy,[Ny,be(L("input",{type:"number",id:"cam_fx",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=i=>ne(Ko)?Ko.value=i:null),placeholder:"0.040"},null,512),[[Le,Ft(Ko)]]),Iy,be(L("input",{type:"number",id:"cam_fy",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=i=>ne(jo)?jo.value=i:null),placeholder:"0.035"},null,512),[[Le,Ft(jo)]])])]),L("div",Oy,[Uy,be(L("input",{type:"number",id:"cam_fx",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=i=>ne(Zo)?Zo.value=i:null),placeholder:"0.040"},null,512),[[Le,Ft(Zo)]]),Fy,be(L("input",{type:"number",id:"cam_fy",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=i=>ne(Jo)?Jo.value=i:null),placeholder:"0.035"},null,512),[[Le,Ft(Jo)]])]),L("div",By,[Hy,be(L("input",{type:"list",id:"dist_coeff",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=i=>ne(Qo)?Qo.value=i:null),placeholder:""},null,512),[[Le,Ft(Qo)]])]),zy])]),_:1}))}},Gy={class:"row"},ky={class:"input-group col-12"},Wy=L("span",{class:"input-group-text",id:"basic-addon1"},[L("i",{class:"bi bi-file-earmark-text"})],-1),$y={class:"btn-toolbar mt-2 col-12",role:"toolbar"},Xy=L("div",{class:"btn-group me-2",role:"group"},[L("button",{type:"button",class:"btn btn-outline-light","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample"},[L("span",{class:"bi bi-sliders"}," Settings")])],-1),qy={class:"btn-group ms-auto",role:"group"},Yy={__name:"ProgramInput",setup(n){return(t,e)=>(fe(),ni(Ti,{title:"ROBOT PROGRAM FILE"},{default:Bn(()=>[L("div",Gy,[L("div",ky,[Wy,be(L("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>ne(Xo)?Xo.value=i:null),placeholder:"<Path to Robot Program>",class:"form-control"},null,512),[[Le,Ft(Xo)]])]),L("div",$y,[Xy,L("div",qy,[L("button",{type:"button",class:"btn btn-light",onClick:e[1]||(e[1]=(...i)=>Ft(gc)&&Ft(gc)(...i))}," GET ROBOT POSES ")])])])]),_:1}))}},Ky={class:"row"},jy={class:"input-group col-12 mb-3"},Zy=L("label",{class:"input-group-text",for:"inputGroupSelect01"},"Manufacturer",-1),Jy=L("option",{value:"UR",selected:""},"UR",-1),Qy=L("option",{value:"ABB"},"ABB",-1),tT=L("option",{value:"KUKA",disabled:""},"KUKA",-1),eT=[Jy,Qy,tT],nT=L("div",{class:"col-12"},[L("button",{type:"button",class:"btn btn-outline-light w-100"},"Apply")],-1),iT={__name:"RobotType",setup(n){return(t,e)=>(fe(),ni(Ti,{title:"ROBOT MODEL"},{default:Bn(()=>[L("div",Ky,[L("div",jy,[Zy,be(L("select",{class:"form-select",id:"inputGroupSelect01","onUpdate:modelValue":e[0]||(e[0]=i=>ne(ll)?ll.value=i:null)},eT,512),[[_p,Ft(ll)]])]),nT])]),_:1}))}},rT={class:"d-flex flex-column"},sT={class:"bg-dark-subtle border rounded-3 p-2 my-2 flex-fill"},oT={class:"row h-100"},aT={class:"col-12 d-flex"},lT={__name:"RobPrgLoader",setup(n){return(t,e)=>(fe(),Xe("div",rT,[L("div",sT,[L("div",oT,[L("div",aT,[Qt(gp,{PosesList:Ft($r),tableTitle:"Robot TCP Poses",onRefreshTable:Ft(gc),class:"flex-fill"},null,8,["PosesList","onRefreshTable"])])])])]))}},cT="/EyeInHandToothy.jpg",uT="/EyeToHandToothy.jpg",fT=L("div",{class:"btn-group",role:"group"},[L("input",{type:"radio",class:"btn-check",name:"vbtn-radio",id:"vbtn-radio1",autocomplete:"off",checked:""}),L("label",{class:"btn btn-outline-light p-1 position-relative",for:"vbtn-radio1"},[L("img",{src:cT,class:"img-fluid rounded object-fit-cover",alt:"EYE-IN-HAND"}),L("h4",{class:"bg-dark h4 position-absolute bottom-0 start-50 mb-2 translate-middle-x text-nowrap fw-bolder text-white p-1 rounded bg-opacity-50"}," EYE-IN-HAND ")]),L("input",{type:"radio",class:"btn-check",disabled:"",name:"vbtn-radio",id:"vbtn-radio2",autocomplete:"off"}),L("label",{class:"btn btn-outline-light p-1 position-relative",for:"vbtn-radio2"},[L("img",{src:uT,class:"img-fluid rounded",alt:"EYE-TO-HAND"}),L("div",{class:"bg-dark h4 position-absolute bottom-0 start-50 mb-2 translate-middle-x text-nowrap fw-bolder text-white p-1 rounded bg-opacity-50"}," EYE-TO-HAND ")])],-1),dT={__name:"CalibrationType",setup(n){return(t,e)=>(fe(),ni(Ti,{title:"CALIBRATION TYPE"},{default:Bn(()=>[fT]),_:1}))}},hT={class:"row"},pT={class:"input-group col-12"},mT=L("span",{class:"input-group-text",id:"basic-addon1"},"Save Directory",-1),_T={class:"btn-toolbar mt-2 col-12",role:"toolbar"},gT={class:"btn-group btn-group-sm me-2",role:"group"},vT={class:"input-group input-group-sm col-12 mt-2"},ET=L("span",{class:"input-group-text",id:"save-path-out"},"Saved File",-1),xT={__name:"SavePath",setup(n){function t(){cl(),ul()}return(e,i)=>(fe(),ni(Ti,{title:"SAVE CALIBRATION RESULT"},{default:Bn(()=>[L("div",hT,[L("div",pT,[mT,be(L("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=r=>ne(Rs)?Rs.value=r:null),placeholder:"<Path to Directory for Saving>",class:"form-control"},null,512),[[Le,Ft(Rs)]])]),L("div",_T,[L("div",gT,[L("button",{type:"button",class:"btn btn-outline-secondary",onClick:i[1]||(i[1]=(...r)=>Ft(cl)&&Ft(cl)(...r))}," Save Camera "),L("button",{type:"button",class:"btn btn-outline-secondary",onClick:i[2]||(i[2]=(...r)=>Ft(ul)&&Ft(ul)(...r))}," Save Hand-Eye ")]),L("div",{class:"btn-group ms-auto",role:"group"},[L("button",{type:"button",class:"btn btn-light",onClick:t}," SAVE ALL ")])]),L("div",vT,[ET,be(L("input",{type:"text","onUpdate:modelValue":i[3]||(i[3]=r=>ne(Ls)?Ls.value=r:null),class:"form-control",readonly:""},null,512),[[Le,Ft(Ls)]])])])]),_:1}))}},ST={class:"d-flex flex-column flex-fill"},MT={class:"flex-fill d-flex flex-column"},bT={class:"input-group col-12 mb-3"},yT=L("label",{class:"input-group-text",for:"inputGroupSelectREP"},"Representation",-1),TT=L("option",{value:"rotvec"},"TVec + RVec",-1),AT=L("option",{value:"quat"},"TVec + Quaternion",-1),wT=L("option",{value:"matrix",disabled:""},"4x4 Matrix",-1),CT=[TT,AT,wT],RT={class:"table text-center font-monospace"},LT=L("thead",null,[L("tr",null,[L("th",{scope:"col"}),L("th",{scope:"col"},"Translation"),L("th",{scope:"col"},"Rotation")])],-1),PT=L("th",{scope:"row"},"x",-1),DT=L("th",{scope:"row"},"y",-1),NT=L("th",{scope:"row"},"z",-1),IT=L("th",{scope:"row"},"w",-1),OT=L("td",null,null,-1),UT={__name:"HECalibRes",setup(n){return(t,e)=>(fe(),ni(Ti,{title:"HAND-EYE CALIBRATION"},{default:Bn(()=>{var i;return[L("div",ST,[L("div",MT,[L("div",bT,[yT,be(L("select",{class:"form-select",id:"inputGroupSelectREP","onUpdate:modelValue":e[0]||(e[0]=r=>ne(ea)?ea.value=r:null)},CT,512),[[_p,Ft(ea)]])]),L("button",{class:"btn btn-lg btn-light mb-3 w-100 flex-fill",onClick:e[1]||(e[1]=(...r)=>Ft(uf)&&Ft(uf)(...r))}," CALIBRATE HAND-EYE ")]),L("table",RT,[LT,L("tbody",null,[L("tr",null,[PT,L("td",null,ye(Ft(Ki)[0]),1),L("td",null,ye(Ft(ys)[0]),1)]),L("tr",null,[DT,L("td",null,ye(Ft(Ki)[1]),1),L("td",null,ye(Ft(ys)[1]),1)]),L("tr",null,[NT,L("td",null,ye(Ft(Ki)[2]),1),L("td",null,ye(Ft(ys)[2]),1)]),L("tr",null,[IT,OT,L("td",null,ye(((i=Ft(ys))==null?void 0:i[3])??""),1)])])])])]}),_:1}))}},FT={class:"row flex-fill"},BT={class:"col-6 d-flex"},HT={class:"col-6 d-flex"},zT={__name:"Calibration",setup(n){return(t,e)=>(fe(),Xe("div",FT,[L("div",BT,[Qt(Vy,{class:"flex-fill"})]),L("div",HT,[Qt(UT,{class:"flex-fill"})])]))}},VT={class:"bg-dark-subtle border rounded-3 my-2 overflow-hidden"},GT={__name:"CamPosesView",setup(n){return(t,e)=>(fe(),Xe("div",VT,[Qt(Qp,{posesList:Ft(ma),inverse:!0,camPos:[-1,-1,-1],upDir:[0,0,-1],showBoard:!0},null,8,["posesList"])]))}},kT={class:"bg-dark-subtle border rounded-3 my-2 overflow-hidden"},WT={__name:"RobPosesView",setup(n){return(t,e)=>(fe(),Xe("div",kT,[Qt(Qp,{posesList:Ft($r),inverse:!1,camPos:[-1,-1,1],upDir:[0,0,1],showBoard:!1},null,8,["posesList"])]))}},$T={class:"position-relative p-0 h-100 d-flex flex-column",style:{"min-height":"30vh"}},XT=L("i",{class:"bi bi-arrow-clockwise"},null,-1),qT=[XT],Bd=6*.04,Hd=9*.04,YT={__name:"WorldResult",props:["camPos"],setup(n){const t=ie(null),e=n;Ts([Ki,ta],()=>{console.log(Ki.value),console.log(ta.value),d()});const i=new jp;new H(0,0,0);const r=new Ns(2);i.add(r);const s=new Jp(4,40,2236962,1118481);s.rotation.x=Math.PI/2,i.add(s);const o=new Ks(Hd,Bd),a=new Kr({color:8947967,side:tn}),l=new dn(o,a);l.position.x+=Hd/2,l.position.y+=Bd/2,i.add(l);const c=new H(0,0,1),u=new sr(.05,.02,.02),f=new Kr({color:16777215,side:tn});function d(){const m=new pe;m.makeRotationFromQuaternion(new jn(...ta.value)),m.setPosition(...Ki.value),console.log(m);for(let h=0;h<$r.value.length;h++){const T=$r.value[h],S=ma.value[h];try{let M=new pe;M.makeRotationFromQuaternion(new jn(...T.rvec)),M.setPosition(...T.tvec);let N=new pe;N.makeRotationFromQuaternion(new jn(...S.rvec)),N.setPosition(...S.tvec);var v=new Ns(.05);v.applyMatrix4(M),i.add(v);var g=new dn(u,f);g.applyMatrix4(m),g.applyMatrix4(M),i.add(g);var p=new Ns(.2);p.applyMatrix4(N),p.applyMatrix4(m),p.applyMatrix4(M),i.add(p)}catch{}}}return Kc(()=>{const m=new ru({canvas:t.value});m.setSize(t.value.width,t.value.height);const v=new Qe(60,t.value.width/t.value.height,.01,10);v.position.set(...e.camPos),v.up.set(0,0,1),v.lookAt(0,0,0);function g(){const h=t.value.clientWidth,T=t.value.clientHeight;m.setSize(h,T,!1),v.aspect=h/T,v.updateProjectionMatrix()}function p(){g(),requestAnimationFrame(p),v.position.applyAxisAngle(c,.001),v.lookAt(0,0,0),m.render(i,v)}p()}),(m,v)=>(fe(),Xe("div",$T,[L("canvas",{ref_key:"threecanvas",ref:t,class:"w-100 flex-fill"},null,512),L("button",{type:"button",class:"btn btn-dark position-absolute top-0 end-0",onClick:d},qT)]))}},KT={class:"bg-dark-subtle border rounded-3 my-2 overflow-hidden flex-fill"},jT={__name:"HECalResultView",setup(n){return(t,e)=>(fe(),Xe("div",KT,[Qt(YT,{camPos:[-1,-1,1],style:{"min-height":"10vh"}})]))}},ZT={class:"container-fluid h-100 bg-secondary-subtle"},JT={class:"offcanvas offcanvas-start bg-secondary-subtle",tabindex:"-1",id:"offcanvasExample"},QT=L("div",{class:"offcanvas-header"},[L("h5",{class:"offcanvas-title display-5",id:"offcanvasExampleLabel"}," CONSTANTS "),L("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas"})],-1),tA={class:"offcanvas-body"},eA={class:"row h-100"},nA={class:"col-8"},iA={class:"d-flex flex-column h-100"},rA={class:"row"},sA={class:"col-6"},oA={class:"col-6 d-flex flex-column"},aA=L("h2",{class:"display-3 text-center"},"HAND-EYE CALIBRATION",-1),lA={class:"row flex-fill"},cA={class:"col-6"},uA={class:"col-6"},fA={class:"col-4"},dA={class:"d-flex flex-column h-100"},hA={class:"d-flex"},pA={__name:"App",setup(n){return(t,e)=>(fe(),Xe("div",ZT,[L("div",JT,[QT,L("div",tA,[Qt(yy),Qt(iT)])]),L("div",eA,[L("div",nA,[L("div",iA,[L("div",rA,[L("div",sA,[Qt(dT),Qt(Ov),Qt(Yy)]),L("div",oA,[aA,Qt(zT)])]),L("div",lA,[L("div",cA,[Qt(ay,{class:"h-100"})]),L("div",uA,[Qt(lT,{class:"h-100"})])])])]),L("div",fA,[L("div",dA,[L("div",hA,[Qt(GT,{class:"flex-fill"}),Qt(WT,{class:"flex-fill"})]),Qt(jT,{class:"flex-fill"}),Qt(xT)])])])]))}};var ze="top",rn="bottom",sn="right",Ve="left",ka="auto",cs=[ze,rn,sn,Ve],ir="start",Zr="end",tm="clippingParents",ou="viewport",wr="popper",em="reference",Cc=cs.reduce(function(n,t){return n.concat([t+"-"+ir,t+"-"+Zr])},[]),au=[].concat(cs,[ka]).reduce(function(n,t){return n.concat([t,t+"-"+ir,t+"-"+Zr])},[]),nm="beforeRead",im="read",rm="afterRead",sm="beforeMain",om="main",am="afterMain",lm="beforeWrite",cm="write",um="afterWrite",fm=[nm,im,rm,sm,om,am,lm,cm,um];function Fn(n){return n?(n.nodeName||"").toLowerCase():null}function on(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function rr(n){var t=on(n).Element;return n instanceof t||n instanceof Element}function hn(n){var t=on(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function lu(n){if(typeof ShadowRoot>"u")return!1;var t=on(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function mA(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var i=t.styles[e]||{},r=t.attributes[e]||{},s=t.elements[e];!hn(s)||!Fn(s)||(Object.assign(s.style,i),Object.keys(r).forEach(function(o){var a=r[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function _A(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(i){var r=t.elements[i],s=t.attributes[i]||{},o=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:e[i]),a=o.reduce(function(l,c){return l[c]="",l},{});!hn(r)||!Fn(r)||(Object.assign(r.style,a),Object.keys(s).forEach(function(l){r.removeAttribute(l)}))})}}const cu={name:"applyStyles",enabled:!0,phase:"write",fn:mA,effect:_A,requires:["computeStyles"]};function On(n){return n.split("-")[0]}var Qi=Math.max,Ma=Math.min,Jr=Math.round;function Rc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function dm(){return!/^((?!chrome|android).)*safari/i.test(Rc())}function Qr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var i=n.getBoundingClientRect(),r=1,s=1;t&&hn(n)&&(r=n.offsetWidth>0&&Jr(i.width)/n.offsetWidth||1,s=n.offsetHeight>0&&Jr(i.height)/n.offsetHeight||1);var o=rr(n)?on(n):window,a=o.visualViewport,l=!dm()&&e,c=(i.left+(l&&a?a.offsetLeft:0))/r,u=(i.top+(l&&a?a.offsetTop:0))/s,f=i.width/r,d=i.height/s;return{width:f,height:d,top:u,right:c+f,bottom:u+d,left:c,x:c,y:u}}function uu(n){var t=Qr(n),e=n.offsetWidth,i=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:i}}function hm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&lu(e)){var i=t;do{if(i&&n.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ti(n){return on(n).getComputedStyle(n)}function gA(n){return["table","td","th"].indexOf(Fn(n))>=0}function Ai(n){return((rr(n)?n.ownerDocument:n.document)||window.document).documentElement}function Wa(n){return Fn(n)==="html"?n:n.assignedSlot||n.parentNode||(lu(n)?n.host:null)||Ai(n)}function zd(n){return!hn(n)||ti(n).position==="fixed"?null:n.offsetParent}function vA(n){var t=/firefox/i.test(Rc()),e=/Trident/i.test(Rc());if(e&&hn(n)){var i=ti(n);if(i.position==="fixed")return null}var r=Wa(n);for(lu(r)&&(r=r.host);hn(r)&&["html","body"].indexOf(Fn(r))<0;){var s=ti(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function js(n){for(var t=on(n),e=zd(n);e&&gA(e)&&ti(e).position==="static";)e=zd(e);return e&&(Fn(e)==="html"||Fn(e)==="body"&&ti(e).position==="static")?t:e||vA(n)||t}function fu(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Is(n,t,e){return Qi(n,Ma(t,e))}function EA(n,t,e){var i=Is(n,t,e);return i>e?e:i}function pm(){return{top:0,right:0,bottom:0,left:0}}function mm(n){return Object.assign({},pm(),n)}function _m(n,t){return t.reduce(function(e,i){return e[i]=n,e},{})}var xA=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,mm(typeof t!="number"?t:_m(t,cs))};function SA(n){var t,e=n.state,i=n.name,r=n.options,s=e.elements.arrow,o=e.modifiersData.popperOffsets,a=On(e.placement),l=fu(a),c=[Ve,sn].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var f=xA(r.padding,e),d=uu(s),m=l==="y"?ze:Ve,v=l==="y"?rn:sn,g=e.rects.reference[u]+e.rects.reference[l]-o[l]-e.rects.popper[u],p=o[l]-e.rects.reference[l],h=js(s),T=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,S=g/2-p/2,M=f[m],N=T-d[u]-f[v],C=T/2-d[u]/2+S,R=Is(M,C,N),J=l;e.modifiersData[i]=(t={},t[J]=R,t.centerOffset=R-C,t)}}function MA(n){var t=n.state,e=n.options,i=e.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||hm(t.elements.popper,r)&&(t.elements.arrow=r))}const gm={name:"arrow",enabled:!0,phase:"main",fn:SA,effect:MA,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ts(n){return n.split("-")[1]}var bA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function yA(n,t){var e=n.x,i=n.y,r=t.devicePixelRatio||1;return{x:Jr(e*r)/r||0,y:Jr(i*r)/r||0}}function Vd(n){var t,e=n.popper,i=n.popperRect,r=n.placement,s=n.variation,o=n.offsets,a=n.position,l=n.gpuAcceleration,c=n.adaptive,u=n.roundOffsets,f=n.isFixed,d=o.x,m=d===void 0?0:d,v=o.y,g=v===void 0?0:v,p=typeof u=="function"?u({x:m,y:g}):{x:m,y:g};m=p.x,g=p.y;var h=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),S=Ve,M=ze,N=window;if(c){var C=js(e),R="clientHeight",J="clientWidth";if(C===on(e)&&(C=Ai(e),ti(C).position!=="static"&&a==="absolute"&&(R="scrollHeight",J="scrollWidth")),C=C,r===ze||(r===Ve||r===sn)&&s===Zr){M=rn;var b=f&&C===N&&N.visualViewport?N.visualViewport.height:C[R];g-=b-i.height,g*=l?1:-1}if(r===Ve||(r===ze||r===rn)&&s===Zr){S=sn;var A=f&&C===N&&N.visualViewport?N.visualViewport.width:C[J];m-=A-i.width,m*=l?1:-1}}var q=Object.assign({position:a},c&&bA),Q=u===!0?yA({x:m,y:g},on(e)):{x:m,y:g};if(m=Q.x,g=Q.y,l){var ct;return Object.assign({},q,(ct={},ct[M]=T?"0":"",ct[S]=h?"0":"",ct.transform=(N.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",ct))}return Object.assign({},q,(t={},t[M]=T?g+"px":"",t[S]=h?m+"px":"",t.transform="",t))}function TA(n){var t=n.state,e=n.options,i=e.gpuAcceleration,r=i===void 0?!0:i,s=e.adaptive,o=s===void 0?!0:s,a=e.roundOffsets,l=a===void 0?!0:a,c={placement:On(t.placement),variation:ts(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vd(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vd(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const du={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:TA,data:{}};var Io={passive:!0};function AA(n){var t=n.state,e=n.instance,i=n.options,r=i.scroll,s=r===void 0?!0:r,o=i.resize,a=o===void 0?!0:o,l=on(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",e.update,Io)}),a&&l.addEventListener("resize",e.update,Io),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",e.update,Io)}),a&&l.removeEventListener("resize",e.update,Io)}}const hu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:AA,data:{}};var wA={left:"right",right:"left",bottom:"top",top:"bottom"};function ra(n){return n.replace(/left|right|bottom|top/g,function(t){return wA[t]})}var CA={start:"end",end:"start"};function Gd(n){return n.replace(/start|end/g,function(t){return CA[t]})}function pu(n){var t=on(n),e=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:e,scrollTop:i}}function mu(n){return Qr(Ai(n)).left+pu(n).scrollLeft}function RA(n,t){var e=on(n),i=Ai(n),r=e.visualViewport,s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;var c=dm();(c||!c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a+mu(n),y:l}}function LA(n){var t,e=Ai(n),i=pu(n),r=(t=n.ownerDocument)==null?void 0:t.body,s=Qi(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Qi(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+mu(n),l=-i.scrollTop;return ti(r||e).direction==="rtl"&&(a+=Qi(e.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function _u(n){var t=ti(n),e=t.overflow,i=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+i)}function vm(n){return["html","body","#document"].indexOf(Fn(n))>=0?n.ownerDocument.body:hn(n)&&_u(n)?n:vm(Wa(n))}function Os(n,t){var e;t===void 0&&(t=[]);var i=vm(n),r=i===((e=n.ownerDocument)==null?void 0:e.body),s=on(i),o=r?[s].concat(s.visualViewport||[],_u(i)?i:[]):i,a=t.concat(o);return r?a:a.concat(Os(Wa(o)))}function Lc(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function PA(n,t){var e=Qr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function kd(n,t,e){return t===ou?Lc(RA(n,e)):rr(t)?PA(t,e):Lc(LA(Ai(n)))}function DA(n){var t=Os(Wa(n)),e=["absolute","fixed"].indexOf(ti(n).position)>=0,i=e&&hn(n)?js(n):n;return rr(i)?t.filter(function(r){return rr(r)&&hm(r,i)&&Fn(r)!=="body"}):[]}function NA(n,t,e,i){var r=t==="clippingParents"?DA(n):[].concat(t),s=[].concat(r,[e]),o=s[0],a=s.reduce(function(l,c){var u=kd(n,c,i);return l.top=Qi(u.top,l.top),l.right=Ma(u.right,l.right),l.bottom=Ma(u.bottom,l.bottom),l.left=Qi(u.left,l.left),l},kd(n,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Em(n){var t=n.reference,e=n.element,i=n.placement,r=i?On(i):null,s=i?ts(i):null,o=t.x+t.width/2-e.width/2,a=t.y+t.height/2-e.height/2,l;switch(r){case ze:l={x:o,y:t.y-e.height};break;case rn:l={x:o,y:t.y+t.height};break;case sn:l={x:t.x+t.width,y:a};break;case Ve:l={x:t.x-e.width,y:a};break;default:l={x:t.x,y:t.y}}var c=r?fu(r):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case ir:l[c]=l[c]-(t[u]/2-e[u]/2);break;case Zr:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function es(n,t){t===void 0&&(t={});var e=t,i=e.placement,r=i===void 0?n.placement:i,s=e.strategy,o=s===void 0?n.strategy:s,a=e.boundary,l=a===void 0?tm:a,c=e.rootBoundary,u=c===void 0?ou:c,f=e.elementContext,d=f===void 0?wr:f,m=e.altBoundary,v=m===void 0?!1:m,g=e.padding,p=g===void 0?0:g,h=mm(typeof p!="number"?p:_m(p,cs)),T=d===wr?em:wr,S=n.rects.popper,M=n.elements[v?T:d],N=NA(rr(M)?M:M.contextElement||Ai(n.elements.popper),l,u,o),C=Qr(n.elements.reference),R=Em({reference:C,element:S,strategy:"absolute",placement:r}),J=Lc(Object.assign({},S,R)),b=d===wr?J:C,A={top:N.top-b.top+h.top,bottom:b.bottom-N.bottom+h.bottom,left:N.left-b.left+h.left,right:b.right-N.right+h.right},q=n.modifiersData.offset;if(d===wr&&q){var Q=q[r];Object.keys(A).forEach(function(ct){var I=[sn,rn].indexOf(ct)>=0?1:-1,W=[ze,rn].indexOf(ct)>=0?"y":"x";A[ct]+=Q[W]*I})}return A}function IA(n,t){t===void 0&&(t={});var e=t,i=e.placement,r=e.boundary,s=e.rootBoundary,o=e.padding,a=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?au:l,u=ts(i),f=u?a?Cc:Cc.filter(function(v){return ts(v)===u}):cs,d=f.filter(function(v){return c.indexOf(v)>=0});d.length===0&&(d=f);var m=d.reduce(function(v,g){return v[g]=es(n,{placement:g,boundary:r,rootBoundary:s,padding:o})[On(g)],v},{});return Object.keys(m).sort(function(v,g){return m[v]-m[g]})}function OA(n){if(On(n)===ka)return[];var t=ra(n);return[Gd(n),t,Gd(t)]}function UA(n){var t=n.state,e=n.options,i=n.name;if(!t.modifiersData[i]._skip){for(var r=e.mainAxis,s=r===void 0?!0:r,o=e.altAxis,a=o===void 0?!0:o,l=e.fallbackPlacements,c=e.padding,u=e.boundary,f=e.rootBoundary,d=e.altBoundary,m=e.flipVariations,v=m===void 0?!0:m,g=e.allowedAutoPlacements,p=t.options.placement,h=On(p),T=h===p,S=l||(T||!v?[ra(p)]:OA(p)),M=[p].concat(S).reduce(function(ot,ht){return ot.concat(On(ht)===ka?IA(t,{placement:ht,boundary:u,rootBoundary:f,padding:c,flipVariations:v,allowedAutoPlacements:g}):ht)},[]),N=t.rects.reference,C=t.rects.popper,R=new Map,J=!0,b=M[0],A=0;A<M.length;A++){var q=M[A],Q=On(q),ct=ts(q)===ir,I=[ze,rn].indexOf(Q)>=0,W=I?"width":"height",G=es(t,{placement:q,boundary:u,rootBoundary:f,altBoundary:d,padding:c}),K=I?ct?sn:Ve:ct?rn:ze;N[W]>C[W]&&(K=ra(K));var Y=ra(K),tt=[];if(s&&tt.push(G[Q]<=0),a&&tt.push(G[K]<=0,G[Y]<=0),tt.every(function(ot){return ot})){b=q,J=!1;break}R.set(q,tt)}if(J)for(var rt=v?3:1,ft=function(ht){var xt=M.find(function(Mt){var wt=R.get(Mt);if(wt)return wt.slice(0,ht).every(function(Rt){return Rt})});if(xt)return b=xt,"break"},ut=rt;ut>0;ut--){var Z=ft(ut);if(Z==="break")break}t.placement!==b&&(t.modifiersData[i]._skip=!0,t.placement=b,t.reset=!0)}}const xm={name:"flip",enabled:!0,phase:"main",fn:UA,requiresIfExists:["offset"],data:{_skip:!1}};function Wd(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function $d(n){return[ze,sn,rn,Ve].some(function(t){return n[t]>=0})}function FA(n){var t=n.state,e=n.name,i=t.rects.reference,r=t.rects.popper,s=t.modifiersData.preventOverflow,o=es(t,{elementContext:"reference"}),a=es(t,{altBoundary:!0}),l=Wd(o,i),c=Wd(a,r,s),u=$d(l),f=$d(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Sm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:FA};function BA(n,t,e){var i=On(n),r=[Ve,ze].indexOf(i)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,o=s[0],a=s[1];return o=o||0,a=(a||0)*r,[Ve,sn].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}function HA(n){var t=n.state,e=n.options,i=n.name,r=e.offset,s=r===void 0?[0,0]:r,o=au.reduce(function(u,f){return u[f]=BA(f,t.rects,s),u},{}),a=o[t.placement],l=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=o}const Mm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:HA};function zA(n){var t=n.state,e=n.name;t.modifiersData[e]=Em({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const gu={name:"popperOffsets",enabled:!0,phase:"read",fn:zA,data:{}};function VA(n){return n==="x"?"y":"x"}function GA(n){var t=n.state,e=n.options,i=n.name,r=e.mainAxis,s=r===void 0?!0:r,o=e.altAxis,a=o===void 0?!1:o,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,f=e.padding,d=e.tether,m=d===void 0?!0:d,v=e.tetherOffset,g=v===void 0?0:v,p=es(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),h=On(t.placement),T=ts(t.placement),S=!T,M=fu(h),N=VA(M),C=t.modifiersData.popperOffsets,R=t.rects.reference,J=t.rects.popper,b=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,A=typeof b=="number"?{mainAxis:b,altAxis:b}:Object.assign({mainAxis:0,altAxis:0},b),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Q={x:0,y:0};if(C){if(s){var ct,I=M==="y"?ze:Ve,W=M==="y"?rn:sn,G=M==="y"?"height":"width",K=C[M],Y=K+p[I],tt=K-p[W],rt=m?-J[G]/2:0,ft=T===ir?R[G]:J[G],ut=T===ir?-J[G]:-R[G],Z=t.elements.arrow,ot=m&&Z?uu(Z):{width:0,height:0},ht=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pm(),xt=ht[I],Mt=ht[W],wt=Is(0,R[G],ot[G]),Rt=S?R[G]/2-rt-wt-xt-A.mainAxis:ft-wt-xt-A.mainAxis,Ct=S?-R[G]/2+rt+wt+Mt+A.mainAxis:ut+wt+Mt+A.mainAxis,Ht=t.elements.arrow&&js(t.elements.arrow),E=Ht?M==="y"?Ht.clientTop||0:Ht.clientLeft||0:0,P=(ct=q==null?void 0:q[M])!=null?ct:0,O=K+Rt-P-E,k=K+Ct-P,F=Is(m?Ma(Y,O):Y,K,m?Qi(tt,k):tt);C[M]=F,Q[M]=F-K}if(a){var it,et=M==="x"?ze:Ve,x=M==="x"?rn:sn,_=C[N],w=N==="y"?"height":"width",z=_+p[et],B=_-p[x],V=[ze,Ve].indexOf(h)!==-1,at=(it=q==null?void 0:q[N])!=null?it:0,nt=V?z:_-R[w]-J[w]-at+A.altAxis,dt=V?_+R[w]+J[w]-at-A.altAxis:B,pt=m&&V?EA(nt,_,dt):Is(m?nt:z,_,m?dt:B);C[N]=pt,Q[N]=pt-_}t.modifiersData[i]=Q}}const bm={name:"preventOverflow",enabled:!0,phase:"main",fn:GA,requiresIfExists:["offset"]};function kA(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function WA(n){return n===on(n)||!hn(n)?pu(n):kA(n)}function $A(n){var t=n.getBoundingClientRect(),e=Jr(t.width)/n.offsetWidth||1,i=Jr(t.height)/n.offsetHeight||1;return e!==1||i!==1}function XA(n,t,e){e===void 0&&(e=!1);var i=hn(t),r=hn(t)&&$A(t),s=Ai(t),o=Qr(n,r,e),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&((Fn(t)!=="body"||_u(s))&&(a=WA(t)),hn(t)?(l=Qr(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=mu(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function qA(n){var t=new Map,e=new Set,i=[];n.forEach(function(s){t.set(s.name,s)});function r(s){e.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!e.has(a)){var l=t.get(a);l&&r(l)}}),i.push(s)}return n.forEach(function(s){e.has(s.name)||r(s)}),i}function YA(n){var t=qA(n);return fm.reduce(function(e,i){return e.concat(t.filter(function(r){return r.phase===i}))},[])}function KA(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function jA(n){var t=n.reduce(function(e,i){var r=e[i.name];return e[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,e},{});return Object.keys(t).map(function(e){return t[e]})}var Xd={placement:"bottom",modifiers:[],strategy:"absolute"};function qd(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function $a(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,i=e===void 0?[]:e,r=t.defaultOptions,s=r===void 0?Xd:r;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xd,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],d=!1,m={state:u,setOptions:function(h){var T=typeof h=="function"?h(u.options):h;g(),u.options=Object.assign({},s,u.options,T),u.scrollParents={reference:rr(a)?Os(a):a.contextElement?Os(a.contextElement):[],popper:Os(l)};var S=YA(jA([].concat(i,u.options.modifiers)));return u.orderedModifiers=S.filter(function(M){return M.enabled}),v(),m.update()},forceUpdate:function(){if(!d){var h=u.elements,T=h.reference,S=h.popper;if(qd(T,S)){u.rects={reference:XA(T,js(S),u.options.strategy==="fixed"),popper:uu(S)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(A){return u.modifiersData[A.name]=Object.assign({},A.data)});for(var M=0;M<u.orderedModifiers.length;M++){if(u.reset===!0){u.reset=!1,M=-1;continue}var N=u.orderedModifiers[M],C=N.fn,R=N.options,J=R===void 0?{}:R,b=N.name;typeof C=="function"&&(u=C({state:u,options:J,name:b,instance:m})||u)}}}},update:KA(function(){return new Promise(function(p){m.forceUpdate(),p(u)})}),destroy:function(){g(),d=!0}};if(!qd(a,l))return m;m.setOptions(c).then(function(p){!d&&c.onFirstUpdate&&c.onFirstUpdate(p)});function v(){u.orderedModifiers.forEach(function(p){var h=p.name,T=p.options,S=T===void 0?{}:T,M=p.effect;if(typeof M=="function"){var N=M({state:u,name:h,instance:m,options:S}),C=function(){};f.push(N||C)}})}function g(){f.forEach(function(p){return p()}),f=[]}return m}}var ZA=$a(),JA=[hu,gu,du,cu],QA=$a({defaultModifiers:JA}),tw=[hu,gu,du,cu,Mm,xm,bm,gm,Sm],vu=$a({defaultModifiers:tw});const ym=Object.freeze(Object.defineProperty({__proto__:null,afterMain:am,afterRead:rm,afterWrite:um,applyStyles:cu,arrow:gm,auto:ka,basePlacements:cs,beforeMain:sm,beforeRead:nm,beforeWrite:lm,bottom:rn,clippingParents:tm,computeStyles:du,createPopper:vu,createPopperBase:ZA,createPopperLite:QA,detectOverflow:es,end:Zr,eventListeners:hu,flip:xm,hide:Sm,left:Ve,main:om,modifierPhases:fm,offset:Mm,placements:au,popper:wr,popperGenerator:$a,popperOffsets:gu,preventOverflow:bm,read:im,reference:em,right:sn,start:ir,top:ze,variationPlacements:Cc,viewport:ou,write:cm},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ui=new Map,Wl={set(n,t,e){ui.has(n)||ui.set(n,new Map);const i=ui.get(n);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,e)},get(n,t){return ui.has(n)&&ui.get(n).get(t)||null},remove(n,t){if(!ui.has(n))return;const e=ui.get(n);e.delete(t),e.size===0&&ui.delete(n)}},ew=1e6,nw=1e3,Pc="transitionend",Tm=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),iw=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),rw=n=>{do n+=Math.floor(Math.random()*ew);while(document.getElementById(n));return n},sw=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const i=Number.parseFloat(t),r=Number.parseFloat(e);return!i&&!r?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*nw)},Am=n=>{n.dispatchEvent(new Event(Pc))},Zn=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),Mi=n=>Zn(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Tm(n)):null,us=n=>{if(!Zn(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const i=n.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return t},bi=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",wm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?wm(n.parentNode):null},ba=()=>{},Zs=n=>{n.offsetHeight},Cm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$l=[],ow=n=>{document.readyState==="loading"?($l.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of $l)t()}),$l.push(n)):n()},pn=()=>document.documentElement.dir==="rtl",_n=n=>{ow(()=>{const t=Cm();if(t){const e=n.NAME,i=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=i,n.jQueryInterface)}})},$e=(n,t=[],e=n)=>typeof n=="function"?n(...t):e,Rm=(n,t,e=!0)=>{if(!e){$e(n);return}const i=5,r=sw(t)+i;let s=!1;const o=({target:a})=>{a===t&&(s=!0,t.removeEventListener(Pc,o),$e(n))};t.addEventListener(Pc,o),setTimeout(()=>{s||Am(t)},r)},Eu=(n,t,e,i)=>{const r=n.length;let s=n.indexOf(t);return s===-1?!e&&i?n[r-1]:n[0]:(s+=e?1:-1,i&&(s=(s+r)%r),n[Math.max(0,Math.min(s,r-1))])},aw=/[^.]*(?=\..*)\.|.*/,lw=/\..*/,cw=/::\d+$/,Xl={};let Yd=1;const Lm={mouseenter:"mouseover",mouseleave:"mouseout"},uw=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Pm(n,t){return t&&`${t}::${Yd++}`||n.uidEvent||Yd++}function Dm(n){const t=Pm(n);return n.uidEvent=t,Xl[t]=Xl[t]||{},Xl[t]}function fw(n,t){return function e(i){return xu(i,{delegateTarget:n}),e.oneOff&&lt.off(n,i.type,t),t.apply(n,[i])}}function dw(n,t,e){return function i(r){const s=n.querySelectorAll(t);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const a of s)if(a===o)return xu(r,{delegateTarget:o}),i.oneOff&&lt.off(n,r.type,t,e),e.apply(o,[r])}}function Nm(n,t,e=null){return Object.values(n).find(i=>i.callable===t&&i.delegationSelector===e)}function Im(n,t,e){const i=typeof t=="string",r=i?e:t||e;let s=Om(n);return uw.has(s)||(s=n),[i,r,s]}function Kd(n,t,e,i,r){if(typeof t!="string"||!n)return;let[s,o,a]=Im(t,e,i);t in Lm&&(o=(v=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return v.call(this,g)})(o));const l=Dm(n),c=l[a]||(l[a]={}),u=Nm(c,o,s?e:null);if(u){u.oneOff=u.oneOff&&r;return}const f=Pm(o,t.replace(aw,"")),d=s?dw(n,e,o):fw(n,o);d.delegationSelector=s?e:null,d.callable=o,d.oneOff=r,d.uidEvent=f,c[f]=d,n.addEventListener(a,d,s)}function Dc(n,t,e,i,r){const s=Nm(t[e],i,r);s&&(n.removeEventListener(e,s,!!r),delete t[e][s.uidEvent])}function hw(n,t,e,i){const r=t[e]||{};for(const[s,o]of Object.entries(r))s.includes(i)&&Dc(n,t,e,o.callable,o.delegationSelector)}function Om(n){return n=n.replace(lw,""),Lm[n]||n}const lt={on(n,t,e,i){Kd(n,t,e,i,!1)},one(n,t,e,i){Kd(n,t,e,i,!0)},off(n,t,e,i){if(typeof t!="string"||!n)return;const[r,s,o]=Im(t,e,i),a=o!==t,l=Dm(n),c=l[o]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;Dc(n,l,o,s,r?e:null);return}if(u)for(const f of Object.keys(l))hw(n,l,f,t.slice(1));for(const[f,d]of Object.entries(c)){const m=f.replace(cw,"");(!a||t.includes(m))&&Dc(n,l,o,d.callable,d.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const i=Cm(),r=Om(t),s=t!==r;let o=null,a=!0,l=!0,c=!1;s&&i&&(o=i.Event(t,e),i(n).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=xu(new Event(t,{bubbles:a,cancelable:!0}),e);return c&&u.preventDefault(),l&&n.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function xu(n,t={}){for(const[e,i]of Object.entries(t))try{n[e]=i}catch{Object.defineProperty(n,e,{configurable:!0,get(){return i}})}return n}function jd(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function ql(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Jn={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${ql(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${ql(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=jd(n.dataset[i])}return t},getDataAttribute(n,t){return jd(n.getAttribute(`data-bs-${ql(t)}`))}};class Js{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=Zn(e)?Jn.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...Zn(e)?Jn.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[i,r]of Object.entries(e)){const s=t[i],o=Zn(s)?"element":iw(s);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)}}}const pw="5.3.2";class wn extends Js{constructor(t,e){super(),t=Mi(t),t&&(this._element=t,this._config=this._getConfig(e),Wl.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Wl.remove(this._element,this.constructor.DATA_KEY),lt.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){Rm(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Wl.get(Mi(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return pw}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Yl=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?Tm(e.trim()):null}return t},At={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let i=n.parentNode.closest(t);for(;i;)e.push(i),i=i.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!bi(e)&&us(e))},getSelectorFromElement(n){const t=Yl(n);return t&&At.findOne(t)?t:null},getElementFromSelector(n){const t=Yl(n);return t?At.findOne(t):null},getMultipleElementsFromSelector(n){const t=Yl(n);return t?At.find(t):[]}},Xa=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,i=n.NAME;lt.on(document,e,`[data-bs-dismiss="${i}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),bi(this))return;const s=At.getElementFromSelector(this)||this.closest(`.${i}`);n.getOrCreateInstance(s)[t]()})},mw="alert",_w="bs.alert",Um=`.${_w}`,gw=`close${Um}`,vw=`closed${Um}`,Ew="fade",xw="show";class qa extends wn{static get NAME(){return mw}close(){if(lt.trigger(this._element,gw).defaultPrevented)return;this._element.classList.remove(xw);const e=this._element.classList.contains(Ew);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),lt.trigger(this._element,vw),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=qa.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Xa(qa,"close");_n(qa);const Sw="button",Mw="bs.button",bw=`.${Mw}`,yw=".data-api",Tw="active",Zd='[data-bs-toggle="button"]',Aw=`click${bw}${yw}`;class Ya extends wn{static get NAME(){return Sw}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Tw))}static jQueryInterface(t){return this.each(function(){const e=Ya.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}lt.on(document,Aw,Zd,n=>{n.preventDefault();const t=n.target.closest(Zd);Ya.getOrCreateInstance(t).toggle()});_n(Ya);const ww="swipe",fs=".bs.swipe",Cw=`touchstart${fs}`,Rw=`touchmove${fs}`,Lw=`touchend${fs}`,Pw=`pointerdown${fs}`,Dw=`pointerup${fs}`,Nw="touch",Iw="pen",Ow="pointer-event",Uw=40,Fw={endCallback:null,leftCallback:null,rightCallback:null},Bw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ya extends Js{constructor(t,e){super(),this._element=t,!(!t||!ya.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Fw}static get DefaultType(){return Bw}static get NAME(){return ww}dispose(){lt.off(this._element,fs)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),$e(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Uw)return;const e=t/this._deltaX;this._deltaX=0,e&&$e(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(lt.on(this._element,Pw,t=>this._start(t)),lt.on(this._element,Dw,t=>this._end(t)),this._element.classList.add(Ow)):(lt.on(this._element,Cw,t=>this._start(t)),lt.on(this._element,Rw,t=>this._move(t)),lt.on(this._element,Lw,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Iw||t.pointerType===Nw)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Hw="carousel",zw="bs.carousel",wi=`.${zw}`,Fm=".data-api",Vw="ArrowLeft",Gw="ArrowRight",kw=500,xs="next",Tr="prev",Cr="left",sa="right",Ww=`slide${wi}`,Kl=`slid${wi}`,$w=`keydown${wi}`,Xw=`mouseenter${wi}`,qw=`mouseleave${wi}`,Yw=`dragstart${wi}`,Kw=`load${wi}${Fm}`,jw=`click${wi}${Fm}`,Bm="carousel",Oo="active",Zw="slide",Jw="carousel-item-end",Qw="carousel-item-start",tC="carousel-item-next",eC="carousel-item-prev",Hm=".active",zm=".carousel-item",nC=Hm+zm,iC=".carousel-item img",rC=".carousel-indicators",sC="[data-bs-slide], [data-bs-slide-to]",oC='[data-bs-ride="carousel"]',aC={[Vw]:sa,[Gw]:Cr},lC={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},cC={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Qs extends wn{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=At.findOne(rC,this._element),this._addEventListeners(),this._config.ride===Bm&&this.cycle()}static get Default(){return lC}static get DefaultType(){return cC}static get NAME(){return Hw}next(){this._slide(xs)}nextWhenVisible(){!document.hidden&&us(this._element)&&this.next()}prev(){this._slide(Tr)}pause(){this._isSliding&&Am(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){lt.one(this._element,Kl,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){lt.one(this._element,Kl,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const r=t>i?xs:Tr;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&lt.on(this._element,$w,t=>this._keydown(t)),this._config.pause==="hover"&&(lt.on(this._element,Xw,()=>this.pause()),lt.on(this._element,qw,()=>this._maybeEnableCycle())),this._config.touch&&ya.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of At.find(iC,this._element))lt.on(i,Yw,r=>r.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(Cr)),rightCallback:()=>this._slide(this._directionToOrder(sa)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),kw+this._config.interval))}};this._swipeHelper=new ya(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=aC[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=At.findOne(Hm,this._indicatorsElement);e.classList.remove(Oo),e.removeAttribute("aria-current");const i=At.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Oo),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),r=t===xs,s=e||Eu(this._getItems(),i,r,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),a=m=>lt.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(a(Ww).defaultPrevented||!i||!s)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const u=r?Qw:Jw,f=r?tC:eC;s.classList.add(f),Zs(s),i.classList.add(u),s.classList.add(u);const d=()=>{s.classList.remove(u,f),s.classList.add(Oo),i.classList.remove(Oo,f,u),this._isSliding=!1,a(Kl)};this._queueCallback(d,i,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Zw)}_getActive(){return At.findOne(nC,this._element)}_getItems(){return At.find(zm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return pn()?t===Cr?Tr:xs:t===Cr?xs:Tr}_orderToDirection(t){return pn()?t===Tr?Cr:sa:t===Tr?sa:Cr}static jQueryInterface(t){return this.each(function(){const e=Qs.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}lt.on(document,jw,sC,function(n){const t=At.getElementFromSelector(this);if(!t||!t.classList.contains(Bm))return;n.preventDefault();const e=Qs.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(Jn.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});lt.on(window,Kw,()=>{const n=At.find(oC);for(const t of n)Qs.getOrCreateInstance(t)});_n(Qs);const uC="collapse",fC="bs.collapse",to=`.${fC}`,dC=".data-api",hC=`show${to}`,pC=`shown${to}`,mC=`hide${to}`,_C=`hidden${to}`,gC=`click${to}${dC}`,jl="show",Dr="collapse",Uo="collapsing",vC="collapsed",EC=`:scope .${Dr} .${Dr}`,xC="collapse-horizontal",SC="width",MC="height",bC=".collapse.show, .collapse.collapsing",Nc='[data-bs-toggle="collapse"]',yC={parent:null,toggle:!0},TC={parent:"(null|element)",toggle:"boolean"};class Ws extends wn{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=At.find(Nc);for(const r of i){const s=At.getSelectorFromElement(r),o=At.find(s).filter(a=>a===this._element);s!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return yC}static get DefaultType(){return TC}static get NAME(){return uC}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(bC).filter(a=>a!==this._element).map(a=>Ws.getOrCreateInstance(a,{toggle:!1}))),t.length&&t[0]._isTransitioning||lt.trigger(this._element,hC).defaultPrevented)return;for(const a of t)a.hide();const i=this._getDimension();this._element.classList.remove(Dr),this._element.classList.add(Uo),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Uo),this._element.classList.add(Dr,jl),this._element.style[i]="",lt.trigger(this._element,pC)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||lt.trigger(this._element,mC).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Zs(this._element),this._element.classList.add(Uo),this._element.classList.remove(Dr,jl);for(const r of this._triggerArray){const s=At.getElementFromSelector(r);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Uo),this._element.classList.add(Dr),lt.trigger(this._element,_C)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(t=this._element){return t.classList.contains(jl)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=Mi(t.parent),t}_getDimension(){return this._element.classList.contains(xC)?SC:MC}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Nc);for(const e of t){const i=At.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(t){const e=At.find(EC,this._config.parent);return At.find(t,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle(vC,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const i=Ws.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t]()}})}}lt.on(document,gC,Nc,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of At.getMultipleElementsFromSelector(this))Ws.getOrCreateInstance(t,{toggle:!1}).toggle()});_n(Ws);const Jd="dropdown",AC="bs.dropdown",or=`.${AC}`,Su=".data-api",wC="Escape",Qd="Tab",CC="ArrowUp",th="ArrowDown",RC=2,LC=`hide${or}`,PC=`hidden${or}`,DC=`show${or}`,NC=`shown${or}`,Vm=`click${or}${Su}`,Gm=`keydown${or}${Su}`,IC=`keyup${or}${Su}`,Rr="show",OC="dropup",UC="dropend",FC="dropstart",BC="dropup-center",HC="dropdown-center",$i='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',zC=`${$i}.${Rr}`,oa=".dropdown-menu",VC=".navbar",GC=".navbar-nav",kC=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",WC=pn()?"top-end":"top-start",$C=pn()?"top-start":"top-end",XC=pn()?"bottom-end":"bottom-start",qC=pn()?"bottom-start":"bottom-end",YC=pn()?"left-start":"right-start",KC=pn()?"right-start":"left-start",jC="top",ZC="bottom",JC={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},QC={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Un extends wn{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=At.next(this._element,oa)[0]||At.prev(this._element,oa)[0]||At.findOne(oa,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return JC}static get DefaultType(){return QC}static get NAME(){return Jd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(bi(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!lt.trigger(this._element,DC,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(GC))for(const i of[].concat(...document.body.children))lt.on(i,"mouseover",ba);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Rr),this._element.classList.add(Rr),lt.trigger(this._element,NC,t)}}hide(){if(bi(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!lt.trigger(this._element,LC,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))lt.off(i,"mouseover",ba);this._popper&&this._popper.destroy(),this._menu.classList.remove(Rr),this._element.classList.remove(Rr),this._element.setAttribute("aria-expanded","false"),Jn.removeDataAttribute(this._menu,"popper"),lt.trigger(this._element,PC,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Zn(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Jd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof ym>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:Zn(this._config.reference)?t=Mi(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=vu(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Rr)}_getPlacement(){const t=this._parent;if(t.classList.contains(UC))return YC;if(t.classList.contains(FC))return KC;if(t.classList.contains(BC))return jC;if(t.classList.contains(HC))return ZC;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(OC)?e?$C:WC:e?qC:XC}_detectNavbar(){return this._element.closest(VC)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Jn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...$e(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:e}){const i=At.find(kC,this._menu).filter(r=>us(r));i.length&&Eu(i,e,t===th,!i.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Un.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===RC||t.type==="keyup"&&t.key!==Qd)return;const e=At.find(zC);for(const i of e){const r=Un.getInstance(i);if(!r||r._config.autoClose===!1)continue;const s=t.composedPath(),o=s.includes(r._menu);if(s.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Qd||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const a={relatedTarget:r._element};t.type==="click"&&(a.clickEvent=t),r._completeHide(a)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i=t.key===wC,r=[CC,th].includes(t.key);if(!r&&!i||e&&!i)return;t.preventDefault();const s=this.matches($i)?this:At.prev(this,$i)[0]||At.next(this,$i)[0]||At.findOne($i,t.delegateTarget.parentNode),o=Un.getOrCreateInstance(s);if(r){t.stopPropagation(),o.show(),o._selectMenuItem(t);return}o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}lt.on(document,Gm,$i,Un.dataApiKeydownHandler);lt.on(document,Gm,oa,Un.dataApiKeydownHandler);lt.on(document,Vm,Un.clearMenus);lt.on(document,IC,Un.clearMenus);lt.on(document,Vm,$i,function(n){n.preventDefault(),Un.getOrCreateInstance(this).toggle()});_n(Un);const km="backdrop",tR="fade",eh="show",nh=`mousedown.bs.${km}`,eR={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},nR={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wm extends Js{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return eR}static get DefaultType(){return nR}static get NAME(){return km}show(t){if(!this._config.isVisible){$e(t);return}this._append();const e=this._getElement();this._config.isAnimated&&Zs(e),e.classList.add(eh),this._emulateAnimation(()=>{$e(t)})}hide(t){if(!this._config.isVisible){$e(t);return}this._getElement().classList.remove(eh),this._emulateAnimation(()=>{this.dispose(),$e(t)})}dispose(){this._isAppended&&(lt.off(this._element,nh),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(tR),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Mi(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),lt.on(t,nh,()=>{$e(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Rm(t,this._getElement(),this._config.isAnimated)}}const iR="focustrap",rR="bs.focustrap",Ta=`.${rR}`,sR=`focusin${Ta}`,oR=`keydown.tab${Ta}`,aR="Tab",lR="forward",ih="backward",cR={autofocus:!0,trapElement:null},uR={autofocus:"boolean",trapElement:"element"};class $m extends Js{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return cR}static get DefaultType(){return uR}static get NAME(){return iR}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),lt.off(document,Ta),lt.on(document,sR,t=>this._handleFocusin(t)),lt.on(document,oR,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,lt.off(document,Ta))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=At.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===ih?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===aR&&(this._lastTabNavDirection=t.shiftKey?ih:lR)}}const rh=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",sh=".sticky-top",Fo="padding-right",oh="margin-right";class Ic{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Fo,e=>e+t),this._setElementAttributes(rh,Fo,e=>e+t),this._setElementAttributes(sh,oh,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Fo),this._resetElementAttributes(rh,Fo),this._resetElementAttributes(sh,oh)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const r=this.getWidth(),s=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,e);const a=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&Jn.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=r=>{const s=Jn.getDataAttribute(r,e);if(s===null){r.style.removeProperty(e);return}Jn.removeDataAttribute(r,e),r.style.setProperty(e,s)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(Zn(t)){e(t);return}for(const i of At.find(t,this._element))e(i)}}const fR="modal",dR="bs.modal",mn=`.${dR}`,hR=".data-api",pR="Escape",mR=`hide${mn}`,_R=`hidePrevented${mn}`,Xm=`hidden${mn}`,qm=`show${mn}`,gR=`shown${mn}`,vR=`resize${mn}`,ER=`click.dismiss${mn}`,xR=`mousedown.dismiss${mn}`,SR=`keydown.dismiss${mn}`,MR=`click${mn}${hR}`,ah="modal-open",bR="fade",lh="show",Zl="modal-static",yR=".modal.show",TR=".modal-dialog",AR=".modal-body",wR='[data-bs-toggle="modal"]',CR={backdrop:!0,focus:!0,keyboard:!0},RR={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ns extends wn{constructor(t,e){super(t,e),this._dialog=At.findOne(TR,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ic,this._addEventListeners()}static get Default(){return CR}static get DefaultType(){return RR}static get NAME(){return fR}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||lt.trigger(this._element,qm,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ah),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||lt.trigger(this._element,mR).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(lh),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){lt.off(window,mn),lt.off(this._dialog,mn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $m({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=At.findOne(AR,this._dialog);e&&(e.scrollTop=0),Zs(this._element),this._element.classList.add(lh);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,lt.trigger(this._element,gR,{relatedTarget:t})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){lt.on(this._element,SR,t=>{if(t.key===pR){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),lt.on(window,vR,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),lt.on(this._element,xR,t=>{lt.one(this._element,ER,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ah),this._resetAdjustments(),this._scrollBar.reset(),lt.trigger(this._element,Xm)})}_isAnimated(){return this._element.classList.contains(bR)}_triggerBackdropTransition(){if(lt.trigger(this._element,_R).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(Zl)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Zl),this._queueCallback(()=>{this._element.classList.remove(Zl),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const r=pn()?"paddingLeft":"paddingRight";this._element.style[r]=`${e}px`}if(!i&&t){const r=pn()?"paddingRight":"paddingLeft";this._element.style[r]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const i=ns.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof i[t]>"u")throw new TypeError(`No method named "${t}"`);i[t](e)}})}}lt.on(document,MR,wR,function(n){const t=At.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),lt.one(t,qm,r=>{r.defaultPrevented||lt.one(t,Xm,()=>{us(this)&&this.focus()})});const e=At.findOne(yR);e&&ns.getInstance(e).hide(),ns.getOrCreateInstance(t).toggle(this)});Xa(ns);_n(ns);const LR="offcanvas",PR="bs.offcanvas",ii=`.${PR}`,Ym=".data-api",DR=`load${ii}${Ym}`,NR="Escape",ch="show",uh="showing",fh="hiding",IR="offcanvas-backdrop",Km=".offcanvas.show",OR=`show${ii}`,UR=`shown${ii}`,FR=`hide${ii}`,dh=`hidePrevented${ii}`,jm=`hidden${ii}`,BR=`resize${ii}`,HR=`click${ii}${Ym}`,zR=`keydown.dismiss${ii}`,VR='[data-bs-toggle="offcanvas"]',GR={backdrop:!0,keyboard:!0,scroll:!1},kR={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class yi extends wn{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return GR}static get DefaultType(){return kR}static get NAME(){return LR}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||lt.trigger(this._element,OR,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ic().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(uh);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ch),this._element.classList.remove(uh),lt.trigger(this._element,UR,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||lt.trigger(this._element,FR).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(fh),this._backdrop.hide();const e=()=>{this._element.classList.remove(ch,fh),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ic().reset(),lt.trigger(this._element,jm)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){lt.trigger(this._element,dh);return}this.hide()},e=!!this._config.backdrop;return new Wm({className:IR,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new $m({trapElement:this._element})}_addEventListeners(){lt.on(this._element,zR,t=>{if(t.key===NR){if(this._config.keyboard){this.hide();return}lt.trigger(this._element,dh)}})}static jQueryInterface(t){return this.each(function(){const e=yi.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}lt.on(document,HR,VR,function(n){const t=At.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),bi(this))return;lt.one(t,jm,()=>{us(this)&&this.focus()});const e=At.findOne(Km);e&&e!==t&&yi.getInstance(e).hide(),yi.getOrCreateInstance(t).toggle(this)});lt.on(window,DR,()=>{for(const n of At.find(Km))yi.getOrCreateInstance(n).show()});lt.on(window,BR,()=>{for(const n of At.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&yi.getOrCreateInstance(n).hide()});Xa(yi);_n(yi);const WR=/^aria-[\w-]*$/i,Zm={"*":["class","dir","id","lang","role",WR],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$R=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),XR=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,qR=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?$R.has(e)?!!XR.test(n.nodeValue):!0:t.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function YR(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const r=new window.DOMParser().parseFromString(n,"text/html"),s=[].concat(...r.body.querySelectorAll("*"));for(const o of s){const a=o.nodeName.toLowerCase();if(!Object.keys(t).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(t["*"]||[],t[a]||[]);for(const u of l)qR(u,c)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const KR="TemplateFactory",jR={allowList:Zm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ZR={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},JR={entry:"(string|element|function|null)",selector:"(string|element)"};class QR extends Js{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return jR}static get DefaultType(){return ZR}static get NAME(){return KR}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,s]of Object.entries(this._config.content))this._setContent(t,s,r);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},JR)}_setContent(t,e,i){const r=At.findOne(i,t);if(r){if(e=this._resolvePossibleFunction(e),!e){r.remove();return}if(Zn(e)){this._putElementInTemplate(Mi(e),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(e);return}r.textContent=e}}_maybeSanitize(t){return this._config.sanitize?YR(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return $e(t,[this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const t1="tooltip",e1=new Set(["sanitize","allowList","sanitizeFn"]),Jl="fade",n1="modal",Bo="show",i1=".tooltip-inner",hh=`.${n1}`,ph="hide.bs.modal",Ss="hover",Ql="focus",r1="click",s1="manual",o1="hide",a1="hidden",l1="show",c1="shown",u1="inserted",f1="click",d1="focusin",h1="focusout",p1="mouseenter",m1="mouseleave",_1={AUTO:"auto",TOP:"top",RIGHT:pn()?"left":"right",BOTTOM:"bottom",LEFT:pn()?"right":"left"},g1={allowList:Zm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},v1={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ds extends wn{constructor(t,e){if(typeof ym>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return g1}static get DefaultType(){return v1}static get NAME(){return t1}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),lt.off(this._element.closest(hh),ph,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=lt.trigger(this._element,this.constructor.eventName(l1)),i=(wm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!i)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(r),lt.trigger(this._element,this.constructor.eventName(u1))),this._popper=this._createPopper(r),r.classList.add(Bo),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))lt.on(a,"mouseover",ba);const o=()=>{lt.trigger(this._element,this.constructor.eventName(c1)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||lt.trigger(this._element,this.constructor.eventName(o1)).defaultPrevented)return;if(this._getTipElement().classList.remove(Bo),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))lt.off(r,"mouseover",ba);this._activeTrigger[r1]=!1,this._activeTrigger[Ql]=!1,this._activeTrigger[Ss]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),lt.trigger(this._element,this.constructor.eventName(a1)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Jl,Bo),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=rw(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Jl),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new QR({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[i1]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Jl)}_isShown(){return this.tip&&this.tip.classList.contains(Bo)}_createPopper(t){const e=$e(this._config.placement,[this,t,this._element]),i=_1[e.toUpperCase()];return vu(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return $e(t,[this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...$e(this._config.popperConfig,[e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")lt.on(this._element,this.constructor.eventName(f1),this._config.selector,i=>{this._initializeOnDelegatedTarget(i).toggle()});else if(e!==s1){const i=e===Ss?this.constructor.eventName(p1):this.constructor.eventName(d1),r=e===Ss?this.constructor.eventName(m1):this.constructor.eventName(h1);lt.on(this._element,i,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusin"?Ql:Ss]=!0,o._enter()}),lt.on(this._element,r,this._config.selector,s=>{const o=this._initializeOnDelegatedTarget(s);o._activeTrigger[s.type==="focusout"?Ql:Ss]=o._element.contains(s.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},lt.on(this._element.closest(hh),ph,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Jn.getDataAttributes(this._element);for(const i of Object.keys(e))e1.has(i)&&delete e[i];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Mi(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=ds.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}_n(ds);const E1="popover",x1=".popover-header",S1=".popover-body",M1={...ds.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},b1={...ds.DefaultType,content:"(null|string|element|function)"};class Mu extends ds{static get Default(){return M1}static get DefaultType(){return b1}static get NAME(){return E1}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[x1]:this._getTitle(),[S1]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Mu.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}_n(Mu);const y1="scrollspy",T1="bs.scrollspy",bu=`.${T1}`,A1=".data-api",w1=`activate${bu}`,mh=`click${bu}`,C1=`load${bu}${A1}`,R1="dropdown-item",Ar="active",L1='[data-bs-spy="scroll"]',tc="[href]",P1=".nav, .list-group",_h=".nav-link",D1=".nav-item",N1=".list-group-item",I1=`${_h}, ${D1} > ${_h}, ${N1}`,O1=".dropdown",U1=".dropdown-toggle",F1={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},B1={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ka extends wn{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return F1}static get DefaultType(){return B1}static get NAME(){return y1}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Mi(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(lt.off(this._config.target,mh),lt.on(this._config.target,mh,tc,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:r,behavior:"smooth"});return}i.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},r=(this._rootElement||document.documentElement).scrollTop,s=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&a){if(i(o),!r)return;continue}!s&&!a&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=At.find(tc,this._config.target);for(const e of t){if(!e.hash||bi(e))continue;const i=At.findOne(decodeURI(e.hash),this._element);us(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Ar),this._activateParents(t),lt.trigger(this._element,w1,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(R1)){At.findOne(U1,t.closest(O1)).classList.add(Ar);return}for(const e of At.parents(t,P1))for(const i of At.prev(e,I1))i.classList.add(Ar)}_clearActiveClass(t){t.classList.remove(Ar);const e=At.find(`${tc}.${Ar}`,t);for(const i of e)i.classList.remove(Ar)}static jQueryInterface(t){return this.each(function(){const e=Ka.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}lt.on(window,C1,()=>{for(const n of At.find(L1))Ka.getOrCreateInstance(n)});_n(Ka);const H1="tab",z1="bs.tab",ar=`.${z1}`,V1=`hide${ar}`,G1=`hidden${ar}`,k1=`show${ar}`,W1=`shown${ar}`,$1=`click${ar}`,X1=`keydown${ar}`,q1=`load${ar}`,Y1="ArrowLeft",gh="ArrowRight",K1="ArrowUp",vh="ArrowDown",ec="Home",Eh="End",Xi="active",xh="fade",nc="show",j1="dropdown",Jm=".dropdown-toggle",Z1=".dropdown-menu",ic=`:not(${Jm})`,J1='.list-group, .nav, [role="tablist"]',Q1=".nav-item, .list-group-item",tL=`.nav-link${ic}, .list-group-item${ic}, [role="tab"]${ic}`,Qm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',rc=`${tL}, ${Qm}`,eL=`.${Xi}[data-bs-toggle="tab"], .${Xi}[data-bs-toggle="pill"], .${Xi}[data-bs-toggle="list"]`;class is extends wn{constructor(t){super(t),this._parent=this._element.closest(J1),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),lt.on(this._element,X1,e=>this._keydown(e)))}static get NAME(){return H1}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?lt.trigger(e,V1,{relatedTarget:t}):null;lt.trigger(t,k1,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Xi),this._activate(At.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(nc);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),lt.trigger(t,W1,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(xh))}_deactivate(t,e){if(!t)return;t.classList.remove(Xi),t.blur(),this._deactivate(At.getElementFromSelector(t));const i=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(nc);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),lt.trigger(t,G1,{relatedTarget:e})};this._queueCallback(i,t,t.classList.contains(xh))}_keydown(t){if(![Y1,gh,K1,vh,ec,Eh].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(r=>!bi(r));let i;if([ec,Eh].includes(t.key))i=e[t.key===ec?0:e.length-1];else{const r=[gh,vh].includes(t.key);i=Eu(e,t.target,r,!0)}i&&(i.focus({preventScroll:!0}),is.getOrCreateInstance(i).show())}_getChildren(){return At.find(rc,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=At.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains(j1))return;const r=(s,o)=>{const a=At.findOne(s,i);a&&a.classList.toggle(o,e)};r(Jm,Xi),r(Z1,nc),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Xi)}_getInnerElement(t){return t.matches(rc)?t:At.findOne(rc,t)}_getOuterElement(t){return t.closest(Q1)||t}static jQueryInterface(t){return this.each(function(){const e=is.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}lt.on(document,$1,Qm,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!bi(this)&&is.getOrCreateInstance(this).show()});lt.on(window,q1,()=>{for(const n of At.find(eL))is.getOrCreateInstance(n)});_n(is);const nL="toast",iL="bs.toast",Ci=`.${iL}`,rL=`mouseover${Ci}`,sL=`mouseout${Ci}`,oL=`focusin${Ci}`,aL=`focusout${Ci}`,lL=`hide${Ci}`,cL=`hidden${Ci}`,uL=`show${Ci}`,fL=`shown${Ci}`,dL="fade",Sh="hide",Ho="show",zo="showing",hL={animation:"boolean",autohide:"boolean",delay:"number"},pL={animation:!0,autohide:!0,delay:5e3};class ja extends wn{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return pL}static get DefaultType(){return hL}static get NAME(){return nL}show(){if(lt.trigger(this._element,uL).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(dL);const e=()=>{this._element.classList.remove(zo),lt.trigger(this._element,fL),this._maybeScheduleHide()};this._element.classList.remove(Sh),Zs(this._element),this._element.classList.add(Ho,zo),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||lt.trigger(this._element,lL).defaultPrevented)return;const e=()=>{this._element.classList.add(Sh),this._element.classList.remove(zo,Ho),lt.trigger(this._element,cL)};this._element.classList.add(zo),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ho),super.dispose()}isShown(){return this._element.classList.contains(Ho)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){lt.on(this._element,rL,t=>this._onInteraction(t,!0)),lt.on(this._element,sL,t=>this._onInteraction(t,!1)),lt.on(this._element,oL,t=>this._onInteraction(t,!0)),lt.on(this._element,aL,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=ja.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Xa(ja);_n(ja);yv(pA).mount("#app");
