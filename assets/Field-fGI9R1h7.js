import{j as e}from"./iframe-DyD5Yel4.js";import{u as t,M as s,C as d,a as o}from"./blocks-CcI75u3-.js";import{F as c,P as i,S as a,L as h,a as x,C as j,b as p}from"./Field.stories-DtVJYooo.js";import{M as m,U as g}from"./DocTables-D5FjzMKu.js";import{s as u}from"./field.module-s5tBmoIY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Field-B9_Admkx.js";import"./useControllableState-D9cJCl43.js";import"./mergeRefs-BZQLIp5G.js";import"./cx-2dOUpm6k.js";import"./SlotIcon-BexntUPw.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./motion-C-Q-avtg.js";import"./time-lpmEQjgl.js";import"./Select-mP3A-Zmx.js";import"./arrows-0JYTYJZi.js";import"./Button-grGIhY78.js";import"./tokens-Bc2_NrJ2.js";const f=`/*
 * Field (Figma 207:173): 52 px text field with a label that floats up. The box, slots, native input, clear × and
 * hint row are shared with Select and Search (lib/field); this file sets Field's own tokens (--field-*) on them
 * through private --_* vars and draws the label, value row and currency.
 */
.root {
  --_h: 52px;
  --_state: calc(var(--field-motion-state-duration) * var(--motion-scale));
  --_state-ease: var(--field-motion-state-easing);
  --_label: calc(var(--field-motion-label-duration) * var(--motion-scale));
  --_hint: calc(var(--field-motion-hint-duration) * var(--motion-scale));
  --_hint-pad: var(--spacing-sm) var(--spacing-md) 0; /* Figma: 8 / 12 */
  --_clear-in: calc(var(--field-motion-clear-in-duration) * var(--motion-scale));
  --_clear-out: calc(var(--field-motion-clear-out-duration) * var(--motion-scale));
  --_clear-ease: var(--field-motion-clear-easing);
  --_clear-from: var(--field-motion-clear-from-scale);
  /* Focused keeps control/bg/default (Figma 207:173): focus shows as the caret and the floated label */
  --_bg: var(--control-bg-default);
  --_icon: var(--control-icon-secondary);
  --_text: var(--control-text-default);
  --_shadow: var(--inner-shadow-inner-input); /* Figma Container: effect style inner-shadow/inner-input */

  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}
/* Figma State — priority: disabled > error > focused > rest */
.root[data-error] {
  --_bg: var(--control-bg-error);
  --_hint-color: var(--control-text-error);
}
.root[data-disabled] {
  --_bg: var(--control-bg-disabled);
  --_icon: var(--control-icon-disabled);
  --_text: var(--control-text-disabled);
  --_hint-color: var(--control-text-disabled);
}

.field {
  composes: box from '../../lib/field/field.module.css';
}
.root[data-disabled] .field {
  cursor: default;
}

.text {
  position: relative;
  flex: 1 1 auto;
  align-self: stretch;
  min-width: 0;
  padding: 0 var(--spacing-md) 0 var(--spacing-sm);
}
.root[data-disabled] .text {
  padding-right: var(--spacing-sm); /* Figma 207:162 Disabled: px 8 (Focused / Filled / Error: 12) */
}

/* Small label on top (y 8, IM-12 R) + value row (y 24, 20 high); empty and unfocused, the label sits in the middle
   as a placeholder (IM-16 M, control/text/default). Two layers with the right typography at rest, morphing into each other
   with a short blur where they cross (blur hides a two-object crossfade). */
.label,
.placeholder {
  position: absolute;
  left: var(--spacing-sm);
  right: var(--spacing-md);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transform-origin: left center;
  pointer-events: none;
  transition:
    transform var(--_label) var(--field-motion-label-easing),
    opacity var(--_label) var(--field-motion-label-easing),
    filter var(--_label) var(--field-motion-label-easing);
}
.label {
  top: 8px;
  height: 16px;
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  line-height: 16px;
  color: var(--control-text-secondary); /* Figma Focused / Filled / Error: IM-12 R, control/text/secondary */
}
.placeholder {
  top: calc(50% - 9.6px); /* IM-16 line box 19.2 centred in the field */
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-default); /* Figma Placeholder (207:103): IM-16 M, control/text/default */
}
.root[data-disabled] .placeholder,
.root[data-disabled] .label {
  color: var(--control-text-disabled);
}
/* resting as a placeholder: the small label waits where the big one is */
.root:not([data-float]) .label {
  opacity: 0;
  filter: blur(var(--field-motion-label-blur));
  transform: translateY(10px) scale(1.3333);
}
/* floated: the big one has gone up and shrunk into the small one */
.root[data-float] .placeholder {
  opacity: 0;
  filter: blur(var(--field-motion-label-blur));
  transform: translateY(-10px) scale(0.75);
}

.valueRow {
  position: absolute;
  top: 24px;
  left: var(--spacing-sm);
  right: var(--spacing-md);
  display: flex;
  align-items: center;
  height: 20px;
}

.input {
  composes: input from '../../lib/field/field.module.css';
}
/* the 20 px text line is a 44 px touch target: 12 px of padding above and below, pulled back by the same negative margin so nothing moves */
.valueRow .input {
  box-sizing: content-box;
  padding-block: 12px;
  margin-block: -12px;
}

/* currency after the value: the input hugs its text (a hidden copy sizes the grid cell), then the sign follows */
.sizer {
  display: inline-grid;
  flex: 0 1 auto;
  min-width: 1ch;
  max-width: 100%;
  height: 100%;
}
.sizer::after {
  content: attr(data-value) ' ';
  grid-area: 1 / 1;
  visibility: hidden;
  overflow: hidden;
  white-space: pre;
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
}
.sizer .input {
  grid-area: 1 / 1;
  /* the input's default width (~20 characters) must not size the cell — only the hidden copy of the text does */
  width: 0;
  min-width: 100%;
}
.currency {
  flex: none;
  padding-left: var(--spacing-xs);
  font: var(--font-im-16-m);
  letter-spacing: var(--tracking-im-16-m);
  color: var(--control-text-tertiary);
}
.root[data-disabled] .currency {
  color: var(--control-text-disabled);
}

/* reduced motion: the label does not float or blur — the big and the small one cross-fade in place */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .label,
  :global(:root:not([data-motion='normal'])) .placeholder {
    transform: none !important;
    filter: none !important;
    transition: opacity var(--_label) var(--motion-ease-standard);
  }
}
:global(:root[data-motion='reduce']) .label,
:global(:root[data-motion='reduce']) .placeholder {
  transform: none !important;
  filter: none !important;
  transition: opacity var(--_label) var(--motion-ease-standard);
}
`;function l(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"field",children:"Field"}),`
`,e.jsxs(n.p,{children:["Поле ввода текста, 52 px, с подписью, которая уезжает вверх. Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=207-173",rel:"nofollow",children:"Field 207:173"}),", раньше назывался Input."]}),`
`,e.jsxs(n.p,{children:["Field, ",e.jsx(n.a,{href:"?path=/docs/components-select--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Select"})," и ",e.jsx(n.a,{href:"?path=/docs/components-search--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Search"})," — три отдельных компонента:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Field"})," — ввод с клавиатуры: имя, телефон, почта, сумма;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select"})," — выбор из списка или на другом экране: дата, город, пассажиры;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search"})," — поиск."]}),`
`]}),`
`,e.jsx(n.p,{children:"У Field нет шеврона. Если поле открывает список или другой экран, это Select."}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Field, CalendarIcon } from '@mtravel/ui';

