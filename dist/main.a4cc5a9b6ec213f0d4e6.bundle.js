(()=>{"use strict";var t={23:t=>{t.exports=JSON.parse('{"enemy":[{"type":"basic","amount":10,"time-in-between-ms":500,"delay":1600},{"type":"fast","amount":5,"delay":0,"time-in-between-ms":400},{"type":"strong","amount":25,"delay":6200,"time-in-between-ms":600}],"path":[{"x":-200,"y":-200},{"x":100,"y":100},{"x":200,"y":300},{"x":700,"y":400},{"x":690,"y":250},{"x":800,"y":250},{"x":850,"y":200},{"x":900,"y":100},{"x":950,"y":150},{"x":1000,"y":175},{"x":1000,"y":200},{"x":1100,"y":350},{"x":1250,"y":200},{"x":1300,"y":200},{"x":1350,"y":300},{"x":1400,"y":400},{"x":1200,"y":500},{"x":1000,"y":600},{"x":500,"y":600},{"x":450,"y":550},{"x":300,"y":650},{"x":400,"y":700},{"x":1000,"y":750},{"x":1300,"y":800},{"x":1500,"y":850},{"x":1800,"y":1100}],"waves":[0,50],"waveLocation":{"x":1500,"y":50},"spots":[{"x":170,"y":20},{"x":50,"y":220},{"x":420,"y":240},{"x":740,"y":100},{"x":1120,"y":160},{"x":1320,"y":560},{"x":340,"y":480},{"x":480,"y":820},{"x":740,"y":840},{"x":1200,"y":900},{"x":1400,"y":740},{"x":1200,"y":360},{"x":889,"y":479}]}')},197:(t,s,e)=>{e.d(s,{Z:()=>h});var i=e(645),a=e.n(i)()((function(t){return t[1]}));a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Potta+One&display=swap);"]),a.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tbackground-color: #cfc3a5;\r\n\tfont-family: 'Potta One', cursive;\r\n\tfont-size: 16px;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n}\r\n.menu {\r\n\tdisplay: flex;\r\n\tflex-direction:column;\r\n\tjustify-content:center;\r\n\talign-items: center;\r\n\tmin-height:100vh;\r\n}\r\n.menu h1 {\r\n\tcolor: #5e3c00;\r\n\tfont-size:5rem;\r\n}\r\n.button-container {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction:column;\r\n\tmargin: 10px;\r\n}\r\nbutton {\r\n\tborder: 10px solid #573700;\r\n\tcursor: pointer;\r\n\tpadding: 10px;\r\n\tbackground-color: #b37710;\r\n\tmargin: 10px;\r\n\tborder-radius: 10px;\r\n\twidth: 200px;\r\n\theight: 75px;\r\n\ttext-align:center;\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: bold;\r\n\tcolor: #573700;\r\n}\r\na {\r\n\tdisplay: block;\r\n}\r\n.menu .help {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n.credits {\r\n\tposition:absolute;\r\n\tleft: 10px;\r\n\tbottom: 10px;\r\n}",""]);const h=a},645:t=>{t.exports=function(t){var s=[];return s.toString=function(){return this.map((function(s){var e=t(s);return s[2]?"@media ".concat(s[2]," {").concat(e,"}"):e})).join("")},s.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(i)for(var h=0;h<this.length;h++){var n=this[h][0];null!=n&&(a[n]=!0)}for(var r=0;r<t.length;r++){var o=[].concat(t[r]);i&&a[o[0]]||(e&&(o[2]?o[2]="".concat(e," and ").concat(o[2]):o[2]=e),s.push(o))}},s}},202:(t,s,e)=>{e.r(s),e.d(s,{default:()=>n});var i=e(379),a=e.n(i),h=e(197);a()(h.Z,{insert:"head",singleton:!1});const n=h.Z.locals||{}},379:(t,s,e)=>{var i,a=function(){var t={};return function(s){if(void 0===t[s]){var e=document.querySelector(s);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[s]=e}return t[s]}}(),h=[];function n(t){for(var s=-1,e=0;e<h.length;e++)if(h[e].identifier===t){s=e;break}return s}function r(t,s){for(var e={},i=[],a=0;a<t.length;a++){var r=t[a],o=s.base?r[0]+s.base:r[0],l=e[o]||0,c="".concat(o," ").concat(l);e[o]=l+1;var d=n(c),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(h[d].references++,h[d].updater(u)):h.push({identifier:c,updater:x(u,s),references:1}),i.push(c)}return i}function o(t){var s=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var h=e.nc;h&&(i.nonce=h)}if(Object.keys(i).forEach((function(t){s.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(s);else{var n=a(t.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}return s}var l,c=(l=[],function(t,s){return l[t]=s,l.filter(Boolean).join("\n")});function d(t,s,e,i){var a=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=c(s,a);else{var h=document.createTextNode(a),n=t.childNodes;n[s]&&t.removeChild(n[s]),n.length?t.insertBefore(h,n[s]):t.appendChild(h)}}function u(t,s,e){var i=e.css,a=e.media,h=e.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),h&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(h))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var y=null,p=0;function x(t,s){var e,i,a;if(s.singleton){var h=p++;e=y||(y=o(s)),i=d.bind(null,e,h,!1),a=d.bind(null,e,h,!0)}else e=o(s),i=u.bind(null,e,s),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;i(t=s)}else a()}}t.exports=function(t,s){(s=s||{}).singleton||"boolean"==typeof s.singleton||(s.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var e=r(t=t||[],s);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var a=n(e[i]);h[a].references--}for(var o=r(t,s),l=0;l<e.length;l++){var c=n(e[l]);0===h[c].references&&(h[c].updater(),h.splice(c,1))}e=o}}}},627:(t,s,e)=>{const i=e(503),{GAME:a}=e(556);t.exports=class{constructor(t,s,e,i,a,h,n,r){this.x=t,this.y=s,this.speed=e,this.angle=i,this.xv=Math.cos(this.angle)*this.speed,this.yv=Math.sin(this.angle)*this.speed,this.color=r.color,this.radius=r.size/2,this.type=r.name,this.x+=this.xv*a,this.y+=this.yv*a,this.range=h,this.traveled=0,this.opacity=1,this.damage=n}get offScreen(){return this.x-this.radius<-a.margin||this.x+this.radius>a.width+a.margin||this.y+this.radius>a.height+a.margin||this.y-this.radius<-a.margin}update(){this.x+=this.xv,this.y+=this.yv,this.traveled+=this.speed,this.traveled>this.range/2&&(this.opacity-=2/a.simulation_rate,this.opacity<=0&&(this.delete=!0))}render(t,s){const e=i(this.x,this.y,s);t.globalAlpha=this.opacity,t.fillStyle=this.color,t.beginPath(),t.arc(e.x,e.y,this.radius*s.scale,0,2*Math.PI),t.fill(),t.globalAlpha=1}}},567:(t,s,e)=>{e(503);const{GAME:i}=e(556),a=e(627);t.exports=class extends a{constructor(t,s,e,i,a,h,n,r){super(t,s,e,i,a,h,n,r)}}},693:(t,s,e)=>{const{GAME:i}=e(556),a=e(295);t.exports=class{constructor(t=i.width/2,s=i.height/2,e=2.5){this.x=t,this.y=s,this.scale=.8,this.scalingBounds=[.2,20],this.speed=e,this.xv=0,this.yv=0,this.friction=.6}zoomIn(){this.scale+=.2,this.scale=a(this.scale,2)>=this.scalingBounds[1]?this.scalingBounds[0]:a(this.scale,2)}zoomOut(){this.scale-=.2,this.scale=a(this.scale,2)<=this.scalingBounds[0]?this.scalingBounds[0]:a(this.scale,2)}interp(t,s,e){e<1/30&&(this.xv+=.45*(t-this.x)*e*this.speed,this.yv+=.45*(s-this.y)*e*this.speed,this.xv+=.9*(i.width/2-this.x)*e*this.speed*5,this.yv+=.9*(i.height/2-this.y)*e*this.speed*5,this.xv*=Math.pow(this.friction,e*i.simulation_rate),this.yv*=Math.pow(this.friction,e*i.simulation_rate),this.x+=this.xv,this.y+=this.yv)}setTo(t,s){this.x=t,this.y=s}}},688:(t,s,e)=>{const i=e(17),a=e(131),h=e(198);t.exports={Basic:i,Fast:a,Strong:h}},17:(t,s,e)=>{const{BASIC_ENEMY:i,GAME:a}=e(556),h=e(503);t.exports=class{constructor(t,s=i){this.pathIndex=1,this.path=t,this.stats={...s},this.radius=this.stats.size/2,this.color=this.stats.color,this.accuracy=5,this.speed=this.stats.speed,this.health=this.stats.health,this.maxHealth=this.stats.health,this.showStats=!1,this.deadTimer=0,this.type=this.stats.name,this.x=this.lastPath.x,this.y=this.lastPath.y,this.calculateVelocity()}get dead(){return this.health<=0}lerp(t,s,e){return t*(1-e)+s*e}findAngle(){return Math.atan2(this.currentPath.y-this.lastPath.y,this.currentPath.x-this.lastPath.x)}calculateVelocity(){this.angle=this.findAngle(),this.xv=this.speed*Math.cos(this.angle)/this.accuracy,this.yv=this.speed*Math.sin(this.angle)/this.accuracy}update(t){if(this.dead)return this.deadTimer++,void(this.deadTimer>a.simulation_rate/2&&(this.delete=!0));for(let t=0;t<this.accuracy;t++)this.x+=this.xv,this.y+=this.yv,this.onPath&&(this.pathIndex++,this.x=this.lastPath.x,this.y=this.lastPath.y,this.currentPath||(this.pathIndex=1,this.x=this.path[0].x,this.y=this.path[0].y),this.calculateVelocity());for(let s=t.bullet.length-1;s>=0;s--){const e=t.bullet[s],i=e.x-this.x,a=e.y-this.y;Math.sqrt(i*i+a*a)<e.radius+this.radius&&(this.health-=e.damage,t.bullet.splice(s,1))}}get roundPos(){return{x:Math.round(this.x),y:Math.round(this.y)}}drawEnemy(t,s,e){t.fillStyle=s,this.dead&&(t.globalAlpha=1-this.deadTimer/(a.simulation_rate/2)),t.beginPath();const i=h(this.x,this.y,e);t.arc(i.x,i.y,this.radius*e.scale,0,2*Math.PI),t.fill(),t.fillStyle="red",t.strokeStyle="black",t.lineWidth=2,t.globalAlpha=1,this.dead||(t.fillRect(i.x-25,i.y-this.radius-5,Math.round(this.health/this.maxHealth*50),10),t.strokeRect(i.x-25,i.y-this.radius-5,50,10))}showEnemyStats(t,s){if(this.dead)return;t.globalAlpha=.3,t.fillStyle=this.color,t.textAlign="center",t.textBaseline="middle";const e=h(this.x,this.y,s);e.y>a.height/2&&(e.y-=this.stats.stats_height),t.fillRect(e.x-this.stats.stats_width/2,e.y,this.stats.stats_width,this.stats.stats_height),t.globalAlpha=.5,t.fillStyle="#2d2e2e",t.fillRect(e.x-this.stats.stats_width/2,e.y,this.stats.stats_width,this.stats.stats_height),t.fillStyle="white",t.fillRect(e.x-this.stats.stats_width/2,e.y,this.stats.stats_width,this.stats.stats_height),t.globalAlpha=1,t.fillStyle="black",t.font=22*s.scale+"px Arial",t.fillText(`Type: ${this.type}`,e.x,Math.round(e.y+this.stats.stats_height/4)),t.fillText(`Speed: ${Math.round(4*this.speed)}`,e.x,Math.round(e.y+this.stats.stats_height/4*2)),t.fillText(`Size: ${Math.round(this.stats.size)}`,e.x,Math.round(e.y+this.stats.stats_height/4*3))}render(t,s){this.drawEnemy(t,this.color,s)}get lastPath(){return this.path[this.pathIndex-1]}get onPath(){return Math.abs(this.currentPath.x-this.roundPos.x)<2&&Math.abs(this.currentPath.y-this.roundPos.y)<2}get nextPath(){return this.path[this.pathIndex+1]}get currentPath(){return this.path[this.pathIndex]}}},131:(t,s,e)=>{const i=e(17),{FAST_ENEMY:a}=e(556);t.exports=class extends i{constructor(t,s=a){super(t,s)}}},198:(t,s,e)=>{const i=e(17),{STRONG_ENEMY:a}=e(556);t.exports=class extends i{constructor(t,s=a){super(t,s)}}},565:(t,s,e)=>{const i=e(736),a=e(140),h=e(693),n=e(1),r=e(711),{GAME:o,CONTROLS:l}=e(556),c=e(662),d=e(448);t.exports=class{constructor(){this.wave=0,this.towers=[],this.events=Object.create(null),this.camera=new h,this.map=e(23),this.path=this.map.path,this.pathObject=new a(this.path),this.canvas=document.createElement("canvas"),this.GUI={canvas:document.createElement("canvas"),last:{money:null}},this.GUI.ctx=this.GUI.canvas.getContext("2d"),this.ctx=this.canvas.getContext("2d"),this.state=new n,this.makeSpots(),this.state.waveLocation=this.map.waveLocation,this.tick=0,this.time=window.performance.now(),this.startTime=window.performance.now(),this.mouse={x:0,y:0},this.resize(),this.listen("resize",(()=>{this.resize()})),this.listen("mousemove",(t=>{const s=this.canvas.getBoundingClientRect();this.mouse.x=Math.round((t.pageX-s.left)/this.scale),this.mouse.y=Math.round((t.pageY-s.top)/this.scale)})),this.controls=l,this.listen("keydown",this.trackKeys.bind(this)),this.listen("keyup",this.trackKeys.bind(this)),this.listen("mousedown",(()=>{this.state.handleMouseDown(this.mouse,this.camera)})),document.body.appendChild(this.canvas),document.body.appendChild(this.GUI.canvas)}resize(){this.scale=i(this.canvas),i(this.GUI.canvas)}trackKeys(t){t.repeat||this.controls[t.key.toLowerCase()]}makeSpots(){for(const t of this.map.spots)this.state.spots.push(new r(t.x,t.y))}newEvent(t,s){void 0===this.events[Math.round(s)]&&(this.events[Math.round(s)]=[]),this.events[Math.round(s)].push(t)}listen(t,s,e=window){e.addEventListener(t,s.bind(this))}stop(){this.afr&&window.cancelAnimationFrame(this.afr)}start(){d(this.path,this.map.enemy,this),this.lastTime=0,function t(s=0){this.delta=(s-this.lastTime)/1e3,this.lastTime=s,this.update(),this.render(),this.afr=requestAnimationFrame(t.bind(this))}.bind(this)()}render(){this.ctx.fillStyle=o.background_color,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.pathObject.render(this.ctx,this.camera),this.state.render(this.ctx,this.camera,this.GUI)}simulate(){this.state.simulate(this.mouse,this.camera)}update(){let t=c(this.startTime);for(t-this.tick>o.simulation_rate/3&&(this.startTime+=window.performance.now()-this.time,t=this.tick,this.tick-=1),this.camera.interp(this.mouse.x,this.mouse.y,this.delta),this.time=window.performance.now();this.tick<t;){if(this.events[this.tick]){for(const t of this.events[this.tick])t();delete this.events[this.tick]}this.simulate(),this.tick++}}}},427:(t,s,e)=>{const i=e(299);t.exports={money:i}},299:(t,s,e)=>{const{MONEY:i,GAME:a}=e(556),h=e(295);t.exports=function(t,s,e){if(t.last.money===e)return;t.last.money=e;const n=t.ctx;n.clearRect(0,0,t.canvas.width,t.canvas.height),n.fillStyle="#80db74",n.strokeStyle="#187d0b",n.lineWidth=10*s.scale;const r={x:Math.round(a.width-i.display_width+10*s.scale),y:Math.round(-10*s.scale)};n.roundRect(r.x,r.y,i.display_width,i.display_height,15*s.scale),n.fill(),n.stroke(),n.fillStyle="#137007",n.textAlign="center",n.textBaseline="middle",n.font="40px Trebuchet MS",n.fillText("$",Math.round(r.x+i.display_width/4),Math.round(r.y+i.display_height/2)),n.font="35px Arial",n.fillText(function(t){return t<=999?`${t}`:`${h(t/1e3,1)} K`}(e),Math.round(r.x+i.display_width/2+i.display_width/20),Math.round(r.y+i.display_height/2))},CanvasRenderingContext2D.prototype.roundRect=function(t,s,e,i,a){return e<2*a&&(a=e/2),i<2*a&&(a=i/2),this.beginPath(),this.moveTo(t+a,s),this.arcTo(t+e,s,t+e,s+i,a),this.arcTo(t+e,s+i,t,s+i,a),this.arcTo(t,s+i,t,s,a),this.arcTo(t,s,t+e,s,a),this.closePath(),this}},140:(t,s,e)=>{const i=e(503),{PATH:a}=e(556);t.exports=class{constructor(t){this.paths=t}idx(t){return this.paths[t]}lineToPaths(t,s){for(const{x:e,y:a}of this.paths){const h=i(e,a,s);t.lineTo(h.x,h.y)}}render(t,s){t.beginPath(),t.lineJoin="round",this.lineToPaths(t,s),t.strokeStyle=a.stroke_color,t.lineWidth=a.size*s.scale,t.stroke(),t.beginPath(),this.lineToPaths(t,s),t.strokeStyle=a.inside_color,t.lineWidth=.7*a.size*s.scale,t.stroke()}}},297:t=>{t.exports={playButton:document.querySelector(".play"),menu:document.querySelector(".menu")}},711:(t,s,e)=>{const{SPOT:i,TOWER:a}=e(556),{Basic:h,Pounder:n}=e(860),r=e(503);t.exports=class{constructor(t,s){this.x=t,this.y=s,this.radius=i.size/2,this.color=i.color,this.tower=Math.random()<.5?Math.random()<.5?null:new n(this.x,this.y):new h(this.x,this.y)}get fill(){return`rgb(${this.color}, ${this.color}, ${this.color})`}get hasTower(){return null!==this.tower}update(t,s,e){const a=r(this.x,this.y,s),h=t.x-a.x,n=t.y-a.y;this.color=i.color,Math.abs(h)<50&&Math.abs(n)<50&&!this.hasTower&&Math.sqrt(h*h+n*n)<this.radius&&(this.color=i.color-25),this.hasTower&&this.tower.simulate(e)}drawSpot(t,s){t.fillStyle=this.fill,t.beginPath();const e=r(this.x,this.y,s);t.arc(e.x,e.y,this.radius*s.scale,0,2*Math.PI),t.strokeStyle="black",t.lineWidth=3,t.stroke(),t.fill()}drawTowerData(t,s){t.fillStyle="rgba(50, 50, 50, 0.3)";const e=r(this.x,this.y,s);t.beginPath(),t.arc(e.x,e.y,this.tower.fov/2*s.scale,0,2*Math.PI),t.fill()}showTowerStats(t,s){this.hasTower&&this.tower.showStats(t,s)}drawSpotData(t,s){t.fillStyle="#877a56",t.globalAlpha=.6;const e=r(this.x,this.y,s);t.textAlign="center",t.textBaseline="middle",t.font="40px Arial",t.strokeStyle="#573700",t.lineWidth=10,"up"===this.showData&&(e.y-=a.display_height),t.fillRect(Math.round(e.x-a.display_width/2),e.y,a.display_width,a.display_height),t.globalAlpha=1,t.strokeRect(Math.round(e.x-a.display_width/2),e.y,a.display_width,a.display_height),t.strokeRect(Math.round(e.x-a.display_width/2+a.display_width/3),e.y,a.display_width/3,a.display_height)}drawData(t,s){this.hasTower?this.drawTowerData(t,s):this.drawSpotData(t,s)}render(t,s){this.drawSpot(t,s),this.hasTower&&this.tower.render(t,s)}}},1:(t,s,e)=>{const{GAME:i,PATH:a}=e(556),h=e(503),{money:n}=e(427);t.exports=class{constructor(){this.enemy=[],this.spots=[],this.bullet=[],this.wave=1,this.money=100,this.waveLocation={x:0,y:0}}intersect(t,s,e,i){const a=h(t.x,t.y,i),n=s.x-a.x,r=s.y-a.y;return!(Math.abs(n)>50||Math.abs(r)>50)&&Math.sqrt(n*n+r*r)<e}simulate(t,s){for(let t=this.bullet.length-1;t>=0;t--){const s=this.bullet[t];s.update(),s.delete&&this.bullet.splice(t,1)}let e=!1,i=null;for(let a=this.spots.length-1;a>=0;a--){const h=this.spots[a];h.update(t,s,this),h.showStats=!1,h.showData&&(e=!0),null===i&&h.hasTower&&this.intersect({x:h.x,y:h.y},t,h.radius,s)&&(i=a)}let a=null;for(let h=this.enemy.length-1;h>=0;h--){const n=this.enemy[h];n.update(this),n.showStats=!1,n.delete?(this.money+=50+Math.round(150*Math.random()),this.enemy.splice(h,1)):!e&&null===i&&null===a&&this.intersect({x:n.x,y:n.y},t,3*n.radius,s)&&(a=h)}null!=a&&this.enemy[a]&&(this.enemy[a].showStats=!0),null!=i&&this.spots[i]&&(this.spots[i].showStats=!0)}handleMouseDown(t,s){let e=null;for(let i=this.spots.length-1;i>=0;i--){const a=this.spots[i];a.showData=null,null===e&&this.intersect({x:a.x,y:a.y},t,a.radius,s)&&(e=i)}if(null!=e){const t=this.spots[e];t.y<i.height/2+i.height/10?t.showData="down":t.showData="up"}}drawPathEnds(t,s,e){t.fillStyle=a.ends_color,t.beginPath();const i=h(e[0].x,e[0].y,s);t.arc(i.x,i.y,a.ends_size/2*s.scale,0,2*Math.PI),t.fill(),t.beginPath();const n=h(e[e.length-1].x,e[e.length-1].y,s);t.arc(n.x,n.y,a.ends_size/2*s.scale,0,2*Math.PI),t.fill()}drawWaveText(t,s){const e=h(this.waveLocation.x,this.waveLocation.y,s);t.font="40px sans-serif",t.fillStyle="#9e9170",t.fillText(`Wave ${this.wave}`,e.x,e.y)}drawGUI(t,s){n(t,s,this.money)}render(t,s,e){for(const e of this.bullet)e.render(t,s);let i=null,a=null;for(let e=0;e<this.spots.length;e++){const h=this.spots[e];h.render(t,s),h.showData&&(i=e),h.showStats&&h.hasTower&&(a=e)}let h=null;for(let e=0;e<this.enemy.length;e++){const i=this.enemy[e];i.render(t,s),i.showStats&&null===a&&(h=e)}null!=h&&this.enemy[h].showEnemyStats(t,s),null!=i&&this.spots[i].drawData(t,s),null!=a&&this.spots[a].showTowerStats(t,s),this.drawGUI(e,s)}}},860:(t,s,e)=>{const i=e(243),a=e(420);t.exports={Basic:i,Pounder:a}},243:(t,s,e)=>{const{BASIC_TOWER:i,GAME:a,BASIC_BULLET:h}=e(556),n=e(503),r=e(627);function o(t){return t*Math.PI/180}t.exports=class{constructor(t,s,e=i){this.x=t,this.y=s,this.angle=Math.round(360*Math.random()),this.stats={...e},this.rotateSpeed=this.stats.rotate_speed,this.radius=this.stats.size/2,this.color=this.stats.color,this.fov=this.stats.fov,this.reload=Math.round(this.stats.reload_time*a.simulation_rate),this.type=this.stats.name,this.tick=Math.round(Math.random()*this.reload),this.bullet={object:r,stats:h}}update(){this.angle+=this.rotateSpeed,this.angle=this.angle%360}simulate(t){let s=null;for(let e=0;e<t.enemy.length;e++){const i=t.enemy[e],a=i.x-this.x,h=i.y-this.y;if(i.dead)continue;const n=Math.sqrt(a*a+h*h);n<this.fov/2+i.radius&&(null===s||s.dist>n)&&(s={dist:n,index:e})}null!=s&&this.tick%this.reload==0?(this.angle=180*Math.atan2(t.enemy[s.index].y-this.y,t.enemy[s.index].x-this.x)/Math.PI,this.angle=this.angle%360,t.bullet.push(new this.bullet.object(this.x,this.y,this.bullet.stats.speed,o(this.angle),this.radius/4,this.fov/2,this.stats.damage,this.bullet.stats))):this.update(),this.locked--,this.tick++}showStats(t,s){t.globalAlpha=.5,t.fillStyle=this.color,t.textAlign="center",t.textBaseline="middle";const e=n(this.x,this.y,s);e.y>a.height/2&&(e.y-=this.stats.stats_height),t.fillRect(e.x-this.stats.stats_width/2,e.y,this.stats.stats_width,this.stats.stats_height),t.fillStyle="white",t.fillRect(e.x-this.stats.stats_width/2,e.y,this.stats.stats_width,this.stats.stats_height),t.globalAlpha=1,t.fillStyle="black",t.font=24*s.scale+"px Arial",t.fillText(`Type: ${this.type}`,e.x,Math.round(e.y+this.stats.stats_height/5)),t.fillText(`Damage Per Shot: ${Math.round(this.stats.damage)}`,e.x,Math.round(e.y+this.stats.stats_height/5*2)),t.fillText(`Reload Time: ${Math.round(this.stats.reload_time)}s`,e.x,Math.round(e.y+this.stats.stats_height/5*3)),t.fillText(`Field Of View: ${Math.round(this.stats.fov)}`,e.x,Math.round(e.y+this.stats.stats_height/5*4))}render(t,s){const e=n(this.x,this.y,s);t.save(),t.translate(e.x,e.y),t.rotate(o(this.angle)),t.fillStyle=this.color,t.beginPath(),t.arc(0,0,this.radius*s.scale,0,2*Math.PI),t.fill(),t.fillRect(0,-this.stats.barrel_height/2,this.stats.barrel_width,this.stats.barrel_height),t.restore()}}},420:(t,s,e)=>{const i=e(243),{POUNDER_TOWER:a,POUNDER_BULLET:h}=e(556),n=e(567);t.exports=class extends i{constructor(t,s,e=a){super(t,s,e),this.bulletSpeed=h.speed,this.bullet={object:n,stats:h}}}},556:t=>{const s={stats_width:150,stats_height:100,speed:2,health:100,color:"black",size:50,name:"Default"},e=Object.assign({...s},{color:"#2d2e2e",speed:2.5,size:50,health:100,name:"Basic"}),i=Object.assign({...s},{color:"#19d4ab",speed:3.5,size:45,health:70,name:"Fast"}),a=Object.assign({...s},{color:"#73020f",speed:2,size:55,health:200,name:"Strong"}),h={rotate_speed:2.5,display_width:290,display_height:90,stats_width:200,stats_height:150,barrel_width:35,barrel_height:20,size:45,tiers:[{name:"bronze",tiers:4,color:"33"},{name:"gold",tiers:4},{name:"diamond",tiers:4},{name:"ruby",tiers:4}],fov:400,damage:15,color:"black",name:"Default"},n=Object.assign({...h},{fov:600,damage:15,reload_time:.5,color:"#474747",name:"Basic"}),r=Object.assign({...h},{fov:500,damage:80,reload_time:2,color:"#0a591a",name:"Pounder",size:45,barrel_height:35}),o={speed:8,size:20,color:"black",name:"Default"},l=Object.assign({...o},{speed:10,size:20,color:"#323232",name:"Basic"}),c=Object.assign({...o},{speed:7,size:50,color:"#0b4d18",name:"Pounder"});t.exports={GAME:{width:1600,height:900,margin:200,simulation_rate:60,background_color:"#dbd2ba"},CONTROLS:{i:"zoomin",o:"zoomout"},PATH:{size:75,inside_color:"#bda562",stroke_color:"#8f7328",ends_color:"#d40018",ends_size:70},SPOT:{color:"140",size:65},BASIC_ENEMY:e,FAST_ENEMY:i,STRONG_ENEMY:a,BASIC_TOWER:n,POUNDER_TOWER:r,MONEY:{display_width:200,display_height:75},BASIC_BULLET:l,POUNDER_BULLET:c,TOWER:h}},662:(t,s,e)=>{const{GAME:i}=e(556);t.exports=function(t){return Math.ceil((window.performance.now()-t)*(i.simulation_rate/1e3))}},503:(t,s,e)=>{const{GAME:i}=e(556);t.exports=function(t,s,e){return{x:Math.round((t-e.x)*e.scale+i.width/2),y:Math.round((s-e.y)*e.scale+i.height/2)}}},736:(t,s,e)=>{const{GAME:i}=e(556);t.exports=function(t,s=(()=>{})){if(t)return t.width!==i.width&&(t.width=i.width),t.height!==i.height&&(t.height=i.height),t.style.transform=`scale(${Math.min(window.innerWidth/i.width,window.innerHeight/i.height)})`,t.style.left=(window.innerWidth-i.width)/2+"px",t.style.top=(window.innerHeight-i.height)/2+"px",s(),Math.min(window.innerWidth/i.width,window.innerHeight/i.height)}},295:t=>{t.exports=function(t,s){return Math.round(t*10**s)/10**s}},448:(t,s,e)=>{const i=e(688),a=e(662),{GAME:h}=e(556);t.exports=function(t,s,e){function n(s,i,n,r){for(let l=1;l<i+1;l++)e.newEvent((()=>{e.state.enemy.push(new s(t))}),(o=r+l*n,a(e.startTime)+o/1e3*h.simulation_rate));var o}for(const t of s){const{type:s,amount:e,delay:a}=t;"basic"===s?n(i.Basic,e,t["time-in-between-ms"],a):"fast"===s?n(i.Fast,e,t["time-in-between-ms"],a):"strong"===s&&n(i.Strong,e,t["time-in-between-ms"],a)}}}},s={};function e(i){if(s[i])return s[i].exports;var a=s[i]={id:i,exports:{}};return t[i](a,a.exports,e),a.exports}e.n=t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},e.d=(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{e(202);const t=e(565),s=e(297);s.playButton.addEventListener("mousedown",(()=>{s.menu.classList.add("hidden"),(new t).start()}))})()})();