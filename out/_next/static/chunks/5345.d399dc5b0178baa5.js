"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5345],{15345:function(e,t,r){r.r(t),r.d(t,{default:function(){return fe}});var n=r(85893),i=r(31626),o=r(67294),a=r(35814),s=r(64358);const c=["wss://ca.relayable.org","wss://la.relayable.org","wss://au.relayable.org","wss://he.relayable.org","wss://relay.damus.io"],l="nostr_private_key",p="nostr_public_key",d="?",u="/.well-known/nostr.json",b=s.qe/s.i2*30,h={hour:"numeric",hour12:!0,minute:"numeric"},g={bounce:0,duration:.3,type:"spring"},x={animate:{transform:"translateX(0%)"},exit:{transform:"translateX(100%)"},initial:{transform:"translateX(100%)"},...g},f={animate:{transform:"translateX(0%)"},exit:{transform:"translateX(-100%)"},initial:{transform:"translateX(-100%)"},...g},m=e=>{if(e.startsWith("nprofile")||e.startsWith("npub")||e.startsWith("nsec"))try{const{data:t}=a.uD.decode(e);if("string"==typeof t)return t;if("object"==typeof t&&"string"==typeof t.pubkey)return t.pubkey}catch{return e}return e},w=()=>localStorage.getItem(l)||"",v=e=>{if(e)return m(e);const t=(0,a.wQ)(),r=(0,a.$3)(t);return localStorage.setItem(p,r),localStorage.setItem(l,t),m(r)},y=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const[,t=""]=e.find((e=>{let[t]=e;return"p"===t}))||[];return t},k={},A=async(e,t,r)=>{if(k[e]||!1===k[e])return k[e];k[e]=t;try{const n=await(window.nostr?.nip04?window.nostr.nip04.decrypt(r,t):a._J.decrypt(m(w()),r,t));return k[e]=n,n}catch{return k[e]="",""}},j=async(e,t)=>{try{return await(window.nostr?.nip04?window.nostr.nip04.encrypt(t,e):a._J.encrypt(m(w()),t,e))}catch{}return""},C=(e,t)=>e.created_at-t.created_at,E=(e,t)=>t.created_at-e.created_at,M=e=>{const t=Date.now()-new Date(e*s.i2).getTime(),r=Math.floor(t/1e3),n=Math.floor(r/60),i=Math.floor(n/60),o=Math.floor(i/24),a=Math.floor(o/7);return a>0?`${a}w`:o>0?`${o}d`:i>0?`${i}h`:n>0?`${n}m`:r<10?"now":`${r}s`},S=(e,t)=>[{action:()=>navigator.clipboard?.writeText(a.uD.npubEncode(e)),label:"Copy npub address"},...t?[{action:()=>navigator.clipboard?.writeText(a.uD.nsecEncode(t)),label:"Copy nsec address"}]:[{action:()=>navigator.clipboard?.writeText(e),label:"Copy hex address"}]],$=async e=>{let t=e;return t.id=(0,a.s_)(e),window.nostr?.signEvent?t=await window.nostr.signEvent(t):t.sig=(0,a.o$)(t,m(w())),t},K=(e,t)=>{const{about:r,banner:n,display_name:i,name:o,nip05:s,npub:c,picture:l,username:p,website:d}=t||{};return{about:r,banner:n,data:t,nip05:s,picture:l,userName:i||o||p||(c||(e.startsWith("npub")?e:a.uD.npubEncode(e))).slice(0,12),website:d}},N={},_=new Set([408,504]),z=e=>{switch(e){case WebSocket.prototype.CONNECTING:return"🟡";case WebSocket.prototype.OPEN:return"🟢";case WebSocket.prototype.CLOSING:return"🟠";default:return"🔴"}},B=e=>e.replace(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif|webp)/gi,(e=>`<img loading="lazy" src="${e}" />`)),Z=e=>{const t=new Date(e*s.i2),r=new Date,n=new Date(r.getFullYear(),r.getMonth(),r.getDate()).getTime(),i=new Date(r.getFullYear(),r.getMonth(),r.getDate()-1).getTime(),o=t.getTime(),a=t.toLocaleString("en-US",h);return o>n?a:o>i?`Yesterday at ${a}`:o>n-6*s.xR?t.toLocaleString("en-US",{...h,weekday:"long"}):t.toLocaleString("en-US",{...h,day:"numeric",month:"short",year:"numeric"})};var R=r(10508),U=R.ZP.div.withConfig({componentId:"sc-f61ee497-0"})`
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
    height: calc(100% - 69px);
    position: relative;
  }
