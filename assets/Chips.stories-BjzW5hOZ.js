import{r as g,j as e}from"./iframe-DyD5Yel4.js";import{s as We,C as S,I as E}from"./Chip-vxFm-D7d.js";import{c as ze}from"./cx-2dOUpm6k.js";import{u as Oe}from"./mergeRefs-BZQLIp5G.js";import{r as qe}from"./motion-C-Q-avtg.js";import{S as Ke,a as $e}from"./Skeleton-dpQW7cMp.js";import{d as Ze}from"./general-CSE0kF9v.js";import{M as Ge,H as Qe,F as Ue}from"./places-CYDz-5dl.js";import{B as L}from"./Button-grGIhY78.js";const H=g.forwardRef(function({children:a,layout:r="wrap",gap:n,className:o,style:i,role:u="group",...m},x){const d=g.useRef(null),l=Oe(d,x);return Xe(d),e.jsx("div",{ref:l,role:u,className:ze(We.group,o),"data-layout":r,style:n===void 0?i:{...i,"--_gap":`${n}px`},...m,children:a})});function Xe(t){g.useLayoutEffect(()=>{const a=t.current;if(!a||typeof ResizeObserver>"u")return;const r=new WeakMap;let n=a.clientWidth;const o=()=>Array.from(a.children),i=()=>o().forEach(l=>r.set(l,{x:l.offsetLeft,y:l.offsetTop})),u=()=>{const l=qe(a);if(a.clientWidth!==n||l.reduce){n=a.clientWidth,i();return}const Me=l.duration("--chips-motion-reflow-duration",240),Ve=l.value("--chips-motion-reflow-easing","cubic-bezier(0.23, 1, 0.32, 1)");for(const h of o()){const k=r.get(h),I={x:h.offsetLeft,y:h.offsetTop};if(r.set(h,I),!k||k.x===I.x&&k.y===I.y||typeof h.animate!="function")continue;const[Ne=0,Le=0]=(getComputedStyle(h).translate||"").split(" ").map(f=>parseFloat(f)).map(f=>Number.isFinite(f)?f:0);h.getAnimations().forEach(f=>f.id==="chip-reflow"&&f.cancel());const V=k.x+Ne-I.x,N=k.y+Le-I.y;if(Math.abs(V)<.5&&Math.abs(N)<.5)continue;const Pe=h.animate([{translate:`${V}px ${N}px`},{translate:"0px 0px"}],{duration:Me,easing:Ve});Pe.id="chip-reflow"}};i();const m=new ResizeObserver(u),x=()=>o().forEach(l=>m.observe(l));x(),m.observe(a);const d=new MutationObserver(()=>{x(),u()});return d.observe(a,{childList:!0}),()=>{m.disconnect(),d.disconnect()}},[t])}H.__docgenInfo={description:"A row of chips. When a chip changes width (its × comes or goes, a count changes) the chips after it do\nnot jump: they glide from the old place to the new one (FLIP on the `translate` property, so the press\nscale on `transform` keeps working). A chip that wraps to the next line slides there too.",methods:[],displayName:"ChipGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'wrap' | 'scroll'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'scroll'"}]},description:"wrap    rows that wrap, gap `spacing/sm` 8 both ways (Figma «Все фильтры», group «Варианты»);\nscroll  one row that scrolls sideways with 12 px insets (Figma quick filters under the Appbar).",defaultValue:{value:"'wrap'",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"Gap in px. Default 8 (`spacing/sm`); the Figma quick-filter row uses 6, which has no token."},role:{defaultValue:{value:"'group'",computed:!1},required:!1}}};const p=g.forwardRef(function({count:a=0,label:r="Фильтры",skeleton:n=!1,className:o,style:i,id:u,...m},x){if(n)return e.jsx(Ke,{id:u,label:"Загрузка фильтров",className:o,style:{display:"inline-flex",flex:"none",...i},...Je(m),children:e.jsx($e,{width:36,height:36,radius:12})});const d=a>0;return e.jsx(S,{ref:x,id:u,className:o,style:i,icon:e.jsx(Ze,{}),badge:d?a:void 0,selected:d,"aria-label":d?`${r}, выбрано ${a}`:r,...m})});function Je(t){return Object.fromEntries(Object.entries(t).filter(([a])=>a.startsWith("data-")))}p.__docgenInfo={description:"Filter chip (Figma filter-chips 609:10874): a 36 px square with the «sliders» icon that opens all filters; once some\nare applied (Active=True) it turns dark and gets the Indicator with their number, 54 px wide. A Chip without a\nlabel — press, focus, 44 px touch target and motion are the Chip's.\n\nIt is a button that opens a sheet, not a toggle: «selected» only paints it dark, there is no `aria-pressed`.\nWhile `skeleton` is on, `className`, `style`, `id` and `data-*` stay on the placeholder wrapper, so layout code\n(and a ref) keeps working.",methods:[],displayName:"FilterChip",props:{count:{required:!1,tsType:{name:"number"},description:"How many filters are applied (Figma `indicator`). Above 0 the chip turns dark and shows the number.",defaultValue:{value:"0",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Name for screen readers. Default «Фильтры»; the count is added: «Фильтры, выбрано 3».",defaultValue:{value:"'Фильтры'",computed:!1}},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Skeleton=True: a grey shimmering square of the same size while the filters load.",defaultValue:{value:"false",computed:!1}}}};const Ee=t=>e.jsx(Ge,{size:16,...t}),Ae=t=>e.jsx(Ue,{size:16,...t}),M=t=>e.jsx(Qe,{size:16,...t}),T=({children:t,...a})=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",focusable:"false",...a,children:t}),Te=t=>e.jsx(T,{...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.44012 2.33334C4.72241 2.33334 4.05972 2.71791 3.70363 3.34106L2.7187 5.0647L2.42648 4.82119C2.14363 4.58548 1.72325 4.62369 1.48754 4.90655C1.25183 5.1894 1.29005 5.60977 1.5729 5.84548L2.04685 6.24044L1.77221 6.72104C1.48441 7.2247 1.33302 7.79475 1.33302 8.37484V12.3333C1.33302 13.0697 1.92998 13.6667 2.66636 13.6667C3.40274 13.6667 3.99969 13.0697 3.99969 12.3333H11.9997C11.9997 13.0697 12.5966 13.6667 13.333 13.6667C14.0694 13.6667 14.6664 13.0697 14.6664 12.3333V8.37484C14.6664 7.79475 14.515 7.2247 14.2272 6.72104L13.9525 6.24044L14.4265 5.84548C14.7093 5.60977 14.7475 5.1894 14.5118 4.90655C14.2761 4.62369 13.8558 4.58548 13.5729 4.82119L13.2807 5.0647L12.2957 3.34106C11.9397 2.71791 11.277 2.33334 10.5593 2.33334H5.44012ZM11.7583 6.33334L12.2404 5.93161L11.1381 4.00258C11.0194 3.79486 10.7985 3.66667 10.5593 3.66667H5.44012C5.20088 3.66667 4.97999 3.79486 4.86129 4.00258L3.75899 5.93161L4.24106 6.33334H11.7583ZM4.33301 8.33334C3.78072 8.33334 3.33301 8.78105 3.33301 9.33334C3.33301 9.88562 3.78072 10.3333 4.33301 10.3333C4.88529 10.3333 5.33301 9.88562 5.33301 9.33334C5.33301 8.78105 4.88529 8.33334 4.33301 8.33334ZM11.6663 8.33334C11.1141 8.33334 10.6663 8.78105 10.6663 9.33334C10.6663 9.88562 11.1141 10.3333 11.6663 10.3333C12.2186 10.3333 12.6663 9.88562 12.6663 9.33334C12.6663 8.78105 12.2186 8.33334 11.6663 8.33334Z"})}),De=t=>e.jsx(T,{...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.66688 3.99845C2.66383 6.18505 2.66688 8.37221 2.66688 10.559C2.66687 10.9104 2.66686 11.2136 2.68726 11.4633C2.7088 11.7269 2.75634 11.9891 2.88487 12.2413C3.07662 12.6176 3.38258 12.9236 3.7589 13.1153C3.83844 13.1559 3.91897 13.1883 4.00022 13.2145V14C4.00022 14.3682 4.29869 14.6667 4.66688 14.6667C5.03507 14.6667 5.33355 14.3682 5.33355 14V13.3333H10.6669V14C10.6669 14.3682 10.9654 14.6667 11.3335 14.6667C11.7017 14.6667 12.0002 14.3682 12.0002 14V13.2145C12.0815 13.1883 12.162 13.1559 12.2415 13.1153C12.6179 12.9236 12.9238 12.6176 13.1156 12.2413C13.2441 11.9891 13.2916 11.7269 13.3132 11.4633C13.3336 11.2136 13.3336 10.9105 13.3335 10.5591L13.3329 3.96919C13.3297 3.88245 13.3109 3.69171 13.2153 3.44586C13.1046 3.16111 12.8964 2.81865 12.5174 2.49382C11.7642 1.84823 10.4133 1.33333 8.00022 1.33333C5.58711 1.33333 4.23621 1.84823 3.48302 2.49382C3.10405 2.81865 2.89587 3.16111 2.78513 3.44586C2.71667 3.6219 2.67085 3.80904 2.66688 3.99845ZM4.00021 5.06666C4.00021 4.69329 4.00021 4.50661 4.07288 4.364C4.13679 4.23856 4.23878 4.13657 4.36422 4.07266C4.50683 3.99999 4.69351 3.99999 5.06688 3.99999H10.9335C11.3069 3.99999 11.4936 3.99999 11.6362 4.07266C11.7617 4.13657 11.8636 4.23856 11.9276 4.364C12.0002 4.50661 12.0002 4.69329 12.0002 5.06666V6.93333C12.0002 7.3067 12.0002 7.49338 11.9276 7.63599C11.8636 7.76143 11.7617 7.86342 11.6362 7.92733C11.4936 7.99999 11.3069 7.99999 10.9335 7.99999H5.06688C4.69351 7.99999 4.50683 7.99999 4.36422 7.92733C4.23878 7.86342 4.13679 7.76143 4.07288 7.63599C4.00021 7.49338 4.00021 7.3067 4.00021 6.93333V5.06666ZM4.66688 11.3333C5.03507 11.3333 5.33355 11.0349 5.33355 10.6667C5.33355 10.2985 5.03507 9.99999 4.66688 9.99999C4.29869 9.99999 4.00021 10.2985 4.00021 10.6667C4.00021 11.0349 4.29869 11.3333 4.66688 11.3333ZM11.3335 11.3333C11.7017 11.3333 12.0002 11.0349 12.0002 10.6667C12.0002 10.2985 11.7017 9.99999 11.3335 9.99999C10.9654 9.99999 10.6669 10.2985 10.6669 10.6667C10.6669 11.0349 10.9654 11.3333 11.3335 11.3333Z"})}),D=t=>e.jsx(T,{...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.33366 1.33334C3.70185 1.33334 4.00033 1.63182 4.00033 2.00001V5.33334C4.00033 5.82686 4.26846 6.25776 4.66699 6.4883V2.00001C4.66699 1.63182 4.96547 1.33334 5.33366 1.33334C5.70185 1.33334 6.00033 1.63182 6.00033 2.00001V6.4883C6.39886 6.25776 6.66699 5.82686 6.66699 5.33334V2.00001C6.66699 1.63182 6.96547 1.33334 7.33366 1.33334C7.70185 1.33334 8.00033 1.63182 8.00033 2.00001V5.33334C8.00033 6.5759 7.15048 7.61997 6.00033 7.916V14C6.00033 14.3682 5.70185 14.6667 5.33366 14.6667C4.96547 14.6667 4.66699 14.3682 4.66699 14V7.916C3.51684 7.61997 2.66699 6.5759 2.66699 5.33334V2.00001C2.66699 1.63182 2.96547 1.33334 3.33366 1.33334ZM9.33366 2.00001C9.33366 1.63182 9.63214 1.33334 10.0003 1.33334C11.8413 1.33334 13.3337 2.82573 13.3337 4.66668V6.00001C13.3337 7.61265 12.1885 8.95782 10.667 9.26666V14C10.667 14.3682 10.3685 14.6667 10.0003 14.6667C9.63214 14.6667 9.33366 14.3682 9.33366 14V2.00001Z"})}),Re=t=>e.jsx(T,{...t,children:e.jsx("circle",{cx:"8",cy:"8",r:"6.667"})});Ee.__docgenInfo={description:"",methods:[],displayName:"MountEasyIcon"};Ae.__docgenInfo={description:"",methods:[],displayName:"FootIcon"};M.__docgenInfo={description:"",methods:[],displayName:"HotelIcon"};Te.__docgenInfo={description:"",methods:[],displayName:"CarIcon"};De.__docgenInfo={description:"",methods:[],displayName:"BusIcon"};D.__docgenInfo={description:"",methods:[],displayName:"ForkKnifeIcon"};Re.__docgenInfo={description:"Figma default for `Icon right`: Dazzle circle, Style=Solid (13.33 px dot in a 16 px box).",methods:[],displayName:"CircleSolidIcon"};const{expect:c,fn:P,userEvent:A,waitFor:W,within:_e}=__STORYBOOK_MODULE_TEST__,s=({children:t})=>e.jsx("span",{"aria-hidden":"true",children:t}),z={нет:void 0,circle:e.jsx(Re,{}),emoji:e.jsx(s,{children:"🗺️"}),dazzle:e.jsx(D,{})},Ye={title:"Components/Chips",component:S,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=300-6325"}},args:{children:"Экскурсии",icon:"emoji",count:47,trailing:"clear",defaultSelected:!1,disabled:!1,onSelectedChange:P(),onClick:P()},argTypes:{icon:{control:"inline-radio",options:Object.keys(z),mapping:z},trailing:{control:"inline-radio",options:["none","chevron","clear"]},count:{control:"text"},badge:{control:"text"},selected:{control:!1},forcePressed:{control:!1}}},_=({children:t,strong:a})=>e.jsx("span",{className:a?"im-14-m":"im-12-r",style:{color:a?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:t}),He=({children:t,width:a=393})=>e.jsx("div",{style:{width:a,maxWidth:"100%",background:"var(--color-bg-page)",borderRadius:24,overflow:"hidden"},children:t}),C={render:t=>e.jsx(S,{...t},String(t.defaultSelected))};function et(){return e.jsx("span",{"aria-hidden":"true",style:{display:"grid",placeItems:"center",background:"var(--color-bg-accent)",color:"var(--control-text-inverse)",font:"var(--font-im-12-s)"},children:"K"})}const tt=[{name:"Текст",props:{children:"Легко"}},{name:"Иконка",props:{children:"Легко",icon:e.jsx(Ee,{})}},{name:"Эмодзи и счётчик",props:{children:"Экскурсии",icon:e.jsx(s,{children:"🗺️"}),count:47}},{name:"Крестик",props:{children:"Проживание",icon:e.jsx(M,{}),count:12,trailing:"clear"}},{name:"Шеврон",props:{children:"Вид активности",trailing:"chevron"}},{name:"Бейдж (indicator)",props:{children:"Вид активности",badge:2,trailing:"chevron"}},{name:"Аватар (Avatar)",props:{children:"Kettik",avatar:e.jsx(et,{}),count:23}}],R=[{name:"Default"},{name:"Pressed",forcePressed:!0},{name:"Selected",selected:!0},{name:"Selected · Pressed",selected:!0,forcePressed:!0},{name:"Disabled",disabled:!0}],y={name:"Все состояния",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{maxWidth:"100%",overflowX:"auto"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${R.length}, max-content)`,gap:"16px 20px",alignItems:"center",padding:20,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx("span",{}),R.map(t=>e.jsx(_,{strong:!0,children:t.name},t.name)),tt.flatMap(t=>[e.jsx(_,{children:t.name},t.name),...R.map(a=>e.jsx(S,{...t.props,selected:a.selected??!1,forcePressed:a.forcePressed,disabled:a.disabled},t.name+a.name))])]})})},at=[{title:"Вид активности",options:[{label:"Экскурсии",icon:e.jsx(s,{children:"🗺️"})},{label:"Фотосессии",icon:e.jsx(s,{children:"📸"})},{label:"Походы",icon:e.jsx(s,{children:"🏔️"})},{label:"Оздоровление",icon:e.jsx(s,{children:"🧘"})},{label:"Мастер-классы",icon:e.jsx(s,{children:"🎨"})},{label:"Квесты",icon:e.jsx(s,{children:"🧩"})},{label:"Экскурсионные туры",icon:e.jsx(s,{children:"🚌"})},{label:"Активный отдых",icon:e.jsx(s,{children:"🚵"})},{label:"Мероприятия",icon:e.jsx(s,{children:"🎉"})},{label:"Красота",icon:e.jsx(s,{children:"💅"})},{label:"Тур",icon:e.jsx(s,{children:"🧳"})},{label:"Прогулки",icon:e.jsx(s,{children:"🚶"})},{label:"Для детей",icon:e.jsx(s,{children:"🧸"})},{label:"Другое",icon:e.jsx(s,{children:"✨"})}]},{title:"Формат",options:[{label:"Групповой"},{label:"Индивидуальный"}]},{title:"Организатор",options:[{label:"Kettik"},{label:"Too.kg"},{label:"Datka Travel"},{label:"Kyrgyzland"},{label:"Gory Azii"},{label:"Ventura Tours Central Asia"}]},{title:"Способ передвижения",options:[{label:"Пешком",icon:e.jsx(Ae,{})},{label:"На автомобиле",icon:e.jsx(Te,{})},{label:"На автобусе",icon:e.jsx(De,{})}]},{title:"Дополнительно",options:[{label:"Трансфер от отеля",icon:e.jsx(M,{})},{label:"Питание включено",icon:e.jsx(D,{})}]},{title:"Длительность",options:[{label:"До 3 часов"},{label:"3–6 часов"},{label:"Весь день"},{label:"Несколько дней"}]}];function nt(){const[t,a]=g.useState(()=>new Set),r=(n,o)=>a(i=>{const u=new Set(i);return o?u.add(n):u.delete(n),u});return e.jsx(He,{children:e.jsxs("div",{style:{display:"grid",gap:28,padding:"20px 16px 16px"},children:[at.map(n=>e.jsxs("section",{style:{display:"grid",gap:12},children:[e.jsx("h3",{className:"im-18-s",style:{margin:0,color:"var(--color-text-primary)"},children:n.title}),e.jsx(H,{"aria-label":n.title,children:n.options.map(o=>{const i=`${n.title}/${o.label}`;return e.jsx(S,{icon:o.icon,count:o.count,trailing:"clear",selected:t.has(i),onSelectedChange:u=>r(i,u),children:o.label},i)})})]},n.title)),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,paddingTop:4},children:[e.jsx(L,{variant:"secondary",disabled:t.size===0,onClick:()=>a(new Set),children:"Сбросить"}),e.jsx(L,{children:"Применить"})]})]})})}const b={name:"Кейс · Фильтры: группы чипов",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(nt,{})},rt=["Вид активности","Формат","Длительность","Цена","Удобства"];function st(){const[t,a]=g.useState({"Вид активности":!0});return e.jsx(He,{children:e.jsx("div",{style:{padding:"12px 0"},children:e.jsxs(H,{layout:"scroll",gap:6,"aria-label":"Быстрые фильтры",children:[e.jsx(p,{count:Object.values(t).filter(Boolean).length}),rt.map(r=>e.jsx(S,{trailing:"chevron",selected:!!t[r],"aria-haspopup":"dialog",onClick:()=>a(n=>({...n,[r]:!n[r]})),children:r},r))]})})})}const v={name:"Кейс · Результаты: быстрые фильтры",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx(st,{})},j={name:"Тест: выбор",args:{children:"Питание",icon:e.jsx(D,{}),count:20,trailing:"clear",defaultSelected:!1},argTypes:{icon:{control:!1}},play:async({canvasElement:t,args:a})=>{const n=_e(t).getByRole("button",{name:/Питание/});await c(n).toHaveAttribute("aria-pressed","false"),await c(n.querySelector('[data-trail="clear"]')).toBeNull(),await A.click(n),await c(a.onSelectedChange).toHaveBeenLastCalledWith(!0),await c(n).toHaveAttribute("aria-pressed","true"),await W(()=>c(n.querySelector('[data-trail="clear"]')).not.toBeNull()),n.focus(),await A.keyboard(" "),await c(a.onSelectedChange).toHaveBeenLastCalledWith(!1),await c(n).toHaveAttribute("aria-pressed","false"),await W(()=>c(n.querySelector('[data-trail="clear"]')).toBeNull(),{timeout:3e3})}},w={name:"Фильтр-чип: все состояния",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-end",flexWrap:"wrap",padding:20,borderRadius:24,background:"var(--color-bg-surface)"},children:[{name:"Active=False",node:e.jsx(p,{})},{name:"Pressed",node:e.jsx(p,{forcePressed:!0})},{name:"Active=True, 1",node:e.jsx(p,{count:1})},{name:"Active=True, 3",node:e.jsx(p,{count:3})},{name:"Disabled",node:e.jsx(p,{disabled:!0})},{name:"Skeleton=True",node:e.jsx(p,{skeleton:!0})}].map(({name:t,node:a})=>e.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"start",gap:8},children:[a,e.jsx(_,{children:t})]},t))})},B={name:"Indicator",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:20,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx(E,{children:"3"}),e.jsx(E,{children:"12"}),e.jsx(E,{variant:"secondary",children:"1"}),e.jsx(E,{variant:"secondary",children:"12"})]})},F={name:"Тест: фильтр-чип",parameters:{controls:{disable:!0}},render:function(){const[a,r]=g.useState(0);return e.jsx(p,{count:a,onClick:()=>r(n=>n+1)})},play:async({canvasElement:t})=>{const a=_e(t),r=a.getByRole("button",{name:"Фильтры"});await c(r).not.toHaveAttribute("data-selected"),await A.click(r),await A.click(r);const n=a.getByRole("button",{name:"Фильтры, выбрано 2"});await c(n).toHaveAttribute("data-selected"),await c(n).toHaveTextContent("2")}},ot=["Playground","AllStates","FiltersCase","QuickFiltersCase","ToggleTest","FilterChipStates","IndicatorVariants","FilterChipTest"];var O,q,K,$,Z;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Chip key={String(args.defaultSelected)} {...args} />
}`,...(K=(q=C.parameters)==null?void 0:q.docs)==null?void 0:K.source},description:{story:"Tap it: the fill turns dark, the × springs in, the right edge glides out.",...(Z=($=C.parameters)==null?void 0:$.docs)==null?void 0:Z.description}}};var G,Q,U,X,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    maxWidth: '100%',
    overflowX: 'auto'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: \`120px repeat(\${STATES.length}, max-content)\`,
      gap: '16px 20px',
      alignItems: 'center',
      padding: 20,
      borderRadius: 24,
      background: 'var(--color-bg-surface)'
    }}>
        <span />
        {STATES.map(s => <Caption key={s.name} strong>
            {s.name}
          </Caption>)}
        {KINDS.flatMap(k => [<Caption key={k.name}>{k.name}</Caption>, ...STATES.map(s => <Chip key={k.name + s.name} {...k.props} selected={s.selected ?? false} forcePressed={s.forcePressed} disabled={s.disabled} />)])}
      </div>
    </div>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"Every state of every kind. Pressed is forced here; in use it lasts while the finger is down.",...(J=(X=y.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Y,ee,te,ae,ne;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Кейс · Фильтры: группы чипов',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <FiltersScreen />
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:`Figma «Результаты» → «Фильтрация» → «Фильтры» (817:65745): группы чипов экрана. Значение нажимается и становится тёмным с «×»,
соседи плавно сдвигаются; «Сбросить» снимает все разом.`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var re,se,oe,ie,ue;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Кейс · Результаты: быстрые фильтры',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <QuickFilters />
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:`Figma «Результаты» → быстрые фильтры под поиском (1464:66799, применён — 702:93376): фильтр-чип «Фильтры» первым (тёмный с числом,
когда что-то выбрано), затем чипы с шевроном в обоих состояниях; каждый открывает шторку. Тап заменяет «выбрал и применил».`,...(ue=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ue.description}}};var le,ce,de,pe,me;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Тест: выбор',
  args: {
    children: 'Питание',
    icon: <I.ForkKnifeIcon />,
    count: 20,
    trailing: 'clear',
    defaultSelected: false
  },
  argTypes: {
    icon: {
      control: false
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button', {
      name: /Питание/
    });
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await expect(chip.querySelector('[data-trail="clear"]')).toBeNull();
    await userEvent.click(chip);
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(true);
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
    await waitFor(() => expect(chip.querySelector('[data-trail="clear"]')).not.toBeNull());
    chip.focus();
    await userEvent.keyboard(' ');
    await expect(args.onSelectedChange).toHaveBeenLastCalledWith(false);
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await waitFor(() => expect(chip.querySelector('[data-trail="clear"]')).toBeNull(), {
      timeout: 3000
    });
  }
}`,...(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Interaction test: tap and Space toggle, aria-pressed follows, the × comes and goes.",...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var he,fe,ge,xe,Ce;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Фильтр-чип: все состояния',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    padding: 20,
    borderRadius: 24,
    background: 'var(--color-bg-surface)'
  }}>
      {[{
      name: 'Active=False',
      node: <FilterChip />
    }, {
      name: 'Pressed',
      node: <FilterChip forcePressed />
    }, {
      name: 'Active=True, 1',
      node: <FilterChip count={1} />
    }, {
      name: 'Active=True, 3',
      node: <FilterChip count={3} />
    }, {
      name: 'Disabled',
      node: <FilterChip disabled />
    }, {
      name: 'Skeleton=True',
      node: <FilterChip skeleton />
    }].map(({
      name,
      node
    }) => <figure key={name} style={{
      margin: 0,
      display: 'grid',
      justifyItems: 'start',
      gap: 8
    }}>
          {node}
          <Caption>{name}</Caption>
        </figure>)}
    </div>
}`,...(ge=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:ge.source},description:{story:"Figma filter-chips 609:10874: Active False / True (with the Indicator) and Skeleton.",...(Ce=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:Ce.description}}};var ye,be,ve,je,we;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Indicator',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    padding: 20,
    borderRadius: 24,
    background: 'var(--color-bg-surface)'
  }}>
      <Indicator>3</Indicator>
      <Indicator>12</Indicator>
      <Indicator variant="secondary">1</Indicator>
      <Indicator variant="secondary">12</Indicator>
    </div>
}`,...(ve=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ve.source},description:{story:"Figma Indicator 491:8160: Default (18, IM-12 S, red) and Secondary (16, IM-12 M, dark glass).",...(we=(je=B.parameters)==null?void 0:je.docs)==null?void 0:we.description}}};var Be,Fe,Se,ke,Ie;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Тест: фильтр-чип',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [n, setN] = useState(0);
    return <FilterChip count={n} onClick={() => setN(v => v + 1)} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button', {
      name: 'Фильтры'
    });
    await expect(chip).not.toHaveAttribute('data-selected');
    await userEvent.click(chip);
    await userEvent.click(chip);
    const after = canvas.getByRole('button', {
      name: 'Фильтры, выбрано 2'
    });
    await expect(after).toHaveAttribute('data-selected');
    await expect(after).toHaveTextContent('2');
  }
}`,...(Se=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source},description:{story:"Interaction test: the filter chip shows the number of applied filters and names it for screen readers.",...(Ie=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:Ie.description}}};const gt=Object.freeze(Object.defineProperty({__proto__:null,AllStates:y,FilterChipStates:w,FilterChipTest:F,FiltersCase:b,IndicatorVariants:B,Playground:C,QuickFiltersCase:v,ToggleTest:j,__namedExportsOrder:ot,default:Ye},Symbol.toStringTag,{value:"Module"}));export{y as A,gt as C,w as F,B as I,C as P,v as Q,b as a};
