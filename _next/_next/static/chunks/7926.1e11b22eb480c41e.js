"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7926],{27926:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(85893),o=r(10508),i=r(38060);var a=o.ZP.div.withConfig({componentId:"sc-c7345c5b-0"})`
  canvas[style*="cursor: none;"] {
    cursor: default !important;
  }

  canvas {
    height: 100%;
    width: 100%;
  }

  ol {
    ${(0,i.Z)()};
    background-color: rgb(32, 33, 36);
    color: rgb(232, 234, 237);
    font-family: "Lucida Grande", sans-serif, monospace;
    font-size: 13px;
    height: 100%;
    line-height: 19px;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100%;

    li {
      border-bottom: 1px solid rgb(58, 58, 58);
      padding: 0 25px;

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`,l=r(1864),c=r(67294),s=r(25804);const{height:b=0,width:u=0}=s.Z.BoxedWine.defaultSize||{},d={"inline-default-ondemand-root-overlay":"/wine1.7.55-v8-min-online",ondemand:"root",resolution:`${u}x${b}`,root:"/fullWine1.7.55-v8"},g=e=>[...Object.entries(d),...Object.entries(e)].map((e=>{let[t,r]=e;return`${t}=${r}`})).join("&");var A=r(7459),m=r(26724),p=r(56758),h=r(34254),k=r(48764).Buffer;var v=e=>{let{containerRef:t,id:n,setLoading:o,url:i}=e;const{appendFileToTitle:a}=(0,A.Z)(n),{processes:{[n]:{libs:s=[]}={}}={}}=(0,p.z)(),{readFile:b}=(0,m.o)(),u=(0,c.useRef)(),d=(0,c.useRef)(),v=(0,c.useCallback)((async()=>{let e={},n=i?await b(i):k.from("");const c=(0,h.RT)(i),u=".exe"===c,{zipAsync:A}=await r.e(1264).then(r.bind(r,91264));let m=(0,l.basename)(i,c);const p=async()=>k.from(await A({[(0,l.basename)(i)]:n}));if(u)n=await p();else if(i){const{unzip:e}=await r.e(1264).then(r.bind(r,91264));try{m=(e=>{const t=Object.entries(e),[[r]=[]]=t.filter((e=>{let[t]=e;return t.toLowerCase().endsWith(".exe")})).sort(((e,t)=>{let[,r]=e,[,n]=t;return n.length-r.length}));return r})(await e(n))||""}catch{n=await p(),m=""}}e={...n?{"app-payload":n.toString("base64")}:{},...m?{p:m}:{}},d.current||(t.current?.prepend(document.createElement("ol")),d.current=window.setInterval((()=>{(0,h.H5)(t.current?.querySelector("canvas"))&&(clearInterval(d.current),d.current=void 0,t.current?.querySelector("ol")?.remove())}),100)),window.BoxedWineConfig={...window.BoxedWineConfig,consoleLog:e=>{const r=t.current?.querySelector("ol");if(r){const t=document.createElement("li");t.textContent=e,r.append(t),r.scrollTop=r.scrollHeight,setTimeout((()=>r.scrollTo(0,r.scrollHeight)),10)}},urlParams:g(e)},(0,h.mb)(s).then((()=>{i&&a(m||(0,l.basename)(i));try{window.BoxedWineShell((()=>o(!1)))}catch{}}))}),[a,t,s,b,o,i]);(0,c.useEffect)((()=>(u.current!==i&&(u.current=i,v()),()=>{window.BoxedWineConfig={...window.BoxedWineConfig,isRunning:!1}})),[v,i])},f=r(2742);var w=e=>{let{id:t}=e;return(0,n.jsx)(f.Z,{StyledComponent:a,id:t,useHook:v,children:(0,n.jsx)("canvas",{id:"boxedWineCanvas",onContextMenu:h.nK})})}},2742:function(e,t,r){var n=r(85893),o=r(5152),i=r.n(o),a=r(67294),l=r(56758),c=r(55785);const s=i()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}}),b=e=>{let{id:t,useHook:r,StyledComponent:o,children:i}=e;const{processes:{[t]:{url:b=""}={}}}=(0,l.z)(),u=(0,a.useRef)(null),[d,g]=(0,a.useState)(!0),A=(0,a.useMemo)((()=>({contain:"strict",visibility:d?"hidden":"visible"})),[d]);return r({containerRef:u,id:t,loading:d,setLoading:g,url:b}),(0,n.jsxs)(n.Fragment,{children:[d&&(0,n.jsx)(s,{}),(0,n.jsx)(o,{ref:u,style:A,...(0,c.Z)({id:t}),children:i})]})};t.Z=(0,a.memo)(b)},55785:function(e,t,r){var n=r(1864),o=r(67294),i=r(62727),a=r(6529),l=r(42151),c=r(26724),s=r(56758),b=r(62065),u=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:g,onDragLeave:A,onDragOver:m,updatePositions:p}=e;const{url:h}=(0,s.z)(),{iconPositions:k,sortOrders:v,setIconPositions:f}=(0,b.k)(),{mkdirRecursive:w,updateFolder:x,writeFile:$}=(0,c.o)(),y=(0,o.useCallback)((async(e,t,r)=>{if(g)if(t){const o=(0,n.join)(u.Ll,e);if(await w(u.Ll),await $(o,t,!0))return r===l.v.UPDATE_URL&&h(g,o),x(u.Ll,e),(0,n.basename)(o)}else r===l.v.UPDATE_URL&&h(g,e);return""}),[g,w,x,h,$]),{openTransferDialog:C}=(0,i.Z)();return{onDragLeave:A,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(!u.my.has((0,d.RT)(r))){if(p&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,a.p4)(e);if(0===t.length&&""===o)return;const i={x:e.clientX,y:e.clientY};let l=[];if(o){try{l=JSON.parse(o)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(r)&&(0,n.basename)(e)===(0,n.relative)(r,e))return;l=l.map((e=>(0,n.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!k[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,n.basename)(e,(0,n.extname)(e))} (${t})${(0,n.extname)(e)}`}while(k[o]);return(0,n.basename)(o)})),(0,d.vi)(r,e.target,k,v,i,l,f)}(0,a.WG)(e,t||y,r,C,Boolean(g))}}}}},7459:function(e,t,r){var n=r(67294),o=r(56758),i=r(25804),a=r(64358);t.Z=e=>{const{title:t}=(0,o.z)(),[r]=e.split(a.CC),{title:l}=i.Z[r]||{};return{appendFileToTitle:(0,n.useCallback)(((r,n)=>{const o=r?` - ${r}${n?` ${a.xy}`:""}`:"";t(e,`${l}${o}`)}),[e,l,t]),prependFileToTitle:(0,n.useCallback)(((r,n,o)=>{const i=r?`${n?`${a.xy} `:""}${r}${o?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t])}}},38060:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(10508);const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC";var c=r(64358);const s={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,b=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${s[b].thumb} ${s[b].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${s[b].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${s[b].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${s[b].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${s[b].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${s[b].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${s[b].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${s[b].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${s[b].buttonHover};
    }

    &:active {
      background-color: ${s[b].active};
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
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
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
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${l});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${s[b].blendMode};
  }
`}}}]);