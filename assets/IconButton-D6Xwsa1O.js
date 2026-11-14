import{j as n}from"./iframe-Dr5ib33t.js";import{u as s,M as d,C as i,a as l}from"./blocks-BQDa-jFX.js";import{I as a,P as t,A as c,O as h,W as x}from"./IconButton.stories-X0tnMDGA.js";import{U as j,M as u}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./index-CU5QHq_h.js";import"./IconButton-DBWbz_Xc.js";import"./usePress-6Rv7_Jz7.js";import"./FavouriteIcon-B7ZIwla0.js";import"./motion-C-Q-avtg.js";import"./tokens-CNIzVYFy.js";const b=`/*
 * IconButton, Figma 98:109. Colours, blur and hairline come from tokens; the private --_* variables only
 * route the right token per variant / size / state.
 */
.button {
  --_press-in: calc(var(--icon-button-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--icon-button-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--icon-button-motion-state-duration) * var(--motion-scale));

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--_s);
  height: var(--_s);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--_r);
  background-color: var(--_bg);
  box-shadow: var(--_ring);
  /* -webkit-backdrop-filter is set per variant below with a literal value: WebKit computes it to none through var() */
  backdrop-filter: var(--_blur);
  color: var(--_fg);
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--icon-button-motion-press-easing),
    background-color var(--_press-out) var(--icon-button-motion-press-easing),
    color var(--_state) var(--icon-button-motion-state-easing);
}

/* Hit area of at least 44 px for the 40 and 36 buttons (an invisible inset) */
.button::after {
  content: '';
  position: absolute;
  inset: var(--_hit, 0px);
}

/* ---------- sizes (Figma Size) ---------- */
.button[data-size='52'] {
  --_s: 52px;
  --_icon: 24px;
  --_r: var(--radius-lg);
}
.button[data-size='48'] {
  --_s: 48px;
  --_icon: 24px;
  --_r: var(--radius-lg);
}
.button[data-size='44'] {
  --_s: 44px;
  --_icon: 24px;
  --_r: 14px; /* Figma: raw 14, there is no radius token for it */
}
.button[data-size='40'] {
  --_s: 40px;
  --_icon: 24px;
  --_r: 14px; /* Figma: raw 14 */
  --_hit: -2px;
}
.button[data-size='36'] {
  --_s: 36px;
  --_icon: 20px;
  --_r: 12px; /* Figma: raw 12 */
  --_hit: -4px;
}
.button[data-radius='full'] {
  --_r: var(--radius-full);
}
/* Ghost keeps radius/lg at every size */
.button[data-variant='ghost'][data-radius='16'] {
  --_r: var(--radius-lg);
}

/* ---------- variants (Figma Type) ---------- */
.button[data-variant='primary'] {
  --_bg: var(--control-bg-overlay-default);
  --_bg-pressed: var(--control-bg-overlay-default); /* the glass keeps its fill, only the scale answers */
  --_fg: var(--control-icon-inverse);
  /* hairline as an inset ring: a real 0.5 px border would move the icon to half pixels */
  --_ring: inset 0 0 0 var(--border-width-hairline) var(--control-border-overlay-default);
  --_blur: blur(calc(var(--bg-blur-12) / 2));
  -webkit-backdrop-filter: blur(6px); /* = bg/blur/12 ÷ 2, literal on purpose */
}
.button[data-variant='secondary'] {
  --_bg: var(--control-bg-default);
  --_bg-pressed: var(--control-bg-pressed);
  --_fg: var(--control-icon-primary);
  --_ring: none;
  --_blur: blur(calc(var(--bg-blur-8) / 2));
  -webkit-backdrop-filter: blur(4px); /* = bg/blur/8 ÷ 2, literal on purpose */
}
.button[data-variant='ghost'] {
  --_bg: transparent;
  --_bg-pressed: var(--control-bg-default);
  --_fg: var(--control-icon-primary);
  --_ring: none;
  --_blur: none;
}

/* ---------- states ---------- */
.button[data-pressed],
.button:focus-visible:active:not([data-disabled]) {
  transform: scale(var(--icon-button-motion-press-scale));
  background-color: var(--_bg-pressed);
  transition-duration: var(--_press-in), var(--_press-in), var(--_state);
}

