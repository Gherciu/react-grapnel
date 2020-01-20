(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(6),c=(t(0),t(123)),a={id:"doc-introduction",title:"Introduction",sidebar_label:"Introduction"},i={id:"doc-introduction",title:"Introduction",description:"\u2693 `react-grapnel` is a set of useful React hooks",source:"@site/docs\\doc-introduction.md",permalink:"/react-grapnel/docs/doc-introduction",editUrl:"https://github.com/Gherciu/react-grapnel/edit/master/www/docs/doc-introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"API Introduction",permalink:"/react-grapnel/docs/doc-api-introduction"}},u=[],l={rightToc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u2693 ",Object(c.b)("inlineCode",{parentName:"p"},"react-grapnel")," is a set of useful React hooks"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install: ",Object(c.b)("inlineCode",{parentName:"li"},"npm i react-grapnel"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useCounter } from 'react-grapnel'\n// Or install needed hooks separately\n// import useCounter from 'react-grapnel-use-counter'\n\nconst App = () => {\n  const { count, increment, decrement } = useCounter(0)\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n    </div>\n  )\n}\n")),Object(c.b)("p",null,"Or use via cdn:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--index.html--\x3e\n<script src="https://cdn.jsdelivr.net/npm/react-grapnel@latest/build/index.js"><\/script>\n<script>\n  const App = () => {\n    const { count, increment, decrement } = reactGrapnel.useCounter(0)\n    return (\n      <div>\n        <button onClick={decrement}>-</button>\n        <span>{count}</span>\n        <button onClick={increment}>+</button>\n      </div>\n    )\n  }\n<\/script>\n')))}p.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return t?o.a.createElement(m,i({ref:n},l,{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);