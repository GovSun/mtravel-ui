import{j as n}from"./iframe-DyD5Yel4.js";import{u as s,M as a,C as e,a as d}from"./blocks-CcI75u3-.js";import{B as l,P as o,A as c,a as h,L as x,W as u,F as p,C as j}from"./Button.stories-Br4Y4x19.js";import{M as b,U as m}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./tokens-Bc2_NrJ2.js";import"./Button-grGIhY78.js";import"./cx-2dOUpm6k.js";import"./motion-C-Q-avtg.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./arrows-0JYTYJZi.js";const g=`/*
 * Button, Figma 75:214. Everything visual comes from tokens; the private --_* variables only route
 * the right token per variant / size / state.
 */
.button {
  --_press-in: calc(var(--button-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--button-motion-press-out-duration) * var(--motion-scale));
  --_state: calc(var(--button-motion-state-duration) * var(--motion-scale));
  --_load: calc(var(--button-motion-loading-duration) * var(--motion-scale));

  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  height: var(--_h);
  margin: 0;
  padding: 0 var(--_px);
  border: 0;
  border-radius: var(--_r);
  background-color: var(--_bg);
  color: var(--_fg);
  font: var(--font-im-16-button);
  letter-spacing: var(--tracking-im-16-button);
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition:
    transform var(--_press-out) var(--button-motion-press-easing),
    background-color var(--_press-out) var(--button-motion-press-easing),
    color var(--_state) var(--motion-ease-standard);
}

.button[data-full-width] {
  display: flex;
  width: 100%;
  /* may shrink: two full-width buttons in a row share the width; basis stays auto, so a column parent is unaffected */
  flex: 0 1 auto;
  min-width: 0;
}

/* Hit area of at least 44 px for the 40 px button (invisible; the button keeps its own 40 px look) */
.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100%, 44px);
  height: max(100%, 44px);
  transform: translate(-50%, -50%);
}

/* the link variant (href) looks the same */
a.button {
  text-decoration: none;
}

/* ---------- sizes (Figma Size) ---------- */
.button[data-size='52'] {
  --_h: 52px;
  --_px: var(--spacing-lg);
  --_r: var(--radius-lg);
  --_spinner: 20px;
  --_track: 40px;
  --_dot: 6px;
}
.button[data-size='48'] {
  --_h: 48px;
  --_px: var(--spacing-lg);
  --_r: var(--radius-lg);
  --_spinner: 18px;
  --_track: 40px;
  --_dot: 6px;
}
.button[data-size='44'] {
  --_h: 44px;
  --_px: var(--spacing-md);
  --_r: var(--radius-lg);
  --_spinner: 16px;
  --_track: 32px;
  --_dot: 5px;
}
.button[data-size='40'] {
  --_h: 40px;
  --_px: var(--spacing-md);
  --_r: 14px; /* Figma: raw 14, there is no radius token for it */
  --_spinner: 16px;
  --_track: 32px;
  --_dot: 5px;
}
.button[data-radius='full'] {
  --_r: var(--radius-full);
}

/* ---------- variants (Figma Type) ---------- */
.button[data-variant='primary'] {
  --_bg: var(--button-bg-primary-default);
  --_bg-pressed: var(--button-bg-primary-pressed);
  --_fg: var(--button-text-primary); /* always dark on yellow */
  --_sheen: var(--color-base-white-alpha-64);
}
.button[data-variant='secondary'] {
  --_bg: var(--button-bg-secondary-default);
  --_bg-pressed: var(--button-bg-secondary-pressed);
  --_fg: var(--button-text-secondary); /* flips with the theme */
  --_sheen: var(--color-base-white-alpha-75);
}
.button[data-variant='ghost'][data-size='40']:not([data-radius='full']) {
  --_r: var(--radius-lg); /* Figma Ghost 40 / R16 is 16 (Primary and Secondary 40 are 14) */
}
.button[data-variant='ghost'] {
  --_bg: rgba(255, 255, 255, 0);
  --_bg-pressed: var(--button-bg-ghost-pressed);
  --_fg: var(--button-text-ghost);
  --_sheen: var(--color-bg-accent-muted);
}

