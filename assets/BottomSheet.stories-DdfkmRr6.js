import{j as u,r as l4}from"./iframe-Dr5ib33t.js";import{u as g4,P as E4}from"./PassengerSheet-BULJYyGi.js";import{B as D}from"./BottomSheet-BSDEP7jt.js";import{B as d4}from"./Button-DFQPOwGN.js";const{expect:n,fn:y4,userEvent:y,waitFor:B,within:A}=__STORYBOOK_MODULE_TEST__,B4={title:"Components/BottomSheet",component:D,parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:700}},design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=162-687"}},args:{header:"left",title:"Заголовок",description:"Описание",showHandle:!0,showClose:!0,dismissible:!0,withPrimary:!0,withSecondary:!0},argTypes:{header:{control:"inline-radio",options:["none","left","center"]},title:{control:"text"},description:{control:"text"},open:{control:!1},defaultOpen:{control:!1},onOpenChange:{control:!1},primaryAction:{control:!1},secondaryAction:{control:!1},footer:{control:!1},initialFocus:{control:!1},children:{control:!1}}};function p4({children:a}){return u.jsxs("main",{style:{minHeight:"100dvh",padding:16,boxSizing:"border-box",background:"var(--color-bg-surface)"},children:[u.jsx("h1",{className:"im-24-b",style:{margin:"0 0 8px"},children:"Экскурсии"}),u.jsx("p",{className:"im-16-r",style:{margin:"0 0 16px",color:"var(--color-text-secondary)"},children:"Страница под шторкой не прокручивается, пока шторка открыта."}),a,Array.from({length:12},(e,r)=>u.jsxs("p",{className:"im-16-r",style:{margin:"0 0 12px",color:"var(--color-text-tertiary)"},children:["Карточка ",r+1,". Обзорная экскурсия по старому городу с остановками на смотровых площадках."]},r))]})}const F=({height:a=160,label:e="Слот: вставьте свой контент"})=>u.jsx("div",{className:"im-16-r",style:{display:"grid",placeItems:"center",height:a,margin:"0 0 var(--spacing-lg)",borderRadius:"var(--radius-xl)",background:"var(--color-bg-sunken-subtle)",color:"var(--color-text-tertiary)"},children:e});function p({startOpen:a=!1,children:e,...r}){const[b,m]=l4.useState(a);return u.jsxs(p4,{children:[u.jsx(d4,{onClick:()=>m(!0),"aria-haspopup":"dialog",children:"Открыть шторку"}),u.jsx(D,{...r,open:b,onOpenChange:m,children:e})]})}const t={name:"Песочница",render:({withPrimary:a,withSecondary:e,...r})=>u.jsx(p,{...r,primaryAction:a?{label:"Основная кнопка"}:void 0,secondaryAction:e?{label:"Вторичная кнопка"}:void 0,children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(F,{})})})},x=(a,e)=>({parameters:{controls:{disable:!0}},render:()=>u.jsx(p,{startOpen:!0,header:a,title:e?"Заголовок":void 0,description:e?"Описание":void 0,"aria-label":"Шторка без заголовка",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(F,{})})})}),o={name:"Header: None",...x("none",!1)},s={name:"Header: Top left",...x("left",!0)},i={name:"Header: Top center",...x("center",!0)},c={name:"Длинный контент",parameters:{controls:{disable:!0}},render:()=>u.jsx(p,{startOpen:!0,header:"left",title:"Условия отмены",description:"Обновлено 9 ноября",primaryAction:{label:"Понятно"},children:u.jsx("ol",{style:{margin:0,padding:"0 var(--spacing-lg) var(--spacing-lg) 36px"},children:Array.from({length:40},(a,e)=>u.jsxs("li",{className:"im-16-r",style:{padding:"6px 0",color:"var(--color-text-primary)"},children:["Пункт ",e+1,". Бесплатная отмена за 24 часа до начала, после этого возвращается половина суммы."]},e))})})};function A4(){const{rows:a}=g4(),[e,r]=l4.useState(!0);return u.jsxs(p4,{children:[u.jsx(d4,{onClick:()=>r(!0),children:"Пассажиры"}),u.jsx(D,{open:e,onOpenChange:r,header:"left",title:"Пассажиры",description:"Полных лет на 9 ноя",primaryAction:{label:"Применить",onClick:()=>r(!1)},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(E4,{rows:a})})})]})}const l={name:"Пассажиры (Counter)",parameters:{controls:{disable:!0}},render:()=>u.jsx(A4,{})},d={name:"Не закрывается жестом",parameters:{controls:{disable:!0}},render:()=>u.jsx(p,{startOpen:!0,dismissible:!1,title:"Подтвердите",description:"Свайп, фон и Escape отключены",primaryAction:{label:"Подтвердить"},children:u.jsx("div",{style:{padding:"0 var(--spacing-lg)"},children:u.jsx(F,{height:120})})})},m4=()=>A(document.body).queryByRole("dialog"),g={name:"Тест: ✕ закрывает, фокус возвращается",parameters:{controls:{disable:!0}},render:()=>u.jsx(p,{title:"Заголовок",primaryAction:{label:"Основная кнопка",onClick:y4()},children:u.jsx(F,{})}),play:async({canvasElement:a})=>{const e=A(a).getByRole("button",{name:"Открыть шторку"});await y.click(e);const r=A(document.body);await B(()=>n(r.getByRole("dialog",{name:"Заголовок"})).toBeInTheDocument()),await n(r.getByRole("dialog")).toHaveAttribute("aria-modal","true"),await B(()=>n(r.getByRole("dialog")).toHaveFocus()),await y.click(r.getByRole("button",{name:"Закрыть"})),await B(()=>n(m4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},E={name:"Тест: Escape закрывает, Tab не уходит из шторки",parameters:{controls:{disable:!0}},render:()=>u.jsx(p,{title:"Заголовок",primaryAction:{label:"Основная кнопка"},secondaryAction:{label:"Вторичная кнопка"},children:u.jsx(F,{})}),play:async({canvasElement:a})=>{const e=A(a).getByRole("button",{name:"Открыть шторку"});await y.click(e);const r=A(document.body);await B(()=>n(r.getByRole("dialog")).toHaveFocus());const b=r.getByRole("dialog");for(let m=0;m<6;m++)await y.tab(),await n(b.contains(document.activeElement)).toBe(!0);await y.keyboard("{Escape}"),await B(()=>n(m4()).toBeNull(),{timeout:3e3}),await n(e).toHaveFocus()}},F4=["Playground","HeaderNone","HeaderLeft","HeaderCenter","LongContent","Passengers","NotDismissible","TestCloseButton","TestEscape"];var h,v,f,w,H;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:`Попробуйте: потяните за ручку или заголовок вниз, бросьте шторку, потяните вверх (резинка), схватите шторку во время
анимации. Тап по фону, ✕ и Escape тоже закрывают. Скорость и Reduced motion переключаются в тулбаре «Motion».`,...(H=(w=t.parameters)==null?void 0:w.docs)==null?void 0:H.description}}};var C,j,S,R,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Header: None',
  ...figmaVariant('none', false)
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Figma Header = None: ✕ 40 px (иконка 24) и 24-пиксельная полоса «Top bar», контент ниже.",...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var N,O,k,P,_;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Header: Top left',
  ...figmaVariant('left', true)
}`,...(k=(O=s.parameters)==null?void 0:O.docs)==null?void 0:k.source},description:{story:"Figma Header = Top left: ✕ 36 px (иконка 20), заголовок IM-24 B и описание IM-16 R слева.",...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.description}}};var L,M,I,V,z;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Header: Top center',
  ...figmaVariant('center', true)
}`,...(I=(M=i.parameters)==null?void 0:M.docs)==null?void 0:I.source},description:{story:"Figma Header = Top center: заголовок по центру.",...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};var K,U,q,G,J;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Длинный контент',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Harness startOpen header="left" title="Условия отмены" description="Обновлено 9 ноября" primaryAction={{
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
}`,...(q=(U=c.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:"Контент выше экрана: слот прокручивается, шапка и кнопки остаются на месте. Потяните вниз: сначала прокрутка, у верхнего края — шторка.",...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var W,X,Y,Q,Z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Пассажиры (Counter)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <PassengersDemo />
}`,...(Y=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Случай из «Авиабилетов»: три счётчика внутри настоящей шторки. Нажатия на «+» и «−» не мешают жесту.",...(Z=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var $,u4,e4,r4,a4;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(e4=(u4=d.parameters)==null?void 0:u4.docs)==null?void 0:e4.source},description:{story:"Закрыть нельзя ни свайпом, ни фоном, ни Escape: шторка упирается и возвращается. ✕ и кнопки работают.",...(a4=(r4=d.parameters)==null?void 0:r4.docs)==null?void 0:a4.description}}};var n4,t4,o4;g.parameters={...g.parameters,docs:{...(n4=g.parameters)==null?void 0:n4.docs,source:{originalSource:`{
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
}`,...(o4=(t4=g.parameters)==null?void 0:t4.docs)==null?void 0:o4.source}}};var s4,i4,c4;E.parameters={...E.parameters,docs:{...(s4=E.parameters)==null?void 0:s4.docs,source:{originalSource:`{
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
}`,...(c4=(i4=E.parameters)==null?void 0:i4.docs)==null?void 0:c4.source}}};const v4=Object.freeze(Object.defineProperty({__proto__:null,HeaderCenter:i,HeaderLeft:s,HeaderNone:o,LongContent:c,NotDismissible:d,Passengers:l,Playground:t,TestCloseButton:g,TestEscape:E,__namedExportsOrder:F4,default:B4},Symbol.toStringTag,{value:"Module"}));export{o as H,c as L,d as N,t as P,v4 as S,s as a,i as b,l as c};
