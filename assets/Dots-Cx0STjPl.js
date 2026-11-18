import{j as n}from"./iframe-DuqTOznb.js";import{u as r,M as d,C as t,a as c}from"./blocks-CaaIEU4k.js";import{D as a,P as o,V as l,I as h,C as x}from"./Dots.stories-QZ3qS49h.js";import{M as j,U as p}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./Button-CKwNO4NU.js";import"./motion-C-Q-avtg.js";import"./tokens-INIU3VNa.js";const m=`/*
 * Dots: the page indicator. The dot is the Figma Dot 883:4909: 6 px, bg/inverse/surface, opacity 0.2 when not selected.
 * Opacity 0.2 is the Figma value of the state and has no token. The gap between dots is not in Figma (only the
 * single Dot is): spacing/sm.
 */
.root {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.dot {
  --_switch: calc(var(--dots-motion-switch-duration) * var(--motion-scale));
  --_press-out: calc(var(--dots-motion-press-out-duration) * var(--motion-scale));

  display: block;
  flex: none;
  width: 6px; /* no token: Figma 883:4910 */
  height: 6px; /* no token: Figma 883:4910 */
  border-radius: var(--radius-full);
  background-color: var(--color-bg-inverse-surface);
  opacity: 0.2; /* no token: Figma 883:4911 */
  transition:
    opacity var(--_switch) var(--dots-motion-switch-easing),
    transform var(--_press-out) var(--dots-motion-press-easing);
}
.dot[data-selected] {
  opacity: 1;
}

.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}
/*
 * Hit slop: 44 px high; 14 px (dot 6 + gap 8) wide, so the targets of neighbours meet and do not overlap, and the two
 * outer dots reach 44 px outwards. A wider target between dots is impossible at this pitch.
 */
.button::before {
  content: '';
  position: absolute;
  inset: -19px -4px;
}
.button:first-child::before {
  left: -19px;
}
.button:last-child::before {
  right: -19px;
}
.button[data-pressed] .dot {
  transform: scale(var(--dots-motion-press-scale));
  transition-duration: var(--_switch), calc(var(--dots-motion-press-in-duration) * var(--motion-scale));
}
.button:focus-visible .dot {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  :global(:root:not([data-motion='normal'])) .button[data-pressed] .dot {
    transform: none;
  }
}
:global(:root[data-motion='reduce']) .button[data-pressed] .dot {
  transform: none;
}
`;function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:a}),`
`,n.jsx(e.h1,{id:"dots",children:"Dots"}),`
`,n.jsxs(e.p,{children:["Точки страниц карусели: сколько страниц и на какой мы сейчас. В Figma есть одна точка (",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=883-4909",rel:"nofollow",children:"Dot 883:4909"}),", Selected? = True | False), в коде есть и она (",n.jsx(e.code,{children:"Dot"}),"), и готовая полоска из ",n.jsx(e.code,{children:"count"})," точек (",n.jsx(e.code,{children:"Dots"}),")."]}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(c,{of:o}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Dots } from '@mtravel/ui';

// индикатор: страницами управляет карусель
<Dots count={photos.length} index={current} />

// точки можно нажимать
<Dots count={5} index={current} onIndexChange={setCurrent} />
`})}),`
`,n.jsx(e.h2,{id:"состояния",children:"Состояния"}),`
`,n.jsx(t,{of:l}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Figma"}),n.jsx(e.th,{children:"Вид"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected?=True"}),n.jsxs(e.td,{children:["6 px круг ",n.jsx(e.code,{children:"bg/inverse/surface"}),", непрозрачность 100 %"]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Selected?=False"}),n.jsx(e.td,{children:"тот же круг, непрозрачность 20 %"})]})]})]}),`
`,n.jsxs(e.p,{children:["Зазор между точками в Figma не задан, у нас ",n.jsx(e.code,{children:"spacing/sm"})," (8). Точки не меняют размер, чтобы полоска не прыгала."]}),`
`,n.jsx(e.h2,{id:"переключение",children:"Переключение"}),`
`,n.jsx(t,{of:h}),`
`,n.jsx(e.p,{children:"Новая точка разгорается, прежняя гаснет, обе за 160 мс по прозрачности. Это CSS-переход: при быстром пролистывании нескольких страниц ничего не копится в очереди, каждая точка идёт к своему значению с того места, где она сейчас."}),`
`,n.jsxs(e.p,{children:["С ",n.jsx(e.code,{children:"onIndexChange"})," каждая точка — кнопка (",n.jsx(e.code,{children:"aria-current"})," у текущей, имя «Страница 2 из 5»). Зона нажатия 44 px по высоте и 14 px по ширине (точка 6 + зазор 8), чтобы соседние не перекрывались; у крайних точек зона уходит наружу на 44 px. Шире нельзя, пока шаг точек 14 px. При нажатии точка сжимается до 0.7. ",n.jsx(e.code,{children:"onIndexChange"})," называется так, а не ",n.jsx(e.code,{children:"onValueChange"}),", потому что это не значение формы, а номер страницы."]}),`
`,n.jsx(e.h2,{id:"анимация",children:"Анимация"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Переключение:"})," только ",n.jsx(e.code,{children:"opacity"}),", 160 мс, ",n.jsx(e.code,{children:"ease"})," (это смена состояния, не движение)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Нажатие на точку:"})," сжатие с первого касания, возврат мягче."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," прозрачность остаётся, сжатия нет."]}),`
`]}),`
`,n.jsx(j,{prefix:"--dots-"}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Галерея под обложкой экскурсии."}),`
`,n.jsx(t,{of:x}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Полоска точек"}),n.jsx(e.td,{children:"нет, только одна точка"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"Dots"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Зазор между точками"}),n.jsx(e.td,{children:"не задан"}),n.jsx(e.td,{children:n.jsx(e.code,{children:"spacing/sm"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Цвет на фото"}),n.jsxs(e.td,{children:["только ",n.jsx(e.code,{children:"bg/inverse/surface"})," (тёмный), на тёмном фото точек не видно"]}),n.jsx(e.td,{children:"один цвет, как в Figma. Нужен вариант для фото"})]})]})]}),`
`,n.jsx(p,{css:m}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Размер точки 6 px и непрозрачность 20 % (Figma 883:4910, 883:4911)."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"aria-label"})," всегда называет индикатор («Страницы» по умолчанию, например «Фото»). Без ",n.jsx(e.code,{children:"onIndexChange"})," это ",n.jsx(e.code,{children:'role="img"'})," с подписью «Фото: 2 из 5»: скринридер читает одну фразу вместо пяти точек."]}),`
`,n.jsxs(e.li,{children:["С ",n.jsx(e.code,{children:"onIndexChange"})," это группа с тем же именем и кнопки «Страница 2 из 5», у текущей ",n.jsx(e.code,{children:"aria-current"}),"; фокус видимый. Стрелки между точками не переключают: если карусели это нужно, обработайте их у владельца карусели."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты (",n.jsx(e.code,{children:"data-*"}),", ",n.jsx(e.code,{children:"id"}),") попадают на корневой ",n.jsx(e.code,{children:"div"}),"."]}),`
`,n.jsx(e.li,{children:"Не полагайся на яркость как на единственный признак на очень светлом фоне: у карусели должны быть другие способы листать."}),`
`]})]})}function I(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{I as default};