`;const P=(0,o.createContext)([Object.create(null),()=>{}]),D=e=>{const[t,r]=(0,o.useContext)(P),{onEvent:n}=(0,i.sE)({enabled:!!e,filter:{authors:[e],kinds:[0]}});return n((t=>{let{content:n,pubkey:i}=t;if(e&&e===i)try{const t=JSON.parse(n);t&&r((r=>({...r,[e]:K(e,t)})))}catch{}})),{...e?t[e]||K(e):{},setProfiles:r}},O=(0,o.memo)((e=>{let{children:t}=e;return(0,n.jsx)(P.Provider,{value:(0,o.useState)(Object.create(null)),children:t})}));var T=r(30663),L=r(54314);const H=(0,o.memo)((()=>(0,n.jsx)("svg",{style:{backgroundColor:"#cacdd2"},viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M256 281.602c-151.55 0-204.8 76.796-204.8 128v76.796h409.6v-76.796c0-51.204-53.25-128-204.8-128ZM371.2 140.8c0 63.622-51.575 115.2-115.2 115.2s-115.2-51.578-115.2-115.2c0-63.624 51.575-115.198 115.2-115.198S371.2 77.176 371.2 140.8Zm0 0",fill:"#fff",transform:"translate(0, 50)"})}))),I=(0,o.memo)((()=>(0,n.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M21.1 2.9c-1.1-1.1-3-1.1-4.2 0l-8.1 7.9c-.7.7-1.2 1.6-1.4 2.6L7 15.6c-.1.3 0 .7.3.9.2.2.4.3.7.3h.2l2.2-.4c1-.2 1.9-.7 2.6-1.4l8.1-8c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2zm-9.4 10.6c-.4.4-1 .7-1.6.8l-.8.2.2-.7c.1-.6.4-1.1.9-1.6l6.2-6.1L18 7.4l-6.3 6.1zm8-7.9-.4.4-1.4-1.3.4-.4c.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.6 0 .2 0 .5-.3.7z"}),(0,n.jsx)("path",{d:"M20 9.9c-.6 0-1 .4-1 1V16c0 1.7-1.3 3-3 3H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h5c.6 0 1-.4 1-1s-.4-1-1-1H8C5.2 3 3 5.2 3 8v8c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-5.1c0-.5-.4-1-1-1z"})]}))),Q=(0,o.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m16.692 12.474-13.186.786c-.314 0-.47.157-.47.314l-1.884 6.441c-.314.786-.162 1.875.627 2.505.631.47 1.727.58 2.355.323l17.58-8.798c.942-.47 1.413-1.413 1.256-2.356a2.496 2.496 0 0 0-1.255-1.571L4.134 1.163c-.785-.263-1.727-.157-2.355.315-.784.628-.941 1.57-.627 2.513l1.883 6.441c0 .157.314.314.471.314l13.186.786s.47 0 .47.471-.47.471-.47.471Z"})}))),W=(0,o.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M244 400 100 256l144-144M120 256h292",style:{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"50px"}})}))),F=(0,o.memo)((()=>(0,n.jsxs)("svg",{viewBox:"-4 0 27 19",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Z",style:{stroke:"currentColor",strokeWidth:"3px"}}),(0,n.jsx)("path",{d:"M7.844 17.563c1.039 1.046 2.031 1.039 3.078 0l1.172-1.172c.11-.11.203-.141.344-.141h1.656c1.476 0 2.18-.703 2.18-2.18v-1.656c0-.14.038-.242.14-.344l1.172-1.18c1.047-1.038 1.039-2.03 0-3.07l-1.172-1.172a.454.454 0 0 1-.14-.343V4.648c0-1.476-.704-2.18-2.18-2.18h-1.656a.443.443 0 0 1-.344-.14l-1.172-1.172C9.875.11 8.882.11 7.844 1.164L6.672 2.328a.443.443 0 0 1-.344.14H4.672c-1.477 0-2.18.688-2.18 2.18v1.657c0 .14-.039.242-.14.343L1.18 7.82c-1.047 1.04-1.04 2.032 0 3.07l1.172 1.18c.101.102.14.203.14.344v1.656c0 1.477.703 2.18 2.18 2.18h1.656c.14 0 .234.031.344.14l1.172 1.172Zm.242-4.204a.883.883 0 0 1-.664-.28l-2.5-2.798a.778.778 0 0 1-.203-.531c0-.469.336-.805.82-.805.266 0 .461.086.633.274l1.883 2.101 3.765-5.375c.188-.265.39-.375.703-.375.485 0 .829.336.829.79a.936.936 0 0 1-.18.515l-4.383 6.148a.831.831 0 0 1-.703.336Z",fill:"#0095f6"})]})));var V=r(56758),G=r(25804);const J=()=>{const[e,t]=(0,o.useState)(""),r=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{r.current||(r.current=!0,(async()=>await(window.nostr?.getPublicKey())||localStorage.getItem(p)||"")().then(v).then(t))}),[]),e};var Y=R.ZP.figure.withConfig({componentId:"sc-e96015b5-0"})`
  > div {
    cursor: ${e=>{let{$clickable:t}=e;return t?"pointer":"default"}};
    position: relative;

    > img,
    > svg {
      cursor: inherit;
    }

    div.verified {
      cursor: inherit;

      svg {
        border: none;
        bottom: 2px;
        color: #000;
        cursor: inherit;
        fill: #000;
        height: 18px;
        left: -2px;
        max-height: auto;
        max-width: 18px;
        min-height: auto;
        min-width: 18px;
        position: absolute;
        width: 18px;

        path {
          cursor: inherit;
        }
      }
    }
  }
