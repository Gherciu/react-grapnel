(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return i})),e.d(t,"metadata",(function(){return a})),e.d(t,"rightToc",(function(){return u})),e.d(t,"default",(function(){return d}));var r=e(1),c=e(7),o=(e(0),e(117)),i={id:"doc-introduction",title:"Introduction",sidebar_label:"Introduction"},a={id:"doc-introduction",title:"Introduction",description:"\u2693 `react-grapnel` is a set of useful React hooks",source:"@site/docs\\doc-introduction.md",permalink:"/react-grapnel/docs/doc-introduction",editUrl:"https://github.com/Gherciu/react-grapnel/edit/master/www/docs/doc-introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"API Introduction",permalink:"/react-grapnel/docs/doc-api-introduction"}},u=[],s={rightToc:u};function d(n){var t=n.components,e=Object(c.a)(n,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u2693 ",Object(o.b)("inlineCode",{parentName:"p"},"react-grapnel")," is a set of useful React hooks"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install: ",Object(o.b)("inlineCode",{parentName:"li"},"npm i react-grapnel"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useCounter } from 'react-grapnel'\n// Or install needed hooks separately\n// import useCounter from 'react-grapnel-use-counter'\n\nconst App = () => {\n  const { count, increment, decrement } = useCounter(0)\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"Or use via cdn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--index.html--\x3e\n<script src="https://cdn.jsdelivr.net/npm/react-grapnel@latest/build/index.js"><\/script>\n<script>\n  const App = () => {\n    const { count, increment, decrement } = reactGrapnel.useCounter(0)\n    return (\n      <div>\n        <button onClick={decrement}>-</button>\n        <span>{count}</span>\n        <button onClick={increment}>+</button>\n      </div>\n    )\n  }\n<\/script>\n')))}d.isMDXComponent=!0}}]);