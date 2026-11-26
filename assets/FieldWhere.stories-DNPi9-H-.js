import{r as f,j as u}from"./iframe-DyD5Yel4.js";import{P as u4}from"./Pressable-CAjp7WdB.js";import{c as e4}from"./cx-2dOUpm6k.js";import{S as A}from"./Select-mP3A-Zmx.js";import{D as a4}from"./Divider-CIZGT-_8.js";import{S as n4}from"./arrows-0JYTYJZi.js";const t4="_card_e5q8u_6",o4="_value_e5q8u_17",r4="_swap_e5q8u_46",l4="_swapIcon_e5q8u_89",b={card:t4,value:o4,swap:r4,swapIcon:l4},s4=76,o=f.forwardRef(function({from:a,to:n,onFromClick:v,onToClick:E,onSwap:s,swapLabel:h="Поменять местами",disabled:r=!1,forcePressed:y,className:K,style:U,role:J="group","aria-label":X="Откуда и куда",...Y},$){const[w,Q]=f.useState(0);return u.jsxs("div",{ref:$,role:J,"aria-label":X,className:e4(b.card,K),style:U,"data-disabled":r||void 0,...Y,children:[u.jsx(A,{variant:"plain",showLabel:!0,label:a.label,placeholder:a.placeholder,disabled:r,forcePressed:y==="from",value:x(a.value,w,"from"),onClick:v}),u.jsx(a4,{variant:"full",insetEnd:s4}),u.jsx(A,{variant:"plain",showLabel:!0,label:n.label,placeholder:n.placeholder,disabled:r,forcePressed:y==="to",value:x(n.value,w,"to"),onClick:E}),u.jsx(u4,{as:"button",className:b.swap,"aria-label":h,disabled:r,onClick:()=>{Q(Z=>Z+1),s==null||s()},children:u.jsx("span",{className:b.swapIcon,style:{transform:`rotate(${w*180}deg)`},children:u.jsx(n4,{})})})]})});function x(e,a,n){if(!(e===void 0||e===""))return u.jsx("span",{className:b.value,"data-enter":a>0?n:void 0,children:e},a)}o.__docgenInfo={description:"FieldWhere (Figma field_where 1328:6192): the «Откуда → Куда» pair of the search form — one grey card with two rows and\na round blue button on the line between them that swaps the places.\n\nIt is not a text field: each row is a `Select` with its label shown (a button that opens the place picker), so the field never brings up the\nkeyboard; searching for the place happens in the picker (a `Search` on its own screen). The Figma «Куда отправимся?»\nis the title of that picker, not this card.\n\nSwap: the icon makes a half-turn on every tap (300 ms, ease-out) and the two values slide into each other's rows\n(240 ms, 12 px) while the owner swaps `from` and `to`. Reduced motion: no turn, no slide, the values fade.",methods:[],displayName:"FieldWhere",props:{from:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Small caption above the value, IM-12 R: «Откуда», «Куда». Also the accessible name of the row. */
  label: string;
  /** The chosen place. Empty shows the placeholder. */
  value?: string;
  /** Grey text while nothing is chosen. Default «Выберите». */
  placeholder?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Small caption above the value, IM-12 R: «Откуда», «Куда». Also the accessible name of the row."},{key:"value",value:{name:"string",required:!1},description:"The chosen place. Empty shows the placeholder."},{key:"placeholder",value:{name:"string",required:!1},description:"Grey text while nothing is chosen. Default «Выберите»."}]}},description:"Figma first Select: where from."},to:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /** Small caption above the value, IM-12 R: «Откуда», «Куда». Also the accessible name of the row. */
  label: string;
  /** The chosen place. Empty shows the placeholder. */
  value?: string;
  /** Grey text while nothing is chosen. Default «Выберите». */
  placeholder?: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Small caption above the value, IM-12 R: «Откуда», «Куда». Also the accessible name of the row."},{key:"value",value:{name:"string",required:!1},description:"The chosen place. Empty shows the placeholder."},{key:"placeholder",value:{name:"string",required:!1},description:"Grey text while nothing is chosen. Default «Выберите»."}]}},description:"Figma second Select: where to."},onFromClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"Tap on the first row: open the place picker (a sheet or a screen)."},onToClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},onSwap:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Tap on the round button. The values are the owner's: swap `from` and `to` here."},swapLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the round button. Default «Поменять местами».",defaultValue:{value:"'Поменять местами'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},forcePressed:{required:!1,tsType:{name:"union",raw:"'from' | 'to'",elements:[{name:"literal",value:"'from'"},{name:"literal",value:"'to'"}]},description:`Forces the pressed look of a row.
@internal For docs and visual tests only.`},role:{defaultValue:{value:"'group'",computed:!1},required:!1},"aria-label":{defaultValue:{value:"'Откуда и куда'",computed:!1},required:!1}}};const{expect:t,fn:B,userEvent:l,within:z}=__STORYBOOK_MODULE_TEST__,i4={title:"Components/FieldWhere",component:o,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1328-6192"}},decorators:[e=>u.jsx("div",{style:{padding:16,boxSizing:"border-box",maxWidth:"100%"},children:u.jsx("div",{style:{width:369,maxWidth:"100%"},children:u.jsx(e,{})})})],args:{from:{label:"Откуда",value:"Бишкек"},to:{label:"Куда",value:"Балыкчы"},disabled:!1,onFromClick:B(),onToClick:B(),onSwap:B()},argTypes:{from:{control:"object"},to:{control:"object"},swapLabel:{control:"text"}}};function g({initial:e,...a}){const[[n,v],E]=f.useState(e);return u.jsx(o,{...a,from:n,to:v,onSwap:()=>{var s;E(([h,r])=>[{...h,value:r.value},{...r,value:h.value}]),(s=a.onSwap)==null||s.call(a)}})}const i={render:e=>u.jsx(g,{initial:[e.from,e.to],onSwap:e.onSwap,onFromClick:e.onFromClick,onToClick:e.onToClick,disabled:e.disabled}),play:async({canvasElement:e,args:a})=>{const n=z(e);await t(n.getByRole("button",{name:/Откуда Бишкек/})).toBeInTheDocument(),await l.click(n.getByRole("button",{name:"Поменять местами"})),await t(a.onSwap).toHaveBeenCalledTimes(1),await t(n.getByRole("button",{name:/Откуда Балыкчы/})).toBeInTheDocument(),await t(n.getByRole("button",{name:/Куда Бишкек/})).toBeInTheDocument(),await l.click(n.getByRole("button",{name:/Куда Бишкек/})),await t(a.onToClick).toHaveBeenCalledTimes(1)}},c={name:"Все состояния",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:24},children:[u.jsx(p,{title:"Figma: два места",children:u.jsx(o,{from:{label:"Откуда",value:"Бишкек"},to:{label:"Куда",value:"Балыкчы"}})}),u.jsx(p,{title:"Пусто: «Выберите»",children:u.jsx(o,{from:{label:"Откуда"},to:{label:"Куда",placeholder:"Город или страна"}})}),u.jsx(p,{title:"Длинные названия: обрезаются многоточием",children:u.jsx(o,{from:{label:"Откуда",value:"Международный аэропорт «Манас», Бишкек, Кыргызстан"},to:{label:"Куда",value:"Чолпон-Ата, Иссык-Кульская область"}})}),u.jsx(p,{title:"Строка «Куда» нажата",children:u.jsx(o,{forcePressed:"to",from:{label:"Откуда",value:"Бишкек"},to:{label:"Куда",value:"Балыкчы"}})}),u.jsx(p,{title:"Недоступно",children:u.jsx(o,{disabled:!0,from:{label:"Откуда",value:"Бишкек"},to:{label:"Куда",value:"Балыкчы"}})})]})};function p({title:e,children:a}){return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr)",gap:8},children:[u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),a]})}const d={name:"Клавиатура",parameters:{controls:{disable:!0}},render:e=>u.jsx(g,{initial:[e.from,e.to],onSwap:e.onSwap,onFromClick:e.onFromClick,onToClick:e.onToClick}),play:async({canvasElement:e,args:a})=>{const n=z(e);await l.tab(),await t(n.getByRole("button",{name:/Откуда/})).toHaveFocus(),await l.keyboard("{Enter}"),await t(a.onFromClick).toHaveBeenCalled(),await l.tab(),await l.tab(),await t(n.getByRole("button",{name:"Поменять местами"})).toHaveFocus(),await l.keyboard(" "),await t(a.onSwap).toHaveBeenCalled()}},m={name:"Кейс: форма поиска билетов",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},decorators:[e=>u.jsx("div",{style:{width:393,maxWidth:"100%",padding:12,boxSizing:"border-box",background:"var(--color-bg-surface)"},children:u.jsx(e,{})})],render:()=>u.jsx(g,{initial:[{label:"Откуда",value:"Бишкек"},{label:"Куда",value:"Балыкчы"}]})},c4=["Playground","States","Keyboard","CaseSearchForm"];var F,C,D,k,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Swapping initial={[args.from, args.to]} onSwap={args.onSwap} onFromClick={args.onFromClick} onToClick={args.onToClick} disabled={args.disabled} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('button', {
      name: /Откуда Бишкек/
    })).toBeInTheDocument();
    await userEvent.click(c.getByRole('button', {
      name: 'Поменять местами'
    }));
    await expect(args.onSwap).toHaveBeenCalledTimes(1);
    await expect(c.getByRole('button', {
      name: /Откуда Балыкчы/
    })).toBeInTheDocument();
    await expect(c.getByRole('button', {
      name: /Куда Бишкек/
    })).toBeInTheDocument();
    await userEvent.click(c.getByRole('button', {
      name: /Куда Бишкек/
    }));
    await expect(args.onToClick).toHaveBeenCalledTimes(1);
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Тапни кнопку между строками: иконка делает полоборота, значения меняются местами. Тап по строке откроет выбор места.",...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.description}}};var T,j,_,R,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: 24
  }}>
      <Block title="Figma: два места">
        <FieldWhere from={{
        label: 'Откуда',
        value: 'Бишкек'
      }} to={{
        label: 'Куда',
        value: 'Балыкчы'
      }} />
      </Block>
      <Block title="Пусто: «Выберите»">
        <FieldWhere from={{
        label: 'Откуда'
      }} to={{
        label: 'Куда',
        placeholder: 'Город или страна'
      }} />
      </Block>
      <Block title="Длинные названия: обрезаются многоточием">
        <FieldWhere from={{
        label: 'Откуда',
        value: 'Международный аэропорт «Манас», Бишкек, Кыргызстан'
      }} to={{
        label: 'Куда',
        value: 'Чолпон-Ата, Иссык-Кульская область'
      }} />
      </Block>
      <Block title="Строка «Куда» нажата">
        <FieldWhere forcePressed="to" from={{
        label: 'Откуда',
        value: 'Бишкек'
      }} to={{
        label: 'Куда',
        value: 'Балыкчы'
      }} />
      </Block>
      <Block title="Недоступно">
        <FieldWhere disabled from={{
        label: 'Откуда',
        value: 'Бишкек'
      }} to={{
        label: 'Куда',
        value: 'Балыкчы'
      }} />
      </Block>
    </div>
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Figma 1328:6192 и состояния, которых нет в Figma: пустые строки, длинные названия, нажатие, недоступно.",...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var H,I,W,M,P;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Клавиатура',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Swapping initial={[args.from, args.to]} onSwap={args.onSwap} onFromClick={args.onFromClick} onToClick={args.onToClick} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.tab();
    await expect(c.getByRole('button', {
      name: /Откуда/
    })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onFromClick).toHaveBeenCalled();
    await userEvent.tab();
    await userEvent.tab();
    await expect(c.getByRole('button', {
      name: 'Поменять местами'
    })).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(args.onSwap).toHaveBeenCalled();
  }
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"Клавиатура: Tab идёт по строкам и кнопке, Пробел и Enter нажимают.",...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.description}}};var L,N,O,V,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Кейс: форма поиска билетов',
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
  decorators: [Story => <div style={{
    width: 393,
    maxWidth: '100%',
    padding: 12,
    boxSizing: 'border-box',
    background: 'var(--color-bg-surface)'
  }}>
        <Story />
      </div>],
  render: () => <Swapping initial={[{
    label: 'Откуда',
    value: 'Бишкек'
  }, {
    label: 'Куда',
    value: 'Балыкчы'
  }]} />
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:`Форма поиска: «Откуда» и «Куда» в одной карточке, под ней кнопка поиска. В «Выходные» этой карточки пока нет (в Figma дизайн-системы
она нарисована с Бишкеком и Балыкчы), поэтому место взято оттуда.`,...(G=(V=m.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};const E4=Object.freeze(Object.defineProperty({__proto__:null,CaseSearchForm:m,Keyboard:d,Playground:i,States:c,__namedExportsOrder:c4,default:i4},Symbol.toStringTag,{value:"Module"}));export{m as C,E4 as F,i as P,c as S};
