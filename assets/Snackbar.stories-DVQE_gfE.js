import{j as t,r}from"./iframe-DyD5Yel4.js";import{c as Ye}from"./cx-2dOUpm6k.js";import{P as nt}from"./PillButton-Cdj7WtD9.js";import{S as at}from"./Svg-B7GM2ZFd.js";import{C as $e,H as st}from"./paths-BjPgyxdS.js";import{r as rt}from"./index-B4Qwgqau.js";import{r as ot}from"./motion-C-Q-avtg.js";import{B as Y}from"./Button-grGIhY78.js";import{L as ut}from"./LikeButton-BMykRAqT.js";const X=({children:e,...n})=>t.jsx(at,{size:24,...n,children:e}),Ue=e=>t.jsx(X,{...e,children:t.jsx("path",{d:st,fill:"var(--control-icon-favorite)"})}),it="M17 4C20.2 4 21 6.667 21 8C21 9.2286 20.7218 10.3952 20.2646 11.4844C19.702 11.3324 19.1107 11.25 18.5 11.25C14.7721 11.25 11.75 14.2721 11.75 18C11.75 18.6867 11.8533 19.3493 12.0439 19.9736C12.0149 19.9903 12.0003 19.9999 12 20C11.9938 19.9965 3 14.9976 3 8C3 6.667 3.80001 4 7 4C10.2 4 12 6.667 12 8C12 6.667 13.8 4 17 4Z",Ge=e=>t.jsxs(X,{...e,children:[t.jsx("path",{d:it,fill:"var(--control-icon-favorite)"}),t.jsx("circle",{cx:"18.5",cy:"18",r:"5.25",fill:"var(--control-icon-favorite)"}),t.jsx("path",{d:"M16.7 16.2L20.3 19.8M20.3 16.2L16.7 19.8",stroke:"var(--control-icon-inverse)",strokeWidth:"1.35",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ke=e=>t.jsxs(X,{...e,children:[t.jsx("path",{d:$e,fill:"var(--color-icon-success)"}),t.jsx("path",{d:"M16.7348 9.67829C17.1094 9.27246 17.0841 8.6398 16.6783 8.2652C16.2725 7.8906 15.6398 7.9159 15.2652 8.32172L10.4615 13.5257L8.73481 11.6551C8.3602 11.2492 7.72755 11.2239 7.32172 11.5985C6.9159 11.9731 6.8906 12.6058 7.2652 13.0116L9.72674 15.6783C9.91605 15.8834 10.1824 16 10.4615 16C10.7406 16 11.007 15.8834 11.1963 15.6783L16.7348 9.67829Z",fill:"var(--control-icon-inverse)"})]}),Ze=({fill:e,...n})=>t.jsxs(X,{...n,children:[t.jsx("path",{d:$e,fill:e}),t.jsx("path",{d:"M12 7C11.264 7 10.686 7.65 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.313 7.649 12.736 7 12 7Z",fill:"var(--control-icon-inverse)"}),t.jsx("path",{d:"M12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339Z",fill:"var(--control-icon-inverse)"})]}),Xe=e=>t.jsx(Ze,{fill:"var(--color-icon-error)",...e}),Je=e=>t.jsx(Ze,{fill:"var(--color-icon-info)",...e});Ue.__docgenInfo={description:"",methods:[],displayName:"FavouriteAddedIcon"};Ge.__docgenInfo={description:"",methods:[],displayName:"FavouriteRemovedIcon"};Ke.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};Xe.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};Je.__docgenInfo={description:"",methods:[],displayName:"InfoIcon"};const ct="_snackbar_vszz0_6",lt="_icon_vszz0_32",dt="_text_vszz0_45",pt="_title_vszz0_54",ft="_subtitle_vszz0_63",mt="_action_vszz0_73",ht="_host_vszz0_78",bt="_list_vszz0_94",vt="_toast_vszz0_102",w={snackbar:ct,icon:lt,text:dt,title:pt,subtitle:ft,action:mt,host:ht,list:bt,toast:vt},gt={favourite:t.jsx(Ue,{}),unfavourite:t.jsx(Ge,{}),success:t.jsx(Ke,{}),error:t.jsx(Xe,{}),info:t.jsx(Je,{})},_=r.forwardRef(function({title:n,subtitle:a,tone:u="success",icon:h,action:p,onAction:c,className:A,...F},g){return t.jsxs("div",{ref:g,className:Ye(w.snackbar,A),"data-tone":u,...F,children:[t.jsx("span",{className:w.icon,children:h??gt[u]}),t.jsxs("span",{className:w.text,children:[t.jsx("span",{className:w.title,children:n}),a&&t.jsx("span",{className:w.subtitle,children:a})]}),p&&t.jsx(nt,{variant:"white",className:w.action,onClick:()=>{var d;(d=p.onClick)==null||d.call(p),c==null||c()},children:p.label})]})});_.__docgenInfo={description:`Snackbar (Figma «Snackbar new» 1068:6441): a 48 px dark glass pill — tone icon, title, optional subtitle and
a white action pill. This is the static look; SnackbarHost + snackbar() show, stack and dismiss it.`,methods:[],displayName:"Snackbar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Second line, IM-12 R (Figma «Subtitle»)."},tone:{required:!1,tsType:{name:"union",raw:"'favourite' | 'unfavourite' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'favourite'"},{name:"literal",value:"'unfavourite'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Figma State: Add favourite → favourite, Delete favourite → unfavourite, Sucess, Error, Info.",defaultValue:{value:"'success'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Own 24 px icon instead of the tone icon."},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Text of the white pill on the right, e.g. «Вернуть», «Открыть». */
  label: string;
  /** Called on tap; the snackbar closes afterwards. */
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Text of the white pill on the right, e.g. «Вернуть», «Открыть»."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Called on tap; the snackbar closes afterwards."}]}},description:"White pill on the right (Figma «Disclouser»: a Pill button Type=white)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after the action, the host uses it to close the snackbar."}}};let v=[],xt=0;const te=new Set,J=()=>te.forEach(e=>e());function l(e){const n=++xt;return v=[{...e,id:n,host:e.host??"default",removed:!1,swiped:!1},...v],J(),n}l.dismiss=(e,n={})=>{let a=!1;v=v.map(u=>!(e!==void 0?u.id===e:n.host===void 0||u.host===n.host)||u.removed?u:(a=!0,{...u,removed:!0,swiped:!!n.swiped})),a&&J()};l.clear=e=>{const n=e===void 0?[]:v.filter(a=>a.host!==e);n.length!==v.length&&(v=n,J())};function yt(e){const n=v.filter(a=>a.id!==e);n.length!==v.length&&(v=n,J())}const wt=e=>(te.add(e),()=>te.delete(e)),ue=()=>v;function kt(e){const n=r.useSyncExternalStore(wt,ue,ue);return r.useMemo(()=>n.filter(a=>a.host===e),[n,e])}const Et={duration:400,lifetime:4e3,gap:14,expandedGap:8,scaleStep:.05,visible:3,swipeDistance:45,swipeVelocity:.11,reduce:!1};function St(e){const n=ot(e),a=(u,h)=>{const p=parseFloat(n.value(u,String(h)));return Number.isFinite(p)?p:h};return{duration:n.duration("--snackbar-motion-duration",400),lifetime:n.time("--snackbar-lifetime",4e3),gap:n.length("--snackbar-motion-gap",14),expandedGap:n.length("--snackbar-motion-expanded-gap",8),scaleStep:a("--snackbar-motion-scale-step",.05),visible:Math.max(1,Math.round(a("--snackbar-motion-visible",3))),swipeDistance:n.length("--snackbar-motion-swipe-distance",45),swipeVelocity:a("--snackbar-motion-swipe-velocity",.11),reduce:n.reduce}}function Ct(){const[e,n]=r.useState(typeof document<"u"&&document.hidden);return r.useEffect(()=>{const a=()=>n(document.hidden);return document.addEventListener("visibilitychange",a),()=>document.removeEventListener("visibilitychange",a)},[]),e}const ae=r.forwardRef(function({id:n="default",strategy:a="fixed",top:u,expand:h=!1,className:p,style:c,...A},F){const g=kt(n),d=r.useRef(null),[x,Q]=r.useState(Et),[I,k]=r.useState({}),[T,R]=r.useState(!1),[y,P]=r.useState(!1),[W,E]=r.useState(!1),[U,S]=r.useState(!1),G=Ct(),C=g.filter(s=>!s.removed),j=C.length;r.useLayoutEffect(()=>{d.current&&Q(St(d.current))},[g.length]),r.useEffect(()=>{if(!y)return;const s=b=>{d.current&&!d.current.contains(b.target)&&P(!1)};return document.addEventListener("pointerdown",s,!0),()=>document.removeEventListener("pointerdown",s,!0)},[y]),r.useEffect(()=>{j<=1&&P(!1)},[j]);const V=h||(T||y)&&j>1,K=T||y||W||G||U,o=r.useCallback(s=>{E(s),!s&&d.current&&!d.current.matches(":hover")&&R(!1)},[]),i=r.useCallback((s,b)=>{k(B=>B[s]===b?B:{...B,[s]:b})},[]);r.useEffect(()=>{k(s=>{const b=new Set(g.map(D=>D.id)),B=Object.keys(s).map(Number);return B.every(D=>b.has(D))?s:Object.fromEntries(B.filter(D=>b.has(D)).map(D=>[D,s[D]]))})},[g]);const f=s=>I[s.id]??48,m=C[0]?f(C[0]):48,ee=C.slice(0,x.visible),tt=j?V?ee.reduce((s,b)=>s+f(b),0)+x.expandedGap*(ee.length-1):m+x.gap*(ee.length-1):0,re=new Map;C.reduce((s,b,B)=>(re.set(b.id,s+B*x.expandedGap),s+f(b)),0);const oe=t.jsx("section",{"aria-label":"Уведомления",...A,ref:F,className:Ye(w.host,p),"data-strategy":a,"data-snackbar-host":"",style:u?{"--_top":u,...c}:c,children:t.jsx("ol",{ref:d,className:w.list,"data-expanded":V||void 0,style:{height:tt},onPointerEnter:s=>s.pointerType==="mouse"&&R(!0),onPointerLeave:s=>s.pointerType==="mouse"&&!W&&R(!1),onPointerDown:s=>s.pointerType!=="mouse"&&j>1&&P(!0),onFocus:()=>S(!0),onBlur:s=>{s.currentTarget.contains(s.relatedTarget)||S(!1)},"aria-live":"polite","aria-relevant":"additions text",children:g.map(s=>t.jsx(jt,{item:s,index:C.indexOf(s),count:j,offset:re.get(s.id)??0,frontHeight:m,expanded:V,motion:x,paused:K,onHeight:i,onDragging:o},s.id))})});return a==="fixed"&&typeof document<"u"?rt.createPortal(oe,document.body):oe});function jt({item:e,index:n,count:a,offset:u,frontHeight:h,expanded:p,motion:c,paused:A,onHeight:F,onDragging:g}){const d=r.useRef(null),[x,Q]=r.useState(!1),I=r.useRef({y:"0px",front:!0}),k=r.useRef(null),T=r.useRef(e.duration??c.lifetime),R=r.useRef(!1);r.useLayoutEffect(()=>{var m;const o=(m=d.current)==null?void 0:m.firstElementChild;if(!o)return;const i=()=>F(e.id,o.offsetHeight);i();const f=new ResizeObserver(i);return f.observe(o),()=>f.disconnect()},[e.id,F]),r.useEffect(()=>{const o=requestAnimationFrame(()=>Q(!0));return()=>cancelAnimationFrame(o)},[]),r.useEffect(()=>{if(R.current||(T.current=e.duration??c.lifetime),e.removed||A||!x||!Number.isFinite(T.current))return;R.current=!0;const o=Date.now(),i=window.setTimeout(()=>l.dismiss(e.id),Math.max(0,T.current));return()=>{window.clearTimeout(i),T.current-=Date.now()-o}},[e.id,e.removed,A,x,e.duration,c.lifetime]),r.useEffect(()=>{if(!e.removed)return;const o=window.setTimeout(()=>yt(e.id),c.duration+50);return()=>window.clearTimeout(o)},[e.id,e.removed,c.duration]);const y=n===0,P=!y&&n>0,W=n>=0&&n<c.visible;let E="0px",U=1,S=1;if(!x)E=c.reduce?"0px":"-100%",S=0;else if(e.removed)E=c.reduce?I.current.y:I.current.front||e.swiped?"-100%":I.current.y,S=0;else if(p)E=`${u}px`,S=W?1:0;else{const o=Math.min(n,c.visible-1);E=`${o*c.gap}px`,U=1-o*c.scaleStep,S=W?1:0}!e.removed&&x&&(I.current={y:E,front:y});const G=!p&&P,C={transform:`translateY(${E}) scale(${U})`,opacity:S,zIndex:n>=0?a-n:0,height:G?h:void 0},j=o=>{k.current||e.removed||o.button!==0||o.target.closest("button")||!y&&!p||(k.current={pointer:o.pointerId,startY:o.clientY,t:performance.now(),dy:0,moved:!1},o.currentTarget.setPointerCapture(o.pointerId),g(!0))},V=o=>{const i=k.current,f=d.current;if(!i||!f||o.pointerId!==i.pointer)return;const m=o.clientY-i.startY;!i.moved&&Math.abs(m)<4||(i.moved=!0,i.dy=m<=0?m:m/(1.5+m/20),f.style.transition="none",f.style.translate=`0 ${i.dy}px`)},K=o=>{const i=k.current,f=d.current;if(i&&o.pointerId!==i.pointer||(k.current=null,g(!1),!i||!f||!i.moved))return;const m=Math.abs(i.dy)/Math.max(1,performance.now()-i.t);if(f.style.transition="",i.dy<=-c.swipeDistance||i.dy<0&&m>c.swipeVelocity){l.dismiss(e.id,{swiped:!0});return}f.style.translate="0 0"};return t.jsx("li",{ref:d,className:w.toast,"data-front":y||void 0,"data-behind":G||void 0,"data-removed":e.removed||void 0,"data-swiped":e.swiped||void 0,role:e.tone==="error"?"alert":void 0,"aria-atomic":"true",style:C,onPointerDown:j,onPointerMove:V,onPointerUp:K,onPointerCancel:K,children:t.jsx(_,{title:e.title,subtitle:e.subtitle,tone:e.tone,icon:e.icon,action:e.action,onAction:()=>l.dismiss(e.id)})})}ae.__docgenInfo={description:`Where snackbars appear: put it once on the screen, then call snackbar() from anywhere.

The Sonner model (Emil Kowalski, «Building a toast component»), mirrored to the top:
- a new snackbar slides in from above (translateY(-100%) → 0) in 400 ms with CSS ease;
- collapsed, the ones behind peek out 14 px lower each and 5 % smaller, all as tall as the front one,
  their content hidden; three are visible, the rest wait behind;
- hover (mouse) or a tap (touch) expands the stack: each one moves to the sum of the heights above it
  plus 8 px gaps; gaps are filled so the hover is not lost between them; a tap outside collapses it;
- transitions, not keyframes, so adding several quickly retargets smoothly;
- swipe up to dismiss: 45 px, or any flick faster than 0.11 px/ms; dragging down meets friction;
- 4 s lifetime, paused while expanded, while a finger is on it and while the tab is hidden.`,methods:[],displayName:"SnackbarHost",props:{id:{required:!1,tsType:{name:"string"},description:"Host id, matches snackbar({ host }). Default 'default'. (Not the DOM id.)",defaultValue:{value:"'default'",computed:!1}},strategy:{required:!1,tsType:{name:"union",raw:"'fixed' | 'absolute'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'absolute'"}]},description:"'fixed' to the viewport (the app) or 'absolute' inside a positioned parent (a screen mock-up).",defaultValue:{value:"'fixed'",computed:!1}},top:{required:!1,tsType:{name:"string"},description:"Distance from the top. Default: safe area + spacing/md (12, as in Figma)."},expand:{required:!1,tsType:{name:"boolean"},description:"Keep the stack expanded (Sonner «expand»).",defaultValue:{value:"false",computed:!1}}}};const{expect:Z,userEvent:ie,waitFor:ce,within:ne}=__STORYBOOK_MODULE_TEST__,Bt={title:"Components/Snackbar",component:_,parameters:{design:{type:"figma",url:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1068-6441"}},args:{title:"Добавлено в избранное",tone:"favourite",subtitle:"",action:{label:"Открыть"}},argTypes:{tone:{control:"inline-radio",options:["favourite","unfavourite","success","error","info"]},title:{control:"text"},subtitle:{control:"text"},icon:{control:!1},onAction:{control:!1}}},Qe="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",Dt=({children:e})=>t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-secondary)"},children:e}),N={render:e=>t.jsxs("div",{style:{position:"relative",display:"grid",placeItems:"center",width:393,maxWidth:"100%",height:240,overflow:"hidden",borderRadius:24,background:"var(--color-bg-page)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx(Y,{onClick:()=>{var n;return l({host:"playground",tone:e.tone,title:e.title,subtitle:e.subtitle||void 0,icon:e.icon,action:(n=e.action)!=null&&n.label?e.action:void 0})},children:"Показать снекбар"}),t.jsx(ae,{id:"playground",strategy:"absolute",top:"12px"})]})},Tt=[{tone:"favourite",title:"Добавлено в избранное",action:"Открыть"},{tone:"unfavourite",title:"Удалено из избранного",action:"Отменить"},{tone:"success",title:"Номер заказа скопирован",action:"Готово"},{tone:"error",title:"Неправильно введён код",action:"Повторить"},{tone:"info",title:"Обратите внимание",action:"Подробнее"}],z={name:"Все состояния",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 330px), 393px))",gap:16,padding:16,boxSizing:"border-box",maxWidth:"100%"},"data-testid":"states",children:[{name:"Над белым экраном (bg/page)",bg:"var(--color-bg-page)"},{name:"Над обложкой",bg:Qe}].map(e=>t.jsxs("div",{"data-surface":"",style:{display:"grid",gap:12,padding:16,borderRadius:24,background:e.bg,boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx(Dt,{children:e.name}),Tt.map(n=>t.jsx(_,{tone:n.tone,title:n.title,action:{label:n.action}},n.tone)),t.jsx(_,{tone:"favourite",title:"Добавлено в избранное",subtitle:"Бишкек: неочевидный и невероятный",action:{label:"Открыть"}}),t.jsx(_,{tone:"success",title:"Номер заказа скопирован"})]},e.name))})},L={name:"Тест: плашка не шире контейнера",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",padding:16,boxSizing:"border-box",width:361,maxWidth:"100%"},children:t.jsx(_,{tone:"favourite",title:"Добавлено в избранное",subtitle:"Бишкек: неочевидный и невероятный маршрут на два дня",action:{label:"Открыть"},"data-testid":"pill"})}),play:async({canvasElement:e})=>{const n=ne(e).getByTestId("pill"),a=n.parentElement;await Z(n.getBoundingClientRect().width).toBeLessThanOrEqual(a.getBoundingClientRect().width-32+.5)}};function se({children:e,dark:n,host:a}){return t.jsxs("div",{style:{position:"relative",width:393,height:852,maxWidth:"100%",overflow:"hidden",borderRadius:40,background:"var(--color-bg-page)",boxShadow:"0 0 0 1px var(--color-border-default)"},children:[t.jsx("div",{className:"im-16-sb",style:{position:"absolute",top:14,left:32,zIndex:60,color:n?"var(--color-text-inverse-constant-primary)":"var(--color-text-primary)"},children:"9:41"}),e,t.jsx(ae,{id:a,strategy:"absolute",top:"56px"})]})}const $="Бишкек: неочевидный и невероятный";function _t(e,n,a,u){l(n?{host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:a}:{host:e,tone:"unfavourite",title:"Удалено из избранного",subtitle:a,action:{label:"Отменить",onClick:u}})}function At(){const[e,n]=r.useState(!1),a="detail";return t.jsxs(se,{dark:!0,host:a,children:[t.jsx("div",{style:{height:520,background:Qe,position:"relative"},children:t.jsx("div",{style:{position:"absolute",bottom:16,right:16,borderRadius:999,background:"var(--control-bg-overlay-default)"},children:t.jsx(ut,{liked:e,name:$,onLikedChange:u=>{n(u),_t(a,u,$,()=>n(!0))}})})}),t.jsx("div",{style:{padding:16,display:"grid",gap:8},children:t.jsx("span",{className:"im-24-b",style:{color:"var(--color-text-primary)"},children:$})})]})}const H={name:"Кейсы · Детальная, избранное",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(At,{})};function Ft({host:e}){return r.useEffect(()=>(l({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45",duration:1/0}),l({host:e,tone:"success",title:"Номер заказа скопирован",duration:1/0}),l({host:e,tone:"unfavourite",title:"Удалено из избранного",action:{label:"Отменить"},duration:1/0}),l({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:$,duration:1/0}),()=>l.clear(e)),[e]),t.jsx(se,{host:e,children:t.jsx("span",{})})}function et({host:e}){return t.jsx(se,{host:e,children:t.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:40,display:"grid",gap:8},children:[t.jsx(Y,{fullWidth:!0,onClick:()=>l({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:$,action:{label:"Открыть"}}),children:"Добавить в избранное"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[t.jsx(Y,{variant:"secondary",size:44,onClick:()=>l({host:e,tone:"success",title:"Номер заказа скопирован"}),children:"Успех"}),t.jsx(Y,{variant:"secondary",size:44,onClick:()=>l({host:e,tone:"error",title:"Неправильно введён код",action:{label:"Повторить"}}),children:"Ошибка"}),t.jsx(Y,{variant:"secondary",size:44,onClick:()=>l({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45"}),children:"Инфо"})]})]})})}const M={name:"Тест: показ кнопкой",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(et,{host:"buttons"})},O={name:"Тест: стопка и раскрытие",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(Ft,{host:"stack"})},q={name:"Тест: показать и закрыть",parameters:{layout:"fullscreen",controls:{disable:!0}},render:()=>t.jsx(et,{host:"test"}),play:async({canvasElement:e})=>{const n=ne(e);await ie.click(n.getByRole("button",{name:"Добавить в избранное"}));const a=e.querySelector('ol[aria-live="polite"]');await Z(a).toBeTruthy();const u=await ce(()=>{const h=a.querySelector("li");if(!h)throw new Error("no snackbar yet");return h});await Z(u).toHaveTextContent("Добавлено в избранное"),await ie.click(ne(u).getByRole("button",{name:"Открыть"})),await ce(()=>Z(a.querySelector("li")).toBeNull(),{timeout:2e3})}},It=["Playground","AllStates","FitsContainerTest","OverCoverCase","ButtonsTest","StackTest","ShowTest"];var le,de,pe,fe,me;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Our Button in the middle shows a snackbar with the props from the table; it slides in at the top of the frame.",...(me=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:me.description}}};var he,be,ve,ge,xe;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ve.source},description:{story:"Figma states over a white screen and over a cover photo: with an action, with a subtitle, plain.",...(xe=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:xe.description}}};var ye,we,ke,Ee,Se;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ke=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ke.source},description:{story:"A long subtitle (nowrap) must be cut with an ellipsis, not widen the pill past its container.",...(Se=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Se.description}}};var Ce,je,Be,De,Te;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Кейсы · Детальная, избранное',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <DetailScreen />
}`,...(Be=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Be.source},description:{story:`Figma «Добавить в избранное» (230:17164) и «Удалить из избранного» (3124:185417): плашка сверху под Appbar, поверх обложки
«Бишкек: неочевидный и невероятный». Добавление без кнопки, удаление с «Отменить». Тап по сердцу на обложке.`,...(Te=(De=H.parameters)==null?void 0:De.docs)==null?void 0:Te.description}}};var _e,Ae,Fe,Ie,Re;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Тест: показ кнопкой',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="buttons" />
}`,...(Fe=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Fe.source},description:{story:"Test: our Button shows snackbars, the stack grows; press several times, they leave one by one after 4 s. Not a design case.",...(Re=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:Re.description}}};var Ne,ze,Le,He,Me;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Тест: стопка и раскрытие',
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    }
  },
  render: () => <StackScreen host="stack" />
}`,...(Le=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Le.source},description:{story:"Test: four snackbars at once (they stay): the collapsed stack, hover / tap to expand, swipe up to close. Not a design case.",...(Me=(He=O.parameters)==null?void 0:He.docs)==null?void 0:Me.description}}};var Oe,qe,Pe,We,Ve;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source},description:{story:"Interaction test: a tap shows it as a status, the action closes it, Escape-free.",...(Ve=(We=q.parameters)==null?void 0:We.docs)==null?void 0:Ve.description}}};const Wt=Object.freeze(Object.defineProperty({__proto__:null,AllStates:z,ButtonsTest:M,FitsContainerTest:L,OverCoverCase:H,Playground:N,ShowTest:q,StackTest:O,__namedExportsOrder:It,default:Bt},Symbol.toStringTag,{value:"Module"}));export{z as A,H as O,N as P,Wt as S};
