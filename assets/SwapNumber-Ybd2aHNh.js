import{j as n}from"./iframe-DuqTOznb.js";import{u as l,M as t,C as s,a as c}from"./blocks-CaaIEU4k.js";import{S as d,P as i,F as a,C as h}from"./SwapNumber.stories-86zhNS1p.js";import{M as x}from"./DocTables-DRoO9HBp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWuNR-wq.js";import"./index-DUzVQHBb.js";import"./SwapNumber-zCGpbL_Z.js";import"./cx-2dOUpm6k.js";import"./mergeRefs-BPT53vMC.js";import"./motion-C-Q-avtg.js";import"./Button-CKwNO4NU.js";import"./Pressable-D45JnRku.js";import"./usePress-DgMUH5X0.js";import"./RollingNumber-BIb_2A9U.js";import"./tokens-INIU3VNa.js";function o(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(e.h1,{id:"swapnumber",children:"SwapNumber"}),`
`,n.jsxs(e.p,{children:["Число, которое меняется целиком: старое уезжает и размывается, новое въезжает с другой стороны и становится чётким. Для значений, которые меняются часто и быстро: сумма над ползунком ",n.jsx(e.a,{href:"?path=/docs/components-rangeslider--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RangeSlider"}),", суммы в фильтрах. Для счётчика, который меняют по одному тапу, есть ",n.jsx(e.a,{href:"?path=/docs/components-counter--%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F",children:"RollingNumber"}),": он катит каждый разряд отдельно."]}),`
`,n.jsxs(e.p,{children:["Figma: отдельного компонента нет, это анимация в коде; используется в подсказке над ",n.jsx(e.a,{href:"https://www.figma.com/design/Enj0CUGKB1uJvXiWt7Vu8P/Design-System---Mtravel-2.0?node-id=398-1345",rel:"nofollow",children:"slider_range 398:1345"}),"."]}),`
`,n.jsx(s,{of:i}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:"import { SwapNumber } from '@mtravel/ui';\n\n<SwapNumber value={price} format={(v) => `${v.toLocaleString('ru-RU')} ⃀`} />\n"})}),`
`,n.jsx(e.h2,{id:"движение",children:"Движение"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Целиком, а не по разрядам."})," Старое число уезжает по вертикали на 8 px, размываясь до 3 px и угасая. Новое въезжает с другой стороны, из размытия в чёткость. Посередине оба мягкие и сливаются в одно движение, отдельные цифры не мелькают."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Направление:"})," больше — новое снизу, старое уходит вверх; меньше — наоборот."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Одна смена"}),", например по тапу: въезд 180 мс, уход 140 мс, ease-out cubic, и число встаёт чётким."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Значение бежит"}),", например когда тянут слайдер: смена не чаще раза в 100 мс, и всё это время число остаётся мягким и чуть приглушённым (размытие 1 px, прозрачность 0.72), как крутящееся колесо. Между сменами оно не вспыхивает чётким, поэтому не мигает и не дёргается. Когда значение остановилось, последнее число за 220 мс становится чётким. Последнее значение показывается всегда."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Без провала яркости:"})," новое число проявляется быстрее, чем гаснет старое, поэтому вместе они не темнеют."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Ширина"})," плавно подстраивается под число: в Inter Mbank цифры разной ширины. Пока значение бежит, ширина только растёт, и подсказка вокруг не «дышит» с каждой сменой. Под итоговое число она подстраивается на остановке."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reduced motion:"})," короткая смена прозрачностью на месте, без движения, размытия и мягкого состояния."]}),`
`]}),`
`,n.jsx(e.h2,{id:"целиком-и-по-разрядам",children:"Целиком и по разрядам"}),`
`,n.jsx(s,{of:a}),`
`,n.jsx(e.p,{children:"При частой смене RollingNumber катит каждый разряд, и цифры мелькают. SwapNumber меняет число целиком в своём темпе и, пока значение бежит, держит его мягким."}),`
`,n.jsx(e.h2,{id:"кейсы",children:"Кейсы"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.p,{children:"Сумма над ползунком цены. Один тап меняет число целиком; пока ползунок тянут, число остаётся мягким, а последнее значение показывается всегда."}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"SwapNumber"})," принимает ",n.jsx(e.code,{children:"ref"}),", ",n.jsx(e.code,{children:"className"}),", ",n.jsx(e.code,{children:"style"})," и остальные атрибуты на корневой ",n.jsx(e.code,{children:"<span>"}),". Для скринридера число лежит целиком в скрытом по визуалу тексте, анимируемые слои спрятаны."]}),`
`,n.jsx(x,{prefix:"--swap-number-"}),`
`,n.jsx(e.h2,{id:"токены",children:"Токены"}),`
`,n.jsxs(e.p,{children:["Своих цветов и размеров у компонента нет: шрифт и цвет наследуются от родителя, а время, расстояние и размытие заданы токенами ",n.jsx(e.code,{children:"--swap-number-*"})," выше. Токены Figma не используются."]})]})}function R(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(o,{...r})}):o(r)}export{R as default};
