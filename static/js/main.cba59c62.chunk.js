(this["webpackJsonppizza-staff"]=this["webpackJsonppizza-staff"]||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"id":1,"name":"\u0418\u043b\u044c\u044f \u0415\u043c\u0435\u043b\u044c\u044f\u043d\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (883) 508-3269","birthday":"12.02.1982"},{"id":2,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041b\u0430\u0440\u0438\u043e\u043d\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (823) 440-3602","birthday":"26.01.1986"},{"id":3,"name":"\u0411\u043e\u0433\u0434\u0430\u043d \u0414\u0430\u0432\u044b\u0434\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (971) 575-2645","birthday":"29.11.1990"},{"id":4,"name":"\u041e\u043b\u0438\u043c\u043f\u0438\u0430\u0434\u0430 \u041c\u0430\u043a\u0430\u0440\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (945) 447-2286","birthday":"06.01.1987"},{"id":5,"name":"\u0410\u043b\u043b\u0430 \u041a\u043e\u0442\u043e\u0432\u0430","isArchive":false,"role":"cook","phone":"+7 (948) 523-2964","birthday":"26.01.1982"},{"id":6,"name":"\u041a\u0438\u0440\u0430 \u041a\u043e\u043b\u0435\u0441\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (929) 592-3637","birthday":"25.02.1972"},{"id":7,"name":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0422\u0440\u0435\u0442\u044c\u044f\u043a\u043e\u0432","isArchive":false,"role":"driver","phone":"+7 (872) 568-2916","birthday":"31.05.1979"},{"id":8,"name":"\u041f\u0435\u043b\u0430\u0433\u0435\u044f \u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0430","isArchive":false,"role":"driver","phone":"+7 (977) 521-3479","birthday":"11.09.1981"},{"id":9,"name":"\u0410\u0433\u0430\u0444\u043e\u043d \u0413\u0440\u043e\u043c\u043e\u0432","isArchive":true,"role":"driver","phone":"+7 (868) 569-3159","birthday":"07.06.1988"},{"id":10,"name":"\u0412\u043b\u0430\u0434\u043b\u0435\u043d \u0422\u0435\u0442\u0435\u0440\u0438\u043d","isArchive":true,"role":"driver","phone":"+7 (808) 592-2480","birthday":"20.06.1978"},{"id":11,"name":"\u0412\u0430\u043b\u0435\u0440\u0438\u0439 \u041f\u0435\u0441\u0442\u043e\u0432","isArchive":false,"role":"cook","phone":"+7 (899) 403-2387","birthday":"20.01.1987"},{"id":12,"name":"\u0414\u0430\u043d\u0438\u0438\u043b \u041a\u0443\u0437\u043d\u0435\u0446\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (933) 582-2673","birthday":"25.05.1987"},{"id":13,"name":"\u0424\u0451\u0434\u043e\u0440 \u0412\u0435\u0441\u0435\u043b\u043e\u0432","isArchive":true,"role":"waiter","phone":"+7 (951) 517-3787","birthday":"16.12.1972"},{"id":14,"name":"\u041f\u0430\u043d\u0442\u0435\u043b\u0435\u0439\u043c\u043e\u043d \u0415\u0444\u0438\u043c\u043e\u0432","isArchive":true,"role":"cook","phone":"+7 (807) 492-3627","birthday":"17.04.1986"},{"id":15,"name":"\u0418\u0432\u0430\u043d\u043d\u0430 \u041a\u0430\u043b\u0430\u0448\u043d\u0438\u043a\u043e\u0432\u0430","isArchive":true,"role":"waiter","phone":"+7 (927) 488-2568","birthday":"24.03.1982"},{"id":16,"name":"\u041f\u0440\u0430\u0441\u043a\u043e\u0432\u044c\u044f \u041a\u043e\u043d\u0434\u0440\u0430\u0442\u044c\u0435\u0432\u0430","isArchive":true,"role":"cook","phone":"+7 (875) 517-3873","birthday":"07.06.1983"},{"id":17,"name":"\u0415\u0432\u0434\u043e\u043a\u0438\u044f \u0424\u0438\u043b\u0438\u043f\u043f\u043e\u0432\u0430","isArchive":false,"role":"waiter","phone":"+7 (877) 450-3253","birthday":"03.12.1994"}]')},26:function(e,t,r){},30:function(e,t,r){},32:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){"use strict";r.r(t);var a,n,c=r(0),i=r.n(c),s=r(14),o=r.n(s),l=(r(26),r(3)),d=r(4),h=r(16),j=Object(h.b)({name:"employees",initialState:{emloyeesList:[]},reducers:{addEmployee:function(e,t){e.emloyeesList.push(t.payload)},editEmployee:function(e,t){var r=e.emloyeesList.find((function(e){return e.id===t.payload.id}));if(void 0!==r)for(var a in r)r[a]=t.payload[a]},copyToStorage:function(e){localStorage.removeItem("copy"),localStorage.setItem("copy",JSON.stringify(e.emloyeesList)),console.log(JSON.parse(localStorage.getItem("copy")))}}}),b=j.actions,p=b.addEmployee,u=b.editEmployee,m=b.copyToStorage,f=function(e){return e.employees.emloyeesList},O=function(e){var t=[];return e.employees.emloyeesList.forEach((function(e){t.includes(e.role)||t.push(e.role)})),t},v=j.reducer,x=r(10),y=r(7),g=(r(30),["title","titleId"]);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_.apply(this,arguments)}function w(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function N(e,t){var r=e.title,i=e.titleId,s=w(e,g);return c.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"white",className:"bi bi-person-plus",viewBox:"0 0 16 16",ref:t,"aria-labelledby":i},s),r?c.createElement("title",{id:i},r):null,a||(a=c.createElement("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})),n||(n=c.createElement("path",{fillRule:"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"})))}var A=c.forwardRef(N),C=(r.p,r(1));var k,S,E=function(e){var t=Object(d.c)(O);return Object(C.jsx)("div",{className:"filter",children:Object(C.jsxs)("form",{className:"filter__form",children:[Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("span",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e:"}),Object(C.jsxs)("label",{className:"filter__custom-radio",children:[Object(C.jsx)("input",{type:"radio",name:"sort",value:"name",defaultChecked:!0,onChange:e.onChangeFilter}),Object(C.jsx)("span",{children:"\u0418\u043c\u044f"})]}),Object(C.jsxs)("label",{className:"filter__custom-radio",children:[Object(C.jsx)("input",{type:"radio",name:"sort",value:"birthday",onChange:e.onChangeFilter}),Object(C.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434."})]})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"role",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"}),Object(C.jsxs)("select",{name:"role",className:"filter__select",onChange:e.onChangeFilter,children:[Object(C.jsx)("option",{value:"all",children:"all"}),t.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))]})]}),Object(C.jsx)("fieldset",{children:Object(C.jsxs)("label",{className:"filter__custom-checkbox",children:[Object(C.jsx)("input",{type:"checkbox",name:"isArchive",onChange:e.onChangeFilter}),Object(C.jsx)("span",{children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"})]})}),Object(C.jsx)("fieldset",{children:Object(C.jsx)("button",{type:"button",className:"filter__button",onClick:e.onClickAddPopupButton,children:Object(C.jsx)(A,{})})})]})})},z=r(12),I=(r(32),["title","titleId"]);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},P.apply(this,arguments)}function F(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function L(e,t){var r=e.title,a=e.titleId,n=F(e,I);return c.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16",ref:t,"aria-labelledby":a},n),r?c.createElement("title",{id:a},r):null,k||(k=c.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"})),S||(S=c.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))}var B=c.forwardRef(L);r.p;var J=function(e){var t=Object(d.c)(f),r=Object(c.useState)(t),a=Object(y.a)(r,2),n=a[0],i=a[1];function s(e){var t=e.split(".");return t.reverse(),Date.parse(t.join("-"))}return Object(c.useEffect)((function(){var r=t.slice();r="all"===e.filter.role?r.filter((function(t){return t.isArchive===e.filter.isArchive})):r.filter((function(t){return t.role===e.filter.role&&t.isArchive===e.filter.isArchive})),r="name"===e.filter.sort?r.sort((function(t,r){return t[e.filter.sort]<r[e.filter.sort]?-1:t[e.filter.sort]>r[e.filter.sort]?1:void 0})):r.sort((function(t,r){return s(t[e.filter.sort])-s(r[e.filter.sort])})),i(r.slice())}),[e.filter,t]),Object(C.jsxs)("table",{className:"results-table",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{className:"results-table__row",children:[Object(C.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(C.jsx)("th",{children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(C.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434."}),Object(C.jsx)("th",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(C.jsx)("th",{children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"}),Object(C.jsx)("th",{})]})}),Object(C.jsx)("tbody",{children:n.map((function(e){return Object(C.jsxs)("tr",{className:"results-table__row",children:[Object(C.jsx)("td",{children:e.name}),Object(C.jsx)("td",{children:e.role}),Object(C.jsx)("td",{children:e.birthday}),Object(C.jsx)("td",{children:e.phone}),Object(C.jsx)("td",{children:e.isArchive?"\u0434\u0430":"\u043d\u0435\u0442"}),Object(C.jsx)("td",{children:Object(C.jsx)(z.b,{to:"/employees/".concat(e.id),children:Object(C.jsx)(B,{})})})]},e.id)}))})]})},H=/^[\u0410-\u042f\u0401][\u0430-\u044f\u0451]+(-[\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)?\s[\u0410-\u042f\u0401][\u0430-\u044f\u0451]+(-[\u0410-\u042f\u0401][\u0430-\u044f\u0451]+)?$/,M=/^\+7\s\(\d{3}\)\s\d{3}-\d{4}$/,D=/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d\d$/,R=(r(35),r.p+"static/media/close.8a65f75d.svg");var $=function(e){var t=Object(d.b)(),r=Object(d.c)(O),a=Object(c.useState)({id:"",name:"",isArchive:!1,role:"",phone:"",birthday:""}),n=Object(y.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)({name:!1,phone:!1,birthday:!1,role:!1}),l=Object(y.a)(o,2),h=l[0],j=l[1],b=Object(c.useState)(!0),u=Object(y.a)(b,2),f=u[0],v=u[1];function g(e){var t=Object(x.a)({},i);t[e.target.name]=e.target.value,s(Object(x.a)({},t))}return Object(c.useEffect)((function(){j(Object(x.a)({},{name:H.test(i.name),phone:M.test(i.phone),birthday:D.test(i.birthday),role:"---"!==i.role}))}),[i]),Object(c.useEffect)((function(){v(Object.values(h).some((function(e){return!1===e})))}),[h]),Object(C.jsx)("div",{className:"add-popup",children:Object(C.jsxs)("form",{className:"add-popup__form",onSubmit:function(r){r.preventDefault(),t(p(i)),t(m()),e.onClosePopup()},children:[Object(C.jsx)("img",{className:"add-popup__close-icon",src:R,alt:"close-icon",onClick:e.onClosePopup}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"name",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0418\u043c\u044f:"}),Object(C.jsx)("input",{type:"text",name:"name",className:"add-popup__input",onChange:g}),Object(C.jsx)("span",{className:h.name?"add-popup__error-message":"add-popup__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u0438 \u0438\u043c\u044f"})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"phone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"}),Object(C.jsx)("input",{type:"tel",name:"phone",className:"add-popup__input",onChange:g}),Object(C.jsx)("span",{className:h.phone?"add-popup__error-message":"add-popup__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 +7 (\u0445\u0445\u0445) \u0445\u0445\u0445-\u0445\u0445\u0445\u0445"})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"birthday",children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),Object(C.jsx)("input",{type:"text",name:"birthday",className:"add-popup__input",onChange:g}),Object(C.jsx)("span",{className:h.birthday?"add-popup__error-message":"add-popup__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413"})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("label",{htmlFor:"role",children:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"}),Object(C.jsxs)("select",{className:"add-popup__select",name:"role",onChange:g,children:[Object(C.jsx)("option",{children:"---"}),r.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))]}),Object(C.jsx)("span",{className:h.role?"add-popup__error-message":"add-popup__error-message_show",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"})]}),Object(C.jsx)("button",{className:"add-popup__button",disabled:f,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})};r(36);var V=function(){var e=Object(c.useState)({sort:"name",role:"all",isArchive:!1}),t=Object(y.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(y.a)(n,2),s=i[0],o=i[1];function l(e){o(!s)}return Object(C.jsxs)("div",{className:"results",children:[Object(C.jsx)(E,{onChangeFilter:function(e){var t=Object(x.a)({},r);"checkbox"===e.target.type?t[e.target.name]=e.target.checked:t[e.target.name]=e.target.value,a(Object(x.a)({},t))},onClickAddPopupButton:l}),Object(C.jsx)(J,{filter:r}),s&&Object(C.jsx)($,{onClosePopup:l})]})},T=(r(37),r.p+"static/media/avatar.ab01c844.png");var W=function(e){var t=Object(l.g)().id,r=Object(l.f)(),a=Object(d.c)(f),n=Object(d.c)(O),i=Object(d.b)(),s=Object(c.useState)(a.find((function(e){return e.id==t}))),o=Object(y.a)(s,2),h=o[0],j=o[1],b=Object(c.useState)({name:!1,phone:!1,birthday:!1,role:!1}),p=Object(y.a)(b,2),v=p[0],g=p[1],_=Object(c.useState)(!0),w=Object(y.a)(_,2),N=w[0],A=w[1];function k(e){var t=Object(x.a)({},h);"checkbox"===e.target.type?t[e.target.name]=e.target.checked:t[e.target.name]=e.target.value,j(Object(x.a)({},t))}return Object(c.useEffect)((function(){g(Object(x.a)({},{name:H.test(h.name),phone:M.test(h.phone),birthday:D.test(h.birthday),role:""!==h.role}))}),[h]),Object(c.useEffect)((function(){A(Object.values(v).some((function(e){return!1===e})))}),[v]),Object(C.jsxs)("div",{className:"profile",children:[Object(C.jsxs)("form",{className:"profile__form",onSubmit:function(e){e.preventDefault(),i(u(h)),i(m()),r.goBack()},children:[Object(C.jsx)("input",{type:"text",name:"name",className:"profile__input",value:h.name,onChange:k}),Object(C.jsx)("span",{className:v.name?"profile__error-message":"profile__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u0438 \u0438\u043c\u044f"}),Object(C.jsx)("input",{type:"text",name:"phone",className:"profile__input",value:h.phone,onChange:k}),Object(C.jsx)("span",{className:v.name?"profile__error-message":"profile__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 +7 (\u0445\u0445\u0445) \u0445\u0445\u0445-\u0445\u0445\u0445\u0445"}),Object(C.jsx)("input",{type:"text",name:"birthday",className:"profile__input",value:h.birthday,onChange:k}),Object(C.jsx)("span",{className:v.birthday?"profile__error-message":"profile__error-message_show",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413"}),Object(C.jsx)("select",{name:"role",className:"profile__select",value:h.role,onChange:k,children:n.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))}),Object(C.jsxs)("label",{className:"profile__custom-checkbox",children:[Object(C.jsx)("input",{type:"checkbox",name:"isArchive",value:h.isArchive,onChange:k}),Object(C.jsx)("span",{children:"\u0412 \u0430\u0440\u0445\u0438\u0432\u0435"})]}),Object(C.jsxs)("fieldset",{children:[Object(C.jsx)("button",{className:"profile__button",disabled:N,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(C.jsx)("button",{className:"profile__button",onClick:function(e){e.preventDefault(),r.goBack()},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]}),Object(C.jsx)("img",{src:T,alt:"employee-avatar",className:"profile__avatar"})]})},q=(r(38),r(21));var G=function(){var e=Object(d.b)();return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("copy"));t?t.forEach((function(t){e(p(t))})):q.forEach((function(t){e(p(t))}))}),[]),Object(C.jsx)("div",{className:"main",children:Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{exact:!0,path:"/",children:Object(C.jsx)(V,{})}),Object(C.jsx)(l.a,{exact:!0,path:"/employees/:id",children:Object(C.jsx)(W,{})})]})})},K=Object(h.a)({reducer:{employees:v}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(z.a,{basename:"/pizza-staff",children:Object(C.jsx)(d.a,{store:K,children:Object(C.jsx)(G,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.cba59c62.chunk.js.map