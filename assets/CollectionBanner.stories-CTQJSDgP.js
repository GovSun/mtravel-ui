import{r as i,j as t}from"./iframe-DyD5Yel4.js";import{C as ze}from"./Caption-D_clnAXK.js";import{F as Pe}from"./figma-BZstJmpc.js";import{P as Oe}from"./photos-D1Eacwwu.js";import{A as Ve}from"./home-CSe8AaHy.js";import{c as te}from"./cx-2dOUpm6k.js";import{r as qe}from"./motion-C-Q-avtg.js";import{u as Ue}from"./mergeRefs-BZQLIp5G.js";import{P as Ge}from"./Pressable-CAjp7WdB.js";import{S as Ke,a as W}from"./Skeleton-dpQW7cMp.js";import{S as Ye}from"./SectionTitle-CwRady4O.js";const Qe=""+new URL("autumn-R-CULhHn.webp",import.meta.url).href,Xe=""+new URL("spring-D1jVaYAm.webp",import.meta.url).href,Ze=""+new URL("summer-uI0hVZeu.webp",import.meta.url).href,Je=""+new URL("winter-j8qU9VQW.webp",import.meta.url).href,et="_banner_1wexe_10",tt="_art_1wexe_67",nt="_text_1wexe_94",at="_title_1wexe_116",rt="_summary_1wexe_125",st="_stack_1wexe_135",it="_flight_1wexe_146",ut="_card_1wexe_163",ot="_face_1wexe_200",lt="_texts_1wexe_239",ct="_thumb_1wexe_244",dt="_itemTitle_1wexe_279",mt="_price_1wexe_288",pt="_skFill_1wexe_318",ft="_skText_1wexe_328",ht="_skTitle_1wexe_337",gt="_skSummary_1wexe_338",xt="_skBars_1wexe_353",yt="_skPrice_1wexe_358",s={banner:et,art:tt,text:nt,title:at,summary:rt,stack:st,flight:it,card:ut,face:ot,texts:lt,thumb:ct,itemTitle:dt,price:mt,skFill:pt,skText:ft,skTitle:ht,skSummary:gt,skBars:xt,skPrice:yt},vt={autumn:Qe,winter:Je,spring:Xe,summer:Ze},Y=5,Ne=e=>({n:e,cards:Array.from({length:Math.min(e,Y)},(a,r)=>({key:`${r}:0`,item:r,enter:!1})),leaving:[],gen:1});function wt(e,a){switch(a.type){case"reset":return Ne(a.n);case"advance":{if(e.n<2)return e;const[r,...u]=e.cards,d=(e.cards[e.cards.length-1].item+1)%e.n;return{...e,cards:[...u,{key:`${d}:${e.gen}`,item:d,enter:!0}],leaving:[...e.leaving,r],gen:e.gen+1}}case"left":return{...e,leaving:e.leaving.filter(r=>r.key!==a.key)};case"entered":return e.cards.some(r=>r.enter)?{...e,cards:e.cards.map(r=>r.enter?{...r,enter:!1}:r)}:e}}const kt=(e,a)=>a||e>2?"wait":String(e);function bt(e){let a=document.documentElement.clientWidth;for(let r=e.parentElement;r&&r!==document.body;r=r.parentElement)if(getComputedStyle(r).overflowX!=="visible"){a=Math.min(a,r.getBoundingClientRect().left+r.clientLeft+r.clientWidth);break}return a}function Et(e,a,r){const u=Number(e.dataset.flying??0);e.dataset.flying=String(u+1),!(u>0)&&(e.style.setProperty("--_fl-r",`${a}px`),e.style.setProperty("--_fl-t",`${r}px`))}function St(e){const a=Number(e.dataset.flying??0)-1;if(a>0){e.dataset.flying=String(a);return}delete e.dataset.flying,e.style.removeProperty("--_fl-r"),e.style.removeProperty("--_fl-t")}const E=i.forwardRef(function({season:a="autumn",title:r,summary:u,items:d=[],decoration:v,autoplay:B=!0,interval:S,skeleton:_=!1,onClick:o,onItemClick:p,className:C,onPointerDown:T,onPointerUp:A,onPointerLeave:l,onPointerCancel:F,...w},k){const h=i.useRef(null),L=Ue(h,k),c=d.length>Y?d.slice(0,Y):d,[f,g]=i.useReducer(wt,c.length,Ne),y=c.map(n=>n.id).join(""),j=i.useRef(y);i.useEffect(()=>{y!==j.current&&(j.current=y,g({type:"reset",n:c.length}))},[y,c.length]);const[z,P]=i.useState(!1),[$,O]=i.useState(!1),[G,X]=i.useState(!1),[$e,We]=i.useState(()=>typeof document<"u"&&document.visibilityState==="hidden");i.useEffect(()=>{const n=h.current;if(!n||!B||_)return;const m=new IntersectionObserver(([b])=>P(b.intersectionRatio>=.5),{threshold:[0,.5,1]});return m.observe(n),()=>m.disconnect()},[B,_]),i.useEffect(()=>{const n=()=>We(document.visibilityState==="hidden");return document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)},[]),i.useEffect(()=>{if(!$)return;const n=()=>O(!1);return window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),()=>{window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n)}},[$]);const K=!_&&f.n>1&&B&&z&&!$&&!G&&!$e;i.useEffect(()=>{if(!K)return;const n=S??(h.current?qe(h.current).time("--collection-banner-interval",3e3):3e3),m=window.setTimeout(()=>{var ee;const b=document.activeElement;b instanceof HTMLElement&&((ee=h.current)!=null&&ee.contains(b))&&!b.matches(":focus-visible")&&b.blur(),g({type:"advance"})},n);return()=>window.clearTimeout(m)},[K,f.gen,S]),i.useEffect(()=>{if(!f.cards.some(b=>b.enter))return;let n=0;const m=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>g({type:"entered"}))});return()=>{cancelAnimationFrame(m),cancelAnimationFrame(n)}},[f.cards]);const V=n=>{const m=h.current;m&&m.toggleAttribute("data-pressed",n)},U=!!o&&!_,Z=v===void 0?vt[a]:v;if(_)return t.jsxs(Ke,{ref:L,...w,className:te(s.banner,C),"data-season":a,"data-skeleton":"",children:[t.jsx(W,{className:s.skFill,height:"100%"}),t.jsxs("div",{className:s.skText,"aria-hidden":"true",children:[t.jsx("span",{className:s.skTitle}),t.jsx("span",{className:s.skSummary})]}),t.jsxs("div",{className:s.stack,"aria-hidden":"true",children:[[2,1].map(n=>t.jsx("div",{className:s.card,"data-depth":n,children:t.jsx("span",{className:s.face})},n)),t.jsx("div",{className:s.card,"data-depth":"0",children:t.jsxs("span",{className:s.face,children:[t.jsx(W,{width:54,height:54,radius:16}),t.jsxs("span",{className:s.skBars,children:[t.jsx(W,{width:127,height:6}),t.jsx(W,{width:65,height:4}),t.jsx(W,{width:50,height:8,className:s.skPrice})]})]})})]})]});const J=t.jsxs(t.Fragment,{children:[t.jsx("span",{className:s.title,children:r}),u&&t.jsx("span",{className:s.summary,children:u})]});return t.jsxs("div",{...w,ref:L,className:te(s.banner,C),"data-season":a,"data-clickable":U||void 0,"data-running":K||void 0,onClick:U?o:void 0,onPointerDown:n=>{const m=n.target instanceof Element&&n.target.closest("[data-face]");U&&n.button===0&&!m&&V(!0),T==null||T(n)},onPointerUp:n=>{V(!1),A==null||A(n)},onPointerCancel:n=>{V(!1),F==null||F(n)},onPointerLeave:n=>{V(!1),l==null||l(n)},onFocus:n=>X(n.target instanceof Element&&n.target.matches(":focus-visible")),onBlur:n=>{n.currentTarget.contains(n.relatedTarget)||X(!1)},children:[Z&&t.jsx("img",{className:s.art,src:Z,alt:"",draggable:!1}),U?t.jsx("button",{type:"button",className:s.text,children:J}):t.jsx("div",{className:s.text,children:J}),f.cards.length>0&&t.jsx("div",{className:s.stack,role:"group","aria-roledescription":"карусель","aria-label":`Экскурсии подборки «${r}»`,onPointerDown:()=>O(!0),children:t.jsxs("div",{className:s.flight,children:[f.leaving.map(n=>c[n.item]?t.jsx(ne,{item:c[n.item],depth:"leaving",onLeft:()=>g({type:"left",key:n.key})},n.key):null),f.cards.map((n,m)=>c[n.item]?t.jsx(ne,{item:c[n.item],depth:kt(m,n.enter),onItemClick:p},n.key):null)]})})]})});function ne({item:e,depth:a,onLeft:r,onItemClick:u}){const d=i.useRef(null),v=a==="0",B=a==="leaving",S=i.useRef(r);S.current=r,i.useLayoutEffect(()=>{const o=d.current;if(!o||!B)return;const p=qe(o),C=[];let T=null;if(p.reduce)C.push(o.animate([{opacity:1},{opacity:0}],{duration:p.duration("--collection-banner-motion-fade-duration",200),easing:p.value("--motion-ease-standard","ease"),fill:"forwards"}));else{const l=p.duration("--collection-banner-motion-lift-duration",60),F=p.duration("--collection-banner-motion-throw-duration",240),w=l+F,k=(g,y)=>{const j=parseFloat(p.value(g,""));return Number.isFinite(j)?j:y},h=k("--collection-banner-motion-lift-scale",1.03),L=k("--collection-banner-motion-throw-rotate",24),c=o.parentElement,f=c==null?void 0:c.parentElement;if(c&&f){const g=o.offsetWidth,y=bt(f),j=y-o.getBoundingClientRect().left+p.length("--collection-banner-motion-throw-past",48),z=Math.min(Math.max(j,g),g*k("--collection-banner-motion-throw-max",2)),P=-z*k("--collection-banner-motion-throw-rise",.25),$=Math.ceil(-P+g/2*h*Math.sin(L*Math.PI/180)+16);Et(c,Math.max(0,Math.floor(y-f.getBoundingClientRect().right)),$),T=c;const O=(l+F*k("--collection-banner-motion-throw-fade-start",.45))/w,G=(l+F*.9)/w;C.push(o.animate([{transform:"translate(0px, 0px) rotate(0deg) scale(1)",offset:0,easing:p.value("--motion-ease-out","ease-out")},{transform:`translate(0px, -2px) rotate(0deg) scale(${h})`,offset:l/w,easing:p.value("--collection-banner-motion-throw-easing","ease-in")},{transform:`translate(${z}px, ${P}px) rotate(${L}deg) scale(${h})`,offset:1}],{duration:w,fill:"forwards"}),o.animate([{opacity:1,offset:0},{opacity:1,offset:O},{opacity:k("--collection-banner-motion-throw-edge-opacity",.45),offset:G},{opacity:0,offset:1}],{duration:w,easing:"linear",fill:"forwards"}))}}let A=!1;return Promise.all(C.map(l=>l.finished)).then(()=>{var l;A=!0,(l=S.current)==null||l.call(S)}).catch(()=>{}),()=>{A||C.forEach(l=>l.cancel()),T&&St(T)}},[B]);const _=t.jsxs(t.Fragment,{children:[t.jsx("img",{className:s.thumb,src:e.image,srcSet:e.imageSrcSet,sizes:e.imageSrcSet?e.imageSizes??"54px":void 0,width:54,height:54,alt:"",draggable:!1,decoding:"async"}),t.jsxs("span",{className:s.texts,children:[t.jsx("span",{className:s.itemTitle,children:e.title})," ",t.jsx("span",{className:s.price,children:e.price})]})]});return t.jsx("div",{ref:d,className:s.card,"data-depth":a,"data-item":e.id,children:t.jsx(Ge,{as:e.href?"a":"button",href:e.href,target:e.target,rel:e.rel,className:s.face,"data-face":"",draggable:!1,pressable:v,tabIndex:v?0:-1,"aria-hidden":v?void 0:!0,"aria-label":v?`${e.title} ${e.price}`:void 0,onClick:o=>{if(o.stopPropagation(),!v){o.preventDefault();return}u==null||u(e,o)},children:_})})}E.__docgenInfo={description:"CollectionBanner (Figma collection_banner 1217:903): a seasonal collection with a self-throwing stack of cards.\n`ref`, `className`, `style` and the rest props (pointer handlers included) go to the root `<div>`.",methods:[],displayName:"CollectionBanner",props:{season:{required:!1,tsType:{name:"union",raw:"'autumn' | 'winter' | 'spring' | 'summer'",elements:[{name:"literal",value:"'autumn'"},{name:"literal",value:"'winter'"},{name:"literal",value:"'spring'"},{name:"literal",value:"'summer'"}]},description:"Figma Type: the gradient and the art over the top edge.",defaultValue:{value:"'autumn'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"«Золотая осень», IM-28 B, up to two lines."},summary:{required:!1,tsType:{name:"string"},description:"«34 предложения · от 3 441 ⃀»: offers in the whole collection (word agrees with the number) and the lowest price. IM-16 R, one line."},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  id: string;\n  title: string;\n  /** Formatted price with the currency, as shown: «11 306 ⃀». */\n  price: string;\n  /** Photo, shown 54 × 54 (cover). */\n  image: string;\n  imageSrcSet?: string;\n  /** `sizes` of the photo, for `imageSrcSet`. Default `54px`, the real width. */\n  imageSizes?: string;\n  /** Makes the front card a link; otherwise it is a button that calls `onItemClick`. */\n  href?: string;\n  /** With `href`: where the link opens, and its `rel` (`noopener noreferrer` is added for `_blank`). */\n  target?: string;\n  rel?: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"price",value:{name:"string",required:!0},description:"Formatted price with the currency, as shown: «11 306 ⃀»."},{key:"image",value:{name:"string",required:!0},description:"Photo, shown 54 × 54 (cover)."},{key:"imageSrcSet",value:{name:"string",required:!1}},{key:"imageSizes",value:{name:"string",required:!1},description:"`sizes` of the photo, for `imageSrcSet`. Default `54px`, the real width."},{key:"href",value:{name:"string",required:!1},description:"Makes the front card a link; otherwise it is a button that calls `onItemClick`."},{key:"target",value:{name:"string",required:!1},description:"With `href`: where the link opens, and its `rel` (`noopener noreferrer` is added for `_blank`)."},{key:"rel",value:{name:"string",required:!1}}]}}],raw:"CollectionBannerItem[]"},description:"The excursions of the collection, up to 5: the stack shows them in turn and starts over. More are cut off.",defaultValue:{value:"[]",computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Replace the season art (an image 344 × 258 without a shadow); `null` hides it."},autoplay:{required:!1,tsType:{name:"boolean"},description:"The stack goes round by itself while at least half of the banner is on screen. `false`: it stands still.",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"ms between throws. Default `--collection-banner-interval` (3000)."},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Skeleton=True: the DS skeleton (`SkeletonGroup`, «Загрузка»), nothing interactive.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLElement"}],raw:"MouseEventHandler<HTMLElement>"},description:"Tap on the banner (anywhere except the front card): open the collection. Gets the native event."},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: CollectionBannerItem, event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  id: string;\n  title: string;\n  /** Formatted price with the currency, as shown: «11 306 ⃀». */\n  price: string;\n  /** Photo, shown 54 × 54 (cover). */\n  image: string;\n  imageSrcSet?: string;\n  /** `sizes` of the photo, for `imageSrcSet`. Default `54px`, the real width. */\n  imageSizes?: string;\n  /** Makes the front card a link; otherwise it is a button that calls `onItemClick`. */\n  href?: string;\n  /** With `href`: where the link opens, and its `rel` (`noopener noreferrer` is added for `_blank`). */\n  target?: string;\n  rel?: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"price",value:{name:"string",required:!0},description:"Formatted price with the currency, as shown: «11 306 ⃀»."},{key:"image",value:{name:"string",required:!0},description:"Photo, shown 54 × 54 (cover)."},{key:"imageSrcSet",value:{name:"string",required:!1}},{key:"imageSizes",value:{name:"string",required:!1},description:"`sizes` of the photo, for `imageSrcSet`. Default `54px`, the real width."},{key:"href",value:{name:"string",required:!1},description:"Makes the front card a link; otherwise it is a button that calls `onItemClick`."},{key:"target",value:{name:"string",required:!1},description:"With `href`: where the link opens, and its `rel` (`noopener noreferrer` is added for `_blank`)."},{key:"rel",value:{name:"string",required:!1}}]}},name:"item"},{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:"Tap on the front card, with the native event (a router can `preventDefault` a link)."}}};const{expect:x,fn:ae,userEvent:re,within:_t}=__STORYBOOK_MODULE_TEST__,{alaArcha:Re,tianShan:He,konorchek:Ct,clouds:Tt,kelTor:Ft}=Oe,Q=[{id:"ala-archa",title:"Однодневная экскурсия в природный парк Ала-Арча",price:"11 306 ⃀",image:Re},{id:"tian-shan",title:"Из Бишкека — в Тянь-Шанские горы",price:"21 137 ⃀",image:He},{id:"konorchek",title:"Каньон Конорчек и башня Бурана",price:"26 640 ⃀",image:Ct},{id:"clouds",title:"Над облаками у Бишкека",price:"16 820 ⃀",image:Tt},{id:"kel-tor",title:"Треккинг к озеру Кель-Тор",price:"27 224 ⃀",image:Ft}],Le={autumn:"Золотая осень",winter:"Зимние выходные",spring:"Весна в горах",summer:"Лето на Иссык-Куле"},jt={title:"Components/CollectionBanner",component:E,parameters:{layout:"fullscreen",design:{type:"figma",url:Pe("1217-903")}},args:{season:"autumn",title:"Золотая осень",summary:"34 предложения · от 3 441 ⃀",items:Q,autoplay:!0,skeleton:!1},argTypes:{season:{control:"inline-radio",options:["autumn","winter","spring","summer"]},autoplay:{control:"boolean"},interval:{control:{type:"number",min:1e3,step:500}},title:{control:"text"},summary:{control:"text"},skeleton:{control:"boolean"},items:{control:!1},decoration:{control:!1},onClick:{control:!1},onItemClick:{control:!1}}},H=({children:e,width:a=393})=>t.jsx("div",{style:{width:a,maxWidth:"100%",boxSizing:"border-box",overflow:"hidden",padding:"56px 16px 16px",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:e}),D={render:function(a){const[r,u]=i.useState("—");return t.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[t.jsx(H,{children:t.jsx(E,{...a,title:a.title||Le[a.season??"autumn"],onClick:()=>u(`баннер «${a.title}»`),onItemClick:d=>u(`карточка «${d.title}»`)})}),t.jsxs(ze,{children:["Нажато: ",r]})]})}},M={render:e=>t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:["autumn","winter","spring","summer"].map(a=>t.jsx(H,{children:t.jsx(E,{...e,season:a,title:Le[a]})},a))})},I={args:{skeleton:!0},render:e=>t.jsx(H,{children:t.jsx(E,{...e})})},q={name:"Кейсы · Сезонная подборка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>t.jsx(H,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,padding:"16px 0"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",height:48,padding:"0 16px"},children:t.jsx(Ye,{size:20,align:"center",subtitle:"Идеи для впечатлений в этом сезоне",children:"Сезонная подборка"})}),t.jsx(E,{season:"autumn",title:"Золотая осень",summary:"34 предложения · от 3 441 ⃀",items:Ve.map((e,a)=>({...e,image:a===0?Re:He})),autoplay:!1,onClick:()=>{}})]})})},N={name:"Тест: одна экскурсия",parameters:{controls:{disable:!0}},args:{items:Q.slice(0,1)},render:e=>t.jsx(H,{children:t.jsx(E,{...e})})},R={name:"Тест: тап по карточке и баннеру",parameters:{controls:{disable:!0}},args:{autoplay:!1,onClick:ae(),onItemClick:ae()},render:e=>t.jsx(H,{children:t.jsx(E,{...e})}),play:async({canvasElement:e,args:a})=>{const r=_t(e);await re.click(r.getByRole("button",{name:/Однодневная экскурсия/})),await x(a.onItemClick).toHaveBeenCalledTimes(1),await x(a.onItemClick).toHaveBeenLastCalledWith(Q[0],x.objectContaining({type:"click"})),await x(a.onClick).not.toHaveBeenCalled(),await re.click(r.getByRole("button",{name:/Золотая осень/})),await x(a.onClick).toHaveBeenCalledTimes(1),await x(a.onClick).toHaveBeenLastCalledWith(x.objectContaining({type:"click"}));const u=e.querySelectorAll('[data-depth="1"] [data-face], [data-depth="2"] [data-face]');await x(u.length).toBe(2),u.forEach(d=>{x(d).toHaveAttribute("aria-hidden","true"),x(d).toHaveAttribute("tabindex","-1")})}},Bt=["Playground","Seasons","Skeleton","HomeCase","SingleItem","Interaction"];var se,ie,ue,oe,le;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: function Render(args) {
    const [last, setLast] = useState('—');
    return <div style={{
      display: 'grid',
      gap: 12,
      justifyItems: 'center'
    }}>
        <Screen>
          <CollectionBanner {...args} title={args.title || TITLES[args.season ?? 'autumn']} onClick={() => setLast(\`баннер «\${args.title}»\`)} onItemClick={item => setLast(\`карточка «\${item.title}»\`)} />
        </Screen>
        <Caption>Нажато: {last}</Caption>
      </div>;
  }
}`,...(ue=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:ue.source},description:{story:"Стопка листается сама: каждые 3 секунды верхняя карточка улетает. В стопке до 5 карточек, после пятой снова первая.",...(le=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};var ce,de,me,pe,fe;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>
      {(['autumn', 'winter', 'spring', 'summer'] as const).map(season => <Screen key={season}>
          <CollectionBanner {...args} season={season} title={TITLES[season]} />
        </Screen>)}
    </div>
}`,...(me=(de=M.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"Figma Type: градиент и украшение сверху.",...(fe=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:fe.description}}};var he,ge,xe,ye,ve;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    skeleton: true
  },
  render: args => <Screen>
      <CollectionBanner {...args} />
    </Screen>
}`,...(xe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:"Figma Skeleton=True: пока подборка грузится. Геометрия та же, при загрузке ничего не прыгает.",...(ve=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};var we,ke,be,Ee,Se;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Кейсы · Сезонная подборка',
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
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '16px 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 48,
        padding: '0 16px'
      }}>
        <SectionTitle size={20} align="center" subtitle="Идеи для впечатлений в этом сезоне">
          Сезонная подборка
        </SectionTitle>
      </div>
      <CollectionBanner season="autumn" title="Золотая осень" summary="34 предложения · от 3 441 ⃀" items={AUTUMN_ITEMS.map((i, n) => ({
        ...i,
        image: n === 0 ? alaArcha : tianShan
      }))} autoplay={false} onClick={() => undefined} />
      </div>
    </Screen>
}`,...(be=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:be.source},description:{story:`«Сезонная подборка» on the home (Figma 4687:46141): a 48 px title block with the subtitle centred, 24 px to the banner,
 three excursions in the stack, the banner does not turn by itself. The same items as the screen.`,...(Se=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Se.description}}};var _e,Ce,Te,Fe,je;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Тест: одна экскурсия',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    items: ITEMS.slice(0, 1)
  },
  render: args => <Screen>
      <CollectionBanner {...args} />
    </Screen>
}`,...(Te=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source},description:{story:"Test: one excursion in the banner, no stack to cycle (not a design case).",...(je=(Fe=N.parameters)==null?void 0:Fe.docs)==null?void 0:je.description}}};var Be,Ae,De,Me,Ie;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Тест: тап по карточке и баннеру',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    autoplay: false,
    onClick: fn(),
    onItemClick: fn()
  },
  render: args => <Screen>
      <CollectionBanner {...args} />
    </Screen>,
  play: async ({
    canvasElement,
    args
  }) => {
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: /Однодневная экскурсия/
    }));
    await expect(args.onItemClick).toHaveBeenCalledTimes(1);
    await expect(args.onItemClick).toHaveBeenLastCalledWith(ITEMS[0], expect.objectContaining({
      type: 'click'
    }));
    await expect(args.onClick).not.toHaveBeenCalled();
    await userEvent.click(c.getByRole('button', {
      name: /Золотая осень/
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(args.onClick).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'click'
    }));
    // the cards behind are not a stop for the keyboard and are hidden from screen readers
    const hidden = canvasElement.querySelectorAll('[data-depth="1"] [data-face], [data-depth="2"] [data-face]');
    await expect(hidden.length).toBe(2);
    hidden.forEach(el => {
      expect(el).toHaveAttribute('aria-hidden', 'true');
      expect(el).toHaveAttribute('tabindex', '-1');
    });
  }
}`,...(De=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:De.source},description:{story:"Тап по передней карточке и по заголовку: оба обработчика получают настоящее событие, карточка сзади не нажимается.",...(Ie=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:Ie.description}}};const zt=Object.freeze(Object.defineProperty({__proto__:null,HomeCase:q,Interaction:R,Playground:D,Seasons:M,SingleItem:N,Skeleton:I,__namedExportsOrder:Bt,default:jt},Symbol.toStringTag,{value:"Module"}));export{zt as B,q as H,D as P,M as S,I as a,N as b};
