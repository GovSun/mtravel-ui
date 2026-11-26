import{j as u,r as l}from"./iframe-DyD5Yel4.js";import{B as k}from"./BottomSheet-lYDzhEd4.js";import{C as I}from"./Cell-BMryoHV2.js";import{B as c}from"./Button-grGIhY78.js";import{C as Y4}from"./Checkbox-CsOUmA-N.js";import{F as Q4}from"./Field-B9_Admkx.js";import{C as Z4}from"./Counter-CavxruiM.js";const{expect:n,fn:$4,userEvent:S,waitFor:f,within:C}=__STORYBOOK_MODULE_TEST__,u0={title:"Components/BottomSheet",component:k,parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:700}},design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=162-687"}},args:{header:"left",title:"Заголовок",description:"Описание",showHandle:!0,showClose:!0,dismissible:!0,withPrimary:!0,withSecondary:!0},argTypes:{header:{control:"inline-radio",options:["none","left","center"]},title:{control:"text"},description:{control:"text"},open:{control:!1},defaultOpen:{control:!1},onOpenChange:{control:!1},primaryAction:{control:!1},secondaryAction:{control:!1},footer:{control:!1},initialFocus:{control:!1},children:{control:!1}}};function R({children:t}){return u.jsx("main",{style:{display:"grid",placeItems:"center",minHeight:"100dvh",padding:"var(--spacing-lg)",boxSizing:"border-box",background:"var(--color-bg-surface)"},children:t})}const d=({height:t=160,label:e="Слот: вставьте свой контент"})=>u.jsx("div",{className:"im-16-r",style:{display:"grid",placeItems:"center",height:t,margin:0,borderRadius:"var(--radius-xl)",background:"var(--color-bg-sunken-subtle)",color:"var(--color-text-tertiary)"},children:e});function i({startOpen:t=!1,children:e,...r}){const[a,o]=l.useState(t);return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>o(!0),"aria-haspopup":"dialog",children:"Открыть шторку"}),u.jsx(k,{...r,open:a,onOpenChange:o,children:e})]})}const m={name:"Песочница",render:({withPrimary:t,withSecondary:e,...r})=>u.jsx(i,{...r,primaryAction:t?{label:"Основная кнопка"}:void 0,secondaryAction:e?{label:"Вторичная кнопка"}:void 0,children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{})})})},O=(t,e)=>({parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{startOpen:!0,header:t,title:e?"Заголовок":void 0,description:e?"Описание":void 0,"aria-label":"Шторка без заголовка",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{})})})}),g={name:"Header: None",...O("none",!1)},E={name:"Header: Top left",...O("left",!0)},B={name:"Header: Top center",...O("center",!0)},y={name:"Кейс · Оформление: условия возврата",parameters:{controls:{disable:!0}},render:()=>u.jsxs(i,{startOpen:!0,header:"left",title:"Условия возврата",primaryAction:{label:"Понятно"},children:[u.jsx(I,{title:"Отмена за 1 день — вернём от 100% суммы",divider:!0}),u.jsx(I,{title:"Отмена за 5 день — вернём 20% суммы"})]})},x={name:"Тест: длинный контент",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{startOpen:!0,header:"left",title:"Условия отмены",description:"Обновлено 9 ноя",primaryAction:{label:"Понятно"},children:u.jsx("ol",{style:{margin:0,padding:"0 var(--spacing-lg) var(--spacing-lg) 36px"},children:Array.from({length:40},(t,e)=>u.jsxs("li",{className:"im-16-r",style:{padding:"6px 0",color:"var(--color-text-primary)"},children:["Пункт ",e+1,". Бесплатная отмена за 24 часа до начала, после этого возвращается половина суммы."]},e))})})},h={name:"Тест: иллюстрация 148 px",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{startOpen:!0,title:"Иллюстрация",description:"Слот для картинки",illustration:u.jsx("div",{"aria-hidden":"true",style:{width:148,height:148,borderRadius:"var(--radius-xl)",background:"var(--color-bg-sunken-muted)"}}),primaryAction:{label:"Понятно"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{height:80})})})};function e0(){const[t,e]=l.useState(!0),[r,a]=l.useState(1),[o,s]=l.useState(0),p=(T,v,q4,J4,X4)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px var(--spacing-lg)"},children:[u.jsxs("div",{children:[u.jsx("p",{className:"im-16-m",style:{margin:0},children:T}),u.jsx("p",{className:"im-14-r",style:{margin:"2px 0 0",color:"var(--color-text-tertiary)"},children:v})]}),u.jsx(Z4,{value:q4,onValueChange:J4,min:X4,max:9,"aria-label":T})]});return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"1 участник"}),u.jsxs(k,{open:t,onOpenChange:e,header:"left",title:"Участники",footer:u.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[u.jsx(c,{variant:"secondary",size:48,fullWidth:!0,onClick:()=>(a(1),s(0)),children:"Сбросить"}),u.jsx(c,{size:48,fullWidth:!0,onClick:()=>e(!1),children:"Готово"})]}),children:[p("Взрослый","Старше 18 лет",r,a,1),p("Ребёнок","До 18 лет",o,s,0)]})]})}const A={name:"Кейс · Главная: участники",parameters:{controls:{disable:!0}},render:()=>u.jsx(e0,{})},t0=["Проживание","Питание","Бассейн и СПА","Гид","Подъёмник","Инструктор","Экипировка","Фото и видео","Аренда авто"];function r0(){const[t,e]=l.useState(!0),[r,a]=l.useState(new Set(["Гид"])),o=(s,p)=>a(T=>{const v=new Set(T);return p?v.add(s):v.delete(s),v});return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"Удобства"}),u.jsx(k,{open:t,onOpenChange:e,header:"left",title:"Удобства",footer:u.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[u.jsx(c,{variant:"secondary",size:48,fullWidth:!0,onClick:()=>a(new Set),children:"Сбросить"}),u.jsx(c,{size:48,fullWidth:!0,onClick:()=>e(!1),children:"Применить"})]}),children:u.jsx("div",{style:{display:"grid",gap:4,padding:"0 var(--spacing-lg)"},children:t0.map(s=>u.jsx(Y4,{size:24,checked:r.has(s),onCheckedChange:p=>o(s,p),style:{minHeight:44},children:s},s))})})]})}const b={name:"Кейс · Фильтры: Удобства",parameters:{controls:{disable:!0}},render:()=>u.jsx(r0,{})};function n0(){const[t,e]=l.useState(!0),[r,a]=l.useState("");return u.jsxs(R,{children:[u.jsx(c,{onClick:()=>e(!0),children:"Откуда"}),u.jsx(k,{open:t,onOpenChange:e,header:"left",title:"Город",primaryAction:{label:"Готово",onClick:()=>e(!1)},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(Q4,{label:"Город",value:r,onValueChange:a,autoComplete:"off",enterKeyHint:"done"})})})]})}const D={name:"Тест: поле и клавиатура",parameters:{controls:{disable:!0}},render:()=>u.jsx(n0,{})},F={name:"Не закрывается жестом",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{startOpen:!0,dismissible:!1,title:"Подтвердите",description:"Свайп, фон и Escape отключены",primaryAction:{label:"Подтвердить"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(d,{height:120})})})},U4=()=>C(document.body).queryByRole("dialog"),w={name:"Тест: ✕ закрывает, фокус возвращается",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{title:"Заголовок",primaryAction:{label:"Основная кнопка",onClick:$4()},children:u.jsx(d,{})}),play:async({canvasElement:t})=>{const e=C(t).getByRole("button",{name:"Открыть шторку"});await S.click(e);const r=C(document.body);await f(()=>n(r.getByRole("dialog",{name:"Заголовок"})).toBeInTheDocument()),await n(r.getByRole("dialog")).toHaveAttribute("aria-modal","true"),await f(()=>n(r.getByRole("dialog")).toHaveFocus()),await S.click(r.getByRole("button",{name:"Закрыть"})),await f(()=>n(U4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},j={name:"Тест: Escape закрывает, Tab не уходит из шторки",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{title:"Заголовок",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx(d,{})}),play:async({canvasElement:t})=>{const e=C(t).getByRole("button",{name:"Открыть шторку"});await S.click(e);const r=C(document.body);await f(()=>n(r.getByRole("dialog")).toHaveFocus());const a=r.getByRole("dialog");for(let o=0;o<6;o++)await S.tab(),await n(a.contains(document.activeElement)).toBe(!0);await S.keyboard("{Escape}"),await f(()=>n(U4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},H={name:"Тест: ref и data-* на диалоге",parameters:{controls:{disable:!0}},render:()=>u.jsx(i,{startOpen:!0,title:"Заголовок","data-testid":"sheet",style:{"--probe":"1"},children:u.jsx(d,{height:80})}),play:async()=>{const t=C(document.body);await f(()=>n(t.getByTestId("sheet")).toBeInTheDocument()),await n(t.getByTestId("sheet")).toHaveAttribute("role","dialog"),await n(t.getByTestId("sheet").style.getPropertyValue("--probe")).toBe("1")}},a0=["Playground","HeaderNone","HeaderLeft","HeaderCenter","ReturnPolicyCase","LongContent","WithIllustration","CaseParticipants","CaseFilters","FieldTest","NotDismissible","TestCloseButton","TestEscape","TestRefAndRest"];var N,P,_,V,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:`Попробуйте: потяните за ручку или заголовок вниз, бросьте шторку, потяните вверх (резинка), схватите шторку во время
анимации. Тап по фону, ✕ и Escape тоже закрывают. Скорость и Reduced motion переключаются в тулбаре «Motion».`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var M,z,L,K,G;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Header: None',
  ...figmaVariant('none', false)
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source},description:{story:"Figma Header = None: ✕ 36 px (иконка 24) и 24-пиксельная полоса «Top bar», контент ниже.",...(G=(K=g.parameters)==null?void 0:K.docs)==null?void 0:G.description}}};var U,q,J,X,Y;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Header: Top left',
  ...figmaVariant('left', true)
}`,...(J=(q=E.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Figma Header = Top left: ✕ 36 px (иконка 24), заголовок IM-24 B и описание IM-16 R слева.",...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Q,Z,$,u4,e4;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Header: Top center',
  ...figmaVariant('center', true)
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Figma Header = Top center: заголовок по центру.",...(e4=(u4=B.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var t4,r4,n4,a4,s4;y.parameters={...y.parameters,docs:{...(t4=y.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'Кейс · Оформление: условия возврата',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen header="left" title="Условия возврата" primaryAction={{
    label: 'Понятно'
  }}>
      <Cell title="Отмена за 1 день — вернём от 100% суммы" divider />
      <Cell title="Отмена за 5 день — вернём 20% суммы" />
    </Harness>
}`,...(n4=(r4=y.parameters)==null?void 0:r4.docs)==null?void 0:n4.source},description:{story:`Figma «Оформление заказа» → шторка «Условия возврата» (1705:214334): заголовок слева, две строки условий и «Понятно» внизу.
Текст строк взят из макета.`,...(s4=(a4=y.parameters)==null?void 0:a4.docs)==null?void 0:s4.description}}};var o4,i4,l4,c4,d4;x.parameters={...x.parameters,docs:{...(o4=x.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Тест: длинный контент',
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
}`,...(l4=(i4=x.parameters)==null?void 0:i4.docs)==null?void 0:l4.source},description:{story:"Тест прокрутки: контент выше экрана, шапка и кнопки на месте. Не кейс дизайна.",...(d4=(c4=x.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};var p4,m4,g4,E4,B4;h.parameters={...h.parameters,docs:{...(p4=h.parameters)==null?void 0:p4.docs,source:{originalSource:`{
  name: 'Тест: иллюстрация 148 px',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen title="Иллюстрация" description="Слот для картинки" illustration={<div aria-hidden="true" style={{
    width: 148,
    height: 148,
    borderRadius: 'var(--radius-xl)',
    background: 'var(--color-bg-sunken-muted)'
  }} />} primaryAction={{
    label: 'Понятно'
  }}>
      <div style={{
      padding: '0 var(--spacing-lg)'
    }}>
        <Slot height={80} />
      </div>
    </Harness>
}`,...(g4=(m4=h.parameters)==null?void 0:m4.docs)==null?void 0:g4.source},description:{story:"Тест слота иллюстрации: Figma IMG 148 px между ручкой и заголовком. Не кейс дизайна.",...(B4=(E4=h.parameters)==null?void 0:E4.docs)==null?void 0:B4.description}}};var y4,x4,h4,A4,b4;A.parameters={...A.parameters,docs:{...(y4=A.parameters)==null?void 0:y4.docs,source:{originalSource:`{
  name: 'Кейс · Главная: участники',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ParticipantsDemo />
}`,...(h4=(x4=A.parameters)==null?void 0:x4.docs)==null?void 0:h4.source},description:{story:`Figma «Главная» → «Редактирование кол-во участников» (2254:34769); та же шторка на «Оформлении» (1338:110029).
«Взрослый — старше 18 лет» (от 1), «Ребёнок — до 18 лет» (от 0), внизу «Сбросить» и «Готово».`,...(b4=(A4=A.parameters)==null?void 0:A4.docs)==null?void 0:b4.description}}};var D4,F4,f4,C4,v4;b.parameters={...b.parameters,docs:{...(D4=b.parameters)==null?void 0:D4.docs,source:{originalSource:`{
  name: 'Кейс · Фильтры: Удобства',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FiltersDemo />
}`,...(f4=(F4=b.parameters)==null?void 0:F4.docs)==null?void 0:f4.source},description:{story:"Figma «Результаты» → «Фильтрация», шторка «Удобства» (638:2975): список Checkbox, внизу «Сбросить» и «Применить».",...(v4=(C4=b.parameters)==null?void 0:C4.docs)==null?void 0:v4.description}}};var w4,j4,H4,S4,k4;D.parameters={...D.parameters,docs:{...(w4=D.parameters)==null?void 0:w4.docs,source:{originalSource:`{
  name: 'Тест: поле и клавиатура',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FieldDemo />
}`,...(H4=(j4=D.parameters)==null?void 0:j4.docs)==null?void 0:H4.source},description:{story:"Test fixture, not a design case: a field inside the sheet. When the on-screen keyboard opens, the sheet and its footer\nlift above it (`--keyboard-inset` from `visualViewport`); scripts/check-sheet-sync.mjs fakes the keyboard on it.",...(k4=(S4=D.parameters)==null?void 0:S4.docs)==null?void 0:k4.description}}};var T4,R4,O4,I4,N4;F.parameters={...F.parameters,docs:{...(T4=F.parameters)==null?void 0:T4.docs,source:{originalSource:`{
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
}`,...(O4=(R4=F.parameters)==null?void 0:R4.docs)==null?void 0:O4.source},description:{story:"Закрыть нельзя ни свайпом, ни фоном, ни Escape: шторка упирается и возвращается. ✕ и кнопки работают.",...(N4=(I4=F.parameters)==null?void 0:I4.docs)==null?void 0:N4.description}}};var P4,_4,V4;w.parameters={...w.parameters,docs:{...(P4=w.parameters)==null?void 0:P4.docs,source:{originalSource:`{
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
}`,...(V4=(_4=w.parameters)==null?void 0:_4.docs)==null?void 0:V4.source}}};var W4,M4,z4;j.parameters={...j.parameters,docs:{...(W4=j.parameters)==null?void 0:W4.docs,source:{originalSource:`{
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
}`,...(z4=(M4=j.parameters)==null?void 0:M4.docs)==null?void 0:z4.source}}};var L4,K4,G4;H.parameters={...H.parameters,docs:{...(L4=H.parameters)==null?void 0:L4.docs,source:{originalSource:`{
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
}`,...(G4=(K4=H.parameters)==null?void 0:K4.docs)==null?void 0:G4.source}}};const m0=Object.freeze(Object.defineProperty({__proto__:null,CaseFilters:b,CaseParticipants:A,FieldTest:D,HeaderCenter:B,HeaderLeft:E,HeaderNone:g,LongContent:x,NotDismissible:F,Playground:m,ReturnPolicyCase:y,TestCloseButton:w,TestEscape:j,TestRefAndRest:H,WithIllustration:h,__namedExportsOrder:a0,default:u0},Symbol.toStringTag,{value:"Module"}));export{A as C,g as H,x as L,F as N,m as P,y as R,m0 as S,h as W,E as a,B as b,b as c};
