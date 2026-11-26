import{j as n}from"./iframe-DyD5Yel4.js";import{u as a,M as d,C as r,a as s}from"./blocks-CcI75u3-.js";import{R as c,P as t,S as l,a as h}from"./Radio.stories-g01NJyjl.js";import{M as x,U as m}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./ScrollMatrix-Rhyk2V53.js";import"./Radio-qMCK-bX2.js";import"./cx-2dOUpm6k.js";import"./useControllableState-D9cJCl43.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./usePress-XYzAalw7.js";import"./Button-grGIhY78.js";import"./motion-C-Q-avtg.js";import"./Pressable-CAjp7WdB.js";import"./BottomSheet-lYDzhEd4.js";import"./mergeRefs-BZQLIp5G.js";import"./useKeyboardInset-8n5XJZWl.js";import"./IconButton-DRcBY4IG.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./tokens-Bc2_NrJ2.js";const p=`/*
 * Radio button (Figma 327:1660). Figma has no radio/* component tokens: the circle uses semantic colours as in Figma
 * (bg/sunken-subtle, bg/accent); Figma has no disabled radio, so disabled borrows the checkbox recipe
 * (checkbox/bg/disabled, checkbox/bg/selected-disabled). The dot is checkbox/icon/selected (Figma 327:1658) with
 * shadow/raised. Missing tokens are listed in the docs (radio/*).
 */
.group {
  display: grid;
  gap: var(--spacing-md);
}

.root {
  --_press-in: calc(var(--radio-motion-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--radio-motion-press-out-duration) * var(--motion-scale));
  --_fill: calc(var(--radio-motion-fill-duration) * var(--motion-scale));
  --_dot-in: calc(var(--radio-motion-dot-in-duration) * var(--motion-scale));
  --_dot-out: calc(var(--radio-motion-dot-out-duration) * var(--motion-scale));

  position: relative;
  isolation: isolate; /* keeps the z-index: -1 hit-slop above the page, below the row */
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
/* touch target ≥ 44 × 44: a bare 20 px circle and a one-line row get the same hit-slop (the label activates the input) */
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
.root[data-disabled] {
  cursor: default;
}

.input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  opacity: 0;
  pointer-events: none;
}

