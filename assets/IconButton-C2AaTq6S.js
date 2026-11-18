import{j as n}from"./iframe-DuqTOznb.js";import{u as i,M as d,C as t,a as l}from"./blocks-CaaIEU4k.js";import{I as a,P as s,A as c,O as h,W as x}from"./IconButton.stories-COup0He9.js";import{U as j,M as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./IconButton-BxMc4E4A.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./FavouriteIcon-rVoV_bSc.js";import"./mergeRefs-BPT53vMC.js";import"./paths-BjPgyxdS.js";import"./motion-C-Q-avtg.js";import"./general-DYSfllt2.js";import"./tokens-INIU3VNa.js";const b=`/*
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
  backdrop-filter: var(--_blur);
  -webkit-backdrop-filter: var(--_blur);
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

/* Hit area of at least 44 × 44 for every size below 44 (invisible, the look stays) */
.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100%, 44px);
  height: max(100%, 44px);
  transform: translate(-50%, -50%);
}
a.button {
  text-decoration: none;
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
}
.button[data-size='36'] {
  --_s: 36px;
  --_icon: 24px;
  --_r: var(--radius-md);
}
.button[data-radius='full'] {
  --_r: var(--radius-full);
}
/* Figma: Primary / Secondary 40 carry a 20 px glyph, Ghost 40 keeps 24 */
.button[data-size='40']:not([data-variant='ghost']) {
  --_icon: 20px;
}
/* Ghost keeps radius/lg at every size */
.button[data-variant='ghost'][data-radius='16'] {
  --_r: var(--radius-lg);
}

