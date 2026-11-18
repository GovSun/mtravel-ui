import{r as G,j as e}from"./iframe-DuqTOznb.js";import{F as K}from"./figma-BZstJmpc.js";import{F as U}from"./FullWidthFrame-C5uG5fym.js";import{S as Y,a as J,R as Q}from"./SectionHeading-C6jU3Co2.js";import{c as V}from"./cx-2dOUpm6k.js";import{P as X}from"./Pressable-D45JnRku.js";import{b as Z}from"./time-CsMT4GVj.js";const $="_root_1iupd_6",ee="_icon_1iupd_59",te="_info_1iupd_64",ue="_title_1iupd_69",ne="_subtitle_1iupd_70",c={root:$,icon:ee,info:te,title:ue,subtitle:ne},o=G.forwardRef(function({title:u,subtitle:i,icon:O,href:p,target:N,rel:I,download:P,hrefLang:L,onClick:m,className:W,...q},M){const z=!!p||!!m;return e.jsxs(X,{ref:M,...q,href:p,target:N,rel:I,download:P,hrefLang:L,onClick:m,className:V(c.root,W),"data-interactive":z||void 0,children:[e.jsx("span",{className:c.icon,"aria-hidden":"true",children:O??e.jsx(Z,{size:20})}),e.jsxs("span",{className:c.info,children:[e.jsx("span",{className:c.title,children:u}),i&&e.jsx("span",{className:c.subtitle,children:i})]})]})});o.__docgenInfo={description:"HistoryCard (Figma History_card 1208:5450): a recent search, an icon and two lines. Tap repeats the search.\nThe card is the link (`href`) or the button (`onClick`, it gets the native event).\nPress: the fill goes darker and the card sinks a little. `ref`, `className`, `style` and the rest props go to the root.",methods:[],displayName:"HistoryCard",props:{title:{required:!0,tsType:{name:"string"},description:"Figma «title»: what was searched, «Казахстан». One line."},subtitle:{required:!1,tsType:{name:"string"},description:"Figma «description»: «29 мая, 1 участник». One line."},icon:{required:!1,tsType:{name:"ReactNode"},description:"A 20 px Solid icon. Default is a clock."}}};const{expect:l,fn:ae,userEvent:y,within:se}=__STORYBOOK_MODULE_TEST__,re={title:"Components/HistoryCard",component:o,parameters:{layout:"fullscreen",design:{type:"figma",url:K("1208-5450")}},args:{title:"Казахстан",subtitle:"29 мая, 1 участник",onClick:ae()},argTypes:{title:{control:"text"},subtitle:{control:"text"},icon:{control:!1},onClick:{control:!1},href:{control:!1}}},d=[t=>e.jsx(U,{children:e.jsx(t,{})})],n={decorators:d},a={decorators:d,name:"Длинные тексты",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsx(o,{title:"Бишкек",subtitle:"3 июн, 2 участника",onClick:()=>{}}),e.jsx(o,{title:"Каракол, Иссык-Куль и окрестности",subtitle:"29 мая – 2 июн, 4 участника",onClick:()=>{},style:{width:162}}),e.jsx(o,{title:"Казахстан",onClick:()=>{}})]})},s={name:"Кейсы · Недавние поиски",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(Y,{children:[e.jsx(J,{children:"Недавние поиски"}),e.jsx(Q,{children:[["Кыргызстан","29 мая, 1 участник"],["Казахстан","29 мая, 1 участник"],["Бишкек","29 мая, 1 участник"]].map(([t,u])=>e.jsx(o,{title:t,subtitle:u,style:{width:162},onClick:()=>{}},t))})]})},r={decorators:d,name:"Тест: тап и Enter",parameters:{controls:{disable:!0}},play:async({canvasElement:t,args:u})=>{const i=se(t);await y.click(i.getByRole("button",{name:/Казахстан/})),await l(u.onClick).toHaveBeenCalledTimes(1),await l(u.onClick).toHaveBeenLastCalledWith(l.objectContaining({type:"click"})),i.getByRole("button",{name:/Казахстан/}).focus(),await y.keyboard("{Enter}"),await l(u.onClick).toHaveBeenCalledTimes(2)}},oe=["Playground","Lengths","CaseRecent","Interaction"];var f,h,C,g,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: framed
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source},description:{story:"Тапни по карточке: фон темнеет, она слегка уходит вглубь.",...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var b,k,A,_,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:"One line each: a long title is cut with an ellipsis.",...(w=(_=a.parameters)==null?void 0:_.docs)==null?void 0:w.description}}};var E,D,B,v,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Кейсы · Недавние поиски',
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
      <SectionHeading>Недавние поиски</SectionHeading>
      <Row>
        {[['Кыргызстан', '29 мая, 1 участник'], ['Казахстан', '29 мая, 1 участник'], ['Бишкек', '29 мая, 1 участник']].map(([t, d]) => <HistoryCard key={t} title={t} subtitle={d} style={{
        width: 162
      }} onClick={() => {}} />)}
      </Row>
    </Screen>
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"«Недавние поиски» of the empty search: a scroll row of the last searches.",...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.description}}};var H,F,S,R,T;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source},description:{story:"Interaction test: a tap and Enter repeat the search.",...(T=(R=r.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};const fe=Object.freeze(Object.defineProperty({__proto__:null,CaseRecent:s,Interaction:r,Lengths:a,Playground:n,__namedExportsOrder:oe,default:re},Symbol.toStringTag,{value:"Module"}));export{s as C,a as L,n as P,fe as S};
