import{j as e}from"./iframe-DuqTOznb.js";import{u as s,M as l,C as c,a as o}from"./blocks-CaaIEU4k.js";import{D as t,P as r,T as h,C as x,a as j}from"./CellDisclosure.stories-CWrHCzT3.js";import{U as a}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Caption-C6jupY-b.js";import"./Cell-DbWJlVzG.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./PillButton-BwV4GISW.js";import"./arrows-C0H-naDa.js";import"./Counter-6eoXZdLB.js";import"./useControllableState-QyUXWn2y.js";import"./CounterButton-ddQoagoR.js";import"./RollingNumber-BIb_2A9U.js";import"./Toggle-DcBpc41r.js";import"./useInstantAfterKey-D0TlCdRr.js";import"./Checkbox-C1X2mrZB.js";import"./Radio-Bz4AqS0k.js";import"./CellCenter-CXZRRsHl.js";import"./Divider-BbjTiNWY.js";import"./Badge-Dbn3uc4E.js";import"./time-CsMT4GVj.js";import"./tokens-INIU3VNa.js";const D=`/*
 * Disclosure (Figma 46:102). Slot: 32 px high, padding 0 8, gap 8 (spacing/sm), content aligned to the right.
 * Links and pills are a PillButton (Figma Pill button 1492:366), styled there.
 */
.root {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  min-height: 32px;
  padding: 0 var(--spacing-sm);
  gap: var(--spacing-sm);
}
/* Type=link: the slot has no padding, the PillButton link brings its own 8 (Figma 46:102 Type=link, 42 × 32) */
.root[data-variant='link'],
.root[data-variant='link-chevron'] {
  padding: 0;
}
/* Counter has its own 44 px height and 8 px of room (Figma 502:9404 is 132 × 44) */
.root[data-variant='counter'] {
  min-height: 44px;
}

.chevron {
  display: block;
  color: var(--control-icon-tertiary); /* Figma binds the deleted variable disclosure/icon/default (= gray-500, same as icon/tertiary) */
}

/* Checked: the mark appears when the row becomes chosen — fades and grows from 0.6 */
.check {
  display: block;
  color: var(--control-icon-accent);
  opacity: 0;
  transform: scale(var(--cell-motion-check-from-scale));
  transition:
    opacity calc(var(--cell-motion-check-duration) * var(--motion-scale)) var(--cell-motion-check-easing),
    transform calc(var(--cell-motion-check-duration) * var(--motion-scale)) var(--cell-motion-check-easing);
}
.check[data-visible] {
  opacity: 1;
  transform: none;
}

