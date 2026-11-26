import{r as $,j as e}from"./iframe-DyD5Yel4.js";import{c as It}from"./cx-2dOUpm6k.js";import{P as le}from"./Pressable-CAjp7WdB.js";import{u as Nt}from"./useControllableState-D9cJCl43.js";import{u as Ht}from"./usePress-XYzAalw7.js";import{S as Ot,a as D}from"./Skeleton-dpQW7cMp.js";import{A as Mt}from"./AllTile-C6kvbWaL.js";import{P as Wt}from"./PriceTag-VsIhNLIX.js";import{A as qt}from"./Attribute-DFV0-_Ht.js";import{B as Xt}from"./Button-grGIhY78.js";import{I as Vt}from"./IconButton-DRcBY4IG.js";import{F as Ut}from"./FavouriteIcon-C8L7FAG0.js";import{L as Gt}from"./LikeButton-BMykRAqT.js";import{P as ce}from"./PromoBadge-MRvWEy0B.js";import{O as $t}from"./OldPrice-CFXJrPco.js";import{M as Zt,N as y,T as Yt,B as Kt}from"./home-CSe8AaHy.js";import{C as Jt}from"./Caption-D_clnAXK.js";import{F as Qt}from"./figma-BZstJmpc.js";import{F as en}from"./FullWidthFrame-BO26oEhV.js";import{P as l,D as W}from"./photos-D1Eacwwu.js";import{S as f}from"./Screen-D3FX-wep.js";import{S as Z}from"./SectionTitle-CwRady4O.js";import{C as tn}from"./Cell-BMryoHV2.js";import{P as nn}from"./PillButton-Cdj7WtD9.js";import{M as an}from"./brand-CGrxom_Q.js";import{a as un,U as sn,M as rn}from"./deprecated-D5zQVeCK.js";import{M as Ct,L as on}from"./places-CYDz-5dl.js";import{C as ln}from"./time-lpmEQjgl.js";import{U as cn}from"./people-tOiSq3ZR.js";const dn="_root_1efen_8",mn="_photo_1efen_86",pn="_imgBox_1efen_102",xn="_img_1efen_102",hn="_badges_1efen_119",gn="_like_1efen_139",fn="_info_1efen_155",yn="_main_1efen_170",Cn="_title_1efen_205",kn="_meta_1efen_215",vn="_city_1efen_233",bn="_dot_1efen_239",En="_duration_1efen_240",wn="_priceRow_1efen_245",Bn="_price_1efen_245",Tn="_sr_1efen_264",An="_xsPhoto_1efen_277",jn="_xsText_1efen_287",Sn="_hit_1efen_297",_n="_bg_1efen_314",Dn="_scrim_1efen_323",Fn="_blur_1efen_336",Ln="_blurImg_1efen_345",Pn="_xlContent_1efen_358",Rn="_xlHeading_1efen_368",zn="_xlTitle_1efen_376",In="_attrs_1efen_387",Nn="_attr_1efen_387",Hn="_xlActions_1efen_401",On="_xlHeart_1efen_417",Mn="_skText_1efen_422",Wn="_skBars_1efen_427",qn="_skRow_1efen_442",Xn="_skRowText_1efen_448",n={root:dn,photo:mn,imgBox:pn,img:xn,badges:hn,like:gn,info:fn,main:yn,title:Cn,meta:kn,city:vn,dot:bn,duration:En,priceRow:wn,price:Bn,sr:Tn,xsPhoto:An,xsText:jn,hit:Sn,bg:_n,scrim:Dn,blur:Fn,blurImg:Ln,xlContent:Pn,xlHeading:Rn,xlTitle:zn,attrs:In,attr:Nn,xlActions:Hn,xlHeart:On,skText:Mn,skBars:Wn,skRow:qn,skRowText:Xn},Vn={xs:"72px",sm:"50vw",md:"300px",lg:"100vw",xl:"360px"},Un=t=>t.replace(/⃀/g,"сом");function Gn({children:t}){return e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n.price,"aria-hidden":"true",children:t}),e.jsx("span",{className:n.sr,children:Un(t)})]})}function de({discount:t,mplus:i}){return t==null&&!i?null:e.jsxs("span",{className:n.badges,children:[t!=null&&e.jsx(ce,{variant:"discount",shape:"slanted",size:18,value:t}),i&&e.jsx(ce,{variant:"mplus",shape:"slanted",size:18})]})}const a=$.forwardRef(function({size:i="md",all:u=!1,skeleton:s=!1,title:o,city:m,duration:p,price:d,oldPrice:g,discount:K,mplus:J=!1,image:P,imageSrcSet:R,imageSizes:wt,imageAlt:Bt="",priority:Tt=!1,attributes:X,actionLabel:Q="Посмотреть",allLabel:At="Показать все",showLike:ee=!0,liked:jt,defaultLiked:St=!1,onLikedChange:_t,href:te,target:Dt,rel:Ft,download:Lt,hrefLang:Pt,onClick:ne,className:ae,...z},I){const[N,ie]=Nt(jt,St,_t),H=!s&&(u||!!te||!!ne),O=Ht(H),M={href:te,target:Dt,rel:Ft,download:Lt,hrefLang:Pt,onClick:ne},V=It(n.root,ae);if(s)return e.jsx(Ot,{ref:I,...z,className:V,"data-size":i,"data-skeleton":"",children:i==="xl"?e.jsx(D,{height:504,radius:24}):i==="xs"?e.jsxs("div",{className:n.skRow,children:[e.jsx(D,{width:72,height:72,radius:16}),e.jsx("div",{className:n.skRowText,children:e.jsx(me,{})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:n.photo,children:e.jsx(D,{radius:20,height:"100%"})}),e.jsx("div",{className:n.info,children:e.jsx(me,{small:i==="sm"})})]})});if(u)return e.jsx(Mt,{ref:I,...z,...M,className:ae,size:i==="sm"?"sm":"md",label:At});const Rt=Tt,ue=wt??Vn[i],U={src:P,srcSet:R,sizes:R?ue:void 0,alt:Bt,draggable:!1,loading:Rt?"eager":"lazy",decoding:"async"};if(i==="xl")return e.jsxs("div",{ref:I,...z,className:V,"data-size":"xl","data-pressed":O.pressed||void 0,"data-interactive":H||void 0,children:[P?e.jsx("img",{className:n.bg,...U}):e.jsx("span",{className:n.bg}),P&&e.jsx("span",{className:n.blur,"aria-hidden":"true",children:e.jsx("img",{className:n.blurImg,src:P,srcSet:R,sizes:R?ue:void 0,alt:"",draggable:!1,loading:"lazy",decoding:"async"})}),e.jsx("span",{className:n.scrim,"aria-hidden":"true"}),H&&e.jsx(le,{...M,className:n.hit,"data-card-hit":"","aria-hidden":"true",tabIndex:-1,pressable:!1,...O.handlers}),e.jsx(de,{discount:K,mplus:J}),e.jsxs("div",{className:n.xlContent,children:[d&&e.jsx(Wt,{size:18,children:d}),e.jsxs("div",{className:n.xlHeading,children:[e.jsx("span",{className:n.xlTitle,children:o}),X&&X.length>0&&e.jsx("ul",{className:n.attrs,children:X.map((G,zt)=>e.jsx("li",{className:n.attr,children:e.jsx(qt,{variant:"inverse",icon:G.icon,children:G.label})},`${G.label}-${zt}`))})]})]}),e.jsxs("div",{className:n.xlActions,children:[e.jsx(Xt,{...M,size:48,radius:"full",variant:"primary","aria-label":`${Q}: ${o}`,children:Q}),ee&&e.jsx(Vt,{className:n.xlHeart,variant:"glass-light",size:48,radius:"full","aria-label":`В избранное: ${o}`,"aria-pressed":N,icon:e.jsx(Ut,{liked:N,variant:"outline"}),onClick:()=>ie(!N)})]})]});const se=e.jsx(le,{...M,className:n.main,pressable:!1,...O.handlers,children:e.jsx("span",{className:n.title,children:o})}),re=i==="xs"?e.jsx("span",{className:n.meta,children:[m,p].filter(Boolean).join(" · ")}):(m||p)&&e.jsxs("span",{className:n.meta,children:[m&&e.jsx("span",{className:n.city,children:m}),m&&p&&e.jsx("span",{className:n.dot,"aria-hidden":"true",children:"∙"}),p&&e.jsx("span",{className:n.duration,children:p})]}),oe=(d||g)&&e.jsxs("span",{className:n.priceRow,children:[d&&e.jsx(Gn,{children:d}),g&&e.jsx($t,{size:14,children:g})]});return e.jsx("div",{ref:I,...z,className:V,"data-size":i,"data-pressed":O.pressed||void 0,"data-interactive":H||void 0,children:i==="xs"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n.xsPhoto,children:e.jsx("img",{className:n.img,...U})}),e.jsxs("div",{className:n.xsText,children:[se,re,oe]})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n.photo,children:e.jsxs("span",{className:n.imgBox,children:[e.jsx("img",{className:n.img,...U}),e.jsx(de,{discount:K,mplus:J})]})}),e.jsxs("div",{className:n.info,children:[se,re,oe]}),ee&&e.jsx(Gt,{className:n.like,name:o,liked:N,onLikedChange:ie})]})})});function me({small:t=!1}){return e.jsxs("span",{className:n.skText,children:[e.jsxs("span",{className:n.skBars,children:[e.jsx(D,{width:127,height:t?4:6}),e.jsx(D,{width:65,height:4})]}),e.jsx(D,{width:50,height:t?6:8})]})}a.__docgenInfo={description:"ExcursionCard (Figma excursion_card 883:4327): an excursion in a list, a scroll row or a showcase.\nXS is a row with a small photo, SM a tile of the two-column grid (fills its cell, the photo stays square), MD a tile of a\nscroll row, LG a wide card that fills its column, XL a large card with a button.\n\nThe whole card is one target: the title is a link (`href`) or a button (`onClick`) stretched over the card, so a\nscreen reader gets one stop with the full text and the heart stays its own button. Press: the card sinks\na little under the finger; the heart has its own press.\nXL: the button «Посмотреть» is the stop for the keyboard and screen readers; a tap on the rest of the card does the\nsame through an invisible target under the content (out of the tab order, hidden from screen readers).\n`onClick` gets the native event. `ref`, `className`, `style` and the rest props (pointer handlers included) go to the root.",methods:[],displayName:"ExcursionCard",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},all:{required:!1,tsType:{name:"boolean"},description:"Figma Type=All: the «Показать все» tile that ends a row (Figma has it for SM and MD). `title` is not shown then.",defaultValue:{value:"false",computed:!1}},skeleton:{required:!1,tsType:{name:"boolean"},description:"Figma Shimmer=True: the skeleton of this size, nothing interactive.",defaultValue:{value:"false",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Figma «Title»: «Архитектурно-историческая прогулка по Бишкеку». Two lines at most."},city:{required:!1,tsType:{name:"string"},description:"Figma «City»: «Бишкек»."},duration:{required:!1,tsType:{name:"string"},description:"Figma «Duration»: «2,5 часа»."},price:{required:!1,tsType:{name:"string"},description:"Figma «Price» with the currency, as shown: «6 390 ⃀»."},oldPrice:{required:!1,tsType:{name:"string"},description:"Figma «Show old price»: the price before the discount, «2 200 ⃀». Shown when it is given. Not on XL (its price tag has none)."},discount:{required:!1,tsType:{name:"number"},description:"Figma «Show discount»: percent, `7` shows «−7 %». Not on XS."},mplus:{required:!1,tsType:{name:"boolean"},description:"Figma «Show M+»: the offer pays M+ bonuses. Not on XS.",defaultValue:{value:"false",computed:!1}},image:{required:!1,tsType:{name:"string"},description:"The photo (cover). Without it a grey fill."},imageSrcSet:{required:!1,tsType:{name:"string"},description:""},imageSizes:{required:!1,tsType:{name:"string"},description:"`sizes` of the photo, for `imageSrcSet`. Default is the photo's real width per size (XS 72px, SM half the screen, MD 300px, LG the screen, XL 360px)."},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text of the photo. Empty by default: the title already tells what it is.",defaultValue:{value:"''",computed:!1}},priority:{required:!1,tsType:{name:"boolean"},description:"The photo is above the fold (the first cards of the home): loads at once instead of lazily.",defaultValue:{value:"false",computed:!1}},attributes:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** A 12 px Solid icon. */
  icon?: ReactNode;
  label: string;
}`,signature:{properties:[{key:"icon",value:{name:"ReactNode",required:!1},description:"A 12 px Solid icon."},{key:"label",value:{name:"string",required:!0}}]}}],raw:"ExcursionCardAttribute[]"},description:"XL: facts under the title, «2 дня», «Средне», «Группа до 7 человек»."},actionLabel:{required:!1,tsType:{name:"string"},description:"XL: the label of the button, default «Посмотреть».",defaultValue:{value:"'Посмотреть'",computed:!1}},allLabel:{required:!1,tsType:{name:"string"},description:"All: the label under the arrow, default «Показать все».",defaultValue:{value:"'Показать все'",computed:!1}},showLike:{required:!1,tsType:{name:"boolean"},description:"Heart on the photo (SM, MD, LG) and next to the button (XL). Default true. Not on XS.",defaultValue:{value:"true",computed:!1}},liked:{required:!1,tsType:{name:"boolean"},description:""},defaultLiked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLikedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(liked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"liked"}],return:{name:"void"}}},description:""}}};const $n="Бишкек возник на Великом шёлковом пути и вырос из средневековой крепости в большой мультикультурный город. Его создали разные народы, и потому Бишкек хранит наследие кыргызов, русских, дунган, татар, узбеков. Мы проведём вас через пёструю историю столицы, покажем главные памятники и укажем на неочевидные, хранящие следы загадочных событий.",Zn=t=>[{id:"canyon",title:"Южный берег озера Иссык-Куль и инопланетный каньон Сказка",city:"Бишкек",duration:"12 часов",price:"35 099 ⃀",oldPrice:"36 946 ⃀",discount:5,mplus:!0,liked:!0,image:t.canyon},{id:"tower",title:"Салам, Бишкек!",city:"Бишкек",duration:"3 часа",price:"8 750 ⃀",image:t.tower},{id:"dishes",title:"Вкус Кыргызстана: мастер-класс по бешбармаку",city:"Бишкек",duration:"1 час",price:"18 473 ⃀",mplus:!0,image:t.dishes},{id:"lake",title:"Треккинг к озеру Кель-Тор",city:"Бишкек",duration:"10 часов",price:"27 224 ⃀",oldPrice:"32 028 ⃀",discount:15,image:t.lake},{id:"lake-2",title:"Треккинг к озеру Кель-Тор",city:"Бишкек",duration:"10 часов",price:"27 224 ⃀",oldPrice:"32 028 ⃀",discount:15,image:t.lake}],Yn=[{icon:"check",text:"Отмена за 1 день — вернём от 100% суммы"},{icon:"check",text:"Отмена за 5 день — вернём 20% суммы"}];function Kn(t){return{variant:"image",title:"Секреты Бишкека",price:"4 756 ⃀",mplus:!0,attributes:[{icon:"clock",label:"2,5 часа"},{icon:"foot",label:"Пешком"},{icon:"mountain",label:"Легко"},{icon:"users",label:"Группа до 10 человек"}],facts:[{label:"Кыргызстан",value:"Бишкек",country:"kg"},{label:"Длительность",value:"2,5 часа"}],about:$n,features:[{icon:"camera",label:"Фото в видео"},{icon:"compass",label:"Гид"}],location:{name:"Филармония им. Т. Сатылганова",address:"Кыргызстан, Бишкек"},organiser:{name:"Kettik",offers:"12 предложений"},returns:Yn,similar:Zn(t),total:"4 756 ⃀"}}const Jn=""+new URL("home-sparkles-B7l4i6Z9.svg",import.meta.url).href,{expect:r,fn:h,userEvent:x,waitFor:Qn,within:kt}=__STORYBOOK_MODULE_TEST__,ea={title:"Components/ExcursionCard",component:a,parameters:{layout:"fullscreen",design:{type:"figma",url:Qt("883-4327")}},args:{size:"md",all:!1,skeleton:!1,title:"Архитектурно-историческая прогулка по Бишкеку",city:"Бишкек",duration:"2,5 часа",price:"6 390 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0,image:l.tianShan,showLike:!0,onClick:h(),onLikedChange:h()},argTypes:{size:{control:"inline-radio",options:["xs","sm","md","lg","xl"]},all:{control:"boolean"},skeleton:{control:"boolean"},discount:{control:{type:"number",min:1,max:99}},mplus:{control:"boolean"},showLike:{control:"boolean"},image:{control:!1},imageSrcSet:{control:!1},imageSizes:{control:!1},attributes:{control:!1},liked:{control:!1},onClick:{control:!1},onLikedChange:{control:!1},href:{control:!1}}},F=[t=>e.jsx(en,{children:e.jsx(t,{})})],Y=[{icon:e.jsx(ln,{size:12}),label:"2 дня"},{icon:e.jsx(Ct,{}),label:"Средне"},{icon:e.jsx(cn,{}),label:"Группа до 7 человек"},{icon:e.jsx(on,{size:12}),label:"Бишкек"}],C={decorators:F,render:t=>e.jsx(a,{...t,attributes:t.size==="xl"?Y:void 0,image:t.size==="xs"?l.xsLake:t.image})},ta=["xs","sm","md","lg","xl"],q={xs:300,sm:182.5,lg:360},na={xs:{title:"Контент",city:"Алматы",duration:"13 часов",price:"6 390 ⃀",oldPrice:"2 200 ⃀"},sm:{title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0},md:{title:"Архитектурно-историческая прогулка по Бишкеку",city:"Бишкек",duration:"2,5 часа",price:"6 390 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0},lg:{title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",mplus:!0},xl:{title:"Архитектурно-историческая прогулка по Бишкеку",price:"4 217 ⃀",discount:5,mplus:!0}},k={decorators:F,name:"Все варианты",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gap:32,justifyItems:"start"},children:ta.map(t=>e.jsxs("div",{style:{display:"grid",gap:8},children:[e.jsxs(Jt,{children:["Size=",t.toUpperCase(),": Default · Skeleton",t==="sm"||t==="md"?" · All":""]}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsx(a,{size:t,title:"",...na[t],image:t==="xs"?l.xsLake:l.tianShan,attributes:t==="xl"?Y:void 0,onClick:()=>{},style:q[t]?{width:q[t]}:void 0}),e.jsx(a,{size:t,skeleton:!0,title:"",style:q[t]?{width:q[t]}:void 0}),(t==="sm"||t==="md")&&e.jsx(a,{size:t,all:!0,title:"",onClick:()=>{},style:t==="sm"?{width:182.5}:void 0})]})]},t))})},v={decorators:F,name:"Состав карточки",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"start"},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"16px 4px",width:"100%",maxWidth:369,alignItems:"start"},children:[e.jsx(a,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",oldPrice:"2 200 ⃀",discount:7,mplus:!0,image:l.kelTor}),e.jsx(a,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",mplus:!0,image:l.kelTor}),e.jsx(a,{size:"sm",title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",image:l.kelTor,showLike:!1}),e.jsx(a,{size:"sm",title:"Каракол, ущелье",price:"2 000 ⃀",image:l.kelTor})]}),e.jsx(a,{size:"md",title:"Путешествие вокруг Иссык-Куля",city:"Чолпон-Ата",duration:"13 часов",price:"53 679 ⃀",image:l.clouds}),e.jsx(a,{size:"xs",title:"Святое озеро, Григорьевское и Семёновское ущелья",city:"Алматы",duration:"13 часов",price:"3 441 ⃀",oldPrice:"3 800 ⃀",image:l.xsLake,style:{maxWidth:320}})]})},c=()=>{};function vt({title:t,disclosure:i,children:u}){return e.jsxs("section",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",height:48},children:e.jsx(Z,{size:20,disclosure:i,children:t})}),u]})}function L({children:t,gap:i=8,padding:u="0 16px",height:s,startAt:o="start",centreIndex:m=0}){const p=$.useRef(null);return $.useLayoutEffect(()=>{const d=p.current;if(d&&(o==="end"&&(d.scrollLeft=d.scrollWidth),o==="centre")){const g=d.children[m];g&&(d.scrollLeft=g.offsetLeft-(d.clientWidth-g.offsetWidth)/2)}},[o,m]),e.jsx("div",{ref:p,style:{boxSizing:"border-box",display:"flex",alignItems:"flex-start",gap:i,padding:u,height:s,overflowX:"auto",scrollbarWidth:"none"},children:t})}const aa=t=>[{icon:e.jsx(un,{}),label:t.attributes[0]},{icon:e.jsx(Ct,{}),label:t.attributes[1]},{icon:e.jsx(sn,{}),label:t.attributes[2]},{icon:e.jsx(rn,{}),label:t.city}],bt=Kn({canyon:W.card1,tower:W.card3,dishes:W.card2,lake:W.card4}).similar,b={name:"Кейсы · Многодневные поездки",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:24},children:e.jsx(vt,{title:"Многодневные поездки",disclosure:{onClick:c},children:e.jsxs(L,{height:272,children:[Zt.map(t=>e.jsx(a,{size:"md",title:t.title,city:t.city,duration:t.duration,price:t.price,oldPrice:t.oldPrice,discount:t.discount,mplus:t.mplus,image:t.image,onClick:c},t.title)),e.jsx("div",{style:{width:182.5,flex:"none"},children:e.jsx(a,{all:!0,size:"md",title:"",allLabel:"Показать все",onClick:c})})]})})})},E={name:"Кейсы · Поездки на один день",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:24},children:e.jsx(vt,{title:"Поездки на один день",disclosure:{onClick:c},children:e.jsxs(L,{height:256,startAt:"end",children:[Yt.map(t=>e.jsx(a,{size:"md",title:t.title,city:t.city,duration:t.duration,price:t.price,oldPrice:t.oldPrice,discount:t.discount,mplus:t.mplus,image:t.image,onClick:c},t.title)),e.jsx("div",{style:{width:164,height:180,flex:"none"},children:e.jsx(a,{all:!0,size:"sm",title:"",allLabel:"Показать все",onClick:c})})]})})})},w={name:"Кейсы · В рассрочку через M+",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:0,paddingTop:24},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",height:64},children:e.jsx(Z,{size:24,align:"center",subtitle:"Откройте новые места уже сегодня",iconRight:e.jsx(an,{size:16}),children:"В рассрочку через"})}),e.jsx(L,{height:504,startAt:"centre",centreIndex:2,children:Kt.map(t=>e.jsx(a,{size:"xl",title:t.title,price:t.price,discount:t.discount,mplus:!0,attributes:aa(t),image:t.image,onClick:c},t.title))})]})})},B={name:"Кейсы · Новинки, строки XS",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:24},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(tn,{icon:e.jsx("img",{src:Jn,alt:"",width:40,height:40}),iconSize:40,iconBackground:!1,title:"Новинки",subtitle:"Места, которые стоит увидеть",disclosure:e.jsx(nn,{variant:"link",onClick:c,children:"Все"})}),e.jsx(L,{gap:16,height:272,children:[0,1,2].map(t=>e.jsx("div",{style:{display:"flex",flex:"none",flexDirection:"column",gap:16,width:320},children:[0,1,2].map(i=>e.jsx(a,{size:"xs",title:y.title,city:y.city,duration:y.duration,price:y.price,oldPrice:y.oldPrice,image:y.image,onClick:c},i))},t))})]})})},T={name:"Кейсы · Результат поиска: сетка S и L",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsxs(f,{style:{gap:16},children:[e.jsx("div",{"data-case":"grid",style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"16px 4px",padding:"0 12px",alignItems:"start"},children:bt.slice(0,4).map(t=>e.jsx(a,{size:"sm",title:t.title,city:t.city,duration:t.duration,price:t.price,oldPrice:t.oldPrice,discount:t.discount,mplus:t.mplus,image:t.image,onClick:c},t.id))}),e.jsx("div",{"data-case":"column",style:{display:"grid"},children:e.jsx(a,{size:"lg",title:"Каракол, ущелье",city:"Бишкек",duration:"6 часов",price:"2 000 ⃀",mplus:!0,image:l.kelTor,onClick:c})})]})},A={name:"Кейсы · Вам может понравиться",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:24},children:e.jsxs("section",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",height:48,padding:"0 16px"},children:e.jsx(Z,{size:20,children:"Вам может понравиться"})}),e.jsxs(L,{gap:4,padding:"0 12px",children:[bt.map(t=>e.jsx(a,{size:"sm",title:t.title,city:t.city,duration:t.duration,price:t.price,oldPrice:t.oldPrice,discount:t.discount,mplus:t.mplus,image:t.image,onClick:c},t.id)),e.jsx("div",{style:{width:182.5,flex:"none"},children:e.jsx(a,{all:!0,size:"sm",title:"",allLabel:"Показать все",onClick:c})})]})]})})},j={name:"Кейсы · Избранное",parameters:{controls:{disable:!0}},globals:{viewport:{value:"mbank393",isRotated:!1}},render:()=>e.jsx(f,{style:{gap:0},children:e.jsx("div",{style:{display:"grid",width:360,margin:"0 auto"},children:[0,1].map(t=>e.jsx(a,{size:"lg",title:"Каракол, ущелье",city:"Бишкек",duration:"3 дня",price:"2 000 ⃀",oldPrice:"97 938 ⃀",discount:10,image:l.kelTor,onClick:c},t))})})},Et=(t={})=>({title:"Каракол, ущелье",city:"Бишкек",duration:"8 часов",price:"2 000 ⃀",image:l.kelTor,...t});function ia({onClick:t,onLikedChange:i,onAll:u,onDown:s}){return e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{size:"md",...Et(),onClick:t,onLikedChange:i,onPointerDown:s}),e.jsx(a,{size:"md",all:!0,title:"",onClick:u})]})}const S={decorators:F,name:"Тест: тап, сердце, Enter",parameters:{controls:{disable:!0}},args:{onClick:h(),onLikedChange:h(),onAll:h(),onDown:h()},render:t=>e.jsx(ia,{...t}),play:async({canvasElement:t,args:i})=>{const u=i,s=kt(t);await x.click(s.getByRole("button",{name:/В избранное/})),await r(u.onLikedChange).toHaveBeenLastCalledWith(!0),await r(u.onClick).not.toHaveBeenCalled(),await r(s.getByRole("button",{name:/В избранное/})).toHaveAttribute("aria-pressed","true"),await x.click(s.getByText("Каракол, ущелье")),await r(u.onClick).toHaveBeenCalledTimes(1),await r(u.onClick).toHaveBeenLastCalledWith(r.objectContaining({type:"click"})),await r(u.onDown).toHaveBeenCalled(),s.getByRole("button",{name:/^Каракол, ущелье$/}).focus(),await x.keyboard("{Enter}"),await Qn(()=>r(u.onClick).toHaveBeenCalledTimes(2)),await x.click(s.getByRole("button",{name:"Показать все"})),await x.click(t.querySelector("[data-all-hit]")),await r(u.onAll).toHaveBeenCalledTimes(2)}},_={decorators:F,name:"Тест: XL, кнопка и сердце",parameters:{controls:{disable:!0}},args:{onClick:h(),onLikedChange:h()},render:t=>e.jsx(a,{size:"xl",...Et({title:"Чимган, Амирсой и Чарвакское водохранилище",price:"4 910 ⃀",discount:15,mplus:!0,image:l.tianShan}),attributes:Y,onClick:t.onClick,onLikedChange:t.onLikedChange}),play:async({canvasElement:t,args:i})=>{const u=i,s=kt(t);await x.click(s.getByRole("button",{name:/Посмотреть/})),await r(u.onClick).toHaveBeenCalledTimes(1);const o=t.querySelector("[data-card-hit]");await r(o).toHaveAttribute("aria-hidden","true"),await r(o).toHaveAttribute("tabindex","-1"),await x.click(o),await r(u.onClick).toHaveBeenCalledTimes(2),await x.click(s.getByRole("button",{name:/В избранное/})),await r(u.onClick).toHaveBeenCalledTimes(2),await r(s.getByRole("button",{name:/В избранное/})).toHaveAttribute("aria-pressed","true")}},ua=["Playground","Variants","Content","CaseMultiday","CaseTrips","CaseXL","CaseNew","CaseGrid","CaseDetail","CaseFavourites","Interaction","InteractionXL"];var pe,xe,he,ge,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  decorators: framed,
  render: args => <ExcursionCard {...args} attributes={args.size === 'xl' ? ATTRS : undefined} image={args.size === 'xs' ? PHOTOS.xsLake : args.image} />
}`,...(he=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:he.source},description:{story:"Тапни по карточке, по сердцу и по «Показать все»: у каждого своё нажатие. Размер и состав переключай в Controls.",...(fe=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:fe.description}}};var ye,Ce,ke,ve,be;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
            <ExcursionCard size={size} title="" {...FIGMA_TEXTS[size]} image={size === 'xs' ? PHOTOS.xsLake : PHOTOS.tianShan} attributes={size === 'xl' ? ATTRS : undefined} onClick={() => {}} style={VARIANT_WIDTH[size] ? {
          width: VARIANT_WIDTH[size]
        } : undefined} />
            <ExcursionCard size={size} skeleton title="" style={VARIANT_WIDTH[size] ? {
          width: VARIANT_WIDTH[size]
        } : undefined} />
            {(size === 'sm' || size === 'md') && <ExcursionCard size={size} all title="" onClick={() => {}} style={size === 'sm' ? {
          width: 182.5
        } : undefined} />}
          </div>
        </div>)}
    </div>
}`,...(ke=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source},description:{story:"The Figma matrix 883:4327: Size XS | S | M | L | XL × Type Default | All × Shimmer False | True (в коде `all`, `skeleton`), with the texts of the Figma components.",...(be=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:be.description}}};var Ee,we,Be,Te,Ae;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  decorators: framed,
  name: 'Состав карточки',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    justifyItems: 'start'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '16px 4px',
      width: '100%',
      maxWidth: 369,
      alignItems: 'start'
    }}>
        <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" oldPrice="2 200 ⃀" discount={7} mplus image={PHOTOS.kelTor} />
        <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" mplus image={PHOTOS.kelTor} />
        <ExcursionCard size="sm" title="Каракол, ущелье" city="Бишкек" duration="8 часов" price="2 000 ⃀" image={PHOTOS.kelTor} showLike={false} />
        <ExcursionCard size="sm" title="Каракол, ущелье" price="2 000 ⃀" image={PHOTOS.kelTor} />
      </div>
      <ExcursionCard size="md" title="Путешествие вокруг Иссык-Куля" city="Чолпон-Ата" duration="13 часов" price="53 679 ⃀" image={PHOTOS.clouds} />
      <ExcursionCard size="xs" title="Святое озеро, Григорьевское и Семёновское ущелья" city="Алматы" duration="13 часов" price="3 441 ⃀" oldPrice="3 800 ⃀" image={PHOTOS.xsLake} style={{
      maxWidth: 320
    }} />
    </div>
}`,...(Be=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Be.source},description:{story:"What the optional parts do: with and without the old price, the discount and M+, one and two-line titles.",...(Ae=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:Ae.description}}};var je,Se,_e,De,Fe;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Кейсы · Многодневные поездки',
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
  render: () => <Screen style={{
    gap: 24
  }}>
      <Section title="Многодневные поездки" disclosure={{
      onClick: noop
    }}>
        <Track height={272}>
          {MULTIDAY.map((c: WalkCard) => <ExcursionCard key={c.title} size="md" title={c.title} city={c.city} duration={c.duration} price={c.price} oldPrice={c.oldPrice} discount={c.discount} mplus={c.mplus} image={c.image} onClick={noop} />)}
          <div style={{
          width: 182.5,
          flex: 'none'
        }}>
            <ExcursionCard all size="md" title="" allLabel="Показать все" onClick={noop} />
          </div>
        </Track>
      </Section>
    </Screen>
}`,...(_e=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:_e.source},description:{story:"«Многодневные поездки» on the home (Figma «Прогулки по городу» in 4687:46104): M cards and «Показать все» at the end.",...(Fe=(De=b.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Le,Pe,Re,ze,Ie;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Кейсы · Поездки на один день',
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
  render: () => <Screen style={{
    gap: 24
  }}>
      <Section title="Поездки на один день" disclosure={{
      onClick: noop
    }}>
        <Track height={256} startAt="end">
          {TRIPS.map((c: WalkCard) => <ExcursionCard key={c.title} size="md" title={c.title} city={c.city} duration={c.duration} price={c.price} oldPrice={c.oldPrice} discount={c.discount} mplus={c.mplus} image={c.image} onClick={noop} />)}
          <div style={{
          width: 164,
          height: 180,
          flex: 'none'
        }}>
            <ExcursionCard all size="sm" title="" allLabel="Показать все" onClick={noop} />
          </div>
        </Track>
      </Section>
    </Screen>
}`,...(Re=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source},description:{story:"«Поездки на один день» on the home (Figma 4687:46200): the row opens at its end, the last tile is the small «Показать все».",...(Ie=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Ie.description}}};var Ne,He,Oe,Me,We;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Кейсы · В рассрочку через M+',
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
  render: () => <Screen style={{
    gap: 0,
    paddingTop: 24
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 64
      }}>
          <SectionTitle size={24} align="center" subtitle="Откройте новые места уже сегодня" iconRight={<MPlusIcon size={16} />}>
            В рассрочку через
          </SectionTitle>
        </div>
        <Track height={504} startAt="centre" centreIndex={2}>
          {BEST.map((c: XlCard) => <ExcursionCard key={c.title} size="xl" title={c.title} price={c.price} discount={c.discount} mplus attributes={xlFacts(c)} image={c.image} onClick={noop} />)}
        </Track>
      </div>
    </Screen>
}`,...(Oe=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Oe.source},description:{story:"«В рассрочку через M+» on the home (Figma «Лучшие предложения» 4687:46185): XL cards, the row opens on the third one, centred.",...(We=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:We.description}}};var qe,Xe,Ve,Ue,Ge;B.parameters={...B.parameters,docs:{...(qe=B.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Кейсы · Новинки, строки XS',
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
  render: () => <Screen style={{
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Cell icon={<img src={homeSparkles} alt="" width={40} height={40} />} iconSize={40} iconBackground={false} title="Новинки" subtitle="Места, которые стоит увидеть" disclosure={<PillButton variant="link" onClick={noop}>Все</PillButton>} />
        <Track gap={16} height={272}>
          {[0, 1, 2].map(col => <div key={col} style={{
          display: 'flex',
          flex: 'none',
          flexDirection: 'column',
          gap: 16,
          width: 320
        }}>
              {[0, 1, 2].map(row => <ExcursionCard key={row} size="xs" title={NEW_ROW.title} city={NEW_ROW.city} duration={NEW_ROW.duration} price={NEW_ROW.price} oldPrice={NEW_ROW.oldPrice} image={NEW_ROW.image} onClick={noop} />)}
            </div>)}
        </Track>
      </div>
    </Screen>
}`,...(Ve=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ve.source},description:{story:"«Новинки» on the home (Figma «Под настроение» 4687:46161): a Cell, then three columns of three XS rows, scrolled sideways.",...(Ge=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.description}}};var $e,Ze,Ye,Ke,Je;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Кейсы · Результат поиска: сетка S и L',
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
  render: () => <Screen style={{
    gap: 16
  }}>
      <div data-case="grid" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '16px 4px',
      padding: '0 12px',
      alignItems: 'start'
    }}>
        {SIMILAR.slice(0, 4).map(c => <ExcursionCard key={c.id} size="sm" title={c.title} city={c.city} duration={c.duration} price={c.price} oldPrice={c.oldPrice} discount={c.discount} mplus={c.mplus} image={c.image} onClick={noop} />)}
      </div>
      <div data-case="column" style={{
      display: 'grid'
    }}>
        <ExcursionCard size="lg" title="Каракол, ущелье" city="Бишкек" duration="6 часов" price="2 000 ⃀" mplus image={PHOTOS.kelTor} onClick={noop} />
      </div>
    </Screen>
}`,...(Ye=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:Ye.source},description:{story:`«Результат поиска» (Figma 189:16224, the frame «Результаты поиска / Кыргызстан, Бишкек»): S cards in two columns (padding 12, gap 4),
 a wide L card after two rows. The search header is not in the cases: its text is not read yet.`,...(Je=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Je.description}}};var Qe,et,tt,nt,at;A.parameters={...A.parameters,docs:{...(Qe=A.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Кейсы · Вам может понравиться',
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
  render: () => <Screen style={{
    gap: 24
  }}>
      <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        height: 48,
        padding: '0 16px'
      }}>
          <SectionTitle size={20}>Вам может понравиться</SectionTitle>
        </div>
        <Track gap={4} padding="0 12px">
          {SIMILAR.map(c => <ExcursionCard key={c.id} size="sm" title={c.title} city={c.city} duration={c.duration} price={c.price} oldPrice={c.oldPrice} discount={c.discount} mplus={c.mplus} image={c.image} onClick={noop} />)}
          <div style={{
          width: 182.5,
          flex: 'none'
        }}>
            <ExcursionCard all size="sm" title="" allLabel="Показать все" onClick={noop} />
          </div>
        </Track>
      </section>
    </Screen>
}`,...(tt=(et=A.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:`«Вам может понравиться» on the excursion page (Figma 4704:41714, the row 4704:41787): S cards in a sideways row, 4 px apart,
 12 px at the start, «Показать все» at the end. The same five cards as the screen.`,...(at=(nt=A.parameters)==null?void 0:nt.docs)==null?void 0:at.description}}};var it,ut,st,rt,ot;j.parameters={...j.parameters,docs:{...(it=j.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'Кейсы · Избранное',
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
  render: () => <Screen style={{
    gap: 0
  }}>
      <div style={{
      display: 'grid',
      width: 360,
      margin: '0 auto'
    }}>
        {[0, 1].map(i => <ExcursionCard key={i} size="lg" title="Каракол, ущелье" city="Бишкек" duration="3 дня" price="2 000 ⃀" oldPrice="97 938 ⃀" discount={10} image={PHOTOS.kelTor} onClick={noop} />)}
      </div>
    </Screen>
}`,...(st=(ut=j.parameters)==null?void 0:ut.docs)==null?void 0:st.source},description:{story:"«Избранное» (Figma 3100:42813, the frame «Frame 1»): the wide cards (360) stacked in one column.",...(ot=(rt=j.parameters)==null?void 0:rt.docs)==null?void 0:ot.description}}};var lt,ct,dt,mt,pt;S.parameters={...S.parameters,docs:{...(lt=S.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(dt=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:dt.source},description:{story:"Tap on the card, tap on the heart (the card stays closed), Enter on the title, the «Показать все» tile.",...(pt=(mt=S.parameters)==null?void 0:mt.docs)==null?void 0:pt.description}}};var xt,ht,gt,ft,yt;_.parameters={..._.parameters,docs:{...(xt=_.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(gt=(ht=_.parameters)==null?void 0:ht.docs)==null?void 0:gt.source},description:{story:"XL: the button «Посмотреть» opens, the heart likes, a tap on the photo opens too (and is not a second stop for the keyboard).",...(yt=(ft=_.parameters)==null?void 0:ft.docs)==null?void 0:yt.description}}};const Ra=Object.freeze(Object.defineProperty({__proto__:null,CaseDetail:A,CaseFavourites:j,CaseGrid:T,CaseMultiday:b,CaseNew:B,CaseTrips:E,CaseXL:w,Content:v,Interaction:S,InteractionXL:_,Playground:C,Variants:k,__namedExportsOrder:ua,default:ea},Symbol.toStringTag,{value:"Module"}));export{v as C,C as P,Ra as S,k as V,b as a,E as b,w as c,B as d,T as e,A as f,j as g};
