import{j as n}from"./iframe-DuqTOznb.js";import{u as i,M as a,C as e,a as d}from"./blocks-CaaIEU4k.js";import{F as l,P as s,S as c,C as h}from"./FastButton.stories-BcZ2Lxvh.js";import{M as x,U as u}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./usePress-DgMUH5X0.js";import"./cx-2dOUpm6k.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./tokens-INIU3VNa.js";const p=`/*
 * FastButton, Figma fast_button 883:4903 (page Button): 120 wide, tile 120 × 48 (radius 20, clips), label under it, gap 8.
 * The icon is 51 px in a 48 px tile: its lower edge is cut off, Figma clips the frame.
 */
.root {
  --_press-in: calc(var(--fast-button-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--fast-button-motion-press-out-duration) * var(--motion-scale));

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-sm);
  width: 120px; /* no token: Figma 883:4903 fixed width */
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: var(--control-text-default);
  font: var(--font-im-14-b);
  letter-spacing: var(--tracking-im-14-b);
  text-align: center;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition: transform var(--_press-out) var(--fast-button-motion-press-easing);
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: 20px;
}
.root[data-pressed],
.root:focus-visible:active:not(:disabled) {
  transform: scale(var(--fast-button-motion-press-scale));
  transition-duration: var(--_press-in);
}
.root[data-disabled] {
  color: var(--control-text-disabled);
  cursor: default;
}
.root[data-disabled] .icon {
  color: var(--control-icon-disabled);
}

.tile {
  position: relative;
  display: block;
  height: 48px;
  overflow: hidden;
  border-radius: 20px; /* no token: Figma 883:4904 radius 20 */
  background: linear-gradient(180deg, #f2f4f7, #f6f7f8); /* no token: Figma 883:4904 raw gradient top to bottom (control/bg/default is close, not equal) */
  box-shadow: var(--inner-shadow-hairline);
}
.icon {
  position: absolute;
  top: 7px; /* no token: Figma 883:4905 */
  left: calc(50% - 26px);
  display: block;
  width: 51px;
  height: 51px;
  color: var(--color-bg-accent); /* Figma binds bg/accent to the icon */
}
.icon > svg {
  display: block;
}
.label {
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed],
  :global(:root:not([data-motion='normal'])) .root:focus-visible:active:not(:disabled) {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed],
:global(:root[data-motion='reduce']) .root:focus-visible:active:not(:disabled) {
  transform: none;
}
`;function r(o){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(t.h1,{id:"fastbutton",children:"FastButton"}),`
`,n.jsxs(t.p,{children:["Быстрое действие на экране: светлая плитка 120 × 48 с крупной синей иконкой и подписью под ней, например «Показать чек» в заказе. Это не ",n.jsx(t.a,{href:"?path=/docs/components-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Button"})," (кнопка-таблетка с текстом) и не ",n.jsx(t.a,{href:"?path=/docs/components-iconbutton--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"IconButton"})," (иконка без подписи): плитка читается как одна кнопка, имя ей даёт подпись."]}),`
`,n.jsxs(t.p,{children:["Figma: ",n.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4903",rel:"nofollow",children:"fast_button 883:4903"})," (страница Button). Один компонент без вариантов. В «Выходные» его пока нигде нет, он лежит в дизайн-системе без экземпляров."]}),`
`,n.jsx(e,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-tsx",children:`import { FastButton } from '@mtravel/ui';

<FastButton onClick={showReceipt}>Показать чек</FastButton>
`})}),`
`,n.jsx(t.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(e,{of:c}),`
`,n.jsxs(t.p,{children:["Плитка 120 × 48, радиус 20, светлый градиент и ",n.jsx(t.code,{children:"inner-shadow/hairline"}),". Иконка 51 px, ",n.jsx(t.code,{children:"bg/accent"}),", у плитки нижний край обрезает её (в Figma frame с clip). Подпись IM-14 B, ",n.jsx(t.code,{children:"control/text/default"}),", зазор 8: высота 72. Недоступная кнопка серая, нажатая сжимается."]}),`
`,n.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e,{of:h}),`
`,n.jsx(t.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Нажатие:"})," вся кнопка сжимается до 0.97 за 100 мс, возвращается за 240 мс. Как у Button."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Reduced motion:"})," без сжатия."]}),`
`]}),`
`,n.jsx(x,{prefix:"--fast-button-"}),`
`,n.jsx(u,{css:p}),`
`,n.jsx(t.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,n.jsxs(t.table,{children:[n.jsx(t.thead,{children:n.jsxs(t.tr,{children:[n.jsx(t.th,{children:"Что"}),n.jsx(t.th,{children:"Значение"})]})}),n.jsxs(t.tbody,{children:[n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Заливка плитки"}),n.jsxs(t.td,{children:["градиент ",n.jsx(t.code,{children:"#F2F4F7"})," → ",n.jsx(t.code,{children:"#F6F7F8"})," сверху вниз, без переменных (883:4904); в тёмной теме останется светлой"]})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Радиус"}),n.jsx(t.td,{children:"20"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Ширина 120, положение иконки (x 34, y 7)"}),n.jsx(t.td,{children:"заданы числами"})]}),n.jsxs(t.tr,{children:[n.jsx(t.td,{children:"Размер иконки"}),n.jsx(t.td,{children:"51 в плитке высотой 48: низ обрезается"})]})]})]}),`
`,n.jsx(t.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["Нативная ",n.jsx(t.code,{children:"<button>"}),", имя из подписи; плитка и иконка скрыты от скринридеров."]}),`
`,n.jsx(t.li,{children:"Размер 120 × 72, зона нажатия больше 44."}),`
`,n.jsxs(t.li,{children:["Фокус с клавиатуры обводится рамкой ",n.jsx(t.code,{children:"color/border/focus"})," 2 px."]}),`
`]})]})}function M(o={}){const{wrapper:t}={...i(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}export{M as default};
