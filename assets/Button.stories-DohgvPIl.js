import{j as n,r as f}from"./iframe-Dr5ib33t.js";import{C as A,a as E}from"./index-CU5QHq_h.js";import{t as fn}from"./tokens-CNIzVYFy.js";import{B as o}from"./Button-DFQPOwGN.js";const{expect:u,fireEvent:v,fn:vn,userEvent:hn,waitFor:w,within:bn}=__STORYBOOK_MODULE_TEST__,wn={title:"Components/Button",component:o,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=75-214"}},args:{children:"Кнопка",variant:"primary",size:52,radius:16,disabled:!1,loading:!1,loader:"bar",fullWidth:!1,onClick:vn()},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40]},radius:{control:"inline-radio",options:[16,"full"]},loader:{control:"inline-radio",options:["bar","underline","sweep","dots","spinner"]},iconLeft:{control:"inline-radio",options:["нет","circle"],mapping:{нет:void 0,circle:n.jsx(A,{})}},iconRight:{control:"inline-radio",options:["нет","chevron"],mapping:{нет:void 0,chevron:n.jsx(E,{})}},caption:{control:"text"},pressed:{control:!1}}},B=["primary","secondary","ghost"],Bn=[52,48,44,40],Cn=[16,"full"],j=["Default","Pressed","Disabled","Loading"],k={primary:"Primary",secondary:"Secondary",ghost:"Ghost"},jn=new Map(fn.map(t=>[t.cssVar,t])),An=t=>jn.get(t),T={primary:{Default:{bg:"--button-bg-primary-default",fg:"--button-text-primary-default"},Pressed:{bg:"--button-bg-primary-pressed",fg:"--button-text-primary-default"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-primary-default",fg:"--button-text-primary-default"}},secondary:{Default:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary-default"},Pressed:{bg:"--button-bg-secondary-pressed",fg:"--button-text-secondary-default"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary-default"}},ghost:{Default:{bg:null,fg:"--button-text-ghost-default"},Pressed:{bg:"--button-bg-ghost-pressed",fg:"--button-text-ghost-default"},Disabled:{bg:null,fg:"--button-text-disabled"},Loading:{bg:null,fg:"--button-text-ghost-default"}}},i=({children:t,strong:a})=>n.jsx("span",{className:a?"im-14-m":"im-12-r",style:{color:a?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:t}),S=({cssVar:t})=>{if(!t)return n.jsx(i,{children:"прозрачный"});const a=An(t);return n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[n.jsx("span",{style:{width:10,height:10,borderRadius:3,background:a==null?void 0:a.resolved,boxShadow:"inset 0 0 0 1px rgba(0,0,0,.08)"}}),n.jsx(i,{children:(a==null?void 0:a.figma)??t})]})},l={},c={name:"Все размеры и состояния",parameters:{layout:"padded",controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gap:40},children:B.map(t=>n.jsxs("section",{style:{display:"grid",gap:12},children:[n.jsx(i,{strong:!0,children:k[t]}),n.jsx("div",{style:{display:"flex",gap:48,flexWrap:"wrap"},children:Cn.map(a=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:`32px repeat(${j.length}, minmax(112px, auto))`,gap:"10px 16px",alignItems:"center"},children:[n.jsxs(i,{children:["R ",a==="full"?"Full":16]}),j.map(r=>n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(i,{strong:!0,children:r}),n.jsx(S,{cssVar:T[t][r].bg}),n.jsx(S,{cssVar:T[t][r].fg})]},r)),Bn.map(r=>n.jsxs(f.Fragment,{children:[n.jsx(i,{children:r}),j.map(e=>n.jsx("span",{children:n.jsx(o,{variant:t,size:r,radius:a,pressed:e==="Pressed",disabled:e==="Disabled",loading:e==="Loading",loader:"spinner",children:"Кнопка"})},e))]},r))]},String(a)))})]},t))})},p={name:"Нажатие: смена токена",parameters:{controls:{disable:!0}},render:function(){const[a,r]=f.useState(null);return n.jsx("div",{style:{display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center"},children:B.map(e=>{const b=a===e,C=T[e][b?"Pressed":"Default"],s=d=>()=>r(d);return n.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:10,minWidth:180},children:[n.jsx(o,{variant:e,onPointerDown:s(e),onPointerUp:s(null),onPointerLeave:s(null),onPointerCancel:s(null),children:k[e]}),n.jsxs("figcaption",{style:{display:"grid",justifyItems:"center",gap:2},children:[n.jsx(S,{cssVar:C.bg}),n.jsx(i,{children:b?"scale 0.97 · 100 мс":"scale 1 · 240 мс назад"})]})]},e)})})}},En=[{kind:"bar",name:"Линия",note:"дорожка вместо текста, отрезок пробегает с ускорением и торможением"},{kind:"underline",name:"Линия под текстом",note:"текст остаётся, под ним бежит полоска"},{kind:"sweep",name:"Перелив",note:"текст остаётся, по кнопке проходит мягкий блик"},{kind:"dots",name:"Точки",note:"три точки в ряд, по ним идёт волна"},{kind:"spinner",name:"Спиннер (сейчас)",note:"Figma Spinner 75:8, 3/4 кольца"}],g={name:"Лоадеры: варианты",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[a,r]=f.useState(!0),[e,b]=f.useState(null),C=s=>()=>{b(s),window.setTimeout(()=>b(d=>d===s?null:d),2500)};return n.jsxs("div",{style:{display:"grid",gap:20},children:[n.jsx("div",{children:n.jsx(o,{variant:"secondary",size:40,radius:"full",onClick:()=>r(s=>!s),children:a?"Выключить загрузку":"Включить загрузку"})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(160px, 220px) repeat(3, auto) auto",gap:"16px 20px",alignItems:"center"},children:[n.jsx("span",{}),B.map(s=>n.jsx(i,{strong:!0,children:k[s]},s)),n.jsx(i,{strong:!0,children:"Нажми"}),En.map(({kind:s,name:d,note:xn})=>n.jsxs(f.Fragment,{children:[n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(i,{strong:!0,children:d}),n.jsx(i,{children:xn})]}),B.map(D=>n.jsx("span",{children:n.jsx(o,{variant:D,loading:a,loader:s,children:"Оплатить"})},D)),n.jsx("span",{children:n.jsx(o,{loader:s,loading:e===s,onClick:C(s),children:"Оплатить 12 400 ⃀"})})]},s))]})]})}},m={name:"Иконки и подпись",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[n.jsx(o,{iconLeft:n.jsx(A,{}),children:"Кнопка"}),n.jsx(o,{variant:"secondary",iconRight:n.jsx(E,{}),children:"Кнопка"}),n.jsx(o,{variant:"ghost",iconLeft:n.jsx(A,{}),iconRight:n.jsx(E,{}),children:"Кнопка"}),n.jsx(o,{caption:"12 400 ⃀ за двоих",children:"Оплатить"})]})},y={name:"На всю ширину",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{width:361,display:"grid",gap:8},children:[n.jsx(o,{fullWidth:!0,children:"Продолжить"}),n.jsx(o,{fullWidth:!0,variant:"ghost",children:"Позже"})]})},h={name:"Тест: нажатие, загрузка, disabled",args:{children:"Тест"},play:async({canvasElement:t,args:a})=>{const e=bn(t).getByRole("button",{name:"Тест"});await hn.click(e),await u(a.onClick).toHaveBeenCalledTimes(1),v.pointerDown(e,{button:0,pointerType:"touch"}),await w(()=>u(e).toHaveAttribute("data-pressed")),v.pointerUp(e,{button:0,pointerType:"touch"}),await w(()=>u(e).not.toHaveAttribute("data-pressed")),v.pointerDown(e,{button:0,pointerType:"touch"}),await w(()=>u(e).toHaveAttribute("data-pressed")),v.pointerOut(e,{pointerType:"touch",relatedTarget:document.body}),await w(()=>u(e).not.toHaveAttribute("data-pressed"))}},x={name:"Тест: в загрузке клик не проходит",args:{children:"Тест",loading:!0},play:async({canvasElement:t,args:a})=>{const r=bn(t).getByRole("button",{name:/Тест/});await u(r).toHaveAttribute("aria-busy","true"),await hn.click(r),await u(a.onClick).not.toHaveBeenCalled()}},Tn=["Playground","AllStates","PressTokens","Loaders","WithIconsAndCaption","FullWidth","BehaviourTest","LoadingSwallowsClick"];var F,I,R,P,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source},description:{story:"Playground: every prop on the right. Press and hold to see the press transition.",...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var O,W,_,H,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Все размеры и состояния',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 40
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
                        <Button variant={variant} size={size} radius={radius} pressed={s === 'Pressed'} disabled={s === 'Disabled'} loading={s === 'Loading'} loader="spinner">
                          Кнопка
                        </Button>
                      </span>)}
                  </Fragment>)}
              </div>)}
          </div>
        </section>)}
    </div>
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source},description:{story:`Strip of every size and state, both radii, as in Figma 75:214. The row under the headers names the
background / text token of that state; «Pressed» is forced here, live it comes from the finger.`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var V,z,M,K,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(z=p.parameters)==null?void 0:z.docs)==null?void 0:M.source},description:{story:"Live: press and hold — the label under each button shows the token the background is on right now.",...(U=(K=p.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};var G,Z,$,q,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:`Proposals for the linear loader, side by side on every type. «Включить / выключить» toggles loading
to show how the label hands over to the loader and back. Tap a button in the last column to see a
real request: 2.5 s of loading.`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var X,Y,Q,nn,en;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
      <Button variant="secondary" iconRight={<ChevronRightIcon />}>
        Кнопка
      </Button>
      <Button variant="ghost" iconLeft={<CircleIcon />} iconRight={<ChevronRightIcon />}>
        Кнопка
      </Button>
      <Button caption="12 400 ⃀ за двоих">Оплатить</Button>
    </div>
}`,...(Q=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Q.source},description:{story:"Icons 16 px left / right and a caption (Figma «Show caption»).",...(en=(nn=m.parameters)==null?void 0:nn.docs)==null?void 0:en.description}}};var tn,an,sn,rn,on;y.parameters={...y.parameters,docs:{...(tn=y.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  name: 'На всю ширину',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 361,
    display: 'grid',
    gap: 8
  }}>
      <Button fullWidth>Продолжить</Button>
      <Button fullWidth variant="ghost">
        Позже
      </Button>
    </div>
}`,...(sn=(an=y.parameters)==null?void 0:an.docs)==null?void 0:sn.source},description:{story:"Full width at the bottom of a sheet, the usual place for the 52 Primary.",...(on=(rn=y.parameters)==null?void 0:rn.docs)==null?void 0:on.description}}};var un,dn,ln,cn,pn;h.parameters={...h.parameters,docs:{...(un=h.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(ln=(dn=h.parameters)==null?void 0:dn.docs)==null?void 0:ln.source},description:{story:"Interaction test: a click fires, loading and disabled swallow it, the press state follows the pointer.",...(pn=(cn=h.parameters)==null?void 0:cn.docs)==null?void 0:pn.description}}};var gn,mn,yn;x.parameters={...x.parameters,docs:{...(gn=x.parameters)==null?void 0:gn.docs,source:{originalSource:`{
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
}`,...(yn=(mn=x.parameters)==null?void 0:mn.docs)==null?void 0:yn.source}}};const In=Object.freeze(Object.defineProperty({__proto__:null,AllStates:c,BehaviourTest:h,FullWidth:y,Loaders:g,LoadingSwallowsClick:x,Playground:l,PressTokens:p,WithIconsAndCaption:m,__namedExportsOrder:Tn,default:wn},Symbol.toStringTag,{value:"Module"}));export{c as A,In as B,y as F,g as L,l as P,m as W,p as a};
