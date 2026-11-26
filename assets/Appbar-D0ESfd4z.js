import{j as n}from"./iframe-DyD5Yel4.js";import{u as i,M as s,C as a,a as d}from"./blocks-CcI75u3-.js";import{A as l,P as e,D as c,O as h,S as p,a as x,T as b,b as v,C as m,c as g}from"./Appbar.stories-Dz_ESqV7.js";import{M as u,U as j}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./paths-BjPgyxdS.js";import"./stack-ala-archa-CZCiGT1X.js";import"./Appbar-CqYb5ci7.js";import"./cx-2dOUpm6k.js";import"./IconButton-DRcBY4IG.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./SearchSummary-yWxmhw0k.js";import"./mtravel-mark-Cb55PF4C.js";import"./Svg-B7GM2ZFd.js";import"./arrows-0JYTYJZi.js";import"./useScrolledPast-BmNc8JN4.js";import"./Phone-D_QzrYrn.js";import"./Search-K2ZHHquh.js";import"./useControllableState-D9cJCl43.js";import"./mergeRefs-BZQLIp5G.js";import"./SlotIcon-BexntUPw.js";import"./general-CSE0kF9v.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./motion-C-Q-avtg.js";import"./FloatingContainer-DeRfZ3x8.js";import"./useKeyboardInset-8n5XJZWl.js";import"./Button-grGIhY78.js";import"./FloatingFilter-DvcJgFUi.js";import"./time-lpmEQjgl.js";import"./people-tOiSq3ZR.js";import"./Chip-vxFm-D7d.js";import"./tokens-Bc2_NrJ2.js";const f=`/*
 * Appbar (Figma 104:130). Layout is the solid (scroll) state: zones of 96 (56 with one right button) with 40 px boxes;
 * the cover state is a translate on top of it (Figma cover: padding 16, gap 8 → back +8 px, right buttons −8 / −16 px).
 * Align=Left has no zones: padding 16, gap 8 on both surfaces, so nothing slides.
 * One bar, two surfaces (data-surface cover | solid); everything that differs is a CSS transition on the same elements.
 */
.appbar {
  --_morph: calc(var(--appbar-motion-morph-duration) * var(--motion-scale));
  --_ease: var(--appbar-motion-morph-easing);
  --_color: calc(var(--appbar-motion-color-duration) * var(--motion-scale));
  --_color-delay: calc(var(--appbar-motion-color-delay) * var(--motion-scale));

  position: relative;
  z-index: 20;
  width: 100%;
  /* icons, the status-bar mock and anything in it inherit this colour */
  color: var(--color-icon-primary);
  transition: color var(--_color) var(--_ease) var(--_color-delay);
}
.appbar[data-surface='cover'] {
  color: var(--color-icon-inverse-constant-primary);
}

/*
 * The white is not only faded out over the cover but transparent: Safari on iOS tints its status-bar strip from fixed
 * elements at the top, so it must not find white there. It turns white at once when the bar fades in and goes
 * transparent only after it has faded out.
 */
.bg {
  position: absolute;
  inset: 0;
  background-color: var(--nav-bg-default);
  opacity: 1;
  transition:
    opacity var(--_morph) var(--_ease),
    background-color 0s;
}
.appbar[data-surface='cover'] .bg {
  background-color: transparent;
  opacity: 0;
  transition:
    opacity var(--_morph) var(--_ease),
    background-color 0s linear var(--_morph);
}

.status {
  position: relative;
  height: var(--appbar-safe-top, env(safe-area-inset-top, 0px));
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  height: 64px;
}

.side {
  --_side: 96px; /* Figma Right icons=2: 8 + 40 + 40 + 8 */
  display: flex;
  flex: none;
  align-items: center;
  width: var(--_side);
  height: 52px;
  padding: 0 var(--spacing-sm);
  box-sizing: border-box;
}
.right {
  justify-content: flex-end;
}
/* Figma: the right zone hugs with min-width = the left zone — the title stays centred, and wider content (a timer, a
   pill) widens the zone instead of running under the title */
