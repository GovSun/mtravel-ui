import{j as a}from"./iframe-DuqTOznb.js";import{C as d}from"./Caption-C6jupY-b.js";import{F as $}from"./figma-BZstJmpc.js";import{P as H}from"./photos-Cw5k0SX3.js";import{P as s}from"./PromoBadge-DMs6_-GK.js";const{expect:p,within:V}=__STORYBOOK_MODULE_TEST__,W={title:"Components/PromoBadge",component:s,parameters:{design:{type:"figma",url:$("354-6280")}},args:{variant:"discount",shape:"slanted",size:18,value:7},argTypes:{variant:{control:"inline-radio",options:["mplus","discount"]},shape:{control:"inline-radio",options:["pill","slanted"]},size:{control:"inline-radio",options:[18,24]},value:{control:{type:"number",min:1,max:99}}}},t={decorators:[e=>a.jsx("div",{style:{padding:24,background:"var(--color-bg-sunken-strong)",borderRadius:16},children:a.jsx(e,{})})]},c=["mplus","discount"],m=["pill","slanted"],Y=[18,24],r={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, auto)",gap:"16px 24px",alignItems:"center",justifyItems:"start"},children:[a.jsx("span",{}),c.flatMap(e=>m.map(n=>a.jsx(d,{children:`${e==="mplus"?"M+":"Discount"}, ${n==="pill"?"Pill":"Slanted"}`},e+n))),Y.map(e=>a.jsxs("div",{style:{display:"contents"},children:[a.jsxs(d,{children:[e,"px"]}),c.flatMap(n=>m.map(l=>a.jsx(s,{variant:n,shape:l,size:e,value:n==="discount"?7:void 0},n+l)))]},e))]})},o={name:"Значения скидки",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[[5,15,30,100].map(e=>a.jsx(s,{variant:"discount",shape:"slanted",value:e},e)),[5,15,30,100].map(e=>a.jsx(s,{variant:"discount",shape:"pill",size:24,value:e},`p${e}`))]})},i={name:"Кейсы · На фото",parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[18,24].map(e=>a.jsxs("div",{style:{position:"relative",width:200,height:120,borderRadius:20,overflow:"hidden"},children:[a.jsx("img",{src:H.kelTor,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),a.jsxs("div",{style:{position:"absolute",top:12,left:12,display:"flex"},children:[a.jsx(s,{variant:"discount",shape:"slanted",size:e,value:7}),a.jsx(s,{variant:"mplus",shape:"slanted",size:e})]})]},e))})},u={name:"Тест: имя для скринридера",parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(s,{variant:"discount",value:7}),a.jsx(s,{variant:"mplus"})]}),play:async({canvasElement:e})=>{const n=V(e);await p(n.getByRole("img",{name:"Скидка 7%"})).toBeInTheDocument(),await p(n.getByRole("img",{name:"M+"})).toBeInTheDocument()}},Z=["Playground","Variants","Values","OnPhoto","Accessibility"];var v,g,y,h,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    padding: 24,
    background: 'var(--color-bg-sunken-strong)',
    borderRadius: 16
  }}>
        <Story />
      </div>]
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Переключай вариант, форму и размер: у «M+» значение не нужно, у скидки это проценты.",...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var f,B,S,b,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(4, auto)',
    gap: '16px 24px',
    alignItems: 'center',
    justifyItems: 'start'
  }}>
      <span />
      {TYPES.flatMap(t => SHAPES.map(sh => <Caption key={t + sh}>{\`\${t === 'mplus' ? 'M+' : 'Discount'}, \${sh === 'pill' ? 'Pill' : 'Slanted'}\`}</Caption>))}
      {SIZES.map(size => <div key={size} style={{
      display: 'contents'
    }}>
          <Caption>{size}px</Caption>
          {TYPES.flatMap(t => SHAPES.map(sh => <PromoBadge key={t + sh} variant={t} shape={sh} size={size} value={t === 'discount' ? 7 : undefined} />))}
        </div>)}
    </div>
}`,...(S=(B=r.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:"The Figma matrix 354:6280: Type M+ | Discount × Shape Pill | Slanted × Size 18px | 24px.",...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var P,D,E,A,T;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Значения скидки',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[5, 15, 30, 100].map(v => <PromoBadge key={v} variant="discount" shape="slanted" value={v} />)}
      {[5, 15, 30, 100].map(v => <PromoBadge key={\`p\${v}\`} variant="discount" shape="pill" size={24} value={v} />)}
    </div>
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"Discount of one, two and three digits: the badge grows with the number.",...(T=(A=o.parameters)==null?void 0:A.docs)==null?void 0:T.description}}};var w,M,O,k,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Кейсы · На фото',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {([18, 24] as const).map(size => <div key={size} style={{
      position: 'relative',
      width: 200,
      height: 120,
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
        top: 12,
        left: 12,
        display: 'flex'
      }}>
            <PromoBadge variant="discount" shape="slanted" size={size} value={7} />
            <PromoBadge variant="mplus" shape="slanted" size={size} />
          </div>
        </div>)}
    </div>
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source},description:{story:"On a photo: a discount and M+ side by side, the slanted shapes interlock (the cards use this).",...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var I,C,_,R,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Тест: имя для скринридера',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <PromoBadge variant="discount" value={7} />
      <PromoBadge variant="mplus" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('img', {
      name: 'Скидка 7%'
    })).toBeInTheDocument();
    await expect(c.getByRole('img', {
      name: 'M+'
    })).toBeInTheDocument();
  }
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source},description:{story:"Reads as one phrase: «Скидка 7%» and «M+».",...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.description}}};const J=Object.freeze(Object.defineProperty({__proto__:null,Accessibility:u,OnPhoto:i,Playground:t,Values:o,Variants:r,__namedExportsOrder:Z,default:W},Symbol.toStringTag,{value:"Module"}));export{i as O,t as P,J as S,r as V,o as a};
