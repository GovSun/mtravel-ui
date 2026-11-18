import{r as B,j as u}from"./iframe-DuqTOznb.js";import{u as ce}from"./usePress-DgMUH5X0.js";import{c as pe}from"./cx-2dOUpm6k.js";import{u as me,T as he}from"./Tabs-CV44PryX.js";import{P as fe,a as ge}from"./product-Bqt1iP7w.js";const be="_tab_11r6l_6",ye="_tile_11r6l_44",ve="_glyph_11r6l_60",xe="_solid_11r6l_74",we="_label_11r6l_90",y={tab:be,tile:ye,glyph:ve,solid:xe,label:we},Be={avia:"Авиабилеты",tour:"Туры",hotel:"Отели",excursions:"Экскурсии",weekend:"Выходные"},r=52,A=new Map;function Ee(t){const a=A.get(t);if(a)return a;const e=ge[t],o=(r-e.w)/2,g=(r-e.h)/2,b=e.d.map(v=>`<path d='${v}' fill='#000'/>`).join(""),n=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${r} ${r}'><defs><mask id='m'><rect width='${r}' height='${r}' fill='#fff'/><g transform='translate(${o} ${g})'>${b}</g></mask></defs><rect width='${r}' height='${r}' rx='16' fill='#000' mask='url(#m)'/></svg>`,i=`url("data:image/svg+xml,${encodeURIComponent(n)}")`;return A.set(t,i),i}const h=B.forwardRef(function({kind:a,value:e=a,children:o,selected:g=!1,forcePressed:b=!1,disabled:n=!1,type:i="button",className:v,onClick:x,onPointerDown:ue,onPointerUp:ae,onPointerLeave:te,onPointerCancel:se,...ne},re){const{selected:oe,aria:ie,select:w}=me(e,g),{pressed:de,handlers:le}=ce(!n,{onPointerDown:ue,onPointerUp:ae,onPointerLeave:te,onPointerCancel:se});return u.jsxs("button",{ref:re,type:i,className:pe(y.tab,v),"data-kind":a,"data-selected":oe||void 0,"data-pressed":(de||b)&&!n||void 0,"data-disabled":n||void 0,disabled:n,...ie,...ne,...le,onClick:T=>{x==null||x(T),T.defaultPrevented||w==null||w()},children:[u.jsxs("span",{className:y.tile,"aria-hidden":"true",children:[u.jsx("span",{className:y.glyph,children:u.jsx(fe,{kind:a})}),u.jsx("span",{className:y.solid,style:{"--_cut":Ee(a)}})]}),u.jsx("span",{className:y.label,children:o??Be[a]})]})});h.__docgenInfo={description:`ProductTab (Figma tabs_product 1005:6901): a product of the home screen — a 52 px tile with the product glyph and a label.
Meant for a brand or dark header: the label and the glyph are white.
 - Selected?=False: a see-through tile (white 10 %) with a white glyph.
 - Selected?=True: a solid white tile with the glyph cut out of it, so the header shows through the glyph.
The choice cross-fades the two (opacity only). Press: the tile shrinks to 0.94 on pointer-down. Used inside \`ProductTabs\`
(role tab); on its own it is a toggle button.`,methods:[],displayName:"ProductTab",props:{kind:{required:!0,tsType:{name:"unknown"},description:"Figma Type: Avia | Tour | Hotel | Excursions | Weekend. Picks the glyph."},value:{required:!1,tsType:{name:"string"},description:"Name inside `ProductTabs`. Default: the `kind`.",defaultValue:{value:"kind",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Label under the tile, IM-12 S. Default: the product's name."},selected:{required:!1,tsType:{name:"boolean"},description:"Figma Selected?=True when the tab is on its own; inside `ProductTabs` the row decides.",defaultValue:{value:"false",computed:!1}},forcePressed:{required:!1,tsType:{name:"boolean"},description:`Forces the press look. For docs and visual tests only.
@internal`,defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const Fe=["avia","tour","hotel","weekend"],E=B.forwardRef(function({kinds:a=Fe,children:e,inset:o=12,"aria-label":g="Разделы",...b},n){return u.jsx(he,{ref:n,gap:"none",inset:o,"aria-label":g,...b,children:e??a.map(i=>u.jsx(h,{kind:i},i))})});E.__docgenInfo={description:'ProductTabs: the product switcher of the home header — a row of `ProductTab`s, `role="tablist"` (see Tabs: arrow keys,\none stop in the Tab order, the chosen product is brought to the centre when the row scrolls).\nFour products share the row evenly (Figma: padding 12, each tab 92.25 on a 393 screen); the tab is at least 84 wide, so a\nfifth one makes the row scroll instead of squeezing the labels.',methods:[],displayName:"ProductTabs",props:{kinds:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"ProductKind[]"},description:"Which products, in this order. Default: the four of the home screen. The `children` replace them.",defaultValue:{value:"['avia', 'tour', 'hotel', 'weekend']",computed:!1}},inset:{defaultValue:{value:"12",computed:!1},required:!1},"aria-label":{defaultValue:{value:"'Разделы'",computed:!1},required:!1}}};const{expect:s,fn:ke,userEvent:f,within:F}=__STORYBOOK_MODULE_TEST__,Te={title:"Components/ProductTabs",component:E,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1005-6901"},layout:"fullscreen"},args:{defaultValue:"weekend",kinds:["avia","tour","hotel","weekend"],onValueChange:ke()},argTypes:{kinds:{control:"check",options:["avia","tour","hotel","excursions","weekend"]},value:{control:!1},children:{control:!1},panels:{control:!1},inset:{control:"number"}}};function Z({children:t,width:a=393}){const e={width:a,maxWidth:"100%",padding:"24px 0 16px",background:"linear-gradient(180deg, #766aef, #9977f3)"};return u.jsx("div",{style:e,children:t})}const k=t=>u.jsx(Z,{children:u.jsx(t,{})}),d={decorators:[k],play:async({canvasElement:t,args:a})=>{const e=F(t);await s(e.getByRole("tab",{name:"Выходные"})).toHaveAttribute("aria-selected","true"),await f.click(e.getByRole("tab",{name:"Авиабилеты"})),await s(e.getByRole("tab",{name:"Авиабилеты"})).toHaveAttribute("aria-selected","true"),await s(a.onValueChange).toHaveBeenLastCalledWith("avia")}},ee=["avia","tour","hotel","excursions","weekend"],l={name:"Все состояния",parameters:{controls:{disable:!0}},decorators:[t=>u.jsx(Z,{width:460,children:u.jsx(t,{})})],render:()=>u.jsxs("div",{style:{display:"grid",gap:16,overflowX:"auto",padding:"0 12px"},children:[[!1,!0].map(t=>u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:0},children:ee.map(a=>u.jsx(h,{kind:a,selected:t,style:{flex:"0 0 84px"}},a))},String(t))),u.jsxs("div",{style:{display:"flex",width:"max-content",margin:"0 auto"},children:[u.jsx(h,{kind:"avia",forcePressed:!0,style:{flex:"0 0 84px"}}),u.jsx(h,{kind:"avia",selected:!0,forcePressed:!0,style:{flex:"0 0 84px"}}),u.jsx(h,{kind:"avia",disabled:!0,style:{flex:"0 0 84px"}})]})]})},c={name:"Пять продуктов",decorators:[k],parameters:{controls:{disable:!0}},args:{kinds:ee,defaultValue:"excursions"}},p={name:"Клавиатура",decorators:[k],parameters:{controls:{disable:!0}},play:async({canvasElement:t})=>{const e=F(t).getAllByRole("tab");await f.tab(),await s(e[3]).toHaveFocus(),await f.keyboard("{ArrowRight}"),await s(e[0]).toHaveFocus(),await s(e[0]).toHaveAttribute("aria-selected","true"),await f.keyboard("{End}"),await s(e[3]).toHaveFocus(),await f.keyboard("{ArrowLeft}{ArrowLeft}"),await s(e[1]).toHaveFocus()}},m={name:"Кейс: Главная — продукты в шапке",parameters:{controls:{disable:!0}},render:function(a){const[e,o]=B.useState("weekend");return u.jsxs("div",{style:{width:393,maxWidth:"100%",background:"var(--color-bg-surface)"},children:[u.jsx("div",{style:{height:223,padding:"110px 0 0",boxSizing:"border-box",background:"linear-gradient(180deg, #766aef, #8b72f1 60%, #9977f3)"},children:u.jsx(E,{...a,value:e,onValueChange:o,"aria-label":"Что ищем"})}),u.jsxs("p",{className:"im-14-m",style:{margin:0,padding:16,color:"var(--color-text-secondary)"},children:["Выбрано: ",e==="weekend"?"Выходные":e==="avia"?"Авиабилеты":e==="tour"?"Туры":"Отели"]})]})},play:async({canvasElement:t})=>{const a=F(t);await f.click(a.getByRole("tab",{name:"Туры"})),await s(a.getByText("Выбрано: Туры")).toBeInTheDocument()}},Ae=["Playground","States","FiveProducts","Keyboard","CaseHome"];var D,P,_,C,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:"Тапни продукт: плитка заливается белым, значок вырезается из неё. Стрелки ← → переключают с клавиатуры.",...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.description}}};var S,H,R,V,N;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(H=l.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Figma 1005:6901: Type × Selected?. Пять продуктов; в Figma у Excursions подпись «Выходные» — здесь «Экскурсии».",...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.description}}};var I,L,q,$,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:"Пять продуктов не помещаются в 393: у таба минимум 84, ряд прокручивается, выбранный уезжает в центр.",...(O=($=c.parameters)==null?void 0:$.docs)==null?void 0:O.description}}};var K,M,W,U,z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Клавиатура: стрелки двигают выбор по кругу, Home и End прыгают к краям.",...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.description}}};var X,G,Y,J,Q;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Кейс: Главная — продукты в шапке',
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
        height: 223,
        padding: '110px 0 0',
        boxSizing: 'border-box',
        // no token: the header is an image in Figma 3410:343604
        background: 'linear-gradient(180deg, #766aef, #8b72f1 60%, #9977f3)'
      }}>
          <ProductTabs {...args} value={v} onValueChange={setV} aria-label="Что ищем" />
        </div>
        <p className="im-14-m" style={{
        margin: 0,
        padding: 16,
        color: 'var(--color-text-secondary)'
      }}>
          Выбрано: {v === 'weekend' ? 'Выходные' : v === 'avia' ? 'Авиабилеты' : v === 'tour' ? 'Туры' : 'Отели'}
        </p>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('tab', {
      name: 'Туры'
    }));
    await expect(c.getByText('Выбрано: Туры')).toBeInTheDocument();
  }
}`,...(Y=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Y.source},description:{story:`«Главная»: шапка с логотипом и четыре продукта — Авиабилеты, Туры, Отели, Выходные (Figma: Products row, padding 12,
каждый таб 92.25 на 393). Выбраны «Выходные». Продукт меняет весь экран ниже, поэтому tablist.`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const Se=Object.freeze(Object.defineProperty({__proto__:null,CaseHome:m,FiveProducts:c,Keyboard:p,Playground:d,States:l,__namedExportsOrder:Ae,default:Te},Symbol.toStringTag,{value:"Module"}));export{m as C,c as F,Se as P,l as S,d as a};
