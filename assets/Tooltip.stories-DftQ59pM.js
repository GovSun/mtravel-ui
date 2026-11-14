import{r as T,j as u}from"./iframe-Dr5ib33t.js";import{T as t}from"./Tooltip-CQxfA-vT.js";import{S as h}from"./SwapNumber--J413Mcm.js";import{B as a}from"./Button-DFQPOwGN.js";const B={title:"Components/Tooltip",component:t,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1271-23"}},args:{children:"81"},argTypes:{children:{control:"text"}}},s={},e={render:()=>u.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[u.jsx(t,{children:"7"}),u.jsx(t,{children:"81"}),u.jsx(t,{children:"3 000 ⃀"}),u.jsx(t,{children:"50 000 ⃀"})]})},r={render:function(){const[j,o]=T.useState(12500);return u.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[u.jsx(t,{children:u.jsx(h,{value:j,format:n=>`${n.toLocaleString("ru-RU")} ⃀`})}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx(a,{size:40,variant:"secondary",onClick:()=>o(n=>Math.max(0,n-500)),children:"−500"}),u.jsx(a,{size:40,variant:"secondary",onClick:()=>o(n=>n+500),children:"+500"})]})]})}},E=["Playground","Values","Swapping"];var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,m,x,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-end'
  }}>
      <Tooltip>7</Tooltip>
      <Tooltip>81</Tooltip>
      <Tooltip>3 000 ⃀</Tooltip>
      <Tooltip>50 000 ⃀</Tooltip>
    </div>
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Пузырь тянется под значение, минимум 36 px.",...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var y,f,v,C,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Со SwapNumber внутри: сумма меняется целиком, мягко, через размытие, и не выходит за пузырь. Так подсказка работает в RangeSlider.",...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.description}}};const R=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,Swapping:r,Values:e,__namedExportsOrder:E,default:B},Symbol.toStringTag,{value:"Module"}));export{s as P,r as S,R as T,e as V};
