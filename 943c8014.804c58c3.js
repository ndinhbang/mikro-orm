(window.webpackJsonp=window.webpackJsonp||[]).push([[420],{479:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(806)),c={title:"Schema generator"},i={unversionedId:"schema-generator",id:"version-2.7/schema-generator",isDocsHomePage:!1,title:"Schema generator",description:"To generate schema from your entity metadata, you can use SchemaGenerator",source:"@site/versioned_docs/version-2.7/schema-generator.md",slug:"/schema-generator",permalink:"/docs/2.7/schema-generator",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/schema-generator.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1603875307,sidebar:"version-2.7/docs",previous:{title:"Debugging",permalink:"/docs/2.7/debugging"},next:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/2.7/usage-with-sql"}},s=[],p={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To generate schema from your entity metadata, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaGenerator"),"\nhelper. You will need to create simple script where you initialize MikroORM\nlike this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./create-schema.ts"',title:'"./create-schema.ts"'}),"import { MikroORM, SchemaGenerator } from 'mikro-orm';\n\n(async () => {\n  const orm = await MikroORM.init({\n    entities: [Author, Book, ...],\n    dbName: 'your-db-name',\n    // ...\n  });\n  const generator = new SchemaGenerator(orm.em.getDriver(), orm.getMetadata());\n  const dump = generator.generate();\n  console.log(dump);\n  await orm.close(true);\n})();\n")),Object(o.b)("p",null,"Then run this script via ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," (or compile it to plain JS and use ",Object(o.b)("inlineCode",{parentName:"p"},"node"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ ts-node create-schema\n")))}u.isMDXComponent=!0},806:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?a.a.createElement(b,i(i({ref:t},p),{},{components:r})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);