`,X=e=>{let{children:t,nip05:r,onClick:i,picture:a,pubkey:s,userName:c="Unknown"}=e;const l=((e,t)=>{const[r,n]=(0,o.useState)("");return(0,o.useEffect)((()=>{(async(e,t)=>{if(!e||!t)return"";try{const[r,n]=e.split("@");if(N[t]===n)return n;if("number"==typeof N[t]&&!_.has(N[t]))return"";const i=await fetch(`https://${n}${u}`);if(i.ok){const{names:e={}}=await i.json()||{};let o=!1;if("_"===r){const[n,...i]=Object.values(e);o=(0===i.length?n:e[r])===t}else e[r]&&(o=e[r]===t);return o&&(N[t]=n),o?n:""}N[t]=i.status}catch{N[t]=0}return""})(e,t).then(n)}),[e,t]),r})(r,s),[p,d]=(0,o.useState)("");return(0,n.jsxs)(Y,{$clickable:Boolean(i),children:[(0,n.jsxs)("div",{onClick:i,children:[a&&(0,n.jsx)("img",{alt:c,onLoad:()=>d(a),src:a,style:p===a?{}:{position:"absolute",visibility:"hidden"}}),(!a||p!==a)&&(0,n.jsx)(H,{}),l&&(0,n.jsx)("div",{className:"verified",title:l,children:(0,n.jsx)(F,{})})]}),(0,n.jsxs)("figcaption",{children:[(0,n.jsx)("span",{children:c}),t]})]})},q=e=>{let{lastEvent:t,onClick:r,pubkey:i,publicKey:a,unreadEvent:c}=e;const{content:l="",created_at:p=0,id:d,pubkey:u}=t||{},[b,h]=(0,o.useState)(""),[g,x]=(0,o.useState)(""),{nip05:f,picture:m,userName:w}=D(i),v=c?"unread":void 0,{contextMenu:y}=(0,L.H)(),{onContextMenuCapture:k}=(0,o.useMemo)((()=>y?.((()=>[{action:r,icon:"🔐",label:"Start end-to-end encrypted chat"},s.Os,...S(i)]))),[y,r,i]);return(0,o.useEffect)((()=>{l&&A(d,l,i).then((e=>e&&h(e)))}),[l,d,i]),(0,o.useEffect)((()=>{let e=0;return p&&(x(M(p)),e=window.setInterval((()=>x(M(p))),s.qe)),()=>window.clearInterval(e)}),[p,t]),(0,n.jsx)("li",{className:v,onContextMenuCapture:k,children:(0,n.jsx)(T.Z,{onClick:r,children:(0,n.jsx)(X,{nip05:f,picture:m,pubkey:i,userName:w,children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:v,children:[u===a?"You: ":"",b||l]}),g?"·":"",(0,n.jsx)("div",{children:g})]})})})})},ee=R.ZP.div.withConfig({componentId:"sc-19191473-0"})`
  display: flex;
  place-items: center;

  textarea {
    background-color: #3a3b3c;
    border-radius: 20px;
    color: #b0b3b8;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 14px;
    height: 35px;
    margin: 12px 0 12px 12px;
    overflow: hidden;
    padding: 8px 14px 4px;
    resize: none;
    width: 100%;

    &:disabled {
      &::placeholder {
        color: rgba(117, 117, 117, 75%);
      }
    }
  }

  svg {
    cursor: pointer;
    fill: #0084ff;
    height: 28px;
    margin: 2px 12px 0 10px;
    width: 28px;

    path {
      cursor: pointer;
    }

    &:hover {
      fill: rgb(0, 132, 255, 75%);
    }
  }

  button {
    width: unset;

    &:disabled {
      svg {
        fill: #3a3b3c;
      }
    }
  }
