import{j as n}from"./iframe-DuqTOznb.js";import{u as t,M as a,C as s,a as o}from"./blocks-CaaIEU4k.js";import{L as c,P as r,V as l,C as h}from"./LimitBadge.stories-Bj-9cVAH.js";import{U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./Badge-Dbn3uc4E.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./arrows-C0H-naDa.js";import"./Svg-B1-TtxWQ.js";import"./brand-CPAyMEOK.js";import"./tokens-INIU3VNa.js";const j=`/*
 * Badge limit (Figma 837:2199): the glass of Badge with the orange gradient on top. The gradient is raw in Figma
 * (no variable): amber at the top, orange at the bottom, 165° (gradientTransform of the fill).
 */
.limit.limit {
  background-image: linear-gradient(165.5deg, #fbbf24 3.8%, #ea580c 104.2%); /* no token: Figma 837:2199 */
}
`;function d(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"limit-badge",children:"Limit badge"}),`
`,n.jsxs(e.p,{children:["Оранжевая плашка с меткой «M+» и суммой, например «150 000 ⃀». Лежит на фото, как ",n.jsx(e.a,{href:"?path=/docs/components-badge--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Badge"}),", и показывает лимит, который можно потратить."]}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=837-2199",rel:"nofollow",children:"badge_limit 837:2199"}),". Один размер, 24 px."]}),`
`,n.jsx(s,{of:r}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { LimitBadge } from '@mtravel/ui';

<LimitBadge>150 000 ⃀</LimitBadge>
`})}),`
`,n.jsxs(e.p,{children:["Это Badge (Size 24, Dark) с градиентом поверх стекла и меткой M+ 16 px вместо стрелки. ",n.jsx(e.code,{children:"onClick"})," и ",n.jsx(e.code,{children:"href"})," работают так же, как у Badge."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(s,{of:l}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"Лимит на фото карточки: плашка стоит в левом верхнем углу, на 12 px от краёв."}),`
`,n.jsx(s,{of:h}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"ref"})," и остальные атрибуты попадают на корневой элемент (",n.jsx(e.code,{children:"span"}),", ",n.jsx(e.code,{children:"button"})," или ",n.jsx(e.code,{children:"a"}),")."]}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Градиент"}),n.jsx(e.td,{children:"два цвета без переменной, угол около 165°"}),n.jsx(e.td,{children:"те же цвета, без токена"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Метка M+"}),n.jsx(e.td,{children:"слой «Icons / Services» из библиотеки, заливка не привязана"}),n.jsxs(e.td,{children:["иконка ",n.jsx(e.code,{children:"MPlusIcon"}),", цвет ",n.jsx(e.code,{children:"icon/inverse/constant/primary"})]})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Скрытые слои"}),n.jsx(e.td,{children:"второй M+ 12 px и earth скрыты"}),n.jsx(e.td,{children:"не переносим"})]})]})]}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Градиент плашки: #fbbf24 → #ea580c, 165° (Figma 837:2199)."}),`
`,n.jsx(e.li,{children:"Скругление 8 px (как у Badge)."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Белый текст на градиенте: контраст 1.7:1 вверху (амбер) и 3.6:1 внизу (оранжевый), ниже нормы 4.5:1 (для крупного жирного текста 3:1). Это значения из Figma, нужно решение дизайна: темнее верхний цвет. Смысл не держится на цвете: сумма написана."}),`
`,n.jsxs(e.li,{children:["Метка M+ декоративная (",n.jsx(e.code,{children:"aria-hidden"}),")."]}),`
`]})]})}function k(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(d,{...i})}):d(i)}export{k as default};
