"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8537],{58363:function(e,t,n){n.d(t,{$3:function(){return s},QC:function(){return r},YH:function(){return i},dI:function(){return a},ov:function(){return o},vF:function(){return c}});const r={center:"center center",fill:"center center / cover",fit:"center center / contain",stretch:"center center / 100% 100%",tile:"50% 50%"},a={COASTAL_LANDSCAPE:()=>n.e(9973).then(n.bind(n,79973)),HEXELLS:()=>n.e(8699).then(n.bind(n,38699)),MATRIX:()=>n.e(5380).then(n.bind(n,85380)),STABLE_DIFFUSION:()=>n.e(7023).then(n.bind(n,27023)),VANTA:()=>n.e(473).then(n.bind(n,30473))},i={COASTAL_LANDSCAPE:()=>new Worker(n.tu(new URL(n.p+n.u(5183),n.b)),{name:"Wallpaper (Coastal Landscape)"}),HEXELLS:()=>new Worker(n.tu(new URL(n.p+n.u(3191),n.b)),{name:"Wallpaper (Hexells)"}),STABLE_DIFFUSION:()=>new Worker(n.tu(new URL(n.p+n.u(9629),n.b)),{name:"Wallpaper (Stable Diffusion)"}),VANTA:e=>new Worker(n.tu(new URL(n.p+n.u(8956),n.b)),{name:"Wallpaper (Vanta Waves)"+(e?` [${e}]`:"")})},o=[{id:"APOD",startsWith:!0},{id:"COASTAL_LANDSCAPE",name:"Coastal Landscape"},{id:"HEXELLS",name:"Hexells"},{id:"MATRIX 2D",name:"Matrix (2D)"},{id:"MATRIX 3D",name:"Matrix (3D)"},{id:"SLIDESHOW",name:"Picture Slideshow"},{id:"STABLE_DIFFUSION",name:"Stable Diffusion (Beta)",requiresWebGPU:!0},{id:"VANTA",name:"Vanta Waves",startsWith:!0}],s=":scope > canvas",c=":scope > video"},71043:function(e,t,n){var r=n(67294),a=n(87426),i=n(26724),o=n(64358),s=n(34254);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const[c,l]=(0,r.useState)((()=>({icon:"",pid:"",url:""}))),u=(0,r.useRef)(!1),d=e=>{l(e),u.current=!1},{fs:m,rootFs:b}=(0,i.o)();return(0,r.useEffect)((()=>{if(!u.current&&m&&b){u.current=!0;const r=(0,s.RT)(e);!r||t&&!o.my.has(r)&&"FileSystemAccess"!==b.mntMap[e]?.getName()?(0,a.g7)(m,b,e,t,n,d):(0,a.Z7)(m,e,r,d)}}),[m,n,t,e,b]),[c,l]}},98537:function(e,t,n){n.d(t,{Z:function(){return Ae}});var r=n(85893),a=n(1864),i=n(5152),o=n.n(i),s=n(67294),c=n(71183),l=n(10508),u=n(64382),d=n(87426),m=l.ZP.figure.withConfig({componentId:"sc-5e52ee6b-0"})`
  pointer-events: ${e=>{let{$renaming:t}=e;return t?"all":void 0}};

  figcaption {
    pointer-events: none;
  }
