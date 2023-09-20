"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{30110:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var r=i(85893),n=i(67294),o=i(10508),s=i(98537),a=o.ZP.nav.withConfig({componentId:"sc-94fb1622-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 7px;
  overflow: hidden;
  padding-top: 4px;
  position: absolute;
  top: 0;
  transition-duration: 150ms;
  width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.width}}px;
  z-index: 1;

  &:hover:not(&.collapsed) {
    backdrop-filter: blur(12px);
    background-color: hsla(0, 0%, 10%, 95%);
    box-shadow: 8px 0 5px -5px hsla(0, 0%, 10%, 50%);
    transition:
      all 300ms ease,
      backdrop-filter 1ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.expandedWidth}};

    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      background-color: hsla(0, 0%, 10%, 75%);
    }
  }
`,l=o.ZP.li.withConfig({componentId:"sc-f1d0af6c-0"})`
  border: 1px solid transparent;
  display: flex;
  height: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.height}};
  place-content: center;
  place-items: center;
  transition-duration: 150ms;
  width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.width}}px;

  &::before {
    border-left: ${e=>{let{$active:t,theme:i}=e;return`4px solid ${t?i.colors.highlight:"transparent"}`}};
    content: "";
    height: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.height}};
    left: 0;
    position: absolute;
    width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.width}}px;
  }

  figure {
    color: ${e=>{let{$active:t,theme:i}=e;return t?i.colors.highlight:i.colors.text}};
    display: flex;
    place-items: center;

    svg {
      fill: ${e=>{let{$active:t,theme:i}=e;return t?i.colors.highlight:i.colors.text}};
      height: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.iconSize}};
      left: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.iconSize}};
      margin-left: 1px;
      pointer-events: none;
      position: absolute;
      width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.iconSize}};
    }

    figcaption {
      border: 1px solid transparent;
      left: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.width}}px;
      position: absolute;
      white-space: nowrap;

      strong {
        font-weight: 600;
      }
    }
  }

  ${a}:hover:not(${a}.collapsed) & {
    transition: width 300ms;
    transition-timing-function: cubic-bezier(0.15, 1, 0.5, 1);
    width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.expandedWidth}};
  }

  &:hover {
    background-color: hsla(0, 0%, 35%, 70%);
    border: 1px solid hsla(0, 0%, 45%, 70%);
  }

  &:active {
    background-color: hsla(0, 0%, 40%, 70%);
  }
