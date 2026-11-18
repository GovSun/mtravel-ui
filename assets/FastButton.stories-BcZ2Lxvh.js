import{r as I,j as e}from"./iframe-DuqTOznb.js";import{u as N}from"./usePress-DgMUH5X0.js";import{c as q}from"./cx-2dOUpm6k.js";import{R as z}from"./general-DYSfllt2.js";const M="_root_1c1e5_5",V="_icon_1c1e5_45",H="_tile_1c1e5_49",K="_label_1c1e5_70",r={root:M,icon:V,tile:H,label:K},s=I.forwardRef(function({children:o,icon:v,forcePressed:C=!1,disabled:n=!1,type:D="button",className:j,onPointerDown:w,onPointerUp:A,onPointerLeave:S,onPointerCancel:k,...P},T){const{pressed:O,handlers:R}=N(!n,{onPointerDown:w,onPointerUp:A,onPointerLeave:S,onPointerCancel:k});return e.jsxs("button",{ref:T,type:D,className:q(r.root,j),disabled:n,"data-pressed":(O||C)&&!n||void 0,"data-disabled":n||void 0,...P,...R,children:[e.jsx("span",{className:r.tile,"aria-hidden":"true",children:e.jsx("span",{className:r.icon,children:v??e.jsx(z,{size:51})})}),e.jsx("span",{className:r.label,children:o})]})});s.__docgenInfo={description:`FastButton (Figma fast_button 883:4903): a quick action of a screen — a 120 × 48 light tile with a big blue icon and a label
under it, e.g. «Показать чек» on an order. It is not Button (that is a text pill) nor IconButton (that has no label):
it is a tile that is read as one button with the label as its name.
Press, like Button: on pointer-down the whole button shrinks to 0.97 in 100 ms and returns in 240 ms.`,methods:[],displayName:"FastButton",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Label under the tile, IM-14 B. Figma: «Показать чек»."},icon:{required:!1,tsType:{name:"ReactNode"},description:"The picture in the tile: a 24 px viewBox Dazzle icon, drawn 51 px and cut off by the tile's bottom edge, as in Figma. Default: the receipt."},forcePressed:{required:!1,tsType:{name:"boolean"},description:`Forces the press look. For docs and visual tests only.
@internal`,defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const{expect:L,fn:U,userEvent:G,within:J}=__STORYBOOK_MODULE_TEST__,W={title:"Components/FastButton",component:s,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4903"},layout:"centered"},args:{children:"Показать чек",disabled:!1,onClick:U()},argTypes:{icon:{control:!1},forcePressed:{control:!1}}},u={play:async({canvasElement:i,args:o})=>{await G.click(J(i).getByRole("button",{name:"Показать чек"})),await L(o.onClick).toHaveBeenCalledTimes(1)}},t={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"start"},children:[e.jsx(s,{children:"Показать чек"}),e.jsx(s,{forcePressed:!0,children:"Нажата"}),e.jsx(s,{disabled:!0,children:"Недоступна"})]})},a={name:"Кейс: действия заказа",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:12,padding:16,background:"var(--color-bg-surface)"},children:e.jsx(s,{children:"Показать чек"})})},X=["Playground","States","CaseOrder"];var l,c,d,p,m;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Показать чек'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(d=(c=u.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Тапни: кнопка сжимается и отпускается.",...(m=(p=u.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var f,F,g,b,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'start'
  }}>
      <FastButton>Показать чек</FastButton>
      <FastButton forcePressed>Нажата</FastButton>
      <FastButton disabled>Недоступна</FastButton>
    </div>
}`,...(g=(F=t.parameters)==null?void 0:F.docs)==null?void 0:g.source},description:{story:"Figma 883:4903 и состояния, которых в Figma нет.",...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var y,B,x,E,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейс: действия заказа',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    padding: 16,
    background: 'var(--color-bg-surface)'
  }}>
      <FastButton>Показать чек</FastButton>
    </div>
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source},description:{story:"Действия заказа в ряд. В «Выходные» компонента пока нет; подпись взята из Figma дизайн-системы.",...(_=(E=a.parameters)==null?void 0:E.docs)==null?void 0:_.description}}};const ee=Object.freeze(Object.defineProperty({__proto__:null,CaseOrder:a,Playground:u,States:t,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{a as C,ee as F,u as P,t as S};
