"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3715],{73715:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var i=n(85893);var a=n(10508).ZP.div.withConfig({componentId:"sc-aa74e590-0"})`
  height: calc(100% - 30px) !important;
  width: 100% !important;

  canvas {
    height: calc(100% + 12px) !important;
    width: 100% !important;
  }
`,o=n(67294),r=n(56758),s=n(64358),l=n(34254);var c=e=>{let{containerRef:t,id:n,setLoading:i}=e;const{processes:{[n]:{libs:a=[]}={}}={}}=(0,r.z)(),[c,u]=(0,o.useState)();(0,o.useEffect)((()=>{const e=t.current?.querySelector("canvas");e instanceof HTMLCanvasElement&&(window.Module={canvas:e,postRun:()=>i(!1)},u(e))}),[t,i]),(0,o.useEffect)((()=>(c&&setTimeout((()=>{const{height:e,width:n}=t.current?.getBoundingClientRect()||{};e&&n&&(c.style.height=`${e}px`,c.style.width=`${n}px`,(0,l.mb)(a,void 0,!!window.Module.canvas))}),s.jx.WINDOW),()=>{c&&window.Module&&window.Module.SDL2?.audioContext.close()})),[c,t,a])},u=n(2742);var d=e=>{let{id:t}=e;return(0,i.jsx)(u.Z,{StyledComponent:a,id:t,useHook:c,children:(0,i.jsx)("canvas",{id:"canvas",onContextMenu:l.nK})})}},2742:function(e,t,n){var i=n(85893),a=n(5152),o=n.n(a),r=n(67294),s=n(56758),l=n(55785);const c=o()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}}),u=e=>{let{id:t,useHook:n,StyledComponent:a,children:o}=e;const{processes:{[t]:{url:u=""}={}}}=(0,s.z)(),d=(0,r.useRef)(null),[f,m]=(0,r.useState)(!0),p=(0,r.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n({containerRef:d,id:t,loading:f,setLoading:m,url:u}),(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)(c,{}),(0,i.jsx)(a,{ref:d,style:p,...(0,l.Z)({id:t}),children:o})]})};t.Z=(0,r.memo)(u)},55785:function(e,t,n){var i=n(1864),a=n(67294),o=n(62727),r=n(6529),s=n(42151),l=n(26724),c=n(56758),u=n(62065),d=n(64358),f=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:m,onDragLeave:p,onDragOver:h,updatePositions:v}=e;const{url:g}=(0,c.z)(),{iconPositions:w,sortOrders:b,setIconPositions:x}=(0,u.k)(),{mkdirRecursive:y,updateFolder:L,writeFile:k}=(0,l.o)(),C=(0,a.useCallback)((async(e,t,n)=>{if(m)if(t){const a=(0,i.join)(d.Ll,e);if(await y(d.Ll),await k(a,t,!0))return n===s.v.UPDATE_URL&&g(m,a),L(d.Ll,e),(0,i.basename)(a)}else n===s.v.UPDATE_URL&&g(m,e);return""}),[m,y,L,g,k]),{openTransferDialog:D}=(0,o.Z)();return{onDragLeave:p,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!d.my.has((0,f.RT)(n))){if(v&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,r.p4)(e);if(0===t.length&&""===a)return;const o={x:e.clientX,y:e.clientY};let s=[];if(a){try{s=JSON.parse(a)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,i.basename)(e)===(0,i.relative)(n,e))return;s=s.map((e=>(0,i.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!w[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,i.basename)(e,(0,i.extname)(e))} (${t})${(0,i.extname)(e)}`}while(w[a]);return(0,i.basename)(a)})),(0,f.vi)(n,e.target,w,b,o,s,x)}(0,r.WG)(e,t||C,n,D,Boolean(m))}}}}}}]);