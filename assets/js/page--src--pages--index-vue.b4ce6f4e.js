(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Ov6R:function(t,e,s){"use strict";s("eGIo")},eGIo:function(t,e,s){},iyQ6:function(t,e,s){"use strict";s.r(e);s("07d7"),s("PKPk"),s("3bBZ");var a={components:{sidebar:function(){return Promise.all([s.e(0),s.e(1)]).then(s.bind(null,"aE0r"))}},data:function(){return{playCount:1,playStatus:!0}},mounted:function(){var t=this,e=document.querySelector(".video");e.addEventListener("ended",(function(){t.playCount++,t.playCount<3?this.play():(this.currentTime=.5,this.pause(),t.playStatus=!1)})),document.querySelector(".video-play").addEventListener("click",(function(){e.play(),t.playStatus=!0})),document.querySelector(".video-pause").addEventListener("click",(function(){e.pause(),t.playStatus=!1}))}},i=(s("Ov6R"),s("KHd+")),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Slide",[e("div",{staticClass:"slide-content layout"},[e("sidebar"),e("div",{directives:[{name:"show",rawName:"v-show",value:this.playCount>2,expression:"playCount > 2"}],staticClass:"video-controls"},[e("a",{directives:[{name:"show",rawName:"v-show",value:!this.playStatus,expression:"!playStatus"}],staticClass:"video-play",attrs:{href:"javascript:;"}},[e("svg",{staticClass:"icon-play",staticStyle:{"enable-background":"new 0 0 19 23.3"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 19 23.3","xml:space":"preserve"}},[e("g",[e("path",{staticClass:"st0",attrs:{d:"M0,21.7V1.6c0-1.2,1-2,1.9-1.4l16.4,10.1c1,0.6,1,2.3,0,2.9L1.9,23.2C1,23.7,0,22.9,0,21.7z"}})])])]),e("a",{directives:[{name:"show",rawName:"v-show",value:this.playStatus,expression:"playStatus"}],staticClass:"video-pause",attrs:{href:"javascript:;"}},[e("svg",{staticClass:"icon-pause",staticStyle:{"enable-background":"new 0 0 15 23"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 15 23","xml:space":"preserve"}},[e("path",{staticClass:"st0",attrs:{d:"M3.8,23H1.2C0.5,23,0,22.5,0,21.8V1.2C0,0.5,0.5,0,1.2,0h2.6C4.5,0,5,0.5,5,1.2v20.6C5,22.5,4.5,23,3.8,23z"}}),e("path",{staticClass:"st0",attrs:{d:"M13.8,23h-2.6c-0.7,0-1.2-0.5-1.2-1.2V1.2C10,0.5,10.5,0,11.2,0h2.6C14.5,0,15,0.5,15,1.2v20.6C15,22.5,14.5,23,13.8,23z"}})])])])],1),e("video",{staticClass:"video slide-background",attrs:{autoplay:"",muted:"",poster:"/cover.jpg"},domProps:{muted:!0}},[e("source",{attrs:{src:"/cover.webm",type:"video/webm"}}),e("source",{attrs:{src:"/cover.mp4",type:"video/mp4"}}),this._v("\n    Your browser doesn't support HTML5 video tag.\n  ")])])}),[],!1,null,"0caffb79",null);e.default=n.exports}}]);