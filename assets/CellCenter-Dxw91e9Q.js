import{j as e}from"./iframe-DuqTOznb.js";import{u as r,M as d,C as s,a as c}from"./blocks-CaaIEU4k.js";import{C as h,P as l,T as o,a as x,b as j}from"./CellCenter.stories-zgsaykXS.js";import{U as a}from"./DocTables-DRoO9HBp.js";import{c as m}from"./CellCenter.module-hRctf1Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./CellCenter-CXZRRsHl.js";import"./cx-2dOUpm6k.js";import"./Skeleton-D5GPHumj.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./tokens-INIU3VNa.js";function i(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(t.h1,{id:"cell-center",children:"Cell Center"}),`
`,e.jsxs(t.p,{children:["Текстовый блок строки ",e.jsx(t.a,{href:"?path=/docs/components-cell--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Cell"}),": заголовок и при необходимости вторая строка. Берите Cell целиком; Center отдельно нужен, когда строку со своей раскладкой надо оформить тем же текстом."]}),`
`,e.jsxs(t.p,{children:["Figma: ",e.jsx(t.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=45-105",rel:"nofollow",children:"Center 45:105"}),": Type Title 17 | Title 15 | Title + Subtitle | Label + Title × State Default | Shimmer."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(t.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<CellCenter title="Бишкек" subtitle="29 мая, 1 участник" />
<CellCenter label="Участники" title="2 человека" />
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"variant"})," (Figma Type) выводится из текстов: с ",e.jsx(t.code,{children:"label"})," это Label + Title, с ",e.jsx(t.code,{children:"subtitle"})," это Title + Subtitle, иначе один заголовок."]}),`
`,e.jsx(t.h2,{id:"варианты",children:"Варианты"}),`
`,e.jsx(s,{of:o}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Figma Type"}),e.jsxs(t.th,{children:["Значение ",e.jsx(t.code,{children:"variant"})]}),e.jsx(t.th,{children:"Текст"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Title 17 и Title 15"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"title"})}),e.jsxs(t.td,{children:["IM-16 M, ",e.jsx(t.code,{children:"control/text/default"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Title + Subtitle"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"title-subtitle"})}),e.jsxs(t.td,{children:["под заголовком IM-14 R, ",e.jsx(t.code,{children:"control/text/tertiary"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"Label + Title"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"label-title"})}),e.jsxs(t.td,{children:["над заголовком IM-14 R, ",e.jsx(t.code,{children:"control/text/secondary"})]})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"State = Shimmer"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"skeleton"})}),e.jsxs(t.td,{children:["полоски 180 и 80 × 6, радиус ",e.jsx(t.code,{children:"radius/xs"}),", блик Skeleton"]})]})]})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:'as="span"'})," нужен, когда Center лежит внутри ",e.jsx(t.code,{children:"<button>"})," или ",e.jsx(t.code,{children:"<a>"}),": там ",e.jsx(t.code,{children:"div"})," недопустим (Cell так и делает). ",e.jsx(t.code,{children:"ref"})," и остальные атрибуты попадают на корневой элемент."]}),`
`,e.jsxs(t.p,{children:["Строка двухстрочного Center — полоса высотой 20, у однострочного заголовка полоса 24; сверху и снизу отступ ",e.jsx(t.code,{children:"spacing/xs"}),". Одна строка занимает 32 (скелетон 28), две 48. Строки не переносятся и обрезаются многоточием (в Figma заголовок и подзаголовок переносятся до 2 строк — вопрос к дизайну)."]}),`
`,e.jsx(t.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(t.p,{children:"История поиска («Куда отправимся?») и подпись над значением в деталях заказа."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h2,{id:"вопросы-к-figma",children:"Вопросы к Figma"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["«Title 17» и «Title 15» — два варианта с одним и тем же стилем IM-16 M. Названия остались от размеров 17 и 15, до того как стили стали чётными. В коде один ",e.jsx(t.code,{children:"title"}),"; в Figma их стоит слить или развести."]}),`
`]}),`
`,e.jsx(a,{css:m}),`
`,e.jsx(t.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(t.p,{children:["Текст — обычные ",e.jsx(t.code,{children:"span"}),". Подпись и заголовок читаются подряд. Полоски skeleton скрыты от скринридера, а Cell объявляет «Загрузка»."]})]})}function w(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{w as default};