.empty {
  display: block;
  width: 20px;
  height: 20px;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .check {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .check {
  transform: none;
}
`;function i(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"cell-disclosure",children:"Cell Disclosure"}),`
`,e.jsxs(n.p,{children:["Правая часть строки ",e.jsx(n.a,{href:"?path=/docs/components-cell--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Cell"}),": шеврон, галочка, переключатель, счётчик, кнопка «Все». Отдельно от Cell её почти не используют, но у неё свой набор типов."]}),`
`,e.jsxs(n.p,{children:["Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=46-102",rel:"nofollow",children:"Disclosure 46:102"}),": Type из 11 значений (имена те же, что в коде) и булево Icon. Типы link, pill и pill-overlay держат открытый экземпляр ",e.jsx(n.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Pill button"}),"; его Show chevron в коде — типы ",e.jsx(n.code,{children:"-chevron"}),"."]}),`
`,e.jsx(c,{of:r}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Cell title="Каракол" disclosure={<CellDisclosure variant="check" checked={picked === 'karakol'} />} onClick={…} />
<Cell title="Билеты" disclosure={<CellDisclosure variant="pill-chevron" onClick={openAll}>Все</CellDisclosure>} />
`})}),`
`,e.jsx(n.h2,{id:"типы",children:"Типы"}),`
`,e.jsx(c,{of:h}),`
`,e.jsxs(n.p,{children:["Имена типов в Figma и в коде совпадают; шеврон таблетки в Figma — свойство Show chevron вложенного Pill button, в коде — отдельный тип с ",e.jsx(n.code,{children:"-chevron"}),"."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Код"}),e.jsx(n.th,{children:"Что это"}),e.jsx(n.th,{children:"Из чего собрано"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"chevron"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"chevron"})}),e.jsx(n.td,{children:"строка открывает что-то"}),e.jsxs(n.td,{children:["иконка chevron-right 16 (штрих 1.5), слот 32 × 32, ",e.jsx(n.code,{children:"control/icon/tertiary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"check"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"check"})}),e.jsx(n.td,{children:"выбранная строка"}),e.jsxs(n.td,{children:["иконка check 20, ",e.jsx(n.code,{children:"control/icon/accent"}),"; пока ",e.jsx(n.code,{children:"checked"})," ложно, не видна"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"radio"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"radio"})}),e.jsx(n.td,{children:"один вариант из нескольких"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"checkbox"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"checkbox"})}),e.jsx(n.td,{children:"несколько вариантов"}),e.jsxs(n.td,{children:[e.jsx(n.a,{href:"?path=/docs/components-checkbox--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Checkbox"})," 20"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"toggle"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"toggle"})}),e.jsx(n.td,{children:"включить или выключить"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"?path=/docs/components-toggle--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Toggle"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"counter"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"counter"})}),e.jsx(n.td,{children:"число, которое меняют на месте"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"badge"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"badge"})}),e.jsx(n.td,{children:"бейдж, например время «08:45»"}),e.jsxs(n.td,{children:[e.jsx(n.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"})," в ",e.jsx(n.code,{children:"children"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"icon"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"icon"})}),e.jsx(n.td,{children:"иконка 32 без плитки"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"?path=/docs/components-leading-icon--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"LeadingIcon"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"link"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"link"})}),e.jsx(n.td,{children:"текст «Все» ссылкой"}),e.jsxs(n.td,{children:[e.jsx(n.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"})," ",e.jsx(n.code,{children:"link"}),": IM-14 S, ",e.jsx(n.code,{children:"control/text/accent"}),"; слот без отступов"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"link + Show chevron"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"link-chevron"})}),e.jsx(n.td,{children:"«Все ›» ссылкой"}),e.jsx(n.td,{children:"то же и шеврон 12"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"pill"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pill"})}),e.jsx(n.td,{children:"белая таблетка с текстом"}),e.jsxs(n.td,{children:["PillButton ",e.jsx(n.code,{children:"white"}),": 24 px, ",e.jsx(n.code,{children:"control/bg/on-surface"}),", IM-14 S"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"pill + Show chevron"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pill-chevron"})}),e.jsx(n.td,{children:"белая таблетка с шевроном"}),e.jsx(n.td,{children:"то же и шеврон 12"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"pill-overlay"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pill-overlay"})}),e.jsx(n.td,{children:"тёмная стеклянная таблетка, для фото"}),e.jsxs(n.td,{children:["PillButton ",e.jsx(n.code,{children:"overlay"}),": ",e.jsx(n.code,{children:"control/bg/overlay/default"}),", рамка ",e.jsx(n.code,{children:"control/border/overlay/default"}),", ",e.jsx(n.code,{children:"blur/bg-4"}),", ",e.jsx(n.code,{children:"control/text/selected"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"pill-overlay + Show chevron"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"pill-overlay-chevron"})}),e.jsx(n.td,{children:"то же с шевроном"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Icon = false"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"none"})}),e.jsx(n.td,{children:"пустое место той же ширины"}),e.jsx(n.td,{children:"чтобы тексты соседних строк выстраивались ровно"})]})]})]}),`
`,e.jsxs(n.p,{children:["Ссылки и таблетки становятся кнопками, когда передан ",e.jsx(n.code,{children:"onClick"}),". Без него это текст внутри нажимаемой строки. У кнопки зона тапа 44 px и нажатие со сжатием 0.94 (как у ",e.jsx(n.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"}),"); ",e.jsx(n.code,{children:"disabled"})," строки гасит и таблетку."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"})," и остальные атрибуты (",e.jsx(n.code,{children:"data-*"}),", ",e.jsx(n.code,{children:"id"}),") попадают на корневой ",e.jsx(n.code,{children:"span"}),". Внутри ",e.jsx(n.code,{children:"Cell"})," с ",e.jsx(n.code,{children:"disabled"})," слот получает ",e.jsx(n.code,{children:"disabled"})," сам. Радио без ",e.jsx(n.code,{children:"RadioGroup"})," не хранит выбор: передавайте ",e.jsx(n.code,{children:"checked"}),"."]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsxs(n.p,{children:["Время слота справа: настоящий ",e.jsx(n.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"})," в ",e.jsx(n.code,{children:"children"}),"."]}),`
`,e.jsx(c,{of:x}),`
`,e.jsxs(n.p,{children:["«Все» открывает список: ссылка со шевроном получает ",e.jsx(n.code,{children:"onClick"})," и становится кнопкой."]}),`
`,e.jsx(c,{of:j}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Проп"}),e.jsx(n.th,{children:"Для чего"}),e.jsx(n.th,{children:"Figma"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"variant"})}),e.jsxs(n.td,{children:["тип, по умолчанию ",e.jsx(n.code,{children:"chevron"})]}),e.jsx(n.td,{children:"Type"})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"checked"}),", ",e.jsx(n.code,{children:"defaultChecked"}),", ",e.jsx(n.code,{children:"onCheckedChange"})]}),e.jsx(n.td,{children:"check, checkbox, radio, toggle"}),e.jsx(n.td,{children:"Checked, Active"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"radio: значение пункта; внутри RadioGroup сравнивается с группой"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"counter"})}),e.jsxs(n.td,{children:["props ",e.jsx(n.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"})]}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"children"})}),e.jsx(n.td,{children:"бейдж, иконка или текст таблетки (по умолчанию «Все»)"}),e.jsx(n.td,{children:"текст, Badge"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"onClick"})}),e.jsx(n.td,{children:"делает ссылку или таблетку кнопкой (получает событие)"}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"aria-label"}),", ",e.jsx(n.code,{children:"disabled"})]}),e.jsx(n.td,{children:"имя и недоступность контрола; Cell подставляет имя из заголовка"}),e.jsx(n.td,{})]})]})]}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds-и-вопросы-к-figma",children:"Без токенов в DS и вопросы к Figma"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"Решение"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Шеврон привязан к ",e.jsx(n.strong,{children:"удалённой"})," переменной ",e.jsx(n.code,{children:"disclosure/icon/default"})," (905:1077). Она ссылается на тот же серый, что ",e.jsx(n.code,{children:"icon/tertiary"})," (#85888b)"]}),e.jsxs(n.td,{children:["в коде ",e.jsx(n.code,{children:"control/icon/tertiary"}),"; в Figma привязать к нему"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Type=counter содержит старый компонент 502:9016"}),e.jsx(n.td,{children:"в коде настоящий Counter"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Булево Icon = false оставляет пустое место 36 px"}),e.jsxs(n.td,{children:["тип ",e.jsx(n.code,{children:"none"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Pressed таблеток нет"}),e.jsx(n.td,{children:"сжатие 0.94, см. PillButton"})]})]})]}),`
`,e.jsx(a,{css:D}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Checkbox, radio и toggle — настоящие инпуты: пробел, фокус и озвучивание работают. Имя берётся из заголовка строки."}),`
`,e.jsxs(n.li,{children:["Галочка и шеврон декоративны. Выбранность строки передавайте через ",e.jsx(n.code,{children:"aria-selected"})," или ",e.jsx(n.code,{children:"aria-current"})," на самой строке."]}),`
`]})]})}function O(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(i,{...d})}):i(d)}export{O as default};