.appbar:is([data-variant='default'], [data-variant='search']) .right {
  width: auto;
  min-width: var(--_side);
}
/* Figma Search: zones of 88 (8 + 36 + 36 + 8) */
.appbar[data-variant='search'] .side {
  --_side: 88px;
}
/* Figma Right icons=1: zones of one button, the title gets 80 px more (Default 8 + 40 + 8, Search 8 + 36 + 8) */
.appbar[data-variant='default'][data-right-icons='1'] .side {
  --_side: 56px;
}
.appbar[data-variant='search'][data-right-icons='1'] .side {
  --_side: 52px;
}
/* Figma Filter / Filter search: the zones hug their buttons (left 8 + 36 + 12 = 56, right 8 + 40 + 40 + 8 = 96 or 8 + 36 + 8 = 52) */
.appbar:is([data-variant='filter'], [data-variant='filter-search']) .side {
  width: auto;
  min-width: 0;
}
.appbar:is([data-variant='filter'], [data-variant='filter-search']) .left {
  padding: 0 var(--spacing-md) 0 var(--spacing-sm);
}

.center {
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  min-width: 0;
  text-align: center;
}
.appbar[data-variant='filter'] .center {
  padding: 0 var(--spacing-md);
}
.appbar:is([data-variant='filter'], [data-variant='filter-search']) .center {
  align-items: stretch;
}
/* Figma Align=Left: no side zones — the buttons sit in the bar itself. Default: padding 16, gap 8 on both surfaces
   (title at 64 after the back button, 16 without it); Search: padding 8, no gap, the title block padded 8 (title at 56) */
.appbar[data-align='left']:is([data-variant='default'], [data-variant='search']) .nav {
  padding: 0 var(--spacing-lg);
  gap: var(--spacing-sm);
}
.appbar[data-align='left'][data-variant='search'] .nav {
  padding: 0 var(--spacing-sm);
  gap: 0;
}
.appbar[data-align='left']:is([data-variant='default'], [data-variant='search']) .side {
  width: auto;
  min-width: 0;
  padding: 0;
  gap: var(--spacing-sm);
}
.appbar[data-align='left'][data-variant='search'] .side {
  gap: 0;
}
/* an empty zone takes no room, or the gap would push the title off 16 */
.appbar[data-align='left'] .side:empty {
  display: none;
}
.appbar[data-align='left']:is([data-variant='default'], [data-variant='search']) .center {
  align-items: stretch;
  text-align: left;
}
.appbar[data-align='left'][data-variant='search'] .center {
  padding: 0 var(--spacing-sm);
}

.title,
.subtitle {
  width: 100%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: color var(--_color) var(--_ease) var(--_color-delay);
}
.title {
  font: var(--font-im-16-b);
  letter-spacing: var(--tracking-im-16-b);
  color: var(--nav-text-title);
}
.subtitle {
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
  color: var(--nav-text-subtitle);
}
.appbar[data-surface='cover'] .title {
  color: var(--nav-text-inverse-title);
}
.appbar[data-surface='cover'] .subtitle {
  color: var(--nav-text-inverse-subtitle);
}

/* a title that is not shown over the cover: lands after the bar has started to appear, leaves faster */
.appbar:not([data-title-on-cover]) .center {
  transition:
    opacity calc(var(--appbar-motion-title-duration) * var(--motion-scale)) var(--_ease)
      calc(var(--appbar-motion-title-delay) * var(--motion-scale)),
    transform calc(var(--appbar-motion-title-duration) * var(--motion-scale)) var(--_ease)
      calc(var(--appbar-motion-title-delay) * var(--motion-scale)),
    filter calc(var(--appbar-motion-title-duration) * var(--motion-scale)) var(--_ease)
      calc(var(--appbar-motion-title-delay) * var(--motion-scale));
}
.appbar[data-surface='cover']:not([data-title-on-cover]) .center {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(var(--appbar-motion-title-blur));
  transition:
    opacity calc(var(--appbar-motion-title-out-duration) * var(--motion-scale)) var(--motion-ease-out),
    transform calc(var(--appbar-motion-title-out-duration) * var(--motion-scale)) var(--motion-ease-out),
    filter calc(var(--appbar-motion-title-out-duration) * var(--motion-scale)) var(--motion-ease-out);
}

/* ---------- buttons: the DS IconButton (Ghost 40 / 36); over the cover the whole button (glass, icon, hit area) moves to the circle's place.
   Press (scale), hit area (::before) and focus ring come from IconButton. */
