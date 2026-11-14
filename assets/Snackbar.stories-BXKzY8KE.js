import{j as t,r as o}from"./iframe-Dr5ib33t.js";import{u as Ze}from"./usePress-6Rv7_Jz7.js";import{r as Ke}from"./motion-C-Q-avtg.js";import{B as H}from"./Button-DFQPOwGN.js";import{L as qe}from"./LikeButton-DrHlodSD.js";const He="M17 4C13.8 4 12 6.667 12 8C12 6.667 10.2 4 7 4C3.8 4 3 6.667 3 8C3 15 12 20 12 20C12 20 21 15 21 8C21 6.667 20.2 4 17 4Z",Pe="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",$=({children:e,...n})=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",focusable:"false",...n,children:e}),We=e=>t.jsx($,{...e,children:t.jsx("path",{d:He,fill:"var(--control-icon-favorite)"})}),Ve=e=>t.jsxs($,{...e,children:[t.jsx("path",{d:He,fill:"var(--control-icon-favorite)"}),t.jsx("circle",{cx:"18",cy:"18",r:"6.6",fill:"var(--control-icon-favorite)",stroke:"var(--color-text-constant-primary)",strokeWidth:"1.2"}),t.jsx("path",{d:"M16.2 16.2L19.8 19.8M19.8 16.2L16.2 19.8",stroke:"var(--color-text-constant-primary)",strokeWidth:"1.35",strokeLinecap:"round"})]}),ze=e=>t.jsxs($,{...e,children:[t.jsx("path",{d:Pe,fill:"var(--color-icon-success)"}),t.jsx("path",{d:"M16.7348 9.67829C17.1094 9.27246 17.0841 8.6398 16.6783 8.2652C16.2725 7.8906 15.6398 7.9159 15.2652 8.32172L10.4615 13.5257L8.73481 11.6551C8.3602 11.2492 7.72755 11.2239 7.32172 11.5985C6.9159 11.9731 6.8906 12.6058 7.2652 13.0116L9.72674 15.6783C9.91605 15.8834 10.1824 16 10.4615 16C10.7406 16 11.007 15.8834 11.1963 15.6783L16.7348 9.67829Z",fill:"var(--snackbar-text-primary)"})]}),Ye=({fill:e,...n})=>t.jsxs($,{...n,children:[t.jsx("path",{d:Pe,fill:e}),t.jsx("path",{d:"M12 7C11.264 7 10.686 7.65 10.756 8.4L11.25 12.55C11.265 12.7393 11.3503 12.9161 11.4891 13.0456C11.6279 13.1752 11.8101 13.2481 12 13.25C12.1899 13.2481 12.3721 13.1752 12.5109 13.0456C12.6497 12.9161 12.735 12.7393 12.75 12.55L13.244 8.4C13.313 7.649 12.736 7 12 7Z",fill:"var(--snackbar-text-primary)"}),t.jsx("path",{d:"M12.8839 16.6339C13.1183 16.3995 13.25 16.0815 13.25 15.75C13.25 15.4185 13.1183 15.1005 12.8839 14.8661C12.6495 14.6317 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.6317 11.1161 14.8661C10.8817 15.1005 10.75 15.4185 10.75 15.75C10.75 16.0815 10.8817 16.3995 11.1161 16.6339C11.3505 16.8683 11.6685 17 12 17C12.3315 17 12.6495 16.8683 12.8839 16.6339Z",fill:"var(--snackbar-text-primary)"})]}),$e=e=>t.jsx(Ye,{fill:"var(--color-icon-error)",...e}),Ge=e=>t.jsx(Ye,{fill:"var(--color-icon-info)",...e});We.__docgenInfo={description:"",methods:[],displayName:"FavouriteAddedIcon"};Ve.__docgenInfo={description:"",methods:[],displayName:"FavouriteRemovedIcon"};ze.__docgenInfo={description:"",methods:[],displayName:"SuccessIcon"};$e.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};Ge.__docgenInfo={description:"",methods:[],displayName:"InfoIcon"};const Xe="_snackbar_dnr6j_6",Je="_icon_dnr6j_31",Qe="_text_dnr6j_43",et="_title_dnr6j_52",tt="_subtitle_dnr6j_61",nt="_action_dnr6j_71",at="_host_dnr6j_105",st="_list_dnr6j_121",rt="_toast_dnr6j_129",x={snackbar:Xe,icon:Je,text:Qe,title:et,subtitle:tt,action:nt,host:at,list:st,toast:rt},ot={favourite:t.jsx(We,{}),unfavourite:t.jsx(Ve,{}),success:t.jsx(ze,{}),error:t.jsx($e,{}),info:t.jsx(Ge,{})},L=o.forwardRef(function({title:n,subtitle:s,tone:i="success",icon:d,action:u,onAction:c,className:h,...S},E){return t.jsxs("div",{ref:E,className:[x.snackbar,h].filter(Boolean).join(" "),"data-tone":i,...S,children:[t.jsx("span",{className:x.icon,children:d??ot[i]}),t.jsxs("span",{className:x.text,children:[t.jsx("span",{className:x.title,children:n}),s&&t.jsx("span",{className:x.subtitle,children:s})]}),u&&t.jsx(it,{label:u.label,onClick:()=>{var v;(v=u.onClick)==null||v.call(u),c==null||c()}})]})});function it({label:e,onClick:n}){const{pressed:s,handlers:i}=Ze(!0);return t.jsx("button",{type:"button",className:x.action,"data-pressed":s||void 0,onClick:n,...i,children:e})}L.__docgenInfo={description:`Snackbar (Figma «Snackbar new» 1068:6441): a 48 px dark glass pill — tone icon, title, optional subtitle and
a white action pill. This is the static look; SnackbarHost + snackbar() show, stack and dismiss it.`,methods:[],displayName:"Snackbar",props:{title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"Second line, IM-12 R (Figma «Subtitle»)."},tone:{required:!1,tsType:{name:"union",raw:"'favourite' | 'unfavourite' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'favourite'"},{name:"literal",value:"'unfavourite'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Figma State: Add favourite → favourite, Delete favourite → unfavourite, Sucess, Error, Info.",defaultValue:{value:"'success'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Own 24 px icon instead of the tone icon."},action:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  /** Text of the white pill on the right, e.g. «Вернуть», «Открыть». */
  label: string;
  /** Called on tap; the snackbar closes afterwards. */
  onClick?: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0},description:"Text of the white pill on the right, e.g. «Вернуть», «Открыть»."},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Called on tap; the snackbar closes afterwards."}]}},description:"White pill on the right (Figma «Disclouser»)."},onAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after the action, the host uses it to close the snackbar."}}};let w=[],ut=0;const U=new Set,Z=()=>U.forEach(e=>e());function m(e){const n=++ut;return w=[{...e,id:n,host:e.host??"default",removed:!1,swiped:!1},...w],Z(),n}m.dismiss=(e,n={})=>{let s=!1;w=w.map(i=>!(e!==void 0?i.id===e:n.host===void 0||i.host===n.host)||i.removed?i:(s=!0,{...i,removed:!0,swiped:!!n.swiped})),s&&Z()};function ct(e){const n=w.filter(s=>s.id!==e);n.length!==w.length&&(w=n,Z())}const lt=e=>(U.add(e),()=>U.delete(e)),ee=()=>w;function dt(e){return o.useSyncExternalStore(lt,ee,ee).filter(s=>s.host===e)}const pt={duration:400,lifetime:4e3,gap:14,expandedGap:8,scaleStep:.05,visible:3,swipeDistance:45,swipeVelocity:.11,reduce:!1};function mt(e){const n=Ke(e),s=(i,d)=>{const u=parseFloat(n.value(i,String(d)));return Number.isFinite(u)?u:d};return{duration:n.duration("--snackbar-motion-duration",400),lifetime:n.time("--snackbar-lifetime",4e3),gap:n.length("--snackbar-motion-gap",14),expandedGap:n.length("--snackbar-motion-expanded-gap",8),scaleStep:s("--snackbar-motion-scale-step",.05),visible:Math.max(1,Math.round(s("--snackbar-motion-visible",3))),swipeDistance:n.length("--snackbar-motion-swipe-distance",45),swipeVelocity:s("--snackbar-motion-swipe-velocity",.11),reduce:n.reduce}}function ft(){const[e,n]=o.useState(typeof document<"u"&&document.hidden);return o.useEffect(()=>{const s=()=>n(document.hidden);return document.addEventListener("visibilitychange",s),()=>document.removeEventListener("visibilitychange",s)},[]),e}function K({id:e="default",strategy:n="fixed",top:s,expand:i=!1,className:d}){const u=dt(e),c=o.useRef(null),[h,S]=o.useState(pt),[E,v]=o.useState({}),[j,W]=o.useState(!1),[b,g]=o.useState(!1),[_,B]=o.useState(!1),G=ft(),y=u.filter(a=>!a.removed),f=y.length;o.useLayoutEffect(()=>{c.current&&S(mt(c.current))},[u.length]),o.useEffect(()=>{if(!b)return;const a=l=>{c.current&&!c.current.contains(l.target)&&g(!1)};return document.addEventListener("pointerdown",a,!0),()=>document.removeEventListener("pointerdown",a,!0)},[b]),o.useEffect(()=>{f<=1&&g(!1)},[f]);const T=i||(j||b)&&f>1,C=j||b||_||G,V=o.useCallback((a,l)=>{v(p=>p[a]===l?p:{...p,[a]:l})},[]);o.useEffect(()=>{v(a=>{const l=new Set(u.map(k=>k.id)),p=Object.keys(a).map(Number);return p.every(k=>l.has(k))?a:Object.fromEntries(p.filter(k=>l.has(k)).map(k=>[k,a[k]]))})},[u]);const M=a=>E[a.id]??48,z=y[0]?M(y[0]):48,q=y.slice(0,h.visible),Y=f?T?q.reduce((a,l)=>a+M(l),0)+h.expandedGap*(q.length-1):z+h.gap*(q.length-1):0,r=new Map;return y.reduce((a,l,p)=>(r.set(l.id,a+p*h.expandedGap),a+M(l)),0),t.jsx("section",{className:[x.host,d].filter(Boolean).join(" "),"data-strategy":n,"aria-label":"Уведомления",style:s?{"--_top":s}:void 0,children:t.jsx("ol",{ref:c,className:x.list,"data-expanded":T||void 0,style:{height:Y},onPointerEnter:a=>a.pointerType==="mouse"&&W(!0),onPointerLeave:a=>a.pointerType==="mouse"&&!_&&W(!1),onPointerDown:a=>a.pointerType!=="mouse"&&f>1&&g(!0),children:u.map(a=>t.jsx(ht,{item:a,index:y.indexOf(a),count:f,offset:r.get(a.id)??0,frontHeight:z,expanded:T,motion:h,paused:C,onHeight:V,onDragging:B},a.id))})})}function ht({item:e,index:n,count:s,offset:i,frontHeight:d,expanded:u,motion:c,paused:h,onHeight:S,onDragging:E}){const v=o.useRef(null),[j,W]=o.useState(!1),b=o.useRef({y:"0px",front:!0}),g=o.useRef(null),_=o.useRef(e.duration??c.lifetime);o.useLayoutEffect(()=>{var p;const r=(p=v.current)==null?void 0:p.firstElementChild;if(!r)return;const a=()=>S(e.id,r.offsetHeight);a();const l=new ResizeObserver(a);return l.observe(r),()=>l.disconnect()},[e.id,S]),o.useEffect(()=>{const r=requestAnimationFrame(()=>W(!0));return()=>cancelAnimationFrame(r)},[]),o.useEffect(()=>{if(e.removed||h||!j||!Number.isFinite(_.current))return;const r=Date.now(),a=window.setTimeout(()=>m.dismiss(e.id),Math.max(0,_.current));return()=>{window.clearTimeout(a),_.current-=Date.now()-r}},[e.id,e.removed,h,j]),o.useEffect(()=>{if(!e.removed)return;const r=window.setTimeout(()=>ct(e.id),c.duration+50);return()=>window.clearTimeout(r)},[e.id,e.removed,c.duration]);const B=n===0,G=!B&&n>0,y=n>=0&&n<c.visible;let f="0px",T=1,C=1;if(!j)f=c.reduce?"0px":"-100%",C=0;else if(e.removed)f=c.reduce?b.current.y:b.current.front||e.swiped?"-100%":b.current.y,C=0;else if(u)f=`${i}px`,C=y?1:0;else{const r=Math.min(n,c.visible-1);f=`${r*c.gap}px`,T=1-r*c.scaleStep,C=y?1:0}!e.removed&&j&&(b.current={y:f,front:B});const V=!u&&G,M={transform:`translateY(${f}) scale(${T})`,opacity:C,zIndex:n>=0?s-n:0,height:V?d:void 0},z=r=>{g.current||e.removed||r.button!==0||r.target.closest("button")||!B&&!u||(g.current={pointer:r.pointerId,startY:r.clientY,t:performance.now(),dy:0,moved:!1},r.currentTarget.setPointerCapture(r.pointerId),E(!0))},q=r=>{const a=g.current,l=v.current;if(!a||!l||r.pointerId!==a.pointer)return;const p=r.clientY-a.startY;!a.moved&&Math.abs(p)<4||(a.moved=!0,a.dy=p<=0?p:p/(1.5+p/20),l.style.transition="none",l.style.translate=`0 ${a.dy}px`)},Y=r=>{const a=g.current,l=v.current;if(a&&r.pointerId!==a.pointer||(g.current=null,E(!1),!a||!l||!a.moved))return;const p=Math.abs(a.dy)/Math.max(1,performance.now()-a.t);if(l.style.transition="",a.dy<=-c.swipeDistance||a.dy<0&&p>c.swipeVelocity){m.dismiss(e.id,{swiped:!0});return}l.style.translate="0 0"};return t.jsx("li",{ref:v,className:x.toast,"data-front":B||void 0,"data-behind":V||void 0,"data-removed":e.removed||void 0,"data-swiped":e.swiped||void 0,role:e.tone==="error"?"alert":"status","aria-live":e.tone==="error"?"assertive":"polite","aria-atomic":"true",style:M,onPointerDown:z,onPointerMove:q,onPointerUp:Y,onPointerCancel:Y,children:t.jsx(L,{title:e.title,subtitle:e.subtitle,tone:e.tone,icon:e.icon,action:e.action,onAction:()=>m.dismiss(e.id)})})}K.__docgenInfo={description:`Where snackbars appear: put it once on the screen, then call snackbar() from anywhere.

