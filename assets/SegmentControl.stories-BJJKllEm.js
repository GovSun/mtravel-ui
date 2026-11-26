import{r as o,j as t}from"./iframe-DyD5Yel4.js";import{c as $e}from"./cx-2dOUpm6k.js";import{u as Ye}from"./mergeRefs-BZQLIp5G.js";import{u as We}from"./useControllableState-D9cJCl43.js";import{u as Xe}from"./useInstantAfterKey-D3FdC2PV.js";import{P as Ge}from"./PaymentPlanSummary-BUJW-MXc.js";import{L as G}from"./places-CYDz-5dl.js";import{H as K,S as Q}from"./general-CSE0kF9v.js";const Ke="_root_1xgcn_7",Qe="_thumb_1xgcn_37",Ue="_thumbFill_1xgcn_48",Je="_tab_1xgcn_62",Ze="_icon_1xgcn_98",Pe="_label_1xgcn_109",g={root:Ke,thumb:Qe,thumbFill:Ue,tab:Je,icon:Ze,label:Pe},d=o.forwardRef(function({items:u,value:r,defaultValue:l,onValueChange:Fe,size:Re="md",disabled:x=!1,className:_e,style:De,onPointerDown:S,onPointerMove:w,onPointerUp:E,onPointerCancel:F,onLostPointerCapture:R,onKeyDown:_,...Te},je){var $;const[M,ke]=We(r,l??(($=u[0])==null?void 0:$.value)??"",Fe),i=Math.max(0,u.findIndex(e=>e.value===M)),[D,N]=o.useState(null),[Ie,T]=o.useState(null),[ze,V]=o.useState(!1),L=o.useRef(null),O=o.useRef([]),m=o.useRef(null),C=o.useRef(!1),j=o.useRef(void 0);o.useEffect(()=>()=>window.clearTimeout(j.current),[]);const k=(e,a)=>{var Y,W;const n=L.current;if(!n)return a;if(e.clientX===0&&e.clientY===0){const X=(W=(Y=e.target).closest)==null?void 0:W.call(Y,"[data-index]");return X?Number(X.getAttribute("data-index")):a}const c=n.getBoundingClientRect(),qe=Math.floor((e.clientX-c.left)/c.width*u.length);return Math.min(u.length-1,Math.max(0,qe))},A=e=>{const a=u[e];a&&a.value!==M&&ke(a.value)},I=()=>{m.current=null,N(null),T(null),V(!1),window.clearTimeout(j.current),j.current=window.setTimeout(()=>{C.current=!1},0)},[Me,H]=Xe(i),Ne=Ye(L,je),Ve=e=>{var n,c;if(S==null||S(e),e.defaultPrevented||x||e.button!==0||m.current)return;const a=k(e,i);H(!1),m.current={id:e.pointerId,from:a,drag:a===i},C.current=!0,a===i?V(!0):T(a),(c=(n=e.currentTarget).setPointerCapture)==null||c.call(n,e.pointerId)},Le=e=>{w==null||w(e);const a=m.current;if(!a||a.id!==e.pointerId)return;const n=k(e,a.from);a.drag?N(n):T(n===a.from?n:null)},Oe=e=>{E==null||E(e);const a=m.current;if(!a||a.id!==e.pointerId)return;const n=k(e,a.drag?D??a.from:a.from);(a.drag||n===a.from)&&A(n),I()},He=e=>{var c;if(_==null||_(e),x||e.defaultPrevented)return;const a=u.length-1,n=e.key==="ArrowRight"||e.key==="ArrowDown"?Math.min(a,i+1):e.key==="ArrowLeft"||e.key==="ArrowUp"?Math.max(0,i-1):e.key==="Home"?0:e.key==="End"?a:null;n!==null&&(e.preventDefault(),H(!0),A(n),(c=O.current[n])==null||c.focus())},q=D??i;return t.jsxs("div",{ref:Ne,role:"radiogroup","aria-disabled":x||void 0,className:$e(g.root,_e),"data-size":Re,"data-disabled":x||void 0,"data-instant":Me||void 0,"data-dragging":D!==null||void 0,style:{...De,"--n":u.length,"--i":q},onPointerDown:Ve,onPointerMove:Le,onPointerUp:Oe,onPointerCancel:e=>{F==null||F(e),I()},onLostPointerCapture:e=>{R==null||R(e),m.current&&I()},onKeyDown:He,...Te,children:[t.jsx("span",{className:g.thumb,"aria-hidden":"true",children:t.jsx("span",{className:g.thumbFill,"data-pressed":ze||void 0})}),u.map((e,a)=>t.jsxs("button",{ref:n=>{O.current[a]=n},type:"button",role:"radio","data-index":a,"aria-checked":a===i,"aria-label":e["aria-label"],tabIndex:a===i?0:-1,disabled:x,className:g.tab,"data-active":a===q||void 0,"data-pressed":Ie===a||void 0,onClick:()=>{if(C.current){C.current=!1;return}A(a)},children:[e.icon&&t.jsx("span",{className:g.icon,"aria-hidden":"true",children:e.icon}),e.label!==void 0&&t.jsx("span",{className:g.label,children:e.label})]},e.value))]})});d.__docgenInfo={description:`Segment control (Figma segment_control 786:1127 + segment_control_tab 786:1070): 2–5 equal tabs on a grey track,
the chosen one sits on a white thumb.

 - Tap: the thumb slides to the tab (300 ms, iOS sheet curve — quick start, long soft landing). Interruptible:
   a new tap retargets it from where it is.
 - Press on another tab: its label dims to 0.5 at once (feedback) and the thumb goes there on release; slide off
   the tab and nothing happens.
 - Press on the chosen tab: the thumb shrinks a little under the finger and can be dragged — it snaps from tab to
   tab and the choice is made on release, like in iOS.
 - Keys: ← → Home End move the choice at once, without sliding.
 - Reduced motion: the thumb is there at once.
One radio group: role radiogroup / radio, roving focus.`,methods:[],displayName:"SegmentControl",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  /** Text, IM-14 B (Figma Text=On). */
  label?: ReactNode;
  /** 16 px icon before the text (Figma Icon=On). */
  icon?: ReactNode;
  /** Name for an icon-only tab. */
  'aria-label'?: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!1},description:"Text, IM-14 B (Figma Text=On)."},{key:"icon",value:{name:"ReactNode",required:!1},description:"16 px icon before the text (Figma Icon=On)."},{key:"aria-label",value:{name:"string",required:!1},description:"Name for an icon-only tab."}]}}],raw:"SegmentItem[]"},description:"2–5 tabs (Figma Quantity)."},value:{required:!1,tsType:{name:"string"},description:"The chosen tab. Controlled."},defaultValue:{required:!1,tsType:{name:"string"},description:"Uncontrolled start value. Default: the first tab."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Figma Size: `md` (Medium) — tabs 32 px, `lg` (Large) — 40 px. Both have a 44 px touch target.",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{expect:B,fn:ea,userEvent:U,within:aa}=__STORYBOOK_MODULE_TEST__,z=[{value:"all",label:"Все"},{value:"group",label:"Групповые"},{value:"private",label:"Частные"}],ta={title:"Components/SegmentControl",component:d,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=786-1127"}},decorators:[s=>t.jsx("div",{style:{width:361,maxWidth:"100%"},children:t.jsx(s,{})})],args:{items:z,defaultValue:"all",size:"md",disabled:!1,onValueChange:ea(),"aria-label":"Формат экскурсии"},argTypes:{size:{control:"inline-radio",options:["md","lg"]},items:{control:!1},value:{control:!1}}},ua=({children:s})=>t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:s}),na=s=>Array.from({length:s},(u,r)=>({value:`t${r}`,label:"Tab"})),p={},b={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",gap:12},children:["md","lg"].map(s=>[5,4,3,2].map(u=>t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsxs(ua,{children:[s==="md"?"Medium (md)":"Large (lg)",", ",u]}),t.jsx(d,{items:na(u),size:s,"aria-label":`${s} ${u}`})]},`${s}${u}`)))})},h={name:"С иконками и недоступный",parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsx(d,{"aria-label":"С иконкой и текстом",items:[{value:"a",label:"Рядом",icon:t.jsx(G,{size:16})},{value:"b",label:"Любимые",icon:t.jsx(K,{size:16})},{value:"c",label:"Поделились",icon:t.jsx(Q,{size:16})}]}),t.jsx(d,{"aria-label":"Только иконки",size:"lg",items:[{value:"a",icon:t.jsx(G,{size:16}),"aria-label":"Рядом"},{value:"b",icon:t.jsx(K,{size:16}),"aria-label":"Любимые"},{value:"c",icon:t.jsx(Q,{size:16}),"aria-label":"Поделились"}]}),t.jsx(d,{"aria-label":"Недоступный",disabled:!0,items:z,defaultValue:"group"})]})},v={name:"Переключение списка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[u,r]=o.useState("all"),l={all:128,group:74,private:54};return t.jsxs("div",{style:{display:"grid",gap:12},children:[t.jsx(d,{items:z,value:u,onValueChange:r,size:"lg","aria-label":"Формат экскурсии"}),t.jsxs("span",{className:"im-14-m",style:{color:"var(--color-text-secondary)"},children:[l[u]," экскурсий"]})]})}},sa=[{value:"1",label:"1 число"},{value:"5",label:"5 число"},{value:"10",label:"10 число"},{value:"15",label:"15 число"}],ra={1:{first:"1 ноя",next:"Далее 2 платежа с 1 дек"},5:{first:"5 ноя",next:"Далее 2 платежа с 5 дек"},10:{first:"10 ноя",next:"Далее 2 платежа с 10 дек"},15:{first:"15 ноя",next:"Далее 2 платежа с 15 дек"}},f={name:"Кейсы · Дата платежа M+",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[u,r]=o.useState("1"),l=ra[u];return t.jsxs("div",{style:{display:"grid",gap:16},children:[t.jsx(d,{size:"md",items:sa,value:u,onValueChange:r,"aria-label":"День платежа"}),t.jsx(Ge,{nowLabel:l.first,nowAmount:"4 100 ⃀",caption:l.next,monthlyAmount:"4 100 ⃀ в месяц",count:2})]})}},y={name:"Тест: тап и стрелки",play:async({canvasElement:s,args:u})=>{const r=aa(s);await U.click(r.getByRole("radio",{name:"Групповые"})),await B(r.getByRole("radio",{name:"Групповые"})).toHaveAttribute("aria-checked","true"),await B(u.onValueChange).toHaveBeenLastCalledWith("group"),await U.keyboard("{ArrowRight}"),await B(r.getByRole("radio",{name:"Частные"})).toHaveAttribute("aria-checked","true"),await B(r.getByRole("radio",{name:"Частные"})).toHaveFocus();const l=r.getByRole("radiogroup").firstElementChild.getBoundingClientRect();await B(Math.abs(l.x-r.getByRole("radio",{name:"Частные"}).getBoundingClientRect().x)).toBeLessThan(.5)}},oa=["Playground","States","WithIcons","SwitchingContent","InstallmentDayCase","BehaviourTest"];var J,Z,P,ee,ae;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(P=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:P.source},description:{story:"Тапни вкладку — плашка переедет. Зажми выбранную и веди пальцем — плашка поедет за ним.",...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,ue,ne,se,re;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 12
  }}>
      {(['md', 'lg'] as const).map(size => [5, 4, 3, 2].map(n => <div key={\`\${size}\${n}\`} style={{
      display: 'grid',
      gap: 4
    }}>
            <Caption>
              {size === 'md' ? 'Medium (md)' : 'Large (lg)'}, {n}
            </Caption>
            <SegmentControl items={tabs(n)} size={size} aria-label={\`\${size} \${n}\`} />
          </div>))}
    </div>
}`,...(ne=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ne.source},description:{story:"The Figma matrix 786:1127: Size Medium | Large × Quantity 2–5.",...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var oe,ie,le,ce,de;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'С иконками и недоступный',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16
  }}>
      <SegmentControl aria-label="С иконкой и текстом" items={[{
      value: 'a',
      label: 'Рядом',
      icon: <LocationPinIcon size={16} />
    }, {
      value: 'b',
      label: 'Любимые',
      icon: <HeartIcon size={16} />
    }, {
      value: 'c',
      label: 'Поделились',
      icon: <ShareIcon size={16} />
    }]} />
      <SegmentControl aria-label="Только иконки" size="lg" items={[{
      value: 'a',
      icon: <LocationPinIcon size={16} />,
      'aria-label': 'Рядом'
    }, {
      value: 'b',
      icon: <HeartIcon size={16} />,
      'aria-label': 'Любимые'
    }, {
      value: 'c',
      icon: <ShareIcon size={16} />,
      'aria-label': 'Поделились'
    }]} />
      <SegmentControl aria-label="Недоступный" disabled items={TABS} defaultValue="group" />
    </div>
}`,...(le=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"segment_control_tab Icon=On: an icon with text and an icon only. Disabled is not in Figma yet.",...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var me,ge,pe,be,he;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Переключение списка',
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
  render: function Render() {
    const [v, setV] = useState('all');
    const counts: Record<string, number> = {
      all: 128,
      group: 74,
      private: 54
    };
    return <div style={{
      display: 'grid',
      gap: 12
    }}>
        <SegmentControl items={TABS} value={v} onValueChange={setV} size="lg" aria-label="Формат экскурсии" />
        <span className="im-14-m" style={{
        color: 'var(--color-text-secondary)'
      }}>
          {counts[v]} экскурсий
        </span>
      </div>;
  }
}`,...(pe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Switching a list on a 393 screen: the thumb carries the choice, the content below changes.",...(he=(be=v.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var ve,fe,ye,xe,Be;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Кейсы · Дата платежа M+',
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
  render: function Render() {
    const [day, setDay] = useState('1');
    const plan = PLAN_BY_DAY[day];
    return <div style={{
      display: 'grid',
      gap: 16
    }}>
        <SegmentControl size="md" items={DAYS} value={day} onValueChange={setDay} aria-label="День платежа" />
        <PaymentPlanSummary nowLabel={plan.first} nowAmount="4 100 ⃀" caption={plan.next} monthlyAmount="4 100 ⃀ в месяц" count={2} />
      </div>;
  }
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:`«Оформление заказа», рассрочка M+ (Figma «M+ Graph» 1421:87104, четыре варианта по дню платежа): переключатель
Medium с 4 вкладками «1 число … 15 число» и под ним PaymentPlanSummary с первым платежом и суммой в месяц.`,...(Be=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Be.description}}};var Ce,Ae,Se,we,Ee;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Тест: тап и стрелки',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: 'Групповые'
    }));
    await expect(canvas.getByRole('radio', {
      name: 'Групповые'
    })).toHaveAttribute('aria-checked', 'true');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('group');
    await userEvent.keyboard('{ArrowRight}');
    await expect(canvas.getByRole('radio', {
      name: 'Частные'
    })).toHaveAttribute('aria-checked', 'true');
    await expect(canvas.getByRole('radio', {
      name: 'Частные'
    })).toHaveFocus();
    // from the keyboard the thumb is on the tab at once, no slide
    const thumb = canvas.getByRole('radiogroup').firstElementChild!.getBoundingClientRect();
    await expect(Math.abs(thumb.x - canvas.getByRole('radio', {
      name: 'Частные'
    }).getBoundingClientRect().x)).toBeLessThan(0.5);
  }
}`,...(Se=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source},description:{story:"Interaction test: a tap chooses, arrows move the choice at once.",...(Ee=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Ee.description}}};const ha=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:y,InstallmentDayCase:f,Playground:p,States:b,SwitchingContent:v,WithIcons:h,__namedExportsOrder:oa,default:ta},Symbol.toStringTag,{value:"Module"}));export{f as I,p as P,ha as S,h as W,b as a,v as b};
