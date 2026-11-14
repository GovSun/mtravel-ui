import{r as J,j as t}from"./iframe-Dr5ib33t.js";import{F as y}from"./FavouriteIcon-B7ZIwla0.js";import{L as b}from"./LikeButton-DrHlodSD.js";const{expect:s,fireEvent:v,fn:X,userEvent:m,waitFor:p,within:V}=__STORYBOOK_MODULE_TEST__,Y={title:"Components/Like",component:b,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=482-7928"}},args:{disabled:!1,onLikedChange:X()},argTypes:{liked:{control:"boolean"},defaultLiked:{control:"boolean"},pressed:{control:!1}}},g="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",q=({children:n})=>t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:n}),o={decorators:[n=>t.jsx("div",{style:{width:160,height:120,borderRadius:24,background:g,display:"grid",placeItems:"center"},children:t.jsx(n,{})})]},i={name:"Состояния",parameters:{layout:"padded",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"flex",gap:24,padding:24,borderRadius:24,background:g},children:[["Like=False",!1,!1],["Like=True",!0,!1],["Pressed",!1,!0],["Pressed, liked",!0,!0]].map(([n,a,r])=>t.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:6},children:[t.jsx(b,{liked:a,pressed:r}),t.jsx(q,{children:n})]},n))})},d={name:"FavouriteIcon: оба вида",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[a,r]=J.useState(!1);return t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:24,borderRadius:24,background:g},children:[t.jsx("button",{type:"button","aria-pressed":a,onClick:()=>r(e=>!e),style:{all:"unset",cursor:"pointer",padding:8,color:"var(--control-icon-inverse)"},children:t.jsx(y,{liked:a,look:"outline"})}),t.jsx("button",{type:"button","aria-pressed":a,onClick:()=>r(e=>!e),style:{all:"unset",cursor:"pointer",padding:8},children:t.jsx(y,{liked:a,look:"badge"})})]})}},u={name:"Управляемый",parameters:{controls:{disable:!0}},render:function(){const[a,r]=J.useState(!1);return t.jsxs("div",{style:{display:"grid",justifyItems:"center",gap:12,padding:24,borderRadius:24,background:"var(--color-bg-surface)"},children:[t.jsx(b,{liked:a,onLikedChange:r,name:"Обзорная по Бишкеку"}),t.jsx("button",{type:"button",onClick:()=>r(e=>!e),className:"im-14-m",style:{color:"var(--color-text-primary)"},children:"Переключить снаружи"})]})}},l={name:"Тест: переключение",play:async({canvasElement:n,args:a})=>{const e=V(n).getByRole("button",{name:"В избранное"});await s(e).toHaveAttribute("aria-pressed","false"),await m.click(e),await s(a.onLikedChange).toHaveBeenLastCalledWith(!0),await p(()=>s(e).toHaveAttribute("aria-pressed","true")),await s(e).toHaveAccessibleName("В избранное"),await m.click(e),await s(a.onLikedChange).toHaveBeenLastCalledWith(!1),await p(()=>s(e).toHaveAttribute("aria-pressed","false")),v.pointerDown(e,{button:0,pointerType:"touch"}),await p(()=>s(e).toHaveAttribute("data-pressed")),v.pointerOut(e,{pointerType:"touch",relatedTarget:document.body}),await p(()=>s(e).not.toHaveAttribute("data-pressed"))}},c={name:"Тест: disabled",args:{disabled:!0},play:async({canvasElement:n,args:a})=>{const r=V(n).getByRole("button");await m.click(r),await s(a.onLikedChange).not.toHaveBeenCalled(),await s(r).toHaveAttribute("aria-pressed","false")}},Q=["Playground","States","Icons","Controlled","ToggleTest","DisabledTest"];var k,h,f,w,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Playground: tap the heart. It sits over a photo, as in the product.",...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var L,C,E,T,j;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Состояния',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    padding: 24,
    borderRadius: 24,
    background: PHOTO
  }}>
      {([['Like=False', false, false], ['Like=True', true, false], ['Pressed', false, true], ['Pressed, liked', true, true]] as const).map(([name, liked, pressed]) => <div key={name} style={{
      display: 'grid',
      justifyItems: 'center',
      gap: 6
    }}>
          <LikeButton liked={liked} pressed={pressed} />
          <Caption>{name}</Caption>
        </div>)}
    </div>
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Figma 482:7928: Like=False and Like=True, plus the forced press. Slow motion in the toolbar shows the pop.",...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.description}}};var H,F,S,B,A;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'FavouriteIcon: оба вида',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [liked, setLiked] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      padding: 24,
      borderRadius: 24,
      background: PHOTO
    }}>
        <button type="button" aria-pressed={liked} onClick={() => setLiked(v => !v)} style={{
        all: 'unset',
        cursor: 'pointer',
        padding: 8,
        color: 'var(--control-icon-inverse)'
      }}>
          <FavouriteIcon liked={liked} look="outline" />
        </button>
        <button type="button" aria-pressed={liked} onClick={() => setLiked(v => !v)} style={{
        all: 'unset',
        cursor: 'pointer',
        padding: 8
      }}>
          <FavouriteIcon liked={liked} look="badge" />
        </button>
      </div>;
  }
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source},description:{story:"The same heart glyph inside other containers, both looks.",...(A=(B=d.parameters)==null?void 0:B.docs)==null?void 0:A.description}}};var I,R,O,D,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <button type="button" onClick={() => setLiked(v => !v)} className="im-14-m" style={{
        color: 'var(--color-text-primary)'
      }}>
          Переключить снаружи
        </button>
      </div>;
  }
}`,...(O=(R=u.parameters)==null?void 0:R.docs)==null?void 0:O.source},description:{story:"Controlled: the value comes from outside; a change that did not come from a tap does not pop.",...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.description}}};var _,N,W,M,K;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(N=l.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:"Interaction test: a tap toggles aria-pressed and the label, onLikedChange is called, disabled does nothing.",...(K=(M=l.parameters)==null?void 0:M.docs)==null?void 0:K.description}}};var U,z,G;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};const te=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,DisabledTest:c,Icons:d,Playground:o,States:i,ToggleTest:l,__namedExportsOrder:Q,default:Y},Symbol.toStringTag,{value:"Module"}));export{u as C,d as I,te as L,o as P,i as S};
