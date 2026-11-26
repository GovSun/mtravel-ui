import{j as u}from"./iframe-DyD5Yel4.js";import{C as t}from"./CellCenter-DamPGtPP.js";const{expect:S,within:T}=__STORYBOOK_MODULE_TEST__,h={title:"Components/Cell Center",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=45-105"},layout:"centered"},args:{title:"Бишкек",subtitle:"29 мая, 1 участник",label:"Участники",skeleton:!1},argTypes:{variant:{control:"inline-radio",options:[void 0,"title","title-subtitle","label-title"]}},decorators:[e=>u.jsx("div",{style:{width:300},children:u.jsx(e,{})})]},n={args:{variant:"title-subtitle"}},r={name:"Все варианты",parameters:{controls:{disable:!0}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"300px 300px",gap:16},children:[!1,!0].map(e=>u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(t,{variant:"title",title:"Заголовок",skeleton:e}),u.jsx(t,{variant:"title-subtitle",title:"Бишкек",subtitle:"29 мая, 1 участник",skeleton:e}),u.jsx(t,{variant:"label-title",label:"Участники",title:"2 человека",skeleton:e})]},String(e)))})},s={name:"Кейсы / Недавно искали",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(t,{title:"Бишкек",subtitle:"29 мая, 1 участник"}),u.jsx(t,{title:"Каракол",subtitle:"14 июн, 2 участника"})]}),play:async({canvasElement:e})=>{await S(T(e).getByText("Каракол")).toBeInTheDocument()}},a={name:"Кейсы / Участники в заказе",parameters:{controls:{disable:!0}},render:()=>u.jsx(t,{label:"Участники",title:"2 человека"})},_=["Playground","Types","CaseRecentSearch","CaseOrderLabel"];var l,i,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'title-subtitle'
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,c,p,m,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '300px 300px',
    gap: 16
  }}>
      {([false, true] as const).map(s => <div key={String(s)} style={{
      display: 'grid',
      gap: 12
    }}>
          <CellCenter variant="title" title="Заголовок" skeleton={s} />
          <CellCenter variant="title-subtitle" title="Бишкек" subtitle="29 мая, 1 участник" skeleton={s} />
          <CellCenter variant="label-title" label="Участники" title="2 человека" skeleton={s} />
        </div>)}
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Figma 45:105: Type × State.",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var y,C,b,x,A;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейсы / Недавно искали',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <CellCenter title="Бишкек" subtitle="29 мая, 1 участник" />
      <CellCenter title="Каракол" subtitle="14 июн, 2 участника" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Каракол')).toBeInTheDocument();
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source},description:{story:"«Недавно искали» («Куда отправимся?», 402:21701): город и даты в две строки, как их ставит Cell.",...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.description}}};var B,v,E,D,j;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Кейсы / Участники в заказе',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <CellCenter label="Участники" title="2 человека" />
}`,...(E=(v=a.parameters)==null?void 0:v.docs)==null?void 0:E.source},description:{story:"«Детали заказа» (1338:109481): над значением стоит маленькая подпись.",...(j=(D=a.parameters)==null?void 0:D.docs)==null?void 0:j.description}}};const k=Object.freeze(Object.defineProperty({__proto__:null,CaseOrderLabel:a,CaseRecentSearch:s,Playground:n,Types:r,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{k as C,n as P,r as T,s as a,a as b};
