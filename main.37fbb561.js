parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector(".logo"),e=function(){return new Promise(function(e,t){n.addEventListener("click",function(){e()}),setTimeout(function(){t(s)},3e3)})};function t(){return new Promise(function(e){n.addEventListener("click",function(){e()})})}function i(){return new Promise(function(e){n.addEventListener("contextmenu",function(n){n.preventDefault(),e()})})}var o,r=e();function c(n){document.body.insertAdjacentHTML("beforeend",'\n        <div data-qa="notification" class="success">\n          '.concat(n,"\n        </div>\n    "))}function s(){document.body.insertAdjacentHTML("beforeend",'\n        <div data-qa="notification" class="error">\n          First promise was rejected\n        </div>\n    ')}r.then(function(){c("First promise was resolved");var n=t(),e=i();return o=[n,e],Promise.race(o)}).then(function(){return c("Second promise was resolved"),Promise.all(o)}).then(function(){c("Third promise was resolved")}).catch(s);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.37fbb561.js.map