(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{103:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return o})),i.d(n,"metadata",(function(){return s})),i.d(n,"rightToc",(function(){return r})),i.d(n,"default",(function(){return p}));var t=i(1),a=i(6),d=(i(0),i(117)),o={id:"doc-api-use-window-size",title:"useWindowSize",sidebar_label:"useWindowSize"},s={id:"doc-api-use-window-size",title:"useWindowSize",description:"This hook returns an object containing the window's width and height. If executed server-side (no window object) the value of width and height will be undefined.",source:"@site/docs\\doc-api-use-window-size.md",permalink:"/react-grapnel/docs/doc-api-use-window-size",editUrl:"https://github.com/Gherciu/react-grapnel/edit/master/www/docs/doc-api-use-window-size.md",sidebar_label:"useWindowSize",sidebar:"docs",previous:{title:"useCounter",permalink:"/react-grapnel/docs/doc-api-use-counter"}},r=[],c={rightToc:r};function p(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(d.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(d.b)("p",null,"This hook returns an object containing the window's width and height. If executed server-side (no window object) the value of width and height will be undefined."),Object(d.b)("ul",null,Object(d.b)("li",{parentName:"ul"},"It can be used directly from ",Object(d.b)("inlineCode",{parentName:"li"},"react-grapnel")," package or installed separately via npm runing: ",Object(d.b)("inlineCode",{parentName:"li"},"npm i react-grapnel-use-window-size"))),Object(d.b)("pre",null,Object(d.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport useWindowSize from 'react-grapnel-use-window-size'\n\nconst App = () => {\n  const { width, height } = useWindowSize()\n  return (\n    <div>\n      <span>Window width: {width}</span>\n      <span>Window height: {height}</span>\n    </div>\n  )\n}\n")),Object(d.b)("p",null,"Or use via cdn:"),Object(d.b)("pre",null,Object(d.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'\x3c!--index.html--\x3e\n<script src="https://cdn.jsdelivr.net/npm/react-grapnel-use-window-size@latest/build/index.js"><\/script>\n<script>\n  const App = () => {\n    const { width, height } = reactGrapnelUseWindowSize()\n    return (\n      <div>\n        <span>Window width: {width}</span>\n        <span>Window height: {height}</span>\n      </div>\n    )\n  }\n<\/script>\n')))}p.isMDXComponent=!0}}]);