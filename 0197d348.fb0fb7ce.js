(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(1),c=t(7),o=(t(0),t(117)),a={id:"doc-api-use-counter",title:"useCounter",sidebar_label:"useCounter"},u={id:"doc-api-use-counter",title:"useCounter",description:"A hook that tracks state of a number",source:"@site/docs\\doc-api-use-counter.md",permalink:"/react-grapnel/docs/doc-api-use-counter",editUrl:"https://github.com/Gherciu/react-grapnel/edit/master/www/docs/doc-api-use-counter.md",sidebar_label:"useCounter",sidebar:"docs",previous:{title:"API Introduction",permalink:"/react-grapnel/docs/doc-api-introduction"}},i=[],s={rightToc:i};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A hook that tracks state of a number"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It can be used directly from ",Object(o.b)("inlineCode",{parentName:"li"},"react-grapnel")," package or installed separately via npm runing: ",Object(o.b)("inlineCode",{parentName:"li"},"npm i react-grapnel-use-counter"))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport useCounter from 'react-grapnel-use-counter'\n\nconst App = () => {\n  const { count, increment, decrement } = useCounter(0)\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n    </div>\n  )\n}\n")),Object(o.b)("p",null,"Or use via cdn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--index.html--\x3e\n<script src="https://cdn.jsdelivr.net/npm/react-grapnel-use-counter@latest/build/index.js"><\/script>\n<script>\n  const App = () => {\n    const { count, increment, decrement } = reactGrapnelUseCounter(0)\n    return (\n      <div>\n        <button onClick={decrement}>-</button>\n        <span>{count}</span>\n        <button onClick={increment}>+</button>\n      </div>\n    )\n  }\n<\/script>\n')))}p.isMDXComponent=!0}}]);