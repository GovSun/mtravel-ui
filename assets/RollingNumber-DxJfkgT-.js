import{j as e}from"./iframe-DuqTOznb.js";import{u as c,M as l,C as r,a as o}from"./blocks-CaaIEU4k.js";import{R as t,P as i,E as h,C as x}from"./RollingNumber.stories-uLd7Qz-o.js";import{M as j,U as a}from"./DocTables-DRoO9HBp.js";import{c as m}from"./RollingNumber.module-C3mEhYjn.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./RollingNumber-BIb_2A9U.js";import"./cx-2dOUpm6k.js";import"./motion-C-Q-avtg.js";import"./Button-CKwNO4NU.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./tokens-INIU3VNa.js";function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"rollingnumber",children:"RollingNumber"}),`
`,e.jsxs(n.p,{children:["Число, у которого меняются разряды: каждая изменившаяся цифра прокатывается по вертикали, как в одометре. Это число внутри ",e.jsx(n.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"}),"; отдельно его берут для сумм и счётчиков, которые меняют по одному тапу. Для значения, которое бежит каждый кадр (ползунок), есть ",e.jsx(n.a,{href:"?path=/docs/components-swapnumber--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SwapNumber"}),": он меняет число целиком."]}),`
`,e.jsxs(n.p,{children:["Figma: отдельного компонента нет, это анимация в коде; её геометрия и время описаны в ",e.jsx(n.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"Counter"}),"."]}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(n.h2,{id:"использование",children:"Использование"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { RollingNumber } from '@mtravel/ui';

<RollingNumber value={adults} />
<RollingNumber value={price} format={(v) => \`\${v.toLocaleString('ru-RU')} ⃀\`} effect="slide" />
`})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Проп"}),e.jsx(n.th,{children:"Что делает"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"value"})}),e.jsx(n.td,{children:"число"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"format"})}),e.jsx(n.td,{children:"как записать число, по умолчанию просто цифры"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"effect"})}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"drum"})," (по умолчанию): цифры на маленьком цилиндре, переворачиваются через верхний или нижний край; ",e.jsx(n.code,{children:"slide"}),": прямой сдвиг. Оба с размытием в движении"]})]}),e.jsxs(n.tr,{children:[e.jsxs(n.td,{children:[e.jsx(n.code,{children:"className"}),", ",e.jsx(n.code,{children:"style"}),", ",e.jsx(n.code,{children:"ref"}),", остальные атрибуты"]}),e.jsxs(n.td,{children:["на корневой ",e.jsx(n.code,{children:"<span>"})]})]})]})]}),`
`,e.jsx(n.h2,{id:"движение",children:"Движение"}),`
`,e.jsx(r,{of:h}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Больше: старая цифра уходит вверх, новая приходит снизу; меньше: наоборот."}),`
`,e.jsx(n.li,{children:"Двигаются только изменившиеся разряды: 19 → 20 катит оба, 20 → 21 только последний."}),`
`,e.jsx(n.li,{children:"Размытие растёт с расстоянием от центра: в покое цифра чёткая, в движении мягкая, и две цифры сливаются в одно движение."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Прерывается."})," Новое значение посреди прокрутки стартует с того места, где цифра сейчас на экране. Быстрые нажатия и автоповтор вращают колесо, а не перезапускают его."]}),`
`,e.jsx(n.li,{children:"Ширины цифр разные (в Inter Mbank нет табличных цифр), поэтому ширина разряда тоже анимируется. Разряды не пропадают из разметки: 100 → 99 оставляет пустой нулевой разряд, чтобы уходящая цифра не обрезалась."}),`
`,e.jsxs(n.li,{children:["Только ",e.jsx(n.code,{children:"transform"}),", ",e.jsx(n.code,{children:"filter"})," и ",e.jsx(n.code,{children:"opacity"})," (WAAPI), без перерисовки макета, кроме ширины разряда."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion:"})," короткая смена прозрачностью на месте, без движения и размытия."]}),`
`]}),`
`,e.jsx(n.h2,{id:"доступность",children:"Доступность"}),`
`,e.jsxs(n.p,{children:["Для скринридера число лежит целиком в скрытом по визуалу тексте (",e.jsx(n.code,{children:"srOnly"}),"), катящиеся цифры спрятаны (",e.jsx(n.code,{children:"aria-hidden"}),"). Сообщать об изменении должен родитель (у Counter значение это ",e.jsx(n.code,{children:"output"})," с ",e.jsx(n.code,{children:'aria-live="polite"'}),")."]}),`
`,e.jsx(n.h2,{id:"кейсы",children:"Кейсы"}),`
`,e.jsx(r,{of:x}),`
`,e.jsxs(n.p,{children:["Разряд появляется и исчезает: ",e.jsx(n.code,{children:"9 → 10 → 9"}),"."]}),`
`,e.jsx(j,{prefix:"--counter-motion-roll"}),`
`,e.jsx(n.h2,{id:"токены",children:"Токены"}),`
`,e.jsxs(n.p,{children:["Своих токенов у компонента нет, время и геометрию задают ",e.jsx(n.code,{children:"--counter-motion-roll-*"})," (таблица выше). Цвет и шрифт наследуются от родителя."]}),`
`,e.jsx(a,{css:m})]})}function F(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{F as default};
