import{j as u,r as u4}from"./iframe-DuqTOznb.js";import{T as l,a as s,b as e4}from"./Tabs-CV44PryX.js";import{B as a4}from"./Button-CKwNO4NU.js";import{C as t4}from"./general-DYSfllt2.js";const{expect:n,fn:n4,userEvent:o,waitFor:s4,within:w}=__STORYBOOK_MODULE_TEST__,r4={title:"Components/Tab",component:l,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=210-3053"},layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx(e,{})})],args:{"aria-label":"Разделы",defaultValue:"avia",activation:"auto",stretch:!1,skeleton:!1,onValueChange:n4()},argTypes:{activation:{control:"inline-radio",options:["auto","manual"]},inset:{control:"number"},gap:{control:"inline-radio",options:["sm","none"]},value:{control:!1},children:{control:!1},panels:{control:!1},skeletonWidths:{control:!1}}},c=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),d={render:e=>u.jsxs(l,{...e,children:[u.jsx(s,{value:"avia",children:"Авиа"}),u.jsx(s,{value:"weekend",children:"Выходные"}),u.jsx(s,{value:"tour",children:"Туры"})]}),play:async({canvasElement:e,args:a})=>{const t=w(e),[r,i]=t.getAllByRole("tab");await n(r).toHaveAttribute("aria-selected","true"),await o.click(i),await n(i).toHaveAttribute("aria-selected","true"),await n(r).toHaveAttribute("aria-selected","false"),await n(a.onValueChange).toHaveBeenLastCalledWith("weekend")}},p={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>{const e=u.jsx(t4,{variant:"solid"}),a=[{name:"Без иконок",props:{}},{name:"Иконка слева",props:{iconLeft:e}},{name:"Иконка справа",props:{iconRight:e}},{name:"Обе иконки (Figma)",props:{iconLeft:e,iconRight:e}}];return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, auto)",gap:"16px 12px",alignItems:"center",justifyItems:"start"},children:[u.jsx("span",{}),u.jsx(c,{children:"Selected=False"}),u.jsx(c,{children:"Selected=True"}),u.jsx(c,{children:"Нажат"}),u.jsx(c,{children:"Недоступен"}),a.map(t=>u.jsx(o4,{...t},t.name)),u.jsx(c,{children:"Skeleton=True"}),u.jsx(s,{skeleton:!0}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})}};function o4({name:e,props:a}){return u.jsxs(u.Fragment,{children:[u.jsx(c,{children:e}),u.jsx(s,{...a,children:"Включён завтрак"}),u.jsx(s,{selected:!0,...a,children:"Включён завтрак"}),u.jsx(s,{forcePressed:!0,...a,children:"Включён завтрак"}),u.jsx(s,{disabled:!0,...a,children:"Включён завтрак"})]})}const b={name:"Клавиатура",parameters:{controls:{disable:!0}},render:e=>u.jsxs(l,{...e,defaultValue:"a",children:[u.jsx(s,{value:"a",children:"Авиа"}),u.jsx(s,{value:"b",children:"Выходные"}),u.jsx(s,{value:"c",disabled:!0,children:"Отели"}),u.jsx(s,{value:"d",children:"Туры"})]}),play:async({canvasElement:e})=>{const a=w(e),[t,r,,i]=a.getAllByRole("tab");await o.tab(),await n(t).toHaveFocus(),await o.keyboard("{ArrowRight}"),await n(r).toHaveFocus(),await n(r).toHaveAttribute("aria-selected","true"),await o.keyboard("{ArrowRight}"),await n(i).toHaveFocus(),await o.keyboard("{ArrowRight}"),await n(t).toHaveFocus(),await o.keyboard("{End}"),await n(i).toHaveFocus(),await o.keyboard("{Home}"),await n(t).toHaveFocus(),await o.tab(),await n(t).not.toHaveFocus()}},m={name:"Ручной выбор",parameters:{controls:{disable:!0}},render:e=>u.jsxs(l,{...e,defaultValue:"a",activation:"manual",children:[u.jsx(s,{value:"a",children:"Авиа"}),u.jsx(s,{value:"b",children:"Выходные"})]}),play:async({canvasElement:e})=>{const a=w(e),[t,r]=a.getAllByRole("tab");await o.tab(),await o.keyboard("{ArrowRight}"),await n(r).toHaveFocus(),await n(t).toHaveAttribute("aria-selected","true"),await o.keyboard("{Enter}"),await n(r).toHaveAttribute("aria-selected","true")}},v={name:"Прокрутка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:e=>u.jsx("div",{style:{width:393,maxWidth:"100%"},children:u.jsx(l,{...e,inset:16,defaultValue:"t1",children:["Авиабилеты","Выходные","Туры","Отели","Экскурсии","Трансферы","Страховки"].map((a,t)=>u.jsx(s,{value:`t${t+1}`,children:a},a))})})},g={name:"Загрузка",parameters:{controls:{disable:!0}},render:function(a){const[t,r]=u4.useState(!0);return u.jsxs("div",{style:{display:"grid",gap:16,width:361,maxWidth:"100%"},children:[u.jsxs(l,{...a,skeleton:t,defaultValue:"a",children:[u.jsx(s,{value:"a",children:"Авиа"}),u.jsx(s,{value:"b",children:"Выходные"})]}),u.jsx(a4,{variant:"secondary",size:40,onClick:()=>r(i=>!i),style:{justifySelf:"start"},children:t?"Показать табы":"Показать заглушки"})]})},play:async({canvasElement:e})=>{const a=w(e);await n(a.getByRole("status")).toBeInTheDocument(),await o.click(a.getByRole("button")),await s4(()=>n(a.getAllByRole("tab")).toHaveLength(2))}},i4={avia:["Бишкек — Ош, 4 250 ⃀","Бишкек — Алматы, 3 100 ⃀"],weekend:["Каньон Конорчек и башня Бурана","Ала-Арча: тропа к водопаду"]},x={name:"Кейс: Избранное — Авиа и Выходные",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:e=>u.jsx("div",{style:{width:360,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx("div",{style:{padding:"12px 0"},children:u.jsxs(l,{...e,"aria-label":"Избранное",stretch:!0,inset:16,defaultValue:"weekend",panels:u.jsx(u.Fragment,{children:Object.entries(i4).map(([a,t])=>u.jsx(e4,{value:a,style:{padding:"4px 16px 16px"},children:t.map(r=>u.jsx("p",{className:"im-16-m",style:{margin:0,padding:"12px 0",borderBottom:"1px solid var(--color-border-default)"},children:r},r))},a))}),children:[u.jsx(s,{value:"avia",children:"Авиа"}),u.jsx(s,{value:"weekend",children:"Выходные"})]})})}),play:async({canvasElement:e})=>{const a=w(e),t=a.getByRole("tab",{name:"Авиа"});await n(a.getByRole("tabpanel")).toHaveAccessibleName("Выходные"),await o.click(t),await n(a.getByRole("tabpanel")).toHaveAccessibleName("Авиа"),await n(t).toHaveAttribute("aria-controls",a.getByRole("tabpanel").id)}},l4=["Playground","States","Keyboard","ManualActivation","Scrolling","Loading","CaseFavourites"];var E,B,y,h,A;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(B=d.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:"Тапни вкладку или двигайся стрелками: выбор перекрашивает таб, а стрелки ← → Home End работают с клавиатуры.",...(A=(h=d.parameters)==null?void 0:h.docs)==null?void 0:A.description}}};var F,T,j,k,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Figma 210:3053: Selected False | True × иконки слева и справа, плюс нажатие, недоступный и Skeleton.",...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var f,C,R,H,S;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(R=(C=b.parameters)==null?void 0:C.docs)==null?void 0:R.source},description:{story:"Клавиатура: Tab заходит в ряд одним шагом, стрелки двигают выбор по кругу, Home и End прыгают к краям.",...(S=(H=b.parameters)==null?void 0:H.docs)==null?void 0:S.description}}};var V,L,_,I,O;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source},description:{story:'activation="manual": стрелки двигают только фокус, выбирает Пробел или Enter.',...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var W,P,N,K,M;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(N=(P=v.parameters)==null?void 0:P.docs)==null?void 0:N.source},description:{story:"Ряд не помещается — он прокручивается, выбранный таб выезжает в центр.",...(M=(K=v.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var z,U,$,G,J;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source},description:{story:"Skeleton=True для всего ряда: заглушки с одним бликом, потом настоящие табы.",...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var X,Y,q,Q,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Кейс: Избранное — Авиа и Выходные',
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
        <Tabs {...args} aria-label="Избранное" stretch inset={16} defaultValue="weekend" panels={<>
              {Object.entries(FAVOURITES).map(([k, items]) => <TabPanel key={k} value={k} style={{
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
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source},description:{story:`«Избранное»: два таба «Авиа» и «Выходные» делят ширину поровну (Figma: padding 12 / 16, gap 8, оба FILL — 160 + 160 на 360),
ниже панель выбранного. Таб здесь меняет содержимое экрана, поэтому tablist с tabpanel.`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};const m4=Object.freeze(Object.defineProperty({__proto__:null,CaseFavourites:x,Keyboard:b,Loading:g,ManualActivation:m,Playground:d,Scrolling:v,States:p,__namedExportsOrder:l4,default:r4},Symbol.toStringTag,{value:"Module"}));export{x as C,b as K,g as L,d as P,p as S,m4 as T,v as a};
