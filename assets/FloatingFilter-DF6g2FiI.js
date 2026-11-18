import{r as p,j as e}from"./iframe-DuqTOznb.js";import{c as h}from"./cx-2dOUpm6k.js";import{P as g}from"./Pressable-D45JnRku.js";const f="_pill_1yjst_7",b="_segmentWrap_1yjst_15",y="_divider_1yjst_19",v="_segment_1yjst_15",w="_segmentIcon_1yjst_58",k="_label_1yjst_68",t={pill:f,segmentWrap:b,divider:y,segment:v,segmentIcon:w,label:k},_=p.forwardRef(function({items:o,className:i,...r},l){return e.jsx("div",{ref:l,className:h(t.pill,i),role:"group",...r,children:o.map(({label:c,icon:n,type:d="button",id:s,ref:m,...u},a)=>e.jsxs("span",{className:t.segmentWrap,children:[a>0&&e.jsx("span",{className:t.divider,"aria-hidden":"true"}),e.jsxs(g,{ref:m,as:"button",buttonType:d,id:s,className:t.segment,...u,children:[n&&e.jsx("span",{className:t.segmentIcon,"aria-hidden":"true",children:n}),e.jsx("span",{className:t.label,children:c})]})]},s??a))})});_.__docgenInfo={description:"FloatingFilter (Figma «Appbar/Filter» 1042:1388, page Nav): the dark summary pill of what the user searched for —\nthe date and the number of participants. 44 px, `control/bg/selected`, one or two segments split by a 0.5 px\ndivider. Every segment is a button: the date opens the calendar, the participants open their sheet.\n\nIt lives at the bottom of the screen inside FloatingContainer (`filter` slot, Figma property «Filter»), above the\nprice and the main button. `ref`, `className`, `style` and the rest go to the root group; give it an `aria-label`.",methods:[],displayName:"FloatingFilter",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  /** Stable key for the segment (also set as the button id). Default: its index. */
  id?: string;
  /**
   * IM-16 M, e.g. «29 июл» or «1 участник». Any node: pass a \`SwapNumber\` to let a new value slide in after the user
   * picked it (see the «Детали» case).
   */
  label: ReactNode;
  /** 14 px solid icon on the left: \`<CalendarIcon size={14} />\`, \`<UserIcon size={14} />\`. */
  icon?: ReactNode;
  /** The segment's <button>: to give focus back to it when its picker closes. */
  ref?: Ref<HTMLButtonElement>;
  /** Shows the pressed look without a finger. For docs and visual tests only. */
  forcePressed?: boolean;
}`,elements:[{name:"Omit",elements:[{name:"ButtonHTMLAttributes",elements:[{name:"HTMLButtonElement"}],raw:"ButtonHTMLAttributes<HTMLButtonElement>"},{name:"literal",value:"'children'"}],raw:"Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>"},{name:"signature",type:"object",raw:`{
  /** Stable key for the segment (also set as the button id). Default: its index. */
  id?: string;
  /**
   * IM-16 M, e.g. «29 июл» or «1 участник». Any node: pass a \`SwapNumber\` to let a new value slide in after the user
   * picked it (see the «Детали» case).
   */
  label: ReactNode;
  /** 14 px solid icon on the left: \`<CalendarIcon size={14} />\`, \`<UserIcon size={14} />\`. */
  icon?: ReactNode;
  /** The segment's <button>: to give focus back to it when its picker closes. */
  ref?: Ref<HTMLButtonElement>;
  /** Shows the pressed look without a finger. For docs and visual tests only. */
  forcePressed?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1},description:"Stable key for the segment (also set as the button id). Default: its index."},{key:"label",value:{name:"ReactNode",required:!0},description:"IM-16 M, e.g. «29 июл» or «1 участник». Any node: pass a `SwapNumber` to let a new value slide in after the user\npicked it (see the «Детали» case)."},{key:"icon",value:{name:"ReactNode",required:!1},description:"14 px solid icon on the left: `<CalendarIcon size={14} />`, `<UserIcon size={14} />`."},{key:"ref",value:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>",required:!1},description:"The segment's <button>: to give focus back to it when its picker closes."},{key:"forcePressed",value:{name:"boolean",required:!1},description:"Shows the pressed look without a finger. For docs and visual tests only."}]}}]}],raw:"FloatingFilterItem[]"},description:"One or two segments. Each one is a button that opens its own picker."}}};export{_ as F};