/* ---------- variants (Figma Type) ---------- */
.button[data-variant='glass'],
.button[data-variant='glass-light'] {
  --_bg: var(--control-bg-overlay-default);
  --_bg-pressed: var(--control-bg-overlay-default); /* the glass keeps its fill, only the scale answers */
  --_fg: var(--control-icon-inverse);
  /* hairline as an inset ring: a real 0.5 px border would move the icon to half pixels */
  --_ring: inset 0 0 0 var(--border-width-hairline) var(--control-border-overlay-default);
  --_blur: var(--blur-bg-12);
}
/* light glass (Figma control/bg/overlay-light/default): the heart on the XL card */
.button[data-variant='glass-light'] {
  --_bg: var(--control-bg-overlay-light-default);
  --_bg-pressed: var(--control-bg-overlay-light-default);
}
.button[data-variant='secondary'] {
  --_bg: var(--control-bg-default);
  --_bg-pressed: var(--control-bg-pressed);
  --_fg: var(--control-icon-primary);
  --_ring: none;
  --_blur: var(--blur-bg-8);
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
`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"iconbutton",children:"IconButton"}),`
`,n.jsxs(e.p,{children:["Круглая или скруглённая кнопка с одной иконкой: назад, закрыть, избранное, поделиться. Подпись у кнопки нет, поэтому ",n.jsx(e.code,{children:"aria-label"})," или ",n.jsx(e.code,{children:"aria-labelledby"})," обязателен."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=98-109",rel:"nofollow",children:"Icon button 98:109"})," (Type × Size × Radius)."]}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(l,{of:s}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { IconButton, CloseIcon, ArrowIcon } from '@mtravel/ui';

<IconButton icon={<CloseIcon />} aria-label="Закрыть" variant="ghost" size={40} radius={16} onClick={close} />
<IconButton icon={<ArrowIcon direction="left" />} aria-label="Назад" variant="glass" size={44} radius="full" />
`})}),`
`,n.jsxs(e.p,{children:["Тип задаётся пропом ",n.jsx(e.code,{children:"variant"}),", а не ",n.jsx(e.code,{children:"type"}),": ",n.jsx(e.code,{children:"type"})," у кнопки уже занят нативным атрибутом (",n.jsx(e.code,{children:"button"})," / ",n.jsx(e.code,{children:"submit"}),`).
Иконка растягивается по рамке 24 px (в `,n.jsx(e.code,{children:"glass"})," и ",n.jsx(e.code,{children:"secondary"})," размера 40 — 20 px, так в Figma), поэтому подходит любая иконка с сеткой 24. Размер через пропы не передаётся."]}),`
`,n.jsxs(e.p,{children:["С ",n.jsx(e.code,{children:"href"})," кнопка рисуется как ",n.jsx(e.code,{children:"<a>"})," с теми же стилями (",n.jsx(e.code,{children:"target"}),", ",n.jsx(e.code,{children:"rel"}),", ",n.jsx(e.code,{children:"download"})," типизированы, ",n.jsx(e.code,{children:'target="_blank"'})," добавляет ",n.jsx(e.code,{children:'rel="noopener noreferrer"'}),"). ",n.jsx(e.code,{children:"ref"})," и остальные пропы идут на корневой элемент."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsxs(e.th,{children:["Type (",n.jsx(e.code,{children:"variant"}),")"]}),n.jsx(e.th,{children:"Заливка"}),n.jsx(e.th,{children:"Рамка"}),n.jsx(e.th,{children:"Блюр под кнопкой"}),n.jsx(e.th,{children:"Иконка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"glass"})," — тёмное стекло поверх фото (Figma Type=Primary; старое имя ",n.jsx(e.code,{children:"primary"})," работает, но не используйте)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/overlay/default"})}),n.jsxs(e.td,{children:["0.5 px ",n.jsx(e.code,{children:"control/border/overlay/default"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"blur/bg/12"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/inverse"})})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"glass-light"})," — светлое стекло (сердце на XL-карточке)"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/overlay-light/default"})}),n.jsxs(e.td,{children:["0.5 px ",n.jsx(e.code,{children:"control/border/overlay/default"})]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"blur/bg/12"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/inverse"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"secondary"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/default"})}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"blur/bg/8"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/primary"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"ghost"})}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/icon/primary"})})]})]})]}),`
`,n.jsxs(e.p,{children:["Рамка стекла нарисована внутренней тенью ",n.jsx(e.code,{children:"inset"}),", а не настоящим ",n.jsx(e.code,{children:"border"}),": так иконка не уезжает на полпикселя."]}),`
`,n.jsx(e.h2,{id:"размеры-и-радиус",children:"Размеры и радиус"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Size"}),n.jsx(e.th,{children:"Квадрат"}),n.jsx(e.th,{children:"Иконка"}),n.jsx(e.th,{children:"Radius=16, glass / Secondary"}),n.jsx(e.th,{children:"Radius=16, Ghost"}),n.jsx(e.th,{children:"Зона нажатия"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"52"}),n.jsx(e.td,{children:"52"}),n.jsx(e.td,{children:"24"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"52"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"48"}),n.jsx(e.td,{children:"48"}),n.jsx(e.td,{children:"24"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"48"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"44"}),n.jsx(e.td,{children:"44"}),n.jsx(e.td,{children:"24"}),n.jsx(e.td,{children:"14 (в Figma без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsx(e.td,{children:"44"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"40"}),n.jsx(e.td,{children:"40"}),n.jsx(e.td,{children:"24 (glass / Secondary: 20)"}),n.jsx(e.td,{children:"14 (в Figma без токена)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:["44 × 44, невидимый ",n.jsx(e.code,{children:"::before"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"36"}),n.jsx(e.td,{children:"36"}),n.jsx(e.td,{children:"24"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/md"})," 12"]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/lg"})," 16"]}),n.jsxs(e.td,{children:["44 × 44, невидимый ",n.jsx(e.code,{children:"::before"})]})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'radius="full"'})," везде даёт ",n.jsx(e.code,{children:"radius/full"}),"."]}),`
`,n.jsx(e.h2,{id:"нажатие-предложение",children:"Нажатие (предложение)"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.p,{children:"В Figma нет состояния Pressed, поэтому это предложение, оно ощущается так же, как у Button:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["на ",n.jsx(e.code,{children:"pointerdown"})," кнопка сжимается до 0.94 за 100 мс (у Button 0.97, но маленькой кнопке нужно заметнее), на отпускании возвращается за 240 мс;"]}),`
`,n.jsxs(e.li,{children:["Secondary заливается ",n.jsx(e.code,{children:"control/bg/pressed"}),", Ghost получает ",n.jsx(e.code,{children:"control/bg/default"}),", glass остаётся стеклом (отвечает только масштаб);"]}),`
`,n.jsx(e.li,{children:"если увести палец с кнопки или браузер забрал жест под скролл, нажатие отменяется;"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"disabled"}),": иконка ",n.jsx(e.code,{children:"control/icon/disabled"}),", нажатия нет;"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"forcePressed"})," принудительно включает вид нажатия, только для доков и визуальных тестов;"]}),`
`,n.jsx(e.li,{children:"reduced motion: без масштаба, заливка всё равно меняется."}),`
`]}),`
`,n.jsx(e.h2,{id:"сердце-внутри-кнопки",children:"Сердце внутри кнопки"}),`
`,n.jsx(t,{of:x}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"FavouriteIcon"})," (см. страницу Like) кладётся в ",n.jsx(e.code,{children:"icon"}),". Состояние (",n.jsx(e.code,{children:"aria-pressed"}),") и подпись задаёт вызывающий код. Имя остаётся постоянным («В избранное»), как у ",n.jsx(e.code,{children:"LikeButton"}),"."]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Нужен ",n.jsx(e.code,{children:"aria-label"})," или ",n.jsx(e.code,{children:"aria-labelledby"})," (тип требует одно из двух). Для переключателя добавьте ",n.jsx(e.code,{children:"aria-pressed"}),"."]}),`
`,n.jsxs(e.li,{children:["Иконка скрыта от скринридера (",n.jsx(e.code,{children:"aria-hidden"}),"), имя берётся из ",n.jsx(e.code,{children:"aria-label"}),"."]}),`
`,n.jsx(e.li,{children:"Зона нажатия не меньше 44 × 44 у всех размеров."}),`
`,n.jsxs(e.li,{children:["Фокус с клавиатуры показывается кольцом ",n.jsx(e.code,{children:"border/focus"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(e.p,{children:"Собраны из CSS компонента, поэтому таблица всегда совпадает с кодом: цепочка до примитива и имя переменной в Figma."}),`
`,n.jsx(j,{css:b}),`
`,n.jsx(u,{prefix:"--icon-button-"})]})}function G(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{G as default};
