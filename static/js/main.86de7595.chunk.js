(this["webpackJsonpproductivity-planner"]=this["webpackJsonpproductivity-planner"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),o=(a(12),a(1)),i=function(e){return c.a.createElement("div",{className:"container mx-auto h-screen"},c.a.createElement("div",{className:" grid grid-rows-1 grid-flow-row gap-3 relative"},e.children))},s=function(){return c.a.createElement("nav",{className:"  h-20 py-3  "},c.a.createElement("div",{className:"flex flex-col content-center"},c.a.createElement("h1",{className:"font-serif text-center text-gray-900 text-4xl"}," ","Productivity Planner"," ")))},u=function(){var e=[{quote:"Simplicity boils down to two steps: Identify the essential. Eliminate the rest",author:"Leo Babauta"},{quote:"Continuous improvement is better than delayed perfection",author:"Mark Twain"},{quote:"Quality means doing it right when no one is looking",author:"Henry Ford"},{quote:"To succeed in your mission, you must have single-minded devotion to your goal",author:"A.P.J Abdul Kalam"},{quote:"The best way to improve your self-control is to see how and why you lose control",author:"Kelly McGonigal"},{quote:"It is possible to commit no mistakes and still lose. That is not a weakness; that is life",author:"Jean-Luc Picard"}];var t=function(e){var t=e.length-1;return Math.floor(Math.random()*t)}(e);return c.a.createElement("blockquote",{className:"font-sans text-xl antialiased font-bold text-center .italic text-blue-800 pt-8"},e[t].quote,c.a.createElement("footer",{className:""},e[t].author))};var m=function(e){var t=e.inputName;return e.actual,c.a.createElement("div",{className:"flex flex-col  sm:px-2 lg:px-12 ",id:"nonclock"},c.a.createElement("input",{type:"text",id:"",name:"target",className:"squarebox text-xs text-center ",tabIndex:"0"}),c.a.createElement("label",{className:"font-semibold text-xs text-center"},t))},d=a(6),f=function(e){var t=e.ModalHandler,a=e.circle,r=e.setCircle,l=Object(n.useState)([{id:1,active:!0},{id:2,active:!0},{id:3,active:!0},{id:4,active:!0},{id:5,active:!0}]),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(),f=Object(o.a)(m,2),b=f[0],E=f[1],v=function(e){e.preventDefault(),t(),E(e.target.id)};return Object(n.useEffect)((function(){a&&(u(s.map((function(e){return Object(d.a)({},e,{active:b==e.id?!e.active:e.active})}))),r(!a))}),[a,b]),c.a.createElement("div",{className:" ",id:"nonclock"},s.map((function(e){return c.a.createElement("button",{id:"".concat(e.id),className:e.active?"circledot":"circledot-close",onClick:v})})))},b=function(e){var t=e.id,a=(e.taskValue,Object(n.useState)(localStorage.getItem("".concat(t)))),r=Object(o.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)(2),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(2),b=Object(o.a)(f,2),E=b[0],v=b[1],p=Object(n.useState)(2),O=Object(o.a)(p,2),g=O[0],h=O[1];return Object(n.useEffect)((function(){v(E),h(g),d(m),i(l),localStorage.setItem("".concat(t),l)}),[E,g,m,l]),c.a.createElement("div",{tabIndex:"0"},c.a.createElement("form",null,c.a.createElement("textarea",{onKeyPress:function(e){13===e.charCode&&e.currentTarget.blur()},name:"",id:t,cols:"40",rows:m,value:l,className:"border-solid border border-orange-500 outline-none resize-none ml-5",placeholder:"Create your session",onChange:function(e){var t=e.target.rows;v(e.target.rows);var a=~~(e.target.scrollHeight/24);a===t&&(e.target.rows=a),a>=g&&(h(e.target.rows),e.target.scrollTop=e.target.scrollHeight),i(e.target.value),d(a<g?a:g)}})))},E=function(e){var t=e.ModalHandler,a=e.isShowing,n=e.circle,r=e.setCircle,l=e.actual;return c.a.createElement("div",{id:"nonclock"},[{id:1,task:"MOST IMPORTANT TASK OF THE DAY"},{id:2,task:"SECONDARY TASK OF IMPORTANT"},{id:3,task:" TERTIARY TASK OF IMPORTANT"},{id:4,task:"ADDTIONAL TASKS"}].map((function(e){return c.a.createElement("div",{id:"".concat(e.id),className:" row-span-5 "},c.a.createElement("h1",{className:"text-xl font-bold"},e.task),c.a.createElement("div",{className:"flex flex-row relative"},c.a.createElement(b,{id:e.id}),c.a.createElement("div",{className:"floatObject flex flex-row"},c.a.createElement(m,{inputName:"Target"}),c.a.createElement(f,{ModalHandler:t,isShowing:a,circle:n,setCircle:r}),c.a.createElement(m,{inputName:"Actual",actual:l}))))})))};var v=a(4),p=a.n(v),O=function(e){var t=e.currentMode,a=e.currentTime,n=Object(o.a)(t,1)[0],r=Object(o.a)(a,1)[0];return c.a.createElement("div",{id:"clock"},c.a.createElement("h2",{className:"text-xl"},"session"===n?"Session":"Break"),c.a.createElement("h3",null,p()(r).format("mm:ss")))},g=function(e){var t=e.activeStatus,a=e.handleReset,n=Object(o.a)(t,2),r=n[0],l=n[1];return c.a.createElement("div",{className:"controls-wrapper"},c.a.createElement("button",{id:"start_stop",onClick:function(){return l(!r)}},r?c.a.createElement("span",null,"\u275a\u275a"):c.a.createElement("span",null,"\u25ba")),c.a.createElement("button",{id:"reset",onClick:a},"\u21bb"))},h=a(5),j=a.n(h),x=function(e){var t=e.ModalHandler,a=e.circle,r=e.setCircle,l=e.isShowing,i=e.setisShowing,s=(e.actual,e.setActual,Object(n.useState)(5)),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(25),b=Object(o.a)(f,2),E=b[0],v=b[1],p=Object(n.useState)("session"),h=Object(o.a)(p,2),x=h[0],S=h[1],w=Object(n.useState)(60*E*1e3),y=Object(o.a)(w,2),N=y[0],k=y[1],T=Object(n.useState)(!1),C=Object(o.a)(T,2),A=C[0],I=C[1],M=Object(n.useRef)();!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return k(N-1e3)}),A?1e3:null),Object(n.useEffect)((function(){k(60*E*1e3)}),[E]),Object(n.useEffect)((function(){0===N&&"session"===x?(M.current.play(),S("break"),k(60*m*1e3)):60===N&&"break"===x&&(r(!a),M.current.play(),S("session"),k(60*E*1e3),i(!l))}),[N,m,E,x,a,l]);return c.a.createElement("div",{className:"container mx-auto"},c.a.createElement("div",{className:"time-wrapper",id:"clock"},c.a.createElement("button",{onClick:t,className:"closeButton"},"X"),c.a.createElement(O,{currentMode:[x,S],currentTime:[N,k]}),c.a.createElement(g,{activeStatus:[A,I],handleReset:function(){I(!1),S("session"),d(5),v(25),k(15e5)}}),c.a.createElement("h4",{className:"text-center text-4xl uppercase text-red-600  "}," ","Pomodoro Clock"),c.a.createElement("audio",{id:"beep",src:j.a,ref:M})))},S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),m=Object(o.a)(l,2),d=m[0],f=m[1],b=Object(n.useState)(),v=Object(o.a)(b,2),p=v[0],O=v[1],g=function(){r(!a)};return Object(n.useEffect)((function(){!0===a&&(document.getElementById("nonclock").style="opacity:0.2",document.getElementById("clock").style="border-color: red;background-color:#4CAF50;"),!1===a&&(document.getElementById("nonclock").style="backgroundColor:white; opacity:1")}),[a]),Object(n.useEffect)((function(){var e=localStorage.getItem("lastClear"),t=(new Date).getHours();console.log(t),t-e>8&&(localStorage.clear(),localStorage.setItem("lastClear",t))})),c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(i,null,c.a.createElement(s,null),c.a.createElement(u,null),c.a.createElement(E,{ModalHandler:g,isShowing:a,circle:d,setCircle:f,actual:p}),a?c.a.createElement(x,{ModalHandler:g,circle:d,setCircle:f,isShowing:a,setisShowing:r,actual:p,setActual:O}," "):null)))};l.a.render(c.a.createElement(S,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/alarm.61eb5a40.mp3"},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.86de7595.chunk.js.map