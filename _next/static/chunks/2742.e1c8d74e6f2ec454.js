"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2742,8757],{68757:function(t,e,n){n.d(e,{$z:function(){return v},AY:function(){return w},CC:function(){return h},Iu:function(){return y},NN:function(){return d},RO:function(){return S},WZ:function(){return E},Z3:function(){return f},createM3uPlaylist:function(){return I},g:function(){return m},mW:function(){return k},ns:function(){return p},om:function(){return x},r$:function(){return D},tracksFromPlaylist:function(){return z},uG:function(){return T},vy:function(){return l}});var i=n(4914),r=n(64358),o=n(34254);const a=new Set(["Flexi - alien fish pond","Geiss - Spiral Artifact"]),s=`${r.Sd}/Documents/Winamp Skins`,c=["localhost",r.PACKAGE_DATA.author.url.replace("https://","")].includes(window.location.hostname),l={availableSkins:[{name:"Aqua X",url:`${s}/Aqua_X.wsz`},{name:"Nucleo NLog v2G",url:`${s}/Nucleo_NLog_v102.wsz`},...c?[{defaultName:"Random (Winamp Skin Museum)",loading:!1,get name(){return this.loading||(this.loading=!0,fetch("https://api.webamp.org/graphql",{body:JSON.stringify({query:(t=Math.floor(1e3*Math.random()),`\n  query {\n    skins(filter: APPROVED, first: 1, offset: ${t}) {\n      nodes {\n        download_url\n      }\n    }\n  }\n`)}),headers:{"Content-Type":"application/json"},method:"POST"}).then((async t=>{const{data:e}=await t.json()||{};this.skinUrl=e?.skins?.nodes?.[0]?.download_url,this.loading=!1}))),this.defaultName;var t},skinUrl:"",get url(){return this.skinUrl||`${s}/base-2.91.wsz`}}]:[],{name:"SpyAMP Professional Edition v5",url:`${s}/SpyAMP_Professional_Edition_v5.wsz`}]},u={height:116,width:275},d="#main-window",h="#playlist-window",m=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.skinIsLoaded().then((()=>{e&&(0,o.EK)(e)}))},p=t=>t.store.dispatch({type:"CLOSE_WINDOW",windowId:"equalizer"}),f=t=>t.store.dispatch({open:!1,type:"ENABLE_MILKDROP"}),w=(t,e)=>t.store.dispatch({data:e,type:"SET_SKIN_DATA"}),g=t=>{const{presetHistory:e=[],presets:n=[]}=t.store.getState()?.milkdrop||{},i=Math.floor(Math.random()*n.length),r=n[i];return!r.name||a.has(r.name)||e.slice(-5).includes(i)?g(t):i},y=t=>{const e=g(t);t.store.dispatch({addToHistory:!0,index:e,type:"PRESET_REQUESTED"}),t.store.dispatch({index:e,type:"SELECT_PRESET_AT_INDEX"})};let b=0;const x=t=>{const e=t.store.subscribe((()=>{const{milkdrop:i,windows:r}=t.store.getState();r?.genWindows?.milkdrop?.open&&!i?.butterchurn&&(0,o.mb)(["/Program Files/Webamp/butterchurn.min.js"]).then((()=>{if(!window.butterchurn?.default)return;((t,e)=>{t.store.dispatch({butterchurn:e,type:"GOT_BUTTERCHURN"})})(t,window.butterchurn.default);const{playlist:i,main:o}=r.genWindows||{},{x:a=0,y:s=0}=(i?.open?i?.position:o?.position)||{};t.store.dispatch({positions:{milkdrop:{x:a,y:s+u.height}},type:"UPDATE_WINDOW_POSITIONS"}),e(),t.store.subscribe((()=>{const t=[...document.body.children].find((t=>t.classList?.contains("webamp-desktop")));if(t){const e=document.querySelector("main");e&&([...e.children].forEach((t=>{t.classList?.contains("webamp-desktop")&&t.remove()})),e.append(t))}})),n.e(9986).then(n.t.bind(n,36607,23)).then((e=>{let{default:n}=e;const i=Object.entries(n).map((t=>{let[e,n]=t;return{name:e,preset:n}}));((t,e)=>{t.store.dispatch({presets:e,type:"GOT_BUTTERCHURN_PRESETS"})})(t,i),y(t),(t=>{window.clearInterval(b),b=window.setInterval((()=>{t||window.clearInterval(b),y(t)}),2e4)})(t)}))}))}))},S=()=>document.querySelector("#webamp"),E=(t,e)=>{const{height:n,width:r}=u,{x:o,y:a}=e||(0,i.Rf)({height:2*n,width:r});t.store.dispatch({positions:{main:{x:o,y:a},milkdrop:{x:0-r,y:0-n},playlist:{x:o,y:n+a}},type:"UPDATE_WINDOW_POSITIONS"})},T=(t,e)=>t.store.dispatch({type:"SET_FOCUSED_WINDOW",window:e}),k=t=>t.store.dispatch({type:"SET_FOCUSED_WINDOW",window:""}),v=async(t,e)=>{const{parseBuffer:i}=await Promise.all([n.e(8090),n.e(2463),n.e(4726)]).then(n.bind(n,52463)),{common:{album:a="",artist:s="",title:c=e},format:{duration:l=0}}=await i(t,{mimeType:r.BD,size:t.length},{duration:!0,skipCovers:!0,skipPostHeaders:!0});return{blob:(0,o.V4)(t,"audio/mpeg"),duration:Math.floor(l),metaData:{album:a,artist:s,title:c}}},I=t=>`${["#EXTM3U",...t.map((t=>{const e=t.url?`\n${t.url.toString()}`:"";let n=t.defaultName;return t.metaData?.artist?t.metaData?.title?n=`${t.metaData.artist} - ${t.metaData.title}`:n&&(n=`${t.metaData.artist} - ${n}`):t.metaData?.title&&(n=t.metaData.title),e?`#EXTINF:${t.duration??-1},${n||""}${e}`:""})).filter(Boolean)].join("\n")}\n`,z=async(t,e,i)=>{const{ASX:r,M3U:o,PLS:a}=await n.e(3454).then(n.t.bind(n,63454,23));return({".asx":r,".m3u":o,".pls":a}[e]?.parse(t).filter(Boolean).slice(0,1e3)??[]).map((t=>{let{artist:e="",file:n="",length:r=0,title:o=""}=t;const[a,s]=[e.trim(),o.trim()];return{duration:r>0?r:0,metaData:{album:s||i,artist:a,title:s},url:n}}))},C=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/<!\[CDATA\[|]]>/g,"")},L={"somafm.com":t=>async()=>{const{pathname:e}=new URL(t),[n]=e.replace("/","").split("-"),i=await(await fetch(`https://somafm.com/songs/${n}.xml`,{cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null})).text(),r=(new DOMParser).parseFromString(i,"application/xml").querySelector("song"),o=r?.querySelector("artist")?.innerHTML,a=r?.querySelector("title")?.innerHTML;return{artist:C(o),title:C(a)}}},D=t=>{const{host:e}=new URL(t),[,n,i]=e.split(".");return L[`${n}.${i}`]?.(t)}},72742:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var i=n(85893),r=n(1864),o=n(67294),a=n(68757),s=n(71183);var c=(0,n(10508).ZP)(s.m.div).withConfig({componentId:"sc-b3cd09d-0"})`
  inset: 0;
  pointer-events: none;
  position: absolute;
  z-index: ${t=>{let{$zIndex:e}=t;return e}};

  div:first-child {
    pointer-events: ${t=>{let{$minimized:e}=t;return e?"none":"auto"}};
  }
