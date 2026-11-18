import{j as t,r as s}from"./iframe-DuqTOznb.js";import{c as Qe}from"./cx-2dOUpm6k.js";import{P as ct}from"./PillButton-BwV4GISW.js";import{S as dt}from"./Svg-B1-TtxWQ.js";import{C as et,H as pt}from"./paths-BjPgyxdS.js";import{r as mt}from"./index-BWuNR-wq.js";import{r as ft}from"./motion-C-Q-avtg.js";import{B as $}from"./Button-CKwNO4NU.js";import{L as tt}from"./LikeButton-BdVkZ7Un.js";const J=({children:e,...n})=>t.jsx(dt,{size:24,...n,children:e}),nt=e=>t.jsx(J,{...e,children:t.jsx("path",{d:pt,fill:"var(--control-icon-favorite)"})}),ht="M17 4C20.2 4 21 6.667 21 8C21 9.2286 20.7218 10.3952 20.2646 11.4844C19.702 11.3324 19.1107 11.25 18.5 11.25C14.7721 11.25 11.75 14.2721 11.75 18C11.75 18.6867 11.8533 19.3493 12.0439 19.9736C12.0149 19.9903 12.0003 19.9999 12 20C11.9938 19.9965 3 14.9976 3 8C3 6.667 3.80001 4 7 4C10.2 4 12 6.667 12 8C12 6.667 13.8 4 17 4Z",at=e=>t.jsxs(J,{...e,children:[t.jsx("path",{d:ht,fill:"var(--control-icon-favorite)"}),t.jsx("circle",{cx:"18.5",cy:"18",r:"5.25",fill:"var(--control-icon-favorite)"}),t.jsx("path",{d:"M16.7 16.2L20.3 19.8M20.3 16.2L16.7 19.8",stroke:"var(--control-icon-inverse)",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round"})]}),rt=e=>t.jsxs(J,{...e,children:[t.jsx("path",{d:et,fill:"var(--color-icon-success)"}),t.jsx("path",{d:"M16.7348 9.67829C17.1094 9.27246 17.0841 8.6398 16.6783 8.2652C16.2725 7.8906 15.6398 7.9159 15.2652 8.32172L10.4615 13.5257L8.73481 11.6551C8.3602 11.2492 7.72755 11.2239 7.32172 11.5985C6.9159 11.9731 6.8906 12.6058 7.2652 13.0116L9.72674 15.6783C9.91605 15.8834 10.1824 16 10.4615 16C10.7406 16 11.007 15.8834 11.1963 15.6783L16.7348 9.67829Z",fill:"var(--control-icon-inverse)"})]}),st=({fill:e,...n})=>t.jsxs(J,{...n,children:[t.jsx("path",{d:et,fill:e}),t.jsx("path",{d:"M12 7C11.264 7 10.686 7.65 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.313 7.649 12.736 7 12 7Z",fill:"var(--control-icon-inverse)"}),t.jsx("path",{d:"M12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339Z",fill:"var(--control-icon-inverse)"})]}),ot=e=>t.jsx(st,{fill:"var(--color-icon-error)",...e}),it=e=>t.jsx(st,{fill:"var(--color-icon-info)",...e});nt.__docgenInfo={description:"",methods:[],displayName:"FavouriteAddedIcon"};at.__docgenInfo={description:"",methods:[],displayName:"FavouriteRemovedIcon"};rt.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};ot.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};it.__docgenInfo={description:"",methods:[],displayName:"InfoIcon"};const vt="_snackbar_vszz0_6",gt="_icon_vszz0_32",bt="_text_vszz0_45",yt="_title_vszz0_54",xt="_subtitle_vszz0_63",wt="_action_vszz0_73",kt="_host_vszz0_78",Ct="_list_vszz0_94",St="_toast_vszz0_102",w={snackbar:vt,icon:gt,text:bt,title:yt,subtitle:xt,action:wt,host:kt,list:Ct,toast:St},Et={favourite:t.jsx(nt,{}),unfavourite:t.jsx(at,{}),success:t.jsx(rt,{}),error:t.jsx(ot,{}),info:t.jsx(it,{})},_=s.forwardRef(function({title:n,subtitle:a,tone:o="success",icon:u,action:d,onAction:c,className:A,...I},b){return t.jsxs("div",{ref:b,className:Qe(w.snackbar,A),"data-tone":o,...I,children:[t.jsx("span",{className:w.icon,children:u??Et[o]}),t.jsxs("span",{className:w.text,children:[t.jsx("span",{className:w.title,children:n}),a&&t.jsx("span",{className:w.subtitle,children:a})]}),d&&t.jsx(ct,{variant:"white",className:w.action,onClick:()=>{var m;(m=d.onClick)==null||m.call(d),c==null||c()},children:d.label})]})});_.__docgenInfo={description:`Snackbar (Figma «Snackbar new» 1068:6441): a 48 px dark glass pill — tone icon, title, optional subtitle and
a white action pill. This is the static look; SnackbarHost + snackbar() show, stack and dismiss it.`,methods:[],displayName:"Snackbar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Second line, IM-12 R (Figma «Subtitle»)."},tone:{required:!1,tsType:{name:"union",raw:"'favourite' | 'unfavourite' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'favourite'"},{name:"literal",value:"'unfavourite'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Figma State: Add favourite → favourite, Delete favourite → unfavourite, Sucess, Error, Info.",defaultValue:{value:"'success'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Own 24 px icon instead of the tone icon."},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Text of the white pill on the right, e.g. «Вернуть», «Открыть». */
  label: string;
  /** Called on tap; the snackbar closes afterwards. */
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Text of the white pill on the right, e.g. «Вернуть», «Открыть»."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Called on tap; the snackbar closes afterwards."}]}},description:"White pill on the right (Figma «Disclouser»: a Pill button Type=white)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after the action, the host uses it to close the snackbar."}}};let g=[],jt=0;const ne=new Set,Q=()=>ne.forEach(e=>e());function p(e){const n=++jt;return g=[{...e,id:n,host:e.host??"default",removed:!1,swiped:!1},...g],Q(),n}p.dismiss=(e,n={})=>{let a=!1;g=g.map(o=>!(e!==void 0?o.id===e:n.host===void 0||o.host===n.host)||o.removed?o:(a=!0,{...o,removed:!0,swiped:!!n.swiped})),a&&Q()};p.clear=e=>{const n=e===void 0?[]:g.filter(a=>a.host!==e);n.length!==g.length&&(g=n,Q())};function Tt(e){const n=g.filter(a=>a.id!==e);n.length!==g.length&&(g=n,Q())}const Bt=e=>(ne.add(e),()=>ne.delete(e)),ce=()=>g;function Dt(e){const n=s.useSyncExternalStore(Bt,ce,ce);return s.useMemo(()=>n.filter(a=>a.host===e),[n,e])}const _t={duration:400,lifetime:4e3,gap:14,expandedGap:8,scaleStep:.05,visible:3,swipeDistance:45,swipeVelocity:.11,reduce:!1};function At(e){const n=ft(e),a=(o,u)=>{const d=parseFloat(n.value(o,String(u)));return Number.isFinite(d)?d:u};return{duration:n.duration("--snackbar-motion-duration",400),lifetime:n.time("--snackbar-lifetime",4e3),gap:n.length("--snackbar-motion-gap",14),expandedGap:n.length("--snackbar-motion-expanded-gap",8),scaleStep:a("--snackbar-motion-scale-step",.05),visible:Math.max(1,Math.round(a("--snackbar-motion-visible",3))),swipeDistance:n.length("--snackbar-motion-swipe-distance",45),swipeVelocity:a("--snackbar-motion-swipe-velocity",.11),reduce:n.reduce}}function It(){const[e,n]=s.useState(typeof document<"u"&&document.hidden);return s.useEffect(()=>{const a=()=>n(document.hidden);return document.addEventListener("visibilitychange",a),()=>document.removeEventListener("visibilitychange",a)},[]),e}const re=s.forwardRef(function({id:n="default",strategy:a="fixed",top:o,expand:u=!1,className:d,style:c,...A},I){const b=Dt(n),m=s.useRef(null),[y,ee]=s.useState(_t),[F,k]=s.useState({}),[D,R]=s.useState(!1),[x,W]=s.useState(!1),[V,C]=s.useState(!1),[G,S]=s.useState(!1),K=It(),E=b.filter(r=>!r.removed),j=E.length;s.useLayoutEffect(()=>{m.current&&ee(At(m.current))},[b.length]),s.useEffect(()=>{if(!x)return;const r=v=>{m.current&&!m.current.contains(v.target)&&W(!1)};return document.addEventListener("pointerdown",r,!0),()=>document.removeEventListener("pointerdown",r,!0)},[x]),s.useEffect(()=>{j<=1&&W(!1)},[j]);const Y=u||(D||x)&&j>1,Z=D||x||V||K||G,i=s.useCallback(r=>{C(r),!r&&m.current&&!m.current.matches(":hover")&&R(!1)},[]),l=s.useCallback((r,v)=>{k(T=>T[r]===v?T:{...T,[r]:v})},[]);s.useEffect(()=>{k(r=>{const v=new Set(b.map(B=>B.id)),T=Object.keys(r).map(Number);return T.every(B=>v.has(B))?r:Object.fromEntries(T.filter(B=>v.has(B)).map(B=>[B,r[B]]))})},[b]);const f=r=>F[r.id]??48,h=E[0]?f(E[0]):48,te=E.slice(0,y.visible),lt=j?Y?te.reduce((r,v)=>r+f(v),0)+y.expandedGap*(te.length-1):h+y.gap*(te.length-1):0,ue=new Map;E.reduce((r,v,T)=>(ue.set(v.id,r+T*y.expandedGap),r+f(v)),0);const le=t.jsx("section",{"aria-label":"Уведомления",...A,ref:I,className:Qe(w.host,d),"data-strategy":a,"data-snackbar-host":"",style:o?{"--_top":o,...c}:c,children:t.jsx("ol",{ref:m,className:w.list,"data-expanded":Y||void 0,style:{height:lt},onPointerEnter:r=>r.pointerType==="mouse"&&R(!0),onPointerLeave:r=>r.pointerType==="mouse"&&!V&&R(!1),onPointerDown:r=>r.pointerType!=="mouse"&&j>1&&W(!0),onFocus:()=>S(!0),onBlur:r=>{r.currentTarget.contains(r.relatedTarget)||S(!1)},"aria-live":"polite","aria-relevant":"additions text",children:b.map(r=>t.jsx(Ft,{item:r,index:E.indexOf(r),count:j,offset:ue.get(r.id)??0,frontHeight:h,expanded:Y,motion:y,paused:Z,onHeight:l,onDragging:i},r.id))})});return a==="fixed"&&typeof document<"u"?mt.createPortal(le,document.body):le});function Ft({item:e,index:n,count:a,offset:o,frontHeight:u,expanded:d,motion:c,paused:A,onHeight:I,onDragging:b}){const m=s.useRef(null),[y,ee]=s.useState(!1),F=s.useRef({y:"0px",front:!0}),k=s.useRef(null),D=s.useRef(e.duration??c.lifetime),R=s.useRef(!1);s.useLayoutEffect(()=>{var h;const i=(h=m.current)==null?void 0:h.firstElementChild;if(!i)return;const l=()=>I(e.id,i.offsetHeight);l();const f=new ResizeObserver(l);return f.observe(i),()=>f.disconnect()},[e.id,I]),s.useEffect(()=>{const i=requestAnimationFrame(()=>ee(!0));return()=>cancelAnimationFrame(i)},[]),s.useEffect(()=>{if(R.current||(D.current=e.duration??c.lifetime),e.removed||A||!y||!Number.isFinite(D.current))return;R.current=!0;const i=Date.now(),l=window.setTimeout(()=>p.dismiss(e.id),Math.max(0,D.current));return()=>{window.clearTimeout(l),D.current-=Date.now()-i}},[e.id,e.removed,A,y,e.duration,c.lifetime]),s.useEffect(()=>{if(!e.removed)return;const i=window.setTimeout(()=>Tt(e.id),c.duration+50);return()=>window.clearTimeout(i)},[e.id,e.removed,c.duration]);const x=n===0,W=!x&&n>0,V=n>=0&&n<c.visible;let C="0px",G=1,S=1;if(!y)C=c.reduce?"0px":"-100%",S=0;else if(e.removed)C=c.reduce?F.current.y:F.current.front||e.swiped?"-100%":F.current.y,S=0;else if(d)C=`${o}px`,S=V?1:0;else{const i=Math.min(n,c.visible-1);C=`${i*c.gap}px`,G=1-i*c.scaleStep,S=V?1:0}!e.removed&&y&&(F.current={y:C,front:x});const K=!d&&W,E={transform:`translateY(${C}) scale(${G})`,opacity:S,zIndex:n>=0?a-n:0,height:K?u:void 0},j=i=>{k.current||e.removed||i.button!==0||i.target.closest("button")||!x&&!d||(k.current={pointer:i.pointerId,startY:i.clientY,t:performance.now(),dy:0,moved:!1},i.currentTarget.setPointerCapture(i.pointerId),b(!0))},Y=i=>{const l=k.current,f=m.current;if(!l||!f||i.pointerId!==l.pointer)return;const h=i.clientY-l.startY;!l.moved&&Math.abs(h)<4||(l.moved=!0,l.dy=h<=0?h:h/(1.5+h/20),f.style.transition="none",f.style.translate=`0 ${l.dy}px`)},Z=i=>{const l=k.current,f=m.current;if(l&&i.pointerId!==l.pointer||(k.current=null,b(!1),!l||!f||!l.moved))return;const h=Math.abs(l.dy)/Math.max(1,performance.now()-l.t);if(f.style.transition="",l.dy<=-c.swipeDistance||l.dy<0&&h>c.swipeVelocity){p.dismiss(e.id,{swiped:!0});return}f.style.translate="0 0"};return t.jsx("li",{ref:m,className:w.toast,"data-front":x||void 0,"data-behind":K||void 0,"data-removed":e.removed||void 0,"data-swiped":e.swiped||void 0,role:e.tone==="error"?"alert":void 0,"aria-atomic":"true",style:E,onPointerDown:j,onPointerMove:Y,onPointerUp:Z,onPointerCancel:Z,children:t.jsx(_,{title:e.title,subtitle:e.subtitle,tone:e.tone,icon:e.icon,action:e.action,onAction:()=>p.dismiss(e.id)})})}re.__docgenInfo={description:`Where snackbars appear: put it once on the screen, then call snackbar() from anywhere.

The Sonner model (Emil Kowalski, «Building a toast component»), mirrored to the top:
- a new snackbar slides in from above (translateY(-100%) → 0) in 400 ms with CSS ease;
- collapsed, the ones behind peek out 14 px lower each and 5 % smaller, all as tall as the front one,
  their content hidden; three are visible, the rest wait behind;
- hover (mouse) or a tap (touch) expands the stack: each one moves to the sum of the heights above it
  plus 8 px gaps; gaps are filled so the hover is not lost between them; a tap outside collapses it;
- transitions, not keyframes, so adding several quickly retargets smoothly;
- swipe up to dismiss: 45 px, or any flick faster than 0.11 px/ms; dragging down meets friction;
- 4 s lifetime, paused while expanded, while a finger is on it and while the tab is hidden.`,methods:[],displayName:"SnackbarHost",props:{id:{required:!1,tsType:{name:"string"},description:"Host id, matches snackbar({ host }). Default 'default'. (Not the DOM id.)",defaultValue:{value:"'default'",computed:!1}},strategy:{required:!1,tsType:{name:"union",raw:"'fixed' | 'absolute'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'absolute'"}]},description:"'fixed' to the viewport (the app) or 'absolute' inside a positioned parent (a screen mock-up).",defaultValue:{value:"'fixed'",computed:!1}},top:{required:!1,tsType:{name:"string"},description:"Distance from the top. Default: safe area + spacing/md (12, as in Figma)."},expand:{required:!1,tsType:{name:"boolean"},description:"Keep the stack expanded (Sonner «expand»).",defaultValue:{value:"false",computed:!1}}}};const{expect:X,userEvent:de,waitFor:pe,within:ae}=__STORYBOOK_MODULE_TEST__,Rt={title:"Components/Snackbar",component:_,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1068-6441"}},args:{title:"Добавлено в избранное",tone:"favourite",subtitle:"",action:{label:"Открыть"}},argTypes:{tone:{control:"inline-radio",options:["favourite","unfavourite","success","error","info"]},title:{control:"text"},subtitle:{control:"text"},icon:{control:!1},onAction:{control:!1}}},se="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",Nt=({children:e})=>t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:e}),N={render:e=>t.jsxs("div",{style:{position:"relative",display:"grid",placeItems:"center",width:393,maxWidth:"100%",height:240,overflow:"hidden",borderRadius:24,background:"var(--color-bg-page)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx($,{onClick:()=>{var n;return p({host:"playground",tone:e.tone,title:e.title,subtitle:e.subtitle||void 0,icon:e.icon,action:(n=e.action)!=null&&n.label?e.action:void 0})},children:"Показать снекбар"}),t.jsx(re,{id:"playground",strategy:"absolute",top:"12px"})]})},zt=[{tone:"favourite",title:"Добавлено в избранное",action:"Открыть"},{tone:"unfavourite",title:"Удалено из избранного",action:"Вернуть"},{tone:"success",title:"Номер заказа скопирован",action:"Готово"},{tone:"error",title:"Неправильно введён код",action:"Повторить"},{tone:"info",title:"Обратите внимание",action:"Подробнее"}],z={name:"Все состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 330px), 393px))",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%"},"data-testid":"states",children:[{name:"Над белым экраном (bg/page)",bg:"var(--color-bg-page)"},{name:"Над обложкой",bg:se}].map(e=>t.jsxs("div",{"data-surface":"",style:{display:"grid",gap:12,padding:16,borderRadius:24,background:e.bg,boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx(Nt,{children:e.name}),zt.map(n=>t.jsx(_,{tone:n.tone,title:n.title,action:{label:n.action}},n.tone)),t.jsx(_,{tone:"favourite",title:"Добавлено в избранное",subtitle:"Бишкек: неочевидный и невероятный",action:{label:"Открыть"}}),t.jsx(_,{tone:"success",title:"Номер заказа скопирован"})]},e.name))})},L={name:"Тест: плашка не шире контейнера",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",padding:16,boxSizing:"border-box",width:361,maxWidth:"100%"},children:t.jsx(_,{tone:"favourite",title:"Добавлено в избранное",subtitle:"Бишкек: неочевидный и невероятный маршрут на два дня",action:{label:"Открыть"},"data-testid":"pill"})}),play:async({canvasElement:e})=>{const n=ae(e).getByTestId("pill"),a=n.parentElement;await X(n.getBoundingClientRect().width).toBeLessThanOrEqual(a.getBoundingClientRect().width-32+.5)}};function oe({children:e,dark:n,host:a}){return t.jsxs("div",{style:{position:"relative",width:393,height:852,maxWidth:"100%",overflow:"hidden",borderRadius:40,background:"var(--color-bg-page)",boxShadow:"0 0 0 1px var(--color-border-default)"},children:[t.jsx("div",{className:"im-16-sb",style:{position:"absolute",top:14,left:32,zIndex:60,color:n?"var(--color-text-inverse-constant-primary)":"var(--color-text-primary)"},children:"9:41"}),e,t.jsx(re,{id:a,strategy:"absolute",top:"56px"})]})}const U="Бишкек: неочевидный и невероятный";function ut(e,n,a,o){p(n?{host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:a,action:{label:"Открыть"}}:{host:e,tone:"unfavourite",title:"Удалено из избранного",subtitle:a,action:{label:"Вернуть",onClick:o}})}function Lt(){const[e,n]=s.useState(!1),a="detail";return t.jsxs(oe,{dark:!0,host:a,children:[t.jsx("div",{style:{height:520,background:se,position:"relative"},children:t.jsx("div",{style:{position:"absolute",bottom:16,right:16,borderRadius:999,background:"var(--control-bg-overlay-default)"},children:t.jsx(tt,{liked:e,name:U,onLikedChange:o=>{n(o),ut(a,o,U,()=>n(!0))}})})}),t.jsxs("div",{style:{padding:16,display:"grid",gap:8},children:[t.jsx("span",{className:"im-24-b",style:{color:"var(--color-text-primary)"},children:U}),t.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:"Тапни сердце на обложке: снекбар въезжает сверху поверх фото. Сними лайк — появится «Вернуть»."})]})]})}const O={name:"Кейс: детальная, поверх обложки",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(Lt,{})},Ot=[{title:"Ала-Арча: на электромобиле из отеля",price:"20 904 ⃀"},{title:"Бишкек как столица стрит-арта",price:"7 292 ⃀"},{title:"Иссык-Куль и Каракол за два дня",price:"35 099 ⃀"},{title:"Конный поход к озеру Кель-Суу",price:"27 224 ⃀"}];function Ht(){const e="catalog",[n,a]=s.useState({}),o=(u,d)=>a(c=>({...c,[u]:d}));return t.jsx(oe,{host:e,children:t.jsxs("div",{style:{padding:"56px 16px 16px",display:"grid",gap:12},children:[t.jsx("span",{className:"im-24-b",style:{color:"var(--color-text-primary)"},children:"Каталог"}),Ot.map(u=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"88px 1fr 48px",gap:12,alignItems:"center"},children:[t.jsx("div",{style:{height:88,borderRadius:16,background:se}}),t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("span",{className:"im-16-m",style:{color:"var(--color-text-primary)"},children:u.title}),t.jsx("span",{className:"im-14-s",style:{color:"var(--color-text-primary)"},children:u.price})]}),t.jsx(tt,{variant:"outline",liked:!!n[u.title],name:u.title,style:{color:"var(--control-icon-secondary)"},onLikedChange:d=>{o(u.title,d),ut(e,d,u.title,()=>o(u.title,!0))}})]},u.title))]})})}const H={name:"Кейс: каталог, над белым",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(Ht,{})};function ie({host:e,autostack:n}){return s.useEffect(()=>{if(n)return p({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45",duration:1/0}),p({host:e,tone:"success",title:"Номер заказа скопирован",duration:1/0}),p({host:e,tone:"unfavourite",title:"Удалено из избранного",action:{label:"Вернуть"},duration:1/0}),p({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:U,action:{label:"Открыть"},duration:1/0}),()=>p.clear(e)},[e,n]),t.jsx(oe,{host:e,children:t.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:40,display:"grid",gap:8},children:[n&&t.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)",textAlign:"center",paddingBottom:8},children:"Наведи курсор или тапни по стопке, чтобы раскрыть. Смахни вверх, чтобы закрыть."}),t.jsx($,{fullWidth:!0,onClick:()=>p({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:U,action:{label:"Открыть"}}),children:"Добавить в избранное"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[t.jsx($,{variant:"secondary",size:44,onClick:()=>p({host:e,tone:"success",title:"Номер заказа скопирован"}),children:"Успех"}),t.jsx($,{variant:"secondary",size:44,onClick:()=>p({host:e,tone:"error",title:"Неправильно введён код",action:{label:"Повторить"}}),children:"Ошибка"}),t.jsx($,{variant:"secondary",size:44,onClick:()=>p({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45"}),children:"Инфо"})]})]})})}const M={name:"Кейс: показать снекбар кнопкой",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(ie,{host:"buttons"})},q={name:"Кейс: стопка",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(ie,{host:"stack",autostack:!0})},P={name:"Тест: показать и закрыть",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(ie,{host:"test"}),play:async({canvasElement:e})=>{const n=ae(e);await de.click(n.getByRole("button",{name:"Добавить в избранное"}));const a=e.querySelector('ol[aria-live="polite"]');await X(a).toBeTruthy();const o=await pe(()=>{const u=a.querySelector("li");if(!u)throw new Error("no snackbar yet");return u});await X(o).toHaveTextContent("Добавлено в избранное"),await de.click(ae(o).getByRole("button",{name:"Открыть"})),await pe(()=>X(a.querySelector("li")).toBeNull(),{timeout:2e3})}},Mt=["Playground","AllStates","FitsContainerTest","OverCoverCase","OverWhiteCase","ButtonsCase","StackCase","ShowTest"];var me,fe,he,ve,ge;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <div style={{
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    width: 393,
    maxWidth: '100%',
    height: 240,
    overflow: 'hidden',
    borderRadius: 24,
    background: 'var(--color-bg-page)',
    boxShadow: 'inset 0 0 0 1px var(--color-border-default)'
  }}>
      <Button onClick={() => snackbar({
      host: 'playground',
      tone: args.tone,
      title: args.title,
      subtitle: args.subtitle || undefined,
      icon: args.icon,
      action: args.action?.label ? args.action : undefined
    })}>
        Показать снекбар
      </Button>
      <SnackbarHost id="playground" strategy="absolute" top="12px" />
    </div>
}`,...(he=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:he.source},description:{story:"Our Button in the middle shows a snackbar with the props from the table; it slides in at the top of the frame.",...(ge=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:ge.description}}};var be,ye,xe,we,ke;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 330px), 393px))',
    gap: 16,
    padding: 16,
    boxSizing: 'border-box',
    maxWidth: '100%'
  }} data-testid="states">
      {[{
      name: 'Над белым экраном (bg/page)',
      bg: 'var(--color-bg-page)'
    }, {
      name: 'Над обложкой',
      bg: PHOTO
    }].map(surface => <div key={surface.name} data-surface="" style={{
      display: 'grid',
      gap: 12,
      padding: 16,
      borderRadius: 24,
      background: surface.bg,
      boxShadow: 'inset 0 0 0 1px var(--color-border-default)'
    }}>
          <Caption>{surface.name}</Caption>
          {STATES.map(s => <Snackbar key={s.tone} tone={s.tone} title={s.title} action={{
        label: s.action
      }} />)}
          <Snackbar tone="favourite" title="Добавлено в избранное" subtitle="Бишкек: неочевидный и невероятный" action={{
        label: 'Открыть'
      }} />
          <Snackbar tone="success" title="Номер заказа скопирован" />
        </div>)}
    </div>
}`,...(xe=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:xe.source},description:{story:"Figma states over a white screen and over a cover photo: with an action, with a subtitle, plain.",...(ke=(we=z.parameters)==null?void 0:we.docs)==null?void 0:ke.description}}};var Ce,Se,Ee,je,Te;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Тест: плашка не шире контейнера',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    padding: 16,
    boxSizing: 'border-box',
    width: 361,
    maxWidth: '100%'
  }}>
      <Snackbar tone="favourite" title="Добавлено в избранное" subtitle="Бишкек: неочевидный и невероятный маршрут на два дня" action={{
      label: 'Открыть'
    }} data-testid="pill" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pill = within(canvasElement).getByTestId('pill');
    const parent = pill.parentElement!;
    await expect(pill.getBoundingClientRect().width).toBeLessThanOrEqual(parent.getBoundingClientRect().width - 32 + 0.5);
  }
}`,...(Ee=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:"A long subtitle (nowrap) must be cut with an ellipsis, not widen the pill past its container.",...(Te=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};var Be,De,_e,Ae,Ie;O.parameters={...O.parameters,docs:{...(Be=O.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Кейс: детальная, поверх обложки',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <DetailScreen />
}`,...(_e=(De=O.parameters)==null?void 0:De.docs)==null?void 0:_e.source},description:{story:"Detail page: the snackbar over the cover photo, the heart toggles it (with «Вернуть» on removal).",...(Ie=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.description}}};var Fe,Re,Ne,ze,Le;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Кейс: каталог, над белым',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <CatalogScreen />
}`,...(Ne=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source},description:{story:"Catalog on a white screen: several hearts in a row — tap a few quickly to see the stack.",...(Le=(ze=H.parameters)==null?void 0:ze.docs)==null?void 0:Le.description}}};var Oe,He,Me,qe,Pe;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Кейс: показать снекбар кнопкой',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="buttons" />
}`,...(Me=(He=M.parameters)==null?void 0:He.docs)==null?void 0:Me.source},description:{story:"Our Button shows a snackbar; press several times to build a stack, they leave one by one after 4 s.",...(Pe=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:Pe.description}}};var We,Ve,Ye,$e,Ue;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Кейс: стопка',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="stack" autostack />
}`,...(Ye=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source},description:{story:"Four snackbars at once (they stay): the collapsed stack, hover / tap to expand, swipe up to close.",...(Ue=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ue.description}}};var Ge,Ke,Ze,Xe,Je;P.parameters={...P.parameters,docs:{...(Ge=P.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Тест: показать и закрыть',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="test" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Добавить в избранное'
    }));
    // the list is the live region (polite), the snackbar is added to it
    const region = canvasElement.querySelector('ol[aria-live="polite"]') as HTMLElement;
    await expect(region).toBeTruthy();
    const item = await waitFor(() => {
      const li = region.querySelector('li');
      if (!li) throw new Error('no snackbar yet');
      return li as HTMLElement;
    });
    await expect(item).toHaveTextContent('Добавлено в избранное');
    await userEvent.click(within(item).getByRole('button', {
      name: 'Открыть'
    }));
    await waitFor(() => expect(region.querySelector('li')).toBeNull(), {
      timeout: 2000
    });
  }
}`,...(Ze=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source},description:{story:"Interaction test: a tap shows it as a status, the action closes it, Escape-free.",...(Je=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Je.description}}};const Zt=Object.freeze(Object.defineProperty({__proto__:null,AllStates:z,ButtonsCase:M,FitsContainerTest:L,OverCoverCase:O,OverWhiteCase:H,Playground:N,ShowTest:P,StackCase:q,__namedExportsOrder:Mt,default:Rt},Symbol.toStringTag,{value:"Module"}));export{z as A,M as B,O,N as P,Zt as S,H as a,q as b};
