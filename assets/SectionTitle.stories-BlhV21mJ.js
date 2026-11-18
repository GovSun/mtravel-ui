import{j as u,r as C}from"./iframe-DuqTOznb.js";import{C as a}from"./Caption-C6jupY-b.js";import{S as e}from"./SectionTitle-DUrzhWiT.js";import{L as b}from"./places-z-kxph-t.js";const{expect:r,fn:h4,userEvent:x,within:m4}=__STORYBOOK_MODULE_TEST__,E4={title:"Components/Section title",component:e,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=8-645"},layout:"fullscreen"},decorators:[n=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",paddingBlock:16},children:u.jsx(n,{})})],args:{children:"Популярные направления",size:20,align:"left",subtitlePosition:"below",subtitle:""},argTypes:{size:{control:"inline-radio",options:[24,20,18,16]},align:{control:"inline-radio",options:["left","center"]},subtitlePosition:{control:"inline-radio",options:["below","above"]},children:{control:"text"},subtitle:{control:"text"},as:{control:"inline-radio",options:["h2","h3","div"]},iconLeft:{control:!1},iconRight:{control:!1},disclosure:{control:!1}}},o={},l={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:12},children:[24,20,18,16].flatMap(n=>(n===16?["below"]:["below","above"]).map(t=>u.jsx(x4,{size:n,pos:t},`${n}${t}`)))})},g4={24:24,20:20,18:17,16:15};function x4({size:n,pos:t}){const i=`Figma ${g4[n]}px, текст ${n} · ${n===16?"без подписи":t==="below"?"Default":"Sub+title"}`,s=n===16?void 0:"Описание";return u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(a,{children:i}),u.jsx(e,{size:n,subtitle:s,subtitlePosition:t,children:"Заголовок"}),u.jsx(e,{size:n,subtitle:s,subtitlePosition:t,align:"center",children:"Заголовок"})]})}const v="Однодневные поездки за город на машине и автобусе",c={name:"Перенос заголовка",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:12},children:[[24,20,18,16].map(n=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(a,{children:`Figma ${g4[n]}px, текст ${n} · две строки${n===16?"":" и подпись"}`}),u.jsx(e,{size:n,subtitle:n===16?void 0:"Описание",children:v})]},n)),u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(a,{children:"Длиннее двух строк — многоточие"}),u.jsx(e,{size:20,subtitle:"Описание","data-case":"clamp",children:`${v}: Иссык-Куль, Ала-Арча, Сокулук, Чон-Кемин и каньон Сказка с остановками у озёр`})]})]})},d={name:"Иконки и ссылка «Все»",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:16},children:[u.jsx(a,{children:"Иконка слева"}),u.jsx(e,{iconLeft:u.jsx(b,{}),children:"Рядом с вами"}),u.jsx(a,{children:"Иконка справа"}),u.jsx(e,{iconRight:u.jsx(b,{}),children:"Рядом с вами"}),u.jsx(a,{children:"Ссылка «Все»"}),u.jsx(e,{disclosure:{onClick:()=>{}},children:"Многодневные поездки"}),u.jsx(a,{children:"Ссылка «Все», нажата"}),u.jsx(e,{disclosure:{forcePressed:!0},children:"Многодневные поездки"}),u.jsx(a,{children:"Подпись и ссылка с другим словом"}),u.jsx(e,{size:18,subtitle:"вс, 6 июл",disclosure:{children:"Изменить",onClick:()=>{}},children:"Дата и время"})]})},p={name:"Кейс: главная",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{style:{display:"grid",gap:24},children:[u.jsx(e,{size:20,children:"Недавно искали"}),u.jsx(e,{size:20,children:"Популярные направления"}),u.jsx(e,{size:20,disclosure:{onClick:()=>{}},children:"Многодневные поездки"}),u.jsx(e,{size:20,disclosure:{onClick:()=>{}},children:"Поездки на один день"}),u.jsx(e,{size:20,align:"center",subtitle:"Идеи для впечатлений в этом сезоне",children:"Сезонная подборка"})]})},m={name:"Кейс: детальная страница",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{style:{display:"grid",gap:24},children:[u.jsx(e,{children:"Что вас ожидает"}),u.jsx(e,{children:"Что включено?"}),u.jsx(e,{subtitle:"вс, 17 дек, 18:00",children:"Место встречи"}),u.jsx(e,{children:"Организатор"}),u.jsx(e,{children:"Условия возврата"}),u.jsx(e,{children:"Вам может понравиться"})]})},g={name:"Кейс: каталог и оформление",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{style:{display:"grid",gap:24},children:[u.jsx(e,{size:24,subtitle:"Экскурсии, поездки и активный отдых",as:"h1",children:"Выходные"}),u.jsx(e,{subtitle:"34 предложения",children:"Бишкек"}),u.jsx(e,{subtitle:"12 предложений",children:"Ташкент"}),u.jsx(e,{size:18,subtitle:"вс, 6 июл",disclosure:{children:"Изменить",onClick:()=>{}},children:"Дата и время"}),u.jsx(e,{size:18,children:"Контактные данные"})]})},h={name:"Тест: ссылка «Все»",args:{children:"Поездки на один день",disclosure:{onClick:h4()}},play:async({canvasElement:n,args:t})=>{const i=m4(n);await r(i.getByRole("heading",{name:"Поездки на один день"})).toBeInTheDocument();const s=i.getByRole("button",{name:"Все"});await x.click(s),await r(t.disclosure.onClick).toHaveBeenCalledTimes(1),s.focus(),await x.keyboard("{Enter}"),await r(t.disclosure.onClick).toHaveBeenCalledTimes(2)}},E={name:"Тест: ref и атрибуты на заголовке",parameters:{controls:{disable:!0}},render:function(){const t=C.useRef(null),[i,s]=C.useState("");return u.jsxs("div",{children:[u.jsx(e,{ref:t,as:"h3",id:"st-ref","data-testid":"st",className:"wrapper-class",disclosure:{onClick:()=>{var B;return s(((B=t.current)==null?void 0:B.tagName)??"")}},children:"Условия возврата"}),u.jsx("output",{style:{display:"block",padding:16},className:"im-12-r",children:i})]})},play:async({canvasElement:n})=>{var s;const t=m4(n),i=t.getByRole("heading",{name:"Условия возврата"});await r(i).toHaveAttribute("id","st-ref"),await r(i).toHaveAttribute("data-testid","st"),await r((s=i.parentElement)==null?void 0:s.parentElement).toHaveClass("wrapper-class"),await x.click(t.getByRole("button",{name:"Все"})),await r(n.querySelector("output")).toHaveTextContent("H3")}},B4=["Playground","Variants","Wrap","Parts","CaseHome","CaseDetail","CaseCatalogAndOrder","DisclosureTest","RefTest"];var D,y,T,S,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source},description:{story:"Меняй размер, выравнивание, подпись и ссылку «Все» в панели Controls.",...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var f,w,j,F,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {([24, 20, 18, 16] as const).flatMap(size => (size === 16 ? ['below'] : ['below', 'above']).map(pos => <Row key={\`\${size}\${pos}\`} size={size} pos={pos as 'below' | 'above'} />))}
    </div>
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source},description:{story:"The Figma matrix 8:645: Divider label 24 | 20 | 17 (= 18) | 15 (= 16) × Type Default | Sub+title × Align Left | Center.",...(k=(F=l.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var R,z,P,H,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Перенос заголовка',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {([24, 20, 18, 16] as const).map(size => <div key={size} style={{
      display: 'grid',
      gap: 4
    }}>
          <Caption>{\`Figma \${FIGMA_SIZE[size]}px, текст \${size} · две строки\${size === 16 ? '' : ' и подпись'}\`}</Caption>
          <SectionTitle size={size} subtitle={size === 16 ? undefined : 'Описание'}>
            {WRAP_TITLE}
          </SectionTitle>
        </div>)}
      <div style={{
      display: 'grid',
      gap: 4
    }}>
        <Caption>Длиннее двух строк — многоточие</Caption>
        <SectionTitle size={20} subtitle="Описание" data-case="clamp">
          {\`\${WRAP_TITLE}: Иссык-Куль, Ала-Арча, Сокулук, Чон-Кемин и каньон Сказка с остановками у озёр\`}
        </SectionTitle>
      </div>
    </div>
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source},description:{story:`A title that wraps. The title row is a 32 px slot per line: its air, (32 − line height) / 2, stays above the first
line and under the last one, so the subtitle is as far from two lines as from one. Past two lines — an ellipsis.`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.description}}};var $,I,L,O,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Иконки и ссылка «Все»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <Caption>Иконка слева</Caption>
      <SectionTitle iconLeft={<LocationPinIcon />}>Рядом с вами</SectionTitle>
      <Caption>Иконка справа</Caption>
      <SectionTitle iconRight={<LocationPinIcon />}>Рядом с вами</SectionTitle>
      <Caption>Ссылка «Все»</Caption>
      <SectionTitle disclosure={{
      onClick: () => undefined
    }}>Многодневные поездки</SectionTitle>
      <Caption>Ссылка «Все», нажата</Caption>
      <SectionTitle disclosure={{
      forcePressed: true
    }}>Многодневные поездки</SectionTitle>
      <Caption>Подпись и ссылка с другим словом</Caption>
      <SectionTitle size={18} subtitle="вс, 6 июл" disclosure={{
      children: 'Изменить',
      onClick: () => undefined
    }}>
        Дата и время
      </SectionTitle>
    </div>
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"Booleans of the Figma set: Show icon left / right, Disclosure.",...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.description}}};var W,N,V,G,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Кейс: главная',
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
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <SectionTitle size={20}>Недавно искали</SectionTitle>
      <SectionTitle size={20}>Популярные направления</SectionTitle>
      <SectionTitle size={20} disclosure={{
      onClick: () => undefined
    }}>
        Многодневные поездки
      </SectionTitle>
      <SectionTitle size={20} disclosure={{
      onClick: () => undefined
    }}>
        Поездки на один день
      </SectionTitle>
      <SectionTitle size={20} align="center" subtitle="Идеи для впечатлений в этом сезоне">
        Сезонная подборка
      </SectionTitle>
    </div>
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"Home screen «Главная»: two levels of headings on one screen (Figma 402:21701).",...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.description}}};var K,U,Z,J,X;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Кейс: детальная страница',
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
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <SectionTitle>Что вас ожидает</SectionTitle>
      <SectionTitle>Что включено?</SectionTitle>
      <SectionTitle subtitle="вс, 17 дек, 18:00">Место встречи</SectionTitle>
      <SectionTitle>Организатор</SectionTitle>
      <SectionTitle>Условия возврата</SectionTitle>
      <SectionTitle>Вам может понравиться</SectionTitle>
    </div>
}`,...(Z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Z.source},description:{story:"Excursion page: 20 px headings of the sections (Figma 230:17164).",...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Y,Q,u4,e4,n4;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Кейс: каталог и оформление',
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
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <SectionTitle size={24} subtitle="Экскурсии, поездки и активный отдых" as="h1">
        Выходные
      </SectionTitle>
      <SectionTitle subtitle="34 предложения">Бишкек</SectionTitle>
      <SectionTitle subtitle="12 предложений">Ташкент</SectionTitle>
      <SectionTitle size={18} subtitle="вс, 6 июл" disclosure={{
      children: 'Изменить',
      onClick: () => undefined
    }}>
        Дата и время
      </SectionTitle>
      <SectionTitle size={18}>Контактные данные</SectionTitle>
    </div>
}`,...(u4=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:u4.source},description:{story:"Catalog and order: the 24 px page heading, a city with a count, a section with «Изменить» (Figma 805:44289, 1081:104883, 1338:107636).",...(n4=(e4=g.parameters)==null?void 0:e4.docs)==null?void 0:n4.description}}};var t4,i4,s4,a4,r4;h.parameters={...h.parameters,docs:{...(t4=h.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'Тест: ссылка «Все»',
  args: {
    children: 'Поездки на один день',
    disclosure: {
      onClick: fn()
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Поездки на один день'
    })).toBeInTheDocument();
    const all = canvas.getByRole('button', {
      name: 'Все'
    });
    await userEvent.click(all);
    await expect(args.disclosure!.onClick).toHaveBeenCalledTimes(1);
    all.focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.disclosure!.onClick).toHaveBeenCalledTimes(2);
  }
}`,...(s4=(i4=h.parameters)==null?void 0:i4.docs)==null?void 0:s4.source},description:{story:"Interaction test: «Все» is a button, a tap and Enter call the handler, the title is a heading.",...(r4=(a4=h.parameters)==null?void 0:a4.docs)==null?void 0:r4.description}}};var o4,l4,c4,d4,p4;E.parameters={...E.parameters,docs:{...(o4=E.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Тест: ref и атрибуты на заголовке',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const ref = useRef<HTMLElement>(null);
    const [tag, setTag] = useState('');
    return <div>
        <SectionTitle ref={ref} as="h3" id="st-ref" data-testid="st" className="wrapper-class" disclosure={{
        onClick: () => setTag(ref.current?.tagName ?? '')
      }}>
          Условия возврата
        </SectionTitle>
        <output style={{
        display: 'block',
        padding: 16
      }} className="im-12-r">{tag}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const heading = canvas.getByRole('heading', {
      name: 'Условия возврата'
    });
    await expect(heading).toHaveAttribute('id', 'st-ref');
    await expect(heading).toHaveAttribute('data-testid', 'st');
    await expect(heading.parentElement?.parentElement).toHaveClass('wrapper-class');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Все'
    }));
    await expect(canvasElement.querySelector('output')).toHaveTextContent('H3');
  }
}`,...(c4=(l4=E.parameters)==null?void 0:l4.docs)==null?void 0:c4.source},description:{story:"The ref and the plain attributes reach the heading itself, so `aria-labelledby` and scroll-to-section work on it.",...(p4=(d4=E.parameters)==null?void 0:d4.docs)==null?void 0:p4.description}}};const y4=Object.freeze(Object.defineProperty({__proto__:null,CaseCatalogAndOrder:g,CaseDetail:m,CaseHome:p,DisclosureTest:h,Parts:d,Playground:o,RefTest:E,Variants:l,Wrap:c,__namedExportsOrder:B4,default:E4},Symbol.toStringTag,{value:"Module"}));export{p as C,o as P,y4 as S,l as V,c as W,d as a,m as b,g as c};
