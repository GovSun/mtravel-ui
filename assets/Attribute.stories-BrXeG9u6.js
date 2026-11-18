import{j as t}from"./iframe-DuqTOznb.js";import{A as e}from"./Attribute-B5KkNu9f.js";import{a as s}from"./time-CsMT4GVj.js";import{M as c,L as d,F as L}from"./places-z-kxph-t.js";import{U as o,T as U}from"./people-s6FNqSUd.js";const{expect:p,within:R}=__STORYBOOK_MODULE_TEST__,V={title:"Components/Attribute",component:e,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=691-15"},layout:"centered"},args:{children:"3 часа",icon:t.jsx(s,{}),variant:"default"},argTypes:{children:{control:"text"},icon:{control:!1},variant:{control:"inline-radio",options:["default","inverse"]}}},u={},n={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(e,{icon:t.jsx(s,{}),children:"3 часа"}),t.jsx(e,{icon:t.jsx(L,{}),children:"Пешком"}),t.jsx(e,{icon:t.jsx(o,{}),children:"Группа до 10 человек"}),t.jsx(e,{icon:t.jsx(U,{}),children:"Можно с детьми"}),t.jsx(e,{icon:t.jsx(c,{}),children:"Легко"}),t.jsx(e,{icon:t.jsx(d,{size:12}),children:"Ташкент"}),t.jsx(e,{children:"Без иконки"})]})},r={name:"Кейс: детали экскурсии",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 12px",width:361,maxWidth:"100%"},children:[t.jsx(e,{icon:t.jsx(s,{}),children:"3 часа"}),t.jsx(e,{icon:t.jsx(L,{}),children:"Пешком"}),t.jsx(e,{icon:t.jsx(o,{}),children:"Группа до 10 человек"}),t.jsx(e,{icon:t.jsx(U,{}),children:"Можно с детьми"})]})},i={name:"Кейс: карточка в каталоге",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[t.jsx(e,{icon:t.jsx(s,{}),children:"7 часов"}),t.jsx(e,{icon:t.jsx(c,{}),children:"Средне"}),t.jsx(e,{icon:t.jsx(o,{}),children:"Группа до 12 человек"}),t.jsx(e,{icon:t.jsx(d,{size:12}),children:"Ташкент"})]})},a={name:"Светлый на тёмном фото",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{"data-testid":"dark",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"4px 6px",width:361,maxWidth:"100%",boxSizing:"border-box",padding:16,borderRadius:16,background:"var(--color-bg-constant-scrim-strong)"},children:[t.jsx(e,{variant:"inverse",icon:t.jsx(s,{}),children:"7 часов"}),t.jsx(e,{variant:"inverse",icon:t.jsx(c,{}),children:"Средне"}),t.jsx(e,{variant:"inverse",icon:t.jsx(o,{}),children:"Группа до 12 человек"}),t.jsx(e,{variant:"inverse",icon:t.jsx(d,{size:12}),children:"Ташкент"})]}),play:async({canvasElement:O})=>{const l=R(O).getByText("7 часов").parentElement;await p(l).toHaveAttribute("data-variant","inverse"),await p(parseInt(getComputedStyle(l).color.match(/\d+/)[0],10)).toBeGreaterThan(200)}},G=["Playground","Variants","CaseExcursion","CaseCard","Inverse"];var m,x,b,A,g;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(x=u.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"Характеристика строкой: иконка и текст.",...(g=(A=u.parameters)==null?void 0:A.docs)==null?void 0:g.description}}};var j,v,h,y,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      <Attribute icon={<ClockIcon />}>3 часа</Attribute>
      <Attribute icon={<FootIcon />}>Пешком</Attribute>
      <Attribute icon={<UserIcon />}>Группа до 10 человек</Attribute>
      <Attribute icon={<TeddyBearIcon />}>Можно с детьми</Attribute>
      <Attribute icon={<MountainIcon />}>Легко</Attribute>
      <Attribute icon={<LocationPinIcon size={12} />}>Ташкент</Attribute>
      <Attribute>Без иконки</Attribute>
    </div>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source},description:{story:"Figma: Show icon on / off, the icons of the product.",...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.description}}};var f,I,C,w,B;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Кейс: детали экскурсии',
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
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px 12px',
    width: 361,
    maxWidth: '100%'
  }}>
      <Attribute icon={<ClockIcon />}>3 часа</Attribute>
      <Attribute icon={<FootIcon />}>Пешком</Attribute>
      <Attribute icon={<UserIcon />}>Группа до 10 человек</Attribute>
      <Attribute icon={<TeddyBearIcon />}>Можно с детьми</Attribute>
    </div>
}`,...(C=(I=r.parameters)==null?void 0:I.docs)==null?void 0:C.source},description:{story:"Excursion details: a wrapping group, spacing/md between attributes (Figma 1279:100289, 1648:180119).",...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var F,S,D,T,k;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Кейс: карточка в каталоге',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    justifyItems: 'start'
  }}>
      <Attribute icon={<ClockIcon />}>7 часов</Attribute>
      <Attribute icon={<MountainIcon />}>Средне</Attribute>
      <Attribute icon={<UserIcon />}>Группа до 12 человек</Attribute>
      <Attribute icon={<LocationPinIcon size={12} />}>Ташкент</Attribute>
    </div>
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"The catalog card: four facts of an offer (Figma 402:21701).",...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var _,z,M,P,W;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Светлый на тёмном фото',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div data-testid="dark" style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '4px 6px',
    width: 361,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: 16,
    borderRadius: 16,
    background: 'var(--color-bg-constant-scrim-strong)'
  }}>
      <Attribute variant="inverse" icon={<ClockIcon />}>7 часов</Attribute>
      <Attribute variant="inverse" icon={<MountainIcon />}>Средне</Attribute>
      <Attribute variant="inverse" icon={<UserIcon />}>Группа до 12 человек</Attribute>
      <Attribute variant="inverse" icon={<LocationPinIcon size={12} />}>Ташкент</Attribute>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const text = within(canvasElement).getByText('7 часов');
    const attr = text.parentElement as HTMLElement;
    await expect(attr).toHaveAttribute('data-variant', 'inverse');
    // light text: red channel above 200
    await expect(parseInt(getComputedStyle(attr).color.match(/\\d+/)![0], 10)).toBeGreaterThan(200);
  }
}`,...(M=(z=a.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"`inverse`: the XL excursion card lists its facts over a dark photo; the text and icons turn light.",...(W=(P=a.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};const N=Object.freeze(Object.defineProperty({__proto__:null,CaseCard:i,CaseExcursion:r,Inverse:a,Playground:u,Variants:n,__namedExportsOrder:G,default:V},Symbol.toStringTag,{value:"Module"}));export{N as A,r as C,a as I,u as P,n as V,i as a};
