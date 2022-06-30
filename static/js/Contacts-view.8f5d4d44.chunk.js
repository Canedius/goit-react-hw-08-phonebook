"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{7273:function(e,n,a){a.r(n),a.d(n,{default:function(){return q}});var t=a(885),r=a(656),o=a(4554),i=a(9019),s="Form_wrap__GT7q3",d=a(5048),l=a(5192),c=a(493),u=a(4852),m=a(3400),x=a(501),b=a(7247),h=a(5715),p=a(890),f=a(1286),j=a(2791),Z=a(4741),g=a(6151),v=a(5562),y=a.n(v),C=a(184);var k=function(e){var n=e.state,a=e.close,r=n.id,s=n.name,d=n.number,l=(0,j.useState)(s),c=(0,t.Z)(l,2),u=c[0],m=c[1],x=(0,j.useState)(d),b=(0,t.Z)(x,2),h=b[0],p=b[1],f=(0,i.Jx)().data,v=(0,i.i)(),k=(0,t.Z)(v,1)[0],w=function(){m(""),p("")};return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(o.Z,{component:"form",sx:{borderRadius:"16px",p:2,width:300,height:170,backgroundColor:"primary.main","&:hover":{backgroundColor:"primary.dark"}},onSubmit:function(e){e.preventDefault(),f.find((function(e){return e.name===u}))?y().Notify.failure("".concat(s," is alredy in contacts")):(k({id:r,defaultName:u,defaultNumber:h}),a(),w())},children:(0,C.jsxs)(o.Z,{sx:{backgroundColor:"#ffff",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",height:170},children:[(0,C.jsx)(Z.Z,{id:"standard-basic",label:"Name",variant:"standard",onChange:function(e){m(e.currentTarget.value)},value:u,type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,C.jsx)(Z.Z,{sx:{mb:2},id:"standard-basic",label:"Number",variant:"standard",onChange:function(e){p(e.currentTarget.value)},value:h,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,C.jsx)(g.Z,{variant:"outlined",type:"submit",children:" Update"})]})})})},w=a(9952);var N=function(e){var n=e.children,a=(0,j.useState)(""),Z=(0,t.Z)(a,2),g=Z[0],v=Z[1],y=(0,d.v9)(l.z),N=(0,i.Jx)().data,S=y.toLowerCase(),z=(0,j.useState)(!1),A=(0,t.Z)(z,2),F=A[0],_=A[1],R=function(e){v(e),_(!F)},J=N&&N.filter((function(e){return e.name.toLowerCase().includes(S)})),T={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,borderRadius:"16px",p:1},D=(0,i.Nt)(),I=(0,t.Z)(D,1)[0];return N&&(0,C.jsxs)("div",{className:s,children:[(0,C.jsxs)(p.Z,{variant:"h4",children:["Contacts list",(0,C.jsx)(h.Z,{sx:{ml:1},badgeContent:N.length||"0",color:"primary",children:(0,C.jsx)(x.Z,{color:"action"})})]}),n,(0,C.jsx)(c.Z,{children:J.map((function(e){var n=e.id,a=e.name,t=e.number;return(0,C.jsxs)(u.ZP,{sx:{border:1,borderColor:"grey.500",mb:1,display:"flex",justifyContent:"space-between"},children:[(0,C.jsx)(w.Z,{fontSize:"large",color:"action"}),(0,C.jsxs)("span",{children:[a,": ",t]}),(0,C.jsxs)(o.Z,{children:[(0,C.jsx)(m.Z,{onClick:function(){return R({id:n,name:a,number:t})},edge:"end",children:(0,C.jsx)(f.Z,{})}),(0,C.jsx)(m.Z,{onClick:function(){return I(n)},edge:"end","aria-label":"delete",children:(0,C.jsx)(b.Z,{})})]}),(0,C.jsx)(r.Z,{open:F,onClose:R,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsx)(o.Z,{sx:T,children:(0,C.jsx)(k,{state:g,close:R})})})]},n)}))})]})},S=a(6057);var z=function(){var e=(0,d.I0)(),n=(0,d.v9)(l.z);return(0,C.jsx)(Z.Z,{sx:{mb:2,width:310,maxWidth:"100%",display:"block"},label:"Find contacts by name",fullWidth:!0,tupe:"text",value:n,onChange:function(n){return e((0,S.W1)(n))}})},A=a(1614),F=a(6871),_=a(9877),R=a(2419),J=a(1686),T=function(e){var n=e.close,a=(0,i.Jx)().data,r=(0,j.useState)(""),s=(0,t.Z)(r,2),d=s[0],l=s[1],c=(0,j.useState)(""),u=(0,t.Z)(c,2),m=u[0],x=u[1],b=(0,i.Lr)(),h=(0,t.Z)(b,1)[0],p=function(){l(""),x("")};return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(o.Z,{component:"form",sx:{borderRadius:"16px",p:2,width:300,height:170,backgroundColor:"primary.main","&:hover":{backgroundColor:"primary.dark"}},onSubmit:function(e){e.preventDefault(),a.find((function(e){return e.name===d}))?y().Notify.failure("".concat(d," is alredy in contacts")):(h({name:d,number:m}),n(),p())},children:(0,C.jsxs)(o.Z,{sx:{backgroundColor:"#ffff",borderRadius:"16px",display:"flex",flexDirection:"column",alignItems:"center",height:170},children:[(0,C.jsx)(Z.Z,{id:"standard-basic",label:"Name",variant:"standard",onChange:function(e){l(e.currentTarget.value)},value:d,type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,C.jsx)(Z.Z,{sx:{mb:2},id:"standard-basic",label:"Number",variant:"standard",onChange:function(e){x(e.currentTarget.value)},value:m,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",required:!0}),(0,C.jsx)(g.Z,{variant:"outlined",type:"submit",endIcon:(0,C.jsx)(J.Z,{}),children:" add contact"})]})})})};var D=function(e){var n=e.onClose,a=e.open;return(0,C.jsx)(r.Z,{open:a,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,C.jsx)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",boxShadow:24,borderRadius:"16px",p:1},children:(0,C.jsx)(T,{close:n})})})};var I=function(){var e=j.useState(!1),n=(0,t.Z)(e,2),a=n[0],r=n[1],o=function(){return r(!a)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(_.Z,{sx:{mr:1},onClick:o,color:"primary","aria-label":"add",children:(0,C.jsx)(R.Z,{})}),(0,C.jsx)("b",{children:"Add contact"}),a&&(0,C.jsx)(D,{open:a,onClose:o})]})};var q=function(e){return(0,d.v9)(l.g)?(0,C.jsxs)(A.Z,{children:[(0,C.jsx)(z,{}),(0,C.jsx)(I,{}),(0,C.jsx)(N,{})]}):(0,C.jsx)(F.Fg,{to:"/login"})}},5192:function(e,n,a){a.d(n,{g:function(){return r},z:function(){return t}});var t=function(e){return e.contacts.filter},r=function(e){return e.contacts.initialization}}}]);
//# sourceMappingURL=Contacts-view.8f5d4d44.chunk.js.map