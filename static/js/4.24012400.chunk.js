(this["webpackJsonpmy-social"]=this["webpackJsonpmy-social"]||[]).push([[4],{380:function(e,r,t){e.exports={dialogs:"Dialogs_dialogs__2SAqm",message:"Dialogs_message__2UChv",dialog:"Dialogs_dialog__3hSmh",activeLink:"Dialogs_activeLink__2ARoV",messageForm:"Dialogs_messageForm__1GF4J"}},387:function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),a=t(380),i=t.n(a),p=t(378),c=function(e){var r="/dialogs/"+e.id;return o.a.createElement("div",{className:i.a.dialog+" "+i.a.active},o.a.createElement(p.a,{activeClassName:i.a.activeLink,to:r},e.name))},s=t(367),u=function(e){return o.a.createElement("div",{className:i.a.message},o.a.createElement(s.a,{variant:"body2"},e.message))},m=t(116),l=t(43),f=t(158),d=t(33),y=t(84),g=t(366);function b(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(){return(h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t(1);var v=t(375);var j=function(e,r){return r?Object(v.a)(e,r,{clone:!1}):e};var O=function(e){var r=function(r){var t=e(r);return r.css?h({},j(t,e(h({theme:r.theme},r.css))),{},function(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat(b(e.filterProps)),r};var x=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=function(e){return r.reduce((function(r,t){var n=t(e);return n?j(r,n):r}),{})};return n.propTypes={},n.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),n};function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w={xs:0,sm:600,md:960,lg:1280,xl:1920},S={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(w[e],"px)")}};function E(e,r,t){if(Array.isArray(r)){var n=e.theme.breakpoints||S;return r.reduce((function(e,o,a){return e[n.up(n.keys[a])]=t(r[a]),e}),{})}if("object"===A(r)){var o=e.theme.breakpoints||S;return Object.keys(r).reduce((function(e,n){return e[o.up(n)]=t(r[n]),e}),{})}return t(r)}function P(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}var k=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,o=e.themeKey,a=e.transform,i=function(e){if(null==e[r])return null;var t=e[r],i=P(e.theme,o)||{};return E(e,t,(function(e){var r;return"function"===typeof i?r=i(e):Array.isArray(i)?r=i[e]||e:(r=P(i,e)||e,a&&(r=a(r))),!1===n?r:function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},n,r)}))};return i.propTypes={},i.filterProps=[r],i};function T(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var K=x(k({prop:"border",themeKey:"borders",transform:T}),k({prop:"borderTop",themeKey:"borders",transform:T}),k({prop:"borderRight",themeKey:"borders",transform:T}),k({prop:"borderBottom",themeKey:"borders",transform:T}),k({prop:"borderLeft",themeKey:"borders",transform:T}),k({prop:"borderColor",themeKey:"palette"}),k({prop:"borderRadius",themeKey:"shape"})),_=x(k({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),k({prop:"display"}),k({prop:"overflow"}),k({prop:"textOverflow"}),k({prop:"visibility"}),k({prop:"whiteSpace"})),N=x(k({prop:"flexBasis"}),k({prop:"flexDirection"}),k({prop:"flexWrap"}),k({prop:"justifyContent"}),k({prop:"alignItems"}),k({prop:"alignContent"}),k({prop:"order"}),k({prop:"flex"}),k({prop:"flexGrow"}),k({prop:"flexShrink"}),k({prop:"alignSelf"}),k({prop:"justifyItems"}),k({prop:"justifySelf"})),C=x(k({prop:"gridGap"}),k({prop:"gridColumnGap"}),k({prop:"gridRowGap"}),k({prop:"gridColumn"}),k({prop:"gridRow"}),k({prop:"gridAutoFlow"}),k({prop:"gridAutoColumns"}),k({prop:"gridAutoRows"}),k({prop:"gridTemplateColumns"}),k({prop:"gridTemplateRows"}),k({prop:"gridTemplateAreas"}),k({prop:"gridArea"})),R=x(k({prop:"position"}),k({prop:"zIndex",themeKey:"zIndex"}),k({prop:"top"}),k({prop:"right"}),k({prop:"bottom"}),k({prop:"left"})),B=x(k({prop:"color",themeKey:"palette"}),k({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),M=k({prop:"boxShadow",themeKey:"shadows"});function F(e){return e<=1?"".concat(100*e,"%"):e}var L=k({prop:"width",transform:F}),D=k({prop:"maxWidth",transform:F}),I=k({prop:"minWidth",transform:F}),z=k({prop:"height",transform:F}),G=k({prop:"maxHeight",transform:F}),W=k({prop:"minHeight",transform:F}),X=(k({prop:"size",cssProperty:"width",transform:F}),k({prop:"size",cssProperty:"height",transform:F}),x(L,D,I,z,G,W));function Y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(n=(i=p.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==p.return||p.return()}finally{if(o)throw a}}return t}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H={m:"margin",p:"padding"},J={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},U=function(e){var r={};return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}((function(e){if(e.length>2){if(!q[e])return[e];e=q[e]}var r=Y(e.split(""),2),t=r[0],n=r[1],o=H[t],a=J[n]||"";return Array.isArray(a)?a.map((function(e){return o+e})):[o+a]})),V=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function Q(e,r){return function(t){return e.reduce((function(e,n){return e[n]=function(e,r){if("string"===typeof r)return r;var t=e(Math.abs(r));return r>=0?t:"number"===typeof t?-t:"-".concat(t)}(r,t),e}),{})}}function Z(e){var r=function(e){var r=e.spacing||8;return"number"===typeof r?function(e){return r*e}:Array.isArray(r)?function(e){return r[e]}:"function"===typeof r?r:function(){}}(e.theme);return Object.keys(e).map((function(t){if(-1===V.indexOf(t))return null;var n=Q(U(t),r),o=e[t];return E(e,o,n)})).reduce(j,{})}Z.propTypes={},Z.filterProps=V;var $=Z,ee=x(k({prop:"fontFamily",themeKey:"typography"}),k({prop:"fontSize",themeKey:"typography"}),k({prop:"fontStyle",themeKey:"typography"}),k({prop:"fontWeight",themeKey:"typography"}),k({prop:"letterSpacing"}),k({prop:"lineHeight"}),k({prop:"textAlign"})),re=t(2),te=t(24),ne=t(46),oe=t(5),ae=t(37),ie=t.n(ae),pe=t(372);function ce(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}var se=function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,a=Object(ne.a)(t,["name"]);var i,p=n,c="function"===typeof r?function(e){return{root:function(t){return r(Object(te.a)({theme:e},t))}}}:{root:r},s=Object(pe.a)(c,Object(te.a)({Component:e,name:n||e.displayName,classNamePrefix:p},a));r.filterProps&&(i=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var u=o.a.forwardRef((function(r,t){var n=r.children,a=r.className,p=r.clone,c=r.component,u=Object(ne.a)(r,["children","className","clone","component"]),m=s(r),l=Object(oe.a)(m.root,a),f=u;if(i&&(f=ce(f,i)),p)return o.a.cloneElement(n,Object(te.a)({className:Object(oe.a)(n.props.className,l)},f));if("function"===typeof n)return n(Object(te.a)({className:l},f));var d=c||e;return o.a.createElement(d,Object(te.a)({ref:t,className:l},f),n)}));return ie()(u,e),u}},ue=t(86),me=function(e){var r=se(e);return function(e,t){return r(e,Object(re.a)({defaultTheme:ue.a},t))}},le=O(x(K,_,N,C,R,B,M,X,$,ee)),fe=me("div")(le,{name:"MuiBox"}),de=t(365),ye=Object(y.a)(50),ge=Object(f.a)({form:"dialogAddMessageForm",onSubmitSuccess:function(e,r){return r(Object(l.a)("dialogAddMessageForm"))}})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement(m.a,{component:d.b,validate:[y.b,ye],name:"newMessageBody",placeholder:"Message you",multiline:!0,variant:"outlined"}),o.a.createElement("div",null,o.a.createElement(de.a,{variant:"outlined",color:"primary",type:"submit"},"Send")))})),be=function(e){var r=e.messagePage,t=r.dialogs.map((function(e){return o.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),n=r.messages.map((function(e){return o.a.createElement(u,{message:e.message,key:e.id})}));return o.a.createElement(g.a,{container:!0,spacing:1,className:i.a.dialogs},o.a.createElement(g.a,{item:!0,xs:12,sm:3},t),o.a.createElement(g.a,{container:!0,item:!0,xs:12,sm:9,justify:"center",direction:"column",className:i.a.messageForm},o.a.createElement(fe,null,n),o.a.createElement(fe,null,o.a.createElement(ge,{onSubmit:function(r){e.sendMessage(r.newMessageBody)}}))))},he=t(157),ve=t(23),je=t(53),Oe=t(54),xe=t(56),Ae=t(55),we=t(57),Se=t(373),Ee=function(e){return{isAuth:e.auth.isAuth}},Pe=t(12);r.default=Object(Pe.d)(Object(ve.b)((function(e){return{messagePage:e.massegesPage}}),(function(e){return{sendMessage:function(r){e(Object(he.b)(r))}}})),(function(e){var r=function(r){function t(){return Object(je.a)(this,t),Object(xe.a)(this,Object(Ae.a)(t).apply(this,arguments))}return Object(we.a)(t,r),Object(Oe.a)(t,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(Se.a,{to:"/login"})}}]),t}(o.a.Component);return Object(ve.b)(Ee)(r)}))(be)}}]);
//# sourceMappingURL=4.24012400.chunk.js.map