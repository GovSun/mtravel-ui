import{j as n}from"./iframe-DyD5Yel4.js";import{u as o,M as d,C as i,a as l}from"./blocks-CcI75u3-.js";import{S as a,P as r,V as c,C as h,a as x,b as p,c as j,d as m,e as g,f as u,g as b}from"./ExcursionCard.stories-D4ajdO_x.js";import{M as f,U as v}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./useControllableState-D9cJCl43.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./AllTile-C6kvbWaL.js";import"./IconButton-DRcBY4IG.js";import"./arrows-0JYTYJZi.js";import"./Svg-B7GM2ZFd.js";import"./PriceTag-VsIhNLIX.js";import"./Attribute-DFV0-_Ht.js";import"./Button-grGIhY78.js";import"./FavouriteIcon-C8L7FAG0.js";import"./paths-BjPgyxdS.js";import"./LikeButton-BMykRAqT.js";import"./PromoBadge-MRvWEy0B.js";import"./OldPrice-CFXJrPco.js";import"./home-CSe8AaHy.js";import"./date-DiDJ1Ibz.js";import"./photos-D1Eacwwu.js";import"./stack-ala-archa-CZCiGT1X.js";import"./stack-kel-tor-CWBtKByR.js";import"./Caption-D_clnAXK.js";import"./figma-BZstJmpc.js";import"./FullWidthFrame-BO26oEhV.js";import"./Screen-D3FX-wep.js";import"./SectionTitle-CwRady4O.js";import"./PillButton-Cdj7WtD9.js";import"./Cell-BMryoHV2.js";import"./LeadingIcon-B3CZMOJC.js";import"./general-CSE0kF9v.js";import"./Counter-CavxruiM.js";import"./CounterButton-CAO8KXCV.js";import"./RollingNumber-Dqz4KuU3.js";import"./Toggle-BLxkVncc.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./Checkbox-CsOUmA-N.js";import"./Radio-qMCK-bX2.js";import"./CellCenter-DamPGtPP.js";import"./Divider-CIZGT-_8.js";import"./brand-CGrxom_Q.js";import"./deprecated-D5zQVeCK.js";import"./time-lpmEQjgl.js";import"./places-CYDz-5dl.js";import"./people-tOiSq3ZR.js";import"./tokens-Bc2_NrJ2.js";const w=`/*
 * ExcursionCard (Figma excursion_card 883:4327): Size XS | S | M | L | XL (code: xs | sm | md | lg | xl) × Type Default | All (AllTile) × Shimmer (code: skeleton).
 * Width: S and L fill their container (the grid cell, the column), M 300, XL 360, XS 100 %.
 * Text: control/text/default (title IM-14 S, price IM-14 B), control/text/tertiary (city · duration IM-12 R on every size),
 * XL on a photo: text/inverse/constant. Corners: photo 20 (L 28, XL 24, XS 16) have no token in the DS.
 * Photo block = the photo with a 2 px inset (Figma «Frame» p2): the corner of the photo breathes.
 */
.root {
  --_press-in: calc(var(--excursion-card-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--excursion-card-motion-press-out-duration) * var(--motion-scale));
  transition:
    transform var(--_press-out) var(--excursion-card-motion-press-easing),
    opacity var(--_press-out) var(--excursion-card-motion-press-easing);
}

