import{j as n}from"./iframe-DuqTOznb.js";import{u as a,M as i,C as t,a as l}from"./blocks-CaaIEU4k.js";import{T as d,P as r,S as c,C as h}from"./Toggle.stories-BwT_KmAM.js";import{M as g,U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./ScrollMatrix-BkRWturZ.js";import"./Toggle-DcBpc41r.js";import"./cx-2dOUpm6k.js";import"./useControllableState-QyUXWn2y.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./usePress-DgMUH5X0.js";import"./tokens-INIU3VNa.js";const p=`/*
 * Toggle (Figma 470:6238). The native input sits invisibly over the track; the track and the knob are drawn here.
 * Colours: Figma Background fill control/bg/toggle (on) | control/bg/pressed (off), inner-shadow/inset;
 * Knob control/bg/default, effect shadow/knob. Geometry 40 × 24, knob 20, offset 2.
 */
.root {
  --_w: 40px;
  --_h: 24px;
  --_knob: 20px;
  --_gap: 2px;
  --_move: calc(var(--toggle-motion-move-duration) * var(--motion-scale));
  --_fill: calc(var(--toggle-motion-fill-duration) * var(--motion-scale));
  --_press-in: calc(var(--toggle-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--toggle-motion-press-out-duration) * var(--motion-scale));

  position: relative;
  isolation: isolate; /* keeps the z-index: -1 hit-slop above the page, below the row */
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--spacing-md);
  vertical-align: middle;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  -webkit-user-select: none;
  user-select: none;
}
/* touch target ≥ 44 × 44 around the 40 × 24 switch (and under a labelled row); the label activates the input */
.root::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  width: max(100%, 44px);
  height: max(100%, 44px);
  transform: translate(-50%, -50%);
}
.root[data-labelled] {
  flex: 0 1 auto;
  min-width: 0;
}
.root[data-disabled] {
  cursor: default;
  opacity: 0.4; /* no token: Figma has no disabled state; the whole switch dims, the same cue as native */
}
.label {
  min-width: 0;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}

.input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
}

.track {
  position: relative;
  display: block;
  flex: none;
  width: var(--_w);
  height: var(--_h);
  border-radius: var(--radius-full);
  background-color: var(--control-bg-pressed);
  box-shadow: var(--inner-shadow-inset);
  transition: background-color var(--_fill) var(--motion-ease-standard);
}
.root[data-checked] .track {
  background-color: var(--control-bg-toggle);
}
.input:focus-visible + .track {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* the knob travels with transform only; the inner shape stretches (scaleX) from the edge it is leaving */
.knob {
  position: absolute;
  top: var(--_gap);
  left: var(--_gap);
  width: var(--_knob);
  height: var(--_knob);
  transform: translateX(0);
  transition: transform var(--_move) var(--toggle-motion-move-easing);
}
.root[data-checked] .knob {
  transform: translateX(calc(var(--_w) - var(--_knob) - var(--_gap) * 2));
}
.knobShape {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-full);
  background-color: var(--control-bg-default);
  box-shadow: var(--shadow-knob);
  transform-origin: left center;
  transition: transform var(--_press-out) var(--toggle-motion-press-easing);
}
.root[data-checked] .knobShape {
  transform-origin: right center;
}
.root[data-pressed] .knobShape {
  transform: scaleX(var(--toggle-motion-press-stretch));
  transition-duration: var(--_press-in);
}

/* keyboard (Space): the knob is just there */
.root[data-instant] .track,
.root[data-instant] .knob,
.root[data-instant] .knobShape {
  transition: none;
}

