import{j as e}from"./iframe-DuqTOznb.js";import{C as N}from"./Caption-C6jupY-b.js";import{a as i,C as c}from"./Cell-DbWJlVzG.js";import{B as M}from"./Badge-Dbn3uc4E.js";import{b as U}from"./time-CsMT4GVj.js";const{expect:d,fn:G,userEvent:K,within:m}=__STORYBOOK_MODULE_TEST__,V="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=46-102",J={title:"Components/Cell Disclosure",component:i,parameters:{design:{type:"figma",url:V},layout:"centered"},args:{variant:"chevron",checked:!0},argTypes:{variant:{control:"select",options:["chevron","check","radio","checkbox","toggle","counter","badge","icon","link","link-chevron","pill","pill-chevron","pill-overlay","pill-overlay-chevron","none"]},counter:{control:!1},children:{control:"text"}}},a={},L=[{figma:"chevron",variant:"chevron"},{figma:"check",variant:"check"},{figma:"radio",variant:"radio"},{figma:"checkbox",variant:"checkbox"},{figma:"toggle",variant:"toggle"},{figma:"counter",variant:"counter"},{figma:"badge",variant:"badge",children:e.jsx(M,{size:24,children:"08:45"})},{figma:"icon",variant:"icon",children:e.jsx(U,{})},{figma:"link",variant:"link"},{figma:"link + Show chevron",variant:"link-chevron"},{figma:"pill",variant:"pill"},{figma:"pill + Show chevron",variant:"pill-chevron"},{figma:"pill-overlay",variant:"pill-overlay",overlay:!0},{figma:"pill-overlay + Show chevron",variant:"pill-overlay-chevron",overlay:!0},{figma:"Icon = false",variant:"none"}],r={name:"Все типы",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"auto auto 1fr",gap:"12px 16px",alignItems:"center"},children:L.map(u=>e.jsx(X,{...u},u.variant))})};function X({figma:u,variant:n,children:l,overlay:p}){const g=n==="pill"||n==="pill-chevron";return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:u}),e.jsx("code",{className:"im-12-r",children:n}),e.jsx("span",{"data-case":n,style:{display:"inline-flex",justifySelf:"start",padding:p||g?"8px 4px":0,borderRadius:12,background:p?"var(--color-bg-constant-scrim-strong)":g?"var(--color-bg-sunken-subtle)":void 0},children:e.jsx(i,{variant:n,checked:n==="check"||n==="radio"?!0:void 0,value:"a","aria-label":u,counter:n==="counter"?{defaultValue:24,"aria-label":"Количество"}:void 0,children:l})})]})}const t={name:"Тест: «Все» как кнопка",args:{variant:"pill-chevron",onClick:G()},render:u=>e.jsx(c,{title:"Билеты",subtitle:"Ближайшие даты",disclosure:e.jsx(i,{...u})}),play:async({canvasElement:u,args:n})=>{const l=m(u);await K.click(l.getByRole("button",{name:"Все"})),await d(n.onClick).toHaveBeenCalledTimes(1)}},s={name:"Кейсы / Время слота",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsx("div",{style:{width:393,maxWidth:"100%"},children:e.jsx(c,{title:"Обзорная экскурсия",subtitle:"Сегодня",disclosure:e.jsx(i,{variant:"badge",children:e.jsx(M,{size:24,iconRight:!0,children:"08:45"})})})}),play:async({canvasElement:u})=>{await d(m(u).getByText("08:45")).toBeInTheDocument()}},o={name:"Кейсы / «Все» открывает список",parameters:{controls:{disable:!0},layout:"fullscreen"},args:{onClick:G()},render:u=>e.jsx("div",{style:{width:393,maxWidth:"100%"},children:e.jsx(c,{title:"Билеты",subtitle:"Ближайшие даты",disclosure:e.jsx(i,{variant:"link-chevron",onClick:u.onClick,children:"Все"})})}),play:async({canvasElement:u,args:n})=>{await K.click(m(u).getByRole("button",{name:"Все"})),await d(n.onClick).toHaveBeenCalledTimes(1)}},Y=["Playground","Types","ActionTest","CaseSlotTime","CaseSeeAll"];var v,h,y,B,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Выбери тип в Controls.",...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.description}}};var C,f,k,b,E;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Все типы',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto auto 1fr',
    gap: '12px 16px',
    alignItems: 'center'
  }}>
      {ROWS.map(r => <Row key={r.variant} {...r} />)}
    </div>
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"The Figma set 46:102: all 11 types, the pills with and without the chevron of their Pill button, and the empty slot of Icon = false.",...(E=(b=r.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};var A,w,j,T,D;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Тест: «Все» как кнопка',
  args: {
    variant: 'pill-chevron',
    onClick: fn()
  },
  render: args => <Cell title="Билеты" subtitle="Ближайшие даты" disclosure={<CellDisclosure {...args} />} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Все'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"Pills and links become buttons when you give them `onClick`; the row around them stays a plain block.",...(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var S,F,R,_,O;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Кейсы / Время слота',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    width: 393,
    maxWidth: '100%'
  }}>
      <Cell title="Обзорная экскурсия" subtitle="Сегодня" disclosure={<CellDisclosure variant="badge">
            <Badge size={24} iconRight>08:45</Badge>
          </CellDisclosure>} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('08:45')).toBeInTheDocument();
  }
}`,...(R=(F=s.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"Время слота в строке экскурсии: справа настоящий Badge DS «08:45 ›», строка целиком нажимается.",...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var I,W,P,z,H;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Кейсы / «Все» открывает список',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  args: {
    onClick: fn()
  },
  render: args => <div style={{
    width: 393,
    maxWidth: '100%'
  }}>
      <Cell title="Билеты" subtitle="Ближайшие даты" disclosure={<CellDisclosure variant="link-chevron" onClick={args.onClick}>Все</CellDisclosure>} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Все'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(P=(W=o.parameters)==null?void 0:W.docs)==null?void 0:P.source},description:{story:"Заголовок раздела с кнопкой «Все» справа: таблетка открывает список (Figma «Билеты»).",...(H=(z=o.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};const ue=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:t,CaseSeeAll:o,CaseSlotTime:s,Playground:a,Types:r,__namedExportsOrder:Y,default:J},Symbol.toStringTag,{value:"Module"}));export{s as C,ue as D,a as P,r as T,o as a};
