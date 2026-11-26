import{j as n}from"./iframe-DyD5Yel4.js";import{C as g}from"./Caption-D_clnAXK.js";import{P as e}from"./PillButton-Cdj7WtD9.js";import{a as $}from"./places-CYDz-5dl.js";import{C as l}from"./general-CSE0kF9v.js";const{expect:d,fn:v,userEvent:J,within:K}=__STORYBOOK_MODULE_TEST__,X="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1492-366",Y={title:"Components/Pill Button",component:e,parameters:{design:{type:"figma",url:X},layout:"centered"},args:{variant:"white",size:14,children:"Все",chevron:!1},argTypes:{variant:{control:"inline-radio",options:["link","white","overlay","accent"]},size:{control:"inline-radio",options:[14,12]},children:{control:"text"},chevron:{control:"boolean"},iconLeft:{control:!1},iconRight:{control:!1},forcePressed:{control:!1}},render:u=>n.jsx(p,{variant:u.variant??"link",children:n.jsx(e,{...u})})},Q="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",Z={link:{background:"var(--color-bg-page)"},white:{background:"var(--color-bg-sunken-subtle)"},overlay:{background:Q},accent:{background:"var(--color-bg-sunken-subtle)"}};function p({variant:u,children:a}){return n.jsx("div",{style:{...Z[u],padding:16,borderRadius:16,display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:a})}const t={},r={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"grid",gap:16},children:[["link","white","overlay","accent"].map(u=>n.jsxs("div",{style:{display:"grid",gap:6},children:[n.jsx(g,{children:`Type=${u}`}),n.jsxs(p,{variant:u,children:[n.jsx(e,{variant:u,children:"Все"}),n.jsx(e,{variant:u,chevron:!0,children:"Все"}),n.jsx(e,{variant:u,iconLeft:n.jsx(l,{variant:"solid",size:12}),children:"Изменить"}),n.jsx(e,{variant:u,iconRight:n.jsx(l,{variant:"solid",size:12}),children:"Изменить"}),n.jsx(e,{variant:u,iconLeft:n.jsx(l,{variant:"solid",size:12}),iconRight:n.jsx(l,{variant:"solid",size:12}),chevron:!0,children:"Все"})]})]},u)),n.jsxs("div",{style:{display:"grid",gap:6},children:[n.jsx(g,{children:"Size=12 · white, overlay, accent (22 px, IM-12 S)"}),["white","overlay","accent"].map(u=>n.jsxs(p,{variant:u,children:[n.jsx(e,{variant:u,size:12,children:"Все"}),n.jsx(e,{variant:u,size:12,chevron:!0,children:"Все"}),n.jsx(e,{variant:u,size:12,iconLeft:n.jsx(l,{variant:"solid",size:12}),children:"Заполнить"})]},u))]})]})},i={name:"Тест: нажатие",args:{variant:"white",children:"Изменить",onClick:v()},render:u=>n.jsxs(p,{variant:u.variant??"link",children:[n.jsx(e,{...u}),n.jsx(e,{variant:u.variant,forcePressed:!0,onClick:()=>{},children:"Нажатая"})]}),play:async({canvasElement:u,args:a})=>{const m=K(u),N=m.getByRole("button",{name:"Изменить"});await J.click(N),await d(a.onClick).toHaveBeenCalledTimes(1),await d(m.getByRole("button",{name:"Нажатая"})).toHaveAttribute("data-pressed")}},s={name:"Тест: без обработчика",args:{variant:"link",children:"Все"},play:async({canvasElement:u})=>{const a=K(u);await d(a.queryByRole("button")).toBeNull(),await d(a.getByText("Все").closest("span[data-variant]")).not.toHaveAttribute("data-interactive")}},o={name:"Кейсы / Маршрут на карте",args:{variant:"overlay",children:"Построить маршрут",iconRight:n.jsx($,{}),onClick:v()},parameters:{controls:{disable:!0}}},c={name:"Кейсы / «Изменить» на карточке",args:{variant:"white",children:"Изменить",onClick:v()},parameters:{controls:{disable:!0}}},u4=["Playground","Variants","ClickTest","StaticTest","CaseRoute","CaseEdit"];var h,y,C,B,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source},description:{story:"Тип, текст и шеврон в панели Controls.",...(x=(B=t.parameters)==null?void 0:B.docs)==null?void 0:x.description}}};var f,E,b,A,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {(['link', 'white', 'overlay', 'accent'] as const).map(variant => <div key={variant} style={{
      display: 'grid',
      gap: 6
    }}>
          <Caption>{\`Type=\${variant}\`}</Caption>
          <Surface variant={variant}>
            <PillButton variant={variant}>Все</PillButton>
            <PillButton variant={variant} chevron>
              Все
            </PillButton>
            <PillButton variant={variant} iconLeft={<CircleIcon variant="solid" size={12} />}>
              Изменить
            </PillButton>
            <PillButton variant={variant} iconRight={<CircleIcon variant="solid" size={12} />}>
              Изменить
            </PillButton>
            <PillButton variant={variant} iconLeft={<CircleIcon variant="solid" size={12} />} iconRight={<CircleIcon variant="solid" size={12} />} chevron>
              Все
            </PillButton>
          </Surface>
        </div>)}
      <div style={{
      display: 'grid',
      gap: 6
    }}>
        <Caption>Size=12 · white, overlay, accent (22 px, IM-12 S)</Caption>
        {(['white', 'overlay', 'accent'] as const).map(variant => <Surface key={variant} variant={variant}>
            <PillButton variant={variant} size={12}>Все</PillButton>
            <PillButton variant={variant} size={12} chevron>Все</PillButton>
            <PillButton variant={variant} size={12} iconLeft={<CircleIcon variant="solid" size={12} />}>Заполнить</PillButton>
          </Surface>)}
      </div>
    </div>
}`,...(b=(E=r.parameters)==null?void 0:E.docs)==null?void 0:b.source},description:{story:"The Figma set 1492:366: Type link | white | overlay | accent × Icon left × Icon right × Show chevron, then Size 12.",...(k=(A=r.parameters)==null?void 0:A.docs)==null?void 0:k.description}}};var w,P,j,D,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Тест: нажатие',
  args: {
    variant: 'white',
    children: 'Изменить',
    onClick: fn()
  },
  render: args => <Surface variant={args.variant ?? 'link'}>
      <PillButton {...args} />
      <PillButton variant={args.variant} forcePressed onClick={() => {}}>
        Нажатая
      </PillButton>
    </Surface>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Изменить'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(canvas.getByRole('button', {
      name: 'Нажатая'
    })).toHaveAttribute('data-pressed');
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source},description:{story:"With `onClick` the pill is a `<button>`: it shrinks under the finger and gets the event. Pressed look forced on the right.",...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var z,R,T,F,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Тест: без обработчика',
  args: {
    variant: 'link',
    children: 'Все'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button')).toBeNull();
    await expect(canvas.getByText('Все').closest('span[data-variant]')).not.toHaveAttribute('data-interactive');
  }
}`,...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Без обработчика это просто текст внутри нажимаемой строки или карточки: не кнопка.",...(I=(F=s.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};var _,L,O,H,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Кейсы / Маршрут на карте',
  args: {
    variant: 'overlay',
    children: 'Построить маршрут',
    iconRight: <LocationArrowIcon />,
    onClick: fn()
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(L=o.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:"«Построить маршрут» на карте карточки места: стекло, иконка-стрелка справа (Figma card_location 1493:6243).",...(M=(H=o.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var V,U,W,q,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Кейсы / «Изменить» на карточке',
  args: {
    variant: 'white',
    children: 'Изменить',
    onClick: fn()
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"«Изменить» в строке на серой карточке оформления: белая таблетка (Figma Disclosure Type=pill).",...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};const i4=Object.freeze(Object.defineProperty({__proto__:null,CaseEdit:c,CaseRoute:o,ClickTest:i,Playground:t,StaticTest:s,Variants:r,__namedExportsOrder:u4,default:Y},Symbol.toStringTag,{value:"Module"}));export{i as C,i4 as P,r as V,t as a,o as b,c};