/* reduced motion: no slide, no stretch; the knob is placed and the track colour fades */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .knob,
  :global(:root:not([data-motion='normal'])) .knobShape {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .root[data-pressed] .knobShape {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .knob,
:global(:root[data-motion='reduce']) .knobShape {
  transition: none;
}
:global(:root[data-motion='reduce']) .root[data-pressed] .knobShape {
  transform: none;
}
`;function s(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:d}),`
`,n.jsx(e.h1,{id:"toggle",children:"Toggle"}),`
`,n.jsxs(e.p,{children:["Переключатель: включить или выключить что-то сразу, без кнопки «Применить», например «Сообщать о снижении цены». Если выбор нужно подтвердить или вариантов несколько, берите ",n.jsx(e.a,{href:"?path=/docs/components-checkbox--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Checkbox"})," или ",n.jsx(e.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=%22%22470-6238",rel:"nofollow",children:"Toggle 470:6238"}),": Active True | False, 40 × 24."]}),`
`,n.jsx(t,{of:r}),`
`,n.jsx(l,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Toggle } from '@mtravel/ui';

// с видимой подписью: вся строка нажимается, текст даёт переключателю имя
<Toggle checked={on} onCheckedChange={setOn}>Пуш о снижении цены</Toggle>

// без текста рядом: имя обязательно
<Toggle checked={on} onCheckedChange={setOn} aria-label="Сообщать о снижении цены" />
`})}),`
`,n.jsxs(e.p,{children:["Внутри настоящий ",n.jsx(e.code,{children:'<input type="checkbox" role="switch">'})," в ",n.jsx(e.code,{children:"<label>"}),": пробел, форма и скринридеры («включено» / «выключено») работают сами. Не оборачивайте Toggle в ещё один ",n.jsx(e.code,{children:"<label>"}),": вложенные подписи некорректны, и у переключателя пропадёт имя."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Дорожка"}),n.jsx(e.th,{children:"Кнопка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Active=False"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/pressed"})," + ",n.jsx(e.code,{children:"inner-shadow/inset"})]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/default"})," + ",n.jsx(e.code,{children:"shadow/knob"}),", слева, отступ 2"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Active=True"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/toggle"})," + ",n.jsx(e.code,{children:"inner-shadow/inset"})]}),n.jsx(e.td,{children:"справа, сдвиг 16"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsx(e.td,{children:"в Figma нет"}),n.jsx(e.td,{children:"вся деталь на 40 % прозрачности"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Pressed"}),n.jsx(e.td,{children:"в Figma нет"}),n.jsx(e.td,{children:"кнопка вытягивается по ходу движения на 15 %"})]})]})]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Кнопка переезжает на 16 px за 240 мс, ease-out; цвет дорожки меняется за 160 мс. Двигается только transform."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," кнопка вытягивается сразу, как палец коснулся (100 мс), и возвращается за 240 мс."]}),`
`,n.jsx(e.li,{children:"Переходы CSS, поэтому второй тап посреди движения разворачивает кнопку с того места, где она была."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"С клавиатуры"})," (пробел) кнопка видна на новом месте без анимации. ",n.jsx(e.strong,{children:"Reduced motion:"})," без движения и вытяжки, цвет меняется."]}),`
`]}),`
`,n.jsx(g,{prefix:"--toggle-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(t,{of:h}),`
`,n.jsxs(e.p,{children:["В строках списка переключатель ставят в ",n.jsx(e.a,{href:"?path=/docs/components-cell--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Cell"}),": ",n.jsx(e.code,{children:'<CellDisclosure type="toggle" />'}),", имя ему даёт заголовок строки."]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Решение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled и Pressed нет в Figma"}),n.jsx(e.td,{children:"предложения выше"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Заливка 40 × 24 белым с выключенной видимостью в компоненте (470:6236)"}),n.jsx(e.td,{children:"не переносится"})]})]})]}),`
`,n.jsx(x,{css:p}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.p,{children:["Зона тапа не меньше 44 px (больше самого переключателя), с подписью нажимается вся строка. Фокус с клавиатуры: рамка 2 px ",n.jsx(e.code,{children:"border/focus"})," вокруг дорожки."]})]})}function T(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(s,{...o})}):s(o)}export{T as default};
