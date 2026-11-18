import{r as d,j as u}from"./iframe-DuqTOznb.js";import{C as j}from"./Caption-C6jupY-b.js";import{C as a,a as l}from"./Cell-DbWJlVzG.js";import{R as au}from"./Radio-Bz4AqS0k.js";import{L as c}from"./places-z-kxph-t.js";import{a as tu,U as su}from"./people-s6FNqSUd.js";import{F as iu}from"./general-DYSfllt2.js";import{S as T}from"./SummaryRow-DUAMsLpZ.js";import{P as ru}from"./PromoBadge-DMs6_-GK.js";import{b as f}from"./time-CsMT4GVj.js";import{S as ou}from"./SectionTitle-DUrzhWiT.js";const{expect:i,fn:O,userEvent:F,waitFor:I,within:P}=__STORYBOOK_MODULE_TEST__,lu="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=47-163",G={none:void 0,Часы:u.jsx(f,{}),Пин:u.jsx(c,{})},cu={title:"Components/Cell",component:a,parameters:{design:{type:"figma",url:lu},layout:"fullscreen"},args:{title:"Бишкек",subtitle:"340 предложений · Кыргызстан",icon:u.jsx(c,{}),iconSize:40,background:!1,skeleton:!1,divider:!1,dividerVariant:"inset",disclosure:!0,onClick:O()},argTypes:{title:{control:"text"},subtitle:{control:"text"},label:{control:"text"},icon:{control:"select",options:Object.keys(G),mapping:G},iconSize:{control:"inline-radio",options:[32,40]},dividerVariant:{control:"inline-radio",options:["inset","full"]},disclosure:{control:"boolean"},leading:{control:!1},onClick:{control:!1},forcePressed:{control:!1},centerVariant:{control:"inline-radio",options:[void 0,"title","title-subtitle","label-title"]}},decorators:[n=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(n,{})})]},p=({children:n,first:e=!1})=>u.jsx("div",{style:{paddingTop:e?0:24},children:u.jsx(ou,{as:"h3",size:18,children:n})}),m={},b={name:"Нажатие",parameters:{controls:{disable:!0}},render:()=>{const[n,e]=d.useState(!0),[s,t]=d.useState(!1),[o,r]=d.useState(!0);return u.jsxs("div",{style:{display:"grid",gap:24,padding:16,maxWidth:393},children:[u.jsxs("div",{children:[u.jsx(j,{children:"С шевроном, строка на странице: сжимается содержимое"}),u.jsx(a,{title:"Бишкек",subtitle:"340 предложений",icon:u.jsx(c,{}),iconSize:40,disclosure:!0,divider:!0,onClick:()=>{}})]}),u.jsxs("div",{children:[u.jsx(j,{children:"С шевроном, карточка (Background): сжимается вся"}),u.jsx(a,{title:"Иссык-Куль",subtitle:"120 предложений",icon:u.jsx(c,{}),iconSize:40,background:!0,disclosure:!0,onClick:()=>{}})]}),u.jsxs("div",{"data-case":"controls",children:[u.jsx(j,{children:"С контролом: строка стоит, нажимается контрол"}),u.jsx(a,{title:"Уведомления",disclosure:u.jsx(l,{variant:"toggle",checked:n,onCheckedChange:e})}),u.jsx(a,{title:"Трансфер от отеля",disclosure:u.jsx(l,{variant:"checkbox",checked:s,onCheckedChange:t})})]}),u.jsxs("div",{"data-case":"check",children:[u.jsx(j,{children:"С галочкой: строка стоит, появляется галочка"}),u.jsx(a,{title:"Алматы",disclosure:u.jsx(l,{variant:"check",checked:o}),onClick:()=>r(S=>!S)})]})]})}},v={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:24},children:[!1,!0].map(n=>u.jsxs("div",{style:{display:"grid",gap:12,padding:n?"0 16px":0},children:[u.jsx(j,{children:n?"Background = True":"Background = False"}),[!1,!0].map(e=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(j,{children:e?"State = Shimmer":"State = Default"}),u.jsx(a,{title:"Заголовок",background:n,skeleton:e,disclosure:!0}),u.jsx(a,{title:"Заголовок",icon:u.jsx(f,{}),iconSize:32,background:n,skeleton:e,disclosure:!0}),u.jsx(a,{title:"Заголовок",icon:u.jsx(f,{}),iconSize:40,background:n,skeleton:e,disclosure:!0})]},String(e)))]},String(n)))})},E={name:"Строки текста",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid"},children:[u.jsx(a,{title:"Заголовок",disclosure:!0}),u.jsx(a,{title:"Бишкек",subtitle:"29 мая, 1 участник",icon:u.jsx(f,{}),iconSize:40,disclosure:!0}),u.jsx(a,{label:"Участники",title:"2 человека",icon:u.jsx(tu,{}),disclosure:!0})]})},C={name:"Разделитель",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:16},children:[u.jsx(a,{title:"Inset",subtitle:"Линия начинается под текстом",icon:u.jsx(c,{}),iconSize:40,divider:!0}),u.jsx(a,{title:"Full",subtitle:"Линия во всю ширину",icon:u.jsx(c,{}),iconSize:40,divider:!0,dividerVariant:"full"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(a,{background:!0,title:"На карточке",subtitle:"Линия divider/border/on-sunken",icon:u.jsx(c,{}),divider:!0})})]})},du=[{id:"bishkek",title:"Бишкек"},{id:"karakol",title:"Каракол"},{id:"ala-archa",title:"Ала-Арча"}],z=[{id:"bishkek",title:"Бишкек",sub:"340 предложений · Кыргызстан"},{id:"karakol",title:"Каракол",sub:"340 предложений · Кыргызстан"},{id:"almaty",title:"Алматы",sub:"340 предложений · Казахстан"},{id:"astana",title:"Астана",sub:"340 предложений · Казахстан"},{id:"kok-bel",title:"Кок-Бел",sub:"4 предложения · Кыргызстан"},{id:"ala-archa",title:"Ала-Арча",sub:"12 предложений · Кыргызстан"},{id:"cholpon-ata",title:"Чолпон-Ата",sub:"340 предложений · Кыргызстан"},{id:"samarkand",title:"Самарканд",sub:"340 предложений · Узбекистан"},{id:"tashkent",title:"Ташкент",sub:"12 предложений · Узбекистан"},{id:"bukhara",title:"Бухара",sub:"34 предложения · Узбекистан"}],B={name:"Кейсы / Выбор направления",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[e,s]=d.useState(null);return u.jsxs("div",{"aria-label":"Куда отправимся?",children:[u.jsx(p,{first:!0,children:"Недавно искали"}),du.map(t=>u.jsx(a,{title:t.title,subtitle:"29 мая, 1 участник",icon:u.jsx(f,{}),iconSize:40,onClick:()=>s(t.title)},t.id)),u.jsx(p,{children:"Популярные направления"}),z.map((t,o)=>u.jsx(a,{title:t.title,subtitle:t.sub,icon:u.jsx(c,{}),iconSize:40,divider:o<z.length-1,onClick:()=>s(t.title)},t.id)),u.jsx("output",{style:{display:"block",padding:16},className:"im-12-r",children:e?`Выбрано: ${e}`:"Ничего не выбрано"})]})}},g={name:"Кейсы / Выбранный город с галочкой",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[e,s]=d.useState("almaty");return u.jsx("div",{role:"listbox","aria-label":"Город",children:z.slice(0,5).map((t,o)=>u.jsx(a,{role:"option","aria-selected":e===t.id,title:t.title,subtitle:t.sub,icon:u.jsx(c,{}),iconSize:40,divider:o<4,disclosure:u.jsx(l,{variant:"check",checked:e===t.id}),onClick:()=>s(t.id)},t.id))})},play:async({canvasElement:n})=>{const e=P(n),s=e.getByRole("option",{name:/Алматы/});await i(s).toHaveAttribute("aria-selected","true"),await F.click(e.getByRole("option",{name:/Астана/})),await i(e.getByRole("option",{name:/Астана/})).toHaveAttribute("aria-selected","true"),await i(s).toHaveAttribute("aria-selected","false")}},L=8,k={name:"Кейсы / Участники со счётчиком",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[e,s]=d.useState(1),[t,o]=d.useState(0),r=e+t;return u.jsxs("div",{children:[u.jsx(a,{title:"Взрослый",subtitle:"Старше 18 лет",disclosure:u.jsx(l,{variant:"counter",counter:{value:e,onValueChange:s,min:1,max:L-t,incrementLabel:"Добавить взрослого",decrementLabel:"Убрать взрослого"}})}),u.jsx(a,{title:"Ребёнок",subtitle:"До 18 лет",disclosure:u.jsx(l,{variant:"counter",counter:{value:t,onValueChange:o,min:0,max:L-e,incrementLabel:"Добавить ребёнка",decrementLabel:"Убрать ребёнка"}})}),u.jsx("output",{style:{display:"block",padding:16},className:"im-12-r","aria-live":"polite",children:r===L?"Больше 8 человек добавить нельзя":`Участников: ${r}`})]})}},pu=["Трансфер от отеля","Можно с детьми","Обед включён","Гид говорит по-английски"],h={name:"Кейсы / Фильтры: чекбокс, радио, переключатель",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[e,s]=d.useState(new Set(["Можно с детьми"])),[t,o]=d.useState(!1);return u.jsxs("div",{children:[u.jsx(p,{first:!0,children:"Удобства"}),pu.map(r=>u.jsx(a,{title:r,disclosure:u.jsx(l,{variant:"checkbox",checked:e.has(r),onCheckedChange:S=>s(nu=>{const R=new Set(nu);return S?R.add(r):R.delete(r),R})})},r)),u.jsx(p,{children:"Сортировка"}),u.jsx(au,{defaultValue:"popular","aria-label":"Сортировка",children:[["popular","Сначала популярные"],["cheap","Сначала дешёвые"],["rating","С высоким рейтингом"]].map(([r,S])=>u.jsx(a,{title:S,disclosure:u.jsx(l,{variant:"radio",value:r})},r))}),u.jsx(p,{children:"Уведомления"}),u.jsx(a,{title:"Сообщать о снижении цены",subtitle:"Пришлём пуш, если цена упадёт",disclosure:u.jsx(l,{variant:"toggle",checked:t,onCheckedChange:o})})]})},play:async({canvasElement:n})=>{const e=P(n),s=e.getByRole("checkbox",{name:"Обед включён"});await i(s).not.toBeChecked(),await F.click(e.getByText("Обед включён")),await i(s).toBeChecked();const t=e.getByRole("switch",{name:"Сообщать о снижении цены"});await F.click(e.getByText("Пришлём пуш, если цена упадёт")),await i(t).toBeChecked()}},H={display:"inline-grid",placeItems:"center",width:32,height:32,borderRadius:12,background:"var(--color-icon-accent)",color:"var(--color-icon-inverse-constant-primary)"},x={name:"Кейсы / Детали заказа",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{children:[u.jsx(p,{first:!0,children:"Детали заказа"}),u.jsx(a,{label:"Участники",title:"2 человека",leading:u.jsx("span",{style:H,children:u.jsx(tu,{})}),divider:!0,disclosure:!0,onClick:()=>{}}),u.jsx(a,{title:"Ильдар Забиров",subtitle:"+996 (553) 24 64 88",leading:u.jsx("span",{style:H,children:u.jsx(su,{size:20})}),disclosure:!0,onClick:()=>{}}),u.jsx(p,{children:"Условия возврата"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(a,{background:!0,title:"Правила возврата",subtitle:"Ознакомьтесь перед оплатой",icon:u.jsx(iu,{}),iconSize:40,iconBackground:!1,disclosure:!0,onClick:()=>{}})}),u.jsxs("div",{style:{padding:"24px 16px 0"},children:[u.jsx(T,{variant:"total",label:"К оплате",value:"44 100 ⃀"}),u.jsx(T,{label:"за 2 человека",value:"49 000 ⃀"}),u.jsx(T,{label:"Скидка",badge:u.jsx(ru,{variant:"discount",value:10}),value:"−4 900 ⃀"})]})]})},w={name:"Кейсы / Загрузка списка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx("div",{"aria-busy":"true",children:[0,1,2].map(n=>u.jsx(a,{skeleton:!0,icon:u.jsx(c,{}),iconSize:40,title:"",subtitle:"",disclosure:!0},n))})},y={name:"Тест: тап и клавиатура",args:{title:"Каракол",onClick:O()},play:async({canvasElement:n,args:e})=>{const t=P(n).getByRole("button",{name:/Каракол/});await F.click(t),await i(e.onClick).toHaveBeenCalledTimes(1),t.focus(),await F.keyboard("{Enter}"),await I(()=>i(e.onClick).toHaveBeenCalledTimes(2)),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,button:0})),await I(()=>i(t).toHaveAttribute("data-pressed")),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0}))}},A={name:"Тест: disabled доходит до контрола",parameters:{controls:{disable:!0}},render:()=>u.jsx(a,{disabled:!0,title:"Сообщать о снижении цены",disclosure:u.jsx(l,{variant:"toggle"})}),play:async({canvasElement:n})=>{const e=P(n).getByRole("switch",{name:"Сообщать о снижении цены"});await i(e).toBeDisabled()}},D={name:"Тест: свои обработчики и ссылка",parameters:{controls:{disable:!0}},args:{onPointerDown:O()},render:n=>u.jsxs("div",{children:[u.jsx(a,{title:"Каракол",onClick:()=>{},onPointerDown:n.onPointerDown}),u.jsx(a,{title:"Правила сервиса",href:"#rules",target:"_blank"})]}),play:async({canvasElement:n,args:e})=>{const s=P(n),t=s.getByRole("button",{name:/Каракол/});t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,button:0})),await I(()=>i(t).toHaveAttribute("data-pressed")),await i(e.onPointerDown).toHaveBeenCalledTimes(1),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0}));const o=s.getByRole("link",{name:/Правила сервиса/});await i(o).toHaveAttribute("rel","noopener noreferrer"),await i(t.querySelector("div")).toBeNull()}},mu=["Playground","Pressing","Variants","TextLines","Dividers","CasePickDirection","CaseSelectedCheck","CaseParticipants","CaseFilters","CaseOrderDetails","CaseLoading","BehaviourTest","DisabledTest","HandlersTest"];var _,N,V,U,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(V=(N=m.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Тапни строку: она отзывается сразу, как палец коснулся.",...(M=(U=m.parameters)==null?void 0:U.docs)==null?void 0:M.description}}};var X,W,$,q,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Нажатие',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [on, setOn] = useState(true);
    const [transfer, setTransfer] = useState(false);
    const [picked, setPicked] = useState(true);
    return <div style={{
      display: 'grid',
      gap: 24,
      padding: 16,
      maxWidth: 393
    }}>
        <div>
          <Caption>С шевроном, строка на странице: сжимается содержимое</Caption>
          <Cell title="Бишкек" subtitle="340 предложений" icon={<LocationPinIcon />} iconSize={40} disclosure divider onClick={() => {}} />
        </div>
        <div>
          <Caption>С шевроном, карточка (Background): сжимается вся</Caption>
          <Cell title="Иссык-Куль" subtitle="120 предложений" icon={<LocationPinIcon />} iconSize={40} background disclosure onClick={() => {}} />
        </div>
        <div data-case="controls">
          <Caption>С контролом: строка стоит, нажимается контрол</Caption>
          <Cell title="Уведомления" disclosure={<CellDisclosure variant="toggle" checked={on} onCheckedChange={setOn} />} />
          <Cell title="Трансфер от отеля" disclosure={<CellDisclosure variant="checkbox" checked={transfer} onCheckedChange={setTransfer} />} />
        </div>
        <div data-case="check">
          <Caption>С галочкой: строка стоит, появляется галочка</Caption>
          <Cell title="Алматы" disclosure={<CellDisclosure variant="check" checked={picked} />} onClick={() => setPicked(v => !v)} />
        </div>
      </div>;
  }
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source},description:{story:`Нажатие. Пружина только у строки с шевроном: зажми её, она сжимается сразу, отпусти, возвращается с небольшим перелётом.
Строки с переключателем и чекбоксом стоят на месте: нажатие показывает сам контрол, его и переключает тап.
Строка с галочкой тоже не двигается, отклик на тап — появление галочки.
Включи в тулбаре Motion → «Замедление ×4», чтобы разглядеть перелёт; «Reduced motion» заменяет сжатие на короткое затемнение.`,...(K=(q=b.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var Y,J,Q,Z,u4;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      {([false, true] as const).map(bg => <div key={String(bg)} style={{
      display: 'grid',
      gap: 12,
      padding: bg ? '0 16px' : 0
    }}>
          <Caption>{bg ? 'Background = True' : 'Background = False'}</Caption>
          {([false, true] as const).map(skeleton => <div key={String(skeleton)} style={{
        display: 'grid',
        gap: 4
      }}>
              <Caption>{skeleton ? 'State = Shimmer' : 'State = Default'}</Caption>
              <Cell title="Заголовок" background={bg} skeleton={skeleton} disclosure />
              <Cell title="Заголовок" icon={<ClockNineIcon />} iconSize={32} background={bg} skeleton={skeleton} disclosure />
              <Cell title="Заголовок" icon={<ClockNineIcon />} iconSize={40} background={bg} skeleton={skeleton} disclosure />
            </div>)}
        </div>)}
    </div>
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"The Figma matrix 47:163: Leading None | Icon 32 | Icon 40 × Background × State Default | Shimmer (Sub-cell looks the same).",...(u4=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:u4.description}}};var e4,t4,n4,a4,s4;E.parameters={...E.parameters,docs:{...(e4=E.parameters)==null?void 0:e4.docs,source:{originalSource:`{
  name: 'Строки текста',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid'
  }}>
      <Cell title="Заголовок" disclosure />
      <Cell title="Бишкек" subtitle="29 мая, 1 участник" icon={<ClockNineIcon />} iconSize={40} disclosure />
      <Cell label="Участники" title="2 человека" icon={<UsersIcon />} disclosure />
    </div>
}`,...(n4=(t4=E.parameters)==null?void 0:t4.docs)==null?void 0:n4.source},description:{story:"Two text lines: Center Type = Title + Subtitle and Label + Title. The row is 64 high with a 40 px icon.",...(s4=(a4=E.parameters)==null?void 0:a4.docs)==null?void 0:s4.description}}};var i4,r4,o4,l4,c4;C.parameters={...C.parameters,docs:{...(i4=C.parameters)==null?void 0:i4.docs,source:{originalSource:`{
  name: 'Разделитель',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <Cell title="Inset" subtitle="Линия начинается под текстом" icon={<LocationPinIcon />} iconSize={40} divider />
      <Cell title="Full" subtitle="Линия во всю ширину" icon={<LocationPinIcon />} iconSize={40} divider dividerVariant="full" />
      <div style={{
      padding: '0 16px'
    }}>
        <Cell background title="На карточке" subtitle="Линия divider/border/on-sunken" icon={<LocationPinIcon />} divider />
      </div>
    </div>
}`,...(o4=(r4=C.parameters)==null?void 0:r4.docs)==null?void 0:o4.source},description:{story:"Divider = on: a 1 px line along the bottom edge, Inset starts under the text, Full spans the width. On a card (Background) the line is divider/border/on-sunken.",...(c4=(l4=C.parameters)==null?void 0:l4.docs)==null?void 0:c4.description}}};var d4,p4,m4,b4,v4;B.parameters={...B.parameters,docs:{...(d4=B.parameters)==null?void 0:d4.docs,source:{originalSource:`{
  name: 'Кейсы / Выбор направления',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [picked, setPicked] = useState<string | null>(null);
    return <div aria-label="Куда отправимся?">
        <Group first>Недавно искали</Group>
        {RECENT.map(r => <Cell key={r.id} title={r.title} subtitle="29 мая, 1 участник" icon={<ClockNineIcon />} iconSize={40} onClick={() => setPicked(r.title)} />)}
        <Group>Популярные направления</Group>
        {POPULAR.map((p, i) => <Cell key={p.id} title={p.title} subtitle={p.sub} icon={<LocationPinIcon />} iconSize={40} divider={i < POPULAR.length - 1} onClick={() => setPicked(p.title)} />)}
        <output style={{
        display: 'block',
        padding: 16
      }} className="im-12-r">
          {picked ? \`Выбрано: \${picked}\` : 'Ничего не выбрано'}
        </output>
      </div>;
  }
}`,...(m4=(p4=B.parameters)==null?void 0:p4.docs)==null?void 0:m4.source},description:{story:"«Выходные» → «Куда отправимся?» → «Ничего не выбрано» (402:21701, 3448:348315): history rows and popular places.",...(v4=(b4=B.parameters)==null?void 0:b4.docs)==null?void 0:v4.description}}};var E4,C4,B4,g4,k4;g.parameters={...g.parameters,docs:{...(E4=g.parameters)==null?void 0:E4.docs,source:{originalSource:`{
  name: 'Кейсы / Выбранный город с галочкой',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [picked, setPicked] = useState('almaty');
    return <div role="listbox" aria-label="Город">
        {POPULAR.slice(0, 5).map((p, i) => <Cell key={p.id} role="option" aria-selected={picked === p.id} title={p.title} subtitle={p.sub} icon={<LocationPinIcon />} iconSize={40} divider={i < 4} disclosure={<CellDisclosure variant="check" checked={picked === p.id} />} onClick={() => setPicked(p.id)} />)}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const almaty = canvas.getByRole('option', {
      name: /Алматы/
    });
    await expect(almaty).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('option', {
      name: /Астана/
    }));
    await expect(canvas.getByRole('option', {
      name: /Астана/
    })).toHaveAttribute('aria-selected', 'true');
    await expect(almaty).toHaveAttribute('aria-selected', 'false');
  }
}`,...(B4=(C4=g.parameters)==null?void 0:C4.docs)==null?void 0:B4.source},description:{story:"The chosen place carries a check mark (Disclosure Type = Checked); tapping another row moves it.",...(k4=(g4=g.parameters)==null?void 0:g4.docs)==null?void 0:k4.description}}};var h4,x4,w4,y4,A4;k.parameters={...k.parameters,docs:{...(h4=k.parameters)==null?void 0:h4.docs,source:{originalSource:`{
  name: 'Кейсы / Участники со счётчиком',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const total = adults + children;
    return <div>
        <Cell title="Взрослый" subtitle="Старше 18 лет" disclosure={<CellDisclosure variant="counter" counter={{
        value: adults,
        onValueChange: setAdults,
        min: 1,
        max: MAX_PEOPLE - children,
        incrementLabel: 'Добавить взрослого',
        decrementLabel: 'Убрать взрослого'
      }} />} />
        <Cell title="Ребёнок" subtitle="До 18 лет" disclosure={<CellDisclosure variant="counter" counter={{
        value: children,
        onValueChange: setChildren,
        min: 0,
        max: MAX_PEOPLE - adults,
        incrementLabel: 'Добавить ребёнка',
        decrementLabel: 'Убрать ребёнка'
      }} />} />
        <output style={{
        display: 'block',
        padding: 16
      }} className="im-12-r" aria-live="polite">
          {total === MAX_PEOPLE ? 'Больше 8 человек добавить нельзя' : \`Участников: \${total}\`}
        </output>
      </div>;
  }
}`,...(w4=(x4=k.parameters)==null?void 0:x4.docs)==null?void 0:w4.source},description:{story:"«Участники» (808:60056 … «Нельзя добавить более 8»): a row with a Counter; the limit is 8 people together.",...(A4=(y4=k.parameters)==null?void 0:y4.docs)==null?void 0:A4.description}}};var D4,j4,S4,f4,F4;h.parameters={...h.parameters,docs:{...(D4=h.parameters)==null?void 0:D4.docs,source:{originalSource:`{
  name: 'Кейсы / Фильтры: чекбокс, радио, переключатель',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: function Render() {
    const [on, setOn] = useState<Set<string>>(new Set(['Можно с детьми']));
    const [alerts, setAlerts] = useState(false);
    return <div>
        <Group first>Удобства</Group>
        {FILTERS.map(f => <Cell key={f} title={f} disclosure={<CellDisclosure variant="checkbox" checked={on.has(f)} onCheckedChange={v => setOn(s => {
        const n = new Set(s);
        if (v) n.add(f);else n.delete(f);
        return n;
      })} />} />)}
        <Group>Сортировка</Group>
        <RadioGroup defaultValue="popular" aria-label="Сортировка">
          {[['popular', 'Сначала популярные'], ['cheap', 'Сначала дешёвые'], ['rating', 'С высоким рейтингом']].map(([v, t]) => <Cell key={v} title={t} disclosure={<CellDisclosure variant="radio" value={v} />} />)}
        </RadioGroup>
        <Group>Уведомления</Group>
        <Cell title="Сообщать о снижении цены" subtitle="Пришлём пуш, если цена упадёт" disclosure={<CellDisclosure variant="toggle" checked={alerts} onCheckedChange={setAlerts} />} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Обед включён'
    });
    await expect(box).not.toBeChecked();
    // a tap on the title text (not on the box) flips it
    await userEvent.click(canvas.getByText('Обед включён'));
    await expect(box).toBeChecked();
    const sw = canvas.getByRole('switch', {
      name: 'Сообщать о снижении цены'
    });
    await userEvent.click(canvas.getByText('Пришлём пуш, если цена упадёт'));
    await expect(sw).toBeChecked();
  }
}`,...(S4=(j4=h.parameters)==null?void 0:j4.docs)==null?void 0:S4.source},description:{story:"Filter rows («Фильтрация», 77 checkbox and 5 radio rows in «Выходные»): the whole row flips its control.",...(F4=(f4=h.parameters)==null?void 0:f4.docs)==null?void 0:F4.description}}};var P4,R4,T4,L4,I4;x.parameters={...x.parameters,docs:{...(P4=x.parameters)==null?void 0:P4.docs,source:{originalSource:`{
  name: 'Кейсы / Детали заказа',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <div>
      <Group first>Детали заказа</Group>
      <Cell label="Участники" title="2 человека" leading={<span style={tile}>
            <UsersIcon />
          </span>} divider disclosure onClick={() => {}} />
      <Cell title="Ильдар Забиров" subtitle="+996 (553) 24 64 88" leading={<span style={tile}>
            <UserIcon size={20} />
          </span>} disclosure onClick={() => {}} />
      <Group>Условия возврата</Group>
      <div style={{
      padding: '0 16px'
    }}>
        <Cell background title="Правила возврата" subtitle="Ознакомьтесь перед оплатой" icon={<FileIcon />} iconSize={40} iconBackground={false} disclosure onClick={() => {}} />
      </div>
      <div style={{
      padding: '24px 16px 0'
    }}>
        <SummaryRow variant="total" label="К оплате" value="44 100 ⃀" />
        <SummaryRow label="за 2 человека" value="49 000 ⃀" />
        <SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="−4 900 ⃀" />
      </div>
    </div>
}`,...(T4=(R4=x.parameters)==null?void 0:R4.docs)==null?void 0:T4.source},description:{story:"«Оформление заказа» (1338:109481): participants, contact, the refund rules on a card, and the bill.",...(I4=(L4=x.parameters)==null?void 0:L4.docs)==null?void 0:I4.description}}};var z4,O4,G4,H4,_4;w.parameters={...w.parameters,docs:{...(z4=w.parameters)==null?void 0:z4.docs,source:{originalSource:`{
  name: 'Кейсы / Загрузка списка',
  parameters: {
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <div aria-busy="true">
      {[0, 1, 2].map(i => <Cell key={i} skeleton icon={<LocationPinIcon />} iconSize={40} title="" subtitle="" disclosure />)}
    </div>
}`,...(G4=(O4=w.parameters)==null?void 0:O4.docs)==null?void 0:G4.source},description:{story:"The row while the list loads: Figma State = Shimmer; one shimmer runs across the whole row.",...(_4=(H4=w.parameters)==null?void 0:H4.docs)==null?void 0:_4.description}}};var N4,V4,U4,M4,X4;y.parameters={...y.parameters,docs:{...(N4=y.parameters)==null?void 0:N4.docs,source:{originalSource:`{
  name: 'Тест: тап и клавиатура',
  args: {
    title: 'Каракол',
    onClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole('button', {
      name: /Каракол/
    });
    await userEvent.click(row);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    row.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
    // press look starts on pointer-down, not on release
    row.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true,
      button: 0
    }));
    await waitFor(() => expect(row).toHaveAttribute('data-pressed'));
    row.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true,
      button: 0
    }));
  }
}`,...(U4=(V4=y.parameters)==null?void 0:V4.docs)==null?void 0:U4.source},description:{story:"Interaction test: the row is a real button, a tap calls onClick, Enter works.",...(X4=(M4=y.parameters)==null?void 0:M4.docs)==null?void 0:X4.description}}};var W4,$4,q4,K4,Y4;A.parameters={...A.parameters,docs:{...(W4=A.parameters)==null?void 0:W4.docs,source:{originalSource:`{
  name: 'Тест: disabled доходит до контрола',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Cell disabled title="Сообщать о снижении цены" disclosure={<CellDisclosure variant="toggle" />} />,
  play: async ({
    canvasElement
  }) => {
    const sw = within(canvasElement).getByRole('switch', {
      name: 'Сообщать о снижении цены'
    });
    await expect(sw).toBeDisabled();
  }
}`,...(q4=($4=A.parameters)==null?void 0:$4.docs)==null?void 0:q4.source},description:{story:"The row's own `disabled` reaches the control inside it: the switch on the right goes grey too.",...(Y4=(K4=A.parameters)==null?void 0:K4.docs)==null?void 0:Y4.description}}};var J4,Q4,Z4,uu,eu;D.parameters={...D.parameters,docs:{...(J4=D.parameters)==null?void 0:J4.docs,source:{originalSource:`{
  name: 'Тест: свои обработчики и ссылка',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onPointerDown: fn()
  },
  render: args => <div>
      <Cell title="Каракол" onClick={() => {}} onPointerDown={args.onPointerDown} />
      <Cell title="Правила сервиса" href="#rules" target="_blank" />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByRole('button', {
      name: /Каракол/
    });
    row.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true,
      button: 0
    }));
    await waitFor(() => expect(row).toHaveAttribute('data-pressed'));
    await expect(args.onPointerDown).toHaveBeenCalledTimes(1);
    row.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true,
      button: 0
    }));
    const link = canvas.getByRole('link', {
      name: /Правила сервиса/
    });
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    // a row that is a button holds only phrasing content
    await expect(row.querySelector('div')).toBeNull();
  }
}`,...(Z4=(Q4=D.parameters)==null?void 0:Q4.docs)==null?void 0:Z4.source},description:{story:"Your own pointer handlers still run next to the press feedback, and a link row takes `target` and `rel`.",...(eu=(uu=D.parameters)==null?void 0:uu.docs)==null?void 0:eu.description}}};const Au=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:y,CaseFilters:h,CaseLoading:w,CaseOrderDetails:x,CaseParticipants:k,CasePickDirection:B,CaseSelectedCheck:g,DisabledTest:A,Dividers:C,HandlersTest:D,Playground:m,Pressing:b,TextLines:E,Variants:v,__namedExportsOrder:mu,default:cu},Symbol.toStringTag,{value:"Module"}));export{Au as C,C as D,m as P,E as T,v as V,B as a,g as b,k as c,h as d,x as e,w as f,b as g};
