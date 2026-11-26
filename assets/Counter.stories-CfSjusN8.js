import{r as x,j as e}from"./iframe-DyD5Yel4.js";import{C as v}from"./Counter-CavxruiM.js";import{B as q}from"./Button-grGIhY78.js";import{B as Q}from"./BottomSheet-lYDzhEd4.js";const{expect:n,fn:Z,userEvent:i,within:X}=__STORYBOOK_MODULE_TEST__,ee={title:"Components/Counter",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=535-137"}},args:{defaultValue:1,min:0,max:9,step:1,disabled:!1,autoRepeat:!0,"aria-label":"Взрослые",onValueChange:Z()},argTypes:{value:{control:!1},max:{control:{type:"number"}}}},d={},c={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center"},children:[{label:"Default",props:{defaultValue:24,min:0,max:99}},{label:"Min",props:{defaultValue:0,min:0,max:99}},{label:"Max",props:{defaultValue:24,min:0,max:24}},{label:"Disabled",props:{defaultValue:24,disabled:!0}}].map(({label:s,props:t})=>e.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:8},children:[e.jsx(v,{"aria-label":s,...t}),e.jsx("figcaption",{className:"im-14-r",style:{color:"var(--color-text-tertiary)"},children:s})]},s))})},p={args:{defaultValue:98,min:0,max:120,"aria-label":"Количество"}},m={name:"Кейс · Главная: участники",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[t,a]=x.useState(!0),[l,u]=x.useState(1),[o,b]=x.useState(0),Y=[{id:"adult",title:"Взрослый",caption:"Старше 18 лет",value:l,set:u,min:1},{id:"kid",title:"Ребёнок",caption:"До 18 лет",value:o,set:b,min:0}];return e.jsxs("div",{style:{padding:16},children:[e.jsxs(q,{variant:"secondary",onClick:()=>a(!0),children:[l+o," участник"]}),e.jsx(Q,{open:t,onOpenChange:a,header:"left",title:"Участники",primaryAction:{label:"Готово",onClick:()=>a(!1)},secondaryAction:{label:"Сбросить",onClick:()=>{u(1),b(0)}},children:e.jsx("ul",{style:{display:"grid",gap:8,margin:0,padding:"0 16px 16px",listStyle:"none"},children:Y.map(r=>e.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:56},children:[e.jsxs("div",{style:{display:"grid",gap:2},children:[e.jsx("span",{className:"im-16-m",children:r.title}),e.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:r.caption})]}),e.jsx(v,{"aria-label":r.title,decrementLabel:`Убрать: ${r.title.toLowerCase()}`,incrementLabel:`Добавить: ${r.title.toLowerCase()}`,value:r.value,onValueChange:r.set,min:r.min,max:9})]},r.id))})})]})}},g={name:"Тест: лимиты и клавиатура",args:{defaultValue:1,min:1,max:3,"aria-label":"Тест"},play:async({canvasElement:s,args:t})=>{const a=X(s),l=a.getByRole("button",{name:"Уменьшить"}),u=a.getByRole("button",{name:"Увеличить"}),o=a.getByRole("group",{name:"Тест"});await n(o).toHaveAttribute("data-state","min"),await n(l).toHaveAttribute("aria-disabled","true"),await i.click(u),await i.click(u),await n(t.onValueChange).toHaveBeenLastCalledWith(3),await n(o).toHaveAttribute("data-state","max"),await n(u).toHaveAttribute("aria-disabled","true"),await n(u).toHaveFocus(),await i.click(u),await n(t.onValueChange).toHaveBeenCalledTimes(2),await i.keyboard("{ArrowDown}"),await n(t.onValueChange).toHaveBeenLastCalledWith(2),await i.keyboard("{Home}"),await n(t.onValueChange).toHaveBeenLastCalledWith(1),await i.keyboard("{End}"),await n(t.onValueChange).toHaveBeenLastCalledWith(3)}},y={name:"Тест: ref и атрибуты корня",parameters:{controls:{disable:!0}},render:function(t){const a=x.useRef(null),[l,u]=x.useState("no");return e.jsxs("div",{children:[e.jsx(v,{...t,ref:a,id:"guests","data-testid":"guests",style:{outline:"1px dashed transparent"},onValueChange:()=>{var o;return u(((o=a.current)==null?void 0:o.id)==="guests"?"yes":"wrong")}}),e.jsx("output",{"data-testid":"ref-ok",children:l})]})},play:async({canvasElement:s})=>{const t=X(s),a=t.getByTestId("guests");await n(a).toHaveAttribute("role","group"),await n(a).toHaveStyle({outlineStyle:"dashed"}),await i.click(t.getByRole("button",{name:"Увеличить"})),await n(t.getByTestId("ref-ok")).toHaveTextContent("yes")}},te=["Playground","States","MultiDigit","ParticipantsSheetCase","LimitsTest","RootPropsTest"];var f,h,B,w,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(B=(h=d.parameters)==null?void 0:h.docs)==null?void 0:B.source},description:{story:"Tap, hold, use the arrow keys. Change min / max / step on the right.",...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var E,k,A,S,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"The four Figma states of 535:137 side by side. Each one is live.",...(H=(S=c.parameters)==null?void 0:S.docs)==null?void 0:H.description}}};var V,j,D,R,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 98,
    min: 0,
    max: 120,
    'aria-label': 'Количество'
  }
}`,...(D=(j=p.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"9 → 10 and 99 → 100: only the digits that change roll, the width follows smoothly.",...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.description}}};var T,O,_,I,W;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Кейс · Главная: участники',
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
  render: function Render() {
    const [open, setOpen] = useState(true);
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    const rows = [{
      id: 'adult',
      title: 'Взрослый',
      caption: 'Старше 18 лет',
      value: adults,
      set: setAdults,
      min: 1
    }, {
      id: 'kid',
      title: 'Ребёнок',
      caption: 'До 18 лет',
      value: kids,
      set: setKids,
      min: 0
    }];
    return <div style={{
      padding: 16
    }}>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          {adults + kids} участник
        </Button>
        <BottomSheet open={open} onOpenChange={setOpen} header="left" title="Участники" primaryAction={{
        label: 'Готово',
        onClick: () => setOpen(false)
      }} secondaryAction={{
        label: 'Сбросить',
        onClick: () => {
          setAdults(1);
          setKids(0);
        }
      }}>
          <ul style={{
          display: 'grid',
          gap: 8,
          margin: 0,
          padding: '0 16px 16px',
          listStyle: 'none'
        }}>
            {rows.map(r => <li key={r.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 56
          }}>
                <div style={{
              display: 'grid',
              gap: 2
            }}>
                  <span className="im-16-m">{r.title}</span>
                  <span className="im-14-r" style={{
                color: 'var(--color-text-secondary)'
              }}>
                    {r.caption}
                  </span>
                </div>
                <Counter aria-label={r.title} decrementLabel={\`Убрать: \${r.title.toLowerCase()}\`} incrementLabel={\`Добавить: \${r.title.toLowerCase()}\`} value={r.value} onValueChange={r.set} min={r.min} max={9} />
              </li>)}
          </ul>
        </BottomSheet>
      </div>;
  }
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source},description:{story:`Figma «Главная» → «Редактирование кол-во участников» (2254:34769); та же шторка на «Оформлении» (1338:110029).
«Взрослый — старше 18 лет» (от 1), «Ребёнок — до 18 лет» (от 0), внизу «Сбросить» и «Готово».`,...(W=(I=m.parameters)==null?void 0:I.docs)==null?void 0:W.description}}};var M,P,F,K,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    await expect(args.onValueChange).toHaveBeenLastCalledWith(3);
    await expect(group).toHaveAttribute('data-state', 'max');
    await expect(plus).toHaveAttribute('aria-disabled', 'true');
    // At the limit the button keeps focus, so a keyboard user is not thrown to <body>.
    await expect(plus).toHaveFocus();
    await userEvent.click(plus);
    await expect(args.onValueChange).toHaveBeenCalledTimes(2);
    await userEvent.keyboard('{ArrowDown}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(2);
    await userEvent.keyboard('{Home}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(1);
    await userEvent.keyboard('{End}');
    await expect(args.onValueChange).toHaveBeenLastCalledWith(3);
  }
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source},description:{story:"Interaction test: limits, keyboard and focus. Runs in the «Interactions» panel.",...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var $,U,z,G,J;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Тест: ref и атрибуты корня',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render(args) {
    const ref = useRef<HTMLDivElement>(null);
    const [ok, setOk] = useState('no');
    return <div>
        <Counter {...args} ref={ref} id="guests" data-testid="guests" style={{
        outline: '1px dashed transparent'
      }} onValueChange={() => setOk(ref.current?.id === 'guests' ? 'yes' : 'wrong')} />
        <output data-testid="ref-ok">{ok}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByTestId('guests');
    await expect(group).toHaveAttribute('role', 'group');
    await expect(group).toHaveStyle({
      outlineStyle: 'dashed'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Увеличить'
    }));
    await expect(canvas.getByTestId('ref-ok')).toHaveTextContent('yes');
  }
}`,...(z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:z.source},description:{story:"Interaction test: `ref`, `id`, `data-*` and `style` reach the root; `onValueChange` is the callback name.",...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};const re=Object.freeze(Object.defineProperty({__proto__:null,LimitsTest:g,MultiDigit:p,ParticipantsSheetCase:m,Playground:d,RootPropsTest:y,States:c,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{re as C,d as P,c as S,m as a};
