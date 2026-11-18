import{j as u,r as j}from"./iframe-DuqTOznb.js";import{H as C4}from"./paths-BjPgyxdS.js";import{a as S4}from"./stack-ala-archa-CZCiGT1X.js";import{A as r,a as S,b as n}from"./Appbar-BYMxUm5k.js";import{u as D4}from"./useScrolledPast-BbqY5LPy.js";import{P as k,a as T,S as a,H as z,K as k4}from"./Phone-DvUrDP6C.js";import{F as w}from"./FloatingContainer-C5m_g9pK.js";import{B as A}from"./Button-CKwNO4NU.js";import{F as w4}from"./FloatingFilter-DF6g2FiI.js";import{C as M4}from"./time-CsMT4GVj.js";import{U as T4}from"./people-s6FNqSUd.js";import{S as E4}from"./Search-qejZ8oNQ.js";import{C as M,A as j4}from"./arrows-C0H-naDa.js";import{C}from"./Chip-KAmC-4ZV.js";import{S as A4}from"./general-DYSfllt2.js";const{expect:B,waitFor:R}=__STORYBOOK_MODULE_TEST__,z4={title:"Components/Appbar",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=104-130"}},args:{surface:"cover",title:"Заголовок",titleOnCover:!0},argTypes:{surface:{control:"inline-radio",options:["cover","solid"]},subtitle:{control:"text"},left:{control:!1},right:{control:!1},statusBar:{control:!1}}};function F4({filled:e}){return u.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:u.jsx("path",{d:C4,stroke:e?"var(--control-icon-favorite)":"currentColor",fill:e?"var(--control-icon-favorite)":"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}const g=()=>u.jsx(n,{icon:u.jsx(M,{direction:"left",size:24}),label:"Назад",bold:!0});function H(){const[e,t]=j.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsx(n,{icon:u.jsx(A4,{}),label:"Поделиться"}),u.jsx(n,{icon:u.jsx(F4,{filled:e}),label:"В избранное","aria-pressed":e,onClick:()=>t(s=>!s)})]})}const l={parameters:{layout:"fullscreen"},render:e=>u.jsx("div",{style:{margin:16,width:393,maxWidth:"calc(100% - 32px)",background:"var(--color-bg-accent)",borderRadius:24,overflow:"hidden"},children:u.jsx(r,{...e,left:u.jsx(g,{}),right:u.jsx(H,{}),statusBar:u.jsx(a,{}),style:{"--appbar-safe-top":"54px"}})})},c={name:"Все состояния",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-accent)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:["solid","cover"].map(e=>[void 0,"Подзаголовок"].map(t=>u.jsx(r,{surface:e,title:"Заголовок",subtitle:t,left:u.jsx(g,{}),right:u.jsx(H,{}),statusBar:u.jsx(a,{}),style:{"--appbar-safe-top":"54px"}},`${e}${t??""}`)))})},d={"--appbar-safe-top":"54px"},H4=()=>u.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:[u.jsx("path",{d:"M2 5h7M13 5h1M2 11h1M7 11h7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),u.jsx("circle",{cx:"11",cy:"5",r:"1.6",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"5",cy:"11",r:"1.6",stroke:"currentColor",strokeWidth:"2"})]}),D=()=>u.jsx(n,{size:36,icon:u.jsx(M,{direction:"left",size:24}),label:"Назад",bold:!0}),v=({size:e=40})=>u.jsxs(u.Fragment,{children:[u.jsx(n,{size:e,icon:u.jsx(A4,{}),label:"Поделиться"}),u.jsx(n,{size:e,icon:u.jsx(F4,{filled:!1}),label:"В избранное"})]}),p={name:"Типы: Default, Search, Filter, Filter search",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsxs("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-accent)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:[u.jsx(r,{variant:"default",surface:"solid",title:"Заголовок",left:u.jsx(g,{}),right:u.jsx(v,{}),statusBar:u.jsx(a,{}),style:d}),u.jsx(r,{variant:"default",surface:"cover",title:"Заголовок",left:u.jsx(g,{}),right:u.jsx(v,{}),statusBar:u.jsx(a,{}),style:d}),u.jsx(r,{variant:"search",surface:"solid",title:"Заголовок",left:u.jsx(n,{size:40,icon:u.jsx(M,{direction:"left",size:24}),label:"Назад",bold:!0}),right:u.jsx(v,{size:36}),bottom:u.jsx(E4,{placeholder:"Поиск"}),statusBar:u.jsx(a,{}),style:d}),["solid","cover"].map(e=>u.jsx(r,{variant:"filter",surface:e,left:u.jsx(D,{}),center:u.jsx(S,{title:"Бишкек",subtitle:"29 мая, 1 участник"}),right:u.jsx(v,{}),statusBar:u.jsx(a,{}),style:d},`f${e}`)),["solid","cover"].map(e=>u.jsx(r,{variant:"filter-search",surface:e,left:u.jsx(D,{}),center:u.jsx(S,{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир"}),right:u.jsx(n,{size:36,icon:u.jsx(j4,{}),label:"Поменять направление"}),statusBar:u.jsx(a,{}),style:d},`fs${e}`))]})},m={name:"Шапки продуктов",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"grid",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%",background:"var(--color-bg-surface)",borderRadius:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 320px), 393px))"},children:["avia","excursions","tour","hotel"].map(e=>u.jsx(r,{variant:"filter-search",product:e,surface:"cover",left:u.jsx(D,{}),center:u.jsx(S,{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир"}),right:e==="excursions"?u.jsx(n,{size:36,icon:u.jsx(j4,{}),label:"Поменять направление"}):void 0,bottom:e==="excursions"?u.jsxs(u.Fragment,{children:[u.jsx(C,{"aria-label":"Все фильтры",icon:u.jsx(H4,{})}),u.jsx(C,{trailing:"chevron",children:"Вид активности"}),u.jsx(C,{trailing:"chevron",children:"Формат"}),u.jsx(C,{trailing:"chevron",children:"Длительность"})]}):void 0,statusBar:u.jsx(a,{}),style:d},e))})},x={name:"Кейс: поиск «Куда отправимся?»",parameters:{controls:{disable:!0},layout:"fullscreen"},render:function(){const[t,s]=j.useState("А"),o=[["Алматы","340 предложений · Казахстан"],["Астана","53 предложения · Казахстан"],["Ала-Арча","12 предложений · Казахстан"]];return u.jsx(k,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{variant:"search",surface:"solid",title:"Куда отправимся?",left:u.jsx(n,{size:40,icon:u.jsx(M,{direction:"left",size:24}),label:"Назад",bold:!0}),bottom:u.jsx(E4,{value:t,onValueChange:s,placeholder:"Город или место"}),statusBar:u.jsx(a,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(w,{layout:"column",keyboard:u.jsx(k4,{}),style:{position:"absolute",left:0,right:0,bottom:0,"--floating-container-safe-bottom":"0px"},children:u.jsx(A,{size:52,fullWidth:!0,children:"Готово"})})]}),children:u.jsxs("div",{style:{paddingTop:T.statusBar+64+56},children:[u.jsx("p",{className:"im-14-s",style:{margin:0,padding:"12px 16px 8px"},children:"Результаты поиска"}),o.map(([y,F])=>u.jsxs("div",{style:{padding:"10px 16px",borderBottom:"1px solid var(--color-border-default)"},children:[u.jsx("p",{className:"im-14-m",style:{margin:0},children:y}),u.jsx("p",{className:"im-12-r",style:{margin:"2px 0 0",color:"var(--color-text-tertiary)"},children:F})]},y))]})})}},h={name:"Кейс: каталог со сводкой поиска",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx(k,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{variant:"filter",surface:"solid",left:u.jsx(D,{}),center:u.jsx(S,{title:"Бишкек",subtitle:"29 мая, 1 участник"}),right:u.jsx(v,{}),statusBar:u.jsx(a,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(w,{layout:"row",filter:u.jsx(w4,{items:[{label:"29 июл",icon:u.jsx(M4,{size:14})},{label:"1 участник",icon:u.jsx(T4,{size:14})}]}),homeIndicator:u.jsx(z,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:u.jsx(A,{size:48,children:"Выбрать дату"})})]}),children:u.jsxs("div",{style:{paddingTop:T.statusBar+64},children:[u.jsx(i,{title:"Подборка",children:E}),u.jsx("div",{style:{height:240}})]})})},i=({title:e,children:t})=>u.jsxs("section",{style:{padding:"24px 16px 0"},children:[u.jsx("h2",{className:"im-20-b",style:{margin:"0 0 8px"},children:e}),u.jsx("div",{className:"im-16-r",style:{color:"var(--color-text-secondary)"},children:t})]}),E="Поднимемся по ущелью Ала-Арча к водопаду Ак-Сай: тропа идёт вдоль реки через еловый лес, а с перевала видно пик Корона. Гид расскажет, как образовались ледники и почему здесь так много эдельвейсов.",b={name:"Детали: с обложкой",parameters:{controls:{disable:!0},layout:"fullscreen"},render:function(){const t=j.useRef(null),s=j.useRef(null),o=j.useRef(null),{past:y,ready:F}=D4(o,s,{root:t});return u.jsxs(k,{ref:t,overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{ref:s,surface:y?"solid":"cover",instant:!F,title:"Ущелье Ала-Арча и водопад Ак-Сай",titleOnCover:!1,left:u.jsx(g,{}),right:u.jsx(H,{}),statusBar:u.jsx(a,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsxs(w,{visible:y,instant:!F,homeIndicator:u.jsx(z,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsxs("div",{style:{flex:"0 1 auto",display:"grid"},children:[u.jsx("span",{className:"im-20-b",children:"2 900 ⃀"}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:"за человека"})]}),u.jsx(A,{size:48,style:{flex:"0 0 auto"},children:"Выбрать дату"})]})]}),children:[u.jsx("div",{style:{position:"relative",height:420,background:`url(${S4}) center / cover`},children:u.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:24,color:"white"},children:[u.jsx("p",{className:"im-24-b",style:{margin:0},children:"Ущелье Ала-Арча и водопад Ак-Сай"}),u.jsx("p",{className:"im-14-r",style:{margin:"4px 0 16px",opacity:.9},children:"Бишкек · 6 часов · группа до 12 человек"}),u.jsx(A,{size:48,fullWidth:!0,children:"Выбрать дату"})]})}),u.jsx("div",{ref:o,style:{height:1}}),u.jsx(i,{title:"Что вас ждёт",children:E}),u.jsx(i,{title:"Маршрут",children:E}),u.jsx(i,{title:"Что взять с собой",children:E}),u.jsx(i,{title:"Место встречи",children:E}),u.jsx("div",{style:{height:520}})]})},play:async({canvasElement:e})=>{const t=e.querySelector("header");await B(t).toHaveAttribute("data-surface","cover");const s=e.querySelector("[data-phone-scroller]");s.scrollTop=500;const o=t.parentElement.querySelector("[data-layout]");await R(()=>B(t).toHaveAttribute("data-surface","solid"),{timeout:4e3}),await B(o).toHaveAttribute("data-visible"),s.scrollTop=0,await R(()=>B(t).toHaveAttribute("data-surface","cover"),{timeout:4e3}),await B(o).not.toHaveAttribute("data-visible")}},R4=[["Экскурсия","Ущелье Ала-Арча и водопад Ак-Сай"],["Дата","пт, 29 мая, 09:00"],["Участники","2 взрослых"],["Место встречи","Бишкек, площадь Ала-Тоо"],["Гид","Айгерим Асанова"]],f={name:"Заказ: без обложки, оплата",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx(k,{overlay:u.jsxs(u.Fragment,{children:[u.jsx(r,{surface:"solid",title:"Заказ № 482 113",subtitle:"Ожидает оплаты",left:u.jsx(g,{}),statusBar:u.jsx(a,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(w,{layout:"column",bottomText:"Нажимая «Оплатить», вы соглашаетесь с правилами сервиса MTravel",homeIndicator:u.jsx(z,{}),style:{position:"absolute",left:0,right:0,bottom:0},children:u.jsx(A,{size:48,fullWidth:!0,children:"Оплатить 5 800 ⃀"})})]}),children:u.jsxs("div",{style:{paddingTop:T.statusBar+64},children:[R4.map(([e,t])=>u.jsxs("div",{style:{padding:"12px 16px",borderBottom:"1px solid var(--color-border-default)"},children:[u.jsx("p",{className:"im-14-r",style:{margin:0,color:"var(--color-text-tertiary)"},children:e}),u.jsx("p",{className:"im-16-m",style:{margin:"2px 0 0"},children:t})]},e)),u.jsx(i,{title:"Итого",children:"2 × 2 900 ⃀ = 5 800 ⃀. Оплата картой МБанка или в рассрочку через M+."}),u.jsx(i,{title:"Отмена",children:"Бесплатная отмена за 24 часа до начала. Деньги вернутся на карту за 1 – 3 дня."}),u.jsx("div",{style:{height:200}})]})})},P4=["Playground","States","Types","Products","CaseSearch","CaseFilter","DetailsWithCover","OrderPayment"];var P,O,I,N,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      <Appbar {...args} left={<Back />} right={<Actions />} statusBar={<StatusBarMock />} style={{
      ['--appbar-safe-top' as string]: '54px'
    }} />
    </div>
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:"A bar on a blue header, like the Figma page. Switch «surface»: the bar morphs between the two looks.",...(W=(N=l.parameters)==null?void 0:N.docs)==null?void 0:W.description}}};var L,_,$,q,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"The Figma matrix 104:130 (Type Default): Scroll False | True × Show subtitle.",...(U=(q=c.parameters)==null?void 0:q.docs)==null?void 0:U.description}}};var K,Q,V,G,J;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source},description:{story:"Figma Type: Default, Search, Filter, Filter search — on the white bar (Scroll) and over the cover.",...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var X,Y,Z,u4,e4;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Figma Appbar_type 807:5817: the header of each product, a gradient under the status bar. «Выходные» (`excursions`) carry a row of chips.",...(e4=(u4=m.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var t4,r4,a4,n4,s4;x.parameters={...x.parameters,docs:{...(t4=x.parameters)==null?void 0:t4.docs,source:{originalSource:`{
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
}`,...(a4=(r4=x.parameters)==null?void 0:r4.docs)==null?void 0:a4.source},description:{story:"Поиск «Куда отправимся?»: белая шапка с полем под заголовком, ниже результаты, снизу панель «Готово» над клавиатурой.",...(s4=(n4=x.parameters)==null?void 0:n4.docs)==null?void 0:s4.description}}};var o4,i4,l4,c4,d4;h.parameters={...h.parameters,docs:{...(o4=h.parameters)==null?void 0:o4.docs,source:{originalSource:`{
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
}`,...(l4=(i4=h.parameters)==null?void 0:i4.docs)==null?void 0:l4.source},description:{story:"Выходные: результаты поиска — шапка со сводкой «Бишкек, 29 мая, 1 участник» вместо заголовка.",...(d4=(c4=h.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};var p4,m4,x4,h4,b4;b.parameters={...b.parameters,docs:{...(p4=b.parameters)==null?void 0:p4.docs,source:{originalSource:`{
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
}`,...(x4=(m4=b.parameters)==null?void 0:m4.docs)==null?void 0:x4.source},description:{story:`Детали экскурсии: обложка, над ней прозрачная шапка со стеклянными кнопками. Прокрути: как только низ обложки
уходит под шапку, она становится белой, а снизу выезжает панель с ценой и кнопкой — в один и тот же момент.`,...(b4=(h4=b.parameters)==null?void 0:h4.docs)==null?void 0:b4.description}}};var f4,g4,y4,B4,v4;f.parameters={...f.parameters,docs:{...(f4=f.parameters)==null?void 0:f4.docs,source:{originalSource:`{
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
}`,...(y4=(g4=f.parameters)==null?void 0:g4.docs)==null?void 0:y4.source},description:{story:`Заказ и оплата: обложки нет, поэтому шапка сразу белая с заголовком, а панель «Оплатить» видна всегда —
это главное действие экрана, и прятать его незачем.`,...(v4=(B4=f.parameters)==null?void 0:B4.docs)==null?void 0:v4.description}}};const Y4=Object.freeze(Object.defineProperty({__proto__:null,CaseFilter:h,CaseSearch:x,DetailsWithCover:b,OrderPayment:f,Playground:l,Products:m,States:c,Types:p,__namedExportsOrder:P4,default:z4},Symbol.toStringTag,{value:"Module"}));export{Y4 as A,x as C,b as D,f as O,l as P,c as S,p as T,m as a,h as b};
