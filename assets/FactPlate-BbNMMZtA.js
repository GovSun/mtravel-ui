import{j as n}from"./iframe-DuqTOznb.js";import{u as a,M as d,C as t,a as o}from"./blocks-CaaIEU4k.js";import{F as l,P as i,V as c,C as h}from"./FactPlate.stories-Cgceg97m.js";import{U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./FactPlate-BUAmB4hm.js";import"./cx-2dOUpm6k.js";import"./tokens-INIU3VNa.js";const j=`/*
 * Fact plate (Figma 883:4879, 64 × 77): Default — month strip 27 px, body 50 px; Variant2 (glass) — the strip is 25 px
 * under the plate's 1 px inner stroke, the body ends 1 px above the bottom. Month IM-14 R, day IM-20 B, time IM-12 M.
 * Radius 16 is not bound to a variable in Figma (it equals radius/lg). The strip of Default is bound to the primitive
 * red/400 in Figma, not to a theme token.
 */
.root {
  --_bg: var(--color-bg-surface);
  --_ring: var(--control-border-overlay-default);
  --_strip-bg: var(--color-base-red-400); /* Figma 883:4882 binds the primitive color/base/red/400 */
  --_strip-line: var(--color-border-default);
  --_day: var(--control-text-default);
  --_time: var(--control-text-tertiary);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;
  width: 64px; /* no token: Figma 883:4880 */
  overflow: hidden;
  border-radius: var(--radius-lg);
  background-color: var(--_bg);
  box-shadow: inset 0 0 0 var(--border-width-hairline) var(--_ring);
  text-align: center;
}
.root[data-variant='glass'] {
  --_bg: var(--control-bg-overlay-default);
  --_strip-bg: transparent;
  --_strip-line: var(--control-border-overlay-default);
  --_day: var(--control-text-inverse);
  --_time: var(--control-text-inverse-secondary);
}

.month {
  display: block;
  padding: 5px 0; /* no token: Figma 883:4882, the text 5 px from the top of a 27 px strip */
  border-bottom: 1px solid var(--_strip-line); /* no token: Figma 883:4882 stroke weight 1 */
  background-color: var(--_strip-bg);
  color: var(--control-text-inverse);
  font: var(--font-im-14-r);
  letter-spacing: var(--tracking-im-14-r);
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xs) 0 var(--spacing-sm);
}
/* Variant2: the strip and the body sit inside the 1 px inner stroke (Figma: strip 25 at y 1, body 50 at y 26) */
.root[data-variant='glass'] .month {
  padding-bottom: var(--spacing-xs);
}
.root[data-variant='glass'] .body {
  padding-bottom: calc(var(--spacing-sm) + 1px); /* no token: the 1 px inner stroke under the body */
}
.day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px; /* no token: Figma 883:4885 */
  color: var(--_day);
  font: var(--font-im-20-b);
  letter-spacing: var(--tracking-im-20-b);
}
.time {
  color: var(--_time);
  font: var(--font-im-12-m);
  letter-spacing: var(--tracking-im-12-m);
}
`;function s(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(r.h1,{id:"fact-plate",children:"Fact plate"}),`
`,n.jsx(r.p,{children:"«Плашка-факт»: дата одним взглядом. Сверху месяц на цветной полосе, под ним крупное число и время. Используется для слота экскурсии («17 дек, 18:00»). Для обычной даты в тексте плашка не нужна."}),`
`,n.jsxs(r.p,{children:["Figma: ",n.jsx(r.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4879",rel:"nofollow",children:"Плашка-факт 883:4879"}),": Property 1 = Default | Variant2."]}),`
`,n.jsx(t,{of:i}),`
`,n.jsx(o,{of:i}),`
`,n.jsx(r.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:`import { FactPlate } from '@mtravel/ui';

<FactPlate month="дек" day="17" time="18:00" />
<FactPlate variant="glass" month="дек" day="17" time="18:00" />  // поверх фото
`})}),`
`,n.jsx(r.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(t,{of:c}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Figma"}),n.jsx(r.th,{children:"Props"}),n.jsx(r.th,{children:"Вид"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Property 1=Default"}),n.jsx(r.td,{children:n.jsx(r.code,{children:'variant="default"'})}),n.jsx(r.td,{children:"белая, красная полоса месяца"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Property 1=Variant2"}),n.jsx(r.td,{children:n.jsx(r.code,{children:'variant="glass"'})}),n.jsx(r.td,{children:"тёмное стекло для обложки, полоса без заливки"})]})]})]}),`
`,n.jsxs(r.p,{children:["Ширина 64, высота по содержимому (77): у Default полоса 27 и тело 50; у Variant2 полоса 25 и тело 50 внутри обводки 1 px. Месяц IM-14 R, число IM-20 B, время IM-12 M. Скругление 16 (",n.jsx(r.code,{children:"radius/lg"}),")."]}),`
`,n.jsx(r.p,{children:"В Figma у варианта нет понятного имени: Variant2 назван «glass» по тому, как он выглядит. Лучше переименовать."}),`
`,n.jsx(r.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(r.p,{children:"Слот на обложке детальной страницы (Figma 1606:174750)."}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(r.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(r.table,{children:[n.jsx(r.thead,{children:n.jsxs(r.tr,{children:[n.jsx(r.th,{children:"Что"}),n.jsx(r.th,{children:"В Figma"}),n.jsx(r.th,{children:"В коде"})]})}),n.jsxs(r.tbody,{children:[n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Полоса Default"}),n.jsxs(r.td,{children:["привязана к примитиву ",n.jsx(r.code,{children:"color/base/red/400"}),", а не к семантическому токену (есть ",n.jsx(r.code,{children:"bg/notification"})," с тем же значением)"]}),n.jsxs(r.td,{children:[n.jsx(r.code,{children:"--color-base-red-400"}),". Стоит привязать к семантике"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Скругление 16"}),n.jsx(r.td,{children:"не привязано к переменной"}),n.jsxs(r.td,{children:[n.jsx(r.code,{children:"radius/lg"}),", значение то же"]})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Размер тела в Variant2"}),n.jsx(r.td,{children:"66 px шире плашки 64, 2 px обрезаются"}),n.jsx(r.td,{children:"64, без обрезки"})]}),n.jsxs(r.tr,{children:[n.jsx(r.td,{children:"Слой Icon"}),n.jsx(r.td,{children:"скрытый флаг-плейсхолдер"}),n.jsx(r.td,{children:"не переносим"})]})]})]}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(r.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Ширина 64, высота числа 24, толщина линии под месяцем 1 px, текст месяца на 5 px от верха полосы."}),`
`,n.jsx(r.li,{children:"Привязка красной полосы к примитиву (см. таблицу выше)."}),`
`]}),`
`,n.jsx(r.h2,{id:"атрибуты-и-ref",children:"Атрибуты и ref"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"ref"})," и остальные атрибуты (",n.jsx(r.code,{children:"data-*"}),", ",n.jsx(r.code,{children:"id"}),", ",n.jsx(r.code,{children:"aria-*"}),", обработчики) попадают на корневой элемент."]}),`
`,n.jsx(r.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["У плашки ",n.jsx(r.code,{children:'role="group"'})," и название «17 дек, 18:00»: скринридер читает дату одной фразой."]}),`
`,n.jsxs(r.li,{children:["Белый текст на ",n.jsx(r.code,{children:"red/400"}),": контраст 3.7:1, текст 14 px обычный, ниже нормы 4.5:1. Значения из Figma, нужно решение дизайна: темнее красный или жирнее шрифт."]}),`
`]})]})}function k(e={}){const{wrapper:r}={...a(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{k as default};
