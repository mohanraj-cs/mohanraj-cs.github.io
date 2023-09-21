"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9128],{29128:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var o=r(85893);var i=r(10508).ZP.div.withConfig({componentId:"sc-b37157c0-0"})`
  display: flex;
  height: 100%;
  width: 100%;

  .video-js {
    height: 100%;
    width: 100%;

    .vjs-big-play-button {
      display: none;
    }

    .vjs-control-bar {
      background-color: rgb(240, 240, 240);
      padding: 0 1;

      &:not(.no-interaction) {
        display: flex !important;
        opacity: 100% !important;
      }

      .no-interaction {
        display: none !important;
        opacity: 0% !important;
        pointer-events: none !important;
      }
    }

    &.vjs-youtube,
    &.vjs-fullscreen.vjs-user-inactive {
      .vjs-control-bar {
        opacity: 0% !important;
      }
    }

    .vjs-button {
      color: rgb(116, 116, 116);
      height: 28px;
      position: relative;
      width: 28px;
      z-index: 0;

      &::after {
        background-color: rgb(225, 225, 225);
        border: 1px solid rgb(173, 173, 173);
        content: "";
        height: calc(100% - 4px);
        left: 0;
        margin: 2px 0 0 2px;
        position: absolute;
        top: 1px;
        width: calc(100% - 4px);
        z-index: -1;
      }

      &:hover {
        &::after {
          background-color: rgb(229, 241, 251);
          border-color: rgb(0, 120, 215);
        }
      }

      &:active {
        &::after {
          background-color: rgb(204, 228, 247);
          border-color: rgb(0, 84, 153);
        }
      }
    }

    .vjs-current-time,
    .vjs-duration {
      display: block;
    }

    .vjs-current-time {
      padding-left: 8px;
      padding-right: 2px;
    }

    .vjs-duration {
      padding-left: 2px;
      padding-right: 8px;
    }

    .vjs-current-time-display,
    .vjs-duration-display {
      color: #000;
      font-family: sans-serif;
      font-size: 11px;
    }

    .vjs-picture-in-picture-control {
      margin: 0 -2px;
    }

    .vjs-load-progress {
      border-radius: 5px;

      div {
        background: linear-gradient(
          180deg,
          rgb(189, 189, 189) 0%,
          rgb(219, 219, 219) 100%
        );
        border-radius: 5px;
      }
    }

    .vjs-play-progress {
      background: linear-gradient(
        180deg,
        rgb(44, 137, 224) 0%,
        rgb(40, 125, 204) 100%
      );
      border-radius: 5px;

      &::before {
        color: rgb(237, 237, 237);
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
        top: 1px;
      }
    }

    .vjs-progress-holder {
      border-radius: 5px;
      font-size: 1.7em !important;
      height: 9px;
    }

    .vjs-volume-control {
      background-color: rgb(240, 240, 240);
      border-radius: 5px 5px 0 0;
      left: -28px !important;
      position: relative;

      .vjs-volume-bar {
        height: 5.5em;
        margin: 1.5em auto;
      }

      .vjs-volume-level {
        background: linear-gradient(
          180deg,
          rgb(247, 76, 100) 0%,
          rgb(125, 210, 125) 50%
        );
        border-radius: 5px;
        color: rgb(237, 237, 237);
        font-size: 1.5em;
        text-shadow: 1px 2px 3px rgb(160, 160, 160);
        -webkit-text-stroke: 1px rgba(164, 164, 164, 80%);
      }
    }

    .vjs-volume-panel {
      width: 28px !important;
    }

    .vjs-fullscreen-control,
    .vjs-play-control {
      .vjs-icon-placeholder {
        &::before {
          font-size: 2.4em;
          top: -5px;
        }
      }
    }

    .vjs-poster {
      background-size: contain;
    }

    video {
      background-image: url("/System/Icons/48x48/vlc.webp");
      background-position: center calc(50% - 15px);
      background-repeat: no-repeat;
      padding-bottom: 30px;
    }
  }
