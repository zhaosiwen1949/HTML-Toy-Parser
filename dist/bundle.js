!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var l={};return t.m=e,t.c=l,t.p="",t(0)}([function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=l(2),r=n(a),u=l(4),o=n(u),i=l(1),p=n(i),c=l(3),d=n(c);if("undefined"==typeof window){var v=r.default.lex(d.default.template),s=o.default.parse(v);console.log(JSON.stringify(s,null,2))}else p.default.initBrowser(r.default,o.default)},function(e,t){"use strict";function l(e){return e.replace(/^<|>$/g,"")}function n(e,t){return t.forEach(function(t){var a=document.createElement(l(t.type));t.val?a.innerHTML=t.val:a=n(a,t.children),e.appendChild(a)}),e}function a(e,t){var l=document.getElementById(t);l.innerHTML="",n(l,e.children)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={render:a,initBrowser:function(e,t){document.getElementById("compile").addEventListener("click",function(){var l=document.getElementById("html-template").value;try{var n=e.lex(l),r=t.parse(n);console.log(r),a(r,"target")}catch(e){alert(e)}},!1)}}},function(e,t){"use strict";function l(e){return e.replace(/^\s+|\s+$/,"")}function n(e){if(e.match(a))return{type:"TagClose",val:e.match(a)[0]};if(e.match(r))return{type:"TagOpen",val:e.match(r)[0]};if(e.match(u))return{type:"Value",val:e.match(u)[0]};throw"LexicalError"}Object.defineProperty(t,"__esModule",{value:!0});var a=new RegExp(/^<\/[\w]+>/),r=new RegExp(/^<[\w]+>/),u=new RegExp(/^[^<]+/);t.default={lex:function(e){for(var t=[],a=void 0;e.length>0;)e=l(e),a=n(e),e=e.substr(a.val.length),a.val=l(a.val),t.push(a);return t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={template:"\n    <p>hello</p>\n    <div>\n      <h2>\n        <small>world</small>\n      </h2>\n      <span>!</span>\n    </div>",tokens:[{type:"TagOpen",val:"<p>"},{type:"Value",val:"hello"},{type:"TagClose",val:"</p>"},{type:"TagOpen",val:"<div>"},{type:"TagOpen",val:"<h2>"},{type:"TagOpen",val:"<small>"},{type:"Value",val:"world"},{type:"TagClose",val:"</small>"},{type:"TagClose",val:"</h2>"},{type:"TagOpen",val:"<span>"},{type:"Value",val:"!"},{type:"TagClose",val:"</span>"},{type:"TagClose",val:"</div>"}],dom:{type:"html",val:null,children:[{type:"<p>",val:"hello",children:[]},{type:"<div>",val:null,children:[{type:"<h2>",val:null,children:[{type:"<small>",val:"world",children:[]}]},{type:"<span>",val:"!",children:[]}]}]}}},function(e,t){"use strict";function l(){return a[++r]}function n(e){if(!u||e!==u.type)throw"SyntaxError";u=l()}Object.defineProperty(t,"__esModule",{value:!0});var a=void 0,r=void 0,u=void 0,o={html:function(){var e={type:"html",val:null,children:[]};return o.tags(e)},tags:function(e){for(;u;){var t={type:u.val,val:null,children:[]};if(t=o.tag(t),e.children.push(t),u&&"TagClose"==u.type)break}return e},tag:function(e){return n("TagOpen"),"TagOpen"==u.type?e=o.tags(e):(e.val=u.val,n("Value")),n("TagClose"),e}};t.default={parse:function(e){return a=e,r=0,u=a[r],o.html()}}}]);