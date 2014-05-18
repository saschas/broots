window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return r(v.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}var l="2.8.1",s={},u=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),m=p.style,h,y={}.toString,v=" -webkit- -moz- -o- -ms- ".split(" "),g={},b={},E={},j=[],C=j.slice,S,w=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:d+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),s.id=d,(u?s:p).innerHTML+=i,p.appendChild(s),u||(p.style.background="",p.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),a=n(s,e),u?s.parentNode.removeChild(s):(p.parentNode.removeChild(p),f.style.overflow=l),!!a},N={}.hasOwnProperty,x;x=i(N,"undefined")||i(N.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=C.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(C.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(C.call(arguments)))};return r}),g.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",v.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var T in g)x(g,T)&&(S=T.toLowerCase(),s[S]=g[T](),j.push((s[S]?"":"no-")+S));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)x(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(f.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),p=h=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[m]];return t||(t={},h++,e[m]=h,y[h]=t),t}function i(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return g.shivCSS&&!p&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||c(e,r),e}var s="3.7.0",u=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p,m="_html5shiv",h=0,y={},v;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",p="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){p=!0,v=!0}}();var g={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:s,shivCSS:u.shivCSS!==!1,supportsUnknownElements:v,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=g,l(t)}(this,t),s._version=l,s._prefixes=v,s.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+j.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();y=1,e?e.t?d(function(){("c"==e.t?T.injectCss:T.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,o,i,l,s){function u(t){if(!m&&a(f.readyState)&&(E.r=m=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){b.removeChild(f)},50);for(var r in w[n])w[n].hasOwnProperty(r)&&w[n][r].onload()}}var s=s||T.errorTimeout,f=t.createElement(e),m=0,v=0,E={t:r,s:n,e:i,a:l,x:s};1===w[n]&&(v=1,w[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},h.splice(o,0,E),"img"!=e&&(v||2===w[n]?(b.insertBefore(f,g?null:p),d(u,s)):w[n].push(f))}function s(e,t,n,r,i){return y=0,t=t||"j",o(e)?l("c"==t?j:E,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=T;return e.loader={load:s,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],y=0,v="MozAppearance"in f.style,g=v&&!!t.createRange().compareNode,b=g?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,E=v?"object":f?"script":"img",j=f?"script":E,C=Array.isArray||function(e){return"[object Array]"==m.call(e)},S=[],w={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},x,T;T=function(e){function t(e){var e=e.split("!"),t=S.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;r>i;i++)a=e[i].split("="),(o=N[a.shift()])&&(n=o(n,a));for(i=0;t>i;i++)n=S[i](n);return n}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(w[l.url]?l.noexec=!0:w[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),w[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(s=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),a(e,s,t,0,c);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(s)?s=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:s[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[p])),a(e[p],s,t,p,c))}else!n&&f()}var c=!!e.test,l=e.load||e.both,s=e.callback||i,u=s,f=e.complete||i,d,p;n(c?e.yep:e.nope,!!l),l&&n(l)}var l,s,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(C(e))for(l=0;l<e.length;l++)s=e[l],o(s)?a(s,0,f,0):C(s)?T(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},T.addPrefix=function(e,t){N[e]=t},T.addFilter=function(e){S.push(e)},T.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",x=function(){t.removeEventListener("DOMContentLoaded",x,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u=t.createElement("script"),f,m,o=o||T.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=s?c:n||i,u.onreadystatechange=u.onload=function(){!f&&a(u.readyState)&&(f=1,n(),u.onload=u.onreadystatechange=null)},d(function(){f||(f=1,n(1))},o),l?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,a,l){var o=t.createElement("link"),s,n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(p.parentNode.insertBefore(o,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};