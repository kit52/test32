"use strict";(self.webpackChunkproduction_project=self.webpackChunkproduction_project||[]).push([[933],{11:function(e,t,n){n.d(t,{I:function(){return r}});var a=n(7294),l=n(3007),o=n(5893);const r=(0,a.memo)((e=>{const{className:t,value:n,onChange:r,type:s="text",placeholder:c,autofocus:u,readonly:d,...i}=e,m=(0,a.useRef)(null),[v,x]=(0,a.useState)(!1),[f,h]=(0,a.useState)(0),p=v&&!d;return(0,a.useEffect)((()=>{var e;u&&(x(!0),null===(e=m.current)||void 0===e||e.focus())}),[u]),(0,o.jsxs)("div",{className:(0,l.A)("LuFDUWoP",{},[t]),children:[c&&(0,o.jsx)("div",{className:"emAQQ85i",children:"".concat(c,">")}),(0,o.jsxs)("div",{className:"y1GiFC_L",children:[(0,o.jsx)("input",{ref:m,type:s,value:n,onChange:e=>{null==r||r(e.target.value),h(e.target.value.length)},className:"LVdIPwcx",onFocus:()=>{x(!0)},onBlur:()=>{x(!1)},onSelect:e=>{var t;h((null==e||null===(t=e.target)||void 0===t?void 0:t.selectionStart)||0)},readOnly:d,...i}),p&&(0,o.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9*f,"px")}})]})]})}))},1933:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(2327),l=n(7294),o=n(743),r=n(3007),s=n(11),c=n(9499),u=n(5401),d=n(1233),i=n(9457);const m=(0,n(4268).oM)({name:"addCommentForm",initialState:{text:""},reducers:{setText:(e,t)=>{e.text=t.payload}}}),{actions:v}=m,{reducer:x}=m,f=e=>{var t,n;return null!==(t=null===(n=e.addCommentForm)||void 0===n?void 0:n.text)&&void 0!==t?t:""},h=e=>{var t;return null===(t=e.addCommentForm)||void 0===t?void 0:t.error};var p=n(5893);const C={addCommentForm:x};var j=(0,l.memo)((e=>{const{className:t,onSendComment:n}=e,{t:m}=(0,a.$)(),x=(0,o.v9)(f),j=((0,o.v9)(h),(0,u.T)()),N=(0,l.useCallback)((e=>{j(v.setText(e))}),[j]),g=(0,l.useCallback)((()=>{n(x||""),N("")}),[N,n,x]);return(0,p.jsx)(d.W,{reducers:C,children:(0,p.jsxs)(i.U,{justify:"between",max:!0,className:(0,r.A)("ZrfoeB3H",{},[t]),children:[(0,p.jsx)(s.I,{className:"gxRAkJ0f",placeholder:m("Введите текст комментария"),value:x,onChange:N}),(0,p.jsx)(c.zx,{theme:c.bn.OUTLINE,onClick:g,children:m("Отправить")})]})})}))}}]);