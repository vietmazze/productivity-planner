(this["webpackJsonpproductivity-planner"]=this["webpackJsonpproductivity-planner"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),l=(a(11),a(1)),i=function(e){return c.a.createElement("div",{className:"container mx-auto h-screen"},c.a.createElement("div",{className:" grid grid-rows-1 grid-flow-row gap-3 relative"},e.children))},s=function(){return c.a.createElement("nav",{className:" bg-gray-500 h-20 py-3  "},c.a.createElement("div",{className:"flex flex-col content-center"},c.a.createElement("h1",{className:"font-serif text-center text-gray-700 text-4xl"}," ","Productivity Planner"," ")))},u=function(){var e=[{quote:"Simplicity boils down to two steps: Identify the essential. Eliminate the rest",author:"Leo Babauta"},{quote:"Continuous improvement is better than delayed perfection",author:"Mark Twain"},{quote:"Quality means dooing it right when no one is looking",author:"Henry Ford"},{quote:"To succeed in your mission, you must have single-minded devotion to your goal",author:"A.P.J Abdul Kalam"},{quote:"The best way to improve your self-control is to see how and why you lose control",author:"Kelly McGonigal"},{quote:"It is possible to commit no mistakes and still lose. That is not a weakness; that is life",author:"Jean-Luc Picard"}];var t=function(e){var t=e.length-1;return Math.floor(Math.random()*t)}(e);return c.a.createElement("blockquote",{className:"font-sans text-lg  text-center .italic text-orange-500 pt-8"},e[t].quote,c.a.createElement("footer",{className:""},e[t].author))};var m=function(e){var t=e.inputName;return c.a.createElement("div",{className:"flex flex-col px-12 ",id:"nonclock"},c.a.createElement("input",{type:"text",id:"",name:"target",className:"squarebox text-xs text-center ",onKeyDown:console.log("test"),tabIndex:"0"}),c.a.createElement("label",{className:"font-semibold text-xs text-center"},t))},d=function(e){var t=e.ModalHandler,a=(e.circle,Object(n.useState)()),r=Object(l.a)(a,2),o=(r[0],r[1]),i=function(e){e.preventDefault(),o(e.target.id),t()};return c.a.createElement("div",{className:" ",id:"nonclock"},[{id:1,active:!0},{id:2,active:!0},{id:3,active:!0},{id:4,active:!0},{id:5,active:!0}].map((function(e){return c.a.createElement("button",{id:"".concat(e.id),className:e.active?"circledot":"circledot-close",onClick:i})})))},f=function(e){var t=e.id,a=(e.taskValue,Object(n.useState)(localStorage.getItem("".concat(t)))),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(n.useState)(2),u=Object(l.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(2),b=Object(l.a)(f,2),E=b[0],v=b[1],p=Object(n.useState)(2),g=Object(l.a)(p,2),O=g[0],h=g[1];return Object(n.useEffect)((function(){v(E),h(O),d(m),i(o),localStorage.setItem("".concat(t),o)}),[E,O,m,o]),c.a.createElement("div",{tabIndex:"0"},c.a.createElement("textarea",{name:"",id:t,cols:"40",rows:m,value:o,className:"border-solid border border-orange-500 outline-none resize-none",placeholder:"Create your session",onChange:function(e){var t=e.target.rows;v(e.target.rows);var a=~~(e.target.scrollHeight/24);a===t&&(e.target.rows=a),a>=O&&(h(e.target.rows),e.target.scrollTop=e.target.scrollHeight),i(e.target.value),d(a<O?a:O)}}))},b=function(e){var t=e.ModalHandler,a=e.isShowing,n=e.circle;return c.a.createElement("div",{id:"nonclock"},[{id:1,task:"MOST IMPORTANT TASK OF THE DAY"},{id:2,task:"SECONDARY TASK OF IMPORTANT"},{id:3,task:" TERTIARY TASK OF IMPORTANT"},{id:4,task:"ADDTIONAL TASKS"}].map((function(e){return c.a.createElement("div",{id:"".concat(e.id),className:" row-span-5 "},c.a.createElement("h1",{className:"text-xl font-bold"},e.task),c.a.createElement("div",{className:"flex flex-row relative"},c.a.createElement(f,{id:e.id}),c.a.createElement("div",{className:"floatObject flex flex-row"},c.a.createElement(m,{inputName:"Target"}),c.a.createElement(d,{ModalHandler:t,isShowing:a,circle:n}),c.a.createElement(m,{inputName:"Actual"}))))})))};var E=a(4),v=a.n(E),p=function(e){var t=e.currentMode,a=e.currentTime,n=Object(l.a)(t,1)[0],r=Object(l.a)(a,1)[0];return c.a.createElement("div",{id:"clock"},c.a.createElement("h2",{className:"text-xl"},"session"===n?"Session":"Break"),c.a.createElement("h3",null,v()(r).format("mm:ss")))},g=function(e){var t=e.activeStatus,a=e.handleReset,n=Object(l.a)(t,2),r=n[0],o=n[1];return c.a.createElement("div",{className:"controls-wrapper"},c.a.createElement("button",{id:"start_stop",onClick:function(){return o(!r)}},r?c.a.createElement("span",null,"\u275a\u275a"):c.a.createElement("span",null,"\u25ba")),c.a.createElement("button",{id:"reset",onClick:a},"\u21bb"))},O=a(5),h=a.n(O),x=function(e){var t=e.ModalHandler,a=e.circle,r=e.setCircle,o=Object(n.useState)(5),i=Object(l.a)(o,2),s=i[0],u=i[1],m=Object(n.useState)(25),d=Object(l.a)(m,2),f=d[0],b=d[1],E=Object(n.useState)("session"),v=Object(l.a)(E,2),O=v[0],x=v[1],j=Object(n.useState)(60*f*1e3),y=Object(l.a)(j,2),N=y[0],k=y[1],S=Object(n.useState)(!1),w=Object(l.a)(S,2),T=w[0],I=w[1],A=Object(n.useRef)();!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return k(N-1e3)}),T?1e3:null),Object(n.useEffect)((function(){k(60*f*1e3)}),[f]),Object(n.useEffect)((function(){0===N&&"session"===O?(A.current.play(),r(!0),x("break"),k(60*s*1e3)):0===N&&"break"===O&&(A.current.play(),x("session"),k(60*f*1e3))}),[N,s,f,O,a]);return c.a.createElement("div",{className:"container mx-auto"},c.a.createElement("div",{className:"time-wrapper",id:"clock"},c.a.createElement("button",{onClick:t,className:"closeButton"},"X"),c.a.createElement(p,{currentMode:[O,x],currentTime:[N,k]}),c.a.createElement(g,{activeStatus:[T,I],handleReset:function(){I(!1),x("session"),u(5),b(25),k(15e5)}}),c.a.createElement("h4",{className:"text-center text-4xl uppercase text-red-600  "}," ","Pomodoro Clock"),c.a.createElement("audio",{id:"beep",src:h.a,ref:A})))},j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),m=Object(l.a)(o,2),d=m[0],f=m[1],E=function(){r(!a)};return Object(n.useEffect)((function(){!0===a&&(document.getElementById("nonclock").style="opacity:0.2",document.getElementById("clock").style="border-color: red;background-color:#4CAF50;"),!1===a&&(document.getElementById("nonclock").style="backgroundColor:white; opacity:1")}),[a]),Object(n.useEffect)((function(){var e=localStorage.getItem("time");if(null===e){var t=new Date;t.setHours(t.getHours()+24),localStorage.setItem("time",t)}else e<new Date&&localStorage.clear()})),c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement(i,null,c.a.createElement(s,null),c.a.createElement(u,null),c.a.createElement(b,{ModalHandler:E,isShowing:a,circle:d}),a?c.a.createElement(x,{ModalHandler:E,circle:d,setCircle:f}," "):null)))};o.a.render(c.a.createElement(j,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/alarm.61eb5a40.mp3"},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.e4acffcc.chunk.js.map