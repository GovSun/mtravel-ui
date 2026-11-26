import{j as s}from"./iframe-DyD5Yel4.js";import{C as b}from"./Caption-D_clnAXK.js";import{C as z}from"./home-CSe8AaHy.js";import{F as n}from"./FlagIcon-Lj2B5Mol.js";const{expect:i,within:S}=__STORYBOOK_MODULE_TEST__,v={title:"Components/FlagIcon",component:n,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=614-10997"},layout:"centered"},args:{country:"kg",size:40,aspect:"1:1"},argTypes:{country:{control:"inline-radio",options:["kg","kz","uz"]},size:{control:"inline-radio",options:[32,40]},aspect:{control:"inline-radio",options:["1:1","4:3"]},src:{control:!1}}},r={},t={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, 48px)",gap:16,alignItems:"center",justifyItems:"center"},children:[s.jsx("span",{}),["32 · 1:1","32 · 4:3","40 · 1:1","40 · 4:3"].map(e=>s.jsx(b,{children:e},e)),["kg","kz","uz"].map(e=>s.jsx(F,{country:e},e))]})};function F({country:e}){return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"im-12-r",children:e.toUpperCase()}),s.jsx(n,{country:e,size:32,aspect:"1:1",label:e}),s.jsx(n,{country:e,size:32,aspect:"4:3",label:e}),s.jsx(n,{country:e,size:40,aspect:"1:1",label:e}),s.jsx(n,{country:e,size:40,aspect:"4:3",label:e})]})}const a={name:"Кейсы · Флаги городов на главной",parameters:{controls:{disable:!0}},decorators:[e=>s.jsx("div",{style:{width:393,maxWidth:"100%"},children:s.jsx(e,{})})],render:()=>s.jsx("div",{style:{display:"grid",gap:16,padding:"16px",boxSizing:"border-box"},children:z.map(e=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[s.jsx(n,{country:e.flag,size:32}),s.jsx("span",{className:"im-14-b",children:e.title}),s.jsx("span",{className:"im-12-r",children:e.subtitle})]},e.title))}),play:async({canvasElement:e})=>{const B=e.querySelectorAll("img");await i(B.length).toBe(5),await i(S(e).queryAllByRole("img").length).toBe(0)}},C=["Playground","Variants","CaseCityFlags"];var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,p,d,m,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(4, 48px)',
    gap: 16,
    alignItems: 'center',
    justifyItems: 'center'
  }}>
      <span />
      {['32 · 1:1', '32 · 4:3', '40 · 1:1', '40 · 4:3'].map(t => <Caption key={t}>{t}</Caption>)}
      {(['kg', 'kz', 'uz'] as const).map(c => <FlagRow key={c} country={c} />)}
    </div>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Figma 614:10997: Size 32 | 40 × Aspect ratio 1:1 | 4:3, for the three flags of the DS set.",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var x,y,h,f,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Кейсы · Флаги городов на главной',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [Story => <div style={{
    width: 393,
    maxWidth: '100%'
  }}><Story /></div>],
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    padding: '16px',
    boxSizing: 'border-box'
  }}>
      {CITIES.map(c => <div key={c.title} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          <FlagIcon country={c.flag} size={32} />
          <span className="im-14-b">{c.title}</span>
          <span className="im-12-r">{c.subtitle}</span>
        </div>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const imgs = canvasElement.querySelectorAll('img');
    await expect(imgs.length).toBe(5);
    await expect(within(canvasElement).queryAllByRole('img').length).toBe(0); // decorative: the title names the country
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:`The flags of the home «Популярные направления» (Figma 4687:46152): the city cards carry the flag of the country, kg four times, uz once.
 On the card the flag is 24 px in its own corner (the card sets the size); here the DS sizes 32 and 40 are shown.`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};const k=Object.freeze(Object.defineProperty({__proto__:null,CaseCityFlags:a,Playground:r,Variants:t,__namedExportsOrder:C,default:v},Symbol.toStringTag,{value:"Module"}));export{a as C,k as F,r as P,t as V};
