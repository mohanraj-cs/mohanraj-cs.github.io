(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{8168:function(e,t,r){let n=r(8874),l={};for(let e of Object.keys(n))l[n[e]]=e;let a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(let t of(e.exports=a,Object.keys(a))){if(!("channels"in a[t]))throw Error("missing channels property: "+t);if(!("labels"in a[t]))throw Error("missing channel labels property: "+t);if(a[t].labels.length!==a[t].channels)throw Error("channel and label counts mismatch: "+t);let{channels:e,labels:r}=a[t];delete a[t].channels,delete a[t].labels,Object.defineProperty(a[t],"channels",{value:e}),Object.defineProperty(a[t],"labels",{value:r})}a.rgb.hsl=function(e){let t;let r=e[0]/255,n=e[1]/255,l=e[2]/255,a=Math.min(r,n,l),i=Math.max(r,n,l),o=i-a;i===a?t=0:r===i?t=(n-l)/o:n===i?t=2+(l-r)/o:l===i&&(t=4+(r-n)/o),(t=Math.min(60*t,360))<0&&(t+=360);let s=(a+i)/2;return[t,100*(i===a?0:s<=.5?o/(i+a):o/(2-i-a)),100*s]},a.rgb.hsv=function(e){let t,r,n,l,a;let i=e[0]/255,o=e[1]/255,s=e[2]/255,u=Math.max(i,o,s),c=u-Math.min(i,o,s),d=function(e){return(u-e)/6/c+.5};return 0===c?(l=0,a=0):(a=c/u,t=d(i),r=d(o),n=d(s),i===u?l=n-r:o===u?l=1/3+t-n:s===u&&(l=2/3+r-t),l<0?l+=1:l>1&&(l-=1)),[360*l,100*a,100*u]},a.rgb.hwb=function(e){let t=e[0],r=e[1],n=e[2],l=a.rgb.hsl(e)[0],i=1/255*Math.min(t,Math.min(r,n));return[l,100*i,100*(n=1-1/255*Math.max(t,Math.max(r,n)))]},a.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,l=Math.min(1-t,1-r,1-n);return[100*((1-t-l)/(1-l)||0),100*((1-r-l)/(1-l)||0),100*((1-n-l)/(1-l)||0),100*l]},a.rgb.keyword=function(e){let t;let r=l[e];if(r)return r;let a=1/0;for(let r of Object.keys(n)){let l=n[r],i=(e[0]-l[0])**2+(e[1]-l[1])**2+(e[2]-l[2])**2;i<a&&(a=i,t=r)}return t},a.keyword.rgb=function(e){return n[e]},a.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;let l=.4124*t+.3576*r+.1805*n,a=.2126*t+.7152*r+.0722*n,i=.0193*t+.1192*r+.9505*n;return[100*l,100*a,100*i]},a.rgb.lab=function(e){let t=a.rgb.xyz(e),r=t[0],n=t[1],l=t[2];r/=95.047,n/=100,l/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,l=l>.008856?l**(1/3):7.787*l+16/116;let i=116*n-16,o=500*(r-n),s=200*(n-l);return[i,o,s]},a.hsl.rgb=function(e){let t,r,n;let l=e[0]/360,a=e[1]/100,i=e[2]/100;if(0===a)return[n=255*i,n,n];t=i<.5?i*(1+a):i+a-i*a;let o=2*i-t,s=[0,0,0];for(let e=0;e<3;e++)(r=l+-(1/3*(e-1)))<0&&r++,r>1&&r--,n=6*r<1?o+(t-o)*6*r:2*r<1?t:3*r<2?o+(t-o)*(2/3-r)*6:o,s[e]=255*n;return s},a.hsl.hsv=function(e){let t=e[0],r=e[1]/100,n=e[2]/100,l=r,a=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,l*=a<=1?a:2-a;let i=(n+r)/2,o=0===n?2*l/(a+l):2*r/(n+r);return[t,100*o,100*i]},a.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,n=e[2]/100,l=t-Math.floor(t),a=255*n*(1-r),i=255*n*(1-r*l),o=255*n*(1-r*(1-l));switch(n*=255,Math.floor(t)%6){case 0:return[n,o,a];case 1:return[i,n,a];case 2:return[a,n,o];case 3:return[a,i,n];case 4:return[o,a,n];case 5:return[n,a,i]}},a.hsv.hsl=function(e){let t,r;let n=e[0],l=e[1]/100,a=e[2]/100,i=Math.max(a,.01);r=(2-l)*a;let o=(2-l)*i;return[n,100*(l*i/(o<=1?o:2-o)||0),100*(r/=2)]},a.hwb.rgb=function(e){let t,r,n,l;let a=e[0]/360,i=e[1]/100,o=e[2]/100,s=i+o;s>1&&(i/=s,o/=s);let u=Math.floor(6*a),c=1-o;t=6*a-u,(1&u)!=0&&(t=1-t);let d=i+t*(c-i);switch(u){default:case 6:case 0:r=c,n=d,l=i;break;case 1:r=d,n=c,l=i;break;case 2:r=i,n=c,l=d;break;case 3:r=i,n=d,l=c;break;case 4:r=d,n=i,l=c;break;case 5:r=c,n=i,l=d}return[255*r,255*n,255*l]},a.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,n=e[2]/100,l=e[3]/100;return[255*(1-Math.min(1,t*(1-l)+l)),255*(1-Math.min(1,r*(1-l)+l)),255*(1-Math.min(1,n*(1-l)+l))]},a.xyz.rgb=function(e){let t,r,n;let l=e[0]/100,a=e[1]/100,i=e[2]/100;return t=(t=3.2406*l+-1.5372*a+-.4986*i)>.0031308?1.055*t**(1/2.4)-.055:12.92*t,r=(r=-.9689*l+1.8758*a+.0415*i)>.0031308?1.055*r**(1/2.4)-.055:12.92*r,n=(n=.0557*l+-.204*a+1.057*i)>.0031308?1.055*n**(1/2.4)-.055:12.92*n,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]},a.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;let l=116*r-16,a=500*(t-r),i=200*(r-n);return[l,a,i]},a.lab.xyz=function(e){let t,r,n;let l=e[0],a=e[1],i=e[2];t=a/500+(r=(l+16)/116),n=r-i/200;let o=r**3,s=t**3,u=n**3;return r=(o>.008856?o:(r-16/116)/7.787)*100,[t=(s>.008856?s:(t-16/116)/7.787)*95.047,r,n=(u>.008856?u:(n-16/116)/7.787)*108.883]},a.lab.lch=function(e){let t;let r=e[0],n=e[1],l=e[2];return(t=360*Math.atan2(l,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+l*l),t]},a.lch.lab=function(e){let t=e[0],r=e[1],n=e[2],l=n/360*2*Math.PI;return[t,r*Math.cos(l),r*Math.sin(l)]},a.rgb.ansi16=function(e,t=null){let[r,n,l]=e,i=null===t?a.rgb.hsv(e)[2]:t;if(0===(i=Math.round(i/50)))return 30;let o=30+(Math.round(l/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===i&&(o+=60),o},a.hsv.ansi16=function(e){return a.rgb.ansi16(a.hsv.rgb(e),e[2])},a.rgb.ansi256=function(e){let t=e[0],r=e[1],n=e[2];return t===r&&r===n?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},a.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];let r=(~~(e>50)+1)*.5,n=(1&t)*r*255,l=(t>>1&1)*r*255,a=(t>>2&1)*r*255;return[n,l,a]},a.ansi256.rgb=function(e){let t;if(e>=232){let t=(e-232)*10+8;return[t,t,t]}e-=16;let r=Math.floor(e/36)/5*255,n=Math.floor((t=e%36)/6)/5*255;return[r,n,t%6/5*255]},a.rgb.hex=function(e){let t=((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2])),r=t.toString(16).toUpperCase();return"000000".substring(r.length)+r},a.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map(e=>e+e).join(""));let n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},a.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255,l=Math.max(Math.max(t,r),n),a=Math.min(Math.min(t,r),n),i=l-a;return[360*((i<=0?0:l===t?(r-n)/i%6:l===r?2+(n-t)/i:4+(t-r)/i)/6%1),100*i,100*(i<1?a/(1-i):0)]},a.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r),l=0;return n<1&&(l=(r-.5*n)/(1-n)),[e[0],100*n,100*l]},a.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=t*r,l=0;return n<1&&(l=(r-n)/(1-n)),[e[0],100*n,100*l]},a.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];let l=[0,0,0],a=t%1*6,i=a%1,o=1-i,s=0;switch(Math.floor(a)){case 0:l[0]=1,l[1]=i,l[2]=0;break;case 1:l[0]=o,l[1]=1,l[2]=0;break;case 2:l[0]=0,l[1]=1,l[2]=i;break;case 3:l[0]=0,l[1]=o,l[2]=1;break;case 4:l[0]=i,l[1]=0,l[2]=1;break;default:l[0]=1,l[1]=0,l[2]=o}return s=(1-r)*n,[(r*l[0]+s)*255,(r*l[1]+s)*255,(r*l[2]+s)*255]},a.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t),l=0;return n>0&&(l=t/n),[e[0],100*l,100*n]},a.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100,n=r*(1-t)+.5*t,l=0;return n>0&&n<.5?l=t/(2*n):n>=.5&&n<1&&(l=t/(2*(1-n))),[e[0],100*l,100*n]},a.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,n=t+r*(1-t);return[e[0],(n-t)*100,(1-n)*100]},a.hwb.hcg=function(e){let t=e[1]/100,r=e[2]/100,n=1-r,l=n-t,a=0;return l<1&&(a=(n-l)/(1-l)),[e[0],100*l,100*a]},a.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},a.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},a.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},a.gray.hsl=function(e){return[0,0,e[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(e){return[0,100,e[0]]},a.gray.cmyk=function(e){return[0,0,0,e[0]]},a.gray.lab=function(e){return[e[0],0,0]},a.gray.hex=function(e){let t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},a.rgb.gray=function(e){let t=(e[0]+e[1]+e[2])/3;return[t/255*100]}},2085:function(e,t,r){let n=r(8168),l=r(4111),a={},i=Object.keys(n);i.forEach(e=>{a[e]={},Object.defineProperty(a[e],"channels",{value:n[e].channels}),Object.defineProperty(a[e],"labels",{value:n[e].labels});let t=l(e),r=Object.keys(t);r.forEach(r=>{let n=t[r];a[e][r]=function(e){let t=function(...t){let r=t[0];if(null==r)return r;r.length>1&&(t=r);let n=e(t);if("object"==typeof n)for(let e=n.length,t=0;t<e;t++)n[t]=Math.round(n[t]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),a[e][r].raw=function(e){let t=function(...t){let r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)})}),e.exports=a},4111:function(e,t,r){let n=r(8168);e.exports=function(e){let t=function(e){let t=function(){let e={},t=Object.keys(n);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){let e=r.pop(),l=Object.keys(n[e]);for(let n=l.length,a=0;a<n;a++){let n=l[a],i=t[n];-1===i.distance&&(i.distance=t[e].distance+1,i.parent=e,r.unshift(n))}}return t}(e),r={},l=Object.keys(t);for(let e=l.length,a=0;a<e;a++){let e=l[a],i=t[e];null!==i.parent&&(r[e]=function(e,t){let r=[t[e].parent,e],l=n[t[e].parent][e],a=t[e].parent;for(;t[a].parent;)r.unshift(t[a].parent),l=function(e,t){return function(r){return t(e(r))}}(n[t[a].parent][a],l),a=t[a].parent;return l.conversion=r,l}(e,t))}return r}},8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),l=r(1757),a=l._(r(7294)),i=r(3935),o=n._(r(2636)),s=r(5471),u=r(3735),c=r(3341);r(4210);let d=r(9955),f=n._(r(7746)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!1};function g(e,t,r,n,l,a){let i=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===i)return;e["data-loaded-src"]=i;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&l(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function b(e){let[t,r]=a.version.split("."),n=parseInt(t,10),l=parseInt(r,10);return n>18||18===n&&l>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:l,height:i,width:o,decoding:s,className:u,style:c,fetchPriority:d,placeholder:f,loading:h,unoptimized:m,fill:p,onLoadRef:y,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:k,onLoad:M,onError:x,...S}=e;return a.default.createElement("img",{...S,...b(d),loading:h,width:o,height:i,decoding:s,"data-nimg":p?"fill":"1",className:u,style:c,sizes:l,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,f,y,v,w,m))},[r,f,y,v,w,x,m,t]),onLoad:e=>{let t=e.currentTarget;g(t,f,y,v,w,m)},onError:e=>{k(!0),"blur"===f&&w(!0),x&&x(e)}})});function p(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t?((0,i.preload)(r.src,n),null):a.default.createElement(o.default,null,a.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),l=(0,a.useMemo)(()=>{let e=h||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:o}=e,g=(0,a.useRef)(i);(0,a.useEffect)(()=>{g.current=i},[i]);let b=(0,a.useRef)(o);(0,a.useEffect)(()=>{b.current=o},[o]);let[y,v]=(0,a.useState)(!1),[w,k]=(0,a.useState)(!1),{props:M,meta:x}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:l,blurComplete:y,showAltText:w});return a.default.createElement(a.default.Fragment,null,a.default.createElement(m,{...M,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:k,ref:t}),x.priority?a.default.createElement(p,{isAppRouter:!r,imgAttributes:M}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(4210);let n=r(7757),l=r(3735);function a(e){return void 0!==e.default}function i(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:h=!1,loading:g,className:b,quality:m,width:p,height:y,fill:v=!1,style:w,onLoad:k,onLoadingComplete:M,placeholder:x="empty",blurDataURL:S,fetchPriority:j,layout:E,objectFit:_,objectPosition:P,lazyBoundary:C,lazyRoot:z,...O}=e,{imgConf:I,showAltText:R,blurComplete:A,defaultLoader:q}=t,N=I||l.imageConfigDefault;if("allSizes"in N)o=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);o={...N,allSizes:e,deviceSizes:t}}let D=O.loader||q;delete O.loader,delete O.srcSet;let L="__next_img_default"in D;if(L){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let W="",U=i(p),B=i(y);if("object"==typeof(r=c)&&(a(r)||void 0!==r.src)){let e=a(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,W=e.src,!v){if(U||B){if(U&&!B){let t=U/e.width;B=Math.round(e.height*t)}else if(!U&&B){let t=B/e.height;U=Math.round(e.width*t)}}else U=e.width,B=e.height}}let F=!h&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,F=!1),o.unoptimized&&(f=!0),L&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),h&&(j="high");let G=i(m),T=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:P}:{},R?{}:{color:"transparent"},w),V="blur"===x&&S&&!A?{backgroundSize:T.objectFit||"cover",backgroundPosition:T.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:U,heightInt:B,blurWidth:s,blurHeight:u,blurDataURL:S,objectFit:T.objectFit})+'")'}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:l,quality:a,sizes:i,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:l}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:a,kind:"x"}}(t,l,i),c=s.length-1;return{sizes:i||"w"!==u?i:"100vw",srcSet:s.map((e,n)=>o({config:t,src:r,quality:a,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:o({config:t,src:r,quality:a,width:s[c]})}}({config:o,src:c,unoptimized:f,width:U,quality:G,sizes:d,loader:D}),Y={...O,loading:F?"lazy":g,fetchPriority:j,width:U,height:B,decoding:"async",className:b,style:{...T,...V},sizes:J.sizes,srcSet:J.srcSet,src:J.src},H={unoptimized:f,priority:h,placeholder:x,fill:v};return{props:Y,meta:H}}},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:l,blurDataURL:a,objectFit:i}=e,o=n||t,s=l||r,u=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&l?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2555:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},unstable_getImgProps:function(){return s}});let n=r(8754),l=r(5471),a=r(4210),i=r(8872),o=n._(r(7746)),s=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=i.Image},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:l}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5675:function(e,t,r){e.exports=r(2555)},1163:function(e,t,r){e.exports=r(6885)},3589:function(e,t,r){"use strict";r.d(t,{S:function(){return c}});var n=r(7294),l=r(5364);let a=(0,n.createContext)(null);var i=r(6337);let o=e=>!e.isLayoutDirty&&e.willUpdate(!1),s=e=>!0===e,u=e=>s(!0===e)||"id"===e,c=({children:e,id:t,inherit:r=!0})=>{let c=(0,n.useContext)(l.p),d=(0,n.useContext)(a),[f,h]=(0,i.N)(),g=(0,n.useRef)(null),b=c.id||d;null===g.current&&(u(r)&&b&&(t=t?b+"-"+t:b),g.current={id:t,group:s(r)&&c.group||function(){let e=new Set,t=new WeakMap,r=()=>e.forEach(o);return{add:n=>{e.add(n),t.set(n,n.addEventListener("willUpdate",r))},remove:n=>{e.delete(n);let l=t.get(n);l&&(l(),t.delete(n)),r()},dirty:r}}()});let m=(0,n.useMemo)(()=>({...g.current,forceRender:f}),[h]);return n.createElement(l.p.Provider,{value:m},e)}},3093:function(e,t,r){"use strict";r.d(t,{A:function(){return o}});var n=r(7294),l=r(6014),a=r(1492),i=r(6681);function o({children:e,isValidProp:t,...r}){t&&(0,a.K)(t),(r={...(0,n.useContext)(l._),...r}).isStatic=(0,i.h)(()=>r.isStatic);let o=(0,n.useMemo)(()=>r,[JSON.stringify(r.transition),r.transformPagePoint,r.reducedMotion]);return n.createElement(l._.Provider,{value:o},e)}}}]);