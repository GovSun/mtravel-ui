import{j as n}from"./iframe-DuqTOznb.js";import{u as d,M as s,C as t,a as i}from"./blocks-CaaIEU4k.js";import{C as l,P as a,a as c,O as h}from"./Calendar.stories-mMwAr060.js";import{M as x,U as m}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./date-DiDJ1Ibz.js";import"./Calendar-Cebrb_nd.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./useControllableState-QyUXWn2y.js";import"./mergeRefs-BPT53vMC.js";import"./tokens-INIU3VNa.js";const j=`/*
 * Calendar. Not in the DS Figma yet: «Выходные» 2984:133551 (old library, Nunito) mapped to DS tokens.
 *   month card     bg/surface, radius/lg 16; months spacing/sm 8 apart
 *   header         48 px, 12 / 16, month IM-16 B control/text/default, year IM-16 B control/text/tertiary
 *   grid           7 columns, 0 / 12 / 10 / 12, rows 6 apart; weekday row 44 px, IM-14 S control/text/tertiary,
 *                  СБ ВС control/text/accent
 *   day            44 × 44, radius/md 12, IM-14 S control/text/default; unavailable control/text/disabled;
 *                  chosen: control/bg/accent with control/text/inverse
 */
.root {
  --_press: calc(var(--calendar-motion-press-duration) * var(--motion-scale));
  --_release: calc(var(--calendar-motion-release-duration) * var(--motion-scale));
  --_select: calc(var(--calendar-motion-select-duration) * var(--motion-scale));
  --_deselect: calc(var(--calendar-motion-deselect-duration) * var(--motion-scale));

  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.month {
  border-radius: var(--radius-lg);
  background: var(--color-bg-surface);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  padding: var(--spacing-md) var(--spacing-lg);
  font: var(--font-im-16-b);
  letter-spacing: var(--tracking-im-16-b);
}
.name {
  color: var(--control-text-default);
}
.year {
  color: var(--control-text-tertiary);
}

.grid {
  display: flex;
  flex-direction: column;
  gap: 6px; /* no token: Figma rows 6 apart */
  padding: 0 var(--spacing-md) 10px; /* no token: Figma bottom 10 */
}
.row {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  justify-items: center;
}
.cell {
  display: flex;
  width: 44px;
  height: 44px;
}

.weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  color: var(--control-text-tertiary);
}
.weekday[data-weekend] {
  color: var(--control-text-accent);
}

.day {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--radius-md);
  background: none;
  color: var(--control-text-default);
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  transition:
    transform var(--_release) var(--calendar-motion-easing),
    color var(--_deselect) var(--motion-ease-standard);
}
/* the chosen day's fill: grows from the centre when picked, fades (faster) when another day is picked */
.day::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  background: var(--control-bg-accent);
  opacity: 0;
  transform: scale(var(--calendar-motion-select-from));
  transition:
    opacity var(--_deselect) var(--motion-ease-standard),
    transform var(--_deselect) var(--calendar-motion-easing);
}
.day[data-selected] {
  color: var(--control-text-inverse);
  transition:
    transform var(--_release) var(--calendar-motion-easing),
    color var(--_select) var(--motion-ease-standard);
}
.day[data-selected]::before {
  opacity: 1;
  transform: none;
  transition:
    opacity var(--_select) var(--motion-ease-standard),
    transform var(--_select) var(--calendar-motion-easing);
}
/* the finger is on it: the day shrinks at once, like the other small controls */
.day[data-pressed] {
  transform: scale(var(--calendar-motion-press-scale));
  transition:
    transform var(--_press) var(--calendar-motion-easing),
    color var(--_deselect) var(--motion-ease-standard);
}
.day:disabled {
  color: var(--control-text-disabled);
  cursor: default;
}
.day:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}

