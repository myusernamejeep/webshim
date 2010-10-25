(function(){if(!Array.isArray)Array.isArray=function(e){return Object.prototype.toString.call(e)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(e,f){for(var h=this.length>>>0,b=0;b<h;b++)b in this&&e.call(f,this[b],b,this)};if(!Array.prototype.map)Array.prototype.map=function(e,f){var h=this.length>>>0;if(typeof e!="function")throw new TypeError;for(var b=Array(h),d=0;d<h;d++)if(d in this)b[d]=e.call(f,this[d],d,this);return b};if(!Array.prototype.filter)Array.prototype.filter=
function(e,f){for(var h=[],b=0;b<this.length;b++)e.call(f,this[b])&&h.push(this[b]);return h};if(!Array.prototype.every)Array.prototype.every=function(e,f){for(var h=0;h<this.length;h++)if(!e.call(f,this[h]))return false;return true};if(!Array.prototype.some)Array.prototype.some=function(e,f){for(var h=0;h<this.length;h++)if(e.call(f,this[h]))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function(e){var f=this.length>>>0;if(typeof e!="function")throw new TypeError;if(f==
0&&arguments.length==1)throw new TypeError;var h=0;if(arguments.length>=2)var b=arguments[1];else{do{if(h in this){b=this[h++];break}if(++h>=f)throw new TypeError;}while(1)}for(;h<f;h++)if(h in this)b=e.call(null,b,this[h],h,this);return b};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(e){var f=this.length>>>0;if(typeof e!="function")throw new TypeError;if(f==0&&arguments.length==1)throw new TypeError;f=f-1;if(arguments.length>=2)var h=arguments[1];else{do{if(f in this){h=this[f--];
break}if(--f<0)throw new TypeError;}while(1)}for(;f>=0;f--)if(f in this)h=e.call(null,h,this[f],f,this);return h};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(e,f){var h=this.length;if(!h)return-1;var b=f||0;if(b>=h)return-1;if(b<0)b+=h;for(;b<h;b++)if(Object.prototype.hasOwnProperty.call(this,b))if(e===this[b])return b;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(e,f){var h=this.length;if(!h)return-1;var b=f||h;if(b<0)b+=h;for(b=Math.min(b,h-1);b>=
0;b--)if(Object.prototype.hasOwnProperty.call(this,b))if(e===this[b])return b;return-1};if(!Object.getPrototypeOf)Object.getPrototypeOf=function(e){return e.__proto__};if(!Object.getOwnPropertyDescriptor)Object.getOwnPropertyDescriptor=function(){return{}};if(!Object.getOwnPropertyNames)Object.getOwnPropertyNames=function(e){return Object.keys(e)};if(!Object.create)Object.create=function(e,f){var h;if(e===null)h={__proto__:null};else{if(typeof e!="object")throw new TypeError("typeof prototype["+typeof e+
"] != 'object'");h=function(){};h.prototype=e;h=new h}typeof f!=="undefined"&&Object.defineProperties(h,f);return h};if(!Object.defineProperty)Object.defineProperty=function(e,f,h){var b=Object.prototype.hasOwnProperty;if(typeof h=="object"&&e.__defineGetter__){if(b.call(h,"value")){if(!e.__lookupGetter__(f)&&!e.__lookupSetter__(f))e[f]=h.value;if(b.call(h,"get")||b.call(h,"set"))throw new TypeError("Object doesn't support this action");}else typeof h.get=="function"&&e.__defineGetter__(f,h.get);
typeof h.set=="function"&&e.__defineSetter__(f,h.set)}return e};if(!Object.defineProperties)Object.defineProperties=function(e,f){for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&Object.defineProperty(e,h,f[h]);return e};if(!Object.seal)Object.seal=function(e){return e};if(!Object.freeze)Object.freeze=function(e){return e};try{Object.freeze(function(){})}catch(a){Object.freeze=function(e){return function(f){return typeof f=="function"?f:e(f)}}(Object.freeze)}if(!Object.preventExtensions)Object.preventExtensions=
function(e){return e};if(!Object.isSealed)Object.isSealed=function(){return false};if(!Object.isFrozen)Object.isFrozen=function(){return false};if(!Object.isExtensible)Object.isExtensible=function(){return true};if(!Object.keys)Object.keys=function(e){var f=[];for(var h in e)Object.prototype.hasOwnProperty.call(e,h)&&f.push(h);return f};if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"T"+this.getHours()+":"+
this.getMinutes()+":"+this.getSeconds()+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};if(isNaN(Date.parse("T00:00")))Date=function(e){var f=function(d,c,g,k,q,p,s){var i=arguments.length;if(this instanceof e){i=i===1&&String(d)===d?new e(f.parse(d)):i>=7?new e(d,c,g,k,q,p,s):i>=6?new e(d,c,g,k,q,p):i>=5?new e(d,c,g,k,q):i>=4?new e(d,c,
g,k):i>=3?new e(d,c,g):i>=2?new e(d,c):i>=1?new e(d):new e;i.constructor=f;return i}return e.apply(this,arguments)},h=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");for(var b in e)f[b]=e[b];f.now=e.now;f.UTC=e.UTC;f.prototype=e.prototype;f.prototype.constructor=f;f.parse=function(d){var c=h.exec(d);if(c){c.shift();for(var g=c[0]===undefined,k=0;k<10;k++)if(k!==7){c[k]=+(c[k]||(k<3?1:0));
k===1&&c[k]--}if(g)return((c[3]*60+c[4])*60+c[5])*1E3+c[6];g=(c[8]*60+c[9])*60*1E3;if(c[6]==="-")g=-g;return e.UTC.apply(this,c.slice(0,7))+g}return e.parse.apply(this,arguments)};return f}(Date);var l=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=function(e){var f=this;if(typeof f.apply!="function"||typeof f.call!="function")return new TypeError;var h=l.call(arguments),b=function(){if(this instanceof b){var d=Object.create(f.prototype);f.apply(d,h.concat(l.call(arguments)));
return d}else return f.call.apply(f,h.concat(l.call(arguments)))};b.bound=f;b.boundTo=e;b.boundArgs=h;b.length=typeof f=="function"?Math.max(f.length-h.length,0):0;return b};if(!String.prototype.trim){var m=/^\s\s*/,r=/\s\s*$/;String.prototype.trim=function(){return String(this).replace(m,"").replace(r,"")}}})();
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(l){return(a.attr(l,"validity")||{valid:true}).valid},invalid:function(l){return!a.expr.filters.valid(l)},willValidate:function(l){return a.attr(l,"willValidate")}});a.webshims.validityAlert=function(){var l={hideDelay:5E3,showFor:function(b,d,c){b=a(b);var g=(b.data("inputUIReplace")||{visual:b}).visual;h();l.clear();m.attr("for",g.attr("id"));this.getMessage(b,d);this.position(g);this.show();if(this.hideDelay)r=setTimeout(e,
this.hideDelay);if(!c){g.focus();a(document).bind("focusout.validityalert",e)}},getMessage:function(b,d){a("> span",m).html(d||b.attr("validationMessage"))},position:function(b){var d=b.offset();d.top+=b.outerHeight();m.css(d)},show:function(){m.css("display")==="none"?m.fadeIn():m.fadeTo(400,1)},hide:function(){l.clear();m.fadeOut()},clear:function(){clearTimeout(r);a(document).unbind("focusout.validityalert");m.stop().removeAttr("for")},alert:a('<label class="validity-alert" role="alert"><span class="va-box" /></label>').css({position:"absolute",
display:"none"})},m=l.alert,r=false,e=a.proxy(l,"hide"),f=false,h=function(){if(!f){f=true;a(function(){m.appendTo("body")})}};return l}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||
a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};(function(){var l,m=[],r,e,f,h;if(a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes){var b={timer:undefined,prevented:false};window.addEventListener("submit",function(c){if(!b.prevented&&c.target.checkValidity&&a.attr(c.target,"novalidate")===undefined&&!c.target.checkValidity())f=true},true);var d=function(c){if(a.attr(c.target,"formnovalidate")!==undefined){b.timer&&clearTimeout(b.timer);b.prevented=true;b.timer=setTimeout(function(){b.prevented=
false},20)}};window.addEventListener("click",d,true);window.addEventListener("touchstart",d,true);window.addEventListener("touchend",d,true)}a(document).bind("invalid",function(c){if(!l){e=c.target.form;if(a.support.validity===true&&e&&!window.noHTMLExtFixes){var g=a(e).bind("submit.preventInvalidSubmit",function(k){if(a.attr(e,"novalidate")===undefined){k.stopImmediatePropagation();return false}}).data("events").submit;g&&g.length>1&&g.unshift(g.pop())}l=a.Event("firstinvalid");a(c.target).trigger(l)}l&&
l.isDefaultPrevented()&&c.preventDefault();if(a.support.validity!==true||m.indexOf(c.target)==-1)m.push(c.target);else if(!window.noHTMLExtFixes){h=true;c.stopImmediatePropagation()}c.extraData="fix";clearTimeout(r);r=setTimeout(function(){var k={type:"lastinvalid",cancelable:false,invalidlist:a(m)};f&&!h&&l.target!==document.activeElement&&document.activeElement&&!a.data(l.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(l.target);f=l=h=false;m=[];a(e).unbind("submit.preventInvalidSubmit");
a(c.target).trigger(k,k)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",function(){if(a.nodeName(this,"fieldset")){var l=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(l=false)});return l}else if(this.checkValidity)return this.checkValidity()})}})();(function(){var l=a.support.validity===true&&a.webshims.overrideValidationMessages,
m=a.support.validity!==true||"required"in document.createElement("select")||window.noHTMLExtFixes,r=!!(a.support.validity!==true||a('<input type="datetime-local" />')[0].type=="datetime-local"&&a('<input type="range" />')[0].type=="range"),e=!m||!r||l,f=a.webshims.inputTypes,h={},b=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],d=a.attr,c=a.fn.val,g=l?{value:1,checked:1}:{value:1},k=l?["textarea"]:[],q={radio:1,checkbox:1},
p=function(i,n){if(i.form){var j=(i.getAttribute&&i.getAttribute("type")||i.type||"").toLowerCase();if(!l)if(!m&&j=="select-one"||!f[j])return;l&&!n&&q[j]&&i.name?a(document.getElementsByName(i.name)).each(function(){a.attr(this,"validity")}):a.attr(i,"validity")}};if(!m||l){a.extend(g,{required:1,size:1,multiple:1,selectedIndex:1});k.push("select")}if(!r||l){a.extend(g,{min:1,max:1,step:1});k.push("input")}select=null;var s=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,
"validation-base",function(i){s=i})});a.webshims.createValidationMessage=function(i,n){var j=s[n];if(j&&typeof j!=="string")j=j[(i.getAttribute("type")||"").toLowerCase()]||j.defaultMessage;j&&["value","min","max","title","maxlength","label"].forEach(function(o){if(j.indexOf("{%"+o)!==-1){var t=(o=="label"?a.trim(a("label[for="+i.id+"]",i.form).text()).replace(/\*$|:$/,""):a.attr(i,o))||"";j=j.replace("{%"+o+"}",t);if("value"==o)j=j.replace("{%valueLen}",t.length)}});return j||""};a.each(a.support.validationMessage?
["customValidationMessage"]:["customValidationMessage","validationMessage"],function(i,n){a.webshims.attr(n,{elementNames:["input","select","textarea"],getter:function(j){var o="";if(!a.attr(j,"willValidate"))return o;var t=a.attr(j,"validity")||{valid:1};if(t.valid)return o;if(t.customError||n==="validationMessage")if(o="validationMessage"in j?j.validationMessage:a.data(j,"customvalidationMessage"))return o;a.each(t,function(v,w){if(!(v=="valid"||!w))if(o=a.webshims.createValidationMessage(j,v))return false});
return o||""}})});a.support.validationMessage=a.support.validationMessage||"shim";a.webshims.addMethod("setCustomValidity",function(i){i+="";if(this.setCustomValidity){this.setCustomValidity(i);if(e){a.data(this,"hasCustomError",!!i);p(this)}}else a.data(this,"customvalidationMessage",""+i)});if(a.support.validity===true){a.webshims.addInputType=function(i,n){f[i]=n};a.webshims.addValidityRule=function(i,n){h[i]=n};a.webshims.addValidityRule("typeMismatch",function(i,n,j,o){if(n==="")return false;
o=o.typeMismatch;if(!("type"in j))j.type=(i[0].getAttribute("type")||"").toLowerCase();if(f[j.type]&&f[j.type].mismatch)o=f[j.type].mismatch(n,i);return o})}if(!m){a.webshims.createBooleanAttrs("required",["select"]);a.webshims.addValidityRule("valueMissing",function(i,n,j,o){if(j.nodeName=="select"&&!n&&i.attr("required")&&i[0].size<2){if(!j.type)j.type=i[0].type;if(j.type=="select-one"&&a("> option:first-child:not(:disabled)",i).attr("selected"))return true}return o.valueMissing})}if(e){a.webshims.attr("validity",
{elementNames:k,getter:function(i){var n=i.validity;if(!n)return n;var j={};b.forEach(function(u){j[u]=n[u]});if(!a.attr(i,"willValidate"))return j;var o=a(i),t={type:(i.getAttribute&&i.getAttribute("type")||"").toLowerCase(),nodeName:(i.nodeName||"").toLowerCase()},v=c.call(o),w=!!a.data(i,"hasCustomError"),y;j.customError=w;if(j.valid&&j.customError)j.valid=false;else if(!j.valid){var z=true;a.each(j,function(u,x){if(x)return z=false});if(z)j.valid=true}a.each(h,function(u,x){j[u]=x(o,v,t,j);if(j[u]&&
(j.valid||!y&&l)){i.setCustomValidity(a.webshims.createValidationMessage(i,u));j.valid=false;y=true}});j.valid&&i.setCustomValidity("");return j}});a.fn.val=function(){var i=c.apply(this,arguments);this.each(function(){p(this)});return i};a.attr=function(i,n,j){var o=d.apply(this,arguments);g[n]&&j!==undefined&&i.form&&p(i);return o};if(document.addEventListener){document.addEventListener("change",function(i){p(i.target)},true);r||document.addEventListener("input",function(i){p(i.target)},true)}a.webshims.addReady(function(i){i===
document?a(k.join(",")).each(function(){p(this,true)}):a(k.join(","),i).each(function(){p(this,true)})})}})();a.webshims.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var l=a.webshims.inputTypes,m={radio:1,checkbox:1};a.webshims.addInputType=function(b,d){l[b]=d};var r={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},e={valueMissing:function(b,d,c){if(!b.attr("required"))return false;var g=false;if(!("type"in c))c.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();return g=c.nodeName=="select"?!d&&b[0].type=="select-one"&&b[0].size<2&&a("> option:first-child:not(:disabled)",b).attr("selected"):m[c.type]?!a(b[0].form&&b[0].name?b[0].form[b[0].name]:[]).filter(":checked")[0]:!d},tooLong:function(b,d,c){if(d===""||c.nodeName=="select")return false;b=b.attr("maxlength");c=false;var g=d.length;if(g&&b>=0&&d.replace&&(typeof b=="number"||b&&b==b*1))c=g>b;return c},typeMismatch:function(b,d,c){if(d===""||c.nodeName=="select")return false;
var g=false;if(!("type"in c))c.type=(b[0].getAttribute("type")||b[0].type||"").toLowerCase();if(l[c.type]&&l[c.type].mismatch)g=l[c.type].mismatch(d,b);return g},patternMismatch:function(b,d,c){if(d===""||c.nodeName=="select")return false;b=b.attr("pattern");if(!b)return false;return!RegExp("^(?:"+b+")$").test(d)}};a.webshims.addValidityRule=function(b,d){e[b]=d};a.webshims.addMethod("checkValidity",function(){var b,d=function(c){var g,k=a.attr(c,"validity");if(k)a.data(c,"cachedValidity",k);else return true;
if(!k.valid){g=a.Event("invalid");var q=a(c).trigger(g);if(!b&&!g.isDefaultPrevented()){a.webshims.validityAlert.showFor(q);b=true}}a.data(c,"cachedValidity",false);return k.valid};return function(){b=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var c=true,g=this.elements||a("input, textarea, select",this),k=0,q=g.length;k<q;k++)d(g[k])||(c=false);return c}else return this.form?d(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},
setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var b=a(this).data("events").submit;b&&b.length>1&&b.unshift(b.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(b){if(!(b.type!="submit"||!a.nodeName(b.target,"form")||a.attr(b.target,"novalidate")!==undefined||a.data(b.target,"novalidate")))if(!a(b.target).checkValidity()){!b.originalEvent&&!window.debugValidityShim&&
window.console&&console.log&&console.log("submit");b.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(b){var d=a.data(b,"cachedValidity");if(d)return d;d=a.extend({},r);if(!a.attr(b,"willValidate"))return d;var c=a(b),g=c.val(),k={nodeName:b.nodeName.toLowerCase()};d.customError=!!a.data(b,"customvalidationMessage");if(d.customError)d.valid=false;a.each(e,function(q,p){if(p(c,g,k)){d[q]=true;d.valid=false}});return d}});
a.webshims.createBooleanAttrs("required",["input","textarea","select"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var b={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(d){return!!(d.name&&d.form&&!d.disabled&&!d.readOnly&&!b[d.type]&&a.attr(d.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var b=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(d){return!b.test(d)}}()});a.webshims.addInputType("url",{mismatch:function(){var b=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(d){return!b.test(d)}}()});var f=function(){var b=this;if(b.form){a.data(b.form,"novalidate",true);setTimeout(function(){a.data(b.form,"novalidate",false)},1)}},h={submit:1,button:1};a(document).bind("click",function(b){b.target&&b.target.form&&h[b.target.type]&&a.attr(b.target,"formnovalidate")!==undefined&&f.call(b.target)});a.webshims.addReady(function(b){b=a("form",b).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",f).end();if(!document.activeElement||!document.activeElement.form)a("input, select, textarea",
b).filter("[autofocus]:first").focus()});(function(){if(a.support.validity!==true){a.support.validity="shim";var b={input:1,textarea:1},d={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},c=function(g){var k;g[0].getAttribute("type");var q=g.val(),p=function(i){if(g){var n=g.val();if(n!==q){q=n;if(!i||i.type!="input")g.trigger("input")}}},s=function(){g.unbind("focusout",s).unbind("input",p);clearInterval(k);p();g=null};clearInterval(k);k=setInterval(p,250);setTimeout(p,9);g.bind("focusout",
s).bind("input",p)};a(document).bind("focusin",function(g){if(g.target&&g.target.type&&!g.target.readonly&&!g.target.readOnly&&!g.target.disabled&&b[(g.target.nodeName||"").toLowerCase()]&&!d[g.target.type])c(a(g.target))})}})();a.webshims.createReadyEvent("validity")}},true);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var l=function(b,d,c,g,k){if(!g){g=a.data(b,"placeHolder");if(!g)return}if(k=="focus"||!k&&b===document.activeElement)g.box.removeClass("placeholder-visible");else{if(d===false)d=a.attr(b,"value");if(d)g.box.removeClass("placeholder-visible");else{if(c===false)c=a.attr(b,"placeholder");g.box[c&&!d?"addClass":"removeClass"]("placeholder-visible")}}},m=0,r=function(b){b=a(b);var d=b.attr("id"),c=!!(b.attr("title")||b.attr("aria-labeledby"));
if(!c&&d)c=!!a("label[for="+d+"]",b[0].form)[0];else if(!d){m++;d="input-placeholder-id-"+m;b.attr("id",d)}return a(c?'<span class="placeholder-text"></span>':'<label for="'+d+'" class="placeholder-text"></label>')},e=function(){var b=/\n|\r|\f|\t/g,d={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var g=a.data(c,"placeHolder");if(g)return g;g=a.data(c,"placeHolder",{text:r(c)});g.box=a(c).wrap('<span class="placeholder-box placeholder-box-'+(c.nodeName||"").toLowerCase()+
'" />').bind("focus.placeholder blur.placeholder",function(s){l(this,false,false,g,s.type)}).parent();g.text.insertAfter(c).bind("mousedown.placeholder",function(){l(this,false,false,g,"focus");c.focus();return false});a.each(["Left","Top"],function(s,i){var n=(parseInt(a.curCSS(c,"padding"+i),10)||0)+Math.max(parseInt(a.curCSS(c,"margin"+i),10)||0,0)+(parseInt(a.curCSS(c,"border"+i+"Width"),10)||0);g.text.css("padding"+i,n)});var k=a.curCSS(c,"lineHeight"),q={width:a(c).getwidth(),height:a(c).getheight()},
p=a.curCSS(c,"float");g.text.css("lineHeight")!==k&&g.text.css("lineHeight",k);q.width&&q.height&&g.text.css(q);p!=="none"&&g.box.addClass("placeholder-box-"+p);return g},update:function(c,g){if(d[a.attr(c,"type")]||a.nodeName(c,"textarea")){if(a.nodeName(c,"input"))g=g.replace(b,"");var k=e.create(c);c.setAttribute("placeholder",g);k.text.text(g);l(c,false,g,k)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(b,d){e.update(b,d)},getter:function(b){return b.getAttribute("placeholder")||
""}});var f={elementNames:["input","textarea"],setter:function(b,d,c){var g=b.getAttribute("placeholder");g&&"value"in b&&l(b,d,g);c()},getter:true};a.webshims.attr("value",f);var h=a.fn.val;a.fn.val=function(b){b!==undefined&&this.each(function(){this.nodeType===1&&f.setter(this,b,a.noop)});return h.apply(this,arguments)};a.webshims.addReady(function(b){a("input[placeholder], textarea[placeholder]",b).attr("placeholder",function(d,c){return c})})}})(jQuery);