(this["webpackJsonpproductivity-planner"]=this["webpackJsonpproductivity-planner"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(16),a(1)),s=function(e){return l.a.createElement("div",{className:"container mx-auto h-screen"},l.a.createElement("div",{className:" grid grid-rows-1 grid-flow-row gap-3 relative"},e.children))},i=function(){return l.a.createElement("nav",{className:" bg-gray-500 h-20 py-3  "},l.a.createElement("div",{className:"flex flex-col content-center"},l.a.createElement("h1",{className:"font-serif text-center text-gray-700 text-4xl"}," ","Productivity Planner"," ")))},m=function(){return l.a.createElement("blockquote",{className:"font-sans text-lg  text-center .italic text-orange-500 pt-8"},'"The way to achieve your own success is to be willing to help somebody else get it first."',l.a.createElement("footer",{className:""},"IYanla Vanzantt"))};var u=function(){return l.a.createElement("div",{className:"flex flex-col px-12 "},l.a.createElement("input",{type:"text",id:"",name:"target",className:"squarebox text-xs text-center ",onKeyDown:console.log("test"),tabIndex:"0"}),l.a.createElement("label",{className:"font-semibold text-xs text-center"},"Target"))};var d=a(4),E=a.n(d),f=function(e){var t=e.currentMode,a=e.currentTime,n=Object(o.a)(t,1)[0],r=Object(o.a)(a,1)[0];return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-xl"},"session"===n?"Session":"Break"),l.a.createElement("h3",null,E()(r).format("mm:ss")))},b=function(e){var t=e.activeStatus,a=e.handleReset,n=Object(o.a)(t,2),r=n[0],c=n[1];return l.a.createElement("div",{className:"controls-wrapper"},l.a.createElement("button",{id:"start_stop",onClick:function(){return c(!r)}},r?l.a.createElement("span",null,"\u275a\u275a"):l.a.createElement("span",null,"\u25ba")),l.a.createElement("button",{id:"reset",onClick:a},"\u21bb"))},g=a(5),h=a.n(g),v=function(e){var t=e.ModalHandler,a=Object(n.useState)(5),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(25),m=Object(o.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)("session"),g=Object(o.a)(E,2),v=g[0],w=g[1],x=Object(n.useState)(60*u*1e3),p=Object(o.a)(x,2),S=p[0],N=p[1],O=Object(n.useState)(!1),M=Object(o.a)(O,2),H=M[0],j=M[1],y=Object(n.useRef)();!function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){return N(S-1e3)}),H?1e3:null),Object(n.useEffect)((function(){N(60*u*1e3)}),[u]),Object(n.useEffect)((function(){0===S&&"session"===v?(y.current.play(),w("break"),N(60*c*1e3)):0===S&&"break"===v&&(y.current.play(),w("session"),N(60*u*1e3))}),[S,c,u,v]);return l.a.createElement("div",{className:"container mx-auto"},l.a.createElement("div",{className:"time-wrapper"},l.a.createElement("button",{onClick:t,className:"closeButton"},"X"),l.a.createElement(f,{currentMode:[v,w],currentTime:[S,N]}),l.a.createElement(b,{activeStatus:[H,j],handleReset:function(){j(!1),w("session"),s(5),d(25),N(15e5)}}),l.a.createElement("h4",{className:"text-center text-4xl uppercase text-red-600  "}," ","Pomodoro Clock"),l.a.createElement("audio",{id:"beep",src:h.a,ref:y})))};var w=function(e){var t=e.ModalHandler;return e.isShowing,l.a.createElement("div",{className:" px-5 "},l.a.createElement("button",{id:"",name:"circle",className:"circledot",onClick:t}))},x=a(6),p=a(7),S=a(9),N=a(8),O=a(10),M=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(S.a)(this,Object(N.a)(t).call(this,e))).handleChange=function(e){var t=a.state,n=t.minRows,l=t.maxRows,r=e.target.rows;e.target.rows=n;var c=~~(e.target.scrollHeight/24);c===r&&(e.target.rows=c),c>=l&&(e.target.rows=l,e.target.scrollTop=e.target.scrollHeight),a.setState({value:e.target.value,rows:c<l?c:l})},a.state={value:"",rows:2,minRows:2,maxRows:5},a}return Object(O.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement("textarea",{rows:this.state.rows,value:this.state.value,cols:"40",placeholder:"Enter your text here...",className:"border-solid border border-orange-500 outline-none resize-none ",onChange:this.handleChange})}}]),t}(l.a.PureComponent);var H=function(e){var t=e.ModalHandler,a=e.isShowing;return l.a.createElement("div",null,l.a.createElement("div",{className:" row-span-5 "},l.a.createElement("h1",{className:"text-xl font-bold"},"MOST IMPORTANT TASK OF THE DAY"),l.a.createElement("div",{className:"flex flex-row relative"},l.a.createElement(M,null),l.a.createElement(u,null),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(u,null))),l.a.createElement("div",{className:" row-span-5 "},l.a.createElement("h1",{className:"text-xl font-bold"},"SECONDARY TASKS OF IMPORTANCE"),l.a.createElement("div",{className:"flex flex-row relative"},l.a.createElement(M,null),l.a.createElement(u,null),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(u,null)),l.a.createElement("br",null),l.a.createElement("div",{className:"flex flex-row relative"},l.a.createElement(M,null),l.a.createElement(u,null),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(u,null))),l.a.createElement("div",{className:" row-span-5 "},l.a.createElement("h1",{className:"text-xl font-bold"},"ADDTIONAL TASKS"),l.a.createElement("div",{className:"flex flex-row relative"},l.a.createElement(M,null),l.a.createElement(u,null),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(w,{ModalHandler:t,isShowing:a}),l.a.createElement(u,null))))};var j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){r(!a),console.log("test")};return Object(n.useEffect)((function(){!0===a&&(document.getElementById("body").style.backgroundColor="#3B1F19"),!1===a&&(document.getElementById("body").style.backgroundColor="white")}),[a]),l.a.createElement("div",{className:"App",id:"body"},l.a.createElement(s,null,l.a.createElement(i,null),l.a.createElement(m,null),l.a.createElement(H,{ModalHandler:c,isShowing:a}),a?l.a.createElement(v,{ModalHandler:c}):null))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a.p+"static/media/alarm.61eb5a40.mp3"}},[[11,1,2]]]);
//# sourceMappingURL=main.558ec612.chunk.js.map