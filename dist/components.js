!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("react-jss"),require("highlight.js"));else if("function"==typeof define&&define.amd)define(["react","react-jss","highlight.js"],t);else{var a="object"==typeof exports?t(require("react"),require("react-jss"),require("highlight.js")):t(e.react,e["react-jss"],e["highlight.js"]);for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}}(window,(function(e,t,a){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=7)}([function(e,t,a){e.exports=a(5)()},function(t,a){t.exports=e},function(e,t,a){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t,a){"use strict";var r=a(6);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(0),o=a.n(i),c=function(e){var t=e.type,a=e.children,r=e.onClick,i=e.disabled,o=void 0!==i&&i;switch(t){case"contained":return n.a.createElement(S,{onClick:r,disabled:o},a);case"outlined":return n.a.createElement(Z,{onClick:r,disabled:o},a);case"text":return n.a.createElement(ve,{onClick:r,disabled:o},a);default:return null}};c.propTypes={type:o.a.oneOf(["contained","outlined","text"]).isRequired,children:o.a.node.isRequired,onClick:o.a.func,disabled:o.a.bool};var l,s=c,d=a(3),u=a(4),p=a.n(u),b=a(2),f=a.n(b);function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var j={hljs:{display:"block",overflowX:"auto",padding:"16px 8px 16px 16px",color:"#ddd",fontSize:"18px",whiteSpace:"pre",lineHeight:1.4,borderRadius:"2px",backgroundColor:"#333",transition:"all .4s ease",boxShadow:"0 1px 3px rgba(170, 170, 170, 0.1)","-webkit-overflow-scrolling":"touch","-webkit-transition":"revert","&:hover":{boxShadow:"0 1px 3px rgba(170, 170, 170, 0.8)"},"&:before":(l={content:"attr(title)",display:"block",fontSize:"14px",color:"#aaa",position:"sticky",left:"90%",float:"right"},h(l,"@media screen and (max-width: 700px)",{marginRight:"5px",left:"88%"}),h(l,"@media screen and (max-width: 480px)",{marginRight:"10px",left:"85%"}),l),"& .hljs-comment, & .hljs-quote":{color:"#5c6370",fontStyle:"italic"},"& .hljs-doctag, & .hljs-keyword, & .hljs-formula":{color:"#c678dd"},"& .hljs-section, & .hljs-name, & .hljs-selector-tag, & .hljs-deletion, & .hljs-subst":{color:"#e06c75"},"& .hljs-literal":{color:"#56b6c2"},"& .hljs-string, & .hljs-regexp, & .hljs-addition, & .hljs-attribute, & .hljs-meta-string":{color:"#98c379"},"& .hljs-built_in, & .hljs-class .hljs-title":{color:"#e6c07b"},"& .hljs-attr, & .hljs-variable, & .hljs-template-variable, & .hljs-type":{color:"#d19a66"},"& .hljs-selector-class, & .hljs-selector-attr, & .hljs-selector-pseudo, & .hljs-number":{color:"#d19a66"},"& .hljs-symbol, & .hljs-bullet, & .hljs-link, & .hljs-meta, & .hljs-selector-id":{color:"#61aeee"},"& .hljs-title":{color:"#61aeee"},"& .hljs-emphasis":{fontStyle:"italic"},"& .hljs-strong":{fontWeight:"bold"},"& .hljs-link":{textDecoration:"underline"}}},g=Object(d.createUseStyles)(j),m=function(e){var t,a=e.children,i=e.language,o=g(),c={javascript:{title:"JavaScript",name:"javascript",className:"javascript"},java:{title:"Java",name:"java",className:"java"}},l=c[i]||c.javascript;return i||(l.title=""),Object(r.useEffect)((function(){p.a.initHighlightingOnLoad(),p.a.highlightBlock(t)})),n.a.createElement("div",{className:"aj-code-snippet"},n.a.createElement("code",{title:l.title,className:f()(l.className,o.hljs),ref:function(e){return t=e}},a))};m.propTypes={children:o.a.node.isRequired,language:o.a.oneOf(["java","javascript"]).isRequired};var v=m,y=Object(d.createUseStyles)({ajBaseButton:{display:"inline-block",cursor:"pointer","& button":{border:"none"},"&:focus, & > button:focus":{outline:"none"}},ajBaseButtonEnabled:{cursor:"pointer","& button":{cursor:"pointer"}},ajBaseButtonDisabled:{cursor:"not-allowed","& button":{cursor:"not-allowed"}}}),x=function(e){var t=e.children,a=e.onClick,r=e.disabledClasses,i=e.enabledClasses,o=e.disabled,c=void 0!==o&&o,l=y(),s=c?f()(l.ajBaseButton,l.ajBaseButtonDisabled,r):f()(l.ajBaseButton,l.ajBaseButtonEnabled,i),d=c?null:a;return n.a.createElement("div",{className:s,onClick:d},n.a.createElement("button",{type:"button",disabled:c},t))};x.propTypes={children:o.a.node.isRequired,onClick:o.a.func,disabled:o.a.bool,enabledClasses:o.a.array,disabledClasses:o.a.array};var w=x,A=Object(d.createUseStyles)({ajContainedButton:{padding:"10px",transition:"background-color 0.25s ease",borderRadius:"4px","& button":{backgroundColor:"transparent"}},ajContainedButtonEnabled:{backgroundColor:"#bbb","&:active":{backgroundColor:"#ccc"},"& button":{color:"#555",transition:"color 0.25s ease","&:active":{color:"#222"}}},ajContainedButtonDisabled:{backgroundColor:"#eee","& button":{color:"#999"}}}),C=function(e){var t=e.children,a=e.onClick,r=e.disabled,i=void 0!==r&&r,o=A(),c=["aj-contained-button",o.ajContainedButton,o.ajContainedButtonEnabled],l=["aj-contained-button",o.ajContainedButton,o.ajContainedButtonDisabled];return n.a.createElement(w,{onClick:a,disabled:i,enabledClasses:c,disabledClasses:l},t)};C.propTypes={children:o.a.node.isRequired,onClick:o.a.func,disabled:o.a.bool};var S=C;function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=Object(d.createUseStyles)({ajMobileHamburger:{display:"inline-block",cursor:"pointer",height:"3px",width:"25px",padding:"10px 2px","& > button":{display:"block",padding:0,border:"none",backgroundColor:"transparent","&:focus":{outline:"none"},"& > span, & > span:before, & > span:after":{height:"3px",width:"25px",borderRadius:"1px",display:"block",cursor:"pointer",backgroundColor:"black",position:"absolute",content:'""',transition:"all 50ms ease"},"& > span:before":{top:"-8px"},"& > span:after":{top:"8px"}}},ajMobileHamburgerActive:{backgroundColor:"transparent !important","&:before":{top:"0 !important",transform:"rotate(45deg)"},"&:after":{top:"0 !important",transform:"rotate(-45deg)"}},ajMobileHamburgerInactive:{}}),O=function(e){var t=e.onClick,a=E(),i=k(Object(r.useState)(!1),2),o=i[0],c=i[1],l=o?a.ajMobileHamburgerActive:a.ajMobileHamburgerInactive;return n.a.createElement("div",{className:a.ajMobileHamburger,onClick:function(){c(!o),t&&t()}},n.a.createElement("button",{type:"button"},n.a.createElement("span",{className:l})))};O.propTypes={onClick:o.a.func};var B=O,I=Object(d.createUseStyles)({ajModal:{background:"white",borderRadius:"3px",top:"50%",left:"50%",position:"absolute",transform:"translate(-50%, -50%)"},ajModalBackdrop:{width:"100vw",height:"100vh",zIndex:1,top:0,left:0,overflow:"hidden",position:"fixed",cursor:"pointer"},ajModalColorBackdrop:{backgroundColor:"rgba(0, 0, 0, 0.3)"}}),R=function(e){var t=e.children,a=e.onClickBackground,r=e.backdrop,i=void 0===r||r,o=I(),c={stopPropagation:function(e){return e}},l=i?f()(o.ajModalBackdrop,o.ajModalColorBackdrop,"aj-modal-backdrop"):f()(o.ajModalBackdrop,"aj-modal-backdrop");return n.a.createElement("div",{className:l,onClick:a},n.a.createElement("div",{className:o.ajModal,onClick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e.stopPropagation()}},t))};R.propTypes={children:o.a.node.isRequired,onClickBackground:o.a.func,backdrop:o.a.bool};var T=R,N=Object(d.createUseStyles)({ajNavCircle:{height:function(e){var t=e.height;return"calc(".concat(t," * 1.2)")},width:function(e){var t=e.height;return"calc(".concat(t," * 1.2)")},borderRadius:"50%","& > figure":{display:"flex",height:"100%",width:"100%",margin:0,alignItems:"center",justifyContent:"center"}},active:{backgroundColor:"#ccc","&:hover":{backgroundColor:"#d9d9d9"},cursor:"pointer"},inactive:{backgroundColor:"#eee","& image":{filter:"opacity(0.5)"}},img:{height:function(e){return e.height},width:function(e){return e.height}},up:{transform:"rotate(180deg)",margin:"0 0 5% 0"},down:{margin:"5% 0 0 0"},left:{transform:"rotate(90deg)",margin:"0 5% 0 0"},right:{transform:"rotate(270deg)",margin:"0 0 0 5%"}}),q=function(e){var t,a=e.direction,r=e.height,i=void 0===r?"25px":r,o=e.active,c=void 0===o||o,l=e.onClick,s=N({height:i});c?t=f()("aj-nav-circle",s.ajNavCircle,s.active):(t=f()("aj-nav-circle",s.ajNavCircle,s.inactive),l=null);var d=s.img;switch(a){case"up":d=f()("nav-up",s.up,s.img);break;case"down":d=f()("nav-down",s.down,s.img);break;case"left":d=f()("nav-left",s.left,s.img);break;case"right":d=f()("nav-right",s.right,s.img)}return n.a.createElement("div",{className:t,onClick:l},n.a.createElement("figure",null,n.a.createElement("img",{className:d,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAjVJREFUeAHt21tqhDAYhmFvu4ki3VnvuugpMgvp4Q/lAxuiJh5iDq8Q0hkdTZ+3zkXBYWBDAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIHhBYPDAqcZvtpSHjY+Di+p3xO8268+2Xg7SuBifNr4sfFtgyiGkLi5GF82nOHTxu4o8xjuZEQxhMRtHkOGu6KEYuiE3ClxVUIxZJgcZS0Id8p2kLUYzi85iLskUbbhQ0dcEkMXIook4uZLY2gJRJHE+pwlhpZAFEmE56wxtASiSOL/fEsMLYEokvibb42hpRCloBhEKTBG71GK+JpSBH/u7eur6BiK00uUKmL0EqWqGK1HqTJGq1GqjtFalCZitBKlqRi1R2kyRq1Rmo5RW5QuYtQSpasYpUfpMkapUbqOUVoUYqiIzXf/Q5IYsxj68a4oxFCBwJw7CjECEfy3ckUhhi+/8vrqKMRYwV/adVUUYiyJR7x/dhRiRKBvHXJWFGJsSSfsPxqFGAnYsYfujUKMWOEdx6VGIcYO5NSPxEYhRqrsgeNH++xkQw9N+rN77FiPHvv73OvJxmiD7USBrTslFMK997Sx+9nwE9ff5KlSoxAjw59BbBRiZIihS2xFIYakMs5LUYiRMYJ/KT8KMXyhG14rCjFuwF+65Gg73GBDAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIGSBX4BK4DEtcIi4HkAAAAASUVORK5CYII="})))};q.propTypes={direction:o.a.oneOf(["up","down","left","right"]).isRequired,height:o.a.string,active:o.a.bool,onClick:o.a.func.isRequired};var P=q,D=P,U=Object(d.createUseStyles)({ajNavList:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},ajNavListItem:{width:"100%","& > div":{display:"flex",width:"90%",height:"40px",margin:"0 5%",borderBottom:"1px solid #ccc",textDecoration:"none",color:"#777",transition:"color 0.5s ease","&:hover":{textDecoration:"underline"},"& > div":{margin:"0 auto",alignSelf:"center"}}},ajNavListLastItem:{"& > div":{borderBottom:"none"}}}),G=function(e){var t=e.items,a=e.onClick,r=U();return n.a.createElement("div",{className:f()(r.ajNavList,"aj-nav-list")},t.map((function(e,i){var o;return o=i===t.length-1?f()(r.ajNavListItem,"aj-nav-list-item",r.ajNavListLastItem,"aj-nav-list-last-item"):f()(r.ajNavListItem,"aj-nav-list-item"),n.a.createElement("div",{className:o},n.a.createElement("div",{onClick:function(){return a()}},n.a.createElement("div",null,e.text)))})))};G.propTypes={items:o.a.arrayOf(o.a.shape({text:o.a.string.isRequired,onClick:o.a.func.isRequired})).isRequired};var M=G,J=Object(d.createUseStyles)({ajNavTextCircle:{display:"flex",alignItems:"center"},textRight:{flexDirection:"row"},textLeft:{flexDirection:"row-reverse"},description:{margin:"0 10px"}}),H=function(e){var t,a=e.text,r=e.textSide,i=void 0===r?"right":r,o=e.direction,c=e.height,l=e.active,s=e.onClick,d=J();return t="right"===i?f()(d.ajNavTextCircle,d.textRight):f()(d.ajNavTextCircle,d.textLeft),n.a.createElement("div",{className:t},n.a.createElement(P,{direction:o,height:c,active:l,onClick:s}),n.a.createElement("div",{className:d.description},a))};H.propTypes={text:o.a.string.isRequired,textSide:o.a.oneOf(["left","right"]),direction:o.a.oneOf(["up","down","left","right"]).isRequired,height:o.a.string,active:o.a.bool,onClick:o.a.func.isRequired};var Q=H,L=Object(d.createUseStyles)({ajOutlinedButton:{padding:"8px",transition:"background-color 0.25s ease",border:"2px solid #ddd",borderRadius:"4px","& button":{backgroundColor:"transparent"}},ajOutlinedButtonEnabled:{"&:active":{backgroundColor:"#f5f5f5"},"& button":{color:"#555",transition:"color 0.25s ease","&:active":{color:"#222"}}},ajOutlinedButtonDisabled:{"& button":{color:"#999"}}}),Y=function(e){var t=e.children,a=e.onClick,r=e.disabled,i=void 0!==r&&r,o=L(),c=["aj-outlined-button",o.ajOutlinedButton,o.ajOutlinedButtonEnabled],l=["aj-outlined-button",o.ajOutlinedButton,o.ajOutlinedButtonDisabled];return n.a.createElement(w,{onClick:a,disabled:i,enabledClasses:c,disabledClasses:l},t)};Y.propTypes={children:o.a.node.isRequired,onClick:o.a.func,disabled:o.a.bool};var Z=Y,K={fontFamily:"'Roboto-Thin', Helvetica, sans-serif",fontStyle:"normal"};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var V={ajTextButton:{padding:"10px",transition:"background-color 0.25s ease","& button":function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){W(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},{fontFamily:"'Roboto-Regular', Helvetica, sans-serif",fontStyle:"normal"},{display:"block",backgroundColor:"transparent"})},ajTextButtonEnabled:{"&:active":{backgroundColor:"#f5f5f5"},"& button":{color:"#555",transition:"color 0.25s ease","&:active":{color:"#222"}}},ajTextButtonDisabled:{"& button":{color:"#999"}}},_=Object(d.createUseStyles)(V),X=function(e){var t=e.children,a=e.onClick,r=e.disabled,i=void 0!==r&&r,o=_(),c=["aj-text-button",o.ajTextButton,o.ajTextButtonEnabled],l=["aj-text-button",o.ajTextButton,o.ajTextButtonDisabled];return n.a.createElement(w,{onClick:a,disabled:i,enabledClasses:c,disabledClasses:l},t)};X.propTypes={children:o.a.node.isRequired,onClick:o.a.func,disabled:o.a.bool};var z=X;function $(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ee(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var te={ajTextCard:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$(Object(a),!0).forEach((function(t){ee(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},K,{display:"inline-block",width:"auto",height:"500px",padding:"5px 10px",borderRadius:"3px",boxShadow:"0 1px 3px rgba(170, 170, 170, 0.5)","&:hover":{boxShadow:"0 1px 3px rgba(170, 170, 170, 0.8)"}})},ae=Object(d.createUseStyles)(te),re=function(e){var t=e.title,a=e.subtitle,r=e.content,i=e.action,o=e.actionText,c=e.actionDisabled,l=void 0!==c&&c,s=ae();return n.a.createElement("div",{className:f()(s.ajTextCard,"aj-text-card")},n.a.createElement("div",{className:"aj-text-card-header"},n.a.createElement("h2",{className:"aj-text-card-title"},t),n.a.createElement("p",{className:"aj-text-card-subtitle"},a)),n.a.createElement("div",{className:"aj-text-card-body"},n.a.createElement("p",{className:"aj-text-card-content"},r)),n.a.createElement("div",{className:"aj-text-card-footer"},n.a.createElement(z,{onClick:i,disabled:l},o)))};re.propTypes={title:o.a.node.isRequired,subtitle:o.a.node,content:o.a.node.isRequired,action:o.a.func.isRequired,actionText:o.a.node.isRequired,actionDisabled:o.a.bool};var ne=re;function ie(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var oe={ajResponsiveGrid:function(e){var t,a=e.small,r=e.medium,n=e.large;return ie(t={display:"grid; display:-ms-grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"20px","-ms-grid-columns":"1fr 1fr 1fr"},"@media screen and (max-width: ".concat(n,") and (min-width: ").concat(r,")"),{gridTemplateColumns:"1fr 1fr",gridGap:"20px","-ms-grid-columns":"1fr 1fr"}),ie(t,"@media screen and (max-width: ".concat(r,") and (min-width: ").concat(a,")"),{gridTemplateColumns:"1fr",gridGap:"15px","-ms-grid-columns":"1fr"}),ie(t,"@media screen and (max-width: ".concat(a,")"),{gridTemplateColumns:"1fr",gridGap:"10px","-ms-grid-columns":"1fr"}),t}},ce=Object(d.createUseStyles)(oe),le=function(e){var t=e.items,a=e.smallBreakpoint,r=void 0===a?"600px":a,i=e.mediumBreakpoint,o=void 0===i?"900px":i,c=e.largeBreakpoint,l=ce({small:r,medium:o,large:void 0===c?"1200px":c});return n.a.createElement("div",{className:f()("aj-responsive-grid",l.ajResponsiveGrid)},t)};le.propTypes={items:o.a.arrayOf(o.a.oneOfType([o.a.instanceOf(ne)])).isRequired,smallBreakpoint:o.a.string,mediumBreakpoint:o.a.string,largeBreakpoint:o.a.string};var se=le;function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ue=Object(d.createUseStyles)({ajSwitch:{display:"flex",height:"20px",width:"36px",cursor:"pointer"},ajSwitchDisabled:{cursor:"default"},ajSwitchActive:{flexDirection:"row-reverse"},ajSwitchInactive:{flexDirection:"row"},ajSwitchHead:{position:"absolute",height:"20px",width:"20px",borderRadius:"50%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.24)"},ajSwitchHeadActive:{backgroundColor:"#4b6cc9"},ajSwitchHeadInactive:{backgroundColor:"#f5f5f5"},ajSwitchTail:{height:"100%",width:"100%",borderRadius:"10px"},ajSwitchTailActive:{backgroundColor:"rgba(75, 108, 201, 0.5)"},ajSwitchTailInactive:{backgroundColor:"#ccc"}}),pe=function(e){var t=e.onChange,a=e.initialState,i=void 0!==a&&a,o=e.disabled,c=void 0!==o&&o,l=ue(),s=de(Object(r.useState)(i),2),d=s[0],u=s[1],p=d?c?f()(l.ajSwitch,l.ajSwitchActive,l.ajSwitchDisabled,"aj-switch"):f()(l.ajSwitch,l.ajSwitchActive,"aj-switch"):c?f()(l.ajSwitch,l.ajSwitchInactive,l.ajSwitchDisabled,"aj-switch"):f()(l.ajSwitch,l.ajSwitchInactive,"aj-switch"),b=d?f()(l.ajSwitchHead,l.ajSwitchHeadActive,"aj-switch-head"):f()(l.ajSwitchHead,l.ajSwitchHeadInactive,"aj-switch-head"),h=d?f()(l.ajSwitchTail,l.ajSwitchTailActive,"aj-switch-tail"):f()(l.ajSwitchTail,l.ajSwitchTailInactive,"aj-switch-tail");return n.a.createElement("div",{className:p,onClick:function(){if(!c){var e=!d;u(e),"function"==typeof t&&t(e)}}},n.a.createElement("div",{className:b}," "),n.a.createElement("div",{className:h}," "))};pe.propTypes={onChange:o.a.func.isRequired,initialState:o.a.bool,disabled:o.a.bool};var be=pe;function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var he=Object(d.createUseStyles)({ajSwitchIconContainer:{display:"flex",height:"30px",alignItems:"center"},ajSwitchIcon:{height:"25px",width:"25px",margin:"0 10px","& > img":{height:"100%",width:"100%"}},ajSwitchIconNotSelected:{filter:"opacity(0.75) grayscale(1)"}}),je=function(e){var t=e.offImageUrl,a=e.onImageUrl,i=e.onChange,o=e.initialState,c=void 0!==o&&o,l=e.disabled,s=void 0!==l&&l,d=he(),u=function(e){return e?f()(d.ajSwitchIcon,d.ajSwitchIconNotSelected,"aj-switch-icon-off"):f()(d.ajSwitchIcon,"aj-switch-icon-off")},p=function(e){return e?f()(d.ajSwitchIcon,"aj-switch-icon-on"):f()(d.ajSwitchIcon,d.ajSwitchIconNotSelected,"aj-switch-icon-on")},b=fe(Object(r.useState)(u(c)),2),h=b[0],j=b[1],g=fe(Object(r.useState)(p(c)),2),m=g[0],v=g[1];return n.a.createElement("div",{className:f()(d.ajSwitchIconContainer,"aj-switch-icon")},n.a.createElement("figure",{className:h},n.a.createElement("img",{src:t})),n.a.createElement(be,{onChange:function(e){j(u(e)),v(p(e)),"function"==typeof i&&i(e)},initialState:c,disabled:s}),n.a.createElement("figure",{className:m},n.a.createElement("img",{src:a})))};je.propTypes={offImageUrl:o.a.string.isRequired,onImageUrl:o.a.string.isRequired,onChange:o.a.func.isRequired,initialState:o.a.bool,disabled:o.a.bool};var ge=je,me=be,ve=z,ye=ne;a.d(t,"AJButton",(function(){return s})),a.d(t,"AJCodeSnippet",(function(){return v})),a.d(t,"AJContainedButton",(function(){return S})),a.d(t,"AJMobileHamburger",(function(){return B})),a.d(t,"AJModal",(function(){return T})),a.d(t,"AJNavCircle",(function(){return D})),a.d(t,"AJNavList",(function(){return M})),a.d(t,"AJNavTextCircle",(function(){return Q})),a.d(t,"AJOutlinedButton",(function(){return Z})),a.d(t,"AJResponsiveGrid",(function(){return se})),a.d(t,"AJSwitchIcon",(function(){return ge})),a.d(t,"AJSwitch",(function(){return me})),a.d(t,"AJTextButton",(function(){return ve})),a.d(t,"AJTextCard",(function(){return ye}))}])}));