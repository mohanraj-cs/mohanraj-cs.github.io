"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7956],{57956:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var o=n(85893),r=n(1864),s=n(67294);const a=(0,s.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M30 2v10h-2V5.422L5.422 28H12v2H2V20h2v6.578L26.578 4H20V2h10z"})}))),i=(0,s.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M4 18h10v10h-2v-6.578L1.453 31.953.047 30.547 10.578 20H4v-2zm17.422-6H28v2H18V4h2v6.578L30.547.047l1.406 1.406z"})}))),l=(0,s.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M31.703 30.297Q32 30.594 32 31t-.297.703T31 32t-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zm1-10h4v2h-4v4h-2v-4H6v-2h4V6h2v4z"})}))),c=(0,s.memo)((()=>(0,o.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M32 30.906q0 .438-.266.766T31 32q-.406 0-.703-.297l-12.266-12.25q-1.5 1.234-3.289 1.891T11 22q-1.516 0-2.922-.391T5.453 20.5t-2.227-1.727-1.727-2.227T.39 13.921t-.391-2.922.391-2.922 1.109-2.625 1.727-2.227 2.227-1.727T8.078.389 11-.002t2.922.391 2.625 1.109 2.227 1.727 1.727 2.227 1.109 2.625.391 2.922q0 1.953-.656 3.742t-1.891 3.289q.234.234.898.891t1.594 1.563 2.031 1.992 2.219 2.203 2.164 2.18 1.859 1.922 1.297 1.43.484.695zM11 20q1.859 0 3.5-.711t2.859-1.93 1.93-2.859T20 11t-.711-3.5-1.93-2.859-2.859-1.93T11 2t-3.5.711-2.859 1.93T2.711 7.5 2 11t.711 3.5 1.93 2.859 2.859 1.93T11 20zM6 10h10v2H6v-2z"})}))),d="48px",u="32px";var m=n(10508).ZP.div.withConfig({componentId:"sc-3ecd8b5d-0"})`
  background-color: #222;
  display: flex;
  height: 100%;
  padding-bottom: ${u};
  padding-top: ${d};
  position: relative;

  svg {
    fill: #fff;
  }

  figure {
    display: flex;
    height: 100%;
    margin: 0 ${u} ${u};
    overflow: hidden;
    place-content: center;
    place-items: center;
    width: 100%;

    div {
      color: rgb(167, 167, 167);
      font-size: 13px;
      padding: 0 38px;
      text-align: center;
    }

    img {
      display: ${e=>{let{$showImage:t}=e;return t?"block":"none"}};
      max-height: 100%;
      max-width: 100%;
    }
  }

  nav {
    display: flex;
    height: ${d};
    place-content: center;
    place-items: center;
    position: absolute;

    &.top {
      top: 0;
      width: 100%;

      svg {
        height: 16px;
      }
    }

    &.bottom {
      bottom: 0;
      right: 0;

      svg {
        height: 20px;
        margin-top: 2px;
      }
    }

    button {
      height: ${d};
      width: ${d};

      &:disabled {
        pointer-events: none;

        svg {
          fill: rgb(125, 125, 125);
        }
      }

      &:hover {
        background-color: rgba(75, 75, 75, 50%);
      }

      &:active {
        background-color: rgba(100, 100, 100, 50%);
      }
    }
  }
`,h=n(57631),f=n(7459),v=n(56758),p=n(50728);const g={cursor:"default",maxScale:7,minScale:1,panOnlyWhenZoomed:!0,step:.1};var w=(e,t,n)=>{const[o,a]=(0,s.useState)(),{getScale:i,reset:l,zoomIn:c,zoomOut:d,zoomToPoint:u,zoomWithWheel:m}=o||{},{processes:{[e]:w}}=(0,v.z)(),{closing:x,componentWindow:b,url:T=""}=w||{},{prependFileToTitle:L}=(0,f.Z)(e),$=(0,s.useCallback)((e=>{const{detail:{scale:t=0,x:n=0,y:s=0}={}}=e||{};if(T&&t){const{minScale:e,step:a}=g,i=t<e+a;i&&(n||s)&&window.setTimeout((()=>o?.reset()),50),x||L(i?(0,r.basename)(T):`${(0,r.basename)(T)} (${Math.floor(100*t)}%)`)}}),[x,o,L,T]),k=(0,s.useCallback)((e=>m?.(e,{step:.3})),[m]);return(0,p.Z)(b,l),(0,s.useEffect)((()=>(t&&n&&(t.addEventListener("panzoomchange",$),n.addEventListener("wheel",k)),()=>{t?.removeEventListener("panzoomchange",$),n?.removeEventListener("wheel",k)})),[n,t,$,k]),(0,s.useEffect)((()=>(t&&!o&&a((0,h.Z)(t,g)),()=>o?.destroy())),[t,o]),{reset:l,scale:i?.(),zoomIn:c,zoomOut:d,zoomToPoint:u}},x=n(55785),b=n(26724),T=n(35778),L=n(30663),$=n(64358),k=n(34254),y=n(80552),j=n(48764).Buffer;const{maxScale:z,minScale:E}=g;var C=e=>{let{id:t}=e;const{processes:{[t]:d}={},url:u}=(0,v.z)(),{componentWindow:h,closing:p=!1,url:g=""}=d||{},[C,Z]=(0,s.useState)({}),[P,S]=(0,s.useState)(!1),{prependFileToTitle:R}=(0,f.Z)(t),{readFile:M,readdir:q}=(0,b.o)(),F=(0,s.useRef)(null),O=(0,s.useRef)(null),B=(0,s.useRef)(null),{reset:H,scale:I,zoomIn:A,zoomOut:D,zoomToPoint:U}=w(t,O.current,B.current),{fullscreenElement:W,toggleFullscreen:_}=(0,y.S)(),K=(0,s.useCallback)((async()=>{let e=await M(g);const t=(0,k.RT)(g);if([".ani",".cur"].includes(t))e=await(async e=>{const t=await(0,k.iQ)(),{parseAni:o}=await n.e(396).then(n.bind(n,70396));let r=[];try{({images:r}=o(e))}catch{return e}return await Promise.all(r.map((e=>new Promise((n=>{const o=new Image,r=(0,k.YS)(j.from(e));o.addEventListener("load",(()=>{t.addFrame(o),(0,k.EK)(r),n()}),$.K7),o.src=r}))))),new Promise((e=>{t.on("finished",(t=>t.arrayBuffer().then((t=>e(j.from(t)))))).render()}))})(e);else if(".jxl"===t)e=(0,k.fv)(await(0,k.dU)(e));else if(".qoi"===t){const{decodeQoi:t}=await n.e(6600).then(n.bind(n,26600));e=t(e)}else $.M0.has(t)&&(e=(await n.e(6173).then(n.t.bind(n,66173,23))).bufferToURI(e).replace("data:image/png;base64,",""));Z((t=>{const[n]=Object.keys(t);if(n){if(n===g)return t;H?.()}return{[g]:(0,k.wB)(g,e)}})),R((0,r.basename)(g))}),[R,M,H,g]),N=(0,s.useCallback)((async e=>{let{key:n}=e;switch(n){case"ArrowRight":case"ArrowLeft":{const e=await q((0,r.dirname)(g)),o=e.indexOf((0,r.basename)(g)),s=(n,o)=>{if(-1===n)return;const a=n+(o?1:-1);if(-1===a||a===e.length)return;const i=e[a];$.lM.has((0,k.RT)(i))?u(t,(0,r.join)((0,r.dirname)(g),i)):s(a,o)};s(o,"ArrowRight"===n);break}}}),[t,q,u,g]);return(0,s.useEffect)((()=>{!g||C[g]||p||K()}),[p,K,C,g]),(0,s.useEffect)((()=>(h?.addEventListener("keydown",N),()=>h?.removeEventListener("keydown",N))),[h,N]),(0,o.jsxs)(m,{ref:F,$showImage:Boolean(C[g]&&!P),onContextMenu:k.nK,...(0,x.Z)({id:t}),children:[(0,o.jsxs)("nav",{className:"top",children:[(0,o.jsx)(L.Z,{disabled:!g||I===z||P,onClick:A,...(0,k.PS)("Zoom in"),children:(0,o.jsx)(l,{})}),(0,o.jsx)(L.Z,{disabled:!g||I===E||P,onClick:D,...(0,k.PS)("Zoom out"),children:(0,o.jsx)(c,{})})]}),(0,o.jsxs)("figure",{ref:B,...(0,T.Z)((e=>{I===E?U?.(2*E,e,{animate:!0}):H?.()})),children:[(0,o.jsx)("img",{ref:O,alt:(0,r.basename)(g,(0,r.extname)(g)),decoding:"async",loading:"eager",onError:()=>S(!0),onLoad:()=>S(!1),src:C[g],...$.h7}),P&&(0,o.jsxs)("div",{children:[(0,r.basename)(g),(0,o.jsx)("br",{}),"Sorry, Photos can't open this file because the format is currently unsupported, or the file is corrupted"]})]}),(0,o.jsx)("nav",{className:"bottom",children:(0,o.jsx)(L.Z,{disabled:!g,onClick:()=>_(F.current,"show"),...(0,k.PS)("Full-screen"),children:W===F.current?(0,o.jsx)(i,{}):(0,o.jsx)(a,{})})})]})}},55785:function(e,t,n){var o=n(1864),r=n(67294),s=n(62727),a=n(6529),i=n(42151),l=n(26724),c=n(56758),d=n(62065),u=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:h,onDragLeave:f,onDragOver:v,updatePositions:p}=e;const{url:g}=(0,c.z)(),{iconPositions:w,sortOrders:x,setIconPositions:b}=(0,d.k)(),{mkdirRecursive:T,updateFolder:L,writeFile:$}=(0,l.o)(),k=(0,r.useCallback)((async(e,t,n)=>{if(h)if(t){const r=(0,o.join)(u.Ll,e);if(await T(u.Ll),await $(r,t,!0))return n===i.v.UPDATE_URL&&g(h,r),L(u.Ll,e),(0,o.basename)(r)}else n===i.v.UPDATE_URL&&g(h,e);return""}),[h,T,L,g,$]),{openTransferDialog:y}=(0,s.Z)();return{onDragLeave:f,onDragOver:e=>{v?.(e),(0,m.nK)(e)},onDrop:e=>{if(!u.my.has((0,m.RT)(n))){if(p&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,a.p4)(e);if(0===t.length&&""===r)return;const s={x:e.clientX,y:e.clientY};let i=[];if(r){try{i=JSON.parse(r)}catch{}if(!Array.isArray(i))return;const[e]=i;if(!e)return;if(e.startsWith(n)&&(0,o.basename)(e)===(0,o.relative)(n,e))return;i=i.map((e=>(0,o.basename)(e)))}else i=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);i=i.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,o.basename)(e,(0,o.extname)(e))} (${t})${(0,o.extname)(e)}`}while(w[r]);return(0,o.basename)(r)})),(0,m.vi)(n,e.target,w,x,s,i,b)}(0,a.WG)(e,t||k,n,y,Boolean(h))}}}}},7459:function(e,t,n){var o=n(67294),r=n(56758),s=n(25804),a=n(64358);t.Z=e=>{const{title:t}=(0,r.z)(),[n]=e.split(a.CC),{title:i}=s.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,o)=>{const r=n?` - ${n}${o?` ${a.xy}`:""}`:"";t(e,`${i}${r}`)}),[e,i,t]),prependFileToTitle:(0,o.useCallback)(((n,o,r)=>{const s=n?`${o?`${a.xy} `:""}${n}${r?" ":" - "}`:"";t(e,`${s}${i}`)}),[e,i,t])}}},35778:function(e,t,n){var o=n(67294),r=n(64358);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,o.useRef)(),s=(0,o.useRef)(0),a=(0,o.useCallback)((o=>{const a=()=>{o.stopPropagation(),e(o)},i=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},l=()=>{s.current>=5&&i(),void 0===n.current?(o.target.removeEventListener("pointermove",l),s.current=0):s.current+=1};t?a():void 0===n.current?(n.current=window.setTimeout(i,r.jx.DOUBLE_CLICK),o.target.addEventListener("pointermove",l,{passive:!0})):(i(),a())}),[e,t]);return{onClick:a}}},50728:function(e,t,n){var o=n(67294);t.Z=(e,t)=>{const[n,r]=(0,o.useState)();(0,o.useEffect)((()=>{t&&r(new ResizeObserver(t))}),[t]),(0,o.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);