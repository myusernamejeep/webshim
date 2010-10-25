(function(b){b.support.inputUI="shim";var j=b.webshims.modules.inputUI.options,g=function(d){b("input",d).each(function(){var c=b.attr(this,"type");g[c]&&!b.data(this,"inputUIReplace")&&g[c](b(this))})};g.common=function(d,c,a){b.support.validity===true&&d.bind("firstinvalid",function(f){setTimeout(function(){b.data(f.target,"maybePreventedinvalid")||b.webshims.validityAlert.showFor(f.target)},30)});var e={css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},outerWidth:d.getouterWidth()};
c.addClass(d[0].className).data("html5element",d);d.after(c).data("inputUIReplace",{visual:c,methods:a}).hide();return e};g["datetime-local"]=function(d){if(b.fn.datepicker){var c=b('<span class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),a=this.common(d,c,g["datetime-local"].attrs),e=b("input.input-datetime-local-date",c);b("input",c).data("html5element",b.data(c[0],"html5element"));if(a.css){c.css(a.css);
if(a.outerWidth){c.outerWidth(a.outerWidth);a=c.getwidth();e.css({marginLeft:0,marginRight:2}).outerWidth(Math.floor(a*0.61));b("input.input-datetime-local-time").css({marginLeft:2,marginRight:0}).outerWidth(Math.floor(a*0.37))}}b.webshims.triggerDomUpdate(c);a=b("input.input-datetime-local-date",c).datepicker(b.extend({},j.date)).bind("change",function(){var f,h=b("input.input-datetime-local-time",c).attr("value");try{f=(f=b.datepicker.parseDate(e.datepicker("option","dateFormat"),e.attr("value")))?
b.datepicker.formatDate("yy-mm-dd",f):e.attr("value")}catch(i){f=e.attr("value")}if(!b("input.input-datetime-local-time",c).attr("value")){h="00:00";b("input.input-datetime-local-time",c).attr("value",h)}g["datetime-local"].blockAttr=true;d.attr("value",f+"T"+h);g["datetime-local"].blockAttr=false;d.trigger("change")}).data("datepicker");b("input.input-datetime-local-time",c).bind("input change",function(){var f=d.attr("value").split("T");if(f.length<2||!f[0])f[0]=b.datepicker.formatDate("yy-mm-dd",
new Date);f[1]=b.attr(this,"value");g["datetime-local"].blockAttr=true;try{e.attr("value",b.datepicker.formatDate(e.datepicker("option","dateFormat"),b.datepicker.parseDate("yy-mm-dd",f[0])))}catch(h){}d.attr("value",f.join("T"));g["datetime-local"].blockAttr=false;d.trigger("change")});a.dpDiv.addClass("input-date-datepicker-control");b.each(["disabled","min","max","value"],function(f,h){d.attr(h,function(i,k){return k||""})})}};g["datetime-local"].attrs={disabled:function(d,c,a){b("input.input-datetime-local-date",
c).datepicker("option","disabled",!!a);b("input.input-datetime-local-time",c).attr("disabled",!!a)},min:function(d,c,a){a=a.split?a.split("T"):[];try{a=b.datepicker.parseDate("yy-mm-dd",a[0])}catch(e){a=false}a&&b("input.input-datetime-local-date",c).datepicker("option","minDate",a)},max:function(d,c,a){a=a.split?a.split("T"):[];try{a=b.datepicker.parseDate("yy-mm-dd",a[0])}catch(e){a=false}a&&b("input.input-datetime-local-date",c).datepicker("option","maxDate",a)},value:function(d,c,a){if(!g["datetime-local"].blockAttr){var e;
a=a.split?a.split("T"):[];try{e=b.datepicker.parseDate("yy-mm-dd",a[0])}catch(f){e=false}if(e){b("input.input-datetime-local-date",c).datepicker("setDate",e);b("input.input-datetime-local-time",c).attr("value",a[1]||"00:00")}else{b("input.input-datetime-local-date",c).attr("value",a[0]||"");b("input.input-datetime-local-time",c).attr("value",a[1]||"")}}}};g.date=function(d){if(b.fn.datepicker){var c=b('<input type="text" class="input-date" />'),a=this.common(d,c,g.date.attrs);if(a.css){c.css(a.css);
a.outerWidth&&c.outerWidth(a.outerWidth)}c.datepicker(b.extend({},j.date)).bind("change",function(){g.date.blockAttr=true;var e;try{e=(e=b.datepicker.parseDate(c.datepicker("option","dateFormat"),c.attr("value")))?b.datepicker.formatDate("yy-mm-dd",e):c.attr("value")}catch(f){e=c.attr("value")}d.attr("value",e);g.date.blockAttr=false;d.trigger("change")}).data("datepicker").dpDiv.addClass("input-date-datepicker-control");b.each(["disabled","min","max","value"],function(e,f){d.attr(f,function(h,i){return i||
""})})}};g.date.attrs={disabled:function(d,c,a){c.datepicker("option","disabled",!!a)},min:function(d,c,a){try{a=b.datepicker.parseDate("yy-mm-dd",a)}catch(e){a=false}a&&c.datepicker("option","minDate",a)},max:function(d,c,a){try{a=b.datepicker.parseDate("yy-mm-dd",a)}catch(e){a=false}a&&c.datepicker("option","maxDate",a)},value:function(d,c,a){if(!g.date.blockAttr){try{var e=b.datepicker.parseDate("yy-mm-dd",a)}catch(f){e=false}e?c.datepicker("setDate",e):c.attr("value",a)}}};g.range=function(d){if(b.fn.slider){var c=
b('<span class="input-range" />'),a=this.common(d,c,g.range.attrs);if(a.css){c.css(a.css);a.outerWidth&&c.outerWidth(a.outerWidth)}c.slider(b.extend(j.slider,{change:function(e,f){if(e.originalEvent){g.range.blockAttr=true;d.attr("value",f.value);g.range.blockAttr=false;d.trigger("change")}}}));b.each(["disabled","min","max","value","step"],function(e,f){d.attr(f,function(h,i){return i||""})})}};g.range.attrs={disabled:function(d,c,a){c.slider("option","disabled",!!a)},min:function(d,c,a){a=a?a*1||
0:0;c.slider("option","min",a)},max:function(d,c,a){a=a||a===0?a*1||100:100;c.slider("option","max",a)},value:function(d,c,a){a=b(d).attr("valueAsNumber");if(isNaN(a)){a=(c.slider("option","max")-c.slider("option","min"))/2;d.value=a}g.range.blockAttr||c.slider("option","value",a)},step:function(d,c,a){a=a&&b.trim(a)?a*1||1:1;c.slider("option","step",a)}};b.each(["disabled","min","max","value","step"],function(d,c){b.webshims.attr(c,{elementNames:["input"],setter:function(a,e,f){var h=b.data(a,"inputUIReplace");
f();h&&h.methods[c]&&h.methods[c](a,h.visual,e)},getter:true})});var l=function(d){if(d){d=b.extend({},d,j.date);b("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",d).each(function(){var c=b.data(this,"html5element");c&&b.each(["disabled","min","max","value"],function(a,e){c.attr(e,function(f,h){return h||""})})});b.datepicker.setDefaults(d)}};b(document).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){b.datepicker&&b(document).bind("htmlExtLangChange",
function(){b.webshims.activeLang(b.datepicker.regional,"inputUI",l)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});b.webshims.ready("number-date-type",function(){b.webshims.addReady(function(d){b(document).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){if(b.datepicker||b.fn.slider){g(d);b.datepicker&&b.fn.slider&&b(document).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui")}})});b.webshims.createReadyEvent("inputUI")},true)})(jQuery);