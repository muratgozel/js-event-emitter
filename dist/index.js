(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b})()({1:[function(a,b){function c(){}c.prototype.events={},c.prototype.eventsWillBeFiredOnce={},c.prototype.isObject=function(a){return"[object Object]"===Object.prototype.toString.call(a)},c.prototype.on=function(a,b,c=null){if("function"!=typeof b||"string"!=typeof a)return!1;this.events.hasOwnProperty(a)||(this.events[a]=[]),this.eventsWillBeFiredOnce.hasOwnProperty(a)||(this.eventsWillBeFiredOnce[a]=[]);const d=this.isObject(c)?c:{once:!1},e=this.events[a].push(b);return d.once&&!0===d.once&&this.eventsWillBeFiredOnce[a].push(e-1),!0},c.prototype.once=function(a,b){this.on(a,b,{once:!0})},c.prototype.emit=function(a,b=[]){if(!this.events.hasOwnProperty(a)){if("error"==a){const a=b instanceof Error?b:new Error("Unhandled error.");throw a}return!1}const c=Array.isArray(b)?b:[b];for(let d=0;d<this.events[a].length;d++)this.events[a][d].apply(this,c);if(this.eventsWillBeFiredOnce.hasOwnProperty(a))for(var d=0;d<this.eventsWillBeFiredOnce[a].length;d++)this.removeListener(a,this.eventsWillBeFiredOnce[a][d]);return!0},c.prototype.removeListener=function(a,b){this.events[a].splice(b,1)},c.prototype.removeListeners=function(a){return!("string"!=typeof a)&&!!this.events.hasOwnProperty(a)&&(this.events[a]=[],this.eventsWillBeFiredOnce.hasOwnProperty(a)&&(this.eventsWillBeFiredOnce[a]=[]),!0)},c.prototype.flush=function(){this.events={},this.eventsWillBeFiredOnce={}},b.exports=c},{}]},{},[1]);