import{j as u,r as j}from"./iframe-DyD5Yel4.js";import{H as M4}from"./paths-BjPgyxdS.js";import{a as H4}from"./stack-ala-archa-CZCiGT1X.js";import{A as r,a,b as k}from"./Appbar-CqYb5ci7.js";import{u as I4}from"./useScrolledPast-BmNc8JN4.js";import{S as n,P as z,a as H,H as I,K as R4}from"./Phone-D_QzrYrn.js";import{S as R}from"./Search-K2ZHHquh.js";import{C,A as z4}from"./arrows-0JYTYJZi.js";import{F as T}from"./FloatingContainer-DeRfZ3x8.js";import{B as F}from"./Button-grGIhY78.js";import{F as L4}from"./FloatingFilter-DvcJgFUi.js";import{C as P4}from"./time-lpmEQjgl.js";import{U as O4}from"./people-tOiSq3ZR.js";import{S as M}from"./general-CSE0kF9v.js";import{C as D}from"./Chip-vxFm-D7d.js";const{expect:E,waitFor:P}=__STORYBOOK_MODULE_TEST__,N4={title:"Components/Appbar",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=104-130"}},args:{surface:"cover",title:"Заголовок",titleOnCover:!0,align:"center",rightIcons:2},argTypes:{surface:{control:"inline-radio",options:["cover","solid"]},align:{control:"inline-radio",options:["center","left"]},rightIcons:{control:"inline-radio",options:[2,1]},subtitle:{control:"text"},left:{control:!1},right:{control:!1},statusBar:{control:!1}}};function T4({filled:e}){return u.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:u.jsx("path",{d:M4,stroke:e?"var(--control-icon-favorite)":"currentColor",fill:e?"var(--control-icon-favorite)":"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}const d=()=>u.jsx(a,{icon:u.jsx(C,{direction:"left",size:24}),label:"Назад",bold:!0});function L(){const[e,t]=j.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(a,{icon:u.jsx(M,{}),label:"Поделиться"}),u.jsx(a,{icon:u.jsx(T4,{filled:e}),label:"В избранное","aria-pressed":e,onClick:()=>t(o=>!o)})]})}const p={parameters:{layout:"fullscreen"},render:e=>u.jsx("div",{style:{margin:16,width:393,maxWidth:"calc(100% - 32px)",background:"var(--color-bg-accent)",borderRadius:24,overflow:"hidden"},children:u.jsx(r,{...e,left:u.jsx(d,{}),right:e.rightIcons===1?u.jsx(a,{icon:u.jsx(M,{}),label:"Поделиться"}):u.jsx(L,{}),statusBar:u.jsx(n,{}),style:{"--appbar-safe-top":"54px"}})})},m={name:"Все состояния",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-accent)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:["solid","cover"].map(e=>[void 0,"Подзаголовок"].map(t=>u.jsx(r,{surface:e,title:"Заголовок",subtitle:t,left:u.jsx(d,{}),right:u.jsx(L,{}),statusBar:u.jsx(n,{}),style:{"--appbar-safe-top":"54px"}},`${e}${t??""}`)))})},i={"--appbar-safe-top":"54px"},O=({size:e=40})=>u.jsx(a,{size:e,icon:u.jsx(M,{}),label:"Поделиться"}),W4="Озеро Иссык-Куль и ущелье Григорьевское",x={name:"Выравнивание и одна кнопка справа",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>{const e=[{label:"Align=Center · Right icons=2",props:{right:u.jsx(l,{})}},{label:"Align=Center · Right icons=1",props:{rightIcons:1,right:u.jsx(O,{})}},{label:"Align=Left · две кнопки",props:{align:"left",right:u.jsx(l,{})}},{label:"Align=Left · одна кнопка",props:{align:"left",right:u.jsx(O,{})}},{label:"Align=Left · без «Назад» и кнопок",props:{align:"left",left:null,right:null}}];return u.jsxs("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-accent)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:[e.flatMap(({label:t,props:o})=>["solid","cover"].map(s=>u.jsxs("div",{"data-case":t,"data-surface-case":s,children:[u.jsx("p",{style:{margin:"0 0 6px",font:"var(--font-im-12-r)",color:"var(--color-text-inverse-constant-primary)"},children:`${t} · ${s}`}),u.jsx(r,{surface:s,title:W4,subtitle:"29 мая, 2 участника",left:u.jsx(d,{}),statusBar:u.jsx(n,{}),style:i,...o})]},t+s))),u.jsxs("div",{"data-case":"search-left",children:[u.jsx("p",{style:{margin:"0 0 6px",font:"var(--font-im-12-r)",color:"var(--color-text-inverse-constant-primary)"},children:"Type=Search · Align=Left"}),u.jsx(r,{variant:"search",align:"left",surface:"solid",title:"Куда отправимся?",left:u.jsx(a,{size:40,icon:u.jsx(C,{direction:"left",size:24}),label:"Назад",bold:!0}),right:u.jsx(l,{size:36}),bottom:u.jsx(R,{placeholder:"Поиск"}),statusBar:u.jsx(n,{}),style:i})]})]})}},_4=()=>u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M2 5h7M13 5h1M2 11h1M7 11h7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"11",cy:"5",r:"1.6",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"5",cy:"11",r:"1.6",stroke:"currentColor",strokeWidth:"2"})]}),w=()=>u.jsx(a,{size:36,icon:u.jsx(C,{direction:"left",size:24}),label:"Назад",bold:!0}),l=({size:e=40})=>u.jsxs(u.Fragment,{children:[u.jsx(a,{size:e,icon:u.jsx(M,{}),label:"Поделиться"}),u.jsx(a,{size:e,icon:u.jsx(T4,{filled:!1}),label:"В избранное"})]}),h={name:"Типы: Default, Search, Filter, Filter search",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsxs("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-accent)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:[u.jsx(r,{variant:"default",surface:"solid",title:"Заголовок",left:u.jsx(d,{}),right:u.jsx(l,{}),statusBar:u.jsx(n,{}),style:i}),u.jsx(r,{variant:"default",surface:"cover",title:"Заголовок",left:u.jsx(d,{}),right:u.jsx(l,{}),statusBar:u.jsx(n,{}),style:i}),u.jsx(r,{variant:"search",surface:"solid",title:"Заголовок",left:u.jsx(a,{size:40,icon:u.jsx(C,{direction:"left",size:24}),label:"Назад",bold:!0}),right:u.jsx(l,{size:36}),bottom:u.jsx(R,{placeholder:"Поиск"}),statusBar:u.jsx(n,{}),style:i}),["solid","cover"].map(e=>u.jsx(r,{variant:"filter",surface:e,left:u.jsx(w,{}),center:u.jsx(k,{title:"Бишкек",subtitle:"29 мая, 1 участник"}),right:u.jsx(l,{}),statusBar:u.jsx(n,{}),style:i},`f${e}`)),["solid","cover"].map(e=>u.jsx(r,{variant:"filter-search",surface:e,left:u.jsx(w,{}),center:u.jsx(k,{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир"}),right:u.jsx(a,{size:36,icon:u.jsx(z4,{}),label:"Поменять направление"}),statusBar:u.jsx(n,{}),style:i},`fs${e}`))]})},b={name:"Шапки продуктов",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-surface)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:["avia","excursions","tour","hotel"].map(e=>u.jsx(r,{variant:"filter-search",product:e,surface:"cover",left:u.jsx(w,{}),center:u.jsx(k,{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир"}),right:e==="excursions"?u.jsx(a,{size:36,icon:u.jsx(z4,{}),label:"Поменять направление"}):void 0,bottom:e==="excursions"?u.jsxs(u.Fragment,{children:[u.jsx(D,{"aria-label":"Все фильтры",icon:u.jsx(_4,{})}),u.jsx(D,{trailing:"chevron",children:"Вид активности"}),u.jsx(D,{trailing:"chevron",children:"Формат"}),u.jsx(D,{trailing:"chevron",children:"Длительность"})]}):void 0,statusBar:u.jsx(n,{}),style:i},e))})},g={name:"Кейс: поиск «Куда отправимся?»",parameters:{controls:{disable:!0},layout:"fullscreen"},render:function(){const[t,o]=j.useState("А"),s=[["Алматы","340 предложений · Казахстан"],["Астана","53 предложения · Казахстан"],["Ала-Арча","12 предложений · Казахстан"]];return u.jsx(z,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{variant:"search",surface:"solid",title:"Куда отправимся?",left:u.jsx(a,{size:40,icon:u.jsx(C,{direction:"left",size:24}),label:"Назад",bold:!0}),bottom:u.jsx(R,{value:t,onValueChange:o,placeholder:"Город или место"}),statusBar:u.jsx(n,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(T,{layout:"column",keyboard:u.jsx(R4,{}),style:{position:"absolute",left:0,right:0,bottom:0,"--floating-container-safe-bottom":"0px"},children:u.jsx(F,{size:52,fullWidth:!0,children:"Готово"})})]}),children:u.jsxs("div",{style:{paddingTop:H.statusBar+64+56},children:[u.jsx("p",{className:"im-14-s",style:{margin:0,padding:"12px 16px 8px"},children:"Результаты поиска"}),s.map(([v,S])=>u.jsxs("div",{style:{padding:"10px 16px",borderBottom:"1px solid var(--color-border-default)"},children:[u.jsx("p",{className:"im-14-m",style:{margin:0},children:v}),u.jsx("p",{className:"im-12-r",style:{margin:"2px 0 0",color:"var(--color-text-tertiary)"},children:S})]},v))]})})}},f={name:"Кейс: каталог со сводкой поиска",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx(z,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{variant:"filter",surface:"solid",left:u.jsx(w,{}),center:u.jsx(k,{title:"Бишкек",subtitle:"29 мая, 1 участник"}),right:u.jsx(l,{}),statusBar:u.jsx(n,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(T,{layout:"row",filter:u.jsx(L4,{items:[{label:"29 июл",icon:u.jsx(P4,{size:14})},{label:"1 участник",icon:u.jsx(O4,{size:14})}]}),homeIndicator:u.jsx(I,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:u.jsx(F,{size:48,children:"Выбрать дату"})})]}),children:u.jsxs("div",{style:{paddingTop:H.statusBar+64},children:[u.jsx(c,{title:"Подборка",children:A}),u.jsx("div",{style:{height:240}})]})})},c=({title:e,children:t})=>u.jsxs("section",{style:{padding:"24px 16px 0"},children:[u.jsx("h2",{className:"im-20-b",style:{margin:"0 0 8px"},children:e}),u.jsx("div",{className:"im-16-r",style:{color:"var(--color-text-secondary)"},children:t})]}),A="Поднимемся по ущелью Ала-Арча к водопаду Ак-Сай: тропа идёт вдоль реки через еловый лес, а с перевала видно пик Корона. Гид расскажет, как образовались ледники и почему здесь так много эдельвейсов.",y={name:"Детали: с обложкой",parameters:{controls:{disable:!0},layout:"fullscreen"},render:function(){const t=j.useRef(null),o=j.useRef(null),s=j.useRef(null),{past:v,ready:S}=I4(s,o,{root:t});return u.jsxs(z,{ref:t,overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{ref:o,surface:v?"solid":"cover",instant:!S,title:"Ущелье Ала-Арча и водопад Ак-Сай",titleOnCover:!1,left:u.jsx(d,{}),right:u.jsx(L,{}),statusBar:u.jsx(n,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsxs(T,{visible:v,instant:!S,homeIndicator:u.jsx(I,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsxs("div",{style:{flex:"0 1 auto",display:"grid"},children:[u.jsx("span",{className:"im-20-b",children:"2 900 ⃀"}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:"за человека"})]}),u.jsx(F,{size:48,style:{flex:"0 0 auto"},children:"Выбрать дату"})]})]}),children:[u.jsx("div",{style:{position:"relative",height:420,background:`url(${H4}) center / cover`},children:u.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:24,color:"white"},children:[u.jsx("p",{className:"im-24-b",style:{margin:0},children:"Ущелье Ала-Арча и водопад Ак-Сай"}),u.jsx("p",{className:"im-14-r",style:{margin:"4px 0 16px",opacity:.9},children:"Бишкек · 6 часов · группа до 12 человек"}),u.jsx(F,{size:48,fullWidth:!0,children:"Выбрать дату"})]})}),u.jsx("div",{ref:s,style:{height:1}}),u.jsx(c,{title:"Что вас ждёт",children:A}),u.jsx(c,{title:"Маршрут",children:A}),u.jsx(c,{title:"Что взять с собой",children:A}),u.jsx(c,{title:"Место встречи",children:A}),u.jsx("div",{style:{height:520}})]})},play:async({canvasElement:e})=>{const t=e.querySelector("header");await E(t).toHaveAttribute("data-surface","cover");const o=e.querySelector("[data-phone-scroller]");o.scrollTop=500;const s=t.parentElement.querySelector("[data-layout]");await P(()=>E(t).toHaveAttribute("data-surface","solid"),{timeout:4e3}),await E(s).toHaveAttribute("data-visible"),o.scrollTop=0,await P(()=>E(t).toHaveAttribute("data-surface","cover"),{timeout:4e3}),await E(s).not.toHaveAttribute("data-visible")}},$4=[["Экскурсия","Ущелье Ала-Арча и водопад Ак-Сай"],["Дата","пт, 29 мая, 09:00"],["Участники","2 взрослых"],["Место встречи","Бишкек, площадь Ала-Тоо"],["Гид","Айгерим Асанова"]],B={name:"Заказ: без обложки, оплата",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx(z,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{surface:"solid",title:"Заказ № 482 113",subtitle:"Ожидает оплаты",left:u.jsx(d,{}),statusBar:u.jsx(n,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(T,{layout:"column",bottomText:"Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel",homeIndicator:u.jsx(I,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:u.jsx(F,{size:48,fullWidth:!0,children:"Оплатить 5 800 ⃀"})})]}),children:u.jsxs("div",{style:{paddingTop:H.statusBar+64},children:[$4.map(([e,t])=>u.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-border-default)"},children:[u.jsx("p",{className:"im-14-r",style:{margin:0,color:"var(--color-text-tertiary)"},children:e}),u.jsx("p",{className:"im-16-m",style:{margin:"2px 0 0"},children:t})]},e)),u.jsx(c,{title:"Итого",children:"2 × 2 900 ⃀ = 5 800 ⃀. Оплата картой МБанка или в рассрочку через M+."}),u.jsx(c,{title:"Отмена",children:"Бесплатная отмена за 24 часа до начала. Деньги вернутся на карту за 1 – 3 дня."}),u.jsx("div",{style:{height:200}})]})})},q4=["Playground","States","AlignAndIcons","Types","Products","CaseSearch","CaseFilter","DetailsWithCover","OrderPayment"];var N,W,_,$,q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <div style={{
    margin: 16,
    width: 393,
    maxWidth: 'calc(100% - 32px)',
    background: 'var(--color-bg-accent)',
    borderRadius: 24,
    overflow: 'hidden'
  }}>
      <Appbar {...args} left={<Back />} right={args.rightIcons === 1 ? <AppbarButton icon={<ShareIcon />} label="Поделиться" /> : <Actions />} statusBar={<StatusBarMock />} style={{
      ['--appbar-safe-top' as string]: '54px'
    }} />
    </div>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:"A bar on a blue header, like the Figma page. Switch «surface»: the bar morphs between the two looks.",...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.description}}};var U,K,G,Q,V;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%',
    background: 'var(--color-bg-accent)',
    borderRadius: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 393px))'
  }}>
      {(['solid', 'cover'] as const).map(surface => [undefined, 'Подзаголовок'].map(subtitle => <Appbar key={\`\${surface}\${subtitle ?? ''}\`} surface={surface} title="Заголовок" subtitle={subtitle} left={<Back />} right={<Actions />} statusBar={<StatusBarMock />} style={{
      ['--appbar-safe-top' as string]: '54px'
    }} />))}
    </div>
}`,...(G=(K=m.parameters)==null?void 0:K.docs)==null?void 0:G.source},description:{story:"The Figma matrix 104:130 (Type Default): Scroll False | True × Show subtitle.",...(V=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var J,X,Y,Z,u4;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Выравнивание и одна кнопка справа',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => {
    const rows: {
      label: string;
      props: Partial<AppbarProps>;
    }[] = [{
      label: 'Align=Center · Right icons=2',
      props: {
        right: <ShareHeart />
      }
    }, {
      label: 'Align=Center · Right icons=1',
      props: {
        rightIcons: 1,
        right: <Share />
      }
    }, {
      label: 'Align=Left · две кнопки',
      props: {
        align: 'left',
        right: <ShareHeart />
      }
    }, {
      label: 'Align=Left · одна кнопка',
      props: {
        align: 'left',
        right: <Share />
      }
    }, {
      label: 'Align=Left · без «Назад» и кнопок',
      props: {
        align: 'left',
        left: null,
        right: null
      }
    }];
    return <div style={{
      display: 'grid',
      gap: 16,
      padding: 16,
      boxSizing: 'border-box',
      maxWidth: '100%',
      background: 'var(--color-bg-accent)',
      borderRadius: 24,
      gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 393px))'
    }}>
        {rows.flatMap(({
        label,
        props
      }) => (['solid', 'cover'] as const).map(surface => <div key={label + surface} data-case={label} data-surface-case={surface}>
              <p style={{
          margin: '0 0 6px',
          font: 'var(--font-im-12-r)',
          color: 'var(--color-text-inverse-constant-primary)'
        }}>{\`\${label} · \${surface}\`}</p>
              <Appbar surface={surface} title={LONG_TITLE} subtitle="29 мая, 2 участника" left={<Back />} statusBar={<StatusBarMock />} style={SAFE} {...props} />
            </div>))}
        <div data-case="search-left">
          <p style={{
          margin: '0 0 6px',
          font: 'var(--font-im-12-r)',
          color: 'var(--color-text-inverse-constant-primary)'
        }}>Type=Search · Align=Left</p>
          <Appbar variant="search" align="left" surface="solid" title="Куда отправимся?" left={<AppbarButton size={40} icon={<ChevronIcon direction="left" size={24} />} label="Назад" bold />} right={<ShareHeart size={36} />} bottom={<Search placeholder="Поиск" />} statusBar={<StatusBarMock />} style={SAFE} />
        </div>
      </div>;
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:`Figma Right icons = 2 | 1 and Align = Center | Left, on the white bar and over the cover. Centred: with one right
button the zones shrink to 56 and a long title gets 80 px more. Left: the title follows the back button.`,...(u4=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var e4,t4,r4,n4,a4;h.parameters={...h.parameters,docs:{...(e4=h.parameters)==null?void 0:e4.docs,source:{originalSource:`{
  name: 'Типы: Default, Search, Filter, Filter search',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%',
    background: 'var(--color-bg-accent)',
    borderRadius: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 393px))'
  }}>
      <Appbar variant="default" surface="solid" title="Заголовок" left={<Back />} right={<ShareHeart />} statusBar={<StatusBarMock />} style={SAFE} />
      <Appbar variant="default" surface="cover" title="Заголовок" left={<Back />} right={<ShareHeart />} statusBar={<StatusBarMock />} style={SAFE} />
      <Appbar variant="search" surface="solid" title="Заголовок" left={<AppbarButton size={40} icon={<ChevronIcon direction="left" size={24} />} label="Назад" bold />} right={<ShareHeart size={36} />} bottom={<Search placeholder="Поиск" />} statusBar={<StatusBarMock />} style={SAFE} />
      {(['solid', 'cover'] as const).map(surface => <Appbar key={\`f\${surface}\`} variant="filter" surface={surface} left={<BackSmall />} center={<AppbarSummary title="Бишкек" subtitle="29 мая, 1 участник" />} right={<ShareHeart />} statusBar={<StatusBarMock />} style={SAFE} />)}
      {(['solid', 'cover'] as const).map(surface => <Appbar key={\`fs\${surface}\`} variant="filter-search" surface={surface} left={<BackSmall />} center={<AppbarSummary title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" />} right={<AppbarButton size={36} icon={<ArrowsUpDownIcon />} label="Поменять направление" />} statusBar={<StatusBarMock />} style={SAFE} />)}
    </div>
}`,...(r4=(t4=h.parameters)==null?void 0:t4.docs)==null?void 0:r4.source},description:{story:"Figma Type: Default, Search, Filter, Filter search — on the white bar (Scroll) and over the cover.",...(a4=(n4=h.parameters)==null?void 0:n4.docs)==null?void 0:a4.description}}};var s4,o4,i4,l4,c4;b.parameters={...b.parameters,docs:{...(s4=b.parameters)==null?void 0:s4.docs,source:{originalSource:`{
  name: 'Шапки продуктов',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%',
    background: 'var(--color-bg-surface)',
    borderRadius: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 393px))'
  }}>
      {(['avia', 'excursions', 'tour', 'hotel'] as const).map(product => <Appbar key={product} variant="filter-search" product={product} surface="cover" left={<BackSmall />} center={<AppbarSummary title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" />} right={product === 'excursions' ? <AppbarButton size={36} icon={<ArrowsUpDownIcon />} label="Поменять направление" /> : undefined} bottom={product === 'excursions' ? <>
                <Chip aria-label="Все фильтры" icon={<SlidersIcon />} />
                <Chip trailing="chevron">Вид активности</Chip>
                <Chip trailing="chevron">Формат</Chip>
                <Chip trailing="chevron">Длительность</Chip>
              </> : undefined} statusBar={<StatusBarMock />} style={SAFE} />)}
    </div>
}`,...(i4=(o4=b.parameters)==null?void 0:o4.docs)==null?void 0:i4.source},description:{story:"Figma Appbar_type 807:5817: the header of each product, a gradient under the status bar. «Выходные» (`excursions`) carry a row of chips.",...(c4=(l4=b.parameters)==null?void 0:l4.docs)==null?void 0:c4.description}}};var d4,p4,m4,x4,h4;g.parameters={...g.parameters,docs:{...(d4=g.parameters)==null?void 0:d4.docs,source:{originalSource:`{
  name: 'Кейс: поиск «Куда отправимся?»',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: function Render() {
    const [q, setQ] = useState('А');
    const places = [['Алматы', '340 предложений · Казахстан'], ['Астана', '53 предложения · Казахстан'], ['Ала-Арча', '12 предложений · Казахстан']];
    return <Phone overlay={<>
            <Appbar variant="search" surface="solid" title="Куда отправимся?" left={<AppbarButton size={40} icon={<ChevronIcon direction="left" size={24} />} label="Назад" bold />} bottom={<Search value={q} onValueChange={setQ} placeholder="Город или место" />} statusBar={<StatusBarMock />} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }} />
            <FloatingContainer layout="column" keyboard={<KeyboardMock />} style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        ['--floating-container-safe-bottom' as string]: '0px'
      }}>
              <Button size={52} fullWidth>
                Готово
              </Button>
            </FloatingContainer>
          </>}>
        <div style={{
        paddingTop: PHONE.statusBar + 64 + 56
      }}>
          <p className="im-14-s" style={{
          margin: 0,
          padding: '12px 16px 8px'
        }}>
            Результаты поиска
          </p>
          {places.map(([name, meta]) => <div key={name} style={{
          padding: '10px 16px',
          borderBottom: '1px solid var(--color-border-default)'
        }}>
              <p className="im-14-m" style={{
            margin: 0
          }}>
                {name}
              </p>
              <p className="im-12-r" style={{
            margin: '2px 0 0',
            color: 'var(--color-text-tertiary)'
          }}>
                {meta}
              </p>
            </div>)}
        </div>
      </Phone>;
  }
}`,...(m4=(p4=g.parameters)==null?void 0:p4.docs)==null?void 0:m4.source},description:{story:"Поиск «Куда отправимся?»: белая шапка с полем под заголовком, ниже результаты, снизу панель «Готово» над клавиатурой.",...(h4=(x4=g.parameters)==null?void 0:x4.docs)==null?void 0:h4.description}}};var b4,g4,f4,y4,B4;f.parameters={...f.parameters,docs:{...(b4=f.parameters)==null?void 0:b4.docs,source:{originalSource:`{
  name: 'Кейс: каталог со сводкой поиска',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <Phone overlay={<>
          <Appbar variant="filter" surface="solid" left={<BackSmall />} center={<AppbarSummary title="Бишкек" subtitle="29 мая, 1 участник" />} right={<ShareHeart />} statusBar={<StatusBarMock />} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    }} />
          <FloatingContainer layout="row" filter={<FloatingFilter items={[{
      label: '29 июл',
      icon: <CalendarIcon size={14} />
    }, {
      label: '1 участник',
      icon: <UserIcon size={14} />
    }]} />} homeIndicator={<HomeIndicatorMock />} style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }}>
            <Button size={48}>Выбрать дату</Button>
          </FloatingContainer>
        </>}>
      <div style={{
      paddingTop: PHONE.statusBar + 64
    }}>
        <Section title="Подборка">{LOREM}</Section>
        <div style={{
        height: 240
      }} />
      </div>
    </Phone>
}`,...(f4=(g4=f.parameters)==null?void 0:g4.docs)==null?void 0:f4.source},description:{story:"Выходные: результаты поиска — шапка со сводкой «Бишкек, 29 мая, 1 участник» вместо заголовка.",...(B4=(y4=f.parameters)==null?void 0:y4.docs)==null?void 0:B4.description}}};var v4,E4,A4,j4,F4;y.parameters={...y.parameters,docs:{...(v4=y.parameters)==null?void 0:v4.docs,source:{originalSource:`{
  name: 'Детали: с обложкой',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: function Render() {
    const scroller = useRef<HTMLDivElement>(null);
    const appbar = useRef<HTMLElement>(null);
    const coverEnd = useRef<HTMLDivElement>(null);
    const {
      past,
      ready
    } = useScrolledPast(coverEnd, appbar, {
      root: scroller
    });
    return <Phone ref={scroller} overlay={<>
            <Appbar ref={appbar} surface={past ? 'solid' : 'cover'} instant={!ready} title="Ущелье Ала-Арча и водопад Ак-Сай" titleOnCover={false} left={<Back />} right={<Actions />} statusBar={<StatusBarMock />} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }} />
            <FloatingContainer visible={past} instant={!ready} homeIndicator={<HomeIndicatorMock />} style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      }}>
              <div style={{
          flex: '0 1 auto',
          display: 'grid'
        }}>
                <span className="im-20-b">2 900 ⃀</span>
                <span className="im-12-r" style={{
            color: 'var(--color-text-tertiary)'
          }}>
                  за человека
                </span>
              </div>
              <Button size={48} style={{
          flex: '0 0 auto'
        }}>
                Выбрать дату
              </Button>
            </FloatingContainer>
          </>}>
        <div style={{
        position: 'relative',
        height: 420,
        background: \`url(\${photo}) center / cover\`
      }}>
          <div style={{
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 24,
          color: 'white'
        }}>
            <p className="im-24-b" style={{
            margin: 0
          }}>
              Ущелье Ала-Арча и водопад Ак-Сай
            </p>
            <p className="im-14-r" style={{
            margin: '4px 0 16px',
            opacity: 0.9
          }}>
              Бишкек · 6 часов · группа до 12 человек
            </p>
            <Button size={48} fullWidth>
              Выбрать дату
            </Button>
          </div>
        </div>
        <div ref={coverEnd} style={{
        height: 1
      }} />
        <Section title="Что вас ждёт">{LOREM}</Section>
        <Section title="Маршрут">{LOREM}</Section>
        <Section title="Что взять с собой">{LOREM}</Section>
        <Section title="Место встречи">{LOREM}</Section>
        <div style={{
        height: 520
      }} />
      </Phone>;
  },
  play: async ({
    canvasElement
  }) => {
    const header = canvasElement.querySelector('header')!;
    await expect(header).toHaveAttribute('data-surface', 'cover');
    const scroller = canvasElement.querySelector<HTMLElement>('[data-phone-scroller]')!;
    scroller.scrollTop = 500;
    // one threshold: the white bar and the bottom bar flip together
    const bar = header.parentElement!.querySelector('[data-layout]')!;
    await waitFor(() => expect(header).toHaveAttribute('data-surface', 'solid'), {
      timeout: 4000
    });
    await expect(bar).toHaveAttribute('data-visible');
    scroller.scrollTop = 0;
    await waitFor(() => expect(header).toHaveAttribute('data-surface', 'cover'), {
      timeout: 4000
    });
    await expect(bar).not.toHaveAttribute('data-visible');
  }
}`,...(A4=(E4=y.parameters)==null?void 0:E4.docs)==null?void 0:A4.source},description:{story:`Детали экскурсии: обложка, над ней прозрачная шапка со стеклянными кнопками. Прокрути: как только низ обложки
уходит под шапку, она становится белой, а снизу выезжает панель с ценой и кнопкой — в один и тот же момент.`,...(F4=(j4=y.parameters)==null?void 0:j4.docs)==null?void 0:F4.description}}};var C4,S4,D4,k4,w4;B.parameters={...B.parameters,docs:{...(C4=B.parameters)==null?void 0:C4.docs,source:{originalSource:`{
  name: 'Заказ: без обложки, оплата',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <Phone overlay={<>
          <Appbar surface="solid" title="Заказ № 482 113" subtitle="Ожидает оплаты" left={<Back />} statusBar={<StatusBarMock />} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    }} />
          <FloatingContainer layout="column" bottomText="Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel" homeIndicator={<HomeIndicatorMock />} style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0
    }}>
            <Button size={48} fullWidth>
              Оплатить 5 800 ⃀
            </Button>
          </FloatingContainer>
        </>}>
      <div style={{
      paddingTop: PHONE.statusBar + 64
    }}>
        {ROWS.map(([k, v]) => <div key={k} style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--color-border-default)'
      }}>
            <p className="im-14-r" style={{
          margin: 0,
          color: 'var(--color-text-tertiary)'
        }}>
              {k}
            </p>
            <p className="im-16-m" style={{
          margin: '2px 0 0'
        }}>
              {v}
            </p>
          </div>)}
        <Section title="Итого">2 × 2 900 ⃀ = 5 800 ⃀. Оплата картой МБанка или в рассрочку через M+.</Section>
        <Section title="Отмена">Бесплатная отмена за 24 часа до начала. Деньги вернутся на карту за 1 – 3 дня.</Section>
        <div style={{
        height: 200
      }} />
      </div>
    </Phone>
}`,...(D4=(S4=B.parameters)==null?void 0:S4.docs)==null?void 0:D4.source},description:{story:`Заказ и оплата: обложки нет, поэтому шапка сразу белая с заголовком, а панель «Оплатить» видна всегда —
это главное действие экрана, и прятать его незачем.`,...(w4=(k4=B.parameters)==null?void 0:k4.docs)==null?void 0:w4.description}}};const s0=Object.freeze(Object.defineProperty({__proto__:null,AlignAndIcons:x,CaseFilter:f,CaseSearch:g,DetailsWithCover:y,OrderPayment:B,Playground:p,Products:b,States:m,Types:h,__namedExportsOrder:q4,default:N4},Symbol.toStringTag,{value:"Module"}));export{s0 as A,g as C,y as D,B as O,p as P,m as S,h as T,x as a,b,f as c};
