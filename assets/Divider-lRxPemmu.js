import{j as e}from"./iframe-DuqTOznb.js";import{u as c,M as t,C as i,a as l}from"./blocks-CaaIEU4k.js";import{D as o,P as r,V as h,C as x}from"./Divider.stories-BbwDz-Hf.js";import{U as a}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./Divider-BbjTiNWY.js";import"./cx-2dOUpm6k.js";import"./tokens-INIU3VNa.js";const j=`/* Divider (Figma 723:398): Variant Inset | Full, 1 px line filled with divider/border/default. */
.root {
  /* no token: Figma 723:394 — the inset is a raw 60 px padding (16 edge + 32 icon + 12 gap) */
  --_inset: 60px;
  --_inset-end: 0px;
  /* the line colour; a container on a sunken surface (Cell with Background) switches it to divider/border/on-sunken */
  --_color: var(--divider-border-default);
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  padding-left: 0;
}
.root::before {
  content: '';
  display: block;
  height: 1px;
  margin-left: 0;
  margin-right: var(--_inset-end);
  background: var(--_color);
}
.root[data-variant='inset']::before,
.root[data-custom-inset]::before {
  margin-left: var(--_inset);
}
`;function s(d){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:o}),`
`,e.jsx(n.h1,{id:"divider",children:"Divider"}),`
`,e.jsx(n.p,{children:"Тонкая линия между строками списка. Не ставьте её между блоками на экране: для этого хватает отступов."}),`
`,e.jsxs(n.p,{children:["Figma: ",e.jsx(n.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=723-398",rel:"nofollow",children:"Divider 723:398"}),": Type Inset | Full. В коде ось называется ",e.jsx(n.code,{children:"variant"}),"."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Divider />                       // inset: начинается на 60 px, под текстом строки с иконкой
<Divider variant="full" />        // во всю ширину
<Divider inset={0} insetEnd={76} /> // свои отступы: от левого и от правого края
`})}),`
`,e.jsxs(n.p,{children:["В Cell она включается пропом ",e.jsx(n.code,{children:"divider"})," и лежит по нижнему краю строки."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(n.p,{children:["Высота 1 px, цвет ",e.jsx(n.code,{children:"divider/border/default"}),". Inset отступает на 60 px слева: 16 от края, 32 иконка и 12 зазор (в Figma это не токен, а значение отступа в 723:394)."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Проп"}),e.jsx(n.th,{children:"Тип"}),e.jsx(n.th,{children:"По умолчанию"}),e.jsx(n.th,{children:"Описание"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"variant"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'inset' | 'full'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'inset'"})}),e.jsx(n.td,{children:"Figma Type."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"inset"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number | string"})}),e.jsxs(n.td,{children:["60 для ",e.jsx(n.code,{children:"inset"}),", 0 для ",e.jsx(n.code,{children:"full"})]}),e.jsx(n.td,{children:"Отступ слева. Число в px."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"insetEnd"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number | string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"0"})}),e.jsx(n.td,{children:"Отступ справа."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"decorative"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"false"})," даёт ",e.jsx(n.code,{children:'role="separator"'}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"as"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'div' | 'span'"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"'div'"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"span"})," нужен внутри ",e.jsx(n.code,{children:"<button>"})," и ",e.jsx(n.code,{children:"<a>"}),": там ",e.jsx(n.code,{children:"div"})," недопустим."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ref"})," и остальные атрибуты (",e.jsx(n.code,{children:"data-*"}),", ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"style"}),") попадают на корневой элемент."]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsxs(n.p,{children:["Линия в карточке «Откуда / Куда» (Figma 1328:4971): начинается у края и заканчивается раньше кнопки обмена. Для неё ",e.jsx(n.code,{children:"inset={0}"})," и ",e.jsx(n.code,{children:"insetEnd={76}"}),", свои переменные карточке больше не нужны."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(a,{css:j}),`
`,e.jsx(n.h2,{id:"без-токенов-в-ds",children:"Без токенов в DS"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Отступ ",e.jsx(n.code,{children:"inset"})," 60 px: в Figma это сырой отступ (723:394)."]}),`
`]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.p,{children:["По умолчанию линия декоративна (",e.jsx(n.code,{children:"aria-hidden"}),"). Если разделяете блоки по смыслу, передайте ",e.jsx(n.code,{children:"decorative={false}"}),", и появится ",e.jsx(n.code,{children:'role="separator"'}),"."]})]})}function w(d={}){const{wrapper:n}={...c(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(s,{...d})}):s(d)}export{w as default};