.appbar .btn {
  --_stroke: 2;
  color: inherit;
  isolation: isolate; /* the glass (::after) sits behind the icon but above the button's own fill */
  /* IconButton's transitions plus the morph's \`translate\`; the press uses \`transform\`, the morph \`translate\`: they never fight */
  transition-property: transform, background-color, translate;
  transition-duration:
    calc(var(--icon-button-motion-press-out-duration) * var(--motion-scale)),
    calc(var(--icon-button-motion-press-out-duration) * var(--motion-scale)),
    var(--_morph);
  transition-timing-function: var(--icon-button-motion-press-easing), var(--icon-button-motion-press-easing), var(--_ease);
}
.appbar .btn[data-pressed],
.appbar .btn:focus-visible:active:not([data-disabled]) {
  transition-duration:
    calc(var(--icon-button-motion-press-in-duration) * var(--motion-scale)),
    calc(var(--icon-button-motion-press-in-duration) * var(--motion-scale)),
    var(--_morph);
}
.appbar .btn[data-disabled] {
  color: var(--control-icon-disabled);
}
/* two 36 px buttons side by side: keep their 44 px zones from overlapping by more than 4 px */
.appbar .btn[data-size='36']::before {
  width: 40px;
}
/* over the cover the glass already is the button: no grey press fill under it */
.appbar[data-surface='cover'] .btn[data-pressed],
.appbar[data-surface='cover'] .btn:focus-visible:active {
  background-color: transparent;
}
.left > .btn {
  --_dx-cover: 8px;
}
.right > .btn:last-child {
  --_dx-cover: -8px;
}
.right > .btn:nth-last-child(2) {
  --_dx-cover: -16px;
}
.appbar[data-variant='default'][data-surface='cover'] .btn {
  translate: var(--_dx-cover, 0px) 0;
}
/* left-aligned, the buttons already stand where the cover wants them (padding 16, gap 8): no slide */
.appbar[data-align='left'] .btn {
  --_dx-cover: 0px;
}

/* the glass circle (Figma Icon button over the cover): control/bg/overlay, hairline ring, background blur */
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: var(--radius-full);
  background: var(--control-bg-overlay-default);
  /* hairline as an inset ring: a real 0.5 px border would move the icon to half pixels */
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--control-border-overlay-default);
  -webkit-backdrop-filter: var(--blur-bg-12);
  backdrop-filter: var(--blur-bg-12);
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity var(--_morph) var(--_ease),
    transform var(--_morph) var(--_ease);
}
.appbar[data-variant='default'][data-surface='cover'] .btn::after {
  opacity: 1;
  transform: none;
}

/* the icon: 24 on the white bar, 20 over the cover (Figma); the stroke stays 2 px on screen (2.4 × 20/24) */
.icon {
  position: relative;
  display: flex;
  flex: none;
  width: 24px;
  height: 24px;
  transition: transform var(--_morph) var(--_ease);
}
.appbar[data-variant='default'][data-surface='cover'] .icon {
  transform: scale(0.83333);
}
.icon > svg {
  display: block;
  overflow: visible;
}
.icon > svg :is(path, line, polyline, circle, rect) {
  stroke-width: var(--_stroke);
  transition: stroke-width var(--_morph) var(--_ease);
}
.appbar[data-variant='default'][data-surface='cover'] .btn,
.appbar .btn[data-bold] {
  --_stroke: 2.4;
}

/* ---------- product header (Figma Appbar_type 807:5817): a gradient under the status bar and the nav bar ----------
   The gradient is raw in Figma (no variable); it fades out when the bar turns white. */
.product {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: calc(var(--appbar-safe-top, env(safe-area-inset-top, 0px)) + 64px);
  background: linear-gradient(180deg, var(--_p1) 0%, var(--_p2) var(--_p-stop, 29%));
  opacity: 1;
  transition: opacity var(--_morph) var(--_ease);
}
.appbar[data-surface='solid'] .product {
  opacity: 0;
}
.appbar[data-product='avia'] {
  --_p1: #1d84f3; /* no token: Figma 807:5816 */
  --_p2: #268af5; /* no token: Figma 807:5816 */
}
.appbar[data-product='excursions'] {
  --_p1: var(--color-gradient-vertical-excursions-start);
  --_p2: var(--color-gradient-vertical-excursions-end);
  --_p-stop: 43.7%; /* Figma Holiday: the gradient frame is 178 tall, the second stop (29 %) lies at 51.6 px; here the layer is 118 */
  --_fade: #a179f2 0%, #d6c7f4 63%, #fff 100%; /* no token: Figma 807:5818 Content */
}
.appbar[data-product='tour'] {
  --_p1: var(--color-gradient-vertical-tours-start); /* the token's start is 1 step off Figma 807:5911 (#f94594 vs #fa4496) */
  --_p2: var(--color-gradient-vertical-tours-end);
}
.appbar[data-product='hotel'] {
  --_p1: var(--color-gradient-vertical-hotels-start);
  --_p2: var(--color-gradient-vertical-hotels-end);
  --_p-stop: 100%; /* Figma Hotel: the second stop is at 1.00, not 0.29 */
}

