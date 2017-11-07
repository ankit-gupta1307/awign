function scaleVideoContainer(){var t=$(window).height()+5,e=parseInt(t)+"px";$(".homepage-hero-module").css("height",e)}function initBannerVideoSize(t){$(t).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(t)}function scaleBannerVideoSize(t){var n,s,e=$(window).width(),i=$(window).height()+5;$(t).each(function(){var t=$(this).data("height")/$(this).data("width");$(this).width(e),1e3>e&&(s=i,n=s/t,$(this).css({"margin-top":0,"margin-left":-(n-e)/2+"px"}),$(this).width(n).height(s)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}function upTo(t,e){for(e=e.toLowerCase();t&&t.parentNode;)if(t=t.parentNode,t.tagName&&t.tagName.toLowerCase()==e)return t;return null}(function(){"use strict";var t=this,e=t.Chart,i=function(t){this.canvas=t.canvas,this.ctx=t;var i=function(t,e){return t["offset"+e]?t["offset"+e]:document.defaultView.getComputedStyle(t).getPropertyValue(e)},s=this.width=i(t.canvas,"Width")||t.canvas.width,a=this.height=i(t.canvas,"Height")||t.canvas.height;return s=this.width=t.canvas.width,a=this.height=t.canvas.height,this.aspectRatio=this.width/this.height,n.retinaScale(this),this};i.defaults={global:{animation:!0,animationSteps:60,animationEasing:"easeOutQuart",showScale:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleIntegersOnly:!0,scaleBeginAtZero:!1,scaleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",responsive:!1,maintainAspectRatio:!0,showTooltips:!0,customTooltips:!1,tooltipEvents:["mousemove","touchstart","touchmove","mouseout"],tooltipFillColor:"rgba(0,0,0,0.8)",tooltipFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipFontSize:14,tooltipFontStyle:"normal",tooltipFontColor:"#fff",tooltipTitleFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",tooltipTitleFontSize:14,tooltipTitleFontStyle:"bold",tooltipTitleFontColor:"#fff",tooltipTitleTemplate:"<%= label%>",tooltipYPadding:6,tooltipXPadding:6,tooltipCaretSize:8,tooltipCornerRadius:6,tooltipXOffset:10,tooltipTemplate:"<%if (label){%><%=label%>: <%}%><%= value %>",multiTooltipTemplate:"<%= value %>",multiTooltipKeyBackground:"#fff",segmentColorDefault:["#A6CEE3","#1F78B4","#B2DF8A","#33A02C","#FB9A99","#E31A1C","#FDBF6F","#FF7F00","#CAB2D6","#6A3D9A","#B4B482","#B15928"],segmentHighlightColorDefaults:["#CEF6FF","#47A0DC","#DAFFB2","#5BC854","#FFC2C1","#FF4244","#FFE797","#FFA728","#F2DAFE","#9265C2","#DCDCAA","#D98150"],onAnimationProgress:function(){},onAnimationComplete:function(){}}},i.types={};var n=i.helpers={},s=n.each=function(t,e,i){var n=Array.prototype.slice.call(arguments,3);if(t)if(t.length===+t.length){var s;for(s=0;s<t.length;s++)e.apply(i,[t[s],s].concat(n))}else for(var a in t)e.apply(i,[t[a],a].concat(n))},a=n.clone=function(t){var e={};return s(t,function(i,n){t.hasOwnProperty(n)&&(e[n]=i)}),e},o=n.extend=function(t){return s(Array.prototype.slice.call(arguments,1),function(e){s(e,function(i,n){e.hasOwnProperty(n)&&(t[n]=i)})}),t},r=n.merge=function(t,e){var i=Array.prototype.slice.call(arguments,0);return i.unshift({}),o.apply(null,i)},l=n.indexOf=function(t,e){if(Array.prototype.indexOf)return t.indexOf(e);for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1},d=(n.where=function(t,e){var i=[];return n.each(t,function(t){e(t)&&i.push(t)}),i},n.findNextWhere=function(t,e,i){i||(i=-1);for(var n=i+1;n<t.length;n++){var s=t[n];if(e(s))return s}},n.findPreviousWhere=function(t,e,i){i||(i=t.length);for(var n=i-1;n>=0;n--){var s=t[n];if(e(s))return s}},n.inherits=function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=d,t&&o(i.prototype,t),i.__super__=e.prototype,i}),f=n.noop=function(){},p=n.uid=function(){var t=0;return function(){return"chart-"+t++}}(),v=n.warn=function(t){window.console&&"function"==typeof window.console.warn&&console.warn(t)},g=n.amd="function"==typeof define&&define.amd,m=n.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},y=n.max=function(t){return Math.max.apply(Math,t)},b=n.min=function(t){return Math.min.apply(Math,t)},x=(n.cap=function(t,e,i){if(m(e)){if(t>e)return e}else if(m(i)&&i>t)return i;return t},n.getDecimalPlaces=function(t){if(t%1!==0&&m(t)){var e=t.toString();if(e.indexOf("e-")<0)return e.split(".")[1].length;if(e.indexOf(".")<0)return parseInt(e.split("e-")[1]);var i=e.split(".")[1].split("e-");return i[0].length+parseInt(i[1])}return 0}),C=n.radians=function(t){return t*(Math.PI/180)},S=(n.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,s=Math.sqrt(i*i+n*n),a=2*Math.PI+Math.atan2(n,i);return 0>i&&0>n&&(a+=2*Math.PI),{angle:a,distance:s}},n.aliasPixel=function(t){return t%2===0?0:.5}),T=(n.splineCurve=function(t,e,i,n){var s=Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),a=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)),o=n*s/(s+a),r=n*a/(s+a);return{inner:{x:e.x-o*(i.x-t.x),y:e.y-o*(i.y-t.y)},outer:{x:e.x+r*(i.x-t.x),y:e.y+r*(i.y-t.y)}}},n.calculateOrderOfMagnitude=function(t){return Math.floor(Math.log(t)/Math.LN10)}),M=(n.calculateScaleRange=function(t,e,i,n,a){var o=2,r=Math.floor(e/(1.5*i)),l=o>=r,c=[];s(t,function(t){null==t||c.push(t)});var u=b(c),h=y(c);h===u&&(h+=.5,u>=.5&&!n?u-=.5:h+=.5);for(var d=Math.abs(h-u),f=T(d),p=Math.ceil(h/(1*Math.pow(10,f)))*Math.pow(10,f),v=n?0:Math.floor(u/(1*Math.pow(10,f)))*Math.pow(10,f),g=p-v,m=Math.pow(10,f),w=Math.round(g/m);(w>r||r>2*w)&&!l;)if(w>r)m*=2,w=Math.round(g/m),w%1!==0&&(l=!0);else if(a&&f>=0){if(m/2%1!==0)break;m/=2,w=Math.round(g/m)}else m/=2,w=Math.round(g/m);return l&&(w=o,m=g/w),{steps:w,stepValue:m,min:v,max:v+w*m}},n.template=function(t,e){function n(t,e){var n=/\W/.test(t)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+t.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):i[t]=i[t];return e?n(e):n}if(t instanceof Function)return t(e);var i={};return n(t,e)}),E=(n.generateLabels=function(t,e,i,n){var a=new Array(e);return t&&s(a,function(e,s){a[s]=M(t,{value:i+n*(s+1)})}),a},n.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=1*(.3*1.5)),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),1>t?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)):n*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-E.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*E.easeInBounce(2*t):.5*E.easeOutBounce(2*t-1)+.5}}),L=n.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),V=(n.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),n.animationLoop=function(t,e,i,n,s,a){var o=0,r=E[i]||E.linear,l=function(){o++;var i=o/e,c=r(i);t.call(a,c,i,o),n.call(a,c,i),e>o?a.animationFrame=L(l):s.apply(a)};L(l)},n.getRelativePosition=function(t){var e,i,n=t.originalEvent||t,s=t.currentTarget||t.srcElement,a=s.getBoundingClientRect();return n.touches?(e=n.touches[0].clientX-a.left,i=n.touches[0].clientY-a.top):(e=n.clientX-a.left,i=n.clientY-a.top),{x:e,y:i}},n.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i}),D=n.removeEvent=function(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=f},W=(n.bindEvents=function(t,e,i){t.events||(t.events={}),s(e,function(e){t.events[e]=function(){i.apply(t,arguments)},V(t.chart.canvas,e,t.events[e])})},n.unbindEvents=function(t,e){s(e,function(e,i){D(t.chart.canvas,i,e)})}),_=n.getMaximumWidth=function(t){var e=t.parentNode,i=parseInt(H(e,"padding-left"))+parseInt(H(e,"padding-right"));return e.clientWidth-i},$=n.getMaximumHeight=function(t){var e=t.parentNode,i=parseInt(H(e,"padding-bottom"))+parseInt(H(e,"padding-top"));return e.clientHeight-i},H=n.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},j=(n.getMaximumSize=n.getMaximumWidth,n.retinaScale=function(t){var e=t.ctx,i=t.canvas.width,n=t.canvas.height;window.devicePixelRatio&&(e.canvas.style.width=i+"px",e.canvas.style.height=n+"px",e.canvas.height=n*window.devicePixelRatio,e.canvas.width=i*window.devicePixelRatio,e.scale(window.devicePixelRatio,window.devicePixelRatio))}),N=n.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},q=n.fontString=function(t,e,i){return e+" "+t+"px "+i},X=n.longestText=function(t,e,i){t.font=e;var n=0;return s(i,function(e){var i=t.measureText(e).width;n=i>n?i:n}),n},Y=n.drawRoundedRectangle=function(t,e,i,n,s,a){t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.quadraticCurveTo(e+n,i,e+n,i+a),t.lineTo(e+n,i+s-a),t.quadraticCurveTo(e+n,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.quadraticCurveTo(e,i+s,e,i+s-a),t.lineTo(e,i+a),t.quadraticCurveTo(e,i,e+a,i),t.closePath()};i.instances={},i.Type=function(t,e,n){this.options=e,this.chart=n,this.id=p(),i.instances[this.id]=this,e.responsive&&this.resize(),this.initialize.call(this,t)},o(i.Type.prototype,{initialize:function(){return this},clear:function(){return N(this.chart),this},stop:function(){return i.animationService.cancelAnimation(this),this},resize:function(t){this.stop();var e=this.chart.canvas,i=_(this.chart.canvas),n=this.options.maintainAspectRatio?i/this.chart.aspectRatio:$(this.chart.canvas);return e.width=this.chart.width=i,e.height=this.chart.height=n,j(this.chart),"function"==typeof t&&t.apply(this,Array.prototype.slice.call(arguments,1)),this},reflow:f,render:function(t){if(t&&this.reflow(),this.options.animation&&!t){var e=new i.Animation;e.numSteps=this.options.animationSteps,e.easing=this.options.animationEasing,e.render=function(t,e){var i=n.easingEffects[e.easing],s=e.currentStep/e.numSteps,a=i(s);t.draw(a,s,e.currentStep)},e.onAnimationProgress=this.options.onAnimationProgress,e.onAnimationComplete=this.options.onAnimationComplete,i.animationService.addAnimation(this,e)}else this.draw(),this.options.onAnimationComplete.call(this);return this},generateLegend:function(){return M(this.options.legendTemplate,this)},destroy:function(){this.clear(),W(this,this.events);var t=this.chart.canvas;t.width=this.chart.width,t.height=this.chart.height,t.style.removeProperty?(t.style.removeProperty("width"),t.style.removeProperty("height")):(t.style.removeAttribute("width"),t.style.removeAttribute("height")),delete i.instances[this.id]},showTooltip:function(t,e){"undefined"==typeof this.activeElements&&(this.activeElements=[]);var a=function(t){var e=!1;return t.length!==this.activeElements.length?e=!0:(s(t,function(t,i){t!==this.activeElements[i]&&(e=!0)},this),e)}.call(this,t);if(a||e){if(this.activeElements=t,this.draw(),this.options.customTooltips&&this.options.customTooltips(!1),t.length>0)if(this.datasets&&this.datasets.length>1){for(var o,r,c=this.datasets.length-1;c>=0&&(o=this.datasets[c].points||this.datasets[c].bars||this.datasets[c].segments,r=l(o,t[0]),-1===r);c--);var u=[],h=[],d=function(t){var i,o,l,c,d,e=[],s=[],a=[];return n.each(this.datasets,function(t){i=t.points||t.bars||t.segments,i[r]&&i[r].hasValue()&&e.push(i[r])}),n.each(e,function(t){s.push(t.x),a.push(t.y),u.push(n.template(this.options.multiTooltipTemplate,t)),h.push({fill:t._saved.fillColor||t.fillColor,stroke:t._saved.strokeColor||t.strokeColor})},this),d=b(a),l=y(a),c=b(s),o=y(s),{x:c>this.chart.width/2?c:o,y:(d+l)/2}}.call(this,r);new i.MultiTooltip({x:d.x,y:d.y,xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,xOffset:this.options.tooltipXOffset,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,titleTextColor:this.options.tooltipTitleFontColor,titleFontFamily:this.options.tooltipTitleFontFamily,titleFontStyle:this.options.tooltipTitleFontStyle,titleFontSize:this.options.tooltipTitleFontSize,cornerRadius:this.options.tooltipCornerRadius,labels:u,legendColors:h,legendColorBackground:this.options.multiTooltipKeyBackground,title:M(this.options.tooltipTitleTemplate,t[0]),chart:this.chart,ctx:this.chart.ctx,custom:this.options.customTooltips}).draw()}else s(t,function(t){var e=t.tooltipPosition();new i.Tooltip({x:Math.round(e.x),y:Math.round(e.y),xPadding:this.options.tooltipXPadding,yPadding:this.options.tooltipYPadding,fillColor:this.options.tooltipFillColor,textColor:this.options.tooltipFontColor,fontFamily:this.options.tooltipFontFamily,fontStyle:this.options.tooltipFontStyle,fontSize:this.options.tooltipFontSize,caretHeight:this.options.tooltipCaretSize,cornerRadius:this.options.tooltipCornerRadius,text:M(this.options.tooltipTemplate,t),chart:this.chart,custom:this.options.customTooltips}).draw()},this);return this}},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)}}),i.Type.extend=function(t){var e=this,n=function(){return e.apply(this,arguments)};if(n.prototype=a(e.prototype),o(n.prototype,t),n.extend=i.Type.extend,t.name||e.prototype.name){var s=t.name||e.prototype.name,l=i.defaults[e.prototype.name]?a(i.defaults[e.prototype.name]):{};i.defaults[s]=o(l,t.defaults),i.types[s]=n,i.prototype[s]=function(t,e){var a=r(i.defaults.global,i.defaults[s],e||{});return new n(t,a,this)}}else v("Name not provided for this chart, so it hasn't been registered");return e},i.Element=function(t){o(this,t),this.initialize.apply(this,arguments),this.save()},o(i.Element.prototype,{initialize:function(){},restore:function(t){return t?s(t,function(t){this[t]=this._saved[t]},this):o(this,this._saved),this},save:function(){return this._saved=a(this),delete this._saved._saved,this},update:function(t){return s(t,function(t,e){this._saved[e]=this[e],this[e]=t},this),this},transition:function(t,e){return s(t,function(t,i){this[i]=(t-this._saved[i])*e+this._saved[i]},this),this},tooltipPosition:function(){return{x:this.x,y:this.y}},hasValue:function(){return m(this.value)}}),i.Element.extend=d,i.Point=i.Element.extend({display:!0,inRange:function(t,e){var i=this.hitDetectionRadius+this.radius;return Math.pow(t-this.x,2)+Math.pow(e-this.y,2)<Math.pow(i,2)},draw:function(){if(this.display){var t=this.ctx;t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.closePath(),t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.fillStyle=this.fillColor,t.fill(),t.stroke()}}}),i.Arc=i.Element.extend({inRange:function(t,e){var i=n.getAngleFromPoint(this,{x:t,y:e}),s=i.angle%(2*Math.PI),a=(2*Math.PI+this.startAngle)%(2*Math.PI),o=(2*Math.PI+this.endAngle)%(2*Math.PI)||360,r=a>o?o>=s||s>=a:s>=a&&o>=s,l=i.distance>=this.innerRadius&&i.distance<=this.outerRadius;return r&&l},tooltipPosition:function(){var t=this.startAngle+(this.endAngle-this.startAngle)/2,e=(this.outerRadius-this.innerRadius)/2+this.innerRadius;return{x:this.x+Math.cos(t)*e,y:this.y+Math.sin(t)*e}},draw:function(t){var i=this.ctx;i.beginPath(),i.arc(this.x,this.y,this.outerRadius<0?0:this.outerRadius,this.startAngle,this.endAngle),i.arc(this.x,this.y,this.innerRadius<0?0:this.innerRadius,this.endAngle,this.startAngle,!0),i.closePath(),i.strokeStyle=this.strokeColor,i.lineWidth=this.strokeWidth,i.fillStyle=this.fillColor,i.fill(),i.lineJoin="bevel",this.showStroke&&i.stroke()}}),i.Rectangle=i.Element.extend({draw:function(){var t=this.ctx,e=this.width/2,i=this.x-e,n=this.x+e,s=this.base-(this.base-this.y),a=this.strokeWidth/2;this.showStroke&&(i+=a,n-=a,s+=a),t.beginPath(),t.fillStyle=this.fillColor,t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.moveTo(i,this.base),t.lineTo(i,s),t.lineTo(n,s),t.lineTo(n,this.base),t.fill(),this.showStroke&&t.stroke()},height:function(){return this.base-this.y},inRange:function(t,e){return t>=this.x-this.width/2&&t<=this.x+this.width/2&&e>=this.y&&e<=this.base}}),i.Animation=i.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),i.Tooltip=i.Element.extend({draw:function(){var t=this.chart.ctx;t.font=q(this.fontSize,this.fontStyle,this.fontFamily),this.xAlign="center",this.yAlign="above";var e=this.caretPadding=2,i=t.measureText(this.text).width+2*this.xPadding,n=this.fontSize+2*this.yPadding,s=n+this.caretHeight+e;this.x+i/2>this.chart.width?this.xAlign="left":this.x-i/2<0&&(this.xAlign="right"),this.y-s<0&&(this.yAlign="below");var a=this.x-i/2,o=this.y-s;if(t.fillStyle=this.fillColor,this.custom)this.custom(this);else{switch(this.yAlign){case"above":t.beginPath(),t.moveTo(this.x,this.y-e),t.lineTo(this.x+this.caretHeight,this.y-(e+this.caretHeight)),t.lineTo(this.x-this.caretHeight,this.y-(e+this.caretHeight)),t.closePath(),t.fill();break;case"below":o=this.y+e+this.caretHeight,t.beginPath(),t.moveTo(this.x,this.y+e),t.lineTo(this.x+this.caretHeight,this.y+e+this.caretHeight),t.lineTo(this.x-this.caretHeight,this.y+e+this.caretHeight),t.closePath(),t.fill()}switch(this.xAlign){case"left":a=this.x-i+(this.cornerRadius+this.caretHeight);break;case"right":a=this.x-(this.cornerRadius+this.caretHeight)}Y(t,a,o,i,n,this.cornerRadius),t.fill(),t.fillStyle=this.textColor,t.textAlign="center",t.textBaseline="middle",t.fillText(this.text,a+i/2,o+n/2)}}}),i.MultiTooltip=i.Element.extend({initialize:function(){this.font=q(this.fontSize,this.fontStyle,this.fontFamily),this.titleFont=q(this.titleFontSize,this.titleFontStyle,this.titleFontFamily),this.titleHeight=this.title?1.5*this.titleFontSize:0,this.height=this.labels.length*this.fontSize+(this.labels.length-1)*(this.fontSize/2)+2*this.yPadding+this.titleHeight,this.ctx.font=this.titleFont;var t=this.ctx.measureText(this.title).width,e=X(this.ctx,this.font,this.labels)+this.fontSize+3,i=y([e,t]);this.width=i+2*this.xPadding;var n=this.height/2;this.y-n<0?this.y=n:this.y+n>this.chart.height&&(this.y=this.chart.height-n),this.x>this.chart.width/2?this.x-=this.xOffset+this.width:this.x+=this.xOffset},getLineHeight:function(t){var e=this.y-this.height/2+this.yPadding,i=t-1;return 0===t?e+this.titleHeight/3:e+(1.5*this.fontSize*i+this.fontSize/2)+this.titleHeight},draw:function(){if(this.custom)this.custom(this);else{Y(this.ctx,this.x,this.y-this.height/2,this.width,this.height,this.cornerRadius);var t=this.ctx;t.fillStyle=this.fillColor,t.fill(),t.closePath(),t.textAlign="left",t.textBaseline="middle",t.fillStyle=this.titleTextColor,t.font=this.titleFont,t.fillText(this.title,this.x+this.xPadding,this.getLineHeight(0)),t.font=this.font,n.each(this.labels,function(e,i){t.fillStyle=this.textColor,t.fillText(e,this.x+this.xPadding+this.fontSize+3,this.getLineHeight(i+1)),t.fillStyle=this.legendColorBackground,t.fillRect(this.x+this.xPadding,this.getLineHeight(i+1)-this.fontSize/2,this.fontSize,this.fontSize),t.fillStyle=this.legendColors[i].fill,t.fillRect(this.x+this.xPadding,this.getLineHeight(i+1)-this.fontSize/2,this.fontSize,this.fontSize)},this)}}}),i.Scale=i.Element.extend({initialize:function(){this.fit()},buildYLabels:function(){this.yLabels=[];for(var t=x(this.stepValue),e=0;e<=this.steps;e++)this.yLabels.push(M(this.templateString,{value:(this.min+e*this.stepValue).toFixed(t)}));this.yLabelWidth=this.display&&this.showLabels?X(this.ctx,this.font,this.yLabels)+10:0},addXLabel:function(t){this.xLabels.push(t),this.valuesCount++,this.fit()},removeXLabel:function(){this.xLabels.shift(),this.valuesCount--,this.fit()},fit:function(){this.startPoint=this.display?this.fontSize:0,this.endPoint=this.display?this.height-1.5*this.fontSize-5:this.height,this.startPoint+=this.padding,this.endPoint-=this.padding;var i,t=this.endPoint,e=this.endPoint-this.startPoint;for(this.calculateYRange(e),this.buildYLabels(),this.calculateXLabelRotation();e>this.endPoint-this.startPoint;)e=this.endPoint-this.startPoint,i=this.yLabelWidth,this.calculateYRange(e),this.buildYLabels(),i<this.yLabelWidth&&(this.endPoint=t,this.calculateXLabelRotation())},calculateXLabelRotation:function(){this.ctx.font=this.font;var i,n,t=this.ctx.measureText(this.xLabels[0]).width,e=this.ctx.measureText(this.xLabels[this.xLabels.length-1]).width;if(this.xScalePaddingRight=e/2+3,this.xScalePaddingLeft=t/2>this.yLabelWidth?t/2:this.yLabelWidth,this.xLabelRotation=0,this.display){var a,s=X(this.ctx,this.font,this.xLabels);this.xLabelWidth=s;for(var r=Math.floor(this.calculateX(1)-this.calculateX(0))-6;this.xLabelWidth>r&&0===this.xLabelRotation||this.xLabelWidth>r&&this.xLabelRotation<=90&&this.xLabelRotation>0;)a=Math.cos(C(this.xLabelRotation)),i=a*t,n=a*e,i+this.fontSize/2>this.yLabelWidth&&(this.xScalePaddingLeft=i+this.fontSize/2),this.xScalePaddingRight=this.fontSize/2,this.xLabelRotation++,this.xLabelWidth=a*s;this.xLabelRotation>0&&(this.endPoint-=Math.sin(C(this.xLabelRotation))*s+3)}else this.xLabelWidth=0,this.xScalePaddingRight=this.padding,this.xScalePaddingLeft=this.padding},calculateYRange:f,drawingArea:function(){return this.startPoint-this.endPoint},calculateY:function(t){var e=this.drawingArea()/(this.min-this.max);return this.endPoint-e*(t-this.min)},calculateX:function(t){var i=(this.xLabelRotation>0,this.width-(this.xScalePaddingLeft+this.xScalePaddingRight)),n=i/Math.max(this.valuesCount-(this.offsetGridLines?0:1),1),s=n*t+this.xScalePaddingLeft;return this.offsetGridLines&&(s+=n/2),Math.round(s)},update:function(t){n.extend(this,t),this.fit()},draw:function(){var t=this.ctx,e=(this.endPoint-this.startPoint)/this.steps,i=Math.round(this.xScalePaddingLeft);this.display&&(t.fillStyle=this.textColor,t.font=this.font,s(this.yLabels,function(s,a){var o=this.endPoint-e*a,r=Math.round(o),l=this.showHorizontalLines;t.textAlign="right",t.textBaseline="middle",this.showLabels&&t.fillText(s,i-10,o),0!==a||l||(l=!0),l&&t.beginPath(),a>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),r+=n.aliasPixel(t.lineWidth),l&&(t.moveTo(i,r),t.lineTo(this.width,r),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(i-5,r),t.lineTo(i,r),t.stroke(),t.closePath()},this),s(this.xLabels,function(e,i){var n=this.calculateX(i)+S(this.lineWidth),s=this.calculateX(i-(this.offsetGridLines?.5:0))+S(this.lineWidth),a=this.xLabelRotation>0,o=this.showVerticalLines;0!==i||o||(o=!0),o&&t.beginPath(),i>0?(t.lineWidth=this.gridLineWidth,t.strokeStyle=this.gridLineColor):(t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor),o&&(t.moveTo(s,this.endPoint),t.lineTo(s,this.startPoint-3),t.stroke(),t.closePath()),t.lineWidth=this.lineWidth,t.strokeStyle=this.lineColor,t.beginPath(),t.moveTo(s,this.endPoint),t.lineTo(s,this.endPoint+5),t.stroke(),t.closePath(),t.save(),t.translate(n,a?this.endPoint+12:this.endPoint+8),t.rotate(-1*C(this.xLabelRotation)),t.font=this.font,t.textAlign=a?"right":"center",t.textBaseline=a?"middle":"top",t.fillText(e,0,0),t.restore()},this))}}),i.RadialScale=i.Element.extend({initialize:function(){this.size=b([this.height,this.width]),this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2},calculateCenterOffset:function(t){var e=this.drawingArea/(this.max-this.min);return(t-this.min)*e},update:function(){this.lineArc?this.drawingArea=this.display?this.size/2-(this.fontSize/2+this.backdropPaddingY):this.size/2:this.setScaleSize(),this.buildYLabels()},buildYLabels:function(){this.yLabels=[];for(var t=x(this.stepValue),e=0;e<=this.steps;e++)this.yLabels.push(M(this.templateString,{value:(this.min+e*this.stepValue).toFixed(t)}))},getCircumference:function(){return 2*Math.PI/this.valuesCount},setScaleSize:function(){var e,i,n,s,o,r,c,u,h,d,f,p,t=b([this.height/2-this.pointLabelFontSize-5,this.width/2]),a=this.width,l=0;for(this.ctx.font=q(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),i=0;i<this.valuesCount;i++)e=this.getPointPosition(i,t),n=this.ctx.measureText(M(this.templateString,{value:this.labels[i]})).width+5,0===i||i===this.valuesCount/2?(s=n/2,e.x+s>a&&(a=e.x+s,o=i),e.x-s<l&&(l=e.x-s,c=i)):i<this.valuesCount/2?e.x+n>a&&(a=e.x+n,o=i):i>this.valuesCount/2&&e.x-n<l&&(l=e.x-n,c=i);h=l,d=Math.ceil(a-this.width),r=this.getIndexAngle(o),u=this.getIndexAngle(c),f=d/Math.sin(r+Math.PI/2),p=h/Math.sin(u+Math.PI/2),f=m(f)?f:0,p=m(p)?p:0,this.drawingArea=t-(p+f)/2,this.setCenterPoint(p,f)},setCenterPoint:function(t,e){var i=this.width-e-this.drawingArea,n=t+this.drawingArea;this.xCenter=(n+i)/2,this.yCenter=this.height/2},getIndexAngle:function(t){var e=2*Math.PI/this.valuesCount;return t*e-Math.PI/2},getPointPosition:function(t,e){var i=this.getIndexAngle(t);return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter}},draw:function(){if(this.display){var t=this.ctx;if(s(this.yLabels,function(e,i){if(i>0){var a,n=i*(this.drawingArea/this.steps),s=this.yCenter-n;if(this.lineWidth>0)if(t.strokeStyle=this.lineColor,t.lineWidth=this.lineWidth,this.lineArc)t.beginPath(),t.arc(this.xCenter,this.yCenter,n,0,2*Math.PI),t.closePath(),t.stroke();else{t.beginPath();for(var o=0;o<this.valuesCount;o++)a=this.getPointPosition(o,this.calculateCenterOffset(this.min+i*this.stepValue)),0===o?t.moveTo(a.x,a.y):t.lineTo(a.x,a.y);t.closePath(),t.stroke()}if(this.showLabels){if(t.font=q(this.fontSize,this.fontStyle,this.fontFamily),this.showLabelBackdrop){var r=t.measureText(e).width;t.fillStyle=this.backdropColor,t.fillRect(this.xCenter-r/2-this.backdropPaddingX,s-this.fontSize/2-this.backdropPaddingY,r+2*this.backdropPaddingX,this.fontSize+2*this.backdropPaddingY)}t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.fontColor,t.fillText(e,this.xCenter,s)}}},this),!this.lineArc){t.lineWidth=this.angleLineWidth,t.strokeStyle=this.angleLineColor;for(var e=this.valuesCount-1;e>=0;e--){var i=null,n=null;if(this.angleLineWidth>0&&(i=this.calculateCenterOffset(this.max),n=this.getPointPosition(e,i),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(n.x,n.y),t.stroke(),t.closePath()),this.backgroundColors&&this.backgroundColors.length==this.valuesCount){null==i&&(i=this.calculateCenterOffset(this.max)),null==n&&(n=this.getPointPosition(e,i));var a=this.getPointPosition(0===e?this.valuesCount-1:e-1,i),o=this.getPointPosition(e===this.valuesCount-1?0:e+1,i),r={x:(a.x+n.x)/2,y:(a.y+n.y)/2},l={x:(n.x+o.x)/2,y:(n.y+o.y)/2};t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(r.x,r.y),t.lineTo(n.x,n.y),t.lineTo(l.x,l.y),t.fillStyle=this.backgroundColors[e],t.fill(),t.closePath()}var c=this.getPointPosition(e,this.calculateCenterOffset(this.max)+5);t.font=q(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily),t.fillStyle=this.pointLabelFontColor;var u=this.labels.length,h=this.labels.length/2,d=h/2,f=d>e||e>u-d,p=e===d||e===u-d;0===e?t.textAlign="center":e===h?t.textAlign="center":h>e?t.textAlign="left":t.textAlign="right",p?t.textBaseline="middle":f?t.textBaseline="bottom":t.textBaseline="top",t.fillText(this.labels[e],c.x,c.y)}}}}}),i.animationService={frameDuration:17,animations:[],dropFrames:0,addAnimation:function(t,e){for(var i=0;i<this.animations.length;++i)if(this.animations[i].chartInstance===t)return void(this.animations[i].animationObject=e);this.animations.push({chartInstance:t,animationObject:e}),1==this.animations.length&&n.requestAnimFrame.call(window,this.digestWrapper)},cancelAnimation:function(t){var e=n.findNextWhere(this.animations,function(e){return e.chartInstance===t});e&&this.animations.splice(e,1)},digestWrapper:function(){i.animationService.startDigest.call(i.animationService)},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames-=e);for(var i=0;i<this.animations.length;i++)null===this.animations[i].animationObject.currentStep&&(this.animations[i].animationObject.currentStep=0),this.animations[i].animationObject.currentStep+=1+e,this.animations[i].animationObject.currentStep>this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.currentStep=this.animations[i].animationObject.numSteps),this.animations[i].animationObject.render(this.animations[i].chartInstance,this.animations[i].animationObject),this.animations[i].animationObject.currentStep==this.animations[i].animationObject.numSteps&&(this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance),this.animations.splice(i,1),i--);var s=Date.now(),a=s-t-this.frameDuration,o=a/this.frameDuration;o>1&&(this.dropFrames+=o),this.animations.length>0&&n.requestAnimFrame.call(window,this.digestWrapper)}},n.addEvent(window,"resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(function(){s(i.instances,function(t){t.options.responsive&&t.resize(t.render,!0)})},50)}}()),g?define(function(){return i}):"object"==typeof module&&module.exports&&(module.exports=i),t.Chart=i,i.noConflict=function(){return t.Chart=e,i}}).call(this),function(){"use strict";var t=this,e=t.Chart,i=e.helpers,n={scaleBeginAtZero:!0,scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,
barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'};e.Type.extend({name:"Bar",defaults:n,initialize:function(t){var n=this.options;this.ScaleClass=e.Scale.extend({offsetGridLines:!0,calculateBarX:function(t,e,i){var s=this.calculateBaseWidth(),a=this.calculateX(i)-s/2,o=this.calculateBarWidth(t);return a+o*e+e*n.barDatasetSpacing+o/2},calculateBaseWidth:function(){return this.calculateX(1)-this.calculateX(0)-2*n.barValueSpacing},calculateBarWidth:function(t){var e=this.calculateBaseWidth()-(t-1)*n.barDatasetSpacing;return e/t}}),this.datasets=[],this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var e="mouseout"!==t.type?this.getBarsAtEvent(t):[];this.eachBars(function(t){t.restore(["fillColor","strokeColor"])}),i.each(e,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(e)}),this.BarClass=e.Rectangle.extend({strokeWidth:this.options.barStrokeWidth,showStroke:this.options.barShowStroke,ctx:this.chart.ctx}),i.each(t.datasets,function(e,n){var s={label:e.label||null,fillColor:e.fillColor,strokeColor:e.strokeColor,bars:[]};this.datasets.push(s),i.each(e.data,function(i,n){s.bars.push(new this.BarClass({value:i,label:t.labels[n],datasetLabel:e.label,strokeColor:e.strokeColor,fillColor:e.fillColor,highlightFill:e.highlightFill||e.fillColor,highlightStroke:e.highlightStroke||e.strokeColor}))},this)},this),this.buildScale(t.labels),this.BarClass.prototype.base=this.scale.endPoint,this.eachBars(function(t,e,n){i.extend(t,{width:this.scale.calculateBarWidth(this.datasets.length),x:this.scale.calculateBarX(this.datasets.length,n,e),y:this.scale.endPoint}),t.save()},this),this.render()},update:function(){this.scale.update(),i.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachBars(function(t){t.save()}),this.render()},eachBars:function(t){i.each(this.datasets,function(e,n){i.each(e.bars,t,this,n)},this)},getBarsAtEvent:function(t){for(var a,e=[],n=i.getRelativePosition(t),s=function(t){e.push(t.bars[a])},o=0;o<this.datasets.length;o++)for(a=0;a<this.datasets[o].bars.length;a++)if(this.datasets[o].bars[a].inRange(n.x,n.y))return i.each(this.datasets,s),e;return e},buildScale:function(t){var e=this,n=function(){var t=[];return e.eachBars(function(e){t.push(e.value)}),t},s={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var e=i.calculateScaleRange(n(),t,this.fontSize,this.beginAtZero,this.integersOnly);i.extend(this,e)},xLabels:t,font:i.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.barShowStroke?this.options.barStrokeWidth:0,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&i.extend(s,{calculateYRange:i.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new this.ScaleClass(s)},addData:function(t,e){i.each(t,function(t,i){this.datasets[i].bars.push(new this.BarClass({value:t,label:e,datasetLabel:this.datasets[i].label,x:this.scale.calculateBarX(this.datasets.length,i,this.scale.valuesCount+1),y:this.scale.endPoint,width:this.scale.calculateBarWidth(this.datasets.length),base:this.scale.endPoint,strokeColor:this.datasets[i].strokeColor,fillColor:this.datasets[i].fillColor}))},this),this.scale.addXLabel(e),this.update()},removeData:function(){this.scale.removeXLabel(),i.each(this.datasets,function(t){t.bars.shift()},this),this.update()},reflow:function(){i.extend(this.BarClass.prototype,{y:this.scale.endPoint,base:this.scale.endPoint});var t=i.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var e=t||1;this.clear();this.chart.ctx;this.scale.draw(e),i.each(this.datasets,function(t,n){i.each(t.bars,function(t,i){t.hasValue()&&(t.base=this.scale.endPoint,t.transition({x:this.scale.calculateBarX(this.datasets.length,n,i),y:this.scale.calculateY(t.value),width:this.scale.calculateBarWidth(this.datasets.length)},e).draw())},this)},this)}})}.call(this),function(){"use strict";var t=this,e=t.Chart,i=e.helpers,n={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,percentageInnerCutout:50,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'};e.Type.extend({name:"Doughnut",defaults:n,initialize:function(t){this.segments=[],this.outerRadius=(i.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,this.SegmentArc=e.Arc.extend({ctx:this.chart.ctx,x:this.chart.width/2,y:this.chart.height/2}),this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var e="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];i.each(this.segments,function(t){t.restore(["fillColor"])}),i.each(e,function(t){t.fillColor=t.highlightColor}),this.showTooltip(e)}),this.calculateTotal(t),i.each(t,function(e,i){e.color||(e.color="hsl("+360*i/t.length+", 100%, 50%)"),this.addData(e,i,!0)},this),this.render()},getSegmentsAtEvent:function(t){var e=[],n=i.getRelativePosition(t);return i.each(this.segments,function(t){t.inRange(n.x,n.y)&&e.push(t)},this),e},addData:function(t,i,n){var s=void 0!==i?i:this.segments.length;"undefined"==typeof t.color&&(t.color=e.defaults.global.segmentColorDefault[s%e.defaults.global.segmentColorDefault.length],t.highlight=e.defaults.global.segmentHighlightColorDefaults[s%e.defaults.global.segmentHighlightColorDefaults.length]),this.segments.splice(s,0,new this.SegmentArc({value:t.value,outerRadius:this.options.animateScale?0:this.outerRadius,innerRadius:this.options.animateScale?0:this.outerRadius/100*this.options.percentageInnerCutout,fillColor:t.color,highlightColor:t.highlight||t.color,showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,startAngle:1.5*Math.PI,circumference:this.options.animateRotate?0:this.calculateCircumference(t.value),label:t.label})),n||(this.reflow(),this.update())},calculateCircumference:function(t){return this.total>0?2*Math.PI*(t/this.total):0},calculateTotal:function(t){this.total=0,i.each(t,function(t){this.total+=Math.abs(t.value)},this)},update:function(){this.calculateTotal(this.segments),i.each(this.activeElements,function(t){t.restore(["fillColor"])}),i.each(this.segments,function(t){t.save()}),this.render()},removeData:function(t){var e=i.isNumber(t)?t:this.segments.length-1;this.segments.splice(e,1),this.reflow(),this.update()},reflow:function(){i.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.outerRadius=(i.min([this.chart.width,this.chart.height])-this.options.segmentStrokeWidth/2)/2,i.each(this.segments,function(t){t.update({outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout})},this)},draw:function(t){var e=t?t:1;this.clear(),i.each(this.segments,function(t,i){t.transition({circumference:this.calculateCircumference(t.value),outerRadius:this.outerRadius,innerRadius:this.outerRadius/100*this.options.percentageInnerCutout},e),t.endAngle=t.startAngle+t.circumference,t.draw(),0===i&&(t.startAngle=1.5*Math.PI),i<this.segments.length-1&&(this.segments[i+1].startAngle=t.endAngle)},this)}}),e.types.Doughnut.extend({name:"Pie",defaults:i.merge(n,{percentageInnerCutout:0})})}.call(this),function(){"use strict";var t=this,e=t.Chart,i=e.helpers,n={scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',offsetGridLines:!1};e.Type.extend({name:"Line",defaults:n,initialize:function(t){this.PointClass=e.Point.extend({offsetGridLines:this.options.offsetGridLines,strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx,inRange:function(t){return Math.pow(t-this.x,2)<Math.pow(this.radius+this.hitDetectionRadius,2)}}),this.datasets=[],this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var e="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),i.each(e,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(e)}),i.each(t.datasets,function(e){var n={label:e.label||null,fillColor:e.fillColor,strokeColor:e.strokeColor,pointColor:e.pointColor,pointStrokeColor:e.pointStrokeColor,points:[]};this.datasets.push(n),i.each(e.data,function(i,s){n.points.push(new this.PointClass({value:i,label:t.labels[s],datasetLabel:e.label,strokeColor:e.pointStrokeColor,fillColor:e.pointColor,highlightFill:e.pointHighlightFill||e.pointColor,highlightStroke:e.pointHighlightStroke||e.pointStrokeColor}))},this),this.buildScale(t.labels),this.eachPoints(function(t,e){i.extend(t,{x:this.scale.calculateX(e),y:this.scale.endPoint}),t.save()},this)},this),this.render()},update:function(){this.scale.update(),i.each(this.activeElements,function(t){t.restore(["fillColor","strokeColor"])}),this.eachPoints(function(t){t.save()}),this.render()},eachPoints:function(t){i.each(this.datasets,function(e){i.each(e.points,t,this)},this)},getPointsAtEvent:function(t){var e=[],n=i.getRelativePosition(t);return i.each(this.datasets,function(t){i.each(t.points,function(t){t.inRange(n.x,n.y)&&e.push(t)})},this),e},buildScale:function(t){var n=this,s=function(){var t=[];return n.eachPoints(function(e){t.push(e.value)}),t},a={templateString:this.options.scaleLabel,height:this.chart.height,width:this.chart.width,ctx:this.chart.ctx,textColor:this.options.scaleFontColor,offsetGridLines:this.options.offsetGridLines,fontSize:this.options.scaleFontSize,fontStyle:this.options.scaleFontStyle,fontFamily:this.options.scaleFontFamily,valuesCount:t.length,beginAtZero:this.options.scaleBeginAtZero,integersOnly:this.options.scaleIntegersOnly,calculateYRange:function(t){var e=i.calculateScaleRange(s(),t,this.fontSize,this.beginAtZero,this.integersOnly);i.extend(this,e)},xLabels:t,font:i.fontString(this.options.scaleFontSize,this.options.scaleFontStyle,this.options.scaleFontFamily),lineWidth:this.options.scaleLineWidth,lineColor:this.options.scaleLineColor,showHorizontalLines:this.options.scaleShowHorizontalLines,showVerticalLines:this.options.scaleShowVerticalLines,gridLineWidth:this.options.scaleShowGridLines?this.options.scaleGridLineWidth:0,gridLineColor:this.options.scaleShowGridLines?this.options.scaleGridLineColor:"rgba(0,0,0,0)",padding:this.options.showScale?0:this.options.pointDotRadius+this.options.pointDotStrokeWidth,showLabels:this.options.scaleShowLabels,display:this.options.showScale};this.options.scaleOverride&&i.extend(a,{calculateYRange:i.noop,steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}),this.scale=new e.Scale(a)},addData:function(t,e){i.each(t,function(t,i){this.datasets[i].points.push(new this.PointClass({value:t,label:e,datasetLabel:this.datasets[i].label,x:this.scale.calculateX(this.scale.valuesCount+1),y:this.scale.endPoint,strokeColor:this.datasets[i].pointStrokeColor,fillColor:this.datasets[i].pointColor}))},this),this.scale.addXLabel(e),this.update()},removeData:function(){this.scale.removeXLabel(),i.each(this.datasets,function(t){t.points.shift()},this),this.update()},reflow:function(){var t=i.extend({height:this.chart.height,width:this.chart.width});this.scale.update(t)},draw:function(t){var e=t||1;this.clear();var n=this.chart.ctx,s=function(t){return null!==t.value},a=function(t,e,n){return i.findNextWhere(e,s,n)||t},o=function(t,e,n){return i.findPreviousWhere(e,s,n)||t};this.scale&&(this.scale.draw(e),i.each(this.datasets,function(t){var r=i.where(t.points,s);i.each(t.points,function(t,i){t.hasValue()&&t.transition({y:this.scale.calculateY(t.value),x:this.scale.calculateX(i)},e)},this),this.options.bezierCurve&&i.each(r,function(t,e){var n=e>0&&e<r.length-1?this.options.bezierCurveTension:0;t.controlPoints=i.splineCurve(o(t,r,e),t,a(t,r,e),n),t.controlPoints.outer.y>this.scale.endPoint?t.controlPoints.outer.y=this.scale.endPoint:t.controlPoints.outer.y<this.scale.startPoint&&(t.controlPoints.outer.y=this.scale.startPoint),t.controlPoints.inner.y>this.scale.endPoint?t.controlPoints.inner.y=this.scale.endPoint:t.controlPoints.inner.y<this.scale.startPoint&&(t.controlPoints.inner.y=this.scale.startPoint)},this),n.lineWidth=this.options.datasetStrokeWidth,n.strokeStyle=t.strokeColor,n.beginPath(),i.each(r,function(t,e){if(0===e)n.moveTo(t.x,t.y);else if(this.options.bezierCurve){var i=o(t,r,e);n.bezierCurveTo(i.controlPoints.outer.x,i.controlPoints.outer.y,t.controlPoints.inner.x,t.controlPoints.inner.y,t.x,t.y)}else n.lineTo(t.x,t.y)},this),this.options.datasetStroke&&n.stroke(),this.options.datasetFill&&r.length>0&&(n.lineTo(r[r.length-1].x,this.scale.endPoint),n.lineTo(r[0].x,this.scale.endPoint),n.fillStyle=t.fillColor,n.closePath(),n.fill()),i.each(r,function(t){t.draw()})},this))}})}.call(this),function(){"use strict";var t=this,e=t.Chart,i=e.helpers,n={scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBeginAtZero:!0,scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,scaleShowLine:!0,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'};e.Type.extend({name:"PolarArea",defaults:n,initialize:function(t){this.segments=[],this.SegmentArc=e.Arc.extend({showStroke:this.options.segmentShowStroke,strokeWidth:this.options.segmentStrokeWidth,strokeColor:this.options.segmentStrokeColor,ctx:this.chart.ctx,innerRadius:0,x:this.chart.width/2,y:this.chart.height/2}),this.scale=new e.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,lineArc:!0,width:this.chart.width,height:this.chart.height,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,valuesCount:t.length}),this.updateScaleRange(t),this.scale.update(),i.each(t,function(t,e){this.addData(t,e,!0)},this),this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var e="mouseout"!==t.type?this.getSegmentsAtEvent(t):[];i.each(this.segments,function(t){t.restore(["fillColor"])}),i.each(e,function(t){t.fillColor=t.highlightColor}),this.showTooltip(e)}),this.render()},getSegmentsAtEvent:function(t){var e=[],n=i.getRelativePosition(t);return i.each(this.segments,function(t){t.inRange(n.x,n.y)&&e.push(t)},this),e},addData:function(t,e,i){var n=e||this.segments.length;this.segments.splice(n,0,new this.SegmentArc({fillColor:t.color,highlightColor:t.highlight||t.color,label:t.label,value:t.value,outerRadius:this.options.animateScale?0:this.scale.calculateCenterOffset(t.value),circumference:this.options.animateRotate?0:this.scale.getCircumference(),startAngle:1.5*Math.PI})),i||(this.reflow(),this.update())},removeData:function(t){var e=i.isNumber(t)?t:this.segments.length-1;this.segments.splice(e,1),this.reflow(),this.update()},calculateTotal:function(t){this.total=0,i.each(t,function(t){this.total+=t.value},this),this.scale.valuesCount=this.segments.length},updateScaleRange:function(t){var e=[];i.each(t,function(t){e.push(t.value)});var n=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:i.calculateScaleRange(e,i.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);i.extend(this.scale,n,{size:i.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2})},update:function(){this.calculateTotal(this.segments),i.each(this.segments,function(t){t.save()}),this.reflow(),this.render()},reflow:function(){i.extend(this.SegmentArc.prototype,{x:this.chart.width/2,y:this.chart.height/2}),this.updateScaleRange(this.segments),this.scale.update(),i.extend(this.scale,{xCenter:this.chart.width/2,yCenter:this.chart.height/2}),i.each(this.segments,function(t){t.update({outerRadius:this.scale.calculateCenterOffset(t.value)})},this)},draw:function(t){var e=t||1;this.clear(),i.each(this.segments,function(t,i){t.transition({circumference:this.scale.getCircumference(),outerRadius:this.scale.calculateCenterOffset(t.value)},e),t.endAngle=t.startAngle+t.circumference,0===i&&(t.startAngle=1.5*Math.PI),i<this.segments.length-1&&(this.segments[i+1].startAngle=t.endAngle),t.draw()},this),this.scale.draw()}})}.call(this),function(){"use strict";var t=this,e=t.Chart,i=e.helpers;e.Type.extend({name:"Radar",defaults:{scaleShowLine:!0,angleShowLineOut:!0,scaleShowLabels:!1,scaleBeginAtZero:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:10,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,legendTemplate:'<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'},initialize:function(t){this.PointClass=e.Point.extend({strokeWidth:this.options.pointDotStrokeWidth,radius:this.options.pointDotRadius,display:this.options.pointDot,hitDetectionRadius:this.options.pointHitDetectionRadius,ctx:this.chart.ctx}),this.datasets=[],this.buildScale(t),this.options.showTooltips&&i.bindEvents(this,this.options.tooltipEvents,function(t){var e="mouseout"!==t.type?this.getPointsAtEvent(t):[];this.eachPoints(function(t){t.restore(["fillColor","strokeColor"])}),i.each(e,function(t){t.fillColor=t.highlightFill,t.strokeColor=t.highlightStroke}),this.showTooltip(e)}),i.each(t.datasets,function(e){var n={label:e.label||null,fillColor:e.fillColor,strokeColor:e.strokeColor,pointColor:e.pointColor,pointStrokeColor:e.pointStrokeColor,points:[]};this.datasets.push(n),i.each(e.data,function(i,s){var a;this.scale.animation||(a=this.scale.getPointPosition(s,this.scale.calculateCenterOffset(i))),n.points.push(new this.PointClass({value:i,label:t.labels[s],datasetLabel:e.label,x:this.options.animation?this.scale.xCenter:a.x,y:this.options.animation?this.scale.yCenter:a.y,strokeColor:e.pointStrokeColor,fillColor:e.pointColor,highlightFill:e.pointHighlightFill||e.pointColor,highlightStroke:e.pointHighlightStroke||e.pointStrokeColor}))},this)},this),this.render()},eachPoints:function(t){i.each(this.datasets,function(e){i.each(e.points,t,this)},this)},getPointsAtEvent:function(t){var e=i.getRelativePosition(t),n=i.getAngleFromPoint({x:this.scale.xCenter,y:this.scale.yCenter},e),s=2*Math.PI/this.scale.valuesCount,a=Math.round((n.angle-1.5*Math.PI)/s),o=[];return(a>=this.scale.valuesCount||0>a)&&(a=0),n.distance<=this.scale.drawingArea&&i.each(this.datasets,function(t){o.push(t.points[a])}),o},buildScale:function(t){this.scale=new e.RadialScale({display:this.options.showScale,fontStyle:this.options.scaleFontStyle,fontSize:this.options.scaleFontSize,fontFamily:this.options.scaleFontFamily,fontColor:this.options.scaleFontColor,showLabels:this.options.scaleShowLabels,showLabelBackdrop:this.options.scaleShowLabelBackdrop,backdropColor:this.options.scaleBackdropColor,backgroundColors:this.options.scaleBackgroundColors,backdropPaddingY:this.options.scaleBackdropPaddingY,backdropPaddingX:this.options.scaleBackdropPaddingX,lineWidth:this.options.scaleShowLine?this.options.scaleLineWidth:0,lineColor:this.options.scaleLineColor,angleLineColor:this.options.angleLineColor,angleLineWidth:this.options.angleShowLineOut?this.options.angleLineWidth:0,pointLabelFontColor:this.options.pointLabelFontColor,pointLabelFontSize:this.options.pointLabelFontSize,pointLabelFontFamily:this.options.pointLabelFontFamily,pointLabelFontStyle:this.options.pointLabelFontStyle,height:this.chart.height,width:this.chart.width,xCenter:this.chart.width/2,yCenter:this.chart.height/2,ctx:this.chart.ctx,templateString:this.options.scaleLabel,labels:t.labels,valuesCount:t.datasets[0].data.length}),this.scale.setScaleSize(),this.updateScaleRange(t.datasets),this.scale.buildYLabels()},updateScaleRange:function(t){var e=function(){var e=[];return i.each(t,function(t){t.data?e=e.concat(t.data):i.each(t.points,function(t){e.push(t.value)})}),e}(),n=this.options.scaleOverride?{steps:this.options.scaleSteps,stepValue:this.options.scaleStepWidth,min:this.options.scaleStartValue,max:this.options.scaleStartValue+this.options.scaleSteps*this.options.scaleStepWidth}:i.calculateScaleRange(e,i.min([this.chart.width,this.chart.height])/2,this.options.scaleFontSize,this.options.scaleBeginAtZero,this.options.scaleIntegersOnly);i.extend(this.scale,n)},addData:function(t,e){this.scale.valuesCount++,i.each(t,function(t,i){var n=this.scale.getPointPosition(this.scale.valuesCount,this.scale.calculateCenterOffset(t));this.datasets[i].points.push(new this.PointClass({value:t,label:e,datasetLabel:this.datasets[i].label,x:n.x,y:n.y,strokeColor:this.datasets[i].pointStrokeColor,fillColor:this.datasets[i].pointColor}))},this),this.scale.labels.push(e),this.reflow(),this.update()},removeData:function(){this.scale.valuesCount--,this.scale.labels.shift(),i.each(this.datasets,function(t){t.points.shift()},this),this.reflow(),this.update()},update:function(){this.eachPoints(function(t){t.save()}),this.reflow(),this.render()},reflow:function(){i.extend(this.scale,{width:this.chart.width,height:this.chart.height,size:i.min([this.chart.width,this.chart.height]),xCenter:this.chart.width/2,yCenter:this.chart.height/2}),this.updateScaleRange(this.datasets),this.scale.setScaleSize(),this.scale.buildYLabels()},draw:function(t){var e=t||1,n=this.chart.ctx;this.clear(),this.scale.draw(),i.each(this.datasets,function(t){i.each(t.points,function(t,i){t.hasValue()&&t.transition(this.scale.getPointPosition(i,this.scale.calculateCenterOffset(t.value)),e)},this),n.lineWidth=this.options.datasetStrokeWidth,n.strokeStyle=t.strokeColor,n.beginPath(),i.each(t.points,function(t,e){0===e?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)},this),n.closePath(),n.stroke(),n.fillStyle=t.fillColor,this.options.datasetFill&&n.fill(),i.each(t.points,function(t){t.hasValue()&&t.draw()})},this)}})}.call(this),$(".smooth-scroll").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href");$("body,html").animate({scrollTop:$(e).offset().top},700)}),!function(t,e,i,n){"use strict";function s(t,e,i){return setTimeout(u(t,i),e)}function a(t,e,i){return Array.isArray(t)?(o(t,i[e],i),!0):!1}function o(t,e,i){var s;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(s=0;s<t.length;)e.call(i,t[s],s,t),s++;else for(s in t)t.hasOwnProperty(s)&&e.call(i,t[s],s,t)}function r(t,e,i){for(var s=Object.keys(e),a=0;a<s.length;)(!i||i&&t[s[a]]===n)&&(t[s[a]]=e[s[a]]),a++;return t}function l(t,e){return r(t,e,!0)}function c(t,e,i){var n,s=e.prototype;n=t.prototype=Object.create(s),n.constructor=t,n._super=s,i&&r(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function h(t,e){return typeof t==ut?t.apply(e?e[0]||n:n,e):t}function d(t,e){return t===n?e:t}function f(t,e,i){o(m(e),function(e){t.addEventListener(e,i,!1)})}function p(t,e,i){o(m(e),function(e){t.removeEventListener(e,i,!1)})}function v(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function g(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function y(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function b(t){return Array.prototype.slice.call(t,0)}function w(t,e,i){for(var n=[],s=[],a=0;a<t.length;){var o=e?t[a][e]:t[a];y(s,o)<0&&n.push(t[a]),s[a]=o,a++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function x(t,e){for(var i,s,a=e[0].toUpperCase()+e.slice(1),o=0;o<lt.length;){if(i=lt[o],s=i?i+a:e,s in t)return s;o++}return n}function C(){return pt++}function k(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function S(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){h(t.options.enable,[t])&&i.handler(e)},this.init()}function P(t){var e,i=t.options.inputClass;return new(e=i?i:mt?_:yt?B:gt?N:W)(t,T)}function T(t,e,i){var n=i.pointers.length,s=i.changedPointers.length,a=e&St&&0===n-s,o=e&(Tt|At)&&0===n-s;i.isFirst=!!a,i.isFinal=!!o,a&&(t.session={}),i.eventType=e,A(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function A(t,e){var i=t.session,n=e.pointers,s=n.length;i.firstInput||(i.firstInput=E(e)),s>1&&!i.firstMultiple?i.firstMultiple=E(e):1===s&&(i.firstMultiple=!1);var a=i.firstInput,o=i.firstMultiple,r=o?o.center:a.center,l=e.center=L(n);e.timeStamp=ft(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=V(r,l),e.distance=z(r,l),M(i,e),e.offsetDirection=I(e.deltaX,e.deltaY),e.scale=o?R(o.pointers,n):1,e.rotation=o?D(o.pointers,n):0,O(i,e);var c=t.element;v(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}function M(t,e){var i=e.center,n=t.offsetDelta||{},s=t.prevDelta||{},a=t.prevInput||{};(e.eventType===St||a.eventType===Tt)&&(s=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=s.x+(i.x-n.x),e.deltaY=s.y+(i.y-n.y)}function O(t,e){var i,s,a,o,r=t.lastInterval||e,l=e.timeStamp-r.timeStamp;if(e.eventType!=At&&(l>kt||r.velocity===n)){var c=r.deltaX-e.deltaX,u=r.deltaY-e.deltaY,h=F(l,c,u);s=h.x,a=h.y,i=dt(h.x)>dt(h.y)?h.x:h.y,o=I(c,u),t.lastInterval=e}else i=r.velocity,s=r.velocityX,a=r.velocityY,o=r.direction;e.velocity=i,e.velocityX=s,e.velocityY=a,e.direction=o}function E(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:ht(t.pointers[i].clientX),clientY:ht(t.pointers[i].clientY)},i++;return{timeStamp:ft(),pointers:e,center:L(e),deltaX:t.deltaX,deltaY:t.deltaY}}function L(t){var e=t.length;if(1===e)return{x:ht(t[0].clientX),y:ht(t[0].clientY)};for(var i=0,n=0,s=0;e>s;)i+=t[s].clientX,n+=t[s].clientY,s++;return{x:ht(i/e),y:ht(n/e)}}function F(t,e,i){return{x:e/t||0,y:i/t||0}}function I(t,e){return t===e?Mt:dt(t)>=dt(e)?t>0?Ot:Et:e>0?Lt:Ft}function z(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return Math.sqrt(n*n+s*s)}function V(t,e,i){i||(i=Dt);var n=e[i[0]]-t[i[0]],s=e[i[1]]-t[i[1]];return 180*Math.atan2(s,n)/Math.PI}function D(t,e){return V(e[1],e[0],Rt)-V(t[1],t[0],Rt)}function R(t,e){return z(e[0],e[1],Rt)/z(t[0],t[1],Rt)}function W(){this.evEl=_t,this.evWin=$t,this.allow=!0,this.pressed=!1,S.apply(this,arguments)}function _(){this.evEl=jt,this.evWin=Nt,S.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function $(){this.evTarget=Xt,this.evWin=Yt,this.started=!1,S.apply(this,arguments)}function H(t,e){var i=b(t.touches),n=b(t.changedTouches);return e&(Tt|At)&&(i=w(i.concat(n),"identifier",!0)),[i,n]}function B(){this.evTarget=Gt,this.targetIds={},S.apply(this,arguments)}function j(t,e){var i=b(t.touches),n=this.targetIds;if(e&(St|Pt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var s,a,o=b(t.changedTouches),r=[],l=this.target;if(a=i.filter(function(t){return v(t.target,l)}),e===St)for(s=0;s<a.length;)n[a[s].identifier]=!0,s++;for(s=0;s<o.length;)n[o[s].identifier]&&r.push(o[s]),e&(Tt|At)&&delete n[o[s].identifier],s++;return r.length?[w(a.concat(r),"identifier",!0),r]:void 0}function N(){S.apply(this,arguments);var t=u(this.handler,this);this.touch=new B(this.manager,t),this.mouse=new W(this.manager,t)}function q(t,e){this.manager=t,this.set(e)}function X(t){if(g(t,ee))return ee;var e=g(t,ie),i=g(t,ne);return e&&i?ie+" "+ne:e||i?e?ie:ne:g(t,te)?te:Kt}function Y(t){this.id=C(),this.manager=null,this.options=l(t||{},this.defaults),this.options.enable=d(this.options.enable,!0),this.state=se,this.simultaneous={},this.requireFail=[]}function Q(t){return t&ce?"cancel":t&re?"end":t&oe?"move":t&ae?"start":""}function G(t){return t==Ft?"down":t==Lt?"up":t==Ot?"left":t==Et?"right":""}function U(t,e){var i=e.manager;return i?i.get(t):t}function Z(){Y.apply(this,arguments)}function J(){Z.apply(this,arguments),this.pX=null,this.pY=null}function K(){Z.apply(this,arguments)}function tt(){Y.apply(this,arguments),this._timer=null,this._input=null}function et(){Z.apply(this,arguments)}function it(){Z.apply(this,arguments)}function nt(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function st(t,e){return e=e||{},e.recognizers=d(e.recognizers,st.defaults.preset),new at(t,e)}function at(t,e){e=e||{},this.options=l(e,st.defaults),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.element=t,this.input=P(this),this.touchAction=new q(this,this.options.touchAction),ot(this,!0),o(e.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ot(t,e){var i=t.element;o(t.options.cssProps,function(t,n){i.style[x(i.style,n)]=e?t:""})}function rt(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var lt=["","webkit","moz","MS","ms","o"],ct=e.createElement("div"),ut="function",ht=Math.round,dt=Math.abs,ft=Date.now,pt=1,vt=/mobile|tablet|ip(ad|hone|od)|android/i,gt="ontouchstart"in t,mt=x(t,"PointerEvent")!==n,yt=gt&&vt.test(navigator.userAgent),bt="touch",wt="pen",xt="mouse",Ct="kinect",kt=25,St=1,Pt=2,Tt=4,At=8,Mt=1,Ot=2,Et=4,Lt=8,Ft=16,It=Ot|Et,zt=Lt|Ft,Vt=It|zt,Dt=["x","y"],Rt=["clientX","clientY"];
S.prototype={handler:function(){},init:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(k(this.element),this.evWin,this.domHandler)}};var Wt={mousedown:St,mousemove:Pt,mouseup:Tt},_t="mousedown",$t="mousemove mouseup";c(W,S,{handler:function(t){var e=Wt[t.type];e&St&&0===t.button&&(this.pressed=!0),e&Pt&&1!==t.which&&(e=Tt),this.pressed&&this.allow&&(e&Tt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var Ht={pointerdown:St,pointermove:Pt,pointerup:Tt,pointercancel:At,pointerout:At},Bt={2:bt,3:wt,4:xt,5:Ct},jt="pointerdown",Nt="pointermove pointerup pointercancel";t.MSPointerEvent&&(jt="MSPointerDown",Nt="MSPointerMove MSPointerUp MSPointerCancel"),c(_,S,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),s=Ht[n],a=Bt[t.pointerType]||t.pointerType,o=a==bt,r=y(e,t.pointerId,"pointerId");s&St&&(0===t.button||o)?0>r&&(e.push(t),r=e.length-1):s&(Tt|At)&&(i=!0),0>r||(e[r]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),i&&e.splice(r,1))}});var qt={touchstart:St,touchmove:Pt,touchend:Tt,touchcancel:At},Xt="touchstart",Yt="touchstart touchmove touchend touchcancel";c($,S,{handler:function(t){var e=qt[t.type];if(e===St&&(this.started=!0),this.started){var i=H.call(this,t,e);e&(Tt|At)&&0===i[0].length-i[1].length&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}});var Qt={touchstart:St,touchmove:Pt,touchend:Tt,touchcancel:At},Gt="touchstart touchmove touchend touchcancel";c(B,S,{handler:function(t){var e=Qt[t.type],i=j.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:bt,srcEvent:t})}}),c(N,S,{handler:function(t,e,i){var n=i.pointerType==bt,s=i.pointerType==xt;if(n)this.mouse.allow=!1;else if(s&&!this.mouse.allow)return;e&(Tt|At)&&(this.mouse.allow=!0),this.callback(t,e,i)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ut=x(ct.style,"touchAction"),Zt=Ut!==n,Jt="compute",Kt="auto",te="manipulation",ee="none",ie="pan-x",ne="pan-y";q.prototype={set:function(t){t==Jt&&(t=this.compute()),Zt&&(this.manager.element.style[Ut]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){h(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),X(t.join(" "))},preventDefaults:function(t){if(!Zt){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var n=this.actions,s=g(n,ee),a=g(n,ne),o=g(n,ie);return s||a&&i&It||o&&i&zt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var se=1,ae=2,oe=4,re=8,le=re,ce=16,ue=32;Y.prototype={defaults:{},set:function(t){return r(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(a(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=U(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return a(t,"dropRecognizeWith",this)?this:(t=U(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(a(t,"requireFailure",this))return this;var e=this.requireFail;return t=U(t,this),-1===y(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(a(t,"dropRequireFailure",this))return this;t=U(t,this);var e=y(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(i.options.event+(e?Q(n):""),t)}var i=this,n=this.state;re>n&&e(!0),e(),n>=re&&e(!0)},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=ue)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(ue|se)))return!1;t++}return!0},recognize:function(t){var e=r({},t);return h(this.options.enable,[this,e])?(this.state&(le|ce|ue)&&(this.state=se),this.state=this.process(e),void(this.state&(ae|oe|re|ce)&&this.tryEmit(e))):(this.reset(),void(this.state=ue))},process:function(){},getTouchAction:function(){},reset:function(){}},c(Z,Y,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(ae|oe),s=this.attrTest(t);return n&&(i&At||!s)?e|ce:n||s?i&Tt?e|re:e&ae?e|oe:ae:ue}}),c(J,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Vt},getTouchAction:function(){var t=this.options.direction,e=[];return t&It&&e.push(ne),t&zt&&e.push(ie),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,s=t.direction,a=t.deltaX,o=t.deltaY;return s&e.direction||(e.direction&It?(s=0===a?Mt:0>a?Ot:Et,i=a!=this.pX,n=Math.abs(t.deltaX)):(s=0===o?Mt:0>o?Lt:Ft,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=s,i&&n>e.threshold&&s&e.direction},attrTest:function(t){return Z.prototype.attrTest.call(this,t)&&(this.state&ae||!(this.state&ae)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this._super.emit.call(this,t)}}),c(K,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ae)},emit:function(t){if(this._super.emit.call(this,t),1!==t.scale){var e=t.scale<1?"in":"out";this.manager.emit(this.options.event+e,t)}}}),c(tt,Y,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(Tt|At)&&!a)this.reset();else if(t.eventType&St)this.reset(),this._timer=s(function(){this.state=le,this.tryEmit()},e.time,this);else if(t.eventType&Tt)return le;return ue},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===le&&(t&&t.eventType&Tt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=ft(),this.manager.emit(this.options.event,this._input)))}}),c(et,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ee]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ae)}}),c(it,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:It|zt,pointers:1},getTouchAction:function(){return J.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(It|zt)?e=t.velocity:i&It?e=t.velocityX:i&zt&&(e=t.velocityY),this._super.attrTest.call(this,t)&&i&t.direction&&t.distance>this.options.threshold&&dt(e)>this.options.velocity&&t.eventType&Tt},emit:function(t){var e=G(t.direction);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),c(nt,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[te]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,a=t.deltaTime<e.time;if(this.reset(),t.eventType&St&&0===this.count)return this.failTimeout();if(n&&a&&i){if(t.eventType!=Tt)return this.failTimeout();var o=this.pTime?t.timeStamp-this.pTime<e.interval:!0,r=!this.pCenter||z(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,r&&o?this.count+=1:this.count=1,this._input=t;var l=this.count%e.taps;if(0===l)return this.hasRequireFailures()?(this._timer=s(function(){this.state=le,this.tryEmit()},e.interval,this),ae):le}return ue},failTimeout:function(){return this._timer=s(function(){this.state=ue},this.options.interval,this),ue},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==le&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),st.VERSION="2.0.4",st.defaults={domEvents:!1,touchAction:Jt,enable:!0,inputTarget:null,inputClass:null,preset:[[et,{enable:!1}],[K,{enable:!1},["rotate"]],[it,{direction:It}],[J,{direction:It},["swipe"]],[nt],[nt,{event:"doubletap",taps:2},["tap"]],[tt]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var he=1,de=2;at.prototype={set:function(t){return r(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?de:he},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,s=e.curRecognizer;(!s||s&&s.state&le)&&(s=e.curRecognizer=null);for(var a=0;a<n.length;)i=n[a],e.stopped===de||s&&i!=s&&!i.canRecognizeWith(s)?i.reset():i.recognize(t),!s&&i.state&(ae|oe|re)&&(s=e.curRecognizer=i),a++}},get:function(t){if(t instanceof Y)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(a(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(a(t,"remove",this))return this;var e=this.recognizers;return t=this.get(t),e.splice(y(e,t),1),this.touchAction.update(),this},on:function(t,e){var i=this.handlers;return o(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this},off:function(t,e){var i=this.handlers;return o(m(t),function(t){e?i[t].splice(y(i[t],e),1):delete i[t]}),this},emit:function(t,e){this.options.domEvents&&rt(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ot(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},r(st,{INPUT_START:St,INPUT_MOVE:Pt,INPUT_END:Tt,INPUT_CANCEL:At,STATE_POSSIBLE:se,STATE_BEGAN:ae,STATE_CHANGED:oe,STATE_ENDED:re,STATE_RECOGNIZED:le,STATE_CANCELLED:ce,STATE_FAILED:ue,DIRECTION_NONE:Mt,DIRECTION_LEFT:Ot,DIRECTION_RIGHT:Et,DIRECTION_UP:Lt,DIRECTION_DOWN:Ft,DIRECTION_HORIZONTAL:It,DIRECTION_VERTICAL:zt,DIRECTION_ALL:Vt,Manager:at,Input:S,TouchAction:q,TouchInput:B,MouseInput:W,PointerEventInput:_,TouchMouseInput:N,SingleTouchInput:$,Recognizer:Y,AttrRecognizer:Z,Tap:nt,Pan:J,Swipe:it,Pinch:K,Rotate:et,Press:tt,on:f,off:p,each:o,merge:l,extend:r,inherit:c,bindFn:u,prefixed:x}),typeof define==ut&&define.amd?define(function(){return st}):"undefined"!=typeof module&&module.exports?module.exports=st:t[i]=st}(window,document,"Hammer"),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){function i(i,n){var s=t(i);s.data("hammer")||s.data("hammer",new e(s[0],n))}t.fn.hammer=function(t){return this.each(function(){i(this,t)})},e.Manager.prototype.emit=function(e){return function(i,n){e.call(this,i,n),t(this.element).trigger({type:i,gesture:n})}}(e.Manager.prototype.emit)}),$(".rotate-btn").on("click",function(){var t=$(this).attr("data-card");$("#"+t).toggleClass("flipped")}),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){t(this).find(".card-reveal").length&&(t(e.target).is(t(".card-reveal .card-title"))||t(e.target).is(t(".card-reveal .card-title i"))?t(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(t(e.target).is(t(".card .activator"))||t(e.target).is(t(".card .activator i")))&&t(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))})})}(jQuery),function(){var t,e,i,n,s,a=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in e)n=e[i],null==t[i]&&(t[i]=n);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,i,n){var s;return null==e&&(e=!1),null==i&&(i=!1),null==n&&(n=null),null!=document.createEvent?(s=document.createEvent("CustomEvent"),s.initCustomEvent(t,e,i,n)):null!=document.createEventObject?(s=document.createEventObject(),s.eventType=t):s.eventName=t,s},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,i){return null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i},t.prototype.removeEvent=function(t,e,i){return null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),i=this.WeakMap||this.MozWeakMap||(i=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,s,a;for(a=this.keys,e=n=0,s=a.length;s>n;e=++n)if(i=a[e],i===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,s,a,o;for(o=this.keys,i=s=0,a=o.length;a>s;i=++s)if(n=o[i],n===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),n=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var i;return"float"===e&&(e="styleFloat"),s.test(e)&&e.replace(s,function(t,e){return e.toUpperCase()}),(null!=(i=t.currentStyle)?i[e]:void 0)||null},this},s=/(\-([a-z]){1})/g,this.WOW=function(){function s(t){null==t&&(t={}),this.scrollCallback=a(this.scrollCallback,this),this.scrollHandler=a(this.scrollHandler,this),this.resetAnimation=a(this.resetAnimation,this),this.start=a(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new i,this.wowEvent=this.util().createEvent(this.config.boxClass)}return s.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},s.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},s.prototype.start=function(){var e,i,n,s;if(this.stopped=!1,this.boxes=function(){var t,i,n,s;for(n=this.element.querySelectorAll("."+this.config.boxClass),s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.all=function(){var t,i,n,s;for(n=this.boxes,s=[],t=0,i=n.length;i>t;t++)e=n[t],s.push(e);return s}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(s=this.boxes,i=0,n=s.length;n>i;i++)e=s[i],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var i,n,s,a,o;for(o=[],i=0,n=e.length;n>i;i++)a=e[i],o.push(function(){var t,e,i,n;for(i=a.addedNodes||[],n=[],t=0,e=i.length;e>t;t++)s=i[t],n.push(this.doSync(s));return n}.call(t));return o}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},s.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},s.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},s.prototype.doSync=function(t){var e,i,n,s,a;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,s=t.querySelectorAll("."+this.config.boxClass),a=[],i=0,n=s.length;n>i;i++)e=s[i],o.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),a.push(this.scrolled=!0)):a.push(void 0);return a}},s.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},s.prototype.applyStyle=function(t,e){var i,n,s;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),s=t.getAttribute("data-wow-iteration"),this.animate(function(a){return function(){return a.customStyle(t,e,n,i,s)}}(this))},s.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),s.prototype.resetStyle=function(){var t,e,i,n,s;for(n=this.boxes,s=[],e=0,i=n.length;i>e;e++)t=n[e],s.push(t.style.visibility="visible");return s},s.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},s.prototype.customStyle=function(t,e,i,n,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},s.prototype.vendors=["moz","webkit"],s.prototype.vendorSet=function(t,e){var i,n,s,a;n=[];for(i in e)s=e[i],t[""+i]=s,n.push(function(){var e,n,o,r;for(o=this.vendors,r=[],e=0,n=o.length;n>e;e++)a=o[e],r.push(t[""+a+i.charAt(0).toUpperCase()+i.substr(1)]=s);return r}.call(this));return n},s.prototype.vendorCSS=function(t,e){var i,s,a,o,r,l;for(r=n(t),o=r.getPropertyCSSValue(e),a=this.vendors,i=0,s=a.length;s>i;i++)l=a[i],o=o||r.getPropertyCSSValue("-"+l+"-"+e);return o},s.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=n(t).getPropertyValue("animation-name")}return"none"===e?"":e},s.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},s.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},s.prototype.scrollHandler=function(){return this.scrolled=!0},s.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,i,n,s;for(n=this.boxes,s=[],e=0,i=n.length;i>e;e++)t=n[e],t&&(this.isVisible(t)?this.show(t):s.push(t));return s}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},s.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},s.prototype.isVisible=function(t){var e,i,n,s,a;return i=t.getAttribute("data-wow-offset")||this.config.offset,a=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,s=a+Math.min(this.element.clientHeight,this.util().innerHeight())-i,n=this.offsetTop(t),e=n+t.clientHeight,s>=n&&e>=a},s.prototype.util=function(){return null!=this._util?this._util:this._util=new e},s.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},s}()}.call(this),$(document).ready(function(){scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")})}),function(){$(".hamburger-menu").on("click",function(){$(this).toggleClass("animate"),$(".bar").toggleClass("animate")})}(),function(t){t(["jquery"],function(t){return function(){function r(t,e,i){return w({type:s.error,iconClass:x().iconClasses.error,message:t,optionsOverride:i,title:e})}function l(i,n){return i||(i=x()),e=t("#"+i.containerId),e.length?e:(n&&(e=m(i)),e)}function c(t,e,i){return w({type:s.info,iconClass:x().iconClasses.info,message:t,optionsOverride:i,title:e})}function u(t){i=t}function h(t,e,i){return w({type:s.success,iconClass:x().iconClasses.success,message:t,optionsOverride:i,title:e})}function d(t,e,i){return w({type:s.warning,iconClass:x().iconClasses.warning,message:t,optionsOverride:i,title:e})}function f(t,i){var n=x();e||l(n),g(t,n,i)||v(n)}function p(i){var n=x();return e||l(n),i&&0===t(":focus",i).length?void C(i):void(e.children().length&&e.remove())}function v(i){for(var n=e.children(),s=n.length-1;s>=0;s--)g(t(n[s]),i)}function g(e,i,n){var s=n&&n.force?n.force:!1;return e&&(s||0===t(":focus",e).length)?(e[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){C(e)}}),!0):!1}function m(i){return e=t("<div/>").attr("id",i.containerId).addClass(i.positionClass).attr("aria-live","polite").attr("role","alert"),e.appendTo(t(i.target)),e}function y(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function b(t){i&&i(t)}function w(i){function g(t){return null==t&&(t=""),new String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m(){k(),P(),T(),A(),M(),S()}function y(){c.hover(F,L),!s.onclick&&s.tapToDismiss&&c.click(E),s.closeButton&&f&&f.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&t.cancelBubble!==!0&&(t.cancelBubble=!0),E(!0)}),s.onclick&&c.click(function(t){s.onclick(t),E()})}function w(){c.hide(),c[s.showMethod]({duration:s.showDuration,easing:s.showEasing,complete:s.onShown}),s.timeOut>0&&(r=setTimeout(E,s.timeOut),p.maxHideTime=parseFloat(s.timeOut),p.hideEta=(new Date).getTime()+p.maxHideTime,s.progressBar&&(p.intervalId=setInterval(I,10)))}function k(){i.iconClass&&c.addClass(s.toastClass).addClass(a)}function S(){s.newestOnTop?e.prepend(c):e.append(c)}function P(){i.title&&(u.append(s.escapeHtml?g(i.title):i.title).addClass(s.titleClass),c.append(u))}function T(){i.message&&(h.append(s.escapeHtml?g(i.message):i.message).addClass(s.messageClass),c.append(h))}function A(){s.closeButton&&(f.addClass("toast-close-button").attr("role","button"),c.prepend(f))}function M(){s.progressBar&&(d.addClass("toast-progress"),c.prepend(d))}function O(t,e){if(t.preventDuplicates){if(e.message===o)return!0;o=e.message}return!1}function E(e){var i=e&&s.closeMethod!==!1?s.closeMethod:s.hideMethod,n=e&&s.closeDuration!==!1?s.closeDuration:s.hideDuration,a=e&&s.closeEasing!==!1?s.closeEasing:s.hideEasing;return!t(":focus",c).length||e?(clearTimeout(p.intervalId),c[i]({duration:n,easing:a,complete:function(){C(c),s.onHidden&&"hidden"!==v.state&&s.onHidden(),v.state="hidden",v.endTime=new Date,b(v)}})):void 0}function L(){(s.timeOut>0||s.extendedTimeOut>0)&&(r=setTimeout(E,s.extendedTimeOut),p.maxHideTime=parseFloat(s.extendedTimeOut),p.hideEta=(new Date).getTime()+p.maxHideTime)}function F(){clearTimeout(r),p.hideEta=0,c.stop(!0,!0)[s.showMethod]({duration:s.showDuration,easing:s.showEasing})}function I(){var t=(p.hideEta-(new Date).getTime())/p.maxHideTime*100;d.width(t+"%")}var s=x(),a=i.iconClass||s.iconClass;if("undefined"!=typeof i.optionsOverride&&(s=t.extend(s,i.optionsOverride),a=i.optionsOverride.iconClass||a),!O(s,i)){n++,e=l(s,!0);var r=null,c=t("<div/>"),u=t("<div/>"),h=t("<div/>"),d=t("<div/>"),f=t(s.closeHtml),p={intervalId:null,hideEta:null,maxHideTime:null},v={toastId:n,state:"visible",startTime:new Date,options:s,map:i};return m(),w(),y(),b(v),s.debug&&console&&console.log(v),c}}function x(){return t.extend({},y(),a.options)}function C(t){e||(e=l()),t.is(":visible")||(t.remove(),t=null,0===e.children().length&&(e.remove(),o=void 0))}var e,i,o,n=0,s={error:"error",info:"info",success:"success",warning:"warning"},a={clear:f,remove:p,error:r,getContainer:l,info:c,options:{},subscribe:u,success:h,version:"2.1.2",warning:d};return a}()})}("function"==typeof define&&define.amd?define:function(t,e){"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):window.toastr=e(window.jQuery)}),$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$("a.page-scroll").bind("click",function(t){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top},1500,"easeInOutExpo"),t.preventDefault()})}),function(t){t.fn.collapsible=function(e){var i={accordion:void 0};return e=t.extend(i,e),this.each(function(){function a(e){n=i.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),n.not(e).removeClass("active").parent().removeClass("active"),n.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function o(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function r(t){var e=l(t);return e.length>0}function l(t){return t.closest("li > .collapsible-header")}var i=t(this),n=t(this).find("> li > .collapsible-header"),s=i.data("collapsible");i.off("click.collapse",".collapsible-header"),n.off("click.collapse"),e.accordion||"accordion"===s||void 0===s?(n=i.find("> li > .collapsible-header"),n.on("click.collapse",function(e){var i=t(e.target);r(i)&&(i=l(i)),i.toggleClass("active"),a(i)}),a(n.filter(".active").first())):n.each(function(){t(this).on("click.collapse",function(e){var i=t(e.target);r(i)&&(i=l(i)),i.toggleClass("active"),o(i)}),t(this).hasClass("active")&&o(t(this))})})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t){var e={init:function(e){var i={menuWidth:240,edge:"left",closeOnClick:!1};e=t.extend(i,e),t(this).each(function(){function s(i){a=!1,o=!1,t("body").css("overflow",""),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),"left"===e.edge?(t(".drag-target").css({width:"",right:"",left:"0"}),n.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}})):(t(".drag-target").css({width:"",right:"0",left:""}),n.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){i===!0&&(n.removeAttr("style"),n.css("width",e.menuWidth))}}))}var i=t(this),n=t("#"+i.attr("data-activates"));240!=e.menuWidth&&n.css("width",e.menuWidth),t("body").append(t('<div class="drag-target"></div>')),"left"==e.edge?(n.css("left",-1*(e.menuWidth+10)),t(".drag-target").css({left:0})):(n.addClass("right-aligned").css("right",-1*(e.menuWidth+10)).css("left",""),t(".drag-target").css({right:0})),n.hasClass("fixed")&&window.innerWidth>992&&n.css("left",0),n.hasClass("fixed")&&t(window).resize(function(){window.innerWidth>992?0!==t("#sidenav-overlay").css("opacity")&&o?s(!0):(n.removeAttr("style"),n.css("width",e.menuWidth)):o===!1&&("left"===e.edge?n.css("left",-1*(e.menuWidth+10)):n.css("right",-1*(e.menuWidth+10)))}),e.closeOnClick===!0&&n.on("click.itemclick","a:not(.collapsible-header)",function(){s()});var a=!1,o=!1;t(".drag-target").on("click",function(){s()}),t(".drag-target").hammer({prevent_default:!1}).bind("pan",function(i){if("touch"==i.gesture.pointerType){var r=(i.gesture.direction,i.gesture.center.x);i.gesture.center.y,i.gesture.velocityX;if(t("body").css("overflow","hidden"),0===t("#sidenav-overlay").length){var u=t('<div id="sidenav-overlay"></div>');u.css("opacity",0).click(function(){s()}),t("body").append(u)}if("left"===e.edge&&(r>e.menuWidth?r=e.menuWidth:0>r&&(r=0)),"left"===e.edge)r<e.menuWidth/2?o=!1:r>=e.menuWidth/2&&(o=!0),n.css("left",r-e.menuWidth);else{r<window.innerWidth-e.menuWidth/2?o=!0:r>=window.innerWidth-e.menuWidth/2&&(o=!1);var h=-1*(r-e.menuWidth/2);h>0&&(h=0),n.css("right",h)}var d;"left"===e.edge?(d=r/e.menuWidth,t("#sidenav-overlay").velocity({opacity:d},{duration:50,queue:!1,easing:"easeOutQuad"})):(d=Math.abs((r-window.innerWidth)/e.menuWidth),t("#sidenav-overlay").velocity({opacity:d},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(i){if("touch"==i.gesture.pointerType){var s=i.gesture.velocityX;a=!1,"left"===e.edge?o&&.3>=s||-.5>s?(n.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),t(".drag-target").css({width:"50%",right:0,left:""})):(!o||s>.3)&&(t("body").css("overflow",""),n.velocity({left:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),t(".drag-target").css({width:"10px",right:"",left:0})):o&&s>=-.3||s>.5?(n.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),t(".drag-target").css({width:"50%",right:"",left:0})):(!o||-.3>s)&&(t("body").css("overflow",""),n.velocity({right:-1*(e.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),
t(".drag-target").css({width:"10px",right:0,left:""}))}}),i.click(function(){if(o===!0)o=!1,a=!1,s();else{t("body").css("overflow","hidden"),"left"===e.edge?(t(".drag-target").css({width:"50%",right:0,left:""}),n.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(t(".drag-target").css({width:"50%",right:"",left:0}),n.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),n.css("left",""));var i=t('<div id="sidenav-overlay"></div>');i.css("opacity",0).click(function(){o=!1,a=!1,s(),i.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}})}),t("body").append(i),i.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){o=!0,a=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){t("#sidenav-overlay").trigger("click")}};t.fn.sideNav=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.sideNav"):e.init.apply(this,arguments)}}(jQuery),function(t){var e=0,i=0,n=function(){return i++,"materialize-lean-overlay-"+i};t.fn.extend({openModal:function(i){t("body").css("overflow","hidden");var s={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},a=n(),o=t(this),r=t('<div class="lean-overlay"></div>'),l=++e;r.attr("id",a).css("z-index",1e3+2*l),o.data("overlay-id",a).css("z-index",1e3+2*l+1),t("body").append(r),i=t.extend(s,i),i.dismissible&&(r.click(function(){o.closeModal(i)}),t(document).on("keyup.leanModal"+a,function(t){27===t.keyCode&&o.closeModal(i)})),o.find(".modal-close").on("click.close",function(t){o.closeModal(i)}),r.css({display:"block",opacity:0}),o.css({display:"block",opacity:0}),r.velocity({opacity:i.opacity},{duration:i.in_duration,queue:!1,ease:"easeOutCubic"}),o.data("associated-overlay",r[0]),o.hasClass("bottom-sheet")?o.velocity({bottom:"0",opacity:1},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}):(t.Velocity.hook(o,"scaleX",.7),o.css({top:i.starting_top}),o.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:i.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof i.ready&&i.ready()}}))}}),t.fn.extend({closeModal:function(i){var n={out_duration:250,complete:void 0},s=t(this),a=s.data("overlay-id"),o=t("#"+a);i=t.extend(n,i),t("body").css("overflow",""),s.find(".modal-close").off("click.close"),t(document).off("keyup.leanModal"+a),o.velocity({opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutQuart"}),s.hasClass("bottom-sheet")?s.velocity({bottom:"-100%",opacity:0},{duration:i.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){o.css({display:"none"}),"function"==typeof i.complete&&i.complete(),o.remove(),e--}}):s.velocity({top:i.starting_top,opacity:0,scaleX:.7},{duration:i.out_duration,complete:function(){t(this).css("display","none"),"function"==typeof i.complete&&i.complete(),o.remove(),e--}})}}),t.fn.extend({leanModal:function(e){return this.each(function(){var i={starting_top:"4%"},n=t.extend(i,e);t(this).click(function(e){n.starting_top=(t(this).offset().top-t(window).scrollTop())/1.15;var i=t(this).attr("href")||"#"+t(this).data("target");t(i).openModal(n),e.preventDefault()})})}})}(jQuery),function(t){t.fn.materialbox=function(){return this.each(function(){function c(){i=!1;var n=a.parent(".material-placeholder"),l=(window.innerWidth,window.innerHeight,a.data("width")),c=a.data("height");a.velocity("stop",!0),t("#materialbox-overlay").velocity("stop",!0),t(".materialbox-caption").velocity("stop",!0),t("#materialbox-overlay").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){e=!1,t(this).remove()}}),a.velocity({width:l,height:c,left:0,top:0},{duration:s,queue:!1,easing:"easeOutQuad"}),t(".materialbox-caption").velocity({opacity:0},{duration:s,queue:!1,easing:"easeOutQuad",complete:function(){n.css({height:"",width:"",position:"",top:"",left:""}),a.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),a.removeClass("active"),i=!0,t(this).remove()}})}if(!t(this).hasClass("initialized")){t(this).addClass("initialized");var e=!1,i=!0,n=275,s=200,a=t(this),o=t("<div></div>").addClass("material-placeholder");a.wrap(o),a.on("click",function(){var s=a.parent(".material-placeholder"),o=window.innerWidth,r=window.innerHeight,l=a.width(),u=a.height();if(i===!1)return c(),!1;if(e&&i===!0)return c(),!1;i=!1,a.addClass("active"),e=!0,s.css({width:s[0].getBoundingClientRect().width,height:s[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),a.css({position:"absolute","z-index":1e3}).data("width",l).data("height",u);var h=t('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){i===!0&&c()});if(t("body").append(h),h.velocity({opacity:1},{duration:n,queue:!1,easing:"easeOutQuad"}),""!==a.data("caption")){var d=t('<div class="materialbox-caption"></div>');d.text(a.data("caption")),t("body").append(d),d.css({display:"inline"}),d.velocity({opacity:1},{duration:n,queue:!1,easing:"easeOutQuad"})}var f=0,p=l/o,v=u/r,g=0,m=0;p>v?(f=u/l,g=.9*o,m=.9*o*f):(f=l/u,g=.9*r*f,m=.9*r),a.hasClass("responsive-img")?a.velocity({"max-width":g,width:l},{duration:0,queue:!1,complete:function(){a.css({left:0,top:0}).velocity({height:m,width:g,left:t(document).scrollLeft()+o/2-a.parent(".material-placeholder").offset().left-g/2,top:t(document).scrollTop()+r/2-a.parent(".material-placeholder").offset().top-m/2},{duration:n,queue:!1,easing:"easeOutQuad",complete:function(){i=!0}})}}):a.css("left",0).css("top",0).velocity({height:m,width:g,left:t(document).scrollLeft()+o/2-a.parent(".material-placeholder").offset().left-g/2,top:t(document).scrollTop()+r/2-a.parent(".material-placeholder").offset().top-m/2},{duration:n,queue:!1,easing:"easeOutQuad",complete:function(){i=!0}})}),t(window).scroll(function(){e&&c()}),t(document).keyup(function(t){27===t.keyCode&&i===!0&&e&&c()})}})},t(document).ready(function(){t(".materialboxed").materialbox()})}(jQuery);var bar=$(".progress-bar-animated");$(function(){$(bar).each(function(){bar_width=$(this).attr("aria-valuenow"),$(this).width(bar_width+"%")})});var selector=".popout .panel-heading",parentSelector=".popout .panel .active";$(selector).on("click",function(){parentDiv=upTo(this,"DIV"),console.log(parentDiv),$(this).hasClass("active")?($(selector).removeClass("active"),$(".popout .panel").removeClass("active")):($(selector).removeClass("active"),$(".popout .panel").removeClass("active"),$(this).addClass("active"),$(parentDiv).addClass("active"))}),$(function(){var t=!0;$("#accordion").on("show.bs.collapse",function(){t&&$("#accordion .in").collapse("hide")})}),function(t){function e(){var e=+t(this).attr("length"),i=+t(this).val().length,n=e>=i;t(this).parent().find('span[class="character-counter"]').html(i+"/"+e),s(n,t(this))}function i(e){var i=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);e.parent().append(i)}function n(){t(this).parent().find('span[class="character-counter"]').html("")}function s(t,e){var i=e.hasClass("invalid");t&&i?e.removeClass("invalid"):t||i||(e.removeClass("valid"),e.addClass("invalid"))}t.fn.characterCounter=function(){return this.each(function(){var s=void 0!==t(this).attr("length");s&&(t(this).on("input",e),t(this).on("focus",e),t(this).on("blur",n),i(t(this)))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){function s(e,l,c,h){function b(){return s._.node("div",s._.node("div",s._.node("div",s._.node("div",y.component.nodes(f.open),v.box),v.wrap),v.frame),v.holder)}function w(){g.data(l,y).addClass(v.input).attr("tabindex",-1).val(g.data("value")?y.get("select",p.format):e.value),p.editable||g.on("focus."+f.id+" click."+f.id,function(t){t.preventDefault(),y.$root[0].focus()}).on("keydown."+f.id,k),r(e,{haspopup:!0,expanded:!1,readonly:!1,owns:e.id+"_root"})}function x(){y.$root.on({keydown:k,focusin:function(t){y.$root.removeClass(v.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=y.$root.children()[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),y.$root[0].focus()))}}).on({focus:function(){g.addClass(v.target)},blur:function(){g.removeClass(v.target)}}).on("focus.toOpen",S).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(v.navDisabled)||e.hasClass(v.disabled),s=u();s=s&&(s.type||s.href),(n||s&&!t.contains(y.$root[0],s))&&y.$root[0].focus(),!n&&i.nav?y.set("highlight",y.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?y.set("select",i.pick):i.clear?y.clear().close(!0):i.close&&y.close(!0)}),r(y.$root[0],"hidden",!0)}function C(){var i;p.hiddenName===!0?(i=e.name,e.name=""):(i=["string"==typeof p.hiddenPrefix?p.hiddenPrefix:"","string"==typeof p.hiddenSuffix?p.hiddenSuffix:"_submit"],i=i[0]+e.name+i[1]),y._hidden=t('<input type=hidden name="'+i+'"'+(g.data("value")||e.value?' value="'+y.get("select",p.formatSubmit)+'"':"")+">")[0],g.on("change."+f.id,function(){y._hidden.value=e.value?y.get("select",p.formatSubmit):""}),p.container?t(p.container).append(y._hidden):g.after(y._hidden)}function k(t){var e=t.keyCode,i=/^(8|46)$/.test(e);return 27==e?(y.close(),!1):void((32==e||i||!f.open&&y.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?y.clear().close():y.open()))}function S(t){t.stopPropagation(),"focus"==t.type&&y.$root.addClass(v.focused),y.open()}if(!e)return s;var d=!1,f={id:e.id||"P"+Math.abs(~~(Math.random()*new Date))},p=c?t.extend(!0,{},c.defaults,h):h||{},v=t.extend({},s.klasses(),p.klass),g=t(e),m=function(){return this.start()},y=m.prototype={constructor:m,$node:g,start:function(){return f&&f.start?y:(f.methods={},f.start=!0,f.open=!1,f.type=e.type,e.autofocus=e==u(),e.readOnly=!p.editable,e.id=e.id||f.id,"text"!=e.type&&(e.type="text"),y.component=new c(y,p),y.$root=t(s._.node("div",b(),v.picker,'id="'+e.id+'_root" tabindex="0"')),x(),p.formatSubmit&&C(),w(),p.container?t(p.container).append(y.$root):g.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:p.onStart,render:p.onRender,stop:p.onStop,open:p.onOpen,close:p.onClose,set:p.onSet}),d=a(y.$root.children()[0]),e.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(t){return t?y.$root.html(b()):y.$root.find("."+v.box).html(y.component.nodes(f.open)),y.trigger("render")},stop:function(){return f.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),g.removeClass(v.input).removeData(l),setTimeout(function(){g.off("."+f.id)},0),e.type=f.type,e.readOnly=!1,y.trigger("stop"),f.methods={},f.start=!1,y):y},open:function(a){return f.open?y:(g.addClass(v.active),r(e,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),r(y.$root[0],"hidden",!1)},0),a!==!1&&(f.open=!0,d&&n.css("overflow","hidden").css("padding-right","+="+o()),y.$root[0].focus(),i.on("click."+f.id+" focusin."+f.id,function(t){var i=t.target;i!=e&&i!=document&&3!=t.which&&y.close(i===y.$root.children()[0])}).on("keydown."+f.id,function(e){var i=e.keyCode,n=y.component.key[i],a=e.target;27==i?y.close(!0):a!=y.$root[0]||!n&&13!=i?t.contains(y.$root[0],a)&&13==i&&(e.preventDefault(),a.click()):(e.preventDefault(),n?s._.trigger(y.component.key.go,y,[s._.trigger(n)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(t){return t&&(y.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){y.$root.on("focus.toOpen",S)},0)),g.removeClass(v.active),r(e,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),r(y.$root[0],"hidden",!0)},0),f.open?(f.open=!1,d&&n.css("overflow","").css("padding-right","-="+o()),i.off("."+f.id),y.trigger("close")):y},clear:function(t){return y.set("clear",null,t)},set:function(e,i,n){var s,a,o=t.isPlainObject(e),r=o?e:{};if(n=o&&t.isPlainObject(i)?i:n||{},e){o||(r[e]=i);for(s in r)a=r[s],s in y.component.item&&(void 0===a&&(a=null),y.component.set(s,a,n)),("select"==s||"clear"==s)&&g.val("clear"==s?"":y.get(s,p.format)).trigger("change");y.render()}return n.muted?y:y.trigger("set",r)},get:function(t,i){if(t=t||"value",null!=f[t])return f[t];if("valueSubmit"==t){if(y._hidden)return y._hidden.value;t="value"}if("value"==t)return e.value;if(t in y.component.item){if("string"==typeof i){var n=y.component.get(t);return n?s._.trigger(y.component.formats.toString,y.component,[i,n]):""}return y.component.get(t)}},on:function(e,i,n){var s,a,o=t.isPlainObject(e),r=o?e:{};if(e){o||(r[e]=i);for(s in r)a=r[s],n&&(s="_"+s),f.methods[s]=f.methods[s]||[],f.methods[s].push(a)}return y},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)e=i[t],e in f.methods&&delete f.methods[e];return y},trigger:function(t,e){var i=function(t){var i=f.methods[t];i&&i.map(function(t){s._.trigger(t,y,[e])})};return i("_"+t),i(t),y}};return new m}function a(t){var e,i="position";return t.currentStyle?e=t.currentStyle[i]:window.getComputedStyle&&(e=getComputedStyle(t)[i]),"fixed"==e}function o(){if(n.height()<=e.height())return 0;var i=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),s=i[0].offsetWidth;i.css("overflow","scroll");var a=t('<div style="width:100%" />').appendTo(i),o=a[0].offsetWidth;return i.remove(),s-o}function r(e,i,n){if(t.isPlainObject(i))for(var s in i)l(e,s,i[s]);else l(e,i,n)}function l(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function c(e,i){t.isPlainObject(e)||(e={attribute:i}),i="";for(var n in e){var s=("role"==n?"":"aria-")+n,a=e[n];i+=null==a?"":s+'="'+e[n]+'"'}return i}function u(){try{return document.activeElement}catch(t){}}var e=t(window),i=t(document),n=t(document.documentElement);return s.klasses=function(t){return t=t||"picker",{picker:t,opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},s._={group:function(t){for(var e,i="",n=s._.trigger(t.min,t);n<=s._.trigger(t.max,t,[n]);n+=t.i)e=s._.trigger(t.item,t,[n]),i+=s._.node(t.node,e[0],e[1],e[2]);return i},node:function(e,i,n,s){return i?(i=t.isArray(i)?i.join(""):i,n=n?' class="'+n+'"':"",s=s?" "+s:"","<"+e+n+s+">"+i+"</"+e+">"):""},lead:function(t){return(10>t?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1===0},ariaAttr:c},s.extend=function(e,i){t.fn[e]=function(n,a){var o=this.data(e);return"picker"==n?o:o&&"string"==typeof n?s._.trigger(o[n],o,[a]):this.each(function(){var a=t(this);a.data(e)||new s(this,e,i,n)})},t.fn[e].defaults=i.defaults},s}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){function a(t,e){var i=this,n=t.$node[0],s=n.value,a=t.$node.data("value"),o=a||s,r=a?e.formatSubmit:e.format,l=function(){return n.currentStyle?"rtl"==n.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};i.settings=e,i.$node=t.$node,i.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},i.item={},i.item.clear=null,i.item.disable=(e.disable||[]).slice(0),i.item.enable=-function(t){return t[0]===!0?t.shift():-1}(i.item.disable),i.set("min",e.min).set("max",e.max).set("now"),o?i.set("select",o,{format:r}):i.set("select",null).set("highlight",i.item.now),i.key={40:7,38:-7,39:function(){return l()?-1:1},37:function(){return l()?1:-1},go:function(t){var e=i.item.highlight,n=new Date(e.year,e.month,e.date+t);i.set("highlight",n,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var n="";i.disabled(i.get("now"))&&(n=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+n+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}var i=7,n=6,s=t._;a.prototype.set=function(t,e,i){var n=this,s=n.item;return null===e?("clear"==t&&(t="select"),s[t]=e,n):(s["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(s){return e=n[s](t,e,i)}).pop(),"select"==t?n.set("highlight",s.select,i):"highlight"==t?n.set("view",s.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(s.select&&n.disabled(s.select)&&n.set("select",s.select,i),s.highlight&&n.disabled(s.highlight)&&n.set("highlight",s.highlight,i)),n)},a.prototype.get=function(t){return this.item[t]},a.prototype.create=function(t,i,n){var a,o=this;return i=void 0===i?t:i,i==-(1/0)||i==1/0?a=i:e.isPlainObject(i)&&s.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=s.isDate(i)?i:o.create().obj):i=s.isInteger(i)||s.isDate(i)?o.normalize(new Date(i),n):o.now(t,i,n),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},a.prototype.createRange=function(t,i){var n=this,a=function(t){return t===!0||e.isArray(t)||s.isDate(t)?n.create(t):t};return s.isInteger(t)||(t=a(t)),s.isInteger(i)||(i=a(i)),s.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:s.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},a.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},a.prototype.overlapRanges=function(t,e){var i=this;return t=i.createRange(t.from,t.to),e=i.createRange(e.from,e.to),i.withinRange(t,e.from)||i.withinRange(t,e.to)||i.withinRange(e,t.from)||i.withinRange(e,t.to)},a.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},a.prototype.navigate=function(t,i,n){var s,a,o,r,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,o=i.month,r=i.date):(a=+i[0],o=+i[1],r=+i[2]),n&&n.nav&&u&&u.month!==o&&(a=u.year,o=u.month),s=new Date(a,o+(n&&n.nav?n.nav:0),1),a=s.getFullYear(),o=s.getMonth();new Date(a,o,r).getMonth()!==o;)r-=1;i=[a,o,r]}return i},a.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},a.prototype.measure=function(t,e){var i=this;return e?"string"==typeof e?e=i.parse(t,e):s.isInteger(e)&&(e=i.now(t,e,{rel:e})):e="min"==t?-(1/0):1/0,e},a.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},a.prototype.validate=function(t,i,n){var c,u,f,p,a=this,o=i,r=n&&n.interval?n.interval:1,l=-1===a.item.enable,h=a.item.min,d=a.item.max,v=l&&a.item.disable.filter(function(t){if(e.isArray(t)){var n=a.create(t).pick;n<i.pick?c=!0:n>i.pick&&(u=!0)}return s.isInteger(t)}).length;if((!n||!n.nav)&&(!l&&a.disabled(i)||l&&a.disabled(i)&&(v||c||u)||!l&&(i.pick<=h.pick||i.pick>=d.pick)))for(l&&!v&&(!u&&r>0||!c&&0>r)&&(r*=-1);a.disabled(i)&&(Math.abs(r)>1&&(i.month<o.month||i.month>o.month)&&(i=o,r=r>0?1:-1),i.pick<=h.pick?(f=!0,r=1,i=a.create([h.year,h.month,h.date+(i.pick===h.pick?0:-1)])):i.pick>=d.pick&&(p=!0,r=-1,i=a.create([d.year,d.month,d.date+(i.pick===d.pick?0:1)])),!f||!p);)i=a.create([i.year,i.month,i.date+r]);return i},a.prototype.disabled=function(t){var i=this,n=i.item.disable.filter(function(n){return s.isInteger(n)?t.day===(i.settings.firstDay?n:n-1)%7:e.isArray(n)||s.isDate(n)?t.pick===i.create(n).pick:e.isPlainObject(n)?i.withinRange(n,t):void 0});return n=n.length&&!n.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!n:n||t.pick<i.item.min.pick||t.pick>i.item.max.pick},a.prototype.parse=function(t,e,i){var n=this,a={};return e&&"string"==typeof e?(i&&i.format||(i=i||{},i.format=n.settings.format),n.formats.toArray(i.format).map(function(t){var i=n.formats[t],o=i?s.trigger(i,n,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,o)),e=e.substr(o)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},a.prototype.formats=function(){function t(t,e,i){var n=t.match(/\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?s.digits(t):e.date},dd:function(t,e){return t?2:s.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?s.digits(t):e.month+1},mm:function(t,e){return t?2:s.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return s.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),a.prototype.isDateExact=function(t,i){var n=this;return s.isInteger(t)&&s.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(s.isDate(t)||e.isArray(t))&&(s.isDate(i)||e.isArray(i))?n.create(t).pick===n.create(i).pick:e.isPlainObject(t)&&e.isPlainObject(i)?n.isDateExact(t.from,i.from)&&n.isDateExact(t.to,i.to):!1},a.prototype.isDateOverlap=function(t,i){var n=this,a=n.settings.firstDay?1:0;return s.isInteger(t)&&(s.isDate(i)||e.isArray(i))?(t=t%7+a,t===n.create(i).day+1):s.isInteger(i)&&(s.isDate(t)||e.isArray(t))?(i=i%7+a,i===n.create(t).day+1):e.isPlainObject(t)&&e.isPlainObject(i)?n.overlapRanges(t,i):!1},a.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},a.prototype.deactivate=function(t,i){var n=this,a=n.item.disable.slice(0);return"flip"==i?n.flipEnable():i===!1?(n.flipEnable(1),a=[]):i===!0?(n.flipEnable(-1),a=[]):i.map(function(t){for(var i,o=0;o<a.length;o+=1)if(n.isDateExact(t,a[o])){i=!0;break}i||(s.isInteger(t)||s.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},a.prototype.activate=function(t,i){var n=this,a=n.item.disable,o=a.length;return"flip"==i?n.flipEnable():i===!0?(n.flipEnable(1),a=[]):i===!1?(n.flipEnable(-1),a=[]):i.map(function(t){var i,r,l,c;for(l=0;o>l;l+=1){if(r=a[l],n.isDateExact(r,t)){i=a[l]=null,c=!0;break}if(n.isDateOverlap(r,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t,i[3]||i.push("inverted")):s.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;o>l;l+=1)if(n.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;o>l;l+=1)if(n.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},a.prototype.nodes=function(t){var e=this,a=e.settings,o=e.item,r=o.now,l=o.select,c=o.highlight,u=o.view,h=o.disable,d=o.min,f=o.max,p=function(t,e){return a.firstDay&&(t.push(t.shift()),e.push(e.shift())),s.node("thead",s.node("tr",s.group({min:0,max:i-1,i:1,node:"th",item:function(i){return[t[i],a.klass.weekdays,'scope=col title="'+e[i]+'"']}})))}((a.showWeekdaysFull?a.weekdaysFull:a.weekdaysLetter).slice(0),a.weekdaysFull.slice(0)),v=function(t){return s.node("div"," ",a.klass["nav"+(t?"Next":"Prev")]+(t&&u.year>=f.year&&u.month>=f.month||!t&&u.year<=d.year&&u.month<=d.month?" "+a.klass.navDisabled:""),"data-nav="+(t||-1)+" "+s.ariaAttr({role:"button",controls:e.$node[0].id+"_table"})+' title="'+(t?a.labelMonthNext:a.labelMonthPrev)+'"')},g=function(i){var n=a.showMonthsShort?a.monthsShort:a.monthsFull;return"short_months"==i&&(n=a.monthsShort),a.selectMonths&&void 0==i?s.node("select",s.group({min:0,max:11,i:1,node:"option",item:function(t){return[n[t],0,"value="+t+(u.month==t?" selected":"")+(u.year==d.year&&t<d.month||u.year==f.year&&t>f.month?" disabled":"")]}}),a.klass.selectMonth+" browser-default",(t?"":"disabled")+" "+s.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+a.labelMonthSelect+'"'):"short_months"==i?null!=l?s.node("div",n[l.month]):s.node("div",n[u.month]):s.node("div",n[u.month],a.klass.month)},m=function(i){var n=u.year,o=a.selectYears===!0?5:~~(a.selectYears/2);if(o){var r=d.year,l=f.year,c=n-o,h=n+o;if(r>c&&(h+=r-c,c=r),h>l){var p=c-r,v=h-l;c-=p>v?v:p,h=l}if(a.selectYears&&void 0==i)return s.node("select",s.group({min:c,max:h,i:1,node:"option",item:function(t){return[t,0,"value="+t+(n==t?" selected":"")]}}),a.klass.selectYear+" browser-default",(t?"":"disabled")+" "+s.ariaAttr({controls:e.$node[0].id+"_table"})+' title="'+a.labelYearSelect+'"')}return"raw"==i?s.node("div",n):s.node("div",n,a.klass.year)};return createDayLabel=function(){return null!=l?s.node("div",l.date):s.node("div",r.date)},createWeekdayLabel=function(){var t;t=null!=l?l.day:r.day;var e=a.weekdaysFull[t];return e},s.node("div",s.node("div",createWeekdayLabel(),"picker__weekday-display")+s.node("div",g("short_months"),a.klass.month_display)+s.node("div",createDayLabel(),a.klass.day_display)+s.node("div",m("raw"),a.klass.year_display),a.klass.date_display)+s.node("div",s.node("div",(a.selectYears?g()+m():g()+m())+v()+v(1),a.klass.header)+s.node("table",p+s.node("tbody",s.group({min:0,max:n-1,i:1,node:"tr",item:function(t){var n=a.firstDay&&0===e.create([u.year,u.month,1]).day?-7:0;return[s.group({min:i*t-u.day+n+1,max:function(){return this.min+i-1},i:1,node:"td",item:function(t){t=e.create([u.year,u.month,t+(a.firstDay?1:0)]);var i=l&&l.pick==t.pick,n=c&&c.pick==t.pick,o=h&&e.disabled(t)||t.pick<d.pick||t.pick>f.pick,p=s.trigger(e.formats.toString,e,[a.format,t]);return[s.node("div",t.date,function(e){return e.push(u.month==t.month?a.klass.infocus:a.klass.outfocus),r.pick==t.pick&&e.push(a.klass.now),i&&e.push(a.klass.selected),n&&e.push(a.klass.highlighted),o&&e.push(a.klass.disabled),e.join(" ")}([a.klass.day]),"data-pick="+t.pick+" "+s.ariaAttr({role:"gridcell",label:p,selected:i&&e.$node.val()===p?!0:null,activedescendant:n?!0:null,disabled:o?!0:null})),"",s.ariaAttr({role:"presentation"})]}})]}})),a.klass.table,'id="'+e.$node[0].id+'_table" '+s.ariaAttr({role:"grid",controls:e.$node[0].id,readonly:!0})),a.klass.calendar_container)+s.node("div",s.node("button",a.today,"btn-flat picker__today","type=button data-pick="+r.pick+(t&&!e.disabled(r)?"":" disabled")+" "+s.ariaAttr({controls:e.$node[0].id}))+s.node("button",a.clear,"btn-flat picker__clear","type=button data-clear=1"+(t?"":" disabled")+" "+s.ariaAttr({controls:e.$node[0].id}))+s.node("button",a.close,"btn-flat picker__close","type=button data-close=true "+(t?"":" disabled")+" "+s.ariaAttr({controls:e.$node[0].id})),a.klass.footer)},a.defaults=function(t){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:t+"table",header:t+"header",date_display:t+"date-display",day_display:t+"day-display",month_display:t+"month-display",year_display:t+"year-display",calendar_container:t+"calendar-container",navPrev:t+"nav--prev",navNext:t+"nav--next",navDisabled:t+"nav--disabled",month:t+"month",year:t+"year",selectMonth:t+"select--month",selectYear:t+"select--year",weekdays:t+"weekday",day:t+"day",disabled:t+"day--disabled",selected:t+"day--selected",highlighted:t+"day--highlighted",now:t+"day--today",infocus:t+"day--infocus",outfocus:t+"day--outfocus",footer:t+"footer",buttonClear:t+"button--clear",buttonToday:t+"button--today",buttonClose:t+"button--close"}}}(t.klasses().picker+"__"),t.extend("pickadate",a)}),function(){function h(t){return document.createElementNS(n,t)}function d(t){return(10>t?"0":"")+t}function p(t){var e=++f+"";return t?t+e:e}function C(e,n){function W(t,e){var a=o.offset(),r=/^touch/.test(t.type),u=a.left+v,h=a.top+v,d=(r?t.originalEvent.touches[0]:t).pageX-u,f=(r?t.originalEvent.touches[0]:t).pageY-h,p=Math.sqrt(d*d+f*f),m=!1;if(!e||!(g-y>p||p>g+y)){t.preventDefault();var b=setTimeout(function(){M.popover.addClass("clockpicker-moving")},200);s&&o.append(M.canvas),M.setHand(d,f,!e,!0),i.off(l).on(l,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-u,n=(e?t.originalEvent.touches[0]:t).pageY-h;(m||i!==d||n!==f)&&(m=!0,M.setHand(i,n,!1,!0))}),i.off(c).on(c,function(t){i.off(c),t.preventDefault();var s=/^touch/.test(t.type),a=(s?t.originalEvent.changedTouches[0]:t).pageX-u,r=(s?t.originalEvent.changedTouches[0]:t).pageY-h;(e||m)&&a===d&&r===f&&M.setHand(a,r),"hours"===M.currentView?M.toggleView("minutes",w/2):n.autoclose&&(M.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){M.done()},w/2)),o.prepend(_),clearTimeout(b),M.popover.removeClass("clockpicker-moving"),i.off(l)})}}var a=t(x),o=a.find(".clockpicker-plate"),u=a.find(".picker__holder"),f=a.find(".clockpicker-hours"),C=a.find(".clockpicker-minutes"),S=a.find(".clockpicker-am-pm-block"),P="INPUT"===e.prop("tagName"),T=P?e:e.find("input"),A=t("label[for="+T.attr("id")+"]"),M=this;if(this.id=p("cp"),this.element=e,this.holder=u,this.options=n,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=P,this.input=T,this.label=A,this.popover=a,this.plate=o,this.hoursView=f,this.minutesView=C,this.amPmBlock=S,this.spanHours=a.find(".clockpicker-span-hours"),this.spanMinutes=a.find(".clockpicker-span-minutes"),this.spanAmPm=a.find(".clockpicker-span-am-pm"),this.footer=a.find(".picker__footer"),this.amOrPm="PM",n.twelvehour){var E=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">',"AM","</button>",'<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">',"PM","</button>","</div>"].join("");t(E);n.ampmclickable?(this.spanAmPm.empty(),t('<div id="click-am">AM</div>').on("click",function(){M.spanAmPm.children("#click-am").addClass("text-primary"),M.spanAmPm.children("#click-pm").removeClass("text-primary"),M.amOrPm="AM"}).appendTo(this.spanAmPm),t('<div id="click-pm">PM</div>').on("click",function(){M.spanAmPm.children("#click-pm").addClass("text-primary"),M.spanAmPm.children("#click-am").removeClass("text-primary"),M.amOrPm="PM"}).appendTo(this.spanAmPm)):(t('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click",function(){M.amOrPm="AM",M.amPmBlock.children(".pm-button").removeClass("active"),M.amPmBlock.children(".am-button").addClass("active"),M.spanAmPm.empty().append("AM")}).appendTo(this.amPmBlock),t('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click",function(){M.amOrPm="PM",M.amPmBlock.children(".am-button").removeClass("active"),
M.amPmBlock.children(".pm-button").addClass("active"),M.spanAmPm.empty().append("PM")}).appendTo(this.amPmBlock))}n.darktheme&&a.addClass("darktheme"),t('<button type="button" class="btn-flat clockpicker-button" tabindex="'+(n.twelvehour?"3":"1")+'">'+n.donetext+"</button>").click(t.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(t.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(t.proxy(this.toggleView,this,"minutes")),T.on("focus.clockpicker click.clockpicker",t.proxy(this.show,this));var I,z,V,D,F=t('<div class="clockpicker-tick"></div>');if(n.twelvehour)for(I=1;13>I;I+=1)z=F.clone(),V=I/6*Math.PI,D=g,z.css("font-size","140%"),z.css({left:v+Math.sin(V)*D-y,top:v-Math.cos(V)*D-y}),z.html(0===I?"00":I),f.append(z),z.on(r,W);else for(I=0;24>I;I+=1){z=F.clone(),V=I/6*Math.PI;var R=I>0&&13>I;D=R?m:g,z.css({left:v+Math.sin(V)*D-y,top:v-Math.cos(V)*D-y}),R&&z.css("font-size","120%"),z.html(0===I?"00":I),f.append(z),z.on(r,W)}for(I=0;60>I;I+=5)z=F.clone(),V=I/30*Math.PI,z.css({left:v+Math.sin(V)*g-y,top:v-Math.cos(V)*g-y}),z.css("font-size","140%"),z.html(d(I)),C.append(z),z.on(r,W);if(o.on(r,function(e){0===t(e.target).closest(".clockpicker-tick").length&&W(e,!0)}),s){var _=a.find(".clockpicker-canvas"),$=h("svg");$.setAttribute("class","clockpicker-svg"),$.setAttribute("width",b),$.setAttribute("height",b);var H=h("g");H.setAttribute("transform","translate("+v+","+v+")");var B=h("circle");B.setAttribute("class","clockpicker-canvas-bearing"),B.setAttribute("cx",0),B.setAttribute("cy",0),B.setAttribute("r",2);var j=h("line");j.setAttribute("x1",0),j.setAttribute("y1",0);var N=h("circle");N.setAttribute("class","clockpicker-canvas-bg"),N.setAttribute("r",y);var q=h("circle");q.setAttribute("class","clockpicker-canvas-fg"),q.setAttribute("r",5),H.appendChild(j),H.appendChild(N),H.appendChild(q),H.appendChild(B),$.appendChild(H),_.append($),this.hand=j,this.bg=N,this.fg=q,this.bearing=B,this.g=H,this.canvas=_}k(this.options.init)}function k(t){t&&"function"==typeof t&&t()}var t=window.jQuery,e=t(window),i=t(document),n="http://www.w3.org/2000/svg",s="SVGAngle"in window&&function(){var t,e=document.createElement("div");return e.innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==n,e.innerHTML="",t}(),a=function(){var t=document.createElement("div").style;return"transition"in t||"WebkitTransition"in t||"MozTransition"in t||"msTransition"in t||"OTransition"in t}(),o="ontouchstart"in window,r="mousedown"+(o?" touchstart":""),l="mousemove.clockpicker"+(o?" touchmove.clockpicker":""),c="mouseup.clockpicker"+(o?" touchend.clockpicker":""),u=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,f=0,v=135,g=110,m=80,y=20,b=2*v,w=a?350:1,x=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>"].join("");C.DEFAULTS={"default":"",fromnow:0,donetext:"Done",autoclose:!1,ampmclickable:!1,darktheme:!1,twelvehour:!0,vibrate:!0},C.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},C.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},C.prototype.show=function(n){if(!this.isShown){k(this.options.beforeShow),t(":input").each(function(){t(this).attr("tabindex",-1)});var s=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),t(document.body).css("overflow","hidden"),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&(this.amOrPm="PM",this.options.ampmclickable?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.amPmBlock.children(".am-button").removeClass("active"),this.amPmBlock.children(".pm-button").addClass("active"),this.spanAmPm.empty().append("PM"))),e.on("resize.clockpicker"+this.id,function(){s.isShown&&s.locate()}),this.isAppended=!0);var a=((this.input.prop("value")||this.options["default"]||"")+"").split(":");if(this.options.twelvehour&&"undefined"!=typeof a[1]&&(a[1]=a[1].replace("AM","").replace("PM","")),"now"===a[0]){var o=new Date(+new Date+this.options.fromnow);a=[o.getHours(),o.getMinutes()]}this.hours=+a[0]||0,this.minutes=+a[1]||0,this.spanHours.html(d(this.hours)),this.spanMinutes.html(d(this.minutes)),this.toggleView("hours"),this.locate(),this.isShown=!0,i.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(e){var i=t(e.target);0===i.closest(s.popover.find(".picker__wrap")).length&&0===i.closest(s.input).length&&s.hide()}),i.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&s.hide()}),k(this.options.afterShow)}},C.prototype.hide=function(){k(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),t(document.body).css("overflow","visible"),this.isShown=!1,t(":input").each(function(e){t(this).attr("tabindex",e+1)}),i.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),i.off("keyup.clockpicker."+this.id),this.popover.hide(),k(this.options.afterHide)},C.prototype.toggleView=function(e,i){var n=!1;"minutes"===e&&"visible"===t(this.hoursView).css("visibility")&&(k(this.options.beforeHourSelect),n=!0);var s="hours"===e,a=s?this.hoursView:this.minutesView,o=s?this.minutesView:this.hoursView;this.currentView=e,this.spanHours.toggleClass("text-primary",s),this.spanMinutes.toggleClass("text-primary",!s),o.addClass("clockpicker-dial-out"),a.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(i),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){o.css("visibility","hidden")},w),n&&k(this.options.afterHourSelect)},C.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,a=Math.PI/(n?6:30),o=i*a,r=n&&i>0&&13>i?m:g,l=Math.sin(o)*r,c=-Math.cos(o)*r,u=this;s&&t?(u.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){u.canvas.removeClass("clockpicker-canvas-out"),u.setHand(l,c)},t)):this.setHand(l,c)},C.prototype.setHand=function(e,i,n,a){var v,o=Math.atan2(e,-i),r="hours"===this.currentView,l=Math.PI/(r||n?6:30),c=Math.sqrt(e*e+i*i),h=this.options,f=r&&(g+m)/2>c,p=f?m:g;if(h.twelvehour&&(p=g),0>o&&(o=2*Math.PI+o),v=Math.round(o/l),o=v*l,h.twelvehour?r?0===v&&(v=12):(n&&(v*=5),60===v&&(v=0)):r?(12===v&&(v=0),v=f?0===v?12:v:0===v?0:v+12):(n&&(v*=5),60===v&&(v=0)),r?this.fg.setAttribute("class","clockpicker-canvas-fg"):v%5==0?this.fg.setAttribute("class","clockpicker-canvas-fg"):this.fg.setAttribute("class","clockpicker-canvas-fg active"),this[this.currentView]!==v&&u&&this.options.vibrate&&(this.vibrateTimer||(navigator[u](10),this.vibrateTimer=setTimeout(t.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=v,this[r?"spanHours":"spanMinutes"].html(d(v)),!s)return void this[r?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var e=t(this);e.toggleClass("active",v===+e.html())});a||!r&&v%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var b=Math.sin(o)*(p-y),w=-Math.cos(o)*(p-y),x=Math.sin(o)*p,C=-Math.cos(o)*p;this.hand.setAttribute("x2",b),this.hand.setAttribute("y2",w),this.bg.setAttribute("cx",x),this.bg.setAttribute("cy",C),this.fg.setAttribute("cx",x),this.fg.setAttribute("cy",C)},C.prototype.done=function(){k(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),e=d(this.hours)+":"+d(this.minutes);this.options.twelvehour&&(e+=this.amOrPm),this.input.prop("value",e),e!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),k(this.options.afterDone)},C.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(e.off("resize.clockpicker"+this.id),this.popover.remove())},t.fn.pickatime=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),s=n.data("clockpicker");if(s)"function"==typeof s[e]&&s[e].apply(s,i);else{var a=t.extend({},C.DEFAULTS,n.data(),"object"==typeof e&&e);n.data("clockpicker",new C(n,a))}})}}(),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,s){return jQuery.easing[jQuery.easing.def](t,e,i,n,s)},easeInQuad:function(t,e,i,n,s){return n*(e/=s)*e+i},easeOutQuad:function(t,e,i,n,s){return-n*(e/=s)*(e-2)+i},easeInOutQuad:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,s){return n*(e/=s)*e*e+i},easeOutCubic:function(t,e,i,n,s){return n*((e=e/s-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,s){return n*(e/=s)*e*e*e+i},easeOutQuart:function(t,e,i,n,s){return-n*((e=e/s-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,s){return n*(e/=s)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,s){return n*((e=e/s-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,s){return(e/=s/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,s){return-n*Math.cos(e/s*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,s){return n*Math.sin(e/s*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,s){return-n/2*(Math.cos(Math.PI*e/s)-1)+i},easeInExpo:function(t,e,i,n,s){return 0==e?i:n*Math.pow(2,10*(e/s-1))+i},easeOutExpo:function(t,e,i,n,s){return e==s?i+n:n*(-Math.pow(2,-10*e/s)+1)+i},easeInOutExpo:function(t,e,i,n,s){return 0==e?i:e==s?i+n:(e/=s/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,s){return-n*(Math.sqrt(1-(e/=s)*e)-1)+i},easeOutCirc:function(t,e,i,n,s){return n*Math.sqrt(1-(e=e/s-1)*e)+i},easeInOutCirc:function(t,e,i,n,s){return(e/=s/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,s){var a=1.70158,o=0,r=n;if(0==e)return i;if(1==(e/=s))return i+n;if(o||(o=.3*s),r<Math.abs(n)){r=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/r);return-(r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*(2*Math.PI)/o))+i},easeOutElastic:function(t,e,i,n,s){var a=1.70158,o=0,r=n;if(0==e)return i;if(1==(e/=s))return i+n;if(o||(o=.3*s),r<Math.abs(n)){r=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*e)*Math.sin((e*s-a)*(2*Math.PI)/o)+n+i},easeInOutElastic:function(t,e,i,n,s){var a=1.70158,o=0,r=n;if(0==e)return i;if(2==(e/=s/2))return i+n;if(o||(o=s*(.3*1.5)),r<Math.abs(n)){r=n;var a=o/4}else var a=o/(2*Math.PI)*Math.asin(n/r);return 1>e?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e*s-a)*(2*Math.PI)/o))+i:r*Math.pow(2,-10*(e-=1))*Math.sin((e*s-a)*(2*Math.PI)/o)*.5+n+i},easeInBack:function(t,e,i,n,s,a){return void 0==a&&(a=1.70158),n*(e/=s)*e*((a+1)*e-a)+i},easeOutBack:function(t,e,i,n,s,a){return void 0==a&&(a=1.70158),n*((e=e/s-1)*e*((a+1)*e+a)+1)+i},easeInOutBack:function(t,e,i,n,s,a){return void 0==a&&(a=1.70158),(e/=s/2)<1?n/2*(e*e*(((a*=1.525)+1)*e-a))+i:n/2*((e-=2)*e*(((a*=1.525)+1)*e+a)+2)+i},easeInBounce:function(t,e,i,n,s){return n-jQuery.easing.easeOutBounce(t,s-e,0,n,s)+i},easeOutBounce:function(t,e,i,n,s){return(e/=s)<1/2.75?n*(7.5625*e*e)+i:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,s){return s/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,s)+i:.5*jQuery.easing.easeOutBounce(t,2*e-s,0,n,s)+.5*n+i}}),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1};this.each(function(){function o(){void 0!==n.data("induration")&&(s.inDuration=n.data("inDuration")),void 0!==n.data("outduration")&&(s.outDuration=n.data("outDuration")),void 0!==n.data("constrainwidth")&&(s.constrain_width=n.data("constrainwidth")),void 0!==n.data("hover")&&(s.hover=n.data("hover")),void 0!==n.data("gutter")&&(s.gutter=n.data("gutter")),void 0!==n.data("beloworigin")&&(s.belowOrigin=n.data("beloworigin"))}function r(){o(),a.addClass("active"),s.constrain_width===!0&&a.css("width",n.outerWidth());var e=0;s.belowOrigin===!0&&(e=n.height());var i=n.offset().left,r=0,l=s.gutter;i+a.innerWidth()>t(window).width()&&(r=n.innerWidth()-a.innerWidth(),l=-1*l),a.css({position:"absolute",top:n.position().top+e,left:n.position().left+r+l}),a.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:s.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:s.inDuration,easing:"easeOutSine"})}function l(){a.fadeOut(s.outDuration),a.removeClass("active")}var n=t(this),s=t.extend({},i,e),a=t("#"+n.attr("data-activates"));if(o(),n.after(a),s.hover){var c=!1;n.unbind("click."+n.attr("id")),n.on("mouseenter",function(t){c===!1&&(r(),c=!0)}),n.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(a)||(a.stop(!0,!0),l(),c=!1)}),a.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(n)||(a.stop(!0,!0),l(),c=!1)})}else n.unbind("click."+n.attr("id")),n.bind("click."+n.attr("id"),function(e){n[0]==e.currentTarget&&0===t(e.target).closest(".dropdown-content").length?(e.preventDefault(),r()):n.hasClass("active")&&(l(),t(document).unbind("click."+a.attr("id"))),a.hasClass("active")&&t(document).bind("click."+a.attr("id"),function(e){!a.is(e.target)&&!n.is(e.target)&&!n.find(e.target).length>0&&(l(),t(document).unbind("click."+a.attr("id")))})});n.on("open",r),n.on("close",l)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery),Materialize={},Materialize.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),Materialize.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){return"fixed"===$(this).css("position")?(n=!0,!1):void 0}),n};var Vel;Vel=$?$.Velocity:Velocity,function(t){t(document).ready(function(){function s(e){var n=e.css("font-family"),s=e.css("font-size");s&&i.css("font-size",s),n&&i.css("font-family",n),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text(e.val()+"\n");var a=i.html().replace(/\n/g,"<br>");i.html(a),e.is(":visible")?i.css("width",e.width()):i.css("width",t(window).width()/2),e.css("height",i.height())}Materialize.updateTextFields=function(){var e="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t(e).each(function(e,i){t(i).val().length>0||void 0!==t(this).attr("placeholder")||t(i)[0].validity.badInput===!0?t(this).siblings("label, i").addClass("active"):t(this).siblings("label, i").removeClass("active")})};var e="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";t("input[autofocus]").siblings("label, i").addClass("active"),t(document).on("change",e,function(){(0!==t(this).val().length||void 0!==t(this).attr("placeholder"))&&t(this).siblings("label, i").addClass("active"),validate_field(t(this))}),t(document).ready(function(){Materialize.updateTextFields()}),t(document).on("reset",function(i){var n=t(i.target);n.is("form")&&(n.find(e).removeClass("valid").removeClass("invalid"),n.find(e).each(function(){""===t(this).attr("value")&&t(this).siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(){var t=n.find("option[selected]").text();n.siblings("input.select-dropdown").val(t)}))}),t(document).on("focus",e,function(){t(this).siblings("label, i").addClass("active")}),t(document).on("blur",e,function(){var e=t(this);0===e.val().length&&e[0].validity.badInput!==!0&&void 0===e.attr("placeholder")&&e.siblings("label, i").removeClass("active"),validate_field(e)}),validate_field=function(t){var e=void 0!==t.attr("length"),i=parseInt(t.attr("length")),n=t.val().length;0===t.val().length&&t[0].validity.badInput===!1?t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid")):t.hasClass("validate")&&(t.is(":valid")&&e&&i>n||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid")))};var i=t(".hiddendiv").first();i.length||(i=t('<div class="hiddendiv common"></div>'),t("body").append(i));var n=".materialize-textarea";t(n).each(function(){var e=t(this);e.val().length&&s(e)}),t("body").on("keyup keydown",n,function(){s(t(this))}),t(document).on("change",'.file-field input[type="file"]',function(){for(var e=t(this).closest(".file-field"),i=e.find("input.file-path"),n=t(this)[0].files,s=[],a=0;a<n.length;a++)s.push(n[a].name);i.val(s.join(", ")),i.trigger("change")});var r,a="input[type=range]",o=!1;t(a).each(function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(this).after(e)});var l=".range-field";t(document).on("change",a,function(e){var i=t(this).siblings(".thumb");i.find(".value").html(t(this).val())}),t(document).on("input mousedown touchstart",a,function(e){var i=t(this).siblings(".thumb");i.length<=0&&(i=t('<span class="thumb"><span class="value"></span></span>'),t(this).append(i)),i.find(".value").html(t(this).val()),o=!0,t(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),r=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var n=t(this).outerWidth();0>r?r=0:r>n&&(r=n),i.addClass("active").css("left",r),i.find(".value").html(t(this).val())}),t(document).on("mouseup touchend",l,function(){o=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",l,function(e){var n,i=t(this).children(".thumb");if(o){i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),n=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var s=t(this).outerWidth();0>n?n=0:n>s&&(n=s),i.addClass("active").css("left",n),i.find(".value").html(i.siblings(a).val())}}),t(document).on("mouseout touchleave",l,function(){if(!o){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}})}),t.fn.material_select=function(e){t(this).each(function(){if($select=t(this),!$select.hasClass("browser-default")){var i=$select.data("select-id");if(i&&($select.parent().find("i").remove(),$select.parent().find("input").remove(),$select.unwrap(),t("ul#select-options-"+i).remove()),"destroy"===e)return void $select.data("select-id",null).removeClass("initialized");var n=Materialize.guid();$select.data("select-id",n);var s=t('<div class="select-wrapper"></div>');s.addClass($select.attr("class"));var r,a=t('<ul id="select-options-'+n+'" class="dropdown-content select-dropdown"></ul>'),o=$select.children("option");r=void 0!==$select.find("option:selected")?$select.find("option:selected"):a.first(),o.each(function(){a.append(t('<li class="'+(t(this).is(":disabled")?"disabled":"")+'"><span>'+t(this).html()+"</span></li>"))}),a.find("li").each(function(i){var n=$select;t(this).click(function(){t(this).hasClass("disabled")||(n.find("option").eq(i).prop("selected",!0),n.trigger("change"),n.siblings("input.select-dropdown").val(t(this).text()),"undefined"!=typeof e&&e())})}),$select.wrap(s);var l=t('<span class="caret">&#9660;</span>');$select.is(":disabled")&&l.addClass("disabled");var c=t('<input type="text" class="select-dropdown" readonly="true" '+($select.is(":disabled")?"disabled":"")+' data-activates="select-options-'+n+'" value="'+r.html()+'"/>');$select.before(c),c.before(l),t("body").append(a),$select.is(":disabled")||c.dropdown({hover:!1}),$select.attr("tabindex")&&t(c[0]).attr("tabindex",$select.attr("tabindex")),$select.addClass("initialized"),c.on("focus",function(){t(this).trigger("open"),r=t(this).val(),selectedOption=a.find("li").filter(function(){return t(this).text().toLowerCase()===r.toLowerCase()})[0],activateOption(a,selectedOption)}),c.on("blur",function(){t(this).trigger("close")}),activateOption=function(e,i){e.find("li.active").removeClass("active"),t(i).addClass("active"),e.scrollTo(i)},filterQuery=[],onKeyDown=function(e){if(9==e.which)return void c.trigger("close");if(40==e.which&&!a.is(":visible"))return void c.trigger("open");if(13!=e.which||a.is(":visible")){e.preventDefault(),letter=String.fromCharCode(e.which).toLowerCase();var i=[9,13,27,38,40];letter&&-1===i.indexOf(e.which)&&(filterQuery.push(letter),string=filterQuery.join(""),newOption=a.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(string)})[0],newOption&&activateOption(a,newOption)),13==e.which&&(activeOption=a.find("li.active:not(.disabled)")[0],activeOption&&(t(activeOption).trigger("click"),c.trigger("close"))),40==e.which&&(newOption=a.find("li.active").next("li:not(.disabled)")[0],newOption&&activateOption(a,newOption)),27==e.which&&c.trigger("close"),38==e.which&&(newOption=a.find("li.active").prev("li:not(.disabled)")[0],newOption&&activateOption(a,newOption)),setTimeout(function(){filterQuery=[]},1e3)}},c.on("keydown",onKeyDown)}})}}(jQuery),!function(t){function e(t){var e=t.length,n=i.type(t);return"function"===n||i.isWindow(t)?!1:1===t.nodeType&&e?!0:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?s[o.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var s,a=0,o=t.length,r=e(t);if(n){if(r)for(;o>a&&(s=i.apply(t[a],n),s!==!1);a++);else for(a in t)if(s=i.apply(t[a],n),s===!1)break}else if(r)for(;o>a&&(s=i.call(t[a],a,t[a]),s!==!1);a++);else for(a in t)if(s=i.call(t[a],a,t[a]),s===!1)break;return t},i.data=function(t,e,s){if(void 0===s){var a=t[i.expando],o=a&&n[a];if(void 0===e)return o;if(o&&e in o)return o[e]}else if(void 0!==e){var a=t[i.expando]||(t[i.expando]=++i.uuid);return n[a]=n[a]||{},n[a][e]=s,s}},i.removeData=function(t,e){var s=t[i.expando],a=s&&n[s];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,s,a,o,r=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof r&&(u=r,r=arguments[l]||{},l++),"object"!=typeof r&&"function"!==i.type(r)&&(r={}),l===c&&(r=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(s in a)t=r[s],n=a[s],r!==n&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,o=t&&i.isArray(t)?t:[]):o=t&&i.isPlainObject(t)?t:{},r[s]=i.extend(u,o,n)):void 0!==n&&(r[s]=n));return r},i.queue=function(t,n,s){function a(t,i){var n=i||[];return null!=t&&(e(Object(t))?!function(t,e){for(var i=+e.length,n=0,s=t.length;i>n;)t[s++]=e[n++];if(i!==i)for(;void 0!==e[n];)t[s++]=e[n++];return t.length=s,t}(n,"string"==typeof t?[t]:t):[].push.call(n,t)),n}if(t){n=(n||"fx")+"queue";var o=i.data(t,n);return s?(!o||i.isArray(s)?o=i.data(t,n,a(s)):o.push(s),o):o||[]}},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var s=i.queue(n,e),a=s.shift();"inprogress"===a&&(a=s.shift()),a&&("fx"===e&&s.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),s=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(s.top+=parseFloat(t.style.borderTopWidth)||0,s.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-s.top,left:n.left-s.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var s={},a=s.hasOwnProperty,o=s.toString,r="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<r.length;l++)s["[object "+r[l]+"]"]=r[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function s(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var s=t[e];s&&n.push(s)}return n}function a(t){return p.isWrapped(t)?t=[].slice.call(t):p.isNode(t)&&(t=[t]),t}function o(t){var e=v.data(t,"velocity");return null===e?n:e}function r(t){return function(e){return Math.round(e*t)*(1/t)}}function l(t,i,n,s){function a(t,e){return 1-3*e+3*t}function o(t,e){return 3*e-6*t}function r(t){return 3*t}function l(t,e,i){return((a(e,i)*t+o(e,i))*t+r(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*o(e,i)*t+r(e)}function u(e,i){for(var s=0;v>s;++s){var a=c(i,t,n);if(0===a)return i;var o=l(i,t,n)-e;i-=o/a}return i}function h(){for(var e=0;b>e;++e)k[e]=l(e*w,t,n)}function d(e,i,s){var a,o,r=0;do o=i+(s-i)/2,a=l(o,t,n)-e,a>0?s=o:i=o;while(Math.abs(a)>m&&++r<y);return o}function f(e){for(var i=0,s=1,a=b-1;s!=a&&k[s]<=e;++s)i+=w;--s;var o=(e-k[s])/(k[s+1]-k[s]),r=i+o*w,l=c(r,t,n);return l>=g?u(e,r):0==l?r:d(e,i,i+w)}function p(){S=!0,(t!=i||n!=s)&&h()}var v=4,g=.001,m=1e-7,y=10,b=11,w=1/(b-1),x="Float32Array"in e;if(4!==arguments.length)return!1;for(var C=0;4>C;++C)if("number"!=typeof arguments[C]||isNaN(arguments[C])||!isFinite(arguments[C]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var k=x?new Float32Array(b):new Array(b),S=!1,P=function(e){return S||p(),t===i&&n===s?e:0===e?0:1===e?1:l(f(e),i,s)};P.getControlPoints=function(){return[{x:t,y:i},{x:n,y:s}]};var T="generateBezier("+[t,i,n,s]+")";return P.toString=function(){return T},P}function c(t,e){var i=t;return p.isString(t)?b.Easings[t]||(i=!1):i=p.isArray(t)&&1===t.length?r.apply(null,t):p.isArray(t)&&2===t.length?w.apply(null,t.concat([e])):p.isArray(t)&&4===t.length?l.apply(null,t):!1,i===!1&&(i=b.Easings[b.defaults.easing]?b.defaults.easing:y),i}function u(t){if(t){var e=(new Date).getTime(),i=b.State.calls.length;i>1e4&&(b.State.calls=s(b.State.calls));for(var a=0;i>a;a++)if(b.State.calls[a]){var r=b.State.calls[a],l=r[0],c=r[2],d=r[3],f=!!d,g=null;d||(d=b.State.calls[a][3]=e-16);for(var m=Math.min((e-d)/c.duration,1),y=0,w=l.length;w>y;y++){var C=l[y],S=C.element;if(o(S)){var P=!1;if(c.display!==n&&null!==c.display&&"none"!==c.display){if("flex"===c.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];v.each(T,function(t,e){x.setPropertyValue(S,"display",e)})}x.setPropertyValue(S,"display",c.display)}c.visibility!==n&&"hidden"!==c.visibility&&x.setPropertyValue(S,"visibility",c.visibility);for(var A in C)if("element"!==A){var O,M=C[A],E=p.isString(M.easing)?b.Easings[M.easing]:M.easing;if(1===m)O=M.endValue;else{var L=M.endValue-M.startValue;if(O=M.startValue+L*E(m,c,L),!f&&O===M.currentValue)continue}if(M.currentValue=O,"tween"===A)g=O;else{if(x.Hooks.registered[A]){var F=x.Hooks.getRoot(A),I=o(S).rootPropertyValueCache[F];I&&(M.rootPropertyValue=I)}var z=x.setPropertyValue(S,A,M.currentValue+(0===parseFloat(O)?"":M.unitType),M.rootPropertyValue,M.scrollData);x.Hooks.registered[A]&&(o(S).rootPropertyValueCache[F]=x.Normalizations.registered[F]?x.Normalizations.registered[F]("extract",null,z[1]):z[1]),"transform"===z[0]&&(P=!0)}}c.mobileHA&&o(S).transformCache.translate3d===n&&(o(S).transformCache.translate3d="(0px, 0px, 0px)",P=!0),P&&x.flushTransformCache(S)}}c.display!==n&&"none"!==c.display&&(b.State.calls[a][2].display=!1),c.visibility!==n&&"hidden"!==c.visibility&&(b.State.calls[a][2].visibility=!1),c.progress&&c.progress.call(r[1],r[1],m,Math.max(0,d+c.duration-e),d,g),1===m&&h(a)}}b.State.isTicking&&k(u)}function h(t,e){if(!b.State.calls[t])return!1;for(var i=b.State.calls[t][0],s=b.State.calls[t][1],a=b.State.calls[t][2],r=b.State.calls[t][4],l=!1,c=0,u=i.length;u>c;c++){var h=i[c].element;if(e||a.loop||("none"===a.display&&x.setPropertyValue(h,"display",a.display),"hidden"===a.visibility&&x.setPropertyValue(h,"visibility",a.visibility)),a.loop!==!0&&(v.queue(h)[1]===n||!/\.velocityQueueEntryFlag/i.test(v.queue(h)[1]))&&o(h)){o(h).isAnimating=!1,o(h).rootPropertyValueCache={};var d=!1;v.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,s=o(h).transformCache[e];o(h).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(s)&&(d=!0,delete o(h).transformCache[e])}),a.mobileHA&&(d=!0,delete o(h).transformCache.translate3d),d&&x.flushTransformCache(h),x.Values.removeClass(h,"velocity-animating")}if(!e&&a.complete&&!a.loop&&c===u-1)try{a.complete.call(s,s)}catch(f){setTimeout(function(){throw f},1)}r&&a.loop!==!0&&r(s),o(h)&&a.loop===!0&&!e&&(v.each(o(h).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),b(h,"reverse",{loop:!0,delay:a.delay})),a.queue!==!1&&v.dequeue(h,a.queue)}b.State.calls[t]=!1;for(var p=0,g=b.State.calls.length;g>p;p++)if(b.State.calls[p]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var v,d=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="<!--[if IE "+t+"]><span></span><![endif]-->",e.getElementsByTagName("span").length)return e=null,t}return n}(),f=function(){var t=0;return e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){var n,i=(new Date).getTime();return n=Math.max(0,16-(i-t)),t=i+n,setTimeout(function(){e(i+n)},n)}}(),p={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){
return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},g=!1;if(t.fn&&t.fn.jquery?(v=t,g=!0):v=e.Velocity.Utilities,8>=d&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var m=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:v,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:m,easing:y,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){v.data(t,"velocity",{isSVG:p.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(b.State.scrollAnchor=e,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var s={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:s.v,dv:t(s)}}function i(i,n){var s={dx:i.v,dv:t(i)},a=e(i,.5*n,s),o=e(i,.5*n,a),r=e(i,n,o),l=1/6*(s.dx+2*(a.dx+o.dx)+r.dx),c=1/6*(s.dv+2*(a.dv+o.dv)+r.dv);return i.x=i.x+l*n,i.v=i.v+c*n,i}return function n(t,e,s){var u,h,d,a={x:-1,v:0,tension:null,friction:null},o=[0],r=0,l=1e-4,c=.016;for(t=parseFloat(t)||500,e=parseFloat(e)||20,s=s||null,a.tension=t,a.friction=e,u=null!==s,u?(r=n(t,e),h=r/s*c):h=c;d=i(d||a,h),o.push(1+d.x),r+=16,Math.abs(d.x)>l&&Math.abs(d.v)>l;);return u?function(t){return o[t*(o.length-1)|0]}:r}}();b.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},v.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){b.Easings[e[0]]=l.apply(null,e[1])});var x=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<x.Lists.colors.length;t++){var e="color"===x.Lists.colors[t]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,s;if(d)for(i in x.Hooks.templates){n=x.Hooks.templates[i],s=n[0].split(" ");var a=n[1].match(x.RegEx.valueSplit);"Color"===s[0]&&(s.push(s.shift()),a.push(a.shift()),x.Hooks.templates[i]=[s.join(" "),a.join(" ")])}for(i in x.Hooks.templates){n=x.Hooks.templates[i],s=n[0].split(" ");for(var t in s){var o=i+s[t],r=t;x.Hooks.registered[o]=[i,r]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],s=i[1];return e=x.Hooks.cleanRootPropertyValue(n,e),e.toString().match(x.RegEx.valueSplit)[s]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var o,r,s=n[0],a=n[1];return i=x.Hooks.cleanRootPropertyValue(s,i),o=i.toString().match(x.RegEx.valueSplit),o[a]=e,r=o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:(n=i.toString().match(x.RegEx.valueUnwrap),n=n?n[1].replace(/,(\s+)?/g," "):i),n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var s=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=s?s[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=d)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return i=n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":return i;case"inject":return i}}},register:function(){9>=d||b.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,s){switch(t){case"name":return"transform";case"extract":return o(i)===n||o(i).transformCache[e]===n?/^scale/i.test(e)?1:0:o(i).transformCache[e].replace(/[()]/g,"");case"inject":var a=!1;switch(e.substr(0,e.length-1)){case"translate":a=!/(%|px|em|rem|vw|vh|\d)$/i.test(s);break;case"scal":case"scale":b.State.isAndroid&&o(i).transformCache[e]===n&&1>s&&(s=1),a=!/(\d)$/i.test(s);break;case"skew":a=!/(deg|\d)$/i.test(s);break;case"rotate":a=!/(deg|\d)$/i.test(s)}return a||(o(i).transformCache[e]="("+s+")"),o(i).transformCache[e]}}}();for(var t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,s){switch(t){case"name":return e;case"extract":var a;if(x.RegEx.wrappedValueAlreadyExtracted.test(s))a=s;else{var o,r={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(s)?o=r[s]!==n?r[s]:r.black:x.RegEx.isHex.test(s)?o="rgb("+x.Values.hexToRgb(s).join(" ")+")":/^rgba?\(/i.test(s)||(o=r.black),a=(o||s).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=d?4===s.split(" ").length&&(s=s.split(/\s+/).slice(0,3).join(" ")):3===s.split(" ").length&&(s+=" 1"),(8>=d?"rgb":"rgba")+"("+s.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(b.State.prefixMatches[t])return[b.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var s;if(s=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),p.isString(b.State.prefixElement.style[s]))return b.State.prefixMatches[t]=s,[s,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var n,e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return t=t.replace(e,function(t,e,i,n){return e+e+i+i+n+n}),n=i.exec(t),n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,s,a){function r(t,i){function s(){c&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=d)l=v.css(t,i);else{var c=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(c=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!a){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var u=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return s(),u}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var h=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return s(),h}}var f;f=o(t)===n?e.getComputedStyle(t,null):o(t).computedStyle?o(t).computedStyle:o(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),l=9===d&&"filter"===i?f.getPropertyValue(i):f[i],(""===l||null===l)&&(l=t.style[i]),s()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var p=r(t,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(i))&&(l=v(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var c=i,u=x.Hooks.getRoot(c);s===n&&(s=x.getPropertyValue(t,x.Names.prefixCheck(u)[0])),x.Normalizations.registered[u]&&(s=x.Normalizations.registered[u]("extract",t,s)),l=x.Hooks.extractValue(c,s)}else if(x.Normalizations.registered[i]){var h,f;h=x.Normalizations.registered[i]("name",t),"transform"!==h&&(f=r(t,x.Names.prefixCheck(h)[0]),x.Values.isCSSNullValue(f)&&x.Hooks.templates[i]&&(f=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(p){l=0}else l=t.getAttribute(i);else l=r(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,s,a){var r=i;if("scroll"===i)a.container?a.container["scroll"+a.direction]=n:"Left"===a.direction?e.scrollTo(n,a.alternateValue):e.scrollTo(a.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),r="transform",n=o(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,c=x.Hooks.getRoot(i);s=s||x.getPropertyValue(t,c),n=x.Hooks.injectValue(l,n,s),i=c}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),r=x.Names.prefixCheck(i)[0],8>=d)try{t.style[r]=n}catch(u){b.debug&&console.log("Browser does not support ["+n+"] for ["+r+"]")}else o(t)&&o(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[r]=n;b.debug>=2&&console.log("Set "+i+" ("+r+"): "+n)}return[r,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((d||b.State.isAndroid&&!b.State.isChrome)&&o(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};v.each(o(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var s,a;v.each(o(t).transformCache,function(e){return s=o(t).transformCache[e],"transformPerspective"===e?(a=s,!0):(9===d&&"rotateZ"===e&&(e="rotate"),void(i+=e+s+" "))}),a&&(i="perspective"+a+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),b.hook=function(t,e,i){var s=n;return t=a(t),v.each(t,function(t,a){if(o(a)===n&&b.init(a),i===n)s===n&&(s=b.CSS.getPropertyValue(a,e));else{var r=b.CSS.setPropertyValue(a,e,i);"transform"===r[0]&&b.CSS.flushTransformCache(a),s=r}}),s};var C=function(){function t(){return l?A.promise||null:d}function s(){function t(t){function h(t,e){var i=n,o=n,r=n;return p.isArray(t)?(i=t[0],!p.isArray(t[1])&&/^[\d-]/.test(t[1])||p.isFunction(t[1])||x.RegEx.isHex.test(t[1])?r=t[1]:(p.isString(t[1])&&!x.RegEx.isHex.test(t[1])||p.isArray(t[1]))&&(o=e?t[1]:c(t[1],a.duration),t[2]!==n&&(r=t[2]))):i=t,e||(o=o||a.easing),p.isFunction(i)&&(i=i.call(s,S,k)),p.isFunction(r)&&(r=r.call(s,S,k)),[i||0,o,r]}function d(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}function f(){var t={myParent:s.parentNode||i.body,position:x.getPropertyValue(s,"position"),fontSize:x.getPropertyValue(s,"fontSize")},n=t.position===z.lastPosition&&t.myParent===z.lastParent,a=t.fontSize===z.lastFontSize;z.lastParent=t.myParent,z.lastPosition=t.position,z.lastFontSize=t.fontSize;var r=100,l={};if(a&&n)l.emToPx=z.lastEmToPx,l.percentToPxWidth=z.lastPercentToPxWidth,l.percentToPxHeight=z.lastPercentToPxHeight;else{var c=o(s).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");b.init(c),t.myParent.appendChild(c),v.each(["overflow","overflowX","overflowY"],function(t,e){b.CSS.setPropertyValue(c,e,"hidden")}),b.CSS.setPropertyValue(c,"position",t.position),b.CSS.setPropertyValue(c,"fontSize",t.fontSize),b.CSS.setPropertyValue(c,"boxSizing","content-box"),v.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){b.CSS.setPropertyValue(c,e,r+"%")}),b.CSS.setPropertyValue(c,"paddingLeft",r+"em"),l.percentToPxWidth=z.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(c,"width",null,!0))||1)/r,l.percentToPxHeight=z.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(c,"height",null,!0))||1)/r,l.emToPx=z.lastEmToPx=(parseFloat(x.getPropertyValue(c,"paddingLeft"))||1)/r,t.myParent.removeChild(c)}return null===z.remToPx&&(z.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===z.vwToPx&&(z.vwToPx=parseFloat(e.innerWidth)/100,z.vhToPx=parseFloat(e.innerHeight)/100),l.remToPx=z.remToPx,l.vwToPx=z.vwToPx,l.vhToPx=z.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),s),l}if(a.begin&&0===S)try{a.begin.call(g,g)}catch(m){setTimeout(function(){throw m},1)}if("scroll"===M){var T,O,E,C=/^x$/i.test(a.axis)?"Left":"Top",P=parseFloat(a.offset)||0;a.container?p.isWrapped(a.container)||p.isNode(a.container)?(a.container=a.container[0]||a.container,T=a.container["scroll"+C],E=T+v(s).position()[C.toLowerCase()]+P):a.container=null:(T=b.State.scrollAnchor[b.State["scrollProperty"+C]],O=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===C?"Top":"Left")]],E=v(s).offset()[C.toLowerCase()]+P),r={scroll:{rootPropertyValue:!1,startValue:T,currentValue:T,endValue:E,unitType:"",easing:a.easing,scrollData:{container:a.container,direction:C,alternateValue:O}},element:s},b.debug&&console.log("tweensContainer (scroll): ",r.scroll,s)}else if("reverse"===M){if(!o(s).tweensContainer)return void v.dequeue(s,a.queue);"none"===o(s).opts.display&&(o(s).opts.display="auto"),"hidden"===o(s).opts.visibility&&(o(s).opts.visibility="visible"),o(s).opts.loop=!1,o(s).opts.begin=null,o(s).opts.complete=null,w.easing||delete a.easing,w.duration||delete a.duration,a=v.extend({},o(s).opts,a);var L=v.extend(!0,{},o(s).tweensContainer);for(var F in L)if("element"!==F){var I=L[F].startValue;L[F].startValue=L[F].currentValue=L[F].endValue,L[F].endValue=I,p.isEmptyObject(w)||(L[F].easing=a.easing),b.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(L[F]),s)}r=L}else if("start"===M){var L;o(s).tweensContainer&&o(s).isAnimating===!0&&(L=o(s).tweensContainer),v.each(y,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=h(e,!0),s=i[0],a=i[1],o=i[2];if(x.RegEx.isHex.test(s)){for(var r=["Red","Green","Blue"],l=x.Values.hexToRgb(s),c=o?x.Values.hexToRgb(o):n,u=0;u<r.length;u++){var d=[l[u]];a&&d.push(a),c!==n&&d.push(c[u]),y[t+r[u]]=d}delete y[t]}}});for(var D in y){var R=h(y[D]),W=R[0],_=R[1],$=R[2];D=x.Names.camelCase(D);var H=x.Hooks.getRoot(D),B=!1;if(o(s).isSVG||"tween"===H||x.Names.prefixCheck(H)[1]!==!1||x.Normalizations.registered[H]!==n){(a.display!==n&&null!==a.display&&"none"!==a.display||a.visibility!==n&&"hidden"!==a.visibility)&&/opacity|filter/.test(D)&&!$&&0!==W&&($=0),a._cacheValues&&L&&L[D]?($===n&&($=L[D].endValue+L[D].unitType),B=o(s).rootPropertyValueCache[H]):x.Hooks.registered[D]?$===n?(B=x.getPropertyValue(s,H),$=x.getPropertyValue(s,D,B)):B=x.Hooks.templates[H][1]:$===n&&($=x.getPropertyValue(s,D));var j,N,q,X=!1;if(j=d(D,$),$=j[0],q=j[1],j=d(D,W),W=j[0].replace(/^([+-\/*])=/,function(t,e){return X=e,""}),N=j[1],$=parseFloat($)||0,W=parseFloat(W)||0,"%"===N&&(/^(fontSize|lineHeight)$/.test(D)?(W/=100,N="em"):/^scale/.test(D)?(W/=100,N=""):/(Red|Green|Blue)$/i.test(D)&&(W=W/100*255,N="")),/[\/*]/.test(X))N=q;else if(q!==N&&0!==$)if(0===W)N=q;else{l=l||f();var Y=/margin|padding|left|right|width|text|word|letter/i.test(D)||/X$/.test(D)||"x"===D?"x":"y";switch(q){case"%":$*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:$*=l[q+"ToPx"]}switch(N){case"%":$*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:$*=1/l[N+"ToPx"]}}switch(X){case"+":W=$+W;break;case"-":W=$-W;break;case"*":W=$*W;break;case"/":W=$/W}r[D]={rootPropertyValue:B,startValue:$,currentValue:$,endValue:W,unitType:N,easing:_},b.debug&&console.log("tweensContainer ("+D+"): "+JSON.stringify(r[D]),s)}else b.debug&&console.log("Skipping ["+H+"] due to a lack of browser support.")}r.element=s}r.element&&(x.Values.addClass(s,"velocity-animating"),V.push(r),""===a.queue&&(o(s).tweensContainer=r,o(s).opts=a),o(s).isAnimating=!0,S===k-1?(b.State.calls.push([V,g,a,null,A.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,u())):S++)}var l,s=this,a=v.extend({},b.defaults,w),r={};switch(o(s)===n&&b.init(s),parseFloat(a.delay)&&a.queue!==!1&&v.queue(s,a.queue,function(t){b.velocityQueueEntryFlag=!0,o(s).delayTimer={setTimeout:setTimeout(t,parseFloat(a.delay)),next:t}}),a.duration.toString().toLowerCase()){case"fast":a.duration=200;break;case"normal":a.duration=m;break;case"slow":a.duration=600;break;default:a.duration=parseFloat(a.duration)||1}b.mock!==!1&&(b.mock===!0?a.duration=a.delay=1:(a.duration*=parseFloat(b.mock)||1,a.delay*=parseFloat(b.mock)||1)),a.easing=c(a.easing,a.duration),a.begin&&!p.isFunction(a.begin)&&(a.begin=null),a.progress&&!p.isFunction(a.progress)&&(a.progress=null),a.complete&&!p.isFunction(a.complete)&&(a.complete=null),a.display!==n&&null!==a.display&&(a.display=a.display.toString().toLowerCase(),"auto"===a.display&&(a.display=b.CSS.Values.getDisplayType(s))),a.visibility!==n&&null!==a.visibility&&(a.visibility=a.visibility.toString().toLowerCase()),a.mobileHA=a.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,a.queue===!1?a.delay?setTimeout(t,a.delay):t():v.queue(s,a.queue,function(e,i){return i===!0?(A.promise&&A.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void t(e))}),""!==a.queue&&"fx"!==a.queue||"inprogress"===v.queue(s)[0]||v.dequeue(s)}var l,d,f,g,y,w,r=arguments[0]&&(arguments[0].p||v.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(l=!1,f=0,g=this,d=this):(l=!0,f=1,g=r?arguments[0].elements||arguments[0].e:arguments[0]),g=a(g)){r?(y=arguments[0].properties||arguments[0].p,w=arguments[0].options||arguments[0].o):(y=arguments[f],w=arguments[f+1]);var k=g.length,S=0;if(!/^(stop|finish)$/i.test(y)&&!v.isPlainObject(w)){var P=f+1;w={};for(var T=P;T<arguments.length;T++)p.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?p.isString(arguments[T])||p.isArray(arguments[T])?w.easing=arguments[T]:p.isFunction(arguments[T])&&(w.complete=arguments[T]):w.duration=arguments[T]}var A={promise:null,resolver:null,rejecter:null};l&&b.Promise&&(A.promise=new b.Promise(function(t,e){A.resolver=t,A.rejecter=e}));var M;switch(y){case"scroll":M="scroll";break;case"reverse":M="reverse";break;case"finish":case"stop":v.each(g,function(t,e){o(e)&&o(e).delayTimer&&(clearTimeout(o(e).delayTimer.setTimeout),o(e).delayTimer.next&&o(e).delayTimer.next(),delete o(e).delayTimer)});var O=[];return v.each(b.State.calls,function(t,e){e&&v.each(e[1],function(i,s){var a=w===n?"":w;return a===!0||e[2].queue===a||w===n&&e[2].queue===!1?void v.each(g,function(i,n){n===s&&((w===!0||p.isString(w))&&(v.each(v.queue(n,p.isString(w)?w:""),function(t,e){p.isFunction(e)&&e(null,!0)}),v.queue(n,p.isString(w)?w:"",[])),"stop"===y?(o(n)&&o(n).tweensContainer&&a!==!1&&v.each(o(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),O.push(t)):"finish"===y&&(e[2].duration=1))}):!0})}),"stop"===y&&(v.each(O,function(t,e){h(e,!0)}),A.promise&&A.resolver(g)),t();default:if(!v.isPlainObject(y)||p.isEmptyObject(y)){if(p.isString(y)&&b.Redirects[y]){var E=v.extend({},w),L=E.duration,F=E.delay||0;return E.backwards===!0&&(g=v.extend(!0,[],g).reverse()),v.each(g,function(t,e){parseFloat(E.stagger)?E.delay=F+parseFloat(E.stagger)*t:p.isFunction(E.stagger)&&(E.delay=F+E.stagger.call(e,t,k)),E.drag&&(E.duration=parseFloat(L)||(/^(callout|transition)/.test(y)?1e3:m),E.duration=Math.max(E.duration*(E.backwards?1-t/k:(t+1)/k),.75*E.duration,200)),b.Redirects[y].call(e,e,E||{},t,k,g,A.promise?A:n)}),t()}var I="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return A.promise?A.rejecter(new Error(I)):console.log(I),t()}M="start"}var z={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},V=[];v.each(g,function(t,e){p.isNode(e)&&s.call(e)});var D,E=v.extend({},b.defaults,w);if(E.loop=parseInt(E.loop),D=2*E.loop-1,E.loop)for(var R=0;D>R;R++){var W={delay:E.delay,progress:E.progress};R===D-1&&(W.display=E.display,W.visibility=E.visibility,W.complete=E.complete),C(g,"reverse",W)}return t()}};b=v.extend(C,b),b.animate=C;var k=e.requestAnimationFrame||f;return b.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},u()):k=e.requestAnimationFrame||f}),t.Velocity=b,t!==e&&(t.fn.velocity=C,t.fn.velocity.defaults=b.defaults),v.each(["Down","Up"],function(t,e){b.Redirects["slide"+e]=function(t,i,s,a,o,r){var l=v.extend({},i),c=l.begin,u=l.complete,h={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===n&&(l.display="Down"===e?"inline"===b.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(o,o);for(var i in h){d[i]=t.style[i];var n=b.CSS.getPropertyValue(t,i);h[i]="Down"===e?[n,0]:[0,n]}d.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in d)t.style[e]=d[e];u&&u.call(o,o),r&&r.resolver(o)},b(t,h,l)}}),v.each(["In","Out"],function(t,e){b.Redirects["fade"+e]=function(t,i,s,a,o,r){var l=v.extend({},i),c={opacity:"In"===e?1:0},u=l.complete;l.complete=s!==a-1?l.begin=null:function(){u&&u.call(o,o),r&&r.resolver(o)},l.display===n&&(l.display="In"===e?"auto":"none"),b(this,c,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn",function(i){var n=t(this);e(n)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn",function(e){var n=t(this);i(n)})}),t.fn.extend({openFAB:function(){var i=t(this);e(i)},closeFAB:function(){i($this)}});var e=function(e){if($this=e,$this.hasClass("active")===!1){$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:"40px"},{duration:0});var i=0;$this.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0"},{duration:80,delay:i}),i+=40})}},i=function(t){$this=t,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:"40px"},{duration:80})}}(jQuery),function(t){"use strict";function n(t){return null!==t&&t===t.window}function s(t){return n(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,i,n={top:0,left:0},a=t&&t.ownerDocument;return e=a.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(n=t.getBoundingClientRect()),i=s(a),{top:n.top+i.pageYOffset-e.clientTop,left:n.left+i.pageXOffset-e.clientLeft}}function o(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}function c(t){if(l.allowEvent(t)===!1)return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(!(i instanceof SVGElement||-1===i.className.indexOf("waves-effect"))){e=i;break}if(i.classList.contains("waves-effect")){e=i;break}i=i.parentElement}return e}function u(e){var i=c(e);null!==i&&(r.show(e,i),"ontouchstart"in t&&(i.addEventListener("touchend",r.hide,!1),i.addEventListener("touchcancel",r.hide,!1)),i.addEventListener("mouseup",r.hide,!1),i.addEventListener("mouseleave",r.hide,!1))}var e=e||{},i=document.querySelectorAll.bind(document),r={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,n=document.createElement("div");n.className="waves-ripple",i.appendChild(n);var s=a(i),l=t.pageY-s.top,c=t.pageX-s.left,u="scale("+i.clientWidth/100*10+")";"touches"in t&&(l=t.touches[0].pageY-s.top,c=t.touches[0].pageX-s.left),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-scale",u),n.setAttribute("data-x",c),n.setAttribute("data-y",l);var h={top:l+"px",left:c+"px"};n.className=n.className+" waves-notransition",n.setAttribute("style",o(h)),n.className=n.className.replace("waves-notransition",""),h["-webkit-transform"]=u,h["-moz-transform"]=u,h["-ms-transform"]=u,h["-o-transform"]=u,h.transform=u,h.opacity="1",h["-webkit-transition-duration"]=r.duration+"ms",h["-moz-transition-duration"]=r.duration+"ms",h["-o-transition-duration"]=r.duration+"ms",h["transition-duration"]=r.duration+"ms",h["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",h["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",n.setAttribute("style",o(h))},hide:function(t){l.touchup(t);var e=this,n=(1.4*e.clientWidth,null),s=e.getElementsByClassName("waves-ripple");if(!(s.length>0))return!1;n=s[s.length-1];var a=n.getAttribute("data-x"),c=n.getAttribute("data-y"),u=n.getAttribute("data-scale"),h=Date.now()-Number(n.getAttribute("data-hold")),d=350-h;0>d&&(d=0),setTimeout(function(){var t={top:c+"px",left:a+"px",opacity:"0","-webkit-transition-duration":r.duration+"ms","-moz-transition-duration":r.duration+"ms","-o-transition-duration":r.duration+"ms","transition-duration":r.duration+"ms","-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,"-o-transform":u,transform:u};n.setAttribute("style",o(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},r.duration)},d)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var s=document.createElement("i");s.className=i.className+" waves-input-wrapper";var a=i.getAttribute("style");a||(a=""),s.setAttribute("style",a),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(s,i),s.appendChild(i)}}}},l={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?l.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){l.touches>0&&(l.touches-=1)},500):"mousedown"===t.type&&l.touches>0&&(e=!1),e},touchup:function(t){l.allowEvent(t)}};e.displayEffect=function(e){e=e||{},"duration"in e&&(r.duration=e.duration),r.wrapInput(i(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",u,!1),document.body.addEventListener("mousedown",u,!1)},e.attach=function(e){"input"===e.tagName.toLowerCase()&&(r.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",u,!1),e.addEventListener("mousedown",u,!1)},t.Waves=e,document.addEventListener("DOMContentLoaded",function(){e.displayEffect()},!1)}(window);
/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

'use strict';


// defining
window.app = window.app === undefined ? {} : window.app;
app.isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
app.isAndroid = /(android)/i.test(navigator.userAgent);
// setting up commonly used vars
app.vent = $({});
app.$document = $(document);
app.$window = $(window);
app.$body = $('body');
app.pathname = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
app.url = window.location.href;
app.pageNum = 1;
app.notificationType ='me';

// ovverriding navigator for cross browser stuff
navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

var appClose = false;

// defining BEHAVIORS - methods in browser/behaviors
app.behaviors = app.behaviors === undefined ? {} :  app.behaviors;

// defining COMPONENTS - methods in browser/components
app.components = app.components === undefined ? {} : app.components;

// defining UTILITIES - methods in browser/utils
app.utils = app.utils === undefined ? {} : app.utils;

// app in memory cache
app.cache = {};

window.onload = app.onload;

// window.onbeforeunload = function () {
//   return app.utils.ajax.get("/randomSaUrlJoExistNahiKarta").then(function (data) {
//     console.log("-------------")
//     return "this session will be lost if you close this tab";
//   }).catch(function (err) {
//     return "this session will be lost if you close this tab";
//   })
// }

/*
  Author: Deepak Sharma
  github: https://github.com/deepaksharma2491
*/

// use this instead of $.ajax
// performs some utility functions too
app.utils.ajax = function (method, url, params) {
  params = params === undefined ? {} : params;
  params.method = method;
  params.url = url;

  return $.ajax(params).always(function (argOne, status, argThree) {
    if (status === 'success') {
      var data = argOne;
      var xhr = argThree;
      var err = undefined;
    } else if (status === 'error') {
      var data = undefined;
      var xhr = argOne;
      var err = argThree;
    }
  });
};

// adding utility methods to app.utils.ajax
['GET', 'PUT', 'POST', 'DELETE'].forEach(function (method) {
  app.utils.ajax[method.toLowerCase()] = function (url, params) {
    return app.utils.ajax(method, url, params);
  };
});

// app.utils.currentUrl = function (withSearch) {
//   var urlParts = [location.protocol, '//', location.host, location.pathname];
//   if (withSearch === true) {
//     return urlParts.concat([location.search]).join('');
//   } else {
//     return urlParts.join('');
//   }
// };
app.utils.domain = function () {
  return [location.protocol, '//', location.host].join('');
};

// app.utils.site = function (path) {
//   return [location.protocol, '//', location.host,'/',path].join('');
// };
app.utils.redirectTo = function (path) {
  window.location.href = app.utils.domain()+path;
};

app.utils.redirectNewTab = function (path) {
	window.open(
  	app.utils.domain()+path,
  	'_blank' // <- This is what makes it open in a new window.
	);
}

app.utils.getFileNameFromPath = function (path) {
  var pathArray = path.split("\\");
  return pathArray[pathArray.length - 1];
}
app.components.BankDetailsUploadPanal = function ($id) {
  var $radioSingle = $id.find("#savingSingle");
  var $addFarmer =  $id.find("#addAnotherFarmer")

  $addFarmer.css("display", "none");

  $radioSingle.change(function () {
    $addFarmer.css("display", "none");
  })
}
app.components.CropAddNonlonee = function ($id) {
  var $closeCropArea = $id.find('.closeCropArea');
  var $hectareText = $id.find(".hectareText");
  var $bighaTextbox = $id.find(".bighaTextbox");
  var $biswaTextbox = $id.find(".biswaTextbox");
  var $cropArea = $id.find(".cropArea");
  var $cropArea1 = $id.find(".cropArea1");
  var $cropArea2 = $id.find(".cropArea2");
  var $totalPremium = $id.find(".totalPremium");
  var $farmerPremium = $id.find(".farmerPremium");
  var $premiumPerHectare = $id.find(".premiumPerHectare");
  var $cropSelection = $id.find(".cropSelection");
  var $cropRemove = $id.find(".removeCrop");
  var $dh_R = $("#dh_R");
  var $firstSerialNumber = $id.find('.serialNum').text();
  var $removeBtn = $id.find('.removeBtn');

  $cropArea.keypress(function (ev) {
    var regex = new RegExp("^[0-9.]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $cropArea1.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $cropArea2.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  var SubArea = function() {
    var subarea = 0
    var nonsubarea = 0
    var totalPremium = 0
    $("#premiumTable").find("tbody tr").each(function (index, item) {
      var $item = $(item);
      subarea += Number($item.find(".subArea").text())
      nonsubarea += Number($item.find(".nonSubArea").text())
      totalPremium += Number($item.find(".farmerPremium").text())
    })
    $("#premiumTableDiv").find(".totalSubArea").html("<strong>Total Area : "+ Math.round(Number(subarea + nonsubarea)*10000)/10000 +" Hect.</strong>")
    $("#premiumTableDiv").find(".totalNonSubArea").html("<strong>Total Farmer Share : "+ Math.round(totalPremium * 100)/100 +" Rupees.</strong>")
  }
  
  var cropAreaFocusFunction = function($that ,flag){
    
    var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$that.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = Number($that.val());
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $totalPremium.val("");
      $farmerPremium.val("");
      $id.data("subarea", "")
      if(flag){
        $that.closest(".cropData").data("focus", true)
      }
      var area = Number($that.closest(".cropData").data("area"))
      $that.closest(".cropData").data("area", area + Number($that.val()));
    }
  }
  $cropArea.focus(function (ev) {
    var $that = $(this)
    cropAreaFocusFunction($that,1);
  })


  $cropArea.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    if (!isNaN(Number($(this).val()))) {
      $(this).val(Math.round(Number($(this).val()) * 10000)/10000)
      if (Math.round(Number(area) * 10000)/10000 >= Math.round(Number($(this).val()) * 10000)/ 10000) {
        var cropArea = Number($(this).val());

        if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
          var totalPremium = 0;
          if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
            totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
            $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
          }
          totalPremium += Number($premiumPerHectare.val()) * (cropArea - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
          $totalPremium.val(Math.round((cropArea * Number($premiumPerHectare.val()))* 100)/100)
          $farmerPremium.val(Math.round(totalPremium * 100)/100);
          $dh_R.data("totalarea", 0)
        } else {
          $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
          $id.data("subarea", Number(cropArea) )
          $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
          var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * cropArea 
          $totalPremium.val(Math.round((cropArea * Number($premiumPerHectare.val())) * 100)/100)
          $farmerPremium.val(Math.round(totalPremium * 100)/100);
        }
        var nonSubArea = cropArea - Number($id.data("subarea"));
        var list = "<tr class="+ $(this).attr("id") +">";
        // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
        list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
        list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
        list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
        list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
        list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
        list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
        list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
        list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
        list += "</tr>";
        $("#premiumTable").append(list)
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

        SubArea();
        $(this).closest(".cropData").data("area", area - Number($(this).val()));
        $(this).closest(".cropData").data("focus", false);
      } else {
        $(this).focus()
        $(".errorCropArea").show();
        $(".errorCropArea").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropAreaelse").show();
      $(".errorCropAreaelse").fadeOut(9000);
    }
  })

   var cropAreaFocusFunction1 = function($that ,flag){
    var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = (Number($that.val()) * $that.closest(".cropData").data("convertor"))/10000;
      cropArea += (Number($cropArea2.val()) * 5)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $id.data("subarea", "")
      if(flag){
        $that.closest(".cropData").data("focus", true)  
      }
      var area = Number($that.closest(".cropData").data("area"))
      $that.closest(".cropData").data("area", area + Number($that.val()));
    }

   }

  $cropArea1.focus(function (ev) {
     var $that = $(this)
    cropAreaFocusFunction1($that,1);
  })


  $cropArea1.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    console.log(area);
    if (!isNaN(Number($(this).val()))) {
      if ($(this).val().indexOf(".") <= 0) {
        if (Math.floor(Number(area)) >= Math.round(Number($(this).val()))) {

          var cropArea = (Number($(this).val()) * $(this).closest(".cropData").data("convertor"))/10000;
          cropArea += (Number($cropArea2.val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
          console.log(cropArea, "-------------------")

          if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
            var totalPremium = 0;
            if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
              totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
              $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            }
            totalPremium += Number($premiumPerHectare.val()) * (cropArea - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            $totalPremium.val(Math.round(((cropArea * Number($premiumPerHectare.val())))* 100)/100)
            $farmerPremium.val(Math.round(totalPremium * 100)/100);
            $dh_R.data("totalarea", 0)
          } else {
            $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
            $id.data("subarea", cropArea)
            $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
            var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * cropArea 
            $totalPremium.val(Math.round(((cropArea * Number($premiumPerHectare.val()))) * 100)/100)
            $farmerPremium.val(Math.round(totalPremium * 100)/100);
          }


          var nonSubArea = cropArea - Number($id.data("subarea"));
          console.log(nonSubArea, $id.data("subarea"))

          var list = "<tr class="+ $cropArea1.attr("id") +">";
          // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
          list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
          list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
          list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
          list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
          list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
          list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
          list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
          list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
          list += "</tr>";
          $("#premiumTable").append(list)
          $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

          SubArea();

          $(this).closest(".cropData").data("area", Math.round((Number(area) - Number($(this).val())) * 1000 ) / 1000);
          $(this).closest(".cropData").data("focus", false);
          area = Number($(this).closest(".cropData").data("area"))
        } else {
          $(this).focus()
          $(".errorCropArea1").show();
          $(".errorCropArea1").fadeOut(9000);
        }
      } else {
        $(this).focus()
        $(".errorCropArea1else").show();
        $(".errorCropArea1else").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropArea1else1").show();
      $(".errorCropArea1else1").fadeOut(9000);
    }
  })


var cropAreaFocusFunction2 = function($that ,flag){

  var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = (Number($that.val()) * 5)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      cropArea += (Number($cropArea1.val()) * 100)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $id.data("subarea", "")
       if(flag){
        $that.closest(".cropData").data("focus", true)
       }
      var area = Number($that.closest(".cropData").data("area"))
      var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
      areaBiswa = areaBiswa + Math.round(Number($that.val()))
      area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
      $that.closest(".cropData").data("area", area);
    }

}

  $cropArea2.focus(function (ev) {
    var $that = $(this)
    cropAreaFocusFunction2($that,1);
  })

  $cropArea2.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
    if (!isNaN(Number($(this).val()))) {
      if ($(this).val().indexOf(".") <= 0) {
        if(Number($(this).val()) < 20) {
          if (Math.floor(Number(areaBiswa)) >= Math.round(Number($(this).val()))) {
            var cropArea = (Number($(this).val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
            cropArea += (Number($cropArea1.val()) * 100)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
            console.log(cropArea, "+++++++++++++++++++", $dh_R.data("totalarea"))
            if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
              var totalPremium = 0;
              if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
                totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
                $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
                $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              }
              totalPremium += Number($premiumPerHectare.val()) * (cropArea - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              $totalPremium.val(Math.round(((cropArea * Number($premiumPerHectare.val())))* 100)/100)
              $farmerPremium.val(Math.round(totalPremium * 100)/100);
              console.log(cropArea, "+++++++++++++++++++", $dh_R.data("totalarea"))
              $dh_R.data("totalarea", 0)
            } else {
              $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
              $id.data("subarea", cropArea)
              $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
              var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * cropArea 
              $totalPremium.val(Math.round(((cropArea * Number($premiumPerHectare.val()))) * 100)/100)
              $farmerPremium.val(Math.round(totalPremium * 100)/100);
            }


            var nonSubArea = cropArea - Number($id.data("subarea"));
            console.log(nonSubArea, $id.data("subarea"))
            var list = "<tr class="+ $cropArea1.attr("id") +">";
            // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
            list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
            list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
            list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
            list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
            list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
            list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
            list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
            list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
            list += "</tr>";
            $("#premiumTable").append(list)
            $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

            SubArea();
            areaBiswa = areaBiswa - Math.floor(Number($(this).val()))
            area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
            $(this).closest(".cropData").data("area", area);
            $(this).closest(".cropData").data("focus", false);
            area = Number($(this).closest(".cropData").data("area"))
          } else {
            $(this).focus()
            $(".errorCropArea2").show();
            $(".errorCropArea2").fadeOut(9000);
          }
        } else {
          $(this).focus()
          $(".errorCropArea2biswa").show();
          $(".errorCropArea2biswa").fadeOut(9000);
        }
      } else {
        $(this).focus()
        $(".errorCropArea2biswaelse").show();
        $(".errorCropArea2biswaelse").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropArea2else").show();
      $(".errorCropArea2else").fadeOut(9000);
    }
  })


  $cropSelection.change(function (ev) {
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {

      var $item = $(this).find("option:selected")
      $premiumPerHectare.val($item.data("pph"))
      var cropArea = Number($cropArea.val());
      $farmerPremium.val("");
      if ($hectareText.css("display") == "block") {
        $cropArea.closest(".cropData").data("subarea", Number($cropArea.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
        $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
        //$cropArea.closest(".cropData").data("focus", true)
        var area = Number($cropArea.closest(".cropData").data("area"))
        $cropArea.closest(".cropData").data("area", area + Number(cropArea));
        $cropArea.removeAttr("disabled")
      }

      if ($bighaTextbox.css("display") == "block") {
        var cropArea = (Number($cropArea2.val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
        cropArea += (Number($cropArea1.val()) * 100)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
        $cropArea1.closest(".cropData").data("subarea", Number($cropArea1.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
        $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number(cropArea)) * 10000)/10000)
        //$cropArea1.closest(".cropData").data("focus", true)

        var area = Number($cropArea1.closest(".cropData").data("area"))
        var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
        areaBiswa = areaBiswa + Math.round(Number($cropArea2.val()))
        area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
        area = area + Number($cropArea1.val());
        $cropArea1.closest(".cropData").data("area", area);
        console.log($cropArea.closest(".cropData").data("area"), cropArea)

        $cropArea1.removeAttr("disabled")
        $cropArea2.removeAttr("disabled")
      }
    }

    if ($biswaTextbox.css("display") == "block") {
      //$cropArea1.focus()
      if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+$cropArea1.attr("id")).length > 0) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
    }

    if ($hectareText.css("display") == "block") {
      //$cropArea.focus();
      if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+$cropArea.attr("id")).length > 0) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      $("#premiumTable").find("."+$cropArea.attr("id")).remove()
    }

    $cropArea.val("")
    $cropArea1.val("")
    $cropArea2.val("")
    $totalPremium.val("")
  })

  var $addAnotherCrop = $id.parent('div.crop').siblings(".addAnotherCrop");

  $closeCropArea.click(function () {
    var countopen = (typeof $addAnotherCrop.data("countopen") == "undefined") ? 0 : $addAnotherCrop.data("countopen"); 
    var index = countopen - 2;
  
    if (index > 0) {
      $id.parent('div.crop').siblings(".template_"+index).find(".closeCropArea").css("display", "block");
    }
    $addAnotherCrop.data("countopen", index);
    $id.parent('div.crop').css("display", "none");
  })

  if($firstSerialNumber == 1) {
    $removeBtn.find('a').css('visibility','hidden');
  }

  $cropRemove.click(function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {
      var countopen = $id.find(".serialNum").text();
      countopen--;
      var $cop = $id.parent().find('.cropSelection');
      $cop.html('');
      var templateId = ".template_"+countopen;
      var templateIdNew = ".template_"+countopen;
      var $itemToClose = $id.parent().find(templateId);
      var $that = $id.parent().find('.cropArea');
      var $cropData = $that.closest(".cropData");
      var areaUnit = $cropData.find(".khataNumber").data("areaunit");
      $that.closest(".cropData").data("focus", false);
      var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
      if(countopen > 1) {
        $id.closest(".cropData").find(templateIdNew).prev().find('.removeBtn').find('a').css('visibility','visible')
      }
      $id.parent().prev().find('.cropSelection').removeAttr('disabled','false');
      $id.closest(".cropData").find(".template_0"+' '+".cropSelection option").each(function() {
        if($(this).val() != '') {
          listOptions += "<option value="+ $(this).val() +" data-pph="+ $(this).data('pph') +" data-fp="+ $(this).data('fp') +">" + $(this).text() + "</option>";
        }
      });
      $cop.html(listOptions);
      $itemToClose.prevObject.css("display", "none");
      var key = "template_" + countopen;
      cropRowTemplate[key] = false;
      if (areaUnit == 'Hectare') {
        $id.parent().prev().find('.cropArea').removeAttr('disabled','false');
        $that = $id.parent().find('.cropArea');
        cropAreaFocusFunction($that, 0);
      } else {
        $id.parent().prev().find('.cropArea1').removeAttr('disabled','false');
        $id.parent().prev().find('.cropArea2').removeAttr('disabled','false');
        $that = $id.parent().find('.cropArea1');
        cropAreaFocusFunction1($that, 0);
        $that = $id.parent().find('.cropArea2');
        cropAreaFocusFunction2($that, 0);
      }
      $cropArea.val("")
      $cropArea1.val("")
      $cropArea2.val("")
      $totalPremium.val("")
      $farmerPremium.val("")
    } else {
      $(".errorCropArea1").show();
      $(".errorCropArea1").fadeOut(9000);
    }
  })
}
app.components.addCrop = function ($id) {
	var $addAnotherForm = $id.find(".addAnotherForm");
	var $addAnotherCrop = $id.find(".addAnotherCrop");
	var $template = $id.find("#template");
	var $cropList = $id.find("#cropList");
	var $districtCrop = $id.find('.districtCrop');
	var $tehsilCrop = $id.find('.tehsilCrop');
	var $ILRCrop = $id.find('.ILRCrop');
	var $patwarCrop = $id.find('.patwarCrop');
	var $villageCrop = $id.find('.villageCrop');
	var $khataNumber = $id.find('.khataNumber');
	var $villageNameAuto = $id.find(".villageNameAuto");

	$(document).on('focus blur', 'input', function (ev) {
		if (ev.type === 'focus' || ev.type === 'focusin') {
			$(this).siblings().addClass("label-up")
		} else if (ev.type === 'blur' || ev.type === 'focusout') {
			if ($(this).val() === "") {
				$(this).siblings().removeClass("label-up")
			}
		}
	})

	$addAnotherForm.click(function (ev) {
		ev.preventDefault();
		$cropList.find(".tempSelect").removeClass("tempSelect")
		app.utils.ajax.get("/getCropTemplate", { data: {
				partials: ["crop"]
			}
		}).then(function (data) {
			$id.find("div.tempSelect").removeClass("tempSelect")
			$cropList.append(data.crop)
			Materialize.updateTextFields();
			$cropList.find("select.tempSelect").material_select()
			$cropList.find("div.tempSelect").each(function () {
				$(this).removeClass("tempSelect")
				$(this).siblings("ul").remove()
				$(this).siblings("span").remove()
				$(this).siblings("input").remove()
			})
		})
	})
}

app.components.addAnotherFarmer = function ($id) {
	var $addFarmer = $id.find("#addAnotherFarmer");
	var $template = $id.find("#template");
	var $farmerList = $id.find("#farmerList");


	// $addFarmer.click(function (ev) {
		// ev.preventDefault();
		// var $farmerData = $farmerList.children(".farmerData");
		// var latestIndex = 1;

		// $.each($farmerData, function (index, item) {
		// 	var $item = $(item);

		// 	var indexFarmer = $item.find(".indexFarmer").html();
		// 	var bhamashahID = $item.find(".bhamashahID").val();
		// 	var farmersNameForm = $item.find(".farmersNameForm").val();
		// 	var fathersName = $item.find(".fathersName").val();
		// 	var radioGroup = $item.find("input:radio:checked").val();
		// 	var aadharNumberForm = $item.find(".aadharNumberForm").val();
		// 	var farmerOwnerShip = $item.find(".farmerOwnerShip :selected").text();
		// 	var farmerMobileNumber = $item.find(".farmerMobileNumber").val();
		// 	var farmerCaste = $item.find(".farmerCaste :selected").text();

		// 	latestIndex = indexFarmer
		// })

		// $farmerData.last().find(".collapsiblePanelHeader").show();
		// $farmerData.last().find(".collapsiblePanel").hide();
		// $template.find(".indexFarmer").html(Number(latestIndex)+1)
		// $template.find(".headerIndex").html(Number(latestIndex)+1)
		// $farmerList.append($template.html());    
 //  });

	$(".selectIndex").change(function(ev){
		var count = $(this).find(":selected").text();
		for (index = 1; index <= 10; index++) {
			if (index < count) {
				$id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
			} else {
				$id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
			}
		}
	})
 
}
app.components.addFarmerNonlonee = function ($id) {
	var $addFarmer = $id.find("#addAnotherFarmer");
	var $template = $id.find("#template");
	var $farmerList = $id.find("#farmerList");


	// $addFarmer.click(function (ev) {
		// ev.preventDefault();
		// var $farmerData = $farmerList.children(".farmerData");
		// var latestIndex = 1;

		// $.each($farmerData, function (index, item) {
		// 	var $item = $(item);

		// 	var indexFarmer = $item.find(".indexFarmer").html();
		// 	var bhamashahID = $item.find(".bhamashahID").val();
		// 	var farmersNameForm = $item.find(".farmersNameForm").val();
		// 	var fathersName = $item.find(".fathersName").val();
		// 	var radioGroup = $item.find("input:radio:checked").val();
		// 	var aadharNumberForm = $item.find(".aadharNumberForm").val();
		// 	var farmerOwnerShip = $item.find(".farmerOwnerShip :selected").text();
		// 	var farmerMobileNumber = $item.find(".farmerMobileNumber").val();
		// 	var farmerCaste = $item.find(".farmerCaste :selected").text();

		// 	latestIndex = indexFarmer
		// })

		// $farmerData.last().find(".collapsiblePanelHeader").show();
		// $farmerData.last().find(".collapsiblePanel").hide();
		// $template.find(".indexFarmer").html(Number(latestIndex)+1)
		// $template.find(".headerIndex").html(Number(latestIndex)+1)
		// $farmerList.append($template.html());    
 //  });

	$(".selectIndex").change(function(ev){
		var count = $(this).find(":selected").text();
		for (index = 1; index <= 10; index++) {
			if (index < count) {
				$id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
			} else {
				$id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
			}
		}
	})
 
}
app.components.bankReportHome = function ($id) {
	var $bankWise =  $id.find("#bankwisesummary")
	var $districtWise =  $id.find("#districtwisesummary")
	var $districtWiseBank =  $id.find("#districtwisebanksummary")
	var $branchWise =  $id.find("#branchwisesummary")
	var $EmitradistrictWise =  $id.find("#emitradistrictwise")
	var $emitraSsoid =  $id.find("#emitrassoid")

	$bankWise.click(function (ev) {
	  ev.preventDefault();
	  var docType = "BANKWISE";

		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})

	})
	$districtWise.click(function (ev) {
	  ev.preventDefault();
	  var docType = "DISTRICTWISE";
		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})


	})
	$districtWiseBank.click(function (ev) {
	  ev.preventDefault();
	  var docType = "DISTRICTBANK";
		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})

	})
	$branchWise.click(function (ev) {
	  ev.preventDefault();
	  var docType = "BANKBRANCH";
		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})
	})
	$EmitradistrictWise.click(function (ev) {
	  ev.preventDefault();
	  var docType = "EMITRA";
		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})
	})
	$emitraSsoid.click(function (ev) {
	  ev.preventDefault();
	  var docType = "EMITRASSOID";
		app.utils.ajax.get('/bankReportSummary?docType=' + docType).then(function(data) {
			console.log('data',data)
			if(data.status) {
				var a = document.createElement('a');
				a.href = data.data.path;
				$(a).attr('target', '_blank');
				a.click();
			} else {
				alert("Report Not found")
			}
		})
	})
}







app.components.branchReport = function ($id) {
  var $district = $id.find('.district');
  var $reportType = $id.find('.reportType');
  var $bankReportSubmit = $id.find('#bankReportSubmit');
  var $BtnBack = $id.find('#BtnBack');
  var $branchName = $id.find('.ifsc_code');
  var $cropName = $id.find('.crop_name');
  var $crop = $id.find("#cropName");
  var $reportBtn = $id.find(".show-report-button");
  //var $reportReset = $id.find(".show-report-reset");
  var $bankNameDistrict = $id.find(".bankNameDistrict");
  var userData = $id.data('usersession');
  var $myModalBank = $id.find('#myModalBank');
  var $excelFileDownload = $id.find('.excelFileFormat');
  var $sectionFileFormat = $id.find('.section-file-format');

  $branchName.change(function (ev) {
    ev.preventDefault();
    var ifscCode = $(this).find(":selected").val();
  })

  if(userData.is_user == 1 && userData.is_admin == 0) {
    $crop.parent().find(':input').attr('disabled','disabled')
    $crop.parent().find(':input').val('All Crops')
    $branchName.parent().find(':input').attr('disabled','disabled')
    $branchName.parent().find(':input').val('All branches')
    $district.parent().find(':input').attr('disabled','disabled')
    $district.parent().find(':input').val('All Districts')
  } 

  $reportType.change(function (ev) {
    ev.preventDefault();
    $reportType = $(this).find(":selected").val();
    if($reportType == "0" && !(userData.is_user == 1 && userData.is_admin == 0)) {
      $crop.parent().find(':input').attr('disabled','disabled')
      $crop.parent().find(':input').val('All Crops')
      $branchName.parent().find(':input').removeAttr('disabled')
      $branchName.parent().find(':input').val('SELECT BRANCH NAME')
      $branchName.find(':input').removeAttr('disabled')
      $district.parent().find(':input').removeAttr('disabled')
      $district.parent().find(':input').val('SELECT DISTRICT')

    }
    else if ($reportType == "1" && !(userData.is_user == 1 && userData.is_admin == 0)) {
      $branchName.parent().find(':input').attr('disabled','disabled')
      $branchName.parent().find(':input').val('All branches')
      //$crop.parent().find(':input').attr('disabled','disabled')
      $crop.find(':input').attr('disabled','disabled')
      $crop.parent().find(':input').val('All Crops')
      $district.parent().find(':input').attr('disabled','disabled')
      $district.parent().find(':input').val('All Districts')

    }
    else if ($reportType == "2" && !(userData.is_user == 1 && userData.is_admin == 0)) {
      $crop.parent().find(':input').attr('disabled','disabled')
      $crop.parent().find(':input').val('All Crops')
      $district.parent().find(':input').removeAttr('disabled')
      $district.parent().find(':input').val('SELECT DISTRICT')
      $branchName.parent().find(':input').removeAttr('disabled')
      $branchName.parent().find(':input').val('SELECT BRANCH NAME')
    }
    if(userData.object_type == "COOPERATIVE") {
      $district.parent().find(':input').attr('disabled','disabled')
      $district.parent().find(':input').val('All Districts')
    }
    if(userData.object_type == "RURAL" && (userData.is_user == 0 && userData.is_admin == 1)) {
      $branchName.parent().find(':input').attr('disabled','disabled')
      $branchName.parent().find(':input').val('All branches')
    }
  }) 

  if(userData.object_type == "COOPERATIVE") {
   $district.parent().find(':input').attr('disabled','disabled')
   $district.parent().find(':input').val('All Districts')
   var districtID = $bankNameDistrict.val();
   if(districtID) {
     app.utils.ajax.get('/branchName?districtID=' + districtID).then(function (result) {
       if (result.status) {
         var $branchName = $id.find('#branchName');
         var listOptions ="<option value='' selected=true>SELECT BRANCH NAME</option>";
         result.data.forEach(function(obj){
           listOptions += "<option value="+ obj.ifsc_code +">" + obj.branch_name + "</option>";
         })
         $branchName.material_select('destroy');
         $branchName.html(listOptions)
         $branchName.material_select();

       } else {
         Materialize.toast('Branch Name not found', 5000, 'rounded');
       }
     },function(err){
       if(err.status == 401){
         Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
         window.location.href = "/adminLogin";
       }
     })
   }
  }

  $district.change(function (ev) {
    ev.preventDefault();
    var districtID = $(this).find(":selected").val();
    if (districtID !== "") {
      app.utils.ajax.get('/branchName?districtID=' + districtID).then(function (result) {
        if (result.status) {
          var $branchName = $id.find('#branchName');
          var listOptions ="<option value='' selected=true>SELECT BRANCH NAME</option>";
          result.data.forEach(function(obj){
            listOptions += "<option value="+ obj.ifsc_code +">" + obj.branch_name + "</option>";
          })
          $branchName.material_select('destroy');
          $branchName.html(listOptions)
          $branchName.material_select();

        }else{
          Materialize.toast('Branch Name not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
      app.utils.ajax.get('/getCrops?districtID=' + districtID).then(function (item) {
        if (item.status) {
          var $cropName = $id.find('#cropName');
          var listCrop ="<option value='' selected=true>SELECT CROP NAME</option>";
          item.data.forEach(function(obj){
            listCrop += "<option value="+ obj.crop_id +">" + obj.crop_name_english + "</option>";
          })
          $cropName.material_select('destroy');
          $cropName.html(listCrop)
          $cropName.material_select();

        }else{
          Materialize.toast('Crop Name not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    }
  }) 


 $excelFileDownload.on('click', function (ev) {
  setTimeout(function() {
    fnExcelReport();
  },1000);
 })
 var bankReport = function(result){
  var $tdlist = $id.find("#t01");
  var $bankNoResult = $id.find(".bank-no-result");
  //$reportBtn.removeClass('hide')
  //$reportReset.removeClass('hide')
  $tdlist.find('.backendData').html('')
  $tdlist.find('.backendData').nextAll().html('')
  if(result.data != 0) {
    $reportBtn.trigger('click');
    $bankNoResult.addClass('hide');
    $sectionFileFormat.removeClass('hide');
    result.data.forEach(function(obj,index) {
      $tdlist.append('<tr></tr>')
      var tdList;
      for(var key in obj){
        if(index == 0) {
          $tdlist.find('.backendData').append('<th>'+key.replace(/_/g,' ')+'</th>')
        }
        tdList += "<td>" + obj[key] + "</td>";
      }
      $tdlist.find('tr').last().html(tdList)
    })
  } else {
    Materialize.toast('NO RECORD FOUNDS', 5000, "rounded")
    $sectionFileFormat.addClass('hide');
  }
 }

 $BtnBack.click(function (ev) {
  ev.preventDefault();
  app.utils.redirectTo("/welcome");
})

 $bankReportSubmit.click(function (ev) {
  var reportTypeId = $('.reportType').find(":selected").val();
  var districtID;
  userData.object_type == "COOPERATIVE" ? districtID = 'cooperative' : districtID = $('.district').find(":selected").val();
  var ifscCode = $('.ifsc_code').find(":selected").val();
  var cropID = $('.crop_name').find(":selected").val();
  if(userData.is_user == 1 && userData.is_admin == 0 && userData.object_type == "COOPERATIVE") {
    $('#pluswrap-overlay').css('display','block');
    app.utils.ajax.get('/getReportUserCoperative?reportTypeId=' + reportTypeId + '&branchCode=' + userData.branchCode).then(function (result) {
      $('#pluswrap-overlay').css('display','none');
      if (result.status) {
        bankReport(result);
      }else{
        Materialize.toast('Report not found', 5000, 'rounded');
      }
    },function(err){
      if(err.status == 401){
        Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
        window.location.href = "/adminLogin";
      }
    })
  } else {
    if (reportTypeId == "0"){
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.get('/getReport?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&ifscCode=' + ifscCode).then(function (result) {
        $('#pluswrap-overlay').css('display','none');
        if (result.status) {
          bankReport(result);
        }else{
          Materialize.toast('Report not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    }
    else if(reportTypeId == "1" && districtID !== "" && cropID !== ""){
      $('#pluswrap-overlay').css('display','block');
        app.utils.ajax.get('/getReportCrop?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&cropId=' + cropID).then(function (result) {
        $('#pluswrap-overlay').css('display','none');
        if (result.status) {
          bankReport(result);
        }else{
          Materialize.toast('Report not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    }
    else if(reportTypeId == "1" && districtID == "" && cropID !== ""){
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.get('/getReportCrop?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&cropId=' + cropID).then(function (result) {
       $('#pluswrap-overlay').css('display','none');
       if (result.status) {
        bankReport(result);
      }else{
        Materialize.toast('Report not found', 5000, 'rounded');
      }
    },function(err){
      if(err.status == 401){
        Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
        window.location.href = "/adminLogin";
      }
    })
    }
    else if(reportTypeId == "1" && districtID != "" && cropID == "") {
      $('#pluswrap-overlay').css('display','block');
        app.utils.ajax.get('/getReportCrop?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&cropId=' + cropID).then(function (result) {
         $('#pluswrap-overlay').css('display','none');
         if (result.status) {
          bankReport(result);
        }else{
          Materialize.toast('Report not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    } else if(reportTypeId == "1" && districtID == "" && cropID == ""){
      $('#pluswrap-overlay').css('display','block');
        app.utils.ajax.get('/getReportCrop?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&cropId=' + cropID).then(function (result) {
         $('#pluswrap-overlay').css('display','none');
         if (result.status) {
          bankReport(result);
        }else{
          Materialize.toast('Report not found', 5000, 'rounded');
        }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    } else if(reportTypeId == "2" && districtID == "" && ifscCode == "") {
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.get('/getReportTypeTwo?reportTypeId=' + reportTypeId + '&districtId=' + districtID + '&ifscCode=' + ifscCode).then(function (result) {
       $('#pluswrap-overlay').css('display','none');
       if (result.status) {
        bankReport(result);
      }else{
        Materialize.toast('Report not found', 5000, 'rounded');
      }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    } else if(reportTypeId == "2" && districtID !== "" && ifscCode == "") {
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.get('/getReportTypeTwo?reportTypeId=' + reportTypeId  + '&districtId=' + districtID + '&ifscCode=' + ifscCode).then(function (result) {
       $('#pluswrap-overlay').css('display','none');
       if (result.status) {
        bankReport(result);
      }else{
        Materialize.toast('Report not found', 5000, 'rounded');
      }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    } else if(reportTypeId == "2" && districtID !== "" && ifscCode != "") {
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.get('/getReportTypeTwo?reportTypeId=' + reportTypeId  + '&districtId=' + districtID + '&ifscCode=' + ifscCode).then(function (result) {
       $('#pluswrap-overlay').css('display','none');
       if (result.status) {
        bankReport(result);
      }else{
        Materialize.toast('Report not found', 5000, 'rounded');
      }
      },function(err){
        if(err.status == 401){
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = "/adminLogin";
        }
      })
    }
    else{
      Materialize.toast('Please Select Report Type', 5000, 'rounded');
    }
      
    }
  })

  var fnExcelReport = function() {
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('t01'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
      alert('Browser not supportable')
    }  
    else {
      var fileName = 'data:application/vnd.ms-excel,' + encodeURIComponent(tab_text);  
      var a = document.createElement('a');
      a.href = fileName;
      a.download = 'branch_report.xls';
      //triggering the function
      a.click();
    }                //other browser not tested on IE 11
  }
}

app.components.cardPreview = function ($id) {
	
}
var cropRowTemplate = {};
  cropRowTemplate["template_0"] = true;
  for (var i = 1; i <= 9; i++) {
      var key = "template_" + i;
      cropRowTemplate[key] = false;

  }

var farmerBlockTemplate = {
	"farmerTemplate_0": true
};
for (var i = 1; i<=10; i++) {
	farmerBlockTemplate["farmerTemplate_" + i] = false;
}
app.components.createFarmer = function ($id) {
	var $addFarmer = $id.find("#addAnotherFarmer");
	var $addAnotherForm = $id.find(".addAnotherForm");
	var $cropList = $id.find("#cropList");
	var $finalSubmit = $id.find("#finalSubmit");
	var $finalPreview = $id.find("#finalPreview");
	var $finalEdit = $id.find("#finalEdit");
	var $finalDiscard = $id.find("#finalDiscard");
	var $radioSingle = $id.find("#radioSingle");
	var $radioJoint = $id.find("#radioJoint");
	var $holder = $id.find("#holder");
	var $saving = $id.find("#savingAcc");
	var $kcc= $id.find("#kcc");
	var $kccAccountLength= $id.find(".kccAccountLength");
	var $kccAccountLengthVal= $kccAccountLength.data("kccaccountlength");
	var $removeFarmer = $id.find(".removeFarmer")
	var $submitSave = $id.find(".submit-save")
	var savingFlag = 0;
	var $windowOverlay = $id.find("#pluswrap-overlay-load")
	var $dicardSave = $id.find(".discard-save");
	var CF;
	var $loanDate = $id.find('#loan-date').find('.date');
	var policyCounter = 0;
	var minKcc = 5;
	var maxKcc = 18;
	
	function add() {
	  policyCounter++;
	}
	var timerFlag = setInterval(add, 1000);
	$( window ).load(function() {
		$windowOverlay.css('display','none');
	});
  $holder.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $loanDate.datepicker({
    format: "dd/mm/yyyy",
    startDate: "01/01/2016",
    endDate: "10/01/2017"
  });
  
	$kcc.keypress(function (ev) {
	  var regex = new RegExp("^[0-9]+$");
	  var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
	  if (regex.test(str)) {
	    return true;
	  }
	  ev.preventDefault();
	  return false;
	});


	$saving.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

	if ($saving.prop("disabled")) {
		$kcc.focus();
	} else {
		$saving.focus();

	}

	$("#step2 *").attr("disabled", "disabled");
	$("#step3 *").attr("disabled", "disabled");
	$("#step4 *").attr("disabled", "disabled");

	var checkKcc = function() {
		var regex = new RegExp("^[0-9]+$");
		var str = $kcc.val();	
		if (!regex.test(str)) {
		  $kcc.focus()
			$(".errorKccSelection").show();
			$(".errorKccSelection").fadeOut(9000);
			return false;
		} 
		if ( $saving.prop("disabled") ) {
			app.utils.ajax.get("/getSavingDetails", {
				data: {
					kccAccount: $kcc.val()
				}
			}).then(function (data) {
				console.log('data',data);
				if (data.status) {
					var $farmerData = $($id.find(".farmerData")[0])
					$farmerData.find(".address").val(data.data.address)
					$farmerData.find(".fathersName").val(data.data.fatherName)
					$farmerData.find(".farmerMobileNumber").val(data.data.mobile)
					$farmerData.find(".farmersFirstName").val(data.data.name)
					$farmerData.find(".farmerCaste").val(data.data.caste)
					$farmerData.find(".bhamashahID").val(data.data.bhamashah)
					
					var value = data.data.aadhar;
					if (value != null && value.length > 4 && value.substr(4,1) !== '-') {
					  value = value.substr(0, 4) + "-" + value.substr(4, value.length)
					}
					if (value != null && value.length > 9 && value.substr(9,1) !== '-') {
					  value = value.substr(0, 9) + "-" + value.substr(9, value.length)
					}
					$farmerData.find(".aadharNumberForm").val(value);

					if (data.data && data.data.gender && data.data.gender == "FEMALE" || data.data.gender == "F") {
					  $farmerData.find(".radioGroupGender").find("input")[1].checked = true
					} else if (data.data && data.data.gender && data.data.gender == "MALE" || data.data.gender == "M") {
					  $farmerData.find(".radioGroupGender").find("input")[0].checked = true
					}
					$id.find('.customRightKcc').css("display", "block");
				}
				savingFlag = 1;
				$kcc.attr("disabled", "disabled")
				$("#step2 *").removeAttr("disabled");
				$radioSingle.focus();
			},function(err){
				if(err.status == 401) {
					$(".errorSession").show();
					$(".errorSession").fadeOut(9000);
					window.location.href="/"
				}
			})
			 //$loanDate.find(':input').focus()
		} else {
			$kcc.attr("disabled", "disabled")
		}
	}

	$kcc.blur(function (ev) {
		if($kccAccountLengthVal == $kcc.val().length){
			checkKcc();
		} else if(($kcc.val().length > minKcc  && $kcc.val().length < maxKcc) && !savingFlag && !$kccAccountLengthVal) {
			checkKcc();
		} else if(($kcc.val().length > 0  && $kcc.val().length < 6) && savingFlag) {
			if ( $saving.prop("disabled") ) {
				$kcc.attr("disabled", "disabled")
				$("#step2 *").removeAttr("disabled");
				//$radioSingle.focus();
				$loanDate.find(':input').focus()
			} else {
				$kcc.attr("disabled", "disabled")
			}
		} else {
			$(".errorKccSelection").show();
      $(".errorKccSelection").fadeOut(9000);
      $kcc.focus()
		}
		/*if ($kcc.val().length > 17 || $kcc.val().length < 6) {
			$(".errorKccSelection").show();
      		$(".errorKccSelection").fadeOut(9000);
      		$kcc.focus()
		} else {
			if ( $saving.prop("disabled") ) {
				$kcc.attr("disabled", "disabled")
				$("#step2 *").removeAttr("disabled");
				$(".bhamashahID").focus()
			} else {
				$kcc.attr("disabled", "disabled")
			}
		}*/
	});

	var checkSaving = function(){
		app.utils.ajax.get("/getSavingDetails", {
				data: {
					savingAccount: $saving.val()
				}
			}).then(function (data) {
				if (data.status) {
					var $farmerData = $($id.find(".farmerData")[0])
					$farmerData.find(".address").val(data.data.address)
					$farmerData.find(".fathersName").val(data.data.fatherName)
					$farmerData.find(".farmerMobileNumber").val(data.data.mobile)
					$farmerData.find(".farmersFirstName").val(data.data.name)
					$farmerData.find(".farmerCaste").val(data.data.caste)
					$farmerData.find(".bhamashahID").val(data.data.bhamashah)
					var value = data.data.aadhar;
					if (value != null && value.length > 4 && value.substr(4,1) !== '-') {
						value = value.substr(0, 4) + "-" + value.substr(4, value.length)
					}
					if (value != null && value.length > 9 && value.substr(9,1) !== '-') {
						value = value.substr(0, 9) + "-" + value.substr(9, value.length)
					}
					$farmerData.find(".aadharNumberForm").val(value);

					if (data.data && data.data.gender && data.data.gender == "FEMALE" || data.data.gender == "F") {
						$farmerData.find(".radioGroupGender").find("input")[1].checked = true
					} else if (data.data && data.data.gender && data.data.gender == "MALE" || data.data.gender == "M") {
						$farmerData.find(".radioGroupGender").find("input")[0].checked = true
					}
					$id.find('.customRightSaving').css("display", "block");
				}
				$saving.attr("disabled", "disabled")
				savingFlag = 1;
				//$kcc.focus();
			},function(err){
				if(err.status == 401) {
					$(".errorSession").show();
					$(".errorSession").fadeOut(9000);
					window.location.href="/"
				}
			})
	}

	$saving.blur(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = $saving.val();
		if (!regex.test(str)) {
			$saving.focus()
			$(".errorSavingSelection").show();
			$(".errorSavingSelection").fadeOut(9000);
			return false;
		}
		if($saving.val().length == $kccAccountLengthVal){
			checkSaving();
		} else if ($saving.val().length == 17 && !$kccAccountLengthVal) {
			checkSaving();
		} else {
			$(".errorSavingSelection").show();
			$(".errorSavingSelection").fadeOut(9000);
			$saving.focus()
		}
	})

	$kcc.on("change paste keyup", function (ev) {
	  if ($(this).val().length > 17 && !savingFlag) {
	    $(this).val($(this).val().substr(0, 17))
	  } else if($(this).val().length > 5 && savingFlag) {
	  	$(this).val($(this).val().substr(0, 5))
	  }
	})
	$saving.on("change paste keyup", function (ev) {
	  if ($(this).val().length > 17) {
	    $(this).val($(this).val().substr(0, 17))
	  }
	})
	$holder.on("change paste keyup", function (ev) {
	  if ($(this).val().length > 1) {
	    $(this).val($(this).val().substr(0, 1))
	  }
	})

	$addFarmer.css('display', 'none');
	$removeFarmer.css("display", "none");


	$radioSingle.change(function () {
		$addFarmer.css('display', 'none');
		$removeFarmer.css("display", "none");
		for (var template in farmerBlockTemplate) {
			if (template == "farmerTemplate_0") {
				$id.find("." + template).css("display", "block")
				farmerBlockTemplate[template] = true;
				continue;
			}
			if (farmerBlockTemplate[template]) {
				$id.find("." + template).css("display", "none");
				farmerBlockTemplate[template] = false;
			}
		}
		$holder.attr("disabled", true);
	});

	$radioJoint.change(function () {
		$addFarmer.css('display', 'block');
		$removeFarmer.css("display", "block");
		$id.find(".farmerTemplate_0").find(".removeFarmer").css("display", "none")
		$holder.removeAttr("disabled");
		$holder.focus();
	});

	var $customClose = $id.find(".custom-close");

	$addAnotherForm.click(function (ev) {
		ev.preventDefault();
		var index = Number($cropList.data("index"))
		$('#pluswrap-overlay').css('display','block');
		app.utils.ajax.get("/getCropTemplateSingle", { data: {
				partials: ["crop"],
				index: index + 1
			}
		}).then(function (data) {
			$('#pluswrap-overlay').css('display','none');
			if (data.crop) {
				$cropList.data("index", index + 1)
				$cropList.last(".cropData").append(data.crop)
				$cropList.find('.cropData').last().find('.remove-khata').css('display','block')
				$cropList.find('.cropData').last().find('.remove-khata').on("click", function(){
					$cropList.data("index", Number($cropList.data("index")) - 1);
					if ($(this).closest('.cropData').find(".khataNumber").data("areaunit") == "Hectare") {
						$(this).closest('.cropData').find(".cropArea").each(function (index, item) {
							if ($(item).css("display") == "block") {
								$("#dh_R").data("totalarea", Math.round(Number(($("#dh_R").data("totalarea")) + Number($(item).closest(".cropDataArea").data("subarea"))) * 10000)/10000)
			          $("#premiumTable").find("."+$(item).attr("id")).remove()
				        if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+ $(item).attr("id")).length > 0) {
				          $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
				        }
							}
						})
					} else {
						$(this).closest('.cropData').find(".cropArea1").each(function (index, item) {
							if ($(item).css("display") == "block") {
								$("#dh_R").data("totalarea", Math.round(Number(($("#dh_R").data("totalarea")) + Number($(item).closest(".cropDataArea").data("subarea"))) * 10000)/10000)
			          $("#premiumTable").find("."+$(item).attr("id")).remove()
			          if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+ $(item).attr("id")).length > 0) {
			            $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
			          }
			        }
						})
					}
    			$(this).closest('.cropData').remove();
				});
				$cropList.find('.cropData').find('.gov-page-heading').find('h6').each(function(index){
					var khataSerialNumber = 1 + index; 
					$(this).html('Khata No. '+khataSerialNumber) 
				})
			} else {
				$(".errorAddFormSelection").show();
        		$(".errorAddFormSelection").fadeOut(9000);
			}
		},function(err){
			if(err.status == 401) {
				$(".errorSession").show();
				$(".errorSession").fadeOut(9000);
				window.location.href="/"
			}
		})
	})

	$customClose.click(function(){
		$(".modal").hide();
  });

	$addFarmer.click(function (ev) {
		ev.preventDefault();
		var farmerCount = $(this).data("farmer");
		var openTemplateCount = 0;
		var latestClosedTemplate = null;

		for (var template in farmerBlockTemplate) {
			if (latestClosedTemplate == null && farmerBlockTemplate[template] == false) {
				latestClosedTemplate = template;
			}
			if (farmerBlockTemplate[template] == true) {
				openTemplateCount++;
			}
		}

		if (openTemplateCount < Number($holder.val())) {
			$id.find("." + latestClosedTemplate).css("display", "block").addClass("farmerList")
			farmerBlockTemplate[latestClosedTemplate] = true;
			/*farmerCount++;
			var count = farmerCount;
			for (index = 1; index <= 10; index++) {
				if (index < count) {
					$id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
				} else {
					$id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
				}
			}*/
			$(this).data("farmer",farmerCount)
		} else {
			$(".errorFarmerNumber").show();
			$(".errorFarmerNumber").fadeOut(9000);
		}
	})

	$finalSubmit.click(function (ev) {
		$('#modalSubmit').modal('show');
	})

	$finalDiscard.click(function (ev) {
		$('#modalDiscard').modal('show');
	})
	$submitSave.off().click(function(){
		$('#modalSubmit').modal('hide');
    	$('#pluswrap-overlay').css('display','block');
    		CF['policyTimer'] = policyCounter;
    		console.log('submitSave',JSON.stringify(CF));
			app.utils.ajax.post("/policy", {data: CF }).then(function (data) {
				CF ="";
				clearInterval(timerFlag)
				$finalEdit.trigger('click');
				$('#pluswrap-overlay').css('display','none');
				if (data.status) {
					if (typeof data.data.farmers !== "undefined") {
						data.data.farmers.forEach(function (item) {
							if (!item.status) {
								$(".errorFarmerDetails").show();
	       			  $(".errorFarmerDetails").fadeOut(9000);
							}
						})
					} else if (typeof data.data.farmerFinance !== "undefined") {
						if (!data.data.farmerFinance.status) {
							$(".errorBankDetails").show();
	       			$(".errorBankDetails").fadeOut(9000);
						}
					} else {
						alert("policy Submitted Successfully");
						app.utils.redirectTo("/cropInsurance")
					}
				} else {
					if(typeof data.error == "string") {
						$(".errorPolicyDetailsBackend").children().children().eq(1).text(data.error)
						$(".errorPolicyDetailsBackend").show();
			     		$(".errorPolicyDetailsBackend").fadeOut(9000);
					} else if(data.body && data.body.error) {
						$(".errorPolicyDetailsBackend").children().children().eq(1).text(data.body.error)
						$(".errorPolicyDetailsBackend").show();
			     		$(".errorPolicyDetailsBackend").fadeOut(9000);
					} else {
					$(".errorBackendError").show();
	     			$(".errorBackendError").fadeOut(9000);
					}
				}
			},function(err){
				if(err.status == 401) {
					$(".errorSession").show();
					$(".errorSession").fadeOut(9000);
					window.location.href="/"
				}
			})
		
	})

	$finalPreview.on('click',function (ev) {
		var flag = 1;
		ev.preventDefault();
		var data = {}
		var $farmerData = $id.find(".farmerList");
		var latestIndex = 1;
		var $kcc= $id.find("#kcc");
		data["accountNumber"]=$kcc.val();
		var accType= 1
		console.log('$id',$id)
		var loanDate = $id.parent().parent().parent().find('.date :input').val();
		if (loanDate === "") {
		  $(".errorDateSelection").show();
		  $(".errorDateSelection").fadeOut(9000);
		  flag = 0;
		  return false;
		}
		var loanDateReplace = loanDate.replace(/\//g,'-');
		var finalDate = loanDateReplace.split('-').reverse().join('-') + ' 00:00:00'
		var dateJs = new Date(finalDate);
		var dateTime = dateJs.getTime();
		// accType = 1(KCC), 0(Saving)
		data['loanDate'] = dateTime;
		data["accountType"] = accType;
		data["savingAccount"] = $saving.val();
    var farmerAccountType= $(".farmerAccType input:checked").val();
    data["farmerAccountType"] = farmerAccountType;
    if(!farmerAccountType) {
			$(".errorfarmerAccountType").show();
   		$(".errorfarmerAccountType").fadeOut(9000);	
   		flag = 0;
   		return false;
		}
    var farmerOwnerShip= $(".farmerOwnerShip input:checked").val();
    data["farmerOwnership"] = farmerOwnerShip;
    if(!farmerOwnerShip) {
			$(".errorfarmerOwnership").show();
   		$(".errorfarmerOwnership").fadeOut(9000);	
   		flag = 0;
   		return false;
		}
    var farmers = [];
		var $farmerData = $id.find(".farmerList");
		$farmerData.each(function (index, itemFarmer) {
			var $itemFarmer = $(itemFarmer);
			if ($itemFarmer.css("display") == "block") {
				var farmer = {};
				var indexFarmer = $itemFarmer.find(".indexFarmer").html();
				var bhamashahID = $itemFarmer.find(".bhamashahID").val();
				farmer["bhamashahID"] = bhamashahID;
				var farmersFirstNameForm = $itemFarmer.find(".farmersFirstName").val();
				if(farmersFirstNameForm == 0) {
					$(".errorFirstName").show();
	     		$(".errorFirstName").fadeOut(9000);	
	     		flag = 0;
	     		return false;
				}
				farmer["firstName"] = farmersFirstNameForm;
				var farmersLastNameForm = $itemFarmer.find(".farmersLastName").val();
				farmer["lastName"] = farmersLastNameForm;
				var fathersName = $itemFarmer.find(".fathersName").val();
				if(!fathersName) {
					$(".errorFHName").show();
	     		$(".errorFHName").fadeOut(9000);	
	     		flag = 0;
	     		return false;
				}
				farmer["fatherName"] = fathersName;
				var radioGroup = $itemFarmer.find(".radioGroupGender input:checked").val();
				if(!radioGroup) {
					$(".errorFarmerGender").show();
	     		$(".errorFarmerGender").fadeOut(9000);	
	     		flag = 0;
	     		return false;
				}
				farmer["gender"] = radioGroup;
				var address = $itemFarmer.find(".address").val();
				farmer["address"] = address;
				if($itemFarmer.find(".aadharNumberForm").val().length == 14) {
					var aadharNumberForm = $itemFarmer.find(".aadharNumberForm").val().split("-")[0] + $itemFarmer.find(".aadharNumberForm").val().split("-")[1] + $itemFarmer.find(".aadharNumberForm").val().split("-")[2];
				} else if($itemFarmer.find(".aadharNumberForm").val().length == 16) {
					var aadharNumberForm = $itemFarmer.find(".aadharNumberForm").val().split("-")[0] + $itemFarmer.find(".aadharNumberForm").val().split("-")[1] + $itemFarmer.find(".aadharNumberForm").val().split("-")[2]; 
				}
				farmer["aadharID"] = aadharNumberForm;
				// var farmerOwnerShip = $itemFarmer.find(".farmerOwnerShip :selected").val();
				// farmer["farmerType"]= farmerOwnerShip;
				var farmerMobileNumber = $itemFarmer.find(".farmerMobileNumber").val();
				if(!farmerMobileNumber) {
					$(".errorMobileNo").show();
	     		$(".errorMobileNo").fadeOut(9000);	
	     		flag = 0;
	     		return false;
				}
				farmer["mobile"] = farmerMobileNumber;
				var farmerCaste = $itemFarmer.find(".farmerCaste :selected").text();
				if(farmerCaste == "Select Caste") {
					$(".errorFarmerCaste").show();
	     		$(".errorFarmerCaste").fadeOut(9000);	
	     		flag = 0;
	     		return false;
				}
				farmer["caste"] = farmerCaste;
				farmers.push(farmer);
			}

		})

		var listCrop = [];
		var $cropDetails = $cropList.children(".cropData");
		$cropDetails.each(function (index, item) {
		  var $item = $(item);
		  var villageCrop = $item.find(".villageCrop :selected").val();
		  if(!villageCrop && flag) {
				$(".errorVillageSelection").show();
     		$(".errorVillageSelection").fadeOut(9000);	
     		flag = 0;
     		return false;
		  }
		  var $khataNumber = $item.find(".khataNumber");
		  var khataHissa = $item.find(".khasraHissa").val();
		  var remainingarea = $khataNumber.data('remainingarea');
		  var areaUnit = $khataNumber.data('areaunit');
		  var convertor = $khataNumber.data('convertor');
		  var khataNumber = Number($item.find(".khataNumber").val());
		  if(!khataNumber && flag) {
				$(".errorInvalidKhata").show();
     		$(".errorInvalidKhata").fadeOut(9000);	
     		flag = 0;
     		return false;
		  }
		  var $cropDetails = $item.find(".cropDetails");
		  var $crop = $item.find('div.crop');


		  $crop.each(function (index, item) {
		    var $cropItem = $(item);
		    if ($cropItem.css("display") == "block") {
		      if ($cropItem.find(".hectareText").css("display") == "block") {
		        listCrop.push({
		          area: Number($cropItem.find(".cropArea").val()),
		          CN_ID: $cropItem.find(".cropSelection :selected").val(),
		          areaUnit: areaUnit,
		          khataNumber: khataNumber,
		          villageID: villageCrop,
		          khataHissa: khataHissa
		        });
		      } else {
		      	var biswa = Number($cropItem.find(".cropArea2").val());
		      	if (biswa.toString().length == 1) {
		      		biswa = "0" + biswa;
			      }
		        listCrop.push({
		          CN_ID: $cropItem.find(".cropSelection :selected").val(),
		          areaUnit: areaUnit,
		          khataNumber: khataNumber,
		          area: Number(Number($cropItem.find(".cropArea1").val()) + "." + biswa),
		          villageID: villageCrop,
		          khataHissa: khataHissa
		        });
		      }
		    }
		  })
		 
		})

		fData ={
			cropList: listCrop,
			farmerList: farmers,
			khataDetails: data
		}
    if(flag){
			$('input:enabled').each(function(){
		    $(this).addClass('preview-test');
		    $(this).attr('disabled','disabled')
			})
			$('select:enabled').each(function(){
			    $(this).addClass('preview-test');
			    $(this).attr('disabled','disabled')
			})
			$('textarea:enabled').each(function(){
			    $(this).addClass('preview-test');
			    $(this).attr('disabled','disabled')
			})
			$("a").each(function(idx) {
			  $(this).not('.gov-submit-btn').css('pointer-events','none')
			  $(this).not('.gov-submit-btn').addClass('preview-test')
			  $cropList.find('.cropData').last().find('.remove-khata').css('pointer-events','none')
			  $cropList.find('.cropData').last().find('.remove-khata').addClass('preview-test')
			});
			$finalSubmit.parent().removeClass('hide');
			$finalPreview.parent().addClass('hide');
			$finalDiscard.parent().addClass('hide');
			$finalEdit.parent().removeClass('hide');
			console.log('previewSave1',CF);
    	CF = fData;
    	console.log('previewSave2',CF);
    	$(window).scrollTop('0px')
    }
	})

	$finalEdit.on('click',function (ev) { 
		$('input:disabled').each(function(){
			if($(this).hasClass('preview-test')){
	    	$(this).removeClass('preview-test');
	    	$(this).removeAttr('disabled')
			}
		})
		$('select:disabled').each(function(){
			if($(this).hasClass('preview-test')){
	    	$(this).removeClass('preview-test');
	    	$(this).removeAttr('disabled')
			}
		})
		$('textarea:disabled').each(function(){
			if($(this).hasClass('preview-test')){
	    	$(this).removeClass('preview-test');
	    	$(this).removeAttr('disabled')
			}
		})
		$("a").each(function(idx) {
			if($(this).hasClass('preview-test')){
			  $(this).not('.gov-submit-btn').css('pointer-events','')
			  $(this).not('.gov-submit-btn').removeClass('preview-test')
			  $cropList.find('.cropData').last().find('.remove-khata').css('pointer-events','')
			  $cropList.find('.cropData').last().find('.remove-khata').removeClass('preview-test')
			};
		})
		$finalSubmit.parent().addClass('hide');
		$finalPreview.parent().removeClass('hide');
		$finalDiscard.parent().removeClass('hide');
		$finalEdit.parent().addClass('hide');
	})

	$dicardSave.click(function (ev) {
		ev.preventDefault();
		window.location.href = "/cropInsurance";
	})
}
/**
 * Created by prateek on 24/11/16.
 */
var cropRowTemplate = {};
cropRowTemplate["template_0"] = true;
for (var i = 1; i <= 9; i++) {
  var key = "template_" + i;
  cropRowTemplate[key] = false;

}

var farmerBlockTemplate = {
  "farmerTemplate_0": true
};
for (var i = 1; i<=10; i++) {
  farmerBlockTemplate["farmerTemplate_" + i] = false;
}

app.components.createNonLoaneeFarmer = function ($id) {
  var $addAnotherForm = $id.find(".addAnotherForm");
  var $addFarmer = $id.find("#addAnotherFarmer");
  var $cropList = $id.find("#cropList");
  var $finalSubmit = $id.find("#finalSubmit");
  var $saving = $id.find("#savingAcc");
  var savingError = false;
  var savingFlag = 0;
  var $windowOverlay = $id.find("#pluswrap-overlay-load");
  var $accountNumber = $id.find("accNum");
  //var $farmerType = $id.find("farmerType");
  var $ifscCode = $id.find("#ifsc");
  var $passbook = $id.find("#passbook");
  var $passbookFileName = $id.find("#passbookFileName");
  var $uploadPassbook = $id.find("#uploadPassbook");
  var $bataidaarCertificate = $id.find("#bCertificate");
  var $uploadBCertificate = $id.find("#uploadBCertificate");
  var $bCertificateFileName = $id.find("#certificateFileName");
  var $finalPreview = $id.find("#finalPreview")
  var $passBookUploadTick = $id.find(".passBookUploadTick");
  var $bCertificateUploadTick = $id.find(".bCertificateUploadTick");
  var $ifscCodeTick = $id.find(".ifscCodeTick");
  var $finalDiscard = $id.find("#finalDiscard");
  var $finalEdit = $id.find("#finalEdit")
  var $submitSave = $id.find(".submit-save");
  var $discardSave = $id.find(".discard-save");
  var CF;
  var $farmerOwnerShip = $id.find(".farmerOwnerShip");
  var $khatedarType = $id.find("#khatedarType");
  var $bataidarType = $id.find("#bataidarType");
  var farmerType = null;
  var $passbookDiv = $id.find(".passbookDiv");
  var $bataidarDiv = $id.find(".bataidarDiv");
  var $bCertificateHidden = $id.find("#bCertificateHidden");
  var ifscError = false;
  var userSession = $id.data('usersession')
  //$bataidarDiv.css("display", "none")

  $khatedarType.change(function() {
    $ifscCode.removeAttr("disabled")
    //$ifscCode.focus();
    farmerType = "khatedar";
    $bataidarDiv.attr("disabled", "true")
    $bataidarDiv.css("opacity", "0.4");
    $bCertificateFileName.attr("disabled", true);
    $uploadBCertificate.attr("disabled", true);
    $bataidaarCertificate.css("display","none")
    $bCertificateHidden.css("display","block")
    /*$khatedarType.attr("disabled", true);
    $bataidarType.attr("disabled", true);*/
  })

  $bataidarType.change(function () {
    $ifscCode.removeAttr("disabled")
    //$ifscCode.focus();
    farmerType = "bataidar";
    $bataidarDiv.css("opacity", "1");
    $bataidarDiv.removeAttr("disabled");
    $bCertificateFileName.removeAttr("disabled");
    $uploadBCertificate.removeAttr("disabled");
    $bataidaarCertificate.css("display","block")
    $bCertificateHidden.css("display","none")

    /*$khatedarType.attr("disabled", true);
    $bataidarType.attr("disabled", true);*/
  })

  $( window ).load(function() {
    $windowOverlay.css('display','none');
  });
  $saving.focus();

  $uploadPassbook.click(function (ev) {
    ev.preventDefault();
    console.log("..........", $passbookFileName.val() == "")
    if ($passbookFileName.val() == null || $passbookFileName.val().length == 0 || $passbookFileName.val() == "") {
      $(".errorFileNotSelected").show();
      $(".errorFileNotSelected").fadeOut(9000);
      return false;
    }
    var file = $passbookFileName.prop("files")[0];
    if (file.size > 300000) {
      $(".errorFileSize").show();
      $(".errorFileSize").fadeOut(9000);
      return false;
    }

    if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "application/pdf") {
      $('#pluswrap-overlay').css('display','block');

      var form = new FormData();
      form.append('file', file);
      form.append('docType','PASSBOOK');
      console.log('form',form)
      app.utils.ajax.post("/uploadDocumentFile", {
        data: form,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
      }).then(function (data) {
        data = JSON.parse(data);
        console.log("................image", data);
        if (data.status) {
          $passbook.data("imageID", data.data);
          $passBookUploadTick.css("display", "block");
          //$passBookUploadTick.css("color", "green");
          $('#pluswrap-overlay').css('display','none');
          $passbookFileName.parent().find('span').text('Edit')
        } else {
          $(".errorFileUpload").show();
          $(".errorFileUpload").fadeOut(9000);
          $('#pluswrap-overlay').css('display','none');
          return false;
        }
      })
    }
    else {
      $(".errorFileType").show();
      $(".errorFileType").fadeOut(9000);
      $('#pluswrap-overlay').css('display','none');
      return false;
    }
  });

  $uploadBCertificate.click(function (ev) {
    ev.preventDefault();
    if ($bCertificateFileName.val() == null || $bCertificateFileName.val().length == 0 || $bCertificateFileName.val() == "") {
      $(".errorFileNotSelected").show();
      $(".errorFileNotSelected").fadeOut(9000);
      return false;
    }
    var file = $bCertificateFileName.prop("files")[0];
    if (file.size > 300000) {
      $(".errorFileSize").show();
      $(".errorFileSize").fadeOut(9000);
      return false;
    }
    if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "application/pdf") {
      $('#pluswrap-overlay').css('display','block');
      var form = new FormData();
      form.append('file', file);
      form.append('docType','BATAIDAR');
      app.utils.ajax.post("/uploadDocumentFile", {
        data: form,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
      }).then(function (data) {
        data = JSON.parse(data);
        if (data.status) {
          $bataidaarCertificate.data("imageID", data.data);
          $bCertificateUploadTick.css("display", "block");
          $bCertificateUploadTick.css("color", "green");
          $('#pluswrap-overlay').css('display','none');
          $bCertificateFileName.parent().find('span').text('Edit')
        } else {
          $(".errorFileUpload").show();
          $(".errorFileUpload").fadeOut(9000);
          $('#pluswrap-overlay').css('display','none');
          return false;
        }
      })
    }
    else {
      $(".errorFileType").show();
      $(".errorFileType").fadeOut(9000);
      $('#pluswrap-overlay').css('display','none');
      return false;
    }
  });

  $passbookFileName.change(function (ev) {
    if ($passBookUploadTick.css("display") == "block") {
      $passBookUploadTick.css("display", "none");
      $passbook.data("imageID", null);
      $passbookFileName.parent().find('span').text('Browse')
    }
    $uploadPassbook.trigger('click');
    $passbook.val(app.utils.getFileNameFromPath($passbookFileName.val()));
  });

  $passbookFileName.click(function (ev) {
    if(!ifscError && savingError) {
      $(".errorIFSCCode").show();
      $(".errorIFSCCode").fadeOut(9000);
      ev.preventDefault();
    } else if(!savingError) {
      ev.preventDefault();
    }
  })

  $bCertificateFileName.change(function (ev) {
    if ($bCertificateUploadTick.css("display") == "block") {
      $bCertificateUploadTick.css("display", "none");
      $bataidaarCertificate.data("imageID", null);
      $bCertificateFileName.parent.find('span').text('Browse')
    }
    $uploadBCertificate.trigger('click')
    $bataidaarCertificate.val(app.utils.getFileNameFromPath($bCertificateFileName.val()));
  });

  $saving.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $("#step2 *").attr("disabled", "disabled");
  $("#step3 *").attr("disabled", "disabled");
  $("#step4 *").attr("disabled", "disabled");

  // $khatedarType.blur(function (ev) {
  //   $bataidarType.focus();
  // })

  $saving.blur(function (ev) {
    if(($saving.val().length > 5  && $saving.val().length < 18) && !savingFlag) {
      $saving.attr("disabled", "disabled")
      //$ifscCode.removeAttr("disabled")
      $khatedarType.removeAttr("disabled");
      $bataidarType.removeAttr("disabled");
      $khatedarType.focus();
      savingError = true;
      //$ifscCode.focus();
    } else if(($saving.val().length > 0  && $saving.val().length < 6) && savingFlag) {
      $saving.attr("disabled", "disabled");
      //$ifscCode.removeAttr("disabled")
      $khatedarType.removeAttr("disabled");
      $bataidarType.removeAttr("disabled");
      savingError = true;
      //$ifscCode.focus();

    } else {
      $(".errorSavingSelection").show();
      $(".errorSavingSelection").fadeOut(9000);
      $saving.focus()
      savingError = false;
    }
  });

  /*$saving.blur(function (ev) {
   if ($saving.val().length <= 16) {
   $(".errorSavingSelection").show();
   $(".errorSavingSelection").fadeOut(9000);
   $saving.focus()
   } else {
   app.utils.ajax.get("/getSavingDetails", {
   data: {
   savingAccount: $saving.val()
   }
   }).then(function (data) {
   if (data.status) {
   var $farmerData = $($id.find(".farmerData")[0])
   $farmerData.find(".address").val(data.data.address)
   $farmerData.find(".fathersName").val(data.data.fathersName)
   $farmerData.find(".farmerMobileNumber").val(data.data.mobile)
   $farmerData.find(".farmersFirstName").val(data.data.name)
   var value = data.data.aadhar;
   if (value != null && value.length > 4 && value.substr(4,1) !== '-') {
   value = value.substr(0, 4) + "-" + value.substr(4, value.length)
   }
   if (value != null && value.length > 9 && value.substr(9,1) !== '-') {
   value = value.substr(0, 9) + "-" + value.substr(9, value.length)
   }
   $farmerData.find(".aadharNumberForm").val(value);

   if (data.data.gender == "F") {
   $farmerData.find(".radioGroupGender").find("input")[1].checked = true
   } else if (data.data.gender == "M") {
   $farmerData.find(".radioGroupGender").find("input")[0].checked = true
   }
   $id.find('.customRightSaving').css("display", "block");
   }
   $saving.attr("disabled", "disabled")
   savingFlag = 1;
   $kcc.focus();
   })
   }
   })*/

  $saving.on("change paste keyup", function (ev) {
    if ($(this).val().length > 17 && !savingFlag) {
      $(this).val($(this).val().substr(0, 17))
    } else if($(this).val().length > 5 && savingFlag) {
      $(this).val($(this).val().substr(0, 5))
    }
  })

  $ifscCode.on("change paste keyup", function (ev) {
    if ($(this).val().length > 11) {
      $(this).val($(this).val().substr(0, 11))
    }
  })

  $ifscCode.blur(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    if ($ifscCode.val().length == 11 && regex.test($ifscCode.val())) {
      var data = {};
      data["ifscCode"] =  $ifscCode.val();
      app.utils.ajax.post("/ifscValidate/post", {data: data}).then(function (item) {
        if (item.status == true) {
        $ifscCodeTick.css("display", "block");
        $ifscCode.attr("disabled", "disabled");
        }
        else{
          $(".errorIFSCCode").show();
          $(".errorIFSCCode").fadeOut(9000);
          $ifscCode.focus();
          ifscError = false;
        }
      })
      $("#step2 *").removeAttr("disabled");
      $passbookFileName.removeAttr("disabled");
      ifscError = true;
      if (farmerType == "bataidar") {
        $bCertificateFileName.removeAttr("disabled");
        $uploadBCertificate.removeAttr("disabled");
      }
    }
    else {
      $(".errorIFSCCode").show();
      $(".errorIFSCCode").fadeOut(9000);
      $ifscCode.focus();
      ifscError = false;
    }

  })

  $ifscCode.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  })

  /* $saving.on("change paste keyup", function (ev) {
   if ($(this).val().length > 17) {
   $(this).val($(this).val().substr(0, 17))
   }
   })*/

  $addFarmer.css('display', 'none');

  var $customClose = $id.find(".custom-close");

  $addAnotherForm.click(function (ev) {
    ev.preventDefault();
    var firstCrop = $($cropList.children(".cropData")[0]);
    var villageCrop = firstCrop.find(".districtCrop :selected").val();
    if (villageCrop == undefined || villageCrop == "" || villageCrop == null) {
      $(".errorDistrictNotSelected").show();
      $(".errorDistrictNotSelected").fadeOut(9000);
      return;
    }
    var index = Number($cropList.data("index"))
    app.utils.ajax.get("/getCropTemplateForNonLoaneeSingle", { data: {
      partials: ["crop"],
      index: index + 1
    }
    }).then(function (data) {
      if (data.crop) {
        $cropList.data("index", index + 1)

        var tehsils = firstCrop.data("tehsils");
        $cropList.last(".cropData").append(data.crop)
        $cropList.find(".cropData").find(".districtCrop").val(villageCrop);
        $cropList.find(".cropData").find()
        var $tehsilCrop = $cropList.find(".cropData").find('select.tehsilCrop');
        $tehsilCrop.last().html(firstCrop.find(".tehsilCrop").html());

        $cropList.find(".cropData").find(".districtCrop").attr("disabled", "true");
        $cropList.find('.cropData').last().find('.remove-khata').css('display','block')
        $cropList.find('.cropData').find(".jamabandiSpan").removeAttr("disabled");
        $cropList.find('.cropData').find(".jamabandiFileName").removeAttr("disabled");
        $cropList.find('.cropData').find(".girdawariSpan").removeAttr("disabled");
        $cropList.find('.cropData').find(".girdawariFileName").removeAttr("disabled");
        $cropList.find('.cropData').find(".uploadJamabandi").removeAttr("disabled");
        $cropList.find('.cropData').find(".uploadGCertificate").removeAttr("disabled");
        $cropList.find('.cropData').last().find('.remove-khata').on("click", function(){
          $cropList.data("index", Number($cropList.data("index")) - 1);
          if ($(this).closest('.cropData').find(".khataNumber").data("areaunit") == "Hectare") {
            $(this).closest('.cropData').find(".cropArea").each(function (index, item) {
              if ($(item).css("display") == "block") {
                $("#dh_R").data("totalarea", Math.round(Number(($("#dh_R").data("totalarea")) + Number($(item).closest(".cropDataArea").data("subarea"))) * 10000)/10000)
                $("#premiumTable").find("."+$(item).attr("id")).remove()
                if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+ $(item).attr("id")).length > 0) {
                  $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
                }
              }
            })
          } else {
            $(this).closest('.cropData').find(".cropArea1").each(function (index, item) {
              if ($(item).css("display") == "block") {
                $("#dh_R").data("totalarea", Math.round(Number(($("#dh_R").data("totalarea")) + Number($(item).closest(".cropDataArea").data("subarea"))) * 10000)/10000)
                $("#premiumTable").find("."+$(item).attr("id")).remove()
                if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+ $(item).attr("id")).length > 0) {
                  $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
                }
              }
            })
          }
          $(this).closest('.cropData').remove();
        });

      } else {
        $(".errorAddFormSelection").show();
        $(".errorAddFormSelection").fadeOut(9000);
      }
    })
  })

  $customClose.click(function(){
    $(".modal").hide();
  });

  $addFarmer.click(function (ev) {
    ev.preventDefault();
    console.log("ading farmer")
    var farmerCount = $(this).data("farmer");
    var openTemplateCount = 0;
    var latestClosedTemplate = null;

    for (var template in farmerBlockTemplate) {
      if (latestClosedTemplate == null && farmerBlockTemplate[template] == false) {
        latestClosedTemplate = template;
      }
      if (farmerBlockTemplate[template] == true) {
        openTemplateCount++;
      }
    }

    if (openTemplateCount < Number($holder.val())) {
      $id.find("." + latestClosedTemplate).css("display", "block").addClass("farmerList")
      farmerBlockTemplate[latestClosedTemplate] = true;
      /*farmerCount++;
       var count = farmerCount;
       for (index = 1; index <= 10; index++) {
       if (index < count) {
       $id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
       } else {
       $id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
       }
       }*/
      $(this).data("farmer",farmerCount)
    } else {
      $(".errorFarmerNumber").show();
      $(".errorFarmerNumber").fadeOut(9000);
    }
  })

  $finalPreview.click(function (ev) {
    ev.preventDefault();
    var flag = true;
    var data = {};
    var accType = 0;
    if (farmerType == null) {
      $(".errorFarmerTypeNotSelected").show();
      $(".errorFarmerTypeNotSelected").fadeOut(9000);
      flag = false;
      return false;
    }
    if ($passbook.data("imageID") == "" || typeof $passbook.data("imageID") == "undefined" || $passbook.data("imageID") == null) {
      $(".errorPassbookMissing").show();
      $(".errorPassbookMissing").fadeOut(9000);
      flag = false;
      return false;
    }

    if (farmerType == "bataidar" && ($bataidaarCertificate.data("imageID") == "" || typeof $bataidaarCertificate.data("imageID") == "undefined" || $bataidaarCertificate.data("imageID") == null)) {
      $(".errorbataidarMissing").show();
      $(".errorbataidarMissing").fadeOut(9000);
      flag = false;
      return false;
    }
    //data["passbookID"] = $passbook.data("imageID");
    data["passbookID"] = $passbook.data("imageID");
    if (farmerType == "bataidar") {
      data["farmerOwnershipImageID"] = $bataidaarCertificate.data("imageID");
    }
    /*if (farmerType == "khatedar") {
      data["passbookID"] = $passbook.data("imageID");
      data["farmerOwnershipImageID"] = $passbook.data("imageID");
    }*/
    data["accountType"] = accType;
    data["ifscCode"] = $ifscCode.val();
    data["savingAccount"] = $saving.val();
    data["farmerAccountType"] = 0;
    data["farmerOwnership"] = $(".farmerOwnerShip input:checked").val();

    var farmers = [];
    var $farmerData = $id.find(".farmerList");

    $farmerData.each(function (index, itemFarmer) {
      var $itemFarmer = $(itemFarmer);
      if ($itemFarmer.css("display") == "block") {
        var farmer = {};
        var indexFarmer = $itemFarmer.find(".indexFarmer").html();
        //farmer["bataidaarID"] = $bataidaarCertificate.data("imageID")
        if ($itemFarmer.find(".bhamashahID").val() == null || $itemFarmer.find(".bhamashahID").val() == "") {
          $(".errorBhamashahMissing").show();
          $(".errorBhamashahMissing").fadeOut(9000);
          flag = false;
          return;
        }
        farmer["bhamashahID"] = $itemFarmer.find(".bhamashahID").val();
        farmer["firstName"] = $itemFarmer.find(".farmersFirstName").val();
        farmer["lastName"] = $itemFarmer.find(".farmersLastName").val();
        farmer["fatherName"] = $itemFarmer.find(".fathersName").val();
        farmer["gender"] = $itemFarmer.find(".radioGroupGender input:checked").val();
        farmer["address"] = $itemFarmer.find(".address").val();

        var aadharNumberForm = null;
        if($itemFarmer.find(".aadharNumberForm").val().length == 14) {
          aadharNumberForm = $itemFarmer.find(".aadharNumberForm").val().split("-")[0] + $itemFarmer.find(".aadharNumberForm").val().split("-")[1] + $itemFarmer.find(".aadharNumberForm").val().split("-")[2];
        } else if($itemFarmer.find(".aadharNumberForm").val().length == 31) {
          aadharNumberForm = $itemFarmer.find(".aadharNumberForm").val().split("-")[0] + $itemFarmer.find(".aadharNumberForm").val().split("-")[1] + $itemFarmer.find(".aadharNumberForm").val().split("-")[2] + $itemFarmer.find(".aadharNumberForm").val().split("-")[3]
        }

        farmer["aadharID"] = aadharNumberForm;
        // var farmerOwnerShip = $itemFarmer.find(".farmerOwnerShip :selected").val();
        // farmer["farmerType"]= farmerOwnerShip;
        farmer["mobile"] = $itemFarmer.find(".farmerMobileNumber").val();
        farmer["caste"] = $itemFarmer.find(".farmerCaste :selected").text();
        farmers.push(farmer);
      }

    });
    if (flag == false) {
      return false;
    }
    var listCrop = [];
    var $cropDetails = $cropList.children(".cropData");
    console.log("")
    $cropDetails.each(function (index, item) {
      var $item = $(item);
      var villageCrop = $item.find(".villageCrop :selected").val();
      var $khataNumber = $item.find(".khataNumber");
      var khataHissa = $item.find(".khasraHissa").val();
      var remainingarea = $khataNumber.data('remainingarea');
      var areaUnit = $khataNumber.data('areaunit');
      var convertor = $khataNumber.data('convertor');
      var khataNumber = $item.find(".khataNumber").val();
      var girdawariID = $item.find(".gCertificate").val();
      var jamabandiID = $item.find(".jamabandi").val();
      var $cropDetails = $item.find(".cropDetails");
      var $crop = $item.find('div.crop');

      if ($item.find(".gCertificate").data("imageID") == "" || typeof $item.find(".gCertificate").data("imageID") == "undefined" || $item.find(".gCertificate").data("imageID") == null) {
        $(".errorGirdawariMissing").show();
        $(".errorGirdawariMissing").fadeOut(9000);
        flag = false;
        return false;
      }

      if ($item.find(".jamabandi").data("imageID") == "" || typeof $item.find(".jamabandi").data("imageID") == "undefined" || $item.find(".jamabandi").data("imageID") == null) {
        $(".errorJamabandiMissing").show();
        $(".errorJamabandiMissing").fadeOut(9000);
        flag = false;
        return false;
      }
      console.log("image id g", $item.find(".gCertificate").data("imageID"));
      console.log("image id j", $item.find(".jamabandi").data("imageID"))
      $crop.each(function (index, item) {
        var $cropItem = $(item);
        if ($cropItem.css("display") == "block") {
          if ($cropItem.find(".hectareText").css("display") == "block") {
            listCrop.push({
              area: Number($cropItem.find(".cropArea").val()),
              CN_ID: $cropItem.find(".cropSelection :selected").val(),
              areaUnit: areaUnit,
              khataNumber: khataNumber,
              villageID: villageCrop,
              khataHissa: khataHissa,
             // girdawariID: girdawariID,
              girdawariImageID: $item.find(".gCertificate").data("imageID"),
              jamabandiImageID: $item.find(".jamabandi").data("imageID"),
              //jamabandiID: jamabandiID
            });
          } else {
            var biswa = Number($cropItem.find(".cropArea2").val());
            if (biswa.toString().length == 1) {
              biswa = "0" + biswa;
            }
            listCrop.push({
              CN_ID: $cropItem.find(".cropSelection :selected").val(),
              areaUnit: areaUnit,
              khataNumber: khataNumber,
              area: Number(Number($cropItem.find(".cropArea1").val()) + "." + biswa),
              villageID: villageCrop,
              khataHissa: khataHissa,
              girdawariImageID: $item.find(".gCertificate").data("imageID"),
              jamabandiImageID: $item.find(".jamabandi").data("imageID")
              //girdawariID: girdawariID,
              //jamabandiID: jamabandiID
            });
          }
        }
      })

    })
    fData ={
      cropList: listCrop,
      farmerList: farmers,
      khataDetails: data
    }
    if(flag){
      $(".fileUploadDisabled").each(function () {
        $(this).addClass('preview-test');
        $(this).attr('disabled','disabled');
      })
      $('input:enabled').each(function(){
        $(this).addClass('preview-test');
        $(this).attr('disabled','disabled')
      })
      $('select:enabled').each(function(){
        $(this).addClass('preview-test');
        $(this).attr('disabled','disabled')
      })
      $('textarea:enabled').each(function(){
        $(this).addClass('preview-test');
        $(this).attr('disabled','disabled')
      })
      $("a").each(function(idx) {
        $(this).not('.gov-submit-btn').css('pointer-events','none')
        $(this).not('.gov-submit-btn').addClass('preview-test')
        $cropList.find('.cropData').last().find('.remove-khata').css('pointer-events','none')
        $cropList.find('.cropData').last().find('.remove-khata').addClass('preview-test')
      });
      $finalSubmit.parent().removeClass('hide');
      $finalPreview.parent().addClass('hide');
      $finalDiscard.parent().addClass('hide');
      $finalEdit.parent().removeClass('hide');
      CF = fData;
      console.log('previewSave2',CF);
      $('#pluswrap-overlay').css('display','none');
      $(window).scrollTop('0px')
    }
    $('#pluswrap-overlay').css('display','none');

  })

  $finalEdit.on('click',function (ev) {
    $('.fileUploadDisabled').each(function () {
      if($(this).hasClass('preview-test')){
        $(this).removeClass('preview-test');
        $(this).removeAttr('disabled')
      }
    })
    $('input:disabled').each(function(){
      if($(this).hasClass('preview-test')){
        $(this).removeClass('preview-test');
        $(this).removeAttr('disabled')
      }
    })
    $('select:disabled').each(function(){
      if($(this).hasClass('preview-test')){
        $(this).removeClass('preview-test');
        $(this).removeAttr('disabled')
      }
    })
    $('textarea:disabled').each(function(){
      if($(this).hasClass('preview-test')){
        $(this).removeClass('preview-test');
        $(this).removeAttr('disabled')
      }
    })
    $("a").each(function(idx) {
      if($(this).hasClass('preview-test')){
        $(this).not('.gov-submit-btn').css('pointer-events','')
        $(this).not('.gov-submit-btn').removeClass('preview-test')
        $cropList.find('.cropData').last().find('.remove-khata').css('pointer-events','')
        $cropList.find('.cropData').last().find('.remove-khata').removeClass('preview-test')
      }
    });
    $finalSubmit.parent().addClass('hide');
    $finalPreview.parent().removeClass('hide');
    $finalDiscard.parent().removeClass('hide');
    $finalEdit.parent().addClass('hide');
  })


  $finalSubmit.click(function (ev) {
    $('#modalSubmit').modal('show');
  })

  $finalDiscard.click(function (ev) {
    $('#modalDiscard').modal('show');
  })


  $submitSave.click(function(){
    $('#modalSubmit').modal('hide');
    $('#pluswrap-overlay').css('display','block');
    //console.log('submitSave......................',JSON.stringify(CF));
    app.utils.ajax.post("/nonLoaneePolicy", {data: CF }).then(function (data) {
      CF ="";
      console.log("data in non loanee............", data);
      var tempPolicy = ""
      var shortId = "";
      if (data.data != "undefined" && data.data.length > 0) {
        shortId = data.data[0].short_id;
        tempPolicy = data.data[0].tempPolicy;
      }
      $finalEdit.trigger('click');
      $('#pluswrap-overlay').css('display','none');
      if (data.status) {
        if (typeof data.data.farmers !== "undefined") {
          data.data.farmers.forEach(function (item) {
            if (!item.status) {
              $(".errorFarmerDetails").show();
              $(".errorFarmerDetails").fadeOut(9000);
            }
          })
        } else if (typeof data.data.farmerFinance !== "undefined") {
          if (!data.data.farmerFinance.status) {
            $(".errorBankDetails").show();
            $(".errorBankDetails").fadeOut(9000);
          }
        } else {
          console.log("redirecting",userSession);
          var transactionData = {
            "REQUESTID": shortId,
            "CONSUMERKEY": shortId,
            "CONSUMERNAME": shortId,
          }
          app.utils.ajax.post("/emitraTransaction/post", {data: transactionData}).then(function (response) {
            if (response.status) {
              app.utils.redirectNewTab('/premiumDetail?tep='+tempPolicy+'&emitra='+1+'&responseData='+JSON.stringify(response.data))
              alert("policy Submitted Successfully");
              window.location.href = userSession.userData.RETURNURL;
            } else {
              alert('Your policy has been Rejected, Because emitra server failed to respond.');
              app.utils.ajax.post("/logout").then(function (response){
                if(response){
                  console.log("%%%%%%%%", JSON.stringify(userSession.userData));
                 window.location.href = userSession.userData.RETURNURL;
               };
              });
            }
          },function(err) {
            $(".errorPolicyDetailsEmitra").show();
            $(".errorPolicyDetailsEmitra").fadeOut(9000);
            app.utils.ajax.post("/logout").then(function (response){
              if(response){
               window.location.href = userSession.userData.RETURNURL;
             };
            });
          });
          //
        }
      } else {
        if(data.error) {
          $(".errorPolicyDetailsBackend").children().children().eq(1).text(data.error)
          $(".errorPolicyDetailsBackend").show();
          $(".errorPolicyDetailsBackend").fadeOut(9000);
        } else if(data.body && data.body.error) {
          $(".errorPolicyDetailsBackend").children().children().eq(1).text(data.body.error)
          $(".errorPolicyDetailsBackend").show();
          $(".errorPolicyDetailsBackend").fadeOut(9000);
        } else {
          $(".errorBackendError").show();
          $(".errorBackendError").fadeOut(9000);
        }
      }
    },function(err){
      if(err.status == 401) {
        //window.location.href = userSession.userData.RETURNURL;
      }
    })

  })

  $discardSave.click(function (ev) {
    ev.preventDefault();
    window.location.href = "/nonLoanee"
  })

}


app.components.createPolicy = function ($id) {
	var $tabMain = $id.find(".tab-main");
	var $farmerType1 = $id.find("#farmerTypeRadio1");
	var $farmerType2 = $id.find("#farmerTypeRadio2");
	var $farmerDetails = $id.find('.farmerDetails');
	var $kccBankDetails = $id.find(".kccBankDetails");
	var $savingsBankDetails = $id.find(".savingsBankDetails");
	var $BankDetailsUploadPanal = $id.find(".BankDetailsUploadPanal");

	$farmerType1.change(function () {
		$savingsBankDetails.css("display", "none");
		$kccBankDetails.css("display", "block");
		$BankDetailsUploadPanal.css("display", "none");
		$farmerDetails.css("display","none");
	});

	$farmerType2.change(function () {
		$kccBankDetails.css("display", "none");
		$savingsBankDetails.css("display", "block");
		$BankDetailsUploadPanal.css("display", "block");
		$farmerDetails.css("display","block");
	});
}


app.components.createUser = function ($id) {
	var user = $id.data("user");
	var $ifscCode = $id.find("#ifscCode");
	var $branchCode = $id.find("#branchCode");
	var $bankDistrict = $id.find("#bankDistrict");
	var $bankBranch = $id.find("#bankBranch");
	var $nameField = $id.find("#nameField");
	var $aadharId = $id.find("#aadharId");
	var $mobile = $id.find("#mobile");
	var $email = $id.find("#emailField");
	var $addUser = $id.find("#addUser");
	var $cancelUser = $id.find("#cancelUser");
	var $pacsNameAdmin = $id.find("#pacsNameAdmin");
	var ifcsError = false;
	var branchError = false;
	var adhaarError = false;
	var nameError = false;
	var mobileError = false;
	var emailError = true;
	var $branchType = $id.find("#branchType");
	var $pacsName = $id.find("#pacsName");
	var userCheck = $branchType.data('usercheck');
	var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailValue;
	var ifscCheck = $ifscCode.data('ifsccheck');
	console.log('ifscCheck',ifscCheck);

	if(ifscCheck) {
		$ifscCode.attr('disabled','true')
	}

	$mobile.keypress(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$cancelUser.on('click',function(){
		app.utils.redirectTo('/createUser');
	});

	$aadharId.keypress(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$aadharId.keyup(function (ev) {
		var value = $(this).val();
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (value.length > 4 && value.substr(4,1) !== '-') {
			value = value.substr(0, 4) + "-" + value.substr(4, value.length)
		}
		if (value.length > 9 && value.substr(9,1) !== '-') {
			value = value.substr(0, 9) + "-" + value.substr(9, value.length)
		}
		$(this).val(value);
	})

	$nameField.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z ]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});
	$aadharId.on("change paste keyup", function (ev) {
		if ($(this).val().length > 14) {
			$(this).val($(this).val().substr(0, 14))
		}
	})

	$ifscCode.on("change paste keyup", function (ev) {
		if ($(this).val().length > 11) {
			$(this).val($(this).val().substr(0, 11))
		}
	})
	$branchCode.on("change paste keyup", function (ev) {
		if ($(this).val().length > 5) {
			$(this).val($(this).val().substr(0, 5))
		}
	})

	$mobile.on("change paste keyup", function (ev) {
		if ($(this).val().length > 10) {
			$(this).val($(this).val().substr(0, 10))
		}
	})

	$ifscCode.on('focus',function() {
		$bankDistrict.val('');
		$bankBranch.val('');
		$ifscCode.next().find(".validated").addClass("hide");
	})

	$email.blur(function(){
		emailValue = $email.val();
		console.log('emailvalue',emailValue,emailRegex.test(emailValue));
		if(emailRegex.test(emailValue.toLowerCase()) || emailValue == '') {
			console.log('shi hai')
			emailError = true;
			$(this).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(this).css("border-bottom", "1px solid #4CAF50");
		} else {
			Materialize.toast('Email is invalid', 5000, "rounded");
			$email.focus();
			emailError = false;
			$(this).css("box-shadow", "0 1px 0 0 red");
			$(this).css("border-bottom", "1px solid red");
		}
	})

	$addUser.click(function (ev) {
		if ((ifcsError || branchError || ifscCheck) && adhaarError && nameError && mobileError && emailError) {
			var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
			var data = {
				aadharID: aadhar,
				mobile: $mobile.val(),
				branchCode: $branchCode.val(),
				bankBranch: $bankBranch.val(),
				bankDistrict: $bankDistrict.val(),
				branchCode: $branchCode.val(),
				name: $nameField.val()
			}
			console.log('emailValue',emailValue);
			if(emailValue != ""){
				data['email'] = emailValue
			}
			if ($id.data("user") == "COMMERCIAL") {
				data["ifscCode"] = $ifscCode.val()
				data["branchCode"] = ""
				data["PACS"] = []
			}
			if ($id.data("user") == "COOPERATIVE") {	
				data["ifscCode"] = $ifscCode.val()
				data["branchCode"] = ""
				if ($("#branchType").find(":selected").val() == "PACS" && userCheck == 'branch') {
					data['PACS'] = [];
					$('#pacsName >option:selected').each(function () {
    					console.log($(this).val())
						data['PACS'].push({'id':$(this).val()})
					});
				} else if($("#branchType").find(":selected").val() == "PACS" && userCheck == 'superAdmin') {
					data['PACS'] = [];
					$('#pacsNameAdmin >option:selected').each(function () {
    					console.log($(this).val())
						data['PACS'].push({'id':$(this).val()})
					});
					if(data["PACS"].length == 0) {
						Materialize.toast('Please Select Pacs', 5000, "rounded");
						return false;
					}
				} else if(!$branchType.val()) {
					Materialize.toast('Please Select Branch Type', 5000, "rounded");
					return false;
				} else {
					data["PACS"] = []
				}
			}
			if ($id.data("user") == "RURAL") {
				data["ifscCode"] = ""
				data["branchCode"] = $branchCode.val()
				data["PACS"] = []
			}
			$('#pluswrap-overlay').css('display','block');
			app.utils.ajax.post("/add/user", {data: data}).then(function (data) {
				$('#pluswrap-overlay').css('display','none');
				console.log(data,"*******************************");
				if (data.status) {
					alert("user submitted successfully, details about login has been sent to user's registered mobile number");
					app.utils.redirectTo("/createUser")
				} else {
					Materialize.toast(data.error, 5000, "rounded")
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					window.location.href = "/adminLogin";
				}
			})
		} else {
			Materialize.toast('Invalid form', 5000, "rounded")
			
		}
	})

	$ifscCode.on('paste', function (ev) {
		ev.preventDefault()
		return false;
	})
	$aadharId.on('paste', function (ev) {
		ev.preventDefault()
		return false;
	})
	$branchCode.on('paste', function (ev) {
		ev.preventDefault()
		return false;
	})

	$ifscCode.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$branchCode.keypress(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	if ($ifscCode.is('[readonly]')) {
		$ifscCode.focus();
	}

	$ifscCode.blur(function (ev) {
		var that = this;
		if ($(this).val().length == 11) {
			ifcsError = true;
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			var data = {
				ifscCode: $ifscCode.val()
			}
			app.utils.ajax.get("/validateC", {data: data}).then(function (result) {
				if (result.status) {
					ifcsError = true;
					$ifscCode.next().find(".validated").removeClass("hide");
					$bankDistrict.val(result.data.districtName);
					$bankDistrict.siblings("label").addClass("label-up")
					$bankBranch.val(result.data.branchName);
					$bankBranch.siblings("label").addClass("label-up")
					$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
					$(that).css("border-bottom", "1px solid #4CAF50");
				} else {
					ifcsError = false;
					Materialize.toast("IFSC code is incorrect", 5000, "rounded")
					$ifscCode.next().find(".validated").addClass("hide");
					$id.data("error", "Please enter a valid ifsc ID")
					$ifscCode.next().find(".errRequired").removeClass("hide");
					$(that).css("box-shadow", "0 1px 0 0 red");
					$(that).css("border-bottom", "1px solid red");
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					window.location.href = "/adminLogin";
				}
			})
		} else {
			ifcsError = false;
			Materialize.toast("Please enter a valid IFSC code of 11 digits", 5000, "rounded");
			$id.data("error", "Please enter a valid ifsc ID of 11 digits")
			$(this).css("box-shadow", "0 1px 0 0 red");
			$(this).css("border-bottom", "1px solid red");
			$(this).next().find(".errRequired").removeClass("hide");
			$ifscCode.next().find(".validated").addClass("hide");
		}
	})

	$branchCode.blur(function (ev) {
		var that = this;
		if ($(this).val().length >= 1) {
			branchError = true;
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			var data = {
				branchCode: $branchCode.val()
			}
			app.utils.ajax.get("/validateC", {data: data}).then(function (result) {
				console.log(result)
				if (result.status) {
					branchError = true;
					$branchCode.next().find(".validated").removeClass("hide");
					$bankDistrict.val(result.data.districtName);
					$bankDistrict.siblings("label").addClass("label-up")
					$bankBranch.val(result.data.branchName);
					$bankBranch.siblings("label").addClass("label-up")
					$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
					$(that).css("border-bottom", "1px solid #4CAF50");
				} else {
					branchError = false;
					Materialize.toast("Branch code is incorrect", 5000, "rounded")
					$branchCode.next().find(".validated").addClass("hide");
					$id.data("error", "Please enter a valid branchCode")
					$branchCode.next().find(".errRequired").removeClass("hide");
					$(that).css("box-shadow", "0 1px 0 0 red");
					$(that).css("border-bottom", "1px solid red");
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					window.location.href = "/adminLogin";
				}
			})
		} else {
			branchError = false;
			Materialize.toast("Please enter a valid branch code", 5000, "rounded")
			$id.data("error", "Please enter a valid branch code")
			$(this).css("box-shadow", "0 1px 0 0 red");
			$(this).css("border-bottom", "1px solid red");
			$(this).next().find(".errRequired").removeClass("hide");
			$branchCode.next().find(".validated").addClass("hide");
		}
	})

	$bankDistrict.blur(function (ev) {
		if ($(this).val().length > 0) {
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")

		} else {
			Materialize.toast("Please enter bank District", 5000, "rounded")
			$id.data("error", "Please enter bank District")
			$(this).next().find(".errRequired").removeClass("hide");
		}
	})

	$bankBranch.blur(function (ev) {
		if ($(this).val().length > 0) {
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")

		} else {
			Materialize.toast("Please enter bank Branch", 5000, "rounded")
			$id.data("error", "Please enter bank Branch")
			$(this).next().find(".errRequired").removeClass("hide");
		}
	})

	$aadharId.blur(function (ev) {
		var that = this;
		if ($(this).val().length == 14) {
			adhaarError = true;
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			if ($nameField.val() == "") {
				Materialize.toast("Please enter name", 5000, "rounded");
				$id.data("error", "Please write name")
				$nameField.next().find(".errRequired").removeClass("hide");
				$nameField.css("box-shadow", "0 1px 0 0 red");
				$nameField.css("border-bottom", "1px solid red");
			}
			var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
			var data = {
				aadhar: aadhar,
				name: $nameField.val()
			}
			app.utils.ajax.post("/validateA", {data: data}).then(function (result) {
				if (result.status) {
					if (result.data && result.data.aadharAuth) {
						adhaarError = true
						$aadharId.next().find(".validated").removeClass("hide");
						$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
						$(that).css("border-bottom", "1px solid #4CAF50");
					} else {
						adhaarError = false;
						Materialize.toast("Aadhar validation failed. Please check exact Name and Aadhar ID", 5000, "rounded")
						$aadharId.next().find(".validated").addClass("hide");
						$id.data("error", "Please enter a valid aadhar ID")
						$aadharId.next().find(".errRequired").removeClass("hide");
						$(that).css("box-shadow", "0 1px 0 0 red");
						$(that).css("border-bottom", "1px solid red");
					}
				} else {
					adhaarError = false;
					Materialize.toast("Aadhar validation failed. Please check exact Name and Aadhar ID", 5000, "rounded")
					$aadharId.next().find(".validated").addClass("hide");
					$id.data("error", "Please enter a valid aadhar ID")
					$aadharId.next().find(".errRequired").removeClass("hide");
					$(that).css("box-shadow", "0 1px 0 0 red");
					$(that).css("border-bottom", "1px solid red");
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					window.location.href = "/adminLogin";
				}
			})
		} else {
			adhaarError = true;
			Materialize.toast("Please enter a valid Aadhar ID", 5000, "rounded");
			$id.data("error", "Please enter a valid aadhar ID")
			$(this).next().find(".errRequired").removeClass("hide");
			$aadharId.next().find(".validated").addClass("hide");
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
		}
	})

	$nameField.blur(function (ev) {
		var that = this;
		if ($(this).val().length >= 3) {
			nameError = true;
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(that).css("border-bottom", "1px solid #4CAF50");
			$aadharId.focus()
		} else {
			nameError = false;
			Materialize.toast("Please write your complete name", 5000, "rounded")
			$id.data("error", "Please write your complete name")
			$(this).next().find(".errRequired").removeClass("hide");
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
			$nameField.focus()
		}
	})

	$mobile.blur(function (ev) {
		var regex = /^[7-9]+[0-9]{1,9}$/i;
		if (regex.test($(this).val()) && $(this).val().length == 10) {
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			mobileError = true;
			$(this).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(this).css("border-bottom", "1px solid #4CAF50");
		} else {
			mobileError = false;
			Materialize.toast("Please enter valid mobile number", 5000, "rounded")
			$id.data("error", "Please enter valid mobile number")
			$(this).next().find(".errRequired").removeClass("hide");
			$(this).css("box-shadow", "0 1px 0 0 red");
			$(this).css("border-bottom", "1px solid red");
		}
	})

	if (user == "COOPERATIVE" && userCheck == 'branch') {
		$branchType.change(function (ev) {
			if ( $(this).find(":selected").val() == "PACS") {
				$pacsName.removeAttr("disabled")
				$pacsName.material_select()
			} else {
				$pacsName.attr("disabled", "true")
				$pacsName.material_select()
			}
		})
	} else {
		$branchType.change(function (ev) { 
			ev.preventDefault();
			if ( $(this).find(":selected").val() == "PACS") {
				var data = {
					ifscCode: $ifscCode.val()
				}
				app.utils.ajax.get("/getPacs", {data: data}).then(function (result) {
					if (result.status) {
						var $adminPacs = $id.find('#pacsNameAdmin');
						$adminPacs.attr('disabled',false);
						var listOptions ="<option value='' disabled>SELECT PACS</option>";
						result.data.forEach(function(obj){
							listOptions += "<option value="+ obj.packID +">" + obj.packs + "</option>";
						})
						$adminPacs.material_select('destroy');
						$adminPacs.html(listOptions)
						$adminPacs.material_select();
					}else{
						Materialize.toast('Pacs not found', 5000, 'rounded');
					}

				},function(err){
					if(err.status == 401){
						Materialize.toast('Your session has expired. Please log in again', 5000, "rounded");
						window.location.href = "/adminLogin";
					}
				})

			} else {
				$pacsNameAdmin.attr("disabled", "true")
				$pacsNameAdmin.val('')
				$pacsNameAdmin.material_select()
			}
		})
	}
}
app.components.createUserBySuperUser = function ($id) { 
	console.log($id,'createUserBySuperUser');
	var $bankName = $id.find('#bankName');
	var $aadharId = $id.find('#aadharId');
	var $nameField = $id.find('#nameField');
	var $mobile = $id.find('#mobile');
	var $emailField = $id.find('#emailField');
	var $designationField = $id.find('#designationField');
	var $cancelUser = $id.find('#cancelUser');
	var $createUser = $id.find('#createUser');
	var branchError = false;
	var adhaarError = false;
	var nameError = false;
	var mobileError = false;
	var emailError = false;
	var designationError = true;
	var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailValue;

	$aadharId.keypress(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$aadharId.keyup(function (ev) {
		var value = $(this).val();
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (value.length > 4 && value.substr(4,1) !== '-') {
			value = value.substr(0, 4) + "-" + value.substr(4, value.length)
		}
		if (value.length > 9 && value.substr(9,1) !== '-') {
			value = value.substr(0, 9) + "-" + value.substr(9, value.length)
		}
		$(this).val(value);
	})

	$aadharId.on("change paste keyup", function (ev) {
		if ($(this).val().length > 14) {
			$(this).val($(this).val().substr(0, 14))
		}
	})

	$aadharId.on('paste', function (ev) {
		ev.preventDefault()
		return false;
	})

	$aadharId.blur(function (ev) {
		var that = this;
		if ($(this).val().length == 14) {
			adhaarError = true;
			$(this).next().find(".errRequired").addClass("hide");
			if ($nameField.val() == "") {
				Materialize.toast("Please enter name", 5000, "rounded");
				$nameField.next().find(".errRequired").removeClass("hide");
				$nameField.css("box-shadow", "0 1px 0 0 red");
				$nameField.css("border-bottom", "1px solid red");
			}

			var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
			var data = {
				aadhar: aadhar,
				name: $nameField.val()
			}
			app.utils.ajax.post("/validateA", {data: data}).then(function (result) {
				if (result.status) {
					if (result.data && result.data.aadharAuth) {
						adhaarError = true
						$aadharId.next().find(".validated").removeClass("hide");
						$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
						$(that).css("border-bottom", "1px solid #4CAF50");
					} else {
						adhaarError = false;
						Materialize.toast("Aadhar validation failed. Please check exact Name and Aadhar ID", 5000, "rounded")
						$aadharId.next().find(".validated").addClass("hide");
						$aadharId.next().find(".errRequired").removeClass("hide");
						$(that).css("box-shadow", "0 1px 0 0 red");
						$(that).css("border-bottom", "1px solid red");
					}
				} else {
					adhaarError = false;
					Materialize.toast("Aadhar validation failed. Please check exact Name and Aadhar ID", 5000, "rounded")
					$aadharId.next().find(".validated").addClass("hide");
					$aadharId.next().find(".errRequired").removeClass("hide");
					$(that).css("box-shadow", "0 1px 0 0 red");
					$(that).css("border-bottom", "1px solid red");
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					//window.location.href = "/adminLogin";
				}
			})
		} else {
			adhaarError = false;
			Materialize.toast("Please enter a valid Aadhar ID", 5000, "rounded");
			$id.data("error", "Please enter a valid aadhar ID")
			$(this).next().find(".errRequired").removeClass("hide");
			$aadharId.next().find(".validated").addClass("hide");
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
		}

	})

	$nameField.blur(function (ev) {
		var that = this;
		if ($(this).val().length >= 3) {
			nameError = true;
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(that).css("border-bottom", "1px solid #4CAF50");
			$aadharId.focus()
		} else {
			nameError = false;
			Materialize.toast("Please write your complete name", 5000, "rounded")
			$id.data("error", "Please write your complete name")
			$(this).next().find(".errRequired").removeClass("hide");
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
			$nameField.focus()
		}
	})

	$nameField.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z ]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$mobile.blur(function (ev) {
		var regex = /^[7-9]+[0-9]{1,9}$/i;
		if (regex.test($(this).val()) && $(this).val().length == 10) {
			$(this).next().find(".errRequired").addClass("hide");
			$id.data("error", "")
			mobileError = true;
			$(this).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(this).css("border-bottom", "1px solid #4CAF50");
		} else {
			mobileError = false;
			Materialize.toast("Please enter valid mobile number", 5000, "rounded")
			$id.data("error", "Please enter valid mobile number")
			$(this).next().find(".errRequired").removeClass("hide");
			$(this).css("box-shadow", "0 1px 0 0 red");
			$(this).css("border-bottom", "1px solid red");
		}
	})

	$mobile.keypress(function (ev) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$mobile.on("change paste keyup", function (ev) {
		if ($(this).val().length > 10) {
			$(this).val($(this).val().substr(0, 10))
		}
	})

	$emailField.blur(function(){
		emailValue = $emailField.val();
		console.log('emailvalue',emailValue,emailRegex.test(emailValue));
		if(emailRegex.test(emailValue.toLowerCase()) || emailValue == '') {
			console.log('shi hai')
			emailError = true;
		} else {
			Materialize.toast('Email is invalid', 5000, "rounded");
			$emailField.focus();
			emailError = false;
		}
	})

	$createUser.on('click', function(){
		if (branchError && (adhaarError || true) && nameError && mobileError && emailError) { 
			var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
			var data = {
				aadharID: aadhar,
				mobile: $mobile.val(),
				bankId: $bankName.val(),
				name: $nameField.val(),
				email: $emailField.val(),
				designation: $designationField.val()
			}
			console.log(data,'dadadadda');
			$('#pluswrap-overlay').css('display','block');
			app.utils.ajax.post("/add/superUser", {data: data}).then(function (data) {
				$('#pluswrap-overlay').css('display','none');
				console.log(data,"*******************************");
				if (data.status) {
					alert("user submitted successfully");
					app.utils.redirectTo("/createbysuperuser")
				} else {
					Materialize.toast(data.error, 5000, "rounded")
				}
			},function(err){
				if(err.status == 401){
					Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
					window.location.href = "/adminLogin";
				}
			})
		} else {
			Materialize.toast('Please fill required field', 5000, "rounded")
		}
	})

	$bankName.on('change', function(){
		if($bankName.val() != "CHOOSE BANK") {
			branchError = true;
		} else {
			branchError = false;
		}
	})

}

app.components.Crop = function ($id) {
	var $cropNameCard = $id.find('.cropNameCard');
	var $khataAreaWithUnit = $id.find('.khataAreaWithUnit');
	var $districtCrop = $id.find('.districtCrop');
	var $tehsilCrop = $id.find('.tehsilCrop');
	var $ILRCrop = $id.find('.ILRCrop');
	var $patwarCrop = $id.find('.patwarCrop');
	var $villageCrop = $id.find('.villageCrop');
	var $removeThis = $id.find('.removeThis');
	var $khasraHissa = $id.find('.khasraHissa');
	var $khataNumber = $id.find('.khataNumber');
	var $villageNameAuto = $id.find(".villageNameAuto");
	var $addAnotherCrop = $id.find(".addAnotherCrop");
	var $crop = $id.find(".crop");
	var $cropDetails = $id.find('.cropDetails');
	var $checkKhataNumber = $id.find('.checkKhataNumber');
	var maxcrop = (typeof $addAnotherCrop.data("maxcrop") == "undefined") ? 0 : $(this).data("maxcrop"); 


	$cropDetails.find(".closeCropArea").css("display", "none")

	if (maxcrop == 0) {
		$cropDetails.css("display", "none");
	}

	$khasraHissa.focus(function (ev) {
		var focus = Number($id.data("focus"))
		if (!focus && ($(this).val() != "" && (!isNaN(Number($(this).val().split("/")[0])) && !isNaN(Number($(this).val().split("/")[1]))) )) {
			var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])
			var area = Number($id.data("remainingarea"))
			if ($khataNumber.data("areaunit") == "Hectare") {
				area = area / hissa
			}
			if ($khataNumber.data("areaunit") == "Bigha-Biswa") {
				areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
				areaBiswa = Math.floor((areaBiswa / hissa) * 10)/10
				area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
			}
			$id.data("area", area);
		}
	})


	$khasraHissa.blur(function (ev) {
		if ($(this).val() !== "" && ($(this).val().indexOf("/") <= 0 || (Number($(this).val().split("/")[0]) >= Number($(this).val().split("/")[1]) || ((isNaN(Number($(this).val().split("/")[0])) && isNaN(Number($(this).val().split("/")[1]))) || Number($(this).val().split("/")[1]) == 0)))) {
			$(this).focus();
			Materialize.toast("Please enter a valid hissa as per format", 5000, "rounded")
		} else {
			var area = Number($id.data("remainingarea"))
			if($(this).val() != "") {
				var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])

				if ($khataNumber.data("areaunit") == "Hectare") {
					area = area / hissa
				}
				if ($khataNumber.data("areaunit") == "Bigha-Biswa") {
					areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
					areaBiswa = Math.floor((areaBiswa * hissa) * 10)/10
					area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
				}
				
			}
			$crop.find(".cropArea").val("")
			$crop.find(".cropArea1").val("")
			$crop.find(".cropArea2").val("")
			$id.data("area", area)
		}
		$(this).siblings("label").addClass("label-up")
	})

	$removeThis.click(function (ev) {
		ev.preventDefault();
		if ($id.attr("id").indexOf("Template") > -1) {
			$id.css("display", "block")
		} else {
			Materialize.toast("Entered Khata can't be deleted, if required re-generate policy.", 3000, "rounded");
		}
	})

	$districtCrop.change(function () {
		var $tehsilCrop = $id.find('select.tehsilCrop');
		var tehsils = $(this).find(":selected").data("tehsil");
		if (tehsils.length > 0) {
			var listOptions =	"<option value='' selected=true>SELECT TEHSIL</option>";
			tehsils.forEach(function (item) {
				listOptions += "<option value="+ item.tehsil_id +">" + item.tehsil_name + "</option>";
			});
			$tehsilCrop.material_select('destroy');
			$tehsilCrop.html(listOptions)
			$tehsilCrop.material_select();
		}
	})

	$tehsilCrop.change(function () {
		var $ILRCrop = $id.find('select.ILRCrop');
		var tehsilID = $(this).find(":selected").val();
		if (tehsilID !== "") {
			app.utils.ajax.get('/tehsilData?tehsilID=' + tehsilID).then(function (result) {
				if (result.status) {
					var ILRCrop = "<option value='' selected=true>SELECT ILR</option>";
					result.data.forEach(function(tehsil) {
						tehsil.GirdawariKanoongo.forEach(function (item) {
							ILRCrop += "<option value="+ item.kanoongo_id +" data-kaanoongo='"+ JSON.stringify(item.GirdawariPatwar) + "'>" + item.kanoongo_name_hindi + "</option>";
						})
					})
					$ILRCrop.material_select('destroy');
					$ILRCrop.html(ILRCrop)
					$ILRCrop.material_select();
				}
			})
		}
	})

	$ILRCrop.change(function () {
		var $patwarCrop = $id.find('select.patwarCrop');
		var ILRCrop = $(this).find(":selected").data("kaanoongo");
		if (ILRCrop.length > 0) {

			var listOptions =	"<option value='' selected=true>SELECT PATWAR</option>";
			ILRCrop.forEach(function (item) {
				listOptions += "<option value="+ item.patwar_id +" data-patwar='"+ JSON.stringify(item.GirdawariVillages) +"'>" + item.patwar_area_hindi + "</option>";
			});
			$patwarCrop.material_select('destroy');
			$patwarCrop.html(listOptions)
			$patwarCrop.material_select();
		}

	})

	$patwarCrop.change(function () {
		var $villageCrop = $id.find('select.villageCrop');
		var patwar = $(this).find(":selected").data("patwar");
		if (patwar.length > 0) {
			var listOptions =	"<option value='' selected=true>SELECT VILLAGE</option>";
			patwar.forEach(function (item) {
				listOptions += "<option value="+ item.village_id +">" + item.village_name + "</option>";
			});
			$villageCrop.material_select('destroy');
			$villageCrop.html(listOptions)
			$villageCrop.material_select();
		}
	})

	$villageCrop.change(function () {
		var village = $(this).find(":selected").val();
		if (village === "") {
			$khataNumber.attr("disabled", true)
		} else {
			$khataNumber.removeAttr("disabled")
		}
	})

	// $khataNumber.blur(function () {
	// 	if ($(this).val() !== "") {
	// 		if ($tehsilCrop.find(":selected").val() === "") {
	// 			Materialize.toast("Please select a tehsil first", 5000, "rounded")
	// 			$tehsilCrop.trigger( "change" );
	// 			return false;
	// 		}
	// 		if ($villageCrop.find(":selected").val() === "") {
	// 			Materialize.toast("Please select a village first", 5000, "rounded")
	// 			$villageCrop.trigger( "change" );
	// 			return false;
	// 		}
	// 		// this will be shifted to button click
	// 		app.utils.ajax.get("/khataNotifDetails?villageID=" + $villageCrop.find(":selected").val() + "&khataNumber=" + $(this).val()).then(function (result) {
	// 			if (result.status) {
	// 				console.log(result.data);
	// 				var $cropSelection = $id.find("select.cropSelection");
	// 				if (result.data.cropNotification.length > 0) {
	// 					var listOptions =	"<option value='' selected=true>CHOOSE YOUR OPTION</option>";
	// 					$khataNumber.attr("data-remainingArea", result.data.remainingArea)
	// 					$khataNumber.attr("data-convertor", result.data.convertor)
	// 					var listOptions =	"<option value='' selected=true>CHOOSE YOUR OPTION</option>";
	// 					result.data.cropNotification.forEach(function (item) {
	// 						listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
	// 					});
	// 					$cropSelection.material_select('destroy');
	// 					$cropSelection.html(listOptions)
	// 					$cropSelection.material_select();
	// 				}	
	// 			}
	// 		})
	// 	}
	// })

	// $villageNameAuto.on('input', function () {
	// 	console.log($(this).val().length);
	// 	if ($(this).val().length > 3 && $(this).val().length % 2 === 0) {
	// 		app.utils.ajax.get("/getVillageDetails?villageName=" + $(this).val()).then(function (result) {
	// 			if (result.status) {
	// 				console.log(result.data)
	// 			}	else {
	// 				console.log(result)
	// 			}			
	// 		})
	// 	}
	// })

	$addAnotherCrop.click(function (ev) {
		ev.preventDefault()
		var bool = true;
		var countopen = (typeof $(this).data("countopen") == "undefined") ? 0 : $(this).data("countopen"); 
		var maxcrop = (typeof $(this).data("maxcrop") == "undefined") ? 0 : $(this).data("maxcrop"); 
		var $item = $id.find(".template_"+countopen)
		if (maxcrop > countopen && maxcrop != 0) {
			if (countopen >= 2) {
				var $prevItem = $id.find(".template_"+(countopen - 1))
				$prevItem.find(".closeCropArea").css("display", "none")
			}
			$item.css("display", "block");
			$(this).data("countopen", countopen + 1)
		} else {
			Materialize.toast("More than notified crops cannot be added", 5000)

		}
	})
	$checkKhataNumber.click(function (ev) {
		ev.preventDefault();
		if ($khataNumber.val() !== "") {
			if ($tehsilCrop.find(":selected").val() === "") {
				Materialize.toast("Please select a tehsil first", 5000, "rounded")
				$tehsilCrop.trigger( "change" );
				return false;
			}
			if ($villageCrop.find(":selected").val() === "") {
				Materialize.toast("Please select a village first", 5000, "rounded")
				$villageCrop.trigger( "change" );
				return false;
			}
			// this will be shifted to button click
			app.utils.ajax.get("/khataNotifDetails?villageID=" + $villageCrop.find(":selected").val() + "&khataNumber=" + $khataNumber.val()).then(function (result) {
				if (result.status) {
					$cropNameCard.css("display", "block");

					if (result.data.areaUnit == "Bigha-Biswa") {
						$id.data("remainingarea", result.data.remainingArea)
						$id.data("area", result.data.remainingArea)
						$id.data("areaConvertor", result.data.convertor)
						$crop.find(".hectareText").css("display", "none")
						$crop.find(".bighaText").css("display", "block")
						$crop.find(".biswaText").css("display", "block")
					}

					if (result.data.areaUnit == "Hectare") {
						$id.data("remainingarea", result.data.remainingArea)
						$id.data("area", result.data.remainingArea)
						$id.data("areaConvertor", result.data.convertor)
						$crop.find(".hectareText").css("display", "block")
						$crop.find(".bighaText").css("display", "none")
						$crop.find(".biswaText").css("display", "none")
					}

					var $cropSelection = $id.find("select.cropSelection");
					$khataAreaWithUnit.text(result.data.area + " " + result.data.areaUnit)
					$khataAreaWithUnit.css("display", "block");
					if (result.data.cropNotification.length > 0) {
						$cropDetails.find(".closeCropArea").css("display", "none")

						$addAnotherCrop.data("maxcrop", result.data.cropNotification.length)
						$khataNumber.attr("data-remainingarea", result.data.remainingArea)
						$khataNumber.attr("data-areaunit", result.data.areaUnit)
						$khataNumber.attr("data-convertor", result.data.convertor)
						var listOptions =	"<option value='' selected=true disabled>CHOOSE CROP</option>";
						result.data.cropNotification.forEach(function (item) {
							listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
						});
						$cropSelection.material_select('destroy');
						$cropSelection.html(listOptions)
						$cropSelection.material_select();

					}	
				} else {
					Materialize.toast("Khata entered doesn't exist. Re-enter", 5000, "rounded")
				}
			})
		}
	})
}
app.components.CropAdd = function ($id) {
  var $closeCropArea = $id.find('.closeCropArea');
  var $hectareText = $id.find(".hectareText");
  var $bighaTextbox = $id.find(".bighaTextbox");
  var $biswaTextbox = $id.find(".biswaTextbox");
  var $cropArea = $id.find(".cropArea");
  var $cropArea1 = $id.find(".cropArea1");
  var $cropArea2 = $id.find(".cropArea2");
  var $totalPremium = $id.find(".totalPremium");
  var $farmerPremium = $id.find(".farmerPremium");
  var $premiumPerHectare = $id.find(".premiumPerHectare");
  var $cropSelection = $id.find(".cropSelection");
  var $cropRemove = $id.find(".removeCrop");
  var $dh_R = $("#dh_R");
  var $firstSerialNumber = $id.find('.serialNum').text();
  var $removeBtn = $id.find('.removeBtn');

  $cropArea.keypress(function (ev) {
    var regex = new RegExp("^[0-9.]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $cropArea1.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $cropArea2.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  var SubArea = function() {
    var subarea = 0
    var nonsubarea = 0
    var totalPremium = 0
    $("#premiumTable").find("tbody tr").each(function (index, item) {
      var $item = $(item);
      subarea += Number($item.find(".subArea").text())
      nonsubarea += Number($item.find(".nonSubArea").text())
      totalPremium += Number($item.find(".farmerPremium").text())
    })
    $("#premiumTableDiv").find(".totalSubArea").html("<strong>Total Area : "+ Math.round(Number(subarea + nonsubarea)*10000)/10000 +" Hect.</strong>")
    $("#premiumTableDiv").find(".totalNonSubArea").html("<strong>Total Farmer Share : "+ Math.round(totalPremium * 100)/100 +" Rupees.</strong>")
  }
  
  var cropAreaFocusFunction = function($that ,flag){
    
    var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$that.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = Number($that.val());
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $totalPremium.val("");
      $farmerPremium.val("");
      $id.data("subarea", "")
      if(flag){
        $that.closest(".cropData").data("focus", true)
      }
      var area = Number($that.closest(".cropData").data("area"))
      $that.closest(".cropData").data("area", area + Number($that.val()));
    }
  }
  $cropArea.focus(function (ev) {
    var $that = $(this)
    cropAreaFocusFunction($that,1);
  })


  $cropArea.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    if (!isNaN(Number($(this).val()))) {
      $(this).val(Math.round(Number($(this).val()) * 10000)/10000)
      if (Math.round(Number(area) * 10000)/10000 >= Math.round(Number($(this).val()) * 10000)/ 10000) {
        var cropArea = Number($(this).val());

        if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
          var totalPremium = 0;
          if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
            totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
            $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
          }
          totalPremium += Number($premiumPerHectare.val()) * (Math.round(cropArea * 10000)/10000 - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
          $totalPremium.val(Math.round((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val()))* 100)/100)
          $farmerPremium.val(Math.round(totalPremium * 100)/100);
          $dh_R.data("totalarea", 0)
        } else {
          $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
          $id.data("subarea", Number(cropArea) )
          $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
          var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * Math.round(cropArea * 10000)/10000
          $totalPremium.val(Math.round((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val())) * 100)/100)
          $farmerPremium.val(Math.round(totalPremium * 100)/100);
        }
        var nonSubArea = cropArea - Number($id.data("subarea"));
        var list = "<tr class="+ $(this).attr("id") +">";
        // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
        list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
        list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
        list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
        list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
        list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
        list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
        list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
        list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
        list += "</tr>";
        $("#premiumTable").append(list)
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

        SubArea();
        $(this).closest(".cropData").data("area", area - Number($(this).val()));
        $(this).closest(".cropData").data("focus", false);
      } else {
        $(this).focus()
        $(".errorCropArea").show();
        $(".errorCropArea").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropAreaelse").show();
      $(".errorCropAreaelse").fadeOut(9000);
    }
  })

   var cropAreaFocusFunction1 = function($that ,flag){
    var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = (Number($that.val()) * $that.closest(".cropData").data("convertor"))/10000;
      cropArea += (Number($cropArea2.val()) * 5)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $id.data("subarea", "")
      if(flag){
        $that.closest(".cropData").data("focus", true)  
      }
      var area = Number($that.closest(".cropData").data("area"))
      $that.closest(".cropData").data("area", area + Number($that.val()));
    }

   }

  $cropArea1.focus(function (ev) {
     var $that = $(this)
    cropAreaFocusFunction1($that,1);
  })


  $cropArea1.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    console.log(area);
    if (!isNaN(Number($(this).val()))) {
      if ($(this).val().indexOf(".") <= 0) {
        if (Math.floor(Number(area)) >= Math.round(Number($(this).val()))) {

          var cropArea = (Number($(this).val()) * $(this).closest(".cropData").data("convertor"))/10000;
          cropArea += (Number($cropArea2.val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
          console.log(cropArea, "-------------------")

          if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
            var totalPremium = 0;
            if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
              totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
              $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            }
            totalPremium += Number($premiumPerHectare.val()) * (Math.round(cropArea * 10000)/10000 - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
            $totalPremium.val(Math.round(((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val())))* 100)/100)
            $farmerPremium.val(Math.round(totalPremium * 100)/100);
            $dh_R.data("totalarea", 0)
          } else {
            $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
            $id.data("subarea", cropArea)
            $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
            var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * Math.round(cropArea * 10000)/10000
            $totalPremium.val(Math.round(((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val()))) * 100)/100)
            $farmerPremium.val(Math.round(totalPremium * 100)/100);
          }


          var nonSubArea = cropArea - Number($id.data("subarea"));
          console.log(nonSubArea, $id.data("subarea"))

          var list = "<tr class="+ $cropArea1.attr("id") +">";
          // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
          list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
          list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
          list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
          list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
          list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
          list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
          list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
          list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
          list += "</tr>";
          $("#premiumTable").append(list)
          $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

          SubArea();

          $(this).closest(".cropData").data("area", Math.round((Number(area) - Number($(this).val())) * 1000 ) / 1000);
          $(this).closest(".cropData").data("focus", false);
          area = Number($(this).closest(".cropData").data("area"))
        } else {
          $(this).focus()
          $(".errorCropArea1").show();
          $(".errorCropArea1").fadeOut(9000);
        }
      } else {
        $(this).focus()
        $(".errorCropArea1else").show();
        $(".errorCropArea1else").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropArea1else1").show();
      $(".errorCropArea1else1").fadeOut(9000);
    }
  })


var cropAreaFocusFunction2 = function($that ,flag){

  var focus = Number($that.closest(".cropData").data("focus"))
    if (!focus) {
      SubArea();
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
      if (Number($("#premiumTable").data("index")) >= 2) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      var cropArea = (Number($that.val()) * 5)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      cropArea += (Number($cropArea1.val()) * 100)/100 * Number($that.closest(".cropData").data("convertor"))/10000;
      $that.closest(".cropData").data("subarea", Number($that.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
      $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
      $id.data("subarea", "")
       if(flag){
        $that.closest(".cropData").data("focus", true)
       }
      var area = Number($that.closest(".cropData").data("area"))
      var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
      areaBiswa = areaBiswa + Math.round(Number($that.val()))
      area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
      $that.closest(".cropData").data("area", area);
    }

}

  $cropArea2.focus(function (ev) {
    var $that = $(this)
    cropAreaFocusFunction2($that,1);
  })

  $cropArea2.blur(function (ev) {
    var area = Number($(this).closest(".cropData").data("area"))
    var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
    if (!isNaN(Number($(this).val()))) {
      if ($(this).val().indexOf(".") <= 0) {
        if(Number($(this).val()) < 20) {
          if (Math.floor(Number(areaBiswa)) >= Math.round(Number($(this).val()))) {
            var cropArea = (Number($(this).val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
            cropArea += (Number($cropArea1.val()) * 100)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
            console.log(cropArea, "+++++++++++++++++++", $dh_R.data("totalarea"))
            if (Math.round(Number(cropArea) * 10000)/10000 >= Math.round(Number($dh_R.data("totalarea")) * 10000)/10000) {
              var totalPremium = 0;
              if (Math.round(Number($dh_R.data("totalarea")) * 10000)/10000 != 0) {
                totalPremium += Number($cropSelection.find("option:selected").data("fp")) * Math.round(Number($dh_R.data("totalarea")) * 10000)/10000
                $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
                $id.data("subarea", Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              }
              totalPremium += Number($premiumPerHectare.val()) * (Math.round(cropArea * 10000)/10000 - Math.round(Number($dh_R.data("totalarea")) * 10000)/10000)
              $totalPremium.val(Math.round(((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val())))* 100)/100)
              $farmerPremium.val(Math.round(totalPremium * 100)/100);
              console.log(cropArea, "+++++++++++++++++++", $dh_R.data("totalarea"))
              $dh_R.data("totalarea", 0)
            } else {
              $(this).closest(".cropData").data("subarea", Number($(this).closest(".cropData").data("subarea")) + cropArea)
              $id.data("subarea", cropArea)
              $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) - cropArea) * 10000)/10000)
              var totalPremium = Number($cropSelection.find("option:selected").data("fp")) * Math.round(cropArea * 10000)/10000 
              $totalPremium.val(Math.round(((Math.round(cropArea * 10000)/10000 * Number($premiumPerHectare.val()))) * 100)/100)
              $farmerPremium.val(Math.round(totalPremium * 100)/100);
            }


            var nonSubArea = cropArea - Number($id.data("subarea"));
            console.log(nonSubArea, $id.data("subarea"))
            var list = "<tr class="+ $cropArea1.attr("id") +">";
            // list += "<td class='index'>"+ Number($("#premiumTable").data("index")) +"</td>"
            list += "<td class='villageCrop' data-village="+ $(this).closest(".cropData").find(".villageCrop :selected").text() +">"+ $(this).closest(".cropData").find(".villageCrop :selected").text() +"</td>"
            list += "<td class='khataNumber' >"+ $(this).closest(".cropData").find(".khataNumber").val() +"</td>"
            list += "<td class='cropName' data-crop="+ $cropSelection.find("option:selected").val() +" >"+ $cropSelection.find("option:selected").text() +"</td>"
            list += "<td class='subArea'>"+ Math.round(Number($id.data("subarea")) * 10000)/10000 +"</td>"
            list += "<td class='nonSubArea'>"+ Math.round(nonSubArea * 10000)/10000 +"</td>"
            list += "<td class='premiumPerHectare'>"+ $premiumPerHectare.val() +"</td>"
            list += "<td class='totalPremium'>"+ $totalPremium.val() +"</td>"
            list += "<td class='farmerPremium'>"+ $farmerPremium.val() +"</td>"
            list += "</tr>";
            $("#premiumTable").append(list)
            $("#premiumTable").data("index", Number($("#premiumTable").data("index")) + 1)

            SubArea();
            areaBiswa = areaBiswa - Math.floor(Number($(this).val()))
            area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
            $(this).closest(".cropData").data("area", area);
            $(this).closest(".cropData").data("focus", false);
            area = Number($(this).closest(".cropData").data("area"))
          } else {
            $(this).focus()
            $(".errorCropArea2").show();
            $(".errorCropArea2").fadeOut(9000);
          }
        } else {
          $(this).focus()
          $(".errorCropArea2biswa").show();
          $(".errorCropArea2biswa").fadeOut(9000);
        }
      } else {
        $(this).focus()
        $(".errorCropArea2biswaelse").show();
        $(".errorCropArea2biswaelse").fadeOut(9000);
      }
    } else {
      $(this).focus()
      $(".errorCropArea2else").show();
      $(".errorCropArea2else").fadeOut(9000);
    }
  })


  $cropSelection.change(function (ev) {
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {

      var $item = $(this).find("option:selected")
      $premiumPerHectare.val($item.data("pph"))
      var cropArea = Number($cropArea.val());
      $farmerPremium.val("");
      if ($hectareText.css("display") == "block") {
        $cropArea.closest(".cropData").data("subarea", Number($cropArea.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
        $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number($id.data("subarea"))) * 10000)/10000)
        $cropArea.closest(".cropData").data("focus", true)
        var area = Number($cropArea.closest(".cropData").data("area"))
        $cropArea.closest(".cropData").data("area", area + Number(cropArea));
        $cropArea.removeAttr("disabled")
      }

      if ($bighaTextbox.css("display") == "block") {
        var cropArea = (Number($cropArea2.val()) * 5)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
        cropArea += (Number($cropArea1.val()) * 100)/100 * Number($(this).closest(".cropData").data("convertor"))/10000;
        $cropArea1.closest(".cropData").data("subarea", Number($cropArea1.closest(".cropData").data("subarea")) - Number($id.data("subarea")))
        $dh_R.data("totalarea", Math.round(Number(($dh_R.data("totalarea")) + Number(cropArea)) * 10000)/10000)
        $cropArea1.closest(".cropData").data("focus", true)

        var area = Number($cropArea1.closest(".cropData").data("area"))
        var areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
        areaBiswa = areaBiswa + Math.round(Number($cropArea2.val()))
        area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
        area = area + Number($cropArea1.val());
        $cropArea1.closest(".cropData").data("area", area);
        console.log($cropArea.closest(".cropData").data("area"), cropArea)

        $cropArea1.removeAttr("disabled")
        $cropArea2.removeAttr("disabled")
      }
    }

    if ($biswaTextbox.css("display") == "block") {
      $cropArea1.focus()
      if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+$cropArea1.attr("id")).length > 0) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      $("#premiumTable").find("."+$cropArea1.attr("id")).remove()
    }

    if ($hectareText.css("display") == "block") {
      $cropArea.focus();
      if (Number($("#premiumTable").data("index")) >= 2 && $("#premiumTable").find("."+$cropArea.attr("id")).length > 0) {
        $("#premiumTable").data("index", Number($("#premiumTable").data("index")) - 1)
      }
      $("#premiumTable").find("."+$cropArea.attr("id")).remove()
    }

    $cropArea.val("")
    $cropArea1.val("")
    $cropArea2.val("")
    $totalPremium.val("")
  })

  var $addAnotherCrop = $id.parent('div.crop').siblings(".addAnotherCrop");

  $closeCropArea.click(function () {
    var countopen = (typeof $addAnotherCrop.data("countopen") == "undefined") ? 0 : $addAnotherCrop.data("countopen"); 
    var index = countopen - 2;
  
    if (index > 0) {
      $id.parent('div.crop').siblings(".template_"+index).find(".closeCropArea").css("display", "block");
    }
    $addAnotherCrop.data("countopen", index);
    $id.parent('div.crop').css("display", "none");
  })

  if($firstSerialNumber == 1) {
    $removeBtn.find('a').css('visibility','hidden');
  }

  $cropRemove.click(function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {
      var countopen = $id.find(".serialNum").text();
      countopen--;
      var $cop = $id.parent().find('.cropSelection');
      $cop.html('');
      var templateId = ".template_"+countopen;
      var templateIdNew = ".template_"+countopen;
      var $itemToClose = $id.parent().find(templateId);
      var $that = $id.parent().find('.cropArea');
      var $cropData = $that.closest(".cropData");
      var areaUnit = $cropData.find(".khataNumber").data("areaunit");
      $that.closest(".cropData").data("focus", false);
      var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
      if(countopen > 1) {
        $id.closest(".cropData").find(templateIdNew).prev().find('.removeBtn').find('a').css('visibility','visible')
      }
      $id.parent().prev().find('.cropSelection').removeAttr('disabled','false');
      $id.closest(".cropData").find(".template_0"+' '+".cropSelection option").each(function() {
        if($(this).val() != '') {
          listOptions += "<option value="+ $(this).val() +" data-pph="+ $(this).data('pph') +" data-fp="+ $(this).data('fp') +">" + $(this).text() + "</option>";
        }
      });
      $cop.html(listOptions);
      $itemToClose.prevObject.css("display", "none");
      var key = "template_" + countopen;
      cropRowTemplate[key] = false;
      if (areaUnit == 'Hectare') {
        $id.parent().prev().find('.cropArea').removeAttr('disabled','false');
        $that = $id.parent().find('.cropArea');
        cropAreaFocusFunction($that, 0);
      } else {
        $id.parent().prev().find('.cropArea1').removeAttr('disabled','false');
        $id.parent().prev().find('.cropArea2').removeAttr('disabled','false');
        $that = $id.parent().find('.cropArea1');
        cropAreaFocusFunction1($that, 0);
        $that = $id.parent().find('.cropArea2');
        cropAreaFocusFunction2($that, 0);
      }
      SubArea();
      $cropArea.val("")
      $cropArea1.val("")
      $cropArea2.val("")
      $totalPremium.val("")
      $farmerPremium.val("")
    } else {
      $(".errorCropArea1").show();
      $(".errorCropArea1").fadeOut(9000);
    }
  })
}
app.components.CropArea = function ($id) {
	var $closeCropArea = $id.find('.closeCropArea');
	var $cropArea = $id.find(".cropArea");
	var $cropArea1 = $id.find(".cropArea1");
	var $cropArea2 = $id.find(".cropArea2");


	$cropArea.focus(function (ev) {
		var focus = Number($(this).closest(".cropData").data("focus"))
		if (!focus) {
			Number($(this).closest(".cropData").data("focus", true))
			var area = Number($(this).closest(".cropData").data("area"))
			$(this).closest(".cropData").data("area", area + Number($(this).val()));
		}
	})


	$cropArea.blur(function (ev) {
		var area = Number($(this).closest(".cropData").data("area"))
		if (!isNaN(Number($(this).val()))) {
			if (Math.round(Number(area) * 10000)/10000 >= Math.round(Number($(this).val()) * 10000)/ 10000) {
				$(this).closest(".cropData").data("area", area - Number($(this).val()));
				$(this).closest(".cropData").data("focus", false);
			} else {
				$(this).focus()
				$(".errorCropArea").show();
       	$(".errorCropArea").fadeOut(5000);
			}
		} else {
			$(this).focus()
			$(".errorCropAreaelse").show();
     	$(".errorCropAreaelse").fadeOut(5000);
		}
	})

	$cropArea1.focus(function (ev) {
		var focus = Number($(this).closest(".cropData").data("focus"))
		if (!focus) {
			Number($(this).closest(".cropData").data("focus", true))
			var area = Number($(this).closest(".cropData").data("area"))
			$(this).closest(".cropData").data("area", area + Number($(this).val()));
		}
	})


	$cropArea1.blur(function (ev) {
		var area = Number($(this).closest(".cropData").data("area"))
		console.log(area, "-------------------");
		if (!isNaN(Number($(this).val()))) {
			if ($(this).val().indexOf(".") <= 0) {
				if (Math.round(Number(area)) >= Math.round(Number($(this).val()))) {
					$(this).closest(".cropData").data("area", Number(area) - Number($(this).val()));
					$(this).closest(".cropData").data("focus", false);
					area = Number($(this).closest(".cropData").data("area"))
					console.log(area, "++++++++++++++++++");
				} else {
					$(this).focus()
					$(".errorCropArea1").show();
		     	$(".errorCropArea1").fadeOut(5000);
				}
			} else {
				$(this).focus()
				$(".errorCropArea1else").show();
		    $(".errorCropArea1else").fadeOut(5000);
			}
		} else {
			$(this).focus()
			$(".errorCropArea1else1").show();
		  $(".errorCropArea1else1").fadeOut(5000);
		}
	})

	$cropArea2.focus(function (ev) {
		var focus = Number($(this).closest(".cropData").data("focus"))
		if (!focus) {
			Number($(this).closest(".cropData").data("focus", true))
			var area = Number($(this).closest(".cropData").data("area"))
			areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 100)
			areaBiswa = areaBiswa + Math.round(Number($(this).val()))
			area = Math.floor(areaBiswa/20) + Math.round(areaBiswa%20)/100
			$(this).closest(".cropData").data("area", area);
		}
	})

	$cropArea2.blur(function (ev) {
		console.log($(this).closest(".cropData").data("area"), "-------------------");
		var area = Number($(this).closest(".cropData").data("area"))
		console.log(area, "-------------------");
		areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 100)
		if (!isNaN(Number($(this).val()))) {
			if ($(this).val().indexOf(".") <= 0) {
				if(Number($(this).val()) < 20) {
					if (Math.round(Number(areaBiswa)) >= Math.round(Number($(this).val()))) {
						areaBiswa = areaBiswa - Math.round(Number($(this).val()))
						area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20))/100
						console.log(area, "++++++++++++++++++");
						$(this).closest(".cropData").data("area", area);
						$(this).closest(".cropData").data("focus", false);
						area = Number($(this).closest(".cropData").data("area"))
					} else {
						$(this).focus()
							$(".errorCropArea2").show();
						  $(".errorCropArea2").fadeOut(5000);
					}
				} else {
					$(this).focus()
					$(".errorCropArea2biswa").show();
					$(".errorCropArea2biswa").fadeOut(5000);
				}
			} else {
				$(this).focus()
				$(".errorCropArea2biswaelse").show();
				$(".errorCropArea2biswaelse").fadeOut(5000);
			}
		} else {
			$(this).focus()
				$(".errorCropArea2else").show();
			  $(".errorCropArea2else").fadeOut(5000);
		}
	})

	var $addAnotherCrop = $id.parent('div.crop').siblings(".addAnotherCrop");

	$closeCropArea.click(function () {
		var countopen = (typeof $addAnotherCrop.data("countopen") == "undefined") ? 0 : $addAnotherCrop.data("countopen"); 
		var index = countopen - 2;
	
		if (index > 0) {
			$id.parent('div.crop').siblings(".template_"+index).find(".closeCropArea").css("display", "block");
		}
		$addAnotherCrop.data("countopen", index);
		$id.parent('div.crop').css("display", "none")
	})
}

app.components.crop = function ($id) {
  var count;
  var reg = /^[789]\d{9}$/;
  var bankRegex =  /^[a-zA-Z0-9.\-_@]{3,10}$/;
  var $firstName = $id.find('#firstname');
  var $aadharId = $id.find('#aadharId');
  var $mobileno = $id.find('#mobile');
  var $userId = $id.find('#userId');
  var $password = $id.find('#password');
  var $confirmPassword = $id.find('#confirmPass');
  $id.find('#addUser').on('click',function(){
    count = 0;
    var firstnameValue = $firstName.val().trim();
    var aadharIdValue = $aadharId.val();
    var mobileValue = $mobileno.val();
    var bankValue = $userId.val();
    var passwordValue = $password.val();
    var confirmPasswordValue = $confirmPassword.val();
    
    if(firstnameValue == '') {
      $firstName.next().find(".errRequired").removeClass("hide");
      $firstName.addClass('invalid');
    } else {
      count++;
      $firstName.next().find(".errRequired").addClass("hide");
    }
    if(aadharIdValue.length != 12) {
      $aadharId.next().find(".errRequired").removeClass("hide");
      $aadharId.addClass('invalid');
    } else {
      count++;
      $aadharId.next().find(".errRequired").addClass("hide");
    }
    if(!reg.test(mobileValue)) {
      $mobileno.addClass('invalid');
      $mobileno.next().find(".errRequired").removeClass("hide");
    } else {
      count++;
      $mobileno.next().find(".errRequired").addClass("hide");
    }
    if(!bankRegex.test(bankValue)) {
      $userId.addClass('invalid');
      $userId.next().find(".errRequired").removeClass("hide");
    } else {
      count++;
      $userId.next().find(".errRequired").addClass("hide");
    }
    if((passwordValue.length >= 5) && (passwordValue.length <= 16)) {
      $password.addClass('invalid');
      $password.next().find(".errRequired").removeClass("hide");
      count++;
    } else {
      $password.next().find(".errRequired").addClass("hide");
    }
    if(passwordValue != confirmPasswordValue) {
      $confirmPassword.addClass('invalid');
      $confirmPassword.next().find(".errRequired").removeClass("hide");
    } else {
      count++;
      $confirmPassword.next().find(".errRequired").addClass("hide");
    }
    if(count != 6) {
      console.log('test',count)
      return false;
    }
    var data = {};
    var $inputs = $('#userform :input');
    var userType = $('#user_type').val();
     data["userType"]=userType;
    $inputs.each(function() {
      if(this.name) {
        data[this.name] = $(this).val();
      }
    });
    console.log(data,'data',count);

    app.utils.ajax.post("/user/post", {data: data}).then(function (item) {
      if (item.status == true) {
        app.utils.redirectTo('/listUsers');
      }
    },function (res) {
      console.log("response error");
      Materialize.toast("Incorrect information entered, please validate", 6000, "rounded");
    })
  });

  $("#search").on("keyup", function() {
    var value = $(this).val();

    $("table tr").each(function(index) {
        if (index != 0) {

            $row = $(this);

            var id = $row.find("td:first").text();

            if (id.indexOf(value) != 0) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        }
    })
})
 
}
// WXBOBVN

app.components.Farmer = function ($id) {
	var $aadharNumber = $id.find(".aadharNumberForm"),
		$farmersFirstName = $id.find(".farmersFirstName"),
		$farmersLastName = $id.find(".farmersLastName"),
		$bhamashahID = $id.find(".bhamashahID"),
		$fathersName = $id.find(".fathersName"),
		$radioGroup = $id.find(".radioGroupGender"),
    $loader = $id.find(".loader"),
		$verifyAadhar = $id.find(".verifyAadhar"),
		$farmerCaste = $id.find(".farmerCaste"),
		$autoFillBhamashah = $id.find(".autoFillBhamashah"),
		$aadharNumberForm = $id.find(".aadharNumberForm"),
		$verifyAadhar = $id.find(".verifyAadhar"),
		$farmersNameForm = $id.find(".farmersNameForm"),
		$collapsiblePanelHeader = $id.find(".collapsiblePanelHeaderPopup"),
    $verifyMSG = $id.find(".verifymsg"),
    $verifyMSGdone = $id.find(".verifyMsgRight"),
		$collapsiblePanel = $id.find(".collapsiblePanel");


	$verifyAadhar.click(function (ev) {
		ev.preventDefault()
    var data={};
    data["aadharID"] = $aadharNumber.val();
    data["firstName"] = $farmersFirstName.val();
    data["lastName"] = $farmersLastName.val();
    var bhamashahData = []
    if ($(this).data("auto-fill") != "") {
      bhamashahData = JSON.parse($(this).data("auto-fill"));
    }
    app.utils.ajax.post("/authAadhar/post", {data: data}).then(function (item) {
      if (item.data.aadharAuth == true) {
        bhamashahData.forEach(function (item) {
        	if (item.aadharID[0] == $aadharNumber.val()) {
        		$fathersName.val(item.fatherNameEng[0])
        		$fathersName.siblings("label").addClass("label-up")
        		$farmerCaste.val(item.caste[0]).change()
        		$farmerCaste.material_select();
        		if (item.gender[0] == "Female") {
        			$radioGroup.find("input")[1].checked = true
        		} else if (item.gender[0] == "Male") {
        			$radioGroup.find("input")[0].checked = true
        		}
        	}
        })
        $verifyMSG.css("display", "none");
        $verifyMSGdone.css("display", "block");
      }
      else{
        $verifyMSG.css("display", "block");
        $verifyMSGdone.css("display", "none");
        Materialize.toast("Entered Aadhar and Name doesn't match", 5000, "rounded");
      }
    })
  });

	$aadharNumberForm.on('input', function() {
		$aadharNumber.val($(this).val());
	})

	$farmersNameForm.on('input', function() {
		$farmersName.val($(this).val());
	})

	$collapsiblePanelHeader.on("click", function () {
		$collapsiblePanel.slideToggle();
	})

	$verifyAadhar.click(function (ev) {
		ev.preventDefault()
	})
	

	$autoFillBhamashah.click(function (ev) {
		ev.preventDefault();
    $loader.css("display", "block");
		app.utils.ajax.get('/farmerDetail/gb', {
			data: {
				id: $bhamashahID.val()
			}

		}).then(function(data) {
      $loader.css("display", "none");
			console.log(data);
			if (data.status && data.data.length > 0) {
				$verifyAadhar.data("auto-fill", JSON.stringify(data.data));
				var listOptions = "<option value='' selected=true disabled>CHOOSE NAME</option>";
				data.data.forEach(function (item) {

					listOptions += "<option value='' >"+ item.nameEng[0] +"</option>";
				})
				var $modal = $("#myModal");
				var $farmerName = $modal.find(".farmerName");
				$modal.data("id", $id.attr("id"));

				$("body").addClass("modal-open")
				$modal.addClass("in").css("display", "block")

				$farmerName.material_select('destroy');
				$farmerName.html(listOptions)
				$farmerName.material_select();
			} else {
				Materialize.toast("Not a valid Bhamashah ID. Re-enter", 3000, "rounded")
			}
		});
	});
}

$(".closeModal").click(function (ev) {
	var $modal = $("#myModal");
	var $farmerName = $modal.find(".farmerName");
	var id = $modal.data("id");
	var $id = $("#" + id);
	var $farmersFirstName = $id.find(".farmersFirstName");
	var $fathersName = $id.find(".fathersName");
	var $farmerCaste = $id.find(".farmerCaste");
	var $radioGroup = $id.find(".radioGroupGender");
	var $farmersLastName = $id.find(".farmersLastName");
	var $farmerMobileNumber = $id.find(".farmerMobileNumber");
	var $aadharNumber = $id.find(".aadharNumberForm");
	var $verifyAadhar = $id.find(".verifyAadhar");
  var bhamashahData = JSON.parse($verifyAadhar.data("auto-fill"));

	var selectedName = $farmerName.find(":selected").text();
	if (selectedName != "CHOOSE NAME") {
		$("body").removeClass("modal-open")
		$modal.removeClass("in").css("display", "none")
		bhamashahData.forEach(function (item) {
			if (item.nameEng[0] == selectedName) {
				$farmerMobileNumber.val(item.mobile[0])
				$farmerMobileNumber.siblings("label").addClass("label-up")
				$aadharNumber.val(item.aadharID[0])
				$aadharNumber.siblings("label").addClass("label-up")
				$fathersName.val(item.fatherNameEng[0])
				$fathersName.siblings("label").addClass("label-up")
				$farmerCaste.material_select("destroy");
				$farmerCaste.val(item.caste[0]).change()
				$farmerCaste.material_select();
				if (item.gender[0] == "Female") {
					$radioGroup.find("input")[1].checked = true
				} else if (item.gender[0] == "Male") {
					$radioGroup.find("input")[0].checked = true
				}
			}
		})
		$farmersFirstName.val(selectedName.substr(0, selectedName.lastIndexOf(" ")));
		$farmersLastName.val(selectedName.substr(selectedName.lastIndexOf(" "), selectedName.length - selectedName.lastIndexOf(" ")).trim());
		$farmersFirstName.siblings("label").addClass("label-up");
		$farmersLastName.siblings("label").addClass("label-up");
		return false;
	} else {
		Materialize.toast("Please select a name first to proceed", 3000, "rounded")
	}
})
app.components.addFarmer = function ($id) {
	var $addFarmer = $id.find("#addAnotherFarmer");
	var $template = $id.find("#template");
	var $farmerList = $id.find("#farmerList");


	// $addFarmer.click(function (ev) {
		// ev.preventDefault();
		// var $farmerData = $farmerList.children(".farmerData");
		// var latestIndex = 1;

		// $.each($farmerData, function (index, item) {
		// 	var $item = $(item);

		// 	var indexFarmer = $item.find(".indexFarmer").html();
		// 	var bhamashahID = $item.find(".bhamashahID").val();
		// 	var farmersNameForm = $item.find(".farmersNameForm").val();
		// 	var fathersName = $item.find(".fathersName").val();
		// 	var radioGroup = $item.find("input:radio:checked").val();
		// 	var aadharNumberForm = $item.find(".aadharNumberForm").val();
		// 	var farmerOwnerShip = $item.find(".farmerOwnerShip :selected").text();
		// 	var farmerMobileNumber = $item.find(".farmerMobileNumber").val();
		// 	var farmerCaste = $item.find(".farmerCaste :selected").text();

		// 	latestIndex = indexFarmer
		// })

		// $farmerData.last().find(".collapsiblePanelHeader").show();
		// $farmerData.last().find(".collapsiblePanel").hide();
		// $template.find(".indexFarmer").html(Number(latestIndex)+1)
		// $template.find(".headerIndex").html(Number(latestIndex)+1)
		// $farmerList.append($template.html());    
 //  });

	// $(".selectIndex").change(function(ev){
	// 	var count = $(this).find(":selected").text();
	// 	for (index = 1; index <= 10; index++) {
	// 		if (index < count) {
	// 			$id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
	// 		} else {
	// 			$id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
	// 		}
	// 	}
	// })
 
}
 app.components.password = function ($id) {

    var $password = $id.find('#password');
    var $confirmPassword = $id.find('#confirmPass');
    var $forgotSubmit = $id.find("#forgotSubmit");
    var $otpValCheck = $id.find("#otp");
    var $otptextbox = $id.find(".otptextbox");
    var $requestOtp = $id.find("#requestOtp");
    var $reSendOtpEvent = $id.find(".reSendOtpEvent");

  $otpValCheck.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
  $password.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
  $confirmPassword.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
  $password.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $confirmPassword.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $otpValCheck.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $id.find('#requestOtp').on('click',function(){
    var $password =  $id.find('#password').val();
    var $confirmPass = $id.find('#confirmPass').val();
    if($password.length != 6){
    Materialize.toast("Length should be 6 Alphanumeric", 6000, "rounded");
    }else {
    if($password != $confirmPass){
    Materialize.toast("password and confirm password not match Re-check", 6000, "rounded");
    } 
    else{
        var $attrId= $(location).attr('search');
        var relaceText = $attrId.replace("?ID=", '');
        var dataObj={};
        dataObj["aadharId"]=relaceText;
        dataObj["sms"]=1;
        dataObj["call"]=0;
       app.utils.ajax.post("/forgotPassword/post", {data: dataObj}).then(function (item) {
          if (item.status == true) {
        Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
        $id.find('#password').attr("disabled", "disabled");
        $id.find('#confirmPass').attr("disabled", "disabled");
        $otptextbox.css("display", "block");
        $forgotSubmit.css("display", "block");
        $requestOtp.css("display", "none");
        }
       })
      }
    }
  })

  $reSendOtpEvent.on('click',function (ev) {
    ev.preventDefault();
        var $attrId= $(location).attr('search');
        var relaceText = $attrId.replace("?ID=", '');
        var dataObj={};
        dataObj["aadharId"]=relaceText;
        dataObj["sms"]=1;
        dataObj["call"]=0;
       app.utils.ajax.post("/forgotPassword/post", {data: dataObj}).then(function (item) {
          if (item.status == true) {
        Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
     }
    })
  })


    $forgotSubmit.click(function () {
        var $otpValue =  $id.find('#otp').val();
        var data={};
        var $attrId= $(location).attr('search');
        var relaceText = $attrId.replace("?ID=", '');
        data["aadharId"]=relaceText;
        data["password"]= $password.val();
        data["otp"] =  $otpValue;
        console.log("password reset",data);
        app.utils.ajax.post("/resetPassword/post", {data: data}).then(function (item) {
          if (item.status == true) {
            alert("Password change successfully")
            app.utils.redirectTo('/adminLogin');
          } else{
        Materialize.toast("OTP incorrect. Re-enter to proceed ", 6000, "rounded");
          }
      }) 
    })

 }
app.components.ifscData = function ($id) {
	var $passField = $id.find('#passField');
	var $passSubmit = $id.find('.password_submit');
	var $ifscPasswordModal = $id.find('#ifscPasswordModal');
	var $bankType = $id.find('#bankType');
	var $ifscCode = $id.find('#ifscCode');
	var $branchCode = $id.find('#branchCode')
	var $addressField = $id.find('#addressField');
	var $districtName = $id.find('#districtName');
	var $branchName = $id.find('#branchName');
	var $contactField = $id.find('#contactField');
	var $resetIfsc = $id.find('#cancelIfsc');
	var $createIfsc = $id.find('#createIfsc');
	var $bankName = $id.find('select#bankName')
	var ifscCodeValue = '';
	var branchCodeValue = '';
	var passFieldValue = '';
	var input_selector = 'input[type=text]';
	var branchCodeFlag = 0;

	//$ifscPasswordModal.addClass('hide')
	$passSubmit.on('click',function(ev) {
		ev.preventDefault();
		passFieldValue = $passField.val();
		var data = {
			'passFieldValue' : passFieldValue
		}
		app.utils.ajax.post('/passverify/ifsc',{data:data}).then(function (data) {
			if(data.status) {
				$ifscPasswordModal.addClass('hide')
			} else {
				Materialize.toast("Wrong Password", 2000, "rounded");
			}
		})
	})

	$passField.keypress(function (ev) {
		if(ev.keyCode == 13) {
			$passSubmit.trigger('click');
		}
	})

	$bankType.change(function(ev) {
		$('#pluswrap-overlay').css('display','block');
		var data = {}
		data['objectType'] = $bankType.val();
		if($bankType.val() == 'COMMERCIAL') {
			$branchCode.attr('disabled','disabled');
			$branchCode.siblings('label, i').removeClass('label-up');
			$branchCode.siblings('i').addClass('hide');
			$branchCode.css("box-shadow", "");
			$branchCode.css("border-bottom", "");
			$branchCode.removeClass("valid");
			branchCodeFlag = 1;
		} else {
			$branchCode.removeAttr('disabled')
			branchCodeFlag = 0;
		}
		app.utils.ajax.post('/getbank/ifsc',{data:data}).then(function(data) {
			$('#pluswrap-overlay').css('display','none');
			var listOptions = "<option disabled>CHOOSE BANK NAME</option>";
			$bankName.html(listOptions)
			if(data.status) {
				data.data.forEach(function (item) {
				  $bankName.append($('<option></option>').val(item.bank_id).text(item.bank_name));
				})
				$bankName.material_select();
			}
		},function(err) {
			Materialize.toast("Data not found", 2000, "rounded");
		})
	})

	$ifscCode.on("change paste keyup", function (ev) {
		if ($(this).val().length > 11) {
			$(this).val($(this).val().substr(0, 11))
		}
	})

	$ifscCode.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$branchCode.on("change paste keyup", function (ev) {
		if ($(this).val().length > 20) {
			$(this).val($(this).val().substr(0, 20))
		}
	})

	$branchName.on("change paste keyup", function (ev) {
		if ($(this).val().length > 30) {
			$(this).val($(this).val().substr(0, 30))
		}
	})

	$districtName.on("change paste keyup", function (ev) {
		if ($(this).val().length > 20) {
			$(this).val($(this).val().substr(0, 20))
		}
	})

	$addressField.on("change paste keyup", function (ev) {
		if ($(this).val().length > 100) {
			$(this).val($(this).val().substr(0, 100))
		}
	})

	$branchCode.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$branchName.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$districtName.keypress(function (ev) {
		var regex = new RegExp("^[a-zA-Z]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$contactField.keypress(function (ev) {
		var regex = new RegExp("^[0-9+-]+$");
		var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
		if (regex.test(str)) {
			return true;
		}
		ev.preventDefault();
		return false;
	});

	$contactField.on("change paste keyup", function (ev) {
		if ($(this).val().length > 15) {
			$(this).val($(this).val().substr(0, 15))
		}
	})

	$ifscCode.blur(function () {
		var that = this;
		ifscCodeValue = $ifscCode.val().trim();
		if(!ifscCodeValue || ifscCodeValue.length < 11) {
			Materialize.toast("IFSC is not valid", 2000, "rounded");
			$ifscCode.focus();
			setTimeout(function(){ $ifscCode.focus(); });
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
			$(that).next().find(".errRequired").removeClass("hide");
			$(that).next().find(".validated").addClass("hide");
		} else {
			$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(that).css("border-bottom", "1px solid #4CAF50");
			if(branchCodeFlag) {
				var data = {
					'ifsc_code' : ifscCodeValue,
					'branch_code' : '',
					'object_type' : $bankType.val()
				}
				app.utils.ajax.post('/ifsc/branch',{data:data}).then(function (data) {
					if(data.status) {
						$branchName.val(data.data.branch_name);
						$addressField.val(data.data.address);
						$districtName.val(data.data.district_name);
						$contactField.val(data.data.contact_number);
						Materialize.updateTextFields();
						$addressField.trigger('autoresize');
			      $(input_selector).each(function(index, element) {
			        if($(element).val().length > 0) {
			        	$(element).siblings('label, i').addClass('label-up');
			        }
			      });
			      $ifscCode.attr('disabled','disabled')
			      $branchCode.attr('disabled','disabled')
			      $bankType.parent().find(':input').attr('disabled','disabled')
			      $bankName.parent().find(':input').attr('disabled','disabled')
					} else {
						Materialize.toast('No bank data found, please fill all details carefully', 2000, "rounded");
						// $(that).css("box-shadow", "0 1px 0 0 red");
						// $(that).css("border-bottom", "1px solid red");
						// $(that).next().find(".errRequired").removeClass("hide");
						// $ifscCode.css("box-shadow", "0 1px 0 0 red");
						// $ifscCode.css("border-bottom", "1px solid red");
					}
				},function(err) {
					Materialize.toast("Data not found", 2000, "rounded");
				})
			}
		}
	})

	$branchCode.blur(function() {
		var that = this;
		branchCodeValue = $branchCode.val().trim();
		if(branchCodeValue) {
			var data = {
				'ifsc_code' : ifscCodeValue,
				'branch_code' : branchCodeValue,
				'object_type' : $bankType.val()
			}
			$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
			$(that).css("border-bottom", "1px solid #4CAF50");
			app.utils.ajax.post('/ifsc/branch',{data:data}).then(function (data) {
				if(data.status) {
					$(that).css("box-shadow", "0 1px 0 0 #4CAF50");
					$(that).css("border-bottom", "1px solid #4CAF50");
					$branchName.val(data.data.branch_name);
					$addressField.val(data.data.address);
					$districtName.val(data.data.district_name);
					$contactField.val(data.data.contact_number);
					Materialize.updateTextFields();
					$addressField.trigger('autoresize');
		      $(input_selector).each(function(index, element) {
		        if($(element).val().length > 0) {
		        	$(element).siblings('label, i').addClass('label-up');
		        }
		      });
		      $ifscCode.attr('disabled','disabled')
		      $branchCode.attr('disabled','disabled')
		      $bankType.parent().find(':input').attr('disabled','disabled')
		      $bankName.parent().find(':input').attr('disabled','disabled')
				} else {
					Materialize.toast('No bank data found, please fill all details carefully', 2000, "rounded");
					// $(that).css("box-shadow", "0 1px 0 0 red");
					// $(that).css("border-bottom", "1px solid red");
					// $(that).next().find(".errRequired").removeClass("hide");
					// $ifscCode.css("box-shadow", "0 1px 0 0 red");
					// $ifscCode.css("border-bottom", "1px solid red");
				}
			},function(err) {
				Materialize.toast("Data not found", 2000, "rounded");
			})
			
		} else {
			Materialize.toast("Branch code cann't be empty", 2000, "rounded");
			$branchCode.focus();
			setTimeout(function(){ $branchCode.focus(); });
			$(that).css("box-shadow", "0 1px 0 0 red");
			$(that).css("border-bottom", "1px solid red");
			$(that).next().find(".errRequired").removeClass("hide");
		}
	})
	$createIfsc.on('click', function() {
		var data = {};
		if($ifscCode.val().trim() && ($branchCode.val().trim() || branchCodeFlag) && $bankType.val() && $branchName.val() && $addressField.val() && $districtName.val() && $bankName.val()) {
			data['ifsc_code'] = $ifscCode.val().trim();
			data['branch_code'] = $branchCode.val().trim();
			data['object_type'] = $bankType.val();
			data['branch_name'] = $branchName.val();
			data['contact_number'] = $contactField.val();
			data['address'] = $addressField.val();
			data['district_name'] = $districtName.val();
			data['bank_id'] = $bankName.val();
			data['password'] = passFieldValue;
			$('#pluswrap-overlay').css('display','block');
			app.utils.ajax.post('/submit/ifsc',{data:data}).then(function (data) {
				$('#pluswrap-overlay').css('display','none');
				if(data.status) {
					Materialize.toast('IFSC submitted successfully', 2000, "rounded");
					$ifscCode.val('');
					$branchCode.val('');
					$bankType.parent().find(':input').val('');
					$branchName.val('');
					$contactField.val('');
					$addressField.val('');
					$districtName.val('');
					$bankName.parent().find(':input').val('');
					$bankName.material_select();
					$ifscCode.removeAttr('disabled')
					$ifscCode.next().find(".errRequired").addClass("hide");
					$branchCode.removeAttr('disabled')
					$bankType.parent().find(':input').removeAttr('disabled')
					$bankName.parent().find(':input').removeAttr('disabled')
					$bankType.material_select();
					branchCodeFlag = 0;
					var listOptions = "<option disabled>CHOOSE BANK NAME</option>";
					$bankName.html(listOptions)
					$bankName.material_select();
					$(input_selector).each(function(index, element) {
					  $(element).siblings('label, i').removeClass('label-up');
					  $(element).css("box-shadow", "");
					  $(element).css("border-bottom", "");
					  $(element).removeClass("valid");
					});
				} else {
					Materialize.toast(data.error, 2000, "rounded")
				}
			},function(err) {
				Materialize.toast("Failure, please try again later!", 2000, "rounded");
			})
		} else {
			Materialize.toast('Please fill required fields', 2000, "rounded");
		}
	})

	$resetIfsc.on('click', function() {
		app.utils.redirectTo('/ifscDataPage');
	})
}
app.components.kccBankDetails = function ($id) {
	var data={};
  var farmerTemp=[];
  var financeDetailID={};
  var farmersID=[];

	var $radioSingle = $id.find("#KCCSingle");
	var $radioJoint = $id.find("#KCCJoint");
	var $addFarmer =  $id.find("#addAnotherFarmer");
	var $kccBankID = $id.find("#kccBankID");
	var $nextButton = $id.find(".nextButton");
	var $farmerHeader = $id.find(".farmerHeader");
  var $cropHeader = $id.find(".cropHeader");
  var $previewHeader = $id.find(".previewHeader");
  var $previewDetails = $id.find(".previewDetails");
	var $farmerDetails = $id.find(".farmerDetails");
	var $cropDetails = $id.find(".cropDetails");
  var $cropDetails1 = $id.find(".cropDetails");
  var $selectIndex = $id.find(".selectIndex");
  var $cropList = $cropDetails.find("#cropList");
	var $farmerList = $farmerDetails.find("#farmerList");
  var $bhamashahID = $id.find(".bhamashahID");
  var $divNextButton = $id.find(".divNextButton");
  var $divNextButton2 = $id.find(".divNextButton2");
  var $nextButton2 = $id.find(".nextButton2");
  var $divNextButton3 = $id.find(".divNextButton3");
  var $nextButton3 = $id.find(".nextButton3"),
    $aadharNumberForm = $id.find(".aadharNumberForm"),
    $farmersFirstNameForm = $id.find(".farmersFirstName"),
    $farmersLastNameForm = $id.find(".farmersLastName"),
    $aadharNumberForm = $id.find(".aadharNumberForm"),
    $fathersName = $id.find(".fathersName"),
    $farmerMobileNumber = $id.find(".farmerMobileNumber");
    

  $addFarmer.hide();

	$radioSingle.change(function () {
    $(".selectChange").addClass('hide');
    $farmerList.find(".appendedDiv").css('display', 'none');
		$addFarmer.css('display', 'none');
    for (index = 1; index <= 10; index++) {
      $id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
    }
	});

	$radioJoint.change(function () {
    $(".selectChange").removeClass('hide');
    $farmerList.find(".appendedDiv").css('display', 'block');;
		$addFarmer.css('display', 'block');
    var count = $selectIndex.find(":selected").text();
    for (index = 1; index <= 10; index++) {
      if (index < count) {
        $id.find(".farmerTemplate_" + index).css("display", "block").addClass("farmerList")
      } else {
        $id.find(".farmerTemplate_" + index).css("display", "none").removeClass("farmerList")
      }
    }
	});

	$farmerHeader.click(function () {
    $divNextButton.css("display", "block");
    $divNextButton2.css("display", "none");
    $divNextButton3.css("display", "none");
		$farmerDetails.css("display", "block");
    $cropDetails1.css("display", "none");
    $cropList.css("display", "none");
    $cropDetails.css("display", "none");
    $previewDetails.css("display", "none");
	});

  $cropHeader.click(function () {
    if ( $previewDetails.css("display") == "block") {
      $cropDetails1.css("display", "block");
      var $cropDetails = $cropList.children(".cropData");
      $cropList.css("display", "block");
      $divNextButton.css("display", "none");
      $divNextButton2.css("display", "block");
      $divNextButton3.css("display", "none");
      $farmerDetails.css("display", "none");
      $cropDetails.css("display", "block");
      $previewDetails.css("display", "none");
    }
  });

  $previewDetails.click(function () {
    if ( $previewDetails.css("display") == "block") {
      $cropDetails1.css("display", "none");
      $cropList.css("display", "none");
      $divNextButton.css("display", "none");
      $divNextButton2.css("display", "none");
      $divNextButton3.css("display", "block");
      $farmerDetails.css("display", "none");
      $cropDetails.css("display", "none");
      $previewDetails.css("display", "block");
    }
  });


	$nextButton.click(function () {
    var data = []
		var $farmerData = $id.find(".farmerList");
		var latestIndex = 1;
		var $Kcc= $id.find("#kcc");
		data["accountNumber"]=$Kcc.val();
		var $accType= $id.find(".acctype").val();
		data["accountType"]=$accType;
    var $farmerAccountType= $(".farmerType").val();
    data["farmerAccountType"]=$farmerAccountType;
    var $branchName= $id.find("#branch").val();
    data["branchName"]=$branchName;
    var $ifsc= $id.find("#ifsc").val();
    data["ifsc"]=$ifsc;

    var farmers = [];
    $farmerData.each(function (index, item) {
      var $item = $(item);
      var farmer = {};
			var indexFarmer = $item.find(".indexFarmer").html();
			var bhamashahID = $item.find(".bhamashahID").val();
			farmer["bhamashahID"]=bhamashahID;
			var farmersFirstNameForm = $item.find(".farmersFirstName").val();
			farmer["firstName"]=farmersFirstNameForm;
      var farmersLastNameForm = $item.find(".farmersLastName").val();
      farmer["lastName"]=farmersLastNameForm;
			var fathersName = $item.find(".fathersName").val();
			farmer["fatherName"]=fathersName;
			var radioGroup = $item.find(".radioGroupGender input:checked").val();
			farmer["gender"]=radioGroup;
			var aadharNumberForm = $item.find(".aadharNumberForm").val();
      farmer["aadharID"]= aadharNumberForm;
      // var farmerOwnerShip = $item.find(".farmerOwnerShip :selected").val();
      // farmer["farmerType"]= farmerOwnerShip;
      var farmerMobileNumber = $item.find(".farmerMobileNumber").val();
      farmer["mobile"]= farmerMobileNumber;
      var farmerCaste = $item.find(".farmerCaste :selected").text();
      farmer["caste"]= farmerCaste;
      farmers.push(farmer);
      latestIndex = indexFarmer

       var reg = /^[789]\d{9}$/;
        var count = 0;
        var regAlphaNumeric= /^[a-z0-9]+$/i ;

         var Kcc= $Kcc.val(),
           bhamashahID= $bhamashahID.val() ,
           aadharNumberForm=   $aadharNumberForm.val(),
           farmersFirstNameForm=    $farmersFirstNameForm.val(),
           fathersName=         $fathersName.val(),
           aadharNumberForm=   $aadharNumberForm.val(),
           farmerMobileNumber=   $farmerMobileNumber.val();

           var farmerCaste=$(".farmerCaste ul.select-dropdown").find(".selected").text();
           var farmerOwnerShip=$(".farmerOwnerShip ul.select-dropdown").find(".selected").text();
           var farmerCaste=$(".farmerCaste ul.select-dropdown").find(".selected").text();


       if( Kcc='' ||  !regAlphaNumeric.test(Kcc)) {
         $id.find("#kcc").next().find(".errRequired").removeClass("hide");
         $id.find("#kcc").addClass('invalid');
       } else {
         count++;
         $id.find("#kcc").next().find(".errRequired").addClass("hide");
       }

       // if( $branchName='' ||  !regAlphaNumeric.test($branchName)) {
       //   $id.find("#branch").next().find(".errRequired").removeClass("hide");
       //   $id.find("#branch").addClass('invalid');
       // } else {
       //   count++;
       //   $id.find("#branch").next().find(".errRequired").addClass("hide");
       // }

       // if( $ifsc='' ||  !regAlphaNumeric.test($ifsc)) {
       //   $id.find("#ifsc").next().find(".errRequired").removeClass("hide");
       //   $id.find("#ifsc").addClass('invalid');
       // } else {
       //   count++;
       //   $id.find("#ifsc").next().find(".errRequired").addClass("hide");
       // }


       if(bhamashahID == '' ) {
         $bhamashahID.next().find(".errRequired").removeClass("hide");
         $bhamashahID.addClass('invalid');
       } else {
         count++;
         $bhamashahID.next().find(".errRequired").addClass("hide");
       }
       if(aadharNumberForm.length != 12) {
         $aadharNumberForm.next().find(".errRequired").removeClass("hide");
         $aadharNumberForm.addClass('invalid');
       } else {
         count++;
         $aadharNumberForm.next().find(".errRequired").addClass("hide");
       }

        if(farmersFirstNameForm == '' ) {
         $farmersFirstNameForm.next().find(".errRequired").removeClass("hide");
         $farmersFirstNameForm.addClass('invalid');
       } else {
         count++;
         $farmersFirstNameForm.next().find(".errRequired").addClass("hide");
       }


        if(fathersName == '' ) {
         $fathersName.next().find(".errRequired").removeClass("hide");
         $fathersName.addClass('invalid');
       } else {
         count++;
         $fathersName.next().find(".errRequired").addClass("hide");
       }
       
       if(farmerOwnerShip == '' ) {
         $(".farmerOwnerShip").next().find(".errRequired").removeClass("hide");
         $(".farmerOwnerShip input").addClass('invalid');
       } else {
         count++;
         $(".farmerOwnerShip").next().find(".errRequired").addClass("hide");
       }


       if(farmerCaste == '' ) {
         $(".farmerCaste").next().find(".errRequired").removeClass("hide");
         $(".farmerCaste input").addClass('invalid');
       } else {
         count++;
         $(".farmerCaste").next().find(".errRequired").addClass("hide");
       }



       if(!reg.test(farmerMobileNumber)) {
         $farmerMobileNumber.addClass('invalid');
         $farmerMobileNumber.next().find(".errRequired").removeClass("hide");
       } else {
         count++;
         $farmerMobileNumber.next().find(".errRequired").addClass("hide");
       }

       if(count != 10) {
         console.log('test',count);
         return false;
       }
       

    })
   
    data["farmers"]=farmers;

    console.log(data)
    farmersID = [];
    app.utils.ajax.post("/farmerDetail/post", {data: data}).then(function (item) {
      if (item.status == true) {
        if (item.data.farmerFinance.status) {
          var boolIndex = 0;
          item.data.farmers.forEach(function (item, index) {
            if (!item.status) {
              boolIndex = index
            }
          })
          if (boolIndex == 0) {
            financeDetailID = item.data.farmerFinance.data.financeDetailID;
            farmerTemp =item.data.farmers;
            $.each(farmerTemp,function (index, item) {
              console.log(item.data.farmerID)
              farmersID.push({"farmerID": item.data.farmerID});
            })
            $farmerHeader.css("display", "block");
            $cropDetails.css("display", "block");
            $farmerDetails.css("display", "none");
            $divNextButton.css("display", "none")
            $divNextButton2.css("display", "block")
          } else {
            Materialize.toast("farmer no " + boolIndex +"'s information is incorrect", 5000, "rounded")
          }
        } else {
          Materialize.toast("Farmer's Bank details are incorrect. Re-check " + item.data.farmerFinance.error, 5000, "rounded")
        }
      } else {
        Materialize.toast("Incorrect information entered, please validate", 6000, "rounded");
      }
    })
  })

  $nextButton2.click(function (ev) {
    ev.preventDefault();
    data={};
    var listCrop = [];
    var $cropDetails = $cropList.children(".cropData");
    $cropDetails.each(function (index, item) {
      var $item = $(item);
      var villageCrop = $item.find(".villageCrop :selected").val();
      var $khataNumber = $item.find(".khataNumber");
      var khataNumber = $khataNumber.val();
      var remainingarea = $khataNumber.data('remainingarea');
      var areaUnit = $khataNumber.data('areaunit');
      var convertor = $khataNumber.data('convertor');
      var khataNumber = $item.find(".khataNumber").val();
      var $cropDetails = $item.find(".cropDetails");
      var $crop = $item.find('div.crop');


      $crop.each(function (index, item) {
        var $cropItem = $(item);
        if ($cropItem.css("display") == "block") {
          if ($cropItem.find(".hectareText").css("display") == "block") {
            listCrop.push({
              area: Number($cropItem.find(".cropArea").val()),
              CN_ID: $cropItem.find(".cropSelection :selected").val(),
              areaUnit: areaUnit,
              khataNumber: khataNumber,
              villageID: villageCrop
            });
          } else {
            listCrop.push({
              CN_ID: $cropItem.find(".cropSelection :selected").val(),
              areaUnit: areaUnit,
              khataNumber: khataNumber,
              area: Number(Number($cropItem.find(".cropArea1").val()) + "." + Number($cropItem.find(".cropArea2").val())),
              villageID: villageCrop
            });
          }
        }
      })
     
    })
      
    data["farmerDetails"]=farmersID;
    data["status"]="preview";
    data["cropSeason"]="उन्हालू";
    data["channelType"]="bank";
    data["farmerFinancialID"]=financeDetailID;
    data["notificationDetails"]=listCrop;
    app.utils.ajax.post("/farmerDetail/policy/post", {data: data}).then(function (item) {
      if (item.previewList) {
        $cropDetails1.css("display", "none");
        $cropList.css("display", "none");
        $cropHeader.css("display", "block");
        $cropDetails.css("display", "none");
        $divNextButton.css("display", "none");
        $divNextButton2.css("display", "none");
        $divNextButton3.css("display", "block");
        $previewDetails.css("display", "block");
        $previewDetails.append(item.previewList);
      } else {
        Materialize.toast("Invalid Entry!", 6000, "rounded")
      }
    }).catch(function (err) {
      Materialize.toast("Invalid Entry!", 6000, "rounded")
    })
  })

  $nextButton3.click(function (ev) {
    ev.preventDefault();
    var data = {}
    var $previewList = $id.find(".previewList");
    var $previewCardDetails = $previewList.find('.previewCardDetails')

    data["farmerDetails"]=farmersID;
    data["status"]="submit";
    data["cropSeason"]="उन्हालू";
    data["channelType"]="bank";
    data["farmerFinancialID"]=financeDetailID;

    var listCrop = [];

    $previewCardDetails.each(function (index, item) {
      var $previewItem = $(item);
      var carddetails = $previewItem.data("carddetails");
      console.log(carddetails, "------------@@@@@----------")
      if (carddetails.areaUnit == "Hectare") {
        carddetails = {
          CN_ID: carddetails.CN_ID,
          areaUnit: carddetails.areaUnit,
          khataNumber: carddetails.khataNumber,
          area: carddetails.areaHectare,
          villageID: carddetails.villageID
        }
      } else {
        carddetails = {
          CN_ID: carddetails.CN_ID,
          areaUnit: carddetails.areaUnit,
          khataNumber: carddetails.khataNumber,
          area: carddetails.areaBigha + "." + carddetails.areaBiswa,
          villageID: carddetails.villageID
        }
      }
      listCrop.push(carddetails);
    })

    data["notificationDetails"]=listCrop;

    console.log(JSON.stringify(data), "----------ghghfhgg-------");
    app.utils.ajax.post("/farmerDetail/policy/finalPost", {data: data}).then(function (item) {
      if (item.status == true) {
        alert("Policy_ID: " + item.data[0].pdID + "has been created successfully");
        app.utils.ajax.get("/policyList").then(function (result) {
      })
        app.utils.redirectTo('/farmerDetail');
      } else {
        Materialize.toast("Sorry!, Your Login Session has been expired, login again to proceed. ")
        app.utils.redirectTo('/welcome');
      }
    })

  })


}

app.components.listPolicy = function ($id) {
  var $nextList = $id.find(".nextList");
  var $prevList = $id.find(".prevList");
  var $listLimit = $id.find(".listLimit");
  var $replaceContent = $id.find(".replaceContentPolicy");
  var $searchBtn = $id.find("#searchbtn");
  var $search = $id.find("#search");
  var $numberClick = $id.find(".numberClick");
  var $searchType = $id.find("#searchType");
  var $submit = $id.find(".ButnBack");
  var $printButton = $id.find(".printPolicyList");
  var limit = 10;
  var offset = 0;
  var totalCount = $id.find('.tableContent').data("totalcount");
  var $policyLink = $id.find(".policyLink");
  var $excelFileDownload = $id.find("#utrForBank");

  $search.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $excelFileDownload.on('click', function (ev) {
  setTimeout(function() {
    fnExcelReport();
  },1000);
 })

  var fnExcelReport = function() {
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('tablefarmer'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
      alert('Browser not supportable')
    }  
    else {
      var fileName = 'data:application/vnd.ms-excel,' + encodeURIComponent(tab_text);  
      var a = document.createElement('a');
      a.href = fileName;
      a.download = 'policyListForUtr.xls';
      //triggering the function
      a.click();
    }                //other browser not tested on IE 11
  }

  $printButton.click(function(ev) {
    var divToPrint = $id.find(".policyTable");
    var htmlToPrint = '' +
      '<style type="text/css">' +
      'table th, table td {' +
      'border:1px solid #000;' +
      'padding: 0.5em;' +
      '}' +
      '</style>';
    var policySummary = "<div style='text-align: center'><h2>Policy List</h2></div>"
    htmlToPrint = htmlToPrint + policySummary + divToPrint.html();
    newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  })

  var ajaxCallFunction = function (limit, offset, value) {
    return app.utils.ajax.get("/policyList", {data: {
      partials: ["tableContent"],
      limit: limit,
      offset: offset,
      search: value,
      searchType: $searchType.val()
    }}).then(function (data) {
      return data
    },function(err){
      if(err.status == 401){
        Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
        window.location.href = "/userLogin";
      }
    })
  }
  $submit.click(function (ev) {
    ev.preventDefault();
    app.utils.redirectTo("/welcome");
  })
  
  $numberClick.click(function (ev) {
    ev.preventDefault()
    var tempOffset = offset;
    offset = Number($(this).data("count")) * 10 - 10 ;
    if (offset <= totalCount) {
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContentPolicy");
        $replaceContent.replaceWith(data.tableContent)
      })
    } else {
      offset = tempOffset
    }
  })
  
  $nextList.click(function (ev) {
    ev.preventDefault()
    offset += limit
    if (offset <= totalCount) {
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContentPolicy");
        $replaceContent.replaceWith(data.tableContent)
      })
    } else {
      offset -= limit
    }
  })

  $prevList.click(function (ev) {
    ev.preventDefault()
    offset -= limit;
    if (offset >= 0) {
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContentPolicy");
        $replaceContent.replaceWith(data.tableContent)
      })
    } else {
      offset += limit;
    }
  })

  $searchBtn.click(function (ev) {
    ev.preventDefault();
    limit = 10;
    offset = 0
    ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
      var $replaceContent = $id.find(".replaceContentPolicy");
      $replaceContent.replaceWith(data.tableContent)
      var $replaceContent = $id.find(".replaceContentPolicy");
      totalCount = Number($replaceContent.find(".tableContent").data("totalcount"))
    })
  })
}
app.components.listUser = function ($id) {
  var $firstList = $id.find(".firstList");
  var $nextList = $id.find(".nextList");
  var $prevList = $id.find(".prevList");
  var $lastList = $id.find(".lastList");
  var $listLimit = $id.find(".listLimit");
  var $numberClick = $id.find(".numberClick");
  var $searchBtn = $id.find("#searchbtn");
  var $search = $id.find("#search");
  var $resetSearch = $id.find(".resetSearchbtn");
  var limit = 10;
  var offset = 0;
  var totalCount = $id.data("totalcount");
  var pageCount = 0;
  var currentCount = 0;

  $search.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  var ajaxCallFunction = function (limit, offset, value) {
    return app.utils.ajax.get("/listUsers", {data: {
      partials: ["tableContent"],
      limit: limit,
      offset: offset,
      search: value
    }}).then(function (data) {
      return data
    },function(err){
      if(err.status == 401){
        Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
        window.location.href = "/adminLogin";
      }
    })
  }

  var paginationNumbering = function(currentIndex) {
    var lastIndex = 0;
    var previousLength = 0
    for(var i = 0 ; i< currentIndex; i++) {
      previousLength++;
    }
    $numberClick.parent().each(function(index,val){
      if($(val).css('display') != 'none'){
        lastIndex = $(val).children().data("count");
      }
      if(index == (currentIndex-1)) {
        $(val).children().addClass('activePagination')
      } else {
        $(val).children().removeClass('activePagination')
      }
    })
    var showLengthBefore = (previousLength - 10 > 0) ? previousLength - 10 : previousLength;
    var showLengthAfter = (previousLength - 10) + 20;
    
    if(currentIndex <= 10) {
      $numberClick.parent().each(function(index,val){
        if(index < 21) {
          $(val).css('display','block')
        } else {
          $(val).css('display','none')
        }
      })
    } else if(lastIndex > 21 || (previousLength - 10 > 0)) {
      $numberClick.parent().each(function(index,val){
        if((showLengthBefore-1) <= index && index <= showLengthAfter) {
          $(val).css('display','block')
        } else {
          $(val).css('display','none')
        }
      })
    } 
  }

  $numberClick.click(function (ev) {
    ev.preventDefault()
    var tempOffset = offset;
    var currentIndex = $(this).data("count")
    offset = Number($(this).data("count")) * 10 - 10 ;
    if (offset <= totalCount) {
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContent");
        $replaceContent.replaceWith(data.tableContent)
      })
    } else {
      offset = tempOffset
    }
    currentCount = currentIndex;
    paginationNumbering(currentIndex)
  })
  
  $firstList.click(function (ev) {
    ev.preventDefault()
    offset = 0;
    ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
      var $replaceContent = $id.find(".replaceContent");
      $replaceContent.replaceWith(data.tableContent)
      offset += limit;
    })
  })

  $nextList.click(function (ev) {
    ev.preventDefault()
    offset += limit
    if (offset <= totalCount) {
      currentCount++;
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContent");
        $replaceContent.replaceWith(data.tableContent)
      })
      paginationNumbering(currentCount)
    } else {
      offset -= limit
    }
  })

  $prevList.click(function (ev) {
    ev.preventDefault()
    offset -= limit;
    if (offset >= 0) {
      currentCount--;
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContent");
        $replaceContent.replaceWith(data.tableContent)
      })
      paginationNumbering(currentCount)
    } else {
      offset += limit;
    }
  })

  $lastList.click(function (ev) {
    ev.preventDefault()
    offset = totalCount - limit;
    if (offset >= 0) {
      ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
        var $replaceContent = $id.find(".replaceContent");
        $replaceContent.replaceWith(data.tableContent)
      })
    }
  })


  $searchBtn.click(function (ev) {
    ev.preventDefault();
    limit = 10;
    offset = 0
    ajaxCallFunction(limit, offset, $search.val()).then(function (data) {
      var $replaceContent = $id.find(".replaceContent");
      $replaceContent.replaceWith(data.tableContent)
      var $replaceContent = $id.find(".replaceContent");
      totalCount = Number($replaceContent.find(".tableContent").data("totalcount"))
    })
  })

  $numberClick.parent().each(function(index,val){
   console.log('test',index,val)
   if(index>20){
    $(val).css('display','none')
   }
  })
}



app.components.login = function ($id) {
var $aadharId = $id.find("#aadharId");
var $password = $id.find("#password");
var $otpValCheck = $id.find("#otp");
var $requestOtp = $id.find("#requestOtp");
var $otptextbox = $id.find(".otptextbox");
var $login = $id.find("#login");
var $userlogin =$id.find("#userlogin");
var $reSendOtpEvent = $id.find(".reSendOtpEvent");
var $callEvent = $id.find(".callEvent");
var $msgBoxCall = $id.find(".msgBoxCall");
var $callEventDiv = $id.find(".callEventDiv");

var pageName = $id.data('page');
  $aadharId.keyup(function (ev) {
    var value = $(this).val();
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (value.length > 4 && value.substr(4,1) !== '-') {
      value = value.substr(0, 4) + "-" + value.substr(4, value.length)
    }
    if (value.length > 9 && value.substr(9,1) !== '-') {
      value = value.substr(0, 9) + "-" + value.substr(9, value.length)
    }
    $(this).val(value);
  })
  $aadharId.on('paste', function (ev) {
    ev.preventDefault()
    return false;
  })
  $otpValCheck.on('paste', function (ev) {
    ev.preventDefault()
    return false;
  })
  $otpValCheck.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $aadharId.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $password.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $otpValCheck.keypress(function (ev) {
    console.log('pageName',pageName);
    if(ev.keyCode == 13 && pageName == 'user login'){
      $id.find('#userlogin').trigger('click');
    } else if(ev.keyCode == 13 && pageName == 'admin login') {
      $id.find('#login').trigger('click');
    }
  });

  $password.keypress(function (ev) {
    if(ev.keyCode == 13 && pageName == 'user login'){
      $id.find('#requestOtp').trigger('click');
    } else if(ev.keyCode == 13 && pageName == 'admin login') {
      $id.find('#requestOtp').trigger('click');
    }
  })

  $aadharId.on("change paste keyup", function (ev) {
    if ($(this).val().length > 14) {
      $(this).val($(this).val().substr(0, 14))
    }
  })
  $password.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
  $otpValCheck.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
  
  $id.find('#requestOtp').on('click',function(){
    console.log('aaya');
     var $aadharId = $id.find('#aadharId');
     var $password = $id.find('#password');
     var aadharIdValue = $aadharId.val();
     var passwordValue = $password.val();
      if(aadharIdValue.length != 14) {
       Materialize.toast("Please Fill 12 Digit Aadhar No", 6000, "rounded"); 
      $aadharId.next().find(".errRequired").removeClass("hide");
      $aadharId.addClass('invalid');
    } else {

      if(passwordValue.length == 6) {
        var data={};
        var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
        data["aadharId"] = aadhar;
        data["sms"] = 1;
        data["call"] = 0;
        data["password"]=$password.val();
         app.utils.ajax.post("/forgotPassword/post", {data: data}).then(function (item) {
            if (item.status == true) {
              $msgBoxCall.css("display", "block");
              $callEventDiv.css("display", "block");
              Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
              $aadharId.attr("disabled", "disabled")
              $password.attr("disabled", "disabled")
              $otptextbox.css("display", "block");
              $requestOtp.css("display", "none");
              $userlogin.css("display", 'block');
              $login.css("display", "block");
            } 
            else{
              Materialize.toast("AadharID & Password invalid. Please Re-Check", 6000, "rounded");
            }
        })
      }
      else{
        Materialize.toast("Please Enter Password", 6000, "rounded"); 
        $password.next().find(".errRequired").removeClass("hide");
        $password.addClass('invalid');
      }
    }
  });

  $reSendOtpEvent.on('click',function (ev) {
    ev.preventDefault();
     var $aadharId = $id.find('#aadharId');
     var $password = $id.find('#password');
        var data={};
        var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
        data["aadharId"] = aadhar;
        data["sms"] = 1;
        data["call"] = 0;
        data["password"]=$password.val();
         app.utils.ajax.post("/forgotPassword/post", {data: data}).then(function (item) {
            if (item.status == true) {
          Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
            } 
        })
  });
  $callEvent.on('click',function (ev) {
    ev.preventDefault();
     var $aadharId = $id.find('#aadharId');
     var $password = $id.find('#password');
        var data={};
        var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2]; 
        data["aadharId"] = aadhar;
        data["sms"] = 0;
        data["call"] = 1;
        data["password"]=$password.val();
         app.utils.ajax.post("/forgotPassword/post", {data: data}).then(function (item) {
            if (item.status == true) {
          Materialize.toast("Calling your registered mobile", 12000, "rounded");
            } 
        })
  });

$id.find('#login').on('click',function(){
    var data = {};
    var $otp = $id.find('#otp');
    var otpValue = $otp.val();
    var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2];
     data["aadharId"] = aadhar;
     data["password"] = $password.val();
     data["otp"] = otpValue;
      if(otpValue.length != 6) {
       Materialize.toast("Please Fill 6 Digit OTP", 6000, "rounded"); 
      $aadharId.next().find(".errRequired").removeClass("hide");
      $aadharId.addClass('invalid');
    } else {
      app.utils.ajax.post("/adminLogin/post", {data: data}).then(function (item) {
        if (item.status == true) {
          app.utils.redirectTo(item.path);
        } 
      },
      function (res) {
        Materialize.toast("Incorrect OTP ", 6000, "rounded");
      })
    }
  });


  $id.find('#userlogin').on('click',function(){
      var data = {};
      var $otp = $id.find('#otp');
      var otpValue = $otp.val();
      var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2];
       data["aadharId"] = aadhar;
       data["password"] = $password.val();
       data["otp"] = otpValue;
        if(otpValue.length != 6) {
         Materialize.toast("Please Fill 6 Digit OTP", 6000, "rounded"); 
        $aadharId.next().find(".errRequired").removeClass("hide");
        $aadharId.addClass('invalid');
      } else {
        app.utils.ajax.post("/userLogin/post", {data: data}).then(function (item) {
          if (item.status == true) {
            app.utils.redirectTo(item.path);
          } else {
            app.utils.redirectTo(item.path);
          }
        },
        function (res) {
          Materialize.toast("Incorrect OTP Please Re-Check", 6000, "rounded");
        })
      }
    });
  
$id.find('#forgot').on('click',function(){
     var data = {};
     var $aadharId = $id.find('#aadharId');
     var aadhar = $aadharId.val().split("-")[0] + $aadharId.val().split("-")[1] + $aadharId.val().split("-")[2];
      if(aadhar.length != 12) {
      Materialize.toast("Fill Aadhar Id , Please Re-Check", 6000, "rounded");
    } else {
      data["aadharID"] = aadhar;
      app.utils.ajax.post("/checkAadharId/post", {data: data}).then(function (item) {
          if (item.status == true) {
            app.utils.redirectTo('/forgotPassword?ID='+aadhar);
          } else{
          Materialize.toast("Incorrect Aadhar Id Please Re-Check", 6000, "rounded");  
          } 
        })
    }
  });
}

app.components.nav = function ($id) {
  var $logout = $id.find(".logout");
  var $otpValCheck = $id.find("#otp");
  var $sixotp = $id.find(".sixotp");
  var $mobile = $id.find("#mobile");
  var $password = $id.find('#password');
  var $confirmPassword = $id.find('#confirmPass');
  var $mobileUpdate = $id.find(".mobileUpdate");
  var $sendOtp = $id.find("#sendOtp");
  var $otpDiv = $id.find(".otp-div");
  var $submitDiv = $id.find(".submit-div");
  var $sendOtpDiv = $id.find(".send-otp-div");
  var $UpdateMobileNo = $id.find("#UpdateMobileNo");
  var $UpdatePassword = $id.find("#UpdatePassword");
  var $resetPasswordChange = $id.find(".resetPasswordChange");
  var $updateOtpDiv = $id.find(".update-otp-div");
  var $updatePassDiv = $id.find(".update-pass-div");
  var $otpChangePass = $id.find(".otp-change-pass");
  var $reSendOtpAgain = $id.find(".reSendOtpAgain");
  var $notificationClick = $id.find(".notificationClick");
  var $newPassDiv = $id.find(".new-pass-div");
  var $confirmPassDiv = $id.find(".confirm-pass-div");
  var regexMobile = /^[7-9]+[0-9]{1,9}$/i;
  var $ifscModalReset = $id.find("#ifscModalReset");
  var $selectModal = $id.find("#ifscModal");
  var $ifcsSubmit = $id.find(".ifcs_submit");
  var $ifscSelect = $id.find(".ifscSelect");
  var $ifscData = $id.find(".ifscSelect").data('ifsc');
  var $objecttypeData = $id.data('objecttype');
  var $ifscDataValue = $id.data('ifscvalue');
  var $adminCheck = $id.data('admincheck');
  var pacValue = '';
  var ifscValue = '';

  $ifscModalReset.click(function (ev) {
    ev.preventDefault();
    $selectModal.removeClass('hide');
  })

  $logout.on('click',function(){
   app.utils.ajax.post("/logout").then(function (response){
     if(response.msg){
      app.utils.redirectTo('/adminLogin');
    };
   },function(err){
    if(err.status == 401) {
      Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
      window.location.href = '/';
    }
  });
});

$notificationClick.on('click',function(){
   Materialize.toast("No Notification", 6000, "rounded");
  });

 $mobile.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    if(ev.keyCode == 13) {
      $sendOtp.trigger('click');
    }
    ev.preventDefault();
    return false;
  });
 $mobile.blur(function (ev) {
    var regex = /^[7-9]+[0-9]{1,9}$/i;
    if (regex.test($(this).val()) && $(this).val().length == 10) {
      $(this).next().find(".errRequired").addClass("hide");
      $id.data("error", "")
      $(this).css("box-shadow", "0 1px 0 0 #4CAF50");
      $(this).css("border-bottom", "1px solid #4CAF50");
    } else {
      //Materialize.toast("Please enter a mobile number", 5000, "rounded")
      $id.data("error", "Please enter a mobile number")
      $(this).next().find(".errRequired").removeClass("hide");
      $(this).css("box-shadow", "0 1px 0 0 red");
      $(this).css("border-bottom", "1px solid red");
    }
  })
 $mobile.on("change paste keyup", function (ev) {
    if ($(this).val().length > 10) {
      $(this).val($(this).val().substr(0, 10))
    }
  })
 $password.on("change paste keyup", function (ev) {
   if ($(this).val().length > 6) {
     $(this).val($(this).val().substr(0, 6))
   }
 })
 $confirmPassword.on("change paste keyup", function (ev) {
   if ($(this).val().length > 6) {
     $(this).val($(this).val().substr(0, 6))
   }
 })
 $password.keypress(function (ev) {
   var regex = new RegExp("^[a-zA-Z0-9]+$");
   var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
   if (regex.test(str)) {
     return true;
   }
   ev.preventDefault();
   return false;
 });
 $confirmPassword.keypress(function (ev) {
   var regex = new RegExp("^[a-zA-Z0-9]+$");
   var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
   if (regex.test(str)) {
     return true;
   }
   if(ev.keyCode == 13) {
    $updateOtpDiv.trigger('click');
   }
   ev.preventDefault();
   return false;
 });
 $otpValCheck.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
 $sixotp.on("change paste keyup", function (ev) {
    if ($(this).val().length > 6) {
      $(this).val($(this).val().substr(0, 6))
    }
  })
 $otpValCheck.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    if(ev.keyCode == 13) {
      $UpdateMobileNo.trigger('click');
    }
    ev.preventDefault();
    return false;
  });
 $sixotp.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    if(ev.keyCode == 13) {
      $UpdatePassword.trigger('click');
    }
    ev.preventDefault();
    return false;
  });

 $UpdatePassword.on('click', function (ev) {
      ev.preventDefault();
      var that = $(ev.target)
      var $password =  $id.find('#password').val();
      var $confirmPass = $id.find('#confirmPass').val();
if($password.length != 6){
      Materialize.toast("Length should be 6 Alphanumeric", 6000, "rounded");
    }
else {
    if($password != $confirmPass){
        Materialize.toast("password and confirm password not match Re-check", 6000, "rounded");
      } 
      else{
          var $otp = $id.find('#sixotp').val();
          if($otp.length != 6){
          Materialize.toast("Please Fill 6 Digit OTP", 6000, "rounded"); 
         }
          else{
              var data ={};
              var $aadharId = that.closest('body').find('.aadharId').text().split(':')[1];
              var $password =  $id.find('#password').val();
              data["aadharId"]=$aadharId;
              data["password"]= $password;
              data["otp"] =  $otp;
              app.utils.ajax.post("/resetPassword/post", {data: data}).then(function (item) {
                if (item.status == true) {
                  $otpChangePass.addClass('hide');
                  $updateOtpDiv.removeClass('hide');
                  $updatePassDiv.addClass('hide');
                  $newPassDiv.removeClass('hide');
                  $confirmPassDiv.removeClass('hide');
                  $id.find('#password').val('');
                  $id.find('#confirmPass').val('');
                   $(function () {
                     $('#myModalPassword').modal('toggle');
                  });
                  Materialize.toast("Password Changed successfully", 5000, "rounded")
                  return false;
                }
                else{
                  Materialize.toast("Incorrect OTP", 5000, "rounded");
                }
              },function(err){
                if(err.status == 401) {
                  Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
                  window.location.href = '/';
                }
              })
            }
        }
    }
})
$updateOtpDiv.on('click',function (ev) {
  ev.preventDefault()
  var that = $(ev.target)
  var $password =  $id.find('#password').val();
  var $confirmPass = $id.find('#confirmPass').val();
  if($password.length != 6){
    Materialize.toast("Length should be 6 Alphanumeric", 6000, "rounded");
    return
  }else if($password != $confirmPass){
    Materialize.toast("password and confirm password not match Re-check", 6000, "rounded");
    return;
  } 
   var aadharId = that.closest('body').find('.aadharId').text().split(':')[1];
   var dataObj={};
        dataObj["aadharId"] = aadharId;
        dataObj["sms"]=1;
        dataObj["call"]=0;
       app.utils.ajax.post("/forgotPassword/post", {data: dataObj}).then(function (item) {
        if (item.status == true) {
          Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
          $otpChangePass.removeClass('hide');
          $updateOtpDiv.addClass('hide');
          $updatePassDiv.removeClass('hide');
          $newPassDiv.addClass('hide');
          $confirmPassDiv.addClass('hide');
        }
      },function(err){
        if(err.status == 401) {
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = '/';
        }
      })
});

$sendOtp.on('click',function (ev) {
  ev.preventDefault()
  var that = $(ev.target)
   var aadharId = that.closest('body').find('.aadharId').text().split(':')[1];
   var dataObj={};
        dataObj["aadharId"] = aadharId;
        dataObj["sms"]=1;
        dataObj["call"]=0;
        var $phone = $id.find('#mobile').val();
        if(regexMobile.test($phone) && $phone.length == 10) {
         app.utils.ajax.post("/forgotPassword/post", {data: dataObj}).then(function (item) {
          if (item.status == true) {
            $otpDiv.removeClass('hide');
            $submitDiv.removeClass('hide');
            $sendOtpDiv.addClass('hide');
            Materialize.toast("OTP has been sent on your registered mobile", 6000, "rounded");
          }
        },function(err){
            if(err.status == 401) {
              Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
              window.location.href = '/';
            }
          })

        } else {
          Materialize.toast("Please Fill 10 Digit Mobile No in correct format", 6000, "rounded"); 
         
      }
});

$reSendOtpAgain.on('click',function(ev){
  ev.preventDefault()
  $sendOtp.trigger('click')
})

$UpdateMobileNo.on('click',function (ev) {
  ev.preventDefault()
    var that = $(ev.target)
    var data={};
    var $userId = that.closest('body').find('.userId').text();
    var $phone = $id.find('#mobile').val();
    var $otp = $id.find('#otp').val();
    data["id"]=$userId;
    data["mobile"]=$phone;
    data["otp"]=$otp;
     if($phone.length != 10) {
      Materialize.toast("Please Fill 10 Digit Mobile No", 6000, "rounded"); 
     }else{
      if($otp.length != 6){
        Materialize.toast("Please Fill 6 Digit OTP", 6000, "rounded"); 
      }
      else{
        app.utils.ajax.post("/update/post", {data: data}).then(function (item) {
          if (item.status == true) {
            $otpDiv.addClass('hide');
            $submitDiv.addClass('hide');
            $sendOtpDiv.removeClass('hide');
            $id.find('#mobile').val('');
            $(function () {
              $('#myModal').modal('toggle');
            });
            Materialize.toast("Mobile No updated successfully", 5000, "rounded")
            return false;
          }
        else{
          Materialize.toast("Incorrect OTP", 5000, "rounded")
        }
      },function(err){
        if(err.status == 401) {
          Materialize.toast('Your session has expired. Please log in again', 5000, "rounded")
          window.location.href = '/';
        }
      })
    }
  }
});

  if(($ifscDataValue == null || $ifscDataValue == 'null') && $adminCheck == 0) {
    $selectModal.removeClass('hide');
  }

  $ifcsSubmit.on('click',function (ev) {
    ev.preventDefault();
    var data = {};
    if($objecttypeData == 'COOPERATIVE') {
      pacValue = $ifscSelect.val();
      $ifscData.forEach(function (obj) {
        if(obj.pacName == pacValue) {
          
          data.ifscCode =  obj.ifscCode;
          data.bankId =  obj.bankId;
          data.bankName = obj.bankName;
          data.branchName =  obj.branchName;
          data.branchCode =  obj.branchCode;
          data.object_type =  obj.object_type
          data.pacName = obj.pacName;
        }
      })
    } else if($objecttypeData == 'COMMERCIAL') {
      ifscValue = $ifscSelect.val();
      $ifscData.forEach(function (obj) {
        if(obj.ifscCode == ifscValue) {
          
          data.ifscCode =  ifscValue;
          data.bankId =  obj.bankId;
          data.bankName = obj.bankName;
          data.branchName =  obj.branchName;
          data.branchCode =  obj.branchCode;
          data.object_type =  obj.object_type
          
        }
      })
    }
    if((ifscValue != '' && ifscValue != null) || (pacValue != '' && pacValue != null)) {
      $selectModal.addClass('hide');
    } else {
      $(".erroremptyIFSC").show();
      $(".erroremptyIFSC").fadeOut(9000);
      return false;
    }
    $objecttypeData == 'COOPERATIVE' ? $('.sessionIfsc').text(data.pacName) : $('.sessionIfsc').text(data.ifscCode)
    $('.sessionBranch').text(data.branchName)
    $('.sessionBank').text(data.bankName)
    $('.sessionIfsc').css('top','5px');
    $('.sessionBranch').css('top','5px');
    $('.sessionBank').css('top','5px');
    app.utils.ajax.post("/updateIfsc", {data:  data}).then(function (data) { 
      var welcomeId = $('.showKccModal').find('.welcomePanel')[0].id
      $('.showKccModal').find('.welcomePanel').data('session',data.userData)
      app.components.welcome($('#'+welcomeId));
    })
  })



}

app.components.final = function ($id) {
  var $aadharNumber = $id.find(".aadharNumberForm"),
    $bhamashaselection = $id.find(".bhamashaselection"),
    $aadharSelection = $id.find(".aadharSelection"),
    $farmersFirstName = $id.find(".farmersFirstName"),
    $farmerMobileNumber = $id.find(".farmerMobileNumber"),
    $farmersLastName = $id.find(".farmersLastName"),
    $bhamashahID = $id.find(".bhamashahID"),
    $fathersName = $id.find(".fathersName"),
    $radioGroup = $id.find(".radioGroupGender"),
    $verifyAadhar = $id.find(".verifyAadhar"),
    $farmerCaste = $id.find(".farmerCaste"),
    $autoFillBhamashah = $id.find(".bhamashahID"),
    $aadharNumberForm = $id.find(".aadharNumberForm"),
    //$verifyAadhar = $id.find(".verifyAadhar"),
    $farmersNameForm = $id.find(".farmersNameForm"),
    $collapsiblePanelHeader = $id.find(".collapsiblePanelHeaderPopup"),
    $verifyMSG = $id.find(".verifymsg"),
    $verifyMSGdone = $id.find(".verifyMsgRight"),
    $collapsiblePanel = $id.find(".collapsiblePanel");
  var $khataAreaWithUnit = $id.find('.khataAreaWithUnit');
  var $districtCrop = $id.find('.districtCrop');
  var $tehsilCrop = $id.find('.tehsilCrop');
  var $ILRCrop = $id.find('.ILRCrop');
  var $patwarCrop = $id.find('.patwarCrop');
  var $villageCrop = $id.find('.villageCrop');
  var $khasraHissa = $id.find('.khasraHissa');
  var $khataNumber = $id.find('.khataNumber');
  var $villageNameAuto = $id.find(".villageNameAuto");
  var $addAnotherCrop = $id.find(".addAnotherCrop");
  var $crop = $id.find(".crop");
  var $cropDetails = $id.find('.cropDetails');
  var $checkKhataNumber = $id.find('.checkKhataNumber');
  var $loader = $id.find('.loader');
  var $dh_R = $("#dh_R");
  var $bhamashaselection = $id.find('.bhamashaselection');
  var $removeFarmer = $id.find(".removeFarmer");
  var $errorAddAnotherCrop = $id.find(".errorAddAnotherCrop");
  var $removeKhata = $id.find(".remove-khata");
  var $customTrueAadhar = null;
  var $address = $id.find(".address");
  var $remainingFarmerArea = $id.find(".remaining-farmer-area");
  var $remainingCropArea = $id.find(".remaining-crop-area");
  var $uidInfo = $id.find(".uid-info");
  var $eidInfo = $id.find(".eid-info");
  var $bidInfo = $id.find(".bid-info");
  var $ackidInfo = $id.find(".ackid-info");
  var $updateKhata = $id.find(".updateKhata");
  $removeFarmer.click(function(ev) {
    ev.preventDefault();
    var farmerNum = $id.find(".farmerNum").text();
    farmerNum--;
    var template = "farmerTemplate_" + farmerNum;
    var $itemToRemove = $id.parent().find("." + template);
    var dataFarmer = $dh_R.data("farmer");
    var totalarea = $dh_R.data("totalarea");
    if(dataFarmer) {
      dataFarmer = JSON.parse(dataFarmer);
      dataFarmer.forEach(function (item) {
        if($aadharNumber.val().length == 14) {
          var aadharNumberForm = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];
        } else if($aadharNumber.val().length === 16) {
          var aadharNumberForm = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];
        }
        if (item.aadhar == aadharNumberForm) {
          totalarea -= item.remainingArea
        }
      })

    }
    $dh_R.data("totalarea", totalarea);
    $itemToRemove.prevObject.css("display", "none");
    $aadharNumber.val("");
    $bhamashahID.val("");
    $bhamashahID.removeAttr('disabled');
    $bhamashaselection.removeAttr('disabled');
    $aadharSelection.removeAttr('disabled');
    $remainingFarmerArea.html('');
    $farmersFirstName.val("");
    $farmersLastName.val("");
    $farmerMobileNumber.val("");
    $bhamashahID.val("");
    $fathersName.val("");
    $farmerCaste.val("");
    var genderRand = $radioGroup.data('genderrand');
    $radioGroup.find('#male'+genderRand).attr('checked',false);
    $radioGroup.find('#female'+genderRand).attr('checked',false);
    $radioGroup.find('#others'+genderRand).attr('checked',false);
    $aadharNumber.removeAttr("disabled");
    $farmersFirstName.removeAttr("disabled");
    $farmersLastName.removeAttr("disabled");
    $address.val("");
    $id.find('.customRight').css("display", "none");
    if ($customTrueAadhar != null) {
      $customTrueAadhar.css("display", "none");
    }
    farmerBlockTemplate[template] = false;
  })


 $khasraHissa.keypress(function (ev) {
    var regex = new RegExp("^([0-9]|/)*$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmersFirstName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $fathersName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmersLastName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
 $aadharNumberForm.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
/* $aadharNumberForm.on("change paste keyup", function (ev) {
    if ($(this).val().length > 14) {
      $(this).val($(this).val().substr(0, 14))
    }
  })*/

  $khataNumber.blur(function (ev) {

    console.log($(this).data("allow"), $(ev.relatedTarget).hasClass("checkKhataNumber"));
    if ($(this).data("allow") || $(ev.relatedTarget).hasClass("updateKhata") || $(ev.relatedTarget).hasClass("checkKhataNumber")) {
    } else {
      $khataNumber.focus()
      $(".errorKhataNumberBlur").show();
      $(".errorKhataNumberBlur").fadeOut(9000);
    }
  })

 $khataNumber.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
 $bhamashahID.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
 $farmerMobileNumber.keypress(function (ev) {
   var regex = new RegExp("^[0-9]+$");
   var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
   if (regex.test(str)) {
     return true;
   }
   ev.preventDefault();
   return false;
 });
 $farmerMobileNumber.blur(function (ev) {
  var regex = /^[7-9]+[0-9]{1,9}$/i;
  if (regex.test($(this).val()) && $(this).val().length == 10) {
   return true;
  } else {
    $farmerMobileNumber.focus();
    $(".errorMobileNo").show();
    $(".errorMobileNo").fadeOut(9000);
  }
 })

  $farmersFirstName.blur(function (ev) {
    if ($(this).val() !== "") {
      $farmersLastName.focus()
    } else {
      $farmersFirstName.focus()
      $(".errorFirstName").show();
      $(".errorFirstName").fadeOut(9000);
    }
  });

  $farmersLastName.blur(function (ev) {
    $aadharNumber.focus()
  });

  $aadharSelection.change(function (ev) {
    $aadharNumber.focus()
    $aadharNumber.val('');
    if ($aadharSelection.find("option:selected").val() == "UID") {
      $aadharNumber.attr("placeholder", "xxxx-xxxx-xxxx-xxxx");
      $eidInfo.addClass('hide');
      $uidInfo.removeClass('hide');
    } else {
      $aadharNumber.attr("placeholder", "xxxx-xxxxx-xxxxx");
      $eidInfo.removeClass('hide');
      $uidInfo.addClass('hide');
    }
  })


  $aadharNumberForm.keyup(function (ev) {
  })


  $aadharNumber.on("change paste keyup", function (ev) {
    var value = $(this).val();
    if ($aadharSelection.find("option:selected").val() == "UID") {
      var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
      if (value.length > 4 && value.substr(4,1) !== '-') {
        value = value.substr(0, 4) + "-" + value.substr(4, value.length)
      }
      if (value.length > 9 && value.substr(9,1) !== '-') {
        value = value.substr(0, 9) + "-" + value.substr(9, value.length)
      }
      if(value.length > 14) {
        $(this).val(value.substr(0,14))
      } else {
        $(this).val(value);
      }
    } else {
      if (value.length > 4 && value.substr(4,1) !== '-') {
        value = value.substr(0, 4) + "-" + value.substr(4, value.length)
      }
      if (value.length > 10 && value.substr(10,1) !== '-') {
        value = value.substr(0, 10) + "-" + value.substr(10, value.length)
      }
      if(value.length > 16) {
        $(this).val(value.substr(0,16))
      } else {
        $(this).val(value);
      }
    }
  })

  $bhamashaselection.change(function(){
    if ($bhamashaselection.val() == "BID") {
      $bhamashaselection.parent().parent().next().find('.bid-ackid').text('Bhamashah ID');
      $ackidInfo.addClass('hide');
      $bidInfo.removeClass('hide');
    } else {
       $bhamashaselection.parent().parent().next().find('.bid-ackid').text('ACK ID');
       $bidInfo.addClass('hide');
       $ackidInfo.removeClass('hide');
    }
  })

  $bhamashahID.on("change paste keyup", function (ev) {
    if ($bhamashaselection.find("option:selected").val() == "BID") {
      if ($(this).val().length > 7) {
        $(this).val($(this).val().substr(0, 7))
      }
    } else {
      var value = $(this).val();
      if (value.length > 4 && value.substr(4,1) !== '-') {
        value = value.substr(0, 4) + "-" + value.substr(4, value.length)
      }
      if (value.length > 9 && value.substr(9,1) !== '-') {
        value = value.substr(0, 9) + "-" + value.substr(9, value.length)
      }
      if(value.length > 15) {
        $(this).val(value.substr(0,15))
      } else {
        $(this).val(value);
      }
    }
  })

  $farmerMobileNumber.on("change paste keyup", function (ev) {
    if ($(this).val().length > 10) {
      $(this).val($(this).val().substr(0, 10))
    }
  })

  $address.on("change paste keyup", function (ev) {
    if ($(this).val().length > 255) {
      $(this).val($(this).val().substr(0, 255))
    }
  })
  
  $verifyAadhar.blur(function (ev) {
    ev.preventDefault()
    var prevAadhar = $aadharNumber.data("aadhar");
    var data={};
    if($aadharNumber.val().length == 14) {
      var aadharCard = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];
    } else if($aadharNumber.val().length === 16) {
      var aadharCard = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];  
    }
    data["aadharID"] = aadharCard;
    data["firstName"] = $farmersFirstName.val();
    data["lastName"] = $farmersLastName.val();
    if($farmersFirstName.val() == '') {
      $(".errorFirstName").show();
      $(".errorFirstName").fadeOut(9000); 
      return false
    }
    if ($aadharNumber.val().length === 14 || $aadharNumber.val().length === 16) {
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.post("/authAadhar/post", {data: data}).then(function (item) {
        $('#pluswrap-overlay').css('display','none');
        if(item && item.error == null) {

          if((item.data && item.data.aadharAuth) || $aadharNumber.val().length === 16) {
            if (item.data.aadharAuth || $aadharNumber.val().length === 16) {
              $customTrueAadhar = $id.find('.customTrueAadhar');
              $customTrueAadhar.css("display", "block");
              $aadharNumber.attr("disabled", "disabled");
              $aadharSelection.attr("disabled", "disabled");
              $farmersFirstName.attr("disabled", "disabled");
              $farmersLastName.attr("disabled", "disabled");
              $bhamashahID.attr("disabled", "disabled");
              $bhamashaselection.attr("disabled", "disabled");
              var remainingArea = 0;
              var totalarea = 0;
              if (typeof item.data.remainingArea == "undefined") {
                remainingArea = 7;
              } else {
                remainingArea = item.data.remainingArea
              }
              var dataFarmer = $dh_R.data("farmer");
              if (dataFarmer == "") {
                dataFarmer = [{
                  aadhar: aadharCard,
                  remainingArea: remainingArea
                }]
              } else {
                var flag = false;
                dataFarmer = JSON.parse(dataFarmer)

                dataFarmer = dataFarmer.map(function (item) {
                  if (item.aadhar == prevAadhar && prevAadhar !== aadharCard) {
                    item.remainingArea = 0;
                    return item;
                  }

                  if (prevAadhar == aadharCard && item.aadhar == prevAadhar) {
                    flag = true;
                    item.remainingArea = remainingArea;
                    return item;
                  }

                  if (item.aadhar == aadharCard) {
                    flag = true;
                    item.remainingArea = remainingArea;
                    return item;
                  } else {
                    return item;
                  }
                })

                if (!flag) {
                  dataFarmer.push({
                    aadhar: aadharCard,
                    remainingArea: remainingArea
                  })
                }
              }

              dataFarmer.forEach(function (item) {
                totalarea += item.remainingArea
              })
              dataFarmer.forEach(function (item) {
                if(item.aadhar == aadharCard) {
                  $remainingFarmerArea.html('Remaining Subsidized Area: ' + Math.round(item.remainingArea*10000)/10000 + ' Hectare')
                }
              })
              $dh_R.data("farmer", JSON.stringify(dataFarmer))
              $aadharNumber.data("aadhar", aadharCard)
              $dh_R.data("totalarea", totalarea);
              $("#step3").removeAttr("disabled")
              $(".districtCrop").removeAttr("disabled");
              $(".districtCrop *").removeAttr("disabled");
              $(".tehsilCrop").removeAttr("disabled");
              $(".tehsilCrop *").removeAttr("disabled");
              $(".ILRCrop").removeAttr("disabled");
              $(".ILRCrop *").removeAttr("disabled");
              $(".patwarCrop").removeAttr("disabled");
              $(".patwarCrop *").removeAttr("disabled");
              $(".villageCrop").removeAttr("disabled");
              $(".villageCrop *").removeAttr("disabled");
              $(".cropSelection").removeAttr("disabled");
              $(".cropSelection *").removeAttr("disabled");
            } else {
              $(".errorAadharAuth").show();
              $(".errorAadharAuth").fadeOut(9000);
              if ($aadharSelection.find("option:selected").val() == "UID") {
                $farmersFirstName.focus()
              }
            }
          } else {
            var dbData = {
              'aadhar':aadharCard
            }
            $('#pluswrap-overlay').css('display','block');
            app.utils.ajax.post("/aadhar/details", {data: dbData}).then(function (item) {
              $('#pluswrap-overlay').css('display','none');
              if(item.status) {
                var fullNameCheck = $farmersFirstName.val() + $farmersLastName.val();
                fullNameCheck = fullNameCheck.trim();
                var str = item.data.name;
                str = str.trim();
                if(str.toLowerCase() == fullNameCheck.toLowerCase()) {
                  $(".errorAadharDbSameName").show();
                  $(".errorAadharDbSameName").fadeOut(9000);
                  $farmersFirstName.focus()
                } else {
                  if(str.split(' ').length > 1) {
                    var rest = str.substring(0, str.lastIndexOf(" ") + 1);
                    var last = str.substring(str.lastIndexOf(" ") + 1, str.length);
                    $farmersFirstName.val(rest);
                    $farmersLastName.val(last);
                  } else {
                    $farmersFirstName.val(item.data.name);
                    $farmersLastName.val('');
                  }
                  $farmersFirstName.focus()
                  if(item.data.guardianName !== "" && item.data.guardianName != null) {
                    $fathersName.val(item.data.guardianName)
                  }
                  if(item.data.mobile !== "" && item.data.mobile != null) {
                    $farmerMobileNumber.val(item.data.guardianName)
                  }
                  $(".errorAadharDbDifferentName").show();
                  $(".errorAadharDbDifferentName").fadeOut(9000);
                }
              } else {
                $farmersFirstName.focus()
                //$(".errorAadharDb").children().children().eq(1).text(item.error)
                $(".errorAadharAuth").show();
                $(".errorAadharAuth").fadeOut(9000);
              }
            })
          }
        } else {
          $(".errorBackendError").show();
          $(".errorBackendError").fadeOut(9000);
        }
      },function(err){
        $('#pluswrap-overlay').css('display','none');
        if(err.status == 401) {
          $(".errorSession").show();
          $(".errorSession").fadeOut(9000); 
          window.location.href = "/userLogin";
        } else {
          $(".errorBackendError").show();
          $(".errorBackendError").fadeOut(9000);
        }
      })
    } else {
      if ($aadharSelection.find("option:selected").val() == "UID") {
        $aadharNumber.focus()
        $(".errorAadharSelectionDigit").show();
        $(".errorAadharSelectionDigit").fadeOut(9000);
      } else {
        $aadharNumber.focus()
        $(".errorAadharSelectionDigitEid").show();
        $(".errorAadharSelectionDigitEid").fadeOut(9000); 
      }
    }
  });



  // $cropDetails.find(".closeCropArea").css("display", "none")

  // if (maxcrop == 0) {
  //   $cropDetails.css("display", "none");
  // }

  $khasraHissa.focus(function (ev) {
    var focus = Number($id.data("focus"))
    if (!focus && ($(this).val() != "" && (!isNaN(Number($(this).val().split("/")[0])) && !isNaN(Number($(this).val().split("/")[1]))) )) {
      var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])
      var area = Number($id.data("remainingarea"))
      $id.data("area", area);
    }
  })


  var SubArea = function() {
    var subarea = 0
    var nonsubarea = 0
    var totalPremium = 0
    $("#premiumTable").find("tbody tr").each(function (index, item) {
      var $item = $(item);
      subarea += Number($item.find(".subArea").text())
      nonsubarea += Number($item.find(".nonSubArea").text())
      totalPremium += Number($item.find(".farmerPremium").text())
    })
    console.log(subarea, nonsubarea, totalPremium, "-----------------------")
    $("#premiumTableDiv").find(".totalSubArea").html("<strong>Total Area : "+ Math.round(Number(subarea + nonsubarea)*10000)/10000 +" Hect.</strong>")
    $("#premiumTableDiv").find(".totalNonSubArea").html("<strong>Total Farmer Share : "+ Math.round(totalPremium * 100)/100 +" Rupees.</strong>")
  }

  var zeroEverythingFunction = function () {
    $crop.each(function (index, item) {
      if ($(item).css("display") == "block") {
        $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($(item).find(".collapsiblePanelHeader").data("subarea")))
        $id.data("subarea", Number($id.data("subarea")) - Number($(item).find(".collapsiblePanelHeader").data("subarea")))
        $(item).find(".collapsiblePanelHeader").data("subarea", 0)
        $("#premiumTable").find("."+$(item).find(".cropArea").attr("id")).remove()
        $("#premiumTable").find("."+$(item).find(".cropArea1").attr("id")).remove()
        SubArea()
        $(item).find(".totalPremium").val("")
        $(item).find(".farmerPremium").val("")
      }
    })
    $crop.find(".cropArea").val("")
    $crop.find(".cropArea1").val("")
    $crop.find(".cropArea2").val("")
    $crop.find(".cropArea").attr("disabled", "disabled")
    $crop.find(".cropArea1").attr("disabled", "disabled")
    $crop.find(".cropArea2").attr("disabled", "disabled")
    $crop.find(".cropSelection").val("")
    $crop.find(".cropSelection").html("<option>CHOOSE CROP</option>")
    $crop.find(".areaUnitText").val("")
    $crop.find(".premiumPerHectare").val("")
    $crop.find(".totalPremium").val("")
    $crop.find(".farmerPremium").val("")
  }


  var zeroEverythingAboveCropFunction = function () {
    $khataNumber.val("");
    $khataAreaWithUnit.val("");
    $khasraHissa.val("");
    $khasraHissa.attr("disabled", "disabled");

    $id.data("remainingarea", 0)
    $id.data("area", 0)
    $id.data("subarea", 0)
    $id.data("areaunit", "")
    $id.data("convertor", 0)
    $id.data("areaConvertor", 0)
  }


  $khasraHissa.blur(function (ev) {
    if ($(this).val() === "" || $(this).val().indexOf("/") <= 0 || $(this).val().split("/").length != 2 || (Number($(this).val().split("/")[0]) > Number($(this).val().split("/")[1]) || (((isNaN(Number($(this).val().split("/")[0]))) && isNaN(Number($(this).val().split("/")[1])) || Number($(this).val().split("/")[1]) == 0))) || Number($(this).val().split("/")[0]) == 0) {
      $(this).focus();
      $(".errorHissaSelection").show();
      $(".errorHissaSelection").fadeOut(9000);
      return false;
    } else {
      var area = Number($id.data("totalarea"))
      var remainingArea = Number($id.data("remainingarea"))
      if($(this).val() != "") {
        var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])
        console.log(area, hissa, remainingArea, "--------------");
        if ($id.data("areaunit") == "Hectare") {
          area = area * hissa
          if (area > remainingArea) {
            area = remainingArea;
          }
        }
        if ($id.data("areaunit") == "Bigha-Biswa") {
          remainginAreaBiswa = Math.floor(remainingArea) * 20 + Math.round((remainingArea % 1) * 1000)/10
          areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
          areaBiswa = Math.floor((areaBiswa * hissa) * 10)/10
          if (areaBiswa > remainginAreaBiswa) {
            areaBiswa = remainginAreaBiswa;
          }
          area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
        }
      }

      $crop.each(function (index, item) {
        if ($(item).css("display") == "block") {
          $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($(item).find(".collapsiblePanelHeader").data("subarea")))
          $id.data("subarea", Number($id.data("subarea")) - Number($(item).find(".collapsiblePanelHeader").data("subarea")))
          $(item).find(".collapsiblePanelHeader").data("subarea", 0)
          $("#premiumTable").find("."+$(item).find(".cropArea").attr("id")).remove()
          $("#premiumTable").find("."+$(item).find(".cropArea1").attr("id")).remove()
          SubArea()
          $(item).find(".totalPremium").val("")
          $(item).find(".farmerPremium").val("")
        }
      })
      $crop.find(".cropArea").val("")
      $crop.find(".cropArea1").val("")
      $crop.find(".cropArea2").val("")
      if ($id.data("areaunit") == "Bigha-Biswa") {
        var bighaFirst = area.toString().split(".")[0];
        if(bighaFirst && bighaFirst.length < 2) {
          bighaFirst = "0" + bighaFirst;
        }
        if(!bighaFirst){
          bighaFirst = "00"
        }
        var bighaSecond = area.toString().split(".")[1];
        if(bighaSecond && bighaSecond.length < 2) {
          bighaSecond = bighaSecond + "00"
        }
        if(!bighaSecond){
          bighaSecond = "00"
        }
        var finalArea = bighaFirst + '-' + bighaSecond.substring(0, 2);
      } else {
        var finalArea = Math.round(area * 10000) / 10000;
      }
      $remainingCropArea.html('Insurable Remaining Area: ' + finalArea + ' ' +$id.data("areaunit"));
      $id.data("area", area)
    }
    $(this).siblings("label").addClass("label-up")
  })

  $districtCrop.change(function () {
    var $tehsilCrop = $id.find('select.tehsilCrop');
    var tehsils = $(this).find(":selected").data("tehsil");
    if (tehsils.length > 0) {
      var listOptions = "<option value='' selected=true>SELECT TEHSIL</option>";
      tehsils.forEach(function (item) {
        listOptions += "<option value="+ item.tehsil_id +">" + item.tehsil_name + "</option>";
      });
      $tehsilCrop.html(listOptions)
      $tehsilCrop.val("");
      $ILRCrop.val("");
      $patwarCrop.val("");
      $villageCrop.val("");
      $khataNumber.attr("disabled", "disabled");
      zeroEverythingAboveCropFunction();
      zeroEverythingFunction();
    }
  })

    /*$tehsilCrop.change(function () {
      var $ILRCrop = $id.find('select.ILRCrop');
      var tehsilID = $(this).find(":selected").val();
      if (tehsilID !== "") {
        app.utils.ajax.get('/tehsilData?tehsilID=' + tehsilID).then(function (result) {
          if (result.status) {
            var ILRCrop = "<option value='' selected=true>SELECT ILR</option>";
            result.data.forEach(function(tehsil) {
              tehsil.GirdawariKanoongo.forEach(function (item) {
                ILRCrop += "<option value="+ item.kanoongo_id +" data-kaanoongo='"+ JSON.stringify(item.GirdawariPatwar) + "'>" + item.kanoongo_name_hindi + "</option>";
              })
            })
            $ILRCrop.html(ILRCrop)
            $ILRCrop.val("");
            $patwarCrop.val("");
            $villageCrop.val("");
            $khataNumber.attr("disabled", "disabled");
            zeroEverythingAboveCropFunction();
            zeroEverythingFunction();
          }
        })
      }
    })

    $ILRCrop.change(function () {
      var $patwarCrop = $id.find('select.patwarCrop');
      var ILRCrop = $(this).find(":selected").data("kaanoongo");
      if (ILRCrop.length > 0) {

        var listOptions = "<option value='' selected=true>SELECT PATWAR</option>";
        ILRCrop.forEach(function (item) {
          listOptions += "<option value="+ item.patwar_id +" data-patwar='"+ JSON.stringify(item.GirdawariVillages) +"'>" + item.patwar_area_hindi + "</option>";
        });
        $patwarCrop.html(listOptions)
        $patwarCrop.val("");
        $villageCrop.val("");
        $khataNumber.attr("disabled", "disabled");
        zeroEverythingAboveCropFunction();
        zeroEverythingFunction();
    }

    })

    $patwarCrop.change(function () {
      var $villageCrop = $id.find('select.villageCrop');
      var patwar = $(this).find(":selected").data("patwar");
      if (patwar.length > 0) {
        var listOptions = "<option value='' selected=true>SELECT VILLAGE</option>";
        patwar.forEach(function (item) {
          listOptions += "<option value="+ item.village_id +">" + item.village_name + "</option>";
        });
        $villageCrop.html(listOptions)
        $villageCrop.val("");
        $khataNumber.attr("disabled", "disabled");
        zeroEverythingAboveCropFunction();
        zeroEverythingFunction();
      }
    })*/
    $tehsilCrop.change(function () {
      var $villageCrop = $id.find('select.villageCrop');
      var tehsilID = $(this).find(":selected").val();
      if (tehsilID !== "") {
        app.utils.ajax.get('/tehsilDataNew?tehsilID=' + tehsilID).then(function (result) {
          if (result.status) {
            var listOptions = "<option value='' selected=true>SELECT VILLAGE</option>";
            result.data.forEach(function(item) {
              listOptions += "<option value="+ item.village_id +">" + item.village_name + "</option>";
            })
            $villageCrop.html(listOptions)
            $villageCrop.val("");
            $khataNumber.attr("disabled", "disabled");
            zeroEverythingAboveCropFunction();
            zeroEverythingFunction();
          }
        },function(err){
          if(err.status == 401) {
            $(".errorSession").show();
            $(".errorSession").fadeOut(9000);
            window.location.href = "/userLogin";
          }
        })
        
      }
    })

    $villageCrop.change(function () {
      var village = $(this).find(":selected").val();
      if (village === "") {
        $khataNumber.attr("disabled", true)
      } else {
        $khataNumber.removeAttr("disabled")
        //$khataNumber.focus();
        zeroEverythingAboveCropFunction();
        zeroEverythingFunction()
      }
    })

  $farmersNameForm.on('input', function() {
    $farmersName.val($(this).val());
  })

  $collapsiblePanelHeader.on("click", function () {
    $collapsiblePanel.slideToggle();
  })
  
  $autoFillBhamashah.blur(function (ev) {
    ev.preventDefault();
    if ($bhamashahID.val().length === 7 || $bhamashahID.val().length === 15) {
      $loader.css("display", "block");
      app.utils.ajax.get('/farmerDetail/gb', {
        data: {
          id: $bhamashahID.val().toUpperCase()
        }
      }).then(function(data) {
        $loader.css("display", "none");
        $bhamashaselection.attr('disabled',true);
        if (data.status && data.data.length > 0) {
          $verifyAadhar.data("auto-fill", JSON.stringify(data.data));
          var listOptions = "<option value='' selected=true disabled>CHOOSE NAME</option>";
          data.data.forEach(function (item) {
            listOptions += "<option value='' >"+ item.nameEng[0] +"</option>";
          })
          var $modal = $("#myModal");
          var $farmerName = $modal.find(".farmerName");
          $modal.data("id", $id.attr("id"));
          $("body").addClass("modal-open")
          $modal.addClass("in").css("display", "block")
          $farmerName.html(listOptions)
          $aadharSelection.val("UID")
        } else if(data.error && data.error.toLowerCase() == 'bhamashah service not working') {
          $(".errorBIDService").show();
          $(".errorBIDService").fadeOut(9000);
        } else if(data.status && $bhamashaselection.find("option:selected").val() == "BID") {
          $(".errorBIDSelection").show();
          $(".errorBIDSelection").fadeOut(9000);
        } else if(data.status && $bhamashaselection.find("option:selected").val() == "ACKID"){
          $(".errorACKIDSelection").show();
          $(".errorACKIDSelection").fadeOut(9000);
        } else {
          $(".errorBIDService").show();
          $(".errorBIDService").fadeOut(9000);
        }
      },function(err){
        console.log('errrr',err)
        if(err.status == 401) {
          $(".errorSession").show();
          $(".errorSession").fadeOut(9000);
          window.location.href = "/userLogin";
        } else {
          $(".errorBIDService").show();
          $(".errorBIDService").fadeOut(9000);
        }
      });
    } else {
      if ($bhamashahID.val().length !== 0 && $bhamashaselection.find("option:selected").val() == "BID") {
        $(".errorBIDAadharSelection").show();
        $(".errorBIDAadharSelection").fadeOut(9000);
      } else if($bhamashahID.val().length !== 0 && $bhamashaselection.find("option:selected").val() == "ACKID") {
        $(".errorAckidAadharSelection").show();
        $(".errorAckidAadharSelection").fadeOut(9000); 
      }
    }
  });

  $checkKhataNumber.click(function (ev) {
    ev.preventDefault();
    if (!$khataNumber.prop("disabled")) {
      // if ($khataNumber.val() == "1") {
      //   $(".errorInvalidKhata").show();
      //   $(".errorInvalidKhata").fadeOut(9000);
      //   $khataNumber.focus();
      //   return false;
      // }
      if ($dh_R.data("farmer") == "") {
        $(".errorVerifyKhataSelection").show();
        $(".errorVerifyKhataSelection").fadeOut(9000);
        return false;
      }
      var loanDate = $id.parent().parent().parent().find('.date :input').val();
      if ($khataNumber.val() !== "") {
        if ($tehsilCrop.find(":selected").val() === "") {
          $(".errorTehsilSelection").show();
          $(".errorTehsilSelection").fadeOut(9000);
          $tehsilCrop.trigger( "change" );
          return false;
        }
        if ($villageCrop.find(":selected").val() === "") {
          $(".errorVillageSelection").show();
          $(".errorVillageSelection").fadeOut(9000);
          $villageCrop.trigger( "change" );
          return false;
        }
        if (loanDate === "") {
          $(".errorDateSelection").show();
          $(".errorDateSelection").fadeOut(9000);
          return false;
        }
        $('#pluswrap-overlay').css('display','block');
        // this will be shifted to button click
        var loanDateReplace = loanDate.replace(/\//g,'-');
        var finalDate = loanDateReplace.split('-').reverse().join('-') + ' 00:00:00'
        var dateJs = new Date(finalDate);
        var dateTime = dateJs.getTime();
        app.utils.ajax.get("/khataNotifDetails?villageID=" + $villageCrop.find(":selected").val() + "&khataNumber=" + parseInt($khataNumber.val())+'&loanDate='+dateTime).then(function (result) {
          $('#pluswrap-overlay').css('display','none');
          if (result.status) {
            $khataNumber.data("allow", true)
            $khasraHissa.val("")
            $khasraHissa.removeAttr("disabled")
            $khasraHissa.focus()

            $crop.each(function (index, itemCrop) {
              var $itemCrop = $(itemCrop);0
              var $cropArea = $itemCrop.find(".cropArea");
              var $cropArea1 = $itemCrop.find(".cropArea1");
              var $cropArea2 = $itemCrop.find(".cropArea2");
              var $totalPremium = $itemCrop.find(".totalPremium");
              var areaHectare = 0;
              $cropArea.val("")
              $totalPremium.val("")
              $cropArea1.val("")
              $cropArea2.val("")
              $itemCrop.find(".collapsiblePanelHeader").data("subarea", 0)
            })

            $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($id.data("subarea")))
            $id.data("remainingarea", result.data.remainingArea)
            $id.data("subarea", 0)
            $id.data("totalarea", result.data.area)
            $id.data("areaunit", result.data.areaUnit)
            $id.data("convertor", result.data.convertor)

            if (result.data.areaUnit == "Bigha-Biswa") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "none")
              $crop.find(".bighaTextbox").css("display", "block")
              $crop.find(".biswaTextbox").css("display", "block")
            }

            if (result.data.areaUnit == "Hectare") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "block")
              $crop.find(".bighaTextbox").css("display", "none")
              $crop.find(".biswaTextbox").css("display", "none")
            }

            var $cropSelection = $id.find("select.cropSelection");
            var $areaUnitText = $id.find(".areaUnitText");
            var $premiumPerHectare= $id.find(".premiumPerHectare");
            var $farmerPremium = $id.find(".farmerPremium");
            $khataAreaWithUnit.val(result.data.area + " " + result.data.areaUnit);
            if (result.data.cropNotification.length > 0) {
              // $crop.css("display", "none")
              $cropDetails.css("display", "block");
              $cropDetails.find(".closeCropArea").css("display", "none")

              $addAnotherCrop.data("maxcrop", result.data.cropNotification.length)
              $khataNumber.data("remainingarea", result.data.remainingArea)
              $khataNumber.data("areaunit", result.data.areaUnit)
              $khataNumber.data("convertor", result.data.convertor)
              var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
              result.data.cropNotification.forEach(function (item) {
                listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
              });
              $cropSelection.html(listOptions)
              $areaUnitText.val(result.data.areaUnit);
            }
          } else {
            $khataNumber.data("allow", false)
            $(".errorKhataSelection").show();
            $(".errorKhataSelection").fadeOut(9000);
            $khataNumber.focus();
            return false;
          }
        },function(err){
          if(err.status == 401) {
            $(".errorSession").show();
            $(".errorSession").fadeOut(9000);
            window.location.href = "/userLogin";
          }
        })
      }
    }
  })



  $updateKhata.on('click', function(ev) {
    ev.preventDefault();
    if ($khataNumber.val() == "" || $khataNumber.val() == 0) {
        $(".errorInvalidKhataEmpty").show();
        $(".errorInvalidKhataEmpty").fadeOut(9000);
        $khataNumber.focus();
        return false;
      }
    if (!$khataNumber.prop("disabled")) {
      var loanDate = $id.parent().parent().parent().find('.date :input').val();
      // if ($khataNumber.val() == "1") {
      //   $(".errorInvalidKhata").show();
      //   $(".errorInvalidKhata").fadeOut(9000);
      //   $khataNumber.focus();
      //   return false;
      // }
      if ($dh_R.data("farmer") == "") {
        $(".errorVerifyKhataSelection").show();
        $(".errorVerifyKhataSelection").fadeOut(9000);
        return false;
      }
      if ($khataNumber.val() !== "") {
        if ($tehsilCrop.find(":selected").val() === "") {
          $(".errorTehsilSelection").show();
          $(".errorTehsilSelection").fadeOut(9000);
          $tehsilCrop.trigger( "change" );
          return false;
        }
        if ($villageCrop.find(":selected").val() === "") {
          $(".errorVillageSelection").show();
          $(".errorVillageSelection").fadeOut(9000);
          $villageCrop.trigger( "change" );
          return false;
        }
        if (loanDate === "") {
          $(".errorDateSelection").show();
          $(".errorDateSelection").fadeOut(9000);
          return false;
        }
        $('#pluswrap-overlay').css('display','block');
        // this will be shifted to button click
        var loanDateReplace = loanDate.replace(/\//g,'-');

        app.utils.ajax.get("/newKhataNotifDetails?addressKey=" + $villageCrop.find(":selected").val() + "&khataNumber=" + parseInt($khataNumber.val()) + "&loanDate=" +loanDateReplace).then(function (result) {
          $('#pluswrap-overlay').css('display','none');
          if (result.status) {
            $khataNumber.data("allow", true)
            $khasraHissa.val("")
            $khasraHissa.removeAttr("disabled")
            $khasraHissa.focus()

            $crop.each(function (index, itemCrop) {
              var $itemCrop = $(itemCrop);0
              var $cropArea = $itemCrop.find(".cropArea");
              var $cropArea1 = $itemCrop.find(".cropArea1");
              var $cropArea2 = $itemCrop.find(".cropArea2");
              var $totalPremium = $itemCrop.find(".totalPremium");
              var areaHectare = 0;
              $cropArea.val("")
              $totalPremium.val("")
              $cropArea1.val("")
              $cropArea2.val("")
              $itemCrop.find(".collapsiblePanelHeader").data("subarea", 0)
            })

            $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($id.data("subarea")))
            $id.data("remainingarea", result.data.remainingArea)
            $id.data("subarea", 0)
            $id.data("totalarea", result.data.area)
            $id.data("areaunit", result.data.areaUnit)
            $id.data("convertor", result.data.convertor)

            if (result.data.areaUnit == "Bigha-Biswa") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "none")
              $crop.find(".bighaTextbox").css("display", "block")
              $crop.find(".biswaTextbox").css("display", "block")
            }

            if (result.data.areaUnit == "Hectare") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "block")
              $crop.find(".bighaTextbox").css("display", "none")
              $crop.find(".biswaTextbox").css("display", "none")
            }

            var $cropSelection = $id.find("select.cropSelection");
            var $areaUnitText = $id.find(".areaUnitText");
            var $premiumPerHectare= $id.find(".premiumPerHectare");
            var $farmerPremium = $id.find(".farmerPremium");
            $khataAreaWithUnit.val(result.data.area + " " + result.data.areaUnit);
            if (result.data.cropNotification.length > 0) {
              // $crop.css("display", "none")
              $cropDetails.css("display", "block");
              $cropDetails.find(".closeCropArea").css("display", "none")

              $addAnotherCrop.data("maxcrop", result.data.cropNotification.length)
              $khataNumber.data("remainingarea", result.data.remainingArea)
              $khataNumber.data("areaunit", result.data.areaUnit)
              $khataNumber.data("convertor", result.data.convertor)
              var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
              result.data.cropNotification.forEach(function (item) {
                listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
              });
              $cropSelection.html(listOptions)
              $areaUnitText.val(result.data.areaUnit);
            } 
          } else {
            $khataNumber.data("allow", false)
            $(".errorNewKhataSelection").show();
            $(".errorNewKhataSelection").fadeOut(9000);
            $khataNumber.focus();
            return false;
          }
        },function(err){
          if(err.status == 401) {
            $(".errorSession").show();
            $(".errorSession").fadeOut(9000);
            window.location.href = "/userLogin";
          }
        })
      }
    }
  })

  $addAnotherCrop.click(function (ev) {
    ev.preventDefault()
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {

      var openTemplateCount = 0;
      var latestClosedTemplate = null;

      $id.find(".crop").each(function () {
        if ($(this).css("display") == "block") {
          $.each($(this).attr("class").split(/\s+/), function(index, item) {
            if (item.indexOf("template") >= 0) {
              var item = Number(item.split("_")[1]) + 1;
              latestClosedTemplate = "template_" + item;
            }
          })
          openTemplateCount++;
        }
      })


      var currentTemplateValue = $id.find('.template_'+(openTemplateCount-1)).find('.cropSelection').val();
      if(currentTemplateValue == null && openTemplateCount > 0) {
        $errorAddAnotherCrop.show();
        $errorAddAnotherCrop.fadeOut(5000);
        return;
      }
      var bool = true;
      var countopen = (typeof $(this).data("countopen") == "undefined") ? 0 : $(this).data("countopen");
      if (countopen == 0) {
        countopen = 1;
      }
      var maxcrop = (typeof $(this).data("maxcrop") == "undefined") ? 0 : $(this).data("maxcrop");
      var $item;
      if (latestClosedTemplate == "template_0") {
        $item = $id.find("." + latestClosedTemplate);
      }
      else {
        var $item = $id.find("." + latestClosedTemplate);
      }
      if (maxcrop > openTemplateCount && maxcrop != 0) {
        if (openTemplateCount >= 2 )  {
          var $prevItem = $id.find(".template_"+(openTemplateCount - 1))
          $prevItem.find(".closeCropArea").css("display", "none")
        }
        $item.css("display", "block");
        $item.find(".cropArea").attr("disabled", 'disabled');
        $item.find(".cropArea1").attr("disabled", 'disabled');
        $item.find(".cropArea2").attr("disabled", 'disabled');
        $item.find(".cropSelection").val("");
        $(this).data("countopen", countopen + 1)
        cropRowTemplate[latestClosedTemplate] = true;
        $item.prev().find('.removeBtn').find('a').css('visibility','hidden');
        $item.prev().find('.cropSelection').attr('disabled','true')
        $item.prev().find('.cropArea').attr('disabled','true')
        $item.prev().find('.cropArea1').attr('disabled','true')
        $item.prev().find('.cropArea2').attr('disabled','true')

      } else {
        $(".errorAddCropSelection").show();
        $(".errorAddCropSelection").fadeOut(9000);
      }
      var preiviousCNID = []
      for(var i = 0; i < openTemplateCount; i++) {
        preiviousCNID.push($id.find('.template_'+i).find('.cropSelection').val())
      }
      var newOpen = openTemplateCount;
      for(var i = 0; i < preiviousCNID.length; i++) {
        var x = preiviousCNID[i]
        $id.find('.template_'+openTemplateCount+' '+'.cropSelection option').each(function() {
          if ( $(this).val() == x ) {
            $(this).remove();
          }
        });
      }
    } else {
      $(".errorCropArea1").show();
      $(".errorCropArea1").fadeOut(9000);
    }
  })


}
$(".bhamashapopup").click(function (ev) {
  var $modal = $("#myModal");
  var $farmerName = $modal.find(".farmerName");
  var id = $modal.data("id");
  var $id = $("#" + id);
  var $farmersFirstName = $id.find(".farmersFirstName");
  var $fathersName = $id.find(".fathersName");
  var $farmerCaste = $id.find(".farmerCaste");
  var $radioGroup = $id.find(".radioGroupGender");
  var $farmersLastName = $id.find(".farmersLastName");
  var $farmerMobileNumber = $id.find(".farmerMobileNumber");
  var $aadharNumber = $id.find(".aadharNumberForm");
  var $verifyAadhar = $id.find(".verifyAadhar");
  var bhamashahData = JSON.parse($verifyAadhar.data("auto-fill"));


  var selectedName = $farmerName.find(":selected").text();
  if (selectedName != "CHOOSE NAME") {
    $("body").removeClass("modal-open")
    $modal.removeClass("in").css("display", "none")
    bhamashahData.forEach(function (item) {
      if (item.nameEng[0] == selectedName) {
        $farmerMobileNumber.val(item.mobile[0])
        var value = item.aadharID[0];
        if (value.length > 4 && value.substr(4,1) !== '-') {
          value = value.substr(0, 4) + "-" + value.substr(4, value.length)
        }
        if (value.length > 9 && value.substr(9,1) !== '-') {
          value = value.substr(0, 9) + "-" + value.substr(9, value.length)
        }
        $aadharNumber.val(value)
        $fathersName.val(item.fatherNameEng[0])
        // $farmerCaste.select('destroy');
        $farmerCaste.val(item.caste[0])
        // $farmerCaste.select();
        if (item.gender[0] == "Female") {
          $radioGroup.find("input")[1].checked = true
        } else if (item.gender[0] == "Male") {
          $radioGroup.find("input")[0].checked = true
        }
      }
    })

    $aadharNumber.focus();
    if(selectedName.trim().split(' ').length > 1) {
      $farmersFirstName.val(selectedName.substr(0, selectedName.lastIndexOf(" ")));
      $farmersLastName.val(selectedName.substr(selectedName.lastIndexOf(" "), selectedName.length - selectedName.lastIndexOf(" ")).trim());
    } else {
      $farmersFirstName.val(selectedName)
    }
    $id.find('.customRight').css("display", "block");
    $id.find('.bhamashahID').attr('disabled','disabled');
    $id.find('.bhamashaselection').attr('disabled','disabled');
    return false;
  } else {
    $(".errorNameSelection").show();
    $(".errorNameSelection").fadeOut(9000);
    return false;
  }
})
app.components.finalNonlonee = function ($id) {
  var $aadharNumber = $id.find(".aadharNumberForm"),
    $bhamashaselection = $id.find(".bhamashaselection"),
    $aadharSelection = $id.find(".aadharSelection"),
    $farmersFirstName = $id.find(".farmersFirstName"),
    $farmerMobileNumber = $id.find(".farmerMobileNumber"),
    $farmersLastName = $id.find(".farmersLastName"),
    $bhamashahID = $id.find(".bhamashahID"),
    $fathersName = $id.find(".fathersName"),
    $radioGroup = $id.find(".radioGroupGender"),
    $verifyAadhar = $id.find(".verifyAadhar"),
    $farmerCaste = $id.find(".farmerCaste"),
    $autoFillBhamashah = $id.find(".bhamashahID"),
    $aadharNumberForm = $id.find(".aadharNumberForm"),
    //$verifyAadhar = $id.find(".verifyAadhar"),
    $farmersNameForm = $id.find(".farmersNameForm"),
    $collapsiblePanelHeader = $id.find(".collapsiblePanelHeaderPopup"),
    $verifyMSG = $id.find(".verifymsg"),
    $verifyMSGdone = $id.find(".verifyMsgRight"),
    $collapsiblePanel = $id.find(".collapsiblePanel");
  var $khataAreaWithUnit = $id.find('.khataAreaWithUnit');
  var $districtCrop = $id.find('.districtCrop');
  var $tehsilCrop = $id.find('.tehsilCrop');
  var $ILRCrop = $id.find('.ILRCrop');
  var $patwarCrop = $id.find('.patwarCrop');
  var $villageCrop = $id.find('.villageCrop');
  var $khasraHissa = $id.find('.khasraHissa');
  var $khataNumber = $id.find('.khataNumber');
  var $updateKhata = $id.find(".updateKhata");
  var $villageNameAuto = $id.find(".villageNameAuto");
  var $addAnotherCrop = $id.find(".addAnotherCrop");
  var $crop = $id.find(".crop");
  var $cropDetails = $id.find('.cropDetails');
  var $checkKhataNumber = $id.find('.checkKhataNumber');
  var $loader = $id.find('.loader');
  var $dh_R = $("#dh_R");
  var $bhamashaselection = $id.find('.bhamashaselection');
  //var $removeFarmer = $id.find(".removeFarmer");
  var $errorAddAnotherCrop = $id.find(".errorAddAnotherCrop");
  var $removeKhata = $id.find(".remove-khata");
  var $customTrueAadhar = null;
  var $address = $id.find(".address");
  var $jamabandiFileName = $id.find(".jamabandiFileName");
  var $jamabandiFile = $id.find(".jamabandi");
  var $uploadJamabandi = $id.find(".uploadJamabandi");
  var $girdawariFileName = $id.find(".girdawariFileName");
  var $girdawariFile = $id.find(".gCertificate");
  var $uploadGCertificate = $id.find(".uploadGCertificate");
  var $jamabandiUploadTick = $id.find(".jamabandiUploadTick");
  var $girdawariUploadTick = $id.find(".girdawariUploadTick");
  var $remainingFarmerArea = $id.find(".remaining-farmer-area");
  var $remainingCropArea = $id.find(".remaining-crop-area");
  var userSession = $id.data('usersession')
  var $uidInfo = $id.find(".uid-info");
  var $eidInfo = $id.find(".eid-info");
  var $bidInfo = $id.find(".bid-info");
  var $ackidInfo = $id.find(".ackid-info");
  var $bIDStar = $id.find(".bIDStar");
  var bhamashahCheckFlag = false;

  $jamabandiFileName.change(function (ev) {
    if ($jamabandiUploadTick.css("display") == "block") {
      $jamabandiUploadTick.css("display", "none");
      $jamabandiFile.data("imageID", null);
      $jamabandiFileName.parent().find('span').text('Browse')
    }
    $uploadJamabandi.trigger('click');
    $jamabandiFile.val(app.utils.getFileNameFromPath($jamabandiFileName.val()));
  });

  $girdawariFileName.change(function (ev) {
    if ($girdawariUploadTick.css("display") == "block") {
      $girdawariUploadTick.css("display", "none");
      $girdawariFile.data("imageID", null);
      $girdawariFileName.parent().find('span').text('Browse')
    }
    $uploadGCertificate.trigger('click');
    $girdawariFile.val(app.utils.getFileNameFromPath($girdawariFileName.val()));
  })


  $uploadJamabandi.click(function (ev) {
    ev.preventDefault();
    if ($jamabandiFileName.val() == null || $jamabandiFileName.val().length == 0 || $jamabandiFileName.val() == "") {
      $(".errorFileNotSelected").show();
      $(".errorFileNotSelected").fadeOut(9000);
      return false;
    }
    var file = $jamabandiFileName.prop("files")[0];
    if (file.size > 300000) {
      $(".errorFileSize").show();
      $(".errorFileSize").fadeOut(9000);
      return false;
    }
    if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "application/pdf") {
      $('#pluswrap-overlay').css('display','block');
      var form = new FormData();
      form.append('file', file);
      form.append('docType','JAMABANDI');
      app.utils.ajax.post("/uploadDocumentFile", {
        data: form,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
      }).then(function (data) {
        data = JSON.parse(data);
        if (data.status) {
          console.log("data from image j upload", data);
          $jamabandiFile.data("imageID", data.data);
          $jamabandiUploadTick.css("display", "block");
          $('#pluswrap-overlay').css('display','none');
          $jamabandiFileName.parent().find('span').text('Edit');
        } else {
          $(".errorFileUpload").show();
          $(".errorFileUpload").fadeOut(9000);
          $('#pluswrap-overlay').css('display','none');
          return false;
        }
      })
    }
    else {
      $(".errorFileType").show();
      $(".errorFileType").fadeOut(9000);
      return false;
    }
  });

  $uploadGCertificate.click(function (ev) {
    ev.preventDefault();
    if ($girdawariFileName.val() == null || $girdawariFileName.val().length == 0 || $girdawariFileName.val() == "") {
      $(".errorFileNotSelected").show();
      $(".errorFileNotSelected").fadeOut(9000);
      return false;
    }
    var file = $girdawariFileName.prop("files")[0];
    if (file.size > 300000) {
      $(".errorFileSize").show();
      $(".errorFileSize").fadeOut(9000);
      return false;
    }
    if (file.type == "image/jpeg" || file.type == "image/png" || file.type == "application/pdf") {
      $('#pluswrap-overlay').css('display','block');
      var form = new FormData();
      form.append('file', file);
      form.append('docType','GIRDAWARI');
      app.utils.ajax.post("/uploadDocumentFile", {
        data: form,
        processData: false,
        contentType: false,
        mimeType: "multipart/form-data"
      }).then(function (data) {
        data = JSON.parse(data);
        if (data.status) {
          console.log("data from image g upload", data);
          $girdawariFile.data("imageID", data.data)
          $girdawariUploadTick.css("display", "block");
          $('#pluswrap-overlay').css('display','none');
          $girdawariFileName.parent().find('span').text('Edit')
        } else {
          $(".errorFileUpload").show();
          $(".errorFileUpload").fadeOut(9000);
          $('#pluswrap-overlay').css('display','none');
          return false;
        }
      })
    }
    else {
      $(".errorFileType").show();
      $(".errorFileType").fadeOut(9000);
      return false;
    }
  });

  /*$removeFarmer.click(function(ev) {
    ev.preventDefault();
    var farmerNum = $id.find(".farmerNum").text();
    farmerNum--;
    var template = "farmerTemplate_" + farmerNum;
    var $itemToRemove = $id.parent().find("." + template);
    var dataFarmer = $dh_R.data("farmer");
    var totalarea = $dh_R.data("totalarea");
    if(dataFarmer) {
      dataFarmer = JSON.parse(dataFarmer);
      dataFarmer.forEach(function (item) {
        if($aadharNumber.val().length == 14) {
          console.log('uuuid')
          var aadharNumberForm = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];
        } else if($aadharNumber.val().length === 31) {
          console.log('eeeeeid')
          var aadharNumberForm = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2] + + $aadharNumber.val().split("-")[3];
        }
        if (item.aadhar == aadharNumberForm) {
          totalarea -= item.remainingArea
        }
      })

    }
    $dh_R.data("totalarea", totalarea);
    $itemToRemove.prevObject.css("display", "none");
    $aadharNumber.val("");
    $bhamashahID.val("");
    $farmersFirstName.val("");
    $farmersLastName.val("");
    $farmerMobileNumber.val("");
    $bhamashahID.val("");
    $fathersName.val("");
    $farmerCaste.val("");
    var genderRand = $radioGroup.data('genderrand');
    $radioGroup.find('#male'+genderRand).attr('checked',false);
    $radioGroup.find('#female'+genderRand).attr('checked',false);
    $aadharNumber.removeAttr("disabled");
    $farmersFirstName.removeAttr("disabled");
    $farmersLastName.removeAttr("disabled");
    $address.val("");
    $id.find('.customRight').css("display", "none");
    if ($customTrueAadhar != null) {
      $customTrueAadhar.css("display", "none");
    }
    farmerBlockTemplate[template] = false;
  })
*/
  $khasraHissa.keypress(function (ev) {
    var regex = new RegExp("^([0-9]|/)*$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmersFirstName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $fathersName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z ]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmersLastName.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $aadharNumberForm.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  /* $aadharNumberForm.on("change paste keyup", function (ev) {
   if ($(this).val().length > 14) {
   $(this).val($(this).val().substr(0, 14))
   }
   })*/
  $khataNumber.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $bhamashahID.keypress(function (ev) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmerMobileNumber.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });
  $farmerMobileNumber.blur(function (ev) {
    var regex = /^[7-9]+[0-9]{1,9}$/i;
    if (regex.test($(this).val()) && $(this).val().length == 10) {
      return true;
    } else {
      $farmerMobileNumber.focus();
      $(".errorMobileNo").show();
      $(".errorMobileNo").fadeOut(9000);
    }
  })

  $farmersFirstName.blur(function (ev) {
    if ($(this).val() !== "") {
      //$farmersLastName.focus()
    } else {
      //$farmersFirstName.focus()
      //$(".errorFirstName").show();
      //$(".errorFirstName").fadeOut(9000);
    }
  });

  $farmersLastName.blur(function (ev) {
    $aadharNumber.focus()
  });

  $aadharSelection.change(function (ev) {
    $aadharNumber.focus()
    $aadharNumber.val('');
    if ($aadharSelection.find("option:selected").val() == "UID") {
      $aadharNumber.attr("placeholder", "xxxx-xxxx-xxxx-xxxx");
      $eidInfo.addClass('hide');
      $uidInfo.removeClass('hide');
    } else {
      $aadharNumber.attr("placeholder", "xxxxxxx-xxxxxxx-xxxxxxx-xxxxxxx");
      $eidInfo.removeClass('hide');
      $uidInfo.addClass('hide');
    }
  })


  $aadharNumberForm.keyup(function (ev) {
  })


  $aadharNumber.on("change paste keyup", function (ev) {
    var value = $(this).val();
    if ($aadharSelection.find("option:selected").val() == "UID") {
      var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
      if (value.length > 4 && value.substr(4,1) !== '-') {
        value = value.substr(0, 4) + "-" + value.substr(4, value.length)
      }
      if (value.length > 9 && value.substr(9,1) !== '-') {
        value = value.substr(0, 9) + "-" + value.substr(9, value.length)
      }
      if(value.length > 14) {
        $(this).val(value.substr(0,14))
      } else {
        $(this).val(value);
      }
    } else {
      if (value.length > 7 && value.substr(7,1) !== '-') {
        value = value.substr(0, 7) + "-" + value.substr(7, value.length)
      }
      if (value.length > 15 && value.substr(15,1) !== '-') {
        value = value.substr(0, 15) + "-" + value.substr(15, value.length)
      }
      if (value.length > 23 && value.substr(23,1) !== '-') {
        value = value.substr(0, 23) + "-" + value.substr(23, value.length)
      }
      if(value.length > 31) {
        $(this).val(value.substr(0,31))
      } else {
        $(this).val(value);
      }
    }
  })

  $bhamashaselection.change(function(){
    $bhamashahID.val('')
    if ($bhamashaselection.val() == "BID") {
      $bhamashaselection.parent().parent().next().find('.bid-ackid').text('Bhamashah ID');
      $ackidInfo.addClass('hide');
      $bidInfo.removeClass('hide');
      $bIDStar.css("right", "42px")
      $bhamashahID.attr("placeholder", "xxxxxxx")
    } else {
      $bhamashaselection.parent().parent().next().find('.bid-ackid').text('ACKID');
      $bidInfo.addClass('hide');
      $ackidInfo.removeClass('hide');
      $bIDStar.css("right", "100px")
      $bhamashahID.attr("placeholder", "xxxx-xxxx-xxxxx")  
    }
  })

  $bhamashahID.on("change paste keyup", function (ev) {
    if ($bhamashaselection.find("option:selected").val() == "BID") {
      if ($(this).val().length > 7) {
        $(this).val($(this).val().substr(0, 7))
      }
    } else {
      var value = $(this).val();
      if (value.length > 4 && value.substr(4,1) !== '-') {
        value = value.substr(0, 4) + "-" + value.substr(4, value.length)
      }
      if (value.length > 9 && value.substr(9,1) !== '-') {
        value = value.substr(0, 9) + "-" + value.substr(9, value.length)
      }
      if(value.length > 15) {
        $(this).val(value.substr(0,15))
      } else {
        $(this).val(value);
      }
    }
  })

  $farmerMobileNumber.on("change paste keyup", function (ev) {
    if ($(this).val().length > 10) {
      $(this).val($(this).val().substr(0, 10))
    }
  })

  $address.on("change paste keyup", function (ev) {
    if ($(this).val().length > 255) {
      $(this).val($(this).val().substr(0, 255))
    }
  })

  $verifyAadhar.focus(function() {
    if(!bhamashahCheckFlag) {
      if($bhamashaselection.find("option:selected").val() == "BID") {
        $(".errorBIDSelection").show();
        $(".errorBIDSelection").fadeOut(9000);
      } else {
        $(".errorAckidAadharSelection").show();
        $(".errorAckidAadharSelection").fadeOut(9000);
      }
      $bhamashahID.focus();
    }
  })

  $verifyAadhar.blur(function (ev) {
    ev.preventDefault()
    var prevAadhar = $aadharNumber.data("aadhar");
    var data={};
    if($aadharNumber.val().length == 14) {
      var aadharCard = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2];
    } else if($aadharNumber.val().length === 31) {
      var aadharCard = $aadharNumber.val().split("-")[0] + $aadharNumber.val().split("-")[1] + $aadharNumber.val().split("-")[2] + $aadharNumber.val().split("-")[3];
    }
    data["aadharID"] = aadharCard;
    data["firstName"] = $farmersFirstName.val();
    data["lastName"] = $farmersLastName.val();
    if($farmersFirstName.val() == '') {
      $(".errorFirstName").show();
      $(".errorFirstName").fadeOut(9000); 
      return false
    }
    if ($aadharNumber.val().length === 14 || $aadharNumber.val().length === 31) {
      $('#pluswrap-overlay').css('display','block');
      app.utils.ajax.post("/authAadhar/post", {data: data}).then(function (item) {
        $('#pluswrap-overlay').css('display','none');
        if(item && item.error == null) {
          if (item.data && item.data.aadharAuth) {
            if (item.data.aadharAuth || $aadharNumber.val().length === 31) {
              $customTrueAadhar = $id.find('.customTrueAadhar');
              $customTrueAadhar.css("display", "block");
              $aadharNumber.attr("disabled", "disabled");
              $aadharSelection.attr("disabled", "disabled");
              $farmersFirstName.attr("disabled", "disabled");
              $farmersLastName.attr("disabled", "disabled");
              var remainingArea = 0;
              var totalarea = 0;
              if (typeof item.data.remainingArea == "undefined") {
                remainingArea = 7;
              } else {
                remainingArea = item.data.remainingArea
              }
              var dataFarmer = $dh_R.data("farmer");
              if (dataFarmer == "") {
                dataFarmer = [{
                  aadhar: aadharCard,
                  remainingArea: remainingArea
                }]
              } else {
                var flag = false;
                dataFarmer = JSON.parse(dataFarmer)

                dataFarmer = dataFarmer.map(function (item) {
                  if (item.aadhar == prevAadhar && prevAadhar !== aadharCard) {
                    item.remainingArea = 0;
                    return item;
                  }

                  if (prevAadhar == aadharCard && item.aadhar == prevAadhar) {
                    flag = true;
                    item.remainingArea = remainingArea;
                    return item;
                  }

                  if (item.aadhar == aadharCard) {
                    flag = true;
                    item.remainingArea = remainingArea;
                    return item;
                  } else {
                    return item;
                  }
                })

                if (!flag) {
                  dataFarmer.push({
                    aadhar: aadharCard,
                    remainingArea: remainingArea
                  })
                }
              }

              dataFarmer.forEach(function (item) {
                totalarea += item.remainingArea
              })
              dataFarmer.forEach(function (item) {
                if(item.aadhar == aadharCard) {
                  $remainingFarmerArea.html('Remaining Subsidized Area: ' + Math.round(item.remainingArea*10000)/10000 + ' hectare')
                }
              })
              $dh_R.data("farmer", JSON.stringify(dataFarmer))
              $aadharNumber.data("aadhar", aadharCard)
              $dh_R.data("totalarea", totalarea);
              $(".jamabandiSpan").removeAttr("disabled");
              $(".jamabandiFileName").removeAttr("disabled");
              $(".girdawariSpan").removeAttr("disabled");
              $(".girdawariFileName").removeAttr("disabled");
              $(".uploadJamabandi").removeAttr("disabled");
              $(".uploadGCertificate").removeAttr("disabled");
              $("#step3").removeAttr("disabled")
              $(".districtCrop").removeAttr("disabled");
              $(".districtCrop *").removeAttr("disabled");
              $(".tehsilCrop").removeAttr("disabled");
              $(".tehsilCrop *").removeAttr("disabled");
              $(".ILRCrop").removeAttr("disabled");
              $(".ILRCrop *").removeAttr("disabled");
              $(".patwarCrop").removeAttr("disabled");
              $(".patwarCrop *").removeAttr("disabled");
              $(".villageCrop").removeAttr("disabled");
              $(".villageCrop *").removeAttr("disabled");
              $(".cropSelection").removeAttr("disabled");
              $(".cropSelection *").removeAttr("disabled");
            } else {
              $(".errorAadharAuth").show();
              $(".errorAadharAuth").fadeOut(9000);
              if ($aadharSelection.find("option:selected").val() == "UID") {
                $farmersFirstName.focus()
              }
            }
          } else {
            var dbData = {
              'aadhar':aadharCard
            }
            $('#pluswrap-overlay').css('display','block');
            app.utils.ajax.post("/aadhar/details", {data: dbData}).then(function (item) {
              $('#pluswrap-overlay').css('display','none');
              if(item.status) {
                var fullNameCheck = $farmersFirstName.val() + $farmersLastName.val();
                fullNameCheck = fullNameCheck.trim();
                var str = item.data.name;
                str = str.trim();
                if(str.toLowerCase() == fullNameCheck.toLowerCase()) {
                  $(".errorAadharDbSameName").show();
                  $(".errorAadharDbSameName").fadeOut(9000);
                  $farmersFirstName.focus()
                } else {
                  if(str.split(' ').length > 1) {
                    var rest = str.substring(0, str.lastIndexOf(" ") + 1);
                    var last = str.substring(str.lastIndexOf(" ") + 1, str.length);
                    $farmersFirstName.val(rest);
                    $farmersLastName.val(last);
                  } else {
                    $farmersFirstName.val(item.data.name);
                    $farmersLastName.val('');
                  }
                  $farmersFirstName.focus()
                  if(item.data.guardianName !== "" && item.data.guardianName != null) {
                    $fathersName.val(item.data.guardianName)
                  }
                  if(item.data.mobile !== "" && item.data.mobile != null) {
                    $farmerMobileNumber.val(item.data.guardianName)
                  }
                  $(".errorAadharDbDifferentName").show();
                  $(".errorAadharDbDifferentName").fadeOut(9000);
                }
              } else {
                $farmersFirstName.focus()
                //$(".errorAadharDb").children().children().eq(1).text(item.error)
                $(".errorAadharAuth").show();
                $(".errorAadharAuth").fadeOut(9000);
              }
            })
          }
        } else {
          $(".errorBackendError").show();
          $(".errorBackendError").fadeOut(9000);
        }  
      },function(err){
        $('#pluswrap-overlay').css('display','none');
        if(err.status == 401) {
          $(".errorSession").show();
          $(".errorSession").fadeOut(9000);
          window.location.href = userSession.userData.RETURNURL;
        } else {
          $(".errorBackendError").show();
          $(".errorBackendError").fadeOut(9000);
        }
      })
    } else {
      if ($aadharSelection.find("option:selected").val() == "UID") {
        if(bhamashahCheckFlag) {
          $aadharNumber.focus()
          $(".errorAadharSelectionDigit").show();
          $(".errorAadharSelectionDigit").fadeOut(9000);
        }
      } else {
        if(bhamashahCheckFlag) {
          $aadharNumber.focus()
          $(".errorAadharSelectionDigitEid").show();
          $(".errorAadharSelectionDigitEid").fadeOut(9000);
        }
      }
    }
  });



  // $cropDetails.find(".closeCropArea").css("display", "none")

  // if (maxcrop == 0) {
  //   $cropDetails.css("display", "none");
  // }

  $khasraHissa.focus(function (ev) {
    var focus = Number($id.data("focus"))
    if (!focus && ($(this).val() != "" && (!isNaN(Number($(this).val().split("/")[0])) && !isNaN(Number($(this).val().split("/")[1]))) )) {
      var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])
      var area = Number($id.data("remainingarea"))
      $id.data("area", area);
    }
  })


  var SubArea = function() {
    var subarea = 0
    var nonsubarea = 0
    var totalPremium = 0
    $("#premiumTable").find("tbody tr").each(function (index, item) {
      var $item = $(item);
      subarea += Number($item.find(".subArea").text())
      nonsubarea += Number($item.find(".nonSubArea").text())
      totalPremium += Number($item.find(".farmerPremium").text())
    })
    console.log(subarea, nonsubarea, totalPremium, "-----------------------")
    $("#premiumTableDiv").find(".totalSubArea").html("<strong>Total Area : "+ Math.round(Number(subarea + nonsubarea)*10000)/10000 +" Hect.</strong>")
    $("#premiumTableDiv").find(".totalNonSubArea").html("<strong>Total Premium : "+ Math.round(totalPremium * 100)/100 +" Rupees.</strong>")
  }

  var zeroEverythingFunction = function () {
    $crop.each(function (index, item) {
      if ($(item).css("display") == "block") {
        $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($(item).find(".collapsiblePanelHeader").data("subarea")))
        $id.data("subarea", Number($id.data("subarea")) - Number($(item).find(".collapsiblePanelHeader").data("subarea")))
        $(item).find(".collapsiblePanelHeader").data("subarea", 0)
        $("#premiumTable").find("."+$(item).find(".cropArea").attr("id")).remove()
        $("#premiumTable").find("."+$(item).find(".cropArea1").attr("id")).remove()
        SubArea()
        $(item).find(".totalPremium").val("")
        $(item).find(".farmerPremium").val("")
      }
    })
    $crop.find(".cropArea").val("")
    $crop.find(".cropArea1").val("")
    $crop.find(".cropArea2").val("")
    $crop.find(".cropArea").attr("disabled", "disabled")
    $crop.find(".cropArea1").attr("disabled", "disabled")
    $crop.find(".cropArea2").attr("disabled", "disabled")
    $crop.find(".cropSelection").val("")
    $crop.find(".areaUnitText").val("")
    $crop.find(".premiumPerHectare").val("")
    $crop.find(".totalPremium").val("")
    $crop.find(".farmerPremium").val("")
  }


  var zeroEverythingAboveCropFunction = function () {
    $khataNumber.val("");
    $khataAreaWithUnit.val("");
    $khasraHissa.val("");
    $khasraHissa.attr("disabled", "disabled");

    $id.data("remainingarea", 0)
    $id.data("area", 0)
    $id.data("subarea", 0)
    $id.data("areaunit", "")
    $id.data("convertor", 0)
    $id.data("areaConvertor", 0)
  }


  $khasraHissa.blur(function (ev) {
    if ($(this).val() === "" || $(this).val().indexOf("/") <= 0 || $(this).val().split("/").length != 2 || (Number($(this).val().split("/")[0]) > Number($(this).val().split("/")[1]) || (((isNaN(Number($(this).val().split("/")[0]))) && isNaN(Number($(this).val().split("/")[1])) || Number($(this).val().split("/")[1]) == 0))) || Number($(this).val().split("/")[0]) == 0) {
      $(this).focus();
      $(".errorHissaSelection").show();
      $(".errorHissaSelection").fadeOut(9000);
      return false;
    } else {
      var area = Number($id.data("remainingarea"))
      if($(this).val() != "") {
        var hissa = Number($(this).val().split("/")[0]) / Number($(this).val().split("/")[1])
        console.log(area, hissa);

        if ($id.data("areaunit") == "Hectare") {
          area = area * hissa
        }
        if ($id.data("areaunit") == "Bigha-Biswa") {
          areaBiswa = Math.floor(area) * 20 + Math.round((area % 1) * 1000)/10
          areaBiswa = Math.floor((areaBiswa * hissa) * 10)/10
          area = Math.floor(areaBiswa/20) + Math.round((areaBiswa%20) * 10)/1000
        }
      }

      $crop.each(function (index, item) {
        if ($(item).css("display") == "block") {
          $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($(item).find(".collapsiblePanelHeader").data("subarea")))
          $id.data("subarea", Number($id.data("subarea")) - Number($(item).find(".collapsiblePanelHeader").data("subarea")))
          $(item).find(".collapsiblePanelHeader").data("subarea", 0)
          $("#premiumTable").find("."+$(item).find(".cropArea").attr("id")).remove()
          $("#premiumTable").find("."+$(item).find(".cropArea1").attr("id")).remove()
          SubArea()
          $(item).find(".totalPremium").val("")
          $(item).find(".farmerPremium").val("")
        }
      })
      $crop.find(".cropArea").val("")
      $crop.find(".cropArea1").val("")
      $crop.find(".cropArea2").val("")
      if ($id.data("areaunit") == "Bigha-Biswa") {
        var bighaFirst = area.toString().split(".")[0];
        if(bighaFirst && bighaFirst.length < 2) {
          bighaFirst = "0" + bighaFirst;
        }
        if(!bighaFirst){
          bighaFirst = "00"
        }
        var bighaSecond = area.toString().split(".")[1];
        if(bighaSecond && bighaSecond.length < 2) {
          bighaSecond = bighaSecond + "00"
        }
        if(!bighaSecond){
          bighaSecond = "00"
        }
        var finalArea = bighaFirst + '-' + bighaSecond.substring(0, 2);
        $remainingCropArea.html('Insurable Remaining Area: ' + finalArea + ' Bigha-Biswa');
      } else {
        var finalArea = Math.round(area * 10000) / 10000;
        $remainingCropArea.html('Insurable Remaining Area: ' + finalArea + ' hectare');
      }
      console.log("..............", finalArea)
      $id.data("area", area)
    }
    $(this).siblings("label").addClass("label-up")
  })

  $districtCrop.change(function () {
    var $tehsilCrop = $id.find('select.tehsilCrop');
    var tehsils = $(this).find(":selected").data("tehsil");
    if (tehsils.length > 0) {
      var listOptions = "<option value='' selected=true>SELECT TEHSIL</option>";
      tehsils.forEach(function (item) {
        listOptions += "<option value="+ item.tehsil_id +">" + item.tehsil_name + "</option>";
      });
      $tehsilCrop.html(listOptions)
      $tehsilCrop.val("");
      $ILRCrop.val("");
      $patwarCrop.val("");
      $villageCrop.val("");
      $khataNumber.attr("disabled", "disabled");
      zeroEverythingAboveCropFunction();
      zeroEverythingFunction();
    }
  })

  /*$tehsilCrop.change(function () {
   var $ILRCrop = $id.find('select.ILRCrop');
   var tehsilID = $(this).find(":selected").val();
   if (tehsilID !== "") {
   app.utils.ajax.get('/tehsilData?tehsilID=' + tehsilID).then(function (result) {
   if (result.status) {
   var ILRCrop = "<option value='' selected=true>SELECT ILR</option>";
   result.data.forEach(function(tehsil) {
   tehsil.GirdawariKanoongo.forEach(function (item) {
   ILRCrop += "<option value="+ item.kanoongo_id +" data-kaanoongo='"+ JSON.stringify(item.GirdawariPatwar) + "'>" + item.kanoongo_name_hindi + "</option>";
   })
   })
   $ILRCrop.html(ILRCrop)
   $ILRCrop.val("");
   $patwarCrop.val("");
   $villageCrop.val("");
   $khataNumber.attr("disabled", "disabled");
   zeroEverythingAboveCropFunction();
   zeroEverythingFunction();
   }
   })
   }
   })

   $ILRCrop.change(function () {
   var $patwarCrop = $id.find('select.patwarCrop');
   var ILRCrop = $(this).find(":selected").data("kaanoongo");
   if (ILRCrop.length > 0) {

   var listOptions = "<option value='' selected=true>SELECT PATWAR</option>";
   ILRCrop.forEach(function (item) {
   listOptions += "<option value="+ item.patwar_id +" data-patwar='"+ JSON.stringify(item.GirdawariVillages) +"'>" + item.patwar_area_hindi + "</option>";
   });
   $patwarCrop.html(listOptions)
   $patwarCrop.val("");
   $villageCrop.val("");
   $khataNumber.attr("disabled", "disabled");
   zeroEverythingAboveCropFunction();
   zeroEverythingFunction();
   }

   })

   $patwarCrop.change(function () {
   var $villageCrop = $id.find('select.villageCrop');
   var patwar = $(this).find(":selected").data("patwar");
   if (patwar.length > 0) {
   var listOptions = "<option value='' selected=true>SELECT VILLAGE</option>";
   patwar.forEach(function (item) {
   listOptions += "<option value="+ item.village_id +">" + item.village_name + "</option>";
   });
   $villageCrop.html(listOptions)
   $villageCrop.val("");
   $khataNumber.attr("disabled", "disabled");
   zeroEverythingAboveCropFunction();
   zeroEverythingFunction();
   }
   })*/
  $tehsilCrop.change(function () {
    var $villageCrop = $id.find('select.villageCrop');
    var tehsilID = $(this).find(":selected").val();
    if (tehsilID !== "") {
      app.utils.ajax.get('/tehsilDataNew?tehsilID=' + tehsilID).then(function (result) {
        if (result.status) {
          var listOptions = "<option value='' selected=true>SELECT VILLAGE</option>";
          result.data.forEach(function(item) {
            listOptions += "<option value="+ item.village_id +">" + item.village_name + "</option>";
          })
          $villageCrop.html(listOptions)
          $villageCrop.val("");
          $khataNumber.attr("disabled", "disabled");
          zeroEverythingAboveCropFunction();
          zeroEverythingFunction();
        }
      },function(err){
        if(err.status == 401) {
          $(".errorSession").show();
          $(".errorSession").fadeOut(9000);
          window.location.href = userSession.userData.RETURNURL;
        }
      })

    }
  })

  $villageCrop.change(function () {
    var village = $(this).find(":selected").val();
    if (village === "") {
      $khataNumber.attr("disabled", true)
    } else {
      $khataNumber.removeAttr("disabled")
      //$khataNumber.focus();
      zeroEverythingAboveCropFunction();
      zeroEverythingFunction()
    }
  })

  $farmersNameForm.on('input', function() {
    $farmersName.val($(this).val());
  })

  $collapsiblePanelHeader.on("click", function () {
    $collapsiblePanel.slideToggle();
  })

  $autoFillBhamashah.blur(function (ev) {
    ev.preventDefault();
    if ($bhamashahID.val().length === 7 || $bhamashahID.val().length === 15) {
      $loader.css("display", "block");
      app.utils.ajax.get('/farmerDetail/gb', {
        data: {
          id: $bhamashahID.val().toUpperCase()
        }
      }).then(function(data) {
        $loader.css("display", "none");
        $bhamashahID.removeAttr('tabindex')
        if (data.status && data.data.length > 0) {
          $verifyAadhar.data("auto-fill", JSON.stringify(data.data));
          var listOptions = "<option value='' selected=true disabled>CHOOSE NAME</option>";
          data.data.forEach(function (item) {
            listOptions += "<option value='' >"+ item.nameEng[0] +"</option>";
          })
          var $modal = $("#myModal");
          var $farmerName = $modal.find(".farmerName");
          $modal.data("id", $id.attr("id"));
          $("body").addClass("modal-open")
          $modal.addClass("in").css("display", "block")
          $farmerName.html(listOptions)
          $aadharSelection.val("UID")
          $bhamashaselection.attr('disabled',true);
          $farmersFirstName.focus();
          bhamashahCheckFlag = true;
        } else if(data.status && $bhamashaselection.find("option:selected").val() == "BID") {
          $(".errorBIDSelection").show();
          $(".errorFirstName").hide();
          $(".errorBIDSelection").fadeOut(9000);
          $bhamashahID.focus();
          bhamashahCheckFlag = false;
        } else if(data.status && $bhamashaselection.find("option:selected").val() == "ACKID"){
          $(".errorFirstName").hide();
          $(".errorAckidAadharSelection").show();
          $(".errorAckidAadharSelection").fadeOut(9000);
          bhamashahCheckFlag = false;
          $bhamashahID.focus();
        } else {
          $(".errorBIDService").show();
          $(".errorBIDService").fadeOut(9000);
        }
      },function(err){
        if(err.status == 401) {
          $(".errorSession").show();
          $(".errorSession").fadeOut(9000);
          window.location.href = userSession.userData.RETURNURL;
        } else {
          $(".errorBIDService").show();
          $(".errorBIDService").fadeOut(9000);
        }
      });
    } else {
      if ($bhamashaselection.find("option:selected").val() == "BID") {
        $(".errorBIDAadharSelection").show();
        $(".errorBIDAadharSelection").fadeOut(9000);
        $bhamashahID.focus();
      } else if($bhamashaselection.find("option:selected").val() == "ACKID") {
        $(".errorAckidAadharSelection").show();
        $(".errorAckidAadharSelection").fadeOut(9000);
        $bhamashahID.focus();
      }
    }
  });

  $checkKhataNumber.click(function (ev) {
    ev.preventDefault();
    if (!$khataNumber.prop("disabled")) {
      // if ($khataNumber.val() == "1") {
      //   $(".errorInvalidKhata").show();
      //   $(".errorInvalidKhata").fadeOut(9000);
      //   $khataNumber.focus();
      //   return false;
      // }
      if ($dh_R.data("farmer") == "") {
        $(".errorVerifyKhataSelection").show();
        $(".errorVerifyKhataSelection").fadeOut(9000);
        return false;
      }
      if ($khataNumber.val() !== "") {
        if ($tehsilCrop.find(":selected").val() === "") {
          $(".errorTehsilSelection").show();
          $(".errorTehsilSelection").fadeOut(9000);
          $tehsilCrop.trigger( "change" );
          return false;
        }
        if ($villageCrop.find(":selected").val() === "") {
          $(".errorVillageSelection").show();
          $(".errorVillageSelection").fadeOut(9000);
          $villageCrop.trigger( "change" );
          return false;
        }
        $('#pluswrap-overlay').css('display','block');
        // this will be shifted to button click
        app.utils.ajax.get("/khataNotifDetails?villageID=" + $villageCrop.find(":selected").val() + "&khataNumber=" + Number($khataNumber.val())).then(function (result) {
          $('#pluswrap-overlay').css('display','none');
          if (result.status) {
            $khasraHissa.val("")
            $khasraHissa.removeAttr("disabled")
            $khasraHissa.focus()

            $crop.each(function (index, itemCrop) {
              var $itemCrop = $(itemCrop);0
              var $cropArea = $itemCrop.find(".cropArea");
              var $cropArea1 = $itemCrop.find(".cropArea1");
              var $cropArea2 = $itemCrop.find(".cropArea2");
              var $totalPremium = $itemCrop.find(".totalPremium");
              var areaHectare = 0;
              $cropArea.val("")
              $totalPremium.val("")
              $cropArea1.val("")
              $cropArea2.val("")
              $itemCrop.find(".collapsiblePanelHeader").data("subarea", 0)
            })

            $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($id.data("subarea")))
            $id.data("remainingarea", result.data.remainingArea)
            $id.data("subarea", 0)
            $id.data("areaunit", result.data.areaUnit)
            $id.data("convertor", result.data.convertor)
            $remainingCropArea.html("");

            if (result.data.areaUnit == "Bigha-Biswa") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("area", result.data.remainingArea)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "none")
              $crop.find(".bighaTextbox").css("display", "block")
              $crop.find(".biswaTextbox").css("display", "block")
            }

            if (result.data.areaUnit == "Hectare") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("area", result.data.remainingArea)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "block")
              $crop.find(".bighaTextbox").css("display", "none")
              $crop.find(".biswaTextbox").css("display", "none")
            }

            var $cropSelection = $id.find("select.cropSelection");
            var $areaUnitText = $id.find(".areaUnitText");
            var $premiumPerHectare= $id.find(".premiumPerHectare");
            var $farmerPremium = $id.find(".farmerPremium");
            $khataAreaWithUnit.val(result.data.area + " " + result.data.areaUnit);
            if (result.data.cropNotification.length > 0) {
              // $crop.css("display", "none")
              $cropDetails.css("display", "block");
              $cropDetails.find(".closeCropArea").css("display", "none")

              $addAnotherCrop.data("maxcrop", result.data.cropNotification.length)
              $khataNumber.data("remainingarea", result.data.remainingArea)
              $khataNumber.data("areaunit", result.data.areaUnit)
              $khataNumber.data("convertor", result.data.convertor)
              var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
              result.data.cropNotification.forEach(function (item) {
                listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
              });
              $cropSelection.html(listOptions)
              $areaUnitText.val(result.data.areaUnit);
            }
          } else {
            $(".errorKhataSelection").show();
            $(".errorKhataSelection").fadeOut(9000);
            $khataNumber.focus();
            return false;
          }
        },function(err){
          if(err.status == 401) {
            $(".errorSession").show();
            $(".errorSession").fadeOut(9000);
            window.location.href = userSession.userData.RETURNURL;
          }
        })
      }
    }
  })

  $updateKhata.on('click', function(ev) {
    ev.preventDefault();
    if ($khataNumber.val() == "" || $khataNumber.val() == 0) {
        $(".errorInvalidKhataEmpty").show();
        $(".errorInvalidKhataEmpty").fadeOut(9000);
        $khataNumber.focus();
        return false;
      }
    if (!$khataNumber.prop("disabled")) {
      var loanDate = $id.parent().parent().parent().find('.date :input').val();
      // if ($khataNumber.val() == "1") {
      //   $(".errorInvalidKhata").show();
      //   $(".errorInvalidKhata").fadeOut(9000);
      //   $khataNumber.focus();
      //   return false;
      // }
      if ($dh_R.data("farmer") == "") {
        $(".errorVerifyKhataSelection").show();
        $(".errorVerifyKhataSelection").fadeOut(9000);
        return false;
      }
      if ($khataNumber.val() !== "") {
        if ($tehsilCrop.find(":selected").val() === "") {
          $(".errorTehsilSelection").show();
          $(".errorTehsilSelection").fadeOut(9000);
          $tehsilCrop.trigger( "change" );
          return false;
        }
        if ($villageCrop.find(":selected").val() === "") {
          $(".errorVillageSelection").show();
          $(".errorVillageSelection").fadeOut(9000);
          $villageCrop.trigger( "change" );
          return false;
        }
        $('#pluswrap-overlay').css('display','block');
        // this will be shifted to button click

        app.utils.ajax.get("/newKhataNotifDetails?addressKey=" + $villageCrop.find(":selected").val() + "&khataNumber=" + parseInt($khataNumber.val())).then(function (result) {
          $('#pluswrap-overlay').css('display','none');
          if (result.status) {
            $khataNumber.data("allow", true)
            $khasraHissa.val("")
            $khasraHissa.removeAttr("disabled")
            $khasraHissa.focus()

            $crop.each(function (index, itemCrop) {
              var $itemCrop = $(itemCrop);0
              var $cropArea = $itemCrop.find(".cropArea");
              var $cropArea1 = $itemCrop.find(".cropArea1");
              var $cropArea2 = $itemCrop.find(".cropArea2");
              var $totalPremium = $itemCrop.find(".totalPremium");
              var areaHectare = 0;
              $cropArea.val("")
              $totalPremium.val("")
              $cropArea1.val("")
              $cropArea2.val("")
              $itemCrop.find(".collapsiblePanelHeader").data("subarea", 0)
            })

            $dh_R.data("totalarea", Number($dh_R.data("totalarea")) + Number($id.data("subarea")))
            $id.data("remainingarea", result.data.remainingArea)
            $id.data("subarea", 0)
            $id.data("totalarea", result.data.area)
            $id.data("areaunit", result.data.areaUnit)
            $id.data("convertor", result.data.convertor)

            if (result.data.areaUnit == "Bigha-Biswa") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "none")
              $crop.find(".bighaTextbox").css("display", "block")
              $crop.find(".biswaTextbox").css("display", "block")
            }

            if (result.data.areaUnit == "Hectare") {
              $id.data("remainingarea", result.data.remainingArea)
              $id.data("totalarea", result.data.area)
              $id.data("areaConvertor", result.data.convertor)
              $crop.find(".hectareText").css("display", "block")
              $crop.find(".bighaTextbox").css("display", "none")
              $crop.find(".biswaTextbox").css("display", "none")
            }

            var $cropSelection = $id.find("select.cropSelection");
            var $areaUnitText = $id.find(".areaUnitText");
            var $premiumPerHectare= $id.find(".premiumPerHectare");
            var $farmerPremium = $id.find(".farmerPremium");
            $khataAreaWithUnit.val(result.data.area + " " + result.data.areaUnit);
            if (result.data.cropNotification.length > 0) {
              // $crop.css("display", "none")
              $cropDetails.css("display", "block");
              $cropDetails.find(".closeCropArea").css("display", "none")

              $addAnotherCrop.data("maxcrop", result.data.cropNotification.length)
              $khataNumber.data("remainingarea", result.data.remainingArea)
              $khataNumber.data("areaunit", result.data.areaUnit)
              $khataNumber.data("convertor", result.data.convertor)
              var listOptions = "<option value='' selected=true disabled>CHOOSE CROP</option>";
              result.data.cropNotification.forEach(function (item) {
                listOptions += "<option value="+ item.data.CNID +" data-pph="+ item.data.premiumPerHectare +" data-fp="+ item.data.farmerPremium +">" + item.data.cropName + "</option>";
              });
              $cropSelection.html(listOptions)
              $areaUnitText.val(result.data.areaUnit);
            } 
          } else {
            $khataNumber.data("allow", false)
            $(".errorNewKhataSelection").show();
            $(".errorNewKhataSelection").fadeOut(9000);
            $khataNumber.focus();
            return false;
          }
        },function(err){
          if(err.status == 401) {
            $(".errorSession").show();
            $(".errorSession").fadeOut(9000);
            window.location.href = userSession.userData.RETURNURL;
          }
        })
      }
    }
  })
  $addAnotherCrop.click(function (ev) {
    ev.preventDefault()
    if (!($(":focus").hasClass("cropArea") || $(":focus").hasClass("cropArea1") || $(":focus").hasClass("cropArea2"))) {

      var openTemplateCount = 0;
      var latestClosedTemplate = null;

      $id.find(".crop").each(function () {
        if ($(this).css("display") == "block") {
          $.each($(this).attr("class").split(/\s+/), function(index, item) {
            if (item.indexOf("template") >= 0) {
              var item = Number(item.split("_")[1]) + 1;
              latestClosedTemplate = "template_" + item;
            }
          })
          openTemplateCount++;
        }
      })


      var currentTemplateValue = $id.find('.template_'+(openTemplateCount-1)).find('.cropSelection').val();
      if(currentTemplateValue == null && openTemplateCount > 0) {
        $errorAddAnotherCrop.show();
        $errorAddAnotherCrop.fadeOut(5000);
        return;
      }
      var bool = true;
      var countopen = (typeof $(this).data("countopen") == "undefined") ? 0 : $(this).data("countopen");
      if (countopen == 0) {
        countopen = 1;
      }
      var maxcrop = (typeof $(this).data("maxcrop") == "undefined") ? 0 : $(this).data("maxcrop");
      var $item;
      if (latestClosedTemplate == "template_0") {
        $item = $id.find("." + latestClosedTemplate);
      }
      else {
        var $item = $id.find("." + latestClosedTemplate);
      }
      if (maxcrop > openTemplateCount && maxcrop != 0) {
        if (openTemplateCount >= 2 )  {
          var $prevItem = $id.find(".template_"+(openTemplateCount - 1))
          $prevItem.find(".closeCropArea").css("display", "none")
        }
        $item.css("display", "block");
        $item.find(".cropArea").attr("disabled", 'disabled');
        $item.find(".cropArea1").attr("disabled", 'disabled');
        $item.find(".cropArea2").attr("disabled", 'disabled');
        $item.find(".cropSelection").val("");
        $(this).data("countopen", countopen + 1)
        cropRowTemplate[latestClosedTemplate] = true;
        $item.prev().find('.removeBtn').find('a').css('visibility','hidden');
        $item.prev().find('.cropSelection').attr('disabled','true')
        $item.prev().find('.cropArea').attr('disabled','true')
        $item.prev().find('.cropArea1').attr('disabled','true')
        $item.prev().find('.cropArea2').attr('disabled','true')

      } else {
        $(".errorAddCropSelection").show();
        $(".errorAddCropSelection").fadeOut(9000);
      }
      var preiviousCNID = []
      for(var i = 0; i < openTemplateCount; i++) {
        preiviousCNID.push($id.find('.template_'+i).find('.cropSelection').val())
      }
      var newOpen = openTemplateCount;
      for(var i = 0; i < preiviousCNID.length; i++) {
        var x = preiviousCNID[i]
        $id.find('.template_'+openTemplateCount+' '+'.cropSelection option').each(function() {
          if ( $(this).val() == x ) {
            $(this).remove();
          }
        });
      }
    } else {
      $(".errorCropArea1").show();
      $(".errorCropArea1").fadeOut(9000);
    }
  })


}
$(".bhamashapopup").click(function (ev) {
  var $modal = $("#myModal");
  var $farmerName = $modal.find(".farmerName");
  var id = $modal.data("id");
  var $id = $("#" + id);
  var $farmersFirstName = $id.find(".farmersFirstName");
  var $fathersName = $id.find(".fathersName");
  var $farmerCaste = $id.find(".farmerCaste");
  var $radioGroup = $id.find(".radioGroupGender");
  var $farmersLastName = $id.find(".farmersLastName");
  var $farmerMobileNumber = $id.find(".farmerMobileNumber");
  var $aadharNumber = $id.find(".aadharNumberForm");
  var $verifyAadhar = $id.find(".verifyAadhar");
  var bhamashahData = JSON.parse($verifyAadhar.data("auto-fill"));


  var selectedName = $farmerName.find(":selected").text();
  if (selectedName != "CHOOSE NAME") {
    $("body").removeClass("modal-open")
    $modal.removeClass("in").css("display", "none")
    bhamashahData.forEach(function (item) {
      if (item.nameEng[0] == selectedName) {
        $farmerMobileNumber.val(item.mobile[0])
        var value = item.aadharID[0];
        if (value.length > 4 && value.substr(4,1) !== '-') {
          value = value.substr(0, 4) + "-" + value.substr(4, value.length)
        }
        if (value.length > 9 && value.substr(9,1) !== '-') {
          value = value.substr(0, 9) + "-" + value.substr(9, value.length)
        }
        $aadharNumber.val(value)
        $fathersName.val(item.fatherNameEng[0])
        // $farmerCaste.select('destroy');
        $farmerCaste.val(item.caste[0])
        // $farmerCaste.select();
        if (item.gender[0] == "Female") {
          $radioGroup.find("input")[1].checked = true
        } else if (item.gender[0] == "Male") {
          $radioGroup.find("input")[0].checked = true
        }
      }
    })

    $aadharNumber.focus();
    $farmersFirstName.val(selectedName.substr(0, selectedName.lastIndexOf(" ")));
    $farmersLastName.val(selectedName.substr(selectedName.lastIndexOf(" "), selectedName.length - selectedName.lastIndexOf(" ")).trim());
    $id.find('.customRight').css("display", "block");
    $id.find('.bhamashahID').attr('disabled','disabled');
    $id.find('.bhamashaselection').attr('disabled','disabled');
    return false;
  } else {
    $(".errorNameSelection").show();
    $(".errorNameSelection").fadeOut(9000);
    return false;
  }
})
app.components.premiumDetails = function ($id) {
  var $Back = $id.find(".ButnBackPreview");
  var $print = $id.find(".printButton");
  var premiumShortId = $id.find('.deletePolicy').data('shortid');
  var $deletePolicy = $id.find('.deletePolicy');
  var $modalDeletePolicy = $id.find('#modalDeletePolicy');
  var $deleteConfirm = $id.find('.delete-save');
  var emitraCheck = $id.data('emitracheck');

  if(emitraCheck) {
    $('.full-screen-header').addClass('hide')
    $('.ButnBackPreview').addClass('hide')
    $('.deletePolicy').addClass('hide')
    window.setTimeout(function() {
      app.utils.ajax.post("/logout").then(function (response){
        if(response){
          console.log("logout");
        };
      });
    },2000)
  }

  console.log('emitraCheck',emitraCheck);
  $Back.click(function (ev) {
    ev.preventDefault();
    app.utils.redirectTo("/policyList");
  })

  $print.click(function (ev) {
    var divToPrint = $id.find(".premiumDetailTable");
    var divToPrintFarmer = $id.find(".farmerDetailTable");
    var totalPremiumDiv = $id.find(".totalDetail");
    var tableCss = '' +
      '<style type="text/css">' +
      'table th, table td {' +
      'border:1px solid #000;' +
      'padding: 0.5em;' +
      '}' +
      '</style>';
    var policySummary = "<div style='text-align: center'><h2>Premium Details</h2></div>"
    var htmlToPrint = tableCss + policySummary + divToPrintFarmer.html() + divToPrint.html() + totalPremiumDiv.html();
    newWin = window.open("");
    newWin.document.write(htmlToPrint);
    newWin.print();
    newWin.close();
  })

  $deletePolicy.on('click', function() {
    $modalDeletePolicy.show();
  })
  $deleteConfirm.on('click',function () {
    var data = {
      "shortID" : JSON.parse(premiumShortId)
    }
    app.utils.ajax.post("/deactivate/policy", {data: data}).then(function (data) {
      console.log('data',data)
      app.utils.redirectTo("/policyList")
    },function(err) {
      if(err.status == 401) {
        $(".errorSession").show();
        $(".errorSession").fadeOut(9000);
        window.location.href="/"
      }
    })
  })
}


app.components.previewList = function ($id) {
	
}
app.components.reportIssue = function ($id) {
	var $loginIssueRadio = $id.find(".lableLogin");
	var $farmerIssueRadio = $id.find(".lableFarmer");
	var $reportRadio = $id.find(".lableReport");
	var $otherIssueRadio = $id.find(".lableOtherBug");
	var $loginIssueWrapper = $id.find(".loginIssue");
	var $farmerFormWrapper = $id.find(".farmerForm");
	var $loginIssueR = $id.find("#loginIssueR");
	var $farmerFormR = $id.find("#farmerFormR");
	var $reportSummaryR = $id.find("#reportSummaryR");
	var $otherBugsR = $id.find("#otherBugsR");
	var $sumitBug = $id.find(".sumitBug");
	var $issueMessage = $id.find("#issueMessage");
	var $categoryIssueType = $id.find(".categoryIssueType")
	var $loginIssueType = $id.find(".loginIssue")
	var $farmerForm = $id.find(".farmerForm")
	$loginIssueRadio.on('click',function (ev) {
		$farmerFormWrapper.addClass('hide');
		$loginIssueWrapper.removeClass('hide');
	})

	$farmerIssueRadio.on('click',function (ev) {
		$loginIssueWrapper.addClass('hide');
		$farmerFormWrapper.removeClass('hide');
	})

	$reportRadio.on('click',function (ev) {
		$loginIssueWrapper.addClass('hide');
		$farmerFormWrapper.addClass('hide');
	})

	$otherIssueRadio.on('click',function (ev) {
		$loginIssueWrapper.addClass('hide');
		$farmerFormWrapper.addClass('hide');
	})

	$issueMessage.on("change paste keyup", function (ev) {
		if ($(this).val().length > 249) {
			$(this).val($(this).val().substr(0, 249))
		}
	})

	$sumitBug.on('click', function (ev) {
		var issueMessageValue = $id.find("#issueMessage").val();
		ev.preventDefault();
		var categoryType = ''
		$categoryIssueType.find('input:checked').each(function(){
			categoryType = $(this).val();
		})
		var typeIssue = '';
		if(categoryType == 'Login issue') {
			$loginIssueType.find('input:checked').each(function() {
			  typeIssue = $(this).val();
			});
		} else if(categoryType == 'Farmer Form') {
			$farmerForm.find('input:checked').each(function() {
			  typeIssue = $(this).val();
			});
		}
		if(issueMessageValue.trim().length <25 ) {
			$(".errorBugMessage").show();
   		$(".errorBugMessage").fadeOut(9000);
   		return;
		} else {
			var data = {
				"message" : issueMessageValue,
				"category" : categoryType,
				"type" : typeIssue,
			}
			app.utils.ajax.post("/bug/report", {
				data: data
			}).then(function(success){
				if(success.status) {
					$(".successBugMessage").show();
		   		$(".successBugMessage").fadeOut(9000);
		   		$issueMessage.val('');
				} else {
					$('.successBugError').find('p').html(success.error);
					$(".successBugError").show();
		   		$(".successBugError").fadeOut(9000);
				}
			},function(err) {
				if(err.status == 401) {
					$(".errorSession").show();
					$(".errorSession").fadeOut(9000);
					window.location.href="/"
				}
			})
		}
	})
}
app.components.savingBankDetails = function ($id) {
	var $radioSingle = $id.find("#savingSingle");
	var $addFarmer =  $id.find("#addAnotherFarmer")

	$addFarmer.hide();

	$radioSingle.change(function () {
		$addFarmer.hide();
	})
}
/**
 * Created by prateek on 24/11/16.
 */
app.components.savingBankDetails = function ($id) {
  var $accountNumber = $id.find("accNum");
  var $farmerType = $id.find("farmerType");
  var $ifcsCode = $id.find("ifsc");
  var $passbookFile = $id.find("passbook");
  var bataidaarCertificate = $id.find("bCertificate");
  var uploadPassbook = $id.find("uploadPassbook");
  var uploadBCertificate = $id.find("uploadBCertificate");

  uploadPassbook.click(function (ev) {
    ev.preventDefault();

  })



}


app.components.superAdmin = function ($id) { 
	var $bankName = $id.find('#bankName');
	var $profileType = $id.find('#profileType');
	var $branchAdmin = $id.find('.branchAdmin');
	var $tdlist = $id.find("#t01");

	$bankName.on('change',function() {
		var bankObjType = $bankName.find(":selected").data('banktype');
		if(bankObjType.toUpperCase() == 'COOPERATIVE'){
			$branchAdmin.removeAttr('disabled')
			$profileType.val('')
			$profileType.material_select();
		} else {
			$branchAdmin.attr('disabled','disabled')
			$profileType.val('')
			$profileType.material_select();
		}
	})

	$profileType.change(function() {
		console.log('$bankName',$bankName.val(),'$profileType',$profileType.val())
		if(!$bankName.val()) {
			Materialize.toast("Please select bank name", 1000, "rounded");
			return false; 
		} else if(!$profileType.val()) {
			Materialize.toast("Please select user type", 1000, "rounded");
		} else {
			var data = {}
			if($profileType.val() == 'admin') {
				data['is_user'] = 0;
				data['is_admin'] = 1;
			} else if($profileType.val() == 'user') {
				data['is_user'] = 1;
				data['is_admin'] = 0;
			} else {
				data['is_user'] = 1;
				data['is_admin'] = 1;
			}
			data['bank_id'] = $bankName.val();
			$tdlist.find('.backendData').html('')
			$tdlist.find('.backendData').nextAll().html('')
			$('#pluswrap-overlay').css('display','block');
			app.utils.ajax.post('/super/admin',{data:data}).then(function(success) {
				$('#pluswrap-overlay').css('display','none');
				console.log('success',success)
				if(success.status) {
					if(success.data.length > 0) {
						success.data.forEach(function(obj,index) {
						  $tdlist.append('<tr></tr>')
						  var tdList;
						  for(var key in obj){
						    if(index == 0) {
						      $tdlist.find('.backendData').append('<th>'+key.replace(/_/g,' ').toUpperCase()+'</th>')
						    }
						    tdList += "<td class="+key+">" + obj[key] + "</td>";
						  }
						  if(index == 0) {
								$tdlist.find('.backendData').append('<th>'+'LOGIN'+'</th>')
							}
							tdList += "<td class='submitUser' style='cursor: pointer;color: #551A8B;font-weight: 600;'>" + "SUBMIT" + "</td>";
						  $tdlist.find('tr').last().html(tdList)
						})
					}
				} else {
					Materialize.toast(success.error, 1000, "rounded");
				}
			}, function(err) {
				console.log('error',err);
			})
		}
	}) 
	$tdlist.on('click', '.submitUser', function(ev) {
		ev.stopPropagation();
		var $that = $(this)
		var userId = $that.parent().find('.id').text();
		console.log($that,'aayayay',$that.parent(),userId)
		app.utils.ajax.get('/super/login?user_id='+userId).then(function(success) {
			if(success.data && success.status) {
				app.utils.redirectTo('/welcome')
			} else {
				console.log('success',success)
			}
		},function(err) {
			console.log('err',err)
		})
	}) 
}
app.components.tableData = function ($id) {
    var $mobile = $id.find(".mobile");
    var mobileFlag = true;
    
  $mobile.on("change paste keyup", function (ev) {
    if ($(this).find("input").val().length > 10) {
      $(this).find("input").val($(this).find("input").val().substr(0, 10))
    }
  })

  $mobile.on("blur", "input", function (ev) {
    var regex = /^[7-9]+[0-9]{1,9}$/i;
    if (regex.test($(this).val()) && $(this).val().length == 10) {
      mobileFlag = true;
      return true;
    } else {
      mobileFlag =false;
      Materialize.toast("Please write a valid mobile number!", 5000, "rounded")
      $(this).focus();
    }
  })

  $mobile.keypress(function (ev) {
    var regex = new RegExp("^[0-9]+$");
    var str = String.fromCharCode(!ev.charCode ? ev.which : ev.charCode);
    if (regex.test(str)) {
      return true;
    }
    ev.preventDefault();
    return false;
  });

  $id.on('click', '.resetPasswordChange', function (ev) {
    ev.preventDefault();
    var that = $(ev.target)
    var data ={};
    var $userId = that.closest('tr').find('#userId').text();
    data["id"]=$userId;
    data["password"] ='yes';
    app.utils.ajax.post("/resetPost/post", {data: data}).then(function (item) {
      if (item.status == true) {
        Materialize.toast("Password Changed successfully", 5000, "rounded")
        return false;
      }
    })
  })

  $id.on('click', '.editForm', function (ev) {
    console.log("tetetetet")
    ev.preventDefault();
    var that = $(ev.target)
    if (that.html().toLowerCase() == 'edit') {
      var getMobile = that.closest('tr').find('.mobile').text();
      var input = $('<input type="number" value="'+getMobile+'" class="form-control margin-0 input-field input-reset" id="mobileNo">');
       input.val(getMobile);

       that.closest('tr').find('.mobile').html(input);
       that.closest('tr').find('.status-act-deact').html('<select class="margin-0 form-control input-field" id="status"><option value="1">Activate</option><option value="0">De-activate</option></select>');
       that.html('Save');
       return false;
    } else if (that.html().toLowerCase() == 'save' && mobileFlag) {
      var data={};
      var $userId = that.closest('tr').find('#userId').text();
      data["id"]=$userId;
      var $phone = $id.find('#mobileNo').val();
      data["mobile"]=$phone;
      var $status = $id.find('#status').val();
      data["active"]=$status;
      app.utils.ajax.post("/update/post", {data: data}).then(function (item) {
        if (item.status == true) {
          that.closest('tr').find('.mobile').html($phone);
          var status = ($status == 1) ? "Activated" : "De-activate";
          that.closest('tr').find('.status-act-deact').html(status);
          that.html('Edit');
          Materialize.toast("User data updated successfully", 5000, "rounded")
        } else {
          Materialize.toast("User data not updated", 5000, "rounded")
        }
        return false;
      })
    }
  })
}
app.components.tableDataPolicy = function ($id) {
  var $policyLink = $id.find(".policyLink");

  $policyLink.click(function (ev) {
    ev.preventDefault();
    var policyNum = $policyLink.text().trim();
    window.location.href = "/premiumDetail?tep=" + policyNum;
  })
}

app.components.addUser = function ($id) {
    

    }
app.components.welcome = function ($id) {
	var $newFormClick = $id.find("#newFormClick");
  var $newUserClick = $id.find("#newUserClick");
  var $kccModal = $id.find("#kccModal");
  var $kccSubmit = $id.find(".kcc_submit");
  var $kccAccountBranch = $id.find("#kccAccountBranch");
  var $kccAccountBranchRabiLoan = $id.find("#kccAccountBranchRabiLoan");
  var sessionData = $id.data("session");
  var bankIdVal = '';
  $kccAccountBranch.val('')
  $kccAccountBranchRabiLoan.val('')
	$newFormClick.click(function (ev) {
		ev.preventDefault();
		app.utils.redirectTo("/cropInsurance")
	})
    $newUserClick.click(function (ev) {
    ev.preventDefault();
    app.utils.redirectTo("/createUser")
  })


  var checkKccModal = function() {
	  if($id.parentsUntil('.full-screen-header').find('#ifscModal').hasClass('hide') && sessionData.totalKccAccountsUser == null && sessionData.totalKccAccountsRabiUser == null && sessionData.bankArray.length == 0) {
	  	$kccModal.removeClass('hide')
	  	bankIdVal = sessionData.bankId
	  } else if(sessionData.bankArray.length > 0 && sessionData.object_type == 'COMMERCIAL') {
	  	sessionData.bankArray.forEach( function(element, index) {
	  		if(element.ifscCode == sessionData.ifscCode) {
	  			if(element.totalKccAccountsRabiUser == null && element.totalKccAccountsUser == null && $id.parentsUntil('.full-screen-header').find('#ifscModal').hasClass('hide')) {
	  				bankIdVal = element.bankId
	  				$kccModal.removeClass('hide')
	  			} else {
	  				$kccModal.addClass('hide')
	  			}
	  		}
	  	});
	  } else if(sessionData.bankArray.length > 0 && sessionData.object_type == 'COOPERATIVE'){
	  	sessionData.bankArray.forEach( function(element, index) {
	  		if(element.pacName == sessionData.pacName) {
	  			if(element.totalKccAccountsRabiUser == null && element.totalKccAccountsUser == null && $id.parentsUntil('.full-screen-header').find('#ifscModal').hasClass('hide')) {
	  				bankIdVal = element.bankId
	  				$kccModal.removeClass('hide')
	  			} else {
	  				$kccModal.addClass('hide')
	  			}
	  		}
	  	});
	  }
  }

  checkKccModal();

  $kccSubmit.on('click', function() {
  	var data = {}
  	if($kccAccountBranch.val() <= 0) {
  		Materialize.toast('Please enter valid Number of KCC accounts in your branch', 3000, "rounded");
  		return false;
  	}
  	if($kccAccountBranchRabiLoan.val() <= 0) {
  		Materialize.toast('Please enter valid Number of KCC accounts with active Rabi Loan', 3000, "rounded");
  		return false;
  	}
  	data['bankID'] = bankIdVal;
  	data['totalKccAccountsUser'] = $kccAccountBranch.val();
  	data['totalKccAccountsRabiUser'] = $kccAccountBranchRabiLoan.val();
  	app.utils.ajax.post('/submit/kcc',{data:data}).then(function(success){
  		console.log('success',success)
  	},function(err) {
  		console.log('err',err)
  	})
  	$kccModal.addClass('hide')
  })
}