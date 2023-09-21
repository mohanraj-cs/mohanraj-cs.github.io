"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9365],{79365:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var i=n(85893),r=n(67294),s=n(10508),o=s.ZP.div.withConfig({componentId:"sc-9c70fec5-0"})`
  font-size: 13px;
  overflow-x: hidden;
  overflow-y: scroll;

  ${e=>{let{$drop:t}=e;return t&&s.iv`
      &::before {
        content: "Drop OTF/TTF/WOFF file here";
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
    `}}

  ol {
    &:not(:last-child) {
      border-bottom: 1px solid #000;
    }

    padding: 2px 0;
  }

  figure {
    align-items: center;
    display: flex;
    padding-top: 2px;

    figcaption {
      padding-right: 15px;
    }
  }
`,a=n(55785),l=n(26724),c=n(56758),u=n(25804),f=n(34254);const d=[12,18,24,36,48,60,72],p=e=>e?e.en||Object.values(e)[0]:"",h=(0,r.memo)((e=>{let{font:t,fontSize:n,hideLabel:s,text:o}=e;const a=(0,r.useRef)(null),l=(0,i.jsx)("canvas",{ref:a});return(0,r.useEffect)((()=>{if(!t||!a.current)return;const e=Math.ceil(1.3333333333333333*n),i=t.getPath(o||"The quick brown fox jumps over the lazy dog. 1234567890",0,e,e),{x2:r,y2:s}=i.getBoundingBox();a.current.setAttribute("height",`${Math.ceil(s)}`),a.current.setAttribute("width",`${Math.ceil(r)}`),i.draw(a.current.getContext("2d"))}),[t,n,o]),s?l:(0,i.jsxs)("figure",{children:[(0,i.jsx)("figcaption",{children:n}),l]})}));var x=(0,r.memo)((e=>{let{id:t}=e;const{processes:{[t]:{url:s=""}={}}={},title:x}=(0,c.z)(),{readFile:m}=(0,l.o)(),[g,b]=(0,r.useState)(),[v,y]=(0,r.useState)(!0),j=(0,r.useCallback)((async e=>{y(!1);const{default:t}=await Promise.all([n.e(3257),n.e(6102)]).then(n.bind(n,44422)),{buffer:i}=await m(e);try{b(t.parse(i))}catch{y(!0)}}),[m]),{name:w,types:L,version:T}=(0,r.useMemo)((()=>{const e=[];return g?.supported&&e.push("OpenType Layout"),"truetype"===g?.outlinesFormat&&e.push("TrueType Outlines"),{name:p(g?.names.fullName),types:e.join(", "),version:p(g?.names.version)}}),[g]);return(0,r.useEffect)((()=>{s&&j(s)}),[j,s]),(0,r.useEffect)((()=>x(t,w?`${w} (${u.Z.OpenType.title})`:u.Z.OpenType.title)),[t,w,x]),(0,i.jsx)(o,{$drop:v,...(0,a.Z)({id:t}),onContextMenuCapture:f.nK,children:g&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("ol",{children:[(0,i.jsxs)("li",{children:["Font name: ",w]}),(0,i.jsxs)("li",{children:["Version: ",T]}),(0,i.jsx)("li",{children:L})]}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:15,text:"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ",hideLabel:!0})}),(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:15,text:"1234567890.:,; ' \" (!?) +-*/=",hideLabel:!0})})]}),(0,i.jsx)("ol",{children:d.map((e=>(0,i.jsx)("li",{children:(0,i.jsx)(h,{font:g,fontSize:e})},e)))})]})})}))},55785:function(e,t,n){var i=n(1864),r=n(67294),s=n(62727),o=n(6529),a=n(42151),l=n(26724),c=n(56758),u=n(62065),f=n(64358),d=n(34254);t.Z=e=>{let{callback:t,directory:n=f.Ll,id:p,onDragLeave:h,onDragOver:x,updatePositions:m}=e;const{url:g}=(0,c.z)(),{iconPositions:b,sortOrders:v,setIconPositions:y}=(0,u.k)(),{mkdirRecursive:j,updateFolder:w,writeFile:L}=(0,l.o)(),T=(0,r.useCallback)((async(e,t,n)=>{if(p)if(t){const r=(0,i.join)(f.Ll,e);if(await j(f.Ll),await L(r,t,!0))return n===a.v.UPDATE_URL&&g(p,r),w(f.Ll,e),(0,i.basename)(r)}else n===a.v.UPDATE_URL&&g(p,e);return""}),[p,j,w,g,L]),{openTransferDialog:F}=(0,s.Z)();return{onDragLeave:h,onDragOver:e=>{x?.(e),(0,d.nK)(e)},onDrop:e=>{if(!f.my.has((0,d.RT)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:r}=(0,o.p4)(e);if(0===t.length&&""===r)return;const s={x:e.clientX,y:e.clientY};let a=[];if(r){try{a=JSON.parse(r)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(n)&&(0,i.basename)(e)===(0,i.relative)(n,e))return;a=a.map((e=>(0,i.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,r="";do{t+=1,r=`${n}/${(0,i.basename)(e,(0,i.extname)(e))} (${t})${(0,i.extname)(e)}`}while(b[r]);return(0,i.basename)(r)})),(0,d.vi)(n,e.target,b,v,s,a,y)}(0,o.WG)(e,t||T,n,F,Boolean(p))}}}}}}]);