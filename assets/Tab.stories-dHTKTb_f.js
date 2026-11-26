import{j as u,r as p4}from"./iframe-DyD5Yel4.js";import{T as i,a as t,b as b4}from"./Tabs-MqSbiXir.js";import{B as m4}from"./Button-grGIhY78.js";import{C as v4}from"./general-CSE0kF9v.js";const{expect:r,fn:x4,userEvent:o,waitFor:g4,within:w}=__STORYBOOK_MODULE_TEST__,B4={title:"Components/Tab",component:i,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=210-3053"},layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx(e,{})})],args:{"aria-label":"Разделы",defaultValue:"avia",activation:"auto",stretch:!1,skeleton:!1,onValueChange:x4()},argTypes:{activation:{control:"inline-radio",options:["auto","manual"]},inset:{control:"number"},gap:{control:"inline-radio",options:["sm","none"]},value:{control:!1},children:{control:!1},panels:{control:!1},skeletonWidths:{control:!1}}},c=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),d={render:e=>u.jsxs(i,{...e,children:[u.jsx(t,{value:"avia",children:"Авиа"}),u.jsx(t,{value:"weekend",children:"Выходные"}),u.jsx(t,{value:"tour",children:"Туры"})]}),play:async({canvasElement:e,args:a})=>{const n=w(e),[s,l]=n.getAllByRole("tab");await r(s).toHaveAttribute("aria-selected","true"),await o.click(l),await r(l).toHaveAttribute("aria-selected","true"),await r(s).toHaveAttribute("aria-selected","false"),await r(a.onValueChange).toHaveBeenLastCalledWith("weekend")}},p={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>{const e=u.jsx(v4,{variant:"solid"}),a=[{name:"Без иконок",props:{}},{name:"Иконка слева",props:{iconLeft:e}},{name:"Иконка справа",props:{iconRight:e}},{name:"Обе иконки (Figma)",props:{iconLeft:e,iconRight:e}}];return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, auto)",gap:"16px 12px",alignItems:"center",justifyItems:"start"},children:[u.jsx("span",{}),u.jsx(c,{children:"Selected=False"}),u.jsx(c,{children:"Selected=True"}),u.jsx(c,{children:"Нажат"}),u.jsx(c,{children:"Недоступен"}),a.map(n=>u.jsx(E4,{...n},n.name)),u.jsx(c,{children:"Skeleton=True"}),u.jsx(t,{skeleton:!0}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})}};function E4({name:e,props:a}){return u.jsxs(u.Fragment,{children:[u.jsx(c,{children:e}),u.jsx(t,{...a,children:"Включён завтрак"}),u.jsx(t,{selected:!0,...a,children:"Включён завтрак"}),u.jsx(t,{forcePressed:!0,...a,children:"Включён завтрак"}),u.jsx(t,{disabled:!0,...a,children:"Включён завтрак"})]})}const b={name:"Клавиатура",parameters:{controls:{disable:!0}},render:e=>u.jsxs(i,{...e,defaultValue:"a",children:[u.jsx(t,{value:"a",children:"Авиа"}),u.jsx(t,{value:"b",children:"Выходные"}),u.jsx(t,{value:"c",disabled:!0,children:"Отели"}),u.jsx(t,{value:"d",children:"Туры"})]}),play:async({canvasElement:e})=>{const a=w(e),[n,s,,l]=a.getAllByRole("tab");await o.tab(),await r(n).toHaveFocus(),await o.keyboard("{ArrowRight}"),await r(s).toHaveFocus(),await r(s).toHaveAttribute("aria-selected","true"),await o.keyboard("{ArrowRight}"),await r(l).toHaveFocus(),await o.keyboard("{ArrowRight}"),await r(n).toHaveFocus(),await o.keyboard("{End}"),await r(l).toHaveFocus(),await o.keyboard("{Home}"),await r(n).toHaveFocus(),await o.tab(),await r(n).not.toHaveFocus()}},m={name:"Ручной выбор",parameters:{controls:{disable:!0}},render:e=>u.jsxs(i,{...e,defaultValue:"a",activation:"manual",children:[u.jsx(t,{value:"a",children:"Авиа"}),u.jsx(t,{value:"b",children:"Выходные"})]}),play:async({canvasElement:e})=>{const a=w(e),[n,s]=a.getAllByRole("tab");await o.tab(),await o.keyboard("{ArrowRight}"),await r(s).toHaveFocus(),await r(n).toHaveAttribute("aria-selected","true"),await o.keyboard("{Enter}"),await r(s).toHaveAttribute("aria-selected","true")}},v={name:"Прокрутка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:e=>u.jsx("div",{style:{width:393,maxWidth:"100%"},children:u.jsx(i,{...e,inset:16,defaultValue:"t1",children:["Авиабилеты","Выходные","Туры","Отели","Экскурсии","Трансферы","Страховки"].map((a,n)=>u.jsx(t,{value:`t${n+1}`,children:a},a))})})},x={name:"Загрузка",parameters:{controls:{disable:!0}},render:function(a){const[n,s]=p4.useState(!0);return u.jsxs("div",{style:{display:"grid",gap:16,width:361,maxWidth:"100%"},children:[u.jsxs(i,{...a,skeleton:n,defaultValue:"a",children:[u.jsx(t,{value:"a",children:"Авиа"}),u.jsx(t,{value:"b",children:"Выходные"})]}),u.jsx(m4,{variant:"secondary",size:40,onClick:()=>s(l=>!l),style:{justifySelf:"start"},children:n?"Показать табы":"Показать заглушки"})]})},play:async({canvasElement:e})=>{const a=w(e);await r(a.getByRole("status")).toBeInTheDocument(),await o.click(a.getByRole("button")),await g4(()=>r(a.getAllByRole("tab")).toHaveLength(2))}},g={name:"Кейсы · Оформление заказа, время сбора",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",background:"var(--color-bg-surface)",padding:"12px 0"},children:u.jsx(i,{"aria-label":"Время сбора",defaultValue:"10:00",inset:16,gap:"sm",children:["10:00","10:30","11:00","12:00","13:00","14:00","16:00"].map(e=>u.jsx(t,{value:e,children:e},e))})})},B={name:"Кейсы · Оплата M+, дата первого платежа",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:()=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",background:"var(--color-bg-surface)",padding:"12px 0"},children:u.jsxs(i,{"aria-label":"Дата первого платежа",defaultValue:"1",inset:16,gap:"sm",children:[u.jsx(t,{value:"1",children:"1 число"}),u.jsx(t,{value:"5",children:"5 число"}),u.jsx(t,{value:"10",children:"10 число"}),u.jsx(t,{value:"15",children:"15 число"})]})})},w4={avia:["Бишкек — Москва, 29 мая","Бишкек — Стамбул, 2 июня"],weekend:["Иссык-Куль на выходные","Каракол и Джети-Огуз"]},E={name:"Тест: панели и связь с табом",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:e=>u.jsx("div",{style:{width:360,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx("div",{style:{padding:"12px 0"},children:u.jsxs(i,{...e,"aria-label":"Панели",stretch:!0,inset:16,defaultValue:"weekend",panels:u.jsx(u.Fragment,{children:Object.entries(w4).map(([a,n])=>u.jsx(b4,{value:a,style:{padding:"4px 16px 16px"},children:n.map(s=>u.jsx("p",{className:"im-16-m",style:{margin:0,padding:"12px 0",borderBottom:"1px solid var(--color-border-default)"},children:s},s))},a))}),children:[u.jsx(t,{value:"avia",children:"Авиа"}),u.jsx(t,{value:"weekend",children:"Выходные"})]})})}),play:async({canvasElement:e})=>{const a=w(e),n=a.getByRole("tab",{name:"Авиа"});await r(a.getByRole("tabpanel")).toHaveAccessibleName("Выходные"),await o.click(n),await r(a.getByRole("tabpanel")).toHaveAccessibleName("Авиа"),await r(n).toHaveAttribute("aria-controls",a.getByRole("tabpanel").id)}},y4=["Playground","States","Keyboard","ManualActivation","Scrolling","Loading","CaseCheckoutTimes","CaseInstalmentDay","PanelsTest"];var y,h,A,F,T;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tab value="avia">Авиа</Tab>
      <Tab value="weekend">Выходные</Tab>
      <Tab value="tour">Туры</Tab>
    </Tabs>,
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    const [first, second] = c.getAllByRole('tab');
    await expect(first).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(second);
    await expect(second).toHaveAttribute('aria-selected', 'true');
    await expect(first).toHaveAttribute('aria-selected', 'false');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('weekend');
  }
}`,...(A=(h=d.parameters)==null?void 0:h.docs)==null?void 0:A.source},description:{story:"Тапни вкладку или двигайся стрелками: выбор перекрашивает таб, а стрелки ← → Home End работают с клавиатуры.",...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var j,k,f,C,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const ic = <CircleIcon variant="solid" />;
    const rows: {
      name: string;
      props: Record<string, unknown>;
    }[] = [{
      name: 'Без иконок',
      props: {}
    }, {
      name: 'Иконка слева',
      props: {
        iconLeft: ic
      }
    }, {
      name: 'Иконка справа',
      props: {
        iconRight: ic
      }
    }, {
      name: 'Обе иконки (Figma)',
      props: {
        iconLeft: ic,
        iconRight: ic
      }
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto repeat(4, auto)',
      gap: '16px 12px',
      alignItems: 'center',
      justifyItems: 'start'
    }}>
        <span />
        <Caption>Selected=False</Caption>
        <Caption>Selected=True</Caption>
        <Caption>Нажат</Caption>
        <Caption>Недоступен</Caption>
        {rows.map(r => <Row key={r.name} {...r} />)}
        <Caption>Skeleton=True</Caption>
        <Tab skeleton />
        <span />
        <span />
        <span />
      </div>;
  }
}`,...(f=(k=p.parameters)==null?void 0:k.docs)==null?void 0:f.source},description:{story:"Figma 210:3053: Selected False | True × иконки слева и справа, плюс нажатие, недоступный и Skeleton.",...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var R,S,H,V,W;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Клавиатура',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} defaultValue="a">
      <Tab value="a">Авиа</Tab>
      <Tab value="b">Выходные</Tab>
      <Tab value="c" disabled>
        Отели
      </Tab>
      <Tab value="d">Туры</Tab>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const [a, b,, d] = c.getAllByRole('tab');
    await userEvent.tab();
    await expect(a).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(b).toHaveFocus();
    await expect(b).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{ArrowRight}'); // «Отели» недоступен: пропускаем
    await expect(d).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}'); // по кругу
    await expect(a).toHaveFocus();
    await userEvent.keyboard('{End}');
    await expect(d).toHaveFocus();
    await userEvent.keyboard('{Home}');
    await expect(a).toHaveFocus();
    await userEvent.tab(); // из ряда выходим одним Tab
    await expect(a).not.toHaveFocus();
  }
}`,...(H=(S=b.parameters)==null?void 0:S.docs)==null?void 0:H.source},description:{story:"Клавиатура: Tab заходит в ряд одним шагом, стрелки двигают выбор по кругу, Home и End прыгают к краям.",...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var L,P,_,I,N;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Ручной выбор',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} defaultValue="a" activation="manual">
      <Tab value="a">Авиа</Tab>
      <Tab value="b">Выходные</Tab>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const [a, b] = c.getAllByRole('tab');
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await expect(b).toHaveFocus();
    await expect(a).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(b).toHaveAttribute('aria-selected', 'true');
  }
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:'activation="manual": стрелки двигают только фокус, выбирает Пробел или Enter.',...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.description}}};var O,z,M,K,U;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Прокрутка',
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
  render: args => <div style={{
    width: 393,
    maxWidth: '100%'
  }}>
      <Tabs {...args} inset={16} defaultValue="t1">
        {['Авиабилеты', 'Выходные', 'Туры', 'Отели', 'Экскурсии', 'Трансферы', 'Страховки'].map((t, i) => <Tab key={t} value={\`t\${i + 1}\`}>
            {t}
          </Tab>)}
      </Tabs>
    </div>
}`,...(M=(z=v.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"Ряд не помещается — он прокручивается, выбранный таб выезжает в центр.",...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var $,G,J,X,Y;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render(args) {
    const [skeleton, setSkeleton] = useState(true);
    return <div style={{
      display: 'grid',
      gap: 16,
      width: 361,
      maxWidth: '100%'
    }}>
        <Tabs {...args} skeleton={skeleton} defaultValue="a">
          <Tab value="a">Авиа</Tab>
          <Tab value="b">Выходные</Tab>
        </Tabs>
        <Button variant="secondary" size={40} onClick={() => setSkeleton(v => !v)} style={{
        justifySelf: 'start'
      }}>
          {skeleton ? 'Показать табы' : 'Показать заглушки'}
        </Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('status')).toBeInTheDocument();
    await userEvent.click(c.getByRole('button'));
    await waitFor(() => expect(c.getAllByRole('tab')).toHaveLength(2));
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Skeleton=True для всего ряда: заглушки с одним бликом, потом настоящие табы.",...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var q,Q,Z,u4,e4;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Кейсы · Оформление заказа, время сбора',
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
  decorators: [Story => <Story />],
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    background: 'var(--color-bg-surface)',
    padding: '12px 0'
  }}>
      <Tabs aria-label="Время сбора" defaultValue="10:00" inset={16} gap="sm">
        {['10:00', '10:30', '11:00', '12:00', '13:00', '14:00', '16:00'].map(t => <Tab key={t} value={t}>
            {t}
          </Tab>)}
      </Tabs>
    </div>
}`,...(Z=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:`«Оформление заказа», время сбора (Figma 1401:46237, «Чипсы дат»): ряд Tab без панелей, выбран первый, 10:00.
Таб с тем же текстом хватает по ширине, ряд прокручивается по горизонтали.`,...(e4=(u4=g.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var a4,t4,n4,r4,s4;B.parameters={...B.parameters,docs:{...(a4=B.parameters)==null?void 0:a4.docs,source:{originalSource:`{
  name: 'Кейсы · Оплата M+, дата первого платежа',
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
  decorators: [Story => <Story />],
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    background: 'var(--color-bg-surface)',
    padding: '12px 0'
  }}>
      <Tabs aria-label="Дата первого платежа" defaultValue="1" inset={16} gap="sm">
        <Tab value="1">1 число</Tab>
        <Tab value="5">5 число</Tab>
        <Tab value="10">10 число</Tab>
        <Tab value="15">15 число</Tab>
      </Tabs>
    </div>
}`,...(n4=(t4=B.parameters)==null?void 0:t4.docs)==null?void 0:n4.source},description:{story:`«Оплата через M+» (Figma 1602:132098, «Чипсы дат»): день первого платежа, выбран «1 число». Полоска прокручивается,
если дней больше, чем влезает в 393 px.`,...(s4=(r4=B.parameters)==null?void 0:r4.docs)==null?void 0:s4.description}}};var o4,i4,l4,c4,d4;E.parameters={...E.parameters,docs:{...(o4=E.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Тест: панели и связь с табом',
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
  render: args => <div style={{
    width: 360,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)'
  }}>
      <div style={{
      padding: '12px 0'
    }}>
        <Tabs {...args} aria-label="Панели" stretch inset={16} defaultValue="weekend" panels={<>
              {Object.entries(PANELS).map(([k, items]) => <TabPanel key={k} value={k} style={{
          padding: '4px 16px 16px'
        }}>
                  {items.map(i => <p key={i} className="im-16-m" style={{
            margin: 0,
            padding: '12px 0',
            borderBottom: '1px solid var(--color-border-default)'
          }}>
                      {i}
                    </p>)}
                </TabPanel>)}
            </>}>
          <Tab value="avia">Авиа</Tab>
          <Tab value="weekend">Выходные</Tab>
        </Tabs>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const avia = c.getByRole('tab', {
      name: 'Авиа'
    });
    await expect(c.getByRole('tabpanel')).toHaveAccessibleName('Выходные');
    await userEvent.click(avia);
    await expect(c.getByRole('tabpanel')).toHaveAccessibleName('Авиа');
    await expect(avia).toHaveAttribute('aria-controls', c.getByRole('tabpanel').id);
  }
}`,...(l4=(i4=E.parameters)==null?void 0:i4.docs)==null?void 0:l4.source},description:{story:"Test: a tab with a tabpanel (aria-controls / aria-labelledby), the tabs share the row width; not a design case.",...(d4=(c4=E.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};const j4=Object.freeze(Object.defineProperty({__proto__:null,CaseCheckoutTimes:g,CaseInstalmentDay:B,Keyboard:b,Loading:x,ManualActivation:m,PanelsTest:E,Playground:d,Scrolling:v,States:p,__namedExportsOrder:y4,default:B4},Symbol.toStringTag,{value:"Module"}));export{g as C,b as K,x as L,d as P,p as S,j4 as T,v as a,B as b};
