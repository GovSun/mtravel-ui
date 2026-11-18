import{j as u}from"./iframe-DuqTOznb.js";import{S as e}from"./SummaryRow-DUAMsLpZ.js";import{P as B}from"./PromoBadge-DMs6_-GK.js";import{a as S}from"./people-s6FNqSUd.js";const{expect:j,within:w}=__STORYBOOK_MODULE_TEST__,E={title:"Components/SummaryRow",component:e,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4867"},layout:"fullscreen"},args:{variant:"row",label:"за 2 человека",value:"49 000 ⃀"},argTypes:{variant:{control:"inline-radio",options:["row","total"]},icon:{control:!1},badge:{control:!1}},decorators:[o=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx(o,{})})]},n={},a={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(e,{variant:"total",label:"К оплате",value:"12 300 ⃀"}),u.jsx(e,{label:"за 2 человека",value:"49 000 ⃀"}),u.jsx(e,{label:"Скидка",badge:u.jsx(B,{variant:"discount",value:10}),value:"49 000 ⃀"}),u.jsx(e,{label:"Взрослый × 2",icon:u.jsx(S,{}),value:"49 000 ⃀"})]})},r={name:"Кейсы / Счёт при оформлении",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{children:[u.jsx(e,{variant:"total",label:"К оплате",value:"44 100 ⃀"}),u.jsx(e,{label:"за 2 человека",value:"49 000 ⃀"}),u.jsx(e,{label:"Скидка",badge:u.jsx(B,{variant:"discount",value:10}),value:"−4 900 ⃀"})]}),play:async({canvasElement:o})=>{await j(w(o).getByRole("img",{name:"Скидка 10%"})).toBeInTheDocument()}},A=["Playground","Variants","CaseBill"];var t,s,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,m,d,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <SummaryRow variant="total" label="К оплате" value="12 300 ⃀" />
      <SummaryRow label="за 2 человека" value="49 000 ⃀" />
      <SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="49 000 ⃀" />
      <SummaryRow label="Взрослый × 2" icon={<UsersIcon />} value="49 000 ⃀" />
    </div>
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source},description:{story:"Figma 883:4867: Type Строка | Итого, with the Icon and promo_badge booleans.",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var v,g,b,y,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Кейсы / Счёт при оформлении',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div>
      <SummaryRow variant="total" label="К оплате" value="44 100 ⃀" />
      <SummaryRow label="за 2 человека" value="49 000 ⃀" />
      <SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="−4 900 ⃀" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    // the real PromoBadge sits in the slot: it reads as «Скидка 10%»
    await expect(within(canvasElement).getByRole('img', {
      name: 'Скидка 10%'
    })).toBeInTheDocument();
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"«Оформление заказа» (1338:109481): the bill under the payment method.",...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.description}}};const f=Object.freeze(Object.defineProperty({__proto__:null,CaseBill:r,Playground:n,Variants:a,__namedExportsOrder:A,default:E},Symbol.toStringTag,{value:"Module"}));export{r as C,n as P,f as S,a as V};
