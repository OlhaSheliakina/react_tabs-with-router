(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),n=c.n(a),s=c(8),i=c(2),b=(c(28),c(29),c(30),c(17)),j=c.n(b),r=c(3),l=function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(s.c,{to:"/",className:l,children:"Home"}),Object(r.jsx)(s.c,{to:"/tabs",className:l,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i.b,{})})})]})},o=(c(0),function(e){var t=e.tabs,c=e.activeTabId,a=function(e){return e.id===c};return Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":a(e)}),children:Object(r.jsx)(s.b,{to:"../".concat(e.id),children:e.title})},e.id)}))})})}),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e=Object(i.r)().tabId,t=h.find((function(t){return t.id===e}))||null;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(o,{tabs:h,activeTabId:e}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"}),Object(r.jsx)(i.b,{})]})},O=function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(d,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsx)(i.c,{path:"tabs",children:Object(r.jsx)(i.c,{path:":tabId?",element:Object(r.jsx)(x,{})})}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.db397f56.chunk.js.map