import{j as e}from"./iframe-DyD5Yel4.js";import{C as b}from"./Caption-D_clnAXK.js";import{F as P}from"./figma-BZstJmpc.js";import{B as T}from"./home-CSe8AaHy.js";import{P as s}from"./PriceTag-VsIhNLIX.js";const n=T[0],E={title:"Components/PriceTag",component:s,parameters:{design:{type:"figma",url:P("1198-4981")}},args:{children:"4 217 ⃀",size:20},argTypes:{children:{control:"text"},size:{control:"inline-radio",options:[18,20]}}},u={},r={name:"Размеры",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-end",flexWrap:"wrap"},children:[[20,18].map(i=>e.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(b,{children:i===20?"20 (Figma main)":"18 (карточка XL)"}),e.jsx(s,{size:i,children:"4 217 ⃀"})]},i)),e.jsx(s,{children:"90 ⃀"}),e.jsx(s,{children:"1 253 679 ⃀"})]})},t={name:"Кейсы · В рассрочку через M+: цена на фото",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{position:"relative",width:361,maxWidth:"100%",height:200,borderRadius:24,overflow:"hidden"},children:[e.jsx("img",{src:n.image,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("div",{style:{position:"absolute",inset:"auto 0 24px",display:"flex",justifyContent:"center"},children:e.jsx(s,{size:18,children:n.price})})]})},B=["Playground","Sizes","OnPhoto"];var a,o,d,c,l;u.parameters={...u.parameters,docs:{...(a=u.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(o=u.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"Меняй сумму: метка растёт вместе с ней, края остаются скошенными.",...(l=(c=u.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var p,m,g,h,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Размеры',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  }}>
      {([20, 18] as const).map(size => <div key={size} style={{
      display: 'grid',
      gap: 8,
      justifyItems: 'start'
    }}>
          <Caption>{size === 20 ? '20 (Figma main)' : '18 (карточка XL)'}</Caption>
          <PriceTag size={size}>4 217 ⃀</PriceTag>
        </div>)}
      <PriceTag>90 ⃀</PriceTag>
      <PriceTag>1 253 679 ⃀</PriceTag>
    </div>
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"20 is the Figma main component; 18 is how the large excursion card uses it.",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var y,f,C,j,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейсы · В рассрочку через M+: цена на фото',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    position: 'relative',
    width: 361,
    maxWidth: '100%',
    height: 200,
    borderRadius: 24,
    overflow: 'hidden'
  }}>
      <img src={BEST_CHIMGAN.image} alt="" style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }} />
      <div style={{
      position: 'absolute',
      inset: 'auto 0 24px',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <PriceTag size={18}>{BEST_CHIMGAN.price}</PriceTag>
      </div>
    </div>
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source},description:{story:`«В рассрочку через M+» on the home (Figma 4687:46185): the XL card «Чимган, Амирсой…» (4 910, Figma 1198 price tag 18) sits on the
 photo, centred in the text block at the bottom. The frame is the card's width (361); the card itself is in ExcursionCard.`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.description}}};const _=Object.freeze(Object.defineProperty({__proto__:null,OnPhoto:t,Playground:u,Sizes:r,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{t as O,u as P,_ as S,r as a};
