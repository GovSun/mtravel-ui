import{r as i,j as u}from"./iframe-Dr5ib33t.js";import{s as o,F as qu,c as _u,C as Lu,a as V,U as Mu}from"./parts-BsPlZssE.js";import{u as Ou}from"./useControllableState-BCXXtwcd.js";import{S as Pu}from"./Search-C10A3p51.js";import{S as bu}from"./Select-BX4KZDvv.js";import{B as Ku}from"./Button-DFQPOwGN.js";const s=i.forwardRef(function({label:a,value:p,defaultValue:t="",onValueChange:m,onChange:n,error:F,hint:A,leftIcon:w,rightIcon:h,clearable:k=!0,onClear:b,clearLabel:H,currency:f,focused:Cu=!1,disabled:d=!1,readOnly:M,className:Au,id:wu,onFocus:I,onBlur:N,...ju},Su){const Tu=i.useId(),j=wu??`in${Tu}`,O=`${j}-hint`,P=`${j}-currency`,S=i.useRef(null);i.useImperativeHandle(Su,()=>S.current);const[R,K]=Ou(p,t,m),[Vu,W]=i.useState(!1),T=!d&&(Vu||Cu),D=!!F&&!d,q=typeof F=="boolean"?void 0:F,B=R!=="",ku=d?"disabled":D?"error":T?"focused":B?"filled":"placeholder",Hu=k&&!h&&!M,z=D&&q?q:A,Iu=[z?O:null,f&&B?P:null].filter(Boolean).join(" ")||void 0,Nu=r=>{var $;d||r.target.closest("button, input, label")||($=S.current)==null||$.focus()},U=u.jsx("input",{ref:S,id:j,className:o.input,value:R,disabled:d,readOnly:M,"aria-invalid":D||void 0,"aria-describedby":Iu,onChange:r=>{K(r.target.value),n==null||n(r)},onFocus:r=>{W(!0),I==null||I(r)},onBlur:r=>{W(!1),N==null||N(r)},...ju}),Ru=u.jsxs(u.Fragment,{children:[w&&u.jsx("span",{className:o.slot,"data-side":"left","aria-hidden":"true",children:w}),u.jsxs("span",{className:o.text,children:[u.jsx("span",{className:o.placeholder,"aria-hidden":"true",children:a}),u.jsx("label",{htmlFor:j,className:o.label,children:a}),u.jsxs("span",{className:o.valueRow,children:[f?u.jsx("span",{className:o.sizer,"data-value":R,children:U}):U,f&&(B||T)&&u.jsx("span",{id:P,className:o.currency,children:f})]})]}),Hu&&u.jsx(Lu,{visible:B&&!d,label:H,onClear:()=>{var r;K(""),b==null||b(),(r=S.current)==null||r.focus()}}),h&&u.jsx("span",{className:o.slot,"data-side":"right","aria-hidden":"true",children:h})]});return u.jsxs("div",{className:_u(o.root,Au),"data-kind":"field","data-state":ku,"data-float":B||T||void 0,"data-focused":T||void 0,"data-error":D||void 0,"data-disabled":d||void 0,children:[u.jsx("div",{className:o.field,onClick:Nu,children:Ru}),u.jsx(qu,{id:O,role:D&&q?"alert":void 0,children:z})]})});s.__docgenInfo={description:"Field (Figma 207:173, was «Input»): 52 px text field, label that floats up, a real <input> inside.\nIt only takes typing — a field that opens a list or another screen is a Select (chevron), not a Field.\n\nThe text is a native input, so everything a phone user expects works in it: the caret, selection handles, the iOS\nloupe and space-bar trackpad, horizontal scrolling through long text, paste, autofill, the right keyboard\n(`type`, `inputMode`, `enterKeyHint`, `autoComplete`). Font size 16 keeps iOS from zooming the page on focus.",methods:[],displayName:"Field",props:{label:{required:!0,tsType:{name:"string"},description:"The label: a placeholder in the middle while empty, a small caption on top once focused or filled."},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called with the new text (typing, paste, ×). The native `onChange` still works too."},error:{required:!1,tsType:{name:"union",raw:"ReactNode | boolean",elements:[{name:"ReactNode"},{name:"boolean"}]},description:"Figma State=Error: red field. A string or node is also shown under the field and announced."},hint:{required:!1,tsType:{name:"ReactNode"},description:"Text under the field (Figma «Show hint»). The error text replaces it while there is an error."},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:"Left 36 px slot with a 24 px icon (Figma «Show left icon»), e.g. `<CalendarIcon />`."},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:"Right 36 px slot instead of the clear ×."},clearable:{required:!1,tsType:{name:"boolean"},description:"Show the × while there is text. Default true (off with `rightIcon` or `readOnly`).",defaultValue:{value:"true",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:""},currency:{required:!1,tsType:{name:"string"},description:"Currency sign after the value (Figma «Show currency»), e.g. «с»."},focused:{required:!1,tsType:{name:"boolean"},description:"Forces the focused look. For docs and visual tests only.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const{expect:l,fn:Wu,userEvent:_,waitFor:L,within:Du}=__STORYBOOK_MODULE_TEST__,zu={title:"Components/Inputs/Field",component:s,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=207-173"}},decorators:[e=>u.jsx("div",{style:{width:328,maxWidth:"100%"},children:u.jsx(e,{})})],args:{label:"Заголовок",defaultValue:"",hint:"",error:"",currency:"",disabled:!1,clearable:!0,onValueChange:Wu()},argTypes:{leftIcon:{control:"inline-radio",options:["нет","calendar"],mapping:{нет:void 0,calendar:u.jsx(V,{})}},error:{control:"text"},hint:{control:"text"},currency:{control:"text"},value:{control:!1},focused:{control:!1}}},c=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),Bu=({children:e})=>u.jsx("div",{style:{display:"grid",gap:20,width:328,maxWidth:"100%"},children:e}),E={args:{leftIcon:"calendar"}},x={name:"Все состояния",parameters:{controls:{disable:!0},layout:"padded"},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{display:"grid",gap:24,gridTemplateColumns:"repeat(auto-fill, minmax(280px, 328px))"},children:[{name:"Placeholder",props:{}},{name:"Focused",props:{focused:!0,defaultValue:"Значение"}},{name:"Filled",props:{defaultValue:"Значение"}},{name:"Error",props:{defaultValue:"Значение",error:"Проверьте, что поле заполнено верно"}},{name:"Disabled",props:{defaultValue:"Значение",disabled:!0}},{name:"Подсказка",props:{hint:"Как в паспорте, латиницей"}},{name:"Сумма с валютой",props:{label:"Сумма",defaultValue:"12 400",currency:"с"}}].map(({name:e,props:a})=>u.jsxs("div",{style:{display:"grid",gap:6},children:[u.jsx(c,{children:e}),u.jsx(s,{label:"Заголовок",leftIcon:u.jsx(V,{}),...a})]},e))})},g={name:"Длинный текст",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsxs(Bu,{children:[u.jsx(c,{children:"Длинное значение: в покое «…», при вводе текст прокручивается за кареткой"}),u.jsx(s,{label:"Адрес встречи",defaultValue:"Кыргызстан, Бишкек, проспект Чуй, 155, бизнес-центр «Ак-Кеме», вход со стороны бульвара Эркиндик, 3 этаж"}),u.jsx(c,{children:"Длинное значение с левой иконкой и валютой"}),u.jsx(s,{label:"Сумма к оплате",leftIcon:u.jsx(V,{}),currency:"с",defaultValue:"1 234 567 890 123 456 789 000",inputMode:"numeric"}),u.jsx(c,{children:"Длинная подпись"}),u.jsx(s,{label:"Номер загранпаспорта или свидетельства о рождении ребёнка до 14 лет",defaultValue:"AC1234567"}),u.jsx(c,{children:"Длинный текст ошибки переносится на несколько строк"}),u.jsx(s,{label:"Электронная почта",defaultValue:"aigerim.asanova.very.long.mailbox.name@company-with-a-long-domain.kg",type:"email",error:"Почта не похожа на настоящую: проверьте, что в ней одна «@», нет пробелов и после точки в домене есть хотя бы две буквы"}),u.jsx(c,{children:"Select: длинное значение обрезается «…»"}),u.jsx(bu,{label:"Пассажиры",value:"2 взрослых, 3 ребёнка от 2 до 11 лет, 1 младенец без места, эконом",rightIcon:u.jsx(Mu,{})}),u.jsx(c,{children:"Поиск: длинный запрос"}),u.jsx(Pu,{defaultValue:"экскурсия на озеро Иссык-Куль с ночёвкой в юрте и конной прогулкой"})]})},v={name:"Форма на телефоне",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:function(){const[a,p]=i.useState(""),[t,m]=i.useState(""),[n,F]=i.useState(""),[A,w]=i.useState({}),h=H=>()=>w(f=>({...f,[H]:!0})),k=A.email&&n!==""&&!/^\S+@\S+\.\S{2,}$/.test(n)?"Проверьте почту: пример — name@mail.kg":void 0,b=A.phone&&t!==""&&t.replace(/\D/g,"").length<9?"Номер короче 9 цифр":void 0;return u.jsxs(Bu,{children:[u.jsx(s,{label:"Имя и фамилия",value:a,onValueChange:p,autoComplete:"name",enterKeyHint:"next",hint:"Как в паспорте"}),u.jsx(s,{label:"Телефон",value:t,onValueChange:m,type:"tel",inputMode:"tel",autoComplete:"tel",enterKeyHint:"next",onBlur:h("phone"),error:b}),u.jsx(s,{label:"Электронная почта",value:n,onValueChange:F,type:"email",inputMode:"email",autoComplete:"email",enterKeyHint:"done",onBlur:h("email"),error:k}),u.jsx(bu,{label:"Дата поездки",value:"14 ноября, пятница",leftIcon:u.jsx(V,{})}),u.jsx(s,{label:"Сумма",defaultValue:"12 400",currency:"с",inputMode:"numeric",readOnly:!0}),u.jsx(Ku,{fullWidth:!0,children:"Продолжить"})]})}},y={name:"Тест: ввод, крестик, ошибка",args:{label:"Город",error:""},play:async({canvasElement:e,args:a})=>{const p=Du(e),t=p.getByLabelText("Город"),m=t.closest('[data-kind="field"]');await l(m).toHaveAttribute("data-state","placeholder"),await _.click(t),await L(()=>l(m).toHaveAttribute("data-state","focused")),await _.type(t,"Бишкек"),await l(a.onValueChange).toHaveBeenLastCalledWith("Бишкек");const n=p.getByRole("button",{name:"Очистить"});await L(()=>l(n).toHaveAttribute("data-visible")),await _.click(n),await l(t).toHaveValue(""),await l(t).toHaveFocus(),await L(()=>l(n).not.toHaveAttribute("data-visible"))}},C={name:"Тест: ошибка связана с полем",args:{label:"Почта",defaultValue:"name@",error:"Проверьте почту"},play:async({canvasElement:e})=>{const a=Du(e).getByLabelText("Почта");await l(a).toHaveAttribute("aria-invalid","true"),await l(a).toHaveAccessibleDescription("Проверьте почту")}},Uu=["Playground","States","LongText","PhoneForm","BehaviourTest","ErrorTest"];var G,J,X,Y,Q;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    leftIcon: 'calendar' as never
  }
}`,...(X=(J=E.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Tap the field, type, erase with ×. Every prop is on the right.",...(Q=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var Z,uu,eu,au,tu;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 328px))'
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
          <Field label="Заголовок" leftIcon={<CalendarIcon />} {...props} />
        </div>)}
    </div>
}`,...(eu=(uu=x.parameters)==null?void 0:uu.docs)==null?void 0:eu.source},description:{story:"The five Figma states of 207:173 (Focused is forced here; live it comes from the caret).",...(tu=(au=x.parameters)==null?void 0:au.docs)==null?void 0:tu.description}}};var nu,ru,ou,su,lu;g.parameters={...g.parameters,docs:{...(nu=g.parameters)==null?void 0:nu.docs,source:{originalSource:`{
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
      <Field label="Сумма к оплате" leftIcon={<CalendarIcon />} currency="с" defaultValue="1 234 567 890 123 456 789 000" inputMode="numeric" />
      <Caption>Длинная подпись</Caption>
      <Field label="Номер загранпаспорта или свидетельства о рождении ребёнка до 14 лет" defaultValue="AC1234567" />
      <Caption>Длинный текст ошибки переносится на несколько строк</Caption>
      <Field label="Электронная почта" defaultValue="aigerim.asanova.very.long.mailbox.name@company-with-a-long-domain.kg" type="email" error="Почта не похожа на настоящую: проверьте, что в ней одна «@», нет пробелов и после точки в домене есть хотя бы две буквы" />
      <Caption>Select: длинное значение обрезается «…»</Caption>
      <Select label="Пассажиры" value="2 взрослых, 3 ребёнка от 2 до 11 лет, 1 младенец без места, эконом" rightIcon={<UsersIcon />} />
      <Caption>Поиск: длинный запрос</Caption>
      <Search defaultValue="экскурсия на озеро Иссык-Куль с ночёвкой в юрте и конной прогулкой" />
    </Column>
}`,...(ou=(ru=g.parameters)==null?void 0:ru.docs)==null?void 0:ou.source},description:{story:`Too much text for the field. Open it on a phone (viewport «iPhone 393 × 852») and try:
at rest the value ends with «…»; tap the field — the text scrolls with the caret, long-press shows the loupe,
on iOS the space bar works as a trackpad; long labels end with «…»; long errors wrap.`,...(lu=(su=g.parameters)==null?void 0:su.docs)==null?void 0:lu.description}}};var iu,du,cu,pu,mu;v.parameters={...v.parameters,docs:{...(iu=v.parameters)==null?void 0:iu.docs,source:{originalSource:`{
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
        <Select label="Дата поездки" value="14 ноября, пятница" leftIcon={<CalendarIcon />} />
        <Field label="Сумма" defaultValue="12 400" currency="с" inputMode="numeric" readOnly />
        <Button fullWidth>Продолжить</Button>
      </Column>;
  }
}`,...(cu=(du=v.parameters)==null?void 0:du.docs)==null?void 0:cu.source},description:{story:"A real form on a phone: right keyboards, validation on blur (the error opens under the field), sum in som.",...(mu=(pu=v.parameters)==null?void 0:pu.docs)==null?void 0:mu.description}}};var hu,fu,Eu,xu,gu;y.parameters={...y.parameters,docs:{...(hu=y.parameters)==null?void 0:hu.docs,source:{originalSource:`{
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
    const root = input.closest('[data-kind="field"]') as HTMLElement;
    await expect(root).toHaveAttribute('data-state', 'placeholder');
    await userEvent.click(input);
    await waitFor(() => expect(root).toHaveAttribute('data-state', 'focused'));
    await userEvent.type(input, 'Бишкек');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('Бишкек');
    const clear = canvas.getByRole('button', {
      name: 'Очистить'
    });
    await waitFor(() => expect(clear).toHaveAttribute('data-visible'));
    await userEvent.click(clear);
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await waitFor(() => expect(clear).not.toHaveAttribute('data-visible'));
  }
}`,...(Eu=(fu=y.parameters)==null?void 0:fu.docs)==null?void 0:Eu.source},description:{story:"Interaction test: the label floats on focus, × appears with text, × clears and keeps focus, the error is linked.",...(gu=(xu=y.parameters)==null?void 0:xu.docs)==null?void 0:gu.description}}};var vu,yu,Fu;C.parameters={...C.parameters,docs:{...(vu=C.parameters)==null?void 0:vu.docs,source:{originalSource:`{
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
}`,...(Fu=(yu=C.parameters)==null?void 0:yu.docs)==null?void 0:Fu.source}}};const Zu=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:y,ErrorTest:C,LongText:g,PhoneForm:v,Playground:E,States:x,__namedExportsOrder:Uu,default:zu},Symbol.toStringTag,{value:"Module"}));export{Zu as F,g as L,E as P,x as S,v as a};
