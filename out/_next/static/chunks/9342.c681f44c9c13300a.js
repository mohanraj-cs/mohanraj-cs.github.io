"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9342],{89342:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var r=t(85893),i=t(10508).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
  .eruda-container {
    position: relative !important;
    z-index: 1 !important;

    .eruda-dev-tools {
      height: 100% !important;
      opacity: 100% !important;

      .eruda-nav-bar-container {
        .eruda-nav-bar {
          overflow: hidden;
        }
      }
    }

    .eruda-entry-btn {
      display: none;
    }
  }
`,a=t(67294),o=t(56758),s=t(34254);const d={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var l=e=>{let{containerRef:n,id:t,loading:r,setLoading:i,url:l}=e;const{processes:{[t]:{closing:u=!1,libs:c=[]}={}}={}}=(0,o.z)();(0,a.useEffect)((()=>{(0,s.mb)(c).then((()=>{if(window.eruda&&n.current){const e=n.current.querySelector("div"),t=(0,s.E9)();e&&(window.eruda.init({...d,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),t<395&&window.eruda.remove("resources"),t<321&&window.eruda.remove("sources"),window.eruda.show(),i(!1))}}))}),[n,c,i]),(0,a.useEffect)((()=>(window.eruda&&l&&!r&&!u&&window.eruda.show(l),()=>{u&&window.eruda?.destroy()})),[u,r,l])},u=t(2742),c=e=>{let{id:n}=e;return(0,r.jsx)(u.Z,{StyledComponent:i,id:n,useHook:l,children:(0,r.jsx)("div",{})})}},2742:function(e,n,t){var r=t(85893),i=t(5152),a=t.n(i),o=t(67294),s=t(56758),d=t(55785);const l=a()((()=>t.e(6753).then(t.bind(t,26753))),{loadableGenerated:{webpack:()=>[26753]}});n.Z=(0,o.memo)((e=>{let{id:n,useHook:t,StyledComponent:i,children:a}=e;const{processes:{[n]:{url:u=""}={}}}=(0,s.z)(),c=(0,o.useRef)(null),[f,m]=(0,o.useState)(!0),w=(0,o.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return t({containerRef:c,id:n,loading:f,setLoading:m,url:u}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(l,{}),(0,r.jsx)(i,{ref:c,style:w,...(0,d.Z)({id:n}),children:a})]})}))},55785:function(e,n,t){var r=t(1864),i=t(67294),a=t(62727),o=t(6529),s=t(42151),d=t(26724),l=t(56758),u=t(62065),c=t(64358),f=t(34254);n.Z=e=>{let{callback:n,directory:t=c.Ll,id:m,onDragLeave:w,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,l.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,u.k)(),{mkdirRecursive:k,updateFolder:L,writeFile:x}=(0,d.o)(),D=(0,i.useCallback)((async(e,n,t)=>{if(m)if(n){const i=(0,r.join)(c.Ll,e);if(await k(c.Ll),await x(i,n,!0))return t===s.v.UPDATE_URL&&h(m,i),L(c.Ll,e),(0,r.basename)(i)}else t===s.v.UPDATE_URL&&h(m,e);return""}),[m,k,L,h,x]),{openTransferDialog:E}=(0,a.Z)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(!c.my.has((0,f.RT)(t))){if(v&&e.target instanceof HTMLElement){const{files:n,text:i}=(0,o.p4)(e);if(0===n.length&&""===i)return;const a={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(t)&&(0,r.basename)(e)===(0,r.relative)(t,e))return;s=s.map((e=>(0,r.basename)(e)))}else s=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!b[`${t}/${e}`])return e;let n=0,i="";do{n+=1,i=`${t}/${(0,r.basename)(e,(0,r.extname)(e))} (${n})${(0,r.extname)(e)}`}while(b[i]);return(0,r.basename)(i)})),(0,f.vi)(t,e.target,b,y,a,s,g)}(0,o.WG)(e,n||D,t,E,Boolean(m))}}}}}}]);