/* reduced motion: no scaling, the fill and the colour only cross-fade */
@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .day,
  :global(:root:not([data-motion='normal'])) .day::before {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .day,
:global(:root[data-motion='reduce']) .day::before {
  transform: none;
}
`;function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l}),`
`,n.jsx(e.h1,{id:"calendar",children:"Calendar"}),`
`,n.jsxs(e.p,{children:["Выбор одного дня. Месяцы идут один под другим, неделя с понедельника. Сделан для экрана «Когда», который открывается с даты в ",n.jsx(e.a,{href:"?path=/docs/components-floatingfilter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"FloatingFilter"}),": выбрать можно только дни, когда идёт событие, остальные видны серыми."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"В DS Figma календаря пока нет."})," Компонент собран по экрану «Выходных» ",n.jsx(e.a,{href:"https://www.figma.com/design/RB3kRwjZ9Akvh6n5Ln4M6N/?node-id=2984-133551",rel:"nofollow",children:"Calendar 2984:133551"}),", который нарисован старой библиотекой (шрифт Nunito, цвета не из DS). Каждое значение переведено в токены DS по таблице ниже. Когда календарь появится в DS Figma, сверить с ним."]}),`
`,n.jsx(t,{of:a}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Calendar, formatDate } from '@mtravel/ui';

<Calendar
  month={new Date(2025, 6, 1)}  // первый месяц
  months={2}
  min={today}
  isDateDisabled={(d) => !event.runsOn(d)}
  value={day}
  onValueChange={setDay}
/>
<Button fullWidth disabled={!day}>{day ? \`Выбрать \${formatDate(day)}\` : 'Выберите дату'}</Button>
`})}),`
`,n.jsx(e.h2,{id:"из-выходных-в-токены-ds",children:"Из «Выходных» в токены DS"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Часть"}),n.jsx(e.th,{children:"В «Выходных» (старая библиотека)"}),n.jsx(e.th,{children:"В DS"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Карточка месяца"}),n.jsx(e.td,{children:"белая, радиус 16"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"bg/surface"}),", ",n.jsx(e.code,{children:"radius/lg"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Между месяцами"}),n.jsx(e.td,{children:"8"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"spacing/sm"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Шапка месяца"}),n.jsx(e.td,{children:"48 px, 12 / 16"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"spacing/md"}),", ",n.jsx(e.code,{children:"spacing/lg"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Месяц"}),n.jsxs(e.td,{children:["Nunito Bold 16 / 24, ",n.jsx(e.code,{children:"text/default"})]}),n.jsxs(e.td,{children:["IM-16 B, ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Год"}),n.jsxs(e.td,{children:["то же, ",n.jsx(e.code,{children:"text/muted"})," #768793"]}),n.jsxs(e.td,{children:["IM-16 B, ",n.jsx(e.code,{children:"control/text/tertiary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Дни недели"}),n.jsx(e.td,{children:"Nunito Bold 14 / 20, #768793; СБ ВС #3b82f6"}),n.jsxs(e.td,{children:["IM-14 S, ",n.jsx(e.code,{children:"control/text/tertiary"}),"; СБ ВС ",n.jsx(e.code,{children:"control/text/accent"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Сетка"}),n.jsx(e.td,{children:"7 колонок по 48, отступы 0 / 12 / 10 / 12, ряды через 6"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"spacing/md"}),"; 10 и 6 — без токена"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"День"}),n.jsxs(e.td,{children:["44 × 44, радиус 12, Nunito Bold 14, ",n.jsx(e.code,{children:"Text/Content/Primary"})]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"radius/md"}),", IM-14 S, ",n.jsx(e.code,{children:"control/text/default"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Недоступный день"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"text/disabled"})," #a9b4bc"]}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/text/disabled"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Выбранный день"}),n.jsx(e.td,{children:"синяя заливка, белый текст"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/accent"}),", ",n.jsx(e.code,{children:"control/text/inverse"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Месяц в шапке"}),n.jsx(e.td,{children:"«Июль», полностью"}),n.jsx(e.td,{children:"исключение из стандарта дат: это заголовок месяца, а не дата в тексте"})]})]})]}),`
`,n.jsxs(e.p,{children:["Нет в «Выходных» и не придумано: отметка «сегодня», выбор периода (полоса ",n.jsx(e.code,{children:"#e5f2ff"})," есть в макете, но скрыта). Добавим, когда появятся в Figma."]}),`
`,n.jsx(e.h2,{id:"выбор",children:"Выбор"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Тап по доступному дню выбирает его: синяя заливка вырастает из центра (200 мс, с 0.6), прежний день гаснет быстрее (140 мс)."}),`
`,n.jsx(e.li,{children:"Палец на дне — день сразу сжимается до 0.9 (100 мс), как маленькие контролы; уехал палец или началась прокрутка — отпускается."}),`
`,n.jsx(e.li,{children:"Reduced motion: без масштаба, заливка и цвет только проявляются."}),`
`,n.jsxs(e.li,{children:["Недоступный день — ",n.jsx(e.code,{children:"disabled"}),", на тап не отвечает."]}),`
`]}),`
`,n.jsx(x,{prefix:"--calendar-"}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Каждый месяц — ",n.jsx(e.code,{children:"grid"})," с заголовком «Июль 2025» и строкой дней недели."]}),`
`,n.jsxs(e.li,{children:["У дня полное имя для скринридера: «среда, 6 августа 2025», у недоступного — «…, недоступно»; выбранный — ",n.jsx(e.code,{children:"aria-pressed"})," и ",n.jsx(e.code,{children:"aria-selected"})," у ячейки."]}),`
`,n.jsx(e.li,{children:"Одна точка табуляции на весь календарь: выбранный день или первый доступный. Стрелки ←→ — на день, ↑↓ — на неделю, недоступные дни пропускаются."}),`
`]}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsx(m,{css:j})]})}function F(r={}){const{wrapper:e}={...d(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{F as default};