`,b=n(62392),f=n(1347),g=l.ZP.li.withConfig({componentId:"sc-7f64d0dd-0"})`
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
`,p=n(8011);const h={icon:{StyledFileEntry:b.Z,StyledFileManager:f.Z},list:{StyledFileEntry:g,StyledFileManager:p.Z}},v={icon:{imgSize:48},list:{displaySize:24,imgSize:48},sub:{displaySize:48,imgSize:16}};var w=n(42362),y=n(64358);const A=(0,s.memo)((e=>{let{baseIcon:t,icon:n,isFirstImage:a,name:i,totalSubIcons:o,view:c}=e;const l=(0,s.useMemo)((()=>v[[y.MB,y.EV].includes(n)||n.startsWith("blob:")?c:"sub"]),[n,c]),u=(0,s.useMemo)((()=>{if(n===y.EV)return{zIndex:3};if(t===y._l){return{objectFit:"cover",transform:(a&&o-1>1?"matrix(0.4, 0.14, 0, 0.7, -4, 2)":"matrix(0.5, 0.05, 0, 0.7, 2, 1)")+" translateZ(0px)",zIndex:a?2:1}}}),[t,n,a,o]);return(0,r.jsx)(w.Z,{$eager:n===y.MB,alt:i,src:n,style:u,...l})}));var E=(0,s.memo)((e=>{let{icon:t,name:n,showShortcutIcon:a,subIcons:i,view:o}=e;const c=(0,s.useMemo)((()=>a?i?.filter((e=>e!==y.MB)):i),[a,i]),l=(0,s.useMemo)((()=>c?.filter((e=>e!==t))||[]),[t,c]);return(0,r.jsx)(r.Fragment,{children:l.map(((e,a)=>(0,r.jsx)(A,{baseIcon:t,icon:e,isFirstImage:0===a,name:n,totalSubIcons:l.length,view:o},e)))})})),k=n(26724),x=n(56758),S=n(25804),$=n(62065),F=n(20876),M=e=>{const{setForegroundId:t}=(0,$.k)(),{createPath:r,updateFolder:i}=(0,k.o)(),{minimize:o,open:c,url:l}=(0,x.z)(),u=(0,F.R)();return(0,s.useCallback)((async(s,d)=>{const{preferProcessIcon:m,singleton:b,icon:f}=S.Z[s]||{},g=b?Object.keys(u.current).find((e=>e.startsWith(`${s}${y.CC}`))):"";let p=e;if(e.startsWith("ipfs://")){const{getIpfsFileName:t,getIpfsResource:o}=await n.e(5062).then(n.bind(n,95062)),s=await o(e);p=(0,a.join)(y.Ll,await r(await t(e,s),y.Ll,s)),i(y.Ll,(0,a.basename)(p))}g?(l(g,p),u.current[g].minimized&&o(g),t(g)):c(s||"OpenWith",{url:p},b||d===y._l||m?f:d)}),[r,o,c,u,t,l,i,e])},L=n(54314);const C=new Set([".aac",".aiff",".ape",".flac",".m4a",".mp3",".oga",".ogg",".wav",".wma"]),O=[".aac",".mp3",".ogg",".wav"],T=new Set([".avi",".flv",".m4v",".mkv",".mov",".mp4",".mpeg",".ogv",".webm",".wmv"]),R=[".avi",".gif",".mkv",".mp4",".ogg",".ogv",".webm"];var D=n(34254);const I=new Set([".bmp",".gif",".ico",".jpeg",".jpg",".png",".psd",".tiff",".xcf"]),j=[".bmp",".gif",".jpeg",".jpg",".png",".psd",".svg",".tiff"];var P=n(48764).Buffer;const{alias:z}=y.PACKAGE_DATA;var W=(e,t,r,i,o,c,l,m,b)=>{let{archiveFiles:f,deleteLocalPath:g,downloadFiles:p,extractFiles:h,newShortcut:v}=o,{blurEntry:w,focusEntry:A}=c;const{minimize:E,open:W,url:B}=(0,x.z)(),Z=(0,F.R)(),{setCursor:N,setForegroundId:U,setWallpaper:H}=(0,$.k)(),K=(0,a.basename)(r),V=l.includes(K),G=M(e),{copyEntries:Q,createPath:X,lstat:_,mapFs:Y,moveEntries:q,readFile:J,rootFs:ee,unMapFs:te,updateFolder:ne}=(0,k.o)(),{contextMenu:re}=(0,L.H)(),{onContextMenuCapture:ae,...ie}=(0,s.useMemo)((()=>re?.((()=>{const o=(0,D.RT)(e),{process:s=[]}=o in u.Z?u.Z[o]:{},c=s.filter((e=>e!==t)),w=c.filter((e=>e!==t)),A=1===l.length,k=()=>A||!V?[r]:[...new Set([r,...l.map((e=>(0,a.join)((0,a.dirname)(r),e)))])],x=[],$=(0,D.RT)(r),F=$===y.zm,M=ee?.mountList.some((e=>e===r&&"FileSystemAccess"===ee?.mntMap[e]?.getName()));if(!b&&!M){const s=(0,d.Wd)(o);if(x.push({action:()=>q(k()),label:"Cut"},{action:()=>Q(k()),label:"Copy"},y.Os),(s||F||!$&&!o)&&x.push({action:()=>k().forEach((async e=>{const t=s&&!(await _(e)).isDirectory()?s:"FileExplorer";v(e,t)})),label:"Create shortcut"}),x.push({action:()=>k().forEach((e=>g(e))),label:"Delete"},{action:()=>i(K),label:"Rename"},y.Os,{action:()=>{const t=Object.keys(Z.current).find((t=>t===`Properties${y.CC}${e}`));t?(Z.current[t].minimized&&E(t),U(t)):W("Properties",{shortcutPath:F?r:void 0,url:F?r:e})},label:"Properties"}),r)if(r===(0,a.join)(y.Ll,y.Bb)){if("function"==typeof FileSystemHandle){const e=(e,t)=>{Y(e,t).then((e=>{ne("/",e),W("FileExplorer",{url:(0,a.join)("/",e)})})).catch((()=>{}))},t="showDirectoryPicker"in window,n="function"==typeof navigator.storage?.getDirectory&&!(0,D.vU)()&&!(0,D.G6)();x.unshift(...t?[{action:()=>e("/"),label:"Map directory"}]:[],...n?[{action:async()=>{try{e("/OPFS",await navigator.storage.getDirectory())}catch{}},label:"Map OPFS"}]:[],...t||n?[y.Os]:[])}}else{x.unshift(y.Os);const i=C.has($),o=I.has($),c=T.has($);if(i||o||c){const e=i||c,t=e?i?O:R:j;x.unshift(y.Os,{label:"Convert to",menu:t.filter((e=>e!==$)).map((t=>{const i=t.replace(".","");return{action:async()=>{const t=await Promise.all(k().map((async e=>[e,await J(e)]))),o=e?(await n.e(8844).then(n.bind(n,98844))).transcode:(await n.e(1026).then(n.bind(n,51026))).convert,s=await o(t,i);await Promise.all(s.map((async e=>{let[t,n]=e;const i=(0,a.basename)(t),o=(0,a.dirname)(r);ne(o,await X(i,o,n))})))},label:i.toUpperCase()}}))})}y.Tj.includes($)&&x.unshift(y.Os,{label:"Convert to",menu:y.Tj.filter((e=>e!==$)).map((e=>{const t=e.replace(".","");return{action:()=>{k().forEach((async e=>{const i=`${(0,a.dirname)(e)}/${(0,a.basename)(e,(0,a.extname)(e))}.${t}`,{convertSheet:o}=await n.e(7526).then(n.bind(n,37526)),s=await o(await J(e),t),c=(0,a.dirname)(r);ne(c,await X((0,a.basename)(i),c,P.from(s)))}))},label:t.toUpperCase()}}))}),".m3u"!==$&&y.uH.has($)&&x.unshift(y.Os,{action:()=>{k().forEach((async e=>{const t=`${(0,a.dirname)(e)}/${(0,a.basename)(e,(0,a.extname)(e))}.m3u`,{createM3uPlaylist:i,tracksFromPlaylist:o}=await n.e(8757).then(n.bind(n,68757)),s=i(await o((await J(e)).toString(),(0,D.RT)(e))),c=(0,a.dirname)(r);ne(c,await X((0,a.basename)(t),c,P.from(s)))}))},label:"Convert to M3U"});const l="FileExplorer"===t;if(A&&!l&&!(0,D.yk)(e)){const t=(0,a.basename)(e),n={text:`${t} - ${z}`,title:t,url:`${window.location.origin}?url=${e}`};try{navigator.canShare?.(n)&&x.unshift({action:()=>navigator.share(n),label:"Share",share:!0})}catch{}}x.unshift({action:()=>f(k()),label:"Add to archive..."},...y.Ao.has($)||y.my.has($)?[{action:()=>h(r),label:"Extract Here"}]:[],{action:()=>p(k()),label:"Download"}),F||l||u.y.forEach((e=>{e===s||w.includes(e)||w.push(e)}))}x.unshift(y.Os)}M&&x.push(y.Os,{action:()=>te(r),label:"Disconnect"}),y.ru.has(o)&&x.unshift({action:()=>{W("Paint",{url:e})},label:"Edit"});const L=y.qy.has($);if(y._r.has($)&&x.unshift({action:()=>N(r),label:"Set as mouse pointer"}),(L||y.lM.has($)&&!y.GM.has($)&&!y._r.has($))&&x.unshift({label:"Set as desktop background",...L?{action:()=>H(r)}:{menu:[{action:()=>H(r,"fill"),label:"Fill"},{action:()=>H(r,"fit"),label:"Fit"},{action:()=>H(r,"stretch"),label:"Stretch"},{action:()=>H(r,"tile"),label:"Tile"},{action:()=>H(r,"center"),label:"Center"}]}}),w.length>0&&x.unshift({label:"Open with",menu:[...w.map((e=>{const{icon:t,title:n}=S.Z[e]||{};return{action:()=>{G(e,t)},icon:t,label:n}})),y.Os,{action:()=>W("OpenWith",{url:e}),label:"Choose another app"}],primary:!t}),t){const{icon:n}=S.Z[t]||{};if(F&&e&&"/"!==e&&!e.startsWith("http:")&&!e.startsWith("https:")){const t=""===o||".zip"===o;x.unshift({action:()=>W("FileExplorer",{url:(0,a.dirname)(e)},""),label:`Open ${t?"folder":"file"} location`})}m&&"FileExplorer"===t&&!y.my.has(o)&&x.unshift({action:()=>{G(t,n)},label:"Open in new window"}),x.unshift({action:()=>{"FileExplorer"===t&&m&&!y.my.has(o)?B(m,e):G(t,n)},icon:n,label:"Open",primary:!0})}return x[0]===y.Os?x.slice(1):x}))),[f,K,B,re,Q,X,g,p,h,m,l,V,_,Y,E,q,v,W,G,r,t,Z,J,b,ee?.mntMap,ee?.mountList,N,U,i,H,te,ne,e]);return{onContextMenuCapture:e=>{V||(w(),A(K)),ae(e)},...ie}},B=n(71043),Z=n(55785),N=n(35778),U=n(30663),H=n(23988),K=n(48764).Buffer;const V=o()((()=>n.e(631).then(n.bind(n,50631)).then((e=>e.Down))),{loadableGenerated:{webpack:()=>[50631]}}),G=o()((()=>n.e(9932).then(n.bind(n,29932))),{loadableGenerated:{webpack:()=>[29932]}}),Q=[],X=[];var _=e=>{let{fileActions:t,fileManagerId:n,fileManagerRef:i,focusedEntries:o,focusFunctions:b,hideShortcutIcon:f,isHeading:g,isLoadingFileManager:p,loadIconImmediately:h,name:A,path:S,readOnly:$,renaming:F,selectionRect:L,setRenaming:C,stats:O,hasNewFolderIcon:T,view:R}=e;const{blurEntry:I,focusEntry:j}=b,{url:P}=(0,x.z)(),[{comment:z,getIcon:_,icon:Y,pid:q,subIcons:J,url:ee},te]=(0,B.Z)(S,O.isDirectory(),T),ne=M(ee),{createPath:re,exists:ae,mkdirRecursive:ie,pasteList:oe,readFile:se,stat:ce,unlink:le,updateFolder:ue,writeFile:de}=(0,k.o)(),[me,be]=(0,s.useState)(!1),{formats:fe,sizes:ge}=(0,l.Fg)(),pe="list"===R,he=(0,s.useRef)(null),ve=(0,a.basename)(S),we=(0,D.RT)(ee),ye=(0,s.useMemo)((()=>y.lM.has(we)||y.qy.has(we)||(0,D.yk)(ee)),[ee,we]),Ee=1===o.length&&o[0]===ve,ke=(0,D.RT)(S),xe=ke===y.zm,Se=xe?ee:S,$e=(0,Z.Z)({callback:async(e,t)=>{if(!o.includes(ve)){const n=await re(e,Se,t);if(n)return ue(Se,n),n}return""},directory:Se,onDragLeave:()=>he.current?.parentElement?.classList.remove("focus-within"),onDragOver:()=>he.current?.parentElement?.classList.add("focus-within")}),Fe="FileExplorer"===q,Me=(0,s.useMemo)((()=>((e,t,n,r)=>{const a=e.replace(/-/g,y.Zf),{lines:i}=(0,d.oc)(a,t,n,r);return i.length>2?`${(e.includes(" ")?i.slice(0,2).join(""):i[0]).slice(0,-3)}...`:a})(A,ge.fileEntry.fontSize,fe.systemFont,ge.fileEntry[pe?"maxListTextDisplayWidth":"maxIconTextDisplayWidth"])),[fe.systemFont,pe,A,ge.fileEntry]),Le=(0,s.useRef)(null),Ce=(0,s.useRef)(!1),Oe=(0,s.useRef)(!1),Te=(0,s.useRef)(),Re=(0,s.useCallback)((async()=>{if(O.isDirectory())return"";if(xe){if(z)return z;if(ee){if(ee.startsWith("http:")||ee.startsWith("https:"))return decodeURIComponent(ee);const e=(0,a.dirname)(ee);return`Location: ${(0,a.basename)(ee,(0,a.extname)(ee))}${e&&"."!==e?` (${(0,a.dirname)(ee)})`:""}`}return""}const e=u.Z[ke]?.type||`${ke.toUpperCase().replace(".","")} File`,t=O.size<0?await ce(S):O,{size:n}=t,r=(0,d.GA)(S,t),i=(0,D.UR)(n);return`Type: ${e}${"-1 bytes"===i?"":`\nSize: ${i}`}\nDate modified: ${new Date(r).toISOString().slice(0,10)} ${new Intl.DateTimeFormat(y.ZW,fe.dateModified).format(r)}`}),[z,ke,fe.dateModified,xe,S,ce,O,ee]),[De,Ie]=(0,s.useState)(),je=(0,s.useCallback)((()=>{Fe&&n&&!window.globalKeyStates?.ctrlKey&&!y.my.has(we)?(P(n,ee),I()):Fe&&pe?be((e=>!e)):ne(q,ye?void 0:Y)}),[I,P,n,Y,ye,pe,ne,Fe,q,ee,we]);return(0,s.useEffect)((()=>{if(!p&&!Ce.current){const e=async()=>{if(Y.startsWith("blob:")||Y.startsWith("data:")){if(Y.startsWith("data:image/jpeg;base64,"))return;Ce.current=!0;const e=(0,a.join)(y.Xo,`${S}${y.Qy}`);if(".ico"!==we&&!ee.startsWith(y.OT)&&!ee.startsWith(y.P7)&&!await ae(e)&&Le.current instanceof HTMLImageElement){const t=async()=>{if(Le.current instanceof HTMLImageElement){const n=()=>(X.shift(),X[0]?.());let r="";if(Le.current.currentSrc.startsWith("data:image/gif;base64,"))r=Le.current.currentSrc;else{const{clientHeight:e,clientWidth:n}=Le.current,{naturalHeight:a,naturalWidth:i}=Le.current,o=i/a;let s,c;o!==n/e&&(i>a?s=e/o:c=n*o);const l=await(0,D.mZ)();let u;try{u=await(l?.toCanvas(Le.current,{height:s,skipAutoScale:!0,style:{objectPosition:s?"top":c?"left":void 0},width:c}))}catch{}u&&(0,D.H5)(u)?r=u.toDataURL("image/png"):setTimeout(t,y.jx.WINDOW)}r&&X.push((async()=>{const t=(0,a.dirname)(e);await ie(t);const i=K.from(r.replace(/data:(.*);base64,/,""),"base64");return await de(e,i,!0),te((e=>({...e,icon:(0,D.YS)(i)}))),ue(t,(0,a.basename)(e)),n()})),1===X.length&&await X[0]()}};Le.current.complete?t():Le.current.addEventListener("load",t,y.K7)}}else{if(Ce.current)return;const e=(0,a.join)(y.Xo,`${S}${y.Qy}`);if(await ae(e)){const t=await se(e);if(t.length>=y.zj)Ce.current||(Ce.current=!0,te((e=>({...e,icon:(0,D.YS)(t)}))));else try{await le(e)&&ue((0,a.dirname)(S))}catch{}}else!Oe.current&&he.current&&"function"==typeof _&&(Oe.current=!0,new IntersectionObserver(((e,t)=>e.forEach((e=>{let{isIntersecting:n}=e;n&&(t.disconnect(),Te.current=new AbortController,_(Te.current.signal))}))),{root:i.current,rootMargin:"5px"}).observe(he.current))}};e()}}),[ae,i,_,Y,p,ie,S,se,te,le,ue,ee,we,de]),(0,s.useEffect)((()=>()=>{try{Te?.current?.abort?.()}catch{}}),[]),(0,s.useLayoutEffect)((()=>{if(he.current&&i.current){const e=o.includes(ve),t=Q.includes(ve),n=e||t;if(e&&t&&Q.splice(Q.indexOf(ve),1),L){const e=((e,t,n,r)=>{const{x:a=0,y:i=0,width:o=0,height:s=0}=n,c=new DOMRect(a,i,Number(o),Number(s));return!(e.left-t.left>=c.right||e.top-t.top>=c.bottom||e.right-t.left<=c.left||e.bottom-t.top+r<=c.top)})(he.current.getBoundingClientRect(),i.current.getBoundingClientRect(),L,i.current.scrollTop);e&&!n?(Q.push(ve),j(ve),he.current.focus(y.eS)):!e&&n&&I(ve)}else n&&1===o.length&&!he.current.contains(document.activeElement)&&(I(),j(ve),he.current.focus(y.eS))}}),[I,i,ve,j,o,L]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{ref:he,"aria-label":A,onMouseOver:()=>Re().then(Ie),title:De,...pe&&{...y.Cz,as:c.m.button},...(0,N.Z)(je,pe),...Fe&&$e,...W(ee,q,S,C,t,b,o,n,$),children:(0,r.jsxs)(m,{ref:(0,s.useCallback)((e=>pe&&(0,H.G)(e)),[pe]),$renaming:F,children:[(0,r.jsx)(w.Z,{ref:Le,$eager:h,$moving:"move"===oe[S],alt:A,src:Y,...v[R]}),(0,r.jsx)(E,{icon:Y,name:A,showShortcutIcon:Boolean(f||O.systemShortcut),subIcons:J,view:R}),F?(0,r.jsx)(G,{name:A,path:S,renameFile:(e,n)=>{t.renameFile(e,n),C("")}}):(0,r.jsx)("figcaption",{...g&&{"aria-level":1,role:"heading"},children:Ee&&A.length!==Me.length?A:Me}),pe&&Fe&&(0,r.jsx)(V,{flip:me})]})}),me&&(0,r.jsx)(Ae,{url:ee,view:"list",hideFolders:!0,hideLoading:!0,hideShortcutIcons:!0,loadIconsImmediately:!0,preloadShortcuts:!0,readOnly:!0,skipFsWatcher:!0,skipSorting:!0})]})};const Y=l.vJ`
  body {
    pointer-events: none;
  }
