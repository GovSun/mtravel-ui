import{r as K,j as u}from"./iframe-DuqTOznb.js";import{P as t4,a as s4,S as a4}from"./Phone-DvUrDP6C.js";import{c as n4}from"./cx-2dOUpm6k.js";import{C as i4}from"./Cell-DbWJlVzG.js";import{L as r4}from"./places-z-kxph-t.js";import{A as l4,b as o4}from"./Appbar-BYMxUm5k.js";import{S as c4}from"./Search-qejZ8oNQ.js";import{C as d4}from"./arrows-C0H-naDa.js";import{B as m4}from"./Button-CKwNO4NU.js";const p4=""+new URL("search-handle-BN0TH4qZ.png",import.meta.url).href,E4=""+new URL("search-lens-Cr265mcQ.png",import.meta.url).href,h4=""+new URL("test-DmTCyGXG.png",import.meta.url).href,g4=""+new URL("suitcase-C3BhYknS.png",import.meta.url).href,B4="_root_v8zr7_5",x4="_visual_v8zr7_35",D4="_cover_v8zr7_50",f4="_suitcase_v8zr7_57",v4="_searchHandle_v8zr7_66",y4="_searchLens_v8zr7_72",C4="_content_v8zr7_79",b4="_text_v8zr7_86",F4="_title_v8zr7_93",S4="_subtitle_v8zr7_99",s={root:B4,visual:x4,cover:D4,suitcase:f4,searchHandle:v4,searchLens:y4,content:C4,text:b4,title:F4,subtitle:S4},j4=e=>e==="search"||e==="trip"||e==="suitcase";function A4({name:e}){return e==="search"?u.jsxs(u.Fragment,{children:[u.jsx("img",{className:s.searchHandle,src:p4,alt:"",draggable:!1}),u.jsx("img",{className:s.searchLens,src:E4,alt:"",draggable:!1})]}):e==="trip"?u.jsx("img",{className:s.cover,src:h4,alt:"",draggable:!1}):u.jsx("img",{className:s.suitcase,src:g4,alt:"",draggable:!1})}const t=K.forwardRef(function({title:r,subtitle:i,size:E="lg",visual:n="suitcase",action:h,headingLevel:B=2,className:Y,...J},Z){const u4=B===0?"div":`h${B}`,e4=n!==!1&&n!==null&&n!==void 0;return u.jsxs("div",{ref:Z,className:n4(s.root,Y),"data-size":E,...J,children:[e4&&u.jsx("div",{className:s.visual,children:j4(n)?u.jsx(A4,{name:n}):n}),u.jsxs("div",{className:s.content,children:[u.jsxs("div",{className:s.text,children:[u.jsx(u4,{className:s.title,children:r}),i!=null&&i!==!1&&i!==""&&u.jsx("p",{className:s.subtitle,children:i})]}),h]})]})});t.__docgenInfo={description:'EmptyState (Figma Empty state 337:34): what a screen or a list says when there is nothing to show — a 3D illustration, a title,\na line of explanation and, if it helps, one action. Not an error: a failed request is for a message with «Повторить».\n`lg` (Large) — padding 24, illustration 128, title IM-24 B, subtitle IM-16 R. `sm` (Small) — padding 16, illustration 64, IM-18 B, IM-14 R.\nIt is static: no motion of its own (the illustration is decorative, `alt=""`).\n`ref`, `className`, `style` and the rest of the attributes go to the root.',methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"Figma Title, e.g. «Ничего не найдено»."},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Figma Subtitle + «Show subtitle»: empty hides it. A line break (`\\n`) is kept, as in Figma."},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'sm'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'sm'"}]},description:"Figma Size: `lg` (Large) — a whole screen or a list (360 and up), `sm` (Small) — a block above other content. Default `lg`.",defaultValue:{value:"'lg'",computed:!1}},visual:{required:!1,tsType:{name:"union",raw:"EmptyStateVisual | ReactNode | false",elements:[{name:"union",raw:"'search' | 'trip' | 'suitcase'",elements:[{name:"literal",value:"'search'"},{name:"literal",value:"'trip'"},{name:"literal",value:"'suitcase'"}]},{name:"ReactNode"},{name:"literal",value:"false"}]},description:"Figma Visual: the 3D illustration (`search` — a magnifier, `trip` — a suitcase with a plane and a shield, `suitcase` — a blue suitcase)\nor your own node of the same size. `false` hides it (Figma «Show visual»). Default `suitcase`.",defaultValue:{value:"'suitcase'",computed:!1}},action:{required:!1,tsType:{name:"ReactNode"},description:'Figma «Show button»: one action, usually `<Button variant="ghost" size={48} radius="full">Сбросить фильтры</Button>`.'},headingLevel:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 0",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"0"}]},description:"Heading level of the title (h2 by default). `0` makes it a plain `div`, for a block that is not a section of the page.",defaultValue:{value:"2",computed:!1}}}};const{expect:x,within:w4}=__STORYBOOK_MODULE_TEST__,z4={title:"Components/EmptyState",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=337-34"},layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%",display:"grid",justifyItems:"center"},children:u.jsx(e,{})})],args:{size:"lg",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`,visual:"suitcase"},argTypes:{size:{control:"inline-radio",options:["lg","sm"]},visual:{control:"select",options:["suitcase","trip","search",!1]},action:{control:!1},headingLevel:{control:"inline-radio",options:[0,1,2,3,4]}}},a=({children:e})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),l={decorators:[e=>u.jsx("div",{style:{width:360,maxWidth:"100%"},children:u.jsx(e,{})})]},o={name:"Варианты",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 360px)",gap:"8px 24px",alignItems:"start",overflowX:"auto",maxWidth:"100%"},children:[u.jsx(a,{children:"Size=Large"}),u.jsx(a,{children:"Size=Small"}),u.jsx(t,{size:"lg",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`}),u.jsx(t,{size:"sm",title:"Пока ничего нет",subtitle:`Попробуйте изменить фильтры
или загляните позже`}),u.jsx(a,{children:"Show subtitle=Off"}),u.jsx(a,{children:"Show subtitle=Off"}),u.jsx(t,{size:"lg",title:"Пока ничего нет"}),u.jsx(t,{size:"sm",title:"Пока ничего нет"}),u.jsx(a,{children:"Show visual=Off"}),u.jsx(a,{children:"Show visual=Off"}),u.jsx(t,{size:"lg",visual:!1,title:"Пока ничего нет",subtitle:"Попробуйте изменить фильтры"}),u.jsx(t,{size:"sm",visual:!1,title:"Пока ничего нет",subtitle:"Попробуйте изменить фильтры"}),u.jsx(a,{children:"Show button=On"}),u.jsx(a,{children:"Show button=On"}),u.jsx(t,{size:"lg",title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры, чтобы увидеть больше вариантов",action:u.jsx(g,{})}),u.jsx(t,{size:"sm",title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры",action:u.jsx(g,{})})]})},g=()=>u.jsx(m4,{variant:"ghost",size:48,radius:"full",children:"Сбросить фильтры"}),c={name:"Картинки",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>u.jsx("div",{style:{display:"flex",gap:24},children:["search","trip","suitcase"].map(e=>u.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"center"},children:[u.jsx(t,{visual:e,size:"lg",title:"",style:{padding:0,width:160}}),u.jsx(a,{children:e==="search"?"Search":e==="trip"?"Test":"213"})]},e))})},D=[["Бишкек","340 предложений ∙ Кыргызстан"],["Каракол","340 предложений ∙ Кыргызстан"],["Алматы","340 предложений ∙ Казахстан"],["Астана","340 предложений ∙ Казахстан"],["Кок-Бел","4 предложения ∙ Кыргызстан"],["Ала-Арча","12 предложений ∙ Кыргызстан"]],d={name:"Кейс: поиск направления — Ничего не найдено",parameters:{controls:{disable:!0}},render:function(){const[r,i]=K.useState("аффыаф3124");return u.jsx(t4,{overlay:u.jsx(l4,{variant:"search",surface:"solid",title:"Куда отправимся?",left:u.jsx(o4,{size:40,icon:u.jsx(d4,{direction:"left",size:24}),label:"Назад",bold:!0}),bottom:u.jsx(c4,{value:r,onValueChange:i,placeholder:"Город или место"}),statusBar:u.jsx(a4,{}),style:{position:"absolute",top:0,left:0,right:0}}),children:u.jsxs("div",{style:{paddingTop:s4.statusBar+64+56},children:[u.jsx(t,{size:"sm",visual:"suitcase",title:"Ничего не найдено",subtitle:"Но вот, что у нас есть"}),u.jsx("p",{className:"im-16-b",style:{margin:0,padding:"16px 16px 8px"},children:"Популярные направления"}),D.map(([E,n],h)=>u.jsx(i4,{icon:u.jsx(r4,{}),iconSize:40,title:E,subtitle:n,divider:h<D.length-1},E))]})})},play:async({canvasElement:e})=>{const r=w4(e);await x(r.getByRole("heading",{name:"Ничего не найдено"})).toBeInTheDocument(),await x(r.getByText("Но вот, что у нас есть")).toBeInTheDocument()}},m={name:"Кейс: Результаты — Нет подходящих вариантов",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(e,{})})],args:{title:"Нет подходящих вариантов",subtitle:"Попробуйте изменить направление  или даты поездки",size:"lg"}},p={name:"Кейс: Фильтр — Ничего не нашлось",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx(e,{})})],args:{title:"Ничего не нашлось",subtitle:"Попробуйте изменить фильтры, чтобы увидеть больше вариантов",size:"lg",action:u.jsx(g,{})}},_4=["Playground","Variants","Visuals","CaseDestinationNotFound","CaseNoResults","CaseFiltersEmpty"];var f,v,y,C,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 360,
    maxWidth: '100%'
  }}>
        <Story />
      </div>]
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Меняй размер, картинку, тексты. «Show button» — это слот `action`.",...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.description}}};var F,S,j,A,w;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source},description:{story:"Figma 337:34: Size Large | Small. Подзаголовок, картинка и кнопка включаются по отдельности.",...(w=(A=o.parameters)==null?void 0:A.docs)==null?void 0:w.description}}};var z,_,N,R,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:"Figma Visual 343:6226: Search, Test, 213. Картинки 3D, в коде это растровые файлы из Figma.",...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var L,O,I,k,V;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Кейс: поиск направления — Ничего не найдено',
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
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source},description:{story:`«Куда отправимся?»: в поиске набрали «аффыаф3124» и ничего не нашлось. Сверху Appbar с полем поиска, под ним EmptyState Small
(«Ничего не найдено» / «Но вот, что у нас есть»), дальше популярные направления. Figma «Выходные», «Ничего не найдено» 415:26857.`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.description}}};var P,q,H,W,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Кейс: Результаты — Нет подходящих вариантов',
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
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"«Результаты поиска»: ни одного предложения под выбранное направление и даты. Large, без кнопки (Figma «Не найдено» 1464:66793).",...(M=(W=m.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var U,G,Q,X,$;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Кейс: Фильтр — Ничего не нашлось',
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
}`,...(Q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"«Фильтр»: фильтры отсекли всё. Large с кнопкой «Сбросить фильтры» — Ghost 48 с радиусом Full, как в Figma (1550:142562).",...($=(X=p.parameters)==null?void 0:X.docs)==null?void 0:$.description}}};const q4=Object.freeze(Object.defineProperty({__proto__:null,CaseDestinationNotFound:d,CaseFiltersEmpty:p,CaseNoResults:m,Playground:l,Variants:o,Visuals:c,__namedExportsOrder:_4,default:z4},Symbol.toStringTag,{value:"Module"}));export{d as C,q4 as E,l as P,o as V,c as a,m as b,p as c};
