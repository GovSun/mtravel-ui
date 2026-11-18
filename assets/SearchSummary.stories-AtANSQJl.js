import{r as _,j as u}from"./iframe-DuqTOznb.js";import{S as r}from"./SearchSummary-oxe_VM3Q.js";import{C as R,F as O}from"./FilterChip-1LeuoSUe.js";import{C as P}from"./Chip-KAmC-4ZV.js";const{expect:p,fn:d,userEvent:W,within:G}=__STORYBOOK_MODULE_TEST__,H={title:"Components/SearchSummary",component:r,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=806-5570"}},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx("div",{style:{width:361,maxWidth:"100%"},children:u.jsx(e,{})})})],args:{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",variant:"dark",disabled:!1,onClick:d()},argTypes:{icon:{control:!1},forcePressed:{control:!1}}},i={},a={name:"Все варианты",parameters:{controls:{disable:!0},layout:"padded"},decorators:[e=>u.jsx(e,{})],render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:16,width:248,maxWidth:"100%"},children:[u.jsx(r,{variant:"dark",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:d()}),u.jsx("div",{style:{padding:12,margin:-12,borderRadius:24,background:"linear-gradient(135deg, #6c8cae, #d9b38c)"},children:u.jsx(r,{variant:"glass",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:d()})}),u.jsx(r,{variant:"light",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:d()}),u.jsx(r,{variant:"light",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",forcePressed:!0})]})},t={name:"Кейс: каталог, поиск и фильтры",parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx(e,{})],render:function(){const[o,l]=_.useState({}),T=Object.values(o).filter(Boolean).length;return u.jsxs("div",{style:{display:"grid",gap:4,width:393,maxWidth:"100%",padding:"12px 0",background:"var(--color-bg-surface)"},children:[u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(r,{variant:"light",title:"Кыргызстан, Бишкек",subtitle:"29 мая, 1 участник"})}),u.jsxs(R,{layout:"scroll",gap:6,"aria-label":"Фильтры",children:[u.jsx(O,{count:T}),["Вид активности","Формат","Длительность","Цена","Удобства"].map(s=>u.jsx(P,{trailing:"chevron",selected:!!o[s],"aria-haspopup":"dialog",onClick:()=>l(c=>({...c,[s]:!c[s]})),children:s},s))]})]})}},n={name:"Тест: нажатие и имя",play:async({canvasElement:e,args:o})=>{const l=G(e).getByRole("button",{name:/Бишкек → Москва/});await p(l).toHaveAccessibleName(/29 мая/),await W.click(l),await p(o.onClick).toHaveBeenCalledTimes(1)}},V=["Playground","Variants","CatalogCase","BehaviourTest"];var m,g,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var B,h,y,b,x;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'padded'
  },
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: 16,
    width: 248,
    maxWidth: '100%'
  }}>
      <SearchSummary variant="dark" title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" onClick={fn()} />
      <div style={{
      padding: 12,
      margin: -12,
      borderRadius: 24,
      background: 'linear-gradient(135deg, #6c8cae, #d9b38c)' /* demo photo, story only */
    }}>
        <SearchSummary variant="glass" title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" onClick={fn()} />
      </div>
      <SearchSummary variant="light" title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" onClick={fn()} />
      <SearchSummary variant="light" title="Бишкек → Москва" subtitle="29 мая – 2 июн, 1 пассажир" forcePressed />
    </div>
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:`Figma «search» 806:5570 (Property 1 = filter | filter 2 | 3): свёрнутая форма поиска — маршрут и даты в две строки.
Нажатие раскрывает форму. Тёмная — на белом, стеклянная — поверх фото или карты, светлая — серое поле.`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var v,A,E,f,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Кейс: каталог, поиск и фильтры',
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
  decorators: [Story => <Story />],
  render: function Render() {
    const [applied, setApplied] = useState<Record<string, boolean>>({});
    const count = Object.values(applied).filter(Boolean).length;
    return <div style={{
      display: 'grid',
      gap: 4,
      width: 393,
      maxWidth: '100%',
      padding: '12px 0',
      background: 'var(--color-bg-surface)'
    }}>
        <div style={{
        padding: '0 16px'
      }}>
          <SearchSummary variant="light" title="Кыргызстан, Бишкек" subtitle="29 мая, 1 участник" />
        </div>
        <ChipGroup layout="scroll" gap={6} aria-label="Фильтры">
          <FilterChip count={count} />
          {['Вид активности', 'Формат', 'Длительность', 'Цена', 'Удобства'].map(q => <Chip key={q} trailing="chevron" selected={!!applied[q]} aria-haspopup="dialog" onClick={() => setApplied(a => ({
          ...a,
          [q]: !a[q]
        }))}>
              {q}
            </Chip>)}
        </ChipGroup>
      </div>;
  }
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source},description:{story:`Каталог «Результаты поиска» (Figma «Выходные»): сверху свёрнутый поиск «Кыргызстан, Бишкек · 29 мая, 1 участник»,
под ним фильтры — значок «все фильтры» и быстрые фильтры в одну прокручиваемую строку.`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var F,D,j,k,w;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Тест: нажатие и имя',
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Бишкек → Москва/
    });
    await expect(button).toHaveAccessibleName(/29 мая/);
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source},description:{story:"Tap opens the form again (the owner's `onClick`); the name is both lines; a disabled summary does not fire.",...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.description}}};const N=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:n,CatalogCase:t,Playground:i,Variants:a,__namedExportsOrder:V,default:H},Symbol.toStringTag,{value:"Module"}));export{t as C,i as P,N as S,a as V};
