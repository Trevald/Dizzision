(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"024c":function(t,e,n){"use strict";var i=n("7f5c"),r=n.n(i);r.a},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"060f":function(t,e,n){"use strict";var i=n("7d81"),r=n.n(i);r.a},4211:function(t,e,n){"use strict";var i=n("c584"),r=n.n(i);r.a},"568a":function(t,e,n){"use strict";var i=n("c824"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("caad"),n("2532"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("div",{staticClass:"noise"})],1)},s=[],a={name:"app"},o=a,l=(n("034f"),n("2877")),c=Object(l["a"])(o,r,s,!1,null,null,null),u=c.exports,d=(n("845f"),n("8c4f")),p=n("890b"),f=n.n(p),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"},on:{click:t.bodyClick}},[t.items?n("div",{staticClass:"layout"},[n("div",{staticClass:"main"},[n("Wheel",{ref:"wheel",attrs:{items:t.items},on:{"spin-begin":t.spinBegin,"spin-complete":t.spinComplete}})],1),n("div",{staticClass:"aside"},[n("div",{staticClass:"list"},[n("div",{staticClass:"list-wrapper"},[n("p",{staticClass:"list-legend"},[t._v("Wheel of")]),n("div",{staticClass:"list-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"list-title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("ListArea",{attrs:{items:t.items},on:{change:t.itemsChange}})],1),n("div",{staticClass:"actions"},[n("button",{staticClass:"btn-spin-2",attrs:{disabled:t.isSpinning},on:{click:function(e){return t.spinWheel()}}},[t._v("Spin!")]),n("button",{staticClass:"btn-share",attrs:{disabled:t.isSharing},on:{click:function(e){return e.stopPropagation(),t.share()}}},[n("span",{staticClass:"visually-hidden"},[t._v("Share")]),n("svg",{attrs:{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.5 19.5H16.5V6H19.5L15 0L10.5 6H13.5V19.5ZM25.5 10.5H21V13.5H24V27H6V13.5H9V10.5H4.5C3.6705 10.5 3 11.1705 3 12V28.5C3 29.328 3.6705 30 4.5 30H25.5C26.3295 30 27 29.328 27 28.5V12C27 11.172 26.3295 10.5 25.5 10.5Z"}})])])])])])])]):t._e(),n("div",{staticClass:"alert-wrapper"},[n("transition",{attrs:{name:"alert"}},[t.winner?n("Winner",{attrs:{winner:t.winner}}):t._e()],1),n("transition",{attrs:{name:"alert"}},[t.isSharing?n("Share",{attrs:{title:t.title,url:t.url}}):t._e()],1)],1)])},g=[],m=(n("99af"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.listAsText,expression:"listAsText"}],attrs:{autocomplete:"off",placeholder:"Add some things..."},domProps:{value:t.listAsText},on:{input:[function(e){e.target.composing||(t.listAsText=e.target.value)},t.inputChange]}})}),v=[],C=(n("a15b"),n("d81d"),n("ac1f"),n("1276"),{name:"ListArea",model:{prop:"value",event:"input"},props:{items:Array},data:function(){return{listAsText:void 0}},methods:{inputChange:function(){this.$emit("change",this.listAsText.split("\n").map((function(t){return{title:t}})))}},mounted:function(){console.log("la",this.items),this.listAsText=void 0!==this.items?this.items.map((function(t){return t.title})).join("\n"):""}}),w=C,x=(n("4211"),Object(l["a"])(w,m,v,!1,null,"5b6db75b",null)),y=x.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("div",{staticClass:"box"},[n("div",{staticClass:"sun"},[n("div",{staticClass:"content"},[n("p",{staticClass:"legend"},[t._v(" Your link to ")]),n("p",{staticClass:"title"},[t._v(t._s(t.title))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"url",attrs:{type:"text",readonly:""},domProps:{value:t.url},on:{click:function(e){return e.stopPropagation(),t.selectAll(e)},input:function(e){e.target.composing||(t.url=e.target.value)}}}),n("button",{staticClass:"btn-copy",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.copy()}}},[t._v("Copy to clipboard")])])])])])},_=[],A={name:"Share",props:{title:String,url:String},methods:{copy:function(){navigator.clipboard.writeText(this.url)},selectAll:function(t){t.target.select()}}},S=A,P=(n("060f"),Object(l["a"])(S,b,_,!1,null,"45cf5993",null)),k=P.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wheel"}},[n("div",{staticClass:"wheel-wrapper"},[n("div",{staticClass:"wheel"},[n("svg",{ref:"wheel",staticClass:"wheel-svg",attrs:{viewBox:"0 0 500 500"}},[n("ellipse",{staticClass:"wheel-background",attrs:{cx:"250",cy:"250",rx:"250",ry:"250",fill:"#D24683"}}),t._l(t.labels,(function(e,i){return n("g",{key:i,attrs:{transform:t.getPathTransform(i)}},[n("path",{attrs:{d:t.getSVGData(),fill:t.getFillColor(i)}}),n("text",{attrs:{x:"450",y:"250",fill:t.getTextFill(i),"text-anchor":"end",transform:t.getTextTransform(i)}},[t._v(t._s(e.title))])])})),n("ellipse",{staticClass:"wheel-dots",attrs:{cx:"251",cy:"251",rx:"225",ry:"225",fill:"transparent",stroke:"#000000","stroke-opacity":"0.2","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":"0 20"}}),n("ellipse",{staticClass:"wheel-dots",attrs:{cx:"250",cy:"250",rx:"225",ry:"225",fill:"transparent",stroke:"#4B5156","stroke-opacity":"0.5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":"0 20"}})],2)])]),n("div",{staticClass:"wheel-border"},[n("svg",{attrs:{viewBox:"0 0 594 594",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{filter:"url(#filter0_ii)"}},[n("circle",{attrs:{cx:"297",cy:"297",r:"274",fill:"url(#paint0_radial)"}})]),n("g",{attrs:{filter:"url(#filter1_ii)"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M297 594C461.029 594 594 461.029 594 297C594 132.971 461.029 0 297 0C132.971 0 0 132.971 0 297C0 461.029 132.971 594 297 594ZM297 571C448.326 571 571 448.326 571 297C571 145.674 448.326 23 297 23C145.674 23 23 145.674 23 297C23 448.326 145.674 571 297 571Z",fill:"url(#paint1_linear)"}})]),n("defs",[n("filter",{attrs:{id:"filter0_ii",x:"23",y:"23",width:"548",height:"550",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),n("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),n("feOffset",{attrs:{dy:"2"}}),n("feGaussianBlur",{attrs:{stdDeviation:"5"}}),n("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),n("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),n("feBlend",{attrs:{mode:"normal",in2:"shape",result:"effect1_innerShadow"}}),n("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),n("feOffset",{attrs:{dy:"1"}}),n("feGaussianBlur",{attrs:{stdDeviation:"1"}}),n("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),n("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"}}),n("feBlend",{attrs:{mode:"normal",in2:"effect1_innerShadow",result:"effect2_innerShadow"}})],1),n("filter",{attrs:{id:"filter1_ii",x:"0",y:"-2",width:"594",height:"597",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),n("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),n("feOffset",{attrs:{dy:"1"}}),n("feGaussianBlur",{attrs:{stdDeviation:"1"}}),n("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),n("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.69 0"}}),n("feBlend",{attrs:{mode:"normal",in2:"shape",result:"effect1_innerShadow"}}),n("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),n("feOffset",{attrs:{dy:"-2"}}),n("feGaussianBlur",{attrs:{stdDeviation:"2"}}),n("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),n("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),n("feBlend",{attrs:{mode:"normal",in2:"effect1_innerShadow",result:"effect2_innerShadow"}})],1),n("radialGradient",{attrs:{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(297 297) rotate(90) scale(274)"}},[n("stop",{attrs:{"stop-opacity":"0.07"}}),n("stop",{attrs:{offset:"0.375","stop-opacity":"0.03"}}),n("stop",{attrs:{offset:"1","stop-opacity":"0.15"}})],1),n("linearGradient",{attrs:{id:"paint1_linear",x1:"297",y1:"0",x2:"297",y2:"594",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#BA1F1F"}}),n("stop",{attrs:{offset:"0.565657","stop-color":"#A91515"}}),n("stop",{attrs:{offset:"1","stop-color":"#751212"}})],1)],1)])]),n("div",{staticClass:"wheel-middle"}),n("div",{staticClass:"top"}),n("div",{staticStyle:{position:"fixed",top:"10px",left:"10px",display:"none"}},[n("p",{staticStyle:{color:"white","margin-top":"20px","font-size":"18px"}},[t._v(t._s(t.labels[t.winner]))])])])},B=[],F=(n("4de4"),n("1209")),I=n("66cb"),R={name:"wheel",components:{},props:{items:Array},data:function(){return{isspining:!1,winner:void 0,wheelRotation:void 0,bgColors:["#D24683","#9559E2","#F5B404","#E34443","#F0F2E6","#31873A","#4F4BFB","#F5B404","#F0F2E6","#86B89A","#A42361","#7636C9","#CF9804","#E34E4E","#F0F2E6","#F5B404"]}},computed:{numOfParts:function(){return this.labels.length},localItems:function(){return this.items.filter((function(t){return""!==t.title}))},labels:function(){return this.localItems.length<8?this.localItems.concat(this.localItems):this.localItems}},methods:{getAngle:function(){return 360/this.numOfParts},getAngleInRadians:function(){var t=this.getAngle();return-t*Math.PI/180},getCartesianCoordinates:function(){var t=this.getCenterCoords().x,e=this.getCenterCoords().y,n=this.getAngleInRadians(),i=this.getRadius();return{x:t+i*Math.cos(n),y:e+i*Math.sin(n)}},getCenterCoords:function(){return{x:250,y:250}},getRadius:function(){return 250},getSVGData:function(){var t=this.getCenterCoords().x,e=this.getCenterCoords().y,n=this.getRadius(),i=this.getCartesianCoordinates().x,r=this.getCartesianCoordinates().y;return"M".concat(t,",").concat(e," l").concat(n,",0 A").concat(n,",").concat(n," 0 0,0 ").concat(i,", ").concat(r," z")},getPathTransform:function(t){var e=this.getCenterCoords().x,n=this.getCenterCoords().y,i=this.getAngle()*t;return"rotate(".concat(i," ").concat(e," ").concat(n,")")},getTextTransform:function(){var t=this.getCenterCoords().x,e=this.getCenterCoords().y,n=this.getAngle()/2.2*-1;return"rotate(".concat(n," ").concat(t," ").concat(e,")")},getFillColor:function(t){return void 0!==this.bgColors[t]?this.bgColors[t]:this.bgColors[t-this.bgColors.length]},getTextFill:function(t){var e=I(this.getFillColor(t)),n=e.getBrightness();return n<125?"rgba(255, 250, 245, 0.95)":"rgba(0, 0, 150, 0.9)"},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t)+t)},resetWheel:function(){return void 0!==this.wheelRotation?Math.ceil(this.wheelRotation)+1:1},spinWheel:function(){var t=this,e=this.resetWheel();this.winner=this.getRandomInt(0,this.numOfParts);var n=this.getRandomInt(1,2),i=this.getRandomInt(2,3),r=1-this.winner/this.numOfParts,s=1/this.numOfParts/2/this.getRandomInt(1,3)-.25,a=n+r+s;console.log("2",r,1/this.numOfParts),this.wheelRotation=i+a+s,Object(F["a"])({targets:".wheel",rotate:[{value:"".concat(e,"turn"),duration:1500,easing:"easeInSine"},{value:"0turn",duration:0,easine:"linear"},{value:"".concat(i,"turn"),duration:1e3*i,easing:"linear"},{value:"+=".concat(a,"turn"),duration:a*this.getRandomInt(4e3,6e3),easing:"cubicBezier(0.150, 0.50, 0.250, 1.000)"}],begin:function(){t.isspining=!0,t.$emit("spin-begin"),console.log("b",t)},complete:function(){t.isspining=!1,t.$emit("spin-complete",{winner:t.labels[t.winner].title,color:t.getFillColor(t.winner)})}})}}},M=R,T=(n("568a"),Object(l["a"])(M,O,B,!1,null,null,null)),j=T.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert"},[n("div",{staticClass:"box",style:t.cssStyle},[n("div",{staticClass:"sun"},[n("div",{staticClass:"content"},[n("p",{staticClass:"legend"},[t._v(" Winner is ")]),n("p",{staticClass:"title"},[t._v(t._s(t.title))])])])])])},U=[],E=n("66cb"),G={name:"Winner",props:{winner:Object},computed:{cssStyle:function(){return{backgroundColor:this.color,color:this.getFGColor()}},title:function(){return this.winner.winner},color:function(){return this.winner.color}},methods:{getFGColor:function(){var t=E(this.color),e=t.getBrightness();return e<125?"rgba(253, 254, 208, 0.9)":"rgba(0, 0, 150, 0.9)"}}},$=G,L=Object(l["a"])($,W,U,!1,null,"2ebcf680",null),V=L.exports,H={name:"app",components:{ListArea:y,Share:k,Wheel:j,Winner:V},data:function(){return{winner:void 0,isSharing:!1,isSpinning:!1,title:void 0,items:void 0,url:void 0}},beforeRouteUpdate:function(t,e,n){console.log(t.params.id),this.getWheel(t.params.id),n()},mounted:function(){this.getWheel(this.$route.params.id)},methods:{share:function(){var t=this,e=window.APP_API_URL;fetch("".concat(e,"/api/wheel"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:this.title,items:this.items})}).then((function(e){return console.log("POST",e),t.isSharing=!0,e.text()})).then((function(e){t.url=e}))},getWheel:function(t){var e=this,n=void 0!==t?t:"random";console.log("getWheel",n,window.APP_API_URL);var i=window.APP_API_URL;fetch("".concat(i,"/api/wheel/").concat(n)).then((function(t){return t.json()})).then((function(t){console.log("r",t),t.items&&(e.title=t.title,e.items=t.items)}))},bodyClick:function(){void 0!==this.winner&&(this.winner=void 0,this.$confetti.stop()),this.isSharing&&(this.isSharing=!1)},itemsChange:function(t){this.items=t},spinWheel:function(){this.$refs.wheel.spinWheel()},spinBegin:function(){this.isSpinning=!0,console.log("ab")},spinComplete:function(t){this.winner=t,this.isSpinning=!1,this.$confetti.start({particlesPerFrame:1})}}},D=H,z=(n("024c"),Object(l["a"])(D,h,g,!1,null,null,null)),N=z.exports;i["a"].use(d["a"]),i["a"].use(f.a);var Z=[{path:"/",component:N},{path:"/:id",component:N}],J=new d["a"]({mode:"history",routes:Z});i["a"].config.productionTip=!1;var Y="http://wheel.test",q="http://dizzision.com";switch(!0){case window.location.hostname.includes(".test"):window.APP_API_URL=Y;break;case!1:window.APP_API_URL="";break;default:window.APP_API_URL=q}new i["a"]({router:J,render:function(t){return t(u)}}).$mount("#app")},"7d81":function(t,e,n){},"7f5c":function(t,e,n){},"845f":function(t,e,n){},"85ec":function(t,e,n){},c584:function(t,e,n){},c824:function(t,e,n){}});
//# sourceMappingURL=app.af7dd341.js.map