/* ---------- states ---------- */
/* Pressed: the background token switches to …/pressed and the button scales down. Fast in, softer out. */
.button[data-pressed],
.button:focus-visible:active:not([data-disabled]):not([data-loading]) {
  transform: scale(var(--button-motion-press-scale));
  background-color: var(--_bg-pressed);
  transition-duration: var(--_press-in), var(--_press-in), var(--_state);
}

.button[data-disabled] {
  --_bg: var(--button-bg-disabled);
  --_fg: var(--button-text-disabled);
  cursor: default;
}
.button[data-variant='ghost'][data-disabled] {
  --_bg: rgba(255, 255, 255, 0);
}

.button[data-loading] {
  cursor: default;
}

.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* ---------- content ---------- */
.content {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  transition:
    opacity var(--_load) var(--motion-ease-out),
    filter var(--_load) var(--motion-ease-out),
    transform var(--_load) var(--motion-ease-out);
}

/* Loading with an indicator in place of the label: the label leaves (it keeps the width). */
.button[data-loading][data-hides-label] .content {
  opacity: 0;
  filter: blur(2px);
  transform: scale(0.96);
}

.text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caption {
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
}

.icon {
  display: flex;
  width: 16px;
  height: 16px;
}

/* ---------- loaders ---------- */
.loader {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  transition:
    opacity var(--_load) var(--motion-ease-out),
    filter var(--_load) var(--motion-ease-out);
}

/* Fading out after loading ended (the element stays mounted for a moment). */
.button:not([data-loading]) .loader {
  opacity: 0;
  filter: blur(2px);
}

/* Spinner (current Figma): 3/4 ring, constant speed. */
.spinner {
  width: var(--_spinner);
  height: var(--_spinner);
  animation: spin calc(var(--button-loader-spin-duration) * var(--motion-scale)) linear infinite;
}

/* Линия: a short track instead of the label; a segment runs through it, accelerating and slowing down. */
.track {
  position: relative;
  display: block;
  width: var(--_track);
  height: 3px;
  overflow: hidden;
  border-radius: var(--radius-full);
}
.track::before {
  content: '';
  position: absolute;
  inset: 0;
  background: currentColor;
  opacity: 0.2;
}
.segment {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 40%;
  border-radius: inherit;
  background: currentColor;
  animation: run calc(var(--button-loader-bar-duration) * var(--motion-scale)) var(--motion-ease-in-out) infinite;
}

/* Линия под текстом: the same track, label-wide, under the label. */
.loader[data-kind='underline'] {
  inset: auto 0 -6px;
  display: block;
}
.loader[data-kind='underline'] .track {
  width: 100%;
  height: 2px;
}
.loader[data-kind='underline'] .segment {
  width: 35%;
  animation-duration: calc(var(--button-loader-edge-duration) * var(--motion-scale));
}

/* Перелив: a soft sheen crosses the button behind the label. */
.sheen {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit; /* the button itself no longer clips (its ::before is the hit area) */
}
.loader[data-kind='sweep'] {
  border-radius: inherit;
}
.sheen::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  background: linear-gradient(100deg, transparent 0%, var(--_sheen) 50%, transparent 100%);
  animation: sweep calc(var(--button-loader-sweep-duration) * var(--motion-scale)) var(--motion-ease-in-out) infinite;
}

