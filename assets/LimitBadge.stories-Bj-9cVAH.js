import{r as D,j as e}from"./iframe-DuqTOznb.js";import{c as S}from"./cx-2dOUpm6k.js";import{B as k}from"./Badge-Dbn3uc4E.js";import{M as R}from"./brand-CPAyMEOK.js";const T="_limit_d0krl_5",M={limit:T},a=D.forwardRef(function({icon:u,className:w,children:E,...L},_){return e.jsx(k,{ref:_,...L,size:24,variant:"dark",iconLeft:u===void 0?e.jsx(R,{}):u,className:S(M.limit,w),children:E})});a.__docgenInfo={description:`Badge limit (Figma 837:2199): «M+» and an amount on the orange gradient, 24 px, over a photo. It is a Badge
(Size 24, Dark) with the gradient on top of the glass and a 16 px mark instead of the chevron.`,methods:[],displayName:"LimitBadge",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"Figma «Icons / Services»: the 16 px mark before the amount. M+ by default."}}};const{expect:o,within:s}=__STORYBOOK_MODULE_TEST__,O={title:"Components/Limit badge",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=837-2199"},layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{padding:24,background:"linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",minWidth:320},children:e.jsx(t,{})})],args:{children:"150 000 ⃀"},argTypes:{children:{control:"text"},icon:{control:!1}}},n={},r={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsx(a,{children:"5 000 ⃀"}),e.jsx(a,{children:"150 000 ⃀"}),e.jsx(a,{children:"1 500 000 ⃀"}),e.jsx(a,{onClick:()=>{},children:"Нажимается"})]})},i={name:"Кейсы / Лимит на фото",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[t=>e.jsx("div",{style:{position:"relative",width:361,maxWidth:"100%",height:200,borderRadius:16,overflow:"hidden",background:"linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)"},children:e.jsx("div",{style:{position:"absolute",left:12,top:12},children:e.jsx(t,{})})})],render:()=>e.jsx(a,{children:"150 000 ⃀"}),play:async({canvasElement:t})=>{await o(s(t).queryByRole("button")).toBeNull(),await o(s(t).getByText("150 000 ⃀")).toBeInTheDocument()}},A=["Playground","Variants","CaseOnCardPhoto"];var d,l,c,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"«M+» и сумма на оранжевом градиенте.",...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var g,f,h,B,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <LimitBadge>5 000 ⃀</LimitBadge>
      <LimitBadge>150 000 ⃀</LimitBadge>
      <LimitBadge>1 500 000 ⃀</LimitBadge>
      <LimitBadge onClick={() => undefined}>Нажимается</LimitBadge>
    </div>
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Amounts of different length: the pill grows with the text.",...(y=(B=r.parameters)==null?void 0:B.docs)==null?void 0:y.description}}};var x,b,v,C,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Кейсы / Лимит на фото',
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
  decorators: [Story => <div style={{
    position: 'relative',
    width: 361,
    maxWidth: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    background: 'linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)'
  }}>
        <div style={{
      position: 'absolute',
      left: 12,
      top: 12
    }}>
          <Story />
        </div>
      </div>],
  render: () => <LimitBadge>150 000 ⃀</LimitBadge>,
  play: async ({
    canvasElement
  }) => {
    // a static plate: no button role
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
    await expect(within(canvasElement).getByText('150 000 ⃀')).toBeInTheDocument();
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"Лимит M+ на фото карточки: плашка лежит в левом верхнем углу (Figma 837:2199, карточка оплаты).",...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};const V=Object.freeze(Object.defineProperty({__proto__:null,CaseOnCardPhoto:i,Playground:n,Variants:r,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{i as C,V as L,n as P,r as V};
