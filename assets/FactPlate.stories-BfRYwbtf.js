import{j as e}from"./iframe-DyD5Yel4.js";import{F as r}from"./FactPlate-DOMeLgzx.js";const{expect:E,within:S}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Fact plate",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4879"}},args:{variant:"default",month:"дек",day:"17",time:"18:00"},argTypes:{variant:{control:"inline-radio",options:["default","glass"]},month:{control:"text"},day:{control:"text"},time:{control:"text"}}},O="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",t={},a={name:"Варианты",parameters:{controls:{disable:!0},layout:"padded"},render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx("div",{style:{padding:24,background:"var(--color-bg-sunken-subtle)"},children:e.jsx(r,{month:"дек",day:"17",time:"18:00"})}),e.jsx("div",{style:{padding:24,background:O},children:e.jsx(r,{variant:"glass",month:"дек",day:"17",time:"18:00"})})]})},n={name:"Кейсы · Дата на обложке",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx("div",{style:{position:"relative",width:393,height:240,background:O},children:e.jsx("div",{style:{position:"absolute",left:16,bottom:16},children:e.jsx(r,{variant:"glass",month:"дек",day:"17",time:"18:00"})})})},s={name:"Тест: название для скринридера",parameters:{controls:{disable:!0}},play:async({canvasElement:w})=>{await E(S(w).getByRole("group",{name:"17 дек, 18:00"})).toBeInTheDocument()}},D=["Playground","Variants","CaseSlot","A11yTest"];var o,u,i,d,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source},description:{story:"Дата одним взглядом: месяц, число, время.",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var c,p,m,g,y;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <div style={{
      padding: 24,
      background: 'var(--color-bg-sunken-subtle)'
    }}>
        <FactPlate month="дек" day="17" time="18:00" />
      </div>
      <div style={{
      padding: 24,
      background: PHOTO
    }}>
        <FactPlate variant="glass" month="дек" day="17" time="18:00" />
      </div>
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"The Figma set 883:4879: Property 1 = Default (white) | Variant2 (glass, on a photo).",...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var v,h,b,f,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Кейсы · Дата на обложке',
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
    position: 'relative',
    width: 393,
    height: 240,
    background: PHOTO
  }}>
      <div style={{
      position: 'absolute',
      left: 16,
      bottom: 16
    }}>
        <FactPlate variant="glass" month="дек" day="17" time="18:00" />
      </div>
    </div>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"The time slot on the cover of the excursion page: glass over the photo (Figma 1606:174750).",...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.description}}};var F,P,T,j,B;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Тест: название для скринридера',
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('group', {
      name: '17 дек, 18:00'
    })).toBeInTheDocument();
  }
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source},description:{story:"A screen reader gets one phrase, not three scraps.",...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.description}}};const C=Object.freeze(Object.defineProperty({__proto__:null,A11yTest:s,CaseSlot:n,Playground:t,Variants:a,__namedExportsOrder:D,default:_},Symbol.toStringTag,{value:"Module"}));export{n as C,C as F,t as P,a as V};
