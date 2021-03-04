(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=(n(0),n(111));const o={id:"responsiveness",title:"Responsiveness",slug:"/responsiveness"},i={unversionedId:"responsiveness",id:"responsiveness",isDocsHomePage:!1,title:"Responsiveness",description:"Overview",source:"@site/docs/responsiveness.md",slug:"/responsiveness",permalink:"/Indigo-Design-System/build/docs/responsiveness",version:"current",sidebar:"docs",previous:{title:"Container",permalink:"/Indigo-Design-System/build/docs/container"},next:{title:"Button",permalink:"/Indigo-Design-System/build/docs/button"}},c=[{value:"Overview",id:"overview",children:[{value:"Breakpoints",id:"breakpoints",children:[]},{value:"Mobile Columns",id:"mobile-columns",children:[]}]}],l={toc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Use responsive classes to define how the grid behaves at different screen sizes."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"breakpoints"},"Breakpoints"),Object(a.b)("p",null,"Under the grid system, each column's width can be defined for a specific viewport size: ",Object(a.b)("strong",{parentName:"p"},"mobile, tablet, desktop, widescreen and fullhd.")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Screensize"),Object(a.b)("th",{parentName:"tr",align:null},"Breakpoint"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"is-x-mobile"),Object(a.b)("td",{parentName:"tr",align:null},"Up tp ",Object(a.b)("strong",{parentName:"td"},"768px"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"is-x-tablet"),Object(a.b)("td",{parentName:"tr",align:null},"Between ",Object(a.b)("strong",{parentName:"td"},"768px")," to ",Object(a.b)("strong",{parentName:"td"},"1023px"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"is-x-desktop"),Object(a.b)("td",{parentName:"tr",align:null},"Between ",Object(a.b)("strong",{parentName:"td"},"1024px")," to ",Object(a.b)("strong",{parentName:"td"},"1215px"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"is-x-widescreen"),Object(a.b)("td",{parentName:"tr",align:null},"Between ",Object(a.b)("strong",{parentName:"td"},"1216px")," to ",Object(a.b)("strong",{parentName:"td"},"1407px"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"is-x-fullhd"),Object(a.b)("td",{parentName:"tr",align:null},"1408px and above")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'<div class="sgds-container">\n  <div class="row is-mobile">\n    <div class="col is-11-mobile is-7-tablet is-5-desktop is-3-widescreen is-1-fullhd">\n      <br />\n      <code>is-11-mobile</code>\n      <br />\n      <code>is-7-tablet</code>\n      <br />\n      <code>is-5-desktop</code>\n      <br />\n      <code>is-3-widescreen</code>\n      <br />\n      <code>is-1-fullhd</code>\n    </div>\n    <div class="col">Col</div>\n  </div>\n</div>\n')),Object(a.b)("hr",null),Object(a.b)("h3",{id:"mobile-columns"},"Mobile Columns"),Object(a.b)("p",null,"By default, columns ",Object(a.b)("code",null,"col")," are stacked on top of each other on mobile. To have columns displayed in a row on mobile, add the ",Object(a.b)("code",null,"is-mobile")," class to the ",Object(a.b)("code",null,"row")," container:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'<div class="sgds-container">\n  <div class="row is-mobile">\n    <div class="col">1</div>\n    <div class="col">1</div>\n    <div class="col">1</div>\n    <div class="col">1</div>\n  </div>\n</div>\n')),Object(a.b)("hr",null))}s.isMDXComponent=!0}}]);