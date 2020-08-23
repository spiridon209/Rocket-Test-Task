(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(n,e,t){n.exports=t(49)},30:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(21),u=t.n(c),i=(t(30),t(5)),o=t(1),l=t(2);function s(){var n=Object(o.a)(["\n  margin-right: 10px;\n"]);return s=function(){return n},n}function p(){var n=Object(o.a)(["\n  display: block;\n  border: 1px solid #cccc;\n  min-width: 30%;\n  border-radius: 5px;\n  min-height: 18px;\n  margin: 15px 10px 15px 0;\n  outline: none;\n  &:focus {\n    border: 1px solid #29b0d9;\n  }\n"]);return p=function(){return n},n}var f=l.a.input(p()),d=l.a.p(s()),x=function(n){var e=n.inputValue,t=n.inputChangeHandler,r=n.descriptionText;return a.a.createElement(a.a.Fragment,null,r?a.a.createElement(d,null,r):null,a.a.createElement(f,{type:"text",value:e,onChange:t}))};function b(){var n=Object(o.a)(["\n  height: 25px;\n  line-height: 1em;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  color: rgb(0, 0, 0);\n  outline: none;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  border-top-color: rgba(0, 0, 0, 0.3);\n  border-radius: 2px;\n  background: linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240));\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset, 0 1px 1px 1px rgba(255, 255, 255, 0.2), 0 -1px 1px 1px rgba(0, 0, 0, 0);\n  transition: 0.2s ease-in-out;\n  &:hover:not(:active) {\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0) inset, 0 1px 1px 1px rgba(0, 255, 255, 0.5),\n      0 -1px 1px 1px rgba(0, 255, 255, 0.5);\n  }\n  &:active {\n    background: linear-gradient(rgb(250, 250, 250), rgb(235, 235, 235));\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 1px 1px 1px rgba(255, 255, 255, 0.4),\n      0 -1px 1px 1px rgba(0, 0, 0, 0.1);\n  }\n"]);return b=function(){return n},n}var m=l.a.button(b()),g=function(n){var e=n.type,t=n.name,r=n.handler;return a.a.createElement(m,{type:e,onClick:r},t)},h=t(4),v=t.n(h),j=t(7),w=t(8),y=t.n(w),E="https://jsonplaceholder.typicode.com",O="".concat(E,"/users"),k="".concat(E,"/posts"),I=function(){var n=Object(j.a)(v.a.mark((function n(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get("".concat(O,"/").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();function S(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  align-self: flex-end;\n"]);return S=function(){return n},n}function C(){var n=Object(o.a)(["\n  align-self: flex-start;\n  width: 100%;\n"]);return C=function(){return n},n}var V=l.a.h2(C()),B=l.a.div(S()),D=function(n){var e=n.title,t=n.userId,c=Object(r.useState)(""),u=Object(i.a)(c,2),o=u[0],l=u[1];return Object(r.useEffect)((function(){I(t).then((function(n){return l((function(){return n.username}))}))}),[t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(V,null,e),a.a.createElement(B,null,"Author: ",o))};function F(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 10px 15px;\n  flex-wrap: wrap;\n  border: 1px solid #cccc;\n  margin-bottom: 20px;\n  width: 100%;\n  min-height: 150px;\n  background-color: #bb40ff;\n  cursor: pointer;\n"]);return F=function(){return n},n}function H(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return H=function(){return n},n}var J=l.a.ul(H()),T=l.a.li(F()),W=function(n){var e=n.posts,t=n.inputValue;return a.a.createElement(J,null,t?e.filter((function(n){return n.title.includes(t)})).map((function(n){return a.a.createElement(T,{key:n.id},a.a.createElement(D,{title:n.title,userId:n.userId}))})):e.map((function(n){return a.a.createElement(T,{key:n.id},a.a.createElement(D,{title:n.title,userId:n.userId}))})))},A=function(){var n=Object(j.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get(k);case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();function M(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n"]);return M=function(){return n},n}function $(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 80%;\n  padding: 10px;\n  margin: auto;\n"]);return $=function(){return n},n}var q=l.a.div($()),z=l.a.div(M()),G=function(){var n=Object(r.useState)(""),e=Object(i.a)(n,2),t=e[0],c=e[1],u=Object(r.useState)([]),o=Object(i.a)(u,2),l=o[0],s=o[1],p=Object(r.useState)(""),f=Object(i.a)(p,2),d=f[0],b=f[1];Object(r.useEffect)((function(){A().then((function(n){return s((function(){return n}))})).catch((function(n){return b((function(){return n.message}))}))}),[]);return d?a.a.createElement("h1",null,d):a.a.createElement(q,null,a.a.createElement("h1",null,"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),a.a.createElement(z,null,a.a.createElement(x,{inputValue:t,inputChangeHandler:function(n){n.preventDefault();var e=n.target.value;c((function(){return e}))},descriptionText:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0443:"}),a.a.createElement(g,{type:"reset",name:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",handler:function(n){n.preventDefault(),c((function(){return""}))}})),a.a.createElement(W,{posts:l,inputValue:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5135dab6.chunk.js.map