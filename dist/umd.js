(function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?this:self:global:window,b.MyLittleLodash=a()}})(function(){return function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b}()({1:[function(a,b){function c(){}c.prototype._events={},c.prototype._eventsWillBeFiredOnce={},c.prototype.on=function(a,b,c=null){if("function"!=typeof b||"string"!=typeof a)return!1;this._events.hasOwnProperty(a)||(this._events[a]=[]),this._eventsWillBeFiredOnce.hasOwnProperty(a)||(this._eventsWillBeFiredOnce[a]=[]);const d="[object Object]"===Object.prototype.toString.call(c)?c:{once:!1},e=this._events[a].push(b);return d.once&&!0===d.once&&this._eventsWillBeFiredOnce[a].push(e-1),!0},c.prototype.once=function(a,b){return this.on(a,b,{once:!0})},c.prototype.emit=function(a,b=[]){if(!this._events.hasOwnProperty(a)){if("error"==a){const a=b instanceof Error?b:new Error("Unhandled error.");throw a}return!1}const c=Array.isArray(b)?b:[b];for(let d=0;d<this._events[a].length;d++)this._events[a][d].apply(this,c);if(this._eventsWillBeFiredOnce.hasOwnProperty(a))for(var d=0;d<this._eventsWillBeFiredOnce[a].length;d++)this.removeListener(a,this._eventsWillBeFiredOnce[a][d]);return!0},c.prototype.removeListener=function(a,b){this._events[a].splice(b,1)},c.prototype.removeListeners=function(a){return!("string"!=typeof a)&&!!this._events.hasOwnProperty(a)&&(this._events[a]=[],this._eventsWillBeFiredOnce.hasOwnProperty(a)&&(this._eventsWillBeFiredOnce[a]=[]),!0)},c.prototype.flushEventEmitter=function(){this._events={},this._eventsWillBeFiredOnce={}},b.exports=c},{}]},{},[1])(1)});