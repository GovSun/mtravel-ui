import{j as t}from"./iframe-DyD5Yel4.js";import{A as e}from"./Attribute-DFV0-_Ht.js";import{a as i}from"./time-lpmEQjgl.js";import{F as T,M as D,L as _}from"./places-CYDz-5dl.js";import{U as s,T as W}from"./people-tOiSq3ZR.js";const{expect:c,within:M}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Attribute",component:e,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=691-15"},layout:"centered"},args:{children:"3 часа",icon:t.jsx(i,{}),variant:"default"},argTypes:{children:{control:"text"},icon:{control:!1},variant:{control:"inline-radio",options:["default","inverse"]}}},n={},u={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[t.jsx(e,{icon:t.jsx(i,{}),children:"3 часа"}),t.jsx(e,{icon:t.jsx(T,{}),children:"Пешком"}),t.jsx(e,{icon:t.jsx(s,{}),children:"Группа до 10 человек"}),t.jsx(e,{icon:t.jsx(W,{}),children:"Можно с детьми"}),t.jsx(e,{icon:t.jsx(D,{}),children:"Легко"}),t.jsx(e,{icon:t.jsx(_,{size:12}),children:"Ташкент"}),t.jsx(e,{children:"Без иконки"})]})},r={name:"Кейсы · Детали экскурсии",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px 12px",width:361,maxWidth:"100%"},children:[t.jsx(e,{icon:t.jsx(i,{}),children:"3 часа"}),t.jsx(e,{icon:t.jsx(T,{}),children:"Пешком"}),t.jsx(e,{icon:t.jsx(s,{}),children:"Группа до 10 человек"})]})},a={name:"Светлый на тёмном фото",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{"data-testid":"dark",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"4px 6px",width:361,maxWidth:"100%",boxSizing:"border-box",padding:16,borderRadius:16,background:"var(--color-bg-constant-scrim-strong)"},children:[t.jsx(e,{variant:"inverse",icon:t.jsx(i,{}),children:"7 часов"}),t.jsx(e,{variant:"inverse",icon:t.jsx(D,{}),children:"Средне"}),t.jsx(e,{variant:"inverse",icon:t.jsx(s,{}),children:"Группа до 12 человек"}),t.jsx(e,{variant:"inverse",icon:t.jsx(_,{size:12}),children:"Ташкент"})]}),play:async({canvasElement:k})=>{const o=M(k).getByText("7 часов").parentElement;await c(o).toHaveAttribute("data-variant","inverse"),await c(parseInt(getComputedStyle(o).color.match(/\d+/)[0],10)).toBeGreaterThan(200)}},z=["Playground","Variants","CaseExcursion","Inverse"];var d,l,p,x,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Характеристика строкой: иконка и текст.",...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.description}}};var b,A,v,g,h;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(A=u.parameters)==null?void 0:A.docs)==null?void 0:v.source},description:{story:"Figma: Show icon on / off, the icons of the product.",...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var j,y,E,f,I;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Кейсы · Детали экскурсии',
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
    </div>
}`,...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source},description:{story:"Excursion details: a wrapping group, spacing/md between attributes (Figma 1279:100289, 1648:180119).",...(I=(f=r.parameters)==null?void 0:f.docs)==null?void 0:I.description}}};var w,C,B,S,F;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"`inverse`: the XL excursion card lists its facts over a dark photo; the text and icons turn light.",...(F=(S=a.parameters)==null?void 0:S.docs)==null?void 0:F.description}}};const H=Object.freeze(Object.defineProperty({__proto__:null,CaseExcursion:r,Inverse:a,Playground:n,Variants:u,__namedExportsOrder:z,default:P},Symbol.toStringTag,{value:"Module"}));export{H as A,r as C,a as I,n as P,u as V};