/* Точки: three dots, a wave passes through them. */
.dots {
  display: flex;
  gap: calc(var(--_dot) * 0.75);
}
.dots i {
  width: var(--_dot);
  height: var(--_dot);
  border-radius: 50%;
  background: currentColor;
  animation: dot calc(var(--button-loader-dots-duration) * var(--motion-scale)) var(--motion-ease-in-out) infinite;
}
.dots i:nth-child(2) {
  animation-delay: calc(var(--button-loader-dots-duration) * var(--motion-scale) * 0.15);
}
.dots i:nth-child(3) {
  animation-delay: calc(var(--button-loader-dots-duration) * var(--motion-scale) * 0.3);
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
/* segment is 40 % of the track: −100 % is fully out on the left, 250 % fully out on the right */
@keyframes run {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(250%);
  }
}
/* sheen is 60 % of the button wide: 170 % takes it fully past the right edge */
@keyframes sweep {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(170%);
  }
}
@keyframes dot {
  0%,
  70%,
  100% {
    opacity: 0.3;
    transform: scale(0.7);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes breathe {
  from {
    opacity: 0.35;
  }
  to {
    opacity: 1;
  }
}

/* Reduced motion: nothing travels; the indicator breathes in place. The spinner keeps turning,
   like the system activity indicator. */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .segment,
  :global(:root:not([data-motion='normal'])) .sheen::before,
  :global(:root:not([data-motion='normal'])) .dots i {
    width: 100%;
    transform: none;
    animation: breathe 900ms var(--motion-ease-in-out) infinite alternate;
  }
  :global(:root:not([data-motion='normal'])) .dots i {
    width: var(--_dot);
  }
}
:global(:root[data-motion='reduce']) .segment,
:global(:root[data-motion='reduce']) .sheen::before,
:global(:root[data-motion='reduce']) .dots i {
  width: 100%;
  transform: none;
  animation: breathe 900ms var(--motion-ease-in-out) infinite alternate;
}
:global(:root[data-motion='reduce']) .dots i {
  width: var(--_dot);
}

.srOnly {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* reduced motion: the press and the loading label do not scale — the colour change stays as the feedback */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .button[data-pressed],
  :global(:root:not([data-motion='normal'])) .button:focus-visible:active {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .button[data-loading][data-hides-label] .content {
    transform: none;
    filter: none;
  }
}
:global(:root[data-motion='reduce']) .button[data-pressed],
:global(:root[data-motion='reduce']) .button:focus-visible:active {
  transform: none;
}
:global(:root[data-motion='reduce']) .button[data-loading][data-hides-label] .content {
  transform: none;
  filter: none;
}
`;function i(r){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(t.h1,{id:"button",children:"Button"}),`
`,n.jsxs(t.p,{children:["Кнопки MTravel. ",n.jsx(t.strong,{children:"Primary"})," — главное действие экрана, одно на экран. ",n.jsx(t.strong,{children:"Secondary"})," — второстепенное. ",n.jsx(t.strong,{children:"Ghost"})," — третичное действие или кнопка-ссылка."]}),`
`,n.jsxs(t.p,{children:["Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=75-214",rel:"nofollow",children:"Button 75:214"})," (Type × Size × Radius × State = 96 вариантов), Spinner 75:8."]}),`
`,n.jsx(e,{of:o}),`
`,n.jsx(d,{of:o}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Где в дизайне."})," Детальная страница 173:13296 («Выбрать дату», «К оформлению»), «Оформление заказ» 1338:107637 («Оплатить», «Понятно»), фильтры «Фильтрация» 571:36536 («Сбросить» / «Применить», «Сбросить» / «Готово»)."]}),`
`,n.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { Button, ChevronIcon } from '@mtravel/ui';

<Button onClick={pay}>Оплатить</Button>
<Button variant="secondary" size={44} iconRight={<ChevronIcon />}>Все билеты</Button>
<Button fullWidth loading={isPaying} caption="12 400 ⃀ за двоих">Оплатить</Button>
`})}),`
`,n.jsx(t.h2,{id:"размеры",children:"Размеры"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Size"}),n.jsx(t.th,{children:"Высота"}),n.jsx(t.th,{children:"Отступы"}),n.jsx(t.th,{children:"Радиус (Radius=16)"}),n.jsx(t.th,{children:"Спиннер"}),n.jsx(t.th,{children:"«Линия»"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"52 — основной"}),n.jsx(t.td,{children:"52"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"spacing/lg"})," 16"]}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"radius/lg"})," 16"]}),n.jsx(t.td,{children:"20"}),n.jsx(t.td,{children:"40 × 3"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"48"}),n.jsx(t.td,{children:"48"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"spacing/lg"})," 16"]}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"radius/lg"})," 16"]}),n.jsx(t.td,{children:"18"}),n.jsx(t.td,{children:"40 × 3"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"44 — компактный, в карточках и шторках"}),n.jsx(t.td,{children:"44"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"spacing/md"})," 12"]}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"radius/lg"})," 16"]}),n.jsx(t.td,{children:"16"}),n.jsx(t.td,{children:"32 × 3"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"40"}),n.jsx(t.td,{children:"40"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"spacing/md"})," 12"]}),n.jsx(t.td,{children:"14 (в Figma без токена); у Ghost 16"}),n.jsx(t.td,{children:"16"}),n.jsx(t.td,{children:"32 × 3"})]})]})]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.code,{children:'radius="full"'})," даёт ",n.jsx(t.code,{children:"radius/full"}),". Текст ",n.jsx(t.code,{children:"IM-16 - Button"}),", подпись ",n.jsx(t.code,{children:"IM-12 R"}),", иконки 16, промежуток ",n.jsx(t.code,{children:"spacing/sm"})," 8."]}),`
`,n.jsx(t.h2,{id:"состояния-и-токены",children:"Состояния и токены"}),`
`,n.jsx(e,{of:c}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"State"}),n.jsx(t.th,{children:"Primary"}),n.jsx(t.th,{children:"Secondary"}),n.jsx(t.th,{children:"Ghost"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Default"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/bg/primary/default"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/bg/secondary/default"})}),n.jsx(t.td,{children:"без фона"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Pressed"}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/bg/primary/pressed"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/bg/secondary/pressed"})}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/bg/ghost/pressed"})})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Disabled"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"button/bg/disabled"})," + ",n.jsx(t.code,{children:"button/text/disabled"})]}),n.jsx(t.td,{children:"то же"}),n.jsxs(t.td,{children:["без фона + ",n.jsx(t.code,{children:"button/text/disabled"})]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Loading"}),n.jsx(t.td,{children:"фон Default, не нажимается"}),n.jsx(t.td,{children:"то же"}),n.jsx(t.td,{children:"то же"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Текст, иконки, лоадер"}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"button/text/primary"}),": всегда тёмный на жёлтом"]}),n.jsxs(t.td,{children:[n.jsx(t.code,{children:"button/text/secondary"}),": меняется с темой"]}),n.jsx(t.td,{children:n.jsx(t.code,{children:"button/text/ghost"})})]})]})]}),`
`,n.jsx(t.h2,{id:"нажатие",children:"Нажатие"}),`
`,n.jsx(e,{of:h}),`
`,n.jsxs(t.p,{children:["То же ощущение, что у Counter, токены ",n.jsx(t.code,{children:"--button-motion-press-*"}),":"]}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["На ",n.jsx(t.code,{children:"pointerdown"})," фон переключается на токен ",n.jsx(t.code,{children:"…/pressed"}),", кнопка сжимается до 0.97 (текст и иконки вместе с ней). Обе смены идут за 100 мс по сильному ease-out."]}),`
`,n.jsxs(t.li,{children:["На отпускании всё возвращается мягче, за 240 мс. Значение кнопки (",n.jsx(t.code,{children:"onClick"}),") срабатывает на отпускании, как у нативной кнопки."]}),`
`,n.jsx(t.li,{children:"Это CSS transition: короткий тап разворачивает анимацию с того места, где она сейчас. Если увести палец с кнопки или браузер начнёт скролл, нажатие отменяется."}),`
`,n.jsxs(t.li,{children:["С клавиатуры: Пробел даёт то же нажатие. Фокус показывается кольцом ",n.jsx(t.code,{children:"border/focus"}),"."]}),`
`]}),`
`,n.jsx(t.h2,{id:"загрузка",children:"Загрузка"}),`
`,n.jsx(e,{of:x}),`
`,n.jsxs(t.p,{children:["Пять вариантов, проп ",n.jsx(t.code,{children:"loader"}),". Все линейные варианты двигают только ",n.jsx(t.code,{children:"transform"})," и ",n.jsx(t.code,{children:"opacity"}),", так что это дёшево даже в вебвью на слабом Android."]}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:n.jsx(t.code,{children:"loader"})}),n.jsx(t.th,{children:"Что видно"}),n.jsx(t.th,{children:"Когда подходит"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"bar"})," — ",n.jsx(t.strong,{children:"Линия"})," (по умолчанию)"]}),n.jsx(t.td,{children:"дорожка 40 × 3 на месте текста, отрезок пробегает с ускорением и торможением за 1.1 с"}),n.jsx(t.td,{children:"основной вариант: компактно, читается на любом фоне"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"underline"})," — ",n.jsx(t.strong,{children:"Линия под текстом"})]}),n.jsx(t.td,{children:"текст остаётся, под ним бежит полоска шириной с текст"}),n.jsx(t.td,{children:"когда в тексте важная информация (сумма, срок)"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"sweep"})," — ",n.jsx(t.strong,{children:"Перелив"})]}),n.jsx(t.td,{children:"текст остаётся, через кнопку проходит мягкий блик за 1.4 с"}),n.jsx(t.td,{children:"спокойный фон-процесс, крупные CTA на всю ширину"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"dots"})," — ",n.jsx(t.strong,{children:"Точки"})]}),n.jsx(t.td,{children:"три точки, по ним идёт волна"}),n.jsx(t.td,{children:"короткие ожидания, мессенджерный тон"})]}),n.jsxs(t.tr,{children:[n.jsxs(t.td,{children:[n.jsx(t.code,{children:"spinner"})," — ",n.jsx(t.strong,{children:"Спиннер"})]}),n.jsx(t.td,{children:"кольцо 3/4 из Figma, оборот за 0.8 с"}),n.jsx(t.td,{children:"текущий вариант в Figma"})]})]})]}),`
`,n.jsx(t.p,{children:"Общее поведение:"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Ширина кнопки не меняется: текст остаётся в разметке. У ",n.jsx(t.code,{children:"bar"}),", ",n.jsx(t.code,{children:"dots"})," и ",n.jsx(t.code,{children:"spinner"})," текст уходит в прозрачность с размытием 2 px и масштабом 0.96, лоадер проявляется с небольшой задержкой (200 мс, токен ",n.jsx(t.code,{children:"--button-motion-loading-duration"}),"). Обратный переход тот же."]}),`
`,n.jsxs(t.li,{children:["В загрузке кнопка не нажимается (",n.jsx(t.code,{children:"aria-disabled"}),"), но остаётся в фокусе. Для скринридера ",n.jsx(t.code,{children:'aria-busy="true"'})," и к имени добавляется «, Загрузка» (",n.jsx(t.code,{children:"loadingLabel"}),")."]}),`
`,n.jsx(t.li,{children:"Reduced motion: отрезок и блик не ездят, индикатор мягко «дышит» прозрачностью на месте. Спиннер вращается, как системный индикатор."}),`
`]}),`
`,n.jsx(b,{prefix:"--button-"}),`
`,n.jsx(t.h2,{id:"иконки-подпись-ширина",children:"Иконки, подпись, ширина"}),`
`,n.jsx(e,{of:u}),`
`,n.jsx(e,{of:p}),`
`,n.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(t.p,{children:["Две ",n.jsx(t.code,{children:"fullWidth"}),"-кнопки в одной строке (футер фильтров) делят ширину поровну: у такой кнопки ",n.jsx(t.code,{children:"flex: 0 1 auto"}),", она может сжиматься."]}),`
`,n.jsx(e,{of:j}),`
`,n.jsx(t.h3,{id:"кнопка-ссылка",children:"Кнопка-ссылка"}),`
`,n.jsxs(t.p,{children:["С ",n.jsx(t.code,{children:"href"})," кнопка рисуется как ",n.jsx(t.code,{children:"<a>"})," с теми же стилями (для ",n.jsx(t.code,{children:"<Link>"})," роутера: обработчик ",n.jsx(t.code,{children:"onClick"})," получает нативное событие). ",n.jsx(t.code,{children:'target="_blank"'})," добавляет ",n.jsx(t.code,{children:'rel="noopener noreferrer"'}),". ",n.jsx(t.code,{children:"href"})," вместе с ",n.jsx(t.code,{children:"loading"})," блокирует переход."]}),`
`,n.jsx(t.h2,{id:"зона-нажатия",children:"Зона нажатия"}),`
`,n.jsxs(t.p,{children:["Кнопка 40 получает невидимую зону 44 × 44 (",n.jsx(t.code,{children:"::before"}),"), внешний вид остаётся 40. Основные мобильные размеры — 52, 48 и 44."]}),`
`,n.jsx(t.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(t.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(m,{css:g})]})}function L(r={}){const{wrapper:t}={...s(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(i,{...r})}):i(r)}export{L as default};
