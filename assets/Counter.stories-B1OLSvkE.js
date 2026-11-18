import{r as d,j as e}from"./iframe-DuqTOznb.js";import{C as b}from"./Counter-6eoXZdLB.js";import{a as le}from"./PassengerSheet-CesMQt3S.js";import{B as ce}from"./Button-CKwNO4NU.js";import{B as de}from"./BottomSheet-DD4XR1Mk.js";const{expect:u,fn:pe,userEvent:c,within:oe}=__STORYBOOK_MODULE_TEST__,me={title:"Components/Counter",component:b,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=535-137"}},args:{defaultValue:1,min:0,max:9,step:1,disabled:!1,autoRepeat:!0,"aria-label":"Взрослые",onValueChange:pe()},argTypes:{value:{control:!1},max:{control:{type:"number"}}}},p={},m={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",justifyContent:"center"},children:[{label:"Default",props:{defaultValue:24,min:0,max:99}},{label:"Min",props:{defaultValue:0,min:0,max:99}},{label:"Max",props:{defaultValue:24,min:0,max:24}},{label:"Disabled",props:{defaultValue:24,disabled:!0}}].map(({label:s,props:t})=>e.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:8},children:[e.jsx(b,{"aria-label":s,...t}),e.jsx("figcaption",{className:"im-14-r",style:{color:"var(--color-text-tertiary)"},children:s})]},s))})},g={args:{defaultValue:98,min:0,max:120,"aria-label":"Количество"}},y={name:"Кейс: Пассажиры",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(le,{})},x={name:"Кейс: шторка «Участники»",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[t,a]=d.useState(!0),[i,n]=d.useState(1),[r,f]=d.useState(0),o=[{id:"adult",title:"Взрослый",caption:"Старше 18 лет",value:i,set:n},{id:"kid",title:"Ребёнок",caption:"До 18 лет",value:r,set:f}];return e.jsxs("div",{style:{padding:16},children:[e.jsxs(ce,{variant:"secondary",onClick:()=>a(!0),children:[i+r," участник"]}),e.jsx(de,{open:t,onOpenChange:a,header:"left",title:"Участники",primaryAction:{label:"Готово",onClick:()=>a(!1)},secondaryAction:{label:"Сбросить",onClick:()=>{n(0),f(0)}},children:e.jsx("ul",{style:{display:"grid",gap:8,margin:0,padding:"0 16px 16px",listStyle:"none"},children:o.map(l=>e.jsxs("li",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:56},children:[e.jsxs("div",{style:{display:"grid",gap:2},children:[e.jsx("span",{className:"im-16-m",children:l.title}),e.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:l.caption})]}),e.jsx(b,{"aria-label":l.title,decrementLabel:`Убрать: ${l.title.toLowerCase()}`,incrementLabel:`Добавить: ${l.title.toLowerCase()}`,value:l.value,onValueChange:l.set,min:0,max:9})]},l.id))})})]})}},v={name:"Кейс: участники в заказе",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[t,a]=d.useState(2),[i,n]=d.useState(1),r=t*6115+i*3115,f=[{title:"Взрослый",price:6115,value:t,set:a,min:1},{title:"Ребёнок",price:3115,value:i,set:n,min:0}];return e.jsxs("div",{style:{display:"grid",gap:8,width:361,maxWidth:"100%"},children:[e.jsx("span",{className:"im-18-s",children:"Участники"}),f.map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",minHeight:56},children:[e.jsxs("div",{style:{display:"grid",gap:2},children:[e.jsx("span",{className:"im-16-m",children:o.title}),e.jsxs("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:[o.price.toLocaleString("ru-RU")," ⃀"]})]}),e.jsx(b,{"aria-label":o.title,value:o.value,onValueChange:o.set,min:o.min,max:9})]},o.title)),e.jsxs("span",{className:"im-16-b",children:["Итого ",r.toLocaleString("ru-RU")," ⃀"]})]})}},B={name:"Тест: лимиты и клавиатура",args:{defaultValue:1,min:1,max:3,"aria-label":"Тест"},play:async({canvasElement:s,args:t})=>{const a=oe(s),i=a.getByRole("button",{name:"Уменьшить"}),n=a.getByRole("button",{name:"Увеличить"}),r=a.getByRole("group",{name:"Тест"});await u(r).toHaveAttribute("data-state","min"),await u(i).toHaveAttribute("aria-disabled","true"),await c.click(n),await c.click(n),await u(t.onValueChange).toHaveBeenLastCalledWith(3),await u(r).toHaveAttribute("data-state","max"),await u(n).toHaveAttribute("aria-disabled","true"),await u(n).toHaveFocus(),await c.click(n),await u(t.onValueChange).toHaveBeenCalledTimes(2),await c.keyboard("{ArrowDown}"),await u(t.onValueChange).toHaveBeenLastCalledWith(2),await c.keyboard("{Home}"),await u(t.onValueChange).toHaveBeenLastCalledWith(1),await c.keyboard("{End}"),await u(t.onValueChange).toHaveBeenLastCalledWith(3)}},h={name:"Тест: ref и атрибуты корня",parameters:{controls:{disable:!0}},render:function(t){const a=d.useRef(null),[i,n]=d.useState("no");return e.jsxs("div",{children:[e.jsx(b,{...t,ref:a,id:"guests","data-testid":"guests",style:{outline:"1px dashed transparent"},onValueChange:()=>{var r;return n(((r=a.current)==null?void 0:r.id)==="guests"?"yes":"wrong")}}),e.jsx("output",{"data-testid":"ref-ok",children:i})]})},play:async({canvasElement:s})=>{const t=oe(s),a=t.getByTestId("guests");await u(a).toHaveAttribute("role","group"),await u(a).toHaveStyle({outlineStyle:"dashed"}),await c.click(t.getByRole("button",{name:"Увеличить"})),await u(t.getByTestId("ref-ok")).toHaveTextContent("yes")}},ge=["Playground","States","MultiDigit","PassengerSheetCase","ParticipantsSheetCase","CheckoutParticipantsCase","LimitsTest","RootPropsTest"];var C,w,E,A,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(E=(w=p.parameters)==null?void 0:w.docs)==null?void 0:E.source},description:{story:"Tap, hold, use the arrow keys. Change min / max / step on the right.",...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.description}}};var S,j,D,H,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(j=m.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"The four Figma states of 535:137 side by side. Each one is live.",...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.description}}};var V,L,T,O,F;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: 98,
    min: 0,
    max: 120,
    'aria-label': 'Количество'
  }
}`,...(T=(L=g.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"9 → 10 and 99 → 100: only the digits that change roll, the width follows smoothly.",...(F=(O=g.parameters)==null?void 0:O.docs)==null?void 0:F.description}}};var P,N,I,W,_;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=(N=y.parameters)==null?void 0:N.docs)==null?void 0:I.source},description:{story:"The case from the reference video: the «Пассажиры» sheet with seat rules.",...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var M,K,U,$,z;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Кейс: шторка «Участники»',
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
      set: setAdults
    }, {
      id: 'kid',
      title: 'Ребёнок',
      caption: 'До 18 лет',
      value: kids,
      set: setKids
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
          setAdults(0);
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
                <Counter aria-label={r.title} decrementLabel={\`Убрать: \${r.title.toLowerCase()}\`} incrementLabel={\`Добавить: \${r.title.toLowerCase()}\`} value={r.value} onValueChange={r.set} min={0} max={9} />
              </li>)}
          </ul>
        </BottomSheet>
      </div>;
  }
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:`Шторка «Участники» на «Главной» (Figma «Выходные», «Поменять значение поиска»): «Взрослый — старше 18 лет» и
«Ребёнок — до 18 лет», внизу «Сбросить» и «Готово». Это поиск: взрослых может быть ноль, поэтому у «−» нижний предел 0.`,...(z=($=x.parameters)==null?void 0:$.docs)==null?void 0:z.description}}};var G,J,X,Y,q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Кейс: участники в заказе',
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
  render: function Render() {
    const [adults, setAdults] = useState(2);
    const [kids, setKids] = useState(1);
    const total = adults * 6115 + kids * 3115;
    const rows = [{
      title: 'Взрослый',
      price: 6115,
      value: adults,
      set: setAdults,
      min: 1
    }, {
      title: 'Ребёнок',
      price: 3115,
      value: kids,
      set: setKids,
      min: 0
    }];
    return <div style={{
      display: 'grid',
      gap: 8,
      width: 361,
      maxWidth: '100%'
    }}>
        <span className="im-18-s">Участники</span>
        {rows.map(r => <div key={r.title} style={{
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
                {r.price.toLocaleString('ru-RU')} ⃀
              </span>
            </div>
            <Counter aria-label={r.title} value={r.value} onValueChange={r.set} min={r.min} max={9} />
          </div>)}
        <span className="im-16-b">Итого {total.toLocaleString('ru-RU')} ⃀</span>
      </div>;
  }
}`,...(X=(J=v.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"«Детали заказа» (Figma «Оформление»): участники со своей ценой за человека; итог считается от счётчиков.",...(q=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var Q,Z,ee,te,ae;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Interaction test: limits, keyboard and focus. Runs in the «Interactions» panel.",...(ae=(te=B.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var ue,ne,se,re,ie;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source},description:{story:"Interaction test: `ref`, `id`, `data-*` and `style` reach the root; `onValueChange` is the callback name.",...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.description}}};const be=Object.freeze(Object.defineProperty({__proto__:null,CheckoutParticipantsCase:v,LimitsTest:B,MultiDigit:g,ParticipantsSheetCase:x,PassengerSheetCase:y,Playground:p,RootPropsTest:h,States:m,__namedExportsOrder:ge,default:me},Symbol.toStringTag,{value:"Module"}));export{be as C,p as P,m as S,x as a,v as b,y as c};
