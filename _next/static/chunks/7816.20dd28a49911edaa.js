"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7816],{67816:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(85893);var a=n(10508).ZP.div.withConfig({componentId:"sc-1e4b8b1d-0"})`
  height: 100%;
  width: 100%;

  &.drop {
    &::before {
      color: #ffad33;
      content: "Drop SWF/SPL file here";
      display: flex;
      font-size: 16px;
      font-weight: 600;
      height: 100%;
      left: 0;
      place-content: center;
      place-items: center;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  ruffle-player {
    height: 100%;
    width: 100%;
  }
`,i=n(1864),o=n(67294),l=n(7459),s=n(26724),c=n(56758),u=n(34254);var d=e=>{let{containerRef:t,id:n,setLoading:r,url:a}=e;const{linkElement:d,processes:{[n]:{libs:f=[]}={}}={}}=(0,c.z)(),[p,m]=(0,o.useState)(),{appendFileToTitle:h}=(0,l.Z)(n),{readFile:b}=(0,s.o)(),y=(0,o.useCallback)((async()=>{t.current?.classList.remove("drop");try{await(p?.load({data:await b(a)}))}catch{}h((0,i.basename)(a,(0,i.extname)(a)))}),[h,t,p,b,a]);(0,o.useEffect)((()=>{(0,u.mb)(f).then((()=>{window.RufflePlayer&&(window.RufflePlayer.config={allowScriptAccess:!1,autoplay:"on",backgroundColor:"#000000",letterbox:"on",polyfills:!1,preloader:!1,unmuteOverlay:"hidden"},m(window.RufflePlayer.newest().createPlayer()),a||t.current?.classList.add("drop"))}))}),[t,f,a]),(0,o.useEffect)((()=>(t.current&&p&&(t.current.append(p),d(n,"peekElement",p),r(!1)),()=>p?.remove())),[t,n,d,p,r]),(0,o.useEffect)((()=>{t.current&&p&&a&&y()}),[t,y,p,a])},f=n(2742);var p=e=>{let{id:t}=e;return(0,r.jsx)(f.Z,{StyledComponent:a,id:t,useHook:d})}},2742:function(e,t,n){var r=n(85893),a=n(5152),i=n.n(a),o=n(67294),l=n(56758),s=n(55785);const c=i()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}}),u=e=>{let{id:t,useHook:n,StyledComponent:a,children:i}=e;const{processes:{[t]:{url:u=""}={}}}=(0,l.z)(),d=(0,o.useRef)(null),[f,p]=(0,o.useState)(!0),m=(0,o.useMemo)((()=>({contain:"strict",visibility:f?"hidden":"visible"})),[f]);return n({containerRef:d,id:t,loading:f,setLoading:p,url:u}),(0,r.jsxs)(r.Fragment,{children:[f&&(0,r.jsx)(c,{}),(0,r.jsx)(a,{ref:d,style:m,...(0,s.Z)({id:t}),children:i})]})};t.Z=(0,o.memo)(u)},55785:function(e,t,n){var r=n(1864),a=n(67294),i=n(62727),o=n(6529),l=n(42151),s=n(26724),c=n(56758),u=n(62065),d=n(64358),f=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:h,updatePositions:b}=e;const{url:y}=(0,c.z)(),{iconPositions:v,sortOrders:w,setIconPositions:g}=(0,u.k)(),{mkdirRecursive:k,updateFolder:$,writeFile:L}=(0,s.o)(),x=(0,a.useCallback)((async(e,t,n)=>{if(p)if(t){const a=(0,r.join)(d.Ll,e);if(await k(d.Ll),await L(a,t,!0))return n===l.v.UPDATE_URL&&y(p,a),$(d.Ll,e),(0,r.basename)(a)}else n===l.v.UPDATE_URL&&y(p,e);return""}),[p,k,$,y,L]),{openTransferDialog:C}=(0,i.Z)();return{onDragLeave:m,onDragOver:e=>{h?.(e),(0,f.nK)(e)},onDrop:e=>{if(!d.my.has((0,f.RT)(n))){if(b&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,o.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let l=[];if(a){try{l=JSON.parse(a)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(n)&&(0,r.basename)(e)===(0,r.relative)(n,e))return;l=l.map((e=>(0,r.basename)(e)))}else l=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,r.basename)(e,(0,r.extname)(e))} (${t})${(0,r.extname)(e)}`}while(v[a]);return(0,r.basename)(a)})),(0,f.vi)(n,e.target,v,w,i,l,g)}(0,o.WG)(e,t||x,n,C,Boolean(p))}}}}},7459:function(e,t,n){var r=n(67294),a=n(56758),i=n(25804),o=n(64358);t.Z=e=>{const{title:t}=(0,a.z)(),[n]=e.split(o.CC),{title:l}=i.Z[n]||{};return{appendFileToTitle:(0,r.useCallback)(((n,r)=>{const a=n?` - ${n}${r?` ${o.xy}`:""}`:"";t(e,`${l}${a}`)}),[e,l,t]),prependFileToTitle:(0,r.useCallback)(((n,r,a)=>{const i=n?`${r?`${o.xy} `:""}${n}${a?" ":" - "}`:"";t(e,`${i}${l}`)}),[e,l,t])}}}}]);