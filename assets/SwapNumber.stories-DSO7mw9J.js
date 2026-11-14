import{r as s,j as u}from"./iframe-Dr5ib33t.js";import{S as p}from"./SwapNumber--J413Mcm.js";import{R}from"./RollingNumber-sUZvUyU1.js";import{B as c}from"./Button-DFQPOwGN.js";const A=o=>`${o.toLocaleString("ru-RU")} ⃀`,M={title:"Components/SwapNumber",component:p,args:{value:12500,format:A},argTypes:{value:{control:{type:"number",step:500}},format:{control:!1}}},m=({children:o})=>u.jsx("span",{className:"im-28-b",style:{color:"var(--color-text-primary)"},children:o}),t={render:function(n){const[i,r]=s.useState(n.value);return s.useEffect(()=>r(n.value),[n.value]),u.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[u.jsx(m,{children:u.jsx(p,{value:i,format:n.format})}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx(c,{size:40,variant:"secondary",onClick:()=>r(e=>Math.max(0,e-500)),children:"−500"}),u.jsx(c,{size:40,variant:"secondary",onClick:()=>r(e=>e+500),children:"+500"}),u.jsx(c,{size:40,variant:"secondary",onClick:()=>r(Math.round(Math.random()*200)*500),children:"Случайно"})]})]})}},a={name:"Быстрая смена: целиком и по разрядам",render:function(n){const[i,r]=s.useState(12500),[e,b]=s.useState(!1),l=s.useRef(0);return s.useEffect(()=>{if(!e)return;const d=performance.now(),f=E=>{const N=(E-d)/3e3%1;r(Math.round((Math.sin(N*Math.PI*2-Math.PI/2)*.5+.5)*200)*500),l.current=requestAnimationFrame(f)};return l.current=requestAnimationFrame(f),()=>cancelAnimationFrame(l.current)},[e]),u.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,textAlign:"center"},children:[u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(m,{children:u.jsx(p,{value:i,format:n.format})}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:"SwapNumber"})]}),u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(m,{children:u.jsx(R,{value:i,format:n.format})}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:"RollingNumber"})]})]}),u.jsx(c,{size:40,variant:"secondary",onClick:()=>b(d=>!d),children:e?"Стоп":"Запустить"})]})}},k=["Playground","FastChanges"];var g,v,y,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    const [v, setV] = useState(args.value);
    useEffect(() => setV(args.value), [args.value]);
    return <div style={{
      display: 'grid',
      gap: 24,
      justifyItems: 'center'
    }}>
        <Big>
          <SwapNumber value={v} format={args.format} />
        </Big>
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
          <Button size={40} variant="secondary" onClick={() => setV(Math.round(Math.random() * 200) * 500)}>
            Случайно
          </Button>
        </div>
      </div>;
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Нажми: сумма меняется целиком. Больше — новая приходит снизу, меньше — сверху.",...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var C,j,B,F,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Быстрая смена: целиком и по разрядам',
  render: function Render(args) {
    const [v, setV] = useState(12500);
    const [run, setRun] = useState(false);
    const raf = useRef(0);
    useEffect(() => {
      if (!run) return;
      const start = performance.now();
      const tick = (now: number) => {
        // a drag that sweeps 0 → 100 000 and back in 3 s, one value per frame
        const t = (now - start) / 3000 % 1;
        setV(Math.round((Math.sin(t * Math.PI * 2 - Math.PI / 2) * 0.5 + 0.5) * 200) * 500);
        raf.current = requestAnimationFrame(tick);
      };
      raf.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf.current);
    }, [run]);
    return <div style={{
      display: 'grid',
      gap: 24,
      justifyItems: 'center'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        textAlign: 'center'
      }}>
          <div style={{
          display: 'grid',
          gap: 8
        }}>
            <Big>
              <SwapNumber value={v} format={args.format} />
            </Big>
            <span className="im-12-r" style={{
            color: 'var(--color-text-tertiary)'
          }}>
              SwapNumber
            </span>
          </div>
          <div style={{
          display: 'grid',
          gap: 8
        }}>
            <Big>
              <RollingNumber value={v} format={args.format} />
            </Big>
            <span className="im-12-r" style={{
            color: 'var(--color-text-tertiary)'
          }}>
              RollingNumber
            </span>
          </div>
        </div>
        <Button size={40} variant="secondary" onClick={() => setRun(r => !r)}>
          {run ? 'Стоп' : 'Запустить'}
        </Button>
      </div>;
  }
}`,...(B=(j=a.parameters)==null?void 0:j.docs)==null?void 0:B.source},description:{story:"Значение меняется каждый кадр, как при перетаскивании слайдера. Слева целиком (SwapNumber), справа по разрядам (RollingNumber).",...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.description}}};const I=Object.freeze(Object.defineProperty({__proto__:null,FastChanges:a,Playground:t,__namedExportsOrder:k,default:M},Symbol.toStringTag,{value:"Module"}));export{a as F,t as P,I as S};
