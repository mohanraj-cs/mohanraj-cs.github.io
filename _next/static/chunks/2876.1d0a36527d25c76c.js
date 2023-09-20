"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2876],{82876:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(85893),a=r(67294),o=r(10508);const i=(0,a.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"m30.297 7.297 1.406 1.406L16 24.406.297 8.703l1.406-1.406L16 21.594z"})}))),l=(0,a.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M30.547 23.953 16 9.422 1.453 23.953.047 22.547 16 6.578l15.953 15.969z"})})));var s=r(71183),c=r(64358);var d=(0,o.ZP)(s.m.section).withConfig({componentId:"sc-4d9ef4c3-0"})`
  backdrop-filter: ${e=>{let{theme:t}=e;return`blur(${t.sizes.taskbar.blur})`}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.taskbar.background}};
  border: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.taskbar.peekBorder}`}};
  border-bottom: 0;
  border-right: 0;
  bottom: ${c.bK}px;
  position: absolute;
  right: 0;
  z-index: 10000;

  table {
    padding: 4px 10px 19px;
    white-space: nowrap;

    td {
      color: #fff;
      display: inline-table;
      height: 40px;
      line-height: 32px;
      margin: 0 1px;
      text-align: center;
      width: 46px;

      &.prev,
      &.next {
        color: rgb(125, 125, 125);
      }
    }

    thead {
      font-size: 12px;

      td[colspan] {
        display: table-cell;
        padding: 0;

        div {
          display: flex;
          font-size: 15px;
          padding: 0 16px 0 12px;
          place-content: space-between;

          header {
            color: rgb(223, 223, 223);

            &:hover {
              color: #fff;
            }

            &:active {
              color: rgb(165, 156, 156);
            }
          }
        }
      }

      td:not([colspan]) {
        height: auto;
        margin-top: -1px;
      }

      nav {
        display: flex;
        flex-direction: row;
        gap: 32px;
        padding-top: 2px;

        button {
          fill: rgb(223, 223, 223);

          &:hover {
            fill: #fff;
          }

          &:active {
            fill: rgb(165, 156, 156);
          }

          svg {
            width: 16px;
          }
        }
      }
    }

    tbody.curr td.today {
      background-color: rgb(0, 120, 215);
      color: #fff;
      position: relative;

      &::after,
      &::before {
        content: "";
        position: absolute;
      }

      &::after {
        inset: 0;
      }

      &::before {
        border: 2px solid #000;
        inset: 2px;
      }

      &:hover {
        &::after {
          border: 2px solid rgb(102, 174, 231);
        }
      }

      &:active {
        &::after {
          border: 2px solid rgb(153, 201, 239);
        }
      }
    }
  }
`;const h=[[1,"curr"],[2,"curr"],[3,"curr"],[4,"curr"],[5,"curr"],[6,"curr"],[7,"curr"]],p=e=>{const t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),a=new Date(n,r,1).getDay(),o=h.slice(0,7-a),i=[...Array.from({length:7-o.length}).map(((e,t)=>[new Date(n,r,-t).getDate(),"prev"])).reverse(),...o],l=new Date(n,r+1,0).getDate(),s=Array.from({length:l}).map(((e,t)=>new Date(n,r,t+1).getDate())).slice(i[i.length-1][0]).map((e=>[e,"curr"])),c=[...i,...s].reduce(((e,r,n)=>{n%7===0&&e.push([]);const[a,o]=r;return e[e.length-1].push("curr"===o&&a===t?[a,"today"]:r),e}),[]),d=c[c.length-1],p=Array.from({length:7-d.length}).map(((e,t)=>[new Date(n,r+1,t+1).getDate(),"next"]));if(d.push(...p),c.length<6){const[e]=d[d.length-1];return[...c,e>6?h.map((e=>{let[t]=e;return[t,"next"]})):Array.from({length:7}).map(((t,r)=>[r+1+e,"next"])),...4===c.length?[h.map((e=>{let[t]=e;return[t+7,"next"]}))]:[]]}return c};var u=r(96702),g=r(30663),x=r(34254),f=r(23988);const b=["Su","Mo","Tu","We","Th","Fr","Sa"],m=e=>{let{toggleCalendar:t}=e;const[r,s]=(0,a.useState)((()=>new Date)),[h,m]=(0,a.useState)((()=>p(r))),v=(0,a.useMemo)((()=>new Date),[]),w=(0,a.useMemo)((()=>r.getMonth()===v.getMonth()&&r.getFullYear()===v.getFullYear()),[r,v]),j=e=>{const t=new Date(r);t.setMonth(t.getMonth()+e),s(t),m(p(t))},y=(0,a.useRef)(null),{sizes:{calendar:{maxHeight:D}}}=(0,o.Fg)(),M=(0,u.Z)(D,!1);return(0,a.useEffect)((()=>{y.current?.addEventListener("blur",(e=>{let{relatedTarget:r}=e;if(r instanceof HTMLElement){if(y.current?.contains(r))return void y.current?.focus(c.eS);const e=document.querySelector("main>nav [role=timer]");if(e instanceof HTMLDivElement&&(e===r||e.contains(r)))return}t(!1)})),y.current?.focus(c.eS)}),[t]),h&&(0,n.jsx)(d,{ref:y,"aria-label":"Calendar",onContextMenu:x.nK,...M,...c.LL,children:(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:b.length,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("header",{children:`${r.toLocaleString("default",{month:"long"})}, ${r.getFullYear()}`}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(g.Z,{onClick:()=>j(-1),children:(0,n.jsx)(l,{})}),(0,n.jsx)(g.Z,{onClick:()=>j(1),children:(0,n.jsx)(i,{})})]})]})})}),(0,n.jsx)("tr",{children:b.map((e=>(0,n.jsx)("td",{children:e},e)))})]}),(0,n.jsx)("tbody",{className:w?"curr":void 0,children:h?.map((e=>(0,n.jsx)("tr",{children:e.map((e=>{let[t,r]=e;return(0,n.jsx)("td",{ref:e=>"today"===r?void 0:(0,f.G)(e,!1,2),className:r,children:t},`${t}${r}`)}))},e.toString())))})]})})};var v=(0,a.memo)(m)},96702:function(e,t,r){var n=r(64358),a=r(34254);t.Z=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Math.min(e,(0,a.sI)()-n.bK);return{animate:"active",exit:{height:.75*r+"px",transition:{duration:n.Nb.TASKBAR_ITEM/10,ease:"circIn"}},initial:"initial",transition:{duration:n.Nb.TASKBAR_ITEM,ease:"circOut"},variants:{active:{height:`${r}px`,paddingTop:0},initial:{height:.75*r+"px",paddingTop:t?.5*r+"px":0}}}}}}]);