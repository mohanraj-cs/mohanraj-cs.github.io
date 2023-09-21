"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1856],{8686:function(e,r,t){const o=t(10508).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
  background-color: rgb(225, 225, 225);
  border: 1px solid rgb(173, 173, 173);
  display: grid;
  font-family: ${e=>{let{theme:r}=e;return r.formats.systemFont}};
  font-size: 12px;
  height: 23px;
  line-height: ${21}px;
  transition: background-color 0.25s ease;
  width: 73px;

  &:focus,
  &.focus {
    border: 2px solid rgb(0, 120, 215);
    line-height: ${19}px;
  }

  &:hover {
    background-color: rgb(229, 241, 251);
    border: 1px solid rgb(0, 120, 215);
    line-height: ${21}px;
  }

  &:active {
    background-color: rgb(204, 228, 247);
    border: 1px solid rgb(0, 84, 153);
    line-height: ${21}px;
    transition: none;
  }

  &:disabled {
    background-color: rgb(204, 204, 204);
    border: 1px solid rgb(191, 191, 191);
    line-height: ${21}px;
  }
`;r.Z=o},21856:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var o=t(85893),n=t(1864),i=t(67294),s=t(8686),a=t(10508);const l=a.iv`
  animation: gradient 5s ease-in-out alternate infinite;
  background: ${e=>{let{theme:r}=e;return`linear-gradient(-45deg, #fff, ${r.colors.progressBarRgb}, #fff)`}};
  background-size: 300% 300%;
  content: "";
  inset: 0;
  position: absolute;
`;var d=a.ZP.div.withConfig({componentId:"sc-10fd82b6-0"})`
  h1,
  div {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px - 41px - 2px);
    justify-content: space-around;
    padding: 0 22px;

    progress {
      border: 1px solid rgb(188, 188, 188);
      height: 15px;
      overflow: hidden;
      position: relative;
      width: 100%;

      &::-webkit-progress-bar {
        background: rgb(230, 230, 230);
      }

      &::-webkit-progress-value {
        background: ${e=>{let{theme:r}=e;return r.colors.progressBarRgb}};
      }

      &::-moz-progress-bar {
        background: ${e=>{let{theme:r}=e;return r.colors.progressBarRgb}};
      }

      &:indeterminate {
        /* stylelint-disable-next-line block-no-empty */
        &::-moz-progress-bar {
          ${l}
        }

        /* stylelint-disable-next-line block-no-empty */
        &::after {
          ${l}
        }
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }

        50% {
          background-position: 100% 50%;
        }

        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  div {
    margin-top: -3px;
  }

  h1 {
    background: linear-gradient(
      to right,
      rgb(220, 229, 244),
      rgb(155, 192, 227),
      rgb(0, 43, 85)
    );
    display: flex;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    place-items: flex-start;
    white-space: nowrap;
    width: 100%;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
  }

  nav {
    background-color: rgb(240, 240, 240);
    border-top: 1px solid rgb(223, 223, 223);
    bottom: 0;
    box-sizing: content-box;
    display: flex;
    height: 41px;
    padding-bottom: 1px;
    place-items: center;
    position: absolute;
    width: 100%;

    ${s.Z} {
      padding-bottom: 1px;
      position: absolute;
      right: 23px;
    }
  }
`,c=t(56758),g=t(64358),b=t(34254);const p=e=>Array.isArray(e?.[0]);var u=e=>{let{id:r}=e;const{argument:t,closeWithTransition:a,processes:{[r]:l}={},title:u}=(0,c.z)(),{closing:h,fileReaders:f,url:x}=l||{},[m,k]=(0,i.useState)(),[v="",{name:$=""}={}]=m||[],[y,w]=(0,i.useState)(0),E=(0,i.useMemo)((()=>x&&!f?"Extracting":"Copying"),[f,x]),I=(0,i.useRef)(!1),C=(0,i.useCallback)((()=>{I.current=!1,a(r)}),[a,r]),z=(0,i.useCallback)((e=>{let[r,...t]=e;const o=0===t.length;r.read().then((()=>{if(w((e=>e+1)),o)r.done?.(),C();else{const[{directory:e,name:r}]=t;k([e,{name:r}])}})),o||z(t)}),[C]),j=(0,i.useCallback)((e=>{let[[r,t,o],...n]=e,i=0;k([t,r]),o.addEventListener("progress",(e=>{let{loaded:r=0}=e;const t=r-i;w((e=>e+t)),i=r}),{passive:!0}),o.addEventListener("loadend",(()=>{n.length>0?j(n):C()}),g.K7),o.readAsArrayBuffer(r)}),[C]),N=(0,i.useMemo)((()=>p(f)?f.reduce(((e,r)=>{let[{size:t=0}]=r;return e+t}),0):f?.length||Number.POSITIVE_INFINITY),[f]);return(0,i.useEffect)((()=>{if(!I.current)if(f)if(f?.length>0)if(I.current=!0,p(f))j(f);else{const[{directory:e,name:r}]=f;k([e,{name:r}]),z(f)}else a(r);else x&&k([(0,n.dirname)(x),{name:(0,n.basename)(x)}])}),[a,f,r,j,z,x]),(0,i.useEffect)((()=>{if(I.current){const e=Math.floor(y/N*100);t(r,"progress",e),u(r,`${e}% complete`)}}),[t,r,y,u,N]),(0,i.useEffect)((()=>u(r,`${E}...`)),[E,r,u]),(0,i.useEffect)((()=>()=>{h&&I.current&&(p(f)?f.forEach((e=>{let[,,r]=e;return r.abort()})):(f?.forEach((e=>e.abort())),f?.[0]?.done?.()))}),[h,f]),(0,o.jsxs)(d,{onContextMenu:b.nK,children:[(0,o.jsx)("h1",{children:$?`${E} '${$.length>=37?`${$.slice(0,37)}...`:$}'`:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:v?`To '${v}'`:""}),(0,o.jsx)("progress",{max:N,value:N===Number.POSITIVE_INFINITY?void 0:y})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(s.Z,{onClick:()=>a(r),children:"Cancel"})})]})}}}]);