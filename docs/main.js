(()=>{var e={10:(e,r,t)=>{const n=t(302),i="vwxyzafpnµmkMGTPEZYXWV".split("");function o(e,{unit:r="",precision:t=3,delimiter:o=" "}={}){const s=e instanceof n?e:new n(e);let c=i[11+Math.floor(s.e/3)];void 0===c&&(c="?"),s.c=s.c.slice(0,t),s.e=s.e>=0?s.e%3:2+(s.e+1)%3;const f=""===c&&""===r?"":o;return`${s.toPrecision(t)}${f}${c}${r}`}i.splice(11,0,"");const s=e=>(r,t)=>o(r,{...e,...t});s.prefix=o,e.exports=s},302:function(e,r,t){var n;!function(i){"use strict";var o,s=1e6,c="[big.js] ",f=c+"Invalid ",u=f+"decimal places",l=f+"rounding mode",h=c+"Division by zero",a={},p=void 0,d=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function v(e,r,t,n){var i=e.c,o=e.e+r+1;if(o<i.length){if(1===t)n=i[o]>=5;else if(2===t)n=i[o]>5||5==i[o]&&(n||o<0||i[o+1]!==p||1&i[o-1]);else if(3===t)n=n||!!i[0];else if(n=!1,0!==t)throw Error(l);if(o<1)i.length=1,n?(e.e=-r,i[0]=1):i[0]=e.e=0;else{if(i.length=o--,n)for(;++i[o]>9;)i[o]=0,o--||(++e.e,i.unshift(1));for(o=i.length;!i[--o];)i.pop()}}else if(t<0||t>3||t!==~~t)throw Error(l);return e}function g(e,r,t,n){var i,o,c=e.constructor,l=!e.c[0];if(t!==p){if(t!==~~t||t<(3==r)||t>s)throw Error(3==r?f+"precision":u);for(t=n-(e=new c(e)).e,e.c.length>++n&&v(e,t,c.RM),2==r&&(n=e.e+t+1);e.c.length<n;)e.c.push(0)}if(i=e.e,t=(o=e.c.join("")).length,2!=r&&(1==r||3==r&&n<=i||i<=c.NE||i>=c.PE))o=o.charAt(0)+(t>1?"."+o.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)o="0"+o;o="0."+o}else if(i>0)if(++i>t)for(i-=t;i--;)o+="0";else i<t&&(o=o.slice(0,i)+"."+o.slice(i));else t>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&(!l||4==r)?"-"+o:o}a.abs=function(){var e=new this.constructor(this);return e.s=1,e},a.cmp=function(e){var r,t=this,n=t.c,i=(e=new t.constructor(e)).c,o=t.s,s=e.s,c=t.e,f=e.e;if(!n[0]||!i[0])return n[0]?o:i[0]?-s:0;if(o!=s)return o;if(r=o<0,c!=f)return c>f^r?1:-1;for(s=(c=n.length)<(f=i.length)?c:f,o=-1;++o<s;)if(n[o]!=i[o])return n[o]>i[o]^r?1:-1;return c==f?0:c>f^r?1:-1},a.div=function(e){var r=this,t=r.constructor,n=r.c,i=(e=new t(e)).c,o=r.s==e.s?1:-1,c=t.DP;if(c!==~~c||c<0||c>s)throw Error(u);if(!i[0])throw Error(h);if(!n[0])return new t(0*o);var f,l,a,d,g,m=i.slice(),w=f=i.length,E=n.length,x=n.slice(0,f),M=x.length,P=e,y=P.c=[],b=0,$=c+(P.e=r.e-e.e)+1;for(P.s=o,o=$<0?0:$,m.unshift(0);M++<f;)x.push(0);do{for(a=0;a<10;a++){if(f!=(M=x.length))d=f>M?1:-1;else for(g=-1,d=0;++g<f;)if(i[g]!=x[g]){d=i[g]>x[g]?1:-1;break}if(!(d<0))break;for(l=M==f?i:m;M;){if(x[--M]<l[M]){for(g=M;g&&!x[--g];)x[g]=9;--x[g],x[M]+=10}x[M]-=l[M]}for(;!x[0];)x.shift()}y[b++]=d?a:++a,x[0]&&d?x[M]=n[w]||0:x=[n[w]]}while((w++<E||x[0]!==p)&&o--);return y[0]||1==b||(y.shift(),P.e--),b>$&&v(P,c,t.RM,x[0]!==p),P},a.eq=function(e){return!this.cmp(e)},a.gt=function(e){return this.cmp(e)>0},a.gte=function(e){return this.cmp(e)>-1},a.lt=function(e){return this.cmp(e)<0},a.lte=function(e){return this.cmp(e)<1},a.minus=a.sub=function(e){var r,t,n,i,o=this,s=o.constructor,c=o.s,f=(e=new s(e)).s;if(c!=f)return e.s=-f,o.plus(e);var u=o.c.slice(),l=o.e,h=e.c,a=e.e;if(!u[0]||!h[0])return h[0]?(e.s=-f,e):new s(u[0]?o:0);if(c=l-a){for((i=c<0)?(c=-c,n=u):(a=l,n=h),n.reverse(),f=c;f--;)n.push(0);n.reverse()}else for(t=((i=u.length<h.length)?u:h).length,c=f=0;f<t;f++)if(u[f]!=h[f]){i=u[f]<h[f];break}if(i&&(n=u,u=h,h=n,e.s=-e.s),(f=(t=h.length)-(r=u.length))>0)for(;f--;)u[r++]=0;for(f=r;t>c;){if(u[--t]<h[t]){for(r=t;r&&!u[--r];)u[r]=9;--u[r],u[t]+=10}u[t]-=h[t]}for(;0===u[--f];)u.pop();for(;0===u[0];)u.shift(),--a;return u[0]||(e.s=1,u=[a=0]),e.c=u,e.e=a,e},a.mod=function(e){var r,t=this,n=t.constructor,i=t.s,o=(e=new n(e)).s;if(!e.c[0])throw Error(h);return t.s=e.s=1,r=1==e.cmp(t),t.s=i,e.s=o,r?new n(t):(i=n.DP,o=n.RM,n.DP=n.RM=0,t=t.div(e),n.DP=i,n.RM=o,this.minus(t.times(e)))},a.plus=a.add=function(e){var r,t=this,n=t.constructor,i=t.s,o=(e=new n(e)).s;if(i!=o)return e.s=-o,t.minus(e);var s=t.e,c=t.c,f=e.e,u=e.c;if(!c[0]||!u[0])return u[0]?e:new n(c[0]?t:0*i);if(c=c.slice(),i=s-f){for(i>0?(f=s,r=u):(i=-i,r=c),r.reverse();i--;)r.push(0);r.reverse()}for(c.length-u.length<0&&(r=u,u=c,c=r),i=u.length,o=0;i;c[i]%=10)o=(c[--i]=c[i]+u[i]+o)/10|0;for(o&&(c.unshift(o),++f),i=c.length;0===c[--i];)c.pop();return e.c=c,e.e=f,e},a.pow=function(e){var r=this,t=new r.constructor(1),n=t,i=e<0;if(e!==~~e||e<-1e6||e>1e6)throw Error(f+"exponent");for(i&&(e=-e);1&e&&(n=n.times(r)),e>>=1;)r=r.times(r);return i?t.div(n):n},a.round=function(e,r){var t=this.constructor;if(e===p)e=0;else if(e!==~~e||e<-s||e>s)throw Error(u);return v(new t(this),e,r===p?t.RM:r)},a.sqrt=function(){var e,r,t,n=this,i=n.constructor,o=n.s,s=n.e,f=new i(.5);if(!n.c[0])return new i(n);if(o<0)throw Error(c+"No square root");0===(o=Math.sqrt(n+""))||o===1/0?((r=n.c.join("")).length+s&1||(r+="0"),s=((s+1)/2|0)-(s<0||1&s),e=new i(((o=Math.sqrt(r))==1/0?"1e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+s)):e=new i(o),s=e.e+(i.DP+=4);do{t=e,e=f.times(t.plus(n.div(t)))}while(t.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return v(e,i.DP-=4,i.RM)},a.times=a.mul=function(e){var r,t=this,n=t.constructor,i=t.c,o=(e=new n(e)).c,s=i.length,c=o.length,f=t.e,u=e.e;if(e.s=t.s==e.s?1:-1,!i[0]||!o[0])return new n(0*e.s);for(e.e=f+u,s<c&&(r=i,i=o,o=r,u=s,s=c,c=u),r=new Array(u=s+c);u--;)r[u]=0;for(f=c;f--;){for(c=0,u=s+f;u>f;)c=r[u]+o[f]*i[u-f-1]+c,r[u--]=c%10,c=c/10|0;r[u]=(r[u]+c)%10}for(c?++e.e:r.shift(),f=r.length;!r[--f];)r.pop();return e.c=r,e},a.toExponential=function(e){return g(this,1,e,e)},a.toFixed=function(e){return g(this,2,e,this.e+e)},a.toPrecision=function(e){return g(this,3,e,e-1)},a.toString=function(){return g(this)},a.valueOf=a.toJSON=function(){return g(this,4)},(o=function e(){function r(t){var n=this;if(!(n instanceof r))return t===p?e():new r(t);t instanceof r?(n.s=t.s,n.e=t.e,n.c=t.c.slice()):function(e,r){var t,n,i;if(0===r&&1/r<0)r="-0";else if(!d.test(r+=""))throw Error(f+"number");for(e.s="-"==r.charAt(0)?(r=r.slice(1),-1):1,(t=r.indexOf("."))>-1&&(r=r.replace(".","")),(n=r.search(/e/i))>0?(t<0&&(t=n),t+=+r.slice(n+1),r=r.substring(0,n)):t<0&&(t=r.length),i=r.length,n=0;n<i&&"0"==r.charAt(n);)++n;if(n==i)e.c=[e.e=0];else{for(;i>0&&"0"==r.charAt(--i););for(e.e=t-n-1,e.c=[],t=0;n<=i;)e.c[t++]=+r.charAt(n++)}}(n,t),n.constructor=r}return r.prototype=a,r.DP=20,r.RM=1,r.NE=-7,r.PE=21,r.version="5.2.2",r}()).default=o.Big=o,void 0===(n=function(){return o}.call(r,t,r,e))||(e.exports=n)}()}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(10),r=t.n(e);const n=document.getElementById("hero"),i=document.getElementById("code"),o=["unit","delimiter","precision","number"].map((e=>document.getElementById(e))),[s,c,f,u]=o;function l(e){try{return parseFloat(e)||0}catch(e){return 0}}function h(){const e={unit:s.value,delimiter:c.value,precision:l(f.value)},t=r()(e),o=l(u.value);n.innerHTML=t(o);let h="const metricPrefix = require('metric-prefix')\n";h+="const prefix = metricPrefix({";const a=[];""!==e.unit&&a.push(`  unit: '${e.unit}'`),3!==e.precision&&a.push(`  precision: ${e.precision}`)," "!==e.delimiter&&a.push(`  delimiter: '${e.delimiter}'`),a.length&&(h+="\n"+a.join(",\n")+"\n"),h+=`})\nconsole.log(prefix(${u.value}))`,i.innerHTML=h}if(c.addEventListener("focus",(()=>{c.select()})),o.forEach((e=>e.addEventListener("input",(()=>h())))),h(),window.onload=function(){let e=18;const r=setInterval((()=>{0===e&&(clearInterval(r),u.focus()),u.value=""+Math.floor(1+9*Math.random())+u.value,h(),e--}),100)},~navigator.userAgent.toLowerCase().indexOf("android"))for(const e of document.getElementsByClassName("noyscroll"))e.classList.remove("noyscroll")})()})();