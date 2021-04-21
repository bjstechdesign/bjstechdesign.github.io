import{S as e,d as t,e as s,f as a,r as l,o as r,c as n,w as o,a as i,D as c,g as d,h as u,M as m,i as g,j as f,k as x,l as h,m as p,n as y,F as v,p as b,T as w,t as k,q as j,P as M,s as _,u as S,v as D}from"./vendor.4af1b955.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,r)=>{const n=new URL(e,a);if(self[t].moduleMap[n])return s(self[t].moduleMap[n]);const o=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),l(i)},onload(){s(self[t].moduleMap[n]),l(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const P={components:{Switch:e,SwitchGroup:t,SwitchLabel:s},setup:()=>({enabled:a(!1)}),methods:{onchanged:function(e){this.enabled?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}}},I={class:"flex items-center"},B=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})],-1);P.render=function(e,t,s,a,c,d){const u=l("SwitchLabel"),m=l("Switch"),g=l("SwitchGroup");return r(),n(g,null,{default:o((()=>[i("div",I,[i(u,{class:"mr-4 text-gray-400"},{default:o((()=>[B])),_:1}),i(m,{modelValue:a.enabled,"onUpdate:modelValue":t[1]||(t[1]=e=>a.enabled=e),onClick:d.onchanged,class:[a.enabled?"bg-blue-600":"bg-gray-200","relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"]},{default:o((()=>[i("span",{class:[a.enabled?"translate-x-6":"translate-x-1","inline-block w-4 h-4 transition-transform transform bg-white rounded-full"]},null,2)])),_:1},8,["modelValue","onClick","class"])])])),_:1})};var L="/assets/logo.00b61ac3.svg";const C=[{name:"Dashboard",href:"#",current:!0},{name:"Team",href:"#",current:!1},{name:"Projects",href:"#",current:!1},{name:"Calendar",href:"#",current:!1}],R={name:"Dashboard",components:{Disclosure:c,DisclosureButton:d,DisclosurePanel:u,DarkModeSelector:P,Menu:m,MenuButton:g,MenuItem:f,MenuItems:x,BellIcon:h,MenuIcon:p,XIcon:y},setup(){const e=a(!1);return{navigation:C,open:e}}},U={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},O={class:"relative flex items-center justify-between h-16"},V={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},$=i("span",{class:"sr-only"},"Open main menu",-1),z={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},E=i("div",{class:"flex-shrink-0 flex items-center"},[i("a",{href:"/"},[i("img",{class:"block h-8 w-auto",src:L,alt:"Workflow"})])],-1),F={class:"hidden sm:block sm:ml-6"},T={class:"flex space-x-4"},X={class:"pl-6"},A={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},G={class:"bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},W=i("span",{class:"sr-only"},"View notifications",-1),q=i("span",{class:"sr-only"},"Open user menu",-1),J=i("img",{class:"h-8 w-8 rounded-full",src:"/assets/ghost-user.31478213.jpg",alt:""},null,-1),N={class:"px-2 pt-2 pb-3 space-y-1"};R.render=function(e,t,s,a,c,d){const u=l("MenuIcon"),m=l("XIcon"),g=l("DisclosureButton"),f=l("DarkModeSelector"),x=l("BellIcon"),h=l("MenuButton"),p=l("MenuItem"),y=l("MenuItems"),j=l("Menu"),M=l("DisclosurePanel"),_=l("Disclosure");return r(),n(_,{as:"nav",class:"bg-gray-800"},{default:o((({open:e})=>[i("div",U,[i("div",O,[i("div",V,[i(g,{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:o((()=>[$,e?(r(),n(m,{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(r(),n(u,{key:0,class:"block h-6 w-6","aria-hidden":"true"}))])),_:2},1024)]),i("div",z,[E,i("div",F,[i("div",T,[(r(!0),n(v,null,b(a.navigation,(e=>(r(),n("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"],"aria-current":e.current?"page":void 0},k(e.name),11,["href","aria-current"])))),128))])])]),i("div",X,[i(f)]),i("div",A,[i("button",G,[W,i(x,{class:"h-6 w-6","aria-hidden":"true"})]),i(j,{as:"div",class:"ml-3 relative"},{default:o((()=>[i("div",null,[i(h,{class:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"},{default:o((()=>[q,J])),_:1})]),i(w,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o((()=>[i(y,{class:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:o((()=>[i(p,null,{default:o((({active:e})=>[i("a",{href:"#",class:[e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"]},"Your Profile",2)])),_:1}),i(p,null,{default:o((({active:e})=>[i("a",{href:"#",class:[e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"]},"Settings",2)])),_:1}),i(p,null,{default:o((({active:e})=>[i("a",{href:"#",class:[e?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"]},"Sign out",2)])),_:1})])),_:1})])),_:1})])),_:1})])])]),i(M,{class:"sm:hidden"},{default:o((()=>[i("div",N,[(r(!0),n(v,null,b(a.navigation,(e=>(r(),n("a",{key:e.name,href:e.href,class:[e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"],"aria-current":e.current?"page":void 0},k(e.name),11,["href","aria-current"])))),128))])])),_:1})])),_:1})};const Y={props:{title:String,brief:String},data:()=>({})},H={class:"max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-gray-600"},K={class:"md:flex"},Q=i("div",{class:"md:flex-shrink-0"},[i("img",{class:"h-48 w-full object-cover md:w-48",src:"/assets/python.a152d11c.jpg",alt:"Python"})],-1),Z={class:"p-8"},ee={class:"uppercase tracking-wide text-sm text-green-600 dark:text-green-400 font-semibold"},te={href:"#",class:"block mt-1 text-lg leading-tight font-medium text-black hover:underline"},se={class:"mt-2 text-gray-500 dark:text-gray-900"};Y.render=function(e,t,s,a,l,o){return r(),n("div",H,[i("div",K,[Q,i("div",Z,[i("div",ee,k(s.title),1),i("a",te,k(s.brief),1),i("p",se,[j(e.$slots,"default")])])])])};const ae=[],le={name:"Lander",components:{Popover:M,PopoverButton:_,PopoverPanel:S,MenuIcon:p,XIcon:y,DarkModeSelector:P,CaseStudy:Y},setup:()=>({navigation:ae})},re={class:"max-w-7xl mx-auto dark:bg-gray-800"},ne={class:"relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 dark:bg-gray-800"},oe=i("svg",{class:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-1/2 dark:text-gray-800",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},[i("polygon",{points:"50,0 100,0 50,100 0,100"})],-1),ie={class:"relative pt-6 px-4 sm:px-6 lg:px-8 dark:bg-gray-800"},ce={class:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},de={class:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"},ue={class:"flex items-center justify-between w-full md:w-auto"},me=i("a",{href:"#"},[i("span",{class:"sr-only"},"Workflow"),i("img",{class:"h-8 w-auto sm:h-10",src:L})],-1),ge={class:"-mr-2 flex items-center md:hidden"},fe=i("span",{class:"sr-only"},"Open main menu",-1),xe={class:"hidden md:block md:ml-10 md:pr-4 md:space-x-8"},he=i("a",{href:"/dash/",class:"font-medium text-indigo-600 hover:text-indigo-500"},"Dash",-1),pe={class:"pl-6"},ye={class:"rounded-lg shadow-md bg-gray-100 ring-1 ring-black ring-opacity-5 overflow-hidden"},ve={class:"px-5 pt-4 flex items-center justify-between"},be=i("div",null,[i("img",{class:"h-8 w-auto",src:L,alt:""})],-1),we={class:"-mr-2"},ke=i("span",{class:"sr-only"},"Close main menu",-1),je={class:"px-2 pt-2 pb-3 space-y-1"},Me=i("a",{href:"#",class:"block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"}," Log in ",-1),_e=i("main",{class:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 dark:bg-gray-800"},[i("div",{class:"sm:text-center lg:text-left"},[i("h1",{class:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100"},[i("span",{class:"block xl:inline"},"BJS"),D(" "+k(" ")+" "),i("span",{class:"block text-green-500 xl:inline"},"tech design")]),i("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}," We offer profession development services for the Information Technology industry. "),i("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"}," Development ranges from large-scale financial sector web services to fully embedded processor firmware and hardware. "),i("p",{class:"mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"}," Some of our favourite technologies at the moment "),i("ul",{class:"list-disc mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0"},[i("li",null,"Django"),i("li",null,"Python 3.6+"),i("li",null,"C++ (2014+)"),i("li",null,"Vue + Tailwind CSS")])])],-1),Se=i("div",{class:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 dark:bg-gray-800"},[i("img",{class:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:"/assets/michael-dziedzic-AsF0Nadbb18-unsplash.9d666179.jpg",alt:""})],-1);le.render=function(e,t,s,a,c,d){const u=l("MenuIcon"),m=l("PopoverButton"),g=l("DarkModeSelector"),f=l("XIcon"),x=l("PopoverPanel"),h=l("Popover");return r(),n(h,{class:"relative bg-gray-100 overflow-hidden dark:bg-gray-800"},{default:o((()=>[i("div",re,[i("div",ne,[oe,i("div",ie,[i("nav",ce,[i("div",de,[i("div",ue,[me,i("div",ge,[i(m,{class:"bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:o((()=>[fe,i(u,{class:"h-6 w-6","aria-hidden":"true"})])),_:1})])])]),i("div",xe,[(r(!0),n(v,null,b(a.navigation,(e=>(r(),n("a",{key:e.name,href:e.href,class:"font-medium text-gray-500 hover:text-gray-900"},k(e.name),9,["href"])))),128)),he]),i("div",pe,[i(g)])])]),i(w,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:o((()=>[i(x,{focus:"",class:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"},{default:o((()=>[i("div",ye,[i("div",ve,[be,i("div",we,[i(m,{class:"bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:o((()=>[ke,i(f,{class:"h-6 w-6","aria-hidden":"true"})])),_:1})])]),i("div",je,[(r(!0),n(v,null,b(a.navigation,(e=>(r(),n("a",{key:e.name,href:e.href,class:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"},k(e.name),9,["href"])))),128))]),Me])])),_:1})])),_:1}),_e])]),Se])),_:1})};export{R as _,le as a};
