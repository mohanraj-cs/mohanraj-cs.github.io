"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1990],{11990:function(e,t,i){i.r(t),i.d(t,{default:function(){return k}});var o=i(85893),n=i(67294),r=i(10508);var c=r.ZP.div.withConfig({componentId:"sc-b9e2294f-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  div {
    height: calc(100% - 56px - 80px);
    overflow-y: scroll;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  h2 {
    font-size: 18px;
    height: 56px;
    padding: 16px 24px;
  }

  h4 {
    padding: 0 0 6px 23px;
  }

  nav {
    background-color: #fff;
    height: 80px;
    width: 100%;

    button {
      background-color: rgb(204, 204, 204);
      font-size: 15px;
      font-weight: 600;
      height: 32px;
      margin: 24px;
      position: absolute;
      right: 0;
      width: 200px;

      &:hover {
        background-color: rgb(216, 216, 216);
      }

      &:active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;var l=r.ZP.ul.withConfig({componentId:"sc-67e445d0-0"})`
  border-top: 1px solid transparent;
  padding-bottom: 9px;
  position: relative;
  width: 100%;

  &::before {
    border-top: ${e=>{let{$hideBorder:t}=e;return"1px solid "+(t?"transparent":"rgb(192, 192, 194)")}};
    content: "";
    height: 1px;
    left: 17px;
    position: absolute;
    top: -1px;
    width: calc(100% - 34px);
  }

  li {
    &:active {
      scale: 0.975;
    }

    &:first-child {
      margin-top: 2px;
    }

    &:hover {
      background-color: rgb(222, 222, 222);
    }

    figure {
      display: flex;
      padding: 0 23px;

      figcaption {
        font-size: 15px;
        padding: 0 12px;
      }

      picture {
        background-color: rgb(0, 120, 215);
        display: flex;
        height: 40px;
        place-content: center;
        place-items: center;
        width: 40px;
      }
    }

    &.selected {
      background-color: rgb(12, 131, 218);

      figcaption {
        color: #fff;
      }
    }

    padding: 5px 0;
  }
`,s=i(87426),d=i(56758),p=i(25804),a=i(62065),h=i(30663),x=i(42362),u=i(64358),f=i(34254);const g=new Set(["BoxedWine","JSDOS","Marked","MonacoEditor","OpenType","PDF","Paint","Photos","Ruffle","TinyMCE","V86","VideoPlayer","Vim","Webamp"]),b=e=>{let{icon:t,onClick:i,selected:n,title:r}=e;return(0,o.jsx)("li",{className:n?"selected":"",children:(0,o.jsx)(h.Z,{onClick:i,children:(0,o.jsxs)("figure",{children:[(0,o.jsx)(x.Z,{alt:r,displaySize:24,imgSize:32,src:t}),(0,o.jsx)("figcaption",{children:r})]})})})},j=e=>{let{id:t}=e;const{closeWithTransition:i,open:r,processes:{[t]:x}={}}=(0,d.z)(),{foregroundId:j,setForegroundId:k}=(0,a.k)(),{url:m}=x||{},v=m?(0,f.RT)(m):"",w=(0,s.Wd)(v),{title:C,icon:y}=w&&p.Z[w]||{},[O,S]=(0,n.useState)(w),[Z,z]=(0,n.useState)(!1),E=(0,n.useRef)(""),I=(0,n.useCallback)((e=>{r(e,{url:m}),i(t)}),[i,t,r,m]),P=(0,n.useCallback)((e=>{E.current===e?I(e):(E.current=e,setTimeout((()=>{E.current=""}),u.jx.DOUBLE_CLICK),S(e))}),[I]);return(0,n.useEffect)((()=>{const e=j===t;Z?e||i(t):(e||k(t),setTimeout((()=>z(!0)),u.jx.WINDOW))}),[Z,i,j,t,k]),(0,o.jsxs)(c,{onContextMenu:f.nK,children:[(0,o.jsx)("h2",{children:"How do you want to open this file?"}),(0,o.jsxs)("div",{children:[C&&y&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Keep using this app"}),(0,o.jsx)(l,{children:(0,o.jsx)(b,{icon:y,onClick:()=>P(w),selected:O===w,title:C},C)}),(0,o.jsx)("h4",{children:"Other options"})]}),(0,o.jsx)(l,{$hideBorder:!C||!y,children:Object.entries(p.Z).filter((e=>{let[t]=e;return g.has(t)&&t!==w})).map((e=>{let[t,{icon:i,title:n}]=e;return(0,o.jsx)(b,{icon:i,onClick:()=>P(t),selected:O===t,title:n},n)}))})]}),(0,o.jsx)("nav",{children:(0,o.jsx)(h.Z,{onClick:()=>I(O),children:"OK"})})]})};var k=(0,n.memo)(j)}}]);