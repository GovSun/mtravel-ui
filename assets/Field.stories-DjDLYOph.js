import{j as u,r as x}from"./iframe-DuqTOznb.js";import{F as t}from"./Field-DwgBjXeD.js";import{C as g}from"./time-CsMT4GVj.js";import{S as w4}from"./Select-4gWL4kzH.js";import{B as S4}from"./Button-CKwNO4NU.js";const{expect:n,fn:j4,userEvent:v,waitFor:V4,within:F}=__STORYBOOK_MODULE_TEST__,T4={title:"Components/Field",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=207-173"}},decorators:[e=>u.jsx("div",{style:{width:328,maxWidth:"100%"},children:u.jsx(e,{})})],args:{label:"Заголовок",defaultValue:"",hint:"",error:"",currency:"",disabled:!1,clearable:!0,onValueChange:j4()},argTypes:{iconLeft:{control:"inline-radio",options:["нет","calendar"],mapping:{нет:void 0,calendar:u.jsx(g,{})}},error:{control:"text"},hint:{control:"text"},currency:{control:"text"},value:{control:!1},focused:{control:!1}}},B=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),b=({children:e})=>u.jsx("div",{style:{display:"grid",gap:20,width:328,maxWidth:"100%",margin:"0 auto"},children:e}),s={args:{iconLeft:"calendar"}},l={name:"Все состояния",parameters:{controls:{disable:!0},layout:"padded"},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 280px), 328px))",justifyContent:"center"},children:[{name:"Placeholder",props:{}},{name:"Focused",props:{focused:!0,defaultValue:"Значение"}},{name:"Filled",props:{defaultValue:"Значение"}},{name:"Error",props:{defaultValue:"Значение",error:"Проверьте, что поле заполнено верно"}},{name:"Disabled",props:{defaultValue:"Значение",disabled:!0}},{name:"Подсказка",props:{hint:"Как в паспорте, латиницей"}},{name:"Сумма с валютой",props:{label:"Сумма",defaultValue:"12 400",currency:"с"}}].map(({name:e,props:a})=>u.jsxs("div",{style:{display:"grid",gap:6},children:[u.jsx(B,{children:e}),u.jsx(t,{label:"Заголовок",iconLeft:u.jsx(g,{}),...a})]},e))})},i={name:"Длинный текст",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsxs(b,{children:[u.jsx(B,{children:"Длинное значение: в покое «…», при вводе текст прокручивается за кареткой"}),u.jsx(t,{label:"Адрес встречи",defaultValue:"Кыргызстан, Бишкек, проспект Чуй, 155, бизнес-центр «Ак-Кеме», вход со стороны бульвара Эркиндик, 3 этаж"}),u.jsx(B,{children:"Длинное значение с левой иконкой и валютой"}),u.jsx(t,{label:"Сумма к оплате",iconLeft:u.jsx(g,{}),currency:"с",defaultValue:"1 234 567 890 123 456 789 000",inputMode:"numeric"}),u.jsx(B,{children:"Длинная подпись"}),u.jsx(t,{label:"Номер загранпаспорта или свидетельства о рождении ребёнка до 14 лет",defaultValue:"AC1234567"}),u.jsx(B,{children:"Длинный текст ошибки переносится на несколько строк"}),u.jsx(t,{label:"Электронная почта",defaultValue:"aigerim.asanova.very.long.mailbox.name@company-with-a-long-domain.kg",type:"email",error:"Почта не похожа на настоящую: проверьте, что в ней одна «@», нет пробелов и после точки в домене есть хотя бы две буквы"})]})},c={name:"Форма на телефоне",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:function(){const[a,o]=x.useState(""),[r,h]=x.useState(""),[f,g4]=x.useState(""),[D,F4]=x.useState({}),A=D4=>()=>F4(A4=>({...A4,[D4]:!0})),f4=D.email&&f!==""&&!/^\S+@\S+\.\S{2,}$/.test(f)?"Проверьте почту: пример — name@mail.kg":void 0,v4=D.phone&&r!==""&&r.replace(/\D/g,"").length<9?"Номер короче 9 цифр":void 0;return u.jsxs(b,{children:[u.jsx(t,{label:"Имя и фамилия",value:a,onValueChange:o,autoComplete:"name",enterKeyHint:"next",hint:"Как в паспорте"}),u.jsx(t,{label:"Телефон",value:r,onValueChange:h,type:"tel",inputMode:"tel",autoComplete:"tel",enterKeyHint:"next",onBlur:A("phone"),error:v4}),u.jsx(t,{label:"Электронная почта",value:f,onValueChange:g4,type:"email",inputMode:"email",autoComplete:"email",enterKeyHint:"done",onBlur:A("email"),error:f4}),u.jsx(w4,{label:"Дата поездки",value:"сб, 14 ноя",iconLeft:u.jsx(g,{})}),u.jsx(t,{label:"Сумма",defaultValue:"12 400",currency:"с",inputMode:"numeric",readOnly:!0}),u.jsx(S4,{fullWidth:!0,children:"Продолжить"})]})}},d={name:"Кейс: оформление заказа",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsxs(b,{children:[u.jsx("span",{className:"im-18-s",children:"Детали заказа"}),u.jsx(t,{label:"Имя",defaultValue:"Ильдар Забиров",autoComplete:"name",enterKeyHint:"next"}),u.jsx(t,{label:"Номер телефона",defaultValue:"+996 (553) 24 64 88",type:"tel",inputMode:"tel",autoComplete:"tel",enterKeyHint:"done",hint:"Убедитесь, что у номера есть в WhatsApp или Telegram"})]})},p={name:"Кейс: цена от и до",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:function(){const[a,o]=x.useState("0"),[r,h]=x.useState("180 000");return u.jsxs(b,{children:[u.jsx("span",{className:"im-18-s",children:"Цена"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[u.jsx(t,{label:"От",value:a,onValueChange:o,currency:"⃀",inputMode:"numeric",enterKeyHint:"next"}),u.jsx(t,{label:"До",value:r,onValueChange:h,currency:"⃀",inputMode:"numeric",enterKeyHint:"done"})]})]})}},m={name:"Тест: ввод, крестик, ошибка",args:{label:"Город",error:""},play:async({canvasElement:e,args:a})=>{const o=F(e),r=o.getByLabelText("Город");await n(o.queryByRole("button",{name:"Очистить"})).toBeNull(),await v.click(r),await n(r).toHaveFocus(),await v.type(r,"Бишкек"),await n(a.onValueChange).toHaveBeenLastCalledWith("Бишкек");const h=await o.findByRole("button",{name:"Очистить"});await v.click(h),await n(r).toHaveValue(""),await n(r).toHaveFocus(),await V4(()=>n(o.queryByRole("button",{name:"Очистить"})).toBeNull())}},C={name:"Тест: ошибка связана с полем",args:{label:"Почта",defaultValue:"name@",error:"Проверьте почту"},play:async({canvasElement:e})=>{const a=F(e).getByLabelText("Почта");await n(a).toHaveAttribute("aria-invalid","true"),await n(a).toHaveAccessibleDescription("Проверьте почту")}},E={name:"Тест: клавиатура по назначению",parameters:{controls:{disable:!0}},render:()=>u.jsxs(b,{children:[u.jsx(t,{label:"Почта",type:"email"}),u.jsx(t,{label:"Сумма",inputMode:"numeric"})]}),play:async({canvasElement:e})=>{const a=F(e),o=a.getByLabelText("Почта");await n(o).toHaveAttribute("inputmode","email"),await n(o).toHaveAttribute("autocomplete","email"),await n(o).toHaveAttribute("autocapitalize","off");const r=a.getByLabelText("Сумма");await n(r).toHaveAttribute("autocomplete","off"),await n(r).toHaveAttribute("enterkeyhint","done")}},y={name:"Тест: style на корне",args:{label:"Город",className:"custom",style:{maxWidth:300}},play:async({canvasElement:e})=>{const a=F(e).getByLabelText("Город"),o=a.closest(".custom");await n(o.style.maxWidth).toBe("300px"),await n(a.style.maxWidth).toBe("")}},H4=["Playground","States","LongText","PhoneForm","CheckoutCase","PriceRangeCase","BehaviourTest","ErrorTest","KeyboardDefaultsTest","RootStyleTest"];var w,S,j,V,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    iconLeft: 'calendar' as never
  }
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Tap the field, type, erase with ×. Every prop is on the right.",...(T=(V=s.parameters)==null?void 0:V.docs)==null?void 0:T.description}}};var H,k,L,R,M;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      name: 'Focused',
      props: {
        focused: true,
        defaultValue: 'Значение'
      }
    }, {
      name: 'Filled',
      props: {
        defaultValue: 'Значение'
      }
    }, {
      name: 'Error',
      props: {
        defaultValue: 'Значение',
        error: 'Проверьте, что поле заполнено верно'
      }
    }, {
      name: 'Disabled',
      props: {
        defaultValue: 'Значение',
        disabled: true
      }
    }, {
      name: 'Подсказка',
      props: {
        hint: 'Как в паспорте, латиницей'
      }
    }, {
      name: 'Сумма с валютой',
      props: {
        label: 'Сумма',
        defaultValue: '12 400',
        currency: 'с'
      }
    }].map(({
      name,
      props
    }) => <div key={name} style={{
      display: 'grid',
      gap: 6
    }}>
          <Caption>{name}</Caption>
          <Field label="Заголовок" iconLeft={<CalendarIcon />} {...props} />
        </div>)}
    </div>
}`,...(L=(k=l.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"The five Figma states of 207:173 (Focused is forced here; live it comes from the caret).",...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.description}}};var K,N,P,W,_;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
  render: () => <Column>
      <Caption>Длинное значение: в покое «…», при вводе текст прокручивается за кареткой</Caption>
      <Field label="Адрес встречи" defaultValue="Кыргызстан, Бишкек, проспект Чуй, 155, бизнес-центр «Ак-Кеме», вход со стороны бульвара Эркиндик, 3 этаж" />
      <Caption>Длинное значение с левой иконкой и валютой</Caption>
      <Field label="Сумма к оплате" iconLeft={<CalendarIcon />} currency="с" defaultValue="1 234 567 890 123 456 789 000" inputMode="numeric" />
      <Caption>Длинная подпись</Caption>
      <Field label="Номер загранпаспорта или свидетельства о рождении ребёнка до 14 лет" defaultValue="AC1234567" />
      <Caption>Длинный текст ошибки переносится на несколько строк</Caption>
      <Field label="Электронная почта" defaultValue="aigerim.asanova.very.long.mailbox.name@company-with-a-long-domain.kg" type="email" error="Почта не похожа на настоящую: проверьте, что в ней одна «@», нет пробелов и после точки в домене есть хотя бы две буквы" />
    </Column>
}`,...(P=(N=i.parameters)==null?void 0:N.docs)==null?void 0:P.source},description:{story:`Too much text for the field. Open it on a phone (viewport «iPhone 393 × 852») and try:
at rest the value ends with «…»; tap the field — the text scrolls with the caret, long-press shows the loupe,
on iOS the space bar works as a trackpad; long labels end with «…»; long errors wrap.`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.description}}};var O,I,q,z,U;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Форма на телефоне',
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
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [touched, setTouched] = useState<Record<string, boolean>>({});
    const touch = (k: string) => () => setTouched(t => ({
      ...t,
      [k]: true
    }));
    const emailError = touched.email && email !== '' && !/^\\S+@\\S+\\.\\S{2,}$/.test(email) ? 'Проверьте почту: пример — name@mail.kg' : undefined;
    const phoneError = touched.phone && phone !== '' && phone.replace(/\\D/g, '').length < 9 ? 'Номер короче 9 цифр' : undefined;
    return <Column>
        <Field label="Имя и фамилия" value={name} onValueChange={setName} autoComplete="name" enterKeyHint="next" hint="Как в паспорте" />
        <Field label="Телефон" value={phone} onValueChange={setPhone} type="tel" inputMode="tel" autoComplete="tel" enterKeyHint="next" onBlur={touch('phone')} error={phoneError} />
        <Field label="Электронная почта" value={email} onValueChange={setEmail} type="email" inputMode="email" autoComplete="email" enterKeyHint="done" onBlur={touch('email')} error={emailError} />
        <Select label="Дата поездки" value="сб, 14 ноя" iconLeft={<CalendarIcon />} />
        <Field label="Сумма" defaultValue="12 400" currency="с" inputMode="numeric" readOnly />
        <Button fullWidth>Продолжить</Button>
      </Column>;
  }
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source},description:{story:"A real form on a phone: right keyboards, validation on blur (the error opens under the field), sum in som. The date is a Select: it opens a calendar, it is not typed.",...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.description}}};var $,G,J,X,Y;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Кейс: оформление заказа',
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
  render: () => <Column>
      <span className="im-18-s">Детали заказа</span>
      <Field label="Имя" defaultValue="Ильдар Забиров" autoComplete="name" enterKeyHint="next" />
      <Field label="Номер телефона" defaultValue="+996 (553) 24 64 88" type="tel" inputMode="tel" autoComplete="tel" enterKeyHint="done" hint="Убедитесь, что у номера есть в WhatsApp или Telegram" />
    </Column>
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`«Оформление заказа» (Figma «Детали заказа»): имя и телефон покупателя. У телефона подсказка про мессенджеры,
пока поле не заполнено; цифры и клавиатура — телефонные.`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Q,Z,u4,e4,a4;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Кейс: цена от и до',
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
    const [from, setFrom] = useState('0');
    const [to, setTo] = useState('180 000');
    return <Column>
        <span className="im-18-s">Цена</span>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }}>
          <Field label="От" value={from} onValueChange={setFrom} currency="⃀" inputMode="numeric" enterKeyHint="next" />
          <Field label="До" value={to} onValueChange={setTo} currency="⃀" inputMode="numeric" enterKeyHint="done" />
        </div>
      </Column>;
  }
}`,...(u4=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:`«Цена» в фильтрах (Figma «Фильтрация»): два поля «От» и «До» с знаком сома после суммы. Живая связка с ползунком
показана в Slider → «Кейс: цена в фильтрах».`,...(a4=(e4=p.parameters)==null?void 0:e4.docs)==null?void 0:a4.description}}};var t4,n4,o4,r4,s4;m.parameters={...m.parameters,docs:{...(t4=m.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'Тест: ввод, крестик, ошибка',
  args: {
    label: 'Город',
    error: ''
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Город');
    // the × is not in the accessibility tree while the field is empty
    await expect(canvas.queryByRole('button', {
      name: 'Очистить'
    })).toBeNull();
    await userEvent.click(input);
    await expect(input).toHaveFocus();
    await userEvent.type(input, 'Бишкек');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('Бишкек');
    const clear = await canvas.findByRole('button', {
      name: 'Очистить'
    });
    await userEvent.click(clear);
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Очистить'
    })).toBeNull());
  }
}`,...(o4=(n4=m.parameters)==null?void 0:n4.docs)==null?void 0:o4.source},description:{story:"Interaction test: the label floats on focus, × appears with text, × clears and keeps focus, the error is linked.",...(s4=(r4=m.parameters)==null?void 0:r4.docs)==null?void 0:s4.description}}};var l4,i4,c4;C.parameters={...C.parameters,docs:{...(l4=C.parameters)==null?void 0:l4.docs,source:{originalSource:`{
  name: 'Тест: ошибка связана с полем',
  args: {
    label: 'Почта',
    defaultValue: 'name@',
    error: 'Проверьте почту'
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByLabelText('Почта');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Проверьте почту');
  }
}`,...(c4=(i4=C.parameters)==null?void 0:i4.docs)==null?void 0:c4.source}}};var d4,p4,m4,E4,y4;E.parameters={...E.parameters,docs:{...(d4=E.parameters)==null?void 0:d4.docs,source:{originalSource:`{
  name: 'Тест: клавиатура по назначению',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Column>
      <Field label="Почта" type="email" />
      <Field label="Сумма" inputMode="numeric" />
    </Column>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByLabelText('Почта');
    await expect(email).toHaveAttribute('inputmode', 'email');
    await expect(email).toHaveAttribute('autocomplete', 'email');
    await expect(email).toHaveAttribute('autocapitalize', 'off');
    const sum = canvas.getByLabelText('Сумма');
    await expect(sum).toHaveAttribute('autocomplete', 'off');
    await expect(sum).toHaveAttribute('enterkeyhint', 'done');
  }
}`,...(m4=(p4=E.parameters)==null?void 0:p4.docs)==null?void 0:m4.source},description:{story:"Defaults by purpose: an email field gets the email keyboard and no capitals; an amount does not offer saved values.",...(y4=(E4=E.parameters)==null?void 0:E4.docs)==null?void 0:y4.description}}};var x4,h4,B4,C4,b4;y.parameters={...y.parameters,docs:{...(x4=y.parameters)==null?void 0:x4.docs,source:{originalSource:`{
  name: 'Тест: style на корне',
  args: {
    label: 'Город',
    className: 'custom',
    style: {
      maxWidth: 300
    }
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByLabelText('Город');
    const root = input.closest('.custom') as HTMLElement;
    await expect(root.style.maxWidth).toBe('300px');
    await expect(input.style.maxWidth).toBe('');
  }
}`,...(B4=(h4=y.parameters)==null?void 0:h4.docs)==null?void 0:B4.source},description:{story:"`style` and `className` go to the root, the input keeps its own.",...(b4=(C4=y.parameters)==null?void 0:C4.docs)==null?void 0:b4.description}}};const N4=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:m,CheckoutCase:d,ErrorTest:C,KeyboardDefaultsTest:E,LongText:i,PhoneForm:c,Playground:s,PriceRangeCase:p,RootStyleTest:y,States:l,__namedExportsOrder:H4,default:T4},Symbol.toStringTag,{value:"Module"}));export{d as C,N4 as F,i as L,s as P,l as S,c as a,p as b};
