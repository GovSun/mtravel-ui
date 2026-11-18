import{j as u,r as R}from"./iframe-DuqTOznb.js";import{T as e,R as b}from"./RangeSlider-Cqt63g_z.js";import{S as w}from"./SwapNumber-zCGpbL_Z.js";import{B as d}from"./Button-CKwNO4NU.js";const V={title:"Components/Tooltip",component:e,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1271-23"}},args:{children:"81"},argTypes:{children:{control:"text"}}},a={},r={render:()=>u.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[u.jsx(e,{children:"7"}),u.jsx(e,{children:"50000"}),u.jsx(e,{children:"81"}),u.jsx(e,{children:"3 000 ⃀"}),u.jsx(e,{children:"50 000 ⃀"})]})},t={render:function(){const[A,i]=R.useState(12500);return u.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[u.jsx(e,{children:u.jsx(w,{value:A,format:s=>`${s.toLocaleString("ru-RU")} ⃀`})}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx(d,{size:40,variant:"secondary",onClick:()=>i(s=>Math.max(0,s-500)),children:"−500"}),u.jsx(d,{size:40,variant:"secondary",onClick:()=>i(s=>s+500),children:"+500"})]})]})}},n={name:"Кейс: сумма над ползунком",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{width:361,maxWidth:"100%",padding:"56px 0 8px"},children:u.jsx(b,{min:0,max:18e4,step:500,defaultValue:[8e3,64e3],format:o=>`${o.toLocaleString("ru-RU")} ⃀`,"aria-label":"Цена"})})},P=["Playground","Values","Swapping","CasePriceSlider"];var l,p,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,x,g,y,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end'
  }}>
      <Tooltip>7</Tooltip>
      <Tooltip>50000</Tooltip>
      <Tooltip>81</Tooltip>
      <Tooltip>3 000 ⃀</Tooltip>
      <Tooltip>50 000 ⃀</Tooltip>
    </div>
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"Пузырь тянется под значение: 8 px по бокам, высота 28. «50000» — значение из Figma.",...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.description}}};var v,S,f,B,E;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render() {
    const [v, setV] = useState(12500);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }}>
        <Tooltip>
          <SwapNumber value={v} format={x => \`\${x.toLocaleString('ru-RU')} ⃀\`} />
        </Tooltip>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button size={40} variant="secondary" onClick={() => setV(x => Math.max(0, x - 500))}>
            −500
          </Button>
          <Button size={40} variant="secondary" onClick={() => setV(x => x + 500)}>
            +500
          </Button>
        </div>
      </div>;
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Со SwapNumber внутри: сумма меняется целиком, мягко, через размытие, и не выходит за пузырь. Так подсказка работает в RangeSlider.",...(E=(B=t.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};var h,j,D,F,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Кейс: сумма над ползунком',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 361,
    maxWidth: '100%',
    padding: '56px 0 8px'
  }}>
      <RangeSlider min={0} max={180000} step={500} defaultValue={[8000, 64000]} format={v => \`\${v.toLocaleString('ru-RU')} ⃀\`} aria-label="Цена" />
    </div>
}`,...(D=(j=n.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"Кейс: «Цена» в фильтрах. Пузырь стоит над ползунком, пока его держат; сам слайдер двигает его на пружине. Потяни ползунок.",...(T=(F=n.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};const I=Object.freeze(Object.defineProperty({__proto__:null,CasePriceSlider:n,Playground:a,Swapping:t,Values:r,__namedExportsOrder:P,default:V},Symbol.toStringTag,{value:"Module"}));export{n as C,a as P,t as S,I as T,r as V};
