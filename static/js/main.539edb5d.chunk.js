(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return p}));var r=n(9),a=n(150),c=n(93),s=n.n(c),i=n(2),o=["input","meta","children"],u=["input","meta"],l=["input","meta"],d=function(e){e.input;var t=e.meta,n=e.children,r=(Object(a.a)(e,o),t.touched&&t.error);return Object(i.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[Object(i.jsx)("div",{children:n}),r&&Object(i.jsx)("span",{children:t.error})]})},j=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,u));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},151:function(e,t,n){e.exports={wrapper:"News_wrapper__3YHyz",wrapper__item:"News_wrapper__item__1eIyu"}},152:function(e,t,n){e.exports={wrapper:"Music_wrapper___hSbD",wrapper__item:"Music_wrapper__item__267UF"}},153:function(e,t,n){e.exports={wrapper:"Setings_wrapper__uTzoH",wrapper__item:"Setings_wrapper__item__1F9W6"}},177:function(e,t,n){e.exports={loginH1:"Login_loginH1__21Npf",loginblock:"Login_loginblock__34CEy"}},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return S}));var r=n(10),a=n.n(r),c=n(20),s=n(92),i=n(9),o=n(29),u=function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.get("profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},l=function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.get("profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},d=function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("profile/status",{status:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},j=function(e){return Object(c.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,o.c.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},p=function(e){return Object(c.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("profile",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},b=n(89),f={posts:[{id:1,message:"Hi, how are you?",likeCounter:15},{id:2,message:"My first react post",likeCounter:25},{id:3,message:"Yo",likeCounter:5}],newPostText:"",profile:null,status:""},O={addPostActionCreator:function(e){return{type:"RWOS/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"RWOS/PROFILE/SET_USERS_PROFILE",profile:e}},setStatus:function(e){return{type:"RWOS/PROFILE/SET_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"RWOS/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}},deletePost:function(e){return{type:"RWOS/PROFILE/DELETE_POST",postId:e}}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:r=t.sent,n(O.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(O.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:t.sent.resultCode===o.a.Success&&n(O.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("updateStatus error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(r=t.sent).resultCode&&n(O.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,p(e);case 3:if((s=t.sent).resultCode!==o.a.Success){t.next=8;break}n(h(c)),t.next=11;break;case 8:return i=s.messages.length>0?s.messages[0]:"some error",n(Object(b.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/PROFILE/ADD-POST":return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:4,message:t.newPostText,likeCounter:0}])});case"RWOS/PROFILE/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"RWOS/PROFILE/SET_USERS_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"RWOS/PROFILE/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"RWOS/PROFILE/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},185:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.68dca8f1.svg"},217:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.4186f5f3.png"},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(92),a=n(9),c={dialogs:[{id:1,name:"Andrew"},{id:2,name:"Dmitry"},{id:3,name:"Petya"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"I am fine"}]},s={addMessage:function(e){return{type:"RWOS/DIALOG/ADD-MESSAGE",message:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return"RWOS/DIALOG/ADD-MESSAGE"===t.type?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.message}])}):e}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r,a,c=n(244),s=n.n(c).a.create({withCredentials:!0,headers:{"API-KEY":"6e65516f-e614-437d-93bf-9e85e40713b5"},baseURL:"https://social-network.samuraijs.com/api/1.0/"});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},290:function(e,t,n){},291:function(e,t,n){},474:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(35),s=n.n(c),i=(n(290),n(183)),o=n(184),u=n(239),l=n(235),d=(n(291),n(292),n(151)),j=n.n(d),p=n(2),b=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"News"}),Object(p.jsxs)("div",{className:j.a.wrapper,children:[Object(p.jsx)("div",{className:j.a.wrapper__item,children:"News #1"}),Object(p.jsx)("div",{className:j.a.wrapper__item,children:"News #2"})]})]})},f=n(152),O=n.n(f),h=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Music"}),Object(p.jsxs)("div",{className:O.a.wrapper,children:[Object(p.jsx)("div",{className:O.a.wrapper__item,children:"Albums #1"}),Object(p.jsx)("div",{className:O.a.wrapper__item,children:"Albums #2"})]})]})},m=n(153),x=n.n(m),g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Setings"}),Object(p.jsxs)("div",{className:x.a.wrapper,children:[Object(p.jsx)("div",{className:x.a.wrapper__item,children:"User setings block #1"}),Object(p.jsx)("div",{className:x.a.wrapper__item,children:"User setings block #2"})]})]})},S=n(9),v=n(74),_=n.n(v),w=n(27),E=n(181),R=n(88),P=n.n(R),y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.onPageChanged,c=void 0===a?function(e){return e}:a,s=e.currentPage,i=void 0===s?1:s,o=e.portionSize,u=void 0===o?10:o,l=Math.ceil(t/n),d=Math.ceil(l/u),j=Object(r.useState)(Math.ceil(i/u)),b=Object(E.a)(j,2),f=b[0],O=b[1],h=(f-1)*u+1,m=f*u,x=[],g=1;g<=l;g++)x.push(g);return Object(p.jsx)("div",{className:P.a.paginationBlockWrapper,children:Object(p.jsxs)("div",{className:P.a.paginationBlock,children:[f>1?Object(p.jsx)("button",{className:P.a.buttonPrev,onClick:function(){O(f-1)},children:"PREV"}):Object(p.jsx)("button",{disabled:!0,children:"PREV"}),x.filter((function(e){return e>=h&&e<=m})).map((function(e,t){return Object(p.jsx)("span",{onClick:function(t){c(e)},className:"".concat(P.a.pagination," ").concat(i===e?P.a.selectedPage:""),children:e},t)})),f<d?Object(p.jsx)("button",{className:P.a.buttonNext,onClick:function(){O(f+1)},children:"NEXT"}):Object(p.jsx)("button",{disabled:!0,children:"NEXT"})]})})},U=n(185),C=n(37),I=function(e){var t=e.followingInProgress,n=e.follow,r=e.unfollow,a=e.user;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(C.c,{to:"/profile/"+a.id,children:Object(p.jsx)("img",{className:_.a.userPhoto,src:null!=a.photos.small?a.photos.small:U.a,alt:"avatar"})})}),Object(p.jsx)("div",{className:_.a.userButton,children:a.followed?Object(p.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){r(a.id)},children:"Unfollow"}):Object(p.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){n(a.id)},children:"Follow"})})]}),Object(p.jsxs)("div",{className:_.a.wrapper__item,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:a.name}),Object(p.jsx)("div",{children:a.status})]}),Object(p.jsx)("div",{})]})]})},T=n(113),k=n(256),L=Object(k.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),N=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.filter},W=function(e){return e.usersPage.isFetching},D=function(e){return e.usersPage.followingInProgress},z=function(e){return{}},M=a.a.memo((function(e){var t=e.onFilterChanged,n=Object(w.d)(A);return Object(p.jsx)("div",{children:Object(p.jsx)(T.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:z,onSubmit:function(e,n){var r=n.setSubmitting,a={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(a),r(!1)},children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(T.b,{children:[Object(p.jsx)(T.a,{type:"text",name:"term"}),Object(p.jsxs)(T.a,{name:"friend",as:"select",children:[Object(p.jsx)("option",{value:"null",children:"All"}),Object(p.jsx)("option",{value:"true",children:"Only followed"}),Object(p.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),G=n(10),H=n.n(G),B=n(20),V=n(92),q=n(29),K={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return q.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return Object(B.a)(H.a.mark((function t(){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.c.post("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},unfollow:function(e){return Object(B.a)(H.a.mark((function t(){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.c.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},Y=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(S.a)(Object(S.a)({},e),r):e}))},Z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},J=function(e){return{type:"RWOS/USERS/FOLLOW",userId:e}},X=function(e){return{type:"RWOS/USERS/UNFOLLOW",userId:e}},Q=function(e){return{type:"RWOS/USERS/SET_USERS",users:e}},$=function(e){return{type:"RWOS/USERS/SET_CURRENT_PAGE",currentPage:e}},ee=function(e){return{type:"RWOS/USERS/SET_FILTER",payload:e}},te=function(e){return{type:"RWOS/USERS/SET_TOTAL_USERS_COUNT",totalUsersCount:e}},ne=function(e){return{type:"RWOS/USERS/TOGGLE_IS_FETCHING",isFetching:e}},re=function(e,t){return{type:"RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ae=function(e,t,n){return function(){var r=Object(B.a)(H.a.mark((function r(a,c){var s;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(ne(!0)),a($(e)),a(ee(n)),r.next=5,K.getUsers(e,t,n.term,n.friend);case 5:s=r.sent,a(ne(!1)),a(Q(s.items)),a(te(s.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},ce=function(){var e=Object(B.a)(H.a.mark((function e(t,n,r,a){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===q.a.Success&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/USERS/FOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:Y(e.users,t.userId,"id",{followed:!0})});case"RWOS/USERS/UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:Y(e.users,t.userId,"id",{followed:!1})});case"RWOS/USERS/SET_USERS":return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case"RWOS/USERS/SET_CURRENT_PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"RWOS/USERS/SET_FILTER":return Object(S.a)(Object(S.a)({},e),{},{filter:t.payload});case"RWOS/USERS/SET_TOTAL_USERS_COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"RWOS/USERS/TOGGLE_IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"RWOS/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(V.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ie=n(30),oe=function(){var e=Object(w.c)(),t=Object(ie.f)(),n=Object(ie.g)(),a=Object(w.d)((function(e){return e.usersPage.totalUsersCount})),c=Object(w.d)(N),s=Object(w.d)(F),i=Object(w.d)(L),o=Object(w.d)(A),u=Object(w.d)(D);Object(r.useEffect)((function(){t.push({pathname:"/users",search:"?term=".concat(o.term,"&friend=").concat(o.friend,"&page=").concat(s)})}),[o,s]),Object(r.useEffect)((function(){var t=n.search,r=new URLSearchParams(t),a=r.get("page"),i=r.get("term"),u=r.get("friend"),l=s,d=o;a&&(l=Number(a)),i&&(d=Object(S.a)(Object(S.a)({},d),{},{term:i})),u&&(d=Object(S.a)(Object(S.a)({},d),{},{friend:"null"===u?null:"true"===u})),e(ae(l,c,d))}),[]);var l=function(t){e(function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(n,e,K.follow.bind(K),J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},d=function(t){e(function(e){return function(){var t=Object(B.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ce(n,e,K.unfollow.bind(K),X);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(p.jsxs)("div",{children:[Object(p.jsx)(M,{onFilterChanged:function(t){e(ae(1,c,t))}}),Object(p.jsx)(y,{totalItemsCount:a,pageSize:c,onPageChanged:function(t){e(ae(t,c,o))},currentPage:s}),i.map((function(e){return Object(p.jsx)("div",{className:_.a.wrapper,children:Object(p.jsx)(I,{followingInProgress:u,follow:l,unfollow:d,user:e})},e.id)}))]})},ue=n(84),le=function(e){var t=Object(w.d)(W);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:e.pageTitle}),t?Object(p.jsx)(ue.a,{}):null,Object(p.jsx)(oe,{})]})},de=n(233),je=n(234),pe=n(102),be=n(127),fe=function(){return Object(B.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.c.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},Oe=function(e,t){var n=arguments;return Object(B.a)(H.a.mark((function r(){var a,c,s;return H.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.length>2&&void 0!==n[2]&&n[2],c=n.length>3&&void 0!==n[3]?n[3]:null,r.next=4,q.c.post("auth/login",{email:e,password:t,rememberMe:a,captcha:c});case 4:return s=r.sent,r.abrupt("return",s.data);case 6:case"end":return r.stop()}}),r)})))()},he=function(){return Object(B.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.c.delete("auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},me=function(){return Object(B.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.c.get("security/get-captcha-url");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},xe=n(89),ge={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Se=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:"RWOS/AUTH/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r,captchaUrl:a}}},ve=function(e){return{type:"RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS",captchaUrl:e}},_e=function(){return function(){var e=Object(B.a)(H.a.mark((function e(t){var n,r,a,c,s;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:(n=e.sent).resultCode===q.a.Success&&(r=n.data,a=r.id,c=r.email,s=r.login,t(Se(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},we=function(){return function(){var e=Object(B.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:n=e.sent,t(ve(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RWOS/AUTH/SET_USER_DATA":return Object(S.a)(Object(S.a)({},e),t.payload);case"RWOS/AUTH/SET_CAPTCHA_URL_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},Re=n(93),Pe=n.n(Re),ye=n(177),Ue=n.n(ye),Ce=Object(je.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{onSubmit:t,className:Pe.a.loginFormWrapper,children:[Object(p.jsx)("div",{children:Object(p.jsx)(de.a,{placeholder:"Email",name:"email",component:pe.a,validate:[be.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(de.a,{placeholder:"Password",name:"password",type:"password",component:pe.a,validate:[be.b]})}),Object(p.jsx)("div",{children:Object(p.jsx)(de.a,{component:pe.a,name:"rememberMe",type:"checkbox"})}),n&&Object(p.jsx)("div",{className:Pe.a.formSummaryError,children:n}),r&&Object(p.jsxs)("div",{children:[Object(p.jsx)("img",{src:r,alt:"captcha"}),Object(p.jsx)(de.a,{placeholder:"captcha",name:"captcha",component:pe.a,validate:[be.b]})]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Login"})})]})})),Ie=function(){var e=Object(w.c)(),t=Object(w.d)((function(e){return e.auth})),n=t.isAuth,r=t.captchaUrl;return n?Object(p.jsx)(ie.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:Ue.a.loginH1,children:"Login"}),Object(p.jsx)(Ce,{onSubmit:function(t){var n,r,a,c;e((n=t.email,r=t.password,a=t.rememberMe,c=t.captcha,function(){var e=Object(B.a)(H.a.mark((function e(t){var s,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe(n,r,a,c);case 2:(s=e.sent).resultCode===q.a.Success?t(_e()):(s.resultCode===q.b.CaptchaIsRequired&&t(we()),i=s.messages.length>0?s.messages[0]:"some error",t(Object(xe.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:r}),Object(p.jsxs)("div",{className:Ue.a.loginblock,children:[Object(p.jsx)("h2",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:"}),Object(p.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(p.jsx)("p",{children:"Password: free"})]})]})},Te=n(477),ke=n(482),Le=n(483),Ne=n(480),Fe=n(481),Ae=n(478),We=n(479),De=n(217),ze=function(){var e=Object(w.c)(),t=Object(w.d)((function(e){return e.auth})),n=(t.login,t.isAuth),r=Object(w.d)((function(e){return e.profilePage})).profile,a=Te.a.Header;return Object(p.jsxs)(a,{className:"header",children:[Object(p.jsx)("div",{className:"logo"}),Object(p.jsxs)(ke.a,{children:[Object(p.jsx)(Le.a,{span:18,children:Object(p.jsx)(Ne.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/users",children:"Developers"})},"1")})}),n&&r?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Le.a,{span:2,children:Object(p.jsx)(Fe.a,{icon:Object(p.jsx)(Ae.a,{src:null!==r.photos.small?r.photos.small:De.a,style:{width:32}})})}),Object(p.jsx)(Le.a,{span:4,children:Object(p.jsx)(We.a,{onClick:function(){e(function(){var e=Object(B.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:e.sent.resultCode===q.a.Success&&t(Se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(p.jsx)(Le.a,{span:6,children:Object(p.jsx)(We.a,{children:Object(p.jsx)(C.b,{to:"/Login/",children:"Login"})})})]})]})},Me={initialized:!1},Ge=function(){return{type:"RWOS/APP/INITIALIZED_SUCCESS"}},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;return"RWOS/APP/INITIALIZED_SUCCESS"===t.type?Object(S.a)(Object(S.a)({},e),{},{initialized:!0}):e},Be=n(31);var Ve,qe=n(484),Ke=n(485),Ye=n(486),Ze=n(249),Je=Ne.a.SubMenu,Xe=Te.a.Content,Qe=Te.a.Sider,$e=a.a.lazy((function(){return n.e(4).then(n.bind(null,493))})),et=a.a.lazy((function(){return n.e(3).then(n.bind(null,492))})),tt=a.a.lazy((function(){return n.e(5).then(n.bind(null,494))})),nt=(Ve=$e,function(e){return Object(p.jsx)(a.a.Suspense,{fallback:Object(p.jsx)(ue.a,{}),children:Object(p.jsx)(Ve,Object(S.a)({},e))})}),rt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){console.log("Some error occured")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(p.jsxs)(Te.a,{children:[Object(p.jsx)(ze,{}),Object(p.jsxs)(Te.a,{children:[Object(p.jsx)(Qe,{width:200,className:"site-layout-background",children:Object(p.jsxs)(Ne.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(p.jsxs)(Je,{icon:Object(p.jsx)(qe.a,{}),title:"My profile",children:[Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/profile",children:"Profile"})},"1"),Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/dialogs",children:"Messages"})},"2"),Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/chat",children:"Chat"})},"3")]},"sub1"),Object(p.jsx)(Je,{icon:Object(p.jsx)(Ke.a,{}),title:"Developers",children:Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/users",children:"Users"})},"5")},"sub2"),Object(p.jsxs)(Je,{icon:Object(p.jsx)(Ye.a,{}),title:"Media",children:[Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/news",children:"News"})},"9"),Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/music",children:"Music"})},"10"),Object(p.jsx)(Ne.a.Item,{children:Object(p.jsx)(C.b,{to:"/setings",children:"Setings"})},"11")]},"sub3")]})}),Object(p.jsxs)(Te.a,{style:{padding:"0 24px 24px"},children:[Object(p.jsxs)(Xe,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[Object(p.jsxs)(r.Suspense,{fallback:Object(p.jsx)(ue.a,{}),children:[Object(p.jsx)(ie.b,{path:"/profile/:userId?",children:Object(p.jsx)(et,{})}),Object(p.jsx)(ie.b,{path:"/chat",children:Object(p.jsx)(tt,{})})]}),Object(p.jsx)(ie.b,{path:"/dialogs",children:Object(p.jsx)(nt,{})}),Object(p.jsx)(ie.b,{path:"/login",children:Object(p.jsx)(Ie,{})}),Object(p.jsx)(ie.b,{path:"/users",children:Object(p.jsx)(le,{pageTitle:"\u0421\u0430\u043c\u0443\u0440\u0430\u0438"})}),Object(p.jsx)(ie.b,{path:"/news",children:Object(p.jsx)(b,{})}),Object(p.jsx)(ie.b,{path:"/music",children:Object(p.jsx)(h,{})}),Object(p.jsx)(ie.b,{path:"/setings",children:Object(p.jsx)(g,{})}),Object(p.jsx)(ie.b,{exact:!0,path:"/",children:this.props.initialized?Object(p.jsx)(ie.a,{to:"/profile"}):Object(p.jsx)(Ie,{})})]}),Object(p.jsx)(Ze.Footer,{style:{textAlign:"center"},children:"developers social network \xa9 2021 Created by chernykh.ru"})]})]})]}):Object(p.jsx)(ue.a,{})}}]),n}(a.a.Component),at=Object(Be.compose)(ie.h,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(B.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(_e()),Promise.all([n]).then((function(){return t(Ge())}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(rt),ct=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,491)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},st=n(252),it=n(182),ot=n(232),ut={},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut;return e},dt=n(253),jt=n(238),pt=Object(Be.combineReducers)({profilePage:it.b,dialogsPage:ot.b,sidebar:lt,usersPage:se,auth:Ee,form:jt.a,app:He}),bt=Object(Be.createStore)(pt,Object(st.composeWithDevTools)(Object(Be.applyMiddleware)(dt.a)));s.a.render(Object(p.jsx)(C.a,{children:Object(p.jsx)(w.a,{store:bt,children:Object(p.jsx)(at,{})})}),document.getElementById("root")),ct()},74:function(e,t,n){e.exports={wrapper:"Users_wrapper__3GS1A",wrapper__item:"Users_wrapper__item__1cUQX",userPhoto:"Users_userPhoto__22rSw",userButton:"Users_userButton__1Rd_M",pagination:"Users_pagination__9wTpd",selectedPage:"Users_selectedPage__rTwP8",preloader:"Users_preloader__13i_D"}},84:function(e,t,n){"use strict";n(0);var r=n(74),a=n.n(r),c=n.p+"static/media/preloader.0703713f.svg",s=n(2);t.a=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("img",{className:a.a.preloader,src:c,alt:"is loading..."})})}},88:function(e,t,n){e.exports={paginationBlockWrapper:"Paginator_paginationBlockWrapper__35ZIW",paginationBlock:"Paginator_paginationBlock__3Lv8U",pagination:"Paginator_pagination__1RdNg",selectedPage:"Paginator_selectedPage__2m9br",buttonPrev:"Paginator_buttonPrev__1vSfq",buttonNext:"Paginator_buttonNext__22tii"}},93:function(e,t,n){e.exports={loginFormWrapper:"FormsControls_loginFormWrapper__QJkSz",formControl:"FormsControls_formControl__ZczVY",error:"FormsControls_error__-uRCD",formSummaryError:"FormsControls_formSummaryError__2HC3s"}}},[[474,1,2]]]);
//# sourceMappingURL=main.539edb5d.chunk.js.map