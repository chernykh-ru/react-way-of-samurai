(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[1],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n.n(r),s=n(8),c=n(91),i=n.n(c).a.create({withCredentials:!0,headers:{"API-KEY":"6e65516f-e614-437d-93bf-9e85e40713b5"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={getUsers:function(e,t){return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},follow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.warn("Obsolete method. Please use profileAPI object"),t.abrupt("return",u.getProfile(e));case 2:case"end":return t.stop()}}),t)})))()}},u={getProfile:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile/status",{status:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},l={me:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},login:function(e,t){var n=arguments;return Object(s.a)(a.a.mark((function r(){var s,c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=n.length>2&&void 0!==n[2]&&n[2],r.next=3,i.post("auth/login",{email:e,password:t,rememberMe:s});case 3:return c=r.sent,r.abrupt("return",c.data);case 5:case"end":return r.stop()}}),r)})))()},logout:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.delete("auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__1sCY-",item:"Navbar_item__1MKSx",activeLink:"Navbar_activeLink__3vO2y"}},147:function(e,t,n){},148:function(e,t,n){},22:function(e,t,n){e.exports={wrapper:"Users_wrapper__3GS1A",wrapper__item:"Users_wrapper__item__1cUQX",userPhoto:"Users_userPhoto__22rSw",userButton:"Users_userButton__1Rd_M",pagination:"Users_pagination__9wTpd",selectedPage:"Users_selectedPage__rTwP8",preloader:"Users_preloader__13i_D"}},234:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(48),c=n.n(s),i=(n(147),n(28)),o=n(29),u=n(31),l=n(30),p=(n(148),n(9)),d=n(13),f=n.n(d),j=n(0),b=function(){return Object(j.jsxs)("nav",{className:f.a.nav,children:[Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/profile",activeClassName:f.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/news",activeClassName:f.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/music",activeClassName:f.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/users",activeClassName:f.a.activeLink,children:"Users"})}),Object(j.jsx)("div",{className:f.a.item,children:Object(j.jsx)(p.b,{to:"/setings",activeClassName:f.a.activeLink,children:"Settings"})})]})},O=n(50),h=n.n(O),g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"News"}),Object(j.jsxs)("div",{className:h.a.wrapper,children:[Object(j.jsx)("div",{className:h.a.wrapper__item,children:"News #1"}),Object(j.jsx)("div",{className:h.a.wrapper__item,children:"News #2"})]})]})},m=n(51),v=n.n(m),x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Music"}),Object(j.jsxs)("div",{className:v.a.wrapper,children:[Object(j.jsx)("div",{className:v.a.wrapper__item,children:"Albums #1"}),Object(j.jsx)("div",{className:v.a.wrapper__item,children:"Albums #2"})]})]})},w=n(52),_=n.n(w),P=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Setings"}),Object(j.jsxs)("div",{className:_.a.wrapper,children:[Object(j.jsx)("div",{className:_.a.wrapper__item,children:"User setings block #1"}),Object(j.jsx)("div",{className:_.a.wrapper__item,children:"User setings block #2"})]})]})},S=n(19),A=n(3),I=n.n(A),U=n(8),N=n(33),k=n(4),y=n(11),C=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(k.a)(Object(k.a)({},e),r):e}))},E="WAY-OF-SAMURAI/USERS/FOLLOW",F="WAY-OF-SAMURAI/USERS/UNFOLLOW",R="WAY-OF-SAMURAI/USERS/SET_USERS",T="WAY-OF-SAMURAI/USERS/SET_CURRENT_PAGE",L="WAY-OF-SAMURAI/USERS/SET_TOTAL_USERS_COUNT",M="WAY-OF-SAMURAI/USERS/TOGGLE_IS_FETCHING",z="WAY-OF-SAMURAI/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",W={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:E,userId:e}},D=function(e){return{type:F,userId:e}},G=function(e){return{type:T,currentPage:e}},B=function(e){return{type:M,isFetching:e}},H=function(e,t){return{type:z,isFetching:e,userId:t}},q=function(){var e=Object(U.a)(I.a.mark((function e(t,n,r,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(H(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(k.a)(Object(k.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case F:return Object(k.a)(Object(k.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case R:return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case T:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case L:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.count});case M:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case z:return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},X=n(64),J=n(22),K=n.n(J),Z=n(87),Q=n(25),$=n.n(Q),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.onPageChanged,s=e.currentPage,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=Math.ceil(o/i),l=Object(r.useState)(Math.ceil(s/i)),p=Object(Z.a)(l,2),d=p[0],f=p[1],b=(d-1)*i+1,O=d*i,h=[],g=1;g<=o;g++)h.push(g);return Object(j.jsx)("div",{className:$.a.paginationBlockWrapper,children:Object(j.jsxs)("div",{className:$.a.paginationBlock,children:[d>1?Object(j.jsx)("button",{className:$.a.buttonPrev,onClick:function(){f(d-1)},children:"PREV"}):Object(j.jsx)("button",{disabled:!0,children:"PREV"}),h.filter((function(e){return e>=b&&e<=O})).map((function(e,t){return Object(j.jsx)("span",{onClick:function(t){a(e)},className:"".concat($.a.pagination," ").concat(s===e?$.a.selectedPage:""),children:e},t)})),d<u?Object(j.jsx)("button",{className:$.a.buttonNext,onClick:function(){f(d+1)},children:"NEXT"}):Object(j.jsx)("button",{disabled:!0,children:"NEXT"})]})})},te=n(80),ne=function(e){var t=e.followingInProgress,n=e.follow,r=e.unfollow,a=e.user;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(p.b,{to:"/profile/"+a.id,children:Object(j.jsx)("img",{className:K.a.userPhoto,src:null!=a.photos.small?a.photos.small:te.a,alt:"avatar"})})}),Object(j.jsx)("div",{className:K.a.userButton,children:a.followed?Object(j.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){r(a.id)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){n(a.id)},children:"Follow"})})]}),Object(j.jsxs)("div",{className:K.a.wrapper__item,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:a.name}),Object(j.jsx)("div",{children:a.status})]}),Object(j.jsx)("div",{})]})]})},re=["totalUsersCount","pageSize","onPageChanged","currentPage","users","followingInProgress","follow","unfollow"],ae=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,a=e.currentPage,s=e.users,c=e.followingInProgress,i=e.follow,o=e.unfollow;Object(X.a)(e,re);return Object(j.jsxs)("div",{children:[Object(j.jsx)(ee,{totalItemsCount:t,pageSize:n,onPageChanged:r,currentPage:a}),s.map((function(e){return Object(j.jsx)("div",{className:K.a.wrapper,children:Object(j.jsx)(ne,{followingInProgress:c,follow:i,unfollow:o,user:e})},e.id)}))]})},se=n(38),ce=n(24),ie=n(95),oe=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(se.a,{}):null,Object(j.jsx)(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),be=Object(ce.compose)(Object(S.b)((function(e){return{users:oe(e),pageSize:ue(e),totalUsersCount:le(e),currentPage:pe(e),isFetching:de(e),followingInProgress:fe(e)}}),{follow:function(e){return function(){var t=Object(U.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,y.c.follow.bind(y.c),Y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q(n,e,y.c.unfollow.bind(y.c),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:G,toggleFollowingProgress:H,requestUsers:function(e,t){return function(){var n=Object(U.a)(I.a.mark((function n(r){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(G(e)),r(B(!0)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(B(!1)),r((c=a.items,{type:R,users:c})),r((s=a.totalCount,{type:L,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(je),Oe=n(61),he=n.n(Oe),ge=function(e){return Object(j.jsxs)("header",{className:he.a.header,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:he.a.login,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login," ",Object(j.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(j.jsx)(p.b,{to:"/Login/",children:"Login"})})]})},me=n(32),ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)(ge,Object(k.a)({},this.props))}}]),n}(a.a.Component),xe=Object(S.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:me.d})(ve),we=n(7),_e="INITIALIZED_SUCCESS",Pe={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type===_e?Object(k.a)(Object(k.a)({},e),{},{initialized:!0}):e},Ae=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,306))})),Ie=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,305))})),Ue=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,303))})),Ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(xe,{}),Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)(se.a,{}),children:[Object(j.jsx)(we.b,{path:"/profile/:userId?",children:Object(j.jsx)(Ie,{})}),Object(j.jsx)(we.b,{path:"/dialogs",children:Object(j.jsx)(Ae,{})}),Object(j.jsx)(we.b,{path:"/login",children:Object(j.jsx)(Ue,{})})]}),Object(j.jsx)(we.b,{path:"/users",children:Object(j.jsx)(be,{})}),Object(j.jsx)(we.b,{path:"/news",children:Object(j.jsx)(g,{})}),Object(j.jsx)(we.b,{path:"/music",children:Object(j.jsx)(x,{})}),Object(j.jsx)(we.b,{path:"/setings",children:Object(j.jsx)(P,{})})]})]}):Object(j.jsx)(se.a,{})}}]),n}(a.a.Component),ke=Object(we.f)(Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(me.b)());Promise.all([t]).then((function(){return e({type:_e})}))}}})(Ne)),ye=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},Ce=n(92),Ee=n(66),Fe=n(81),Re={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return e},Le=n(94),Me=n(88),ze=Object(ce.combineReducers)({profilePage:Ee.b,dialogsPage:Fe.b,sidebar:Te,usersPage:V,auth:me.a,form:Me.a,app:Se}),We=Object(ce.createStore)(ze,Object(Ce.composeWithDevTools)(Object(ce.applyMiddleware)(Le.a)));c.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(S.a,{store:We,children:Object(j.jsx)(ke,{})})}),document.getElementById("root")),ye()},25:function(e,t,n){e.exports={paginationBlockWrapper:"Paginator_paginationBlockWrapper__35ZIW",paginationBlock:"Paginator_paginationBlock__3Lv8U",pagination:"Paginator_pagination__1RdNg",selectedPage:"Paginator_selectedPage__2m9br",buttonPrev:"Paginator_buttonPrev__1vSfq",buttonNext:"Paginator_buttonNext__22tii"}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b}));var r=n(3),a=n.n(r),s=n(8),c=n(4),i=n(11),o=n(53),u="WAY-OF-SAMURAI/AUTH/SET_USER_DATA",l="WAY-OF-SAMURAI/AUTH/SET_USER_LOGIN_DATA",p={userId:null,email:null,login:null,isAuth:!1},d=function(e,t,n,r){return{type:u,payload:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,c=r.email,o=r.login,t(d(s,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(c=r.sent).resultCode?s(f()):(u=c.messages.length>0?c.messages[0]:"some error",s(Object(o.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)({},e),t.payload);case l:return{isAuth:!0};default:return e}}},38:function(e,t,n){"use strict";n(1);var r=n(22),a=n.n(r),s=n.p+"static/media/preloader.0703713f.svg",c=n(0);t.a=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("img",{className:a.a.preloader,src:s,alt:"is loading..."})})}},50:function(e,t,n){e.exports={wrapper:"News_wrapper__3YHyz",wrapper__item:"News_wrapper__item__1eIyu"}},51:function(e,t,n){e.exports={wrapper:"Music_wrapper___hSbD",wrapper__item:"Music_wrapper__item__267UF"}},52:function(e,t,n){e.exports={wrapper:"Setings_wrapper__uTzoH",wrapper__item:"Setings_wrapper__item__1F9W6"}},61:function(e,t,n){e.exports={header:"Header_header__2IFrk",login:"Header_login__6U0if"}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(3),a=n.n(r),s=n(8),c=n(33),i=n(4),o=n(11),u="WAY-OF-SAMURAI/PROFILE/ADD-POST",l="WAY-OF-SAMURAI/PROFILE/SET_USERS_PROFILE",p="WAY-OF-SAMURAI/PROFILE/SET_STATUS",d="WAY-OF-SAMURAI/PROFILE/DELETE_POST",f={posts:[{id:1,message:"Hi, how are you?",likeCounter:15},{id:2,message:"My first react post",likeCounter:25},{id:3,message:"Yo",likeCounter:5}],newPostText:"",profile:null,status:""},j=function(e){return{type:u,newPostText:e}},b=function(e){return{type:p,status:e}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:4,message:t.newPostText}])});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case p:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},80:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.68dca8f1.svg"},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(33),a=n(4),s="WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE",c={dialogs:[{id:1,name:"Andrew"},{id:2,name:"Dmitry"},{id:3,name:"Petya"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"I am fine"}]},i=function(e){return{type:s,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.message}])}):e}}},[[234,2,3]]]);
//# sourceMappingURL=main.5a2fb5f7.chunk.js.map