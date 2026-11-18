import{j as n}from"./iframe-DuqTOznb.js";import{u as i,M as d,C as t,a as l}from"./blocks-CaaIEU4k.js";import{S as a,P as o,V as c,C as h}from"./SearchSummary.stories-AtANSQJl.js";import{M as x,U as m}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./SearchSummary-oxe_VM3Q.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./cx-2dOUpm6k.js";import"./mtravel-mark-Cc18rIoX.js";import"./Svg-B1-TtxWQ.js";import"./arrows-C0H-naDa.js";import"./FilterChip-1LeuoSUe.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./Chip-KAmC-4ZV.js";import"./useControllableState-QyUXWn2y.js";import"./general-DYSfllt2.js";import"./paths-BjPgyxdS.js";import"./Skeleton-D5GPHumj.js";import"./tokens-INIU3VNa.js";const j=`/*
 * Search summary (Figma «search» 806:5570): a 44 px pill, [mark 40] [two text lines, centred] [chevron 40].
 * Three variants. Figma binds the title and the chevron of every tone to control/* tokens; the ring and the two inner
 * shadows of the light tone are not in the DS effect styles (see the docs page).
 */
.root {
  --_press-in: calc(var(--search-motion-summary-press-in-duration) * var(--motion-scale));
  --_press-out: calc(var(--search-motion-summary-press-out-duration) * var(--motion-scale));
  --_bg: var(--control-bg-selected);
  --_title: var(--control-text-inverse);
  --_sub: var(--control-text-inverse-secondary);
  --_chev: var(--control-icon-selected);

  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  height: 44px;
  min-height: 44px; /* tap target; Figma pill 44 */
  margin: 0;
  padding: 0; /* Figma Tab 8 / 0: the two lines are centred in the 44 */
  border: 0;
  border-radius: var(--radius-full);
  background: var(--_bg);
  color: var(--_title);
  text-align: center;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  transition: transform var(--_press-out) var(--search-motion-summary-press-easing);
}
/* glass over a photo or a map: control/bg/overlay/default at 64 %, the 5 % ring, background blur */
.root[data-variant='glass'] {
  --_bg: color-mix(in srgb, var(--control-bg-overlay-default) 64%, transparent);
  --_chev: var(--control-icon-inverse);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--badge-border-default) 5%, transparent);
  -webkit-backdrop-filter: var(--blur-bg-12);
  backdrop-filter: var(--blur-bg-12);
}
/* the grey field: title control/text/default (Figma 937:5227; it flips with the grey, like every field), secondary subtitle and chevron */
.root[data-variant='light'] {
  --_bg: var(--control-bg-default);
  --_title: var(--control-text-default);
  --_sub: var(--control-text-secondary);
  --_chev: var(--control-icon-secondary);
  box-shadow:
    inset 0 0 0 1px color-mix(in srgb, var(--badge-border-default) 5%, transparent),
    inset 0.5px 0.5px 2px rgba(1, 31, 47, 0.15), /* no token: Figma 937:5222 inner shadow, not an effect style */
    inset -0.5px -0.5px 2px rgba(1, 31, 47, 0.05); /* no token: Figma 937:5222 inner shadow, not an effect style */
}
.root[data-pressed] {
  transform: scale(var(--search-motion-summary-press-scale));
  transition-duration: var(--_press-in);
}
.root:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.root:disabled {
  cursor: default;
  opacity: 0.5;
}

/* a 40 px slot, 12 px on the left, then the 24 px mark box (Figma mtravel-icon 1003:5955: a 20 px mark drawn in 24) */
.lead {
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 40px;
  padding-left: var(--spacing-md);
}

