"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8381],{18381:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(85893),o=n(1864),s=n(67294);const a={paths:{vs:"/Program Files/MonacoEditor/vs"}},r={".whtml":".html"};var l=n(55127),c=n(64358);const d=e=>{let{relatedTarget:t}=e;if(t instanceof HTMLElement){let e;"actions-container"===t.classList.value?e=t.closest(".monaco-menu-container"):"shadow-root-host"===t.classList.value&&t.shadowRoot instanceof ShadowRoot&&(e=t),e instanceof HTMLElement&&e.closest("section")&&e.closest("section")?.parentNode?.prepend(e)}},u=(e,t)=>{if(!t)return[];const{uri:n}=t.getModel()||{},[i]=n?.path.split("|")||[],o="file"===n?.scheme?i:e||c.$Z;return e&&e!==i?[]:[o,t.getValue()]},p=new Set(["json","css","sass","less","html","markdown","xml"]),g=e=>p.has(e.toLowerCase()),f=async(e,t)=>{const i=e.toLowerCase();if("json"===i)try{return JSON.stringify(JSON.parse(t),void 0,2)}catch{return t}return(await n.e(4935).then(n.bind(n,94935))).format(t,await(async e=>["css","sass","less"].includes(e)?{parser:e,plugins:[await n.e(1285).then(n.bind(n,71285))]}:"html"===e?{parser:"html",plugins:[await n.e(226).then(n.bind(n,80226))]}:"xml"===e?{parser:"xml",plugins:[(await n.e(2717).then(n.bind(n,22717))).default]}:"markdown"===e?{parser:"markdown",plugins:[await n.e(2149).then(n.bind(n,22149))]}:void 0)(i))};var h=n(10508);var m=h.ZP.footer.withConfig({componentId:"sc-e5795db7-0"})`
  background-color: rgb(25, 25, 25);
  border-top: 1px solid rgb(19, 19, 19);
  bottom: 0;
  color: rgb(108, 103, 106);
  display: flex;
  font-size: 16px;
  height: 30px;
  place-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;

  ol {
    display: flex;
    place-content: flex-end;
    place-items: center;

    &:first-of-type {
      padding-left: 8px;
    }

    &:last-of-type {
      padding-right: 8px;
    }

    li {
      margin: 0 4px;
      padding: 4px 8px;
      white-space: nowrap;

      button {
        color: inherit;
        font-size: inherit;
        padding: 4px 8px;

        &.pretty {
          position: relative;
          top: -2px;
        }

        svg {
          fill: rgb(108, 103, 106);
          height: 16px;
          width: 16px;
        }
      }

      &:hover {
        background-color: rgb(37, 37, 37);
      }

      &:active {
        background-color: rgb(34, 34, 34);
      }

      &.clickable {
        padding: 0;
      }

      &#save {
        svg {
          margin-top: 4px;
        }
      }
    }
  }
