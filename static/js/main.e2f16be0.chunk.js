(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[1],{13:function(e,t,n){e.exports={nav:"Navbar_nav__1sCY-",item:"Navbar_item__1MKSx",activeLink:"Navbar_activeLink__3vO2y"}},147:function(e,t,n){},148:function(e,t,n){},22:function(e,t,n){e.exports={wrapper:"Users_wrapper__3GS1A",wrapper__item:"Users_wrapper__item__1cUQX",userPhoto:"Users_userPhoto__22rSw",userButton:"Users_userButton__1Rd_M",pagination:"Users_pagination__9wTpd",selectedPage:"Users_selectedPage__rTwP8",preloader:"Users_preloader__13i_D"}},234:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(49),c=n.n(s),i=(n(147),n(28)),u=n(29),o=n(31),l=n(30),p=(n(148),n(10)),f=n(13),d=n.n(f),j=n(0),b=function(){return Object(j.jsxs)("nav",{className:d.a.nav,children:[Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/profile",activeClassName:d.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/dialogs",activeClassName:d.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/news",activeClassName:d.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/music",activeClassName:d.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/users",activeClassName:d.a.activeLink,children:"Users"})}),Object(j.jsx)("div",{className:d.a.item,children:Object(j.jsx)(p.b,{to:"/setings",activeClassName:d.a.activeLink,children:"Settings"})})]})},h=n(51),O=n.n(h),g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"News"}),Object(j.jsxs)("div",{className:O.a.wrapper,children:[Object(j.jsx)("div",{className:O.a.wrapper__item,children:"News #1"}),Object(j.jsx)("div",{className:O.a.wrapper__item,children:"News #2"})]})]})},v=n(52),m=n.n(v),x=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Music"}),Object(j.jsxs)("div",{className:m.a.wrapper,children:[Object(j.jsx)("div",{className:m.a.wrapper__item,children:"Albums #1"}),Object(j.jsx)("div",{className:m.a.wrapper__item,children:"Albums #2"})]})]})},w=n(53),_=n.n(w),P=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Setings"}),Object(j.jsxs)("div",{className:_.a.wrapper,children:[Object(j.jsx)("div",{className:_.a.wrapper__item,children:"User setings block #1"}),Object(j.jsx)("div",{className:_.a.wrapper__item,children:"User setings block #2"})]})]})},S=n(19),A=n(3),U=n.n(A),I=n(6),C=n(33),k=n(4),y=n(9),N=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(k.a)(Object(k.a)({},e),r):e}))},E="WAY-OF-SAMURAI/USERS/FOLLOW",F="WAY-OF-SAMURAI/USERS/UNFOLLOW",R="WAY-OF-SAMURAI/USERS/SET_USERS",T="WAY-OF-SAMURAI/USERS/SET_CURRENT_PAGE",L="WAY-OF-SAMURAI/USERS/SET_TOTAL_USERS_COUNT",M="WAY-OF-SAMURAI/USERS/TOGGLE_IS_FETCHING",W="WAY-OF-SAMURAI/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:E,userId:e}},D=function(e){return{type:F,userId:e}},H=function(e){return{type:T,currentPage:e}},G=function(e){return{type:M,isFetching:e}},B=function(e,t){return{type:W,isFetching:e,userId:t}},V=function(){var e=Object(I.a)(U.a.mark((function e(t,n,r,a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(B(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(B(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(k.a)(Object(k.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!0})});case F:return Object(k.a)(Object(k.a)({},e),{},{users:N(e.users,t.userId,"id",{followed:!1})});case R:return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case T:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});case L:return Object(k.a)(Object(k.a)({},e),{},{totalUsersCount:t.count});case M:return Object(k.a)(Object(k.a)({},e),{},{isFetching:t.isFetching});case W:return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},X=n(64),J=n(22),K=n.n(J),Z=n(71),Q=n(25),$=n.n(Q),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.onPageChanged,s=e.currentPage,c=e.portionSize,i=void 0===c?10:c,u=Math.ceil(t/n),o=Math.ceil(u/i),l=Object(r.useState)(Math.ceil(s/i)),p=Object(Z.a)(l,2),f=p[0],d=p[1],b=(f-1)*i+1,h=f*i,O=[],g=1;g<=u;g++)O.push(g);return Object(j.jsx)("div",{className:$.a.paginationBlockWrapper,children:Object(j.jsxs)("div",{className:$.a.paginationBlock,children:[f>1?Object(j.jsx)("button",{className:$.a.buttonPrev,onClick:function(){d(f-1)},children:"PREV"}):Object(j.jsx)("button",{disabled:!0,children:"PREV"}),O.filter((function(e){return e>=b&&e<=h})).map((function(e,t){return Object(j.jsx)("span",{onClick:function(t){a(e)},className:"".concat($.a.pagination," ").concat(s===e?$.a.selectedPage:""),children:e},t)})),f<o?Object(j.jsx)("button",{className:$.a.buttonNext,onClick:function(){d(f+1)},children:"NEXT"}):Object(j.jsx)("button",{disabled:!0,children:"NEXT"})]})})},te=n(81),ne=function(e){var t=e.followingInProgress,n=e.follow,r=e.unfollow,a=e.user;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(p.b,{to:"/profile/"+a.id,children:Object(j.jsx)("img",{className:K.a.userPhoto,src:null!=a.photos.small?a.photos.small:te.a,alt:"avatar"})})}),Object(j.jsx)("div",{className:K.a.userButton,children:a.followed?Object(j.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){r(a.id)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){n(a.id)},children:"Follow"})})]}),Object(j.jsxs)("div",{className:K.a.wrapper__item,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:a.name}),Object(j.jsx)("div",{children:a.status})]}),Object(j.jsx)("div",{})]})]})},re=["totalUsersCount","pageSize","onPageChanged","currentPage","users","followingInProgress","follow","unfollow"],ae=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,a=e.currentPage,s=e.users,c=e.followingInProgress,i=e.follow,u=e.unfollow;Object(X.a)(e,re);return Object(j.jsxs)("div",{children:[Object(j.jsx)(ee,{totalItemsCount:t,pageSize:n,onPageChanged:r,currentPage:a}),s.map((function(e){return Object(j.jsx)("div",{className:K.a.wrapper,children:Object(j.jsx)(ne,{followingInProgress:c,follow:i,unfollow:u,user:e})},e.id)}))]})},se=n(39),ce=n(24),ie=n(95),ue=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),oe=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},fe=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},je=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(se.a,{}):null,Object(j.jsx)(ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),be=Object(ce.compose)(Object(S.b)((function(e){return{users:ue(e),pageSize:oe(e),totalUsersCount:le(e),currentPage:pe(e),isFetching:fe(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(I.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,y.d.follow.bind(y.d),Y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(I.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,y.d.unfollow.bind(y.d),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:B,requestUsers:function(e,t){return function(){var n=Object(I.a)(U.a.mark((function n(r){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(e)),r(G(!0)),n.next=4,y.d.getUsers(e,t);case 4:a=n.sent,r(G(!1)),r((c=a.items,{type:R,users:c})),r((s=a.totalCount,{type:L,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(je),he=n(61),Oe=n.n(he),ge=function(e){return Object(j.jsxs)("header",{className:Oe.a.header,children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{className:Oe.a.login,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login," ",Object(j.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(j.jsx)(p.b,{to:"/Login/",children:"Login"})})]})},ve=n(32),me=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(ge,Object(k.a)({},this.props))}}]),n}(a.a.Component),xe=Object(S.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:ve.d})(me),we=n(8),_e="INITIALIZED_SUCCESS",Pe={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type===_e?Object(k.a)(Object(k.a)({},e),{},{initialized:!0}):e},Ae=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,306))})),Ue=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,305))})),Ie=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,303))})),Ce=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(xe,{}),Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)(se.a,{}),children:[Object(j.jsx)(we.b,{path:"/profile/:userId?",children:Object(j.jsx)(Ue,{})}),Object(j.jsx)(we.b,{path:"/dialogs",children:Object(j.jsx)(Ae,{})}),Object(j.jsx)(we.b,{path:"/login",children:Object(j.jsx)(Ie,{})})]}),Object(j.jsx)(we.b,{path:"/users",children:Object(j.jsx)(be,{})}),Object(j.jsx)(we.b,{path:"/news",children:Object(j.jsx)(g,{})}),Object(j.jsx)(we.b,{path:"/music",children:Object(j.jsx)(x,{})}),Object(j.jsx)(we.b,{path:"/setings",children:Object(j.jsx)(P,{})})]})]}):Object(j.jsx)(se.a,{})}}]),n}(a.a.Component),ke=Object(we.f)(Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(ve.b)());Promise.all([t]).then((function(){return e({type:_e})}))}}})(Ce)),ye=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},Ne=n(92),Ee=n(66),Fe=n(82),Re={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;return e},Le=n(94),Me=n(88),We=Object(ce.combineReducers)({profilePage:Ee.b,dialogsPage:Fe.b,sidebar:Te,usersPage:q,auth:ve.a,form:Me.a,app:Se}),ze=Object(ce.createStore)(We,Object(Ne.composeWithDevTools)(Object(ce.applyMiddleware)(Le.a)));c.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(S.a,{store:ze,children:Object(j.jsx)(ke,{})})}),document.getElementById("root")),ye()},25:function(e,t,n){e.exports={paginationBlockWrapper:"Paginator_paginationBlockWrapper__35ZIW",paginationBlock:"Paginator_paginationBlock__3Lv8U",pagination:"Paginator_pagination__1RdNg",selectedPage:"Paginator_selectedPage__2m9br",buttonPrev:"Paginator_buttonPrev__1vSfq",buttonNext:"Paginator_buttonNext__22tii"}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n(3),a=n.n(r),s=n(6),c=n(4),i=n(9),u=n(35),o="WAY-OF-SAMURAI/AUTH/SET_USER_DATA",l="WAY-OF-SAMURAI/AUTH/SET_USER_LOGIN_DATA",p="WAY-OF-SAMURAI/AUTH/SET_CAPTCHA_URL_SUCCESS",f={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},d=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:o,payload:{userId:e,email:t,login:n,isAuth:r,captchaUrl:a}}},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,c=r.email,u=r.login,t(d(s,c,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var c=Object(s.a)(a.a.mark((function s(c){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(o=a.sent).resultCode?c(j()):(10===o.resultCode&&c(O()),l=o.messages.length>0?o.messages[0]:"some error",c(Object(u.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),s)})));return function(e){return c.apply(this,arguments)}}()},h=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,t((r=n.url,{type:p,captchaUrl:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),t.payload);case l:return{isAuth:!0};case p:return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},39:function(e,t,n){"use strict";n(1);var r=n(22),a=n.n(r),s=n.p+"static/media/preloader.0703713f.svg",c=n(0);t.a=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("img",{className:a.a.preloader,src:s,alt:"is loading..."})})}},51:function(e,t,n){e.exports={wrapper:"News_wrapper__3YHyz",wrapper__item:"News_wrapper__item__1eIyu"}},52:function(e,t,n){e.exports={wrapper:"Music_wrapper___hSbD",wrapper__item:"Music_wrapper__item__267UF"}},53:function(e,t,n){e.exports={wrapper:"Setings_wrapper__uTzoH",wrapper__item:"Setings_wrapper__item__1F9W6"}},61:function(e,t,n){e.exports={header:"Header_header__2IFrk",login:"Header_login__6U0if"}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(3),a=n.n(r),s=n(6),c=n(33),i=n(4),u=n(9),o=n(35),l="WAY-OF-SAMURAI/PROFILE/ADD-POST",p="WAY-OF-SAMURAI/PROFILE/SET_USERS_PROFILE",f="WAY-OF-SAMURAI/PROFILE/SET_STATUS",d="WAY-OF-SAMURAI/PROFILE/SAVE_PHOTO_SUCCESS",j="WAY-OF-SAMURAI/PROFILE/DELETE_POST",b={posts:[{id:1,message:"Hi, how are you?",likeCounter:15},{id:2,message:"My first react post",likeCounter:25},{id:3,message:"Yo",likeCounter:5}],newPostText:"",profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:f,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n({type:p,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:d,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(g(s)),t.next=11;break;case 8:return i=c.messages.length>0?c.messages[0]:"some error",n(Object(o.a)("edit-profile",{_error:i})),t.abrupt("return",Promise.reject(i));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:4,message:t.newPostText}])});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},81:function(e,t,n){"use strict";t.a=n.p+"static/media/avataaars.68dca8f1.svg"},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(33),a=n(4),s="WAY-OF-SAMURAI/DIALOG/ADD-MESSAGE",c={dialogs:[{id:1,name:"Andrew"},{id:2,name:"Dmitry"},{id:3,name:"Petya"},{id:4,name:"Sasha"},{id:5,name:"Valera"},{id:6,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it?"},{id:3,message:"I am fine"}]},i=function(e){return{type:s,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===s?Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.message}])}):e}},9:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p}));var r=n(3),a=n.n(r),s=n(6),c=n(91),i=n.n(c).a.create({withCredentials:!0,headers:{"API-KEY":"6e65516f-e614-437d-93bf-9e85e40713b5"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),u={getUsers:function(e,t){return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.delete("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},follow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.post("follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return Object(s.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.warn("Obsolete method. Please use profileAPI object"),t.abrupt("return",o.getProfile(e));case 2:case"end":return t.stop()}}),t)})))()}},o={getProfile:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile/status",{status:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},savePhoto:function(e){return Object(s.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",e),t.next=4,i.put("profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}});case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})))()},saveProfile:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.put("profile",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},l={me:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},login:function(e,t){var n=arguments;return Object(s.a)(a.a.mark((function r(){var s,c,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=n.length>2&&void 0!==n[2]&&n[2],c=n.length>3&&void 0!==n[3]?n[3]:null,r.next=4,i.post("auth/login",{email:e,password:t,rememberMe:s,captcha:c});case 4:return u=r.sent,r.abrupt("return",u.data);case 6:case"end":return r.stop()}}),r)})))()},logout:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.delete("auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}},p={getCaptchaUrl:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("security/get-captcha-url");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}}}},[[234,2,3]]]);
//# sourceMappingURL=main.e2f16be0.chunk.js.map