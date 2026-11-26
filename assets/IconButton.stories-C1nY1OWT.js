import{j as e,r as me}from"./iframe-DyD5Yel4.js";import{I as r}from"./IconButton-DRcBY4IG.js";import{a as m}from"./arrows-0JYTYJZi.js";import{c as y,H as he}from"./general-CSE0kF9v.js";import{F as B}from"./FavouriteIcon-C8L7FAG0.js";const ve=""+new URL("home-logo-Dgxdyw1v.svg",import.meta.url).href,{expect:o,fireEvent:h,fn:ye,userEvent:be,waitFor:f,within:x}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/IconButton",component:r,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=98-109"}},args:{icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад",variant:"secondary",size:44,radius:"full",disabled:!1,onClick:ye()},argTypes:{variant:{control:"inline-radio",options:["glass","glass-light","secondary","ghost"]},size:{control:"inline-radio",options:[52,48,44,40,36]},radius:{control:"inline-radio",options:[16,"full"]},icon:{control:"inline-radio",options:["arrow-left","close","heart"],mapping:{"arrow-left":e.jsx(m,{direction:"left"}),close:e.jsx(y,{}),heart:e.jsx(he,{})}},forcePressed:{control:!1}}},xe=["glass","glass-light","ghost","secondary"],w=[52,48,44,40,36],we=["full",16],k=({children:n,strong:a})=>e.jsx("span",{className:a?"im-14-m":"im-12-r",style:{color:a?"var(--color-text-primary)":"var(--color-text-tertiary)"},children:n}),ge="linear-gradient(135deg, #f6d365 0%, #fda085 38%, #4a7fb5 72%, #1f3b57 100%)",i={},u={name:"Все варианты",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:8,padding:16,boxSizing:"border-box",maxWidth:"100%",overflowX:"auto"},children:["Default","Pressed","Disabled"].map(n=>e.jsxs("div",{style:{display:"grid",gap:12,padding:16,borderRadius:24,background:"var(--color-bg-surface)"},children:[e.jsx(k,{strong:!0,children:n}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`72px repeat(${w.length}, 64px)`,gap:12,alignItems:"center",justifyItems:"center"},children:[e.jsx("span",{}),w.map(a=>e.jsx(k,{children:a},a)),xe.flatMap(a=>we.map(t=>[e.jsx("span",{style:{justifySelf:"start"},children:e.jsxs(k,{children:[a," · ",t]})},`${a}-${t}`),...w.map(s=>e.jsx(r,{icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад",variant:a,size:s,radius:t,forcePressed:n==="Pressed",disabled:n==="Disabled"},`${a}-${t}-${s}`))]))]})]},n))})},l={name:"Поверх фото",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{margin:16,boxSizing:"border-box",maxWidth:"calc(100% - 32px)",width:361,height:220,borderRadius:24,background:ge,padding:16,display:"grid",alignContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{variant:"glass",size:44,radius:"full",icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{variant:"glass-light",size:44,radius:"full",icon:e.jsx(B,{liked:!1}),"aria-label":"Нравится"}),e.jsx(r,{variant:"glass",size:44,radius:"full",icon:e.jsx(B,{liked:!1}),"aria-label":"В избранное"}),e.jsx(r,{variant:"glass",size:44,radius:"full",icon:e.jsx(y,{}),"aria-label":"Закрыть"})]})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(r,{variant:"secondary",size:40,radius:16,icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),e.jsx(r,{variant:"secondary",size:36,radius:"full",icon:e.jsx(y,{}),"aria-label":"Закрыть"}),e.jsx(r,{variant:"ghost",size:40,icon:e.jsx(y,{}),"aria-label":"Закрыть",style:{color:"var(--control-icon-inverse)"}})]})]})},d={name:"Сердце на фото",parameters:{layout:"padded",controls:{disable:!0}},render:function(){const[a,t]=me.useState(!1);return e.jsx("div",{style:{width:200,height:120,borderRadius:24,background:ge,display:"grid",placeItems:"center"},children:e.jsx(r,{variant:"glass",size:44,radius:"full","aria-pressed":a,"aria-label":"В избранное",icon:e.jsx(B,{liked:a}),onClick:()=>t(s=>!s)})})}},c={name:"Кейсы · Главная: закрыть в шапке",parameters:{layout:"fullscreen",controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx("div",{style:{position:"relative",width:393,maxWidth:"100%",height:94,overflow:"hidden",background:"linear-gradient(180deg, var(--color-base-vertical-excursions-start), var(--color-base-vertical-excursions-end))"},children:e.jsxs("div",{style:{position:"absolute",top:44,left:0,right:0,height:50},children:[e.jsx(r,{variant:"ghost",size:40,"aria-label":"Закрыть",icon:e.jsx(y,{}),onClick:()=>{},style:{position:"absolute",top:8,left:8}}),e.jsx("img",{src:ve,alt:"mtravel",width:90,height:18,style:{position:"absolute",top:16,left:"50%",marginLeft:-45}})]})})},p={name:"Тест: нажатие и disabled",play:async({canvasElement:n,args:a})=>{const t=x(n).getByRole("button",{name:"Назад"});await be.click(t),await o(a.onClick).toHaveBeenCalledTimes(1),h.pointerDown(t,{button:0,pointerType:"touch"}),await f(()=>o(t).toHaveAttribute("data-pressed")),h.pointerUp(t,{button:0,pointerType:"touch"}),await f(()=>o(t).not.toHaveAttribute("data-pressed")),h.pointerDown(t,{button:0,pointerType:"touch"}),await f(()=>o(t).toHaveAttribute("data-pressed")),h.pointerOut(t,{pointerType:"touch",relatedTarget:document.body}),await f(()=>o(t).not.toHaveAttribute("data-pressed"))}},v={name:"Тест: disabled не нажимается",args:{disabled:!0},play:async({canvasElement:n,args:a})=>{const t=x(n).getByRole("button",{name:"Назад"});await o(t).toBeDisabled(),await be.click(t),await o(a.onClick).not.toHaveBeenCalled(),h.pointerDown(t,{button:0,pointerType:"touch"}),await o(t).not.toHaveAttribute("data-pressed")}},b={name:"Ссылкой (href)",parameters:{controls:{disable:!0}},render:()=>e.jsx(r,{href:"#back",variant:"secondary",size:44,radius:"full",icon:e.jsx(m,{direction:"left"}),"aria-label":"Назад"}),play:async({canvasElement:n})=>{const a=x(n).getByRole("link",{name:"Назад"});await o(a).toHaveAttribute("href","#back")}},g={name:"Тест: зона нажатия 44",args:{size:36,variant:"secondary"},play:async({canvasElement:n})=>{const a=x(n).getByRole("button",{name:"Назад"}),t=a.getBoundingClientRect();await o(Math.round(t.width)).toBe(36);const s=getComputedStyle(a,"::before");await o(parseFloat(s.width)).toBeGreaterThanOrEqual(44),await o(parseFloat(s.height)).toBeGreaterThanOrEqual(44)}},ke=["Playground","AllVariants","OverPhoto","WithFavourite","CaseToolbar","BehaviourTest","DisabledSwallowsClick","AsLink","HitArea"];var j,C,I,D,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"Playground: every prop on the right. Press and hold to see the press.",...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var E,S,T,z,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"The whole Figma 98:109 grid: Type × Radius in rows, Size in columns. Disabled and forced-pressed rows at the bottom.",...(R=(z=u.parameters)==null?void 0:z.docs)==null?void 0:R.description}}};var F,H,O,P,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"Over a photo: glass is dark glass, Secondary light glass, Ghost keeps only the icon.",...(L=(P=l.parameters)==null?void 0:P.docs)==null?void 0:L.description}}};var _,$,W,G,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Сердце на фото',
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
}`,...(W=($=d.parameters)==null?void 0:$.docs)==null?void 0:W.source},description:{story:`A heart on a photo: the glass button with the like icon (the state is the caller's). The detail page appbar
 (Figma 4704:41798) has 40 px overlay buttons with 20 px icons: a question for the Appbar.`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var q,U,V,Z,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Кейсы · Главная: закрыть в шапке',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <div style={{
    position: 'relative',
    width: 393,
    maxWidth: '100%',
    height: 94,
    overflow: 'hidden',
    background: 'linear-gradient(180deg, var(--color-base-vertical-excursions-start), var(--color-base-vertical-excursions-end))'
  }}>
      <div style={{
      position: 'absolute',
      top: 44,
      left: 0,
      right: 0,
      height: 50
    }}>
        <IconButton variant="ghost" size={40} aria-label="Закрыть" icon={<CloseIcon />} onClick={() => undefined} style={{
        position: 'absolute',
        top: 8,
        left: 8
      }} />
        <img src={homeLogo} alt="mtravel" width={90} height={18} style={{
        position: 'absolute',
        top: 16,
        left: '50%',
        marginLeft: -45
      }} />
      </div>
    </div>
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:`«Главная» toolbar (Figma 4687:46108, «Toolbar» at y 44): the close button at 8 px from the left edge on the hero, the logo centred.
 Ghost 40 with the 24 icon, as on the screen.`,...(N=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:N.description}}};var X,K,J,Y,Q;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(K=p.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"Interaction test: click, press attribute follows the pointer, disabled swallows the click.",...(Q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Q.description}}};var ee,te,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe,se,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"With `href` the button is an <a> with the same look.",...(ie=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ue,le,de,ce,pe;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(le=g.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"36 and 40 px buttons keep their look but get a 44 × 44 touch area.",...(pe=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};const Ae=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:u,AsLink:b,BehaviourTest:p,CaseToolbar:c,DisabledSwallowsClick:v,HitArea:g,OverPhoto:l,Playground:i,WithFavourite:d,__namedExportsOrder:ke,default:fe},Symbol.toStringTag,{value:"Module"}));export{u as A,c as C,Ae as I,l as O,i as P,d as W};
