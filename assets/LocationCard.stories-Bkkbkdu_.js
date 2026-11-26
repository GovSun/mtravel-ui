import{r as x4,j as u}from"./iframe-DyD5Yel4.js";import{c as B4}from"./cx-2dOUpm6k.js";import{P as C4}from"./Pressable-CAjp7WdB.js";import{B as g4}from"./Badge-CdXEkR6u.js";import{S as f4}from"./SectionTitle-CwRady4O.js";import{a as v4}from"./time-lpmEQjgl.js";import{b as A4,a as E4}from"./places-CYDz-5dl.js";import{P as j4}from"./PillButton-Cdj7WtD9.js";import{F as _4}from"./FactPlate-DOMeLgzx.js";const y4="_root_s7c45_9",b4="_map_s7c45_19",D4="_empty_s7c45_25",k4="_halo_s7c45_31",S4="_pin_s7c45_42",w4="_plate_s7c45_54",F4="_content_s7c45_90",M4="_fade_s7c45_95",T4="_cell_s7c45_99",N4="_timeRow_s7c45_105",R4="_name_s7c45_110",L4="_address_s7c45_115",P4="_heading_s7c45_130",q4="_mapWrap_s7c45_140",I4="_mapCard_s7c45_144",H4="_mapTap_s7c45_151",V4="_route_s7c45_185",W4="_place_s7c45_191",z4="_placeName_s7c45_200",O4="_placeAddress_s7c45_213",U4="_hours_s7c45_224",K4="_hoursIcon_s7c45_236",e={root:y4,map:b4,empty:D4,halo:k4,pin:S4,plate:w4,content:F4,fade:M4,cell:T4,timeRow:N4,name:R4,address:L4,heading:P4,mapWrap:q4,mapCard:I4,mapTap:H4,route:V4,place:W4,placeName:z4,placeAddress:O4,hours:U4,hoursIcon:K4},n=x4.forwardRef(function({variant:t="card",name:x,address:B,hours:v,hoursLabel:l4="Часы работы",time:C,heading:A="Место встречи",map:E,plate:g,routeLabel:p4="Построить маршрут",onRouteClick:j,routeHref:_,onMapClick:y,mapLabel:m4="Открыть карту",className:h4,style:b,...D},k){const S=B4(e.root,h4);return t==="card"?u.jsxs("div",{ref:k,className:S,style:b,"data-variant":"card",...D,children:[u.jsx("div",{className:e.map,children:E??u.jsx("span",{className:e.empty})}),u.jsx(w,{}),g&&u.jsx("div",{className:e.plate,children:g}),u.jsxs("div",{className:e.content,children:[u.jsx("div",{className:e.fade,"aria-hidden":"true"}),u.jsxs("div",{className:e.cell,children:[C&&u.jsx("div",{className:e.timeRow,children:u.jsx(g4,{size:24,variant:"dark",children:C})}),u.jsx("span",{className:e.name,children:x}),B&&u.jsx("span",{className:e.address,children:B})]})]})]}):u.jsxs("section",{ref:k,className:S,style:b,"data-variant":"section","aria-label":A,...D,children:[u.jsx("header",{className:e.heading,"data-time":C?"":void 0,children:u.jsx(f4,{as:"h3",size:20,subtitle:C,children:A})}),u.jsx("div",{className:e.mapWrap,children:u.jsxs("div",{className:e.mapCard,children:[u.jsx("div",{className:e.map,children:E??u.jsx("span",{className:e.empty})}),u.jsx(w,{}),y&&u.jsx(C4,{as:"button",className:e.mapTap,"aria-label":m4,onClick:y}),g&&u.jsx("div",{className:e.plate,children:g}),(j||_)&&u.jsx(G4,{label:p4,onClick:j,href:_})]})}),u.jsxs("div",{className:e.place,children:[u.jsx("span",{className:e.placeName,children:x}),B&&u.jsx("span",{className:e.placeAddress,children:B}),v&&u.jsxs("span",{className:e.hours,children:[u.jsx("span",{children:l4}),u.jsx("span",{"aria-hidden":"true",children:"·"}),u.jsx(v4,{size:14,className:e.hoursIcon,"aria-hidden":"true"}),u.jsx("span",{children:v})]})]})]})});function w(){return u.jsxs(u.Fragment,{children:[u.jsx("span",{className:e.halo,"aria-hidden":"true"}),u.jsx(A4,{className:e.pin})]})}function G4({label:a,onClick:t,href:x}){return u.jsx(j4,{variant:"overlay",className:e.route,href:x,onClick:t,iconRight:u.jsx(E4,{}),children:a})}n.__docgenInfo={description:"Meeting point / venue card (Figma card_location 996:5593).\n\n`card` (Default): a map card, 20 px radius, grey frame; the place is written on white under the map (the name, then\nthe address), with an optional dark time Badge. `section` («Место встречи», «Адрес»): a 48 px heading, 8 px, the map\ncard with the pin and a «Построить маршрут» pill in its corner, then the name, the address and, if given, the working\nhours.\n\nThe map is a slot: the component draws the pin, the halo and the frame, the map itself comes from outside.\n`ref`, `className`, `style` and the rest of the attributes go to the root (`<div>` for `card`, `<section>` for `section`).",methods:[],displayName:"LocationCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'card' | 'section'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'section'"}]},description:"Figma Property 1: `card` (Default) or `section` («Место встречи», «Адрес»: set `heading`).",defaultValue:{value:"'card'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"Name of the place: «Филармония им. Т. Сатылганова». IM-16 M."},address:{required:!1,tsType:{name:"string"},description:"Under the name: «Кыргызстан, Бишкек». IM-14 R, `control/text/tertiary`."},hours:{required:!1,tsType:{name:"string"},description:"`section`: working hours, the row «Часы работы ∙ 🕒 с 9:00 до 18:00» under the address (Figma «Часы работы» on,\ntext «Время работы»). Leave it out and the row is hidden."},hoursLabel:{required:!1,tsType:{name:"string"},description:"`section`: the label in front of the hours. Default «Часы работы».",defaultValue:{value:"'Часы работы'",computed:!1}},time:{required:!1,tsType:{name:"string"},description:"When. In `card` it is the dark badge over the address (Figma «Time badge»); in `section` it is the grey line under\nthe heading (Figma «Time»): «вс, 17 дек, 18:00»."},heading:{required:!1,tsType:{name:"string"},description:"Heading of `section`: «Место встречи» (default) or «Адрес».",defaultValue:{value:"'Место встречи'",computed:!1}},map:{required:!1,tsType:{name:"ReactNode"},description:"The map. A slot: put the real map or a static picture here. Default: the grey placeholder with the pin only."},plate:{required:!1,tsType:{name:"ReactNode"},description:"A fact plate on the map, top left (the DS FactPlate: month, day, time). Hidden in every Figma variant."},routeLabel:{required:!1,tsType:{name:"string"},description:"`section`: the label of the «route» pill. Default «Построить маршрут».",defaultValue:{value:"'Построить маршрут'",computed:!1}},onRouteClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"`section`: the route pill. Appears when there is an action. A link with `routeHref`, otherwise a button."},routeHref:{required:!1,tsType:{name:"string"},description:""},onMapClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"`section`: a tap on the map itself (the product also opens the route from the map)."},mapLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the map tap target. Default «Открыть карту».",defaultValue:{value:"'Открыть карту'",computed:!1}}}};const J4=""+new URL("map-bishkek-BBdnyBoE.png",import.meta.url).href;function s({className:a,style:t}){return u.jsx("img",{className:a,style:{display:"block",width:"100%",height:"100%",objectFit:"cover",...t},src:J4,alt:"",draggable:!1})}s.__docgenInfo={description:"Map placeholder for stories and docs: a still picture of central Bishkek, as in Figma «Карта-заглушка».\nNot a map: no gestures, no tiles. The product puts a real map in the `map` slot of LocationCard.",methods:[],displayName:"MapStub",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const{expect:X4,fn:r,userEvent:F,within:Y4}=__STORYBOOK_MODULE_TEST__,Q4={title:"Components/LocationCard",component:n,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=996-5593"}},args:{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",heading:"Место встречи",routeLabel:"Построить маршрут",map:u.jsx(s,{}),onRouteClick:r()},argTypes:{variant:{control:"inline-radio",options:["card","section"]},name:{control:"text"},address:{control:"text"},hours:{control:"text"},hoursLabel:{control:"text"},time:{control:"text"},heading:{control:"text"},routeLabel:{control:"text"},map:{control:!1},plate:{control:!1},onRouteClick:{control:!1},onMapClick:{control:!1}}},f=({children:a,pad:t=16})=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:t,background:"var(--color-bg-surface)"},children:a}),o=({children:a})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:a}),h={render:a=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:a.variant==="section"?0:16},children:u.jsx(n,{...a})})},i={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:12,width:393,maxWidth:"100%"},children:[u.jsx(o,{children:"card, с временем (Default)"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(n,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",time:"вс, 6 июл, 19:00",map:u.jsx(s,{})})}),u.jsx(o,{children:"card, без времени"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(n,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",map:u.jsx(s,{})})}),u.jsx(o,{children:"section «Место встречи»"}),u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:r()}),u.jsx(o,{children:"section «Адрес»: с часами работы"}),u.jsx(n,{variant:"section",heading:"Адрес",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",hours:"с 9:00 до 18:00",map:u.jsx(s,{}),onRouteClick:r()}),u.jsx(o,{children:"section, со временем"}),u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",time:"вс, 17 дек, 18:00",map:u.jsx(s,{}),onRouteClick:r()}),u.jsx(o,{children:"section, с плашкой-фактом на карте (слот plate)"}),u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),plate:u.jsx(_4,{variant:"glass",month:"дек",day:"19",time:"21:00"}),onRouteClick:r()})]})},c={name:"Действия",parameters:{controls:{disable:!0}},render:()=>{const a=r(),t=r();return u.jsx("div",{style:{width:393,maxWidth:"100%"},"data-testid":"loc",children:u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:a,onMapClick:t})})},play:async({canvasElement:a})=>{const t=Y4(a);await X4(t.getByRole("heading",{name:"Место встречи"})).toBeVisible(),await F.click(t.getByRole("button",{name:/Построить маршрут/})),await F.click(t.getByRole("button",{name:"Открыть карту"}))}},d={name:"Кейсы / Место встречи",parameters:{controls:{disable:!0}},render:()=>u.jsx(f,{pad:0,children:u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:r()})})},l={name:"Кейсы / Место встречи со временем",parameters:{controls:{disable:!0}},render:()=>u.jsx(f,{pad:0,children:u.jsx(n,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",time:"вс, 17 дек, 18:00",map:u.jsx(s,{}),onRouteClick:r(),onMapClick:r()})})},p={name:"Кейсы / Адрес с часами работы",parameters:{controls:{disable:!0}},render:()=>u.jsx(f,{pad:0,children:u.jsx(n,{variant:"section",heading:"Адрес",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",hours:"с 9:00 до 18:00",map:u.jsx(s,{}),onRouteClick:r()})})},m={name:"Кейсы / Площадка события",parameters:{controls:{disable:!0}},render:()=>u.jsx(f,{children:u.jsx(n,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",time:"вс, 6 июл, 19:00",map:u.jsx(s,{})})})},Z4=["Playground","Variants","Interactions","CaseMeetingPoint","CaseMeetingPointTime","CaseAddressHours","CaseVenue"];var M,T,N;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: args.variant === 'section' ? 0 : 16
  }}>
      <LocationCard {...args} />
    </div>
}`,...(N=(T=h.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var R,L,P,q,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    width: 393,
    maxWidth: '100%'
  }}>
      <Caption>card, с временем (Default)</Caption>
      <div style={{
      padding: "0 16px"
    }}>
        <LocationCard variant="card" name="Дворец спорта им.К.Кожомкула" address="Кыргызстан, Бишкек" time="вс, 6 июл, 19:00" map={<MapStub />} />
      </div>
      <Caption>card, без времени</Caption>
      <div style={{
      padding: "0 16px"
    }}>
        <LocationCard variant="card" name="Дворец спорта им.К.Кожомкула" address="Кыргызстан, Бишкек" map={<MapStub />} />
      </div>
      <Caption>section «Место встречи»</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} onRouteClick={fn()} />
      <Caption>section «Адрес»: с часами работы</Caption>
      <LocationCard variant="section" heading="Адрес" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" hours="с 9:00 до 18:00" map={<MapStub />} onRouteClick={fn()} />
      <Caption>section, со временем</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" time="вс, 17 дек, 18:00" map={<MapStub />} onRouteClick={fn()} />
      <Caption>section, с плашкой-фактом на карте (слот plate)</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} plate={<FactPlate variant="glass" month="дек" day="19" time="21:00" />} onRouteClick={fn()} />
    </div>
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source},description:{story:"The Figma set 996:5593: Property 1 Default → `card`, «Место встречи» and «Адрес» → `section` with that `heading`;\nthe booleans Time and Time badge → `time`, «Часы работы» + «Время работы» → `hours`.",...(I=(q=i.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var H,V,W,z,O;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Действия',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const onRouteClick = fn();
    const onMapClick = fn();
    return <div style={{
      width: 393,
      maxWidth: '100%'
    }} data-testid="loc">
        <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} onRouteClick={onRouteClick} onMapClick={onMapClick} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', {
      name: 'Место встречи'
    })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: /Построить маршрут/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Открыть карту'
    }));
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"Кнопка «Построить маршрут» и тап по самой карте — два разных действия, как на экране «Построить маршрут по клику на карту».",...(O=(z=c.parameters)==null?void 0:z.docs)==null?void 0:O.description}}};var U,K,G,J,X;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Кейсы / Место встречи',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen pad={0}>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} onRouteClick={fn()} />
    </Screen>
}`,...(G=(K=d.parameters)==null?void 0:K.docs)==null?void 0:G.source},description:{story:"«Детали заказа»: место встречи без времени (2671:118812).",...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Y,Q,Z,$,u4;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Кейсы / Место встречи со временем',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen pad={0}>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" time="вс, 17 дек, 18:00" map={<MapStub />} onRouteClick={fn()} onMapClick={fn()} />
    </Screen>
}`,...(Z=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Экскурсия с выбранным слотом: под заголовком дата и время (2671:118375).",...(u4=($=l.parameters)==null?void 0:$.docs)==null?void 0:u4.description}}};var e4,a4,n4,t4,s4;p.parameters={...p.parameters,docs:{...(e4=p.parameters)==null?void 0:e4.docs,source:{originalSource:`{
  name: 'Кейсы / Адрес с часами работы',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen pad={0}>
      <LocationCard variant="section" heading="Адрес" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" hours="с 9:00 до 18:00" map={<MapStub />} onRouteClick={fn()} />
    </Screen>
}`,...(n4=(a4=p.parameters)==null?void 0:a4.docs)==null?void 0:n4.source},description:{story:"«Детали заказа / фиксированный график»: адрес площадки и часы работы (5061:52221).",...(s4=(t4=p.parameters)==null?void 0:t4.docs)==null?void 0:s4.description}}};var r4,o4,i4,c4,d4;m.parameters={...m.parameters,docs:{...(r4=m.parameters)==null?void 0:r4.docs,source:{originalSource:`{
  name: 'Кейсы / Площадка события',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <LocationCard variant="card" name="Дворец спорта им.К.Кожомкула" address="Кыргызстан, Бишкек" time="вс, 6 июл, 19:00" map={<MapStub />} />
    </Screen>
}`,...(i4=(o4=m.parameters)==null?void 0:o4.docs)==null?void 0:i4.source},description:{story:"«Избранное»: событие с площадкой и временем (3115:174893).",...(d4=(c4=m.parameters)==null?void 0:c4.docs)==null?void 0:d4.description}}};const i0=Object.freeze(Object.defineProperty({__proto__:null,CaseAddressHours:p,CaseMeetingPoint:d,CaseMeetingPointTime:l,CaseVenue:m,Interactions:c,Playground:h,Variants:i,__namedExportsOrder:Z4,default:Q4},Symbol.toStringTag,{value:"Module"}));export{d as C,c as I,i0 as L,h as P,i as V,l as a,p as b,m as c};
