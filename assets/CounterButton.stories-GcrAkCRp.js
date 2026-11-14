import{j as r,r as g}from"./iframe-Dr5ib33t.js";import{C as t}from"./CounterButton-CF2kbXIF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CU5QHq_h.js";import"./motion-C-Q-avtg.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Counter/CounterButton",component:t,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=502-9109"}},args:{type:"plus","aria-label":"Увеличить",disabled:!1,pressed:!1,autoRepeat:!1,onStep:x()}},s={decorators:[e=>r.jsx("div",{style:{background:"var(--control-bg-default)",borderRadius:999,display:"inline-flex"},children:r.jsx(e,{})})]},a={parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(3, 44px)",gap:"12px 24px",alignItems:"center",justifyItems:"center",padding:24,background:"var(--control-bg-default)",borderRadius:16},children:[r.jsx("span",{}),["Default","Pressed","Disabled"].map(e=>r.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e},e)),["plus","minus"].map(e=>r.jsxs(g.Fragment,{children:[r.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)",justifySelf:"end"},children:e==="plus"?"Plus":"Minus"}),r.jsx(t,{type:e,"aria-label":`${e} default`}),r.jsx(t,{type:e,"aria-label":`${e} pressed`,pressed:!0}),r.jsx(t,{type:e,"aria-label":`${e} disabled`,disabled:!0})]},e))]})},S=["Playground","Variants"];var n,o,i,l,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    background: 'var(--control-bg-default)',
    borderRadius: 999,
    display: 'inline-flex'
  }}>
        <Story />
      </div>]
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Press and hold to see the press transition; turn on autoRepeat to step while held.",...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var p,u,c,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      {(['plus', 'minus'] as const).map(type => <Fragment key={type}>
          <span className="im-12-r" style={{
        color: 'var(--color-text-tertiary)',
        justifySelf: 'end'
      }}>
            {type === 'plus' ? 'Plus' : 'Minus'}
          </span>
          <CounterButton type={type} aria-label={\`\${type} default\`} />
          <CounterButton type={type} aria-label={\`\${type} pressed\`} pressed />
          <CounterButton type={type} aria-label={\`\${type} disabled\`} disabled />
        </Fragment>)}
    </div>
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source},description:{story:"Type × State grid, as in Figma 502:9109. «Pressed» is forced here; live it comes from the finger.",...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.description}}};export{s as Playground,a as Variants,S as __namedExportsOrder,C as default};
