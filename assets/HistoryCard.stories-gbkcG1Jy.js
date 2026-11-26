import{r as Y,j as e}from"./iframe-DyD5Yel4.js";import{F as G}from"./figma-BZstJmpc.js";import{F as K}from"./FullWidthFrame-BO26oEhV.js";import{S as U}from"./Screen-D3FX-wep.js";import{H as J}from"./home-CSe8AaHy.js";import{c as Q}from"./cx-2dOUpm6k.js";import{P as V}from"./Pressable-CAjp7WdB.js";import{b as X}from"./time-lpmEQjgl.js";import{S as Z}from"./SectionTitle-CwRady4O.js";const $="_root_1iupd_6",ee="_icon_1iupd_59",te="_info_1iupd_64",ne="_title_1iupd_69",se="_subtitle_1iupd_70",l={root:$,icon:ee,info:te,title:ne,subtitle:se},r=Y.forwardRef(function({title:i,subtitle:o,icon:O,href:p,target:I,rel:N,download:P,hrefLang:L,onClick:m,className:W,...z},q){const M=!!p||!!m;return e.jsxs(V,{ref:q,...z,href:p,target:I,rel:N,download:P,hrefLang:L,onClick:m,className:Q(l.root,W),"data-interactive":M||void 0,children:[e.jsx("span",{className:l.icon,"aria-hidden":"true",children:O??e.jsx(X,{size:20})}),e.jsxs("span",{className:l.info,children:[e.jsx("span",{className:l.title,children:i}),o&&e.jsx("span",{className:l.subtitle,children:o})]})]})});r.__docgenInfo={description:"HistoryCard (Figma History_card 1208:5450): a recent search, an icon and two lines. Tap repeats the search.\nThe card is the link (`href`) or the button (`onClick`, it gets the native event).\nPress: the fill goes darker and the card sinks a little. `ref`, `className`, `style` and the rest props go to the root.",methods:[],displayName:"HistoryCard",props:{title:{required:!0,tsType:{name:"string"},description:"Figma «title»: what was searched, «Казахстан». One line."},subtitle:{required:!1,tsType:{name:"string"},description:"Figma «description»: «29 мая, 1 участник». One line."},icon:{required:!1,tsType:{name:"ReactNode"},description:"A 20 px Solid icon. Default is a clock."}}};const{expect:c,fn:ae,userEvent:y,within:ue}=__STORYBOOK_MODULE_TEST__,re={title:"Components/HistoryCard",component:r,parameters:{layout:"fullscreen",design:{type:"figma",url:G("1208-5450")}},args:{title:"Казахстан",subtitle:"29 мая, 1 участник",onClick:ae()},argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:!1},onClick:{control:!1},href:{control:!1}}},d=[t=>e.jsx(K,{children:e.jsx(t,{})})],n={decorators:d},s={decorators:d,name:"Длинные тексты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsx(r,{title:"Бишкек",subtitle:"3 июн, 2 участника",onClick:()=>{}}),e.jsx(r,{title:"Каракол, Иссык-Куль и окрестности",subtitle:"29 мая – 2 июн, 4 участника",onClick:()=>{},style:{width:162}}),e.jsx(r,{title:"Казахстан",onClick:()=>{}})]})},a={name:"Кейсы · Продолжить поиск",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(U,{style:{gap:0,paddingTop:16},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{padding:"0 16px"},children:e.jsx(Z,{size:16,children:"Продолжить поиск"})}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"162px 162px",justifyContent:"start",gap:8,padding:"0 16px"},children:J.map(t=>e.jsx(r,{title:t.title,subtitle:t.subtitle,onClick:()=>{}},t.title))})]})})},u={decorators:d,name:"Тест: тап и Enter",parameters:{controls:{disable:!0}},play:async({canvasElement:t,args:i})=>{const o=ue(t);await y.click(o.getByRole("button",{name:/Казахстан/})),await c(i.onClick).toHaveBeenCalledTimes(1),await c(i.onClick).toHaveBeenLastCalledWith(c.objectContaining({type:"click"})),o.getByRole("button",{name:/Казахстан/}).focus(),await y.keyboard("{Enter}"),await c(i.onClick).toHaveBeenCalledTimes(2)}},ie=["Playground","Lengths","CaseRecent","Interaction"];var g,x,f,h,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: framed
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:"Тапни по карточке: фон темнеет, она слегка уходит вглубь.",...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.description}}};var b,E,v,_,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Длинные тексты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <HistoryCard title="Бишкек" subtitle="3 июн, 2 участника" onClick={() => {}} />
      <HistoryCard title="Каракол, Иссык-Куль и окрестности" subtitle="29 мая – 2 июн, 4 участника" onClick={() => {}} style={{
      width: 162
    }} />
      <HistoryCard title="Казахстан" onClick={() => {}} />
    </div>
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source},description:{story:"One line each: a long title is cut with an ellipsis.",...(k=(_=s.parameters)==null?void 0:_.docs)==null?void 0:k.description}}};var B,j,w,T,A;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Кейсы · Продолжить поиск',
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
    gap: 0,
    paddingTop: 16
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <div style={{
        padding: '0 16px'
      }}>
          <SectionTitle size={16}>Продолжить поиск</SectionTitle>
        </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '162px 162px',
        justifyContent: 'start',
        gap: 8,
        padding: '0 16px'
      }}>
          {HISTORY.map(h => <HistoryCard key={h.title} title={h.title} subtitle={h.subtitle} onClick={() => {}} />)}
        </div>
      </div>
    </Screen>
}`,...(w=(j=a.parameters)==null?void 0:j.docs)==null?void 0:w.source},description:{story:`«Продолжить поиск» on the home (Figma 4687:46123): a 16 px title, then the two last searches, 162 wide, 8 apart, 16 px in
 (Figma History_card 162 × 60). The same two searches as the screen.`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var S,F,H,D,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Тест: тап и Enter',
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: /Казахстан/
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(args.onClick).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'click'
    }));
    c.getByRole('button', {
      name: /Казахстан/
    }).focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  }
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Interaction test: a tap and Enter repeat the search.",...(R=(D=u.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};const fe=Object.freeze(Object.defineProperty({__proto__:null,CaseRecent:a,Interaction:u,Lengths:s,Playground:n,__namedExportsOrder:ie,default:re},Symbol.toStringTag,{value:"Module"}));export{a as C,s as L,n as P,fe as S};