`,q=l.ZP.span.withConfig({componentId:"sc-4e222ce4-0"})`
  background-color: ${e=>{let{theme:t}=e;return t.colors.highlightBackground}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.highlight}`}};
  position: absolute;
  z-index: 2;
`;var J=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{}),(0,r.jsx)(q,{...e})]});const ee=y.i2/60;var te=(e,t,n)=>{let{blurEntry:r}=n;const[a,i]=(0,s.useState)((()=>Object.create(null))),[o,c]=(0,s.useState)((()=>Object.create(null))),{x:l,y:u}=a,{height:d,width:m}=o,b=(0,s.useRef)(),{menu:f,setMenu:g}=(0,L.H)(),p=Object.keys(f).length>0,h="number"==typeof l&&"number"==typeof u,v=()=>{c(Object.create(null)),i(Object.create(null))},w=!p&&"number"==typeof m&&"number"==typeof d&&h,y=w?{height:`${Math.abs(Number(d))}px`,transform:`translate(\n            ${Number(l)+(Number(m)<0?Number(m):0)}px,\n            ${Number(u)+(Number(d)<0?Number(d):0)}px)`,width:`${Math.abs(Number(m))}px`}:{};return{isSelecting:w,selectionEvents:{onMouseDown:n=>{let{clientX:a,clientY:o,target:s}=n;if(s===e.current){const{scrollTop:n}=e.current,{x:s=0,y:l=0}=e.current.getBoundingClientRect();c(Object.create(null)),i({x:a-s,y:o-l+n}),f&&g(Object.create(null)),t.length>0&&r()}},...h?{onMouseLeave:v,onMouseMove:t=>{let{clientX:n,clientY:r}=t;const{scrollTop:a=0}=e.current||{},{x:i=0,y:o=0}=e.current?.getBoundingClientRect()||{};b.current||(c({height:r-o-(u||0)+a,width:n-i-(l||0)}),b.current=window.setTimeout((()=>{b.current=void 0}),ee))},onMouseUp:v}:{}},selectionRect:w?{...a,...o}:void 0,selectionStyling:y}},ne=(e,t,n,r,i)=>{let{focusEntry:o}=t;const c=(0,s.useRef)(n.current?.lastElementChild),[l,u]=(0,s.useState)(-1),{iconPositions:m,sortOrders:b,setIconPositions:f,setSortOrder:g}=(0,$.k)(),p=(0,s.useRef)(),h=(0,s.useRef)(Object.create(null)),v=(0,s.useRef)(!1),w=e=>{let{clientX:t,clientY:n}=e;h.current={...h.current,x:t,y:n}},A="MAIN"===n.current?.parentElement?.tagName,E=t=>r=>{(0,D.nK)(r),i&&e.length>0?((0,D.vi)(t,n.current,m,b,h.current,e,f),n.current?.removeEventListener("dragover",w)):-1!==l&&g(t,(t=>{const n=t.filter((t=>!e.includes(t)));return n.splice(l,0,...e),n}))},k=t=>n=>{let{target:r}=n;if(!i&&r instanceof HTMLLIElement){const{children:n=[]}=r.parentElement||{},a=e.includes(t);u(a?-1:[...n].indexOf(r))}},x=(t,r,s)=>l=>{if(s)return void(0,D.nK)(l);o(r);const u=e.length<=1;if(l.nativeEvent.dataTransfer?.setData("application/json",JSON.stringify(u?[(0,a.join)(t,r)]:e.map((e=>(0,a.join)(t,e))))),u&&l.nativeEvent.dataTransfer?.setData("DownloadURL",`${(0,d.bh)(r)||"application/octet-stream"}:${r}:${window.location.href}${(0,a.join)(t,r)}`),!u&&p.current){const r=Object.keys(m);i&&!v.current&&(c.current&&n.current?.lastElementChild&&n.current.lastElementChild!==c.current||e.every((e=>r.includes(`${t}/${e}`))))&&(v.current=!0);const a=A?l.nativeEvent.clientX:l.nativeEvent.offsetX,o=v.current?l.nativeEvent.clientY:l.nativeEvent.offsetY;l.nativeEvent.dataTransfer?.setDragImage(p.current,a,o),i&&!v.current&&(v.current=!0)}Object.assign(l.dataTransfer,{effectAllowed:"move"}),i&&(h.current=e.length>1?{offsetX:l.nativeEvent.offsetX,offsetY:l.nativeEvent.offsetY}:Object.create(null),n.current?.addEventListener("dragover",w,{passive:!0}))},S=(0,s.useCallback)((async()=>{if(n.current){const e=[...n.current.querySelectorAll(".focus-within")];if(e.length>1){p.current?p.current.src="":p.current=new Image;const t=await(0,D.mZ)();let r;try{r=await(t?.toPng(n.current,{filter:t=>!(t instanceof HTMLSourceElement)&&e.some((e=>e.contains(t))),imagePlaceholder:y.RJ,skipAutoScale:!0}))}catch{}r&&(p.current.src=r)}}}),[n]),F=(0,s.useRef)();return(0,s.useEffect)((()=>{n.current?.lastElementChild&&!c.current&&(c.current=n.current.lastElementChild)}),[n,e]),(0,s.useEffect)((()=>{F.current&&window.clearTimeout(F.current),F.current=window.setTimeout((()=>{F.current=void 0,S()}),y.i2/2)}),[e,S]),(0,s.useEffect)((()=>{!r&&e.length>1&&S()}),[e.length,r,S]),(e,t,n)=>({draggable:!0,onDragEnd:E(e),onDragOver:k(t),onDragStart:x(e,t,n),style:A?m[(0,a.join)(e,t)]:void 0})},re=n(62727),ae=n(6529),ie=(e,t,n,r,i,o,c,l,u,d)=>{let{blurEntry:m,focusEntry:b}=i,{newPath:f,pasteToFolder:g}=o;const{copyEntries:p,deletePath:h,moveEntries:v}=(0,k.o)(),{url:w}=(0,x.z)(),{openTransferDialog:A}=(0,re.Z)(),{foregroundId:E}=(0,$.k)();return(0,s.useEffect)((()=>{const e=e=>{e.clipboardData?.files?.length&&(!E&&t===y.Ll||E===u)&&(e.stopImmediatePropagation?.(),(0,ae.W)(e.clipboardData.files,t,f).then(A))};return document.addEventListener("paste",e),()=>document.removeEventListener("paste",e)}),[E,u,f,A,t]),(0,s.useCallback)((i=>o=>{if("list"===d)return;const{ctrlKey:s,key:f,target:A,shiftKey:E}=o;if(!E)if(s)switch(f.toLowerCase()){case"a":if((0,D.nK)(o),A instanceof HTMLOListElement){const[e]=A.querySelectorAll("button");e?.focus(y.eS)}Object.keys(e).forEach((e=>b(e)));break;case"c":(0,D.nK)(o),p(n.map((e=>(0,a.join)(t,e))));break;case"x":(0,D.nK)(o),v(n.map((e=>(0,a.join)(t,e))));break;case"v":o.stopPropagation(),g()}else switch(f){case"F2":i&&((0,D.nK)(o),r(i));break;case"F5":u&&((0,D.nK)(o),c());break;case"Delete":n.length>0&&((0,D.nK)(o),n.forEach((async e=>{const n=(0,a.join)(t,e);await h(n)&&c(void 0,n)})),m());break;case"Backspace":u&&((0,D.nK)(o),w(u,(0,a.dirname)(t)));break;case"Enter":A instanceof HTMLButtonElement&&((0,D.nK)(o),(0,D.TF)(A,2));break;default:if(f.startsWith("Arrow")){if((0,D.nK)(o),!(A instanceof HTMLElement))return;let e=A;if(!(A instanceof HTMLButtonElement||(e=A.querySelector("button"),e)))return;const{x:t,y:n,height:r,width:a}=e.getBoundingClientRect();let i="ArrowUp"===f||"ArrowDown"===f?document.elementFromPoint(t,n+("ArrowUp"===f?-r:2*r)):document.elementFromPoint(t+("ArrowLeft"===f?-a:2*a),n);if(i instanceof HTMLOListElement){const t=e.closest("li");if(t instanceof HTMLLIElement){const e=[...i.children],n=e.indexOf(t);"ArrowUp"!==f&&"ArrowDown"!==f||(i=e["ArrowUp"===f?0===n?e.length-1:n-1:n===e.length-1?0:n+1].querySelector("button"))}}const s=i?.closest("button");let c=s;s instanceof HTMLButtonElement&&l?.current?.contains(s)||(c=e),c?.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0}))}}}),[m,w,p,h,l,e,b,n,u,v,g,r,c,t,d])},oe=n(42151),se=n(58363),ce=n(21638),le=n(48764).Buffer;const ue=()=>window.WebampGlobal?.store.dispatch({enabled:!1,type:"SET_MILKDROP_DESKTOP"}),de=(0,d.sK)(".whtml"),me=(0,d.sK)(".txt"),be="video/webm",fe="video/mp4";let ge,pe,he=2;var ve=(e,t,r)=>{let{addToFolder:i,newPath:o,pasteToFolder:c,sortByOrder:[[l,u],d]}=t;const{contextMenu:m}=(0,L.H)(),{exists:b,mapFs:f,pasteList:g={},readFile:p,writeFile:h,updateFolder:v}=(0,k.o)(),{iconPositions:w,setForegroundId:A,setWallpaper:E,setIconPositions:S,sortOrders:M,wallpaperImage:C}=(0,$.k)(),O=(0,s.useCallback)((e=>{if("VANTA"===e){he-=1;const e=0===he;E("VANTA"+(e?" WIREFRAME":"")),e&&(he=2)}else he=2,E(e)}),[E]),{minimize:T,open:R}=(0,x.z)(),I=(0,s.useCallback)(((t,n)=>{S((t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return(0,a.dirname)(n)!==e}))))),d(""===t?e=>{let[t]=e;return[t,n]}:((e,t)=>n=>{let[r,a]=n;return[e,r===e?!a:t]})(t,n))}),[S,d,e]),j=(0,s.useMemo)((()=>r&&"function"==typeof navigator?.mediaDevices?.getDisplayMedia&&(window?.MediaRecorder?.isTypeSupported(be)||window?.MediaRecorder?.isTypeSupported(fe))),[r]),P=(0,s.useCallback)((async()=>{if(pe&&ge){const{active:e}=ge;try{pe.requestData(),ge.getTracks().forEach((e=>e.stop()))}catch{}if(pe=void 0,ge=void 0,e)return}const e=(0,D.vU)()||(0,D.G6)(),t={video:{frameRate:30},...!e&&{preferCurrentTab:!0,selfBrowserSurface:"include",surfaceSwitching:"include",systemAudio:"include"}};ge=await navigator.mediaDevices.getDisplayMedia(t);const[r]=ge.getVideoTracks(),{height:i,width:o}=r.getSettings(),s=MediaRecorder.isTypeSupported(be),c=`Screen Capture ${(0,D.gE)()}.${s?"webm":"mp4"}`;pe=new MediaRecorder(ge,{bitsPerSecond:i&&o?i*o*30:void 0,mimeType:s?be:fe});const l=(0,a.join)(y.Ll,c),u=Date.now();let d=!1;pe.start(),pe.addEventListener("dataavailable",(async t=>{const{data:r}=t;if(r?.size){const t=le.from(await r.arrayBuffer());if(await h(l,d?le.concat([await p(l),t]):t,d),!s||e||pe&&"inactive"!==pe.state)v(y.Ll,c);else{const{default:e}=await n.e(6027).then(n.t.bind(n,86027,23));e((0,D.V4)(await p(l)),Date.now()-u,(async e=>{await h(l,le.from(await e.arrayBuffer()),!0),v(y.Ll,c)}))}d=!0}}))}),[p,v,h]),z=(0,ce.Z)(),W=(0,F.R)(),B=(0,s.useCallback)(((e,t)=>{if(t&&r){const{clientX:n,clientY:r}=t.nativeEvent instanceof TouchEvent?t.nativeEvent.touches[0]:t.nativeEvent;(0,D.vi)(y.Ll,t.target,w,M,{x:n,y:r},e,S)}}),[w,r,S,M]),Z=(0,s.useCallback)((async(e,t,n)=>B([await o(e,t,"rename")],n)),[o,B]);return(0,s.useMemo)((()=>m?.((t=>{const n={action:()=>f(e).then((n=>{B([n],t),v(e,n),R("FileExplorer",{url:(0,a.join)(e,n)})})).catch((()=>{})),label:"Map directory"},o=[{action:()=>i().then((e=>B(e,t))),label:"Add file(s)"},...(0,D.df)()?[n]:[]],s=document.querySelector("main .webamp-desktop canvas")instanceof HTMLCanvasElement,d=y.my.has((0,D.RT)(e));return[{label:"Sort by",menu:[{action:()=>I("name",!0),label:"Name",toggle:"name"===l},{action:()=>I("size",!1),label:"Size",toggle:"size"===l},{action:()=>I("type",!0),label:"Item type",toggle:"type"===l},{action:()=>I("date",!1),label:"Date modified",toggle:"date"===l},y.Os,{action:()=>I("",!0),label:"Ascending",toggle:u},{action:()=>I("",!1),label:"Descending",toggle:!u}]},{action:()=>v(e),label:"Refresh"},...r?[y.Os,{label:"Background",menu:se.ov.filter((e=>{let{requiresWebGPU:t}=e;return!t||z})).reduce(((e,t)=>[...e,{action:()=>{s&&ue?.(),t.id&&O(t.id)},label:t.name||t.id,toggle:t.startsWith?C.startsWith(t.id):C===t.id}]),s?[{action:ue,checked:!0,label:"Music Visualization"},y.Os]:[])},...j?[{action:P,label:ge?.active?"Stop screen capture":"Capture screen"}]:[]]:[],...d?[]:[y.Os,...o,{action:()=>R("Terminal",{url:e}),label:"Open Terminal here"},y.Os,{action:()=>c(),disabled:0===Object.keys(g).length,label:"Paste"},y.Os,{label:"New",menu:[{action:()=>Z("New folder",void 0,t),icon:y.XN,label:"Folder"},y.Os,{action:()=>Z("New Rich Text Document.whtml",le.from(""),t),icon:de,label:"Rich Text Document"},{action:()=>Z("New Text Document.txt",le.from(""),t),icon:me,label:"Text Document"}]},...r?[]:[y.Os,{action:()=>{const t=Object.keys(W.current).find((t=>t===`Properties${y.CC}${e}`));t?(W.current[t].minimized&&T(t),A(t)):R("Properties",{url:e})},label:"Properties"}]],...r?[y.Os,{action:async()=>{if(!await b(y.AV)){const e=await fetch(document.location.href),t=le.from(await e.arrayBuffer());await h(y.AV,t),v((0,a.dirname)(y.AV),(0,a.basename)(y.AV))}R("MonacoEditor",{url:y.AV})},label:"View page source"},{action:()=>R("DevTools",{url:"dom"}),label:"Inspect"}]:[]]}))),[i,j,P,m,b,z,u,r,f,T,Z,R,g,c,W,A,O,l,B,v,I,e,C,h])};const we=o()((()=>n.e(8598).then(n.bind(n,48598))),{loadableGenerated:{webpack:()=>[48598]}}),ye=o()((()=>n.e(6753).then(n.bind(n,26753))),{loadableGenerated:{webpack:()=>[26753]}});var Ae=(0,s.memo)((e=>{let{allowMovingDraggableEntries:t,hideFolders:i,hideLoading:o,hideScrolling:c,hideShortcutIcons:l,id:u,isDesktop:d,isStartMenu:m,loadIconsImmediately:b,preloadShortcuts:f,readOnly:g,showStatusBar:p,skipFsWatcher:v,skipSorting:w,url:A,view:E}=e;const[x,S]=(0,s.useState)(A),[$,F]=(0,s.useState)(""),[M,L]=(0,s.useState)(!1),C=(0,s.useRef)(null),{focusedEntries:O,focusableEntry:T,...R}=(e=>{const[t,n]=(0,s.useState)([]),r=(0,s.useCallback)((e=>n(e?t=>t.filter((t=>t!==e)):[])),[]),a=(0,s.useCallback)((e=>n((t=>t.includes(e)?t:[...t,e]))),[]),i=(0,s.useRef)(!1),o=(0,s.useCallback)((t=>{const{relatedTarget:n,target:a}=t,o=e.current===n;o&&i.current?((0,D.nK)(t),a?.focus(y.eS)):(o||e.current?.contains(n))&&n instanceof HTMLElement||r()}),[r,e]),c=(0,s.useCallback)((()=>{i.current=!0,window.requestAnimationFrame((()=>{i.current=!1}))}),[]);return{blurEntry:r,focusEntry:a,focusableEntry:e=>{const n=t.includes(e),i=1===t.length&&t[0]===e;return{className:(0,D.Wy)({"focus-within":n,"only-focused":i}),onBlurCapture:o,onFocusCapture:c,onMouseDown:t=>{let{ctrlKey:i}=t;i?n?r(e):a(e):n||(r(),a(e))}}},focusedEntries:t}})(C),{fileActions:I,files:j,folderActions:P,isLoading:z,updateFiles:W}=(0,oe.Z)(A,F,R,{hideFolders:i,hideLoading:o,preloadShortcuts:f,skipFsWatcher:v,skipSorting:w}),{mountFs:B,rootFs:N,stat:U}=(0,k.o)(),{StyledFileEntry:H,StyledFileManager:K}=h[E],{isSelecting:V,selectionRect:G,selectionStyling:Q,selectionEvents:X}=te(C,O,R),Y=ne(O,R,C,V,t),q=(0,Z.Z)({callback:P.newPath,directory:A,updatePositions:t}),ee=ve(A,P,d),re=!o&&z||A!==x,ae=ie(j,A,O,F,R,P,W,C,u,E),[se,ce]=(0,s.useState)("prompt"),le=(0,s.useRef)(!1),ue=(0,s.useMemo)((()=>""===$?ae():void 0),[ae,$]);return(0,s.useEffect)((()=>{le.current||"granted"===se||"FileSystemAccess"!==N?.mntMap[x]?.getName()||(le.current=!0,n.e(1953).then(n.bind(n,51953)).then((e=>{let{requestPermission:t}=e;return t(x).then((e=>{const t="granted"===e;e&&!t||(ce("granted"),t&&W())})).catch((e=>{"Permission already granted"===e.message&&ce("granted")})).finally((()=>{le.current=!1}))})))}),[x,se,N?.mntMap,W]),(0,s.useEffect)((()=>{!M&&y.my.has((0,D.RT)(A))&&(async()=>{(await U(A)).isDirectory()||L((e=>(e||B(A).then((()=>setTimeout(W,100))).catch((()=>{})),!0)))})()}),[B,M,U,W,A]),(0,s.useEffect)((()=>{A!==x&&(P.resetFiles(),S(A),ce("denied"))}),[x,P,A]),(0,s.useEffect)((()=>{re||d||m||C.current?.focus(y.eS)}),[d,m,re]),(0,r.jsxs)(r.Fragment,{children:[re?(0,r.jsx)(ye,{}):(0,r.jsxs)(K,{ref:C,$scrollable:!c,onKeyDown:ue,...g?{onContextMenu:D.nK}:{$selecting:V,...q,...ee,...X},...y.LL,children:[V&&(0,r.jsx)(J,{style:Q}),Object.keys(j).map((e=>(0,r.jsx)(H,{$selecting:V,$visible:!z,...!g&&Y(A,e,$===e),...""===$&&{onKeyDown:ae(e)},...T(e),children:(0,r.jsx)(_,{fileActions:I,fileManagerId:u,fileManagerRef:C,focusFunctions:R,focusedEntries:O,hasNewFolderIcon:m,hideShortcutIcon:l,isHeading:d&&j[e].systemShortcut,isLoadingFileManager:z,loadIconImmediately:b,name:(0,a.basename)(e,y.zm),path:(0,a.join)(A,e),readOnly:g,renaming:$===e,selectionRect:G,setRenaming:F,stats:j[e],view:E})},e)))]}),p&&(0,r.jsx)(we,{count:re?0:Object.keys(j).length,directory:A,fileDrop:q,selected:O})]})}))},55785:function(e,t,n){var r=n(1864),a=n(67294),i=n(62727),o=n(6529),s=n(42151),c=n(26724),l=n(56758),u=n(62065),d=n(64358),m=n(34254);t.Z=e=>{let{callback:t,directory:n=d.Ll,id:b,onDragLeave:f,onDragOver:g,updatePositions:p}=e;const{url:h}=(0,l.z)(),{iconPositions:v,sortOrders:w,setIconPositions:y}=(0,u.k)(),{mkdirRecursive:A,updateFolder:E,writeFile:k}=(0,c.o)(),x=(0,a.useCallback)((async(e,t,n)=>{if(b)if(t){const a=(0,r.join)(d.Ll,e);if(await A(d.Ll),await k(a,t,!0))return n===s.v.UPDATE_URL&&h(b,a),E(d.Ll,e),(0,r.basename)(a)}else n===s.v.UPDATE_URL&&h(b,e);return""}),[b,A,E,h,k]),{openTransferDialog:S}=(0,i.Z)();return{onDragLeave:f,onDragOver:e=>{g?.(e),(0,m.nK)(e)},onDrop:e=>{if(!d.my.has((0,m.RT)(n))){if(p&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,o.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let s=[];if(a){try{s=JSON.parse(a)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(n)&&(0,r.basename)(e)===(0,r.relative)(n,e))return;s=s.map((e=>(0,r.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!v[`${n}/${e}`])return e;let t=0,a="";do{t+=1,a=`${n}/${(0,r.basename)(e,(0,r.extname)(e))} (${t})${(0,r.extname)(e)}`}while(v[a]);return(0,r.basename)(a)})),(0,m.vi)(n,e.target,v,w,i,s,y)}(0,o.WG)(e,t||x,n,S,Boolean(b))}}}}},62392:function(e,t,n){const r=n(10508).ZP.li.withConfig({componentId:"sc-73c659b1-0"})`
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
`;t.Z=r},35778:function(e,t,n){var r=n(67294),a=n(64358);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=(0,r.useRef)(),i=(0,r.useRef)(0),o=(0,r.useCallback)((r=>{const o=()=>{r.stopPropagation(),e(r)},s=()=>{n.current&&(clearTimeout(n.current),n.current=void 0)},c=()=>{i.current>=5&&s(),void 0===n.current?(r.target.removeEventListener("pointermove",c),i.current=0):i.current+=1};t?o():void 0===n.current?(n.current=window.setTimeout(s,a.jx.DOUBLE_CLICK),r.target.addEventListener("pointermove",c,{passive:!0})):(s(),o())}),[e,t]);return{onClick:o}}},21638:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);const a=()=>{const[e,t]=(0,r.useState)(),n=(0,r.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;let e;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,r.useEffect)((()=>{n()}),[n]),e}},38060:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(10508);var a=n(64358);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return r.iv`
  overflow: auto;
  scrollbar-color: ${i[o].thumb} ${i[o].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[o].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[o].buttonHover};
    }

    &:active {
      background-color: ${i[o].active};
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
    background-blend-mode: ${i[o].blendMode};
  }
`}},23988:function(e,t,n){n.d(t,{G:function(){return r}});const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e&&(e.addEventListener("mouseleave",(()=>e.removeAttribute("style")),{passive:!0}),e.addEventListener("mousemove",(r=>{let{clientX:a,clientY:i,target:o}=r;if(e.contains(o)){const{left:r,top:o}=e.getBoundingClientRect(),s=a-r,c=i-o;Object.assign(e.style,{background:t?void 0:`radial-gradient(circle at ${s}px ${c}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,borderImage:`radial-gradient(20% 75% at ${s}px ${c}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / ${n}px / 0px stretch`})}}),{passive:!0}))}}}]);