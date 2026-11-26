import{j as n}from"./iframe-DyD5Yel4.js";import{u as a,M as i,C as t,a as d}from"./blocks-CcI75u3-.js";import{C as c,P as s,S as l,F as h,D as x}from"./Checkbox.stories-DGbiO106.js";import{M as b,U as p}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./ScrollMatrix-Rhyk2V53.js";import"./Checkbox-CsOUmA-N.js";import"./cx-2dOUpm6k.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./usePress-XYzAalw7.js";import"./tokens-Bc2_NrJ2.js";const j=`/*
 * Checkbox (Figma 416:30). The native input is invisible over the box; the box and the check are drawn here.
 * Colours: components/checkbox/* tokens. Box radius 8 has no token (radius/xs is 4, radius/md 12) — see docs.
 */
.root {
  --_size: 24px;
  --_check: 16px; /* Figma Checked=True: check 16 in a 24 box, 14 in a 20 box */
  --_stroke: 2; /* in the 18-unit icon grid: 2 → 1.78 px at 16 px, as in Figma */
  --_press-in: calc(var(--checkbox-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--checkbox-motion-press-out-duration) * var(--motion-scale));
  --_fill: calc(var(--checkbox-motion-fill-duration) * var(--motion-scale));
  --_draw: calc(var(--checkbox-motion-draw-duration) * var(--motion-scale));
  --_draw-delay: calc(var(--checkbox-motion-draw-delay) * var(--motion-scale));
  --_erase: calc(var(--checkbox-motion-erase-duration) * var(--motion-scale));

  position: relative;
  isolation: isolate; /* keeps the z-index: -1 hit-slop above the page, below the row */
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
  vertical-align: middle;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
/* touch target ≥ 44 × 44: a bare 20 / 24 px box and a one-line row get the same hit-slop (the label activates the input) */
.root::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: max(100%, 44px);
  height: max(100%, 44px);
  transform: translate(-50%, -50%);
  z-index: -1; /* behind the text and the box, so only the slop around them is hit */
}
.root[data-size='20'] {
  --_size: 20px;
  --_check: 14px;
  --_stroke: 2.25; /* 1.75 px at 14 px, as in Figma */
}
.root[data-disabled] {
  cursor: default;
}

/* the native input stays in the tab order and the accessibility tree, invisible */
.input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}

.box {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: var(--_size);
  height: var(--_size);
  border-radius: 8px; /* no token: Figma 416:11 radius 8 (radius/xs 4, radius/md 12) */
  background-color: var(--checkbox-bg-default);
  box-shadow: var(--inner-shadow-inset);
  transition:
    background-color var(--_fill) var(--motion-ease-standard),
    box-shadow var(--_fill) var(--motion-ease-standard),
    transform var(--_press-out) var(--checkbox-motion-press-easing);
}
.root[data-checked] .box {
  background-color: var(--checkbox-bg-selected);
  box-shadow: none;
}
.root[data-disabled] .box {
  background-color: var(--checkbox-bg-disabled);
}
.root[data-disabled][data-checked] .box {
  background-color: var(--checkbox-bg-selected-disabled);
}
.root[data-pressed] .box {
  transform: scale(var(--checkbox-motion-press-scale));
  transition-duration: var(--_fill), var(--_fill), var(--_press-in);
}
.input:focus-visible + .box {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* the check: a 1-long dash; offset 1 = not drawn yet, 0 = drawn. stroke-dashoffset repaints a 16 px SVG and never
   touches layout (Motion rule 5 is about moving things); the colours ease like Button and Chips */
.check {
  display: block;
  width: var(--_check);
  height: var(--_check);
  overflow: visible;
}
.check path {
  stroke: var(--checkbox-icon-selected);
  stroke-width: var(--_stroke);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 1;
  /* hidden once erased, so the round cap does not leave a dot at the start */
  opacity: 0;
  transition:
    stroke-dashoffset var(--_erase) var(--checkbox-motion-erase-easing),
    opacity 0s linear var(--_erase);
}
.root[data-checked] .check path {
  stroke-dashoffset: 0;
  opacity: 1;
  transition:
    stroke-dashoffset var(--_draw) var(--checkbox-motion-draw-easing) var(--_draw-delay),
    opacity 0s linear var(--_draw-delay);
}

.label {
  min-width: 0;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default);
}
.root[data-disabled] .label {
  color: var(--control-text-disabled);
}

/* keyboard (Space): the state just changes */
.root[data-instant] .box,
.root[data-instant] .check path {
  transition: none;
}

