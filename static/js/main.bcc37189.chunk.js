(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(24),a(8)),s=a(1);function m(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"left-list"},r.a.createElement("li",null,"?")),r.a.createElement("ul",{className:"right-list"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/about"},"About")))))}var i=a(7),u=a.n(i),p=a(10),h=a(6);function d(e){var t=e.title,a=e.image,n=e.timestamp,c=e.last_edit;return r.a.createElement("article",{className:"post-details"},r.a.createElement("h2",null,t),r.a.createElement("figure",null,r.a.createElement("img",{src:a||"https://via.placeholder.com/300x200.jpg/cedfdf/1d3557/?text=Blog+Doesn%27t+Have+An+Image+Yet",alt:"",className:"post-image"}),r.a.createElement("figcaption",null,r.a.createElement("p",null,r.a.createElement("span",{className:"date"},"Posted on: ",n)," |",r.a.createElement("span",{className:"last-edit"}," Last edit: ",c)))))}function f(e){var t=e.text;return r.a.createElement("article",{className:"content",dangerouslySetInnerHTML:{__html:t}})}function E(e){var t=e.username,a=e.date,n=e.text;return r.a.createElement("article",{className:"comment"},r.a.createElement("h5",null,t||"Anonymous"),r.a.createElement("p",{className:"text"},n),r.a.createElement("p",{className:"date"},a))}function b(e){var t=e.showLoader;return r.a.createElement("div",{className:t?"loader":"loader inactive"})}function g(e){var t=e.match,a=Object(n.useState)({}),c=Object(h.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)([]),m=Object(h.a)(s,2),i=m[0],g=m[1],v=Object(n.useState)(""),j=Object(h.a)(v,2),x=j[0],O=j[1],y=Object(n.useState)(""),w=Object(h.a)(y,2),N=w[0],S=w[1],k=Object(n.useState)(!0),_=Object(h.a)(k,2),T=_[0],L=_[1],A=Object(n.useState)(!1),C=Object(h.a)(A,2),H=C[0],M=C[1],B=Object(n.useState)(""),I=Object(h.a)(B,2),J=I[0],W=I[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://julio22b-blog-api-1.glitch.me/api/post/".concat(t.params.id));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,l(n.foundPost),W(n.contentAsHTML),L(!1),M(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(p.a)(u.a.mark((function e(){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://julio22b-blog-api-1.glitch.me/api/post/".concat(t.params.id,"/comments"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,g(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t.params.id]);var D=function(){var e=Object(p.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("https://julio22b-blog-api-1.glitch.me/api/post/".concat(t.params.id,"/comments"),{method:"post",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:N,commenter:x})});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,S(""),O(""),g(i.concat(r.document));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{showLoader:T}),r.a.createElement("section",{className:H?"post":"hide"},r.a.createElement(d,{title:o.title,timestamp:o.timestamp,last_edit:o.last_edit||"This post hasn't been edited yet",image:o.image}),r.a.createElement(f,{text:J}),r.a.createElement("div",null,r.a.createElement("h4",null,"Comments"),i.length?i.map((function(e){return r.a.createElement(E,{username:e.username,text:e.text,date:e.timestamp,key:e._id})})):r.a.createElement("p",null,"This post has no comments yet."),r.a.createElement("form",{className:"add-comment",onSubmit:function(e){return D(e)}},r.a.createElement("p",null,"Leave a comment"),r.a.createElement("input",{type:"text",onChange:function(e){return O(e.target.value)},value:x,placeholder:"Name"}),r.a.createElement("textarea",{name:"comment",cols:"30",rows:"5",onChange:function(e){return S(e.target.value)},value:N,placeholder:"Your comment..."}),r.a.createElement("button",null,"Comment")))))}function v(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),s=Object(h.a)(o,2),m=s[0],i=s[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://julio22b-blog-api-1.glitch.me/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(!1),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a.filter((function(e){return e.published}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"page-h1"},"My posts"),r.a.createElement(b,{showLoader:m}),r.a.createElement("section",{className:"home-section"},f.map((function(e){return r.a.createElement(l.b,{to:"/post/".concat(e._id),className:"home-article-links",key:e._id},r.a.createElement(d,{title:e.title,timestamp:e.timestamp,last_edit:e.last_update||"This post hasn't been edited yet",image:e.image}))}))))}function j(){return r.a.createElement("div",null,r.a.createElement("h2",{style:x},"Whoops. This page does not exist. Go back to ",r.a.createElement(l.b,{to:"/home"},"Home")))}var x={margin:"3em",textAlign:"center",color:"#1d3557"};function O(){return r.a.createElement("h2",{style:y},"Not finished yet.")}var y={textAlign:"center",marginTop:"100px"};var w=function(){return r.a.createElement(l.a,null,r.a.createElement(m,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/home",exact:!0,component:v}),r.a.createElement(s.a,{path:"/about",exact:!0,component:O}),r.a.createElement(s.a,{path:"/post/:id",exact:!0,component:g}),r.a.createElement(s.a,{path:"/",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcc37189.chunk.js.map