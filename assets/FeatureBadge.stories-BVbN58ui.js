import{r as v,j as e}from"./iframe-DuqTOznb.js";import{c as A}from"./cx-2dOUpm6k.js";import{b as E,C as r,H as D}from"./places-z-kxph-t.js";const S="_root_1hpbo_2",W="_icon_1hpbo_13",N="_label_1hpbo_18",s={root:S,icon:W,label:N},a=v.forwardRef(function({icon:o,children:w,className:C,..._},I){return e.jsxs("span",{ref:I,..._,className:A(s.root,C),children:[o&&e.jsx("span",{className:s.icon,children:o}),e.jsx("span",{className:s.label,children:w})]})});a.__docgenInfo={description:"Feature badge (Figma 182:4): the «what is included» plate of an excursion page, an icon and a label on\n`bg/sunken-subtle`, `radius/lg`. Height from 48, width by content. Static: it only says something, it is not a button.\n`ref` and the rest of the attributes go to the root.",methods:[],displayName:"FeatureBadge",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"Figma «Icon» (instance swap): a 20 px Solid icon in `icon/secondary`."},children:{required:!0,tsType:{name:"ReactNode"},description:"Figma «Label»: what is included. Wraps to two lines when it does not fit."}}};const R={title:"Components/Feature badge",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=182-4"},layout:"centered"},args:{children:"Услуги гида",icon:e.jsx(r,{})},argTypes:{children:{control:"text"},icon:{control:!1}}},u={},n={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[e.jsxs(a,{icon:e.jsx(D,{}),children:["Проживание",e.jsx("br",{}),"в отеле"]}),e.jsx(a,{icon:e.jsx(r,{}),children:"Услуги гида"}),e.jsx(a,{children:"Без иконки"}),e.jsx(a,{icon:e.jsx(E,{}),style:{maxWidth:140},children:"Фото и видеосъёмка на память"})]})},t={name:"Кейс: что включено",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,width:361,maxWidth:"100%"},children:[e.jsx(a,{icon:e.jsx(E,{}),children:"Фото и видео"}),e.jsx(a,{icon:e.jsx(r,{}),children:"Гид"})]})},P=["Playground","Variants","CaseIncluded"];var i,d,c,l,p;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(d=u.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Плашка «что входит»: иконка и подпись на сером.",...(p=(l=u.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var m,g,x,h,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'start'
  }}>
      <FeatureBadge icon={<HotelIcon />}>
        Проживание
        <br />в отеле
      </FeatureBadge>
      <FeatureBadge icon={<CompassIcon />}>Услуги гида</FeatureBadge>
      <FeatureBadge>Без иконки</FeatureBadge>
      <FeatureBadge icon={<CameraIcon />} style={{
      maxWidth: 140
    }}>
        Фото и видеосъёмка на память
      </FeatureBadge>
    </div>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"The Figma label can wrap to two lines: height from 48, width by content.",...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var y,F,B,f,j;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейс: что включено',
  parameters: {
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
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    width: 361,
    maxWidth: '100%'
  }}>
      <FeatureBadge icon={<CameraIcon />}>Фото и видео</FeatureBadge>
      <FeatureBadge icon={<CompassIcon />}>Гид</FeatureBadge>
    </div>
}`,...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.source},description:{story:"«Что включено?» on the excursion page (Figma 230:17164, 1606:168951).",...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};const O=Object.freeze(Object.defineProperty({__proto__:null,CaseIncluded:t,Playground:u,Variants:n,__namedExportsOrder:P,default:R},Symbol.toStringTag,{value:"Module"}));export{t as C,O as F,u as P,n as V};
