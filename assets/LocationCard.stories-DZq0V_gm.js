import{r as i4,j as u}from"./iframe-DuqTOznb.js";import{c as o4}from"./cx-2dOUpm6k.js";import{P as c4}from"./Pressable-D45JnRku.js";import{B as d4}from"./Badge-Dbn3uc4E.js";import{S as l4}from"./SectionTitle-DUrzhWiT.js";import{c as m4,a as p4}from"./places-z-kxph-t.js";import{P as h4}from"./PillButton-BwV4GISW.js";import{F as C4}from"./FactPlate-BUAmB4hm.js";const x4="_root_1hm4a_8",f4="_map_1hm4a_18",g4="_empty_1hm4a_24",v4="_halo_1hm4a_30",B4="_pin_1hm4a_41",E4="_plate_1hm4a_53",_4="_content_1hm4a_89",A4="_fade_1hm4a_94",y4="_cell_1hm4a_98",j4="_timeRow_1hm4a_104",b4="_address_1hm4a_108",D4="_name_1hm4a_113",k4="_heading_1hm4a_128",S4="_mapWrap_1hm4a_137",w4="_mapCard_1hm4a_141",F4="_mapTap_1hm4a_148",T4="_route_1hm4a_182",M4="_place_1hm4a_188",N4="_placeName_1hm4a_196",R4="_placeAddress_1hm4a_206",e={root:x4,map:f4,empty:g4,halo:v4,pin:B4,plate:E4,content:_4,fade:A4,cell:y4,timeRow:j4,address:b4,name:D4,heading:k4,mapWrap:S4,mapCard:w4,mapTap:F4,route:T4,place:M4,placeName:N4,placeAddress:R4},t=i4.forwardRef(function({variant:n="card",name:h,address:C,time:x,heading:v="Место встречи",map:B,plate:f,routeLabel:t4="Построить маршрут",onRouteClick:E,routeHref:_,onMapClick:A,mapLabel:s4="Открыть карту",className:r4,style:y,...j},b){const D=o4(e.root,r4);return n==="card"?u.jsxs("div",{ref:b,className:D,style:y,"data-variant":"card",...j,children:[u.jsx("div",{className:e.map,children:B??u.jsx("span",{className:e.empty})}),u.jsx(k,{}),f&&u.jsx("div",{className:e.plate,children:f}),u.jsxs("div",{className:e.content,children:[u.jsx("div",{className:e.fade,"aria-hidden":"true"}),u.jsxs("div",{className:e.cell,children:[x&&u.jsx("div",{className:e.timeRow,children:u.jsx(d4,{size:24,variant:"dark",children:x})}),C&&u.jsx("span",{className:e.address,children:C}),u.jsx("span",{className:e.name,children:h})]})]})]}):u.jsxs("section",{ref:b,className:D,style:y,"data-variant":"section","aria-label":v,...j,children:[u.jsx("header",{className:e.heading,"data-time":x?"":void 0,children:u.jsx(l4,{as:"h3",size:20,subtitle:x,children:v})}),u.jsx("div",{className:e.mapWrap,children:u.jsxs("div",{className:e.mapCard,children:[u.jsx("div",{className:e.map,children:B??u.jsx("span",{className:e.empty})}),u.jsx(k,{}),A&&u.jsx(c4,{as:"button",className:e.mapTap,"aria-label":s4,onClick:A}),f&&u.jsx("div",{className:e.plate,children:f}),(E||_)&&u.jsx(L4,{label:t4,onClick:E,href:_})]})}),u.jsxs("div",{className:e.place,children:[u.jsx("span",{className:e.placeName,children:h}),C&&u.jsx("span",{className:e.placeAddress,children:C})]})]})});function k(){return u.jsxs(u.Fragment,{children:[u.jsx("span",{className:e.halo,"aria-hidden":"true"}),u.jsx(m4,{className:e.pin})]})}function L4({label:a,onClick:n,href:h}){return u.jsx(h4,{variant:"overlay",className:e.route,href:h,onClick:n,iconRight:u.jsx(p4,{}),children:a})}t.__docgenInfo={description:"Meeting point / venue card (Figma card_location 996:5593).\n\n`card` (Default): a map card, 20 px radius, grey frame; the place is written on white under the map, with an optional\ndark time Badge. `section` (2): a 48 px heading «Место встречи», the map card with the pin and a «Построить маршрут»\npill in its corner, and the name of the place under it.\n\nThe map is a slot: the component draws the pin, the halo and the frame, the map itself comes from outside.\n`ref`, `className`, `style` and the rest of the attributes go to the root (`<div>` for `card`, `<section>` for `section`).",methods:[],displayName:"LocationCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'card' | 'section'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'section'"}]},description:"Figma Property 1: `card` (Default) or `section` (2).",defaultValue:{value:"'card'",computed:!1}},name:{required:!0,tsType:{name:"string"},description:"Name of the place: «Филармония им. Т. Сатылганова»."},address:{required:!1,tsType:{name:"string"},description:"Under or over the name: «Кыргызстан, Бишкек»."},time:{required:!1,tsType:{name:"string"},description:"When. In `card` it is the dark badge over the address (Figma «Time badge»); in `section` it is the grey line under\nthe heading (Figma «Time»): «вс, 17 дек, 18:00»."},heading:{required:!1,tsType:{name:"string"},description:"Heading of `section`. Default «Место встречи».",defaultValue:{value:"'Место встречи'",computed:!1}},map:{required:!1,tsType:{name:"ReactNode"},description:"The map. A slot: put the real map or a static picture here. Default: the grey placeholder with the pin only."},plate:{required:!1,tsType:{name:"ReactNode"},description:"A fact plate on the map, top left (the DS FactPlate: month, day, time). Hidden in every Figma variant."},routeLabel:{required:!1,tsType:{name:"string"},description:"`section`: the label of the «route» pill. Default «Построить маршрут».",defaultValue:{value:"'Построить маршрут'",computed:!1}},onRouteClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"`section`: the route pill. Appears when there is an action. A link with `routeHref`, otherwise a button."},routeHref:{required:!1,tsType:{name:"string"},description:""},onMapClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"`section`: a tap on the map itself (the product also opens the route from the map)."},mapLabel:{required:!1,tsType:{name:"string"},description:"Accessible name of the map tap target. Default «Открыть карту».",defaultValue:{value:"'Открыть карту'",computed:!1}}}};const P4=""+new URL("map-bishkek-BBdnyBoE.png",import.meta.url).href;function s({className:a,style:n}){return u.jsx("img",{className:a,style:{display:"block",width:"100%",height:"100%",objectFit:"cover",...n},src:P4,alt:"",draggable:!1})}s.__docgenInfo={description:"Map placeholder for stories and docs: a still picture of central Bishkek, as in Figma «Карта-заглушка».\nNot a map: no gestures, no tiles. The product puts a real map in the `map` slot of LocationCard.",methods:[],displayName:"MapStub",props:{className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const{expect:q4,fn:r,userEvent:S,within:W4}=__STORYBOOK_MODULE_TEST__,V4={title:"Components/LocationCard",component:t,parameters:{layout:"fullscreen",design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=996-5593"}},args:{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",heading:"Место встречи",routeLabel:"Построить маршрут",map:u.jsx(s,{}),onRouteClick:r()},argTypes:{variant:{control:"inline-radio",options:["card","section"]},name:{control:"text"},address:{control:"text"},time:{control:"text"},heading:{control:"text"},routeLabel:{control:"text"},map:{control:!1},plate:{control:!1},onRouteClick:{control:!1},onMapClick:{control:!1}}},g=({children:a,pad:n=16})=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:n,background:"var(--color-bg-surface)"},children:a}),m=({children:a})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:a}),p={render:a=>u.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:a.variant==="section"?0:16},children:u.jsx(t,{...a})})},i={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:12,width:393,maxWidth:"100%"},children:[u.jsx(m,{children:"card, с временем (Default)"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(t,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",time:"вс, 6 июл, 19:00",map:u.jsx(s,{})})}),u.jsx(m,{children:"card, без времени"}),u.jsx("div",{style:{padding:"0 16px"},children:u.jsx(t,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",map:u.jsx(s,{})})}),u.jsx(m,{children:"section (2)"}),u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:r()}),u.jsx(m,{children:"section, со временем"}),u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",time:"вс, 17 дек, 18:00",map:u.jsx(s,{}),onRouteClick:r()}),u.jsx(m,{children:"section, с плашкой-фактом на карте (слот plate)"}),u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),plate:u.jsx(C4,{variant:"glass",month:"дек",day:"19",time:"21:00"}),onRouteClick:r()})]})},o={name:"Действия",parameters:{controls:{disable:!0}},render:()=>{const a=r(),n=r();return u.jsx("div",{style:{width:393,maxWidth:"100%"},"data-testid":"loc",children:u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:a,onMapClick:n})})},play:async({canvasElement:a})=>{const n=W4(a);await q4(n.getByRole("heading",{name:"Место встречи"})).toBeVisible(),await S.click(n.getByRole("button",{name:/Построить маршрут/})),await S.click(n.getByRole("button",{name:"Открыть карту"}))}},c={name:"Кейсы / Место встречи",parameters:{controls:{disable:!0}},render:()=>u.jsx(g,{pad:0,children:u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",map:u.jsx(s,{}),onRouteClick:r()})})},d={name:"Кейсы / Место встречи со временем",parameters:{controls:{disable:!0}},render:()=>u.jsx(g,{pad:0,children:u.jsx(t,{variant:"section",name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек",time:"вс, 17 дек, 18:00",map:u.jsx(s,{}),onRouteClick:r(),onMapClick:r()})})},l={name:"Кейсы / Площадка события",parameters:{controls:{disable:!0}},render:()=>u.jsx(g,{children:u.jsx(t,{variant:"card",name:"Дворец спорта им.К.Кожомкула",address:"Кыргызстан, Бишкек",time:"вс, 6 июл, 19:00",map:u.jsx(s,{})})})},H4=["Playground","Variants","Interactions","CaseMeetingPoint","CaseMeetingPointTime","CaseVenue"];var w,F,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: args.variant === 'section' ? 0 : 16
  }}>
      <LocationCard {...args} />
    </div>
}`,...(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var M,N,R,L,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      <Caption>section (2)</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} onRouteClick={fn()} />
      <Caption>section, со временем</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" time="вс, 17 дек, 18:00" map={<MapStub />} onRouteClick={fn()} />
      <Caption>section, с плашкой-фактом на карте (слот plate)</Caption>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} plate={<FactPlate variant="glass" month="дек" day="19" time="21:00" />} onRouteClick={fn()} />
    </div>
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:"The Figma set 996:5593: Property 1 Default → `card`, 2 → `section`; the booleans Time and Time badge → `time`.",...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.description}}};var q,W,V,H,I;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(W=o.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:"Кнопка «Построить маршрут» и тап по самой карте — два разных действия, как на экране «Построить маршрут по клику на карту».",...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var O,z,U,K,G;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Кейсы / Место встречи',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen pad={0}>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" map={<MapStub />} onRouteClick={fn()} />
    </Screen>
}`,...(U=(z=c.parameters)==null?void 0:z.docs)==null?void 0:U.source},description:{story:"«Детали заказа»: место встречи без времени (2671:118812).",...(G=(K=c.parameters)==null?void 0:K.docs)==null?void 0:G.description}}};var J,X,Y,Q,Z;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Кейсы / Место встречи со временем',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen pad={0}>
      <LocationCard variant="section" name="Филармония им. Т. Сатылганова" address="Кыргызстан, Бишкек" time="вс, 17 дек, 18:00" map={<MapStub />} onRouteClick={fn()} onMapClick={fn()} />
    </Screen>
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Экскурсия с выбранным слотом: под заголовком дата и время (2671:118375).",...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var $,u4,e4,a4,n4;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Кейсы / Площадка события',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Screen>
      <LocationCard variant="card" name="Дворец спорта им.К.Кожомкула" address="Кыргызстан, Бишкек" time="вс, 6 июл, 19:00" map={<MapStub />} />
    </Screen>
}`,...(e4=(u4=l.parameters)==null?void 0:u4.docs)==null?void 0:e4.source},description:{story:"«Избранное»: событие с площадкой и временем (3115:174893).",...(n4=(a4=l.parameters)==null?void 0:a4.docs)==null?void 0:n4.description}}};const Y4=Object.freeze(Object.defineProperty({__proto__:null,CaseMeetingPoint:c,CaseMeetingPointTime:d,CaseVenue:l,Interactions:o,Playground:p,Variants:i,__namedExportsOrder:H4,default:V4},Symbol.toStringTag,{value:"Module"}));export{c as C,o as I,Y4 as L,p as P,i as V,d as a,l as b};
