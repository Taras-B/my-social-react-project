(this["webpackJsonpmy-social"]=this["webpackJsonpmy-social"]||[]).push([[4],{363:function(e,r,t){e.exports={dialogs:"Dialogs_dialogs__3vgrk",message:"Dialogs_message__vJq7A",dialog:"Dialogs_dialog__3kF1H",activeLink:"Dialogs_activeLink__2OFSw",messageForm:"Dialogs_messageForm__1k_Rp"}},370:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(363),p=t.n(a),i=t(360),s=function(e){var r="/dialogs/"+e.id;return o.a.createElement("div",{className:p.a.dialog+" "+p.a.active},o.a.createElement(i.a,{activeClassName:p.a.activeLink,to:r},e.name))},c=t(353),u=function(e){return o.a.createElement("div",{className:p.a.message},o.a.createElement(c.a,{variant:"body2"},e.message))},m=t(105),l=t(147),f=t(32),d=t(78),g=t(354),y=t(36),h=t(1),b=(t(2),t(351));var v=function(e,r){return r?Object(b.a)(e,r,{clone:!1}):e};var j=function(e){var r=function(r){var t=e(r);return r.css?Object(h.a)({},v(t,e(Object(h.a)({theme:r.theme},r.css))),{},function(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(Object(y.a)(e.filterProps)),r};var O=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=function(e){return r.reduce((function(r,t){var n=t(e);return n?v(r,n):r}),{})};return n.propTypes={},n.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),n},x=t(44),E=t(62),k={xs:0,sm:600,md:960,lg:1280,xl:1920},w={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(k[e],"px)")}};function A(e,r,t){if(Array.isArray(r)){var n=e.theme.breakpoints||w;return r.reduce((function(e,o,a){return e[n.up(n.keys[a])]=t(r[a]),e}),{})}if("object"===Object(E.a)(r)){var o=e.theme.breakpoints||w;return Object.keys(r).reduce((function(e,n){return e[o.up(n)]=t(r[n]),e}),{})}return t(r)}function P(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var K=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,o=e.themeKey,a=e.transform,p=function(e){if(null==e[r])return null;var t=e[r],p=P(e.theme,o)||{};return A(e,t,(function(e){var r;return"function"===typeof p?r=p(e):Array.isArray(p)?r=p[e]||e:(r=P(p,e)||e,a&&(r=a(r))),!1===n?r:Object(x.a)({},n,r)}))};return p.propTypes={},p.filterProps=[r],p};function T(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var _=O(K({prop:"border",themeKey:"borders",transform:T}),K({prop:"borderTop",themeKey:"borders",transform:T}),K({prop:"borderRight",themeKey:"borders",transform:T}),K({prop:"borderBottom",themeKey:"borders",transform:T}),K({prop:"borderLeft",themeKey:"borders",transform:T}),K({prop:"borderColor",themeKey:"palette"}),K({prop:"borderRadius",themeKey:"shape"})),N=O(K({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),K({prop:"display"}),K({prop:"overflow"}),K({prop:"textOverflow"}),K({prop:"visibility"}),K({prop:"whiteSpace"})),S=O(K({prop:"flexBasis"}),K({prop:"flexDirection"}),K({prop:"flexWrap"}),K({prop:"justifyContent"}),K({prop:"alignItems"}),K({prop:"alignContent"}),K({prop:"order"}),K({prop:"flex"}),K({prop:"flexGrow"}),K({prop:"flexShrink"}),K({prop:"alignSelf"}),K({prop:"justifyItems"}),K({prop:"justifySelf"})),R=O(K({prop:"gridGap"}),K({prop:"gridColumnGap"}),K({prop:"gridRowGap"}),K({prop:"gridColumn"}),K({prop:"gridRow"}),K({prop:"gridAutoFlow"}),K({prop:"gridAutoColumns"}),K({prop:"gridAutoRows"}),K({prop:"gridTemplateColumns"}),K({prop:"gridTemplateRows"}),K({prop:"gridTemplateAreas"}),K({prop:"gridArea"})),C=O(K({prop:"position"}),K({prop:"zIndex",themeKey:"zIndex"}),K({prop:"top"}),K({prop:"right"}),K({prop:"bottom"}),K({prop:"left"})),B=O(K({prop:"color",themeKey:"palette"}),K({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),F=K({prop:"boxShadow",themeKey:"shadows"});function L(e){return e<=1?"".concat(100*e,"%"):e}var M=K({prop:"width",transform:L}),D=K({prop:"maxWidth",transform:L}),z=K({prop:"minWidth",transform:L}),G=K({prop:"height",transform:L}),H=K({prop:"maxHeight",transform:L}),I=K({prop:"minHeight",transform:L}),W=(K({prop:"size",cssProperty:"width",transform:L}),K({prop:"size",cssProperty:"height",transform:L}),O(M,D,z,G,H,I)),X=t(149);var Y={m:"margin",p:"padding"},J={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Q=function(e){var r={};return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}((function(e){if(e.length>2){if(!q[e])return[e];e=q[e]}var r=e.split(""),t=Object(X.a)(r,2),n=t[0],o=t[1],a=Y[n],p=J[o]||"";return Array.isArray(p)?p.map((function(e){return a+e})):[a+p]})),U=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function V(e,r){return function(t){return e.reduce((function(e,n){return e[n]=function(e,r){if("string"===typeof r)return r;var t=e(Math.abs(r));return r>=0?t:"number"===typeof t?-t:"-".concat(t)}(r,t),e}),{})}}function Z(e){var r=function(e){var r=e.spacing||8;return"number"===typeof r?function(e){return r*e}:Array.isArray(r)?function(e){return r[e]}:"function"===typeof r?r:function(){}}(e.theme);return Object.keys(e).map((function(t){if(-1===U.indexOf(t))return null;var n=V(Q(t),r),o=e[t];return A(e,o,n)})).reduce(v,{})}Z.propTypes={},Z.filterProps=U;var $=Z,ee=O(K({prop:"fontFamily",themeKey:"typography"}),K({prop:"fontSize",themeKey:"typography"}),K({prop:"fontStyle",themeKey:"typography"}),K({prop:"fontWeight",themeKey:"typography"}),K({prop:"letterSpacing"}),K({prop:"lineHeight"}),K({prop:"textAlign"})),re=t(4),te=t(5),ne=t(30),oe=t.n(ne),ae=t(355);function pe(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}var ie=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,a=Object(re.a)(t,["name"]);var p,i=n,s="function"===typeof r?function(e){return{root:function(t){return r(Object(h.a)({theme:e},t))}}}:{root:r},c=Object(ae.a)(s,Object(h.a)({Component:e,name:n||e.displayName,classNamePrefix:i},a));r.filterProps&&(p=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var u=o.a.forwardRef((function(r,t){var n=r.children,a=r.className,i=r.clone,s=r.component,u=Object(re.a)(r,["children","className","clone","component"]),m=c(r),l=Object(te.a)(m.root,a),f=u;if(p&&(f=pe(f,p)),i)return o.a.cloneElement(n,Object(h.a)({className:Object(te.a)(n.props.className,l)},f));if("function"===typeof n)return n(Object(h.a)({className:l},f));var d=s||e;return o.a.createElement(d,Object(h.a)({ref:t,className:l},f),n)}));return oe()(u,e),u}},se=t(80),ce=function(e){var r=ie(e);return function(e,t){return r(e,Object(h.a)({defaultTheme:se.a},t))}},ue=j(O(_,N,S,R,C,B,F,W,$,ee)),me=ce("div")(ue,{name:"MuiBox"}),le=t(356),fe=Object(d.a)(50),de=Object(l.a)({form:"dialogAddMessageForm"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(m.a,{component:f.b,validate:[d.b,fe],name:"newMessageBody",placeholder:"Message you",multiline:!0,variant:"outlined"}),o.a.createElement("div",null,o.a.createElement(le.a,{variant:"outlined",color:"primary",type:"submit"},"Send")))})),ge=function(e){var r=e.messagePage,t=r.dialogs.map((function(e){return o.a.createElement(s,{name:e.name,key:e.id,id:e.id})})),n=r.messages.map((function(e){return o.a.createElement(u,{message:e.message,key:e.id})}));return o.a.createElement(g.a,{container:!0,spacing:1,className:p.a.dialogs},o.a.createElement(g.a,{item:!0,xs:12,sm:3},t),o.a.createElement(g.a,{container:!0,item:!0,xs:12,sm:9,justify:"center",direction:"column",className:p.a.messageForm},o.a.createElement(me,null,n),o.a.createElement(me,null,o.a.createElement(de,{onSubmit:function(r){console.log("object",r),e.sendMessage(r.newMessageBody)}}))))},ye=t(146),he=t(21),be=t(48),ve=t(49),je=t(51),Oe=t(50),xe=t(52),Ee=t(357),ke=function(e){return{isAuth:e.auth.isAuth}},we=t(10);r.default=Object(we.d)(Object(he.b)((function(e){return{messagePage:e.massegesPage}}),(function(e){return{sendMessage:function(r){e(Object(ye.b)(r))}}})),(function(e){var r=function(r){function t(){return Object(be.a)(this,t),Object(je.a)(this,Object(Oe.a)(t).apply(this,arguments))}return Object(xe.a)(t,r),Object(ve.a)(t,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(Ee.a,{to:"/login"})}}]),t}(o.a.Component);return Object(he.b)(ke)(r)}))(ge)}}]);
//# sourceMappingURL=4.1ff39e1d.chunk.js.map