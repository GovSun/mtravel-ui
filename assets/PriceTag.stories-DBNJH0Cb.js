import{j as e}from"./iframe-DuqTOznb.js";import{C as v}from"./Caption-C6jupY-b.js";import{F as C}from"./figma-BZstJmpc.js";import{P as b}from"./photos-Cw5k0SX3.js";import{P as n}from"./PriceTag-oP1n0OvQ.js";const T={title:"Components/PriceTag",component:n,parameters:{design:{type:"figma",url:C("1198-4981")}},args:{children:"4 217 ⃀",size:20},argTypes:{children:{control:"text"},size:{control:"inline-radio",options:[18,20]}}},s={},r={name:"Размеры",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-end",flexWrap:"wrap"},children:[[20,18].map(i=>e.jsxs("div",{style:{display:"grid",gap:8,justifyItems:"start"},children:[e.jsx(v,{children:i===20?"20 (Figma main)":"18 (карточка XL)"}),e.jsx(n,{size:i,children:"4 217 ⃀"})]},i)),e.jsx(n,{children:"90 ⃀"}),e.jsx(n,{children:"1 253 679 ⃀"})]})},t={name:"Кейсы · На фото",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{position:"relative",width:240,height:140,borderRadius:24,overflow:"hidden"},children:[e.jsx("img",{src:b.clouds,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),e.jsx("div",{style:{position:"absolute",inset:"auto 0 24px",display:"flex",justifyContent:"center"},children:e.jsx(n,{size:18,children:"4 910 ⃀"})})]})},O=["Playground","Sizes","OnPhoto"];var a,o,u,d,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(o=s.parameters)==null?void 0:o.docs)==null?void 0:u.source},description:{story:"Меняй сумму: метка растёт вместе с ней, края остаются скошенными.",...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};var l,p,m,g,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"20 is the Figma main component; 18 is how the large excursion card uses it.",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var y,x,f,j,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейсы · На фото',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    position: 'relative',
    width: 240,
    height: 140,
    borderRadius: 24,
    overflow: 'hidden'
  }}>
      <img src={PHOTOS.clouds} alt="" style={{
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
        <PriceTag size={18}>4 910 ⃀</PriceTag>
      </div>
    </div>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"On a photo: the label sits at the top of the text block of the large card.",...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};const A=Object.freeze(Object.defineProperty({__proto__:null,OnPhoto:t,Playground:s,Sizes:r,__namedExportsOrder:O,default:T},Symbol.toStringTag,{value:"Module"}));export{t as O,s as P,A as S,r as a};
