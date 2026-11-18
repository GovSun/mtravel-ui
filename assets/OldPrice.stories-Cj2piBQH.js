import{j as r}from"./iframe-DuqTOznb.js";import{C as D}from"./Caption-C6jupY-b.js";import{F as $}from"./figma-BZstJmpc.js";import{O as o}from"./OldPrice-IN1_EWMK.js";const{expect:c,within:M}=__STORYBOOK_MODULE_TEST__,N={title:"Components/OldPrice",component:o,parameters:{design:{type:"figma",url:$("679-27")}},args:{children:"2 200 ⃀",size:14},argTypes:{children:{control:"text"},size:{control:"inline-radio",options:[12,14,16,18]},label:{control:"text"}}},a={},n={name:"Все размеры",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-end",flexWrap:"wrap"},children:[12,14,16,18].map((e,s)=>r.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[r.jsx(D,{children:`${e} (Figma ${11+2*s})`}),r.jsx(o,{size:e,children:"2 200 ⃀"})]},e))})},t={name:"Разная длина суммы",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},children:["90 ⃀","2 200 ⃀","53 679 ⃀","1 253 679 ⃀"].map(e=>r.jsx(o,{children:e},e))})},u={name:"Кейсы · Рядом с ценой",parameters:{controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"grid",gap:12},children:[["14",14],["12",12],["16",16],["18",18]].map(([e,s])=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx("span",{className:`im-${e}-b`,children:"6 390 ⃀"}),r.jsx(o,{size:s,children:"2 200 ⃀"})]},e))})},i={name:"Тест: читается как «Было …»",parameters:{controls:{disable:!0}},render:()=>r.jsx(o,{children:"2 200 ⃀"}),play:async({canvasElement:e})=>{const s=M(e).getByText("2 200 ⃀",{exact:!1});await c(s.tagName).toBe("S"),await c(s.textContent).toBe("Было 2 200 ⃀")}},L=["Playground","Sizes","Lengths","BesidePrice","Accessibility"];var d,l,p,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Меняй сумму: зачёркивающая линия всегда ровно по тексту.",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var x,y,B,f,C;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Все размеры',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  }}>
      {([12, 14, 16, 18] as const).map((size, i) => <div key={size} style={{
      display: 'grid',
      gap: 8,
      justifyItems: 'start'
    }}>
          <Caption>{\`\${size} (Figma \${11 + 2 * i})\`}</Caption>
          <OldPrice size={size}>2 200 ⃀</OldPrice>
        </div>)}
    </div>
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:"The Figma matrix 679:27: Size 11 | 13 | 15 | 17, bound to IM-12 | 14 | 16 | 18 R.",...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.description}}};var h,v,b,O,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Разная длина суммы',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {['90 ⃀', '2 200 ⃀', '53 679 ⃀', '1 253 679 ⃀'].map(v => <OldPrice key={v}>{v}</OldPrice>)}
    </div>
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"The line is as long as the sum: one, three, five, seven digits.",...(j=(O=t.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var P,S,E,w,z;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Кейсы · Рядом с ценой',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {([['14', 14], ['12', 12], ['16', 16], ['18', 18]] as const).map(([w, size]) => <div key={w} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }}>
          <span className={\`im-\${w}-b\`}>6 390 ⃀</span>
          <OldPrice size={size}>2 200 ⃀</OldPrice>
        </div>)}
    </div>
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:"Next to the price on a card: price IM-14 B, the old one beside it.",...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.description}}};var F,_,A,I,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Тест: читается как «Было …»',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <OldPrice>2 200 ⃀</OldPrice>,
  play: async ({
    canvasElement
  }) => {
    const el = within(canvasElement).getByText('2 200 ⃀', {
      exact: false
    });
    await expect(el.tagName).toBe('S');
    await expect(el.textContent).toBe('Было 2 200 ⃀');
  }
}`,...(A=(_=i.parameters)==null?void 0:_.docs)==null?void 0:A.source},description:{story:"A screen reader gets «Было 2 200 ⃀».",...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.description}}};const K=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:i,BesidePrice:u,Lengths:t,Playground:a,Sizes:n,__namedExportsOrder:L,default:N},Symbol.toStringTag,{value:"Module"}));export{u as B,t as L,a as P,K as S,n as a};
