import{j as e}from"./iframe-Dr5ib33t.js";import{u as i,M as o}from"./blocks-BQDa-jFX.js";import{T as s}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./tokens-CNIzVYFy.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Токены"}),`
`,e.jsx(n.h1,{id:"токены",children:"Токены"}),`
`,e.jsx(n.p,{children:"Все переменные из Figma «DS - Mtravel 2.0» в трёх уровнях. Компоненты используют только компонентные и семантические токены, примитивы напрямую не трогают."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`примитив               семантика                    компонент
--color-base-gray-50 → --color-bg-sunken-subtle → --counter-bg-button-disabled
`})}),`
`,e.jsxs(n.p,{children:["Файлы в ",e.jsx(n.code,{children:"src/tokens/generated/"})," собирает ",e.jsx(n.code,{children:"npm run tokens"})," из ",e.jsx(n.code,{children:"tokens/figma-export.json"}),". Руками их не правим: меняем переменную в Figma, выгружаем заново, перегенерируем."]}),`
`,e.jsx(n.h2,{id:"02--компоненты",children:"02 · Компоненты"}),`
`,e.jsx(s,{tier:"component"}),`
`,e.jsx(n.h2,{id:"01--семантика",children:"01 · Семантика"}),`
`,e.jsx(s,{tier:"semantic"}),`
`,e.jsx(n.h2,{id:"00--примитивы",children:"00 · Примитивы"}),`
`,e.jsx(s,{tier:"primitive"}),`
`,e.jsx(n.h2,{id:"размеры-радиусы-блюр",children:"Размеры, радиусы, блюр"}),`
`,e.jsx(s,{tier:"size"}),`
`,e.jsx(n.h2,{id:"тени-и-блюр-effect-styles",children:"Тени и блюр (Effect styles)"}),`
`,e.jsx(s,{tier:"effect"}),`
`,e.jsx(n.h2,{id:"типографика-text-styles",children:"Типографика (Text styles)"}),`
`,e.jsxs(n.p,{children:["Каждый стиль доступен и переменными (",e.jsx(n.code,{children:"font: var(--font-im-16-b); letter-spacing: var(--tracking-im-16-b)"}),"), и классом ",e.jsx(n.code,{children:".im-16-b"}),"."]}),`
`,e.jsx(s,{tier:"typography"})]})}function m(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{m as default};
