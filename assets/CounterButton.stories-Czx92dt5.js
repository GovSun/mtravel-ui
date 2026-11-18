import{j as r,r as f}from"./iframe-DuqTOznb.js";import{C as t}from"./CounterButton-ddQoagoR.js";import"./preload-helper-Dp1pzeXC.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./usePress-DgMUH5X0.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Counter/CounterButton",component:t,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=502-9109"}},args:{variant:"plus","aria-label":"Увеличить",disabled:!1,forcePressed:!1,autoRepeat:!1,onStep:y()}},a={decorators:[e=>r.jsx("div",{style:{background:"var(--control-bg-default)",borderRadius:999,display:"inline-flex"},children:r.jsx(e,{})})]},s={parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(3, 44px)",gap:"12px 24px",alignItems:"center",justifyItems:"center",padding:24,background:"var(--control-bg-default)",borderRadius:16},children:[r.jsx("span",{}),["Default","Pressed","Disabled"].map(e=>r.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e},e)),["plus","minus"].map(e=>r.jsxs(f.Fragment,{children:[r.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)",justifySelf:"end"},children:e==="plus"?"Plus":"Minus"}),r.jsx(t,{variant:e,"aria-label":`${e} default`}),r.jsx(t,{variant:e,"aria-label":`${e} pressed`,forcePressed:!0}),r.jsx(t,{variant:e,"aria-label":`${e} disabled`,disabled:!0})]},e))]})},D=["Playground","Variants"];var n,o,i,l,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    background: 'var(--control-bg-default)',
    borderRadius: 999,
    display: 'inline-flex'
  }}>
        <Story />
      </div>]
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Press and hold to see the press transition; turn on autoRepeat to step while held.",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var p,u,c,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(3, 44px)',
    gap: '12px 24px',
    alignItems: 'center',
    justifyItems: 'center',
    padding: 24,
    background: 'var(--control-bg-default)',
    borderRadius: 16
  }}>
      <span />
      {['Default', 'Pressed', 'Disabled'].map(s => <span key={s} className="im-12-r" style={{
      color: 'var(--color-text-tertiary)'
    }}>
          {s}
        </span>)}
      {(['plus', 'minus'] as const).map(variant => <Fragment key={variant}>
          <span className="im-12-r" style={{
        color: 'var(--color-text-tertiary)',
        justifySelf: 'end'
      }}>
            {variant === 'plus' ? 'Plus' : 'Minus'}
          </span>
          <CounterButton variant={variant} aria-label={\`\${variant} default\`} />
          <CounterButton variant={variant} aria-label={\`\${variant} pressed\`} forcePressed />
          <CounterButton variant={variant} aria-label={\`\${variant} disabled\`} disabled />
        </Fragment>)}
    </div>
}`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source},description:{story:"Type × State grid, as in Figma 502:9109. «Pressed» is forced here; live it comes from the finger.",...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};export{a as Playground,s as Variants,D as __namedExportsOrder,_ as default};
