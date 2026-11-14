import{r as u,j as a}from"./iframe-Dr5ib33t.js";import{r as Fe}from"./motion-C-Q-avtg.js";import{u as nt}from"./useControllableState-BCXXtwcd.js";import{T as rt}from"./Tooltip-CQxfA-vT.js";import{S as Ie}from"./SwapNumber--J413Mcm.js";const ut="_slider_18zob_7",at="_track_18zob_27",st="_rail_18zob_42",ot="_range_18zob_49",lt="_thumb_18zob_67",it="_tipAnchor_18zob_119",ct="_tipSwing_18zob_128",dt="_tipPop_18zob_133",j={slider:ut,track:at,rail:st,range:ot,thumb:lt,tipAnchor:it,tipSwing:ct,tipPop:dt},mt=o=>o.toLocaleString("ru-RU"),x=(o,c,i)=>Math.min(i,Math.max(c,o));function $({min:o,max:c,step:i=1,value:q,defaultValue:y,onChange:z,onChangeEnd:w,minDistance:T=i,format:de=mt,labels:$e=["От","До"],tooltip:_=!0,disabled:X=!1,className:We,style:Oe}){const[S,Ke]=nt(q,y??[o,c],z),g=u.useRef(S);g.current=S;const W=Math.max(c-o,Number.EPSILON),me=(String(i).split(".")[1]??"").length,pe=u.useCallback(e=>x(Number((Math.round((e-o)/i)*i+o).toFixed(me)),o,c),[o,c,i,me]),O=u.useCallback(e=>x((e-o)/W,0,1),[o,W]),I=u.useRef(null),L=u.useRef(null),Q=u.useRef([null,null]),E=u.useRef(null),v=u.useRef(null),[C,Y]=u.useState(null),[Z,ee]=u.useState(null),[He,te]=u.useState(null),[k,fe]=u.useState(null),K=u.useRef(0),[Ge,ge]=u.useState(!1),A=[(C==null?void 0:C.thumb)===0?C.p:O(S[0]),(C==null?void 0:C.thumb)===1?C.p:O(S[1])],ne=e=>{const t=g.current;e[0]===t[0]&&e[1]===t[1]||(g.current=e,Ke(e))},re=(e,t)=>{const[n,l]=g.current;return e===0?x(pe(t),o,l-T):x(pe(t),n+T,c)},be=e=>{const[t,n]=g.current;return e===0?[0,O(n-T)]:[O(t+T),1]},ue=u.useRef(null),ae=()=>ue.current=I.current?Fe(I.current):ue.current,H=u.useRef([{x:0,v:0,a:0,w:0},{x:0,v:0,a:0,w:0}]),ve=u.useRef([null,null]),he=u.useRef([null,null]),D=u.useRef(0),R=u.useRef(A);R.current=A;const G=u.useRef(0),se=u.useRef(0),oe=e=>{const t=H.current[e],n=ve.current[e];n&&(n.style.transform=`translate3d(${t.x}px, 0, 0)`);const l=he.current[e];l&&(l.style.transform=t.a?`rotate(${t.a}deg)`:"")},le=u.useCallback(e=>{const t=ue.current??ae(),n=Math.min(.064,Math.max(0,(e-se.current)/1e3));se.current=e;let l=!1;if(t){const r=(b,s)=>{const d=2*Math.PI/Math.max(b,.01);return{k:d*d,c:2*s*d}},f=r(t.duration("--slider-motion-follow-response",200)/1e3,parseFloat(t.value("--slider-motion-follow-damping","0.86"))),m=r(t.duration("--slider-motion-swing-response",320)/1e3,parseFloat(t.value("--slider-motion-swing-damping","0.5"))),p=parseFloat(t.value("--slider-motion-tilt","0.02")),F=parseFloat(t.value("--slider-motion-tilt-max","14deg"));for(const b of[0,1]){const s=H.current[b],d=R.current[b]*D.current;if(t.reduce)s.x=d,s.v=s.a=s.w=0;else{const U=Math.max(1,Math.ceil(n/.004166666666666667)),M=n/U;for(let h=0;h<U;h++){s.v+=(-f.k*(s.x-d)-f.c*s.v)*M,s.x+=s.v*M;const J=x(-p*s.v,-F,F);s.w+=(-m.k*(s.a-J)-m.c*s.w)*M,s.a+=s.w*M}}Math.abs(s.x-d)<.05&&Math.abs(s.v)<2&&Math.abs(s.a)<.05&&Math.abs(s.w)<1?(s.x=d,s.v=s.a=s.w=0):l=!0,oe(b)}}G.current=l?requestAnimationFrame(le):0},[]),xe=u.useCallback(()=>{G.current||(se.current=performance.now(),G.current=requestAnimationFrame(le))},[le]);u.useEffect(()=>()=>{cancelAnimationFrame(G.current),v.current&&cancelAnimationFrame(v.current.raf)},[]),u.useLayoutEffect(()=>{const e=L.current;if(!e)return;const t=new ResizeObserver(()=>{D.current=e.getBoundingClientRect().width;for(const n of[0,1])H.current[n].x=R.current[n]*D.current,oe(n)});return t.observe(e),D.current=e.getBoundingClientRect().width,()=>t.disconnect()},[]),u.useLayoutEffect(()=>{xe()},[A[0],A[1],xe]),u.useLayoutEffect(()=>{if(k===null)return;const e=H.current[k];e.x=R.current[k]*D.current,e.v=e.a=e.w=0,oe(k)},[k]);const ie=e=>{window.clearTimeout(K.current),ae(),fe(e)},ye=e=>{window.clearTimeout(K.current);const t=e&&I.current?Fe(I.current).time("--slider-motion-tooltip-linger",400):0;K.current=window.setTimeout(()=>fe(null),t)};u.useEffect(()=>()=>window.clearTimeout(K.current),[]);const we=(e,t)=>{Y({thumb:e,p:t});const[n,l]=g.current,r=re(e,o+t*W);ne(e===0?[r,l]:[n,r])},Se=()=>{Y(null),ee(null),_&&ye(!0),w==null||w(g.current)},Je=()=>{const e=v.current;return e?(cancelAnimationFrame(e.raf),v.current=null,!0):!1},Qe=(e,t,n)=>{const l=parseFloat(n.value("--slider-motion-inertia-rate","0.99")),r={thumb:e,x:R.current[e]*D.current,v:t,last:performance.now(),raf:0};v.current=r;const f=m=>{if(v.current!==r)return;const p=Math.min(64,m-r.last);r.last=m;const F=Math.pow(l,p);r.x+=Math.abs(1-l)>1e-9?r.v*(F-1)/Math.log(l):r.v*p,r.v*=F;const[b,s]=be(e),d=Math.max(D.current,1);if((r.x<=b*d||r.x>=s*d)&&(r.x=x(r.x,b*d,s*d),r.v=0),we(e,r.x/d),Math.abs(r.v)<.01){v.current=null,Se();return}r.raf=requestAnimationFrame(f)};r.raf=requestAnimationFrame(f)},Ye=(e,t)=>{const n=L.current.getBoundingClientRect();return x((e-t-n.left)/Math.max(n.width,1),0,1)},Ze=e=>{var U,M;if(X||E.current||e.button!==0||!L.current)return;ge(!1);const t=((U=v.current)==null?void 0:U.thumb)??null;Je()&&ee(null);const n=L.current.getBoundingClientRect(),r=(t!==null&&Math.abs(e.clientX-(n.left+R.current[t]*n.width))<=32?Q.current[t]:null)??e.target.closest("[data-thumb]"),[f,m]=R.current;let p,F=0;const b=(((M=Q.current[0])==null?void 0:M.offsetWidth)??40)/2,s=Math.abs(e.clientX-(n.left+f*n.width))<=b,d=Math.abs(e.clientX-(n.left+m*n.width))<=b,Re=s&&d;if(r)p=Number(r.dataset.thumb),F=e.clientX-(n.left+R.current[p]*n.width);else{const h=x((e.clientX-n.left)/n.width,0,1);p=Math.abs(h-f)<Math.abs(h-m)?0:Math.abs(h-f)>Math.abs(h-m)?1:h<f?0:1,Y(null);const J=re(p,o+h*W);ne(p===0?[J,g.current[1]]:[g.current[0],J])}E.current={id:e.pointerId,thumb:p,grab:F,x0:e.clientX,moved:!1,undecided:Re&&!!r,samples:[{x:e.clientX,t:e.timeStamp}]},e.currentTarget.setPointerCapture(e.pointerId),te(p),_&&ie(p)},et=e=>{const t=E.current;if(!t||e.pointerId!==t.id)return;if(t.samples.push({x:e.clientX,t:e.timeStamp}),t.samples.length>8&&t.samples.shift(),t.undecided){if(Math.abs(e.clientX-t.x0)<2)return;t.thumb=e.clientX<t.x0?0:1,t.undecided=!1,te(t.thumb),_&&ie(t.thumb)}t.moved||(t.moved=!0,ee(t.thumb));const[n,l]=be(t.thumb);we(t.thumb,x(Ye(e.clientX,t.grab),n,l))},ce=e=>{const t=E.current;if(!t||e.pointerId!==t.id)return;E.current=null,te(null);const n=ae();if(t.moved&&n&&!n.reduce&&e.type==="pointerup"){const l=t.samples[t.samples.length-1],r=t.samples.filter(p=>e.timeStamp-p.t<80),m=!(e.timeStamp-l.t>n.time("--slider-motion-stale-velocity",45))&&r.length>1?(r[r.length-1].x-r[0].x)/Math.max(1,r[r.length-1].t-r[0].t):0;if(Math.abs(m)>=parseFloat(n.value("--slider-motion-flick-velocity","0.1"))){Qe(t.thumb,m,n);return}}Se()},tt=e=>t=>{if(X)return;const n=g.current[e],l={ArrowRight:i,ArrowUp:i,ArrowLeft:-i,ArrowDown:-i,PageUp:i*10,PageDown:-i*10};let r=null;if(t.key in l?r=n+l[t.key]:t.key==="Home"?r=o:t.key==="End"&&(r=c),r===null)return;t.preventDefault(),ge(!0);const f=re(e,r),m=e===0?[f,g.current[1]]:[g.current[0],f];ne(m),w==null||w(m)},Ce=e=>{const[t,n]=S;return{ref:l=>Q.current[e]=l,className:j.thumb,"data-thumb":e,"data-pressed":He===e||void 0,"data-dragging":Z===e||void 0,style:{"--p":A[e]},role:"slider",tabIndex:X?-1:0,"aria-label":$e[e],"aria-orientation":"horizontal","aria-valuemin":e===0?o:t+T,"aria-valuemax":e===0?n-T:c,"aria-valuenow":S[e],"aria-valuetext":de(S[e]),"aria-disabled":X||void 0,onKeyDown:tt(e),onFocus:l=>{_&&!E.current&&l.currentTarget.matches(":focus-visible")&&ie(e)},onBlur:()=>{_&&!E.current&&!v.current&&ye(!1)}}};return a.jsxs("div",{ref:I,className:[j.slider,We].filter(Boolean).join(" "),style:Oe,"data-disabled":X||void 0,"data-dragging":Z!==null||void 0,"data-instant":Ge||void 0,onPointerDown:Ze,onPointerMove:et,onPointerUp:ce,onPointerCancel:ce,onLostPointerCapture:ce,children:[a.jsx("div",{className:j.track}),a.jsxs("div",{ref:L,className:j.rail,children:[a.jsx("div",{className:j.range,style:{"--a":A[0],"--b":A[1]},"data-dragging":Z!==null||void 0}),a.jsx("div",{...Ce(0)}),a.jsx("div",{...Ce(1)}),_&&[0,1].map(e=>a.jsx("div",{ref:t=>ve.current[e]=t,className:j.tipAnchor,"aria-hidden":"true",children:a.jsx("div",{ref:t=>he.current[e]=t,className:j.tipSwing,children:a.jsx("div",{className:j.tipPop,"data-open":k===e||void 0,children:a.jsx(rt,{children:a.jsx(Ie,{value:S[e],format:de})})})})},e))]})]})}$.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:"Value step. Default 1.",defaultValue:{value:"1",computed:!1}},value:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Controlled value [from, to]."},defaultValue:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"Uncontrolled start value. Default [min, max]."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: RangeValue) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Every new step while dragging (and while it coasts), and on keys."},onChangeEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: RangeValue) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"When the thumb has come to rest after the finger lifted (or after a key): the moment to load results."},minDistance:{required:!1,tsType:{name:"number"},description:"Smallest gap between the thumbs, in values. Default `step`.",defaultValue:{value:"step = 1",computed:!1}},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"How a value is written in the tooltip and for screen readers. Default: ru-RU grouping, «50 000».",defaultValue:{value:"(v: number) => v.toLocaleString('ru-RU')",computed:!1}},labels:{required:!1,tsType:{name:"tuple",raw:"[string, string]",elements:[{name:"string"},{name:"string"}]},description:"Names of the thumbs for screen readers. Default «От», «До».",defaultValue:{value:"['От', 'До']",computed:!1}},tooltip:{required:!1,tsType:{name:"boolean"},description:"Figma «Tooltip»: the value over the thumb while it is held. Default true.",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Figma State=Disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const B=o=>`${o.toLocaleString("ru-RU")} ⃀`,pt={title:"Components/RangeSlider",component:$,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345"}},args:{min:0,max:1e5,step:500,defaultValue:[3e3,5e4],format:B,tooltip:!0,disabled:!1},argTypes:{min:{control:{type:"number",step:500}},max:{control:{type:"number",step:500}},step:{control:{type:"number",min:1}},minDistance:{control:{type:"number",min:0}},tooltip:{control:"boolean"},disabled:{control:"boolean"},value:{control:!1},defaultValue:{control:!1},format:{control:!1},labels:{control:!1},onChange:{control:!1},onChangeEnd:{control:!1}}},Le=({children:o})=>a.jsx("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:"56px 16px 24px",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:o}),Ue=({children:o})=>a.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:o}),P={render:function(c){const[i,q]=u.useState(c.defaultValue??[c.min,c.max]),[y,z]=u.useState(null);return a.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[a.jsx(Le,{children:a.jsx($,{...c,value:i,onChange:q,onChangeEnd:z})}),a.jsxs(Ue,{children:["onChange: ",B(i[0])," – ",B(i[1])," · onChangeEnd: ",y?`${B(y[0])} – ${B(y[1])}`:"—"]})]})}},V={render:o=>a.jsx("div",{style:{display:"grid",gap:16},children:[{label:"Default",props:{}},{label:"Без подсказки (Tooltip = false)",props:{tooltip:!1}},{label:"Disabled",props:{disabled:!0}}].map(({label:c,props:i})=>a.jsxs("div",{style:{display:"grid",gap:4},children:[a.jsx(Ue,{children:c}),a.jsx(Le,{children:a.jsx($,{...o,...i})})]},c))})},N={name:"Цена в фильтрах",render:function(c){const[i,q]=u.useState([3e3,5e4]),y=(z,w)=>a.jsxs("div",{style:{display:"grid",gap:2,padding:"8px 12px",borderRadius:16,background:"var(--color-bg-sunken-subtle)"},children:[a.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:z}),a.jsx("span",{className:"im-16-sb",style:{color:"var(--color-text-primary)"},children:a.jsx(Ie,{value:w,format:B})})]});return a.jsxs("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",display:"grid",gap:16,padding:16,borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[a.jsx("span",{className:"im-18-s",style:{color:"var(--color-text-primary)"},children:"Цена за человека"}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[y("от",i[0]),y("до",i[1])]}),a.jsx("div",{style:{paddingTop:40},children:a.jsx($,{...c,min:0,max:1e5,step:500,value:i,onChange:q})})]})}},ft=["Playground","States","PriceFilterCase"];var je,Ee,Ae,De,Me;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: function Render(args) {
    const [v, setV] = useState<RangeValue>(args.defaultValue ?? [args.min, args.max]);
    const [end, setEnd] = useState<RangeValue | null>(null);
    return <div style={{
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Screen>
          <RangeSlider {...args} value={v} onChange={setV} onChangeEnd={setEnd} />
        </Screen>
        <Caption>
          onChange: {som(v[0])} – {som(v[1])} · onChangeEnd: {end ? \`\${som(end[0])} – \${som(end[1])}\` : '—'}
        </Caption>
      </div>;
  }
}`,...(Ae=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source},description:{story:"Потяни ползунок: над ним сумма, она тянется за ним, как шарик, и меняется целиком, мягко, через размытие. Брось — поедет по инерции.",...(Me=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Me.description}}};var Te,_e,ke,Pe,Ve;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'grid',
    gap: 16
  }}>
      {[{
      label: 'Default',
      props: {}
    }, {
      label: 'Без подсказки (Tooltip = false)',
      props: {
        tooltip: false
      }
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      display: 'grid',
      gap: 4
    }}>
          <Caption>{label}</Caption>
          <Screen>
            <RangeSlider {...args} {...props} />
          </Screen>
        </div>)}
    </div>
}`,...(ke=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:ke.source},description:{story:"Figma State: Default и Disabled. Pressed — это когда ползунок держат (тень уходит, появляется подсказка).",...(Ve=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.description}}};var Ne,Be,qe,ze,Xe;N.parameters={...N.parameters,docs:{...(Ne=N.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Цена в фильтрах',
  render: function Render(args) {
    const [v, setV] = useState<RangeValue>([3000, 50000]);
    const pill = (label: string, value: number) => <div style={{
      display: 'grid',
      gap: 2,
      padding: '8px 12px',
      borderRadius: 16,
      background: 'var(--color-bg-sunken-subtle)'
    }}>
        <span className="im-12-r" style={{
        color: 'var(--color-text-secondary)'
      }}>
          {label}
        </span>
        <span className="im-16-sb" style={{
        color: 'var(--color-text-primary)'
      }}>
          <SwapNumber value={value} format={som} />
        </span>
      </div>;
    return <div style={{
      width: 393,
      maxWidth: '100%',
      boxSizing: 'border-box',
      display: 'grid',
      gap: 16,
      padding: 16,
      borderRadius: 24,
      background: 'var(--color-bg-surface)',
      boxShadow: 'inset 0 0 0 1px var(--color-border-default)'
    }}>
        <span className="im-18-s" style={{
        color: 'var(--color-text-primary)'
      }}>
          Цена за человека
        </span>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8
      }}>
          {pill('от', v[0])}
          {pill('до', v[1])}
        </div>
        <div style={{
        paddingTop: 40
      }}>
          <RangeSlider {...args} min={0} max={100000} step={500} value={v} onChange={setV} />
        </div>
      </div>;
  }
}`,...(qe=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:qe.source},description:{story:"Фильтр «Цена» в каталоге: суммы диапазона сверху меняются вместе с ползунками так же, как в подсказке.",...(Xe=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Xe.description}}};const yt=Object.freeze(Object.defineProperty({__proto__:null,Playground:P,PriceFilterCase:N,States:V,__namedExportsOrder:ft,default:pt},Symbol.toStringTag,{value:"Module"}));export{P,yt as S,V as a,N as b};
