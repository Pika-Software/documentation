(self.webpackChunkpika_soft=self.webpackChunkpika_soft||[]).push([[435],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4353:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],o={title:"CreateTable"},u={unversionedId:"industrial_wars/sqlite/global/createtable",id:"industrial_wars/sqlite/global/createtable",isDocsHomePage:!1,title:"CreateTable",description:"`jsx",source:"@site/docs/industrial_wars/02-sqlite/02-global/03-createtable.md",sourceDirName:"industrial_wars/02-sqlite/02-global",slug:"/industrial_wars/sqlite/global/createtable",permalink:"/industrial_wars/sqlite/global/createtable",editUrl:"https://github.com/pika-software/pika-docs/edit/main/docs/industrial_wars/02-sqlite/02-global/03-createtable.md",version:"current",lastUpdatedBy:"Retro",lastUpdatedAt:1623250535,formattedLastUpdatedAt:"6/9/2021",sidebarPosition:3,frontMatter:{title:"CreateTable"},sidebar:"industrial_wars",previous:{title:"Collumn",permalink:"/industrial_wars/sqlite/global/collumn"},next:{title:"DB.New",permalink:"/industrial_wars/sqlite/global/db.new"}},p=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:[]},{value:"\u0410\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b",id:"\u0430\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b",children:[]},{value:"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442",id:"\u0432\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"RF.SQLite.CreateTable(name, collumns[, other_options])\n")),(0,l.kt)("h3",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 sqlite. \u0422\u0430\u043a\u0436\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u043e\u043c \u043c\u0438\u0433\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0435\u0441\u043b\u0438 \u043d\u0430\u0434\u043e."),(0,l.kt)("h3",{id:"\u0430\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b"},"\u0410\u0433\u0440\u0443\u043c\u0435\u043d\u0442\u044b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0422\u0438\u043f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collumns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0421\u043c\u043e\u0442\u0440\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"td",href:"collumn"},(0,l.kt)("strong",{parentName:"a"},"Collumn")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"other_options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 sql \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. ",(0,l.kt)("inlineCode",{parentName:"td"},"CREATE TABLE <name> (<collumns>, <other_options>)"))))),(0,l.kt)("h3",{id:"\u0432\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442"},"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"../db-table/intro"},(0,l.kt)("inlineCode",{parentName:"a"},"DBTable"))," - \u041a\u043b\u0430\u0441\u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0434\u0430\u0442\u0430\u0431\u0430\u0437\u044b. \u041d\u0443\u0436\u0435\u043d \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0432\u0437\u0430\u0439\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439.")),(0,l.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"player_money")," \u0441 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"id64")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"money")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local t = RF.SQLite.CreateTable('player_money', {\n    RF.SQLite.Collumn('id64', 'TEXT', nil, true, true), -- id64 TEXT NOT NULL UNIQUE\n    RF.SQLite.Collumn('money', 'INTEGER', 5000),        -- money INTEGER DEFAULT 5000\n})\n")))}s.isMDXComponent=!0}}]);