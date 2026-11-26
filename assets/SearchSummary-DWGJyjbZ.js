import{j as e}from"./iframe-DyD5Yel4.js";import{u as i,M as d,C as t,a}from"./blocks-CcI75u3-.js";import{S as l,P as o,V as c}from"./SearchSummary.stories-B5kq8mQV.js";import{M as h,U as x}from"./DocTables-D5FjzMKu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./SearchSummary-yWxmhw0k.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./cx-2dOUpm6k.js";import"./mtravel-mark-Cb55PF4C.js";import"./Svg-B7GM2ZFd.js";import"./arrows-0JYTYJZi.js";import"./tokens-Bc2_NrJ2.js";const m=`/*
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
`;function s(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"searchsummary",children:"SearchSummary"}),`
`,e.jsxs(n.p,{children:["Свёрнутая форма поиска: таблетка 44 px, в ней запрос в две строки и шеврон. Тап раскрывает форму снова. Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=806-5570",rel:"nofollow",children:"search 806:5570"})," (Property 1 = filter, filter 2, 3)."]}),`
`,e.jsxs(n.p,{children:["Это кнопка, а не поле ввода. Для ввода есть ",e.jsx(n.a,{href:"?path=/docs/components-search--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Search"}),"."]}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(a,{of:o}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SearchSummary } from '@mtravel/ui';

<SearchSummary variant="light" title="Кыргызстан, Бишкек" subtitle="29 мая, 1 участник" onClick={openForm} />
`})}),`
`,e.jsxs(n.p,{children:["Первая строка IM-14 S, вторая IM-12 R, слева знак Mtravel (",e.jsx(n.code,{children:"MtravelMark"})," в квадрате 24 px, сам знак 20 px шириной), справа шеврон 14 px. Вместо знака можно передать ",e.jsx(n.code,{children:"icon"})," или убрать его (",e.jsx(n.code,{children:"icon={null}"}),")."]}),`
`,e.jsx(n.h2,{id:"варианты",children:"Варианты"}),`
`,e.jsx(t,{of:c}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Вариант"}),e.jsx(n.th,{children:"Figma"}),e.jsx(n.th,{children:"Фон"}),e.jsx(n.th,{children:"Текст"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"dark"})," (по умолчанию)"]}),e.jsx(n.td,{children:"filter"}),e.jsx(n.td,{children:e.jsx(n.code,{children:"control/bg/selected"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/text/inverse"}),", подпись ",e.jsx(n.code,{children:"control/text/inverse-secondary"})," с прозрачностью 0.9"]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"glass"})}),e.jsx(n.td,{children:"filter 2"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/bg/overlay/default"})," 64 % с размытием ",e.jsx(n.code,{children:"blur/bg-12"}),", кольцо ",e.jsx(n.code,{children:"badge/border/default"})," 5 %"]}),e.jsxs(n.td,{children:["как у ",e.jsx(n.code,{children:"dark"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"light"})}),e.jsx(n.td,{children:"3"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/bg/default"}),", кольцо ",e.jsx(n.code,{children:"badge/border/default"})," 5 %"]}),e.jsxs(n.td,{children:["заголовок ",e.jsx(n.code,{children:"control/text/default"}),", подпись ",e.jsx(n.code,{children:"control/text/secondary"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["Свойства: ",e.jsx(n.code,{children:"title"}),", ",e.jsx(n.code,{children:"subtitle"}),", ",e.jsx(n.code,{children:"variant"}),", ",e.jsx(n.code,{children:"icon"}),", ",e.jsx(n.code,{children:"disabled"}),", ",e.jsx(n.code,{children:"onClick"}),". Это кнопка, поэтому остальные атрибуты кнопки (",e.jsx(n.code,{children:"aria-*"}),", ",e.jsx(n.code,{children:"data-*"}),", ",e.jsx(n.code,{children:"type"}),") тоже работают. ",e.jsx(n.code,{children:"forcePressed"})," нужен только для документации и скриншотов."]}),`
`,e.jsx(n.h2,{id:"анимация",children:"Анимация"}),`
`,e.jsxs(n.p,{children:["Нажатие как у Button: масштаб 0.97 на ",e.jsx(n.code,{children:"pointerdown"}),", мягче при отпускании. Отклик идёт через ",e.jsx(n.code,{children:"usePress"}),", поэтому работает и на iOS. На reduced motion только цвет."]}),`
`,e.jsx(h,{prefix:"--search-motion-summary"}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(n.p,{children:"В дизайне «Выходные» свёрнутой формы поиска (SearchSummary) не найдено: на экранах поиска и результатов Appbar остаётся в развёрнутом виде с полем Search. Кейсов без реального использования не показываем."}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds-и-проблемы-figma",children:"Без токенов в DS и проблемы Figma"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Что"}),e.jsx(n.th,{children:"Значение"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Знак Mtravel, жёлтая часть (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1056-87",rel:"nofollow",children:"1056:87"}),")"]}),e.jsxs(n.td,{children:["сырой #F9BE00; синяя часть теперь ",e.jsx(n.code,{children:"--color-brand-primary"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Вариант ",e.jsx(n.code,{children:"light"})," (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=937-5222",rel:"nofollow",children:"937:5222"}),")"]}),e.jsxs(n.td,{children:["две внутренние тени без стиля эффекта, сырые ",e.jsx(n.code,{children:"rgba(1,31,47,…)"})]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Кольцо ",e.jsx(n.code,{children:"glass"})," и ",e.jsx(n.code,{children:"light"})]}),e.jsxs(n.td,{children:["в Figma обводка ",e.jsx(n.code,{children:"badge/border/default"})," (уже с прозрачностью) ещё и с прозрачностью слоя 5 %, итого почти невидимая. Код повторяет Figma, исправлять надо в макете"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Стекло ",e.jsx(n.code,{children:"glass"})]}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"control/bg/overlay/default"})," (уже 64 %) ещё и с прозрачностью слоя 64 %, итого около 41 %. Так же в макете"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:["Шеврон (",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1003-5966",rel:"nofollow",children:"1003:5966"}),")"]}),e.jsx(n.td,{children:"14 px, обводка 1.17 (иконку просто уменьшили), у Chips тот же шеврон 14 px с обводкой 1.4. В коде 1.4, как у Chips — вопрос к дизайну"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Описание компонента"}),e.jsx(n.td,{children:"в Figma пустое"})]})]})]}),`
`,e.jsx(x,{css:m})]})}function C(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{C as default};