`,w=n(7459),b=n(26724),v=n(56758),x=n(30663),y=n(34254);const k=(0,s.memo)((()=>(0,i.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{clipRule:"evenodd",d:"m13.353 1.146 1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z",fillRule:"evenodd"})})));var C=e=>{let{id:t}=e;const{processes:{[t]:n}}=(0,v.z)(),{editor:a,url:r}=n||{},{updateFolder:l,writeFile:c}=(0,b.o)(),{prependFileToTitle:d}=(0,w.Z)(t),[p,h]=(0,s.useState)(""),[C,L]=(0,s.useState)("Ln 1, Col 1"),[$,j]=(0,s.useState)(1);return(0,s.useEffect)((()=>{const e=()=>{const e=a?.getSelection(),{positionColumn:t=0,positionLineNumber:n=0}=e||{},i=e?a?.getModel()?.getValueInRange(e):"";L(`Ln ${n}, Col ${t}${i?` (${i.length} selected)`:""}`)},t=()=>j(a?.getModel()?.getLineCount()||0);a?.onDidChangeModelContent(t),a?.onDidChangeCursorPosition(e),a?.onDidChangeModel((()=>{const n=a?.getModel(),i=n?.getLanguageId();i&&h(window.monaco?.languages.getLanguages().reduce(((e,t)=>{let{id:n,aliases:o}=t;return n===i&&o?.[0]||e}),i)),t(),e()}))}),[a]),(0,i.jsx)(m,{onContextMenuCapture:y.nK,children:a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{children:(0,i.jsxs)("li",{children:["Lines ",$]})}),(0,i.jsxs)("ol",{children:[(0,i.jsx)("li",{className:"clickable",id:"save",children:(0,i.jsx)(x.Z,{onClick:async()=>{const[e,t]=u(r,a);e&&t&&(await c(e,t,!0),l((0,o.dirname)(e),(0,o.basename)(e)),d((0,o.basename)(e)))},...(0,y.PS)("Save"),children:(0,i.jsx)(k,{})})}),r&&g(p)&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(x.Z,{className:"pretty",onClick:async()=>a?.setValue(await f(p,a.getValue())),...(0,y.PS)(`Pretty print ${(0,o.basename)(r)}`),children:"{ }"})}),C&&(0,i.jsx)("li",{className:"clickable",children:(0,i.jsx)(x.Z,{onClick:()=>{try{a?.focus(),a?.getAction("editor.action.gotoLine")?.run()}catch{}},...(0,y.PS)("Go to Line/Column"),children:C})}),""!==p&&(0,i.jsx)("li",{children:p})]})]})})};const L=h.ZP.div.withConfig({componentId:"sc-792c2bb4-0"})`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  width: 100%;

  && {
    height: ${e=>{let{theme:t}=e;return`calc(100% - ${t.sizes.titleBar.height}px - 31px)`}};
  }
