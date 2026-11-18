import{j as n}from"./iframe-DuqTOznb.js";import{u as t,M as d,C as i,a as o}from"./blocks-CaaIEU4k.js";import{F as c,P as r,V as l,C as h}from"./FeatureBadge.stories-BVbN58ui.js";import{U as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./cx-2dOUpm6k.js";import"./places-z-kxph-t.js";import"./Svg-B1-TtxWQ.js";import"./tokens-INIU3VNa.js";const j=`/* Feature badge (Figma 182:4). */
.root {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  gap: var(--spacing-sm);
  min-height: 48px;
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  background-color: var(--color-bg-sunken-subtle);
  color: var(--control-text-default);
}
.icon {
  display: flex;
  flex: none;
  color: var(--color-icon-secondary);
}
.label {
  min-width: 0;
  /* Figma 182:7 is Inter Medium 13 / 125 % with no text style bound (the DS has no IM-13); the stack is the DS one */
  font-family: var(--font-family-base); /* no token: Figma 182:7 */
  font-size: 13px; /* no token: Figma 182:7 */
  font-weight: 500; /* no token: Figma 182:7 */
  line-height: 1.25; /* no token: Figma 182:7 */
  letter-spacing: 0;
}
`;function a(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:c}),`
`,n.jsx(e.h1,{id:"feature-badge",children:"Feature badge"}),`
`,n.jsx(e.p,{children:"Плашка «что входит» на странице экскурсии: иконка и короткая подпись на сером. «Услуги гида», «Фото и видео», «Проживание в отеле». Она ничего не открывает, это просто список."}),`
`,n.jsxs(e.p,{children:["Figma: ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=182-4",rel:"nofollow",children:"Feature badge 182:4"}),". Один компонент без вариантов: свойства Label и Icon (instance swap)."]}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(o,{of:r}),`
`,n.jsx(e.h2,{id:"использование",children:"Использование"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { FeatureBadge, CompassIcon, CameraIcon } from '@mtravel/ui';

<FeatureBadge icon={<CompassIcon />}>Услуги гида</FeatureBadge>
<FeatureBadge icon={<CameraIcon />}>Фото и видео</FeatureBadge>
`})}),`
`,n.jsxs(e.p,{children:["Положи плашки в ",n.jsx(e.code,{children:"display: flex; flex-wrap: wrap; gap: 8px"}),": в ряд, с переносом."]}),`
`,n.jsx(e.h2,{id:"варианты",children:"Варианты"}),`
`,n.jsx(i,{of:l}),`
`,n.jsxs(e.p,{children:["Высота от 48, ширина по содержимому. Подпись переносится на вторую строку, если не помещается. Иконка 20 px ",n.jsx(e.code,{children:"icon/secondary"}),", подпись ",n.jsx(e.code,{children:"control/text/default"}),", фон ",n.jsx(e.code,{children:"bg/sunken-subtle"}),", скругление ",n.jsx(e.code,{children:"radius/lg"}),", отступы 8 16 8 12, зазор ",n.jsx(e.code,{children:"spacing/sm"}),"."]}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(e.p,{children:"«Что включено?» на детальной странице."}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h2,{id:"отличия-от-figma-и-вопросы",children:"Отличия от Figma и вопросы"}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"Что"}),n.jsx(e.th,{children:"В Figma"}),n.jsx(e.th,{children:"В коде"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Шрифт подписи"}),n.jsx(e.td,{children:"Inter Medium 13 / 125 %, текстовый стиль не привязан, в описании «IM-13», а такого стиля в DS нет (размеры чётные)"}),n.jsx(e.td,{children:"13 / 500 / 1.25 как есть. Нужно решение: IM-14 M или привязать стиль"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"Текст в макете"}),n.jsx(e.td,{children:"«Фото в видео»"}),n.jsx(e.td,{children:"в кейсе «Фото и видео», в макете, скорее всего, опечатка"})]})]})]}),`
`,n.jsx(x,{css:j}),`
`,n.jsx(e.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Подпись 13 px, 500, 125 % (Figma 182:7)."}),`
`]}),`
`,n.jsx(e.h2,{id:"доступность",children:"Доступность"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Это обычный текст, иконка декоративная (",n.jsx(e.code,{children:"aria-hidden"}),"). Скринридер читает только подпись."]}),`
`,n.jsxs(e.li,{children:["Контраст ",n.jsx(e.code,{children:"text/primary"})," на ",n.jsx(e.code,{children:"bg/sunken-subtle"})," выше 7:1."]}),`
`]})]})}function w(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(a,{...s})}):a(s)}export{w as default};
