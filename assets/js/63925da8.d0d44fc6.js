"use strict";(self.webpackChunkover_docs=self.webpackChunkover_docs||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},598:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980);var u=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(void 0===(r=(e,t)=>e.value===t.value)&&(r=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>r(t,e)))!==t)));var n,r;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:r}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??h;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function g(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},6715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(598),l=n(5162);const i={title:"Welcome, Developers! \ud83d\ude80",description:"Get started with OverProtocol development! Learn how to set up nodes, access RPC endpoints, configure the Dolphin Testnet, and prepare your developer account with OVER tokens. Build scalable, decentralized applications with ease on OverProtocol\u2019s developer-friendly ecosystem.",lang:"en"},s=void 0,u={unversionedId:"developers/index",id:"developers/index",title:"Welcome, Developers! \ud83d\ude80",description:"Get started with OverProtocol development! Learn how to set up nodes, access RPC endpoints, configure the Dolphin Testnet, and prepare your developer account with OVER tokens. Build scalable, decentralized applications with ease on OverProtocol\u2019s developer-friendly ecosystem.",source:"@site/docs/developers/index.md",sourceDirName:"developers",slug:"/developers/",permalink:"/developers/",draft:!1,editUrl:"https://github.com/overprotocol/overprotocol.github.io/edit/develop/docs/developers/index.md",tags:[],version:"current",frontMatter:{title:"Welcome, Developers! \ud83d\ude80",description:"Get started with OverProtocol development! Learn how to set up nodes, access RPC endpoints, configure the Dolphin Testnet, and prepare your developer account with OVER tokens. Build scalable, decentralized applications with ease on OverProtocol\u2019s developer-friendly ecosystem.",lang:"en"},sidebar:"developersSidebar",next:{title:"Build Your Contract",permalink:"/developers/build-your-contract/"}},c={},p=[{value:"Setting Up a Node with RPC Access",id:"setting-up-a-node-with-rpc-access",level:2},{value:"Network Configurations",id:"network-configurations",level:2},{value:"Preparing an Account with OVER Tokens",id:"preparing-an-account-with-over-tokens",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the OverProtocol developer documentation\u2014a space where innovation meets blockchain. Whether you\u2019re new to blockchain development or an experienced builder, this guide will equip you with everything you need to start creating applications on OverProtocol."),(0,a.kt)("p",null,"OverProtocol empowers developers with a robust, scalable, and inclusive blockchain ecosystem. From setting up your first node to deploying smart contracts, let\u2019s get you started on your journey to building the decentralized future."),(0,a.kt)("h2",{id:"setting-up-a-node-with-rpc-access"},"Setting Up a Node with RPC Access"),(0,a.kt)("p",null,"To interact with the OverProtocol network, you'll need access to a node capable of handling Remote Procedure Calls (RPC). This will enable you to query and interact with the network, deploy contracts, and perform transactions programmatically."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options for Setting Up a Node"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Running Your Own Node"),": Setting up and maintaining your own node gives you full control over network interactions. This can be done by ",(0,a.kt)("a",{parentName:"li",href:"/operators/run-a-node"},"following the setup instructions"),". Running your own node is beneficial for extensive development work that requires high levels of data integrity and privacy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Using Public Nodes"),": If you prefer not to manage your own node, you can use publicly available RPC endpoints. These are provided by various services and can be accessed easily, though they might come with limitations on the rate of requests and reduced control over the node configuration.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"network-configurations"},"Network Configurations"),(0,a.kt)(o.Z,{groupId:"network",defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"mainnet",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network"),(0,a.kt)("td",{parentName:"tr",align:null},"OverProtocol Mainnet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://rpc.overprotocol.com/"},"https://rpc.overprotocol.com/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,a.kt)("td",{parentName:"tr",align:null},"54176")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Currency symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"OVER")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://scan.over.network/"},"https://scan.over.network/")))))),(0,a.kt)(l.Z,{value:"testnet",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When working with OverProtocol, especially in a testnet environment, it's important to note that testnet configurations and details may change at any time. This variability is typical of test environments, which are often updated or reset to test new features and improvements in the blockchain protocol.")),(0,a.kt)("p",null,"The Dolphin testnet operates with the goal of providing an environment identical to that of the mainnet. Additionally, this testnet serves the role of applying and testing updates before they are implemented on the mainnet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Network"),(0,a.kt)("td",{parentName:"tr",align:null},"OverProtocol Dolphin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://rpc.dolphin.overprotocol.com/"},"https://rpc.dolphin.overprotocol.com/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,a.kt)("td",{parentName:"tr",align:null},"541764")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Currency symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"OVER")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Block Explorer URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://dolphin-scan.over.network/"},"https://dolphin-scan.over.network/"))))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"preparing-an-account-with-over-tokens"},"Preparing an Account with OVER Tokens"),(0,a.kt)("p",null,"Developing on OverProtocol requires interacting with the network, which include transaction fees or testing token transactions. Therefore, it's essential to have an account loaded with OVER tokens."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Setting Up Your Developer Account"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Acquire OVER Tokens"),": If you are working on the main network, you'll need to acquire OVER tokens, which can be done through exchanges or from other token holders."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Testnet Tokens"),": For testing purposes, you can use the OverProtocol testnet, where tokens can often be acquired for free from a faucet that distributes small amounts of tokens for development use. ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/overprotocol"},"Join developer community")," and feel free to ask some tokens!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure Your Account"),": Ensure that your account is secure, especially if you are working with real tokens. Utilize hardware wallets or secure key management solutions to protect your private keys and account credentials.")))}h.isMDXComponent=!0}}]);