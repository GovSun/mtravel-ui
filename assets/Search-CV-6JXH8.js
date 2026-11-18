import{j as e}from"./iframe-DuqTOznb.js";import{u as d,M as t,C as s,a as l}from"./blocks-CaaIEU4k.js";import{S as o,P as i,a,b as h,L as x}from"./Search.stories-D3NAF1LK.js";import{M as j,U as m}from"./DocTables-DRoO9HBp.js";import{s as p}from"./field.module-s5tBmoIY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Search-qejZ8oNQ.js";import"./useControllableState-QyUXWn2y.js";import"./mergeRefs-BPT53vMC.js";import"./cx-2dOUpm6k.js";import"./SlotIcon-Pgp7E4sy.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./general-DYSfllt2.js";import"./Svg-B1-TtxWQ.js";import"./paths-BjPgyxdS.js";import"./LeadingIcon-B28I7Mlv.js";import"./Skeleton-D5GPHumj.js";import"./motion-C-Q-avtg.js";import"./tokens-INIU3VNa.js";const u=`/*
 * Search (Figma 324:1260): 44 px search field with a glass. The box, slot, native input and clear × are shared with
 * Field and Select (lib/field); this file sets Search's own tokens (--search-*) on them through private --_* vars.
 */
.root {
  --_h: 44px;
  --_pr: 12px; /* Figma Default: padding-right 12 (Focused: 8, with the clear ×) */
  --_state: calc(var(--search-motion-state-duration) * var(--motion-scale));
  --_state-ease: var(--search-motion-state-easing);
  --_clear-in: calc(var(--search-motion-clear-in-duration) * var(--motion-scale));
  --_clear-out: calc(var(--search-motion-clear-out-duration) * var(--motion-scale));
  --_clear-ease: var(--search-motion-clear-easing);
  --_clear-from: var(--search-motion-clear-from-scale);
  --_bg: var(--control-bg-default);
  --_icon: var(--control-icon-primary); /* Figma Default and Focused: the glass is icon/primary */
  --_text: var(--control-text-default);
  --_placeholder: var(--control-text-secondary); /* Figma Placeholder: IM-16 M, control/text/secondary */

  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
}
/* Figma State=Focused: the same grey (control/bg/default), the × slot takes 4 px of the right padding */
.root[data-focused] {
  --_pr: var(--spacing-sm);
}
.root[data-disabled] {
  --_bg: var(--control-bg-disabled);
  --_icon: var(--control-icon-disabled);
  --_text: var(--control-text-disabled);
  --_placeholder: var(--control-text-disabled);
}

.field {
  composes: box from '../../lib/field/field.module.css';
}
.root[data-disabled] .field {
  cursor: default;
}


/* one line with a real placeholder «Поиск» */
.text {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  align-self: stretch;
  min-width: 0;
  padding: 0 var(--spacing-md) 0 var(--spacing-sm);
}
.input {
  composes: input from '../../lib/field/field.module.css';
  height: 20px;
}
`;function c(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"search",children:"Search"}),`
`,e.jsxs(n.p,{children:["Поле поиска, 44 px, с лупой слева. Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=324-1260",rel:"nofollow",children:"Search 324:1260"}),"."]}),`
`,e.jsxs(n.p,{children:["Это отдельный компонент, не вариант Field: он ниже, у него нет подписи, а у Default и Focused один и тот же серый фон: в фокусе меняется только то, что в поле есть курсор и крестик. Для обычного ввода есть ",e.jsx(n.a,{href:"?path=/docs/components-field--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Field"}),", для выбора из списка — ",e.jsx(n.a,{href:"?path=/docs/components-select--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Select"}),"."]}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Search } from '@mtravel/ui';

