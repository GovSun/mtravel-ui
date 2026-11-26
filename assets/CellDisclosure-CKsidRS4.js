import{j as n}from"./iframe-DyD5Yel4.js";import{u as l,M as s,C as r,a as o}from"./blocks-CcI75u3-.js";import{D as t,P as c,T as h,C as x,a}from"./CellDisclosure.stories-mnN94Car.js";import{U as j}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./Caption-D_clnAXK.js";import"./Cell-BMryoHV2.js";import"./cx-2dOUpm6k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./LeadingIcon-B3CZMOJC.js";import"./Skeleton-dpQW7cMp.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./general-CSE0kF9v.js";import"./Svg-B7GM2ZFd.js";import"./paths-BjPgyxdS.js";import"./PillButton-Cdj7WtD9.js";import"./arrows-0JYTYJZi.js";import"./Counter-CavxruiM.js";import"./useControllableState-D9cJCl43.js";import"./CounterButton-CAO8KXCV.js";import"./RollingNumber-Dqz4KuU3.js";import"./Toggle-BLxkVncc.js";import"./useInstantAfterKey-D3FdC2PV.js";import"./Checkbox-CsOUmA-N.js";import"./Radio-qMCK-bX2.js";import"./CellCenter-DamPGtPP.js";import"./Divider-CIZGT-_8.js";import"./Badge-CdXEkR6u.js";import"./time-lpmEQjgl.js";import"./tokens-Bc2_NrJ2.js";const D=`/*
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

/* info: Figma Type=info 1586:1901 — circle-information Solid 16 in the 32 slot. Figma fills it with a raw black, the
   closest DS colour is control/icon/primary. With onClick it is a button with a 44 px target. */
