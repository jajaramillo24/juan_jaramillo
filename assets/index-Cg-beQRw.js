(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Cm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var hc={exports:{}},Eo={},pc={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function kv(){if(Sp)return mt;Sp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(L,ie,De){this.props=L,this.context=ie,this.refs=A,this.updater=De||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,ie){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ie,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=y.prototype;function F(L,ie,De){this.props=L,this.context=ie,this.refs=A,this.updater=De||M}var N=F.prototype=new v;N.constructor=F,w(N,y.prototype),N.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,B={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function $(L,ie,De){var ze,Ue={},ee=null,pe=null;if(ie!=null)for(ze in ie.ref!==void 0&&(pe=ie.ref),ie.key!==void 0&&(ee=""+ie.key),ie)V.call(ie,ze)&&!z.hasOwnProperty(ze)&&(Ue[ze]=ie[ze]);var _e=arguments.length-2;if(_e===1)Ue.children=De;else if(1<_e){for(var Le=Array(_e),Ie=0;Ie<_e;Ie++)Le[Ie]=arguments[Ie+2];Ue.children=Le}if(L&&L.defaultProps)for(ze in _e=L.defaultProps,_e)Ue[ze]===void 0&&(Ue[ze]=_e[ze]);return{$$typeof:o,type:L,key:ee,ref:pe,props:Ue,_owner:B.current}}function P(L,ie){return{$$typeof:o,type:L.type,key:ie,ref:L.ref,props:L.props,_owner:L._owner}}function R(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function I(L){var ie={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(De){return ie[De]})}var Y=/\/+/g;function Q(L,ie){return typeof L=="object"&&L!==null&&L.key!=null?I(""+L.key):ie.toString(36)}function oe(L,ie,De,ze,Ue){var ee=typeof L;(ee==="undefined"||ee==="boolean")&&(L=null);var pe=!1;if(L===null)pe=!0;else switch(ee){case"string":case"number":pe=!0;break;case"object":switch(L.$$typeof){case o:case e:pe=!0}}if(pe)return pe=L,Ue=Ue(pe),L=ze===""?"."+Q(pe,0):ze,C(Ue)?(De="",L!=null&&(De=L.replace(Y,"$&/")+"/"),oe(Ue,ie,De,"",function(Ie){return Ie})):Ue!=null&&(R(Ue)&&(Ue=P(Ue,De+(!Ue.key||pe&&pe.key===Ue.key?"":(""+Ue.key).replace(Y,"$&/")+"/")+L)),ie.push(Ue)),1;if(pe=0,ze=ze===""?".":ze+":",C(L))for(var _e=0;_e<L.length;_e++){ee=L[_e];var Le=ze+Q(ee,_e);pe+=oe(ee,ie,De,Le,Ue)}else if(Le=S(L),typeof Le=="function")for(L=Le.call(L),_e=0;!(ee=L.next()).done;)ee=ee.value,Le=ze+Q(ee,_e++),pe+=oe(ee,ie,De,Le,Ue);else if(ee==="object")throw ie=String(L),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return pe}function ce(L,ie,De){if(L==null)return L;var ze=[],Ue=0;return oe(L,ze,"","",function(ee){return ie.call(De,ee,Ue++)}),ze}function ae(L){if(L._status===-1){var ie=L._result;ie=ie(),ie.then(function(De){(L._status===0||L._status===-1)&&(L._status=1,L._result=De)},function(De){(L._status===0||L._status===-1)&&(L._status=2,L._result=De)}),L._status===-1&&(L._status=0,L._result=ie)}if(L._status===1)return L._result.default;throw L._result}var he={current:null},O={transition:null},fe={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:O,ReactCurrentOwner:B};function ne(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ce,forEach:function(L,ie,De){ce(L,function(){ie.apply(this,arguments)},De)},count:function(L){var ie=0;return ce(L,function(){ie++}),ie},toArray:function(L){return ce(L,function(ie){return ie})||[]},only:function(L){if(!R(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},mt.Component=y,mt.Fragment=n,mt.Profiler=a,mt.PureComponent=F,mt.StrictMode=r,mt.Suspense=p,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,mt.act=ne,mt.cloneElement=function(L,ie,De){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var ze=w({},L.props),Ue=L.key,ee=L.ref,pe=L._owner;if(ie!=null){if(ie.ref!==void 0&&(ee=ie.ref,pe=B.current),ie.key!==void 0&&(Ue=""+ie.key),L.type&&L.type.defaultProps)var _e=L.type.defaultProps;for(Le in ie)V.call(ie,Le)&&!z.hasOwnProperty(Le)&&(ze[Le]=ie[Le]===void 0&&_e!==void 0?_e[Le]:ie[Le])}var Le=arguments.length-2;if(Le===1)ze.children=De;else if(1<Le){_e=Array(Le);for(var Ie=0;Ie<Le;Ie++)_e[Ie]=arguments[Ie+2];ze.children=_e}return{$$typeof:o,type:L.type,key:Ue,ref:ee,props:ze,_owner:pe}},mt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:u,_context:L},L.Consumer=L},mt.createElement=$,mt.createFactory=function(L){var ie=$.bind(null,L);return ie.type=L,ie},mt.createRef=function(){return{current:null}},mt.forwardRef=function(L){return{$$typeof:d,render:L}},mt.isValidElement=R,mt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ae}},mt.memo=function(L,ie){return{$$typeof:m,type:L,compare:ie===void 0?null:ie}},mt.startTransition=function(L){var ie=O.transition;O.transition={};try{L()}finally{O.transition=ie}},mt.unstable_act=ne,mt.useCallback=function(L,ie){return he.current.useCallback(L,ie)},mt.useContext=function(L){return he.current.useContext(L)},mt.useDebugValue=function(){},mt.useDeferredValue=function(L){return he.current.useDeferredValue(L)},mt.useEffect=function(L,ie){return he.current.useEffect(L,ie)},mt.useId=function(){return he.current.useId()},mt.useImperativeHandle=function(L,ie,De){return he.current.useImperativeHandle(L,ie,De)},mt.useInsertionEffect=function(L,ie){return he.current.useInsertionEffect(L,ie)},mt.useLayoutEffect=function(L,ie){return he.current.useLayoutEffect(L,ie)},mt.useMemo=function(L,ie){return he.current.useMemo(L,ie)},mt.useReducer=function(L,ie,De){return he.current.useReducer(L,ie,De)},mt.useRef=function(L){return he.current.useRef(L)},mt.useState=function(L){return he.current.useState(L)},mt.useSyncExternalStore=function(L,ie,De){return he.current.useSyncExternalStore(L,ie,De)},mt.useTransition=function(){return he.current.useTransition()},mt.version="18.3.1",mt}var yp;function Vf(){return yp||(yp=1,pc.exports=kv()),pc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function Bv(){if(Mp)return Eo;Mp=1;var o=Vf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,x={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:S,ref:M,props:x,_owner:a.current}}return Eo.Fragment=n,Eo.jsx=f,Eo.jsxs=f,Eo}var Ep;function zv(){return Ep||(Ep=1,hc.exports=Bv()),hc.exports}var W=zv(),zt=Vf();const bm=Cm(zt);var qa={},mc={exports:{}},bn={},gc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Hv(){return Tp||(Tp=1,(function(o){function e(O,fe){var ne=O.length;O.push(fe);e:for(;0<ne;){var L=ne-1>>>1,ie=O[L];if(0<a(ie,fe))O[L]=fe,O[ne]=ie,ne=L;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var fe=O[0],ne=O.pop();if(ne!==fe){O[0]=ne;e:for(var L=0,ie=O.length,De=ie>>>1;L<De;){var ze=2*(L+1)-1,Ue=O[ze],ee=ze+1,pe=O[ee];if(0>a(Ue,ne))ee<ie&&0>a(pe,Ue)?(O[L]=pe,O[ee]=ne,L=ee):(O[L]=Ue,O[ze]=ne,L=ze);else if(ee<ie&&0>a(pe,ne))O[L]=pe,O[ee]=ne,L=ee;else break e}}return fe}function a(O,fe){var ne=O.sortIndex-fe.sortIndex;return ne!==0?ne:O.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,x=null,S=3,M=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(O){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=O)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function C(O){if(A=!1,N(O),!w)if(n(p)!==null)w=!0,ae(V);else{var fe=n(m);fe!==null&&he(C,fe.startTime-O)}}function V(O,fe){w=!1,A&&(A=!1,v($),$=-1),M=!0;var ne=S;try{for(N(fe),x=n(p);x!==null&&(!(x.expirationTime>fe)||O&&!I());){var L=x.callback;if(typeof L=="function"){x.callback=null,S=x.priorityLevel;var ie=L(x.expirationTime<=fe);fe=o.unstable_now(),typeof ie=="function"?x.callback=ie:x===n(p)&&r(p),N(fe)}else r(p);x=n(p)}if(x!==null)var De=!0;else{var ze=n(m);ze!==null&&he(C,ze.startTime-fe),De=!1}return De}finally{x=null,S=ne,M=!1}}var B=!1,z=null,$=-1,P=5,R=-1;function I(){return!(o.unstable_now()-R<P)}function Y(){if(z!==null){var O=o.unstable_now();R=O;var fe=!0;try{fe=z(!0,O)}finally{fe?Q():(B=!1,z=null)}}else B=!1}var Q;if(typeof F=="function")Q=function(){F(Y)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=Y,Q=function(){ce.postMessage(null)}}else Q=function(){y(Y,0)};function ae(O){z=O,B||(B=!0,Q())}function he(O,fe){$=y(function(){O(o.unstable_now())},fe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_continueExecution=function(){w||M||(w=!0,ae(V))},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var ne=S;S=fe;try{return O()}finally{S=ne}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(O,fe){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ne=S;S=O;try{return fe()}finally{S=ne}},o.unstable_scheduleCallback=function(O,fe,ne){var L=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?L+ne:L):ne=L,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ne+ie,O={id:_++,callback:fe,priorityLevel:O,startTime:ne,expirationTime:ie,sortIndex:-1},ne>L?(O.sortIndex=ne,e(m,O),n(p)===null&&O===n(m)&&(A?(v($),$=-1):A=!0,he(C,ne-L))):(O.sortIndex=ie,e(p,O),w||M||(w=!0,ae(V))),O},o.unstable_shouldYield=I,o.unstable_wrapCallback=function(O){var fe=S;return function(){var ne=S;S=fe;try{return O.apply(this,arguments)}finally{S=ne}}}})(vc)),vc}var wp;function Vv(){return wp||(wp=1,gc.exports=Hv()),gc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Gv(){if(Ap)return bn;Ap=1;var o=Vf(),e=Vv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function S(t){return p.call(x,t)?!0:p.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function M(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||M(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,s,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,s,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?S(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),B=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),I=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),O=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,L;function ie(t){if(L===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+t}var De=!1;function ze(t,i){if(!t||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var l=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){l=re}t.call(i.prototype)}else{try{throw Error()}catch(re){l=re}t()}}catch(re){if(re&&l&&typeof re.stack=="string"){for(var c=re.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,D=h.length-1;1<=E&&0<=D&&c[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(c[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||c[E]!==h[D]){var H=`
`+c[E].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=E&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ie(t):""}function Ue(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=ze(t.type,!1),t;case 11:return t=ze(t.type.render,!1),t;case 1:return t=ze(t.type,!0),t;default:return""}}function ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case B:return"Portal";case P:return"Profiler";case $:return"StrictMode";case Q:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return ee(t(i))}catch{}}return null}function pe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ie(t){var i=Le(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function dt(t){t._valueTracker||(t._valueTracker=Ie(t))}function Xt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Le(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function U(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function At(t,i){var s=i.checked;return ne({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function st(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=_e(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Je(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Ge(t,i){Je(t,i);var s=_e(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?He(t,i.type,s):i.hasOwnProperty("defaultValue")&&He(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function _t(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function He(t,i,s){(i!=="number"||U(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var ot=Array.isArray;function Pt(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+_e(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Dt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ne({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function b(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(ot(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:_e(s)}}function g(t,i){var s=_e(i.value),l=_e(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function k(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Z(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function de(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Z(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var te,Ne=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(te=te||document.createElement("div"),te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Fe).forEach(function(t){je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fe[i]=Fe[t]})});function Te(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Fe.hasOwnProperty(t)&&Fe[t]?(""+i).trim():i+"px"}function Pe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Te(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var it=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Re(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Me=null,Ae=null,Oe=null;function Se(t){if(t=ao(t)){if(typeof Me!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ua(i),Me(t.stateNode,t.type,i))}}function me(t){Ae?Oe?Oe.push(t):Oe=[t]:Ae=t}function Ye(){if(Ae){var t=Ae,i=Oe;if(Oe=Ae=null,Se(t),i)for(t=0;t<i.length;t++)Se(i[t])}}function ut(t,i){return t(i)}function Ct(){}var St=!1;function Vn(t,i,s){if(St)return t(i,s);St=!0;try{return ut(t,i,s)}finally{St=!1,(Ae!==null||Oe!==null)&&(Ct(),Ye())}}function un(t,i){var s=t.stateNode;if(s===null)return null;var l=ua(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var qr=!1;if(d)try{var In={};Object.defineProperty(In,"passive",{get:function(){qr=!0}}),window.addEventListener("test",In,In),window.removeEventListener("test",In,In)}catch{qr=!1}function Ws(t,i,s,l,c,h,E,D,H){var re=Array.prototype.slice.call(arguments,3);try{i.apply(s,re)}catch(ve){this.onError(ve)}}var Gi=!1,Sr=null,Si=!1,$r=null,Kr={onError:function(t){Gi=!0,Sr=t}};function Vo(t,i,s,l,c,h,E,D,H){Gi=!1,Sr=null,Ws.apply(Kr,arguments)}function Go(t,i,s,l,c,h,E,D,H){if(Vo.apply(this,arguments),Gi){if(Gi){var re=Sr;Gi=!1,Sr=null}else throw Error(n(198));Si||(Si=!0,$r=re)}}function yi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Wo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Xo(t){if(yi(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=yi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return Xo(c),t;if(h===l)return Xo(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var E=!1,D=c.child;D;){if(D===s){E=!0,s=c,l=h;break}if(D===l){E=!0,l=c,s=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===s){E=!0,s=h,l=c;break}if(D===l){E=!0,l=h,s=c;break}D=D.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function jo(t){return t=Fl(t),t!==null?Yo(t):null}function Yo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Yo(t);if(i!==null)return i;t=t.sibling}return null}var T=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,le=e.unstable_shouldYield,ue=e.unstable_requestPaint,j=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,We=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,nt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ze=null,at=null;function Rt(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ze,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Qe,It=Math.log,bt=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(It(t)/bt|0)|0}var Lt=64,gt=4194304;function Zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=s&268435455;if(E!==0){var D=E&~c;D!==0?l=Zt(D):(h&=E,h!==0&&(l=Zt(h)))}else E=s&~c,E!==0?l=Zt(E):h!==0&&(l=Zt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-yt(i),c=1<<s,l|=t[s],i&=~c;return l}function _n(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-yt(h),D=1<<E,H=c[E];H===-1?((D&s)===0||(D&l)!==0)&&(c[E]=_n(D,i)):H<=i&&(t.expiredLanes|=D),h&=~D}}function Ut(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xn(){var t=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),t}function cn(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function jt(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-yt(i),t[i]=s}function fn(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-yt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Mr(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-yt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var vt=0;function Qf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jf,Ol,ed,td,nd,kl=!1,qo=[],Wi=null,Xi=null,ji=null,Xs=new Map,js=new Map,Yi=[],og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Xs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(i.pointerId)}}function Ys(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=ao(i),i!==null&&Ol(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function ag(t,i,s,l,c){switch(i){case"focusin":return Wi=Ys(Wi,t,i,s,l,c),!0;case"dragenter":return Xi=Ys(Xi,t,i,s,l,c),!0;case"mouseover":return ji=Ys(ji,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Xs.set(h,Ys(Xs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,js.set(h,Ys(js.get(h)||null,t,i,s,l,c)),!0}return!1}function rd(t){var i=Er(t.target);if(i!==null){var s=yi(i);if(s!==null){if(i=s.tag,i===13){if(i=Wo(s),i!==null){t.blockedOn=i,nd(t.priority,function(){ed(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);ct=l,s.target.dispatchEvent(l),ct=null}else return i=ao(s),i!==null&&Ol(i),t.blockedOn=s,!1;i.shift()}return!0}function sd(t,i,s){$o(t)&&s.delete(i)}function lg(){kl=!1,Wi!==null&&$o(Wi)&&(Wi=null),Xi!==null&&$o(Xi)&&(Xi=null),ji!==null&&$o(ji)&&(ji=null),Xs.forEach(sd),js.forEach(sd)}function qs(t,i){t.blockedOn===i&&(t.blockedOn=null,kl||(kl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lg)))}function $s(t){function i(c){return qs(c,t)}if(0<qo.length){qs(qo[0],t);for(var s=1;s<qo.length;s++){var l=qo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&qs(Wi,t),Xi!==null&&qs(Xi,t),ji!==null&&qs(ji,t),Xs.forEach(i),js.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)rd(s),s.blockedOn===null&&Yi.shift()}var Zr=C.ReactCurrentBatchConfig,Ko=!0;function ug(t,i,s,l){var c=vt,h=Zr.transition;Zr.transition=null;try{vt=1,Bl(t,i,s,l)}finally{vt=c,Zr.transition=h}}function cg(t,i,s,l){var c=vt,h=Zr.transition;Zr.transition=null;try{vt=4,Bl(t,i,s,l)}finally{vt=c,Zr.transition=h}}function Bl(t,i,s,l){if(Ko){var c=zl(t,i,s,l);if(c===null)iu(t,i,l,Zo,s),id(t,l);else if(ag(c,t,i,s,l))l.stopPropagation();else if(id(t,l),i&4&&-1<og.indexOf(t)){for(;c!==null;){var h=ao(c);if(h!==null&&Jf(h),h=zl(t,i,s,l),h===null&&iu(t,i,l,Zo,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else iu(t,i,l,null,s)}}var Zo=null;function zl(t,i,s,l){if(Zo=null,t=G(l),t=Er(t),t!==null)if(i=yi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Wo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Zo=t,null}function od(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Ce:return 1;case We:return 4;case ke:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qi=null,Hl=null,Qo=null;function ad(){if(Qo)return Qo;var t,i=Hl,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===c[h-l];l++);return Qo=c.slice(t,1<l?1-l:void 0)}function Jo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ea(){return!0}function ld(){return!1}function Un(t){function i(s,l,c,h,E){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ea:ld,this.isPropagationStopped=ld,this}return ne(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),i}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Un(Qr),Ks=ne({},Qr,{view:0,detail:0}),fg=Un(Ks),Gl,Wl,Zs,ta=ne({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(Gl=t.screenX-Zs.screenX,Wl=t.screenY-Zs.screenY):Wl=Gl=0,Zs=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),ud=Un(ta),dg=ne({},ta,{dataTransfer:0}),hg=Un(dg),pg=ne({},Ks,{relatedTarget:0}),Xl=Un(pg),mg=ne({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),gg=Un(mg),vg=ne({},Qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_g=Un(vg),xg=ne({},Qr,{data:0}),cd=Un(xg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Mg[t])?!!i[t]:!1}function jl(){return Eg}var Tg=ne({},Ks,{key:function(t){if(t.key){var i=Sg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wg=Un(Tg),Ag=ne({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=Un(Ag),Rg=ne({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Cg=Un(Rg),bg=ne({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=Un(bg),Dg=ne({},ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lg=Un(Dg),Ng=[9,13,27,32],Yl=d&&"CompositionEvent"in window,Qs=null;d&&"documentMode"in document&&(Qs=document.documentMode);var Ig=d&&"TextEvent"in window&&!Qs,dd=d&&(!Yl||Qs&&8<Qs&&11>=Qs),hd=" ",pd=!1;function md(t,i){switch(t){case"keyup":return Ng.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Ug(t,i){switch(t){case"compositionend":return gd(i);case"keypress":return i.which!==32?null:(pd=!0,hd);case"textInput":return t=i.data,t===hd&&pd?null:t;default:return null}}function Fg(t,i){if(Jr)return t==="compositionend"||!Yl&&md(t,i)?(t=ad(),Qo=Hl=qi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dd&&i.locale!=="ko"?null:i.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Og[t.type]:i==="textarea"}function _d(t,i,s,l){me(l),i=oa(i,"onChange"),0<i.length&&(s=new Vl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Js=null,eo=null;function kg(t){Fd(t,0)}function na(t){var i=rs(t);if(Xt(i))return t}function Bg(t,i){if(t==="change")return i}var xd=!1;if(d){var ql;if(d){var $l="oninput"in document;if(!$l){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),$l=typeof Sd.oninput=="function"}ql=$l}else ql=!1;xd=ql&&(!document.documentMode||9<document.documentMode)}function yd(){Js&&(Js.detachEvent("onpropertychange",Md),eo=Js=null)}function Md(t){if(t.propertyName==="value"&&na(eo)){var i=[];_d(i,eo,t,G(t)),Vn(kg,i)}}function zg(t,i,s){t==="focusin"?(yd(),Js=i,eo=s,Js.attachEvent("onpropertychange",Md)):t==="focusout"&&yd()}function Hg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return na(eo)}function Vg(t,i){if(t==="click")return na(i)}function Gg(t,i){if(t==="input"||t==="change")return na(i)}function Wg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:Wg;function to(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!ei(t[c],i[c]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,i){var s=Ed(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ed(s)}}function wd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ad(){for(var t=window,i=U();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=U(t.document)}return i}function Kl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Xg(t){var i=Ad(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&wd(s.ownerDocument.documentElement,s)){if(l!==null&&Kl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Td(s,h);var E=Td(s,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jg=d&&"documentMode"in document&&11>=document.documentMode,es=null,Zl=null,no=null,Ql=!1;function Rd(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ql||es==null||es!==U(l)||(l=es,"selectionStart"in l&&Kl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),no&&to(no,l)||(no=l,l=oa(Zl,"onSelect"),0<l.length&&(i=new Vl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=es)))}function ia(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var ts={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Jl={},Cd={};d&&(Cd=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function ra(t){if(Jl[t])return Jl[t];if(!ts[t])return t;var i=ts[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Cd)return Jl[t]=i[s];return t}var bd=ra("animationend"),Pd=ra("animationiteration"),Dd=ra("animationstart"),Ld=ra("transitionend"),Nd=new Map,Id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Nd.set(t,i),u(i,[t])}for(var eu=0;eu<Id.length;eu++){var tu=Id[eu],Yg=tu.toLowerCase(),qg=tu[0].toUpperCase()+tu.slice(1);$i(Yg,"on"+qg)}$i(bd,"onAnimationEnd"),$i(Pd,"onAnimationIteration"),$i(Dd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Ld,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function Ud(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Go(l,i,void 0,t),t.currentTarget=null}function Fd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],H=D.instance,re=D.currentTarget;if(D=D.listener,H!==h&&c.isPropagationStopped())break e;Ud(c,D,re),h=H}else for(E=0;E<l.length;E++){if(D=l[E],H=D.instance,re=D.currentTarget,D=D.listener,H!==h&&c.isPropagationStopped())break e;Ud(c,D,re),h=H}}}if(Si)throw t=$r,Si=!1,$r=null,t}function Ot(t,i){var s=i[uu];s===void 0&&(s=i[uu]=new Set);var l=t+"__bubble";s.has(l)||(Od(i,t,2,!1),s.add(l))}function nu(t,i,s){var l=0;i&&(l|=4),Od(s,t,l,i)}var sa="_reactListening"+Math.random().toString(36).slice(2);function ro(t){if(!t[sa]){t[sa]=!0,r.forEach(function(s){s!=="selectionchange"&&($g.has(s)||nu(s,!1,t),nu(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[sa]||(i[sa]=!0,nu("selectionchange",!1,i))}}function Od(t,i,s,l){switch(od(i)){case 1:var c=ug;break;case 4:c=cg;break;default:c=Bl}s=c.bind(null,i,s,t),c=void 0,!qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function iu(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===c||H.nodeType===8&&H.parentNode===c))return;E=E.return}for(;D!==null;){if(E=Er(D),E===null)return;if(H=E.tag,H===5||H===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Vn(function(){var re=h,ve=G(s),xe=[];e:{var ge=Nd.get(t);if(ge!==void 0){var Be=Vl,Xe=t;switch(t){case"keypress":if(Jo(s)===0)break e;case"keydown":case"keyup":Be=wg;break;case"focusin":Xe="focus",Be=Xl;break;case"focusout":Xe="blur",Be=Xl;break;case"beforeblur":case"afterblur":Be=Xl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Cg;break;case bd:case Pd:case Dd:Be=gg;break;case Ld:Be=Pg;break;case"scroll":Be=fg;break;case"wheel":Be=Lg;break;case"copy":case"cut":case"paste":Be=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=fd}var qe=(i&4)!==0,Yt=!qe&&t==="scroll",K=qe?ge!==null?ge+"Capture":null:ge;qe=[];for(var X=re,J;X!==null;){J=X;var we=J.stateNode;if(J.tag===5&&we!==null&&(J=we,K!==null&&(we=un(X,K),we!=null&&qe.push(so(X,we,J)))),Yt)break;X=X.return}0<qe.length&&(ge=new Be(ge,Xe,null,s,ve),xe.push({event:ge,listeners:qe}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Be=t==="mouseout"||t==="pointerout",ge&&s!==ct&&(Xe=s.relatedTarget||s.fromElement)&&(Er(Xe)||Xe[Mi]))break e;if((Be||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Be?(Xe=s.relatedTarget||s.toElement,Be=re,Xe=Xe?Er(Xe):null,Xe!==null&&(Yt=yi(Xe),Xe!==Yt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Be=null,Xe=re),Be!==Xe)){if(qe=ud,we="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(qe=fd,we="onPointerLeave",K="onPointerEnter",X="pointer"),Yt=Be==null?ge:rs(Be),J=Xe==null?ge:rs(Xe),ge=new qe(we,X+"leave",Be,s,ve),ge.target=Yt,ge.relatedTarget=J,we=null,Er(ve)===re&&(qe=new qe(K,X+"enter",Xe,s,ve),qe.target=J,qe.relatedTarget=Yt,we=qe),Yt=we,Be&&Xe)t:{for(qe=Be,K=Xe,X=0,J=qe;J;J=ns(J))X++;for(J=0,we=K;we;we=ns(we))J++;for(;0<X-J;)qe=ns(qe),X--;for(;0<J-X;)K=ns(K),J--;for(;X--;){if(qe===K||K!==null&&qe===K.alternate)break t;qe=ns(qe),K=ns(K)}qe=null}else qe=null;Be!==null&&kd(xe,ge,Be,qe,!1),Xe!==null&&Yt!==null&&kd(xe,Yt,Xe,qe,!0)}}e:{if(ge=re?rs(re):window,Be=ge.nodeName&&ge.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ge.type==="file")var Ke=Bg;else if(vd(ge))if(xd)Ke=Gg;else{Ke=Hg;var et=zg}else(Be=ge.nodeName)&&Be.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Vg);if(Ke&&(Ke=Ke(t,re))){_d(xe,Ke,s,ve);break e}et&&et(t,ge,re),t==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&He(ge,"number",ge.value)}switch(et=re?rs(re):window,t){case"focusin":(vd(et)||et.contentEditable==="true")&&(es=et,Zl=re,no=null);break;case"focusout":no=Zl=es=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Rd(xe,s,ve);break;case"selectionchange":if(jg)break;case"keydown":case"keyup":Rd(xe,s,ve)}var tt;if(Yl)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else Jr?md(t,s)&&(lt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(lt="onCompositionStart");lt&&(dd&&s.locale!=="ko"&&(Jr||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&Jr&&(tt=ad()):(qi=ve,Hl="value"in qi?qi.value:qi.textContent,Jr=!0)),et=oa(re,lt),0<et.length&&(lt=new cd(lt,t,null,s,ve),xe.push({event:lt,listeners:et}),tt?lt.data=tt:(tt=gd(s),tt!==null&&(lt.data=tt)))),(tt=Ig?Ug(t,s):Fg(t,s))&&(re=oa(re,"onBeforeInput"),0<re.length&&(ve=new cd("onBeforeInput","beforeinput",null,s,ve),xe.push({event:ve,listeners:re}),ve.data=tt))}Fd(xe,i)})}function so(t,i,s){return{instance:t,listener:i,currentTarget:s}}function oa(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=un(t,s),h!=null&&l.unshift(so(t,h,c)),h=un(t,i),h!=null&&l.push(so(t,h,c))),t=t.return}return l}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kd(t,i,s,l,c){for(var h=i._reactName,E=[];s!==null&&s!==l;){var D=s,H=D.alternate,re=D.stateNode;if(H!==null&&H===l)break;D.tag===5&&re!==null&&(D=re,c?(H=un(s,h),H!=null&&E.unshift(so(s,H,D))):c||(H=un(s,h),H!=null&&E.push(so(s,H,D)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var Kg=/\r\n?/g,Zg=/\u0000|\uFFFD/g;function Bd(t){return(typeof t=="string"?t:""+t).replace(Kg,`
`).replace(Zg,"")}function aa(t,i,s){if(i=Bd(i),Bd(t)!==i&&s)throw Error(n(425))}function la(){}var ru=null,su=null;function ou(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,Qg=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(t){return zd.resolve(null).then(t).catch(ev)}:au;function ev(t){setTimeout(function(){throw t})}function lu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),$s(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);$s(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),hi="__reactFiber$"+is,oo="__reactProps$"+is,Mi="__reactContainer$"+is,uu="__reactEvents$"+is,tv="__reactListeners$"+is,nv="__reactHandles$"+is;function Er(t){var i=t[hi];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Mi]||s[hi]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Hd(t);t!==null;){if(s=t[hi])return s;t=Hd(t)}return i}t=s,s=t.parentNode}return null}function ao(t){return t=t[hi]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ua(t){return t[oo]||null}var cu=[],ss=-1;function Zi(t){return{current:t}}function kt(t){0>ss||(t.current=cu[ss],cu[ss]=null,ss--)}function Ft(t,i){ss++,cu[ss]=t.current,t.current=i}var Qi={},dn=Zi(Qi),Tn=Zi(!1),Tr=Qi;function os(t,i){var s=t.type.contextTypes;if(!s)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function wn(t){return t=t.childContextTypes,t!=null}function ca(){kt(Tn),kt(dn)}function Vd(t,i,s){if(dn.current!==Qi)throw Error(n(168));Ft(dn,i),Ft(Tn,s)}function Gd(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,pe(t)||"Unknown",c));return ne({},s,l)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=dn.current,Ft(dn,t),Ft(Tn,Tn.current),!0}function Wd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Gd(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,kt(Tn),kt(dn),Ft(dn,t)):kt(Tn),Ft(Tn,s)}var Ei=null,da=!1,fu=!1;function Xd(t){Ei===null?Ei=[t]:Ei.push(t)}function iv(t){da=!0,Xd(t)}function Ji(){if(!fu&&Ei!==null){fu=!0;var t=0,i=vt;try{var s=Ei;for(vt=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Ei=null,da=!1}catch(c){throw Ei!==null&&(Ei=Ei.slice(t+1)),T(Ce,Ji),c}finally{vt=i,fu=!1}}return null}var as=[],ls=0,ha=null,pa=0,Gn=[],Wn=0,wr=null,Ti=1,wi="";function Ar(t,i){as[ls++]=pa,as[ls++]=ha,ha=t,pa=i}function jd(t,i,s){Gn[Wn++]=Ti,Gn[Wn++]=wi,Gn[Wn++]=wr,wr=t;var l=Ti;t=wi;var c=32-yt(l)-1;l&=~(1<<c),s+=1;var h=32-yt(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Ti=1<<32-yt(i)+c|s<<c|l,wi=h+t}else Ti=1<<h|s<<c|l,wi=t}function du(t){t.return!==null&&(Ar(t,1),jd(t,1,0))}function hu(t){for(;t===ha;)ha=as[--ls],as[ls]=null,pa=as[--ls],as[ls]=null;for(;t===wr;)wr=Gn[--Wn],Gn[Wn]=null,wi=Gn[--Wn],Gn[Wn]=null,Ti=Gn[--Wn],Gn[Wn]=null}var Fn=null,On=null,Bt=!1,ti=null;function Yd(t,i){var s=qn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function qd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=wr!==null?{id:Ti,overflow:wi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=qn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Fn=t,On=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(Bt){var i=On;if(i){var s=i;if(!qd(t,i)){if(pu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=Fn;i&&qd(t,i)?Yd(l,s):(t.flags=t.flags&-4097|2,Bt=!1,Fn=t)}}else{if(pu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,Fn=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function ma(t){if(t!==Fn)return!1;if(!Bt)return $d(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ou(t.type,t.memoizedProps)),i&&(i=On)){if(pu(t))throw Kd(),Error(n(418));for(;i;)Yd(t,i),i=Ki(i.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){On=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?Ki(t.stateNode.nextSibling):null;return!0}function Kd(){for(var t=On;t;)t=Ki(t.nextSibling)}function us(){On=Fn=null,Bt=!1}function gu(t){ti===null?ti=[t]:ti.push(t)}var rv=C.ReactCurrentBatchConfig;function lo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=c.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function ga(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zd(t){var i=t._init;return i(t._payload)}function Qd(t){function i(K,X){if(t){var J=K.deletions;J===null?(K.deletions=[X],K.flags|=16):J.push(X)}}function s(K,X){if(!t)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function l(K,X){for(K=new Map;X!==null;)X.key!==null?K.set(X.key,X):K.set(X.index,X),X=X.sibling;return K}function c(K,X){return K=ar(K,X),K.index=0,K.sibling=null,K}function h(K,X,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<X?(K.flags|=2,X):J):(K.flags|=2,X)):(K.flags|=1048576,X)}function E(K){return t&&K.alternate===null&&(K.flags|=2),K}function D(K,X,J,we){return X===null||X.tag!==6?(X=ac(J,K.mode,we),X.return=K,X):(X=c(X,J),X.return=K,X)}function H(K,X,J,we){var Ke=J.type;return Ke===z?ve(K,X,J.props.children,we,J.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Zd(Ke)===X.type)?(we=c(X,J.props),we.ref=lo(K,X,J),we.return=K,we):(we=za(J.type,J.key,J.props,null,K.mode,we),we.ref=lo(K,X,J),we.return=K,we)}function re(K,X,J,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=lc(J,K.mode,we),X.return=K,X):(X=c(X,J.children||[]),X.return=K,X)}function ve(K,X,J,we,Ke){return X===null||X.tag!==7?(X=Ir(J,K.mode,we,Ke),X.return=K,X):(X=c(X,J),X.return=K,X)}function xe(K,X,J){if(typeof X=="string"&&X!==""||typeof X=="number")return X=ac(""+X,K.mode,J),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case V:return J=za(X.type,X.key,X.props,null,K.mode,J),J.ref=lo(K,null,X),J.return=K,J;case B:return X=lc(X,K.mode,J),X.return=K,X;case ae:var we=X._init;return xe(K,we(X._payload),J)}if(ot(X)||fe(X))return X=Ir(X,K.mode,J,null),X.return=K,X;ga(K,X)}return null}function ge(K,X,J,we){var Ke=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ke!==null?null:D(K,X,""+J,we);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return J.key===Ke?H(K,X,J,we):null;case B:return J.key===Ke?re(K,X,J,we):null;case ae:return Ke=J._init,ge(K,X,Ke(J._payload),we)}if(ot(J)||fe(J))return Ke!==null?null:ve(K,X,J,we,null);ga(K,J)}return null}function Be(K,X,J,we,Ke){if(typeof we=="string"&&we!==""||typeof we=="number")return K=K.get(J)||null,D(X,K,""+we,Ke);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return K=K.get(we.key===null?J:we.key)||null,H(X,K,we,Ke);case B:return K=K.get(we.key===null?J:we.key)||null,re(X,K,we,Ke);case ae:var et=we._init;return Be(K,X,J,et(we._payload),Ke)}if(ot(we)||fe(we))return K=K.get(J)||null,ve(X,K,we,Ke,null);ga(X,we)}return null}function Xe(K,X,J,we){for(var Ke=null,et=null,tt=X,lt=X=0,sn=null;tt!==null&&lt<J.length;lt++){tt.index>lt?(sn=tt,tt=null):sn=tt.sibling;var Et=ge(K,tt,J[lt],we);if(Et===null){tt===null&&(tt=sn);break}t&&tt&&Et.alternate===null&&i(K,tt),X=h(Et,X,lt),et===null?Ke=Et:et.sibling=Et,et=Et,tt=sn}if(lt===J.length)return s(K,tt),Bt&&Ar(K,lt),Ke;if(tt===null){for(;lt<J.length;lt++)tt=xe(K,J[lt],we),tt!==null&&(X=h(tt,X,lt),et===null?Ke=tt:et.sibling=tt,et=tt);return Bt&&Ar(K,lt),Ke}for(tt=l(K,tt);lt<J.length;lt++)sn=Be(tt,K,lt,J[lt],we),sn!==null&&(t&&sn.alternate!==null&&tt.delete(sn.key===null?lt:sn.key),X=h(sn,X,lt),et===null?Ke=sn:et.sibling=sn,et=sn);return t&&tt.forEach(function(lr){return i(K,lr)}),Bt&&Ar(K,lt),Ke}function qe(K,X,J,we){var Ke=fe(J);if(typeof Ke!="function")throw Error(n(150));if(J=Ke.call(J),J==null)throw Error(n(151));for(var et=Ke=null,tt=X,lt=X=0,sn=null,Et=J.next();tt!==null&&!Et.done;lt++,Et=J.next()){tt.index>lt?(sn=tt,tt=null):sn=tt.sibling;var lr=ge(K,tt,Et.value,we);if(lr===null){tt===null&&(tt=sn);break}t&&tt&&lr.alternate===null&&i(K,tt),X=h(lr,X,lt),et===null?Ke=lr:et.sibling=lr,et=lr,tt=sn}if(Et.done)return s(K,tt),Bt&&Ar(K,lt),Ke;if(tt===null){for(;!Et.done;lt++,Et=J.next())Et=xe(K,Et.value,we),Et!==null&&(X=h(Et,X,lt),et===null?Ke=Et:et.sibling=Et,et=Et);return Bt&&Ar(K,lt),Ke}for(tt=l(K,tt);!Et.done;lt++,Et=J.next())Et=Be(tt,K,lt,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&tt.delete(Et.key===null?lt:Et.key),X=h(Et,X,lt),et===null?Ke=Et:et.sibling=Et,et=Et);return t&&tt.forEach(function(Ov){return i(K,Ov)}),Bt&&Ar(K,lt),Ke}function Yt(K,X,J,we){if(typeof J=="object"&&J!==null&&J.type===z&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case V:e:{for(var Ke=J.key,et=X;et!==null;){if(et.key===Ke){if(Ke=J.type,Ke===z){if(et.tag===7){s(K,et.sibling),X=c(et,J.props.children),X.return=K,K=X;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ae&&Zd(Ke)===et.type){s(K,et.sibling),X=c(et,J.props),X.ref=lo(K,et,J),X.return=K,K=X;break e}s(K,et);break}else i(K,et);et=et.sibling}J.type===z?(X=Ir(J.props.children,K.mode,we,J.key),X.return=K,K=X):(we=za(J.type,J.key,J.props,null,K.mode,we),we.ref=lo(K,X,J),we.return=K,K=we)}return E(K);case B:e:{for(et=J.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){s(K,X.sibling),X=c(X,J.children||[]),X.return=K,K=X;break e}else{s(K,X);break}else i(K,X);X=X.sibling}X=lc(J,K.mode,we),X.return=K,K=X}return E(K);case ae:return et=J._init,Yt(K,X,et(J._payload),we)}if(ot(J))return Xe(K,X,J,we);if(fe(J))return qe(K,X,J,we);ga(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,X!==null&&X.tag===6?(s(K,X.sibling),X=c(X,J),X.return=K,K=X):(s(K,X),X=ac(J,K.mode,we),X.return=K,K=X),E(K)):s(K,X)}return Yt}var cs=Qd(!0),Jd=Qd(!1),va=Zi(null),_a=null,fs=null,vu=null;function _u(){vu=fs=_a=null}function xu(t){var i=va.current;kt(va),t._currentValue=i}function Su(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function ds(t,i){_a=t,vu=fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(vu!==t)if(t={context:t,memoizedValue:i,next:null},fs===null){if(_a===null)throw Error(n(308));fs=t,_a.dependencies={lanes:0,firstContext:t}}else fs=fs.next=t;return i}var Rr=null;function yu(t){Rr===null?Rr=[t]:Rr.push(t)}function eh(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,yu(i)):(s.next=c.next,c.next=s),i.interleaved=s,Ai(t,l)}function Ai(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var er=!1;function Mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,Ai(t,s)}return c=l.interleaved,c===null?(i.next=i,yu(l)):(i.next=c.next,c.next=i),l.interleaved=i,Ai(t,s)}function xa(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Mr(t,s)}}function nh(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=E:h=h.next=E,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function Sa(t,i,s,l){var c=t.updateQueue;er=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var H=D,re=H.next;H.next=null,E===null?h=re:E.next=re,E=H;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==E&&(D===null?ve.firstBaseUpdate=re:D.next=re,ve.lastBaseUpdate=H))}if(h!==null){var xe=c.baseState;E=0,ve=re=H=null,D=h;do{var ge=D.lane,Be=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Be,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Xe=t,qe=D;switch(ge=i,Be=s,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){xe=Xe.call(Be,xe,ge);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,ge=typeof Xe=="function"?Xe.call(Be,xe,ge):Xe,ge==null)break e;xe=ne({},xe,ge);break e;case 2:er=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[D]:ge.push(D))}else Be={eventTime:Be,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(re=ve=Be,H=xe):ve=ve.next=Be,E|=ge;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(H=xe),c.baseState=H,c.firstBaseUpdate=re,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=E,t.lanes=E,t.memoizedState=xe}}function ih(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var uo={},pi=Zi(uo),co=Zi(uo),fo=Zi(uo);function Cr(t){if(t===uo)throw Error(n(174));return t}function Eu(t,i){switch(Ft(fo,i),Ft(co,t),Ft(pi,uo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:de(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=de(i,t)}kt(pi),Ft(pi,i)}function hs(){kt(pi),kt(co),kt(fo)}function rh(t){Cr(fo.current);var i=Cr(pi.current),s=de(i,t.type);i!==s&&(Ft(co,t),Ft(pi,s))}function Tu(t){co.current===t&&(kt(pi),kt(co))}var Ht=Zi(0);function ya(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Au(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Ma=C.ReactCurrentDispatcher,Ru=C.ReactCurrentBatchConfig,br=0,Vt=null,Qt=null,nn=null,Ea=!1,ho=!1,po=0,sv=0;function hn(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!ei(t[s],i[s]))return!1;return!0}function bu(t,i,s,l,c,h){if(br=h,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ma.current=t===null||t.memoizedState===null?uv:cv,t=s(l,c),ho){h=0;do{if(ho=!1,po=0,25<=h)throw Error(n(301));h+=1,nn=Qt=null,i.updateQueue=null,Ma.current=fv,t=s(l,c)}while(ho)}if(Ma.current=Aa,i=Qt!==null&&Qt.next!==null,br=0,nn=Qt=Vt=null,Ea=!1,i)throw Error(n(300));return t}function Pu(){var t=po!==0;return po=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=t:nn=nn.next=t,nn}function jn(){if(Qt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Qt=t;else{if(t===null)throw Error(n(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},nn===null?Vt.memoizedState=nn=t:nn=nn.next=t}return nn}function mo(t,i){return typeof i=="function"?i(t):i}function Du(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Qt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=E=null,H=null,re=h;do{var ve=re.lane;if((br&ve)===ve)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),l=re.hasEagerState?re.eagerState:t(l,re.action);else{var xe={lane:ve,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(D=H=xe,E=l):H=H.next=xe,Vt.lanes|=ve,Pr|=ve}re=re.next}while(re!==null&&re!==h);H===null?E=l:H.next=D,ei(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=H,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Vt.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Lu(t){var i=jn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);ei(h,i.memoizedState)||(An=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function sh(){}function oh(t,i){var s=Vt,l=jn(),c=i(),h=!ei(l.memoizedState,c);if(h&&(l.memoizedState=c,An=!0),l=l.queue,Nu(uh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,go(9,lh.bind(null,s,l,c,i),void 0,null),rn===null)throw Error(n(349));(br&30)!==0||ah(s,i,c)}return c}function ah(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function lh(t,i,s,l){i.value=s,i.getSnapshot=l,ch(i)&&fh(t)}function uh(t,i,s){return s(function(){ch(i)&&fh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!ei(t,s)}catch{return!0}}function fh(t){var i=Ai(t,1);i!==null&&si(i,t,1,-1)}function dh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},i.queue=t,t=t.dispatch=lv.bind(null,Vt,t),[i.memoizedState,t]}function go(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return jn().memoizedState}function Ta(t,i,s,l){var c=mi();Vt.flags|=t,c.memoizedState=go(1|i,s,void 0,l===void 0?null:l)}function wa(t,i,s,l){var c=jn();l=l===void 0?null:l;var h=void 0;if(Qt!==null){var E=Qt.memoizedState;if(h=E.destroy,l!==null&&Cu(l,E.deps)){c.memoizedState=go(i,s,h,l);return}}Vt.flags|=t,c.memoizedState=go(1|i,s,h,l)}function ph(t,i){return Ta(8390656,8,t,i)}function Nu(t,i){return wa(2048,8,t,i)}function mh(t,i){return wa(4,2,t,i)}function gh(t,i){return wa(4,4,t,i)}function vh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _h(t,i,s){return s=s!=null?s.concat([t]):null,wa(4,4,vh.bind(null,i,t),s)}function Iu(){}function xh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Sh(t,i){var s=jn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Cu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function yh(t,i,s){return(br&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=s):(ei(s,i)||(s=xn(),Vt.lanes|=s,Pr|=s,t.baseState=!0),i)}function ov(t,i){var s=vt;vt=s!==0&&4>s?s:4,t(!0);var l=Ru.transition;Ru.transition={};try{t(!1),i()}finally{vt=s,Ru.transition=l}}function Mh(){return jn().memoizedState}function av(t,i,s){var l=sr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Eh(t))Th(i,s);else if(s=eh(t,i,s,l),s!==null){var c=yn();si(s,t,l,c),wh(s,i,l)}}function lv(t,i,s){var l=sr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))Th(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,s);if(c.hasEagerState=!0,c.eagerState=D,ei(D,E)){var H=i.interleaved;H===null?(c.next=c,yu(i)):(c.next=H.next,H.next=c),i.interleaved=c;return}}catch{}finally{}s=eh(t,i,c,l),s!==null&&(c=yn(),si(s,t,l,c),wh(s,i,l))}}function Eh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Th(t,i){ho=Ea=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function wh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Mr(t,s)}}var Aa={readContext:Xn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},uv={readContext:Xn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:ph,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ta(4194308,4,vh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ta(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ta(4,2,t,i)},useMemo:function(t,i){var s=mi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=mi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=av.bind(null,Vt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:dh,useDebugValue:Iu,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=dh(!1),i=t[0];return t=ov.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Vt,c=mi();if(Bt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),rn===null)throw Error(n(349));(br&30)!==0||ah(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,ph(uh.bind(null,l,h,t),[t]),l.flags|=2048,go(9,lh.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=mi(),i=rn.identifierPrefix;if(Bt){var s=wi,l=Ti;s=(l&~(1<<32-yt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=po++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=sv++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},cv={readContext:Xn,useCallback:xh,useContext:Xn,useEffect:Nu,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Du,useRef:hh,useState:function(){return Du(mo)},useDebugValue:Iu,useDeferredValue:function(t){var i=jn();return yh(i,Qt.memoizedState,t)},useTransition:function(){var t=Du(mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},fv={readContext:Xn,useCallback:xh,useContext:Xn,useEffect:Nu,useImperativeHandle:_h,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:Sh,useReducer:Lu,useRef:hh,useState:function(){return Lu(mo)},useDebugValue:Iu,useDeferredValue:function(t){var i=jn();return Qt===null?i.memoizedState=t:yh(i,Qt.memoizedState,t)},useTransition:function(){var t=Lu(mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=ne({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Uu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ne({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ra={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=Ri(l,c);h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(si(i,t,c,l),xa(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),c=sr(t),h=Ri(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=tr(t,h,c),i!==null&&(si(i,t,c,l),xa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=sr(t),c=Ri(s,l);c.tag=2,i!=null&&(c.callback=i),i=tr(t,c,l),i!==null&&(si(i,t,l,s),xa(i,t,l))}};function Ah(t,i,s,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!to(s,l)||!to(c,h):!0}function Rh(t,i,s){var l=!1,c=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Xn(h):(c=wn(i)?Tr:dn.current,l=i.contextTypes,h=(l=l!=null)?os(t,c):Qi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ra,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Ch(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Ra.enqueueReplaceState(i,i.state,null)}function Fu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},Mu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Xn(h):(h=wn(i)?Tr:dn.current,c.context=os(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Uu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Ra.enqueueReplaceState(c,c.state,null),Sa(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ps(t,i){try{var s="",l=i;do s+=Ue(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Ou(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function ku(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,s){s=Ri(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ia||(Ia=!0,Ju=l),ku(t,i)},s}function Ph(t,i,s){s=Ri(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){ku(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){ku(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function Dh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new dv;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=Av.bind(null,t,i,s),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Nh(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Ri(-1,1),i.tag=2,tr(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var hv=C.ReactCurrentOwner,An=!1;function Sn(t,i,s,l){i.child=t===null?Jd(i,null,s,l):cs(i,t.child,s,l)}function Ih(t,i,s,l,c){s=s.render;var h=i.ref;return ds(i,c),l=bu(t,i,s,l,h,c),s=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Bt&&s&&du(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Uh(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!oc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Fh(t,i,h,l,c)):(t=za(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(s=s.compare,s=s!==null?s:to,s(E,l)&&t.ref===i.ref)return Ci(t,i,c)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(to(h,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ci(t,i,c)}return Bu(t,i,s,l,c)}function Oh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(gs,kn),kn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ft(gs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Ft(gs,kn),kn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Ft(gs,kn),kn|=l;return Sn(t,i,c,s),i.child}function kh(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Bu(t,i,s,l,c){var h=wn(s)?Tr:dn.current;return h=os(i,h),ds(i,c),s=bu(t,i,s,l,h,c),l=Pu(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ci(t,i,c)):(Bt&&l&&du(i),i.flags|=1,Sn(t,i,s,c),i.child)}function Bh(t,i,s,l,c){if(wn(s)){var h=!0;fa(i)}else h=!1;if(ds(i,c),i.stateNode===null)ba(t,i),Rh(i,s,l),Fu(i,s,l,c),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var H=E.context,re=s.contextType;typeof re=="object"&&re!==null?re=Xn(re):(re=wn(s)?Tr:dn.current,re=os(i,re));var ve=s.getDerivedStateFromProps,xe=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||H!==re)&&Ch(i,E,l,re),er=!1;var ge=i.memoizedState;E.state=ge,Sa(i,l,E,c),H=i.memoizedState,D!==l||ge!==H||Tn.current||er?(typeof ve=="function"&&(Uu(i,s,ve,l),H=i.memoizedState),(D=er||Ah(i,s,D,l,ge,H,re))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),E.props=l,E.state=H,E.context=re,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,th(t,i),D=i.memoizedProps,re=i.type===i.elementType?D:ni(i.type,D),E.props=re,xe=i.pendingProps,ge=E.context,H=s.contextType,typeof H=="object"&&H!==null?H=Xn(H):(H=wn(s)?Tr:dn.current,H=os(i,H));var Be=s.getDerivedStateFromProps;(ve=typeof Be=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==xe||ge!==H)&&Ch(i,E,l,H),er=!1,ge=i.memoizedState,E.state=ge,Sa(i,l,E,c);var Xe=i.memoizedState;D!==xe||ge!==Xe||Tn.current||er?(typeof Be=="function"&&(Uu(i,s,Be,l),Xe=i.memoizedState),(re=er||Ah(i,s,re,l,ge,Xe,H)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Xe,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Xe,H)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Xe),E.props=l,E.state=Xe,E.context=H,l=re):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return zu(t,i,s,l,h,c)}function zu(t,i,s,l,c,h){kh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&Wd(i,s,!1),Ci(t,i,h);l=i.stateNode,hv.current=i;var D=E&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=cs(i,t.child,null,h),i.child=cs(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,c&&Wd(i,s,!0),i.child}function zh(t){var i=t.stateNode;i.pendingContext?Vd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vd(t,i.context,!1),Eu(t,i.containerInfo)}function Hh(t,i,s,l,c){return us(),gu(c),i.flags|=256,Sn(t,i,s,l),i.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,s){var l=i.pendingProps,c=Ht.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ft(Ht,c&1),t===null)return mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ha(E,l,0,null),t=Ir(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Vu(s),i.memoizedState=Hu,t):Gu(i,E));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return pv(t,i,E,l,D,c,s);if(h){h=l.fallback,E=i.mode,c=t.child,D=c.sibling;var H={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=ar(c,H),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=ar(D,h):(h=Ir(h,E,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Vu(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~s,i.memoizedState=Hu,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Gu(t,i){return i=Ha({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ca(t,i,s,l){return l!==null&&gu(l),cs(i,t.child,null,s),t=Gu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function pv(t,i,s,l,c,h,E){if(s)return i.flags&256?(i.flags&=-257,l=Ou(Error(n(422))),Ca(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ha({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,E),i.child.memoizedState=Vu(E),i.memoizedState=Hu,h);if((i.mode&1)===0)return Ca(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Ou(h,l,void 0),Ca(t,i,E,l)}if(D=(E&t.childLanes)!==0,An||D){if(l=rn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Ai(t,c),si(l,t,c,-1))}return sc(),l=Ou(Error(n(421))),Ca(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=Rv.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,On=Ki(c.nextSibling),Fn=i,Bt=!0,ti=null,t!==null&&(Gn[Wn++]=Ti,Gn[Wn++]=wi,Gn[Wn++]=wr,Ti=t.id,wi=t.overflow,wr=i),i=Gu(i,l.children),i.flags|=4096,i)}function Gh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Su(t.return,i,s)}function Wu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Wh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,s),l=Ht.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,s,i);else if(t.tag===19)Gh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ft(Ht,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&ya(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Wu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&ya(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Wu(i,!0,s,null,h);break;case"together":Wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ba(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ci(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=ar(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ar(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function mv(t,i,s){switch(i.tag){case 3:zh(i),us();break;case 5:rh(i);break;case 1:wn(i.type)&&fa(i);break;case 4:Eu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ft(va,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ft(Ht,Ht.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Vh(t,i,s):(Ft(Ht,Ht.current&1),t=Ci(t,i,s),t!==null?t.sibling:null);Ft(Ht,Ht.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ft(Ht,Ht.current),l)break;return null;case 22:case 23:return i.lanes=0,Oh(t,i,s)}return Ci(t,i,s)}var Xh,Xu,jh,Yh;Xh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Xu=function(){},jh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(pi.current);var h=null;switch(s){case"input":c=At(t,c),l=At(t,l),h=[];break;case"select":c=ne({},c,{value:void 0}),l=ne({},l,{value:void 0}),h=[];break;case"textarea":c=Dt(t,c),l=Dt(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=la)}$e(s,l);var E;s=null;for(re in c)if(!l.hasOwnProperty(re)&&c.hasOwnProperty(re)&&c[re]!=null)if(re==="style"){var D=c[re];for(E in D)D.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?h||(h=[]):(h=h||[]).push(re,null));for(re in l){var H=l[re];if(D=c!=null?c[re]:void 0,l.hasOwnProperty(re)&&H!==D&&(H!=null||D!=null))if(re==="style")if(D){for(E in D)!D.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in H)H.hasOwnProperty(E)&&D[E]!==H[E]&&(s||(s={}),s[E]=H[E])}else s||(h||(h=[]),h.push(re,s)),s=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,D=D?D.__html:void 0,H!=null&&D!==H&&(h=h||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&Ot("scroll",t),h||D===H||(h=[])):(h=h||[]).push(re,H))}s&&(h=h||[]).push("style",s);var re=h;(i.updateQueue=re)&&(i.flags|=4)}},Yh=function(t,i,s,l){s!==l&&(i.flags|=4)};function vo(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function pn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function gv(t,i,s){var l=i.pendingProps;switch(hu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return wn(i.type)&&ca(),pn(i),null;case 3:return l=i.stateNode,hs(),kt(Tn),kt(dn),Au(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ma(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(nc(ti),ti=null))),Xu(t,i),pn(i),null;case 5:Tu(i);var c=Cr(fo.current);if(s=i.type,t!==null&&i.stateNode!=null)jh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return pn(i),null}if(t=Cr(pi.current),ma(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[hi]=i,l[oo]=h,t=(i.mode&1)!==0,s){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(c=0;c<io.length;c++)Ot(io[c],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":st(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":b(l,h),Ot("invalid",l)}$e(s,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&aa(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",l)}switch(s){case"input":dt(l),_t(l,h,!0);break;case"textarea":dt(l),k(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=la)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Z(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(s,{is:l.is}):(t=E.createElement(s),s==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,s),t[hi]=i,t[oo]=l,Xh(t,i,!1,!1),i.stateNode=t;e:{switch(E=Re(s,l),s){case"dialog":Ot("cancel",t),Ot("close",t),c=l;break;case"iframe":case"object":case"embed":Ot("load",t),c=l;break;case"video":case"audio":for(c=0;c<io.length;c++)Ot(io[c],t);c=l;break;case"source":Ot("error",t),c=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),c=l;break;case"details":Ot("toggle",t),c=l;break;case"input":st(t,l),c=At(t,l),Ot("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ne({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":b(t,l),c=Dt(t,l),Ot("invalid",t);break;default:c=l}$e(s,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var H=D[h];h==="style"?Pe(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ne(t,H)):h==="children"?typeof H=="string"?(s!=="textarea"||H!=="")&&ye(t,H):typeof H=="number"&&ye(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?H!=null&&h==="onScroll"&&Ot("scroll",t):H!=null&&N(t,h,H,E))}switch(s){case"input":dt(t),_t(t,l,!1);break;case"textarea":dt(t),k(t);break;case"option":l.value!=null&&t.setAttribute("value",""+_e(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Pt(t,!!l.multiple,h,!1):l.defaultValue!=null&&Pt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=la)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(t&&i.stateNode!=null)Yh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(fo.current),Cr(pi.current),ma(i)){if(l=i.stateNode,s=i.memoizedProps,l[hi]=i,(h=l.nodeValue!==s)&&(t=Fn,t!==null))switch(t.tag){case 3:aa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return pn(i),null;case 13:if(kt(Ht),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Kd(),us(),i.flags|=98560,h=!1;else if(h=ma(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[hi]=i}else us(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),h=!1}else ti!==null&&(nc(ti),ti=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):sc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return hs(),Xu(t,i),t===null&&ro(i.stateNode.containerInfo),pn(i),null;case 10:return xu(i.type._context),pn(i),null;case 17:return wn(i.type)&&ca(),pn(i),null;case 19:if(kt(Ht),h=i.memoizedState,h===null)return pn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)vo(h,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=ya(t),E!==null){for(i.flags|=128,vo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ft(Ht,Ht.current&1|2),i.child}t=t.sibling}h.tail!==null&&j()>vs&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304)}else{if(!l)if(t=ya(E),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),vo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Bt)return pn(i),null}else 2*j()-h.renderingStartTime>vs&&s!==1073741824&&(i.flags|=128,l=!0,vo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(s=h.last,s!==null?s.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=j(),i.sibling=null,s=Ht.current,Ft(Ht,l?s&1|2:s&1),i):(pn(i),null);case 22:case 23:return rc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function vv(t,i){switch(hu(i),i.tag){case 1:return wn(i.type)&&ca(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return hs(),kt(Tn),kt(dn),Au(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tu(i),null;case 13:if(kt(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));us()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Ht),null;case 4:return hs(),null;case 10:return xu(i.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Pa=!1,mn=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ms(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Gt(t,i,l)}else s.current=null}function ju(t,i,s){try{s()}catch(l){Gt(t,i,l)}}var qh=!1;function xv(t,i){if(ru=Ko,t=Ad(),Kl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var E=0,D=-1,H=-1,re=0,ve=0,xe=t,ge=null;t:for(;;){for(var Be;xe!==s||c!==0&&xe.nodeType!==3||(D=E+c),xe!==h||l!==0&&xe.nodeType!==3||(H=E+l),xe.nodeType===3&&(E+=xe.nodeValue.length),(Be=xe.firstChild)!==null;)ge=xe,xe=Be;for(;;){if(xe===t)break t;if(ge===s&&++re===c&&(D=E),ge===h&&++ve===l&&(H=E),(Be=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Be}s=D===-1||H===-1?null:{start:D,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(su={focusedElem:t,selectionRange:s},Ko=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,Yt=Xe.memoizedState,K=i.stateNode,X=K.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ni(i.type,qe),Yt);K.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Gt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return Xe=qh,qh=!1,Xe}function _o(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&ju(i,s,h)}c=c.next}while(c!==l)}}function Da(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Yu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function $h(t){var i=t.alternate;i!==null&&(t.alternate=null,$h(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[oo],delete i[uu],delete i[tv],delete i[nv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=la));else if(l!==4&&(t=t.child,t!==null))for(qu(t,i,s),t=t.sibling;t!==null;)qu(t,i,s),t=t.sibling}function $u(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for($u(t,i,s),t=t.sibling;t!==null;)$u(t,i,s),t=t.sibling}var an=null,ii=!1;function nr(t,i,s){for(s=s.child;s!==null;)Qh(t,i,s),s=s.sibling}function Qh(t,i,s){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ze,s)}catch{}switch(s.tag){case 5:mn||ms(s,i);case 6:var l=an,c=ii;an=null,nr(t,i,s),an=l,ii=c,an!==null&&(ii?(t=an,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):an.removeChild(s.stateNode));break;case 18:an!==null&&(ii?(t=an,s=s.stateNode,t.nodeType===8?lu(t.parentNode,s):t.nodeType===1&&lu(t,s),$s(t)):lu(an,s.stateNode));break;case 4:l=an,c=ii,an=s.stateNode.containerInfo,ii=!0,nr(t,i,s),an=l,ii=c;break;case 0:case 11:case 14:case 15:if(!mn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&ju(s,i,E),c=c.next}while(c!==l)}nr(t,i,s);break;case 1:if(!mn&&(ms(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(D){Gt(s,i,D)}nr(t,i,s);break;case 21:nr(t,i,s);break;case 22:s.mode&1?(mn=(l=mn)||s.memoizedState!==null,nr(t,i,s),mn=l):nr(t,i,s);break;default:nr(t,i,s)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new _v),i.forEach(function(l){var c=Cv.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function ri(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:an=D.stateNode,ii=!1;break e;case 3:an=D.stateNode.containerInfo,ii=!0;break e;case 4:an=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(an===null)throw Error(n(160));Qh(h,E,c),an=null,ii=!1;var H=c.alternate;H!==null&&(H.return=null),c.return=null}catch(re){Gt(c,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),gi(t),l&4){try{_o(3,t,t.return),Da(3,t)}catch(qe){Gt(t,t.return,qe)}try{_o(5,t,t.return)}catch(qe){Gt(t,t.return,qe)}}break;case 1:ri(i,t),gi(t),l&512&&s!==null&&ms(s,s.return);break;case 5:if(ri(i,t),gi(t),l&512&&s!==null&&ms(s,s.return),t.flags&32){var c=t.stateNode;try{ye(c,"")}catch(qe){Gt(t,t.return,qe)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=s!==null?s.memoizedProps:h,D=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&Je(c,h),Re(D,E);var re=Re(D,h);for(E=0;E<H.length;E+=2){var ve=H[E],xe=H[E+1];ve==="style"?Pe(c,xe):ve==="dangerouslySetInnerHTML"?Ne(c,xe):ve==="children"?ye(c,xe):N(c,ve,xe,re)}switch(D){case"input":Ge(c,h);break;case"textarea":g(c,h);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Be=h.value;Be!=null?Pt(c,!!h.multiple,Be,!1):ge!==!!h.multiple&&(h.defaultValue!=null?Pt(c,!!h.multiple,h.defaultValue,!0):Pt(c,!!h.multiple,h.multiple?[]:"",!1))}c[oo]=h}catch(qe){Gt(t,t.return,qe)}}break;case 6:if(ri(i,t),gi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(qe){Gt(t,t.return,qe)}}break;case 3:if(ri(i,t),gi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$s(i.containerInfo)}catch(qe){Gt(t,t.return,qe)}break;case 4:ri(i,t),gi(t);break;case 13:ri(i,t),gi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Qu=j())),l&4&&Jh(t);break;case 22:if(ve=s!==null&&s.memoizedState!==null,t.mode&1?(mn=(re=mn)||ve,ri(i,t),mn=re):ri(i,t),gi(t),l&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!ve&&(t.mode&1)!==0)for(Ve=t,ve=t.child;ve!==null;){for(xe=Ve=ve;Ve!==null;){switch(ge=Ve,Be=ge.child,ge.tag){case 0:case 11:case 14:case 15:_o(4,ge,ge.return);break;case 1:ms(ge,ge.return);var Xe=ge.stateNode;if(typeof Xe.componentWillUnmount=="function"){l=ge,s=ge.return;try{i=l,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Gt(l,s,qe)}}break;case 5:ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ip(xe);continue}}Be!==null?(Be.return=ge,Ve=Be):ip(xe)}ve=ve.sibling}e:for(ve=null,xe=t;;){if(xe.tag===5){if(ve===null){ve=xe;try{c=xe.stateNode,re?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=xe.stateNode,H=xe.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,D.style.display=Te("display",E))}catch(qe){Gt(t,t.return,qe)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=re?"":xe.memoizedProps}catch(qe){Gt(t,t.return,qe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===t)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===t)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===t)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ri(i,t),gi(t),l&4&&Jh(t);break;case 21:break;default:ri(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Kh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ye(c,""),l.flags&=-33);var h=Zh(t);$u(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,D=Zh(t);qu(t,D,E);break;default:throw Error(n(161))}}catch(H){Gt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Sv(t,i,s){Ve=t,tp(t)}function tp(t,i,s){for(var l=(t.mode&1)!==0;Ve!==null;){var c=Ve,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||Pa;if(!E){var D=c.alternate,H=D!==null&&D.memoizedState!==null||mn;D=Pa;var re=mn;if(Pa=E,(mn=H)&&!re)for(Ve=c;Ve!==null;)E=Ve,H=E.child,E.tag===22&&E.memoizedState!==null?rp(c):H!==null?(H.return=E,Ve=H):rp(c);for(;h!==null;)Ve=h,tp(h),h=h.sibling;Ve=c,Pa=D,mn=re}np(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ve=h):np(t)}}function np(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Da(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!mn)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:ni(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&ih(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}ih(i,E,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&s.focus();break;case"img":H.src&&(s.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ve=re.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&$s(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}mn||i.flags&512&&Yu(i)}catch(ge){Gt(i,i.return,ge)}}if(i===t){Ve=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function ip(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ve=s;break}Ve=i.return}}function rp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Da(4,i)}catch(H){Gt(i,s,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(H){Gt(i,c,H)}}var h=i.return;try{Yu(i)}catch(H){Gt(i,h,H)}break;case 5:var E=i.return;try{Yu(i)}catch(H){Gt(i,E,H)}}}catch(H){Gt(i,i.return,H)}if(i===t){Ve=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ve=D;break}Ve=i.return}}var yv=Math.ceil,La=C.ReactCurrentDispatcher,Ku=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Mt=0,rn=null,qt=null,ln=0,kn=0,gs=Zi(0),Jt=0,xo=null,Pr=0,Na=0,Zu=0,So=null,Rn=null,Qu=0,vs=1/0,bi=null,Ia=!1,Ju=null,ir=null,Ua=!1,rr=null,Fa=0,yo=0,ec=null,Oa=-1,ka=0;function yn(){return(Mt&6)!==0?j():Oa!==-1?Oa:Oa=j()}function sr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&ln!==0?ln&-ln:rv.transition!==null?(ka===0&&(ka=xn()),ka):(t=vt,t!==0||(t=window.event,t=t===void 0?16:od(t.type)),t)}function si(t,i,s,l){if(50<yo)throw yo=0,ec=null,Error(n(185));jt(t,s,l),((Mt&2)===0||t!==rn)&&(t===rn&&((Mt&2)===0&&(Na|=s),Jt===4&&or(t,ln)),Cn(t,l),s===1&&Mt===0&&(i.mode&1)===0&&(vs=j()+500,da&&Ji()))}function Cn(t,i){var s=t.callbackNode;yr(t,i);var l=Jn(t,t===rn?ln:0);if(l===0)s!==null&&q(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&q(s),i===1)t.tag===0?iv(op.bind(null,t)):Xd(op.bind(null,t)),Jg(function(){(Mt&6)===0&&Ji()}),s=null;else{switch(Qf(l)){case 1:s=Ce;break;case 4:s=We;break;case 16:s=ke;break;case 536870912:s=rt;break;default:s=ke}s=pp(s,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function sp(t,i){if(Oa=-1,ka=0,(Mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Jn(t,t===rn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ba(t,l);else{i=l;var c=Mt;Mt|=2;var h=lp();(rn!==t||ln!==i)&&(bi=null,vs=j()+500,Lr(t,i));do try{Tv();break}catch(D){ap(t,D)}while(!0);_u(),La.current=h,Mt=c,qt!==null?i=0:(rn=null,ln=0,i=Jt)}if(i!==0){if(i===2&&(c=Ut(t),c!==0&&(l=c,i=tc(t,c))),i===1)throw s=xo,Lr(t,0),or(t,l),Cn(t,j()),s;if(i===6)or(t,l);else{if(c=t.current.alternate,(l&30)===0&&!Mv(c)&&(i=Ba(t,l),i===2&&(h=Ut(t),h!==0&&(l=h,i=tc(t,h))),i===1))throw s=xo,Lr(t,0),or(t,l),Cn(t,j()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Rn,bi);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Qu+500-j(),10<i)){if(Jn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=au(Nr.bind(null,t,Rn,bi),i);break}Nr(t,Rn,bi);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-yt(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=j()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*yv(l/1960))-l,10<l){t.timeoutHandle=au(Nr.bind(null,t,Rn,bi),l);break}Nr(t,Rn,bi);break;case 5:Nr(t,Rn,bi);break;default:throw Error(n(329))}}}return Cn(t,j()),t.callbackNode===s?sp.bind(null,t):null}function tc(t,i){var s=So;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Ba(t,i),t!==2&&(i=Rn,Rn=s,i!==null&&nc(i)),t}function nc(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function Mv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!ei(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Zu,i&=~Na,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-yt(i),l=1<<s;t[s]=-1,i&=~l}}function op(t){if((Mt&6)!==0)throw Error(n(327));_s();var i=Jn(t,0);if((i&1)===0)return Cn(t,j()),null;var s=Ba(t,i);if(t.tag!==0&&s===2){var l=Ut(t);l!==0&&(i=l,s=tc(t,l))}if(s===1)throw s=xo,Lr(t,0),or(t,i),Cn(t,j()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Rn,bi),Cn(t,j()),null}function ic(t,i){var s=Mt;Mt|=1;try{return t(i)}finally{Mt=s,Mt===0&&(vs=j()+500,da&&Ji())}}function Dr(t){rr!==null&&rr.tag===0&&(Mt&6)===0&&_s();var i=Mt;Mt|=1;var s=Yn.transition,l=vt;try{if(Yn.transition=null,vt=1,t)return t()}finally{vt=l,Yn.transition=s,Mt=i,(Mt&6)===0&&Ji()}}function rc(){kn=gs.current,kt(gs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Qg(s)),qt!==null)for(s=qt.return;s!==null;){var l=s;switch(hu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ca();break;case 3:hs(),kt(Tn),kt(dn),Au();break;case 5:Tu(l);break;case 4:hs();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:xu(l.type._context);break;case 22:case 23:rc()}s=s.return}if(rn=t,qt=t=ar(t.current,null),ln=kn=i,Jt=0,xo=null,Zu=Na=Pr=0,Rn=So=null,Rr!==null){for(i=0;i<Rr.length;i++)if(s=Rr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}s.pending=l}Rr=null}return t}function ap(t,i){do{var s=qt;try{if(_u(),Ma.current=Aa,Ea){for(var l=Vt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ea=!1}if(br=0,nn=Qt=Vt=null,ho=!1,po=0,Ku.current=null,s===null||s.return===null){Jt=1,xo=i,qt=null;break}e:{var h=t,E=s.return,D=s,H=i;if(i=ln,D.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,ve=D,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Be=Lh(E);if(Be!==null){Be.flags&=-257,Nh(Be,E,D,h,i),Be.mode&1&&Dh(h,re,i),i=Be,H=re;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(H),i.updateQueue=qe}else Xe.add(H);break e}else{if((i&1)===0){Dh(h,re,i),sc();break e}H=Error(n(426))}}else if(Bt&&D.mode&1){var Yt=Lh(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Nh(Yt,E,D,h,i),gu(ps(H,D));break e}}h=H=ps(H,D),Jt!==4&&(Jt=2),So===null?So=[h]:So.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var K=bh(h,H,i);nh(h,K);break e;case 1:D=H;var X=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(ir===null||!ir.has(J)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Ph(h,D,i);nh(h,we);break e}}h=h.return}while(h!==null)}cp(s)}catch(Ke){i=Ke,qt===s&&s!==null&&(qt=s=s.return);continue}break}while(!0)}function lp(){var t=La.current;return La.current=Aa,t===null?Aa:t}function sc(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),rn===null||(Pr&268435455)===0&&(Na&268435455)===0||or(rn,ln)}function Ba(t,i){var s=Mt;Mt|=2;var l=lp();(rn!==t||ln!==i)&&(bi=null,Lr(t,i));do try{Ev();break}catch(c){ap(t,c)}while(!0);if(_u(),Mt=s,La.current=l,qt!==null)throw Error(n(261));return rn=null,ln=0,Jt}function Ev(){for(;qt!==null;)up(qt)}function Tv(){for(;qt!==null&&!le();)up(qt)}function up(t){var i=hp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?cp(t):qt=i,Ku.current=null}function cp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=gv(s,i,kn),s!==null){qt=s;return}}else{if(s=vv(s,i),s!==null){s.flags&=32767,qt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=t}while(i!==null);Jt===0&&(Jt=5)}function Nr(t,i,s){var l=vt,c=Yn.transition;try{Yn.transition=null,vt=1,wv(t,i,s,l)}finally{Yn.transition=c,vt=l}return null}function wv(t,i,s,l){do _s();while(rr!==null);if((Mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(fn(t,h),t===rn&&(qt=rn=null,ln=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ua||(Ua=!0,pp(ke,function(){return _s(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Yn.transition,Yn.transition=null;var E=vt;vt=1;var D=Mt;Mt|=4,Ku.current=null,xv(t,s),ep(s,t),Xg(su),Ko=!!ru,su=ru=null,t.current=s,Sv(s),ue(),Mt=D,vt=E,Yn.transition=h}else t.current=s;if(Ua&&(Ua=!1,rr=t,Fa=c),h=t.pendingLanes,h===0&&(ir=null),Rt(s.stateNode),Cn(t,j()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ia)throw Ia=!1,t=Ju,Ju=null,t;return(Fa&1)!==0&&t.tag!==0&&_s(),h=t.pendingLanes,(h&1)!==0?t===ec?yo++:(yo=0,ec=t):yo=0,Ji(),null}function _s(){if(rr!==null){var t=Qf(Fa),i=Yn.transition,s=vt;try{if(Yn.transition=null,vt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,Fa=0,(Mt&6)!==0)throw Error(n(331));var c=Mt;for(Mt|=4,Ve=t.current;Ve!==null;){var h=Ve,E=h.child;if((Ve.flags&16)!==0){var D=h.deletions;if(D!==null){for(var H=0;H<D.length;H++){var re=D[H];for(Ve=re;Ve!==null;){var ve=Ve;switch(ve.tag){case 0:case 11:case 15:_o(8,ve,h)}var xe=ve.child;if(xe!==null)xe.return=ve,Ve=xe;else for(;Ve!==null;){ve=Ve;var ge=ve.sibling,Be=ve.return;if($h(ve),ve===re){Ve=null;break}if(ge!==null){ge.return=Be,Ve=ge;break}Ve=Be}}}var Xe=h.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var Yt=qe.sibling;qe.sibling=null,qe=Yt}while(qe!==null)}}Ve=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ve=E;else e:for(;Ve!==null;){if(h=Ve,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_o(9,h,h.return)}var K=h.sibling;if(K!==null){K.return=h.return,Ve=K;break e}Ve=h.return}}var X=t.current;for(Ve=X;Ve!==null;){E=Ve;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Ve=J;else e:for(E=X;Ve!==null;){if(D=Ve,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Da(9,D)}}catch(Ke){Gt(D,D.return,Ke)}if(D===E){Ve=null;break e}var we=D.sibling;if(we!==null){we.return=D.return,Ve=we;break e}Ve=D.return}}if(Mt=c,Ji(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ze,t)}catch{}l=!0}return l}finally{vt=s,Yn.transition=i}}return!1}function fp(t,i,s){i=ps(s,i),i=bh(t,i,1),t=tr(t,i,1),i=yn(),t!==null&&(jt(t,1,i),Cn(t,i))}function Gt(t,i,s){if(t.tag===3)fp(t,t,s);else for(;i!==null;){if(i.tag===3){fp(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=ps(s,t),t=Ph(i,t,1),i=tr(i,t,1),t=yn(),i!==null&&(jt(i,1,t),Cn(i,t));break}}i=i.return}}function Av(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,rn===t&&(ln&s)===s&&(Jt===4||Jt===3&&(ln&130023424)===ln&&500>j()-Qu?Lr(t,0):Zu|=s),Cn(t,i)}function dp(t,i){i===0&&((t.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var s=yn();t=Ai(t,i),t!==null&&(jt(t,i,s),Cn(t,s))}function Rv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),dp(t,s)}function Cv(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),dp(t,s)}var hp;hp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return An=!1,mv(t,i,s);An=(t.flags&131072)!==0}else An=!1,Bt&&(i.flags&1048576)!==0&&jd(i,pa,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;ba(t,i),t=i.pendingProps;var c=os(i,dn.current);ds(i,s),c=bu(null,i,l,t,c,s);var h=Pu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(h=!0,fa(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Mu(i),c.updater=Ra,i.stateNode=c,c._reactInternals=i,Fu(i,l,t,s),i=zu(null,i,l,!0,h,s)):(i.tag=0,Bt&&h&&du(i),Sn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(ba(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Pv(l),t=ni(l,t),c){case 0:i=Bu(null,i,l,t,s);break e;case 1:i=Bh(null,i,l,t,s);break e;case 11:i=Ih(null,i,l,t,s);break e;case 14:i=Uh(null,i,l,ni(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Bu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Bh(t,i,l,c,s);case 3:e:{if(zh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,th(t,i),Sa(i,l,null,s);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ps(Error(n(423)),i),i=Hh(t,i,l,s,c);break e}else if(l!==c){c=ps(Error(n(424)),i),i=Hh(t,i,l,s,c);break e}else for(On=Ki(i.stateNode.containerInfo.firstChild),Fn=i,Bt=!0,ti=null,s=Jd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(us(),l===c){i=Ci(t,i,s);break e}Sn(t,i,l,s)}i=i.child}return i;case 5:return rh(i),t===null&&mu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,ou(l,c)?E=null:h!==null&&ou(l,h)&&(i.flags|=32),kh(t,i),Sn(t,i,E,s),i.child;case 6:return t===null&&mu(i),null;case 13:return Vh(t,i,s);case 4:return Eu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,s):Sn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),Ih(t,i,l,c,s);case 7:return Sn(t,i,i.pendingProps,s),i.child;case 8:return Sn(t,i,i.pendingProps.children,s),i.child;case 12:return Sn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Ft(va,l._currentValue),l._currentValue=E,h!==null)if(ei(h.value,E)){if(h.children===c.children&&!Tn.current){i=Ci(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var H=D.firstContext;H!==null;){if(H.context===l){if(h.tag===1){H=Ri(-1,s&-s),H.tag=2;var re=h.updateQueue;if(re!==null){re=re.shared;var ve=re.pending;ve===null?H.next=H:(H.next=ve.next,ve.next=H),re.pending=H}}h.lanes|=s,H=h.alternate,H!==null&&(H.lanes|=s),Su(h.return,s,i),D.lanes|=s;break}H=H.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=s,D=E.alternate,D!==null&&(D.lanes|=s),Su(E,s,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Sn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ds(i,s),c=Xn(c),l=l(c),i.flags|=1,Sn(t,i,l,s),i.child;case 14:return l=i.type,c=ni(l,i.pendingProps),c=ni(l.type,c),Uh(t,i,l,c,s);case 15:return Fh(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ni(l,c),ba(t,i),i.tag=1,wn(l)?(t=!0,fa(i)):t=!1,ds(i,s),Rh(i,l,c),Fu(i,l,c,s),zu(null,i,l,!0,t,s);case 19:return Wh(t,i,s);case 22:return Oh(t,i,s)}throw Error(n(156,i.tag))};function pp(t,i){return T(t,i)}function bv(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,s,l){return new bv(t,i,s,l)}function oc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pv(t){if(typeof t=="function")return oc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===ce)return 14}return 2}function ar(t,i){var s=t.alternate;return s===null?(s=qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function za(t,i,s,l,c,h){var E=2;if(l=t,typeof t=="function")oc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case z:return Ir(s.children,c,h,i);case $:E=8,c|=8;break;case P:return t=qn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case Q:return t=qn(13,s,i,c),t.elementType=Q,t.lanes=h,t;case oe:return t=qn(19,s,i,c),t.elementType=oe,t.lanes=h,t;case he:return Ha(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:E=10;break e;case I:E=9;break e;case Y:E=11;break e;case ce:E=14;break e;case ae:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(E,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,s,l){return t=qn(7,t,l,i),t.lanes=s,t}function Ha(t,i,s,l){return t=qn(22,t,l,i),t.elementType=he,t.lanes=s,t.stateNode={isHidden:!1},t}function ac(t,i,s){return t=qn(6,t,null,i),t.lanes=s,t}function lc(t,i,s){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Dv(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function uc(t,i,s,l,c,h,E,D,H){return t=new Dv(t,i,s,D,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(h),t}function Lv(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function mp(t){if(!t)return Qi;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(wn(s))return Gd(t,s,i)}return i}function gp(t,i,s,l,c,h,E,D,H){return t=uc(s,l,!0,t,c,h,E,D,H),t.context=mp(null),s=t.current,l=yn(),c=sr(s),h=Ri(l,c),h.callback=i??null,tr(s,h,c),t.current.lanes=c,jt(t,c,l),Cn(t,l),t}function Va(t,i,s,l){var c=i.current,h=yn(),E=sr(c);return s=mp(s),i.context===null?i.context=s:i.pendingContext=s,i=Ri(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(c,i,E),t!==null&&(si(t,c,E,h),xa(t,c,E)),E}function Ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function cc(t,i){vp(t,i),(t=t.alternate)&&vp(t,i)}function Nv(){return null}var _p=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}Wa.prototype.render=fc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Va(t,i,null,null)},Wa.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Va(null,t,null,null)}),i[Mi]=null}};function Wa(t){this._internalRoot=t}Wa.prototype.unstable_scheduleHydration=function(t){if(t){var i=td();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&rd(t)}};function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Iv(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var re=Ga(E);h.call(re)}}var E=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=E,t[Mi]=E.current,ro(t.nodeType===8?t.parentNode:t),Dr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var re=Ga(H);D.call(re)}}var H=uc(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=H,t[Mi]=H.current,ro(t.nodeType===8?t.parentNode:t),Dr(function(){Va(i,H,s,l)}),H}function ja(t,i,s,l,c){var h=s._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var D=c;c=function(){var H=Ga(E);D.call(H)}}Va(i,E,t,c)}else E=Iv(s,i,t,c,l);return Ga(E)}Jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Zt(i.pendingLanes);s!==0&&(Mr(i,s|1),Cn(i,j()),(Mt&6)===0&&(vs=j()+500,Ji()))}break;case 13:Dr(function(){var l=Ai(t,1);if(l!==null){var c=yn();si(l,t,1,c)}}),cc(t,1)}},Ol=function(t){if(t.tag===13){var i=Ai(t,134217728);if(i!==null){var s=yn();si(i,t,134217728,s)}cc(t,134217728)}},ed=function(t){if(t.tag===13){var i=sr(t),s=Ai(t,i);if(s!==null){var l=yn();si(s,t,i,l)}cc(t,i)}},td=function(){return vt},nd=function(t,i){var s=vt;try{return vt=t,i()}finally{vt=s}},Me=function(t,i,s){switch(i){case"input":if(Ge(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=ua(l);if(!c)throw Error(n(90));Xt(l),Ge(l,c)}}}break;case"textarea":g(t,s);break;case"select":i=s.value,i!=null&&Pt(t,!!s.multiple,i,!1)}},ut=ic,Ct=Dr;var Uv={usingClientEntryPoint:!1,Events:[ao,rs,ua,me,Ye,ic]},Mo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fv={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jo(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Ze=Ya.inject(Fv),at=Ya}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,bn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dc(i))throw Error(n(200));return Lv(t,i,null,s)},bn.createRoot=function(t,i){if(!dc(t))throw Error(n(299));var s=!1,l="",c=_p;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=uc(t,1,!1,null,null,s,!1,l,c),t[Mi]=i.current,ro(t.nodeType===8?t.parentNode:t),new fc(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=jo(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Dr(t)},bn.hydrate=function(t,i,s){if(!Xa(i))throw Error(n(200));return ja(null,t,i,!0,s)},bn.hydrateRoot=function(t,i,s){if(!dc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",E=_p;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=gp(i,null,t,1,s??null,c,!1,h,E),t[Mi]=i.current,ro(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Wa(i)},bn.render=function(t,i,s){if(!Xa(i))throw Error(n(200));return ja(null,t,i,!1,s)},bn.unmountComponentAtNode=function(t){if(!Xa(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){ja(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1},bn.unstable_batchedUpdates=ic,bn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Xa(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ja(t,i,s,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Rp;function Wv(){if(Rp)return mc.exports;Rp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mc.exports=Gv(),mc.exports}var Cp;function Xv(){if(Cp)return qa;Cp=1;var o=Wv();return qa.createRoot=o.createRoot,qa.hydrateRoot=o.hydrateRoot,qa}var jv=Xv();const Yv=Cm(jv),qv="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)",$v="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",To={SMOOTH_DURATION:600,INITIAL_DURATION:1500,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20},$a=(o,e=0,n=100)=>Math.min(Math.max(o,e),n),Kc=(o,e=3)=>parseFloat(o.toFixed(e)),Ka=(o,e,n,r,a)=>Kc(r+(a-r)*(o-e)/(n-e)),Kv=o=>o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,Zv=({avatarUrl:o="/avatar.jpg",iconUrl:e="",grainUrl:n="",behindGradient:r,innerGradient:a,showBehindGradient:u=!0,className:f="",enableTilt:d=!0,enableMobileTilt:p=!1,mobileTiltSensitivity:m=5,miniAvatarUrl:_,name:x="Juan Jaramillo",title:S="Full Stack Developer",handle:M="juanjjaramillo",status:w="Available for Work",contactText:A="Contact Me",showUserInfo:y=!0,onContactClick:v})=>{const F=zt.useRef(null),N=zt.useRef(null),C=zt.useMemo(()=>{if(!d)return null;let I=null;const Y=(oe,ce,ae,he)=>{const O=ae.clientWidth,fe=ae.clientHeight,ne=$a(100/O*oe),L=$a(100/fe*ce),ie=ne-50,De=L-50,ze={"--pointer-x":`${ne}%`,"--pointer-y":`${L}%`,"--background-x":`${Ka(ne,0,100,35,65)}%`,"--background-y":`${Ka(L,0,100,35,65)}%`,"--pointer-from-center":`${$a(Math.hypot(L-50,ne-50)/50,0,1)}`,"--pointer-from-top":`${L/100}`,"--pointer-from-left":`${ne/100}`,"--rotate-x":`${Kc(-(ie/5))}deg`,"--rotate-y":`${Kc(De/4)}deg`};Object.entries(ze).forEach(([Ue,ee])=>{he.style.setProperty(Ue,ee)})};return{updateCardTransform:Y,createSmoothAnimation:(oe,ce,ae,he,O)=>{const fe=performance.now(),ne=O.clientWidth/2,L=O.clientHeight/2,ie=De=>{const ze=De-fe,Ue=$a(ze/oe),ee=Kv(Ue),pe=Ka(ee,0,1,ce,ne),_e=Ka(ee,0,1,ae,L);Y(pe,_e,he,O),Ue<1&&(I=requestAnimationFrame(ie))};I=requestAnimationFrame(ie)},cancelAnimation:()=>{I&&(cancelAnimationFrame(I),I=null)}}},[d]),V=zt.useCallback(I=>{const Y=N.current,Q=F.current;if(!Y||!Q||!C)return;const oe=Q.getBoundingClientRect();C.updateCardTransform(I.clientX-oe.left,I.clientY-oe.top,Y,Q)},[C]),B=zt.useCallback(()=>{const I=N.current,Y=F.current;!I||!Y||!C||(C.cancelAnimation(),Y.classList.add("active"),I.classList.add("active"))},[C]),z=zt.useCallback(I=>{const Y=N.current,Q=F.current;if(!Y||!Q||!C)return;const oe=Q.getBoundingClientRect();C.createSmoothAnimation(To.SMOOTH_DURATION,I.clientX-oe.left,I.clientY-oe.top,Y,Q),Q.classList.remove("active"),Y.classList.remove("active")},[C]),$=zt.useCallback(I=>{const Y=N.current,Q=F.current;if(!Y||!Q||!C)return;const{beta:oe,gamma:ce}=I;!oe||!ce||C.updateCardTransform(Y.clientHeight/2+ce*m,Y.clientWidth/2+(oe-To.DEVICE_BETA_OFFSET)*m,Y,Q)},[C,m]);zt.useEffect(()=>{if(!d||!C)return;const I=N.current,Y=F.current;if(!I||!Y)return;const Q=V,oe=B,ce=z,ae=$,he=()=>{!p||location.protocol!=="https:"||(typeof window.DeviceMotionEvent.requestPermission=="function"?window.DeviceMotionEvent.requestPermission().then(ne=>{ne==="granted"&&window.addEventListener("deviceorientation",ae)}).catch(ne=>console.error(ne)):window.addEventListener("deviceorientation",ae))};Y.addEventListener("pointerenter",oe),Y.addEventListener("pointermove",Q),Y.addEventListener("pointerleave",ce),I.addEventListener("click",he);const O=Y.clientWidth-To.INITIAL_X_OFFSET,fe=To.INITIAL_Y_OFFSET;return C.updateCardTransform(O,fe,I,Y),C.createSmoothAnimation(To.INITIAL_DURATION,O,fe,I,Y),()=>{Y.removeEventListener("pointerenter",oe),Y.removeEventListener("pointermove",Q),Y.removeEventListener("pointerleave",ce),I.removeEventListener("click",he),window.removeEventListener("deviceorientation",ae),C.cancelAnimation()}},[d,p,C,V,B,z,$]);const P=zt.useMemo(()=>({"--icon":e?`url(${e})`:"none","--grain":n?`url(${n})`:"none","--behind-gradient":u?r??qv:"none","--inner-gradient":a??$v}),[e,n,u,r,a]),R=zt.useCallback(()=>{v==null||v()},[v]);return W.jsx("div",{ref:F,className:`pc-card-wrapper ${f}`.trim(),style:P,children:W.jsx("section",{ref:N,className:"pc-card",children:W.jsxs("div",{className:"pc-inside",children:[W.jsx("div",{className:"pc-shine"}),W.jsx("div",{className:"pc-glare"}),W.jsxs("div",{className:"pc-content pc-avatar-content",children:[W.jsx("img",{className:"avatar",src:o,alt:`${x||"User"} avatar`,loading:"lazy",onError:I=>{const Y=I.target;Y.style.display="none";const Q=Y.parentElement;Q&&(Q.style.background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)")}}),y&&W.jsxs("div",{className:"pc-user-info",children:[W.jsxs("div",{className:"pc-user-details",children:[W.jsx("div",{className:"pc-mini-avatar",children:W.jsx("img",{src:_||o,alt:`${x||"User"} mini avatar`,loading:"lazy",onError:I=>{const Y=I.target;Y.style.opacity="0.5",Y.src=o}})}),W.jsxs("div",{className:"pc-user-text",children:[W.jsxs("div",{className:"pc-handle",children:["@",M]}),W.jsx("div",{className:"pc-status",children:w})]})]}),W.jsx("button",{className:"pc-contact-btn",onClick:R,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${x||"user"}`,children:A})]})]}),W.jsx("div",{className:"pc-content",children:W.jsxs("div",{className:"pc-details",children:[W.jsx("h3",{children:x}),W.jsx("p",{children:S})]})})]})})})},Qv=bm.memo(Zv);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="180",Jv=0,bp=1,e_=2,Pm=1,t_=2,Ui=3,_r=0,Ln=1,Fi=2,gr=0,Is=1,Zc=2,Pp=3,Dp=4,n_=5,Gr=100,i_=101,r_=102,s_=103,o_=104,a_=200,l_=201,u_=202,c_=203,Qc=204,Jc=205,f_=206,d_=207,h_=208,p_=209,m_=210,g_=211,v_=212,__=213,x_=214,ef=0,tf=1,nf=2,Fs=3,rf=4,sf=5,of=6,af=7,Dm=0,S_=1,y_=2,vr=0,M_=1,E_=2,T_=3,w_=4,A_=5,R_=6,C_=7,Lm=300,Os=301,ks=302,lf=303,uf=304,Nl=306,cf=1e3,fi=1001,ff=1002,Hn=1003,b_=1004,Za=1005,Dn=1006,_c=1007,Xr=1008,Bi=1009,Nm=1010,Im=1011,Lo=1012,Wf=1013,Yr=1014,_i=1015,Hs=1016,Xf=1017,jf=1018,No=1020,Um=35902,Fm=35899,Om=1021,km=1022,Zn=1023,Io=1026,Uo=1027,Bm=1028,Yf=1029,zm=1030,qf=1031,$f=1033,Ml=33776,El=33777,Tl=33778,wl=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,vf=37492,_f=37496,xf=37808,Sf=37809,yf=37810,Mf=37811,Ef=37812,Tf=37813,wf=37814,Af=37815,Rf=37816,Cf=37817,bf=37818,Pf=37819,Df=37820,Lf=37821,Nf=36492,If=36494,Uf=36495,Ff=36283,Of=36284,kf=36285,Bf=36286,P_=3200,D_=3201,L_=0,N_=1,mr="",Kn="srgb",Bs="srgb-linear",Rl="linear",Nt="srgb",xs=7680,Lp=519,I_=512,U_=513,F_=514,Hm=515,O_=516,k_=517,B_=518,z_=519,Np=35044,Ip="300 es",xi=2e3,Cl=2001;class Vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xc=Math.PI/180,zf=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[o&255]+gn[o>>8&255]+gn[o>>16&255]+gn[o>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function xt(o,e,n){return Math.max(e,Math.min(n,o))}function H_(o,e){return(o%e+e)%e}function Sc(o,e,n){return(1-n)*o+n*e}function wo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];const S=u[f+0],M=u[f+1],w=u[f+2],A=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d===1){e[n+0]=S,e[n+1]=M,e[n+2]=w,e[n+3]=A;return}if(x!==A||p!==S||m!==M||_!==w){let y=1-d;const v=p*S+m*M+_*w+x*A,F=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const V=Math.sqrt(N),B=Math.atan2(V,v*F);y=Math.sin(y*B)/V,d=Math.sin(d*B)/V}const C=d*F;if(p=p*y+S*C,m=m*y+M*C,_=_*y+w*C,x=x*y+A*C,y===1-d){const V=1/Math.sqrt(p*p+m*m+_*_+x*x);p*=V,m*=V,_*=V,x*=V}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],x=u[f],S=u[f+1],M=u[f+2],w=u[f+3];return e[n]=d*w+_*x+p*M-m*S,e[n+1]=p*w+_*S+m*x-d*M,e[n+2]=m*w+_*M+d*S-p*x,e[n+3]=_*w-d*x-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),x=d(u/2),S=p(r/2),M=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=S*_*x+m*M*w,this._y=m*M*x-S*_*w,this._z=m*_*w+S*M*x,this._w=m*_*x-S*M*w;break;case"YXZ":this._x=S*_*x+m*M*w,this._y=m*M*x-S*_*w,this._z=m*_*w-S*M*x,this._w=m*_*x+S*M*w;break;case"ZXY":this._x=S*_*x-m*M*w,this._y=m*M*x+S*_*w,this._z=m*_*w+S*M*x,this._w=m*_*x-S*M*w;break;case"ZYX":this._x=S*_*x-m*M*w,this._y=m*M*x+S*_*w,this._z=m*_*w-S*M*x,this._w=m*_*x+S*M*w;break;case"YZX":this._x=S*_*x+m*M*w,this._y=m*M*x+S*_*w,this._z=m*_*w-S*M*x,this._w=m*_*x-S*M*w;break;case"XZY":this._x=S*_*x-m*M*w,this._y=m*M*x-S*_*w,this._z=m*_*w+S*M*x,this._w=m*_*x+S*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],x=n[10],S=r+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-p)*M,this._y=(u-m)*M,this._z=(f-a)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(_-p)/M,this._x=.25*M,this._y=(a+f)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(a+f)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(f-a)/M,this._x=(u+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*f+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),x=Math.sin((1-n)*_)/m,S=Math.sin(n*_)/m;return this._w=f*x+this._w*S,this._x=r*x+this._x*S,this._y=a*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),x=2*(u*r-f*n);return this.x=n+p*m+f*x-d*_,this.y=r+p*_+d*m-u*x,this.z=a+p*x+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new se,Up=new ko;class ht{constructor(e,n,r,a,u,f,d,p,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],x=r[7],S=r[2],M=r[5],w=r[8],A=a[0],y=a[3],v=a[6],F=a[1],N=a[4],C=a[7],V=a[2],B=a[5],z=a[8];return u[0]=f*A+d*F+p*V,u[3]=f*y+d*N+p*B,u[6]=f*v+d*C+p*z,u[1]=m*A+_*F+x*V,u[4]=m*y+_*N+x*B,u[7]=m*v+_*C+x*z,u[2]=S*A+M*F+w*V,u[5]=S*y+M*N+w*B,u[8]=S*v+M*C+w*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=_*f-d*m,S=d*p-_*u,M=m*u-f*p,w=n*x+r*S+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(a*m-_*r)*A,e[2]=(d*r-a*f)*A,e[3]=S*A,e[4]=(_*n-a*p)*A,e[5]=(a*u-d*n)*A,e[6]=M*A,e[7]=(r*p-m*n)*A,e[8]=(f*n-r*u)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new ht;function Vm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function V_(){const o=bl("canvas");return o.style.display="block",o}const Fp={};function Fo(o){o in Fp||(Fp[o]=!0,console.warn(o))}function G_(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Op=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Nt&&(a.r=Oi(a.r),a.g=Oi(a.g),a.b=Oi(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Nt&&(a.r=Us(a.r),a.g=Us(a.g),a.b=Us(a.b))),a},workingToColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},colorSpaceToWorking:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?Rl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,u){return Fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(a,u)},toWorkingColorSpace:function(a,u){return Fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(a,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:e,whitePoint:r,transfer:Rl,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),o}const Tt=W_();function Oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ss;class X_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ss===void 0&&(Ss=bl("canvas")),Ss.width=e.width,Ss.height=e.height;const a=Ss.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ss}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Oi(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Oi(n[r]/255)*255):n[r]=Oi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j_=0;class Kf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ec(a[f].image)):u.push(Ec(a[f]))}else u=Ec(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ec(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?X_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;const Tc=new se;class En extends Vs{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,r=fi,a=fi,u=Dn,f=Xr,d=Zn,p=Bi,m=En.DEFAULT_ANISOTROPY,_=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Oo(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Lm;En.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],x=p[8],S=p[1],M=p[5],w=p[9],A=p[2],y=p[6],v=p[10];if(Math.abs(_-S)<.01&&Math.abs(x-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(x+A)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,C=(M+1)/2,V=(v+1)/2,B=(_+S)/4,z=(x+A)/4,$=(w+y)/4;return N>C&&N>V?N<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(N),a=B/r,u=z/r):C>V?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=B/a,u=$/a):V<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(V),r=z/u,a=$/u),this.set(r,a,u,n),this}let F=Math.sqrt((y-w)*(y-w)+(x-A)*(x-A)+(S-_)*(S-_));return Math.abs(F)<.001&&(F=1),this.x=(y-w)/F,this.y=(x-A)/F,this.z=(S-_)/F,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=xt(this.x,e.x,n.x),this.y=xt(this.y,e.y,n.y),this.z=xt(this.z,e.z,n.z),this.w=xt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=xt(this.x,e,n),this.y=xt(this.y,e,n),this.z=xt(this.z,e,n),this.w=xt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends Vs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:r.depth},u=new En(a);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Kf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends q_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Gm extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends En{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,oi):oi.fromBufferAttribute(u,f),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ja.subVectors(this.max,Ao),ys.subVectors(e.a,Ao),Ms.subVectors(e.b,Ao),Es.subVectors(e.c,Ao),ur.subVectors(Ms,ys),cr.subVectors(Es,Ms),Ur.subVectors(ys,Es);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!wc(n,ys,Ms,Es,Ja)||(n=[1,0,0,0,1,0,0,0,1],!wc(n,ys,Ms,Es,Ja))?!1:(el.crossVectors(ur,cr),n=[el.x,el.y,el.z],wc(n,ys,Ms,Es,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new se,new se,new se,new se,new se,new se,new se,new se],oi=new se,Qa=new Bo,ys=new se,Ms=new se,Es=new se,ur=new se,cr=new se,Ur=new se,Ao=new se,Ja=new se,el=new se,Fr=new se;function wc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Fr.fromArray(o,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const K_=new Bo,Ro=new se,Ac=new se;class Il{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):K_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Ro,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ac)),this.expandByPoint(Ro.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new se,Rc=new se,tl=new se,fr=new se,Cc=new se,nl=new se,bc=new se;class Wm{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Rc.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Rc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(tl),d=fr.dot(this.direction),p=-fr.dot(tl),m=fr.lengthSq(),_=Math.abs(1-f*f);let x,S,M,w;if(_>0)if(x=f*p-d,S=f*d-p,w=u*_,x>=0)if(S>=-w)if(S<=w){const A=1/_;x*=A,S*=A,M=x*(x+f*S+2*d)+S*(f*x+S+2*p)+m}else S=u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*p)+m;else S=-u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*p)+m;else S<=-w?(x=Math.max(0,-(-f*u+d)),S=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m):S<=w?(x=0,S=Math.min(Math.max(-u,-p),u),M=S*(S+2*p)+m):(x=Math.max(0,-(f*u+d)),S=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+S*(S+2*p)+m);else S=f>0?-u:u,x=Math.max(0,-(f*S+d)),M=-x*x+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Rc).addScaledVector(tl,S),M}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const r=Di.dot(this.direction),a=Di.dot(Di)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,a=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,a=(e.min.x-S.x)*m),_>=0?(u=(e.min.y-S.y)*_,f=(e.max.y-S.y)*_):(u=(e.max.y-S.y)*_,f=(e.min.y-S.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),x>=0?(d=(e.min.z-S.z)*x,p=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,p=(e.min.z-S.z)*x),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,r,a,u){Cc.subVectors(n,e),nl.subVectors(r,e),bc.crossVectors(Cc,nl);let f=this.direction.dot(bc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const p=d*this.direction.dot(nl.crossVectors(fr,nl));if(p<0)return null;const m=d*this.direction.dot(Cc.cross(fr));if(m<0||p+m>f)return null;const _=-d*fr.dot(bc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,u,f,d,p,m,_,x,S,M,w,A,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,x,S,M,w,A,y)}set(e,n,r,a,u,f,d,p,m,_,x,S,M,w,A,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=u,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=x,v[14]=S,v[3]=M,v[7]=w,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),u=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=f*_,M=f*x,w=d*_,A=d*x;n[0]=p*_,n[4]=-p*x,n[8]=m,n[1]=M+w*m,n[5]=S-A*m,n[9]=-d*p,n[2]=A-S*m,n[6]=w+M*m,n[10]=f*p}else if(e.order==="YXZ"){const S=p*_,M=p*x,w=m*_,A=m*x;n[0]=S+A*d,n[4]=w*d-M,n[8]=f*m,n[1]=f*x,n[5]=f*_,n[9]=-d,n[2]=M*d-w,n[6]=A+S*d,n[10]=f*p}else if(e.order==="ZXY"){const S=p*_,M=p*x,w=m*_,A=m*x;n[0]=S-A*d,n[4]=-f*x,n[8]=w+M*d,n[1]=M+w*d,n[5]=f*_,n[9]=A-S*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const S=f*_,M=f*x,w=d*_,A=d*x;n[0]=p*_,n[4]=w*m-M,n[8]=S*m+A,n[1]=p*x,n[5]=A*m+S,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const S=f*p,M=f*m,w=d*p,A=d*m;n[0]=p*_,n[4]=A-S*x,n[8]=w*x+M,n[1]=x,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*x+w,n[10]=S-A*x}else if(e.order==="XZY"){const S=f*p,M=f*m,w=d*p,A=d*m;n[0]=p*_,n[4]=-x,n[8]=m*_,n[1]=S*x+A,n[5]=f*_,n[9]=M*x-w,n[2]=w*x-M,n[6]=d*_,n[10]=A*x+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,Q_)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),dr.crossVectors(r,Bn),dr.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),dr.crossVectors(r,Bn)),dr.normalize(),il.crossVectors(Bn,dr),a[0]=dr.x,a[4]=il.x,a[8]=Bn.x,a[1]=dr.y,a[5]=il.y,a[9]=Bn.y,a[2]=dr.z,a[6]=il.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],x=r[5],S=r[9],M=r[13],w=r[2],A=r[6],y=r[10],v=r[14],F=r[3],N=r[7],C=r[11],V=r[15],B=a[0],z=a[4],$=a[8],P=a[12],R=a[1],I=a[5],Y=a[9],Q=a[13],oe=a[2],ce=a[6],ae=a[10],he=a[14],O=a[3],fe=a[7],ne=a[11],L=a[15];return u[0]=f*B+d*R+p*oe+m*O,u[4]=f*z+d*I+p*ce+m*fe,u[8]=f*$+d*Y+p*ae+m*ne,u[12]=f*P+d*Q+p*he+m*L,u[1]=_*B+x*R+S*oe+M*O,u[5]=_*z+x*I+S*ce+M*fe,u[9]=_*$+x*Y+S*ae+M*ne,u[13]=_*P+x*Q+S*he+M*L,u[2]=w*B+A*R+y*oe+v*O,u[6]=w*z+A*I+y*ce+v*fe,u[10]=w*$+A*Y+y*ae+v*ne,u[14]=w*P+A*Q+y*he+v*L,u[3]=F*B+N*R+C*oe+V*O,u[7]=F*z+N*I+C*ce+V*fe,u[11]=F*$+N*Y+C*ae+V*ne,u[15]=F*P+N*Q+C*he+V*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],x=e[6],S=e[10],M=e[14],w=e[3],A=e[7],y=e[11],v=e[15];return w*(+u*p*x-a*m*x-u*d*S+r*m*S+a*d*M-r*p*M)+A*(+n*p*M-n*m*S+u*f*S-a*f*M+a*m*_-u*p*_)+y*(+n*m*x-n*d*M-u*f*x+r*f*M+u*d*_-r*m*_)+v*(-a*d*_-n*p*x+n*d*S+a*f*x-r*f*S+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],x=e[9],S=e[10],M=e[11],w=e[12],A=e[13],y=e[14],v=e[15],F=x*y*m-A*S*m+A*p*M-d*y*M-x*p*v+d*S*v,N=w*S*m-_*y*m-w*p*M+f*y*M+_*p*v-f*S*v,C=_*A*m-w*x*m+w*d*M-f*A*M-_*d*v+f*x*v,V=w*x*p-_*A*p-w*d*S+f*A*S+_*d*y-f*x*y,B=n*F+r*N+a*C+u*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=F*z,e[1]=(A*S*u-x*y*u-A*a*M+r*y*M+x*a*v-r*S*v)*z,e[2]=(d*y*u-A*p*u+A*a*m-r*y*m-d*a*v+r*p*v)*z,e[3]=(x*p*u-d*S*u-x*a*m+r*S*m+d*a*M-r*p*M)*z,e[4]=N*z,e[5]=(_*y*u-w*S*u+w*a*M-n*y*M-_*a*v+n*S*v)*z,e[6]=(w*p*u-f*y*u-w*a*m+n*y*m+f*a*v-n*p*v)*z,e[7]=(f*S*u-_*p*u+_*a*m-n*S*m-f*a*M+n*p*M)*z,e[8]=C*z,e[9]=(w*x*u-_*A*u-w*r*M+n*A*M+_*r*v-n*x*v)*z,e[10]=(f*A*u-w*d*u+w*r*m-n*A*m-f*r*v+n*d*v)*z,e[11]=(_*d*u-f*x*u-_*r*m+n*x*m+f*r*M-n*d*M)*z,e[12]=V*z,e[13]=(_*A*a-w*x*a+w*r*S-n*A*S-_*r*y+n*x*y)*z,e[14]=(w*d*a-f*A*a-w*r*p+n*A*p+f*r*y-n*d*y)*z,e[15]=(f*x*a-_*d*a+_*r*p-n*x*p-f*r*S+n*d*S)*z,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,x=d+d,S=u*m,M=u*_,w=u*x,A=f*_,y=f*x,v=d*x,F=p*m,N=p*_,C=p*x,V=r.x,B=r.y,z=r.z;return a[0]=(1-(A+v))*V,a[1]=(M+C)*V,a[2]=(w-N)*V,a[3]=0,a[4]=(M-C)*B,a[5]=(1-(S+v))*B,a[6]=(y+F)*B,a[7]=0,a[8]=(w+N)*z,a[9]=(y-F)*z,a[10]=(1-(S+A))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),d=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ai.copy(this);const m=1/u,_=1/f,x=1/d;return ai.elements[0]*=m,ai.elements[1]*=m,ai.elements[2]*=m,ai.elements[4]*=_,ai.elements[5]*=_,ai.elements[6]*=_,ai.elements[8]*=x,ai.elements[9]*=x,ai.elements[10]*=x,n.setFromRotationMatrix(ai),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=xi,p=!1){const m=this.elements,_=2*u/(n-e),x=2*u/(r-a),S=(n+e)/(n-e),M=(r+a)/(r-a);let w,A;if(p)w=u/(f-u),A=f*u/(f-u);else if(d===xi)w=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===Cl)w=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=xi,p=!1){const m=this.elements,_=2/(n-e),x=2/(r-a),S=-(n+e)/(n-e),M=-(r+a)/(r-a);let w,A;if(p)w=1/(f-u),A=f/(f-u);else if(d===xi)w=-2/(f-u),A=-(f+u)/(f-u);else if(d===Cl)w=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new se,ai=new Kt,Z_=new se(0,0,0),Q_=new se(1,1,1),dr=new se,il=new se,Bn=new se,Bp=new Kt,zp=new ko;class zi{constructor(e=0,n=0,r=0,a=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],x=a[2],S=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Xm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const Hp=new se,ws=new ko,Li=new Kt,rl=new se,Co=new se,e0=new se,t0=new ko,Vp=new se(1,0,0),Gp=new se(0,1,0),Wp=new se(0,0,1),Xp={type:"added"},n0={type:"removed"},As={type:"childadded",child:null},Pc={type:"childremoved",child:null};class Nn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new se,n=new zi,r=new ko,a=new se(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ht}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Co,rl,this.up):Li.lookAt(rl,Co,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Li),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n0),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),x=f(e.shapes),S=f(e.skeletons),M=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Nn.DEFAULT_UP=new se(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new se,Ni=new se,Dc=new se,Ii=new se,Rs=new se,Cs=new se,jp=new se,Lc=new se,Nc=new se,Ic=new se,Uc=new Wt,Fc=new Wt,Oc=new Wt;class ci{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),li.subVectors(e,n),a.cross(li);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){li.subVectors(a,n),Ni.subVectors(r,n),Dc.subVectors(e,n);const f=li.dot(li),d=li.dot(Ni),p=li.dot(Dc),m=Ni.dot(Ni),_=Ni.dot(Dc),x=f*m-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(m*p-d*_)*S,w=(f*_-d*p)*S;return u.set(1-M-w,w,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ii)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ii.x),p.addScaledVector(f,Ii.y),p.addScaledVector(d,Ii.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return Uc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,r),Oc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(Uc,u.x),f.addScaledVector(Fc,u.y),f.addScaledVector(Oc,u.z),f}static isFrontFacing(e,n,r,a){return li.subVectors(r,n),Ni.subVectors(e,n),li.cross(Ni).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Rs.subVectors(a,r),Cs.subVectors(u,r),Lc.subVectors(e,r);const p=Rs.dot(Lc),m=Cs.dot(Lc);if(p<=0&&m<=0)return n.copy(r);Nc.subVectors(e,a);const _=Rs.dot(Nc),x=Cs.dot(Nc);if(_>=0&&x<=_)return n.copy(a);const S=p*x-_*m;if(S<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(Rs,f);Ic.subVectors(e,u);const M=Rs.dot(Ic),w=Cs.dot(Ic);if(w>=0&&M<=w)return n.copy(u);const A=M*m-p*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Cs,d);const y=_*w-M*x;if(y<=0&&x-_>=0&&M-w>=0)return jp.subVectors(u,a),d=(x-_)/(x-_+(M-w)),n.copy(a).addScaledVector(jp,d);const v=1/(y+A+S);return f=A*v,d=S*v,n.copy(r).addScaledVector(Rs,f).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function kc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=H_(e,1),n=xt(n,0,1),r=xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=kc(f,u,e+1/3),this.g=kc(f,u,e),this.b=kc(f,u,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,n=Kn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=jm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.workingToColorSpace(vn.copy(this),e),Math.round(xt(vn.r*255,0,255))*65536+Math.round(xt(vn.g*255,0,255))*256+Math.round(xt(vn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.workingToColorSpace(vn.copy(this),n);const r=vn.r,a=vn.g,u=vn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=_<=.5?x/(f+d):x/(2-f-d),f){case r:p=(a-u)/x+(a<u?6:0);break;case a:p=(u-r)/x+2;break;case u:p=(r-a)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.workingToColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Kn){Tt.workingToColorSpace(vn.copy(this),e);const n=vn.r,r=vn.g,a=vn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(sl);const r=Sc(hr.h,sl.h,n),a=Sc(hr.s,sl.s,n),u=Sc(hr.l,sl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new wt;wt.NAMES=jm;let i0=0;class zo extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=Is,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Jc&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ym extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new se,ol=new ft;let r0=0;class di{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array),u=Pn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class qm extends di{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends di{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ki extends di{constructor(e,n,r){super(new Float32Array(e),n,r)}}let s0=0;const $n=new Kt,Bc=new Nn,bs=new se,zn=new Bo,bo=new Bo,on=new se;class Vi extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vm(e)?$m:qm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(zn.min,bo.min),zn.expandByPoint(on),on.addVectors(zn.max,bo.max),zn.expandByPoint(on)):(zn.expandByPoint(bo.min),zn.expandByPoint(bo.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)on.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(on));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)on.fromBufferAttribute(d,m),p&&(bs.fromBufferAttribute(e,m),on.add(bs)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new se,p[$]=new se;const m=new se,_=new se,x=new se,S=new ft,M=new ft,w=new ft,A=new se,y=new se;function v($,P,R){m.fromBufferAttribute(r,$),_.fromBufferAttribute(r,P),x.fromBufferAttribute(r,R),S.fromBufferAttribute(u,$),M.fromBufferAttribute(u,P),w.fromBufferAttribute(u,R),_.sub(m),x.sub(m),M.sub(S),w.sub(S);const I=1/(M.x*w.y-w.x*M.y);isFinite(I)&&(A.copy(_).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(I),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(I),d[$].add(A),d[P].add(A),d[R].add(A),p[$].add(y),p[P].add(y),p[R].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let $=0,P=F.length;$<P;++$){const R=F[$],I=R.start,Y=R.count;for(let Q=I,oe=I+Y;Q<oe;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new se,C=new se,V=new se,B=new se;function z($){V.fromBufferAttribute(a,$),B.copy(V);const P=d[$];N.copy(P),N.sub(V.multiplyScalar(V.dot(P))).normalize(),C.crossVectors(B,P);const I=C.dot(p[$])<0?-1:1;f.setXYZW($,N.x,N.y,N.z,I)}for(let $=0,P=F.length;$<P;++$){const R=F[$],I=R.start,Y=R.count;for(let Q=I,oe=I+Y;Q<oe;Q+=3)z(e.getX(Q+0)),z(e.getX(Q+1)),z(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const a=new se,u=new se,f=new se,d=new se,p=new se,m=new se,_=new se,x=new se;if(e)for(let S=0,M=e.count;S<M;S+=3){const w=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,y),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=n.count;S<M;S+=3)a.fromBufferAttribute(n,S+0),u.fromBufferAttribute(n,S+1),f.fromBufferAttribute(n,S+2),_.subVectors(f,u),x.subVectors(a,u),_.cross(x),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,x=d.normalized,S=new m.constructor(p.length*_);let M=0,w=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?M=p[A]*d.data.stride+d.offset:M=p[A]*_;for(let v=0;v<_;v++)S[w++]=m[M++]}return new di(S,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,x=m.length;_<x;_++){const S=m[_],M=e(S,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let x=0,S=m.length;x<S;x++){const M=m[x];_.push(M.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],x=u[m];for(let S=0,M=x.length;S<M;S++)_.push(x[S].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new Kt,Or=new Wm,al=new Il,qp=new se,ll=new se,ul=new se,cl=new se,zc=new se,fl=new se,$p=new se,dl=new se;class Qn extends Nn{constructor(e=new Vi,n=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){fl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],x=u[p];_!==0&&(zc.fromBufferAttribute(x,e),f?fl.addScaledVector(zc,_):fl.addScaledVector(zc.sub(n),_))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(al.containsPoint(Or.origin)===!1&&(Or.intersectSphere(al,qp)===null||Or.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,A=S.length;w<A;w++){const y=S[w],v=f[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=F,V=N;C<V;C+=3){const B=d.getX(C),z=d.getX(C+1),$=d.getX(C+2);a=hl(this,v,e,r,m,_,x,B,z,$),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const F=d.getX(y),N=d.getX(y+1),C=d.getX(y+2);a=hl(this,f,e,r,m,_,x,F,N,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,A=S.length;w<A;w++){const y=S[w],v=f[y.materialIndex],F=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let C=F,V=N;C<V;C+=3){const B=C,z=C+1,$=C+2;a=hl(this,v,e,r,m,_,x,B,z,$),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const F=y,N=y+1,C=y+2;a=hl(this,f,e,r,m,_,x,F,N,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function o0(o,e,n,r,a,u,f,d){let p;if(e.side===Ln?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===_r,d),p===null)return null;dl.copy(d),dl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:o}}function hl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,ll),o.getVertexPosition(p,ul),o.getVertexPosition(m,cl);const _=o0(o,e,n,r,ll,ul,cl,$p);if(_){const x=new se;ci.getBarycoord($p,ll,ul,cl,x),a&&(_.uv=ci.getInterpolatedAttribute(a,d,p,m,x,new ft)),u&&(_.uv1=ci.getInterpolatedAttribute(u,d,p,m,x,new ft)),f&&(_.normal=ci.getInterpolatedAttribute(f,d,p,m,x,new se),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new se,materialIndex:0};ci.getNormal(ll,ul,cl,S.normal),_.face=S,_.barycoord=x}return _}class Ho extends Vi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],x=[];let S=0,M=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new ki(m,3)),this.setAttribute("normal",new ki(_,3)),this.setAttribute("uv",new ki(x,2));function w(A,y,v,F,N,C,V,B,z,$,P){const R=C/z,I=V/$,Y=C/2,Q=V/2,oe=B/2,ce=z+1,ae=$+1;let he=0,O=0;const fe=new se;for(let ne=0;ne<ae;ne++){const L=ne*I-Q;for(let ie=0;ie<ce;ie++){const De=ie*R-Y;fe[A]=De*F,fe[y]=L*N,fe[v]=oe,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[v]=B>0?1:-1,_.push(fe.x,fe.y,fe.z),x.push(ie/z),x.push(1-ne/$),he+=1}}for(let ne=0;ne<$;ne++)for(let L=0;L<z;L++){const ie=S+L+ce*ne,De=S+L+ce*(ne+1),ze=S+(L+1)+ce*(ne+1),Ue=S+(L+1)+ce*ne;p.push(ie,De,Ue),p.push(De,ze,Ue),O+=6}d.addGroup(M,O,P),M+=O,S+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(o){const e={};for(let n=0;n<o.length;n++){const r=zs(o[n]);for(const a in r)e[a]=r[a]}return e}function a0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Km(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const l0={clone:zs,merge:Mn};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Pl extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new se,Kp=new ft,Zp=new ft;class ui extends Pl{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ds=1;class f0 extends Nn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(Ps,Ds,e,n);a.layers=this.layers,this.add(a);const u=new ui(Ps,Ds,e,n);u.layers=this.layers,this.add(u);const f=new ui(Ps,Ds,e,n);f.layers=this.layers,this.add(f);const d=new ui(Ps,Ds,e,n);d.layers=this.layers,this.add(d);const p=new ui(Ps,Ds,e,n);p.layers=this.layers,this.add(p);const m=new ui(Ps,Ds,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(x,S,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Zm extends En{constructor(e=[],n=Os,r,a,u,f,d,p,m,_){super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d0 extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Zm(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ho(5,5,5),u=new Hi({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ln,blending:gr});u.uniforms.tEquirect.value=n;const f=new Qn(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=Dn),new f0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class pl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),v=this._getHandJoint(m,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],S=_.position.distanceTo(x.position),M=.02,w=.005;m.inputState.pinching&&S>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Qp extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class p0 extends En{constructor(e=null,n=1,r=1,a,u,f,d,p,m=Hn,_=Hn,x,S){super(null,f,d,p,m,_,a,u,x,S),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new se,m0=new se,g0=new ht;class Hr{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Vc.subVectors(r,n).cross(m0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Vc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||g0.getNormalMatrix(e),a=this.coplanarPoint(Vc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Il,v0=new ft(.5,.5),ml=new se;class Qm{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,u=new Hr,f=new Hr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=xi,r=!1){const a=this.planes,u=e.elements,f=u[0],d=u[1],p=u[2],m=u[3],_=u[4],x=u[5],S=u[6],M=u[7],w=u[8],A=u[9],y=u[10],v=u[11],F=u[12],N=u[13],C=u[14],V=u[15];if(a[0].setComponents(m-f,M-_,v-w,V-F).normalize(),a[1].setComponents(m+f,M+_,v+w,V+F).normalize(),a[2].setComponents(m+d,M+x,v+A,V+N).normalize(),a[3].setComponents(m-d,M-x,v-A,V-N).normalize(),r)a[4].setComponents(p,S,y,C).normalize(),a[5].setComponents(m-p,M-S,v-y,V-C).normalize();else if(a[4].setComponents(m-p,M-S,v-y,V-C).normalize(),n===xi)a[5].setComponents(m+p,M+S,v+y,V+C).normalize();else if(n===Cl)a[5].setComponents(p,S,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=v0.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _0 extends zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new se,Ll=new se,Jp=new Kt,Po=new Wm,gl=new Il,Gc=new se,em=new se;class x0 extends Nn{constructor(e=new Vi,n=new _0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Dl.fromBufferAttribute(n,a-1),Ll.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Ll);e.setAttribute("lineDistance",new ki(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(a),gl.radius+=u,e.ray.intersectsSphere(gl)===!1)return;Jp.copy(a).invert(),Po.copy(e.ray).applyMatrix4(Jp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,S=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),w=Math.min(_.count,f.start+f.count);for(let A=M,y=w-1;A<y;A+=m){const v=_.getX(A),F=_.getX(A+1),N=vl(this,e,Po,p,v,F,A);N&&n.push(N)}if(this.isLineLoop){const A=_.getX(w-1),y=_.getX(M),v=vl(this,e,Po,p,A,y,w-1);v&&n.push(v)}}else{const M=Math.max(0,f.start),w=Math.min(S.count,f.start+f.count);for(let A=M,y=w-1;A<y;A+=m){const v=vl(this,e,Po,p,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=vl(this,e,Po,p,w-1,M,w-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function vl(o,e,n,r,a,u,f){const d=o.geometry.attributes.position;if(Dl.fromBufferAttribute(d,a),Ll.fromBufferAttribute(d,u),n.distanceSqToSegment(Dl,Ll,Gc,em)>r)return;Gc.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Gc);if(!(m<e.near||m>e.far))return{distance:m,point:em.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const tm=new se,nm=new se;class S0 extends x0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)tm.fromBufferAttribute(n,a),nm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+tm.distanceTo(nm);e.setAttribute("lineDistance",new ki(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jm extends En{constructor(e,n,r=Yr,a,u,f,d=Hn,p=Hn,m,_=Io,x=1){if(_!==Io&&_!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:n,depth:x};super(S,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eg extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends Vi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,x=e/d,S=n/p,M=[],w=[],A=[],y=[];for(let v=0;v<_;v++){const F=v*S-f;for(let N=0;N<m;N++){const C=N*x-u;w.push(C,-F,0),A.push(0,0,1),y.push(N/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let F=0;F<d;F++){const N=F+m*v,C=F+m*(v+1),V=F+1+m*(v+1),B=F+1+m*v;M.push(N,C,B),M.push(C,V,B)}this.setIndex(M),this.setAttribute("position",new ki(w,3)),this.setAttribute("normal",new ki(A,3)),this.setAttribute("uv",new ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class _l extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class y0 extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M0 extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class E0 extends Pl{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class T0 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class w0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function im(o,e,n,r){const a=A0(r);switch(n){case Om:return o*e;case Bm:return o*e/a.components*a.byteLength;case Yf:return o*e/a.components*a.byteLength;case zm:return o*e*2/a.components*a.byteLength;case qf:return o*e*2/a.components*a.byteLength;case km:return o*e*3/a.components*a.byteLength;case Zn:return o*e*4/a.components*a.byteLength;case $f:return o*e*4/a.components*a.byteLength;case Ml:case El:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tl:case wl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(o,16)*Math.max(e,8)/4;case df:case pf:return Math.max(o,8)*Math.max(e,8)/2;case gf:case vf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _f:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nf:case If:case Uf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ff:case Of:return Math.ceil(o/4)*Math.ceil(e/4)*8;case kf:case Bf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function A0(o){switch(o){case Bi:case Nm:return{byteLength:1,components:1};case Lo:case Im:case Hs:return{byteLength:2,components:1};case Xf:case jf:return{byteLength:2,components:4};case Yr:case Wf:case _i:return{byteLength:4,components:1};case Um:case Fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tg(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function R0(o){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,x=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const _=p.array,x=p.updateRanges;if(o.bindBuffer(m,d),x.length===0)o.bufferSubData(m,0,_);else{x.sort((M,w)=>M.start-w.start);let S=0;for(let M=1;M<x.length;M++){const w=x[S],A=x[M];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++S,x[S]=A)}x.length=S+1;for(let M=0,w=x.length;M<w;M++){const A=x[M];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,F0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mx=`#ifdef USE_GRADIENTMAP
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
}`,gx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xx=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Sx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wx=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Ax=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Rx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,iS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pS=`#ifdef USE_SKINNING
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
#endif`,mS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gS=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,IS=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,US=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,FS=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,VS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,GS=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,WS=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,XS=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,jS=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,YS=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,qS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$S=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,KS=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ZS=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,QS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,JS=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ey=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ty=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,ny=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ry=`uniform vec3 color;
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
}`,sy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,oy=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,pt={alphahash_fragment:C0,alphahash_pars_fragment:b0,alphamap_fragment:P0,alphamap_pars_fragment:D0,alphatest_fragment:L0,alphatest_pars_fragment:N0,aomap_fragment:I0,aomap_pars_fragment:U0,batching_pars_vertex:F0,batching_vertex:O0,begin_vertex:k0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:V0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:j0,color_fragment:Y0,color_pars_fragment:q0,color_pars_vertex:$0,color_vertex:K0,common:Z0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:J0,displacementmap_pars_vertex:ex,displacementmap_vertex:tx,emissivemap_fragment:nx,emissivemap_pars_fragment:ix,colorspace_fragment:rx,colorspace_pars_fragment:sx,envmap_fragment:ox,envmap_common_pars_fragment:ax,envmap_pars_fragment:lx,envmap_pars_vertex:ux,envmap_physical_pars_fragment:Sx,envmap_vertex:cx,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:hx,fog_pars_fragment:px,gradientmap_pars_fragment:mx,lightmap_pars_fragment:gx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:_x,lights_pars_begin:xx,lights_toon_fragment:yx,lights_toon_pars_fragment:Mx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Tx,lights_physical_fragment:wx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:bx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Lx,logdepthbuf_vertex:Nx,map_fragment:Ix,map_pars_fragment:Ux,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Bx,morphinstance_vertex:zx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Wx,normal_fragment_begin:Xx,normal_fragment_maps:jx,normal_pars_fragment:Yx,normal_pars_vertex:qx,normal_vertex:$x,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Zx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:eS,opaque_fragment:tS,packing:nS,premultiplied_alpha_fragment:iS,project_vertex:rS,dithering_fragment:sS,dithering_pars_fragment:oS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:lS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:cS,shadowmap_vertex:fS,shadowmask_pars_fragment:dS,skinbase_vertex:hS,skinning_pars_vertex:pS,skinning_vertex:mS,skinnormal_vertex:gS,specularmap_fragment:vS,specularmap_pars_fragment:_S,tonemapping_fragment:xS,tonemapping_pars_fragment:SS,transmission_fragment:yS,transmission_pars_fragment:MS,uv_pars_fragment:ES,uv_pars_vertex:TS,uv_vertex:wS,worldpos_vertex:AS,background_vert:RS,background_frag:CS,backgroundCube_vert:bS,backgroundCube_frag:PS,cube_vert:DS,cube_frag:LS,depth_vert:NS,depth_frag:IS,distanceRGBA_vert:US,distanceRGBA_frag:FS,equirect_vert:OS,equirect_frag:kS,linedashed_vert:BS,linedashed_frag:zS,meshbasic_vert:HS,meshbasic_frag:VS,meshlambert_vert:GS,meshlambert_frag:WS,meshmatcap_vert:XS,meshmatcap_frag:jS,meshnormal_vert:YS,meshnormal_frag:qS,meshphong_vert:$S,meshphong_frag:KS,meshphysical_vert:ZS,meshphysical_frag:QS,meshtoon_vert:JS,meshtoon_frag:ey,points_vert:ty,points_frag:ny,shadow_vert:iy,shadow_frag:ry,sprite_vert:sy,sprite_frag:oy},be={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},vi={basic:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Mn([be.common,be.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Mn([be.lights,be.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};vi.physical={uniforms:Mn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const xl={r:0,b:0,g:0},Br=new zi,ay=new Kt;function ly(o,e,n,r,a,u,f){const d=new wt(0);let p=u===!0?0:1,m,_,x=null,S=0,M=null;function w(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?n:e).get(C)),C}function A(N){let C=!1;const V=w(N);V===null?v(d,p):V&&V.isColor&&(v(V,1),C=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,C){const V=w(C);V&&(V.isCubeTexture||V.mapping===Nl)?(_===void 0&&(_=new Qn(new Ho(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:zs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,z,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Br.copy(C.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(Br)),_.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Nt,(x!==V||S!==V.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=V,S=V.version,M=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Qn(new jr(2,2),new Hi({name:"BackgroundMaterial",uniforms:zs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Nt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(x!==V||S!==V.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,x=V,S=V.version,M=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,C){N.getRGB(xl,Km(o)),r.buffers.color.setClear(xl.r,xl.g,xl.b,C,f)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),p=C,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:A,addToRenderList:y,dispose:F}}function uy(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=S(null);let u=a,f=!1;function d(R,I,Y,Q,oe){let ce=!1;const ae=x(Q,Y,I);u!==ae&&(u=ae,m(u.object)),ce=M(R,Q,Y,oe),ce&&w(R,Q,Y,oe),oe!==null&&e.update(oe,o.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,C(R,I,Y,Q),oe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,I,Y){const Q=Y.wireframe===!0;let oe=r[R.id];oe===void 0&&(oe={},r[R.id]=oe);let ce=oe[I.id];ce===void 0&&(ce={},oe[I.id]=ce);let ae=ce[Q];return ae===void 0&&(ae=S(p()),ce[Q]=ae),ae}function S(R){const I=[],Y=[],Q=[];for(let oe=0;oe<n;oe++)I[oe]=0,Y[oe]=0,Q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:Q,object:R,attributes:{},index:null}}function M(R,I,Y,Q){const oe=u.attributes,ce=I.attributes;let ae=0;const he=Y.getAttributes();for(const O in he)if(he[O].location>=0){const ne=oe[O];let L=ce[O];if(L===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),ne===void 0||ne.attribute!==L||L&&ne.data!==L.data)return!0;ae++}return u.attributesNum!==ae||u.index!==Q}function w(R,I,Y,Q){const oe={},ce=I.attributes;let ae=0;const he=Y.getAttributes();for(const O in he)if(he[O].location>=0){let ne=ce[O];ne===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const L={};L.attribute=ne,ne&&ne.data&&(L.data=ne.data),oe[O]=L,ae++}u.attributes=oe,u.attributesNum=ae,u.index=Q}function A(){const R=u.newAttributes;for(let I=0,Y=R.length;I<Y;I++)R[I]=0}function y(R){v(R,0)}function v(R,I){const Y=u.newAttributes,Q=u.enabledAttributes,oe=u.attributeDivisors;Y[R]=1,Q[R]===0&&(o.enableVertexAttribArray(R),Q[R]=1),oe[R]!==I&&(o.vertexAttribDivisor(R,I),oe[R]=I)}function F(){const R=u.newAttributes,I=u.enabledAttributes;for(let Y=0,Q=I.length;Y<Q;Y++)I[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),I[Y]=0)}function N(R,I,Y,Q,oe,ce,ae){ae===!0?o.vertexAttribIPointer(R,I,Y,oe,ce):o.vertexAttribPointer(R,I,Y,Q,oe,ce)}function C(R,I,Y,Q){A();const oe=Q.attributes,ce=Y.getAttributes(),ae=I.defaultAttributeValues;for(const he in ce){const O=ce[he];if(O.location>=0){let fe=oe[he];if(fe===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ne=fe.normalized,L=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const De=ie.buffer,ze=ie.type,Ue=ie.bytesPerElement,ee=ze===o.INT||ze===o.UNSIGNED_INT||fe.gpuType===Wf;if(fe.isInterleavedBufferAttribute){const pe=fe.data,_e=pe.stride,Le=fe.offset;if(pe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<O.locationSize;Ie++)v(O.location+Ie,pe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)y(O.location+Ie);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Ie=0;Ie<O.locationSize;Ie++)N(O.location+Ie,L/O.locationSize,ze,ne,_e*Ue,(Le+L/O.locationSize*Ie)*Ue,ee)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<O.locationSize;pe++)v(O.location+pe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<O.locationSize;pe++)y(O.location+pe);o.bindBuffer(o.ARRAY_BUFFER,De);for(let pe=0;pe<O.locationSize;pe++)N(O.location+pe,L/O.locationSize,ze,ne,L*Ue,L/O.locationSize*pe*Ue,ee)}}else if(ae!==void 0){const ne=ae[he];if(ne!==void 0)switch(ne.length){case 2:o.vertexAttrib2fv(O.location,ne);break;case 3:o.vertexAttrib3fv(O.location,ne);break;case 4:o.vertexAttrib4fv(O.location,ne);break;default:o.vertexAttrib1fv(O.location,ne)}}}}F()}function V(){$();for(const R in r){const I=r[R];for(const Y in I){const Q=I[Y];for(const oe in Q)_(Q[oe].object),delete Q[oe];delete I[Y]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const Y in I){const Q=I[Y];for(const oe in Q)_(Q[oe].object),delete Q[oe];delete I[Y]}delete r[R.id]}function z(R){for(const I in r){const Y=r[I];if(Y[R.id]===void 0)continue;const Q=Y[R.id];for(const oe in Q)_(Q[oe].object),delete Q[oe];delete Y[R.id]}}function $(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:$,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:F}}function cy(o,e,n){let r;function a(m){r=m}function u(m,_){o.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,x){x!==0&&(o.drawArraysInstanced(r,m,_,x),n.update(_,r,x))}function d(m,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,x);let M=0;for(let w=0;w<x;w++)M+=_[w];n.update(M,r,1)}function p(m,_,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)f(m[w],_[w],S[w]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,S,0,x);let w=0;for(let A=0;A<x;A++)w+=_[A]*S[A];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function fy(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(z){return!(z!==Zn&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const $=z===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Bi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==_i&&!$)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,S=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=w>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:V,maxSamples:B}}function dy(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Hr,d=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||a;return a=S,r=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){n=_(x,S,0)},this.setState=function(x,S,M){const w=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,v=o.get(x);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const F=u?0:r,N=F*4;let C=v.clippingState||null;p.value=C,C=_(w,S,N,M);for(let V=0;V!==N;++V)C[V]=n[V];v.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,S,M,w){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=p.value,w!==!0||y===null){const v=M+A*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,C=M;N!==A;++N,C+=4)f.copy(x[N]).applyMatrix4(F,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function hy(o){let e=new WeakMap;function n(f,d){return d===lf?f.mapping=Os:d===uf&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===lf||d===uf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new d0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ns=4,rm=[.125,.215,.35,.446,.526,.582],Wr=20,Wc=new E0,sm=new wt;let Xc=null,jc=0,Yc=0,qc=!1;const Vr=(1+Math.sqrt(5))/2,Ls=1/Vr,om=[new se(-Vr,Ls,0),new se(Vr,Ls,0),new se(-Ls,0,Vr),new se(Ls,0,Vr),new se(0,Vr,-Ls),new se(0,Vr,Ls),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],py=new se;class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=py}=u;Xc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,jc,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Hs,format:Zn,colorSpace:Bs,depthBuffer:!1},a=lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=my(u)),this._blurMaterial=gy(u,e,n)}return a}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,r,a,u){const p=new ui(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,S=x.autoClear,M=x.toneMapping;x.getClearColor(sm),x.toneMapping=vr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null));const A=new Ym({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),y=new Qn(new Ho,A);let v=!1;const F=e.background;F?F.isColor&&(A.color.copy(F),e.background=null,v=!0):(A.color.copy(sm),v=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[N],u.y,u.z)):C===1?(p.up.set(0,0,m[N]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[N],u.z)):(p.up.set(0,m[N],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[N]));const V=this._cubeSize;Sl(a,C*V,N>2?V:0,V,V),x.setRenderTarget(a),v&&x.render(y,p),x.render(e,p)}y.geometry.dispose(),y.material.dispose(),x.toneMapping=M,x.autoClear=S,e.background=F}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Qn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Sl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Wc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=om[(a-u-1)%om.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Qn(this._lodPlanes[a],m),S=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Wr-1),A=u/w,y=isFinite(u)?1+Math.floor(_*A):Wr;y>Wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const v=[];let F=0;for(let z=0;z<Wr;++z){const $=z/A,P=Math.exp(-$*$/2);v.push(P),z===0?F+=P:z<y&&(F+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/F;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=f==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=w,S.mipInt.value=N-r;const C=this._sizeLods[a],V=3*C*(a>N-Ns?a-N+Ns:0),B=4*(this._cubeSize-C);Sl(n,V,B,3*C,2*C),p.setRenderTarget(n),p.render(x,Wc)}}function my(o){const e=[],n=[],r=[];let a=o;const u=o-Ns+1+rm.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ns?p=rm[f-o+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,x=1+m,S=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,w=6,A=3,y=2,v=1,F=new Float32Array(A*w*M),N=new Float32Array(y*w*M),C=new Float32Array(v*w*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,$=B>2?0:-1,P=[z,$,0,z+2/3,$,0,z+2/3,$+1,0,z,$,0,z+2/3,$+1,0,z,$+1,0];F.set(P,A*w*B),N.set(S,y*w*B);const R=[B,B,B,B,B,B];C.set(R,v*w*B)}const V=new Vi;V.setAttribute("position",new di(F,A)),V.setAttribute("uv",new di(N,y)),V.setAttribute("faceIndex",new di(C,v)),e.push(V),a>Ns&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function lm(o,e,n){const r=new xr(o,e,n);return r.texture.mapping=Nl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function gy(o,e,n){const r=new Float32Array(Wr),a=new se(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function um(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zf(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function cm(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Zf(){return`

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
	`}function vy(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===lf||p===uf,_=p===Os||p===ks;if(m||_){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new am(o)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&a(M)?(n===null&&(n=new am(o)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function _y(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Fo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function xy(o,e,n,r){const a={},u=new WeakMap;function f(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);S.removeEventListener("dispose",f),delete a[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(x,S){return a[S.id]===!0||(S.addEventListener("dispose",f),a[S.id]=!0,n.memory.geometries++),S}function p(x){const S=x.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function m(x){const S=[],M=x.index,w=x.attributes.position;let A=0;if(M!==null){const F=M.array;A=M.version;for(let N=0,C=F.length;N<C;N+=3){const V=F[N+0],B=F[N+1],z=F[N+2];S.push(V,B,B,z,z,V)}}else if(w!==void 0){const F=w.array;A=w.version;for(let N=0,C=F.length/3-1;N<C;N+=3){const V=N+0,B=N+1,z=N+2;S.push(V,B,B,z,z,V)}}else return;const y=new(Vm(S)?$m:qm)(S,1);y.version=A;const v=u.get(x);v&&e.remove(v),u.set(x,y)}function _(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function Sy(o,e,n){let r;function a(S){r=S}let u,f;function d(S){u=S.type,f=S.bytesPerElement}function p(S,M){o.drawElements(r,M,u,S*f),n.update(M,r,1)}function m(S,M,w){w!==0&&(o.drawElementsInstanced(r,M,u,S*f,w),n.update(M,r,w))}function _(S,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,w);let y=0;for(let v=0;v<w;v++)y+=M[v];n.update(y,r,1)}function x(S,M,w,A){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)m(S[v]/f,M[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,A,0,w);let v=0;for(let F=0;F<w;F++)v+=M[F]*A[F];n.update(v,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function yy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function My(o,e,n){const r=new WeakMap,a=new Wt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let S=r.get(d);if(S===void 0||S.count!==x){let R=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let V=d.attributes.position.count*C,B=1;V>e.maxTextureSize&&(B=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*B*4*x),$=new Gm(z,V,B,x);$.type=_i,$.needsUpdate=!0;const P=C*4;for(let I=0;I<x;I++){const Y=v[I],Q=F[I],oe=N[I],ce=V*B*4*I;for(let ae=0;ae<Y.count;ae++){const he=ae*P;w===!0&&(a.fromBufferAttribute(Y,ae),z[ce+he+0]=a.x,z[ce+he+1]=a.y,z[ce+he+2]=a.z,z[ce+he+3]=0),A===!0&&(a.fromBufferAttribute(Q,ae),z[ce+he+4]=a.x,z[ce+he+5]=a.y,z[ce+he+6]=a.z,z[ce+he+7]=0),y===!0&&(a.fromBufferAttribute(oe,ae),z[ce+he+8]=a.x,z[ce+he+9]=a.y,z[ce+he+10]=a.z,z[ce+he+11]=oe.itemSize===4?a.w:1)}}S={count:x,texture:$,size:new ft(V,B)},r.set(d,S),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const A=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Ey(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,x=e.get(p,_);if(a.get(x)!==m&&(e.update(x),a.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;a.get(S)!==m&&(S.update(),a.set(S,m))}return x}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const ng=new En,fm=new Jm(1,1),ig=new Gm,rg=new $_,sg=new Zm,dm=[],hm=[],pm=new Float32Array(16),mm=new Float32Array(9),gm=new Float32Array(4);function Gs(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=dm[a];if(u===void 0&&(u=new Float32Array(a),dm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function en(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function tn(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ul(o,e){let n=hm[e];n===void 0&&(n=new Int32Array(e),hm[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function Ty(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function wy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;o.uniform2fv(this.addr,e),tn(n,e)}}function Ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;o.uniform3fv(this.addr,e),tn(n,e)}}function Ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;o.uniform4fv(this.addr,e),tn(n,e)}}function Cy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;gm.set(r),o.uniformMatrix2fv(this.addr,!1,gm),tn(n,r)}}function by(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;mm.set(r),o.uniformMatrix3fv(this.addr,!1,mm),tn(n,r)}}function Py(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(en(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,r))return;pm.set(r),o.uniformMatrix4fv(this.addr,!1,pm),tn(n,r)}}function Dy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function Ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;o.uniform2iv(this.addr,e),tn(n,e)}}function Ny(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;o.uniform3iv(this.addr,e),tn(n,e)}}function Iy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;o.uniform4iv(this.addr,e),tn(n,e)}}function Uy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function Fy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;o.uniform2uiv(this.addr,e),tn(n,e)}}function Oy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;o.uniform3uiv(this.addr,e),tn(n,e)}}function ky(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;o.uniform4uiv(this.addr,e),tn(n,e)}}function By(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(fm.compareFunction=Hm,u=fm):u=ng,n.setTexture2D(e||u,a)}function zy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||rg,a)}function Hy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||sg,a)}function Vy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ig,a)}function Gy(o){switch(o){case 5126:return Ty;case 35664:return wy;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return by;case 35676:return Py;case 5124:case 35670:return Dy;case 35667:case 35671:return Ly;case 35668:case 35672:return Ny;case 35669:case 35673:return Iy;case 5125:return Uy;case 36294:return Fy;case 36295:return Oy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return zy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Vy}}function Wy(o,e){o.uniform1fv(this.addr,e)}function Xy(o,e){const n=Gs(e,this.size,2);o.uniform2fv(this.addr,n)}function jy(o,e){const n=Gs(e,this.size,3);o.uniform3fv(this.addr,n)}function Yy(o,e){const n=Gs(e,this.size,4);o.uniform4fv(this.addr,n)}function qy(o,e){const n=Gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function $y(o,e){const n=Gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Ky(o,e){const n=Gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Zy(o,e){o.uniform1iv(this.addr,e)}function Qy(o,e){o.uniform2iv(this.addr,e)}function Jy(o,e){o.uniform3iv(this.addr,e)}function eM(o,e){o.uniform4iv(this.addr,e)}function tM(o,e){o.uniform1uiv(this.addr,e)}function nM(o,e){o.uniform2uiv(this.addr,e)}function iM(o,e){o.uniform3uiv(this.addr,e)}function rM(o,e){o.uniform4uiv(this.addr,e)}function sM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);en(r,u)||(o.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ng,u[f])}function oM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);en(r,u)||(o.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||rg,u[f])}function aM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);en(r,u)||(o.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||sg,u[f])}function lM(o,e,n){const r=this.cache,a=e.length,u=Ul(n,a);en(r,u)||(o.uniform1iv(this.addr,u),tn(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||ig,u[f])}function uM(o){switch(o){case 5126:return Wy;case 35664:return Xy;case 35665:return jy;case 35666:return Yy;case 35674:return qy;case 35675:return $y;case 35676:return Ky;case 5124:case 35670:return Zy;case 35667:case 35671:return Qy;case 35668:case 35672:return Jy;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}class cM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=Gy(n.type)}}class fM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class dM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function vm(o,e){o.seq.push(e),o.map[e.id]=e}function hM(o,e,n){const r=o.name,a=r.length;for($c.lastIndex=0;;){const u=$c.exec(r),f=$c.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){vm(n,m===void 0?new cM(d,o,e):new fM(d,o,e));break}else{let x=n.map[d];x===void 0&&(x=new dM(d),vm(n,x)),n=x}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);hM(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function _m(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const pM=37297;let mM=0;function gM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const xm=new ht;function vM(o){Tt._getMatrix(xm,Tt.workingColorSpace,o);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Rl:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Sm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+gM(o.getShaderSource(e),d)}else return u}function _M(o,e){const n=vM(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xM(o,e){let n;switch(e){case M_:n="Linear";break;case E_:n="Reinhard";break;case T_:n="Cineon";break;case w_:n="ACESFilmic";break;case R_:n="AgX";break;case C_:n="Neutral";break;case A_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new se;function SM(){Tt.getLuminanceCoefficients(yl);const o=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function MM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Do(o){return o!==""}function ym(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(o){return o.replace(TM,AM)}const wM=new Map;function AM(o,e){let n=pt[e];if(n===void 0){const r=wM.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(o){return o.replace(RM,CM)}function CM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function Tm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function PM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function LM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Dm:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case y_:e="ENVMAP_BLENDING_ADD";break}return e}function NM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function IM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=bM(n),m=PM(n),_=DM(n),x=LM(n),S=NM(n),M=yM(n),w=MM(u),A=a.createProgram();let y,v,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Do).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(y=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vr?"#define TONE_MAPPING":"",n.toneMapping!==vr?pt.tonemapping_pars_fragment:"",n.toneMapping!==vr?xM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,_M("linearToOutputTexel",n.outputColorSpace),SM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Hf(f),f=ym(f,n),f=Mm(f,n),d=Hf(d),d=ym(d,n),d=Mm(d,n),f=Em(f),d=Em(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=F+y+f,C=F+v+d,V=_m(a,a.VERTEX_SHADER,N),B=_m(a,a.FRAGMENT_SHADER,C);a.attachShader(A,V),a.attachShader(A,B),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function z(I){if(o.debug.checkShaderErrors){const Y=a.getProgramInfoLog(A)||"",Q=a.getShaderInfoLog(V)||"",oe=a.getShaderInfoLog(B)||"",ce=Y.trim(),ae=Q.trim(),he=oe.trim();let O=!0,fe=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(O=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,A,V,B);else{const ne=Sm(a,V,"vertex"),L=Sm(a,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ce+`
`+ne+`
`+L)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ae===""||he==="")&&(fe=!1);fe&&(I.diagnostics={runnable:O,programLog:ce,vertexShader:{log:ae,prefix:y},fragmentShader:{log:he,prefix:v}})}a.deleteShader(V),a.deleteShader(B),$=new Al(a,A),P=EM(a,A)}let $;this.getUniforms=function(){return $===void 0&&z(this),$};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,pM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=B,this}let UM=0;class FM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new OM(e),n.set(e,r)),r}}class OM{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}}function kM(o,e,n,r,a,u,f){const d=new Xm,p=new FM,m=new Set,_=[],x=a.logarithmicDepthBuffer,S=a.vertexTextures;let M=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,R,I,Y,Q){const oe=Y.fog,ce=Q.geometry,ae=P.isMeshStandardMaterial?Y.environment:null,he=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),O=he&&he.mapping===Nl?he.image.height:null,fe=w[P.type];P.precision!==null&&(M=a.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const ne=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,L=ne!==void 0?ne.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let De,ze,Ue,ee;if(fe){const St=vi[fe];De=St.vertexShader,ze=St.fragmentShader}else De=P.vertexShader,ze=P.fragmentShader,p.update(P),Ue=p.getVertexShaderID(P),ee=p.getFragmentShaderID(P);const pe=o.getRenderTarget(),_e=o.state.buffers.depth.getReversed(),Le=Q.isInstancedMesh===!0,Ie=Q.isBatchedMesh===!0,dt=!!P.map,Xt=!!P.matcap,U=!!he,At=!!P.aoMap,st=!!P.lightMap,Je=!!P.bumpMap,Ge=!!P.normalMap,_t=!!P.displacementMap,He=!!P.emissiveMap,ot=!!P.metalnessMap,Pt=!!P.roughnessMap,Dt=P.anisotropy>0,b=P.clearcoat>0,g=P.dispersion>0,k=P.iridescence>0,Z=P.sheen>0,de=P.transmission>0,te=Dt&&!!P.anisotropyMap,Ne=b&&!!P.clearcoatMap,ye=b&&!!P.clearcoatNormalMap,Fe=b&&!!P.clearcoatRoughnessMap,je=k&&!!P.iridescenceMap,Te=k&&!!P.iridescenceThicknessMap,Pe=Z&&!!P.sheenColorMap,it=Z&&!!P.sheenRoughnessMap,$e=!!P.specularMap,Re=!!P.specularColorMap,ct=!!P.specularIntensityMap,G=de&&!!P.transmissionMap,Me=de&&!!P.thicknessMap,Ae=!!P.gradientMap,Oe=!!P.alphaMap,Se=P.alphaTest>0,me=!!P.alphaHash,Ye=!!P.extensions;let ut=vr;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ut=o.toneMapping);const Ct={shaderID:fe,shaderType:P.type,shaderName:P.name,vertexShader:De,fragmentShader:ze,defines:P.defines,customVertexShaderID:Ue,customFragmentShaderID:ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Ie,batchingColor:Ie&&Q._colorsTexture!==null,instancing:Le,instancingColor:Le&&Q.instanceColor!==null,instancingMorph:Le&&Q.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:pe===null?o.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Bs,alphaToCoverage:!!P.alphaToCoverage,map:dt,matcap:Xt,envMap:U,envMapMode:U&&he.mapping,envMapCubeUVHeight:O,aoMap:At,lightMap:st,bumpMap:Je,normalMap:Ge,displacementMap:S&&_t,emissiveMap:He,normalMapObjectSpace:Ge&&P.normalMapType===N_,normalMapTangentSpace:Ge&&P.normalMapType===L_,metalnessMap:ot,roughnessMap:Pt,anisotropy:Dt,anisotropyMap:te,clearcoat:b,clearcoatMap:Ne,clearcoatNormalMap:ye,clearcoatRoughnessMap:Fe,dispersion:g,iridescence:k,iridescenceMap:je,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:it,specularMap:$e,specularColorMap:Re,specularIntensityMap:ct,transmission:de,transmissionMap:G,thicknessMap:Me,gradientMap:Ae,opaque:P.transparent===!1&&P.blending===Is&&P.alphaToCoverage===!1,alphaMap:Oe,alphaTest:Se,alphaHash:me,combine:P.combine,mapUv:dt&&A(P.map.channel),aoMapUv:At&&A(P.aoMap.channel),lightMapUv:st&&A(P.lightMap.channel),bumpMapUv:Je&&A(P.bumpMap.channel),normalMapUv:Ge&&A(P.normalMap.channel),displacementMapUv:_t&&A(P.displacementMap.channel),emissiveMapUv:He&&A(P.emissiveMap.channel),metalnessMapUv:ot&&A(P.metalnessMap.channel),roughnessMapUv:Pt&&A(P.roughnessMap.channel),anisotropyMapUv:te&&A(P.anisotropyMap.channel),clearcoatMapUv:Ne&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ye&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(P.sheenRoughnessMap.channel),specularMapUv:$e&&A(P.specularMap.channel),specularColorMapUv:Re&&A(P.specularColorMap.channel),specularIntensityMapUv:ct&&A(P.specularIntensityMap.channel),transmissionMapUv:G&&A(P.transmissionMap.channel),thicknessMapUv:Me&&A(P.thicknessMap.channel),alphaMapUv:Oe&&A(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ge||Dt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ce.attributes.uv&&(dt||Oe),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:_e,skinning:Q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:ut,decodeVideoTexture:dt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Nt,decodeVideoTextureEmissive:He&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Nt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Fi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:Ye&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&P.extensions.multiDraw===!0||Ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Ct.vertexUv1s=m.has(1),Ct.vertexUv2s=m.has(2),Ct.vertexUv3s=m.has(3),m.clear(),Ct}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const I in P.defines)R.push(I),R.push(P.defines[I]);return P.isRawShaderMaterial===!1&&(F(R,P),N(R,P),R.push(o.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function F(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function N(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=w[P.type];let I;if(R){const Y=vi[R];I=l0.clone(Y.uniforms)}else I=P.uniforms;return I}function V(P,R){let I;for(let Y=0,Q=_.length;Y<Q;Y++){const oe=_[Y];if(oe.cacheKey===R){I=oe,++I.usedTimes;break}}return I===void 0&&(I=new IM(o,R,P,u),_.push(I)),I}function B(P){if(--P.usedTimes===0){const R=_.indexOf(P);_[R]=_[_.length-1],_.pop(),P.destroy()}}function z(P){p.remove(P)}function $(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:C,acquireProgram:V,releaseProgram:B,releaseShaderCache:z,programs:_,dispose:$}}function BM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function zM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function wm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Am(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(x,S,M,w,A,y){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:S,material:M,groupOrder:w,renderOrder:x.renderOrder,z:A,group:y},o[e]=v):(v.id=x.id,v.object=x,v.geometry=S,v.material=M,v.groupOrder=w,v.renderOrder=x.renderOrder,v.z=A,v.group=y),e++,v}function d(x,S,M,w,A,y){const v=f(x,S,M,w,A,y);M.transmission>0?r.push(v):M.transparent===!0?a.push(v):n.push(v)}function p(x,S,M,w,A,y){const v=f(x,S,M,w,A,y);M.transmission>0?r.unshift(v):M.transparent===!0?a.unshift(v):n.unshift(v)}function m(x,S){n.length>1&&n.sort(x||zM),r.length>1&&r.sort(S||wm),a.length>1&&a.sort(S||wm)}function _(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function HM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new Am,o.set(r,[f])):a>=u.length?(f=new Am,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function VM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new wt};break;case"SpotLight":n={position:new se,direction:new se,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new se,halfWidth:new se,halfHeight:new se};break}return o[e.id]=n,n}}}function GM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let WM=0;function XM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function jM(o){const e=new VM,n=GM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const a=new se,u=new Kt,f=new Kt;function d(m){let _=0,x=0,S=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,w=0,A=0,y=0,v=0,F=0,N=0,C=0,V=0,B=0,z=0;m.sort(XM);for(let P=0,R=m.length;P<R;P++){const I=m[P],Y=I.color,Q=I.intensity,oe=I.distance,ce=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=Y.r*Q,x+=Y.g*Q,S+=Y.b*Q;else if(I.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(I.sh.coefficients[ae],Q);z++}else if(I.isDirectionalLight){const ae=e.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const he=I.shadow,O=n.get(I);O.shadowIntensity=he.intensity,O.shadowBias=he.bias,O.shadowNormalBias=he.normalBias,O.shadowRadius=he.radius,O.shadowMapSize=he.mapSize,r.directionalShadow[M]=O,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=I.shadow.matrix,F++}r.directional[M]=ae,M++}else if(I.isSpotLight){const ae=e.get(I);ae.position.setFromMatrixPosition(I.matrixWorld),ae.color.copy(Y).multiplyScalar(Q),ae.distance=oe,ae.coneCos=Math.cos(I.angle),ae.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ae.decay=I.decay,r.spot[A]=ae;const he=I.shadow;if(I.map&&(r.spotLightMap[V]=I.map,V++,he.updateMatrices(I),I.castShadow&&B++),r.spotLightMatrix[A]=he.matrix,I.castShadow){const O=n.get(I);O.shadowIntensity=he.intensity,O.shadowBias=he.bias,O.shadowNormalBias=he.normalBias,O.shadowRadius=he.radius,O.shadowMapSize=he.mapSize,r.spotShadow[A]=O,r.spotShadowMap[A]=ce,C++}A++}else if(I.isRectAreaLight){const ae=e.get(I);ae.color.copy(Y).multiplyScalar(Q),ae.halfWidth.set(I.width*.5,0,0),ae.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=ae,y++}else if(I.isPointLight){const ae=e.get(I);if(ae.color.copy(I.color).multiplyScalar(I.intensity),ae.distance=I.distance,ae.decay=I.decay,I.castShadow){const he=I.shadow,O=n.get(I);O.shadowIntensity=he.intensity,O.shadowBias=he.bias,O.shadowNormalBias=he.normalBias,O.shadowRadius=he.radius,O.shadowMapSize=he.mapSize,O.shadowCameraNear=he.camera.near,O.shadowCameraFar=he.camera.far,r.pointShadow[w]=O,r.pointShadowMap[w]=ce,r.pointShadowMatrix[w]=I.shadow.matrix,N++}r.point[w]=ae,w++}else if(I.isHemisphereLight){const ae=e.get(I);ae.skyColor.copy(I.color).multiplyScalar(Q),ae.groundColor.copy(I.groundColor).multiplyScalar(Q),r.hemi[v]=ae,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=S;const $=r.hash;($.directionalLength!==M||$.pointLength!==w||$.spotLength!==A||$.rectAreaLength!==y||$.hemiLength!==v||$.numDirectionalShadows!==F||$.numPointShadows!==N||$.numSpotShadows!==C||$.numSpotMaps!==V||$.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+V-B,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,$.directionalLength=M,$.pointLength=w,$.spotLength=A,$.rectAreaLength=y,$.hemiLength=v,$.numDirectionalShadows=F,$.numPointShadows=N,$.numSpotShadows=C,$.numSpotMaps=V,$.numLightProbes=z,r.version=WM++)}function p(m,_){let x=0,S=0,M=0,w=0,A=0;const y=_.matrixWorldInverse;for(let v=0,F=m.length;v<F;v++){const N=m[v];if(N.isDirectionalLight){const C=r.directional[x];C.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),x++}else if(N.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(N.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),w++}else if(N.isPointLight){const C=r.point[S];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:r}}function Rm(o){const e=new jM(o),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function YM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new Rm(o),e.set(a,[d])):u>=f.length?(d=new Rm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`;function KM(o,e,n){let r=new Qm;const a=new ft,u=new ft,f=new Wt,d=new y0({depthPacking:D_}),p=new M0,m={},_=n.maxTextureSize,x={[_r]:Ln,[Ln]:_r,[Fi]:Fi},S=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:qM,fragmentShader:$M}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const w=new Vi;w.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qn(w,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let v=this.type;this.render=function(B,z,$){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const P=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(gr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=v!==Ui&&this.type===Ui,oe=v===Ui&&this.type!==Ui;for(let ce=0,ae=B.length;ce<ae;ce++){const he=B[ce],O=he.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const fe=O.getFrameExtents();if(a.multiply(fe),u.copy(O.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/fe.x),a.x=u.x*fe.x,O.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/fe.y),a.y=u.y*fe.y,O.mapSize.y=u.y)),O.map===null||Q===!0||oe===!0){const L=this.type!==Ui?{minFilter:Hn,magFilter:Hn}:{};O.map!==null&&O.map.dispose(),O.map=new xr(a.x,a.y,L),O.map.texture.name=he.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const ne=O.getViewportCount();for(let L=0;L<ne;L++){const ie=O.getViewport(L);f.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),Y.viewport(f),O.updateMatrices(he,L),r=O.getFrustum(),C(z,$,O.camera,he,this.type)}O.isPointLightShadow!==!0&&this.type===Ui&&F(O,$),O.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(P,R,I)};function F(B,z){const $=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new xr(a.x,a.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,$,S,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,$,M,A,null)}function N(B,z,$,P){let R=null;const I=$.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)R=I;else if(R=$.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=R.uuid,Q=z.uuid;let oe=m[Y];oe===void 0&&(oe={},m[Y]=oe);let ce=oe[Q];ce===void 0&&(ce=R.clone(),oe[Q]=ce,z.addEventListener("dispose",V)),R=ce}if(R.visible=z.visible,R.wireframe=z.wireframe,P===Ui?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=$}return R}function C(B,z,$,P,R){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Ui)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,B.matrixWorld);const Q=e.update(B),oe=B.material;if(Array.isArray(oe)){const ce=Q.groups;for(let ae=0,he=ce.length;ae<he;ae++){const O=ce[ae],fe=oe[O.materialIndex];if(fe&&fe.visible){const ne=N(B,fe,P,R);B.onBeforeShadow(o,B,z,$,Q,ne,O),o.renderBufferDirect($,null,Q,ne,B,O),B.onAfterShadow(o,B,z,$,Q,ne,O)}}}else if(oe.visible){const ce=N(B,oe,P,R);B.onBeforeShadow(o,B,z,$,Q,ce,null),o.renderBufferDirect($,null,Q,ce,B,null),B.onAfterShadow(o,B,z,$,Q,ce,null)}}const Y=B.children;for(let Q=0,oe=Y.length;Q<oe;Q++)C(Y[Q],z,$,P,R)}function V(B){B.target.removeEventListener("dispose",V);for(const $ in m){const P=m[$],R=B.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const ZM={[ef]:tf,[nf]:of,[rf]:af,[Fs]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:Fs};function QM(o,e){function n(){let G=!1;const Me=new Wt;let Ae=null;const Oe=new Wt(0,0,0,0);return{setMask:function(Se){Ae!==Se&&!G&&(o.colorMask(Se,Se,Se,Se),Ae=Se)},setLocked:function(Se){G=Se},setClear:function(Se,me,Ye,ut,Ct){Ct===!0&&(Se*=ut,me*=ut,Ye*=ut),Me.set(Se,me,Ye,ut),Oe.equals(Me)===!1&&(o.clearColor(Se,me,Ye,ut),Oe.copy(Me))},reset:function(){G=!1,Ae=null,Oe.set(-1,0,0,0)}}}function r(){let G=!1,Me=!1,Ae=null,Oe=null,Se=null;return{setReversed:function(me){if(Me!==me){const Ye=e.get("EXT_clip_control");me?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const ut=Se;Se=null,this.setClear(ut)}},getReversed:function(){return Me},setTest:function(me){me?pe(o.DEPTH_TEST):_e(o.DEPTH_TEST)},setMask:function(me){Ae!==me&&!G&&(o.depthMask(me),Ae=me)},setFunc:function(me){if(Me&&(me=ZM[me]),Oe!==me){switch(me){case ef:o.depthFunc(o.NEVER);break;case tf:o.depthFunc(o.ALWAYS);break;case nf:o.depthFunc(o.LESS);break;case Fs:o.depthFunc(o.LEQUAL);break;case rf:o.depthFunc(o.EQUAL);break;case sf:o.depthFunc(o.GEQUAL);break;case of:o.depthFunc(o.GREATER);break;case af:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Oe=me}},setLocked:function(me){G=me},setClear:function(me){Se!==me&&(Me&&(me=1-me),o.clearDepth(me),Se=me)},reset:function(){G=!1,Ae=null,Oe=null,Se=null,Me=!1}}}function a(){let G=!1,Me=null,Ae=null,Oe=null,Se=null,me=null,Ye=null,ut=null,Ct=null;return{setTest:function(St){G||(St?pe(o.STENCIL_TEST):_e(o.STENCIL_TEST))},setMask:function(St){Me!==St&&!G&&(o.stencilMask(St),Me=St)},setFunc:function(St,Vn,un){(Ae!==St||Oe!==Vn||Se!==un)&&(o.stencilFunc(St,Vn,un),Ae=St,Oe=Vn,Se=un)},setOp:function(St,Vn,un){(me!==St||Ye!==Vn||ut!==un)&&(o.stencilOp(St,Vn,un),me=St,Ye=Vn,ut=un)},setLocked:function(St){G=St},setClear:function(St){Ct!==St&&(o.clearStencil(St),Ct=St)},reset:function(){G=!1,Me=null,Ae=null,Oe=null,Se=null,me=null,Ye=null,ut=null,Ct=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},x={},S=new WeakMap,M=[],w=null,A=!1,y=null,v=null,F=null,N=null,C=null,V=null,B=null,z=new wt(0,0,0),$=0,P=!1,R=null,I=null,Y=null,Q=null,oe=null;const ce=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,he=0;const O=o.getParameter(o.VERSION);O.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(O)[1]),ae=he>=1):O.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ae=he>=2);let fe=null,ne={};const L=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),De=new Wt().fromArray(L),ze=new Wt().fromArray(ie);function Ue(G,Me,Ae,Oe){const Se=new Uint8Array(4),me=o.createTexture();o.bindTexture(G,me),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ye=0;Ye<Ae;Ye++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Me,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(Me+Ye,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return me}const ee={};ee[o.TEXTURE_2D]=Ue(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=Ue(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=Ue(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=Ue(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),pe(o.DEPTH_TEST),f.setFunc(Fs),Je(!1),Ge(bp),pe(o.CULL_FACE),At(gr);function pe(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function _e(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Le(G,Me){return x[G]!==Me?(o.bindFramebuffer(G,Me),x[G]=Me,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Me),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Me),!0):!1}function Ie(G,Me){let Ae=M,Oe=!1;if(G){Ae=S.get(Me),Ae===void 0&&(Ae=[],S.set(Me,Ae));const Se=G.textures;if(Ae.length!==Se.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let me=0,Ye=Se.length;me<Ye;me++)Ae[me]=o.COLOR_ATTACHMENT0+me;Ae.length=Se.length,Oe=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Oe=!0);Oe&&o.drawBuffers(Ae)}function dt(G){return w!==G?(o.useProgram(G),w=G,!0):!1}const Xt={[Gr]:o.FUNC_ADD,[i_]:o.FUNC_SUBTRACT,[r_]:o.FUNC_REVERSE_SUBTRACT};Xt[s_]=o.MIN,Xt[o_]=o.MAX;const U={[a_]:o.ZERO,[l_]:o.ONE,[u_]:o.SRC_COLOR,[Qc]:o.SRC_ALPHA,[m_]:o.SRC_ALPHA_SATURATE,[h_]:o.DST_COLOR,[f_]:o.DST_ALPHA,[c_]:o.ONE_MINUS_SRC_COLOR,[Jc]:o.ONE_MINUS_SRC_ALPHA,[p_]:o.ONE_MINUS_DST_COLOR,[d_]:o.ONE_MINUS_DST_ALPHA,[g_]:o.CONSTANT_COLOR,[v_]:o.ONE_MINUS_CONSTANT_COLOR,[__]:o.CONSTANT_ALPHA,[x_]:o.ONE_MINUS_CONSTANT_ALPHA};function At(G,Me,Ae,Oe,Se,me,Ye,ut,Ct,St){if(G===gr){A===!0&&(_e(o.BLEND),A=!1);return}if(A===!1&&(pe(o.BLEND),A=!0),G!==n_){if(G!==y||St!==P){if((v!==Gr||C!==Gr)&&(o.blendEquation(o.FUNC_ADD),v=Gr,C=Gr),St)switch(G){case Is:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFunc(o.ONE,o.ONE);break;case Pp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dp:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Is:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Pp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,N=null,V=null,B=null,z.set(0,0,0),$=0,y=G,P=St}return}Se=Se||Me,me=me||Ae,Ye=Ye||Oe,(Me!==v||Se!==C)&&(o.blendEquationSeparate(Xt[Me],Xt[Se]),v=Me,C=Se),(Ae!==F||Oe!==N||me!==V||Ye!==B)&&(o.blendFuncSeparate(U[Ae],U[Oe],U[me],U[Ye]),F=Ae,N=Oe,V=me,B=Ye),(ut.equals(z)===!1||Ct!==$)&&(o.blendColor(ut.r,ut.g,ut.b,Ct),z.copy(ut),$=Ct),y=G,P=!1}function st(G,Me){G.side===Fi?_e(o.CULL_FACE):pe(o.CULL_FACE);let Ae=G.side===Ln;Me&&(Ae=!Ae),Je(Ae),G.blending===Is&&G.transparent===!1?At(gr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),u.setMask(G.colorWrite);const Oe=G.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),He(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(o.SAMPLE_ALPHA_TO_COVERAGE):_e(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function Ge(G){G!==Jv?(pe(o.CULL_FACE),G!==I&&(G===bp?o.cullFace(o.BACK):G===e_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_e(o.CULL_FACE),I=G}function _t(G){G!==Y&&(ae&&o.lineWidth(G),Y=G)}function He(G,Me,Ae){G?(pe(o.POLYGON_OFFSET_FILL),(Q!==Me||oe!==Ae)&&(o.polygonOffset(Me,Ae),Q=Me,oe=Ae)):_e(o.POLYGON_OFFSET_FILL)}function ot(G){G?pe(o.SCISSOR_TEST):_e(o.SCISSOR_TEST)}function Pt(G){G===void 0&&(G=o.TEXTURE0+ce-1),fe!==G&&(o.activeTexture(G),fe=G)}function Dt(G,Me,Ae){Ae===void 0&&(fe===null?Ae=o.TEXTURE0+ce-1:Ae=fe);let Oe=ne[Ae];Oe===void 0&&(Oe={type:void 0,texture:void 0},ne[Ae]=Oe),(Oe.type!==G||Oe.texture!==Me)&&(fe!==Ae&&(o.activeTexture(Ae),fe=Ae),o.bindTexture(G,Me||ee[G]),Oe.type=G,Oe.texture=Me)}function b(){const G=ne[fe];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){De.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),De.copy(G))}function it(G){ze.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function $e(G,Me){let Ae=m.get(Me);Ae===void 0&&(Ae=new WeakMap,m.set(Me,Ae));let Oe=Ae.get(G);Oe===void 0&&(Oe=o.getUniformBlockIndex(Me,G.name),Ae.set(G,Oe))}function Re(G,Me){const Oe=m.get(Me).get(G);p.get(Me)!==Oe&&(o.uniformBlockBinding(Me,Oe,G.__bindingPointIndex),p.set(Me,Oe))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},fe=null,ne={},x={},S=new WeakMap,M=[],w=null,A=!1,y=null,v=null,F=null,N=null,C=null,V=null,B=null,z=new wt(0,0,0),$=0,P=!1,R=null,I=null,Y=null,Q=null,oe=null,De.set(0,0,o.canvas.width,o.canvas.height),ze.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:pe,disable:_e,bindFramebuffer:Le,drawBuffers:Ie,useProgram:dt,setBlending:At,setMaterial:st,setFlipSided:Je,setCullFace:Ge,setLineWidth:_t,setPolygonOffset:He,setScissorTest:ot,activeTexture:Pt,bindTexture:Dt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:k,texImage2D:je,texImage3D:Te,updateUBOMapping:$e,uniformBlockBinding:Re,texStorage2D:ye,texStorage3D:Fe,texSubImage2D:Z,texSubImage3D:de,compressedTexSubImage2D:te,compressedTexSubImage3D:Ne,scissor:Pe,viewport:it,reset:ct}}function JM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ft,_=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,g){return M?new OffscreenCanvas(b,g):bl("canvas")}function A(b,g,k){let Z=1;const de=Dt(b);if((de.width>k||de.height>k)&&(Z=k/Math.max(de.width,de.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(Z*de.width),Ne=Math.floor(Z*de.height);x===void 0&&(x=w(te,Ne));const ye=g?w(te,Ne):x;return ye.width=te,ye.height=Ne,ye.getContext("2d").drawImage(b,0,0,te,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+te+"x"+Ne+")."),ye}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),b;return b}function y(b){return b.generateMipmaps}function v(b){o.generateMipmap(b)}function F(b){return b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?o.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(b,g,k,Z,de=!1){if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=g;if(g===o.RED&&(k===o.FLOAT&&(te=o.R32F),k===o.HALF_FLOAT&&(te=o.R16F),k===o.UNSIGNED_BYTE&&(te=o.R8)),g===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(te=o.R8UI),k===o.UNSIGNED_SHORT&&(te=o.R16UI),k===o.UNSIGNED_INT&&(te=o.R32UI),k===o.BYTE&&(te=o.R8I),k===o.SHORT&&(te=o.R16I),k===o.INT&&(te=o.R32I)),g===o.RG&&(k===o.FLOAT&&(te=o.RG32F),k===o.HALF_FLOAT&&(te=o.RG16F),k===o.UNSIGNED_BYTE&&(te=o.RG8)),g===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(te=o.RG8UI),k===o.UNSIGNED_SHORT&&(te=o.RG16UI),k===o.UNSIGNED_INT&&(te=o.RG32UI),k===o.BYTE&&(te=o.RG8I),k===o.SHORT&&(te=o.RG16I),k===o.INT&&(te=o.RG32I)),g===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(te=o.RGB8UI),k===o.UNSIGNED_SHORT&&(te=o.RGB16UI),k===o.UNSIGNED_INT&&(te=o.RGB32UI),k===o.BYTE&&(te=o.RGB8I),k===o.SHORT&&(te=o.RGB16I),k===o.INT&&(te=o.RGB32I)),g===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(te=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(te=o.RGBA16UI),k===o.UNSIGNED_INT&&(te=o.RGBA32UI),k===o.BYTE&&(te=o.RGBA8I),k===o.SHORT&&(te=o.RGBA16I),k===o.INT&&(te=o.RGBA32I)),g===o.RGB&&(k===o.UNSIGNED_INT_5_9_9_9_REV&&(te=o.RGB9_E5),k===o.UNSIGNED_INT_10F_11F_11F_REV&&(te=o.R11F_G11F_B10F)),g===o.RGBA){const Ne=de?Rl:Tt.getTransfer(Z);k===o.FLOAT&&(te=o.RGBA32F),k===o.HALF_FLOAT&&(te=o.RGBA16F),k===o.UNSIGNED_BYTE&&(te=Ne===Nt?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(te=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(te=o.RGB5_A1)}return(te===o.R16F||te===o.R32F||te===o.RG16F||te===o.RG32F||te===o.RGBA16F||te===o.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(b,g){let k;return b?g===null||g===Yr||g===No?k=o.DEPTH24_STENCIL8:g===_i?k=o.DEPTH32F_STENCIL8:g===Lo&&(k=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yr||g===No?k=o.DEPTH_COMPONENT24:g===_i?k=o.DEPTH_COMPONENT32F:g===Lo&&(k=o.DEPTH_COMPONENT16),k}function V(b,g){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==Hn&&b.minFilter!==Dn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function B(b){const g=b.target;g.removeEventListener("dispose",B),$(g),g.isVideoTexture&&_.delete(g)}function z(b){const g=b.target;g.removeEventListener("dispose",z),R(g)}function $(b){const g=r.get(b);if(g.__webglInit===void 0)return;const k=b.source,Z=S.get(k);if(Z){const de=Z[g.__cacheKey];de.usedTimes--,de.usedTimes===0&&P(b),Object.keys(Z).length===0&&S.delete(k)}r.remove(b)}function P(b){const g=r.get(b);o.deleteTexture(g.__webglTexture);const k=b.source,Z=S.get(k);delete Z[g.__cacheKey],f.memory.textures--}function R(b){const g=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let de=0;de<g.__webglFramebuffer[Z].length;de++)o.deleteFramebuffer(g.__webglFramebuffer[Z][de]);else o.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)o.deleteFramebuffer(g.__webglFramebuffer[Z]);else o.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&o.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&o.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&o.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const k=b.textures;for(let Z=0,de=k.length;Z<de;Z++){const te=r.get(k[Z]);te.__webglTexture&&(o.deleteTexture(te.__webglTexture),f.memory.textures--),r.remove(k[Z])}r.remove(b)}let I=0;function Y(){I=0}function Q(){const b=I;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),I+=1,b}function oe(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ce(b,g){const k=r.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(k,b,g);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+g)}function ae(b,g){const k=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ee(k,b,g);return}n.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+g)}function he(b,g){const k=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ee(k,b,g);return}n.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+g)}function O(b,g){const k=r.get(b);if(b.version>0&&k.__version!==b.version){pe(k,b,g);return}n.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+g)}const fe={[cf]:o.REPEAT,[fi]:o.CLAMP_TO_EDGE,[ff]:o.MIRRORED_REPEAT},ne={[Hn]:o.NEAREST,[b_]:o.NEAREST_MIPMAP_NEAREST,[Za]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[_c]:o.LINEAR_MIPMAP_NEAREST,[Xr]:o.LINEAR_MIPMAP_LINEAR},L={[I_]:o.NEVER,[z_]:o.ALWAYS,[U_]:o.LESS,[Hm]:o.LEQUAL,[F_]:o.EQUAL,[B_]:o.GEQUAL,[O_]:o.GREATER,[k_]:o.NOTEQUAL};function ie(b,g){if(g.type===_i&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dn||g.magFilter===_c||g.magFilter===Za||g.magFilter===Xr||g.minFilter===Dn||g.minFilter===_c||g.minFilter===Za||g.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(b,o.TEXTURE_WRAP_S,fe[g.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,fe[g.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,fe[g.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,ne[g.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,L[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Hn||g.minFilter!==Za&&g.minFilter!==Xr||g.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||r.get(g).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");o.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),r.get(g).__currentAnisotropy=g.anisotropy}}}function De(b,g){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",B));const Z=g.source;let de=S.get(Z);de===void 0&&(de={},S.set(Z,de));const te=oe(g);if(te!==b.__cacheKey){de[te]===void 0&&(de[te]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,k=!0),de[te].usedTimes++;const Ne=de[b.__cacheKey];Ne!==void 0&&(de[b.__cacheKey].usedTimes--,Ne.usedTimes===0&&P(g)),b.__cacheKey=te,b.__webglTexture=de[te].texture}return k}function ze(b,g,k){return Math.floor(Math.floor(b/k)/g)}function Ue(b,g,k,Z){const te=b.updateRanges;if(te.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,g.width,g.height,k,Z,g.data);else{te.sort((Te,Pe)=>Te.start-Pe.start);let Ne=0;for(let Te=1;Te<te.length;Te++){const Pe=te[Ne],it=te[Te],$e=Pe.start+Pe.count,Re=ze(it.start,g.width,4),ct=ze(Pe.start,g.width,4);it.start<=$e+1&&Re===ct&&ze(it.start+it.count-1,g.width,4)===Re?Pe.count=Math.max(Pe.count,it.start+it.count-Pe.start):(++Ne,te[Ne]=it)}te.length=Ne+1;const ye=o.getParameter(o.UNPACK_ROW_LENGTH),Fe=o.getParameter(o.UNPACK_SKIP_PIXELS),je=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,g.width);for(let Te=0,Pe=te.length;Te<Pe;Te++){const it=te[Te],$e=Math.floor(it.start/4),Re=Math.ceil(it.count/4),ct=$e%g.width,G=Math.floor($e/g.width),Me=Re,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),n.texSubImage2D(o.TEXTURE_2D,0,ct,G,Me,Ae,k,Z,g.data)}b.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ye),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,je)}}function ee(b,g,k){let Z=o.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=o.TEXTURE_3D);const de=De(b,g),te=g.source;n.bindTexture(Z,b.__webglTexture,o.TEXTURE0+k);const Ne=r.get(te);if(te.version!==Ne.__version||de===!0){n.activeTexture(o.TEXTURE0+k);const ye=Tt.getPrimaries(Tt.workingColorSpace),Fe=g.colorSpace===mr?null:Tt.getPrimaries(g.colorSpace),je=g.colorSpace===mr||ye===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let Te=A(g.image,!1,a.maxTextureSize);Te=Pt(g,Te);const Pe=u.convert(g.format,g.colorSpace),it=u.convert(g.type);let $e=N(g.internalFormat,Pe,it,g.colorSpace,g.isVideoTexture);ie(Z,g);let Re;const ct=g.mipmaps,G=g.isVideoTexture!==!0,Me=Ne.__version===void 0||de===!0,Ae=te.dataReady,Oe=V(g,Te);if(g.isDepthTexture)$e=C(g.format===Uo,g.type),Me&&(G?n.texStorage2D(o.TEXTURE_2D,1,$e,Te.width,Te.height):n.texImage2D(o.TEXTURE_2D,0,$e,Te.width,Te.height,0,Pe,it,null));else if(g.isDataTexture)if(ct.length>0){G&&Me&&n.texStorage2D(o.TEXTURE_2D,Oe,$e,ct[0].width,ct[0].height);for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,it,Re.data):n.texImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Pe,it,Re.data);g.generateMipmaps=!1}else G?(Me&&n.texStorage2D(o.TEXTURE_2D,Oe,$e,Te.width,Te.height),Ae&&Ue(g,Te,Pe,it)):n.texImage2D(o.TEXTURE_2D,0,$e,Te.width,Te.height,0,Pe,it,Te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&Me&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,$e,ct[0].width,ct[0].height,Te.depth);for(let Se=0,me=ct.length;Se<me;Se++)if(Re=ct[Se],g.format!==Zn)if(Pe!==null)if(G){if(Ae)if(g.layerUpdates.size>0){const Ye=im(Re.width,Re.height,g.format,g.type);for(const ut of g.layerUpdates){const Ct=Re.data.subarray(ut*Ye/Re.data.BYTES_PER_ELEMENT,(ut+1)*Ye/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,ut,Re.width,Re.height,1,Pe,Ct)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,Te.depth,Pe,Re.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,$e,Re.width,Re.height,Te.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ae&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Re.width,Re.height,Te.depth,Pe,it,Re.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Se,$e,Re.width,Re.height,Te.depth,0,Pe,it,Re.data)}else{G&&Me&&n.texStorage2D(o.TEXTURE_2D,Oe,$e,ct[0].width,ct[0].height);for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],g.format!==Zn?Pe!==null?G?Ae&&n.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Re.width,Re.height,Pe,it,Re.data):n.texImage2D(o.TEXTURE_2D,Se,$e,Re.width,Re.height,0,Pe,it,Re.data)}else if(g.isDataArrayTexture)if(G){if(Me&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,$e,Te.width,Te.height,Te.depth),Ae)if(g.layerUpdates.size>0){const Se=im(Te.width,Te.height,g.format,g.type);for(const me of g.layerUpdates){const Ye=Te.data.subarray(me*Se/Te.data.BYTES_PER_ELEMENT,(me+1)*Se/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,Te.width,Te.height,1,Pe,it,Ye)}g.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Pe,it,Te.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,$e,Te.width,Te.height,Te.depth,0,Pe,it,Te.data);else if(g.isData3DTexture)G?(Me&&n.texStorage3D(o.TEXTURE_3D,Oe,$e,Te.width,Te.height,Te.depth),Ae&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Pe,it,Te.data)):n.texImage3D(o.TEXTURE_3D,0,$e,Te.width,Te.height,Te.depth,0,Pe,it,Te.data);else if(g.isFramebufferTexture){if(Me)if(G)n.texStorage2D(o.TEXTURE_2D,Oe,$e,Te.width,Te.height);else{let Se=Te.width,me=Te.height;for(let Ye=0;Ye<Oe;Ye++)n.texImage2D(o.TEXTURE_2D,Ye,$e,Se,me,0,Pe,it,null),Se>>=1,me>>=1}}else if(ct.length>0){if(G&&Me){const Se=Dt(ct[0]);n.texStorage2D(o.TEXTURE_2D,Oe,$e,Se.width,Se.height)}for(let Se=0,me=ct.length;Se<me;Se++)Re=ct[Se],G?Ae&&n.texSubImage2D(o.TEXTURE_2D,Se,0,0,Pe,it,Re):n.texImage2D(o.TEXTURE_2D,Se,$e,Pe,it,Re);g.generateMipmaps=!1}else if(G){if(Me){const Se=Dt(Te);n.texStorage2D(o.TEXTURE_2D,Oe,$e,Se.width,Se.height)}Ae&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Pe,it,Te)}else n.texImage2D(o.TEXTURE_2D,0,$e,Pe,it,Te);y(g)&&v(Z),Ne.__version=te.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function pe(b,g,k){if(g.image.length!==6)return;const Z=De(b,g),de=g.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+k);const te=r.get(de);if(de.version!==te.__version||Z===!0){n.activeTexture(o.TEXTURE0+k);const Ne=Tt.getPrimaries(Tt.workingColorSpace),ye=g.colorSpace===mr?null:Tt.getPrimaries(g.colorSpace),Fe=g.colorSpace===mr||Ne===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,g.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,g.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const je=g.isCompressedTexture||g.image[0].isCompressedTexture,Te=g.image[0]&&g.image[0].isDataTexture,Pe=[];for(let me=0;me<6;me++)!je&&!Te?Pe[me]=A(g.image[me],!0,a.maxCubemapSize):Pe[me]=Te?g.image[me].image:g.image[me],Pe[me]=Pt(g,Pe[me]);const it=Pe[0],$e=u.convert(g.format,g.colorSpace),Re=u.convert(g.type),ct=N(g.internalFormat,$e,Re,g.colorSpace),G=g.isVideoTexture!==!0,Me=te.__version===void 0||Z===!0,Ae=de.dataReady;let Oe=V(g,it);ie(o.TEXTURE_CUBE_MAP,g);let Se;if(je){G&&Me&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ct,it.width,it.height);for(let me=0;me<6;me++){Se=Pe[me].mipmaps;for(let Ye=0;Ye<Se.length;Ye++){const ut=Se[Ye];g.format!==Zn?$e!==null?G?Ae&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,ut.width,ut.height,$e,ut.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,ct,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,0,0,ut.width,ut.height,$e,Re,ut.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye,ct,ut.width,ut.height,0,$e,Re,ut.data)}}}else{if(Se=g.mipmaps,G&&Me){Se.length>0&&Oe++;const me=Dt(Pe[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ct,me.width,me.height)}for(let me=0;me<6;me++)if(Te){G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe[me].width,Pe[me].height,$e,Re,Pe[me].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Pe[me].width,Pe[me].height,0,$e,Re,Pe[me].data);for(let Ye=0;Ye<Se.length;Ye++){const Ct=Se[Ye].image[me].image;G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,Ct.width,Ct.height,$e,Re,Ct.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,ct,Ct.width,Ct.height,0,$e,Re,Ct.data)}}else{G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,$e,Re,Pe[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,$e,Re,Pe[me]);for(let Ye=0;Ye<Se.length;Ye++){const ut=Se[Ye];G?Ae&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,0,0,$e,Re,ut.image[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ye+1,ct,$e,Re,ut.image[me])}}}y(g)&&v(o.TEXTURE_CUBE_MAP),te.__version=de.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function _e(b,g,k,Z,de,te){const Ne=u.convert(k.format,k.colorSpace),ye=u.convert(k.type),Fe=N(k.internalFormat,Ne,ye,k.colorSpace),je=r.get(g),Te=r.get(k);if(Te.__renderTarget=g,!je.__hasExternalTextures){const Pe=Math.max(1,g.width>>te),it=Math.max(1,g.height>>te);de===o.TEXTURE_3D||de===o.TEXTURE_2D_ARRAY?n.texImage3D(de,te,Fe,Pe,it,g.depth,0,Ne,ye,null):n.texImage2D(de,te,Fe,Pe,it,0,Ne,ye,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),He(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,de,Te.__webglTexture,0,_t(g)):(de===o.TEXTURE_2D||de>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,de,Te.__webglTexture,te),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(b,g,k){if(o.bindRenderbuffer(o.RENDERBUFFER,b),g.depthBuffer){const Z=g.depthTexture,de=Z&&Z.isDepthTexture?Z.type:null,te=C(g.stencilBuffer,de),Ne=g.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ye=_t(g);He(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ye,te,g.width,g.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,ye,te,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,te,g.width,g.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ne,o.RENDERBUFFER,b)}else{const Z=g.textures;for(let de=0;de<Z.length;de++){const te=Z[de],Ne=u.convert(te.format,te.colorSpace),ye=u.convert(te.type),Fe=N(te.internalFormat,Ne,ye,te.colorSpace),je=_t(g);k&&He(g)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,Fe,g.width,g.height):He(g)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,Fe,g.width,g.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,g.width,g.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ie(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=r.get(g.depthTexture);Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ce(g.depthTexture,0);const de=Z.__webglTexture,te=_t(g);if(g.depthTexture.format===Io)He(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0,te):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,de,0);else if(g.depthTexture.format===Uo)He(g)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0,te):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function dt(b){const g=r.get(b),k=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const de=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",de)};Z.addEventListener("dispose",de),g.__depthDisposeCallback=de}g.__boundDepthTexture=Z}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=b.texture.mipmaps;Z&&Z.length>0?Ie(g.__webglFramebuffer[0],b):Ie(g.__webglFramebuffer,b)}else if(k){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=o.createRenderbuffer(),Le(g.__webglDepthbuffer[Z],b,!1);else{const de=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,te),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,te)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=o.createRenderbuffer(),Le(g.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,te),o.framebufferRenderbuffer(o.FRAMEBUFFER,de,o.RENDERBUFFER,te)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(b,g,k){const Z=r.get(b);g!==void 0&&_e(Z.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&dt(b)}function U(b){const g=b.texture,k=r.get(b),Z=r.get(g);b.addEventListener("dispose",z);const de=b.textures,te=b.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=g.version,f.memory.textures++),te){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[ye]=[];for(let Fe=0;Fe<g.mipmaps.length;Fe++)k.__webglFramebuffer[ye][Fe]=o.createFramebuffer()}else k.__webglFramebuffer[ye]=o.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let ye=0;ye<g.mipmaps.length;ye++)k.__webglFramebuffer[ye]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(Ne)for(let ye=0,Fe=de.length;ye<Fe;ye++){const je=r.get(de[ye]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),f.memory.textures++)}if(b.samples>0&&He(b)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<de.length;ye++){const Fe=de[ye];k.__webglColorRenderbuffer[ye]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);const je=u.convert(Fe.format,Fe.colorSpace),Te=u.convert(Fe.type),Pe=N(Fe.internalFormat,je,Te,Fe.colorSpace,b.isXRRenderTarget===!0),it=_t(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,it,Pe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(te){n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(o.TEXTURE_CUBE_MAP,g);for(let ye=0;ye<6;ye++)if(g.mipmaps&&g.mipmaps.length>0)for(let Fe=0;Fe<g.mipmaps.length;Fe++)_e(k.__webglFramebuffer[ye][Fe],b,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Fe);else _e(k.__webglFramebuffer[ye],b,g,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);y(g)&&v(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let ye=0,Fe=de.length;ye<Fe;ye++){const je=de[ye],Te=r.get(je);let Pe=o.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Pe=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Pe,Te.__webglTexture),ie(Pe,je),_e(k.__webglFramebuffer,b,je,o.COLOR_ATTACHMENT0+ye,Pe,0),y(je)&&v(Pe)}n.unbindTexture()}else{let ye=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ye=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ye,Z.__webglTexture),ie(ye,g),g.mipmaps&&g.mipmaps.length>0)for(let Fe=0;Fe<g.mipmaps.length;Fe++)_e(k.__webglFramebuffer[Fe],b,g,o.COLOR_ATTACHMENT0,ye,Fe);else _e(k.__webglFramebuffer,b,g,o.COLOR_ATTACHMENT0,ye,0);y(g)&&v(ye),n.unbindTexture()}b.depthBuffer&&dt(b)}function At(b){const g=b.textures;for(let k=0,Z=g.length;k<Z;k++){const de=g[k];if(y(de)){const te=F(b),Ne=r.get(de).__webglTexture;n.bindTexture(te,Ne),v(te),n.unbindTexture()}}}const st=[],Je=[];function Ge(b){if(b.samples>0){if(He(b)===!1){const g=b.textures,k=b.width,Z=b.height;let de=o.COLOR_BUFFER_BIT;const te=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=r.get(b),ye=g.length>1;if(ye)for(let je=0;je<g.length;je++)n.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Fe=b.texture.mipmaps;Fe&&Fe.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let je=0;je<g.length;je++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(de|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(de|=o.STENCIL_BUFFER_BIT)),ye){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]);const Te=r.get(g[je]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,k,Z,0,0,k,Z,de,o.NEAREST),p===!0&&(st.length=0,Je.length=0,st.push(o.COLOR_ATTACHMENT0+je),b.depthBuffer&&b.resolveDepthBuffer===!1&&(st.push(te),Je.push(te),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Je)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ye)for(let je=0;je<g.length;je++){n.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]);const Te=r.get(g[je]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+je,o.TEXTURE_2D,Te,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const g=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[g])}}}function _t(b){return Math.min(a.maxSamples,b.samples)}function He(b){const g=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(b){const g=f.render.frame;_.get(b)!==g&&(_.set(b,g),b.update())}function Pt(b,g){const k=b.colorSpace,Z=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Bs&&k!==mr&&(Tt.getTransfer(k)===Nt?(Z!==Zn||de!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),g}function Dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=he,this.setTextureCube=O,this.rebindTextures=Xt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=He}function eE(o,e){function n(r,a=mr){let u;const f=Tt.getTransfer(a);if(r===Bi)return o.UNSIGNED_BYTE;if(r===Xf)return o.UNSIGNED_SHORT_4_4_4_4;if(r===jf)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Fm)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Nm)return o.BYTE;if(r===Im)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===Wf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===_i)return o.FLOAT;if(r===Hs)return o.HALF_FLOAT;if(r===Om)return o.ALPHA;if(r===km)return o.RGB;if(r===Zn)return o.RGBA;if(r===Io)return o.DEPTH_COMPONENT;if(r===Uo)return o.DEPTH_STENCIL;if(r===Bm)return o.RED;if(r===Yf)return o.RED_INTEGER;if(r===zm)return o.RG;if(r===qf)return o.RG_INTEGER;if(r===$f)return o.RGBA_INTEGER;if(r===Ml||r===El||r===Tl||r===wl)if(f===Nt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ml)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ml)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===df||r===hf||r===pf||r===mf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===df)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===vf||r===_f)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===gf||r===vf)return f===Nt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===_f)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===bf||r===Pf||r===Df||r===Lf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===xf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Af)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Df)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lf)return f===Nt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nf||r===If||r===Uf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Nf)return f===Nt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ff||r===Of||r===kf||r===Bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ff)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new eg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new jr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends Vs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,x=null,S=null,M=null,w=null;const A=typeof XRWebGLBinding<"u",y=new iE,v={},F=n.getContextAttributes();let N=null,C=null;const V=[],B=[],z=new ft;let $=null;const P=new ui;P.viewport=new Wt;const R=new ui;R.viewport=new Wt;const I=[P,R],Y=new T0;let Q=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=V[ee];return pe===void 0&&(pe=new Hc,V[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=V[ee];return pe===void 0&&(pe=new Hc,V[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=V[ee];return pe===void 0&&(pe=new Hc,V[ee]=pe),pe.getHandSpace()};function ce(ee){const pe=B.indexOf(ee.inputSource);if(pe===-1)return;const _e=V[pe];_e!==void 0&&(_e.update(ee.inputSource,ee.frame,m||f),_e.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",he);for(let ee=0;ee<V.length;ee++){const pe=B[ee];pe!==null&&(B[ee]=null,V[ee].disconnect(pe))}Q=null,oe=null,y.reset();for(const ee in v)delete v[ee];e.setRenderTarget(N),M=null,S=null,x=null,a=null,C=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio($),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(a,n)),x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",he),F.xrCompatible!==!0&&await n.makeXRCompatible(),$=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Ie=null;F.depth&&(Ie=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=F.stencil?Uo:Io,Le=F.stencil?No:Yr);const dt={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:u};x=this.getBinding(),S=x.createProjectionLayer(dt),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),C=new xr(S.textureWidth,S.textureHeight,{format:Zn,type:Bi,depthTexture:new Jm(S.textureWidth,S.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _e={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new xr(M.framebufferWidth,M.framebufferHeight,{format:Zn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function he(ee){for(let pe=0;pe<ee.removed.length;pe++){const _e=ee.removed[pe],Le=B.indexOf(_e);Le>=0&&(B[Le]=null,V[Le].disconnect(_e))}for(let pe=0;pe<ee.added.length;pe++){const _e=ee.added[pe];let Le=B.indexOf(_e);if(Le===-1){for(let dt=0;dt<V.length;dt++)if(dt>=B.length){B.push(_e),Le=dt;break}else if(B[dt]===null){B[dt]=_e,Le=dt;break}if(Le===-1)break}const Ie=V[Le];Ie&&Ie.connect(_e)}}const O=new se,fe=new se;function ne(ee,pe,_e){O.setFromMatrixPosition(pe.matrixWorld),fe.setFromMatrixPosition(_e.matrixWorld);const Le=O.distanceTo(fe),Ie=pe.projectionMatrix.elements,dt=_e.projectionMatrix.elements,Xt=Ie[14]/(Ie[10]-1),U=Ie[14]/(Ie[10]+1),At=(Ie[9]+1)/Ie[5],st=(Ie[9]-1)/Ie[5],Je=(Ie[8]-1)/Ie[0],Ge=(dt[8]+1)/dt[0],_t=Xt*Je,He=Xt*Ge,ot=Le/(-Je+Ge),Pt=ot*-Je;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pt),ee.translateZ(ot),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ie[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Dt=Xt+ot,b=U+ot,g=_t-Pt,k=He+(Le-Pt),Z=At*U/b*Dt,de=st*U/b*Dt;ee.projectionMatrix.makePerspective(g,k,Z,de,Dt,b),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function L(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let pe=ee.near,_e=ee.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Y.near=R.near=P.near=pe,Y.far=R.far=P.far=_e,(Q!==Y.near||oe!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,oe=Y.far),Y.layers.mask=ee.layers.mask|6,P.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const Le=ee.parent,Ie=Y.cameras;L(Y,Le);for(let dt=0;dt<Ie.length;dt++)L(Ie[dt],Le);Ie.length===2?ne(Y,P,R):Y.projectionMatrix.copy(P.projectionMatrix),ie(ee,Y,Le)};function ie(ee,pe,_e){_e===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(_e.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=zf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ee){p=ee,S!==null&&(S.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ee){return v[ee]};let De=null;function ze(ee,pe){if(_=pe.getViewerPose(m||f),w=pe,_!==null){const _e=_.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Le=!1;_e.length!==Y.cameras.length&&(Y.cameras.length=0,Le=!0);for(let U=0;U<_e.length;U++){const At=_e[U];let st=null;if(M!==null)st=M.getViewport(At);else{const Ge=x.getViewSubImage(S,At);st=Ge.viewport,U===0&&(e.setRenderTargetTextures(C,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(C))}let Je=I[U];Je===void 0&&(Je=new ui,Je.layers.enable(U),Je.viewport=new Wt,I[U]=Je),Je.matrix.fromArray(At.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(At.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(st.x,st.y,st.width,st.height),U===0&&(Y.matrix.copy(Je.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Le===!0&&Y.cameras.push(Je)}const Ie=a.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const U=x.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&y.init(U,a.renderState)}if(Ie&&Ie.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let U=0;U<_e.length;U++){const At=_e[U].camera;if(At){let st=v[At];st||(st=new eg,v[At]=st);const Je=x.getCameraImage(At);st.sourceTexture=Je}}}}for(let _e=0;_e<V.length;_e++){const Le=B[_e],Ie=V[_e];Le!==null&&Ie!==void 0&&Ie.update(Le,pe,m||f)}De&&De(ee,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),w=null}const Ue=new tg;Ue.setAnimationLoop(ze),this.setAnimationLoop=function(ee){De=ee},this.dispose=function(){}}}const zr=new zi,sE=new Kt;function oE(o,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Km(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,F,N,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),x(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,C)):v.isMeshMatcapMaterial?(u(y,v),w(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),A(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,F,N):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Ln&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Ln&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=e.get(v),N=F.envMap,C=F.envMapRotation;N&&(y.envMap.value=N,zr.copy(C),zr.x*=-1,zr.y*=-1,zr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(zr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,F,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=N*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function x(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ln&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const F=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function aE(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,N){const C=N.program;r.uniformBlockBinding(F,C)}function m(F,N){let C=a[F.id];C===void 0&&(w(F),C=_(F),a[F.id]=C,F.addEventListener("dispose",y));const V=N.program;r.updateUBOMapping(F,V);const B=e.render.frame;u[F.id]!==B&&(S(F),u[F.id]=B)}function _(F){const N=x();F.__bindingPointIndex=N;const C=o.createBuffer(),V=F.__size,B=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,V,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function x(){for(let F=0;F<d;F++)if(f.indexOf(F)===-1)return f.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const N=a[F.id],C=F.uniforms,V=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let B=0,z=C.length;B<z;B++){const $=Array.isArray(C[B])?C[B]:[C[B]];for(let P=0,R=$.length;P<R;P++){const I=$[P];if(M(I,B,P,V)===!0){const Y=I.__offset,Q=Array.isArray(I.value)?I.value:[I.value];let oe=0;for(let ce=0;ce<Q.length;ce++){const ae=Q[ce],he=A(ae);typeof ae=="number"||typeof ae=="boolean"?(I.__data[0]=ae,o.bufferSubData(o.UNIFORM_BUFFER,Y+oe,I.__data)):ae.isMatrix3?(I.__data[0]=ae.elements[0],I.__data[1]=ae.elements[1],I.__data[2]=ae.elements[2],I.__data[3]=0,I.__data[4]=ae.elements[3],I.__data[5]=ae.elements[4],I.__data[6]=ae.elements[5],I.__data[7]=0,I.__data[8]=ae.elements[6],I.__data[9]=ae.elements[7],I.__data[10]=ae.elements[8],I.__data[11]=0):(ae.toArray(I.__data,oe),oe+=he.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(F,N,C,V){const B=F.value,z=N+"_"+C;if(V[z]===void 0)return typeof B=="number"||typeof B=="boolean"?V[z]=B:V[z]=B.clone(),!0;{const $=V[z];if(typeof B=="number"||typeof B=="boolean"){if($!==B)return V[z]=B,!0}else if($.equals(B)===!1)return $.copy(B),!0}return!1}function w(F){const N=F.uniforms;let C=0;const V=16;for(let z=0,$=N.length;z<$;z++){const P=Array.isArray(N[z])?N[z]:[N[z]];for(let R=0,I=P.length;R<I;R++){const Y=P[R],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let oe=0,ce=Q.length;oe<ce;oe++){const ae=Q[oe],he=A(ae),O=C%V,fe=O%he.boundary,ne=O+fe;C+=fe,ne!==0&&V-ne<he.storage&&(C+=V-ne),Y.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=he.storage}}}const B=C%V;return B>0&&(C+=V-B),F.__size=C,F.__cache={},this}function A(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function y(F){const N=F.target;N.removeEventListener("dispose",y);const C=f.indexOf(N.__bindingPointIndex);f.splice(C,1),o.deleteBuffer(a[N.id]),delete a[N.id],delete u[N.id]}function v(){for(const F in a)o.deleteBuffer(a[F]);f=[],a={},u={}}return{bind:p,update:m,dispose:v}}class lE{constructor(e={}){const{canvas:n=V_(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const w=new Uint32Array(4),A=new Int32Array(4);let y=null,v=null;const F=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let V=!1;this._outputColorSpace=Kn;let B=0,z=0,$=null,P=-1,R=null;const I=new Wt,Y=new Wt;let Q=null;const oe=new wt(0);let ce=0,ae=n.width,he=n.height,O=1,fe=null,ne=null;const L=new Wt(0,0,ae,he),ie=new Wt(0,0,ae,he);let De=!1;const ze=new Qm;let Ue=!1,ee=!1;const pe=new Kt,_e=new se,Le=new Wt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Xt(){return $===null?O:1}let U=r;function At(T,q){return n.getContext(T,q)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),U===null){const q="webgl2";if(U=At(q,T),U===null)throw At(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let st,Je,Ge,_t,He,ot,Pt,Dt,b,g,k,Z,de,te,Ne,ye,Fe,je,Te,Pe,it,$e,Re,ct;function G(){st=new _y(U),st.init(),$e=new eE(U,st),Je=new fy(U,st,e,$e),Ge=new QM(U,st),Je.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),_t=new yy(U),He=new BM,ot=new JM(U,st,Ge,He,Je,$e,_t),Pt=new hy(C),Dt=new vy(C),b=new R0(U),Re=new uy(U,b),g=new xy(U,b,_t,Re),k=new Ey(U,g,b,_t),Te=new My(U,Je,ot),ye=new dy(He),Z=new kM(C,Pt,Dt,st,Je,Re,ye),de=new oE(C,He),te=new HM,Ne=new YM(st),je=new ly(C,Pt,Dt,Ge,k,M,p),Fe=new KM(C,k,Je),ct=new aE(U,_t,Je,Ge),Pe=new cy(U,st,_t),it=new Sy(U,st,_t),_t.programs=Z.programs,C.capabilities=Je,C.extensions=st,C.properties=He,C.renderLists=te,C.shadowMap=Fe,C.state=Ge,C.info=_t}G();const Me=new rE(C,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(ae,he,!1))},this.getSize=function(T){return T.set(ae,he)},this.setSize=function(T,q,le=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=T,he=q,n.width=Math.floor(T*O),n.height=Math.floor(q*O),le===!0&&(n.style.width=T+"px",n.style.height=q+"px"),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(ae*O,he*O).floor()},this.setDrawingBufferSize=function(T,q,le){ae=T,he=q,O=le,n.width=Math.floor(T*le),n.height=Math.floor(q*le),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,q,le,ue){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,q,le,ue),Ge.viewport(I.copy(L).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,q,le,ue){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,q,le,ue),Ge.scissor(Y.copy(ie).multiplyScalar(O).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){Ge.setScissorTest(De=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,le=!0){let ue=0;if(T){let j=!1;if($!==null){const Ee=$.texture.format;j=Ee===$f||Ee===qf||Ee===Yf}if(j){const Ee=$.texture.type,Ce=Ee===Bi||Ee===Yr||Ee===Lo||Ee===No||Ee===Xf||Ee===jf,We=je.getClearColor(),ke=je.getClearAlpha(),nt=We.r,rt=We.g,Ze=We.b;Ce?(w[0]=nt,w[1]=rt,w[2]=Ze,w[3]=ke,U.clearBufferuiv(U.COLOR,0,w)):(A[0]=nt,A[1]=rt,A[2]=Ze,A[3]=ke,U.clearBufferiv(U.COLOR,0,A))}else ue|=U.COLOR_BUFFER_BIT}q&&(ue|=U.DEPTH_BUFFER_BIT),le&&(ue|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),je.dispose(),te.dispose(),Ne.dispose(),He.dispose(),Pt.dispose(),Dt.dispose(),k.dispose(),Re.dispose(),ct.dispose(),Z.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",un),Me.removeEventListener("sessionend",qr),In.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const T=_t.autoReset,q=Fe.enabled,le=Fe.autoUpdate,ue=Fe.needsUpdate,j=Fe.type;G(),_t.autoReset=T,Fe.enabled=q,Fe.autoUpdate=le,Fe.needsUpdate=ue,Fe.type=j}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const q=T.target;q.removeEventListener("dispose",me),Ye(q)}function Ye(T){ut(T),He.remove(T)}function ut(T){const q=He.get(T).programs;q!==void 0&&(q.forEach(function(le){Z.releaseProgram(le)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,le,ue,j,Ee){q===null&&(q=Ie);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,We=yi(T,q,le,ue,j);Ge.setMaterial(ue,Ce);let ke=le.index,nt=1;if(ue.wireframe===!0){if(ke=g.getWireframeAttribute(le),ke===void 0)return;nt=2}const rt=le.drawRange,Ze=le.attributes.position;let at=rt.start*nt,Rt=(rt.start+rt.count)*nt;Ee!==null&&(at=Math.max(at,Ee.start*nt),Rt=Math.min(Rt,(Ee.start+Ee.count)*nt)),ke!==null?(at=Math.max(at,0),Rt=Math.min(Rt,ke.count)):Ze!=null&&(at=Math.max(at,0),Rt=Math.min(Rt,Ze.count));const yt=Rt-at;if(yt<0||yt===1/0)return;Re.setup(j,ue,We,le,ke);let It,bt=Pe;if(ke!==null&&(It=b.get(ke),bt=it,bt.setIndex(It)),j.isMesh)ue.wireframe===!0?(Ge.setLineWidth(ue.wireframeLinewidth*Xt()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(j.isLine){let Qe=ue.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*Xt()),j.isLineSegments?bt.setMode(U.LINES):j.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else j.isPoints?bt.setMode(U.POINTS):j.isSprite&&bt.setMode(U.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))bt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Lt=j._multiDrawCounts,gt=j._multiDrawCount,Zt=ke?b.get(ke).bytesPerElement:1,Jn=He.get(ue).currentProgram.getUniforms();for(let _n=0;_n<gt;_n++)Jn.setValue(U,"_gl_DrawID",_n),bt.render(Qe[_n]/Zt,Lt[_n])}else if(j.isInstancedMesh)bt.renderInstances(at,yt,j.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,Qe);bt.renderInstances(at,yt,Lt)}else bt.render(at,yt)};function Ct(T,q,le){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Ln,T.needsUpdate=!0,Kr(T,q,le),T.side=_r,T.needsUpdate=!0,Kr(T,q,le),T.side=Fi):Kr(T,q,le)}this.compile=function(T,q,le=null){le===null&&(le=T),v=Ne.get(le),v.init(q),N.push(v),le.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),T!==le&&T.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const ue=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Ce=0;Ce<Ee.length;Ce++){const We=Ee[Ce];Ct(We,le,j),ue.add(We)}else Ct(Ee,le,j),ue.add(Ee)}),v=N.pop(),ue},this.compileAsync=function(T,q,le=null){const ue=this.compile(T,q,le);return new Promise(j=>{function Ee(){if(ue.forEach(function(Ce){He.get(Ce).currentProgram.isReady()&&ue.delete(Ce)}),ue.size===0){j(T);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let St=null;function Vn(T){St&&St(T)}function un(){In.stop()}function qr(){In.start()}const In=new tg;In.setAnimationLoop(Vn),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(T){St=T,Me.setAnimationLoop(T),T===null?In.stop():In.start()},Me.addEventListener("sessionstart",un),Me.addEventListener("sessionend",qr),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,q,$),v=Ne.get(T,N.length),v.init(q),N.push(v),pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ze.setFromProjectionMatrix(pe,xi,q.reversedDepth),ee=this.localClippingEnabled,Ue=ye.init(this.clippingPlanes,ee),y=te.get(T,F.length),y.init(),F.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Ws(Ee,q,-1/0,C.sortObjects)}Ws(T,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(fe,ne),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&je.addToRenderList(y,T),this.info.render.frame++,Ue===!0&&ye.beginShadows();const le=v.state.shadowsArray;Fe.render(le,T,q),Ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,j=y.transmissive;if(v.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(j.length>0)for(let Ce=0,We=Ee.length;Ce<We;Ce++){const ke=Ee[Ce];Sr(ue,j,T,ke)}dt&&je.render(T);for(let Ce=0,We=Ee.length;Ce<We;Ce++){const ke=Ee[Ce];Gi(y,T,ke,ke.viewport)}}else j.length>0&&Sr(ue,j,T,q),dt&&je.render(T),Gi(y,T,q);$!==null&&z===0&&(ot.updateMultisampleRenderTarget($),ot.updateRenderTargetMipmap($)),T.isScene===!0&&T.onAfterRender(C,T,q),Re.resetDefaultState(),P=-1,R=null,N.pop(),N.length>0?(v=N[N.length-1],Ue===!0&&ye.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ws(T,q,le,ue){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)le=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){ue&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const Ce=k.update(T),We=T.material;We.visible&&y.push(T,Ce,We,le,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const Ce=k.update(T),We=T.material;if(ue&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Le.copy(Ce.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(We)){const ke=Ce.groups;for(let nt=0,rt=ke.length;nt<rt;nt++){const Ze=ke[nt],at=We[Ze.materialIndex];at&&at.visible&&y.push(T,Ce,at,le,Le.z,Ze)}}else We.visible&&y.push(T,Ce,We,le,Le.z,null)}}const Ee=T.children;for(let Ce=0,We=Ee.length;Ce<We;Ce++)Ws(Ee[Ce],q,le,ue)}function Gi(T,q,le,ue){const j=T.opaque,Ee=T.transmissive,Ce=T.transparent;v.setupLightsView(le),Ue===!0&&ye.setGlobalState(C.clippingPlanes,le),ue&&Ge.viewport(I.copy(ue)),j.length>0&&Si(j,q,le),Ee.length>0&&Si(Ee,q,le),Ce.length>0&&Si(Ce,q,le),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Sr(T,q,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ue.id]===void 0&&(v.state.transmissionRenderTarget[ue.id]=new xr(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Hs:Bi,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ee=v.state.transmissionRenderTarget[ue.id],Ce=ue.viewport||I;Ee.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const We=C.getRenderTarget(),ke=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(oe),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),dt&&je.render(le);const rt=C.toneMapping;C.toneMapping=vr;const Ze=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),v.setupLightsView(ue),Ue===!0&&ye.setGlobalState(C.clippingPlanes,ue),Si(T,le,ue),ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Rt=0,yt=q.length;Rt<yt;Rt++){const It=q[Rt],bt=It.object,Qe=It.geometry,Lt=It.material,gt=It.group;if(Lt.side===Fi&&bt.layers.test(ue.layers)){const Zt=Lt.side;Lt.side=Ln,Lt.needsUpdate=!0,$r(bt,le,ue,Qe,Lt,gt),Lt.side=Zt,Lt.needsUpdate=!0,at=!0}}at===!0&&(ot.updateMultisampleRenderTarget(Ee),ot.updateRenderTargetMipmap(Ee))}C.setRenderTarget(We,ke,nt),C.setClearColor(oe,ce),Ze!==void 0&&(ue.viewport=Ze),C.toneMapping=rt}function Si(T,q,le){const ue=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Ee=T.length;j<Ee;j++){const Ce=T[j],We=Ce.object,ke=Ce.geometry,nt=Ce.group;let rt=Ce.material;rt.allowOverride===!0&&ue!==null&&(rt=ue),We.layers.test(le.layers)&&$r(We,q,le,ke,rt,nt)}}function $r(T,q,le,ue,j,Ee){T.onBeforeRender(C,q,le,ue,j,Ee),T.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(C,q,le,ue,T,Ee),j.transparent===!0&&j.side===Fi&&j.forceSinglePass===!1?(j.side=Ln,j.needsUpdate=!0,C.renderBufferDirect(le,q,ue,j,T,Ee),j.side=_r,j.needsUpdate=!0,C.renderBufferDirect(le,q,ue,j,T,Ee),j.side=Fi):C.renderBufferDirect(le,q,ue,j,T,Ee),T.onAfterRender(C,q,le,ue,j,Ee)}function Kr(T,q,le){q.isScene!==!0&&(q=Ie);const ue=He.get(T),j=v.state.lights,Ee=v.state.shadowsArray,Ce=j.state.version,We=Z.getParameters(T,j.state,Ee,q,le),ke=Z.getProgramCacheKey(We);let nt=ue.programs;ue.environment=T.isMeshStandardMaterial?q.environment:null,ue.fog=q.fog,ue.envMap=(T.isMeshStandardMaterial?Dt:Pt).get(T.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",me),nt=new Map,ue.programs=nt);let rt=nt.get(ke);if(rt!==void 0){if(ue.currentProgram===rt&&ue.lightsStateVersion===Ce)return Go(T,We),rt}else We.uniforms=Z.getUniforms(T),T.onBeforeCompile(We,C),rt=Z.acquireProgram(We,ke),nt.set(ke,rt),ue.uniforms=We.uniforms;const Ze=ue.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=ye.uniform),Go(T,We),ue.needsLights=Xo(T),ue.lightsStateVersion=Ce,ue.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),ue.currentProgram=rt,ue.uniformsList=null,rt}function Vo(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Go(T,q){const le=He.get(T);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function yi(T,q,le,ue,j){q.isScene!==!0&&(q=Ie),ot.resetTextureUnits();const Ee=q.fog,Ce=ue.isMeshStandardMaterial?q.environment:null,We=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Bs,ke=(ue.isMeshStandardMaterial?Dt:Pt).get(ue.envMap||Ce),nt=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,rt=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!le.morphAttributes.position,at=!!le.morphAttributes.normal,Rt=!!le.morphAttributes.color;let yt=vr;ue.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(yt=C.toneMapping);const It=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,bt=It!==void 0?It.length:0,Qe=He.get(ue),Lt=v.state.lights;if(Ue===!0&&(ee===!0||T!==R)){const jt=T===R&&ue.id===P;ye.setState(ue,T,jt)}let gt=!1;ue.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Lt.state.version||Qe.outputColorSpace!==We||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==ke||ue.fog===!0&&Qe.fog!==Ee||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ye.numPlanes||Qe.numIntersection!==ye.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==rt||Qe.morphTargets!==Ze||Qe.morphNormals!==at||Qe.morphColors!==Rt||Qe.toneMapping!==yt||Qe.morphTargetsCount!==bt)&&(gt=!0):(gt=!0,Qe.__version=ue.version);let Zt=Qe.currentProgram;gt===!0&&(Zt=Kr(ue,q,j));let Jn=!1,_n=!1,yr=!1;const Ut=Zt.getUniforms(),xn=Qe.uniforms;if(Ge.useProgram(Zt.program)&&(Jn=!0,_n=!0,yr=!0),ue.id!==P&&(P=ue.id,_n=!0),Jn||R!==T){Ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ut.setValue(U,"projectionMatrix",T.projectionMatrix),Ut.setValue(U,"viewMatrix",T.matrixWorldInverse);const fn=Ut.map.cameraPosition;fn!==void 0&&fn.setValue(U,_e.setFromMatrixPosition(T.matrixWorld)),Je.logarithmicDepthBuffer&&Ut.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ut.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,_n=!0,yr=!0)}if(j.isSkinnedMesh){Ut.setOptional(U,j,"bindMatrix"),Ut.setOptional(U,j,"bindMatrixInverse");const jt=j.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Ut.setValue(U,"boneTexture",jt.boneTexture,ot))}j.isBatchedMesh&&(Ut.setOptional(U,j,"batchingTexture"),Ut.setValue(U,"batchingTexture",j._matricesTexture,ot),Ut.setOptional(U,j,"batchingIdTexture"),Ut.setValue(U,"batchingIdTexture",j._indirectTexture,ot),Ut.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&Ut.setValue(U,"batchingColorTexture",j._colorsTexture,ot));const cn=le.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Te.update(j,le,Zt),(_n||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ut.setValue(U,"receiveShadow",j.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(xn.envMap.value=ke,xn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&q.environment!==null&&(xn.envMapIntensity.value=q.environmentIntensity),_n&&(Ut.setValue(U,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Wo(xn,yr),Ee&&ue.fog===!0&&de.refreshFogUniforms(xn,Ee),de.refreshMaterialUniforms(xn,ue,O,he,v.state.transmissionRenderTarget[T.id]),Al.upload(U,Vo(Qe),xn,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Al.upload(U,Vo(Qe),xn,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ut.setValue(U,"center",j.center),Ut.setValue(U,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(U,"normalMatrix",j.normalMatrix),Ut.setValue(U,"modelMatrix",j.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const jt=ue.uniformsGroups;for(let fn=0,Mr=jt.length;fn<Mr;fn++){const vt=jt[fn];ct.update(vt,Zt),ct.bind(vt,Zt)}}return Zt}function Wo(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Xo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(T,q,le){const ue=He.get(T);ue.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),He.get(T.texture).__webglTexture=q,He.get(T.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:le,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const le=He.get(T);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0};const Fl=U.createFramebuffer();this.setRenderTarget=function(T,q=0,le=0){$=T,B=q,z=le;let ue=!0,j=null,Ee=!1,Ce=!1;if(T){const ke=He.get(T);if(ke.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(U.FRAMEBUFFER,null),ue=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(T);else if(ke.__hasExternalTextures)ot.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(ke.__boundDepthTexture!==Ze){if(Ze!==null&&He.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(T)}}const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const rt=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?j=rt[q][le]:j=rt[q],Ee=!0):T.samples>0&&ot.useMultisampledRTT(T)===!1?j=He.get(T).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[le]:j=rt,I.copy(T.viewport),Y.copy(T.scissor),Q=T.scissorTest}else I.copy(L).multiplyScalar(O).floor(),Y.copy(ie).multiplyScalar(O).floor(),Q=De;if(le!==0&&(j=Fl),Ge.bindFramebuffer(U.FRAMEBUFFER,j)&&ue&&Ge.drawBuffers(T,j),Ge.viewport(I),Ge.scissor(Y),Ge.setScissorTest(Q),Ee){const ke=He.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,le)}else if(Ce){const ke=q;for(let nt=0;nt<T.textures.length;nt++){const rt=He.get(T.textures[nt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+nt,rt.__webglTexture,le,ke)}}else if(T!==null&&le!==0){const ke=He.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ke.__webglTexture,le)}P=-1},this.readRenderTargetPixels=function(T,q,le,ue,j,Ee,Ce,We=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke){Ge.bindFramebuffer(U.FRAMEBUFFER,ke);try{const nt=T.textures[We],rt=nt.format,Ze=nt.type;if(!Je.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-ue&&le>=0&&le<=T.height-j&&(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(q,le,ue,j,$e.convert(rt),$e.convert(Ze),Ee))}finally{const nt=$!==null?He.get($).__webglFramebuffer:null;Ge.bindFramebuffer(U.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(T,q,le,ue,j,Ee,Ce,We=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(ke=ke[Ce]),ke)if(q>=0&&q<=T.width-ue&&le>=0&&le<=T.height-j){Ge.bindFramebuffer(U.FRAMEBUFFER,ke);const nt=T.textures[We],rt=nt.format,Ze=nt.type;if(!Je.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+We),U.readPixels(q,le,ue,j,$e.convert(rt),$e.convert(Ze),0);const Rt=$!==null?He.get($).__webglFramebuffer:null;Ge.bindFramebuffer(U.FRAMEBUFFER,Rt);const yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await G_(U,yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(at),U.deleteSync(yt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,le=0){const ue=Math.pow(2,-le),j=Math.floor(T.image.width*ue),Ee=Math.floor(T.image.height*ue),Ce=q!==null?q.x:0,We=q!==null?q.y:0;ot.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,le,0,0,Ce,We,j,Ee),Ge.unbindTexture()};const jo=U.createFramebuffer(),Yo=U.createFramebuffer();this.copyTextureToTexture=function(T,q,le=null,ue=null,j=0,Ee=null){Ee===null&&(j!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Ce,We,ke,nt,rt,Ze,at,Rt,yt;const It=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(le!==null)Ce=le.max.x-le.min.x,We=le.max.y-le.min.y,ke=le.isBox3?le.max.z-le.min.z:1,nt=le.min.x,rt=le.min.y,Ze=le.isBox3?le.min.z:0;else{const cn=Math.pow(2,-j);Ce=Math.floor(It.width*cn),We=Math.floor(It.height*cn),T.isDataArrayTexture?ke=It.depth:T.isData3DTexture?ke=Math.floor(It.depth*cn):ke=1,nt=0,rt=0,Ze=0}ue!==null?(at=ue.x,Rt=ue.y,yt=ue.z):(at=0,Rt=0,yt=0);const bt=$e.convert(q.format),Qe=$e.convert(q.type);let Lt;q.isData3DTexture?(ot.setTexture3D(q,0),Lt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),Lt=U.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),Lt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const gt=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Jn=U.getParameter(U.UNPACK_SKIP_PIXELS),_n=U.getParameter(U.UNPACK_SKIP_ROWS),yr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,rt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ze);const Ut=T.isDataArrayTexture||T.isData3DTexture,xn=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const cn=He.get(T),jt=He.get(q),fn=He.get(cn.__renderTarget),Mr=He.get(jt.__renderTarget);Ge.bindFramebuffer(U.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let vt=0;vt<ke;vt++)Ut&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.get(T).__webglTexture,j,Ze+vt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.get(q).__webglTexture,Ee,yt+vt)),U.blitFramebuffer(nt,rt,Ce,We,at,Rt,Ce,We,U.DEPTH_BUFFER_BIT,U.NEAREST);Ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||He.has(T)){const cn=He.get(T),jt=He.get(q);Ge.bindFramebuffer(U.READ_FRAMEBUFFER,jo),Ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yo);for(let fn=0;fn<ke;fn++)Ut?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,j,Ze+fn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,j),xn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jt.__webglTexture,Ee,yt+fn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jt.__webglTexture,Ee),j!==0?U.blitFramebuffer(nt,rt,Ce,We,at,Rt,Ce,We,U.COLOR_BUFFER_BIT,U.NEAREST):xn?U.copyTexSubImage3D(Lt,Ee,at,Rt,yt+fn,nt,rt,Ce,We):U.copyTexSubImage2D(Lt,Ee,at,Rt,nt,rt,Ce,We);Ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,ke,bt,Qe,It.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,ke,bt,It.data):U.texSubImage3D(Lt,Ee,at,Rt,yt,Ce,We,ke,bt,Qe,It):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,at,Rt,Ce,We,bt,Qe,It.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,at,Rt,It.width,It.height,bt,It.data):U.texSubImage2D(U.TEXTURE_2D,Ee,at,Rt,Ce,We,bt,Qe,It);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Jn),U.pixelStorei(U.UNPACK_SKIP_ROWS,_n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,yr),Ee===0&&q.generateMipmaps&&U.generateMipmap(Lt),Ge.unbindTexture()},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&ot.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ot.setTextureCube(T,0):T.isData3DTexture?ot.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ot.setTexture2DArray(T,0):ot.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){B=0,z=0,$=null,Ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function uE({mouseForce:o=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:u=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:x={},className:S="",autoDemo:M=!0,autoSpeed:w=.5,autoIntensity:A=2.2,takeoverDuration:y=.25,autoResumeDelay:v=1e3,autoRampDuration:F=.6}){const N=zt.useRef(null),C=zt.useRef(null),V=zt.useRef(null),B=zt.useRef(null),z=zt.useRef(null),$=zt.useRef(!0),P=zt.useRef(null);return zt.useEffect(()=>{if(!N.current)return;function R(b){let g;Array.isArray(b)&&b.length>0?b.length===1?g=[b[0],b[0]]:g=b:g=["#ffffff","#ffffff"];const k=g.length,Z=new Uint8Array(k*4);for(let te=0;te<k;te++){const Ne=new wt(g[te]);Z[te*4+0]=Math.round(Ne.r*255),Z[te*4+1]=Math.round(Ne.g*255),Z[te*4+2]=Math.round(Ne.b*255),Z[te*4+3]=255}const de=new p0(Z,k,1,Zn);return de.magFilter=Dn,de.minFilter=Dn,de.wrapS=fi,de.wrapT=fi,de.generateMipmaps=!1,de.needsUpdate=!0,de}const I=R(_),Y=new Wt(0,0,0,0);class Q{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new lE({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new wt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new w0,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const oe=new Q;class ce{constructor(){this.mouseMoved=!1,this.coords=new ft,this.coords_old=new ft,this.diff=new ft,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ft,this.takeoverTo=new ft,this.onInteract=null}init(g){this.container=g,g.addEventListener("mousemove",this._onMouseMove,!1),g.addEventListener("touchstart",this._onTouchStart,!1),g.addEventListener("touchmove",this._onTouchMove,!1),g.addEventListener("mouseenter",this._onMouseEnter,!1),g.addEventListener("mouseleave",this._onMouseLeave,!1),g.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(g,k){if(!this.container)return;this.timer&&clearTimeout(this.timer);const Z=this.container.getBoundingClientRect(),de=(g-Z.left)/Z.width,te=(k-Z.top)/Z.height;this.coords.set(de*2-1,-(te*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,k){this.coords.set(g,k),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const k=this.container.getBoundingClientRect(),Z=(g.clientX-k.left)/k.width,de=(g.clientY-k.top)/k.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(de*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}onDocumentTouchStart(g){if(g.touches.length===1){const k=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY),this.hasUserControl=!0}}onDocumentTouchMove(g){if(g.touches.length===1){const k=g.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const k=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,k)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const ae=new ce;class he{constructor(g,k,Z){this.mouse=g,this.manager=k,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new ft(0,0),this.target=new ft,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ft,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let Z=(g-this.lastTime)/1e3;this.lastTime=g,Z>.2&&(Z=.016);const de=this._tmpDir.subVectors(this.target,this.current),te=de.length();if(te<.01){this.pickNewTarget();return}de.normalize();let Ne=1;if(this.rampDurationMs>0){const je=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Ne=je*je*(3-2*je)}const ye=this.speed*Z*Ne,Fe=Math.min(ye,te);this.current.addScaledVector(de,Fe),this.mouse.setNormalized(this.current.x,this.current.y)}}const O=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,fe=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ne=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,L=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,ie=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,De=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,ze=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ue=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ee=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,pe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class _e{constructor(g){var k;this.props=g||{},this.uniforms=(k=this.props.material)==null?void 0:k.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Qp,this.camera=new Pl,this.uniforms&&(this.material=new _l(this.props.material),this.geometry=new jr(2,2),this.plane=new Qn(this.geometry,this.material),this.scene.add(this.plane))}update(){oe.renderer.setRenderTarget(this.props.output||null),oe.renderer.render(this.scene,this.camera),oe.renderer.setRenderTarget(null)}}class Le extends _e{constructor(g){super({material:{vertexShader:O,fragmentShader:L,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Vi,k=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new di(k,3));const Z=new _l({vertexShader:fe,fragmentShader:L,uniforms:this.uniforms});this.line=new S0(g,Z),this.scene.add(this.line)}update({dt:g,isBounce:k,BFECC:Z}){this.uniforms.dt.value=g,this.line.visible=k,this.uniforms.isBFECC.value=Z,super.update()}}class Ie extends _e{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const k=new jr(1,1),Z=new _l({vertexShader:ne,fragmentShader:ze,blending:Zc,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ft(0,0)},center:{value:new ft(0,0)},scale:{value:new ft(g.cursor_size,g.cursor_size)}}});this.mouse=new Qn(k,Z),this.scene.add(this.mouse)}update(g){const k=ae.diff.x/2*g.mouse_force,Z=ae.diff.y/2*g.mouse_force,de=g.cursor_size*g.cellScale.x,te=g.cursor_size*g.cellScale.y,Ne=Math.min(Math.max(ae.coords.x,-1+de+g.cellScale.x*2),1-de-g.cellScale.x*2),ye=Math.min(Math.max(ae.coords.y,-1+te+g.cellScale.y*2),1-te-g.cellScale.y*2),Fe=this.mouse.material.uniforms;Fe.force.value.set(k,Z),Fe.center.value.set(Ne,ye),Fe.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class dt extends _e{constructor(g){super({material:{vertexShader:O,fragmentShader:pe,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:k,dt:Z}){let de,te;this.uniforms.v.value=g;for(let Ne=0;Ne<k;Ne++)Ne%2===0?(de=this.props.output0,te=this.props.output1):(de=this.props.output1,te=this.props.output0),this.uniforms.velocity_new.value=de.texture,this.props.output=te,this.uniforms.dt.value=Z,super.update();return te}}class Xt extends _e{constructor(g){super({material:{vertexShader:O,fragmentShader:De,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class U extends _e{constructor(g){super({material:{vertexShader:O,fragmentShader:Ue,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let k,Z;for(let de=0;de<g;de++)de%2===0?(k=this.props.output0,Z=this.props.output1):(k=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=k.texture,this.props.output=Z,super.update();return Z}}class At extends _e{constructor(g){super({material:{vertexShader:O,fragmentShader:ee,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:k}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=k.texture,super.update()}}class st{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ft,this.cellScale=new ft,this.boundarySpace=new ft,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Hs:_i}createAllFBO(){const k={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Dn,magFilter:Dn,wrapS:fi,wrapT:fi};for(let Z in this.fbos)this.fbos[Z]=new xr(this.fboSize.x,this.fboSize.y,k)}createShaderPass(){this.advection=new Le({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ie({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Xt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new U({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new At({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*oe.width)),k=Math.max(1,Math.round(this.options.resolution*oe.height)),Z=1/g,de=1/k;this.cellScale.set(Z,de),this.fboSize.set(g,k)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const k=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:k})}}class Je{constructor(){this.init()}init(){this.simulation=new st,this.scene=new Qp,this.camera=new Pl,this.output=new Qn(new jr(2,2),new _l({vertexShader:O,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ft},palette:{value:I},bgColor:{value:Y}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){oe.renderer.setRenderTarget(null),oe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ge{constructor(g){this.props=g,oe.init(g.$wrapper),ae.init(g.$wrapper),ae.autoIntensity=g.autoIntensity,ae.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),ae.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new he(ae,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():$.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(oe.renderer.domElement),this.output=new Je}resize(){oe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),ae.update(),oe.update(),this.output.update()}loop(){this.running&&(this.render(),B.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,B.current&&(cancelAnimationFrame(B.current),B.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),ae.dispose(),oe.renderer){const g=oe.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),oe.renderer.dispose()}}catch{}}}const _t=N.current;_t.style.position=_t.style.position||"relative",_t.style.overflow=_t.style.overflow||"hidden";const He=new Ge({$wrapper:_t,autoDemo:M,autoSpeed:w,autoIntensity:A,takeoverDuration:y,autoResumeDelay:v,autoRampDuration:F});C.current=He,(()=>{var k;if(!C.current)return;const b=(k=C.current.output)==null?void 0:k.simulation;if(!b)return;const g=b.options.resolution;Object.assign(b.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==g&&b.resize()})(),He.start();const Pt=new IntersectionObserver(b=>{const g=b[0],k=g.isIntersecting&&g.intersectionRatio>0;$.current=k,C.current&&(k&&!document.hidden?C.current.start():C.current.pause())},{threshold:[0,.01,.1]});Pt.observe(_t),z.current=Pt;const Dt=new ResizeObserver(()=>{C.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{C.current&&C.current.resize()}))});return Dt.observe(_t),V.current=Dt,()=>{if(B.current&&cancelAnimationFrame(B.current),V.current)try{V.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}C.current&&C.current.dispose(),C.current=null}},[d,e,f,m,n,u,a,o,p,r,_,M,w,A,y,v,F]),zt.useEffect(()=>{var Q;const R=C.current;if(!R)return;const I=(Q=R.output)==null?void 0:Q.simulation;if(!I)return;const Y=I.options.resolution;Object.assign(I.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=w,R.autoDriver.resumeDelay=v,R.autoDriver.rampDurationMs=F*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=A,R.autoDriver.mouse.takeoverDuration=y)),p!==Y&&I.resize()},[o,e,n,r,a,u,f,d,p,m,M,w,A,y,v,F]),W.jsx("div",{ref:N,className:`liquid-ether-container ${S||""}`,style:x})}function cE(){const[o,e]=zt.useState(!1),[n,r]=zt.useState("hero"),a=zt.useRef({}),u=()=>{e(!1),f("contact")},f=p=>{const m=a.current[p];m&&m.scrollIntoView({behavior:"smooth",block:"start"})};zt.useEffect(()=>{const p=new IntersectionObserver(m=>{m.forEach(_=>{_.isIntersecting&&_.intersectionRatio>.3&&r(_.target.id)})},{threshold:[.3],rootMargin:"0px"});return Object.values(a.current).forEach(m=>{m&&p.observe(m)}),()=>p.disconnect()},[]);const d=[{id:"hero",icon:"fa-home",label:"Home"},{id:"about",icon:"fa-user",label:"About"},{id:"experience",icon:"fa-briefcase",label:"Experience"},{id:"skills",icon:"fa-code",label:"Skills"},{id:"projects",icon:"fa-laptop-code",label:"Projects"},{id:"contact",icon:"fa-envelope",label:"Contact"}];return W.jsxs("div",{className:"app-container",children:[W.jsx("div",{className:"liquid-ether-background",children:W.jsx(uE,{colors:["#1a0033","#6366f1","#a855f7","#000000"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:20,iterationsViscous:16,iterationsPoisson:16,resolution:.75,isBounce:!1,autoDemo:!0,autoSpeed:.25,autoIntensity:1.5,takeoverDuration:.3,autoResumeDelay:2e3,autoRampDuration:.8})}),o&&W.jsx("div",{className:"profile-card-modal",onClick:p=>{p.target.className==="profile-card-modal"&&e(!1)},children:W.jsxs("div",{className:"profile-card-content",children:[W.jsx("button",{className:"close-btn",onClick:()=>e(!1),children:"✕"}),W.jsx(Qv,{name:"Juan Jaramillo",title:"Full Stack Developer",handle:"juanjjaramillo",status:"Available for Work",contactText:"Contact Me",avatarUrl:"/avatar.jpg",showUserInfo:!0,enableTilt:!0,enableMobileTilt:!1,onContactClick:u})]})}),W.jsxs("div",{className:"floating-card-container",children:[W.jsx("div",{className:"particles-bg"}),W.jsxs("div",{className:"language-switcher-top",children:[W.jsx("button",{className:"lang-btn active",children:"EN"}),W.jsx("button",{className:"lang-btn",children:"ES"})]}),W.jsxs("nav",{className:"sidebar",children:[W.jsx("div",{className:"logo",children:W.jsx("div",{className:"logo-icon",onClick:()=>e(!0),children:"JJ"})}),W.jsx("ul",{className:"nav-menu",children:d.map(p=>W.jsxs("li",{className:`nav-item ${n===p.id?"active":""}`,onClick:()=>f(p.id),children:[W.jsx("i",{className:`fas ${p.icon}`}),W.jsx("span",{children:p.label})]},p.id))})]}),W.jsx("main",{className:"main-content",children:W.jsxs("div",{className:"content-container",children:[W.jsx("section",{id:"hero",className:"section",ref:p=>a.current.hero=p,children:W.jsx("div",{className:"hero-container",children:W.jsxs("div",{className:"hero-content",children:[W.jsxs("div",{className:"hero-text",children:[W.jsx("h1",{className:"hero-title",children:W.jsx("span",{className:"gradient-text",children:"Juan Jaramillo"})}),W.jsx("p",{className:"hero-subtitle",children:"Full Stack Developer | Cloud & Mobile Specialist"}),W.jsx("p",{className:"hero-description",children:"Highly versatile and committed technology professional with solid experience in full stack web and mobile development, and cloud deployment. Expert in multiple modern frontend and backend frameworks, relational databases, .NET + Entity Framework, and cloud architectures in AWS and Azure."}),W.jsxs("div",{className:"hero-buttons",children:[W.jsxs("button",{className:"btn btn-primary",children:[W.jsx("i",{className:"fas fa-download"}),"Download CV"]}),W.jsxs("button",{className:"btn btn-secondary",onClick:()=>f("projects"),children:[W.jsx("i",{className:"fas fa-rocket"}),"View Projects"]})]})]}),W.jsx("div",{className:"hero-visual",children:W.jsx("div",{className:"floating-card",children:W.jsxs("div",{className:"card-content",children:[W.jsx("div",{className:"avatar",children:W.jsx("div",{className:"avatar-placeholder",children:"JJ"})}),W.jsxs("div",{className:"card-info",children:[W.jsx("h3",{children:"Available for Work"}),W.jsx("p",{children:"Open to new opportunities"})]})]})})})]})})}),W.jsxs("section",{id:"about",className:"section",ref:p=>a.current.about=p,children:[W.jsxs("div",{className:"section-header",children:[W.jsx("h2",{className:"section-title",children:"About Me"}),W.jsx("p",{className:"section-subtitle",children:"Get to know me better"})]}),W.jsx("div",{className:"about-grid",children:[{icon:"fa-lightbulb",title:"Innovation",desc:"Always exploring new technologies and creative solutions to complex problems."},{icon:"fa-users",title:"Collaboration",desc:"Strong believer in teamwork and effective communication for successful projects."},{icon:"fa-chart-line",title:"Growth",desc:"Continuously learning and adapting to stay ahead in the fast-paced tech industry."}].map((p,m)=>W.jsxs("div",{className:"about-card glass-card",children:[W.jsx("div",{className:"card-icon",children:W.jsx("i",{className:`fas ${p.icon}`})}),W.jsx("h3",{children:p.title}),W.jsx("p",{children:p.desc})]},m))})]}),W.jsxs("section",{id:"experience",className:"section",ref:p=>a.current.experience=p,children:[W.jsxs("div",{className:"section-header",children:[W.jsx("h2",{className:"section-title",children:"Experience"}),W.jsx("p",{className:"section-subtitle",children:"My professional journey"})]}),W.jsxs("div",{className:"experience-timeline",children:[W.jsxs("div",{className:"timeline-item",children:[W.jsx("div",{className:"timeline-marker"}),W.jsxs("div",{className:"timeline-content glass-card",children:[W.jsxs("div",{className:"timeline-header",children:[W.jsx("h3",{children:"Full Stack Web Developer"}),W.jsx("span",{className:"timeline-date",children:"Current"})]}),W.jsx("p",{className:"timeline-company",children:"Jazusoft"}),W.jsx("p",{className:"timeline-description",children:"Frontend development with React, Vue, Angular and Ionic. Backend with Django, Laravel and .NET + Entity Framework. SQL Server management, stored procedures and view optimization. Application deployment in Azure (ACR, AKS, App Service) and AWS (Lambda, EC2, S3). CI/CD pipeline implementation and cloud infrastructure configuration."}),W.jsxs("div",{className:"timeline-tags",children:[W.jsx("span",{className:"tag",children:"React"}),W.jsx("span",{className:"tag",children:"Vue.js"}),W.jsx("span",{className:"tag",children:"Angular"}),W.jsx("span",{className:"tag",children:".NET"}),W.jsx("span",{className:"tag",children:"Azure"}),W.jsx("span",{className:"tag",children:"AWS"})]})]})]}),W.jsxs("div",{className:"timeline-item",children:[W.jsx("div",{className:"timeline-marker"}),W.jsxs("div",{className:"timeline-content glass-card",children:[W.jsxs("div",{className:"timeline-header",children:[W.jsx("h3",{children:"Research Project Collaborator"}),W.jsx("span",{className:"timeline-date",children:"2024"})]}),W.jsx("p",{className:"timeline-company",children:"Universidad Blas Pascal"}),W.jsx("p",{className:"timeline-description",children:"Development of a facial gesture recognition application. Wheelchair control through computer vision and facial gestures."}),W.jsxs("div",{className:"timeline-tags",children:[W.jsx("span",{className:"tag",children:"Computer Vision"}),W.jsx("span",{className:"tag",children:"Python"}),W.jsx("span",{className:"tag",children:"AI/ML"})]})]})]}),W.jsxs("div",{className:"timeline-item",children:[W.jsx("div",{className:"timeline-marker"}),W.jsxs("div",{className:"timeline-content glass-card",children:[W.jsxs("div",{className:"timeline-header",children:[W.jsx("h3",{children:"Systems Engineering Intern"}),W.jsx("span",{className:"timeline-date",children:"2024"})]}),W.jsx("p",{className:"timeline-company",children:"Aeropuertos Argentina 2000 – Córdoba Airport"}),W.jsx("p",{className:"timeline-description",children:"SITA to VEOVO systems migration. Support and development in airport infrastructure technology."}),W.jsxs("div",{className:"timeline-tags",children:[W.jsx("span",{className:"tag",children:"Systems Migration"}),W.jsx("span",{className:"tag",children:"Infrastructure"}),W.jsx("span",{className:"tag",children:"Support"})]})]})]})]})]}),W.jsxs("section",{id:"skills",className:"section",ref:p=>a.current.skills=p,children:[W.jsxs("div",{className:"section-header",children:[W.jsx("h2",{className:"section-title",children:"Skills & Technologies"}),W.jsx("p",{className:"section-subtitle",children:"Technologies I work with"})]}),W.jsxs("div",{className:"skills-grid",children:[W.jsxs("div",{className:"skill-category glass-card",children:[W.jsx("h3",{children:"Frontend"}),W.jsx("div",{className:"skill-items",children:[{name:"React",width:"90%"},{name:"Vue.js",width:"85%"},{name:"Angular",width:"80%"},{name:"Ionic",width:"85%"}].map((p,m)=>W.jsxs("div",{className:"skill-item",children:[W.jsx("span",{className:"skill-name",children:p.name}),W.jsx("div",{className:"skill-bar",children:W.jsx("div",{className:"skill-progress",style:{width:p.width}})})]},m))})]}),W.jsxs("div",{className:"skill-category glass-card",children:[W.jsx("h3",{children:"Backend"}),W.jsx("div",{className:"skill-items",children:[{name:".NET Core",width:"88%"},{name:"Django",width:"82%"},{name:"Laravel",width:"80%"},{name:"Node.js",width:"75%"}].map((p,m)=>W.jsxs("div",{className:"skill-item",children:[W.jsx("span",{className:"skill-name",children:p.name}),W.jsx("div",{className:"skill-bar",children:W.jsx("div",{className:"skill-progress",style:{width:p.width}})})]},m))})]}),W.jsxs("div",{className:"skill-category glass-card",children:[W.jsx("h3",{children:"Cloud & DevOps"}),W.jsx("div",{className:"skill-items",children:[{name:"Azure",width:"85%"},{name:"AWS",width:"75%"},{name:"CI/CD",width:"80%"},{name:"Terraform",width:"70%"}].map((p,m)=>W.jsxs("div",{className:"skill-item",children:[W.jsx("span",{className:"skill-name",children:p.name}),W.jsx("div",{className:"skill-bar",children:W.jsx("div",{className:"skill-progress",style:{width:p.width}})})]},m))})]})]})]}),W.jsxs("section",{id:"projects",className:"section",ref:p=>a.current.projects=p,children:[W.jsxs("div",{className:"section-header",children:[W.jsx("h2",{className:"section-title",children:"Featured Projects"}),W.jsx("p",{className:"section-subtitle",children:"Some of my recent work"})]}),W.jsx("div",{className:"projects-grid",children:[{label:"E-Commerce",title:"E-Commerce Platform",description:"Modern e-commerce solution with real-time inventory management and payment processing.",tags:["React","Node.js","Stripe"]},{label:"Analytics",title:"Analytics Dashboard",description:"Real-time data visualization dashboard with interactive charts and custom reporting.",tags:["Vue.js","D3.js","Python"]},{label:"Mobile",title:"Mobile App",description:"Cross-platform mobile application with offline capabilities and push notifications.",tags:["React Native","Firebase","Redux"]},{label:"AI/ML",title:"Facial Recognition",description:"Computer vision application for facial gesture recognition and wheelchair control.",tags:["Python","OpenCV","AI/ML"]},{label:"Cloud",title:"Cloud Infrastructure",description:"Scalable cloud architecture with CI/CD pipelines and automated deployment.",tags:["Azure","AWS","Docker"]},{label:"Full Stack",title:"Full Stack App",description:"Complete full stack application with modern architecture and best practices.",tags:["React",".NET","SQL Server"]}].map((p,m)=>W.jsxs("div",{className:"project-card glass-card",children:[W.jsx("div",{className:"project-label",children:p.label}),W.jsx("h3",{children:p.title}),W.jsx("p",{children:p.description}),W.jsx("div",{className:"project-tags",children:p.tags.map((_,x)=>W.jsx("span",{className:"tag",children:_},x))}),W.jsxs("div",{className:"project-links",children:[W.jsxs("a",{href:"#",className:"project-link",children:[W.jsx("i",{className:"fas fa-external-link-alt"}),"Live Demo"]}),W.jsxs("a",{href:"#",className:"project-link",children:[W.jsx("i",{className:"fab fa-github"}),"Code"]})]})]},m))})]}),W.jsxs("section",{id:"contact",className:"section",ref:p=>a.current.contact=p,children:[W.jsxs("div",{className:"section-header",children:[W.jsx("h2",{className:"section-title",children:"Get In Touch"}),W.jsx("p",{className:"section-subtitle",children:"Let's work together"})]}),W.jsxs("div",{className:"contact-container",children:[W.jsxs("div",{className:"contact-info glass-card",children:[W.jsx("h3",{children:"Contact Information"}),W.jsxs("div",{className:"contact-item",children:[W.jsx("i",{className:"fas fa-envelope"}),W.jsx("span",{children:"jjuanandres4@gmail.com"})]}),W.jsxs("div",{className:"contact-item",children:[W.jsx("i",{className:"fas fa-phone"}),W.jsx("span",{children:"+54 9 351 786 6940"})]}),W.jsxs("div",{className:"contact-item",children:[W.jsx("i",{className:"fas fa-map-marker-alt"}),W.jsx("span",{children:"Córdoba, Argentina"})]}),W.jsxs("div",{className:"social-links",children:[W.jsx("a",{href:"https://linkedin.com/in/juanjjaramillo",className:"social-link",target:"_blank",rel:"noopener noreferrer",children:W.jsx("i",{className:"fab fa-linkedin"})}),W.jsx("a",{href:"#",className:"social-link",children:W.jsx("i",{className:"fab fa-github"})}),W.jsx("a",{href:"#",className:"social-link",children:W.jsx("i",{className:"fab fa-twitter"})})]})]}),W.jsxs("div",{className:"contact-form glass-card",children:[W.jsx("h3",{children:"Send Message"}),W.jsxs("form",{onSubmit:p=>{p.preventDefault(),alert("Message sent! (Demo)")},children:[W.jsx("div",{className:"form-group",children:W.jsx("input",{type:"text",placeholder:"Your Name",required:!0})}),W.jsx("div",{className:"form-group",children:W.jsx("input",{type:"email",placeholder:"Your Email",required:!0})}),W.jsx("div",{className:"form-group",children:W.jsx("textarea",{placeholder:"Your Message",rows:"5",required:!0})}),W.jsxs("button",{type:"submit",className:"btn btn-primary",children:[W.jsx("i",{className:"fas fa-paper-plane"}),"Send Message"]})]})]})]})]})]})})]})]})}Yv.createRoot(document.getElementById("root")).render(W.jsx(bm.StrictMode,{children:W.jsx(cE,{})}));
