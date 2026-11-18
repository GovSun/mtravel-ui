import{r as p,j as e}from"./iframe-DuqTOznb.js";import{R as g}from"./RangeSlider-Cqt63g_z.js";import{F as S}from"./Field-DwgBjXeD.js";const m=r=>`${r.toLocaleString("ru-RU")} ⃀`,q={title:"Components/RangeSlider",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345"}},args:{min:0,max:1e5,step:500,defaultValue:[3e3,5e4],format:m,tooltip:!0,disabled:!1},argTypes:{min:{control:{type:"number",step:500}},max:{control:{type:"number",step:500}},step:{control:{type:"number",min:1}},minDistance:{control:{type:"number",min:0}},tooltip:{control:"boolean"},disabled:{control:"boolean"},value:{control:!1},defaultValue:{control:!1},format:{control:!1},labels:{control:!1},onValueChange:{control:!1},onValueCommit:{control:!1}}},f=({children:r})=>e.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:"56px 16px 24px",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:r}),J=({children:r})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:r}),o={render:function(a){const[t,x]=p.useState(a.defaultValue??[a.min,a.max]),[u,s]=p.useState(null);return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[e.jsx(f,{children:e.jsx(g,{...a,value:t,onValueChange:x,onValueCommit:s,"aria-label":"Цена"})}),e.jsxs(J,{children:["onValueChange: ",m(t[0])," – ",m(t[1])," · onValueCommit: ",u?`${m(u[0])} – ${m(u[1])}`:"—"]})]})}},l={render:r=>e.jsx("div",{style:{display:"grid",gap:16},children:[{label:"Default",props:{}},{label:"Без подсказки (Tooltip = false)",props:{tooltip:!1}},{label:"Disabled",props:{disabled:!0}}].map(({label:a,props:t})=>e.jsxs("div",{style:{display:"grid",gap:4},children:[e.jsx(J,{children:a}),e.jsx(f,{children:e.jsx(g,{...r,...t})})]},a))})},i={name:"Тест: StrictMode",render:r=>e.jsx(p.StrictMode,{children:e.jsx(f,{children:e.jsx(g,{...r,"aria-label":"Цена"})})})},d={name:"Тест: перерисовки",args:{step:1e4,defaultValue:[1e4,9e4]},render:r=>e.jsx(p.Profiler,{id:"slider",onRender:()=>{const a=window;a.__sliderRenders=(a.__sliderRenders??0)+1},children:e.jsx(f,{children:e.jsx(g,{...r,"aria-label":"Цена"})})})},c={name:"Кейс: цена в фильтрах",render:function(a){const[t,x]=p.useState([0,18e4]),[u,s]=p.useState(null),b=n=>n.toLocaleString("ru-RU"),h=n=>Number(n.replace(/\D/g,"")),y=()=>{if(!u)return;const n=Math.min(Math.max(h(u[0]),0),18e4),X=Math.max(Math.min(h(u[1]),18e4),n);x([n,X]),s(null)},v=n=>n.key==="Enter"&&y();return e.jsxs("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",display:"grid",gap:16,padding:16,borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[e.jsx("span",{className:"im-18-s",style:{color:"var(--color-text-primary)"},children:"Цена"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx(S,{label:"От",value:(u==null?void 0:u[0])??b(t[0]),onValueChange:n=>s([n,(u==null?void 0:u[1])??b(t[1])]),onBlur:y,onKeyDown:v,currency:"⃀",inputMode:"numeric",clearable:!1}),e.jsx(S,{label:"До",value:(u==null?void 0:u[1])??b(t[1]),onValueChange:n=>s([(u==null?void 0:u[0])??b(t[0]),n]),onBlur:y,onKeyDown:v,currency:"⃀",inputMode:"numeric",clearable:!1})]}),e.jsx("div",{style:{paddingTop:40},children:e.jsx(g,{...a,min:0,max:18e4,step:500,value:t,onValueChange:n=>{s(null),x(n)},"aria-label":"Цена",format:m})})]})}},H=["Playground","States","UnderStrictMode","RenderBudget","PriceFilterCase"];var C,E,D,F,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render(args) {
    const [v, setV] = useState<RangeValue>(args.defaultValue ?? [args.min, args.max]);
    const [end, setEnd] = useState<RangeValue | null>(null);
    return <div style={{
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Screen>
          <RangeSlider {...args} value={v} onValueChange={setV} onValueCommit={setEnd} aria-label="Цена" />
        </Screen>
        <Caption>
          onValueChange: {som(v[0])} – {som(v[1])} · onValueCommit: {end ? \`\${som(end[0])} – \${som(end[1])}\` : '—'}
        </Caption>
      </div>;
  }
}`,...(D=(E=o.parameters)==null?void 0:E.docs)==null?void 0:D.source},description:{story:"Потяни ползунок: над ним сумма, она тянется за ним, как шарик, и меняется целиком, мягко, через размытие. Брось — поедет по инерции.",...(B=(F=o.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var R,V,j,w,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {[{
      label: 'Default',
      props: {}
    }, {
      label: 'Без подсказки (Tooltip = false)',
      props: {
        tooltip: false
      }
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      display: 'grid',
      gap: 4
    }}>
          <Caption>{label}</Caption>
          <Screen>
            <RangeSlider {...args} {...props} />
          </Screen>
        </div>)}
    </div>
}`,...(j=(V=l.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:"Figma State: Default и Disabled. Pressed — это когда ползунок держат (тень уходит, появляется подсказка).",...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};var M,_,T,P,k;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Тест: StrictMode',
  render: args => <StrictMode>
      <Screen>
        <RangeSlider {...args} aria-label="Цена" />
      </Screen>
    </StrictMode>
}`,...(T=(_=i.parameters)==null?void 0:_.docs)==null?void 0:T.source},description:{story:"The same slider under `<StrictMode>` (every consumer app mounts it that way): effects run, are cleaned up and run\nagain. The tooltip must still follow the thumb on its spring (regression: the frame id was never reset on cleanup).",...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.description}}};var K,U,N,W,$;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Тест: перерисовки',
  args: {
    step: 10000,
    defaultValue: [10000, 90000]
  },
  render: args => <Profiler id="slider" onRender={() => {
    const w = window as unknown as {
      __sliderRenders?: number;
    };
    w.__sliderRenders = (w.__sliderRenders ?? 0) + 1;
  }}>
      <Screen>
        <RangeSlider {...args} aria-label="Цена" />
      </Screen>
    </Profiler>
}`,...(N=(U=d.parameters)==null?void 0:U.docs)==null?void 0:N.source},description:{story:"Counts React commits of the slider while a thumb is dragged (`window.__sliderRenders`, read by\nscripts/check-slider.mjs). With 10 steps over the track, dragging across it may commit only when the snapped value\nchanges, not on every pointer move.",...($=(W=d.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var z,L,O,I,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Кейс: цена в фильтрах',
  render: function Render(args) {
    const [v, setV] = useState<RangeValue>([0, 180000]);
    const [text, setText] = useState<[string, string] | null>(null);
    const fmt = (n: number) => n.toLocaleString('ru-RU');
    const digits = (t: string) => Number(t.replace(/\\D/g, ''));
    const commit = () => {
      if (!text) return;
      const lo = Math.min(Math.max(digits(text[0]), 0), 180000);
      const hi = Math.max(Math.min(digits(text[1]), 180000), lo);
      setV([lo, hi]);
      setText(null);
    };
    const onEnter = (e: KeyboardEvent) => e.key === 'Enter' && commit();
    return <div style={{
      width: 393,
      maxWidth: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      gap: 16,
      padding: 16,
      borderRadius: 24,
      background: 'var(--color-bg-surface)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-default)'
    }}>
        <span className="im-18-s" style={{
        color: 'var(--color-text-primary)'
      }}>
          Цена
        </span>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }}>
          <Field label="От" value={text?.[0] ?? fmt(v[0])} onValueChange={t => setText([t, text?.[1] ?? fmt(v[1])])} onBlur={commit} onKeyDown={onEnter} currency="⃀" inputMode="numeric" clearable={false} />
          <Field label="До" value={text?.[1] ?? fmt(v[1])} onValueChange={t => setText([text?.[0] ?? fmt(v[0]), t])} onBlur={commit} onKeyDown={onEnter} currency="⃀" inputMode="numeric" clearable={false} />
        </div>
        <div style={{
        paddingTop: 40
      }}>
          <RangeSlider {...args} min={0} max={180000} step={500} value={v} onValueChange={n => {
          setText(null);
          setV(n);
        }} aria-label="Цена" format={som} />
        </div>
      </div>;
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:`Фильтр «Цена» (Figma «Фильтрация»): поля «От» и «До» с знаком сома и ползунок под ними. Двигаешь ползунок — суммы
в полях меняются; печатаешь сумму — ползунок встаёт на неё, когда поле теряет фокус или нажат Enter.`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.description}}};const ee=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,PriceFilterCase:c,RenderBudget:d,States:l,UnderStrictMode:i,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{o as P,ee as S,l as a,c as b};
