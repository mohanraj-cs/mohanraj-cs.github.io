"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8537],{58363:function(e,t,n){n.d(t,{$3:function(){return s},QC:function(){return r},YH:function(){return i},dI:function(){return a},ov:function(){return o},vF:function(){return c}});const r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(9973).then(n.bind(n,79973)),HEXELLS:()=>n.e(8699).then(n.bind(n,38699)),MATRIX:()=>n.e(5380).then(n.bind(n,85380)),STABLE_DIFFUSION:()=>n.e(7023).then(n.bind(n,27023)),VANTA:()=>n.e(473).then(n.bind(n,30473))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(8956),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],s=":scope > canvas",c=":scope > video"},71043:function(e,t,n){var r=n(67294),a=n(87426),i=n(26724),o=n(64358),s=n(34254);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[c,l]=(0,r.useState)((()=>({icon:"",pid:"",url:""}))),u=(0,r.useRef)(!1),d=e=>{l(e),u.current=!1},{fs:m,rootFs:f}=(0,i.o)();return(0,r.useEffect)((()=>{if(!u.current&&m&&f){u.current=!0;const r=(0,s.RT)(e);!r||t&&!o.my.has(r)&&"FileSystemAccess"!==f.mntMap[e]?.getName()?(0,a.g7)(m,f,e,t,n,d):(0,a.Z7)(m,e,r,d)}}),[m,n,t,e,f]),[c,l]}},98537:function(e,t,n){n.d(t,{Z:function(){return $e}});var r=n(85893),a=n(1864),i=n(5152),o=n.n(i),s=n(67294),c=n(71183),l=n(10508),u=n(64382),d=n(87426);var m=l.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${e=>{let{$renaming:t}=e;return t?"all":void 0}};

  figcaption {
    pointer-events: none;
  }