.info {
  display: block;
  color: var(--control-icon-primary);
}
.infoButton {
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.infoButton::after {
  content: '';
  position: absolute;
  inset: -14px; /* 16 + 14 + 14 = a 44 px target */
}
.infoButton:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-full);
}
.infoButton:disabled {
  cursor: default;
  color: var(--control-icon-disabled);
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
`;function i(d){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...l(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:t}),`
`,n.jsx(e.h1,{id:"cell-disclosure",children:"Cell Disclosure"}),`
`,n.jsxs(e.p,{children:["Правая часть строки ",n.jsx(e.a,{href:"?path=/docs/components-cell--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Cell"}),": шеврон, галочка, переключатель, счётчик, кнопка «Все». Отдельно от Cell её почти не используют, но у неё свой набор типов."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=46-102",rel:"nofollow",children:"Disclosure 46:102"}),": Type из 11 значений (имена те же, что в коде) и булево Icon. Типы link, pill и pill-overlay держат открытый экземпляр ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Pill button"}),"; его Show chevron в коде — типы ",n.jsx(e.code,{children:"-chevron"}),"."]}),`
`,n.jsx(r,{of:c}),`
`,n.jsx(o,{of:c}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Cell title="Каракол" disclosure={<CellDisclosure variant="check" checked={picked === 'karakol'} />} onClick={…} />
<Cell title="Билеты" disclosure={<CellDisclosure variant="pill-chevron" onClick={openAll}>Все</CellDisclosure>} />
`})}),`
`,n.jsx(e.h2,{id:"типы",children:"Типы"}),`
`,n.jsx(r,{of:h}),`
`,n.jsxs(e.p,{children:["Имена типов в Figma и в коде совпадают; шеврон таблетки в Figma — свойство Show chevron вложенного Pill button, в коде — отдельный тип с ",n.jsx(e.code,{children:"-chevron"}),"."]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Код"}),n.jsx(e.th,{children:"Что это"}),n.jsx(e.th,{children:"Из чего собрано"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"chevron"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"chevron"})}),n.jsx(e.td,{children:"строка открывает что-то"}),n.jsxs(e.td,{children:["иконка chevron-right 16 (штрих 1.5), слот 32 × 32, ",n.jsx(e.code,{children:"control/icon/tertiary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"check"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"check"})}),n.jsx(e.td,{children:"выбранная строка"}),n.jsxs(e.td,{children:["иконка check 20, ",n.jsx(e.code,{children:"control/icon/accent"}),"; пока ",n.jsx(e.code,{children:"checked"})," ложно, не видна"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"radio"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"radio"})}),n.jsx(e.td,{children:"один вариант из нескольких"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"?path=/docs/components-radio--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Radio"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"checkbox"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"checkbox"})}),n.jsx(e.td,{children:"несколько вариантов"}),n.jsxs(e.td,{children:[n.jsx(e.a,{href:"?path=/docs/components-checkbox--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Checkbox"})," 20"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"toggle"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"toggle"})}),n.jsx(e.td,{children:"включить или выключить"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"?path=/docs/components-toggle--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Toggle"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"counter"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"counter"})}),n.jsx(e.td,{children:"число, которое меняют на месте"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"badge"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"badge"})}),n.jsx(e.td,{children:"бейдж, например время «08:45»"}),n.jsxs(e.td,{children:[n.jsx(e.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"})," в ",n.jsx(e.code,{children:"children"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"icon"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"icon"})}),n.jsx(e.td,{children:"иконка 32 без плитки"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"?path=/docs/components-leading-icon--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"LeadingIcon"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"link"})}),n.jsx(e.td,{children:"текст «Все» ссылкой"}),n.jsxs(e.td,{children:[n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"})," ",n.jsx(e.code,{children:"link"}),": IM-14 S, ",n.jsx(e.code,{children:"control/text/accent"}),"; слот без отступов"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"link + Show chevron"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"link-chevron"})}),n.jsx(e.td,{children:"«Все ›» ссылкой"}),n.jsx(e.td,{children:"то же и шеврон 12"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"pill"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"pill"})}),n.jsx(e.td,{children:"белая таблетка с текстом"}),n.jsxs(e.td,{children:["PillButton ",n.jsx(e.code,{children:"white"}),": 24 px, ",n.jsx(e.code,{children:"control/bg/on-surface"}),", IM-14 S"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"pill + Show chevron"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"pill-chevron"})}),n.jsx(e.td,{children:"белая таблетка с шевроном"}),n.jsx(e.td,{children:"то же и шеврон 12"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"pill-overlay"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"pill-overlay"})}),n.jsx(e.td,{children:"тёмная стеклянная таблетка, для фото"}),n.jsxs(e.td,{children:["PillButton ",n.jsx(e.code,{children:"overlay"}),": ",n.jsx(e.code,{children:"control/bg/overlay/default"}),", рамка ",n.jsx(e.code,{children:"control/border/overlay/default"}),", ",n.jsx(e.code,{children:"blur/bg-4"}),", ",n.jsx(e.code,{children:"control/text/selected"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"pill-overlay + Show chevron"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"pill-overlay-chevron"})}),n.jsx(e.td,{children:"то же с шевроном"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Icon = false"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"none"})}),n.jsx(e.td,{children:"пустое место той же ширины"}),n.jsx(e.td,{children:"чтобы тексты соседних строк выстраивались ровно"})]})]})]}),`
`,n.jsxs(e.p,{children:["Ссылки и таблетки становятся кнопками, когда передан ",n.jsx(e.code,{children:"onClick"}),". Без него это текст внутри нажимаемой строки. У кнопки зона тапа 44 px и нажатие со сжатием 0.94 (как у ",n.jsx(e.a,{href:"?path=/docs/components-pill-button--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"PillButton"}),"); ",n.jsx(e.code,{children:"disabled"})," строки гасит и таблетку."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),") попадают на корневой ",n.jsx(e.code,{children:"span"}),". Внутри ",n.jsx(e.code,{children:"Cell"})," с ",n.jsx(e.code,{children:"disabled"})," слот получает ",n.jsx(e.code,{children:"disabled"})," сам. Радио без ",n.jsx(e.code,{children:"RadioGroup"})," не хранит выбор: передавайте ",n.jsx(e.code,{children:"checked"}),"."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:["Время слота справа: настоящий ",n.jsx(e.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"})," в ",n.jsx(e.code,{children:"children"}),"."]}),`
`,n.jsx(r,{of:x}),`
`,n.jsxs(e.p,{children:["«Все» открывает список: ссылка со шевроном получает ",n.jsx(e.code,{children:"onClick"})," и становится кнопкой."]}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Проп"}),n.jsx(e.th,{children:"Для чего"}),n.jsx(e.th,{children:"Figma"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"variant"})}),n.jsxs(e.td,{children:["тип, по умолчанию ",n.jsx(e.code,{children:"chevron"})]}),n.jsx(e.td,{children:"Type"})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"checked"}),", ",n.jsx(e.code,{children:"defaultChecked"}),", ",n.jsx(e.code,{children:"onCheckedChange"})]}),n.jsx(e.td,{children:"check, checkbox, radio, toggle"}),n.jsx(e.td,{children:"Checked, Active"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"value"})}),n.jsx(e.td,{children:"radio: значение пункта; внутри RadioGroup сравнивается с группой"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"counter"})}),n.jsxs(e.td,{children:["props ",n.jsx(e.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"})]}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"children"})}),n.jsx(e.td,{children:"бейдж, иконка или текст таблетки (по умолчанию «Все»)"}),n.jsx(e.td,{children:"текст, Badge"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"onClick"})}),n.jsx(e.td,{children:"делает ссылку или таблетку кнопкой (получает событие)"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"aria-label"}),", ",n.jsx(e.code,{children:"disabled"})]}),n.jsx(e.td,{children:"имя и недоступность контрола; Cell подставляет имя из заголовка"}),n.jsx(e.td,{})]})]})]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-вопросы-к-figma",children:"Без токенов в DS и вопросы к Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Решение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Шеврон привязан к ",n.jsx(e.strong,{children:"удалённой"})," переменной ",n.jsx(e.code,{children:"disclosure/icon/default"})," (905:1077). Она ссылается на тот же серый, что ",n.jsx(e.code,{children:"icon/tertiary"})," (#85888b)"]}),n.jsxs(e.td,{children:["в коде ",n.jsx(e.code,{children:"control/icon/tertiary"}),"; в Figma привязать к нему"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Type=counter содержит старый компонент 502:9016"}),n.jsx(e.td,{children:"в коде настоящий Counter"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Булево Icon = false оставляет пустое место 36 px"}),n.jsxs(e.td,{children:["тип ",n.jsx(e.code,{children:"none"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Pressed таблеток нет"}),n.jsx(e.td,{children:"сжатие 0.94, см. PillButton"})]})]})]}),`
`,n.jsx(j,{css:D}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Checkbox, radio и toggle — настоящие инпуты: пробел, фокус и озвучивание работают. Имя берётся из заголовка строки."}),`
`,n.jsxs(e.li,{children:["Галочка и шеврон декоративны. Выбранность строки передавайте через ",n.jsx(e.code,{children:"aria-selected"})," или ",n.jsx(e.code,{children:"aria-current"})," на самой строке."]}),`
`]})]})}function O(d={}){const{wrapper:e}={...l(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{O as default};
