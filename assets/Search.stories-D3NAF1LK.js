import{j as e}from"./iframe-DuqTOznb.js";import{S as h}from"./Search-qejZ8oNQ.js";const{expect:a,fn:E,userEvent:r,waitFor:$,within:y}=__STORYBOOK_MODULE_TEST__,ee={title:"Components/Search",component:h,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=324-1260"}},decorators:[u=>e.jsx("div",{style:{width:328,maxWidth:"100%"},children:e.jsx(u,{})})],args:{placeholder:"Поиск",defaultValue:"",disabled:!1,onSearch:E(),onValueChange:E()},argTypes:{value:{control:!1},focused:{control:!1}}},o={},c={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:20},children:[e.jsx(h,{}),e.jsx(h,{focused:!0,defaultValue:"Поиск"})]})},i={name:"Длинный запрос",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[u=>e.jsx(u,{})],render:()=>e.jsx("div",{style:{width:328,maxWidth:"100%",margin:"0 auto"},children:e.jsx(h,{defaultValue:"экскурсия на озеро Иссык-Куль с ночёвкой в юрте и конной прогулкой"})})},l={name:"Кейс: поиск города или места",parameters:{controls:{disable:!0},layout:"padded"},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[u=>e.jsx(u,{})],render:()=>e.jsxs("div",{style:{display:"grid",gap:12,width:361,maxWidth:"100%"},children:[e.jsx(h,{placeholder:"Город или место"}),e.jsx(h,{placeholder:"Город или место",defaultValue:"Кыргызстан",focused:!0})]})},d={name:"Тест: ввод, крестик, поиск",play:async({canvasElement:u,args:t})=>{const n=y(u),s=n.getByRole("searchbox",{name:"Поиск"});await a(n.queryByRole("button",{name:"Очистить"})).toBeNull(),await r.click(s),await r.type(s,"Иссык-Куль"),await a(t.onValueChange).toHaveBeenLastCalledWith("Иссык-Куль"),await r.keyboard("{Enter}"),await a(t.onSearch).toHaveBeenLastCalledWith("Иссык-Куль");const Z=await n.findByRole("button",{name:"Очистить"});await r.click(Z),await a(s).toHaveValue(""),await a(s).toHaveFocus(),await $(()=>a(n.queryByRole("button",{name:"Очистить"})).toBeNull()),await r.type(s,"Бишкек"),await r.keyboard("{Escape}"),await a(s).toHaveValue("")}},p={name:"Тест: имя и клавиатура",args:{placeholder:"Город или место","aria-label":"Найти город"},play:async({canvasElement:u})=>{const t=y(u).getByRole("searchbox",{name:"Найти город"});await a(t).toHaveAttribute("enterkeyhint","search"),await a(t).toHaveAttribute("autocomplete","off")}},m={name:"Тест: style на корне",args:{className:"custom",style:{maxWidth:300}},play:async({canvasElement:u})=>{const t=y(u).getByRole("searchbox"),n=t.closest(".custom");await a(n.style.maxWidth).toBe("300px"),await a(t.style.maxWidth).toBe("")}},ue=["Playground","States","LongText","PlaceSearchCase","BehaviourTest","NameTest","RootStyleTest"];var w,B,v,x,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source},description:{story:"Tap, type — the × springs in; Enter = onSearch; Escape clears.",...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,f,A,S,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 20
  }}>
      <Search />
      <Search focused defaultValue="Поиск" />
    </div>
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source},description:{story:"Figma 324:1260: Default and Focused (forced here).",...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var D,F,R,j,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Длинный запрос',
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
  render: () => <div style={{
    width: 328,
    maxWidth: '100%',
    margin: '0 auto'
  }}>
      <Search defaultValue="экскурсия на озеро Иссык-Куль с ночёвкой в юрте и конной прогулкой" />
    </div>
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source},description:{story:"A long query: at rest it ends with «…», while typing it scrolls with the caret.",...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var T,W,H,V,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Кейс: поиск города или места',
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
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 361,
    maxWidth: '100%'
  }}>
      <Search placeholder="Город или место" />
      <Search placeholder="Город или место" defaultValue="Кыргызстан" focused />
    </div>
}`,...(H=(W=l.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:"Поиск места на экране выбора города (Figma «Поиск активен»): плейсхолдер «Город или место», введённый запрос.",...(_=(V=l.parameters)==null?void 0:V.docs)==null?void 0:_.description}}};var L,N,O,P,q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Тест: ввод, крестик, поиск',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox', {
      name: 'Поиск'
    });
    await expect(canvas.queryByRole('button', {
      name: 'Очистить'
    })).toBeNull();
    await userEvent.click(input);
    await userEvent.type(input, 'Иссык-Куль');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('Иссык-Куль');
    await userEvent.keyboard('{Enter}');
    await expect(args.onSearch).toHaveBeenLastCalledWith('Иссык-Куль');
    const clear = await canvas.findByRole('button', {
      name: 'Очистить'
    });
    await userEvent.click(clear);
    await expect(input).toHaveValue('');
    await expect(input).toHaveFocus();
    await waitFor(() => expect(canvas.queryByRole('button', {
      name: 'Очистить'
    })).toBeNull());
    await userEvent.type(input, 'Бишкек');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('');
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:"Interaction test: the name comes from the placeholder, typing reports the text, the × appears, clears and keeps focus, Enter searches, Escape clears.",...(q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:q.description}}};var M,K,U,z,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Тест: имя и клавиатура',
  args: {
    placeholder: 'Город или место',
    'aria-label': 'Найти город'
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('searchbox', {
      name: 'Найти город'
    });
    await expect(input).toHaveAttribute('enterkeyhint', 'search');
    await expect(input).toHaveAttribute('autocomplete', 'off');
  }
}`,...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:"The accessible name is `aria-label` when given, otherwise the placeholder; the keyboard hints are for search.",...(G=(z=p.parameters)==null?void 0:z.docs)==null?void 0:G.description}}};var I,J,X,Y,Q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Тест: style на корне',
  args: {
    className: 'custom',
    style: {
      maxWidth: 300
    }
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole('searchbox');
    const root = input.closest('.custom') as HTMLElement;
    await expect(root.style.maxWidth).toBe('300px');
    await expect(input.style.maxWidth).toBe('');
  }
}`,...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"`style` and `className` go to the root, the input keeps its own.",...(Q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};const ne=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:d,LongText:i,NameTest:p,PlaceSearchCase:l,Playground:o,RootStyleTest:m,States:c,__namedExportsOrder:ue,default:ee},Symbol.toStringTag,{value:"Module"}));export{i as L,o as P,ne as S,c as a,l as b};