`,f=n(62392),b=n(1347);var g=l.ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
  display: flex;
  flex-direction: column;

  figure {
    border: 1px solid transparent;
    display: flex;
    height: 36px;
    padding-bottom: 1px;
    place-items: center;

    figcaption {
      color: #fff;
    }

    picture {
      margin-left: 3px;
      margin-right: 8px;
    }

    svg {
      fill: rgb(210, 210, 210);
      height: 8px;
      margin-left: auto;
      margin-right: 8px;
      width: 8px;
    }

    &:active {
      figcaption {
        letter-spacing: -0.15px;
        opacity: 90%;
      }

      picture {
        margin-left: 7px;
      }

      svg {
        margin-right: 12px;
      }
    }

    &:hover {
      background-color: hsla(0, 0%, 35%, 70%);
      border: 1px solid hsla(0, 0%, 45%, 70%);
    }
  }
`,p=n(8011);const h={icon:{StyledFileEntry:f.Z,StyledFileManager:b.Z},list:{StyledFileEntry:g,StyledFileManager:p.Z}},v={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}};var w=n(42362),y=n(64358);const A="matrix(0.5, 0.05, 0, 0.7, 2, 1)",E=e=>{let{baseIcon:t,icon:n,isFirstImage:a,name:i,totalSubIcons:o,view:c}=e;const l=(0,s.useMemo)((()=>v[[y.MB,y.EV].includes(n)||n.startsWith("blob:")?c:"sub"]),[n,c]),u=(0,s.useMemo)((()=>{if(n===y.EV)return{zIndex:3};if(t===y._l){const e=o-1>1;return{objectFit:"cover",transform:`${a&&e?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":A} translateZ(0px)`,zIndex:a?2:1}}}),[t,n,a,o]);return(0,r.jsx)(w.Z,{$eager:n===y.MB,alt:i,src:n,style:u,...l})},k=(0,s.memo)(E),x=e=>{let{icon:t,name:n,showShortcutIcon:a,subIcons:i,view:o}=e;const c=(0,s.useMemo)((()=>a?i?.filter((e=>e!==y.MB)):i),[a,i]),l=(0,s.useMemo)((()=>c?.filter((e=>e!==t))||[]),[t,c]);return(0,r.jsx)(r.Fragment,{children:l.map(((e,a)=>(0,r.jsx)(k,{baseIcon:t,icon:e,isFirstImage:0===a,name:n,totalSubIcons:l.length,view:o},e)))})};var S=(0,s.memo)(x),$=n(26724),F=n(56758),M=n(25804),L=n(62065),C=n(20876);var O=e=>{const{setForegroundId:t}=(0,L.k)(),{createPath:r,updateFolder:i}=(0,$.o)(),{minimize:o,open:c,url:l}=(0,F.z)(),u=(0,C.R)();return(0,s.useCallback)((async(s,d)=>{const{preferProcessIcon:m,singleton:f,icon:b}=M.Z[s]||{},g=f?Object.keys(u.current).find((e=>e.startsWith(`${s}${y.CC}`))):"";let p=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:o}=await n.e(5062).then(n.bind(n,95062)),s=await o(e);p=(0,a.join)(y.Ll,await r(await t(e,s),y.Ll,s)),i(y.Ll,(0,a.basename)(p))}g?(l(g,p),u.current[g].minimized&&o(g),t(g)):c(s||"OpenWith",{url:p},f||d===y._l||m?b:d)}),[r,o,c,u,t,l,i,e])},T=n(54314);const R=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),D=[".aac",".mp3",".ogg",".wav"],I=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),j=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var P=n(34254);const z=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),W=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var B=n(48764).Buffer;const{alias:Z}=y.PACKAGE_DATA;var N=(e,t,r,i,o,c,l,m,f)=>{let{archiveFiles:b,deleteLocalPath:g,downloadFiles:p,extractFiles:h,newShortcut:v}=o,{blurEntry:w,focusEntry:A}=c;const{minimize:E,open:k,url:x}=(0,F.z)(),S=(0,C.R)(),{setCursor:N,setForegroundId:U,setWallpaper:H}=(0,L.k)(),K=(0,a.basename)(r),V=l.includes(K),G=O(e),{copyEntries:Q,createPath:X,lstat:_,mapFs:Y,moveEntries:q,readFile:J,rootFs:ee,unMapFs:te,updateFolder:ne}=(0,$.o)(),{contextMenu:re}=(0,T.H)(),{onContextMenuCapture:ae,...ie}=(0,s.useMemo)((()=>re?.((()=>{const o=(0,P.RT)(e),{process:s=[]}=o in u.Z?u.Z[o]:{},c=s.filter((e=>e!==t)),w=c.filter((e=>e!==t)),A=1===l.length,$=()=>A||!V?[r]:[...new Set([r,...l.map((e=>(0,a.join)((0,a.dirname)(r),e)))])],F=[],L=(0,P.RT)(r),C=L===y.zm,O=ee?.mountList.some((e=>e===r&&"FileSystemAccess"===ee?.mntMap[e]?.getName()));if(!f&&!O){const s=(0,d.Wd)(o);if(F.push({action:()=>q($()),label:"Cut"},{action:()=>Q($()),label:"Copy"},y.Os),(s||C||!L&&!o)&&F.push({action:()=>$().forEach((async e=>{const t=s&&!(await _(e)).isDirectory()?s:"FileExplorer";v(e,t)})),label:"Create shortcut"}),F.push({action:()=>$().forEach((e=>g(e))),label:"Delete"},{action:()=>i(K),label:"Rename"},y.Os,{action:()=>{const t=Object.keys(S.current).find((t=>t===`Properties${y.CC}${e}`));t?(S.current[t].minimized&&E(t),U(t)):k("Properties",{shortcutPath:C?r:void 0,url:C?r:e})},label:"Properties"}),r)if(r===(0,a.join)(y.Ll,y.Bb)){if("function"===typeof FileSystemHandle){const e=(e,t)=>{Y(e,t).then((e=>{ne("/",e),k("FileExplorer",{url:(0,a.join)("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"===typeof navigator.storage?.getDirectory&&!(0,P.vU)()&&!(0,P.G6)();F.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[y.Os]:[])}}else{F.unshift(y.Os);const i=R.has(L),o=z.has(L),c=I.has(L);if(i||o||c){const e=i||c,t=e?i?D:j:W;F.unshift(y.Os,{label:"Convert to",menu:t.filter((e=>e!==L)).map((t=>{const i=t.replace(".","");return{action:async()=>{const t=await Promise.all($().map((async e=>[e,await J(e)]))),o=e?(await n.e(8844).then(n.bind(n,98844))).transcode:(await n.e(1026).then(n.bind(n,51026))).convert,s=await o(t,i);await Promise.all(s.map((async e=>{let[t,n]=e;const i=(0,a.basename)(t),o=(0,a.dirname)(r);ne(o,await X(i,o,n))})))},label:i.toUpperCase()}}))})}y.Tj.includes(L)&&F.unshift(y.Os,{label:"Convert to",menu:y.Tj.filter((e=>e!==L)).map((e=>{const t=e.replace(".","");return{action:()=>{$().forEach((async e=>{const i=`${(0,a.dirname)(e)}/${(0,a.basename)(e,(0,a.extname)(e))}.${t}`,{convertSheet:o}=await n.e(7526).then(n.bind(n,37526)),s=await o(await J(e),t),c=(0,a.dirname)(r);ne(c,await X((0,a.basename)(i),c,B.from(s)))}))},label:t.toUpperCase()}}))});".m3u"!==L&&y.uH.has(L)&&F.unshift(y.Os,{action:()=>{$().forEach((async e=>{const t=`${(0,a.dirname)(e)}/${(0,a.basename)(e,(0,a.extname)(e))}.m3u`,{createM3uPlaylist:i,tracksFromPlaylist:o}=await n.e(8757).then(n.bind(n,68757)),s=i(await o((await J(e)).toString(),(0,P.RT)(e))),c=(0,a.dirname)(r);ne(c,await X((0,a.basename)(t),c,B.from(s)))}))},label:"Convert to M3U"});const l="FileExplorer"===t;if(A&&!l&&!(0,P.yk)(e)){const t=(0,a.basename)(e),n={text:`${t} - ${Z}`,title:t,url:`${window.location.origin}?url=${e}`};try{navigator.canShare?.(n)&&F.unshift({action:()=>navigator.share(n),label:"Share",share:!0})}catch{}}F.unshift({action:()=>b($()),label:"Add to archive..."},...y.Ao.has(L)||y.my.has(L)?[{action:()=>h(r),label:"Extract Here"}]:[],{action:()=>p($()),label:"Download"}),C||l||u.y.forEach((e=>{e===s||w.includes(e)||w.push(e)}))}F.unshift(y.Os)}O&&F.push(y.Os,{action:()=>te(r),label:"Disconnect"}),y.ru.has(o)&&F.unshift({action:()=>{k("Paint",{url:e})},label:"Edit"});const T=y.qy.has(L);if(y._r.has(L)&&F.unshift({action:()=>N(r),label:"Set as mouse pointer"}),(T||y.lM.has(L)&&!y.GM.has(L)&&!y._r.has(L))&&F.unshift({label:"Set as desktop background",...T?{action:()=>H(r)}:{menu:[{action:()=>H(r,"fill"),label:"Fill"},{action:()=>H(r,"fit"),label:"Fit"},{action:()=>H(r,"stretch"),label:"Stretch"},{action:()=>H(r,"tile"),label:"Tile"},{action:()=>H(r,"center"),label:"Center"}]}}),w.length>0&&F.unshift({label:"Open with",menu:[...w.map((e=>{const{icon:t,title:n}=M.Z[e]||{};return{action:()=>{G(e,t)},icon:t,label:n}})),y.Os,{action:()=>k("OpenWith",{url:e}),label:"Choose another app"}],primary:!t}),t){const{icon:n}=M.Z[t]||{};if(C&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===o||".zip"===o;F.unshift({action:()=>k("FileExplorer",{url:(0,a.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}m&&"FileExplorer"===t&&!y.my.has(o)&&F.unshift({action:()=>{G(t,n)},label:"Open in new window"}),F.unshift({action:()=>{"FileExplorer"===t&&m&&!y.my.has(o)?x(m,e):G(t,n)},icon:n,label:"Open",primary:!0})}return F[0]===y.Os?F.slice(1):F}))),[b,K,x,re,Q,X,g,p,h,m,l,V,_,Y,E,q,v,k,G,r,t,S,J,f,ee?.mntMap,ee?.mountList,N,U,i,H,te,ne,e]);return{onContextMenuCapture:e=>{V||(w(),A(K)),ae(e)},...ie}},U=n(71043);var H=n(55785),K=n(35778),V=n(30663),G=n(23988),Q=n(48764).Buffer;const X=o()((()=>n.e(631).then(n.bind(n,50631)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[50631]}}),_=o()((()=>n.e(9932).then(n.bind(n,29932))),{loadableGenerated:{webpack:()=>[29932]}}),Y=[],q=[];var J=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:i,focusedEntries:o,focusFunctions:f,hideShortcutIcon:b,isHeading:g,isLoadingFileManager:p,loadIconImmediately:h,name:A,path:E,readOnly:k,renaming:x,selectionRect:M,setRenaming:L,stats:C,hasNewFolderIcon:T,view:R}=e;const{blurEntry:D,focusEntry:I}=f,{url:j}=(0,F.z)(),[{comment:z,getIcon:W,icon:B,pid:Z,subIcons:J,url:ee},te]=(0,U.Z)(E,C.isDirectory(),T),ne=O(ee),{createPath:re,exists:ae,mkdirRecursive:ie,pasteList:oe,readFile:se,stat:ce,unlink:le,updateFolder:ue,writeFile:de}=(0,$.o)(),[me,fe]=(0,s.useState)(!1),{formats:be,sizes:ge}=(0,l.Fg)(),pe="list"===R,he=(0,s.useRef)(null),ve=(0,a.basename)(E),we=(0,P.RT)(ee),ye=(0,s.useMemo)((()=>y.lM.has(we)||y.qy.has(we)||(0,P.yk)(ee)),[ee,we]),Ae=1===o.length&&o[0]===ve,Ee=(0,P.RT)(E),ke=Ee===y.zm,xe=ke?ee:E,Se=(0,H.Z)({callback:async(e,t)=>{if(!o.includes(ve)){const n=await re(e,xe,t);if(n)return ue(xe,n),n}return""},directory:xe,onDragLeave:()=>he.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>he.current?.parentElement?.classList.add("focus-within")}),Fe="FileExplorer"===Z,Me=(0,s.useMemo)((()=>((e,t,n,r)=>{const a=e.replace(/-/g,y.Zf),{lines:i}=(0,d.oc)(a,t,n,r);if(i.length>2)return`${(e.includes(" ")?i.slice(0,2).join(""):i[0]).slice(0,-3)}...`;return a})(A,ge.fileEntry.fontSize,be.systemFont,ge.fileEntry[pe?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[be.systemFont,pe,A,ge.fileEntry]),Le=(0,s.useRef)(null),Ce=(0,s.useRef)(!1),Oe=(0,s.useRef)(!1),Te=(0,s.useRef)(),Re=(0,s.useCallback)((async()=>{if(C.isDirectory())return"";if(ke){if(z)return z;if(ee){if(ee.startsWith("http:")||ee.startsWith("https:"))return decodeURIComponent(ee);const e=(0,a.dirname)(ee);return`Location: ${(0,a.basename)(ee,(0,a.extname)(ee))}${e&&"."!==e?` (${(0,a.dirname)(ee)})`:""}`}return""}const e=u.Z[Ee]?.type||`${Ee.toUpperCase().replace(".","")} File`,t=C.size<0?await ce(E):C,{size:n}=t,r=(0,d.GA)(E,t),i=(0,P.UR)(n);return`${`Type: ${e}${"-1 bytes"===i?"":`\nSize: ${i}`}`}\nDate modified: ${`${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(y.ZW,be.dateModified).format(r)}`}`}),[z,Ee,be.dateModified,ke,E,ce,C,ee]),[De,Ie]=(0,s.useState)(),je=(0,s.useCallback)((()=>{Fe&&n&&!window.globalKeyStates?.ctrlKey&&!y.my.has(we)?(j(n,ee),D()):Fe&&pe?fe((e=>!e)):ne(Z,ye?void 0:B)}),[D,j,n,B,ye,pe,ne,Fe,Z,ee,we]);return(0,s.useEffect)((()=>{if(!p&&!Ce.current){const e=async()=>{if(B.startsWith("blob:")||B.startsWith("data:")){if(B.startsWith("data:image/jpeg;base64,"))return;Ce.current=!0;const e=(0,a.join)(y.Xo,`${E}${y.Qy}`);if(".ico"!==we&&!ee.startsWith(y.OT)&&!ee.startsWith(y.P7)&&!(await ae(e))&&Le.current instanceof HTMLImageElement){const t=async()=>{if(Le.current instanceof HTMLImageElement){const n=()=>(q.shift(),q[0]?.());let r="";if(Le.current.currentSrc.startsWith("data:image/gif;base64,"))r=Le.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Le.current,{naturalHeight:a,naturalWidth:i}=Le.current,o=i/a;let s,c;o!==n/e&&(i>a?s=e/o:c=n*o);const l=await(0,P.mZ)();let u;try{u=await(l?.toCanvas(Le.current,{height:s,skipAutoScale:!0,style:{objectPosition:s?"top":c?"left":void 0},width:c}))}catch{}u&&(0,P.H5)(u)?r=u.toDataURL("image/png"):setTimeout(t,y.jx.WINDOW)}r&&q.push((async()=>{const t=(0,a.dirname)(e);await ie(t);const i=Q.from(r.replace(/data:(.*);base64,/,""),"base64");return await de(e,i,!0),te((e=>({...e,icon:(0,P.YS)(i)}))),ue(t,(0,a.basename)(e)),n()})),1===q.length&&await q[0]()}};Le.current.complete?t():Le.current.addEventListener("load",t,y.K7)}}else{if(Ce.current)return;const e=(0,a.join)(y.Xo,`${E}${y.Qy}`);if(await ae(e)){const t=await se(e);if(t.length>=y.zj)Ce.current||(Ce.current=!0,te((e=>({...e,icon:(0,P.YS)(t)}))));else try{await le(e)&&ue((0,a.dirname)(E))}catch{}}else!Oe.current&&he.current&&"function"===typeof W&&(Oe.current=!0,new IntersectionObserver(((e,t)=>e.forEach((e=>{let{isIntersecting:n}=e;n&&(t.disconnect(),Te.current=new AbortController,W(Te.current.signal))}))),{root:i.current,rootMargin:"5px"}).observe(he.current))}};e()}}),[ae,i,W,B,p,ie,E,se,te,le,ue,ee,we,de]),(0,s.useEffect)((()=>()=>{try{Te?.current?.abort?.()}catch{}}),[]),(0,s.useLayoutEffect)((()=>{if(he.current&&i.current){const e=o.includes(ve),t=Y.includes(ve),n=e||t;if(e&&t&&Y.splice(Y.indexOf(ve),1),M){const e=((e,t,n,r)=>{const{x:a=0,y:i=0,width:o=0,height:s=0}=n,c=new DOMRect(a,i,Number(o),Number(s));return!(e.left-t.left>=c.right||e.top-t.top>=c.bottom||e.right-t.left<=c.left||e.bottom-t.top+r<=c.top)})(he.current.getBoundingClientRect(),i.current.getBoundingClientRect(),M,i.current.scrollTop);e&&!n?(Y.push(ve),I(ve),he.current.focus(y.eS)):!e&&n&&D(ve)}else n&&1===o.length&&!he.current.contains(document.activeElement)&&(D(),I(ve),he.current.focus(y.eS))}}),[D,i,ve,I,o,M]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(V.Z,{ref:he,"aria-label":A,onMouseOver:()=>Re().then(Ie),title:De,...pe&&{...y.Cz,as:c.m.button},...(0,K.Z)(je,pe),...Fe&&Se,...N(ee,Z,E,L,t,f,o,n,k),children:(0,r.jsxs)(m,{ref:(0,s.useCallback)((e=>pe&&(0,G.G)(e)),[pe]),$renaming:x,children:[(0,r.jsx)(w.Z,{ref:Le,$eager:h,$moving:"move"===oe[E],alt:A,src:B,...v[R]}),(0,r.jsx)(S,{icon:B,name:A,showShortcutIcon:Boolean(b||C.systemShortcut),subIcons:J,view:R}),x?(0,r.jsx)(_,{name:A,path:E,renameFile:(e,n)=>{t.renameFile(e,n),L("")}}):(0,r.jsx)("figcaption",{...g&&{"aria-level":1,role:"heading"},children:Ae&&A.length!==Me.length?A:Me}),pe&&Fe&&(0,r.jsx)(X,{flip:me})]})}),me&&(0,r.jsx)($e,{url:ee,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};const ee=l.vJ`
  body {
    pointer-events: none;
  }
`,te=l.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;var ne=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ee,{}),(0,r.jsx)(te,{...e})]});const re=y.i2/60;var ae=(e,t,n)=>{let{blurEntry:r}=n;const[a,i]=(0,s.useState)((()=>Object.create(null))),[o,c]=(0,s.useState)((()=>Object.create(null))),{x:l,y:u}=a,{height:d,width:m}=o,f=(0,s.useRef)(),{menu:b,setMenu:g}=(0,T.H)(),p=Object.keys(b).length>0,h="number"===typeof l&&"number"===typeof u,v=()=>{c(Object.create(null)),i(Object.create(null))},w=!p&&("number"===typeof m&&"number"===typeof d)&&h,y=w?{height:`${Math.abs(Number(d))}px`,transform:`translate(\n            ${Number(l)+(Number(m)<0?Number(m):0)}px,\n            ${Number(u)+(Number(d)<0?Number(d):0)}px)`,width:`${Math.abs(Number(m))}px`}:{};return{isSelecting:w,selectionEvents:{onMouseDown:n=>{let{clientX:a,clientY:o,target:s}=n;if(s===e.current){const{scrollTop:n}=e.current,{x:s=0,y:l=0}=e.current.getBoundingClientRect();c(Object.create(null)),i({x:a-s,y:o-l+n}),b&&g(Object.create(null)),t.length>0&&r()}},...h?{onMouseLeave:v,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:a=0}=e.current||{},{x:i=0,y:o=0}=e.current?.getBoundingClientRect()||{};f.current||(c({height:r-o-(u||0)+a,width:n-i-(l||0)}),f.current=window.setTimeout((()=>{f.current=void 0}),re))},onMouseUp:v}:{}},selectionRect:w?{...a,...o}:void 0,selectionStyling:y}};var ie=(e,t,n,r,i)=>{let{focusEntry:o}=t;const c=(0,s.useRef)(n.current?.lastElementChild),[l,u]=(0,s.useState)(-1),{iconPositions:m,sortOrders:f,setIconPositions:b,setSortOrder:g}=(0,L.k)(),p=(0,s.useRef)(),h=(0,s.useRef)(Object.create(null)),v=(0,s.useRef)(!1),w=e=>{let{clientX:t,clientY:n}=e;h.current={...h.current,x:t,y:n}},A="MAIN"===n.current?.parentElement?.tagName,E=t=>r=>{(0,P.nK)(r),i&&e.length>0?((0,P.vi)(t,n.current,m,f,h.current,e,b),n.current?.removeEventListener("dragover",w)):-1!==l&&g(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(l,0,...e),n}))},k=t=>n=>{let{target:r}=n;if(!i&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},a=e.includes(t);u(a?-1:[...n].indexOf(r))}},x=(t,r,s)=>l=>{if(s)return void(0,P.nK)(l);o(r);const u=e.length<=1;if(l.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(u?[(0,a.join)(t,r)]:e.map((e=>(0,a.join)(t,e))))),u&&l.nativeEvent.dataTransfer?.setData("DownloadURL",`${(0,d.bh)(r)||"application/octet-stream"}:${r}:${window.location.href}${(0,a.join)(t,r)}`),!u&&p.current){const r=Object.keys(m);i&&!v.current&&(c.current&&n.current?.lastElementChild&&n.current.lastElementChild!==c.current||e.every((e=>r.includes(`${t}/${e}`))))&&(v.current=!0);const a=A?l.nativeEvent.clientX:l.nativeEvent.offsetX,o=v.current?l.nativeEvent.clientY:l.nativeEvent.offsetY;l.nativeEvent.dataTransfer?.setDragImage(p.current,a,o),i&&!v.current&&(v.current=!0)}Object.assign(l.dataTransfer,{effectAllowed:"move"}),i&&(h.current=e.length>1?{offsetX:l.nativeEvent.offsetX,offsetY:l.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",w,{passive:!0}))},S=(0,s.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){p.current?p.current.src="":p.current=new Image;const t=await(0,P.mZ)();let r;try{r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:y.RJ,skipAutoScale:!0}))}catch{}r&&(p.current.src=r)}}}),[n]),$=(0,s.useRef)();return(0,s.useEffect)((()=>{n.current?.lastElementChild&&!c.current&&(c.current=n.current.lastElementChild)}),[n,e]),(0,s.useEffect)((()=>{$.current&&window.clearTimeout($.current),$.current=window.setTimeout((()=>{$.current=void 0,S()}),y.i2/2)}),[e,S]),(0,s.useEffect)((()=>{!r&&e.length>1&&S()}),[e.length,r,S]),(e,t,n)=>({draggable:!0,onDragEnd:E(e),onDragOver:k(t),onDragStart:x(e,t,n),style:A?m[(0,a.join)(e,t)]:void 0})},oe=n(62727),se=n(6529);var ce=(e,t,n,r,i,o,c,l,u,d)=>{let{blurEntry:m,focusEntry:f}=i,{newPath:b,pasteToFolder:g}=o;const{copyEntries:p,deletePath:h,moveEntries:v}=(0,$.o)(),{url:w}=(0,F.z)(),{openTransferDialog:A}=(0,oe.Z)(),{foregroundId:E}=(0,L.k)();return(0,s.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!E&&t===y.Ll||E===u)&&(e.stopImmediatePropagation?.(),(0,se.W)(e.clipboardData.files,t,b).then(A))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[E,u,b,A,t]),(0,s.useCallback)((i=>o=>{if("list"===d)return;const{ctrlKey:s,key:b,target:A,shiftKey:E}=o;if(!E)if(s){switch(b.toLowerCase()){case"a":if((0,P.nK)(o),A instanceof HTMLOListElement){const[e]=A.querySelectorAll("button");e?.focus(y.eS)}Object.keys(e).forEach((e=>f(e)));break;case"c":(0,P.nK)(o),p(n.map((e=>(0,a.join)(t,e))));break;case"x":(0,P.nK)(o),v(n.map((e=>(0,a.join)(t,e))));break;case"v":o.stopPropagation(),g()}}else switch(b){case"F2":i&&((0,P.nK)(o),r(i));break;case"F5":u&&((0,P.nK)(o),c());break;case"Delete":n.length>0&&((0,P.nK)(o),n.forEach((async e=>{const n=(0,a.join)(t,e);await h(n)&&c(void 0,n)})),m());break;case"Backspace":u&&((0,P.nK)(o),w(u,(0,a.dirname)(t)));break;case"Enter":A instanceof HTMLButtonElement&&((0,P.nK)(o),(0,P.TF)(A,2));break;default:if(b.startsWith("Arrow")){if((0,P.nK)(o),!(A instanceof HTMLElement))return;let e=A;if(!(A instanceof HTMLButtonElement)&&(e=A.querySelector("button"),!e))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let i="ArrowUp"===b||"ArrowDown"===b?document.elementFromPoint(t,n+("ArrowUp"===b?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===b?-a:2*a),n);if(i instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...i.children],n=e.indexOf(t);"ArrowUp"!==b&&"ArrowDown"!==b||(i=e["ArrowUp"===b?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}const s=i?.closest("button");let c=s;s instanceof HTMLButtonElement&&l?.current?.contains(s)||(c=e),c?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[m,w,p,h,l,e,f,n,u,v,g,r,c,t,d])};var le=e=>{const[t,n]=(0,s.useState)([]),r=(0,s.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),a=(0,s.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),i=(0,s.useRef)(!1),o=(0,s.useCallback)((t=>{const{relatedTarget:n,target:a}=t,o=e.current===n;o&&i.current?((0,P.nK)(t),a?.focus(y.eS)):(o||e.current?.contains(n))&&n instanceof HTMLElement||r()}),[r,e]),c=(0,s.useCallback)((()=>{i.current=!0,window.requestAnimationFrame((()=>{i.current=!1}))}),[]);return{blurEntry:r,focusEntry:a,focusableEntry:e=>{const n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,P.Wy)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onFocusCapture:c,onMouseDown:t=>{let{ctrlKey:i}=t;i?n?r(e):a(e):n||(r(),a(e))}}},focusedEntries:t}},ue=n(42151),de=n(58363),me=n(21638),fe=n(48764).Buffer;const be=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),ge=(0,d.sK)(".whtml"),pe=(0,d.sK)(".txt"),he="video/webm",ve="video/mp4";let we,ye,Ae=2;var Ee=(e,t,r)=>{let{addToFolder:i,newPath:o,pasteToFolder:c,sortByOrder:[[l,u],d]}=t;const{contextMenu:m}=(0,T.H)(),{exists:f,mapFs:b,pasteList:g={},readFile:p,writeFile:h,updateFolder:v}=(0,$.o)(),{iconPositions:w,setForegroundId:A,setWallpaper:E,setIconPositions:k,sortOrders:x,wallpaperImage:S}=(0,L.k)(),M=(0,s.useCallback)((e=>{if("VANTA"===e){Ae-=1;const e=0===Ae;E("VANTA"+(e?" WIREFRAME":"")),e&&(Ae=2)}else Ae=2,E(e)}),[E]),{minimize:O,open:R}=(0,F.z)(),D=(0,s.useCallback)(((t,n)=>{k((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,a.dirname)(n)!==e}))))),d(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,a]=n;return[e,r===e?!a:t]})(t,n))}),[k,d,e]),I=(0,s.useMemo)((()=>r&&"function"===typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(he)||window?.MediaRecorder?.isTypeSupported(ve))),[r]),j=(0,s.useCallback)((async()=>{if(ye&&we){const{active:e}=we;try{ye.requestData(),we.getTracks().forEach((e=>e.stop()))}catch{}if(ye=void 0,we=void 0,e)return}const e=(0,P.vU)()||(0,P.G6)(),t={video:{frameRate:30},...!e&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};we=await navigator.mediaDevices.getDisplayMedia(t);const[r]=we.getVideoTracks(),{height:i,width:o}=r.getSettings(),s=MediaRecorder.isTypeSupported(he),c=`Screen Capture ${(0,P.gE)()}.${s?"webm":"mp4"}`;ye=new MediaRecorder(we,{bitsPerSecond:i&&o?i*o*30:void 0,mimeType:s?he:ve});const l=(0,a.join)(y.Ll,c),u=Date.now();let d=!1;ye.start(),ye.addEventListener("dataavailable",(async t=>{const{data:r}=t;if(r?.size){const t=fe.from(await r.arrayBuffer());if(await h(l,d?fe.concat([await p(l),t]):t,d),!s||e||ye&&"inactive"!==ye.state)v(y.Ll,c);else{const{default:e}=await n.e(6027).then(n.t.bind(n,86027,23));e((0,P.V4)(await p(l)),Date.now()-u,(async e=>{await h(l,fe.from(await e.arrayBuffer()),!0),v(y.Ll,c)}))}d=!0}}))}),[p,v,h]),z=(0,me.Z)(),W=(0,C.R)(),B=(0,s.useCallback)(((e,t)=>{if(t&&r){const{clientX:n,clientY:r}=t.nativeEvent instanceof TouchEvent?t.nativeEvent.touches[0]:t.nativeEvent;(0,P.vi)(y.Ll,t.target,w,x,{x:n,y:r},e,k)}}),[w,r,k,x]),Z=(0,s.useCallback)((async(e,t,n)=>B([await o(e,t,"rename")],n)),[o,B]);return(0,s.useMemo)((()=>m?.((t=>{const n={action:()=>b(e).then((n=>{B([n],t),v(e,n),R("FileExplorer",{url:(0,a.join)(e,n)})})).catch((()=>{})),label:"Map directory"},o=[{action:()=>i().then((e=>B(e,t))),label:"Add file(s)"},...(0,P.df)()?[n]:[]],s=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement,d=y.my.has((0,P.RT)(e));return[{label:"Sort by",menu:[{action:()=>D("name",!0),label:"Name",toggle:"name"===l},{action:()=>D("size",!1),label:"Size",toggle:"size"===l},{action:()=>D("type",!0),label:"Item type",toggle:"type"===l},{action:()=>D("date",!1),label:"Date modified",toggle:"date"===l},y.Os,{action:()=>D("",!0),label:"Ascending",toggle:u},{action:()=>D("",!1),label:"Descending",toggle:!u}]},{action:()=>v(e),label:"Refresh"},...r?[y.Os,{label:"Background",menu:de.ov.filter((e=>{let{requiresWebGPU:t}=e;return!t||z})).reduce(((e,t)=>[...e,{action:()=>{s&&be?.(),t.id&&M(t.id)},label:t.name||t.id,toggle:t.startsWith?S.startsWith(t.id):S===t.id}]),s?[{action:be,checked:!0,label:"Music Visualization"},y.Os]:[])},...I?[{action:j,label:we?.active?"Stop screen capture":"Capture screen"}]:[]]:[],...d?[]:[y.Os,...o,{action:()=>R("Terminal",{url:e}),label:"Open Terminal here"},y.Os,{action:()=>c(),disabled:0===Object.keys(g).length,label:"Paste"},y.Os,{label:"New",menu:[{action:()=>Z("New folder",void 0,t),icon:y.XN,label:"Folder"},y.Os,{action:()=>Z("New Rich Text Document.whtml",fe.from(""),t),icon:ge,label:"Rich Text Document"},{action:()=>Z("New Text Document.txt",fe.from(""),t),icon:pe,label:"Text Document"}]},...r?[]:[y.Os,{action:()=>{const t=Object.keys(W.current).find((t=>t===`Properties${y.CC}${e}`));t?(W.current[t].minimized&&O(t),A(t)):R("Properties",{url:e})},label:"Properties"}]],...r?[y.Os,{action:async()=>{if(!(await f(y.AV))){const e=await fetch(document.location.href),t=fe.from(await e.arrayBuffer());await h(y.AV,t),v((0,a.dirname)(y.AV),(0,a.basename)(y.AV))}R("MonacoEditor",{url:y.AV})},label:"View page source"},{action:()=>R("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[i,I,j,m,f,z,u,r,b,O,Z,R,g,c,W,A,M,l,B,v,D,e,S,h])};const ke=o()((()=>n.e(8598).then(n.bind(n,48598))),{loadableGenerated:{webpack:()=>[48598]}}),xe=o()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}}),Se=e=>{let{allowMovingDraggableEntries:t,hideFolders:i,hideLoading:o,hideScrolling:c,hideShortcutIcons:l,id:u,isDesktop:d,isStartMenu:m,loadIconsImmediately:f,preloadShortcuts:b,readOnly:g,showStatusBar:p,skipFsWatcher:v,skipSorting:w,url:A,view:E}=e;const[k,x]=(0,s.useState)(A),[S,F]=(0,s.useState)(""),[M,L]=(0,s.useState)(!1),C=(0,s.useRef)(null),{focusedEntries:O,focusableEntry:T,...R}=le(C),{fileActions:D,files:I,folderActions:j,isLoading:z,updateFiles:W}=(0,ue.Z)(A,F,R,{hideFolders:i,hideLoading:o,preloadShortcuts:b,skipFsWatcher:v,skipSorting:w}),{mountFs:B,rootFs:Z,stat:N}=(0,$.o)(),{StyledFileEntry:U,StyledFileManager:K}=h[E],{isSelecting:V,selectionRect:G,selectionStyling:Q,selectionEvents:X}=ae(C,O,R),_=ie(O,R,C,V,t),Y=(0,H.Z)({callback:j.newPath,directory:A,updatePositions:t}),q=Ee(A,j,d),ee=!o&&z||A!==k,te=ce(I,A,O,F,R,j,W,C,u,E),[re,oe]=(0,s.useState)("prompt"),se=(0,s.useRef)(!1),de=(0,s.useMemo)((()=>""===S?te():void 0),[te,S]);return(0,s.useEffect)((()=>{se.current||"granted"===re||"FileSystemAccess"!==Z?.mntMap[k]?.getName()||(se.current=!0,n.e(1953).then(n.bind(n,51953)).then((e=>{let{requestPermission:t}=e;return t(k).then((e=>{const t="granted"===e;e&&!t||(oe("granted"),t&&W())})).catch((e=>{"Permission already granted"===e.message&&oe("granted")})).finally((()=>{se.current=!1}))})))}),[k,re,Z?.mntMap,W]),(0,s.useEffect)((()=>{if(!M&&y.my.has((0,P.RT)(A))){(async()=>{(await N(A)).isDirectory()||L((e=>(e||B(A).then((()=>setTimeout(W,100))).catch((()=>{})),!0)))})()}}),[B,M,N,W,A]),(0,s.useEffect)((()=>{A!==k&&(j.resetFiles(),x(A),oe("denied"))}),[k,j,A]),(0,s.useEffect)((()=>{ee||d||m||C.current?.focus(y.eS)}),[d,m,ee]),(0,r.jsxs)(r.Fragment,{children:[ee?(0,r.jsx)(xe,{}):(0,r.jsxs)(K,{ref:C,$scrollable:!c,onKeyDown:de,...g?{onContextMenu:P.nK}:{$selecting:V,...Y,...q,...X},...y.LL,children:[V&&(0,r.jsx)(ne,{style:Q}),Object.keys(I).map((e=>(0,r.jsx)(U,{$selecting:V,$visible:!z,...!g&&_(A,e,S===e),...""===S&&{onKeyDown:te(e)},...T(e),children:(0,r.jsx)(J,{fileActions:D,fileManagerId:u,fileManagerRef:C,focusFunctions:R,focusedEntries:O,hasNewFolderIcon:m,hideShortcutIcon:l,isHeading:d&&I[e].systemShortcut,isLoadingFileManager:z,loadIconImmediately:f,name:(0,a.basename)(e,y.zm),path:(0,a.join)(A,e),readOnly:g,renaming:S===e,selectionRect:G,setRenaming:F,stats:I[e],view:E})},e)))]}),p&&(0,r.jsx)(ke,{count:ee?0:Object.keys(I).length,directory:A,fileDrop:Y,selected:O})]})};var $e=(0,s.memo)(Se)},55785:function(e,t,n){var r=n(1864),a=n(67294),i=n(62727),o=n(6529),s=n(42151),c=n(26724),l=n(56758),u=n(62065),d=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:f,onDragLeave:b,onDragOver:g,updatePositions:p}=e;const{url:h}=(0,l.z)(),{iconPositions:v,sortOrders:w,setIconPositions:y}=(0,u.k)(),{mkdirRecursive:A,updateFolder:E,writeFile:k}=(0,c.o)(),x=(0,a.useCallback)((async(e,t,n)=>{if(f)if(t){const a=(0,r.join)(d.Ll,e);if(await A(d.Ll),await k(a,t,!0))return n===s.v.UPDATE_URL&&h(f,a),E(d.Ll,e),(0,r.basename)(a)}else n===s.v.UPDATE_URL&&h(f,e);return""}),[f,A,E,h,k]),{openTransferDialog:S}=(0,i.Z)();return{onDragLeave:b,onDragOver:e=>{g?.(e),(0,m.nK)(e)},onDrop:e=>{if(!d.my.has((0,m.RT)(n))){if(p&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,o.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let s=[];if(a){try{s=JSON.parse(a)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,r.basename)(e)===(0,r.relative)(n,e))return;s=s.map((e=>(0,r.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,r.basename)(e,(0,r.extname)(e))} (${t})${(0,r.extname)(e)}`}while(v[a]);return(0,r.basename)(a)})),(0,m.vi)(n,e.target,v,w,i,s,y)}(0,o.WG)(e,t||x,n,S,Boolean(f))}}}}},62392:function(e,t,n){const r=n(10508).ZP.li.withConfig({componentId:"sc-73c659b1-0"})`
  display: ${e=>{let{$visible:t}=e;return t?"flex":"none"}};
  height: min-content;
  padding: 2px;

  &.focus-within,
  &:hover {
    border: 2px solid transparent;
    padding: 0;
    position: relative;

    &::before {
      content: "";
      inset: -1px;
      position: absolute;
    }
  }

  button {
    position: relative;

    figure {
      display: flex;
      flex-direction: column;
      margin-bottom: -2px;
      place-items: center;

      figcaption {
        color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.text}};
        font-size: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.fontSize}};
        line-height: 1.2;
        margin: 1px 0;
        padding: 2px 0;
        text-shadow: ${e=>{let{theme:t}=e;return t.colors.fileEntry.textShadow}};
        word-break: break-word;
      }

      picture {
        height: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};
        width: ${e=>{let{theme:t}=e;return t.sizes.fileEntry.iconSize}};

        &:not(:first-of-type) {
          position: absolute;

          img {
            position: absolute;
          }
        }
      }
    }
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.background}};

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.border}`}};
    }
  }

  &.focus-within {
    background-color: ${e=>{let{theme:t}=e;return t.colors.fileEntry.backgroundFocused}};
    z-index: 1;

    &.only-focused {
      margin-bottom: -1000px;
    }

    &::before {
      border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocused}`}};
    }

    &:hover {
      background-color: ${e=>{let{theme:t,$selecting:n}=e;return n?t.colors.fileEntry.backgroundFocused:t.colors.fileEntry.backgroundFocusedHover}};

      &::before {
        border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.fileEntry.borderFocusedHover}`}};
      }
    }
  }
`;t.Z=r},1347:function(e,t,n){var r=n(10508),a=n(38060),i=n(64358);const o=r.ZP.ol.withConfig({componentId:"sc-9426b390-0"})`
  ${e=>{let{$scrollable:t}=e;return t?(0,a.Z)():void 0}};

  column-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.columnGap}};
  contain: strict;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryWidth})`}};
  grid-template-rows: ${e=>{let{theme:t}=e;return`repeat(auto-fill, ${t.sizes.fileManager.gridEntryHeight})`}};
  height: 100%;
  overflow: ${e=>{let{$scrollable:t}=e;return t?void 0:"hidden"}};
  padding: ${e=>{let{theme:t}=e;return t.sizes.fileManager.padding}};
  place-content: flex-start;
  pointer-events: ${e=>{let{$selecting:t}=e;return t?"auto":void 0}};
  row-gap: ${e=>{let{theme:t}=e;return t.sizes.fileManager.rowGap}};

  main > & {
    grid-auto-flow: column;
    height: calc(100% - ${i.bK}px);
    overflow: visible;
    padding-bottom: 21px;
  }
