(function(){"use strict";var e={5188:function(e,a,h){var s=h(9242),d=h(3396),t=h(7139),o=h.p+"img/palette_icon.01a3e65e.svg";const r={class:"w-screen pb-10 bg-gradient-to-bl from-slate-900 from-10% via-slate-800 via-20% to-slate-900 to-40%"},x={class:"container w-10/12 mx-auto pt-12"},c=(0,d._)("div",{class:"flex flex-row gap-2 items-baseline"},[(0,d._)("img",{class:"w-8 inline",src:o,width:"40"}),(0,d._)("span",{class:"text-3xl text-white font-bold"},"Tailwind Color Picker")],-1),l=(0,d._)("h4",{class:"text-slate-600 text-base font-bold border-b border-slate-700 pb-4 mb-5"},"A color picker for Tailwind CSS",-1),f={id:"controls mt-3 "},n={key:0,class:"border-b border-slate-700 pb-6 text-slate-500"},i={class:"table-fixed text-left"},b=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th",null,"Combo"),(0,d._)("th",null,"Prefix"),(0,d._)("th",null,"Example")])],-1),u={class:"pe-6"},p={class:"pe-6"},m={key:0},k={key:1},g={class:"grid grid-col gap-x-2 gap-y-8 sm:grid-cols-1 mt-4 border-b border-slate-700 pb-12 mb-5"},v={class:"text-center text-slate-500"},w=(0,d._)("span",null,"Copyright © Graham Coulby",-1),y={class:"block"},_={href:"https://thenounproject.com/coquet_adrien/",target:"_blank",ref:"noopener noreferrer"};function C(e,a,h,s,o,C){const D=(0,d.up)("ButtonControl"),P=(0,d.up)("KeyCombo"),O=(0,d.up)("FormControl"),j=(0,d.up)("ColorPalette");return(0,d.wg)(),(0,d.iD)("div",r,[(0,d._)("div",x,[c,l,(0,d._)("div",f,[(0,d.Wm)(D,{class:"w-40 mb-4",onClick:e.toggleControls},{default:(0,d.w5)((()=>[(0,d.Uk)((0,t.zw)(e.showControls?"Hide":"Show")+" Controls ",1)])),_:1},8,["onClick"]),e.showControls?((0,d.wg)(),(0,d.iD)("div",n,[(0,d._)("table",i,[b,(0,d._)("tbody",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.combos,(a=>((0,d.wg)(),(0,d.iD)("tr",{key:a.id},[(0,d._)("td",u,[(0,d.Wm)(P,{combo:a},null,8,["combo"])]),(0,d._)("td",p,[(0,d.Wm)(O,{value:a.prefix,onInput:h=>e.updatePrefix(h,a.id)},null,8,["value","onInput"])]),"!hex"===a.prefix?((0,d.wg)(),(0,d.iD)("td",m,"#64748b")):((0,d.wg)(),(0,d.iD)("td",k,(0,t.zw)(a.prefix)+"slate-500",1))])))),128))])])])):(0,d.kq)("",!0)]),(0,d._)("div",g,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.colorPalettes,((a,h)=>((0,d.wg)(),(0,d.j4)(j,{colorPalette:a,key:`palettes_${h}`,keyCombos:e.combos},null,8,["colorPalette","keyCombos"])))),128))]),(0,d._)("div",v,[w,(0,d._)("span",y,[(0,d.Uk)("Title 'color swatch' icon by "),(0,d._)("a",_,"Adrien Coquet",512)])])])])}var D=h(4870);const P={class:"select-none"},O={class:"text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5"},j={class:"text-green-500 dark:text-green-500"},q={class:"grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0"},Z={class:"flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5"},K=["onClick"],N={class:"px-0.5"},$={class:"w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white"},z={class:"text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs"};function H(e,a,h,s,o,r){return(0,d.wg)(),(0,d.iD)("div",P,[(0,d._)("div",O,[(0,d.Uk)((0,t.zw)(e.colorPalette.name)+" ",1),(0,d._)("span",j,(0,t.zw)(e.copied?"  ✅":""),1)]),(0,d._)("div",q,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.colorPalette.colors,((a,h)=>((0,d.wg)(),(0,d.iD)("div",{class:"relative flex",key:`color_palette_${h}`},[(0,d._)("div",Z,[(0,d._)("div",{class:(0,t.C_)(["h-10","w-10","rounded","dark:ring-1","dark:ring-inset","dark:ring-white/10","sm:w-full"]),style:(0,t.j5)(`background-color: ${a.hex}`),onClick:h=>e.copyColor(h,a)},null,12,K),(0,d._)("div",N,[(0,d._)("div",$,(0,t.zw)(a.shade),1),(0,d._)("div",z,(0,t.zw)(a.hex),1)])])])))),128))])])}var I=(0,d.aZ)({props:{colorPalette:{type:Object,required:!0},keyCombos:{type:Array,required:!0}},setup(e){const a=(0,D.iH)(!1),h=(h,s)=>{h.preventDefault(),h.stopPropagation();let d=h.ctrlKey,t=h.shiftKey,o=h.altKey,r=e.keyCombos,x=r.find((e=>e.ctrl===d&&e.shift===t&&e.alt===o));if(!x)return;let c="!hex"!==x.prefix?`${x.prefix}${e.colorPalette.name}-${s.shade}`:s.hex;navigator.clipboard.writeText(c),a.value=!0,setTimeout((()=>{a.value=!1}),1e3)};return{copyColor:h,copied:a}}}),S=h(89);const T=(0,S.Z)(I,[["render",H]]);var A=T;const W={class:"mb-4"},F={key:1,class:"inline-block mx-2"},G={key:3,class:"inline-block mx-2"},U={key:5,class:"inline-block mx-2"};function Y(e,a,h,s,t,o){const r=(0,d.up)("KeyIcon");return(0,d.wg)(),(0,d.iD)("div",W,[e.combo.ctrl?((0,d.wg)(),(0,d.j4)(r,{key:0,keyName:"ctrl"})):(0,d.kq)("",!0),e.combo.ctrl?((0,d.wg)(),(0,d.iD)("span",F,"+")):(0,d.kq)("",!0),e.combo.shift?((0,d.wg)(),(0,d.j4)(r,{key:2,keyName:"shift"})):(0,d.kq)("",!0),e.combo.shift?((0,d.wg)(),(0,d.iD)("span",G,"+")):(0,d.kq)("",!0),e.combo.alt?((0,d.wg)(),(0,d.j4)(r,{key:4,keyName:"alt"})):(0,d.kq)("",!0),e.combo.alt?((0,d.wg)(),(0,d.iD)("span",U,"+")):(0,d.kq)("",!0),(0,d.Wm)(r,{keyName:"click"})])}var B=h.p+"img/click_icon.4c58a1ab.svg";const E={key:0,class:"w-8 inline",src:B,width:"40"},J={key:1,class:"border border-slate-300 w-fit p-2 rounded-lg text-slate-300 inline-block"};function M(e,a,h,s,o,r){return"click"==e.keyName?((0,d.wg)(),(0,d.iD)("img",E)):((0,d.wg)(),(0,d.iD)("div",J,(0,t.zw)(e.keyName),1))}var L=(0,d.aZ)({props:{keyName:{type:String,required:!0}},setup(){return{}}});const Q=(0,S.Z)(L,[["render",M]]);var R=Q,V=h(3029),X=(0,d.aZ)({props:{combo:{type:Object,required:!0}},setup(){const e=(0,V.Z)();return{keyId:e}},components:{KeyIcon:R}});const ee=(0,S.Z)(X,[["render",Y]]);var ae=ee;function he(e,a,h,s,t,o){return(0,d.wg)(),(0,d.iD)("input",(0,d.dG)({class:["w-11/12","mx-auto","p-2","border","border-stone-800","bg-white","dark:bg-stone-950","text-gray-800","dark:text-white","rounded-md","focus:outline-none"]},e.$attrs),null,16)}var se={inheritAttrs:!1};const de=(0,S.Z)(se,[["render",he]]);var te=de,oe=(0,d.aZ)({name:"App",components:{ColorPalette:A,KeyCombo:ae,FormControl:te},setup(){const e=(0,D.iH)(!1),a=()=>{e.value=!e.value},h=(0,D.iH)([{id:"click",ctrl:!1,alt:!1,shift:!1,prefix:""},{id:"ctrl_click",ctrl:!0,alt:!1,shift:!1,prefix:"bg-"},{id:"alt_click",ctrl:!1,alt:!0,shift:!1,prefix:"text-"},{id:"shift_click",ctrl:!1,alt:!1,shift:!0,prefix:"border-"},{id:"ctrl_alt_click",ctrl:!0,alt:!0,shift:!1,prefix:"dark:bg-"},{id:"ctrl_shift_click",ctrl:!0,alt:!1,shift:!0,prefix:"dark:text-"},{id:"alt_shift_click",ctrl:!1,alt:!0,shift:!0,prefix:"dark:border-"},{id:"ctrl_alt_shift_click",ctrl:!0,alt:!0,shift:!0,prefix:"!hex"}]),s=(e,a)=>{const s=e.target,d=h.value.find((e=>e.id===a));d&&(d.prefix=s.value),h.value=[...h.value],localStorage.setItem("tailwind_color_picker_combos",JSON.stringify(h.value))},d=(0,D.iH)([{name:"slate",colors:[{shade:50,hex:"#f8fafc"},{shade:100,hex:"#f1f5f9"},{shade:200,hex:"#e2e8f0"},{shade:300,hex:"#cbd5e1"},{shade:400,hex:"#94a3b8"},{shade:500,hex:"#64748b"},{shade:600,hex:"#475569"},{shade:700,hex:"#334155"},{shade:800,hex:"#1e293b"},{shade:900,hex:"#0f172a"},{shade:950,hex:"#020617"}]},{name:"gray",colors:[{shade:50,hex:"#f9fafb"},{shade:100,hex:"#f3f4f6"},{shade:200,hex:"#e5e7eb"},{shade:300,hex:"#d1d5db"},{shade:400,hex:"#9ca3af"},{shade:500,hex:"#6b7280"},{shade:600,hex:"#4b5563"},{shade:700,hex:"#374151"},{shade:800,hex:"#1f2937"},{shade:900,hex:"#111827"},{shade:950,hex:"#030712"}]},{name:"zinc",colors:[{shade:50,hex:"#fafafa"},{shade:100,hex:"#f4f4f5"},{shade:200,hex:"#e4e4e7"},{shade:300,hex:"#d4d4d8"},{shade:400,hex:"#a1a1aa"},{shade:500,hex:"#71717a"},{shade:600,hex:"#52525b"},{shade:700,hex:"#3f3f46"},{shade:800,hex:"#27272a"},{shade:900,hex:"#18181b"},{shade:950,hex:"#09090b"}]},{name:"neutral",colors:[{shade:50,hex:"#fafafa"},{shade:100,hex:"#f5f5f5"},{shade:200,hex:"#e5e5e5"},{shade:300,hex:"#d4d4d4"},{shade:400,hex:"#a3a3a3"},{shade:500,hex:"#737373"},{shade:600,hex:"#525252"},{shade:700,hex:"#404040"},{shade:800,hex:"#262626"},{shade:900,hex:"#171717"},{shade:950,hex:"#0a0a0a"}]},{name:"stone",colors:[{shade:50,hex:"#fafaf9"},{shade:100,hex:"#f5f5f4"},{shade:200,hex:"#e7e5e4"},{shade:300,hex:"#d6d3d1"},{shade:400,hex:"#a8a29e"},{shade:500,hex:"#78716c"},{shade:600,hex:"#57534e"},{shade:700,hex:"#44403c"},{shade:800,hex:"#292524"},{shade:900,hex:"#1c1917"},{shade:950,hex:"#0c0a09"}]},{name:"red",colors:[{shade:50,hex:"#fef2f2"},{shade:100,hex:"#fee2e2"},{shade:200,hex:"#fecaca"},{shade:300,hex:"#fca5a5"},{shade:400,hex:"#f87171"},{shade:500,hex:"#ef4444"},{shade:600,hex:"#dc2626"},{shade:700,hex:"#b91c1c"},{shade:800,hex:"#991b1b"},{shade:900,hex:"#7f1d1d"},{shade:950,hex:"#450a0a"}]},{name:"orange",colors:[{shade:50,hex:"#fff7ed"},{shade:100,hex:"#ffedd5"},{shade:200,hex:"#fed7aa"},{shade:300,hex:"#fdba74"},{shade:400,hex:"#fb923c"},{shade:500,hex:"#f97316"},{shade:600,hex:"#ea580c"},{shade:700,hex:"#c2410c"},{shade:800,hex:"#9a3412"},{shade:900,hex:"#7c2d12"},{shade:950,hex:"#431407"}]},{name:"amber",colors:[{shade:50,hex:"#fffbeb"},{shade:100,hex:"#fef3c7"},{shade:200,hex:"#fde68a"},{shade:300,hex:"#fcd34d"},{shade:400,hex:"#fbbf24"},{shade:500,hex:"#f59e0b"},{shade:600,hex:"#d97706"},{shade:700,hex:"#b45309"},{shade:800,hex:"#92400e"},{shade:900,hex:"#78350f"},{shade:950,hex:"#451a03"}]},{name:"yellow",colors:[{shade:50,hex:"#fefce8"},{shade:100,hex:"#fef9c3"},{shade:200,hex:"#fef08a"},{shade:300,hex:"#fde047"},{shade:400,hex:"#facc15"},{shade:500,hex:"#eab308"},{shade:600,hex:"#ca8a04"},{shade:700,hex:"#a16207"},{shade:800,hex:"#854d0e"},{shade:900,hex:"#713f12"},{shade:950,hex:"#422006"}]},{name:"lime",colors:[{shade:50,hex:"#f7fee7"},{shade:100,hex:"#ecfccb"},{shade:200,hex:"#d9f99d"},{shade:300,hex:"#bef264"},{shade:400,hex:"#a3e635"},{shade:500,hex:"#84cc16"},{shade:600,hex:"#65a30d"},{shade:700,hex:"#4d7c0f"},{shade:800,hex:"#3f6212"},{shade:900,hex:"#365314"},{shade:950,hex:"#1a2e05"}]},{name:"green",colors:[{shade:50,hex:"#f0fdf4"},{shade:100,hex:"#dcfce7"},{shade:200,hex:"#bbf7d0"},{shade:300,hex:"#86efac"},{shade:400,hex:"#4ade80"},{shade:500,hex:"#22c55e"},{shade:600,hex:"#16a34a"},{shade:700,hex:"#15803d"},{shade:800,hex:"#166534"},{shade:900,hex:"#14532d"},{shade:950,hex:"#052e16"}]},{name:"emerald",colors:[{shade:50,hex:"#ecfdf5"},{shade:100,hex:"#d1fae5"},{shade:200,hex:"#a7f3d0"},{shade:300,hex:"#6ee7b7"},{shade:400,hex:"#34d399"},{shade:500,hex:"#10b981"},{shade:600,hex:"#059669"},{shade:700,hex:"#047857"},{shade:800,hex:"#065f46"},{shade:900,hex:"#064e3b"},{shade:950,hex:"#022c22"}]},{name:"teal",colors:[{shade:50,hex:"#f0fdfa"},{shade:100,hex:"#ccfbf1"},{shade:200,hex:"#99f6e4"},{shade:300,hex:"#5eead4"},{shade:400,hex:"#2dd4bf"},{shade:500,hex:"#14b8a6"},{shade:600,hex:"#0d9488"},{shade:700,hex:"#0f766e"},{shade:800,hex:"#115e59"},{shade:900,hex:"#134e4a"},{shade:950,hex:"#042f2e"}]},{name:"cyan",colors:[{shade:50,hex:"#ecfeff"},{shade:100,hex:"#cffafe"},{shade:200,hex:"#a5f3fc"},{shade:300,hex:"#67e8f9"},{shade:400,hex:"#22d3ee"},{shade:500,hex:"#06b6d4"},{shade:600,hex:"#0891b2"},{shade:700,hex:"#0e7490"},{shade:800,hex:"#155e75"},{shade:900,hex:"#164e63"},{shade:950,hex:"#083344"}]},{name:"sky",colors:[{shade:50,hex:"#f0f9ff"},{shade:100,hex:"#e0f2fe"},{shade:200,hex:"#bae6fd"},{shade:300,hex:"#7dd3fc"},{shade:400,hex:"#38bdf8"},{shade:500,hex:"#0ea5e9"},{shade:600,hex:"#0284c7"},{shade:700,hex:"#0369a1"},{shade:800,hex:"#075985"},{shade:900,hex:"#0c4a6e"},{shade:950,hex:"#082f49"}]},{name:"blue",colors:[{shade:50,hex:"#eff6ff"},{shade:100,hex:"#dbeafe"},{shade:200,hex:"#bfdbfe"},{shade:300,hex:"#93c5fd"},{shade:400,hex:"#60a5fa"},{shade:500,hex:"#3b82f6"},{shade:600,hex:"#2563eb"},{shade:700,hex:"#1d4ed8"},{shade:800,hex:"#1e40af"},{shade:900,hex:"#1e3a8a"},{shade:950,hex:"#172554"}]},{name:"indigo",colors:[{shade:50,hex:"#eef2ff"},{shade:100,hex:"#e0e7ff"},{shade:200,hex:"#c7d2fe"},{shade:300,hex:"#a5b4fc"},{shade:400,hex:"#818cf8"},{shade:500,hex:"#6366f1"},{shade:600,hex:"#4f46e5"},{shade:700,hex:"#4338ca"},{shade:800,hex:"#3730a3"},{shade:900,hex:"#312e81"},{shade:950,hex:"#1e1b4b"}]},{name:"violet",colors:[{shade:50,hex:"#f5f3ff"},{shade:100,hex:"#ede9fe"},{shade:200,hex:"#ddd6fe"},{shade:300,hex:"#c4b5fd"},{shade:400,hex:"#a78bfa"},{shade:500,hex:"#8b5cf6"},{shade:600,hex:"#7c3aed"},{shade:700,hex:"#6d28d9"},{shade:800,hex:"#5b21b6"},{shade:900,hex:"#4c1d95"},{shade:950,hex:"#2e1065"}]},{name:"purple",colors:[{shade:50,hex:"#faf5ff"},{shade:100,hex:"#f3e8ff"},{shade:200,hex:"#e9d5ff"},{shade:300,hex:"#d8b4fe"},{shade:400,hex:"#c084fc"},{shade:500,hex:"#a855f7"},{shade:600,hex:"#9333ea"},{shade:700,hex:"#7e22ce"},{shade:800,hex:"#6b21a8"},{shade:900,hex:"#581c87"},{shade:950,hex:"#3b0764"}]},{name:"fuchsia",colors:[{shade:50,hex:"#fdf4ff"},{shade:100,hex:"#fae8ff"},{shade:200,hex:"#f5d0fe"},{shade:300,hex:"#f0abfc"},{shade:400,hex:"#e879f9"},{shade:500,hex:"#d946ef"},{shade:600,hex:"#c026d3"},{shade:700,hex:"#a21caf"},{shade:800,hex:"#86198f"},{shade:900,hex:"#701a75"},{shade:950,hex:"#4a044e"}]},{name:"pink",colors:[{shade:50,hex:"#fdf2f8"},{shade:100,hex:"#fce7f3"},{shade:200,hex:"#fbcfe8"},{shade:300,hex:"#f9a8d4"},{shade:400,hex:"#f472b6"},{shade:500,hex:"#ec4899"},{shade:600,hex:"#db2777"},{shade:700,hex:"#be185d"},{shade:800,hex:"#9d174d"},{shade:900,hex:"#831843"},{shade:950,hex:"#500724"}]},{name:"rose",colors:[{shade:50,hex:"#fff1f2"},{shade:100,hex:"#ffe4e6"},{shade:200,hex:"#fecdd3"},{shade:300,hex:"#fda4af"},{shade:400,hex:"#fb7185"},{shade:500,hex:"#f43f5e"},{shade:600,hex:"#e11d48"},{shade:700,hex:"#be123c"},{shade:800,hex:"#9f1239"},{shade:900,hex:"#881337"},{shade:950,hex:"#4c0519"}]}]),t=localStorage.getItem("tailwind_color_picker_combos");return t&&(h.value=JSON.parse(t)),{colorPalettes:d,showControls:e,toggleControls:a,combos:h,updatePrefix:s}}});const re=(0,S.Z)(oe,[["render",C]]);var xe=re;function ce(e,a,h,s,t,o){return(0,d.wg)(),(0,d.iD)("button",(0,d.dG)({class:["mx-auto","p-2","border","border-stone-800","bg-sky-500","dark:bg-indigo-900","text-gray-800","dark:text-white","hover:bg-sky-600","dark:hover:bg-indigo-800","rounded-md","focus:outline-none"]},e.$attrs),[(0,d.WI)(e.$slots,"default")],16)}var le={inheritAttrs:!1};const fe=(0,S.Z)(le,[["render",ce]]);var ne=fe;function ie(e){e.component("FormControl",te),e.component("ButtonControl",ne)}const be=(0,s.ri)(xe);ie(be),be.mount("#app")}},a={};function h(s){var d=a[s];if(void 0!==d)return d.exports;var t=a[s]={exports:{}};return e[s].call(t.exports,t,t.exports,h),t.exports}h.m=e,function(){var e=[];h.O=function(a,s,d,t){if(!s){var o=1/0;for(l=0;l<e.length;l++){s=e[l][0],d=e[l][1],t=e[l][2];for(var r=!0,x=0;x<s.length;x++)(!1&t||o>=t)&&Object.keys(h.O).every((function(e){return h.O[e](s[x])}))?s.splice(x--,1):(r=!1,t<o&&(o=t));if(r){e.splice(l--,1);var c=d();void 0!==c&&(a=c)}}return a}t=t||0;for(var l=e.length;l>0&&e[l-1][2]>t;l--)e[l]=e[l-1];e[l]=[s,d,t]}}(),function(){h.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(a,{a:a}),a}}(),function(){h.d=function(e,a){for(var s in a)h.o(a,s)&&!h.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){h.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){h.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){h.p="/tailwind-color-picker/"}(),function(){var e={143:0};h.O.j=function(a){return 0===e[a]};var a=function(a,s){var d,t,o=s[0],r=s[1],x=s[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(d in r)h.o(r,d)&&(h.m[d]=r[d]);if(x)var l=x(h)}for(a&&a(s);c<o.length;c++)t=o[c],h.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return h.O(l)},s=self["webpackChunkcolor_picker"]=self["webpackChunkcolor_picker"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=h.O(void 0,[998],(function(){return h(5188)}));s=h.O(s)})();
//# sourceMappingURL=app.ede197e3.js.map