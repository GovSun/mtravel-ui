import{j as u}from"./iframe-DuqTOznb.js";import{P as r}from"./PaymentPlanSummary-BvLLkCR_.js";const{expect:m,within:z}=__STORYBOOK_MODULE_TEST__,Y=r,H={title:"Components/PaymentPlanSummary",component:Y,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=992-756"}},args:{variant:"monthly",nowAmount:"0 ⃀",caption:"Далее 3 платежа с 1 дек 2027",monthlyAmount:"4 100 ⃀ в месяц",count:3},argTypes:{variant:{control:"inline-radio",options:["monthly","schedule"]},nowAmount:{control:"text"},nowLabel:{control:"text"},caption:{control:"text"},monthlyAmount:{control:"text"},count:{control:{type:"number",min:1,max:6}},paid:{control:{type:"number",min:0,max:7}},note:{control:"text"},payments:{control:!1}}},c=({children:n})=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:16,background:"var(--color-bg-surface)"},children:n}),l=({children:n})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:n}),d=[{date:"1 дек",amount:"4 100 ⃀"},{date:"1 янв",amount:"4 100 ⃀"},{date:"1 фев",amount:"4 100 ⃀"}],s={render:n=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:16},children:u.jsx(Y,{...n,payments:n.variant==="schedule"?d:void 0})})},e={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:8,width:393,maxWidth:"100%",boxSizing:"border-box",padding:16},children:[u.jsx(l,{children:"monthly (Default)"}),u.jsx(r,{nowAmount:"0 ⃀",caption:"Далее 3 платежа с 1 дек 2027",monthlyAmount:"4 100 ⃀ в месяц",count:3}),u.jsx(l,{children:"schedule (Variant2)"}),u.jsx(r,{variant:"schedule",nowAmount:"0 ⃀",payments:d})]})},t={name:"Кейсы / График платежей, 1 число",parameters:{controls:{disable:!0}},render:()=>u.jsx(c,{children:u.jsx(r,{variant:"schedule",nowAmount:"0 ⃀",payments:d})}),play:async({canvasElement:n})=>{const i=z(n).getByRole("group",{name:"План платежей"});await m(i).toHaveTextContent("Сейчас"),await m(i).toHaveTextContent("1 дек"),await m(i).toHaveTextContent("Без переплат и комиссий")}},a={name:"Кейсы / Платёж в месяц",parameters:{controls:{disable:!0}},render:()=>u.jsx(c,{children:u.jsx(r,{nowAmount:"0 ⃀",caption:"Далее 3 платежа с 1 дек 2027",monthlyAmount:"5 063 ⃀ в месяц",count:3})})},o={name:"Кейсы / Даты с годом",parameters:{controls:{disable:!0}},render:()=>u.jsx(c,{children:u.jsx(r,{variant:"schedule",nowAmount:"0 ⃀",payments:[{date:"5 дек 2027",amount:"4 100 ⃀"},{date:"5 янв 2028",amount:"4 100 ⃀"},{date:"5 фев 2028",amount:"4 100 ⃀"}]})})},W=["Playground","Variants","CaseSchedule","CaseMonthly","CaseYear"];var p,y,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: 16
  }}>
      <Plan {...args} payments={args.variant === 'schedule' ? PAYMENTS : undefined} />
    </div>
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,g,C,A,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
      <PaymentPlanSummary nowAmount="0 ⃀" caption="Далее 3 платежа с 1 дек 2027" monthlyAmount="4 100 ⃀ в месяц" count={3} />
      <Caption>schedule (Variant2)</Caption>
      <PaymentPlanSummary variant="schedule" nowAmount="0 ⃀" payments={PAYMENTS} />
    </div>
}`,...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"The two Figma variants (992:756): Default — one line and a monthly sum; Variant2 — every payment with its date.",...(S=(A=e.parameters)==null?void 0:A.docs)==null?void 0:S.description}}};var v,b,w,E,B;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Кейсы / График платежей, 1 число',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <PaymentPlanSummary variant="schedule" nowAmount="0 ⃀" payments={PAYMENTS} />
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
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:"График под выбранной рассрочкой M+: сумма за заказ 12 300 ⃀ → три платежа по 4 100 ⃀ (2457:77137).",...(B=(E=t.parameters)==null?void 0:E.docs)==null?void 0:B.description}}};var P,F,j,D,T;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Кейсы / Платёж в месяц',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <PaymentPlanSummary nowAmount="0 ⃀" caption="Далее 3 платежа с 1 дек 2027" monthlyAmount="5 063 ⃀ в месяц" count={3} />
    </Screen>
}`,...(j=(F=a.parameters)==null?void 0:F.docs)==null?void 0:j.source},description:{story:"Заказ на 15 189 ⃀ делится на три платежа по 5 063 ⃀ (2520:4616); платежи начинаются через год.",...(T=(D=a.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var f,_,M,O,V;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Кейсы / Даты с годом',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <PaymentPlanSummary variant="schedule" nowAmount="0 ⃀" payments={[{
      date: '5 дек 2027',
      amount: '4 100 ⃀'
    }, {
      date: '5 янв 2028',
      amount: '4 100 ⃀'
    }, {
      date: '5 фев 2028',
      amount: '4 100 ⃀'
    }]} />
    </Screen>
}`,...(M=(_=o.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:"Даты с годом, когда первый платёж не в этом году (2457:48533).",...(V=(O=o.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};const K=Object.freeze(Object.defineProperty({__proto__:null,CaseMonthly:a,CaseSchedule:t,CaseYear:o,Playground:s,Variants:e,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{t as C,K as P,e as V,s as a,a as b,o as c};
