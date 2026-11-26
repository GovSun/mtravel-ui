import{r as _,j as e}from"./iframe-DyD5Yel4.js";import{c as M}from"./cx-2dOUpm6k.js";import{C as j}from"./Checkbox-CsOUmA-N.js";import{L as F}from"./LeadingIcon-B3CZMOJC.js";import{P}from"./PromoBadge-MRvWEy0B.js";import{a as A}from"./people-tOiSq3ZR.js";const H="_root_m7odg_2",z="_start_m7odg_11",D="_checkbox_m7odg_16",q="_text_m7odg_24",I="_label_m7odg_30",N="_value_m7odg_31",n={root:H,start:z,checkbox:D,text:q,label:I,value:N},a=_.forwardRef(function({variant:d="row",label:i,value:T,checkbox:s,icon:c,badge:B,className:E,...L},R){const u=d==="row";return e.jsxs("div",{ref:R,className:M(n.root,E),"data-variant":d,...L,children:[e.jsxs("span",{className:n.start,children:[u&&s&&e.jsx("span",{className:n.checkbox,children:e.jsx(j,{size:20,...s,"aria-label":s["aria-label"]??(typeof i=="string"?i:void 0)})}),u&&c!=null&&e.jsx(F,{size:32,icon:c}),e.jsxs("span",{className:n.text,children:[e.jsx("span",{className:n.label,children:i}),u&&B]})]}),e.jsx("span",{className:n.value,children:T})]})});a.__docgenInfo={description:`SummaryRow (Figma «Summary row» 883:4867, was «Строка суммы»): one line of the order total. Label left, amount right, 32 px high, 4 px vertical padding.
Row: optional Checkbox (Show checkbox), 32 px icon (Show icon), label, discount badge (Show badge).
 - row: label IM-16 R control/text/tertiary, amount IM-16 M control/text/default;
 - total: both IM-20 S control/text/default.
\`ref\` and the rest of the attributes go to the root.`,methods:[],displayName:"SummaryRow",props:{variant:{required:!1,tsType:{name:"union",raw:"'row' | 'total'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'total'"}]},description:"Figma Type: `row` = Row (a line of the bill), `total` = Total («Итого»).",defaultValue:{value:"'row'",computed:!1}},label:{required:!0,tsType:{name:"ReactNode"},description:"Left text: «за 2 человека», «Скидка», «К оплате»."},value:{required:!0,tsType:{name:"ReactNode"},description:"Right text: the amount, «49 000 ⃀»."},checkbox:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:`Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'defaultChecked' | 'children' | 'style' | PointerHandlers> & {
  /** Figma Checked. Controlled. */
  checked?: boolean;
  /** Uncontrolled start value. */
  defaultChecked?: boolean;
  /** Called with the new value on tap, Space or a tap on the label. The native \`onChange\` works too. */
  onCheckedChange?: (checked: boolean) => void;
  /** Figma Size: 24 (default) or 20. */
  size?: CheckboxSize;
  /** Text next to the box. The whole row is then tappable. Without it give \`aria-label\`. */
  children?: ReactNode;
  /** Forces the press look. For docs and visual tests only.
   *  @internal */
  forcePressed?: boolean;
  className?: string;
  style?: CSSProperties;
} & Partial<Record<PointerHandlers, (e: PointerEvent<HTMLLabelElement>) => void>>`,elements:[{name:"Omit",elements:[{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},{name:"union",raw:"'type' | 'size' | 'checked' | 'defaultChecked' | 'children' | 'style' | PointerHandlers",elements:[{name:"literal",value:"'type'"},{name:"literal",value:"'size'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"},{name:"literal",value:"'children'"},{name:"literal",value:"'style'"},{name:"union",raw:"'onPointerDown' | 'onPointerUp' | 'onPointerLeave' | 'onPointerCancel'",elements:[{name:"literal",value:"'onPointerDown'"},{name:"literal",value:"'onPointerUp'"},{name:"literal",value:"'onPointerLeave'"},{name:"literal",value:"'onPointerCancel'"}]}]}],raw:"Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'defaultChecked' | 'children' | 'style' | PointerHandlers>"},{name:"signature",type:"object",raw:`{
  /** Figma Checked. Controlled. */
  checked?: boolean;
  /** Uncontrolled start value. */
  defaultChecked?: boolean;
  /** Called with the new value on tap, Space or a tap on the label. The native \`onChange\` works too. */
  onCheckedChange?: (checked: boolean) => void;
  /** Figma Size: 24 (default) or 20. */
  size?: CheckboxSize;
  /** Text next to the box. The whole row is then tappable. Without it give \`aria-label\`. */
  children?: ReactNode;
  /** Forces the press look. For docs and visual tests only.
   *  @internal */
  forcePressed?: boolean;
  className?: string;
  style?: CSSProperties;
}`,signature:{properties:[{key:"checked",value:{name:"boolean",required:!1},description:"Figma Checked. Controlled."},{key:"defaultChecked",value:{name:"boolean",required:!1},description:"Uncontrolled start value."},{key:"onCheckedChange",value:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}},required:!1},description:"Called with the new value on tap, Space or a tap on the label. The native `onChange` works too."},{key:"size",value:{name:"union",raw:"24 | 20",elements:[{name:"literal",value:"24"},{name:"literal",value:"20"}],required:!1},description:"Figma Size: 24 (default) or 20."},{key:"children",value:{name:"ReactNode",required:!1},description:"Text next to the box. The whole row is then tappable. Without it give `aria-label`."},{key:"forcePressed",value:{name:"boolean",required:!1},description:`Forces the press look. For docs and visual tests only.
 @internal`},{key:"className",value:{name:"string",required:!1}},{key:"style",value:{name:"CSSProperties",required:!1}}]}},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'onPointerDown' | 'onPointerUp' | 'onPointerLeave' | 'onPointerCancel'",elements:[{name:"literal",value:"'onPointerDown'"},{name:"literal",value:"'onPointerUp'"},{name:"literal",value:"'onPointerLeave'"},{name:"literal",value:"'onPointerCancel'"}]},{name:"signature",type:"function",raw:"(e: PointerEvent<HTMLLabelElement>) => void",signature:{arguments:[{type:{name:"PointerEvent",elements:[{name:"HTMLLabelElement"}],raw:"PointerEvent<HTMLLabelElement>"},name:"e"}],return:{name:"void"}}}],raw:"Record<PointerHandlers, (e: PointerEvent<HTMLLabelElement>) => void>"}],raw:"Partial<Record<PointerHandlers, (e: PointerEvent<HTMLLabelElement>) => void>>"}]},{name:"union",raw:"'checked' | 'defaultChecked' | 'onCheckedChange' | 'disabled' | 'aria-label'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'defaultChecked'"},{name:"literal",value:"'onCheckedChange'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'aria-label'"}]}],raw:"Pick<CheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange' | 'disabled' | 'aria-label'>"},description:"Figma boolean «Show checkbox»: a 20 px Checkbox in a 32 px slot before everything else (row only) — e.g. to include an\n optional service in the total. Pass its state; `aria-label` defaults to the label when it is a string."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Figma boolean «Show icon»: a 32 px icon before the label (row only). Pass the icon element."},badge:{required:!1,tsType:{name:"ReactElement",elements:[{name:"intersection",raw:`Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  /** Figma Type: \`mplus\` — the M+ bonus mark, \`discount\` — «−7 %». Default \`mplus\`. */
  variant?: PromoBadgeVariant;
  /** Figma Shape: a rounded pill or a slanted «ticket». Slanted shows 2–3 px wider than its box, so badges can touch. */
  shape?: PromoBadgeShape;
  /** Figma Size 18px | 24px. 24 is the 4/3 scale, for large cards and details. */
  size?: PromoBadgeSize;
  /** Discount percent: \`7\` shows «−7 %». Only for \`variant="discount"\`. */
  value?: number | string;
}`,elements:[{name:"Omit",elements:[{name:"HTMLAttributes",elements:[{name:"HTMLSpanElement"}],raw:"HTMLAttributes<HTMLSpanElement>"},{name:"literal",value:"'children'"}],raw:"Omit<HTMLAttributes<HTMLSpanElement>, 'children'>"},{name:"signature",type:"object",raw:'{\n  /** Figma Type: `mplus` — the M+ bonus mark, `discount` — «−7 %». Default `mplus`. */\n  variant?: PromoBadgeVariant;\n  /** Figma Shape: a rounded pill or a slanted «ticket». Slanted shows 2–3 px wider than its box, so badges can touch. */\n  shape?: PromoBadgeShape;\n  /** Figma Size 18px | 24px. 24 is the 4/3 scale, for large cards and details. */\n  size?: PromoBadgeSize;\n  /** Discount percent: `7` shows «−7 %». Only for `variant="discount"`. */\n  value?: number | string;\n}',signature:{properties:[{key:"variant",value:{name:"union",raw:"'mplus' | 'discount'",elements:[{name:"literal",value:"'mplus'"},{name:"literal",value:"'discount'"}],required:!1},description:"Figma Type: `mplus` — the M+ bonus mark, `discount` — «−7 %». Default `mplus`."},{key:"shape",value:{name:"union",raw:"'pill' | 'slanted'",elements:[{name:"literal",value:"'pill'"},{name:"literal",value:"'slanted'"}],required:!1},description:"Figma Shape: a rounded pill or a slanted «ticket». Slanted shows 2–3 px wider than its box, so badges can touch."},{key:"size",value:{name:"union",raw:"18 | 24",elements:[{name:"literal",value:"18"},{name:"literal",value:"24"}],required:!1},description:"Figma Size 18px | 24px. 24 is the 4/3 scale, for large cards and details."},{key:"value",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!1},description:'Discount percent: `7` shows «−7 %». Only for `variant="discount"`.'}]}}]}],raw:"ReactElement<PromoBadgeProps>"},description:'Figma boolean «Show badge»: the discount badge after the label (row only). Pass `<PromoBadge variant="discount" value={10} />`:\nbadge_promo is its own component of the DS and is not built into this one.'}}};const{expect:O,within:U}=__STORYBOOK_MODULE_TEST__,V={title:"Components/SummaryRow",component:a,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4867"},layout:"fullscreen"},args:{variant:"row",label:"за 2 человека",value:"49 000 ⃀"},argTypes:{variant:{control:"inline-radio",options:["row","total"]},icon:{control:!1},badge:{control:!1},checkbox:{control:!1}},decorators:[r=>e.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:e.jsx(r,{})})]},l={},t={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(a,{variant:"total",label:"К оплате",value:"12 300 ⃀"}),e.jsx(a,{label:"за 2 человека",value:"49 000 ⃀"}),e.jsx(a,{label:"Скидка",badge:e.jsx(P,{variant:"discount",value:10}),value:"49 000 ⃀"}),e.jsx(a,{label:"Взрослый × 2",icon:e.jsx(A,{}),value:"49 000 ⃀"}),e.jsx(a,{label:"Страховка от отмены",checkbox:{defaultChecked:!0},value:"1 200 ⃀"})]})},o={name:"Кейсы · Счёт при оформлении",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsx(a,{variant:"total",label:"К оплате",value:"44 100 ⃀"}),e.jsx(a,{label:"за 2 человека",value:"49 000 ⃀"}),e.jsx(a,{label:"Скидка",badge:e.jsx(P,{variant:"discount",value:10}),value:"−4 900 ⃀"})]}),play:async({canvasElement:r})=>{await O(U(r).getByRole("img",{name:"Скидка 10%"})).toBeInTheDocument()}},W=["Playground","Variants","CaseBill"];var m,p,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,b,g,w,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 8
  }}>
      <SummaryRow variant="total" label="К оплате" value="12 300 ⃀" />
      <SummaryRow label="за 2 человека" value="49 000 ⃀" />
      <SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="49 000 ⃀" />
      <SummaryRow label="Взрослый × 2" icon={<UsersIcon />} value="49 000 ⃀" />
      <SummaryRow label="Страховка от отмены" checkbox={{
      defaultChecked: true
    }} value="1 200 ⃀" />
    </div>
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"Figma «Summary row» 883:4867: Type Row | Total, with the «Show checkbox», «Show icon» and «Show badge» booleans.",...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var y,f,k,S,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Кейсы · Счёт при оформлении',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div>
      <SummaryRow variant="total" label="К оплате" value="44 100 ⃀" />
      <SummaryRow label="за 2 человека" value="49 000 ⃀" />
      <SummaryRow label="Скидка" badge={<PromoBadge variant="discount" value={10} />} value="−4 900 ⃀" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    // the real PromoBadge sits in the slot: it reads as «Скидка 10%»
    await expect(within(canvasElement).getByRole('img', {
      name: 'Скидка 10%'
    })).toBeInTheDocument();
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"«Оформление заказа» (1338:109481): the bill under the payment method.",...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};const Z=Object.freeze(Object.defineProperty({__proto__:null,CaseBill:o,Playground:l,Variants:t,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{o as C,l as P,Z as S,t as V};
