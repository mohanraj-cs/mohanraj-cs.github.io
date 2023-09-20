"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2910],{2910:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var o=t(85893),n=t(10508),i=t(38060),a=t(64358),l=n.ZP.div.withConfig({componentId:"sc-90a781bf-0"})`
  article {
    ${(0,i.Z)(a.BQ,0,0,"light")};
    background-color: #f9f9f9;
    box-sizing: border-box;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    overflow-y: scroll;
    padding: 16px 32px;
    width: 100%;
    word-wrap: break-word;

    * {
      all: revert;
      user-select: text;
    }

    a {
      color: #0366d6;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    header {
      display: flex;
    }

    h1,
    h2 {
      border-bottom: 1px solid #ccc;
      margin: 10px 0;
    }

    h1 {
      font-size: 2em;
      padding: 9px 0;

      header & {
        margin: 0;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 1.5em;
      padding: 7px 0;
    }

    h3 {
      font-size: 1em;
      padding: 5px 0;
    }

    ul {
      line-height: 1.6;
      padding-inline-start: 30px;
    }

    nav {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;

      > ul {
        font-size: 14px;
        list-style-type: none;
        margin: 10px 0;
        padding: 0;
        position: sticky;
        top: 5px;

        > li {
          min-width: 125px;
          padding: 0 15px;

          > ul {
            padding-left: 25px;

            > li {
              font-size: 0.8em;
            }
          }
        }
      }

      .selected {
        color: #111;
        font-weight: 700;

        &:hover {
          text-decoration: none;
        }
      }
    }

    table {
      border: 1px solid #ddd;
      border-collapse: collapse;
      border-spacing: 0;

      td,
      th {
        border: 1px solid #ddd;
        padding: 5px;
      }
    }

    pre {
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
      font-size: 85%;
      line-height: 1.45;
      overflow: auto;
      padding: 16px;
    }

    code:not([class]) {
      background-color: rgba(27, 31, 35, 5%);
      border-radius: 3px;
      font-size: 85%;
      margin: 0;
      padding: 0.2em 0.4em;
    }
  }
`,c=t(1864),d=t(67294),b=t(7459),s=t(26724),g=t(56758),u=t(34254),A=e=>{let{containerRef:r,id:t,loading:o,setLoading:n,url:i}=e;const{readFile:a}=(0,s.o)(),{prependFileToTitle:l}=(0,b.Z)(t),{open:A,processes:{[t]:{libs:p=[]}={}}={}}=(0,g.z)(),k=(0,d.useCallback)((async()=>{const e=await a(i),t=r.current?.querySelector("article");t instanceof HTMLElement&&(t.innerHTML=window.DOMPurify.sanitize(window.marked.parse(e.toString(),{headerIds:!1})),t.querySelectorAll("a").forEach((e=>e.addEventListener("click",(r=>{(0,u.nK)(r),(0,u.yk)(e.href)?A("VideoPlayer",{url:e.href}):window.open(e.href,"_blank","noopener, noreferrer")})))),t.scrollTop=0),l((0,c.basename)(i))}),[r,A,l,a,i]);(0,d.useEffect)((()=>{o&&(0,u.mb)(p).then((()=>{window.marked&&n(!1)}))}),[p,o,n]),(0,d.useEffect)((()=>{!o&&i&&k()}),[k,o,i])},p=t(2742),k=e=>{let{id:r}=e;return(0,o.jsx)(p.Z,{StyledComponent:l,id:r,useHook:A,children:(0,o.jsx)("article",{})})}},2742:function(e,r,t){var o=t(85893),n=t(5152),i=t.n(n),a=t(67294),l=t(56758),c=t(55785);const d=i()((()=>t.e(6753).then(t.bind(t,26753))),{loadableGenerated:{webpack:()=>[26753]}});r.Z=(0,a.memo)((e=>{let{id:r,useHook:t,StyledComponent:n,children:i}=e;const{processes:{[r]:{url:b=""}={}}}=(0,l.z)(),s=(0,a.useRef)(null),[g,u]=(0,a.useState)(!0),A=(0,a.useMemo)((()=>({contain:"strict",visibility:g?"hidden":"visible"})),[g]);return t({containerRef:s,id:r,loading:g,setLoading:u,url:b}),(0,o.jsxs)(o.Fragment,{children:[g&&(0,o.jsx)(d,{}),(0,o.jsx)(n,{ref:s,style:A,...(0,c.Z)({id:r}),children:i})]})}))},55785:function(e,r,t){var o=t(1864),n=t(67294),i=t(62727),a=t(6529),l=t(42151),c=t(26724),d=t(56758),b=t(62065),s=t(64358),g=t(34254);r.Z=e=>{let{callback:r,directory:t=s.Ll,id:u,onDragLeave:A,onDragOver:p,updatePositions:k}=e;const{url:m}=(0,d.z)(),{iconPositions:h,sortOrders:f,setIconPositions:x}=(0,b.k)(),{mkdirRecursive:v,updateFolder:w,writeFile:$}=(0,c.o)(),y=(0,n.useCallback)((async(e,r,t)=>{if(u)if(r){const n=(0,o.join)(s.Ll,e);if(await v(s.Ll),await $(n,r,!0))return t===l.v.UPDATE_URL&&m(u,n),w(s.Ll,e),(0,o.basename)(n)}else t===l.v.UPDATE_URL&&m(u,e);return""}),[u,v,w,m,$]),{openTransferDialog:E}=(0,i.Z)();return{onDragLeave:A,onDragOver:e=>{p?.(e),(0,g.nK)(e)},onDrop:e=>{if(!s.my.has((0,g.RT)(t))){if(k&&e.target instanceof HTMLElement){const{files:r,text:n}=(0,a.p4)(e);if(0===r.length&&""===n)return;const i={x:e.clientX,y:e.clientY};let l=[];if(n){try{l=JSON.parse(n)}catch{}if(!Array.isArray(l))return;const[e]=l;if(!e)return;if(e.startsWith(t)&&(0,o.basename)(e)===(0,o.relative)(t,e))return;l=l.map((e=>(0,o.basename)(e)))}else l=r instanceof FileList?[...r].map((e=>e.name)):[...r].map((e=>e.getAsFile()?.name||"")).filter(Boolean);l=l.map((e=>{if(!h[`${t}/${e}`])return e;let r=0,n="";do{r+=1,n=`${t}/${(0,o.basename)(e,(0,o.extname)(e))} (${r})${(0,o.extname)(e)}`}while(h[n]);return(0,o.basename)(n)})),(0,g.vi)(t,e.target,h,f,i,l,x)}(0,a.WG)(e,r||y,t,E,Boolean(u))}}}}},7459:function(e,r,t){var o=t(67294),n=t(56758),i=t(25804),a=t(64358);r.Z=e=>{const{title:r}=(0,n.z)(),[t]=e.split(a.CC),{title:l}=i.Z[t]||{};return{appendFileToTitle:(0,o.useCallback)(((t,o)=>{const n=t?` - ${t}${o?` ${a.xy}`:""}`:"";r(e,`${l}${n}`)}),[e,l,r]),prependFileToTitle:(0,o.useCallback)(((t,o,n)=>{const i=t?`${o?`${a.xy} `:""}${t}${n?" ":" - "}`:"";r(e,`${i}${l}`)}),[e,l,r])}}},38060:function(e,r,t){t.d(r,{Z:function(){return a}});var o=t(10508);var n=t(64358);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.BQ,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return o.iv`
  overflow: auto;
  scrollbar-color: ${i[a].thumb} ${i[a].track};
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    height: ${e}px;
    width: ${e}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${i[a].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${i[a].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${i[a].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${i[a].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${i[a].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${i[a].track};
    display: block;
    height: ${e?`${e}px`:"initial"};

    &:hover {
      background-color: ${i[a].buttonHover};
    }

    &:active {
      background-color: ${i[a].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${0===r?"center":`${r}px`};
    background-position-y: ${0===t?"center":`${t}px`};
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
    background-blend-mode: ${i[a].blendMode};
  }
`}}}]);