import{S as c,i as d,s as u,l as _,m as h,n as p,h as n,p as b,b as m,E as r,$ as w,e as o,a0 as g}from"../../../chunks/index-07b03d27.js";function f(l){let a,t=l[0].webEmbedPlayer+"",i;return{c(){a=new w(!1),i=o(),this.h()},l(e){a=g(e,!1),i=o(),this.h()},h(){a.a=i},m(e,s){a.m(t,e,s),m(e,i,s)},p(e,s){s&1&&t!==(t=e[0].webEmbedPlayer+"")&&a.p(t)},d(e){e&&n(i),e&&a.d()}}}function v(l){let a,t=l[0]&&f(l);return{c(){a=_("div"),t&&t.c(),this.h()},l(i){a=h(i,"DIV",{class:!0});var e=p(a);t&&t.l(e),e.forEach(n),this.h()},h(){b(a,"class","mx-auto max-w-4xl")},m(i,e){m(i,a,e),t&&t.m(a,null)},p(i,[e]){i[0]?t?t.p(i,e):(t=f(i),t.c(),t.m(a,null)):t&&(t.d(1),t=null)},i:r,o:r,d(i){i&&n(a),t&&t.d()}}}async function $({params:l,fetch:a}){const t=l.id.split("___")[0],i=l.id.split("___")[1],e=await a(`https://api.arclight.org/v2/media-components/${t}/languages/${i}?apiKey=52b06248a3c6e8.12980089`);return e.ok?{props:{film:await e.json()}}:{status:e.status,error:new Error(`Could not load JSON for ${t}`)}}function y(l,a,t){let{film:i}=a;return l.$$set=e=>{"film"in e&&t(0,i=e.film)},[i]}class k extends c{constructor(a){super(),d(this,a,y,v,u,{film:0})}}export{k as default,$ as load};