The Sonner model (Emil Kowalski, «Building a toast component»), mirrored to the top:
- a new snackbar slides in from above (translateY(-100%) → 0) in 400 ms with CSS ease;
- collapsed, the ones behind peek out 14 px lower each and 5 % smaller, all as tall as the front one,
  their content hidden; three are visible, the rest wait behind;
- hover (mouse) or a tap (touch) expands the stack: each one moves to the sum of the heights above it
  plus 8 px gaps; gaps are filled so the hover is not lost between them; a tap outside collapses it;
- transitions, not keyframes, so adding several quickly retargets smoothly;
- swipe up to dismiss: 45 px, or any flick faster than 0.11 px/ms; dragging down meets friction;
- 4 s lifetime, paused while expanded, while a finger is on it and while the tab is hidden.`,methods:[],displayName:"SnackbarHost",props:{id:{required:!1,tsType:{name:"string"},description:"Host id, matches snackbar({ host }). Default 'default'.",defaultValue:{value:"'default'",computed:!1}},strategy:{required:!1,tsType:{name:"union",raw:"'fixed' | 'absolute'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'absolute'"}]},description:"'fixed' to the viewport (the app) or 'absolute' inside a positioned parent (a screen mock-up).",defaultValue:{value:"'fixed'",computed:!1}},top:{required:!1,tsType:{name:"string"},description:"Distance from the top. Default: safe area + spacing/md (12, as in Figma)."},expand:{required:!1,tsType:{name:"boolean"},description:"Keep the stack expanded (Sonner «expand»).",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const{expect:te,userEvent:ne,waitFor:vt,within:ae}=__STORYBOOK_MODULE_TEST__,bt={title:"Components/Snackbar",component:L,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1068-6441"}},args:{title:"Добавлено в избранное",tone:"favourite",subtitle:"",action:{label:"Открыть"}},argTypes:{tone:{control:"inline-radio",options:["favourite","unfavourite","success","error","info"]},title:{control:"text"},subtitle:{control:"text"},icon:{control:!1},onAction:{control:!1}}},X="linear-gradient(160deg, #f6d365 0%, #fda085 30%, #4a7fb5 65%, #1f3b57 100%)",gt=({children:e})=>t.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:e}),D={render:e=>t.jsxs("div",{style:{position:"relative",display:"grid",placeItems:"center",width:393,maxWidth:"100%",height:240,overflow:"hidden",borderRadius:24,background:"var(--color-bg-page)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx(H,{onClick:()=>{var n;return m({host:"playground",tone:e.tone,title:e.title,subtitle:e.subtitle||void 0,icon:e.icon,action:(n=e.action)!=null&&n.label?e.action:void 0})},children:"Показать снекбар"}),t.jsx(K,{id:"playground",strategy:"absolute",top:"12px"})]})},yt=[{tone:"favourite",title:"Добавлено в избранное",action:"Открыть"},{tone:"unfavourite",title:"Удалено из избранного",action:"Вернуть"},{tone:"success",title:"Номер заказа скопирован",action:"Готово"},{tone:"error",title:"Неправильно введён код",action:"Повторить"},{tone:"info",title:"Обратите внимание",action:"Подробнее"}],A={name:"Все состояния",parameters:{layout:"padded",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(330px, 393px))",gap:16,maxWidth:"100%"},children:[{name:"Над белым экраном (bg/page)",bg:"var(--color-bg-page)"},{name:"Над обложкой",bg:X}].map(e=>t.jsxs("div",{style:{display:"grid",gap:12,padding:16,borderRadius:24,background:e.bg,boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[t.jsx(gt,{children:e.name}),yt.map(n=>t.jsx(L,{tone:n.tone,title:n.title,action:{label:n.action}},n.tone)),t.jsx(L,{tone:"favourite",title:"Добавлено в избранное",subtitle:"Бишкек: неочевидный и невероятный",action:{label:"Открыть"}}),t.jsx(L,{tone:"success",title:"Номер заказа скопирован"})]},e.name))})};function J({children:e,dark:n,host:s}){return t.jsxs("div",{style:{position:"relative",width:393,height:852,maxWidth:"100%",overflow:"hidden",borderRadius:40,background:"var(--color-bg-page)",boxShadow:"0 0 0 1px var(--color-border-default)"},children:[t.jsx("div",{className:"im-16-sb",style:{position:"absolute",top:14,left:32,zIndex:60,color:n?"var(--color-text-inverse-constant-primary)":"var(--color-text-primary)"},children:"9:41"}),e,t.jsx(K,{id:s,strategy:"absolute",top:"56px"})]})}const P="Бишкек: неочевидный и невероятный";function Ue(e,n,s,i){m(n?{host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:s,action:{label:"Открыть"}}:{host:e,tone:"unfavourite",title:"Удалено из избранного",subtitle:s,action:{label:"Вернуть",onClick:i}})}function xt(){const[e,n]=o.useState(!1),s="detail";return t.jsxs(J,{dark:!0,host:s,children:[t.jsx("div",{style:{height:520,background:X,position:"relative"},children:t.jsx("div",{style:{position:"absolute",bottom:16,right:16,borderRadius:999,background:"var(--control-bg-overlay-default)"},children:t.jsx(qe,{liked:e,name:P,onLikedChange:i=>{n(i),Ue(s,i,P,()=>n(!0))}})})}),t.jsxs("div",{style:{padding:16,display:"grid",gap:8},children:[t.jsx("span",{className:"im-24-b",style:{color:"var(--color-text-primary)"},children:P}),t.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:"Тапни сердце на обложке: снекбар въезжает сверху поверх фото. Сними лайк — появится «Вернуть»."})]})]})}const I={name:"Кейс: детальная, поверх обложки",parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx(xt,{})},kt=[{title:"Ала-Арча: на электромобиле из отеля",price:"20 904 ⃀"},{title:"Бишкек как столица стрит-арта",price:"7 292 ⃀"},{title:"Иссык-Куль и Каракол за два дня",price:"35 099 ⃀"},{title:"Конный поход к озеру Кель-Суу",price:"27 224 ⃀"}];function wt(){const e="catalog",[n,s]=o.useState({}),i=(d,u)=>s(c=>({...c,[d]:u}));return t.jsx(J,{host:e,children:t.jsxs("div",{style:{padding:"56px 16px 16px",display:"grid",gap:12},children:[t.jsx("span",{className:"im-24-b",style:{color:"var(--color-text-primary)"},children:"Каталог"}),kt.map(d=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"88px 1fr 48px",gap:12,alignItems:"center"},children:[t.jsx("div",{style:{height:88,borderRadius:16,background:X}}),t.jsxs("div",{style:{display:"grid",gap:4},children:[t.jsx("span",{className:"im-16-m",style:{color:"var(--color-text-primary)"},children:d.title}),t.jsx("span",{className:"im-14-s",style:{color:"var(--color-text-primary)"},children:d.price})]}),t.jsx(qe,{liked:!!n[d.title],name:d.title,style:{color:"var(--control-icon-secondary)"},onLikedChange:u=>{i(d.title,u),Ue(e,u,d.title,()=>i(d.title,!0))}})]},d.title))]})})}const N={name:"Кейс: каталог, над белым",parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx(wt,{})};function Q({host:e,autostack:n}){return o.useEffect(()=>{if(!n)return;const s=[m({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45",duration:1/0}),m({host:e,tone:"success",title:"Номер заказа скопирован",duration:1/0}),m({host:e,tone:"unfavourite",title:"Удалено из избранного",action:{label:"Вернуть"},duration:1/0}),m({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:P,action:{label:"Открыть"},duration:1/0})];return()=>s.forEach(i=>m.dismiss(i))},[e,n]),t.jsx(J,{host:e,children:t.jsxs("div",{style:{position:"absolute",left:16,right:16,bottom:40,display:"grid",gap:8},children:[n&&t.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)",textAlign:"center",paddingBottom:8},children:"Наведи курсор или тапни по стопке, чтобы раскрыть. Смахни вверх, чтобы закрыть."}),t.jsx(H,{fullWidth:!0,onClick:()=>m({host:e,tone:"favourite",title:"Добавлено в избранное",subtitle:P,action:{label:"Открыть"}}),children:"Добавить в избранное"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8},children:[t.jsx(H,{variant:"secondary",size:44,onClick:()=>m({host:e,tone:"success",title:"Номер заказа скопирован"}),children:"Успех"}),t.jsx(H,{variant:"secondary",size:44,onClick:()=>m({host:e,tone:"error",title:"Неправильно введён код",action:{label:"Повторить"}}),children:"Ошибка"}),t.jsx(H,{variant:"secondary",size:44,onClick:()=>m({host:e,tone:"info",title:"Обратите внимание",subtitle:"Сбор группы в 8:45"}),children:"Инфо"})]})]})})}const R={name:"Кейс: показать снекбар кнопкой",parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx(Q,{host:"buttons"})},F={name:"Кейс: стопка",parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx(Q,{host:"stack",autostack:!0})},O={name:"Тест: показать и закрыть",parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx(Q,{host:"test"}),play:async({canvasElement:e})=>{const n=ae(e);await ne.click(n.getByRole("button",{name:"Добавить в избранное"}));const s=await n.findByRole("status");await te(s).toHaveTextContent("Добавлено в избранное"),await ne.click(ae(s).getByRole("button",{name:"Открыть"})),await vt(()=>te(n.queryByRole("status")).toBeNull(),{timeout:2e3})}},jt=["Playground","AllStates","OverCoverCase","OverWhiteCase","ButtonsCase","StackCase","ShowTest"];var se,re,oe,ie,ue;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(re=D.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Our Button in the middle shows a snackbar with the props from the table; it slides in at the top of the frame.",...(ue=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ue.description}}};var ce,le,de,pe,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Все состояния',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 393px))',
    gap: 16,
    maxWidth: '100%'
  }}>
      {[{
      name: 'Над белым экраном (bg/page)',
      bg: 'var(--color-bg-page)'
    }, {
      name: 'Над обложкой',
      bg: PHOTO
    }].map(surface => <div key={surface.name} style={{
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
}`,...(de=(le=A.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Figma states over a white screen and over a cover photo: with an action, with a subtitle, plain.",...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var fe,he,ve,be,ge;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Кейс: детальная, поверх обложки',
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <DetailScreen />
}`,...(ve=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"Detail page: the snackbar over the cover photo, the heart toggles it (with «Вернуть» on removal).",...(ge=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ge.description}}};var ye,xe,ke,we,je;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Кейс: каталог, над белым',
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <CatalogScreen />
}`,...(ke=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:ke.source},description:{story:"Catalog on a white screen: several hearts in a row — tap a few quickly to see the stack.",...(je=(we=N.parameters)==null?void 0:we.docs)==null?void 0:je.description}}};var Ce,Se,Ee,_e,Be;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Кейс: показать снекбар кнопкой',
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="buttons" />
}`,...(Ee=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:"Our Button shows a snackbar; press several times to build a stack, they leave one by one after 4 s.",...(Be=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:Be.description}}};var Te,De,Ae,Ie,Ne;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Кейс: стопка',
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <ButtonsScreen host="stack" autostack />
}`,...(Ae=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ae.source},description:{story:"Four snackbars at once (they stay): the collapsed stack, hover / tap to expand, swipe up to close.",...(Ne=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.description}}};var Re,Fe,Oe,Le,Me;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Тест: показать и закрыть',
  parameters: {
    layout: 'centered',
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
    const status = await canvas.findByRole('status');
    await expect(status).toHaveTextContent('Добавлено в избранное');
    await userEvent.click(within(status).getByRole('button', {
      name: 'Открыть'
    }));
    await waitFor(() => expect(canvas.queryByRole('status')).toBeNull(), {
      timeout: 2000
    });
  }
}`,...(Oe=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source},description:{story:"Interaction test: a tap shows it as a status, the action closes it, Escape-free.",...(Me=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Me.description}}};const Tt=Object.freeze(Object.defineProperty({__proto__:null,AllStates:A,ButtonsCase:R,OverCoverCase:I,OverWhiteCase:N,Playground:D,ShowTest:O,StackCase:F,__namedExportsOrder:jt,default:bt},Symbol.toStringTag,{value:"Module"}));export{A,R as B,I as O,D as P,Tt as S,N as a,F as b};
