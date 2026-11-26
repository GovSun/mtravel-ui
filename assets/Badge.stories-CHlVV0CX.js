import{j as e}from"./iframe-DyD5Yel4.js";import{B as r}from"./Badge-CdXEkR6u.js";const{expect:p,fn:U,userEvent:m,within:G}=__STORYBOOK_MODULE_TEST__,J={title:"Components/Badge",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=461-4494"},layout:"fullscreen"},args:{children:"1 из 4",size:24,variant:"light",iconLeft:!1,iconRight:!1},argTypes:{size:{control:"inline-radio",options:[24,28]},variant:{control:"inline-radio",options:["dark","light"]},iconLeft:{control:"boolean"},iconRight:{control:"boolean"},children:{control:"text"},forcePressed:{control:!1}}},N="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)";function K({children:a,style:n}){return e.jsx("div",{style:{background:N,minWidth:320,...n},children:a})}const d=a=>e.jsx(K,{style:{padding:24},children:e.jsx(a,{})}),X=({children:a})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-inverse-constant-primary)"},children:a}),t={decorators:[d]},s={name:"Варианты",parameters:{controls:{disable:!0}},decorators:[d],render:()=>e.jsx("div",{style:{display:"grid",gap:16},children:[24,28].flatMap(a=>["dark","light"].map(n=>e.jsx(Y,{size:a,bg:n},`${a}${n}`)))})};function Y({size:a,bg:n}){return e.jsxs("div",{style:{display:"grid",gap:6},children:[e.jsx(X,{children:`Size ${a} · Background ${n==="dark"?"Dark":"Light"}`}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:[e.jsx(r,{size:a,variant:n,children:"08:45"}),e.jsx(r,{size:a,variant:n,iconLeft:!0,children:"08:45"}),e.jsx(r,{size:a,variant:n,iconRight:!0,children:"08:45"}),e.jsx(r,{size:a,variant:n,iconLeft:!0,iconRight:!0,children:"08:45"})]})]})}const o={name:"Нажимается",parameters:{controls:{disable:!0}},decorators:[d],render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(r,{variant:"dark",iconRight:!0,onClick:()=>{},children:"Все фото"}),e.jsx(r,{variant:"dark",iconRight:!0,forcePressed:!0,onClick:()=>{},children:"Все фото"})]})},i={name:"Кейс: счётчик фото на обложке",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[a=>e.jsx(K,{style:{position:"relative",width:393,height:320},children:e.jsx("div",{style:{position:"absolute",left:16,bottom:16},children:e.jsx(a,{})})})],render:()=>e.jsx(r,{variant:"light",children:"1 из 4"})},u={name:"Кейс: дата и время",parameters:{controls:{disable:!0}},decorators:[d],render:()=>e.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"start"},children:[e.jsx(r,{variant:"dark",children:"вс, 6 июл, 19:00"}),e.jsx(r,{variant:"light",children:"вс, 6 июл, 18:00"})]})},c={name:"Тест: кнопка и обычная плашка",parameters:{controls:{disable:!0}},decorators:[d],args:{onClick:U(),children:"Все фото",iconRight:!0},play:async({canvasElement:a,args:n})=>{const l=G(a).getByRole("button",{name:"Все фото"});await m.click(l),await p(n.onClick).toHaveBeenCalledTimes(1),l.focus(),await m.keyboard("{Enter}"),await p(n.onClick).toHaveBeenCalledTimes(2)}},q=["Playground","Variants","Pressable","CaseCoverCounter","CaseDate","ClickTest"];var g,h,v,y,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [onPhoto]
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Плашка из стекла для фото. Размер, фон и иконки в панели Controls.",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var x,b,B,k,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [onPhoto],
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {([24, 28] as const).flatMap(size => (['dark', 'light'] as const).map(bg => <Row key={\`\${size}\${bg}\`} size={size} bg={bg} />))}
    </div>
}`,...(B=(b=s.parameters)==null?void 0:b.docs)==null?void 0:B.source},description:{story:"The Figma matrix 461:4494: Size 24 | 28 × Background Dark | Light × Left icon × Right icon.",...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.description}}};var E,j,w,P,R;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Нажимается',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [onPhoto],
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <Badge variant="dark" iconRight onClick={() => undefined}>Все фото</Badge>
      <Badge variant="dark" iconRight forcePressed onClick={() => undefined}>Все фото</Badge>
    </div>
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"With a handler the plate is a button: it shrinks under the finger.",...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var D,S,T,A,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Кейс: счётчик фото на обложке',
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
  decorators: [Story => <Photo style={{
    position: 'relative',
    width: 393,
    height: 320
  }}>
        <div style={{
      position: 'absolute',
      left: 16,
      bottom: 16
    }}>
          <Story />
        </div>
      </Photo>],
  render: () => <Badge variant="light">1 из 4</Badge>
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"Counter of the cover gallery: «1 из 4» in light glass (Figma 230:17164).",...(F=(A=i.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var _,O,L,$,H;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Кейс: дата и время',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [onPhoto],
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      <Badge variant="dark">вс, 6 июл, 19:00</Badge>
      <Badge variant="light">вс, 6 июл, 18:00</Badge>
    </div>
}`,...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:"Date and time of the slot over the photo: dark glass (Figma 2022:6361) and light glass in the order form (Figma 1648:179509).",...(H=($=u.parameters)==null?void 0:$.docs)==null?void 0:H.description}}};var M,z,V,W,I;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Тест: кнопка и обычная плашка',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [onPhoto],
  args: {
    onClick: fn(),
    children: 'Все фото',
    iconRight: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button', {
      name: 'Все фото'
    });
    await userEvent.click(btn);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    btn.focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source},description:{story:"Interaction test: a static badge is a span, with onClick it is a button that reacts to a tap and Enter.",...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};const ae=Object.freeze(Object.defineProperty({__proto__:null,CaseCoverCounter:i,CaseDate:u,ClickTest:c,Playground:t,Pressable:o,Variants:s,__namedExportsOrder:q,default:J},Symbol.toStringTag,{value:"Module"}));export{ae as B,i as C,t as P,s as V,o as a,u as b};
