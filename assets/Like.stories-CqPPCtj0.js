import{j as t,r as h}from"./iframe-DuqTOznb.js";import{F as x}from"./FavouriteIcon-rVoV_bSc.js";import{L as v}from"./LikeButton-BdVkZ7Un.js";import{B as oe}from"./Button-CKwNO4NU.js";const{expect:r,fireEvent:E,fn:ie,userEvent:g,waitFor:b,within:f}=__STORYBOOK_MODULE_TEST__,de={title:"Components/Like",component:v,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=482-7928"}},args:{disabled:!1,onLikedChange:ie()},argTypes:{liked:{control:"boolean"},defaultLiked:{control:"boolean"},forcePressed:{control:!1},variant:{control:"inline-radio",options:["badge","outline"]}}},y="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",s={decorators:[u=>t.jsx("div",{style:{width:160,height:120,borderRadius:24,background:y,display:"grid",placeItems:"center"},children:t.jsx(u,{})})]},o={name:"Состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"flex",gap:24,padding:24,margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",flexWrap:"wrap",borderRadius:24,background:y},children:[["Like=False",!1,!1],["Like=True",!0,!1],["Pressed",!1,!0],["Pressed, liked",!0,!0]].map(([u,e,a])=>t.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:6},children:[t.jsx(v,{liked:e,forcePressed:a}),t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-inverse-constant-primary)"},children:u})]},u))})},i={name:"FavouriteIcon: оба вида",parameters:{layout:"fullscreen",controls:{disable:!0}},render:function(){const[e,a]=h.useState(!1),n={cursor:"pointer",padding:8,border:0,borderRadius:"var(--radius-full)",background:"none",WebkitTapHighlightColor:"transparent"};return t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:24,margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",borderRadius:24,background:y},children:[t.jsx("button",{type:"button","aria-label":"В избранное","aria-pressed":e,onClick:()=>a(k=>!k),style:{...n,color:"var(--control-icon-inverse)"},children:t.jsx(x,{liked:e,variant:"outline"})}),t.jsx("button",{type:"button","aria-label":"В избранное (значок)","aria-pressed":e,onClick:()=>a(k=>!k),style:n,children:t.jsx(x,{liked:e,variant:"badge"})})]})}},d={name:"Управляемый",parameters:{controls:{disable:!0}},render:function(){const[e,a]=h.useState(!1);return t.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:12,padding:24,borderRadius:24,background:"var(--color-bg-surface)"},children:[t.jsx(v,{liked:e,onLikedChange:a,name:"Обзорная по Бишкеку"}),t.jsx(oe,{variant:"secondary",size:44,onClick:()=>a(n=>!n),children:"Переключить снаружи"})]})}},l={name:"Управляемый, ответ позже",parameters:{controls:{disable:!0}},render:function(){const[e,a]=h.useState(!1);return t.jsx("div",{style:{padding:24,borderRadius:24,background:y},children:t.jsx(v,{liked:e,onLikedChange:n=>window.setTimeout(()=>a(n),300),name:"Медленный запрос"})})}},c={name:"Тест: переключение",play:async({canvasElement:u,args:e})=>{const n=f(u).getByRole("button",{name:"В избранное"});await r(n).toHaveAttribute("aria-pressed","false"),await g.click(n),await r(e.onLikedChange).toHaveBeenLastCalledWith(!0),await b(()=>r(n).toHaveAttribute("aria-pressed","true")),await r(n).toHaveAccessibleName("В избранное"),await g.click(n),await r(e.onLikedChange).toHaveBeenLastCalledWith(!1),await b(()=>r(n).toHaveAttribute("aria-pressed","false")),E.pointerDown(n,{button:0,pointerType:"touch"}),await b(()=>r(n).toHaveAttribute("data-pressed")),E.pointerOut(n,{pointerType:"touch",relatedTarget:document.body}),await b(()=>r(n).not.toHaveAttribute("data-pressed"))}},m={name:"Тест: disabled",args:{disabled:!0},play:async({canvasElement:u,args:e})=>{const a=f(u).getByRole("button");await g.click(a),await r(e.onLikedChange).not.toHaveBeenCalled(),await r(a).toHaveAttribute("aria-pressed","false")}},p={name:"Кейс: outline-сердце на панели",args:{variant:"outline",name:"Обзорная по Бишкеку"},decorators:[u=>t.jsx("div",{style:{padding:16,borderRadius:24,background:"var(--color-bg-surface)",color:"var(--color-text-primary)"},children:t.jsx(u,{})})],play:async({canvasElement:u})=>{const e=f(u).getByRole("button",{name:"В избранное: Обзорная по Бишкеку"});await g.click(e),await b(()=>r(e).toHaveAttribute("aria-pressed","true"))}},le=["Playground","States","Icons","Controlled","ControlledSlow","ToggleTest","DisabledTest","CaseOutline"];var w,C,B,F,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 160,
    height: 120,
    borderRadius: 24,
    background: PHOTO,
    display: 'grid',
    placeItems: 'center'
  }}>
        <Story />
      </div>]
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Playground: tap the heart. It sits over a photo, as in the product.",...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var D,S,A,T,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Состояния',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    padding: 24,
    margin: 16,
    boxSizing: 'border-box',
    maxWidth: 'calc(100% - 32px)',
    flexWrap: 'wrap',
    borderRadius: 24,
    background: PHOTO
  }}>
      {([['Like=False', false, false], ['Like=True', true, false], ['Pressed', false, true], ['Pressed, liked', true, true]] as const).map(([name, liked, pressed]) => <div key={name} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 6
    }}>
          <LikeButton liked={liked} forcePressed={pressed} />
          <span className="im-12-r" style={{
        color: 'var(--color-text-inverse-constant-primary)'
      }}>
            {name}
          </span>
        </div>)}
    </div>
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:"Figma 482:7928: Like=False and Like=True, plus the forced press. Slow motion in the toolbar shows the pop.",...(H=(T=o.parameters)==null?void 0:T.docs)==null?void 0:H.description}}};var R,j,O,P,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'FavouriteIcon: оба вида',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [liked, setLiked] = useState(false);
    // The glyph is decorative (aria-hidden): the button around it carries the name, and keeps the focus ring.
    const button: CSSProperties = {
      cursor: 'pointer',
      padding: 8,
      border: 0,
      borderRadius: 'var(--radius-full)',
      background: 'none',
      WebkitTapHighlightColor: 'transparent'
    };
    return <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      padding: 24,
      margin: 16,
      boxSizing: 'border-box',
      maxWidth: 'calc(100% - 32px)',
      borderRadius: 24,
      background: PHOTO
    }}>
        <button type="button" aria-label="В избранное" aria-pressed={liked} onClick={() => setLiked(v => !v)} style={{
        ...button,
        color: 'var(--control-icon-inverse)'
      }}>
          <FavouriteIcon liked={liked} variant="outline" />
        </button>
        <button type="button" aria-label="В избранное (значок)" aria-pressed={liked} onClick={() => setLiked(v => !v)} style={button}>
          <FavouriteIcon liked={liked} variant="badge" />
        </button>
      </div>;
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source},description:{story:"The same heart glyph inside other containers, both looks.",...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var W,_,z,N,M;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Управляемый',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [liked, setLiked] = useState(false);
    return <div style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 12,
      padding: 24,
      borderRadius: 24,
      background: 'var(--color-bg-surface)'
    }}>
        <LikeButton liked={liked} onLikedChange={setLiked} name="Обзорная по Бишкеку" />
        <Button variant="secondary" size={44} onClick={() => setLiked(v => !v)}>
          Переключить снаружи
        </Button>
      </div>;
  }
}`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"Controlled: the value comes from outside; a change that did not come from a tap does not pop.",...(M=(N=d.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var K,U,G,J,V;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Управляемый, ответ позже',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [liked, setLiked] = useState(false);
    return <div style={{
      padding: 24,
      borderRadius: 24,
      background: PHOTO
    }}>
        <LikeButton liked={liked} onLikedChange={v => window.setTimeout(() => setLiked(v), 300)} name="Медленный запрос" />
      </div>;
  }
}`,...(G=(U=l.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:"Управляемый, родитель отвечает позже (запрос в сеть): пружина всё равно играет, потому что тап был.",...(V=(J=l.parameters)==null?void 0:J.docs)==null?void 0:V.description}}};var X,Y,q,Q,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Тест: переключение',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'В избранное'
    });
    await expect(button).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(button);
    await expect(args.onLikedChange).toHaveBeenLastCalledWith(true);
    await waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
    await expect(button).toHaveAccessibleName('В избранное'); // the name is constant, aria-pressed carries the state
    await userEvent.click(button);
    await expect(args.onLikedChange).toHaveBeenLastCalledWith(false);
    await waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'false'));
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
}`,...(q=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:q.source},description:{story:"Interaction test: a tap toggles aria-pressed and the label, onLikedChange is called, disabled does nothing.",...(Z=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Тест: disabled',
  args: {
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button');
    await userEvent.click(button);
    await expect(args.onLikedChange).not.toHaveBeenCalled();
    await expect(button).toHaveAttribute('aria-pressed', 'false');
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ue,ae,re,se;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Кейс: outline-сердце на панели',
  args: {
    variant: 'outline',
    name: 'Обзорная по Бишкеку'
  },
  decorators: [Story => <div style={{
    padding: 16,
    borderRadius: 24,
    background: 'var(--color-bg-surface)',
    color: 'var(--color-text-primary)'
  }}>
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'В избранное: Обзорная по Бишкеку'
    });
    await userEvent.click(button);
    await waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
  }
}`,...(ae=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:ae.source},description:{story:'Кейс «Карточка»: `variant="outline"` рисует обычное сердце цветом текста, нужное внутри панели или стеклянной кнопки.',...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};const ge=Object.freeze(Object.defineProperty({__proto__:null,CaseOutline:p,Controlled:d,ControlledSlow:l,DisabledTest:m,Icons:i,Playground:s,States:o,ToggleTest:c,__namedExportsOrder:le,default:de},Symbol.toStringTag,{value:"Module"}));export{p as C,i as I,ge as L,s as P,o as S,d as a};
