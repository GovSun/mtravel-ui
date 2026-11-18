import{r as D,j as u}from"./iframe-DuqTOznb.js";import{C as S}from"./Caption-C6jupY-b.js";import{c as M4}from"./cx-2dOUpm6k.js";import{P as V4}from"./Pressable-D45JnRku.js";import{u as W4}from"./useControllableState-QyUXWn2y.js";import{S as P4}from"./SectionTitle-DUrzhWiT.js";import{D as H4}from"./Divider-BbjTiNWY.js";import{C as $4}from"./arrows-C0H-naDa.js";import{C as d,a as F}from"./Cell-DbWJlVzG.js";import{F as L4,M as U4,H as Q4,b as G4}from"./places-z-kxph-t.js";import{d as K4,b as I}from"./general-DYSfllt2.js";import{a as J4}from"./people-s6FNqSUd.js";const X4="_root_pfofw_8",Y4="_heading_pfofw_20",Z4="_header_pfofw_26",u0="_headerContent_pfofw_53",e0="_title_pfofw_63",n0="_chevronSlot_pfofw_75",t0="_chevron_pfofw_75",a0="_panel_pfofw_100",i0="_clip_pfofw_109",s0="_content_pfofw_120",r0="_paragraph_pfofw_142",o0="_divider_pfofw_150",i={root:X4,heading:Y4,header:Z4,headerContent:u0,title:e0,chevronSlot:n0,chevron:t0,panel:a0,clip:i0,content:s0,paragraph:r0,divider:o0},n=D.forwardRef(function({title:t,subtitle:s,size:a=20,iconLeft:r,chevron:o="end",type:A="text",open:b,defaultOpen:T4=!1,onOpenChange:_4,divider:O4=!1,disabled:w=!1,headingAs:S4="h3",forcePressed:I4=!1,children:y,className:k4,...R4},q4){const[B,N4]=W4(b,T4,_4),j=D.useId(),T=`${j}-header`,_=`${j}-panel`,O=u.jsx($4,{size:16,direction:"down",className:i.chevron,"aria-hidden":"true"}),z4=typeof y=="string"||typeof y=="number"?u.jsx("p",{className:i.paragraph,children:y}):y;return u.jsxs("div",{ref:q4,...R4,className:M4(i.root,k4),"data-open":B||void 0,"data-chevron":o,"data-type":A,"data-disabled":w||void 0,children:[u.jsx(S4,{className:i.heading,children:u.jsx(V4,{as:"button",id:T,className:i.header,"aria-expanded":B,"aria-controls":_,disabled:w,forcePressed:I4,onClick:()=>N4(!B),children:u.jsxs("span",{className:i.headerContent,children:[u.jsx(P4,{as:"span",wrapperAs:"span",size:a,subtitle:s,iconLeft:r,iconRight:o==="inline"?O:void 0,className:i.title,children:t}),o==="end"&&u.jsx("span",{className:i.chevronSlot,children:O})]})})}),u.jsx("div",{id:_,role:"region","aria-labelledby":T,className:i.panel,"data-open":B||void 0,children:u.jsx("div",{className:i.clip,children:u.jsx("div",{className:i.content,children:z4})})}),O4&&u.jsx(H4,{as:"span",variant:"full",inset:16,insetEnd:16,className:i.divider})]})});n.__docgenInfo={description:'Accordion (Figma «Accordion», page Accordion): a header that opens and closes its content. The header is SectionTitle\n(Figma Title 8:645) with a chevron, 48 px minimum, and the whole of it is the button. Content is a slot: a paragraph\n(`type="text"`) or Cell rows (`type="cells"`), or anything else.\n\n- WAI-ARIA accordion: a heading (`headingAs`) holds a `<button aria-expanded aria-controls>`; the panel is a region\n  labelled by the button. Closed content is out of the tab order and the accessibility tree (visibility hidden after\n  the collapse), so nothing hidden can be focused.\n- Motion: the header shrinks on the Cell spring from pointer-down (a row with a chevron is one big button); the chevron\n  turns 180°; the content height opens with `grid-template-rows` (the documented Field-hint exception) while the content\n  fades and settles 4 px. Closing is faster than opening. Reduced motion: no turn, no height animation, only the fade.\n- Controlled (`open` + `onOpenChange`) or uncontrolled (`defaultOpen`). Several accordions can be open at once; for\n  «one at a time» keep the open id in the page state.\n\n`ref`, `className`, `style` and the rest of the attributes go to the root.',methods:[],displayName:"Accordion",props:{title:{required:!0,tsType:{name:"ReactNode"},description:"The header text (Title inside). Up to two lines, then an ellipsis."},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"A line under the title: a count, a short hint («3 пункта»). Stays visible when the accordion is closed."},size:{required:!1,tsType:{name:"union",raw:"24 | 20 | 18 | 16",elements:[{name:"literal",value:"24"},{name:"literal",value:"20"},{name:"literal",value:"18"},{name:"literal",value:"16"}]},description:"Figma «Size» 24px | 20px | 18px | 16px: the header text, IM-24 B / IM-20 B (default) / IM-18 B / IM-16 B. The header stays at least 48 px at every size.",defaultValue:{value:"20",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:"A 16 px icon before the title."},chevron:{required:!1,tsType:{name:"union",raw:"'end' | 'inline'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'inline'"}]},description:"Where the chevron sits. Default `end`.",defaultValue:{value:"'end'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'cells'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'cells'"}]},description:"What the content is. `text` pads it 0 / 16 / 16 and sets IM-16 R; `cells` puts Cell rows edge to edge with 8 below. Default `text`.",defaultValue:{value:"'text'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Uncontrolled start state. Default closed.",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called with the new state when the header is tapped or pressed with Enter / Space."},divider:{required:!1,tsType:{name:"boolean"},description:"A 1 px line along the bottom edge, 16 px from both sides: for a list of accordions.",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"The header does not react and the chevron greys out. The content keeps its state.",defaultValue:{value:"false",computed:!1}},headingAs:{required:!1,tsType:{name:"union",raw:"'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'",elements:[{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'div'"}]},description:"Element around the header button. The page picks the level; default `h3`.",defaultValue:{value:"'h3'",computed:!1}},forcePressed:{required:!1,tsType:{name:"boolean"},description:"Shows the pressed header without a finger. For docs and visual tests only. @internal",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:'The content: a string (becomes a paragraph), any nodes, or Cell rows with `type="cells"`.'},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const{expect:l,fn:w4,userEvent:k,waitFor:l0,within:d0}=__STORYBOOK_MODULE_TEST__,c0="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1516-273",C="Полный возврат, если отменить за 24 часа до начала. Позже вернём 50 % стоимости.",p0={title:"Components/Accordion",component:n,parameters:{design:{type:"figma",url:c0},layout:"fullscreen"},args:{title:"Правила возврата",subtitle:void 0,size:20,chevron:"end",type:"text",defaultOpen:!0,divider:!1,disabled:!1,children:C,onOpenChange:w4()},argTypes:{size:{control:"inline-radio",options:[24,20,18,16]},chevron:{control:"inline-radio",options:["end","inline"]},type:{control:"inline-radio",options:["text","cells"]},children:{control:"text"},open:{control:!1},iconLeft:{control:!1},forcePressed:{control:!1}},decorators:[e=>u.jsx("div",{style:{maxWidth:393,background:"var(--color-bg-page)"},children:u.jsx(e,{})})]},c={},j4=[{icon:u.jsx(Q4,{}),title:"Трансфер от отеля"},{icon:u.jsx(G4,{}),title:"Фотосъёмка на маршруте"},{icon:u.jsx(J4,{}),title:"Гид на русском"}],h0=()=>u.jsx(u.Fragment,{children:j4.map(e=>u.jsx(d,{title:e.title,icon:e.icon},e.title))}),p={name:"Варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:24,padding:"16px 0"},children:["end","inline"].map(e=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsx("div",{style:{paddingInline:16},children:u.jsx(S,{children:`Chevron=${e} · Type=text, закрыт и открыт`})}),u.jsx(n,{title:"Правила возврата",chevron:e,children:C}),u.jsx(n,{title:"Правила возврата",chevron:e,defaultOpen:!0,children:C}),u.jsx("div",{style:{paddingInline:16,marginTop:8},children:u.jsx(S,{children:`Chevron=${e} · Type=cells, открыт`})}),u.jsx(n,{title:"Что включено",chevron:e,type:"cells",defaultOpen:!0,children:u.jsx(h0,{})})]},e))})},R=[{q:"Можно ли вернуть билет?",a:C},{q:"Что взять с собой?",a:"Удобную обувь, воду и ветровку: в горах прохладно даже летом."},{q:"Можно ли с детьми и с собакой на экскурсию в горы на целый день?",a:"С детьми от 6 лет — да. С собакой — по договорённости с гидом, напишите ему после оплаты."},{q:"Как найти гида на месте?",a:"Гид встретит у входа в Филармонию за 10 минут до начала, у него будет табличка MTravel."}],h={name:"Кейсы / Частые вопросы",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{padding:"8px 0"},children:R.map((e,t)=>u.jsx(n,{title:e.q,size:18,divider:t<R.length-1,defaultOpen:t===0,children:e.a},e.q))})},m={name:"Кейсы / Открыт только один",parameters:{controls:{disable:!0}},render:function(){const[t,s]=D.useState("Программа"),a=[{id:"Программа",text:"Сбор в 8:00, дорога 2 часа, подъём к озеру, обед и обратная дорога к 19:00."},{id:"Место встречи",text:"Площадь Ала-Тоо, у памятника Манасу. Автобус белый, на стекле табличка MTravel."},{id:"Что взять с собой",text:"Удобную обувь, воду и ветровку."}];return u.jsx("div",{style:{padding:"8px 0"},children:a.map((r,o)=>u.jsx(n,{title:r.id,divider:o<a.length-1,open:t===r.id,onOpenChange:A=>s(A?r.id:null),children:r.text},r.id))})}},E={name:"Кейсы / Что включено",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsx(n,{title:"Что включено",subtitle:"3 пункта",chevron:"inline",type:"cells",defaultOpen:!0,children:j4.map(e=>u.jsx(d,{title:e.title,icon:u.jsx(K4,{})},e.title))}),u.jsxs(n,{title:"Что не включено",subtitle:"2 пункта",chevron:"inline",type:"cells",children:[u.jsx(d,{title:"Обед",icon:u.jsx(I,{})}),u.jsx(d,{title:"Входные билеты в парк",icon:u.jsx(I,{})})]})]})},v={name:"Кейсы / Фильтры",parameters:{controls:{disable:!0}},render:function(){const[t,s]=D.useState({"2–4 часа":!0}),a=["До 2 часов","2–4 часа","4–6 часов","Больше 6 часов"],r=Object.values(t).filter(Boolean).length;return u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsx(n,{title:"Длительность",size:18,subtitle:r?`Выбрано: ${r}`:"Любая",type:"cells",defaultOpen:!0,divider:!0,children:a.map(o=>u.jsx(d,{title:o,disclosure:u.jsx(F,{variant:"checkbox",checked:!!t[o],onCheckedChange:A=>s(b=>({...b,[o]:A}))})},o))}),u.jsxs(n,{title:"Формат",size:18,subtitle:"Любой",type:"cells",children:[u.jsx(d,{title:"Пешком",icon:u.jsx(L4,{}),disclosure:u.jsx(F,{variant:"checkbox"})}),u.jsx(d,{title:"В горы",icon:u.jsx(U4,{}),disclosure:u.jsx(F,{variant:"checkbox"})})]})]})}},f={name:"Размеры",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:4,padding:"8px 0"},children:[24,20,18,16].map(e=>u.jsx(n,{title:`Заголовок ${e}`,size:e,divider:!0,defaultOpen:e===24,children:C},e))})},g={name:"Крайние случаи",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{padding:"8px 0"},children:[u.jsxs(n,{title:"Можно ли отменить бронь, если поездку перенесли из-за погоды, и что будет с предоплатой за трансфер из аэропорта",divider:!0,defaultOpen:!0,children:[u.jsx("p",{style:{margin:0},children:"Если гид переносит поездку из-за погоды, бронь переносится бесплатно на ближайшую дату."}),u.jsx("p",{style:{margin:"8px 0 0"},children:"Если новая дата не подходит, вернём полную стоимость, включая трансфер, в течение 3 дней."})]}),u.jsx(n,{title:"Скидка по промокоду",chevron:"inline",divider:!0,children:"Промокод действует на первую поездку."}),u.jsx(n,{title:"Документы появятся после оплаты",disabled:!0,children:"Ваучер и чек придут на почту."})]})},x={name:"Тест: поведение",args:{title:"Как найти гида на месте?",defaultOpen:!1,children:void 0,onOpenChange:w4()},render:e=>u.jsxs(n,{...e,children:[u.jsx("p",{style:{margin:0},children:"Гид встретит у входа."}),u.jsx("a",{href:"#guide",children:"Показать на карте"})]}),play:async({canvasElement:e,args:t})=>{const s=d0(e),a=s.getByRole("button",{name:/Как найти гида/});await l(a).toHaveAttribute("aria-expanded","false"),await l(s.getByText("Показать на карте",{selector:"a"})).not.toBeVisible(),await k.click(a),await l(a).toHaveAttribute("aria-expanded","true"),await l(t.onOpenChange).toHaveBeenLastCalledWith(!0),await l0(()=>l(s.getByText("Показать на карте",{selector:"a"})).toBeVisible()),await l(s.getByRole("region",{name:/Как найти гида/})).toBeInTheDocument(),a.focus(),await k.keyboard("{Enter}"),await l(a).toHaveAttribute("aria-expanded","false"),await l(t.onOpenChange).toHaveBeenLastCalledWith(!1)}},m0=["Playground","Variants","CaseFaq","CaseSingleOpen","CaseIncluded","CaseFilters","Sizes","Edges","BehaviourTest"];var q,N,z,M,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(z=(N=c.parameters)==null?void 0:N.docs)==null?void 0:z.source},description:{story:"Нажми на заголовок: контент раскрывается и сворачивается, шеврон поворачивается.",...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var W,P,H,$,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
      }}><Caption>{\`Chevron=\${chevron} · Type=cells, открыт\`}</Caption></div>
          <Accordion title="Что включено" chevron={chevron} type="cells" defaultOpen>
            <Rows />
          </Accordion>
        </div>)}
    </div>
}`,...(H=(P=p.parameters)==null?void 0:P.docs)==null?void 0:H.source},description:{story:"Figma matrix: Type text | cells × Chevron end | inline, closed and open.",...(L=($=p.parameters)==null?void 0:$.docs)==null?void 0:L.description}}};var U,Q,G,K,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:G.source},description:{story:"Частые вопросы на детальной странице: список с разделителями, открыто может быть несколько. Длинный вопрос переносится на вторую строку.",...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.description}}};var X,Y,Z,u4,e4;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Одновременно открыт один: страница хранит, какой открыт, и закрывает остальные.",...(e4=(u4=m.parameters)==null?void 0:u4.docs)==null?void 0:e4.description}}};var n4,t4,a4,i4,s4;E.parameters={...E.parameters,docs:{...(n4=E.parameters)==null?void 0:n4.docs,source:{originalSource:`{
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
}`,...(a4=(t4=E.parameters)==null?void 0:t4.docs)==null?void 0:a4.source},description:{story:"«Что включено» на детальной: строки Cell с иконками, шеврон сразу после заголовка, подпись со счётчиком.",...(s4=(i4=E.parameters)==null?void 0:i4.docs)==null?void 0:s4.description}}};var r4,o4,l4,d4,c4;v.parameters={...v.parameters,docs:{...(r4=v.parameters)==null?void 0:r4.docs,source:{originalSource:`{
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
}`,...(l4=(o4=v.parameters)==null?void 0:o4.docs)==null?void 0:l4.source},description:{story:"Фильтры: внутри строки с чекбоксами, тап по строке переключает чекбокс и не закрывает аккордеон.",...(c4=(d4=v.parameters)==null?void 0:d4.docs)==null?void 0:c4.description}}};var p4,h4,m4,E4,v4;f.parameters={...f.parameters,docs:{...(p4=f.parameters)==null?void 0:p4.docs,source:{originalSource:`{
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
}`,...(m4=(h4=f.parameters)==null?void 0:h4.docs)==null?void 0:m4.source},description:{story:"Размеры шапки, как у SectionTitle: 24, 20, 18, 16 (в Figma 24, 20, 17, 15).",...(v4=(E4=f.parameters)==null?void 0:E4.docs)==null?void 0:v4.description}}};var f4,g4,x4,A4,C4;g.parameters={...g.parameters,docs:{...(f4=g.parameters)==null?void 0:f4.docs,source:{originalSource:`{
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
}`,...(x4=(g4=g.parameters)==null?void 0:g4.docs)==null?void 0:x4.source},description:{story:"Края: заголовок длиннее двух строк получает многоточие, длинный ответ из нескольких абзацев, недоступный аккордеон.",...(C4=(A4=g.parameters)==null?void 0:A4.docs)==null?void 0:C4.description}}};var y4,B4,D4,b4,F4;x.parameters={...x.parameters,docs:{...(y4=x.parameters)==null?void 0:y4.docs,source:{originalSource:`{
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
}`,...(D4=(B4=x.parameters)==null?void 0:B4.docs)==null?void 0:D4.source},description:{story:"Interaction test: the header is a real button with aria-expanded; closed content cannot be focused; Enter toggles.",...(F4=(b4=x.parameters)==null?void 0:b4.docs)==null?void 0:F4.description}}};const w0=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:x,CaseFaq:h,CaseFilters:v,CaseIncluded:E,CaseSingleOpen:m,Edges:g,Playground:c,Sizes:f,Variants:p,__namedExportsOrder:m0,default:p0},Symbol.toStringTag,{value:"Module"}));export{w0 as A,h as C,g as E,c as P,f as S,p as V,m as a,E as b,v as c};