`;var $=L,j=n(63764),S=n(11498);var M=e=>{let{containerRef:t,id:n,setLoading:i,url:p}=e;const{readFile:g,updateFolder:f,writeFile:h}=(0,b.o)(),{argument:m}=(0,v.z)(),{prependFileToTitle:x}=(0,w.Z)(n),[k,C]=(0,s.useState)(),[L,$]=(0,s.useState)(),M=(0,s.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=`${e}|${t}`,i=L?.editor.getModels();return i?.some((e=>e._associatedResource.path===n))?M(e,t+1):L?.Uri.parse(n)}),[L?.Uri,L?.editor]),T=(0,s.useCallback)((async()=>{const e=L?.editor.createModel((await g(p)).toString(),(e=>{const t=r[e]||e;if(!l._.has(t))return"";const{id:n=""}=window.monaco.languages.getLanguages().find((e=>e.extensions?.includes(t)))||{};return n})((0,y.RT)(p)),M(p));return e?.onDidChangeContent((()=>x((0,o.basename)(p),!0))),e}),[M,L?.editor,x,g,p]),F=(0,s.useCallback)((async()=>{L&&k&&p.startsWith("/")&&((0,S.H3)("define"),k.getModel()?.dispose(),k.setModel(await T()),window.setTimeout((()=>(0,S.wz)("define")),2.5*c.i2)),x((0,o.basename)(p||c.$Z))}),[T,k,L,x,p]);(0,s.useEffect)((()=>{L||((0,S.H3)("define"),j._m.config(a),j._m.init().then((e=>{(0,S.wz)("define"),$(e)})))}),[L]),(0,s.useEffect)((()=>{k?.onKeyDown((async e=>{const{ctrlKey:t,code:n,keyCode:i}=e;if(t&&("KeyS"===n||83===i)){e.preventDefault();const[t,n]=u(p,k);t&&"string"===typeof n&&(await h(t,n,!0),f((0,o.dirname)(t),(0,o.basename)(t)),x((0,o.basename)(t)))}}))}),[k,x,f,p,h]),(0,s.useEffect)((()=>{if(L&&!k&&t.current){const e=L.editor.create(t.current,{automaticLayout:!0,theme:"vs-dark"});t.current?.closest("section")?.addEventListener("focus",(()=>e.focus()),{passive:!0}),t.current?.addEventListener("blur",d,{capture:!0,passive:!0}),C(e),m(n,"editor",e),i(!1)}return()=>{k&&L&&(k.getModel()?.dispose(),k.dispose(),(0,S.wz)("define"))}}),[t,k,n,L,m,i]),(0,s.useEffect)((()=>{L&&k&&p&&F()}),[k,F,L,x,p])},T=n(2742);var F=e=>{let{id:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(T.Z,{StyledComponent:$,id:t,useHook:M}),(0,i.jsx)(C,{id:t})]})}},2742:function(e,t,n){var i=n(85893),o=n(5152),s=n.n(o),a=n(67294),r=n(56758),l=n(55785);const c=s()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}}),d=e=>{let{id:t,useHook:n,StyledComponent:o,children:s}=e;const{processes:{[t]:{url:d=""}={}}}=(0,r.z)(),u=(0,a.useRef)(null),[p,g]=(0,a.useState)(!0),f=(0,a.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return n({containerRef:u,id:t,loading:p,setLoading:g,url:d}),(0,i.jsxs)(i.Fragment,{children:[p&&(0,i.jsx)(c,{}),(0,i.jsx)(o,{ref:u,style:f,...(0,l.Z)({id:t}),children:s})]})};t.Z=(0,a.memo)(d)},55785:function(e,t,n){var i=n(1864),o=n(67294),s=n(62727),a=n(6529),r=n(42151),l=n(26724),c=n(56758),d=n(62065),u=n(64358),p=n(34254);t.Z=e=>{let{callback:t,directory:n=u.Ll,id:g,onDragLeave:f,onDragOver:h,updatePositions:m}=e;const{url:w}=(0,c.z)(),{iconPositions:b,sortOrders:v,setIconPositions:x}=(0,d.k)(),{mkdirRecursive:y,updateFolder:k,writeFile:C}=(0,l.o)(),L=(0,o.useCallback)((async(e,t,n)=>{if(g)if(t){const o=(0,i.join)(u.Ll,e);if(await y(u.Ll),await C(o,t,!0))return n===r.v.UPDATE_URL&&w(g,o),k(u.Ll,e),(0,i.basename)(o)}else n===r.v.UPDATE_URL&&w(g,e);return""}),[g,y,k,w,C]),{openTransferDialog:$}=(0,s.Z)();return{onDragLeave:f,onDragOver:e=>{h?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,p.RT)(n))){if(m&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,a.p4)(e);if(0===t.length&&""===o)return;const s={x:e.clientX,y:e.clientY};let r=[];if(o){try{r=JSON.parse(o)}catch{}if(!Array.isArray(r))return;const[e]=r;if(!e)return;if(e.startsWith(n)&&(0,i.basename)(e)===(0,i.relative)(n,e))return;r=r.map((e=>(0,i.basename)(e)))}else r=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);r=r.map((e=>{if(!b[`${n}/${e}`])return e;let t=0,o="";do{t+=1,o=`${n}/${(0,i.basename)(e,(0,i.extname)(e))} (${t})${(0,i.extname)(e)}`}while(b[o]);return(0,i.basename)(o)})),(0,p.vi)(n,e.target,b,v,s,r,x)}(0,a.WG)(e,t||L,n,$,Boolean(g))}}}}},7459:function(e,t,n){var i=n(67294),o=n(56758),s=n(25804),a=n(64358);t.Z=e=>{const{title:t}=(0,o.z)(),[n]=e.split(a.CC),{title:r}=s.Z[n]||{};return{appendFileToTitle:(0,i.useCallback)(((n,i)=>{const o=n?` - ${n}${i?` ${a.xy}`:""}`:"";t(e,`${r}${o}`)}),[e,r,t]),prependFileToTitle:(0,i.useCallback)(((n,i,o)=>{const s=n?`${i?`${a.xy} `:""}${n}${o?" ":" - "}`:"";t(e,`${s}${r}`)}),[e,r,t])}}},11498:function(e,t,n){n.d(t,{H3:function(){return a},od:function(){return i},wz:function(){return s}});const i=e=>e.forEach((e=>{if(e in window)try{delete window[e]}finally{Object.assign(window,{[e]:void 0})}})),o=(e,t)=>{window.lockedGlobals={...window.lockedGlobals,[e]:t}},s=e=>o(e,!0),a=e=>{Object.getOwnPropertyDescriptor(window,e)||(e=>{let t;Object.defineProperty(window,e,{get:()=>window.lockedGlobals?.[e]?void 0:t,set(n){window.lockedGlobals?.[e]||(t=n)}})})(e),o(e,!1)}}}]);