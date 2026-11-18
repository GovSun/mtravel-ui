import{j as e}from"./iframe-DuqTOznb.js";import{u as t,M as o,C as d,a as l}from"./blocks-CaaIEU4k.js";import{S as c,P as i,a,W as h,L as x,H as j}from"./Select.stories-Pp2_ODJL.js";import{M as p,U as m}from"./DocTables-DRoO9HBp.js";import{s as g}from"./field.module-s5tBmoIY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Select-4gWL4kzH.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./cx-2dOUpm6k.js";import"./SlotIcon-Pgp7E4sy.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./arrows-C0H-naDa.js";import"./time-CsMT4GVj.js";import"./people-s6FNqSUd.js";import"./BottomSheet-DD4XR1Mk.js";import"./useControllableState-QyUXWn2y.js";import"./useKeyboardInset-DrhQQKuj.js";import"./IconButton-BxMc4E4A.js";import"./Button-CKwNO4NU.js";import"./tokens-INIU3VNa.js";const b=`/*
 * Select (Figma 595:338): 52 px choice field, a button; the top label is optional (Figma «Label»). The box, slots and hint row are shared
 * with Field and Search (lib/field); this file sets Select's own tokens (--select-*) on them through private --_*
 * vars and draws the value line, the chevron and the press.
 */
.root {
  --_h: 52px;
  /* the background eases back on release (press-out); the press itself is faster, see [data-pressed] */
  --_state: calc(var(--select-motion-press-out-duration) * var(--motion-scale));
  --_state-ease: var(--select-motion-state-easing);
  --_hint: calc(var(--select-motion-hint-duration) * var(--motion-scale));
  --_hint-pad: var(--spacing-xs) var(--spacing-lg) 0; /* Figma: 4 / 16 */
  --_bg: var(--control-bg-default);
  --_icon: var(--control-icon-secondary); /* Figma Right icon: control/icon/secondary */
  --_icon-left: var(--control-icon-primary); /* Figma Left icon (595:244 and the other states): control/icon/primary */
  --_text: var(--control-text-default);

  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}
/* variant plain: no fill of its own, for a row on a card or a grey panel (FieldWhere); pressed and error still fill */
.root[data-variant='plain'] {
  --_bg: transparent;
}
/* The press is on the button (Pressable data-pressed) and wins over error, so a tap on a red field still answers; disabled wins over all. */
.root:not([data-disabled]) .button[data-pressed] {
  --_bg: var(--control-bg-pressed);
  --_state: calc(var(--select-motion-press-in-duration) * var(--motion-scale));
}
.root[data-error] {
  --_bg: var(--control-bg-error);
  --_hint-color: var(--control-text-error);
}
.root[data-disabled] {
  --_bg: var(--control-bg-disabled);
  --_icon: var(--control-icon-disabled);
  --_icon-left: var(--control-icon-disabled);
  --_text: var(--control-text-disabled);
  --_hint-color: var(--control-text-disabled);
}
.root[data-variant='plain'][data-disabled] {
  --_bg: transparent; /* the card dims, the row has no fill of its own */
}

.button {
  composes: box from '../../lib/field/field.module.css';
  width: 100%;
  margin: 0;
  border: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
}
.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.root[data-variant='plain'] .button:focus-visible {
  outline-offset: -2px; /* on a card the ring would be clipped by the card */
}
.root[data-disabled] .button {
  cursor: default;
}


.text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 0 var(--spacing-md) 0 var(--spacing-sm);
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
}
.root[data-disabled] .text {
  padding-right: var(--spacing-sm); /* Figma Disabled: px 8 */
}
.value {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.value {
  height: 20px; /* Figma Value row: 20 */
  line-height: 20px;
}
.value[data-placeholder] {
  color: var(--control-text-secondary); /* Figma Placeholder: IM-16 M, control/text/secondary */
}
/* Figma «Label»: IM-12 R above the value, control/text/secondary (disabled: tertiary) */
.label {
  height: 16px;
  overflow: hidden;
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  line-height: 16px;
  color: var(--control-text-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.root[data-disabled] .label {
  color: var(--control-text-tertiary);
}
.root[data-disabled] .value {
  color: var(--control-text-disabled);
}

/* Figma «Show disclosure»: chevron-down, turns up while the list is open */
.disclosure {
  display: flex;
  flex: none;
  align-items: center;
  height: 32px;
  padding: 0 var(--spacing-sm);
  color: var(--control-icon-tertiary);
}
.root[data-disabled] .disclosure {
  color: var(--control-icon-disabled);
}
.chevron {
  display: block;
  transition: transform calc(var(--select-motion-chevron-duration) * var(--motion-scale)) var(--select-motion-chevron-easing);
}
.root[data-open] .chevron {
  transform: rotate(180deg);
}
`;function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["Поле выбора, 52 px: одна строка, значение или серый плейсхолдер; по свойству ",e.jsx(n.code,{children:"showLabel"})," (Figma «Label») сверху появляется маленькая подпись. Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=595-338",rel:"nofollow",children:"Select 595:338"}),"."]}),`
`,e.jsxs(n.p,{children:["Select — это кнопка: клавиатура не открывается, по тапу открывается выбор, обычно ",e.jsx(n.a,{href:"?path=/docs/components-bottomsheet--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"BottomSheet"})," со списком, календарь или другой экран. Для ввода текста есть ",e.jsx(n.a,{href:"?path=/docs/components-field--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Field"}),", для поиска — ",e.jsx(n.a,{href:"?path=/docs/components-search--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Search"}),". Это три отдельных компонента."]}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Select, CalendarIcon, UsersIcon } from '@mtravel/ui';

<Select label="Дата поездки" value="14 ноя" iconLeft={<CalendarIcon />} onClick={openCalendar} />

<Select label="Пассажиры" value="2 взрослых" iconRight={<UsersIcon />} open={sheetOpen} onClick={() => setSheetOpen(true)} />
`})}),`
`,e.jsx(n.h2,{id:"состояния-и-токены",children:"Состояния и токены"}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State (Figma)"}),e.jsx(n.th,{children:"Когда"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Текст"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Placeholder"}),e.jsx(n.td,{children:"ничего не выбрано"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["плейсхолдер IM-16 M ",e.jsx(n.code,{children:"control/text/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Filled"}),e.jsx(n.td,{children:"выбрано"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["значение IM-16 M ",e.jsx(n.code,{children:"control/text/default"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Opened"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"open"}),": список открыт"]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:"как Filled, шеврон смотрит вверх"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/error"})}),e.jsxs(n.td,{children:["под полем текст ошибки IM-12 R ",e.jsx(n.code,{children:"control/text/error"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/disabled"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/text/disabled"}),", ",e.jsx(n.code,{children:"control/icon/disabled"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"палец на поле"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/pressed"})}),e.jsx(n.td,{children:"—"})]})]})]}),`
`,e.jsxs(n.p,{children:["Фон ",e.jsx(n.code,{children:"control/bg/pressed"})," в Figma у Select не нарисован, он добавлен в коде по образцу кнопок."]}),`
`,e.jsxs(n.h3,{id:"вариант-plain",children:["Вариант ",e.jsx(n.code,{children:"plain"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'variant="plain"'})," убирает собственную заливку: так строка лежит на серой карточке, у которой фон один на несколько строк (так собран ",e.jsx(n.a,{href:"?path=/docs/components-fieldwhere--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"FieldWhere"}),"). Нажатая строка и ошибка по-прежнему закрашиваются, недоступная остаётся без заливки. Рамка фокуса уходит внутрь (",e.jsx(n.code,{children:"-2px"}),"), чтобы карточка её не обрезала."]}),`
`,e.jsx(n.p,{children:"Свойства Figma и пропы:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Проп"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Placeholder"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"placeholder"})," (по умолчанию «Выберите»)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Value"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show left icon"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"iconLeft"}),", цвет ",e.jsx(n.code,{children:"control/icon/primary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show right icon"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"iconRight"}),", например ",e.jsx(n.code,{children:"<UsersIcon />"}),", цвет ",e.jsx(n.code,{children:"control/icon/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show disclosure"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"disclosure"}),": шеврон 16 px с обводкой 1.5 (Disclosure Type=chevron, как в Cell), ",e.jsx(n.code,{children:"control/icon/tertiary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show hint + Hint"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"hint"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error text"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})})]})]})]}),`
`,e.jsx(n.h2,{id:"анимации",children:"Анимации"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Нажатие"}),": фон за 100 мс переходит на ",e.jsx(n.code,{children:"control/bg/pressed"})," и возвращается за 240 мс, как у кнопок."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Шеврон"})," поворачивается вверх за 240 мс, пока список открыт."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подсказка и ошибка"})," раскрываются под полем по высоте за 240 мс."]}),`
`]}),`
`,e.jsx(p,{prefix:"--select-"}),`
`,e.jsx(n.h2,{id:"select-и-шторка",children:"Select и шторка"}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:["Пока шторка открыта, передавайте ",e.jsx(n.code,{children:"open"}),": поле переходит в Opened, а скринридер слышит ",e.jsx(n.code,{children:"aria-expanded"}),". У Select нет ",e.jsx(n.code,{children:"onOpenChange"}),": он только кнопка-триггер, ",e.jsx(n.code,{children:"open"})," переключает владелец в ",e.jsx(n.code,{children:"onClick"})," и при закрытии шторки. Значение ",e.jsx(n.code,{children:"value"})," Select только показывает, хранит его владелец."]}),`
`,e.jsx(n.h2,{id:"длинный-текст",children:"Длинный текст"}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.p,{children:"Длинное значение обрезается «…», иконка справа и шеврон остаются на месте."}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Select — кнопка с ",e.jsx(n.code,{children:"aria-haspopup"})," и ",e.jsx(n.code,{children:"aria-expanded"}),". Тип выбора задаёт ",e.jsx(n.code,{children:"popup"}),": ",e.jsx(n.code,{children:"dialog"})," (по умолчанию, шторка), ",e.jsx(n.code,{children:"listbox"})," или ",e.jsx(n.code,{children:"menu"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label"})," обязателен: без ",e.jsx(n.code,{children:"showLabel"})," он невидим, скринридер читает его вместе со значением; с ",e.jsx(n.code,{children:"showLabel"})," его видно над значением (IM-12 R ",e.jsx(n.code,{children:"control/text/secondary"}),", у Disabled ",e.jsx(n.code,{children:"control/text/tertiary"}),")."]}),`
`,e.jsxs(n.li,{children:["Фокус с клавиатуры виден по обводке ",e.jsx(n.code,{children:"color/border/focus"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," и ",e.jsx(n.code,{children:"style"})," попадают на корень, ",e.jsx(n.code,{children:"ref"})," и остальные атрибуты на ",e.jsx(n.code,{children:"<button>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Форма поиска на «Главной»."})," «Куда» на всю ширину, «Когда» и «Участники» в одну строку. Иконка справа у каждого поля своя: лупа, календарь, люди. Тап открывает шторку или календарь."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Выбор в шторке"})," — см. «С выбором в шторке» выше."]}),`
`,e.jsx(n.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Отступ подсказки"}),e.jsx(n.td,{children:"4 / 16 (у Field 8 / 12)"}),e.jsx(n.td,{children:"как в Figma, лучше выровнять с Field"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Текст подсказки"}),e.jsx(n.td,{children:"Inter 13 без стиля IM, в Error тоже"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"IM-12 R"}),", как у Field"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Иконки"}),e.jsx(n.td,{children:"слева (скрыта по умолчанию) и справа (по умолчанию видна) — Leading icon Size=32, порядок Left icon, Text, Right icon, Disclosure"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"LeadingIcon"})," из Cell, тот же порядок"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Цвет иконки слева"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/icon/primary"})," (у Field слева ",e.jsx(n.code,{children:"control/icon/secondary"}),")"]}),e.jsx(n.td,{children:"как в Figma; разница с Field — вопрос к дизайну"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Описание компонента в Figma"}),e.jsx(n.td,{children:"«48 px», «иконка 20 в слоте 36»"}),e.jsx(n.td,{children:"компонент 52 px, иконки в Leading icon 32 — описание устарело"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Высота"}),e.jsx(n.td,{children:"52 (в проекте раньше было 48 по неопубликованной версии)"}),e.jsx(n.td,{children:"52, по текущему main"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Внутренняя тень"}),e.jsxs(n.td,{children:["нет (у Field ",e.jsx(n.code,{children:"inner-shadow/inner-input"}),")"]}),e.jsx(n.td,{children:"нет"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Подпись в Disabled"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/text/tertiary"}),", у остальных ",e.jsx(n.code,{children:"control/text/secondary"})]}),e.jsx(n.td,{children:"как в Figma"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Opened"}),e.jsx(n.td,{children:"выглядит как Filled, шеврон меняется на chevron-up"}),e.jsx(n.td,{children:"то же, шеврон поворачивается"})]})]})]}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsx(n.p,{children:"Значений без токена нет."}),`
`,e.jsx(m,{css:[b,g]})]})}function J(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{J as default};
