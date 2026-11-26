import{r as p,j as u}from"./iframe-DyD5Yel4.js";import{R as g}from"./RangeSlider-D15sdW9U.js";import{F as v}from"./Field-B9_Admkx.js";const m=r=>`${r.toLocaleString("ru-RU")} ⃀`,q={title:"Components/RangeSlider",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345"}},args:{min:0,max:1e5,step:500,defaultValue:[3e3,5e4],format:m,tooltip:!0,disabled:!1},argTypes:{min:{control:{type:"number",step:500}},max:{control:{type:"number",step:500}},step:{control:{type:"number",min:1}},minDistance:{control:{type:"number",min:0}},tooltip:{control:"boolean"},disabled:{control:"boolean"},value:{control:!1},defaultValue:{control:!1},format:{control:!1},labels:{control:!1},onValueChange:{control:!1},onValueCommit:{control:!1}}},f=({children:r})=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:"56px 16px 24px",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:r}),J=({children:r})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:r}),o={render:function(a){const[t,x]=p.useState(a.defaultValue??[a.min,a.max]),[e,s]=p.useState(null);return u.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[u.jsx(f,{children:u.jsx(g,{...a,value:t,onValueChange:x,onValueCommit:s,"aria-label":"Цена"})}),u.jsxs(J,{children:["onValueChange: ",m(t[0])," – ",m(t[1])," · onValueCommit: ",e?`${m(e[0])} – ${m(e[1])}`:"—"]})]})}},l={render:r=>u.jsx("div",{style:{display:"grid",gap:16},children:[{label:"Default",props:{}},{label:"Pressed: держат «До», диапазон сдвинут с двух сторон",props:{defaultValue:[2e4,75e3],forcePressed:"to"}},{label:"Без подсказки (Tooltip = false)",props:{tooltip:!1}},{label:"Disabled",props:{disabled:!0}}].map(({label:a,props:t})=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx(J,{children:a}),u.jsx(f,{children:u.jsx(g,{...r,...t})})]},a))})},i={name:"Тест: StrictMode",render:r=>u.jsx(p.StrictMode,{children:u.jsx(f,{children:u.jsx(g,{...r,"aria-label":"Цена"})})})},d={name:"Тест: перерисовки",args:{step:1e4,defaultValue:[1e4,9e4]},render:r=>u.jsx(p.Profiler,{id:"slider",onRender:()=>{const a=window;a.__sliderRenders=(a.__sliderRenders??0)+1},children:u.jsx(f,{children:u.jsx(g,{...r,"aria-label":"Цена"})})})},c={name:"Кейс · Фильтры: цена за человека",render:function(a){const[t,x]=p.useState([0,18e4]),[e,s]=p.useState(null),b=n=>n.toLocaleString("ru-RU"),y=n=>Number(n.replace(/\D/g,"")),E=()=>{if(!e)return;const n=Math.min(Math.max(y(e[0]),0),18e4),X=Math.max(Math.min(y(e[1]),18e4),n);x([n,X]),s(null)},h=n=>n.key==="Enter"&&E();return u.jsxs("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",display:"grid",gap:16,padding:16,borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[u.jsx("span",{className:"im-18-s",style:{color:"var(--color-text-primary)"},children:"Цена за человека"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[u.jsx(v,{label:"От",value:(e==null?void 0:e[0])??b(t[0]),onValueChange:n=>s([n,(e==null?void 0:e[1])??b(t[1])]),onBlur:E,onKeyDown:h,currency:"⃀",inputMode:"numeric",clearable:!1}),u.jsx(v,{label:"До",value:(e==null?void 0:e[1])??b(t[1]),onValueChange:n=>s([(e==null?void 0:e[0])??b(t[0]),n]),onBlur:E,onKeyDown:h,currency:"⃀",inputMode:"numeric",clearable:!1})]}),u.jsx("div",{style:{paddingTop:40},children:u.jsx(g,{...a,min:0,max:18e4,step:500,value:t,onValueChange:n=>{s(null),x(n)},"aria-label":"Цена",format:m})})]})}},H=["Playground","States","UnderStrictMode","RenderBudget","PriceFilterCase"];var C,S,D,B,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Потяни ползунок: над ним сумма, она тянется за ним, как шарик, и меняется целиком, мягко, через размытие. Брось — поедет по инерции.",...(F=(B=o.parameters)==null?void 0:B.docs)==null?void 0:F.description}}};var V,R,j,A,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {[{
      label: 'Default',
      props: {}
    }, {
      label: 'Pressed: держат «До», диапазон сдвинут с двух сторон',
      props: {
        defaultValue: [20000, 75000] as RangeValue,
        forcePressed: 'to' as const
      }
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
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"Figma State: Default, Pressed, Disabled. Pressed — ползунок держат: диапазон сдвинут с обеих сторон, у взятого\nползунка нет тени и над ним подсказка (здесь показано через `forcePressed`, вживую — под пальцем).",...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.description}}};var M,_,P,T,k;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Тест: StrictMode',
  render: args => <StrictMode>
      <Screen>
        <RangeSlider {...args} aria-label="Цена" />
      </Screen>
    </StrictMode>
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source},description:{story:"The same slider under `<StrictMode>` (every consumer app mounts it that way): effects run, are cleaned up and run\nagain. The tooltip must still follow the thumb on its spring (regression: the frame id was never reset on cleanup).",...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var K,U,N,W,$;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
  name: 'Кейс · Фильтры: цена за человека',
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
          Цена за человека
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
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:`Figma «Результаты» → «Фильтрация» → «Цена за человека» (817:66970 / 817:66975): поля «От» и «До» с знаком сома и ползунок
под ними, значения 0 и 180 000. Двигаешь ползунок — суммы в полях меняются; печатаешь сумму — ползунок встаёт на неё,
когда поле теряет фокус или нажат Enter.`,...(G=(I=c.parameters)==null?void 0:I.docs)==null?void 0:G.description}}};const u4=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,PriceFilterCase:c,RenderBudget:d,States:l,UnderStrictMode:i,__namedExportsOrder:H,default:q},Symbol.toStringTag,{value:"Module"}));export{o as P,u4 as S,l as a,c as b};
