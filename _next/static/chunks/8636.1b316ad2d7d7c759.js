"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8636],{28636:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(85893),o=r(1864),i=r(67294);const a=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 15v2H17v15h-2V17H0v-2h15V0h2v15h15z"})}))),l=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M32 17H0v-2h32v2z"})}))),s=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M6 32v-2h18v2H6zm18.703-15.297L15 26.484l-9.703-9.781 1.406-1.406L14 22.641V0h2v22.641l7.297-7.344z"})}))),c=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30 12q0.406 0 0.773 0.156t0.641 0.43 0.43 0.641 0.156 0.773v14h-8v4h-16v-4h-8v-14q0-0.406 0.156-0.773t0.43-0.641 0.641-0.43 0.773-0.156h6v-12h16v12h6zM10 12h12v-10h-12v10zM22 22h-12v8h12v-8zM30 14h-28v12h6v-6h16v6h6v-12zM5 16q0.406 0 0.703 0.297t0.297 0.703-0.297 0.703-0.703 0.297-0.703-0.297-0.297-0.703 0.297-0.703 0.703-0.297z"})})));var d=r(10508),b=d.ZP.nav.withConfig({componentId:"sc-8d1911a-0"})`
  background-color: rgb(50, 54, 57);
  box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
  display: flex;
  height: 40px;
  position: absolute;
  top: ${e=>{let{theme:t}=e;return t.sizes.titleBar.height}}px;
  width: 100%;
  z-index: 1;

  .side-menu {
    display: flex;
    overflow: hidden;
    place-items: center;
    white-space: nowrap;
    width: 100%;

    span {
      margin-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &:first-child {
      color: #fff;
      font-size: 14px;
      margin-left: 16px;
      place-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      place-content: flex-end;
    }
  }

  button {
    border-radius: 50%;
    display: flex;
    font-size: 24px;
    height: 30px;
    place-content: center;
    place-items: center;
    width: 30px;

    &#subtract {
      margin-right: 7px;
    }

    &#add {
      margin-left: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }

    &:hover {
      background-color: rgb(66, 70, 73);
    }

    svg {
      fill: #fff;
      height: 12px;
      stroke: #fff;
      width: 12px;
    }

    &:disabled {
      background-color: initial;

      svg {
        fill: rgb(110, 112, 114);
        stroke: rgb(110, 112, 114);
      }
    }

    &#download {
      svg {
        margin-left: 1px;
        scale: 1.15;
        stroke-width: 1.75;
        transform: scale(1.25, 1);
      }
    }
  }

  ol {
    display: flex;
    flex-direction: row;
    height: 100%;
    place-content: center;
    place-items: center;
    width: 100%;

    li {
      color: #fff;
      display: flex;
      flex-direction: row;
      font-size: 14px;

      input {
        background-color: rgb(25, 27, 28);
        color: #fff;
        height: 20px;
        text-align: center;

        &:disabled {
          color: rgb(110, 112, 114);
        }
      }

      &:not(:last-child)::after {
        background-color: rgb(112, 115, 117);
        content: "";
        margin-left: 20px;
        width: 1px;
      }

      &.pages {
        letter-spacing: 1.5px;
        line-height: 20px;
        padding-right: 10px;
        width: max-content;

        input {
          margin: 0 5px;
          width: 24px;
        }
      }

      &#scale {
        display: flex;
        place-items: center;

        input {
          width: 45px;
        }
      }
    }
  }
