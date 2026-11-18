import{j as e,r as le}from"./iframe-DuqTOznb.js";import{I as s}from"./IconButton-BxMc4E4A.js";import{a as m}from"./arrows-C0H-naDa.js";import{F as k}from"./FavouriteIcon-rVoV_bSc.js";import{b as v,H as de}from"./general-DYSfllt2.js";const{expect:r,fireEvent:g,fn:ce,userEvent:ie,waitFor:h,within:f}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/IconButton",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=98-109"}},args:{icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад",variant:"secondary",size:44,radius:"full",disabled:!1,onClick:ce()},argTypes:{variant:{control:"inline-radio",options:["glass","glass-light","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40,36]},radius:{control:"inline-radio",options:[16,"full"]},icon:{control:"inline-radio",options:["arrow-left","close","heart"],mapping:{"arrow-left":e.jsx(m,{direction:"left"}),close:e.jsx(v,{}),heart:e.jsx(de,{})}},forcePressed:{control:!1}}},be=["glass","glass-light","ghost","secondary"],x=[52,48,44,40,36],me=["full",16],w=({children:n,strong:a})=>e.jsx("span",{className:a?"im-14-m":"im-12-r",style:{color:a?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:n}),ue="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",i={},u={name:"Все варианты",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:8,padding:16,boxSizing:"border-box",maxWidth:"100%",overflowX:"auto"},children:["Default","Pressed","Disabled"].map(n=>e.jsxs("div",{style:{display:"grid",gap:12,padding:16,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx(w,{strong:!0,children:n}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`72px repeat(${x.length}, 64px)`,gap:12,alignItems:"center",justifyItems:"center"},children:[e.jsx("span",{}),x.map(a=>e.jsx(w,{children:a},a)),be.flatMap(a=>me.map(t=>[e.jsx("span",{style:{justifySelf:"start"},children:e.jsxs(w,{children:[a," · ",t]})},`${a}-${t}`),...x.map(o=>e.jsx(s,{icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад",variant:a,size:o,radius:t,forcePressed:n==="Pressed",disabled:n==="Disabled"},`${a}-${t}-${o}`))]))]})]},n))})},l={name:"Поверх фото",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",width:361,height:220,borderRadius:24,background:ue,padding:16,display:"grid",alignContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(s,{variant:"glass",size:44,radius:"full",icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{variant:"glass-light",size:44,radius:"full",icon:e.jsx(k,{liked:!1}),"aria-label":"Нравится"}),e.jsx(s,{variant:"glass",size:44,radius:"full",icon:e.jsx(k,{liked:!1}),"aria-label":"В избранное"}),e.jsx(s,{variant:"glass",size:44,radius:"full",icon:e.jsx(v,{}),"aria-label":"Закрыть"})]})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{variant:"secondary",size:40,radius:16,icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),e.jsx(s,{variant:"secondary",size:36,radius:"full",icon:e.jsx(v,{}),"aria-label":"Закрыть"}),e.jsx(s,{variant:"ghost",size:40,icon:e.jsx(v,{}),"aria-label":"Закрыть",style:{color:"var(--control-icon-inverse)"}})]})]})},d={name:"С сердцем",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[a,t]=le.useState(!1);return e.jsx("div",{style:{width:200,height:120,borderRadius:24,background:ue,display:"grid",placeItems:"center"},children:e.jsx(s,{variant:"glass",size:44,radius:"full","aria-pressed":a,"aria-label":"В избранное",icon:e.jsx(k,{liked:a}),onClick:()=>t(o=>!o)})})}},c={name:"Тест: нажатие и disabled",play:async({canvasElement:n,args:a})=>{const t=f(n).getByRole("button",{name:"Назад"});await ie.click(t),await r(a.onClick).toHaveBeenCalledTimes(1),g.pointerDown(t,{button:0,pointerType:"touch"}),await h(()=>r(t).toHaveAttribute("data-pressed")),g.pointerUp(t,{button:0,pointerType:"touch"}),await h(()=>r(t).not.toHaveAttribute("data-pressed")),g.pointerDown(t,{button:0,pointerType:"touch"}),await h(()=>r(t).toHaveAttribute("data-pressed")),g.pointerOut(t,{pointerType:"touch",relatedTarget:document.body}),await h(()=>r(t).not.toHaveAttribute("data-pressed"))}},y={name:"Тест: disabled не нажимается",args:{disabled:!0},play:async({canvasElement:n,args:a})=>{const t=f(n).getByRole("button",{name:"Назад"});await r(t).toBeDisabled(),await ie.click(t),await r(a.onClick).not.toHaveBeenCalled(),g.pointerDown(t,{button:0,pointerType:"touch"}),await r(t).not.toHaveAttribute("data-pressed")}},p={name:"Ссылкой (href)",parameters:{controls:{disable:!0}},render:()=>e.jsx(s,{href:"#back",variant:"secondary",size:44,radius:"full",icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),play:async({canvasElement:n})=>{const a=f(n).getByRole("link",{name:"Назад"});await r(a).toHaveAttribute("href","#back")}},b={name:"Тест: зона нажатия 44",args:{size:36,variant:"secondary"},play:async({canvasElement:n})=>{const a=f(n).getByRole("button",{name:"Назад"}),t=a.getBoundingClientRect();await r(Math.round(t.width)).toBe(36);const o=getComputedStyle(a,"::before");await r(parseFloat(o.width)).toBeGreaterThanOrEqual(44),await r(parseFloat(o.height)).toBeGreaterThanOrEqual(44)}},ge=["Playground","AllVariants","OverPhoto","WithFavourite","BehaviourTest","DisabledSwallowsClick","AsLink","HitArea"];var j,B,I,D,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"Playground: every prop on the right. Press and hold to see the press.",...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.description}}};var E,S,T,A,z;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Все варианты',
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
                </span>, ...SIZES.map(size => <IconButton key={\`\${variant}-\${radius}-\${size}\`} icon={<ArrowIcon direction="left" />} aria-label="Назад" variant={variant} size={size} radius={radius} forcePressed={state === 'Pressed'} disabled={state === 'Disabled'} />)]))}
          </div>
        </div>)}
    </div>
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"The whole Figma 98:109 grid: Type × Radius in rows, Size in columns. Disabled and forced-pressed rows at the bottom.",...(z=(A=u.parameters)==null?void 0:A.docs)==null?void 0:z.description}}};var R,H,O,F,P;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Поверх фото',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    margin: 16,
    boxSizing: 'border-box',
    maxWidth: 'calc(100% - 32px)',
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
        <IconButton variant="glass" size={44} radius="full" icon={<ArrowIcon direction="left" />} aria-label="Назад" />
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <IconButton variant="glass-light" size={44} radius="full" icon={<FavouriteIcon liked={false} />} aria-label="Нравится" />
          <IconButton variant="glass" size={44} radius="full" icon={<FavouriteIcon liked={false} />} aria-label="В избранное" />
          <IconButton variant="glass" size={44} radius="full" icon={<CloseIcon />} aria-label="Закрыть" />
        </div>
      </div>
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <IconButton variant="secondary" size={40} radius={16} icon={<ArrowIcon direction="left" />} aria-label="Назад" />
        <IconButton variant="secondary" size={36} radius="full" icon={<CloseIcon />} aria-label="Закрыть" />
        <IconButton variant="ghost" size={40} icon={<CloseIcon />} aria-label="Закрыть" style={{
        color: 'var(--control-icon-inverse)'
      }} />
      </div>
    </div>
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"Over a photo: glass is dark glass, Secondary light glass, Ghost keeps only the icon.",...(P=(F=l.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};var _,$,W,L,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
        <IconButton variant="glass" size={44} radius="full" aria-pressed={liked} aria-label="В избранное" icon={<FavouriteIcon liked={liked} />} onClick={() => setLiked(v => !v)} />
      </div>;
  }
}`,...(W=($=d.parameters)==null?void 0:$.docs)==null?void 0:W.source},description:{story:"The detail page appbar case: the heart inside a glass IconButton.",...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};var G,V,q,U,Z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Interaction test: click, press attribute follows the pointer, disabled swallows the click.",...(Z=(U=c.parameters)==null?void 0:U.docs)==null?void 0:Z.description}}};var N,X,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(X=y.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var J,Y,Q,ee,te;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Ссылкой (href)',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <IconButton href="#back" variant="secondary" size={44} radius="full" icon={<ArrowIcon direction="left" />} aria-label="Назад" />,
  play: async ({
    canvasElement
  }) => {
    const link = within(canvasElement).getByRole('link', {
      name: 'Назад'
    });
    await expect(link).toHaveAttribute('href', '#back');
  }
}`,...(Q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Q.source},description:{story:"With `href` the button is an <a> with the same look.",...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,re,se,oe;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Тест: зона нажатия 44',
  args: {
    size: 36,
    variant: 'secondary'
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Назад'
    });
    const r = button.getBoundingClientRect();
    await expect(Math.round(r.width)).toBe(36);
    const hit = getComputedStyle(button, '::before');
    await expect(parseFloat(hit.width)).toBeGreaterThanOrEqual(44);
    await expect(parseFloat(hit.height)).toBeGreaterThanOrEqual(44);
  }
}`,...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"36 and 40 px buttons keep their look but get a 44 × 44 touch area.",...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};const we=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:u,AsLink:p,BehaviourTest:c,DisabledSwallowsClick:y,HitArea:b,OverPhoto:l,Playground:i,WithFavourite:d,__namedExportsOrder:ge,default:pe},Symbol.toStringTag,{value:"Module"}));export{u as A,we as I,l as O,i as P,d as W};