`,te=r(34254),re=e=>{let{publicKey:t,recipientPublicKey:r}=e;const{publish:a}=(0,i.Hj)(),s=(0,o.useRef)(null),[c,l]=(0,o.useState)(!1),p=r===d,u=(0,o.useCallback)((async e=>{a(await(async(e,t,r)=>$({content:await j(e,r),created_at:(0,i.wL)(),kind:4,pubkey:t,tags:[["p",r]]}))(e,t,r)),s.current?.value&&(s.current.value=""),l(!1)}),[t,a,r]),b=(0,o.useCallback)((()=>{s.current&&(s.current.style.height="0px",s.current.style.height=`${Math.max(35,s.current.scrollHeight+4)}px`)}),[]);return(0,n.jsxs)(ee,{children:[(0,n.jsx)("textarea",{ref:s,disabled:p,onChange:()=>{l(Boolean(s.current?.value)),b()},onKeyDown:async e=>{const{key:t,shiftKey:r}=e,n=s.current?.value.trim();n&&"Enter"===t&&!r?(e.preventDefault(),await u(n)):l(Boolean(n)),b()},placeholder:"Type a message...",autoFocus:!0}),(0,n.jsx)(T.Z,{disabled:p||!c,onClick:()=>s.current?.value&&u(s.current.value),onContextMenuCapture:te.nK,children:(0,n.jsx)(Q,{})})]})},ne=r(71183),ie=r(38060),oe=(0,R.ZP)(ne.m.ol).withConfig({componentId:"sc-8a58fbcd-0"})`
  ${(0,ie.Z)()}
  background-color: #242526;
  height: 100%;
  overflow-y: auto;
  position: absolute;
  scrollbar-gutter: auto;
  top: 0;
  width: 100%;

  li {
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    margin: 8px;
    padding: 8px;
    position: relative;

    button {
      cursor: pointer;
    }

    &:hover {
      background-color: #3a3b3c;
    }

    &:focus,
    &.selected {
      background-color: rgba(45, 136, 255, 20%);
    }

    figure {
      cursor: pointer;
      display: flex;
      gap: 12px;
      width: calc(100% - 15px);

      img,
      svg {
        aspect-ratio: 1/1;
        border-radius: 50%;
        height: 56px;
        max-height: 56px;
        max-width: 56px;
        min-height: 56px;
        min-width: 56px;
        pointer-events: none;
        width: 56px;
      }

      figcaption {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 3px;
        justify-content: center;
        overflow: hidden;
        place-items: flex-start;

        > span {
          color: #e4e6eb;
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
        }

        > div {
          color: #b0b3b8;
          cursor: pointer;
          display: flex;
          font-size: 14px;
          gap: 3px;
          width: 100%;

          div:first-child {
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            &.unread {
              color: #fff;
              font-weight: 600;
            }
          }

          div:last-child {
            color: #8b8d92;
            cursor: pointer;
            padding-right: 10px;
          }
        }
      }
    }

    &.unread::after {
      background-color: rgb(46, 137, 255);
      border-radius: 50%;
      content: "";
      height: 10px;
      position: absolute;
      right: 8px;
      top: calc(50% - 5px);
      width: 10px;
    }
  }
