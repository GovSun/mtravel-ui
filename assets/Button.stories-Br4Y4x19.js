import{j as n,r as B}from"./iframe-DyD5Yel4.js";import{t as An}from"./tokens-Bc2_NrJ2.js";import{B as s}from"./Button-grGIhY78.js";import{C as S}from"./general-CSE0kF9v.js";import{C as j}from"./arrows-0JYTYJZi.js";const{expect:i,fireEvent:w,fn:Sn,userEvent:wn,waitFor:C,within:Cn}=__STORYBOOK_MODULE_TEST__,jn={title:"Components/Button",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=75-214"}},args:{children:"Кнопка",variant:"primary",size:52,radius:16,disabled:!1,loading:!1,loader:"bar",fullWidth:!1,onClick:Sn()},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40]},radius:{control:"inline-radio",options:[16,"full"]},loader:{control:"inline-radio",options:["bar","underline","sweep","dots","spinner"]},iconLeft:{control:"inline-radio",options:["нет","circle"],mapping:{нет:void 0,circle:n.jsx(S,{})}},iconRight:{control:"inline-radio",options:["нет","chevron"],mapping:{нет:void 0,chevron:n.jsx(j,{})}},caption:{control:"text"},forcePressed:{control:!1},href:{control:"text"}}},E=["primary","secondary","ghost"],Tn=[52,48,44,40],Dn=[16,"full"],A=["Default","Pressed","Disabled","Loading"],k={primary:"Primary",secondary:"Secondary",ghost:"Ghost"},kn=new Map(An.map(e=>[e.cssVar,e])),Fn=e=>kn.get(e),T={primary:{Default:{bg:"--button-bg-primary-default",fg:"--button-text-primary"},Pressed:{bg:"--button-bg-primary-pressed",fg:"--button-text-primary"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-primary-default",fg:"--button-text-primary"}},secondary:{Default:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary"},Pressed:{bg:"--button-bg-secondary-pressed",fg:"--button-text-secondary"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary"}},ghost:{Default:{bg:null,fg:"--button-text-ghost"},Pressed:{bg:"--button-bg-ghost-pressed",fg:"--button-text-ghost"},Disabled:{bg:null,fg:"--button-text-disabled"},Loading:{bg:null,fg:"--button-text-ghost"}}},u=({children:e,strong:a})=>n.jsx("span",{className:a?"im-14-m":"im-12-r",style:{color:a?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:e}),D=({cssVar:e})=>{if(!e)return n.jsx(u,{children:"прозрачный"});const a=Fn(e);return n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[n.jsx("span",{style:{width:10,height:10,borderRadius:3,background:a==null?void 0:a.resolved,boxShadow:"inset 0 0 0 1px rgba(0,0,0,.08)"}}),n.jsx(u,{children:(a==null?void 0:a.figma)??e})]})},p={},g={name:"Все размеры и состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gap:40,padding:16,boxSizing:"border-box",maxWidth:"100%",overflowX:"auto"},children:E.map(e=>n.jsxs("section",{style:{display:"grid",gap:12},children:[n.jsx(u,{strong:!0,children:k[e]}),n.jsx("div",{style:{display:"flex",gap:48,flexWrap:"wrap"},children:Dn.map(a=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:`32px repeat(${A.length}, minmax(112px, auto))`,gap:"10px 16px",alignItems:"center"},children:[n.jsxs(u,{children:["R ",a==="full"?"Full":16]}),A.map(o=>n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(u,{strong:!0,children:o}),n.jsx(D,{cssVar:T[e][o].bg}),n.jsx(D,{cssVar:T[e][o].fg})]},o)),Tn.map(o=>n.jsxs(B.Fragment,{children:[n.jsx(u,{children:o}),A.map(t=>n.jsx("span",{children:n.jsx(s,{variant:e,size:o,radius:a,forcePressed:t==="Pressed",disabled:t==="Disabled",loading:t==="Loading",loader:"spinner",children:"Кнопка"})},t))]},o))]},String(a)))})]},e))})},m={name:"Нажатие: смена токена",parameters:{controls:{disable:!0}},render:function(){const[a,o]=B.useState(null);return n.jsx("div",{style:{display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center"},children:E.map(t=>{const l=a===t,d=T[t][l?"Pressed":"Default"],r=c=>()=>o(c);return n.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:10,minWidth:180},children:[n.jsx(s,{variant:t,onPointerDown:r(t),onPointerUp:r(null),onPointerLeave:r(null),onPointerCancel:r(null),children:k[t]}),n.jsxs("figcaption",{style:{display:"grid",justifyItems:"center",gap:2},children:[n.jsx(D,{cssVar:d.bg}),n.jsx(u,{children:l?"scale 0.97 · 100 мс":"scale 1 · 240 мс назад"})]})]},t)})})}},Rn=[{kind:"bar",name:"Линия",note:"дорожка вместо текста, отрезок пробегает с ускорением и торможением"},{kind:"underline",name:"Линия под текстом",note:"текст остаётся, под ним бежит полоска"},{kind:"sweep",name:"Перелив",note:"текст остаётся, по кнопке проходит мягкий блик"},{kind:"dots",name:"Точки",note:"три точки в ряд, по ним идёт волна"},{kind:"spinner",name:"Спиннер (сейчас)",note:"Figma Spinner 75:8, 3/4 кольца"}],y={name:"Лоадеры: варианты",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[a,o]=B.useState(!0),[t,l]=B.useState(null),d=r=>()=>{l(r),window.setTimeout(()=>l(c=>c===r?null:c),2500)};return n.jsxs("div",{style:{display:"grid",gap:20},children:[n.jsx("div",{children:n.jsx(s,{variant:"secondary",size:40,radius:"full",onClick:()=>o(r=>!r),children:a?"Выключить загрузку":"Включить загрузку"})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(160px, 220px) repeat(3, auto) auto",gap:"16px 20px",alignItems:"center"},children:[n.jsx("span",{}),E.map(r=>n.jsx(u,{strong:!0,children:k[r]},r)),n.jsx(u,{strong:!0,children:"Нажми"}),Rn.map(({kind:r,name:c,note:En})=>n.jsxs(B.Fragment,{children:[n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(u,{strong:!0,children:c}),n.jsx(u,{children:En})]}),E.map(F=>n.jsx("span",{children:n.jsx(s,{variant:F,loading:a,loader:r,children:"Оплатить"})},F)),n.jsx("span",{children:n.jsx(s,{loader:r,loading:t===r,onClick:d(r),children:"Оплатить 12 400 ⃀"})})]},r))]})]})}},b={name:"Иконки и подпись",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[n.jsx(s,{iconLeft:n.jsx(S,{}),children:"Кнопка"}),n.jsx(s,{variant:"secondary",iconRight:n.jsx(j,{}),children:"Кнопка"}),n.jsx(s,{variant:"ghost",iconLeft:n.jsx(S,{}),iconRight:n.jsx(j,{}),children:"Кнопка"}),n.jsx(s,{caption:"12 400 ⃀ за двоих",children:"Оплатить"})]})},h={name:"На всю ширину",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"grid",gap:8,padding:16,boxSizing:"border-box",maxWidth:"100%"},children:[n.jsx(s,{fullWidth:!0,children:"Продолжить"}),n.jsx(s,{fullWidth:!0,variant:"ghost",children:"Позже"})]})},x={name:"Кейс: футер шторки фильтров",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:12,padding:16,boxSizing:"border-box",maxWidth:"100%"},children:[n.jsx(s,{fullWidth:!0,variant:"secondary",size:48,children:"Сбросить"}),n.jsx(s,{fullWidth:!0,size:48,children:"Показать 128"})]}),play:async({canvasElement:e})=>{const[a,o]=Array.from(e.querySelectorAll("button")),t=e.querySelector("button").parentElement,l=a.getBoundingClientRect(),d=o.getBoundingClientRect(),r=t.getBoundingClientRect();await i(Math.abs(l.width-d.width)).toBeLessThan(2),await i(d.right).toBeLessThanOrEqual(r.right+.5)}},f={name:"Тест: нажатие, загрузка, disabled",args:{children:"Тест"},play:async({canvasElement:e,args:a})=>{const t=Cn(e).getByRole("button",{name:"Тест"});await wn.click(t),await i(a.onClick).toHaveBeenCalledTimes(1),w.pointerDown(t,{button:0,pointerType:"touch"}),await C(()=>i(t).toHaveAttribute("data-pressed")),w.pointerUp(t,{button:0,pointerType:"touch"}),await C(()=>i(t).not.toHaveAttribute("data-pressed")),w.pointerDown(t,{button:0,pointerType:"touch"}),await C(()=>i(t).toHaveAttribute("data-pressed")),w.pointerOut(t,{pointerType:"touch",relatedTarget:document.body}),await C(()=>i(t).not.toHaveAttribute("data-pressed"))}},v={name:"Тест: в загрузке клик не проходит",args:{children:"Тест",loading:!0},play:async({canvasElement:e,args:a})=>{const o=Cn(e).getByRole("button",{name:/Тест/});await i(o).toHaveAttribute("aria-busy","true"),await wn.click(o),await i(a.onClick).not.toHaveBeenCalled()}},Pn=["Playground","AllStates","PressTokens","Loaders","WithIconsAndCaption","FullWidth","CaseFilterFooter","BehaviourTest","LoadingSwallowsClick"];var R,P,I,W,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:"Playground: every prop on the right. Press and hold to see the press transition.",...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};var O,z,_,H,N;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Все размеры и состояния',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 40,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%',
    overflowX: 'auto'
  }}>
      {VARIANTS.map(variant => <section key={variant} style={{
      display: 'grid',
      gap: 12
    }}>
          <Caption strong>{NAMES[variant]}</Caption>
          <div style={{
        display: 'flex',
        gap: 48,
        flexWrap: 'wrap'
      }}>
            {RADII.map(radius => <div key={String(radius)} style={{
          display: 'grid',
          gridTemplateColumns: \`32px repeat(\${STATES.length}, minmax(112px, auto))\`,
          gap: '10px 16px',
          alignItems: 'center'
        }}>
                <Caption>R {radius === 'full' ? 'Full' : 16}</Caption>
                {STATES.map(s => <span key={s} style={{
            display: 'grid',
            gap: 2
          }}>
                    <Caption strong>{s}</Caption>
                    <TokenTag cssVar={STATE_TOKENS[variant][s].bg} />
                    <TokenTag cssVar={STATE_TOKENS[variant][s].fg} />
                  </span>)}
                {SIZES.map(size => <Fragment key={size}>
                    <Caption>{size}</Caption>
                    {STATES.map(s => <span key={s}>
                        <Button variant={variant} size={size} radius={radius} forcePressed={s === 'Pressed'} disabled={s === 'Disabled'} loading={s === 'Loading'} loader="spinner">
                          Кнопка
                        </Button>
                      </span>)}
                  </Fragment>)}
              </div>)}
          </div>
        </section>)}
    </div>
}`,...(_=(z=g.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:`Strip of every size and state, both radii, as in Figma 75:214. The row under the headers names the
background / text token of that state; «Pressed» is forced here, live it comes from the finger.`,...(N=(H=g.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var V,M,q,K,U;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Нажатие: смена токена',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [down, setDown] = useState<ButtonVariant | null>(null);
    return <div style={{
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
        {VARIANTS.map(variant => {
        const on = down === variant;
        const t = STATE_TOKENS[variant][on ? 'Pressed' : 'Default'];
        const set = (v: ButtonVariant | null) => () => setDown(v);
        return <figure key={variant} style={{
          margin: 0,
          display: 'grid',
          justifyItems: 'center',
          gap: 10,
          minWidth: 180
        }}>
              <Button variant={variant} onPointerDown={set(variant)} onPointerUp={set(null)} onPointerLeave={set(null)} onPointerCancel={set(null)}>
                {NAMES[variant]}
              </Button>
              <figcaption style={{
            display: 'grid',
            justifyItems: 'center',
            gap: 2
          }}>
                <TokenTag cssVar={t.bg} />
                <Caption>{on ? 'scale 0.97 · 100 мс' : 'scale 1 · 240 мс назад'}</Caption>
              </figcaption>
            </figure>;
      })}
      </div>;
  }
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Live: press and hold — the label under each button shows the token the background is on right now.",...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var X,G,Z,$,J;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Лоадеры: варианты',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [on, setOn] = useState(true);
    const [busy, setBusy] = useState<ButtonLoader | null>(null);
    const run = (kind: ButtonLoader) => () => {
      setBusy(kind);
      window.setTimeout(() => setBusy(b => b === kind ? null : b), 2500);
    };
    return <div style={{
      display: 'grid',
      gap: 20
    }}>
        <div>
          <Button variant="secondary" size={40} radius="full" onClick={() => setOn(v => !v)}>
            {on ? 'Выключить загрузку' : 'Включить загрузку'}
          </Button>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(160px, 220px) repeat(3, auto) auto',
        gap: '16px 20px',
        alignItems: 'center'
      }}>
          <span />
          {VARIANTS.map(v => <Caption key={v} strong>
              {NAMES[v]}
            </Caption>)}
          <Caption strong>Нажми</Caption>
          {LOADERS.map(({
          kind,
          name,
          note
        }) => <Fragment key={kind}>
              <span style={{
            display: 'grid',
            gap: 2
          }}>
                <Caption strong>{name}</Caption>
                <Caption>{note}</Caption>
              </span>
              {VARIANTS.map(variant => <span key={variant}>
                  <Button variant={variant} loading={on} loader={kind}>
                    Оплатить
                  </Button>
                </span>)}
              <span>
                <Button loader={kind} loading={busy === kind} onClick={run(kind)}>
                  Оплатить 12 400 ⃀
                </Button>
              </span>
            </Fragment>)}
        </div>
      </div>;
  }
}`,...(Z=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Z.source},description:{story:`Proposals for the linear loader, side by side on every type. «Включить / выключить» toggles loading
to show how the label hands over to the loader and back. Tap a button in the last column to see a
real request: 2.5 s of loading.`,...(J=($=y.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var Y,Q,nn,en,tn;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Иконки и подпись',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Button iconLeft={<CircleIcon />}>Кнопка</Button>
      <Button variant="secondary" iconRight={<ChevronIcon />}>
        Кнопка
      </Button>
      <Button variant="ghost" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>
        Кнопка
      </Button>
      <Button caption="12 400 ⃀ за двоих">Оплатить</Button>
    </div>
}`,...(nn=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:nn.source},description:{story:"Icons 16 px left / right and a caption (Figma «Show caption»).",...(tn=(en=b.parameters)==null?void 0:en.docs)==null?void 0:tn.description}}};var an,rn,on,sn,un;h.parameters={...h.parameters,docs:{...(an=h.parameters)==null?void 0:an.docs,source:{originalSource:`{
  name: 'На всю ширину',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%'
  }}>
      <Button fullWidth>Продолжить</Button>
      <Button fullWidth variant="ghost">
        Позже
      </Button>
    </div>
}`,...(on=(rn=h.parameters)==null?void 0:rn.docs)==null?void 0:on.source},description:{story:"Full width at the bottom of a sheet, the usual place for the 52 Primary.",...(un=(sn=h.parameters)==null?void 0:sn.docs)==null?void 0:un.description}}};var ln,dn,cn,pn,gn;x.parameters={...x.parameters,docs:{...(ln=x.parameters)==null?void 0:ln.docs,source:{originalSource:`{
  name: 'Кейс: футер шторки фильтров',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%'
  }}>
      <Button fullWidth variant="secondary" size={48}>
        Сбросить
      </Button>
      <Button fullWidth size={48}>
        Показать 128
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const [a, b] = Array.from(canvasElement.querySelectorAll('button'));
    const row = canvasElement.querySelector('button')!.parentElement!;
    const ra = a!.getBoundingClientRect();
    const rb = b!.getBoundingClientRect();
    const rr = row.getBoundingClientRect();
    await expect(Math.abs(ra.width - rb.width)).toBeLessThan(2);
    await expect(rb.right).toBeLessThanOrEqual(rr.right + 0.5);
  }
}`,...(cn=(dn=x.parameters)==null?void 0:dn.docs)==null?void 0:cn.source},description:{story:"Кейс «Фильтры» (Выходные): два fullWidth-кнопки в одной строке делят ширину поровну, вторая не уезжает за экран.",...(gn=(pn=x.parameters)==null?void 0:pn.docs)==null?void 0:gn.description}}};var mn,yn,bn,hn,xn;f.parameters={...f.parameters,docs:{...(mn=f.parameters)==null?void 0:mn.docs,source:{originalSource:`{
  name: 'Тест: нажатие, загрузка, disabled',
  args: {
    children: 'Тест'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Тест'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    // fireEvent, not userEvent.pointer: each userEvent call has its own virtual mouse, so a release in a
    // second call does not know the button is held. The attribute follows a React render, so wait.
    fireEvent.pointerDown(button, {
      button: 0,
      pointerType: 'touch'
    });
    await waitFor(() => expect(button).toHaveAttribute('data-pressed'));
    fireEvent.pointerUp(button, {
      button: 0,
      pointerType: 'touch'
    });
    await waitFor(() => expect(button).not.toHaveAttribute('data-pressed'));
    // sliding the finger off cancels the press (React derives onPointerLeave from pointerout)
    fireEvent.pointerDown(button, {
      button: 0,
      pointerType: 'touch'
    });
    await waitFor(() => expect(button).toHaveAttribute('data-pressed'));
    fireEvent.pointerOut(button, {
      pointerType: 'touch',
      relatedTarget: document.body
    });
    await waitFor(() => expect(button).not.toHaveAttribute('data-pressed'));
  }
}`,...(bn=(yn=f.parameters)==null?void 0:yn.docs)==null?void 0:bn.source},description:{story:"Interaction test: a click fires, loading and disabled swallow it, the press state follows the pointer.",...(xn=(hn=f.parameters)==null?void 0:hn.docs)==null?void 0:xn.description}}};var fn,vn,Bn;v.parameters={...v.parameters,docs:{...(fn=v.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  name: 'Тест: в загрузке клик не проходит',
  args: {
    children: 'Тест',
    loading: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: /Тест/
    });
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(Bn=(vn=v.parameters)==null?void 0:vn.docs)==null?void 0:Bn.source}}};const _n=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,BehaviourTest:f,CaseFilterFooter:x,FullWidth:h,Loaders:y,LoadingSwallowsClick:v,Playground:p,PressTokens:m,WithIconsAndCaption:b,__namedExportsOrder:Pn,default:jn},Symbol.toStringTag,{value:"Module"}));export{g as A,_n as B,x as C,h as F,y as L,p as P,b as W,m as a};
