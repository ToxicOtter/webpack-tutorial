var ImageCaptionApp;(()=>{"use strict";var e,r={},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e](i,i.exports,n),i.exports}n.m=r,n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>e+".61dff653db96fed04b86.js",n.miniCssF=e=>e+".1dcf4ae2a861db6b376a.css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},n.l=(r,t,o,i)=>{if(e[r])e[r].push(t);else{var a,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var u=s[d];if(u.getAttribute("src")==r){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=r),e[r]=[t];var f=(t,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!e;)e=t[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{if("undefined"!=typeof document){var e={768:0};n.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{801:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var o=n.miniCssF(e),i=n.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(a=t[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===r)return a}})(o,i))return r();((e,r,t,n,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=t=>{if(i.onerror=i.onload=null,"load"===t.type)n();else{var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,i.parentNode&&i.parentNode.removeChild(i),o(s)}},i.href=r,document.head.appendChild(i)})(e,i,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={768:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=i);var a=n.p+n.u(r),l=new Error;n.l(a,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,i,[a,l,s]=t,d=0;if(a.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);s&&s(n)}for(r&&r(t);d<a.length;d++)i=a[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o,i,a,l,s={};o=s,i={"./ImageCaption":()=>n.e(801).then((()=>()=>n(801)))},a=(e,r)=>(n.R=r,r=n.o(i,e)?i[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),n.R=void 0,r),l=(e,r)=>{if(n.S){var t="default",o=n.S[t];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return n.S[t]=e,n.I(t,r)}},n.d(o,{get:()=>a,init:()=>l}),ImageCaptionApp=s})();