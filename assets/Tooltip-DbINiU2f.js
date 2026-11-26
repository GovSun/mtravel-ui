import{j as o}from"./iframe-DyD5Yel4.js";import{u as t,M as p,C as r,a}from"./blocks-CcI75u3-.js";import{T as c,P as s,V as l,S as d,C as m}from"./Tooltip.stories-C_ql6Txw.js";import{U as h}from"./DocTables-D5FjzMKu.js";import{c as x}from"./Tooltip.module-9qsQhWup.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B4Qwgqau.js";import"./index-Cd2-pIib.js";import"./RangeSlider-D15sdW9U.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BZQLIp5G.js";import"./motion-C-Q-avtg.js";import"./useControllableState-D9cJCl43.js";import"./SwapNumber-CCAZxiM8.js";import"./Button-grGIhY78.js";import"./Pressable-CAjp7WdB.js";import"./usePress-XYzAalw7.js";import"./tokens-Bc2_NrJ2.js";function i(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:c}),`
`,o.jsx(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsxs(e.p,{children:["Тёмный пузырь со значением и хвостиком вниз: показывает число над объектом, который держат. Это пузырь со значением, а не всплывающая подсказка по наведению или фокусу: у него нет триггера, задержки и роли, он декоративный (значение озвучивает сам ползунок). Сейчас живёт в ",o.jsx(e.a,{href:"?path=/docs/components-rangeslider--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RangeSlider"}),": сумма над ползунком."]}),`
`,o.jsxs(e.p,{children:["Figma: ",o.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=1271-23",rel:"nofollow",children:"tooltip 1271:23"}),", свойство Value."]}),`
`,o.jsx(r,{of:s}),`
`,o.jsx(a,{of:s}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Tooltip, SwapNumber } from '@mtravel/ui';

<Tooltip>81</Tooltip>
<Tooltip><SwapNumber value={price} format={som} /></Tooltip>
`})}),`
`,o.jsxs(e.p,{children:["Пузырь высотой 28, тянется под значение, по бокам по 8 px, скругление ",o.jsx(e.code,{children:"radius/md"}),", фон ",o.jsx(e.code,{children:"control/bg/selected"}),", значение IM-12 S ",o.jsx(e.code,{children:"text/inverse/primary"}),". Хвостик 14 × 6 по центру снизу: бока плавно выходят из пузыря и сходятся в острый кончик. Положение и движение — у того, кто показывает подсказку: сам Tooltip ничего не двигает."]}),`
`,o.jsx(e.h2,{id:"значения",children:"Значения"}),`
`,o.jsx(r,{of:l}),`
`,o.jsx(e.h2,{id:"сумма-меняется-целиком",children:"Сумма меняется целиком"}),`
`,o.jsx(r,{of:d}),`
`,o.jsxs(e.p,{children:["Внутри ",o.jsx(e.a,{href:"?path=/docs/components-swapnumber--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"SwapNumber"}),". Пузырь обрезает содержимое по своему скруглению, поэтому размытое число не вылезает наружу, даже когда подсказка наклонена."]}),`
`,o.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,o.jsx(e.p,{children:"Сумма над ползунком в фильтре «Цена»: потяните ползунок, пузырь идёт за ним."}),`
`,o.jsx(r,{of:m}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"Tooltip"})," принимает ",o.jsx(e.code,{children:"ref"})," и атрибуты корня."]}),`
`,o.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,o.jsx(h,{css:x})]})}function V(n={}){const{wrapper:e}={...t(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(i,{...n})}):i(n)}export{V as default};
