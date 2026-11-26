import{j as u}from"./iframe-DyD5Yel4.js";import{S as r}from"./SearchSummary-yWxmhw0k.js";const{expect:o,fn:s,userEvent:h,within:S}=__STORYBOOK_MODULE_TEST__,F={title:"Components/SearchSummary",component:r,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=806-5570"}},decorators:[a=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx("div",{style:{width:361,maxWidth:"100%"},children:u.jsx(a,{})})})],args:{title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",variant:"dark",disabled:!1,onClick:s()},argTypes:{icon:{control:!1},forcePressed:{control:!1}}},n={},e={name:"Все варианты",parameters:{controls:{disable:!0},layout:"padded"},decorators:[a=>u.jsx(a,{})],render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:16,width:248,maxWidth:"100%"},children:[u.jsx(r,{variant:"dark",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:s()}),u.jsx("div",{style:{padding:12,margin:-12,borderRadius:24,background:"linear-gradient(135deg, #6c8cae, #d9b38c)"},children:u.jsx(r,{variant:"glass",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:s()})}),u.jsx(r,{variant:"light",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",onClick:s()}),u.jsx(r,{variant:"light",title:"Бишкек → Москва",subtitle:"29 мая – 2 июн, 1 пассажир",forcePressed:!0})]})},t={name:"Тест: нажатие и имя",play:async({canvasElement:a,args:v})=>{const i=S(a).getByRole("button",{name:/Бишкек → Москва/});await o(i).toHaveAccessibleName(/29 мая/),await h.click(i),await o(v.onClick).toHaveBeenCalledTimes(1)}},f=["Playground","Variants","BehaviourTest"];var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,B,g,y;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(B=(p=e.parameters)==null?void 0:p.docs)==null?void 0:B.source},description:{story:`Figma «search» 806:5570 (Property 1 = filter | filter 2 | 3): свёрнутая форма поиска — маршрут и даты в две строки.
Нажатие раскрывает форму. Тёмная — на белом, стеклянная — поверх фото или карты, светлая — серое поле.`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};var C,E,A,x,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(A=(E=t.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:`Каталог «Результаты поиска» (Figma «Выходные»): сверху свёрнутый поиск «Кыргызстан, Бишкек · 29 мая, 1 участник»,
под ним фильтры — значок «все фильтры» и быстрые фильтры в одну прокручиваемую строку.`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.description}}};const j=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:t,Playground:n,Variants:e,__namedExportsOrder:f,default:F},Symbol.toStringTag,{value:"Module"}));export{n as P,j as S,e as V};