`,c=i(23988),h=e=>{let{action:t,active:i,heading:o,icon:s,name:a,tooltip:h}=e;return(0,r.jsx)(l,{ref:(0,n.useCallback)((e=>(0,c.G)(e,!0)),[]),$active:i,"aria-label":a,onClick:t,title:h,children:(0,r.jsxs)("figure",{children:[s,(0,r.jsx)("figcaption",{children:o?(0,r.jsx)("strong",{children:a}):a})]})})};const d=(0,n.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M0 22v-6h6v6H0zm2-4v2h2v-2H2zm-2-4V8h6v6H0zm2-4v2h2v-2H2zM0 6V0h6v6H0zm2-4v2h2V2H2zm8 10v-2h18v2H10zm14 6v2H10v-2h14zM10 2h22v2H10V2zM0 30v-6h6v6H0zm2-4v2h2v-2H2zm8 2v-2h18v2H10z"})}))),u=(0,n.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 10H0V8h32v2zm0 16H0v-2h32v2zm0-8.016H0V16h32v1.984z"})}))),p=(0,n.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M28 8.578V32H2V0h17.422zM20 8h4.578L20 3.422V8zm6 22V10h-8V2H4v28h22z"})}))),g=(0,n.memo)((()=>{const{colors:e}=(0,o.Fg)();return(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M17 16h-2V0h2v16zm3.313-11.312q2.156.688 3.945 2t3.063 3.078 1.977 3.875.703 4.359q0 1.938-.5 3.727t-1.414 3.344-2.188 2.828-2.828 2.188-3.344 1.414-3.727.5-3.727-.5-3.344-1.414-2.828-2.188-2.188-2.828-1.414-3.344-.5-3.727q0-2.25.703-4.359t1.977-3.875 3.063-3.078 3.945-2l.625 1.891q-1.859.609-3.391 1.734t-2.625 2.625-1.695 3.305-.602 3.758q0 1.656.43 3.188t1.211 2.867 1.875 2.43 2.43 1.875 2.867 1.211 3.188.43 3.188-.43 2.867-1.211 2.43-1.875 1.875-2.43 1.211-2.867.43-3.188q0-1.953-.602-3.758t-1.695-3.305-2.625-2.625-3.391-1.734z",stroke:e.text,strokeWidth:"1"})})})),m=(0,n.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M32 4v24H0V4h32zM2 6v10.578l7-6.984 10 10 4-4 7 6.984V6H2zm0 20h20.578L9 12.406l-7 7.016V26zm28 0v-.578l-7-7.016L20.406 21l5.016 5H30zm-5-14q-.406 0-.703-.297T24 11t.297-.703T25 10t.703.297T26 11t-.297.703T25 12z"})}))),x=(0,n.memo)((()=>(0,r.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"m32 24.125-8-4V24H0V8h24v3.875l8-4v16.25zM22 10H2v12h20V10zm8 1.109-6 3.016v3.75l6 3.016V11.11z"})})));var v=i(26724),w=i(56758),b=i(62065),f=i(64358),$=i(34254);const z=e=>{let{sidebarButtons:t}=e;return(0,r.jsx)("ol",{children:t.map((e=>(0,r.jsx)(h,{...e},e.name)))})};var M=(0,n.memo)((e=>{let{height:t}=e;const{rootFs:s}=(0,v.o)(),{open:l}=(0,w.z)(),{setHaltSession:c}=(0,b.k)(),[h,M]=(0,n.useState)(!0),k=(0,n.useRef)(),S=(0,n.useRef)(null),j=()=>{k.current&&clearTimeout(k.current)},H=[{heading:!0,icon:(0,r.jsx)(u,{}),name:"START",...h&&{tooltip:"Expand"}},{active:!0,icon:(0,r.jsx)(d,{}),name:"All apps",...h&&{tooltip:"All apps"}}],{sizes:B}=(0,o.Fg)(),V=(0,$.sI)(),T=(0,n.useMemo)((()=>Math.floor((V-f.bK)/B.startMenu.sideBar.width)),[B.startMenu.sideBar.width,V]),y=[T>3?{action:()=>l("FileExplorer",{url:`${f.Sd}/Documents`},"/System/Icons/documents.webp"),icon:(0,r.jsx)(p,{}),name:"Documents",...h&&{tooltip:"Documents"}}:void 0,T>4?{action:()=>l("FileExplorer",{url:`${f.Sd}/Pictures`},"/System/Icons/pictures.webp"),icon:(0,r.jsx)(m,{}),name:"Pictures",...h&&{tooltip:"Pictures"}}:void 0,T>5?{action:()=>l("FileExplorer",{url:`${f.Sd}/Videos`},"/System/Icons/videos.webp"),icon:(0,r.jsx)(x,{}),name:"Videos",...h&&{tooltip:"Videos"}}:void 0,{action:()=>{c(!0),i.e(1953).then(i.bind(i,51953)).then((e=>{let{resetStorage:t}=e;return t(s).finally((()=>window.location.reload()))}))},icon:(0,r.jsx)(g,{}),name:"Power",tooltip:"Clears session data and reloads the page."}].filter(Boolean);return(0,n.useEffect)((()=>j),[]),(0,r.jsxs)(a,{ref:S,className:h?"collapsed":void 0,onClick:e=>{let{target:t}=e;j(),t instanceof HTMLElement&&(t===S.current||S.current?.contains(t)&&"START"===t.textContent)&&M((e=>!e))},onContextMenu:$.nK,onMouseEnter:()=>{k.current=window.setTimeout((()=>M(!1)),700)},onMouseLeave:()=>{j(),M(!0)},style:{height:t},children:[(0,r.jsx)(z,{sidebarButtons:H}),(0,r.jsx)(z,{sidebarButtons:y})]})})),k=i(71183),S=i(8011),j=i(38060);const H=f.H$-3,B=o.iv`
  &::-webkit-scrollbar {
    width: ${e=>{let{$showScrolling:t}=e;return t?f.H$:3}}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${e=>{let{$showScrolling:t}=e;return t?void 0:"transparent"}};
  }

  &::-webkit-scrollbar-button:single-button {
    background-color: ${e=>{let{$showScrolling:t}=e;return t?void 0:"transparent"}};
    border: ${e=>{let{$showScrolling:t}=e;return t?void 0:"1px solid transparent"}};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: ${e=>{let{$showScrolling:t}=e;return t?void 0:"rgb(167, 167, 167)"}};
  }
