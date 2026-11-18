import{j as e}from"./iframe-DuqTOznb.js";import{D as s}from"./Divider-BbjTiNWY.js";const{expect:i,within:j}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Divider",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=723-398"},layout:"centered"},args:{variant:"inset"},argTypes:{variant:{control:"inline-radio",options:["inset","full"]},inset:{control:"number"},insetEnd:{control:"number"},as:{control:!1}},decorators:[r=>e.jsx("div",{style:{width:360,maxWidth:"100%"},children:e.jsx(r,{})})]},n={},u={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsx(s,{variant:"inset"}),e.jsx(s,{variant:"full"})]})},t={name:"Кейсы / Свой отступ в карточке",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:24},children:e.jsx(s,{inset:0,insetEnd:76,"data-testid":"custom"})}),play:async({canvasElement:r})=>{const B=j(r).getByTestId("custom"),a=getComputedStyle(B,"::before");await i(a.marginLeft).toBe("0px"),await i(a.marginRight).toBe("76px")}},_=["Playground","Variants","CaseCardInset"];var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,m,g,y;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <Divider variant="inset" />
      <Divider variant="full" />
    </div>
}`,...(m=(p=u.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Figma 723:398: Type Inset | Full.",...(y=(g=u.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var v,x,E,D,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Кейсы / Свой отступ в карточке',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <Divider inset={0} insetEnd={76} data-testid="custom" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const line = within(canvasElement).getByTestId('custom');
    const cs = getComputedStyle(line, '::before');
    await expect(cs.marginLeft).toBe('0px');
    await expect(cs.marginRight).toBe('76px');
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Свои отступы: линия в карточке «Откуда / Куда» начинается у края и заканчивается до кнопки обмена.",...(f=(D=t.parameters)==null?void 0:D.docs)==null?void 0:f.description}}};const h=Object.freeze(Object.defineProperty({__proto__:null,CaseCardInset:t,Playground:n,Variants:u,__namedExportsOrder:_,default:A},Symbol.toStringTag,{value:"Module"}));export{t as C,h as D,n as P,u as V};
