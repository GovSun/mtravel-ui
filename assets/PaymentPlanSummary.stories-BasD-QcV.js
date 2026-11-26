import{j as u}from"./iframe-DyD5Yel4.js";import{P as o}from"./PaymentPlanSummary-BUJW-MXc.js";const{expect:s,within:w}=__STORYBOOK_MODULE_TEST__,b=o,E={title:"Components/PaymentPlanSummary",component:b,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=992-756"}},args:{variant:"monthly",nowAmount:"0 ⃀",caption:"Далее 3 платежа с 1 дек",monthlyAmount:"4 100 ⃀ в месяц",count:3},argTypes:{variant:{control:"inline-radio",options:["monthly","schedule"]},nowAmount:{control:"text"},nowLabel:{control:"text"},caption:{control:"text"},monthlyAmount:{control:"text"},count:{control:{type:"number",min:1,max:6}},paid:{control:{type:"number",min:0,max:7}},note:{control:"text"},payments:{control:!1}}},B=({children:n})=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:16,background:"var(--color-bg-surface)"},children:n}),i=({children:n})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:n}),P=[{date:"1 дек",amount:"4 100 ⃀"},{date:"1 янв",amount:"4 100 ⃀"},{date:"1 фев",amount:"4 100 ⃀"}],F=[{date:"5 ноя",amount:"4 100 ⃀"},{date:"5 дек",amount:"4 100 ⃀"},{date:"5 янв",amount:"4 100 ⃀"}],a={render:n=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:16},children:u.jsx(b,{...n,payments:n.variant==="schedule"?P:void 0})})},t={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:8,width:393,maxWidth:"100%",boxSizing:"border-box",padding:16},children:[u.jsx(i,{children:"monthly (Default)"}),u.jsx(o,{nowAmount:"0 ⃀",caption:"Далее 3 платежа с 1 дек",monthlyAmount:"4 100 ⃀ в месяц",count:3}),u.jsx(i,{children:"schedule (Variant2)"}),u.jsx(o,{variant:"schedule",nowAmount:"0 ⃀",payments:F})]})},e={name:"Кейсы · Оплата M+, 1 число",parameters:{controls:{disable:!0}},render:()=>u.jsx(B,{children:u.jsx(o,{variant:"schedule",nowAmount:"0 ⃀",payments:[{date:"1 ноя",amount:"4 100 ⃀"},{date:"1 дек",amount:"4 100 ⃀"},{date:"1 янв",amount:"4 100 ⃀"}]})}),play:async({canvasElement:n})=>{const r=w(n).getByRole("group",{name:"План платежей"});await s(r).toHaveTextContent("Сейчас"),await s(r).toHaveTextContent("1 дек"),await s(r).toHaveTextContent("Без переплат и комиссий")}},j=["Playground","Variants","CaseOrderSchedule"];var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: 16
  }}>
      <Plan {...args} payments={args.variant === 'schedule' ? PAYMENTS : undefined} />
    </div>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,y,x,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: 16
  }}>
      <Caption>monthly (Default)</Caption>
      <PaymentPlanSummary nowAmount="0 ⃀" caption="Далее 3 платежа с 1 дек" monthlyAmount="4 100 ⃀ в месяц" count={3} />
      <Caption>schedule (Variant2)</Caption>
      <PaymentPlanSummary variant="schedule" nowAmount="0 ⃀" payments={FIGMA_PAYMENTS} />
    </div>
}`,...(y=(p=t.parameters)==null?void 0:p.docs)==null?void 0:y.source},description:{story:"The two Figma variants (992:756): Default — one line and a monthly sum; Variant2 — every payment with its date.",...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var h,v,C,A,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Кейсы · Оплата M+, 1 число',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <PaymentPlanSummary variant="schedule" nowAmount="0 ⃀" payments={[{
      date: '1 ноя',
      amount: '4 100 ⃀'
    }, {
      date: '1 дек',
      amount: '4 100 ⃀'
    }, {
      date: '1 янв',
      amount: '4 100 ⃀'
    }]} />
    </Screen>,
  play: async ({
    canvasElement
  }) => {
    const group = within(canvasElement).getByRole('group', {
      name: 'План платежей'
    });
    await expect(group).toHaveTextContent('Сейчас');
    await expect(group).toHaveTextContent('1 дек');
    await expect(group).toHaveTextContent('Без переплат и комиссий');
  }
}`,...(C=(v=e.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:`«Оформление заказа», M+ Graph (Figma 1602:132078, Variant2): рассрочка на 1 число, сейчас 0 ⃀, затем три платежа
по 4 100 ⃀ с 1 ноя по 1 янв. Строка «Без переплат и комиссий» — по умолчанию.`,...(S=(A=e.parameters)==null?void 0:A.docs)==null?void 0:S.description}}};const D=Object.freeze(Object.defineProperty({__proto__:null,CaseOrderSchedule:e,Playground:a,Variants:t,__namedExportsOrder:j,default:E},Symbol.toStringTag,{value:"Module"}));export{e as C,D as P,t as V,a};
