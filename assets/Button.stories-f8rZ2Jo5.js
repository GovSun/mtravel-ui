import{j as n,r as w}from"./iframe-DuqTOznb.js";import{t as Fn}from"./tokens-INIU3VNa.js";import{B as s}from"./Button-CKwNO4NU.js";import{C as T}from"./general-DYSfllt2.js";import{C as k}from"./arrows-C0H-naDa.js";const{expect:o,fireEvent:E,fn:Rn,userEvent:kn,waitFor:A,within:C}=__STORYBOOK_MODULE_TEST__,Pn={title:"Components/Button",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=75-214"}},args:{children:"Кнопка",variant:"primary",size:52,radius:16,disabled:!1,loading:!1,loader:"bar",fullWidth:!1,onClick:Rn()},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40]},radius:{control:"inline-radio",options:[16,"full"]},loader:{control:"inline-radio",options:["bar","underline","sweep","dots","spinner"]},iconLeft:{control:"inline-radio",options:["нет","circle"],mapping:{нет:void 0,circle:n.jsx(T,{})}},iconRight:{control:"inline-radio",options:["нет","chevron"],mapping:{нет:void 0,chevron:n.jsx(k,{})}},caption:{control:"text"},forcePressed:{control:!1},href:{control:"text"}}},j=["primary","secondary","ghost"],In=[52,48,44,40],Wn=[16,"full"],S=["Default","Pressed","Disabled","Loading"],R={primary:"Primary",secondary:"Secondary",ghost:"Ghost"},Ln=new Map(Fn.map(e=>[e.cssVar,e])),zn=e=>Ln.get(e),D={primary:{Default:{bg:"--button-bg-primary-default",fg:"--button-text-primary"},Pressed:{bg:"--button-bg-primary-pressed",fg:"--button-text-primary"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-primary-default",fg:"--button-text-primary"}},secondary:{Default:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary"},Pressed:{bg:"--button-bg-secondary-pressed",fg:"--button-text-secondary"},Disabled:{bg:"--button-bg-disabled",fg:"--button-text-disabled"},Loading:{bg:"--button-bg-secondary-default",fg:"--button-text-secondary"}},ghost:{Default:{bg:null,fg:"--button-text-ghost"},Pressed:{bg:"--button-bg-ghost-pressed",fg:"--button-text-ghost"},Disabled:{bg:null,fg:"--button-text-disabled"},Loading:{bg:null,fg:"--button-text-ghost"}}},i=({children:e,strong:t})=>n.jsx("span",{className:t?"im-14-m":"im-12-r",style:{color:t?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:e}),F=({cssVar:e})=>{if(!e)return n.jsx(i,{children:"прозрачный"});const t=zn(e);return n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:[n.jsx("span",{style:{width:10,height:10,borderRadius:3,background:t==null?void 0:t.resolved,boxShadow:"inset 0 0 0 1px rgba(0,0,0,.08)"}}),n.jsx(i,{children:(t==null?void 0:t.figma)??e})]})},p={},g={name:"Все размеры и состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsx("div",{style:{display:"grid",gap:40,padding:16,boxSizing:"border-box",maxWidth:"100%",overflowX:"auto"},children:j.map(e=>n.jsxs("section",{style:{display:"grid",gap:12},children:[n.jsx(i,{strong:!0,children:R[e]}),n.jsx("div",{style:{display:"flex",gap:48,flexWrap:"wrap"},children:Wn.map(t=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:`32px repeat(${S.length}, minmax(112px, auto))`,gap:"10px 16px",alignItems:"center"},children:[n.jsxs(i,{children:["R ",t==="full"?"Full":16]}),S.map(r=>n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(i,{strong:!0,children:r}),n.jsx(F,{cssVar:D[e][r].bg}),n.jsx(F,{cssVar:D[e][r].fg})]},r)),In.map(r=>n.jsxs(w.Fragment,{children:[n.jsx(i,{children:r}),S.map(a=>n.jsx("span",{children:n.jsx(s,{variant:e,size:r,radius:t,forcePressed:a==="Pressed",disabled:a==="Disabled",loading:a==="Loading",loader:"spinner",children:"Кнопка"})},a))]},r))]},String(t)))})]},e))})},m={name:"Нажатие: смена токена",parameters:{controls:{disable:!0}},render:function(){const[t,r]=w.useState(null);return n.jsx("div",{style:{display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center"},children:j.map(a=>{const l=t===a,d=D[a][l?"Pressed":"Default"],u=c=>()=>r(c);return n.jsxs("figure",{style:{margin:0,display:"grid",justifyItems:"center",gap:10,minWidth:180},children:[n.jsx(s,{variant:a,onPointerDown:u(a),onPointerUp:u(null),onPointerLeave:u(null),onPointerCancel:u(null),children:R[a]}),n.jsxs("figcaption",{style:{display:"grid",justifyItems:"center",gap:2},children:[n.jsx(F,{cssVar:d.bg}),n.jsx(i,{children:l?"scale 0.97 · 100 мс":"scale 1 · 240 мс назад"})]})]},a)})})}},On=[{kind:"bar",name:"Линия",note:"дорожка вместо текста, отрезок пробегает с ускорением и торможением"},{kind:"underline",name:"Линия под текстом",note:"текст остаётся, под ним бежит полоска"},{kind:"sweep",name:"Перелив",note:"текст остаётся, по кнопке проходит мягкий блик"},{kind:"dots",name:"Точки",note:"три точки в ряд, по ним идёт волна"},{kind:"spinner",name:"Спиннер (сейчас)",note:"Figma Spinner 75:8, 3/4 кольца"}],y={name:"Лоадеры: варианты",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[t,r]=w.useState(!0),[a,l]=w.useState(null),d=u=>()=>{l(u),window.setTimeout(()=>l(c=>c===u?null:c),2500)};return n.jsxs("div",{style:{display:"grid",gap:20},children:[n.jsx("div",{children:n.jsx(s,{variant:"secondary",size:40,radius:"full",onClick:()=>r(u=>!u),children:t?"Выключить загрузку":"Включить загрузку"})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(160px, 220px) repeat(3, auto) auto",gap:"16px 20px",alignItems:"center"},children:[n.jsx("span",{}),j.map(u=>n.jsx(i,{strong:!0,children:R[u]},u)),n.jsx(i,{strong:!0,children:"Нажми"}),On.map(({kind:u,name:c,note:Dn})=>n.jsxs(w.Fragment,{children:[n.jsxs("span",{style:{display:"grid",gap:2},children:[n.jsx(i,{strong:!0,children:c}),n.jsx(i,{children:Dn})]}),j.map(P=>n.jsx("span",{children:n.jsx(s,{variant:P,loading:t,loader:u,children:"Оплатить"})},P)),n.jsx("span",{children:n.jsx(s,{loader:u,loading:a===u,onClick:d(u),children:"Оплатить 12 400 ⃀"})})]},u))]})]})}},h={name:"Иконки и подпись",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[n.jsx(s,{iconLeft:n.jsx(T,{}),children:"Кнопка"}),n.jsx(s,{variant:"secondary",iconRight:n.jsx(k,{}),children:"Кнопка"}),n.jsx(s,{variant:"ghost",iconLeft:n.jsx(T,{}),iconRight:n.jsx(k,{}),children:"Кнопка"}),n.jsx(s,{caption:"12 400 ⃀ за двоих",children:"Оплатить"})]})},b={name:"На всю ширину",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"grid",gap:8,padding:16,boxSizing:"border-box",maxWidth:"100%"},children:[n.jsx(s,{fullWidth:!0,children:"Продолжить"}),n.jsx(s,{fullWidth:!0,variant:"ghost",children:"Позже"})]})},x={name:"Кейс: футер шторки фильтров",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:12,padding:16,boxSizing:"border-box",maxWidth:"100%"},children:[n.jsx(s,{fullWidth:!0,variant:"secondary",size:48,children:"Сбросить"}),n.jsx(s,{fullWidth:!0,size:48,children:"Показать 128"})]}),play:async({canvasElement:e})=>{const[t,r]=Array.from(e.querySelectorAll("button")),a=e.querySelector("button").parentElement,l=t.getBoundingClientRect(),d=r.getBoundingClientRect(),u=a.getBoundingClientRect();await o(Math.abs(l.width-d.width)).toBeLessThan(2),await o(d.right).toBeLessThanOrEqual(u.right+.5)}},f={name:"Кейс: кнопка-ссылка (href)",parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",justifyContent:"center"},children:[n.jsx(s,{href:"#details",variant:"secondary",size:44,children:"Подробнее"}),n.jsx(s,{href:"https://example.com",target:"_blank",variant:"ghost",size:44,children:"На сайт партнёра"})]}),play:async({canvasElement:e})=>{const t=C(e).getByRole("link",{name:"На сайт партнёра"});await o(t).toHaveAttribute("rel","noopener noreferrer"),await o(C(e).getByRole("link",{name:"Подробнее"})).toHaveAttribute("href","#details")}},v={name:"Тест: нажатие, загрузка, disabled",args:{children:"Тест"},play:async({canvasElement:e,args:t})=>{const a=C(e).getByRole("button",{name:"Тест"});await kn.click(a),await o(t.onClick).toHaveBeenCalledTimes(1),E.pointerDown(a,{button:0,pointerType:"touch"}),await A(()=>o(a).toHaveAttribute("data-pressed")),E.pointerUp(a,{button:0,pointerType:"touch"}),await A(()=>o(a).not.toHaveAttribute("data-pressed")),E.pointerDown(a,{button:0,pointerType:"touch"}),await A(()=>o(a).toHaveAttribute("data-pressed")),E.pointerOut(a,{pointerType:"touch",relatedTarget:document.body}),await A(()=>o(a).not.toHaveAttribute("data-pressed"))}},B={name:"Тест: в загрузке клик не проходит",args:{children:"Тест",loading:!0},play:async({canvasElement:e,args:t})=>{const r=C(e).getByRole("button",{name:/Тест/});await o(r).toHaveAttribute("aria-busy","true"),await kn.click(r),await o(t.onClick).not.toHaveBeenCalled()}},Hn=["Playground","AllStates","PressTokens","Loaders","WithIconsAndCaption","FullWidth","CaseFilterFooter","CaseLink","BehaviourTest","LoadingSwallowsClick"];var I,W,L,z,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(L=(W=p.parameters)==null?void 0:W.docs)==null?void 0:L.source},description:{story:"Playground: every prop on the right. Press and hold to see the press transition.",...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.description}}};var H,_,N,V,M;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(_=g.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:`Strip of every size and state, both radii, as in Figma 75:214. The row under the headers names the
background / text token of that state; «Pressed» is forced here, live it comes from the finger.`,...(M=(V=g.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var q,K,U,X,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:"Live: press and hold — the label under each button shows the token the background is on right now.",...(G=(X=m.parameters)==null?void 0:X.docs)==null?void 0:G.description}}};var Z,$,J,Y,Q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(J=($=y.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:`Proposals for the linear loader, side by side on every type. «Включить / выключить» toggles loading
to show how the label hands over to the loader and back. Tap a button in the last column to see a
real request: 2.5 s of loading.`,...(Q=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var nn,en,tn,an,un;h.parameters={...h.parameters,docs:{...(nn=h.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(tn=(en=h.parameters)==null?void 0:en.docs)==null?void 0:tn.source},description:{story:"Icons 16 px left / right and a caption (Figma «Show caption»).",...(un=(an=h.parameters)==null?void 0:an.docs)==null?void 0:un.description}}};var rn,sn,on,ln,dn;b.parameters={...b.parameters,docs:{...(rn=b.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
}`,...(on=(sn=b.parameters)==null?void 0:sn.docs)==null?void 0:on.source},description:{story:"Full width at the bottom of a sheet, the usual place for the 52 Primary.",...(dn=(ln=b.parameters)==null?void 0:ln.docs)==null?void 0:dn.description}}};var cn,pn,gn,mn,yn;x.parameters={...x.parameters,docs:{...(cn=x.parameters)==null?void 0:cn.docs,source:{originalSource:`{
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
}`,...(gn=(pn=x.parameters)==null?void 0:pn.docs)==null?void 0:gn.source},description:{story:"Кейс «Фильтры» (Выходные): два fullWidth-кнопки в одной строке делят ширину поровну, вторая не уезжает за экран.",...(yn=(mn=x.parameters)==null?void 0:mn.docs)==null?void 0:yn.description}}};var hn,bn,xn,fn,vn;f.parameters={...f.parameters,docs:{...(hn=f.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  name: 'Кейс: кнопка-ссылка (href)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      <Button href="#details" variant="secondary" size={44}>
        Подробнее
      </Button>
      <Button href="https://example.com" target="_blank" variant="ghost" size={44}>
        На сайт партнёра
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByRole('link', {
      name: 'На сайт партнёра'
    });
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(within(canvasElement).getByRole('link', {
      name: 'Подробнее'
    })).toHaveAttribute('href', '#details');
  }
}`,...(xn=(bn=f.parameters)==null?void 0:bn.docs)==null?void 0:xn.source},description:{story:"Кейс «Оплата»: главная кнопка с подписью суммы; ссылкой (`href`) выглядит так же.",...(vn=(fn=f.parameters)==null?void 0:fn.docs)==null?void 0:vn.description}}};var Bn,wn,En,An,Cn;v.parameters={...v.parameters,docs:{...(Bn=v.parameters)==null?void 0:Bn.docs,source:{originalSource:`{
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
}`,...(En=(wn=v.parameters)==null?void 0:wn.docs)==null?void 0:En.source},description:{story:"Interaction test: a click fires, loading and disabled swallow it, the press state follows the pointer.",...(Cn=(An=v.parameters)==null?void 0:An.docs)==null?void 0:Cn.description}}};var jn,Sn,Tn;B.parameters={...B.parameters,docs:{...(jn=B.parameters)==null?void 0:jn.docs,source:{originalSource:`{
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
}`,...(Tn=(Sn=B.parameters)==null?void 0:Sn.docs)==null?void 0:Tn.source}}};const Kn=Object.freeze(Object.defineProperty({__proto__:null,AllStates:g,BehaviourTest:v,CaseFilterFooter:x,CaseLink:f,FullWidth:b,Loaders:y,LoadingSwallowsClick:B,Playground:p,PressTokens:m,WithIconsAndCaption:h,__namedExportsOrder:Hn,default:Pn},Symbol.toStringTag,{value:"Module"}));export{g as A,Kn as B,x as C,b as F,y as L,p as P,h as W,m as a,f as b};
