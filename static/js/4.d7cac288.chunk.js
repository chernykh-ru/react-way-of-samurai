(this["webpackJsonpreact-way-of-samurai"]=this["webpackJsonpreact-way-of-samurai"]||[]).push([[4],{298:function(a,s,e){a.exports={dialogs:"Dialogs_dialogs__2k5OF",dialogsItems:"Dialogs_dialogsItems__1XTni",dialog:"Dialogs_dialog__aU1X5",activeLink:"Dialogs_activeLink__2ES73",messages:"Dialogs_messages__2gINe",avatarWrapper:"Dialogs_avatarWrapper__WbZwe",avatar:"Dialogs_avatar__2Onne",messagesUser:"Dialogs_messagesUser__2OOnJ",messagesFriend:"Dialogs_messagesFriend__3wPpz",message:"Dialogs_message__2DoC3"}},304:function(a,s,e){"use strict";e.r(s);var i=e(4),t=e(16),n=e(131),c=e(298),r=e.n(c),o=e(15),g=e(110),d=e(0),l=function(a){var s=a.id,e=a.name;return Object(d.jsxs)("div",{className:r.a.dialog,children:[Object(d.jsx)("img",{className:r.a.avatar,src:g.a,alt:"avatar"}),Object(d.jsx)(o.b,{to:"/dialogs/"+s,activeClassName:r.a.activeLink,children:e})]})},m=function(a){var s=a.message;a.id;return Object(d.jsx)("div",{className:r.a.message,children:s})},j=(e(1),e(132)),b=e(133),u=e(49),O=e(69),_=Object(O.a)(50),v=Object(b.a)({form:"dialogAddMessageForm"})((function(a){var s=a.handleSubmit;return Object(d.jsxs)("form",{onSubmit:s,children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.a,{component:u.b,name:"message",placeholder:"Enter your message",validate:[O.b,_]})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Add message"})})]})})),h=function(a){var s=a.dialogs,e=a.messages,i=a.addMessage,t=s.map((function(a,s){return Object(d.jsx)(l,{name:a.name,id:a.id},s)})),n=e.map((function(a,s){return Object(d.jsx)(m,{message:a.message,id:a.id},s)}));return Object(d.jsxs)("div",{className:r.a.dialogs,children:[Object(d.jsx)("div",{className:r.a.dialogsItems,children:t}),Object(d.jsxs)("div",{className:r.a.messages,children:[Object(d.jsx)("div",{className:r.a.messagesUser,children:n}),Object(d.jsx)(v,{onSubmit:function(a){i(a.message)}})]})]})},x=e(73),f=e(12),p=["isAuth"],D=function(a){return{isAuth:a.auth.isAuth}};var N=e(13);s.default=Object(N.compose)(Object(t.b)((function(a){return{dialogs:a.dialogsPage.dialogs,messages:a.dialogsPage.messages}}),Object(i.a)({},n.a)),(function(a){return Object(t.b)(D)((function(s){var e=s.isAuth,t=Object(x.a)(s,p);return e?Object(d.jsx)(a,Object(i.a)({},t)):Object(d.jsx)(f.a,{to:"/login"})}))}))(h)}}]);
//# sourceMappingURL=4.d7cac288.chunk.js.map