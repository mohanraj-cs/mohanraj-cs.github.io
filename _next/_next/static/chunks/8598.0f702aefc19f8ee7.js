"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8598],{48598:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(85893),i=n(1864),s=n(67294);var a=n(10508).ZP.footer.withConfig({componentId:"sc-753ffae9-0"})`
  align-items: center;
  background-color: rgb(51, 51, 51);
  color: rgb(247, 247, 247);
  display: flex;
  font-size: 12px;
  font-weight: 200;
  height: ${e=>{let{theme:t}=e;return t.sizes.fileExplorer.statusBarHeight}};
  padding: 0 5px;
  white-space: nowrap;
  width: 100%;

  div {
    display: flex;
    margin-top: -1px;
    padding: 0 3px 0 10px;

    &::after {
      border-right: 1px solid rgb(247, 247, 247);
      content: "";
      height: 11px;
      margin-left: 11px;
      position: relative;
      top: 3px;
    }

    .selected {
      margin-right: 10px;
      overflow: hidden;
    }
  }
`,c=n(26724),o=n(50728),l=n(34254);var u=e=>{let{count:t,directory:n,fileDrop:u,selected:f}=e;const{exists:d,lstat:p,stat:h}=(0,c.o)(),[g,x]=(0,s.useState)(-1),[w,m]=(0,s.useState)(!1),v=e=>m(e>225),b=(0,s.useRef)(null);return(0,s.useEffect)((()=>{(async()=>{x(await f.reduce((async(e,t)=>{const r=await e;if(-2===r)return-2;const s=(0,i.join)(n,t);try{if(await d(s))return(await p(s)).isDirectory()?-2:(-1===r?0:r)+(await h(s)).size}catch{}return e}),Promise.resolve(-1)))})()}),[n,d,p,f,h]),(0,s.useLayoutEffect)((()=>{b.current&&v(b.current.getBoundingClientRect().width)}),[]),(0,o.Z)(b.current,(0,s.useCallback)((e=>{let[{contentRect:{width:t=0}={}}]=e;return v(t)}),[])),(0,r.jsxs)(a,{ref:b,onContextMenuCapture:l.nK,...u,children:[(0,r.jsxs)("div",{...(0,l.PS)("Total item count"),children:[t," item",1===t?"":"s"]}),w&&f.length>0&&(0,r.jsxs)("div",{className:"selected",...(0,l.PS)("Selected item count and size"),children:[f.length," item",1===f.length?"":"s"," selected",-1!==g&&-2!==g?`\xa0\xa0${(0,l.UR)(g)}`:""]})]})}},50728:function(e,t,n){var r=n(67294);t.Z=(e,t)=>{const[n,i]=(0,r.useState)();(0,r.useEffect)((()=>{t&&i(new ResizeObserver(t))}),[t]),(0,r.useEffect)((()=>(e instanceof HTMLElement&&n?.observe(e),()=>{e instanceof HTMLElement&&n?.unobserve(e)})),[e,n])}}}]);