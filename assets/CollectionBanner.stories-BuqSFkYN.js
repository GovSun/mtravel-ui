import{r as i,j as e}from"./iframe-Dr5ib33t.js";import{r as ve}from"./motion-C-Q-avtg.js";const Be=""+new URL("autumn-R-CULhHn.webp",import.meta.url).href,Fe=""+new URL("spring-D1jVaYAm.webp",import.meta.url).href,Ae=""+new URL("summer-uI0hVZeu.webp",import.meta.url).href,Te=""+new URL("winter-j8qU9VQW.webp",import.meta.url).href,De="_banner_jz257_10",Ne="_art_jz257_67",Ce="_text_jz257_89",qe="_title_jz257_111",Re="_summary_jz257_120",ze="_stack_jz257_130",Ie="_card_jz257_139",Le="_face_jz257_175",$e="_thumb_jz257_214",Me="_texts_jz257_224",Ve="_itemTitle_jz257_239",He="_price_jz257_248",Ue="_shimmer_jz257_274",We="_skText_jz257_285",Pe="_skTitle_jz257_293",Oe="_skSummary_jz257_294",Ke="_skBars_jz257_309",r={banner:De,art:Ne,text:Ce,title:qe,summary:Re,stack:ze,card:Ie,face:Le,thumb:$e,texts:Me,itemTitle:Ve,price:He,shimmer:Ue,skText:We,skTitle:Pe,skSummary:Oe,skBars:Ke},Ye={autumn:Be,winter:Te,spring:Fe,summer:Ae},V=5,be=t=>({n:t,cards:Array.from({length:Math.min(t,V)},(a,s)=>({key:`${s}:0`,item:s,enter:!1})),leaving:[],gen:1});function Ge(t,a){switch(a.type){case"reset":return be(a.n);case"advance":{if(t.n<2)return t;const[s,...l]=t.cards,m=(t.cards[t.cards.length-1].item+1)%t.n;return{...t,cards:[...l,{key:`${m}:${t.gen}`,item:m,enter:!0}],leaving:[...t.leaving,s],gen:t.gen+1}}case"left":return{...t,leaving:t.leaving.filter(s=>s.key!==a.key)};case"entered":return t.cards.some(s=>s.enter)?{...t,cards:t.cards.map(s=>s.enter?{...s,enter:!1}:s)}:t}}const Qe=(t,a)=>a||t>2?"wait":String(t);function k({season:t="autumn",title:a,summary:s,items:l=[],decoration:m,autoplay:p=!0,interval:N,skeleton:x=!1,onClick:y,onItemClick:j,className:S,onPointerDown:E,onPointerUp:_,onPointerLeave:o,onPointerCancel:c,...v}){const f=i.useRef(null),u=l.length>V?l.slice(0,V):l,[d,b]=i.useReducer(Ge,u.length,be),w=u.map(n=>n.id).join(""),q=i.useRef(w);i.useEffect(()=>{w!==q.current&&(q.current=w,b({type:"reset",n:u.length}))},[w,u.length]);const[I,L]=i.useState(!1),[$,H]=i.useState(!1),[je,U]=i.useState(!1),[Se,Ee]=i.useState(()=>typeof document<"u"&&document.visibilityState==="hidden");i.useEffect(()=>{const n=f.current;if(!n||!p||x)return;const g=new IntersectionObserver(([h])=>L(h.intersectionRatio>=.5),{threshold:[0,.5,1]});return g.observe(n),()=>g.disconnect()},[p,x]),i.useEffect(()=>{const n=()=>Ee(document.visibilityState==="hidden");return document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)},[]),i.useEffect(()=>{if(!$)return;const n=()=>H(!1);return window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),()=>{window.removeEventListener("pointerup",n),window.removeEventListener("pointercancel",n)}},[$]);const M=!x&&d.n>1&&p&&I&&!$&&!je&&!Se;i.useEffect(()=>{if(!M)return;const n=N??(f.current?ve(f.current).time("--collection-banner-interval",3e3):3e3),g=window.setTimeout(()=>{var O;const h=document.activeElement;h instanceof HTMLElement&&((O=f.current)!=null&&O.contains(h))&&!h.matches(":focus-visible")&&h.blur(),b({type:"advance"})},n);return()=>window.clearTimeout(g)},[M,d.gen,N]),i.useEffect(()=>{if(!d.cards.some(h=>h.enter))return;let n=0;const g=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>b({type:"entered"}))});return()=>{cancelAnimationFrame(g),cancelAnimationFrame(n)}},[d.cards]);const[_e,R]=i.useState(!1),C=!!y&&!x,W=m===void 0?Ye[t]:m;if(x)return e.jsxs("div",{...v,ref:f,className:[r.banner,S].filter(Boolean).join(" "),"data-season":t,"data-skeleton":"","aria-busy":"true",children:[e.jsxs("div",{className:r.skText,"aria-hidden":"true",children:[e.jsx("span",{className:r.skTitle}),e.jsx("span",{className:r.skSummary})]}),e.jsxs("div",{className:r.stack,"aria-hidden":"true",children:[[2,1].map(n=>e.jsx("div",{className:r.card,"data-depth":n,children:e.jsx("span",{className:r.face})},n)),e.jsx("div",{className:r.card,"data-depth":"0",children:e.jsxs("span",{className:r.face,children:[e.jsx("span",{className:`${r.thumb} ${r.shimmer}`}),e.jsxs("span",{className:r.skBars,children:[e.jsx("span",{className:r.shimmer}),e.jsx("span",{className:r.shimmer}),e.jsx("span",{className:r.shimmer})]})]})})]})]});const P=e.jsxs(e.Fragment,{children:[e.jsx("span",{className:r.title,children:a}),s&&e.jsx("span",{className:r.summary,children:s})]});return e.jsxs("div",{...v,ref:f,className:[r.banner,S].filter(Boolean).join(" "),"data-season":t,"data-clickable":C||void 0,"data-pressed":C&&_e||void 0,"data-running":M||void 0,onClick:C?()=>y==null?void 0:y():void 0,onPointerDown:n=>{const g=n.target instanceof Element&&n.target.closest("[data-face]");C&&n.button===0&&!g&&R(!0),E==null||E(n)},onPointerUp:n=>{R(!1),_==null||_(n)},onPointerCancel:n=>{R(!1),c==null||c(n)},onPointerLeave:n=>{R(!1),o==null||o(n)},onFocus:n=>U(n.target instanceof Element&&n.target.matches(":focus-visible")),onBlur:n=>{n.currentTarget.contains(n.relatedTarget)||U(!1)},children:[W&&e.jsx("img",{className:r.art,src:W,alt:"",draggable:!1}),C?e.jsx("button",{type:"button",className:r.text,children:P}):e.jsx("div",{className:r.text,children:P}),d.cards.length>0&&e.jsxs("div",{className:r.stack,role:"group","aria-roledescription":"карусель","aria-label":`Экскурсии подборки «${a}»`,onPointerDown:()=>H(!0),children:[d.leaving.map(n=>u[n.item]?e.jsx(K,{item:u[n.item],depth:"leaving",onLeft:()=>b({type:"left",key:n.key})},n.key):null),d.cards.map((n,g)=>u[n.item]?e.jsx(K,{item:u[n.item],depth:Qe(g,n.enter),onItemClick:j},n.key):null)]})]})}function K({item:t,depth:a,onLeft:s,onItemClick:l}){const m=i.useRef(null),p=a==="0",N=a==="leaving",[x,y]=i.useState(!1),j=i.useRef(s);j.current=s,i.useLayoutEffect(()=>{const o=m.current;if(!o||!N)return;const c=ve(o),v=[];if(c.reduce)v.push(o.animate([{opacity:1},{opacity:0}],{duration:c.duration("--collection-banner-motion-fade-duration",200),easing:c.value("--motion-ease-standard","ease"),fill:"forwards"}));else{const u=c.duration("--collection-banner-motion-lift-duration",60),d=c.duration("--collection-banner-motion-throw-duration",240),b=u+d,w=parseFloat(c.value("--collection-banner-motion-lift-scale","1.03")),q=o.offsetWidth*parseFloat(c.value("--collection-banner-motion-throw-x","0.95")),I=o.offsetHeight*parseFloat(c.value("--collection-banner-motion-throw-y","-1.1")),L=parseFloat(c.value("--collection-banner-motion-throw-rotate","18deg"));v.push(o.animate([{transform:"translate(0px, 0px) rotate(0deg) scale(1)",offset:0,easing:c.value("--motion-ease-out","ease-out")},{transform:`translate(0px, -2px) rotate(0deg) scale(${w})`,offset:u/b,easing:c.value("--collection-banner-motion-throw-easing","ease-in")},{transform:`translate(${q}px, ${I}px) rotate(${L}deg) scale(${w})`,offset:1}],{duration:b,fill:"forwards"}),o.animate([{opacity:1},{opacity:0}],{duration:d*.6,delay:u+d*.4,easing:"linear",fill:"forwards"}))}let f=!1;return Promise.all(v.map(u=>u.finished)).then(()=>{var u;f=!0,(u=j.current)==null||u.call(j)}).catch(()=>{}),()=>{f||v.forEach(u=>u.cancel())}},[N]);const S=()=>y(!1),E={className:r.face,"data-face":"","data-pressed":p&&x||void 0,tabIndex:p?0:-1,"aria-hidden":p?void 0:!0,"aria-label":p?`${t.title}, ${t.price}`:void 0,onClick:o=>{if(o.stopPropagation(),!p){o.preventDefault();return}l==null||l(t)},onPointerDown:o=>{p&&o.button===0&&y(!0)},onPointerUp:S,onPointerCancel:S,onPointerLeave:S},_=e.jsxs(e.Fragment,{children:[e.jsx("img",{className:r.thumb,src:t.image,srcSet:t.imageSrcSet,alt:"",draggable:!1}),e.jsxs("span",{className:r.texts,children:[e.jsx("span",{className:r.itemTitle,children:t.title}),e.jsx("span",{className:r.price,children:t.price})]})]});return e.jsx("div",{ref:m,className:r.card,"data-depth":a,"data-item":t.id,children:t.href?e.jsx("a",{...E,href:t.href,draggable:!1,children:_}):e.jsx("button",{...E,type:"button",children:_})})}k.__docgenInfo={description:"",methods:[],displayName:"CollectionBanner",props:{season:{required:!1,tsType:{name:"union",raw:"'autumn' | 'winter' | 'spring' | 'summer'",elements:[{name:"literal",value:"'autumn'"},{name:"literal",value:"'winter'"},{name:"literal",value:"'spring'"},{name:"literal",value:"'summer'"}]},description:"Figma Type: the gradient and the art over the top edge.",defaultValue:{value:"'autumn'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"«Золотая осень», IM-28 B, up to two lines."},summary:{required:!1,tsType:{name:"string"},description:"«34 экскурсии · от 3 441 ⃀», IM-16 R, one line."},items:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  /** Formatted price with the currency, as shown: «11 306 ⃀». */
  price: string;
  /** Photo, shown 54 × 54 (cover). */
  image: string;
  imageSrcSet?: string;
  /** Makes the front card a link; otherwise it is a button that calls \`onItemClick\`. */
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"price",value:{name:"string",required:!0},description:"Formatted price with the currency, as shown: «11 306 ⃀»."},{key:"image",value:{name:"string",required:!0},description:"Photo, shown 54 × 54 (cover)."},{key:"imageSrcSet",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1},description:"Makes the front card a link; otherwise it is a button that calls `onItemClick`."}]}}],raw:"CollectionBannerItem[]"},description:"The excursions of the collection, up to 5: the stack shows them in turn and starts over. More are cut off.",defaultValue:{value:"[]",computed:!1}},decoration:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Replace the season art (an image 344 × 258 without a shadow); `null` hides it."},autoplay:{required:!1,tsType:{name:"boolean"},description:"The stack goes round by itself while at least half of the banner is on screen. `false`: it stands still.",defaultValue:{value:"true",computed:!1}},interval:{required:!1,tsType:{name:"number"},description:"ms between throws. Default `--collection-banner-interval` (3000)."},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Skeleton=True: grey shimmer, nothing interactive.",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Tap on the banner (anywhere except the front card): open the collection."},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: CollectionBannerItem) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  title: string;
  /** Formatted price with the currency, as shown: «11 306 ⃀». */
  price: string;
  /** Photo, shown 54 × 54 (cover). */
  image: string;
  imageSrcSet?: string;
  /** Makes the front card a link; otherwise it is a button that calls \`onItemClick\`. */
  href?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"price",value:{name:"string",required:!0},description:"Formatted price with the currency, as shown: «11 306 ⃀»."},{key:"image",value:{name:"string",required:!0},description:"Photo, shown 54 × 54 (cover)."},{key:"imageSrcSet",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1},description:"Makes the front card a link; otherwise it is a button that calls `onItemClick`."}]}},name:"item"}],return:{name:"void"}}},description:"Tap on the front card."}},composes:["Omit"]};const Xe=""+new URL("stack-ala-archa-BN_HYoin.webp",import.meta.url).href,Je=""+new URL("stack-tian-shan-u-zVEnto.webp",import.meta.url).href,Ze=""+new URL("stack-konorchek-CtD9GM2Q.webp",import.meta.url).href,et=""+new URL("stack-clouds-CymYsXVy.webp",import.meta.url).href,tt=""+new URL("stack-kel-tor-BHgMIzd9.webp",import.meta.url).href,we=[{id:"ala-archa",title:"Однодневная экскурсия в природный парк Ала-Арча",price:"11 306 ⃀",image:Xe},{id:"tian-shan",title:"Из Бишкека — в Тянь-Шанские горы",price:"21 137 ⃀",image:Je},{id:"konorchek",title:"Каньон Конорчек и башня Бурана",price:"26 640 ⃀",image:Ze},{id:"clouds",title:"Над облаками у Бишкека",price:"16 820 ⃀",image:et},{id:"kel-tor",title:"Треккинг к озеру Кель-Тор",price:"27 224 ⃀",image:tt}],ke={autumn:"Золотая осень",winter:"Зимние выходные",spring:"Весна в горах",summer:"Лето на Иссык-Куле"},nt={title:"Components/CollectionBanner",component:k,parameters:{design:{figma:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1217-903"}},args:{season:"autumn",title:"Золотая осень",summary:"34 экскурсии · от 3 441 ⃀",items:we,autoplay:!0,skeleton:!1},argTypes:{season:{control:"inline-radio",options:["autumn","winter","spring","summer"]},autoplay:{control:"boolean"},interval:{control:{type:"number",min:1e3,step:500}},title:{control:"text"},summary:{control:"text"},skeleton:{control:"boolean"},items:{control:!1},decoration:{control:!1},onClick:{control:!1},onItemClick:{control:!1}}},z=({children:t,width:a=393})=>e.jsx("div",{style:{width:a,maxWidth:"100%",boxSizing:"border-box",padding:"56px 16px 16px",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:t}),rt=({children:t})=>e.jsx("span",{className:"im-12-r",style:{color:"var(--color-text-tertiary)"},children:t}),B={render:function(a){const[s,l]=i.useState("—");return e.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[e.jsx(z,{children:e.jsx(k,{...a,title:a.title||ke[a.season??"autumn"],onClick:()=>l(`баннер «${a.title}»`),onItemClick:m=>l(`карточка «${m.title}»`)})}),e.jsxs(rt,{children:["Нажато: ",s]})]})}},F={parameters:{layout:"padded"},render:t=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:["autumn","winter","spring","summer"].map(a=>e.jsx(z,{children:e.jsx(k,{...t,season:a,title:ke[a]})},a))})},A={args:{skeleton:!0},render:t=>e.jsx(z,{children:e.jsx(k,{...t})})},T={name:"Главная: сезонная подборка",render:t=>e.jsxs("div",{style:{width:393,maxWidth:"100%",boxSizing:"border-box",padding:"16px 0",borderRadius:24,background:"var(--color-bg-surface)",boxShadow:"inset 0 0 0 1px var(--color-border-default)"},children:[e.jsxs("div",{style:{display:"grid",gap:4,padding:"0 16px",textAlign:"center"},children:[e.jsx("span",{className:"im-20-b",style:{color:"var(--color-text-primary)"},children:"Сезонная подборка"}),e.jsx("span",{className:"im-14-r",style:{color:"var(--color-text-secondary)"},children:"Идеи для впечатлений в этом сезоне"})]}),e.jsx("div",{style:{padding:"56px 16px 0"},children:e.jsx(k,{...t})})]})},D={name:"Одна карточка",args:{items:we.slice(0,1)},render:t=>e.jsx(z,{children:e.jsx(k,{...t})})},at=["Playground","Seasons","Skeleton","HomeCase","SingleItem"];var Y,G,Q,X,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Q=(G=B.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:"Стопка листается сама: каждые 3 секунды верхняя карточка улетает. В стопке до 5 карточек, после пятой снова первая.",...(J=(X=B.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Z,ee,te,ne,re;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}>
      {(['autumn', 'winter', 'spring', 'summer'] as const).map(season => <Screen key={season}>
          <CollectionBanner {...args} season={season} title={TITLES[season]} />
        </Screen>)}
    </div>
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Figma Type: градиент и украшение сверху.",...(re=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ae,se,ue,ie,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    skeleton: true
  },
  render: args => <Screen>
      <CollectionBanner {...args} />
    </Screen>
}`,...(ue=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ue.source},description:{story:"Figma Skeleton=True: пока подборка грузится. Геометрия та же, при загрузке ничего не прыгает.",...(oe=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:oe.description}}};var ce,le,de,me,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Главная: сезонная подборка',
  render: args => <div style={{
    width: 393,
    maxWidth: '100%',
    boxSizing: 'border-box',
    padding: '16px 0',
    borderRadius: 24,
    background: 'var(--color-bg-surface)',
    boxShadow: 'inset 0 0 0 1px var(--color-border-default)'
  }}>
      <div style={{
      display: 'grid',
      gap: 4,
      padding: '0 16px',
      textAlign: 'center'
    }}>
        <span className="im-20-b" style={{
        color: 'var(--color-text-primary)'
      }}>
          Сезонная подборка
        </span>
        <span className="im-14-r" style={{
        color: 'var(--color-text-secondary)'
      }}>
          Идеи для впечатлений в этом сезоне
        </span>
      </div>
      <div style={{
      padding: '56px 16px 0'
    }}>
        <CollectionBanner {...args} />
      </div>
    </div>
}`,...(de=(le=T.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Блок «Сезонная подборка» на главной «Выходные»: заголовок секции и баннер на экране 393.",...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var ge,fe,he,xe,ye;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Одна карточка',
  args: {
    items: ITEMS.slice(0, 1)
  },
  render: args => <Screen>
      <CollectionBanner {...args} />
    </Screen>
}`,...(he=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:he.source},description:{story:"Одна экскурсия в подборке: стопки нет, крутить нечего.",...(ye=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:ye.description}}};const it=Object.freeze(Object.defineProperty({__proto__:null,HomeCase:T,Playground:B,Seasons:F,SingleItem:D,Skeleton:A,__namedExportsOrder:at,default:nt},Symbol.toStringTag,{value:"Module"}));export{it as B,T as H,B as P,F as S,A as a,D as b};