`,ae=R.ZP.div.withConfig({componentId:"sc-8fce322f-0"})`
  background: linear-gradient(hsla(207, 100%, 72%, 50%), rgba(0, 0, 0, 100%));
  border-bottom: 1px solid rgb(57, 58, 59);
  color: #fff;
  display: flex;
  font-size: 24px;
  font-weight: 700;
  height: 69px;
  max-height: 69px;
  min-height: 69px;
  padding: 8px 15px;
  place-content: space-between;
  place-items: center;
  position: relative;
  text-shadow: 1px 1px 1px #000;

  figure {
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    place-items: center;

    svg,
    img {
      aspect-ratio: 1/1;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 38px;
      max-height: 38px;
      max-width: 38px;
      min-height: 38px;
      min-width: 38px;
      width: 38px;
    }

    div {
      display: flex;
      place-items: center;

      div.verified {
        svg {
          bottom: -3px;
          left: -5px;
        }
      }
    }
  }

  button:first-child {
    border-radius: 5px;
    cursor: pointer;
    height: 30px;
    padding-top: 3px;
    width: 30px;

    svg:first-child {
      background-color: rgb(0, 0, 0, 50%);
      border-radius: 5px;
      color: #fff;
      fill: #fff;
      height: 24px;
      outline: 4px solid rgb(0, 0, 0, 50%);
      pointer-events: none;
      width: 24px;
    }

    &:hover {
      svg:first-child {
        background-color: rgb(0, 0, 0, 75%);
        outline: 4px solid rgb(0, 0, 0, 75%);
      }
    }
  }

  .relays {
    display: flex;
    flex-direction: row;
    left: 0;
    padding-right: 67px;
    place-content: flex-end;
    position: absolute;
    top: 5px;
    width: 100%;

    ol {
      background-color: rgb(0, 0, 0, 50%);
      border-radius: 10px;
      display: flex;
      gap: 2px;
      max-width: calc(100% - 50px);
      overflow: hidden;
      padding: 2px 4px;

      li {
        font-size: 6.5px;
      }
    }
  }
`,se=e=>{let{goHome:t,newChat:r,publicKey:a,relayUrls:c,selectedRecipientKey:l}=e;const p=l===d?"":l||a,{banner:u,data:b,nip05:h,picture:g,setProfiles:x,userName:f="New message"}=D(p),{connectedRelays:m}=(0,i.Hj)(),v=(0,o.useMemo)((()=>Object.fromEntries(m.map((e=>{let{url:t,status:r}=e;return[t,r]})))),[m]),y=(0,o.useMemo)((()=>u?{background:`linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)), url(${u}) center center / cover no-repeat fixed border-box border-box #000`}:{}),[u]),{contextMenu:k}=(0,L.H)(),{publish:A}=(0,i.Hj)(),j=(0,o.useCallback)((async e=>{if(0!==Object.values(e).filter(Boolean).length)try{const t=b?Object.assign(b,e):e,r=await(async(e,t)=>$({content:JSON.stringify(t),created_at:(0,i.wL)(),kind:0,pubkey:e,tags:[]}))(p,t);A(r),x((e=>({...e,[p]:K(a,t)})))}catch{}}),[b,p,a,A,x]),{onContextMenuCapture:C}=(0,o.useMemo)((()=>k?.((()=>[...S(p,w()),s.Os,{action:()=>j({username:prompt("Username")||""}),label:"Edit Username"},s.Os,{action:()=>j({picture:prompt("Picture URL")||""}),label:"Edit Picture"},{action:()=>j({banner:prompt("Banner URL")||""}),label:"Edit Banner"}]))),[k,p,j]);return(0,n.jsxs)(ae,{onContextMenuCapture:te.nK,style:y,children:[(0,n.jsx)(T.Z,{onClick:l?t:r,children:l?(0,n.jsx)(W,{}):(0,n.jsx)(I,{})}),!l&&m.length>0&&(0,n.jsx)("div",{className:"relays",children:(0,n.jsx)("ol",{children:c.sort().map((e=>(0,n.jsx)("li",{title:e,children:z(v[e])},e)))})}),(0,n.jsx)(X,{nip05:h,onClick:l?void 0:C,picture:g,pubkey:p,userName:f})]})},ce=R.ZP.ol.withConfig({componentId:"sc-ddd01a72-0"})`
  ${(0,ie.Z)()}
  height: 100%;
  overflow-x: auto;

  li:not(:first-child) {
    border-radius: 15px;
    color: #fff;
    list-style: none;
    margin: 12px;
    padding: 12px;
    position: relative;

    &.sent {
      background-color: #0084ff;
      margin-left: 65px;
    }

    &.received {
      background-color: #3e4042;
      margin-left: 40px;
      margin-right: 50px;
    }

    &[data-timestamp] {
      margin-top: 50px;

      &:nth-child(2) {
        margin-top: 30px;
      }

      &::before {
        color: #8b8d92;
        content: attr(data-timestamp);
        font-size: 11px;
        font-weight: 700;
        left: 0;
        position: absolute;
        text-align: center;
        top: -28px;
        width: 100%;
      }

      &.sent {
        &::before {
          margin-left: -65px;
          margin-right: -12px;
          width: calc(100% + 65px + 12px);
        }
      }

      &.received {
        &::before {
          margin-left: -40px;
          margin-right: -50px;
          width: calc(100% + 90px);
        }
      }
    }

    div {
      cursor: auto;
      overflow: hidden;
      user-select: text;
      word-wrap: break-word;

      img {
        border-radius: 5px;
        margin: 6px 0;
        object-fit: unset;
        width: 100%;
      }

      &.avatar {
        bottom: -22px;
        left: -30px;
        position: absolute;

        img,
        svg {
          aspect-ratio: 1/1;
          border-radius: 50%;
          bottom: 5px;
          height: 22px;
          margin: 15px 0;
          max-height: 22px;
          max-width: 22px;
          min-height: 22px;
          min-width: 22px;
          position: relative;
          width: 22px;
        }
      }
    }

    &.cant-decrypt {
      background-color: #910000;
      position: relative;

      &::after {
        content: "🔐";
        font-size: 12px;
        left: 6px;
        margin-left: 0 !important;
        position: absolute;
        text-align: right;
        top: -4px;
        width: 100% !important;
      }
    }
  }
