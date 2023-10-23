(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[121],{1037:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=s(r),l=s(a(4)),i=s(a(78));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={value:e.value},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,a=t.editing,n=t.value;a&&null==n&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,a,n){n.stopPropagation();var r=this.props,o=r.onStarClick;r.editing&&o&&o(e,t,a,n)}},{key:"onStarHover",value:function(e,t,a,n){n.stopPropagation();var r=this.props,o=r.onStarHover;r.editing&&o&&o(e,t,a,n)}},{key:"onStarHoverOut",value:function(e,t,a,n){n.stopPropagation();var r=this.props,o=r.onStarHoverOut;r.editing&&o&&o(e,t,a,n)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,a=t.name,n=t.starCount,r=t.starColor,l=t.emptyStarColor,i=t.editing,s=this.state.value,u=function(e,t){return{float:"right",cursor:i?"pointer":"default",color:t>=e?r:l}},c={display:"none",position:"absolute",marginLeft:-9999},f=[],d=function(t){var n=a+"_"+t,r=o.default.createElement("input",{key:"input_"+n,style:c,className:"dv-star-rating-input",type:"radio",name:a,id:n,value:t,checked:s===t,onChange:e.onChange.bind(e,t,a)}),l=o.default.createElement("label",{key:"label_"+n,style:u(t,s),className:"dv-star-rating-star "+(s>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:n,onClick:function(n){return e.onStarClick(t,s,a,n)},onMouseOver:function(n){return e.onStarHover(t,s,a,n)},onMouseLeave:function(n){return e.onStarHoverOut(t,s,a,n)}},e.renderIcon(t,s,a,n));f.push(r),f.push(l)},m=n;m>0;m--)d(m);return f.length?f:null}},{key:"renderIcon",value:function(e,t,a,n){var r=this.props,l=r.renderStarIcon,i=r.renderStarIconHalf;return"function"===typeof i&&Math.ceil(t)===e&&t%1!==0?i(e,t,a,n):"function"===typeof l?l(e,t,a,n):o.default.createElement("i",{key:"icon_"+n,style:{fontStyle:"normal"}},"\u2605")}},{key:"render",value:function(){var e=this.props,t=e.editing,a=e.className,n=(0,i.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},a);return o.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:n},this.renderStars())}}]),t}(r.Component);u.propTypes={name:l.default.string.isRequired,value:l.default.number,editing:l.default.bool,starCount:l.default.number,starColor:l.default.string,onStarClick:l.default.func,onStarHover:l.default.func,onStarHoverOut:l.default.func,renderStarIcon:l.default.func,renderStarIconHalf:l.default.func},u.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=u,e.exports=t.default},1137:function(e,t,a){"use strict";a.r(t);var n=a(196),r=a(197),o=a(198),l=a(199),i=a(0),s=a.n(i),u=a(610),c=a.n(u),f=a(1037),d=a.n(f),m=a(605),p=a(606),v=a(620),g=a(200),h=a(618),b=a.n(h),y=a(59),S=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).submitHandler=function(t){console.log("e, astroid,"),t.preventDefault();var a={userid:JSON.parse(localStorage.getItem("user_id")),astroid:localStorage.getItem("astroId"),rating:e.state.rating,comment:e.state.comment,type:e.state.type};y.a.post("/user/addChatReview",a).then((function(t){e.setState({comment:"",rating:"1"}),b()("Success!","Thank You For Your Valuable FeedBack","success")})).catch((function(e){console.log(e)}))},e.handleChange=function(t){e.setState({comment:t.target.value})},e.state={rating:1,rating_custom_icon:6,rating_half_star:3.5,rating_empty_initial:0,type:"Chat",astroid:"",userid:"",comment:""},e}return Object(r.a)(a,[{key:"onStarClick",value:function(e,t,a){this.setState({rating:e})}},{key:"onStarClickHalfStar",value:function(e,t,a,n){(n.pageX-n.currentTarget.getBoundingClientRect().left)/n.currentTarget.offsetWidth<=.5&&(e-=.5),console.log("name: %s, nextValue: %s, prevValue: %s",a,e,t),this.setState({rating_half_star:e})}},{key:"onStarClickEmptyInitial",value:function(e,t,a){console.log("name: %s, nextValue: %s, prevValue: %s",a,e,t),this.setState({rating_empty_initial:e})}},{key:"render",value:function(){var e=this;return s.a.createElement(g.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(c.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(m.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Your Review"),s.a.createElement("p",null))))))),s.a.createElement("section",null,s.a.createElement(m.a,null,s.a.createElement(p.a,null,s.a.createElement(v.a,{lg:"12"},s.a.createElement("div",{className:"rat-box"},s.a.createElement("h3",null,"Add Reviews"),s.a.createElement("form",null,s.a.createElement(p.a,null,s.a.createElement(v.a,{md:"6"},s.a.createElement("div",{className:"star-bx mt-5"},s.a.createElement("h3",null,"Rating Number(",this.state.rating,")"),s.a.createElement("div",{style:{fontSize:26}},s.a.createElement(d.a,{name:"app2",starCount:5,value:Number(this.state.rating),onStarClick:this.onStarClick.bind(this)})))),s.a.createElement(v.a,{md:"6"},s.a.createElement("div",{className:"comm-bx"},s.a.createElement("label",null,"Comments *"),s.a.createElement("textarea",{name:"comment",placeholder:"Your Message*",required:!0,maxLength:150,value:this.state.comment,onChange:function(t){e.handleChange(t)}}),s.a.createElement("button",{className:"stb-btn",onClick:function(t){return e.submitHandler(t,e.state.astroId,e.state.userId)}},"Submit")))))))))))}}]),a}(s.a.Component);t.default=S},610:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},620:function(e,t,a){"use strict";var n=a(7),r=a(15),o=a(0),l=a.n(o),i=a(4),s=a.n(i),u=a(78),c=a.n(u),f=a(54),d=["className","cssModule","widths","tag"],m=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:m,offset:m})]),v={tag:f.n,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,o=e.widths,i=e.tag,s=Object(r.a)(e,d),u=[];o.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var o=!n;if(Object(f.h)(r)){var l,i=o?"-":"-"+t+"-",d=h(o,t,r.size);u.push(Object(f.j)(c()(((l={})[d]=r.size||""===r.size,l["order"+i+r.order]=r.order||0===r.order,l["offset"+i+r.offset]=r.offset||0===r.offset,l)),a))}else{var m=h(o,t,r);u.push(m)}}})),u.length||u.push("col");var m=Object(f.j)(c()(t,u),a);return l.a.createElement(i,Object(n.a)({},s,{className:m}))};b.propTypes=v,b.defaultProps=g,t.a=b}}]);
//# sourceMappingURL=121.b4398558.chunk.js.map