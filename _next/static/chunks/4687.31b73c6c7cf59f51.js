"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4687],{24687:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var i=r(85893),n=r(1864),s=r(67294),o=r(8686),c=r(56758);var l=e=>{let{id:t,onClick:r}=e;const{closeWithTransition:n}=(0,c.z)();return(0,i.jsxs)("nav",{className:"buttons",children:[(0,i.jsx)(o.Z,{onClick:r,children:"OK"}),(0,i.jsx)(o.Z,{onClick:()=>n(t),children:"Cancel"})]})},a=r(26724);var d=e=>{const{stat:t}=(0,a.o)(),[r,i]=(0,s.useState)();return(0,s.useEffect)((()=>{!r&&e&&t(e).then(i)}),[t,r,e]),r},p=r(64382),h=r(25804),x=r(42362),u=r(64358),f=r(34254),g=r(6529),b=r(62065);const m=e=>e?.toLocaleString(u.ZW,{dateStyle:"long",timeStyle:"medium"}).replace(" at ",", ")||"",j=e=>{let{icon:t,id:r,isShortcut:o,pid:j,url:y}=e;const{closeWithTransition:w}=(0,c.z)(),{setIconPositions:$}=(0,b.k)(),v=(0,s.useMemo)((()=>(0,f.RT)(y||"")),[y]),{type:C}=p.Z[v]||{},S=C||`${v.toUpperCase().replace(".","")} File`,k=(0,s.useRef)(null),{readdir:Z,rename:z,stat:T,updateFolder:F}=(0,a.o)(),E=d(y),[L,N]=(0,s.useState)(0),[R,M]=(0,s.useState)(0),[D,I]=(0,s.useState)(0),P=(0,s.useMemo)((()=>E?.isDirectory()),[E]),W=D||(P?0:E?.size),A=(0,s.useRef)(!1),_=(0,s.useRef)();return(0,s.useEffect)((()=>{if(!A.current&&!o&&P){A.current=!0,_.current=new AbortController;const e=async t=>{if(_.current?.signal.aborted)return;const r=await Z(t);let i=0,s=0,o=0;for(const c of r){const r=await T((0,n.join)(t,c));r.isDirectory()?(s+=1,await e((0,n.join)(t,c))):(i+=1,o+=r.size)}I((e=>e+o)),N((e=>e+i)),M((e=>e+s))};e(y)}}),[P,o,Z,T,y]),(0,s.useEffect)((()=>()=>_.current?.abort()),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{className:"header",children:[(0,i.jsxs)("th",{scope:"row",children:[(0,i.jsx)(x.Z,{imgSize:32,src:t}),o&&(0,i.jsx)(x.Z,{imgSize:48,src:u.MB})]}),(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:k,autoComplete:"off",defaultValue:(0,n.basename)(y,o?(0,n.extname)(y):void 0),spellCheck:"false",type:"text"})})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:P?"Type:":"Type of file:"}),(0,i.jsx)("td",{children:P?"File folder":o||S?`${o?"Shortcut":S} (${v})`:"File"})]}),!P&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:j?"Opens with:":"Description:"}),(0,i.jsxs)("td",{children:[j&&h.Z[j]?.icon&&(0,i.jsx)(x.Z,{imgSize:16,src:h.Z[j].icon}),j?h.Z[j]?.title||j:(0,n.basename)(y||"")]})]}),!P&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Location:"}),(0,i.jsx)("td",{children:(0,n.dirname)(y)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Size"}),(0,i.jsx)("td",{children:W?`${(0,f.UR)(W)} (${W.toLocaleString()} byte${1===W?"":"s"})`:"0 bytes"})]}),P&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Contains"}),(0,i.jsx)("td",{children:`${L.toLocaleString()} Files, ${R.toLocaleString()} Folders`})]}),(0,i.jsx)("tr",{children:(0,i.jsx)("td",{className:"spacer",colSpan:2})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Created:"}),(0,i.jsx)("td",{children:m(E?.birthtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Modified:"}),(0,i.jsx)("td",{children:m(E?.mtime)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"row",children:"Accessed:"}),(0,i.jsx)("td",{children:m(E?.atime)})]})]})}),(0,i.jsx)(l,{id:r,onClick:async()=>{if(k.current&&y&&k.current.value!==(0,n.basename)(y)){let e=(0,g.gL)(k.current.value).trim();if(e?.endsWith(".")&&(e=e.slice(0,-1)),e){const t=(0,n.dirname)(y),r=`${(0,n.join)(t,e)}${o?(0,n.extname)(y):""}`;await z(y,r)&&F(t,r,y),(0,n.dirname)(y)===u.Ll&&$((e=>{const{[y]:t,...i}=e;return t&&(i[r]=t),i}))}}w(r)}})]})};var y=(0,s.memo)(j);var w=r(10508).ZP.div.withConfig({componentId:"sc-88286a86-0"})`
  padding: 0 8px 0 6px;

  table {
    background-color: #fff;
    border: 1px solid rgb(217, 217, 217);
    height: calc(100% - 36px - 28px);
    padding-top: 14px;
    position: relative;
    top: -1px;
    width: 100%;

    tbody {
      display: flex;
      flex-direction: column;
      font-size: 11.5px;
      gap: 11px;

      tr {
        display: flex;
        padding: 0 12px;
        place-content: center;
        place-items: center;

        &.header {
          margin-bottom: -4px;
          margin-top: -2px;
          padding: 0 10px 0 12px;
        }
      }

      th {
        font-weight: 400;
        text-align: left;
        width: 74px;

        picture:nth-child(2) {
          position: absolute;
          top: -2px;
        }
      }

      td {
        cursor: text;
        display: flex;
        user-select: text;
        width: calc(100% - 70px);

        &.spacer {
          border-bottom: 1px solid rgb(160, 160, 160);
          display: block;
          width: 100%;
        }

        input {
          border: 1px solid rgb(122, 122, 122);
          font-size: 11px;
          height: 23px;
          padding: 3px;
          width: 100%;
        }

        img {
          margin-right: 7px;
        }
      }
    }
  }

  nav {
    &.tabs {
      display: flex;
      height: 28px;
      padding-top: 7px;
      position: relative;
      z-index: 1;

      button {
        background-color: #fff;
        border: 1px solid rgb(217, 217, 217);
        border-bottom-width: 0;
        display: flex;
        font-size: 11px;
        height: 21px;
        padding: 1px 7px;
        place-content: center;
        width: auto;
      }
    }

    &.buttons {
      display: flex;
      gap: 8px;
      height: 35px;
      margin-right: -1px;
      place-content: flex-end;
      place-items: center;

      button {
        height: 21px;
        line-height: 19px;
      }
    }
  }
`,$=r(71043),v=r(7459);var C=e=>{let{id:t}=e;const{closeWithTransition:r,icon:l,processes:{[t]:a}={}}=(0,c.z)(),{shortcutPath:p,url:h}=a||{},x=p||h||"",g=d(x),[{getIcon:b,icon:m,pid:j}]=(0,$.Z)(x,g?.isDirectory()),{prependFileToTitle:C}=(0,v.Z)(t),S=(0,s.useRef)(),k=(0,s.useRef)(null);return(0,s.useEffect)((()=>{l(t,m),"function"===typeof b&&(S.current=new AbortController,b(S.current.signal)),x&&C((0,n.basename)(x,p?(0,n.extname)(x):void 0),!1,!0)}),[x,b,m,t,C,l,p]),(0,s.useEffect)((()=>()=>{try{S?.current?.abort?.()}catch{}}),[]),(0,s.useEffect)((()=>k.current?.focus()),[]),(0,i.jsxs)(w,{ref:k,onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,f.nK)(e)},onKeyDownCapture:e=>{let{key:i}=e;"Escape"===i&&r(t)},...u.LL,children:[(0,i.jsx)("nav",{className:"tabs",children:(0,i.jsx)(o.Z,{children:"General"})}),(0,i.jsx)(y,{icon:m,id:t,isShortcut:Boolean(a?.shortcutPath),pid:j,url:x})]})}},8686:function(e,t,r){const i=r(10508).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
  background-color: rgb(225, 225, 225);
  border: 1px solid rgb(173, 173, 173);
  display: grid;
  font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
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
`;t.Z=i},71043:function(e,t,r){var i=r(67294),n=r(87426),s=r(26724),o=r(64358),c=r(34254);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[l,a]=(0,i.useState)((()=>({icon:"",pid:"",url:""}))),d=(0,i.useRef)(!1),p=e=>{a(e),d.current=!1},{fs:h,rootFs:x}=(0,s.o)();return(0,i.useEffect)((()=>{if(!d.current&&h&&x){d.current=!0;const i=(0,c.RT)(e);!i||t&&!o.my.has(i)&&"FileSystemAccess"!==x.mntMap[e]?.getName()?(0,n.g7)(h,x,e,t,r,p):(0,n.Z7)(h,e,i,p)}}),[h,r,t,e,x]),[l,a]}},7459:function(e,t,r){var i=r(67294),n=r(56758),s=r(25804),o=r(64358);t.Z=e=>{const{title:t}=(0,n.z)(),[r]=e.split(o.CC),{title:c}=s.Z[r]||{};return{appendFileToTitle:(0,i.useCallback)(((r,i)=>{const n=r?` - ${r}${i?` ${o.xy}`:""}`:"";t(e,`${c}${n}`)}),[e,c,t]),prependFileToTitle:(0,i.useCallback)(((r,i,n)=>{const s=r?`${i?`${o.xy} `:""}${r}${n?" ":" - "}`:"";t(e,`${s}${c}`)}),[e,c,t])}}}}]);