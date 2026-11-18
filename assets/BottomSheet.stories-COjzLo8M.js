import{j as u,r as i}from"./iframe-DuqTOznb.js";import{u as X4,P as Y4}from"./PassengerSheet-CesMQt3S.js";import{B as v}from"./BottomSheet-DD4XR1Mk.js";import{B as c}from"./Button-CKwNO4NU.js";import{F as $4}from"./Field-DwgBjXeD.js";import{C as Q4}from"./Chip-KAmC-4ZV.js";import{C as Z4}from"./Checkbox-C1X2mrZB.js";import{C as u0}from"./Counter-6eoXZdLB.js";const{expect:n,fn:e0,userEvent:k,waitFor:D,within:f}=__STORYBOOK_MODULE_TEST__,t0={title:"Components/BottomSheet",component:v,parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:700}},design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=162-687"}},args:{header:"left",title:"Заголовок",description:"Описание",showHandle:!0,showClose:!0,dismissible:!0,withPrimary:!0,withSecondary:!0},argTypes:{header:{control:"inline-radio",options:["none","left","center"]},title:{control:"text"},description:{control:"text"},open:{control:!1},defaultOpen:{control:!1},onOpenChange:{control:!1},primaryAction:{control:!1},secondaryAction:{control:!1},footer:{control:!1},initialFocus:{control:!1},children:{control:!1}}};function R({children:t}){return u.jsx("main",{style:{display:"grid",placeItems:"center",minHeight:"100dvh",padding:"var(--spacing-lg)",boxSizing:"border-box",background:"var(--color-bg-surface)"},children:t})}const d=({height:t=160,label:e="Слот: вставьте свой контент"})=>u.jsx("div",{className:"im-16-r",style:{display:"grid",placeItems:"center",height:t,margin:0,borderRadius:"var(--radius-xl)",background:"var(--color-bg-sunken-subtle)",color:"var(--color-text-tertiary)"},children:e});function l({startOpen:t=!1,children:e,...r}){const[a,s]=i.useState(t);return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>s(!0),"aria-haspopup":"dialog",children:"Открыть шторку"}),u.jsx(v,{...r,open:a,onOpenChange:s,children:e})]})}const p={name:"Песочница",render:({withPrimary:t,withSecondary:e,...r})=>u.jsx(l,{...r,primaryAction:t?{label:"Основная кнопка"}:void 0,secondaryAction:e?{label:"Вторичная кнопка"}:void 0,children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{})})})},I=(t,e)=>({parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{startOpen:!0,header:t,title:e?"Заголовок":void 0,description:e?"Описание":void 0,"aria-label":"Шторка без заголовка",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{})})})}),m={name:"Header: None",...I("none",!1)},g={name:"Header: Top left",...I("left",!0)},E={name:"Header: Top center",...I("center",!0)},y={name:"Длинный контент",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{startOpen:!0,header:"left",title:"Условия отмены",description:"Обновлено 9 ноя",primaryAction:{label:"Понятно"},children:u.jsx("ol",{style:{margin:0,padding:"0 var(--spacing-lg) var(--spacing-lg) 36px"},children:Array.from({length:40},(t,e)=>u.jsxs("li",{className:"im-16-r",style:{padding:"6px 0",color:"var(--color-text-primary)"},children:["Пункт ",e+1,". Бесплатная отмена за 24 часа до начала, после этого возвращается половина суммы."]},e))})})};function r0(){const{rows:t}=X4(),[e,r]=i.useState(!0);return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>r(!0),children:"Пассажиры"}),u.jsx(v,{open:e,onOpenChange:r,header:"left",title:"Пассажиры",description:"Полных лет на 9 ноя",primaryAction:{label:"Применить",onClick:()=>r(!1)},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(Y4,{rows:t})})})]})}const B={name:"Пассажиры (Counter)",parameters:{controls:{disable:!0}},render:()=>u.jsx(r0,{})},h={name:"С иллюстрацией",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{startOpen:!0,title:"Золотая осень",description:"34 предложения · от 3 441 ⃀",illustration:u.jsx("div",{"aria-hidden":"true",style:{width:148,height:148,borderRadius:"var(--radius-xl)",background:"var(--color-bg-sunken-muted)"}}),primaryAction:{label:"Смотреть"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{height:80})})})};function n0(){const[t,e]=i.useState(!0),[r,a]=i.useState(1),[s,C]=i.useState(0),T=(O,o,j,P,J4)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px var(--spacing-lg)"},children:[u.jsxs("div",{children:[u.jsx("p",{className:"im-16-m",style:{margin:0},children:O}),u.jsx("p",{className:"im-14-r",style:{margin:"2px 0 0",color:"var(--color-text-tertiary)"},children:o})]}),u.jsx(u0,{value:j,onValueChange:P,min:J4,max:9,"aria-label":O})]});return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"1 участник"}),u.jsxs(v,{open:t,onOpenChange:e,header:"left",title:"Участники",footer:u.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[u.jsx(c,{variant:"secondary",size:48,fullWidth:!0,onClick:()=>(a(1),C(0)),children:"Сбросить"}),u.jsx(c,{size:48,fullWidth:!0,onClick:()=>e(!1),children:"Готово"})]}),children:[T("Взрослый","Старше 18 лет",r,a,1),T("Ребёнок","До 18 лет",s,C,0)]})]})}const x={name:"Кейс: участники",parameters:{controls:{disable:!0}},render:()=>u.jsx(n0,{})};function a0(){const[t,e]=i.useState(!0),[r,a]=i.useState(!1),[s,C]=i.useState(["Горы"]),T=o=>C(j=>j.includes(o)?j.filter(P=>P!==o):[...j,o]),O=128-s.length*20-(r?14:0);return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"Фильтры"}),u.jsxs(v,{open:t,onOpenChange:e,header:"center",title:"Фильтры",footer:u.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[u.jsx(c,{variant:"secondary",size:48,fullWidth:!0,onClick:()=>(C([]),a(!1)),children:"Сбросить"}),u.jsx(c,{size:48,fullWidth:!0,onClick:()=>e(!1),children:`Показать ${O}`})]}),children:[u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,padding:"0 var(--spacing-lg) var(--spacing-md)"},children:["Горы","Озёра","Город","Гастро"].map(o=>u.jsx(Q4,{selected:s.includes(o),onSelectedChange:()=>T(o),children:o},o))}),u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(Z4,{checked:r,onCheckedChange:a,children:"Можно с детьми"})})]})]})}const A={name:"Кейс: фильтры, «Показать N»",parameters:{controls:{disable:!0}},render:()=>u.jsx(a0,{})};function s0(){const[t,e]=i.useState(!0),[r,a]=i.useState("");return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"Откуда"}),u.jsx(v,{open:t,onOpenChange:e,header:"left",title:"Откуда вылетаем",primaryAction:{label:"Готово",onClick:()=>e(!1)},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx($4,{label:"Город",value:r,onValueChange:a,autoComplete:"off",enterKeyHint:"done"})})})]})}const b={name:"Кейс: поле в шторке (клавиатура)",parameters:{controls:{disable:!0}},render:()=>u.jsx(s0,{})},F={name:"Не закрывается жестом",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{startOpen:!0,dismissible:!1,title:"Подтвердите",description:"Свайп, фон и Escape отключены",primaryAction:{label:"Подтвердить"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{height:120})})})},q4=()=>f(document.body).queryByRole("dialog"),w={name:"Тест: ✕ закрывает, фокус возвращается",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{title:"Заголовок",primaryAction:{label:"Основная кнопка",onClick:e0()},children:u.jsx(d,{})}),play:async({canvasElement:t})=>{const e=f(t).getByRole("button",{name:"Открыть шторку"});await k.click(e);const r=f(document.body);await D(()=>n(r.getByRole("dialog",{name:"Заголовок"})).toBeInTheDocument()),await n(r.getByRole("dialog")).toHaveAttribute("aria-modal","true"),await D(()=>n(r.getByRole("dialog")).toHaveFocus()),await k.click(r.getByRole("button",{name:"Закрыть"})),await D(()=>n(q4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},H={name:"Тест: Escape закрывает, Tab не уходит из шторки",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{title:"Заголовок",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx(d,{})}),play:async({canvasElement:t})=>{const e=f(t).getByRole("button",{name:"Открыть шторку"});await k.click(e);const r=f(document.body);await D(()=>n(r.getByRole("dialog")).toHaveFocus());const a=r.getByRole("dialog");for(let s=0;s<6;s++)await k.tab(),await n(a.contains(document.activeElement)).toBe(!0);await k.keyboard("{Escape}"),await D(()=>n(q4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},S={name:"Тест: ref и data-* на диалоге",parameters:{controls:{disable:!0}},render:()=>u.jsx(l,{startOpen:!0,title:"Заголовок","data-testid":"sheet",style:{"--probe":"1"},children:u.jsx(d,{height:80})}),play:async()=>{const t=f(document.body);await D(()=>n(t.getByTestId("sheet")).toBeInTheDocument()),await n(t.getByTestId("sheet")).toHaveAttribute("role","dialog"),await n(t.getByTestId("sheet").style.getPropertyValue("--probe")).toBe("1")}},o0=["Playground","HeaderNone","HeaderLeft","HeaderCenter","LongContent","Passengers","WithIllustration","CaseParticipants","CaseFilters","CaseField","NotDismissible","TestCloseButton","TestEscape","TestRefAndRest"];var N,_,V,W,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Песочница',
  render: ({
    withPrimary,
    withSecondary,
    ...args
  }) => <Harness {...args} primaryAction={withPrimary ? {
    label: 'Основная кнопка'
  } : undefined} secondaryAction={withSecondary ? {
    label: 'Вторичная кнопка'
  } : undefined}>
      <div style={{
      padding: '0 var(--spacing-lg)'
    }}>
        <Slot />
      </div>
    </Harness>
}`,...(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source},description:{story:`Попробуйте: потяните за ручку или заголовок вниз, бросьте шторку, потяните вверх (резинка), схватите шторку во время
анимации. Тап по фону, ✕ и Escape тоже закрывают. Скорость и Reduced motion переключаются в тулбаре «Motion».`,...(M=(W=p.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var z,L,K,G,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Header: None',
  ...figmaVariant('none', false)
}`,...(K=(L=m.parameters)==null?void 0:L.docs)==null?void 0:K.source},description:{story:"Figma Header = None: ✕ 36 px (иконка 24) и 24-пиксельная полоса «Top bar», контент ниже.",...(U=(G=m.parameters)==null?void 0:G.docs)==null?void 0:U.description}}};var q,J,X,Y,$;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Header: Top left',
  ...figmaVariant('left', true)
}`,...(X=(J=g.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Figma Header = Top left: ✕ 36 px (иконка 24), заголовок IM-24 B и описание IM-16 R слева.",...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var Q,Z,u4,e4,t4;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Header: Top center',
  ...figmaVariant('center', true)
}`,...(u4=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:"Figma Header = Top center: заголовок по центру.",...(t4=(e4=E.parameters)==null?void 0:e4.docs)==null?void 0:t4.description}}};var r4,n4,a4,s4,o4;y.parameters={...y.parameters,docs:{...(r4=y.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  name: 'Длинный контент',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen header="left" title="Условия отмены" description="Обновлено 9 ноя" primaryAction={{
    label: 'Понятно'
  }}>
      <ol style={{
      margin: 0,
      padding: '0 var(--spacing-lg) var(--spacing-lg) 36px'
    }}>
        {Array.from({
        length: 40
      }, (_, i) => <li key={i} className="im-16-r" style={{
        padding: '6px 0',
        color: 'var(--color-text-primary)'
      }}>
            Пункт {i + 1}. Бесплатная отмена за 24 часа до начала, после этого возвращается половина суммы.
          </li>)}
      </ol>
    </Harness>
}`,...(a4=(n4=y.parameters)==null?void 0:n4.docs)==null?void 0:a4.source},description:{story:"Контент выше экрана: слот прокручивается, шапка и кнопки остаются на месте. Потяните вниз: сначала прокрутка, у верхнего края — шторка.",...(o4=(s4=y.parameters)==null?void 0:s4.docs)==null?void 0:o4.description}}};var i4,c4,l4,d4,p4;B.parameters={...B.parameters,docs:{...(i4=B.parameters)==null?void 0:i4.docs,source:{originalSource:`{
  name: 'Пассажиры (Counter)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <PassengersDemo />
}`,...(l4=(c4=B.parameters)==null?void 0:c4.docs)==null?void 0:l4.source},description:{story:"Случай из «Авиабилетов»: три счётчика внутри настоящей шторки. Нажатия на «+» и «−» не мешают жесту.",...(p4=(d4=B.parameters)==null?void 0:d4.docs)==null?void 0:p4.description}}};var m4,g4,E4,y4,B4;h.parameters={...h.parameters,docs:{...(m4=h.parameters)==null?void 0:m4.docs,source:{originalSource:`{
  name: 'С иллюстрацией',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen title="Золотая осень" description="34 предложения · от 3 441 ⃀" illustration={<div aria-hidden="true" style={{
    width: 148,
    height: 148,
    borderRadius: 'var(--radius-xl)',
    background: 'var(--color-bg-sunken-muted)'
  }} />} primaryAction={{
    label: 'Смотреть'
  }}>
      <div style={{
      padding: '0 var(--spacing-lg)'
    }}>
        <Slot height={80} />
      </div>
    </Harness>
}`,...(E4=(g4=h.parameters)==null?void 0:g4.docs)==null?void 0:E4.source},description:{story:"Figma «Illustration» (IMG 148 px): картинка между ручкой и заголовком.",...(B4=(y4=h.parameters)==null?void 0:y4.docs)==null?void 0:B4.description}}};var h4,x4,A4,b4,F4;x.parameters={...x.parameters,docs:{...(h4=x.parameters)==null?void 0:h4.docs,source:{originalSource:`{
  name: 'Кейс: участники',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ParticipantsDemo />
}`,...(A4=(x4=x.parameters)==null?void 0:x4.docs)==null?void 0:A4.source},description:{story:"«Выходные»: выбор участников. Взрослый от 1, ребёнок от 0; «Сбросить» и «Готово» рядом.",...(F4=(b4=x.parameters)==null?void 0:b4.docs)==null?void 0:F4.description}}};var D4,f4,v4,C4,j4;A.parameters={...A.parameters,docs:{...(D4=A.parameters)==null?void 0:D4.docs,source:{originalSource:`{
  name: 'Кейс: фильтры, «Показать N»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FiltersDemo />
}`,...(v4=(f4=A.parameters)==null?void 0:f4.docs)==null?void 0:v4.source},description:{story:"«Выходные»: фильтры каталога. Кнопка показывает, сколько предложений нашлось.",...(j4=(C4=A.parameters)==null?void 0:C4.docs)==null?void 0:j4.description}}};var w4,H4,S4,k4,R4;b.parameters={...b.parameters,docs:{...(w4=b.parameters)==null?void 0:w4.docs,source:{originalSource:`{
  name: 'Кейс: поле в шторке (клавиатура)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FieldDemo />
}`,...(S4=(H4=b.parameters)==null?void 0:H4.docs)==null?void 0:S4.source},description:{story:"Поле внутри шторки. Когда открывается экранная клавиатура, шторка и футер поднимаются над ней (`--keyboard-inset` из\n`visualViewport`), а поле остаётся в видимой части слота. В десктопном Chromium клавиатуры нет: проверка в `check-sheet.mjs` подменяет `visualViewport`.",...(R4=(k4=b.parameters)==null?void 0:k4.docs)==null?void 0:R4.description}}};var T4,O4,P4,I4,N4;F.parameters={...F.parameters,docs:{...(T4=F.parameters)==null?void 0:T4.docs,source:{originalSource:`{
  name: 'Не закрывается жестом',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen dismissible={false} title="Подтвердите" description="Свайп, фон и Escape отключены" primaryAction={{
    label: 'Подтвердить'
  }}>
      <div style={{
      padding: '0 var(--spacing-lg)'
    }}>
        <Slot height={120} />
      </div>
    </Harness>
}`,...(P4=(O4=F.parameters)==null?void 0:O4.docs)==null?void 0:P4.source},description:{story:"Закрыть нельзя ни свайпом, ни фоном, ни Escape: шторка упирается и возвращается. ✕ и кнопки работают.",...(N4=(I4=F.parameters)==null?void 0:I4.docs)==null?void 0:N4.description}}};var _4,V4,W4;w.parameters={...w.parameters,docs:{...(_4=w.parameters)==null?void 0:_4.docs,source:{originalSource:`{
  name: 'Тест: ✕ закрывает, фокус возвращается',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness title="Заголовок" primaryAction={{
    label: 'Основная кнопка',
    onClick: fn()
  }}>
      <Slot />
    </Harness>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Открыть шторку'
    });
    await userEvent.click(trigger);
    const body = within(document.body);
    await waitFor(() => expect(body.getByRole('dialog', {
      name: 'Заголовок'
    })).toBeInTheDocument());
    await expect(body.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
    await waitFor(() => expect(body.getByRole('dialog')).toHaveFocus());
    await userEvent.click(body.getByRole('button', {
      name: 'Закрыть'
    }));
    await waitFor(() => expect(dialog()).toBeNull(), {
      timeout: 3000
    });
    await expect(trigger).toHaveFocus();
  }
}`,...(W4=(V4=w.parameters)==null?void 0:V4.docs)==null?void 0:W4.source}}};var M4,z4,L4;H.parameters={...H.parameters,docs:{...(M4=H.parameters)==null?void 0:M4.docs,source:{originalSource:`{
  name: 'Тест: Escape закрывает, Tab не уходит из шторки',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness title="Заголовок" primaryAction={{
    label: 'Основная кнопка'
  }} secondaryAction={{
    label: 'Вторичная кнопка'
  }}>
      <Slot />
    </Harness>,
  play: async ({
    canvasElement
  }) => {
    const trigger = within(canvasElement).getByRole('button', {
      name: 'Открыть шторку'
    });
    await userEvent.click(trigger);
    const body = within(document.body);
    await waitFor(() => expect(body.getByRole('dialog')).toHaveFocus());
    const sheet = body.getByRole('dialog');
    for (let i = 0; i < 6; i++) {
      await userEvent.tab();
      await expect(sheet.contains(document.activeElement)).toBe(true);
    }
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(dialog()).toBeNull(), {
      timeout: 3000
    });
    await expect(trigger).toHaveFocus();
  }
}`,...(L4=(z4=H.parameters)==null?void 0:z4.docs)==null?void 0:L4.source}}};var K4,G4,U4;S.parameters={...S.parameters,docs:{...(K4=S.parameters)==null?void 0:K4.docs,source:{originalSource:`{
  name: 'Тест: ref и data-* на диалоге',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen title="Заголовок" data-testid="sheet" style={{
    ['--probe' as string]: '1'
  }}>
      <Slot height={80} />
    </Harness>,
  play: async () => {
    const body = within(document.body);
    await waitFor(() => expect(body.getByTestId('sheet')).toBeInTheDocument());
    await expect(body.getByTestId('sheet')).toHaveAttribute('role', 'dialog');
    await expect(body.getByTestId('sheet').style.getPropertyValue('--probe')).toBe('1');
  }
}`,...(U4=(G4=S.parameters)==null?void 0:G4.docs)==null?void 0:U4.source}}};const y0=Object.freeze(Object.defineProperty({__proto__:null,CaseField:b,CaseFilters:A,CaseParticipants:x,HeaderCenter:E,HeaderLeft:g,HeaderNone:m,LongContent:y,NotDismissible:F,Passengers:B,Playground:p,TestCloseButton:w,TestEscape:H,TestRefAndRest:S,WithIllustration:h,__namedExportsOrder:o0,default:t0},Symbol.toStringTag,{value:"Module"}));export{x as C,m as H,y as L,F as N,p as P,y0 as S,h as W,g as a,E as b,A as c,b as d,B as e};
