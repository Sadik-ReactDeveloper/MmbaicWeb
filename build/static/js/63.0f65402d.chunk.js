(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[63],{1103:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(202),o=n(196),a=n(197),i=n(198),l=n(199),c=n(0),u=n.n(c),s=n(623),f=n.n(s),p=n(642),d=n(659),m=n(59),b=n(200),y=n(671),h=n(677),v=n(618),g=n.n(v),O=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).changeHandler=function(e){e.preventDefault(),a.setState(Object(r.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault(),console.log("dddddhh",a.state),m.a.post("/user/loginWithPassword",{mobile:parseInt(a.state.mobile),password:a.state.password}).then((function(e){var t,n,r,o,i,l;(console.log("@@@####",e.data),!0===e.data.status)&&(localStorage.setItem("userData",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.user)),localStorage.setItem("token",JSON.stringify(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.token)),localStorage.setItem("user_id",JSON.stringify(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(o=r.user)||void 0===o?void 0:o._id)),localStorage.setItem("user_mobile_no",JSON.stringify(null===e||void 0===e||null===(i=e.data)||void 0===i||null===(l=i.user)||void 0===l?void 0:l.mobile)),"success"===e.data.msg&&(g()("success"),a.props.history.push("/")))})).catch((function(e){console.log(e)}))};var i=localStorage.getItem("mobileNumber");return a.state={mobile:i||"",password:""},a}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement(c.Fragment,null,u.a.createElement(f.a,null,u.a.createElement("title",null,"Astrogyata"),u.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),u.a.createElement(b.a,{headerTop:"visible"},u.a.createElement("div",{className:"login-register-area pt-100 pb-100"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row d-flex align-items-center justify-content-center"},u.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},u.a.createElement("div",{className:"login-register-wrapper"},u.a.createElement(p.a.Container,{defaultActiveKey:"login"},u.a.createElement(d.a,{variant:"pills",className:"login-register-tab-list"},u.a.createElement(d.a.Item,null,u.a.createElement(d.a.Link,{eventKey:"login"},u.a.createElement("h4",null," Password ")))),u.a.createElement(p.a.Content,null,u.a.createElement(p.a.Pane,{eventKey:"login"},u.a.createElement("div",{className:"login-form-container"},u.a.createElement("div",{className:"login-register-form"},u.a.createElement(y.a,{onSubmit:this.submitHandler},u.a.createElement(h.a,{type:"password",name:"password",placeholder:"Enter Your password",value:this.state.password,onChange:function(t){return e.changeHandler(t)}}),u.a.createElement("div",{className:"button-box"},u.a.createElement("div",{className:"login-toggle-btn"}),u.a.createElement("button",{type:"submit"},u.a.createElement("span",null,"Login")))))))))),u.a.createElement(u.a.Fragment,null)))))))}}]),n}(c.Component)},623:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(639)),o=i(n(624)),a=i(n(641));function i(e){return e&&e.__esModule?e:{default:e}}var l=o.default;t.default=l},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=l(n(4)),a=l(n(34)),i=n(640);function l(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,y,h=function(e){function t(){return u(this,t),f(this,p(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),o=document.head,a=o.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(o,n)}else if("meta"===t){var r=(0,i.getDuplicateMeta)(e);r&&(0,i.removeChild)(o,r)}else if("link"===t&&"canonical"===e.rel){var a=(0,i.getDuplicateCanonical)(e);a&&(0,i.removeChild)(o,a)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,o),l&&s(n,l),t}(r.Component);m=h,b="contextTypes",y={extract:o.default.func},b in m?Object.defineProperty(m,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):m[b]=y;var v=h;t.default=v,e.exports=t.default},639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(4))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&c(n.prototype,r),a&&c(n,a),t}(o.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:a.default.func});var d=p;t.default=d,e.exports=t.default},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?n=e:"meta"===o?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],l=i.props.id;(l?!t.id[l]:0===o.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),a.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var o,a=e.getAttribute(r);return a?n.concat((o=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,o=t.length;r<o;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],o=r.concat(["itemProp"]),a=o.concat(["id"])},641:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),o=i(n(4)),a=i(n(624));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,m,b,y=function(e){function t(){return c(this,t),s(this,f(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.default.createElement(a.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,o),i&&u(n,i),t}(r.Component);d=y,m="propTypes",b={title:o.default.string},m in d?Object.defineProperty(d,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[m]=b;var h=y;t.default=h,e.exports=t.default},671:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(204),i=n(20),l=n(0),c=n.n(l),u=n(4),s=n.n(u),f=n(78),p=n.n(f),d=n(54),m=["className","cssModule","inline","tag","innerRef"],b={children:s.a.node,inline:s.a.bool,tag:d.n,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),className:s.a.string,cssModule:s.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.submit=n.submit.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.inline,i=e.tag,l=e.innerRef,u=Object(o.a)(e,m),s=Object(d.j)(p()(t,!!a&&"form-inline"),n);return c.a.createElement(i,Object(r.a)({},u,{ref:l,className:s}))},t}(l.Component);y.propTypes=b,y.defaultProps={tag:"form"},t.a=y},677:function(e,t,n){"use strict";var r=n(7),o=n(15),a=n(204),i=n(20),l=n(0),c=n.n(l),u=n(4),s=n.n(u),f=n(78),p=n.n(f),d=n(54),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:s.a.node,type:s.a.string,size:s.a.oneOfType([s.a.number,s.a.string]),bsSize:s.a.string,valid:s.a.bool,invalid:s.a.bool,tag:d.n,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),plaintext:s.a.bool,addon:s.a.bool,className:s.a.string,cssModule:s.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(a.a)(n)),n.focus=n.focus.bind(Object(a.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.type,i=e.bsSize,l=e.valid,u=e.invalid,s=e.tag,f=e.addon,b=e.plaintext,y=e.innerRef,h=Object(o.a)(e,m),v=["radio","checkbox"].indexOf(a)>-1,g=new RegExp("\\D","g"),O=s||("select"===a||"textarea"===a?a:"input"),j="form-control";b?(j+="-plaintext",O=s||"input"):"file"===a?j+="-file":"range"===a?j+="-range":v&&(j=f?null:"form-check-input"),h.size&&g.test(h.size)&&(Object(d.p)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var E=Object(d.j)(p()(t,u&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,j),n);return("input"===O||s&&"function"===typeof s)&&(h.type=a),h.children&&!b&&"select"!==a&&"string"===typeof O&&"select"!==O&&(Object(d.p)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(O,Object(r.a)({},h,{ref:y,className:E,"aria-invalid":u}))},t}(c.a.Component);y.propTypes=b,y.defaultProps={type:"text"},t.a=y}}]);
//# sourceMappingURL=63.0f65402d.chunk.js.map