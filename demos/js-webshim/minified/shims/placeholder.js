(function(b){if(!b.support.placeholder){b.support.placeholder="shim";var g=function(d,e,a,c,f){if(!c){c=b.data(d,"placeHolder");if(!c)return}if(f=="focus")c.box.removeClass("placeholder-visible");else{if(e===false)e=b.attr(d,"value");if(e)c.box.removeClass("placeholder-visible");else{if(a===false)a=b.attr(d,"placeholder");c.box[a&&!e?"addClass":"removeClass"]("placeholder-visible")}}},j=0,o=function(d){d=b(d);var e=d.attr("id"),a=!!(d.attr("title")||d.attr("aria-labeledby"));if(!a&&e)a=!!b("label[for="+
e+"]",d[0].form)[0];else if(!e){j++;e="input-placeholder-id-"+j;d.attr("id",e)}return b(a?'<span class="placeholder-text"></span>':'<label for="'+e+'" class="placeholder-text"></label>')},m=function(){var d=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(a){var c=b.data(a,"placeHolder");if(c)return c;c=b.data(a,"placeHolder",{text:o(a)});c.box=b(a).wrap('<span class="placeholder-box placeholder-box-'+(a.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(k){g(this,false,false,c,k.type)}).parent();c.text.insertAfter(a).bind("mousedown.placeholder",function(){g(this,false,false,c,"focus");a.focus()});b.each(["Left","Top"],function(k,h){var p=(parseInt(b.curCSS(a,"padding"+h),10)||0)+Math.max(parseInt(b.curCSS(a,"margin"+h),10)||0,0)+(parseInt(b.curCSS(a,"border"+h+"Width"),10)||0);c.text.css("padding"+h,p)});var f=b.curCSS(a,"lineHeight"),i={width:b(a).width()||parseInt(b.curCSS(a,"width"),10),height:b(a).height()||parseInt(b.curCSS(a,"height"),
10)},l=b.curCSS(a,"float");c.text.css("lineHeight")!==f&&c.text.css("lineHeight",f);i.width&&i.height&&c.text.css(i);l!=="none"&&c.box.addClass("placeholder-box-"+l);return c},update:function(a,c){if(e[b.attr(a,"type")]||b.nodeName(a,"textarea")){if(b.nodeName(a,"input"))c=c.replace(d,"");var f=m.create(a);a.setAttribute("placeholder",c);f.text.text(c);g(a,false,c,f)}}}}();b.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(d,e){m.update(d,e)},getter:function(d){return d.getAttribute("placeholder")||
""}});var n={elementNames:["input","textarea"],setter:function(d,e,a){var c=d.getAttribute("placeholder");c&&"value"in d&&g(d,e,c);a()},getter:true};b.webshims.attr("value",n);var q=b.fn.val;b.fn.val=function(d){d!==undefined&&this.each(function(){this.nodeType===1&&n.setter(this,d,b.noop)});return q.apply(this,arguments)};b.webshims.addReady(function(d){b("input[placeholder], textarea[placeholder]",d).attr("placeholder",function(e,a){return a})})}})(jQuery);