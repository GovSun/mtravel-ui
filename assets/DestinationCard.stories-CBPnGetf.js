import{j as e,r as ie}from"./iframe-DyD5Yel4.js";import{C as r}from"./Caption-D_clnAXK.js";import{F as se}from"./figma-BZstJmpc.js";import{F as le}from"./FullWidthFrame-BO26oEhV.js";import{P as m}from"./photos-D1Eacwwu.js";import{S as re}from"./Screen-D3FX-wep.js";import{C as oe}from"./home-CSe8AaHy.js";import{c as b}from"./cx-2dOUpm6k.js";import{P as ue}from"./Pressable-CAjp7WdB.js";import{S as ce,a as de}from"./Skeleton-dpQW7cMp.js";import{A as pe}from"./AllTile-C6kvbWaL.js";import{S as ye}from"./SectionTitle-CwRady4O.js";import{F as me}from"./FlagIcon-Lj2B5Mol.js";const g=()=>e.jsxs("svg",{viewBox:"0 0 24 18",preserveAspectRatio:"xMidYMid slice","aria-hidden":"true",children:[e.jsx("rect",{width:"24",height:"18",fill:"#E8112D"}),e.jsx("circle",{cx:"12",cy:"9",r:"4.6",fill:"#FFEF00"}),e.jsx("circle",{cx:"12",cy:"9",r:"2.4",fill:"#E8112D"})]});g.__docgenInfo={description:"The Kyrgyz flag, drawn small: a red field and a yellow sun. Only for stories.",methods:[],displayName:"KyrgyzFlag"};const ge="_root_r33se_6",fe="_img_r33se_65",xe="_shade_r33se_74",he="_flag_r33se_81",ve="_text_r33se_104",Ce="_title_r33se_118",be="_subtitle_r33se_130",ke="_tile_r33se_145",n={root:ge,img:fe,shade:xe,flag:he,text:ve,title:Ce,subtitle:be,tile:ke},a=ie.forwardRef(function({variant:i="city",all:s=!1,skeleton:l=!1,title:D,subtitle:F,image:Z,imageSrcSet:A,imageSizes:$,priority:ee=!1,flag:B,allLabel:te="Показать все",href:f,target:S,rel:T,download:E,hrefLang:_,onClick:x,className:h,...v},C){const ae=!l&&(!!f||!!x);if(l)return e.jsx(ce,{ref:C,...v,className:b(n.root,h),"data-variant":i,"data-skeleton":"",children:e.jsx(de,{height:"100%",radius:20})});if(s)return e.jsx(pe,{ref:C,...v,href:f,target:S,rel:T,download:E,hrefLang:_,onClick:x,className:b(n.tile,h),"data-variant":i,label:te,buttonSize:40});const ne=$??(i==="country"?"132px":"172px");return e.jsxs(ue,{ref:C,...v,href:f,target:S,rel:T,download:E,hrefLang:_,onClick:x,className:b(n.root,h),"data-variant":i,"data-interactive":ae||void 0,children:[e.jsx("img",{className:n.img,src:Z,srcSet:A,sizes:A?ne:void 0,alt:"",draggable:!1,loading:ee?"eager":"lazy",decoding:"async"}),e.jsx("span",{className:n.shade,"aria-hidden":"true"}),B&&e.jsx("span",{className:n.flag,"aria-hidden":"true",children:B}),e.jsxs("span",{className:n.text,children:[D&&e.jsx("span",{className:n.title,children:D}),F&&e.jsx("span",{className:n.subtitle,children:F})]})]})});a.__docgenInfo={description:"DestinationCard (Figma destination_card 883:4302): a country or a city in a row, a photo with the name at the bottom.\nThe card itself is the link or the button, so there is one stop for the keyboard and screen readers.\nPress: it sinks a little under the finger. `onClick` gets the native event. `ref`, `className`, `style` and the rest\nprops (pointer handlers included) go to the root element.",methods:[],displayName:"DestinationCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'country' | 'city'",elements:[{name:"literal",value:"'country'"},{name:"literal",value:"'city'"}]},description:"Figma Type. Default `city`.",defaultValue:{value:"'city'",computed:!1}},all:{required:!1,tsType:{name:"boolean"},description:"Figma Variant=All: the «Показать все» tile that ends the row, in the size of `variant`.",defaultValue:{value:"false",computed:!1}},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Skeleton=True.",defaultValue:{value:"false",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"«Кыргызстан», «Бишкек». The card is meaningless without it (except `all` and `skeleton`)."},subtitle:{required:!1,tsType:{name:"string"},description:"«123 экскурсии» (country), «от 1 475 ⃀» (city)."},image:{required:!1,tsType:{name:"string"},description:"The photo (cover)."},imageSrcSet:{required:!1,tsType:{name:"string"},description:""},imageSizes:{required:!1,tsType:{name:"string"},description:"`sizes` of the photo, for `imageSrcSet`. Default is the real width: 132px (country), 172px (city)."},priority:{required:!1,tsType:{name:"boolean"},description:"The photo is above the fold: loads at once instead of lazily.",defaultValue:{value:"false",computed:!1}},flag:{required:!1,tsType:{name:"ReactNode"},description:"The flag: any element that fills its box (an `<img>`, an `<svg>`, `FlagIcon`); the card sizes and rounds the box."},allLabel:{required:!1,tsType:{name:"string"},description:"All: the label under the arrow, default «Показать все».",defaultValue:{value:"'Показать все'",computed:!1}}}};const{expect:p,fn:k,userEvent:y,within:je}=__STORYBOOK_MODULE_TEST__,De={title:"Components/DestinationCard",component:a,parameters:{layout:"fullscreen",design:{type:"figma",url:se("883-4302")}},args:{variant:"city",all:!1,skeleton:!1,title:"Бишкек",subtitle:"от 1 475 ⃀",image:m.alaArcha,flag:e.jsx(g,{}),onClick:k()},argTypes:{variant:{control:"inline-radio",options:["country","city"]},all:{control:"boolean"},skeleton:{control:"boolean"},title:{control:"text"},subtitle:{control:"text"},image:{control:!1},imageSizes:{control:!1},flag:{control:!1},onClick:{control:!1},href:{control:!1}}},j=[t=>e.jsx(le,{children:e.jsx(t,{})})],o={decorators:j},u={decorators:j,name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:24},children:[e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"Country, Default"}),e.jsx(a,{variant:"country",title:"Кыргызстан",subtitle:"123 экскурсии",image:m.tianShan,flag:e.jsx(g,{}),onClick:()=>{}})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"Country, Skeleton"}),e.jsx(a,{variant:"country",skeleton:!0})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"Country, All"}),e.jsx(a,{variant:"country",all:!0,onClick:()=>{}})]})]}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"City, Default"}),e.jsx(a,{variant:"city",title:"Бишкек",subtitle:"от 1 475 ⃀",image:m.alaArcha,flag:e.jsx(g,{}),onClick:()=>{}})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"City, Skeleton"}),e.jsx(a,{variant:"city",skeleton:!0})]}),e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsx(r,{children:"City, All (в Figma нет, тот же шаблон)"}),e.jsx(a,{variant:"city",all:!0,onClick:()=>{}})]})]})]})},c={name:"Кейсы · Популярные направления",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(re,{style:{gap:24},children:e.jsxs("section",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",height:48},children:e.jsx(ye,{size:20,children:"Популярные направления"})}),e.jsx("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"flex-start",gap:8,padding:"0 16px",height:220,overflowX:"auto",scrollbarWidth:"none"},children:oe.map(t=>e.jsx(a,{variant:"city",title:t.title,subtitle:t.subtitle,image:t.image,flag:e.jsx(me,{country:t.flag}),onClick:()=>{}},t.title))})]})})},d={decorators:j,name:"Тест: тап и Enter",parameters:{controls:{disable:!0}},args:{onClick:k(),onAll:k()},render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{variant:"city",title:"Бишкек",subtitle:"от 1 475 ⃀",image:m.alaArcha,onClick:t.onClick}),e.jsx(a,{variant:"city",all:!0,onClick:t.onAll})]}),play:async({canvasElement:t,args:i})=>{const s=i,l=je(t);await y.click(l.getByRole("button",{name:/Бишкек/})),await p(s.onClick).toHaveBeenCalledTimes(1),await p(s.onClick).toHaveBeenLastCalledWith(p.objectContaining({type:"click"})),l.getByRole("button",{name:/Бишкек/}).focus(),await y.keyboard("{Enter}"),await p(s.onClick).toHaveBeenCalledTimes(2),await y.click(l.getByRole("button",{name:"Показать все"})),await y.click(t.querySelector("[data-all-hit]")),await p(s.onAll).toHaveBeenCalledTimes(2)}},Fe=["Playground","Variants","CaseCities","Interaction"];var w,I,z,O,R;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: framed
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source},description:{story:"Тапни по карточке: она слегка уходит вглубь. Вариант и состав меняются в Controls.",...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var q,H,P,N,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"The Figma matrix 883:4302: Type Country | City × Variant Default | All × Skeleton.",...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var W,K,M,L,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Кейсы · Популярные направления',
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
  render: () => <Screen style={{
    gap: 24
  }}>
      <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 48
      }}>
          <SectionTitle size={20}>Популярные направления</SectionTitle>
        </div>
        <div style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        padding: '0 16px',
        height: 220,
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
          {CITIES.map(c => <DestinationCard key={c.title} variant="city" title={c.title} subtitle={c.subtitle} image={c.image} flag={<FlagIcon country={c.flag} />} onClick={() => {}} />)}
        </div>
      </section>
    </Screen>
}`,...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"«Популярные направления» on the home (Figma 4687:46152, «Города»): five city cards (172 × 220), flags of the country, 8 px apart.",...(G=(L=c.parameters)==null?void 0:L.docs)==null?void 0:G.description}}};var X,Y,U,J,Q;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(U=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:U.source},description:{story:"Interaction test: a tap and Enter open the card (the click gets the native event); the «Показать все» tile too.",...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const Pe=Object.freeze(Object.defineProperty({__proto__:null,CaseCities:c,Interaction:d,Playground:o,Variants:u,__namedExportsOrder:Fe,default:De},Symbol.toStringTag,{value:"Module"}));export{c as C,o as P,Pe as S,u as V};