.text {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}
.title,
.subtitle {
  display: block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.title {
  font: var(--font-im-14-s);
  letter-spacing: var(--tracking-im-14-s);
  color: var(--_title);
}
.subtitle {
  font: var(--font-im-12-r);
  letter-spacing: var(--tracking-im-12-r);
  color: var(--_sub);
}
.root[data-variant='dark'] .subtitle {
  opacity: 0.9; /* Figma: control/text/inverse-secondary at 90 % */
}
.root[data-variant='glass'] .subtitle {
  opacity: 0.9;
}

.chevron {
  display: grid;
  flex: none;
  place-items: center;
  width: 40px;
  color: var(--_chev);
}
.chevron > svg {
  display: block;
  width: 14px;
  height: 14px;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .root[data-pressed] {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .root[data-pressed] {
  transform: none;
}
`;function s(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"searchsummary",children:"SearchSummary"}),`
`,n.jsxs(e.p,{children:["Свёрнутая форма поиска: таблетка 44 px, в ней запрос в две строки и шеврон. Тап раскрывает форму снова. Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=806-5570",rel:"nofollow",children:"search 806:5570"})," (Property 1 = filter, filter 2, 3)."]}),`
`,n.jsxs(e.p,{children:["Это кнопка, а не поле ввода. Для ввода есть ",n.jsx(e.a,{href:"?path=/docs/components-search--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Search"}),"."]}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(l,{of:o}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { SearchSummary } from '@mtravel/ui';

<SearchSummary variant="light" title="Кыргызстан, Бишкек" subtitle="29 мая, 1 участник" onClick={openForm} />
`})}),`
`,n.jsxs(e.p,{children:["Первая строка IM-14 S, вторая IM-12 R, слева знак Mtravel (",n.jsx(e.code,{children:"MtravelMark"})," в квадрате 24 px, сам знак 20 px шириной), справа шеврон 14 px. Вместо знака можно передать ",n.jsx(e.code,{children:"icon"})," или убрать его (",n.jsx(e.code,{children:"icon={null}"}),")."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Вариант"}),n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Фон"}),n.jsx(e.th,{children:"Текст"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:[n.jsx(e.code,{children:"dark"})," (по умолчанию)"]}),n.jsx(e.td,{children:"filter"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"control/bg/selected"})}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/text/inverse"}),", подпись ",n.jsx(e.code,{children:"control/text/inverse-secondary"})," с прозрачностью 0.9"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"glass"})}),n.jsx(e.td,{children:"filter 2"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/overlay/default"})," 64 % с размытием ",n.jsx(e.code,{children:"blur/bg-12"}),", кольцо ",n.jsx(e.code,{children:"badge/border/default"})," 5 %"]}),n.jsxs(e.td,{children:["как у ",n.jsx(e.code,{children:"dark"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:n.jsx(e.code,{children:"light"})}),n.jsx(e.td,{children:"3"}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/default"}),", кольцо ",n.jsx(e.code,{children:"badge/border/default"})," 5 %"]}),n.jsxs(e.td,{children:["заголовок ",n.jsx(e.code,{children:"control/text/default"}),", подпись ",n.jsx(e.code,{children:"control/text/secondary"})]})]})]})]}),`
`,n.jsxs(e.p,{children:["Свойства: ",n.jsx(e.code,{children:"title"}),", ",n.jsx(e.code,{children:"subtitle"}),", ",n.jsx(e.code,{children:"variant"}),", ",n.jsx(e.code,{children:"icon"}),", ",n.jsx(e.code,{children:"disabled"}),", ",n.jsx(e.code,{children:"onClick"}),". Это кнопка, поэтому остальные атрибуты кнопки (",n.jsx(e.code,{children:"aria-*"}),", ",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"type"}),") тоже работают. ",n.jsx(e.code,{children:"forcePressed"})," нужен только для документации и скриншотов."]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.p,{children:["Нажатие как у Button: масштаб 0.97 на ",n.jsx(e.code,{children:"pointerdown"}),", мягче при отпускании. Отклик идёт через ",n.jsx(e.code,{children:"usePress"}),", поэтому работает и на iOS. На reduced motion только цвет."]}),`
`,n.jsx(x,{prefix:"--search-motion-summary"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Каталог."})," Сверху свёрнутый поиск «Кыргызстан, Бишкек · 29 мая, 1 участник», под ним значок всех фильтров и быстрые фильтры в одну прокручиваемую строку."]}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Настоящая ",n.jsx(e.code,{children:"<button>"}),"; её имя состоит из обеих строк. Высота не меньше 44 px."]}),`
`,n.jsxs(e.li,{children:["Фокус с клавиатуры виден обводкой ",n.jsx(e.code,{children:"color/border/focus"}),"."]}),`
`]}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"Значение"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Знак Mtravel, жёлтая часть (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1056-87",rel:"nofollow",children:"1056:87"}),")"]}),n.jsxs(e.td,{children:["сырой #F9BE00; синяя часть теперь ",n.jsx(e.code,{children:"--color-brand-primary"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Вариант ",n.jsx(e.code,{children:"light"})," (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=937-5222",rel:"nofollow",children:"937:5222"}),")"]}),n.jsxs(e.td,{children:["две внутренние тени без стиля эффекта, сырые ",n.jsx(e.code,{children:"rgba(1,31,47,…)"})]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Кольцо ",n.jsx(e.code,{children:"glass"})," и ",n.jsx(e.code,{children:"light"})]}),n.jsxs(e.td,{children:["в Figma обводка ",n.jsx(e.code,{children:"badge/border/default"})," (уже с прозрачностью) ещё и с прозрачностью слоя 5 %, итого почти невидимая. Код повторяет Figma, исправлять надо в макете"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Стекло ",n.jsx(e.code,{children:"glass"})]}),n.jsxs(e.td,{children:[n.jsx(e.code,{children:"control/bg/overlay/default"})," (уже 64 %) ещё и с прозрачностью слоя 64 %, итого около 41 %. Так же в макете"]})]}),n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["Шеврон (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1003-5966",rel:"nofollow",children:"1003:5966"}),")"]}),n.jsx(e.td,{children:"14 px, обводка 1.17 (иконку просто уменьшили), у Chips тот же шеврон 14 px с обводкой 1.4. В коде 1.4, как у Chips — вопрос к дизайну"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Описание компонента"}),n.jsx(e.td,{children:"в Figma пустое"})]})]})]}),`
`,n.jsx(m,{css:j})]})}function K(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{K as default};