`,le=R.ZP.li.withConfig({componentId:"sc-88cfaf69-0"})`
  figure {
    display: flex;
    flex-direction: column;
    place-items: center;

    img,
    svg {
      aspect-ratio: 1/1;
      border: 2px solid #fff;
      border-radius: 50%;
      height: 72px;
      margin: 16px 0 8px;
      max-height: 72px;
      max-width: 72px;
      min-height: 72px;
      min-width: 72px;
      width: 72px;
    }

    div.verified {
      svg {
        bottom: -4px !important;
        height: 30px !important;
        left: -6px !important;
        max-height: 30px !important;
        max-width: 30px !important;
        min-height: 30px !important;
        min-width: 30px !important;
        width: 30px !important;
      }
    }

    figcaption {
      color: #fff;
      display: flex;
      flex-direction: column;
      font-size: 17px;
      font-weight: 600;
      padding-bottom: 10px;
      place-items: center;
      text-align: center;

      div.about {
        color: rgb(255, 255, 255, 55%);
        font-size: 10px;
        font-weight: 400;
        overflow-wrap: break-word;
        padding-top: 5px;
        width: 60%;
      }

      div.encryption {
        background-color: rgb(255, 255, 255, 15%);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 600;
        gap: 2px;
        margin: 10px;
        padding: 10px 20px;

        span:last-child {
          font-weight: 100;
        }
      }
    }
  }
