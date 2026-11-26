import{r as B,j as u}from"./iframe-DyD5Yel4.js";import{u as ce}from"./usePress-XYzAalw7.js";import{c as pe}from"./cx-2dOUpm6k.js";import{u as he,T as me}from"./Tabs-MqSbiXir.js";import{P as be,a as fe}from"./product-D-iOrgQs.js";const ge="_tab_11r6l_6",xe="_tile_11r6l_44",ve="_glyph_11r6l_60",ye="_solid_11r6l_74",we="_label_11r6l_90",x={tab:ge,tile:xe,glyph:ve,solid:ye,label:we},Be={avia:"Авиабилеты",tour:"Туры",hotel:"Отели",excursions:"Экскурсии",weekend:"Выходные"},n=52,T=new Map;function Ee(a){const e=T.get(a);if(e)return e;const t=fe[a],o=(n-t.w)/2,f=(n-t.h)/2,g=t.d.map(v=>`<path d='${v}' fill='#000'/>`).join(""),r=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${n} ${n}'><defs><mask id='m'><rect width='${n}' height='${n}' fill='#fff'/><g transform='translate(${o} ${f})'>${g}</g></mask></defs><rect width='${n}' height='${n}' rx='16' fill='#000' mask='url(#m)'/></svg>`,i=`url("data:image/svg+xml,${encodeURIComponent(r)}")`;return T.set(a,i),i}const m=B.forwardRef(function({kind:e,value:t=e,children:o,selected:f=!1,forcePressed:g=!1,disabled:r=!1,type:i="button",className:v,onClick:y,onPointerDown:ue,onPointerUp:ae,onPointerLeave:te,onPointerCancel:se,...re},ne){const{selected:oe,aria:ie,select:w}=he(t,f),{pressed:de,handlers:le}=ce(!r,{onPointerDown:ue,onPointerUp:ae,onPointerLeave:te,onPointerCancel:se});return u.jsxs("button",{ref:ne,type:i,className:pe(x.tab,v),"data-kind":e,"data-selected":oe||void 0,"data-pressed":(de||g)&&!r||void 0,"data-disabled":r||void 0,disabled:r,...ie,...re,...le,onClick:A=>{y==null||y(A),A.defaultPrevented||w==null||w()},children:[u.jsxs("span",{className:x.tile,"aria-hidden":"true",children:[u.jsx("span",{className:x.glyph,children:u.jsx(be,{kind:e})}),u.jsx("span",{className:x.solid,style:{"--_cut":Ee(e)}})]}),u.jsx("span",{className:x.label,children:o??Be[e]})]})});m.__docgenInfo={description:`ProductTab (Figma tabs_product 1005:6901): a product of the home screen — a 52 px tile with the product glyph and a label.
Meant for a brand or dark header: the label and the glyph are white.
 - Selected?=False: a see-through tile (white 10 %) with a white glyph.
 - Selected?=True: a solid white tile with the glyph cut out of it, so the header shows through the glyph.
The choice cross-fades the two (opacity only). Press: the tile shrinks to 0.94 on pointer-down. Used inside \`ProductTabs\`
(role tab); on its own it is a toggle button.`,methods:[],displayName:"ProductTab",props:{kind:{required:!0,tsType:{name:"unknown"},description:"Figma Type: Avia | Tour | Hotel | Excursions | Weekend. Picks the glyph."},value:{required:!1,tsType:{name:"string"},description:"Name inside `ProductTabs`. Default: the `kind`.",defaultValue:{value:"kind",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Label under the tile, IM-12 S. Default: the product's name."},selected:{required:!1,tsType:{name:"boolean"},description:"Figma Selected?=True when the tab is on its own; inside `ProductTabs` the row decides.",defaultValue:{value:"false",computed:!1}},forcePressed:{required:!1,tsType:{name:"boolean"},description:`Forces the press look. For docs and visual tests only.
@internal`,defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const Fe=["avia","tour","hotel","weekend"],E=B.forwardRef(function({kinds:e=Fe,children:t,inset:o=12,"aria-label":f="Разделы",...g},r){return u.jsx(me,{ref:r,gap:"none",inset:o,"aria-label":f,...g,children:t??e.map(i=>u.jsx(m,{kind:i},i))})});E.__docgenInfo={description:'ProductTabs: the product switcher of the home header — a row of `ProductTab`s, `role="tablist"` (see Tabs: arrow keys,\none stop in the Tab order, the chosen product is brought to the centre when the row scrolls).\nFour products share the row evenly (Figma: padding 12, each tab 92.25 on a 393 screen); the tab is at least 84 wide, so a\nfifth one makes the row scroll instead of squeezing the labels.',methods:[],displayName:"ProductTabs",props:{kinds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"ProductKind[]"},description:"Which products, in this order. Default: the four of the home screen. The `children` replace them.",defaultValue:{value:"['avia', 'tour', 'hotel', 'weekend']",computed:!1}},inset:{defaultValue:{value:"12",computed:!1},required:!1},"aria-label":{defaultValue:{value:"'Разделы'",computed:!1},required:!1}}};const{expect:s,fn:ke,userEvent:b,within:F}=__STORYBOOK_MODULE_TEST__,Ae={title:"Components/ProductTabs",component:E,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1005-6901"},layout:"fullscreen"},args:{defaultValue:"weekend",kinds:["avia","tour","hotel","weekend"],onValueChange:ke()},argTypes:{kinds:{control:"check",options:["avia","tour","hotel","excursions","weekend"]},value:{control:!1},children:{control:!1},panels:{control:!1},inset:{control:"number"}}};function Z({children:a,width:e=393}){const t={width:e,maxWidth:"100%",padding:"24px 0 16px",background:"linear-gradient(180deg, #766aef, #9977f3)"};return u.jsx("div",{style:t,children:a})}const k=a=>u.jsx(Z,{children:u.jsx(a,{})}),d={decorators:[k],play:async({canvasElement:a,args:e})=>{const t=F(a);await s(t.getByRole("tab",{name:"Выходные"})).toHaveAttribute("aria-selected","true"),await b.click(t.getByRole("tab",{name:"Авиабилеты"})),await s(t.getByRole("tab",{name:"Авиабилеты"})).toHaveAttribute("aria-selected","true"),await s(e.onValueChange).toHaveBeenLastCalledWith("avia")}},ee=["avia","tour","hotel","excursions","weekend"],l={name:"Все состояния",parameters:{controls:{disable:!0}},decorators:[a=>u.jsx(Z,{width:460,children:u.jsx(a,{})})],render:()=>u.jsxs("div",{style:{display:"grid",gap:16,overflowX:"auto",padding:"0 12px"},children:[[!1,!0].map(a=>u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:0},children:ee.map(e=>u.jsx(m,{kind:e,selected:a,style:{flex:"0 0 84px"}},e))},String(a))),u.jsxs("div",{style:{display:"flex",width:"max-content",margin:"0 auto"},children:[u.jsx(m,{kind:"avia",forcePressed:!0,style:{flex:"0 0 84px"}}),u.jsx(m,{kind:"avia",selected:!0,forcePressed:!0,style:{flex:"0 0 84px"}}),u.jsx(m,{kind:"avia",disabled:!0,style:{flex:"0 0 84px"}})]})]})},c={name:"Пять продуктов",decorators:[k],parameters:{controls:{disable:!0}},args:{kinds:ee,defaultValue:"excursions"}},p={name:"Клавиатура",decorators:[k],parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const t=F(a).getAllByRole("tab");await b.tab(),await s(t[3]).toHaveFocus(),await b.keyboard("{ArrowRight}"),await s(t[0]).toHaveFocus(),await s(t[0]).toHaveAttribute("aria-selected","true"),await b.keyboard("{End}"),await s(t[3]).toHaveFocus(),await b.keyboard("{ArrowLeft}{ArrowLeft}"),await s(t[1]).toHaveFocus()}},h={name:"Кейсы · Главная: продукты в шапке",parameters:{controls:{disable:!0}},render:function(e){const[t,o]=B.useState("weekend");return u.jsx("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:u.jsx("div",{style:{height:185,padding:"110px 0 0",boxSizing:"border-box",background:"linear-gradient(180deg, var(--color-base-vertical-excursions-start), var(--color-base-vertical-excursions-end))"},children:u.jsx(E,{...e,value:t,onValueChange:o,"aria-label":"Что ищем"})})})},play:async({canvasElement:a})=>{const e=F(a);await b.click(e.getByRole("tab",{name:"Туры"})),await s(e.getByRole("tab",{name:"Туры"})).toHaveAttribute("aria-selected","true")}},Te=["Playground","States","FiveProducts","Keyboard","CaseHome"];var P,_,S,j,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [onHeader],
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await expect(c.getByRole('tab', {
      name: 'Выходные'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(c.getByRole('tab', {
      name: 'Авиабилеты'
    }));
    await expect(c.getByRole('tab', {
      name: 'Авиабилеты'
    })).toHaveAttribute('aria-selected', 'true');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('avia');
  }
}`,...(S=(_=d.parameters)==null?void 0:_.docs)==null?void 0:S.source},description:{story:"Тапни продукт: плитка заливается белым, значок вырезается из неё. Стрелки ← → переключают с клавиатуры.",...(H=(j=d.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var D,C,R,V,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    controls: {
      disable: true
    }
  },
  decorators: [Story => <Header width={460}>{<Story />}</Header>],
  render: () =>
  // five 84 px tiles are 420 px wide: on a narrower screen the matrix scrolls inside the header instead of clipping the labels
  <div style={{
    display: 'grid',
    gap: 16,
    overflowX: 'auto',
    padding: '0 12px'
  }}>
      {[false, true].map(selected => <div key={String(selected)} style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 0
    }}>
          {KINDS.map(k => <ProductTab key={k} kind={k} selected={selected} style={{
        flex: '0 0 84px'
      }} />)}
        </div>)}
      <div style={{
      display: 'flex',
      width: 'max-content',
      margin: '0 auto'
    }}>
        <ProductTab kind="avia" forcePressed style={{
        flex: '0 0 84px'
      }} />
        <ProductTab kind="avia" selected forcePressed style={{
        flex: '0 0 84px'
      }} />
        <ProductTab kind="avia" disabled style={{
        flex: '0 0 84px'
      }} />
      </div>
    </div>
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source},description:{story:"Figma 1005:6901: Type × Selected?. Пять продуктов; в Figma у Excursions подпись «Выходные» — здесь «Экскурсии».",...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.description}}};var N,q,$,I,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Пять продуктов',
  decorators: [onHeader],
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    kinds: KINDS,
    defaultValue: 'excursions'
  }
}`,...($=(q=c.parameters)==null?void 0:q.docs)==null?void 0:$.source},description:{story:"Пять продуктов не помещаются в 393: у таба минимум 84, ряд прокручивается, выбранный уезжает в центр.",...(O=(I=c.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var K,M,W,U,z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Клавиатура',
  decorators: [onHeader],
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    const tabs = c.getAllByRole('tab');
    await userEvent.tab();
    await expect(tabs[3]).toHaveFocus(); // в ряд входим на выбранном продукте
    await userEvent.keyboard('{ArrowRight}');
    await expect(tabs[0]).toHaveFocus();
    await expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{End}');
    await expect(tabs[3]).toHaveFocus();
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await expect(tabs[1]).toHaveFocus();
  }
}`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Клавиатура: стрелки двигают выбор по кругу, Home и End прыгают к краям.",...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.description}}};var X,G,Y,J,Q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Кейсы · Главная: продукты в шапке',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render(args) {
    const [v, setV] = useState('weekend');
    return <div style={{
      width: 393,
      maxWidth: '100%',
      background: 'var(--color-bg-surface)'
    }}>
        <div style={{
        height: 185,
        padding: '110px 0 0',
        boxSizing: 'border-box',
        background: 'linear-gradient(180deg, var(--color-base-vertical-excursions-start), var(--color-base-vertical-excursions-end))'
      }}>
          <ProductTabs {...args} value={v} onValueChange={setV} aria-label="Что ищем" />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('tab', {
      name: 'Туры'
    }));
    await expect(c.getByRole('tab', {
      name: 'Туры'
    })).toHaveAttribute('aria-selected', 'true');
  }
}`,...(Y=(G=h.parameters)==null?void 0:G.docs)==null?void 0:Y.source},description:{story:`«Главная» (Figma 4687:46211, «Products row» at y 110): four products — Авиабилеты, Туры, Отели, Выходные — 92.25 wide each,
12 px in. «Выходные» is chosen; the tap on «Туры» in the play test moves the choice. The header is the home hero (the
excursions gradient tokens), as on the screen.`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const De=Object.freeze(Object.defineProperty({__proto__:null,CaseHome:h,FiveProducts:c,Keyboard:p,Playground:d,States:l,__namedExportsOrder:Te,default:Ae},Symbol.toStringTag,{value:"Module"}));export{h as C,c as F,De as P,l as S,d as a};
