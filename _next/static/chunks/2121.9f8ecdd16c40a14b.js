"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2121,5062,76],{94486:function(e,t,r){r.d(t,{P:function(){return o},w:function(){return n}});const n={0:{name:"Black",rgb:[12,12,12]},1:{name:"Blue",rgb:[0,55,218]},2:{name:"Green",rgb:[19,161,14]},3:{name:"Aqua",rgb:[58,150,221]},4:{name:"Red",rgb:[197,15,31]},5:{name:"Purple",rgb:[136,23,152]},6:{name:"Yellow",rgb:[193,156,0]},7:{name:"White",rgb:[204,204,204]},8:{name:"Gray",rgb:[118,118,118]},9:{name:"Light Blue",rgb:[59,120,255]},A:{name:"Light Green",rgb:[22,198,12]},B:{name:"Light Aqua",rgb:[97,214,214]},C:{name:"Light Red",rgb:[231,72,86]},D:{name:"Light Purple",rgb:[180,0,158]},E:{name:"Light Yellow",rgb:[249,241,165]},F:{name:"Bright White",rgb:[242,242,242]}},o=function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return`\x1b[${n?"48":"38"};2;${e};${t};${r}m`}},52121:function(e,t,r){r.d(t,{$4:function(){return m},CN:function(){return c},JF:function(){return h},R_:function(){return l},hR:function(){return w},j3:function(){return p},j5:function(){return f},lO:function(){return g},vR:function(){return y},xy:function(){return d}});var n=r(94486),o=r(67900),i=r(72942),a=r(25804),s=r(64358);const l=(e,t,r)=>{Object.entries(t).forEach((t=>{let[r,n]=t;e?.println(`${r.padEnd(14)} ${n}`)})),r&&(e?.println("\r\nAliases:\r\n"),Object.entries(r).forEach((r=>{let[n,o]=r;o.forEach((r=>{e?.println(`${r.padEnd(14)} ${t[n]}`)}))})))},c={cd:"Changes the current directory.",clear:"Clears the screen.",color:"Specifies color attribute of console output.",copy:"Copies a file to another location.",date:"Displays the date.",del:"Deletes a file.",dir:"Displays list of entries in current directory.",echo:"Displays messages that are passed to it.",exit:"Quits the command interpreter.",ffmpeg:"Convert audio or video file to another format.",file:"Detects the MIME type of the file.",find:"Searches for a text string in a file or files.",git:"Read from git repositories.",help:"Provides Help information for commands.",history:"Displays command history list.",imagemagick:"Convert an image file to another format.",ipconfig:"Displays current IP.",license:"Displays license.",md:"Creates a directory.",mount:"Mounts a local file system directory.",move:"Moves file or directory.",neofetch:"Displays system information.",pwd:"Prints the working directory.",python:"Run code through Python interpreter.",rd:"Removes a directory.",ren:"Renames a file or directory.",rm:"Removes a file or directory.",sheep:"Spawn a new sheep",shutdown:"Allows proper local shutdown of machine.",taskkill:"Kill or stop a running process or application.",tasklist:"Displays all currently running processes.",time:"Displays the system time.",title:"Sets the window title for the command interpreter.",touch:"Create empty file.",type:"Displays the contents of a file.",uptime:"Display the current uptime of the local system.",ver:"Displays the system version.",wapm:"Run universal Wasm binaries.",weather:"Weather forecast service",whoami:"Displays user information.",xlsx:"Convert a spreadsheet file to another format."},p={cd:["chdir"],clear:["cls"],copy:["cp"],del:["erase"],dir:["ls"],exit:["quit"],find:["search"],git:["isogit"],ipconfig:["ifconfig","whatsmyip"],md:["mkdir"],move:["mv"],neofetch:["systeminfo"],python:["py"],rd:["rmdir"],ren:["rename"],sheep:["esheep"],shutdown:["logout","restart"],taskkill:["kill"],tasklist:["ps"],type:["cat"],ver:["version"],wapm:["wax"],weather:["wttr"]},u=new Set(["cat","cd","chdir","copy","cp","del","dir","erase","ffmpeg","file","imagemagick","ls","md","mkdir","move","mv","py","python","rd","ren","rename","rm","rmdir","touch","type","vim","xlsx"]),d=e=>`'${e}' is not recognized as an internal or external command, operable program or batch file.`,h=(e,t)=>{const{_autocompleteHandlers:r}=t;r.forEach((e=>{let{fn:r}=e;return t.removeAutocompleteHandler(r)})),t.addAutocompleteHandler(((t,r)=>{let[n]=r;if(0===t)return[...Object.keys(c),...e];if(1===t){const t=n.toLowerCase();if("git"===t)return Object.keys(o.C);if(u.has(t))return e;if(Object.keys(a.Z).map((e=>e.toLowerCase())).includes(t)||Object.keys(i.resourceAliasMap).includes(t))return e}return[]}))},m=e=>{let t=!1,r="";const n=e=>{r&&e.push(r),r=""},o=[...e].reduce(((e,o)=>(" "!==o||t?'"'===o?(t=!t,t||n(e)):r+=o:n(e),e)),[]);return r?[...o,r]:o},f=function(e,t,r,n){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"=";if(!n){const t=e.map((e=>{let[t,r]=e;return t.padEnd(r," ")})).join(" "),n=e.map((e=>{let[,t]=e;return o.repeat(t)})).join(" ");r?.println(t),r?.println(n)}const i=t.map((t=>t.map(((r,n)=>{const[,o,i,a]=e[n];let s=n===t.length-1?r:r.slice(0,o);return a&&(s=a(s)),i?s.padStart(o," "):s.padEnd(o," ")})).join(" ")));i.length>0&&i.forEach((e=>r?.println(e)))},g=async()=>{const{quota:e=0,usage:t=0}=await(navigator.storage?.estimate?.())||{};return 0===e?"":`  ${(e-t).toLocaleString()} bytes`},w=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(window.performance){const[{duration:t}]=window.performance.getEntriesByType("navigation"),r=window.performance.timeOrigin+t,n=Math.ceil(Date.now()-r),o=Math.floor(n/s.y8),i=new Date(n),a=i.getUTCHours(),l=i.getUTCMinutes(),c=i.getUTCSeconds();return[...o?[`${o} day${1===o?"":"s"}`]:[],...a?[`${a} hour${1===a?"":"s"}`]:[],...l?[`${l} ${e?"min":"minute"}${1===l?"":"s"}`]:[],...c?[`${c} ${e?"sec":"second"}${1===c?"":"s"}`]:[]].join(", ")}return"Unknown"},y=(e,t)=>`${(0,n.P)(...n.w[e].rgb,!0)}${(0,n.P)(...n.w[e].rgb)}|||${t?.join("")||`${(0,n.P)(...n.w[0].rgb,!0)}${(0,n.P)(...n.w[7].rgb)}`}\x1b[0m`},67900:function(e,t,r){r.d(t,{C:function(){return a}});var n=r(1864),o=r(52121);const i=new Set(["checkout","clone","fetch","init","merge","pull"]),a={add:"Add a file to the git index (aka staging area)",branch:"Create a branch",checkout:"Checkout a branch",clone:"Clone a repository",commit:"Create a new commit",fetch:"Fetch commits from a remote repository",init:"Initialize a new repository",log:"Get commit descriptions from the git history",merge:"Merge two branches",pull:"Fetch and merge commits from a remote repository",push:"Push a branch or tag",status:"Tell whether a file has been changed",tag:"Create a lightweight tag",version:"Return the version number of isomorphic-git"};t.Z=async(e,t,s,l,c)=>{let[p,...u]=e;const d=await Promise.all([r.e(8375),r.e(1049)]).then(r.bind(r,10764));if(p in d){const e=await r.e(246).then(r.bind(r,80246)),{default:o}=await r.e(6562).then(r.t.bind(r,96562,23)),{username:a,password:m,...f}=o(u),g=()=>({password:m,username:a}),w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s.println(`remote: ${e.trim()}`)},y=[],b=e=>{let{phase:t}=e;y[y.length-1]!==t&&(s.println(t),y.push(t))},x={...f,corsProxy:"https://cors.isomorphic-git.org",dir:t,fs:l,http:e,onAuth:g,onMessage:w,onProgress:b};if("clone"===p){if(!x.url&&f._&&Array.isArray(f._)&&1===f._.length){const[e]=f._;x.url=e}const e=x.url?.split("/").pop()?.replace(/\.git$/,"")||"";e&&(s.println(`Cloning into '${e}'...`),x.dir=(0,n.join)(t,e))}try{const e=await(d[p]?.(x));"string"===typeof e&&s.println(e)}catch(h){s.println(h.message)}i.has(p)&&c(t)}else(0,o.R_)(s,a)}},72942:function(e,t,r){r.r(t),r.d(t,{default:function(){return P},resourceAliasMap:function(){return v}});var n=r(85893),o=r(1864),i=r(67294),a=r(52121),s=r(10508),l=r(8686);var c=s.ZP.div.withConfig({componentId:"sc-dd60a1ac-0"})`
  background-color: #fff;
  border: 1px solid rgb(240, 240, 240);
  font-size: 12px;

  figure {
    display: flex;
    flex-direction: row;
    padding: 20px 11px 14px;

    figcaption {
      line-height: 15px;
      margin-bottom: 4px;
    }

    img {
      height: 32px;
      margin-right: 19px;
      width: 32px;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    label {
      margin-top: 3px;
      padding: 0 11px;
    }

    div {
      position: relative;
      width: 100%;

      input,
      select {
        border: 1px solid rgb(122, 122, 122);
        border-radius: 0;
        font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
        font-size: 12px;
        height: 23px;
        line-height: 16px;
        margin: 0 13px 21px 8px;
        padding-bottom: 2px;
        padding-left: 5px;
        width: 100%;
      }

      select {
        background-color: #fff;
        clip-path: inset(0 0 0 calc(100% - 20px));
        position: absolute;
        width: calc(100% - 21px);

        &:disabled {
          border: 1px solid rgb(122, 122, 122);
          opacity: 100%;
        }
      }

      input {
        border-right: 0;
        margin-right: 33px;

        &:focus {
          border: 1px solid rgb(0, 120, 215);
          border-right: 0;

          + select {
            border-color: rgb(0, 120, 215);
          }
        }
      }
    }
  }

  nav {
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: row;
    height: 100%;

    ${l.Z} {
      height: 24px;
      margin-top: 19px;
      position: absolute;
      right: 12px;
      width: 86px;

      &:first-child {
        right: 107px;
      }
    }
  }
`,p=r(87426),u=r(55785),d=r(26724),h=r(56758),m=r(25804),f=r(62065),g=r(64358),w=r(34254),y=r(95062),b=r(90076);const x="open",v={cmd:"Terminal",code:"MonacoEditor",dos:"JSDOS",explorer:"FileExplorer",monaco:"MonacoEditor",mspaint:"Paint",vlc:"VideoPlayer"},k=`Type the name of a program, folder, document, or Internet resource, and ${g.PACKAGE_DATA.alias} will open it for you.`,$=e=>alert(`Cannot find '${e}'. Make sure you typed the name correctly, and then try again.`),C={esheep:b.default,sheep:b.default};var P=e=>{let{id:t}=e;const{open:r,closeWithTransition:s,processes:{Run:b}={}}=(0,h.z)(),{createPath:P,exists:S,readFile:j,stat:L,updateFolder:D}=(0,d.o)(),{foregroundId:E,runHistory:F,setRunHistory:R}=(0,f.k)(),_=(0,i.useRef)(null),[A,M]=(0,i.useState)(!0),[T,I]=(0,i.useState)(!F[0]),[O,B]=(0,i.useState)(!1),z=(0,i.useCallback)((async e=>{if(!e)return;B(!0);const n=()=>R((t=>t[0]===e?t:[e,...t])),[i,...l]=(0,a.$4)(e);let c=e,u=!0;const d=await S(c);d||(c=l.length>0?l.join(" "):i);const h=c.startsWith("nostr:");h&&r("Messenger",{url:c});const f=c.startsWith("ipfs://");if(d||h||f||await S(c)){if(f)try{const e=await(0,y.getIpfsResource)(c);c=(0,o.join)(g.Ll,await P(await(0,y.getIpfsFileName)(c,e),g.Ll,e)),D(g.Ll,(0,o.basename)(c))}catch{}if((await L(c)).isDirectory())r("FileExplorer",{url:c},""),n();else if(i&&l.length>0&&c!==e){const e=Object.keys(m.Z).find((e=>e.toLowerCase()===i.toLowerCase()));e?(r(e,{url:"Browser"===e&&f?l.join(" "):c}),n()):($(i),u=!1)}else{const t=(0,w.RT)(c);if(t===g.zm){const{pid:e,url:t}=(0,p.OE)(await j(c));e&&r(e,{url:t})}else{const n=(0,p.Wd)(t);n&&r(n,{url:"Browser"===n&&f?e:c})}n()}}else{const t=Object.keys(m.Z).find((e=>e.toLowerCase()===(v[c.toLowerCase()]||c).toLowerCase()));t?(r(t),n()):C[e.toLowerCase()]?(C[e.toLowerCase()](),n()):($(e),u=!1)}B(!1),u&&s(t)}),[s,P,S,t,r,j,R,L,D]);return(0,i.useLayoutEffect)((()=>{E===t&&(_.current?.focus(g.eS),_.current?.value&&_.current?.select())}),[E,t]),(0,i.useLayoutEffect)((()=>{b?.url&&_.current&&(_.current.value=`${_.current.value.trimEnd()} ${b.url}`.trim(),I(!1))}),[b?.url]),(0,n.jsxs)(c,{...(0,u.Z)({id:t}),onContextMenu:e=>{e.target instanceof HTMLInputElement||(0,w.nK)(e)},children:[(0,n.jsxs)("figure",{children:[(0,n.jsx)("img",{alt:"Run",src:"/System/Icons/32x32/run.webp"}),(0,n.jsx)("figcaption",{children:k})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{htmlFor:x,children:"Open:"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{ref:_,autoComplete:"off",defaultValue:F[0],disabled:O,enterKeyHint:"go",id:x,onBlurCapture:e=>{let{relatedTarget:t}=e;!b?.componentWindow||b.componentWindow.contains(t)?_.current?.focus(g.eS):M(!1)},onFocusCapture:()=>M(!0),onKeyDownCapture:e=>{const{key:r}=e;"Enter"===r&&z(_.current?.value.trim()),"Escape"===r&&((0,w.nK)(e),s(t))},onKeyUp:e=>{let{target:t}=e;return I(!t?.value)},spellCheck:"false",type:"text"}),(0,n.jsx)("select",{disabled:0===F.length,onChange:e=>{let{target:t}=e;_.current&&(_.current.value=t.value,I(!1))},onClick:e=>{let{target:t}=e;t instanceof HTMLSelectElement&&-1!==t.selectedIndex&&(t.selectedIndex=-1)},children:F.map(((e,t)=>(0,n.jsx)("option",{value:e,children:e},`${e}-${t}`)))})]})]}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(l.Z,{className:A?"focus":"",disabled:T||O,onClick:()=>z(_.current?.value.trim()),children:"OK"}),(0,n.jsx)(l.Z,{disabled:O,onClick:()=>s(t),children:"Cancel"})]})]})}},8686:function(e,t,r){const n=r(10508).ZP.button.withConfig({componentId:"sc-59a750f5-0"})`
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
`;t.Z=n},55785:function(e,t,r){var n=r(1864),o=r(67294),i=r(62727),a=r(6529),s=r(42151),l=r(26724),c=r(56758),p=r(62065),u=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=u.Ll,id:h,onDragLeave:m,onDragOver:f,updatePositions:g}=e;const{url:w}=(0,c.z)(),{iconPositions:y,sortOrders:b,setIconPositions:x}=(0,p.k)(),{mkdirRecursive:v,updateFolder:k,writeFile:$}=(0,l.o)(),C=(0,o.useCallback)((async(e,t,r)=>{if(h)if(t){const o=(0,n.join)(u.Ll,e);if(await v(u.Ll),await $(o,t,!0))return r===s.v.UPDATE_URL&&w(h,o),k(u.Ll,e),(0,n.basename)(o)}else r===s.v.UPDATE_URL&&w(h,e);return""}),[h,v,k,w,$]),{openTransferDialog:P}=(0,i.Z)();return{onDragLeave:m,onDragOver:e=>{f?.(e),(0,d.nK)(e)},onDrop:e=>{if(!u.my.has((0,d.RT)(r))){if(g&&e.target instanceof HTMLElement){const{files:t,text:o}=(0,a.p4)(e);if(0===t.length&&""===o)return;const i={x:e.clientX,y:e.clientY};let s=[];if(o){try{s=JSON.parse(o)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(r)&&(0,n.basename)(e)===(0,n.relative)(r,e))return;s=s.map((e=>(0,n.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!y[`${r}/${e}`])return e;let t=0,o="";do{t+=1,o=`${r}/${(0,n.basename)(e,(0,n.extname)(e))} (${t})${(0,n.extname)(e)}`}while(y[o]);return(0,n.basename)(o)})),(0,d.vi)(r,e.target,y,b,i,s,x)}(0,a.WG)(e,t||C,r,P,Boolean(h))}}}}},95062:function(e,t,r){r.d(t,{getIpfsFileName:function(){return l},getIpfsGatewayUrl:function(){return s},getIpfsResource:function(){return c}});var n=r(64358),o=r(48764).Buffer;let i="";const a=e=>new Promise((t=>{const r=window.setTimeout((()=>t(!1)),n.i2),o=new Image;o.addEventListener("load",(()=>{window.clearTimeout(r),t(!0)}),n.K7),o.addEventListener("error",(()=>{window.clearTimeout(r),t(!1)}),n.K7),o.src=`${e.replace("<CID>","bafybeibwzifw52ttrkqlikfzext5akxu7lz4xiwjgwzmqcpdzmp3n5vnbe")}?now=${Date.now()}&filename=1x1.png#x-ipfs-companion-no-redirect`})),s=async(e,t)=>{if(!i||t){const e=t?n.i6.filter((e=>e!==i)):n.i6;for(const t of e)if(await a(t)){i=t;break}if(!i)return""}const{pathname:o,protocol:s,search:l}=new URL(e);if("ipfs:"!==s)return"";const[c="",...p]=o.split("/").filter(Boolean),{CID:u}=await r.e(8060).then(r.bind(r,19152));return`${i.replace("<CID>",u.parse(c).toV1().toString())}${p.join("/")}${l}`},l=async(e,t)=>{const{pathname:n,searchParams:o}=new URL(e),i=o.get("filename");if(i)return i;const{fileTypeFromBuffer:a}=await Promise.all([r.e(8090),r.e(4588),r.e(3301)]).then(r.bind(r,74588)),{ext:s=""}=await a(t)||{};return`${n.split("/").filter(Boolean).join("_")}${s?`.${s}`:""}`},c=async e=>{let t;const r={...n.P8,cache:"no-cache",credentials:"omit",keepalive:!1,mode:"cors",referrerPolicy:"no-referrer",window:null};try{t=await fetch(await s(e),r)}catch(i){"Failed to fetch"===i.message&&(t=await fetch(await s(e,!0),r))}return t instanceof Response?o.from(await t.arrayBuffer()):o.from("")}},90076:function(e,t,r){var n=r(34254);const o={blue_sheep:["/Program Files/eSheep/blue_sheep.xml",12],eSheep:["/Program Files/eSheep/eSheep.xml",12],fox:["/Program Files/eSheep/fox.xml",4],green_sheep:["/Program Files/eSheep/green_sheep.xml",12],mimiko:["/Program Files/eSheep/mimiko.xml",4],neko:["/Program Files/eSheep/neko.xml",10],orange_sheep:["/Program Files/eSheep/orange_sheep.xml",12],pingus:["/Program Files/eSheep/pingus.xml",10],red_sheep:["/Program Files/eSheep/red_sheep.xml",12],yellow_sheep:["/Program Files/eSheep/yellow_sheep.xml",12]};let i=!1;t.default=()=>(0,n.mb)(["/Program Files/eSheep/eSheep.js"]).then((()=>{if(window.Sheep){const e=new window.Sheep({allowPopup:"no",collisionsWith:["nav","section"],spawnContainer:document.querySelector("main")});i?e.Start((()=>{const e=Object.keys(o).flatMap((e=>{const[,t]=o[e];return Array.from({length:t}).fill(e)})),t=Math.floor(Math.random()*e.length),[r]=o[e[t]];return r})()):(i=!0,e.Start("/Program Files/eSheep/eSheep.xml"))}}))}}]);