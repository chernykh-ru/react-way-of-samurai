(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{487:function(s,a,e){s.exports={dialogs:"Dialogs_dialogs__2k5OF",dialogsItems:"Dialogs_dialogsItems__1XTni",dialog:"Dialogs_dialog__aU1X5",messages:"Dialogs_messages__2gINe",avatarWrapper:"Dialogs_avatarWrapper__WbZwe",avatar:"Dialogs_avatar__2Onne",messagesUser:"Dialogs_messagesUser__2OOnJ",messagesFriend:"Dialogs_messagesFriend__3wPpz",message:"Dialogs_message__2DoC3"}},493:function(s,a,e){"use strict";e.r(a);var i=e(9),t=e(27),c=e(232),n=e(487),r=e.n(n),o=e(37),d=e(185),g=e(2),l=function(s){var a=s.id,e=s.name;return Object(g.jsxs)("div",{className:r.a.dialog,children:[Object(g.jsx)("img",{className:r.a.avatar,src:d.a,alt:"avatar"}),Object(g.jsx)(o.c,{to:"/dialogs/"+a,activeClassName:r.a.activeLink,children:e})]})},m=function(s){var a=s.message;s.id;return Object(g.jsx)("div",{className:r.a.message,children:a})},j=(e(0),e(233)),u=e(234),b=e(102),O=e(127),_=Object(O.a)(50),v=Object(u.a)({form:"dialogAddMessageForm"})((function(s){var a=s.handleSubmit;return Object(g.jsxs)("form",{onSubmit:a,children:[Object(g.jsx)("div",{children:Object(g.jsx)(j.a,{component:b.b,name:"message",placeholder:"Enter your message",validate:[O.b,_]})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Add message"})})]})})),h=function(s){var a=s.dialogs,e=s.messages,i=s.addMessage,t=a.map((function(s,a){return Object(g.jsx)(l,{name:s.name,id:s.id},a)})),c=e.map((function(s,a){return Object(g.jsx)(m,{message:s.message,id:s.id},a)}));return Object(g.jsxs)("div",{className:r.a.dialogs,children:[Object(g.jsx)("div",{className:r.a.dialogsItems,children:t}),Object(g.jsxs)("div",{className:r.a.messages,children:[Object(g.jsx)("div",{className:r.a.messagesUser,children:c}),Object(g.jsx)(v,{onSubmit:function(s){i(s.message)}})]})]})},x=e(150),f=e(30),p=["isAuth"],D=function(s){return{isAuth:s.auth.isAuth}};var N=e(31);a.default=Object(N.compose)(Object(t.b)((function(s){return{dialogs:s.dialogsPage.dialogs,messages:s.dialogsPage.messages}}),Object(i.a)({},c.a)),(function(s){return Object(t.b)(D)((function(a){var e=a.isAuth,t=Object(x.a)(a,p);return e?Object(g.jsx)(s,Object(i.a)({},t)):Object(g.jsx)(f.a,{to:"/login"})}))}))(h)}}]);
//# sourceMappingURL=4.afbf1671.chunk.js.map