"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9342],{89342:function(e,n,r){r.r(n),r.d(n,{default:function(){return c}});var t=r(85893);var i=r(10508).ZP.div.withConfig({componentId:"sc-6b668ba8-0"})`
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
`,a=r(67294),o=r(56758),s=r(34254);const d={autoScale:!0,defaults:{displaySize:100,theme:"Monokai Pro",transparency:0},useShadowDom:!1};var l=e=>{let{containerRef:n,id:r,loading:t,setLoading:i,url:l}=e;const{processes:{[r]:{closing:u=!1,libs:c=[]}={}}={}}=(0,o.z)();(0,a.useEffect)((()=>{(0,s.mb)(c).then((()=>{if(window.eruda&&n.current){const e=n.current.querySelector("div"),r=(0,s.E9)();e&&(window.eruda.init({...d,container:e}),window.eruda.remove("info"),window.eruda.remove("snippets"),r<395&&window.eruda.remove("resources"),r<321&&window.eruda.remove("sources"),window.eruda.show(),i(!1))}}))}),[n,c,i]),(0,a.useEffect)((()=>(window.eruda&&l&&!t&&!u&&window.eruda.show(l),()=>{u&&window.eruda?.destroy()})),[u,t,l])},u=r(2742);var c=e=>{let{id:n}=e;return(0,t.jsx)(u.Z,{StyledComponent:i,id:n,useHook:l,children:(0,t.jsx)("div",{})})}},2742:function(e,n,r){var t=r(85893),i=r(5152),a=r.n(i),o=r(67294),s=r(56758),d=r(55785);const l=a()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}}),u=e=>{let{id:n,useHook:r,StyledComponent:i,children:a}=e;const{processes:{[n]:{url:u=""}={}}}=(0,s.z)(),c=(0,o.useRef)(null),[f,m]=(0,o.useState)(!0),w=(0,o.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return r({containerRef:c,id:n,loading:f,setLoading:m,url:u}),(0,t.jsxs)(t.Fragment,{children:[f&&(0,t.jsx)(l,{}),(0,t.jsx)(i,{ref:c,style:w,...(0,d.Z)({id:n}),children:a})]})};n.Z=(0,o.memo)(u)},55785:function(e,n,r){var t=r(1864),i=r(67294),a=r(62727),o=r(6529),s=r(42151),d=r(26724),l=r(56758),u=r(62065),c=r(64358),f=r(34254);n.Z=e=>{let{callback:n,directory:r=c.Ll,id:m,onDragLeave:w,onDragOver:p,updatePositions:v}=e;const{url:h}=(0,l.z)(),{iconPositions:b,sortOrders:y,setIconPositions:g}=(0,u.k)(),{mkdirRecursive:k,updateFolder:L,writeFile:x}=(0,d.o)(),D=(0,i.useCallback)((async(e,n,r)=>{if(m)if(n){const i=(0,t.join)(c.Ll,e);if(await k(c.Ll),await x(i,n,!0))return r===s.v.UPDATE_URL&&h(m,i),L(c.Ll,e),(0,t.basename)(i)}else r===s.v.UPDATE_URL&&h(m,e);return""}),[m,k,L,h,x]),{openTransferDialog:E}=(0,a.Z)();return{onDragLeave:w,onDragOver:e=>{p?.(e),(0,f.nK)(e)},onDrop:e=>{if(!c.my.has((0,f.RT)(r))){if(v&&e.target instanceof HTMLElement){const{files:n,text:i}=(0,o.p4)(e);if(0===n.length&&""===i)return;const a={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(r)&&(0,t.basename)(e)===(0,t.relative)(r,e))return;s=s.map((e=>(0,t.basename)(e)))}else s=n instanceof FileList?[...n].map((e=>e.name)):[...n].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!b[`${r}/${e}`])return e;let n=0,i="";do{n+=1,i=`${r}/${(0,t.basename)(e,(0,t.extname)(e))} (${n})${(0,t.extname)(e)}`}while(b[i]);return(0,t.basename)(i)})),(0,f.vi)(r,e.target,b,y,a,s,g)}(0,o.WG)(e,n||D,r,E,Boolean(m))}}}}}}]);