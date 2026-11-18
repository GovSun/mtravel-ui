import{r as o,j as u}from"./iframe-DuqTOznb.js";import{c as $e}from"./cx-2dOUpm6k.js";import{u as We}from"./mergeRefs-BPT53vMC.js";import{u as Ye}from"./useControllableState-QyUXWn2y.js";import{u as Xe}from"./useInstantAfterKey-D0TlCdRr.js";import{L as G}from"./places-z-kxph-t.js";import{H as K,S as Q}from"./general-DYSfllt2.js";const Ge="_root_1xgcn_7",Ke="_thumb_1xgcn_37",Qe="_thumbFill_1xgcn_48",Ue="_tab_1xgcn_62",Je="_icon_1xgcn_98",Ze="_label_1xgcn_109",g={root:Ge,thumb:Ke,thumbFill:Qe,tab:Ue,icon:Je,label:Ze},c=o.forwardRef(function({items:n,value:r,defaultValue:d,onValueChange:we,size:Re="md",disabled:x=!1,className:je,style:De,onPointerDown:E,onPointerMove:S,onPointerUp:A,onPointerCancel:w,onLostPointerCapture:R,onKeyDown:j,..._e},Te){var $;const[N,ke]=Ye(r,d??(($=n[0])==null?void 0:$.value)??"",we),i=Math.max(0,n.findIndex(e=>e.value===N)),[D,M]=o.useState(null),[Ie,_]=o.useState(null),[ze,V]=o.useState(!1),O=o.useRef(null),H=o.useRef([]),m=o.useRef(null),C=o.useRef(!1),T=o.useRef(void 0);o.useEffect(()=>()=>window.clearTimeout(T.current),[]);const k=(e,a)=>{var W,Y;const t=O.current;if(!t)return a;if(e.clientX===0&&e.clientY===0){const X=(Y=(W=e.target).closest)==null?void 0:Y.call(W,"[data-index]");return X?Number(X.getAttribute("data-index")):a}const l=t.getBoundingClientRect(),Le=Math.floor((e.clientX-l.left)/l.width*n.length);return Math.min(n.length-1,Math.max(0,Le))},F=e=>{const a=n[e];a&&a.value!==N&&ke(a.value)},I=()=>{m.current=null,M(null),_(null),V(!1),window.clearTimeout(T.current),T.current=window.setTimeout(()=>{C.current=!1},0)},[Ne,q]=Xe(i),Me=We(O,Te),Ve=e=>{var t,l;if(E==null||E(e),e.defaultPrevented||x||e.button!==0||m.current)return;const a=k(e,i);q(!1),m.current={id:e.pointerId,from:a,drag:a===i},C.current=!0,a===i?V(!0):_(a),(l=(t=e.currentTarget).setPointerCapture)==null||l.call(t,e.pointerId)},Oe=e=>{S==null||S(e);const a=m.current;if(!a||a.id!==e.pointerId)return;const t=k(e,a.from);a.drag?M(t):_(t===a.from?t:null)},He=e=>{A==null||A(e);const a=m.current;if(!a||a.id!==e.pointerId)return;const t=k(e,a.drag?D??a.from:a.from);(a.drag||t===a.from)&&F(t),I()},qe=e=>{var l;if(j==null||j(e),x||e.defaultPrevented)return;const a=n.length-1,t=e.key==="ArrowRight"||e.key==="ArrowDown"?Math.min(a,i+1):e.key==="ArrowLeft"||e.key==="ArrowUp"?Math.max(0,i-1):e.key==="Home"?0:e.key==="End"?a:null;t!==null&&(e.preventDefault(),q(!0),F(t),(l=H.current[t])==null||l.focus())},L=D??i;return u.jsxs("div",{ref:Me,role:"radiogroup","aria-disabled":x||void 0,className:$e(g.root,je),"data-size":Re,"data-disabled":x||void 0,"data-instant":Ne||void 0,"data-dragging":D!==null||void 0,style:{...De,"--n":n.length,"--i":L},onPointerDown:Ve,onPointerMove:Oe,onPointerUp:He,onPointerCancel:e=>{w==null||w(e),I()},onLostPointerCapture:e=>{R==null||R(e),m.current&&I()},onKeyDown:qe,..._e,children:[u.jsx("span",{className:g.thumb,"aria-hidden":"true",children:u.jsx("span",{className:g.thumbFill,"data-pressed":ze||void 0})}),n.map((e,a)=>u.jsxs("button",{ref:t=>{H.current[a]=t},type:"button",role:"radio","data-index":a,"aria-checked":a===i,"aria-label":e["aria-label"],tabIndex:a===i?0:-1,disabled:x,className:g.tab,"data-active":a===L||void 0,"data-pressed":Ie===a||void 0,onClick:()=>{if(C.current){C.current=!1;return}F(a)},children:[e.icon&&u.jsx("span",{className:g.icon,"aria-hidden":"true",children:e.icon}),e.label!==void 0&&u.jsx("span",{className:g.label,children:e.label})]},e.value))]})});c.__docgenInfo={description:`Segment control (Figma segment_control 786:1127 + segment_control_tab 786:1070): 2–5 equal tabs on a grey track,
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
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactNode",required:!1},description:"Text, IM-14 B (Figma Text=On)."},{key:"icon",value:{name:"ReactNode",required:!1},description:"16 px icon before the text (Figma Icon=On)."},{key:"aria-label",value:{name:"string",required:!1},description:"Name for an icon-only tab."}]}}],raw:"SegmentItem[]"},description:"2–5 tabs (Figma Quantity)."},value:{required:!1,tsType:{name:"string"},description:"The chosen tab. Controlled."},defaultValue:{required:!1,tsType:{name:"string"},description:"Uncontrolled start value. Default: the first tab."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Figma Size: `md` (Medium) — tabs 32 px, `lg` (Large) — 40 px. Both have a 44 px touch target.",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{expect:B,fn:Pe,userEvent:U,within:ea}=__STORYBOOK_MODULE_TEST__,z=[{value:"all",label:"Все"},{value:"group",label:"Групповые"},{value:"private",label:"Частные"}],aa={title:"Components/SegmentControl",component:c,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=786-1127"}},decorators:[s=>u.jsx("div",{style:{width:361,maxWidth:"100%"},children:u.jsx(s,{})})],args:{items:z,defaultValue:"all",size:"md",disabled:!1,onValueChange:Pe(),"aria-label":"Формат экскурсии"},argTypes:{size:{control:"inline-radio",options:["md","lg"]},items:{control:!1},value:{control:!1}}},ua=({children:s})=>u.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:s}),na=s=>Array.from({length:s},(n,r)=>({value:`t${r}`,label:"Tab"})),p={},b={name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>u.jsx("div",{style:{display:"grid",gap:12},children:["md","lg"].map(s=>[5,4,3,2].map(n=>u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsxs(ua,{children:[s==="md"?"Medium (md)":"Large (lg)",", ",n]}),u.jsx(c,{items:na(n),size:s,"aria-label":`${s} ${n}`})]},`${s}${n}`)))})},h={name:"С иконками и недоступный",parameters:{controls:{disable:!0}},render:()=>u.jsxs("div",{style:{display:"grid",gap:16},children:[u.jsx(c,{"aria-label":"С иконкой и текстом",items:[{value:"a",label:"Рядом",icon:u.jsx(G,{size:16})},{value:"b",label:"Любимые",icon:u.jsx(K,{size:16})},{value:"c",label:"Поделились",icon:u.jsx(Q,{size:16})}]}),u.jsx(c,{"aria-label":"Только иконки",size:"lg",items:[{value:"a",icon:u.jsx(G,{size:16}),"aria-label":"Рядом"},{value:"b",icon:u.jsx(K,{size:16}),"aria-label":"Любимые"},{value:"c",icon:u.jsx(Q,{size:16}),"aria-label":"Поделились"}]}),u.jsx(c,{"aria-label":"Недоступный",disabled:!0,items:z,defaultValue:"group"})]})},v={name:"Переключение списка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,r]=o.useState("all"),d={all:128,group:74,private:54};return u.jsxs("div",{style:{display:"grid",gap:12},children:[u.jsx(c,{items:z,value:n,onValueChange:r,size:"lg","aria-label":"Формат экскурсии"}),u.jsxs("span",{className:"im-14-m",style:{color:"var(--color-text-secondary)"},children:[d[n]," экскурсий"]})]})}},ta=[{value:"1",label:"1 число"},{value:"5",label:"5 число"},{value:"10",label:"10 число"},{value:"15",label:"15 число"}],f={name:"Кейс: день платежа M+",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,r]=o.useState("1"),d={1:"1 ноя",5:"5 ноя",10:"10 ноя",15:"15 ноя"}[n];return u.jsxs("div",{style:{display:"grid",gap:16},children:[u.jsx("span",{className:"im-16-b",children:"Выберите день платежа"}),u.jsx(c,{items:ta,value:n,onValueChange:r,"aria-label":"День платежа"}),u.jsxs("div",{style:{display:"grid",gap:4},children:[u.jsxs("span",{className:"im-16-m",children:[d," · 4 100 ⃀"]}),u.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:"Далее 2 платежа с 1 дек · 4 100 ⃀ в месяц"}),u.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:"Без переплат и комиссий"})]})]})}},y={name:"Тест: тап и стрелки",play:async({canvasElement:s,args:n})=>{const r=ea(s);await U.click(r.getByRole("radio",{name:"Групповые"})),await B(r.getByRole("radio",{name:"Групповые"})).toHaveAttribute("aria-checked","true"),await B(n.onValueChange).toHaveBeenLastCalledWith("group"),await U.keyboard("{ArrowRight}"),await B(r.getByRole("radio",{name:"Частные"})).toHaveAttribute("aria-checked","true"),await B(r.getByRole("radio",{name:"Частные"})).toHaveFocus();const d=r.getByRole("radiogroup").firstElementChild.getBoundingClientRect();await B(Math.abs(d.x-r.getByRole("radio",{name:"Частные"}).getBoundingClientRect().x)).toBeLessThan(.5)}},sa=["Playground","States","WithIcons","SwitchingContent","InstallmentDayCase","BehaviourTest"];var J,Z,P,ee,ae;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:"{}",...(P=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:P.source},description:{story:"Тапни вкладку — плашка переедет. Зажми выбранную и веди пальцем — плашка поедет за ним.",...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var ue,ne,te,se,re;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"The Figma matrix 786:1127: Size Medium | Large × Quantity 2–5.",...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.description}}};var oe,ie,le,ce,de;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
  name: 'Кейс: день платежа M+',
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
    const first = {
      '1': '1 ноя',
      '5': '5 ноя',
      '10': '10 ноя',
      '15': '15 ноя'
    }[day];
    return <div style={{
      display: 'grid',
      gap: 16
    }}>
        <span className="im-16-b">Выберите день платежа</span>
        <SegmentControl items={DAYS} value={day} onValueChange={setDay} aria-label="День платежа" />
        <div style={{
        display: 'grid',
        gap: 4
      }}>
          <span className="im-16-m">
            {first} · 4 100 ⃀
          </span>
          <span className="im-14-r" style={{
          color: 'var(--color-text-secondary)'
        }}>
            Далее 2 платежа с 1 дек · 4 100 ⃀ в месяц
          </span>
          <span className="im-14-r" style={{
          color: 'var(--color-text-secondary)'
        }}>
            Без переплат и комиссий
          </span>
        </div>
      </div>;
  }
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:`«Рассрочка M+» (Figma «Оформление», M+ Graph): день ежемесячного платежа, 4 вкладки Medium. Под переключателем
график платежей: первый платёж, потом по месяцам.`,...(Be=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Be.description}}};var Ce,Fe,Ee,Se,Ae;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source},description:{story:"Interaction test: a tap chooses, arrows move the choice at once.",...(Ae=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ae.description}}};const ga=Object.freeze(Object.defineProperty({__proto__:null,BehaviourTest:y,InstallmentDayCase:f,Playground:p,States:b,SwitchingContent:v,WithIcons:h,__namedExportsOrder:sa,default:aa},Symbol.toStringTag,{value:"Module"}));export{f as I,p as P,ga as S,h as W,b as a,v as b};
