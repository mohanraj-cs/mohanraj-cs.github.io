(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4571],{4571:function(e,t,n){"use strict";var r=n(1864),i=n(64358);n(48764).Buffer;const o=e=>(0,r.extname)(e).toLowerCase(),s=async(e,t,n,r)=>e&&0!==e.length?e.reduce((async(e,s)=>{var a;await(".css"===o(s)?(a=encodeURI(s),new Promise(((e,t)=>{if([...document.querySelectorAll("link[rel=stylesheet]")].some((e=>e.href.endsWith(a))))return void e(new Event("Already loaded."));const n=document.createElement("link");n.rel="stylesheet",n.fetchPriority="high",n.href=a,n.addEventListener("error",t,i.K7),n.addEventListener("load",e,i.K7),document.head.append(n)}))):((e,t,n,r)=>new Promise(((o,s)=>{const a=[...document.scripts].find((t=>t.src.endsWith(e)));if(a){if(!n)return void o(new Event("Already loaded."));a.remove()}const l=document.createElement("script");l.async=!1,t&&(l.defer=!0),r&&(l.type="module"),l.fetchPriority="high",l.src=e,l.addEventListener("error",s,i.K7),l.addEventListener("load",o,i.K7),document.head.append(l)})))(encodeURI(s),t,n,r))}),Promise.resolve()):Promise.resolve();const a=["/System/tvm/tvmjs_runtime.wasi.js","/System/tvm/tvmjs.bundle.js","/Program Files/StableDiffusion/tokenizers-wasm/tokenizers_wasm.js","/Program Files/StableDiffusion/stable_diffusion.js"],l=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n||(window.tvmjsGlobalEnv=window.tvmjsGlobalEnv||{},await s(a)),globalThis.tvmjsGlobalEnv.getTokenizer=async()=>(globalThis.tvmjsGlobalEnv.initialized||await globalThis.Tokenizer.init(),globalThis.tvmjsGlobalEnv.initialized=!0,new globalThis.Tokenizer.TokenizerWasm(await(await fetch("/Program Files/StableDiffusion/tokenizers-wasm/tokenizer.json")).text())),globalThis.tvmjsGlobalEnv.canvas=globalThis.tvmjsGlobalEnv.canvas||t;const{prompts:r}=e;globalThis.tvmjsGlobalEnv.prompts=r?.length?r:[["A photo of an astronaut riding a horse on mars",""]],await globalThis.tvmjsGlobalEnv.asyncOnGenerate()};globalThis.addEventListener("message",(e=>{let{data:t}=e;if("init"===t)globalThis.tvmjsGlobalEnv=globalThis.tvmjsGlobalEnv||{},globalThis.tvmjsGlobalEnv.logger=(e,t)=>{globalThis.postMessage({message:t,type:e})},globalThis.importScripts(...a);else if(!(t instanceof DOMRect)){const{canvas:e,config:n}=t;l(n,e,!0).then((()=>{globalThis.tvmjsGlobalEnv.logger("","")}))}}),{passive:!0})},64358:function(e,t,n){"use strict";n.d(t,{K7:function(){return l},i2:function(){return a},i6:function(){return r}});const r=["https://<CID>.ipfs.cf-ipfs.com/","https://<CID>.ipfs.dweb.link/","https://cloudflare-ipfs.com/ipfs/<CID>/","https://gateway.ipfs.io/ipfs/<CID>/"],i="/Users/Public",o=new Set([".cr2",".dng",".nef",".tif",".tiff"]),s=(new Set([".jpeg",".jpg",".png"]),new Set([...o,".ani",".apng",".avif",".bmp",".cur",".gif",".ico",".jfif",".jif",".jpe",".jpeg",".jpg",".jxl",".pjp",".pjpeg",".png",".svg",".qoi",".webp",".xbm"])),a=(new Set([...o,".jxl",".qoi",".svg"]),new Set([".ani",".cur"]),new Set([".bmp",".gif",".ico",".jfif",".jpe",".jpeg",".jpg",".png",".tif",".tiff",".webp"]),1e3),l=(new Set([".001",".7z",".ace",".apk",".appx",".arj",".bz2",".bzip2",".cab",".chm",".chw",".cpio",".deb",".dll",".dmg",".doc",".docx",".epub",".esd",".exe",".flv",".gz",".gzip",".hfs",".hxs",".img",".ipa",".jar",".lha",".lit",".lzh",".lzma",".mbr",".msi",".ntfs",".ods",".odt",".ova",".pages",".pkg",".ppt",".qcow",".qcow2",".r00",".rar",".rpm",".squashfs",".swf",".swm",".sys",".tar",".taz",".tgz",".txz",".udf",".vdi",".vhd",".vhdx",".vmdk",".wim",".xar",".xip",".xls",".xlsx",".xpi",".xz",".z",".zipx"]),new Set([".iso",".jsdos",".wsz",".zip"]),{once:!0,passive:!0}),c=(new Set(["desktop.ini"]),new Set(["/.deletedFiles.log"]),`${i}/Desktop`),f=(new Set([c]),new Set([".aac",".oga",".wav"])),h=new Set([".asx",".m3u",".pls"]),g=new Set([".m4v",".mkv",".mov",".mp4",".ogg",".ogm",".ogv",".webm"]);new Set([...f,...h,...s,...o,...g,".ani",".exe",".mp3",".sav",".whtml"])},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",i=0):i=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),o=a,s=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=a,s=0;continue}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,a):r=e.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var r={resolve:function(){for(var e,r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s;o>=0?s=arguments[o]:(void 0===e&&(e=""),s=e),t(s),0!==s.length&&(r=s+"/"+r,i=47===s.charCodeAt(0))}return r=n(r,!i),i?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,a=1;a<n.length&&47===n.charCodeAt(a);++a);for(var l=n.length-a,c=s<l?s:l,f=-1,h=0;h<=c;++h){if(h===c){if(l>c){if(47===n.charCodeAt(a+h))return n.slice(a+h+1);if(0===h)return n.slice(a+h)}else s>c&&(47===e.charCodeAt(i+h)?f=h:0===h&&(f=0));break}var g=e.charCodeAt(i+h);if(g!==n.charCodeAt(a+h))break;47===g&&(f=h)}var d="";for(h=i+f+1;h<=o;++h)h!==o&&47!==e.charCodeAt(h)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(a+f):(a+=f,47===n.charCodeAt(a)&&++a,n.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return-1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var a=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!s){i=r+1;break}}else-1===l&&(s=!1,l=r+1),a>=0&&(c===n.charCodeAt(a)?-1===--a&&(o=r):(a=-1,o=l))}return i===o?o=l:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){i=r+1;break}}else-1===o&&(s=!1,o=r+1);return-1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===i&&(o=!1,i=a+1),46===l?-1===n?n=a:1!==s&&(s=1):-1!==n&&(s=-1);else if(!o){r=a+1;break}}return-1===n||-1===i||0===s||1===s&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,i=e.charCodeAt(0),o=47===i;o?(n.root="/",r=1):r=0;for(var s=-1,a=0,l=-1,c=!0,f=e.length-1,h=0;f>=r;--f)if(47!==(i=e.charCodeAt(f)))-1===l&&(c=!1,l=f+1),46===i?-1===s?s=f:1!==h&&(h=1):-1!==s&&(h=-1);else if(!c){a=f+1;break}return-1===s||-1===l||0===h||1===h&&s===l-1&&s===a+1?-1!==l&&(n.base=n.name=0===a&&o?e.slice(1,l):e.slice(a,l)):(0===a&&o?(n.name=e.slice(1,s),n.base=e.slice(1,l)):(n.name=e.slice(a,s),n.base=e.slice(a,l)),n.ext=e.slice(s,l)),a>0?n.dir=e.slice(0,a-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(114);e.exports=i}()}}]);