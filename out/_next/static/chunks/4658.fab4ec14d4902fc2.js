"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4658,6753],{34658:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(85893),i=n(1864),o=n(67294),r=n(10508).ZP.div.withConfig({componentId:"sc-f808b011-0"})`
  iframe {
    opacity: ${e=>{let{$loaded:t}=e;return t?"100%":"0%"}};
    transition: opacity 0.25s ease-in;
  }

  .loading {
    &::before {
      color: #fff;
      font-weight: 500;
      mix-blend-mode: normal;
      text-shadow: 1px 2px 3px rgba(0, 0, 0, 50%);
    }
  }
`,s=n(26753),l=n(55785),c=n(7459),f=n(26724),d=n(56758),u=n(62065),p=n(64358),m=n(48764).Buffer,g=e=>{let{id:t}=e;const{closeWithTransition:n,processes:{[t]:{libs:[g=""]=[],url:w=""}={}}={}}=(0,d.z)(),{createPath:h,exists:b,readFile:y,updateFolder:v,writeFile:$}=(0,f.o)(),{foregroundId:k,setForegroundId:x,setWallpaper:F}=(0,u.k)(),L=(0,o.useRef)(null),[T,D]=(0,o.useState)(!1),[E,_]=(0,o.useState)(),{prependFileToTitle:C}=(0,c.Z)(t),j=(0,o.useCallback)((e=>t=>{const n=(0,i.join)(p.dA,"wallpaper.png");t.toBlob((async t=>{await $(n,m.from(await(t?.arrayBuffer())),!0),F(n,e)}))}),[F,$]),{onDragOver:B,onDrop:P}=(0,l.Z)({id:t});return(0,o.useEffect)((()=>{C("Untitled")}),[C]),(0,o.useEffect)((()=>{k!==t&&L.current?.contentWindow?.addEventListener("click",(()=>x(t)),p.K7)}),[k,t,x]),(0,o.useEffect)((()=>{const{contentWindow:e}=L.current||{};if(T&&e&&!E){const a=e,o=a.systemHooks.showOpenFileDialog,r=a.file_new;_(a),a.file_new=()=>{C("Untitled"),r()},a.systemHooks.setWallpaperTiled=j("tile"),a.systemHooks.setWallpaperCentered=j("center"),a.systemHooks.showOpenFileDialog=async e=>{const{file:t}=await o(e);return C(t.name),{file:t}},a.close=()=>n(t),a.storage_quota_exceeded=()=>{},a.systemHooks.showSaveFileDialog=async e=>{let{defaultFileName:t,getBlob:n}=e;return v(p.Ll,await h(`${t}.png`,p.Ll,m.from(await(await n("image/png")).arrayBuffer())))},a.systemHooks.writeBlobToHandle=async(e,t)=>{await b(e)&&(await $(e,m.from(await t.arrayBuffer()),!0),v((0,i.dirname)(e),(0,i.basename)(e)))},e.addEventListener("dragover",B),e.addEventListener("drop",P)}}),[n,h,b,t,E,T,B,P,C,j,v,$]),(0,o.useEffect)((()=>{E&&w&&y(w).then((e=>{const t=E.onunhandledrejection;E.onunhandledrejection=e=>{t?.(e),"either options.data or options.file or options.filePath must be passed"===e?.reason?.message&&C("Untitled")},E.open_from_file(new File([e],w),w),C((0,i.basename)(w))}))}),[E,C,y,w]),(0,a.jsxs)(r,{$loaded:T,children:[!T&&(0,a.jsx)(s.default,{className:"loading"}),(0,a.jsx)("iframe",{ref:L,height:"100%",id:"jspaint-iframe",onLoad:()=>D(!0),src:g,title:t,width:"100%",...p.v0})]})}},26753:function(e,t,n){n.r(t);const a=n(10508).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
  cursor: wait;
  height: 100%;
  width: 100%;

  &::before {
    color: #fff;
    content: "Working on it...";
    display: flex;
    font-size: 12px;
    justify-content: center;
    mix-blend-mode: difference;
    padding-top: 18px;
  }
`;t.default=a},55785:function(e,t,n){var a=n(1864),i=n(67294),o=n(62727),r=n(6529),s=n(42151),l=n(26724),c=n(56758),f=n(62065),d=n(64358),u=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:p,onDragLeave:m,onDragOver:g,updatePositions:w}=e;const{url:h}=(0,c.z)(),{iconPositions:b,sortOrders:y,setIconPositions:v}=(0,f.k)(),{mkdirRecursive:$,updateFolder:k,writeFile:x}=(0,l.o)(),F=(0,i.useCallback)((async(e,t,n)=>{if(p)if(t){const i=(0,a.join)(d.Ll,e);if(await $(d.Ll),await x(i,t,!0))return n===s.v.UPDATE_URL&&h(p,i),k(d.Ll,e),(0,a.basename)(i)}else n===s.v.UPDATE_URL&&h(p,e);return""}),[p,$,k,h,x]),{openTransferDialog:L}=(0,o.Z)();return{onDragLeave:m,onDragOver:e=>{g?.(e),(0,u.nK)(e)},onDrop:e=>{if(!d.my.has((0,u.RT)(n))){if(w&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,r.p4)(e);if(0===t.length&&""===i)return;const o={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,a.basename)(e)===(0,a.relative)(n,e))return;s=s.map((e=>(0,a.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,a.basename)(e,(0,a.extname)(e))} (${t})${(0,a.extname)(e)}`}while(b[i]);return(0,a.basename)(i)})),(0,u.vi)(n,e.target,b,y,o,s,v)}(0,r.WG)(e,t||F,n,L,Boolean(p))}}}}},7459:function(e,t,n){var a=n(67294),i=n(56758),o=n(25804),r=n(64358);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(r.CC),{title:s}=o.Z[n]||{};return{appendFileToTitle:(0,a.useCallback)(((n,a)=>{const i=n?` - ${n}${a?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,a.useCallback)(((n,a,i)=>{const o=n?`${a?`${r.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${o}${s}`)}),[e,s,t])}}}}]);