.circle {
  position: relative;
  display: grid;
  flex: none;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  background-color: var(--color-bg-sunken-subtle);
  box-shadow: var(--inner-shadow-inset);
  transition:
    background-color var(--_fill) var(--motion-ease-standard),
    box-shadow var(--_fill) var(--motion-ease-standard),
    transform var(--_press-out) var(--radio-motion-press-easing);
}
.root[data-checked] .circle {
  background-color: var(--control-bg-accent);
  box-shadow: none;
}
.root[data-disabled] .circle {
  background-color: var(--checkbox-bg-disabled); /* Figma has no disabled radio: the checkbox recipe, same values */
}
.root[data-disabled][data-checked] .circle {
  background-color: var(--checkbox-bg-selected-disabled);
}
.root[data-pressed] .circle {
  transform: scale(var(--radio-motion-press-scale));
  transition-duration: var(--_fill), var(--_fill), var(--_press-in);
}
.input:focus-visible + .circle {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* the dot: at rest unchosen it waits big and invisible; chosen it is driven down to 8 px, a little past, and settles */
.dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background-color: var(--checkbox-icon-selected); /* Figma 327:1658 binds checkbox/icon/selected */
  box-shadow: var(--shadow-raised);
  opacity: 0;
  transform: scale(var(--radio-motion-dot-from-scale));
  transition:
    transform var(--_dot-out) var(--motion-ease-out),
    opacity var(--_dot-out) var(--motion-ease-out);
}
.root[data-checked] .dot {
  opacity: 1;
  transform: scale(1);
  transition:
    transform var(--_dot-in) var(--radio-motion-dot-easing),
    opacity var(--_fill) var(--motion-ease-out);
}
.root[data-disabled] .dot {
  box-shadow: none;
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

/* keyboard (arrows): the choice just moves */
.root[data-instant] .circle,
.root[data-instant] .dot {
  transition: none;
}

/* reduced motion: no press, no punch — the dot fades in place */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] .circle {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .dot,
  :global(:root:not([data-motion='normal'])) .root[data-checked] .dot {
    transform: none;
    transition: opacity var(--_fill) var(--motion-ease-standard);
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] .circle {
  transform: none;
}
:global(:root[data-motion='reduce']) .dot,
:global(:root[data-motion='reduce']) .root[data-checked] .dot {
  transform: none;
  transition: opacity var(--_fill) var(--motion-ease-standard);
}
`;function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(e.h1,{id:"radio",children:"Radio"}),`
`,n.jsxs(e.p,{children:["Радиокнопка: выбрать ровно один вариант из нескольких, например сортировку. Если отметить можно несколько, это ",n.jsx(e.a,{href:"?path=/docs/components-checkbox--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Checkbox"}),", а если вариантов 2–5 и они переключают вид, подойдёт ",n.jsx(e.a,{href:"?path=/docs/components-segmentcontrol--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SegmentControl"}),"."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=327-1660",rel:"nofollow",children:"Radio button 327:1660"}),"."]}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(s,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { RadioGroup, Radio } from '@mtravel/ui';

<RadioGroup value={sort} onValueChange={setSort} aria-label="Сортировка">
  <Radio value="popular">Сначала популярные</Radio>
  <Radio value="cheap">Сначала дешевле</Radio>
  <Radio value="expensive">Сначала дороже</Radio>
</RadioGroup>
`})}),`
`,n.jsxs(e.p,{children:["Radio без RadioGroup работает сам по себе: ",n.jsx(e.code,{children:"checked"})," и ",n.jsx(e.code,{children:"onCheckedChange"})," (или ",n.jsx(e.code,{children:"defaultChecked"}),"). Нативный радио-инпут сообщает только «выбран», поэтому остальные переключает владелец. Если нескольких одиночных радио нужны одной группой, дайте им общий ",n.jsx(e.code,{children:"name"}),"; без ",n.jsx(e.code,{children:"name"})," у каждого свой, и каждый доступен с клавиатуры."]}),`
`,n.jsxs(e.p,{children:["Внутри настоящие ",n.jsx(e.code,{children:'<input type="radio">'})," с общим ",n.jsx(e.code,{children:"name"}),": стрелки переносят выбор, скринридер говорит «1 из 3», работает отправка формы. Вокруг кружка (и под строкой с подписью) есть невидимая зона тапа не меньше 44 × 44."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(r,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Кружок"}),n.jsx(e.th,{children:"Точка"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Не выбран (Frame 2)"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"color/bg/sunken-subtle"})," + ",n.jsx(e.code,{children:"inner-shadow/inset"})]}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Выбран (Frame 3)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"color/bg/accent"})}),n.jsxs(e.td,{children:["8 px, белая, ",n.jsx(e.code,{children:"shadow/raised"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled (нет в Figma)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox/bg/disabled"})}),n.jsx(e.td,{children:"—"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled, выбран (нет в Figma)"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox/bg/selected-disabled"})}),n.jsx(e.td,{children:"8 px, без тени"})]})]})]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Точка «вбивается»."})," При выборе она появляется большой, 16 px, и вокруг видно тонкое синее кольцо. Потом точка сжимается до 8 px, чуть проскакивает меньше нормы и встаёт на место, будто её вбили. Это 300 мс, пружина с перелётом. Кружок за это время заливается синим (120 мс)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Снятие выбора:"})," точка у прежнего пункта расширяется и гаснет быстрее, за 160 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие:"})," кружок сжимается до 0.9 сразу, как только палец коснулся."]}),`
`,n.jsx(e.li,{children:"Это CSS-переходы: если быстро тапать по пунктам, каждая точка разворачивается с того места, где была."}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Стрелки"})," переносят выбор сразу, без анимации."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," точка проявляется на месте, без сжатия."]}),`
`]}),`
`,n.jsx(x,{prefix:"--radio-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[`Где в дизайне: «Результаты» → «Фильтрация» (571:36536) → шторка «Сортировать» (948:68454), пять вариантов, один выбор.
Способ оплаты на «Оформлении» — не Radio: там выбор делает карточка `,n.jsx(e.code,{children:"PaymentCard"})," (",n.jsx(e.code,{children:"card_payment"}),", своя точка внутри)."]}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Названия вариантов"}),n.jsx(e.td,{children:"Property 1 = Frame 2 / Frame 3"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"checked"})," — стоит переименовать в Checked=False / True"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Токены"}),n.jsxs(e.td,{children:["своих ",n.jsx(e.code,{children:"radio/*"})," нет: выбранный круг ",n.jsx(e.code,{children:"control/bg/accent"}),", невыбранный ",n.jsx(e.code,{children:"bg/sunken-subtle"})]}),n.jsx(e.td,{children:"так же"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Точка"}),n.jsxs(e.td,{children:["в Figma «Union» с сырым #FFFFFF и ",n.jsx(e.code,{children:"shadow/raised"})]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"icon/inverse/constant/primary"})," (тот же белый) и ",n.jsx(e.code,{children:"shadow/raised"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Disabled, нажатие"}),n.jsx(e.td,{children:"нет"}),n.jsx(e.td,{children:"сделаны по образцу чекбокса — нужен макет"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Подпись"}),n.jsx(e.td,{children:"нет"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"children"}),", IM-16 M, отступ ",n.jsx(e.code,{children:"spacing/md"}),", как у Checkbox"]})]})]})]}),`
`,n.jsx(m,{css:p})]})}function A(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{A as default};
