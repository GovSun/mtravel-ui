import{r as p,j as u}from"./iframe-DyD5Yel4.js";import{D as du}from"./photos-D1Eacwwu.js";import{C as f}from"./Caption-D_clnAXK.js";import{C as e,a as c}from"./Cell-BMryoHV2.js";import{b as a}from"./time-lpmEQjgl.js";import{a as cu,U as pu}from"./people-tOiSq3ZR.js";import{F as mu,a as Eu}from"./general-CSE0kF9v.js";import{A as bu}from"./Avatar-BxJZJPWd.js";import{L as m}from"./places-CYDz-5dl.js";import{F as I}from"./FlagIcon-Lj2B5Mol.js";import{S as gu}from"./SectionTitle-CwRady4O.js";import{C as Cu}from"./deprecated-D5zQVeCK.js";const{expect:o,fn:G,userEvent:L,waitFor:O,within:z}=__STORYBOOK_MODULE_TEST__,P="kg",vu=du.kettik,xu="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=47-163",N={none:void 0,Часы:u.jsx(a,{}),Пин:u.jsx(m,{})},Bu={title:"Components/Cell",component:e,parameters:{design:{type:"figma",url:xu},layout:"fullscreen"},args:{title:"Заголовок",background:!1,skeleton:!1,divider:!1,dividerVariant:"inset",disclosure:!0,onClick:G()},argTypes:{title:{control:"text"},subtitle:{control:"text"},label:{control:"text"},icon:{control:"select",options:Object.keys(N),mapping:N},iconSize:{control:"inline-radio",options:[32,40]},dividerVariant:{control:"inline-radio",options:["inset","full"]},disclosure:{control:"boolean"},leading:{control:!1},onClick:{control:!1},forcePressed:{control:!1},centerVariant:{control:"inline-radio",options:[void 0,"title","title-subtitle","label-title"]}},decorators:[s=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(s,{})})]},S=({children:s,first:n=!1})=>u.jsx("div",{style:{paddingTop:n?0:24},children:u.jsx(gu,{as:"h3",size:18,children:s})}),E={},b={name:"Нажатие",parameters:{controls:{disable:!0}},render:()=>{const[s,n]=p.useState(!0),[i,t]=p.useState(!1),[r,l]=p.useState(!0);return u.jsxs("div",{style:{display:"grid",gap:24,padding:16,maxWidth:393},children:[u.jsxs("div",{children:[u.jsx(f,{children:"С шевроном, строка на странице: сжимается содержимое"}),u.jsx(e,{title:"Бишкек",subtitle:"340 предложений",icon:u.jsx(m,{}),iconSize:40,disclosure:!0,divider:!0,onClick:()=>{}})]}),u.jsxs("div",{children:[u.jsx(f,{children:"С шевроном, карточка (Background): сжимается вся"}),u.jsx(e,{title:"Иссык-Куль",subtitle:"120 предложений",icon:u.jsx(m,{}),iconSize:40,background:!0,disclosure:!0,onClick:()=>{}})]}),u.jsxs("div",{"data-case":"controls",children:[u.jsx(f,{children:"С контролом: строка стоит, нажимается контрол"}),u.jsx(e,{title:"Уведомления",disclosure:u.jsx(c,{variant:"toggle",checked:s,onCheckedChange:n})}),u.jsx(e,{title:"Трансфер от отеля",disclosure:u.jsx(c,{variant:"checkbox",checked:i,onCheckedChange:t})})]}),u.jsxs("div",{"data-case":"check",children:[u.jsx(f,{children:"С галочкой: строка стоит, появляется галочка"}),u.jsx(e,{title:"Алматы",disclosure:u.jsx(c,{variant:"check",checked:r}),onClick:()=>l(d=>!d)})]})]})}},g={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:24},children:[!1,!0].map(s=>u.jsxs("div",{style:{display:"grid",gap:12,padding:s?"0 16px":0},children:[u.jsx(f,{children:s?"Background = True":"Background = False"}),[!1,!0].map(n=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(f,{children:n?"State = Shimmer":"State = Default"}),u.jsx(e,{title:"Заголовок",background:s,skeleton:n,disclosure:!0}),u.jsx(e,{title:"Заголовок",icon:u.jsx(a,{}),iconSize:32,background:s,skeleton:n,disclosure:!0}),u.jsx(e,{title:"Заголовок",icon:u.jsx(a,{}),iconSize:40,background:s,skeleton:n,disclosure:!0}),u.jsx(e,{title:"Icon 20: текст в 12 от иконки",icon:u.jsx(a,{}),iconSize:20,background:s,skeleton:n,disclosure:!0}),!n&&u.jsx(e,{title:"Icon full 32: флаг на весь слот",leading:u.jsx(I,{country:P,size:32}),iconSize:32,background:s,disclosure:!0}),!n&&u.jsx(e,{title:"Icon full 40",leading:u.jsx(I,{country:P,size:40}),iconSize:40,background:s,disclosure:!0})]},String(n)))]},String(s)))})},C={name:"Иконка слева: зазор 12 от видимого края",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(e,{title:"Трансфер",subtitle:"Icon 20",icon:u.jsx(a,{}),iconSize:20,divider:!0}),u.jsx(e,{title:"Кыргызстан",subtitle:"Icon full 32",leading:u.jsx(I,{country:P,size:32}),iconSize:32,divider:!0}),u.jsx(e,{title:"Кыргызстан",subtitle:"Icon full 40",leading:u.jsx(I,{country:P,size:40}),iconSize:40,divider:!0}),u.jsx(e,{title:"Для сравнения: Icon 32",subtitle:"иконка 20 в боксе 32",icon:u.jsx(a,{}),iconSize:32,divider:!0})]})},v={name:"Строки текста",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid"},children:[u.jsx(e,{title:"Заголовок",disclosure:!0}),u.jsx(e,{title:"Бишкек",subtitle:"29 мая, 1 участник",icon:u.jsx(a,{}),iconSize:40,disclosure:!0}),u.jsx(e,{label:"Участники",title:"2 человека",icon:u.jsx(cu,{}),disclosure:!0})]})},x={name:"Разделитель",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:16},children:[u.jsx(e,{title:"Inset",subtitle:"Линия начинается под текстом",icon:u.jsx(m,{}),iconSize:40,divider:!0}),u.jsx(e,{title:"Full",subtitle:"Линия во всю ширину",icon:u.jsx(m,{}),iconSize:40,divider:!0,dividerVariant:"full"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(e,{background:!0,title:"На карточке",subtitle:"Линия divider/border/on-sunken",icon:u.jsx(m,{}),divider:!0})})]})},hu=[{id:"bishkek",title:"Бишкек",sub:"29 мая, 1 участник"}],_=[{id:"bishkek",title:"Бишкек",sub:"340 предложений ∙ Кыргзыстан"},{id:"karakol",title:"Каракол",sub:"340 предложений ∙ Кыргзыстан"},{id:"almaty",title:"Алматы",sub:"340 предложений ∙ Казахстан"},{id:"astana",title:"Астана",sub:"340 предложений ∙ Казахстан"},{id:"kok-bel",title:"Кок-Бел",sub:"4 предложений ∙ Кыргзыстан"},{id:"ala-archa",title:"Ала-Арча",sub:"12 предложений ∙ Кыргзыстан"},{id:"cholpon-ata",title:"Чолпон - Ата",sub:"340 предложений ∙ Кыргзыстан"},{id:"samarkand",title:"Самарканд",sub:"340 предложений ∙ Узбекистан"},{id:"tashkent",title:"Ташкент",sub:"12 предложений ∙ Узбекистан"},{id:"bukhara",title:"Бухара",sub:"34 предложений ∙ Узбекистан"}],B={name:"Кейсы · Куда отправимся",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,i]=p.useState(null);return u.jsxs("div",{"aria-label":"Куда отправимся?",children:[u.jsx(S,{first:!0,children:"Недавно искали"}),hu.map(t=>u.jsx(e,{title:t.title,subtitle:t.sub,icon:u.jsx(a,{}),iconSize:40,onClick:()=>i(t.title)},t.id)),u.jsx(S,{children:"Популярные направления"}),_.map((t,r)=>u.jsx(e,{title:t.title,subtitle:t.sub,icon:u.jsx(m,{}),iconSize:40,divider:r<_.length-1,onClick:()=>i(t.title)},t.id)),u.jsx("output",{style:{display:"block",padding:16},className:"im-12-r",children:n?`Выбрано: ${n}`:"Ничего не выбрано"})]})}},R=8,h={name:"Кейсы · Участники со счётчиком",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,i]=p.useState(1),[t,r]=p.useState(0),l=n+t;return u.jsxs("div",{children:[u.jsx(e,{title:"Взрослый",subtitle:"Старше 18 лет",disclosure:u.jsx(c,{variant:"counter",counter:{value:n,onValueChange:i,min:1,max:R-t,incrementLabel:"Добавить взрослого",decrementLabel:"Убрать взрослого"}})}),u.jsx(e,{title:"Ребёнок",subtitle:"До 18 лет",disclosure:u.jsx(c,{variant:"counter",counter:{value:t,onValueChange:r,min:0,max:R-n,incrementLabel:"Добавить ребёнка",decrementLabel:"Убрать ребёнка"}})}),u.jsx("output",{style:{display:"block",padding:16},className:"im-12-r","aria-live":"polite",children:l===R?"Больше 8 человек добавить нельзя":`Участников: ${l}`})]})}},ku=["Экскурсии","Фотосессии","Походы","Оздоровление","Мастер-классы","Квесты","Экскурсионные туры","Активный отдых","Мероприятия","Красота","Тур","Прогулки","Для детей","Другое"],Au=["Пешком","На автомобиле","На автобусе"],k={name:"Кейсы · Фильтры",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,i]=p.useState(new Set(["Экскурсии"])),t=r=>u.jsx(e,{title:r,disclosure:u.jsx(c,{variant:"checkbox",checked:n.has(r),onCheckedChange:l=>i(d=>{const T=new Set(d);return l?T.add(r):T.delete(r),T})})},r);return u.jsxs("div",{children:[u.jsx(S,{first:!0,children:"Вид активности"}),ku.map(t),u.jsx(S,{children:"Способ передвижения"}),Au.map(t),u.jsx(e,{title:"Трансфер от отеля",subtitle:"Заберут из отеля и привезут обратно",icon:u.jsx(a,{}),iconSize:32,disclosure:u.jsx(c,{variant:"checkbox",checked:n.has("Трансфер от отеля"),onCheckedChange:r=>i(l=>{const d=new Set(l);return r?d.add("Трансфер от отеля"):d.delete("Трансфер от отеля"),d})})})]})},play:async({canvasElement:s})=>{const n=z(s),i=n.getByRole("checkbox",{name:"Походы"});await o(i).not.toBeChecked(),await L.click(n.getByText("Походы")),await o(i).toBeChecked()}},M={display:"inline-grid",placeItems:"center",width:32,height:32,borderRadius:12,background:"var(--color-icon-accent)",color:"var(--color-icon-inverse-constant-primary)"},A={name:"Кейсы · Детали заказа",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{children:[u.jsx(S,{first:!0,children:"Детали заказа"}),u.jsx(e,{label:"Участники",title:"2 человека",leading:u.jsx("span",{style:M,children:u.jsx(cu,{})}),divider:!0,disclosure:!0,onClick:()=>{}}),u.jsx(e,{title:"Ильдар Забиров",subtitle:"+996 (553) 24 64 88",leading:u.jsx("span",{style:M,children:u.jsx(pu,{size:20})}),disclosure:!0,onClick:()=>{}}),u.jsx(S,{children:"Условия возврата"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(e,{background:!0,title:"Правила возврата",subtitle:"Ознакомьтесь перед оплатой",icon:u.jsx(mu,{}),iconSize:40,iconBackground:!1,disclosure:!0,onClick:()=>{}})})]})},D={name:"Тест: тап и клавиатура",args:{title:"Каракол",onClick:G()},play:async({canvasElement:s,args:n})=>{const t=z(s).getByRole("button",{name:/Каракол/});await L.click(t),await o(n.onClick).toHaveBeenCalledTimes(1),t.focus(),await L.keyboard("{Enter}"),await O(()=>o(n.onClick).toHaveBeenCalledTimes(2)),t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,button:0})),await O(()=>o(t).toHaveAttribute("data-pressed")),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0}))}},y={name:"Тест: disabled доходит до контрола",parameters:{controls:{disable:!0}},render:()=>u.jsx(e,{disabled:!0,title:"Сообщать о снижении цены",disclosure:u.jsx(c,{variant:"toggle"})}),play:async({canvasElement:s})=>{const n=z(s).getByRole("switch",{name:"Сообщать о снижении цены"});await o(n).toBeDisabled()}},w={name:"Тест: свои обработчики и ссылка",parameters:{controls:{disable:!0}},args:{onPointerDown:G()},render:s=>u.jsxs("div",{children:[u.jsx(e,{title:"Каракол",onClick:()=>{},onPointerDown:s.onPointerDown}),u.jsx(e,{title:"Правила сервиса",href:"#rules",target:"_blank"})]}),play:async({canvasElement:s,args:n})=>{const i=z(s),t=i.getByRole("button",{name:/Каракол/});t.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,button:0})),await O(()=>o(t).toHaveAttribute("data-pressed")),await o(n.onPointerDown).toHaveBeenCalledTimes(1),t.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0}));const r=i.getByRole("link",{name:/Правила сервиса/});await o(r).toHaveAttribute("rel","noopener noreferrer"),await o(t.querySelector("div")).toBeNull()}},j={name:"Кейсы · Организатор",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(e,{background:!0,leading:u.jsx(bu,{src:vu,alt:"",size:40}),title:"Kettik",subtitle:"12 предложений",disclosure:!0,onClick:()=>{}})})},F={name:"Кейсы · Условия возврата",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{style:{padding:"0 16px"},children:[u.jsx(e,{subCell:!0,leading:u.jsx(H,{}),title:"Отмена за 1 день — вернём от 100% суммы"}),u.jsx(e,{subCell:!0,leading:u.jsx(H,{}),title:"Отмена за 5 день — вернём 20% суммы"})]})};function H(){return u.jsxs("span",{style:{position:"relative",display:"inline-flex",width:32,height:32,color:"var(--color-icon-success)"},"aria-hidden":"true",children:[u.jsx(Cu,{size:32}),u.jsx(Eu,{size:16,style:{position:"absolute",left:8,top:8,color:"var(--color-icon-inverse-primary)"}})]})}const Du=["Playground","Pressing","Variants","LeadingGap","TextLines","Dividers","CasePickDirection","CaseParticipants","CaseFilters","CaseOrderDetails","BehaviourTest","DisabledTest","HandlersTest","CaseOrganiser","CaseReturnRules"];var V,U,X,K,W;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(X=(U=E.parameters)==null?void 0:U.docs)==null?void 0:X.source},description:{story:"По умолчанию, как в Figma: один заголовок IM-16 M (16 Medium), без иконки, справа шеврон. Тапни строку: она отзывается сразу, как палец коснулся; подзаголовок, иконку и действие справа включай в Controls.",...(W=(K=E.parameters)==null?void 0:K.docs)==null?void 0:W.description}}};var Y,$,q,J,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:`Нажатие. Пружина только у строки с шевроном: зажми её, она сжимается сразу, отпусти, возвращается с небольшим перелётом.
Строки с переключателем и чекбоксом стоят на месте: нажатие показывает сам контрол, его и переключает тап.
Строка с галочкой тоже не двигается, отклик на тап — появление галочки.
Включи в тулбаре Motion → «Замедление ×4», чтобы разглядеть перелёт; «Reduced motion» заменяет сжатие на короткое затемнение.`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Z,u4,e4,n4,t4;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
              <Cell title="Icon 20: текст в 12 от иконки" icon={<ClockNineIcon />} iconSize={20} background={bg} skeleton={skeleton} disclosure />
              {!skeleton && <Cell title="Icon full 32: флаг на весь слот" leading={<FlagIcon country={FLAG} size={32} />} iconSize={32} background={bg} disclosure />}
              {!skeleton && <Cell title="Icon full 40" leading={<FlagIcon country={FLAG} size={40} />} iconSize={40} background={bg} disclosure />}
            </div>)}
        </div>)}
    </div>
}`,...(e4=(u4=g.parameters)==null?void 0:u4.docs)==null?void 0:e4.source},description:{story:"The Figma matrix 47:163: Leading None | Icon 32 | Icon 40 × Background × State Default | Shimmer (Sub-cell looks the same).",...(t4=(n4=g.parameters)==null?void 0:n4.docs)==null?void 0:t4.description}}};var s4,i4,r4,o4,a4;C.parameters={...C.parameters,docs:{...(s4=C.parameters)==null?void 0:s4.docs,source:{originalSource:`{
  name: 'Иконка слева: зазор 12 от видимого края',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 4
  }}>
      <Cell title="Трансфер" subtitle="Icon 20" icon={<ClockNineIcon />} iconSize={20} divider />
      <Cell title="Кыргызстан" subtitle="Icon full 32" leading={<FlagIcon country={FLAG} size={32} />} iconSize={32} divider />
      <Cell title="Кыргызстан" subtitle="Icon full 40" leading={<FlagIcon country={FLAG} size={40} />} iconSize={40} divider />
      <Cell title="Для сравнения: Icon 32" subtitle="иконка 20 в боксе 32" icon={<ClockNineIcon />} iconSize={32} divider />
    </div>
}`,...(r4=(i4=C.parameters)==null?void 0:i4.docs)==null?void 0:r4.source},description:{story:`Leading = Icon 20 and Icon full 32 / 40 (Figma 2026-11-20): the text is always 12 px after what you see — 48 from
the edge with a bare 20 px icon, 60 / 68 with an element on the whole slot. A divider starts under the text.`,...(a4=(o4=C.parameters)==null?void 0:o4.docs)==null?void 0:a4.description}}};var l4,c4,d4,p4,m4;v.parameters={...v.parameters,docs:{...(l4=v.parameters)==null?void 0:l4.docs,source:{originalSource:`{
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
}`,...(d4=(c4=v.parameters)==null?void 0:c4.docs)==null?void 0:d4.source},description:{story:"Two text lines: Center Type = Title + Subtitle and Label + Title. The row is 64 high with a 40 px icon.",...(m4=(p4=v.parameters)==null?void 0:p4.docs)==null?void 0:m4.description}}};var E4,b4,g4,C4,v4;x.parameters={...x.parameters,docs:{...(E4=x.parameters)==null?void 0:E4.docs,source:{originalSource:`{
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
}`,...(g4=(b4=x.parameters)==null?void 0:b4.docs)==null?void 0:g4.source},description:{story:"Divider = on: a 1 px line along the bottom edge, Inset starts under the text, Full spans the width. On a card (Background) the line is divider/border/on-sunken.",...(v4=(C4=x.parameters)==null?void 0:C4.docs)==null?void 0:v4.description}}};var x4,B4,h4,k4,A4;B.parameters={...B.parameters,docs:{...(x4=B.parameters)==null?void 0:x4.docs,source:{originalSource:`{
  name: 'Кейсы · Куда отправимся',
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
        {RECENT.map(r => <Cell key={r.id} title={r.title} subtitle={r.sub} icon={<ClockNineIcon />} iconSize={40} onClick={() => setPicked(r.title)} />)}
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
}`,...(h4=(B4=B.parameters)==null?void 0:B4.docs)==null?void 0:h4.source},description:{story:"«Куда отправимся?» (Главная 173:12219, «Ничего не выбрано»): the history row and the popular places, Leading icon 40.",...(A4=(k4=B.parameters)==null?void 0:k4.docs)==null?void 0:A4.description}}};var D4,y4,w4,j4,F4;h.parameters={...h.parameters,docs:{...(D4=h.parameters)==null?void 0:D4.docs,source:{originalSource:`{
  name: 'Кейсы · Участники со счётчиком',
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
}`,...(w4=(y4=h.parameters)==null?void 0:y4.docs)==null?void 0:w4.source},description:{story:"«Участники» (Редактирование кол-во участников 2254:34769, Детали заказа 1338:107636): two rows with a Counter, 8 people at most together.",...(F4=(j4=h.parameters)==null?void 0:j4.docs)==null?void 0:F4.description}}};var f4,S4,I4,P4,z4;k.parameters={...k.parameters,docs:{...(f4=k.parameters)==null?void 0:f4.docs,source:{originalSource:`{
  name: 'Кейсы · Фильтры',
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
    const [on, setOn] = useState<Set<string>>(new Set(['Экскурсии']));
    const row = (f: string) => <Cell key={f} title={f} disclosure={<CellDisclosure variant="checkbox" checked={on.has(f)} onCheckedChange={v => setOn(s => {
      const n = new Set(s);
      if (v) n.add(f);else n.delete(f);
      return n;
    })} />} />;
    return <div>
        <Group first>Вид активности</Group>
        {ACTIVITY.map(row)}
        <Group>Способ передвижения</Group>
        {TRANSPORT.map(row)}
        <Cell title="Трансфер от отеля" subtitle="Заберут из отеля и привезут обратно" icon={<ClockNineIcon />} iconSize={32} disclosure={<CellDisclosure variant="checkbox" checked={on.has('Трансфер от отеля')} onCheckedChange={v => setOn(s => {
        const n = new Set(s);
        if (v) n.add('Трансфер от отеля');else n.delete('Трансфер от отеля');
        return n;
      })} />} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox', {
      name: 'Походы'
    });
    await expect(box).not.toBeChecked();
    // a tap on the title text (not on the box) flips it
    await userEvent.click(canvas.getByText('Походы'));
    await expect(box).toBeChecked();
  }
}`,...(I4=(S4=k.parameters)==null?void 0:S4.docs)==null?void 0:I4.source},description:{story:"«Вид активности» и «Способ передвижения» (Результат поиска 189:16224, «Фильтры · скролл»): checkbox rows, the whole row flips its box.",...(z4=(P4=k.parameters)==null?void 0:P4.docs)==null?void 0:z4.description}}};var T4,R4,L4,O4,G4;A.parameters={...A.parameters,docs:{...(T4=A.parameters)==null?void 0:T4.docs,source:{originalSource:`{
  name: 'Кейсы · Детали заказа',
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
    </div>
}`,...(L4=(R4=A.parameters)==null?void 0:R4.docs)==null?void 0:L4.source},description:{story:"«Оформление» (Оформление заказ 1338:107637): participants, contact and the refund rules card.",...(G4=(O4=A.parameters)==null?void 0:O4.docs)==null?void 0:G4.description}}};var N4,_4,M4,H4,V4;D.parameters={...D.parameters,docs:{...(N4=D.parameters)==null?void 0:N4.docs,source:{originalSource:`{
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
}`,...(M4=(_4=D.parameters)==null?void 0:_4.docs)==null?void 0:M4.source},description:{story:"Interaction test: the row is a real button, a tap calls onClick, Enter works.",...(V4=(H4=D.parameters)==null?void 0:H4.docs)==null?void 0:V4.description}}};var U4,X4,K4,W4,Y4;y.parameters={...y.parameters,docs:{...(U4=y.parameters)==null?void 0:U4.docs,source:{originalSource:`{
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
}`,...(K4=(X4=y.parameters)==null?void 0:X4.docs)==null?void 0:K4.source},description:{story:"The row's own `disabled` reaches the control inside it: the switch on the right goes grey too.",...(Y4=(W4=y.parameters)==null?void 0:W4.docs)==null?void 0:Y4.description}}};var $4,q4,J4,Q4,Z4;w.parameters={...w.parameters,docs:{...($4=w.parameters)==null?void 0:$4.docs,source:{originalSource:`{
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
}`,...(J4=(q4=w.parameters)==null?void 0:q4.docs)==null?void 0:J4.source},description:{story:"Your own pointer handlers still run next to the press feedback, and a link row takes `target` and `rel`.",...(Z4=(Q4=w.parameters)==null?void 0:Q4.docs)==null?void 0:Z4.description}}};var uu,eu,nu,tu,su;j.parameters={...j.parameters,docs:{...(uu=j.parameters)==null?void 0:uu.docs,source:{originalSource:`{
  name: 'Кейсы · Организатор',
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
  render: () => <div style={{
    padding: '0 16px'
  }}>
      <Cell background leading={<Avatar src={ORGANISER_LOGO} alt="" size={40} />} title="Kettik" subtitle="12 предложений" disclosure onClick={() => {}} />
    </div>
}`,...(nu=(eu=j.parameters)==null?void 0:eu.docs)==null?void 0:nu.source},description:{story:`Figma 4704:41769 «Организатор» (excursion detail, both variants): one card row with the organiser's logo (Leading icon
40 as a photo avatar), the name and the count of offers, a chevron. The card sits 16 px in from the screen edges.`,...(su=(tu=j.parameters)==null?void 0:tu.docs)==null?void 0:su.description}}};var iu,ru,ou,au,lu;F.parameters={...F.parameters,docs:{...(iu=F.parameters)==null?void 0:iu.docs,source:{originalSource:`{
  name: 'Кейсы · Условия возврата',
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
  render: () => <div style={{
    padding: '0 16px'
  }}>
      <Cell subCell leading={<DoneDisc />} title="Отмена за 1 день — вернём от 100% суммы" />
      <Cell subCell leading={<DoneDisc />} title="Отмена за 5 день — вернём 20% суммы" />
    </div>
}`,...(ou=(ru=F.parameters)==null?void 0:ru.docs)==null?void 0:ou.source},description:{story:`Figma 4704:41774 «Условия возврата» (excursion detail): sub-cells of 32 px, the green disc with a check on the left,
the rule text (IM-16 M title) to the right; no dividers, no chevrons. Figma titles are 15 px in name only (Center
Type «Title 15», main component IM-16 M): kept IM-16 M here.`,...(lu=(au=F.parameters)==null?void 0:au.docs)==null?void 0:lu.description}}};const Ou=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:D,CaseFilters:k,CaseOrderDetails:A,CaseOrganiser:j,CaseParticipants:h,CasePickDirection:B,CaseReturnRules:F,DisabledTest:y,Dividers:x,HandlersTest:w,LeadingGap:C,Playground:E,Pressing:b,TextLines:v,Variants:g,__namedExportsOrder:Du,default:Bu},Symbol.toStringTag,{value:"Module"}));export{Ou as C,x as D,C as L,E as P,v as T,g as V,B as a,h as b,k as c,A as d,j as e,F as f,b as g};