`,g=r(7459),u=r(26724),h=r(56758),p=r(64358),m=r(34254);const x=[.25,.33,.5,.67,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5];var A=e=>{let{containerRef:t,id:r,setLoading:n,url:a}=e;const{readFile:l}=(0,u.o)(),{argument:s,processes:{[r]:c}={}}=(0,h.z)(),{libs:d=[],scale:b}=c||{},[A,w]=(0,i.useState)([]),f=(0,i.useCallback)((async(e,n)=>{const o=document.createElement("canvas"),i=o.getContext("2d",p.KU),a=await n.getPage(e);let l;if(b)l=a.getViewport({scale:b});else{const e=a.getViewport().viewBox[2],o=function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)-p.BQ;if(t>=e)return 1;const r=t/e,n=x.findIndex((e=>e>=r));return n>0?x[n-1]:1}(t.current?.clientWidth,e),{info:i}=await n.getMetadata();s(r,"scale",o),i?.Title&&s(r,"subTitle",i.Title),l=a.getViewport({scale:o})}return o.height=l.height,o.width=l.width,await a.render({canvasContext:i,viewport:l}).promise,o}),[s,t,r,b]),{prependFileToTitle:v}=(0,g.Z)(r),k=(0,i.useRef)(!1),$=(0,i.useRef)(null),j=(0,i.useCallback)((async()=>{if(window.pdfjsLib&&a&&t.current&&!k.current){k.current=!0,t.current.scrollTop=0,w([]),n(!0);const e=await window.pdfjsLib.getDocument(await l(a)).promise;s(r,"count",e.numPages),v((0,o.basename)(a)),$.current=new AbortController;for(let t=0;t<e.numPages&&!$.current.signal.aborted;t+=1){const r=await f(t+1,e);w((e=>[...e,r]))}k.current=!1}n(!1)}),[s,t,r,v,l,f,n,a]);(0,i.useEffect)((()=>{(0,m.mb)(d).then((()=>{window.pdfjsLib&&(window.pdfjsLib.GlobalWorkerOptions.workerSrc="/Program Files/PDF.js/pdf.worker.js",j())}))}),[d,j]),(0,i.useEffect)((()=>{if(A.length>0){const e=t.current?.querySelector("#pages");e&&([...e.children].forEach((e=>e.remove())),A.forEach(((n,o)=>{const i=document.createElement("li"),a=new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;t&&s(r,"page",o+1)}))),{root:t.current,threshold:.4});i.append(n),e.append(i),a.observe(i)})))}}),[s,t,r,A]),(0,i.useEffect)((()=>()=>$.current?.abort()),[])},w=r(30663),f=e=>{let{id:t}=e;const{readFile:i}=(0,u.o)(),{argument:d,processes:{[t]:g}={}}=(0,h.z)(),{count:A=0,page:f=1,componentWindow:v,scale:k=1,subTitle:$="",url:j=""}=g||{};return(0,n.jsxs)(b,{children:[(0,n.jsx)("div",{className:"side-menu",children:(0,n.jsx)("span",{children:$||(0,o.basename)(j)})}),(0,n.jsxs)("ol",{children:[0!==A&&(0,n.jsxs)("li",{className:"pages",children:[(0,n.jsx)("input",{enterKeyHint:"go",onChange:e=>{let{target:r}=e;const n=Number(r.value);Number.isNaN(n)||n<1||n>A||(d(t,"page",n),v?.querySelectorAll("li")[n-1].scrollIntoView())},value:f})," ","/ ",A]}),(0,n.jsxs)("li",{id:"scale",children:[(0,n.jsx)(w.Z,{disabled:.25===k||0===A,id:"subtract",onClick:()=>d(t,"scale",x[x.indexOf(k)-1]),...(0,m.PS)("Zoom out"),children:(0,n.jsx)(l,{})}),(0,n.jsx)("input",{disabled:0===A,enterKeyHint:"done",onChange:e=>{let{target:r}=e;if(!r.value.endsWith("%")||r.value.length>4||r.value.length<2)return;const n=Number(r.value.replace("%",""))/100;Number.isNaN(n)||n>x[x.length-1]||n<x[0]||d(t,"scale",x[x.findIndex((e=>e>=n))])},value:`${Math.round(100*k)}%`}),(0,n.jsx)(w.Z,{disabled:5===k||0===A,id:"add",onClick:()=>d(t,"scale",x[x.indexOf(k)+1]),...(0,m.PS)("Zoom in"),children:(0,n.jsx)(a,{})})]})]}),(0,n.jsxs)("div",{className:"side-menu",children:[(0,n.jsx)(w.Z,{disabled:0===A,id:"download",onClick:async()=>{const e=document.createElement("a");e.href=(0,m.YS)(await i(j)),e.download=(0,o.basename)(j),e.click()},...(0,m.PS)("Download"),children:(0,n.jsx)(s,{})}),(0,n.jsx)(w.Z,{disabled:0===A,onClick:async()=>{(0,m.G6)()&&(window.InstallTrigger=!0,setTimeout((()=>{delete window.InstallTrigger}),5*p.i2));const{default:e}=await r.e(8607).then(r.t.bind(r,68607,23));e({base64:!0,printable:(await i(j)).toString("base64"),type:"pdf"})},...(0,m.PS)("Print"),children:(0,n.jsx)(c,{})})]})]})},v=r(38060),k=d.ZP.div.withConfig({componentId:"sc-943551f4-0"})`
  ${(0,v.Z)()};

  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  top: 40px;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 40px)`}};
  }

  canvas {
    box-shadow: 0 0 5px hsla(0, 0%, 10%, 50%);
    margin: 4px 4px 0;
  }
`,$=r(2742),j=e=>{let{id:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($.Z,{StyledComponent:k,id:t,useHook:A,children:(0,n.jsx)("ol",{id:"pages"})}),(0,n.jsx)(f,{id:t})]})}},2742:function(e,t,r){var n=r(85893),o=r(5152),i=r.n(o),a=r(67294),l=r(56758),s=r(55785);const c=i()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}});t.Z=(0,a.memo)((e=>{let{id:t,useHook:r,StyledComponent:o,children:i}=e;const{processes:{[t]:{url:d=""}={}}}=(0,l.z)(),b=(0,a.useRef)(null),[g,u]=(0,a.useState)(!0),h=(0,a.useMemo)((()=>({contain:"strict",visibility:g?"hidden":"visible"})),[g]);return r({containerRef:b,id:t,loading:g,setLoading:u,url:d}),(0,n.jsxs)(n.Fragment,{children:[g&&(0,n.jsx)(c,{}),(0,n.jsx)(o,{ref:b,style:h,...(0,s.Z)({id:t}),children:i})]})}))},55785:function(e,t,r){var n=r(1864),o=r(67294),i=r(62727),a=r(6529),l=r(42151),s=r(26724),c=r(56758),d=r(62065),b=r(64358),g=r(34254);t.Z=e=>{let{callback:t,directory:r=b.Ll,id:u,onDragLeave:h,onDragOver:p,updatePositions:m}=e;const{url:x}=(0,c.z)(),{iconPositions:A,sortOrders:w,setIconPositions:f}=(0,d.k)(),{mkdirRecursive:v,updateFolder:k,writeFile:$}=(0,s.o)(),j=(0,o.useCallback)((async(e,t,r)=>{if(u)if(t){const o=(0,n.join)(b.Ll,e);if(await v(b.Ll),await $(o,t,!0))return r===l.v.UPDATE_URL&&x(u,o),k(b.Ll,e),(0,n.basename)(o)}else r===l.v.UPDATE_URL&&x(u,e);return""}),[u,v,k,x,$]),{openTransferDialog:y}=(0,i.Z)();return{onDragLeave:h,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:e=>{if(!b.my.has((0,g.RT)(r))){if(m&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,a.p4)(e);if(0===t.length&&""===o)return;const i={x:e.clientX,y:e.clientY};let l=[];if(o){try{l=JSON.parse(o)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(r)&&(0,n.basename)(e)===(0,n.relative)(r,e))return;l=l.map((e=>(0,n.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!A[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,n.basename)(e,(0,n.extname)(e))} (${t})${(0,n.extname)(e)}`}while(A[o]);return(0,n.basename)(o)})),(0,g.vi)(r,e.target,A,w,i,l,f)}(0,a.WG)(e,t||j,r,y,Boolean(u))}}}}},7459:function(e,t,r){var n=r(67294),o=r(56758),i=r(25804),a=r(64358);t.Z=e=>{const{title:t}=(0,o.z)(),[r]=e.split(a.CC),{title:l}=i.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,n)=>{const o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,n.useCallback)(((r,n,o)=>{const i=r?`${n?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t])}}},38060:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(10508);var o=r(64358);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${i[a].thumb} ${i[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${i[a].blendMode};
  }
`}}}]);