.root {
  --_w: 300px;
  position: relative;
  display: block;
  flex: none;
  box-sizing: border-box;
  width: var(--_w);
  color: var(--control-text-default);
  text-align: left;
  -webkit-tap-highlight-color: transparent;
}
.root[data-size='sm'] {
  /* Figma S fills its cell of the two-column grid (product: padding 12, gap 4 → 182.5 at 393); the photo stays square.
     A size container, so the heart can sit at the bottom of the square photo (100cqw = the card width). */
  --_w: 100%;
  container-type: inline-size;
}
.root[data-size='lg'] {
  --_w: 100%; /* Figma L fills its column (product: 393, the main component 360) */
  padding: var(--spacing-md) 0;
  border-radius: 28px; /* no token: Figma 883:4328 radius 28 */
  isolation: isolate;
}
/* the card's own background blur (Figma blur/bg-16) lives on a layer under the content, so the text is never inside the filtered box */
.root[data-size='lg']::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  backdrop-filter: var(--blur-bg-16);
  -webkit-backdrop-filter: blur(8px); /* = blur/bg-16 ÷ 2, literal on purpose: WebKit computes it to none through var() */
  pointer-events: none;
}
.root[data-size='xs'] {
  --_w: 100%;
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}
.root[data-size='xl'] {
  --_w: 360px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 504px;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background-color: var(--color-bg-sunken-strong);
  isolation: isolate;
  touch-action: manipulation;
}

/* ---------- press: the card sinks under the finger; the heart and the button have their own ---------- */
.root[data-pressed] {
  transform: scale(var(--excursion-card-motion-press-scale));
  transition-duration: var(--_press-in), var(--_press-in);
}
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
    opacity: var(--excursion-card-motion-press-reduced-opacity);
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
  opacity: var(--excursion-card-motion-press-reduced-opacity);
}

/* ---------- photo (S, M, L) ---------- */
.photo {
  position: relative;
  display: block;
  box-sizing: border-box;
  aspect-ratio: 1; /* S: a square, as wide as the card */
  padding: 2px;
}
.root[data-size='md'] .photo {
  aspect-ratio: auto;
  height: 180px;
}
.root[data-size='lg'] .photo {
  aspect-ratio: auto;
  height: 184px;
  margin: var(--spacing-md) var(--spacing-md) 0;
}
.imgBox {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px; /* no token: Figma 883:4352 radius 20 (radius/lg is 16, radius/xl 24) */
  background-color: var(--color-bg-sunken-strong);
}
.img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badges {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
}
.root[data-size='md'] .badges,
.root[data-size='lg'] .badges {
  top: var(--spacing-md);
  left: var(--spacing-md);
}
.root[data-size='xl'] .badges {
  top: 20px;
  left: var(--spacing-lg);
  pointer-events: none;
}
/* the heart: 48, flush with the corner of the photo (S, L); M has a 56 button with a 24 heart → 4 px in.
   It comes after the text in the DOM (tab order), so it is placed from the card's corner, above the card-wide target.
   S: the square photo is as tall as the card is wide → top = width − 2 (inset) − 48. */
.root .like {
  position: absolute;
  z-index: 1;
  top: calc(100cqw - 50px);
  right: 2px;
}
.root[data-size='md'] .like {
  top: 126px;
  right: 6px;
}
.root[data-size='lg'] .like {
  top: 158px;
  right: 14px;
}

/* ---------- text ---------- */
.info {
  display: block;
  box-sizing: border-box;
  margin-top: var(--spacing-xs);
  padding: 0 var(--spacing-xs);
}
.root[data-size='md'] .info {
  margin-top: var(--spacing-sm);
}
.root[data-size='lg'] .info {
  margin-top: 0;
  padding: var(--spacing-sm) var(--spacing-lg);
}

/* the title is the card's target: its ::after covers the whole card, the heart sits above it */
.main {
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  text-decoration: none;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}
button.main,
a.main {
  cursor: pointer;
}
.main::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
}
.root[data-size='lg'] .main::after {
  border-radius: 28px;
}
.main:focus-visible::after {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: var(--control-text-default);
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
}

.meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  min-width: 0;
  padding-top: 2px; /* Figma Info: p2 above a 14 px line, 16 high */
  color: var(--control-text-tertiary);
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}
.root[data-size='xs'] .meta {
  display: block;
  padding-top: 0;
  line-height: 20px; /* Figma XS «Metadata»: a 20 px row */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.city {
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dot,
.duration {
  flex: none;
  white-space: nowrap;
}

.priceRow {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  box-sizing: border-box;
  min-height: 20px;
  padding: 2px 0;
}
.root[data-size='xs'] .priceRow {
  align-items: flex-end; /* Figma XS «Цена»: the price and the old price sit on the bottom of the 20 px row */
  height: 20px;
  padding: 0;
}
.price {
  color: var(--control-text-default);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  white-space: nowrap;
}
.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* ---------- XS: a row ---------- */
.xsPhoto {
  position: relative;
  display: block;
  flex: none;
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-sunken-strong);
}
.xsText {
  display: block;
  flex: 1;
  min-width: 0;
  box-sizing: border-box;
  padding: var(--spacing-xs) 0;
}

/* ---------- XL: a photo card with a blurred bottom ---------- */
/* the tap target of the whole card: under the text and the buttons */
.hit {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: inherit;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}
.bg {
  position: absolute;
  inset: 0;
  z-index: -3;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.scrim {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: linear-gradient(to bottom, rgb(0 0 0 / 0) 34%, rgb(0 0 0 / 0.38) 52%, rgb(0 0 0 / 0.5) 100%); /* no token: Figma 1198:4964 */
}
/*
 * The bottom blur. Figma 1198:4957 stacks two background blurs (40 and 200, i.e. 20 and 100 px in CSS) under gradient
 * masks; on a throttled phone that cost 26 ms a frame while scrolling. Here it is ONE blurred copy of the photo (a plain
 * filter on a static image is rasterised once and kept as a layer), clipped to the bottom 60 % and faded in from 40 to
 * 62 % of the card. A bit less blur than Figma's far layer, the same colour field under the text.
 */
.blur {
  position: absolute;
  inset: 40% 0 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 37%); /* no token: Figma 1198:4960 */
  mask-image: linear-gradient(to bottom, transparent 0%, #000 37%);
}
.blurImg {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 504px; /* the card height: the copy lines up with the photo above it */
  object-fit: cover;
  filter: blur(32px); /* no token: Figma blur 40 / 200 → one layer of 32 px */
  transform: scale(1.25);
  transform-origin: 50% 100%;
  will-change: transform;
}
.xlContent {
  position: relative;
  pointer-events: none; /* taps on the text go to .hit */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
  padding: 0 32px;
}
.xlHeading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  width: 100%;
  margin-bottom: -4px; /* Figma: the facts sit 4 px lower, the buttons stay where they are */
}
.xlTitle {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  color: var(--color-text-inverse-constant-primary);
  font: var(--font-im-20-s);
  letter-spacing: var(--tracking-im-20-s);
  text-align: center;
}
.attrs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 6px; /* Figma XL facts: rows 20 apart (no row gap) */
  margin: 0;
  padding: 0;
  list-style: none;
}
.attr {
  display: flex; /* Attribute (variant inverse) draws the icon, the text and their colours */
  height: 20px; /* Figma: a fact row is 20 high (the text 14, the icon 12) */
  white-space: nowrap;
}
.xlActions {
  position: relative;
  pointer-events: none; /* the gaps go to .hit, the buttons take their own taps */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  padding: 0 var(--spacing-md) 32px;
}
.xlActions > * {
  pointer-events: auto;
}
.xlActions > :first-child {
  min-width: 160px;
}
/* the glass of the heart is IconButton variant="glass-light" */
.xlHeart {
  flex: none;
}

