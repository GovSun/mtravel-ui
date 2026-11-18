import{j as n}from"./iframe-DuqTOznb.js";import{u as s,M as a,C as r,a as d}from"./blocks-CaaIEU4k.js";import{F as l,P as t,S as c,C as h}from"./FieldWhere.stories-8_Xh62hX.js";import{M as p,U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./cx-2dOUpm6k.js";import"./Select-4gWL4kzH.js";import"./SlotIcon-Pgp7E4sy.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./arrows-C0H-naDa.js";import"./Divider-BbjTiNWY.js";import"./tokens-INIU3VNa.js";const m=`/*
 * FieldWhere, Figma field_where 1328:6192 (page Inputs): a grey card, padding 4 / 0, two Select rows of 52, an inset divider
 * and the round swap button (36) pinned to the right on the divider.
 * The rows are the DS Select with its label shown (52 high), variant="plain" (no fill of its own: the card is the fill).
 */
.card {
  --_swap: 36px; /* the swap button, Figma button_counter 1328:5048 */
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--spacing-xs) 0;
  border-radius: 20px; /* no token: Figma 1328:6192 radius 20 (radius/lg 16, radius/xl 24) */
  background-color: var(--control-bg-default);
}

.value {
  display: block;
  overflow: hidden;
  padding-right: var(--_swap); /* long names end with … before the swap button */
  text-overflow: ellipsis;
}

/* swap: the values slide into each other's rows (they swapped places) */
.value[data-enter] {
  animation: enter calc(var(--field-where-motion-swap-duration) * var(--motion-scale)) var(--field-where-motion-swap-easing) both;
}
.value[data-enter='from'] {
  --_from: var(--field-where-motion-swap-distance); /* the value came from the row below: rises */
}
.value[data-enter='to'] {
  --_from: calc(var(--field-where-motion-swap-distance) * -1); /* it came from the row above: sinks */
}
@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(var(--_from));
  }
  to {
    opacity: 1;
    transform: none;
  }
}

/* ---------- the round swap button: 36, blue, shadow/knob, icon 16 ---------- */
.swap {
  position: absolute;
  top: 39px; /* no token: Figma 1328:5048 y = 4 pad + 52 row + 1 divider − 18 */
  right: var(--spacing-lg);
  display: grid;
  place-items: center;
  width: var(--_swap);
  height: var(--_swap);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--radius-full);
  background-color: var(--control-bg-accent); /* Figma binds checkbox/bg/selected: same blue, wrong collection */
  box-shadow: var(--shadow-knob);
  color: var(--control-icon-selected);
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition: transform calc(var(--field-where-motion-press-out-duration) * var(--motion-scale)) var(--field-where-motion-press-easing);
}
/* hit area 44 */
.swap::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: var(--radius-full);
}
.swap[data-pressed],
.swap:focus-visible:active:not(:disabled) {
  transform: scale(var(--field-where-motion-press-scale));
  transition-duration: calc(var(--field-where-motion-press-in-duration) * var(--motion-scale));
}
.swap:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.swap:disabled {
  background-color: var(--control-bg-disabled);
  box-shadow: none;
  color: var(--control-icon-disabled);
  cursor: default;
}
.swapIcon {
  display: grid;
  transition: transform calc(var(--field-where-motion-swap-duration) * var(--motion-scale)) var(--field-where-motion-swap-turn-easing);
}
.swapIcon > svg {
  display: block;
}

