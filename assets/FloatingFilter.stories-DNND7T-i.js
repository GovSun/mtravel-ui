import{r as n,j as u}from"./iframe-DyD5Yel4.js";import{F as c}from"./FloatingFilter-DvcJgFUi.js";import{f as y,p as $4}from"./date-DiDJ1Ibz.js";import{S as G,H as W4}from"./Phone-D_QzrYrn.js";import{P as K4}from"./photos-D1Eacwwu.js";import{u as Y4}from"./useScrolledPast-BmNc8JN4.js";import{S as I}from"./SwapNumber-CCAZxiM8.js";import{C as d}from"./time-lpmEQjgl.js";import{U as A}from"./people-tOiSq3ZR.js";import{A as V,a as R}from"./Appbar-CqYb5ci7.js";import{S as q4}from"./general-CSE0kF9v.js";import{C as X}from"./arrows-0JYTYJZi.js";import{F as T}from"./FloatingContainer-DeRfZ3x8.js";import{B as l}from"./Button-grGIhY78.js";import{C as G4}from"./Calendar-De6UI0kB.js";import{B as V4}from"./BottomSheet-lYDzhEd4.js";import{C as J,a as Z}from"./Cell-BMryoHV2.js";import{P as X4}from"./PromoBadge-MRvWEy0B.js";import{O as J4}from"./OldPrice-CFXJrPco.js";const Q=6115,u4=3115,Z4=6795,Q4=3461,u0=10,e4=10,C=e=>`${String(e).replace(/\B(?=(\d{3})+(?!\d))/g," ")} ⃀`,t4=e=>`${e} ${$4(e,["участник","участника","участников"])}`,e0=["2025-7-5","2025-7-12","2025-8-9"],t0=new Date(2025,6,2),n0=e=>e.getDay()===1||e0.includes(`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()}`),n4="transform calc(300ms * var(--motion-scale)) cubic-bezier(0.32, 0.72, 0, 1)",a4={position:"absolute",inset:0};function P(){const[e,t]=n.useState(()=>new Date(2025,6,29)),[a,m]=n.useState(1),[s,O4]=n.useState(0),[r,O]=n.useState(!1),[H4,j]=n.useState(!1),[p,H]=n.useState(e),[F,w]=n.useState(a),[S,k]=n.useState(s),_=n.useRef(null),U=n.useRef(null),L=n.useRef(null),N=n.useRef(null),M=n.useRef(null),{past:$,ready:W}=Y4(L,U,{root:_}),_4=a*Q+s*u4,U4=a*Z4+s*Q4,K=a+s,L4=()=>{H(e),O(!0),requestAnimationFrame(()=>{var g;return(g=M.current)==null?void 0:g.focus({preventScroll:!0})})},Y=g=>{g&&p&&t(p),O(!1),requestAnimationFrame(()=>{var q;return(q=N.current)==null?void 0:q.focus({preventScroll:!0})})},N4=()=>{w(a),k(s),j(!0)},M4=u.jsx(c,{"aria-label":"Дата и участники",items:[{id:"filter-date",ref:N,icon:u.jsx(d,{size:14}),label:u.jsx(I,{value:e.getTime(),format:g=>y(g)}),"aria-label":`Дата: ${y(e)}. Изменить`,onClick:L4},{id:"filter-people",icon:u.jsx(A,{size:14}),label:u.jsx(I,{value:K,format:t4}),"aria-label":`Участники: ${t4(K)}. Изменить`,"aria-haspopup":"dialog",onClick:N4}]});return u.jsxs("div",{"data-case":"details-date-participants",style:{position:"relative",height:"100vh",minHeight:600,overflow:"hidden",background:"var(--color-bg-surface)","--appbar-safe-top":"54px","--floating-container-safe-bottom":"34px"},children:[u.jsxs("div",{"data-screen":"details","aria-hidden":r||void 0,...r?{inert:""}:{},style:{...a4,transform:r?"translateX(-25%)":"none",transition:n4},children:[u.jsxs("div",{ref:_,"data-phone-scroller":"",style:{height:"100%",overflowY:"auto",overscrollBehavior:"contain"},children:[u.jsx(s0,{}),u.jsx("div",{ref:L,style:{height:1}}),u.jsx(x,{title:"Что вас ожидает",children:"Бишкек возник на Великом шёлковом пути и вырос из средневековой крепости в большой мультикультурный город. Мы проведём вас через пёструю историю столицы, покажем главные памятники и укажем на неочевидные следы загадочных событий."}),u.jsx(x,{title:"Что включено?",children:"Фото и видео на память, гид на всём маршруте."}),u.jsx(x,{title:"Место встречи",subtitle:y(e,{weekday:!0})+", 18:00",children:"Площадь Ала-Тоо, у флагштока. Гид будет с табличкой MTravel."}),u.jsx(x,{title:"Что взять с собой",children:"Удобную обувь, воду и головной убор: большая часть маршрута на солнце."}),u.jsx(x,{title:"Условия отмены",children:"Бесплатная отмена за 24 часа до начала. Позже — возврат 50 % стоимости."}),u.jsx(x,{title:"Об организаторе",children:"Globus проводит городские экскурсии по Бишкеку с 2016 года, гиды говорят на русском, английском и кыргызском."}),u.jsx("div",{style:{height:220}})]}),u.jsx(V,{ref:U,surface:$?"solid":"cover",instant:!W,title:"Бишкек: неочевидный и невероятный",titleOnCover:!1,left:u.jsx(R,{icon:u.jsx(X,{direction:"left",size:24}),label:"Назад",bold:!0}),right:u.jsx(R,{icon:u.jsx(q4,{}),label:"Поделиться"}),statusBar:u.jsx(G,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsxs(T,{layout:"row",filter:M4,showActions:$,instant:!W,style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx(a0,{total:_4,old:U4}),u.jsx(l,{size:48,style:{flex:"0 0 auto"},children:"К оформлению"})]})]}),u.jsxs("div",{"data-screen":"calendar",role:"region","aria-label":"Когда","aria-hidden":!r||void 0,...r?{}:{inert:""},style:{...a4,background:"var(--color-bg-sunken-subtle)",transform:r?"none":"translateX(100%)",transition:n4,boxShadow:r?"0 0 24px var(--color-shadow-default)":"none"},children:[u.jsx("div",{style:{height:"100%",overflowY:"auto",overscrollBehavior:"contain",padding:"134px 16px 150px",boxSizing:"border-box"},children:u.jsx(G4,{month:new Date(2025,6,1),months:2,min:t0,isDateDisabled:n0,value:p,onValueChange:H})}),u.jsx(V,{surface:"solid",title:"Когда",left:u.jsx(R,{ref:M,icon:u.jsx(X,{direction:"left",size:24}),label:"Назад",bold:!0,onClick:()=>Y(!1)}),statusBar:u.jsx(G,{}),style:{position:"absolute",top:0,left:0,right:0}}),u.jsx(T,{layout:"column",style:{position:"absolute",left:0,right:0,bottom:0},children:u.jsx(l,{size:52,fullWidth:!0,disabled:!p,onClick:()=>Y(!0),children:p?`Выбрать ${y(p)}`:"Выберите дату"})})]}),u.jsxs(V4,{open:H4,onOpenChange:j,header:"left",title:"Участники",footer:u.jsxs("div",{style:{display:"flex",gap:"var(--spacing-sm)"},children:[u.jsx(l,{variant:"secondary",size:48,fullWidth:!0,onClick:()=>(w(1),k(0)),children:"Сбросить"}),u.jsx(l,{size:48,fullWidth:!0,onClick:()=>{m(F),O4(S),j(!1)},children:"Выбрать"})]}),children:[u.jsx(J,{title:"Взрослый",subtitle:C(Q),disclosure:u.jsx(Z,{variant:"counter",counter:{value:F,onValueChange:w,min:1,max:e4-S,"aria-label":"Взрослые"}})}),u.jsx(J,{title:"Ребёнок",subtitle:C(u4),disclosure:u.jsx(Z,{variant:"counter",counter:{value:S,onValueChange:k,min:0,max:e4-F,"aria-label":"Дети"}})})]}),u.jsx("div",{"aria-hidden":"true",style:{position:"absolute",left:0,right:0,bottom:0,height:34,zIndex:2e3,pointerEvents:"none"},children:u.jsx(W4,{})})]})}function a0({total:e,old:t}){return u.jsxs("div",{style:{display:"grid",justifyItems:"start",gap:4,flex:"0 1 auto"},children:[u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[u.jsx("span",{className:"im-18-b",children:u.jsx(I,{value:e,format:C})}),u.jsx(X4,{variant:"discount",shape:"slanted",size:18,value:u0})]}),u.jsx(J4,{size:12,children:C(t)})]})}function s0(){return u.jsx("div",{style:{position:"relative",height:488,background:`linear-gradient(to bottom, transparent 40%, var(--color-bg-constant-scrim-strong)), url(${K4.alaArcha}) center / cover`},children:u.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:16,color:"var(--color-text-inverse-constant-primary)"},children:[u.jsx("p",{className:"im-20-b",style:{margin:0},children:"Бишкек: неочевидный и невероятный"}),u.jsx("p",{className:"im-14-r",style:{margin:"6px 0 0",color:"var(--color-text-inverse-constant-secondary)"},children:"3 часа · Пешком · Группа до 10 человек"}),u.jsx(l,{size:48,fullWidth:!0,style:{marginTop:16},children:"К оформлению"})]})})}function x({title:e,subtitle:t,children:a}){return u.jsxs("section",{style:{padding:"24px 16px 0"},children:[u.jsx("h2",{className:"im-20-b",style:{margin:0},children:e}),t&&u.jsx("p",{className:"im-14-r",style:{margin:"4px 0 0",color:"var(--color-text-tertiary)"},children:t}),u.jsx("p",{className:"im-16-r",style:{margin:"8px 0 0",color:"var(--color-text-secondary)"},children:a})]})}P.__docgenInfo={description:"",methods:[],displayName:"DetailsDateParticipants"};const{expect:i,fn:s4,userEvent:o,waitFor:z,within:E}=__STORYBOOK_MODULE_TEST__,o0="https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1042-1388",i0="https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=2940-107189",r0={title:"Components/FloatingFilter",component:c,parameters:{design:{type:"figma",url:o0}},args:{"aria-label":"Дата и участники",items:[{id:"date",label:"29 июл",icon:u.jsx(d,{size:14}),onClick:s4()},{id:"people",label:"1 участник",icon:u.jsx(A,{size:14}),onClick:s4()}]},argTypes:{items:{control:!1}}},b={play:async({canvas:e,args:t})=>{await o.click(e.getByRole("button",{name:"29 июл"})),await i(t.items[0].onClick).toHaveBeenCalledTimes(1),await o.click(e.getByRole("button",{name:"1 участник"})),await i(t.items[1].onClick).toHaveBeenCalledTimes(1),await i(e.getByRole("group",{name:"Дата и участники"})).toBeInTheDocument()}},h={name:"Сегменты и длина",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[u.jsx(c,{"aria-label":"Дата",items:[{label:"29 июл",icon:u.jsx(d,{size:14})}]}),u.jsx(c,{"aria-label":"Дата и участники",items:[{label:"6 авг",icon:u.jsx(d,{size:14})},{label:"2 участника",icon:u.jsx(A,{size:14})}]}),u.jsx(c,{"aria-label":"Период и участники",items:[{label:"28 дек – 3 янв",icon:u.jsx(d,{size:14})},{label:"10 участников",icon:u.jsx(A,{size:14})}]})]})},B={name:"Нажатие",parameters:{controls:{disable:!0}},render:()=>u.jsx(c,{"aria-label":"Дата и участники",items:[{label:"29 июл",icon:u.jsx(d,{size:14}),forcePressed:!0},{label:"1 участник",icon:u.jsx(A,{size:14})}]})},D={name:"В нижней панели: showActions",parameters:{controls:{disable:!0},layout:"fullscreen"},render:function(){const[t,a]=n.useState(!1);return u.jsxs("div",{style:{padding:16},children:[u.jsx(l,{variant:"secondary",size:44,onClick:()=>a(m=>!m),children:t?"Убрать кнопки":"Показать кнопки"}),u.jsx("div",{style:{position:"relative",width:393,maxWidth:"100%",height:320,marginTop:16,overflow:"hidden",borderRadius:24,background:"var(--color-bg-sunken-subtle)","--floating-container-safe-bottom":"34px"},children:u.jsxs(T,{showActions:t,filter:u.jsx(c,{"aria-label":"Дата и участники",items:[{label:"29 июл",icon:u.jsx(d,{size:14})},{label:"1 участник",icon:u.jsx(A,{size:14})}]}),style:{position:"absolute",left:0,right:0,bottom:0},children:[u.jsx("span",{className:"im-18-b",children:"6 115 ⃀"}),u.jsx(l,{size:48,style:{flex:"0 0 auto"},children:"К оформлению"})]})})]})}},f={name:"Кейс: детали, дата и участники",parameters:{controls:{disable:!0},layout:"fullscreen",design:{type:"figma",url:i0},docs:{story:{inline:!1,height:"852px"}}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx(P,{})},v={name:"Тест: сценарий деталей",tags:["!autodocs"],parameters:{controls:{disable:!0},layout:"fullscreen"},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>u.jsx(P,{}),play:async({canvasElement:e})=>{const t=E(e),a=E(e.ownerDocument.body);await o.click(t.getByRole("button",{name:/^Дата: 29 июл/}));const m=e.querySelector('[data-screen="calendar"]');await z(()=>i(m).not.toHaveAttribute("aria-hidden")),await i(t.getByRole("button",{name:/понедельник, 4 августа 2025, недоступно/})).toBeDisabled(),await o.click(t.getByRole("button",{name:/среда, 6 августа 2025/})),await o.click(t.getByRole("button",{name:"Выбрать 6 авг"})),await z(()=>i(m).toHaveAttribute("aria-hidden","true")),await i(t.getByRole("button",{name:/^Дата: 6 авг/})).toHaveFocus(),await o.click(t.getByRole("button",{name:/^Участники: 1 участник/}));const s=await a.findByRole("dialog",{name:"Участники"});await o.click(E(s).getAllByRole("button",{name:"Увеличить"})[1]),await o.click(E(s).getByRole("button",{name:"Выбрать"})),await z(()=>i(t.getByRole("button",{name:/^Участники: 2 участника/})).toBeInTheDocument())}},l0=["Playground","Segments","Pressed","InBar","CaseDetails","CaseDetailsTest"];var o4,i4,r4,l4,c4;b.parameters={...b.parameters,docs:{...(o4=b.parameters)==null?void 0:o4.docs,source:{originalSource:`{
  play: async ({
    canvas,
    args
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '29 июл'
    }));
    await expect(args.items[0].onClick).toHaveBeenCalledTimes(1);
    await userEvent.click(canvas.getByRole('button', {
      name: '1 участник'
    }));
    await expect(args.items[1].onClick).toHaveBeenCalledTimes(1);
    await expect(canvas.getByRole('group', {
      name: 'Дата и участники'
    })).toBeInTheDocument();
  }
}`,...(r4=(i4=b.parameters)==null?void 0:i4.docs)==null?void 0:r4.source},description:{story:"Два сегмента, как в Figma. Тап по сегменту — его обработчик: дата открывает календарь, участники — их шторку.",...(c4=(l4=b.parameters)==null?void 0:l4.docs)==null?void 0:c4.description}}};var d4,m4,p4,g4,x4;h.parameters={...h.parameters,docs:{...(d4=h.parameters)==null?void 0:d4.docs,source:{originalSource:`{
  name: 'Сегменты и длина',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12,
    justifyItems: 'center'
  }}>
      <FloatingFilter aria-label="Дата" items={[{
      label: '29 июл',
      icon: <CalendarIcon size={14} />
    }]} />
      <FloatingFilter aria-label="Дата и участники" items={[{
      label: '6 авг',
      icon: <CalendarIcon size={14} />
    }, {
      label: '2 участника',
      icon: <UserIcon size={14} />
    }]} />
      <FloatingFilter aria-label="Период и участники" items={[{
      label: '28 дек – 3 янв',
      icon: <CalendarIcon size={14} />
    }, {
      label: '10 участников',
      icon: <UserIcon size={14} />
    }]} />
    </div>
}`,...(p4=(m4=h.parameters)==null?void 0:m4.docs)==null?void 0:p4.source},description:{story:"Один сегмент (только дата), два сегмента и длинные значения: плашка растёт по содержимому, центр — по строке.",...(x4=(g4=h.parameters)==null?void 0:g4.docs)==null?void 0:x4.description}}};var b4,h4,B4,D4,f4;B.parameters={...B.parameters,docs:{...(b4=B.parameters)==null?void 0:b4.docs,source:{originalSource:`{
  name: 'Нажатие',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FloatingFilter aria-label="Дата и участники" items={[{
    label: '29 июл',
    icon: <CalendarIcon size={14} />,
    forcePressed: true
  }, {
    label: '1 участник',
    icon: <UserIcon size={14} />
  }]} />
}`,...(B4=(h4=B.parameters)==null?void 0:h4.docs)==null?void 0:B4.source},description:{story:"Палец на сегменте: он сразу темнеет (100 мс) и мягко возвращается после отпускания (240 мс). Здесь нажатие зафиксировано.",...(f4=(D4=B.parameters)==null?void 0:D4.docs)==null?void 0:f4.description}}};var v4,A4,y4,E4,C4;D.parameters={...D.parameters,docs:{...(v4=D.parameters)==null?void 0:v4.docs,source:{originalSource:`{
  name: 'В нижней панели: showActions',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  render: function Render() {
    const [shown, setShown] = useState(false);
    return <div style={{
      padding: 16
    }}>
        <Button variant="secondary" size={44} onClick={() => setShown(v => !v)}>
          {shown ? 'Убрать кнопки' : 'Показать кнопки'}
        </Button>
        <div style={{
        position: 'relative',
        width: 393,
        maxWidth: '100%',
        height: 320,
        marginTop: 16,
        overflow: 'hidden',
        borderRadius: 24,
        background: 'var(--color-bg-sunken-subtle)',
        ['--floating-container-safe-bottom' as string]: '34px'
      }}>
          <FloatingContainer showActions={shown} filter={<FloatingFilter aria-label="Дата и участники" items={[{
          label: '29 июл',
          icon: <CalendarIcon size={14} />
        }, {
          label: '1 участник',
          icon: <UserIcon size={14} />
        }]} />} style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0
        }}>
            <span className="im-18-b">6 115 ⃀</span>
            <Button size={48} style={{
            flex: '0 0 auto'
          }}>
              К оформлению
            </Button>
          </FloatingContainer>
        </div>
      </div>;
  }
}`,...(y4=(A4=D.parameters)==null?void 0:A4.docs)==null?void 0:y4.source},description:{story:"В нижней панели (FloatingContainer, Figma «Filter»). `showActions` — это Figma «Show buttons» с движением: без кнопок\nпанель опускается на высоту строки с ценой, и на экране остаётся одна плашка. Переключи кнопкой.",...(C4=(E4=D.parameters)==null?void 0:E4.docs)==null?void 0:C4.description}}};var j4,F4,w4,S4,k4;f.parameters={...f.parameters,docs:{...(j4=f.parameters)==null?void 0:j4.docs,source:{originalSource:`{
  name: 'Кейс: детали, дата и участники',
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: CASE
    },
    docs: {
      story: {
        inline: false,
        height: '852px'
      }
    }
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <DetailsDateParticipants />
}`,...(w4=(F4=f.parameters)==null?void 0:F4.docs)==null?void 0:w4.source},description:{story:`«Выходные», детальная страница: дата и участники из поиска едут внизу экрана.
- Пока видна кнопка на обложке, внизу только плашка. Прокрути: обложка уходит под шапку, шапка белеет, и под плашкой
  поднимается строка с ценой и «К оформлению» — в один момент.
- Тап по дате — экран «Когда» с календарём, доступны только дни, когда идёт экскурсия; «Выбрать» возвращает дату в плашку.
- Тап по участникам — Bottom Sheet со счётчиками; «Выбрать» меняет число участников и цену, «Сбросить» — к одному взрослому.`,...(k4=(S4=f.parameters)==null?void 0:S4.docs)==null?void 0:k4.description}}};var R4,z4,I4,T4,P4;v.parameters={...v.parameters,docs:{...(R4=v.parameters)==null?void 0:R4.docs,source:{originalSource:`{
  name: 'Тест: сценарий деталей',
  tags: ['!autodocs'],
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen'
  },
  globals: {
    viewport: {
      value: 'mbank393',
      isRotated: false
    }
  },
  render: () => <DetailsDateParticipants />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    // the date → the calendar screen → 6 августа → «Выбрать 6 авг» → back in the pill
    await userEvent.click(canvas.getByRole('button', {
      name: /^Дата: 29 июл/
    }));
    const calendar = canvasElement.querySelector<HTMLElement>('[data-screen="calendar"]')!;
    await waitFor(() => expect(calendar).not.toHaveAttribute('aria-hidden'));
    await expect(canvas.getByRole('button', {
      name: /понедельник, 4 августа 2025, недоступно/
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: /среда, 6 августа 2025/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Выбрать 6 авг'
    }));
    await waitFor(() => expect(calendar).toHaveAttribute('aria-hidden', 'true'));
    await expect(canvas.getByRole('button', {
      name: /^Дата: 6 авг/
    })).toHaveFocus();
    // the participants → the sheet → one more child → «Выбрать» → «2 участника»
    await userEvent.click(canvas.getByRole('button', {
      name: /^Участники: 1 участник/
    }));
    const sheet = await page.findByRole('dialog', {
      name: 'Участники'
    });
    await userEvent.click(within(sheet).getAllByRole('button', {
      name: 'Увеличить'
    })[1]);
    await userEvent.click(within(sheet).getByRole('button', {
      name: 'Выбрать'
    }));
    await waitFor(() => expect(canvas.getByRole('button', {
      name: /^Участники: 2 участника/
    })).toBeInTheDocument());
  }
}`,...(I4=(z4=v.parameters)==null?void 0:z4.docs)==null?void 0:I4.source},description:{story:"Тот же кейс, прогон сценария: дата → календарь → 6 августа → «Выбрать»; участники → +1 ребёнок → «Выбрать».",...(P4=(T4=v.parameters)==null?void 0:T4.docs)==null?void 0:P4.description}}};const S0=Object.freeze(Object.defineProperty({__proto__:null,CaseDetails:f,CaseDetailsTest:v,InBar:D,Playground:b,Pressed:B,Segments:h,__namedExportsOrder:l0,default:r0},Symbol.toStringTag,{value:"Module"}));export{f as C,S0 as F,D as I,b as P,h as S,B as a};
