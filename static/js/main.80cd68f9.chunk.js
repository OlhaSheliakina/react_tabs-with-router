(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(8),i=(c(28),c(29),c(30),c(2)),b=c(17),j=c.n(b),r=(c(0),c(4)),l=function(e){var t=e.tabs,c=e.activeTabId,a=function(e){return e.id===c};return Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":a(e)}),children:Object(r.jsx)(n.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})})},d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.q)().tabId,t=d.find((function(t){return t.id===e}))||null;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(l,{tabs:d,activeTabId:e}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})},h=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:h,children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:h,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsx)(i.b,{path:"/tabs",children:Object(r.jsx)(i.b,{path:":tabId?",element:Object(r.jsx)(o,{})})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.80cd68f9.chunk.js.map