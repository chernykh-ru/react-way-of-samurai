(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[6],{235:function(e,r,t){e.exports={loginFormWrapper:"FormsControls_loginFormWrapper__QJkSz",formControl:"FormsControls_formControl__ZczVY",error:"FormsControls_error__-uRCD",formSummaryError:"FormsControls_formSummaryError__2HC3s"}},236:function(e,r,t){"use strict";t.d(r,"b",(function(){return b})),t.d(r,"a",(function(){return m}));var c=t(4),n=t(64),a=t(235),o=t.n(a),i=t(0),s=["input","meta","child"],l=["input","meta","child"],j=["input","meta","child"],u=function(e){e.input;var r=e.meta,t=(e.child,Object(n.a)(e,s)),c=r.touched&&r.error;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(i.jsx)("div",{children:t.children}),c&&Object(i.jsx)("span",{children:r.error})]})},b=function(e){var r=e.input,t=(e.meta,e.child,Object(n.a)(e,l));return Object(i.jsx)(u,Object(c.a)(Object(c.a)({},e),{},{children:Object(i.jsx)("textarea",Object(c.a)(Object(c.a)({},r),t))}))},m=function(e){var r=e.input,t=(e.meta,e.child,Object(n.a)(e,j));return Object(i.jsx)(u,Object(c.a)(Object(c.a)({},e),{},{children:Object(i.jsx)("input",Object(c.a)(Object(c.a)({},r),t))}))}},237:function(e,r,t){"use strict";t.d(r,"b",(function(){return c})),t.d(r,"a",(function(){return n}));var c=function(e){if(!e)return"Field is required"},n=function(e){return function(r){if(r&&r.length>e)return"Max length is ".concat(e," symbols")}}},302:function(e,r,t){e.exports={loginH1:"Login_loginH1__21Npf",loginblock:"Login_loginblock__34CEy"}},303:function(e,r,t){"use strict";t.r(r);var c=t(116),n=t(117),a=t(236),o=t(237),i=t(19),s=t(32),l=t(8),j=t(235),u=t.n(j),b=t(302),m=t.n(b),d=t(0),h=Object(n.a)({form:"login"})((function(e){var r=e.handleSubmit,t=e.error,n=e.captchaUrl;return Object(d.jsxs)("form",{onSubmit:r,className:u.a.loginFormWrapper,children:[Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{placeholder:"Email",name:"email",component:a.a,validate:[o.b]})}),Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{placeholder:"Password",name:"password",type:"password",component:a.a,validate:[o.b]})}),Object(d.jsx)("div",{children:Object(d.jsx)(c.a,{component:a.a,name:"rememberMe",type:"checkbox"})}),t&&Object(d.jsx)("div",{className:u.a.formSummaryError,children:t}),n&&Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:n,alt:"captcha"}),Object(d.jsx)(c.a,{placeholder:"captcha",name:"captcha",component:a.a,validate:[o.b]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Login"})})]})}));r.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:s.c})((function(e){return e.isAuth?Object(d.jsx)(l.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:m.a.loginH1,children:"Login"}),Object(d.jsx)(h,{onSubmit:function(r){e.login(r.email,r.password,r.rememberMe,r.captcha)},captchaUrl:e.captchaUrl}),Object(d.jsxs)("div",{className:m.a.loginblock,children:[Object(d.jsx)("h2",{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430:"}),Object(d.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(d.jsx)("p",{children:"Password: free"})]})]})}))}}]);
//# sourceMappingURL=6.4652b3e8.chunk.js.map