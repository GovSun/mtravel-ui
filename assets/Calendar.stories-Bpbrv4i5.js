import{r as A,j as s}from"./iframe-DyD5Yel4.js";import{f as h}from"./date-DiDJ1Ibz.js";import{C}from"./Calendar-De6UI0kB.js";import{B as k}from"./Button-grGIhY78.js";const{expect:a,fn:R,userEvent:r,waitFor:T}=__STORYBOOK_MODULE_TEST__,H="https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/Выходные?node-id=493-33807",_={title:"Components/Calendar",component:C,parameters:{design:{type:"figma",url:H}},decorators:[u=>s.jsx("div",{style:{width:393,maxWidth:"100%",padding:16,boxSizing:"border-box",background:"var(--color-bg-sunken-subtle)"},children:s.jsx(u,{})})],args:{month:new Date(2025,6,1),months:2,defaultValue:new Date(2025,6,12),onValueChange:R()},argTypes:{month:{control:"date"},min:{control:"date"},max:{control:"date"},isDateDisabled:{control:!1}}},t={},n={name:"Тест: выбор и стрелки",tags:["!autodocs"],play:async({canvas:u,args:d})=>{const e=u.getByRole("button",{name:/среда, 16 июля 2025/});await r.click(e),await a(d.onValueChange).toHaveBeenCalledTimes(1),await a(e).toHaveAttribute("aria-pressed","true"),e.focus(),await r.keyboard("{ArrowRight}"),await a(u.getByRole("button",{name:/четверг, 17 июля 2025/})).toHaveFocus(),await r.keyboard("{ArrowDown}"),await a(u.getByRole("button",{name:/четверг, 24 июля 2025/})).toHaveFocus(),u.getByRole("button",{name:/вторник, 22 июля 2025/}).focus(),await r.keyboard("{ArrowLeft}"),await a(u.getByRole("button",{name:/понедельник, 21 июля 2025/})).toHaveFocus()}},o={name:"Кейс · Выбор даты: кнопка «Выбрать»",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(d){const[e,f]=A.useState(new Date(2025,6,12));return s.jsxs("div",{style:{display:"grid",gap:16},children:[s.jsx(C,{...d,defaultValue:void 0,value:e,onValueChange:f}),s.jsx(k,{fullWidth:!0,disabled:!e,"data-testid":"picked",children:e?`Выбрать ${h(e)}`:"Выбрать дату"})]})},play:async({canvas:u})=>{await a(u.getByTestId("picked")).toHaveTextContent("Выбрать 12 июл"),await r.click(u.getByRole("button",{name:/среда, 16 июля 2025/})),await T(()=>a(u.getByTestId("picked")).toHaveTextContent("Выбрать 16 июл"))}},S=["Playground","KeyboardTest","Controlled"];var i,c,l,B,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Как в Figma «Выбор даты»: июль и август 2025, выбран 12 июля. Меняйте месяц, количество месяцев и выбор на панели.",...(m=(B=t.parameters)==null?void 0:B.docs)==null?void 0:m.description}}};var p,y,g,w,E;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    // arrows move between the days: right from Wed 16 → Thu 17, down → Thu 24
    day.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('button', {
      name: /четверг, 17 июля 2025/
    })).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await expect(canvas.getByRole('button', {
      name: /четверг, 24 июля 2025/
    })).toHaveFocus();
    canvas.getByRole('button', {
      name: /вторник, 22 июля 2025/
    }).focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(canvas.getByRole('button', {
      name: /понедельник, 21 июля 2025/
    })).toHaveFocus();
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"Выбор, стрелки и Tab: вправо и вниз по дням, влево из вторника в понедельник 21 июля.",...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.description}}};var b,v,D,F,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Кейс · Выбор даты: кнопка «Выбрать»',
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
  render: function Render(args) {
    const [day, setDay] = useState<Date | null>(new Date(2025, 6, 12));
    return <div style={{
      display: 'grid',
      gap: 16
    }}>
        <Calendar {...args} defaultValue={undefined} value={day} onValueChange={setDay} />
        <Button fullWidth disabled={!day} data-testid="picked">
          {day ? \`Выбрать \${formatDate(day)}\` : 'Выбрать дату'}
        </Button>
      </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByTestId('picked')).toHaveTextContent('Выбрать 12 июл');
    await userEvent.click(canvas.getByRole('button', {
      name: /среда, 16 июля 2025/
    }));
    await waitFor(() => expect(canvas.getByTestId('picked')).toHaveTextContent('Выбрать 16 июл'));
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:"Figma «Выбор даты» → кнопка внизу: «Выбрать 12 июл». Подпись берётся из выбранного дня (`formatDate`), пока дня нет, кнопка неактивна.",...(x=(F=o.parameters)==null?void 0:F.docs)==null?void 0:x.description}}};const L=Object.freeze(Object.defineProperty({__proto__:null,Controlled:o,KeyboardTest:n,Playground:t,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{L as C,t as P,o as a};