`,pe=e=>{let{publicKey:t}=e;const{about:r,nip05:i,picture:o,userName:a}=D(t);return(0,n.jsx)(le,{children:(0,n.jsxs)(X,{nip05:i,picture:o,pubkey:t,userName:a,children:[r&&(0,n.jsx)("div",{className:"about",children:r}),(0,n.jsxs)("div",{className:"encryption",children:[(0,n.jsx)("span",{children:"🔐 End-to-end encrypted"}),(0,n.jsx)("span",{children:"Messages are secured with AES256-CBC encryption."})]})]})})},de=e=>{let{events:t,publicKey:r,recipientPublicKey:i}=e;const a=(0,o.useMemo)((()=>(e=>{if(0===e.length)return[];const t=e.sort(C),[r,...n]=t,i=[[Z(r.created_at),[r]]];return n.forEach((e=>{const{created_at:t}=e,[,r]=i[i.length-1],{created_at:n}=r[r.length-1];Math.abs(t-n)<b?r.push(e):i.push([Z(t),[e]])})),i})(t.filter((e=>{let{pubkey:t,tags:n}=e;const o=t===i,a=y(n)===i;return i===r?o&&a:o||a})))),[t,r,i]),[s,c]=(0,o.useState)({}),l=(0,o.useCallback)((()=>[...a].reverse().forEach((e=>{let[,t]=e;return[...t].reverse().forEach((e=>{let{content:t,id:r}=e;return A(r,t,i).then((e=>c((t=>({...t,[r]:e||!1})))))}))}))),[a,i]),p=(0,o.useRef)(null),u=i===d,{picture:h,userName:g}=D(u?"":i);return(0,o.useEffect)((()=>{a&&(l(),p.current?.scrollTo(0,p.current.scrollHeight))}),[a,l]),(0,n.jsx)(ce,{ref:p,children:!u&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(pe,{publicKey:i}),a.map((e=>{let[t,i]=e;return i.map(((e,i)=>{let{created_at:o,id:a,pubkey:c,content:l}=e;return(0,n.jsxs)("li",{className:(0,te.Wy)({"cant-decrypt":!1===s[a],received:r!==c,sent:r===c}),"data-timestamp":0===i?t:void 0,title:Z(o),children:[r!==c&&(0,n.jsx)("div",{className:"avatar",children:h?(0,n.jsx)("img",{alt:g,src:h}):(0,n.jsx)(H,{})}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:B("string"==typeof s[a]?s[a]:l)}})]},a)}))}))]})})},ue=R.ZP.div.withConfig({componentId:"sc-f764b7f1-0"})`
  input {
    background-color: #242526;
    border-bottom: 1px solid rgb(57, 58, 59);
    color: #fff;
    padding: 15px;
    width: 100%;
  }
