import{j as e,r as me}from"./iframe-DuqTOznb.js";import{C as o}from"./Caption-C6jupY-b.js";import{F as ye}from"./figma-BZstJmpc.js";import{F as ge}from"./FullWidthFrame-C5uG5fym.js";import{P as n}from"./photos-Cw5k0SX3.js";import{S as ie,a as se,R as re}from"./SectionHeading-C6jU3Co2.js";import{c as b}from"./cx-2dOUpm6k.js";import{P as fe}from"./Pressable-D45JnRku.js";import{S as he,a as xe}from"./Skeleton-D5GPHumj.js";import{A as Ce}from"./AllTile-DBXxEKhx.js";const y=()=>e.jsxs("svg",{viewBox:"0 0 24 18",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[e.jsx("rect",{width:"24",height:"18",fill:"#E8112D"}),e.jsx("circle",{cx:"12",cy:"9",r:"4.6",fill:"#FFEF00"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.4",fill:"#E8112D"})]});y.__docgenInfo={description:"The Kyrgyz flag, drawn small: a red field and a yellow sun. Only for stories.",methods:[],displayName:"KyrgyzFlag"};const ve="_root_r33se_6",ke="_img_r33se_65",be="_shade_r33se_74",je="_flag_r33se_81",Ae="_text_r33se_104",Se="_title_r33se_118",we="_subtitle_r33se_130",Te="_tile_r33se_145",i={root:ve,img:ke,shade:be,flag:je,text:Ae,title:Se,subtitle:we,tile:Te},a=me.forwardRef(function({variant:s="city",all:r=!1,skeleton:l=!1,title:S,subtitle:w,image:le,imageSrcSet:T,imageSizes:oe,priority:ue=!1,flag:D,allLabel:ce="Показать все",href:h,target:E,rel:B,download:_,hrefLang:F,onClick:x,className:C,...v},k){const de=!l&&(!!h||!!x);if(l)return e.jsx(he,{ref:k,...v,className:b(i.root,C),"data-variant":s,"data-skeleton":"",children:e.jsx(xe,{height:"100%",radius:20})});if(r)return e.jsx(Ce,{ref:k,...v,href:h,target:E,rel:B,download:_,hrefLang:F,onClick:x,className:b(i.tile,C),"data-variant":s,label:ce,buttonSize:40});const pe=oe??(s==="country"?"132px":"172px");return e.jsxs(fe,{ref:k,...v,href:h,target:E,rel:B,download:_,hrefLang:F,onClick:x,className:b(i.root,C),"data-variant":s,"data-interactive":de||void 0,children:[e.jsx("img",{className:i.img,src:le,srcSet:T,sizes:T?pe:void 0,alt:"",draggable:!1,loading:ue?"eager":"lazy",decoding:"async"}),e.jsx("span",{className:i.shade,"aria-hidden":"true"}),D&&e.jsx("span",{className:i.flag,"aria-hidden":"true",children:D}),e.jsxs("span",{className:i.text,children:[S&&e.jsx("span",{className:i.title,children:S}),w&&e.jsx("span",{className:i.subtitle,children:w})]})]})});a.__docgenInfo={description:"DestinationCard (Figma destination_card 883:4302): a country or a city in a row, a photo with the name at the bottom.\nThe card itself is the link or the button, so there is one stop for the keyboard and screen readers.\nPress: it sinks a little under the finger. `onClick` gets the native event. `ref`, `className`, `style` and the rest\nprops (pointer handlers included) go to the root element.",methods:[],displayName:"DestinationCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'country' | 'city'",elements:[{name:"literal",value:"'country'"},{name:"literal",value:"'city'"}]},description:"Figma Type. Default `city`.",defaultValue:{value:"'city'",computed:!1}},all:{required:!1,tsType:{name:"boolean"},description:"Figma Variant=All: the «Показать все» tile that ends the row, in the size of `variant`.",defaultValue:{value:"false",computed:!1}},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Skeleton=True.",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"«Кыргызстан», «Бишкек». The card is meaningless without it (except `all` and `skeleton`)."},subtitle:{required:!1,tsType:{name:"string"},description:"«123 экскурсии» (country), «от 1 475 ⃀» (city)."},image:{required:!1,tsType:{name:"string"},description:"The photo (cover)."},imageSrcSet:{required:!1,tsType:{name:"string"},description:""},imageSizes:{required:!1,tsType:{name:"string"},description:"`sizes` of the photo, for `imageSrcSet`. Default is the real width: 132px (country), 172px (city)."},priority:{required:!1,tsType:{name:"boolean"},description:"The photo is above the fold: loads at once instead of lazily.",defaultValue:{value:"false",computed:!1}},flag:{required:!1,tsType:{name:"ReactNode"},description:"The flag: any element that fills its box (an `<img>`, an `<svg>`, `FlagIcon`); the card sizes and rounds the box."},allLabel:{required:!1,tsType:{name:"string"},description:"All: the label under the arrow, default «Показать все».",defaultValue:{value:"'Показать все'",computed:!1}}}};const{expect:g,fn:j,userEvent:f,within:De}=__STORYBOOK_MODULE_TEST__,Ee={title:"Components/DestinationCard",component:a,parameters:{layout:"fullscreen",design:{type:"figma",url:ye("883-4302")}},args:{variant:"city",all:!1,skeleton:!1,title:"Бишкек",subtitle:"от 1 475 ⃀",image:n.alaArcha,flag:e.jsx(y,{}),onClick:j()},argTypes:{variant:{control:"inline-radio",options:["country","city"]},all:{control:"boolean"},skeleton:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},image:{control:!1},imageSizes:{control:!1},flag:{control:!1},onClick:{control:!1},href:{control:!1}}},A=[t=>e.jsx(ge,{children:e.jsx(t,{})})],u={decorators:A},c={decorators:A,name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"Country, Default"}),e.jsx(a,{variant:"country",title:"Кыргызстан",subtitle:"123 экскурсии",image:n.tianShan,flag:e.jsx(y,{}),onClick:()=>{}})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"Country, Skeleton"}),e.jsx(a,{variant:"country",skeleton:!0})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"Country, All"}),e.jsx(a,{variant:"country",all:!0,onClick:()=>{}})]})]}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"City, Default"}),e.jsx(a,{variant:"city",title:"Бишкек",subtitle:"от 1 475 ⃀",image:n.alaArcha,flag:e.jsx(y,{}),onClick:()=>{}})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"City, Skeleton"}),e.jsx(a,{variant:"city",skeleton:!0})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(o,{children:"City, All (в Figma нет, тот же шаблон)"}),e.jsx(a,{variant:"city",all:!0,onClick:()=>{}})]})]})]})},Be=[{title:"Бишкек",price:"от 1 469 ⃀",image:n.alaArcha},{title:"Ала-Арча",price:"от 7 148 ⃀",image:n.tianShan},{title:"Каракол",price:"от 14 688 ⃀",image:n.kelTor},{title:"Чимган",price:"от 4 401 ⃀",image:n.clouds},{title:"Самарканд",price:"от 1 232 ⃀",image:n.konorchek}],d={name:"Кейсы · Города",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(ie,{children:[e.jsx(se,{children:"Города"}),e.jsx(re,{children:Be.map(t=>e.jsx(a,{variant:"city",title:t.title,subtitle:t.price,image:t.image,flag:e.jsx(y,{}),onClick:()=>{}},t.title))})]})},p={name:"Кейсы · Страны",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(ie,{children:[e.jsx(se,{children:"Куда поехать"}),e.jsxs(re,{children:[[["Кыргызстан","123 экскурсии",n.tianShan],["Казахстан","87 экскурсий",n.clouds],["Узбекистан","64 экскурсии",n.konorchek]].map(([t,s,r])=>e.jsx(a,{variant:"country",title:t,subtitle:s,image:r,flag:e.jsx(y,{}),onClick:()=>{}},t)),e.jsx(a,{variant:"country",all:!0,onClick:()=>{}})]})]})},m={decorators:A,name:"Тест: тап и Enter",parameters:{controls:{disable:!0}},args:{onClick:j(),onAll:j()},render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{variant:"city",title:"Бишкек",subtitle:"от 1 475 ⃀",image:n.alaArcha,onClick:t.onClick}),e.jsx(a,{variant:"city",all:!0,onClick:t.onAll})]}),play:async({canvasElement:t,args:s})=>{const r=s,l=De(t);await f.click(l.getByRole("button",{name:/Бишкек/})),await g(r.onClick).toHaveBeenCalledTimes(1),await g(r.onClick).toHaveBeenLastCalledWith(g.objectContaining({type:"click"})),l.getByRole("button",{name:/Бишкек/}).focus(),await f.keyboard("{Enter}"),await g(r.onClick).toHaveBeenCalledTimes(2),await f.click(l.getByRole("button",{name:"Показать все"})),await f.click(t.querySelector("[data-all-hit]")),await g(r.onAll).toHaveBeenCalledTimes(2)}},_e=["Playground","Variants","CaseCities","CaseCountries","Interaction"];var R,O,H,z,I;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  decorators: framed
}`,...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.source},description:{story:"Тапни по карточке: она слегка уходит вглубь. Вариант и состав меняются в Controls.",...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};var P,q,N,V,K;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>Country, Default</Caption>
          <DestinationCard variant="country" title="Кыргызстан" subtitle="123 экскурсии" image={PHOTOS.tianShan} flag={<KyrgyzFlag />} onClick={() => {}} />
        </div>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>Country, Skeleton</Caption>
          <DestinationCard variant="country" skeleton />
        </div>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>Country, All</Caption>
          <DestinationCard variant="country" all onClick={() => {}} />
        </div>
      </div>
      <div style={{
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>City, Default</Caption>
          <DestinationCard variant="city" title="Бишкек" subtitle="от 1 475 ⃀" image={PHOTOS.alaArcha} flag={<KyrgyzFlag />} onClick={() => {}} />
        </div>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>City, Skeleton</Caption>
          <DestinationCard variant="city" skeleton />
        </div>
        <div style={{
        display: 'grid',
        gap: 8
      }}>
          <Caption>City, All (в Figma нет, тот же шаблон)</Caption>
          <DestinationCard variant="city" all onClick={() => {}} />
        </div>
      </div>
    </div>
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:"The Figma matrix 883:4302: Type Country | City × Variant Default | All × Skeleton.",...(K=(V=c.parameters)==null?void 0:V.docs)==null?void 0:K.description}}};var W,M,L,G,Y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Кейсы · Города',
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
  render: () => <Screen>
      <SectionHeading>Города</SectionHeading>
      <Row>
        {CITIES.map(c => <DestinationCard key={c.title} variant="city" title={c.title} subtitle={c.price} image={c.image} flag={<KyrgyzFlag />} onClick={() => {}} />)}
      </Row>
    </Screen>
}`,...(L=(M=d.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"«Города» on the home: a scroll row of city cards with the lowest price.",...(Y=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Y.description}}};var U,J,Q,X,Z;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Кейсы · Страны',
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
  render: () => <Screen>
      <SectionHeading>Куда поехать</SectionHeading>
      <Row>
        {[['Кыргызстан', '123 экскурсии', PHOTOS.tianShan], ['Казахстан', '87 экскурсий', PHOTOS.clouds], ['Узбекистан', '64 экскурсии', PHOTOS.konorchek]].map(([t, s, img]) => <DestinationCard key={t} variant="country" title={t} subtitle={s} image={img} flag={<KyrgyzFlag />} onClick={() => {}} />)}
        <DestinationCard variant="country" all onClick={() => {}} />
      </Row>
    </Screen>
}`,...(Q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Countries with the number of excursions and «Показать все» at the end.",...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var $,ee,te,ae,ne;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Тест: тап и Enter',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onClick: fn(),
    onAll: fn()
  },
  render: args => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <DestinationCard variant="city" title="Бишкек" subtitle="от 1 475 ⃀" image={PHOTOS.alaArcha} onClick={(args as {
      onClick: () => void;
    }).onClick} />
      <DestinationCard variant="city" all onClick={(args as {
      onAll: () => void;
    }).onAll} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const a = args as unknown as {
      onClick: ReturnType<typeof fn>;
      onAll: ReturnType<typeof fn>;
    };
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: /Бишкек/
    }));
    await expect(a.onClick).toHaveBeenCalledTimes(1);
    await expect(a.onClick).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'click'
    }));
    c.getByRole('button', {
      name: /Бишкек/
    }).focus();
    await userEvent.keyboard('{Enter}');
    await expect(a.onClick).toHaveBeenCalledTimes(2);
    // «Показать все»: the arrow, and a tap on the label (the target under it)
    await userEvent.click(c.getByRole('button', {
      name: 'Показать все'
    }));
    await userEvent.click(canvasElement.querySelector('[data-all-hit]') as HTMLElement);
    await expect(a.onAll).toHaveBeenCalledTimes(2);
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Interaction test: a tap and Enter open the card (the click gets the native event); the «Показать все» tile too.",...(ne=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};const Ke=Object.freeze(Object.defineProperty({__proto__:null,CaseCities:d,CaseCountries:p,Interaction:m,Playground:u,Variants:c,__namedExportsOrder:_e,default:Ee},Symbol.toStringTag,{value:"Module"}));export{d as C,u as P,Ke as S,c as V,p as a};
