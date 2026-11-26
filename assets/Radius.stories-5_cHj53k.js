import{j as e}from"./iframe-DyD5Yel4.js";const O="_scale_1vzul_4",L="_token_1vzul_9",q="_swatch_1vzul_15",P="_pairs_1vzul_35",I="_pair_1vzul_35",H="_outer_1vzul_50",K="_inner_1vzul_56",W="_smoothing_1vzul_64",U="_legend_1vzul_68",G="_keyFigma_1vzul_84",Z="_keyPlain_1vzul_88",Q="_keySquircle_1vzul_92",V="_zooms_1vzul_96",Y="_zoom_1vzul_96",J="_grid_1vzul_122",X="_figma_1vzul_127",ee="_plain_1vzul_132",se="_squircle_1vzul_137",ue="_live_1vzul_144",ae="_card_1vzul_157",ne="_smooth_1vzul_64",re="_supported_1vzul_165",te="_unsupported_1vzul_177",a={scale:O,token:L,swatch:q,pairs:P,pair:I,outer:H,inner:K,smoothing:W,legend:U,keyFigma:G,keyPlain:Z,keySquircle:Q,zooms:V,zoom:Y,grid:J,figma:X,plain:ee,squircle:se,live:ue,card:ae,smooth:ne,supported:re,unsupported:te},{expect:v}=__STORYBOOK_MODULE_TEST__,ie={title:"Foundations/Скругления",parameters:{layout:"padded",controls:{disable:!0}}},y=[{name:"radius/xs",css:"--radius-xs",px:4,where:"Скелетоны: полоски текста"},{name:"radius/md",css:"--radius-md",px:12,where:"Chips, Tab, Counter, Tooltip, Segment control (маленький), Icon button 36, иконка 32 в Cell"},{name:"radius/lg",css:"--radius-lg",px:16,where:"Button, Icon button 48 и 52, Field, Select, Search, Feature badge, Segment control, Payment card, History card"},{name:"radius/xl",css:"--radius-xl",px:24,where:"Верх Bottom Sheet и плавающих панелей, Info block"},{name:"radius/full",css:"--radius-full",px:999,where:"Круги и пилюли: Avatar, Radio, Toggle, Handle, точки, Snackbar, кнопки-пилюли"}],m={name:"Шкала",render:()=>e.jsx("div",{className:a.scale,children:y.map(s=>e.jsxs("figure",{className:a.token,"data-token":s.css,children:[e.jsx("div",{className:a.swatch,style:{borderRadius:`var(${s.css})`}}),e.jsxs("figcaption",{children:[e.jsx("b",{children:s.name}),e.jsx("span",{children:s.px===999?"круг / пилюля":`${s.px} px`})]})]},s.name))}),play:async({canvasElement:s})=>{for(const n of y){const u=s.querySelector(`[data-token="${n.css}"] > div`);await v(getComputedStyle(u).borderTopLeftRadius).toBe(`${n.px}px`)}}},h={name:"Вложенные скругления",render:()=>e.jsxs("div",{className:a.pairs,children:[e.jsxs("figure",{className:a.pair,children:[e.jsx("div",{className:a.outer,style:{borderRadius:28,padding:8},children:e.jsx("div",{className:a.inner,style:{borderRadius:20}})}),e.jsx("figcaption",{children:"Так: снаружи 28 = 20 + 8 (excursion_card L)"})]}),e.jsxs("figure",{className:a.pair,children:[e.jsx("div",{className:a.outer,style:{borderRadius:20,padding:8},children:e.jsx("div",{className:a.inner,style:{borderRadius:20}})}),e.jsx("figcaption",{children:"Не так: 20 и 20 — в углу полоса толще, чем по краям"})]}),e.jsxs("figure",{className:a.pair,children:[e.jsx("div",{className:a.outer,style:{borderRadius:"var(--radius-md)",padding:2,width:160,height:36},children:e.jsx("div",{className:a.inner,style:{borderRadius:"calc(var(--radius-md) - 2px)",width:78}})}),e.jsx("figcaption",{children:"Segment control: 12 снаружи, отступ 2, бегунок 10"})]})]})};function R(s,n){const u=A=>A*Math.PI/180,r=(1+n)*s,i=90*(1-n),o=Math.sin(u(i/2))*s*Math.SQRT2,t=(90-i)/2,c=s*Math.tan(u(t/2)),g=45*n,p=c*Math.cos(u(g)),l=p*Math.tan(u(g)),d=(r-o-p-l)/3;return{a:2*d,b:d,c:p,d:l,p:r,arc:o}}function oe(s,n,u){const{a:r,b:i,c:o,d:t,p:c,arc:g}=R(s,n),p=c-r-i-o,l=p-g,d=t+g;return[`M ${u} 0 L ${c} 0`,`C ${c-r} 0 ${c-r-i} 0 ${p} ${t}`,`A ${s} ${s} 0 0 0 ${l} ${d}`,`C ${l-t} ${d+o} ${l-t} ${d+i+o} ${l-t} ${d+r+i+o}`,`L 0 ${u}`].join(" ")}const ce=(s,n)=>`M ${n} 0 L ${s} 0 A ${s} ${s} 0 0 0 0 ${s} L 0 ${n}`;function le(s,n,u,r=64){const i=2**n,o=[];for(let t=r;t>=0;t--){const c=Math.PI/2*(t/r);o.push(`${(s-s*Math.cos(c)**(2/i)).toFixed(3)} ${(s-s*Math.sin(c)**(2/i)).toFixed(3)}`)}return`M ${u} 0 L ${o.join(" L ")} L 0 ${u}`}const de=1.2,pe=1.32;function M({x0:s,x1:n,y0:u,y1:r}){const i=Array.from({length:Math.floor(n-s)+1},(t,c)=>Math.ceil(s)+c),o=Array.from({length:Math.floor(r-u)+1},(t,c)=>Math.ceil(u)+c);return e.jsxs("g",{className:a.grid,children:[i.map(t=>e.jsx("line",{x1:t,y1:u,x2:t,y2:r},`x${t}`)),o.map(t=>e.jsx("line",{x1:s,y1:t,x2:n,y2:t},`y${t}`))]})}function T({r:s,edge:n}){return e.jsxs(e.Fragment,{children:[e.jsx("path",{className:a.figma,d:oe(s,.6,n)}),e.jsx("path",{className:a.plain,d:ce(s,n)}),e.jsx("path",{className:a.squircle,d:le(s*de,pe,n)})]})}function me({r:s,label:n}){const u=s*2,r=280/u;return e.jsxs("figure",{className:a.zoom,children:[e.jsxs("svg",{width:u*r,height:u*r,viewBox:`-0.5 -0.5 ${u+1} ${u+1}`,role:"img","aria-label":`Угол ${s} px, увеличено в ${r.toFixed(0)} раз`,children:[e.jsx(M,{x0:0,x1:u,y0:0,y1:u}),e.jsx(T,{r:s,edge:u})]}),e.jsx("figcaption",{children:n})]})}function he({r:s,label:n}){const u=s*1.8,r=s*.16,i=520,o=i*(r/u)*6;return e.jsxs("figure",{className:a.zoom,style:{maxWidth:i},children:[e.jsxs("svg",{width:i,height:o,viewBox:`0 -0.1 ${u} ${r+.1}`,preserveAspectRatio:"none",role:"img","aria-label":`Верхний край угла ${s} px, по вертикали растянуто в 6 раз`,children:[e.jsx(M,{x0:0,x1:u,y0:0,y1:r}),e.jsx(T,{r:s,edge:u})]}),e.jsx("figcaption",{children:n})]})}const x={name:"Сглаживание углов (iOS 60 %)",render:()=>e.jsxs("div",{className:a.smoothing,children:[e.jsxs("div",{className:a.legend,children:[e.jsx("span",{className:a.keyFigma,children:"Figma, сглаживание 60 %"}),e.jsx("span",{className:a.keyPlain,children:"border-radius"}),e.jsx("span",{className:a.keySquircle,children:"corner-shape: superellipse(1.32), радиус × 1.2"})]}),e.jsxs("div",{className:a.zooms,children:[e.jsx(me,{r:20,label:"Угол 20 целиком, ×7: три кривые сливаются"}),e.jsx(he,{r:20,label:"Верхний край того же угла, по горизонтали ×14, по вертикали ×86. Изгиб Figma начинается в 32 px от угла, border-radius в 20, суперэллипс в 24. Самый большой зазор с border-radius 0.26 px, с суперэллипсом 0.12 px"})]}),e.jsxs("div",{className:a.live,children:[e.jsxs("figure",{children:[e.jsx("div",{className:a.card,style:{borderRadius:20}}),e.jsx("figcaption",{children:"border-radius: 20px"})]}),e.jsxs("figure",{children:[e.jsx("div",{className:`${a.card} ${a.smooth}`}),e.jsxs("figcaption",{children:[e.jsx("span",{className:a.supported,children:"corner-shape работает в этом браузере"}),e.jsx("span",{className:a.unsupported,children:"этот браузер не знает corner-shape: тот же border-radius"})]})]})]})]}),play:async({canvasElement:s})=>{const{a:n,b:u,c:r,d:i,p:o,arc:t}=R(20,.6);await v(Math.abs(n+u+r+t+i-o)).toBeLessThan(1e-9),await v(o).toBeCloseTo(32,6),await v(s.querySelectorAll("svg path").length).toBe(6)}},xe=["Scale","Concentric","Smoothing"];var _,f,b,j,N;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Шкала',
  render: () => <div className={styles.scale}>
      {TOKENS.map(t => <figure key={t.name} className={styles.token} data-token={t.css}>
          <div className={styles.swatch} style={{
        borderRadius: \`var(\${t.css})\`
      }} />
          <figcaption>
            <b>{t.name}</b>
            <span>{t.px === 999 ? 'круг / пилюля' : \`\${t.px} px\`}</span>
          </figcaption>
        </figure>)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    for (const t of TOKENS) {
      const el = canvasElement.querySelector<HTMLElement>(\`[data-token="\${t.css}"] > div\`)!;
      await expect(getComputedStyle(el).borderTopLeftRadius).toBe(\`\${t.px}px\`);
    }
  }
}`,...(b=(f=m.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"The token scale: a 64 px square per token, the value read from the page (so the story fails if a token goes missing).",...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.description}}};var S,$,E,B,z;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Вложенные скругления',
  render: () => <div className={styles.pairs}>
      <figure className={styles.pair}>
        <div className={styles.outer} style={{
        borderRadius: 28,
        padding: 8
      }}>
          <div className={styles.inner} style={{
          borderRadius: 20
        }} />
        </div>
        <figcaption>Так: снаружи 28 = 20 + 8 (excursion_card L)</figcaption>
      </figure>
      <figure className={styles.pair}>
        <div className={styles.outer} style={{
        borderRadius: 20,
        padding: 8
      }}>
          <div className={styles.inner} style={{
          borderRadius: 20
        }} />
        </div>
        <figcaption>Не так: 20 и 20 — в углу полоса толще, чем по краям</figcaption>
      </figure>
      <figure className={styles.pair}>
        <div className={styles.outer} style={{
        borderRadius: 'var(--radius-md)',
        padding: 2,
        width: 160,
        height: 36
      }}>
          <div className={styles.inner} style={{
          borderRadius: 'calc(var(--radius-md) - 2px)',
          width: 78
        }} />
        </div>
        <figcaption>Segment control: 12 снаружи, отступ 2, бегунок 10</figcaption>
      </figure>
    </div>
}`,...(E=($=h.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"Outer = inner + padding. Right: the photo 20 in a card 28 with 8 around. Wrong: the same radius inside and out leaves a thick band at the corner.",...(z=(B=h.parameters)==null?void 0:B.docs)==null?void 0:z.description}}};var w,F,k,C,D;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Сглаживание углов (iOS 60 %)',
  render: () => <div className={styles.smoothing}>
      <div className={styles.legend}>
        <span className={styles.keyFigma}>Figma, сглаживание 60 %</span>
        <span className={styles.keyPlain}>border-radius</span>
        <span className={styles.keySquircle}>corner-shape: superellipse(1.32), радиус × 1.2</span>
      </div>
      <div className={styles.zooms}>
        <CornerZoom r={20} label="Угол 20 целиком, ×7: три кривые сливаются" />
        <CornerStrip r={20} label="Верхний край того же угла, по горизонтали ×14, по вертикали ×86. Изгиб Figma начинается в 32 px от угла, border-radius в 20, суперэллипс в 24. Самый большой зазор с border-radius 0.26 px, с суперэллипсом 0.12 px" />
      </div>
      <div className={styles.live}>
        <figure>
          <div className={styles.card} style={{
          borderRadius: 20
        }} />
          <figcaption>border-radius: 20px</figcaption>
        </figure>
        <figure>
          <div className={\`\${styles.card} \${styles.smooth}\`} />
          <figcaption>
            <span className={styles.supported}>corner-shape работает в этом браузере</span>
            <span className={styles.unsupported}>этот браузер не знает corner-shape: тот же border-radius</span>
          </figcaption>
        </figure>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    // the Figma construction ends exactly where the plain curve's circle is: the arc is the same circle
    const {
      a,
      b,
      c,
      d,
      p,
      arc
    } = figmaCorner(20, 0.6);
    await expect(Math.abs(a + b + c + arc + d - p)).toBeLessThan(1e-9);
    await expect(p).toBeCloseTo(32, 6);
    await expect(canvasElement.querySelectorAll('svg path').length).toBe(6);
  }
}`,...(k=(F=x.parameters)==null?void 0:F.docs)==null?void 0:k.source},description:{story:"One corner, zoomed: the Figma 60 % curve (thick), plain `border-radius` (dashed) and the closest\n`corner-shape: superellipse(1.32)` at 1.2·r (dotted). Grid = 1 CSS px. The live row below uses corner-shape where the\nbrowser has it (Chromium 139+) and falls back to border-radius elsewhere (Safari, iOS WKWebView, Firefox).",...(D=(C=x.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};const ye=Object.freeze(Object.defineProperty({__proto__:null,Concentric:h,Scale:m,Smoothing:x,__namedExportsOrder:xe,default:ie},Symbol.toStringTag,{value:"Module"}));export{h as C,ye as R,m as S,x as a};
