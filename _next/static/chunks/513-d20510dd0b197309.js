"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513,866],{9261:function(n,t,e){e.d(t,{Z:function(){return o}});var i=e(5893),r=e(981);function o(n){let{color:t}=n;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12.4 15.5",children:(0,i.jsxs)(r.E.g,{fill:"none",stroke:t||"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:1.2,children:[(0,i.jsx)(r.E.line,{vectorEffect:"non-scaling-stroke",d:"M6.2 15V1",x1:"6.2",y1:".5",x2:"6.2",y2:"15"}),(0,i.jsx)(r.E.path,{vectorEffect:"non-scaling-stroke",d:"M.5 6.2 6.1.5a.1.1 0 0 1 .2 0l5.6 5.7"})]})})}},866:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var i=e(2729),r=e(5893),o=e(4960),a=e(981),s=e(7294),l=e(508),c=e(8391);function d(){let n=(0,i._)(["\n  width: max-content;\n  min-width: 100%;\n  max-width: 100%;\n  position: absolute;\n  left: 0;\n  pointer-events: none;\n  top: 0;\n"]);return d=function(){return n},n}let h=l.ZP.div.withConfig({componentId:"sc-c042db4f-0"})(d()),u={hidden:{pathLength:0},visible:{pathLength:1,transition:{type:"tween",duration:2}}},p={hidden:{pathLength:0},visible:{pathOffset:[10,0],pathLength:[0,.15,0],transition:{delay:3.5,type:"tween",duration:75.5,repeat:1/0,repeatType:"reverse",ease:"linear"}}},f={hidden:{pathLength:0},visible:{pathOffset:[0,10],pathLength:[0,.15,0],transition:{type:"tween",duration:77.5,repeat:1/0,repeatType:"reverse",ease:"linear"}}},g={hidden:{pathLength:0,pathOffset:1},visible:{pathOffset:[0,10],pathLength:[0,.15,0],transition:{delay:1.5,type:"tween",duration:75,repeat:1/0,ease:"linear",repeatType:"reverse"}}},x={hidden:{pathLength:0},visible:{pathLength:1,transition:{type:"tween",duration:4,ease:"easeInOut"}}};function y(n){let{lines:t=[],circles:e=[]}=n,i=(0,s.useContext)(l.Ni),{width:d}=(0,c.Z)(),y=(0,o.c)(.5);return(0,s.useEffect)(()=>{d&&y.set(.33-1e-4*d)},[y,d]),(0,r.jsx)(h,{children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[d&&t.map((n,t)=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(a.E.path,{variants:p,d:"M0,".concat(n.yLoc-1," l200,").concat(n.slope),stroke:i.primary_slightlydark,style:{strokeWidth:y},strokeDasharray:"0 1",fill:"none"}),(0,r.jsx)(a.E.path,{variants:u,d:"M0,".concat(n.yLoc," l200,").concat(n.slope),stroke:i.primary_slightlydark,style:{strokeWidth:y},strokeDasharray:"0 1",fill:"none"}),(0,r.jsx)(a.E.path,{variants:f,d:"M0,".concat(n.yLoc+1," l200,").concat(n.slope),stroke:i.primary_slightlydark,style:{strokeWidth:y},strokeDasharray:"0 1",fill:"none"})]},n.yLoc+"_frag_"+t)),d&&e.map((n,t)=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(a.E.circle,{cx:n.cx,cy:n.cy,r:550*n.r-n.r*(.115*d)-1.5+2e-4*d,variants:g,fill:"none",style:{strokeWidth:y},stroke:i.primary_slightlydark,strokeDasharray:"0 1"}),(0,r.jsx)(a.E.circle,{cx:n.cx,cy:n.cy,r:550*n.r-n.r*(.115*d),fill:"none",variants:x,style:{strokeWidth:y},stroke:i.primary_slightlydark,strokeDasharray:"0 1"})]},n.cx+"_circlefrag_"+t))]})})}},3337:function(n,t,e){e.d(t,{Z:function(){return m}});var i=e(2729),r=e(5893),o=e(508),a=e(981),s=e(4960),l=e(6523),c=e(4368),d=e(4213),h=e(9261),u=e(1163),p=e(7294);function f(){let n=(0,i._)(["\n  width: 12vw;\n  max-width: ",";\n  height: max-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 8px 8px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"]);return f=function(){return n},n}function g(){let n=(0,i._)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n  border-radius: 5px;\n"]);return g=function(){return n},n}let x=(0,o.ZP)(a.E.button).withConfig({componentId:"sc-8f014a19-0"})(f(),n=>n.$width+"px"),y=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-8f014a19-1"})(g());function m(n){let{width:t=70,id:e="generic",variants:i}=n,a=(0,p.useContext)(o.Ni),f=(0,s.c)(0),g=(0,u.useRouter)(),m=(0,l.H)([a.primary_dark,a.primary_mediumdark,f],n=>{let[t,e,i]=n;return(0,c.v)(i,[0,1],[t,e])}),v=(0,l.H)(f,[0,1],[1,1.07]),w=(0,l.H)(f,[0,1],[0,-20]),j=(0,l.H)(f,[0,1],["0%","100%"]),k=()=>{(0,d.j)(f,0,{duration:.3,type:"tween"})},b=()=>{(0,d.j)(f,1,{duration:.3,type:"tween"})};return(0,r.jsxs)(x,{$width:t,onHoverStart:()=>b(f),onHoverEnd:()=>k(f),onFocus:()=>b(f),onBlur:()=>k(f),onClick:()=>g.back(),style:{rotate:-90,scale:v,x:w},layoutId:"".concat(e,"_backArrow"),variants:i,children:[(0,r.jsx)(y,{style:{height:j,originX:0,originY:0}}),(0,r.jsx)(h.Z,{color:m})]})}},9710:function(n,t,e){e.d(t,{Z:function(){return d}});var i=e(2729),r=e(5893),o=e(981),a=e(7294),s=e(508);function l(){let n=(0,i._)(["\n  width: 100%;\n  height: 100%;\n"]);return l=function(){return n},n}let c=(0,s.ZP)(o.E.div).withConfig({componentId:"sc-6c2ba9ce-0"})(l());function d(n){let{color:t,variants:e={}}=n,i=(0,a.useContext)(s.Ni);return(0,r.jsx)(c,{variants:e,children:(0,r.jsx)(o.E.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 311.3 311.3",height:"100%",width:"100%",children:(0,r.jsxs)(o.E.g,{fill:t||i.primary_verydark,children:[(0,r.jsx)("path",{d:"M157.9 79.5a6.5 6.5 0 0 0-.7-4.7 7.2 7.2 0 0 0-.8-1.2L122 37.3a13.6 13.6 0 0 0-9.8-4.2H61a13.6 13.6 0 0 0-12.5 8.3l-34.2 81a13.5 13.5 0 0 0 3 14.8L54 174a13.5 13.5 0 0 0 9.6 4h25.7a13.6 13.6 0 0 0 13.5-13.5v-9.4a13.6 13.6 0 0 0-13.5-13.6H78.8a13.5 13.5 0 0 1-9.6-4l-10.6-10.7a13.5 13.5 0 0 1-3-14.7L69.7 78a13.6 13.6 0 0 1 12.6-8.4h15a13.6 13.6 0 0 1 9.7 4l13 13.1a13.6 13.6 0 0 1 4 9.6v131.4a4.2 4.2 0 0 0 3.8 4.2l6 .6a4.2 4.2 0 0 0 4.6-3.6Z"}),(0,r.jsx)("path",{d:"M153.4 231.8a6.2 6.2 0 0 0 1.5 5.9l34.3 36.3a13.6 13.6 0 0 0 9.8 4.3h51.2a13.6 13.6 0 0 0 12.5-8.3l34.2-81a13.5 13.5 0 0 0-3-14.9l-36.7-36.7a13.6 13.6 0 0 0-9.6-4h-25.7a13.5 13.5 0 0 0-13.5 13.5v9.4a13.6 13.6 0 0 0 13.5 13.6h10.6a13.5 13.5 0 0 1 9.6 4l10.7 10.7a13.5 13.5 0 0 1 3 14.7l-14.2 34.1a13.6 13.6 0 0 1-12.5 8.4h-15.2a13.6 13.6 0 0 1-9.5-4l-13.2-13.2a13.5 13.5 0 0 1-4-9.6V84.8a4.3 4.3 0 0 0-3.8-4.2l-5.8-.6a4.3 4.3 0 0 0-4.7 3.7Z"})]})})})}},7492:function(n,t,e){e.d(t,{Z:function(){return G}});var i=e(2729),r=e(5893),o=e(508),a=e(981),s=e(9710),l=e(1664),c=e.n(l),d=e(4960),h=e(6523),u=e(4368),p=e(4213),f=e(7294);function g(){let n=(0,i._)(["\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 200;\n  position: relative;\n  z-index: 5;\n  &:focus {\n    outline: none;\n  }\n"]);return g=function(){return n},n}function x(){let n=(0,i._)(["\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 200;\n  cursor: pointer;\n  border: none;\n  background: none;\n  position: relative;\n"]);return x=function(){return n},n}let y=(0,o.ZP)(a.E.a).withConfig({componentId:"sc-11bb4c34-0"})(g()),m=(0,o.ZP)(a.E.button).withConfig({componentId:"sc-11bb4c34-1"})(x()),v={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}};function w(n){let{children:t,href:e,name:i,setHoveredLink:a,onClick:s}=n,l=(0,f.useContext)(o.Ni),g=(0,d.c)(0),x=(0,h.H)([l.primary_dark,l.primary_slightlydark,g],n=>{let[t,e,i]=n;return(0,u.v)(i,[0,1],[t,e])}),w=()=>{(0,p.j)(g,0,{duration:.4})},j=()=>{(0,p.j)(g,1,{duration:.4}),a&&a(i)};return e?(0,r.jsx)(c(),{href:e,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(y,{variants:v,style:{color:x},onHoverStart:j,onHoverEnd:w,onFocus:j,onBlur:w,onClick:s,children:t})}):(0,r.jsx)(m,{variants:v,onClick:s,style:{color:x},onHoverStart:j,onHoverEnd:w,onFocus:j,onBlur:w,children:t})}var j=e(2703);function k(){let n=(0,i._)(["\n  border: none;\n  background: none;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 9999;\n  position: relative;\n"]);return k=function(){return n},n}let b=(0,o.ZP)(a.E.button).withConfig({componentId:"sc-8c7abd2a-0"})(k()),C={hidden:{pathLength:0},visible:{pathLength:1,opacity:1,rotate:0,x:0,y:0,transition:{type:"spring",duration:1.1,opacity:{type:"tween",delay:.175,duration:.2}}},open:n=>({rotate:n,opacity:0!==n?1:0,x:-4,y:45===n?2:6,originX:.8,originY:.8,pathLength:1,transition:{type:"spring",duration:1.1,opacity:{type:"tween",duration:.2}}})},E={hidden:{rotate:180,originX:.5,originY:.5},visible:{rotate:0,originX:.5,originY:.5,transition:{type:"spring",duration:1.1}},open:{rotate:90,originX:.5,originY:.5,transition:{type:"spring",duration:1.1}}};var _=function(n){let{open:t=!1,onClick:e}=n,i=(0,f.useContext)(o.Ni),s=(0,d.c)(0),l=(0,h.H)([i.primary_dark,i.primary_slightlydark,s],n=>{let[t,e,i]=n;return(0,u.v)(i,[0,1],[t,e])});return(0,r.jsx)(b,{onClick:e,variants:E,animate:t?"open":"visible",onHoverEnd:()=>{(0,p.j)(s,0,{duration:.4})},onHoverStart:()=>{(0,p.j)(s,1,{duration:.4}),console.log("hover")},children:(0,r.jsxs)(a.E.svg,{fill:"none",stroke:l,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round",role:"img",viewBox:"-2 -2 28 28",children:[(0,r.jsx)("title",{children:"Hamburger Menu"}),(0,r.jsx)(a.E.line,{variants:C,custom:0,x1:"3",y1:"12",x2:"21",y2:"12"}),(0,r.jsx)(a.E.line,{variants:C,custom:-45,x1:"3",y1:"6",x2:"21",y2:"6"}),(0,r.jsx)(a.E.line,{variants:C,custom:45,x1:"3",y1:"18",x2:"21",y2:"18"})]})})};function L(){let n=(0,i._)(["\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n"]);return L=function(){return n},n}function Z(){let n=(0,i._)(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n"]);return Z=function(){return n},n}function I(){let n=(0,i._)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return I=function(){return n},n}function H(){let n=(0,i._)(["\n  width: 100%;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n"]);return H=function(){return n},n}let P=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-9e64d6c2-0"})(L()),B=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-9e64d6c2-1"})(Z()),M=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-9e64d6c2-2"})(I()),z=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-9e64d6c2-3"})(H()),N={hidden:{opacity:1},visible:{opacity:1,transition:{delayChildren:.4,staggerChildren:.1}},exit:{opacity:0,transition:{when:"beforeChildren"}}},O={hidden:{clipPath:"circle(0 at 100% 0%)"},visible:{clipPath:"circle(140vh at 100% 0%)",transition:{ease:"easeInOut",duration:.7}},exit:{clipPath:"circle(.1vh at 100% 0%)",transition:{ease:"easeInOut",duration:.5}}};function S(n){let{links:t}=n,e=(0,f.useContext)(o.Ni),[i,a]=(0,f.useState)(!1);return(0,r.jsx)(P,{children:(0,r.jsxs)(j.M,{children:[i&&(0,r.jsx)(B,{initial:"hidden",animate:"visible",exit:"exit",variants:O,style:{backgroundColor:e.primary_light}},"BurgerBackdrop"),(0,r.jsx)(_,{onClick:()=>a(n=>!n),open:i},"BurgerButton"),i&&(0,r.jsx)(M,{variants:N,initial:"hidden",animate:"visible",exit:"exit",children:(0,r.jsx)(z,{children:t.map(n=>(0,r.jsx)(w,{name:n.name+"burger",href:n.href,onClick:()=>a(!1),setHoveredLink:null,children:n.name},n.name+"burger"))})})]})})}function D(){let n=(0,i._)(["\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  height: 12vh;\n  display: grid;\n  grid-template-rows: 100%;\n  grid-template-columns: minmax(max-content, 8vw) 1fr;\n  justify-items: flex-end;\n  align-items: center;\n  padding: 3vh 25px 0 25px;\n\n  @media (max-width: 555px) {\n    height: 7.5vh;\n    padding: 3vh 10px 0 10px;\n  }\n"]);return D=function(){return n},n}function F(){let n=(0,i._)(["\n  width: 100%;\n  height: max-content;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  align-self: center;\n"]);return F=function(){return n},n}function X(){let n=(0,i._)(["\n  width: min(100%, 700px);\n  height: 70%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media (max-width: 655px) {\n    display: none;\n  }\n"]);return X=function(){return n},n}function Y(){let n=(0,i._)(["\n  height: max-content;\n  width: 3rem;\n  max-height: 100%;\n  padding: 0 0.5rem;\n  z-index: 3;\n\n  @media (min-width: 655px) {\n    display: none;\n  }\n"]);return Y=function(){return n},n}function T(){let n=(0,i._)(["\n  width: 70%;\n  height: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 20;\n\n  @media (max-width: 555px) {\n    width: 100%;\n    height: 100%;\n  }\n"]);return T=function(){return n},n}function W(){let n=(0,i._)(["\n  width: 100%;\n  height: 1px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]);return W=function(){return n},n}let V=(0,o.ZP)(a.E.nav).withConfig({componentId:"sc-1177b2d7-0"})(D()),$=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-1177b2d7-1"})(F()),A=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-1177b2d7-2"})(X()),R=(0,o.ZP)(a.E.div).withConfig({componentId:"sc-1177b2d7-3"})(Y()),U=(0,o.ZP)(a.E.a).withConfig({componentId:"sc-1177b2d7-4"})(T()),q=(0,o.ZP)(a.E.span).withConfig({componentId:"sc-1177b2d7-5"})(W());function G(n){let{children:t,links:e=[]}=n,i=(0,f.useContext)(o.Ni),[a,l]=(0,f.useState)(null);return(0,r.jsxs)(V,{children:[(0,r.jsx)(c(),{href:"/",passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(U,{children:(0,r.jsx)(s.Z,{})})}),(0,r.jsxs)($,{initial:"hidden",animate:"visible",exit:"exit",transition:{delayChildren:1.3,staggerChildren:.15},children:[(0,r.jsx)(A,{children:e.map(n=>(0,r.jsxs)(w,{name:n.name,href:n.href,onClick:n.onClick,setHoveredLink:l,children:[a===n.name&&(0,r.jsx)(q,{layoutId:"linkUnderline",style:{backgroundColor:n.color||i.primary_slightlydark},transition:{type:"spring",stiffness:85,mass:.8,damping:12}}),n.name]},n.name))}),(0,r.jsx)(R,{children:(0,r.jsx)(S,{links:e})}),t]})]})}},8391:function(n,t,e){var i=e(7294);t.Z=function(){let[n,t]=(0,i.useState)({width:void 0,height:void 0});return(0,i.useEffect)(()=>{function n(){t({width:window.innerWidth,height:window.screen.height})}return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]),n}}}]);