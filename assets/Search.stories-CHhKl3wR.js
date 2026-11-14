import{j as s}from"./iframe-Dr5ib33t.js";import{S as a}from"./Search-C10A3p51.js";import"./preload-helper-Dp1pzeXC.js";import"./useControllableState-BCXXtwcd.js";import"./parts-BsPlZssE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,j={title:"Components/Inputs/Search",component:a,tags:["autodocs"],parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=324-1260"}},decorators:[f=>s.jsx("div",{style:{width:328,maxWidth:"100%"},children:s.jsx(f,{})})],args:{placeholder:"Поиск",defaultValue:"",disabled:!1,onSearch:t(),onValueChange:t()},argTypes:{value:{control:!1},focused:{control:!1}}},e={},r={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>s.jsxs("div",{style:{display:"grid",gap:20},children:[s.jsx(a,{}),s.jsx(a,{focused:!0,defaultValue:"Поиск"})]})},_=["Playground","States"];var o,n,d,u,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source},description:{story:"Tap, type — the field and the glass darken, × springs in; Enter = onSearch; Escape clears.",...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.description}}};var i,p,l,m,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:"Figma 324:1260: Default and Focused (forced here).",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};export{e as Playground,r as States,_ as __namedExportsOrder,j as default};
