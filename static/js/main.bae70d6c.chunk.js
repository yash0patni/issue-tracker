(this.webpackJsonpissue_tracker=this.webpackJsonpissue_tracker||[]).push([[0],{223:function(e,t,s){},322:function(e,t,s){"use strict";s.r(t);var n={};s.r(n),s.d(n,"addIssue",(function(){return P})),s.d(n,"editIssue",(function(){return R})),s.d(n,"deleteIssue",(function(){return _})),s.d(n,"initIssues",(function(){return F}));var r={};s.r(r),s.d(r,"loginUser",(function(){return et})),s.d(r,"signupUser",(function(){return tt})),s.d(r,"logoutUser",(function(){return st}));var c=s(0),i=s.n(c),a=s(14),o=s.n(a),l=s(31),u=s(19),j=s(9),d=s(369),b=s(373),O=s(374),h=s(15),p=s(18),x=s(96),f=s.n(x),m=s(97),v=s.n(m),y=s(8),g=s(12),C=s(21),w=s.n(C),S=s(37),I=s(16),N=s(17),D=s(43),A=s.n(D),k="https://my-json-server.typicode.com/yash0patni/issue_tracker_server",U=function(){function e(){Object(I.a)(this,e)}return Object(N.a)(e,null,[{key:"getAllIssue",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(k,"/issues?_sort=lastUpdated&_order=desc").concat(t));case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"getIssue",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(k,"/issues/").concat(t.id));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveIssue",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(k,"/issues"),t,{"Content-Type":"application/json"});case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"editIssue",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.put("".concat(k,"/issues/").concat(t.id),t,{"Content-Type":"application/json"});case 2:n=e.sent,s(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"deleteIssue",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.delete("".concat(k,"/issues/").concat(t.id));case 2:n=e.sent,console.log("deleteIssue IssueApi",n),s(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()}]),e}(),B="INITIALIZE",M="ADD_ISSUE",E="DELETE_ISSUE",L="EDIT_ISSUE",z="LOGIN_USER",T="LOGOUT_USER",Y="SIGNUP_USER";function P(e){return function(t){return U.saveIssue(e,(function(e){return t({type:M,issue:e})}))}}function R(e){return function(t){return U.editIssue(e,(function(){return t({type:L,issue:e})}))}}function _(e){return function(t){return U.deleteIssue(e,(function(){return t({type:E,id:e.id})}))}}function F(e){return function(t){return U.getAllIssue(e,(function(e){return t({type:B,issues:e})}))}}var W=s(1);var q=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=e.issue,s=e.index,n=e.customization;return Object(W.jsxs)(d.a,{children:[Object(W.jsx)(b.a,{children:s+1}),Object(W.jsx)(b.a,{children:Object(W.jsx)(h.b,{onClick:function(){e.users.isAuthenticated?e.history.push("issues/view/".concat(t.id)):e.setAlertOpen(!0)},style:{color:"blue",fontSize:"16px"},to:"#",children:t.description})}),n.severity?Object(W.jsx)(b.a,{children:t.severity}):null,n.status?Object(W.jsx)(b.a,{children:t.status}):null,n.createdDate?Object(W.jsx)(b.a,{children:t.createdDate}):null,n.lastUpdated?Object(W.jsx)(b.a,{children:t.lastUpdated}):null,n.resolvedDate?Object(W.jsx)(b.a,{children:t.resolvedDate?t.resolvedDate:"Not resolved"}):null,n.lastUpdatedBy?Object(W.jsx)(b.a,{children:t.lastUpdatedByName}):null,n.loggedBy?Object(W.jsx)(b.a,{children:t.loggedByName}):null,Object(W.jsx)(b.a,{children:Object(W.jsx)(O.a,{onClick:function(){e.users.isAuthenticated?e.history.push("issues/edit/".concat(t.id)):e.setAlertOpen(!0)},size:"small",color:"primary",startIcon:Object(W.jsx)(f.a,{}),children:"Edit"})}),Object(W.jsx)(b.a,{children:Object(W.jsx)(O.a,{onClick:function(){e.users.isAuthenticated?window.confirm("Are you sure you want to delete this issue?")?e.actions.deleteIssue(t):console.log():e.setAlertOpen(!0)},size:"small",color:"secondary",startIcon:Object(W.jsx)(v.a,{}),children:"Delete"})})]})}))),V=s(376),G=s(378),J=s(375),Z=s(377),$=s(121);var H=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=e.customization;return Object(W.jsx)(J.a,{component:$.a,children:Object(W.jsxs)(V.a,{"aria-label":"simple table",children:[Object(W.jsx)(Z.a,{style:{backgroundColor:"#3F51B5"},children:Object(W.jsxs)(d.a,{children:[Object(W.jsx)(b.a,{style:{color:"white"},children:"Id"}),Object(W.jsx)(b.a,{style:{color:"white"},children:"Issue Description"}),t.severity?Object(W.jsx)(b.a,{style:{color:"white"},children:"Severity"}):null,t.status?Object(W.jsx)(b.a,{style:{color:"white"},children:"Status"}):null,t.createdDate?Object(W.jsx)(b.a,{style:{color:"white"},children:"Created Date"}):null,t.lastUpdated?Object(W.jsx)(b.a,{style:{color:"white"},children:"Last Updated"}):null,t.resolvedDate?Object(W.jsx)(b.a,{style:{color:"white"},children:"Resolved Date"}):null,t.lastUpdatedBy?Object(W.jsx)(b.a,{style:{color:"white"},children:"Last Updated By"}):null,t.loggedBy?Object(W.jsx)(b.a,{style:{color:"white"},children:"Logged By"}):null,Object(W.jsx)(b.a,{style:{color:"white"},children:"Edit"}),Object(W.jsx)(b.a,{style:{color:"white"},children:"Delete"})]})}),Object(W.jsx)(G.a,{children:e.issues&&e.issues.map((function(s,n){return Object(W.jsx)(q,{setAlertOpen:e.setAlertOpen,issue:s,index:n,customization:t},s.id)}))})]})})}))),K=s(379),Q=s(380),X=s(381),ee=s(122),te=Object(K.a)({root:{padding:"10px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},title:{fontSize:14}});var se=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=te(),s=Object(p.h)().id,n=e.issues.find((function(e){return e.id===s}));return e.users.isAuthenticated?Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsx)(h.b,{to:"/issues",children:"Back"}),Object(W.jsx)("h1",{children:"Issue Details"}),n?Object(W.jsx)("div",{children:Object(W.jsx)(Q.a,{style:{width:"80vw"},children:Object(W.jsxs)(X.a,{children:[Object(W.jsxs)(ee.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:["Last Updated- ",Object(W.jsx)("b",{children:n.lastUpdated})," by- ",Object(W.jsx)("b",{children:n.lastUpdatedByName})]}),Object(W.jsx)(ee.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.description}),Object(W.jsxs)(ee.a,{variant:"body2",color:"textSecondary",component:"p",children:["Severity- ",Object(W.jsx)("b",{children:n.severity})]}),Object(W.jsxs)(ee.a,{variant:"body2",color:"textSecondary",component:"p",children:["Status- ",Object(W.jsx)("b",{children:n.status})]}),Object(W.jsx)(ee.a,{style:{marginTop:"10px"},variant:"body2",component:"p",children:n.createdDate+" - "+n.resolvedDate}),Object(W.jsxs)(ee.a,{style:{marginTop:"10px"},variant:"body2",component:"h2",children:["Logged By- ",Object(W.jsx)("b",{children:n.loggedByName})]})]})})}):Object(W.jsxs)("b",{children:["No issue with id: ",s]})]}):Object(W.jsx)(p.b,{to:"/"})}))),ne=s(406),re=s(384),ce=s(385),ie=s(402),ae=s(408),oe=s(323),le=s(386),ue=s(387),je=s(403),de=s(73),be=s.n(de),Oe=Object(K.a)({root:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center"},formControl:{minWidth:350}});var he=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=Oe(),s=Object(p.h)().id,n=i.a.useState(!1),r=Object(j.a)(n,2),c=r[0],a=r[1],o=i.a.useState(!0),d=Object(j.a)(o,2),b=d[0],x=d[1],f=i.a.useState({}),m=Object(j.a)(f,2),v=m[0],y=m[1];i.a.useEffect((function(){x(!0),function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://my-json-server.typicode.com/yash0patni/issue_tracker_server/issues/".concat(s));case 2:t=e.sent,y(t.data),x(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var g=function(e){y(Object(u.a)(Object(u.a)({},v),{},Object(l.a)({},e.target.name,e.target.value)))};return e.users.isAuthenticated?b?Object(W.jsx)("p",{children:"Loading..."}):Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsx)(h.b,{to:"/issues",children:"Back"}),Object(W.jsx)("h2",{children:"Edit Issue"}),Object(W.jsxs)("form",{onSubmit:function(t){a(!1),t.preventDefault();var s={id:v.id,description:v.description,severity:v.severity,status:v.status,createdDate:v.createdDate,lastUpdated:be()().format("MMMM Do YYYY"),resolvedDate:"Closed"===v.status?be()().format("MMMM Do YYYY"):null,loggedBy:v.loggedBy,lastUpdatedBy:e.users.id,loggedByName:v.loggedByName,lastUpdatedByName:e.users.firstName+" "+e.users.lastName};e.actions.editIssue(s),e.history.push("/issues")},onChange:function(){return a(!0)},autoComplete:"off",children:[Object(W.jsx)(ne.a,{className:t.formControl,id:"description",label:"Description",name:"description",value:v.description,onChange:g}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{className:t.formControl,children:[Object(W.jsx)(ce.a,{id:"severity",children:"Severity"}),Object(W.jsxs)(ie.a,{labelId:"Severity",id:"severity",name:"severity",value:v.severity,onChange:g,children:[Object(W.jsx)(ae.a,{value:"Critical",children:"Critical"},"1"),Object(W.jsx)(ae.a,{value:"Major",children:"Major"},"2"),Object(W.jsx)(ae.a,{value:"Minor",children:"Minor"},"3")]})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{component:"fieldset",children:[Object(W.jsx)(oe.a,{component:"legend",children:"Status"}),Object(W.jsxs)(le.a,{"aria-label":"Status",name:"status",value:v.status,onChange:g,children:[Object(W.jsx)(ue.a,{value:"Open",control:Object(W.jsx)(je.a,{}),label:"Open"}),Object(W.jsx)(ue.a,{value:"In Progress",control:Object(W.jsx)(je.a,{}),label:"In Progress"}),Object(W.jsx)(ue.a,{value:"Closed",control:Object(W.jsx)(je.a,{}),label:"Closed"})]})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)(O.a,{fullWidth:!0,onClick:function(){return a(!1)},type:"submit",variant:"contained",color:"primary",children:"Save"})]}),Object(W.jsx)(p.a,{when:c,message:"All changes will be lost, Are you sure you want to continue ?"})]}):Object(W.jsx)(p.b,{to:"/"})}))),pe=s(164),xe=s.n(pe),fe=s(165),me=s.n(fe),ve=s(166),ye=s.n(ve),ge=s(167),Ce=s.n(ge),we=s(404),Se=s(391),Ie=s(392),Ne=s(393),De=s(394),Ae=s(324),ke=s(396),Ue=s(395),Be=s(388),Me=s(389),Ee=Object(K.a)({root:{maxWidth:345},title:{fontSize:14}});var Le=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=Ee(),s=e.issue,n=e.customization;return Object(W.jsxs)(Q.a,{className:t.root,children:[Object(W.jsx)(Be.a,{onClick:function(){e.users.isAuthenticated?e.history.push("issues/view/".concat(s.id)):e.setAlertOpen(!0)},children:Object(W.jsxs)(X.a,{children:[n.lastUpdated&&Object(W.jsxs)(ee.a,{id:"lastUpdated",className:t.title,color:"textSecondary",gutterBottom:!0,children:["Last updated at- ",s.lastUpdated]}),n.lastUpdatedBy&&Object(W.jsxs)(ee.a,{id:"lastUpdatedBy",className:t.title,color:"textSecondary",gutterBottom:!0,children:["Last updated by- ",s.lastUpdatedByName]}),n.description&&Object(W.jsx)(ee.a,{id:"description",gutterBottom:!0,variant:"h5",component:"h2",children:s.description}),n.severity&&Object(W.jsxs)(ee.a,{id:"severity",variant:"body2",color:"textSecondary",component:"p",children:["Severity- ",s.severity]}),n.status&&Object(W.jsxs)(ee.a,{id:"status",variant:"body2",color:"textSecondary",component:"p",children:["Status- ",s.status]}),Object(W.jsxs)(ee.a,{style:{marginTop:"10px"},variant:"body2",component:"p",children:[n.createdDate?s.createdDate:null,n.createdDate&&n.resolvedDate?" - ":null,n.resolvedDate?s.resolvedDate?s.resolvedDate:"Not resolved":null]}),Object(W.jsx)(ee.a,{style:{marginTop:"10px"},variant:"body2",component:"h2",children:n.loggedBy?"Logged By- ".concat(s.loggedByName):null})]})}),Object(W.jsxs)(Me.a,{children:[Object(W.jsx)(O.a,{id:"editButton",onClick:function(){e.users.isAuthenticated?e.history.push("issues/edit/".concat(s.id)):e.setAlertOpen(!0)},size:"small",color:"primary",startIcon:Object(W.jsx)(f.a,{}),children:"Edit"}),Object(W.jsx)(O.a,{onClick:function(){e.users.isAuthenticated?window.confirm("Are you sure you want to delete this issue?")?e.actions.deleteIssue(s):console.log():e.setAlertOpen(!0)},size:"small",color:"secondary",startIcon:Object(W.jsx)(v.a,{}),children:"Delete"})]})]})}))),ze=s(390),Te=Object(K.a)({root:{display:"flex",alignItems:"center",padding:"10px"}});var Ye=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=Te();return Object(W.jsx)("div",{className:t.root,children:Object(W.jsx)(ze.a,{container:!0,spacing:2,children:e.issues&&e.issues.map((function(t,s){return Object(W.jsx)(ze.a,{item:!0,xs:12,sm:6,md:4,children:Object(W.jsx)(Le,{setAlertOpen:e.setAlertOpen,issue:t,index:s,customization:e.customization})},t.id)}))})})}))),Pe=Object(p.i)((function(e){var t=function(){e.setAlertOpen(!1)};return Object(W.jsx)("div",{children:Object(W.jsxs)(Se.a,{open:e.alertOpen,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(W.jsx)(Ie.a,{id:"alert-dialog-title",children:e.dialogTitle}),Object(W.jsx)(Ne.a,{children:Object(W.jsx)(De.a,{id:"alert-dialog-description",children:e.dialogMessage})}),Object(W.jsxs)(Ue.a,{children:[Object(W.jsx)(O.a,{onClick:function(){t(),e.history.push("/")},color:"primary",children:"Yes"}),Object(W.jsx)(O.a,{onClick:t,color:"secondary",autoFocus:!0,children:"No"})]})]})})})),Re=s(405),_e=Object(K.a)({formClass:{display:"flex",flexWrap:"wrap",flexDirection:"column",padding:"10px"}});var Fe=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=_e(),s=Object(c.useState)(e.description),n=Object(j.a)(s,2),r=n[0],i=n[1],a=Object(c.useState)(e.severity),o=Object(j.a)(a,2),d=o[0],b=o[1],h=Object(c.useState)(e.status),p=Object(j.a)(h,2),x=p[0],f=p[1],m=function(t){f(Object(u.a)(Object(u.a)({},x),{},Object(l.a)({},t.target.name,t.target.checked))),e.setStatus(Object(u.a)(Object(u.a)({},x),{},Object(l.a)({},t.target.name,t.target.checked)))},v=function(t){b(Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},t.target.name,t.target.checked))),e.setSeverity(Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},t.target.name,t.target.checked)))},y=Object.entries(d).map((function(e){var t=Object(j.a)(e,2),s=t[0],n=t[1];return Object(W.jsx)(ue.a,{control:Object(W.jsx)(Re.a,{color:"primary",checked:n,onChange:v,name:s}),label:s},s)})),g=Object.entries(x).map((function(e){var t=Object(j.a)(e,2),s=t[0],n=t[1];return Object(W.jsx)(ue.a,{control:Object(W.jsx)(Re.a,{color:"primary",checked:n,onChange:m,name:s}),label:s},s)}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h2",{style:{paddingLeft:"10px"},children:"Apply Filters"}),Object(W.jsxs)("form",{className:t.formClass,onSubmit:function(t){t.preventDefault();var s="&";Object.entries(d).forEach((function(e){var t=Object(j.a)(e,2),n=t[0];t[1]&&(s+="severity=".concat(n,"&"))})),Object.entries(x).forEach((function(e){var t=Object(j.a)(e,2),n=t[0];t[1]&&(s+="status=".concat("InProgress"===n?"In Progress":n,"&"))})),r.length>0?s+="description_like=".concat(r):s=s.slice(0,-1),e.toggleDrawer(!1),e.actions.initIssues(s)},children:[Object(W.jsx)(ne.a,{id:"description",name:"description",label:"Description",value:r,onChange:function(t){i(t.target.value),e.setDescription(t.target.value)}}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{component:"fieldset",children:[Object(W.jsx)(oe.a,{component:"legend",children:"Severity"}),Object(W.jsx)(Ae.a,{className:"col",children:y})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{component:"fieldset",children:[Object(W.jsx)(oe.a,{component:"legend",children:"Status"}),Object(W.jsx)(Ae.a,{children:g})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)("div",{children:[Object(W.jsx)(O.a,{color:"primary",variant:"contained",type:"submit",children:"Apply"}),"\xa0\xa0",Object(W.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){i(""),e.setDescription(""),b({Minor:!1,Major:!1,Critical:!1}),e.setSeverity({Minor:!1,Major:!1,Critical:!1}),f({Open:!1,InProgress:!1,Closed:!1}),e.setStatus({Open:!1,InProgress:!1,Closed:!1}),e.toggleDrawer(!1),e.actions.initIssues("")},children:"Clear"})]})]})]})}))),We=Object(K.a)({nav:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",paddingBottom:0},navRight:{display:"flex",paddingRight:"10px",justifyContent:"space-between"},link:{color:"#3F51B5"},list:{width:250}});var qe=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=We(),s=Object(c.useState)(!0),n=Object(j.a)(s,2),r=n[0],i=n[1],a=Object(c.useState)(!1),o=Object(j.a)(a,2),d=o[0],b=o[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),f=x[0],m=x[1],v=Object(c.useState)({Minor:!1,Major:!1,Critical:!1}),y=Object(j.a)(v,2),g=y[0],C=y[1],w=Object(c.useState)({Open:!1,InProgress:!1,Closed:!1}),S=Object(j.a)(w,2),I=S[0],N=S[1],D=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&b(e)}},A=Object(c.useState)({description:!0,severity:!0,status:!0,createdDate:!0,resolvedDate:!0,lastUpdated:!0,lastUpdatedBy:!0,loggedBy:!0}),k=Object(j.a)(A,2),U=k[0],B=k[1],M=function(e){B(Object(u.a)(Object(u.a)({},U),{},Object(l.a)({},e.target.name,e.target.checked)))},E=Object(c.useState)(!1),L=Object(j.a)(E,2),z=L[0],T=L[1],Y=function(){T(!1)},P=Object(c.useState)(!1),R=Object(j.a)(P,2),_=R[0],F=R[1],q=Object(c.useState)("Not Authenticated"),V=Object(j.a)(q,1)[0],G=Object(c.useState)("You are not logged in, head over to login page for performing this action?"),J=Object(j.a)(G,1)[0];return Object(W.jsx)("div",{children:Object(W.jsxs)(p.e,{children:[Object(W.jsxs)(p.c,{path:"/issues",exact:!0,children:[Object(W.jsxs)("div",{className:t.nav,children:[Object(W.jsx)("h2",{children:"All Issues"}),Object(W.jsxs)("div",{className:t.navRight,children:[Object(W.jsx)(O.a,{id:"listViewButton",onClick:function(){return i(!1)},size:"small",color:"primary",startIcon:Object(W.jsx)(xe.a,{}),children:"List View"}),"\xa0\xa0",Object(W.jsx)(O.a,{id:"gridViewButton",onClick:function(){return i(!0)},size:"small",color:"primary",startIcon:Object(W.jsx)(me.a,{}),children:"Grid View"}),"\xa0\xa0",Object(W.jsx)(O.a,{id:"customizeButton",onClick:function(){T(!0)},size:"small",color:"primary",startIcon:Object(W.jsx)(ye.a,{}),children:"Customize Fields"}),Object(W.jsx)(O.a,{id:"searchButton",onClick:D(!0),size:"small",color:"primary",startIcon:Object(W.jsx)(Ce.a,{}),children:"Apply Filters"})]})]}),d&&Object(W.jsx)(we.a,{open:d,onClose:D(!1),onOpen:D(!0),children:Object(W.jsx)("div",{className:t.list,role:"presentation",children:Object(W.jsx)("div",{className:t.nav,children:Object(W.jsx)(Fe,{toggleDrawer:b,description:f,setDescription:m,status:I,setStatus:N,severity:g,setSeverity:C})})})}),e.issues&&0===e.issues.length?Object(W.jsx)("p",{style:{padding:10},children:"No issues yet!"}):r?Object(W.jsx)(Ye,{setAlertOpen:F,issues:e.issues,customization:U}):Object(W.jsx)(H,{setAlertOpen:F,issues:e.issues,customization:U}),z&&Object(W.jsxs)(Se.a,{open:z,onClose:Y,"aria-labelledby":"form-dialog-title",children:[Object(W.jsx)(Ie.a,{id:"form-dialog-title",children:"Customization Area"}),Object(W.jsxs)(Ne.a,{children:[Object(W.jsx)(De.a,{children:"Toggle the field you don't want to view..."}),Object(W.jsx)(Ae.a,{children:Object.keys(U).map((function(e){return Object(W.jsx)(ue.a,{disabled:"description"===e,control:Object(W.jsx)(ke.a,{checked:U[e],onChange:M,name:e,color:"primary"}),label:e[0].toUpperCase()+e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").substring(1)},e)}))})]}),Object(W.jsxs)(Ue.a,{children:[Object(W.jsx)(O.a,{onClick:Y,color:"primary",children:"Close"}),Object(W.jsx)(O.a,{onClick:Y,color:"primary",children:"Save"})]})]}),_&&Object(W.jsx)(Pe,{alertOpen:_,setAlertOpen:F,dialogTitle:V,dialogMessage:J})]}),Object(W.jsx)(p.c,{path:"/issues/view/:id",exact:!0,children:Object(W.jsx)(se,{issues:e.issues})}),Object(W.jsx)(p.c,{path:"/issues/edit/:id",exact:!0,children:Object(W.jsx)(he,{})})]})})}))),Ve=function(){return Object(W.jsxs)("div",{style:{padding:"10px"},children:[Object(W.jsxs)("p",{children:[Object(W.jsx)("b",{children:"Application Name-"})," Issue Tracker"]}),Object(W.jsx)("p",{children:Object(W.jsx)("b",{children:"Front End-"})}),Object(W.jsxs)("ul",{children:[Object(W.jsx)("li",{children:"React JS"}),Object(W.jsx)("li",{children:"Material UI"}),Object(W.jsx)("li",{children:"Redux"}),Object(W.jsx)("li",{children:"React Router"})]}),Object(W.jsx)("p",{children:Object(W.jsx)("b",{children:"Back End-"})}),Object(W.jsx)("ul",{children:Object(W.jsx)("li",{children:"JSON Server"})}),Object(W.jsx)("p",{children:Object(W.jsx)("b",{children:"Features/Functionality-"})}),Object(W.jsxs)("ul",{children:[Object(W.jsx)("li",{children:"View all issues and filter them without logging in"}),Object(W.jsx)("li",{children:"Sign up to Add or Edit a issue"}),Object(W.jsx)("li",{children:"After logging in you can Add, View, Edit, Delete issues"}),Object(W.jsx)("li",{children:"Customize the fields you want to view"}),Object(W.jsx)("li",{children:"Manage issues in 2 views- Grid View and List View"}),Object(W.jsx)("li",{children:"View chart of all the issues, severity and status wise"}),Object(W.jsx)("li",{children:"Apply search filter on description, status and severity"}),Object(W.jsx)("li",{children:"and many more..."})]}),Object(W.jsx)("p",{children:Object(W.jsx)("b",{children:"Design and Developed by-"})}),Object(W.jsx)("p",{children:"Yash Patni"}),Object(W.jsx)("a",{href:"mailto:yash.s.patni@gmail.com",target:"_blank",rel:"noreferrer",children:"yash.s.patni@gmail.com"})]})},Ge=(s(223),s(176)),Je=s(120),Ze=s(401),$e=Object(K.a)((function(e){return{formControl:{minWidth:350}}})),He=Je.a({description:Je.b("Description").required("Issue description is required")});var Ke=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){var t=$e(),s=i.a.useState(!1),n=Object(j.a)(s,2),r=n[0],c=n[1],a=Object(Ge.a)({initialValues:{description:"",severity:"Minor",status:"Open"},validationSchema:He,onSubmit:function(t){c(!1);var s={id:Object(Ze.a)(),description:a.values.description,severity:a.values.severity,status:a.values.status,createdDate:be()().format("MMMM Do YYYY"),lastUpdated:be()().format("MMMM Do YYYY"),resolvedDate:null,loggedBy:e.users.id,lastUpdatedBy:e.users.id,loggedByName:e.users.firstName+" "+e.users.lastName,lastUpdatedByName:e.users.firstName+" "+e.users.lastName};e.actions.addIssue(s),e.history.push("/issues")}});return e.users.isAuthenticated?Object(W.jsxs)("div",{style:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(W.jsx)("h1",{children:"Add Issue"}),Object(W.jsxs)("form",{onSubmit:a.handleSubmit,onChange:function(){return c(!0)},autoComplete:"off",children:[Object(W.jsx)(ne.a,{className:t.formControl,id:"description",label:"Description",name:"description",value:a.values.description,onChange:a.handleChange,error:a.touched.description&&Boolean(a.errors.description),helperText:a.touched.description&&a.errors.description}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{className:t.formControl,children:[Object(W.jsx)(ce.a,{id:"severity",children:"Severity"}),Object(W.jsxs)(ie.a,{labelId:"Severity",id:"severity",name:"severity",value:a.values.severity,onChange:a.handleChange,children:[Object(W.jsx)(ae.a,{value:"Critical",children:"Critical"},"1"),Object(W.jsx)(ae.a,{value:"Major",children:"Major"},"2"),Object(W.jsx)(ae.a,{value:"Minor",children:"Minor"},"3")]})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsxs)(re.a,{component:"fieldset",children:[Object(W.jsx)(oe.a,{component:"legend",children:"Status"}),Object(W.jsx)(le.a,{"aria-label":"Status",name:"status",value:a.values.status,onChange:a.handleChange,children:Object(W.jsx)(ue.a,{value:"Open",control:Object(W.jsx)(je.a,{}),label:"Open"})})]}),Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)(O.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",children:"Submit"})]}),Object(W.jsx)(p.a,{when:r,message:"All changes will be lost, Are you sure you want to continue ?"})]}):Object(W.jsx)(p.b,{to:"/"})}))),Qe="https://my-json-server.typicode.com/yash0patni/issue_tracker_server",Xe=function(){function e(){Object(I.a)(this,e)}return Object(N.a)(e,null,[{key:"loginUser",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(Qe,"/users/").concat(t.id));case 3:n=e.sent,t.password===n.data.password?s(n.data):s({error:"Password is incorrect"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({error:"Email id doesn't exist, please check or signup"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,s){return e.apply(this,arguments)}}()},{key:"signupUser",value:function(){var e=Object(S.a)(w.a.mark((function e(t,s){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(Qe,"/users"),t,{"Content-Type":"application/json"});case 3:n=e.sent,s(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({error:"Email id already in use or Already registered"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,s){return e.apply(this,arguments)}}()}]),e}();function et(e){return function(t){return Xe.loginUser(e,(function(e){return t({type:z,userData:e})}))}}function tt(e){return function(t){return Xe.signupUser(e,(function(e){return t({type:Y,userData:e})}))}}function st(){return function(e){return e({type:T})}}var nt=s(397),rt=s(398),ct=s(177),it=s(325),at=s(173),ot=s.n(at),lt=Object(K.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navbarItem:{color:"white",marginRight:"10px",textDecoration:"none",fontSize:"14px",fontFamily:"Helvetica"},isActive:{color:"red"}}}));var ut=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))(Object(p.i)((function(e){var t=lt(),s=i.a.useState(null),n=Object(j.a)(s,2),r=n[0],c=n[1],a=Boolean(r),o=function(){c(null)};return Object(W.jsx)("div",{className:t.root,children:Object(W.jsx)(nt.a,{position:"static",children:Object(W.jsxs)(rt.a,{children:[Object(W.jsx)(ee.a,{variant:"h6",className:t.title,children:Object(W.jsx)(h.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Issue Tracker"})}),Object(W.jsx)(h.c,{className:t.navbarItem,activeClassName:t.isActive,to:"/about",children:"ABOUT"}),Object(W.jsx)(h.c,{className:t.navbarItem,activeClassName:t.isActive,to:"/issues",children:"ISSUES"}),Object(W.jsx)(h.c,{id:"addIssue",onClick:function(){e.users.isAuthenticated||alert("You are not logged in hence redirecting to login page")},className:t.navbarItem,activeClassName:t.isActive,to:"/addIssue",children:"ADD ISSUE"}),e.users.isAuthenticated&&Object(W.jsxs)("div",{id:"userMenu",children:[Object(W.jsx)(it.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(W.jsx)(ot.a,{})}),Object(W.jsxs)(ct.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:o,children:[Object(W.jsx)(ae.a,{onClick:function(){o(),e.history.push("/profile")},children:e.users.firstName}),Object(W.jsx)(ae.a,{onClick:function(){o(),e.userActions.logoutUser()},children:"Logout"})]})]})]})})})}))),jt=s(399),dt=s(400),bt=Object(K.a)((function(){return{root:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},formControl:{minWidth:350,display:"flex",flexDirection:"column"}}}));var Ot=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))(Object(p.i)((function(e){var t=bt(),s=Object(c.useState)(!0),n=Object(j.a)(s,2),r=n[0],i=n[1],a=Object(c.useState)({id:"",password:""}),o=Object(j.a)(a,2),d=o[0],b=o[1],p=function(e){b(Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(S.a)(w.a.mark((function t(s){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(!0),s.preventDefault(),console.log(e),e.userActions.loginUser(d);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsxs)("form",{onSubmit:x,className:t.formControl,children:[Object(W.jsx)(ne.a,{id:"email",label:"Email",type:"email",name:"id",value:d.id,onChange:p,required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"password",label:"Password",type:"password",name:"password",value:d.password,onChange:p,required:!0}),Object(W.jsx)("br",{}),e.users.error?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(jt.a,{in:r,children:Object(W.jsx)(dt.a,{severity:"error",onClose:function(){i(!1)},children:e.users.error})}),Object(W.jsx)("br",{})]}):null,Object(W.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]}),Object(W.jsxs)("p",{children:["Don't have an account? ",Object(W.jsx)(h.b,{to:"/signup",children:"Signup here"})]})]})}))),ht=s(119),pt=Object(K.a)((function(e){return{root:{display:"flex",flexDirection:"column",padding:10},chart:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:"10px"}}}));var xt=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))(Object(p.i)((function(e){var t=pt(),s=e.issues,n=s.filter((function(e){return"Open"===e.status})).length,r=s.filter((function(e){return"In Progress"===e.status})).length,c=s.filter((function(e){return"Closed"===e.status})).length,i=s.filter((function(e){return"Minor"===e.severity})).length,a=s.filter((function(e){return"Major"===e.severity})).length,o=s.filter((function(e){return"Critical"===e.severity})).length;return Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsx)("p",{children:"Issues Chart"}),Object(W.jsxs)("div",{className:t.chart,children:[Object(W.jsx)(ht.a,{width:"80vw",chartType:"PieChart",loader:Object(W.jsx)("div",{children:"Loading Chart"}),data:[["Status","Counts"],["Open",n],["In Progress",r],["Closed",c]],options:{title:"Status wise chart"},rootProps:{"data-testid":"1"}}),Object(W.jsx)(ht.a,{width:"80vw",chartType:"PieChart",loader:Object(W.jsx)("div",{children:"Loading Chart"}),data:[["Severity","Counts"],["Minor",i],["Major",a],["Critical",o]],options:{title:"Severity wise chart"},rootProps:{"data-testid":"1"}})]})]})}))),ft=Object(K.a)((function(e){return{root:{display:"flex",flexDirection:"column",padding:10},nav:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",paddingBottom:0},navRight:{display:"flex",paddingRight:"10px",justifyContent:"space-between"}}}));var mt=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))(Object(p.i)((function(e){var t=ft();return Object(W.jsx)("div",{className:t.root,children:e.users.isAuthenticated?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:t.nav,children:[Object(W.jsxs)("p",{children:["Welcome ",e.users.firstName]}),Object(W.jsx)("div",{className:t.navRight,children:Object(W.jsx)(O.a,{color:"secondary",onClick:e.userActions.logoutUser,children:"Logout"})})]}),Object(W.jsx)(xt,{})]}):Object(W.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"80vh"},children:[Object(W.jsx)("p",{children:"Welcome Guest,"}),Object(W.jsxs)("p",{children:["Login here with Email- ",Object(W.jsx)("b",{children:"john.doe@test.com"})," and Password- ",Object(W.jsx)("b",{children:"Test@123"})]}),Object(W.jsx)(Ot,{}),Object(W.jsx)("p",{children:"or use the tracker with limited access."}),Object(W.jsxs)("p",{children:[Object(W.jsx)("b",{children:"Note- "}),"As the Backend is hosted on JSON Server hence whatever data you entered and saved will be present only locally."]})]})})}))),vt=Object(K.a)((function(e){return{root:{display:"flex",alignItems:"center",height:"80vh",justifyContent:"center",flexDirection:"column"},formControl:{minWidth:350,display:"flex",flexDirection:"column"}}}));var yt=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))(Object(p.i)((function(e){var t=vt(),s=Object(c.useState)(!0),n=Object(j.a)(s,2),r=n[0],i=n[1],a=Object(c.useState)({id:"",password:"",firstName:"",lastName:"",contact:"",location:""}),o=Object(j.a)(a,2),d=o[0],b=o[1],p=function(e){b(Object(u.a)(Object(u.a)({},d),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(W.jsxs)("div",{className:t.root,children:[Object(W.jsxs)("form",{onSubmit:function(t){i(!0),t.preventDefault(),e.userActions.signupUser(d),b({id:"",password:"",firstName:"",lastName:"",contact:"",location:""})},className:t.formControl,children:[Object(W.jsx)("br",{}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"fname",name:"firstName",value:d.firstName,onChange:p,label:"First Name",type:"text",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"lname",name:"lastName",value:d.lastName,onChange:p,label:"Last Name",type:"text",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"contact",name:"contact",value:d.contact,onChange:p,label:"Contact",type:"number",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"location",name:"location",value:d.location,onChange:p,label:"Location",type:"text",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"email",name:"id",value:d.id,onChange:p,label:"Email",type:"email",required:!0}),Object(W.jsx)("br",{}),Object(W.jsx)(ne.a,{id:"password",name:"password",value:d.password,onChange:p,label:"Password",type:"password",required:!0}),Object(W.jsx)("br",{}),e.users.error?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(jt.a,{in:r,children:Object(W.jsx)(dt.a,{severity:"error",onClose:function(){i(!1)},children:e.users.error})}),Object(W.jsx)("br",{})]}):e.users.id?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(jt.a,{in:r,children:Object(W.jsx)(dt.a,{severity:"success",onClose:function(){i(!1)},children:"Successfully registered"})}),Object(W.jsx)("br",{})]}):null,Object(W.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Signup"})]}),Object(W.jsxs)("p",{children:["Already have an account? ",Object(W.jsx)(h.b,{to:"/",children:"Login here"})]})]})})));var gt=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e)}}))(Object(p.i)((function(e){return e.users.isAuthenticated?Object(W.jsxs)("div",{style:{padding:"10px"},children:[Object(W.jsx)("h2",{style:{textAlign:"center"},children:"My profile"}),Object(W.jsxs)("p",{children:["Name: ",e.users.firstName+" "+e.users.lastName]}),Object(W.jsxs)("p",{children:["Email: ",e.users.id]}),Object(W.jsxs)("p",{children:["Contact: ",e.users.contact]}),Object(W.jsxs)("p",{children:["Location: ",e.users.location]})]}):Object(W.jsx)(p.b,{to:"/"})})));var Ct=Object(g.b)((function(e){return{issues:e.issues,users:e.users}}),(function(e){return{actions:Object(y.b)(n,e),userActions:Object(y.b)(r,e)}}))((function(e){return Object(W.jsxs)("div",{style:{width:"100%"},children:[Object(W.jsx)(ut,{}),Object(W.jsxs)(p.e,{children:[Object(W.jsx)(p.c,{path:"/",exact:!0,children:Object(W.jsx)(mt,{})}),Object(W.jsx)(p.c,{path:"/signup",children:Object(W.jsx)(yt,{})}),Object(W.jsx)(p.c,{path:"/about",children:Object(W.jsx)(Ve,{})}),Object(W.jsx)(p.c,{path:"/issues",children:Object(W.jsx)(qe,{})}),Object(W.jsx)(p.c,{path:"/addIssue",children:Object(W.jsx)(Ke,{})}),Object(W.jsx)(p.c,{path:"/profile",children:Object(W.jsx)(gt,{})})]})]})})),wt=s(32),St=[];var It={isAuthenticated:!1};var Nt=Object(y.c)({issues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return t.issues;case M:return[Object.assign({},t.issue)].concat(Object(wt.a)(e));case L:var s=e.filter((function(e){return e.id!==t.issue.id}));return console.log("action ",t),[Object.assign({},t.issue)].concat(Object(wt.a)(s));case E:var n=e.filter((function(e){return e.id!==t.id}));return Object(wt.a)(n);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return console.log("loginUser",t),t.userData.error?Object(u.a)({isAuthenticated:!1},t.userData):Object(u.a)({isAuthenticated:!0},t.userData);case Y:return console.log("signupUser",t),Object(u.a)({isAuthenticated:!1},t.userData);case T:return console.log("logoutUser",t),{isAuthenticated:!1};default:return e}}}),Dt=s(175),At=function(e){return Object(y.d)(Nt,e,Object(y.a)(Dt.a))}({issues:St,users:It});At.dispatch(F("")),o.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(h.a,{children:Object(W.jsx)(g.a,{store:At,children:Object(W.jsx)(Ct,{})})})}),document.getElementById("root"))}},[[322,1,2]]]);
//# sourceMappingURL=main.bae70d6c.chunk.js.map