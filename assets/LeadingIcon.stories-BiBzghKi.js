import{j as e}from"./iframe-DuqTOznb.js";import{C as d}from"./Cell-DbWJlVzG.js";import{L as n}from"./LeadingIcon-B28I7Mlv.js";import{L as t}from"./places-z-kxph-t.js";import{b as u}from"./time-CsMT4GVj.js";import{a as c}from"./general-DYSfllt2.js";const l={Часы:e.jsx(u,{}),Пин:e.jsx(t,{}),"Поиск (линейная)":e.jsx(c,{})},D={title:"Components/Leading icon",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=168-18687"},layout:"centered"},args:{size:40,background:!0,skeleton:!1,icon:e.jsx(t,{})},argTypes:{size:{control:"inline-radio",options:[32,40]},icon:{control:"select",options:Object.keys(l),mapping:l}}},i={},r={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 56px)",gap:16,alignItems:"center"},children:[32,40].flatMap(o=>[e.jsx(n,{size:o,icon:e.jsx(u,{})},`${o}a`),e.jsx(n,{size:o,background:!0,icon:e.jsx(u,{})},`${o}b`),e.jsx(n,{size:o,background:!0,skeleton:!0},`${o}c`)])})},s={name:"Сплошные и линейные иконки",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(n,{size:32,icon:e.jsx(t,{})}),e.jsx(n,{size:32,icon:e.jsx(c,{})}),e.jsx(n,{size:40,background:!0,icon:e.jsx(c,{})})]})},a={name:"Кейсы / Иконка в строках",parameters:{controls:{disable:!0},layout:"fullscreen"},render:()=>e.jsxs("div",{style:{width:393,maxWidth:"100%"},children:[e.jsx(d,{title:"Бишкек",subtitle:"340 предложений · Кыргызстан",icon:e.jsx(t,{}),iconSize:40,divider:!0}),e.jsx(d,{title:"Каракол",icon:e.jsx(u,{}),iconSize:32})]})},w=["Playground","Variants","SolidAndLinear","CaseInRows"];var p,m,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,j,y,b,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 56px)',
    gap: 16,
    alignItems: 'center'
  }}>
      {([32, 40] as const).flatMap(size => [<LeadingIcon key={\`\${size}a\`} size={size} icon={<ClockNineIcon />} />, <LeadingIcon key={\`\${size}b\`} size={size} background icon={<ClockNineIcon />} />, <LeadingIcon key={\`\${size}c\`} size={size} background skeleton />])}
    </div>
}`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.source},description:{story:"Figma 168:18687: Size × Background × Skeleton.",...(S=(b=r.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var I,f,k,z,B;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Сплошные и линейные иконки',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <LeadingIcon size={32} icon={<LocationPinIcon />} />
      <LeadingIcon size={32} icon={<SearchIcon />} />
      <LeadingIcon size={40} background icon={<SearchIcon />} />
    </div>
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"Solid and linear icons both follow `currentColor`: the linear search icon stays an outline (Field, Search and Select use it at 32).",...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.description}}};var h,C,L,v,A;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Кейсы / Иконка в строках',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: () => <div style={{
    width: 393,
    maxWidth: '100%'
  }}>
      <Cell title="Бишкек" subtitle="340 предложений · Кыргызстан" icon={<LocationPinIcon />} iconSize={40} divider />
      <Cell title="Каракол" icon={<ClockNineIcon />} iconSize={32} />
    </div>
}`,...(L=(C=a.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"The icon in a list: a 40 px tile in the row of «Популярные направления» and a bare 32 px icon in a short row.",...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};const O=Object.freeze(Object.defineProperty({__proto__:null,CaseInRows:a,Playground:i,SolidAndLinear:s,Variants:r,__namedExportsOrder:w,default:D},Symbol.toStringTag,{value:"Module"}));export{a as C,O as L,i as P,s as S,r as V};
