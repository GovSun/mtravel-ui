import{j as n}from"./iframe-DuqTOznb.js";import{C as N}from"./Caption-C6jupY-b.js";import{P as e}from"./PillButton-BwV4GISW.js";import{a as $}from"./places-z-kxph-t.js";import{C as l}from"./general-DYSfllt2.js";const{expect:d,fn:p,userEvent:J,within:G}=__STORYBOOK_MODULE_TEST__,X="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1492-366",Y={title:"Components/Pill Button",component:e,parameters:{design:{type:"figma",url:X},layout:"centered"},args:{variant:"white",children:"Все",chevron:!1},argTypes:{variant:{control:"inline-radio",options:["link","white","overlay"]},children:{control:"text"},chevron:{control:"boolean"},iconLeft:{control:!1},iconRight:{control:!1},forcePressed:{control:!1}},render:u=>n.jsx(v,{variant:u.variant??"link",children:n.jsx(e,{...u})})},Q="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",Z={link:{background:"var(--color-bg-page)"},white:{background:"var(--color-bg-sunken-subtle)"},overlay:{background:Q}};function v({variant:u,children:a}){return n.jsx("div",{style:{...Z[u],padding:16,borderRadius:16,display:"flex",flexWrap:"wrap",gap:12,alignItems:"center"},children:a})}const t={},r={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gap:16},children:["link","white","overlay"].map(u=>n.jsxs("div",{style:{display:"grid",gap:6},children:[n.jsx(N,{children:`Type=${u}`}),n.jsxs(v,{variant:u,children:[n.jsx(e,{variant:u,children:"Все"}),n.jsx(e,{variant:u,chevron:!0,children:"Все"}),n.jsx(e,{variant:u,iconLeft:n.jsx(l,{variant:"solid",size:12}),children:"Изменить"}),n.jsx(e,{variant:u,iconRight:n.jsx(l,{variant:"solid",size:12}),children:"Изменить"}),n.jsx(e,{variant:u,iconLeft:n.jsx(l,{variant:"solid",size:12}),iconRight:n.jsx(l,{variant:"solid",size:12}),chevron:!0,children:"Все"})]})]},u))})},i={name:"Тест: нажатие",args:{variant:"white",children:"Изменить",onClick:p()},render:u=>n.jsxs(v,{variant:u.variant??"link",children:[n.jsx(e,{...u}),n.jsx(e,{variant:u.variant,forcePressed:!0,onClick:()=>{},children:"Нажатая"})]}),play:async({canvasElement:u,args:a})=>{const m=G(u),K=m.getByRole("button",{name:"Изменить"});await J.click(K),await d(a.onClick).toHaveBeenCalledTimes(1),await d(m.getByRole("button",{name:"Нажатая"})).toHaveAttribute("data-pressed")}},o={name:"Тест: без обработчика",args:{variant:"link",children:"Все"},play:async({canvasElement:u})=>{const a=G(u);await d(a.queryByRole("button")).toBeNull(),await d(a.getByText("Все").closest("span[data-variant]")).not.toHaveAttribute("data-interactive")}},s={name:"Кейсы / Маршрут на карте",args:{variant:"overlay",children:"Построить маршрут",iconRight:n.jsx($,{}),onClick:p()},parameters:{controls:{disable:!0}}},c={name:"Кейсы / «Изменить» на карточке",args:{variant:"white",children:"Изменить",onClick:p()},parameters:{controls:{disable:!0}}},u4=["Playground","Variants","ClickTest","StaticTest","CaseRoute","CaseEdit"];var g,h,C,y,B;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source},description:{story:"Тип, текст и шеврон в панели Controls.",...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var x,f,E,A,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      {(['link', 'white', 'overlay'] as const).map(variant => <div key={variant} style={{
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
    </div>
}`,...(E=(f=r.parameters)==null?void 0:f.docs)==null?void 0:E.source},description:{story:"The Figma set 1492:366: Type link | white | overlay × Icon left × Icon right × Show chevron.",...(b=(A=r.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var k,w,D,P,j;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"With `onClick` the pill is a `<button>`: it shrinks under the finger and gets the event. Pressed look forced on the right.",...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.description}}};var S,R,T,F,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source},description:{story:"Без обработчика это просто текст внутри нажимаемой строки или карточки: не кнопка.",...(_=(F=o.parameters)==null?void 0:F.docs)==null?void 0:_.description}}};var I,z,O,L,H;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(O=(z=s.parameters)==null?void 0:z.docs)==null?void 0:O.source},description:{story:"«Построить маршрут» на карте карточки места: стекло, иконка-стрелка справа (Figma card_location 1493:6243).",...(H=(L=s.parameters)==null?void 0:L.docs)==null?void 0:H.description}}};var M,V,U,W,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(V=c.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"«Изменить» в строке на серой карточке оформления: белая таблетка (Figma Disclosure Type=pill).",...(q=(W=c.parameters)==null?void 0:W.docs)==null?void 0:q.description}}};const i4=Object.freeze(Object.defineProperty({__proto__:null,CaseEdit:c,CaseRoute:s,ClickTest:i,Playground:t,StaticTest:o,Variants:r,__namedExportsOrder:u4,default:Y},Symbol.toStringTag,{value:"Module"}));export{i as C,i4 as P,r as V,t as a,s as b,c};
