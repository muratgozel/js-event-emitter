define((function(){"use strict";var n;return n=["once"],{create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={_events:{}};function o(n){Object.keys(n).map((function(e){r(e,n[e])}))}function r(e,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t._events.hasOwnProperty(e)||(t._events[e]=[]);var c={};"[object Object]"===Object.prototype.toString.call(r)&&Object.keys(r).filter((function(e){return-1!==n.indexOf(e)})).map((function(n){c[n]=r[n]})),c.fn=o,t._events[e].push(c)}function c(n,e){r(n,e,{once:!0})}function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(!t._events.hasOwnProperty(n))return[];for(var o=[],r=[],c=0;c<t._events[n].length;c++){var u=t._events[n][c];!0===u.once&&r.push(c);var i=u.fn.apply(null,e);o.push(i)}return r.length>0&&v(n,r),o}function i(){t._events={}}function v(n,e){for(var o=[],r=0;r<t._events[n].length;r++)-1===e.indexOf(r)&&o.push(t._events[n][r]);t._events[n]=o}return"[object Object]"===Object.prototype.toString.call(e)&&o(e),{on:r,once:c,emit:u,flush:i}}}}));
