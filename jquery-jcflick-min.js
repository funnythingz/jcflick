/*jquery.jcflickjs v0.0.6 http://tpl.funnything.com
* 
* The MIT License
* 
* Copyright (c) 2012 funnythingz
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
(function(a){a.fn.jcflick=function(a){var c={flickContainer:"flickContainer",flickWrapper:"flickWrapper",flickCol:"flickCol",autoTimer:5e3};var d=$.extend(c,a);return this.each(function(a){var c=$(this);b(d,c)})};var b=function(a,b){function w(b){if(b.type==="touchstart"){c.p.autoChangeFlag=false;c.p.touchPositionX=b.originalEvent.touches[0].clientX;c.p.touchPositionY=b.originalEvent.touches[0].clientY;clearInterval(c.p.Timer)}if(b.type==="touchmove"){c.p.positionIntX=c.p.touchPositionX-b.originalEvent.touches[0].clientX;c.p.positionIntY=c.p.touchPositionY-b.originalEvent.touches[0].clientY;$("#a").html(c.p.positionIntX);if(Math.abs(c.p.positionIntX)>5){b.preventDefault();c.p.flag=true;c.p.movePosition=c.p.nowPosition-c.p.positionIntX;e.css({webkitTransition:"none",webkitTransform:"translate3d("+c.p.movePosition+"px, 0, 0)"})}}if(b.type==="touchend"){if(c.p.flag){c.p.nowPosition=c.p.movePosition;if(typeof a.flickBtn!="undefined"){c.flickBtnNext.removeClass("btnFalse").addClass("pointer");c.flickBtnBack.removeClass("btnFalse").addClass("pointer")}if(c.p.positionIntX>50){if(c.p.nowPage<c.p.totalLength-1){c.p.nowPage++;c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"&&c.p.nowPage==c.p.totalLength-1){c.flickBtnNext.removeClass("pointer").addClass("btnFalse")}}else{c.p.nowPosition=-(c.p.colWidth*(c.p.totalLength-1));j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"&&c.p.nowPage==c.p.totalLength-1){c.flickBtnNext.removeClass("pointer").addClass("btnFalse")}}}else if(c.p.positionIntX<-50){if(c.p.nowPage<=0){c.p.nowPage=0;c.p.nowPosition=0;j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"){c.flickBtnBack.removeClass("pointer").addClass("btnFalse")}}else{c.p.nowPage--;c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"&&c.p.nowPage===0){c.flickBtnBack.removeClass("pointer").addClass("btnFalse")}}}else{c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition)}if(typeof a.flickLamp!="undefined"&&typeof c.flickLampCol[c.p.nowPage]!="undefined"){for(var d=0;d<c.p.totalLength;d++){c.flickLampCol[d].removeClass("lamp_cur")}c.flickLampCol[c.p.nowPage].addClass("lamp_cur")}q();if(m){c.p.Timer=setInterval(o,n)}}c.p.flag=false}if(b.type==="touchcancel"){q();if(m){c.p.Timer=setInterval(o,n)}}}var c=typeof c=="undefined"||!c?{}:undefined;c.p={nowPage:0,wrapperWidth:0,colWidth:0,totalLength:0,touchPositionX:0,touchPositionY:0,movePosition:0,nowPosition:0,positionIntX:0,positionIntY:0,flag:false,autoChangeFlag:true,Timer:"",AndroidTimer:""};c.singleCol=function(a,b){var c=$("."+a,b);return c};c.ua={Android:navigator.userAgent.indexOf("Linux; U; Android ")!=-1,Honeycomb:navigator.userAgent.indexOf("HONEYCOMB")!=-1,GalaxyTab:navigator.userAgent.indexOf("SC-01C")!=-1,iPod:navigator.userAgent.indexOf("iPod")!=-1,iPhone:navigator.userAgent.indexOf("iPhone")!=-1,iPad:navigator.userAgent.indexOf("iPad")!=-1};var d=c.singleCol(a.flickContainer,b);var e=c.singleCol(a.flickWrapper,b);var f=c.singleCol(a.flickCol,b);e.css({width:d.width()+"px"});f.css({width:d.width()+"px"});c.p.nowPage=typeof a.flickCur!="undefined"?a.flickCur:0;var g=function(a){e.css({webkitTransition:"all 0.6s",webkitTransform:"translate3d("+a+"px, 0, 0)"})};var h=function(a){e.css({webkitTransition:"all 0.6s",webkitTransform:"translate("+a+"px, 0)"})};var i=function(a){e.stop().animate({left:c.p.nowPosition+"px"},500)};var j=function(a){if(c.ua.iPhone||c.ua.iPad||c.ua.iPod){g(a)}else if(c.ua.Android){h(a)}else{i(a)}};c.p.wrapperWidth=(c.p.totalLength=f.length)*(c.p.colWidth=f.width());c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);c.flickLamp=function(a){var b=$("<span>");b.addClass("lamp_def lamp_"+a);b.html("");return b};c.flickLampCol=[];if(typeof a.flickLamp!="undefined"){if(c.ua.iPad){var k=c.singleCol(a.flickLamp,b).html("").css({textAlign:"center",width:d.width()+"px"})}else{var k=c.singleCol(a.flickLamp,b).html("").css({textAlign:"center"})}for(var l=0;l<c.p.totalLength;l++){c.flickLampCol[l]=new c.flickLamp(l);if(l===c.p.nowPage){c.flickLampCol[l].addClass("lamp_cur")}k.append(c.flickLampCol[l])}}var m=false;m=a.autoChange?a.autoChange:false;var n=a.autoTimer;var o=function(){if(c.p.autoChangeFlag){c.p.nowPosition=c.p.movePosition;if(typeof a.flickBtn!="undefined"){c.flickBtnNext.removeClass("btnFalse").addClass("pointer");c.flickBtnBack.removeClass("btnFalse").addClass("pointer")}if(c.p.nowPage<c.p.totalLength){if(c.p.nowPage<c.p.totalLength-1){c.p.nowPage++;c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"&&c.p.nowPage==c.p.totalLength-1){c.flickBtnNext.removeClass("pointer").addClass("btnFalse")}}else if(c.p.nowPage===c.p.totalLength-1){c.p.nowPage=0;c.p.nowPosition=0;j(c.p.nowPosition);if(typeof a.flickBtn!="undefined"){c.flickBtnBack.removeClass("pointer").addClass("btnFalse")}}}if(typeof a.flickLamp!="undefined"&&typeof c.flickLampCol[c.p.nowPage]!="undefined"){for(var b=0;b<c.p.totalLength;b++){c.flickLampCol[b].removeClass("lamp_cur")}c.flickLampCol[c.p.nowPage].addClass("lamp_cur")}}};var p=function(){if(c.p.autoChangeFlag){e.css({width:d.width()+"px"});f.css({width:d.width()+"px"});if(typeof a.flickBtn!="undefined"){r.css({width:d.width()+"px"})}c.p.wrapperWidth=(c.p.totalLength=f.length)*(c.p.colWidth=f.width());e.css({width:c.p.wrapperWidth});c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition)}};c.flickBtn=function(a,b){var c=$("<span>");c.addClass("flick_btn_"+a);c.html(b);return c};var q=function(){c.p.autoChangeFlag=true};if(typeof a.flickBtn!="undefined"){var r=c.singleCol(a.flickBtn,b).html("").css({width:d.width()+"px"});var s=true;var t=typeof a.flickBtnNextName!="undefined"?a.flickBtnNextName:"next";var u=typeof a.flickBtnBackName!="undefined"?a.flickBtnBackName:"back";c.flickBtnNext=new c.flickBtn("next",t);c.flickBtnBack=new c.flickBtn("back",u);if(c.p.nowPage===0){c.flickBtnNext.addClass("pointer");c.flickBtnBack.addClass("btnFalse")}else if(c.p.nowPage===c.p.totalLength-1){c.flickBtnNext.addClass("btnFalse");c.flickBtnBack.addClass("pointer")}else{c.flickBtnNext.addClass("pointer");c.flickBtnBack.addClass("pointer")}r.append(c.flickBtnNext);r.append(c.flickBtnBack);c.flickBtnNext.bind("click",function(){c.p.autoChangeFlag=false;clearInterval(c.p.Timer);s=false;if(c.p.nowPage<c.p.totalLength-1){c.p.nowPage++;c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);c.flickBtnBack.removeClass("btnFalse").addClass("pointer");if(c.p.nowPage==c.p.totalLength-1){c.flickBtnNext.removeClass("pointer").addClass("btnFalse")}if(typeof a.flickLamp!="undefined"&&typeof c.flickLampCol[c.p.nowPage]!="undefined"){for(var b=0;b<c.p.totalLength;b++){c.flickLampCol[b].removeClass("lamp_cur")}c.flickLampCol[c.p.nowPage].addClass("lamp_cur")}}s=true;q();if(m){c.p.Timer=setInterval(o,n)}});c.flickBtnBack.bind("click",function(){c.p.autoChangeFlag=false;clearInterval(c.p.Timer);s=false;if(c.p.nowPage>0){c.p.nowPage--;c.p.nowPosition=-(c.p.colWidth*c.p.nowPage);j(c.p.nowPosition);c.flickBtnNext.removeClass("btnFalse").addClass("pointer");if(c.p.nowPage===0){c.flickBtnBack.removeClass("pointer").addClass("btnFalse")}if(typeof a.flickLamp!="undefined"&&typeof c.flickLampCol[c.p.nowPage]!="undefined"){for(var b=0;b<c.p.totalLength;b++){c.flickLampCol[b].removeClass("lamp_cur")}c.flickLampCol[c.p.nowPage].addClass("lamp_cur")}}s=true;q();if(m){c.p.Timer=setInterval(o,n)}})}var v=navigator.userAgent;if(!v.match(/Android 1\.5/)||!v.match(/Android 1\.6/)){e.bind("touchstart touchmove touchend touchcancel",w)}if(m){c.p.Timer=setInterval(o,n)}window.addEventListener("load",p,true);(function(){var a=false;window.addEventListener("resize",function(){if(a!==false){clearTimeout(a)}a=setTimeout(function(){p()},200)},true)})()}})(jQuery)
