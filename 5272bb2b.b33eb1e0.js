(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{298:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return m})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(806)),c={id:"importcommand",title:"Class: ImportCommand",sidebar_label:"ImportCommand"},i={unversionedId:"api/classes/importcommand",id:"version-4.2/api/classes/importcommand",isDocsHomePage:!1,title:"Class: ImportCommand",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/importcommand.md",slug:"/api/classes/importcommand",permalink:"/docs/api/classes/importcommand",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/importcommand.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603875307,sidebar_label:"ImportCommand",sidebar:"version-4.2/API",previous:{title:"Class: IdentityMap",permalink:"/docs/api/classes/identitymap"},next:{title:"Class: InvalidFieldNameException",permalink:"/docs/api/classes/invalidfieldnameexception"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"describe",id:"describe",children:[]}]},{value:"Methods",id:"methods",children:[{value:"handler",id:"handler",children:[]}]}],l={rightToc:m};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ImportCommand"))),Object(o.b)("h2",{id:"implements"},"Implements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CommandModule")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"command"},"command"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"command"),': string = "database:import ',"<",'file>"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/ImportCommand.ts#L9"}),"packages/cli/src/commands/ImportCommand.ts:9"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"describe"},"describe"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"describe"),': string = "Imports the SQL file to the database"'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/ImportCommand.ts#L10"}),"packages/cli/src/commands/ImportCommand.ts:10"))),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"handler"},"handler"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"handler"),"(",Object(o.b)("inlineCode",{parentName:"p"},"args"),": Arguments): Promise","<","void>"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/cli/src/commands/ImportCommand.ts#L15"}),"packages/cli/src/commands/ImportCommand.ts:15"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"args")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arguments")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}p.isMDXComponent=!0},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,u=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(u,i(i({ref:t},l),{},{components:r})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);