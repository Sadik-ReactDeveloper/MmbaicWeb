(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[69],{1058:function(e,t,a){e.exports=a.p+"static/media/note.37f263df.png"},1190:function(e,t,a){"use strict";a.r(t);var n=a(196),o=a(197),c=a(198),l=a(199),i=a(0),s=a.n(i),r=a(605),u=a(606),f=a(620),d=a(200),m=(a(629),a(1058)),p=a.n(m),g=a(59),b=a(618),h=a.n(b),E=a(610),v=a.n(E),x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).componentDidMount=function(){g.a.get("/admin/get_notification").then((function(t){console.log(t.data),!0===t.data.status&&e.setState({notification:t.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},e.notificationDelete=function(e){g.a.get("/admin/dlt_notification/"+e).then((function(e){console.log("@@@@@",e.data.data),h()("Success!","Address SuccessFull! Deleted","success"),window.location.reload(!0)})).catch((function(e){h()("Error!","You clicked the button!","error"),console.log(e)}))},e.state={notification:[]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.notification;return s.a.createElement(d.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(r.a,null,s.a.createElement(u.a,null,s.a.createElement(f.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Notification"))))))),s.a.createElement("section",null,s.a.createElement(r.a,null,s.a.createElement(u.a,null,s.a.createElement(f.a,{lg:"12"},s.a.createElement("div",{className:"notes-box"},s.a.createElement(u.a,null,t.length?t.map((function(t,a){return s.a.createElement(f.a,{lg:"12",key:a},s.a.createElement("div",{className:"noteify-list"},s.a.createElement("div",{className:"noteifybx"},s.a.createElement("img",{src:p.a,alt:"",width:"50px"})),s.a.createElement("div",{className:"noteifybxx"},s.a.createElement("h2",null,t.title),s.a.createElement("p",null,t.desc),s.a.createElement("span",{className:"notify-sp"},s.a.createElement("button",{onClick:function(){return e.notificationDelete(t._id)(window.location.reload())}},s.a.createElement("i",{class:"fa fa-times","aria-hidden":"true"}))))))})):null)))))))}}]),a}(s.a.Component);t.default=x},610:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},620:function(e,t,a){"use strict";var n=a(7),o=a(15),c=a(0),l=a.n(c),i=a(4),s=a.n(i),r=a(78),u=a.n(r),f=a(54),d=["className","cssModule","widths","tag"],m=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:m,offset:m})]),g={tag:f.n,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,c=e.widths,i=e.tag,s=Object(o.a)(e,d),r=[];c.forEach((function(t,n){var o=e[t];if(delete s[t],o||""===o){var c=!n;if(Object(f.h)(o)){var l,i=c?"-":"-"+t+"-",d=h(c,t,o.size);r.push(Object(f.j)(u()(((l={})[d]=o.size||""===o.size,l["order"+i+o.order]=o.order||0===o.order,l["offset"+i+o.offset]=o.offset||0===o.offset,l)),a))}else{var m=h(c,t,o);r.push(m)}}})),r.length||r.push("col");var m=Object(f.j)(u()(t,r),a);return l.a.createElement(i,Object(n.a)({},s,{className:m}))};E.propTypes=g,E.defaultProps=b,t.a=E},629:function(e,t,a){}}]);
//# sourceMappingURL=69.5995cf23.chunk.js.map