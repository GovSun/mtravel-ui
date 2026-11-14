import{j as e,r as Y}from"./iframe-Dr5ib33t.js";import{A as m,b as v,H as q}from"./index-CU5QHq_h.js";import{I as r}from"./IconButton-DBWbz_Xc.js";import{F as X}from"./FavouriteIcon-B7ZIwla0.js";const{expect:s,fireEvent:c,fn:Q,userEvent:G,waitFor:b,within:K}=__STORYBOOK_MODULE_TEST__,ee={title:"Components/IconButton",component:r,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=98-109"}},args:{icon:e.jsx(m,{}),"aria-label":"Назад",variant:"secondary",size:44,radius:"full",disabled:!1,onClick:Q()},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40,36]},radius:{control:"inline-radio",options:[16,"full"]},icon:{control:"inline-radio",options:["arrow-left","close","heart"],mapping:{"arrow-left":e.jsx(m,{}),close:e.jsx(v,{}),heart:e.jsx(q,{})}},pressed:{control:!1}}},ae=["primary","ghost","secondary"],g=[52,48,44,40,36],te=["full",16],f=({children:n,strong:t})=>e.jsx("span",{className:t?"im-14-m":"im-12-r",style:{color:t?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:n}),J="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",i={},o={name:"Все варианты",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:8,maxWidth:"100%",overflowX:"auto"},children:["Default","Pressed","Disabled"].map(n=>e.jsxs("div",{style:{display:"grid",gap:12,padding:16,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx(f,{strong:!0,children:n}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`72px repeat(${g.length}, 64px)`,gap:12,alignItems:"center",justifyItems:"center"},children:[e.jsx("span",{}),g.map(t=>e.jsx(f,{children:t},t)),ae.flatMap(t=>te.map(a=>[e.jsx("span",{style:{justifySelf:"start"},children:e.jsxs(f,{children:[t," · ",a]})},`${t}-${a}`),...g.map(y=>e.jsx(r,{icon:e.jsx(m,{}),"aria-label":"Назад",variant:t,size:y,radius:a,pressed:n==="Pressed",disabled:n==="Disabled"},`${t}-${a}-${y}`))]))]})]},n))})},u={name:"Поверх фото",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{width:361,height:220,borderRadius:24,background:J,padding:16,display:"grid",alignContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{variant:"primary",size:44,radius:"full",icon:e.jsx(m,{}),"aria-label":"Назад"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{variant:"primary",size:44,radius:"full",icon:e.jsx(X,{liked:!1}),"aria-label":"В избранное"}),e.jsx(r,{variant:"primary",size:44,radius:"full",icon:e.jsx(v,{}),"aria-label":"Закрыть"})]})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{variant:"secondary",size:40,radius:16,icon:e.jsx(m,{}),"aria-label":"Назад"}),e.jsx(r,{variant:"secondary",size:36,radius:"full",icon:e.jsx(v,{}),"aria-label":"Закрыть"}),e.jsx(r,{variant:"ghost",size:40,icon:e.jsx(v,{}),"aria-label":"Закрыть",style:{color:"var(--control-icon-inverse)"}})]})]})},d={name:"С сердцем",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[t,a]=Y.useState(!1);return e.jsx("div",{style:{width:200,height:120,borderRadius:24,background:J,display:"grid",placeItems:"center"},children:e.jsx(r,{variant:"primary",size:44,radius:"full","aria-pressed":t,"aria-label":"В избранное",icon:e.jsx(X,{liked:t}),onClick:()=>a(y=>!y)})})}},l={name:"Тест: нажатие и disabled",play:async({canvasElement:n,args:t})=>{const a=K(n).getByRole("button",{name:"Назад"});await G.click(a),await s(t.onClick).toHaveBeenCalledTimes(1),c.pointerDown(a,{button:0,pointerType:"touch"}),await b(()=>s(a).toHaveAttribute("data-pressed")),c.pointerUp(a,{button:0,pointerType:"touch"}),await b(()=>s(a).not.toHaveAttribute("data-pressed")),c.pointerDown(a,{button:0,pointerType:"touch"}),await b(()=>s(a).toHaveAttribute("data-pressed")),c.pointerOut(a,{pointerType:"touch",relatedTarget:document.body}),await b(()=>s(a).not.toHaveAttribute("data-pressed"))}},p={name:"Тест: disabled не нажимается",args:{disabled:!0},play:async({canvasElement:n,args:t})=>{const a=K(n).getByRole("button",{name:"Назад"});await s(a).toBeDisabled(),await G.click(a),await s(t.onClick).not.toHaveBeenCalled(),c.pointerDown(a,{button:0,pointerType:"touch"}),await s(a).not.toHaveAttribute("data-pressed")}},ne=["Playground","AllVariants","OverPhoto","WithFavourite","BehaviourTest","DisabledSwallowsClick"];var h,x,w,j,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source},description:{story:"Playground: every prop on the right. Press and hold to see the press.",...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.description}}};var k,C,D,B,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8,
    maxWidth: '100%',
    overflowX: 'auto'
  }}>
      {(['Default', 'Pressed', 'Disabled'] as const).map(state => <div key={state} style={{
      display: 'grid',
      gap: 12,
      padding: 16,
      borderRadius: 24,
      background: 'var(--color-bg-surface)'
    }}>
          <Caption strong>{state}</Caption>
          <div style={{
        display: 'grid',
        gridTemplateColumns: \`72px repeat(\${SIZES.length}, 64px)\`,
        gap: 12,
        alignItems: 'center',
        justifyItems: 'center'
      }}>
            <span />
            {SIZES.map(s => <Caption key={s}>{s}</Caption>)}
            {VARIANTS.flatMap(variant => RADII.map(radius => [<span key={\`\${variant}-\${radius}\`} style={{
          justifySelf: 'start'
        }}>
                  <Caption>
                    {variant} · {radius}
                  </Caption>
                </span>, ...SIZES.map(size => <IconButton key={\`\${variant}-\${radius}-\${size}\`} icon={<ArrowLeftIcon />} aria-label="Назад" variant={variant} size={size} radius={radius} pressed={state === 'Pressed'} disabled={state === 'Disabled'} />)]))}
          </div>
        </div>)}
    </div>
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"The whole Figma 98:109 grid: Type × Radius in rows, Size in columns. Disabled and forced-pressed rows at the bottom.",...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var S,E,A,z,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Поверх фото',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 361,
    height: 220,
    borderRadius: 24,
    background: PHOTO,
    padding: 16,
    display: 'grid',
    alignContent: 'space-between'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <IconButton variant="primary" size={44} radius="full" icon={<ArrowLeftIcon />} aria-label="Назад" />
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <IconButton variant="primary" size={44} radius="full" icon={<FavouriteIcon liked={false} />} aria-label="В избранное" />
          <IconButton variant="primary" size={44} radius="full" icon={<CloseIcon />} aria-label="Закрыть" />
        </div>
      </div>
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <IconButton variant="secondary" size={40} radius={16} icon={<ArrowLeftIcon />} aria-label="Назад" />
        <IconButton variant="secondary" size={36} radius="full" icon={<CloseIcon />} aria-label="Закрыть" />
        <IconButton variant="ghost" size={40} icon={<CloseIcon />} aria-label="Закрыть" style={{
        color: 'var(--control-icon-inverse)'
      }} />
      </div>
    </div>
}`,...(A=(E=u.parameters)==null?void 0:E.docs)==null?void 0:A.source},description:{story:"Over a photo: Primary is dark glass, Secondary light glass, Ghost keeps only the icon.",...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.description}}};var H,O,P,F,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'С сердцем',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [liked, setLiked] = useState(false);
    return <div style={{
      width: 200,
      height: 120,
      borderRadius: 24,
      background: PHOTO,
      display: 'grid',
      placeItems: 'center'
    }}>
        <IconButton variant="primary" size={44} radius="full" aria-pressed={liked} aria-label="В избранное" icon={<FavouriteIcon liked={liked} />} onClick={() => setLiked(v => !v)} />
      </div>;
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"The detail page appbar case: the heart inside a glass IconButton.",...(_=(F=d.parameters)==null?void 0:F.docs)==null?void 0:_.description}}};var $,L,W,M,V;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Тест: нажатие и disabled',
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Назад'
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
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
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Interaction test: click, press attribute follows the pointer, disabled swallows the click.",...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var U,Z,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Тест: disabled не нажимается',
  args: {
    disabled: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Назад'
    });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
    fireEvent.pointerDown(button, {
      button: 0,
      pointerType: 'touch'
    });
    await expect(button).not.toHaveAttribute('data-pressed');
  }
}`,...(N=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:N.source}}};const ue=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:o,BehaviourTest:l,DisabledSwallowsClick:p,OverPhoto:u,Playground:i,WithFavourite:d,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{o as A,ue as I,u as O,i as P,d as W};
