import{r as D,j as u}from"./iframe-DuqTOznb.js";import{S as r}from"./Select-4gWL4kzH.js";import{a as p4}from"./general-DYSfllt2.js";import{C as x}from"./time-CsMT4GVj.js";import{a as B}from"./people-s6FNqSUd.js";import{B as m4}from"./BottomSheet-DD4XR1Mk.js";const{expect:t,fn:b4,userEvent:g,within:E}=__STORYBOOK_MODULE_TEST__,v4={title:"Components/Select",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=595-338"}},decorators:[e=>u.jsx("div",{style:{width:328,maxWidth:"100%"},children:u.jsx(e,{})})],args:{label:"Пассажиры",variant:"default",showLabel:!1,placeholder:"Выберите",value:"",open:!1,disabled:!1,disclosure:!1,error:"",hint:"",onClick:b4()},argTypes:{iconRight:{control:"inline-radio",options:["нет","users"],mapping:{нет:void 0,users:u.jsx(B,{})}},iconLeft:{control:"inline-radio",options:["нет","calendar"],mapping:{нет:void 0,calendar:u.jsx(x,{})}},variant:{control:"inline-radio",options:["default","plain"]},value:{control:"text"},error:{control:"text"},hint:{control:"text"},forcePressed:{control:!1}}},m={args:{iconRight:"users"}},o={name:"Все состояния",parameters:{controls:{disable:!0},layout:"padded"},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 280px), 328px))",justifyContent:"center"},children:[{name:"Placeholder",props:{}},{name:"Filled",props:{value:"Значение"}},{name:"Opened",props:{value:"Значение",open:!0}},{name:"Error",props:{value:"Значение",error:"Проверьте, что поле заполнено верно"}},{name:"Disabled",props:{value:"Значение",disabled:!0}},{name:"Variant plain (на карточке, без заливки)",props:{value:"Значение",variant:"plain"}},{name:"Pressed",props:{value:"Значение",forcePressed:!0}},{name:"С подписью (Label)",props:{value:"Значение",showLabel:!0}},{name:"Placeholder с подписью",props:{showLabel:!0}},{name:"Disabled с подписью",props:{value:"Значение",showLabel:!0,disabled:!0}},{name:"С подсказкой (Show hint)",props:{value:"Значение",hint:"Подсказка"}},{name:"С шевроном (Show disclosure)",props:{value:"Значение",disclosure:!0}},{name:"Открыт, с шевроном",props:{value:"Значение",disclosure:!0,open:!0}},{name:"С иконкой слева (Show left icon)",props:{value:"Значение",iconLeft:u.jsx(x,{})}},{name:"Disabled с иконкой слева",props:{value:"Значение",iconLeft:u.jsx(x,{}),disabled:!0}}].map(({name:e,props:a})=>u.jsxs("div",{style:{display:"grid",gap:6},children:[u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),u.jsx(r,{label:"Пассажиры",iconRight:u.jsx(B,{}),...a})]},e))})},l={name:"Длинный текст",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsxs("div",{style:{display:"grid",gap:20,width:328,maxWidth:"100%",margin:"0 auto"},children:[u.jsx(r,{label:"Пассажиры",value:"2 взрослых, 3 ребёнка от 2 до 11 лет, 1 младенец без места, эконом",iconRight:u.jsx(B,{})}),u.jsx(r,{label:"Класс обслуживания",value:"Бизнес-класс с доступом в зал ожидания и приоритетной посадкой",disclosure:!0})]})},h4=["Эконом","Комфорт","Бизнес","Первый класс"],s={name:"С выбором в шторке",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[a,n]=D.useState(!1),[y,d4]=D.useState("");return u.jsxs(u.Fragment,{children:[u.jsx(r,{label:"Класс обслуживания",value:y,open:a,disclosure:!0,onClick:()=>n(!0)}),u.jsx(m4,{open:a,onOpenChange:n,header:"left",title:"Класс обслуживания",children:u.jsx("div",{role:"listbox","aria-label":"Класс обслуживания",style:{display:"grid",padding:"0 8px 16px"},children:h4.map(p=>u.jsx("button",{type:"button",role:"option","aria-selected":p===y,className:"im-16-m",onClick:()=>{d4(p),n(!1)},style:{height:52,padding:"0 12px",border:0,borderRadius:"var(--radius-md)",background:p===y?"var(--control-bg-default)":"transparent",color:"var(--color-text-primary)",textAlign:"left",font:"inherit"},children:p},p))})})]})}},i={name:"Кейс: форма поиска на главной",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:function(){const[a,n]=D.useState(!1);return u.jsxs("div",{style:{display:"grid",gap:8,width:361,maxWidth:"100%"},children:[u.jsx(r,{label:"Куда",placeholder:"Куда отправимся?",value:a?"Бишкек, Кыргызстан":"",iconRight:u.jsx(p4,{size:20}),onClick:()=>n(!0)}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[u.jsx(r,{label:"Когда",placeholder:"Когда",value:a?"вт, 30 окт":"",iconRight:u.jsx(x,{size:20}),onClick:()=>n(!0)}),u.jsx(r,{label:"Участники",placeholder:"Выберите",value:"1 участник",iconRight:u.jsx(B,{})})]})]})}},c={name:"Тест: имя, нажатие, клавиатура",args:{label:"Пассажиры",value:"2 взрослых",open:!1},play:async({canvasElement:e,args:a})=>{const n=E(e).getByRole("button",{name:/Пассажиры.*2 взрослых/});await t(n).toHaveAttribute("aria-haspopup","dialog"),await t(n).toHaveAttribute("aria-expanded","false"),await g.click(n),await t(a.onClick).toHaveBeenCalledTimes(1),n.focus(),await g.keyboard("{Enter}"),await g.keyboard(" "),await t(a.onClick).toHaveBeenCalledTimes(3)}},b={name:"Тест: шторка открывается и закрывается",parameters:{controls:{disable:!0}},render:s.render,play:async({canvasElement:e})=>{const n=E(e).getByRole("button",{name:/Класс обслуживания/});await t(n).toHaveAttribute("aria-expanded","false"),await g.click(n),await t(n).toHaveAttribute("aria-expanded","true")}},v={name:"Тест: ошибка связана с полем",args:{label:"Дата",error:"Выберите дату"},play:async({canvasElement:e})=>{const a=E(e).getByRole("button",{name:/Дата/});await t(a).toHaveAttribute("aria-invalid","true"),await t(a).toHaveAccessibleDescription("Выберите дату")}},h={name:"Тест: недоступное поле не нажимается",args:{label:"Дата",value:"14 ноя",disabled:!0},play:async({canvasElement:e,args:a})=>{const n=E(e).getByRole("button",{name:/Дата/});await t(n).toBeDisabled(),await g.click(n),await t(a.onClick).not.toHaveBeenCalled()}},d={name:"Тест: style на корне",args:{label:"Дата",className:"custom",style:{maxWidth:300}},play:async({canvasElement:e})=>{const a=E(e).getByRole("button",{name:/Дата/}),n=a.closest(".custom");await t(n.style.maxWidth).toBe("300px"),await t(a.style.maxWidth).toBe("")}},g4=["Playground","States","LongText","WithSheet","HomeSearchCase","BehaviourTest","OpenSheetTest","ErrorTest","DisabledTest","RootStyleTest"];var A,f,w;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    iconRight: 'users' as never
  }
}`,...(w=(f=m.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,C,F,R,j;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 328px))',
    justifyContent: 'center'
  }}>
      {[{
      name: 'Placeholder',
      props: {}
    }, {
      name: 'Filled',
      props: {
        value: 'Значение'
      }
    }, {
      name: 'Opened',
      props: {
        value: 'Значение',
        open: true
      }
    }, {
      name: 'Error',
      props: {
        value: 'Значение',
        error: 'Проверьте, что поле заполнено верно'
      }
    }, {
      name: 'Disabled',
      props: {
        value: 'Значение',
        disabled: true
      }
    }, {
      name: 'Variant plain (на карточке, без заливки)',
      props: {
        value: 'Значение',
        variant: 'plain' as const
      }
    }, {
      name: 'Pressed',
      props: {
        value: 'Значение',
        forcePressed: true
      }
    }, {
      name: 'С подписью (Label)',
      props: {
        value: 'Значение',
        showLabel: true
      }
    }, {
      name: 'Placeholder с подписью',
      props: {
        showLabel: true
      }
    }, {
      name: 'Disabled с подписью',
      props: {
        value: 'Значение',
        showLabel: true,
        disabled: true
      }
    }, {
      name: 'С подсказкой (Show hint)',
      props: {
        value: 'Значение',
        hint: 'Подсказка'
      }
    }, {
      name: 'С шевроном (Show disclosure)',
      props: {
        value: 'Значение',
        disclosure: true
      }
    }, {
      name: 'Открыт, с шевроном',
      props: {
        value: 'Значение',
        disclosure: true,
        open: true
      }
    }, {
      name: 'С иконкой слева (Show left icon)',
      props: {
        value: 'Значение',
        iconLeft: <CalendarIcon />
      }
    }, {
      name: 'Disabled с иконкой слева',
      props: {
        value: 'Значение',
        iconLeft: <CalendarIcon />,
        disabled: true
      }
    }].map(({
      name,
      props
    }) => <div key={name} style={{
      display: 'grid',
      gap: 6
    }}>
          <span className="im-12-r" style={{
        color: 'var(--color-text-tertiary)'
      }}>
            {name}
          </span>
          <Select label="Пассажиры" iconRight={<UsersIcon />} {...props} />
        </div>)}
    </div>
}`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source},description:{story:"Figma 595:338 states. Opened turns the chevron up (Figma swaps the icon; here it rotates).",...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};var k,T,H,L,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Длинный текст',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gap: 20,
    width: 328,
    maxWidth: '100%',
    margin: '0 auto'
  }}>
      <Select label="Пассажиры" value="2 взрослых, 3 ребёнка от 2 до 11 лет, 1 младенец без места, эконом" iconRight={<UsersIcon />} />
      <Select label="Класс обслуживания" value="Бизнес-класс с доступом в зал ожидания и приоритетной посадкой" disclosure />
    </div>
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source},description:{story:"A long value ends with «…»; the right icon and the chevron keep their place.",...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var W,P,_,I,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'С выбором в шторке',
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
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>('');
    return <>
        <Select label="Класс обслуживания" value={value} open={open} disclosure onClick={() => setOpen(true)} />
        <BottomSheet open={open} onOpenChange={setOpen} header="left" title="Класс обслуживания">
          <div role="listbox" aria-label="Класс обслуживания" style={{
          display: 'grid',
          padding: '0 8px 16px'
        }}>
            {CLASSES.map(c => <button key={c} type="button" role="option" aria-selected={c === value} className="im-16-m" onClick={() => {
            setValue(c);
            setOpen(false);
          }} style={{
            height: 52,
            padding: '0 12px',
            border: 0,
            borderRadius: 'var(--radius-md)',
            background: c === value ? 'var(--control-bg-default)' : 'transparent',
            color: 'var(--color-text-primary)',
            textAlign: 'left',
            font: 'inherit'
          }}>
                {c}
              </button>)}
          </div>
        </BottomSheet>
      </>;
  }
}`,...(_=(P=s.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:"The usual pairing: Select opens a BottomSheet with the choice; while the sheet is open the field is «Opened».",...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var U,V,z,M,K;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Кейс: форма поиска на главной',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  decorators: [Story => <Story />],
  render: function Render() {
    const [filled, setFilled] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 8,
      width: 361,
      maxWidth: '100%'
    }}>
        <Select label="Куда" placeholder="Куда отправимся?" value={filled ? 'Бишкек, Кыргызстан' : ''} iconRight={<SearchIcon size={20} />} onClick={() => setFilled(true)} />
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }}>
          <Select label="Когда" placeholder="Когда" value={filled ? 'вт, 30 окт' : ''} iconRight={<CalendarIcon size={20} />} onClick={() => setFilled(true)} />
          <Select label="Участники" placeholder="Выберите" value="1 участник" iconRight={<UsersIcon />} />
        </div>
      </div>;
  }
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:`Форма поиска на «Главной» (Figma «Выходные», «Ничего не выбрано» → «Скролл»): «Куда» на всю ширину, «Когда» и
«Участники» рядом. Иконка справа у каждого поля — своя. Нажатие открывает шторку или календарь.`,...(K=(M=i.parameters)==null?void 0:M.docs)==null?void 0:K.description}}};var G,J,X,Y,q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Тест: имя, нажатие, клавиатура',
  args: {
    label: 'Пассажиры',
    value: '2 взрослых',
    open: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Пассажиры.*2 взрослых/
    });
    await expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  }
}`,...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Interaction test: name = label + value, a tap calls onClick, Enter and Space too, aria-expanded follows `open`.",...(q=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:q.description}}};var Q,Z,$;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Тест: шторка открывается и закрывается',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: WithSheet.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: /Класс обслуживания/
    });
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var u4,e4,n4;v.parameters={...v.parameters,docs:{...(u4=v.parameters)==null?void 0:u4.docs,source:{originalSource:`{
  name: 'Тест: ошибка связана с полем',
  args: {
    label: 'Дата',
    error: 'Выберите дату'
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Дата/
    });
    await expect(button).toHaveAttribute('aria-invalid', 'true');
    await expect(button).toHaveAccessibleDescription('Выберите дату');
  }
}`,...(n4=(e4=v.parameters)==null?void 0:e4.docs)==null?void 0:n4.source}}};var a4,t4,r4;h.parameters={...h.parameters,docs:{...(a4=h.parameters)==null?void 0:a4.docs,source:{originalSource:`{
  name: 'Тест: недоступное поле не нажимается',
  args: {
    label: 'Дата',
    value: '14 ноя',
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Дата/
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(r4=(t4=h.parameters)==null?void 0:t4.docs)==null?void 0:r4.source}}};var s4,o4,l4,i4,c4;d.parameters={...d.parameters,docs:{...(s4=d.parameters)==null?void 0:s4.docs,source:{originalSource:`{
  name: 'Тест: style на корне',
  args: {
    label: 'Дата',
    className: 'custom',
    style: {
      maxWidth: 300
    }
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Дата/
    });
    const root = button.closest('.custom') as HTMLElement;
    await expect(root.style.maxWidth).toBe('300px');
    await expect(button.style.maxWidth).toBe('');
  }
}`,...(l4=(o4=d.parameters)==null?void 0:o4.docs)==null?void 0:l4.source},description:{story:"`style` and `className` go to the root, the button keeps its own.",...(c4=(i4=d.parameters)==null?void 0:i4.docs)==null?void 0:c4.description}}};const f4=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:c,DisabledTest:h,ErrorTest:v,HomeSearchCase:i,LongText:l,OpenSheetTest:b,Playground:m,RootStyleTest:d,States:o,WithSheet:s,__namedExportsOrder:g4,default:v4},Symbol.toStringTag,{value:"Module"}));export{i as H,l as L,m as P,f4 as S,s as W,o as a};
