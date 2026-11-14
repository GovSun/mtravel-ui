import{j as c}from"./iframe-Dr5ib33t.js";import{C as P,a as F}from"./PassengerSheet-BULJYyGi.js";const{expect:e,fn:I,userEvent:t,within:K}=__STORYBOOK_MODULE_TEST__,N={title:"Components/Counter",component:P,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=535-137"}},args:{defaultValue:1,min:0,max:9,step:1,disabled:!1,autoRepeat:!0,"aria-label":"Взрослые",onChange:I()},argTypes:{value:{control:!1},max:{control:{type:"number"}}}},n={},s={parameters:{controls:{disable:!0}},render:()=>c.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center"},children:[{label:"Default",props:{defaultValue:24,min:0,max:99}},{label:"Min",props:{defaultValue:0,min:0,max:99}},{label:"Max",props:{defaultValue:24,min:0,max:24}},{label:"Disabled",props:{defaultValue:24,disabled:!0}}].map(({label:u,props:a})=>c.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:8},children:[c.jsx(P,{"aria-label":u,...a}),c.jsx("figcaption",{className:"im-14-r",style:{color:"var(--color-text-tertiary)"},children:u})]},u))})},r={args:{defaultValue:98,min:0,max:120,"aria-label":"Количество"}},o={name:"Кейс: Пассажиры",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>c.jsx(F,{})},i={name:"Тест: лимиты и клавиатура",args:{defaultValue:1,min:1,max:3,"aria-label":"Тест"},play:async({canvasElement:u,args:a})=>{const d=K(u),O=d.getByRole("button",{name:"Уменьшить"}),l=d.getByRole("button",{name:"Увеличить"}),p=d.getByRole("group",{name:"Тест"});await e(p).toHaveAttribute("data-state","min"),await e(O).toHaveAttribute("aria-disabled","true"),await t.click(l),await t.click(l),await e(a.onChange).toHaveBeenLastCalledWith(3),await e(p).toHaveAttribute("data-state","max"),await e(l).toHaveAttribute("aria-disabled","true"),await e(l).toHaveFocus(),await t.click(l),await e(a.onChange).toHaveBeenCalledTimes(2),await t.keyboard("{ArrowDown}"),await e(a.onChange).toHaveBeenLastCalledWith(2),await t.keyboard("{Home}"),await e(a.onChange).toHaveBeenLastCalledWith(1),await t.keyboard("{End}"),await e(a.onChange).toHaveBeenLastCalledWith(3)}},U=["Playground","States","MultiDigit","PassengerSheetCase","LimitsTest"];var m,g,b,y,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"Tap, hold, use the arrow keys. Change min / max / step on the right.",...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var f,w,v,x,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      {[{
      label: 'Default',
      props: {
        defaultValue: 24,
        min: 0,
        max: 99
      }
    }, {
      label: 'Min',
      props: {
        defaultValue: 0,
        min: 0,
        max: 99
      }
    }, {
      label: 'Max',
      props: {
        defaultValue: 24,
        min: 0,
        max: 24
      }
    }, {
      label: 'Disabled',
      props: {
        defaultValue: 24,
        disabled: true
      }
    }].map(({
      label,
      props
    }) => <figure key={label} style={{
      margin: 0,
      display: 'grid',
      justifyItems: 'center',
      gap: 8
    }}>
          <Counter aria-label={label} {...props} />
          <figcaption className="im-14-r" style={{
        color: 'var(--color-text-tertiary)'
      }}>
            {label}
          </figcaption>
        </figure>)}
    </div>
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"The four Figma states of 535:137 side by side. Each one is live.",...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var B,H,k,E,S;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 98,
    min: 0,
    max: 120,
    'aria-label': 'Количество'
  }
}`,...(k=(H=r.parameters)==null?void 0:H.docs)==null?void 0:k.source},description:{story:"9 → 10 and 99 → 100: only the digits that change roll, the width follows smoothly.",...(S=(E=r.parameters)==null?void 0:E.docs)==null?void 0:S.description}}};var A,j,V,R,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Кейс: Пассажиры',
  parameters: {
    layout: 'fullscreen',
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
  render: () => <PassengerSheet />
}`,...(V=(j=o.parameters)==null?void 0:j.docs)==null?void 0:V.source},description:{story:"The case from the reference video: the «Пассажиры» sheet with seat rules.",...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var _,D,L,W,M;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Тест: лимиты и клавиатура',
  args: {
    defaultValue: 1,
    min: 1,
    max: 3,
    'aria-label': 'Тест'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const minus = canvas.getByRole('button', {
      name: 'Уменьшить'
    });
    const plus = canvas.getByRole('button', {
      name: 'Увеличить'
    });
    const group = canvas.getByRole('group', {
      name: 'Тест'
    });
    await expect(group).toHaveAttribute('data-state', 'min');
    await expect(minus).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(plus);
    await userEvent.click(plus);
    await expect(args.onChange).toHaveBeenLastCalledWith(3);
    await expect(group).toHaveAttribute('data-state', 'max');
    await expect(plus).toHaveAttribute('aria-disabled', 'true');
    // At the limit the button keeps focus, so a keyboard user is not thrown to <body>.
    await expect(plus).toHaveFocus();
    await userEvent.click(plus);
    await expect(args.onChange).toHaveBeenCalledTimes(2);
    await userEvent.keyboard('{ArrowDown}');
    await expect(args.onChange).toHaveBeenLastCalledWith(2);
    await userEvent.keyboard('{Home}');
    await expect(args.onChange).toHaveBeenLastCalledWith(1);
    await userEvent.keyboard('{End}');
    await expect(args.onChange).toHaveBeenLastCalledWith(3);
  }
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Interaction test: limits, keyboard and focus. Runs in the «Interactions» panel.",...(M=(W=i.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};const J=Object.freeze(Object.defineProperty({__proto__:null,LimitsTest:i,MultiDigit:r,PassengerSheetCase:o,Playground:n,States:s,__namedExportsOrder:U,default:N},Symbol.toStringTag,{value:"Module"}));export{J as C,n as P,s as S};