<Search value={query} onValueChange={setQuery} onSearch={run} />
`})}),`
`,e.jsx(n.h2,{id:"состояния-и-токены",children:"Состояния и токены"}),`
`,e.jsx(s,{of:a}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"State (Figma)"}),e.jsx(n.th,{children:"Когда"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Лупа"}),e.jsx(n.th,{children:"Текст"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Default"}),e.jsx(n.td,{children:"без фокуса"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/primary"})}),e.jsxs(n.td,{children:["плейсхолдер «Поиск» IM-16 M ",e.jsx(n.code,{children:"control/text/secondary"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Focused"}),e.jsx(n.td,{children:"в поле курсор"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/default"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/primary"})}),e.jsxs(n.td,{children:["запрос IM-16 M ",e.jsx(n.code,{children:"control/text/default"}),", справа крестик (Show clear), когда есть текст"]})]})]})]}),`
`,e.jsx(n.h2,{id:"свёрнутый-поиск",children:"Свёрнутый поиск"}),`
`,e.jsxs(n.p,{children:["Рядом в Figma есть ещё компонент ",e.jsx(n.code,{children:"search"})," (806:5570): это не поле ввода, а кнопка-таблетка со свёрнутой формой. У него своя страница: ",e.jsx(n.a,{href:"?path=/docs/components-searchsummary--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SearchSummary"}),"."]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Выбор города или места."})," Плейсхолдер «Город или место», запрос «Кыргызстан»."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h2,{id:"анимации",children:"Анимации"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Крестик «очистить»"})," появляется, когда есть текст: вырастает с 0.5 до 1 с лёгким перелётом за 300 мс, как в Chips, и уходит за 180 мс. Тап по нему не уводит фокус."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion"}),": крестик только проявляется, без роста."]}),`
`]}),`
`,e.jsx(j,{prefix:"--search-"}),`
`,e.jsx(n.h2,{id:"клавиатура-и-длинный-запрос",children:"Клавиатура и длинный запрос"}),`
`,e.jsx(s,{of:x}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Внутри ",e.jsx(n.code,{children:'<input type="search">'}),", поэтому на телефоне на клавиатуре кнопка «Найти». Enter и «Найти» вызывают ",e.jsx(n.code,{children:"onSearch"}),", Escape очищает поле."]}),`
`,e.jsx(n.li,{children:"Длинный запрос в покое заканчивается «…», при вводе прокручивается за кареткой."}),`
`,e.jsxs(n.li,{children:["Крестик остаётся, пока фокус внутри поля, поэтому до него можно дойти табом. Он очищает запрос через ",e.jsx(n.code,{children:"onValueChange('')"})," и ",e.jsx(n.code,{children:"onClear"}),", нативный ",e.jsx(n.code,{children:"onChange"})," не вызывается."]}),`
`]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["У поля роль ",e.jsx(n.code,{children:"search"}),". ",e.jsx(n.code,{children:"placeholder"})," по умолчанию становится именем поля, другое имя задаётся через ",e.jsx(n.code,{children:"aria-label"}),"."]}),`
`,e.jsxs(n.li,{children:["Клавиатура настроена под поиск: ",e.jsx(n.code,{children:'inputMode="search"'}),", без автозаполнения, заглавных и автоисправления (названия мест автоисправление портит)."]}),`
`,e.jsx(n.li,{children:"Крестик нажимается областью 44 × 44 и откликается сразу при касании, в том числе на iOS."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"className"})," и ",e.jsx(n.code,{children:"style"})," попадают на корень, ",e.jsx(n.code,{children:"ref"})," и остальные атрибуты на ",e.jsx(n.code,{children:"<input>"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"отличия-от-figma",children:"Отличия от Figma"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"В Figma"}),e.jsx(n.th,{children:"В коде"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Лупа"}),e.jsxs(n.td,{children:["Leading icon 32 px с ",e.jsx(n.code,{children:"search-alt"})," Linear: только контур, обводка ",e.jsx(n.code,{children:"icon/primary"})]}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/icon/primary"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Отступ справа"}),e.jsx(n.td,{children:"Default 12, Focused 8 (место под крестик)"}),e.jsx(n.td,{children:"так же"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Disabled"}),e.jsx(n.td,{children:"нет"}),e.jsxs(n.td,{children:["фон ",e.jsx(n.code,{children:"control/bg/disabled"}),", лупа и текст ",e.jsx(n.code,{children:"control/*/disabled"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.p,{children:["В Search значений без токена нет: всё из ",e.jsx(n.code,{children:"control/*"})," и ",e.jsx(n.code,{children:"radius/lg"}),"."]}),`
`,e.jsx(m,{css:[u,p]})]})}function V(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{V as default};
