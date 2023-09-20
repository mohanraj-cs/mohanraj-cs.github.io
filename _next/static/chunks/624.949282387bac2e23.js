"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624,6753],{90624:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(85893),r=n(67294);const o=[["Libera.Chat","web.libera.chat/webirc/websocket/"],["ErgoTestnet","testnet.ergo.chat/webirc"],["InspIRCd Testnet","testnet.inspircd.org",8097]];var c=n(26753),s=n(56758),a=n(25804),l=n(64358);var f=e=>{let{id:t}=e;const{linkElement:n,processes:{[t]:{libs:[f=""]=[]}={}}={},title:u}=(0,s.z)(),[d,w]=(0,r.useState)(!1),[h,p]=(0,r.useState)([]),g=(0,r.useRef)(null);return(0,r.useEffect)((()=>{window.localStorage.getItem("kiwiirc")||window.localStorage.setItem("kiwiirc",JSON.stringify((e=>{const t=`${e}${[9,9,9,9].map((e=>Math.floor(Math.random()*e))).join("")}`;return{networks:o.map(((e,n)=>{let[i,r,o=443]=e;return{buffers:[{enabled:!0,name:"*",settings:{}}],connection:{direct:!0,encoding:"utf8",nick:t,port:o,server:r,tls:!0},id:n+1,name:i,settings:{show_raw_caps:!1}}}))}})("Guest")))}),[]),(0,r.useEffect)((()=>{if(d&&g.current?.contentWindow){const e=g.current.contentWindow;e?.kiwi.on("irc.join",((e,t)=>{let{channel:n}=e,{name:i}=t;return p((e=>[...new Set([...e,`${n}/${i}`])]))})),e?.kiwi.on("irc.part",((e,t)=>{let{channel:n}=e,{name:i}=t;return p((e=>e.filter((e=>e!==`${n}/${i}`))))})),n(t,"peekElement",g.current)}}),[t,n,d]),(0,r.useEffect)((()=>{u(t,`${a.Z.IRC.title}${0===h.length?"":` - ${h.join(", ")}`}`)}),[h,t,u]),(0,i.jsxs)("div",{children:[!d&&(0,i.jsx)(c.default,{}),(0,i.jsx)("iframe",{ref:g,height:"100%",onLoad:()=>w(!0),src:f,title:t,width:"100%",...l.v0})]})}},26753:function(e,t,n){n.r(t);const i=n(10508).ZP.div.withConfig({componentId:"sc-29e5eb62-0"})`
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
`;t.default=i}}]);