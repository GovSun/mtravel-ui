import{r as Ke,j as e}from"./iframe-DuqTOznb.js";import{c as yt}from"./cx-2dOUpm6k.js";import{P as te}from"./Pressable-D45JnRku.js";import{u as kt}from"./useControllableState-QyUXWn2y.js";import{u as Ct}from"./usePress-DgMUH5X0.js";import{S as bt,a as b,L as vt}from"./Skeleton-D5GPHumj.js";import{A as wt}from"./AllTile-DBXxEKhx.js";import{P as Bt}from"./PriceTag-oP1n0OvQ.js";import{A as Et}from"./Attribute-B5KkNu9f.js";import{B as Ye}from"./Button-CKwNO4NU.js";import{I as _t}from"./IconButton-BxMc4E4A.js";import{F as jt}from"./FavouriteIcon-rVoV_bSc.js";import{L as St}from"./LikeButton-BdVkZ7Un.js";import{P as ae}from"./PromoBadge-DMs6_-GK.js";import{O as Tt}from"./OldPrice-IN1_EWMK.js";import{C as At}from"./Caption-C6jupY-b.js";import{F as Lt}from"./figma-BZstJmpc.js";import{F as Rt}from"./FullWidthFrame-C5uG5fym.js";import{P as i}from"./photos-Cw5k0SX3.js";import{S as D,a as z,R as I}from"./SectionHeading-C6jU3Co2.js";import{C as Je}from"./time-CsMT4GVj.js";import{M as Qe,L as et}from"./places-z-kxph-t.js";import{U as tt}from"./people-s6FNqSUd.js";const Ht="_root_e1345_7",Dt="_photo_e1345_82",zt="_imgBox_e1345_96",Ft="_img_e1345_96",Nt="_badges_e1345_113",Pt="_like_e1345_132",Ot="_info_e1345_148",Xt="_main_e1345_163",It="_title_e1345_202",Mt="_meta_e1345_212",qt="_city_e1345_235",Vt="_dot_e1345_241",Wt="_duration_e1345_242",$t="_priceRow_e1345_247",Gt="_price_e1345_247",Ut="_sr_e1345_261",Zt="_xsPhoto_e1345_274",Kt="_xsText_e1345_284",Yt="_hit_e1345_294",Jt="_bg_e1345_311",Qt="_scrim_e1345_320",ea="_blur_e1345_333",ta="_blurImg_e1345_342",aa="_xlContent_e1345_355",na="_xlHeading_e1345_365",sa="_xlTitle_e1345_372",ua="_attrs_e1345_383",ia="_attr_e1345_383",ra="_xlActions_e1345_396",oa="_xlHeart_e1345_412",la="_skText_e1345_417",ca="_skBars_e1345_422",da="_skRow_e1345_437",ma="_skRowText_e1345_443",a={root:Ht,photo:Dt,imgBox:zt,img:Ft,badges:Nt,like:Pt,info:Ot,main:Xt,title:It,meta:Mt,city:qt,dot:Vt,duration:Wt,priceRow:$t,price:Gt,sr:Ut,xsPhoto:Zt,xsText:Kt,hit:Yt,bg:Jt,scrim:Qt,blur:ea,blurImg:ta,xlContent:aa,xlHeading:na,xlTitle:sa,attrs:ua,attr:ia,xlActions:ra,xlHeart:oa,skText:la,skBars:ca,skRow:da,skRowText:ma},pa={xs:"72px",sm:"166px",md:"300px",lg:"360px",xl:"360px"},xa=t=>t.replace(/⃀/g,"сом");function ha({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a.price,"aria-hidden":"true",children:t}),e.jsx("span",{className:a.sr,children:xa(t)})]})}function ne({discount:t,mplus:n}){return t==null&&!n?null:e.jsxs("span",{className:a.badges,children:[t!=null&&e.jsx(ae,{variant:"discount",shape:"slanted",size:18,value:t}),n&&e.jsx(ae,{variant:"mplus",shape:"slanted",size:18})]})}const s=Ke.forwardRef(function({size:n="md",all:u=!1,skeleton:r=!1,title:l,city:v,duration:w,price:B,oldPrice:F,discount:q,mplus:V=!1,image:_,imageSrcSet:j,imageSizes:ut,imageAlt:it="",priority:rt=!1,attributes:N,actionLabel:W="Посмотреть",allLabel:ot="Показать все",showLike:$=!0,liked:lt,defaultLiked:ct=!1,onLikedChange:dt,href:G,target:mt,rel:pt,download:xt,hrefLang:ht,onClick:U,className:Z,...S},T){const[A,K]=kt(lt,ct,dt),L=!r&&(u||!!G||!!U),R=Ct(L),H={href:G,target:mt,rel:pt,download:xt,hrefLang:ht,onClick:U},P=yt(a.root,Z);if(r)return e.jsx(bt,{ref:T,...S,className:P,"data-size":n,"data-skeleton":"",children:n==="xl"?e.jsx(b,{height:504,radius:24}):n==="xs"?e.jsxs("div",{className:a.skRow,children:[e.jsx(b,{width:72,height:72,radius:16}),e.jsx("div",{className:a.skRowText,children:e.jsx(se,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:a.photo,children:e.jsx(b,{radius:20,height:"100%"})}),e.jsx("div",{className:a.info,children:e.jsx(se,{small:n==="sm"})})]})});if(u)return e.jsx(wt,{ref:T,...S,...H,className:Z,size:n==="sm"?"sm":"md",label:ot});const gt=rt,Y=ut??pa[n],O={src:_,srcSet:j,sizes:j?Y:void 0,alt:it,draggable:!1,loading:gt?"eager":"lazy",decoding:"async"};if(n==="xl")return e.jsxs("div",{ref:T,...S,className:P,"data-size":"xl","data-pressed":R.pressed||void 0,"data-interactive":L||void 0,children:[_?e.jsx("img",{className:a.bg,...O}):e.jsx("span",{className:a.bg}),_&&e.jsx("span",{className:a.blur,"aria-hidden":"true",children:e.jsx("img",{className:a.blurImg,src:_,srcSet:j,sizes:j?Y:void 0,alt:"",draggable:!1,loading:"lazy",decoding:"async"})}),e.jsx("span",{className:a.scrim,"aria-hidden":"true"}),L&&e.jsx(te,{...H,className:a.hit,"data-card-hit":"","aria-hidden":"true",tabIndex:-1,pressable:!1,...R.handlers}),e.jsx(ne,{discount:q,mplus:V}),e.jsxs("div",{className:a.xlContent,children:[B&&e.jsx(Bt,{size:18,children:B}),e.jsxs("div",{className:a.xlHeading,children:[e.jsx("span",{className:a.xlTitle,children:l}),N&&N.length>0&&e.jsx("ul",{className:a.attrs,children:N.map((X,ft)=>e.jsx("li",{className:a.attr,children:e.jsx(Et,{variant:"inverse",icon:X.icon,children:X.label})},`${X.label}-${ft}`))})]})]}),e.jsxs("div",{className:a.xlActions,children:[e.jsx(Ye,{...H,size:48,radius:"full",variant:"primary","aria-label":`${W}: ${l}`,children:W}),$&&e.jsx(_t,{className:a.xlHeart,variant:"glass-light",size:48,radius:"full","aria-label":`В избранное: ${l}`,"aria-pressed":A,icon:e.jsx(jt,{liked:A,variant:"outline"}),onClick:()=>K(!A)})]})]});const J=e.jsx(te,{...H,className:a.main,pressable:!1,...R.handlers,children:e.jsx("span",{className:a.title,children:l})}),Q=n==="xs"?e.jsx("span",{className:a.meta,children:[v,w].filter(Boolean).join(" · ")}):(v||w)&&e.jsxs("span",{className:a.meta,children:[v&&e.jsx("span",{className:a.city,children:v}),v&&w&&e.jsx("span",{className:a.dot,"aria-hidden":"true",children:"∙"}),w&&e.jsx("span",{className:a.duration,children:w})]}),ee=(B||F)&&e.jsxs("span",{className:a.priceRow,children:[B&&e.jsx(ha,{children:B}),F&&n!=="xs"&&e.jsx(Tt,{size:n==="lg"?12:14,children:F})]});return e.jsx("div",{ref:T,...S,className:P,"data-size":n,"data-pressed":R.pressed||void 0,"data-interactive":L||void 0,children:n==="xs"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a.xsPhoto,children:e.jsx("img",{className:a.img,...O})}),e.jsxs("div",{className:a.xsText,children:[J,Q,ee]})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:a.photo,children:e.jsxs("span",{className:a.imgBox,children:[e.jsx("img",{className:a.img,...O}),e.jsx(ne,{discount:q,mplus:V})]})}),e.jsxs("div",{className:a.info,children:[J,Q,ee]}),$&&e.jsx(St,{className:a.like,name:l,liked:A,onLikedChange:K})]})})});function se({small:t=!1}){return e.jsxs("span",{className:a.skText,children:[e.jsxs("span",{className:a.skBars,children:[e.jsx(b,{width:127,height:t?4:6}),e.jsx(b,{width:65,height:4})]}),e.jsx(b,{width:50,height:t?6:8})]})}s.__docgenInfo={description:"ExcursionCard (Figma excursion_card 883:4327): an excursion in a list, a scroll row or a showcase.\nXS is a row with a small photo, SM and MD are tiles for rows, LG is wide, XL is a large card with a button.\n\nThe whole card is one target: the title is a link (`href`) or a button (`onClick`) stretched over the card, so a\nscreen reader gets one stop with the full text and the heart stays its own button. Press: the card sinks\na little under the finger; the heart has its own press.\nXL: the button «Посмотреть» is the stop for the keyboard and screen readers; a tap on the rest of the card does the\nsame through an invisible target under the content (out of the tab order, hidden from screen readers).\n`onClick` gets the native event. `ref`, `className`, `style` and the rest props (pointer handlers included) go to the root.",methods:[],displayName:"ExcursionCard",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},all:{required:!1,tsType:{name:"boolean"},description:"Figma Type=All: the «Показать все» tile that ends a row (Figma has it for SM and MD). `title` is not shown then.",defaultValue:{value:"false",computed:!1}},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Shimmer=True: the skeleton of this size, nothing interactive.",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Figma «Title»: «Архитектурно-историческая прогулка по Бишкеку». Two lines at most."},city:{required:!1,tsType:{name:"string"},description:"Figma «City»: «Бишкек»."},duration:{required:!1,tsType:{name:"string"},description:"Figma «Duration»: «2,5 часа»."},price:{required:!1,tsType:{name:"string"},description:"Figma «Price» with the currency, as shown: «6 390 ⃀»."},oldPrice:{required:!1,tsType:{name:"string"},description:"Figma «Show old price»: the price before the discount, «2 200 ⃀». Shown when it is given. Not on XS and XL."},discount:{required:!1,tsType:{name:"number"},description:"Figma «Show discount»: percent, `7` shows «−7 %». Not on XS."},mplus:{required:!1,tsType:{name:"boolean"},description:"Figma «Show M+»: the offer pays M+ bonuses. Not on XS.",defaultValue:{value:"false",computed:!1}},image:{required:!1,tsType:{name:"string"},description:"The photo (cover). Without it a grey fill."},imageSrcSet:{required:!1,tsType:{name:"string"},description:""},imageSizes:{required:!1,tsType:{name:"string"},description:"`sizes` of the photo, for `imageSrcSet`. Default is the photo's real width per size (XS 72px, SM 166px, MD 300px, LG and XL 360px)."},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text of the photo. Empty by default: the title already tells what it is.",defaultValue:{value:"''",computed:!1}},priority:{required:!1,tsType:{name:"boolean"},description:"The photo is above the fold (the first cards of the home): loads at once instead of lazily.",defaultValue:{value:"false",computed:!1}},attributes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** A 12 px Solid icon. */
  icon?: ReactNode;
  label: string;
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1},description:"A 12 px Solid icon."},{key:"label",value:{name:"string",required:!0}}]}}],raw:"ExcursionCardAttribute[]"},description:"XL: facts under the title, «2 дня», «Средне», «Группа до 7 человек»."},actionLabel:{required:!1,tsType:{name:"string"},description:"XL: the label of the button, default «Посмотреть».",defaultValue:{value:"'Посмотреть'",computed:!1}},allLabel:{required:!1,tsType:{name:"string"},description:"All: the label under the arrow, default «Показать все».",defaultValue:{value:"'Показать все'",computed:!1}},showLike:{required:!1,tsType:{name:"boolean"},description:"Heart on the photo (SM, MD, LG) and next to the button (XL). Default true. Not on XS.",defaultValue:{value:"true",computed:!1}},liked:{required:!1,tsType:{name:"boolean"},description:""},defaultLiked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLikedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(liked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"liked"}],return:{name:"void"}}},description:""}}};const{expect:o,fn:d,userEvent:c,waitFor:ga,within:at}=__STORYBOOK_MODULE_TEST__,fa={title:"Components/ExcursionCard",component:s,parameters:{layout:"fullscreen",design:{type:"figma",url:Lt("883-4327")}},args:{size:"md",all:!1,skeleton:!1,title:"Архитектурно-историческая прогулка по Бишкеку",city:"Бишкек",duration:"2,5 часа",price:"6 390 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0,image:i.tianShan,showLike:!0,onClick:d(),onLikedChange:d()},argTypes:{size:{control:"inline-radio",options:["xs","sm","md","lg","xl"]},all:{control:"boolean"},skeleton:{control:"boolean"},discount:{control:{type:"number",min:1,max:99}},mplus:{control:"boolean"},showLike:{control:"boolean"},image:{control:!1},imageSrcSet:{control:!1},imageSizes:{control:!1},attributes:{control:!1},liked:{control:!1},onClick:{control:!1},onLikedChange:{control:!1},href:{control:!1}}},E=[t=>e.jsx(Rt,{children:e.jsx(t,{})})],M=[{icon:e.jsx(Je,{size:12}),label:"2 дня"},{icon:e.jsx(Qe,{}),label:"Средне"},{icon:e.jsx(tt,{}),label:"Группа до 7 человек"},{icon:e.jsx(et,{size:12}),label:"Бишкек"}],m={decorators:E,render:t=>e.jsx(s,{...t,attributes:t.size==="xl"?M:void 0,image:t.size==="xs"?i.xsLake:t.image})},ya=["xs","sm","md","lg","xl"],ka={xs:{title:"Контент",city:"Алматы",duration:"13 часов",price:"4 488 ⃀"},sm:{title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0},md:{title:"Архитектурно-историческая прогулка по Бишкеку",city:"Бишкек",duration:"2,5 часа",price:"6 390 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0},lg:{title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",mplus:!0},xl:{title:"Архитектурно-историческая прогулка по Бишкеку",price:"4 217 ⃀",discount:5,mplus:!0}},p={decorators:E,name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:32,justifyItems:"start"},children:ya.map(t=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsxs(At,{children:["Size=",t.toUpperCase(),": Default · Skeleton",t==="sm"||t==="md"?" · All":""]}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(s,{size:t,title:"",...ka[t],image:t==="xs"?i.xsLake:i.tianShan,attributes:t==="xl"?M:void 0,onClick:()=>{},style:t==="xs"?{width:300}:void 0}),e.jsx(s,{size:t,skeleton:!0,title:"",style:t==="xs"?{width:300}:void 0}),(t==="sm"||t==="md")&&e.jsx(s,{size:t,all:!0,title:"",onClick:()=>{}})]})]},t))})},x={decorators:E,name:"Состав карточки",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(s,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0,image:i.kelTor}),e.jsx(s,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",mplus:!0,image:i.kelTor}),e.jsx(s,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",image:i.kelTor,showLike:!1}),e.jsx(s,{size:"sm",title:"Каракол, ущелье",price:"2 000 ⃀",image:i.kelTor}),e.jsx(s,{size:"md",title:"Путешествие вокруг Иссык-Куля",city:"Чолпон-Ата",duration:"13 часов",price:"53 679 ⃀",image:i.clouds})]})},nt=[{title:"Архитектурно-историческая прогулка по Бишкеку",city:"Бишкек",duration:"2,5 часа",price:"6 390 ⃀",oldPrice:"2 200 ⃀",image:i.tianShan},{title:"Пешком по Ташкенту: от современной столицы до исторического старого города",city:"Ташкент",duration:"4 часа",price:"1 753 ⃀",image:i.clouds},{title:"Обзорная экскурсия по Самарканду в мини-группе",city:"Самарканд",duration:"4 часа",price:"1 578 ⃀",image:i.konorchek},{title:"Многослойный Алматы: от истории к стрит-арту",city:"Алматы",duration:"2,5 часа",price:"10 605 ⃀",image:i.kelTor},{title:"Астана — гордость Казахстана",city:"Астана",duration:"2 часа",price:"3 535 ⃀",image:i.alaArcha}],h={name:"Кейсы · Ряд карточек M",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(D,{children:[e.jsx(z,{all:"Все",children:"Многодневные поездки"}),e.jsxs(I,{children:[nt.map(t=>e.jsx(s,{size:"md",discount:7,mplus:!0,onClick:()=>{},...t},t.title)),e.jsx(s,{size:"md",all:!0,title:"",onClick:()=>{}})]})]})},Ca=[{title:"Чимган, Амирсой и Чарвакское водохранилище",price:"4 910 ⃀",discount:15,image:i.tianShan,attrs:["7 часов","Средне","Группа до 12 человек","Ташкент"]},{title:"Самарканд без спешки: от Гур-Эмира до Шахи-Зинды",price:"1 491 ⃀",discount:15,image:i.konorchek,attrs:["4 часа","Легко","Группа до 10 человек","Самарканд"]},{title:"Утро в горах: Большое Алматинское озеро",price:"5 050 ⃀",discount:5,image:i.kelTor,attrs:["5 часов","Средне","Группа до 15 человек","Алматы"]}],ba=[e.jsx(Je,{size:12},"c"),e.jsx(Qe,{},"m"),e.jsx(tt,{},"u"),e.jsx(et,{size:12},"p")],g={name:"Кейсы · Большие карточки XL",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(D,{children:[e.jsx(z,{children:"Лучшие предложения"}),e.jsx(I,{children:Ca.map(t=>e.jsx(s,{size:"xl",title:t.title,price:t.price,discount:t.discount,mplus:!0,image:t.image,attributes:t.attrs.map((n,u)=>({icon:ba[u],label:n})),onClick:()=>{}},t.title))})]})},f={name:"Кейсы · Строки XS в выдаче",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(D,{children:[e.jsx(z,{children:"Под настроение"}),e.jsx(I,{gap:16,children:[0,1].map(t=>e.jsx("div",{style:{display:"grid",gap:16,width:320,flex:"none"},children:[0,1,2].map(n=>e.jsx(s,{size:"xs",title:"Святое озеро, Григорьевское и Семёновское ущелья",city:"Алматы",duration:"13 часов",price:"3 441 ⃀",image:i.xsLake,onClick:()=>{}},n))},t))})]})},y={name:"Кейсы · Загрузка",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:function(){const[n,u]=Ke.useState(!0);return e.jsxs(D,{children:[e.jsx("div",{style:{padding:"0 16px"},children:e.jsx(Ye,{size:44,variant:"secondary",onClick:()=>u(r=>!r),children:n?"Показать данные":"Снова загрузка"})}),e.jsx(z,{children:"Многодневные поездки"}),e.jsx(vt,{loading:n,contentStyle:{display:"flex",gap:8,padding:"0 16px",overflow:"hidden",alignItems:"flex-start"},style:{overflow:"hidden"},skeleton:e.jsxs("div",{style:{display:"flex",gap:8,padding:"0 16px"},children:[e.jsx(s,{size:"md",skeleton:!0,title:""}),e.jsx(s,{size:"md",skeleton:!0,title:""})]}),children:nt.slice(0,2).map(r=>e.jsx(s,{size:"md",discount:7,mplus:!0,onClick:()=>{},...r},r.title))})]})}},st=(t={})=>({title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",image:i.kelTor,...t});function va({onClick:t,onLikedChange:n,onAll:u,onDown:r}){return e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"md",...st(),onClick:t,onLikedChange:n,onPointerDown:r}),e.jsx(s,{size:"md",all:!0,title:"",onClick:u})]})}const k={decorators:E,name:"Тест: тап, сердце, Enter",parameters:{controls:{disable:!0}},args:{onClick:d(),onLikedChange:d(),onAll:d(),onDown:d()},render:t=>e.jsx(va,{...t}),play:async({canvasElement:t,args:n})=>{const u=n,r=at(t);await c.click(r.getByRole("button",{name:/В избранное/})),await o(u.onLikedChange).toHaveBeenLastCalledWith(!0),await o(u.onClick).not.toHaveBeenCalled(),await o(r.getByRole("button",{name:/В избранное/})).toHaveAttribute("aria-pressed","true"),await c.click(r.getByText("Каракол, ущелье")),await o(u.onClick).toHaveBeenCalledTimes(1),await o(u.onClick).toHaveBeenLastCalledWith(o.objectContaining({type:"click"})),await o(u.onDown).toHaveBeenCalled(),r.getByRole("button",{name:/^Каракол, ущелье$/}).focus(),await c.keyboard("{Enter}"),await ga(()=>o(u.onClick).toHaveBeenCalledTimes(2)),await c.click(r.getByRole("button",{name:"Показать все"})),await c.click(t.querySelector("[data-all-hit]")),await o(u.onAll).toHaveBeenCalledTimes(2)}},C={decorators:E,name:"Тест: XL, кнопка и сердце",parameters:{controls:{disable:!0}},args:{onClick:d(),onLikedChange:d()},render:t=>e.jsx(s,{size:"xl",...st({title:"Чимган, Амирсой и Чарвакское водохранилище",price:"4 910 ⃀",discount:15,mplus:!0,image:i.tianShan}),attributes:M,onClick:t.onClick,onLikedChange:t.onLikedChange}),play:async({canvasElement:t,args:n})=>{const u=n,r=at(t);await c.click(r.getByRole("button",{name:/Посмотреть/})),await o(u.onClick).toHaveBeenCalledTimes(1);const l=t.querySelector("[data-card-hit]");await o(l).toHaveAttribute("aria-hidden","true"),await o(l).toHaveAttribute("tabindex","-1"),await c.click(l),await o(u.onClick).toHaveBeenCalledTimes(2),await c.click(r.getByRole("button",{name:/В избранное/})),await o(u.onClick).toHaveBeenCalledTimes(2),await o(r.getByRole("button",{name:/В избранное/})).toHaveAttribute("aria-pressed","true")}},wa=["Playground","Variants","Content","CaseRowM","CaseXL","CaseXS","CaseLoading","Interaction","InteractionXL"];var ue,ie,re,oe,le;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  decorators: framed,
  render: args => <ExcursionCard {...args} attributes={args.size === 'xl' ? ATTRS : undefined} image={args.size === 'xs' ? PHOTOS.xsLake : args.image} />
}`,...(re=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:re.source},description:{story:"Тапни по карточке, по сердцу и по «Показать все»: у каждого своё нажатие. Размер и состав переключай в Controls.",...(le=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};var ce,de,me,pe,xe;p.parameters={...p.parameters,docs:{...(ce=p.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Все варианты',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 32,
    justifyItems: 'start'
  }}>
      {SIZES.map(size => <div key={size} style={{
      display: 'grid',
      gap: 8
    }}>
          <Caption>
            Size={size.toUpperCase()}: Default · Skeleton
            {size === 'sm' || size === 'md' ? ' · All' : ''}
          </Caption>
          <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
            <ExcursionCard size={size} title="" {...FIGMA_TEXTS[size]} image={size === 'xs' ? PHOTOS.xsLake : PHOTOS.tianShan} attributes={size === 'xl' ? ATTRS : undefined} onClick={() => {}} style={size === 'xs' ? {
          width: 300
        } : undefined} />
            <ExcursionCard size={size} skeleton title="" style={size === 'xs' ? {
          width: 300
        } : undefined} />
            {(size === 'sm' || size === 'md') && <ExcursionCard size={size} all title="" onClick={() => {}} />}
          </div>
        </div>)}
    </div>
}`,...(me=(de=p.parameters)==null?void 0:de.docs)==null?void 0:me.source},description:{story:"The Figma matrix 883:4327: Size XS | S | M | L | XL × Type Default | All × Shimmer False | True (в коде `all`, `skeleton`), with the texts of the Figma components.",...(xe=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:xe.description}}};var he,ge,fe,ye,ke;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Состав карточки',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
      <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" oldPrice="2 200 ⃀" discount={7} mplus image={PHOTOS.kelTor} />
      <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" mplus image={PHOTOS.kelTor} />
      <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" image={PHOTOS.kelTor} showLike={false} />
      <ExcursionCard size="sm" title="Каракол, ущелье" price="2 000 ⃀" image={PHOTOS.kelTor} />
      <ExcursionCard size="md" title="Путешествие вокруг Иссык-Куля" city="Чолпон-Ата" duration="13 часов" price="53 679 ⃀" image={PHOTOS.clouds} />
    </div>
}`,...(fe=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:fe.source},description:{story:"What the optional parts do: with and without the old price, the discount and M+, one and two-line titles.",...(ke=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:ke.description}}};var Ce,be,ve,we,Be;h.parameters={...h.parameters,docs:{...(Ce=h.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Кейсы · Ряд карточек M',
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
      <SectionHeading all="Все">Многодневные поездки</SectionHeading>
      <Row>
        {M_CARDS.map(c => <ExcursionCard key={c.title} size="md" discount={7} mplus onClick={() => {}} {...c} />)}
        <ExcursionCard size="md" all title="" onClick={() => {}} />
      </Row>
    </Screen>
}`,...(ve=(be=h.parameters)==null?void 0:be.docs)==null?void 0:ve.source},description:{story:"«Многодневные поездки» on the «Выходные» home: a scroll row of M cards, discount −7, M+, old price on the first, «Показать все» at the end.",...(Be=(we=h.parameters)==null?void 0:we.docs)==null?void 0:Be.description}}};var Ee,_e,je,Se,Te;g.parameters={...g.parameters,docs:{...(Ee=g.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Кейсы · Большие карточки XL',
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
      <SectionHeading>Лучшие предложения</SectionHeading>
      <Row>
        {XL_CARDS.map(c => <ExcursionCard key={c.title} size="xl" title={c.title} price={c.price} discount={c.discount} mplus image={c.image} attributes={c.attrs.map((label, i) => ({
        icon: ATTR_ICONS[i],
        label
      }))} onClick={() => {}} />)}
      </Row>
    </Screen>
}`,...(je=(_e=g.parameters)==null?void 0:_e.docs)==null?void 0:je.source},description:{story:"«Лучшие предложения»: XL cards, blur of the photo under the text, price tag, facts, a button and a heart.",...(Te=(Se=g.parameters)==null?void 0:Se.docs)==null?void 0:Te.description}}};var Ae,Le,Re,He,De;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Кейсы · Строки XS в выдаче',
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
      <SectionHeading>Под настроение</SectionHeading>
      <Row gap={16}>
        {[0, 1].map(col => <div key={col} style={{
        display: 'grid',
        gap: 16,
        width: 320,
        flex: 'none'
      }}>
            {[0, 1, 2].map(i => <ExcursionCard key={i} size="xs" title="Святое озеро, Григорьевское и Семёновское ущелья" city="Алматы" duration="13 часов" price="3 441 ⃀" image={PHOTOS.xsLake} onClick={() => {}} />)}
          </div>)}
      </Row>
    </Screen>
}`,...(Re=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Re.source},description:{story:"«Под настроение»: XS rows in columns of three, as in the search results.",...(De=(He=f.parameters)==null?void 0:He.docs)==null?void 0:De.description}}};var ze,Fe,Ne,Pe,Oe;y.parameters={...y.parameters,docs:{...(ze=y.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Кейсы · Загрузка',
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
    const [loading, setLoading] = useState(true);
    return <Screen>
        <div style={{
        padding: '0 16px'
      }}>
          <Button size={44} variant="secondary" onClick={() => setLoading(v => !v)}>
            {loading ? 'Показать данные' : 'Снова загрузка'}
          </Button>
        </div>
        <SectionHeading>Многодневные поездки</SectionHeading>
        <LoadingSwap loading={loading} contentStyle={{
        display: 'flex',
        gap: 8,
        padding: '0 16px',
        overflow: 'hidden',
        alignItems: 'flex-start'
      }} style={{
        overflow: 'hidden'
      }} skeleton={<div style={{
        display: 'flex',
        gap: 8,
        padding: '0 16px'
      }}>
              <ExcursionCard size="md" skeleton title="" />
              <ExcursionCard size="md" skeleton title="" />
            </div>}>
          {M_CARDS.slice(0, 2).map(c => <ExcursionCard key={c.title} size="md" discount={7} mplus onClick={() => {}} {...c} />)}
        </LoadingSwap>
      </Screen>;
  }
}`,...(Ne=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source},description:{story:"«Скелетоны · загрузка главной»: the cards of the home as skeletons, then the data comes and they fade into the cards.",...(Oe=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.description}}};var Xe,Ie,Me,qe,Ve;k.parameters={...k.parameters,docs:{...(Xe=k.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Тест: тап, сердце, Enter',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onClick: fn(),
    onLikedChange: fn(),
    onAll: fn(),
    onDown: fn()
  },
  render: args => <Host {...args as Parameters<typeof Host>[0]} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const a = args as unknown as {
      onClick: ReturnType<typeof fn>;
      onLikedChange: ReturnType<typeof fn>;
      onAll: ReturnType<typeof fn>;
      onDown: ReturnType<typeof fn>;
    };
    const c = within(canvasElement);
    // the heart likes and does not open the card
    await userEvent.click(c.getByRole('button', {
      name: /В избранное/
    }));
    await expect(a.onLikedChange).toHaveBeenLastCalledWith(true);
    await expect(a.onClick).not.toHaveBeenCalled();
    await expect(c.getByRole('button', {
      name: /В избранное/
    })).toHaveAttribute('aria-pressed', 'true');
    // a tap on the card opens it
    await userEvent.click(c.getByText('Каракол, ущелье'));
    await expect(a.onClick).toHaveBeenCalledTimes(1);
    // the caller's click gets the native event, the caller's pointer handler is not overwritten by the press feedback
    await expect(a.onClick).toHaveBeenLastCalledWith(expect.objectContaining({
      type: 'click'
    }));
    await expect(a.onDown).toHaveBeenCalled();
    // the keyboard: the title is the only stop of the card besides the heart
    const main = c.getByRole('button', {
      name: /^Каракол, ущелье$/
    });
    main.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(a.onClick).toHaveBeenCalledTimes(2));
    // «Показать все»: the arrow is the button, a tap on the label (the target under it) does the same
    await userEvent.click(c.getByRole('button', {
      name: 'Показать все'
    }));
    await userEvent.click(canvasElement.querySelector('[data-all-hit]') as HTMLElement);
    await expect(a.onAll).toHaveBeenCalledTimes(2);
  }
}`,...(Me=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source},description:{story:"Tap on the card, tap on the heart (the card stays closed), Enter on the title, the «Показать все» tile.",...(Ve=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Ve.description}}};var We,$e,Ge,Ue,Ze;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Тест: XL, кнопка и сердце',
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    onClick: fn(),
    onLikedChange: fn()
  },
  render: args => <ExcursionCard size="xl" {...props({
    title: 'Чимган, Амирсой и Чарвакское водохранилище',
    price: '4 910 ⃀',
    discount: 15,
    mplus: true,
    image: PHOTOS.tianShan
  })} attributes={ATTRS} onClick={(args as {
    onClick: () => void;
  }).onClick} onLikedChange={(args as {
    onLikedChange: (v: boolean) => void;
  }).onLikedChange} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const a = args as unknown as {
      onClick: ReturnType<typeof fn>;
      onLikedChange: ReturnType<typeof fn>;
    };
    const c = within(canvasElement);
    await userEvent.click(c.getByRole('button', {
      name: /Посмотреть/
    }));
    await expect(a.onClick).toHaveBeenCalledTimes(1);
    // a tap on the photo (the target under the content) opens it too; the target is not a stop for the keyboard
    const hit = canvasElement.querySelector('[data-card-hit]') as HTMLElement;
    await expect(hit).toHaveAttribute('aria-hidden', 'true');
    await expect(hit).toHaveAttribute('tabindex', '-1');
    await userEvent.click(hit);
    await expect(a.onClick).toHaveBeenCalledTimes(2);
    await userEvent.click(c.getByRole('button', {
      name: /В избранное/
    }));
    await expect(a.onClick).toHaveBeenCalledTimes(2);
    await expect(c.getByRole('button', {
      name: /В избранное/
    })).toHaveAttribute('aria-pressed', 'true');
  }
}`,...(Ge=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source},description:{story:"XL: the button «Посмотреть» opens, the heart likes, a tap on the photo opens too (and is not a second stop for the keyboard).",...(Ze=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.description}}};const Ga=Object.freeze(Object.defineProperty({__proto__:null,CaseLoading:y,CaseRowM:h,CaseXL:g,CaseXS:f,Content:x,Interaction:k,InteractionXL:C,Playground:m,Variants:p,__namedExportsOrder:wa,default:fa},Symbol.toStringTag,{value:"Module"}));export{x as C,m as P,Ga as S,p as V,h as a,g as b,f as c,y as d};
