import{j as e,r as k}from"./iframe-DyD5Yel4.js";import{F as x}from"./FavouriteIcon-C8L7FAG0.js";import{L as g}from"./LikeButton-BMykRAqT.js";import{P as oe}from"./photos-D1Eacwwu.js";import{B as ie}from"./Button-grGIhY78.js";const{expect:u,fireEvent:w,fn:de,userEvent:v,waitFor:b,within:f}=__STORYBOOK_MODULE_TEST__,le={title:"Components/Like",component:g,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=482-7928"}},args:{disabled:!1,onLikedChange:de()},argTypes:{liked:{control:"boolean"},defaultLiked:{control:"boolean"},forcePressed:{control:!1},variant:{control:"inline-radio",options:["badge","outline"]}}},h="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",s={decorators:[a=>e.jsx("div",{style:{width:160,height:120,borderRadius:24,background:h,display:"grid",placeItems:"center"},children:e.jsx(a,{})})]},o={name:"Состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,padding:24,margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",flexWrap:"wrap",borderRadius:24,background:h},children:[["Like=False",!1,!1],["Like=True",!0,!1],["Pressed",!1,!0],["Pressed, liked",!0,!0]].map(([a,t,r])=>e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:6},children:[e.jsx(g,{liked:t,forcePressed:r}),e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-inverse-constant-primary)"},children:a})]},a))})},i={name:"FavouriteIcon: оба вида",parameters:{layout:"fullscreen",controls:{disable:!0}},render:function(){const[t,r]=k.useState(!1),n={cursor:"pointer",padding:8,border:0,borderRadius:"var(--radius-full)",background:"none",WebkitTapHighlightColor:"transparent"};return e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:24,margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",borderRadius:24,background:h},children:[e.jsx("button",{type:"button","aria-label":"В избранное","aria-pressed":t,onClick:()=>r(y=>!y),style:{...n,color:"var(--control-icon-inverse)"},children:e.jsx(x,{liked:t,variant:"outline"})}),e.jsx("button",{type:"button","aria-label":"В избранное (значок)","aria-pressed":t,onClick:()=>r(y=>!y),style:n,children:e.jsx(x,{liked:t,variant:"badge"})})]})}},d={name:"Управляемый",parameters:{controls:{disable:!0}},render:function(){const[t,r]=k.useState(!1);return e.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:12,padding:24,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx(g,{liked:t,onLikedChange:r,name:"Обзорная по Бишкеку"}),e.jsx(ie,{variant:"secondary",size:44,onClick:()=>r(n=>!n),children:"Переключить снаружи"})]})}},l={name:"Управляемый, ответ позже",parameters:{controls:{disable:!0}},render:function(){const[t,r]=k.useState(!1);return e.jsx("div",{style:{padding:24,borderRadius:24,background:h},children:e.jsx(g,{liked:t,onLikedChange:n=>window.setTimeout(()=>r(n),300),name:"Медленный запрос"})})}},c={name:"Тест: переключение",play:async({canvasElement:a,args:t})=>{const n=f(a).getByRole("button",{name:"В избранное"});await u(n).toHaveAttribute("aria-pressed","false"),await v.click(n),await u(t.onLikedChange).toHaveBeenLastCalledWith(!0),await b(()=>u(n).toHaveAttribute("aria-pressed","true")),await u(n).toHaveAccessibleName("В избранное"),await v.click(n),await u(t.onLikedChange).toHaveBeenLastCalledWith(!1),await b(()=>u(n).toHaveAttribute("aria-pressed","false")),w.pointerDown(n,{button:0,pointerType:"touch"}),await b(()=>u(n).toHaveAttribute("data-pressed")),w.pointerOut(n,{pointerType:"touch",relatedTarget:document.body}),await b(()=>u(n).not.toHaveAttribute("data-pressed"))}},m={name:"Тест: disabled",args:{disabled:!0},play:async({canvasElement:a,args:t})=>{const r=f(a).getByRole("button");await v.click(r),await u(t.onLikedChange).not.toHaveBeenCalled(),await u(r).toHaveAttribute("aria-pressed","false")}},p={name:"Кейсы · Сердце на фото карточки",args:{variant:"badge",name:"Каракол, ущелье"},parameters:{layout:"padded"},render:a=>e.jsxs("div",{style:{position:"relative",width:182.5,height:178.5,borderRadius:20,overflow:"hidden"},children:[e.jsx("img",{src:oe.kelTor,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("div",{style:{position:"absolute",right:0,bottom:0},children:e.jsx(g,{...a})})]}),play:async({canvasElement:a})=>{const t=f(a).getByRole("button",{name:"В избранное: Каракол, ущелье"});await v.click(t),await b(()=>u(t).toHaveAttribute("aria-pressed","true"))}},ce=["Playground","States","Icons","Controlled","ControlledSlow","ToggleTest","DisabledTest","CaseOutline"];var E,C,B,L,F;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Playground: tap the heart. It sits over a photo, as in the product.",...(F=(L=s.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var S,T,j,H,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:"Figma 482:7928: Like=False and Like=True, plus the forced press. Slow motion in the toolbar shows the pop.",...(A=(H=o.parameters)==null?void 0:H.docs)==null?void 0:A.description}}};var R,D,O,P,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(D=i.parameters)==null?void 0:D.docs)==null?void 0:O.source},description:{story:"The same heart glyph inside other containers, both looks.",...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var W,_,z,N,M;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re,ue,se;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Кейсы · Сердце на фото карточки',
  args: {
    variant: 'badge',
    name: 'Каракол, ущелье'
  },
  parameters: {
    layout: 'padded'
  },
  render: args => <div style={{
    position: 'relative',
    width: 182.5,
    height: 178.5,
    borderRadius: 20,
    overflow: 'hidden'
  }}>
      <img src={PHOTOS.kelTor} alt="" style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
      <div style={{
      position: 'absolute',
      right: 0,
      bottom: 0
    }}>
        <LikeButton {...args} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'В избранное: Каракол, ущелье'
    });
    await userEvent.click(button);
    await waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
  }
}`,...(re=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:`The heart on the photo corner of an excursion card (Figma «Like button» 4302:207407 in excursion_card 883:4356): the badge
 heart, bottom right, 12 px in, the photo of the S card of the search results (Figma 571:30586).`,...(se=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:se.description}}};const he=Object.freeze(Object.defineProperty({__proto__:null,CaseOutline:p,Controlled:d,ControlledSlow:l,DisabledTest:m,Icons:i,Playground:s,States:o,ToggleTest:c,__namedExportsOrder:ce,default:le},Symbol.toStringTag,{value:"Module"}));export{p as C,i as I,he as L,s as P,o as S,d as a};
