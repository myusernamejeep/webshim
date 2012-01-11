(function(c){if(!Modernizr.genericDOM){var f=document,g,k,o=/<([\w:]+)/,m={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||m[(o.exec(c)||["",""])[1].toLowerCase()])return c;if(!k){g=f.body;if(!g)return c;k=f.createElement("div");k.style.display="none"}var r=k.cloneNode(!1);g.appendChild(r);r.innerHTML=c;g.removeChild(r);return r.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,f,g,k,o){var m=f.modules,j=/\s*,\s*/,r={},n={},q={},h={},t={},s=c.fn.val,w=function(b,a,e,i,p){return p?s.call(c(b)):s.call(c(b),e)};c.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?s.call(this):c.prop(a,"value",b,"val",!0);if(c.isArray(b))return s.apply(this,arguments);var e=c.isFunction(b);return this.each(function(i){a=this;1===a.nodeType&&(e?(i=b.call(a,i,c.prop(a,"value",o,"val",
!0)),null==i&&(i=""),c.prop(a,"value",i,"val")):c.prop(a,"value",b,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),u=function(b,a,e){b=b.jquery?b[0]:b;if(!b)return e||{};var i=c.data(b,v);e!==o&&(i||(i=c.data(b,v,{})),a&&(i[a]=e));return a?i&&i[a]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){c.fn[b.name]=function(){return this.map(function(){var a=u(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){r[b]=c[b];c[b]=function(a,e,i,p,d){var f="val"==p,l=!f?r[b]:w;if(!a||!n[e]||1!==a.nodeType||!f&&p&&"attr"==b&&c.attrFn[e])return l(a,e,i,p,d);var z=(a.nodeName||"").toLowerCase(),h=q[z],j="attr"==b&&(!1===i||null===i)?"removeAttr":b,m,x,g;h||(h=q["*"]);h&&(h=h[e]);h&&(m=h[j]);if(m){if("value"==e)x=m.isVal,m.isVal=f;if("removeAttr"===j)return m.value.call(a);if(i===o)return m.get?m.get.call(a):m.value;m.set&&
("attr"==b&&!0===i&&(i=e),g=m.set.call(a,i));if("value"==e)m.isVal=x}else g=l(a,e,i,p,d);if((i!==o||"removeAttr"===j)&&t[z]&&t[z][e]){var k;k="removeAttr"==j?!1:"prop"==j?!!i:!0;t[z][e].forEach(function(e){if(!e.only||(e.only="prop"==b)||"attr"==e.only&&"prop"!=b)e.call(a,i,k,f?"val":j,b)})}return g};h[b]=function(a,e,i){q[a]||(q[a]={});q[a][e]||(q[a][e]={});var p=q[a][e][b],d=function(a,c,p){return c&&c[a]?c[a]:p&&p[a]?p[a]:"prop"==b&&"value"==e?function(a){return i.isVal?w(this,e,a,!1,0===arguments.length):
r[b](this,e,a)}:"prop"==b&&"value"==a&&i.value.apply?function(a){var c=r[b](this,e);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return r[b](this,e,a)}};q[a][e][b]=i;if(i.value===o){if(!i.set)i.set=i.writeable?d("set",i,p):f.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+a;}:c.noop;if(!i.get)i.get=d("get",i,p)}["value","get","set"].forEach(function(a){i[a]&&(i["_sup"+a]=d(a,p))})}});var d=!c.browser.msie||8<parseInt(c.browser.version,10),x=function(){var b=f.getPrototypeOf(k.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(e,c,p){var h=k.createElement(e),m=f.getPrototypeOf(h);if(d&&m&&b!==m&&(!h[c]||!a.call(h,c))){var j=h[c];p._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};m[c]=p.value}else p._supvalue=function(){var a=u(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},l.extendValue(e,c,p.value);p.value._supvalue=p._supvalue}}(),l=function(){var b={};f.addReady(function(a,e){var i={},d=function(b){i[b]||(i[b]=c(a.getElementsByTagName(b)),
e[0]&&c.nodeName(e[0],b)&&(i[b]=i[b].add(e)))};c.each(b,function(a,b){d(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){i[a].each(b)})});i=null});var a,e=c([]),i=function(e,i){b[e]?b[e].push(i):b[e]=[i];c.isDOMReady&&(a||c(k.getElementsByTagName(e))).each(i)};return{createTmpCache:function(b){c.isDOMReady&&(a=a||c(k.getElementsByTagName(b)));return a||e},flushTmpCache:function(){a=null},content:function(a,b){i(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){i(a,b)},extendValue:function(a,b,e){i(a,function(){c(this).each(function(){u(this,"propValue",{})[b]=this[b];this[b]=e})})}}}(),y=function(b,a){if(b.defaultValue===o)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};c.extend(f,{getID:function(){var b=(new Date).getTime();return function(a){var a=c(a),e=a.attr("id");e||(b++,e="ID-"+b,a.attr("id",e));return e}}(),extendUNDEFProp:function(b,
a){c.each(a,function(a,c){a in b||(b[a]=c)})},createPropDefault:y,data:u,moveToFirstEvent:function(){var b=c._data?"_data":"data";return function(a,e,i){if((a=(c[b](a,"events")||{})[e])&&1<a.length)e=a.pop(),i||(i="bind"),"bind"==i&&a.delegateCount?a.splice(a.delegateCount,0,e):a.unshift(e)}}(),addShadowDom:function(b,a,e){e=e||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);if(!e.shadowFocusElement)e.shadowFocusElement=a;var i=c.data(b,v)||c.data(b,v,{}),d=c.data(a,v)||c.data(a,v,{});i.hasShadow=a;d.nativeElement=
b;d.shadowData=i.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){u(this,"shadowData",d.shadowData)});if(e.data)i.shadowData.data=e.data,d.shadowData.data=e.data;e=null},propTypes:{standard:function(b){y(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){y(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(j));a.forEach(function(a){f.defineNodeNamesProperty(b,a,{prop:{set:function(b){c.attr(this,a,b)},get:function(){return c.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,e){n[a]=!0;if(e.reflect)f.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(i){var d=e[i];d&&(d="prop"===i?c.extend({writeable:!0},d):c.extend({},
d,{writeable:!0}),h[i](b,a,d),"*"!=b&&f.cfg.extendNative&&"prop"==i&&d.value&&c.isFunction(d.value)&&x(b,a,d),e[i]=d)});e.initAttr&&l.content(b,a);return e},defineNodeNameProperties:function(b,a,e,c){for(var d in a)!c&&a[d].initAttr&&l.createTmpCache(b),e&&(a[d][e]?f.log("override: "+b+"["+d+"] for "+e):(a[d][e]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][e][b]=a[d][b],delete a[d][b])}))),a[d]=f.defineNodeNameProperty(b,d,a[d]);c||l.flushTmpCache();return a},createElement:function(b,
a,e){var i;c.isFunction(a)&&(a={after:a});l.createTmpCache(b);a.before&&l.createElement(b,a.before);e&&(i=f.defineNodeNameProperties(b,e,!1,!0));a.after&&l.createElement(b,a.after);l.flushTmpCache();return i},onNodeNamesPropertyModify:function(b,a,e,i){"string"==typeof b&&(b=b.split(j));c.isFunction(e)&&(e={set:e});b.forEach(function(b){t[b]||(t[b]={});"string"==typeof a&&(a=a.split(j));e.initAttr&&l.createTmpCache(b);a.forEach(function(a){t[b][a]||(t[b][a]=[],n[a]=!0);if(e.set){if(i)e.set.only=i;
t[b][a].push(e.set)}e.initAttr&&l.content(b,a)});l.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,e){e||(e={});if(c.isFunction(e))e.set=e;f.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?o:a}},removeAttr:{value:function(){this.removeAttribute(a);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(b,a,e){if(b.nodeName){if(e===
o)return e=(b.attributes[a]||{}).value,null==e?o:e;"boolean"==typeof e?e?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,e)}},activeLang:function(){var b=[],a={},e,i,d=/:\/\/|^\.*\//,h=function(a,b,e){return b&&e&&-1!==c.inArray(b,e.availabeLangs||[])?(a.loading=!0,e=e.langSrc,d.test(e)||(e=f.cfg.basePath+e),f.loader.loadScript(e+b+".js",function(){a.langObj[b]?(a.loading=!1,j(a,!0)):c(function(){a.langObj[b]&&j(a,!0);a.loading=!1})}),!0):!1},l=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
j=function(a,b){if(a.activeLang!=e&&a.activeLang!==i){var c=m[a.module].options;if(a.langObj[e]||i&&a.langObj[i])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[i],e),l(a.module);else if(!b&&!h(a,e,c)&&!h(a,i,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),l(a.module)}};return function(d){if("string"==typeof d&&d!==e)e=d,i=e.split("-")[0],e==i&&(i=!1),c.each(b,function(a,b){j(b)});else if("object"==typeof d)if(d.register)a[d.register]||(a[d.register]=[]),a[d.register].push(d),
d.callback();else{if(!d.activeLang)d.activeLang="";b.push(d);j(d)}return e}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){f[b]=function(b,c,d,h){"string"==typeof b&&(b=b.split(j));var l={};b.forEach(function(b){l[b]=f[a](b,c,d,h)});return l}});f.isReady("webshimLocalization",!0)});
(function(c,f){var g=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<g)&&(!c.browser.msie||12>g&&7<g)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},o=function(c,f){c.getAttribute("role")||c.setAttribute("role",f)};c.webshims.addReady(function(m,j){c.each(k,function(f,n){for(var g=c(f,m).add(j.filter(f)),k=0,q=g.length;k<q;k++)o(g[k],n)});if(m===f){var g=f.getElementsByTagName("header")[0],n=f.getElementsByTagName("footer"),q=n.length;
g&&!c(g).closest("section, article")[0]&&o(g,"banner");q&&(g=n[q-1],c(g).closest("section, article")[0]||o(g,"contentinfo"))}})}})(jQuery,document);
(function(c,f,g){var k=f.audio&&f.video,o=!1;if(k)c=document.createElement("video"),f.videoBuffered="buffered"in c,o="loop"in c,g.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(g.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),g.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,f,g,n,q){var h=f.mediaelement,t=f.cfg.mediaelement,
s=function(b,a){var b=c(b),e={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!e.src)return e;var d=b.attr("type");if(d)e.type=d,e.container=c.trim(d.split(";")[0]);else if(a||(a=b[0].nodeName.toLowerCase(),"source"==a&&(a=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),d=h.getTypeForSrc(e.src,a))e.type=d,e.container=d,f.warn("you should always provide a proper mime-type using the source element. "+e.src+" detected as: "+d),c.nodeName(b[0],"source")&&b.attr("type",
d);if(d=b.attr("media"))e.media=d;return e},w=swfobject.hasFlashPlayerVersion("9.0.115"),v=function(){f.ready("mediaelement-swf",function(){if(!h.createSWF)f.modules["mediaelement-swf"].test=c.noop,f.reTest(["mediaelement-swf"],k)})};h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};h.mimeTypes.source=c.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(b,a){if(-1!=b.indexOf("youtube.com/watch?"))return"video/youtube";var b=
b.split("?")[0].split("."),b=b[b.length-1],e;c.each(h.mimeTypes[a],function(a,c){if(-1!==c.indexOf(b))return e=a,!1});return e};h.srces=function(b,a){b=c(b);if(a)b.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(a)||(a=[a]),a.forEach(function(a){var c=n.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var a=[],e=b[0].nodeName.toLowerCase(),d=s(b,
e);d.src?a.push(d):c("source",b).each(function(){d=s(this,e);d.src&&a.push(d)});return a}};c.fn.loadMediaSrc=function(b,a){return this.each(function(){a!==q&&(c(this).removeAttr("poster"),a&&c.attr(this,"poster",a));h.srces(this,b);c(this).mediaLoad()})};h.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
h.canSwfPlaySrces=function(b,a){var e="";w&&(b=c(b),a=a||h.srces(b),c.each(a,function(a,b){if(b.container&&b.src&&-1!=h.swfMimeTypes.indexOf(b.container))return e=b,!1}));return e};var u={};h.canNativePlaySrces=function(b,a){var e="";if(k){var b=c(b),d=(b[0].nodeName||"").toLowerCase();if(!u[d])return e;a=a||h.srces(b);c.each(a,function(a,c){if(c.type&&u[d].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};h.setError=function(b,a){a||(a="can't play sources");c(b).pause().data("mediaerror",
a);f.warn("mediaelementError: "+a);setTimeout(function(){c(b).data("mediaerror")&&c(b).trigger("mediaerror")},1)};var d=function(){var b;return function(a,c,i){f.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(a,c,i):b||(b=!0,v(),d(a,c,i))})}}(),x=function(b,a,c,i,f){c||!1!==c&&a&&"flash"==a.isActive?(c=h.canSwfPlaySrces(b,i))?d(b,c,a):f?h.setError(b,!1):x(b,a,!1,i,!0):(c=h.canNativePlaySrces(b,i))?a&&"flash"==a.isActive&&h.setActive(b,"html5",a):f?(h.setError(b,!1),a&&"flash"==a.isActive&&
h.setActive(b,"html5",a)):x(b,a,!0,i,!0)},l=/^(?:embed|object)$/i,y=function(b,a){var e=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{}),d=h.srces(b),n=b.parentNode;clearTimeout(e.loadTimer);c.data(b,"mediaerror",!1);if(d.length&&n&&!l.test(n.nodeName||""))a=a||f.data(b,"mediaelement"),x(b,a,t.preferFlash||q,d)};c(n).bind("ended",function(b){var a=f.data(b.target,"mediaelement");(!o||a&&"html5"!=a.isActive||c.prop(b.target,"loop"))&&setTimeout(function(){!c.prop(b.target,"paused")&&c.prop(b.target,
"loop")&&c(b.target).prop("currentTime",0).play()},1)});o||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var a=f.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=f.data(this,"mediaelement");y(this,b);k&&(!b||"html5"==b.isActive)&&a.prop._supvalue&&a.prop._supvalue.apply(this,arguments)}}});u[b]=f.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(a){var d="";k&&u[b].prop._supvalue&&(d=u[b].prop._supvalue.call(this,a),"no"==
d&&(d=""));!d&&w&&(a=c.trim((a||"").split(";")[0]),-1!=h.swfMimeTypes.indexOf(a)&&(d="maybe"));return d}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){y(b);b=null},9)}});k&&f.isReady("mediaelement-core",!0);f.addReady(function(b,a){c("video, audio",b).add(a.filter("video, audio")).each(function(){c.browser.msie&&8<f.browserVersion&&
c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():y(this);if(k){var a,b,d=this,l=function(){var a=c.prop(d,"buffered");if(a){for(var b="",e=0,f=a.length;e<f;e++)b+=a.end(e);return b}},h=function(){var a=l();a!=b&&(b=a,c(d).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=l());clearTimeout(a);a=setTimeout(h,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})});k&&w&&f.ready("WINDOWLOAD mediaelement",v)})})(jQuery,Modernizr,jQuery.webshims);jQuery.webshims.gcEval=function(c,f){with(f&&f.form||window)with(f||window)return function(c){eval(c)}.call(f||window,c)};
(function(c){var f=window.Modernizr,g=c.webshims;g.capturingEventPrevented=function(f){var g=f.isDefaultPrevented,h=f.preventDefault;f.preventDefault=function(){clearTimeout(c.data(f.target,f.type+"DefaultPrevented"));c.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){c.removeData(f.target,f.type+"DefaultPrevented")},30));return h.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!c.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0};
if(f.formvalidation){var k=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');f.bugfreeformvalidation=f.requiredSelect=!!("required"in c("select",k)[0]);if(window.opera||c.browser.webkit||window.testGoodWithFix){var o=c("input",k),m,j=function(n){var j=["form-extend","form-native-fix"];n&&(n.preventDefault(),n.stopImmediatePropagation());clearTimeout(m);setTimeout(function(){k&&(k.remove(),k=o=null)},
9);if(!f.bugfreeformvalidation||!f.requiredSelect)g.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),g.modules["form-extend"].test=c.noop;g.isReady("form-number-date-api")&&j.push("form-number-date-api");g.bugs.validationMessage&&j.push("form-message");g.reTest(j);if(c.browser.opera||window.testGoodWithFix)g.loader.loadList(["dom-extend"]),g.ready("dom-extend",function(){var f=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(j){var n=g.defineNodeNameProperty(j,
"checkValidity",{prop:{value:function(){g.fromSubmit||c(this).bind("invalid.checkvalidity",f);g.fromCheckValidity=!0;var j=n.prop._supvalue.apply(this,arguments);g.fromSubmit||c(this).unbind("invalid.checkvalidity",f);g.fromCheckValidity=!1;return j}}})})}),f.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&g.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var f=this.options||[];if(!f.length){var g=c("select",this);
if(g[0]&&g[0].options&&g[0].options.length)f=g[0].options}return f}}})};k.appendTo("head");if(window.opera||window.testGoodWithFix){g.bugs.validationMessage=!o.prop("validationMessage");if((f.inputtypes||{}).date){try{o.prop("valueAsNumber",0)}catch(r){}g.bugs.valueAsNumberSet="1970-01-01"!=o.prop("value")}o.prop("value","")}k.bind("submit",function(c){f.bugfreeformvalidation=!1;j(c)});m=setTimeout(function(){k&&k.triggerHandler("submit")},9);g.capturingEvents(["input"]);g.capturingEvents(["invalid"],
!0);c("input, select",k).bind("invalid",j).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}else g.capturingEvents(["input"]),g.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(c,f,g,k,o,m){var j={radio:1},r={checkbox:1,radio:1},n=c([]),q=function(d){var d=c(d),f=d[0].name;return j[d[0].type]&&f?c(d[0].form&&d[0].form[f]||k.getElementsByName(f)).not(d[0]):n},h=f.getContentValidationMessage=function(d,h){var l=d.getAttribute("x-moz-errormessage")||d.getAttribute("data-errormessage")||"";if(l&&-1!=l.indexOf("{")){try{l=jQuery.parseJSON(l)}catch(g){return l}"object"==typeof l&&(h=h||c.prop(d,"validity")||{valid:1},h.valid||c.each(h,
function(b,a){if(a&&"valid"!=b&&l[b])return l=l[b],!1}));f.data(d,"contentErrorMessage",l);if("object"==typeof l)l=l.defaultMessage}return l||""},t={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};c.extend(c.expr.filters,{"valid-element":function(d){return!(!c.prop(d,"willValidate")||!(c.prop(d,"validity")||{valid:1}).valid)},"invalid-element":function(d){return!(!c.prop(d,"willValidate")||(c.prop(d,"validity")||{valid:1}).valid)},"required-element":function(d){return!(!c.prop(d,
"willValidate")||!c.prop(d,"required"))},"optional-element":function(d){return!!(c.prop(d,"willValidate")&&!1===c.prop(d,"required"))},"in-range":function(d){if(!t[c.prop(d,"type")]||!c.prop(d,"willValidate"))return!1;d=c.prop(d,"validity");return!(!d||d.rangeOverflow||d.rangeUnderflow)},"out-of-range":function(d){if(!t[c.prop(d,"type")]||!c.prop(d,"willValidate"))return!1;d=c.prop(d,"validity");return!(!d||!d.rangeOverflow&&!d.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(d){c.expr.filters[d]=
c.expr.filters[d+"-element"]});var s=c.event.customEvent||{},w=c.prop,v={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(d,f,l){var h=w.apply(this,arguments);if(d&&"form"in d&&v[f]&&l!==o&&c(d).hasClass("form-ui-invalid")&&(c.prop(d,"validity")||{valid:1}).valid)c(d).getShadowElement().removeClass("form-ui-invalid"),"checked"==f&&l&&q(d).removeClass("form-ui-invalid").removeAttr("aria-invalid");return h};var u=function(d,f){var l;c.each(d,function(d,b){if(b)return l="customError"==
d?c.prop(f,"validationMessage"):d,!1});return l};c(k).bind("focusout change refreshvalidityui",function(d){if(d.target&&"submit"!=d.target.type&&c.prop(d.target,"willValidate")){var f=c.data(d.target,"webshimsswitchvalidityclass");f&&clearTimeout(f);c.data(d.target,"webshimsswitchvalidityclass",setTimeout(function(){var f=c(d.target).getNativeElement()[0],h=c.prop(f,"validity"),b=c(f).getShadowElement(),a,e,i,g;h.valid?b.hasClass("form-ui-valid")||(a="form-ui-valid",e="form-ui-invalid",g="changedvaliditystate",
i="changedvalid",r[f.type]&&f.checked&&q(f).removeClass(e).addClass(a).removeAttr("aria-invalid"),c.removeData(f,"webshimsinvalidcause")):(h=u(h,f),c.data(f,"webshimsinvalidcause")!=h&&(c.data(f,"webshimsinvalidcause",h),g="changedvaliditystate"),b.hasClass("form-ui-invalid")||(a="form-ui-invalid",e="form-ui-valid",r[f.type]&&!f.checked&&q(f).removeClass(e).addClass(a),i="changedinvalid"));a&&(b.addClass(a).removeClass(e),setTimeout(function(){c(f).trigger(i)},0));g&&setTimeout(function(){c(f).trigger(g)},
0);c.removeData(d.target,"webshimsswitchvalidityclass")},9))}});s.changedvaliditystate=!0;s.changedvalid=!0;s.changedinvalid=!0;s.refreshvalidityui=!0;f.triggerInlineForm=function(d,h){d.jquery&&(d=d[0]);var g="on"+h,j=d[g]||d.getAttribute(g)||"",b,a,h=c.Event({type:h,target:d,currentTarget:d});j&&(f.warn(g+" used. we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof j&&(a=f.gcEval(j,d),d[g]&&(b=!0,d[g]=!1)));!1===a&&(h.stopPropagation(),
h.preventDefault());c(d).trigger(h);b&&(d[g]=j);return a};s=function(){f.scrollRoot=c.browser.webkit||"BackCompat"==k.compatMode?c(k.body):c(k.documentElement)};s();f.ready("DOM",s);f.getRelOffset=function(d,f){var d=c(d),h=c(f).offset(),g;c.swap(c(d)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){g=d.offset()});h.top-=g.top;h.left-=g.left;return h};f.validityAlert=function(){var d=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",j,l=!1,n=!1,b,a={hideDelay:5E3,
showFor:function(e,d,f,h){a._create();var e=c(e),k=c(e).getShadowElement(),m=a.getOffsetFromBody(k);a.clear();h?this.hide():(this.getMessage(e,d),this.position(k,m),j.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(l=setTimeout(b,this.hideDelay)),c(g).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(n);n=setTimeout(function(){a.position(k)},9)}));f||this.setFocus(k,m)},getOffsetFromBody:function(a){return f.getRelOffset(j,
a)},setFocus:function(a,i){var h=c(a).getShadowFocusElement(),g=f.scrollRoot.scrollTop(),n=(i||h.offset()).top-30,l;f.getID&&"label"==d&&j.attr("for",f.getID(h));g>n&&(f.scrollRoot.animate({scrollTop:n-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(g-n)),80)}),l=!0);try{h[0].focus()}catch(m){}l&&(f.scrollRoot.scrollTop(g),setTimeout(function(){f.scrollRoot.scrollTop(g)},0));setTimeout(function(){c(k).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",j).text(b||h(a[0])||
a.prop("validationMessage"))},position:function(b,d){d=d?c.extend({},d):a.getOffsetFromBody(b);d.top+=b.outerHeight();j.css(d)},show:function(){"none"===j.css("display")&&j.css({opacity:0}).show();j.addClass("va-visible").fadeTo(400,1)},hide:function(){j.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(l);c(k).unbind(".validityalert");c(g).unbind(".validityalert");j.stop().removeAttr("for")},_create:function(){if(!j)j=a.errorBubble=c("<"+d+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
d+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){j.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&j.bgIframe()})}};b=c.proxy(a,"hide");return a}();(function(){var d,f=[],h;c(k).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var b=c(g.target),a=b.getShadowElement();a.hasClass("form-ui-invalid")||(a.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!d)d=c.Event("firstinvalid"),d.isInvalidUIPrevented=g.isDefaultPrevented,a=c.Event("firstinvalidsystem"),c(k).triggerHandler(a,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),b.trigger(d);d&&d.isDefaultPrevented()&&g.preventDefault();f.push(g.target);g.extraData="fix";clearTimeout(h);h=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:c(f)};d=!1;f=[];c(g.target).trigger(a,a)},9);a=b=null}})})();m.replaceValidationUI&&f.ready("DOM",function(){c(k).bind("firstinvalid",
function(d){d.isInvalidUIPrevented()||(d.preventDefault(),c.webshims.validityAlert.showFor(d.target,c(d.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(c,f,g,k,o,m){var j=f.validityMessages,g=m.overrideMessages||m.customMessages?["customValidationMessage"]:[];j.en=j.en||j["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(c){j.en.valueMissing[c]="Please select an option."});["date","time","datetime-local"].forEach(function(c){j.en.rangeUnderflow[c]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(c){j.en.rangeOverflow[c]=
"Value must be at or before {%max}."});j["en-US"]=j["en-US"]||j.en;j[""]=j[""]||j["en-US"];j.de=j.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(c){j.de.valueMissing[c]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(c){j.de.rangeUnderflow[c]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(c){j.de.rangeOverflow[c]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var r=
j[""];f.createValidationMessage=function(f,g){var h=r[g];h&&"string"!==typeof h&&(h=h[c.prop(f,"type")]||h[(f.nodeName||"").toLowerCase()]||h.defaultMessage);h&&"value,min,max,title,maxlength,label".split(",").forEach(function(g){if(-1!==h.indexOf("{%"+g)){var j=("label"==g?c.trim(c('label[for="'+f.id+'"]',f.form).text()).replace(/\*$|:$/,""):c.attr(f,g))||"";h=h.replace("{%"+g+"}",j);"value"==g&&(h=h.replace("{%valueLen}",j.length))}});return h||""};(f.bugs.validationMessage||!Modernizr.formvalidation)&&
g.push("validationMessage");f.activeLang({langObj:j,module:"form-core",callback:function(c){r=c}});Modernizr.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&f.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var f=this.options||[];if(!f.length){var g=c("select",this);if(g[0]&&g[0].options&&g[0].options.length)f=g[0].options}return f}}});g.forEach(function(g){f.defineNodeNamesProperty(["fieldset","output","button"],
g,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(j){var h=f.defineNodeNameProperty(j,g,{prop:{get:function(){var g=this,j="";if(!c.prop(g,"willValidate"))return j;var k=c.prop(g,"validity")||{valid:1};if(k.valid||(j=f.getContentValidationMessage(g,k)))return j;if(k.customError&&g.nodeName&&(j=Modernizr.formvalidation&&h.prop._supget?h.prop._supget.call(g):f.data(g,"customvalidationMessage")))return j;c.each(k,function(c,h){if("valid"!=c&&h&&(j=f.createValidationMessage(g,
c)))return!1});return j||""},writeable:!1}})})})});