(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{100:function(e,t,n){e.exports={paginationBlockWrapper:"Paginator_paginationBlockWrapper__35ZIW",paginationBlock:"Paginator_paginationBlock__3Lv8U",pagination:"Paginator_pagination__1RdNg",selectedPage:"Paginator_selectedPage__2m9br",buttonPrev:"Paginator_buttonPrev__1vSfq",buttonNext:"Paginator_buttonNext__22tii"}},111:function(e,t,n){e.exports={loginFormWrapper:"FormsControls_loginFormWrapper__QJkSz",formControl:"FormsControls_formControl__ZczVY",error:"FormsControls_error__-uRCD",formSummaryError:"FormsControls_formSummaryError__2HC3s"}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b}));var r=n(8),c=n(174),a=n(111),s=n.n(a),i=n(1),u=["input","meta","children"],o=["input","meta"],l=["input","meta"],j=function(e){e.input;var t=e.meta,n=e.children,r=(Object(c.a)(e,u),t.touched&&t.error);return Object(i.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(i.jsx)("div",{children:n}),r&&Object(i.jsx)("span",{children:t.error})]})},d=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,o));return Object(i.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,l));return Object(i.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},175:function(e,t,n){e.exports={wrapper:"News_wrapper__3YHyz",wrapper__item:"News_wrapper__item__1eIyu"}},176:function(e,t,n){e.exports={wrapper:"Music_wrapper___hSbD",wrapper__item:"Music_wrapper__item__267UF"}},177:function(e,t,n){e.exports={wrapper:"Setings_wrapper__uTzoH",wrapper__item:"Setings_wrapper__item__1F9W6"}},204:function(e,t,n){e.exports={loginH1:"Login_loginH1__21Npf",loginblock:"Login_loginblock__34CEy"}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return g}));var r=n(10),c=n.n(r),a=n(22),s=n(75),i=n(8),u=n(33),o=function(e){return Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.get("profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},l=function(e){return Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.get("profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},j=function(e){return Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.put("profile/status",{status:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},d=function(e){return Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,u.c.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},b=function(e){return Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.put("profile",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},f=n(101),O={posts:[{id:1,message:"Hi, how are you?",likeCounter:15},{id:2,message:"My first react post",likeCounter:25},{id:3,message:"Yo",likeCounter:5}],newPostText:"",profile:null,status:""},p={addPostActionCreator:function(e){return{type:"RWOS/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"RWOS/PROFILE/SET_USERS_PROFILE",profile:e}},setStatus:function(e){return{type:"RWOS/PROFILE/SET_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"RWOS/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}},deletePost:function(e){return{type:"RWOS/PROFILE/DELETE_POST",postId:e}}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n(p.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:t.sent.resultCode===u.a.Success&&n(p.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("updateStatus error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===(r=t.sent).resultCode&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,b(e);case 3:if((s=t.sent).resultCode!==u.a.Success){t.next=8;break}n(h(a)),t.next=11;break;case 8:return i=s.messages.length>0?s.messages[0]:"some error",n(Object(f.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/PROFILE/ADD-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:4,message:t.newPostText,likeCounter:0}])});case"RWOS/PROFILE/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"RWOS/PROFILE/SET_USERS_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"RWOS/PROFILE/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"RWOS/PROFILE/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},227:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.68dca8f1.svg"},243:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.4186f5f3.png"},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(75),c=n(8),a={dialogs:[{id:1,name:"Andrew"},{id:2,name:"Dmitry"},{id:3,name:"Petya"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"I am fine"}]},s={addMessage:function(e){return{type:"RWOS/DIALOG/ADD-MESSAGE",message:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;return"RWOS/DIALOG/ADD-MESSAGE"===t.type?Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.message}])}):e}},263:function(e,t,n){"use strict";n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return k}));var r=n(10),c=n.n(r),a=n(22),s=n(75),i=n(8),u={"messages-received":[],"status-changed":[]},o=null,l=function(){O("pending"),setTimeout(p,3e3)},j=function(e){var t=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(t)}))},d=function(){O("ready")},b=function(){O("error"),console.error("REFRESH PAGE")},f=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",j),null===(n=o)||void 0===n||n.removeEventListener("open",d),null===(r=o)||void 0===r||r.removeEventListener("error",b)},O=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function p(){var e;f(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),O("pending"),o.addEventListener("close",l),o.addEventListener("message",j),o.addEventListener("open",d),o.addEventListener("error",b)}var h=function(){p()},x=function(){var e;u["messages-received"]=[],u["status-changed"]=[],f(),null===(e=o)||void 0===e||e.close()},m=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},v=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},g=function(e){var t;null===(t=o)||void 0===t||t.send(e)},S=n(511),_={messages:[],status:"pending"},w=function(e){return{type:"RWOS/CHAT/MESSAGES_RECEIVED",payload:{messages:e}}},E=function(e){return{type:"RWOS/CHAT/STATUS_CHANGED",payload:{status:e}}},y=null,R=function(e){return null===y&&(y=function(t){e(w(t))}),y},P=null,C=function(e){return null===P&&(P=function(t){e(E(t))}),P},U=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),m("messages-received",R(t)),m("status-changed",C(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v("messages-received",R(t)),v("status-changed",C(t)),x();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/CHAT/MESSAGES_RECEIVED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(s.a)(e.messages),Object(s.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(S.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"RWOS/CHAT/STATUS_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload.status});default:return e}}},269:function(e,t,n){e.exports={selected:"Sandbox_selected__3TS97"}},315:function(e,t,n){},316:function(e,t,n){},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(110),s=n.n(a).a.create({withCredentials:!0,headers:{"API-KEY":"6e65516f-e614-437d-93bf-9e85e40713b5"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},500:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(35),s=n.n(a),i=(n(315),n(208)),u=n(209),o=n(262),l=n(260),j=(n(316),n(317),n(175)),d=n.n(j),b=n(1),f=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"News"}),Object(b.jsxs)("div",{className:d.a.wrapper,children:[Object(b.jsx)("div",{className:d.a.wrapper__item,children:"News #1"}),Object(b.jsx)("div",{className:d.a.wrapper__item,children:"News #2"})]})]})},O=n(176),p=n.n(O),h=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Music"}),Object(b.jsxs)("div",{className:p.a.wrapper,children:[Object(b.jsx)("div",{className:p.a.wrapper__item,children:"Albums #1"}),Object(b.jsx)("div",{className:p.a.wrapper__item,children:"Albums #2"})]})]})},x=n(177),m=n.n(x),v=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Setings"}),Object(b.jsxs)("div",{className:m.a.wrapper,children:[Object(b.jsx)("div",{className:m.a.wrapper__item,children:"User setings block #1"}),Object(b.jsx)("div",{className:m.a.wrapper__item,children:"User setings block #2"})]})]})},g=n(8),S=n(52),_=n(512),w=n(513),E=n(279),y=n(503),R=n(506),P=function(){console.log("rendering calc");var e=R.a.Title,t=Object(r.useState)({c1:10,c2:10}),n=Object(S.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(e,{level:2,children:"Judge calc"}),Object(b.jsxs)(_.a,{justify:"start",children:[Object(b.jsxs)(w.a,{span:4,children:[Object(b.jsx)("div",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}),Object(b.jsx)("div",{children:c.c1}),Object(b.jsx)(E.a,{onClick:function(){a((function(e){return Object(g.a)(Object(g.a)({},e),{},{c1:e.c1+1})}))},children:"+"})]}),Object(b.jsxs)(w.a,{span:4,offset:2,children:[Object(b.jsx)("div",{children:"\u041f\u0435\u0442\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447"}),Object(b.jsx)("div",{children:c.c2}),Object(b.jsx)(E.a,{onClick:function(){a((function(e){return Object(g.a)(Object(g.a)({},e),{},{c2:e.c2+1})}))},children:"+"})]}),Object(b.jsx)(y.a,{})]}),Object(b.jsxs)(_.a,{justify:"start",children:[Object(b.jsx)(w.a,{span:2,offset:2,children:Object(b.jsx)(E.a,{onClick:function(){a((function(e){return Object(g.a)(Object(g.a)({},e),{},{c1:e.c1-1,c2:e.c2-1})}))},children:"-"})}),Object(b.jsx)(w.a,{span:2,children:Object(b.jsx)(E.a,{onClick:function(){a((function(e){return Object(g.a)(Object(g.a)({},e),{},{c1:e.c1=10,c2:e.c2=10})}))},children:"reset"})})]})]})},C=n(269),U=n.n(C),T=n(508),k=n(110),I=n.n(k),L=n(507),A=n(509),F=R.a.Title,N=R.a.Link,W=function(e){var t=e.seconds,n=e.onChange,c=e.timerKey,a=Object(r.useState)(10),s=Object(S.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){u(t)}),[t]),Object(r.useEffect)((function(){n(i)}),[i]),Object(r.useEffect)((function(){var e=setInterval((function(){u((function(e){return e-1}))}),1e3);return function(){clearInterval(e)}}),[c]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(L.a,{type:"circle",percent:10*i,format:function(e){return"".concat(i," sec")}})})},H=function(e){var t=e.selectedUser,n=Object(r.useState)(null),c=Object(S.a)(n,2),a=c[0],s=c[1],i=Object(r.useState)(10),u=Object(S.a)(i,2),o=u[0],l=u[1];return Object(r.useEffect)((function(){t&&I.a.get("https://api.github.com/users/".concat(t.login)).then((function(e){l(10),s(e.data)}))}),[t]),Object(r.useEffect)((function(){o<1&&s(null)}),[o]),Object(b.jsx)(b.Fragment,{children:a&&Object(b.jsxs)(w.a,{span:8,offset:2,children:[Object(b.jsx)(W,{seconds:o,onChange:l,timerKey:a.login}),Object(b.jsx)(F,{level:1,children:"Profile:"}),Object(b.jsxs)(N,{href:a.html_url,children:[Object(b.jsx)(F,{level:2,children:a.login}),Object(b.jsx)(A.a,{src:a.avatar_url,size:{sm:40,md:60,lg:84,xl:160,xxl:220}})]}),Object(b.jsxs)("p",{children:["User id: ",a.id]}),Object(b.jsxs)("p",{children:["Followers: ",a.followers]})]})})},D=function(e){var t=e.value,n=e.onSubmit,c=Object(r.useState)(""),a=Object(S.a)(c,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){i(t)}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T.a,{placeholder:"search users",value:s,onChange:function(e){i(e.target.value)}}),Object(b.jsx)(E.a,{onClick:function(){n(s)},children:"find"})]})},G=function(e){var t=e.termSearch,n=e.selectedUser,c=e.onUserSelect,a=Object(r.useState)([]),s=Object(S.a)(a,2),i=s[0],u=s[1];return Object(r.useEffect)((function(){I.a.get("https://api.github.com/search/users?q=".concat(t)).then((function(e){u(e.data.items)}))}),[t]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{children:i.map((function(e){return Object(b.jsx)("li",{className:n===e?U.a.selected:"",onClick:function(){c(e)},children:e.login},e.id)}))})})},M=function(){var e=R.a.Title,t=Object(r.useState)(null),n=Object(S.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("chernykh"),i=Object(S.a)(s,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){console.log("sync title"),c&&(document.title=c.login)}),[c]),Object(b.jsxs)("div",{children:[Object(b.jsx)(e,{level:2,children:"GitHub search"}),Object(b.jsxs)(_.a,{justify:"start",children:[Object(b.jsxs)(w.a,{span:8,children:[Object(b.jsx)(D,{value:u,onSubmit:function(e){o(e)}}),Object(b.jsx)(E.a,{onClick:function(){o("chernykh")},children:"reset"}),Object(b.jsx)(G,{termSearch:u,selectedUser:c,onUserSelect:function(e){a(e)}})]}),c&&Object(b.jsx)(H,{selectedUser:c}),Object(b.jsx)(y.a,{})]})]})},z=n(85),B=n.n(z),V=n(30),q=n(100),K=n.n(q),J=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.onPageChanged,a=void 0===c?function(e){return e}:c,s=e.currentPage,i=void 0===s?1:s,u=e.portionSize,o=void 0===u?10:u,l=Math.ceil(t/n),j=Math.ceil(l/o),d=Object(r.useState)(Math.ceil(i/o)),f=Object(S.a)(d,2),O=f[0],p=f[1],h=(O-1)*o+1,x=O*o,m=[],v=1;v<=l;v++)m.push(v);return Object(b.jsx)("div",{className:K.a.paginationBlockWrapper,children:Object(b.jsxs)("div",{className:K.a.paginationBlock,children:[O>1?Object(b.jsx)("button",{className:K.a.buttonPrev,onClick:function(){p(O-1)},children:"PREV"}):Object(b.jsx)("button",{disabled:!0,children:"PREV"}),m.filter((function(e){return e>=h&&e<=x})).map((function(e,t){return Object(b.jsx)("span",{onClick:function(t){a(e)},className:"".concat(K.a.pagination," ").concat(i===e?K.a.selectedPage:""),children:e},t)})),O<j?Object(b.jsx)("button",{className:K.a.buttonNext,onClick:function(){p(O+1)},children:"NEXT"}):Object(b.jsx)("button",{disabled:!0,children:"NEXT"})]})})},Y=n(227),Z=n(40),X=function(e){var t=e.followingInProgress,n=e.follow,r=e.unfollow,c=e.user;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(Z.c,{to:"/profile/"+c.id,children:Object(b.jsx)("img",{className:B.a.userPhoto,src:null!=c.photos.small?c.photos.small:Y.a,alt:"avatar"})})}),Object(b.jsx)("div",{className:B.a.userButton,children:c.followed?Object(b.jsx)("button",{disabled:t.some((function(e){return e===c.id})),onClick:function(){r(c.id)},children:"Unfollow"}):Object(b.jsx)("button",{disabled:t.some((function(e){return e===c.id})),onClick:function(){n(c.id)},children:"Follow"})})]}),Object(b.jsxs)("div",{className:B.a.wrapper__item,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:c.name}),Object(b.jsx)("div",{children:c.status})]}),Object(b.jsx)("div",{})]})]})},Q=n(136),$=n(283),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.filter},ce=function(e){return e.usersPage.isFetching},ae=function(e){return e.usersPage.followingInProgress},se=function(e){return{}},ie=c.a.memo((function(e){var t=e.onFilterChanged,n=Object(V.d)(re);return Object(b.jsx)("div",{children:Object(b.jsx)(Q.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:se,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(b.jsxs)(Q.b,{children:[Object(b.jsx)(Q.a,{type:"text",name:"term"}),Object(b.jsxs)(Q.a,{name:"friend",as:"select",children:[Object(b.jsx)("option",{value:"null",children:"All"}),Object(b.jsx)("option",{value:"true",children:"Only followed"}),Object(b.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(b.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),ue=n(10),oe=n.n(ue),le=n(22),je=n(75),de=n(33),be={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return de.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return Object(le.a)(oe.a.mark((function t(){var n;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.c.post("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},unfollow:function(e){return Object(le.a)(oe.a.mark((function t(){var n;return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de.c.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},fe=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},Oe={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},pe=function(e){return{type:"RWOS/USERS/FOLLOW",userId:e}},he=function(e){return{type:"RWOS/USERS/UNFOLLOW",userId:e}},xe=function(e){return{type:"RWOS/USERS/SET_USERS",users:e}},me=function(e){return{type:"RWOS/USERS/SET_CURRENT_PAGE",currentPage:e}},ve=function(e){return{type:"RWOS/USERS/SET_FILTER",payload:e}},ge=function(e){return{type:"RWOS/USERS/SET_TOTAL_USERS_COUNT",totalUsersCount:e}},Se=function(e){return{type:"RWOS/USERS/TOGGLE_IS_FETCHING",isFetching:e}},_e=function(e,t){return{type:"RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},we=function(e,t,n){return function(){var r=Object(le.a)(oe.a.mark((function r(c,a){var s;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(Se(!0)),c(me(e)),c(ve(n)),r.next=5,be.getUsers(e,t,n.term,n.friend);case 5:s=r.sent,c(Se(!1)),c(xe(s.items)),c(ge(s.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Ee=function(){var e=Object(le.a)(oe.a.mark((function e(t,n,r,c){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_e(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===de.a.Success&&t(c(n)),t(_e(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/USERS/FOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:fe(e.users,t.userId,"id",{followed:!0})});case"RWOS/USERS/UNFOLLOW":return Object(g.a)(Object(g.a)({},e),{},{users:fe(e.users,t.userId,"id",{followed:!1})});case"RWOS/USERS/SET_USERS":return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case"RWOS/USERS/SET_CURRENT_PAGE":return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case"RWOS/USERS/SET_FILTER":return Object(g.a)(Object(g.a)({},e),{},{filter:t.payload});case"RWOS/USERS/SET_TOTAL_USERS_COUNT":return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"RWOS/USERS/TOGGLE_IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case"RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(je.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},Re=n(34),Pe=function(){var e=Object(V.c)(),t=Object(Re.f)(),n=Object(Re.g)(),c=Object(V.d)((function(e){return e.usersPage.totalUsersCount})),a=Object(V.d)(te),s=Object(V.d)(ne),i=Object(V.d)(ee),u=Object(V.d)(re),o=Object(V.d)(ae);Object(r.useEffect)((function(){t.push({pathname:"/users",search:"?term=".concat(u.term,"&friend=").concat(u.friend,"&page=").concat(s)})}),[u,s]),Object(r.useEffect)((function(){var t=n.search,r=new URLSearchParams(t),c=r.get("page"),i=r.get("term"),o=r.get("friend"),l=s,j=u;c&&(l=Number(c)),i&&(j=Object(g.a)(Object(g.a)({},j),{},{term:i})),o&&(j=Object(g.a)(Object(g.a)({},j),{},{friend:"null"===o?null:"true"===o})),e(we(l,a,j))}),[]);var l=function(t){e(function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(n,e,be.follow.bind(be),pe);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},j=function(t){e(function(e){return function(){var t=Object(le.a)(oe.a.mark((function t(n){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee(n,e,be.unfollow.bind(be),he);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(b.jsxs)("div",{children:[Object(b.jsx)(ie,{onFilterChanged:function(t){e(we(1,a,t))}}),Object(b.jsx)(J,{totalItemsCount:c,pageSize:a,onPageChanged:function(t){e(we(t,a,u))},currentPage:s}),i.map((function(e){return Object(b.jsx)("div",{className:B.a.wrapper,children:Object(b.jsx)(X,{followingInProgress:o,follow:l,unfollow:j,user:e})},e.id)}))]})},Ce=n(94),Ue=function(e){var t=Object(V.d)(ce);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:e.pageTitle}),t?Object(b.jsx)(Ce.a,{}):null,Object(b.jsx)(Pe,{})]})},Te=n(258),ke=n(259),Ie=n(123),Le=n(150),Ae=function(){return Object(le.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.c.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},Fe=function(e,t){var n=arguments;return Object(le.a)(oe.a.mark((function r(){var c,a,s;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=n.length>2&&void 0!==n[2]&&n[2],a=n.length>3&&void 0!==n[3]?n[3]:null,r.next=4,de.c.post("auth/login",{email:e,password:t,rememberMe:c,captcha:a});case 4:return s=r.sent,r.abrupt("return",s.data);case 6:case"end":return r.stop()}}),r)})))()},Ne=function(){return Object(le.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.c.delete("auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},We=function(){return Object(le.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.c.get("security/get-captcha-url");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},He=n(101),De={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Ge=function(e,t,n,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:"RWOS/AUTH/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r,captchaUrl:c}}},Me=function(e){return{type:"RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},ze=function(){return function(){var e=Object(le.a)(oe.a.mark((function e(t){var n,r,c,a,s;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:(n=e.sent).resultCode===de.a.Success&&(r=n.data,c=r.id,a=r.email,s=r.login,t(Ge(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Be=function(){return function(){var e=Object(le.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We();case 2:n=e.sent,t(Me(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/AUTH/SET_USER_DATA":return Object(g.a)(Object(g.a)({},e),t.payload);case"RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},qe=n(111),Ke=n.n(qe),Je=n(204),Ye=n.n(Je),Ze=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(b.jsxs)("form",{onSubmit:t,className:Ke.a.loginFormWrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)(Te.a,{placeholder:"Email",name:"email",component:Ie.a,validate:[Le.b]})}),Object(b.jsx)("div",{children:Object(b.jsx)(Te.a,{placeholder:"Password",name:"password",type:"password",component:Ie.a,validate:[Le.b]})}),Object(b.jsx)("div",{children:Object(b.jsx)(Te.a,{component:Ie.a,name:"rememberMe",type:"checkbox"})}),n&&Object(b.jsx)("div",{className:Ke.a.formSummaryError,children:n}),r&&Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:r,alt:"captcha"}),Object(b.jsx)(Te.a,{placeholder:"captcha",name:"captcha",component:Ie.a,validate:[Le.b]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})})),Xe=function(){var e=Object(V.c)(),t=Object(V.d)((function(e){return e.auth})),n=t.isAuth,r=t.captchaUrl;return n?Object(b.jsx)(Re.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:Ye.a.loginH1,children:"Login"}),Object(b.jsx)(Ze,{onSubmit:function(t){var n,r,c,a;e((n=t.email,r=t.password,c=t.rememberMe,a=t.captcha,function(){var e=Object(le.a)(oe.a.mark((function e(t){var s,i;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe(n,r,c,a);case 2:(s=e.sent).resultCode===de.a.Success?t(ze()):(s.resultCode===de.b.CaptchaIsRequired&&t(Be()),i=s.messages.length>0?s.messages[0]:"some error",t(Object(He.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:r}),Object(b.jsxs)("div",{className:Ye.a.loginblock,children:[Object(b.jsx)("h2",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:"}),Object(b.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(b.jsx)("p",{children:"Password: free"})]})]})},Qe=n(504),$e=n(510),et=n(505),tt=n(243),nt=function(){var e=Object(V.c)(),t=Object(V.d)((function(e){return e.auth})),n=(t.login,t.isAuth),r=Object(V.d)((function(e){return e.profilePage})).profile,c=Qe.a.Header;return Object(b.jsxs)(c,{className:"header",children:[Object(b.jsx)("div",{className:"logo"}),Object(b.jsxs)(_.a,{children:[Object(b.jsx)(w.a,{span:18,children:Object(b.jsx)($e.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/users",children:"Developers"})},"1")})}),n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.a,{span:2,children:r&&Object(b.jsx)(A.a,{icon:Object(b.jsx)(et.a,{src:null!==r.photos.small?r.photos.small:tt.a,style:{width:32}})})}),Object(b.jsx)(w.a,{span:4,children:Object(b.jsx)(E.a,{onClick:function(){e(function(){var e=Object(le.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ne();case 2:e.sent.resultCode===de.a.Success&&t(Ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(b.jsx)(w.a,{span:6,children:Object(b.jsx)(E.a,{children:Object(b.jsx)(Z.b,{to:"/Login/",children:"Login"})})})]})]})},rt={initialized:!1},ct=function(){return{type:"RWOS/APP/INITIALIZED_SUCCESS"}},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;return"RWOS/APP/INITIALIZED_SUCCESS"===t.type?Object(g.a)(Object(g.a)({},e),{},{initialized:!0}):e},st=n(36);var it,ut=n(514),ot=n(515),lt=n(516),jt=n(517),dt=n(276),bt=$e.a.SubMenu,ft=Qe.a.Content,Ot=Qe.a.Sider,pt=c.a.lazy((function(){return n.e(4).then(n.bind(null,525))})),ht=c.a.lazy((function(){return n.e(3).then(n.bind(null,524))})),xt=c.a.lazy((function(){return n.e(5).then(n.bind(null,522))})),mt=(it=pt,function(e){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)(Ce.a,{}),children:Object(b.jsx)(it,Object(g.a)({},e))})}),vt=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){console.log("Some error occured")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)(Qe.a,{children:[Object(b.jsx)(nt,{}),Object(b.jsxs)(Qe.a,{children:[Object(b.jsx)(Ot,{width:200,className:"site-layout-background",children:Object(b.jsxs)($e.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(b.jsxs)(bt,{icon:Object(b.jsx)(ut.a,{}),title:"My profile",children:[Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/profile",children:"Profile"})},"1"),Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/dialogs",children:"Messages"})},"2"),Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/chat",children:"Chat"})},"3")]},"sub1"),Object(b.jsx)(bt,{icon:Object(b.jsx)(ot.a,{}),title:"Developers",children:Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/users",children:"Users"})},"5")},"sub2"),Object(b.jsxs)(bt,{icon:Object(b.jsx)(lt.a,{}),title:"Media",children:[Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/news",children:"News"})},"9"),Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/music",children:"Music"})},"10"),Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/setings",children:"Setings"})},"11")]},"sub3"),Object(b.jsxs)(bt,{icon:Object(b.jsx)(jt.a,{}),title:"SandBox",children:[Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/github",children:"GitHub"})},"12"),Object(b.jsx)($e.a.Item,{children:Object(b.jsx)(Z.b,{to:"/calc",children:"\u0421alc"})},"13")]},"sub4")]})}),Object(b.jsxs)(Qe.a,{style:{padding:"0 24px 24px"},children:[Object(b.jsxs)(ft,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[Object(b.jsxs)(r.Suspense,{fallback:Object(b.jsx)(Ce.a,{}),children:[Object(b.jsx)(Re.b,{path:"/profile/:userId?",children:Object(b.jsx)(ht,{})}),Object(b.jsx)(Re.b,{path:"/chat",children:Object(b.jsx)(xt,{})})]}),Object(b.jsx)(Re.b,{path:"/dialogs",children:Object(b.jsx)(mt,{})}),Object(b.jsx)(Re.b,{path:"/login",children:Object(b.jsx)(Xe,{})}),Object(b.jsx)(Re.b,{path:"/users",children:Object(b.jsx)(Ue,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}),Object(b.jsx)(Re.b,{path:"/news",children:Object(b.jsx)(f,{})}),Object(b.jsxs)(Re.b,{path:"/music",children:[Object(b.jsx)(h,{}),Object(b.jsx)(Re.b,{path:"/setings",children:Object(b.jsx)(v,{})})]}),Object(b.jsx)(Re.b,{path:"/github",children:Object(b.jsx)(M,{})}),Object(b.jsx)(Re.b,{path:"/calc",children:Object(b.jsx)(P,{})}),Object(b.jsx)(Re.b,{exact:!0,path:"/",children:this.props.initialized?Object(b.jsx)(Re.a,{to:"/profile"}):Object(b.jsx)(Xe,{})})]}),Object(b.jsx)(dt.Footer,{style:{textAlign:"center"},children:"developers social network \xa9 2021 Created by chernykh.ru"})]})]})]}):Object(b.jsx)(Ce.a,{})}}]),n}(c.a.Component),gt=Object(st.compose)(Re.h,Object(V.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(le.a)(oe.a.mark((function e(t){var n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(ze()),Promise.all([n]).then((function(){return t(ct())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(vt),St=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,523)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},_t=n(277),wt=n(207),Et=n(257),yt={},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt;return e},Pt=n(263),Ct=n(278),Ut=n(261),Tt=Object(st.combineReducers)({profilePage:wt.b,dialogsPage:Et.b,sidebar:Rt,usersPage:ye,auth:Ve,form:Ut.a,app:at,chat:Pt.a}),kt=Object(st.createStore)(Tt,Object(_t.composeWithDevTools)(Object(st.applyMiddleware)(Ct.a)));s.a.render(Object(b.jsx)(Z.a,{children:Object(b.jsx)(V.a,{store:kt,children:Object(b.jsx)(gt,{})})}),document.getElementById("root")),St()},85:function(e,t,n){e.exports={wrapper:"Users_wrapper__3GS1A",wrapper__item:"Users_wrapper__item__1cUQX",userPhoto:"Users_userPhoto__22rSw",userButton:"Users_userButton__1Rd_M",pagination:"Users_pagination__9wTpd",selectedPage:"Users_selectedPage__rTwP8",preloader:"Users_preloader__13i_D"}},94:function(e,t,n){"use strict";n(0);var r=n(85),c=n.n(r),a=n.p+"static/media/preloader.0703713f.svg",s=n(1);t.a=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("img",{className:c.a.preloader,src:a,alt:"is loading..."})})}}},[[500,1,2]]]);
//# sourceMappingURL=main.89f7e154.chunk.js.map