`,be=e=>{let{setRecipientKey:t}=e;return(0,n.jsx)(ue,{children:(0,n.jsx)("input",{onKeyDown:e=>{"Enter"===e.key&&e.currentTarget.value&&!t(e.currentTarget.value.trim())&&(e.currentTarget.value="")},placeholder:"Type a Nostr address (npub/nprofile/hex)",spellCheck:!1,type:"text",autoFocus:!0})})},he=r(51526),ge=(0,R.ZP)(ne.m.div).withConfig({componentId:"sc-3ef6cbe3-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
`;const xe=e=>{let{processId:t,loginTime:r,publicKey:c,relayUrls:l,wellKnownNames:p}=e;const[u,b]=(0,o.useState)([]),[h,g]=(0,o.useState)(""),w=(0,o.useCallback)(((e,t)=>g((n=>((n||e)&&t&&b((i=>[...new Set([...t.filter((t=>{let{created_at:i,pubkey:o}=t;return[e,n].includes(o)&&i>r})).map((e=>{let{id:t}=e;return t})),...i])])),e)))),[r]),{contactKeys:v,events:k,lastEvents:A,unreadEvents:j}=((e,t,r,n)=>{const a=(0,o.useMemo)((()=>[...s.PACKAGE_DATA?.author?.npub?new Set([m(s.PACKAGE_DATA.author.npub),...Object.values(t||{})]):Object.values(t||{})].filter(Boolean).map((e=>m(e)))),[t]),c=(0,i.sE)((e=>({enabled:!!e,filter:{"#p":e?[e]:[],kinds:[4]}}))(e)),l=(0,i.sE)((e=>({enabled:!!e,filter:{authors:e?[e]:[],kinds:[4]}}))(e)),p=(0,o.useMemo)((()=>[...c.events,...l.events]),[c,l]),d=(0,o.useMemo)((()=>{const t=new Set(p.sort(E).map((t=>{let{pubkey:r,tags:n}=t;return r===e?y(n)||"":r})).filter((e=>!a.includes(e))));return[...a,...t].filter((t=>t!==e))}),[p,a,e]),u=(0,o.useMemo)((()=>Object.fromEntries(d.map((e=>[e,p.filter((t=>[t.pubkey,y(t.tags)].includes(e))).sort(E)[0]])))),[d,p]),b=(0,o.useMemo)((()=>p.filter((t=>{let{created_at:i,id:o,pubkey:a}=t;return a!==e&&i>r&&!n.includes(o)}))),[p,r,e,n]);return{contactKeys:d,events:p,lastEvents:u,unreadEvents:b}})(c,p,r,u),C=(0,o.useCallback)((e=>{const t=(e=>{const t=e.startsWith("nprofile"),r=e.startsWith("nsec");if(t||r||e.startsWith("npub"))try{const{data:n}=a.uD.decode(e)||{},i=t?n?.pubkey:n;return r?(0,a.$3)(i):i}catch{return""}try{return m(a.uD.npubEncode(e))}catch{return""}})(e);return t&&w(t),Boolean(t)}),[w]),{processes:{[t]:M},url:S}=(0,V.z)(),{url:$}=M||{};return((e,t)=>{const[r,n]=(0,o.useState)(t),{title:i}=(0,V.z)(),[a]=e.split(s.CC);(0,o.useEffect)((()=>{i(a,`${G.Z[a]?.title}${t>0?` (${t})`:""}`)}),[a,i,t]),(0,o.useEffect)((()=>{t>r&&new Audio("/Program Files/Messenger/notification.mp3").play(),n(t)}),[r,t])})(t,j.length),(0,o.useEffect)((()=>{if(!$||!$.startsWith("nostr:npub")&&!$.startsWith("nostr:nprofile"))return;const[,e]=$.split("nostr:");if(e){const r=m(e);e!==r&&(g(r),S(t,""))}}),[t,S,$]),(0,o.useEffect)((()=>{j&&h&&j.filter((e=>{let{pubkey:t}=e;return t===h})).forEach((e=>{let{id:t}=e;return b((e=>[...new Set([t,...e])]))}))}),[h,j]),(0,n.jsx)(U,{children:(0,n.jsxs)(O,{children:[(0,n.jsx)(se,{goHome:()=>w("",k),newChat:()=>w(d),publicKey:c,relayUrls:l,selectedRecipientKey:h}),(0,n.jsx)("div",{children:(0,n.jsx)(he.M,{initial:!1,presenceAffectsLayout:!1,children:h?(0,n.jsxs)(ge,{...f,children:[h===d&&(0,n.jsx)(be,{setRecipientKey:C}),(0,n.jsx)(de,{events:k,publicKey:c,recipientPublicKey:h}),(0,n.jsx)(re,{publicKey:c,recipientPublicKey:h})]},"chat"):(0,n.jsx)(oe,{onContextMenu:te.nK,...x,children:v.map((e=>(0,n.jsx)(q,{lastEvent:A[e],onClick:()=>w(e,k),pubkey:e,publicKey:c,unreadEvent:j.includes(A[e])},e)))},"contacts")})})]})})};var fe=e=>{let{id:t}=e;const[r,a]=(0,o.useState)(0),[s,l]=(0,o.useState)(),p=(0,o.useRef)(!1),{names:d}=(()=>{const[e,t]=(0,o.useState)(),r=(0,o.useCallback)((async e=>{const r=await fetch(e);if(r.ok){const{names:e={}}=await r.json()||{};t({names:e})}return r.ok}),[]),n=(0,o.useCallback)((async()=>{await r(u)||t({relays:{}})}),[r]);return(0,o.useEffect)((()=>{e||n()}),[n,e]),e||{}})(),b=J();return(0,o.useEffect)((()=>{!p.current&&b&&(p.current=!0,(async()=>window.nostr?.getRelays?[...new Set([...c,...Object.entries(await window.nostr.getRelays()).map((e=>{let[t]=e;return t.endsWith("/")?t.slice(0,-1):t}))])]:c)().then((e=>{l(e),a(Math.floor(Date.now()/1e3))})))}),[b]),b&&s?(0,n.jsx)(i.gF,{relayUrls:s,children:(0,n.jsx)(xe,{loginTime:r,processId:t,publicKey:b,relayUrls:s,wellKnownNames:d})}):(0,n.jsx)(n.Fragment,{children:" "})}},38060:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(10508);var i=r(64358);const o={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
  overflow: auto;
  scrollbar-color: ${o[a].thumb} ${o[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${o[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${o[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${o[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${o[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${o[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${o[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${o[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${o[a].buttonHover};
    }

    &:active {
      background-color: ${o[a].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===r?"center":`${r}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg=="});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC"});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${o[a].blendMode};
  }
`}}}]);