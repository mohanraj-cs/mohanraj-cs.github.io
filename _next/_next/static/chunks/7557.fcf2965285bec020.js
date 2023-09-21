"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7557],{7557:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(85893);var i=n(10508).ZP.div.withConfig({componentId:"sc-b6b7aa62-0"})`
  height: 100%;

  [role="application"] {
    border-radius: 0;
    height: 100% !important;

    button:disabled {
      pointer-events: none;
    }

    &[aria-disabled="true"] {
      .tox-editor-header {
        height: 39px;
        overflow: hidden;
        padding: 0;
        position: relative;

        &::before {
          background-color: rgba(255, 255, 255, 80%);
          content: "Click to switch into design mode.";
          cursor: pointer;
          display: flex;
          height: calc(100% - 1px);
          place-content: center;
          place-items: center;
          position: absolute;
          text-shadow: 0 0 25px rgba(0, 0, 0, 80%);
          width: 100%;
          z-index: 1;
        }

        .tox-toolbar-overlord {
          display: none;
        }
      }
    }
  }
`,a=n(1864),r=n(67294),s=n(64358);const l={base_url:"/Program Files/TinyMCE/",branding:!1,draggable_modal:!0,image_advtab:!0,plugins:"\n  code help image link lists media\n  preview save searchreplace table wordcount",promotion:!1,suffix:".min",toolbar:"\n  save undo redo | formatselect | bold italic underline | forecolor backcolor |\n  alignleft aligncenter alignright | bullist outdent indent | code | help"},c=`${s.Ll}/New Rich Text Document.whtml`,d=e=>e?.mode.isReadOnly()||!e?.getContent();var u=n(87426),m=n(55785),f=n(7459),p=n(26724),b=n(56758),h=n(62065),v=n(34254);var g=e=>{let{containerRef:t,id:o,setLoading:i,url:g}=e;const{open:w,processes:{[o]:{libs:y=[]}={}}={},url:x}=(0,b.z)(),[k,E]=(0,r.useState)(),{prependFileToTitle:L}=(0,f.Z)(o),{readFile:T,stat:$,updateFolder:C,writeFile:D}=(0,p.o)(),{onDragOver:F,onDrop:R}=(0,m.Z)({id:o}),{setForegroundId:S}=(0,h.k)(),W=(0,r.useCallback)((async e=>{const t=new Date((0,u.GA)(e,await $(e))),n=new Intl.DateTimeFormat(s.ZW,{dateStyle:"medium"}).format(t);L(`${(0,a.basename)(e,(0,a.extname)(e))} (${n})`)}),[L,$]),Z=(0,r.useCallback)((()=>{const e=t.current?.querySelector("iframe");e?.contentWindow&&[...e.contentWindow.document.links].forEach((e=>e.addEventListener("click",(t=>{const n=e.dataset.mceHref||"";if(""===(0,a.relative)(n.startsWith("/")?n:`/${n}`,e.pathname)&&k?.mode.isReadOnly()){(0,v.nK)(t);const n=(0,u.Wd)((0,v.RT)(e.pathname));n&&w(n,{url:e.pathname})}}))))}),[t,k?.mode,w]),_=(0,r.useCallback)((async()=>{if(k){const e=await T(g);if(e.length>0&&(e=>{const t=e.editorContainer?.querySelector(".tox-editor-header");t instanceof HTMLDivElement&&t.addEventListener("click",(()=>{t.removeAttribute("title"),e.mode.set("design")}),s.K7),e.mode.set("readonly")})(k),".rtf"===(0,v.RT)(g)){const{RTFJS:t}=await Promise.all([n.e(8705),n.e(3131)]).then(n.bind(n,83131)),o=new t.Document(e),i=await o.render();k.setContent(i.map((e=>e.outerHTML)).join(""))}else k.setContent(e.toString());Z(),W(g),k.iframeElement?.contentDocument&&(k.iframeElement.contentDocument.documentElement.scrollTop=0)}}),[k,Z,T,W,g]);(0,r.useEffect)((()=>{k&&k.options.set("save_onsavecallback",(async()=>{const e={closeButton:!0,text:"Successfully saved.",timeout:5e3,type:"success"},t=g||c;try{await D(".rtf"===(0,v.RT)(t)?t.replace(".rtf",".whtml"):t,k.getContent(),!0),C((0,a.dirname)(t),(0,a.basename)(t)),W(t)}catch{e.text="Error occurred while saving.",e.type="error"}k.notificationManager.open(e)}))}),[k,C,W,g,D]),(0,r.useEffect)((()=>{k||(0,v.mb)(y).then((()=>{window.tinymce&&t.current&&(window.tinymce.remove(),window.tinymce.init({selector:`.${[...t.current.classList].join(".")} div`,setup:e=>{e.on("ExecCommand",(e=>{let{command:t}=e;"mceNewDocument"===t&&(x(o,""),L(""))}))},...l}).then((e=>{let[n]=e;const a=t.current?.querySelector("iframe");a?.contentWindow&&(a.contentWindow.addEventListener("dragover",(e=>{d(n)&&F(e)})),a.contentWindow.addEventListener("drop",(e=>{d(n)&&R(e)})),a.contentWindow.addEventListener("blur",(()=>S((e=>e===o?"":e)))),a.contentWindow.addEventListener("focus",(()=>S(o)))),E(n),i(!1)})))}))}),[t,k,o,y,F,R,L,S,i,x]),(0,r.useEffect)((()=>{g&&k&&_()}),[k,_,T,g]),(0,r.useEffect)((()=>()=>{window.setTimeout((()=>k?.destroy()),0)}),[k])},w=n(2742);var y=e=>{let{id:t}=e;return(0,o.jsx)(w.Z,{StyledComponent:i,id:t,useHook:g,children:(0,o.jsx)("div",{})})}},2742:function(e,t,n){var o=n(85893),i=n(5152),a=n.n(i),r=n(67294),s=n(56758),l=n(55785);const c=a()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}}),d=e=>{let{id:t,useHook:n,StyledComponent:i,children:a}=e;const{processes:{[t]:{url:d=""}={}}}=(0,s.z)(),u=(0,r.useRef)(null),[m,f]=(0,r.useState)(!0),p=(0,r.useMemo)((()=>({contain:"strict",visibility:m?"hidden":"visible"})),[m]);return n({containerRef:u,id:t,loading:m,setLoading:f,url:d}),(0,o.jsxs)(o.Fragment,{children:[m&&(0,o.jsx)(c,{}),(0,o.jsx)(i,{ref:u,style:p,...(0,l.Z)({id:t}),children:a})]})};t.Z=(0,r.memo)(d)},55785:function(e,t,n){var o=n(1864),i=n(67294),a=n(62727),r=n(6529),s=n(42151),l=n(26724),c=n(56758),d=n(62065),u=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:f,onDragLeave:p,onDragOver:b,updatePositions:h}=e;const{url:v}=(0,c.z)(),{iconPositions:g,sortOrders:w,setIconPositions:y}=(0,d.k)(),{mkdirRecursive:x,updateFolder:k,writeFile:E}=(0,l.o)(),L=(0,i.useCallback)((async(e,t,n)=>{if(f)if(t){const i=(0,o.join)(u.Ll,e);if(await x(u.Ll),await E(i,t,!0))return n===s.v.UPDATE_URL&&v(f,i),k(u.Ll,e),(0,o.basename)(i)}else n===s.v.UPDATE_URL&&v(f,e);return""}),[f,x,k,v,E]),{openTransferDialog:T}=(0,a.Z)();return{onDragLeave:p,onDragOver:e=>{b?.(e),(0,m.nK)(e)},onDrop:e=>{if(!u.my.has((0,m.RT)(n))){if(h&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,r.p4)(e);if(0===t.length&&""===i)return;const a={x:e.clientX,y:e.clientY};let s=[];if(i){try{s=JSON.parse(i)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,o.basename)(e)===(0,o.relative)(n,e))return;s=s.map((e=>(0,o.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!g[`${n}/${e}`])return e;let t=0,i="";do{t+=1,i=`${n}/${(0,o.basename)(e,(0,o.extname)(e))} (${t})${(0,o.extname)(e)}`}while(g[i]);return(0,o.basename)(i)})),(0,m.vi)(n,e.target,g,w,a,s,y)}(0,r.WG)(e,t||L,n,T,Boolean(f))}}}}},7459:function(e,t,n){var o=n(67294),i=n(56758),a=n(25804),r=n(64358);t.Z=e=>{const{title:t}=(0,i.z)(),[n]=e.split(r.CC),{title:s}=a.Z[n]||{};return{appendFileToTitle:(0,o.useCallback)(((n,o)=>{const i=n?` - ${n}${o?` ${r.xy}`:""}`:"";t(e,`${s}${i}`)}),[e,s,t]),prependFileToTitle:(0,o.useCallback)(((n,o,i)=>{const a=n?`${o?`${r.xy} `:""}${n}${i?" ":" - "}`:"";t(e,`${a}${s}`)}),[e,s,t])}}}}]);