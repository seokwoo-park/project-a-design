(this["webpackJsonpproject-a"]=this["webpackJsonpproject-a"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(28),i=n.n(r),o=(n(36),n(8));n(37);var j=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home"})})},l=n(2),u=n(12);var d=function(){var e=Object(l.f)();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Auth"}),Object(a.jsx)("button",{onClick:function(){return e.push("/signup")},children:"SIGN UP"}),Object(a.jsxs)("p",{children:["Already has account? ",Object(a.jsx)(u.b,{to:"/login",children:"Log In"})]})]})},b=n(18),p=n.n(b),h=n(30),O=n(13),m=n.n(O);var x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),j=i[0],l=i[1];function u(e){var t=e.target,a=t.name,c=t.value;"email"===a?s(c):"password"===a&&l(c),console.log("email",n,"password",j)}var d=function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,m.a.post("http://localhost:8081/user/login",{email:n,password:j});case 4:a=e.sent,console.log("\ub85c\uadf8\uc778 \ub370\uc774\ud130 \ubcf4\ub0b4\uae30 \uc131\uacf5",a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),alert("Incorrect email or password. please check again!");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log in"}),Object(a.jsxs)("form",{onSubmit:d,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Email"}),Object(a.jsx)("input",{onChange:u,required:!0,value:n,name:"email",type:"email",placeholder:"Email"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Password"}),Object(a.jsx)("input",{onChange:u,required:!0,value:j,name:"password",type:"password",placeholder:"Password"})]}),Object(a.jsx)("input",{onSubmit:d,type:"submit",value:"Log In"})]})]})},v=n(9);var g=function(){var e=Object(l.f)(),t=Object(c.useState)({nickName:"",email:"",password:""}),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),j=Object(o.a)(i,2),u=j[0],d=j[1];function b(e){e.preventDefault();var t=e.target,n=t.name,a=t.value;"nickname"===n?r(Object(v.a)(Object(v.a)({},s),{},{nickName:a})):"email"===n?r(Object(v.a)(Object(v.a)({},s),{},{email:a})):"password"===n?r(Object(v.a)(Object(v.a)({},s),{},{password:a})):"passwordCheck"===n&&d(a)}function p(t){return t.preventDefault(),u!==s.password?(alert("Passwords must be same!"),!1):s.password.length<6&&u.length<6?(alert("Passwords must be over 6 digit!"),!1):void m.a.post("http://localhost:8081/user/register",Object(v.a)({},s)).then((function(t){e.push("/login"),console.log(t,"\uc804\ub2ec\uc644\ub8cc")})).catch((function(e){console.log(e,"\uc2e4\ud328")}))}return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Sign up"}),console.log(s,u),Object(a.jsxs)("form",{onSubmit:p,children:[Object(a.jsx)("input",{onChange:b,required:!0,value:s.nickName,name:"nickname",type:"text",placeholder:"Nickname"}),Object(a.jsx)("input",{onChange:b,required:!0,value:s.email,name:"email",type:"email",placeholder:"Email"}),Object(a.jsx)("input",{onChange:b,required:!0,value:s.password,name:"password",type:"password",placeholder:"Password"}),Object(a.jsx)("input",{onChange:b,required:!0,value:u,name:"passwordCheck",type:"password",placeholder:"Confirm Password "}),Object(a.jsx)("input",{onSubmit:p,type:"submit",value:"Submit"})]})]})};var f=function(e){var t=e.isLoggedIn;return Object(a.jsx)("div",{children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(l.c,{children:[t?Object(a.jsx)(l.a,{exact:!0,path:"/home",children:Object(a.jsx)(j,{})}):Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(d,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/login",children:Object(a.jsx)(x,{})}),Object(a.jsx)(l.a,{exact:!0,path:"/signup",children:Object(a.jsx)(g,{})})]})})})};var w=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0];return t[1],Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(f,{isLoggedIn:n})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.ba523ce8.chunk.js.map