/* ---------- the row under the nav bar ---------- */
.bottom {
  position: relative;
}
.appbar[data-bottom='search'] .bottom {
  padding: 0 var(--spacing-lg) var(--spacing-md); /* Figma: 0 16 12 16 */
}
.appbar[data-bottom='chips'] .bottom {
  display: flex;
  align-items: center;
  gap: 6px; /* Figma: raw 6 */
  box-sizing: border-box;
  height: 60px;
  padding: var(--spacing-sm) var(--spacing-md) var(--spacing-lg);
  overflow-x: auto;
  overscroll-behavior-x: contain; /* the row must not pass the swipe to the page (WKWebView edge back-swipe) */
  scrollbar-width: none;
  background: linear-gradient(180deg, var(--_fade, var(--_p2, transparent)));
  transition: opacity var(--_morph) var(--_ease);
}
.appbar[data-bottom='chips'] .bottom::-webkit-scrollbar {
  display: none;
}
/* on the white bar the row has no gradient */
.appbar[data-bottom='chips'][data-surface='solid'] .bottom {
  background: none;
}

/* ---------- no transitions: first paint, restored scroll */
.appbar[data-instant],
.appbar[data-instant] *,
.appbar[data-instant] *::before,
.appbar[data-instant] *::after {
  transition: none !important;
}

