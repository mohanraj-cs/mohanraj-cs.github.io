"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9075],{19075:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(85893),i=n(67294),o=n(71183),s=n(10508),a=n(57637),c=n(64358);var l=(0,s.ZP)(o.m.div).withConfig({componentId:"sc-3a3ebe97-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  bottom: ${c.bK}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  transform: ${e=>{let{$offsetX:t}=e;return t?`translateX(${t}px)`:void 0}};

  ${a.Z}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.activeForeground}};
    }
  }

  img {
    height: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.height}}px;
    margin: ${e=>{let{theme:t}=e;return t.sizes.taskbar.entry.peekImage.margin}}px;
    max-height: ${c.yM}px;
    max-width: ${c.yM}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20);
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }
`;var u=()=>{const{sizes:{taskbar:e}}=(0,s.Fg)(),t=e.entry.peekImage.height+2*e.entry.peekImage.margin;return{animate:"active",exit:"initial",initial:"initial",transition:{duration:c.Nb.WINDOW,ease:"easeInOut"},variants:{active:{height:t,opacity:1},initial:{height:0,opacity:0}}}},h=n(56758),d=n(34254);const m=async(e,t,n)=>{if(!t.current)return;const r=()=>window.requestAnimationFrame((()=>m(e,t,n))),i=await(0,d.mZ)();let o;try{o=await(i?.toCanvas(e,{...e.clientWidth>c.yM&&{canvasHeight:Math.round(c.yM/e.clientWidth*e.clientHeight),canvasWidth:c.yM},filter:e=>!(e instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0"}}))}catch{}if(o&&o.width>0&&o.height>0)if((0,d.H5)(o)){const e=new Image,i=o.toDataURL();e.addEventListener("load",(()=>{t.current&&(n(i),window.setTimeout(r,c.i2/15))}),c.K7),e.src=i}else r()};var g=e=>{const{processes:{[e]:t}}=(0,h.z)(),{peekElement:n,componentWindow:r}=t||{},o=(0,i.useRef)(),[s,a]=(0,i.useState)(""),l=(0,i.useRef)(!0);return(0,i.useEffect)((()=>{const e=n||r;return!o.current&&e&&(o.current=window.setTimeout((()=>window.requestAnimationFrame((()=>m(e,l,a)))),document.querySelector(".peekWindow")?0:c.i2/2),l.current=!0),()=>{o.current&&(clearTimeout(o.current),o.current=void 0),l.current=!1}}),[r,n]),s},w=n(25420),p=n(84563),v=n(62065),x=n(30663);const f=e=>{let{id:t}=e;const{minimize:n,processes:{[t]:{minimized:o=!1,title:s=t}={}}}=(0,h.z)(),{setForegroundId:a}=(0,v.k)(),{onClose:m}=(0,w.Z)(t),[f,b]=(0,i.useState)(0),k=g(t),y=u(),z=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{if(k){const{left:e=0,right:t=0}=z.current?.getBoundingClientRect()||{},n=(0,d.E9)();e<0?b(Math.abs(e)):t>n&&b(n-t)}}),[k]),k?(0,r.jsxs)(l,{ref:z,$offsetX:f,className:"peekWindow",onClick:()=>{o&&n(t),a(t)},...y,...c.LL,children:[(0,r.jsx)("img",{alt:s,decoding:"async",loading:"eager",src:k,...c.h7}),(0,r.jsx)(x.Z,{onClick:m,...(0,d.PS)("Close"),children:(0,r.jsx)(p.Tw,{})})]}):null};var b=(0,i.memo)(f)},84563:function(e,t,n){n.d(t,{J6:function(){return a},Tw:function(){return c},bJ:function(){return s},dO:function(){return o}});var r=n(85893),i=n(67294);const o=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 1",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0h10v1H0z"})}))),s=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 0v10h10V0H0zm1 1h8v8H1V1z"})}))),a=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z"})}))),c=(0,i.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M10.2.7L9.5 0 5.1 4.4.7 0 0 .7l4.4 4.4L0 9.5l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4z"})})))}}]);