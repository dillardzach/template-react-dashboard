(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{51:function(t,e,n){"use strict";n.r(e);var o=n(2);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=function(t){function e(){var t,n;i(this,e);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return s(f(n=c(this,(t=a(e)).call.apply(t,[this].concat(r)))),"state",{time:Date.now()}),n}var n,r,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){t.setState({time:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=new Date(this.state.time).toLocaleTimeString();return Object(o.h)("h1",{class:"x-secondary cx"},t," ","local time")}}])&&u(n.prototype,r),p&&u(n,p),e}(o.a);e.default=p}}]);