/* ---------- reduced motion: no movement, scaling or blur — the buttons jump to their place; colour and opacity tween */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .appbar {
    --_r: calc(var(--appbar-motion-reduced-duration) * var(--motion-scale));
  }
  :global(:root:not([data-motion='normal'])) .appbar .btn,
  :global(:root:not([data-motion='normal'])) .appbar .btn[data-pressed] {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .icon,
  :global(:root:not([data-motion='normal'])) .icon > svg :is(path, line, polyline, circle, rect) {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .btn::after,
  :global(:root:not([data-motion='normal'])) .appbar[data-surface='cover'] .btn::after {
    transform: none;
    transition: opacity var(--_r) linear;
  }
  :global(:root:not([data-motion='normal'])) .appbar[data-surface='cover']:not([data-title-on-cover]) .center {
    transform: none;
    filter: none;
  }
  :global(:root:not([data-motion='normal'])) .appbar,
  :global(:root:not([data-motion='normal'])) .title,
  :global(:root:not([data-motion='normal'])) .subtitle,
  :global(:root:not([data-motion='normal'])) .appbar:not([data-title-on-cover]) .center,
  :global(:root:not([data-motion='normal'])) .appbar[data-surface='cover']:not([data-title-on-cover]) .center {
    transition-duration: var(--_r);
    transition-delay: 0s;
    transition-timing-function: linear;
  }
  /* the white still turns transparent only after it has faded out (iOS status-bar strip) */
  :global(:root:not([data-motion='normal'])) .bg {
    transition:
      opacity var(--_r) linear,
      background-color 0s;
  }
  :global(:root:not([data-motion='normal'])) .appbar[data-surface='cover'] .bg {
    transition:
      opacity var(--_r) linear,
      background-color 0s linear var(--_r);
  }
}
:global(:root[data-motion='reduce']) .appbar {
  --_r: calc(var(--appbar-motion-reduced-duration) * var(--motion-scale));
}
:global(:root[data-motion='reduce']) .appbar .btn,
:global(:root[data-motion='reduce']) .appbar .btn[data-pressed] {
  transition: none;
}
:global(:root[data-motion='reduce']) .icon,
:global(:root[data-motion='reduce']) .icon > svg :is(path, line, polyline, circle, rect) {
  transition: none;
}
:global(:root[data-motion='reduce']) .btn::after,
:global(:root[data-motion='reduce']) .appbar[data-surface='cover'] .btn::after {
  transform: none;
  transition: opacity var(--_r) linear;
}
:global(:root[data-motion='reduce']) .appbar[data-surface='cover']:not([data-title-on-cover]) .center {
  transform: none;
  filter: none;
}
:global(:root[data-motion='reduce']) .appbar,
:global(:root[data-motion='reduce']) .title,
:global(:root[data-motion='reduce']) .subtitle,
:global(:root[data-motion='reduce']) .appbar:not([data-title-on-cover]) .center,
:global(:root[data-motion='reduce']) .appbar[data-surface='cover']:not([data-title-on-cover]) .center {
  transition-duration: var(--_r);
  transition-delay: 0s;
  transition-timing-function: linear;
}
:global(:root[data-motion='reduce']) .bg {
  transition:
    opacity var(--_r) linear,
    background-color 0s;
}
:global(:root[data-motion='reduce']) .appbar[data-surface='cover'] .bg {
  transition:
    opacity var(--_r) linear,
    background-color 0s linear var(--_r);
}
`;function o(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(t.h1,{id:"appbar",children:"Appbar"}),`
`,n.jsxs(t.p,{children:["Верхняя панель экрана. Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=104-130",rel:"nofollow",children:"Appbar 104:130"})," (Type Default, Search, Filter, Filter search × Scroll × Show subtitle) и ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=807-5817",rel:"nofollow",children:"Appbar_type 807:5817"})," (шапки продуктов). Вместе с ",n.jsx(t.a,{href:"?path=/docs/components-floatingcontainer--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"FloatingContainer"})," это навигация экрана: обе переключаются в один и тот же момент."]}),`
`,n.jsx(a,{of:e}),`
`,n.jsx(d,{of:e}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 (cover, «В избранное»), «Результат поиска» 189:16224 («Любой город / 29 мая, 1 участник»), «Главная» 173:12219 («Куда отправимся?»), «Оформление» 244:25370, «Мой заказы» 1698:192321."]}),`
`,n.jsx(t.h2,{id:"как-работает-навигация",children:"Как работает навигация"}),`
`,n.jsx(a,{of:c}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Экран с обложкой"})," (детали экскурсии, отеля, тура):"]}),`
`,n.jsxs(t.ol,{children:[`
`,n.jsx(t.li,{children:"Шапка прозрачная. Кнопки стеклянные: круги 40 с размытием фона, иконки белые, 20 px. Заголовка над фото нет — он уже есть на обложке."}),`
`,n.jsx(t.li,{children:"Как только низ обложки уходит под шапку, она становится белой: кнопки переезжают на свои места, стекло тает, иконки вырастают до 24 и темнеют, проявляется заголовок."}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"В тот же момент"})," снизу выезжает панель с ценой и кнопкой. Пока видна кнопка на обложке, нижняя не нужна. Обложка ушла — главное действие переехало вниз."]}),`
`,n.jsx(t.li,{children:"Прокрутка обратно: всё возвращается тем же путём."}),`
`]}),`
`,n.jsxs(t.p,{children:["Порог один, его считает ",n.jsx(t.code,{children:"useScrolledPast"}),": невидимая полоска 1 px у нижнего края обложки и IntersectionObserver, корень которого уменьшен сверху на высоту шапки. Обработчика скролла нет. Если высота шапки меняется (в WebView отступ под статус-бар приходит позже первой отрисовки), порог пересчитывается сам."]}),`
`,n.jsx(a,{of:h}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Экран без обложки"})," (заказ, оплата, списки): шапка сразу белая, с заголовком и, если нужно, подзаголовком. Панель «Оплатить» видна всегда: это главное действие экрана."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Appbar, AppbarButton, FloatingContainer, Button, ChevronIcon, ShareIcon, useScrolledPast } from '@mtravel/ui';

const appbar = useRef<HTMLElement>(null);
const coverEnd = useRef<HTMLDivElement>(null); // <div ref={coverEnd} style={{ height: 1 }} /> под обложкой
const { past, ready } = useScrolledPast(coverEnd, appbar);

<Appbar
  ref={appbar}
  surface={past ? 'solid' : 'cover'}
  instant={!ready}
  title="Ущелье Ала-Арча"
  titleOnCover={false}
  left={<AppbarButton icon={<ChevronIcon direction="left" size={24} />} label="Назад" bold onClick={back} />}
  right={<AppbarButton icon={<ShareIcon />} label="Поделиться" onClick={share} />}
  style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
/>
<FloatingContainer visible={past} instant={!ready} style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
  …цена и кнопка
</FloatingContainer>
`})}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"instant"}),", пока не пришёл первый замер: после перезагрузки или возврата назад, если экран уже прокручен, шапка сразу белая, без повторной анимации."]}),`
`,n.jsx(t.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(a,{of:p}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Figma"}),n.jsx(t.th,{children:"Фон"}),n.jsx(t.th,{children:"Кнопки"}),n.jsx(t.th,{children:"Иконки"}),n.jsx(t.th,{children:"Заголовок"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Scroll=False (cover)"}),n.jsx(t.td,{children:"прозрачный"}),n.jsxs(t.td,{children:["стекло 40: ",n.jsx(t.code,{children:"control/bg/overlay/default"}),", кольцо ",n.jsx(t.code,{children:"control/border/overlay/default"})," 0.5, размытие ",n.jsx(t.code,{children:"bg-blur/12"})," / 2"]}),n.jsxs(t.td,{children:["20 px, ",n.jsx(t.code,{children:"icon/inverse/constant/primary"})]}),n.jsxs(t.td,{children:["IM-16 B ",n.jsx(t.code,{children:"nav/text/inverse/title"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Scroll=True (solid)"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"nav/bg/default"})}),n.jsxs(t.td,{children:["плоские 40, радиус ",n.jsx(t.code,{children:"radius/lg"})]}),n.jsxs(t.td,{children:["24 px, ",n.jsx(t.code,{children:"icon/primary"}),", шеврон 2.4"]}),n.jsxs(t.td,{children:["IM-16 B ",n.jsx(t.code,{children:"nav/text/title"})]})]})]})]}),`
`,n.jsxs(t.p,{children:["Подзаголовок — IM-14 R, ",n.jsx(t.code,{children:"nav/text/subtitle"})," (над обложкой ",n.jsx(t.code,{children:"nav/text/inverse/subtitle"}),"). Боковые зоны по 96 px, поэтому заголовок всегда по центру, сколько бы кнопок ни было."]}),`
`,n.jsx(t.h2,{id:"выравнивание-и-одна-кнопка-справа",children:"Выравнивание и одна кнопка справа"}),`
`,n.jsx(a,{of:x}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Figma"}),n.jsx(t.th,{children:"Props"}),n.jsx(t.th,{children:"Что меняется"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Align=Center, Right icons=2"}),n.jsx(t.td,{children:"по умолчанию"}),n.jsx(t.td,{children:"зоны по 96 (у Search 88), заголовок по центру; длинный заголовок обрезается раньше"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Align=Center, Right icons=1"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"rightIcons={1}"})}),n.jsx(t.td,{children:"зоны по 56 (у Search 52): справа одна кнопка, заголовок по центру и на 80 px шире"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Align=Left"}),n.jsx(t.td,{children:n.jsx(t.code,{children:'align="left"'})}),n.jsx(t.td,{children:"зон нет: заголовок через 8 px после «Назад» (с 64; без кнопки с 16) и до 8 px перед кнопками справа (или 16 до края). У Search заголовок с 56. Кнопки стоят на одном месте на обоих видах, не сдвигаются при переходе"})]})]})]}),`
`,n.jsxs(t.p,{children:["Правая зона не обрезает содержимое: если вместо кнопок там что-то шире (таймер, плашка), зона растёт, как в Figma (Right HUG, минимум равен левой). Заголовок тогда сдвигается от центра. Если справа будет не кнопка, а широкое содержимое, лучше взять ",n.jsx(t.code,{children:'align="left"'}),"."]}),`
`,n.jsx(t.p,{children:"Когда что выбирать:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"по центру"})," — экраны внутри потока («Детали», «Заказ»): заголовок короткий, кнопки по краям;"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"одна кнопка"})," — всегда, когда справа одна кнопка, а заголовок длинный: зоны 96 съели бы 80 px текста;"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"по левому краю"})," — длинные заголовки шагов («Покупка билета», «Выбор места»), экраны с широким содержимым справа."]}),`
`]}),`
`,n.jsxs(t.p,{children:["У Filter и Filter search заголовка нет, ",n.jsx(t.code,{children:"align"})," и ",n.jsx(t.code,{children:"rightIcons"})," на них не действуют."]}),`
`,n.jsx(t.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(a,{of:b}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Figma Type"}),n.jsxs(t.th,{children:["Проп ",n.jsx(t.code,{children:"variant"})]}),n.jsx(t.th,{children:"Зоны"}),n.jsx(t.th,{children:"Центр"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Default"}),n.jsx(t.td,{children:n.jsx(t.code,{children:'variant="default"'})}),n.jsxs(t.td,{children:["96 + 96 (",n.jsx(t.code,{children:"rightIcons={1}"}),": 56 + 56), заголовок по центру или ",n.jsx(t.code,{children:'align="left"'})]}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"title"}),", ",n.jsx(t.code,{children:"subtitle"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Search"}),n.jsx(t.td,{children:n.jsx(t.code,{children:'variant="search"'})}),n.jsx(t.td,{children:"88 + 88 (52 + 52), кнопки справа 36"}),n.jsxs(t.td,{children:["заголовок и под ним ряд ",n.jsx(t.code,{children:"bottom"})," с полем ",n.jsx(t.code,{children:"Search"})," (отступы 0 16 12, высота 56)"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Filter"}),n.jsx(t.td,{children:n.jsx(t.code,{children:'variant="filter"'})}),n.jsx(t.td,{children:"слева 8 + 36 + 12, справа по кнопкам"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"center={<AppbarSummary />}"}),", отступы по 12"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Filter search"}),n.jsx(t.td,{children:n.jsx(t.code,{children:'variant="filter-search"'})}),n.jsx(t.td,{children:"слева 56, справа 52"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"AppbarSummary"})," на всю ширину"]})]})]})]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:"AppbarSummary"})," — плашка 44 px со знаком Mtravel, двумя строками (IM-14 S и IM-12 R) и шевроном; это одна кнопка, она открывает поиск. Над обложкой это тёмное стекло с белым текстом, на белой шапке — серая плашка. В типах Filter кнопки на обложке плоские (Ghost), стеклянных кругов нет: они только у Default."]}),`
`,n.jsxs(t.p,{children:["В Figma у Filter и Filter search свойство Scroll названо наоборот (True — это обложка). В коде везде ",n.jsx(t.code,{children:"surface"}),": ",n.jsx(t.code,{children:"cover"})," или ",n.jsx(t.code,{children:"solid"}),"."]}),`
`,n.jsx(t.h3,{id:"шапки-продуктов",children:"Шапки продуктов"}),`
`,n.jsx(a,{of:v}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:'product="avia" | "excursions" | "weekend" | "tour" | "hotel"'})," (те же имена, что у ",n.jsx(t.code,{children:"ProductKind"}),"; ",n.jsx(t.code,{children:"holiday"})," — старое имя, работает как ",n.jsx(t.code,{children:"excursions"}),") рисует градиент под статус-баром и шапкой (Figma Appbar_type). Ряд чипов под шапкой «Выходных» — слот ",n.jsx(t.code,{children:"bottom"}),": высота 60, отступы 8 12 16, плавно уходит в цвет страницы. Градиенты ",n.jsx(t.code,{children:"excursions"}),", ",n.jsx(t.code,{children:"hotel"})," и ",n.jsx(t.code,{children:"tour"})," берутся из токенов ",n.jsx(t.code,{children:"--color-gradient-vertical-*"})," (у ",n.jsx(t.code,{children:"tour"})," начало на 1 шаг отличается от Figma). У ",n.jsx(t.code,{children:"avia"})," в Figma сырые цвета, и они отличаются от токена, поэтому остаются без токена (см. «Без токенов»)."]}),`
`,n.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(a,{of:m}),`
`,n.jsx(a,{of:g}),`
`,n.jsx(t.p,{children:"Поиск «Куда отправимся?»: белая шапка Search, поле, результаты и «Готово» над клавиатурой. Каталог: сводка «Бишкек, 29 мая, 1 участник» вместо заголовка и плавающий фильтр над кнопкой."}),`
`,n.jsx(t.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Одна панель, а не две, которые сменяют друг друга."})," Все элементы переходят из одного вида в другой за 260 мс, ease-in-out: это движение на месте. Это CSS-переходы: если прокрутить обратно посреди анимации, она развернётся с текущего места."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Цвет иконок и текста"})," меняется в короткое окно 130 мс посередине, чтобы иконка не была серой над полупрозрачным стеклом."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Заголовок, которого нет над обложкой,"})," проявляется из размытия с задержкой 100 мс и заканчивает вместе с белым фоном: текст никогда не ярче фона под ним. Уходит быстрее, за 140 мс."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Нажатие:"})," кнопки шапки это ",n.jsx(t.code,{children:"IconButton"})," (Ghost): на ",n.jsx(t.code,{children:"pointerdown"})," сжатие 0.94 и заливка ",n.jsx(t.code,{children:"control/bg/default"})," на белой шапке; над обложкой заливки нет, нажатие видно только по масштабу. Работает и в iOS WKWebView: состояние идёт через ",n.jsx(t.code,{children:"usePress"}),", а не ",n.jsx(t.code,{children:":active"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Reduced motion:"})," кнопки встают на место сразу, без движения, размытия и масштаба; цвет и прозрачность меняются за 150 мс."]}),`
`]}),`
`,n.jsx(u,{prefix:"--appbar-"}),`
`,n.jsx(t.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Что"}),n.jsx(t.th,{children:"В Figma"}),n.jsx(t.th,{children:"В коде"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Заголовок над обложкой"}),n.jsx(t.td,{children:"показан"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"titleOnCover"}),", по умолчанию как в Figma; на экранах с обложкой выключен, как в деталях экскурсии"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Type Search / Filter / Filter search"}),n.jsx(t.td,{children:"есть"}),n.jsxs(t.td,{children:["есть: ",n.jsx(t.code,{children:"variant"}),", ",n.jsx(t.code,{children:"AppbarSummary"}),", слот ",n.jsx(t.code,{children:"bottom"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Snackbar (булево свойство)"}),n.jsx(t.td,{children:"снекбар поверх шапки, 54 px от верха"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"SnackbarHost"}),": снекбары выезжают сверху, отдельного слота в шапке нет"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Поле Search в Figma"}),n.jsx(t.td,{children:"328 px в ряду 394"}),n.jsx(t.td,{children:"в коде поле на всю ширину ряда (минус 16 с каждой стороны)"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Размер иконок кнопок"}),n.jsx(t.td,{children:"Ghost 36 и 40, Primary 40"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"size"})," 36 или 40 у ",n.jsx(t.code,{children:"AppbarButton"}),"; кнопка это ",n.jsx(t.code,{children:"IconButton"})," (зона нажатия 44, ",n.jsx(t.code,{children:"href"})," работает)"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Заголовок над обложкой с одной кнопкой"}),n.jsx(t.td,{children:"зоны 64 (16 + 40 + 8)"}),n.jsx(t.td,{children:"зоны 56 на обоих видах, кнопки сдвигаются, как при двух; заголовок над обложкой на 16 px шире, чем в Figma"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Статус-бар"}),n.jsx(t.td,{children:"часть компонента"}),n.jsxs(t.td,{children:["системный; высота зоны — ",n.jsx(t.code,{children:"--appbar-safe-top"}),", по умолчанию ",n.jsx(t.code,{children:"env(safe-area-inset-top)"})]})]})]})]}),`
`,n.jsx(t.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(t.p,{children:["Значения, для которых в Figma нет переменной (оставлены сырыми с комментарием ",n.jsx(t.code,{children:"no token"})," в CSS):"]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["градиент ",n.jsx(t.code,{children:'product="avia"'}),": ",n.jsx(t.code,{children:"#1d84f3"})," → ",n.jsx(t.code,{children:"#268af5"})," (Figma 807:5816); токен ",n.jsx(t.code,{children:"--color-gradient-vertical-avia-*"})," имеет другие значения (",n.jsx(t.code,{children:"#268fff"})," → ",n.jsx(t.code,{children:"#54a1f3"}),"), решить должен дизайн;"]}),`
`,n.jsxs(t.li,{children:["затухание ряда чипов ",n.jsx(t.code,{children:"excursions"}),": ",n.jsx(t.code,{children:"#a179f2 → #d6c7f4 → #fff"})," (Figma 807:5818);"]}),`
`,n.jsx(t.li,{children:"зазор 6 px между чипами нижнего ряда (Figma 6, токена нет);"}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"stroke-width"})," иконки анимируется при смене вида (исключение из правила «только transform и opacity»: иначе штрих на экране прыгает с масштабом иконки 20 ↔ 24)."]}),`
`]}),`
`,n.jsx(t.h2,{id:"кнопки-и-доступность",children:"Кнопки и доступность"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"AppbarButton"})," это ",n.jsx(t.code,{children:"IconButton"})," с ",n.jsx(t.code,{children:'variant="ghost"'}),"; ",n.jsx(t.code,{children:"label"})," становится ",n.jsx(t.code,{children:"aria-label"}),". Зона нажатия 44 × 44 (у 36-пиксельных ширина 40, чтобы две соседние зоны почти не пересекались)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"AppbarSummary"})," берёт имя из видимого текста («Бишкек 29 мая, 1 участник»), ",n.jsx(t.code,{children:"aria-label"})," не нужен; если задаёте свой, он должен начинаться с видимого текста (WCAG 2.5.3)."]}),`
`,n.jsxs(t.li,{children:["Ряд ",n.jsx(t.code,{children:"bottom"})," с чипами не передаёт горизонтальный свайп странице (",n.jsx(t.code,{children:"overscroll-behavior-x: contain"}),")."]}),`
`]}),`
`,n.jsx(j,{css:f})]})}function rn(r={}){const{wrapper:t}={...i(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(o,{...r})}):o(r)}export{rn as default};
