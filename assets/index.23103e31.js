(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function W6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function N4(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=m1(s)?Vo(s):N4(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(m1(c))return c;if(n1(c))return c}}const ho=/;(?![^(]*\))/g,Ho=/:([^]+)/,uo=/\/\*.*?\*\//gs;function Vo(c){const a={};return c.replace(uo,"").split(ho).forEach(e=>{if(e){const s=e.split(Ho);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function Z6(c){let a="";if(m1(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const s=Z6(c[e]);s&&(a+=s+" ")}else if(n1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Mo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",po=W6(Mo);function Q0(c){return!!c||c===""}const G2=c=>m1(c)?c:c==null?"":O(c)||n1(c)&&(c.toString===e7||!U(c.toString))?JSON.stringify(c,J0,2):String(c),J0=(c,a)=>a&&a.__v_isRef?J0(c,a.value):K2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:c7(a)?{[`Set(${a.size})`]:[...a.values()]}:n1(a)&&!O(a)&&!s7(a)?String(a):a,c1={},j2=[],q1=()=>{},Lo=()=>!1,go=/^on[^a-z]/,w4=c=>go.test(c),j6=c=>c.startsWith("onUpdate:"),L1=Object.assign,K6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},xo=Object.prototype.hasOwnProperty,j=(c,a)=>xo.call(c,a),O=Array.isArray,K2=c=>y4(c)==="[object Map]",c7=c=>y4(c)==="[object Set]",U=c=>typeof c=="function",m1=c=>typeof c=="string",Y6=c=>typeof c=="symbol",n1=c=>c!==null&&typeof c=="object",a7=c=>n1(c)&&U(c.then)&&U(c.catch),e7=Object.prototype.toString,y4=c=>e7.call(c),bo=c=>y4(c).slice(8,-1),s7=c=>y4(c)==="[object Object]",X6=c=>m1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,l4=W6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},So=/-(\w)/g,X1=k4(c=>c.replace(So,(a,e)=>e?e.toUpperCase():"")),No=/\B([A-Z])/g,n3=k4(c=>c.replace(No,"-$1").toLowerCase()),A4=k4(c=>c.charAt(0).toUpperCase()+c.slice(1)),l6=k4(c=>c?`on${A4(c)}`:""),x3=(c,a)=>!Object.is(c,a),o4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},h4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},H4=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let P5;const wo=()=>P5||(P5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let W1;class yo{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=W1,!a&&W1&&(this.index=(W1.scopes||(W1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=W1;try{return W1=this,a()}finally{W1=e}}}on(){W1=this}off(){W1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ko(c,a=W1){a&&a.active&&a.effects.push(c)}const Q6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},r7=c=>(c.w&h2)>0,i7=c=>(c.n&h2)>0,Ao=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=h2},Po=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];r7(r)&&!i7(r)?r.delete(c):a[e++]=r,r.w&=~h2,r.n&=~h2}a.length=e}},M6=new WeakMap;let C3=0,h2=1;const p6=30;let R1;const A2=Symbol(""),d6=Symbol("");class J6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,ko(this,s)}run(){if(!this.active)return this.fn();let a=R1,e=v2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=R1,R1=this,v2=!0,h2=1<<++C3,C3<=p6?Ao(this):T5(this),this.fn()}finally{C3<=p6&&Po(this),h2=1<<--C3,R1=this.parent,v2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){R1===this?this.deferStop=!0:this.active&&(T5(this),this.onStop&&this.onStop(),this.active=!1)}}function T5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let v2=!0;const n7=[];function R2(){n7.push(v2),v2=!1}function E2(){const c=n7.pop();v2=c===void 0?!0:c}function y1(c,a,e){if(v2&&R1){let s=M6.get(c);s||M6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=Q6()),f7(r)}}function f7(c,a){let e=!1;C3<=p6?i7(c)||(c.n|=h2,e=!r7(c)):e=!c.has(R1),e&&(c.add(R1),R1.deps.push(c))}function e2(c,a,e,s,r,i){const n=M6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&O(c)){const l=H4(s);n.forEach((t,o)=>{(o==="length"||o>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":O(c)?X6(e)&&f.push(n.get("length")):(f.push(n.get(A2)),K2(c)&&f.push(n.get(d6)));break;case"delete":O(c)||(f.push(n.get(A2)),K2(c)&&f.push(n.get(d6)));break;case"set":K2(c)&&f.push(n.get(A2));break}if(f.length===1)f[0]&&L6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);L6(Q6(l))}}function L6(c,a){const e=O(c)?c:[...c];for(const s of e)s.computed&&F5(s);for(const s of e)s.computed||F5(s)}function F5(c,a){(c!==R1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const To=W6("__proto__,__v_isRef,__isVue"),l7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(Y6)),Fo=c8(),Bo=c8(!1,!0),Ro=c8(!0),B5=Eo();function Eo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=Y(this);for(let i=0,n=this.length;i<n;i++)y1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){R2();const s=Y(this)[a].apply(this,e);return E2(),s}}),c}function c8(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Jo:z7:a?C7:m7).get(s))return s;const n=O(s);if(!c&&n&&j(B5,r))return Reflect.get(B5,r,i);const f=Reflect.get(s,r,i);return(Y6(r)?l7.has(r):To(r))||(c||y1(s,"get",r),a)?f:H1(f)?n&&X6(r)?f:f.value:n1(f)?c?v7(f):R3(f):f}}const Do=o7(),_o=o7(!0);function o7(c=!1){return function(e,s,r,i){let n=e[s];if(c3(n)&&H1(n)&&!H1(r))return!1;if(!c&&(!u4(r)&&!c3(r)&&(n=Y(n),r=Y(r)),!O(e)&&H1(n)&&!H1(r)))return n.value=r,!0;const f=O(e)&&X6(s)?Number(s)<e.length:j(e,s),l=Reflect.set(e,s,r,i);return e===Y(i)&&(f?x3(r,n)&&e2(e,"set",s,r):e2(e,"add",s,r)),l}}function qo(c,a){const e=j(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&e2(c,"delete",a,void 0),s}function Oo(c,a){const e=Reflect.has(c,a);return(!Y6(a)||!l7.has(a))&&y1(c,"has",a),e}function $o(c){return y1(c,"iterate",O(c)?"length":A2),Reflect.ownKeys(c)}const t7={get:Fo,set:Do,deleteProperty:qo,has:Oo,ownKeys:$o},Uo={get:Ro,set(c,a){return!0},deleteProperty(c,a){return!0}},Io=L1({},t7,{get:Bo,set:_o}),a8=c=>c,P4=c=>Reflect.getPrototypeOf(c);function Z3(c,a,e=!1,s=!1){c=c.__v_raw;const r=Y(c),i=Y(a);e||(a!==i&&y1(r,"get",a),y1(r,"get",i));const{has:n}=P4(r),f=s?a8:e?r8:b3;if(n.call(r,a))return f(c.get(a));if(n.call(r,i))return f(c.get(i));c!==r&&c.get(a)}function j3(c,a=!1){const e=this.__v_raw,s=Y(e),r=Y(c);return a||(c!==r&&y1(s,"has",c),y1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function K3(c,a=!1){return c=c.__v_raw,!a&&y1(Y(c),"iterate",A2),Reflect.get(c,"size",c)}function R5(c){c=Y(c);const a=Y(this);return P4(a).has.call(a,c)||(a.add(c),e2(a,"add",c,c)),this}function E5(c,a){a=Y(a);const e=Y(this),{has:s,get:r}=P4(e);let i=s.call(e,c);i||(c=Y(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?x3(a,n)&&e2(e,"set",c,a):e2(e,"add",c,a),this}function D5(c){const a=Y(this),{has:e,get:s}=P4(a);let r=e.call(a,c);r||(c=Y(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&e2(a,"delete",c,void 0),i}function _5(){const c=Y(this),a=c.size!==0,e=c.clear();return a&&e2(c,"clear",void 0,void 0),e}function Y3(c,a){return function(s,r){const i=this,n=i.__v_raw,f=Y(n),l=a?a8:c?r8:b3;return!c&&y1(f,"iterate",A2),n.forEach((t,o)=>s.call(r,l(t),l(o),i))}}function X3(c,a,e){return function(...s){const r=this.__v_raw,i=Y(r),n=K2(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=r[c](...s),o=e?a8:a?r8:b3;return!a&&y1(i,"iterate",l?d6:A2),{next(){const{value:C,done:v}=t.next();return v?{value:C,done:v}:{value:f?[o(C[0]),o(C[1])]:o(C),done:v}},[Symbol.iterator](){return this}}}}function o2(c){return function(...a){return c==="delete"?!1:this}}function Go(){const c={get(i){return Z3(this,i)},get size(){return K3(this)},has:j3,add:R5,set:E5,delete:D5,clear:_5,forEach:Y3(!1,!1)},a={get(i){return Z3(this,i,!1,!0)},get size(){return K3(this)},has:j3,add:R5,set:E5,delete:D5,clear:_5,forEach:Y3(!1,!0)},e={get(i){return Z3(this,i,!0)},get size(){return K3(this,!0)},has(i){return j3.call(this,i,!0)},add:o2("add"),set:o2("set"),delete:o2("delete"),clear:o2("clear"),forEach:Y3(!0,!1)},s={get(i){return Z3(this,i,!0,!0)},get size(){return K3(this,!0)},has(i){return j3.call(this,i,!0)},add:o2("add"),set:o2("set"),delete:o2("delete"),clear:o2("clear"),forEach:Y3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=X3(i,!1,!1),e[i]=X3(i,!0,!1),a[i]=X3(i,!1,!0),s[i]=X3(i,!0,!0)}),[c,e,a,s]}const[Wo,Zo,jo,Ko]=Go();function e8(c,a){const e=a?c?Ko:jo:c?Zo:Wo;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(j(e,r)&&r in s?e:s,r,i)}const Yo={get:e8(!1,!1)},Xo={get:e8(!1,!0)},Qo={get:e8(!0,!1)},m7=new WeakMap,C7=new WeakMap,z7=new WeakMap,Jo=new WeakMap;function ct(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function at(c){return c.__v_skip||!Object.isExtensible(c)?0:ct(bo(c))}function R3(c){return c3(c)?c:s8(c,!1,t7,Yo,m7)}function et(c){return s8(c,!1,Io,Xo,C7)}function v7(c){return s8(c,!0,Uo,Qo,z7)}function s8(c,a,e,s,r){if(!n1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=at(c);if(n===0)return c;const f=new Proxy(c,n===2?s:e);return r.set(c,f),f}function Y2(c){return c3(c)?Y2(c.__v_raw):!!(c&&c.__v_isReactive)}function c3(c){return!!(c&&c.__v_isReadonly)}function u4(c){return!!(c&&c.__v_isShallow)}function h7(c){return Y2(c)||c3(c)}function Y(c){const a=c&&c.__v_raw;return a?Y(a):c}function H7(c){return h4(c,"__v_skip",!0),c}const b3=c=>n1(c)?R3(c):c,r8=c=>n1(c)?v7(c):c;function u7(c){v2&&R1&&(c=Y(c),f7(c.dep||(c.dep=Q6())))}function V7(c,a){c=Y(c),c.dep&&L6(c.dep)}function H1(c){return!!(c&&c.__v_isRef===!0)}function st(c){return M7(c,!1)}function rt(c){return M7(c,!0)}function M7(c,a){return H1(c)?c:new it(c,a)}class it{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:Y(a),this._value=e?a:b3(a)}get value(){return u7(this),this._value}set value(a){const e=this.__v_isShallow||u4(a)||c3(a);a=e?a:Y(a),x3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:b3(a),V7(this))}}function X2(c){return H1(c)?c.value:c}const nt={get:(c,a,e)=>X2(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return H1(r)&&!H1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function p7(c){return Y2(c)?c:new Proxy(c,nt)}var d7;class ft{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[d7]=!1,this._dirty=!0,this.effect=new J6(a,()=>{this._dirty||(this._dirty=!0,V7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=Y(this);return u7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}d7="__v_isReadonly";function lt(c,a,e=!1){let s,r;const i=U(c);return i?(s=c,r=q1):(s=c.get,r=c.set),new ft(s,r,i||!r,e)}const v3=[];function ot(c,...a){R2();const e=v3.length?v3[v3.length-1].component:null,s=e&&e.appContext.config.warnHandler,r=tt();if(s)c2(s,e,11,[c+a.join(""),e&&e.proxy,r.map(({vnode:i})=>`at <${X7(e,i.type)}>`).join(`
`),r]);else{const i=[`[Vue warn]: ${c}`,...a];r.length&&i.push(`
`,...mt(r)),console.warn(...i)}E2()}function tt(){let c=v3[v3.length-1];if(!c)return[];const a=[];for(;c;){const e=a[0];e&&e.vnode===c?e.recurseCount++:a.push({vnode:c,recurseCount:0});const s=c.component&&c.component.parent;c=s&&s.vnode}return a}function mt(c){const a=[];return c.forEach((e,s)=>{a.push(...s===0?[]:[`
`],...Ct(e))}),a}function Ct({vnode:c,recurseCount:a}){const e=a>0?`... (${a} recursive calls)`:"",s=c.component?c.component.parent==null:!1,r=` at <${X7(c.component,c.type,s)}`,i=">"+e;return c.props?[r,...zt(c.props),i]:[r+i]}function zt(c){const a=[],e=Object.keys(c);return e.slice(0,3).forEach(s=>{a.push(...L7(s,c[s]))}),e.length>3&&a.push(" ..."),a}function L7(c,a,e){return m1(a)?(a=JSON.stringify(a),e?a:[`${c}=${a}`]):typeof a=="number"||typeof a=="boolean"||a==null?e?a:[`${c}=${a}`]:H1(a)?(a=L7(c,Y(a.value),!0),e?a:[`${c}=Ref<`,a,">"]):U(a)?[`${c}=fn${a.name?`<${a.name}>`:""}`]:(a=Y(a),e?a:[`${c}=`,a])}function c2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){T4(i,a,e)}return r}function O1(c,a,e,s){if(U(c)){const i=c2(c,a,e,s);return i&&a7(i)&&i.catch(n=>{T4(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(O1(c[i],a,e,s));return r}function T4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){c2(l,null,10,[c,n,f]);return}}vt(c,e,r,s)}function vt(c,a,e,s=!0){console.error(c)}let S3=!1,g6=!1;const V1=[];let j1=0;const Q2=[];let J1=null,S2=0;const g7=Promise.resolve();let i8=null;function x7(c){const a=i8||g7;return c?a.then(this?c.bind(this):c):a}function ht(c){let a=j1+1,e=V1.length;for(;a<e;){const s=a+e>>>1;N3(V1[s])<c?a=s+1:e=s}return a}function n8(c){(!V1.length||!V1.includes(c,S3&&c.allowRecurse?j1+1:j1))&&(c.id==null?V1.push(c):V1.splice(ht(c.id),0,c),b7())}function b7(){!S3&&!g6&&(g6=!0,i8=g7.then(N7))}function Ht(c){const a=V1.indexOf(c);a>j1&&V1.splice(a,1)}function ut(c){O(c)?Q2.push(...c):(!J1||!J1.includes(c,c.allowRecurse?S2+1:S2))&&Q2.push(c),b7()}function q5(c,a=S3?j1+1:0){for(;a<V1.length;a++){const e=V1[a];e&&e.pre&&(V1.splice(a,1),a--,e())}}function S7(c){if(Q2.length){const a=[...new Set(Q2)];if(Q2.length=0,J1){J1.push(...a);return}for(J1=a,J1.sort((e,s)=>N3(e)-N3(s)),S2=0;S2<J1.length;S2++)J1[S2]();J1=null,S2=0}}const N3=c=>c.id==null?1/0:c.id,Vt=(c,a)=>{const e=N3(c)-N3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function N7(c){g6=!1,S3=!0,V1.sort(Vt);const a=q1;try{for(j1=0;j1<V1.length;j1++){const e=V1[j1];e&&e.active!==!1&&c2(e,null,14)}}finally{j1=0,V1.length=0,S7(),S3=!1,i8=null,(V1.length||Q2.length)&&N7()}}function Mt(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||c1;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:C,trim:v}=s[o]||c1;v&&(r=e.map(H=>m1(H)?H.trim():H)),C&&(r=e.map(H4))}let f,l=s[f=l6(a)]||s[f=l6(X1(a))];!l&&i&&(l=s[f=l6(n3(a))]),l&&O1(l,c,6,r);const t=s[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,O1(t,c,6,r)}}function w7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},f=!1;if(!U(c)){const l=t=>{const o=w7(t,a,!0);o&&(f=!0,L1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(n1(c)&&s.set(c,null),null):(O(i)?i.forEach(l=>n[l]=null):L1(n,i),n1(c)&&s.set(c,n),n)}function F4(c,a){return!c||!w4(a)?!1:(a=a.slice(2).replace(/Once$/,""),j(c,a[0].toLowerCase()+a.slice(1))||j(c,n3(a))||j(c,a))}let d1=null,y7=null;function V4(c){const a=d1;return d1=c,y7=c&&c.type.__scopeId||null,a}function P2(c,a=d1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&K5(-1);const i=V4(a);let n;try{n=c(...r)}finally{V4(i),s._d&&K5(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function o6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:C,data:v,setupState:H,ctx:b,inheritAttrs:y}=c;let B,V;const d=V4(c);try{if(e.shapeFlag&4){const _=r||s;B=Z1(o.call(_,_,C,i,H,v,b)),V=l}else{const _=a;B=Z1(_.length>1?_(i,{attrs:l,slots:f,emit:t}):_(i,null)),V=a.props?l:pt(l)}}catch(_){V3.length=0,T4(_,c,1),B=I(H2)}let S=B;if(V&&y!==!1){const _=Object.keys(V),{shapeFlag:W}=S;_.length&&W&7&&(n&&_.some(j6)&&(V=dt(V,n)),S=a3(S,V))}return e.dirs&&(S=a3(S),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&(S.transition=e.transition),B=S,V4(d),B}const pt=c=>{let a;for(const e in c)(e==="class"||e==="style"||w4(e))&&((a||(a={}))[e]=c[e]);return a},dt=(c,a)=>{const e={};for(const s in c)(!j6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function Lt(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?O5(s,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let C=0;C<o.length;C++){const v=o[C];if(n[v]!==s[v]&&!F4(t,v))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===n?!1:s?n?O5(s,n,t):!0:!!n;return!1}function O5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!F4(e,i))return!0}return!1}function gt({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const xt=c=>c.__isSuspense;function bt(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):ut(c)}function t4(c,a){if(h1){let e=h1.provides;const s=h1.parent&&h1.parent.provides;s===e&&(e=h1.provides=Object.create(s)),e[c]=a}}function a2(c,a,e=!1){const s=h1||d1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&U(a)?a.call(s.proxy):a}}const Q3={};function h3(c,a,e){return k7(c,a,e)}function k7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=c1){const f=h1;let l,t=!1,o=!1;if(H1(c)?(l=()=>c.value,t=u4(c)):Y2(c)?(l=()=>c,s=!0):O(c)?(o=!0,t=c.some(S=>Y2(S)||u4(S)),l=()=>c.map(S=>{if(H1(S))return S.value;if(Y2(S))return w2(S);if(U(S))return c2(S,f,2)})):U(c)?a?l=()=>c2(c,f,2):l=()=>{if(!(f&&f.isUnmounted))return C&&C(),O1(c,f,3,[v])}:l=q1,a&&s){const S=l;l=()=>w2(S())}let C,v=S=>{C=V.onStop=()=>{c2(S,f,4)}},H;if(y3)if(v=q1,a?e&&O1(a,f,3,[l(),o?[]:void 0,v]):l(),r==="sync"){const S=gm();H=S.__watcherHandles||(S.__watcherHandles=[])}else return q1;let b=o?new Array(c.length).fill(Q3):Q3;const y=()=>{if(!!V.active)if(a){const S=V.run();(s||t||(o?S.some((_,W)=>x3(_,b[W])):x3(S,b)))&&(C&&C(),O1(a,f,3,[S,b===Q3||o&&b[0]===Q3?void 0:b,v]),b=S)}else V.run()};y.allowRecurse=!!a;let B;r==="sync"?B=y:r==="post"?B=()=>b1(y,f&&f.suspense):(y.pre=!0,f&&(y.id=f.uid),B=()=>n8(y));const V=new J6(l,B);a?e?y():b=V.run():r==="post"?b1(V.run.bind(V),f&&f.suspense):V.run();const d=()=>{V.stop(),f&&f.scope&&K6(f.scope.effects,V)};return H&&H.push(d),d}function St(c,a,e){const s=this.proxy,r=m1(c)?c.includes(".")?A7(s,c):()=>s[c]:c.bind(s,s);let i;U(a)?i=a:(i=a.handler,e=a);const n=h1;e3(this);const f=k7(r,i.bind(s),e);return n?e3(n):T2(),f}function A7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function w2(c,a){if(!n1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),H1(c))w2(c.value,a);else if(O(c))for(let e=0;e<c.length;e++)w2(c[e],a);else if(c7(c)||K2(c))c.forEach(e=>{w2(e,a)});else if(s7(c))for(const e in c)w2(c[e],a);return c}function E3(c){return U(c)?{setup:c,name:c.name}:c}const H3=c=>!!c.type.__asyncLoader,P7=c=>c.type.__isKeepAlive;function Nt(c,a){T7(c,"a",a)}function wt(c,a){T7(c,"da",a)}function T7(c,a,e=h1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(B4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)P7(r.parent.vnode)&&yt(s,a,e,r),r=r.parent}}function yt(c,a,e,s){const r=B4(a,c,s,!0);F7(()=>{K6(s[a],r)},e)}function B4(c,a,e=h1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;R2(),e3(e);const f=O1(a,e,c,n);return T2(),E2(),f});return s?r.unshift(i):r.push(i),i}}const n2=c=>(a,e=h1)=>(!y3||c==="sp")&&B4(c,(...s)=>a(...s),e),kt=n2("bm"),At=n2("m"),Pt=n2("bu"),Tt=n2("u"),Ft=n2("bum"),F7=n2("um"),Bt=n2("sp"),Rt=n2("rtg"),Et=n2("rtc");function Dt(c,a=h1){B4("ec",c,a)}function _t(c,a){const e=d1;if(e===null)return c;const s=D4(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,f,l,t=c1]=a[i];n&&(U(n)&&(n={mounted:n,updated:n}),n.deep&&w2(f),r.push({dir:n,instance:s,value:f,oldValue:void 0,arg:l,modifiers:t}))}return c}function g2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let l=f.dir[s];l&&(R2(),O1(l,e,8,[c.el,f,c,a]),E2())}}const f8="components";function Y1(c,a){return R7(f8,c,!0,a)||c}const B7=Symbol();function qt(c){return m1(c)?R7(f8,c,!1)||c:c||B7}function R7(c,a,e=!0,s=!1){const r=d1||h1;if(r){const i=r.type;if(c===f8){const f=Y7(i,!1);if(f&&(f===a||f===X1(a)||f===A4(X1(a))))return i}const n=$5(r[c]||i[c],a)||$5(r.appContext[c],a);return!n&&s?i:n}}function $5(c,a){return c&&(c[a]||c[X1(a)]||c[A4(X1(a))])}function Ot(c,a,e,s){let r;const i=e&&e[s];if(O(c)||m1(c)){r=new Array(c.length);for(let n=0,f=c.length;n<f;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(n1(c))if(c[Symbol.iterator])r=Array.from(c,(n,f)=>a(n,f,void 0,i&&i[f]));else{const n=Object.keys(c);r=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];r[f]=a(c[t],t,f,i&&i[f])}}else r=[];return e&&(e[s]=r),r}function $t(c,a,e={},s,r){if(d1.isCE||d1.parent&&H3(d1.parent)&&d1.parent.isCE)return I("slot",a==="default"?null:{name:a},s&&s());let i=c[a];i&&i._c&&(i._d=!1),P1();const n=i&&E7(i(e)),f=R4(u1,{key:e.key||n&&n.key||`_${a}`},n||(s?s():[]),n&&c._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),i&&i._c&&(i._d=!0),f}function E7(c){return c.some(a=>p4(a)?!(a.type===H2||a.type===u1&&!E7(a.children)):!0)?c:null}const x6=c=>c?j7(c)?D4(c)||c.proxy:x6(c.parent):null,u3=L1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>x6(c.parent),$root:c=>x6(c.root),$emit:c=>c.emit,$options:c=>l8(c),$forceUpdate:c=>c.f||(c.f=()=>n8(c.update)),$nextTick:c=>c.n||(c.n=x7.bind(c.proxy)),$watch:c=>St.bind(c)}),Ut={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const H=n[a];if(H!==void 0)switch(H){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(s!==c1&&j(s,a))return n[a]=1,s[a];if(r!==c1&&j(r,a))return n[a]=2,r[a];if((t=c.propsOptions[0])&&j(t,a))return n[a]=3,i[a];if(e!==c1&&j(e,a))return n[a]=4,e[a];b6&&(n[a]=0)}}const o=u3[a];let C,v;if(o)return a==="$attrs"&&y1(c,"get",a),o(c);if((C=f.__cssModules)&&(C=C[a]))return C;if(e!==c1&&j(e,a))return n[a]=4,e[a];if(v=l.config.globalProperties,j(v,a))return v[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return r!==c1&&j(r,a)?(r[a]=e,!0):s!==c1&&j(s,a)?(s[a]=e,!0):j(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let f;return!!e[n]||c!==c1&&j(c,n)||a!==c1&&j(a,n)||(f=i[0])&&j(f,n)||j(s,n)||j(u3,n)||j(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:j(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let b6=!0;function It(c){const a=l8(c),e=c.proxy,s=c.ctx;b6=!1,a.beforeCreate&&U5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:C,mounted:v,beforeUpdate:H,updated:b,activated:y,deactivated:B,beforeDestroy:V,beforeUnmount:d,destroyed:S,unmounted:_,render:W,renderTracked:i1,renderTriggered:o1,errorCaptured:N1,serverPrefetch:M1,expose:A1,inheritAttrs:l2,components:U1,directives:_2,filters:d2}=a;if(t&&Gt(t,s,null,c.appContext.config.unwrapInjectedRef),n)for(const a1 in n){const Q=n[a1];U(Q)&&(s[a1]=Q.bind(e))}if(r){const a1=r.call(e,e);n1(a1)&&(c.data=R3(a1))}if(b6=!0,i)for(const a1 in i){const Q=i[a1],T1=U(Q)?Q.bind(e,e):U(Q.get)?Q.get.bind(e,e):q1,L2=!U(Q)&&U(Q.set)?Q.set.bind(e):q1,F1=l1({get:T1,set:L2});Object.defineProperty(s,a1,{enumerable:!0,configurable:!0,get:()=>F1.value,set:g1=>F1.value=g1})}if(f)for(const a1 in f)D7(f[a1],s,e,a1);if(l){const a1=U(l)?l.call(e):l;Reflect.ownKeys(a1).forEach(Q=>{t4(Q,a1[Q])})}o&&U5(o,c,"c");function C1(a1,Q){O(Q)?Q.forEach(T1=>a1(T1.bind(e))):Q&&a1(Q.bind(e))}if(C1(kt,C),C1(At,v),C1(Pt,H),C1(Tt,b),C1(Nt,y),C1(wt,B),C1(Dt,N1),C1(Et,i1),C1(Rt,o1),C1(Ft,d),C1(F7,_),C1(Bt,M1),O(A1))if(A1.length){const a1=c.exposed||(c.exposed={});A1.forEach(Q=>{Object.defineProperty(a1,Q,{get:()=>e[Q],set:T1=>e[Q]=T1})})}else c.exposed||(c.exposed={});W&&c.render===q1&&(c.render=W),l2!=null&&(c.inheritAttrs=l2),U1&&(c.components=U1),_2&&(c.directives=_2)}function Gt(c,a,e=q1,s=!1){O(c)&&(c=S6(c));for(const r in c){const i=c[r];let n;n1(i)?"default"in i?n=a2(i.from||r,i.default,!0):n=a2(i.from||r):n=a2(i),H1(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function U5(c,a,e){O1(O(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function D7(c,a,e,s){const r=s.includes(".")?A7(e,s):()=>e[s];if(m1(c)){const i=a[c];U(i)&&h3(r,i)}else if(U(c))h3(r,c.bind(e));else if(n1(c))if(O(c))c.forEach(i=>D7(i,a,e,s));else{const i=U(c.handler)?c.handler.bind(e):a[c.handler];U(i)&&h3(r,i,c)}}function l8(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>M4(l,t,n,!0)),M4(l,a,n)),n1(a)&&i.set(a,l),l}function M4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&M4(c,i,e,!0),r&&r.forEach(n=>M4(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const f=Wt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Wt={data:I5,props:b2,emits:b2,methods:b2,computed:b2,beforeCreate:p1,created:p1,beforeMount:p1,mounted:p1,beforeUpdate:p1,updated:p1,beforeDestroy:p1,beforeUnmount:p1,destroyed:p1,unmounted:p1,activated:p1,deactivated:p1,errorCaptured:p1,serverPrefetch:p1,components:b2,directives:b2,watch:jt,provide:I5,inject:Zt};function I5(c,a){return a?c?function(){return L1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function Zt(c,a){return b2(S6(c),S6(a))}function S6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function p1(c,a){return c?[...new Set([].concat(c,a))]:a}function b2(c,a){return c?L1(L1(Object.create(null),c),a):a}function jt(c,a){if(!c)return a;if(!a)return c;const e=L1(Object.create(null),c);for(const s in a)e[s]=p1(c[s],a[s]);return e}function Kt(c,a,e,s=!1){const r={},i={};h4(i,E4,1),c.propsDefaults=Object.create(null),_7(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:et(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function Yt(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,f=Y(r),[l]=c.propsOptions;let t=!1;if((s||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let C=0;C<o.length;C++){let v=o[C];if(F4(c.emitsOptions,v))continue;const H=a[v];if(l)if(j(i,v))H!==i[v]&&(i[v]=H,t=!0);else{const b=X1(v);r[b]=N6(l,f,b,H,c,!1)}else H!==i[v]&&(i[v]=H,t=!0)}}}else{_7(c,a,r,i)&&(t=!0);let o;for(const C in f)(!a||!j(a,C)&&((o=n3(C))===C||!j(a,o)))&&(l?e&&(e[C]!==void 0||e[o]!==void 0)&&(r[C]=N6(l,f,C,void 0,c,!0)):delete r[C]);if(i!==f)for(const C in i)(!a||!j(a,C)&&!0)&&(delete i[C],t=!0)}t&&e2(c,"set","$attrs")}function _7(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(l4(l))continue;const t=a[l];let o;r&&j(r,o=X1(l))?!i||!i.includes(o)?e[o]=t:(f||(f={}))[o]=t:F4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,n=!0)}if(i){const l=Y(e),t=f||c1;for(let o=0;o<i.length;o++){const C=i[o];e[C]=N6(r,l,C,t[C],c,!j(t,C))}}return n}function N6(c,a,e,s,r,i){const n=c[e];if(n!=null){const f=j(n,"default");if(f&&s===void 0){const l=n.default;if(n.type!==Function&&U(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(e3(r),s=t[e]=l.call(null,a),T2())}else s=l}n[0]&&(i&&!f?s=!1:n[1]&&(s===""||s===n3(e))&&(s=!0))}return s}function q7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},f=[];let l=!1;if(!U(c)){const o=C=>{l=!0;const[v,H]=q7(C,a,!0);L1(n,v),H&&f.push(...H)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return n1(c)&&s.set(c,j2),j2;if(O(i))for(let o=0;o<i.length;o++){const C=X1(i[o]);G5(C)&&(n[C]=c1)}else if(i)for(const o in i){const C=X1(o);if(G5(C)){const v=i[o],H=n[C]=O(v)||U(v)?{type:v}:Object.assign({},v);if(H){const b=j5(Boolean,H.type),y=j5(String,H.type);H[0]=b>-1,H[1]=y<0||b<y,(b>-1||j(H,"default"))&&f.push(C)}}}const t=[n,f];return n1(c)&&s.set(c,t),t}function G5(c){return c[0]!=="$"}function W5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function Z5(c,a){return W5(c)===W5(a)}function j5(c,a){return O(a)?a.findIndex(e=>Z5(e,c)):U(a)&&Z5(a,c)?0:-1}const O7=c=>c[0]==="_"||c==="$stable",o8=c=>O(c)?c.map(Z1):[Z1(c)],Xt=(c,a,e)=>{if(a._n)return a;const s=P2((...r)=>o8(a(...r)),e);return s._c=!1,s},$7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(O7(r))continue;const i=c[r];if(U(i))a[r]=Xt(r,i,s);else if(i!=null){const n=o8(i);a[r]=()=>n}}},U7=(c,a)=>{const e=o8(a);c.slots.default=()=>e},Qt=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=Y(a),h4(a,"_",e)):$7(a,c.slots={})}else c.slots={},a&&U7(c,a);h4(c.slots,E4,1)},Jt=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=c1;if(s.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(L1(r,a),!e&&f===1&&delete r._):(i=!a.$stable,$7(a,r)),n=a}else a&&(U7(c,a),n={default:1});if(i)for(const f in r)!O7(f)&&!(f in n)&&delete r[f]};function I7(){return{app:null,config:{isNativeTag:Lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function am(c,a){return function(s,r=null){U(s)||(s=Object.assign({},s)),r!=null&&!n1(r)&&(r=null);const i=I7(),n=new Set;let f=!1;const l=i.app={_uid:cm++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xm,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&U(t.install)?(n.add(t),t.install(l,...o)):U(t)&&(n.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,C){if(!f){const v=I(s,r);return v.appContext=i,o&&a?a(v,t):c(v,t,C),f=!0,l._container=t,t.__vue_app__=l,D4(v.component)||v.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l}};return l}}function w6(c,a,e,s,r=!1){if(O(c)){c.forEach((v,H)=>w6(v,a&&(O(a)?a[H]:a),e,s,r));return}if(H3(s)&&!r)return;const i=s.shapeFlag&4?D4(s.component)||s.component.proxy:s.el,n=r?null:i,{i:f,r:l}=c,t=a&&a.r,o=f.refs===c1?f.refs={}:f.refs,C=f.setupState;if(t!=null&&t!==l&&(m1(t)?(o[t]=null,j(C,t)&&(C[t]=null)):H1(t)&&(t.value=null)),U(l))c2(l,f,12,[n,o]);else{const v=m1(l),H=H1(l);if(v||H){const b=()=>{if(c.f){const y=v?j(C,l)?C[l]:o[l]:l.value;r?O(y)&&K6(y,i):O(y)?y.includes(i)||y.push(i):v?(o[l]=[i],j(C,l)&&(C[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else v?(o[l]=n,j(C,l)&&(C[l]=n)):H&&(l.value=n,c.k&&(o[c.k]=n))};n?(b.id=-1,b1(b,e)):b()}}}const b1=bt;function em(c){return sm(c)}function sm(c,a){const e=wo();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:C,nextSibling:v,setScopeId:H=q1,insertStaticContent:b}=c,y=(m,z,h,u=null,p=null,x=null,k=!1,g=null,N=!!z.dynamicChildren)=>{if(m===z)return;m&&!t3(m,z)&&(u=w(m),g1(m,p,x,!0),m=null),z.patchFlag===-2&&(N=!1,z.dynamicChildren=null);const{type:L,ref:E,shapeFlag:T}=z;switch(L){case t8:B(m,z,h,u);break;case H2:V(m,z,h,u);break;case m4:m==null&&d(z,h,u,k);break;case u1:U1(m,z,h,u,p,x,k,g,N);break;default:T&1?W(m,z,h,u,p,x,k,g,N):T&6?_2(m,z,h,u,p,x,k,g,N):(T&64||T&128)&&L.process(m,z,h,u,p,x,k,g,N,K)}E!=null&&p&&w6(E,m&&m.ref,x,z||m,!z)},B=(m,z,h,u)=>{if(m==null)s(z.el=f(z.children),h,u);else{const p=z.el=m.el;z.children!==m.children&&t(p,z.children)}},V=(m,z,h,u)=>{m==null?s(z.el=l(z.children||""),h,u):z.el=m.el},d=(m,z,h,u)=>{[m.el,m.anchor]=b(m.children,z,h,u,m.el,m.anchor)},S=({el:m,anchor:z},h,u)=>{let p;for(;m&&m!==z;)p=v(m),s(m,h,u),m=p;s(z,h,u)},_=({el:m,anchor:z})=>{let h;for(;m&&m!==z;)h=v(m),r(m),m=h;r(z)},W=(m,z,h,u,p,x,k,g,N)=>{k=k||z.type==="svg",m==null?i1(z,h,u,p,x,k,g,N):M1(m,z,p,x,k,g,N)},i1=(m,z,h,u,p,x,k,g)=>{let N,L;const{type:E,props:T,shapeFlag:D,transition:q,dirs:Z}=m;if(N=m.el=n(m.type,x,T&&T.is,T),D&8?o(N,m.children):D&16&&N1(m.children,N,null,u,p,x&&E!=="foreignObject",k,g),Z&&g2(m,null,u,"created"),T){for(const J in T)J!=="value"&&!l4(J)&&i(N,J,null,T[J],x,m.children,u,p,A);"value"in T&&i(N,"value",null,T.value),(L=T.onVnodeBeforeMount)&&G1(L,u,m)}o1(N,m,m.scopeId,k,u),Z&&g2(m,null,u,"beforeMount");const e1=(!p||p&&!p.pendingBranch)&&q&&!q.persisted;e1&&q.beforeEnter(N),s(N,z,h),((L=T&&T.onVnodeMounted)||e1||Z)&&b1(()=>{L&&G1(L,u,m),e1&&q.enter(N),Z&&g2(m,null,u,"mounted")},p)},o1=(m,z,h,u,p)=>{if(h&&H(m,h),u)for(let x=0;x<u.length;x++)H(m,u[x]);if(p){let x=p.subTree;if(z===x){const k=p.vnode;o1(m,k,k.scopeId,k.slotScopeIds,p.parent)}}},N1=(m,z,h,u,p,x,k,g,N=0)=>{for(let L=N;L<m.length;L++){const E=m[L]=g?C2(m[L]):Z1(m[L]);y(null,E,z,h,u,p,x,k,g)}},M1=(m,z,h,u,p,x,k)=>{const g=z.el=m.el;let{patchFlag:N,dynamicChildren:L,dirs:E}=z;N|=m.patchFlag&16;const T=m.props||c1,D=z.props||c1;let q;h&&x2(h,!1),(q=D.onVnodeBeforeUpdate)&&G1(q,h,z,m),E&&g2(z,m,h,"beforeUpdate"),h&&x2(h,!0);const Z=p&&z.type!=="foreignObject";if(L?A1(m.dynamicChildren,L,g,h,u,Z,x):k||Q(m,z,g,null,h,u,Z,x,!1),N>0){if(N&16)l2(g,z,T,D,h,u,p);else if(N&2&&T.class!==D.class&&i(g,"class",null,D.class,p),N&4&&i(g,"style",T.style,D.style,p),N&8){const e1=z.dynamicProps;for(let J=0;J<e1.length;J++){const z1=e1[J],B1=T[z1],O2=D[z1];(O2!==B1||z1==="value")&&i(g,z1,B1,O2,p,m.children,h,u,A)}}N&1&&m.children!==z.children&&o(g,z.children)}else!k&&L==null&&l2(g,z,T,D,h,u,p);((q=D.onVnodeUpdated)||E)&&b1(()=>{q&&G1(q,h,z,m),E&&g2(z,m,h,"updated")},u)},A1=(m,z,h,u,p,x,k)=>{for(let g=0;g<z.length;g++){const N=m[g],L=z[g],E=N.el&&(N.type===u1||!t3(N,L)||N.shapeFlag&70)?C(N.el):h;y(N,L,E,null,u,p,x,k,!0)}},l2=(m,z,h,u,p,x,k)=>{if(h!==u){if(h!==c1)for(const g in h)!l4(g)&&!(g in u)&&i(m,g,h[g],null,k,z.children,p,x,A);for(const g in u){if(l4(g))continue;const N=u[g],L=h[g];N!==L&&g!=="value"&&i(m,g,L,N,k,z.children,p,x,A)}"value"in u&&i(m,"value",h.value,u.value)}},U1=(m,z,h,u,p,x,k,g,N)=>{const L=z.el=m?m.el:f(""),E=z.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:q}=z;q&&(g=g?g.concat(q):q),m==null?(s(L,h,u),s(E,h,u),N1(z.children,h,E,p,x,k,g,N)):T>0&&T&64&&D&&m.dynamicChildren?(A1(m.dynamicChildren,D,h,p,x,k,g),(z.key!=null||p&&z===p.subTree)&&G7(m,z,!0)):Q(m,z,h,E,p,x,k,g,N)},_2=(m,z,h,u,p,x,k,g,N)=>{z.slotScopeIds=g,m==null?z.shapeFlag&512?p.ctx.activate(z,h,u,k,N):d2(z,h,u,p,x,k,N):l3(m,z,N)},d2=(m,z,h,u,p,x,k)=>{const g=m.component=vm(m,u,p);if(P7(m)&&(g.ctx.renderer=K),hm(g),g.asyncDep){if(p&&p.registerDep(g,C1),!m.el){const N=g.subTree=I(H2);V(null,N,z,h)}return}C1(g,m,z,h,p,x,k)},l3=(m,z,h)=>{const u=z.component=m.component;if(Lt(m,z,h))if(u.asyncDep&&!u.asyncResolved){a1(u,z,h);return}else u.next=z,Ht(u.update),u.update();else z.el=m.el,u.vnode=z},C1=(m,z,h,u,p,x,k)=>{const g=()=>{if(m.isMounted){let{next:E,bu:T,u:D,parent:q,vnode:Z}=m,e1=E,J;x2(m,!1),E?(E.el=Z.el,a1(m,E,k)):E=Z,T&&o4(T),(J=E.props&&E.props.onVnodeBeforeUpdate)&&G1(J,q,E,Z),x2(m,!0);const z1=o6(m),B1=m.subTree;m.subTree=z1,y(B1,z1,C(B1.el),w(B1),m,p,x),E.el=z1.el,e1===null&&gt(m,z1.el),D&&b1(D,p),(J=E.props&&E.props.onVnodeUpdated)&&b1(()=>G1(J,q,E,Z),p)}else{let E;const{el:T,props:D}=z,{bm:q,m:Z,parent:e1}=m,J=H3(z);if(x2(m,!1),q&&o4(q),!J&&(E=D&&D.onVnodeBeforeMount)&&G1(E,e1,z),x2(m,!0),T&&G){const z1=()=>{m.subTree=o6(m),G(T,m.subTree,m,p,null)};J?z.type.__asyncLoader().then(()=>!m.isUnmounted&&z1()):z1()}else{const z1=m.subTree=o6(m);y(null,z1,h,u,m,p,x),z.el=z1.el}if(Z&&b1(Z,p),!J&&(E=D&&D.onVnodeMounted)){const z1=z;b1(()=>G1(E,e1,z1),p)}(z.shapeFlag&256||e1&&H3(e1.vnode)&&e1.vnode.shapeFlag&256)&&m.a&&b1(m.a,p),m.isMounted=!0,z=h=u=null}},N=m.effect=new J6(g,()=>n8(L),m.scope),L=m.update=()=>N.run();L.id=m.uid,x2(m,!0),L()},a1=(m,z,h)=>{z.component=m;const u=m.vnode.props;m.vnode=z,m.next=null,Yt(m,z.props,u,h),Jt(m,z.children,h),R2(),q5(),E2()},Q=(m,z,h,u,p,x,k,g,N=!1)=>{const L=m&&m.children,E=m?m.shapeFlag:0,T=z.children,{patchFlag:D,shapeFlag:q}=z;if(D>0){if(D&128){L2(L,T,h,u,p,x,k,g,N);return}else if(D&256){T1(L,T,h,u,p,x,k,g,N);return}}q&8?(E&16&&A(L,p,x),T!==L&&o(h,T)):E&16?q&16?L2(L,T,h,u,p,x,k,g,N):A(L,p,x,!0):(E&8&&o(h,""),q&16&&N1(T,h,u,p,x,k,g,N))},T1=(m,z,h,u,p,x,k,g,N)=>{m=m||j2,z=z||j2;const L=m.length,E=z.length,T=Math.min(L,E);let D;for(D=0;D<T;D++){const q=z[D]=N?C2(z[D]):Z1(z[D]);y(m[D],q,h,null,p,x,k,g,N)}L>E?A(m,p,x,!0,!1,T):N1(z,h,u,p,x,k,g,N,T)},L2=(m,z,h,u,p,x,k,g,N)=>{let L=0;const E=z.length;let T=m.length-1,D=E-1;for(;L<=T&&L<=D;){const q=m[L],Z=z[L]=N?C2(z[L]):Z1(z[L]);if(t3(q,Z))y(q,Z,h,null,p,x,k,g,N);else break;L++}for(;L<=T&&L<=D;){const q=m[T],Z=z[D]=N?C2(z[D]):Z1(z[D]);if(t3(q,Z))y(q,Z,h,null,p,x,k,g,N);else break;T--,D--}if(L>T){if(L<=D){const q=D+1,Z=q<E?z[q].el:u;for(;L<=D;)y(null,z[L]=N?C2(z[L]):Z1(z[L]),h,Z,p,x,k,g,N),L++}}else if(L>D)for(;L<=T;)g1(m[L],p,x,!0),L++;else{const q=L,Z=L,e1=new Map;for(L=Z;L<=D;L++){const w1=z[L]=N?C2(z[L]):Z1(z[L]);w1.key!=null&&e1.set(w1.key,L)}let J,z1=0;const B1=D-Z+1;let O2=!1,y5=0;const o3=new Array(B1);for(L=0;L<B1;L++)o3[L]=0;for(L=q;L<=T;L++){const w1=m[L];if(z1>=B1){g1(w1,p,x,!0);continue}let I1;if(w1.key!=null)I1=e1.get(w1.key);else for(J=Z;J<=D;J++)if(o3[J-Z]===0&&t3(w1,z[J])){I1=J;break}I1===void 0?g1(w1,p,x,!0):(o3[I1-Z]=L+1,I1>=y5?y5=I1:O2=!0,y(w1,z[I1],h,null,p,x,k,g,N),z1++)}const k5=O2?rm(o3):j2;for(J=k5.length-1,L=B1-1;L>=0;L--){const w1=Z+L,I1=z[w1],A5=w1+1<E?z[w1+1].el:u;o3[L]===0?y(null,I1,h,A5,p,x,k,g,N):O2&&(J<0||L!==k5[J]?F1(I1,h,A5,2):J--)}}},F1=(m,z,h,u,p=null)=>{const{el:x,type:k,transition:g,children:N,shapeFlag:L}=m;if(L&6){F1(m.component.subTree,z,h,u);return}if(L&128){m.suspense.move(z,h,u);return}if(L&64){k.move(m,z,h,K);return}if(k===u1){s(x,z,h);for(let T=0;T<N.length;T++)F1(N[T],z,h,u);s(m.anchor,z,h);return}if(k===m4){S(m,z,h);return}if(u!==2&&L&1&&g)if(u===0)g.beforeEnter(x),s(x,z,h),b1(()=>g.enter(x),p);else{const{leave:T,delayLeave:D,afterLeave:q}=g,Z=()=>s(x,z,h),e1=()=>{T(x,()=>{Z(),q&&q()})};D?D(x,Z,e1):e1()}else s(x,z,h)},g1=(m,z,h,u=!1,p=!1)=>{const{type:x,props:k,ref:g,children:N,dynamicChildren:L,shapeFlag:E,patchFlag:T,dirs:D}=m;if(g!=null&&w6(g,null,h,m,!0),E&256){z.ctx.deactivate(m);return}const q=E&1&&D,Z=!H3(m);let e1;if(Z&&(e1=k&&k.onVnodeBeforeUnmount)&&G1(e1,z,m),E&6)M(m.component,h,u);else{if(E&128){m.suspense.unmount(h,u);return}q&&g2(m,null,z,"beforeUnmount"),E&64?m.type.remove(m,z,h,p,K,u):L&&(x!==u1||T>0&&T&64)?A(L,z,h,!1,!0):(x===u1&&T&384||!p&&E&16)&&A(N,z,h),u&&q2(m)}(Z&&(e1=k&&k.onVnodeUnmounted)||q)&&b1(()=>{e1&&G1(e1,z,m),q&&g2(m,null,z,"unmounted")},h)},q2=m=>{const{type:z,el:h,anchor:u,transition:p}=m;if(z===u1){W3(h,u);return}if(z===m4){_(m);return}const x=()=>{r(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:k,delayLeave:g}=p,N=()=>k(h,x);g?g(m.el,x,N):N()}else x()},W3=(m,z)=>{let h;for(;m!==z;)h=v(m),r(m),m=h;r(z)},M=(m,z,h)=>{const{bum:u,scope:p,update:x,subTree:k,um:g}=m;u&&o4(u),p.stop(),x&&(x.active=!1,g1(k,m,z,h)),g&&b1(g,z),b1(()=>{m.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},A=(m,z,h,u=!1,p=!1,x=0)=>{for(let k=x;k<m.length;k++)g1(m[k],z,h,u,p)},w=m=>m.shapeFlag&6?w(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),R=(m,z,h)=>{m==null?z._vnode&&g1(z._vnode,null,null,!0):y(z._vnode||null,m,z,null,null,null,h),q5(),S7(),z._vnode=m},K={p:y,um:g1,m:F1,r:q2,mt:d2,mc:N1,pc:Q,pbc:A1,n:w,o:c};let f1,G;return a&&([f1,G]=a(K)),{render:R,hydrate:f1,createApp:am(R,f1)}}function x2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function G7(c,a,e=!1){const s=c.children,r=a.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const n=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=C2(r[i]),f.el=n.el),e||G7(n,f))}}function rm(c){const a=c.slice(),e=[0];let s,r,i,n,f;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const im=c=>c.__isTeleport,u1=Symbol(void 0),t8=Symbol(void 0),H2=Symbol(void 0),m4=Symbol(void 0),V3=[];let D1=null;function P1(c=!1){V3.push(D1=c?null:[])}function nm(){V3.pop(),D1=V3[V3.length-1]||null}let w3=1;function K5(c){w3+=c}function W7(c){return c.dynamicChildren=w3>0?D1||j2:null,nm(),w3>0&&D1&&D1.push(c),c}function u2(c,a,e,s,r,i){return W7($(c,a,e,s,r,i,!0))}function R4(c,a,e,s,r){return W7(I(c,a,e,s,r,!0))}function p4(c){return c?c.__v_isVNode===!0:!1}function t3(c,a){return c.type===a.type&&c.key===a.key}const E4="__vInternal",Z7=({key:c})=>c!=null?c:null,C4=({ref:c,ref_key:a,ref_for:e})=>c!=null?m1(c)||H1(c)||U(c)?{i:d1,r:c,k:a,f:!!e}:c:null;function $(c,a=null,e=null,s=0,r=null,i=c===u1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&Z7(a),ref:a&&C4(a),scopeId:y7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return f?(m8(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=m1(e)?8:16),w3>0&&!n&&D1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&D1.push(l),l}const I=fm;function fm(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===B7)&&(c=H2),p4(c)){const f=a3(c,a,!0);return e&&m8(f,e),w3>0&&!i&&D1&&(f.shapeFlag&6?D1[D1.indexOf(c)]=f:D1.push(f)),f.patchFlag|=-2,f}if(dm(c)&&(c=c.__vccOpts),a){a=lm(a);let{class:f,style:l}=a;f&&!m1(f)&&(a.class=Z6(f)),n1(l)&&(h7(l)&&!O(l)&&(l=L1({},l)),a.style=N4(l))}const n=m1(c)?1:xt(c)?128:im(c)?64:n1(c)?4:U(c)?2:0;return $(c,a,e,s,r,n,i,!0)}function lm(c){return c?h7(c)||E4 in c?L1({},c):c:null}function a3(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,f=a?mm(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&Z7(f),ref:a&&a.ref?e&&r?O(r)?r.concat(C4(a)):[r,C4(a)]:C4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==u1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&a3(c.ssContent),ssFallback:c.ssFallback&&a3(c.ssFallback),el:c.el,anchor:c.anchor}}function S1(c=" ",a=0){return I(t8,null,c,a)}function om(c,a){const e=I(m4,null,c);return e.staticCount=a,e}function tm(c="",a=!1){return a?(P1(),R4(H2,null,c)):I(H2,null,c)}function Z1(c){return c==null||typeof c=="boolean"?I(H2):O(c)?I(u1,null,c.slice()):typeof c=="object"?C2(c):I(t8,null,String(c))}function C2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:a3(c)}function m8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),m8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(E4 in a)?a._ctx=d1:r===3&&d1&&(d1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:d1},e=32):(a=String(a),s&64?(e=16,a=[S1(a)]):e=8);c.children=a,c.shapeFlag|=e}function mm(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=Z6([a.class,s.class]));else if(r==="style")a.style=N4([a.style,s.style]);else if(w4(r)){const i=a[r],n=s[r];n&&i!==n&&!(O(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function G1(c,a,e,s=null){O1(c,a,7,[e,s])}const Cm=I7();let zm=0;function vm(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||Cm,i={uid:zm++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:q7(s,r),emitsOptions:w7(s,r),emit:null,emitted:null,propsDefaults:c1,inheritAttrs:s.inheritAttrs,ctx:c1,data:c1,props:c1,attrs:c1,slots:c1,refs:c1,setupState:c1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Mt.bind(null,i),c.ce&&c.ce(i),i}let h1=null;const e3=c=>{h1=c,c.scope.on()},T2=()=>{h1&&h1.scope.off(),h1=null};function j7(c){return c.vnode.shapeFlag&4}let y3=!1;function hm(c,a=!1){y3=a;const{props:e,children:s}=c.vnode,r=j7(c);Kt(c,e,r,a),Qt(c,s);const i=r?Hm(c,a):void 0;return y3=!1,i}function Hm(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=H7(new Proxy(c.ctx,Ut));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Vm(c):null;e3(c),R2();const i=c2(s,c,0,[c.props,r]);if(E2(),T2(),a7(i)){if(i.then(T2,T2),a)return i.then(n=>{Y5(c,n,a)}).catch(n=>{T4(n,c,0)});c.asyncDep=i}else Y5(c,i,a)}else K7(c,a)}function Y5(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:n1(a)&&(c.setupState=p7(a)),K7(c,e)}let X5;function K7(c,a,e){const s=c.type;if(!c.render){if(!a&&X5&&!s.render){const r=s.template||l8(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=s,t=L1(L1({isCustomElement:i,delimiters:f},n),l);s.render=X5(r,t)}}c.render=s.render||q1}e3(c),R2(),It(c),E2(),T2()}function um(c){return new Proxy(c.attrs,{get(a,e){return y1(c,"get","$attrs"),a[e]}})}function Vm(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=um(c))},slots:c.slots,emit:c.emit,expose:a}}function D4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(p7(H7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in u3)return u3[e](c)},has(a,e){return e in a||e in u3}}))}const Mm=/(?:^|[-_])(\w)/g,pm=c=>c.replace(Mm,a=>a.toUpperCase()).replace(/[-_]/g,"");function Y7(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function X7(c,a,e=!1){let s=Y7(a);if(!s&&a.__file){const r=a.__file.match(/([^/\\]+)\.\w+$/);r&&(s=r[1])}if(!s&&c&&c.parent){const r=i=>{for(const n in i)if(i[n]===a)return n};s=r(c.components||c.parent.type.components)||r(c.appContext.components)}return s?pm(s):e?"App":"Anonymous"}function dm(c){return U(c)&&"__vccOpts"in c}const l1=(c,a)=>lt(c,a,y3);function _4(c,a,e){const s=arguments.length;return s===2?n1(a)&&!O(a)?p4(a)?I(c,null,[a]):I(c,a):I(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&p4(e)&&(e=[e]),I(c,a,e))}const Lm=Symbol(""),gm=()=>{{const c=a2(Lm);return c||ot("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),c}},xm="3.2.42",bm="http://www.w3.org/2000/svg",N2=typeof document<"u"?document:null,Q5=N2&&N2.createElement("template"),Sm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?N2.createElementNS(bm,c):N2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>N2.createTextNode(c),createComment:c=>N2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>N2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{Q5.innerHTML=s?`<svg>${c}</svg>`:c;const f=Q5.content;if(s){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Nm(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function wm(c,a,e){const s=c.style,r=m1(e);if(e&&!r){for(const i in e)y6(s,i,e[i]);if(a&&!m1(a))for(const i in a)e[i]==null&&y6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const J5=/\s*!important$/;function y6(c,a,e){if(O(e))e.forEach(s=>y6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=ym(c,a);J5.test(e)?c.setProperty(n3(s),e.replace(J5,""),"important"):c[s]=e}}const c0=["Webkit","Moz","ms"],t6={};function ym(c,a){const e=t6[a];if(e)return e;let s=X1(a);if(s!=="filter"&&s in c)return t6[a]=s;s=A4(s);for(let r=0;r<c0.length;r++){const i=c0[r]+s;if(i in c)return t6[a]=i}return a}const a0="http://www.w3.org/1999/xlink";function km(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(a0,a.slice(6,a.length)):c.setAttributeNS(a0,a,e);else{const i=po(a);e==null||i&&!Q0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function Am(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e==null?"":e;(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=Q0(e):e==null&&l==="string"?(e="",f=!0):l==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function U2(c,a,e,s){c.addEventListener(a,e,s)}function Pm(c,a,e,s){c.removeEventListener(a,e,s)}function Tm(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[f,l]=Fm(a);if(s){const t=i[a]=Em(s,r);U2(c,f,t,l)}else n&&(Pm(c,f,n,l),i[a]=void 0)}}const e0=/(?:Once|Passive|Capture)$/;function Fm(c){let a;if(e0.test(c)){a={};let s;for(;s=c.match(e0);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):n3(c.slice(2)),a]}let m6=0;const Bm=Promise.resolve(),Rm=()=>m6||(Bm.then(()=>m6=0),m6=Date.now());function Em(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;O1(Dm(s,e.value),a,5,[s])};return e.value=c,e.attached=Rm(),e}function Dm(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const s0=/^on[a-z]/,_m=(c,a,e,s,r=!1,i,n,f,l)=>{a==="class"?Nm(c,s,r):a==="style"?wm(c,e,s):w4(a)?j6(a)||Tm(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):qm(c,a,s,r))?Am(c,a,s,i,n,f,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),km(c,a,s,r))};function qm(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&s0.test(a)&&U(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||s0.test(a)&&m1(e)?!1:a in c}const r0=c=>{const a=c.props["onUpdate:modelValue"]||!1;return O(a)?e=>o4(a,e):a};function Om(c){c.target.composing=!0}function i0(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const $m={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=r0(r);const i=s||r.props&&r.props.type==="number";U2(c,a?"change":"input",n=>{if(n.target.composing)return;let f=c.value;e&&(f=f.trim()),i&&(f=H4(f)),c._assign(f)}),e&&U2(c,"change",()=>{c.value=c.value.trim()}),a||(U2(c,"compositionstart",Om),U2(c,"compositionend",i0),U2(c,"change",i0))},mounted(c,{value:a}){c.value=a==null?"":a},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=r0(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&H4(c.value)===a))return;const n=a==null?"":a;c.value!==n&&(c.value=n)}},Um=L1({patchProp:_m},Sm);let n0;function Im(){return n0||(n0=em(Um))}const Gm=(...c)=>{const a=Im().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Wm(s);if(!r)return;const i=a._component;!U(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function Wm(c){return m1(c)?document.querySelector(c):c}const D2=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Zm={};function jm(c,a,e,s,r,i){return P1(),u2("div")}const Km=D2(Zm,[["render",jm]]),Ym={},Xm=$("div",null," This is Home2 layouts. ",-1);function Qm(c,a,e,s,r,i){return P1(),u2(u1,null,[Xm,$("div",null,[$t(c.$slots,"default")])],64)}const f0=D2(Ym,[["render",Qm]]),Jm={components:{Home1:Km,Home2:f0},computed:{layout(){return console.log(this.$route.meta),this.$route.meta.layout||f0}}};function cC(c,a,e,s,r,i){const n=Y1("RouterView");return P1(),R4(qt(i.layout),null,{default:P2(()=>[I(n)]),_:1})}const aC=D2(Jm,[["render",cC]]),eC="modulepreload",sC=function(c){return"/BPN_HelloWorld/"+c},l0={},rC=function(a,e,s){if(!e||e.length===0)return a();const r=document.getElementsByTagName("link");return Promise.all(e.map(i=>{if(i=sC(i),i in l0)return;l0[i]=!0;const n=i.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!s)for(let o=r.length-1;o>=0;o--){const C=r[o];if(C.href===i&&(!n||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const t=document.createElement("link");if(t.rel=n?"stylesheet":eC,n||(t.as="script",t.crossOrigin=""),t.href=i,document.head.appendChild(t),n)return new Promise((o,C)=>{t.addEventListener("load",o),t.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const I2=typeof window<"u";function iC(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const X=Object.assign;function C6(c,a){const e={};for(const s in a){const r=a[s];e[s]=$1(r)?r.map(c):c(r)}return e}const M3=()=>{},$1=Array.isArray,nC=/\/$/,fC=c=>c.replace(nC,"");function z6(c,a,e="/"){let s,r={},i="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(s=a.slice(0,l),i=a.slice(l+1,f>-1?f:a.length),r=c(i)),f>-1&&(s=s||a.slice(0,f),n=a.slice(f,a.length)),s=mC(s!=null?s:a,e),{fullPath:s+(i&&"?")+i+n,path:s,query:r,hash:n}}function lC(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function o0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function oC(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&s3(a.matched[s],e.matched[r])&&Q7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function s3(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function Q7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!tC(c[e],a[e]))return!1;return!0}function tC(c,a){return $1(c)?t0(c,a):$1(a)?t0(a,c):c===a}function t0(c,a){return $1(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function mC(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var k3;(function(c){c.pop="pop",c.push="push"})(k3||(k3={}));var p3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(p3||(p3={}));function CC(c){if(!c)if(I2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),fC(c)}const zC=/^[^#]+#/;function vC(c,a){return c.replace(zC,"#")+a}function hC(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const q4=()=>({left:window.pageXOffset,top:window.pageYOffset});function HC(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=hC(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function m0(c,a){return(history.state?history.state.position-a:-1)+c}const k6=new Map;function uC(c,a){k6.set(c,a)}function VC(c){const a=k6.get(c);return k6.delete(c),a}let MC=()=>location.protocol+"//"+location.host;function J7(c,a){const{pathname:e,search:s,hash:r}=a,i=c.indexOf("#");if(i>-1){let f=r.includes(c.slice(i))?c.slice(i).length:1,l=r.slice(f);return l[0]!=="/"&&(l="/"+l),o0(l,"")}return o0(e,c)+s+r}function pC(c,a,e,s){let r=[],i=[],n=null;const f=({state:v})=>{const H=J7(c,location),b=e.value,y=a.value;let B=0;if(v){if(e.value=H,a.value=v,n&&n===b){n=null;return}B=y?v.position-y.position:0}else s(H);r.forEach(V=>{V(e.value,b,{delta:B,type:k3.pop,direction:B?B>0?p3.forward:p3.back:p3.unknown})})};function l(){n=e.value}function t(v){r.push(v);const H=()=>{const b=r.indexOf(v);b>-1&&r.splice(b,1)};return i.push(H),H}function o(){const{history:v}=window;!v.state||v.replaceState(X({},v.state,{scroll:q4()}),"")}function C(){for(const v of i)v();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o),{pauseListeners:l,listen:t,destroy:C}}function C0(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?q4():null}}function dC(c){const{history:a,location:e}=window,s={value:J7(c,e)},r={value:a.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const C=c.indexOf("#"),v=C>-1?(e.host&&document.querySelector("base")?c:c.slice(C))+l:MC()+c+l;try{a[o?"replaceState":"pushState"](t,"",v),r.value=t}catch(H){console.error(H),e[o?"replace":"assign"](v)}}function n(l,t){const o=X({},a.state,C0(r.value.back,l,r.value.forward,!0),t,{position:r.value.position});i(l,o,!0),s.value=l}function f(l,t){const o=X({},r.value,a.state,{forward:l,scroll:q4()});i(o.current,o,!0);const C=X({},C0(s.value,l,null),{position:o.position+1},t);i(l,C,!1),s.value=l}return{location:s,state:r,push:f,replace:n}}function LC(c){c=CC(c);const a=dC(c),e=pC(c,a.state,a.location,a.replace);function s(i,n=!0){n||e.pauseListeners(),history.go(i)}const r=X({location:"",base:c,go:s,createHref:vC.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function gC(c){return typeof c=="string"||c&&typeof c=="object"}function c9(c){return typeof c=="string"||typeof c=="symbol"}const t2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},a9=Symbol("");var z0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(z0||(z0={}));function r3(c,a){return X(new Error,{type:c,[a9]:!0},a)}function Q1(c,a){return c instanceof Error&&a9 in c&&(a==null||!!(c.type&a))}const v0="[^/]+?",xC={sensitive:!1,strict:!1,start:!0,end:!0},bC=/[.+*?^${}()[\]/\\]/g;function SC(c,a){const e=X({},xC,a),s=[];let r=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(r+="/");for(let C=0;C<t.length;C++){const v=t[C];let H=40+(e.sensitive?.25:0);if(v.type===0)C||(r+="/"),r+=v.value.replace(bC,"\\$&"),H+=40;else if(v.type===1){const{value:b,repeatable:y,optional:B,regexp:V}=v;i.push({name:b,repeatable:y,optional:B});const d=V||v0;if(d!==v0){H+=10;try{new RegExp(`(${d})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${b}" (${d}): `+_.message)}}let S=y?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;C||(S=B&&t.length<2?`(?:/${S})`:"/"+S),B&&(S+="?"),r+=S,H+=20,B&&(H+=-8),y&&(H+=-20),d===".*"&&(H+=-50)}o.push(H)}s.push(o)}if(e.strict&&e.end){const t=s.length-1;s[t][s[t].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const n=new RegExp(r,e.sensitive?"":"i");function f(t){const o=t.match(n),C={};if(!o)return null;for(let v=1;v<o.length;v++){const H=o[v]||"",b=i[v-1];C[b.name]=H&&b.repeatable?H.split("/"):H}return C}function l(t){let o="",C=!1;for(const v of c){(!C||!o.endsWith("/"))&&(o+="/"),C=!1;for(const H of v)if(H.type===0)o+=H.value;else if(H.type===1){const{value:b,repeatable:y,optional:B}=H,V=b in t?t[b]:"";if($1(V)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const d=$1(V)?V.join("/"):V;if(!d)if(B)v.length<2&&(o.endsWith("/")?o=o.slice(0,-1):C=!0);else throw new Error(`Missing required param "${b}"`);o+=d}}return o||"/"}return{re:n,score:s,keys:i,parse:f,stringify:l}}function NC(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function wC(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const i=NC(s[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-s.length)===1){if(h0(s))return 1;if(h0(r))return-1}return r.length-s.length}function h0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const yC={type:0,value:""},kC=/[a-zA-Z0-9_]/;function AC(c){if(!c)return[[]];if(c==="/")return[[yC]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(H){throw new Error(`ERR (${e})/"${t}": ${H}`)}let e=0,s=e;const r=[];let i;function n(){i&&r.push(i),i=[]}let f=0,l,t="",o="";function C(){!t||(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function v(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(t&&C(),n()):l===":"?(C(),e=1):v();break;case 4:v(),e=s;break;case 1:l==="("?e=2:kC.test(l)?v():(C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),C(),n(),r}function PC(c,a,e){const s=SC(AC(c.path),e),r=X(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function TC(c,a){const e=[],s=new Map;a=V0({strict:!1,end:!0,sensitive:!1},a);function r(o){return s.get(o)}function i(o,C,v){const H=!v,b=FC(o);b.aliasOf=v&&v.record;const y=V0(a,o),B=[b];if("alias"in o){const S=typeof o.alias=="string"?[o.alias]:o.alias;for(const _ of S)B.push(X({},b,{components:v?v.record.components:b.components,path:_,aliasOf:v?v.record:b}))}let V,d;for(const S of B){const{path:_}=S;if(C&&_[0]!=="/"){const W=C.record.path,i1=W[W.length-1]==="/"?"":"/";S.path=C.record.path+(_&&i1+_)}if(V=PC(S,C,y),v?v.alias.push(V):(d=d||V,d!==V&&d.alias.push(V),H&&o.name&&!u0(V)&&n(o.name)),b.children){const W=b.children;for(let i1=0;i1<W.length;i1++)i(W[i1],V,v&&v.children[i1])}v=v||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&l(V)}return d?()=>{n(d)}:M3}function n(o){if(c9(o)){const C=s.get(o);C&&(s.delete(o),e.splice(e.indexOf(C),1),C.children.forEach(n),C.alias.forEach(n))}else{const C=e.indexOf(o);C>-1&&(e.splice(C,1),o.record.name&&s.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let C=0;for(;C<e.length&&wC(o,e[C])>=0&&(o.record.path!==e[C].record.path||!e9(o,e[C]));)C++;e.splice(C,0,o),o.record.name&&!u0(o)&&s.set(o.record.name,o)}function t(o,C){let v,H={},b,y;if("name"in o&&o.name){if(v=s.get(o.name),!v)throw r3(1,{location:o});y=v.record.name,H=X(H0(C.params,v.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&H0(o.params,v.keys.map(d=>d.name))),b=v.stringify(H)}else if("path"in o)b=o.path,v=e.find(d=>d.re.test(b)),v&&(H=v.parse(b),y=v.record.name);else{if(v=C.name?s.get(C.name):e.find(d=>d.re.test(C.path)),!v)throw r3(1,{location:o,currentLocation:C});y=v.record.name,H=X({},C.params,o.params),b=v.stringify(H)}const B=[];let V=v;for(;V;)B.unshift(V.record),V=V.parent;return{name:y,path:b,params:H,matched:B,meta:RC(B)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:r}}function H0(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function FC(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:BC(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function BC(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function u0(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function RC(c){return c.reduce((a,e)=>X(a,e.meta),{})}function V0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function e9(c,a){return a.children.some(e=>e===c||e9(c,e))}const s9=/#/g,EC=/&/g,DC=/\//g,_C=/=/g,qC=/\?/g,r9=/\+/g,OC=/%5B/g,$C=/%5D/g,i9=/%5E/g,UC=/%60/g,n9=/%7B/g,IC=/%7C/g,f9=/%7D/g,GC=/%20/g;function C8(c){return encodeURI(""+c).replace(IC,"|").replace(OC,"[").replace($C,"]")}function WC(c){return C8(c).replace(n9,"{").replace(f9,"}").replace(i9,"^")}function A6(c){return C8(c).replace(r9,"%2B").replace(GC,"+").replace(s9,"%23").replace(EC,"%26").replace(UC,"`").replace(n9,"{").replace(f9,"}").replace(i9,"^")}function ZC(c){return A6(c).replace(_C,"%3D")}function jC(c){return C8(c).replace(s9,"%23").replace(qC,"%3F")}function KC(c){return c==null?"":jC(c).replace(DC,"%2F")}function d4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function YC(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(r9," "),n=i.indexOf("="),f=d4(n<0?i:i.slice(0,n)),l=n<0?null:d4(i.slice(n+1));if(f in a){let t=a[f];$1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function M0(c){let a="";for(let e in c){const s=c[e];if(e=ZC(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}($1(s)?s.map(i=>i&&A6(i)):[s&&A6(s)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function XC(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=$1(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const QC=Symbol(""),p0=Symbol(""),z8=Symbol(""),l9=Symbol(""),P6=Symbol("");function m3(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function z2(c,a,e,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((n,f)=>{const l=C=>{C===!1?f(r3(4,{from:e,to:a})):C instanceof Error?f(C):gC(C)?f(r3(2,{from:a,to:C})):(i&&s.enterCallbacks[r]===i&&typeof C=="function"&&i.push(C),n())},t=c.call(s&&s.instances[r],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(C=>f(C))})}function v6(c,a,e,s){const r=[];for(const i of c)for(const n in i.components){let f=i.components[n];if(!(a!=="beforeRouteEnter"&&!i.instances[n]))if(JC(f)){const t=(f.__vccOpts||f)[a];t&&r.push(z2(t,e,s,i,n))}else{let l=f();r.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const o=iC(t)?t.default:t;i.components[n]=o;const v=(o.__vccOpts||o)[a];return v&&z2(v,e,s,i,n)()}))}}return r}function JC(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function d0(c){const a=a2(z8),e=a2(l9),s=l1(()=>a.resolve(X2(c.to))),r=l1(()=>{const{matched:l}=s.value,{length:t}=l,o=l[t-1],C=e.matched;if(!o||!C.length)return-1;const v=C.findIndex(s3.bind(null,o));if(v>-1)return v;const H=L0(l[t-2]);return t>1&&L0(o)===H&&C[C.length-1].path!==H?C.findIndex(s3.bind(null,l[t-2])):v}),i=l1(()=>r.value>-1&&sz(e.params,s.value.params)),n=l1(()=>r.value>-1&&r.value===e.matched.length-1&&Q7(e.params,s.value.params));function f(l={}){return ez(l)?a[X2(c.replace)?"replace":"push"](X2(c.to)).catch(M3):Promise.resolve()}return{route:s,href:l1(()=>s.value.href),isActive:i,isExactActive:n,navigate:f}}const cz=E3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:d0,setup(c,{slots:a}){const e=R3(d0(c)),{options:s}=a2(z8),r=l1(()=>({[g0(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[g0(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:_4("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),az=cz;function ez(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function sz(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!$1(r)||r.length!==s.length||s.some((i,n)=>i!==r[n]))return!1}return!0}function L0(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const g0=(c,a,e)=>c!=null?c:a!=null?a:e,rz=E3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=a2(P6),r=l1(()=>c.route||s.value),i=a2(p0,0),n=l1(()=>{let t=X2(i);const{matched:o}=r.value;let C;for(;(C=o[t])&&!C.components;)t++;return t}),f=l1(()=>r.value.matched[n.value]);t4(p0,l1(()=>n.value+1)),t4(QC,f),t4(P6,r);const l=st();return h3(()=>[l.value,f.value,c.name],([t,o,C],[v,H,b])=>{o&&(o.instances[C]=t,H&&H!==o&&t&&t===v&&(o.leaveGuards.size||(o.leaveGuards=H.leaveGuards),o.updateGuards.size||(o.updateGuards=H.updateGuards))),t&&o&&(!H||!s3(o,H)||!v)&&(o.enterCallbacks[C]||[]).forEach(y=>y(t))},{flush:"post"}),()=>{const t=r.value,o=c.name,C=f.value,v=C&&C.components[o];if(!v)return x0(e.default,{Component:v,route:t});const H=C.props[o],b=H?H===!0?t.params:typeof H=="function"?H(t):H:null,B=_4(v,X({},b,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(C.instances[o]=null)},ref:l}));return x0(e.default,{Component:B,route:t})||B}}});function x0(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const iz=rz;function nz(c){const a=TC(c.routes,c),e=c.parseQuery||YC,s=c.stringifyQuery||M0,r=c.history,i=m3(),n=m3(),f=m3(),l=rt(t2);let t=t2;I2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=C6.bind(null,M=>""+M),C=C6.bind(null,KC),v=C6.bind(null,d4);function H(M,A){let w,R;return c9(M)?(w=a.getRecordMatcher(M),R=A):R=M,a.addRoute(R,w)}function b(M){const A=a.getRecordMatcher(M);A&&a.removeRoute(A)}function y(){return a.getRoutes().map(M=>M.record)}function B(M){return!!a.getRecordMatcher(M)}function V(M,A){if(A=X({},A||l.value),typeof M=="string"){const m=z6(e,M,A.path),z=a.resolve({path:m.path},A),h=r.createHref(m.fullPath);return X(m,z,{params:v(z.params),hash:d4(m.hash),redirectedFrom:void 0,href:h})}let w;if("path"in M)w=X({},M,{path:z6(e,M.path,A.path).path});else{const m=X({},M.params);for(const z in m)m[z]==null&&delete m[z];w=X({},M,{params:C(M.params)}),A.params=C(A.params)}const R=a.resolve(w,A),K=M.hash||"";R.params=o(v(R.params));const f1=lC(s,X({},M,{hash:WC(K),path:R.path})),G=r.createHref(f1);return X({fullPath:f1,hash:K,query:s===M0?XC(M.query):M.query||{}},R,{redirectedFrom:void 0,href:G})}function d(M){return typeof M=="string"?z6(e,M,l.value.path):X({},M)}function S(M,A){if(t!==M)return r3(8,{from:A,to:M})}function _(M){return o1(M)}function W(M){return _(X(d(M),{replace:!0}))}function i1(M){const A=M.matched[M.matched.length-1];if(A&&A.redirect){const{redirect:w}=A;let R=typeof w=="function"?w(M):w;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=d(R):{path:R},R.params={}),X({query:M.query,hash:M.hash,params:"path"in R?{}:M.params},R)}}function o1(M,A){const w=t=V(M),R=l.value,K=M.state,f1=M.force,G=M.replace===!0,m=i1(w);if(m)return o1(X(d(m),{state:typeof m=="object"?X({},K,m.state):K,force:f1,replace:G}),A||w);const z=w;z.redirectedFrom=A;let h;return!f1&&oC(s,R,w)&&(h=r3(16,{to:z,from:R}),L2(R,R,!0,!1)),(h?Promise.resolve(h):M1(z,R)).catch(u=>Q1(u)?Q1(u,2)?u:T1(u):a1(u,z,R)).then(u=>{if(u){if(Q1(u,2))return o1(X({replace:G},d(u.to),{state:typeof u.to=="object"?X({},K,u.to.state):K,force:f1}),A||z)}else u=l2(z,R,!0,G,K);return A1(z,R,u),u})}function N1(M,A){const w=S(M,A);return w?Promise.reject(w):Promise.resolve()}function M1(M,A){let w;const[R,K,f1]=fz(M,A);w=v6(R.reverse(),"beforeRouteLeave",M,A);for(const m of R)m.leaveGuards.forEach(z=>{w.push(z2(z,M,A))});const G=N1.bind(null,M,A);return w.push(G),$2(w).then(()=>{w=[];for(const m of i.list())w.push(z2(m,M,A));return w.push(G),$2(w)}).then(()=>{w=v6(K,"beforeRouteUpdate",M,A);for(const m of K)m.updateGuards.forEach(z=>{w.push(z2(z,M,A))});return w.push(G),$2(w)}).then(()=>{w=[];for(const m of M.matched)if(m.beforeEnter&&!A.matched.includes(m))if($1(m.beforeEnter))for(const z of m.beforeEnter)w.push(z2(z,M,A));else w.push(z2(m.beforeEnter,M,A));return w.push(G),$2(w)}).then(()=>(M.matched.forEach(m=>m.enterCallbacks={}),w=v6(f1,"beforeRouteEnter",M,A),w.push(G),$2(w))).then(()=>{w=[];for(const m of n.list())w.push(z2(m,M,A));return w.push(G),$2(w)}).catch(m=>Q1(m,8)?m:Promise.reject(m))}function A1(M,A,w){for(const R of f.list())R(M,A,w)}function l2(M,A,w,R,K){const f1=S(M,A);if(f1)return f1;const G=A===t2,m=I2?history.state:{};w&&(R||G?r.replace(M.fullPath,X({scroll:G&&m&&m.scroll},K)):r.push(M.fullPath,K)),l.value=M,L2(M,A,w,G),T1()}let U1;function _2(){U1||(U1=r.listen((M,A,w)=>{if(!W3.listening)return;const R=V(M),K=i1(R);if(K){o1(X(K,{replace:!0}),R).catch(M3);return}t=R;const f1=l.value;I2&&uC(m0(f1.fullPath,w.delta),q4()),M1(R,f1).catch(G=>Q1(G,12)?G:Q1(G,2)?(o1(G.to,R).then(m=>{Q1(m,20)&&!w.delta&&w.type===k3.pop&&r.go(-1,!1)}).catch(M3),Promise.reject()):(w.delta&&r.go(-w.delta,!1),a1(G,R,f1))).then(G=>{G=G||l2(R,f1,!1),G&&(w.delta&&!Q1(G,8)?r.go(-w.delta,!1):w.type===k3.pop&&Q1(G,20)&&r.go(-1,!1)),A1(R,f1,G)}).catch(M3)}))}let d2=m3(),l3=m3(),C1;function a1(M,A,w){T1(M);const R=l3.list();return R.length?R.forEach(K=>K(M,A,w)):console.error(M),Promise.reject(M)}function Q(){return C1&&l.value!==t2?Promise.resolve():new Promise((M,A)=>{d2.add([M,A])})}function T1(M){return C1||(C1=!M,_2(),d2.list().forEach(([A,w])=>M?w(M):A()),d2.reset()),M}function L2(M,A,w,R){const{scrollBehavior:K}=c;if(!I2||!K)return Promise.resolve();const f1=!w&&VC(m0(M.fullPath,0))||(R||!w)&&history.state&&history.state.scroll||null;return x7().then(()=>K(M,A,f1)).then(G=>G&&HC(G)).catch(G=>a1(G,M,A))}const F1=M=>r.go(M);let g1;const q2=new Set,W3={currentRoute:l,listening:!0,addRoute:H,removeRoute:b,hasRoute:B,getRoutes:y,resolve:V,options:c,push:_,replace:W,go:F1,back:()=>F1(-1),forward:()=>F1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:f.add,onError:l3.add,isReady:Q,install(M){const A=this;M.component("RouterLink",az),M.component("RouterView",iz),M.config.globalProperties.$router=A,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>X2(l)}),I2&&!g1&&l.value===t2&&(g1=!0,_(r.location).catch(K=>{}));const w={};for(const K in t2)w[K]=l1(()=>l.value[K]);M.provide(z8,A),M.provide(l9,R3(w)),M.provide(P6,l);const R=M.unmount;q2.add(M),M.unmount=function(){q2.delete(M),q2.size<1&&(t=t2,U1&&U1(),U1=null,l.value=t2,g1=!1,C1=!1),R()}}};return W3}function $2(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function fz(c,a){const e=[],s=[],r=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const f=a.matched[n];f&&(c.matched.find(t=>s3(t,f))?s.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>s3(t,l))||r.push(l))}return[e,s,r]}const lz={},oz={class:"bg-red-200"},tz={class:"transition ease-in-out delay-150 m-2 p-2 rounded-lg text-white bg-sky-700 font-Calistoga hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300"},mz={class:"transition ease-in-out delay-150 m-2 p-2 rounded-lg text-white bg-sky-700 font-Calistoga hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300"},Cz=om('<p class="box-decoration-slice m-1 p-1 rounded-md text-black text-2xl font-bold bg-rose-300 font-Calistoga"><a class="text-4xl">B</a>[<a class="text-white">hannujaya<a>]</a></a> <a class="text-4xl">P</a>{<a class="text-white">hattanan</a><a>} </a><a class="text-4xl">N</a>(<a class="text-white">ichakan<a>)</a></a></p>',1),zz={class:"bg-sky-200"},vz=$("div",null,null,-1),hz={class:"flex justify-center items-center min-h-screen"},Hz={class:"w-1/2 text-center px-5 py-9 backdrop-blur-sm bg-rose-300/30 rounded-lg animate-fadeIn"},uz=$("div",{class:"text-5xl font-Titan text-black font-Calistoga"}," BPN ",-1),Vz=$("div",{class:"text-4xl font-bold font-Calistoga text-white"}," We Are The Best!? ",-1),Mz=$("div",{class:"mt-10 text-xl font-itim w-2/3 mx-auto text-white font-Calistoga"},[$("a",{class:"text-black text-2xl"},"Successful and unsuccessful"),S1(" people do not vary greatly in their abilities. They vary in their desires to reach their potential ")],-1),pz={class:"mt-4"},dz={class:"text-xl font-bold text-white font-itim p-3 rounded-lg bg-yellow-200 shadow-xl shadow-yeklow-200/50 transition ease-in-out delay-100 hover:bg-rose-300 hover:shadow-rose-300/50 font-Calistoga"};function Lz(c,a){const e=Y1("font-awesome-icon"),s=Y1("RouterLink"),r=Y1("router-link");return P1(),u2(u1,null,[$("div",oz,[$("button",tz,[I(s,{to:"/"},{default:P2(()=>[S1(" Home "),I(e,{icon:"fa-solid fa-house"})]),_:1})]),$("button",mz,[I(s,{to:"/profile"},{default:P2(()=>[S1(" Profile "),I(e,{icon:"fa-solid fa-user"})]),_:1})])]),Cz,$("div",zz,[vz,$("div",hz,[$("div",Hz,[uz,Vz,Mz,$("div",pz,[$("button",dz,[I(r,{to:"/Profile"},{default:P2(()=>[S1(" PROFILE PAGE ")]),_:1})])])])])])],64)}const gz=D2(lz,[["render",Lz]]);const xz={props:{name:{type:String,default:"Phattanan"},nickname:{type:String,default:"Mind"},birthday:{type:String,default:"5 July 2004"},content:{type:String,default:"Ku82"},image:{type:String,default:"/assets/images/pleang.jpg"}},methods:{getUrlImage(c){return{"background-image":'url("./src/'+c+'")'}},getUrl(c){return URL("./src/'+ imagePath+'")}}},bz={class:"rounded-full text-xl text-white w-24 bg-sky-300 font-semibold m-2 p-3 text-center font-Calistoga"},Sz=$("p",{class:"text-black font-Sigmar One"},'"Hello Profile"',-1),Nz={class:"mx auto shadow-md rounded-lg box-content p-10 border-2 border-white bg-amber-100 transition duration-300 hover:bg-pink-200"},wz={class:"text-black text-xl font-bold font-Calistoga text-center"},yz={class:"text-black text-xl font-medium font-Calistoga text-center"},kz={class:"text-black text-xl font-medium font-Calistoga text-center"},Az={class:"text-black text-xl font-medium font-Calistoga text-center"};function Pz(c,a,e,s,r,i){const n=Y1("profilecard"),f=Y1("Br"),l=Y1("font-awesome-icon");return P1(),u2(u1,null,[$("div",null,[I(n)]),$("div",bz,[Sz,S1(),I(f),I(l,{icon:"fa-brands fa-facebook",class:"transition ease-in-out delay-150 text-white text-3xl hover:-translate-y-1 hover:scale-125 hover:text-sky-700 duration-300"}),S1(),I(f),S1(),I(f),I(l,{icon:"fa-brands fa-instagram",class:"transition ease-in-out delay-150 text-white text-3xl hover:-translate-y-1 hover:scale-125 hover:text-red-700 duration-300"}),S1(),I(f),S1(),I(f),I(l,{icon:"fa-solid fa-music",class:"transition ease-in-out delay-150 text-white text-3xl hover:-translate-y-1 hover:scale-125 hover:text-green-700 duration-300"}),S1(),I(f),S1(),I(f)]),$("body",null,[$("div",Nz,[$("div",{class:"rounded-full w-64 h-64 bg-cover object-center mx-auto",style:N4(i.getUrlImage(e.image))},null,4),$("div",wz,G2(e.name),1),$("div",yz,G2(e.nickname),1),$("div",kz,G2(e.birthday),1),$("div",Az,G2(e.content),1)])])],64)}const Tz=D2(xz,[["render",Pz]]),Fz={data(){return{members:[{name:"Bhanujaya Smizdhanond",nickname:"-Cream-",birthday:"8 January 2004",content:"Ku82",image:"/assets//images/cream.jpg"},{name:"Phattanan Eksakul",nickname:"-Mind-",birthday:"5 July 2004",content:"Ku82",image:"/assets/images/mind.jpeg"},{name:"Nichakan Nernngam",nickname:"-Pleang-",birthday:"7 March 2004",content:"Ku82",image:"/assets/images/pleang.jpg"}]}},components:{profilecard:Tz}},Bz={class:"bg-pink-200 h-18"},Rz={class:"transition ease-in-out delay-150 m-2 p-2 rounded-lg text-black bg-amber-200 font-Calistoga hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300"},Ez={class:"transition ease-in-out delay-150 m-2 p-2 rounded-lg text-white bg-amber-200 font-Calistoga hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-sky-700 duration-300"},Dz={class:"flex flex-row mx auto shadow-md rounded box-content p-10 border-t-4 border-Slate-800 transition duration-300 bg-indigo-200"},_z=$("div",{class:"flex flex-row mx auto shadow-md rounded box-content p-20 transition duration-300 bg-indigo-200"},null,-1);function qz(c,a,e,s,r,i){const n=Y1("font-awesome-icon"),f=Y1("RouterLink"),l=Y1("profilecard");return P1(),u2(u1,null,[$("nav",Bz,[$("button",Rz,[I(f,{to:"/",class:"font-Calistoga text-white"},{default:P2(()=>[S1(" HOME"),I(n,{icon:"fa-solid fa-house"})]),_:1})]),$("button",Ez,[I(f,{to:"/Profile",class:"font-Calistoga text-white"},{default:P2(()=>[S1(" Profile "),I(n,{icon:"fa-solid fa-user"})]),_:1})]),$("div",null,[I(n,{icon:"fa-solid fa-cloud",class:"text-white text-2xl"}),I(n,{icon:"fa-regular fa-heart",class:"text-grey text-2xl"}),I(n,{icon:"fa-solid fa-users",class:"text-white text-2xl"}),I(n,{icon:"fa-solid fa-ghost",class:"text-grey text-2xl"})])]),$("body",null,[$("div",Dz,[(P1(!0),u2(u1,null,Ot(r.members,t=>(P1(),R4(l,{class:"text-blue-300 w-1/3",key:t.id,name:t.name,nickname:t.nickname,birthday:t.birthday,content:t.content,image:t.image},null,8,["name","nickname","birthday","content","image"]))),128))]),_z])],64)}const Oz=D2(Fz,[["render",qz]]),$z={data(){return{count:0,dropdown:!1,name:"whale"}}},Uz=$("div",null,"this is onclick dropdown",-1),Iz={key:0,class:"rounded-lg bg-purple-200"},Gz=$("div",null,"This is onchange.",-1),Wz=$("div",null,"This is v-model",-1);function Zz(c,a,e,s,r,i){return P1(),u2("div",null,[Uz,$("button",{class:"p-2 bg-green-200",onClick:a[0]||(a[0]=n=>r.dropdown=!r.dropdown)},"menu"),r.dropdown?(P1(),u2("div",Iz)):tm("",!0),Gz,$("input",{class:"p-2 border-2",type:"text",onChange:a[1]||(a[1]=n=>r.count++)},null,32),$("div",null," count is "+G2(r.count),1),Wz,_t($("input",{"onUpdate:modelValue":a[2]||(a[2]=n=>r.name=n)},null,512),[[$m,r.name]]),$("div",null,G2(r.name),1)])}const jz=D2($z,[["render",Zz]]),Kz=nz({history:LC("/BPN_HelloWorld/"),routes:[{path:"/",name:"home",component:gz,meta:{layout:"HomeView"}},{path:"/profile",name:"profile",component:Oz,meta:{layout:"HomeView"}},{path:"/form",name:"form",component:jz,meta:{layout:"HomeView"}},{path:"/about",name:"about",component:()=>rC(()=>import("./AboutView.e27b5456.js"),["assets/AboutView.e27b5456.js","assets/AboutView.4d995ba2.css"])}]});function b0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function P(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?b0(Object(e),!0).forEach(function(s){v1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):b0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function L4(c){return L4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L4(c)}function Yz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function S0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Xz(c,a,e){return a&&S0(c.prototype,a),e&&S0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function v8(c,a){return Jz(c)||av(c,a)||o9(c,a)||sv()}function D3(c){return Qz(c)||cv(c)||o9(c)||ev()}function Qz(c){if(Array.isArray(c))return T6(c)}function Jz(c){if(Array.isArray(c))return c}function cv(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function av(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function o9(c,a){if(!!c){if(typeof c=="string")return T6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return T6(c,a)}}function T6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function ev(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var N0=function(){},h8={},t9={},m9=null,C9={mark:N0,measure:N0};try{typeof window<"u"&&(h8=window),typeof document<"u"&&(t9=document),typeof MutationObserver<"u"&&(m9=MutationObserver),typeof performance<"u"&&(C9=performance)}catch{}var rv=h8.navigator||{},w0=rv.userAgent,y0=w0===void 0?"":w0,V2=h8,r1=t9,k0=m9,J3=C9;V2.document;var f2=!!r1.documentElement&&!!r1.head&&typeof r1.addEventListener=="function"&&typeof r1.createElement=="function",z9=~y0.indexOf("MSIE")||~y0.indexOf("Trident/"),c4,a4,e4,s4,r4,s2="___FONT_AWESOME___",F6=16,v9="fa",h9="svg-inline--fa",F2="data-fa-i2svg",B6="data-fa-pseudo-element",iv="data-fa-pseudo-element-pending",H8="data-prefix",u8="data-icon",A0="fontawesome-i2svg",nv="async",fv=["HTML","HEAD","STYLE","SCRIPT"],H9=function(){try{return!0}catch{return!1}}(),s1="classic",t1="sharp",V8=[s1,t1];function _3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[s1]}})}var A3=_3((c4={},v1(c4,s1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v1(c4,t1,{fa:"solid",fass:"solid","fa-solid":"solid"}),c4)),P3=_3((a4={},v1(a4,s1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(a4,t1,{solid:"fass"}),a4)),T3=_3((e4={},v1(e4,s1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(e4,t1,{fass:"fa-solid"}),e4)),lv=_3((s4={},v1(s4,s1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(s4,t1,{"fa-solid":"fass"}),s4)),ov=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,u9="fa-layers-text",tv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,mv=_3((r4={},v1(r4,s1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(r4,t1,{900:"fass"}),r4)),V9=[1,2,3,4,5,6,7,8,9,10],Cv=V9.concat([11,12,13,14,15,16,17,18,19,20]),zv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],y2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F3=new Set;Object.keys(P3[s1]).map(F3.add.bind(F3));Object.keys(P3[t1]).map(F3.add.bind(F3));var vv=[].concat(V8,D3(F3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",y2.GROUP,y2.SWAP_OPACITY,y2.PRIMARY,y2.SECONDARY]).concat(V9.map(function(c){return"".concat(c,"x")})).concat(Cv.map(function(c){return"w-".concat(c)})),d3=V2.FontAwesomeConfig||{};function hv(c){var a=r1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Hv(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(r1&&typeof r1.querySelector=="function"){var uv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];uv.forEach(function(c){var a=v8(c,2),e=a[0],s=a[1],r=Hv(hv(e));r!=null&&(d3[s]=r)})}var M9={styleDefault:"solid",familyDefault:"classic",cssPrefix:v9,replacementClass:h9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d3.familyPrefix&&(d3.cssPrefix=d3.familyPrefix);var i3=P(P({},M9),d3);i3.autoReplaceSvg||(i3.observeMutations=!1);var F={};Object.keys(M9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){i3[c]=e,L3.forEach(function(s){return s(F)})},get:function(){return i3[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){i3.cssPrefix=a,L3.forEach(function(e){return e(F)})},get:function(){return i3.cssPrefix}});V2.FontAwesomeConfig=F;var L3=[];function Vv(c){return L3.push(c),function(){L3.splice(L3.indexOf(c),1)}}var m2=F6,K1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mv(c){if(!(!c||!f2)){var a=r1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=r1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return r1.head.insertBefore(a,s),c}}var pv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B3(){for(var c=12,a="";c-- >0;)a+=pv[Math.random()*62|0];return a}function f3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function M8(c){return c.classList?f3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function p9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dv(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(p9(c[e]),'" ')},"").trim()}function O4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function p8(c){return c.size!==K1.size||c.x!==K1.x||c.y!==K1.y||c.rotate!==K1.rotate||c.flipX||c.flipY}function Lv(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function gv(c){var a=c.transform,e=c.width,s=e===void 0?F6:e,r=c.height,i=r===void 0?F6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&z9?l+="translate(".concat(a.x/m2-s/2,"em, ").concat(a.y/m2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/m2,"em), calc(-50% + ").concat(a.y/m2,"em)) "):l+="translate(".concat(a.x/m2,"em, ").concat(a.y/m2,"em) "),l+="scale(".concat(a.size/m2*(a.flipX?-1:1),", ").concat(a.size/m2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var xv=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function d9(){var c=v9,a=h9,e=F.cssPrefix,s=F.replacementClass,r=xv;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var P0=!1;function h6(){F.autoAddCss&&!P0&&(Mv(d9()),P0=!0)}var bv={mixout:function(){return{dom:{css:d9,insertCss:h6}}},hooks:function(){return{beforeDOMElementCreation:function(){h6()},beforeI2svg:function(){h6()}}}},r2=V2||{};r2[s2]||(r2[s2]={});r2[s2].styles||(r2[s2].styles={});r2[s2].hooks||(r2[s2].hooks={});r2[s2].shims||(r2[s2].shims=[]);var _1=r2[s2],L9=[],Sv=function c(){r1.removeEventListener("DOMContentLoaded",c),g4=1,L9.map(function(a){return a()})},g4=!1;f2&&(g4=(r1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(r1.readyState),g4||r1.addEventListener("DOMContentLoaded",Sv));function Nv(c){!f2||(g4?setTimeout(c,0):L9.push(c))}function q3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?p9(c):"<".concat(a," ").concat(dv(s),">").concat(i.map(q3).join(""),"</").concat(a,">")}function T0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var wv=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},H6=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?wv(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function yv(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function R6(c){var a=yv(c);return a.length===1?a[0].toString(16):null}function kv(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function F0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function E6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=F0(a);typeof _1.hooks.addPack=="function"&&!r?_1.hooks.addPack(c,F0(a)):_1.styles[c]=P(P({},_1.styles[c]||{}),i),c==="fas"&&E6("fa",a)}var i4,n4,f4,W2=_1.styles,Av=_1.shims,Pv=(i4={},v1(i4,s1,Object.values(T3[s1])),v1(i4,t1,Object.values(T3[t1])),i4),d8=null,g9={},x9={},b9={},S9={},N9={},Tv=(n4={},v1(n4,s1,Object.keys(A3[s1])),v1(n4,t1,Object.keys(A3[t1])),n4);function Fv(c){return~vv.indexOf(c)}function Bv(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!Fv(r)?r:null}var w9=function(){var a=function(i){return H6(W2,function(n,f,l){return n[l]=H6(f,i,{}),n},{})};g9=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),x9=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),N9=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in W2||F.autoFetchSvg,s=H6(Av,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});b9=s.names,S9=s.unicodes,d8=$4(F.styleDefault,{family:F.familyDefault})};Vv(function(c){d8=$4(c.styleDefault,{family:F.familyDefault})});w9();function L8(c,a){return(g9[c]||{})[a]}function Rv(c,a){return(x9[c]||{})[a]}function k2(c,a){return(N9[c]||{})[a]}function y9(c){return b9[c]||{prefix:null,iconName:null}}function Ev(c){var a=S9[c],e=L8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function M2(){return d8}var g8=function(){return{prefix:null,iconName:null,rest:[]}};function $4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?s1:e,r=A3[s][c],i=P3[s][c]||P3[s][r],n=c in _1.styles?c:null;return i||n||null}var B0=(f4={},v1(f4,s1,Object.keys(T3[s1])),v1(f4,t1,Object.keys(T3[t1])),f4);function U4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},v1(a,s1,"".concat(F.cssPrefix,"-").concat(s1)),v1(a,t1,"".concat(F.cssPrefix,"-").concat(t1)),a),n=null,f=s1;(c.includes(i[s1])||c.some(function(t){return B0[s1].includes(t)}))&&(f=s1),(c.includes(i[t1])||c.some(function(t){return B0[t1].includes(t)}))&&(f=t1);var l=c.reduce(function(t,o){var C=Bv(F.cssPrefix,o);if(W2[o]?(o=Pv[f].includes(o)?lv[f][o]:o,n=o,t.prefix=o):Tv[f].indexOf(o)>-1?(n=o,t.prefix=$4(o,{family:f})):C?t.iconName=C:o!==F.replacementClass&&o!==i[s1]&&o!==i[t1]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var v=n==="fa"?y9(t.iconName):{},H=k2(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||H||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!W2.far&&W2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},g8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===t1&&(W2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=k2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=M2()||"fas"),l}var Dv=function(){function c(){Yz(this,c),this.definitions={}}return Xz(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=P(P({},e.definitions[f]||{}),n[f]),E6(f,n[f]);var l=T3[s1][f];l&&E6(l,n[f]),w9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(C){typeof C=="string"&&(e[f][C]=t)}),e[f][l]=t}),e}}]),c}(),R0=[],Z2={},J2={},_v=Object.keys(J2);function qv(c,a){var e=a.mixoutsTo;return R0=c,Z2={},Object.keys(J2).forEach(function(s){_v.indexOf(s)===-1&&delete J2[s]}),R0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),L4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){Z2[n]||(Z2[n]=[]),Z2[n].push(i[n])})}s.provides&&s.provides(J2)}),e}function D6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=Z2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function B2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=Z2[c]||[];r.forEach(function(i){i.apply(null,e)})}function i2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return J2[c]?J2[c].apply(null,a):void 0}function _6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||M2();if(!!a)return a=k2(e,a)||a,T0(k9.definitions,e,a)||T0(_1.styles,e,a)}var k9=new Dv,Ov=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,B2("noAuto")},$v={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return f2?(B2("beforeI2svg",a),i2("pseudoElements2svg",a),i2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Nv(function(){Iv({autoReplaceSvgRoot:e}),B2("watch",a)})}},Uv={icon:function(a){if(a===null)return null;if(L4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:k2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=$4(a[0]);return{prefix:s,iconName:k2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(ov))){var r=U4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||M2(),iconName:k2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=M2();return{prefix:i,iconName:k2(i,a)||a}}}},k1={noAuto:Ov,config:F,dom:$v,parse:Uv,library:k9,findIconDefinition:_6,toHtml:q3},Iv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?r1:e;(Object.keys(_1.styles).length>0||F.autoFetchSvg)&&f2&&F.autoReplaceSvg&&k1.dom.i2svg({node:s})};function I4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return q3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!f2){var s=r1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Gv(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(p8(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=O4(P(P({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Wv(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},r),{},{id:n}),children:s}]}]}function x8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,C=c.extra,v=c.watchable,H=v===void 0?!1:v,b=s.found?s:e,y=b.width,B=b.height,V=r==="fak",d=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(M1){return C.classes.indexOf(M1)===-1}).filter(function(M1){return M1!==""||!!M1}).concat(C.classes).join(" "),S={children:[],attributes:P(P({},C.attributes),{},{"data-prefix":r,"data-icon":i,class:d,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(B)})},_=V&&!~C.classes.indexOf("fa-fw")?{width:"".concat(y/B*16*.0625,"em")}:{};H&&(S.attributes[F2]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(o||B3())},children:[l]}),delete S.attributes.title);var W=P(P({},S),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:P(P({},_),C.styles)}),i1=s.found&&e.found?i2("generateAbstractMask",W)||{children:[],attributes:{}}:i2("generateAbstractIcon",W)||{children:[],attributes:{}},o1=i1.children,N1=i1.attributes;return W.children=o1,W.attributes=N1,f?Wv(W):Gv(W)}function E0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=P(P(P({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[F2]="");var o=P({},n.styles);p8(r)&&(o.transform=gv({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var C=O4(o);C.length>0&&(t.style=C);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Zv(c){var a=c.content,e=c.title,s=c.extra,r=P(P(P({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=O4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var u6=_1.styles;function q6(c){var a=c[0],e=c[1],s=c.slice(4),r=v8(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(y2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(y2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(y2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var jv={found:!1,width:512,height:512};function Kv(c,a){!H9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function O6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=M2()),new Promise(function(s,r){if(i2("missingIconAbstract"),e==="fa"){var i=y9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&u6[a]&&u6[a][c]){var n=u6[a][c];return s(q6(n))}Kv(c,a),s(P(P({},jv),{},{icon:F.showMissingIcons&&c?i2("missingIconAbstract")||{}:{}}))})}var D0=function(){},$6=F.measurePerformance&&J3&&J3.mark&&J3.measure?J3:{mark:D0,measure:D0},z3='FA "6.2.0"',Yv=function(a){return $6.mark("".concat(z3," ").concat(a," begins")),function(){return A9(a)}},A9=function(a){$6.mark("".concat(z3," ").concat(a," ends")),$6.measure("".concat(z3," ").concat(a),"".concat(z3," ").concat(a," begins"),"".concat(z3," ").concat(a," ends"))},b8={begin:Yv,end:A9},z4=function(){};function _0(c){var a=c.getAttribute?c.getAttribute(F2):null;return typeof a=="string"}function Xv(c){var a=c.getAttribute?c.getAttribute(H8):null,e=c.getAttribute?c.getAttribute(u8):null;return a&&e}function Qv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function Jv(){if(F.autoReplaceSvg===!0)return v4.replace;var c=v4[F.autoReplaceSvg];return c||v4.replace}function ch(c){return r1.createElementNS("http://www.w3.org/2000/svg",c)}function ah(c){return r1.createElement(c)}function P9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?ch:ah:e;if(typeof c=="string")return r1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(P9(n,{ceFn:s}))}),r}function eh(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var v4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(P9(r),e)}),e.getAttribute(F2)===null&&F.keepOriginalSource){var s=r1.createComment(eh(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~M8(e).indexOf(F.replacementClass))return v4.replace(a);var r=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return q3(f)}).join(`
`);e.setAttribute(F2,""),e.innerHTML=n}};function q0(c){c()}function T9(c,a){var e=typeof a=="function"?a:z4;if(c.length===0)e();else{var s=q0;F.mutateApproach===nv&&(s=V2.requestAnimationFrame||q0),s(function(){var r=Jv(),i=b8.begin("mutate");c.map(r),i(),e()})}}var S8=!1;function F9(){S8=!0}function U6(){S8=!1}var x4=null;function O0(c){if(!!k0&&!!F.observeMutations){var a=c.treeCallback,e=a===void 0?z4:a,s=c.nodeCallback,r=s===void 0?z4:s,i=c.pseudoElementsCallback,n=i===void 0?z4:i,f=c.observeMutationsRoot,l=f===void 0?r1:f;x4=new k0(function(t){if(!S8){var o=M2();f3(t).forEach(function(C){if(C.type==="childList"&&C.addedNodes.length>0&&!_0(C.addedNodes[0])&&(F.searchPseudoElements&&n(C.target),e(C.target)),C.type==="attributes"&&C.target.parentNode&&F.searchPseudoElements&&n(C.target.parentNode),C.type==="attributes"&&_0(C.target)&&~zv.indexOf(C.attributeName))if(C.attributeName==="class"&&Xv(C.target)){var v=U4(M8(C.target)),H=v.prefix,b=v.iconName;C.target.setAttribute(H8,H||o),b&&C.target.setAttribute(u8,b)}else Qv(C.target)&&r(C.target)})}}),f2&&x4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function sh(){!x4||x4.disconnect()}function rh(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function ih(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=U4(M8(c));return r.prefix||(r.prefix=M2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Rv(r.prefix,c.innerText)||L8(r.prefix,R6(c.innerText))),!r.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function nh(c){var a=f3(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(s||B3()):(a["aria-hidden"]="true",a.focusable="false")),a}function fh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ih(c),s=e.iconName,r=e.prefix,i=e.rest,n=nh(c),f=D6("parseNodeAttributes",{},c),l=a.styleParser?rh(c):[];return P({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:K1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var lh=_1.styles;function B9(c){var a=F.autoReplaceSvg==="nest"?$0(c,{styleParser:!1}):$0(c);return~a.extra.classes.indexOf(u9)?i2("generateLayersText",c,a):i2("generateSvgReplacementMutation",c,a)}var p2=new Set;V8.map(function(c){p2.add("fa-".concat(c))});Object.keys(A3[s1]).map(p2.add.bind(p2));Object.keys(A3[t1]).map(p2.add.bind(p2));p2=D3(p2);function U0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!f2)return Promise.resolve();var e=r1.documentElement.classList,s=function(C){return e.add("".concat(A0,"-").concat(C))},r=function(C){return e.remove("".concat(A0,"-").concat(C))},i=F.autoFetchSvg?p2:V8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(lh));i.includes("fa")||i.push("fa");var n=[".".concat(u9,":not([").concat(F2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(F2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=f3(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=b8.begin("onTree"),t=f.reduce(function(o,C){try{var v=B9(C);v&&o.push(v)}catch(H){H9||H.name==="MissingIcon"&&console.error(H)}return o},[]);return new Promise(function(o,C){Promise.all(t).then(function(v){T9(v,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),C(v)})})}function oh(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B9(c).then(function(e){e&&T9([e],a)})}function th(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:_6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:_6(r||{})),c(s,P(P({},e),{},{mask:r}))}}var mh=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?K1:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,C=e.title,v=C===void 0?null:C,H=e.titleId,b=H===void 0?null:H,y=e.classes,B=y===void 0?[]:y,V=e.attributes,d=V===void 0?{}:V,S=e.styles,_=S===void 0?{}:S;if(!!a){var W=a.prefix,i1=a.iconName,o1=a.icon;return I4(P({type:"icon"},a),function(){return B2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(v?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(b||B3()):(d["aria-hidden"]="true",d.focusable="false")),x8({icons:{main:q6(o1),mask:l?q6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:i1,transform:P(P({},K1),r),symbol:n,title:v,maskId:o,titleId:b,extra:{attributes:d,styles:_,classes:B}})})}},Ch={mixout:function(){return{icon:th(mh)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=U0,e.nodeCallback=oh,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?r1:s,i=e.callback,n=i===void 0?function(){}:i;return U0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,C=s.maskId,v=s.extra;return new Promise(function(H,b){Promise.all([O6(r,f),o.iconName?O6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var B=v8(y,2),V=B[0],d=B[1];H([e,x8({icons:{main:V,mask:d},prefix:f,iconName:r,transform:l,symbol:t,maskId:C,title:i,titleId:n,extra:v,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=O4(f);l.length>0&&(r.style=l);var t;return p8(n)&&(t=i2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},zh={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return I4({type:"layer"},function(){B2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(D3(i)).join(" ")},children:n}]})}}}},vh={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,C=o===void 0?{}:o;return I4({type:"counter",content:e},function(){return B2("beforeDOMElementCreation",{content:e,params:s}),Zv({content:e.toString(),title:i,extra:{attributes:t,styles:C,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(D3(f))}})})}}}},hh={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?K1:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,C=o===void 0?{}:o,v=s.styles,H=v===void 0?{}:v;return I4({type:"text",content:e},function(){return B2("beforeDOMElementCreation",{content:e,params:s}),E0({content:e,transform:P(P({},K1),i),title:f,extra:{attributes:C,styles:H,classes:["".concat(F.cssPrefix,"-layers-text")].concat(D3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(z9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,E0({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},Hh=new RegExp('"',"ug"),I0=[1105920,1112319];function uh(c){var a=c.replace(Hh,""),e=kv(a,0),s=e>=I0[0]&&e<=I0[1],r=a.length===2?a[0]===a[1]:!1;return{value:R6(r?a[0]:a),isSecondary:s||r}}function G0(c,a){var e="".concat(iv).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=f3(c.children),n=i.filter(function(o1){return o1.getAttribute(B6)===a})[0],f=V2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(tv),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var C=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?t1:s1,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?P3[v][l[2].toLowerCase()]:mv[v][t],b=uh(C),y=b.value,B=b.isSecondary,V=l[0].startsWith("FontAwesome"),d=L8(H,y),S=d;if(V){var _=Ev(y);_.iconName&&_.prefix&&(d=_.iconName,H=_.prefix)}if(d&&!B&&(!n||n.getAttribute(H8)!==H||n.getAttribute(u8)!==S)){c.setAttribute(e,S),n&&c.removeChild(n);var W=fh(),i1=W.extra;i1.attributes[B6]=a,O6(d,H).then(function(o1){var N1=x8(P(P({},W),{},{icons:{main:o1,mask:g8()},prefix:H,iconName:S,extra:i1,watchable:!0})),M1=r1.createElement("svg");a==="::before"?c.insertBefore(M1,c.firstChild):c.appendChild(M1),M1.outerHTML=N1.map(function(A1){return q3(A1)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Vh(c){return Promise.all([G0(c,"::before"),G0(c,"::after")])}function Mh(c){return c.parentNode!==document.head&&!~fv.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(B6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function W0(c){if(!!f2)return new Promise(function(a,e){var s=f3(c.querySelectorAll("*")).filter(Mh).map(Vh),r=b8.begin("searchPseudoElements");F9(),Promise.all(s).then(function(){r(),U6(),a()}).catch(function(){r(),U6(),e()})})}var ph={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=W0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?r1:s;F.searchPseudoElements&&W0(r)}}},Z0=!1,dh={mixout:function(){return{dom:{unwatch:function(){F9(),Z0=!0}}}},hooks:function(){return{bootstrap:function(){O0(D6("mutationObserverCallbacks",{}))},noAuto:function(){sh()},watch:function(e){var s=e.observeMutationsRoot;Z0?U6():O0(D6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},j0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},Lh={mixout:function(){return{parse:{transform:function(e){return j0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=j0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),C={transform:"".concat(l," ").concat(t," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},H={outer:f,inner:C,path:v};return{tag:"g",attributes:P({},H.outer),children:[{tag:"g",attributes:P({},H.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:P(P({},s.icon.attributes),H.path)}]}]}}}},V6={x:0,y:0,width:"100%",height:"100%"};function K0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function gh(c){return c.tag==="g"?c.children:[c]}var xh={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?U4(r.split(" ").map(function(n){return n.trim()})):g8();return i.prefix||(i.prefix=M2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,t=i.width,o=i.icon,C=n.width,v=n.icon,H=Lv({transform:l,containerWidth:C,iconWidth:t}),b={tag:"rect",attributes:P(P({},V6),{},{fill:"white"})},y=o.children?{children:o.children.map(K0)}:{},B={tag:"g",attributes:P({},H.inner),children:[K0(P({tag:o.tag,attributes:P(P({},o.attributes),H.path)},y))]},V={tag:"g",attributes:P({},H.outer),children:[B]},d="mask-".concat(f||B3()),S="clip-".concat(f||B3()),_={tag:"mask",attributes:P(P({},V6),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,V]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:gh(v)},_]};return s.push(W,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(d,")")},V6)}),{children:s,attributes:r}}}},bh={provides:function(a){var e=!1;V2.matchMedia&&(e=V2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:P(P({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=P(P({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:P(P({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:P(P({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:P(P({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:P(P({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Sh={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Nh=[bv,Ch,zh,vh,hh,ph,dh,Lh,xh,bh,Sh];qv(Nh,{mixoutsTo:k1});k1.noAuto;var R9=k1.config,N8=k1.library;k1.dom;var b4=k1.parse;k1.findIconDefinition;k1.toHtml;var wh=k1.icon;k1.layer;var yh=k1.text;k1.counter;function Y0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function E1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?Y0(Object(e),!0).forEach(function(s){x1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):Y0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function S4(c){return S4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S4(c)}function x1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function kh(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function Ah(c,a){if(c==null)return{};var e=kh(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function I6(c){return Ph(c)||Th(c)||Fh(c)||Bh()}function Ph(c){if(Array.isArray(c))return G6(c)}function Th(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Fh(c,a){if(!!c){if(typeof c=="string")return G6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return G6(c,a)}}function G6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Bh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.