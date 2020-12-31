(()=>{"use strict";var t={197:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tbackground-color: #141414;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n}",""]);const o=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},202:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var r=n(379),i=n.n(r),o=n(197);i()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},379:(t,e,n)=>{var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function s(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],d=n[c]||0,h="".concat(c," ").concat(d);n[c]=d+1;var l=s(h),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(u)):o.push({identifier:h,updater:y(u,e),references:1}),r.push(h)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var d,h=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function l(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=h(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,p=0;function y(t,e){var n,r,i;if(e.singleton){var o=p++;n=f||(f=c(e)),r=l.bind(null,n,o,!1),i=l.bind(null,n,o,!0)}else n=c(e),r=u.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var c=a(t,e),d=0;d<n.length;d++){var h=s(n[d]);0===o[h].references&&(o[h].updater(),o.splice(h,1))}n=c}}}},693:(t,e,n)=>{const{GAME_WIDTH:r,GAME_HEIGHT:i}=n(786);t.exports=class{constructor(t=r/2,e=i/2){this.x=t,this.y=e}interp(t,e,n){this.x+=(t-this.x)*n,this.y+=(e-this.y)*n}setTo(t,e){this.x=t,this.y=e}}},786:t=>{t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,BACKGROUND_COLOR:"#c8c8c8"}},565:(t,e,n)=>{const r=n(804),i=n(140),o=n(693),{BACKGROUND_COLOR:s}=n(786);t.exports=class{constructor(){this.wave=0,this.towers=[],this.fov=.1,this.camera=new o,this.path=new i([{x:0,y:0},{x:100,y:100},{x:200,y:300},{x:700,y:400},{x:690,y:250},{x:800,y:250},{x:850,y:200},{x:900,y:100},{x:950,y:150},{x:1e3,y:175},{x:1e3,y:200},{x:1100,y:350},{x:1250,y:200},{x:1300,y:200},{x:1350,y:300},{x:1400,y:400},{x:1200,y:500},{x:1e3,y:600},{x:500,y:600},{x:450,y:550},{x:300,y:650},{x:400,y:700},{x:1e3,y:750},{x:1300,y:800},{x:1500,y:850},{x:1600,y:900}],70),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),r(this.canvas),this.listen("resize",(()=>r(this.canvas))),document.body.appendChild(this.canvas)}listen(t,e){window.addEventListener(t,e.bind(this))}start(){(function t(){this.update(),this.render(),requestAnimationFrame(t.bind(this))}).bind(this)()}render(){this.ctx.fillStyle=s,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.path.render(this.ctx,this.camera)}update(){}}},140:(t,e,n)=>{const r=n(238);t.exports=class{constructor(t,e){this.paths=t,this.pathSize=e}idx(t){return this.paths[t]}lineToPaths(t,e){for(const{x:n,y:i}of this.paths){const o=r(n,i,e);t.lineTo(o.x,o.y)}}render(t,e){t.beginPath(),t.lineJoin="round",this.lineToPaths(t,e),t.strokeStyle="black",t.lineWidth=this.pathSize,t.stroke(),t.beginPath(),this.lineToPaths(t,e),t.strokeStyle="white",t.lineWidth=.8*this.pathSize,t.stroke(),t.beginPath(),this.lineToPaths(t,e),t.strokeStyle="red",t.lineWidth=2,t.stroke()}}},238:(t,e,n)=>{const{GAME_WIDTH:r,GAME_HEIGHT:i}=n(786);t.exports=function(t,e,n){return{x:Math.round(t-n.x+r/2),y:Math.round(e-n.y+i/2)}}},804:(t,e,n)=>{const{GAME_WIDTH:r,GAME_HEIGHT:i}=n(786);t.exports=function(t){t&&(t.width!==r&&(t.width=r),t.height!==i&&(t.height=i),t.style.transform=`scale(${Math.min(window.innerWidth/r,window.innerHeight/i)})`,t.style.left=(window.innerWidth-r)/2+"px",t.style.top=(window.innerHeight-i)/2+"px")}}},e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(202),(new(n(565))).start()})();