`,n=r(1864),s=r(67294);const a="video/youtube",l={1:4,2:2,3:1,4:.5},c={autoplay:!0,controlBar:{children:["playToggle","currentTimeDisplay","progressControl","durationDisplay","volumePanel","pictureInPictureToggle","fullscreenToggle"],volumePanel:{inline:!1}},inactivityTimeout:1e3,preload:"auto",youtube:{enablePrivacyEnhancedMode:!0,ytControls:2}};var d=r(87426),u=r(7459),p=r(23615),h=r(26724),g=r(56758),b=r(64358),m=r(34254);var v=e=>{let{containerRef:t,id:r,loading:o,setLoading:i,url:v}=e;const{readFile:x}=(0,h.o)(),{linkElement:f,processes:{[r]:{closing:y=!1,libs:w=[]}={}}}=(0,g.z)(),{updateWindowSize:k}=(0,p.Z)(r),[j,T]=(0,s.useState)(),{prependFileToTitle:z}=(0,u.Z)(r),L=(0,s.useCallback)((()=>{const{src:e=[]}=j?.getMedia()||{};if(Array.isArray(e)&&e.length>0){const[{src:t,url:r}]=e;t.startsWith("blob:")&&(r!==v||y)&&(0,m.EK)(t)}}),[y,j,v]),C=(0,s.useCallback)((async()=>{L();const e=(0,m.yk)(v),t=e?a:(0,d.bh)(v)||b.iS;return{src:e?v:(0,m.YS)(await x(v),(0,m.G6)()?t:void 0),type:t,url:v}}),[L,x,v]),$=(0,s.useCallback)((()=>{const[e]=t.current?.childNodes??[],o=window.videojs(e,c,(()=>{o.on("firstplay",(()=>{const[e,t]=[o.videoHeight(),o.videoWidth()],[r,i]=[(0,m.sI)(),(0,m.E9)()];if(e&&t){const o=30+e;o>r||t>i?k(i*(o/t),i):k(o,t)}}));const n=()=>{try{o.isFullscreen()?o.exitFullscreen():o.requestFullscreen()}catch{}};e.addEventListener("dblclick",n),e.addEventListener("mousewheel",(e=>{o.volume(o.volume()+(e.deltaY>0?-.1:.1))}),{passive:!0}),t.current?.closest("section")?.addEventListener("keydown",(e=>{let{key:t,altKey:r,ctrlKey:i}=e;if(r)l[t]?k(o.videoHeight()/l[t],o.videoWidth()/l[t]):"Enter"===t&&n();else if(!i)switch(t){case" ":o.paused()?o.play():o.pause();break;case"ArrowUp":o.volume(o.volume()+.1);break;case"ArrowDown":o.volume(o.volume()-.1);break;case"ArrowLeft":o.currentTime(o.currentTime()-10);break;case"ArrowRight":o.currentTime(o.currentTime()+10)}})),T(o),i(!1),(0,m.yk)(v)||f(r,"peekElement",e)}))}),[t,r,f,i,k,v]),E=(0,s.useCallback)((e=>{const r=t.current?.querySelector(".vjs-control-bar");r instanceof HTMLElement&&(e===a?r.classList.add("no-interaction"):r.classList.remove("no-interaction"))}),[t]),R=(0,s.useCallback)((async()=>{if(j&&v)try{const e=await C();j.src(e),E(e.type),z((0,m.yk)(v)?"YouTube":(0,n.basename)(v))}catch{}}),[C,E,j,z,v]);(0,s.useEffect)((()=>(o&&!j&&(0,m.mb)(w).then((()=>{void 0!==window.videojs&&$()})),()=>{y&&(L(),j?.dispose())})),[L,y,w,$,o,j]),(0,s.useEffect)((()=>{!o&&!y&&j&&v&&R()}),[y,R,o,j,v])},x=r(2742);var f=e=>{let{id:t}=e;return(0,o.jsx)(x.Z,{StyledComponent:i,id:t,useHook:v,children:(0,o.jsx)("video",{className:"video-js vjs-big-play-centered",autoPlay:!0})})}},2742:function(e,t,r){var o=r(85893),i=r(5152),n=r.n(i),s=r(67294),a=r(56758),l=r(55785);const c=n()((()=>r.e(6753).then(r.bind(r,26753))),{loadableGenerated:{webpack:()=>[26753]}}),d=e=>{let{id:t,useHook:r,StyledComponent:i,children:n}=e;const{processes:{[t]:{url:d=""}={}}}=(0,a.z)(),u=(0,s.useRef)(null),[p,h]=(0,s.useState)(!0),g=(0,s.useMemo)((()=>({contain:"strict",visibility:p?"hidden":"visible"})),[p]);return r({containerRef:u,id:t,loading:p,setLoading:h,url:d}),(0,o.jsxs)(o.Fragment,{children:[p&&(0,o.jsx)(c,{}),(0,o.jsx)(i,{ref:u,style:g,...(0,l.Z)({id:t}),children:n})]})};t.Z=(0,s.memo)(d)},55785:function(e,t,r){var o=r(1864),i=r(67294),n=r(62727),s=r(6529),a=r(42151),l=r(26724),c=r(56758),d=r(62065),u=r(64358),p=r(34254);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:h,onDragLeave:g,onDragOver:b,updatePositions:m}=e;const{url:v}=(0,c.z)(),{iconPositions:x,sortOrders:f,setIconPositions:y}=(0,d.k)(),{mkdirRecursive:w,updateFolder:k,writeFile:j}=(0,l.o)(),T=(0,i.useCallback)((async(e,t,r)=>{if(h)if(t){const i=(0,o.join)(u.Ll,e);if(await w(u.Ll),await j(i,t,!0))return r===a.v.UPDATE_URL&&v(h,i),k(u.Ll,e),(0,o.basename)(i)}else r===a.v.UPDATE_URL&&v(h,e);return""}),[h,w,k,v,j]),{openTransferDialog:z}=(0,n.Z)();return{onDragLeave:g,onDragOver:e=>{b?.(e),(0,p.nK)(e)},onDrop:e=>{if(!u.my.has((0,p.RT)(r))){if(m&&e.target instanceof HTMLElement){const{files:t,text:i}=(0,s.p4)(e);if(0===t.length&&""===i)return;const n={x:e.clientX,y:e.clientY};let a=[];if(i){try{a=JSON.parse(i)}catch{}if(!Array.isArray(a))return;const[e]=a;if(!e)return;if(e.startsWith(r)&&(0,o.basename)(e)===(0,o.relative)(r,e))return;a=a.map((e=>(0,o.basename)(e)))}else a=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);a=a.map((e=>{if(!x[`${r}/${e}`])return e;let t=0,i="";do{t+=1,i=`${r}/${(0,o.basename)(e,(0,o.extname)(e))} (${t})${(0,o.extname)(e)}`}while(x[i]);return(0,o.basename)(i)})),(0,p.vi)(r,e.target,x,f,n,a,y)}(0,s.WG)(e,t||T,r,z,Boolean(h))}}}}},99895:function(e,t,r){r.d(t,{BS:function(){return s},FC:function(){return i},F_:function(){return o},wV:function(){return n}});const o={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},i={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},n=30,s=166,a={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${n}px`,minWidth:`${s}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};t.ZP=a},4914:function(e,t,r){r.d(t,{Rf:function(){return a},b$:function(){return d},hu:function(){return s},ix:function(){return c},mZ:function(){return l}});var o=r(99895),i=r(64358),n=r(34254);const s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[s]=e.split(i.CC),a=`${s}${i.CC}`,l=r.find((e=>e.startsWith(a)))||"",{componentWindow:c}=t?.[l]||{},{x:d=0,y:u=0,width:p=0,height:h=0}=c?.getBoundingClientRect()||{},g=d+o+p>(0,n.E9)()||u+o+h>(0,n.sI)();return g||!d&&!u?void 0:{x:d+o,y:u+o}},a=e=>{let{height:t,width:r}=e;const[o,s]=[(0,n.sI)(),(0,n.E9)()];return{x:Math.floor(s/2-(0,n.Vy)(r)/2),y:Math.floor((o-i.bK)/2-(0,n.Vy)(t)/2)}},l={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},c=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:o,size:i}=e||{},{x:s=0,y:a=0}=o||{},{height:c=0,width:d=0}=i||{};return r?s+l.RIGHT>t.x||s+(0,n.Vy)(d)-l.LEFT<0||a+l.BOTTOM>t.y||a+l.TOP<0:s<0||a<0||s+(0,n.Vy)(d)>t.x||a+(0,n.Vy)(c)>t.y},d=(e,t)=>{const r=Number(e.height),s=Number(e.width),[a,l]=[(0,n.sI)(),(0,n.E9)()],c=a-i.bK,d=Math.max(o.wV,Math.min(r,c)),u=Math.max(o.BS,Math.min(s,l));if(!t)return{height:d,width:u};const p=r===d,h=s===u;return p||h?p?h?{height:d,width:u}:{height:Math.round(d/(s/u)),width:u}:{height:d,width:Math.round(u/(r/d))}:r>s?{height:d,width:Math.round(u/(c/d))}:{height:Math.round(d/(l/u)),width:u}}},7459:function(e,t,r){var o=r(67294),i=r(56758),n=r(25804),s=r(64358);t.Z=e=>{const{title:t}=(0,i.z)(),[r]=e.split(s.CC),{title:a}=n.Z[r]||{};return{appendFileToTitle:(0,o.useCallback)(((r,o)=>{const i=r?` - ${r}${o?` ${s.xy}`:""}`:"";t(e,`${a}${i}`)}),[e,a,t]),prependFileToTitle:(0,o.useCallback)(((r,o,i)=>{const n=r?`${o?`${s.xy} `:""}${r}${i?" ":" - "}`:"";t(e,`${n}${a}`)}),[e,a,t])}}},23615:function(e,t,r){var o=r(67294),i=r(10508),n=r(4914),s=r(56758),a=r(62065);t.Z=e=>{const{setWindowStates:t}=(0,a.k)(),{processes:{[e]:{lockAspectRatio:r=!1,maximized:l=!1}={}}={}}=(0,s.z)(),{sizes:{titleBar:c}}=(0,i.Fg)();return{updateWindowSize:(0,o.useCallback)(((o,i)=>t((t=>({...t,[e]:{...t?.[e],maximized:l,size:(0,n.b$)({height:o+c.height,width:i},r)}})))),[e,r,l,t,c.height])}}}}]);