/* ---------- Skeleton: the placeholder of the size (Figma 1067:2041, 1217:670, 1067:4601, 1217:677, 1217:678) ---------- */
.skText {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.skBars {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0;
}
.root[data-skeleton] .info {
  padding-top: 0;
}
.root[data-skeleton][data-size='md'] .info {
  padding: var(--spacing-sm) var(--spacing-xs);
}
.root[data-skeleton][data-size='lg'] .info {
  padding: var(--spacing-sm) var(--spacing-lg);
}
.skRow {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start; /* Figma 1217:678: the bars start at the top, 8 + 4 below the edge */
  width: 100%;
}
.skRowText {
  box-sizing: border-box;
  padding: var(--spacing-sm) var(--spacing-xs);
}
`;function s(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"excursioncard",children:"ExcursionCard"}),`
`,n.jsx(e.p,{children:"Карточка экскурсии: в ряду на главной, в выдаче поиска, в подборке. Пять размеров под разные места: XS — строка списка, S — плитка сетки в две колонки, M — плитка горизонтального ряда, L — широкая карточка во всю колонку, XL — большая витрина с кнопкой."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4327",rel:"nofollow",children:"excursion_card 883:4327"}),": Size XS | S | M | L | XL × Type Default | All × Shimmer False | True."]}),`
`,n.jsxs(e.p,{children:["Имена в коде: размеры ",n.jsx(e.code,{children:"xs"}),", ",n.jsx(e.code,{children:"sm"}),", ",n.jsx(e.code,{children:"md"}),", ",n.jsx(e.code,{children:"lg"}),", ",n.jsx(e.code,{children:"xl"})," (в Figma S, M, L), Type=All — булево ",n.jsx(e.code,{children:"all"}),", Shimmer — ",n.jsx(e.code,{children:"skeleton"}),"."]}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(l,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ExcursionCard } from '@mtravel/ui';

<ExcursionCard
  size="md"
  title="Архитектурно-историческая прогулка по Бишкеку"
  city="Бишкек"
  duration="2,5 часа"
  price="6 390 ⃀"
  oldPrice="2 200 ⃀"
  discount={7}
  mplus
  image={photo}
  href="/excursions/42"
  onClick={(event) => router.open(event)} // получает настоящее событие
  onLikedChange={(liked) => save(liked)}
/>

// конец ряда
<ExcursionCard size="md" all title="" onClick={openCatalog} />

// пока грузится
<ExcursionCard size="md" skeleton title="" />
`})}),`
`,n.jsxs(e.p,{children:["Карточка собрана из готовых частей DS: ",n.jsx(e.a,{href:"?path=/docs/components-promobadge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PromoBadge"}),", ",n.jsx(e.a,{href:"?path=/docs/components-oldprice--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"OldPrice"}),", ",n.jsx(e.a,{href:"?path=/docs/components-pricetag--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PriceTag"}),", LikeButton, Button, IconButton и Skeleton. Своих копий внутри нет."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты (в том числе ",n.jsx(e.code,{children:"onPointerDown"})," и другие обработчики указателя) уходят на корневой ",n.jsx(e.code,{children:"<div>"}),"; нажатие карточки их не перезаписывает. Ссылка: ",n.jsx(e.code,{children:"href"}),", ",n.jsx(e.code,{children:"target"}),", ",n.jsx(e.code,{children:"rel"}),", ",n.jsx(e.code,{children:"download"}),". ",n.jsx(e.code,{children:"onClick"})," получает событие, роутер может вызвать ",n.jsx(e.code,{children:"preventDefault"}),"."]}),`
`,n.jsxs(e.p,{children:["Если у фото есть ",n.jsx(e.code,{children:"imageSrcSet"}),", браузеру нужен ",n.jsx(e.code,{children:"imageSizes"}),": по умолчанию это реальная ширина фото на каждом размере (XS 72 px, SM половина экрана ",n.jsx(e.code,{children:"50vw"}),", MD 300 px, LG экран ",n.jsx(e.code,{children:"100vw"}),", XL 360 px). Рамка фото задана заранее (у S квадрат по ширине карточки, у остальных фиксированная высота), поэтому при загрузке вёрстка не прыгает. Карточкам первого экрана можно поставить ",n.jsx(e.code,{children:"priority"}),": фото грузится сразу, а не лениво."]}),`
`,n.jsx(e.h2,{id:"размеры-и-варианты",children:"Размеры и варианты"}),`
`,n.jsx(i,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Размер"}),n.jsx(e.th,{children:"Размер карточки"}),n.jsx(e.th,{children:"Фото"}),n.jsx(e.th,{children:"Что внутри"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"XS"}),n.jsx(e.td,{children:"во всю ширину × 72 (в Figma 300)"}),n.jsx(e.td,{children:"72 × 72, радиус 16"}),n.jsx(e.td,{children:"название, «город · время», цена и старая цена внизу строки"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"S"}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"по ширине ячейки сетки"}),", 182.5 × 238.5 при 393"]}),n.jsx(e.td,{children:"квадрат по ширине карточки минус 4, радиус 20"}),n.jsx(e.td,{children:"бейджи, сердце, название, город ∙ время, цена и старая цена"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"M"}),n.jsx(e.td,{children:"300 × 256"}),n.jsx(e.td,{children:"296 × 176, радиус 20"}),n.jsx(e.td,{children:"то же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"L"}),n.jsxs(e.td,{children:[n.jsx(e.strong,{children:"во всю колонку"})," (в Figma 360, на экране 393) × 288, радиус 28"]}),n.jsx(e.td,{children:"ширина − 28 × 180, радиус 20"}),n.jsx(e.td,{children:"то же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"XL"}),n.jsx(e.td,{children:"360 × 504, радиус 24"}),n.jsx(e.td,{children:"во всю карточку"}),n.jsx(e.td,{children:"размытие внизу, PriceTag, название по центру, факты, кнопка и сердце"})]})]})]}),`
`,n.jsxs(e.p,{children:["Тип ",n.jsx(e.strong,{children:"All"})," (",n.jsx(e.code,{children:"all"}),") в Figma есть у S (квадрат по ширине ячейки, 182.5 при 393) и M (180 × 180): круглая стрелка и подпись «Показать все», последняя плитка. Плитка — отдельный внутренний компонент AllTile. ",n.jsx(e.strong,{children:"Shimmer"})," (",n.jsx(e.code,{children:"skeleton"}),") — скелетон своего размера, высота карточки меняется так же, как в Figma (S 216.5, M 238, L 270)."]}),`
`,n.jsx(e.p,{children:"Высота растёт вместе с названием: одна строка — 238.5 (S при 393) и 240 (M), две — 254.5 и 256. Больше двух строк название обрезается многоточием."}),`
`,n.jsxs(e.p,{children:["Название ",n.jsx(e.code,{children:"IM-14 S"})," и цена ",n.jsx(e.code,{children:"IM-14 B"})," — ",n.jsx(e.code,{children:"control/text/default"}),"; «город ∙ время» на всех размерах ",n.jsx(e.code,{children:"IM-12 R"}),", ",n.jsx(e.code,{children:"control/text/tertiary"})," (строка 16 px, на XS 20 px). Старая цена ",n.jsx(e.code,{children:"OldPrice"})," 14 на всех размерах, кроме XL."]}),`
`,n.jsx(e.h2,{id:"состав",children:"Состав"}),`
`,n.jsx(i,{of:h}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Заметка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Title"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"title"})}),n.jsx(e.td,{children:"две строки максимум"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"City, Duration"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"city"}),", ",n.jsx(e.code,{children:"duration"})]}),n.jsx(e.td,{children:"на XS склеиваются через « · », на остальных между ними «∙»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Price"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"price"})}),n.jsx(e.td,{children:"сумма вместе с валютой, знак сома ⃀; скринридер читает «сом»"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show old price"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"oldPrice"})}),n.jsx(e.td,{children:"показывается, когда проп задан; не на XL (у его PriceTag старой цены нет)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show discount"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"discount"})}),n.jsxs(e.td,{children:["число процентов, ",n.jsx(e.code,{children:"7"})," → «−7 %»; не на XS"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Show M+"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"mplus"})}),n.jsx(e.td,{children:"не на XS"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=All"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"all"})}),n.jsxs(e.td,{children:["плитка «Показать все»; ",n.jsx(e.code,{children:"allLabel"})," — подпись"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Shimmer"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"skeleton"})}),n.jsxs(e.td,{children:["скелетон размера, внутри ",n.jsx(e.code,{children:"SkeletonGroup"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"showLike"}),", ",n.jsx(e.code,{children:"liked"}),", ",n.jsx(e.code,{children:"defaultLiked"}),", ",n.jsx(e.code,{children:"onLikedChange"})]}),n.jsx(e.td,{children:"сердце на S, M, L; на XL рядом с кнопкой; на XS нет"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"href"})," или ",n.jsx(e.code,{children:"onClick"})]}),n.jsxs(e.td,{children:["карточка — ссылка или кнопка; на XL с ",n.jsx(e.code,{children:"href"})," ссылкой становится кнопка «Посмотреть»"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"—"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"imageSizes"}),", ",n.jsx(e.code,{children:"priority"})]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"sizes"})," для ",n.jsx(e.code,{children:"imageSrcSet"})," и ранняя загрузка фото"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"—"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"attributes"})}),n.jsxs(e.td,{children:["XL: факты под названием, ",n.jsx(e.code,{children:"{ icon, label }"})]})]})]})]}),`
`,n.jsx(e.h2,{id:"нажатие",children:"Нажатие"}),`
`,n.jsx(e.p,{children:"Вся карточка — одна цель: название растянуто на всю площадь, поэтому у клавиатуры один пункт на карточку, а сердце остаётся отдельной кнопкой следом. Имя кнопки — название; город, время и цена читаются за ним обычным текстом («8 часов, 2 000 сом, Было 2 200 ⃀»). Тап по сердцу не открывает карточку."}),`
`,n.jsxs(e.p,{children:["На XL одна остановка для клавиатуры и скринридера — кнопка «Посмотреть» (с ",n.jsx(e.code,{children:"href"})," это ссылка). Тап по остальной карточке делает то же самое: под содержимым лежит невидимая цель того же вида, вне порядка Tab и скрытая от скринридера (",n.jsx(e.code,{children:"aria-hidden"}),", ",n.jsx(e.code,{children:"tabindex=-1"}),"). Так же устроена плитка «Показать все»: стрелка — остановка, подпись и пустое место нажимаются через цель под ней."]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," карточка слегка уходит вглубь (0.98) сразу, как палец коснулся, и возвращается за 240 мс. У сердца и кнопок своё нажатие, карточка при этом не сжимается."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," вместо сжатия карточка чуть бледнеет."]}),`
`,n.jsx(e.li,{children:"Это CSS-переходы, их можно прервать: быстрый повторный тап стартует с того места, где карточка была."}),`
`,n.jsx(e.li,{children:"Скелетон: общая полоса блика бежит по всем блокам, как у Skeleton."}),`
`]}),`
`,n.jsx(f,{prefix:"--excursion-card-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:["Где в дизайне «Выходные»: главная (Многодневные поездки, Поездки на один день, В рассрочку через M+, Новинки), результат поиска (сетка S и L), детальная страница (Вам может понравиться), избранное. Данные кейсов взяты из макетов: ",n.jsx(e.code,{children:"stories/kit/data/home"})," и ",n.jsx(e.code,{children:"stories/kit/data/detail"}),"."]}),`
`,n.jsx(e.h3,{id:"многодневные-поездки",children:"Многодневные поездки"}),`
`,n.jsx(e.p,{children:"Главная, Figma 4687:46130: M-карточки и «Показать все» в конце ряда."}),`
`,n.jsx(i,{of:x}),`
`,n.jsx(e.h3,{id:"поездки-на-один-день",children:"Поездки на один день"}),`
`,n.jsx(e.p,{children:"Главная, Figma 4687:46200: ряд открыт с конца, последняя плитка — маленькая «Показать все» (164 × 180)."}),`
`,n.jsx(i,{of:p}),`
`,n.jsx(e.h3,{id:"в-рассрочку-через-m",children:"В рассрочку через M+"}),`
`,n.jsx(e.p,{children:"Главная, Figma 4687:46185: XL-карточки с фактами, ряд открыт на третьей карточке по центру."}),`
`,n.jsx(i,{of:j}),`
`,n.jsx(e.h3,{id:"новинки-строки-xs",children:"Новинки, строки XS"}),`
`,n.jsx(e.p,{children:"Главная, Figma 4687:46161: ячейка «Новинки» и три колонки по три строки XS (320 wide)."}),`
`,n.jsx(i,{of:m}),`
`,n.jsx(e.h3,{id:"результат-поиска-сетка-s-и-l",children:"Результат поиска: сетка S и L"}),`
`,n.jsx(e.p,{children:"Figma 189:16224: S в две колонки (отступы 12, зазор 4, как в сетке выдачи), после двух рядов широкая L во всю колонку. Заголовок выдачи не показан, текста его в Figma пока не читали. S-карточки у первого ряда: 254.5 (название в две строки) и 238.5."}),`
`,n.jsx(i,{of:g}),`
`,n.jsx(e.h3,{id:"вам-может-понравиться",children:"Вам может понравиться"}),`
`,n.jsx(e.p,{children:"Детальная страница, Figma 4704:41787: S в ряду, зазор 4, 12 px в начале, последняя плитка «Показать все» 182.5 квадрат."}),`
`,n.jsx(i,{of:u}),`
`,n.jsx(e.h3,{id:"избранное",children:"Избранное"}),`
`,n.jsx(e.p,{children:"Figma 3100:42813: L шириной 360 в одну колонку (сердце в фото, скидка −10)."}),`
`,n.jsx(i,{of:b}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Типографика в «Выходные»"}),n.jsx(e.td,{children:"в карточках главной название IM-14 B, цена IM-16 SB"}),n.jsx(e.td,{children:"в DS название IM-14 S, цена IM-14 B; собрано по DS, решение за дизайнером"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"PriceTag в XL"}),n.jsxs(e.td,{children:["у экземпляра IM-18 B и ",n.jsx(e.code,{children:"text/inverse/constant/primary"}),", у main IM-20 B"]}),n.jsxs(e.td,{children:["PriceTag ",n.jsx(e.code,{children:"size=18"})," в XL"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Сердце XL"}),n.jsx(e.td,{children:"Icon button Secondary с переопределённой светлой заливкой 16 %, без размытия"}),n.jsxs(e.td,{children:["IconButton ",n.jsx(e.code,{children:'variant="glass-light"'})," (заливка ",n.jsx(e.code,{children:"control/bg/overlay-light/default"}),"); у glass-light есть размытие ",n.jsx(e.code,{children:"blur/bg-12"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Факты XL"}),n.jsx(e.td,{children:"экземпляры Attribute с цветом inverse"}),n.jsxs(e.td,{children:["Attribute ",n.jsx(e.code,{children:'variant="inverse"'})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скрытый бейдж"}),n.jsxs(e.td,{children:["в каждой карточке скрытый экземпляр ",n.jsx(e.code,{children:"badge"})]}),n.jsx(e.td,{children:"не воспроизводится"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Свойства S и L"}),n.jsx(e.td,{children:"тексты S и L не привязаны к свойствам Title, City, Duration, Price, у старой цены S нет связи с Show old price; у L нет бейджа скидки"}),n.jsx(e.td,{children:"в коде у всех размеров одни пропсы, L показывает скидку, если она задана; вопрос к дизайнеру"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Ширина S и L"}),n.jsx(e.td,{children:"у main-компонентов 182.5 и 360, в продукте экземпляры растянуты (FILL) по сетке и колонке"}),n.jsx(e.td,{children:"S и L заполняют контейнер; описание набора в Figma всё ещё говорит «S (166)» — это ширина ячейки при экране 360"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"All у M"}),n.jsx(e.td,{children:"182.5 × 182.5 (как у S)"}),n.jsx(e.td,{children:"180 × 180, вровень с фото M (180); вопрос к дизайнеру"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Жирность названия S"}),n.jsx(e.td,{children:"в выдаче (Figma 571:30586) и избранном название IM-14 SemiBold, в детальной «Вам может понравиться» (4704:41791…) IM-14 Bold"}),n.jsx(e.td,{children:"один вес в коде (SemiBold); в кейсе детальной берётся тот же вес; вопрос к дизайнеру"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Старая цена на S"}),n.jsx(e.td,{children:"в выдаче и детальной IM-12 R, в избранном IM-14 R"}),n.jsx(e.td,{children:"OldPrice 14 на всех размерах; в кейсах 14; вопрос к дизайнеру"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Радиусы 20, 28, 16 у XS"}),n.jsxs(e.td,{children:["нет токенов (",n.jsx(e.code,{children:"radius/lg"})," 16, ",n.jsx(e.code,{children:"radius/xl"})," 24)"]}),n.jsx(e.td,{children:"20 и 28 без токена"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Размытие XL"}),n.jsx(e.td,{children:"два фона 40 и 200 под градиентной маской"}),n.jsxs(e.td,{children:["одна размытая копия фото (blur 32 px) в нижних 60 % карточки под маской. Два ",n.jsx(e.code,{children:"backdrop-filter"})," 20 и 100 px стоили 26 мс на кадр на медленном телефоне, копия растеризуется один раз. Цветовое поле внизу то же, переход чуть мягче"]})]})]})]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Радиус фото 20 (S, M, L), радиус L 28, фото XS 16 — берётся ",n.jsx(e.code,{children:"radius/lg"}),"."]}),`
`,n.jsx(e.li,{children:"Размытие XL (в Figma 40 и 200, в коде одна копия 32 px) и градиент затемнения под текстом (чёрный 0 → 38 % → 50 %)."}),`
`,n.jsxs(e.li,{children:["Скелетон-градиент в Figma серый сырой, в коде он собран из токенов ",n.jsx(e.code,{children:"skeleton/*"}),"."]}),`
`]}),`
`,n.jsx(v,{css:w}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Цель касания: вся карточка (растянутое название, ",n.jsx(e.code,{children:"::after"})," на всю площадь), сердце 48 × 48. Название на XS и в плитках само небольшое, но нажимается вся карточка: это проверяет ",n.jsx(e.code,{children:"check-cards.mjs"})," через ",n.jsx(e.code,{children:"elementFromPoint"}),"."]}),`
`,n.jsx(e.li,{children:"Название — настоящая ссылка или кнопка, фокус с клавиатуры обводит всю карточку."}),`
`,n.jsxs(e.li,{children:["Фото декоративное (",n.jsx(e.code,{children:'alt=""'}),"): название уже говорит, что это. Если нужно описание, есть ",n.jsx(e.code,{children:"imageAlt"}),"."]}),`
`,n.jsxs(e.li,{children:["Сердце: ",n.jsx(e.code,{children:"aria-pressed"}),", имя «В избранное: название»."]}),`
`,n.jsxs(e.li,{children:["Скелетон — ",n.jsx(e.code,{children:'role="status"'})," с подписью «Загрузка» (",n.jsx(e.code,{children:"SkeletonGroup"}),")."]}),`
`,n.jsx(e.li,{children:"Контраст: белый текст на XL лежит на затемнении (до 50 % чёрного) и размытии. Для очень светлых фото он может не дотянуть до 4.5 : 1, затемнение придётся усилить; на фото из Storybook проверено глазами, замера по каждому фото нет."}),`
`]})]})}function yn(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{yn as default};