.button[data-disabled] {
  --_fg: var(--control-icon-disabled);
  cursor: default;
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* ---------- icon ---------- */
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon);
  height: var(--_icon);
}
.icon > svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Reduced motion: no scale, the fill still changes */
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
`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"iconbutton",children:"IconButton"}),`
`,n.jsxs(e.p,{children:["Круглая или скруглённая кнопка с одной иконкой: назад, закрыть, избранное, поделиться. Подпись у кнопки нет, поэтому ",n.jsx(e.code,{children:"aria-label"})," или ",n.jsx(e.code,{children:"aria-labelledby"})," обязателен."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=98-109",rel:"nofollow",children:"Icon button 98:109"})," (Type × Size × Radius)."]}),`
`,n.jsx(i,{of:t}),`
`,n.jsx(l,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { IconButton, CloseIcon, ArrowLeftIcon } from '@mtravel/ui';

<IconButton icon={<CloseIcon />} aria-label="Закрыть" variant="ghost" size={40} radius={16} onClick={close} />
<IconButton icon={<ArrowLeftIcon />} aria-label="Назад" variant="primary" size={44} radius="full" />
`})}),`
`,n.jsxs(e.p,{children:["Тип задаётся пропом ",n.jsx(e.code,{children:"variant"}),", а не ",n.jsx(e.code,{children:"type"}),": ",n.jsx(e.code,{children:"type"})," у кнопки уже занят нативным атрибутом (",n.jsx(e.code,{children:"button"})," / ",n.jsx(e.code,{children:"submit"}),`).
Иконки DS (`,n.jsx(e.code,{children:"CloseIcon"}),", ",n.jsx(e.code,{children:"ArrowLeftIcon"}),", ",n.jsx(e.code,{children:"HeartIcon"}),") получают размер сами: 24 px, для кнопки 36 px 20 px. Своя иконка (не DS) должна уметь размер 24 / 20 сама."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsxs(e.th,{children:["Type (",n.jsx(e.code,{children:"variant"}),")"]}),n.jsx(e.th,{children:"Заливка"}),n.jsx(e.th,{children:"Рамка"}),n.jsx(e.th,{children:"Блюр под кнопкой"}),n.jsx(e.th,{children:"Иконка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"primary"})," — тёмное стекло поверх фото"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/overlay/default"})}),n.jsxs(e.td,{children:["0.5 px ",n.jsx(e.code,{children:"control/border/overlay/default"})]}),n.jsxs(e.td,{children:["6 px (",n.jsx(e.code,{children:"bg/blur/12"})," ÷ 2)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/inverse"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"secondary"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/default"})}),n.jsx(e.td,{children:"нет"}),n.jsxs(e.td,{children:["4 px (",n.jsx(e.code,{children:"bg/blur/8"})," ÷ 2)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/primary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ghost"})}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/primary"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Рамка Primary нарисована внутренней тенью ",n.jsx(e.code,{children:"inset"}),", а не настоящим ",n.jsx(e.code,{children:"border"}),": так иконка не уезжает на полпикселя."]}),`
`,n.jsx(e.h2,{id:"размеры-и-радиус",children:"Размеры и радиус"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Size"}),n.jsx(e.th,{children:"Квадрат"}),n.jsx(e.th,{children:"Иконка"}),n.jsx(e.th,{children:"Radius=16, Primary / Secondary"}),n.jsx(e.th,{children:"Radius=16, Ghost"}),n.jsx(e.th,{children:"Зона нажатия"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"52"}),n.jsx(e.td,{children:"52"}),n.jsx(e.td,{children:"24"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"52"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"48"}),n.jsx(e.td,{children:"48"}),n.jsx(e.td,{children:"24"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"48"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"44"}),n.jsx(e.td,{children:"44"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:"14 (в Figma без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"44"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"40"}),n.jsx(e.td,{children:"40"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:"14 (в Figma без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"44, невидимая добавка 2 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"36"}),n.jsx(e.td,{children:"36"}),n.jsx(e.td,{children:"20"}),n.jsx(e.td,{children:"12 (в Figma без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"44, невидимая добавка 4 px"})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'radius="full"'})," везде даёт ",n.jsx(e.code,{children:"radius/full"}),"."]}),`
`,n.jsx(e.h2,{id:"нажатие-предложение",children:"Нажатие (предложение)"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.p,{children:"В Figma нет состояния Pressed, поэтому это предложение, оно ощущается так же, как у Button:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["на ",n.jsx(e.code,{children:"pointerdown"})," кнопка сжимается до 0.94 за 100 мс (у Button 0.97, но маленькой кнопке нужно заметнее), на отпускании возвращается за 240 мс;"]}),`
`,n.jsxs(e.li,{children:["Secondary заливается ",n.jsx(e.code,{children:"control/bg/pressed"}),", Ghost получает ",n.jsx(e.code,{children:"control/bg/default"}),", Primary остаётся стеклом (отвечает только масштаб);"]}),`
`,n.jsx(e.li,{children:"если увести палец с кнопки или браузер забрал жест под скролл, нажатие отменяется;"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled"}),": иконка ",n.jsx(e.code,{children:"control/icon/disabled"}),", нажатия нет;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"pressed"})," принудительно включает вид нажатия, только для доков и визуальных тестов;"]}),`
`,n.jsx(e.li,{children:"reduced motion: без масштаба, заливка всё равно меняется."}),`
`]}),`
`,n.jsx(e.h2,{id:"сердце-внутри-кнопки",children:"Сердце внутри кнопки"}),`
`,n.jsx(i,{of:x}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"FavouriteIcon"})," (см. страницу Like) кладётся в ",n.jsx(e.code,{children:"icon"}),". Состояние (",n.jsx(e.code,{children:"aria-pressed"}),") и подпись задаёт вызывающий код. Имя остаётся постоянным («В избранное»), как у ",n.jsx(e.code,{children:"LikeButton"}),"."]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Нужен ",n.jsx(e.code,{children:"aria-label"})," или ",n.jsx(e.code,{children:"aria-labelledby"})," (тип требует одно из двух). Для переключателя добавьте ",n.jsx(e.code,{children:"aria-pressed"}),"."]}),`
`,n.jsxs(e.li,{children:["Иконка скрыта от скринридера (",n.jsx(e.code,{children:"aria-hidden"}),"), имя берётся из ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsx(e.li,{children:"Зона нажатия не меньше 44 px у всех размеров."}),`
`,n.jsxs(e.li,{children:["Фокус с клавиатуры показывается кольцом ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(j,{css:b}),`
`,n.jsx(u,{prefix:"--icon-button-"})]})}function S(r={}){const{wrapper:e}={...s(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{S as default};