`;t.Z=o},8011:function(e,t,n){const r=n(10508).ZP.ol.withConfig({componentId:"sc-b9b2a10d-0"})`
  margin-left: 7px;
  margin-top: 7px;
  width: 100%;

  picture:not(:first-of-type) {
    position: absolute;
  }
`;t.Z=r},35778:function(e,t,n){var r=n(67294),a=n(64358);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{const o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},c=()=>{i.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",c),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",c,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},21638:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);const a=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"===typeof navigator)return!1;if(!("gpu"in navigator))return!1;let e;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},38060:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(10508);const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC";var c=n(64358);const l={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
  overflow: auto;
  scrollbar-color: ${l[u].thumb} ${l[u].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${l[u].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${l[u].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${l[u].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${l[u].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${l[u].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${l[u].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${l[u].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${l[u].buttonHover};
    }

    &:active {
      background-color: ${l[u].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===t?"center":`${t}px`};
    background-position-y: ${0===n?"center":`${n}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${a});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${i});
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
    background-image: url(${o});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${s});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${l[u].blendMode};
  }
`}},23988:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e&&(e.addEventListener("mouseleave",(()=>e.removeAttribute("style")),{passive:!0}),e.addEventListener("mousemove",(r=>{let{clientX:a,clientY:i,target:o}=r;if(e.contains(o)){const{left:r,top:o}=e.getBoundingClientRect(),s=a-r,c=i-o;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${s}px ${c}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${s}px ${c}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / ${n}px / 0px stretch`})}}),{passive:!0}))}}}]);