/* reduced motion: no turn, no slide, no scale; the values only fade */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .swapIcon {
    transition: none;
  }
  :global(:root:not([data-motion='normal'])) .swap[data-pressed],
  :global(:root:not([data-motion='normal'])) .swap:focus-visible:active:not(:disabled) {
    transform: none;
  }
  :global(:root:not([data-motion='normal'])) .value[data-enter] {
    --_from: 0px;
  }
}
:global(:root[data-motion='reduce']) .swapIcon {
  transition: none;
}
:global(:root[data-motion='reduce']) .swap[data-pressed],
:global(:root[data-motion='reduce']) .swap:focus-visible:active:not(:disabled) {
  transform: none;
}
:global(:root[data-motion='reduce']) .value[data-enter] {
  --_from: 0px;
}
`;function i(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:l}),`
`,n.jsx(e.h1,{id:"fieldwhere",children:"FieldWhere"}),`
`,n.jsx(e.p,{children:"Пара «Откуда» и «Куда» в форме поиска: одна серая карточка с двумя строками и круглой синей кнопкой между ними, которая меняет места местами."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1328-6192",rel:"nofollow",children:"field_where 1328:6192"})," (страница Inputs). Это один компонент без вариантов: два экземпляра Select с подписями, Divider и кнопка."]}),`
`,n.jsx(e.p,{children:"Название «Куда отправимся?» к карточке не относится: так называется заголовок экрана выбора места, на который карточка ведёт."}),`
`,n.jsx(r,{of:t}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FieldWhere } from '@mtravel/ui';

<FieldWhere
  from={{ label: 'Откуда', value: origin }}
  to={{ label: 'Куда', value: destination, placeholder: 'Город или страна' }}
  onFromClick={() => openPicker('from')}
  onToClick={() => openPicker('to')}
  onSwap={() => { setOrigin(destination); setDestination(origin); }}
/>
`})}),`
`,n.jsxs(e.p,{children:["Карточка не хранит значения: места ваши, поменять их в ",n.jsx(e.code,{children:"onSwap"})," тоже вам. Строка это кнопка, открывающая выбор места (шторку или экран с ",n.jsx(e.a,{href:"?path=/docs/components-search--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Search"}),"). Клавиатуру поле не поднимает. Если место нужно набирать прямо в карточке, это уже ",n.jsx(e.a,{href:"?path=/docs/components-field--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Field"}),", а не FieldWhere."]}),`
`,n.jsx(e.h2,{id:"из-чего-собрано",children:"Из чего собрано"}),`
`,n.jsxs(e.p,{children:["Строки это настоящие ",n.jsx(e.a,{href:"?path=/docs/components-select--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Select"})," с ",n.jsx(e.code,{children:"showLabel"}),": подпись IM-12 R над значением, высота 52, нажатие и фокус как у Select. Линия между ними это ",n.jsx(e.a,{href:"?path=/docs/components-divider--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Divider"})," ",n.jsx(e.code,{children:'variant="full"'})," с ",n.jsx(e.code,{children:"insetEnd={76}"})," (под кнопку). Круглая кнопка своя: 36 px, ",n.jsx(e.code,{children:"control/bg/accent"}),", ",n.jsx(e.code,{children:"shadow/knob"}),", иконка loop-vertical 16 px."]}),`
`,n.jsxs(e.p,{children:["Строки берут у Select ",n.jsx(e.code,{children:'variant="plain"'}),": у них нет своей заливки, потому что фон один на обе строки. Нажатая строка закрашивается как у Select."]}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(r,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Состояние"}),n.jsx(e.th,{children:"Что видно"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Заполнено (Figma)"}),n.jsxs(e.td,{children:["подпись ",n.jsx(e.code,{children:"control/text/secondary"}),", значение IM-16 M ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Пусто"}),n.jsxs(e.td,{children:["вместо значения серое «Выберите» (или свой ",n.jsx(e.code,{children:"placeholder"}),")"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Длинное название"}),n.jsx(e.td,{children:"обрезается многоточием до кнопки"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Строка нажата"}),n.jsxs(e.td,{children:["фон строки ",n.jsx(e.code,{children:"control/bg/pressed"}),", как у Select"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Недоступно"}),n.jsx(e.td,{children:"всё серое, кнопка неактивна"})]})]})]}),`
`,n.jsxs(e.p,{children:["Карточка: отступы 4 сверху и снизу, радиус 20, фон ",n.jsx(e.code,{children:"control/bg/default"}),". Две строки по 52 и линия 1 дают 113 px."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.p,{children:"В «Выходные» карточки сейчас нет: на «Главной» поиск открывается кнопкой «Куда отправимся?». Пример собран на данных из Figma дизайн-системы (Бишкек и Балыкчы)."}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Обмен:"})," иконка делает полоборота за 300 мс, ease-out; значения перелетают в соседние строки (сдвиг 12 px и прозрачность, 300 мс). Анимация идёт только при обмене, не при обычном выборе места."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие кнопки:"})," сжимается до 0.9 за 100 мс, возвращается за 240 мс."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," без поворота, сдвига и сжатия, значения только проявляются."]}),`
`]}),`
`,n.jsx(p,{prefix:"--field-where-"}),`
`,n.jsx(x,{css:m}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Значение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Радиус карточки"}),n.jsx(e.td,{children:"20 (токены 16 и 24)"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Правый отступ линии"}),n.jsx(e.td,{children:"76 и позиция кнопки y = 39"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвет кнопки"}),n.jsxs(e.td,{children:["в Figma привязан ",n.jsx(e.code,{children:"checkbox/bg/selected"}),", значение то же, что у ",n.jsx(e.code,{children:"control/bg/accent"}),"; в коде ",n.jsx(e.code,{children:"control/bg/accent"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Кнопка"}),n.jsx(e.td,{children:"называется button_counter, но это не кнопка Counter"})]})]})]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Группа ",n.jsx(e.code,{children:'role="group"'})," с именем «Откуда и куда». Строки читаются как «Откуда Бишкек, кнопка», подпись видна и читается один раз."]}),`
`,n.jsx(e.li,{children:"Кнопка обмена называется «Поменять местами», зона нажатия 44 × 44."}),`
`,n.jsx(e.li,{children:"Tab идёт по строкам и кнопке, Пробел и Enter нажимают."}),`
`]})]})}function X(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{X as default};
