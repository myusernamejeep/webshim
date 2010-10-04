(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var A=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},s=0;navigator.geolocation=function(){var z,f={getCurrentPosition:function(t,w,e){var h=function(){clearTimeout(i);if(!(z||!window.google||!google.loader||!google.loader.ClientLocation)){var o=google.loader.ClientLocation;z={latitude:o.latitude,longitude:o.longitude,altitude:null,accuracy:43E3,
altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null}}if(z)t({coords:z,timestamp:(new Date).getTime()});else w&&w({code:2,message:"POSITION_UNAVAILABLE"})},i;if(!window.google||!google.loader){if(a.webshims.loader.modules.geolocation.options.destroyWrite){document.write=A;document.writeln=A}a(document).one("google-loaderReady",h);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(e&&e.timeout)i=setTimeout(function(){a(document).unbind("google-loader",h);
w&&w({code:3,message:"TIMEOUT"})},e.timeout)}else setTimeout(h,1)},clearWatch:a.noop};f.watchPosition=function(t,w,e){f.getCurrentPosition(t,w,e);s++;return s};return f}()}})(jQuery);
(function(a){(function(){var s,z,f=[],t,w;a.support.validity===true&&document.addEventListener&&!window.noHTMLExtFixes&&document.addEventListener("submit",function(e){e.target.checkValidity&&a.attr(e.target,"novalidate")===undefined&&e.target.checkValidity()},true);a(document).bind("invalid",function(e){if(!s){w=e.target.form;if(a.support.validity===true&&w&&!window.noHTMLExtFixes){var h=a(w).bind("submit.preventInvalidSubmit",function(i){if(a.attr(w,"novalidate")===undefined){i.stopImmediatePropagation();
return false}}).data("events").submit;h&&h.length>1&&h.unshift(h.pop())}s=a.Event("firstinvalid");z=e;a(e.target).trigger(s)}s&&s.isDefaultPrevented()&&e.preventDefault();a.support.validity!==true||a.inArray(e.target,f)==-1?f.push(e.target):e.stopImmediatePropagation();clearTimeout(t);t=setTimeout(function(){var i={type:"lastinvalid",cancelable:false,invalidlist:a(f)};z=s=false;f=[];a(w).unbind("submit.preventInvalidSubmit");a(e.target).trigger(i,i)},0)})})();a.extend(a.expr.filters,{valid:function(s){return(a.attr(s,
"validity")||{valid:true}).valid},invalid:function(s){return!a.expr.filters.valid(s)},willValidate:function(s){return a.attr(s,"willValidate")}});var A=function(){this._create()};A.prototype={_create:function(){this.alert=a('<div class="validity-alert" role="alert"><div class="va-box" /></div>').css({position:"absolute",display:"none"});this.hideTimer=false;this.boundHide=a.proxy(this,"hide")},hideDelay:5E3,createAlert:function(){if(!this.created){this.created=true;var s=this;a(function(){s.alert.appendTo("body")})}},
showFor:function(s,z){s=a(s);var f=s.data("inputUIReplace");if(f)s=f.visual;this.createAlert();this.clear();this.getMessage(s);this.position(s);this.show();z||s.focus();this.hideTimer=setTimeout(this.boundHide,this.hideDelay);a(document).bind("focusout.validityalert",this.boundHide)},getMessage:function(s){a("> div",this.alert).html(s.attr("validationMessage"))},position:function(s){var z=s.offset();z.top+=s.outerHeight();this.alert.css(z)},clear:function(){clearTimeout(this.hideTimer);a(document).unbind("focusout.validityalert");
this.alert.stop().css({opacity:""})},show:function(){this.alert.fadeIn()},hide:function(){this.clear();this.alert.fadeOut()}};a.webshims.validityAlert=new A;a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form. Only certain values are allowed for this field. {%title}",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};
a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!",
"datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",
patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",valueMissing:"Sie m\u00fcssen einen Wert eingeben"};a.webshims.activeValidationMessages=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(s){a.webshims.activeValidationMessages=s})});a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(s,z){a.webshims.attr(z,
{elementNames:["input","select","textarea"],getter:function(f){var t="";if(!a.attr(f,"willValidate"))return t;var w=a.attr(f,"validity")||{valid:1};if(w.valid)return t;if(w.customError||z==="validationMessage")if(t="validationMessage"in f?f.validationMessage:a.data(f,"customvalidationMessage"))return t;a.each(w,function(e,h){if(!(e=="valid"||!h)){if((t=a.webshims.activeValidationMessages[e])&&typeof t!=="string")t=t[(f.getAttribute("type")||"").toLowerCase()]||t.defaultMessage;if(t)return false}});
t&&a.each(["value","min","max","title","maxlength","label"],function(e,h){if(t.indexOf("{%"+h)!==-1){var i=(h=="label"?a.trim(a("label[for="+f.id+"]",f.form).text()).replace(/\*$|:$/,""):a.attr(f,h))||"";t=t.replace("{%"+h+"}",i);if("value"==h)t=t.replace("{%valueLen}",i.length)}});return t||""}})});a.support.validationMessage="shim"})(jQuery);
(function(a){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",function(){if(a.nodeName(this,"fieldset")){var A=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(A=false)});return A}else if(this.checkValidity)return this.checkValidity()})}})(jQuery);
(function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var A=a.webshims.inputTypes,s={radio:1,checkbox:1};a.webshims.addInputType=function(e,h){A[e]=h};var z={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},f={valueMissing:function(e,h){if(!e.attr("required"))return false;return s[e[0].type]?!a(e[0].form&&e[0].name?e[0].form[e[0].name]:[]).filter(":checked")[0]:
!h},tooLong:function(e,h){if(h==="")return false;var i=e.attr("maxlength"),o=false,b=h.length;if(b&&i>=0&&h.replace&&(typeof i=="number"||i&&i==i*1))o=b>i;return o},typeMismatch:function(e,h,i){if(h==="")return false;var o=false;if(!("type"in i))i.type=(e[0].getAttribute("type")||"").toLowerCase();if(A[i.type]&&A[i.type].mismatch)o=A[i.type].mismatch(h,e);return o},patternMismatch:function(e,h){if(h==="")return false;var i=e.attr("pattern");if(!i)return false;return!RegExp("^(?:"+i+")$").test(h)}};
a.webshims.addValidityRule=function(e,h){f[e]=h};a.webshims.addMethod("checkValidity",function(){var e,h=function(i){var o,b=a.attr(i,"validity");if(b)a.data(i,"cachedValidity",b);else b={valid:true};if(!b.valid){o=a.Event("invalid");var g=a(i).trigger(o);if(!o.isDefaultPrevented()){e||a.webshims.validityAlert.showFor(g);e=true}}a.data(i,"cachedValidity",false);return b.valid};return function(){e=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var i=true,o=this.elements||a("input, textarea, select",
this),b=0,g=o.length;b<g;b++)h(o[b])||(i=false);return i}else return this.form?h(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var e=a(this).data("events").submit;e&&e.length>1&&e.unshift(e.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(e){if(!(e.type!=
"submit"||!a.nodeName(e.target,"form")||a.attr(e.target,"novalidate")!==undefined||a.data(e.target,"novalidate")))if(!a(e.target).checkValidity()){!e.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");e.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(e){var h=a.data(e,"cachedValidity");if(h)return h;h=a.extend({},z);if(!a.attr(e,"willValidate"))return h;var i=a(e),o=i.val(),
b={};h.customError=!!a.data(e,"customvalidationMessage");if(h.customError)h.valid=false;if((e.nodeName||"").toLowerCase()=="select")return h;a.each(f,function(g,k){if(k(i,o,b)){h[g]=true;h.valid=false}});return h}});a.webshims.addMethod("setCustomValidity",function(e){a.data(this,"customvalidationMessage",""+e)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(e,h){var i=h()||a.data(e,"customvalidationMessage");return!i||!a.attr(e,"willValidate")?"":
i}});a.webshims.createBooleanAttrs("required",["input","textarea"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var e={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(h){return!!(h.name&&h.form&&!h.disabled&&!h.readonly&&!e[h.type]&&a.attr(h.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var e=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(h){return!e.test(h)}}()});a.webshims.addInputType("url",{mismatch:function(){var e=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(h){return!e.test(h)}}()});var t=function(){var e=this;if(e.form){a.data(e.form,"novalidate",true);setTimeout(function(){a.data(e.form,"novalidate",false)},1)}},w={submit:1,button:1};a(document).bind("click",function(e){e.target&&e.target.form&&w[e.target.type]&&a.attr(e.target,"formnovalidate")!==undefined&&t.call(e.target)});a.webshims.addReady(function(e){a("form",e).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",t)})}})(jQuery);
(function(a){if(a.support.validity!==true){a.support.validity="shim";var A={input:1,textarea:1},s={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},z=function(f){var t;f[0].getAttribute("type");var w=f.val(),e=function(i){if(f){var o=f.val();if(o!==w){w=o;if(!i||i.type!="input")f.trigger("input")}}},h=function(){f.unbind("focusout",h).unbind("input",e);clearInterval(t);e();f=null};clearInterval(t);t=setInterval(e,150);setTimeout(e,9);f.bind("focusout",h).bind("input",e)};a(document).bind("focusin",
function(f){if(f.target&&f.target.type&&!f.target.readonly&&!f.target.readOnly&&!f.target.disabled&&A[(f.target.nodeName||"").toLowerCase()]&&!s[f.target.type])z(a(f.target))})}})(jQuery);
(function(a){var A,s=function(){if(!A){A=true;var z=parseInt("NaN",10),f=a.webshims.inputTypes,t=function(b){return typeof b=="number"||a.trim(b)&&b==b*1},w=function(b){return a('<input type="'+b+'" />').attr("type")===b},e=function(b){return(b.getAttribute("type")||"").toLowerCase()},h=function(b,g){var k=a.attr(b,"step");if(k==="any")return k;g=g||e(b);if(!f[g]||!f[g].step)return k;k=f.number.asNumber(k);return(!isNaN(k)&&k>0?k:f[g].step)*f[g].stepScaleFactor},i=function(b,g,k){if(!(b+"AsNumber"in
k)){k[b+"AsNumber"]=f[k.type].asNumber(g.attr(b));if(isNaN(k[b+"AsNumber"])&&b+"Default"in f[k.type])k[b+"AsNumber"]=f[k.type][b+"Default"]}},o=function(b,g){b=""+b;g-=b.length;for(var k=0;k<g;k++)b="0"+b;return b};a.webshims.addValidityRule("stepMismatch",function(b,g,k){if(g==="")return false;if(!("type"in k))k.type=e(b[0]);if(k.type=="date")return false;var v=false;if(f[k.type]&&f[k.type].step){if(!("step"in k))k.step=h(b[0],k.type);if(k.step=="any")return false;if(!("valueAsNumber"in k))k.valueAsNumber=
f[k.type].asNumber(g);if(isNaN(k.valueAsNumber))return false;i("min",b,k);b=k.minAsNumber;if(isNaN(b))b=f[k.type].stepBase||0;v=Math.abs((k.valueAsNumber-b)%k.step);v=!(v<=1.0E-7||Math.abs(v-k.step)<=1.0E-7)}return v});a.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(b,g){a.webshims.addValidityRule(g.name,function(k,v,n){var q=false;if(v==="")return q;if(!("type"in n))n.type=e(k[0]);if(f[n.type]&&f[n.type].asNumber){if(!("valueAsNumber"in n))n.valueAsNumber=
f[n.type].asNumber(v);if(isNaN(n.valueAsNumber))return false;i(g.attr,k,n);if(isNaN(n[g.attr+"AsNumber"]))return q;q=n[g.attr+"AsNumber"]*g.factor<=n.valueAsNumber*g.factor-1.0E-7}return q})});a.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(b){var g=e(b);return f[g]&&f[g].asNumber?f[g].asNumber(a.attr(b,"value")):z},setter:function(b,g,k){var v=e(b);if(f[v]&&f[v].numberToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";
if(isNaN(g))a.attr(b,"value","");else{g=f[v].numberToString(g);if(g!==false)a.attr(b,"value",g);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else k()}});a.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(b){var g=e(b);return f[g]&&f[g].asDate&&!f[g].noAsDate?f[g].asDate(a.attr(b,"value")):null},setter:function(b,g,k){var v=e(b);if(f[v]&&f[v].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(g===null)a.attr(b,
"value","");else{g=f[v].dateToString(g);if(g!==false)a.attr(b,"value",g);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else k()}});w("number")||a.webshims.addInputType("number",{mismatch:function(b){return!t(b)},step:1,stepScaleFactor:1,asNumber:function(b){return t(b)?b*1:z},numberToString:function(b){return t(b)?b:false}});!w("number")&&f.number&&a.webshims.addInputType("range",a.extend({},f.number,{minDefault:0,maxDefault:100}));!w("date")&&f.number&&a.webshims.addInputType("date",{mismatch:function(b){if(!b||
!b.split||!/\d$/.test(b))return true;var g=b.split(/\u002D/);if(g.length!==3)return true;var k=false;a.each(g,function(v,n){if(!(t(n)||n&&n=="0"+n*1)){k=true;return false}});if(k)return k;if(g[0].length!==4||g[1].length!=2||g[1]>12||g[2].length!=2||g[2]>33)k=true;return b!==this.dateToString(this.asDate(b,true))},step:1,stepScaleFactor:864E5,asDate:function(b,g){if(!g&&this.mismatch(b))return null;return new Date(this.asNumber(b,true))},asNumber:function(b,g){var k=z;if(g||!this.mismatch(b)){b=b.split(/\u002D/);
k=Date.UTC(b[0],b[1]-1,b[2])}return k},numberToString:function(b){return t(b)?this.dateToString(new Date(b*1)):false},dateToString:function(b){return b&&b.getFullYear?b.getUTCFullYear()+"-"+o(b.getUTCMonth()+1,2)+"-"+o(b.getUTCDate(),2):false}});!w("time")&&f.number&&f.date&&a.webshims.addInputType("time",a.extend({},f.date,{mismatch:function(b,g){if(!b||!b.split||!/\d$/.test(b))return true;b=b.split(/\u003A/);if(b.length<2||b.length>3)return true;var k=false,v;if(b[2]){b[2]=b[2].split(/\u002E/);
v=parseInt(b[2][1],10);b[2]=b[2][0]}a.each(b,function(n,q){if(!(t(q)||q&&q=="0"+q*1)||q.length!==2){k=true;return false}});if(k)return true;if(b[0]>23||b[0]<0||b[1]>59||b[1]<0)return true;if(b[2]&&(b[2]>59||b[2]<0))return true;if(v&&isNaN(v))return true;if(v)if(v<100)v*=100;else if(v<10)v*=10;return g===true?[b,v]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var g=z;b=this.mismatch(b,true);if(b!==true){g=
Date.UTC("1970",0,1,b[0][0],b[0][1],b[0][2]||0);if(b[1])g+=b[1]}return g},dateToString:function(b){if(b&&b.getUTCHours){var g=o(b.getUTCHours(),2)+":"+o(b.getUTCMinutes(),2),k=b.getSeconds();if(k!="0")g+=":"+o(k,2);k=b.getUTCMilliseconds();if(k!="0")g+="."+o(k,3);return g}else return false}}));!w("datetime-local")&&f.number&&f.time&&a.webshims.addInputType("datetime-local",a.extend({},f.time,{mismatch:function(b,g){if(!b||!b.split||(b+"special").split(/\u0054/).length!==2)return true;b=b.split(/\u0054/);
return f.date.mismatch(b[0])||f.time.mismatch(b[1],g)},noAsDate:true,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var g=z,k=this.mismatch(b,true);if(k!==true){b=b.split(/\u0054/)[0].split(/\u002D/);g=Date.UTC(b[0],b[1]-1,b[2],k[0][0],k[0][1],k[0][2]||0);if(k[1])g+=k[1]}return g},dateToString:function(b,g){return f.date.dateToString(b)+"T"+f.time.dateToString(b,g)}}));(function(){var b=a.webshims.loader.modules["number-date-type"].options,g=function(n,
q,r){r=r||{};if(!("type"in r))r.type=e(n);if(!("step"in r))r.step=h(n,r.type);if(!("valueAsNumber"in r))r.valueAsNumber=f[r.type].asNumber(a.attr(n,"value"));var D=r.step=="any"?f[r.type].step*f[r.type].stepScaleFactor:r.step;i("min",a(n),r);i("max",a(n),r);if(isNaN(r.valueAsNumber))r.valueAsNumber=f[r.type].stepBase||0;if(r.step!=="any")r.valueAsNumber=Math.round((r.valueAsNumber-(r.valueAsNumber-(r.minAsnumber||0))%r.step)*1E7)/1E7;n=r.valueAsNumber+D*q;if(!isNaN(r.minAsNumber)&&n<r.minAsNumber)n=
r.valueAsNumber*q<r.minAsNumber?r.minAsNumber:isNaN(r.maxAsNumber)?Number.MAX_VALUE:r.maxAsNumber;else if(!isNaN(r.maxAsNumber)&&n>r.maxAsNumber)n=r.valueAsNumber*q>r.maxAsNumber?r.maxAsNumber:isNaN(r.minAsNumber)?Number.MIN_VALUE:r.minAsNumber;return n},k=function(n,q,r){if(!(n.disabled||n.readOnly||a(r).hasClass("step-controls"))){a.attr(n,"value",f[q].numberToString(g(n,a(r).hasClass("step-up")?1:-1,{type:q})));a(n).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==
n)try{n.focus()}catch(D){}setTimeout(function(){if(document.activeElement!==n)try{n.focus()}catch(J){}a(n).one("blur.stepeventshim",function(){a(n).trigger("change")})},0)}}};if(b.stepArrows){var v={elementNames:["input"],setter:function(n,q,r){r();if(q=a.data(n,"step-controls"))q[n.disabled||n.readonly?"addClass":"removeClass"]("disabled-step-control")}};a.webshims.attr("disabled",v);a.webshims.attr("readonly",v)}a.webshims.addReady(function(n){b.stepArrows&&a("input",n).each(function(){var q=e(this);
if(!(!f[q]||!f[q].asNumber||!b.stepArrows||b.stepArrows!==true&&!b.stepArrows[q])){var r=this,D=a(this).css("direction")=="rtl"?{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},J=a('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[D.action](this).bind("mousedown mousepress",function(F){k(r,q,F.target);return false});a(this).addClass("has-step-controls").data("step-controls",J).attr({readonly:this.readOnly,
disabled:this.disabled});if(b.recalcWidth){var K=J.outerWidth(true)+(parseInt(a(this).css("padding"+D.side),10)||0),B=parseInt(a(this).css("border"+D.side+"width"),10)||0;J.css(D.otherSide,(B+K)*-1);K++;a(this).css("width",a(this).width()-K).css("padding"+D.side,K)}}})})})();a.webshims.attr("type",{elementNames:["input"],getter:function(b){var g=e(b);return a.webshims.inputTypes[g]?g:b.type||b.getAttribute("type")},setter:true})}};if(a.webshims.addValidityRule)s();else a.support.validity===true?a.webshims.readyModules("implement-types",
s,true,true):a.webshims.readyModules("validity",s,true,true)})(jQuery);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var A=function(e,h,i,o,b){if(!o){o=a.data(e,"placeHolder");if(!o)return}if(b=="focus")o.box.removeClass("placeholder-visible");else{if(h===false)h=a.attr(e,"value");if(h)o.box.removeClass("placeholder-visible");else{if(i===false)i=a.attr(e,"placeholder");o.box[i&&!h?"addClass":"removeClass"]("placeholder-visible")}}},s=0,z=function(e){e=a(e);var h=e.attr("id"),i=!!(e.attr("title")||e.attr("aria-labeledby"));if(!i&&h)i=!!a("label[for="+
h+"]",e[0].form)[0];else if(!h){s++;h="input-placeholder-id-"+s;e.attr("id",h)}return a(i?'<span class="placeholder-text"></span>':'<label for="'+h+'" class="placeholder-text"></label>')},f=function(){var e=/\n|\r|\f|\t/g,h={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(i){var o=a.data(i,"placeHolder");if(o)return o;o=a.data(i,"placeHolder",{text:z(i)});o.box=a(i).wrap('<span class="placeholder-box placeholder-box-'+(i.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(v){A(this,false,false,o,v.type)}).parent();o.text.insertAfter(i).bind("mousedown.placeholder",function(){A(this,false,false,o,"focus");i.focus()});a.each(["Left","Top"],function(v,n){var q=(parseInt(a.curCSS(i,"padding"+n),10)||0)+Math.max(parseInt(a.curCSS(i,"margin"+n),10)||0,0)+(parseInt(a.curCSS(i,"border"+n+"Width"),10)||0);o.text.css("padding"+n,q)});var b=a.curCSS(i,"lineHeight"),g={width:a(i).width()||parseInt(a.curCSS(i,"width"),10),height:a(i).height()||parseInt(a.curCSS(i,"height"),
10)},k=a.curCSS(i,"float");o.text.css("lineHeight")!==b&&o.text.css("lineHeight",b);g.width&&g.height&&o.text.css(g);k!=="none"&&o.box.addClass("placeholder-box-"+k);return o},update:function(i,o){if(h[a.attr(i,"type")]||a.nodeName(i,"textarea")){if(a.nodeName(i,"input"))o=o.replace(e,"");var b=f.create(i);i.setAttribute("placeholder",o);b.text.text(o);A(i,false,o,b)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(e,h){f.update(e,h)},getter:function(e){return e.getAttribute("placeholder")||
""}});var t={elementNames:["input","textarea"],setter:function(e,h,i){var o=e.getAttribute("placeholder");o&&"value"in e&&A(e,h,o);i()},getter:true};a.webshims.attr("value",t);var w=a.fn.val;a.fn.val=function(e){e!==undefined&&this.each(function(){this.nodeType===1&&t.setter(this,e,a.noop)});return w.apply(this,arguments)};a.webshims.addReady(function(e){a("input[placeholder], textarea[placeholder]",e).attr("placeholder",function(h,i){return i})})}})(jQuery);
document.createElement("canvas").getContext||function(a){function A(){return this.context_||(this.context_=new o(this))}function s(c,d){var j=P.call(arguments,2);return function(){return c.apply(d,j.concat(P.call(arguments)))}}function z(c){var d=c.srcElement;switch(c.propertyName){case "width":d.style.width=d.attributes.width.nodeValue+"px";d.getContext().clearRect();break;case "height":d.style.height=d.attributes.height.nodeValue+"px";d.getContext().clearRect();break}}function f(c){c=c.srcElement;
if(c.firstChild){c.firstChild.style.width=c.clientWidth+"px";c.firstChild.style.height=c.clientHeight+"px"}}function t(){return[[1,0,0],[0,1,0],[0,0,1]]}function w(c,d){for(var j=t(),l=0;l<3;l++)for(var m=0;m<3;m++){for(var x=0,u=0;u<3;u++)x+=c[l][u]*d[u][m];j[l][m]=x}return j}function e(c,d){d.fillStyle=c.fillStyle;d.lineCap=c.lineCap;d.lineJoin=c.lineJoin;d.lineWidth=c.lineWidth;d.miterLimit=c.miterLimit;d.shadowBlur=c.shadowBlur;d.shadowColor=c.shadowColor;d.shadowOffsetX=c.shadowOffsetX;d.shadowOffsetY=
c.shadowOffsetY;d.strokeStyle=c.strokeStyle;d.globalAlpha=c.globalAlpha;d.arcScaleX_=c.arcScaleX_;d.arcScaleY_=c.arcScaleY_;d.lineScale_=c.lineScale_}function h(c){var d,j=1;c=String(c);if(c.substring(0,3)=="rgb"){d=c.indexOf("(",3);var l=c.indexOf(")",d+1);l=c.substring(d+1,l).split(",");d="#";for(var m=0;m<3;m++)d+=Q[Number(l[m])];if(l.length==4&&c.substr(3,1)=="a")j=l[3]}else d=c;return{color:d,alpha:j}}function i(c){switch(c){case "butt":return"flat";case "round":return"round";case "square":default:return"square"}}
function o(c){this.m_=t();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=B*1;this.globalAlpha=1;this.canvas=c;var d=c.ownerDocument.createElement("div");d.style.width=c.clientWidth+"px";d.style.height=c.clientHeight+"px";d.style.overflow="hidden";d.style.position="absolute";c.appendChild(d);this.element_=d;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function b(c,d,j,l){c.currentPath_.push({type:"bezierCurveTo",
cp1x:d.x,cp1y:d.y,cp2x:j.x,cp2y:j.y,x:l.x,y:l.y});c.currentX_=l.x;c.currentY_=l.y}function g(c,d,j){var l;a:{for(l=0;l<3;l++)for(var m=0;m<2;m++)if(!isFinite(d[l][m])||isNaN(d[l][m])){l=false;break a}l=true}if(l){c.m_=d;if(j)c.lineScale_=K(J(d[0][0]*d[1][1]-d[0][1]*d[1][0]))}}function k(c){this.type_=c;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function v(){}var n=Math,q=n.round,r=n.sin,D=n.cos,J=n.abs,K=n.sqrt,B=10,F=B/2,P=Array.prototype.slice,R={init:function(c){if(/MSIE/.test(navigator.userAgent)&&
!window.opera){c=c||document;c.createElement("canvas");a(s(this.init_,this,c))}},init_:function(c){c.namespaces.g_vml_||c.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");c.namespaces.g_o_||c.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!c.styleSheets.ex_canvas_){var d=c.createStyleSheet();d.owningElement.id="ex_canvas_";d.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}c=
c.getElementsByTagName("canvas");for(d=0;d<c.length;d++)this.initElement(c[d])},initElement:function(c){if(!c.getContext){c.getContext=A;c.innerHTML="";c.attachEvent("onpropertychange",z);c.attachEvent("onresize",f);var d=c.attributes;if(d.width&&d.width.specified)c.style.width=d.width.nodeValue+"px";else c.width=c.clientWidth;if(d.height&&d.height.specified)c.style.height=d.height.nodeValue+"px";else c.height=c.clientHeight}return c}};R.init();for(var Q=[],y=0;y<16;y++)for(var N=0;N<16;N++)Q[y*16+
N]=y.toString(16)+N.toString(16);y=o.prototype;y.clearRect=function(){this.element_.innerHTML=""};y.beginPath=function(){this.currentPath_=[]};y.moveTo=function(c,d){var j=this.getCoords_(c,d);this.currentPath_.push({type:"moveTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};y.lineTo=function(c,d){var j=this.getCoords_(c,d);this.currentPath_.push({type:"lineTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};y.bezierCurveTo=function(c,d,j,l,m,x){m=this.getCoords_(m,x);c=this.getCoords_(c,
d);j=this.getCoords_(j,l);b(this,c,j,m)};y.quadraticCurveTo=function(c,d,j,l){c=this.getCoords_(c,d);j=this.getCoords_(j,l);l={x:this.currentX_+2/3*(c.x-this.currentX_),y:this.currentY_+2/3*(c.y-this.currentY_)};b(this,l,{x:l.x+(j.x-this.currentX_)/3,y:l.y+(j.y-this.currentY_)/3},j)};y.arc=function(c,d,j,l,m,x){j*=B;var u=x?"at":"wa",p=c+D(l)*j-F,C=d+r(l)*j-F;l=c+D(m)*j-F;m=d+r(m)*j-F;if(p==l&&!x)p+=0.125;c=this.getCoords_(c,d);p=this.getCoords_(p,C);l=this.getCoords_(l,m);this.currentPath_.push({type:u,
x:c.x,y:c.y,radius:j,xStart:p.x,yStart:p.y,xEnd:l.x,yEnd:l.y})};y.rect=function(c,d,j,l){this.moveTo(c,d);this.lineTo(c+j,d);this.lineTo(c+j,d+l);this.lineTo(c,d+l);this.closePath()};y.strokeRect=function(c,d,j,l){var m=this.currentPath_;this.beginPath();this.moveTo(c,d);this.lineTo(c+j,d);this.lineTo(c+j,d+l);this.lineTo(c,d+l);this.closePath();this.stroke();this.currentPath_=m};y.fillRect=function(c,d,j,l){var m=this.currentPath_;this.beginPath();this.moveTo(c,d);this.lineTo(c+j,d);this.lineTo(c+
j,d+l);this.lineTo(c,d+l);this.closePath();this.fill();this.currentPath_=m};y.createLinearGradient=function(c,d,j,l){var m=new k("gradient");m.x0_=c;m.y0_=d;m.x1_=j;m.y1_=l;return m};y.createRadialGradient=function(c,d,j,l,m,x){var u=new k("gradientradial");u.x0_=c;u.y0_=d;u.r0_=j;u.x1_=l;u.y1_=m;u.r1_=x;return u};y.drawImage=function(c){var d,j,l,m,x,u,p,C;l=c.runtimeStyle.width;m=c.runtimeStyle.height;c.runtimeStyle.width="auto";c.runtimeStyle.height="auto";var G=c.width,H=c.height;c.runtimeStyle.width=
l;c.runtimeStyle.height=m;if(arguments.length==3){d=arguments[1];j=arguments[2];x=u=0;p=l=G;C=m=H}else if(arguments.length==5){d=arguments[1];j=arguments[2];l=arguments[3];m=arguments[4];x=u=0;p=G;C=H}else if(arguments.length==9){x=arguments[1];u=arguments[2];p=arguments[3];C=arguments[4];d=arguments[5];j=arguments[6];l=arguments[7];m=arguments[8]}else throw Error("Invalid number of arguments");var E=this.getCoords_(d,j),I=[];I.push(" <g_vml_:group",' coordsize="',B*10,",",B*10,'"',' coordorigin="0,0"',
' style="width:',10,"px;height:",10,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]){var L=[];L.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",q(E.x/B),",","Dy=",q(E.y/B),"");var M=this.getCoords_(d+l,j),O=this.getCoords_(d,j+m);d=this.getCoords_(d+l,j+m);E.x=n.max(E.x,M.x,O.x,d.x);E.y=n.max(E.y,M.y,O.y,d.y);I.push("padding:0 ",q(E.x/B),"px ",q(E.y/B),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",L.join(""),", sizingmethod='clip');")}else I.push("top:",
q(E.y/B),"px;left:",q(E.x/B),"px;");I.push(' ">','<g_vml_:image src="',c.src,'"',' style="width:',B*l,"px;"," height:",B*m,'px;"',' cropleft="',x/G,'"',' croptop="',u/H,'"',' cropright="',(G-x-p)/G,'"',' cropbottom="',(H-u-C)/H,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",I.join(""))};y.stroke=function(c){var d=[],j=h(c?this.fillStyle:this.strokeStyle),l=j.color;j=j.alpha*this.globalAlpha;d.push("<g_vml_:shape",' filled="',!!c,'"',' style="position:absolute;width:',10,
"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',B*10," ",B*10,'"',' stroked="',!c,'"',' path="');for(var m={x:null,y:null},x={x:null,y:null},u=0;u<this.currentPath_.length;u++){var p=this.currentPath_[u];switch(p.type){case "moveTo":d.push(" m ",q(p.x),",",q(p.y));break;case "lineTo":d.push(" l ",q(p.x),",",q(p.y));break;case "close":d.push(" x ");p=null;break;case "bezierCurveTo":d.push(" c ",q(p.cp1x),",",q(p.cp1y),",",q(p.cp2x),",",q(p.cp2y),",",q(p.x),",",q(p.y));break;case "at":case "wa":d.push(" ",
p.type," ",q(p.x-this.arcScaleX_*p.radius),",",q(p.y-this.arcScaleY_*p.radius)," ",q(p.x+this.arcScaleX_*p.radius),",",q(p.y+this.arcScaleY_*p.radius)," ",q(p.xStart),",",q(p.yStart)," ",q(p.xEnd),",",q(p.yEnd));break}if(p){if(m.x==null||p.x<m.x)m.x=p.x;if(x.x==null||p.x>x.x)x.x=p.x;if(m.y==null||p.y<m.y)m.y=p.y;if(x.y==null||p.y>x.y)x.y=p.y}}d.push(' ">');if(c)if(typeof this.fillStyle=="object"){l=this.fillStyle;p=0;c={x:0,y:0};j=0;var C=1;if(l.type_=="gradient"){p=l.x1_/this.arcScaleX_;m=l.y1_/
this.arcScaleY_;u=this.getCoords_(l.x0_/this.arcScaleX_,l.y0_/this.arcScaleY_);p=this.getCoords_(p,m);p=Math.atan2(p.x-u.x,p.y-u.y)*180/Math.PI;if(p<0)p+=360;if(p<1.0E-6)p=0}else{u=this.getCoords_(l.x0_,l.y0_);j=x.x-m.x;C=x.y-m.y;c={x:(u.x-m.x)/j,y:(u.y-m.y)/C};j/=this.arcScaleX_*B;C/=this.arcScaleY_*B;u=n.max(j,C);j=2*l.r0_/u;C=2*l.r1_/u-j}m=l.colors_;m.sort(function(O,S){return O.offset-S.offset});x=m.length;var G=m[0].color,H=m[x-1].color,E=m[0].alpha*this.globalAlpha,I=m[x-1].alpha*this.globalAlpha,
L=[];for(u=0;u<x;u++){var M=m[u];L.push(M.offset*C+j+" "+M.color)}d.push('<g_vml_:fill type="',l.type_,'"',' method="none" focus="100%"',' color="',G,'"',' color2="',H,'"',' colors="',L.join(","),'"',' opacity="',I,'"',' g_o_:opacity2="',E,'"',' angle="',p,'"',' focusposition="',c.x,",",c.y,'" />')}else d.push('<g_vml_:fill color="',l,'" opacity="',j,'" />');else{c=this.lineScale_*this.lineWidth;if(c<1)j*=c;d.push("<g_vml_:stroke",' opacity="',j,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',
this.miterLimit,'"',' endcap="',i(this.lineCap),'"',' weight="',c,'px"',' color="',l,'" />')}d.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",d.join(""))};y.fill=function(){this.stroke(true)};y.closePath=function(){this.currentPath_.push({type:"close"})};y.getCoords_=function(c,d){var j=this.m_;return{x:B*(c*j[0][0]+d*j[1][0]+j[2][0])-F,y:B*(c*j[0][1]+d*j[1][1]+j[2][1])-F}};y.save=function(){var c={};e(this,c);this.aStack_.push(c);this.mStack_.push(this.m_);this.m_=w(t(),this.m_)};
y.restore=function(){e(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};y.translate=function(c,d){g(this,w([[1,0,0],[0,1,0],[c,d,1]],this.m_),false)};y.rotate=function(c){var d=D(c);c=r(c);g(this,w([[d,c,0],[-c,d,0],[0,0,1]],this.m_),false)};y.scale=function(c,d){this.arcScaleX_*=c;this.arcScaleY_*=d;g(this,w([[c,0,0],[0,d,0],[0,0,1]],this.m_),true)};y.transform=function(c,d,j,l,m,x){g(this,w([[c,d,0],[j,l,0],[m,x,1]],this.m_),true)};y.setTransform=function(c,d,j,l,m,x){g(this,[[c,d,0],[j,l,0],
[m,x,1]],true)};y.clip=function(){};y.arcTo=function(){};y.createPattern=function(){return new v};k.prototype.addColorStop=function(c,d){d=h(d);this.colors_.push({offset:c,color:d.color,alpha:d.alpha})};G_vmlCanvasManager=R;CanvasRenderingContext2D=o;CanvasGradient=k;CanvasPattern=v;a.support.canvas="shim";a.webshims.addMethod("getContext",function(c){this.getContext||G_vmlCanvasManager.initElement(this);return this.getContext(c)});a.webshims.addReady(function(c){document!==c&&a("canvas",c).each(function(){this.getContext||
G_vmlCanvasManager.initElement(this)})})}(jQuery);