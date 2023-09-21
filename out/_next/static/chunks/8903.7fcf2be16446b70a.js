"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8903],{18903:function(e,t,r){r.r(t),r.d(t,{default:function(){return Q}});var n=r(85893),a=r(1864),i=r(67294),o=r(64358);const s=`${o.sC}/AI Images`,c="0 0.5px 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)",l={"/caption":{action:"CAPTIONING",icon:"📝",label:"Captioning"},"/classify":{action:"CLASSIFYING",icon:"🏷️",label:"Classifying"},"/draw":{action:"DRAWING",icon:"🎨",label:"Drawing"},"/summarize":{action:"SUMMARY",icon:"📋",label:"Summarizing"},"/translate":{action:"TRANSLATION",icon:"🌐",label:"Translating"},"/wallpaper":{action:"DRAWING",icon:"🖼️",label:"Creating Wallpaper"}},u={401:"Valid API key required.",404:"Model not found.",429:"Rate limit reached."},p=()=>{const e=Math.random();let t=150;return e<.3?t=30:e<.6?t=37.5:e<.9&&(t=50),Math.random()*(t-1+1)+1},d=(0,i.memo)((()=>(0,n.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"})}))),g=(0,i.memo)((()=>(0,n.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001C14.366 2.693 14.2 1.643 13.616 0h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847L2.372 4.657c.745 1.568 1.375 2.434.847 3.707C2.692 9.635 1.635 9.802 0 10.384v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"})}))),b=(0,i.memo)((()=>(0,n.jsxs)("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M338.7 174.6 135.3 378.3c-12.5 12.5-12.5 32.8 0 45.3l180.1 180.3c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l22.6-22.6L203 400.9l158.2-158.4c12.5-12.5 12.5-32.8 0-45.3l-22.5-22.6z"}),(0,n.jsx)("path",{d:"M654.5 369.4h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c97.2 0 176 78.8 176 176s-78.8 176-176 176h-496c-17.7 0-32 14.3-32 32s14.3 32 32 32h496c132.5 0 240-107.5 240-240s-107.5-240-240-240z"})]})));var m=r(10508),h=r(38060),x=m.ZP.div.withConfig({componentId:"sc-52d8fe5f-0"})`
  background-color: rgb(68, 70, 84);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > button {
    fill: rgba(200, 200, 200, 75%);
    margin: 3px;
    padding: 4px;
    position: absolute;
    right: ${o.BQ}px;
    width: 24px;
    z-index: 1;

    &:hover {
      fill: rgba(200, 200, 200, 100%);
    }
  }

  .sub-margin {
    margin: -2px;
  }

  > ul {
    ${(0,h.Z)()};
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 84px;
    position: relative;
  }
`,f=m.ZP.li.withConfig({componentId:"sc-be59d8ad-0"})`
  padding-bottom: 15px;

  figure {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    padding-left: 15px;

    figcaption {
      color: rgba(236, 236, 241);
      padding-left: 5px;

      b {
        font-weight: 600;
      }
    }
  }
`,w=m.ZP.div.withConfig({componentId:"sc-a3b0ce4c-0"})`
  align-items: flex-end;
  background-color: rgb(52, 53, 65);
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: ${o.BQ}px;

  .status {
    background-color: rgb(52, 53, 65);
    border-top-right-radius: 5px;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    max-width: 95%;
    overflow: hidden;
    padding: 5px 10px;
    position: absolute;
    text-overflow: ellipsis;
    top: -26px;
    white-space: nowrap;
    width: fit-content;
  }

  textarea {
    background-color: rgb(64, 65, 79);
    border: 5px solid rgb(64, 65, 79);
    border-radius: 24px;
    box-shadow: ${c};
    color: #fff;
    font-family: ${e=>{let{theme:t}=e;return t.formats.systemFont}};
    font-size: 16px;
    height: 40px;
    line-height: 20px;
    margin: 22px;
    overflow: hidden;
    padding: 4px 40px 4px 16px;
    resize: none;
    width: 100%;

    &::placeholder {
      color: rgba(200, 200, 200, 75%);
    }
  }

  button {
    bottom: 25px;
    cursor: pointer;
    opacity: ${e=>{let{$hideSend:t}=e;return t?"0%":"100%"}};
    pointer-events: ${e=>{let{$hideSend:t}=e;return t?"none":"all"}};
    position: absolute;
    right: 28px;
    transition: opacity 0.1s ease-in-out;
    width: min-content;

    &:hover {
      background-color: rgb(52, 53, 65);
      border-radius: 50%;
    }

    svg {
      color: rgb(0, 132, 255);
      margin: 8px 8px 3px 6px;
      pointer-events: none;
      width: 20px;
    }
  }
`,k=m.ZP.span.withConfig({componentId:"sc-12ff28b5-0"})`
  height: 32px;
  opacity: ${e=>{let{$showLoading:t}=e;return t?"100%":"0%"}};
  position: absolute;
  right: 24px;
  top: 18px;
  transition: opacity 0.1s ease-in-out;
  width: 32px;

  &::after {
    animation: ellipsis steps(4, end) 900ms infinite;
    color: rgb(142, 142, 160);
    content: "";
    font-size: 25px;
    letter-spacing: 0.5px;
  }

  @keyframes ellipsis {
    0% {
      content: ".";
    }

    50% {
      content: "..";
    }

    100% {
      content: "...";
    }
  }
`,A=m.ZP.li.withConfig({componentId:"sc-9f6a55b0-0"})`
  background-size: cover;
  border-radius: 18px;
  box-shadow: ${c};
  cursor: ${e=>{let{$image:t}=e;return t?void 0:"text"}};
  font-size: 16px;
  height: ${e=>{let{$image:t}=e;return t?"256px":void 0}};
  line-height: 20px;
  margin: 20px;
  max-width: calc(100% - 40px);
  overflow-wrap: break-word;
  padding: 10px 15px;
  user-select: text;
  white-space: break-spaces;
  width: ${e=>{let{$image:t}=e;return t?"256px":"max-content"}};

  ${e=>{let{$image:t,$type:r}=e;return"assistant"===r&&m.iv`
      background: ${t?`url(${t})`:"linear-gradient(90deg, rgb(248, 249, 253), rgb(245, 248, 253))"};
      background-size: contain;
      color: #000;
      margin-left: 56px;
      margin-right: auto;
      max-width: calc(100% - 78px);
      position: relative;

      &::before {
        background-color: black;
        background-image: url("/favicon.ico");
        background-size: contain;
        border-radius: 50%;
        content: "";
        height: 31px;
        left: -40px;
        position: absolute;
        top: 9px;
        width: 31px;
      }

      .cursor {
        display: contents;
        font-size: 14px;
      }

      > span {
        cursor: text;
        display: flex;
        flex-direction: column;
        gap: 10px;
        user-select: text;

        code {
          background-color: rgb(25, 25, 25);
          border-radius: 6px;
          color: rgb(250, 250, 250);
          cursor: text;
          font-size: 12px;
          padding: 2px 5px;
          user-select: text;
        }

        p {
          cursor: text;
          user-select: text;
        }

        pre > code {
          display: block;
          font-size: 14px;
          padding: 10px;
          white-space: pre-wrap;
        }

        ol,
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: auto;
          user-select: text;

          li {
            user-select: text;
          }
        }
      }
    `}}

  ${e=>{let{$isCommand:t,$type:r}=e;return"user"===r&&m.iv`
      background: linear-gradient(
        90deg,
        ${t?"rgb(224, 40, 234)":"rgb(40, 112, 234)"},
        ${t?"rgb(148, 27, 239)":"rgb(27, 74, 239)"}
      );
      color: #fff;
      margin-left: auto;
    `}}
`,y=m.ZP.li.withConfig({componentId:"sc-6128ecab-0"})`
  background-color: rgb(70, 59, 63);
  border: 1px solid rgb(124, 70, 43);
  border-radius: 10px;
  color: rgb(248, 236, 234);
  font-size: 16px;
  margin: 25px;
  outline: 1px solid rgb(73, 48, 40);
  padding: 15px;
`,v=r(87426),$=r(6529),S=r(55785),C=r(26724),M=r(54314),E=r(56758),L=r(25804),T=r(62065),I=r(34254),z=r(48764).Buffer;const j={text:"Hello, I'm an AI assistant. How can I help you?",type:"assistant"},P={chat:"textGeneration",conversational:"facebook/blenderbot-400M-distill",imageToText:"Salesforce/blip-image-captioning-large",summarization:"philschmid/bart-large-cnn-samsum",textGeneration:"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5",textToImage:"stabilityai/stable-diffusion-2-1",translation:"t5-base",zeroShotClassification:"facebook/bart-large-mnli"},B={"OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5":{assistantStartToken:"<|assistant|>",endToken:"<|endoftext|>",userStartToken:"<|prompter|>"}},R=(e,t)=>{const{assistantStartToken:r,endToken:n,userStartToken:a}=B[P.textGeneration];return`${[...t,{text:e,type:"user"}].filter((e=>{let{type:t}=e;return"system"!==t})).map((e=>{let{text:t,type:i}=e;return`${"assistant"===i?r:a}${t}${n}`})).join("")}${r}`},_={wait_for_model:!0};var H=r(48764).Buffer;const O={model:"gpt-4",n:1,temperature:.8},W={content:"You are a helpful assistant.",role:"system"},N={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"},Z={text:"Hello, I am an AI assistant. How can I help you today?",type:"assistant"};class U{destroy(){this.reset()}constructor(e){this.model="",this.worker=void 0,this.isChatting=!1,this.greeting=Z,this.model=e}async init(){return window.webLLM=window.webLLM||{},window.webLLM[this.model]=window.webLLM[this.model]||new Worker(r.tu(new URL(r.p+r.u(1636),r.b)),{name:this.model,type:void 0}),this.worker=window.webLLM[this.model],this.worker.postMessage({model:this.model,type:"init"}),Promise.resolve()}async chat(e,t,r,n,a,i){return this.isChatting||(this.isChatting=!0,i&&this.worker?.postMessage({prompt:i,type:"system"})),setTimeout((()=>{this.worker?.postMessage({prompt:e,type:"chat"})}),100),new Promise((e=>{this.worker?.addEventListener("message",(t=>{let{data:r}=t;const n=a||console.info;"string"==typeof r?(e(r),n("","")):"object"==typeof r&&n(r.type,r.message)}))}))}async classify(e,t){return Promise.resolve("")}async draw(e){return Promise.resolve()}async imageToText(e,t,r){return Promise.resolve("")}reset(){this.worker?.postMessage({type:"reset"})}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}}var F=r(21638);const G={HuggingFace:class{checkError(e){e.message.includes("Rate limit reached")&&this.setError(429)}constructor(e,t){this.inference={},this.greeting=j,this.apiKey=e,this.setError=t}async init(){await(0,I.mb)(["Program Files/HuggingFace/inference.min.js"]),window.HfInference&&(this.inference=new window.HfInference(this.apiKey))}async chat(e,t,r,n){let a="";const i=P[P.chat];try{({generated_text:a=""}="conversational"===P.chat?await this.inference.conversational({inputs:{generated_responses:r,past_user_inputs:t,text:e},model:i},_):await this.inference.textGeneration({inputs:R(e,n),model:i,parameters:{max_new_tokens:100,return_full_text:!1}},_))}catch(e){this.checkError(e)}return a}async classify(e,t){try{const[{labels:[r],scores:[n]}]=await this.inference.zeroShotClassification({inputs:[e],model:P.zeroShotClassification,parameters:{candidate_labels:t}},_);return`${r} (${(100*n).toFixed(1)}%)`}catch(e){this.checkError(e)}return""}async draw(e){try{const t=await this.inference.textToImage({inputs:e,model:P.textToImage,negative_prompt:"blurry"},_);return z.from(await t.arrayBuffer())}catch(e){return this.checkError(e)}}async imageToText(e,t,r){try{const[{generated_text:n}]=await this.inference.request({data:new File([(0,I.V4)(r,t)],e,{type:t}),model:P.imageToText},{..._,binary:!0});return n}catch(e){this.checkError(e)}return""}async summarization(e){try{return(await this.inference.summarization({inputs:e,model:P.summarization,parameters:{max_length:100}},_)).summary_text}catch(e){this.checkError(e)}return""}async translation(e){try{return(await this.inference.translation({inputs:e,model:P.translation},_)).translation_text}catch(e){this.checkError(e)}return""}},OpenAI:class{getHeaders(){return{headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},method:"POST"}}constructor(e,t){this.apiKey="",this.greeting=N,this.apiKey=e,this.setError=t}async init(){return Promise.resolve()}async chat(e,t,r,n,a,i){i&&W.content!==i&&(W.content=i);const o=(n||[]).map((e=>{let{text:t,type:r}=e;return{content:t,role:r}})),s=await fetch("https://api.openai.com/v1/chat/completions",{body:JSON.stringify({messages:[W,...o,{content:e,role:"user"}],...O}),...this.getHeaders()});if(s?.ok){const e=await s.json(),[{message:t,finish_reason:r}]=e?.choices||[];if(t){const{content:e}=t;if("stop"===r)return e;if("length"===r)return`${e}\n\n[Incomplete Response]`;if("content_filter"===r)return`${e}\n\n[Content Filtered]`}}return s?.status&&this.setError(s?.status),""}async classify(e,t){return Promise.resolve("")}async draw(e){const t=await fetch("https://api.openai.com/v1/images/generations",{body:JSON.stringify({n:1,prompt:e,response_format:"b64_json",size:"256x256"}),...this.getHeaders()});if(t?.ok){const e=(await t.json())?.data?.[0]?.b64_json;return e?H.from(e,"base64"):void 0}t?.status&&this.setError(t?.status)}async imageToText(e,t,r){return Promise.resolve("")}async summarization(e){return Promise.resolve("")}async translation(e){return Promise.resolve("")}},"WebLLM [RedPajama 3B]":U,"WebLLM [Vicuna 7B]":U};var D=r(30663),Q=e=>{let{id:t}=e;const{aiApi:r,setAiApi:c,setWallpaper:m}=(0,T.k)(),{readFile:h,mkdirRecursive:z,writeFile:j}=(0,C.o)(),{close:P,open:B,processes:{[t]:R},title:_,url:H}=(0,E.z)(),{url:O}=R||{},[W,N]=(0,i.useMemo)((()=>r.split(":")),[r]),{engine:Z,error:U,name:Q,resetError:K}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,n]=(0,i.useState)(0),a=(0,F.Z)(),[s,c]=(0,i.useState)("");return(0,i.useEffect)((()=>{if("boolean"==typeof a){const[e]=o.OG.split(":");let r=e;t&&t in G?r=t.startsWith("WebLLM")&&!a?o.wB:t:r.startsWith("WebLLM")&&!a&&(r=o.wB),c(r)}}),[t,a]),{engine:(0,i.useMemo)((()=>s?new G[s](t===s?e:"",n):void 0),[s,e,t]),error:r,name:s,resetError:()=>n(0)}}(W.startsWith("WebLLM")?W:N,W),V=(0,i.useRef)(null),Y=(0,i.useRef)(null),[J,q]=(0,i.useState)(""),[X,ee]=(0,i.useState)([]),te=(0,i.useRef)(!1),re=(0,i.useCallback)((function(e){let[t,...r]=e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=r.length>0;ee((e=>{if(n)return[...e,{text:t,type:"assistant",writing:a}];const r=[...e],i=r.findIndex((e=>{let{writing:t}=e;return t}));return r[i]={text:`${r[i].text}${t}`,type:"assistant",writing:a},r})),a&&setTimeout((()=>re(r)),p())}),[]),ne=(0,i.useCallback)((e=>{const{image:t,text:r,type:n}=e;r&&("assistant"!==n||t?ee((t=>[...t,e])):re([...r],!0))}),[re]),[ae,ie]=(0,i.useState)(!1),oe=(0,i.useCallback)((async e=>{if(!e)return"";ie(!0);const t=await e;return ie(!1),t}),[]),[se,ce]=(0,i.useState)(""),le=(0,i.useCallback)(((e,t)=>{ce(e&&t?`${e} ${t}`:"")}),[]),[ue,pe]=(0,i.useState)(""),[de,ge]=(0,i.useState)(),be=(0,i.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:de;if(!t)return;const r=new SpeechSynthesisUtterance(e);r.voice=t,r.pitch=.9,r.rate=1.5,r.volume=.5,window.speechSynthesis.speak(r)}),[de]),me=(0,i.useCallback)((e=>{if(!Z)return;const[t,r]=X.map((e=>e.command&&"user"===e.type?{...e,text:`${e.command.replace("/","").toUpperCase()}: ${e.text}`}:e.image&&"assistant"===e.type?{...e,text:`IMAGE: ${e.text}`}:e)).reduce(((e,t)=>{let[r,n]=e,{text:a,type:i}=t;return"assistant"===i?[[...r,a],n]:[r,[...n,a]]}),[[],[]]),n=e.trim();oe(Z.chat(n,r,t,X,le,ue)).then((async e=>{e&&(window.marked?.parse||await(0,I.mb)(["/Program Files/Marked/marked.min.js"]),ne({text:window.marked.parse(e.trim(),{headerIds:!1}),type:"assistant"}),de&&be(e))})),ne({text:n,type:"user"})}),[Z,ne,X,be,le,ue,de,oe]),[he,xe]=(0,i.useState)([]),fe=(0,i.useCallback)((async(e,t,r)=>{const n=Date.now();ie(!0),xe((r=>[...r,{command:e,text:t,timestamp:n}]));const a=await r;return xe((e=>e.filter((e=>{let{timestamp:t}=e;return t!==n})))),ie(!1),a}),[]),we=(0,i.useCallback)(((e,t,r)=>{const[n,...a]=t.split(" "),i=a.join(" ");ne({command:n,text:i,type:"user"}),fe(n,i,e).then((e=>e&&ne({command:n,..."string"==typeof e?{text:`${r||"RESPONSE"}: ${e.trim()}`}:{image:(0,I.YS)(e),text:i},type:"assistant"})))}),[ne,fe]),ke=(0,i.useCallback)((()=>{Y.current&&(Y.current.style.height="0px",Y.current.style.height=`${Math.max(40,Y.current.scrollHeight+10)}px`)}),[]),Ae=(0,i.useCallback)((async(e,t,r)=>{try{const n=(0,a.join)(s,`${(0,$.gL)(e)} (${(0,I.gE)()}).jpg`);await z(s),await j(n,t,!0),r&&m(n)}catch{}}),[z,m,j]),ye=(0,i.useCallback)((async()=>{if(Y.current&&Z){if(Y.current.value.startsWith("/")){const[e,...t]=Y.current.value.split(" "),r=t.join(" ");switch(e){case"/classify":we(Z.classify(r,Object.keys(l).map((e=>e.replace("/",""))).filter((e=>"classify"!==e))),Y.current.value,"CLASSIFYING");break;case"/draw":case"/wallpaper":we(Z.draw(r).then((t=>(t&&Ae(r,t,"/wallpaper"===e),t))),Y.current.value,"DRAWING");break;case"/caption":we(Z.imageToText((0,a.basename)(r),(0,v.bh)(r),await h(r)),Y.current.value,"CAPTIONING");break;case"/summarize":we(Z.summarization(r),Y.current.value,"SUMMARY");break;case"/translate":we(Z.translation(r),Y.current.value,"TRANSLATION");break;default:me(Y.current.value)}}else me(Y.current.value);K(),Y.current.value="",q(""),ke()}}),[Z,we,h,K,Ae,me,ke]),ve=(0,i.useMemo)((()=>X.some((e=>{let{writing:t}=e;return t}))),[X]),$e=ae||ve,Se=J&&!$e,{contextMenu:Ce}=(0,M.H)(),[Me,Ee]=(0,i.useState)([]),Le=(0,F.Z)(),{onContextMenuCapture:Te}=(0,i.useMemo)((()=>Ce?.((()=>1===X.length?[{label:"Set AI Engine",menu:["HuggingFace","OpenAI",...Le?["WebLLM [RedPajama 3B]"]:[],...Le?["WebLLM [Vicuna 7B]"]:[]].map((e=>({action:()=>{c(`${e}:${e.startsWith("WebLLM")?"":prompt("API Key")||""}`),P(t),setTimeout((()=>B(t.split(o.CC)[0])),1.5*o.jx.WINDOW)},checked:Q===e,label:e})))},..."OpenAI"===Q?[{action:()=>{pe(prompt("System Prompt")||"")},label:"Set System Prompt"}]:[],...Me.length>0?[{label:"Set Text-to-Speech",menu:Me.map((e=>({action:()=>{ge(e),be(X[0].text,e)},checked:e===de,label:e.name})))}]:[]]:[]))),[P,Ce,Le,t,X,Q,B,c,be,de,Me]),Ie=(0,i.useCallback)((()=>{ee((e=>[e[0]])),Z?.reset?.()}),[Z]);return(0,i.useEffect)((()=>{if(Z&&"speechSynthesis"in window){const e=window.speechSynthesis.getVoices();0===e.length?setTimeout((()=>Ee(window.speechSynthesis.getVoices())),500):Ee(e)}}),[Z]),(0,i.useEffect)((()=>{Q&&_(t,`${L.Z.Chat.title} (${Q})`)}),[t,Q,_]),(0,i.useEffect)((()=>{V.current&&X.length>0&&V.current.scrollTo(0,V.current.scrollHeight)}),[X]),(0,i.useEffect)((()=>(Z&&!te.current&&(te.current=!0,Z.init().then((()=>ne(Z.greeting))),Y.current?.focus(o.eS)),()=>{te.current&&Z?.destroy?.()})),[Z,ne]),(0,i.useEffect)((()=>{if(O&&Y.current&&o.lM.has((0,I.RT)(O))){const e=`${J?"":"/caption "}${J}${J?" ":""}${O}`;Y.current.value=e,q(e),ke(),H(t,"")}}),[t,J,H,ke,O]),(0,n.jsxs)(x,{...(0,S.Z)({id:t}),children:[1===X.length?(0,n.jsx)(D.Z,{onClick:Te,children:(0,n.jsx)(g,{})}):X.length>1&&!$e&&(0,n.jsx)(D.Z,{className:"sub-margin",onClick:Ie,title:"Reset Chat",children:(0,n.jsx)(b,{})}),(0,n.jsxs)("ul",{ref:V,children:[X.map(((e,t)=>{let{command:r,image:a,text:i,type:o,writing:s}=e;const c="assistant"===o,u=r||!c?i:(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:`${i}${s?"<span class='cursor'>|</span>":""}`}});return(0,n.jsxs)(A,{$image:a,$isCommand:Boolean(r),$type:o,title:a?i:"",children:[r&&!c?`${l[r].icon} `:"",a?"":u]},t)})),Boolean(U&&u[U])&&(0,n.jsx)(y,{children:u[U]}),he.map((e=>{let{command:t,text:r}=e;return(0,n.jsx)(f,{children:(0,n.jsxs)("figure",{children:[l[t].icon,(0,n.jsxs)("figcaption",{children:[l[t].label,": ",(0,n.jsx)("b",{children:r}),"..."]})]})},`${t}-${r}`)}))]}),(0,n.jsxs)(w,{$hideSend:!Se,children:[se&&(0,n.jsx)("div",{className:"status",children:se}),(0,n.jsx)("textarea",{ref:Y,onInput:e=>{const{nativeEvent:t,target:r}=e;r instanceof HTMLTextAreaElement&&t instanceof InputEvent&&(["insertFromPaste","deleteByCut"].includes(t.inputType)&&q(r.value),ke())},onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{const{key:t,target:r,shiftKey:n}=e;if(!(r instanceof HTMLTextAreaElement))return;const a="Enter"===t;r.value&&a?n?(r.value+="\n",ke()):Se&&ye():q(r.value)},placeholder:"Ask me anything..."}),(0,n.jsx)(k,{$showLoading:$e}),(0,n.jsx)(D.Z,{onClick:ye,children:(0,n.jsx)(d,{})})]})]})}},55785:function(e,t,r){var n=r(1864),a=r(67294),i=r(62727),o=r(6529),s=r(42151),c=r(26724),l=r(56758),u=r(62065),p=r(64358),d=r(34254);t.Z=e=>{let{callback:t,directory:r=p.Ll,id:g,onDragLeave:b,onDragOver:m,updatePositions:h}=e;const{url:x}=(0,l.z)(),{iconPositions:f,sortOrders:w,setIconPositions:k}=(0,u.k)(),{mkdirRecursive:A,updateFolder:y,writeFile:v}=(0,c.o)(),$=(0,a.useCallback)((async(e,t,r)=>{if(g)if(t){const a=(0,n.join)(p.Ll,e);if(await A(p.Ll),await v(a,t,!0))return r===s.v.UPDATE_URL&&x(g,a),y(p.Ll,e),(0,n.basename)(a)}else r===s.v.UPDATE_URL&&x(g,e);return""}),[g,A,y,x,v]),{openTransferDialog:S}=(0,i.Z)();return{onDragLeave:b,onDragOver:e=>{m?.(e),(0,d.nK)(e)},onDrop:e=>{if(!p.my.has((0,d.RT)(r))){if(h&&e.target instanceof HTMLElement){const{files:t,text:a}=(0,o.p4)(e);if(0===t.length&&""===a)return;const i={x:e.clientX,y:e.clientY};let s=[];if(a){try{s=JSON.parse(a)}catch{}if(!Array.isArray(s))return;const[e]=s;if(!e)return;if(e.startsWith(r)&&(0,n.basename)(e)===(0,n.relative)(r,e))return;s=s.map((e=>(0,n.basename)(e)))}else s=t instanceof FileList?[...t].map((e=>e.name)):[...t].map((e=>e.getAsFile()?.name||"")).filter(Boolean);s=s.map((e=>{if(!f[`${r}/${e}`])return e;let t=0,a="";do{t+=1,a=`${r}/${(0,n.basename)(e,(0,n.extname)(e))} (${t})${(0,n.extname)(e)}`}while(f[a]);return(0,n.basename)(a)})),(0,d.vi)(r,e.target,f,w,i,s,k)}(0,o.WG)(e,t||$,r,S,Boolean(g))}}}}},21638:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(67294);const a=()=>{const[e,t]=(0,n.useState)(),r=(0,n.useCallback)((async()=>t(await(async()=>{if("undefined"==typeof navigator)return!1;if(!("gpu"in navigator))return!1;let e;try{e=await navigator.gpu.requestAdapter()}catch{return!1}return!!e&&!(1<<30>(e.limits.maxBufferSize??0)||1<<30>(e.limits.maxStorageBufferBindingSize??0)||32768>(e.limits.maxComputeWorkgroupStorageSize??0))})())),[]);return(0,n.useEffect)((()=>{r()}),[r]),e}},38060:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(10508);var a=r(64358);const i={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}};var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.BQ,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"dark";return n.iv`
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
    background-blend-mode: ${i[o].blendMode};
  }
`}}}]);