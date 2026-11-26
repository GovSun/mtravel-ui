import{r as D,j as u}from"./iframe-DyD5Yel4.js";import{C as S}from"./Caption-D_clnAXK.js";import{c as I}from"./cx-2dOUpm6k.js";import{P as V4}from"./Pressable-CAjp7WdB.js";import{u as W4}from"./useControllableState-D9cJCl43.js";import{C as P4}from"./CellCenter-DamPGtPP.js";import{S as $4}from"./SectionTitle-CwRady4O.js";import{D as L4}from"./Divider-CIZGT-_8.js";import{C as U4}from"./arrows-0JYTYJZi.js";import{C as d,a as j}from"./Cell-BMryoHV2.js";import{F as Q4,M as G4,H as K4,c as J4}from"./places-CYDz-5dl.js";import{a as X4,c as k}from"./general-CSE0kF9v.js";import{a as Y4}from"./people-tOiSq3ZR.js";const Z4="_root_2z5fr_8",u0="_heading_2z5fr_20",e0="_header_2z5fr_26",n0="_headerContent_2z5fr_53",t0="_cellHeader_2z5fr_62",a0="_title_2z5fr_69",s0="_chevronSlot_2z5fr_81",r0="_chevron_2z5fr_81",i0="_panel_2z5fr_106",o0="_clip_2z5fr_115",l0="_content_2z5fr_126",d0="_paragraph_2z5fr_148",c0="_divider_2z5fr_156",n={root:Z4,heading:u0,header:e0,headerContent:n0,cellHeader:t0,title:a0,chevronSlot:s0,chevron:r0,panel:i0,clip:o0,content:l0,paragraph:d0,divider:c0},t=D.forwardRef(function({title:a,subtitle:r,size:s=20,iconLeft:i,chevron:o="end",type:c="text",open:F,defaultOpen:T4=!1,onOpenChange:O4,divider:S4=!1,disabled:w=!1,headingAs:I4="h3",forcePressed:k4=!1,children:y,className:z4,...R4},q4){const[B,N4]=W4(F,T4,O4),_=D.useId(),T=`${_}-header`,O=`${_}-panel`,b=u.jsx(U4,{size:16,strokeWidth:32/24,direction:"down",className:n.chevron,"aria-hidden":"true"}),H4=c==="cells",M4=typeof y=="string"||typeof y=="number"?u.jsx("p",{className:n.paragraph,children:y}):y;return u.jsxs("div",{ref:q4,...R4,className:I(n.root,z4),"data-open":B||void 0,"data-chevron":o,"data-type":c,"data-disabled":w||void 0,children:[u.jsx(I4,{className:n.heading,children:u.jsx(V4,{as:"button",id:T,className:n.header,"aria-expanded":B,"aria-controls":O,disabled:w,forcePressed:k4,onClick:()=>N4(!B),children:H4?u.jsxs("span",{className:I(n.headerContent,n.cellHeader),children:[u.jsx(P4,{as:"span",title:a,subtitle:r,className:n.title}),u.jsx("span",{className:n.chevronSlot,children:b})]}):u.jsxs("span",{className:n.headerContent,children:[u.jsx($4,{as:"span",wrapperAs:"span",size:s,subtitle:r,iconLeft:i,iconRight:o==="inline"?b:void 0,className:n.title,children:a}),o==="end"&&u.jsx("span",{className:n.chevronSlot,children:b})]})})}),u.jsx("div",{id:O,role:"region","aria-labelledby":T,className:n.panel,"data-open":B||void 0,children:u.jsx("div",{className:n.clip,children:u.jsx("div",{className:n.content,children:M4})})}),S4&&u.jsx(L4,{as:"span",variant:"full",inset:16,insetEnd:16,className:n.divider})]})});t.__docgenInfo={description:'Accordion (Figma «Accordion», page Accordion): a header that opens and closes its content. The header is SectionTitle\n(Figma Title 8:645) with a chevron, 48 px minimum, and the whole of it is the button. Content is a slot: a paragraph\n(`type="text"`) or Cell rows (`type="cells"`), or anything else.\n\n- WAI-ARIA accordion: a heading (`headingAs`) holds a `<button aria-expanded aria-controls>`; the panel is a region\n  labelled by the button. Closed content is out of the tab order and the accessibility tree (visibility hidden after\n  the collapse), so nothing hidden can be focused.\n- Motion: the header shrinks on the Cell spring from pointer-down (a row with a chevron is one big button); the chevron\n  turns 180°; the content height opens with `grid-template-rows` (the documented Field-hint exception) while the content\n  fades and settles 4 px. Closing is faster than opening. Reduced motion: no turn, no height animation, only the fade.\n- Controlled (`open` + `onOpenChange`) or uncontrolled (`defaultOpen`). Several accordions can be open at once; for\n  «one at a time» keep the open id in the page state.\n\n`ref`, `className`, `style` and the rest of the attributes go to the root.',methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The header text (Title inside). Up to two lines, then an ellipsis."},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"A line under the title: a count, a short hint («3 пункта»). Stays visible when the accordion is closed."},size:{required:!1,tsType:{name:"union",raw:"24 | 20 | 18 | 16",elements:[{name:"literal",value:"24"},{name:"literal",value:"20"},{name:"literal",value:"18"},{name:"literal",value:"16"}]},description:"Figma «Size» 24px | 20px | 18px | 16px: the header text, IM-24 B / IM-20 B (default) / IM-18 B / IM-16 B. The header stays at least 48 px at every size.",defaultValue:{value:"20",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:"A 16 px icon before the title."},chevron:{required:!1,tsType:{name:"union",raw:'"end" | "inline"',elements:[{name:"literal",value:'"end"'},{name:"literal",value:'"inline"'}]},description:"Where the chevron sits. Default `end`.",defaultValue:{value:'"end"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "cells"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"cells"'}]},description:"What the content is. `text` pads it 0 / 16 / 16 and sets IM-16 R; `cells` puts Cell rows edge to edge with 8 below. Default `text`.",defaultValue:{value:'"text"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Uncontrolled start state. Default closed.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called with the new state when the header is tapped or pressed with Enter / Space."},divider:{required:!1,tsType:{name:"boolean"},description:"A 1 px line along the bottom edge, 16 px from both sides: for a list of accordions.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"The header does not react and the chevron greys out. The content keeps its state.",defaultValue:{value:"false",computed:!1}},headingAs:{required:!1,tsType:{name:"union",raw:'"h2" | "h3" | "h4" | "h5" | "h6" | "div"',elements:[{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'}]},description:"Element around the header button. The page picks the level; default `h3`.",defaultValue:{value:'"h3"',computed:!1}},forcePressed:{required:!1,tsType:{name:"boolean"},description:"Shows the pressed header without a finger. For docs and visual tests only. @internal",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:'The content: a string (becomes a paragraph), any nodes, or Cell rows with `type="cells"`.'},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const{expect:l,fn:w4,userEvent:z,waitFor:p0,within:h0}=__STORYBOOK_MODULE_TEST__,m0="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1516-273",C="Полный возврат, если отменить за 24 часа до начала. Позже вернём 50 % стоимости.",E0={title:"Components/Accordion",component:t,parameters:{design:{type:"figma",url:m0},layout:"fullscreen"},args:{title:"Правила возврата",subtitle:void 0,size:20,chevron:"end",type:"text",defaultOpen:!0,divider:!1,disabled:!1,children:C,onOpenChange:w4()},argTypes:{size:{control:"inline-radio",options:[24,20,18,16]},chevron:{control:"inline-radio",options:["end","inline"]},type:{control:"inline-radio",options:["text","cells"]},children:{control:"text"},open:{control:!1},iconLeft:{control:!1},forcePressed:{control:!1}},decorators:[e=>u.jsx("div",{style:{maxWidth:393,background:"var(--color-bg-page)"},children:u.jsx(e,{})})]},p={},_4=[{icon:u.jsx(K4,{}),title:"Трансфер от отеля"},{icon:u.jsx(J4,{}),title:"Фотосъёмка на маршруте"},{icon:u.jsx(Y4,{}),title:"Гид на русском"}],v0=()=>u.jsx(u.Fragment,{children:_4.map(e=>u.jsx(d,{title:e.title,icon:e.icon},e.title))}),h={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:24,padding:"16px 0"},children:["end","inline"].map(e=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx("div",{style:{paddingInline:16},children:u.jsx(S,{children:`Chevron=${e} · Type=text, закрыт и открыт`})}),u.jsx(t,{title:"Правила возврата",chevron:e,children:C}),u.jsx(t,{title:"Правила возврата",chevron:e,defaultOpen:!0,children:C}),u.jsx("div",{style:{paddingInline:16,marginTop:8},children:u.jsx(S,{children:"Type=cells, открыт: шапка — строка Cell, шеврон всегда у края"})}),u.jsx(t,{title:"Что включено",chevron:e,type:"cells",defaultOpen:!0,children:u.jsx(v0,{})})]},e))})},R=[{q:"Можно ли вернуть билет?",a:C},{q:"Что взять с собой?",a:"Удобную обувь, воду и ветровку: в горах прохладно даже летом."},{q:"Можно ли с детьми и с собакой на экскурсию в горы на целый день?",a:"С детьми от 6 лет — да. С собакой — по договорённости с гидом, напишите ему после оплаты."},{q:"Как найти гида на месте?",a:"Гид встретит у входа в Филармонию за 10 минут до начала, у него будет табличка MTravel."}],m={name:"Кейсы / Частые вопросы",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{padding:"8px 0"},children:R.map((e,a)=>u.jsx(t,{title:e.q,size:18,divider:a<R.length-1,defaultOpen:a===0,children:e.a},e.q))})},E={name:"Кейсы / Открыт только один",parameters:{controls:{disable:!0}},render:function(){const[a,r]=D.useState("Программа"),s=[{id:"Программа",text:"Сбор в 8:00, дорога 2 часа, подъём к озеру, обед и обратная дорога к 19:00."},{id:"Место встречи",text:"Площадь Ала-Тоо, у памятника Манасу. Автобус белый, на стекле табличка MTravel."},{id:"Что взять с собой",text:"Удобную обувь, воду и ветровку."}];return u.jsx("div",{style:{padding:"8px 0"},children:s.map((i,o)=>u.jsx(t,{title:i.id,divider:o<s.length-1,open:a===i.id,onOpenChange:c=>r(c?i.id:null),children:i.text},i.id))})}},v={name:"Кейсы / Что включено",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsx(t,{title:"Что включено",subtitle:"3 пункта",chevron:"inline",type:"cells",defaultOpen:!0,children:_4.map(e=>u.jsx(d,{title:e.title,icon:u.jsx(X4,{})},e.title))}),u.jsxs(t,{title:"Что не включено",subtitle:"2 пункта",chevron:"inline",type:"cells",children:[u.jsx(d,{title:"Обед",icon:u.jsx(k,{})}),u.jsx(d,{title:"Входные билеты в парк",icon:u.jsx(k,{})})]})]})},x={name:"Кейсы / Фильтры",parameters:{controls:{disable:!0}},render:function(){const[a,r]=D.useState({"2–4 часа":!0}),s=["До 2 часов","2–4 часа","4–6 часов","Больше 6 часов"],i=Object.values(a).filter(Boolean).length;return u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsx(t,{title:"Длительность",size:18,subtitle:i?`Выбрано: ${i}`:"Любая",type:"cells",defaultOpen:!0,divider:!0,children:s.map(o=>u.jsx(d,{title:o,disclosure:u.jsx(j,{variant:"checkbox",checked:!!a[o],onCheckedChange:c=>r(F=>({...F,[o]:c}))})},o))}),u.jsxs(t,{title:"Формат",size:18,subtitle:"Любой",type:"cells",children:[u.jsx(d,{title:"Пешком",icon:u.jsx(Q4,{}),disclosure:u.jsx(j,{variant:"checkbox"})}),u.jsx(d,{title:"В горы",icon:u.jsx(G4,{}),disclosure:u.jsx(j,{variant:"checkbox"})})]})]})}},g={name:"Размеры",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:4,padding:"8px 0"},children:[24,20,18,16].map(e=>u.jsx(t,{title:`Заголовок ${e}`,size:e,divider:!0,defaultOpen:e===24,children:C},e))})},A={name:"Крайние случаи",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsxs(t,{title:"Можно ли отменить бронь, если поездку перенесли из-за погоды, и что будет с предоплатой за трансфер из аэропорта",divider:!0,defaultOpen:!0,children:[u.jsx("p",{style:{margin:0},children:"Если гид переносит поездку из-за погоды, бронь переносится бесплатно на ближайшую дату."}),u.jsx("p",{style:{margin:"8px 0 0"},children:"Если новая дата не подходит, вернём полную стоимость, включая трансфер, в течение 3 дней."})]}),u.jsx(t,{title:"Скидка по промокоду",chevron:"inline",divider:!0,children:"Промокод действует на первую поездку."}),u.jsx(t,{title:"Документы появятся после оплаты",disabled:!0,children:"Ваучер и чек придут на почту."})]})},f={name:"Тест: поведение",args:{title:"Как найти гида на месте?",defaultOpen:!1,children:void 0,onOpenChange:w4()},render:e=>u.jsxs(t,{...e,children:[u.jsx("p",{style:{margin:0},children:"Гид встретит у входа."}),u.jsx("a",{href:"#guide",children:"Показать на карте"})]}),play:async({canvasElement:e,args:a})=>{const r=h0(e),s=r.getByRole("button",{name:/Как найти гида/});await l(s).toHaveAttribute("aria-expanded","false"),await l(r.getByText("Показать на карте",{selector:"a"})).not.toBeVisible(),await z.click(s),await l(s).toHaveAttribute("aria-expanded","true"),await l(a.onOpenChange).toHaveBeenLastCalledWith(!0),await p0(()=>l(r.getByText("Показать на карте",{selector:"a"})).toBeVisible()),await l(r.getByRole("region",{name:/Как найти гида/})).toBeInTheDocument(),s.focus(),await z.keyboard("{Enter}"),await l(s).toHaveAttribute("aria-expanded","false"),await l(a.onOpenChange).toHaveBeenLastCalledWith(!1)}},x0=["Playground","Variants","CaseFaq","CaseSingleOpen","CaseIncluded","CaseFilters","Sizes","Edges","BehaviourTest"];var q,N,H,M,V;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source},description:{story:"Нажми на заголовок: контент раскрывается и сворачивается, шеврон поворачивается.",...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var W,P,$,L,U;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 24,
    padding: '16px 0'
  }}>
      {(['end', 'inline'] as const).map(chevron => <div key={chevron} style={{
      display: 'grid',
      gap: 4
    }}>
          <div style={{
        paddingInline: 16
      }}><Caption>{\`Chevron=\${chevron} · Type=text, закрыт и открыт\`}</Caption></div>
          <Accordion title="Правила возврата" chevron={chevron}>{ANSWER}</Accordion>
          <Accordion title="Правила возврата" chevron={chevron} defaultOpen>{ANSWER}</Accordion>
          <div style={{
        paddingInline: 16,
        marginTop: 8
      }}><Caption>{\`Type=cells, открыт: шапка — строка Cell, шеврон всегда у края\`}</Caption></div>
          <Accordion title="Что включено" chevron={chevron} type="cells" defaultOpen>
            <Rows />
          </Accordion>
        </div>)}
    </div>
}`,...($=(P=h.parameters)==null?void 0:P.docs)==null?void 0:$.source},description:{story:"Figma matrix: Type text | cells × Chevron end | inline, closed and open.",...(U=(L=h.parameters)==null?void 0:L.docs)==null?void 0:U.description}}};var Q,G,K,J,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Кейсы / Частые вопросы',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: '8px 0'
  }}>
      {FAQ.map((f, i) => <Accordion key={f.q} title={f.q} size={18} divider={i < FAQ.length - 1} defaultOpen={i === 0}>
          {f.a}
        </Accordion>)}
    </div>
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Частые вопросы на детальной странице: список с разделителями, открыто может быть несколько. Длинный вопрос переносится на вторую строку.",...(X=(J=m.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Y,Z,u4,e4,n4;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Кейсы / Открыт только один',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [openId, setOpenId] = useState<string | null>('Программа');
    const items = [{
      id: 'Программа',
      text: 'Сбор в 8:00, дорога 2 часа, подъём к озеру, обед и обратная дорога к 19:00.'
    }, {
      id: 'Место встречи',
      text: 'Площадь Ала-Тоо, у памятника Манасу. Автобус белый, на стекле табличка MTravel.'
    }, {
      id: 'Что взять с собой',
      text: 'Удобную обувь, воду и ветровку.'
    }];
    return <div style={{
      padding: '8px 0'
    }}>
        {items.map((it, i) => <Accordion key={it.id} title={it.id} divider={i < items.length - 1} open={openId === it.id} onOpenChange={o => setOpenId(o ? it.id : null)}>
            {it.text}
          </Accordion>)}
      </div>;
  }
}`,...(u4=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:u4.source},description:{story:"Одновременно открыт один: страница хранит, какой открыт, и закрывает остальные.",...(n4=(e4=E.parameters)==null?void 0:e4.docs)==null?void 0:n4.description}}};var t4,a4,s4,r4,i4;v.parameters={...v.parameters,docs:{...(t4=v.parameters)==null?void 0:t4.docs,source:{originalSource:`{
  name: 'Кейсы / Что включено',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: '8px 0'
  }}>
      <Accordion title="Что включено" subtitle="3 пункта" chevron="inline" type="cells" defaultOpen>
        {ROWS.map(r => <Cell key={r.title} title={r.title} icon={<CheckIcon />} />)}
      </Accordion>
      <Accordion title="Что не включено" subtitle="2 пункта" chevron="inline" type="cells">
        <Cell title="Обед" icon={<CloseIcon />} />
        <Cell title="Входные билеты в парк" icon={<CloseIcon />} />
      </Accordion>
    </div>
}`,...(s4=(a4=v.parameters)==null?void 0:a4.docs)==null?void 0:s4.source},description:{story:'«Что включено» на детальной: строки Cell с иконками; шапка у type="cells" — тоже строка Cell с подписью-счётчиком.',...(i4=(r4=v.parameters)==null?void 0:r4.docs)==null?void 0:i4.description}}};var o4,l4,d4,c4,p4;x.parameters={...x.parameters,docs:{...(o4=x.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  name: 'Кейсы / Фильтры',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [picked, setPicked] = useState<Record<string, boolean>>({
      '2–4 часа': true
    });
    const opts = ['До 2 часов', '2–4 часа', '4–6 часов', 'Больше 6 часов'];
    const n = Object.values(picked).filter(Boolean).length;
    return <div style={{
      padding: '8px 0'
    }}>
        <Accordion title="Длительность" size={18} subtitle={n ? \`Выбрано: \${n}\` : 'Любая'} type="cells" defaultOpen divider>
          {opts.map(o => <Cell key={o} title={o} disclosure={<CellDisclosure variant="checkbox" checked={!!picked[o]} onCheckedChange={c => setPicked(p => ({
          ...p,
          [o]: c
        }))} />} />)}
        </Accordion>
        <Accordion title="Формат" size={18} subtitle="Любой" type="cells">
          <Cell title="Пешком" icon={<FootIcon />} disclosure={<CellDisclosure variant="checkbox" />} />
          <Cell title="В горы" icon={<MountainIcon />} disclosure={<CellDisclosure variant="checkbox" />} />
        </Accordion>
      </div>;
  }
}`,...(d4=(l4=x.parameters)==null?void 0:l4.docs)==null?void 0:d4.source},description:{story:"Фильтры: внутри строки с чекбоксами, тап по строке переключает чекбокс и не закрывает аккордеон.",...(p4=(c4=x.parameters)==null?void 0:c4.docs)==null?void 0:p4.description}}};var h4,m4,E4,v4,x4;g.parameters={...g.parameters,docs:{...(h4=g.parameters)==null?void 0:h4.docs,source:{originalSource:`{
  name: 'Размеры',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 4,
    padding: '8px 0'
  }}>
      {([24, 20, 18, 16] as const).map(s => <Accordion key={s} title={\`Заголовок \${s}\`} size={s} divider defaultOpen={s === 24}>
          {ANSWER}
        </Accordion>)}
    </div>
}`,...(E4=(m4=g.parameters)==null?void 0:m4.docs)==null?void 0:E4.source},description:{story:"Размеры шапки, как у SectionTitle: 24, 20, 18, 16 (в Figma 24, 20, 17, 15).",...(x4=(v4=g.parameters)==null?void 0:v4.docs)==null?void 0:x4.description}}};var g4,A4,f4,C4,y4;A.parameters={...A.parameters,docs:{...(g4=A.parameters)==null?void 0:g4.docs,source:{originalSource:`{
  name: 'Крайние случаи',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    padding: '8px 0'
  }}>
      <Accordion title="Можно ли отменить бронь, если поездку перенесли из-за погоды, и что будет с предоплатой за трансфер из аэропорта" divider defaultOpen>
        <p style={{
        margin: 0
      }}>Если гид переносит поездку из-за погоды, бронь переносится бесплатно на ближайшую дату.</p>
        <p style={{
        margin: '8px 0 0'
      }}>Если новая дата не подходит, вернём полную стоимость, включая трансфер, в течение 3 дней.</p>
      </Accordion>
      <Accordion title="Скидка по промокоду" chevron="inline" divider>Промокод действует на первую поездку.</Accordion>
      <Accordion title="Документы появятся после оплаты" disabled>Ваучер и чек придут на почту.</Accordion>
    </div>
}`,...(f4=(A4=A.parameters)==null?void 0:A4.docs)==null?void 0:f4.source},description:{story:"Края: заголовок длиннее двух строк получает многоточие, длинный ответ из нескольких абзацев, недоступный аккордеон.",...(y4=(C4=A.parameters)==null?void 0:C4.docs)==null?void 0:y4.description}}};var B4,D4,F4,b4,j4;f.parameters={...f.parameters,docs:{...(B4=f.parameters)==null?void 0:B4.docs,source:{originalSource:`{
  name: 'Тест: поведение',
  args: {
    title: 'Как найти гида на месте?',
    defaultOpen: false,
    children: undefined,
    onOpenChange: fn()
  },
  render: args => <Accordion {...args}>
      <p style={{
      margin: 0
    }}>Гид встретит у входа.</p>
      <a href="#guide">Показать на карте</a>
    </Accordion>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const header = canvas.getByRole('button', {
      name: /Как найти гида/
    });
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByText('Показать на карте', {
      selector: 'a'
    })).not.toBeVisible();
    await userEvent.click(header);
    await expect(header).toHaveAttribute('aria-expanded', 'true');
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(true);
    await waitFor(() => expect(canvas.getByText('Показать на карте', {
      selector: 'a'
    })).toBeVisible());
    await expect(canvas.getByRole('region', {
      name: /Как найти гида/
    })).toBeInTheDocument();
    header.focus();
    await userEvent.keyboard('{Enter}');
    await expect(header).toHaveAttribute('aria-expanded', 'false');
    await expect(args.onOpenChange).toHaveBeenLastCalledWith(false);
  }
}`,...(F4=(D4=f.parameters)==null?void 0:D4.docs)==null?void 0:F4.source},description:{story:"Interaction test: the header is a real button with aria-expanded; closed content cannot be focused; Enter toggles.",...(j4=(b4=f.parameters)==null?void 0:b4.docs)==null?void 0:j4.description}}};const O0=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:f,CaseFaq:m,CaseFilters:x,CaseIncluded:v,CaseSingleOpen:E,Edges:A,Playground:p,Sizes:g,Variants:h,__namedExportsOrder:x0,default:E0},Symbol.toStringTag,{value:"Module"}));export{O0 as A,m as C,A as E,p as P,g as S,h as V,E as a,v as b,x as c};
