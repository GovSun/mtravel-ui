import{r as S,j as i}from"./iframe-DuqTOznb.js";import{f as _}from"./date-DiDJ1Ibz.js";import{C as T}from"./Calendar-Cebrb_nd.js";const{expect:e,fn:O,userEvent:r,waitFor:j}=__STORYBOOK_MODULE_TEST__,V="https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=2984-133551",M=["2025-7-5","2025-7-12","2025-8-9"],I=u=>u.getDay()===1||M.includes(`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`),L={title:"Components/Calendar",component:T,parameters:{design:{type:"figma",url:V}},decorators:[u=>i.jsx("div",{style:{width:393,maxWidth:"100%",padding:16,boxSizing:"border-box",background:"var(--color-bg-sunken-subtle)"},children:i.jsx(u,{})})],args:{month:new Date(2025,6,1),months:2,min:new Date(2025,6,2),isDateDisabled:I,defaultValue:new Date(2025,6,6),onValueChange:O()},argTypes:{month:{control:"date"},min:{control:"date"},max:{control:"date"},isDateDisabled:{control:!1}}},t={},n={name:"Тест: выбор и стрелки",tags:["!autodocs"],play:async({canvas:u,args:d})=>{const a=u.getByRole("button",{name:/среда, 16 июля 2025/});await r.click(a),await e(d.onValueChange).toHaveBeenCalledTimes(1),await e(a).toHaveAttribute("aria-pressed","true"),await e(u.getByRole("button",{name:/суббота, 5 июля 2025, недоступно/})).toBeDisabled(),a.focus(),await r.keyboard("{ArrowRight}"),await e(u.getByRole("button",{name:/четверг, 17 июля 2025/})).toHaveFocus(),await r.keyboard("{ArrowDown}"),await e(u.getByRole("button",{name:/четверг, 24 июля 2025/})).toHaveFocus(),u.getByRole("button",{name:/вторник, 22 июля 2025/}).focus(),await r.keyboard("{ArrowLeft}"),await e(u.getByRole("button",{name:/воскресенье, 20 июля 2025/})).toHaveFocus()}},o={name:"Управляемый: кнопка «Выбрать»",parameters:{controls:{disable:!0}},render:function(d){const[a,H]=S.useState(null);return i.jsxs("div",{style:{display:"grid",gap:12},children:[i.jsx(T,{...d,defaultValue:void 0,value:a,onValueChange:H}),i.jsx("p",{className:"im-16-m",style:{margin:0},"data-testid":"picked",children:a?`Выбрать ${_(a)}`:"Дата не выбрана"})]})},play:async({canvas:u})=>{await e(u.getByTestId("picked")).toHaveTextContent("Дата не выбрана"),await r.click(u.getByRole("button",{name:/среда, 6 августа 2025/})),await j(()=>e(u.getByTestId("picked")).toHaveTextContent("Выбрать 6 авг"))}},s={name:"Один месяц, все дни доступны",args:{month:new Date(2026,1,1),months:1,min:void 0,isDateDisabled:void 0,defaultValue:null}},$=["Playground","KeyboardTest","Controlled","OneMonth"];var c,l,m,p,D;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Как в Figma: июль и август 2025, выбрано 6 июля. Понедельники и три распроданных дня недоступны.",...(D=(p=t.parameters)==null?void 0:p.docs)==null?void 0:D.description}}};var y,B,g,E,F;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Тест: выбор и стрелки',
  tags: ['!autodocs'],
  play: async ({
    canvas,
    args
  }) => {
    const day = canvas.getByRole('button', {
      name: /среда, 16 июля 2025/
    });
    await userEvent.click(day);
    await expect(args.onValueChange).toHaveBeenCalledTimes(1);
    await expect(day).toHaveAttribute('aria-pressed', 'true');
    // an unavailable day cannot be picked
    await expect(canvas.getByRole('button', {
      name: /суббота, 5 июля 2025, недоступно/
    })).toBeDisabled();
    // arrows move between the days that can be picked: right from Wed 16 → Thu 17, down → Thu 24
    day.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('button', {
      name: /четверг, 17 июля 2025/
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: /четверг, 24 июля 2025/
    })).toHaveFocus();
    // Monday 21 is skipped going left from Tue 22
    canvas.getByRole('button', {
      name: /вторник, 22 июля 2025/
    }).focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(canvas.getByRole('button', {
      name: /воскресенье, 20 июля 2025/
    })).toHaveFocus();
  }
}`,...(g=(B=n.parameters)==null?void 0:B.docs)==null?void 0:g.source},description:{story:"Выбор, недоступный день и стрелки: вправо и вниз по доступным дням, недоступный понедельник пропускается.",...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.description}}};var w,b,v,C,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Управляемый: кнопка «Выбрать»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render(args) {
    const [day, setDay] = useState<Date | null>(null);
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <Calendar {...args} defaultValue={undefined} value={day} onValueChange={setDay} />
        <p className="im-16-m" style={{
        margin: 0
      }} data-testid="picked">
          {day ? \`Выбрать \${formatDate(day)}\` : 'Дата не выбрана'}
        </p>
      </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('picked')).toHaveTextContent('Дата не выбрана');
    await userEvent.click(canvas.getByRole('button', {
      name: /среда, 6 августа 2025/
    }));
    await waitFor(() => expect(canvas.getByTestId('picked')).toHaveTextContent('Выбрать 6 авг'));
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"Выбор управляет экраном: подпись кнопки «Выбрать 6 авг» берётся из выбранного дня, формат — formatDate.",...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var x,h,A,k,R;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Один месяц, все дни доступны',
  args: {
    month: new Date(2026, 1, 1),
    months: 1,
    min: undefined,
    isDateDisabled: undefined,
    defaultValue: null
  }
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source},description:{story:"Один месяц, без ограничений: все дни доступны. Пустые клетки до первого числа — понедельник всегда первый.",...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};const z=Object.freeze(Object.defineProperty({__proto__:null,Controlled:o,KeyboardTest:n,OneMonth:s,Playground:t,__namedExportsOrder:$,default:L},Symbol.toStringTag,{value:"Module"}));export{z as C,s as O,t as P,o as a};
