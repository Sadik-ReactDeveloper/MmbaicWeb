(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[86,156],{1121:function(e,t,a){"use strict";a.r(t);var n=a(196),o=a(197),s=a(198),r=a(199),l=a(0),i=a.n(l),c=a(200),u=a(605),m=a(606),d=a(620),h=(a(822),a(710)),f=a(59),g=a(610),v=a.n(g),p=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).handlenotification=function(){setInterval((function(){f.a.get("/user/listWebLiveStream").then((function(e){o.setState({liveastrilist:e.data.data})})).catch((function(e){console.log(e)}))}),5e3)},o.handleastrolive=function(e){o.props.history.push({pathname:"/live",state:e})},o.state={liveastrilist:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handlenotification()}},{key:"render",value:function(){var e,t=this;return i.a.createElement(c.a,{headerTop:"visible"},i.a.createElement("section",{className:"pt-0 pb-0"},i.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{md:"12"},i.a.createElement("div",{className:"leftcont text-left"},i.a.createElement("h1",null,"Live Event"),i.a.createElement("h3",null,"Live Chat with the Best Astrologers"))))))),i.a.createElement("section",null,i.a.createElement(u.a,null,i.a.createElement(m.a,{className:"mb-40"},i.a.createElement(d.a,{lg:"12"},i.a.createElement("p",null,"In a new way to interact with astrologers, Astrotalk brings you Astrotalk Live, where you can talk to astrologers via live sessions and ask them questions for free. Astrotalk Live is a new and innovative way to talk to an astrologer face-to-face and get your queries answered while enjoying the best of astrology. On Astrotalk live, anyone can get guidance from the best astrologers in India on questions spanning across topics such as marriage, career, love, health and much more."),i.a.createElement("br",null),i.a.createElement("p",null,"Talking with astrologers through live sessions is one of the most popular features of Astrotalk, as no other app provides this unique way to consult an astrologer. Apart from just being unique, the feature is easy to use and highly interactive. Accessing an astrologer on Astrotalk Live is fairly simple, and so is getting your queries answered by them. To have the best experience of live sessions, it is recommended that you ask YES and NO questions to the astrologer. Also, if you like the session being delivered by an astrologer, you can even contribute to their earnings by the means of donations. The Astrotalk Live feature is also available on the Astrotalk app."))),i.a.createElement(m.a,{className:"mb-50"},i.a.createElement(d.a,{lg:"8"},i.a.createElement("h3",null,"Live Astrologers")),i.a.createElement(d.a,{lg:"4"},i.a.createElement(h.default,null))),i.a.createElement(m.a,null,this.state.liveastrilist.length>0?i.a.createElement(i.a.Fragment,null,null===(e=this.state.liveastrilist)||void 0===e?void 0:e.map((function(e){var a;return i.a.createElement(d.a,{key:null===e||void 0===e?void 0:e._id,style:{cursor:"pointer"},lg:"3",md:"3"},i.a.createElement("div",{className:"ast-list"},i.a.createElement("div",{onClick:function(){return t.handleastrolive(e)},className:"liveimg"},i.a.createElement("img",{src:e.astroid.img[0],alt:"",height:220,width:100})),i.a.createElement("div",{className:"livecont"},i.a.createElement("span",null,i.a.createElement("div",{class:"zoom-in-zoom-out"},i.a.createElement("span",{style:{marginLeft:20}},"Live")),i.a.createElement("h3",{className:"astrologerName"},null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.fullname)))))}))):null),i.a.createElement(m.a,{className:"mb-40 mt-30"},i.a.createElement("h3",null,"Chat with Astrologers Live"),i.a.createElement(d.a,{lg:"12"},i.a.createElement("p",null,"In a new way to interact with astrologers, Astrotalk brings you Astrotalk Live, where you can talk to astrologers via live sessions and ask them questions for free. Astrotalk Live is a new and innovative way to talk to an astrologer face-to-face and get your queries answered while enjoying the best of astrology. On Astrotalk live, anyone can get guidance from the best astrologers in India on questions spanning across topics such as marriage, career, love, health and much more."),i.a.createElement("br",null),i.a.createElement("p",null,"Talking with astrologers through live sessions is one of the most popular features of Astrotalk, as no other app provides this unique way to consult an astrologer. Apart from just being unique, the feature is easy to use and highly interactive. Accessing an astrologer on Astrotalk Live is fairly simple, and so is getting your queries answered by them. To have the best experience of live sessions, it is recommended that you ask YES and NO questions to the astrologer. Also, if you like the session being delivered by an astrologer, you can even contribute to their earnings by the means of donations. The Astrotalk Live feature is also available on the Astrotalk app."))))))}}]),a}(i.a.Component);t.default=p},610:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},620:function(e,t,a){"use strict";var n=a(7),o=a(15),s=a(0),r=a.n(s),l=a(4),i=a.n(l),c=a(78),u=a.n(c),m=a(54),d=["className","cssModule","widths","tag"],h=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:h,offset:h})]),g={tag:m.n,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,s=e.widths,l=e.tag,i=Object(o.a)(e,d),c=[];s.forEach((function(t,n){var o=e[t];if(delete i[t],o||""===o){var s=!n;if(Object(m.h)(o)){var r,l=s?"-":"-"+t+"-",d=p(s,t,o.size);c.push(Object(m.j)(u()(((r={})[d]=o.size||""===o.size,r["order"+l+o.order]=o.order||0===o.order,r["offset"+l+o.offset]=o.offset||0===o.offset,r)),a))}else{var h=p(s,t,o);c.push(h)}}})),c.length||c.push("col");var h=Object(m.j)(u()(t,c),a);return r.a.createElement(l,Object(n.a)({},i,{className:h}))};b.propTypes=g,b.defaultProps=v,t.a=b},680:function(e,t,a){"use strict";t.a=function(e){var t=Object.create(null);return function(a){return void 0===t[a]&&(t[a]=e(a)),t[a]}}},710:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(700);t.default=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"mst-serch"},o.a.createElement(s.ReactSearchAutocomplete,{items:[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],onSearch:function(e,t){console.log(e,t)},onHover:function(e){console.log(e)},onSelect:function(e){console.log(e)},onFocus:function(){},autoFocus:!0,formatResult:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:{display:"block",textAlign:"left"}},"id: ",e.id),o.a.createElement("span",{style:{display:"block",textAlign:"left"}},"name: ",e.name))}}))))}},822:function(e,t,a){e.exports=a.p+"static/media/live-astro.2b8d4a11.jpg"}}]);
//# sourceMappingURL=86.11b9c248.chunk.js.map