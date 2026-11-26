import{j as e}from"./iframe-DyD5Yel4.js";import{F as K}from"./FullWidthFrame-BO26oEhV.js";import{H as U}from"./Phone-D_QzrYrn.js";import{D as u}from"./Disclaimer-BsSMNtxi.js";import{F as G}from"./FloatingContainer-DeRfZ3x8.js";import{B as J}from"./Button-grGIhY78.js";const{expect:c,fn:X,userEvent:v,waitFor:p,within:V}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Disclaimer",component:u,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=777-6091"},layout:"fullscreen"},decorators:[t=>e.jsx(K,{children:e.jsx(t,{})})],args:{variant:"checkbox",children:"Я подтверждаю, что ознакомлен(а) и соглашаюсь с правилами предоставления сервиса MTravel",onCheckedChange:X()},argTypes:{variant:{control:"inline-radio",options:["checkbox","center"]},children:{control:"text"}}},l=()=>e.jsxs(e.Fragment,{children:["Я подтверждаю, что ознакомлен(а) и соглашаюсь с ",e.jsx("a",{href:"#terms",children:"правилами предоставления сервиса MTravel"})]}),a={},r={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:16},children:[e.jsx(u,{children:e.jsx(l,{})}),e.jsx(u,{defaultChecked:!0,children:e.jsx(l,{})}),e.jsx(u,{disabled:!0,children:e.jsx(l,{})}),e.jsxs(u,{variant:"center",children:["Нажимая «Оплатить», вы соглашаетесь с ",e.jsx("a",{href:"#terms",children:"правилами предоставления сервиса MTravel"})]})]})},s={name:"Кейсы · Оформление заказа",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(G,{shadow:!1,layout:"column",homeIndicator:e.jsx(U,{}),children:[e.jsx(u,{children:e.jsx(l,{})}),e.jsx(J,{fullWidth:!0,size:52,children:"Оплатить 12 300 ⃀"})]})},o={name:"Тест: тап по тексту и по ссылке",parameters:{controls:{disable:!0}},render:t=>e.jsx(u,{...t,children:e.jsx(l,{})}),play:async({canvasElement:t,args:n})=>{const d=V(t),m=d.getByRole("checkbox");await c(m).not.toBeChecked(),await v.click(d.getByText(/Я подтверждаю/)),await p(()=>c(m).toBeChecked()),await c(n.onCheckedChange).toHaveBeenLastCalledWith(!0);const h=d.getByRole("link",{name:/правилами/});h.addEventListener("click",z=>z.preventDefault()),await v.click(h),await c(m).toBeChecked()}},i={name:"Тест: нажатие на ссылку",parameters:{controls:{disable:!0}},render:()=>e.jsxs(u,{variant:"center",children:["Нажимая «Оплатить», вы соглашаетесь с ",e.jsx("a",{href:"#terms",children:"правилами предоставления сервиса MTravel"})]}),play:async({canvasElement:t})=>{const n=V(t).getByRole("link",{name:/правилами/});n.dispatchEvent(new PointerEvent("pointerdown",{bubbles:!0,button:0})),await p(()=>c(n).toHaveAttribute("data-pressed")),n.dispatchEvent(new PointerEvent("pointerup",{bubbles:!0,button:0})),await p(()=>c(n).not.toHaveAttribute("data-pressed"))}},q=["Playground","Variants","CaseCheckout","BehaviourTest","LinkPressTest"];var x,b,B,k,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(B=(b=a.parameters)==null?void 0:b.docs)==null?void 0:B.source},description:{story:"Юридическая строка под главной кнопкой.",...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.description}}};var E,C,w,y,F;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <Disclaimer>
        <Terms />
      </Disclaimer>
      <Disclaimer defaultChecked>
        <Terms />
      </Disclaimer>
      <Disclaimer disabled>
        <Terms />
      </Disclaimer>
      <Disclaimer variant="center">
        Нажимая «Оплатить», вы соглашаетесь с <a href="#terms">правилами предоставления сервиса MTravel</a>
      </Disclaimer>
    </div>
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"The Figma set 777:6091: Property 1 = Default (checkbox) | Center disclamer.",...(F=(y=r.parameters)==null?void 0:y.docs)==null?void 0:F.description}}};var D,f,j,T,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Кейсы · Оформление заказа',
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
  render: () => <FloatingContainer shadow={false} layout="column" homeIndicator={<HomeIndicatorMock />}>
      <Disclaimer>
        <Terms />
      </Disclaimer>
      <Button fullWidth size={52}>
        Оплатить 12 300 ⃀
      </Button>
    </FloatingContainer>
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"Payment screen: the disclaimer sits over the main button of the bottom bar (Figma 1338:107637).",...(A=(T=s.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var P,S,_,M,R;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Тест: тап по тексту и по ссылке',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Disclaimer {...args}>
      <Terms />
    </Disclaimer>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const box = canvas.getByRole('checkbox');
    await expect(box).not.toBeChecked();
    await userEvent.click(canvas.getByText(/Я подтверждаю/));
    await waitFor(() => expect(box).toBeChecked());
    await expect(args.onCheckedChange).toHaveBeenLastCalledWith(true);
    const link = canvas.getByRole('link', {
      name: /правилами/
    });
    link.addEventListener('click', e => e.preventDefault());
    await userEvent.click(link);
    await expect(box).toBeChecked();
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source},description:{story:"Interaction test: a tap on the text toggles the checkbox, a tap on the link does not.",...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var H,O,L,W,I;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Тест: нажатие на ссылку',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Disclaimer variant="center">
      Нажимая «Оплатить», вы соглашаетесь с <a href="#terms">правилами предоставления сервиса MTravel</a>
    </Disclaimer>,
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByRole('link', {
      name: /правилами/
    });
    link.dispatchEvent(new PointerEvent('pointerdown', {
      bubbles: true,
      button: 0
    }));
    await waitFor(() => expect(link).toHaveAttribute('data-pressed'));
    link.dispatchEvent(new PointerEvent('pointerup', {
      bubbles: true,
      button: 0
    }));
    await waitFor(() => expect(link).not.toHaveAttribute('data-pressed'));
  }
}`,...(L=(O=i.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:"Pressing a link inside the text shows the pressed colour from pointer-down (not only `:active`, which iOS WebKit skips).",...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.description}}};const te=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:o,CaseCheckout:s,LinkPressTest:i,Playground:a,Variants:r,__namedExportsOrder:q,default:Y},Symbol.toStringTag,{value:"Module"}));export{s as C,te as D,a as P,r as V};
