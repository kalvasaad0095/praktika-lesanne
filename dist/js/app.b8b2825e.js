(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],v=0,d=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3268:function(t,e,n){},3668:function(t,e,n){"use strict";n("3268")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[n("v-app-bar-nav-icon"),n("v-toolbar-title",[t._v("Kiku Hambaravi")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",t._l(5,(function(e){return n("v-list-item",{key:e,on:{click:function(){}}},[n("v-list-item-title",[t._v("Option "+t._s(e))])],1)})),1)],1)],1)],1),n("v-main",[n("Broneeri")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{staticClass:"staticHero"},[n("v-img",{attrs:{src:"https://images.indianexpress.com/2020/03/dental.jpg",height:"20vh"}},[n("v-row",{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"end"}},[n("v-col",[n("v-container",[n("div",{staticClass:"headline"},[t._v("Broneeri aeg arsti vastuvõtuks")])])],1)],1)],1)],1),n("v-divider",{attrs:{inset:"","mt-10":""}}),n("div",{staticClass:"block"},[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{counter:20,rules:t.nameRules,label:"Sinu nimi",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.items,label:"Valige soovitud arst..."}})],1)],1)],1),n("h2",[t._v("Valige soovitud kuupäev ning kellaaeg:")]),n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",type:"4day",events:t.events,"event-color":t.getEventColor,"event-ripple":!1},on:{change:t.getEvents,"mousedown:event":t.startDrag,"mousedown:time":t.startTime,"mousemove:time":t.mouseMove,"mouseup:time":t.endDrag},nativeOn:{mouseleave:function(e){return t.cancelDrag(e)}},scopedSlots:t._u([{key:"event",fn:function(e){var a=e.event,r=e.timed,i=e.eventSummary;return[n("div",{staticClass:"v-event-draggable",domProps:{innerHTML:t._s(i())}}),r?n("div",{staticClass:"v-event-drag-bottom",on:{mousedown:function(e){return e.stopPropagation(),t.extendBottom(a)}}}):t._e()]}}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1),n("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Submit")]),n("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v("Reset")])],1)],1)],1)],1)},o=[],l=(n("a434"),n("99af"),{name:"Broneeri",data:function(){return{items:["Leena Kiku","Hamba Haldjas","Andrei Orto","Asta Ammas","Peeter Pakiraam","Irina Ila"],valid:!0,name:"",nameRules:[function(t){return!!t||"Nimi on vajalik"},function(t){return t&&t.length<=20||"Nimi peab olema vähemalt 5 tähemärki"}],value:"",events:[],colors:["#2196F3","#3F51B5","#673AB7","#00BCD4","#4CAF50","#FF9800","#757575"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],dragEvent:null,dragStart:null,createEvent:null,createStart:null,extendOriginal:null,email:"",emailRules:[function(t){return!!t||"E-mail on nõutud"},function(t){return/.+@.+\..+/.test(t)||"E-mail peab olema kehtiv"}]}},methods:{startDrag:function(t){var e=t.event,n=t.timed;e&&n&&(this.dragEvent=e,this.dragTime=null,this.extendOriginal=null)},startTime:function(t){var e=this.toTime(t);if(this.dragEvent&&null===this.dragTime){var n=this.dragEvent.start;this.dragTime=e-n}else this.createStart=this.roundTime(e),this.createEvent={name:"Event #".concat(this.events.length),color:this.rndElement(this.colors),start:this.createStart,end:this.createStart,timed:!0},this.events.push(this.createEvent)},extendBottom:function(t){this.createEvent=t,this.createStart=t.start,this.extendOriginal=t.end},mouseMove:function(t){var e=this.toTime(t);if(this.dragEvent&&null!==this.dragTime){var n=this.dragEvent.start,a=this.dragEvent.end,r=a-n,i=e-this.dragTime,s=this.roundTime(i),o=s+r;this.dragEvent.start=s,this.dragEvent.end=o}else if(this.createEvent&&null!==this.createStart){var l=this.roundTime(e,!1),c=Math.min(l,this.createStart),u=Math.max(l,this.createStart);this.createEvent.start=c,this.createEvent.end=u}},endDrag:function(){this.dragTime=null,this.dragEvent=null,this.createEvent=null,this.createStart=null,this.extendOriginal=null},cancelDrag:function(){if(this.createEvent)if(this.extendOriginal)this.createEvent.end=this.extendOriginal;else{var t=this.events.indexOf(this.createEvent);-1!==t&&this.events.splice(t,1)}this.createEvent=null,this.createStart=null,this.dragTime=null,this.dragEvent=null},roundTime:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=15,a=60*n*1e3;return e?t-t%a:t+(a-t%a)},toTime:function(t){return new Date(t.year,t.month-1,t.day,t.hour,t.minute).getTime()},getEventColor:function(t){var e=parseInt(t.color.substring(1),16),n=e>>16&255,a=e>>8&255,r=e>>0&255;return t===this.dragEvent||t===this.createEvent?"rgba(".concat(n,", ").concat(a,", ").concat(r,", 0.7)"):t.color},getEvents:function(t){for(var e=t.start,n=t.end,a=[],r=new Date("".concat(e.date,"T00:00:00")).getTime(),i=new Date("".concat(n.date,"T23:59:59")).getTime(),s=(i-r)/864e5,o=this.rnd(s,s+20),l=0;l<o;l++){var c=0!==this.rnd(0,3),u=this.rnd(r,i),v=9e5*this.rnd(2,c?8:288),d=u-u%9e5,m=d+v;a.push({name:this.rndElement(this.names),color:this.rndElement(this.colors),start:d,end:m,timed:c})}this.events=a},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t},rndElement:function(t){return t[this.rnd(0,t.length-1)]}},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()}}),c=l,u=(n("3668"),n("2877")),v=n("6544"),d=n.n(v),m=n("8336"),h=n("a4f6"),f=n("62ad"),p=n("a523"),g=n("a75b"),b=n("ce7e"),E=n("4bd4"),y=n("adda"),T=n("0fd9"),x=n("b974"),_=n("8dd9"),V=n("8654"),k=Object(u["a"])(c,s,o,!1,null,"11cfd353",null),O=k.exports;d()(k,{VBtn:m["a"],VCalendar:h["a"],VCol:f["a"],VContainer:p["a"],VContent:g["a"],VDivider:b["a"],VForm:E["a"],VImg:y["a"],VRow:T["a"],VSelect:x["a"],VSheet:_["a"],VTextField:V["a"]});var S={name:"App",components:{Broneeri:O},data:function(){return{}}},w=S,C=n("7496"),j=n("40dc"),B=n("5bc1"),M=n("132d"),P=n("8860"),D=n("da13"),A=n("5d23"),I=n("f6c4"),F=n("e449"),H=n("2fa4"),R=n("2a7f"),L=Object(u["a"])(w,r,i,!1,null,null,null),$=L.exports;d()(L,{VApp:C["a"],VAppBar:j["a"],VAppBarNavIcon:B["a"],VBtn:m["a"],VIcon:M["a"],VList:P["a"],VListItem:D["a"],VListItemTitle:A["b"],VMain:I["a"],VMenu:F["a"],VSpacer:H["a"],VToolbarTitle:R["a"]});var N=n("f309");a["a"].use(N["a"]);var q=new N["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:q,render:function(t){return t($)}}).$mount("#app")}});
//# sourceMappingURL=app.b8b2825e.js.map