/* reduced motion: no press, no draw — the check is there at once and fades in */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] .box {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .check path,
  :global(:root:not([data-motion='normal'])) .root[data-checked] .check path {
    stroke-dashoffset: 0;
    transition: opacity var(--_fill) var(--motion-ease-standard);
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] .box {
  transform: none;
}
:global(:root[data-motion='reduce']) .check path,
:global(:root[data-motion='reduce']) .root[data-checked] .check path {
  stroke-dashoffset: 0;
  transition: opacity var(--_fill) var(--motion-ease-standard);
}

/* WebKit before 17.2 has no linear(): the draw falls back to a plain ease-out instead of not animating */
@supports not (transition-timing-function: linear(0, 1)) {
  .root {
    --checkbox-motion-draw-easing: cubic-bezier(0.33, 1, 0.68, 1);
  }
}
`;function r(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{of:c}),`
`,n.jsx(e.h1,{id:"checkbox",children:"Checkbox"}),`
`,n.jsxs(e.p,{children:["Флажок: включить или выключить что-то одно, например фильтр «Трансфер от отеля». Из нескольких вариантов можно отметить любые. Если выбрать нужно ровно один, это ",n.jsx(e.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=416-30",rel:"nofollow",children:"Checkbox 416:30"}),": Size 24 | 20 × Checked × State Default | Disabled."]}),`
`,n.jsx(t,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Checkbox } from '@mtravel/ui';

<Checkbox checked={transfer} onCheckedChange={setTransfer}>Трансфер от отеля</Checkbox>

// без подписи — тогда обязателен aria-label
<Checkbox size={20} aria-label="Выбрать все" checked={all} onCheckedChange={setAll} />
`})}),`
`,n.jsxs(e.p,{children:["Внутри настоящий ",n.jsx(e.code,{children:'<input type="checkbox">'})," в ",n.jsx(e.code,{children:"<label>"}),": работают пробел, тап по подписи, отправка формы и скринридеры. Вокруг квадрата (и под строкой с подписью) есть невидимая зона тапа не меньше 44 × 44."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Квадрат"}),n.jsx(e.th,{children:"Галочка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Checked=False"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"checkbox/bg/default"})," + ",n.jsx(e.code,{children:"inner-shadow/inset"})]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Checked=True"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox/bg/selected"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"checkbox/icon/selected"}),", 16 px в 24, 14 px в 20"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"checkbox/bg/disabled"})," + ",n.jsx(e.code,{children:"inner-shadow/inset"})]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled, Checked"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox/bg/selected-disabled"})}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox/icon/selected"})})]})]})]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," квадрат сжимается до 0.9 сразу, как только палец коснулся, и возвращается мягче, за 240 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Отметка:"})," сначала квадрат заливается синим (120 мс), это отклик на тап. Потом галочка рисуется, как пером: короткий штрих замедляется к сгибу, длинный разгоняется снова и мягко встаёт. Всего 260 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Снятие:"})," галочка стирается быстрее, за 140 мс, квадрат становится серым."]}),`
`,n.jsx(e.li,{children:"Это CSS-переходы: при быстром двойном тапе галочка разворачивается с того места, где была, а не начинает заново."}),`
`,n.jsxs(e.li,{children:["Штрих рисуется через ",n.jsx(e.code,{children:"stroke-dashoffset"}),": перерисовывается SVG 16 px, layout не меняется. Цвет заливки плавно меняется, как у Button и Chips."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"С клавиатуры"})," (пробел) состояние меняется сразу, без рисования."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без сжатия и рисования, галочка проявляется."]}),`
`]}),`
`,n.jsx(b,{prefix:"--checkbox-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[`Где в дизайне: «Результаты» → «Фильтрация» (571:36536): шторки «Вид активности», «Формат», «Сложность», «Длительность» и «Удобства»
(638:2975, 805:48461), строки с галочкой 24 px; у выбранного в макете иногда 20 px (см. таблицу ниже). Оформление: галочка
«Я подтверждаю…» в `,n.jsx(e.code,{children:"Disclaimer"})," (не Checkbox-кейс, компонент Disclaimer)."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Фильтр «Удобства»."})," Список Checkbox в шторке: вся строка нажимается."]}),`
`,n.jsx(t,{of:h}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Фильтр «Сложность»."})," Подпись в две строки: название и описание."]}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-отличия-от-figma",children:"Без токенов в DS и отличия от Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Галочка"}),n.jsx(e.td,{children:"у Checked=True 16 и 14 px, у Disabled 18 и 16 px, в описании 18 и 16"}),n.jsx(e.td,{children:"16 и 14 px, как у Checked=True — их видно чаще"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скругление"}),n.jsxs(e.td,{children:["8 px у обоих размеров, в описании у 20 — 6 px; токена 8 нет (",n.jsx(e.code,{children:"radius/xs"})," 4, ",n.jsx(e.code,{children:"radius/md"})," 12)"]}),n.jsx(e.td,{children:"8 px"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Подпись"}),n.jsx(e.td,{children:"у Checkbox её нет, набор Checkbox + Label удалён"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"children"}),", IM-16 M ",n.jsx(e.code,{children:"control/text/default"}),", отступ ",n.jsx(e.code,{children:"spacing/md"})," — нужен макет"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Нажатие"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"сжатие 0.9"})]})]})]}),`
`,n.jsx(p,{css:j})]})}function S(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{S as default};
