(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[79],{1078:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(0),a=r.n(o),c=r(623),l=r.n(c),u=r(679),i=r(203),f=r(44),s=r(201),p=r(200),m=r(615),d=r(834),b=r(678);t.default=Object(f.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,r=e.products,c=Object(o.useState)("grid three-column"),f=Object(n.a)(c,2),y=f[0],h=f[1],v=Object(o.useState)(""),g=Object(n.a)(v,2),O=g[0],E=g[1],j=Object(o.useState)(""),P=Object(n.a)(j,2),S=P[0],C=P[1],w=Object(o.useState)(""),_=Object(n.a)(w,2),N=_[0],x=_[1],k=Object(o.useState)(""),T=Object(n.a)(k,2),M=T[0],D=T[1],A=Object(o.useState)(0),L=Object(n.a)(A,2),F=L[0],H=L[1],q=Object(o.useState)(1),R=Object(n.a)(q,2),z=R[0],I=R[1],B=Object(o.useState)([]),J=Object(n.a)(B,2),U=J[0],W=J[1],G=Object(o.useState)([]),K=Object(n.a)(G,2),Q=K[0],V=K[1],X=t.pathname;return Object(o.useEffect)((function(){var e=Object(s.g)(r,O,S),t=Object(s.g)(e,N,M);V(e=t),W(e.slice(F,F+15))}),[F,r,O,S,N,M]),a.a.createElement(o.Fragment,null,a.a.createElement(l.a,null,a.a.createElement("title",null,"Flone | Shop Page"),a.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),a.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),a.a.createElement(i.BreadcrumbsItem,{to:""+X},"Shop"),a.a.createElement(p.a,{headerTop:"visible"},a.a.createElement(m.a,null),a.a.createElement("div",{className:"shop-area pt-95 pb-100"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement(d.a,{getLayout:function(e){h(e)},getFilterSortParams:function(e,t){x(e),D(t)},productCount:r.length,sortedProductCount:U.length,products:r,getSortParams:function(e,t){E(e),C(t)}}),a.a.createElement(b.a,{layout:y,products:U}),a.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},a.a.createElement(u.a,{totalRecords:Q.length,pageLimit:15,pageNeighbours:2,setOffset:H,currentPage:z,setCurrentPage:I,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))},623:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=c(r(639)),o=c(r(624)),a=c(r(641));function c(e){return e&&e.__esModule?e:{default:e}}var l=o.default;t.default=l},624:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=l(r(4)),a=l(r(34)),c=r(640);function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,y,h=function(e){function t(){return i(this,t),s(this,p(t).apply(this,arguments))}var r,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);a.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),o=document.head,a=o.innerHTML;(n=(n=n.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(o,r)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(o,n)}else if("link"===t&&"canonical"===e.rel){var a=(0,c.getDuplicateCanonical)(e);a&&(0,c.removeChild)(o,a)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(r.prototype,o),l&&f(r,l),t}(n.Component);d=h,b="contextTypes",y={extract:o.default.func},b in d?Object.defineProperty(d,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[b]=y;var v=h;t.default=v,e.exports=t.default},639:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(0),a=(n=r(4))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return l(this,t),i(this,f(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return o.Children.only(this.props.children)}}])&&u(r.prototype,n),a&&u(r,a),t}(o.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(p,"childContextTypes",{extract:a.default.func});var m=p;t.default=m,e.exports=t.default},640:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var o=e.type,a=e.props;"title"===o?t=e:"link"===o&&"canonical"===a.rel?r=e:"meta"===o?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],l=c.props.id;(l?!t.id[l]:0===o.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),a.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var o,a=e.getAttribute(n);return a?r.concat((o=t.querySelectorAll("[".concat(n,' = "').concat(a,'"]')),(o=Array.prototype.slice.call(o||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,o=t.length;n<o;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],o=n.concat(["itemProp"]),a=o.concat(["id"])},641:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),o=c(r(4)),a=c(r(624));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,d,b,y=function(e){function t(){return u(this,t),f(this,s(t).apply(this,arguments))}var r,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){return n.default.createElement(a.default,null,n.default.createElement("title",null,this.props.title))}}])&&i(r.prototype,o),c&&i(r,c),t}(n.Component);m=y,d="propTypes",b={title:o.default.string},d in m?Object.defineProperty(m,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[d]=b;var h=y;t.default=h,e.exports=t.default},834:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(201),c=function(e){var t=e.products,r=e.getSortParams,n=Object(a.b)(t),c=Object(a.c)(t),l=Object(a.f)(t),u=Object(a.d)(t);return o.a.createElement("div",{className:"product-filter-wrapper",id:"product-filter-wrapper"},o.a.createElement("div",{className:"product-filter-wrapper__inner"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},o.a.createElement("div",{className:"product-filter"},o.a.createElement("h5",null,"Categories"),n?o.a.createElement("ul",null,n.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("button",{onClick:function(t){r("category",e),Object(a.h)(t)}},e))}))):"No categories found")),o.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},o.a.createElement("div",{className:"product-filter"},o.a.createElement("h5",null,"Color"),c?o.a.createElement("ul",null,c.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("button",{onClick:function(t){r("color",e),Object(a.h)(t)}},e))}))):"No colors found")),o.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},o.a.createElement("div",{className:"product-filter"},o.a.createElement("h5",null,"Size"),l?o.a.createElement("ul",null,l.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("button",{className:"text-uppercase",onClick:function(t){r("size",e),Object(a.h)(t)}},e))}))):"No sizes found")),o.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30"},o.a.createElement("div",{className:"product-filter product-filter--tag"},o.a.createElement("h5",null,"Tag"),u?o.a.createElement("ul",null,u.map((function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("button",{onClick:function(t){r("tag",e),Object(a.h)(t)}},e))}))):"No tags found")))))},l=function(e){var t=e.getFilterSortParams,r=e.productCount,l=e.sortedProductCount,u=e.products,i=e.getSortParams;return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"shop-top-bar mb-35"},o.a.createElement("div",{className:"select-shoing-wrap"},o.a.createElement("div",{className:"shop-select"},o.a.createElement("select",{onChange:function(e){return t("filterSort",e.target.value)}},o.a.createElement("option",{value:"default"},"Default"),o.a.createElement("option",{value:"priceHighToLow"},"Price - High to Low"),o.a.createElement("option",{value:"priceLowToHigh"},"Price - Low to High"))),o.a.createElement("p",null,"Showing ",l," of ",r," result")),o.a.createElement("div",{className:"filter-active"},o.a.createElement("button",{onClick:function(e){return Object(a.i)(e)}},o.a.createElement("i",{className:"fa fa-plus"})," filter"))),o.a.createElement(c,{products:u,getSortParams:i}))};t.a=function(e){var t=e.getLayout,r=e.getFilterSortParams,a=e.productCount,c=e.sortedProductCount,u=e.products,i=e.getSortParams;return o.a.createElement(n.Fragment,null,o.a.createElement(l,{getLayout:t,getFilterSortParams:r,productCount:a,sortedProductCount:c,products:u,getSortParams:i}))}}}]);
//# sourceMappingURL=79.96fa1717.chunk.js.map