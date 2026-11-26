import{r as l4,j as u}from"./iframe-DyD5Yel4.js";import{P as B4,a as g4,S as h4}from"./Phone-D_QzrYrn.js";import{c as x4}from"./cx-2dOUpm6k.js";import{C as D4}from"./Cell-BMryoHV2.js";import{L as f4}from"./places-CYDz-5dl.js";import{A as v4,a as y4}from"./Appbar-CqYb5ci7.js";import{S as b4}from"./Search-K2ZHHquh.js";import{C as C4}from"./arrows-0JYTYJZi.js";import{B as o4}from"./Button-grGIhY78.js";const F4=""+new URL("search-handle-BN0TH4qZ.png",import.meta.url).href,S4=""+new URL("search-lens-Cr265mcQ.png",import.meta.url).href,A4=""+new URL("test-DmTCyGXG.png",import.meta.url).href,j4=""+new URL("suitcase-C3BhYknS.png",import.meta.url).href,w4="_root_v8zr7_5",z4="_visual_v8zr7_35",_4="_cover_v8zr7_50",R4="_suitcase_v8zr7_57",N4="_searchHandle_v8zr7_66",T4="_searchLens_v8zr7_72",k4="_content_v8zr7_79",L4="_text_v8zr7_86",O4="_title_v8zr7_93",I4="_subtitle_v8zr7_99",a={root:w4,visual:z4,cover:_4,suitcase:R4,searchHandle:N4,searchLens:T4,content:k4,text:L4,title:O4,subtitle:I4},V4=e=>e==="search"||e==="trip"||e==="suitcase";function P4({name:e}){return e==="search"?u.jsxs(u.Fragment,{children:[u.jsx("img",{className:a.searchHandle,src:F4,alt:"",draggable:!1}),u.jsx("img",{className:a.searchLens,src:S4,alt:"",draggable:!1})]}):e==="trip"?u.jsx("img",{className:a.cover,src:A4,alt:"",draggable:!1}):u.jsx("img",{className:a.suitcase,src:j4,alt:"",draggable:!1})}const t=l4.forwardRef(function({title:r,subtitle:i,size:g="lg",visual:n="suitcase",action:h,headingLevel:D=2,className:c4,...d4},m4){const p4=D===0?"div":`h${D}`,E4=n!==!1&&n!==null&&n!==void 0;return u.jsxs("div",{ref:m4,className:x4(a.root,c4),"data-size":g,...d4,children:[E4&&u.jsx("div",{className:a.visual,children:V4(n)?u.jsx(P4,{name:n}):n}),u.jsxs("div",{className:a.content,children:[u.jsxs("div",{className:a.text,children:[u.jsx(p4,{className:a.title,children:r}),i!=null&&i!==!1&&i!==""&&u.jsx("p",{className:a.subtitle,children:i})]}),h]})]})});t.__docgenInfo={description:'EmptyState (Figma Empty state 337:34): what a screen or a list says when there is nothing to show — a 3D illustration, a title,\na line of explanation and, if it helps, one action. Not an error: a failed request is for a message with «Повторить».\n`lg` (Large) — padding 24, illustration 128, title IM-24 B, subtitle IM-16 R. `sm` (Small) — padding 16, illustration 64, IM-18 B, IM-14 R.\nIt is static: no motion of its own (the illustration is decorative, `alt=""`).\n`ref`, `className`, `style` and the rest of the attributes go to the root.',methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Figma Title, e.g. «Ничего не найдено»."},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Figma Subtitle + «Show subtitle»: empty hides it. A line break (`\\n`) is kept, as in Figma."},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"}]},description:"Figma Size: `lg` (Large) — a whole screen or a list (360 and up), `sm` (Small) — a block above other content. Default `lg`.",defaultValue:{value:"'lg'",computed:!1}},visual:{required:!1,tsType:{name:"union",raw:"EmptyStateVisual | ReactNode | false",elements:[{name:"union",raw:"'search' | 'trip' | 'suitcase'",elements:[{name:"literal",value:"'search'"},{name:"literal",value:"'trip'"},{name:"literal",value:"'suitcase'"}]},{name:"ReactNode"},{name:"literal",value:"false"}]},description:"Figma Visual: the 3D illustration (`search` — a magnifier, `trip` — a suitcase with a plane and a shield, `suitcase` — a blue suitcase)\nor your own node of the same size. `false` hides it (Figma «Show visual»). Default `suitcase`.",defaultValue:{value:"'suitcase'",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:'Figma «Show button»: one action, usually `<Button variant="ghost" size={48} radius="full">Сбросить фильтры</Button>`.'},headingLevel:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 0",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"0"}]},description:"Heading level of the title (h2 by default). `0` makes it a plain `div`, for a block that is not a section of the page.",defaultValue:{value:"2",computed:!1}}}};const{expect:f,within:W4}=__STORYBOOK_MODULE_TEST__,q4={title:"Components/EmptyState",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=337-34"},layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%",display:"grid",justifyItems:"center"},children:u.jsx(e,{})})],args:{size:"lg",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`,visual:"suitcase"},argTypes:{size:{control:"inline-radio",options:["lg","sm"]},visual:{control:"select",options:["suitcase","trip","search",!1]},action:{control:!1},headingLevel:{control:"inline-radio",options:[0,1,2,3,4]}}},s=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),l={decorators:[e=>u.jsx("div",{style:{width:360,maxWidth:"100%"},children:u.jsx(e,{})})]},o={name:"Варианты",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 360px)",gap:"8px 24px",alignItems:"start",overflowX:"auto",maxWidth:"100%"},children:[u.jsx(s,{children:"Size=Large"}),u.jsx(s,{children:"Size=Small"}),u.jsx(t,{size:"lg",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`}),u.jsx(t,{size:"sm",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`}),u.jsx(s,{children:"Show subtitle=Off"}),u.jsx(s,{children:"Show subtitle=Off"}),u.jsx(t,{size:"lg",title:"Пока ничего нет"}),u.jsx(t,{size:"sm",title:"Пока ничего нет"}),u.jsx(s,{children:"Show visual=Off"}),u.jsx(s,{children:"Show visual=Off"}),u.jsx(t,{size:"lg",visual:!1,title:"Пока ничего нет",subtitle:"Попробуйте изменить фильтры"}),u.jsx(t,{size:"sm",visual:!1,title:"Пока ничего нет",subtitle:"Попробуйте изменить фильтры"}),u.jsx(s,{children:"Show button=On"}),u.jsx(s,{children:"Show button=On"}),u.jsx(t,{size:"lg",title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры, чтобы увидеть больше вариантов",action:u.jsx(x,{})}),u.jsx(t,{size:"sm",title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры",action:u.jsx(x,{})})]})},x=()=>u.jsx(o4,{variant:"ghost",size:48,radius:"full",children:"Сбросить фильтры"}),c={name:"Картинки",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"flex",gap:24},children:["search","trip","suitcase"].map(e=>u.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"center"},children:[u.jsx(t,{visual:e,size:"lg",title:"",style:{padding:0,width:160}}),u.jsx(s,{children:e==="search"?"Search":e==="trip"?"Test":"213"})]},e))})},v=[["Бишкек","340 предложений ∙ Кыргызстан"],["Каракол","340 предложений ∙ Кыргызстан"],["Алматы","340 предложений ∙ Казахстан"],["Астана","340 предложений ∙ Казахстан"],["Кок-Бел","4 предложения ∙ Кыргызстан"],["Ала-Арча","12 предложений ∙ Кыргызстан"],["Чолпон-Ата","340 предложений ∙ Кыргызстан"],["Самарканд","340 предложений ∙ Узбекистан"],["Ташкент","12 предложений ∙ Узбекистан"],["Бухара","34 предложения ∙ Узбекистан"]],d={name:"Кейс · Главная: ничего не найдено",parameters:{controls:{disable:!0}},render:function(){const[r,i]=l4.useState("аффыаф3124");return u.jsx(B4,{overlay:u.jsx(v4,{variant:"search",surface:"solid",title:"Куда отправимся?",left:u.jsx(y4,{size:40,icon:u.jsx(C4,{direction:"left",size:24}),label:"Назад",bold:!0}),bottom:u.jsx(b4,{value:r,onValueChange:i,placeholder:"Город или место"}),statusBar:u.jsx(h4,{}),style:{position:"absolute",top:0,left:0,right:0}}),children:u.jsxs("div",{style:{paddingTop:g4.statusBar+64+56},children:[u.jsx(t,{size:"sm",visual:"suitcase",title:"Ничего не найдено",subtitle:"Но вот, что у нас есть"}),u.jsx("p",{className:"im-16-b",style:{margin:0,padding:"16px 16px 8px"},children:"Популярные направления"}),v.map(([g,n],h)=>u.jsx(D4,{icon:u.jsx(f4,{}),iconSize:40,title:g,subtitle:n,divider:h<v.length-1},g))]})})},play:async({canvasElement:e})=>{const r=W4(e);await f(r.getByRole("heading",{name:"Ничего не найдено"})).toBeInTheDocument(),await f(r.getByText("Но вот, что у нас есть")).toBeInTheDocument()}},m={name:"Кейс · Результаты: нет подходящих вариантов",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(e,{})})],args:{title:"Нет подходящих вариантов",subtitle:"Попробуйте изменить направление  или даты поездки",size:"lg"}},p={name:"Кейс · Фильтры: ничего не нашлось",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(e,{})})],args:{title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры, чтобы увидеть больше вариантов",size:"lg",action:u.jsx(x,{})}},E={name:"Кейс · Детальная: больше недоступно",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsxs("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)",display:"grid",gap:24,paddingBottom:16},children:[u.jsx(t,{size:"lg",title:"Больше недоступно",subtitle:"Предложение больше недоступно. Выберите другое предложение"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(o4,{fullWidth:!0,size:52,children:"Вернуться в каталог"})})]})},B={name:"Кейс · Оформление: время занято",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)",paddingBottom:16},children:u.jsx(t,{size:"lg",title:"Это время уже заняли",subtitle:"Пока вы оформляли заказ, все места заняли. Выберите другое время"})})},H4=["Playground","Variants","Visuals","CaseDestinationNotFound","CaseNoResults","CaseFiltersEmpty","CaseNotAvailable","CaseTimeTaken"];var y,b,C,F,S;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 360,
    maxWidth: '100%'
  }}>
        <Story />
      </div>]
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:"Меняй размер, картинку, тексты. «Show button» — это слот `action`.",...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};var A,j,w,z,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 360px)',
    gap: '8px 24px',
    alignItems: 'start',
    overflowX: 'auto',
    maxWidth: '100%'
  }}>
      <Caption>Size=Large</Caption>
      <Caption>Size=Small</Caption>
      <EmptyState size="lg" title="Пока ничего нет" subtitle={'Попробуйте изменить фильтры\\nили загляните позже'} />
      <EmptyState size="sm" title="Пока ничего нет" subtitle={'Попробуйте изменить фильтры\\nили загляните позже'} />
      <Caption>Show subtitle=Off</Caption>
      <Caption>Show subtitle=Off</Caption>
      <EmptyState size="lg" title="Пока ничего нет" />
      <EmptyState size="sm" title="Пока ничего нет" />
      <Caption>Show visual=Off</Caption>
      <Caption>Show visual=Off</Caption>
      <EmptyState size="lg" visual={false} title="Пока ничего нет" subtitle="Попробуйте изменить фильтры" />
      <EmptyState size="sm" visual={false} title="Пока ничего нет" subtitle="Попробуйте изменить фильтры" />
      <Caption>Show button=On</Caption>
      <Caption>Show button=On</Caption>
      <EmptyState size="lg" title="Ничего не нашлось" subtitle="Попробуйте изменить фильтры, чтобы увидеть больше вариантов" action={<Reset />} />
      <EmptyState size="sm" title="Ничего не нашлось" subtitle="Попробуйте изменить фильтры" action={<Reset />} />
    </div>
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:"Figma 337:34: Size Large | Small. Подзаголовок, картинка и кнопка включаются по отдельности.",...(_=(z=o.parameters)==null?void 0:z.docs)==null?void 0:_.description}}};var R,N,T,k,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Картинки',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {(['search', 'trip', 'suitcase'] as const).map(v => <div key={v} style={{
      display: 'grid',
      gap: 8,
      justifyItems: 'center'
    }}>
          <EmptyState visual={v} size="lg" title="" style={{
        padding: 0,
        width: 160
      }} />
          <Caption>{v === 'search' ? 'Search' : v === 'trip' ? 'Test' : '213'}</Caption>
        </div>)}
    </div>
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"Figma Visual 343:6226: Search, Test, 213. Картинки 3D, в коде это растровые файлы из Figma.",...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.description}}};var O,I,V,P,W;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Кейс · Главная: ничего не найдено',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [q, setQ] = useState('аффыаф3124');
    return <Phone overlay={<Appbar variant="search" surface="solid" title="Куда отправимся?" left={<AppbarButton size={40} icon={<ChevronIcon direction="left" size={24} />} label="Назад" bold />} bottom={<Search value={q} onValueChange={setQ} placeholder="Город или место" />} statusBar={<StatusBarMock />} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    }} />}>
        <div style={{
        paddingTop: PHONE.statusBar + 64 + 56
      }}>
          <EmptyState size="sm" visual="suitcase" title="Ничего не найдено" subtitle="Но вот, что у нас есть" />
          <p className="im-16-b" style={{
          margin: 0,
          padding: '16px 16px 8px'
        }}>
            Популярные направления
          </p>
          {PLACES.map(([n, m], i) => <Cell key={n} icon={<LocationPinIcon />} iconSize={40} title={n} subtitle={m} divider={i < PLACES.length - 1} />)}
        </div>
      </Phone>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('heading', {
      name: 'Ничего не найдено'
    })).toBeInTheDocument();
    await expect(c.getByText('Но вот, что у нас есть')).toBeInTheDocument();
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:`Figma «Главная» → «Ничего не найдено» (415:26856): в поиске набрали «аффыаф3124» и ничего не нашлось. Сверху Appbar с полем
поиска, под ним EmptyState Small («Ничего не найдено» / «Но вот, что у нас есть»), дальше популярные направления.`,...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var q,H,M,U,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Кейс · Результаты: нет подходящих вариантов',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  decorators: [Story => <div style={{
    width: 393,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)'
  }}>
        <Story />
      </div>],
  args: {
    title: 'Нет подходящих вариантов',
    subtitle: 'Попробуйте изменить направление  или даты поездки',
    size: 'lg'
  }
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source},description:{story:"Figma «Результаты» → «Не найдено» (1464:66793): ни одного предложения под выбранное направление и даты. Large, без кнопки, под строкой фильтров.",...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};var Q,X,$,K,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Кейс · Фильтры: ничего не нашлось',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  decorators: [Story => <div style={{
    width: 393,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)'
  }}>
        <Story />
      </div>],
  args: {
    title: 'Ничего не нашлось',
    subtitle: 'Попробуйте изменить фильтры, чтобы увидеть больше вариантов',
    size: 'lg',
    action: <Reset />
  }
}`,...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Figma «Результаты» → «Фильтр» (1550:142547): фильтры отсекли всё. Large с кнопкой «Сбросить фильтры» (Ghost 48, радиус Full).",...(Y=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Y.description}}};var J,Z,u4,e4,t4;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Кейс · Детальная: больше недоступно',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)',
    display: 'grid',
    gap: 24,
    paddingBottom: 16
  }}>
      <EmptyState size="lg" title="Больше недоступно" subtitle="Предложение больше недоступно. Выберите другое предложение" />
      <div style={{
      padding: '0 16px'
    }}>
        <Button fullWidth size={52}>
          Вернуться в каталог
        </Button>
      </div>
    </div>
}`,...(u4=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:`Figma «Детальная страница» → «Места закончились» (2245:22652): предложение больше не продаётся, кнопка возвращает в каталог.
Large без иллюстрации из вариантов: текст и кнопка из макета.`,...(t4=(e4=E.parameters)==null?void 0:e4.docs)==null?void 0:t4.description}}};var a4,s4,n4,i4,r4;B.parameters={...B.parameters,docs:{...(a4=B.parameters)==null?void 0:a4.docs,source:{originalSource:`{
  name: 'Кейс · Оформление: время занято',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <div style={{
    width: 393,
    maxWidth: '100%',
    background: 'var(--color-bg-surface)',
    paddingBottom: 16
  }}>
      <EmptyState size="lg" title="Это время уже заняли" subtitle="Пока вы оформляли заказ, все места заняли. Выберите другое время" />
    </div>
}`,...(n4=(s4=B.parameters)==null?void 0:s4.docs)==null?void 0:n4.source},description:{story:"Figma «Оформление» → «Детали заказа» (1338:107636), пустое состояние при выборе времени: кто-то уже занял слот, пока шёл заказ.",...(r4=(i4=B.parameters)==null?void 0:i4.docs)==null?void 0:r4.description}}};const Z4=Object.freeze(Object.defineProperty({__proto__:null,CaseDestinationNotFound:d,CaseFiltersEmpty:p,CaseNoResults:m,CaseNotAvailable:E,CaseTimeTaken:B,Playground:l,Variants:o,Visuals:c,__namedExportsOrder:H4,default:q4},Symbol.toStringTag,{value:"Module"}));export{d as C,Z4 as E,l as P,o as V,c as a,m as b,p as c,E as d,B as e};