<Field label="Имя и фамилия" value={name} onValueChange={setName} autoComplete="name" />
<Field label="Телефон" type="tel" inputMode="tel" error={phoneError} />
<Field label="Сумма" currency="с" inputMode="numeric" value={sum} onValueChange={setSum} />
`})}),`
`,e.jsx(n.h2,{id:"состояния-и-токены",children:"Состояния и токены"}),`
`,e.jsx(d,{of:a}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State (Figma)"}),e.jsx(n.th,{children:"Когда"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Текст"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Placeholder"}),e.jsx(n.td,{children:"пусто, без фокуса"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["подпись по центру, IM-16 M ",e.jsx(n.code,{children:"control/text/default"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Focused"}),e.jsx(n.td,{children:"в поле курсор"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsxs(n.td,{children:["подпись IM-12 R ",e.jsx(n.code,{children:"control/text/secondary"})," сверху, значение IM-16 M ",e.jsx(n.code,{children:"control/text/default"}),", курсор ",e.jsx(n.code,{children:"control/bg/accent"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Filled"}),e.jsx(n.td,{children:"есть текст, без фокуса"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:"как Focused"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/error"})}),e.jsxs(n.td,{children:["под полем текст ошибки IM-12 R ",e.jsx(n.code,{children:"control/text/error"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"disabled"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/disabled"})}),e.jsxs(n.td,{children:["подпись, значение и иконки ",e.jsx(n.code,{children:"control/text/disabled"}),", ",e.jsx(n.code,{children:"control/icon/disabled"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["Состояние выводится само из ",e.jsx(n.code,{children:"value"}),", фокуса, ",e.jsx(n.code,{children:"error"})," и ",e.jsx(n.code,{children:"disabled"}),", отдельного пропа нет. На корне есть ",e.jsx(n.code,{children:"data-state"})," для тестов."]}),`
`,e.jsx(n.p,{children:"Свойства Figma и пропы:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Проп"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Label"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Value"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"value"})," / ",e.jsx(n.code,{children:"defaultValue"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show left icon"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"iconLeft"}),", например ",e.jsx(n.code,{children:"<CalendarIcon />"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Right icon (вместо крестика)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"iconRight"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show clear"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"clearable"})," (по умолчанию включён)"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show hint + Hint"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"hint"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Error text"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"error"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Show currency + Currency"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"currency"})})]})]})]}),`
`,e.jsx(n.h2,{id:"анимации",children:"Анимации"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подпись"})," плывёт вверх: крупная подпись-плейсхолдер (IM-16 M) уезжает вверх и уменьшается, а маленькая (IM-12 R) проявляется на её месте за 220 мс. Это два слоя, каждый в своём начертании, и на стыке они чуть размываются (1.5 px), поэтому в покое текст всегда резкий."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Крестик «очистить»"})," появляется, когда в поле есть текст: вырастает с 0.5 до 1 с лёгким перелётом за 300 мс, как крестик в Chips. Уходит быстрее, за 180 мс. Место под ним зарезервировано, поэтому текст не прыгает. Это CSS-переход: если быстро печатать и стирать, анимация разворачивается с текущего места. Тап по крестику не уводит фокус, и клавиатура на телефоне не закрывается."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Подсказка и ошибка"})," раскрываются под полем по высоте за 240 мс, а не выскакивают за один кадр."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion"}),": крестик только проявляется, без роста."]}),`
`]}),`
`,e.jsx(m,{prefix:"--field-"}),`
`,e.jsx(n.h2,{id:"длинный-текст-на-телефоне",children:"Длинный текст на телефоне"}),`
`,e.jsx(d,{of:h}),`
`,e.jsxs(n.p,{children:["Внутри настоящий ",e.jsx(n.code,{children:"<input>"}),", поэтому всё нативное работает:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Перемещение по тексту:"})," курсор ставится пальцем, долгое нажатие показывает лупу, на iOS работает трекпад на пробеле. Текст прокручивается за кареткой."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"В покое"})," длинное значение заканчивается «…»."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Длинная подпись"})," тоже обрезается «…», а ",e.jsx(n.strong,{children:"длинная ошибка"})," переносится на несколько строк."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Сумма с валютой:"})," знак стоит сразу после значения. Если сумма длинная, она сокращается, а знак остаётся видимым."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Размер шрифта"})," 16 px, поэтому iOS не увеличивает страницу при фокусе."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Тап"})," в любое место поля, а не только в строку текста, ставит курсор."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Клавиатуру выбирайте атрибутами поля: ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"inputMode"}),", ",e.jsx(n.code,{children:"enterKeyHint"}),", ",e.jsx(n.code,{children:"autoComplete"}),". Если их не задать, поле подставит разумные значения по назначению:"]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"По умолчанию"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'type="email"'})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'inputMode="email"'}),", ",e.jsx(n.code,{children:'autoComplete="email"'}),", без заглавных и проверки орфографии"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'type="tel"'})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'inputMode="tel"'}),", ",e.jsx(n.code,{children:'autoComplete="tel"'}),", без заглавных и проверки орфографии"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:'type="url"'})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'inputMode="url"'}),", без заглавных и проверки орфографии"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:'inputMode="numeric"'})," или ",e.jsx(n.code,{children:'"decimal"'})," (суммы)"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'autoComplete="off"'}),", без заглавных и проверки орфографии"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"любое другое поле"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'autoComplete="off"'}),": назначение неизвестно, а неверная подсказка хуже, чем никакой. Для имени, адреса, кода из СМС передайте настоящее значение (",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"street-address"}),", ",e.jsx(n.code,{children:"one-time-code"}),")"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"любое поле"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:'enterKeyHint="done"'}),"; в форме из нескольких полей ставьте ",e.jsx(n.code,{children:"next"})]})]})]})]}),`
`,e.jsx(n.p,{children:"Всё, что вы передали сами, главнее значений по умолчанию."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"className"})," и ",e.jsx(n.code,{children:"style"})," попадают на корень поля, а ",e.jsx(n.code,{children:"ref"})," и остальные атрибуты (",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"maxLength"}),", ",e.jsx(n.code,{children:"data-*"}),") на ",e.jsx(n.code,{children:"<input>"}),"."]}),`
`,e.jsxs(n.p,{children:["Крестик очищает поле через ",e.jsx(n.code,{children:"onValueChange('')"})," и ",e.jsx(n.code,{children:"onClear"}),", нативный ",e.jsx(n.code,{children:"onChange"})," при этом не вызывается. Если форма слушает только ",e.jsx(n.code,{children:"onChange"}),", подпишитесь ещё на ",e.jsx(n.code,{children:"onValueChange"}),"."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Подпись — настоящий ",e.jsx(n.code,{children:"<label for>"}),". Подсказка и ошибка связаны с полем через ",e.jsx(n.code,{children:"aria-describedby"}),". При ошибке у поля ",e.jsx(n.code,{children:"aria-invalid"}),", а текст ошибки объявляется как ",e.jsx(n.code,{children:'role="alert"'}),"."]}),`
`,e.jsx(n.li,{children:"Фокус виден по курсору и подписи, которая уезжает вверх. Фон в фокусе не меняется, как в Figma, обводки нет — для клавиатуры это слабый сигнал, см. вопросы ниже."}),`
`,e.jsx(n.li,{children:"Крестик «Очистить» нажимается областью 44 × 44, пока в поле пусто, его нет ни в порядке Tab, ни для скринридера. Нажатие отзывается сразу при касании, в том числе на iOS."}),`
`]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"Где в дизайне: «Оформление» → «Детали заказа» (1338:107636, блок «Контактные данные»); «Результаты» → «Фильтрация» → «Цена за человека» (817:66970)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Контактные данные."})," Имя и телефон покупателя; под телефоном подсказка про WhatsApp и Telegram. Имя и номер в примере — нейтральные."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Цена за человека."})," Два поля «От» и «До» с знаком сома. С ползунком они связаны в ",e.jsx(n.a,{href:"?path=/docs/components-rangeslider--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RangeSlider"}),"."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(n.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Подсказка под полем"}),e.jsx(n.td,{children:"шрифт Inter 13 без стиля IM (у текста ошибки стиль IM-12 R)"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"IM-12 R"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Подпись в Placeholder"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/text/default"}),", как значение (у Select плейсхолдер ",e.jsx(n.code,{children:"control/text/secondary"}),") — похоже на ошибку макета"]}),e.jsx(n.td,{children:"как в Figma"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Отступ слева у текста в Disabled"}),e.jsx(n.td,{children:"8, в остальных состояниях 12 справа и 8 слева у всех, кроме Disabled"}),e.jsx(n.td,{children:"одинаково во всех состояниях"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Крестик"}),e.jsxs(n.td,{children:["диск ",e.jsx(n.code,{children:"icon/inverse/constant/primary"})," 20 px + × ",e.jsx(n.code,{children:"icon/secondary"})," 8 px"]}),e.jsx(n.td,{children:"как в Figma; диск не переворачивается в тёмной теме, × переворачивается, нужна проверка контраста"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Иконки"}),e.jsxs(n.td,{children:["экземпляр ",e.jsx(n.a,{href:"?path=/docs/components-leadingicon--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Leading icon"})," Size=32: коробка 32 px, глиф 20 px, не кнопка; цвет ",e.jsx(n.code,{children:"control/icon/secondary"})," (Disabled ",e.jsx(n.code,{children:"control/icon/disabled"}),")"]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"LeadingIcon"})," из Cell внутри поля; текст начинается на 48 px слева"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Крестик (Show clear)"}),e.jsx(n.td,{children:"виден во всех состояниях, даже в пустом поле"}),e.jsx(n.td,{children:"только когда есть текст, место зарезервировано"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Фокус с клавиатуры"}),e.jsx(n.td,{children:"без обводки"}),e.jsx(n.td,{children:"без обводки, как в Figma — стоит решить, нужна ли она"})]})]})]}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.p,{children:["В Field нет значений без токена: всё из ",e.jsx(n.code,{children:"control/*"}),", ",e.jsx(n.code,{children:"inner-shadow/inner-input"})," и ",e.jsx(n.code,{children:"radius/lg"}),". Крестик нарисован по Figma ",e.jsx(n.code,{children:"close"})," 308:1280."]}),`
`,e.jsx(g,{css:[f,u]})]})}function U(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(l,{...r})}):l(r)}export{U as default};