`;var V=(0,o.ZP)(k.m.nav).withConfig({componentId:"sc-7ec198cc-0"})`
  background-color: hsla(0, 0%, 13%, 95%);
  bottom: ${f.bK}px;
  box-shadow: 3px 0 10px 3px hsla(0, 0%, 10%, 50%);
  contain: strict;
  display: flex;
  height: 100%;
  left: 0;
  max-height: ${e=>{let{theme:t}=e;return t.sizes.startMenu.maxHeight}}px;
  max-width: ${e=>{let{theme:t}=e;return t.sizes.startMenu.size}}px;
  position: absolute;
  width: 100%;
  z-index: 10000;

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: hsla(0, 0%, 13%, 70%);
  }

  ${S.Z} {
    ${(0,j.Z)(f.H$,-2,-1)};
    margin-top: 0;
    padding-left: ${e=>{let{theme:t}=e;return t.sizes.startMenu.sideBar.width}}px;
    padding-right: ${f.H$}px;
    padding-top: 7px;
    scrollbar-width: none;

    ${S.Z} {
      margin: 0;
      overflow: hidden;
      padding: 0;

      figure {
        picture {
          margin-left: 9px;
        }

        &:active {
          picture {
            margin-left: 13px;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0;
    }

    &:hover {
      ${B};
      padding-right: ${e=>{let{$showScrolling:t}=e;return t?0:`${H}px`}};

      @supports (scrollbar-width: thin) {
        padding-right: 5px;
        scrollbar-width: thin;
      }
    }

    @media (hover: none), (pointer: coarse) {
      ${B};
      &::-webkit-scrollbar-track {
        margin: 13px 0;
      }
    }
  }
`,T=o.ZP.span.withConfig({componentId:"sc-a718d402-0"})`
  backdrop-filter: blur(12px);
  height: ${e=>{let{$height:t}=e;return t}};
  inset: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`,y=i(96702),I=e=>{let{toggleStartMenu:t}=e;const i=(0,n.useRef)(null),[a,l]=(0,n.useState)(!1),{sizes:{startMenu:c}}=(0,o.Fg)(),h=(0,y.Z)(c.maxHeight),{height:d}=h.variants?.active??{};return(0,n.useLayoutEffect)((()=>i.current?.focus(f.eS)),[]),(0,r.jsxs)(V,{ref:i,$showScrolling:a,onBlurCapture:e=>{let{relatedTarget:r}=e;const n=r;if(!n||!i.current?.contains(n)){const e=n===i.current?.nextSibling,r=n?.parentElement===i.current?.nextSibling;e||r?i.current?.focus(f.eS):t(!1)}},onKeyDown:e=>{let{key:i}=e;"Escape"===i&&t(!1)},onMouseMove:e=>{let{clientX:t=0}=e;const{width:r=0}=i.current?.getBoundingClientRect()||{};l(t>r-f.BQ)},...h,...f.LL,children:[(0,r.jsx)(T,{$height:d}),(0,r.jsx)(M,{height:d}),(0,r.jsx)(s.Z,{url:`${f.Sd}/Start Menu`,view:"list",hideLoading:!0,hideShortcutIcons:!0,isStartMenu:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})}},96702:function(e,t,i){var r=i(64358),n=i(34254);t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const i=Math.min(e,(0,n.sI)()-r.bK);return{animate:"active",exit:{height:.75*i+"px",transition:{duration:r.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:r.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${i}px`,paddingTop:0},initial:{height:.75*i+"px",paddingTop:t?.5*i+"px":0}}}}}}]);