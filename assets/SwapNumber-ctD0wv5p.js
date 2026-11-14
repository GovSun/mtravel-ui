import{j as n}from"./iframe-Dr5ib33t.js";import{u as t,M as l,C as s,a}from"./blocks-BQDa-jFX.js";import{S as c,P as o,F as d}from"./SwapNumber.stories-DSO7mw9J.js";import{M as m}from"./DocTables-CsguvFim.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BAdrHWJM.js";import"./index-Bc0N6I3Z.js";import"./SwapNumber--J413Mcm.js";import"./motion-C-Q-avtg.js";import"./RollingNumber-sUZvUyU1.js";import"./Button-DFQPOwGN.js";import"./usePress-6Rv7_Jz7.js";import"./tokens-CNIzVYFy.js";function i(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:c}),`
`,n.jsx(r.h1,{id:"swapnumber",children:"SwapNumber"}),`
`,n.jsxs(r.p,{children:["Число, которое меняется целиком: старое уезжает и размывается, новое въезжает с другой стороны и становится чётким. Для значений, которые меняются часто и быстро: сумма над ползунком ",n.jsx(r.a,{href:"?path=/docs/components-rangeslider--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RangeSlider"}),", суммы в фильтрах. Для счётчика, который меняют по одному тапу, есть ",n.jsx(r.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RollingNumber"}),": он катит каждый разряд отдельно."]}),`
`,n.jsx(s,{of:o}),`
`,n.jsx(a,{of:o}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-tsx",children:"import { SwapNumber } from '@mtravel/ui';\n\n<SwapNumber value={price} format={(v) => `${v.toLocaleString('ru-RU')} ⃀`} />\n"})}),`
`,n.jsx(r.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Целиком, а не по разрядам."})," Старое число уезжает по вертикали на 8 px, размываясь до 3 px и угасая. Новое въезжает с другой стороны, из размытия в чёткость. Посередине оба мягкие и сливаются в одно движение, отдельные цифры не мелькают."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Направление:"})," больше — новое снизу, старое уходит вверх; меньше — наоборот."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Быстро:"})," въезд 140 мс, уход 120 мс, ease-out cubic: мягче обычного ease-out, чтобы середина, где числа сливаются, успевала читаться."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"По одной смене за раз."})," Следующая начинается, когда предыдущая доехала, и последнее значение показывается всегда. Если значение меняется каждый кадр, например при перетаскивании слайдера, число меняется несколько раз в секунду и успевает прочитаться."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Ширина"})," плавно подстраивается под новое число: в Inter Mbank цифры разной ширины."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"Reduced motion:"})," короткая смена прозрачностью на месте, без движения и размытия."]}),`
`]}),`
`,n.jsx(r.h2,{id:"целиком-и-по-разрядам",children:"Целиком и по разрядам"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(r.p,{children:"При частой смене RollingNumber катит каждый разряд, и цифры мелькают. SwapNumber меняет число целиком в своём темпе."}),`
`,n.jsx(m,{prefix:"--swap-number-"})]})}function w(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{w as default};
