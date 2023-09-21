"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7890],{57637:function(e,A,i){var r=i(71183);const t=(0,i(10508).ZP)(r.m.li).withConfig({componentId:"sc-59a85c77-0"})`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.maxWidth}};

  &::before {
    background-color: ${e=>{let{$foreground:A,$progress:i,theme:r}=e;return A?i&&i>0&&i<100?r.colors.taskbar.foregroundProgress:r.colors.taskbar.foreground:""}};
    background-image: ${e=>{let{$progress:A,theme:i}=e;return A&&A>0&&A<100?`linear-gradient(to right, ${i.colors.progressBackground} 0% ${A}%, transparent ${A}% 100%)`:""}};
    border-bottom: ${e=>{let{$progress:A,theme:i}=e;return`\n        ${i.sizes.taskbar.entry.borderSize} solid ${A&&A>0&&A<100?i.colors.progress:i.colors.highlight}\n      `}};
    bottom: 0;
    content: "";
    height: ${e=>{let{$foreground:A}=e;return A?"100%":0}};
    margin: ${e=>{let{$foreground:A}=e;return A?"":"0 4px"}};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${e=>{let{$foreground:A}=e;return A?"all":"width"}};
    width: ${e=>{let{$foreground:A}=e;return A?"100%":"calc(100% - 8px)"}};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:i}=e;return A?i.colors.taskbar.foregroundHover:i.colors.taskbar.hover}};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${e=>{let{$foreground:A,theme:i}=e;return A?i.colors.taskbar.activeForeground:i.colors.taskbar.active}};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-bottom: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.borderSize}};
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${e=>{let{theme:A}=e;return A.colors.text}};
      font-size: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.fontSize}};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    picture {
      height: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
      position: relative;
      top: 1px;
      width: ${e=>{let{theme:A}=e;return A.sizes.taskbar.entry.iconSize}};
    }
  }

  > div {
    align-items: center;
    display: flex;

    figure {
      width: 100%;
    }
  }
`;A.Z=t},7890:function(e,A,i){i.r(A),i.d(A,{default:function(){return C}});var r=i(85893),t=i(51526),n=i(5152),o=i.n(n),a=i(67294),s=i(57637),l=i(10508),g=i(64358);var c=()=>{const{sizes:{taskbar:e}}=(0,l.Fg)();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:g.Nb.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},d=i(13645),u=i(52625),m=i(56758),h=i(62065),p=i(30663),b=i(42362),f=i(34254);const k=o()((()=>i.e(9075).then(i.bind(i,19075))),{loadableGenerated:{webpack:()=>[19075]}}),z=e=>{let{icon:A,id:i,title:n}=e;const o=(0,u.Z)(i),{foregroundId:l,setForegroundId:z}=(0,h.k)(),C=i===l,{linkElement:E,minimize:x,processes:{[i]:B}}=(0,m.z)(),{minimized:M,progress:$}=B||{},w=(0,a.useCallback)((e=>e&&E(i,"taskbarEntry",e)),[i,E]),[v,Q]=(0,a.useState)(!1),R=()=>Q(!1),S=(0,a.useMemo)((()=>(0,f.G6)()?g.Yj:{}),[]);return(0,r.jsxs)(s.Z,{$foreground:C,$progress:$,onClick:R,onMouseEnter:()=>Q(!0),onMouseLeave:R,...c(),...(0,d.Z)(i),children:[(0,r.jsx)(t.M,{initial:!1,presenceAffectsLayout:!1,children:v&&(0,r.jsx)(k,{id:i})}),(0,r.jsx)(p.Z,{ref:w,onClick:()=>{(M||C)&&x(i),z(C?o:i)},...S,...(0,f.PS)(n),children:(0,r.jsxs)("figure",{children:[(0,r.jsx)(b.Z,{alt:n,imgSize:16,src:A}),(0,r.jsx)("figcaption",{children:n})]})})]})};var C=(0,a.memo)(z)},13645:function(e,A,i){i.d(A,{Z:function(){return l}});var r=i(67294);const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAMElEQVR4AWMgEoyC2TCAwsYPFqMCouzZCQPEOmzvnj0QRJTqo6iAgOoLMIDCHsYAACjTO7/gCQlBAAAAAElFTkSuQmCC";var n=i(25420),o=i(54314),a=i(56758),s=i(64358);var l=e=>{const{contextMenu:A}=(0,o.H)(),{onClose:i,onMaximize:l,onMinimize:g}=(0,n.Z)(e),{processes:{[e]:c}}=(0,a.z)(),{allowResizing:d=!0,hideMaximizeButton:u,hideMinimizeButton:m,maximized:h,minimized:p}=c||{};return(0,r.useMemo)((()=>A?.((()=>{const e=h||p,A=!u||!m;return[A&&{action:p?g:l,disabled:!e,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAAAOklEQVR4AWMYVmA2BiBN/6JFi3DKrcUAEEGcGnZiAIggTg1HwQCNDSSpp+H8hQtoiECAXMcADMMbAABMtF75qvi0qwAAAABJRU5ErkJggg==":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJElEQVR42mNABaPA09PzPzZMsaFk20x/A2D8gTIAE9Mp+kYBAJPzT5+OMe9rAAAAAElFTkSuQmCC",label:"Restore"},!m&&{action:g,disabled:p,icon:p?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVR42mMYPGAUjAJPT8//+DCNDRgFAPTaHaFVv24VAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAIUlEQVR42mMYPGAUjIIDBw78x4cJGnDu3Ln/+DB+3aMAAPFzNUFuAVJEAAAAAElFTkSuQmCC",label:"Minimize"},!u&&{action:l,disabled:e||!d,icon:e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mOgEhgFnp6e//Fh+hmALj5UDBj4QBwFANQKUXn4YyGJAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVR42u3IoRHAMAzFUO+/gllKG5IgD2DujX4vC8ikMO9ORHb9xN1FWWc8Q5R15jt1gs/22jrBZxGhE3yWmaKsU1Wi7EIfHneIsXEKuhAAAAAASUVORK5CYII=",label:"Maximize"},A&&s.Os,{action:i,icon:t,label:"Close"}].filter(Boolean)}))),[d,A,u,m,h,p,i,l,g])}},25420:function(e,A,i){var r=i(67294),t=i(52625),n=i(56758),o=i(62065);A.Z=e=>{const A=(0,t.Z)(e),{setForegroundId:i,removeFromStack:a}=(0,o.k)(),{closeWithTransition:s,maximize:l,minimize:g}=(0,n.z)();return{onClose:(0,r.useCallback)((()=>{a(e),s(e),i(A)}),[s,e,A,a,i]),onMaximize:()=>l(e),onMinimize:()=>{g(e),i(A)}}}},52625:function(e,A,i){var r=i(56758),t=i(62065);A.Z=e=>{const{stackOrder:A=[]}=(0,t.k)(),{processes:i}=(0,r.z)();return A.find((A=>A!==e&&!i?.[A]?.minimized))||""}}}]);