`,l=n(55785),u=n(25420),d=n(26724),h=n(56758),m=n(25804),p=n(62065),f=n(64358),w=n(34254),g=n(48764).Buffer;const y=`${f.Tl}/webampSkinData.json`;var b=t=>{const{onClose:e,onMinimize:n}=(0,u.Z)(t),{setWindowStates:i,windowStates:{[t]:s}={}}=(0,p.k)(),{position:c}=s||{},{linkElement:b,processes:{[t]:x},title:S}=(0,h.z)(),{closing:E,componentWindow:T}=x||{},k=(0,o.useRef)(),{createPath:v,deletePath:I,exists:z,readFile:C,mkdirRecursive:L,updateFolder:D,writeFile:W}=(0,d.o)(),{onDrop:O}=(0,l.Z)({id:t}),_=(0,o.useRef)(),R=(0,o.useRef)(),$=(0,o.useRef)([]),N=(0,o.useCallback)((t=>{t?.(),e(),window.setTimeout((()=>{$.current.forEach((t=>t())),k.current?.close()}),f.jx.WINDOW),window.clearInterval(_.current),window.clearInterval(R.current)}),[e]),P=(0,o.useCallback)(((e,o)=>{let{initialSkin:s,initialTracks:l}=o;const u=async()=>{const t=prompt("Enter an Internet location to open here:\nFor example: https://server.com/playlist.m3u");if(t){const e=(0,w.RT)(t);return f.uH.has(e)?(0,a.tracksFromPlaylist)(await(await fetch(t,f.P8)).text(),e):[{duration:0,url:t}]}return[]},d=new window.Webamp({...a.vy,handleAddUrlEvent:u,handleLoadListEvent:u,handleSaveListEvent:t=>{v("playlist.m3u",f.Ll,g.from((0,a.createM3uPlaylist)(t))).then((t=>D(f.Ll,t)))},initialSkin:s,initialTracks:l});$.current.push(d.onWillClose(N),d.onMinimize((()=>n())),d.onTrackDidChange((e=>{const{milkdrop:n,windows:i}=d.store.getState();if(i?.genWindows?.milkdrop?.open&&n?.butterchurn&&(0,a.Iu)(d),window.clearInterval(_.current),e?.url){const n=(0,a.r$)(e.url);if(n){const e=async()=>{const{display:{closed:e=!1}={},playlist:{currentTrack:i=-1}={},tracks:r}=d.store.getState()||{};if(e)window.clearInterval(_.current);else if(r[i]){const e=await(n?.());e&&(d.store.dispatch({type:"SET_MEDIA_TAGS",...r[i],...e}),S(t,`${e.artist} - ${e.title}`))}};e(),_.current=window.setInterval(e,30*f.i2)}else{const{playlist:{currentTrack:e=-1}={},tracks:n}=d.store.getState()||{};if(n[e]){const{artist:i,title:r}=n[e];let o="";r&&i?o=`${i} - ${r}`:(r||i)&&(o=r||i),o&&S(t,o)}}}else S(t,m.Z.Webamp.title)})),d._actionEmitter.on("SET_SKIN_DATA",(async t=>{let{data:e}=t;await z(f.Tl)||(await L(f.Tl),D((0,r.dirname)(f.Tl))),W(y,JSON.stringify(e),!0),D(f.Tl,(0,r.basename)(y))})),d._actionEmitter.on("LOAD_DEFAULT_SKIN",(()=>{I(y)})),d._actionEmitter.on("UPDATE_WINDOW_POSITIONS",(()=>{window.clearInterval(R.current),R.current=window.setTimeout((()=>{const e=(0,a.RO)()?.querySelector(a.NN),{x:n=0,y:r=0}=e?.getBoundingClientRect()||{};i((e=>({...e,[t]:{position:{x:n,y:r}}})))}),f.jx.WINDOW)}))),s&&(0,a.g)(d,s.url),d.renderWhenReady(e).then((()=>{(0,a.ns)(d),(0,a.Z3)(d),(0,a.om)(d),(0,a.WZ)(d,c),(()=>{const n=(0,a.RO)();if(n){const i=n.querySelector(a.NN);[i,n.querySelector(a.CC)].forEach((t=>{t?.addEventListener("drop",O),t?.addEventListener("dragover",w.nK)})),x&&!T&&i&&(b(t,"componentWindow",e),b(t,"peekElement",i)),s||x.url?.endsWith(".wsz")||z(y).then((async t=>{t&&(0,a.AY)(d,JSON.parse((await C(y)).toString()))})),e.append(n)}})(),l&&d.play()})),window.WebampGlobal=d,k.current=d}),[T,v,I,z,t,b,L,O,n,N,c,x,C,i,S,D,W]);return(0,o.useEffect)((()=>{E&&N()}),[E,N]),{initWebamp:P,webampCI:k.current}},x=n(84017),S=n(87531);var E=t=>{let{id:e}=t;const n=(0,o.useRef)(null),{readFile:s}=(0,d.o)(),{processes:{[e]:{libs:l=[],minimized:u=!1,url:m=""}={}}={},url:p}=(0,h.z)(),[g,y]=(0,o.useState)(m),{initWebamp:E,webampCI:T}=b(e),k=(0,S.Z)(e,!0),v=(0,o.useMemo)((()=>({onBlurCapture:()=>T&&(0,a.mW)(T),onFocusCapture:()=>T&&(0,a.uG)(T,"main")})),[T]),{zIndex:I,...z}=(0,x.Z)(e,v),C=(0,o.useCallback)((async()=>{if(m){const t=(0,w.RT)(m);if(f.uH.has(t)){const e=await(0,a.tracksFromPlaylist)((await s(m)).toString(),t,(0,r.basename)(m,(0,r.extname)(m)));return e.length>0?{initialTracks:e}:{}}if(".mp3"===t)return{initialTracks:[await(0,a.$z)(await s(m),(0,r.basename)(m))]};if(".wsz"===t)return{initialSkin:{url:(0,w.YS)(await s(m))}}}return{}}),[s,m]),L=(0,o.useCallback)((async()=>{if(T){const{initialTracks:t,initialSkin:e}=await C();t?T.setTracksToPlay(t):e&&((0,a.g)(T,e.url),T.setSkinFromUrl(e.url))}}),[C,T]),D=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{n.current&&!T&&(0,w.mb)(l).then((async()=>{window.Webamp&&!D.current&&(D.current=!0,E(n.current,await C()))}))}),[C,E,l,T]),(0,o.useEffect)((()=>{m!==g?(L(),y(m)):m&&(p(e,""),y(""))}),[e,L,g,p,m]),(0,i.jsx)(c,{ref:n,$minimized:u,$zIndex:I,...z,...k})}},55785:function(t,e,n){var i=n(1864),r=n(67294),o=n(62727),a=n(6529),s=n(42151),c=n(26724),l=n(56758),u=n(62065),d=n(64358),h=n(34254);e.Z=t=>{let{callback:e,directory:n=d.Ll,id:m,onDragLeave:p,onDragOver:f,updatePositions:w}=t;const{url:g}=(0,l.z)(),{iconPositions:y,sortOrders:b,setIconPositions:x}=(0,u.k)(),{mkdirRecursive:S,updateFolder:E,writeFile:T}=(0,c.o)(),k=(0,r.useCallback)((async(t,e,n)=>{if(m)if(e){const r=(0,i.join)(d.Ll,t);if(await S(d.Ll),await T(r,e,!0))return n===s.v.UPDATE_URL&&g(m,r),E(d.Ll,t),(0,i.basename)(r)}else n===s.v.UPDATE_URL&&g(m,t);return""}),[m,S,E,g,T]),{openTransferDialog:v}=(0,o.Z)();return{onDragLeave:p,onDragOver:t=>{f?.(t),(0,h.nK)(t)},onDrop:t=>{if(!d.my.has((0,h.RT)(n))){if(w&&t.target instanceof HTMLElement){const{files:e,text:r}=(0,a.p4)(t);if(0===e.length&&""===r)return;const o={x:t.clientX,y:t.clientY};let s=[];if(r){try{s=JSON.parse(r)}catch{}if(!Array.isArray(s))return;const[t]=s;if(!t)return;if(t.startsWith(n)&&(0,i.basename)(t)===(0,i.relative)(n,t))return;s=s.map((t=>(0,i.basename)(t)))}else s=e instanceof FileList?[...e].map((t=>t.name)):[...e].map((t=>t.getAsFile()?.name||"")).filter(Boolean);s=s.map((t=>{if(!y[`${n}/${t}`])return t;let e=0,r="";do{e+=1,r=`${n}/${(0,i.basename)(t,(0,i.extname)(t))} (${e})${(0,i.extname)(t)}`}while(y[r]);return(0,i.basename)(r)})),(0,h.vi)(n,t.target,y,b,o,s,x)}(0,a.WG)(t,e||k,n,v,Boolean(m))}}}}},99895:function(t,e,n){n.d(e,{BS:function(){return a},FC:function(){return r},F_:function(){return i},wV:function(){return o}});const i={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},r={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},o=30,a=166,s={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${o}px`,minWidth:`${a}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}};e.ZP=s},25420:function(t,e,n){var i=n(67294),r=n(52625),o=n(56758),a=n(62065);e.Z=t=>{const e=(0,r.Z)(t),{setForegroundId:n,removeFromStack:s}=(0,a.k)(),{closeWithTransition:c,maximize:l,minimize:u}=(0,o.z)();return{onClose:(0,i.useCallback)((()=>{s(t),c(t),n(e)}),[c,t,e,s,n]),onMaximize:()=>l(t),onMinimize:()=>{u(t),n(e)}}}},4914:function(t,e,n){n.d(e,{Rf:function(){return s},b$:function(){return u},hu:function(){return a},ix:function(){return l},mZ:function(){return c}});var i=n(99895),r=n(64358),o=n(34254);const a=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;const[a]=t.split(r.CC),s=`${a}${r.CC}`,c=n.find((t=>t.startsWith(s)))||"",{componentWindow:l}=e?.[c]||{},{x:u=0,y:d=0,width:h=0,height:m=0}=l?.getBoundingClientRect()||{},p=u+i+h>(0,o.E9)()||d+i+m>(0,o.sI)();return p||!u&&!d?void 0:{x:u+i,y:d+i}},s=t=>{let{height:e,width:n}=t;const[i,a]=[(0,o.sI)(),(0,o.E9)()];return{x:Math.floor(a/2-(0,o.Vy)(n)/2),y:Math.floor((i-r.bK)/2-(0,o.Vy)(e)/2)}},c={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},l=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{position:i,size:r}=t||{},{x:a=0,y:s=0}=i||{},{height:l=0,width:u=0}=r||{};return n?a+c.RIGHT>e.x||a+(0,o.Vy)(u)-c.LEFT<0||s+c.BOTTOM>e.y||s+c.TOP<0:a<0||s<0||a+(0,o.Vy)(u)>e.x||s+(0,o.Vy)(l)>e.y},u=(t,e)=>{const n=Number(t.height),a=Number(t.width),[s,c]=[(0,o.sI)(),(0,o.E9)()],l=s-r.bK,u=Math.max(i.wV,Math.min(n,l)),d=Math.max(i.BS,Math.min(a,c));if(!e)return{height:u,width:d};const h=n===u,m=a===d;return h||m?h?m?{height:u,width:d}:{height:Math.round(u/(a/d)),width:d}:{height:u,width:Math.round(d/(n/u))}:n>a?{height:u,width:Math.round(d/(l/u))}:{height:Math.round(u/(c/d)),width:d}}},84017:function(t,e,n){var i=n(67294),r=n(56758),o=n(62065),a=n(64358);e.Z=(t,e)=>{const{foregroundId:n,prependToStack:s,setForegroundId:c,stackOrder:l=[]}=(0,o.k)(),{processes:{[t]:u}}=(0,r.z)(),{closing:d,componentWindow:h,minimized:m,taskbarEntry:p,url:f}=u||{},w=(0,i.useMemo)((()=>l.length+(m?1:-l.indexOf(t))+1),[t,m,l]),g=(0,i.useCallback)((n=>{const{relatedTarget:i}=n,r=i,o=i===p,s=r&&p?.previousSibling?.contains(r),l=r&&h?.contains(r);c((i=>i!==t||o||l?i:(s?h?.focus(a.eS):e?.onBlurCapture?.(n),s?i:"")))}),[e,h,t,c,p]),y=(0,i.useCallback)((n=>{const{relatedTarget:i}=n||{};h?.contains(document.activeElement)?(s(t),c(t)):i&&document.activeElement!==p||(h?.focus(a.eS),e?.onFocusCapture?.(n))}),[e,h,t,s,c,p]);return(0,i.useLayoutEffect)((()=>{t===n&&y()}),[n,t,y]),(0,i.useLayoutEffect)((()=>{!h||d||m||c(t)}),[d,h,t,m,c,f]),(0,i.useMemo)((()=>({onBlurCapture:g,onClickCapture:y,onFocusCapture:y,zIndex:w,...a.LL})),[y,g,w])}},52625:function(t,e,n){var i=n(56758),r=n(62065);e.Z=t=>{const{stackOrder:e=[]}=(0,r.k)(),{processes:n}=(0,i.z)();return e.find((e=>e!==t&&!n?.[e]?.minimized))||""}},87531:function(t,e,n){var i=n(67294),r=n(56758),o=n(64358),a=n(34254);const s={height:"inherit",opacity:1,scale:1,width:"inherit"},c={opacity:0,scale:.95},l={...c,height:"inherit",width:"inherit"},u={...l,scale:1},d={opacity:1,scale:1},h={opacity:0,scale:.7},m=()=>({height:(0,a.sI)()-o.bK,width:(0,a.E9)()});e.Z=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{processes:{[t]:n}={}}=(0,r.z)(),{closing:a,componentWindow:p,maximized:f,minimized:w,taskbarEntry:g}=n||{},[y,b]=(0,i.useState)(Object.create(null)),[x,S]=(0,i.useState)(Object.create(null));return(0,i.useLayoutEffect)((()=>{if(!p||a)return;const{x:t=0,y:e=0}=p.getBoundingClientRect();b({...d,...m(),x:0-t,y:0-e})}),[a,p,f]),(0,i.useLayoutEffect)((()=>{if(!g||!p||a)return;const{height:t=0,width:e=0,x:n=0,y:i=0}=g.getBoundingClientRect(),{height:r=0,width:o=0,x:s=0,y:c=0}=p.getBoundingClientRect(),l=Math.round(n-s-o/2+e/2),u=Math.round(i-c-r/2+t/2);0===l&&0===u||S({...h,x:l,y:u})}),[a,p,w,g]),(0,i.useEffect)((()=>{const t=()=>{f&&b((t=>({...t,...m()})))};return window.addEventListener("resize",t,{passive:!0}),()=>window.removeEventListener("resize",t)}),[f]),{animate:(w?"minimize":"")||(!a&&f?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:o.Nb.WINDOW},variants:{active:s,exit:c,initial:e?u:l,maximize:y,minimize:x}}}}}]);