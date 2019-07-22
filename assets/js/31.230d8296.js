(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{291:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型守卫","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型守卫")]),t._v(" "),a("h2",{attrs:{id:"为什么-x-instanceof-foo-不能将-x-的类型缩小至-foo？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-x-instanceof-foo-不能将-x-的类型缩小至-foo？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么 "),a("code",[t._v("x instanceof Foo")]),t._v(" 不能将 "),a("code",[t._v("x")]),t._v(" 的类型缩小至 "),a("code",[t._v("Foo")]),t._v("？")]),t._v(" "),a("p",[t._v("这取决于 "),a("code",[t._v("x")]),t._v(" 是什么？如果 "),a("code",[t._v("x")]),t._v(" 的类型不与 "),a("code",[t._v("Foo")]),t._v(" 兼容，那么缩小 "),a("code",[t._v("x")]),t._v(" 的类型就毫无意义，所以我们不会这么做。")]),t._v(" "),a("p",[t._v("当你发现 "),a("code",[t._v("x")]),t._v(" 具有任何类型时，我们对此推荐的做法是：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doIt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assume 'x' is a well-known object which")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we know how to handle specifically")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Treat 'x' as a primitive")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你将在 TypeScript 中看到这些代码（它们可能早于联合类型被发现），或者是一些从 JavaScript 移植到 TypeScript 的代码，如果我们把 "),a("code",[t._v("x")]),t._v(" 缩小至 "),a("code",[t._v("Object")]),t._v("，那么你将只能做更少的事情。使用任何不在 "),a("code",[t._v("Object")]),t._v(" 中的属性都将导致错误。这不仅适用于 "),a("code",[t._v("Object")]),t._v("，对于具有已定义属性集的任何其他类型都是如此。")])])},[],!1,null,null,null);s.default=n.exports}}]);