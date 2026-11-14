import{j as n}from"./iframe-Dr5ib33t.js";import{u as s,M as d,C as o,a as l}from"./blocks-BQDa-jFX.js";import{L as c,P as r,S as a,I as h,C as x}from"./Like.stories-CKNK0tnO.js";import{U as j,M as p}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./FavouriteIcon-B7ZIwla0.js";import"./index-CU5QHq_h.js";import"./motion-C-Q-avtg.js";import"./LikeButton-DrHlodSD.js";import"./useControllableState-BCXXtwcd.js";import"./usePress-6Rv7_Jz7.js";import"./tokens-CNIzVYFy.js";const u=`/*
 * Like button (Figma 482:7928) and the FavouriteIcon glyph. Colours come from tokens.
 */
.button {
  --_press-in: calc(var(--like-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--like-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 48px;
  height: 48px;
  margin: 0;
  padding: var(--spacing-md); /* 12 */
  border: 0;
  border-radius: var(--radius-full);
  background: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition: transform var(--_press-out) var(--like-motion-press-easing);
}

.button[data-pressed],
.button:focus-visible:active:not([data-disabled]) {
  transform: scale(var(--like-motion-press-scale));
  transition-duration: var(--_press-in);
}

.button[data-disabled] {
  cursor: default;
}
/* disabled heart: the fill goes to the disabled icon colour, the white stroke stays */
.button[data-disabled] .glyph .svg {
  fill: var(--color-icon-disabled);
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 0;
}

/* ---------- glyph ---------- */
.glyph {
  position: relative;
  display: inline-flex;
  flex: none;
  color: inherit;
}

.svg {
  position: relative;
  display: block;
  overflow: visible;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.glyph[data-liked] .svg {
  fill: var(--control-icon-favorite);
  stroke: var(--control-icon-favorite);
}

/* badge: stand-alone heart over a photo */
.glyph[data-look='badge'] .svg {
  fill: var(--color-base-black-alpha-75);
  stroke: var(--control-icon-inverse);
  stroke-width: 1.6;
}
.glyph[data-look='badge'][data-liked] .svg {
  fill: var(--control-icon-favorite);
  stroke: var(--control-icon-inverse);
}

/* 6 px blur (Figma 12 / 2) behind the heart shape: the backdrop is clipped to the heart path */
.blur {
  position: absolute;
  inset: 0;
  clip-path: path('M17 4.00001C13.8 4.00001 12 6.66701 12 8.00001C12 6.66701 10.2 4.00001 7 4.00001C3.8 4.00001 3 6.66701 3 8.00001C3 15 12 20 12 20C12 20 21 15 21 8.00001C21 6.66701 20.2 4.00001 17 4.00001Z');
  /* the prefixed property gets a literal (= bg/blur/12 ÷ 2): WebKit computes it to none through var() / calc() */
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(calc(var(--bg-blur-12) / 2));
}

/* Reduced motion: no press scale (the pop is skipped in JS) */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .button,
  :global(:root:not([data-motion='normal'])) .button[data-pressed],
  :global(:root:not([data-motion='normal'])) .button:focus-visible:active:not([data-disabled]) {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .button,
:global(:root[data-motion='reduce']) .button[data-pressed],
:global(:root[data-motion='reduce']) .button:focus-visible:active:not([data-disabled]) {
  transform: none;
}
`;function t(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(e.h1,{id:"like",children:"Like"}),`
`,n.jsxs(e.p,{children:["Сердце «в избранное». Два компонента: ",n.jsx(e.code,{children:"FavouriteIcon"})," (анимированный глиф) и ",n.jsx(e.code,{children:"LikeButton"})," (кнопка из Figma). Ощущение то же, что у сердца на странице экскурсии."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=482-7928",rel:"nofollow",children:"Like button 482:7928"})," (",n.jsx(e.code,{children:"Like=False"})," / ",n.jsx(e.code,{children:"Like=True"}),")."]}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(l,{of:r}),`
`,n.jsx(e.h2,{id:"likebutton",children:"LikeButton"}),`
`,n.jsx(e.p,{children:"48 × 48, отступ 12, сердце 24 px. Работает управляемо и неуправляемо."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LikeButton } from '@mtravel/ui';

<LikeButton defaultLiked={false} onLikedChange={save} name="Обзорная по Бишкеку" />
<LikeButton liked={liked} onLikedChange={setLiked} />
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"liked"})," / ",n.jsx(e.code,{children:"defaultLiked"})]}),n.jsx(e.td,{children:"значение: управляемое или начальное"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onLikedChange(liked)"})}),n.jsx(e.td,{children:"вызывается по тапу"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"name"})}),n.jsx(e.td,{children:"название объекта, добавляется к имени для скринридера: «В избранное: Обзорная по Бишкеку»"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"disabled"}),", ",n.jsx(e.code,{children:"pressed"})]}),n.jsxs(e.td,{children:["недоступна (сердце заливается ",n.jsx(e.code,{children:"color/icon/disabled"}),");  принудительный вид нажатия (только доки)"]})]})]})]}),`
`,n.jsxs(e.p,{children:["Имя кнопки постоянное, «В избранное» (с ",n.jsx(e.code,{children:"name"}),": «В избранное: название»), а состояние несёт только ",n.jsx(e.code,{children:"aria-pressed"}),". Если менять и подпись, и ",n.jsx(e.code,{children:"aria-pressed"}),", скринридер скажет «Убрать из избранного, нажата»."]}),`
`,n.jsx(o,{of:a}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Like"}),n.jsx(e.th,{children:"Заливка"}),n.jsx(e.th,{children:"Обводка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"False"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"color/base/black/alpha-75"})}),n.jsx(e.td,{children:"белая 1.6 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"True"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"color/icon/favorite"})}),n.jsx(e.td,{children:"белая 1.6 px"})]})]})]}),`
`,n.jsxs(e.p,{children:["Блюр 6 px (Figma 12 ÷ 2) стоит за формой сердца: ",n.jsx(e.code,{children:"backdrop-filter"})," на элементе, обрезанном ",n.jsx(e.code,{children:"clip-path"})," по контуру сердца."]}),`
`,n.jsx(e.h2,{id:"favouriteicon",children:"FavouriteIcon"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { IconButton, FavouriteIcon } from '@mtravel/ui';

<IconButton variant="primary" size={44} radius="full" aria-label="В избранное" icon={<FavouriteIcon liked={liked} />} />
`})}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Что делает"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"liked"})}),n.jsx(e.td,{children:"состояние"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"look"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"outline"})," (по умолчанию): обводка 2 px цветом текста, при лайке заливка ",n.jsx(e.code,{children:"color/icon/favorite"}),", для ",n.jsx(e.code,{children:"IconButton"}),". ",n.jsx(e.code,{children:"badge"}),": вид из Figma 482:7928, отдельное сердце поверх фото"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"animate"})}),n.jsxs(e.td,{children:["разрешает пружину; по умолчанию да. ",n.jsx(e.code,{children:"false"}),", когда значение пришло не от пользователя"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"size"})}),n.jsx(e.td,{children:"размер глифа, 24"})]})]})]}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.p,{children:["Токены ",n.jsx(e.code,{children:"--like-motion-*"}),"."]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Нажатие: на ",n.jsx(e.code,{children:"pointerdown"})," кнопка сжимается до 0.94 за 100 мс, обратно за 240 мс. Уход пальца с кнопки отменяет нажатие."]}),`
`,n.jsxs(e.li,{children:["Лайк: залитое сердце «выскакивает» ",n.jsx(e.code,{children:"scale(0.85) → 1"})," за 300 мс на ",n.jsx(e.code,{children:"cubic-bezier(0.34, 1.56, 0.64, 1)"}),", это лёгкий перелёт. Анимация стартует от 0.85 и не зависит от того, где было нажатие."]}),`
`,n.jsx(e.li,{children:"Дизлайк без анимации: заливка просто меняется. Сердце, пришедшее уже лайкнутым при загрузке, тоже не прыгает."}),`
`,n.jsxs(e.li,{children:["Изменение значения снаружи (",n.jsx(e.code,{children:"Управляемый"}),") не прыгает: пружина играет только на тап в ",n.jsx(e.code,{children:"LikeButton"}),"."]}),`
`,n.jsx(e.li,{children:"Reduced motion: ни пружины, ни масштаба при нажатии."}),`
`]}),`
`,n.jsx(o,{of:x}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(j,{css:u}),`
`,n.jsx(p,{prefix:"--like-"})]})}function S(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{S as default};
