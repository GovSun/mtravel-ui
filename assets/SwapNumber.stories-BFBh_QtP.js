import{r as s,j as u}from"./iframe-DyD5Yel4.js";import{S as m}from"./SwapNumber-CCAZxiM8.js";import{B as l}from"./Button-grGIhY78.js";import{R as _}from"./RollingNumber-Dqz4KuU3.js";const{expect:g,userEvent:z,waitFor:P,within:f}=__STORYBOOK_MODULE_TEST__,T=n=>`${n.toLocaleString("ru-RU")} ⃀`,O={title:"Components/SwapNumber",component:m,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345"}},args:{value:12500,format:T},argTypes:{value:{control:{type:"number",step:500}},format:{control:!1}}},d=({children:n})=>u.jsx("span",{className:"im-28-b",style:{color:"var(--color-text-primary)"},children:n}),o={render:function(e){const[t,r]=s.useState(e.value);return s.useEffect(()=>r(e.value),[e.value]),u.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[u.jsx(d,{children:u.jsx(m,{value:t,format:e.format})}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx(l,{size:40,variant:"secondary",onClick:()=>r(a=>Math.max(0,a-500)),children:"−500"}),u.jsx(l,{size:40,variant:"secondary",onClick:()=>r(a=>a+500),children:"+500"}),u.jsx(l,{size:40,variant:"secondary",onClick:()=>r(Math.round(Math.random()*200)*500),children:"Случайно"})]})]})}},i={name:"Быстрая смена: целиком и по разрядам",render:function(e){const[t,r]=s.useState(12500),[a,k]=s.useState(!1),p=s.useRef(0);return s.useEffect(()=>{if(!a)return;const y=performance.now(),v=V=>{const I=(V-y)/3e3%1;r(Math.round((Math.sin(I*Math.PI*2-Math.PI/2)*.5+.5)*200)*500),p.current=requestAnimationFrame(v)};return p.current=requestAnimationFrame(v),()=>cancelAnimationFrame(p.current)},[a]),u.jsxs("div",{style:{display:"grid",gap:24,justifyItems:"center"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,textAlign:"center"},children:[u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(d,{children:u.jsx(m,{value:t,format:e.format})}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:"SwapNumber"})]}),u.jsxs("div",{style:{display:"grid",gap:8},children:[u.jsx(d,{children:u.jsx(_,{value:t,format:e.format})}),u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:"RollingNumber"})]})]}),u.jsx(l,{size:40,variant:"secondary",onClick:()=>k(y=>!y),children:a?"Стоп":"Запустить"})]})}},c={name:"Кейс: сумма в фильтре цены",parameters:{controls:{disable:!0}},render:function(e){const[t,r]=s.useState(12500);return u.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[u.jsx(d,{children:u.jsx(m,{value:t,format:e.format,"data-testid":"price"})}),u.jsx(l,{size:44,variant:"secondary",onClick:()=>r(3e4),children:"До 30 000"})]})},play:async({canvasElement:n})=>{const e=f(n).getByTestId("price");await g(e).toHaveTextContent("12"),await z.click(f(n).getByRole("button",{name:"До 30 000"})),await P(()=>{var t;return g((t=e.querySelector("span:not([aria-hidden])"))==null?void 0:t.textContent).toMatch(/30\s?000/)},{timeout:2e3})}},q=["Playground","FastChanges","CasePrice"];var x,B,C,h,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(B=o.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"Нажми: сумма меняется целиком. Больше — новая приходит снизу, меньше — сверху.",...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.description}}};var E,F,S,w,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
            color: 'var(--color-text-secondary)'
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
            color: 'var(--color-text-secondary)'
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
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source},description:{story:"Значение меняется каждый кадр, как при перетаскивании слайдера. Слева целиком (SwapNumber), справа по разрядам (RollingNumber).",...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.description}}};var A,R,D,M,N;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Кейс: сумма в фильтре цены',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render(args) {
    const [v, setV] = useState(12500);
    return <div style={{
      display: 'grid',
      gap: 16,
      justifyItems: 'center'
    }}>
        <Big>
          <SwapNumber value={v} format={args.format} data-testid="price" />
        </Big>
        <Button size={44} variant="secondary" onClick={() => setV(30000)}>
          До 30 000
        </Button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const price = within(canvasElement).getByTestId('price');
    await expect(price).toHaveTextContent('12');
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'До 30 000'
    }));
    // the latest value always lands, and the screen-reader text follows it at once
    await waitFor(() => expect(price.querySelector('span:not([aria-hidden])')?.textContent).toMatch(/30\\s?000/), {
      timeout: 2000
    });
  }
}`,...(D=(R=c.parameters)==null?void 0:R.docs)==null?void 0:D.source},description:{story:"Кейс «Фильтр цены»: сумма над ползунком. Одна смена по тапу идёт целиком, текст для скринридера всегда актуален.",...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};const G=Object.freeze(Object.defineProperty({__proto__:null,CasePrice:c,FastChanges:i,Playground:o,__namedExportsOrder:q,default:O},Symbol.toStringTag,{value:"Module"}));export{c as C,i as F,o as P,G as S};
